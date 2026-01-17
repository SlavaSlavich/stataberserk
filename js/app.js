document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

// Global State
let activeFilters = {
    time: [],
    league: [],
    team1: [],
    team2: [],
    score: [],
    "odds.p1": [],
    "odds.p2": []
};

// Helper to access nested properties safely (e.g. "odds.p1")
function getNestedValue(obj, path) {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
}

function initApp() {
    updateClock();
    setInterval(updateClock, 1000);

    setupNavigation();
    setupMobileToggle();
    setupFilters(); // New Table Filter Logic
    // setupSidebarLeague(); // Removed as per user request

    // Default render
    renderDashboard();
    renderLiveSection();
}

/* --- MOBILE TOGGLE --- */
function setupMobileToggle() {
    const toggleBtn = document.getElementById('sidebarToggle');
    const sidebar = document.getElementById('sidebar');

    if (toggleBtn && sidebar) {
        toggleBtn.addEventListener('click', () => {
            sidebar.classList.toggle('open');
        });

        document.addEventListener('click', (e) => {
            if (!sidebar.contains(e.target) && !toggleBtn.contains(e.target) && sidebar.classList.contains('open')) {
                sidebar.classList.remove('open');
            }
        });
    }
}

/* --- NAVIGATION --- */
function setupNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.view-section');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navItems.forEach(nav => nav.classList.remove('active'));
            sections.forEach(sec => sec.classList.remove('active'));

            item.classList.add('active');

            const tabName = item.dataset.tab;
            const sectionId = `view-${tabName}`;
            const targetSection = document.getElementById(sectionId);

            if (targetSection) {
                targetSection.classList.add('active');
            }

            const sidebar = document.getElementById('sidebar');
            if (window.innerWidth <= 768 && sidebar) {
                sidebar.classList.remove('open');
            }
        });
    });
}

function updateClock() {
    const clock = document.getElementById('app-clock');
    if (clock) {
        const now = new Date();
        const dateString = now.toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit', year: 'numeric' });
        const timeString = now.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
        clock.innerHTML = `<span style="opacity:0.6; font-size: 0.8em; margin-right: 10px;">${dateString}</span> ${timeString}`;
    }
}

/* --- SIDEBAR LEAGUE SELECTOR --- */
function setupSidebarLeague() {
    const selector = document.getElementById('sidebar-league-select');
    const dropdown = document.getElementById('sidebar-league-dropdown');
    const currentText = document.getElementById('sidebar-league-current');

    if (!selector || !dropdown) return;

    // Toggle Dropdown
    selector.addEventListener('click', (e) => {
        e.stopPropagation();
        const isVisible = dropdown.style.display === 'block';

        // Close other filters
        closeAllDropdowns();

        dropdown.style.display = isVisible ? 'none' : 'block';
        if (isVisible) {
            selector.style.borderColor = '';
        } else {
            selector.style.borderColor = 'var(--primary-color)';
        }
    });

    // Populate Options
    const safeHistory = (typeof MATCH_HISTORY !== 'undefined') ? MATCH_HISTORY : [];

    // 1. Extract Unique Leagues (Trimmed)
    const rawLeagues = safeHistory.map(m => m.league ? m.league.toString().trim() : '').filter(l => l);
    let leagues = [...new Set(rawLeagues)];

    // 2. Sort: Berserk first, then Alphabetical
    leagues.sort((a, b) => {
        const isBerserkA = a.toLowerCase().includes('berserk');
        const isBerserkB = b.toLowerCase().includes('berserk');
        if (isBerserkA && !isBerserkB) return -1;
        if (!isBerserkA && isBerserkB) return 1;
        return a.localeCompare(b);
    });

    // Clear existing to prevent duplicates
    dropdown.innerHTML = '';

    // "All" Option
    const allOption = document.createElement('div');
    allOption.className = 'filter-item';
    allOption.innerHTML = '<span>Все</span>';
    allOption.style.color = 'var(--text-muted)';
    allOption.style.borderBottom = '1px solid rgba(255,255,255,0.05)';
    allOption.addEventListener('click', () => {
        activeFilters.league = [];
        currentText.textContent = 'Все';
        dropdown.style.display = 'none';
        selector.style.borderColor = '';
        applyFilters();
    });
    dropdown.appendChild(allOption);

    // League Options
    leagues.forEach(league => {
        const item = document.createElement('div');
        item.className = 'filter-item';
        item.innerHTML = `<span>${league}</span>`;
        item.addEventListener('click', () => {
            // Set global filter
            activeFilters.league = [league];
            currentText.textContent = league;
            dropdown.style.display = 'none';
            selector.style.borderColor = '';
            applyFilters();
        });
        dropdown.appendChild(item);
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
        if (!selector.contains(e.target) && !dropdown.contains(e.target)) {
            dropdown.style.display = 'none';
            selector.style.borderColor = '';
        }
    });
}

