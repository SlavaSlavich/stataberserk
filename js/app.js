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

const VERSIONS_DATA = [
    {
        version: "v2.13",
        date: "19-01-2026",
        changes: ["Добавлен раздел 'История обновлений' на сайт", "Оптимизация производительности рендеринга"]
    },
    {
        version: "v2.12",
        date: "19-01-2026",
        changes: ["Синхронизация аватарок из Telegram в реальном времени", "Улучшена стабильность в браузерах Chrome/Safari"]
    },
    {
        version: "v2.11",
        date: "19-01-2026",
        changes: ["Личный кабинет в боковой панели", "Отображение @username и баланса", "Система выхода (Logout)"]
    },
    {
        version: "v2.10",
        date: "18-01-2026",
        changes: ["Исправлен перенос сессии между браузерами", "Режим 'Open in Browser' теперь сохраняет вход"]
    },
    {
        version: "v2.7 - v2.9",
        date: "17-01-2026",
        changes: ["Переход на Text-Only брендинг (в 10 раз быстрее)", "Добавлены Chat Actions ('печатает')", "Исправлены критические ошибки запуска"]
    },
    {
        version: "v2.2 - v2.6",
        date: "16-01-2026",
        changes: ["Режим публичного доступа к Match-Center", "Новый дизайн с эффектом Glitch", "Оптимизация задержки команд (/start)"]
    },
    {
        version: "v2.0",
        date: "15-01-2026",
        changes: ["Первая стабильная версия на VDS", "Система проверки подписки"]
    }
];

function initApp() {
    checkAuth(); // AUTH CHECK: Must be first
    updateClock();
    setInterval(updateClock, 1000);

    setupNavigation();
    setupMobileToggle();
    setupFilters(); // New Table Filter Logic
    setupUpdatesModal(); // CHANGELOG logic
    // setupSidebarLeague(); // Removed as per user request

    // Default render
    renderDashboard();
    renderLiveSection();
}

function setupUpdatesModal() {
    const trigger = document.getElementById('updates-trigger');
    const modal = document.getElementById('updates-modal');
    const closeBtn = document.getElementById('close-updates');
    const list = document.getElementById('changelog-list');

    if (!trigger || !modal || !list) return;

    // Render list
    list.innerHTML = VERSIONS_DATA.map(v => `
        <div class="update-item">
            <div class="update-header">
                <span class="update-version">${v.version}</span>
                <span class="update-date">${v.date}</span>
            </div>
            <div class="update-body">
                <ul>
                    ${v.changes.map(c => `<li>${c}</li>`).join('')}
                </ul>
            </div>
        </div>
    `).join('');

    // Dynamic Version Label in Sidebar
    const statusText = document.getElementById('connection-status');
    if (statusText && VERSIONS_DATA.length > 0) {
        statusText.textContent = `${VERSIONS_DATA[0].version} (Обновления)`;
    }

    // Events
    trigger.onclick = () => {
        modal.style.display = 'flex';
        setTimeout(() => modal.classList.add('show'), 10);
    };

    const closeModal = () => {
        modal.classList.remove('show');
        setTimeout(() => modal.style.display = 'none', 300);
    };

    if (closeBtn) closeBtn.onclick = closeModal;

    modal.onclick = (e) => {
        if (e.target === modal) closeModal();
    };
}

/* --- AUTHENTICATION --- */
function checkAuth() {
    const authOverlay = document.getElementById('auth-overlay');
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('auth_token');
    const name = urlParams.get('name');
    const username = urlParams.get('username');

    // 1. Check if token comes from URL (Redirect from Bot)
    if (token) {
        // Save to local storage
        localStorage.setItem('site_auth_token', token);
        if (name) localStorage.setItem('user_name', name);
        if (username) localStorage.setItem('user_handle', username);

        // IMPORTANT: We DO NOT clean the URL here anymore.
        // If the user uses Telegram's "Open in Browser" menu, 
        // the token MUST still be in the URL to pass it to Chrome/Safari.

        authOverlay.style.display = 'none';
        renderUserProfile();
        return;
    }

    // 2. Check Local Storage
    const storedToken = localStorage.getItem('site_auth_token');
    if (storedToken) {
        authOverlay.style.display = 'none';
        renderUserProfile();
    } else {
        authOverlay.style.display = 'flex'; // Block access
        document.getElementById('user-profile-container').style.display = 'none';
    }
}

