(function () {

    const apiURL = 'https://fav-prom.com/api_black_prize'

    const mainPage = document.querySelector(".fav-page"),
        loader = document.querySelector(".spinner-overlay")

    const hrLeng = document.querySelector('#hrLeng');
    const enLeng = document.querySelector('#enLeng');

    // let locale = "en"
    let locale = sessionStorage.getItem("locale") || "hr"

    if (hrLeng) locale = 'hr';
    if (enLeng) locale = 'en';

    let debug = false

    if (debug) hideLoader()

    let i18nData = {};
    const translateState = true;
    // let userId = null;
    let userId = Number(sessionStorage.getItem("userId")) ?? null

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
            setTimeout(hideLoader, 300);

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


    const lngBtn = document.querySelector(".lng-btn")

    lngBtn.addEventListener("click", () => {
        if (sessionStorage.getItem("locale")) {
            sessionStorage.removeItem("locale");
        } else {
            sessionStorage.setItem("locale", "en");
        }
        window.location.reload();
    });

    document.querySelector(".menu-btn")?.addEventListener("click", () => {
        document.querySelector(".menu-test")?.classList.toggle("hide");
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

})();
