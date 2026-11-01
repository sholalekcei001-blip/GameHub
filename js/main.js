(function () {
    /* ===== Текущая страница (для подсветки меню) ===== */
    const page = location.pathname.split('/').pop() || 'index.html';

    const links = [
        ['Home', 'index.html'],
        ['Games', 'games.html'],
        ['News', 'news.html'],
        ['Community', 'community.html'],
        ['About', 'about.html'],
        ['Contacts', 'contacts.html']
    ];

    const navLinks = links.map(function (item) {
        const active = item[1] === page ? ' active' : '';
        return '<a href="' + item[1] + '" class="header_link' + active + '">' + item[0] + '</a>';
    }).join('');

    const footerLinks = links.slice(0, 5).map(function (item) {
        return '<li><a href="' + item[1] + '">' + item[0] + '</a></li>';
    }).join('');

    /* ===== ШАПКА ===== */
    const headerHTML = `
    <header class="header">
        <div class="contanier">
            <div class="header_container">
                <div class="logo">
                    <a href="index.html" class="header_logo"><i class="fa-brands fa-steam"></i><span>GameHub</span></a>
                </div>

                <nav class="header_nav">${navLinks}</nav>

                <div class="header_action">
                    <button class="header_search" data-search aria-label="Search"><i class="fa-solid fa-magnifying-glass"></i></button>
                    <button class="header_login" data-auth="login">login</button>
                    <button class="header_signUp" data-auth="signup">signUp</button>
                </div>
            </div>
        </div>
    </header>`;

    /* ===== ПОДВАЛ ===== */
    const footerHTML = `
    <footer class="footer">
        <div class="contanier">
            <div class="footer_top">

                <div class="footer_col footer_about">
                    <a href="index.html" class="footer_logo"><i class="fa-brands fa-steam"></i><span>GameHub</span></a>
                    <p class="footer_text">Your place to discover new games, read the latest news and talk with
                        players from all over the world.</p>

                    <div class="footer_socials">
                        <a href="#" class="footer_social" aria-label="Discord"><i class="fa-brands fa-discord"></i></a>
                        <a href="#" class="footer_social" aria-label="Twitter"><i class="fa-brands fa-x-twitter"></i></a>
                        <a href="#" class="footer_social" aria-label="YouTube"><i class="fa-brands fa-youtube"></i></a>
                        <a href="#" class="footer_social" aria-label="Twitch"><i class="fa-brands fa-twitch"></i></a>
                    </div>
                </div>

                <div class="footer_col">
                    <h3 class="footer_title">Explore</h3>
                    <ul class="footer_list">${footerLinks}</ul>
                </div>

                <div class="footer_col">
                    <h3 class="footer_title">Support</h3>
                    <ul class="footer_list">
                        <li><a href="#">Help Center</a></li>
                        <li><a href="contacts.html">Contact Us</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Report a Bug</a></li>
                    </ul>
                </div>

                <div class="footer_col footer_subscribe">
                    <h3 class="footer_title">Newsletter</h3>
                    <p class="footer_text">Get the best game news straight to your inbox.</p>
                    <div class="footer_form">
                        <input type="email" class="footer_input" placeholder="Your email">
                        <button type="button" class="footer_submit">Subscribe</button>
                    </div>
                </div>

            </div>

            <div class="footer_bottom">
                <p class="footer_copy">&copy; ${new Date().getFullYear()} GameHub. All rights reserved.</p>
                <div class="footer_links">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Use</a>
                </div>
            </div>
        </div>
    </footer>`;

    /* ===== ОКНО ЛОГИН / РЕГИСТРАЦИЯ ===== */
    const modalHTML = `
    <div class="modal" id="authModal" aria-hidden="true">
        <div class="modal_box" role="dialog" aria-modal="true" aria-labelledby="authTitle">
            <button type="button" class="modal_close" data-close aria-label="Close"><i class="fa-solid fa-xmark"></i></button>

            <div class="modal_head">
                <div class="modal_icon"><i class="fa-solid fa-gamepad"></i></div>
                <h2 class="modal_title" id="authTitle">Welcome to GameHub</h2>
                <p class="modal_sub">Log in or create an account to join the community.</p>
            </div>

            <div class="modal_tabs">
                <button type="button" class="modal_tab active" data-tab="login">Login</button>
                <button type="button" class="modal_tab" data-tab="signup">Sign Up</button>
            </div>

            <!-- LOGIN -->
            <form class="auth_form active" data-form="login">
                <div class="form_group">
                    <label class="form_label" for="loginEmail">Email</label>
                    <input class="form_input" type="email" id="loginEmail" name="email" placeholder="john@example.com" required>
                </div>

                <div class="form_group">
                    <label class="form_label" for="loginPass">Password</label>
                    <div class="input_wrap">
                        <input class="form_input" type="password" id="loginPass" name="password" placeholder="Your password" required>
                        <button type="button" class="toggle_pass" aria-label="Show password"><i class="fa-solid fa-eye"></i></button>
                    </div>
                </div>

                <div class="auth_row">
                    <label class="form_check"><input type="checkbox" name="remember"> Remember me</label>
                    <a href="#" class="auth_link">Forgot password?</a>
                </div>

                <p class="auth_message"></p>

                <button type="submit" class="form_submit">Login</button>

                <p class="auth_switch">Don't have an account? <a href="#" class="auth_link" data-auth="signup">Sign Up</a></p>
            </form>

            <!-- SIGN UP -->
            <form class="auth_form" data-form="signup">
                <div class="form_group">
                    <label class="form_label" for="signName">Username</label>
                    <input class="form_input" type="text" id="signName" name="username" placeholder="GamerTag" required minlength="3">
                </div>

                <div class="form_group">
                    <label class="form_label" for="signEmail">Email</label>
                    <input class="form_input" type="email" id="signEmail" name="email" placeholder="john@example.com" required>
                </div>

                <div class="form_group">
                    <label class="form_label" for="signPass">Password</label>
                    <div class="input_wrap">
                        <input class="form_input" type="password" id="signPass" name="password" placeholder="At least 6 characters" required minlength="6">
                        <button type="button" class="toggle_pass" aria-label="Show password"><i class="fa-solid fa-eye"></i></button>
                    </div>
                </div>

                <div class="form_group">
                    <label class="form_label" for="signConfirm">Confirm Password</label>
                    <div class="input_wrap">
                        <input class="form_input" type="password" id="signConfirm" name="confirm" placeholder="Repeat password" required minlength="6">
                        <button type="button" class="toggle_pass" aria-label="Show password"><i class="fa-solid fa-eye"></i></button>
                    </div>
                </div>

                <label class="form_check"><input type="checkbox" name="terms" required> I agree to the Terms of Use and Privacy Policy</label>

                <p class="auth_message"></p>

                <button type="submit" class="form_submit">Create Account</button>

                <p class="auth_switch">Already have an account? <a href="#" class="auth_link" data-auth="login">Login</a></p>
            </form>
        </div>
    </div>`;

    /* ===== ОКНО ПОИСКА ===== */
    const searchHTML = `
    <div class="search_overlay" id="searchOverlay" aria-hidden="true">
        <div class="search_box" role="dialog" aria-modal="true" aria-label="Search">
            <div class="search_input_wrap">
                <i class="fa-solid fa-magnifying-glass"></i>
                <input type="text" class="search_input" id="searchInput" placeholder="Search games, news, pages..." autocomplete="off">
                <button type="button" class="search_close" data-search-close>Esc</button>
            </div>
            <div class="search_results" id="searchResults"></div>
            <div class="search_hint">&uarr; &darr; to navigate &middot; Enter to open &middot; Esc to close</div>
        </div>
    </div>`;

    /* ===== Вставка на страницу ===== */
    const headerEl = document.getElementById('site-header');
    if (headerEl) headerEl.outerHTML = headerHTML;

    const footerEl = document.getElementById('site-footer');
    if (footerEl) footerEl.outerHTML = footerHTML;

    document.body.insertAdjacentHTML('beforeend', modalHTML);
    document.body.insertAdjacentHTML('beforeend', searchHTML);

    /* ===== Логика окна входа ===== */
    const modal = document.getElementById('authModal');

    function clearMessages() {
        modal.querySelectorAll('.auth_message').forEach(function (m) {
            m.textContent = '';
            m.className = 'auth_message';
        });
    }

    function switchTab(tab) {
        modal.querySelectorAll('.modal_tab').forEach(function (b) {
            b.classList.toggle('active', b.dataset.tab === tab);
        });
        modal.querySelectorAll('.auth_form').forEach(function (f) {
            f.classList.toggle('active', f.dataset.form === tab);
        });
        clearMessages();
    }

    function openAuth(tab) {
        closeSearch();
        switchTab(tab || 'login');
        modal.classList.add('open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('no-scroll');
        setTimeout(function () {
            const first = modal.querySelector('.auth_form.active input');
            if (first) first.focus();
        }, 250);
    }

    function closeAuth() {
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden', 'true');
        if (!searchOverlay.classList.contains('open')) {
            document.body.classList.remove('no-scroll');
        }
    }

    document.addEventListener('click', function (e) {
        // открыть окно (кнопки login / signUp и любые элементы с data-auth)
        const opener = e.target.closest('[data-auth]');
        if (opener) {
            e.preventDefault();
            openAuth(opener.dataset.auth);
            return;
        }

        // закрыть (крестик или клик по тёмному фону)
        if (e.target.closest('[data-close]') || e.target === modal) {
            closeAuth();
            return;
        }

        // переключение вкладок
        const tab = e.target.closest('.modal_tab');
        if (tab) {
            switchTab(tab.dataset.tab);
            return;
        }

        // показать / скрыть пароль
        const eye = e.target.closest('.toggle_pass');
        if (eye) {
            const input = eye.parentElement.querySelector('input');
            const show = input.type === 'password';
            input.type = show ? 'text' : 'password';
            eye.innerHTML = show
                ? '<i class="fa-solid fa-eye-slash"></i>'
                : '<i class="fa-solid fa-eye"></i>';
        }
    });

    // отправка форм (демо, без сервера)
    modal.querySelectorAll('.auth_form').forEach(function (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const msg = form.querySelector('.auth_message');

            if (form.dataset.form === 'signup') {
                const pass = form.querySelector('[name="password"]').value;
                const confirm = form.querySelector('[name="confirm"]').value;
                if (pass !== confirm) {
                    msg.textContent = 'Passwords do not match';
                    msg.className = 'auth_message error';
                    return;
                }
                msg.textContent = 'Account created! (demo)';
            } else {
                msg.textContent = 'Logged in successfully! (demo)';
            }

            msg.className = 'auth_message success';
        });
    });

    /* ===== ПОИСК ===== */

    // База поиска: добавляй сюда новые игры, новости и страницы
    // t - название, d - описание, u - ссылка, type - Game / News / Page, k - доп. слова для поиска
    const searchIndex = [
        // Игры
        { t: 'Elden Ring',       d: 'RPG, Adventure · 4.7',        u: 'games.html', type: 'Game', k: 'rpg adventure' },
        { t: 'Call of Duty',     d: 'Action, Shooter · 5.0',       u: 'games.html', type: 'Game', k: 'action shooter' },
        { t: 'Cyberpunk',        d: 'RPG, Open World · 2.0',       u: 'games.html', type: 'Game', k: 'rpg open world' },
        { t: 'Hogwarts Legacy',  d: 'RPG, Adventure · 2.7',        u: 'games.html', type: 'Game', k: 'rpg adventure' },
        { t: 'Forza Horizon',    d: 'Racing, Open World · 4.5',    u: 'games.html', type: 'Game', k: 'racing open world' },
        { t: 'The Witcher 3',    d: 'RPG, Open World · 4.9',       u: 'games.html', type: 'Game', k: 'rpg open world' },
        { t: 'GTA V',            d: 'Action, Open World · 4.6',    u: 'games.html', type: 'Game', k: 'action open world' },
        { t: 'Resident Evil 4',  d: 'Action, Shooter · 4.8',       u: 'games.html', type: 'Game', k: 'action shooter' },
        { t: 'Need for Speed',   d: 'Racing, Action · 4.1',        u: 'games.html', type: 'Game', k: 'racing action' },
        { t: 'Minecraft',        d: 'Adventure, Open World · 4.8', u: 'games.html', type: 'Game', k: 'adventure open world' },

        // Новости
        { t: 'GameHub Awards 2025: vote for your favorite game',   d: 'May 22, 2025', u: 'news.html', type: 'News', k: 'event' },
        { t: 'New expansion announced for Elden Ring',             d: 'May 20, 2025', u: 'news.html', type: 'News', k: 'expansion update' },
        { t: 'Cyberpunk gets a huge update with new features',     d: 'May 18, 2025', u: 'news.html', type: 'News', k: 'update' },
        { t: 'Forza Horizon: release date revealed',               d: 'May 15, 2025', u: 'news.html', type: 'News', k: 'release' },
        { t: 'Hogwarts Legacy: new DLC teased by developers',      d: 'May 12, 2025', u: 'news.html', type: 'News', k: 'dlc' },
        { t: 'Top 10 games to play this summer',                   d: 'May 10, 2025', u: 'news.html', type: 'News', k: 'guide' },
        { t: 'Call of Duty season update brings new maps',         d: 'May 7, 2025',  u: 'news.html', type: 'News', k: 'update maps' },
        { t: 'Indie spotlight: hidden gems you missed',            d: 'May 3, 2025',  u: 'news.html', type: 'News', k: 'indie' },

        // Страницы
        { t: 'Home',      d: 'Main page of GameHub',                          u: 'index.html',     type: 'Page', k: 'main popular top rated' },
        { t: 'Games',     d: 'Browse and filter all games',                   u: 'games.html',     type: 'Page', k: 'catalog genres' },
        { t: 'News',      d: 'Latest updates and releases',                   u: 'news.html',      type: 'Page', k: 'articles' },
        { t: 'Community', d: 'Hot topics and top members',                    u: 'community.html', type: 'Page', k: 'forum topics members discord' },
        { t: 'About Us',  d: 'Our story, values and team',                    u: 'about.html',     type: 'Page', k: 'team founder values' },
        { t: 'Contacts',  d: 'Email, phone, address and message form',        u: 'contacts.html',  type: 'Page', k: 'contact email phone address support' }
    ];

    const typeLabels = { Game: 'Games', News: 'News', Page: 'Pages' };
    const typeIcons = { Game: 'fa-gamepad', News: 'fa-newspaper', Page: 'fa-file-lines' };
    const suggestions = ['Elden Ring', 'Cyberpunk', 'RPG', 'Racing', 'Community', 'News'];

    const searchOverlay = document.getElementById('searchOverlay');
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');

    let flat = [];          // плоский список результатов (для клавиатуры)
    let activeIndex = -1;

    function esc(str) {
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    }

    // подсветка найденных слов
    function highlight(text, words) {
        if (!words.length) return esc(text);
        const pattern = words.map(function (w) {
            return w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        }).join('|');
        const re = new RegExp('(' + pattern + ')', 'ig');
        return text.split(re).map(function (part, i) {
            return i % 2 ? '<mark>' + esc(part) + '</mark>' : esc(part);
        }).join('');
    }

    function itemHTML(item, index, words) {
        return '<a href="' + item.u + '" class="search_item" data-index="' + index + '">' +
            '<span class="search_item_icon"><i class="fa-solid ' + typeIcons[item.type] + '"></i></span>' +
            '<span class="search_item_info">' +
                '<span class="search_item_title">' + highlight(item.t, words) + '</span>' +
                '<span class="search_item_desc">' + highlight(item.d, words) + '</span>' +
            '</span>' +
            '<span class="search_item_type">' + item.type + '</span>' +
        '</a>';
    }

    function setActive(i) {
        activeIndex = i;
        const items = searchResults.querySelectorAll('.search_item');
        items.forEach(function (el, idx) {
            el.classList.toggle('active', idx === i);
        });
        if (i >= 0 && items[i]) items[i].scrollIntoView({ block: 'nearest' });
    }

    function renderSuggestions() {
        flat = [];
        activeIndex = -1;
        searchResults.innerHTML =
            '<div class="search_group_title">Popular searches</div>' +
            '<div class="search_chips">' +
            suggestions.map(function (s) {
                return '<button type="button" class="search_chip" data-q="' + esc(s) + '">' + esc(s) + '</button>';
            }).join('') +
            '</div>';
    }

    function runSearch(query) {
        const q = query.trim().toLowerCase();
        if (!q) {
            renderSuggestions();
            return;
        }

        const words = q.split(/\s+/);

        const matched = searchIndex.map(function (item) {
            const title = item.t.toLowerCase();
            const hay = (item.t + ' ' + item.d + ' ' + (item.k || '')).toLowerCase();
            const ok = words.every(function (w) { return hay.indexOf(w) !== -1; });
            if (!ok) return null;

            let score = 1;
            if (title.indexOf(q) === 0) score = 3;
            else if (title.indexOf(words[0]) !== -1) score = 2;

            return { item: item, score: score };
        }).filter(Boolean).sort(function (a, b) { return b.score - a.score; });

        flat = [];
        let html = '';

        ['Game', 'News', 'Page'].forEach(function (type) {
            const group = matched.filter(function (m) { return m.item.type === type; }).slice(0, 5);
            if (!group.length) return;

            html += '<div class="search_group_title">' + typeLabels[type] + '</div>';
            group.forEach(function (m) {
                html += itemHTML(m.item, flat.length, words);
                flat.push(m.item);
            });
        });

        if (!flat.length) {
            html = '<p class="search_empty">Nothing found for &laquo;<b>' + esc(query.trim()) + '</b>&raquo;</p>';
        }

        searchResults.innerHTML = html;
        setActive(flat.length ? 0 : -1);
    }

    function openSearch() {
        closeAuth();
        searchOverlay.classList.add('open');
        searchOverlay.setAttribute('aria-hidden', 'false');
        document.body.classList.add('no-scroll');
        searchInput.value = '';
        renderSuggestions();
        setTimeout(function () { searchInput.focus(); }, 200);
    }

    function closeSearch() {
        searchOverlay.classList.remove('open');
        searchOverlay.setAttribute('aria-hidden', 'true');
        if (!modal.classList.contains('open')) {
            document.body.classList.remove('no-scroll');
        }
    }

    searchInput.addEventListener('input', function () {
        runSearch(searchInput.value);
    });

    searchInput.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowDown' && flat.length) {
            e.preventDefault();
            setActive((activeIndex + 1) % flat.length);
        } else if (e.key === 'ArrowUp' && flat.length) {
            e.preventDefault();
            setActive((activeIndex - 1 + flat.length) % flat.length);
        } else if (e.key === 'Enter' && activeIndex >= 0 && flat[activeIndex]) {
            e.preventDefault();
            window.location.href = flat[activeIndex].u;
        }
    });

    document.addEventListener('click', function (e) {
        // открыть поиск (иконка лупы)
        if (e.target.closest('[data-search]')) {
            e.preventDefault();
            openSearch();
            return;
        }

        // закрыть поиск (кнопка Esc или клик по тёмному фону)
        if (e.target.closest('[data-search-close]') || e.target === searchOverlay) {
            closeSearch();
            return;
        }

        // быстрые подсказки
        const chip = e.target.closest('.search_chip');
        if (chip) {
            searchInput.value = chip.dataset.q;
            runSearch(chip.dataset.q);
            searchInput.focus();
            return;
        }

        // клик по результату на той же странице
        if (e.target.closest('.search_item')) {
            closeSearch();
        }
    });

    /* ===== Горячие клавиши ===== */
    document.addEventListener('keydown', function (e) {
        // Esc закрывает любое открытое окно
        if (e.key === 'Escape') {
            if (searchOverlay.classList.contains('open')) closeSearch();
            if (modal.classList.contains('open')) closeAuth();
            return;
        }

        // Ctrl + K или Cmd + K
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
            e.preventDefault();
            openSearch();
            return;
        }

        // клавиша "/" (если не печатаем в поле)
        const tag = (e.target.tagName || '').toLowerCase();
        const typing = tag === 'input' || tag === 'textarea' || tag === 'select';
        if (e.key === '/' && !typing && !e.ctrlKey && !e.metaKey && !e.altKey) {
            e.preventDefault();
            openSearch();
        }
    });

    /* ===== Фильтр и поиск на странице Games ===== */
    const filterBar = document.querySelector('.filter_bar');
    if (filterBar) {
        const cards = Array.from(document.querySelectorAll('.popular_game_list .game_card'));
        const search = filterBar.querySelector('.filter_search');
        const empty = document.querySelector('.games_empty');
        let genre = 'all';

        function applyFilter() {
            const q = search.value.trim().toLowerCase();

            cards.forEach(function (card) {
                const okGenre = genre === 'all' || card.dataset.genre.split(' ').indexOf(genre) !== -1;
                const title = card.querySelector('.game_card_title').textContent.toLowerCase();
                card.classList.toggle('hide', !(okGenre && title.indexOf(q) !== -1));
            });

            const anyVisible = cards.some(function (c) { return !c.classList.contains('hide'); });
            if (empty) empty.hidden = anyVisible;
        }

        filterBar.addEventListener('click', function (e) {
            const btn = e.target.closest('.filter_btn');
            if (!btn) return;
            filterBar.querySelectorAll('.filter_btn').forEach(function (b) { b.classList.remove('active'); });
            btn.classList.add('active');
            genre = btn.dataset.filter;
            applyFilter();
        });

        search.addEventListener('input', applyFilter);
    }
})();