function renderUserProfile() {
    const container = document.getElementById('user-profile-container');
    const nameEl = document.getElementById('user-name');
    const avatarEl = document.getElementById('user-avatar');
    const logoutBtn = document.getElementById('logout-btn');

    const name = localStorage.getItem('user_name') || 'Warrior';
    const handle = localStorage.getItem('user_handle') || '';

    if (nameEl) {
        nameEl.textContent = handle ? `@${handle}` : name;
    }

    if (avatarEl) {
        // 📸 REAL TELEGRAM AVATAR INTEGRATION
        // If user has a handle, we can pull their official TG photo
        if (handle) {
            const tgAvatarUrl = `https://t.me/i/userpic/320/${handle}.jpg`;
            avatarEl.src = tgAvatarUrl;

            // Fallback if TG photo is private or not found
            avatarEl.onerror = () => {
                const seed = handle || name || 'berserk';
                avatarEl.src = `https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}&backgroundColor=b6e3f4,c0aede,d1d4f9`;
            };
        } else {
            // Fallback for users without handles
            const seed = name || 'berserk';
            avatarEl.src = `https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}&backgroundColor=b6e3f4,c0aede,d1d4f9`;
        }
    }

    if (logoutBtn) {
        logoutBtn.onclick = () => {
            if (confirm('Вы уверены, что хотите выйти?')) {
                localStorage.clear();
                window.location.reload();
            }
        };
    }

    if (container) {
        container.style.display = 'block';
    }
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
    const submenu = document.getElementById('live-submenu');

    // 0. GENERATE SUBMENU FROM DATA
    if (submenu && typeof TWITCH_CHANNELS !== 'undefined' && TWITCH_CHANNELS.length > 0) {
        submenu.innerHTML = '';

        // Group by category
        const groups = {};
        TWITCH_CHANNELS.forEach(ch => {
            const cat = ch.category || 'Другое';
            if (!groups[cat]) groups[cat] = [];
            groups[cat].push(ch);
        });

        // Render groups
        Object.keys(groups).forEach(cat => {
            // Header
            const header = document.createElement('li');
            header.style.cssText = 'padding: 8px 15px; font-size: 11px; color: var(--text-muted); letter-spacing: 1px; margin-top: 5px; cursor: default; pointer-events: none;';
            header.textContent = cat;
            submenu.appendChild(header);

            // Channels
            groups[cat].forEach(channel => {
                const li = document.createElement('li');
                li.className = 'submenu-item';
                li.dataset.channel = channel.channel;
                li.innerHTML = `<i class="${channel.icon || 'fa-solid fa-gamepad'}"></i> ${channel.name}`;
                submenu.appendChild(li);
            });
        });
    }

    const submenuItems = document.querySelectorAll('.submenu-item');

    // Modal elements
    const modal = document.getElementById('subscription-modal');
    const closeModal = document.querySelector('.close-modal');

    // Close modal function
    const hideModal = () => {
        if (modal) {
            modal.style.opacity = '0';
            setTimeout(() => {
                modal.style.display = 'none';
                modal.classList.remove('show');
            }, 300);
        }
    };

    if (closeModal) {
        closeModal.addEventListener('click', hideModal);
    }

    // Close on background click
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) hideModal();
        });
    }

    // 1. MAIN NAV ITEMS CLICK
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const tabName = item.dataset.tab;

            // INTERCEPT ANALYTICS
            if (tabName === 'analytics') {
                if (modal) {
                    modal.style.display = 'flex';
                    // Force reflow
                    modal.offsetHeight;
                    modal.classList.add('show');
                    modal.style.opacity = '1';
                }
                return; // Stop here, don't switch tab
            }

            // Normal Tab Switching
            navItems.forEach(nav => nav.classList.remove('active'));
            sections.forEach(sec => sec.classList.remove('active'));

            item.classList.add('active');

            // Handle Submenu Toggle for LIVE tab
            if (tabName === 'live') {
                if (submenu) {
                    submenu.classList.add('open');
                    // Select first channel by default if none selected
                    const currentActive = submenu.querySelector('.active');
                    if (!currentActive && submenuItems.length > 0) {
                        // Click the first one to load it
                        submenuItems[0].click();
                    } else if (currentActive) {
                        // Just ensure player is refreshed if needed (optional)
                    }
                }
            } else {
                // Close submenu if moving away from live (optional, user might want it open)
                // Let's keep it closed to clean up sidebar
                if (submenu) submenu.classList.remove('open');
            }

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

    // 2. SUBMENU ITEMS CLICK
    if (submenuItems) {
        submenuItems.forEach(subItem => {
            subItem.addEventListener('click', (e) => {
                e.stopPropagation(); // Don't trigger parent nav click if nested (it's not nested now, but safe practice)

                // Visuals
                submenuItems.forEach(s => s.classList.remove('active'));
                subItem.classList.add('active');

                // Ensure parent "Live" tab is visually active if not already
                const liveNav = document.querySelector('.nav-item[data-tab="live"]');
                if (liveNav && !liveNav.classList.contains('active')) {
                    // switch the view to live
                    liveNav.click(); // This will re-trigger the main nav logic
                    return; // The click above triggers the logic, but we might lose the "active" class on subItem depending on execution order.
                    // Actually the click handler above would find the active subItem and do nothing or reset.
                    // Let's just manually set view active.
                }

                // Actually Switch Player
                const channel = subItem.dataset.channel;
                setupTwitchPlayer(channel);
            });
        });
    }
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

