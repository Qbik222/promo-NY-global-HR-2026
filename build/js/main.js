"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
(function () {
  var _Number, _document$querySelect;
  var apiURL = 'https://fav-prom.com/api_lvl_2026_hr';
  var mainPage = document.querySelector(".fav-page"),
    loader = document.querySelector(".spinner-overlay"),
    resultsTable = document.querySelector("#table"),
    resultsTableOther = document.querySelector("#tableOther"),
    unauthMsgs = document.querySelectorAll('.unauth-msg'),
    participateBtns = document.querySelectorAll('.part-btn'),
    redirectBtns = document.querySelectorAll('.btn-join');
  var hrLeng = document.querySelector('#hrLeng');
  var enLeng = document.querySelector('#enLeng');

  // Допоміжні функції для роботи з кнопками
  var toggleClasses = function toggleClasses(elements, className) {
    return elements.forEach(function (el) {
      return el.classList.toggle("".concat(className));
    });
  };
  var toggleTranslates = function toggleTranslates(elements, dataAttr) {
    return elements.forEach(function (el) {
      el.setAttribute('data-translate', "".concat(dataAttr));
      el.innerHTML = i18nData[dataAttr] || '*----NEED TO BE TRANSLATED----*   key:  ' + dataAttr;
      el.removeAttribute('data-translate');
    });
  };

  // let locale = "hr"
  var locale = sessionStorage.getItem("locale") || "hr";
  if (hrLeng) locale = 'hr';
  if (enLeng) locale = 'en';
  var debug = false;
  if (debug) hideLoader();
  var i18nData = {};
  var translateState = true;
  // let userId = null;
  var userId = (_Number = Number(sessionStorage.getItem("userId"))) !== null && _Number !== void 0 ? _Number : null;
  var isVerifiedUser = false;

  // Змінні для роботи з таблицею користувачів
  var tableData = [];
  var activeWeek = null;
  var periodAmount = 4; // Кількість тижнів
  var isPromoOver = false;
  var loaderBtn = false;
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

  // Функція для встановлення висот на основі viewport, хедера та футера
  function initPageHeight() {
    var favPage = document.querySelector('.fav-page');
    var frame = document.querySelector('.frame');
    var stickyWrap = document.querySelector('.sticky-wrap');
    if (!favPage || !frame || !stickyWrap) return;

    // Визначаємо висоту хедера залежно від ширини екрану
    // Десктоп (> 1024px): 60 + 21 = 81px
    // Мобілки (≤ 1024px): 48 + 21 = 69px
    var headerHeight = window.innerWidth > 1024 ? 81 : 69;

    // Визначаємо висоту футера залежно від ширини екрану
    // Футер присутній тільки на екранах ≤ 1024px, висота 56px
    var footerHeight = window.innerWidth <= 1024 ? 56 : 0;

    // Обчислюємо висоту .fav-page: viewport height - header height - footer height - відступ
    var viewportHeight = window.innerHeight;
    var calculatedHeight = viewportHeight - headerHeight - footerHeight - 32;
    // Висота не повинна бути менше 300px
    var favPageHeight = Math.max(calculatedHeight, 250);

    // Встановлюємо висоту .fav-page
    favPage.style.minHeight = "".concat(favPageHeight, "px");
    favPage.style.maxHeight = "".concat(favPageHeight, "px");

    // Встановлюємо висоту .frame: .fav-page + 2px
    var frameHeight = favPageHeight + 2;
    frame.style.minHeight = "".concat(frameHeight, "px");
    frame.style.maxHeight = "".concat(frameHeight, "px");

    // Встановлюємо margin-top для .sticky-wrap: негативна висота .fav-page
    stickyWrap.style.marginTop = "-".concat(favPageHeight, "px");
  }
  function init() {
    return _init.apply(this, arguments);
  }
  function _init() {
    _init = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var attempts, maxAttempts, attemptInterval, tryDetectUserId, initialBackgroundHeight, totalDropdownsHeight, initStickyWrapBackground, getDropdownContentHeight, recalculateDropdownsHeight, fixBackgroundPosition, restoreBackgroundPosition, quickCheckAndRender, waitForUserId;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            quickCheckAndRender = function _quickCheckAndRender() {
              // Ініціалізуємо висоти сторінки на основі viewport та хедера
              // initPageHeight();

              // Створюємо елемент фону
              initStickyWrapBackground();

              // Перевіряємо статус користувача та відображаємо відповідні кнопки
              checkUserAuth().then(function () {
                // // Завантажуємо дані користувачів
                // return loadUsers("?nocache=1");
              }).then(function () {
                // Перевіряємо чи промо завершено
                if (isPromoOver) {
                  participateBtns.forEach(function (el) {
                    el.classList.add('lock');
                  });
                  redirectBtns.forEach(function (el) {
                    el.classList.add('lock');
                  });
                }

                // // Відображаємо дані користувачів для активного тижня
                // if (activeWeek && tableData.length > 0) {
                //     renderUsers(activeWeek, tableData);
                // }

                initGamesWeek();
                initProgressBar();
                initParticipateCanvas();
                initSnowflakesCanvas();
                setTimeout(hideLoader, 300);
              });

              // Fix dropdown scroll issue - prevent page from shifting up when opening dropdown
              // and prevent background stripes from jumping
              var dropdowns = document.querySelectorAll('.dropdown');
              var openDropdownsCount = 0;

              // Оновлюємо висоти при зміні розміру вікна
              var resizeTimeout;
              window.addEventListener("resize", function () {
                clearTimeout(resizeTimeout);
                resizeTimeout = setTimeout(function () {
                  initPageHeight();
                  initParticipateCanvas();

                  // Оновлюємо початкову висоту фону при зміні розміру екрану
                  // Отримуємо базову висоту з CSS (без урахування дропдаунів)
                  var bgElement = document.querySelector('.sticky-wrap-bg');
                  if (bgElement && openDropdownsCount === 0) {
                    requestAnimationFrame(function () {
                      // Тимчасово скидаємо висоту для отримання базового значення
                      var tempHeight = bgElement.style.height;
                      bgElement.style.height = '';
                      var computedStyle = window.getComputedStyle(bgElement);
                      initialBackgroundHeight = parseFloat(computedStyle.height) || 1350;
                      bgElement.style.height = tempHeight;
                    });
                  }

                  // Оновлюємо позицію фону якщо дропдаун відкритий
                  if (openDropdownsCount > 0) {
                    recalculateDropdownsHeight();
                    fixBackgroundPosition();
                  }
                }, 100);
              });
              window.addEventListener("orientationchange", function () {
                setTimeout(function () {
                  initPageHeight();
                  initParticipateCanvas();

                  // Оновлюємо початкову висоту фону при зміні орієнтації
                  // Отримуємо базову висоту з CSS (без урахування дропдаунів)
                  var bgElement = document.querySelector('.sticky-wrap-bg');
                  if (bgElement && openDropdownsCount === 0) {
                    requestAnimationFrame(function () {
                      // Тимчасово скидаємо висоту для отримання базового значення
                      var tempHeight = bgElement.style.height;
                      bgElement.style.height = '';
                      var computedStyle = window.getComputedStyle(bgElement);
                      initialBackgroundHeight = parseFloat(computedStyle.height) || 1350;
                      bgElement.style.height = tempHeight;
                    });
                  }

                  // Оновлюємо позицію фону якщо дропдаун відкритий
                  if (openDropdownsCount > 0) {
                    recalculateDropdownsHeight();
                    fixBackgroundPosition();
                  }
                }, 100);
              });
              dropdowns.forEach(function (dropdown) {
                // Зберігаємо висоту дропдауна для кожного окремо
                var dropdownHeight = 0;
                var isIgnored = dropdown.classList.contains('_ignore-height');
                dropdown.addEventListener('toggle', function (event) {
                  var _this = this;
                  if (this.open) {
                    // Dropdown is opening
                    openDropdownsCount++;
                    setTimeout(function () {
                      dropdownHeight = getDropdownContentHeight(_this);
                      if (!isIgnored && dropdownHeight > 0) {
                        totalDropdownsHeight += dropdownHeight;
                      }
                      fixBackgroundPosition();
                      var summary = _this.querySelector('summary');
                      if (summary) {
                        var favPage = document.querySelector('.fav-page');
                        if (favPage) {
                          var summaryRect = summary.getBoundingClientRect();
                          if (summaryRect.top < 50) {
                            var scrollDelta = summaryRect.top - 100;
                            var currentScrollTop = favPage.scrollTop;
                            var targetScrollTop = currentScrollTop + scrollDelta;
                            requestAnimationFrame(function () {
                              favPage.scrollTo({
                                top: Math.max(0, targetScrollTop),
                                behavior: 'smooth'
                              });
                            });
                          }

                          // Перевіряємо видимість відкритого дропдауна
                          var _dropdownHeight = _this.offsetHeight;
                          var dropdownTop = summaryRect.top;
                          var dropdownBottom = dropdownTop + _dropdownHeight;
                          var viewportHeight = window.innerHeight;

                          // Визначаємо видиму частину дропдауна
                          var visibleTop = Math.max(0, dropdownTop);
                          var visibleBottom = Math.min(viewportHeight, dropdownBottom);
                          var visibleHeight = Math.max(0, visibleBottom - visibleTop);

                          // Розраховуємо відсоток видимості
                          var visiblePercentage = _dropdownHeight > 0 ? visibleHeight / _dropdownHeight * 100 : 0;

                          // Якщо видимо менше 40% - проскролити на залишок висоти який сховався
                          if (visiblePercentage < 40 && _dropdownHeight > 0) {
                            // Розраховуємо скільки сховалося зверху
                            var hiddenTop = dropdownTop < 0 ? Math.abs(dropdownTop) : 0;

                            // Розраховуємо скільки сховалося знизу
                            var hiddenBottom = dropdownBottom > viewportHeight ? dropdownBottom - viewportHeight : 0;

                            // Проскролюємо на більший з цих значень (щоб показати більше контенту)
                            var _scrollDelta = hiddenTop > hiddenBottom ? hiddenTop : -hiddenBottom;
                            var _currentScrollTop = favPage.scrollTop;
                            var _targetScrollTop = _currentScrollTop + _scrollDelta;

                            // Використовуємо requestAnimationFrame для плавного скролу
                            requestAnimationFrame(function () {
                              favPage.scrollTo({
                                top: Math.max(0, _targetScrollTop),
                                behavior: 'smooth'
                              });
                            });
                          }
                        }
                      }
                    }, 10);
                  } else {
                    // Dropdown is closing
                    openDropdownsCount--;

                    // Віднімаємо висоту цього дропдауна від загальної суми тільки якщо вона була додана
                    if (dropdownHeight > 0) {
                      totalDropdownsHeight -= dropdownHeight;
                    }
                    dropdownHeight = 0;

                    // Оновлюємо позицію фону
                    if (openDropdownsCount > 0) {
                      // Якщо є інші відкриті дропдауни, оновлюємо позицію
                      setTimeout(function () {
                        fixBackgroundPosition();
                      }, 10);
                    } else {
                      // Відновлюємо позицію фону тільки якщо всі дропдауни закриті
                      setTimeout(function () {
                        restoreBackgroundPosition();
                      }, 100);
                    }
                  }
                });
              });

              // Обробник кліку на кнопки участі
              document.addEventListener('click', function (e) {
                if (e.target.closest('.part-btn')) {
                  participate();
                }
              });
            };
            restoreBackgroundPosition = function _restoreBackgroundPos() {
              var bgElement = document.querySelector('.sticky-wrap-bg');
              if (!bgElement) return;

              // Скидаємо суму висот дропдаунів
              totalDropdownsHeight = 0;

              // Відновлюємо стандартне позиціонування
              bgElement.style.position = '';
              bgElement.style.left = '';
              bgElement.style.bottom = '';
              bgElement.style.width = '';
              bgElement.style.height = '';
              bgElement.style.transform = '';
            };
            fixBackgroundPosition = function _fixBackgroundPositio() {
              var bgElement = document.querySelector('.sticky-wrap-bg');
              if (!bgElement) return;

              // Використовуємо requestAnimationFrame для плавного оновлення
              requestAnimationFrame(function () {
                // Отримуємо поточну позицію елемента відносно viewport
                var rect = bgElement.getBoundingClientRect();

                // Обчислюємо нову висоту: початкова висота + сума висот відкритих дропдаунів
                var newHeight = initialBackgroundHeight !== null ? initialBackgroundHeight + totalDropdownsHeight : rect.height;

                // Фіксуємо позицію відносно viewport
                bgElement.style.position = 'absolute';
                bgElement.style.left = "".concat(rect.left + rect.width / 2, "px");
                // bgElement.style.bottom = `${window.innerHeight - rect.bottom}px`;
                bgElement.style.width = "".concat(rect.width, "px");
                bgElement.style.height = "".concat(newHeight, "px");
                bgElement.style.transform = 'translateX(-50%)';
              });
            };
            recalculateDropdownsHeight = function _recalculateDropdowns() {
              // Перераховуємо суму висот всіх відкритих дропдаунів (ігноруючи _ignore-height)
              totalDropdownsHeight = 0;
              var openDropdowns = document.querySelectorAll('.dropdown[open]');
              openDropdowns.forEach(function (dropdown) {
                // Пропускаємо дропдауни з класом _ignore-height
                if (!dropdown.classList.contains('_ignore-height')) {
                  totalDropdownsHeight += getDropdownContentHeight(dropdown);
                }
              });
            };
            getDropdownContentHeight = function _getDropdownContentHe(dropdown) {
              // Ігноруємо дропдауни з класом _ignore-height
              if (dropdown.classList.contains('_ignore-height')) {
                return 0;
              }

              // Отримуємо висоту контенту дропдауна (виключаючи summary)
              var dropTxt = dropdown.querySelector('.drop-txt');
              if (dropTxt) {
                return dropTxt.offsetHeight || dropTxt.scrollHeight;
              }
              // Якщо немає .drop-txt, використовуємо висоту всього дропдауна мінус summary
              var summary = dropdown.querySelector('summary');
              if (summary) {
                return dropdown.offsetHeight - summary.offsetHeight;
              }
              return dropdown.offsetHeight;
            };
            initStickyWrapBackground = function _initStickyWrapBackgr() {
              var stickyWrap = document.querySelector('.sticky-wrap');
              if (!stickyWrap) return;

              // Перевіряємо чи елемент вже існує
              var bgElement = stickyWrap.querySelector('.sticky-wrap-bg');
              if (!bgElement) {
                // Створюємо новий елемент
                bgElement = document.createElement('div');
                bgElement.className = 'sticky-wrap-bg';
                stickyWrap.insertBefore(bgElement, stickyWrap.firstChild);
              }

              // Зберігаємо початкову висоту після того, як елемент відрендериться
              // Використовуємо кілька кадрів для гарантії правильного розміру
              requestAnimationFrame(function () {
                requestAnimationFrame(function () {
                  if (initialBackgroundHeight === null && bgElement) {
                    var rect = bgElement.getBoundingClientRect();
                    // Використовуємо computed style якщо rect.height = 0
                    if (rect.height === 0) {
                      var computedStyle = window.getComputedStyle(bgElement);
                      initialBackgroundHeight = parseFloat(computedStyle.height) || 1350;
                    } else {
                      initialBackgroundHeight = rect.height;
                    }
                  }
                });
              });
              return bgElement;
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
            // Змінна для зберігання початкової висоти фону
            initialBackgroundHeight = null; // Змінна для зберігання суми висот відкритих дропдаунів
            totalDropdownsHeight = 0;
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
            _context.next = 15;
            return waitForUserId;
          case 15:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return _init.apply(this, arguments);
  }
  function checkUserAuth() {
    // Селектори для кнопок
    var unauthMsgs = document.querySelectorAll('.unauth-msg');
    // partBtn - кнопки участі (мають data-button з "partBtn" або клас .part-btn)
    var participateBtns = document.querySelectorAll('.part-btn, [data-button*="partBtn"], [data-button*="participateBtn"]');
    // playBtn - кнопки переходу на депозит/казино/спорт (мають data-button з "playBtn", "playCasinoBtn", "betSportBtn")
    var redirectBtns = document.querySelectorAll('[data-button*="playBtn"], [data-button*="playCasinoBtn"], [data-button*="betSportBtn"]');
    if (userId) {
      // Приховуємо кнопки для неавторизованих
      var _iterator = _createForOfIteratorHelper(unauthMsgs),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var unauthMes = _step.value;
          unauthMes.classList.add('hide');
        }

        // Перевіряємо статус користувача через API
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return request("/favuser/".concat(userId, "?nocache=1")).then(function (res) {
        if (res.userid) {
          // Користувач верифікований - показуємо кнопки переходу (playBtn)
          participateBtns.forEach(function (item) {
            return item.classList.add('hide');
          });
          redirectBtns.forEach(function (item) {
            return item.classList.remove('hide');
          });
          isVerifiedUser = true;
        } else {
          // Користувач не верифікований - показуємо кнопки участі (partBtn)
          participateBtns.forEach(function (item) {
            return item.classList.remove('hide');
          });
          redirectBtns.forEach(function (item) {
            return item.classList.add('hide');
          });
          isVerifiedUser = false;
        }
      })["catch"](function (err) {
        console.error('Error checking user auth:', err);
        // У випадку помилки показуємо кнопки участі
        participateBtns.forEach(function (item) {
          return item.classList.remove('hide');
        });
        redirectBtns.forEach(function (item) {
          return item.classList.add('hide');
        });
        isVerifiedUser = false;
        return Promise.resolve(false);
      });
    } else {
      // Користувач не авторизований - показуємо тільки кнопки входу
      var _iterator2 = _createForOfIteratorHelper(redirectBtns),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var redirectBtn = _step2.value;
          redirectBtn.classList.add('hide');
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      var _iterator3 = _createForOfIteratorHelper(participateBtns),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var participateBtn = _step3.value;
          participateBtn.classList.add('hide');
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      var _iterator4 = _createForOfIteratorHelper(unauthMsgs),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var _unauthMes = _step4.value;
          _unauthMes.classList.remove('hide');
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      isVerifiedUser = false;
      return Promise.resolve(false);
    }
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
  function renderUsers(weekNum) {
    var userData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    weekNum = Number(weekNum);
    var weekObj = userData.find(function (w) {
      return w.week === weekNum;
    });
    if (!weekObj || !weekObj.data || !Array.isArray(weekObj.data.users)) {
      console.error('Невірна структура даних');
      return;
    }
    var isStageEnded = weekObj.data.isStageEnded;
    userData = weekObj.data.users;
    var winnerAdditionalPrize = userData.find(function (u) {
      if (u.winner === true) {
        return u;
      }
    });
    var currentUser = userData.find(function (user) {
      return user.userid === userId;
    });
    if (userId && !currentUser && isVerifiedUser) {
      userData = [].concat(_toConsumableArray(userData), [{
        userid: userId,
        points: 0
      }]);
    }
    populateUsersTable(userData, userId, weekNum, currentUser, isVerifiedUser, isStageEnded, winnerAdditionalPrize);
  }
  function populateUsersTable(users, currentUserId, week, currentUser, isVerifiedUser, isStageEnded, winnerAdditionalPrize) {
    if (!(users !== null && users !== void 0 && users.length)) return;
    resultsTable.innerHTML = '';
    resultsTableOther.innerHTML = '';
    secondTableOther.innerHTML = '';
    secondTable.innerHTML = '';
    var isTopCurrentUser = currentUser && users.slice(0, 10).some(function (user) {
      return user.userid === currentUserId;
    });
    var topUsersLength = !userId || isTopCurrentUser ? 10 : 10;
    var topUsers = users.slice(0, topUsersLength);
    topUsers.forEach(function (user) {
      displayUser(user, user.userid === currentUserId, resultsTable, topUsers, isTopCurrentUser, week);
    });
    if (isVerifiedUser && !currentUser) {
      displayUser(currentUser, true, resultsTableOther, users, false, week);
    }
    if (!isTopCurrentUser && currentUser) {
      displayUser(currentUser, true, resultsTableOther, users, false, week);
    }
  }
  function displayUser(user, isCurrentUser, table, users, isTopCurrentUser, week) {
    var renderRow = function renderRow(userData) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var _options$highlight = options.highlight,
        highlight = _options$highlight === void 0 ? false : _options$highlight,
        _options$neighbor = options.neighbor,
        neighbor = _options$neighbor === void 0 ? false : _options$neighbor;
      var userRow = document.createElement('div');
      userRow.classList.add('table__row');
      var userPlace = users.indexOf(userData) + 1;
      var prizeKey = debug ? null : getPrizeTranslationKey(userPlace, week);
      if (userPlace <= 3) {
        userRow.classList.add("place".concat(userPlace));
      }
      if (highlight || isCurrentUser && !neighbor) {
        userRow.classList.add('you');
      } else if (neighbor) {
        userRow.classList.add('_neighbor');
      }
      userRow.innerHTML = "\n            <div class=\"table__row-item\">\n                ".concat(userPlace < 10 ? '0' + userPlace : userPlace, "\n                ").concat(isCurrentUser && !neighbor ? '<span class="you">' + translateKey("you") + '</span>' : '', "\n            </div>\n            <div class=\"table__row-item\">\n                ").concat(isCurrentUser && !neighbor ? userData.userid : maskUserId(userData.userid), "\n            </div>\n            <div class=\"table__row-item\">\n                ").concat(Number(userData.points).toFixed(2), "\n            </div>\n            <div class=\"table__row-item\">\n                ").concat(prizeKey ? translateKey(prizeKey) : ' - ', "\n            </div>\n        ");
      table.append(userRow);
    };
    if (isCurrentUser && !isTopCurrentUser) {
      var index = users.indexOf(user);
      if (users[index - 1]) {
        renderRow(users[index - 1], {
          neighbor: true
        });
      }
      renderRow(user, {
        highlight: true
      });
      if (users[index + 1]) {
        renderRow(users[index + 1], {
          neighbor: true
        });
      }
    } else {
      renderRow(user);
    }
  }
  function initProgressBar() {
    var canvas = document.querySelector('#progressBarCanvas');
    var percentElement = document.querySelector('#progressPercent');
    if (!canvas || !percentElement) return;
    var ctx = canvas.getContext('2d');

    // Константи
    var barHeight = 20; // Висота прогрес-бару
    var segmentWidth = 4; // Ширина одного сегмента
    var segmentHeight = 14; // Висота одного сегмента
    var segmentGap = 2; // Проміжок між сегментами
    var padding = 2; // Відступ від країв
    var segmentRadius = 1; // Border radius для сегментів

    // Параметри анімації завантаження
    var currentProgress = 1; // Починаємо з 1%
    var targetProgress = 100; // Цільовий прогрес
    var loadingDuration = 3000; // Тривалість завантаження: 3 секунди
    var startTime = Date.now();
    var animationId = null;
    var maxSegments = 0;
    var isLoadingComplete = false;
    function resizeCanvas() {
      // Отримуємо розміри контейнера
      var container = canvas.parentElement;
      var containerWidth = container.offsetWidth || 768;

      // Встановлюємо розміри canvas
      canvas.width = containerWidth;
      canvas.height = barHeight;

      // Розраховуємо кількість сегментів, що помістяться
      var availableWidth = containerWidth - padding * 2;
      var segmentWithGap = segmentWidth + segmentGap;
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
      var filledSegments = Math.floor(progress / 100 * maxSegments);

      // Малюємо заповнені сегменти з заокругленими кутами
      ctx.fillStyle = '#FFFFFF';
      var centerY = (barHeight - segmentHeight) / 2; // Вертикальне центрування

      for (var i = 0; i < filledSegments; i++) {
        var x = padding + i * (segmentWidth + segmentGap);
        var y = centerY;
        ctx.beginPath();
        if (ctx.roundRect) {
          // Сучасний метод (підтримується в нових браузерах)
          ctx.roundRect(x, y, segmentWidth, segmentHeight, segmentRadius);
        } else {
          // Fallback для старих браузерів
          var r = segmentRadius;
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
      var elapsed = Date.now() - startTime;
      var progress = 1 + elapsed / loadingDuration * 99; // Від 1% до 100%

      // Обмежуємо прогрес до 100%
      if (progress >= targetProgress) {
        progress = targetProgress;
        isLoadingComplete = true;
      }
      currentProgress = progress;

      // Оновлюємо відображення
      drawProgressBar(progress);

      // Оновлюємо відсотки (тільки цілі числа)
      var percent = Math.floor(progress);
      percentElement.textContent = percent + '%';

      // Продовжуємо анімацію до завершення завантаження
      if (!isLoadingComplete) {
        animationId = requestAnimationFrame(updateProgress);
      }
    }

    // Ініціалізуємо розміри canvas
    resizeCanvas();

    // Обробка зміни розміру вікна
    var resizeTimeout;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(function () {
        resizeCanvas();
      }, 100);
    });

    // Ініціалізація анімації появи іконок
    initIconsAnimation(loadingDuration);

    // Запускаємо анімацію з невеликою затримкою для коректного розрахунку розмірів
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        resizeCanvas();
        startTime = Date.now();
        updateProgress();
      });
    });
  }

  // Анімація появи іконок по черзі під час завантаження
  function initIconsAnimation(duration) {
    var icons = ['.welcome__decor-item._gamepad', '.welcome__decor-item._chip', '.welcome__decor-item._coin', '.welcome__decor-item._ball', '.welcome__decor-item._cup', '.welcome__decor-item._cube', '.welcome__decor-item._globe'];

    // Зберігаємо оригінальні transform для кожної іконки
    var originalTransforms = new Map();
    var hadInlineTransform = new Map();

    // Спочатку приховуємо всі іконки
    icons.forEach(function (selector) {
      var icon = document.querySelector(selector);
      if (icon) {
        // Перевіряємо, чи був встановлений inline transform ДО нашої анімації
        var hadInline = icon.style.transform && icon.style.transform !== '';
        hadInlineTransform.set(selector, hadInline);

        // Зберігаємо оригінальний transform з computed style (включає CSS)
        var computedStyle = window.getComputedStyle(icon);
        var originalTransform = computedStyle.transform;
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
    var iconCount = icons.length;
    var interval = duration / iconCount; // Рівномірно розподіляємо по часу

    // Показуємо іконки по черзі
    icons.forEach(function (selector, index) {
      setTimeout(function () {
        var icon = document.querySelector(selector);
        if (icon) {
          icon.style.opacity = '1';

          // Відновлюємо оригінальний transform
          var originalTransform = originalTransforms.get(selector);
          var hadInline = hadInlineTransform.get(selector);
          if (originalTransform && originalTransform !== 'none') {
            icon.style.transform = originalTransform;
          } else {
            if (hadInline) {
              icon.style.transform = 'none';
            } else {
              icon.style.removeProperty('transform');
            }
          }
        }
      }, index * interval);
    });
  }

  // Змінні для зберігання посилань на canvas та дані для обробників подій
  var participateCanvas = null;
  var participateDeers = [];
  var participateDeerWidth = 0;
  var participateDeerHeight = 0;
  var canvasClickHandlersAttached = false;
  var participateAnimationId = null; // Глобальна змінна для ID анімації

  // Змінні для відстеження touch подій
  var touchStartX = 0;
  var touchStartY = 0;

  // Обробник кліку по canvas
  function handleParticipateCanvasClick(event) {
    if (!participateCanvas || !participateDeers.length) return;
    var rect = participateCanvas.getBoundingClientRect();
    var scaleX = participateCanvas.width / rect.width;
    var scaleY = participateCanvas.height / rect.height;

    // Отримуємо координати кліку відносно canvas
    var clientX = event.clientX;
    var clientY = event.clientY;
    var clickX = (clientX - rect.left) * scaleX;
    var clickY = (clientY - rect.top) * scaleY;

    // Перевіряємо чи клік потрапив на якогось оленя
    participateDeers.forEach(function (deer) {
      if (deer.isPointInside(clickX, clickY, participateDeerWidth, participateDeerHeight)) {
        deer.handleClick();
      }
    });
  }

  // Обробник touchstart для відстеження початку дотику
  function handleParticipateCanvasTouchStart(event) {
    if (!participateCanvas || !participateDeers.length) return;
    var touch = event.touches[0];
    if (!touch) return;

    // Зберігаємо координати початку дотику
    touchStartX = touch.clientX;
    touchStartY = touch.clientY;
  }

  // Обробник touchend для визначення чи це тап чи скрол
  function handleParticipateCanvasTouchEnd(event) {
    if (!participateCanvas || !participateDeers.length) return;
    var touch = event.changedTouches[0];
    if (!touch) return;

    // Розраховуємо відстань між touchstart та touchend
    var deltaX = Math.abs(touch.clientX - touchStartX);
    var deltaY = Math.abs(touch.clientY - touchStartY);
    var distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    // Якщо відстань більше 10px - це скрол, не обробляємо
    if (distance > 10) {
      return;
    }

    // Якщо відстань менше або дорівнює 10px - це тап, обробляємо
    var rect = participateCanvas.getBoundingClientRect();
    var scaleX = participateCanvas.width / rect.width;
    var scaleY = participateCanvas.height / rect.height;
    var clickX = (touch.clientX - rect.left) * scaleX;
    var clickY = (touch.clientY - rect.top) * scaleY;

    // Перевіряємо чи тап потрапив на якогось оленя
    participateDeers.forEach(function (deer) {
      if (deer.isPointInside(clickX, clickY, participateDeerWidth, participateDeerHeight)) {
        deer.handleClick();
      }
    });
  }
  function initParticipateCanvas() {
    var canvas = document.querySelector('#participateCanvas');
    if (!canvas) return;

    // Зупиняємо попередню анімацію якщо вона існує
    if (participateAnimationId !== null) {
      cancelAnimationFrame(participateAnimationId);
      participateAnimationId = null;
    }

    // Очищаємо попередніх оленів
    participateDeers = [];
    var ctx = canvas.getContext('2d');

    // Оновлюємо посилання на canvas
    participateCanvas = canvas;

    // Визначаємо чи екран <= 1050px
    var isMobile = window.innerWidth <= 1050;

    // Константи для розмірів та позицій
    var CANVAS_WIDTH = isMobile ? 768 : 1366;
    var CANVAS_HEIGHT = isMobile ? 470 : 500;

    // Встановлюємо розміри canvas
    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;

    // Фіксовані розміри дерева (не масштабуються)
    var TREE_WIDTH = 175;
    var TREE_HEIGHT = 167;

    // Параметри спрайт-листа
    var FRAMES_PER_ROW = 5; // 5 кадрів в рядку
    var TOTAL_ROWS = 2; // 2 ряди
    var SPRITE_SHEET_WIDTH = 1100; // Реальна ширина спрайт-листа
    var SPRITE_SHEET_HEIGHT = 468; // Реальна висота спрайт-листа

    // Розміри одного кадру в спрайт-листі
    var FRAME_WIDTH = Math.floor(SPRITE_SHEET_WIDTH / FRAMES_PER_ROW); // 220px
    var FRAME_HEIGHT = Math.floor(SPRITE_SHEET_HEIGHT / TOTAL_ROWS); // 234px

    // Фіксовані розміри оленя на canvas
    var DEER_SCALE = 0.5; // Масштаб для відображення на canvas
    var BASE_DEER_WIDTH = Math.floor(FRAME_WIDTH * DEER_SCALE);
    var BASE_DEER_HEIGHT = Math.floor(FRAME_HEIGHT * DEER_SCALE);

    // Зменшуємо розміри оленів на 15% для мобільних пристроїв
    var DEER_WIDTH = BASE_DEER_WIDTH;
    var DEER_HEIGHT = BASE_DEER_HEIGHT;
    var deerHeightOffset = 0; // Зміщення для збереження позиції відносно нижнього краю

    if (isMobile) {
      DEER_WIDTH = Math.floor(BASE_DEER_WIDTH * .8);
      DEER_HEIGHT = Math.floor(BASE_DEER_HEIGHT * .8);
      // Розраховуємо зміщення для збереження позиції відносно нижнього краю
      deerHeightOffset = BASE_DEER_HEIGHT - DEER_HEIGHT;
    }

    // Позиції елементів
    var treeX, treeY;
    if (isMobile) {
      treeX = 235;
      treeY = CANVAS_HEIGHT - 152 - TREE_HEIGHT;
    } else {
      // Десктопна версія
      treeX = CANVAS_WIDTH / 2 - 300;
      treeY = CANVAS_HEIGHT / 2 - TREE_HEIGHT / 2;
    }

    // Параметри анімації (спільні для всіх оленів)
    var FRAME_DELAY = 12; // Затримка між кадрами
    var WALKING_FRAMES = 5; // Кількість кадрів для ходьби
    var FRAME_REPEAT = 2; // Кількість разів показувати кожен кадр
    var IDLE_MIN_DURATION = 60; // Мінімальна тривалість зупинки (1 секунда при 60fps)
    var IDLE_MAX_DURATION = 180; // Максимальна тривалість зупинки (3 секунди при 60fps)

    // Стани анімації оленя
    var DEER_STATE = {
      WALKING: 'walking',
      IDLE: 'idle',
      PETTING: 'petting'
    };

    // Параметри для стану petting
    var PETTING_MIN_DURATION = 60; // 1 секунда при 60fps
    var PETTING_MAX_DURATION = 180; // 3 секунди при 60fps
    var HEART_SIZE_MIN = 8;
    var HEART_SIZE_MAX = 12;
    var HEART_RISE_DISTANCE = 30; // Відстань підйому сердечка
    var HEART_SPAWN_INTERVAL = 20; // Інтервал появи сердечок (кадри)

    var frameCounter = 0; // Глобальний лічильник кадрів для синхронізації

    // Клас для сердечка
    var Heart = /*#__PURE__*/function () {
      function Heart(x, y, size, heartImage) {
        _classCallCheck(this, Heart);
        this.x = x;
        this.y = y;
        this.size = size;
        this.opacity = 1;
        this.scale = 1;
        this.riseSpeed = 0.5; // Швидкість підйому
        this.heartImage = heartImage; // Зображення сердечка
      }
      _createClass(Heart, [{
        key: "update",
        value: function update() {
          this.y -= this.riseSpeed;
          this.opacity -= 0.02;
          this.scale += 0.01;
        }
      }, {
        key: "isVisible",
        value: function isVisible() {
          return this.opacity > 0;
        }
      }, {
        key: "draw",
        value: function draw(ctx) {
          if (!this.isVisible()) return;

          // Перевірка наявності та завантаження зображення
          if (!this.heartImage) return;
          if (!this.heartImage.complete) return;
          if (this.heartImage.naturalWidth === 0 || this.heartImage.naturalHeight === 0) return;
          ctx.save();
          ctx.globalAlpha = Math.max(0, Math.min(1, this.opacity));

          // Малюємо зображення сердечка з масштабуванням
          var drawSize = this.size * this.scale;
          var drawX = this.x - drawSize / 2;
          var drawY = this.y - drawSize / 2;

          // Додаткова перевірка для коректного малювання
          if (drawSize > 0 && this.heartImage.width > 0 && this.heartImage.height > 0) {
            ctx.drawImage(this.heartImage, 0, 0, this.heartImage.width, this.heartImage.height, drawX, drawY, drawSize, drawSize);
          }
          ctx.restore();
        }
      }]);
      return Heart;
    }(); // Клас для оленя
    var Deer = /*#__PURE__*/function () {
      function Deer(startX, startY, minX, maxX) {
        var speed = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0.5;
        var zIndex = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
        var heartImage = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;
        _classCallCheck(this, Deer);
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
      _createClass(Deer, [{
        key: "isPointInside",
        value: function isPointInside(clickX, clickY, deerWidth, deerHeight) {
          return clickX >= this.x && clickX <= this.x + deerWidth && clickY >= this.y && clickY <= this.y + deerHeight;
        }

        // Обробка кліку по оленю
      }, {
        key: "handleClick",
        value: function handleClick() {
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
      }, {
        key: "spawnHeart",
        value: function spawnHeart() {
          if (!this.heartImage) return; // Якщо зображення не завантажене, не створюємо сердечко
          var size = Math.random() * (HEART_SIZE_MAX - HEART_SIZE_MIN) + HEART_SIZE_MIN;
          var offsetX = (Math.random() - 0.5) * DEER_WIDTH; // Випадкове зміщення по X
          var heartX = this.x + DEER_WIDTH / 2 + offsetX;
          var heartY = this.y - 10; // Трохи вище оленя
          this.hearts.push(new Heart(heartX, heartY, size, this.heartImage));
        }
      }, {
        key: "getSpriteFrameIndex",
        value: function getSpriteFrameIndex() {
          // Верхній рядок (0) = рух вліво, нижній рядок (1) = рух вправо
          var row = this.direction === -1 ? 0 : 1;
          var col = 0;
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
          return {
            row: row,
            col: col
          };
        }
      }, {
        key: "update",
        value: function update(shouldUpdateFrame) {
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
            this.hearts = this.hearts.filter(function (heart) {
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
      }, {
        key: "draw",
        value: function draw(ctx, spriteImage, frameWidth, frameHeight, deerWidth, deerHeight) {
          if (!spriteImage.complete || frameWidth <= 0 || frameHeight <= 0) return;
          var _this$getSpriteFrameI = this.getSpriteFrameIndex(),
            row = _this$getSpriteFrameI.row,
            col = _this$getSpriteFrameI.col;

          // Координати кадру в спрайт-листі (використовуємо Math.floor для уникнення sub-pixel рендерингу на iOS)
          var sourceX = Math.floor(col * frameWidth);
          var sourceY = Math.floor(row * frameHeight);
          var sourceWidth = Math.floor(frameWidth);
          var sourceHeight = Math.floor(frameHeight);

          // Координати на canvas (також використовуємо Math.floor)
          var destX = Math.floor(this.x);
          var destY = Math.floor(this.y);
          var destWidth = Math.floor(deerWidth);
          var destHeight = Math.floor(deerHeight);

          // Вирізаємо кадр зі спрайт-листа та малюємо на canvas
          ctx.drawImage(spriteImage, sourceX, sourceY, sourceWidth, sourceHeight,
          // Джерело (спрайт-лист)
          destX, destY, destWidth, destHeight // Призначення (canvas)
          );

          // Малюємо сердечка над оленем
          this.hearts.forEach(function (heart) {
            heart.draw(ctx);
          });
        }
      }]);
      return Deer;
    }(); // Завантаження зображень (створюємо перед створенням оленів)
    var images = {
      background: new Image(),
      tree: new Image(),
      deerSprite: new Image(),
      // Спрайт-лист замість одного зображення
      heart: new Image() // Зображення сердечка
    };

    // Масив оленів 
    var deers = [];

    // Конфігурація для створення оленів
    var DEER_COUNT = 3; // Кількість оленів

    // Розраховуємо коефіцієнт масштабування для позицій оленів
    var scaleX = CANVAS_WIDTH / 1366;
    var scaleY = CANVAS_HEIGHT / 500;
    var deerConfigs = [{
      startX: CANVAS_WIDTH / 2 + 50 * scaleX,
      startY: treeY + TREE_HEIGHT - 20 + deerHeightOffset,
      // Під ялинкою (treeY + висота ялинки - відступ)
      minX: CANVAS_WIDTH / 2 - 200 * scaleX,
      maxX: CANVAS_WIDTH / 2 + 300 * scaleX,
      speed: 0.5,
      zIndex: 4
    }, {
      startX: CANVAS_WIDTH / 2 - 100 * scaleX,
      startY: CANVAS_HEIGHT / 2 - BASE_DEER_HEIGHT / 2 + 50 * scaleY + deerHeightOffset,
      minX: CANVAS_WIDTH / 2 - 150 * scaleX,
      maxX: CANVAS_WIDTH / 2 + 150 * scaleX,
      speed: 0.3,
      zIndex: 3
    }, {
      startX: CANVAS_WIDTH / 2 - 100 * scaleX,
      startY: CANVAS_HEIGHT / 2 - BASE_DEER_HEIGHT / 2 - 50 * scaleY + deerHeightOffset,
      minX: CANVAS_WIDTH / 2 - 250 * scaleX,
      maxX: CANVAS_WIDTH / 2 + 250 * scaleX,
      speed: 0.4,
      zIndex: 1
    }];

    // Створюємо оленів
    for (var i = 0; i < DEER_COUNT && i < deerConfigs.length; i++) {
      var config = deerConfigs[i];
      deers.push(new Deer(config.startX, config.startY, config.minX, config.maxX, config.speed, config.zIndex || 0,
      // Використовуємо zIndex з конфігу або 0 за замовчуванням
      images.heart // Передаємо зображення сердечка
      ));
    }

    var imagesLoaded = 0;
    var totalImages = 4;
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
      canvas.addEventListener('touchstart', handleParticipateCanvasTouchStart, {
        passive: true
      });
      canvas.addEventListener('touchend', handleParticipateCanvasTouchEnd, {
        passive: true
      });
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
      var TREE_Z_INDEX = 2; // Ялинка малюється між оленями з zIndex 1 та 2

      // Створюємо масив всіх елементів для малювання (олені + ялинка)
      var drawableElements = [];

      // Додаємо оленів
      deers.forEach(function (deer) {
        drawableElements.push({
          type: 'deer',
          zIndex: deer.zIndex,
          draw: function draw() {
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
        draw: function draw() {
          if (images.tree.complete) {
            ctx.drawImage(images.tree, treeX, treeY, TREE_WIDTH, TREE_HEIGHT);
          }
        }
      });

      // Сортуємо всі елементи за zIndex (менше = малюється раніше, більше = малюється пізніше)
      drawableElements.sort(function (a, b) {
        return a.zIndex - b.zIndex;
      });

      // Малюємо всі елементи в правильному порядку
      drawableElements.forEach(function (element) {
        element.draw();
      });
    }
    function animate() {
      frameCounter++;

      // Перевіряємо, чи потрібно оновлювати кадри анімації
      var shouldUpdateFrame = frameCounter >= FRAME_DELAY;

      // Оновлюємо глобальний лічильник кадрів
      if (shouldUpdateFrame) {
        frameCounter = 0;
      }

      // Оновлюємо всіх оленів
      deers.forEach(function (deer) {
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

    // Обробка зміни розміру вікна для адаптивності
    var resizeTimeout;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(function () {
        var newIsMobile = window.innerWidth <= 1050;
        // Перезапускаємо ініціалізацію тільки якщо змінився режим (mobile/desktop)
        if (newIsMobile !== isMobile) {
          // Перезапускаємо ініціалізацію (анімація буде зупинена всередині initParticipateCanvas)
          initParticipateCanvas();
        }
      }, 250);
    });
  }
  function participate() {
    if (!userId) {
      return;
    }
    var params = {
      userid: userId
    };
    fetch(apiURL + '/user/', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(params)
    }).then(function (res) {
      return res.json();
    }).then(function (res) {
      loaderBtn = true;
      toggleClasses(participateBtns, "loader");
      toggleTranslates(participateBtns, "loader");
      setTimeout(function () {
        toggleTranslates(participateBtns, "loader_ready");
        toggleClasses(participateBtns, "done");
        toggleClasses(participateBtns, "loader");
      }, 500);
      setTimeout(function () {
        checkUserAuth();
        // loadUsers("?nocache=1").then(() => {
        //     if (activeWeek && tableData.length > 0) {
        //         renderUsers(activeWeek, tableData);
        //     }
        // });
      }, 1000);
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
  }
  function loadUsers(parametr) {
    var requests = [];
    tableData.length = 0;
    var _loop = function _loop() {
      var week = i;
      var req = request("/users/".concat(week).concat(parametr ? parametr : "")).then(function (data) {
        tableData.push({
          week: week,
          data: data
        });
        if (!activeWeek) {
          activeWeek = data.activeStageNumber;
        }
        isPromoOver = data.isPromoOver;
      });
      requests.push(req);
    };
    for (var i = 1; i <= periodAmount; i++) {
      _loop();
    }
    return Promise.all(requests)["catch"](function (error) {
      console.error('Error loading users:', error);
    });
  }
  function initSnowflakesCanvas() {
    var canvas = document.querySelector('#snowflakesCanvas');
    if (!canvas) return;
    var ctx = canvas.getContext('2d');
    var favPage = document.querySelector('.fav-page');

    // Константи
    var SNOWFLAKE_COUNT = 400;
    var SNOWFLAKE_MIN_SIZE = 4;
    var SNOWFLAKE_MAX_SIZE = 10;
    var SNOWFLAKE_MIN_SPEED = 0.1;
    var SNOWFLAKE_MAX_SPEED = 0.3;
    var SNOWFLAKE_WIND_RANGE = 0.4;
    var SNOWFLAKE_SPAWN_INTERVAL = 200;
    var snowflakes = [];
    var lastSnowflakeTime = 0;
    var animationId = null;

    // Встановлюємо розмір canvas на весь .fav-page
    function resizeCanvas() {
      var newWidth, newHeight;
      if (favPage) {
        // Використовуємо scrollHeight для отримання реальної висоти контенту
        var rect = favPage.getBoundingClientRect();
        newWidth = rect.width || favPage.offsetWidth || window.innerWidth;
        // Для висоти використовуємо scrollHeight якщо він більший за offsetHeight
        var offsetHeight = favPage.offsetHeight || favPage.clientHeight;
        var scrollHeight = favPage.scrollHeight;
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
    requestAnimationFrame(function () {
      resizeCanvas();
      requestAnimationFrame(function () {
        resizeCanvas();
        requestAnimationFrame(function () {
          resizeCanvas();
        });
      });
    });
    window.addEventListener('resize', resizeCanvas);

    // Завантаження зображення сніжинки
    var snowflakeImage = new Image();
    var imageLoaded = false;
    snowflakeImage.onload = function () {
      imageLoaded = true;
      // Чекаємо поки сторінка вийде зі стану loading перед стартом анімації
      function waitForPageReady() {
        var isPageLoading = mainPage && mainPage.classList.contains('loading');
        if (isPageLoading) {
          setTimeout(function () {
            requestAnimationFrame(function () {
              resizeCanvas();
              requestAnimationFrame(function () {
                resizeCanvas();
                // Додаткова перевірка після ще одного кадру
                requestAnimationFrame(function () {
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
          requestAnimationFrame(function () {
            resizeCanvas();
            requestAnimationFrame(function () {
              resizeCanvas();
              requestAnimationFrame(function () {
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
    snowflakeImage.src = 'https://fav-prom.com/html/global-ny-2026-hr/img/snowflake.png';

    // Клас для сніжинки
    var Snowflake = /*#__PURE__*/function () {
      function Snowflake() {
        var initialY = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        _classCallCheck(this, Snowflake);
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
      _createClass(Snowflake, [{
        key: "update",
        value: function update() {
          this.y += this.speed;
          this.x += this.wind + Math.sin(this.y * 0.01) * 0.2;
          this.rotation += this.rotationSpeed;
        }
      }, {
        key: "draw",
        value: function draw() {
          if (!imageLoaded) return;

          // Перевірка чи canvas має правильний розмір
          if (canvas.width === 0 || canvas.height === 0) return;
          ctx.save();
          ctx.globalAlpha = this.opacity;
          ctx.translate(this.x, this.y);
          ctx.rotate(this.rotation);
          ctx.drawImage(snowflakeImage, -this.size / 2, -this.size / 2, this.size, this.size);
          ctx.restore();
        }
      }, {
        key: "isOffScreen",
        value: function isOffScreen() {
          return this.y > canvas.height + 20 || this.x < -20 || this.x > canvas.width + 20;
        }
      }]);
      return Snowflake;
    }();
    function createSnowflake() {
      var initialY = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      if (snowflakes.length < SNOWFLAKE_COUNT) {
        snowflakes.push(new Snowflake(initialY));
      }
    }

    // Функція для початкового заповнення канвасу сніжинками
    function fillCanvasWithSnowflakes() {
      if (canvas.width === 0 || canvas.height === 0) return;

      // Створюємо сніжинки по всьому канвасу (всі 200 сніжинок)
      for (var i = 0; i < SNOWFLAKE_COUNT; i++) {
        // Розподіляємо сніжинки по всій висоті канвасу
        var initialY = Math.random() * canvas.height;
        createSnowflake(initialY);
      }
    }
    function updateSnowflakes() {
      var now = Date.now();
      if (now - lastSnowflakeTime > SNOWFLAKE_SPAWN_INTERVAL) {
        createSnowflake();
        lastSnowflakeTime = now;
      }
      for (var i = snowflakes.length - 1; i >= 0; i--) {
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
      snowflakes.forEach(function (snowflake) {
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
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
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
  loadTranslations().then(init); // запуск ініту сторінки

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
  var weeksData = {
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
    var currentDate = new Date();
    var activeWeekIndex = null;

    // Перевірка кожного тижня
    for (var weekNum in weeksData) {
      var week = weeksData[weekNum];
      var start = new Date(week.start);
      var end = new Date(week.end);
      if (currentDate >= start && currentDate <= end) {
        activeWeekIndex = parseInt(weekNum);
        break;
      }
    }
    return activeWeekIndex;
  }

  // Ініціалізація секції ігор з автоматичним визначенням тижня
  function initGamesWeek() {
    // Використовуємо глобальну змінну activeWeek, якщо вона вже встановлена, інакше визначаємо з weeksData
    if (!activeWeek) {
      activeWeek = getActiveWeek(weeksData) || 1;
    }

    // Обмеження до 4 тижнів
    if (activeWeek > 4) activeWeek = 4;

    // Приховування всіх списків ігор
    var gameLists = document.querySelectorAll('.games__list');
    gameLists.forEach(function (list) {
      list.classList.add('hide');
    });

    // Показ тільки активного тижня
    var currentList = document.querySelector(".games__list._week".concat(activeWeek));
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
  var gamesLinks = {
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
    var gameLinks = document.querySelectorAll('.games__item-link[data-game-id]');
    gameLinks.forEach(function (link) {
      var gameId = link.getAttribute('data-game-id');
      if (gameId && gamesLinks[gameId]) {
        link.href = gamesLinks[gameId];
      }
    });
  }

  // Автоматичне додавання data-атрибутів для трекінгу
  function autoAddDataButtons() {
    var gameLists = document.querySelectorAll('.games__list');
    gameLists.forEach(function (list) {
      var weekMatch = list.className.match(/_week(\d+)/);
      if (!weekMatch) return;
      var week = weekMatch[1];
      var items = list.querySelectorAll('.games__item');
      items.forEach(function (item, index) {
        var gameNumber = index + 1;
        var buttonName = "week".concat(week, "Game").concat(gameNumber);
        var linkEl = item.querySelector('.games__item-link');
        if (linkEl) {
          // Оновлюємо data-button якщо ще не встановлено або некоректне
          var currentButton = linkEl.getAttribute('data-button');
          if (!currentButton || !currentButton.includes("week".concat(week, "Game"))) {
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
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      initPageHeight();
    });
  } else {
    initPageHeight();
  }

  // TEST

  (_document$querySelect = document.querySelector(".menu-btn")) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.addEventListener("click", function () {
    var _document$querySelect2;
    (_document$querySelect2 = document.querySelector(".menu-test")) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.classList.toggle("hide");
  });
  var lngBtn = document.querySelector(".lng-btn");
  lngBtn.addEventListener("click", function () {
    if (sessionStorage.getItem("locale")) {
      sessionStorage.removeItem("locale");
    } else {
      sessionStorage.setItem("locale", "en");
    }
    window.location.reload();
  });
  var authBtn = document.querySelector(".auth-btn");
  authBtn.addEventListener("click", function () {
    var userid1 = "777777";
    var userid2 = "888888";

    // Визначаємо поточний стан та переходимо до наступного
    if (!userId) {
      // Стан 1: немає userId -> встановлюємо userid1
      sessionStorage.setItem("userId", userid1);
    } else if (userId.toString() === userid1) {
      // Стан 2: userid1 -> встановлюємо userid2
      sessionStorage.setItem("userId", userid2);
    } else if (userId.toString() === userid2) {
      // Стан 3: userid2 -> видаляємо userId
      sessionStorage.removeItem("userId");
    } else {
      // Якщо userId інший (неочікуваний), починаємо з userid1
      sessionStorage.setItem("userId", userid1);
    }
    window.location.reload();
  });
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwibWFpblBhZ2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJsb2FkZXIiLCJyZXN1bHRzVGFibGUiLCJyZXN1bHRzVGFibGVPdGhlciIsInVuYXV0aE1zZ3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwicGFydGljaXBhdGVCdG5zIiwicmVkaXJlY3RCdG5zIiwiaHJMZW5nIiwiZW5MZW5nIiwidG9nZ2xlQ2xhc3NlcyIsImVsZW1lbnRzIiwiY2xhc3NOYW1lIiwiZm9yRWFjaCIsImVsIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwidG9nZ2xlVHJhbnNsYXRlcyIsImRhdGFBdHRyIiwic2V0QXR0cmlidXRlIiwiaW5uZXJIVE1MIiwiaTE4bkRhdGEiLCJyZW1vdmVBdHRyaWJ1dGUiLCJsb2NhbGUiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJkZWJ1ZyIsImhpZGVMb2FkZXIiLCJ0cmFuc2xhdGVTdGF0ZSIsInVzZXJJZCIsIk51bWJlciIsImlzVmVyaWZpZWRVc2VyIiwidGFibGVEYXRhIiwiYWN0aXZlV2VlayIsInBlcmlvZEFtb3VudCIsImlzUHJvbW9PdmVyIiwibG9hZGVyQnRuIiwicmVxdWVzdCIsImxpbmsiLCJleHRyYU9wdGlvbnMiLCJmZXRjaCIsImhlYWRlcnMiLCJ0aGVuIiwicmVzIiwib2siLCJFcnJvciIsImpzb24iLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJyZXBvcnRFcnJvciIsInN0eWxlIiwiZGlzcGxheSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInN0YXJ0c1dpdGgiLCJQcm9taXNlIiwicmVqZWN0IiwiYWRkIiwiYm9keSIsIm92ZXJmbG93IiwicmVtb3ZlIiwiaW5pdFBhZ2VIZWlnaHQiLCJmYXZQYWdlIiwiZnJhbWUiLCJzdGlja3lXcmFwIiwiaGVhZGVySGVpZ2h0IiwiaW5uZXJXaWR0aCIsImZvb3RlckhlaWdodCIsInZpZXdwb3J0SGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJjYWxjdWxhdGVkSGVpZ2h0IiwiZmF2UGFnZUhlaWdodCIsIk1hdGgiLCJtYXgiLCJtaW5IZWlnaHQiLCJtYXhIZWlnaHQiLCJmcmFtZUhlaWdodCIsIm1hcmdpblRvcCIsImluaXQiLCJ0cnlEZXRlY3RVc2VySWQiLCJpbml0U3RpY2t5V3JhcEJhY2tncm91bmQiLCJnZXREcm9wZG93bkNvbnRlbnRIZWlnaHQiLCJyZWNhbGN1bGF0ZURyb3Bkb3duc0hlaWdodCIsImZpeEJhY2tncm91bmRQb3NpdGlvbiIsInJlc3RvcmVCYWNrZ3JvdW5kUG9zaXRpb24iLCJxdWlja0NoZWNrQW5kUmVuZGVyIiwiY2hlY2tVc2VyQXV0aCIsImluaXRHYW1lc1dlZWsiLCJpbml0UHJvZ3Jlc3NCYXIiLCJpbml0UGFydGljaXBhdGVDYW52YXMiLCJpbml0U25vd2ZsYWtlc0NhbnZhcyIsInNldFRpbWVvdXQiLCJkcm9wZG93bnMiLCJvcGVuRHJvcGRvd25zQ291bnQiLCJyZXNpemVUaW1lb3V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsZWFyVGltZW91dCIsImJnRWxlbWVudCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInRlbXBIZWlnaHQiLCJoZWlnaHQiLCJjb21wdXRlZFN0eWxlIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImluaXRpYWxCYWNrZ3JvdW5kSGVpZ2h0IiwicGFyc2VGbG9hdCIsImRyb3Bkb3duIiwiZHJvcGRvd25IZWlnaHQiLCJpc0lnbm9yZWQiLCJjb250YWlucyIsImV2ZW50Iiwib3BlbiIsInRvdGFsRHJvcGRvd25zSGVpZ2h0Iiwic3VtbWFyeSIsInN1bW1hcnlSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwic2Nyb2xsRGVsdGEiLCJjdXJyZW50U2Nyb2xsVG9wIiwic2Nyb2xsVG9wIiwidGFyZ2V0U2Nyb2xsVG9wIiwic2Nyb2xsVG8iLCJiZWhhdmlvciIsIm9mZnNldEhlaWdodCIsImRyb3Bkb3duVG9wIiwiZHJvcGRvd25Cb3R0b20iLCJ2aXNpYmxlVG9wIiwidmlzaWJsZUJvdHRvbSIsIm1pbiIsInZpc2libGVIZWlnaHQiLCJ2aXNpYmxlUGVyY2VudGFnZSIsImhpZGRlblRvcCIsImFicyIsImhpZGRlbkJvdHRvbSIsImUiLCJ0YXJnZXQiLCJjbG9zZXN0IiwicGFydGljaXBhdGUiLCJwb3NpdGlvbiIsImxlZnQiLCJib3R0b20iLCJ3aWR0aCIsInRyYW5zZm9ybSIsInJlY3QiLCJuZXdIZWlnaHQiLCJvcGVuRHJvcGRvd25zIiwiZHJvcFR4dCIsInNjcm9sbEhlaWdodCIsImNyZWF0ZUVsZW1lbnQiLCJpbnNlcnRCZWZvcmUiLCJmaXJzdENoaWxkIiwic3RvcmUiLCJzdGF0ZSIsImdldFN0YXRlIiwiYXV0aCIsImlzQXV0aG9yaXplZCIsImlkIiwiZ191c2VyX2lkIiwiYXR0ZW1wdHMiLCJtYXhBdHRlbXB0cyIsImF0dGVtcHRJbnRlcnZhbCIsIndhaXRGb3JVc2VySWQiLCJyZXNvbHZlIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJ1bmF1dGhNZXMiLCJ1c2VyaWQiLCJpdGVtIiwicmVkaXJlY3RCdG4iLCJwYXJ0aWNpcGF0ZUJ0biIsImxvYWRUcmFuc2xhdGlvbnMiLCJ0cmFuc2xhdGUiLCJyZXBvcnREYXRhIiwib3JpZ2luIiwiZXJyb3JUZXh0IiwidGV4dCIsIm1lc3NhZ2UiLCJ0eXBlIiwibmFtZSIsInN0YWNrIiwibWV0aG9kIiwiSlNPTiIsInN0cmluZ2lmeSIsIndhcm4iLCJlbGVtcyIsImxlbmd0aCIsImVsZW0iLCJrZXkiLCJnZXRBdHRyaWJ1dGUiLCJsb2ciLCJyZWZyZXNoTG9jYWxpemVkQ2xhc3MiLCJlbGVtZW50IiwibGFuZyIsInJlbmRlclVzZXJzIiwid2Vla051bSIsInVzZXJEYXRhIiwid2Vla09iaiIsImZpbmQiLCJ3Iiwid2VlayIsImRhdGEiLCJBcnJheSIsImlzQXJyYXkiLCJ1c2VycyIsImlzU3RhZ2VFbmRlZCIsIndpbm5lckFkZGl0aW9uYWxQcml6ZSIsInUiLCJ3aW5uZXIiLCJjdXJyZW50VXNlciIsInVzZXIiLCJwb2ludHMiLCJwb3B1bGF0ZVVzZXJzVGFibGUiLCJjdXJyZW50VXNlcklkIiwic2Vjb25kVGFibGVPdGhlciIsInNlY29uZFRhYmxlIiwiaXNUb3BDdXJyZW50VXNlciIsInNsaWNlIiwic29tZSIsInRvcFVzZXJzTGVuZ3RoIiwidG9wVXNlcnMiLCJkaXNwbGF5VXNlciIsImlzQ3VycmVudFVzZXIiLCJ0YWJsZSIsInJlbmRlclJvdyIsIm9wdGlvbnMiLCJoaWdobGlnaHQiLCJuZWlnaGJvciIsInVzZXJSb3ciLCJ1c2VyUGxhY2UiLCJpbmRleE9mIiwicHJpemVLZXkiLCJnZXRQcml6ZVRyYW5zbGF0aW9uS2V5IiwidHJhbnNsYXRlS2V5IiwibWFza1VzZXJJZCIsInRvRml4ZWQiLCJhcHBlbmQiLCJpbmRleCIsImNhbnZhcyIsInBlcmNlbnRFbGVtZW50IiwiY3R4IiwiZ2V0Q29udGV4dCIsImJhckhlaWdodCIsInNlZ21lbnRXaWR0aCIsInNlZ21lbnRIZWlnaHQiLCJzZWdtZW50R2FwIiwicGFkZGluZyIsInNlZ21lbnRSYWRpdXMiLCJjdXJyZW50UHJvZ3Jlc3MiLCJ0YXJnZXRQcm9ncmVzcyIsImxvYWRpbmdEdXJhdGlvbiIsInN0YXJ0VGltZSIsIkRhdGUiLCJub3ciLCJhbmltYXRpb25JZCIsIm1heFNlZ21lbnRzIiwiaXNMb2FkaW5nQ29tcGxldGUiLCJyZXNpemVDYW52YXMiLCJjb250YWluZXIiLCJwYXJlbnRFbGVtZW50IiwiY29udGFpbmVyV2lkdGgiLCJvZmZzZXRXaWR0aCIsImF2YWlsYWJsZVdpZHRoIiwic2VnbWVudFdpdGhHYXAiLCJmbG9vciIsImRyYXdQcm9ncmVzc0JhciIsInByb2dyZXNzIiwiY2xlYXJSZWN0Iiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJzdHJva2VSZWN0IiwiZmlsbGVkU2VnbWVudHMiLCJmaWxsU3R5bGUiLCJjZW50ZXJZIiwiaSIsIngiLCJ5IiwiYmVnaW5QYXRoIiwicm91bmRSZWN0IiwiciIsIm1vdmVUbyIsImxpbmVUbyIsInF1YWRyYXRpY0N1cnZlVG8iLCJjbG9zZVBhdGgiLCJmaWxsIiwidXBkYXRlUHJvZ3Jlc3MiLCJlbGFwc2VkIiwicGVyY2VudCIsInRleHRDb250ZW50IiwiaW5pdEljb25zQW5pbWF0aW9uIiwiZHVyYXRpb24iLCJpY29ucyIsIm9yaWdpbmFsVHJhbnNmb3JtcyIsIk1hcCIsImhhZElubGluZVRyYW5zZm9ybSIsInNlbGVjdG9yIiwiaWNvbiIsImhhZElubGluZSIsInNldCIsIm9yaWdpbmFsVHJhbnNmb3JtIiwib3BhY2l0eSIsInRyYW5zaXRpb24iLCJpY29uQ291bnQiLCJnZXQiLCJyZW1vdmVQcm9wZXJ0eSIsInBhcnRpY2lwYXRlQ2FudmFzIiwicGFydGljaXBhdGVEZWVycyIsInBhcnRpY2lwYXRlRGVlcldpZHRoIiwicGFydGljaXBhdGVEZWVySGVpZ2h0IiwiY2FudmFzQ2xpY2tIYW5kbGVyc0F0dGFjaGVkIiwicGFydGljaXBhdGVBbmltYXRpb25JZCIsInRvdWNoU3RhcnRYIiwidG91Y2hTdGFydFkiLCJoYW5kbGVQYXJ0aWNpcGF0ZUNhbnZhc0NsaWNrIiwic2NhbGVYIiwic2NhbGVZIiwiY2xpZW50WCIsImNsaWVudFkiLCJjbGlja1giLCJjbGlja1kiLCJkZWVyIiwiaXNQb2ludEluc2lkZSIsImhhbmRsZUNsaWNrIiwiaGFuZGxlUGFydGljaXBhdGVDYW52YXNUb3VjaFN0YXJ0IiwidG91Y2giLCJ0b3VjaGVzIiwiaGFuZGxlUGFydGljaXBhdGVDYW52YXNUb3VjaEVuZCIsImNoYW5nZWRUb3VjaGVzIiwiZGVsdGFYIiwiZGVsdGFZIiwiZGlzdGFuY2UiLCJzcXJ0IiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJpc01vYmlsZSIsIkNBTlZBU19XSURUSCIsIkNBTlZBU19IRUlHSFQiLCJUUkVFX1dJRFRIIiwiVFJFRV9IRUlHSFQiLCJGUkFNRVNfUEVSX1JPVyIsIlRPVEFMX1JPV1MiLCJTUFJJVEVfU0hFRVRfV0lEVEgiLCJTUFJJVEVfU0hFRVRfSEVJR0hUIiwiRlJBTUVfV0lEVEgiLCJGUkFNRV9IRUlHSFQiLCJERUVSX1NDQUxFIiwiQkFTRV9ERUVSX1dJRFRIIiwiQkFTRV9ERUVSX0hFSUdIVCIsIkRFRVJfV0lEVEgiLCJERUVSX0hFSUdIVCIsImRlZXJIZWlnaHRPZmZzZXQiLCJ0cmVlWCIsInRyZWVZIiwiRlJBTUVfREVMQVkiLCJXQUxLSU5HX0ZSQU1FUyIsIkZSQU1FX1JFUEVBVCIsIklETEVfTUlOX0RVUkFUSU9OIiwiSURMRV9NQVhfRFVSQVRJT04iLCJERUVSX1NUQVRFIiwiV0FMS0lORyIsIklETEUiLCJQRVRUSU5HIiwiUEVUVElOR19NSU5fRFVSQVRJT04iLCJQRVRUSU5HX01BWF9EVVJBVElPTiIsIkhFQVJUX1NJWkVfTUlOIiwiSEVBUlRfU0laRV9NQVgiLCJIRUFSVF9SSVNFX0RJU1RBTkNFIiwiSEVBUlRfU1BBV05fSU5URVJWQUwiLCJmcmFtZUNvdW50ZXIiLCJIZWFydCIsInNpemUiLCJoZWFydEltYWdlIiwic2NhbGUiLCJyaXNlU3BlZWQiLCJpc1Zpc2libGUiLCJjb21wbGV0ZSIsIm5hdHVyYWxXaWR0aCIsIm5hdHVyYWxIZWlnaHQiLCJzYXZlIiwiZ2xvYmFsQWxwaGEiLCJkcmF3U2l6ZSIsImRyYXdYIiwiZHJhd1kiLCJkcmF3SW1hZ2UiLCJyZXN0b3JlIiwiRGVlciIsInN0YXJ0WCIsInN0YXJ0WSIsIm1pblgiLCJtYXhYIiwic3BlZWQiLCJ6SW5kZXgiLCJkaXJlY3Rpb24iLCJmcmFtZUluZGV4IiwiZnJhbWVSZXBlYXRDb3VudGVyIiwiaWRsZVRpbWVyIiwiaWRsZUR1cmF0aW9uIiwicGV0dGluZ1RpbWVyIiwicGV0dGluZ0R1cmF0aW9uIiwicHJldmlvdXNTdGF0ZSIsInNhdmVkWCIsInNhdmVkWSIsImhlYXJ0cyIsImhlYXJ0U3Bhd25Db3VudGVyIiwiZGVlcldpZHRoIiwiZGVlckhlaWdodCIsInJhbmRvbSIsIm9mZnNldFgiLCJoZWFydFgiLCJoZWFydFkiLCJwdXNoIiwicm93IiwiY29sIiwic2hvdWxkVXBkYXRlRnJhbWUiLCJzcGF3bkhlYXJ0IiwiZmlsdGVyIiwiaGVhcnQiLCJ1cGRhdGUiLCJzcHJpdGVJbWFnZSIsImZyYW1lV2lkdGgiLCJnZXRTcHJpdGVGcmFtZUluZGV4Iiwic291cmNlWCIsInNvdXJjZVkiLCJzb3VyY2VXaWR0aCIsInNvdXJjZUhlaWdodCIsImRlc3RYIiwiZGVzdFkiLCJkZXN0V2lkdGgiLCJkZXN0SGVpZ2h0IiwiZHJhdyIsImltYWdlcyIsImJhY2tncm91bmQiLCJJbWFnZSIsInRyZWUiLCJkZWVyU3ByaXRlIiwiZGVlcnMiLCJERUVSX0NPVU5UIiwiZGVlckNvbmZpZ3MiLCJjb25maWciLCJpbWFnZXNMb2FkZWQiLCJ0b3RhbEltYWdlcyIsIm9uSW1hZ2VMb2FkIiwiZHJhd0NhbnZhcyIsInN0YXJ0QW5pbWF0aW9uIiwib25sb2FkIiwic3JjIiwicGFzc2l2ZSIsIlRSRUVfWl9JTkRFWCIsImRyYXdhYmxlRWxlbWVudHMiLCJzb3J0IiwiYSIsImIiLCJhbmltYXRlIiwibmV3SXNNb2JpbGUiLCJwYXJhbXMiLCJsb2FkVXNlcnMiLCJwYXJhbWV0ciIsInJlcXVlc3RzIiwicmVxIiwiYWN0aXZlU3RhZ2VOdW1iZXIiLCJhbGwiLCJTTk9XRkxBS0VfQ09VTlQiLCJTTk9XRkxBS0VfTUlOX1NJWkUiLCJTTk9XRkxBS0VfTUFYX1NJWkUiLCJTTk9XRkxBS0VfTUlOX1NQRUVEIiwiU05PV0ZMQUtFX01BWF9TUEVFRCIsIlNOT1dGTEFLRV9XSU5EX1JBTkdFIiwiU05PV0ZMQUtFX1NQQVdOX0lOVEVSVkFMIiwic25vd2ZsYWtlcyIsImxhc3RTbm93Zmxha2VUaW1lIiwibmV3V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJzbm93Zmxha2VJbWFnZSIsImltYWdlTG9hZGVkIiwid2FpdEZvclBhZ2VSZWFkeSIsImlzUGFnZUxvYWRpbmciLCJmaWxsQ2FudmFzV2l0aFNub3dmbGFrZXMiLCJTbm93Zmxha2UiLCJpbml0aWFsWSIsIndpbmQiLCJyb3RhdGlvbiIsIlBJIiwicm90YXRpb25TcGVlZCIsInNpbiIsInJvdGF0ZSIsImNyZWF0ZVNub3dmbGFrZSIsInVwZGF0ZVNub3dmbGFrZXMiLCJpc09mZlNjcmVlbiIsInNwbGljZSIsImRyYXdTbm93Zmxha2VzIiwic25vd2ZsYWtlIiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwib2JzZXJ2ZSIsIndlZWtzRGF0YSIsInN0YXJ0IiwiZW5kIiwiZ2V0QWN0aXZlV2VlayIsImN1cnJlbnREYXRlIiwiYWN0aXZlV2Vla0luZGV4IiwicGFyc2VJbnQiLCJnYW1lTGlzdHMiLCJsaXN0IiwiY3VycmVudExpc3QiLCJhdXRvQWRkRGF0YUJ1dHRvbnMiLCJzZXRHYW1lTGlua3MiLCJnYW1lc0xpbmtzIiwiZ2FtZUxpbmtzIiwiZ2FtZUlkIiwid2Vla01hdGNoIiwibWF0Y2giLCJpdGVtcyIsImdhbWVOdW1iZXIiLCJidXR0b25OYW1lIiwibGlua0VsIiwiY3VycmVudEJ1dHRvbiIsImluY2x1ZGVzIiwicmVhZHlTdGF0ZSIsImxuZ0J0biIsInJlbW92ZUl0ZW0iLCJzZXRJdGVtIiwicmVsb2FkIiwiYXV0aEJ0biIsInVzZXJpZDEiLCJ1c2VyaWQyIiwidG9TdHJpbmciXSwibWFwcGluZ3MiOiI7OzsrQ0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQSxDQUFDLFlBQVk7RUFBQTtFQUVULElBQU1BLE1BQU0sR0FBRyxzQ0FBc0M7RUFFckQsSUFBTUMsUUFBUSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxXQUFXLENBQUM7SUFDaERDLE1BQU0sR0FBR0YsUUFBUSxDQUFDQyxhQUFhLENBQUMsa0JBQWtCLENBQUM7SUFDbkRFLFlBQVksR0FBR0gsUUFBUSxDQUFDQyxhQUFhLENBQUMsUUFBUSxDQUFDO0lBQy9DRyxpQkFBaUIsR0FBR0osUUFBUSxDQUFDQyxhQUFhLENBQUMs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QztJQUN2QyxDQUFDLE1BQU07TUFDSDtNQUNBbGYsY0FBYyxDQUFDbWYsT0FBTyxDQUFDLFFBQVEsRUFBRUcsT0FBTyxDQUFDO0lBQzdDO0lBRUF6ZCxNQUFNLENBQUNDLFFBQVEsQ0FBQ3NkLE1BQU0sRUFBRTtFQUM1QixDQUFDLENBQUM7QUFFTixDQUFDLEdBQUciLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XG5cbiAgICBjb25zdCBhcGlVUkwgPSAnaHR0cHM6Ly9mYXYtcHJvbS5jb20vYXBpX2x2bF8yMDI2X2hyJ1xuXG4gICAgY29uc3QgbWFpblBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhdi1wYWdlXCIpLFxuICAgICAgICBsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNwaW5uZXItb3ZlcmxheVwiKSxcbiAgICAgICAgcmVzdWx0c1RhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YWJsZVwiKSxcbiAgICAgICAgcmVzdWx0c1RhYmxlT3RoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RhYmxlT3RoZXJcIiksXG4gICAgICAgIHVuYXV0aE1zZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudW5hdXRoLW1zZycpLFxuICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFydC1idG4nKSxcbiAgICAgICAgcmVkaXJlY3RCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bi1qb2luJyk7XG5cbiAgICBjb25zdCBockxlbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaHJMZW5nJyk7XG4gICAgY29uc3QgZW5MZW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VuTGVuZycpO1xuICAgIFxuICAgIC8vINCU0L7Qv9C+0LzRltC20L3RliDRhNGD0L3QutGG0ZbRlyDQtNC70Y8g0YDQvtCx0L7RgtC4INC3INC60L3QvtC/0LrQsNC80LhcbiAgICBjb25zdCB0b2dnbGVDbGFzc2VzID0gKGVsZW1lbnRzLCBjbGFzc05hbWUpID0+IGVsZW1lbnRzLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LnRvZ2dsZShgJHtjbGFzc05hbWV9YCkpO1xuICAgIGNvbnN0IHRvZ2dsZVRyYW5zbGF0ZXMgPSAoZWxlbWVudHMsIGRhdGFBdHRyKSA9PiBlbGVtZW50cy5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScsIGAke2RhdGFBdHRyfWApO1xuICAgICAgICBlbC5pbm5lckhUTUwgPSBpMThuRGF0YVtkYXRhQXR0cl0gfHwgJyotLS0tTkVFRCBUTyBCRSBUUkFOU0xBVEVELS0tLSogICBrZXk6ICAnICsgZGF0YUF0dHI7XG4gICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICB9KTtcblxuICAgIC8vIGxldCBsb2NhbGUgPSBcImhyXCJcbiAgICBsZXQgbG9jYWxlID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsZVwiKSB8fCBcImhyXCJcblxuICAgIGlmIChockxlbmcpIGxvY2FsZSA9ICdocic7XG4gICAgaWYgKGVuTGVuZykgbG9jYWxlID0gJ2VuJztcblxuICAgIGxldCBkZWJ1ZyA9IGZhbHNlXG5cbiAgICBpZiAoZGVidWcpIGhpZGVMb2FkZXIoKVxuXG4gICAgbGV0IGkxOG5EYXRhID0ge307XG4gICAgY29uc3QgdHJhbnNsYXRlU3RhdGUgPSB0cnVlO1xuICAgIC8vIGxldCB1c2VySWQgPSBudWxsO1xuICAgIGxldCB1c2VySWQgPSBOdW1iZXIoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKSkgPz8gbnVsbFxuICAgIGxldCBpc1ZlcmlmaWVkVXNlciA9IGZhbHNlO1xuICAgIFxuICAgIC8vINCX0LzRltC90L3RliDQtNC70Y8g0YDQvtCx0L7RgtC4INC3INGC0LDQsdC70LjRhtC10Y4g0LrQvtGA0LjRgdGC0YPQstCw0YfRltCyXG4gICAgbGV0IHRhYmxlRGF0YSA9IFtdO1xuICAgIGxldCBhY3RpdmVXZWVrID0gbnVsbDtcbiAgICBsZXQgcGVyaW9kQW1vdW50ID0gNDsgLy8g0JrRltC70YzQutGW0YHRgtGMINGC0LjQttC90ZbQslxuICAgIGxldCBpc1Byb21vT3ZlciA9IGZhbHNlO1xuICAgIGxldCBsb2FkZXJCdG4gPSBmYWxzZTtcblxuICAgIGNvbnN0IHJlcXVlc3QgPSBmdW5jdGlvbiAobGluaywgZXh0cmFPcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBmZXRjaChhcGlVUkwgKyBsaW5rLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLi4uKGV4dHJhT3B0aW9ucyB8fCB7fSlcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXMub2spIHRocm93IG5ldyBFcnJvcignQVBJIGVycm9yJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignQVBJIHJlcXVlc3QgZmFpbGVkOicsIGVycik7XG5cbiAgICAgICAgICAgICAgICByZXBvcnRFcnJvcihlcnIpO1xuXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhdi1wYWdlJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYuc3RhcnRzV2l0aChcImh0dHBzOi8vd3d3LmZhdmJldC5oci9cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3Byb21vY2lqZS9wcm9tb2NpamEvc3R1Yi8nO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9wcm9tb3MvcHJvbW8vc3R1Yi8nO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoaWRlTG9hZGVyKCl7XG4gICAgICAgIGxvYWRlci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCJcbiAgICAgICAgbWFpblBhZ2UuY2xhc3NMaXN0LnJlbW92ZShcImxvYWRpbmdcIilcbiAgICB9XG5cbiAgICAvLyDQpNGD0L3QutGG0ZbRjyDQtNC70Y8g0LLRgdGC0LDQvdC+0LLQu9C10L3QvdGPINCy0LjRgdC+0YIg0L3QsCDQvtGB0L3QvtCy0ZYgdmlld3BvcnQsINGF0LXQtNC10YDQsCDRgtCwINGE0YPRgtC10YDQsFxuICAgIGZ1bmN0aW9uIGluaXRQYWdlSGVpZ2h0KCkge1xuICAgICAgICBjb25zdCBmYXZQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhdi1wYWdlJyk7XG4gICAgICAgIGNvbnN0IGZyYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZyYW1lJyk7XG4gICAgICAgIGNvbnN0IHN0aWNreVdyYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RpY2t5LXdyYXAnKTtcbiAgICAgICAgXG4gICAgICAgIGlmICghZmF2UGFnZSB8fCAhZnJhbWUgfHwgIXN0aWNreVdyYXApIHJldHVybjtcbiAgICAgICAgXG4gICAgICAgIC8vINCS0LjQt9C90LDRh9Cw0ZTQvNC+INCy0LjRgdC+0YLRgyDRhdC10LTQtdGA0LAg0LfQsNC70LXQttC90L4g0LLRltC0INGI0LjRgNC40L3QuCDQtdC60YDQsNC90YNcbiAgICAgICAgLy8g0JTQtdGB0LrRgtC+0L8gKD4gMTAyNHB4KTogNjAgKyAyMSA9IDgxcHhcbiAgICAgICAgLy8g0JzQvtCx0ZbQu9C60LggKOKJpCAxMDI0cHgpOiA0OCArIDIxID0gNjlweFxuICAgICAgICBjb25zdCBoZWFkZXJIZWlnaHQgPSB3aW5kb3cuaW5uZXJXaWR0aCA+IDEwMjQgPyA4MSA6IDY5O1xuICAgICAgICBcbiAgICAgICAgLy8g0JLQuNC30L3QsNGH0LDRlNC80L4g0LLQuNGB0L7RgtGDINGE0YPRgtC10YDQsCDQt9Cw0LvQtdC20L3QviDQstGW0LQg0YjQuNGA0LjQvdC4INC10LrRgNCw0L3Rg1xuICAgICAgICAvLyDQpNGD0YLQtdGAINC/0YDQuNGB0YPRgtC90ZbQuSDRgtGW0LvRjNC60Lgg0L3QsCDQtdC60YDQsNC90LDRhSDiiaQgMTAyNHB4LCDQstC40YHQvtGC0LAgNTZweFxuICAgICAgICBjb25zdCBmb290ZXJIZWlnaHQgPSB3aW5kb3cuaW5uZXJXaWR0aCA8PSAxMDI0ID8gNTYgOiAwO1xuICAgICAgICBcbiAgICAgICAgLy8g0J7QsdGH0LjRgdC70Y7RlNC80L4g0LLQuNGB0L7RgtGDIC5mYXYtcGFnZTogdmlld3BvcnQgaGVpZ2h0IC0gaGVhZGVyIGhlaWdodCAtIGZvb3RlciBoZWlnaHQgLSDQstGW0LTRgdGC0YPQv1xuICAgICAgICBjb25zdCB2aWV3cG9ydEhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgY29uc3QgY2FsY3VsYXRlZEhlaWdodCA9IHZpZXdwb3J0SGVpZ2h0IC0gaGVhZGVySGVpZ2h0IC0gZm9vdGVySGVpZ2h0IC0gMzI7XG4gICAgICAgIC8vINCS0LjRgdC+0YLQsCDQvdC1INC/0L7QstC40L3QvdCwINCx0YPRgtC4INC80LXQvdGI0LUgMzAwcHhcbiAgICAgICAgY29uc3QgZmF2UGFnZUhlaWdodCA9IE1hdGgubWF4KGNhbGN1bGF0ZWRIZWlnaHQsIDI1MCk7XG4gICAgICAgIFxuICAgICAgICAvLyDQktGB0YLQsNC90L7QstC70Y7RlNC80L4g0LLQuNGB0L7RgtGDIC5mYXYtcGFnZVxuICAgICAgICBmYXZQYWdlLnN0eWxlLm1pbkhlaWdodCA9IGAke2ZhdlBhZ2VIZWlnaHR9cHhgO1xuICAgICAgICBmYXZQYWdlLnN0eWxlLm1heEhlaWdodCA9IGAke2ZhdlBhZ2VIZWlnaHR9cHhgO1xuICAgICAgICBcbiAgICAgICAgLy8g0JLRgdGC0LDQvdC+0LLQu9GO0ZTQvNC+INCy0LjRgdC+0YLRgyAuZnJhbWU6IC5mYXYtcGFnZSArIDJweFxuICAgICAgICBjb25zdCBmcmFtZUhlaWdodCA9IGZhdlBhZ2VIZWlnaHQgKyAyO1xuICAgICAgICBmcmFtZS5zdHlsZS5taW5IZWlnaHQgPSBgJHtmcmFtZUhlaWdodH1weGA7XG4gICAgICAgIGZyYW1lLnN0eWxlLm1heEhlaWdodCA9IGAke2ZyYW1lSGVpZ2h0fXB4YDtcbiAgICAgICAgXG4gICAgICAgIC8vINCS0YHRgtCw0L3QvtCy0LvRjtGU0LzQviBtYXJnaW4tdG9wINC00LvRjyAuc3RpY2t5LXdyYXA6INC90LXQs9Cw0YLQuNCy0L3QsCDQstC40YHQvtGC0LAgLmZhdi1wYWdlXG4gICAgICAgIHN0aWNreVdyYXAuc3R5bGUubWFyZ2luVG9wID0gYC0ke2ZhdlBhZ2VIZWlnaHR9cHhgO1xuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIGxldCBhdHRlbXB0cyA9IDA7XG4gICAgICAgIGNvbnN0IG1heEF0dGVtcHRzID0gMjA7XG4gICAgICAgIGNvbnN0IGF0dGVtcHRJbnRlcnZhbCA9IDUwO1xuXG4gICAgICAgIGZ1bmN0aW9uIHRyeURldGVjdFVzZXJJZCgpIHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuc3RvcmUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHdpbmRvdy5zdG9yZS5nZXRTdGF0ZSgpO1xuICAgICAgICAgICAgICAgIHVzZXJJZCA9IHN0YXRlLmF1dGguaXNBdXRob3JpemVkICYmIHN0YXRlLmF1dGguaWQgfHwgJyc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHdpbmRvdy5nX3VzZXJfaWQpIHtcbiAgICAgICAgICAgICAgICB1c2VySWQgPSB3aW5kb3cuZ191c2VyX2lkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8g0JfQvNGW0L3QvdCwINC00LvRjyDQt9Cx0LXRgNGW0LPQsNC90L3RjyDQv9C+0YfQsNGC0LrQvtCy0L7RlyDQstC40YHQvtGC0Lgg0YTQvtC90YNcbiAgICAgICAgbGV0IGluaXRpYWxCYWNrZ3JvdW5kSGVpZ2h0ID0gbnVsbDtcbiAgICAgICAgLy8g0JfQvNGW0L3QvdCwINC00LvRjyDQt9Cx0LXRgNGW0LPQsNC90L3RjyDRgdGD0LzQuCDQstC40YHQvtGCINCy0ZbQtNC60YDQuNGC0LjRhSDQtNGA0L7Qv9C00LDRg9C90ZbQslxuICAgICAgICBsZXQgdG90YWxEcm9wZG93bnNIZWlnaHQgPSAwO1xuXG4gICAgICAgIGZ1bmN0aW9uIGluaXRTdGlja3lXcmFwQmFja2dyb3VuZCgpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0aWNreVdyYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RpY2t5LXdyYXAnKTtcbiAgICAgICAgICAgIGlmICghc3RpY2t5V3JhcCkgcmV0dXJuO1xuXG4gICAgICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNGP0ZTQvNC+INGH0Lgg0LXQu9C10LzQtdC90YIg0LLQttC1INGW0YHQvdGD0ZRcbiAgICAgICAgICAgIGxldCBiZ0VsZW1lbnQgPSBzdGlja3lXcmFwLnF1ZXJ5U2VsZWN0b3IoJy5zdGlja3ktd3JhcC1iZycpO1xuICAgICAgICAgICAgaWYgKCFiZ0VsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAvLyDQodGC0LLQvtGA0Y7RlNC80L4g0L3QvtCy0LjQuSDQtdC70LXQvNC10L3RglxuICAgICAgICAgICAgICAgIGJnRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGJnRWxlbWVudC5jbGFzc05hbWUgPSAnc3RpY2t5LXdyYXAtYmcnO1xuICAgICAgICAgICAgICAgIHN0aWNreVdyYXAuaW5zZXJ0QmVmb3JlKGJnRWxlbWVudCwgc3RpY2t5V3JhcC5maXJzdENoaWxkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8g0JfQsdC10YDRltCz0LDRlNC80L4g0L/QvtGH0LDRgtC60L7QstGDINCy0LjRgdC+0YLRgyDQv9GW0YHQu9GPINGC0L7Qs9C+LCDRj9C6INC10LvQtdC80LXQvdGCINCy0ZbQtNGA0LXQvdC00LXRgNC40YLRjNGB0Y9cbiAgICAgICAgICAgIC8vINCS0LjQutC+0YDQuNGB0YLQvtCy0YPRlNC80L4g0LrRltC70YzQutCwINC60LDQtNGA0ZbQsiDQtNC70Y8g0LPQsNGA0LDQvdGC0ZbRlyDQv9GA0LDQstC40LvRjNC90L7Qs9C+INGA0L7Qt9C80ZbRgNGDXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbml0aWFsQmFja2dyb3VuZEhlaWdodCA9PT0gbnVsbCAmJiBiZ0VsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlY3QgPSBiZ0VsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDQktC40LrQvtGA0LjRgdGC0L7QstGD0ZTQvNC+IGNvbXB1dGVkIHN0eWxlINGP0LrRidC+IHJlY3QuaGVpZ2h0ID0gMFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlY3QuaGVpZ2h0ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGJnRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbEJhY2tncm91bmRIZWlnaHQgPSBwYXJzZUZsb2F0KGNvbXB1dGVkU3R5bGUuaGVpZ2h0KSB8fCAxMzUwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsQmFja2dyb3VuZEhlaWdodCA9IHJlY3QuaGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIGJnRWxlbWVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGdldERyb3Bkb3duQ29udGVudEhlaWdodChkcm9wZG93bikge1xuICAgICAgICAgICAgLy8g0IbQs9C90L7RgNGD0ZTQvNC+INC00YDQvtC/0LTQsNGD0L3QuCDQtyDQutC70LDRgdC+0LwgX2lnbm9yZS1oZWlnaHRcbiAgICAgICAgICAgIGlmIChkcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoJ19pZ25vcmUtaGVpZ2h0JykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0J7RgtGA0LjQvNGD0ZTQvNC+INCy0LjRgdC+0YLRgyDQutC+0L3RgtC10L3RgtGDINC00YDQvtC/0LTQsNGD0L3QsCAo0LLQuNC60LvRjtGH0LDRjtGH0Lggc3VtbWFyeSlcbiAgICAgICAgICAgIGNvbnN0IGRyb3BUeHQgPSBkcm9wZG93bi5xdWVyeVNlbGVjdG9yKCcuZHJvcC10eHQnKTtcbiAgICAgICAgICAgIGlmIChkcm9wVHh0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRyb3BUeHQub2Zmc2V0SGVpZ2h0IHx8IGRyb3BUeHQuc2Nyb2xsSGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g0K/QutGJ0L4g0L3QtdC80LDRlCAuZHJvcC10eHQsINCy0LjQutC+0YDQuNGB0YLQvtCy0YPRlNC80L4g0LLQuNGB0L7RgtGDINCy0YHRjNC+0LPQviDQtNGA0L7Qv9C00LDRg9C90LAg0LzRltC90YPRgSBzdW1tYXJ5XG4gICAgICAgICAgICBjb25zdCBzdW1tYXJ5ID0gZHJvcGRvd24ucXVlcnlTZWxlY3Rvcignc3VtbWFyeScpO1xuICAgICAgICAgICAgaWYgKHN1bW1hcnkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZHJvcGRvd24ub2Zmc2V0SGVpZ2h0IC0gc3VtbWFyeS5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZHJvcGRvd24ub2Zmc2V0SGVpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcmVjYWxjdWxhdGVEcm9wZG93bnNIZWlnaHQoKSB7XG4gICAgICAgICAgICAvLyDQn9C10YDQtdGA0LDRhdC+0LLRg9GU0LzQviDRgdGD0LzRgyDQstC40YHQvtGCINCy0YHRltGFINCy0ZbQtNC60YDQuNGC0LjRhSDQtNGA0L7Qv9C00LDRg9C90ZbQsiAo0ZbQs9C90L7RgNGD0Y7Rh9C4IF9pZ25vcmUtaGVpZ2h0KVxuICAgICAgICAgICAgdG90YWxEcm9wZG93bnNIZWlnaHQgPSAwO1xuICAgICAgICAgICAgY29uc3Qgb3BlbkRyb3Bkb3ducyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcm9wZG93bltvcGVuXScpO1xuICAgICAgICAgICAgb3BlbkRyb3Bkb3ducy5mb3JFYWNoKGRyb3Bkb3duID0+IHtcbiAgICAgICAgICAgICAgICAvLyDQn9GA0L7Qv9GD0YHQutCw0ZTQvNC+INC00YDQvtC/0LTQsNGD0L3QuCDQtyDQutC70LDRgdC+0LwgX2lnbm9yZS1oZWlnaHRcbiAgICAgICAgICAgICAgICBpZiAoIWRyb3Bkb3duLmNsYXNzTGlzdC5jb250YWlucygnX2lnbm9yZS1oZWlnaHQnKSkge1xuICAgICAgICAgICAgICAgICAgICB0b3RhbERyb3Bkb3duc0hlaWdodCArPSBnZXREcm9wZG93bkNvbnRlbnRIZWlnaHQoZHJvcGRvd24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZml4QmFja2dyb3VuZFBvc2l0aW9uKCkge1xuICAgICAgICAgICAgY29uc3QgYmdFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0aWNreS13cmFwLWJnJyk7XG4gICAgICAgICAgICBpZiAoIWJnRWxlbWVudCkgcmV0dXJuO1xuXG4gICAgICAgICAgICAvLyDQktC40LrQvtGA0LjRgdGC0L7QstGD0ZTQvNC+IHJlcXVlc3RBbmltYXRpb25GcmFtZSDQtNC70Y8g0L/Qu9Cw0LLQvdC+0LPQviDQvtC90L7QstC70LXQvdC90Y9cbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8g0J7RgtGA0LjQvNGD0ZTQvNC+INC/0L7RgtC+0YfQvdGDINC/0L7Qt9C40YbRltGOINC10LvQtdC80LXQvdGC0LAg0LLRltC00L3QvtGB0L3QviB2aWV3cG9ydFxuICAgICAgICAgICAgICAgIGNvbnN0IHJlY3QgPSBiZ0VsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8g0J7QsdGH0LjRgdC70Y7RlNC80L4g0L3QvtCy0YMg0LLQuNGB0L7RgtGDOiDQv9C+0YfQsNGC0LrQvtCy0LAg0LLQuNGB0L7RgtCwICsg0YHRg9C80LAg0LLQuNGB0L7RgiDQstGW0LTQutGA0LjRgtC40YUg0LTRgNC+0L/QtNCw0YPQvdGW0LJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdIZWlnaHQgPSBpbml0aWFsQmFja2dyb3VuZEhlaWdodCAhPT0gbnVsbCBcbiAgICAgICAgICAgICAgICAgICAgPyBpbml0aWFsQmFja2dyb3VuZEhlaWdodCArIHRvdGFsRHJvcGRvd25zSGVpZ2h0IFxuICAgICAgICAgICAgICAgICAgICA6IHJlY3QuaGVpZ2h0O1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vINCk0ZbQutGB0YPRlNC80L4g0L/QvtC30LjRhtGW0Y4g0LLRltC00L3QvtGB0L3QviB2aWV3cG9ydFxuICAgICAgICAgICAgICAgIGJnRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgICAgICAgICAgYmdFbGVtZW50LnN0eWxlLmxlZnQgPSBgJHtyZWN0LmxlZnQgKyAocmVjdC53aWR0aCAvIDIpfXB4YDtcbiAgICAgICAgICAgICAgICAvLyBiZ0VsZW1lbnQuc3R5bGUuYm90dG9tID0gYCR7d2luZG93LmlubmVySGVpZ2h0IC0gcmVjdC5ib3R0b219cHhgO1xuICAgICAgICAgICAgICAgIGJnRWxlbWVudC5zdHlsZS53aWR0aCA9IGAke3JlY3Qud2lkdGh9cHhgO1xuICAgICAgICAgICAgICAgIGJnRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBgJHtuZXdIZWlnaHR9cHhgO1xuICAgICAgICAgICAgICAgIGJnRWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgtNTAlKSc7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHJlc3RvcmVCYWNrZ3JvdW5kUG9zaXRpb24oKSB7XG4gICAgICAgICAgICBjb25zdCBiZ0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RpY2t5LXdyYXAtYmcnKTtcbiAgICAgICAgICAgIGlmICghYmdFbGVtZW50KSByZXR1cm47XG5cbiAgICAgICAgICAgIC8vINCh0LrQuNC00LDRlNC80L4g0YHRg9C80YMg0LLQuNGB0L7RgiDQtNGA0L7Qv9C00LDRg9C90ZbQslxuICAgICAgICAgICAgdG90YWxEcm9wZG93bnNIZWlnaHQgPSAwO1xuXG4gICAgICAgICAgICAvLyDQktGW0LTQvdC+0LLQu9GO0ZTQvNC+INGB0YLQsNC90LTQsNGA0YLQvdC1INC/0L7Qt9C40YbRltC+0L3Rg9Cy0LDQvdC90Y9cbiAgICAgICAgICAgIGJnRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICcnO1xuICAgICAgICAgICAgYmdFbGVtZW50LnN0eWxlLmxlZnQgPSAnJztcbiAgICAgICAgICAgIGJnRWxlbWVudC5zdHlsZS5ib3R0b20gPSAnJztcbiAgICAgICAgICAgIGJnRWxlbWVudC5zdHlsZS53aWR0aCA9ICcnO1xuICAgICAgICAgICAgYmdFbGVtZW50LnN0eWxlLmhlaWdodCA9ICcnO1xuICAgICAgICAgICAgYmdFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcXVpY2tDaGVja0FuZFJlbmRlcigpIHtcbiAgICAgICAgICAgIC8vINCG0L3RltGG0ZbQsNC70ZbQt9GD0ZTQvNC+INCy0LjRgdC+0YLQuCDRgdGC0L7RgNGW0L3QutC4INC90LAg0L7RgdC90L7QstGWIHZpZXdwb3J0INGC0LAg0YXQtdC00LXRgNCwXG4gICAgICAgICAgICAvLyBpbml0UGFnZUhlaWdodCgpO1xuXG4gICAgICAgICAgICAvLyDQodGC0LLQvtGA0Y7RlNC80L4g0LXQu9C10LzQtdC90YIg0YTQvtC90YNcbiAgICAgICAgICAgIGluaXRTdGlja3lXcmFwQmFja2dyb3VuZCgpO1xuXG4gICAgICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNGP0ZTQvNC+INGB0YLQsNGC0YPRgSDQutC+0YDQuNGB0YLRg9Cy0LDRh9CwINGC0LAg0LLRltC00L7QsdGA0LDQttCw0ZTQvNC+INCy0ZbQtNC/0L7QstGW0LTQvdGWINC60L3QvtC/0LrQuFxuICAgICAgICAgICAgY2hlY2tVc2VyQXV0aCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIC8vINCX0LDQstCw0L3RgtCw0LbRg9GU0LzQviDQtNCw0L3RliDQutC+0YDQuNGB0YLRg9Cy0LDRh9GW0LJcbiAgICAgICAgICAgICAgICAvLyByZXR1cm4gbG9hZFVzZXJzKFwiP25vY2FjaGU9MVwiKTtcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vINCf0LXRgNC10LLRltGA0Y/RlNC80L4g0YfQuCDQv9GA0L7QvNC+INC30LDQstC10YDRiNC10L3QvlxuICAgICAgICAgICAgICAgIGlmIChpc1Byb21vT3Zlcikge1xuICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCdsb2NrJyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZWRpcmVjdEJ0bnMuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCdsb2NrJyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyAvLyDQktGW0LTQvtCx0YDQsNC20LDRlNC80L4g0LTQsNC90ZYg0LrQvtGA0LjRgdGC0YPQstCw0YfRltCyINC00LvRjyDQsNC60YLQuNCy0L3QvtCz0L4g0YLQuNC20L3Rj1xuICAgICAgICAgICAgICAgIC8vIGlmIChhY3RpdmVXZWVrICYmIHRhYmxlRGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIHJlbmRlclVzZXJzKGFjdGl2ZVdlZWssIHRhYmxlRGF0YSk7XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGluaXRHYW1lc1dlZWsoKTtcbiAgICAgICAgICAgICAgICBpbml0UHJvZ3Jlc3NCYXIoKTtcbiAgICAgICAgICAgICAgICBpbml0UGFydGljaXBhdGVDYW52YXMoKTtcbiAgICAgICAgICAgICAgICBpbml0U25vd2ZsYWtlc0NhbnZhcygpO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoaGlkZUxvYWRlciwgMzAwKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBGaXggZHJvcGRvd24gc2Nyb2xsIGlzc3VlIC0gcHJldmVudCBwYWdlIGZyb20gc2hpZnRpbmcgdXAgd2hlbiBvcGVuaW5nIGRyb3Bkb3duXG4gICAgICAgICAgICAvLyBhbmQgcHJldmVudCBiYWNrZ3JvdW5kIHN0cmlwZXMgZnJvbSBqdW1waW5nXG4gICAgICAgICAgICBjb25zdCBkcm9wZG93bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJvcGRvd24nKTtcbiAgICAgICAgICAgIGxldCBvcGVuRHJvcGRvd25zQ291bnQgPSAwO1xuXG4gICAgICAgICAgICAvLyDQntC90L7QstC70Y7RlNC80L4g0LLQuNGB0L7RgtC4INC/0YDQuCDQt9C80ZbQvdGWINGA0L7Qt9C80ZbRgNGDINCy0ZbQutC90LBcbiAgICAgICAgICAgIGxldCByZXNpemVUaW1lb3V0O1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChyZXNpemVUaW1lb3V0KTtcbiAgICAgICAgICAgICAgICByZXNpemVUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGluaXRQYWdlSGVpZ2h0KCk7XG4gICAgICAgICAgICAgICAgICAgIGluaXRQYXJ0aWNpcGF0ZUNhbnZhcygpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8g0J7QvdC+0LLQu9GO0ZTQvNC+INC/0L7Rh9Cw0YLQutC+0LLRgyDQstC40YHQvtGC0YMg0YTQvtC90YMg0L/RgNC4INC30LzRltC90ZYg0YDQvtC30LzRltGA0YMg0LXQutGA0LDQvdGDXG4gICAgICAgICAgICAgICAgICAgIC8vINCe0YLRgNC40LzRg9GU0LzQviDQsdCw0LfQvtCy0YMg0LLQuNGB0L7RgtGDINC3IENTUyAo0LHQtdC3INGD0YDQsNGF0YPQstCw0L3QvdGPINC00YDQvtC/0LTQsNGD0L3RltCyKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBiZ0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RpY2t5LXdyYXAtYmcnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJnRWxlbWVudCAmJiBvcGVuRHJvcGRvd25zQ291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g0KLQuNC80YfQsNGB0L7QstC+INGB0LrQuNC00LDRlNC80L4g0LLQuNGB0L7RgtGDINC00LvRjyDQvtGC0YDQuNC80LDQvdC90Y8g0LHQsNC30L7QstC+0LPQviDQt9C90LDRh9C10L3QvdGPXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVtcEhlaWdodCA9IGJnRWxlbWVudC5zdHlsZS5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmdFbGVtZW50LnN0eWxlLmhlaWdodCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShiZ0VsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxCYWNrZ3JvdW5kSGVpZ2h0ID0gcGFyc2VGbG9hdChjb21wdXRlZFN0eWxlLmhlaWdodCkgfHwgMTM1MDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZ0VsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gdGVtcEhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyDQntC90L7QstC70Y7RlNC80L4g0L/QvtC30LjRhtGW0Y4g0YTQvtC90YMg0Y/QutGJ0L4g0LTRgNC+0L/QtNCw0YPQvSDQstGW0LTQutGA0LjRgtC40LlcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wZW5Ecm9wZG93bnNDb3VudCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY2FsY3VsYXRlRHJvcGRvd25zSGVpZ2h0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaXhCYWNrZ3JvdW5kUG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJvcmllbnRhdGlvbmNoYW5nZVwiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGluaXRQYWdlSGVpZ2h0KCk7XG4gICAgICAgICAgICAgICAgICAgIGluaXRQYXJ0aWNpcGF0ZUNhbnZhcygpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8g0J7QvdC+0LLQu9GO0ZTQvNC+INC/0L7Rh9Cw0YLQutC+0LLRgyDQstC40YHQvtGC0YMg0YTQvtC90YMg0L/RgNC4INC30LzRltC90ZYg0L7RgNGW0ZTQvdGC0LDRhtGW0ZdcbiAgICAgICAgICAgICAgICAgICAgLy8g0J7RgtGA0LjQvNGD0ZTQvNC+INCx0LDQt9C+0LLRgyDQstC40YHQvtGC0YMg0LcgQ1NTICjQsdC10Lcg0YPRgNCw0YXRg9Cy0LDQvdC90Y8g0LTRgNC+0L/QtNCw0YPQvdGW0LIpXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJnRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGlja3ktd3JhcC1iZycpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYmdFbGVtZW50ICYmIG9wZW5Ecm9wZG93bnNDb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDQotC40LzRh9Cw0YHQvtCy0L4g0YHQutC40LTQsNGU0LzQviDQstC40YHQvtGC0YMg0LTQu9GPINC+0YLRgNC40LzQsNC90L3RjyDQsdCw0LfQvtCy0L7Qs9C+INC30L3QsNGH0LXQvdC90Y9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZW1wSGVpZ2h0ID0gYmdFbGVtZW50LnN0eWxlLmhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZ0VsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGJnRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbEJhY2tncm91bmRIZWlnaHQgPSBwYXJzZUZsb2F0KGNvbXB1dGVkU3R5bGUuaGVpZ2h0KSB8fCAxMzUwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJnRWxlbWVudC5zdHlsZS5oZWlnaHQgPSB0ZW1wSGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vINCe0L3QvtCy0LvRjtGU0LzQviDQv9C+0LfQuNGG0ZbRjiDRhNC+0L3RgyDRj9C60YnQviDQtNGA0L7Qv9C00LDRg9C9INCy0ZbQtNC60YDQuNGC0LjQuVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BlbkRyb3Bkb3duc0NvdW50ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVjYWxjdWxhdGVEcm9wZG93bnNIZWlnaHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpeEJhY2tncm91bmRQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBkcm9wZG93bnMuZm9yRWFjaCgoZHJvcGRvd24pID0+IHtcbiAgICAgICAgICAgICAgICAvLyDQl9Cx0LXRgNGW0LPQsNGU0LzQviDQstC40YHQvtGC0YMg0LTRgNC+0L/QtNCw0YPQvdCwINC00LvRjyDQutC+0LbQvdC+0LPQviDQvtC60YDQtdC80L5cbiAgICAgICAgICAgICAgICBsZXQgZHJvcGRvd25IZWlnaHQgPSAwO1xuICAgICAgICAgICAgICAgIGNvbnN0IGlzSWdub3JlZCA9IGRyb3Bkb3duLmNsYXNzTGlzdC5jb250YWlucygnX2lnbm9yZS1oZWlnaHQnKTtcblxuICAgICAgICAgICAgICAgIGRyb3Bkb3duLmFkZEV2ZW50TGlzdGVuZXIoJ3RvZ2dsZScsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERyb3Bkb3duIGlzIG9wZW5pbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5Ecm9wZG93bnNDb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25IZWlnaHQgPSBnZXREcm9wZG93bkNvbnRlbnRIZWlnaHQodGhpcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpc0lnbm9yZWQgJiYgZHJvcGRvd25IZWlnaHQgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsRHJvcGRvd25zSGVpZ2h0ICs9IGRyb3Bkb3duSGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXhCYWNrZ3JvdW5kUG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdW1tYXJ5ID0gdGhpcy5xdWVyeVNlbGVjdG9yKCdzdW1tYXJ5Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN1bW1hcnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZmF2UGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXYtcGFnZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZhdlBhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN1bW1hcnlSZWN0ID0gc3VtbWFyeS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdW1tYXJ5UmVjdC50b3AgPCA1MCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNjcm9sbERlbHRhID0gc3VtbWFyeVJlY3QudG9wIC0gMTAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRTY3JvbGxUb3AgPSBmYXZQYWdlLnNjcm9sbFRvcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXRTY3JvbGxUb3AgPSBjdXJyZW50U2Nyb2xsVG9wICsgc2Nyb2xsRGVsdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmF2UGFnZS5zY3JvbGxUbyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IE1hdGgubWF4KDAsIHRhcmdldFNjcm9sbFRvcCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vINCf0LXRgNC10LLRltGA0Y/RlNC80L4g0LLQuNC00LjQvNGW0YHRgtGMINCy0ZbQtNC60YDQuNGC0L7Qs9C+INC00YDQvtC/0LTQsNGD0L3QsFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZHJvcGRvd25IZWlnaHQgPSB0aGlzLm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRyb3Bkb3duVG9wID0gc3VtbWFyeVJlY3QudG9wO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZHJvcGRvd25Cb3R0b20gPSBkcm9wZG93blRvcCArIGRyb3Bkb3duSGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgdmlld3BvcnRIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vINCS0LjQt9C90LDRh9Cw0ZTQvNC+INCy0LjQtNC40LzRgyDRh9Cw0YHRgtC40L3RgyDQtNGA0L7Qv9C00LDRg9C90LBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZpc2libGVUb3AgPSBNYXRoLm1heCgwLCBkcm9wZG93blRvcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2aXNpYmxlQm90dG9tID0gTWF0aC5taW4odmlld3BvcnRIZWlnaHQsIGRyb3Bkb3duQm90dG9tKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZpc2libGVIZWlnaHQgPSBNYXRoLm1heCgwLCB2aXNpYmxlQm90dG9tIC0gdmlzaWJsZVRvcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vINCg0L7Qt9GA0LDRhdC+0LLRg9GU0LzQviDQstGW0LTRgdC+0YLQvtC6INCy0LjQtNC40LzQvtGB0YLRllxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmlzaWJsZVBlcmNlbnRhZ2UgPSBkcm9wZG93bkhlaWdodCA+IDAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAodmlzaWJsZUhlaWdodCAvIGRyb3Bkb3duSGVpZ2h0KSAqIDEwMCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vINCv0LrRidC+INCy0LjQtNC40LzQviDQvNC10L3RiNC1IDQwJSAtINC/0YDQvtGB0LrRgNC+0LvQuNGC0Lgg0L3QsCDQt9Cw0LvQuNGI0L7QuiDQstC40YHQvtGC0Lgg0Y/QutC40Lkg0YHRhdC+0LLQsNCy0YHRj1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZpc2libGVQZXJjZW50YWdlIDwgNDAgJiYgZHJvcGRvd25IZWlnaHQgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g0KDQvtC30YDQsNGF0L7QstGD0ZTQvNC+INGB0LrRltC70YzQutC4INGB0YXQvtCy0LDQu9C+0YHRjyDQt9Cy0LXRgNGF0YNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBoaWRkZW5Ub3AgPSBkcm9wZG93blRvcCA8IDAgPyBNYXRoLmFicyhkcm9wZG93blRvcCkgOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vINCg0L7Qt9GA0LDRhdC+0LLRg9GU0LzQviDRgdC60ZbQu9GM0LrQuCDRgdGF0L7QstCw0LvQvtGB0Y8g0LfQvdC40LfRg1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGhpZGRlbkJvdHRvbSA9IGRyb3Bkb3duQm90dG9tID4gdmlld3BvcnRIZWlnaHQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZHJvcGRvd25Cb3R0b20gLSB2aWV3cG9ydEhlaWdodCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vINCf0YDQvtGB0LrRgNC+0LvRjtGU0LzQviDQvdCwINCx0ZbQu9GM0YjQuNC5INC3INGG0LjRhSDQt9C90LDRh9C10L3RjCAo0YnQvtCxINC/0L7QutCw0LfQsNGC0Lgg0LHRltC70YzRiNC1INC60L7QvdGC0LXQvdGC0YMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2Nyb2xsRGVsdGEgPSBoaWRkZW5Ub3AgPiBoaWRkZW5Cb3R0b20gPyBoaWRkZW5Ub3AgOiAtaGlkZGVuQm90dG9tO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRTY3JvbGxUb3AgPSBmYXZQYWdlLnNjcm9sbFRvcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXRTY3JvbGxUb3AgPSBjdXJyZW50U2Nyb2xsVG9wICsgc2Nyb2xsRGVsdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g0JLQuNC60L7RgNC40YHRgtC+0LLRg9GU0LzQviByZXF1ZXN0QW5pbWF0aW9uRnJhbWUg0LTQu9GPINC/0LvQsNCy0L3QvtCz0L4g0YHQutGA0L7Qu9GDXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmF2UGFnZS5zY3JvbGxUbyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IE1hdGgubWF4KDAsIHRhcmdldFNjcm9sbFRvcCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAxMCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBEcm9wZG93biBpcyBjbG9zaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVuRHJvcGRvd25zQ291bnQtLTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g0JLRltC00L3RltC80LDRlNC80L4g0LLQuNGB0L7RgtGDINGG0YzQvtCz0L4g0LTRgNC+0L/QtNCw0YPQvdCwINCy0ZbQtCDQt9Cw0LPQsNC70YzQvdC+0Zcg0YHRg9C80Lgg0YLRltC70YzQutC4INGP0LrRidC+INCy0L7QvdCwINCx0YPQu9CwINC00L7QtNCw0L3QsFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRyb3Bkb3duSGVpZ2h0ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsRHJvcGRvd25zSGVpZ2h0IC09IGRyb3Bkb3duSGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25IZWlnaHQgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDQntC90L7QstC70Y7RlNC80L4g0L/QvtC30LjRhtGW0Y4g0YTQvtC90YNcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcGVuRHJvcGRvd25zQ291bnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g0K/QutGJ0L4g0ZQg0ZbQvdGI0ZYg0LLRltC00LrRgNC40YLRliDQtNGA0L7Qv9C00LDRg9C90LgsINC+0L3QvtCy0LvRjtGU0LzQviDQv9C+0LfQuNGG0ZbRjlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXhCYWNrZ3JvdW5kUG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAxMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vINCS0ZbQtNC90L7QstC70Y7RlNC80L4g0L/QvtC30LjRhtGW0Y4g0YTQvtC90YMg0YLRltC70YzQutC4INGP0LrRidC+INCy0YHRliDQtNGA0L7Qv9C00LDRg9C90Lgg0LfQsNC60YDQuNGC0ZZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdG9yZUJhY2tncm91bmRQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQntCx0YDQvtCx0L3QuNC6INC60LvRltC60YMg0L3QsCDQutC90L7Qv9C60Lgg0YPRh9Cw0YHRgtGWXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5jbG9zZXN0KCcucGFydC1idG4nKSkge1xuICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB3YWl0Rm9yVXNlcklkID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRyeURldGVjdFVzZXJJZCgpO1xuICAgICAgICAgICAgICAgIGlmICh1c2VySWQgfHwgYXR0ZW1wdHMgPj0gbWF4QXR0ZW1wdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgcXVpY2tDaGVja0FuZFJlbmRlcigpO1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhdHRlbXB0cysrO1xuICAgICAgICAgICAgfSwgYXR0ZW1wdEludGVydmFsKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXdhaXQgd2FpdEZvclVzZXJJZDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja1VzZXJBdXRoKCkge1xuICAgICAgICAvLyDQodC10LvQtdC60YLQvtGA0Lgg0LTQu9GPINC60L3QvtC/0L7QulxuICAgICAgICBjb25zdCB1bmF1dGhNc2dzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnVuYXV0aC1tc2cnKTtcbiAgICAgICAgLy8gcGFydEJ0biAtINC60L3QvtC/0LrQuCDRg9GH0LDRgdGC0ZYgKNC80LDRjtGC0YwgZGF0YS1idXR0b24g0LcgXCJwYXJ0QnRuXCIg0LDQsdC+INC60LvQsNGBIC5wYXJ0LWJ0bilcbiAgICAgICAgY29uc3QgcGFydGljaXBhdGVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhcnQtYnRuLCBbZGF0YS1idXR0b24qPVwicGFydEJ0blwiXSwgW2RhdGEtYnV0dG9uKj1cInBhcnRpY2lwYXRlQnRuXCJdJyk7XG4gICAgICAgIC8vIHBsYXlCdG4gLSDQutC90L7Qv9C60Lgg0L/QtdGA0LXRhdC+0LTRgyDQvdCwINC00LXQv9C+0LfQuNGCL9C60LDQt9C40L3Qvi/RgdC/0L7RgNGCICjQvNCw0Y7RgtGMIGRhdGEtYnV0dG9uINC3IFwicGxheUJ0blwiLCBcInBsYXlDYXNpbm9CdG5cIiwgXCJiZXRTcG9ydEJ0blwiKVxuICAgICAgICBjb25zdCByZWRpcmVjdEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1idXR0b24qPVwicGxheUJ0blwiXSwgW2RhdGEtYnV0dG9uKj1cInBsYXlDYXNpbm9CdG5cIl0sIFtkYXRhLWJ1dHRvbio9XCJiZXRTcG9ydEJ0blwiXScpO1xuXG4gICAgICAgIGlmICh1c2VySWQpIHtcbiAgICAgICAgICAgIC8vINCf0YDQuNGF0L7QstGD0ZTQvNC+INC60L3QvtC/0LrQuCDQtNC70Y8g0L3QtdCw0LLRgtC+0YDQuNC30L7QstCw0L3QuNGFXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHVuYXV0aE1lcyBvZiB1bmF1dGhNc2dzKSB7XG4gICAgICAgICAgICAgICAgdW5hdXRoTWVzLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8g0J/QtdGA0LXQstGW0YDRj9GU0LzQviDRgdGC0LDRgtGD0YEg0LrQvtGA0LjRgdGC0YPQstCw0YfQsCDRh9C10YDQtdC3IEFQSVxuICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3QoYC9mYXZ1c2VyLyR7dXNlcklkfT9ub2NhY2hlPTFgKVxuICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMudXNlcmlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDQmtC+0YDQuNGB0YLRg9Cy0LDRhyDQstC10YDQuNGE0ZbQutC+0LLQsNC90LjQuSAtINC/0L7QutCw0LfRg9GU0LzQviDQutC90L7Qv9C60Lgg0L/QtdGA0LXRhdC+0LTRgyAocGxheUJ0bilcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3RCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc1ZlcmlmaWVkVXNlciA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDQmtC+0YDQuNGB0YLRg9Cy0LDRhyDQvdC1INCy0LXRgNC40YTRltC60L7QstCw0L3QuNC5IC0g0L/QvtC60LDQt9GD0ZTQvNC+INC60L3QvtC/0LrQuCDRg9GH0LDRgdGC0ZYgKHBhcnRCdG4pXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZGlyZWN0QnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNWZXJpZmllZFVzZXIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNoZWNraW5nIHVzZXIgYXV0aDonLCBlcnIpO1xuICAgICAgICAgICAgICAgICAgICAvLyDQoyDQstC40L/QsNC00LrRgyDQv9C+0LzQuNC70LrQuCDQv9C+0LrQsNC30YPRlNC80L4g0LrQvdC+0L/QutC4INGD0YfQsNGB0YLRllxuICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcbiAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3RCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSk7XG4gICAgICAgICAgICAgICAgICAgIGlzVmVyaWZpZWRVc2VyID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8g0JrQvtGA0LjRgdGC0YPQstCw0Ycg0L3QtSDQsNCy0YLQvtGA0LjQt9C+0LLQsNC90LjQuSAtINC/0L7QutCw0LfRg9GU0LzQviDRgtGW0LvRjNC60Lgg0LrQvdC+0L/QutC4INCy0YXQvtC00YNcbiAgICAgICAgICAgIGZvciAobGV0IHJlZGlyZWN0QnRuIG9mIHJlZGlyZWN0QnRucykge1xuICAgICAgICAgICAgICAgIHJlZGlyZWN0QnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IHBhcnRpY2lwYXRlQnRuIG9mIHBhcnRpY2lwYXRlQnRucykge1xuICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoY29uc3QgdW5hdXRoTWVzIG9mIHVuYXV0aE1zZ3MpIHtcbiAgICAgICAgICAgICAgICB1bmF1dGhNZXMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaXNWZXJpZmllZFVzZXIgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9hZFRyYW5zbGF0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVlc3QoYC9uZXctdHJhbnNsYXRlcy8ke2xvY2FsZX1gKVxuICAgICAgICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgICAgICAgaTE4bkRhdGEgPSBqc29uO1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnN0IG11dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAobXV0YXRpb25zKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIG11dGF0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgICAgIC8vICAgICB0cmFuc2xhdGUoKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKHRhcmdldE5vZGUsIHsgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgICAgICAgIC8vIG11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhhcmRjb3JlVGVubmlzXCIpLCB7XG4gICAgICAgICAgICAgICAgLy8gICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAvLyAgICAgc3VidHJlZTogdHJ1ZVxuICAgICAgICAgICAgICAgIC8vIH0pO1xuXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXBvcnRFcnJvcihlcnIpIHtcbiAgICAgICAgY29uc3QgcmVwb3J0RGF0YSA9IHtcbiAgICAgICAgICAgIG9yaWdpbjogd2luZG93LmxvY2F0aW9uLmhyZWYsXG4gICAgICAgICAgICB1c2VyaWQ6IHVzZXJJZCxcbiAgICAgICAgICAgIGVycm9yVGV4dDogZXJyPy5lcnJvciB8fCBlcnI/LnRleHQgfHwgZXJyPy5tZXNzYWdlIHx8ICdVbmtub3duIGVycm9yJyxcbiAgICAgICAgICAgIHR5cGU6IGVycj8ubmFtZSB8fCAnVW5rbm93bkVycm9yJyxcbiAgICAgICAgICAgIHN0YWNrOiBlcnI/LnN0YWNrIHx8ICcnXG4gICAgICAgIH07XG5cbiAgICAgICAgZmV0Y2goJ2h0dHBzOi8vZmF2LXByb20uY29tL2FwaS1jbXMvcmVwb3J0cy9hZGQnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVwb3J0RGF0YSlcbiAgICAgICAgfSkuY2F0Y2goY29uc29sZS53YXJuKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmFuc2xhdGUoKSB7XG4gICAgICAgIGNvbnN0IGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdHJhbnNsYXRlXScpXG4gICAgICAgIGlmIChlbGVtcyAmJiBlbGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmKHRyYW5zbGF0ZVN0YXRlKXtcbiAgICAgICAgICAgICAgICBlbGVtcy5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbS5pbm5lckhUTUwgPSBpMThuRGF0YVtrZXldIHx8ICcqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qICAga2V5OiAgJyArIGtleTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkxOG5EYXRhW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidHJhbnNsYXRpb24gd29ya3MhXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxvY2FsZSA9PT0gJ2VuJykge1xuICAgICAgICAgICAgbWFpblBhZ2UuY2xhc3NMaXN0LmFkZCgnZW4nKTtcbiAgICAgICAgfVxuICAgICAgICByZWZyZXNoTG9jYWxpemVkQ2xhc3MobWFpblBhZ2UpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlZnJlc2hMb2NhbGl6ZWRDbGFzcyhlbGVtZW50KSB7XG4gICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgbGFuZyBvZiBbJ2hyJywgJ2VuJ10pIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShsYW5nKTtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQobG9jYWxlKTtcbiAgICB9XG5cblxuXG5cbiAgICBmdW5jdGlvbiByZW5kZXJVc2Vycyh3ZWVrTnVtLCB1c2VyRGF0YSA9IFtdKSB7XG4gICAgICAgIHdlZWtOdW0gPSBOdW1iZXIod2Vla051bSk7XG4gICAgICAgIGNvbnN0IHdlZWtPYmogPSB1c2VyRGF0YS5maW5kKHcgPT4gdy53ZWVrID09PSB3ZWVrTnVtKTtcbiAgICAgICAgaWYgKCF3ZWVrT2JqIHx8ICF3ZWVrT2JqLmRhdGEgfHwgIUFycmF5LmlzQXJyYXkod2Vla09iai5kYXRhLnVzZXJzKSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcign0J3QtdCy0ZbRgNC90LAg0YHRgtGA0YPQutGC0YPRgNCwINC00LDQvdC40YUnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGlzU3RhZ2VFbmRlZCA9IHdlZWtPYmouZGF0YS5pc1N0YWdlRW5kZWRcblxuICAgICAgICB1c2VyRGF0YSA9IHdlZWtPYmouZGF0YS51c2VycztcblxuICAgICAgICBjb25zdCB3aW5uZXJBZGRpdGlvbmFsUHJpemUgPSB1c2VyRGF0YS5maW5kKHUgPT4ge1xuICAgICAgICAgICAgaWYodS53aW5uZXIgPT09IHRydWUpe1xuICAgICAgICAgICAgICAgIHJldHVybiB1XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgY29uc3QgY3VycmVudFVzZXIgPSB1c2VyRGF0YS5maW5kKHVzZXIgPT4gdXNlci51c2VyaWQgPT09IHVzZXJJZCk7XG5cbiAgICAgICAgaWYodXNlcklkICYmICFjdXJyZW50VXNlciAmJiBpc1ZlcmlmaWVkVXNlcil7XG4gICAgICAgICAgICB1c2VyRGF0YSA9IFsuLi51c2VyRGF0YSwge3VzZXJpZDogdXNlcklkLCBwb2ludHM6IDB9XVxuICAgICAgICB9XG4gICAgICAgIHBvcHVsYXRlVXNlcnNUYWJsZSh1c2VyRGF0YSwgdXNlcklkLCB3ZWVrTnVtLCBjdXJyZW50VXNlciwgaXNWZXJpZmllZFVzZXIsIGlzU3RhZ2VFbmRlZCwgd2lubmVyQWRkaXRpb25hbFByaXplKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwb3B1bGF0ZVVzZXJzVGFibGUodXNlcnMsIGN1cnJlbnRVc2VySWQsIHdlZWssIGN1cnJlbnRVc2VyLCBpc1ZlcmlmaWVkVXNlciwgaXNTdGFnZUVuZGVkLCB3aW5uZXJBZGRpdGlvbmFsUHJpemUpIHtcbiAgICAgICAgaWYgKCF1c2Vycz8ubGVuZ3RoKSByZXR1cm47XG4gICAgICAgIHJlc3VsdHNUYWJsZS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgcmVzdWx0c1RhYmxlT3RoZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHNlY29uZFRhYmxlT3RoZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHNlY29uZFRhYmxlLmlubmVySFRNTCA9ICcnO1xuXG5cbiAgICAgICAgY29uc3QgaXNUb3BDdXJyZW50VXNlciA9IGN1cnJlbnRVc2VyICYmIHVzZXJzLnNsaWNlKDAsIDEwKS5zb21lKHVzZXIgPT4gdXNlci51c2VyaWQgPT09IGN1cnJlbnRVc2VySWQpO1xuXG4gICAgICAgIGNvbnN0IHRvcFVzZXJzTGVuZ3RoID0gIXVzZXJJZCB8fCBpc1RvcEN1cnJlbnRVc2VyICA/IDEwIDogMTA7XG5cbiAgICAgICAgY29uc3QgdG9wVXNlcnMgPSB1c2Vycy5zbGljZSgwLCB0b3BVc2Vyc0xlbmd0aCk7XG5cbiAgICAgICAgdG9wVXNlcnMuZm9yRWFjaCh1c2VyID0+IHtcbiAgICAgICAgICAgIGRpc3BsYXlVc2VyKHVzZXIsIHVzZXIudXNlcmlkID09PSBjdXJyZW50VXNlcklkLCByZXN1bHRzVGFibGUsIHRvcFVzZXJzLCBpc1RvcEN1cnJlbnRVc2VyLCB3ZWVrKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmKGlzVmVyaWZpZWRVc2VyICYmICFjdXJyZW50VXNlcikge1xuICAgICAgICAgICAgZGlzcGxheVVzZXIoY3VycmVudFVzZXIsIHRydWUsIHJlc3VsdHNUYWJsZU90aGVyLCB1c2VycywgZmFsc2UsIHdlZWspO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFpc1RvcEN1cnJlbnRVc2VyICYmIGN1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgICBkaXNwbGF5VXNlcihjdXJyZW50VXNlciwgdHJ1ZSwgcmVzdWx0c1RhYmxlT3RoZXIsIHVzZXJzLCBmYWxzZSwgd2Vlayk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5VXNlcih1c2VyLCBpc0N1cnJlbnRVc2VyLCB0YWJsZSwgdXNlcnMsIGlzVG9wQ3VycmVudFVzZXIsIHdlZWspIHtcblxuICAgICAgICBjb25zdCByZW5kZXJSb3cgPSAodXNlckRhdGEsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBoaWdobGlnaHQgPSBmYWxzZSwgbmVpZ2hib3IgPSBmYWxzZSB9ID0gb3B0aW9ucztcbiAgICAgICAgICAgIGNvbnN0IHVzZXJSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZCgndGFibGVfX3JvdycpO1xuXG4gICAgICAgICAgICBjb25zdCB1c2VyUGxhY2UgPSB1c2Vycy5pbmRleE9mKHVzZXJEYXRhKSArIDE7XG4gICAgICAgICAgICBjb25zdCBwcml6ZUtleSA9IGRlYnVnID8gbnVsbCA6IGdldFByaXplVHJhbnNsYXRpb25LZXkodXNlclBsYWNlLCB3ZWVrKTtcblxuICAgICAgICAgICAgaWYgKHVzZXJQbGFjZSA8PSAzKSB7XG4gICAgICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKGBwbGFjZSR7dXNlclBsYWNlfWApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaGlnaGxpZ2h0IHx8IGlzQ3VycmVudFVzZXIgJiYgIW5laWdoYm9yKSB7XG4gICAgICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKCd5b3UnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmVpZ2hib3IpIHtcbiAgICAgICAgICAgICAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoJ19uZWlnaGJvcicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1c2VyUm93LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke3VzZXJQbGFjZSA8IDEwID8gJzAnICsgdXNlclBsYWNlIDogdXNlclBsYWNlfVxuICAgICAgICAgICAgICAgICR7aXNDdXJyZW50VXNlciAmJiAhbmVpZ2hib3IgPyAnPHNwYW4gY2xhc3M9XCJ5b3VcIj4nICsgdHJhbnNsYXRlS2V5KFwieW91XCIpICsgJzwvc3Bhbj4nIDogJyd9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke2lzQ3VycmVudFVzZXIgJiYgIW5laWdoYm9yID8gdXNlckRhdGEudXNlcmlkIDogbWFza1VzZXJJZCh1c2VyRGF0YS51c2VyaWQpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHtOdW1iZXIodXNlckRhdGEucG9pbnRzKS50b0ZpeGVkKDIpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHtwcml6ZUtleSA/IHRyYW5zbGF0ZUtleShwcml6ZUtleSkgOiAnIC0gJ31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuXG4gICAgICAgICAgICB0YWJsZS5hcHBlbmQodXNlclJvdyk7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChpc0N1cnJlbnRVc2VyICYmICFpc1RvcEN1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHVzZXJzLmluZGV4T2YodXNlcik7XG4gICAgICAgICAgICBpZiAodXNlcnNbaW5kZXggLSAxXSkge1xuICAgICAgICAgICAgICAgIHJlbmRlclJvdyh1c2Vyc1tpbmRleCAtIDFdLCB7IG5laWdoYm9yOiB0cnVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVuZGVyUm93KHVzZXIsIHsgaGlnaGxpZ2h0OiB0cnVlIH0pO1xuICAgICAgICAgICAgaWYgKHVzZXJzW2luZGV4ICsgMV0pIHtcbiAgICAgICAgICAgICAgICByZW5kZXJSb3codXNlcnNbaW5kZXggKyAxXSwgeyBuZWlnaGJvcjogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlbmRlclJvdyh1c2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluaXRQcm9ncmVzc0JhcigpIHtcbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2dyZXNzQmFyQ2FudmFzJyk7XG4gICAgICAgIGNvbnN0IHBlcmNlbnRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2dyZXNzUGVyY2VudCcpO1xuICAgICAgICBpZiAoIWNhbnZhcyB8fCAhcGVyY2VudEVsZW1lbnQpIHJldHVybjtcblxuICAgICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgXG4gICAgICAgIC8vINCa0L7QvdGB0YLQsNC90YLQuFxuICAgICAgICBjb25zdCBiYXJIZWlnaHQgPSAyMDsgLy8g0JLQuNGB0L7RgtCwINC/0YDQvtCz0YDQtdGBLdCx0LDRgNGDXG4gICAgICAgIGNvbnN0IHNlZ21lbnRXaWR0aCA9IDQ7IC8vINCo0LjRgNC40L3QsCDQvtC00L3QvtCz0L4g0YHQtdCz0LzQtdC90YLQsFxuICAgICAgICBjb25zdCBzZWdtZW50SGVpZ2h0ID0gMTQ7IC8vINCS0LjRgdC+0YLQsCDQvtC00L3QvtCz0L4g0YHQtdCz0LzQtdC90YLQsFxuICAgICAgICBjb25zdCBzZWdtZW50R2FwID0gMjsgLy8g0J/RgNC+0LzRltC20L7QuiDQvNGW0LYg0YHQtdCz0LzQtdC90YLQsNC80LhcbiAgICAgICAgY29uc3QgcGFkZGluZyA9IDI7IC8vINCS0ZbQtNGB0YLRg9C/INCy0ZbQtCDQutGA0LDRl9CyXG4gICAgICAgIGNvbnN0IHNlZ21lbnRSYWRpdXMgPSAxOyAvLyBCb3JkZXIgcmFkaXVzINC00LvRjyDRgdC10LPQvNC10L3RgtGW0LJcbiAgICAgICAgXG4gICAgICAgIC8vINCf0LDRgNCw0LzQtdGC0YDQuCDQsNC90ZbQvNCw0YbRltGXINC30LDQstCw0L3RgtCw0LbQtdC90L3Rj1xuICAgICAgICBsZXQgY3VycmVudFByb2dyZXNzID0gMTsgLy8g0J/QvtGH0LjQvdCw0ZTQvNC+INC3IDElXG4gICAgICAgIGNvbnN0IHRhcmdldFByb2dyZXNzID0gMTAwOyAvLyDQptGW0LvRjNC+0LLQuNC5INC/0YDQvtCz0YDQtdGBXG4gICAgICAgIGNvbnN0IGxvYWRpbmdEdXJhdGlvbiA9IDMwMDA7IC8vINCi0YDQuNCy0LDQu9GW0YHRgtGMINC30LDQstCw0L3RgtCw0LbQtdC90L3RjzogMyDRgdC10LrRg9C90LTQuFxuICAgICAgICBsZXQgc3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgbGV0IGFuaW1hdGlvbklkID0gbnVsbDtcbiAgICAgICAgbGV0IG1heFNlZ21lbnRzID0gMDtcbiAgICAgICAgbGV0IGlzTG9hZGluZ0NvbXBsZXRlID0gZmFsc2U7XG4gICAgICAgIFxuICAgICAgICBmdW5jdGlvbiByZXNpemVDYW52YXMoKSB7XG4gICAgICAgICAgICAvLyDQntGC0YDQuNC80YPRlNC80L4g0YDQvtC30LzRltGA0Lgg0LrQvtC90YLQtdC50L3QtdGA0LBcbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGNhbnZhcy5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgY29uc3QgY29udGFpbmVyV2lkdGggPSBjb250YWluZXIub2Zmc2V0V2lkdGggfHwgNzY4O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQktGB0YLQsNC90L7QstC70Y7RlNC80L4g0YDQvtC30LzRltGA0LggY2FudmFzXG4gICAgICAgICAgICBjYW52YXMud2lkdGggPSBjb250YWluZXJXaWR0aDtcbiAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSBiYXJIZWlnaHQ7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCg0L7Qt9GA0LDRhdC+0LLRg9GU0LzQviDQutGW0LvRjNC60ZbRgdGC0Ywg0YHQtdCz0LzQtdC90YLRltCyLCDRidC+INC/0L7QvNGW0YHRgtGP0YLRjNGB0Y9cbiAgICAgICAgICAgIGNvbnN0IGF2YWlsYWJsZVdpZHRoID0gY29udGFpbmVyV2lkdGggLSAocGFkZGluZyAqIDIpO1xuICAgICAgICAgICAgY29uc3Qgc2VnbWVudFdpdGhHYXAgPSBzZWdtZW50V2lkdGggKyBzZWdtZW50R2FwO1xuICAgICAgICAgICAgbWF4U2VnbWVudHMgPSBNYXRoLmZsb29yKGF2YWlsYWJsZVdpZHRoIC8gc2VnbWVudFdpdGhHYXApO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQn9C10YDQtdC80LDQu9GM0L7QstGD0ZTQvNC+INC3INC/0L7RgtC+0YfQvdC40Lwg0L/RgNC+0LPRgNC10YHQvtC8XG4gICAgICAgICAgICBpZiAoY3VycmVudFByb2dyZXNzID4gMCkge1xuICAgICAgICAgICAgICAgIGRyYXdQcm9ncmVzc0JhcihjdXJyZW50UHJvZ3Jlc3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBmdW5jdGlvbiBkcmF3UHJvZ3Jlc3NCYXIocHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgIC8vINCe0YfQuNGJ0LDRlNC80L4gY2FudmFzXG4gICAgICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCc0LDQu9GO0ZTQvNC+INGA0LDQvNC60YMgKNCx0ZbQu9C40Lkg0L/RgNGP0LzQvtC60YPRgtC90LjQuilcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICcjRkZGRkZGJztcbiAgICAgICAgICAgIGN0eC5saW5lV2lkdGggPSAxO1xuICAgICAgICAgICAgY3R4LnN0cm9rZVJlY3QoMC41LCAwLjUsIGNhbnZhcy53aWR0aCAtIDEsIGNhbnZhcy5oZWlnaHQgLSAxKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0KDQvtC30YDQsNGF0L7QstGD0ZTQvNC+INC60ZbQu9GM0LrRltGB0YLRjCDQt9Cw0L/QvtCy0L3QtdC90LjRhSDRgdC10LPQvNC10L3RgtGW0LJcbiAgICAgICAgICAgIGNvbnN0IGZpbGxlZFNlZ21lbnRzID0gTWF0aC5mbG9vcigocHJvZ3Jlc3MgLyAxMDApICogbWF4U2VnbWVudHMpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQnNCw0LvRjtGU0LzQviDQt9Cw0L/QvtCy0L3QtdC90ZYg0YHQtdCz0LzQtdC90YLQuCDQtyDQt9Cw0L7QutGA0YPQs9C70LXQvdC40LzQuCDQutGD0YLQsNC80LhcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSAnI0ZGRkZGRic7XG4gICAgICAgICAgICBjb25zdCBjZW50ZXJZID0gKGJhckhlaWdodCAtIHNlZ21lbnRIZWlnaHQpIC8gMjsgLy8g0JLQtdGA0YLQuNC60LDQu9GM0L3QtSDRhtC10L3RgtGA0YPQstCw0L3QvdGPXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsbGVkU2VnbWVudHM7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHggPSBwYWRkaW5nICsgaSAqIChzZWdtZW50V2lkdGggKyBzZWdtZW50R2FwKTtcbiAgICAgICAgICAgICAgICBjb25zdCB5ID0gY2VudGVyWTtcblxuICAgICAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICBpZiAoY3R4LnJvdW5kUmVjdCkge1xuICAgICAgICAgICAgICAgICAgICAvLyDQodGD0YfQsNGB0L3QuNC5INC80LXRgtC+0LQgKNC/0ZbQtNGC0YDQuNC80YPRlNGC0YzRgdGPINCyINC90L7QstC40YUg0LHRgNCw0YPQt9C10YDQsNGFKVxuICAgICAgICAgICAgICAgICAgICBjdHgucm91bmRSZWN0KHgsIHksIHNlZ21lbnRXaWR0aCwgc2VnbWVudEhlaWdodCwgc2VnbWVudFJhZGl1cyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gRmFsbGJhY2sg0LTQu9GPINGB0YLQsNGA0LjRhSDQsdGA0LDRg9C30LXRgNGW0LJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgciA9IHNlZ21lbnRSYWRpdXM7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5tb3ZlVG8oeCArIHIsIHkpO1xuICAgICAgICAgICAgICAgICAgICBjdHgubGluZVRvKHggKyBzZWdtZW50V2lkdGggLSByLCB5KTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCArIHNlZ21lbnRXaWR0aCwgeSwgeCArIHNlZ21lbnRXaWR0aCwgeSArIHIpO1xuICAgICAgICAgICAgICAgICAgICBjdHgubGluZVRvKHggKyBzZWdtZW50V2lkdGgsIHkgKyBzZWdtZW50SGVpZ2h0IC0gcik7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHggKyBzZWdtZW50V2lkdGgsIHkgKyBzZWdtZW50SGVpZ2h0LCB4ICsgc2VnbWVudFdpZHRoIC0gciwgeSArIHNlZ21lbnRIZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICBjdHgubGluZVRvKHggKyByLCB5ICsgc2VnbWVudEhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHgsIHkgKyBzZWdtZW50SGVpZ2h0LCB4LCB5ICsgc2VnbWVudEhlaWdodCAtIHIpO1xuICAgICAgICAgICAgICAgICAgICBjdHgubGluZVRvKHgsIHkgKyByKTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCwgeSwgeCArIHIsIHkpO1xuICAgICAgICAgICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZVByb2dyZXNzKCkge1xuICAgICAgICAgICAgY29uc3QgZWxhcHNlZCA9IERhdGUubm93KCkgLSBzdGFydFRpbWU7XG4gICAgICAgICAgICBsZXQgcHJvZ3Jlc3MgPSAxICsgKGVsYXBzZWQgLyBsb2FkaW5nRHVyYXRpb24pICogOTk7IC8vINCS0ZbQtCAxJSDQtNC+IDEwMCVcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0J7QsdC80LXQttGD0ZTQvNC+INC/0YDQvtCz0YDQtdGBINC00L4gMTAwJVxuICAgICAgICAgICAgaWYgKHByb2dyZXNzID49IHRhcmdldFByb2dyZXNzKSB7XG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3MgPSB0YXJnZXRQcm9ncmVzcztcbiAgICAgICAgICAgICAgICBpc0xvYWRpbmdDb21wbGV0ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGN1cnJlbnRQcm9ncmVzcyA9IHByb2dyZXNzO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQntC90L7QstC70Y7RlNC80L4g0LLRltC00L7QsdGA0LDQttC10L3QvdGPXG4gICAgICAgICAgICBkcmF3UHJvZ3Jlc3NCYXIocHJvZ3Jlc3MpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQntC90L7QstC70Y7RlNC80L4g0LLRltC00YHQvtGC0LrQuCAo0YLRltC70YzQutC4INGG0ZbQu9GWINGH0LjRgdC70LApXG4gICAgICAgICAgICBjb25zdCBwZXJjZW50ID0gTWF0aC5mbG9vcihwcm9ncmVzcyk7XG4gICAgICAgICAgICBwZXJjZW50RWxlbWVudC50ZXh0Q29udGVudCA9IHBlcmNlbnQgKyAnJSc7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCf0YDQvtC00L7QstC20YPRlNC80L4g0LDQvdGW0LzQsNGG0ZbRjiDQtNC+INC30LDQstC10YDRiNC10L3QvdGPINC30LDQstCw0L3RgtCw0LbQtdC90L3Rj1xuICAgICAgICAgICAgaWYgKCFpc0xvYWRpbmdDb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbklkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZVByb2dyZXNzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8g0IbQvdGW0YbRltCw0LvRltC30YPRlNC80L4g0YDQvtC30LzRltGA0LggY2FudmFzXG4gICAgICAgIHJlc2l6ZUNhbnZhcygpO1xuICAgICAgICBcbiAgICAgICAgLy8g0J7QsdGA0L7QsdC60LAg0LfQvNGW0L3QuCDRgNC+0LfQvNGW0YDRgyDQstGW0LrQvdCwXG4gICAgICAgIGxldCByZXNpemVUaW1lb3V0O1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHJlc2l6ZVRpbWVvdXQpO1xuICAgICAgICAgICAgcmVzaXplVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc2l6ZUNhbnZhcygpO1xuICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICAvLyDQhtC90ZbRhtGW0LDQu9GW0LfQsNGG0ZbRjyDQsNC90ZbQvNCw0YbRltGXINC/0L7Rj9Cy0Lgg0ZbQutC+0L3QvtC6XG4gICAgICAgIGluaXRJY29uc0FuaW1hdGlvbihsb2FkaW5nRHVyYXRpb24pO1xuICAgICAgICBcbiAgICAgICAgLy8g0JfQsNC/0YPRgdC60LDRlNC80L4g0LDQvdGW0LzQsNGG0ZbRjiDQtyDQvdC10LLQtdC70LjQutC+0Y4g0LfQsNGC0YDQuNC80LrQvtGOINC00LvRjyDQutC+0YDQtdC60YLQvdC+0LPQviDRgNC+0LfRgNCw0YXRg9C90LrRgyDRgNC+0LfQvNGW0YDRltCyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc2l6ZUNhbnZhcygpO1xuICAgICAgICAgICAgICAgIHN0YXJ0VGltZSA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgdXBkYXRlUHJvZ3Jlc3MoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyDQkNC90ZbQvNCw0YbRltGPINC/0L7Rj9Cy0Lgg0ZbQutC+0L3QvtC6INC/0L4g0YfQtdGA0LfRliDQv9GW0LQg0YfQsNGBINC30LDQstCw0L3RgtCw0LbQtdC90L3Rj1xuICAgIGZ1bmN0aW9uIGluaXRJY29uc0FuaW1hdGlvbihkdXJhdGlvbikge1xuICAgICAgICBjb25zdCBpY29ucyA9IFtcbiAgICAgICAgICAgICcud2VsY29tZV9fZGVjb3ItaXRlbS5fZ2FtZXBhZCcsXG4gICAgICAgICAgICAnLndlbGNvbWVfX2RlY29yLWl0ZW0uX2NoaXAnLFxuICAgICAgICAgICAgJy53ZWxjb21lX19kZWNvci1pdGVtLl9jb2luJyxcbiAgICAgICAgICAgICcud2VsY29tZV9fZGVjb3ItaXRlbS5fYmFsbCcsXG4gICAgICAgICAgICAnLndlbGNvbWVfX2RlY29yLWl0ZW0uX2N1cCcsXG4gICAgICAgICAgICAnLndlbGNvbWVfX2RlY29yLWl0ZW0uX2N1YmUnLFxuICAgICAgICAgICAgJy53ZWxjb21lX19kZWNvci1pdGVtLl9nbG9iZSdcbiAgICAgICAgXTtcblxuICAgICAgICAvLyDQl9Cx0LXRgNGW0LPQsNGU0LzQviDQvtGA0LjQs9GW0L3QsNC70YzQvdGWIHRyYW5zZm9ybSDQtNC70Y8g0LrQvtC20L3QvtGXINGW0LrQvtC90LrQuFxuICAgICAgICBjb25zdCBvcmlnaW5hbFRyYW5zZm9ybXMgPSBuZXcgTWFwKCk7XG4gICAgICAgIGNvbnN0IGhhZElubGluZVRyYW5zZm9ybSA9IG5ldyBNYXAoKTtcblxuICAgICAgICAvLyDQodC/0L7Rh9Cw0YLQutGDINC/0YDQuNGF0L7QstGD0ZTQvNC+INCy0YHRliDRltC60L7QvdC60LhcbiAgICAgICAgaWNvbnMuZm9yRWFjaChzZWxlY3RvciA9PiB7XG4gICAgICAgICAgICBjb25zdCBpY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgICAgICAgICBpZiAoaWNvbikge1xuICAgICAgICAgICAgICAgIC8vINCf0LXRgNC10LLRltGA0Y/RlNC80L4sINGH0Lgg0LHRg9CyINCy0YHRgtCw0L3QvtCy0LvQtdC90LjQuSBpbmxpbmUgdHJhbnNmb3JtINCU0J4g0L3QsNGI0L7RlyDQsNC90ZbQvNCw0YbRltGXXG4gICAgICAgICAgICAgICAgY29uc3QgaGFkSW5saW5lID0gaWNvbi5zdHlsZS50cmFuc2Zvcm0gJiYgaWNvbi5zdHlsZS50cmFuc2Zvcm0gIT09ICcnO1xuICAgICAgICAgICAgICAgIGhhZElubGluZVRyYW5zZm9ybS5zZXQoc2VsZWN0b3IsIGhhZElubGluZSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8g0JfQsdC10YDRltCz0LDRlNC80L4g0L7RgNC40LPRltC90LDQu9GM0L3QuNC5IHRyYW5zZm9ybSDQtyBjb21wdXRlZCBzdHlsZSAo0LLQutC70Y7Rh9Cw0ZQgQ1NTKVxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShpY29uKTtcbiAgICAgICAgICAgICAgICBjb25zdCBvcmlnaW5hbFRyYW5zZm9ybSA9IGNvbXB1dGVkU3R5bGUudHJhbnNmb3JtO1xuICAgICAgICAgICAgICAgIG9yaWdpbmFsVHJhbnNmb3Jtcy5zZXQoc2VsZWN0b3IsIG9yaWdpbmFsVHJhbnNmb3JtKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyDQktGB0YLQsNC90L7QstC70Y7RlNC80L4g0L/QvtGH0LDRgtC60L7QstC40Lkg0YHRgtCw0L1cbiAgICAgICAgICAgICAgICBpY29uLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgICAgICAgICAgICAgaWNvbi5zdHlsZS50cmFuc2l0aW9uID0gJ29wYWNpdHkgMC40cyBlYXNlLCB0cmFuc2Zvcm0gMC40cyBlYXNlJztcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyDQktGB0YLQsNC90L7QstC70Y7RlNC80L4gc2NhbGUg0Lcg0LfQsdC10YDQtdC20LXQvdC90Y/QvCByb3RhdGVcbiAgICAgICAgICAgICAgICBpZiAob3JpZ2luYWxUcmFuc2Zvcm0gJiYgb3JpZ2luYWxUcmFuc2Zvcm0gIT09ICdub25lJykge1xuICAgICAgICAgICAgICAgICAgICBpY29uLnN0eWxlLnRyYW5zZm9ybSA9IG9yaWdpbmFsVHJhbnNmb3JtICsgJyBzY2FsZSgwLjUpJztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpY29uLnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZSgwLjUpJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vINCg0L7Qt9GA0LDRhdC+0LLRg9GU0LzQviDRltC90YLQtdGA0LLQsNC7INC80ZbQtiDQv9C+0Y/QstC+0Y4g0ZbQutC+0L3QvtC6XG4gICAgICAgIGNvbnN0IGljb25Db3VudCA9IGljb25zLmxlbmd0aDtcbiAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBkdXJhdGlvbiAvIGljb25Db3VudDsgLy8g0KDRltCy0L3QvtC80ZbRgNC90L4g0YDQvtC30L/QvtC00ZbQu9GP0ZTQvNC+INC/0L4g0YfQsNGB0YNcblxuICAgICAgICAvLyDQn9C+0LrQsNC30YPRlNC80L4g0ZbQutC+0L3QutC4INC/0L4g0YfQtdGA0LfRllxuICAgICAgICBpY29ucy5mb3JFYWNoKChzZWxlY3RvciwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICAgICAgICAgICAgICBpZiAoaWNvbikge1xuICAgICAgICAgICAgICAgICAgICBpY29uLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyDQktGW0LTQvdC+0LLQu9GO0ZTQvNC+INC+0YDQuNCz0ZbQvdCw0LvRjNC90LjQuSB0cmFuc2Zvcm1cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxUcmFuc2Zvcm0gPSBvcmlnaW5hbFRyYW5zZm9ybXMuZ2V0KHNlbGVjdG9yKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaGFkSW5saW5lID0gaGFkSW5saW5lVHJhbnNmb3JtLmdldChzZWxlY3Rvcik7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAob3JpZ2luYWxUcmFuc2Zvcm0gJiYgb3JpZ2luYWxUcmFuc2Zvcm0gIT09ICdub25lJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbi5zdHlsZS50cmFuc2Zvcm0gPSBvcmlnaW5hbFRyYW5zZm9ybTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChoYWRJbmxpbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uLnN0eWxlLnRyYW5zZm9ybSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbi5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNmb3JtJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBpbmRleCAqIGludGVydmFsKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8g0JfQvNGW0L3QvdGWINC00LvRjyDQt9Cx0LXRgNGW0LPQsNC90L3RjyDQv9C+0YHQuNC70LDQvdGMINC90LAgY2FudmFzINGC0LAg0LTQsNC90ZYg0LTQu9GPINC+0LHRgNC+0LHQvdC40LrRltCyINC/0L7QtNGW0LlcbiAgICBsZXQgcGFydGljaXBhdGVDYW52YXMgPSBudWxsO1xuICAgIGxldCBwYXJ0aWNpcGF0ZURlZXJzID0gW107XG4gICAgbGV0IHBhcnRpY2lwYXRlRGVlcldpZHRoID0gMDtcbiAgICBsZXQgcGFydGljaXBhdGVEZWVySGVpZ2h0ID0gMDtcbiAgICBsZXQgY2FudmFzQ2xpY2tIYW5kbGVyc0F0dGFjaGVkID0gZmFsc2U7XG4gICAgbGV0IHBhcnRpY2lwYXRlQW5pbWF0aW9uSWQgPSBudWxsOyAvLyDQk9C70L7QsdCw0LvRjNC90LAg0LfQvNGW0L3QvdCwINC00LvRjyBJRCDQsNC90ZbQvNCw0YbRltGXXG4gICAgXG4gICAgLy8g0JfQvNGW0L3QvdGWINC00LvRjyDQstGW0LTRgdGC0LXQttC10L3QvdGPIHRvdWNoINC/0L7QtNGW0LlcbiAgICBsZXQgdG91Y2hTdGFydFggPSAwO1xuICAgIGxldCB0b3VjaFN0YXJ0WSA9IDA7XG5cbiAgICAvLyDQntCx0YDQvtCx0L3QuNC6INC60LvRltC60YMg0L/QviBjYW52YXNcbiAgICBmdW5jdGlvbiBoYW5kbGVQYXJ0aWNpcGF0ZUNhbnZhc0NsaWNrKGV2ZW50KSB7XG4gICAgICAgIGlmICghcGFydGljaXBhdGVDYW52YXMgfHwgIXBhcnRpY2lwYXRlRGVlcnMubGVuZ3RoKSByZXR1cm47XG4gICAgICAgIFxuICAgICAgICBjb25zdCByZWN0ID0gcGFydGljaXBhdGVDYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IHNjYWxlWCA9IHBhcnRpY2lwYXRlQ2FudmFzLndpZHRoIC8gcmVjdC53aWR0aDtcbiAgICAgICAgY29uc3Qgc2NhbGVZID0gcGFydGljaXBhdGVDYW52YXMuaGVpZ2h0IC8gcmVjdC5oZWlnaHQ7XG4gICAgICAgIFxuICAgICAgICAvLyDQntGC0YDQuNC80YPRlNC80L4g0LrQvtC+0YDQtNC40L3QsNGC0Lgg0LrQu9GW0LrRgyDQstGW0LTQvdC+0YHQvdC+IGNhbnZhc1xuICAgICAgICBjb25zdCBjbGllbnRYID0gZXZlbnQuY2xpZW50WDtcbiAgICAgICAgY29uc3QgY2xpZW50WSA9IGV2ZW50LmNsaWVudFk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBjbGlja1ggPSAoY2xpZW50WCAtIHJlY3QubGVmdCkgKiBzY2FsZVg7XG4gICAgICAgIGNvbnN0IGNsaWNrWSA9IChjbGllbnRZIC0gcmVjdC50b3ApICogc2NhbGVZO1xuICAgICAgICBcbiAgICAgICAgLy8g0J/QtdGA0LXQstGW0YDRj9GU0LzQviDRh9C4INC60LvRltC6INC/0L7RgtGA0LDQv9C40LIg0L3QsCDRj9C60L7Qs9C+0YHRjCDQvtC70LXQvdGPXG4gICAgICAgIHBhcnRpY2lwYXRlRGVlcnMuZm9yRWFjaChkZWVyID0+IHtcbiAgICAgICAgICAgIGlmIChkZWVyLmlzUG9pbnRJbnNpZGUoY2xpY2tYLCBjbGlja1ksIHBhcnRpY2lwYXRlRGVlcldpZHRoLCBwYXJ0aWNpcGF0ZURlZXJIZWlnaHQpKSB7XG4gICAgICAgICAgICAgICAgZGVlci5oYW5kbGVDbGljaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgLy8g0J7QsdGA0L7QsdC90LjQuiB0b3VjaHN0YXJ0INC00LvRjyDQstGW0LTRgdGC0LXQttC10L3QvdGPINC/0L7Rh9Cw0YLQutGDINC00L7RgtC40LrRg1xuICAgIGZ1bmN0aW9uIGhhbmRsZVBhcnRpY2lwYXRlQ2FudmFzVG91Y2hTdGFydChldmVudCkge1xuICAgICAgICBpZiAoIXBhcnRpY2lwYXRlQ2FudmFzIHx8ICFwYXJ0aWNpcGF0ZURlZXJzLmxlbmd0aCkgcmV0dXJuO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgdG91Y2ggPSBldmVudC50b3VjaGVzWzBdO1xuICAgICAgICBpZiAoIXRvdWNoKSByZXR1cm47XG4gICAgICAgIFxuICAgICAgICAvLyDQl9Cx0LXRgNGW0LPQsNGU0LzQviDQutC+0L7RgNC00LjQvdCw0YLQuCDQv9C+0YfQsNGC0LrRgyDQtNC+0YLQuNC60YNcbiAgICAgICAgdG91Y2hTdGFydFggPSB0b3VjaC5jbGllbnRYO1xuICAgICAgICB0b3VjaFN0YXJ0WSA9IHRvdWNoLmNsaWVudFk7XG4gICAgfVxuICAgIFxuICAgIC8vINCe0LHRgNC+0LHQvdC40LogdG91Y2hlbmQg0LTQu9GPINCy0LjQt9C90LDRh9C10L3QvdGPINGH0Lgg0YbQtSDRgtCw0L8g0YfQuCDRgdC60YDQvtC7XG4gICAgZnVuY3Rpb24gaGFuZGxlUGFydGljaXBhdGVDYW52YXNUb3VjaEVuZChldmVudCkge1xuICAgICAgICBpZiAoIXBhcnRpY2lwYXRlQ2FudmFzIHx8ICFwYXJ0aWNpcGF0ZURlZXJzLmxlbmd0aCkgcmV0dXJuO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgdG91Y2ggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXTtcbiAgICAgICAgaWYgKCF0b3VjaCkgcmV0dXJuO1xuICAgICAgICBcbiAgICAgICAgLy8g0KDQvtC30YDQsNGF0L7QstGD0ZTQvNC+INCy0ZbQtNGB0YLQsNC90Ywg0LzRltC2IHRvdWNoc3RhcnQg0YLQsCB0b3VjaGVuZFxuICAgICAgICBjb25zdCBkZWx0YVggPSBNYXRoLmFicyh0b3VjaC5jbGllbnRYIC0gdG91Y2hTdGFydFgpO1xuICAgICAgICBjb25zdCBkZWx0YVkgPSBNYXRoLmFicyh0b3VjaC5jbGllbnRZIC0gdG91Y2hTdGFydFkpO1xuICAgICAgICBjb25zdCBkaXN0YW5jZSA9IE1hdGguc3FydChkZWx0YVggKiBkZWx0YVggKyBkZWx0YVkgKiBkZWx0YVkpO1xuICAgICAgICBcbiAgICAgICAgLy8g0K/QutGJ0L4g0LLRltC00YHRgtCw0L3RjCDQsdGW0LvRjNGI0LUgMTBweCAtINGG0LUg0YHQutGA0L7Quywg0L3QtSDQvtCx0YDQvtCx0LvRj9GU0LzQvlxuICAgICAgICBpZiAoZGlzdGFuY2UgPiAxMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyDQr9C60YnQviDQstGW0LTRgdGC0LDQvdGMINC80LXQvdGI0LUg0LDQsdC+INC00L7RgNGW0LLQvdGO0ZQgMTBweCAtINGG0LUg0YLQsNC/LCDQvtCx0YDQvtCx0LvRj9GU0LzQvlxuICAgICAgICBjb25zdCByZWN0ID0gcGFydGljaXBhdGVDYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IHNjYWxlWCA9IHBhcnRpY2lwYXRlQ2FudmFzLndpZHRoIC8gcmVjdC53aWR0aDtcbiAgICAgICAgY29uc3Qgc2NhbGVZID0gcGFydGljaXBhdGVDYW52YXMuaGVpZ2h0IC8gcmVjdC5oZWlnaHQ7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBjbGlja1ggPSAodG91Y2guY2xpZW50WCAtIHJlY3QubGVmdCkgKiBzY2FsZVg7XG4gICAgICAgIGNvbnN0IGNsaWNrWSA9ICh0b3VjaC5jbGllbnRZIC0gcmVjdC50b3ApICogc2NhbGVZO1xuICAgICAgICBcbiAgICAgICAgLy8g0J/QtdGA0LXQstGW0YDRj9GU0LzQviDRh9C4INGC0LDQvyDQv9C+0YLRgNCw0L/QuNCyINC90LAg0Y/QutC+0LPQvtGB0Ywg0L7Qu9C10L3Rj1xuICAgICAgICBwYXJ0aWNpcGF0ZURlZXJzLmZvckVhY2goZGVlciA9PiB7XG4gICAgICAgICAgICBpZiAoZGVlci5pc1BvaW50SW5zaWRlKGNsaWNrWCwgY2xpY2tZLCBwYXJ0aWNpcGF0ZURlZXJXaWR0aCwgcGFydGljaXBhdGVEZWVySGVpZ2h0KSkge1xuICAgICAgICAgICAgICAgIGRlZXIuaGFuZGxlQ2xpY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdFBhcnRpY2lwYXRlQ2FudmFzKCkge1xuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGFydGljaXBhdGVDYW52YXMnKTtcbiAgICAgICAgaWYgKCFjYW52YXMpIHJldHVybjtcblxuICAgICAgICAvLyDQl9GD0L/QuNC90Y/RlNC80L4g0L/QvtC/0LXRgNC10LTQvdGOINCw0L3RltC80LDRhtGW0Y4g0Y/QutGJ0L4g0LLQvtC90LAg0ZbRgdC90YPRlFxuICAgICAgICBpZiAocGFydGljaXBhdGVBbmltYXRpb25JZCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUocGFydGljaXBhdGVBbmltYXRpb25JZCk7XG4gICAgICAgICAgICBwYXJ0aWNpcGF0ZUFuaW1hdGlvbklkID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8g0J7Rh9C40YnQsNGU0LzQviDQv9C+0L/QtdGA0LXQtNC90ZbRhSDQvtC70LXQvdGW0LJcbiAgICAgICAgcGFydGljaXBhdGVEZWVycyA9IFtdO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIFxuICAgICAgICAvLyDQntC90L7QstC70Y7RlNC80L4g0L/QvtGB0LjQu9Cw0L3QvdGPINC90LAgY2FudmFzXG4gICAgICAgIHBhcnRpY2lwYXRlQ2FudmFzID0gY2FudmFzO1xuICAgICAgICBcbiAgICAgICAgLy8g0JLQuNC30L3QsNGH0LDRlNC80L4g0YfQuCDQtdC60YDQsNC9IDw9IDEwNTBweFxuICAgICAgICBjb25zdCBpc01vYmlsZSA9IHdpbmRvdy5pbm5lcldpZHRoIDw9IDEwNTA7XG5cbiAgICAgICAgLy8g0JrQvtC90YHRgtCw0L3RgtC4INC00LvRjyDRgNC+0LfQvNGW0YDRltCyINGC0LAg0L/QvtC30LjRhtGW0LlcbiAgICAgICAgY29uc3QgQ0FOVkFTX1dJRFRIID0gaXNNb2JpbGUgPyA3NjggOiAxMzY2O1xuICAgICAgICBjb25zdCBDQU5WQVNfSEVJR0hUID0gaXNNb2JpbGUgPyA0NzAgOiA1MDA7XG4gICAgICAgIFxuICAgICAgICAvLyDQktGB0YLQsNC90L7QstC70Y7RlNC80L4g0YDQvtC30LzRltGA0LggY2FudmFzXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IENBTlZBU19XSURUSDtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IENBTlZBU19IRUlHSFQ7XG4gICAgICAgIFxuICAgICAgICAvLyDQpNGW0LrRgdC+0LLQsNC90ZYg0YDQvtC30LzRltGA0Lgg0LTQtdGA0LXQstCwICjQvdC1INC80LDRgdGI0YLQsNCx0YPRjtGC0YzRgdGPKVxuICAgICAgICBjb25zdCBUUkVFX1dJRFRIID0gMTc1O1xuICAgICAgICBjb25zdCBUUkVFX0hFSUdIVCA9IDE2NztcbiAgICAgICAgXG4gICAgICAgIC8vINCf0LDRgNCw0LzQtdGC0YDQuCDRgdC/0YDQsNC50YIt0LvQuNGB0YLQsFxuICAgICAgICBjb25zdCBGUkFNRVNfUEVSX1JPVyA9IDU7IC8vIDUg0LrQsNC00YDRltCyINCyINGA0Y/QtNC60YNcbiAgICAgICAgY29uc3QgVE9UQUxfUk9XUyA9IDI7IC8vIDIg0YDRj9C00LhcbiAgICAgICAgY29uc3QgU1BSSVRFX1NIRUVUX1dJRFRIID0gMTEwMDsgLy8g0KDQtdCw0LvRjNC90LAg0YjQuNGA0LjQvdCwINGB0L/RgNCw0LnRgi3Qu9C40YHRgtCwXG4gICAgICAgIGNvbnN0IFNQUklURV9TSEVFVF9IRUlHSFQgPSA0Njg7IC8vINCg0LXQsNC70YzQvdCwINCy0LjRgdC+0YLQsCDRgdC/0YDQsNC50YIt0LvQuNGB0YLQsFxuICAgICAgICBcbiAgICAgICAgLy8g0KDQvtC30LzRltGA0Lgg0L7QtNC90L7Qs9C+INC60LDQtNGA0YMg0LIg0YHQv9GA0LDQudGCLdC70LjRgdGC0ZZcbiAgICAgICAgY29uc3QgRlJBTUVfV0lEVEggPSBNYXRoLmZsb29yKFNQUklURV9TSEVFVF9XSURUSCAvIEZSQU1FU19QRVJfUk9XKTsgLy8gMjIwcHhcbiAgICAgICAgY29uc3QgRlJBTUVfSEVJR0hUID0gTWF0aC5mbG9vcihTUFJJVEVfU0hFRVRfSEVJR0hUIC8gVE9UQUxfUk9XUyk7IC8vIDIzNHB4XG4gICAgICAgIFxuICAgICAgICAvLyDQpNGW0LrRgdC+0LLQsNC90ZYg0YDQvtC30LzRltGA0Lgg0L7Qu9C10L3RjyDQvdCwIGNhbnZhc1xuICAgICAgICBjb25zdCBERUVSX1NDQUxFID0gMC41OyAvLyDQnNCw0YHRiNGC0LDQsSDQtNC70Y8g0LLRltC00L7QsdGA0LDQttC10L3QvdGPINC90LAgY2FudmFzXG4gICAgICAgIGNvbnN0IEJBU0VfREVFUl9XSURUSCA9IE1hdGguZmxvb3IoRlJBTUVfV0lEVEggKiBERUVSX1NDQUxFKTsgXG4gICAgICAgIGNvbnN0IEJBU0VfREVFUl9IRUlHSFQgPSBNYXRoLmZsb29yKEZSQU1FX0hFSUdIVCAqIERFRVJfU0NBTEUpO1xuICAgICAgICBcbiAgICAgICAgLy8g0JfQvNC10L3RiNGD0ZTQvNC+INGA0L7Qt9C80ZbRgNC4INC+0LvQtdC90ZbQsiDQvdCwIDE1JSDQtNC70Y8g0LzQvtCx0ZbQu9GM0L3QuNGFINC/0YDQuNGB0YLRgNC+0ZfQslxuICAgICAgICBsZXQgREVFUl9XSURUSCA9IEJBU0VfREVFUl9XSURUSDtcbiAgICAgICAgbGV0IERFRVJfSEVJR0hUID0gQkFTRV9ERUVSX0hFSUdIVDtcbiAgICAgICAgbGV0IGRlZXJIZWlnaHRPZmZzZXQgPSAwOyAvLyDQl9C80ZbRidC10L3QvdGPINC00LvRjyDQt9Cx0LXRgNC10LbQtdC90L3RjyDQv9C+0LfQuNGG0ZbRlyDQstGW0LTQvdC+0YHQvdC+INC90LjQttC90YzQvtCz0L4g0LrRgNCw0Y5cbiAgICAgICAgXG4gICAgICAgIGlmIChpc01vYmlsZSkge1xuICAgICAgICAgICAgREVFUl9XSURUSCA9IE1hdGguZmxvb3IoQkFTRV9ERUVSX1dJRFRIICogLjgpO1xuICAgICAgICAgICAgREVFUl9IRUlHSFQgPSBNYXRoLmZsb29yKEJBU0VfREVFUl9IRUlHSFQgKiAuOCk7XG4gICAgICAgICAgICAvLyDQoNC+0LfRgNCw0YXQvtCy0YPRlNC80L4g0LfQvNGW0YnQtdC90L3RjyDQtNC70Y8g0LfQsdC10YDQtdC20LXQvdC90Y8g0L/QvtC30LjRhtGW0Zcg0LLRltC00L3QvtGB0L3QviDQvdC40LbQvdGM0L7Qs9C+INC60YDQsNGOXG4gICAgICAgICAgICBkZWVySGVpZ2h0T2Zmc2V0ID0gQkFTRV9ERUVSX0hFSUdIVCAtIERFRVJfSEVJR0hUO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g0J/QvtC30LjRhtGW0Zcg0LXQu9C10LzQtdC90YLRltCyXG4gICAgICAgIGxldCB0cmVlWCwgdHJlZVk7XG4gICAgICAgIGlmIChpc01vYmlsZSkge1xuICAgICAgICAgICAgdHJlZVggPSAyMzU7XG4gICAgICAgICAgICB0cmVlWSA9IENBTlZBU19IRUlHSFQgLSAxNTIgLSBUUkVFX0hFSUdIVDsgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyDQlNC10YHQutGC0L7Qv9C90LAg0LLQtdGA0YHRltGPXG4gICAgICAgICAgICB0cmVlWCA9IENBTlZBU19XSURUSCAvIDIgLSAzMDA7IFxuICAgICAgICAgICAgdHJlZVkgPSBDQU5WQVNfSEVJR0hUIC8gMiAtIFRSRUVfSEVJR0hUIC8gMjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8g0J/QsNGA0LDQvNC10YLRgNC4INCw0L3RltC80LDRhtGW0ZcgKNGB0L/RltC70YzQvdGWINC00LvRjyDQstGB0ZbRhSDQvtC70LXQvdGW0LIpXG4gICAgICAgIGNvbnN0IEZSQU1FX0RFTEFZID0gMTI7IC8vINCX0LDRgtGA0LjQvNC60LAg0LzRltC2INC60LDQtNGA0LDQvNC4XG4gICAgICAgIGNvbnN0IFdBTEtJTkdfRlJBTUVTID0gNTsgLy8g0JrRltC70YzQutGW0YHRgtGMINC60LDQtNGA0ZbQsiDQtNC70Y8g0YXQvtC00YzQsdC4XG4gICAgICAgIGNvbnN0IEZSQU1FX1JFUEVBVCA9IDI7IC8vINCa0ZbQu9GM0LrRltGB0YLRjCDRgNCw0LfRltCyINC/0L7QutCw0LfRg9Cy0LDRgtC4INC60L7QttC10L0g0LrQsNC00YBcbiAgICAgICAgY29uc3QgSURMRV9NSU5fRFVSQVRJT04gPSA2MDsgLy8g0JzRltC90ZbQvNCw0LvRjNC90LAg0YLRgNC40LLQsNC70ZbRgdGC0Ywg0LfRg9C/0LjQvdC60LggKDEg0YHQtdC60YPQvdC00LAg0L/RgNC4IDYwZnBzKVxuICAgICAgICBjb25zdCBJRExFX01BWF9EVVJBVElPTiA9IDE4MDsgLy8g0JzQsNC60YHQuNC80LDQu9GM0L3QsCDRgtGA0LjQstCw0LvRltGB0YLRjCDQt9GD0L/QuNC90LrQuCAoMyDRgdC10LrRg9C90LTQuCDQv9GA0LggNjBmcHMpXG5cbiAgICAgICAgLy8g0KHRgtCw0L3QuCDQsNC90ZbQvNCw0YbRltGXINC+0LvQtdC90Y9cbiAgICAgICAgY29uc3QgREVFUl9TVEFURSA9IHtcbiAgICAgICAgICAgIFdBTEtJTkc6ICd3YWxraW5nJyxcbiAgICAgICAgICAgIElETEU6ICdpZGxlJyxcbiAgICAgICAgICAgIFBFVFRJTkc6ICdwZXR0aW5nJ1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgLy8g0J/QsNGA0LDQvNC10YLRgNC4INC00LvRjyDRgdGC0LDQvdGDIHBldHRpbmdcbiAgICAgICAgY29uc3QgUEVUVElOR19NSU5fRFVSQVRJT04gPSA2MDsgLy8gMSDRgdC10LrRg9C90LTQsCDQv9GA0LggNjBmcHNcbiAgICAgICAgY29uc3QgUEVUVElOR19NQVhfRFVSQVRJT04gPSAxODA7IC8vIDMg0YHQtdC60YPQvdC00Lgg0L/RgNC4IDYwZnBzXG4gICAgICAgIGNvbnN0IEhFQVJUX1NJWkVfTUlOID0gODtcbiAgICAgICAgY29uc3QgSEVBUlRfU0laRV9NQVggPSAxMjtcbiAgICAgICAgY29uc3QgSEVBUlRfUklTRV9ESVNUQU5DRSA9IDMwOyAvLyDQktGW0LTRgdGC0LDQvdGMINC/0ZbQtNC50L7QvNGDINGB0LXRgNC00LXRh9C60LBcbiAgICAgICAgY29uc3QgSEVBUlRfU1BBV05fSU5URVJWQUwgPSAyMDsgLy8g0IbQvdGC0LXRgNCy0LDQuyDQv9C+0Y/QstC4INGB0LXRgNC00LXRh9C+0LogKNC60LDQtNGA0LgpXG4gICAgICAgIFxuICAgICAgICBsZXQgZnJhbWVDb3VudGVyID0gMDsgLy8g0JPQu9C+0LHQsNC70YzQvdC40Lkg0LvRltGH0LjQu9GM0L3QuNC6INC60LDQtNGA0ZbQsiDQtNC70Y8g0YHQuNC90YXRgNC+0L3RltC30LDRhtGW0ZdcblxuICAgICAgICAvLyDQmtC70LDRgSDQtNC70Y8g0YHQtdGA0LTQtdGH0LrQsFxuICAgICAgICBjbGFzcyBIZWFydCB7XG4gICAgICAgICAgICBjb25zdHJ1Y3Rvcih4LCB5LCBzaXplLCBoZWFydEltYWdlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICAgICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XG4gICAgICAgICAgICAgICAgdGhpcy5vcGFjaXR5ID0gMTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjYWxlID0gMTtcbiAgICAgICAgICAgICAgICB0aGlzLnJpc2VTcGVlZCA9IDAuNTsgLy8g0KjQstC40LTQutGW0YHRgtGMINC/0ZbQtNC50L7QvNGDXG4gICAgICAgICAgICAgICAgdGhpcy5oZWFydEltYWdlID0gaGVhcnRJbWFnZTsgLy8g0JfQvtCx0YDQsNC20LXQvdC90Y8g0YHQtdGA0LTQtdGH0LrQsFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB1cGRhdGUoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy55IC09IHRoaXMucmlzZVNwZWVkO1xuICAgICAgICAgICAgICAgIHRoaXMub3BhY2l0eSAtPSAwLjAyO1xuICAgICAgICAgICAgICAgIHRoaXMuc2NhbGUgKz0gMC4wMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaXNWaXNpYmxlKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm9wYWNpdHkgPiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBkcmF3KGN0eCkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc1Zpc2libGUoKSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vINCf0LXRgNC10LLRltGA0LrQsCDQvdCw0Y/QstC90L7RgdGC0ZYg0YLQsCDQt9Cw0LLQsNC90YLQsNC20LXQvdC90Y8g0LfQvtCx0YDQsNC20LXQvdC90Y9cbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaGVhcnRJbWFnZSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5oZWFydEltYWdlLmNvbXBsZXRlKSByZXR1cm47XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaGVhcnRJbWFnZS5uYXR1cmFsV2lkdGggPT09IDAgfHwgdGhpcy5oZWFydEltYWdlLm5hdHVyYWxIZWlnaHQgPT09IDApIHJldHVybjtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjdHguc2F2ZSgpO1xuXG4gICAgICAgICAgICAgICAgY3R4Lmdsb2JhbEFscGhhID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgdGhpcy5vcGFjaXR5KSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8g0JzQsNC70Y7RlNC80L4g0LfQvtCx0YDQsNC20LXQvdC90Y8g0YHQtdGA0LTQtdGH0LrQsCDQtyDQvNCw0YHRiNGC0LDQsdGD0LLQsNC90L3Rj9C8XG4gICAgICAgICAgICAgICAgY29uc3QgZHJhd1NpemUgPSB0aGlzLnNpemUgKiB0aGlzLnNjYWxlO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRyYXdYID0gdGhpcy54IC0gZHJhd1NpemUgLyAyO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRyYXdZID0gdGhpcy55IC0gZHJhd1NpemUgLyAyO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vINCU0L7QtNCw0YLQutC+0LLQsCDQv9C10YDQtdCy0ZbRgNC60LAg0LTQu9GPINC60L7RgNC10LrRgtC90L7Qs9C+INC80LDQu9GO0LLQsNC90L3Rj1xuICAgICAgICAgICAgICAgIGlmIChkcmF3U2l6ZSA+IDAgJiYgdGhpcy5oZWFydEltYWdlLndpZHRoID4gMCAmJiB0aGlzLmhlYXJ0SW1hZ2UuaGVpZ2h0ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oZWFydEltYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgMCwgMCwgdGhpcy5oZWFydEltYWdlLndpZHRoLCB0aGlzLmhlYXJ0SW1hZ2UuaGVpZ2h0LCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGRyYXdYLCBkcmF3WSwgZHJhd1NpemUsIGRyYXdTaXplIFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjdHgucmVzdG9yZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8g0JrQu9Cw0YEg0LTQu9GPINC+0LvQtdC90Y9cbiAgICAgICAgY2xhc3MgRGVlciB7XG4gICAgICAgICAgICBjb25zdHJ1Y3RvcihzdGFydFgsIHN0YXJ0WSwgbWluWCwgbWF4WCwgc3BlZWQgPSAwLjUsIHpJbmRleCA9IDAsIGhlYXJ0SW1hZ2UgPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy54ID0gc3RhcnRYO1xuICAgICAgICAgICAgICAgIHRoaXMueSA9IHN0YXJ0WTtcbiAgICAgICAgICAgICAgICB0aGlzLm1pblggPSBtaW5YO1xuICAgICAgICAgICAgICAgIHRoaXMubWF4WCA9IG1heFg7XG4gICAgICAgICAgICAgICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xuICAgICAgICAgICAgICAgIHRoaXMuekluZGV4ID0gekluZGV4OyAvLyDQn9C+0YDRj9C00L7QuiDQvNCw0LvRjtCy0LDQvdC90Y8gXG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAtMTsgLy8gLTEgPSDQstC70ZbQstC+LCAxID0g0LLQv9GA0LDQstC+XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IERFRVJfU1RBVEUuV0FMS0lORztcbiAgICAgICAgICAgICAgICB0aGlzLmZyYW1lSW5kZXggPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuZnJhbWVSZXBlYXRDb3VudGVyID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLmlkbGVUaW1lciA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5pZGxlRHVyYXRpb24gPSAwO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vINCS0LvQsNGB0YLQuNCy0L7RgdGC0ZYg0LTQu9GPINGB0YLQsNC90YMgcGV0dGluZ1xuICAgICAgICAgICAgICAgIHRoaXMucGV0dGluZ1RpbWVyID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLnBldHRpbmdEdXJhdGlvbiA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5wcmV2aW91c1N0YXRlID0gbnVsbDsgLy8g0JfQsdC10YDRltCz0LDRlNC80L4g0L/QvtC/0LXRgNC10LTQvdGW0Lkg0YHRgtCw0L1cbiAgICAgICAgICAgICAgICB0aGlzLnNhdmVkWCA9IDA7IC8vINCX0LHQtdGA0LXQttC10L3RliDQutC+0L7RgNC00LjQvdCw0YLQuCDQv9GA0Lgg0L/QtdGA0LXRhdC+0LTRliDQsiBwZXR0aW5nXG4gICAgICAgICAgICAgICAgdGhpcy5zYXZlZFkgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuaGVhcnRzID0gW107IC8vINCc0LDRgdC40LIg0YHQtdGA0LTQtdGH0L7QulxuICAgICAgICAgICAgICAgIHRoaXMuaGVhcnRTcGF3bkNvdW50ZXIgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuaGVhcnRJbWFnZSA9IGhlYXJ0SW1hZ2U7IC8vINCX0L7QsdGA0LDQttC10L3QvdGPINGB0LXRgNC00LXRh9C60LBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0J/QtdGA0LXQstGW0YDQutCwINGH0Lgg0LrQu9GW0Log0L/QvtGC0YDQsNC/0LjQsiDQvdCwINC+0LvQtdC90Y9cbiAgICAgICAgICAgIGlzUG9pbnRJbnNpZGUoY2xpY2tYLCBjbGlja1ksIGRlZXJXaWR0aCwgZGVlckhlaWdodCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjbGlja1ggPj0gdGhpcy54ICYmIFxuICAgICAgICAgICAgICAgICAgICAgICBjbGlja1ggPD0gdGhpcy54ICsgZGVlcldpZHRoICYmIFxuICAgICAgICAgICAgICAgICAgICAgICBjbGlja1kgPj0gdGhpcy55ICYmIFxuICAgICAgICAgICAgICAgICAgICAgICBjbGlja1kgPD0gdGhpcy55ICsgZGVlckhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0J7QsdGA0L7QsdC60LAg0LrQu9GW0LrRgyDQv9C+INC+0LvQtdC90Y5cbiAgICAgICAgICAgIGhhbmRsZUNsaWNrKCkge1xuICAgICAgICAgICAgICAgIC8vINCf0LXRgNC10YXQvtC00LjQvNC+INCyINGB0YLQsNC9IHBldHRpbmcg0LDQsdC+INC/0L7QvdC+0LLQu9GO0ZTQvNC+INGC0LDQudC80LXRgFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlICE9PSBERUVSX1NUQVRFLlBFVFRJTkcpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g0JfQsdC10YDRltCz0LDRlNC80L4g0L/QvtC/0LXRgNC10LTQvdGW0Lkg0YHRgtCw0L0g0YLQsCDQutC+0L7RgNC00LjQvdCw0YLQuFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXZpb3VzU3RhdGUgPSB0aGlzLnN0YXRlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNhdmVkWCA9IHRoaXMueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zYXZlZFkgPSB0aGlzLnk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBERUVSX1NUQVRFLlBFVFRJTkc7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGV0dGluZ1RpbWVyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgLy8g0J7Rh9C40YnQsNGU0LzQviDRgdGC0LDRgNGWINGB0LXRgNC00LXRh9C60LBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oZWFydHMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oZWFydFNwYXduQ291bnRlciA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vINCf0L7QvdC+0LLQu9GO0ZTQvNC+INGC0LDQudC80LXRgCBwZXR0aW5nICgxLTMg0YHQtdC60YPQvdC00LgpINGC0LAg0YHQutC40LTQsNGU0LzQviDQv9C+0YLQvtGH0L3QuNC5INGC0LDQudC80LXRgFxuICAgICAgICAgICAgICAgIHRoaXMucGV0dGluZ0R1cmF0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKFBFVFRJTkdfTUFYX0RVUkFUSU9OIC0gUEVUVElOR19NSU5fRFVSQVRJT04gKyAxKSkgKyBQRVRUSU5HX01JTl9EVVJBVElPTjtcbiAgICAgICAgICAgICAgICB0aGlzLnBldHRpbmdUaW1lciA9IDA7IC8vINCh0LrQuNC00LDRlNC80L4g0YLQsNC50LzQtdGAINC/0YDQuCDQutC+0LbQvdC+0LzRgyDQutC70ZbQutGDXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCh0YLQstC+0YDQtdC90L3RjyDQvdC+0LLQvtCz0L4g0YHQtdGA0LTQtdGH0LrQsFxuICAgICAgICAgICAgc3Bhd25IZWFydCgpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaGVhcnRJbWFnZSkgcmV0dXJuOyAvLyDQr9C60YnQviDQt9C+0LHRgNCw0LbQtdC90L3RjyDQvdC1INC30LDQstCw0L3RgtCw0LbQtdC90LUsINC90LUg0YHRgtCy0L7RgNGO0ZTQvNC+INGB0LXRgNC00LXRh9C60L5cbiAgICAgICAgICAgICAgICBjb25zdCBzaXplID0gTWF0aC5yYW5kb20oKSAqIChIRUFSVF9TSVpFX01BWCAtIEhFQVJUX1NJWkVfTUlOKSArIEhFQVJUX1NJWkVfTUlOO1xuICAgICAgICAgICAgICAgIGNvbnN0IG9mZnNldFggPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiBERUVSX1dJRFRIOyAvLyDQktC40L/QsNC00LrQvtCy0LUg0LfQvNGW0YnQtdC90L3RjyDQv9C+IFhcbiAgICAgICAgICAgICAgICBjb25zdCBoZWFydFggPSB0aGlzLnggKyBERUVSX1dJRFRIIC8gMiArIG9mZnNldFg7XG4gICAgICAgICAgICAgICAgY29uc3QgaGVhcnRZID0gdGhpcy55IC0gMTA7IC8vINCi0YDQvtGF0Lgg0LLQuNGJ0LUg0L7Qu9C10L3Rj1xuICAgICAgICAgICAgICAgIHRoaXMuaGVhcnRzLnB1c2gobmV3IEhlYXJ0KGhlYXJ0WCwgaGVhcnRZLCBzaXplLCB0aGlzLmhlYXJ0SW1hZ2UpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZ2V0U3ByaXRlRnJhbWVJbmRleCgpIHtcbiAgICAgICAgICAgICAgICAvLyDQktC10YDRhdC90ZbQuSDRgNGP0LTQvtC6ICgwKSA9INGA0YPRhSDQstC70ZbQstC+LCDQvdC40LbQvdGW0Lkg0YDRj9C00L7QuiAoMSkgPSDRgNGD0YUg0LLQv9GA0LDQstC+XG4gICAgICAgICAgICAgICAgY29uc3Qgcm93ID0gdGhpcy5kaXJlY3Rpb24gPT09IC0xID8gMCA6IDE7XG4gICAgICAgICAgICAgICAgbGV0IGNvbCA9IDA7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gREVFUl9TVEFURS5XQUxLSU5HKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vINCa0LDQtNGA0Lgg0YXQvtC00YzQsdC4OiAwLCAxLCAyLCAzLCA0ICjQstGB0ZYgNSDQutCw0LTRgNGW0LIpXG4gICAgICAgICAgICAgICAgICAgIGNvbCA9IHRoaXMuZnJhbWVJbmRleCAlIFdBTEtJTkdfRlJBTUVTO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZSA9PT0gREVFUl9TVEFURS5QRVRUSU5HKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vINCSINGB0YLQsNC90ZYgcGV0dGluZyDQstC40LrQvtGA0LjRgdGC0L7QstGD0ZTQvNC+INC60LDQtNGAIDAgKGlkbGUg0LrQsNC00YApXG4gICAgICAgICAgICAgICAgICAgIGNvbCA9IDA7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g0KHRgtCw0L0g0LfRg9C/0LjQvdC60LggKElETEUpIC0g0LLQuNC60L7RgNC40YHRgtC+0LLRg9GU0LzQviDQutCw0LTRgCAwXG4gICAgICAgICAgICAgICAgICAgIGNvbCA9IDA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgcm93LCBjb2wgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdXBkYXRlKHNob3VsZFVwZGF0ZUZyYW1lKSB7XG4gICAgICAgICAgICAgICAgLy8g0J7QvdC+0LLQu9GO0ZTQvNC+INCw0L3RltC80LDRhtGW0Y4g0LrQsNC00YDRltCyINC3INC/0L7QstGC0L7RgNC10L3QvdGP0Lwg0LTQu9GPINC/0LvQsNCy0L3QvtGB0YLRllxuICAgICAgICAgICAgICAgIGlmIChzaG91bGRVcGRhdGVGcmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gREVFUl9TVEFURS5XQUxLSU5HKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZyYW1lUmVwZWF0Q291bnRlcisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g0J/QvtC60LDQt9GD0ZTQvNC+INC60L7QttC10L0g0LrQsNC00YAg0LrRltC70YzQutCwINGA0LDQt9GW0LIg0LTQu9GPINC/0LvQsNCy0L3RltGI0L7RlyDQsNC90ZbQvNCw0YbRltGXXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5mcmFtZVJlcGVhdENvdW50ZXIgPj0gRlJBTUVfUkVQRUFUKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mcmFtZVJlcGVhdENvdW50ZXIgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vINCf0L7RgdC70ZbQtNC+0LLQvdC+INC/0YDQvtGF0L7QtNC40LzQviDRh9C10YDQtdC3INCy0YHRliDQutCw0LTRgNC4OiAwLCAxLCAyLCAzLCA0LCAwLCAxLCAyLCAzLCA0Li4uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mcmFtZUluZGV4ID0gKHRoaXMuZnJhbWVJbmRleCArIDEpICUgV0FMS0lOR19GUkFNRVM7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyDQm9C+0LPRltC60LAg0YHRgtCw0L3RltCyINGC0LAg0YDRg9GF0YNcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gREVFUl9TVEFURS5QRVRUSU5HKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vINCSINGB0YLQsNC90ZYgcGV0dGluZyDQvtC70LXQvdGMINC90LUg0YDRg9GF0LDRlNGC0YzRgdGPXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGV0dGluZ1RpbWVyKys7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyDQodGC0LLQvtGA0Y7RlNC80L4g0YHQtdGA0LTQtdGH0LrQsCDQtyDRltC90YLQtdGA0LLQsNC70L7QvFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhlYXJ0U3Bhd25Db3VudGVyKys7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmhlYXJ0U3Bhd25Db3VudGVyID49IEhFQVJUX1NQQVdOX0lOVEVSVkFMKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhlYXJ0U3Bhd25Db3VudGVyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3Bhd25IZWFydCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyDQntC90L7QstC70Y7RlNC80L4g0YHQtdGA0LTQtdGH0LrQsFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhlYXJ0cyA9IHRoaXMuaGVhcnRzLmZpbHRlcihoZWFydCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFydC51cGRhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBoZWFydC5pc1Zpc2libGUoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNGP0ZTQvNC+INGH0Lgg0LfQsNC60ZbQvdGH0LjQstGB0Y8g0YHRgtCw0L0gcGV0dGluZ1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wZXR0aW5nVGltZXIgPj0gdGhpcy5wZXR0aW5nRHVyYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vINCf0L7QstC10YDRgtCw0ZTQvNC+0YHRjyDQtNC+INC30LHQtdGA0LXQttC10L3QuNGFINC60L7QvtGA0LTQuNC90LDRglxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy54ID0gdGhpcy5zYXZlZFg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnkgPSB0aGlzLnNhdmVkWTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g0J/QvtCy0LXRgNGC0LDRlNC80L7RgdGPINC00L4g0L/QvtC/0LXRgNC10LTQvdGM0L7Qs9C+INGB0YLQsNC90YNcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnByZXZpb3VzU3RhdGUgPT09IERFRVJfU1RBVEUuV0FMS0lORykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBERUVSX1NUQVRFLldBTEtJTkc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g0J/RgNC+0LTQvtCy0LbRg9GU0LzQviDRgNGD0YUg0Lcg0LfQsdC10YDQtdC20LXQvdC40YUg0LrQvtC+0YDQtNC40L3QsNGCXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldmlvdXNTdGF0ZSA9PT0gREVFUl9TVEFURS5JRExFKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IERFRVJfU1RBVEUuSURMRTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDQn9C+0LLQtdGA0YLQsNGU0LzQvtGB0Y8g0LTQviDRgdGC0LDQvdGDIGlkbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlkbGVUaW1lciA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pZGxlRHVyYXRpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoSURMRV9NQVhfRFVSQVRJT04gLSBJRExFX01JTl9EVVJBVElPTiArIDEpKSArIElETEVfTUlOX0RVUkFUSU9OO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXZpb3VzU3RhdGUgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wZXR0aW5nVGltZXIgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wZXR0aW5nRHVyYXRpb24gPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oZWFydHMgPSBbXTsgLy8g0J7Rh9C40YnQsNGU0LzQviDRgdC10YDQtNC10YfQutCwXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhlYXJ0U3Bhd25Db3VudGVyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZSA9PT0gREVFUl9TVEFURS5XQUxLSU5HKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vINCe0L3QvtCy0LvRjtGU0LzQviDQv9C+0LfQuNGG0ZbRjiDQvtC70LXQvdGPXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueCArPSB0aGlzLnNwZWVkICogdGhpcy5kaXJlY3Rpb247XG5cbiAgICAgICAgICAgICAgICAgICAgLy8g0J/QtdGA0LXQstGW0YDRj9GU0LzQviDQvNC10LbRliDRgtCwINC/0LXRgNC10YXQvtC00LjQvNC+INC00L4g0LfRg9C/0LjQvdC60LhcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMueCA+PSB0aGlzLm1heFggJiYgdGhpcy5kaXJlY3Rpb24gPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vINCU0L7RgdGP0LPQu9C4INC/0YDQsNCy0L7Qs9C+INC60YDQsNGOIC0g0LfRg9C/0LjQvdGP0ZTQvNC+0YHRj1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy54ID0gdGhpcy5tYXhYO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IERFRVJfU1RBVEUuSURMRTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaWRsZVRpbWVyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vINCT0LXQvdC10YDRg9GU0LzQviDQstC40L/QsNC00LrQvtCy0YMg0YLRgNC40LLQsNC70ZbRgdGC0Ywg0LfRg9C/0LjQvdC60Lgg0LLRltC0IDEg0LTQviAzINGB0LXQutGD0L3QtFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pZGxlRHVyYXRpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoSURMRV9NQVhfRFVSQVRJT04gLSBJRExFX01JTl9EVVJBVElPTiArIDEpKSArIElETEVfTUlOX0RVUkFUSU9OO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMueCA8PSB0aGlzLm1pblggJiYgdGhpcy5kaXJlY3Rpb24gPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDQlNC+0YHRj9Cz0LvQuCDQu9GW0LLQvtCz0L4g0LrRgNCw0Y4gLSDQt9GD0L/QuNC90Y/RlNC80L7RgdGPXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnggPSB0aGlzLm1pblg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0gREVFUl9TVEFURS5JRExFO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pZGxlVGltZXIgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g0JPQtdC90LXRgNGD0ZTQvNC+INCy0LjQv9Cw0LTQutC+0LLRgyDRgtGA0LjQstCw0LvRltGB0YLRjCDQt9GD0L/QuNC90LrQuCDQstGW0LQgMSDQtNC+IDMg0YHQtdC60YPQvdC0XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlkbGVEdXJhdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChJRExFX01BWF9EVVJBVElPTiAtIElETEVfTUlOX0RVUkFUSU9OICsgMSkpICsgSURMRV9NSU5fRFVSQVRJT047XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT09IERFRVJfU1RBVEUuSURMRSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlkbGVUaW1lcisrO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8g0J/RltGB0LvRjyDQt9Cw0LLQtdGA0YjQtdC90L3RjyDQt9GD0L/QuNC90LrQuCDQt9C80ZbQvdGO0ZTQvNC+INC90LDQv9GA0Y/QvNC+0Log0YLQsCDQv9C10YDQtdGF0L7QtNC40LzQviDQtNC+INGF0L7QtNGM0LHQuFxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pZGxlVGltZXIgPj0gdGhpcy5pZGxlRHVyYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uICo9IC0xOyAvLyDQl9C80ZbQvdGO0ZTQvNC+INC90LDQv9GA0Y/QvNC+0LogKNCy0LvRltCy0L4g4oaUINCy0L/RgNCw0LLQvilcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBERUVSX1NUQVRFLldBTEtJTkc7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZyYW1lSW5kZXggPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mcmFtZVJlcGVhdENvdW50ZXIgPSAwOyAvLyDQodC60LjQtNCw0ZTQvNC+INC70ZbRh9C40LvRjNC90LjQuiDQv9C+0LLRgtC+0YDQtdC90YxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZHJhdyhjdHgsIHNwcml0ZUltYWdlLCBmcmFtZVdpZHRoLCBmcmFtZUhlaWdodCwgZGVlcldpZHRoLCBkZWVySGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFzcHJpdGVJbWFnZS5jb21wbGV0ZSB8fCBmcmFtZVdpZHRoIDw9IDAgfHwgZnJhbWVIZWlnaHQgPD0gMCkgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgeyByb3csIGNvbCB9ID0gdGhpcy5nZXRTcHJpdGVGcmFtZUluZGV4KCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8g0JrQvtC+0YDQtNC40L3QsNGC0Lgg0LrQsNC00YDRgyDQsiDRgdC/0YDQsNC50YIt0LvQuNGB0YLRliAo0LLQuNC60L7RgNC40YHRgtC+0LLRg9GU0LzQviBNYXRoLmZsb29yINC00LvRjyDRg9C90LjQutC90LXQvdC90Y8gc3ViLXBpeGVsINGA0LXQvdC00LXRgNC40L3Qs9GDINC90LAgaU9TKVxuICAgICAgICAgICAgICAgIGNvbnN0IHNvdXJjZVggPSBNYXRoLmZsb29yKGNvbCAqIGZyYW1lV2lkdGgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNvdXJjZVkgPSBNYXRoLmZsb29yKHJvdyAqIGZyYW1lSGVpZ2h0KTtcbiAgICAgICAgICAgICAgICBjb25zdCBzb3VyY2VXaWR0aCA9IE1hdGguZmxvb3IoZnJhbWVXaWR0aCk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc291cmNlSGVpZ2h0ID0gTWF0aC5mbG9vcihmcmFtZUhlaWdodCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8g0JrQvtC+0YDQtNC40L3QsNGC0Lgg0L3QsCBjYW52YXMgKNGC0LDQutC+0LYg0LLQuNC60L7RgNC40YHRgtC+0LLRg9GU0LzQviBNYXRoLmZsb29yKVxuICAgICAgICAgICAgICAgIGNvbnN0IGRlc3RYID0gTWF0aC5mbG9vcih0aGlzLngpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlc3RZID0gTWF0aC5mbG9vcih0aGlzLnkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlc3RXaWR0aCA9IE1hdGguZmxvb3IoZGVlcldpZHRoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBkZXN0SGVpZ2h0ID0gTWF0aC5mbG9vcihkZWVySGVpZ2h0KTtcblxuICAgICAgICAgICAgICAgIC8vINCS0LjRgNGW0LfQsNGU0LzQviDQutCw0LTRgCDQt9GWINGB0L/RgNCw0LnRgi3Qu9C40YHRgtCwINGC0LAg0LzQsNC70Y7RlNC80L4g0L3QsCBjYW52YXNcbiAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgICAgICAgICBzcHJpdGVJbWFnZSxcbiAgICAgICAgICAgICAgICAgICAgc291cmNlWCwgc291cmNlWSwgc291cmNlV2lkdGgsIHNvdXJjZUhlaWdodCwgLy8g0JTQttC10YDQtdC70L4gKNGB0L/RgNCw0LnRgi3Qu9C40YHRgilcbiAgICAgICAgICAgICAgICAgICAgZGVzdFgsIGRlc3RZLCBkZXN0V2lkdGgsIGRlc3RIZWlnaHQgLy8g0J/RgNC40LfQvdCw0YfQtdC90L3RjyAoY2FudmFzKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8g0JzQsNC70Y7RlNC80L4g0YHQtdGA0LTQtdGH0LrQsCDQvdCw0LQg0L7Qu9C10L3QtdC8XG4gICAgICAgICAgICAgICAgdGhpcy5oZWFydHMuZm9yRWFjaChoZWFydCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGhlYXJ0LmRyYXcoY3R4KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8g0JfQsNCy0LDQvdGC0LDQttC10L3QvdGPINC30L7QsdGA0LDQttC10L3RjCAo0YHRgtCy0L7RgNGO0ZTQvNC+INC/0LXRgNC10LQg0YHRgtCy0L7RgNC10L3QvdGP0Lwg0L7Qu9C10L3RltCyKVxuICAgICAgICBjb25zdCBpbWFnZXMgPSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBuZXcgSW1hZ2UoKSxcbiAgICAgICAgICAgIHRyZWU6IG5ldyBJbWFnZSgpLFxuICAgICAgICAgICAgZGVlclNwcml0ZTogbmV3IEltYWdlKCksIC8vINCh0L/RgNCw0LnRgi3Qu9C40YHRgiDQt9Cw0LzRltGB0YLRjCDQvtC00L3QvtCz0L4g0LfQvtCx0YDQsNC20LXQvdC90Y9cbiAgICAgICAgICAgIGhlYXJ0OiBuZXcgSW1hZ2UoKSAvLyDQl9C+0LHRgNCw0LbQtdC90L3RjyDRgdC10YDQtNC10YfQutCwXG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICAvLyDQnNCw0YHQuNCyINC+0LvQtdC90ZbQsiBcbiAgICAgICAgY29uc3QgZGVlcnMgPSBbXTtcbiAgICAgICAgXG4gICAgICAgIC8vINCa0L7QvdGE0ZbQs9GD0YDQsNGG0ZbRjyDQtNC70Y8g0YHRgtCy0L7RgNC10L3QvdGPINC+0LvQtdC90ZbQslxuICAgICAgICBjb25zdCBERUVSX0NPVU5UID0gMzsgLy8g0JrRltC70YzQutGW0YHRgtGMINC+0LvQtdC90ZbQslxuICAgICAgICBcbiAgICAgICAgLy8g0KDQvtC30YDQsNGF0L7QstGD0ZTQvNC+INC60L7QtdGE0ZbRhtGW0ZTQvdGCINC80LDRgdGI0YLQsNCx0YPQstCw0L3QvdGPINC00LvRjyDQv9C+0LfQuNGG0ZbQuSDQvtC70LXQvdGW0LJcbiAgICAgICAgY29uc3Qgc2NhbGVYID0gQ0FOVkFTX1dJRFRIIC8gMTM2NjtcbiAgICAgICAgY29uc3Qgc2NhbGVZID0gQ0FOVkFTX0hFSUdIVCAvIDUwMDtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGRlZXJDb25maWdzID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXJ0WDogQ0FOVkFTX1dJRFRIIC8gMiArIDUwICogc2NhbGVYLFxuICAgICAgICAgICAgICAgIHN0YXJ0WTogdHJlZVkgKyBUUkVFX0hFSUdIVCAtIDIwICsgZGVlckhlaWdodE9mZnNldCwgLy8g0J/RltC0INGP0LvQuNC90LrQvtGOICh0cmVlWSArINCy0LjRgdC+0YLQsCDRj9C70LjQvdC60LggLSDQstGW0LTRgdGC0YPQvylcbiAgICAgICAgICAgICAgICBtaW5YOiBDQU5WQVNfV0lEVEggLyAyIC0gMjAwICogc2NhbGVYLFxuICAgICAgICAgICAgICAgIG1heFg6IENBTlZBU19XSURUSCAvIDIgKyAzMDAgKiBzY2FsZVgsXG4gICAgICAgICAgICAgICAgc3BlZWQ6IDAuNSxcbiAgICAgICAgICAgICAgICB6SW5kZXg6IDRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhcnRYOiBDQU5WQVNfV0lEVEggLyAyIC0gMTAwICogc2NhbGVYLFxuICAgICAgICAgICAgICAgIHN0YXJ0WTogQ0FOVkFTX0hFSUdIVCAvIDIgLSBCQVNFX0RFRVJfSEVJR0hUIC8gMiArIDUwICogc2NhbGVZICsgZGVlckhlaWdodE9mZnNldCxcbiAgICAgICAgICAgICAgICBtaW5YOiBDQU5WQVNfV0lEVEggLyAyIC0gMTUwICogc2NhbGVYLFxuICAgICAgICAgICAgICAgIG1heFg6IENBTlZBU19XSURUSCAvIDIgKyAxNTAgKiBzY2FsZVgsXG4gICAgICAgICAgICAgICAgc3BlZWQ6IDAuMyxcbiAgICAgICAgICAgICAgICB6SW5kZXg6IDNcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhcnRYOiBDQU5WQVNfV0lEVEggLyAyIC0gMTAwICogc2NhbGVYLFxuICAgICAgICAgICAgICAgIHN0YXJ0WTogQ0FOVkFTX0hFSUdIVCAvIDIgLSBCQVNFX0RFRVJfSEVJR0hUIC8gMiAtIDUwICogc2NhbGVZICsgZGVlckhlaWdodE9mZnNldCxcbiAgICAgICAgICAgICAgICBtaW5YOiBDQU5WQVNfV0lEVEggLyAyIC0gMjUwICogc2NhbGVYLFxuICAgICAgICAgICAgICAgIG1heFg6IENBTlZBU19XSURUSCAvIDIgKyAyNTAgKiBzY2FsZVgsXG4gICAgICAgICAgICAgICAgc3BlZWQ6IDAuNCxcbiAgICAgICAgICAgICAgICB6SW5kZXg6IDEgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgIFxuICAgICAgICBdO1xuXG4gICAgICAgIC8vINCh0YLQstC+0YDRjtGU0LzQviDQvtC70LXQvdGW0LJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBERUVSX0NPVU5UICYmIGkgPCBkZWVyQ29uZmlncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY29uZmlnID0gZGVlckNvbmZpZ3NbaV07XG4gICAgICAgICAgICBkZWVycy5wdXNoKG5ldyBEZWVyKFxuICAgICAgICAgICAgICAgIGNvbmZpZy5zdGFydFgsXG4gICAgICAgICAgICAgICAgY29uZmlnLnN0YXJ0WSxcbiAgICAgICAgICAgICAgICBjb25maWcubWluWCxcbiAgICAgICAgICAgICAgICBjb25maWcubWF4WCxcbiAgICAgICAgICAgICAgICBjb25maWcuc3BlZWQsXG4gICAgICAgICAgICAgICAgY29uZmlnLnpJbmRleCB8fCAwLCAvLyDQktC40LrQvtGA0LjRgdGC0L7QstGD0ZTQvNC+IHpJbmRleCDQtyDQutC+0L3RhNGW0LPRgyDQsNCx0L4gMCDQt9CwINC30LDQvNC+0LLRh9GD0LLQsNC90L3Rj9C8XG4gICAgICAgICAgICAgICAgaW1hZ2VzLmhlYXJ0IC8vINCf0LXRgNC10LTQsNGU0LzQviDQt9C+0LHRgNCw0LbQtdC90L3RjyDRgdC10YDQtNC10YfQutCwXG4gICAgICAgICAgICApKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpbWFnZXNMb2FkZWQgPSAwO1xuICAgICAgICBjb25zdCB0b3RhbEltYWdlcyA9IDQ7XG5cbiAgICAgICAgZnVuY3Rpb24gb25JbWFnZUxvYWQoKSB7XG4gICAgICAgICAgICBpbWFnZXNMb2FkZWQrKztcbiAgICAgICAgICAgIGlmIChpbWFnZXNMb2FkZWQgPT09IHRvdGFsSW1hZ2VzKSB7XG4gICAgICAgICAgICAgICAgLy8g0J7QvdC+0LLQu9GO0ZTQvNC+INCz0LvQvtCx0LDQu9GM0L3RliDQv9C+0YHQuNC70LDQvdC90Y8g0L3QsCDQvtC70LXQvdGW0LIg0L/RltGB0LvRjyDRl9GFINGB0YLQstC+0YDQtdC90L3RjyDRgtCwINC30LDQstCw0L3RgtCw0LbQtdC90L3RjyDQt9C+0LHRgNCw0LbQtdC90YxcbiAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0ZURlZXJzID0gZGVlcnM7XG4gICAgICAgICAgICAgICAgcGFydGljaXBhdGVEZWVyV2lkdGggPSBERUVSX1dJRFRIO1xuICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlRGVlckhlaWdodCA9IERFRVJfSEVJR0hUO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vINCf0LXRgNC10LLRltGA0Y/RlNC80L4sINGH0Lgg0YHQv9GA0LDQudGCLdC70LjRgdGCINC30LDQstCw0L3RgtCw0LbQuNCy0YHRjyDQutC+0YDQtdC60YLQvdC+XG4gICAgICAgICAgICAgICAgaWYgKGltYWdlcy5kZWVyU3ByaXRlLmNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEZWVyIHNwcml0ZSBsb2FkZWQ6Jywge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGltYWdlcy5kZWVyU3ByaXRlLndpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBpbWFnZXMuZGVlclNwcml0ZS5oZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgICAgICBmcmFtZVdpZHRoOiBGUkFNRV9XSURUSCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lSGVpZ2h0OiBGUkFNRV9IRUlHSFQsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWVyV2lkdGg6IERFRVJfV0lEVEgsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWVySGVpZ2h0OiBERUVSX0hFSUdIVFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZHJhd0NhbnZhcygpO1xuICAgICAgICAgICAgICAgIHN0YXJ0QW5pbWF0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpbWFnZXMuYmFja2dyb3VuZC5vbmxvYWQgPSBvbkltYWdlTG9hZDtcbiAgICAgICAgaW1hZ2VzLnRyZWUub25sb2FkID0gb25JbWFnZUxvYWQ7XG4gICAgICAgIGltYWdlcy5kZWVyU3ByaXRlLm9ubG9hZCA9IG9uSW1hZ2VMb2FkO1xuICAgICAgICBpbWFnZXMuaGVhcnQub25sb2FkID0gb25JbWFnZUxvYWQ7XG5cbiAgICAgICAgaW1hZ2VzLmJhY2tncm91bmQuc3JjID0gaXNNb2JpbGUgPyAnaHR0cHM6Ly9mYXYtcHJvbS5jb20vaHRtbC9nbG9iYWwtbnktMjAyNi1oci9pbWcvcGFydGljaXBhdGUvY2FudmFzLWJnLXRhYi5wbmcnIDogJ2h0dHBzOi8vZmF2LXByb20uY29tL2h0bWwvZ2xvYmFsLW55LTIwMjYtaHIvaW1nL3BhcnRpY2lwYXRlL2NhbnZhcy1iZy5wbmcnO1xuICAgICAgICBpbWFnZXMudHJlZS5zcmMgPSAnaHR0cHM6Ly9mYXYtcHJvbS5jb20vaHRtbC9nbG9iYWwtbnktMjAyNi1oci9pbWcvcGFydGljaXBhdGUvdHJlZS5wbmcnO1xuICAgICAgICBpbWFnZXMuZGVlclNwcml0ZS5zcmMgPSAnaHR0cHM6Ly9mYXYtcHJvbS5jb20vaHRtbC9nbG9iYWwtbnktMjAyNi1oci9pbWcvcGFydGljaXBhdGUvZGVlci1zcHJpdGUucG5nJztcbiAgICAgICAgaW1hZ2VzLmhlYXJ0LnNyYyA9ICdodHRwczovL2Zhdi1wcm9tLmNvbS9odG1sL2dsb2JhbC1ueS0yMDI2LWhyL2ltZy9wYXJ0aWNpcGF0ZS9kZWVyLWhlYXJ0LnBuZyc7XG4gICAgICAgIFxuICAgICAgICAvLyDQlNC+0LTQsNGU0LzQviDQvtCx0YDQvtCx0L3QuNC60Lgg0L/QvtC00ZbQuSDRgtGW0LvRjNC60Lgg0L7QtNC40L0g0YDQsNC3XG4gICAgICAgIGlmICghY2FudmFzQ2xpY2tIYW5kbGVyc0F0dGFjaGVkKSB7XG4gICAgICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVQYXJ0aWNpcGF0ZUNhbnZhc0NsaWNrKTtcbiAgICAgICAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgaGFuZGxlUGFydGljaXBhdGVDYW52YXNUb3VjaFN0YXJ0LCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gICAgICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBoYW5kbGVQYXJ0aWNpcGF0ZUNhbnZhc1RvdWNoRW5kLCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gICAgICAgICAgICBjYW52YXNDbGlja0hhbmRsZXJzQXR0YWNoZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZHJhd0NhbnZhcygpIHtcbiAgICAgICAgICAgIC8vINCe0YfQuNGJ0LXQvdC90Y8gY2FudmFzXG4gICAgICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIENBTlZBU19XSURUSCwgQ0FOVkFTX0hFSUdIVCk7XG5cbiAgICAgICAgICAgIC8vINCc0LDQu9GO0ZTQvNC+INGE0L7QvVxuICAgICAgICAgICAgaWYgKGltYWdlcy5iYWNrZ3JvdW5kLmNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShpbWFnZXMuYmFja2dyb3VuZCwgMCwgMCwgQ0FOVkFTX1dJRFRILCBDQU5WQVNfSEVJR0hUKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gekluZGV4INC00LvRjyDRj9C70LjQvdC60LggKNC80ZbQtiDQvtC70LXQvdGP0LzQuClcbiAgICAgICAgICAgIGNvbnN0IFRSRUVfWl9JTkRFWCA9IDI7IC8vINCv0LvQuNC90LrQsCDQvNCw0LvRjtGU0YLRjNGB0Y8g0LzRltC2INC+0LvQtdC90Y/QvNC4INC3IHpJbmRleCAxINGC0LAgMlxuXG4gICAgICAgICAgICAvLyDQodGC0LLQvtGA0Y7RlNC80L4g0LzQsNGB0LjQsiDQstGB0ZbRhSDQtdC70LXQvNC10L3RgtGW0LIg0LTQu9GPINC80LDQu9GO0LLQsNC90L3RjyAo0L7Qu9C10L3RliArINGP0LvQuNC90LrQsClcbiAgICAgICAgICAgIGNvbnN0IGRyYXdhYmxlRWxlbWVudHMgPSBbXTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0JTQvtC00LDRlNC80L4g0L7Qu9C10L3RltCyXG4gICAgICAgICAgICBkZWVycy5mb3JFYWNoKGRlZXIgPT4ge1xuICAgICAgICAgICAgICAgIGRyYXdhYmxlRWxlbWVudHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdkZWVyJyxcbiAgICAgICAgICAgICAgICAgICAgekluZGV4OiBkZWVyLnpJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgZHJhdzogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGltYWdlcy5kZWVyU3ByaXRlLmNvbXBsZXRlICYmIEZSQU1FX1dJRFRIID4gMCAmJiBGUkFNRV9IRUlHSFQgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVlci5kcmF3KGN0eCwgaW1hZ2VzLmRlZXJTcHJpdGUsIEZSQU1FX1dJRFRILCBGUkFNRV9IRUlHSFQsIERFRVJfV0lEVEgsIERFRVJfSEVJR0hUKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCU0L7QtNCw0ZTQvNC+INGP0LvQuNC90LrRg1xuICAgICAgICAgICAgZHJhd2FibGVFbGVtZW50cy5wdXNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiAndHJlZScsXG4gICAgICAgICAgICAgICAgekluZGV4OiBUUkVFX1pfSU5ERVgsXG4gICAgICAgICAgICAgICAgZHJhdzogKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGltYWdlcy50cmVlLmNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShpbWFnZXMudHJlZSwgdHJlZVgsIHRyZWVZLCBUUkVFX1dJRFRILCBUUkVFX0hFSUdIVCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vINCh0L7RgNGC0YPRlNC80L4g0LLRgdGWINC10LvQtdC80LXQvdGC0Lgg0LfQsCB6SW5kZXggKNC80LXQvdGI0LUgPSDQvNCw0LvRjtGU0YLRjNGB0Y8g0YDQsNC90ZbRiNC1LCDQsdGW0LvRjNGI0LUgPSDQvNCw0LvRjtGU0YLRjNGB0Y8g0L/RltC30L3RltGI0LUpXG4gICAgICAgICAgICBkcmF3YWJsZUVsZW1lbnRzLnNvcnQoKGEsIGIpID0+IGEuekluZGV4IC0gYi56SW5kZXgpO1xuXG4gICAgICAgICAgICAvLyDQnNCw0LvRjtGU0LzQviDQstGB0ZYg0LXQu9C10LzQtdC90YLQuCDQsiDQv9GA0LDQstC40LvRjNC90L7QvNGDINC/0L7RgNGP0LTQutGDXG4gICAgICAgICAgICBkcmF3YWJsZUVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5kcmF3KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGFuaW1hdGUoKSB7XG4gICAgICAgICAgICBmcmFtZUNvdW50ZXIrKztcblxuICAgICAgICAgICAgLy8g0J/QtdGA0LXQstGW0YDRj9GU0LzQviwg0YfQuCDQv9C+0YLRgNGW0LHQvdC+INC+0L3QvtCy0LvRjtCy0LDRgtC4INC60LDQtNGA0Lgg0LDQvdGW0LzQsNGG0ZbRl1xuICAgICAgICAgICAgY29uc3Qgc2hvdWxkVXBkYXRlRnJhbWUgPSBmcmFtZUNvdW50ZXIgPj0gRlJBTUVfREVMQVk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCe0L3QvtCy0LvRjtGU0LzQviDQs9C70L7QsdCw0LvRjNC90LjQuSDQu9GW0YfQuNC70YzQvdC40Log0LrQsNC00YDRltCyXG4gICAgICAgICAgICBpZiAoc2hvdWxkVXBkYXRlRnJhbWUpIHtcbiAgICAgICAgICAgICAgICBmcmFtZUNvdW50ZXIgPSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDQntC90L7QstC70Y7RlNC80L4g0LLRgdGW0YUg0L7Qu9C10L3RltCyXG4gICAgICAgICAgICBkZWVycy5mb3JFYWNoKGRlZXIgPT4ge1xuICAgICAgICAgICAgICAgIGRlZXIudXBkYXRlKHNob3VsZFVwZGF0ZUZyYW1lKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyDQn9C10YDQtdC80LDQu9GM0L7QstGD0ZTQvNC+IGNhbnZhc1xuICAgICAgICAgICAgZHJhd0NhbnZhcygpO1xuXG4gICAgICAgICAgICBwYXJ0aWNpcGF0ZUFuaW1hdGlvbklkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gc3RhcnRBbmltYXRpb24oKSB7XG4gICAgICAgICAgICBpZiAocGFydGljaXBhdGVBbmltYXRpb25JZCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHBhcnRpY2lwYXRlQW5pbWF0aW9uSWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYW5pbWF0ZSgpO1xuICAgICAgICB9XG5cblxuICAgICAgICAvLyDQntCx0YDQvtCx0LrQsCDQt9C80ZbQvdC4INGA0L7Qt9C80ZbRgNGDINCy0ZbQutC90LAg0LTQu9GPINCw0LTQsNC/0YLQuNCy0L3QvtGB0YLRllxuICAgICAgICBsZXQgcmVzaXplVGltZW91dDtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChyZXNpemVUaW1lb3V0KTtcbiAgICAgICAgICAgIHJlc2l6ZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdJc01vYmlsZSA9IHdpbmRvdy5pbm5lcldpZHRoIDw9IDEwNTA7XG4gICAgICAgICAgICAgICAgLy8g0J/QtdGA0LXQt9Cw0L/Rg9GB0LrQsNGU0LzQviDRltC90ZbRhtGW0LDQu9GW0LfQsNGG0ZbRjiDRgtGW0LvRjNC60Lgg0Y/QutGJ0L4g0LfQvNGW0L3QuNCy0YHRjyDRgNC10LbQuNC8IChtb2JpbGUvZGVza3RvcClcbiAgICAgICAgICAgICAgICBpZiAobmV3SXNNb2JpbGUgIT09IGlzTW9iaWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vINCf0LXRgNC10LfQsNC/0YPRgdC60LDRlNC80L4g0ZbQvdGW0YbRltCw0LvRltC30LDRhtGW0Y4gKNCw0L3RltC80LDRhtGW0Y8g0LHRg9C00LUg0LfRg9C/0LjQvdC10L3QsCDQstGB0LXRgNC10LTQuNC90ZYgaW5pdFBhcnRpY2lwYXRlQ2FudmFzKVxuICAgICAgICAgICAgICAgICAgICBpbml0UGFydGljaXBhdGVDYW52YXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAyNTApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwYXJ0aWNpcGF0ZSgpIHtcbiAgICAgICAgaWYgKCF1c2VySWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXJhbXMgPSB7IHVzZXJpZDogdXNlcklkIH07XG4gICAgICAgIGZldGNoKGFwaVVSTCArICcvdXNlci8nLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXJhbXMpXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGxvYWRlckJ0biA9IHRydWU7XG4gICAgICAgICAgICAgICAgdG9nZ2xlQ2xhc3NlcyhwYXJ0aWNpcGF0ZUJ0bnMsIFwibG9hZGVyXCIpO1xuICAgICAgICAgICAgICAgIHRvZ2dsZVRyYW5zbGF0ZXMocGFydGljaXBhdGVCdG5zLCBcImxvYWRlclwiKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlVHJhbnNsYXRlcyhwYXJ0aWNpcGF0ZUJ0bnMsIFwibG9hZGVyX3JlYWR5XCIpO1xuICAgICAgICAgICAgICAgICAgICB0b2dnbGVDbGFzc2VzKHBhcnRpY2lwYXRlQnRucywgXCJkb25lXCIpO1xuICAgICAgICAgICAgICAgICAgICB0b2dnbGVDbGFzc2VzKHBhcnRpY2lwYXRlQnRucywgXCJsb2FkZXJcIik7XG4gICAgICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tVc2VyQXV0aCgpO1xuICAgICAgICAgICAgICAgICAgICAvLyBsb2FkVXNlcnMoXCI/bm9jYWNoZT0xXCIpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgaWYgKGFjdGl2ZVdlZWsgJiYgdGFibGVEYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICByZW5kZXJVc2VycyhhY3RpdmVXZWVrLCB0YWJsZURhdGEpO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdBUEkgcmVxdWVzdCBmYWlsZWQ6JywgZXJyKTtcbiAgICAgICAgICAgICAgICByZXBvcnRFcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXYtcGFnZScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLnN0YXJ0c1dpdGgoXCJodHRwczovL3d3dy5mYXZiZXQuaHIvXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9wcm9tb2NpamUvcHJvbW9jaWphL3N0dWIvJztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvcHJvbW9zL3Byb21vL3N0dWIvJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycik7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gbG9hZFVzZXJzKHBhcmFtZXRyKSB7XG4gICAgICAgIGNvbnN0IHJlcXVlc3RzID0gW107XG4gICAgICAgIHRhYmxlRGF0YS5sZW5ndGggPSAwO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHBlcmlvZEFtb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCB3ZWVrID0gaTtcbiAgICAgICAgICAgIGNvbnN0IHJlcSA9IHJlcXVlc3QoYC91c2Vycy8ke3dlZWt9JHtwYXJhbWV0ciA/IHBhcmFtZXRyIDogXCJcIn1gKS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIHRhYmxlRGF0YS5wdXNoKHsgd2VlaywgZGF0YTogZGF0YSB9KTtcbiAgICAgICAgICAgICAgICBpZiAoIWFjdGl2ZVdlZWspIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlV2VlayA9IGRhdGEuYWN0aXZlU3RhZ2VOdW1iZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlzUHJvbW9PdmVyID0gZGF0YS5pc1Byb21vT3ZlcjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmVxdWVzdHMucHVzaChyZXEpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHJlcXVlc3RzKVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBsb2FkaW5nIHVzZXJzOicsIGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gaW5pdFNub3dmbGFrZXNDYW52YXMoKSB7XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzbm93Zmxha2VzQ2FudmFzJyk7XG4gICAgICAgIGlmICghY2FudmFzKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIGNvbnN0IGZhdlBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmF2LXBhZ2UnKTtcbiAgICAgICAgXG4gICAgICAgIC8vINCa0L7QvdGB0YLQsNC90YLQuFxuICAgICAgICBjb25zdCBTTk9XRkxBS0VfQ09VTlQgPSA0MDA7IFxuICAgICAgICBjb25zdCBTTk9XRkxBS0VfTUlOX1NJWkUgPSA0O1xuICAgICAgICBjb25zdCBTTk9XRkxBS0VfTUFYX1NJWkUgPSAxMDtcbiAgICAgICAgY29uc3QgU05PV0ZMQUtFX01JTl9TUEVFRCA9IDAuMTtcbiAgICAgICAgY29uc3QgU05PV0ZMQUtFX01BWF9TUEVFRCA9IDAuMztcbiAgICAgICAgY29uc3QgU05PV0ZMQUtFX1dJTkRfUkFOR0UgPSAwLjQ7XG4gICAgICAgIGNvbnN0IFNOT1dGTEFLRV9TUEFXTl9JTlRFUlZBTCA9IDIwMDtcblxuICAgICAgICBjb25zdCBzbm93Zmxha2VzID0gW107XG4gICAgICAgIGxldCBsYXN0U25vd2ZsYWtlVGltZSA9IDA7XG4gICAgICAgIGxldCBhbmltYXRpb25JZCA9IG51bGw7XG4gICAgICAgIFxuICAgICAgICAvLyDQktGB0YLQsNC90L7QstC70Y7RlNC80L4g0YDQvtC30LzRltGAIGNhbnZhcyDQvdCwINCy0LXRgdGMIC5mYXYtcGFnZVxuICAgICAgICBmdW5jdGlvbiByZXNpemVDYW52YXMoKSB7XG4gICAgICAgICAgICBsZXQgbmV3V2lkdGgsIG5ld0hlaWdodDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGZhdlBhZ2UpIHtcbiAgICAgICAgICAgICAgICAvLyDQktC40LrQvtGA0LjRgdGC0L7QstGD0ZTQvNC+IHNjcm9sbEhlaWdodCDQtNC70Y8g0L7RgtGA0LjQvNCw0L3QvdGPINGA0LXQsNC70YzQvdC+0Zcg0LLQuNGB0L7RgtC4INC60L7QvdGC0LXQvdGC0YNcbiAgICAgICAgICAgICAgICBjb25zdCByZWN0ID0gZmF2UGFnZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgICAgICBuZXdXaWR0aCA9IHJlY3Qud2lkdGggfHwgZmF2UGFnZS5vZmZzZXRXaWR0aCB8fCB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgICAgICAgICAvLyDQlNC70Y8g0LLQuNGB0L7RgtC4INCy0LjQutC+0YDQuNGB0YLQvtCy0YPRlNC80L4gc2Nyb2xsSGVpZ2h0INGP0LrRidC+INCy0ZbQvSDQsdGW0LvRjNGI0LjQuSDQt9CwIG9mZnNldEhlaWdodFxuICAgICAgICAgICAgICAgIGNvbnN0IG9mZnNldEhlaWdodCA9IGZhdlBhZ2Uub2Zmc2V0SGVpZ2h0IHx8IGZhdlBhZ2UuY2xpZW50SGVpZ2h0O1xuICAgICAgICAgICAgICAgIGNvbnN0IHNjcm9sbEhlaWdodCA9IGZhdlBhZ2Uuc2Nyb2xsSGVpZ2h0O1xuICAgICAgICAgICAgICAgIG5ld0hlaWdodCA9IE1hdGgubWF4KHNjcm9sbEhlaWdodCwgb2Zmc2V0SGVpZ2h0LCByZWN0LmhlaWdodCkgfHwgd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBGYWxsYmFjayDQvdCwIHZpZXdwb3J0XG4gICAgICAgICAgICAgICAgbmV3V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgICAgICAgICBuZXdIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCf0LXRgNC10LLRltGA0Y/RlNC80L4g0YfQuCDRgNC+0LfQvNGW0YDQuCDQt9C80ZbQvdC40LvQuNGB0Y8g0L/QtdGA0LXQtCDQvtC90L7QstC70LXQvdC90Y/QvFxuICAgICAgICAgICAgaWYgKGNhbnZhcy53aWR0aCAhPT0gbmV3V2lkdGggfHwgY2FudmFzLmhlaWdodCAhPT0gbmV3SGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgY2FudmFzLndpZHRoID0gbmV3V2lkdGg7XG4gICAgICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IG5ld0hlaWdodDtcbiAgICAgICAgICAgICAgICAvLyDQntGH0LjRidCw0ZTQvNC+INGB0L3RltC20LjQvdC60Lgg0L/RgNC4INC30LzRltC90ZYg0YDQvtC30LzRltGA0YNcbiAgICAgICAgICAgICAgICBzbm93Zmxha2VzLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyDQktGB0YLQsNC90L7QstC70Y7RlNC80L4g0YDQvtC30LzRltGAIGNhbnZhcyDQtyDQvdC10LLQtdC70LjQutC+0Y4g0LfQsNGC0YDQuNC80LrQvtGOINC00LvRjyDQutC+0YDQtdC60YLQvdC+0LPQviDRgNC+0LfRgNCw0YXRg9C90LrRgyDRgNC+0LfQvNGW0YDRltCyXG4gICAgICAgIC8vINCS0LjQutC+0YDQuNGB0YLQvtCy0YPRlNC80L4g0LrRltC70YzQutCwINC60LDQtNGA0ZbQsiDQtNC70Y8g0LPQsNGA0LDQvdGC0ZbRlyDQv9GA0LDQstC40LvRjNC90L7Qs9C+INGA0L7Qt9C80ZbRgNGDXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICByZXNpemVDYW52YXMoKTtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzaXplQ2FudmFzKCk7XG4gICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzaXplQ2FudmFzKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplQ2FudmFzKTtcblxuICAgICAgICAvLyDQl9Cw0LLQsNC90YLQsNC20LXQvdC90Y8g0LfQvtCx0YDQsNC20LXQvdC90Y8g0YHQvdGW0LbQuNC90LrQuFxuICAgICAgICBjb25zdCBzbm93Zmxha2VJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBsZXQgaW1hZ2VMb2FkZWQgPSBmYWxzZTtcblxuICAgICAgICBzbm93Zmxha2VJbWFnZS5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGltYWdlTG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vINCn0LXQutCw0ZTQvNC+INC/0L7QutC4INGB0YLQvtGA0ZbQvdC60LAg0LLQuNC50LTQtSDQt9GWINGB0YLQsNC90YMgbG9hZGluZyDQv9C10YDQtdC0INGB0YLQsNGA0YLQvtC8INCw0L3RltC80LDRhtGW0ZdcbiAgICAgICAgICAgIGZ1bmN0aW9uIHdhaXRGb3JQYWdlUmVhZHkoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXNQYWdlTG9hZGluZyA9IG1haW5QYWdlICYmIG1haW5QYWdlLmNsYXNzTGlzdC5jb250YWlucygnbG9hZGluZycpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChpc1BhZ2VMb2FkaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNpemVDYW52YXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNpemVDYW52YXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g0JTQvtC00LDRgtC60L7QstCwINC/0LXRgNC10LLRltGA0LrQsCDQv9GW0YHQu9GPINGJ0LUg0L7QtNC90L7Qs9C+INC60LDQtNGA0YNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc2l6ZUNhbnZhcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhbnZhcy53aWR0aCA+IDAgJiYgY2FudmFzLmhlaWdodCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsQ2FudmFzV2l0aFNub3dmbGFrZXMoKTsgLy8g0JfQsNC/0L7QstC90Y7RlNC80L4g0LrQsNC90LLQsNGBINGB0L3RltC20LjQvdC60LDQvNC4INC/0YDQuCDQv9C10YDRiNC+0LzRgyDRgNC10L3QtNC10YDRllxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QW5pbWF0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vINCv0LrRidC+INCy0YHQtSDRidC1INC90LXQv9GA0LDQstC40LvRjNC90LjQuSDRgNC+0LfQvNGW0YAsINC/0L7QstGC0L7RgNGO0ZTQvNC+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCh3YWl0Rm9yUGFnZVJlYWR5LCA1MCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDQwMCk7IC8vINCn0LXQutCw0ZTQvNC+INGC0YDQvtGF0Lgg0LHRltC70YzRiNC1INC90ZbQtiBoaWRlTG9hZGVyICgzMDBtcylcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyDQodGC0L7RgNGW0L3QutCwINCz0L7RgtC+0LLQsCwg0LLRgdGC0LDQvdC+0LLQu9GO0ZTQvNC+INGA0L7Qt9C80ZbRgCDRgtCwINC30LDQv9GD0YHQutCw0ZTQvNC+XG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNpemVDYW52YXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzaXplQ2FudmFzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzaXplQ2FudmFzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYW52YXMud2lkdGggPiAwICYmIGNhbnZhcy5oZWlnaHQgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbENhbnZhc1dpdGhTbm93Zmxha2VzKCk7IC8vINCX0LDQv9C+0LLQvdGO0ZTQvNC+INC60LDQvdCy0LDRgSDRgdC90ZbQttC40L3QutCw0LzQuCDQv9GA0Lgg0L/QtdGA0YjQvtC80YMg0YDQtdC90LTQtdGA0ZZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QW5pbWF0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHdhaXRGb3JQYWdlUmVhZHkoKTtcbiAgICAgICAgfTtcbiAgICAgICAgc25vd2ZsYWtlSW1hZ2Uuc3JjID0gJ2h0dHBzOi8vZmF2LXByb20uY29tL2h0bWwvZ2xvYmFsLW55LTIwMjYtaHIvaW1nL3Nub3dmbGFrZS5wbmcnO1xuICAgICAgIFxuXG4gICAgICAgIC8vINCa0LvQsNGBINC00LvRjyDRgdC90ZbQttC40L3QutC4XG4gICAgICAgIGNsYXNzIFNub3dmbGFrZSB7XG4gICAgICAgICAgICBjb25zdHJ1Y3Rvcihpbml0aWFsWSA9IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnggPSBNYXRoLnJhbmRvbSgpICogKGNhbnZhcy53aWR0aCB8fCB3aW5kb3cuaW5uZXJXaWR0aCk7XG4gICAgICAgICAgICAgICAgLy8g0K/QutGJ0L4g0L/QtdGA0LXQtNCw0L3QviBpbml0aWFsWSwg0LLQuNC60L7RgNC40YHRgtC+0LLRg9GU0LzQviDRl9GXICjQtNC70Y8g0L/QvtGH0LDRgtC60L7QstC+0LPQviDQt9Cw0L/QvtCy0L3QtdC90L3RjyDQutCw0L3QstCw0YHRgylcbiAgICAgICAgICAgICAgICAvLyDQhtC90LDQutGI0LUg0YHQv9Cw0LLQvdC40LzQviDQt9Cy0LXRgNGF0YNcbiAgICAgICAgICAgICAgICB0aGlzLnkgPSBpbml0aWFsWSAhPT0gbnVsbCA/IGluaXRpYWxZIDogLTIwO1xuICAgICAgICAgICAgICAgIHRoaXMuc2l6ZSA9IE1hdGgucmFuZG9tKCkgKiAoU05PV0ZMQUtFX01BWF9TSVpFIC0gU05PV0ZMQUtFX01JTl9TSVpFKSArIFNOT1dGTEFLRV9NSU5fU0laRTtcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVkID0gTWF0aC5yYW5kb20oKSAqIChTTk9XRkxBS0VfTUFYX1NQRUVEIC0gU05PV0ZMQUtFX01JTl9TUEVFRCkgKyBTTk9XRkxBS0VfTUlOX1NQRUVEO1xuICAgICAgICAgICAgICAgIHRoaXMud2luZCA9IChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIFNOT1dGTEFLRV9XSU5EX1JBTkdFO1xuICAgICAgICAgICAgICAgIHRoaXMub3BhY2l0eSA9IE1hdGgucmFuZG9tKCkgKiAwLjUgKyAwLjU7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3RhdGlvbiA9IE1hdGgucmFuZG9tKCkgKiBNYXRoLlBJICogMjtcbiAgICAgICAgICAgICAgICB0aGlzLnJvdGF0aW9uU3BlZWQgPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiAwLjAyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1cGRhdGUoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy55ICs9IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICAgICAgdGhpcy54ICs9IHRoaXMud2luZCArIChNYXRoLnNpbih0aGlzLnkgKiAwLjAxKSAqIDAuMik7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3RhdGlvbiArPSB0aGlzLnJvdGF0aW9uU3BlZWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRyYXcoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpbWFnZUxvYWRlZCkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vINCf0LXRgNC10LLRltGA0LrQsCDRh9C4IGNhbnZhcyDQvNCw0ZQg0L/RgNCw0LLQuNC70YzQvdC40Lkg0YDQvtC30LzRltGAXG4gICAgICAgICAgICAgICAgaWYgKGNhbnZhcy53aWR0aCA9PT0gMCB8fCBjYW52YXMuaGVpZ2h0ID09PSAwKSByZXR1cm47XG5cbiAgICAgICAgICAgICAgICBjdHguc2F2ZSgpO1xuICAgICAgICAgICAgICAgIGN0eC5nbG9iYWxBbHBoYSA9IHRoaXMub3BhY2l0eTtcbiAgICAgICAgICAgICAgICBjdHgudHJhbnNsYXRlKHRoaXMueCwgdGhpcy55KTtcbiAgICAgICAgICAgICAgICBjdHgucm90YXRlKHRoaXMucm90YXRpb24pO1xuICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICAgICAgICAgIHNub3dmbGFrZUltYWdlLFxuICAgICAgICAgICAgICAgICAgICAtdGhpcy5zaXplIC8gMixcbiAgICAgICAgICAgICAgICAgICAgLXRoaXMuc2l6ZSAvIDIsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaXplXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBjdHgucmVzdG9yZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpc09mZlNjcmVlbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy55ID4gY2FudmFzLmhlaWdodCArIDIwIHx8IFxuICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnggPCAtMjAgfHwgXG4gICAgICAgICAgICAgICAgICAgICAgIHRoaXMueCA+IGNhbnZhcy53aWR0aCArIDIwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlU25vd2ZsYWtlKGluaXRpYWxZID0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKHNub3dmbGFrZXMubGVuZ3RoIDwgU05PV0ZMQUtFX0NPVU5UKSB7XG4gICAgICAgICAgICAgICAgc25vd2ZsYWtlcy5wdXNoKG5ldyBTbm93Zmxha2UoaW5pdGlhbFkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8g0KTRg9C90LrRhtGW0Y8g0LTQu9GPINC/0L7Rh9Cw0YLQutC+0LLQvtCz0L4g0LfQsNC/0L7QstC90LXQvdC90Y8g0LrQsNC90LLQsNGB0YMg0YHQvdGW0LbQuNC90LrQsNC80LhcbiAgICAgICAgZnVuY3Rpb24gZmlsbENhbnZhc1dpdGhTbm93Zmxha2VzKCkge1xuICAgICAgICAgICAgaWYgKGNhbnZhcy53aWR0aCA9PT0gMCB8fCBjYW52YXMuaGVpZ2h0ID09PSAwKSByZXR1cm47XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCh0YLQstC+0YDRjtGU0LzQviDRgdC90ZbQttC40L3QutC4INC/0L4g0LLRgdGM0L7QvNGDINC60LDQvdCy0LDRgdGDICjQstGB0ZYgMjAwINGB0L3RltC20LjQvdC+0LopXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IFNOT1dGTEFLRV9DT1VOVDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgLy8g0KDQvtC30L/QvtC00ZbQu9GP0ZTQvNC+INGB0L3RltC20LjQvdC60Lgg0L/QviDQstGB0ZbQuSDQstC40YHQvtGC0ZYg0LrQsNC90LLQsNGB0YNcbiAgICAgICAgICAgICAgICBjb25zdCBpbml0aWFsWSA9IE1hdGgucmFuZG9tKCkgKiBjYW52YXMuaGVpZ2h0O1xuICAgICAgICAgICAgICAgIGNyZWF0ZVNub3dmbGFrZShpbml0aWFsWSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiB1cGRhdGVTbm93Zmxha2VzKCkge1xuICAgICAgICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIGlmIChub3cgLSBsYXN0U25vd2ZsYWtlVGltZSA+IFNOT1dGTEFLRV9TUEFXTl9JTlRFUlZBTCkge1xuICAgICAgICAgICAgICAgIGNyZWF0ZVNub3dmbGFrZSgpO1xuICAgICAgICAgICAgICAgIGxhc3RTbm93Zmxha2VUaW1lID0gbm93O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gc25vd2ZsYWtlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgIHNub3dmbGFrZXNbaV0udXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgaWYgKHNub3dmbGFrZXNbaV0uaXNPZmZTY3JlZW4oKSkge1xuICAgICAgICAgICAgICAgICAgICBzbm93Zmxha2VzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBkcmF3U25vd2ZsYWtlcygpIHtcbiAgICAgICAgICAgIC8vINCf0LXRgNC10LLRltGA0LrQsCDRh9C4IGNhbnZhcyDQvNCw0ZQg0L/RgNCw0LLQuNC70YzQvdC40Lkg0YDQvtC30LzRltGAINC/0LXRgNC10LQg0LzQsNC70Y7QstCw0L3QvdGP0LxcbiAgICAgICAgICAgIGlmIChjYW52YXMud2lkdGggPT09IDAgfHwgY2FudmFzLmhlaWdodCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJlc2l6ZUNhbnZhcygpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgICAgc25vd2ZsYWtlcy5mb3JFYWNoKHNub3dmbGFrZSA9PiB7XG4gICAgICAgICAgICAgICAgc25vd2ZsYWtlLmRyYXcoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbiAgICAgICAgICAgIC8vINCf0LXRgNC10LLRltGA0Y/RlNC80L4g0YDQvtC30LzRltGAIGNhbnZhcyDQvdCwINC/0L7Rh9Cw0YLQutGDINC60L7QttC90L7Qs9C+INC60LDQtNGA0YMgKNGC0ZbQu9GM0LrQuCDRj9C60YnQviDQstGW0L0g0L3QtdC/0YDQsNCy0LjQu9GM0L3QuNC5KVxuICAgICAgICAgICAgaWYgKGNhbnZhcy53aWR0aCA9PT0gMCB8fCBjYW52YXMuaGVpZ2h0ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmVzaXplQ2FudmFzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHVwZGF0ZVNub3dmbGFrZXMoKTtcbiAgICAgICAgICAgIGRyYXdTbm93Zmxha2VzKCk7XG4gICAgICAgICAgICBhbmltYXRpb25JZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHN0YXJ0QW5pbWF0aW9uKCkge1xuICAgICAgICAgICAgaWYgKGFuaW1hdGlvbklkKSB7XG4gICAgICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uSWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYW5pbWF0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g0JfRg9C/0LjQvdGP0ZTQvNC+INCw0L3RltC80LDRhtGW0Y4g0L/RgNC4INCy0LjRhdC+0LTRliDQtyB2aWV3cG9ydFxuICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgICAgICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFhbmltYXRpb25JZCAmJiBpbWFnZUxvYWRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRBbmltYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhbmltYXRpb25JZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uSWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uSWQgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUoY2FudmFzKTtcbiAgICB9XG4gICAgXG4gICAgbG9hZFRyYW5zbGF0aW9ucygpXG4gICAgICAgIC50aGVuKGluaXQpIC8vINC30LDQv9GD0YHQuiDRltC90ZbRgtGDINGB0YLQvtGA0ZbQvdC60LhcblxuICAgIC8vINCi0LjQvNGH0LDRgdC+0LLQuNC5INC+0LEn0ZTQutGCINC3INC00LDQvdC40LzQuCDQv9GA0L4g0L/RgNC+0LzRltC20LrQuCDRgtC40LbQvdGW0LJcbiAgICAvLyBUT0RPOiDQl9Cw0LzRltC90LjRgtC4INC90LAg0LTQsNC90ZYg0Lcg0LHQtdC60LXQvdC00YNcbiAgICAvLyDQn9GA0LjQutC70LDQtCDRgdGC0YDRg9C60YLRg9GA0Lgg0LTQsNC90LjRhSDQtyDQsdC10LrQtdC90LTRgzpcbiAgICAvLyB7XG4gICAgLy8gICAgIDE6IHsgc3RhcnQ6IFwiMjAyNS0xMi0xNVQwMDowMDowMFwiLCBlbmQ6IFwiMjAyNS0xMi0yMVQyMzo1OTo1OVwiIH0sXG4gICAgLy8gICAgIDI6IHsgc3RhcnQ6IFwiMjAyNS0xMi0yMlQwMDowMDowMFwiLCBlbmQ6IFwiMjAyNS0xMi0yOFQyMzo1OTo1OVwiIH0sXG4gICAgLy8gICAgIC4uLlxuICAgIC8vIH1cbiAgICAvLyDQlNC70Y8g0ZbQvdGC0LXQs9GA0LDRhtGW0Zcg0Lcg0LHQtdC60LXQvdC00L7QvDog0LfQsNC80ZbQvdC40YLQuCDRhtC10Lkg0L7QsSfRlNC60YIg0L3QsCDQtNCw0L3RliDQtyBBUElcbiAgICAvLyDQndCw0L/RgNC40LrQu9Cw0LQ6IGNvbnN0IHdlZWtzRGF0YSA9IGF3YWl0IHJlcXVlc3QoJy9hcGkvd2Vla3MnKTtcbiAgICBjb25zdCB3ZWVrc0RhdGEgPSB7XG4gICAgICAgIDE6IHtcbiAgICAgICAgICAgIHN0YXJ0OiBcIjIwMjUtMTItMTVUMDA6MDA6MDBcIixcbiAgICAgICAgICAgIGVuZDogXCIyMDI1LTEyLTIxVDIzOjU5OjU5XCJcbiAgICAgICAgfSxcbiAgICAgICAgMjoge1xuICAgICAgICAgICAgc3RhcnQ6IFwiMjAyNS0xMi0yMlQwMDowMDowMFwiLFxuICAgICAgICAgICAgZW5kOiBcIjIwMjUtMTItMjhUMjM6NTk6NTlcIlxuICAgICAgICB9LFxuICAgICAgICAzOiB7XG4gICAgICAgICAgICBzdGFydDogXCIyMDI1LTEyLTI5VDAwOjAwOjAwXCIsXG4gICAgICAgICAgICBlbmQ6IFwiMjAyNi0wMS0wNFQyMzo1OTo1OVwiXG4gICAgICAgIH0sXG4gICAgICAgIDQ6IHtcbiAgICAgICAgICAgIHN0YXJ0OiBcIjIwMjYtMDEtMDVUMDA6MDA6MDBcIixcbiAgICAgICAgICAgIGVuZDogXCIyMDI2LTAxLTExVDIzOjU5OjU5XCJcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyDQpNGD0L3QutGG0ZbRjyDQtNC70Y8g0LLQuNC30L3QsNGH0LXQvdC90Y8g0LDQutGC0LjQstC90L7Qs9C+INGC0LjQttC90Y8g0L3QsCDQvtGB0L3QvtCy0ZYg0LTQsNC90LjRhSDQtyDQvtCxJ9GU0LrRgtCwXG4gICAgZnVuY3Rpb24gZ2V0QWN0aXZlV2Vlayh3ZWVrc0RhdGEpIHtcbiAgICAgICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBsZXQgYWN0aXZlV2Vla0luZGV4ID0gbnVsbDtcblxuICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNC60LAg0LrQvtC20L3QvtCz0L4g0YLQuNC20L3Rj1xuICAgICAgICBmb3IgKGNvbnN0IHdlZWtOdW0gaW4gd2Vla3NEYXRhKSB7XG4gICAgICAgICAgICBjb25zdCB3ZWVrID0gd2Vla3NEYXRhW3dlZWtOdW1dO1xuICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSBuZXcgRGF0ZSh3ZWVrLnN0YXJ0KTtcbiAgICAgICAgICAgIGNvbnN0IGVuZCA9IG5ldyBEYXRlKHdlZWsuZW5kKTtcblxuICAgICAgICAgICAgaWYgKGN1cnJlbnREYXRlID49IHN0YXJ0ICYmIGN1cnJlbnREYXRlIDw9IGVuZCkge1xuICAgICAgICAgICAgICAgIGFjdGl2ZVdlZWtJbmRleCA9IHBhcnNlSW50KHdlZWtOdW0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFjdGl2ZVdlZWtJbmRleDtcbiAgICB9XG5cbiAgICAvLyDQhtC90ZbRhtGW0LDQu9GW0LfQsNGG0ZbRjyDRgdC10LrRhtGW0Zcg0ZbQs9C+0YAg0Lcg0LDQstGC0L7QvNCw0YLQuNGH0L3QuNC8INCy0LjQt9C90LDRh9C10L3QvdGP0Lwg0YLQuNC20L3Rj1xuICAgIGZ1bmN0aW9uIGluaXRHYW1lc1dlZWsoKSB7XG4gICAgICAgIC8vINCS0LjQutC+0YDQuNGB0YLQvtCy0YPRlNC80L4g0LPQu9C+0LHQsNC70YzQvdGDINC30LzRltC90L3RgyBhY3RpdmVXZWVrLCDRj9C60YnQviDQstC+0L3QsCDQstC20LUg0LLRgdGC0LDQvdC+0LLQu9C10L3QsCwg0ZbQvdCw0LrRiNC1INCy0LjQt9C90LDRh9Cw0ZTQvNC+INC3IHdlZWtzRGF0YVxuICAgICAgICBpZiAoIWFjdGl2ZVdlZWspIHtcbiAgICAgICAgICAgIGFjdGl2ZVdlZWsgPSBnZXRBY3RpdmVXZWVrKHdlZWtzRGF0YSkgfHwgMTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vINCe0LHQvNC10LbQtdC90L3RjyDQtNC+IDQg0YLQuNC20L3RltCyXG4gICAgICAgIGlmIChhY3RpdmVXZWVrID4gNCkgYWN0aXZlV2VlayA9IDQ7XG5cbiAgICAgICAgLy8g0J/RgNC40YXQvtCy0YPQstCw0L3QvdGPINCy0YHRltGFINGB0L/QuNGB0LrRltCyINGW0LPQvtGAXG4gICAgICAgIGNvbnN0IGdhbWVMaXN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYW1lc19fbGlzdCcpO1xuICAgICAgICBnYW1lTGlzdHMuZm9yRWFjaChsaXN0ID0+IHtcbiAgICAgICAgICAgIGxpc3QuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyDQn9C+0LrQsNC3INGC0ZbQu9GM0LrQuCDQsNC60YLQuNCy0L3QvtCz0L4g0YLQuNC20L3Rj1xuICAgICAgICBjb25zdCBjdXJyZW50TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5nYW1lc19fbGlzdC5fd2VlayR7YWN0aXZlV2Vla31gKTtcbiAgICAgICAgaWYgKGN1cnJlbnRMaXN0KSB7XG4gICAgICAgICAgICBjdXJyZW50TGlzdC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDQkNCy0YLQvtC80LDRgtC40YfQvdC1INC00L7QtNCw0LLQsNC90L3RjyBkYXRhLdCw0YLRgNC40LHRg9GC0ZbQsiDQtNC70Y8g0YLRgNC10LrRltC90LPRgyDRgtCwINCy0YHRgtCw0L3QvtCy0LvQtdC90L3RjyDQv9C+0YHQuNC70LDQvdGMXG4gICAgICAgIGF1dG9BZGREYXRhQnV0dG9ucygpO1xuICAgICAgICBzZXRHYW1lTGlua3MoKTtcbiAgICB9XG5cbiAgICAvLyDQotC40LzRh9Cw0YHQvtCy0LjQuSDQvtCxJ9GU0LrRgiDQtyDQvNCw0L/RltC90LPQvtC8IGdhbWUtaWQg0L3QsCBVUkxcbiAgICAvLyBUT0RPOiDQl9Cw0LzRltC90LjRgtC4INC90LAg0LTQsNC90ZYg0Lcg0LHQtdC60LXQvdC00YNcbiAgICAvLyDQn9GA0LjQutC70LDQtCDRgdGC0YDRg9C60YLRg9GA0Lgg0LTQsNC90LjRhSDQtyDQsdC10LrQtdC90LTRgzpcbiAgICAvLyB7XG4gICAgLy8gICAgIFwid2VlazFfZ2FtZTFcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9nYW1lLXNsdWctMVwiLFxuICAgIC8vICAgICBcIndlZWsxX2dhbWUyXCI6IFwiL2Nhc2luby9zaG93LWdhbWUvZ2FtZS1zbHVnLTJcIixcbiAgICAvLyAgICAgLi4uXG4gICAgLy8gfVxuICAgIC8vINCU0LvRjyDRltC90YLQtdCz0YDQsNGG0ZbRlyDQtyDQsdC10LrQtdC90LTQvtC8OiBjb25zdCBnYW1lc0xpbmtzID0gYXdhaXQgcmVxdWVzdCgnL2FwaS9nYW1lcy9saW5rcycpO1xuICAgIGNvbnN0IGdhbWVzTGlua3MgPSB7XG4gICAgICAgIC8vIFdlZWsgMVxuICAgICAgICBcIndlZWsxX2dhbWUxXCI6IFwiL2Nhc2luby9zaG93LWdhbWUxL1wiLFxuICAgICAgICBcIndlZWsxX2dhbWUyXCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazFfZ2FtZTNcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrMV9nYW1lNFwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWsxX2dhbWU1XCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazFfZ2FtZTZcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrMV9nYW1lN1wiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWsxX2dhbWU4XCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazFfZ2FtZTlcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrMV9nYW1lMTBcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgLy8gV2VlayAyXG4gICAgICAgIFwid2VlazJfZ2FtZTFcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrMl9nYW1lMlwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWsyX2dhbWUzXCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazJfZ2FtZTRcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrMl9nYW1lNVwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWsyX2dhbWU2XCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazJfZ2FtZTdcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrMl9nYW1lOFwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWsyX2dhbWU5XCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazJfZ2FtZTEwXCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIC8vIFdlZWsgM1xuICAgICAgICBcIndlZWszX2dhbWUxXCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazNfZ2FtZTJcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrM19nYW1lM1wiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWszX2dhbWU0XCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazNfZ2FtZTVcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrM19nYW1lNlwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWszX2dhbWU3XCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazNfZ2FtZThcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrM19nYW1lOVwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWszX2dhbWUxMFwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICAvLyBXZWVrIDRcbiAgICAgICAgXCJ3ZWVrNF9nYW1lMVwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWs0X2dhbWUyXCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazRfZ2FtZTNcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrNF9nYW1lNFwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWs0X2dhbWU1XCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazRfZ2FtZTZcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrNF9nYW1lN1wiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWs0X2dhbWU4XCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazRfZ2FtZTlcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrNF9nYW1lMTBcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIlxuICAgIH07XG5cbiAgICAvLyDQktGB0YLQsNC90L7QstC70LXQvdC90Y8g0YPQvdGW0LrQsNC70YzQvdC40YUg0L/QvtGB0LjQu9Cw0L3RjCDQtNC70Y8g0LrQvtC20L3QvtGXINCz0YDQuFxuICAgIGZ1bmN0aW9uIHNldEdhbWVMaW5rcygpIHtcbiAgICAgICAgY29uc3QgZ2FtZUxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdhbWVzX19pdGVtLWxpbmtbZGF0YS1nYW1lLWlkXScpO1xuICAgICAgICBcbiAgICAgICAgZ2FtZUxpbmtzLmZvckVhY2gobGluayA9PiB7XG4gICAgICAgICAgICBjb25zdCBnYW1lSWQgPSBsaW5rLmdldEF0dHJpYnV0ZSgnZGF0YS1nYW1lLWlkJyk7XG4gICAgICAgICAgICBpZiAoZ2FtZUlkICYmIGdhbWVzTGlua3NbZ2FtZUlkXSkge1xuICAgICAgICAgICAgICAgIGxpbmsuaHJlZiA9IGdhbWVzTGlua3NbZ2FtZUlkXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8g0JDQstGC0L7QvNCw0YLQuNGH0L3QtSDQtNC+0LTQsNCy0LDQvdC90Y8gZGF0YS3QsNGC0YDQuNCx0YPRgtGW0LIg0LTQu9GPINGC0YDQtdC60ZbQvdCz0YNcbiAgICBmdW5jdGlvbiBhdXRvQWRkRGF0YUJ1dHRvbnMoKSB7XG4gICAgICAgIGNvbnN0IGdhbWVMaXN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYW1lc19fbGlzdCcpO1xuICAgICAgICBcbiAgICAgICAgZ2FtZUxpc3RzLmZvckVhY2gobGlzdCA9PiB7XG4gICAgICAgICAgICBjb25zdCB3ZWVrTWF0Y2ggPSBsaXN0LmNsYXNzTmFtZS5tYXRjaCgvX3dlZWsoXFxkKykvKTtcbiAgICAgICAgICAgIGlmICghd2Vla01hdGNoKSByZXR1cm47XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHdlZWsgPSB3ZWVrTWF0Y2hbMV07XG4gICAgICAgICAgICBjb25zdCBpdGVtcyA9IGxpc3QucXVlcnlTZWxlY3RvckFsbCgnLmdhbWVzX19pdGVtJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZ2FtZU51bWJlciA9IGluZGV4ICsgMTtcbiAgICAgICAgICAgICAgICBjb25zdCBidXR0b25OYW1lID0gYHdlZWske3dlZWt9R2FtZSR7Z2FtZU51bWJlcn1gO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IGxpbmtFbCA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLmdhbWVzX19pdGVtLWxpbmsnKTtcbiAgICAgICAgICAgICAgICBpZiAobGlua0VsKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vINCe0L3QvtCy0LvRjtGU0LzQviBkYXRhLWJ1dHRvbiDRj9C60YnQviDRidC1INC90LUg0LLRgdGC0LDQvdC+0LLQu9C10L3QviDQsNCx0L4g0L3QtdC60L7RgNC10LrRgtC90LVcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudEJ1dHRvbiA9IGxpbmtFbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghY3VycmVudEJ1dHRvbiB8fCAhY3VycmVudEJ1dHRvbi5pbmNsdWRlcyhgd2VlayR7d2Vla31HYW1lYCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtFbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtYnV0dG9uJywgYnV0dG9uTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8g0JLRgdGC0LDQvdC+0LLQu9GO0ZTQvNC+IGRhdGEtcHJvbW8g0Y/QutGJ0L4g0YnQtSDQvdC1INCy0YHRgtCw0L3QvtCy0LvQtdC90L5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFsaW5rRWwuZ2V0QXR0cmlidXRlKCdkYXRhLXByb21vJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtFbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvbW8nLCAncmF6aW5hXzIwMjZfaHInKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2xvYWRpbmcnKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PntcbiAgICAgICAgICAgIGluaXRQYWdlSGVpZ2h0KCk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGluaXRQYWdlSGVpZ2h0KCk7XG4gICAgfVxuXG4gICAgLy8gVEVTVFxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWJ0blwiKT8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LXRlc3RcIik/LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpO1xuICAgIH0pO1xuICAgIGNvbnN0IGxuZ0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG5nLWJ0blwiKVxuXG4gICAgbG5nQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGlmIChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxlXCIpKSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwibG9jYWxlXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsZVwiLCBcImVuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGF1dGhCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmF1dGgtYnRuXCIpXG5cbiAgICBhdXRoQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHVzZXJpZDEgPSBcIjc3Nzc3N1wiO1xuICAgICAgICBjb25zdCB1c2VyaWQyID0gXCI4ODg4ODhcIjtcbiAgICAgICAgXG4gICAgICAgIC8vINCS0LjQt9C90LDRh9Cw0ZTQvNC+INC/0L7RgtC+0YfQvdC40Lkg0YHRgtCw0L0g0YLQsCDQv9C10YDQtdGF0L7QtNC40LzQviDQtNC+INC90LDRgdGC0YPQv9C90L7Qs9C+XG4gICAgICAgIGlmICghdXNlcklkKSB7XG4gICAgICAgICAgICAvLyDQodGC0LDQvSAxOiDQvdC10LzQsNGUIHVzZXJJZCAtPiDQstGB0YLQsNC90L7QstC70Y7RlNC80L4gdXNlcmlkMVxuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcInVzZXJJZFwiLCB1c2VyaWQxKTtcbiAgICAgICAgfSBlbHNlIGlmICh1c2VySWQudG9TdHJpbmcoKSA9PT0gdXNlcmlkMSkge1xuICAgICAgICAgICAgLy8g0KHRgtCw0L0gMjogdXNlcmlkMSAtPiDQstGB0YLQsNC90L7QstC70Y7RlNC80L4gdXNlcmlkMlxuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcInVzZXJJZFwiLCB1c2VyaWQyKTtcbiAgICAgICAgfSBlbHNlIGlmICh1c2VySWQudG9TdHJpbmcoKSA9PT0gdXNlcmlkMikge1xuICAgICAgICAgICAgLy8g0KHRgtCw0L0gMzogdXNlcmlkMiAtPiDQstC40LTQsNC70Y/RlNC80L4gdXNlcklkXG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwidXNlcklkXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8g0K/QutGJ0L4gdXNlcklkINGW0L3RiNC40LkgKNC90LXQvtGH0ZbQutGD0LLQsNC90LjQuSksINC/0L7Rh9C40L3QsNGU0LzQviDQtyB1c2VyaWQxXG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwidXNlcklkXCIsIHVzZXJpZDEpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSk7XG5cbn0pKCk7XG4iXX0=