/* --- FILTERS (Table) --- */
function setupFilters() {
    const triggers = document.querySelectorAll('.filter-trigger');

    triggers.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const col = btn.dataset.col;
            toggleFilterDropdown(btn, col);
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.filter-dropdown-menu') && !e.target.closest('.filter-trigger')) {
            closeAllDropdowns();
        }
    });
}

function toggleFilterDropdown(btn, col) {
    // If this one is already open, close it
    const existing = btn.querySelector('.filter-dropdown-menu');
    if (existing) {
        existing.remove();
        btn.classList.remove('active');
        return;
    }

    closeAllDropdowns(); // Close others first

    btn.classList.add('active');

    // Create Dropdown
    const dropdown = document.createElement('div');
    dropdown.className = 'filter-dropdown-menu show';

    // SPECIAL CASE: Date/Time Filter -> Text Input
    if (col === 'time') {
        dropdown.style.padding = '10px';
        dropdown.style.minWidth = '220px';

        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = 'Напр: 15-05 или 13:00...';
        input.value = activeFilters[col][0] || '';
        input.style.width = '100%';
        input.style.padding = '8px';
        input.style.borderRadius = '6px';
        input.style.border = '1px solid rgba(255,255,255,0.2)';
        input.style.background = 'rgba(255,255,255,0.05)';
        input.style.color = '#fff';
        input.style.fontSize = '13px';
        input.style.outline = 'none';

        // Prevent dropdown closing when clicking input
        input.addEventListener('click', (e) => e.stopPropagation());

        input.addEventListener('input', (e) => {
            const val = e.target.value.trim();
            if (val) {
                activeFilters[col] = [val]; // Store search term
            } else {
                activeFilters[col] = [];
            }
            applyFilters();
        });

        dropdown.appendChild(input);

        // Focus input
        setTimeout(() => input.focus(), 0);

        btn.appendChild(dropdown);
        return;
    }

    // STANDARD DROPDOWN (List of values)
    const safeHistory = (typeof MATCH_HISTORY !== 'undefined') ? MATCH_HISTORY : [];
    const valuesRaw = safeHistory.map(m => {
        const val = getNestedValue(m, col);
        return val !== undefined ? String(val).trim() : '-';
    });
    let values = [...new Set(valuesRaw)].sort();

    // Sorting Logic
    if (col === 'league') {
        values.sort((a, b) => {
            // Prioritize "Berserk" related leagues
            const isBerserkA = a.toLowerCase().includes('berserk');
            const isBerserkB = b.toLowerCase().includes('berserk');

            if (isBerserkA && !isBerserkB) return -1;
            if (!isBerserkA && isBerserkB) return 1;
            return a.localeCompare(b);
        });
    } else {
        values.sort();
    }

    if (values.length === 0) {
        dropdown.innerHTML = '<div style="padding:10px; color:#fff;">Нет данных</div>';
    } else {
        // "All" option (formerly Reset)
        const resetItem = document.createElement('div');
        resetItem.className = 'filter-item';
        resetItem.innerHTML = '<span>Все</span>';
        resetItem.style.color = 'var(--text-muted)';
        resetItem.style.borderBottom = '1px solid rgba(255,255,255,0.05)';
        resetItem.addEventListener('click', () => {
            activeFilters[col] = [];
            applyFilters();
            closeAllDropdowns();
        });
        dropdown.appendChild(resetItem);

        values.forEach(val => {
            const item = document.createElement('div'); // changed from label to div
            item.className = 'filter-item';
            const isChecked = activeFilters[col].includes(val);

            // Visual indicator instead of checkbox
            if (isChecked) {
                item.style.background = 'rgba(0, 255, 136, 0.1)';
                item.style.color = 'var(--primary-color)';
                item.innerHTML = `<span>${val}</span> <i class="fa-solid fa-check" style="margin-left:auto;"></i>`;
            } else {
                item.innerHTML = `<span>${val}</span>`;
            }

            item.addEventListener('click', (e) => {
                // Toggle logic
                if (activeFilters[col].includes(val)) {
                    activeFilters[col] = activeFilters[col].filter(v => v !== val);
                } else {
                    activeFilters[col].push(val);
                }
                applyFilters();
                // Re-open/refresh this dropdown to show new state? 
                // Or just close it? Usually filters stay open or apply immediately.
                // Let's keep it consistent with previous UX: user clicks, it updates.
                // Re-rendering the whole dropdown would be cleaner but complex here.
                // Simple approach: apply filters and close dropdown for single select feel,
                // OR just update visual state. 
                // Given "click to select", often behaves like single select or needs manual close.
                // Current implementation closed on "All/Reset", but kept open on checkbox.
                // Let's update visual state manually here for better UX without full re-render.

                // NOTE: User probably expects a single click to filter since they asked to remove checkboxes.
                // But if multiple selections are allowed, we shouldn't close immediately.
                // Let's update the item style immediately.

                const newChecked = activeFilters[col].includes(val);
                if (newChecked) {
                    item.style.background = 'rgba(0, 255, 136, 0.1)';
                    item.style.color = 'var(--primary-color)';
                    item.innerHTML = `<span>${val}</span> <i class="fa-solid fa-check" style="margin-left:auto;"></i>`;
                } else {
                    item.style.background = '';
                    item.style.color = 'var(--text-main)';
                    item.innerHTML = `<span>${val}</span>`;
                }
            });

            dropdown.appendChild(item);
        });
    }

    // Position simply under button (CSS handles absolute)
    btn.appendChild(dropdown);
}