// Helper to normalize league names (e.g. "1x1 Berserk League 2026 Week #4" -> "1x1 Berserk League")
function normalizeLeagueName(name) {
    if (!name) return "";
    name = String(name).trim();

    // 1. Merge "Berserk CS2 League" -> "1x1 Berserk League"
    // Check case-insensitive
    if (name.toLowerCase().includes("berserk cs2 league")) {
        return "1x1 Berserk League";
    }

    // Remove "202x" (year), "Week #...", "Season #..." case insensitive
    // Regex explanation:
    // \s\d{4} -> space then 4 digits (year)
    // \sWeek\s*#?\d+ -> space Week space? #? digits
    // \sSeason\s*#?\d+ -> same for Season
    return name
        .replace(/\s\d{4}/gi, '')
        .replace(/\sWeek\s*#?\d+/gi, '')
        .replace(/\sSeason\s*#?\d+/gi, '')
        .trim();
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

        // Auto-close on mouse leave (User Request)
        btn.addEventListener('mouseleave', () => {
            const dropdown = btn.querySelector('.filter-dropdown-menu');
            if (dropdown) {
                dropdown.remove();
                btn.classList.remove('active');
            }
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
        // Normalize if it's the league column
        if (col === 'league') {
            return val !== undefined ? normalizeLeagueName(val) : '-';
        }
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

            // Normalize league name for comparison if filtering by league
            if (col === 'league') {
                const normVal = normalizeLeagueName(matchValue);
                if (!selectedValues.includes(normVal)) return false;
            } else {
                if (!selectedValues.includes(matchValue.toString().trim())) return false; // Ensure comparison matches
            }
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
                <td colspan="12">
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
        let scoreCol1 = '-', scoreCol2 = '-', scoreCol3 = '-', scoreCol4 = '-', scoreCol5 = '-';

        if (match.map_scores) {
            scoreCol1 = match.map_scores.map_1 || '-';
            scoreCol2 = match.map_scores.map_2 || '-';
            scoreCol3 = match.map_scores.map_3 || '-';
            scoreCol4 = match.map_scores.map_4 || '-';
            scoreCol5 = match.map_scores.map_5 || '-';
        } else {
            // Fallback for old data or if not present
            const mapNum = match.map_num || 0;
            if (mapNum === 1) scoreCol1 = match.score;
            // Note: match.score is usually total score, so this fallback is weak, but keeps old behavior safe
        }

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
            <td style="text-align: center;">${scoreCol4}</td>
            <td style="text-align: center;">${scoreCol5}</td>
        `;

        // Add staggered animation delay
        // (index - startIndex) gives the index relative to the current page/render batch
        const relativeIndex = matchesToRender.indexOf(match);
        row.style.animationDelay = `${relativeIndex * 0.05}s`;

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
/* --- TWITCH EMBED LOGIC --- */
/* --- TWITCH EMBED LOGIC --- */
function setupTwitchPlayer(channelName = null) {
    const container = document.getElementById('twitch-player-wrapper');
    if (!container) return;

    // If no channel passed, try to use default or currently stored
    // For now, if null, do nothing or wait for click
    if (!channelName) {
        // Force hide if no channel provided
        container.style.display = 'none';
        return;
    }

    // Clear previous
    container.innerHTML = '';

    // CHECK FOR LOCAL FILE PROTOCOL
    if (window.location.protocol === 'file:') {
        container.innerHTML = `
            <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; color:#fff; text-align:center;">
                <i class="fa-solid fa-triangle-exclamation" style="font-size:48px; color:#ff4d4d; margin-bottom:20px;"></i>
                <h3 style="margin-bottom:10px;">Плеер не работает локально</h3>
                <p style="color:#8b8b9b; max-width:80%;">Политика безопасности Twitch запрещает запуск видео из файлов (file://).</p>
                <p style="color:#00ff88; margin-top:10px; font-weight:600;">Загрузите сайт на GitHub, и видео заработает!</p>
            </div>
        `;
        return;
    }

    // Construct Iframe(s)
    const domain = window.location.hostname;
    let parents = ['slavaslavich.github.io', 'localhost', '127.0.0.1'];
    if (!parents.includes(domain) && domain) {
        parents.push(domain);
    }
    const parentParams = parents.map(p => `parent=${p}`).join('&');

    // SUPPORT FOR MULTIPLE CHANNELS (Comma separated)
    const channels = channelName.split(',').map(c => c.trim()).filter(c => c);

    // Unified Render Logic
    container.innerHTML = '';
    container.style.display = 'grid'; // Ensure grid display is active (overriding potential none)

    // Remove old inline grid styles to let CSS classes take over
    container.style.gridTemplateColumns = '';
    container.style.gridTemplateRows = '';
    container.style.gap = '';
    container.style.height = '';

    // Remove any previous grid classes
    container.classList.remove('grid-layout-1', 'grid-layout-2', 'grid-layout-3', 'grid-layout-4');

    // Add appropriate class based on count
    if (channels.length === 1) container.classList.add('grid-layout-1');
    else if (channels.length === 2) container.classList.add('grid-layout-2');
    else if (channels.length >= 3) container.classList.add('grid-layout-3');

    // Render each channel
    channels.forEach(ch => {
        const wrapper = document.createElement('div');
        wrapper.className = 'multi-stream-item';

        const iframe = document.createElement('iframe');
        iframe.src = `https://player.twitch.tv/?channel=${ch}&${parentParams}&muted=false`;
        iframe.allowFullscreen = true;

        wrapper.appendChild(iframe);
        container.appendChild(wrapper);
    });
}

/* --- RENDER LIVE SECTION (Now just triggers player setup) --- */
function renderLiveSection() {
    // The HTML structure is now static in index.html, 
    // we just need to init the player logic.
    setupTwitchPlayer();
}
