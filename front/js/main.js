(function () {

    const apiURL = 'https://fav-prom.com/api_black_prize'

    const mainPage = document.querySelector(".fav-page"),
        loader = document.querySelector(".spinner-overlay"),
        resultsTable = document.querySelector("#table"),
        resultsTableOther = document.querySelector("#tableOther")

    const hrLeng = document.querySelector('#hrLeng');
    const enLeng = document.querySelector('#enLeng');

    let locale = "en"
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
            initInfiniteScroll();
            initParticipateCanvas();
            initSnowflakesCanvas();
            setTimeout(hideLoader, 300);

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

    function initParticipateCanvas() {
        const canvas = document.querySelector('#participateCanvas');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        canvas.width = 1366;
        canvas.height = 500;

        // Константи для розмірів та позицій
        const CANVAS_WIDTH = 1366;
        const CANVAS_HEIGHT = 500;
        const TREE_WIDTH = 175;
        const TREE_HEIGHT = 167;
        const DEER_WIDTH = 110;
        const DEER_HEIGHT = 117;

        // Позиції елементів
        const treeX = CANVAS_WIDTH / 2 - 100; // Трохи лівіше від центру
        const treeY = CANVAS_HEIGHT / 2 - TREE_HEIGHT / 2;
        
        // Початкова позиція оленя (правіше від ялинки)
        let deerX = CANVAS_WIDTH / 2 + 50;
        let deerY = CANVAS_HEIGHT / 2 - DEER_HEIGHT / 2;
        
        // Параметри анімації
        let deerDirection = 1; // 1 = вправо, -1 = вліво
        const deerSpeed = 0.5; // Швидкість руху
        const deerMinX = CANVAS_WIDTH / 2 - 200; // Мінімальна позиція (ліворуч)
        const deerMaxX = CANVAS_WIDTH / 2 + 300; // Максимальна позиція (праворуч)
        let animationId = null;


        // Завантаження зображень
        const images = {
            background: new Image(),
            tree: new Image(),
            deer: new Image()
        };

        let imagesLoaded = 0;
        const totalImages = 3;

        function onImageLoad() {
            imagesLoaded++;
            if (imagesLoaded === totalImages) {
                drawCanvas();
                startAnimation();
            }
        }

        images.background.onload = onImageLoad;
        images.tree.onload = onImageLoad;
        images.deer.onload = onImageLoad;

        images.background.src = 'img/participate/canvas-bg.png';
        images.tree.src = 'img/participate/tree.png';
        images.deer.src = 'img/participate/deer.png';

        function drawCanvas() {
            // Очищення canvas
            ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

            // Малюємо фон
            if (images.background.complete) {
                ctx.drawImage(images.background, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
            }

            // Малюємо ялинку (статична)
            if (images.tree.complete) {
                ctx.drawImage(images.tree, treeX, treeY, TREE_WIDTH, TREE_HEIGHT);
            }

            // Малюємо оленя
            if (images.deer.complete) {
                // Відображаємо оленя в залежності від напрямку
                if (deerDirection === -1) {
                    // Відображаємо дзеркально для руху вліво
                    ctx.save();
                    ctx.scale(-1, 1);
                    ctx.drawImage(images.deer, -deerX - DEER_WIDTH, deerY, DEER_WIDTH, DEER_HEIGHT);
                    ctx.restore();
                } else {
                    ctx.drawImage(images.deer, deerX, deerY, DEER_WIDTH, DEER_HEIGHT);
                }
            }
        }

        function animate() {
            // Оновлюємо позицію оленя
            deerX += deerSpeed * deerDirection;

            // Перевіряємо межі та змінюємо напрямок
            if (deerX >= deerMaxX) {
                deerX = deerMaxX;
                deerDirection = -1; // Рухаємося вліво
            } else if (deerX <= deerMinX) {
                deerX = deerMinX;
                deerDirection = 1; // Рухаємося вправо
            }

            // Перемальовуємо canvas
            drawCanvas();

            animationId = requestAnimationFrame(animate);
        }

        function startAnimation() {
            if (animationId) {
                cancelAnimationFrame(animationId);
            }
            animate();
        }

        // Зупиняємо анімацію при виході з viewport (опціонально)
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (!animationId) {
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

    function initSnowflakesCanvas() {
        const canvas = document.querySelector('#snowflakesCanvas');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const favPage = document.querySelector('.fav-page');
        
        // Константи
        const SNOWFLAKE_COUNT = 50;
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
                    // Якщо сторінка ще в стані loading, чекаємо поки loader приховається
                    // hideLoader викликається через 300ms після quickCheckAndRender
                    setTimeout(() => {
                        requestAnimationFrame(() => {
                            resizeCanvas();
                            requestAnimationFrame(() => {
                                resizeCanvas();
                                // Додаткова перевірка після ще одного кадру
                                requestAnimationFrame(() => {
                                    resizeCanvas();
                                    if (canvas.width > 0 && canvas.height > 0) {
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
            constructor() {
                this.x = Math.random() * (canvas.width || window.innerWidth);
                this.y = -20;
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

        function createSnowflake() {
            if (snowflakes.length < SNOWFLAKE_COUNT) {
                snowflakes.push(new Snowflake());
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

    function initInfiniteScroll() {
        const scrollBlocks = document.querySelectorAll('.scroll');
        
        if (!scrollBlocks.length) return;
        
        scrollBlocks.forEach((scrollBlock) => {
            const scrollContent = scrollBlock.querySelector('.scroll__content');
            const scrollText = scrollBlock.querySelector('.scroll__text');
            
            if (!scrollContent || !scrollText) return;
            
            const text = scrollText.textContent.trim();
            if (!text) return; // Перевірка на порожній текст
            
            const paddingRight = 0;
            const fixedWidth = 2600; // Фіксована ширина контенту
            
            // Очищаємо контент
            scrollContent.innerHTML = '';
            
            // Створюємо елементи до тих пір, поки не досягнемо фіксованої ширини 2600px
            const elements = [];
            let itemCount = 0;
            let currentWidth = 0;
            
            // Спочатку створюємо один елемент, щоб отримати його ширину
            const tempElement = document.createElement('span');
            tempElement.className = 'scroll__text';
            tempElement.textContent = text;
            // Тимчасово показуємо елемент для вимірювання
            tempElement.style.visibility = 'hidden';
            tempElement.style.position = 'absolute';
            tempElement.style.whiteSpace = 'nowrap';
            document.body.appendChild(tempElement);
            const itemWidth = tempElement.offsetWidth + paddingRight;
            document.body.removeChild(tempElement);
            
            // Перевірка на валідну ширину елемента
            if (itemWidth <= 0) {
                console.warn('Scroll item width is 0 or invalid');
                return;
            }
            
            // Обмежуємо кількість ітерацій для безпеки
            const maxIterations = Math.ceil(fixedWidth / itemWidth) + 10;
            let iterations = 0;
            
            // Створюємо елементи до тих пір, поки не досягнемо фіксованої ширини
            while (currentWidth < fixedWidth && iterations < maxIterations) {
                const textElement = document.createElement('span');
                textElement.className = 'scroll__text';
                textElement.textContent = text;
                
                // Кожен другий елемент отримує клас dark
                if (itemCount % 2 === 1) {
                    textElement.classList.add('dark');
                }
                
                scrollContent.appendChild(textElement);
                elements.push(textElement);
                currentWidth += itemWidth;
                itemCount++;
                iterations++;
            }
            
            // Перевірка на наявність елементів
            if (elements.length === 0) {
                console.warn('No scroll elements created');
                return;
            }
            
            // Використовуємо обчислену ширину замість вимірювання (працює навіть для прихованих елементів)
            const contentWidth = currentWidth; // Це ширина першого набору елементів
            
            // Перевірка на валідну ширину контенту
            if (contentWidth <= 0) {
                console.warn('Scroll content width is 0 or invalid');
                return;
            }
            
            // Створюємо другу копію (отримуємо 2x фіксованої ширини)
            elements.forEach((element) => {
                const clonedElement = element.cloneNode(true);
                scrollContent.appendChild(clonedElement);
            });
            
            // Анімація
            let position = 0; // Вихідна точка - 0 відносно лівого краю
            const speed = 0.3; // px per frame
            let animationId = null;
            
            function animate() {
                position -= speed; // Рухаємо вліво

                if (position <= -contentWidth) {
                    position = position + contentWidth;
                }
                
                scrollContent.style.transform = `translateX(${position}px)`;
                animationId = requestAnimationFrame(animate);
            }
            
            // Запускаємо анімацію
            requestAnimationFrame(() => {
                // Перевіряємо, чи елемент видимий перед запуском
                const computedStyle = window.getComputedStyle(scrollBlock);
                const isVisible = computedStyle.display !== 'none' && 
                                 computedStyle.visibility !== 'hidden';
                
                if (isVisible && contentWidth > 0) {
                    animate();
                } else {
                    // Якщо елемент прихований, запускаємо анімацію все одно
                    // (вона буде працювати, коли елемент стане видимим)
                    animate();
                }
            });
        });
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


})();
