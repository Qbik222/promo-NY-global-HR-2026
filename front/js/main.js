(function () {

    const apiURL = 'https://fav-prom.com/api_black_prize'

    const mainPage = document.querySelector(".fav-page"),
        loader = document.querySelector(".spinner-overlay"),
        resultsTable = document.querySelector("#table"),
        resultsTableOther = document.querySelector("#tableOther")

    const hrLeng = document.querySelector('#hrLeng');
    const enLeng = document.querySelector('#enLeng');

    let locale = "hr"
    // let locale = sessionStorage.getItem("locale") || "hr"

    if (hrLeng) locale = 'hr';
    if (enLeng) locale = 'en';

    let debug = false

    if (debug) hideLoader()

    let i18nData = {};
    const translateState = false;
    let userId = null;
    // let userId = Number(sessionStorage.getItem("userId")) ?? null

    const request = function (link, extraOptions) {
        return fetch(apiURL + link, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            ...(extraOptions || {})
        })
            .then(res => {
                if (!res.ok) throw new Error('API error');
                return res.json();
            })
            .catch(err => {
                console.error('API request failed:', err);

                reportError(err);

                document.querySelector('.fav-page').style.display = 'none';
                if (window.location.href.startsWith("https://www.favbet.hr/")) {
                    window.location.href = '/promocije/promocija/stub/';
                } else {
                    window.location.href = '/promos/promo/stub/';
                }

                return Promise.reject(err);
            });

    }

    function hideLoader(){
        loader.classList.add("hide")
        document.body.style.overflow = "auto"
        mainPage.classList.remove("loading")
    }

    // Функція для встановлення висот на основі viewport, хедера та футера
    function initPageHeight() {
        const favPage = document.querySelector('.fav-page');
        const frame = document.querySelector('.frame');
        const stickyWrap = document.querySelector('.sticky-wrap');
        
        if (!favPage || !frame || !stickyWrap) return;
        
        // Визначаємо висоту хедера залежно від ширини екрану
        // Десктоп (> 1024px): 60 + 21 = 81px
        // Мобілки (≤ 1024px): 48 + 21 = 69px
        const headerHeight = window.innerWidth > 1024 ? 81 : 69;
        
        // Визначаємо висоту футера залежно від ширини екрану
        // Футер присутній тільки на екранах ≤ 1024px, висота 56px
        const footerHeight = window.innerWidth <= 1024 ? 56 : 0;
        
        // Обчислюємо висоту .fav-page: viewport height - header height - footer height - відступ
        const viewportHeight = window.innerHeight;
        const favPageHeight = viewportHeight - headerHeight - footerHeight - 32;
        
        // Встановлюємо висоту .fav-page
        favPage.style.minHeight = `${favPageHeight}px`;
        favPage.style.maxHeight = `${favPageHeight}px`;
        
        // Встановлюємо висоту .frame: .fav-page + 2px
        const frameHeight = favPageHeight + 2;
        frame.style.minHeight = `${frameHeight}px`;
        frame.style.maxHeight = `${frameHeight}px`;
        
        // Встановлюємо margin-top для .sticky-wrap: негативна висота .fav-page
        stickyWrap.style.marginTop = `-${favPageHeight}px`;
    }

    async function init() {
        let attempts = 0;
        const maxAttempts = 20;
        const attemptInterval = 50;

        function tryDetectUserId() {
            if (window.store) {
                const state = window.store.getState();
                userId = state.auth.isAuthorized && state.auth.id || '';
            } else if (window.g_user_id) {
                userId = window.g_user_id;
            }
        }

        function quickCheckAndRender() {
            // Ініціалізуємо висоти сторінки на основі viewport та хедера
            initPageHeight();
            
            initGamesWeek();
            initProgressBar();
            initParticipateCanvas();
            initSnowflakesCanvas();
            setTimeout(hideLoader, 300);

            // Оновлюємо висоти при зміні розміру вікна
            let resizeTimeout;
            window.addEventListener("resize", () => {
                clearTimeout(resizeTimeout);
                resizeTimeout = setTimeout(() => {
                    initPageHeight();
                    initParticipateCanvas();
                }, 100);
            });
            
            window.addEventListener("orientationchange", () => {
                setTimeout(() => {
                    initPageHeight();
                    initParticipateCanvas();
                }, 100);
            });

            // Fix dropdown scroll issue - prevent page from shifting up when opening dropdown
            const dropdowns = document.querySelectorAll('.dropdown');
            dropdowns.forEach((dropdown) => {
                dropdown.addEventListener('toggle', function(event) {
                    if (this.open) {
                        // Dropdown is opening
                        const summary = this.querySelector('summary');
                        if (summary) {
                            // Get summary position relative to viewport
                            const summaryRect = summary.getBoundingClientRect();

                            // Check if summary is near the top of viewport (within 100px from top)
                            if (summaryRect.top < 100) {
                                // Calculate how much to scroll to keep summary visible
                                const currentScrollY = window.scrollY || window.pageYOffset;
                                const targetScrollY = currentScrollY + summaryRect.top - 120; // 120px offset from top

                                // Use requestAnimationFrame for smooth scroll
                                requestAnimationFrame(() => {
                                    window.scrollTo({
                                        top: Math.max(0, targetScrollY),
                                        behavior: 'smooth'
                                    });
                                });
                            }
                        }
                    }
                });
            });


        }

        const waitForUserId = new Promise((resolve) => {
            const interval = setInterval(() => {
                tryDetectUserId();
                if (userId || attempts >= maxAttempts) {
                    quickCheckAndRender();
                    clearInterval(interval);
                    resolve();
                }
                attempts++;
            }, attemptInterval);
        });

        await waitForUserId;
    }

    function loadTranslations() {
        return request(`/new-translates/${locale}`)
            .then(json => {
                i18nData = json;
                translate();
                // const mutationObserver = new MutationObserver(function (mutations) {
                //     mutationObserver.disconnect();
                //     translate();
                //     mutationObserver.observe(targetNode, { childList: true, subtree: true });
                // });
                // mutationObserver.observe(document.getElementById("hardcoreTennis"), {
                //     childList: true,
                //     subtree: true
                // });

            });
    }

    function reportError(err) {
        const reportData = {
            origin: window.location.href,
            userid: userId,
            errorText: err?.error || err?.text || err?.message || 'Unknown error',
            type: err?.name || 'UnknownError',
            stack: err?.stack || ''
        };

        fetch('https://fav-prom.com/api-cms/reports/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reportData)
        }).catch(console.warn);
    }

    function translate() {
        const elems = document.querySelectorAll('[data-translate]')
        if (elems && elems.length) {
            if(translateState){
                elems.forEach(elem => {
                    const key = elem.getAttribute('data-translate');
                    elem.innerHTML = i18nData[key] || '*----NEED TO BE TRANSLATED----*   key:  ' + key;
                    if (i18nData[key]) {
                        elem.removeAttribute('data-translate');
                    }
                })
            }else{
                console.log("translation works!")
            }
        }
        if (locale === 'en') {
            mainPage.classList.add('en');
        }
        refreshLocalizedClass(mainPage);
    }

    function refreshLocalizedClass(element) {
        if (!element) {
            return;
        }
        for (const lang of ['hr', 'en']) {
            element.classList.remove(lang);
        }
        element.classList.add(locale);
    }




    function renderUsers(weekNum, userData = []) {
        weekNum = Number(weekNum);
        const weekObj = userData.find(w => w.week === weekNum);
        if (!weekObj || !weekObj.data || !Array.isArray(weekObj.data.users)) {
            console.error('Невірна структура даних');
            return;
        }

        const isStageEnded = weekObj.data.isStageEnded

        userData = weekObj.data.users;

        const winnerAdditionalPrize = userData.find(u => {
            if(u.winner === true){
                return u
            }
        });


        const currentUser = userData.find(user => user.userid === userId);

        if(userId && !currentUser && isVerifiedUser){
            userData = [...userData, {userid: userId, points: 0}]
        }
        populateUsersTable(userData, userId, weekNum, currentUser, isVerifiedUser, isStageEnded, winnerAdditionalPrize);
    }

    function populateUsersTable(users, currentUserId, week, currentUser, isVerifiedUser, isStageEnded, winnerAdditionalPrize) {
        if (!users?.length) return;
        resultsTable.innerHTML = '';
        resultsTableOther.innerHTML = '';
        secondTableOther.innerHTML = '';
        secondTable.innerHTML = '';


        const isTopCurrentUser = currentUser && users.slice(0, 10).some(user => user.userid === currentUserId);

        const topUsersLength = !userId || isTopCurrentUser  ? 10 : 10;

        const topUsers = users.slice(0, topUsersLength);

        topUsers.forEach(user => {
            displayUser(user, user.userid === currentUserId, resultsTable, topUsers, isTopCurrentUser, week);
        });
        if(isVerifiedUser && !currentUser) {
            displayUser(currentUser, true, resultsTableOther, users, false, week);
        }

        if (!isTopCurrentUser && currentUser) {
            displayUser(currentUser, true, resultsTableOther, users, false, week);
        }
    }

    function displayUser(user, isCurrentUser, table, users, isTopCurrentUser, week) {

        const renderRow = (userData, options = {}) => {
            const { highlight = false, neighbor = false } = options;
            const userRow = document.createElement('div');
            userRow.classList.add('table__row');

            const userPlace = users.indexOf(userData) + 1;
            const prizeKey = debug ? null : getPrizeTranslationKey(userPlace, week);

            if (userPlace <= 3) {
                userRow.classList.add(`place${userPlace}`);
            }

            if (highlight || isCurrentUser && !neighbor) {
                userRow.classList.add('you');
            } else if (neighbor) {
                userRow.classList.add('_neighbor');
            }

            userRow.innerHTML = `
            <div class="table__row-item">
                ${userPlace < 10 ? '0' + userPlace : userPlace}
                ${isCurrentUser && !neighbor ? '<span class="you">' + translateKey("you") + '</span>' : ''}
            </div>
            <div class="table__row-item">
                ${isCurrentUser && !neighbor ? userData.userid : maskUserId(userData.userid)}
            </div>
            <div class="table__row-item">
                ${Number(userData.points).toFixed(2)}
            </div>
            <div class="table__row-item">
                ${prizeKey ? translateKey(prizeKey) : ' - '}
            </div>
        `;

            table.append(userRow);
        };
        if (isCurrentUser && !isTopCurrentUser) {
            const index = users.indexOf(user);
            if (users[index - 1]) {
                renderRow(users[index - 1], { neighbor: true });
            }
            renderRow(user, { highlight: true });
            if (users[index + 1]) {
                renderRow(users[index + 1], { neighbor: true });
            }
        } else {
            renderRow(user);
        }
    }

    function initProgressBar() {
        const canvas = document.querySelector('#progressBarCanvas');
        const percentElement = document.querySelector('#progressPercent');
        if (!canvas || !percentElement) return;

        const ctx = canvas.getContext('2d');
        
        // Константи
        const barHeight = 20; // Висота прогрес-бару
        const segmentWidth = 4; // Ширина одного сегмента
        const segmentHeight = 14; // Висота одного сегмента
        const segmentGap = 2; // Проміжок між сегментами
        const padding = 2; // Відступ від країв
        const segmentRadius = 1; // Border radius для сегментів
        
        // Параметри анімації завантаження
        let currentProgress = 1; // Починаємо з 1%
        const targetProgress = 100; // Цільовий прогрес
        const loadingDuration = 3000; // Тривалість завантаження: 3 секунди
        let startTime = Date.now();
        let animationId = null;
        let maxSegments = 0;
        let isLoadingComplete = false;
        
        function resizeCanvas() {
            // Отримуємо розміри контейнера
            const container = canvas.parentElement;
            const containerWidth = container.offsetWidth || 768;
            
            // Встановлюємо розміри canvas
            canvas.width = containerWidth;
            canvas.height = barHeight;
            
            // Розраховуємо кількість сегментів, що помістяться
            const availableWidth = containerWidth - (padding * 2);
            const segmentWithGap = segmentWidth + segmentGap;
            maxSegments = Math.floor(availableWidth / segmentWithGap);
            
            // Перемальовуємо з поточним прогресом
            if (currentProgress > 0) {
                drawProgressBar(currentProgress);
            }
        }
        
        function drawProgressBar(progress) {
            // Очищаємо canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Малюємо рамку (білий прямокутник)
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1;
            ctx.strokeRect(0.5, 0.5, canvas.width - 1, canvas.height - 1);
            
            // Розраховуємо кількість заповнених сегментів
            const filledSegments = Math.floor((progress / 100) * maxSegments);
            
            // Малюємо заповнені сегменти з заокругленими кутами
            ctx.fillStyle = '#FFFFFF';
            const centerY = (barHeight - segmentHeight) / 2; // Вертикальне центрування
            
            for (let i = 0; i < filledSegments; i++) {
                const x = padding + i * (segmentWidth + segmentGap);
                const y = centerY;

                ctx.beginPath();
                if (ctx.roundRect) {
                    // Сучасний метод (підтримується в нових браузерах)
                    ctx.roundRect(x, y, segmentWidth, segmentHeight, segmentRadius);
                } else {
                    // Fallback для старих браузерів
                    const r = segmentRadius;
                    ctx.moveTo(x + r, y);
                    ctx.lineTo(x + segmentWidth - r, y);
                    ctx.quadraticCurveTo(x + segmentWidth, y, x + segmentWidth, y + r);
                    ctx.lineTo(x + segmentWidth, y + segmentHeight - r);
                    ctx.quadraticCurveTo(x + segmentWidth, y + segmentHeight, x + segmentWidth - r, y + segmentHeight);
                    ctx.lineTo(x + r, y + segmentHeight);
                    ctx.quadraticCurveTo(x, y + segmentHeight, x, y + segmentHeight - r);
                    ctx.lineTo(x, y + r);
                    ctx.quadraticCurveTo(x, y, x + r, y);
                    ctx.closePath();
                }
                ctx.fill();
            }
        }
        
        function updateProgress() {
            const elapsed = Date.now() - startTime;
            let progress = 1 + (elapsed / loadingDuration) * 99; // Від 1% до 100%
            
            // Обмежуємо прогрес до 100%
            if (progress >= targetProgress) {
                progress = targetProgress;
                isLoadingComplete = true;
            }
            
            currentProgress = progress;
            
            // Оновлюємо відображення
            drawProgressBar(progress);
            
            // Оновлюємо відсотки (тільки цілі числа)
            const percent = Math.floor(progress);
            percentElement.textContent = percent + '%';
            
            // Продовжуємо анімацію до завершення завантаження
            if (!isLoadingComplete) {
                animationId = requestAnimationFrame(updateProgress);
            }
        }
        
        // Ініціалізуємо розміри canvas
        resizeCanvas();
        
        // Обробка зміни розміру вікна
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                resizeCanvas();
            }, 100);
        });
        
        // Ініціалізація анімації появи іконок
        initIconsAnimation(loadingDuration);
        
        // Запускаємо анімацію з невеликою затримкою для коректного розрахунку розмірів
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                resizeCanvas();
                startTime = Date.now();
                updateProgress();
            });
        });
    }

    // Анімація появи іконок по черзі під час завантаження
    function initIconsAnimation(duration) {
        const icons = [
            '.welcome__decor-item._gamepad',
            '.welcome__decor-item._chip',
            '.welcome__decor-item._coin',
            '.welcome__decor-item._ball',
            '.welcome__decor-item._cup',
            '.welcome__decor-item._cube',
            '.welcome__decor-item._globe'
        ];

        // Зберігаємо оригінальні transform для кожної іконки
        const originalTransforms = new Map();

        // Спочатку приховуємо всі іконки
        icons.forEach(selector => {
            const icon = document.querySelector(selector);
            if (icon) {
                // Зберігаємо оригінальний transform (якщо є rotate)
                const computedStyle = window.getComputedStyle(icon);
                const originalTransform = computedStyle.transform;
                originalTransforms.set(selector, originalTransform);
                
                // Встановлюємо початковий стан
                icon.style.opacity = '0';
                icon.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
                
                // Встановлюємо scale з збереженням rotate
                if (originalTransform && originalTransform !== 'none') {
                    icon.style.transform = originalTransform + ' scale(0.5)';
                } else {
                    icon.style.transform = 'scale(0.5)';
                }
            }
        });

        // Розраховуємо інтервал між появою іконок
        const iconCount = icons.length;
        const interval = duration / iconCount; // Рівномірно розподіляємо по часу

        // Показуємо іконки по черзі
        icons.forEach((selector, index) => {
            setTimeout(() => {
                const icon = document.querySelector(selector);
                if (icon) {
                    icon.style.opacity = '1';
                    // Відновлюємо оригінальний transform
                    const originalTransform = originalTransforms.get(selector);
                    if (originalTransform && originalTransform !== 'none') {
                        icon.style.transform = originalTransform;
                    } else {
                        icon.style.transform = 'scale(1)';
                    }
                }
            }, index * interval);
        });
    }

    // Змінні для зберігання посилань на canvas та дані для обробників подій
    let participateCanvas = null;
    let participateDeers = [];
    let participateDeerWidth = 0;
    let participateDeerHeight = 0;
    let canvasClickHandlersAttached = false;
    let participateAnimationId = null; // Глобальна змінна для ID анімації
    
    // Змінні для відстеження touch подій
    let touchStartX = 0;
    let touchStartY = 0;

    // Обробник кліку по canvas
    function handleParticipateCanvasClick(event) {
        if (!participateCanvas || !participateDeers.length) return;
        
        const rect = participateCanvas.getBoundingClientRect();
        const scaleX = participateCanvas.width / rect.width;
        const scaleY = participateCanvas.height / rect.height;
        
        // Отримуємо координати кліку відносно canvas
        const clientX = event.clientX;
        const clientY = event.clientY;
        
        const clickX = (clientX - rect.left) * scaleX;
        const clickY = (clientY - rect.top) * scaleY;
        
        // Перевіряємо чи клік потрапив на якогось оленя
        participateDeers.forEach(deer => {
            if (deer.isPointInside(clickX, clickY, participateDeerWidth, participateDeerHeight)) {
                deer.handleClick();
            }
        });
    }
    
    // Обробник touchstart для відстеження початку дотику
    function handleParticipateCanvasTouchStart(event) {
        if (!participateCanvas || !participateDeers.length) return;
        
        const touch = event.touches[0];
        if (!touch) return;
        
        // Зберігаємо координати початку дотику
        touchStartX = touch.clientX;
        touchStartY = touch.clientY;
    }
    
    // Обробник touchend для визначення чи це тап чи скрол
    function handleParticipateCanvasTouchEnd(event) {
        if (!participateCanvas || !participateDeers.length) return;
        
        const touch = event.changedTouches[0];
        if (!touch) return;
        
        // Розраховуємо відстань між touchstart та touchend
        const deltaX = Math.abs(touch.clientX - touchStartX);
        const deltaY = Math.abs(touch.clientY - touchStartY);
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        
        // Якщо відстань більше 10px - це скрол, не обробляємо
        if (distance > 10) {
            return;
        }
        
        // Якщо відстань менше або дорівнює 10px - це тап, обробляємо
        const rect = participateCanvas.getBoundingClientRect();
        const scaleX = participateCanvas.width / rect.width;
        const scaleY = participateCanvas.height / rect.height;
        
        const clickX = (touch.clientX - rect.left) * scaleX;
        const clickY = (touch.clientY - rect.top) * scaleY;
        
        // Перевіряємо чи тап потрапив на якогось оленя
        participateDeers.forEach(deer => {
            if (deer.isPointInside(clickX, clickY, participateDeerWidth, participateDeerHeight)) {
                deer.handleClick();
            }
        });
    }

    function initParticipateCanvas() {
        const canvas = document.querySelector('#participateCanvas');
        if (!canvas) return;

        // Зупиняємо попередню анімацію якщо вона існує
        if (participateAnimationId !== null) {
            cancelAnimationFrame(participateAnimationId);
            participateAnimationId = null;
        }
        
        // Очищаємо попередніх оленів
        participateDeers = [];
        
        const ctx = canvas.getContext('2d');
        
        // Оновлюємо посилання на canvas
        participateCanvas = canvas;
        
        // Визначаємо чи екран <= 1050px
        const isMobile = window.innerWidth <= 1050;

        // Константи для розмірів та позицій
        const CANVAS_WIDTH = isMobile ? 768 : 1366;
        const CANVAS_HEIGHT = isMobile ? 470 : 500;
        
        // Встановлюємо розміри canvas
        canvas.width = CANVAS_WIDTH;
        canvas.height = CANVAS_HEIGHT;
        
        // Фіксовані розміри дерева (не масштабуються)
        const TREE_WIDTH = 175;
        const TREE_HEIGHT = 167;
        
        // Параметри спрайт-листа
        const FRAMES_PER_ROW = 5; // 5 кадрів в рядку
        const TOTAL_ROWS = 2; // 2 ряди
        const SPRITE_SHEET_WIDTH = 1100; // Реальна ширина спрайт-листа
        const SPRITE_SHEET_HEIGHT = 468; // Реальна висота спрайт-листа
        
        // Розміри одного кадру в спрайт-листі
        const FRAME_WIDTH = Math.floor(SPRITE_SHEET_WIDTH / FRAMES_PER_ROW); // 220px
        const FRAME_HEIGHT = Math.floor(SPRITE_SHEET_HEIGHT / TOTAL_ROWS); // 234px
        
        // Фіксовані розміри оленя на canvas
        const DEER_SCALE = 0.5; // Масштаб для відображення на canvas
        const BASE_DEER_WIDTH = Math.floor(FRAME_WIDTH * DEER_SCALE); 
        const BASE_DEER_HEIGHT = Math.floor(FRAME_HEIGHT * DEER_SCALE);
        
        // Зменшуємо розміри оленів на 15% для мобільних пристроїв
        let DEER_WIDTH = BASE_DEER_WIDTH;
        let DEER_HEIGHT = BASE_DEER_HEIGHT;
        let deerHeightOffset = 0; // Зміщення для збереження позиції відносно нижнього краю
        
        if (isMobile) {
            DEER_WIDTH = Math.floor(BASE_DEER_WIDTH * .8);
            DEER_HEIGHT = Math.floor(BASE_DEER_HEIGHT * .8);
            // Розраховуємо зміщення для збереження позиції відносно нижнього краю
            deerHeightOffset = BASE_DEER_HEIGHT - DEER_HEIGHT;
        }

        // Позиції елементів
        let treeX, treeY;
        if (isMobile) {
            treeX = 235;
            treeY = CANVAS_HEIGHT - 152 - TREE_HEIGHT; 
        } else {
            // Десктопна версія
            treeX = CANVAS_WIDTH / 2 - 300; 
            treeY = CANVAS_HEIGHT / 2 - TREE_HEIGHT / 2;
        }
        
        // Параметри анімації (спільні для всіх оленів)
        const FRAME_DELAY = 12; // Затримка між кадрами
        const WALKING_FRAMES = 5; // Кількість кадрів для ходьби
        const FRAME_REPEAT = 2; // Кількість разів показувати кожен кадр
        const IDLE_MIN_DURATION = 60; // Мінімальна тривалість зупинки (1 секунда при 60fps)
        const IDLE_MAX_DURATION = 180; // Максимальна тривалість зупинки (3 секунди при 60fps)

        // Стани анімації оленя
        const DEER_STATE = {
            WALKING: 'walking',
            IDLE: 'idle',
            PETTING: 'petting'
        };
        
        // Параметри для стану petting
        const PETTING_MIN_DURATION = 60; // 1 секунда при 60fps
        const PETTING_MAX_DURATION = 180; // 3 секунди при 60fps
        const HEART_SIZE_MIN = 8;
        const HEART_SIZE_MAX = 12;
        const HEART_RISE_DISTANCE = 30; // Відстань підйому сердечка
        const HEART_SPAWN_INTERVAL = 20; // Інтервал появи сердечок (кадри)
        
        let frameCounter = 0; // Глобальний лічильник кадрів для синхронізації

        // Клас для сердечка
        class Heart {
            constructor(x, y, size, heartImage) {
                this.x = x;
                this.y = y;
                this.size = size;
                this.opacity = 1;
                this.scale = 1;
                this.riseSpeed = 0.5; // Швидкість підйому
                this.heartImage = heartImage; // Зображення сердечка
            }
            
            update() {
                this.y -= this.riseSpeed;
                this.opacity -= 0.02;
                this.scale += 0.01;
            }
            
            isVisible() {
                return this.opacity > 0;
            }
            
            draw(ctx) {
                if (!this.isVisible() || !this.heartImage || !this.heartImage.complete) return;
                
                ctx.save();
                ctx.globalAlpha = this.opacity;
                
                // Малюємо зображення сердечка з масштабуванням
                const drawSize = this.size * this.scale;
                const drawX = this.x - drawSize / 2;
                const drawY = this.y - drawSize / 2;
                
                ctx.drawImage(
                    this.heartImage,
                    drawX, drawY, drawSize, drawSize
                );
                
                ctx.restore();
            }
        }

        // Клас для оленя
        class Deer {
            constructor(startX, startY, minX, maxX, speed = 0.5, zIndex = 0, heartImage = null) {
                this.x = startX;
                this.y = startY;
                this.minX = minX;
                this.maxX = maxX;
                this.speed = speed;
                this.zIndex = zIndex; // Порядок малювання 
                this.direction = -1; // -1 = вліво, 1 = вправо
                this.state = DEER_STATE.WALKING;
                this.frameIndex = 0;
                this.frameRepeatCounter = 0;
                this.idleTimer = 0;
                this.idleDuration = 0;
                
                // Властивості для стану petting
                this.pettingTimer = 0;
                this.pettingDuration = 0;
                this.previousState = null; // Зберігаємо попередній стан
                this.savedX = 0; // Збережені координати при переході в petting
                this.savedY = 0;
                this.hearts = []; // Масив сердечок
                this.heartSpawnCounter = 0;
                this.heartImage = heartImage; // Зображення сердечка
            }
            
            // Перевірка чи клік потрапив на оленя
            isPointInside(clickX, clickY, deerWidth, deerHeight) {
                return clickX >= this.x && 
                       clickX <= this.x + deerWidth && 
                       clickY >= this.y && 
                       clickY <= this.y + deerHeight;
            }
            
            // Обробка кліку по оленю
            handleClick() {
                // Переходимо в стан petting або поновлюємо таймер
                if (this.state !== DEER_STATE.PETTING) {
                    // Зберігаємо попередній стан та координати
                    this.previousState = this.state;
                    this.savedX = this.x;
                    this.savedY = this.y;
                    this.state = DEER_STATE.PETTING;
                    this.pettingTimer = 0;
                    // Очищаємо старі сердечка
                    this.hearts = [];
                    this.heartSpawnCounter = 0;
                }
                
                // Поновлюємо таймер petting (1-3 секунди) та скидаємо поточний таймер
                this.pettingDuration = Math.floor(Math.random() * (PETTING_MAX_DURATION - PETTING_MIN_DURATION + 1)) + PETTING_MIN_DURATION;
                this.pettingTimer = 0; // Скидаємо таймер при кожному кліку
            }
            
            // Створення нового сердечка
            spawnHeart() {
                if (!this.heartImage) return; // Якщо зображення не завантажене, не створюємо сердечко
                const size = Math.random() * (HEART_SIZE_MAX - HEART_SIZE_MIN) + HEART_SIZE_MIN;
                const offsetX = (Math.random() - 0.5) * DEER_WIDTH; // Випадкове зміщення по X
                const heartX = this.x + DEER_WIDTH / 2 + offsetX;
                const heartY = this.y - 10; // Трохи вище оленя
                this.hearts.push(new Heart(heartX, heartY, size, this.heartImage));
            }

            getSpriteFrameIndex() {
                // Верхній рядок (0) = рух вліво, нижній рядок (1) = рух вправо
                const row = this.direction === -1 ? 0 : 1;
                let col = 0;

                if (this.state === DEER_STATE.WALKING) {
                    // Кадри ходьби: 0, 1, 2, 3, 4 (всі 5 кадрів)
                    col = this.frameIndex % WALKING_FRAMES;
                } else if (this.state === DEER_STATE.PETTING) {
                    // В стані petting використовуємо кадр 0 (idle кадр)
                    col = 0;
                } else {
                    // Стан зупинки (IDLE) - використовуємо кадр 0
                    col = 0;
                }

                return { row, col };
            }

            update(shouldUpdateFrame) {
                // Оновлюємо анімацію кадрів з повторенням для плавності
                if (shouldUpdateFrame) {
                    if (this.state === DEER_STATE.WALKING) {
                        this.frameRepeatCounter++;
                        // Показуємо кожен кадр кілька разів для плавнішої анімації
                        if (this.frameRepeatCounter >= FRAME_REPEAT) {
                            this.frameRepeatCounter = 0;
                            // Послідовно проходимо через всі кадри: 0, 1, 2, 3, 4, 0, 1, 2, 3, 4...
                            this.frameIndex = (this.frameIndex + 1) % WALKING_FRAMES;
                        }
                    }
                }

                // Логіка станів та руху
                if (this.state === DEER_STATE.PETTING) {
                    // В стані petting олень не рухається
                    this.pettingTimer++;
                    
                    // Створюємо сердечка з інтервалом
                    this.heartSpawnCounter++;
                    if (this.heartSpawnCounter >= HEART_SPAWN_INTERVAL) {
                        this.heartSpawnCounter = 0;
                        this.spawnHeart();
                    }
                    
                    // Оновлюємо сердечка
                    this.hearts = this.hearts.filter(heart => {
                        heart.update();
                        return heart.isVisible();
                    });
                    
                    // Перевіряємо чи закінчився стан petting
                    if (this.pettingTimer >= this.pettingDuration) {
                        // Повертаємося до збережених координат
                        this.x = this.savedX;
                        this.y = this.savedY;
                        
                        // Повертаємося до попереднього стану
                        if (this.previousState === DEER_STATE.WALKING) {
                            this.state = DEER_STATE.WALKING;
                            // Продовжуємо рух з збережених координат
                        } else if (this.previousState === DEER_STATE.IDLE) {
                            this.state = DEER_STATE.IDLE;
                            // Повертаємося до стану idle
                            this.idleTimer = 0;
                            this.idleDuration = Math.floor(Math.random() * (IDLE_MAX_DURATION - IDLE_MIN_DURATION + 1)) + IDLE_MIN_DURATION;
                        }
                        
                        this.previousState = null;
                        this.pettingTimer = 0;
                        this.pettingDuration = 0;
                        this.hearts = []; // Очищаємо сердечка
                        this.heartSpawnCounter = 0;
                    }
                } else if (this.state === DEER_STATE.WALKING) {
                    // Оновлюємо позицію оленя
                    this.x += this.speed * this.direction;

                    // Перевіряємо межі та переходимо до зупинки
                    if (this.x >= this.maxX && this.direction === 1) {
                        // Досягли правого краю - зупиняємося
                        this.x = this.maxX;
                        this.state = DEER_STATE.IDLE;
                        this.idleTimer = 0;
                        // Генеруємо випадкову тривалість зупинки від 1 до 3 секунд
                        this.idleDuration = Math.floor(Math.random() * (IDLE_MAX_DURATION - IDLE_MIN_DURATION + 1)) + IDLE_MIN_DURATION;
                    } else if (this.x <= this.minX && this.direction === -1) {
                        // Досягли лівого краю - зупиняємося
                        this.x = this.minX;
                        this.state = DEER_STATE.IDLE;
                        this.idleTimer = 0;
                        // Генеруємо випадкову тривалість зупинки від 1 до 3 секунд
                        this.idleDuration = Math.floor(Math.random() * (IDLE_MAX_DURATION - IDLE_MIN_DURATION + 1)) + IDLE_MIN_DURATION;
                    }
                } else if (this.state === DEER_STATE.IDLE) {
                    this.idleTimer++;
                    
                    // Після завершення зупинки змінюємо напрямок та переходимо до ходьби
                    if (this.idleTimer >= this.idleDuration) {
                        this.direction *= -1; // Змінюємо напрямок (вліво ↔ вправо)
                        this.state = DEER_STATE.WALKING;
                        this.frameIndex = 0;
                        this.frameRepeatCounter = 0; // Скидаємо лічильник повторень
                    }
                }
            }

            draw(ctx, spriteImage, frameWidth, frameHeight, deerWidth, deerHeight) {
                if (!spriteImage.complete || frameWidth <= 0 || frameHeight <= 0) return;

                const { row, col } = this.getSpriteFrameIndex();
                
                // Координати кадру в спрайт-листі (використовуємо Math.floor для уникнення sub-pixel рендерингу на iOS)
                const sourceX = Math.floor(col * frameWidth);
                const sourceY = Math.floor(row * frameHeight);
                const sourceWidth = Math.floor(frameWidth);
                const sourceHeight = Math.floor(frameHeight);
                
                // Координати на canvas (також використовуємо Math.floor)
                const destX = Math.floor(this.x);
                const destY = Math.floor(this.y);
                const destWidth = Math.floor(deerWidth);
                const destHeight = Math.floor(deerHeight);

                // Вирізаємо кадр зі спрайт-листа та малюємо на canvas
                ctx.drawImage(
                    spriteImage,
                    sourceX, sourceY, sourceWidth, sourceHeight, // Джерело (спрайт-лист)
                    destX, destY, destWidth, destHeight // Призначення (canvas)
                );
                
                // Малюємо сердечка над оленем
                this.hearts.forEach(heart => {
                    heart.draw(ctx);
                });
            }
        }
        
        // Завантаження зображень (створюємо перед створенням оленів)
        const images = {
            background: new Image(),
            tree: new Image(),
            deerSprite: new Image(), // Спрайт-лист замість одного зображення
            heart: new Image() // Зображення сердечка
        };
        
        // Масив оленів (можна додати більше)
        const deers = [];
        
        // Конфігурація для створення оленів
        const DEER_COUNT = 3; // Кількість оленів
        
        // Розраховуємо коефіцієнт масштабування для позицій оленів
        const scaleX = CANVAS_WIDTH / 1366;
        const scaleY = CANVAS_HEIGHT / 500;
        
        const deerConfigs = [
            {
                startX: CANVAS_WIDTH / 2 + 50 * scaleX,
                // Для збереження позиції відносно нижнього краю додаємо зміщення
                startY: treeY + TREE_HEIGHT - 20 + deerHeightOffset, // Під ялинкою (treeY + висота ялинки - відступ)
                minX: CANVAS_WIDTH / 2 - 200 * scaleX,
                maxX: CANVAS_WIDTH / 2 + 300 * scaleX,
                speed: 0.5,
                zIndex: 4
            },
            {
                startX: CANVAS_WIDTH / 2 - 100 * scaleX,
                // Для збереження позиції відносно нижнього краю додаємо зміщення
                startY: CANVAS_HEIGHT / 2 - BASE_DEER_HEIGHT / 2 + 50 * scaleY + deerHeightOffset,
                minX: CANVAS_WIDTH / 2 - 150 * scaleX,
                maxX: CANVAS_WIDTH / 2 + 150 * scaleX,
                speed: 0.3,
                zIndex: 3
            },
            {
                startX: CANVAS_WIDTH / 2 - 100 * scaleX,
                // Для збереження позиції відносно нижнього краю додаємо зміщення
                startY: CANVAS_HEIGHT / 2 - BASE_DEER_HEIGHT / 2 - 50 * scaleY + deerHeightOffset,
                minX: CANVAS_WIDTH / 2 - 250 * scaleX,
                maxX: CANVAS_WIDTH / 2 + 250 * scaleX,
                speed: 0.4,
                zIndex: 1 
            }
           
        ];

        // Створюємо оленів
        for (let i = 0; i < DEER_COUNT && i < deerConfigs.length; i++) {
            const config = deerConfigs[i];
            deers.push(new Deer(
                config.startX,
                config.startY,
                config.minX,
                config.maxX,
                config.speed,
                config.zIndex || 0, // Використовуємо zIndex з конфігу або 0 за замовчуванням
                images.heart // Передаємо зображення сердечка
            ));
        }

        let imagesLoaded = 0;
        const totalImages = 4;

        function onImageLoad() {
            imagesLoaded++;
            if (imagesLoaded === totalImages) {
                // Оновлюємо глобальні посилання на оленів після їх створення та завантаження зображень
                participateDeers = deers;
                participateDeerWidth = DEER_WIDTH;
                participateDeerHeight = DEER_HEIGHT;
                
                // Перевіряємо, чи спрайт-лист завантажився коректно
                if (images.deerSprite.complete) {
                    console.log('Deer sprite loaded:', {
                        width: images.deerSprite.width,
                        height: images.deerSprite.height,
                        frameWidth: FRAME_WIDTH,
                        frameHeight: FRAME_HEIGHT,
                        deerWidth: DEER_WIDTH,
                        deerHeight: DEER_HEIGHT
                    });
                }
                drawCanvas();
                startAnimation();
            }
        }

        images.background.onload = onImageLoad;
        images.tree.onload = onImageLoad;
        images.deerSprite.onload = onImageLoad;
        images.heart.onload = onImageLoad;

        images.background.src = isMobile ? 'https://fav-prom.com/html/global-ny-2026-hr/img/participate/canvas-bg-tab.png' : 'https://fav-prom.com/html/global-ny-2026-hr/img/participate/canvas-bg.png';
        images.tree.src = 'https://fav-prom.com/html/global-ny-2026-hr/img/participate/tree.png';
        images.deerSprite.src = 'https://fav-prom.com/html/global-ny-2026-hr/img/participate/deer-sprite.png';
        images.heart.src = 'https://fav-prom.com/html/global-ny-2026-hr/img/participate/deer-heart.png';
        
        // Додаємо обробники подій тільки один раз
        if (!canvasClickHandlersAttached) {
            canvas.addEventListener('click', handleParticipateCanvasClick);
            canvas.addEventListener('touchstart', handleParticipateCanvasTouchStart, { passive: true });
            canvas.addEventListener('touchend', handleParticipateCanvasTouchEnd, { passive: true });
            canvasClickHandlersAttached = true;
        }

        function drawCanvas() {
            // Очищення canvas
            ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

            // Малюємо фон
            if (images.background.complete) {
                ctx.drawImage(images.background, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
            }

            // zIndex для ялинки (між оленями)
            const TREE_Z_INDEX = 2; // Ялинка малюється між оленями з zIndex 1 та 2

            // Створюємо масив всіх елементів для малювання (олені + ялинка)
            const drawableElements = [];
            
            // Додаємо оленів
            deers.forEach(deer => {
                drawableElements.push({
                    type: 'deer',
                    zIndex: deer.zIndex,
                    draw: () => {
                        if (images.deerSprite.complete && FRAME_WIDTH > 0 && FRAME_HEIGHT > 0) {
                            deer.draw(ctx, images.deerSprite, FRAME_WIDTH, FRAME_HEIGHT, DEER_WIDTH, DEER_HEIGHT);
                        }
                    }
                });
            });
            
            // Додаємо ялинку
            drawableElements.push({
                type: 'tree',
                zIndex: TREE_Z_INDEX,
                draw: () => {
            if (images.tree.complete) {
                ctx.drawImage(images.tree, treeX, treeY, TREE_WIDTH, TREE_HEIGHT);
            }
                }
            });

            // Сортуємо всі елементи за zIndex (менше = малюється раніше, більше = малюється пізніше)
            drawableElements.sort((a, b) => a.zIndex - b.zIndex);

            // Малюємо всі елементи в правильному порядку
            drawableElements.forEach(element => {
                element.draw();
            });
        }

        function animate() {
            frameCounter++;

            // Перевіряємо, чи потрібно оновлювати кадри анімації
            const shouldUpdateFrame = frameCounter >= FRAME_DELAY;
            
            // Оновлюємо глобальний лічильник кадрів
            if (shouldUpdateFrame) {
                frameCounter = 0;
            }

            // Оновлюємо всіх оленів
            deers.forEach(deer => {
                deer.update(shouldUpdateFrame);
            });

            // Перемальовуємо canvas
            drawCanvas();

            participateAnimationId = requestAnimationFrame(animate);
        }

        function startAnimation() {
            if (participateAnimationId !== null) {
                cancelAnimationFrame(participateAnimationId);
            }
            animate();
        }

        // Зупиняємо анімацію при виході з viewport (опціонально)
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (participateAnimationId === null) {
                        startAnimation();
                    }
                } else {
                    if (participateAnimationId !== null) {
                        cancelAnimationFrame(participateAnimationId);
                        participateAnimationId = null;
                    }
                }
            });
        });

        observer.observe(canvas);
        
        // Обробка зміни розміру вікна для адаптивності
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                const newIsMobile = window.innerWidth <= 1050;
                // Перезапускаємо ініціалізацію тільки якщо змінився режим (mobile/desktop)
                if (newIsMobile !== isMobile) {
                    // Перезапускаємо ініціалізацію (анімація буде зупинена всередині initParticipateCanvas)
                    initParticipateCanvas();
                }
            }, 250);
        });
    }

    function initSnowflakesCanvas() {
        const canvas = document.querySelector('#snowflakesCanvas');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const favPage = document.querySelector('.fav-page');
        
        // Константи
        const SNOWFLAKE_COUNT = 400; 
        const SNOWFLAKE_MIN_SIZE = 4;
        const SNOWFLAKE_MAX_SIZE = 10;
        const SNOWFLAKE_MIN_SPEED = 0.1;
        const SNOWFLAKE_MAX_SPEED = 0.3;
        const SNOWFLAKE_WIND_RANGE = 0.4;
        const SNOWFLAKE_SPAWN_INTERVAL = 200;

        const snowflakes = [];
        let lastSnowflakeTime = 0;
        let animationId = null;
        
        // Встановлюємо розмір canvas на весь .fav-page
        function resizeCanvas() {
            let newWidth, newHeight;
            
            if (favPage) {
                // Використовуємо scrollHeight для отримання реальної висоти контенту
                const rect = favPage.getBoundingClientRect();
                newWidth = rect.width || favPage.offsetWidth || window.innerWidth;
                // Для висоти використовуємо scrollHeight якщо він більший за offsetHeight
                const offsetHeight = favPage.offsetHeight || favPage.clientHeight;
                const scrollHeight = favPage.scrollHeight;
                newHeight = Math.max(scrollHeight, offsetHeight, rect.height) || window.innerHeight;
            } else {
                // Fallback на viewport
                newWidth = window.innerWidth;
                newHeight = window.innerHeight;
            }
            
            // Перевіряємо чи розміри змінилися перед оновленням
            if (canvas.width !== newWidth || canvas.height !== newHeight) {
                canvas.width = newWidth;
                canvas.height = newHeight;
                // Очищаємо сніжинки при зміні розміру
                snowflakes.length = 0;
            }
        }

        // Встановлюємо розмір canvas з невеликою затримкою для коректного розрахунку розмірів
        // Використовуємо кілька кадрів для гарантії правильного розміру
        requestAnimationFrame(() => {
            resizeCanvas();
            requestAnimationFrame(() => {
                resizeCanvas();
                requestAnimationFrame(() => {
                    resizeCanvas();
                });
            });
        });
        
        window.addEventListener('resize', resizeCanvas);

        // Завантаження зображення сніжинки
        const snowflakeImage = new Image();
        let imageLoaded = false;

        snowflakeImage.onload = function() {
            imageLoaded = true;
            // Чекаємо поки сторінка вийде зі стану loading перед стартом анімації
            function waitForPageReady() {
                const isPageLoading = mainPage && mainPage.classList.contains('loading');
                
                if (isPageLoading) {
                    setTimeout(() => {
                        requestAnimationFrame(() => {
                            resizeCanvas();
                            requestAnimationFrame(() => {
                                resizeCanvas();
                                // Додаткова перевірка після ще одного кадру
                                requestAnimationFrame(() => {
                                    resizeCanvas();
                                    if (canvas.width > 0 && canvas.height > 0) {
                                        fillCanvasWithSnowflakes(); // Заповнюємо канвас сніжинками при першому рендері
                                        startAnimation();
                                    } else {
                                        // Якщо все ще неправильний розмір, повторюємо
                                        setTimeout(waitForPageReady, 50);
                                    }
                                });
                            });
                        });
                    }, 400); // Чекаємо трохи більше ніж hideLoader (300ms)
                } else {
                    // Сторінка готова, встановлюємо розмір та запускаємо
                    requestAnimationFrame(() => {
                        resizeCanvas();
                        requestAnimationFrame(() => {
                            resizeCanvas();
                            requestAnimationFrame(() => {
                                resizeCanvas();
                                if (canvas.width > 0 && canvas.height > 0) {
                                        fillCanvasWithSnowflakes(); // Заповнюємо канвас сніжинками при першому рендері
                                    startAnimation();
                                }
                            });
                        });
                    });
                }
            }
            
            waitForPageReady();
        };
        snowflakeImage.src = 'img/snowflake.png';
       

        // Клас для сніжинки
        class Snowflake {
            constructor(initialY = null) {
                this.x = Math.random() * (canvas.width || window.innerWidth);
                // Якщо передано initialY, використовуємо її (для початкового заповнення канвасу)
                // Інакше спавнимо зверху
                this.y = initialY !== null ? initialY : -20;
                this.size = Math.random() * (SNOWFLAKE_MAX_SIZE - SNOWFLAKE_MIN_SIZE) + SNOWFLAKE_MIN_SIZE;
                this.speed = Math.random() * (SNOWFLAKE_MAX_SPEED - SNOWFLAKE_MIN_SPEED) + SNOWFLAKE_MIN_SPEED;
                this.wind = (Math.random() - 0.5) * SNOWFLAKE_WIND_RANGE;
                this.opacity = Math.random() * 0.5 + 0.5;
                this.rotation = Math.random() * Math.PI * 2;
                this.rotationSpeed = (Math.random() - 0.5) * 0.02;
            }

            update() {
                this.y += this.speed;
                this.x += this.wind + (Math.sin(this.y * 0.01) * 0.2);
                this.rotation += this.rotationSpeed;
            }

            draw() {
                if (!imageLoaded) return;
                
                // Перевірка чи canvas має правильний розмір
                if (canvas.width === 0 || canvas.height === 0) return;

                ctx.save();
                ctx.globalAlpha = this.opacity;
                ctx.translate(this.x, this.y);
                ctx.rotate(this.rotation);
                ctx.drawImage(
                    snowflakeImage,
                    -this.size / 2,
                    -this.size / 2,
                    this.size,
                    this.size
                );
                ctx.restore();
            }

            isOffScreen() {
                return this.y > canvas.height + 20 || 
                       this.x < -20 || 
                       this.x > canvas.width + 20;
            }
        }

        function createSnowflake(initialY = null) {
            if (snowflakes.length < SNOWFLAKE_COUNT) {
                snowflakes.push(new Snowflake(initialY));
            }
        }
        
        // Функція для початкового заповнення канвасу сніжинками
        function fillCanvasWithSnowflakes() {
            if (canvas.width === 0 || canvas.height === 0) return;
            
            // Створюємо сніжинки по всьому канвасу (всі 200 сніжинок)
            for (let i = 0; i < SNOWFLAKE_COUNT; i++) {
                // Розподіляємо сніжинки по всій висоті канвасу
                const initialY = Math.random() * canvas.height;
                createSnowflake(initialY);
            }
        }

        function updateSnowflakes() {
            const now = Date.now();
            if (now - lastSnowflakeTime > SNOWFLAKE_SPAWN_INTERVAL) {
                createSnowflake();
                lastSnowflakeTime = now;
            }

            for (let i = snowflakes.length - 1; i >= 0; i--) {
                snowflakes[i].update();
                if (snowflakes[i].isOffScreen()) {
                    snowflakes.splice(i, 1);
                }
            }
        }

        function drawSnowflakes() {
            // Перевірка чи canvas має правильний розмір перед малюванням
            if (canvas.width === 0 || canvas.height === 0) {
                resizeCanvas();
                return;
            }
            
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            snowflakes.forEach(snowflake => {
                snowflake.draw();
            });
        }

        function animate() {
            // Перевіряємо розмір canvas на початку кожного кадру (тільки якщо він неправильний)
            if (canvas.width === 0 || canvas.height === 0) {
                resizeCanvas();
            }
            
            updateSnowflakes();
            drawSnowflakes();
            animationId = requestAnimationFrame(animate);
        }

        function startAnimation() {
            if (animationId) {
                cancelAnimationFrame(animationId);
            }
            animate();
        }

        // Зупиняємо анімацію при виході з viewport
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (!animationId && imageLoaded) {
                        startAnimation();
                    }
                } else {
                    if (animationId) {
                        cancelAnimationFrame(animationId);
                        animationId = null;
                    }
                }
            });
        });

        observer.observe(canvas);
    }
    
    loadTranslations()
        .then(init) // запуск ініту сторінки





    // const lngBtn = document.querySelector(".lng-btn")
    //
    // // Встановлюємо текст кнопки на поточну активну мову
    // function updateLanguageButton() {
    //     // Використовуємо ту саму логіку, що і для визначення locale
    //     let currentLocale = sessionStorage.getItem("locale") || "hr";
    //     if (hrLeng) currentLocale = 'hr';
    //     if (enLeng) currentLocale = 'en';
    //     if (lngBtn) {
    //         lngBtn.textContent = currentLocale;
    //     }
    // }
    //
    // // Оновлюємо кнопку при завантаженні (після визначення locale)
    // updateLanguageButton();

    // if (lngBtn) {
    //     lngBtn.addEventListener("click", () => {
    //         // Визначаємо поточну мову перед перемиканням
    //         let currentLocale = sessionStorage.getItem("locale") || "hr";
    //         if (hrLeng) currentLocale = 'hr';
    //         if (enLeng) currentLocale = 'en';
    //
    //         if (currentLocale === "en") {
    //             sessionStorage.removeItem("locale");
    //         } else {
    //             sessionStorage.setItem("locale", "en");
    //         }
    //         window.location.reload();
    //     });
    // }
    //
    // document.querySelector(".menu-btn")?.addEventListener("click", () => {
    //     document.querySelector(".menu-test")?.classList.toggle("hide");
    // });

    // Тимчасовий об'єкт з даними про проміжки тижнів
    // TODO: Замінити на дані з бекенду
    // Приклад структури даних з бекенду:
    // {
    //     1: { start: "2025-12-15T00:00:00", end: "2025-12-21T23:59:59" },
    //     2: { start: "2025-12-22T00:00:00", end: "2025-12-28T23:59:59" },
    //     ...
    // }
    // Для інтеграції з бекендом: замінити цей об'єкт на дані з API
    // Наприклад: const weeksData = await request('/api/weeks');
    const weeksData = {
        1: {
            start: "2025-12-15T00:00:00",
            end: "2025-12-21T23:59:59"
        },
        2: {
            start: "2025-12-22T00:00:00",
            end: "2025-12-28T23:59:59"
        },
        3: {
            start: "2025-12-29T00:00:00",
            end: "2026-01-04T23:59:59"
        },
        4: {
            start: "2026-01-05T00:00:00",
            end: "2026-01-11T23:59:59"
        }
    };

    // Функція для визначення активного тижня на основі даних з об'єкта
    function getActiveWeek(weeksData) {
        const currentDate = new Date();
        let activeWeekIndex = null;

        // Перевірка кожного тижня
        for (const weekNum in weeksData) {
            const week = weeksData[weekNum];
            const start = new Date(week.start);
            const end = new Date(week.end);

            if (currentDate >= start && currentDate <= end) {
                activeWeekIndex = parseInt(weekNum);
                break;
            }
        }

        return activeWeekIndex;
    }

    // Ініціалізація секції ігор з автоматичним визначенням тижня
    function initGamesWeek() {
        // Визначаємо активний тиждень на основі даних з об'єкта
        let activeWeek = getActiveWeek(weeksData) || 1;

        // Обмеження до 4 тижнів
        if (activeWeek > 4) activeWeek = 4;

        // Приховування всіх списків ігор
        const gameLists = document.querySelectorAll('.games__list');
        gameLists.forEach(list => {
            list.classList.add('hide');
        });

        // Показ тільки активного тижня
        const currentList = document.querySelector(`.games__list._week${activeWeek}`);
        if (currentList) {
            currentList.classList.remove('hide');
        }

        // Автоматичне додавання data-атрибутів для трекінгу та встановлення посилань
        autoAddDataButtons();
        setGameLinks();
    }

    // Тимчасовий об'єкт з мапінгом game-id на URL
    // TODO: Замінити на дані з бекенду
    // Приклад структури даних з бекенду:
    // {
    //     "week1_game1": "/casino/show-game/game-slug-1",
    //     "week1_game2": "/casino/show-game/game-slug-2",
    //     ...
    // }
    // Для інтеграції з бекендом: const gamesLinks = await request('/api/games/links');
    const gamesLinks = {
        // Week 1
        "week1_game1": "/casino/show-game1/",
        "week1_game2": "/casino/show-game/",
        "week1_game3": "/casino/show-game/",
        "week1_game4": "/casino/show-game/",
        "week1_game5": "/casino/show-game/",
        "week1_game6": "/casino/show-game/",
        "week1_game7": "/casino/show-game/",
        "week1_game8": "/casino/show-game/",
        "week1_game9": "/casino/show-game/",
        "week1_game10": "/casino/show-game/",
        // Week 2
        "week2_game1": "/casino/show-game/",
        "week2_game2": "/casino/show-game/",
        "week2_game3": "/casino/show-game/",
        "week2_game4": "/casino/show-game/",
        "week2_game5": "/casino/show-game/",
        "week2_game6": "/casino/show-game/",
        "week2_game7": "/casino/show-game/",
        "week2_game8": "/casino/show-game/",
        "week2_game9": "/casino/show-game/",
        "week2_game10": "/casino/show-game/",
        // Week 3
        "week3_game1": "/casino/show-game/",
        "week3_game2": "/casino/show-game/",
        "week3_game3": "/casino/show-game/",
        "week3_game4": "/casino/show-game/",
        "week3_game5": "/casino/show-game/",
        "week3_game6": "/casino/show-game/",
        "week3_game7": "/casino/show-game/",
        "week3_game8": "/casino/show-game/",
        "week3_game9": "/casino/show-game/",
        "week3_game10": "/casino/show-game/",
        // Week 4
        "week4_game1": "/casino/show-game/",
        "week4_game2": "/casino/show-game/",
        "week4_game3": "/casino/show-game/",
        "week4_game4": "/casino/show-game/",
        "week4_game5": "/casino/show-game/",
        "week4_game6": "/casino/show-game/",
        "week4_game7": "/casino/show-game/",
        "week4_game8": "/casino/show-game/",
        "week4_game9": "/casino/show-game/",
        "week4_game10": "/casino/show-game/"
    };

    // Встановлення унікальних посилань для кожної гри
    function setGameLinks() {
        const gameLinks = document.querySelectorAll('.games__item-link[data-game-id]');
        
        gameLinks.forEach(link => {
            const gameId = link.getAttribute('data-game-id');
            if (gameId && gamesLinks[gameId]) {
                link.href = gamesLinks[gameId];
            }
        });
    }

    // Автоматичне додавання data-атрибутів для трекінгу
    function autoAddDataButtons() {
        const gameLists = document.querySelectorAll('.games__list');
        
        gameLists.forEach(list => {
            const weekMatch = list.className.match(/_week(\d+)/);
            if (!weekMatch) return;
            
            const week = weekMatch[1];
            const items = list.querySelectorAll('.games__item');
            
            items.forEach((item, index) => {
                const gameNumber = index + 1;
                const buttonName = `week${week}Game${gameNumber}`;
                
                const linkEl = item.querySelector('.games__item-link');
                if (linkEl) {
                    // Оновлюємо data-button якщо ще не встановлено або некоректне
                    const currentButton = linkEl.getAttribute('data-button');
                    if (!currentButton || !currentButton.includes(`week${week}Game`)) {
                        linkEl.setAttribute('data-button', buttonName);
                    }
                    // Встановлюємо data-promo якщо ще не встановлено
                    if (!linkEl.getAttribute('data-promo')) {
                        linkEl.setAttribute('data-promo', 'razina_2026_hr');
                    }
                }
            });
        });
    }

    // Викликаємо initPageHeight при завантаженні сторінки
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            initPageHeight();
        });
    } else {
        // DOM вже завантажений
        initPageHeight();
    }

    // Викликаємо init() для ініціалізації всіх компонентів
    init();

})();