function closeAllDropdowns() {
    document.querySelectorAll('.filter-dropdown-menu').forEach(el => el.remove());
    document.querySelectorAll('.filter-trigger').forEach(el => el.classList.remove('active'));

    // Also reset sidebar border
    const sidebarSelector = document.getElementById('sidebar-league-select');
    const sidebarDropdown = document.getElementById('sidebar-league-dropdown');
    if (sidebarSelector && sidebarDropdown && sidebarDropdown.style.display === 'block') {
        sidebarDropdown.style.display = 'none';
        sidebarSelector.style.borderColor = '';
    }
}

function applyFilters() {
    const safeHistory = (typeof MATCH_HISTORY !== 'undefined') ? MATCH_HISTORY : [];

    const filtered = safeHistory.filter(match => {
        // Check all active filters
        for (const [col, selectedValues] of Object.entries(activeFilters)) {
            if (selectedValues.length === 0) continue;

            // Date Filter is Search Text
            if (col === 'time') {
                const searchStr = selectedValues[0].toLowerCase();
                const matchTime = match.time.toLowerCase();
                if (!matchTime.includes(searchStr)) return false;
                continue; // Skip the array check below
            }

            let matchValue = getNestedValue(match, col);

            // If matchValue is missing/undefined, default to '-'
            if (matchValue === undefined || matchValue === null) matchValue = '-';

            if (!selectedValues.includes(matchValue.toString().trim())) return false; // Ensure comparison matches
        }
        return true;
    });

    renderDashboard(filtered);

    // Highlight buttons if filtered and update text
    Object.keys(activeFilters).forEach(col => {
        const btn = document.querySelector(`.filter-trigger[data-col="${col}"]`);
        if (btn) {
            const isActive = activeFilters[col].length > 0;
            let text = 'Все';

            if (isActive) {
                btn.classList.add('active');
                if (col === 'time') {
                    text = activeFilters[col][0];
                } else if (activeFilters[col].length === 1) {
                    text = activeFilters[col][0];
                } else {
                    text = `Выбрано (${activeFilters[col].length})`;
                }
            } else {
                btn.classList.remove('active');
            }

            // Update Text WITHOUT destroying dropdown (if open)
            const dropdown = btn.querySelector('.filter-dropdown-menu');
            if (dropdown) {
                // Dropdown is open, find the text node and update it
                // Assuming structure: "Text <i class...></i> <div class='dropdown'>...</div>"
                let textNode = Array.from(btn.childNodes).find(node => node.nodeType === Node.TEXT_NODE);
                if (textNode) {
                    textNode.textContent = text + ' ';
                } else {
                    // Prepend if missing
                    btn.insertBefore(document.createTextNode(text + ' '), btn.firstChild);
                }
            } else {
                // Dropdown closed, safe to overwrite
                btn.innerHTML = `${text} <i class="fa-solid fa-chevron-down"></i>`;
            }
        }
    });
}


