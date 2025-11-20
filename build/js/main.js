"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
(function () {
  var _Number, _document$querySelect;
  var apiURL = 'https://fav-prom.com/api_black_prize';
  var mainPage = document.querySelector(".fav-page"),
    loader = document.querySelector(".spinner-overlay");
  var hrLeng = document.querySelector('#hrLeng');
  var enLeng = document.querySelector('#enLeng');

  // let locale = "en"
  var locale = sessionStorage.getItem("locale") || "hr";
  if (hrLeng) locale = 'hr';
  if (enLeng) locale = 'en';
  var debug = false;
  if (debug) hideLoader();
  var i18nData = {};
  var translateState = true;
  // let userId = null;
  var userId = (_Number = Number(sessionStorage.getItem("userId"))) !== null && _Number !== void 0 ? _Number : null;
  var request = function request(link, extraOptions) {
    return fetch(apiURL + link, _objectSpread({
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }, extraOptions || {})).then(function (res) {
      if (!res.ok) throw new Error('API error');
      return res.json();
    })["catch"](function (err) {
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
  };
  function hideLoader() {
    loader.classList.add("hide");
    document.body.style.overflow = "auto";
    mainPage.classList.remove("loading");
  }
  function init() {
    return _init.apply(this, arguments);
  }
  function _init() {
    _init = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var attempts, maxAttempts, attemptInterval, tryDetectUserId, quickCheckAndRender, waitForUserId;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            quickCheckAndRender = function _quickCheckAndRender() {
              initInfiniteScroll();
              setTimeout(hideLoader, 300);
            };
            tryDetectUserId = function _tryDetectUserId() {
              if (window.store) {
                var state = window.store.getState();
                userId = state.auth.isAuthorized && state.auth.id || '';
              } else if (window.g_user_id) {
                userId = window.g_user_id;
              }
            };
            attempts = 0;
            maxAttempts = 20;
            attemptInterval = 50;
            waitForUserId = new Promise(function (resolve) {
              var interval = setInterval(function () {
                tryDetectUserId();
                if (userId || attempts >= maxAttempts) {
                  quickCheckAndRender();
                  clearInterval(interval);
                  resolve();
                }
                attempts++;
              }, attemptInterval);
            });
            _context.next = 8;
            return waitForUserId;
          case 8:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return _init.apply(this, arguments);
  }
  function loadTranslations() {
    return request("/new-translates/".concat(locale)).then(function (json) {
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
    var reportData = {
      origin: window.location.href,
      userid: userId,
      errorText: (err === null || err === void 0 ? void 0 : err.error) || (err === null || err === void 0 ? void 0 : err.text) || (err === null || err === void 0 ? void 0 : err.message) || 'Unknown error',
      type: (err === null || err === void 0 ? void 0 : err.name) || 'UnknownError',
      stack: (err === null || err === void 0 ? void 0 : err.stack) || ''
    };
    fetch('https://fav-prom.com/api-cms/reports/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reportData)
    })["catch"](console.warn);
  }
  function translate() {
    var elems = document.querySelectorAll('[data-translate]');
    if (elems && elems.length) {
      if (translateState) {
        elems.forEach(function (elem) {
          var key = elem.getAttribute('data-translate');
          elem.innerHTML = i18nData[key] || '*----NEED TO BE TRANSLATED----*   key:  ' + key;
          if (i18nData[key]) {
            elem.removeAttribute('data-translate');
          }
        });
      } else {
        console.log("translation works!");
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
    for (var _i = 0, _arr = ['hr', 'en']; _i < _arr.length; _i++) {
      var lang = _arr[_i];
      element.classList.remove(lang);
    }
    element.classList.add(locale);
  }
  function initInfiniteScroll() {
    var scrollBlocks = document.querySelectorAll('.scroll');
    if (!scrollBlocks.length) return;
    scrollBlocks.forEach(function (scrollBlock) {
      var scrollContent = scrollBlock.querySelector('.scroll__content');
      var scrollText = scrollBlock.querySelector('.scroll__text');
      if (!scrollContent || !scrollText) return;
      var text = scrollText.textContent.trim();
      if (!text) return; // Перевірка на порожній текст

      var paddingRight = 0;
      var fixedWidth = 2600; // Фіксована ширина контенту

      // Очищаємо контент
      scrollContent.innerHTML = '';

      // Створюємо елементи до тих пір, поки не досягнемо фіксованої ширини 2600px
      var elements = [];
      var itemCount = 0;
      var currentWidth = 0;

      // Спочатку створюємо один елемент, щоб отримати його ширину
      var tempElement = document.createElement('span');
      tempElement.className = 'scroll__text';
      tempElement.textContent = text;
      // Тимчасово показуємо елемент для вимірювання
      tempElement.style.visibility = 'hidden';
      tempElement.style.position = 'absolute';
      tempElement.style.whiteSpace = 'nowrap';
      document.body.appendChild(tempElement);
      var itemWidth = tempElement.offsetWidth + paddingRight;
      document.body.removeChild(tempElement);

      // Перевірка на валідну ширину елемента
      if (itemWidth <= 0) {
        console.warn('Scroll item width is 0 or invalid');
        return;
      }

      // Обмежуємо кількість ітерацій для безпеки
      var maxIterations = Math.ceil(fixedWidth / itemWidth) + 10;
      var iterations = 0;

      // Створюємо елементи до тих пір, поки не досягнемо фіксованої ширини
      while (currentWidth < fixedWidth && iterations < maxIterations) {
        var textElement = document.createElement('span');
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
      var contentWidth = currentWidth; // Це ширина першого набору елементів

      // Перевірка на валідну ширину контенту
      if (contentWidth <= 0) {
        console.warn('Scroll content width is 0 or invalid');
        return;
      }

      // Створюємо другу копію (отримуємо 2x фіксованої ширини)
      elements.forEach(function (element) {
        var clonedElement = element.cloneNode(true);
        scrollContent.appendChild(clonedElement);
      });

      // Анімація
      var position = 0; // Вихідна точка - 0 відносно лівого краю
      var speed = 0.3; // px per frame
      var animationId = null;
      function animate() {
        position -= speed; // Рухаємо вліво

        if (position <= -contentWidth) {
          position = position + contentWidth;
        }
        scrollContent.style.transform = "translateX(".concat(position, "px)");
        animationId = requestAnimationFrame(animate);
      }

      // Запускаємо анімацію
      requestAnimationFrame(function () {
        // Перевіряємо, чи елемент видимий перед запуском
        var computedStyle = window.getComputedStyle(scrollBlock);
        var isVisible = computedStyle.display !== 'none' && computedStyle.visibility !== 'hidden';
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
  loadTranslations().then(init); // запуск ініту сторінки

  var lngBtn = document.querySelector(".lng-btn");
  lngBtn.addEventListener("click", function () {
    if (sessionStorage.getItem("locale")) {
      sessionStorage.removeItem("locale");
    } else {
      sessionStorage.setItem("locale", "en");
    }
    window.location.reload();
  });
  (_document$querySelect = document.querySelector(".menu-btn")) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.addEventListener("click", function () {
    var _document$querySelect2;
    (_document$querySelect2 = document.querySelector(".menu-test")) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.classList.toggle("hide");
  });
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwibWFpblBhZ2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJsb2FkZXIiLCJockxlbmciLCJlbkxlbmciLCJsb2NhbGUiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJkZWJ1ZyIsImhpZGVMb2FkZXIiLCJpMThuRGF0YSIsInRyYW5zbGF0ZVN0YXRlIiwidXNlcklkIiwiTnVtYmVyIiwicmVxdWVzdCIsImxpbmsiLCJleHRyYU9wdGlvbnMiLCJmZXRjaCIsImhlYWRlcnMiLCJ0aGVuIiwicmVzIiwib2siLCJFcnJvciIsImpzb24iLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJyZXBvcnRFcnJvciIsInN0eWxlIiwiZGlzcGxheSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInN0YXJ0c1dpdGgiLCJQcm9taXNlIiwicmVqZWN0IiwiY2xhc3NMaXN0IiwiYWRkIiwiYm9keSIsIm92ZXJmbG93IiwicmVtb3ZlIiwiaW5pdCIsInRyeURldGVjdFVzZXJJZCIsInF1aWNrQ2hlY2tBbmRSZW5kZXIiLCJpbml0SW5maW5pdGVTY3JvbGwiLCJzZXRUaW1lb3V0Iiwic3RvcmUiLCJzdGF0ZSIsImdldFN0YXRlIiwiYXV0aCIsImlzQXV0aG9yaXplZCIsImlkIiwiZ191c2VyX2lkIiwiYXR0ZW1wdHMiLCJtYXhBdHRlbXB0cyIsImF0dGVtcHRJbnRlcnZhbCIsIndhaXRGb3JVc2VySWQiLCJyZXNvbHZlIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJsb2FkVHJhbnNsYXRpb25zIiwidHJhbnNsYXRlIiwicmVwb3J0RGF0YSIsIm9yaWdpbiIsInVzZXJpZCIsImVycm9yVGV4dCIsInRleHQiLCJtZXNzYWdlIiwidHlwZSIsIm5hbWUiLCJzdGFjayIsIm1ldGhvZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ3YXJuIiwiZWxlbXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwiZm9yRWFjaCIsImVsZW0iLCJrZXkiLCJnZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJyZW1vdmVBdHRyaWJ1dGUiLCJsb2ciLCJyZWZyZXNoTG9jYWxpemVkQ2xhc3MiLCJlbGVtZW50IiwibGFuZyIsInNjcm9sbEJsb2NrcyIsInNjcm9sbEJsb2NrIiwic2Nyb2xsQ29udGVudCIsInNjcm9sbFRleHQiLCJ0ZXh0Q29udGVudCIsInRyaW0iLCJwYWRkaW5nUmlnaHQiLCJmaXhlZFdpZHRoIiwiZWxlbWVudHMiLCJpdGVtQ291bnQiLCJjdXJyZW50V2lkdGgiLCJ0ZW1wRWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJ2aXNpYmlsaXR5IiwicG9zaXRpb24iLCJ3aGl0ZVNwYWNlIiwiYXBwZW5kQ2hpbGQiLCJpdGVtV2lkdGgiLCJvZmZzZXRXaWR0aCIsInJlbW92ZUNoaWxkIiwibWF4SXRlcmF0aW9ucyIsIk1hdGgiLCJjZWlsIiwiaXRlcmF0aW9ucyIsInRleHRFbGVtZW50IiwicHVzaCIsImNvbnRlbnRXaWR0aCIsImNsb25lZEVsZW1lbnQiLCJjbG9uZU5vZGUiLCJzcGVlZCIsImFuaW1hdGlvbklkIiwiYW5pbWF0ZSIsInRyYW5zZm9ybSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNvbXB1dGVkU3R5bGUiLCJnZXRDb21wdXRlZFN0eWxlIiwiaXNWaXNpYmxlIiwibG5nQnRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUl0ZW0iLCJzZXRJdGVtIiwicmVsb2FkIiwidG9nZ2xlIl0sIm1hcHBpbmdzIjoiOzs7K0NBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBLENBQUMsWUFBWTtFQUFBO0VBRVQsSUFBTUEsTUFBTSxHQUFHLHNDQUFzQztFQUVyRCxJQUFNQyxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFdBQVcsQ0FBQztJQUNoREMsTUFBTSxHQUFHRixRQUFRLENBQUNDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQztF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Q0FBQyxPQUFPLEVBQUUsWUFBTTtJQUFBO0lBQ2pFLDBCQUFBaEksUUFBUSxDQUFDQyxhQUFhLENBQUMsWUFBWSxDQUFDLDJEQUFwQyx1QkFBc0NtQyxTQUFTLENBQUNnRyxNQUFNLENBQUMsTUFBTSxDQUFDO0VBQ2xFLENBQUMsQ0FBQztBQUVOLENBQUMsR0FBRyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgpIHtcblxuICAgIGNvbnN0IGFwaVVSTCA9ICdodHRwczovL2Zhdi1wcm9tLmNvbS9hcGlfYmxhY2tfcHJpemUnXG5cbiAgICBjb25zdCBtYWluUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmF2LXBhZ2VcIiksXG4gICAgICAgIGxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3Bpbm5lci1vdmVybGF5XCIpXG5cbiAgICBjb25zdCBockxlbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaHJMZW5nJyk7XG4gICAgY29uc3QgZW5MZW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VuTGVuZycpO1xuXG4gICAgLy8gbGV0IGxvY2FsZSA9IFwiZW5cIlxuICAgIGxldCBsb2NhbGUgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxlXCIpIHx8IFwiaHJcIlxuXG4gICAgaWYgKGhyTGVuZykgbG9jYWxlID0gJ2hyJztcbiAgICBpZiAoZW5MZW5nKSBsb2NhbGUgPSAnZW4nO1xuXG4gICAgbGV0IGRlYnVnID0gZmFsc2VcblxuICAgIGlmIChkZWJ1ZykgaGlkZUxvYWRlcigpXG5cbiAgICBsZXQgaTE4bkRhdGEgPSB7fTtcbiAgICBjb25zdCB0cmFuc2xhdGVTdGF0ZSA9IHRydWU7XG4gICAgLy8gbGV0IHVzZXJJZCA9IG51bGw7XG4gICAgbGV0IHVzZXJJZCA9IE51bWJlcihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpKSA/PyBudWxsXG5cbiAgICBjb25zdCByZXF1ZXN0ID0gZnVuY3Rpb24gKGxpbmssIGV4dHJhT3B0aW9ucykge1xuICAgICAgICByZXR1cm4gZmV0Y2goYXBpVVJMICsgbGluaywge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC4uLihleHRyYU9wdGlvbnMgfHwge30pXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghcmVzLm9rKSB0aHJvdyBuZXcgRXJyb3IoJ0FQSSBlcnJvcicpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0FQSSByZXF1ZXN0IGZhaWxlZDonLCBlcnIpO1xuXG4gICAgICAgICAgICAgICAgcmVwb3J0RXJyb3IoZXJyKTtcblxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXYtcGFnZScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLnN0YXJ0c1dpdGgoXCJodHRwczovL3d3dy5mYXZiZXQuaHIvXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9wcm9tb2NpamUvcHJvbW9jaWphL3N0dWIvJztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvcHJvbW9zL3Byb21vL3N0dWIvJztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlkZUxvYWRlcigpe1xuICAgICAgICBsb2FkZXIuY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiXG4gICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5yZW1vdmUoXCJsb2FkaW5nXCIpXG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgbGV0IGF0dGVtcHRzID0gMDtcbiAgICAgICAgY29uc3QgbWF4QXR0ZW1wdHMgPSAyMDtcbiAgICAgICAgY29uc3QgYXR0ZW1wdEludGVydmFsID0gNTA7XG5cbiAgICAgICAgZnVuY3Rpb24gdHJ5RGV0ZWN0VXNlcklkKCkge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5zdG9yZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gd2luZG93LnN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgICAgICAgICAgdXNlcklkID0gc3RhdGUuYXV0aC5pc0F1dGhvcml6ZWQgJiYgc3RhdGUuYXV0aC5pZCB8fCAnJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAod2luZG93LmdfdXNlcl9pZCkge1xuICAgICAgICAgICAgICAgIHVzZXJJZCA9IHdpbmRvdy5nX3VzZXJfaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBxdWlja0NoZWNrQW5kUmVuZGVyKCkge1xuICAgICAgICAgICAgaW5pdEluZmluaXRlU2Nyb2xsKCk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGhpZGVMb2FkZXIsIDMwMCk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICBjb25zdCB3YWl0Rm9yVXNlcklkID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRyeURldGVjdFVzZXJJZCgpO1xuICAgICAgICAgICAgICAgIGlmICh1c2VySWQgfHwgYXR0ZW1wdHMgPj0gbWF4QXR0ZW1wdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgcXVpY2tDaGVja0FuZFJlbmRlcigpO1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhdHRlbXB0cysrO1xuICAgICAgICAgICAgfSwgYXR0ZW1wdEludGVydmFsKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXdhaXQgd2FpdEZvclVzZXJJZDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2FkVHJhbnNsYXRpb25zKCkge1xuICAgICAgICByZXR1cm4gcmVxdWVzdChgL25ldy10cmFuc2xhdGVzLyR7bG9jYWxlfWApXG4gICAgICAgICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgICAgICBpMThuRGF0YSA9IGpzb247XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlKCk7XG4gICAgICAgICAgICAgICAgLy8gY29uc3QgbXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChtdXRhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgbXV0YXRpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgLy8gICAgIHRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgICAgIC8vICAgICBtdXRhdGlvbk9ic2VydmVyLm9ic2VydmUodGFyZ2V0Tm9kZSwgeyBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgICAgICAgICAgLy8gbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGFyZGNvcmVUZW5uaXNcIiksIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIC8vICAgICBzdWJ0cmVlOiB0cnVlXG4gICAgICAgICAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlcG9ydEVycm9yKGVycikge1xuICAgICAgICBjb25zdCByZXBvcnREYXRhID0ge1xuICAgICAgICAgICAgb3JpZ2luOiB3aW5kb3cubG9jYXRpb24uaHJlZixcbiAgICAgICAgICAgIHVzZXJpZDogdXNlcklkLFxuICAgICAgICAgICAgZXJyb3JUZXh0OiBlcnI/LmVycm9yIHx8IGVycj8udGV4dCB8fCBlcnI/Lm1lc3NhZ2UgfHwgJ1Vua25vd24gZXJyb3InLFxuICAgICAgICAgICAgdHlwZTogZXJyPy5uYW1lIHx8ICdVbmtub3duRXJyb3InLFxuICAgICAgICAgICAgc3RhY2s6IGVycj8uc3RhY2sgfHwgJydcbiAgICAgICAgfTtcblxuICAgICAgICBmZXRjaCgnaHR0cHM6Ly9mYXYtcHJvbS5jb20vYXBpLWNtcy9yZXBvcnRzL2FkZCcsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXBvcnREYXRhKVxuICAgICAgICB9KS5jYXRjaChjb25zb2xlLndhcm4pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRyYW5zbGF0ZSgpIHtcbiAgICAgICAgY29uc3QgZWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10cmFuc2xhdGVdJylcbiAgICAgICAgaWYgKGVsZW1zICYmIGVsZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYodHJhbnNsYXRlU3RhdGUpe1xuICAgICAgICAgICAgICAgIGVsZW1zLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGVsZW0uZ2V0QXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgICAgICAgICAgICAgICAgICBlbGVtLmlubmVySFRNTCA9IGkxOG5EYXRhW2tleV0gfHwgJyotLS0tTkVFRCBUTyBCRSBUUkFOU0xBVEVELS0tLSogICBrZXk6ICAnICsga2V5O1xuICAgICAgICAgICAgICAgICAgICBpZiAoaTE4bkRhdGFba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0cmFuc2xhdGlvbiB3b3JrcyFcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobG9jYWxlID09PSAnZW4nKSB7XG4gICAgICAgICAgICBtYWluUGFnZS5jbGFzc0xpc3QuYWRkKCdlbicpO1xuICAgICAgICB9XG4gICAgICAgIHJlZnJlc2hMb2NhbGl6ZWRDbGFzcyhtYWluUGFnZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVmcmVzaExvY2FsaXplZENsYXNzKGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBsYW5nIG9mIFsnaHInLCAnZW4nXSkge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGxhbmcpO1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChsb2NhbGUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluaXRJbmZpbml0ZVNjcm9sbCgpIHtcbiAgICAgICAgY29uc3Qgc2Nyb2xsQmxvY2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNjcm9sbCcpO1xuICAgICAgICBcbiAgICAgICAgaWYgKCFzY3JvbGxCbG9ja3MubGVuZ3RoKSByZXR1cm47XG4gICAgICAgIFxuICAgICAgICBzY3JvbGxCbG9ja3MuZm9yRWFjaCgoc2Nyb2xsQmxvY2spID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbENvbnRlbnQgPSBzY3JvbGxCbG9jay5xdWVyeVNlbGVjdG9yKCcuc2Nyb2xsX19jb250ZW50Jyk7XG4gICAgICAgICAgICBjb25zdCBzY3JvbGxUZXh0ID0gc2Nyb2xsQmxvY2sucXVlcnlTZWxlY3RvcignLnNjcm9sbF9fdGV4dCcpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoIXNjcm9sbENvbnRlbnQgfHwgIXNjcm9sbFRleHQpIHJldHVybjtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgdGV4dCA9IHNjcm9sbFRleHQudGV4dENvbnRlbnQudHJpbSgpO1xuICAgICAgICAgICAgaWYgKCF0ZXh0KSByZXR1cm47IC8vINCf0LXRgNC10LLRltGA0LrQsCDQvdCwINC/0L7RgNC+0LbQvdGW0Lkg0YLQtdC60YHRglxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBwYWRkaW5nUmlnaHQgPSAwO1xuICAgICAgICAgICAgY29uc3QgZml4ZWRXaWR0aCA9IDI2MDA7IC8vINCk0ZbQutGB0L7QstCw0L3QsCDRiNC40YDQuNC90LAg0LrQvtC90YLQtdC90YLRg1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQntGH0LjRidCw0ZTQvNC+INC60L7QvdGC0LXQvdGCXG4gICAgICAgICAgICBzY3JvbGxDb250ZW50LmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQodGC0LLQvtGA0Y7RlNC80L4g0LXQu9C10LzQtdC90YLQuCDQtNC+INGC0LjRhSDQv9GW0YAsINC/0L7QutC4INC90LUg0LTQvtGB0Y/Qs9C90LXQvNC+INGE0ZbQutGB0L7QstCw0L3QvtGXINGI0LjRgNC40L3QuCAyNjAwcHhcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRzID0gW107XG4gICAgICAgICAgICBsZXQgaXRlbUNvdW50ID0gMDtcbiAgICAgICAgICAgIGxldCBjdXJyZW50V2lkdGggPSAwO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQodC/0L7Rh9Cw0YLQutGDINGB0YLQstC+0YDRjtGU0LzQviDQvtC00LjQvSDQtdC70LXQvNC10L3Rgiwg0YnQvtCxINC+0YLRgNC40LzQsNGC0Lgg0LnQvtCz0L4g0YjQuNGA0LjQvdGDXG4gICAgICAgICAgICBjb25zdCB0ZW1wRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIHRlbXBFbGVtZW50LmNsYXNzTmFtZSA9ICdzY3JvbGxfX3RleHQnO1xuICAgICAgICAgICAgdGVtcEVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgICAgICAgICAgLy8g0KLQuNC80YfQsNGB0L7QstC+INC/0L7QutCw0LfRg9GU0LzQviDQtdC70LXQvNC10L3RgiDQtNC70Y8g0LLQuNC80ZbRgNGO0LLQsNC90L3Rj1xuICAgICAgICAgICAgdGVtcEVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgdGVtcEVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICAgICAgdGVtcEVsZW1lbnQuc3R5bGUud2hpdGVTcGFjZSA9ICdub3dyYXAnO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0ZW1wRWxlbWVudCk7XG4gICAgICAgICAgICBjb25zdCBpdGVtV2lkdGggPSB0ZW1wRWxlbWVudC5vZmZzZXRXaWR0aCArIHBhZGRpbmdSaWdodDtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGVtcEVsZW1lbnQpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNC60LAg0L3QsCDQstCw0LvRltC00L3RgyDRiNC40YDQuNC90YMg0LXQu9C10LzQtdC90YLQsFxuICAgICAgICAgICAgaWYgKGl0ZW1XaWR0aCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdTY3JvbGwgaXRlbSB3aWR0aCBpcyAwIG9yIGludmFsaWQnKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCe0LHQvNC10LbRg9GU0LzQviDQutGW0LvRjNC60ZbRgdGC0Ywg0ZbRgtC10YDQsNGG0ZbQuSDQtNC70Y8g0LHQtdC30L/QtdC60LhcbiAgICAgICAgICAgIGNvbnN0IG1heEl0ZXJhdGlvbnMgPSBNYXRoLmNlaWwoZml4ZWRXaWR0aCAvIGl0ZW1XaWR0aCkgKyAxMDtcbiAgICAgICAgICAgIGxldCBpdGVyYXRpb25zID0gMDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0KHRgtCy0L7RgNGO0ZTQvNC+INC10LvQtdC80LXQvdGC0Lgg0LTQviDRgtC40YUg0L/RltGALCDQv9C+0LrQuCDQvdC1INC00L7RgdGP0LPQvdC10LzQviDRhNGW0LrRgdC+0LLQsNC90L7RlyDRiNC40YDQuNC90LhcbiAgICAgICAgICAgIHdoaWxlIChjdXJyZW50V2lkdGggPCBmaXhlZFdpZHRoICYmIGl0ZXJhdGlvbnMgPCBtYXhJdGVyYXRpb25zKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGV4dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICAgICAgdGV4dEVsZW1lbnQuY2xhc3NOYW1lID0gJ3Njcm9sbF9fdGV4dCc7XG4gICAgICAgICAgICAgICAgdGV4dEVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vINCa0L7QttC10L0g0LTRgNGD0LPQuNC5INC10LvQtdC80LXQvdGCINC+0YLRgNC40LzRg9GUINC60LvQsNGBIGRhcmtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbUNvdW50ICUgMiA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkYXJrJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHNjcm9sbENvbnRlbnQuYXBwZW5kQ2hpbGQodGV4dEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnRzLnB1c2godGV4dEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRXaWR0aCArPSBpdGVtV2lkdGg7XG4gICAgICAgICAgICAgICAgaXRlbUNvdW50Kys7XG4gICAgICAgICAgICAgICAgaXRlcmF0aW9ucysrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNC60LAg0L3QsCDQvdCw0Y/QstC90ZbRgdGC0Ywg0LXQu9C10LzQtdC90YLRltCyXG4gICAgICAgICAgICBpZiAoZWxlbWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdObyBzY3JvbGwgZWxlbWVudHMgY3JlYXRlZCcpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0JLQuNC60L7RgNC40YHRgtC+0LLRg9GU0LzQviDQvtCx0YfQuNGB0LvQtdC90YMg0YjQuNGA0LjQvdGDINC30LDQvNGW0YHRgtGMINCy0LjQvNGW0YDRjtCy0LDQvdC90Y8gKNC/0YDQsNGG0Y7RlCDQvdCw0LLRltGC0Ywg0LTQu9GPINC/0YDQuNGF0L7QstCw0L3QuNGFINC10LvQtdC80LXQvdGC0ZbQsilcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRXaWR0aCA9IGN1cnJlbnRXaWR0aDsgLy8g0KbQtSDRiNC40YDQuNC90LAg0L/QtdGA0YjQvtCz0L4g0L3QsNCx0L7RgNGDINC10LvQtdC80LXQvdGC0ZbQslxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNC60LAg0L3QsCDQstCw0LvRltC00L3RgyDRiNC40YDQuNC90YMg0LrQvtC90YLQtdC90YLRg1xuICAgICAgICAgICAgaWYgKGNvbnRlbnRXaWR0aCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdTY3JvbGwgY29udGVudCB3aWR0aCBpcyAwIG9yIGludmFsaWQnKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCh0YLQstC+0YDRjtGU0LzQviDQtNGA0YPQs9GDINC60L7Qv9GW0Y4gKNC+0YLRgNC40LzRg9GU0LzQviAyeCDRhNGW0LrRgdC+0LLQsNC90L7RlyDRiNC40YDQuNC90LgpXG4gICAgICAgICAgICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2xvbmVkRWxlbWVudCA9IGVsZW1lbnQuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICAgICAgICAgIHNjcm9sbENvbnRlbnQuYXBwZW5kQ2hpbGQoY2xvbmVkRWxlbWVudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0JDQvdGW0LzQsNGG0ZbRj1xuICAgICAgICAgICAgbGV0IHBvc2l0aW9uID0gMDsgLy8g0JLQuNGF0ZbQtNC90LAg0YLQvtGH0LrQsCAtIDAg0LLRltC00L3QvtGB0L3QviDQu9GW0LLQvtCz0L4g0LrRgNCw0Y5cbiAgICAgICAgICAgIGNvbnN0IHNwZWVkID0gMC4zOyAvLyBweCBwZXIgZnJhbWVcbiAgICAgICAgICAgIGxldCBhbmltYXRpb25JZCA9IG51bGw7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGZ1bmN0aW9uIGFuaW1hdGUoKSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb24gLT0gc3BlZWQ7IC8vINCg0YPRhdCw0ZTQvNC+INCy0LvRltCy0L5cblxuICAgICAgICAgICAgICAgIGlmIChwb3NpdGlvbiA8PSAtY29udGVudFdpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gcG9zaXRpb24gKyBjb250ZW50V2lkdGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHNjcm9sbENvbnRlbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHtwb3NpdGlvbn1weClgO1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbklkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQl9Cw0L/Rg9GB0LrQsNGU0LzQviDQsNC90ZbQvNCw0YbRltGOXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vINCf0LXRgNC10LLRltGA0Y/RlNC80L4sINGH0Lgg0LXQu9C10LzQtdC90YIg0LLQuNC00LjQvNC40Lkg0L/QtdGA0LXQtCDQt9Cw0L/Rg9GB0LrQvtC8XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHNjcm9sbEJsb2NrKTtcbiAgICAgICAgICAgICAgICBjb25zdCBpc1Zpc2libGUgPSBjb21wdXRlZFN0eWxlLmRpc3BsYXkgIT09ICdub25lJyAmJiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXB1dGVkU3R5bGUudmlzaWJpbGl0eSAhPT0gJ2hpZGRlbic7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKGlzVmlzaWJsZSAmJiBjb250ZW50V2lkdGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGUoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyDQr9C60YnQviDQtdC70LXQvNC10L3RgiDQv9GA0LjRhdC+0LLQsNC90LjQuSwg0LfQsNC/0YPRgdC60LDRlNC80L4g0LDQvdGW0LzQsNGG0ZbRjiDQstGB0LUg0L7QtNC90L5cbiAgICAgICAgICAgICAgICAgICAgLy8gKNCy0L7QvdCwINCx0YPQtNC1INC/0YDQsNGG0Y7QstCw0YLQuCwg0LrQvtC70Lgg0LXQu9C10LzQtdC90YIg0YHRgtCw0L3QtSDQstC40LTQuNC80LjQvClcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgbG9hZFRyYW5zbGF0aW9ucygpXG4gICAgICAgIC50aGVuKGluaXQpIC8vINC30LDQv9GD0YHQuiDRltC90ZbRgtGDINGB0YLQvtGA0ZbQvdC60LhcblxuXG4gICAgY29uc3QgbG5nQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sbmctYnRuXCIpXG5cbiAgICBsbmdCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgaWYgKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJsb2NhbGVcIikpIHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJsb2NhbGVcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwibG9jYWxlXCIsIFwiZW5cIik7XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWJ0blwiKT8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LXRlc3RcIik/LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpO1xuICAgIH0pO1xuXG59KSgpO1xuIl19