/* --- PAGINATION STATE --- */
let currentPage = 1;
const ITEMS_PER_PAGE = 7;
let allFilteredMatches = []; // Store filtered results here

/* --- RENDER DASHBOARD (History Only) --- */
/* --- RENDER DASHBOARD (History Only) --- */
function renderDashboard(data = null) {
    const tbody = document.getElementById('dashboard-table-body');
    const loadMoreBtn = document.getElementById('load-more-btn');
    if (!tbody) return;

    // Use passed data or default global history
    const safeHistory = data || ((typeof MATCH_HISTORY !== 'undefined') ? MATCH_HISTORY : []);

    // Reset if it's a new dataset call (not a "Load More" action)
    if (data !== 'APPEND') {
        currentPage = 1;
        allFilteredMatches = safeHistory;
        tbody.innerHTML = ''; // Clear table
    }

    // Hide empty state if we have data
    if (allFilteredMatches.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="10">
                    <div class="empty-state">
                        <img src="img/empty-state-final.png?v=8" alt="No Data">
                        <p>История пуста</p>
                    </div>
                </td>
            </tr>
        `;
        if (loadMoreBtn) loadMoreBtn.style.display = 'none';
        return;
    }

    // Calculate Slice
    let startIndex = 0;
    let endIndex = currentPage * ITEMS_PER_PAGE;

    if (data === 'APPEND') {
        startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    } else {
        startIndex = 0;
    }

    // Slice data
    const matchesToRender = allFilteredMatches.slice(startIndex, endIndex);

    matchesToRender.forEach(match => {
        const row = document.createElement('tr');

        let t1Class = '';
        let t2Class = '';

        if (match.winner === 'team1') t1Class = 'winner';
        if (match.winner === 'team2') t2Class = 'winner';

        const logo1 = match.logos ? match.logos.t1 : '';
        const logo2 = match.logos ? match.logos.t2 : '';

        // Determine where to put the score based on map_num
        const mapNum = match.map_num || 0;
        let scoreCol1 = '-', scoreCol2 = '-', scoreCol3 = '-', mainScore = match.score;

        if (mapNum === 1) scoreCol1 = match.score;
        if (mapNum === 2) scoreCol2 = match.score;
        if (mapNum === 3) scoreCol3 = match.score;

        // --- SMART DATE FIX ---
        // If match.time contains "карта" or "Map", it's corrupted. Recover from ID.
        let displayTime = match.time;
        const isDirtyTime = /карта|Map|Live/i.test(displayTime);

        if (isDirtyTime || !displayTime) {
            // Try to extract timestamp from ID: "Team1_vs_Team2_1768..."
            const parts = match.id.split('_');
            const possibleTs = parts[parts.length - 1];

            if (possibleTs && /^\d+$/.test(possibleTs)) {
                const dateObj = new Date(parseInt(possibleTs) * 1000);
                const day = String(dateObj.getDate()).padStart(2, '0');
                const month = String(dateObj.getMonth() + 1).padStart(2, '0');
                const year = dateObj.getFullYear();
                const hours = String(dateObj.getHours()).padStart(2, '0');
                const mins = String(dateObj.getMinutes()).padStart(2, '0');
                displayTime = `${day}-${month}-${year} ${hours}:${mins}`;
            }
        }

        // 7 Columns: Date | League | Team1 | Team2 | Score | P1 | P2 | Map1 | Map2 | Map3
        row.innerHTML = `
            <td>${displayTime}</td>
            <td style="color:var(--text-muted); font-size:12px;">${match.league}</td>
            
            <!-- Team 1 -->
            <td style="text-align: right;">
                <div style="display:flex; align-items:center; justify-content:flex-end; gap:10px;">
                    <span class="${t1Class}" style="font-weight:600;">${match.team1}</span>
                    <img src="${logo1}" class="mini-logo" onerror="this.style.display='none'">
                </div>
            </td>
            
            <!-- Team 2 -->
            <td style="text-align: left;">
                <div style="display:flex; align-items:center; justify-content:flex-start; gap:10px;">
                    <img src="${logo2}" class="mini-logo" onerror="this.style.display='none'">
                    <span class="${t2Class}" style="font-weight:600;">${match.team2}</span>
                </div>
            </td>
            
            <!-- Score (Main) -->
            <td style="text-align: center; font-weight: 700; font-size: 16px;">
                ${match.score}
            </td>
            
            <!-- P1 Odds -->
            <td style="text-align: center;">
                <span class="odd-box" style="padding:4px 8px; display:inline-block;">${match.odds.p1 || '-'}</span>
            </td>
            
            <!-- P2 Odds -->
            <td style="text-align: center;">
                <span class="odd-box" style="padding:4px 8px; display:inline-block;">${match.odds.p2 || '-'}</span>
            </td>

            <!-- Map Columns -->
            <td style="text-align: center;">${scoreCol1}</td>
            <td style="text-align: center;">${scoreCol2}</td>
            <td style="text-align: center;">${scoreCol3}</td>
        `;

        tbody.appendChild(row);
    });

    // Handle "Load More" Button Visibility
    if (loadMoreBtn) {
        if (endIndex < allFilteredMatches.length) {
            loadMoreBtn.style.display = 'inline-block';
            loadMoreBtn.onclick = () => {
                currentPage++;
                renderDashboard('APPEND');
            };
        } else {
            loadMoreBtn.style.display = 'none';
        }
    }
}

/* --- RENDER LIVE CARD VIEW --- */
function renderLiveSection() {
    const container = document.getElementById('live-container');
    if (!container) return;

    container.innerHTML = '';
    const safeLive = (typeof LIVE_MATCHES !== 'undefined') ? LIVE_MATCHES : [];

    if (safeLive.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fa-solid fa-gamepad"></i>
                <p>Нет активных матчей</p>
            </div>
        `;
        return;
    }

    safeLive.forEach(match => {
        const card = document.createElement('div');
        card.className = 'live-card';
        card.innerHTML = `
            <div class="card-header">
                <span class="league-name">${match.league}</span>
                <span class="live-tag"><i class="fa-solid fa-circle fa-beat-fade" style="font-size: 8px; margin-right: 5px;"></i> LIVE</span>
            </div>
            <div class="matchup">
                <div class="team">
                    <img src="${match.logos.t1}" class="team-logo">
                    <span class="team-name">${match.team1}</span>
                </div>
                <div class="score-board">${match.score}</div>
                <div class="team">
                    <img src="${match.logos.t2}" class="team-logo">
                    <span class="team-name">${match.team2}</span>
                </div>
            </div>
            <div class="odds-row">
                <div class="odd-box"><div>1</div><span>${match.odds.p1}</span></div>
                <div class="odd-box"><div>X</div><span>${match.odds.x}</span></div>
                <div class="odd-box"><div>2</div><span>${match.odds.p2}</span></div>
            </div>
        `;
        container.appendChild(card);
    });
}
