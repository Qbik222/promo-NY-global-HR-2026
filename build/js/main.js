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
                  initSnowflakesCanvas();

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwibWFpblBhZ2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJsb2FkZXIiLCJyZXN1bHRzVGFibGUiLCJyZXN1bHRzVGFibGVPdGhlciIsInVuYXV0aE1zZ3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwicGFydGljaXBhdGVCdG5zIiwicmVkaXJlY3RCdG5zIiwiaHJMZW5nIiwiZW5MZW5nIiwidG9nZ2xlQ2xhc3NlcyIsImVsZW1lbnRzIiwiY2xhc3NOYW1lIiwiZm9yRWFjaCIsImVsIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwidG9nZ2xlVHJhbnNsYXRlcyIsImRhdGFBdHRyIiwic2V0QXR0cmlidXRlIiwiaW5uZXJIVE1MIiwiaTE4bkRhdGEiLCJyZW1vdmVBdHRyaWJ1dGUiLCJsb2NhbGUiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJkZWJ1ZyIsImhpZGVMb2FkZXIiLCJ0cmFuc2xhdGVTdGF0ZSIsInVzZXJJZCIsIk51bWJlciIsImlzVmVyaWZpZWRVc2VyIiwidGFibGVEYXRhIiwiYWN0aXZlV2VlayIsInBlcmlvZEFtb3VudCIsImlzUHJvbW9PdmVyIiwibG9hZGVyQnRuIiwicmVxdWVzdCIsImxpbmsiLCJleHRyYU9wdGlvbnMiLCJmZXRjaCIsImhlYWRlcnMiLCJ0aGVuIiwicmVzIiwib2siLCJFcnJvciIsImpzb24iLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJyZXBvcnRFcnJvciIsInN0eWxlIiwiZGlzcGxheSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInN0YXJ0c1dpdGgiLCJQcm9taXNlIiwicmVqZWN0IiwiYWRkIiwiYm9keSIsIm92ZXJmbG93IiwicmVtb3ZlIiwiaW5pdFBhZ2VIZWlnaHQiLCJmYXZQYWdlIiwiZnJhbWUiLCJzdGlja3lXcmFwIiwiaGVhZGVySGVpZ2h0IiwiaW5uZXJXaWR0aCIsImZvb3RlckhlaWdodCIsInZpZXdwb3J0SGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJjYWxjdWxhdGVkSGVpZ2h0IiwiZmF2UGFnZUhlaWdodCIsIk1hdGgiLCJtYXgiLCJtaW5IZWlnaHQiLCJtYXhIZWlnaHQiLCJmcmFtZUhlaWdodCIsIm1hcmdpblRvcCIsImluaXQiLCJ0cnlEZXRlY3RVc2VySWQiLCJpbml0U3RpY2t5V3JhcEJhY2tncm91bmQiLCJnZXREcm9wZG93bkNvbnRlbnRIZWlnaHQiLCJyZWNhbGN1bGF0ZURyb3Bkb3duc0hlaWdodCIsImZpeEJhY2tncm91bmRQb3NpdGlvbiIsInJlc3RvcmVCYWNrZ3JvdW5kUG9zaXRpb24iLCJxdWlja0NoZWNrQW5kUmVuZGVyIiwiY2hlY2tVc2VyQXV0aCIsImluaXRHYW1lc1dlZWsiLCJpbml0UHJvZ3Jlc3NCYXIiLCJpbml0UGFydGljaXBhdGVDYW52YXMiLCJpbml0U25vd2ZsYWtlc0NhbnZhcyIsInNldFRpbWVvdXQiLCJkcm9wZG93bnMiLCJvcGVuRHJvcGRvd25zQ291bnQiLCJyZXNpemVUaW1lb3V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsZWFyVGltZW91dCIsImJnRWxlbWVudCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInRlbXBIZWlnaHQiLCJoZWlnaHQiLCJjb21wdXRlZFN0eWxlIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImluaXRpYWxCYWNrZ3JvdW5kSGVpZ2h0IiwicGFyc2VGbG9hdCIsImRyb3Bkb3duIiwiZHJvcGRvd25IZWlnaHQiLCJpc0lnbm9yZWQiLCJjb250YWlucyIsImV2ZW50Iiwib3BlbiIsInRvdGFsRHJvcGRvd25zSGVpZ2h0Iiwic3VtbWFyeSIsInN1bW1hcnlSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwic2Nyb2xsRGVsdGEiLCJjdXJyZW50U2Nyb2xsVG9wIiwic2Nyb2xsVG9wIiwidGFyZ2V0U2Nyb2xsVG9wIiwic2Nyb2xsVG8iLCJiZWhhdmlvciIsIm9mZnNldEhlaWdodCIsImRyb3Bkb3duVG9wIiwiZHJvcGRvd25Cb3R0b20iLCJ2aXNpYmxlVG9wIiwidmlzaWJsZUJvdHRvbSIsIm1pbiIsInZpc2libGVIZWlnaHQiLCJ2aXNpYmxlUGVyY2VudGFnZSIsImhpZGRlblRvcCIsImFicyIsImhpZGRlbkJvdHRvbSIsImUiLCJ0YXJnZXQiLCJjbG9zZXN0IiwicGFydGljaXBhdGUiLCJwb3NpdGlvbiIsImxlZnQiLCJib3R0b20iLCJ3aWR0aCIsInRyYW5zZm9ybSIsInJlY3QiLCJuZXdIZWlnaHQiLCJvcGVuRHJvcGRvd25zIiwiZHJvcFR4dCIsInNjcm9sbEhlaWdodCIsImNyZWF0ZUVsZW1lbnQiLCJpbnNlcnRCZWZvcmUiLCJmaXJzdENoaWxkIiwic3RvcmUiLCJzdGF0ZSIsImdldFN0YXRlIiwiYXV0aCIsImlzQXV0aG9yaXplZCIsImlkIiwiZ191c2VyX2lkIiwiYXR0ZW1wdHMiLCJtYXhBdHRlbXB0cyIsImF0dGVtcHRJbnRlcnZhbCIsIndhaXRGb3JVc2VySWQiLCJyZXNvbHZlIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJ1bmF1dGhNZXMiLCJ1c2VyaWQiLCJpdGVtIiwicmVkaXJlY3RCdG4iLCJwYXJ0aWNpcGF0ZUJ0biIsImxvYWRUcmFuc2xhdGlvbnMiLCJ0cmFuc2xhdGUiLCJyZXBvcnREYXRhIiwib3JpZ2luIiwiZXJyb3JUZXh0IiwidGV4dCIsIm1lc3NhZ2UiLCJ0eXBlIiwibmFtZSIsInN0YWNrIiwibWV0aG9kIiwiSlNPTiIsInN0cmluZ2lmeSIsIndhcm4iLCJlbGVtcyIsImxlbmd0aCIsImVsZW0iLCJrZXkiLCJnZXRBdHRyaWJ1dGUiLCJsb2ciLCJyZWZyZXNoTG9jYWxpemVkQ2xhc3MiLCJlbGVtZW50IiwibGFuZyIsInJlbmRlclVzZXJzIiwid2Vla051bSIsInVzZXJEYXRhIiwid2Vla09iaiIsImZpbmQiLCJ3Iiwid2VlayIsImRhdGEiLCJBcnJheSIsImlzQXJyYXkiLCJ1c2VycyIsImlzU3RhZ2VFbmRlZCIsIndpbm5lckFkZGl0aW9uYWxQcml6ZSIsInUiLCJ3aW5uZXIiLCJjdXJyZW50VXNlciIsInVzZXIiLCJwb2ludHMiLCJwb3B1bGF0ZVVzZXJzVGFibGUiLCJjdXJyZW50VXNlcklkIiwic2Vjb25kVGFibGVPdGhlciIsInNlY29uZFRhYmxlIiwiaXNUb3BDdXJyZW50VXNlciIsInNsaWNlIiwic29tZSIsInRvcFVzZXJzTGVuZ3RoIiwidG9wVXNlcnMiLCJkaXNwbGF5VXNlciIsImlzQ3VycmVudFVzZXIiLCJ0YWJsZSIsInJlbmRlclJvdyIsIm9wdGlvbnMiLCJoaWdobGlnaHQiLCJuZWlnaGJvciIsInVzZXJSb3ciLCJ1c2VyUGxhY2UiLCJpbmRleE9mIiwicHJpemVLZXkiLCJnZXRQcml6ZVRyYW5zbGF0aW9uS2V5IiwidHJhbnNsYXRlS2V5IiwibWFza1VzZXJJZCIsInRvRml4ZWQiLCJhcHBlbmQiLCJpbmRleCIsImNhbnZhcyIsInBlcmNlbnRFbGVtZW50IiwiY3R4IiwiZ2V0Q29udGV4dCIsImJhckhlaWdodCIsInNlZ21lbnRXaWR0aCIsInNlZ21lbnRIZWlnaHQiLCJzZWdtZW50R2FwIiwicGFkZGluZyIsInNlZ21lbnRSYWRpdXMiLCJjdXJyZW50UHJvZ3Jlc3MiLCJ0YXJnZXRQcm9ncmVzcyIsImxvYWRpbmdEdXJhdGlvbiIsInN0YXJ0VGltZSIsIkRhdGUiLCJub3ciLCJhbmltYXRpb25JZCIsIm1heFNlZ21lbnRzIiwiaXNMb2FkaW5nQ29tcGxldGUiLCJyZXNpemVDYW52YXMiLCJjb250YWluZXIiLCJwYXJlbnRFbGVtZW50IiwiY29udGFpbmVyV2lkdGgiLCJvZmZzZXRXaWR0aCIsImF2YWlsYWJsZVdpZHRoIiwic2VnbWVudFdpdGhHYXAiLCJmbG9vciIsImRyYXdQcm9ncmVzc0JhciIsInByb2dyZXNzIiwiY2xlYXJSZWN0Iiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJzdHJva2VSZWN0IiwiZmlsbGVkU2VnbWVudHMiLCJmaWxsU3R5bGUiLCJjZW50ZXJZIiwiaSIsIngiLCJ5IiwiYmVnaW5QYXRoIiwicm91bmRSZWN0IiwiciIsIm1vdmVUbyIsImxpbmVUbyIsInF1YWRyYXRpY0N1cnZlVG8iLCJjbG9zZVBhdGgiLCJmaWxsIiwidXBkYXRlUHJvZ3Jlc3MiLCJlbGFwc2VkIiwicGVyY2VudCIsInRleHRDb250ZW50IiwiaW5pdEljb25zQW5pbWF0aW9uIiwiZHVyYXRpb24iLCJpY29ucyIsIm9yaWdpbmFsVHJhbnNmb3JtcyIsIk1hcCIsImhhZElubGluZVRyYW5zZm9ybSIsInNlbGVjdG9yIiwiaWNvbiIsImhhZElubGluZSIsInNldCIsIm9yaWdpbmFsVHJhbnNmb3JtIiwib3BhY2l0eSIsInRyYW5zaXRpb24iLCJpY29uQ291bnQiLCJnZXQiLCJyZW1vdmVQcm9wZXJ0eSIsInBhcnRpY2lwYXRlQ2FudmFzIiwicGFydGljaXBhdGVEZWVycyIsInBhcnRpY2lwYXRlRGVlcldpZHRoIiwicGFydGljaXBhdGVEZWVySGVpZ2h0IiwiY2FudmFzQ2xpY2tIYW5kbGVyc0F0dGFjaGVkIiwicGFydGljaXBhdGVBbmltYXRpb25JZCIsInRvdWNoU3RhcnRYIiwidG91Y2hTdGFydFkiLCJoYW5kbGVQYXJ0aWNpcGF0ZUNhbnZhc0NsaWNrIiwic2NhbGVYIiwic2NhbGVZIiwiY2xpZW50WCIsImNsaWVudFkiLCJjbGlja1giLCJjbGlja1kiLCJkZWVyIiwiaXNQb2ludEluc2lkZSIsImhhbmRsZUNsaWNrIiwiaGFuZGxlUGFydGljaXBhdGVDYW52YXNUb3VjaFN0YXJ0IiwidG91Y2giLCJ0b3VjaGVzIiwiaGFuZGxlUGFydGljaXBhdGVDYW52YXNUb3VjaEVuZCIsImNoYW5nZWRUb3VjaGVzIiwiZGVsdGFYIiwiZGVsdGFZIiwiZGlzdGFuY2UiLCJzcXJ0IiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJpc01vYmlsZSIsIkNBTlZBU19XSURUSCIsIkNBTlZBU19IRUlHSFQiLCJUUkVFX1dJRFRIIiwiVFJFRV9IRUlHSFQiLCJGUkFNRVNfUEVSX1JPVyIsIlRPVEFMX1JPV1MiLCJTUFJJVEVfU0hFRVRfV0lEVEgiLCJTUFJJVEVfU0hFRVRfSEVJR0hUIiwiRlJBTUVfV0lEVEgiLCJGUkFNRV9IRUlHSFQiLCJERUVSX1NDQUxFIiwiQkFTRV9ERUVSX1dJRFRIIiwiQkFTRV9ERUVSX0hFSUdIVCIsIkRFRVJfV0lEVEgiLCJERUVSX0hFSUdIVCIsImRlZXJIZWlnaHRPZmZzZXQiLCJ0cmVlWCIsInRyZWVZIiwiRlJBTUVfREVMQVkiLCJXQUxLSU5HX0ZSQU1FUyIsIkZSQU1FX1JFUEVBVCIsIklETEVfTUlOX0RVUkFUSU9OIiwiSURMRV9NQVhfRFVSQVRJT04iLCJERUVSX1NUQVRFIiwiV0FMS0lORyIsIklETEUiLCJQRVRUSU5HIiwiUEVUVElOR19NSU5fRFVSQVRJT04iLCJQRVRUSU5HX01BWF9EVVJBVElPTiIsIkhFQVJUX1NJWkVfTUlOIiwiSEVBUlRfU0laRV9NQVgiLCJIRUFSVF9SSVNFX0RJU1RBTkNFIiwiSEVBUlRfU1BBV05fSU5URVJWQUwiLCJmcmFtZUNvdW50ZXIiLCJIZWFydCIsInNpemUiLCJoZWFydEltYWdlIiwic2NhbGUiLCJyaXNlU3BlZWQiLCJpc1Zpc2libGUiLCJjb21wbGV0ZSIsIm5hdHVyYWxXaWR0aCIsIm5hdHVyYWxIZWlnaHQiLCJzYXZlIiwiZ2xvYmFsQWxwaGEiLCJkcmF3U2l6ZSIsImRyYXdYIiwiZHJhd1kiLCJkcmF3SW1hZ2UiLCJyZXN0b3JlIiwiRGVlciIsInN0YXJ0WCIsInN0YXJ0WSIsIm1pblgiLCJtYXhYIiwic3BlZWQiLCJ6SW5kZXgiLCJkaXJlY3Rpb24iLCJmcmFtZUluZGV4IiwiZnJhbWVSZXBlYXRDb3VudGVyIiwiaWRsZVRpbWVyIiwiaWRsZUR1cmF0aW9uIiwicGV0dGluZ1RpbWVyIiwicGV0dGluZ0R1cmF0aW9uIiwicHJldmlvdXNTdGF0ZSIsInNhdmVkWCIsInNhdmVkWSIsImhlYXJ0cyIsImhlYXJ0U3Bhd25Db3VudGVyIiwiZGVlcldpZHRoIiwiZGVlckhlaWdodCIsInJhbmRvbSIsIm9mZnNldFgiLCJoZWFydFgiLCJoZWFydFkiLCJwdXNoIiwicm93IiwiY29sIiwic2hvdWxkVXBkYXRlRnJhbWUiLCJzcGF3bkhlYXJ0IiwiZmlsdGVyIiwiaGVhcnQiLCJ1cGRhdGUiLCJzcHJpdGVJbWFnZSIsImZyYW1lV2lkdGgiLCJnZXRTcHJpdGVGcmFtZUluZGV4Iiwic291cmNlWCIsInNvdXJjZVkiLCJzb3VyY2VXaWR0aCIsInNvdXJjZUhlaWdodCIsImRlc3RYIiwiZGVzdFkiLCJkZXN0V2lkdGgiLCJkZXN0SGVpZ2h0IiwiZHJhdyIsImltYWdlcyIsImJhY2tncm91bmQiLCJJbWFnZSIsInRyZWUiLCJkZWVyU3ByaXRlIiwiZGVlcnMiLCJERUVSX0NPVU5UIiwiZGVlckNvbmZpZ3MiLCJjb25maWciLCJpbWFnZXNMb2FkZWQiLCJ0b3RhbEltYWdlcyIsIm9uSW1hZ2VMb2FkIiwiZHJhd0NhbnZhcyIsInN0YXJ0QW5pbWF0aW9uIiwib25sb2FkIiwic3JjIiwicGFzc2l2ZSIsIlRSRUVfWl9JTkRFWCIsImRyYXdhYmxlRWxlbWVudHMiLCJzb3J0IiwiYSIsImIiLCJhbmltYXRlIiwibmV3SXNNb2JpbGUiLCJwYXJhbXMiLCJsb2FkVXNlcnMiLCJwYXJhbWV0ciIsInJlcXVlc3RzIiwicmVxIiwiYWN0aXZlU3RhZ2VOdW1iZXIiLCJhbGwiLCJTTk9XRkxBS0VfQ09VTlQiLCJTTk9XRkxBS0VfTUlOX1NJWkUiLCJTTk9XRkxBS0VfTUFYX1NJWkUiLCJTTk9XRkxBS0VfTUlOX1NQRUVEIiwiU05PV0ZMQUtFX01BWF9TUEVFRCIsIlNOT1dGTEFLRV9XSU5EX1JBTkdFIiwiU05PV0ZMQUtFX1NQQVdOX0lOVEVSVkFMIiwic25vd2ZsYWtlcyIsImxhc3RTbm93Zmxha2VUaW1lIiwibmV3V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJzbm93Zmxha2VJbWFnZSIsImltYWdlTG9hZGVkIiwid2FpdEZvclBhZ2VSZWFkeSIsImlzUGFnZUxvYWRpbmciLCJmaWxsQ2FudmFzV2l0aFNub3dmbGFrZXMiLCJTbm93Zmxha2UiLCJpbml0aWFsWSIsIndpbmQiLCJyb3RhdGlvbiIsIlBJIiwicm90YXRpb25TcGVlZCIsInNpbiIsInJvdGF0ZSIsImNyZWF0ZVNub3dmbGFrZSIsInVwZGF0ZVNub3dmbGFrZXMiLCJpc09mZlNjcmVlbiIsInNwbGljZSIsImRyYXdTbm93Zmxha2VzIiwic25vd2ZsYWtlIiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwib2JzZXJ2ZSIsIndlZWtzRGF0YSIsInN0YXJ0IiwiZW5kIiwiZ2V0QWN0aXZlV2VlayIsImN1cnJlbnREYXRlIiwiYWN0aXZlV2Vla0luZGV4IiwicGFyc2VJbnQiLCJnYW1lTGlzdHMiLCJsaXN0IiwiY3VycmVudExpc3QiLCJhdXRvQWRkRGF0YUJ1dHRvbnMiLCJzZXRHYW1lTGlua3MiLCJnYW1lc0xpbmtzIiwiZ2FtZUxpbmtzIiwiZ2FtZUlkIiwid2Vla01hdGNoIiwibWF0Y2giLCJpdGVtcyIsImdhbWVOdW1iZXIiLCJidXR0b25OYW1lIiwibGlua0VsIiwiY3VycmVudEJ1dHRvbiIsImluY2x1ZGVzIiwicmVhZHlTdGF0ZSIsImxuZ0J0biIsInJlbW92ZUl0ZW0iLCJzZXRJdGVtIiwicmVsb2FkIiwiYXV0aEJ0biIsInVzZXJpZDEiLCJ1c2VyaWQyIiwidG9TdHJpbmciXSwibWFwcGluZ3MiOiI7OzsrQ0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQSxDQUFDLFlBQVk7RUFBQTtFQUVULElBQU1BLE1BQU0sR0FBRyxzQ0FBc0M7RUFFckQsSUFBTUMsUUFBUSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxXQUFXLENBQUM7SUFDaERDLE1BQU0sR0FBR0YsUUFBUSxDQUFDQyxhQUFhLENBQUMsa0JBQWtCLENBQUM7SUFDbkRFLFlBQVksR0FBR0gsUUFBUSxDQUFDQyxhQUFhLENBQUMsUUFBUSxDQUFDO0lBQy9DRyxpQkFBaUIsR0FBR0osUUFBUSxDQUFDQyxhQUFhLENBQUMs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ZixVQUFVLENBQUMsUUFBUSxDQUFDO0lBQ3ZDLENBQUMsTUFBTTtNQUNIO01BQ0FsZixjQUFjLENBQUNtZixPQUFPLENBQUMsUUFBUSxFQUFFRyxPQUFPLENBQUM7SUFDN0M7SUFFQXpkLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDc2QsTUFBTSxFQUFFO0VBQzVCLENBQUMsQ0FBQztBQUVOLENBQUMsR0FBRyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgpIHtcblxuICAgIGNvbnN0IGFwaVVSTCA9ICdodHRwczovL2Zhdi1wcm9tLmNvbS9hcGlfbHZsXzIwMjZfaHInXG5cbiAgICBjb25zdCBtYWluUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmF2LXBhZ2VcIiksXG4gICAgICAgIGxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3Bpbm5lci1vdmVybGF5XCIpLFxuICAgICAgICByZXN1bHRzVGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RhYmxlXCIpLFxuICAgICAgICByZXN1bHRzVGFibGVPdGhlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFibGVPdGhlclwiKSxcbiAgICAgICAgdW5hdXRoTXNncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy51bmF1dGgtbXNnJyksXG4gICAgICAgIHBhcnRpY2lwYXRlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYXJ0LWJ0bicpLFxuICAgICAgICByZWRpcmVjdEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuLWpvaW4nKTtcblxuICAgIGNvbnN0IGhyTGVuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNockxlbmcnKTtcbiAgICBjb25zdCBlbkxlbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW5MZW5nJyk7XG4gICAgXG4gICAgLy8g0JTQvtC/0L7QvNGW0LbQvdGWINGE0YPQvdC60YbRltGXINC00LvRjyDRgNC+0LHQvtGC0Lgg0Lcg0LrQvdC+0L/QutCw0LzQuFxuICAgIGNvbnN0IHRvZ2dsZUNsYXNzZXMgPSAoZWxlbWVudHMsIGNsYXNzTmFtZSkgPT4gZWxlbWVudHMuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QudG9nZ2xlKGAke2NsYXNzTmFtZX1gKSk7XG4gICAgY29uc3QgdG9nZ2xlVHJhbnNsYXRlcyA9IChlbGVtZW50cywgZGF0YUF0dHIpID0+IGVsZW1lbnRzLmZvckVhY2goZWwgPT4ge1xuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJywgYCR7ZGF0YUF0dHJ9YCk7XG4gICAgICAgIGVsLmlubmVySFRNTCA9IGkxOG5EYXRhW2RhdGFBdHRyXSB8fCAnKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiAgIGtleTogICcgKyBkYXRhQXR0cjtcbiAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgIH0pO1xuXG4gICAgLy8gbGV0IGxvY2FsZSA9IFwiaHJcIlxuICAgIGxldCBsb2NhbGUgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxlXCIpIHx8IFwiaHJcIlxuXG4gICAgaWYgKGhyTGVuZykgbG9jYWxlID0gJ2hyJztcbiAgICBpZiAoZW5MZW5nKSBsb2NhbGUgPSAnZW4nO1xuXG4gICAgbGV0IGRlYnVnID0gZmFsc2VcblxuICAgIGlmIChkZWJ1ZykgaGlkZUxvYWRlcigpXG5cbiAgICBsZXQgaTE4bkRhdGEgPSB7fTtcbiAgICBjb25zdCB0cmFuc2xhdGVTdGF0ZSA9IHRydWU7XG4gICAgLy8gbGV0IHVzZXJJZCA9IG51bGw7XG4gICAgbGV0IHVzZXJJZCA9IE51bWJlcihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpKSA/PyBudWxsXG4gICAgbGV0IGlzVmVyaWZpZWRVc2VyID0gZmFsc2U7XG4gICAgXG4gICAgLy8g0JfQvNGW0L3QvdGWINC00LvRjyDRgNC+0LHQvtGC0Lgg0Lcg0YLQsNCx0LvQuNGG0LXRjiDQutC+0YDQuNGB0YLRg9Cy0LDRh9GW0LJcbiAgICBsZXQgdGFibGVEYXRhID0gW107XG4gICAgbGV0IGFjdGl2ZVdlZWsgPSBudWxsO1xuICAgIGxldCBwZXJpb2RBbW91bnQgPSA0OyAvLyDQmtGW0LvRjNC60ZbRgdGC0Ywg0YLQuNC20L3RltCyXG4gICAgbGV0IGlzUHJvbW9PdmVyID0gZmFsc2U7XG4gICAgbGV0IGxvYWRlckJ0biA9IGZhbHNlO1xuXG4gICAgY29uc3QgcmVxdWVzdCA9IGZ1bmN0aW9uIChsaW5rLCBleHRyYU9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKGFwaVVSTCArIGxpbmssIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAuLi4oZXh0cmFPcHRpb25zIHx8IHt9KVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKCdBUEkgZXJyb3InKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdBUEkgcmVxdWVzdCBmYWlsZWQ6JywgZXJyKTtcblxuICAgICAgICAgICAgICAgIHJlcG9ydEVycm9yKGVycik7XG5cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmF2LXBhZ2UnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uaHJlZi5zdGFydHNXaXRoKFwiaHR0cHM6Ly93d3cuZmF2YmV0LmhyL1wiKSkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvcHJvbW9jaWplL3Byb21vY2lqYS9zdHViLyc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3Byb21vcy9wcm9tby9zdHViLyc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycik7XG4gICAgICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhpZGVMb2FkZXIoKXtcbiAgICAgICAgbG9hZGVyLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImF1dG9cIlxuICAgICAgICBtYWluUGFnZS5jbGFzc0xpc3QucmVtb3ZlKFwibG9hZGluZ1wiKVxuICAgIH1cblxuICAgIC8vINCk0YPQvdC60YbRltGPINC00LvRjyDQstGB0YLQsNC90L7QstC70LXQvdC90Y8g0LLQuNGB0L7RgiDQvdCwINC+0YHQvdC+0LLRliB2aWV3cG9ydCwg0YXQtdC00LXRgNCwINGC0LAg0YTRg9GC0LXRgNCwXG4gICAgZnVuY3Rpb24gaW5pdFBhZ2VIZWlnaHQoKSB7XG4gICAgICAgIGNvbnN0IGZhdlBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmF2LXBhZ2UnKTtcbiAgICAgICAgY29uc3QgZnJhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZnJhbWUnKTtcbiAgICAgICAgY29uc3Qgc3RpY2t5V3JhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGlja3ktd3JhcCcpO1xuICAgICAgICBcbiAgICAgICAgaWYgKCFmYXZQYWdlIHx8ICFmcmFtZSB8fCAhc3RpY2t5V3JhcCkgcmV0dXJuO1xuICAgICAgICBcbiAgICAgICAgLy8g0JLQuNC30L3QsNGH0LDRlNC80L4g0LLQuNGB0L7RgtGDINGF0LXQtNC10YDQsCDQt9Cw0LvQtdC20L3QviDQstGW0LQg0YjQuNGA0LjQvdC4INC10LrRgNCw0L3Rg1xuICAgICAgICAvLyDQlNC10YHQutGC0L7QvyAoPiAxMDI0cHgpOiA2MCArIDIxID0gODFweFxuICAgICAgICAvLyDQnNC+0LHRltC70LrQuCAo4omkIDEwMjRweCk6IDQ4ICsgMjEgPSA2OXB4XG4gICAgICAgIGNvbnN0IGhlYWRlckhlaWdodCA9IHdpbmRvdy5pbm5lcldpZHRoID4gMTAyNCA/IDgxIDogNjk7XG4gICAgICAgIFxuICAgICAgICAvLyDQktC40LfQvdCw0YfQsNGU0LzQviDQstC40YHQvtGC0YMg0YTRg9GC0LXRgNCwINC30LDQu9C10LbQvdC+INCy0ZbQtCDRiNC40YDQuNC90Lgg0LXQutGA0LDQvdGDXG4gICAgICAgIC8vINCk0YPRgtC10YAg0L/RgNC40YHRg9GC0L3RltC5INGC0ZbQu9GM0LrQuCDQvdCwINC10LrRgNCw0L3QsNGFIOKJpCAxMDI0cHgsINCy0LjRgdC+0YLQsCA1NnB4XG4gICAgICAgIGNvbnN0IGZvb3RlckhlaWdodCA9IHdpbmRvdy5pbm5lcldpZHRoIDw9IDEwMjQgPyA1NiA6IDA7XG4gICAgICAgIFxuICAgICAgICAvLyDQntCx0YfQuNGB0LvRjtGU0LzQviDQstC40YHQvtGC0YMgLmZhdi1wYWdlOiB2aWV3cG9ydCBoZWlnaHQgLSBoZWFkZXIgaGVpZ2h0IC0gZm9vdGVyIGhlaWdodCAtINCy0ZbQtNGB0YLRg9C/XG4gICAgICAgIGNvbnN0IHZpZXdwb3J0SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICBjb25zdCBjYWxjdWxhdGVkSGVpZ2h0ID0gdmlld3BvcnRIZWlnaHQgLSBoZWFkZXJIZWlnaHQgLSBmb290ZXJIZWlnaHQgLSAzMjtcbiAgICAgICAgLy8g0JLQuNGB0L7RgtCwINC90LUg0L/QvtCy0LjQvdC90LAg0LHRg9GC0Lgg0LzQtdC90YjQtSAzMDBweFxuICAgICAgICBjb25zdCBmYXZQYWdlSGVpZ2h0ID0gTWF0aC5tYXgoY2FsY3VsYXRlZEhlaWdodCwgMjUwKTtcbiAgICAgICAgXG4gICAgICAgIC8vINCS0YHRgtCw0L3QvtCy0LvRjtGU0LzQviDQstC40YHQvtGC0YMgLmZhdi1wYWdlXG4gICAgICAgIGZhdlBhZ2Uuc3R5bGUubWluSGVpZ2h0ID0gYCR7ZmF2UGFnZUhlaWdodH1weGA7XG4gICAgICAgIGZhdlBhZ2Uuc3R5bGUubWF4SGVpZ2h0ID0gYCR7ZmF2UGFnZUhlaWdodH1weGA7XG4gICAgICAgIFxuICAgICAgICAvLyDQktGB0YLQsNC90L7QstC70Y7RlNC80L4g0LLQuNGB0L7RgtGDIC5mcmFtZTogLmZhdi1wYWdlICsgMnB4XG4gICAgICAgIGNvbnN0IGZyYW1lSGVpZ2h0ID0gZmF2UGFnZUhlaWdodCArIDI7XG4gICAgICAgIGZyYW1lLnN0eWxlLm1pbkhlaWdodCA9IGAke2ZyYW1lSGVpZ2h0fXB4YDtcbiAgICAgICAgZnJhbWUuc3R5bGUubWF4SGVpZ2h0ID0gYCR7ZnJhbWVIZWlnaHR9cHhgO1xuICAgICAgICBcbiAgICAgICAgLy8g0JLRgdGC0LDQvdC+0LLQu9GO0ZTQvNC+IG1hcmdpbi10b3Ag0LTQu9GPIC5zdGlja3ktd3JhcDog0L3QtdCz0LDRgtC40LLQvdCwINCy0LjRgdC+0YLQsCAuZmF2LXBhZ2VcbiAgICAgICAgc3RpY2t5V3JhcC5zdHlsZS5tYXJnaW5Ub3AgPSBgLSR7ZmF2UGFnZUhlaWdodH1weGA7XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgbGV0IGF0dGVtcHRzID0gMDtcbiAgICAgICAgY29uc3QgbWF4QXR0ZW1wdHMgPSAyMDtcbiAgICAgICAgY29uc3QgYXR0ZW1wdEludGVydmFsID0gNTA7XG5cbiAgICAgICAgZnVuY3Rpb24gdHJ5RGV0ZWN0VXNlcklkKCkge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5zdG9yZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gd2luZG93LnN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgICAgICAgICAgdXNlcklkID0gc3RhdGUuYXV0aC5pc0F1dGhvcml6ZWQgJiYgc3RhdGUuYXV0aC5pZCB8fCAnJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAod2luZG93LmdfdXNlcl9pZCkge1xuICAgICAgICAgICAgICAgIHVzZXJJZCA9IHdpbmRvdy5nX3VzZXJfaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyDQl9C80ZbQvdC90LAg0LTQu9GPINC30LHQtdGA0ZbQs9Cw0L3QvdGPINC/0L7Rh9Cw0YLQutC+0LLQvtGXINCy0LjRgdC+0YLQuCDRhNC+0L3Rg1xuICAgICAgICBsZXQgaW5pdGlhbEJhY2tncm91bmRIZWlnaHQgPSBudWxsO1xuICAgICAgICAvLyDQl9C80ZbQvdC90LAg0LTQu9GPINC30LHQtdGA0ZbQs9Cw0L3QvdGPINGB0YPQvNC4INCy0LjRgdC+0YIg0LLRltC00LrRgNC40YLQuNGFINC00YDQvtC/0LTQsNGD0L3RltCyXG4gICAgICAgIGxldCB0b3RhbERyb3Bkb3duc0hlaWdodCA9IDA7XG5cbiAgICAgICAgZnVuY3Rpb24gaW5pdFN0aWNreVdyYXBCYWNrZ3JvdW5kKCkge1xuICAgICAgICAgICAgY29uc3Qgc3RpY2t5V3JhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGlja3ktd3JhcCcpO1xuICAgICAgICAgICAgaWYgKCFzdGlja3lXcmFwKSByZXR1cm47XG5cbiAgICAgICAgICAgIC8vINCf0LXRgNC10LLRltGA0Y/RlNC80L4g0YfQuCDQtdC70LXQvNC10L3RgiDQstC20LUg0ZbRgdC90YPRlFxuICAgICAgICAgICAgbGV0IGJnRWxlbWVudCA9IHN0aWNreVdyYXAucXVlcnlTZWxlY3RvcignLnN0aWNreS13cmFwLWJnJyk7XG4gICAgICAgICAgICBpZiAoIWJnRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIC8vINCh0YLQstC+0YDRjtGU0LzQviDQvdC+0LLQuNC5INC10LvQtdC80LXQvdGCXG4gICAgICAgICAgICAgICAgYmdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgYmdFbGVtZW50LmNsYXNzTmFtZSA9ICdzdGlja3ktd3JhcC1iZyc7XG4gICAgICAgICAgICAgICAgc3RpY2t5V3JhcC5pbnNlcnRCZWZvcmUoYmdFbGVtZW50LCBzdGlja3lXcmFwLmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDQl9Cx0LXRgNGW0LPQsNGU0LzQviDQv9C+0YfQsNGC0LrQvtCy0YMg0LLQuNGB0L7RgtGDINC/0ZbRgdC70Y8g0YLQvtCz0L4sINGP0Log0LXQu9C10LzQtdC90YIg0LLRltC00YDQtdC90LTQtdGA0LjRgtGM0YHRj1xuICAgICAgICAgICAgLy8g0JLQuNC60L7RgNC40YHRgtC+0LLRg9GU0LzQviDQutGW0LvRjNC60LAg0LrQsNC00YDRltCyINC00LvRjyDQs9Cw0YDQsNC90YLRltGXINC/0YDQsNCy0LjQu9GM0L3QvtCz0L4g0YDQvtC30LzRltGA0YNcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluaXRpYWxCYWNrZ3JvdW5kSGVpZ2h0ID09PSBudWxsICYmIGJnRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVjdCA9IGJnRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vINCS0LjQutC+0YDQuNGB0YLQvtCy0YPRlNC80L4gY29tcHV0ZWQgc3R5bGUg0Y/QutGJ0L4gcmVjdC5oZWlnaHQgPSAwXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVjdC5oZWlnaHQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wdXRlZFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoYmdFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsQmFja2dyb3VuZEhlaWdodCA9IHBhcnNlRmxvYXQoY29tcHV0ZWRTdHlsZS5oZWlnaHQpIHx8IDEzNTA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxCYWNrZ3JvdW5kSGVpZ2h0ID0gcmVjdC5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gYmdFbGVtZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0RHJvcGRvd25Db250ZW50SGVpZ2h0KGRyb3Bkb3duKSB7XG4gICAgICAgICAgICAvLyDQhtCz0L3QvtGA0YPRlNC80L4g0LTRgNC+0L/QtNCw0YPQvdC4INC3INC60LvQsNGB0L7QvCBfaWdub3JlLWhlaWdodFxuICAgICAgICAgICAgaWYgKGRyb3Bkb3duLmNsYXNzTGlzdC5jb250YWlucygnX2lnbm9yZS1oZWlnaHQnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQntGC0YDQuNC80YPRlNC80L4g0LLQuNGB0L7RgtGDINC60L7QvdGC0LXQvdGC0YMg0LTRgNC+0L/QtNCw0YPQvdCwICjQstC40LrQu9GO0YfQsNGO0YfQuCBzdW1tYXJ5KVxuICAgICAgICAgICAgY29uc3QgZHJvcFR4dCA9IGRyb3Bkb3duLnF1ZXJ5U2VsZWN0b3IoJy5kcm9wLXR4dCcpO1xuICAgICAgICAgICAgaWYgKGRyb3BUeHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZHJvcFR4dC5vZmZzZXRIZWlnaHQgfHwgZHJvcFR4dC5zY3JvbGxIZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyDQr9C60YnQviDQvdC10LzQsNGUIC5kcm9wLXR4dCwg0LLQuNC60L7RgNC40YHRgtC+0LLRg9GU0LzQviDQstC40YHQvtGC0YMg0LLRgdGM0L7Qs9C+INC00YDQvtC/0LTQsNGD0L3QsCDQvNGW0L3Rg9GBIHN1bW1hcnlcbiAgICAgICAgICAgIGNvbnN0IHN1bW1hcnkgPSBkcm9wZG93bi5xdWVyeVNlbGVjdG9yKCdzdW1tYXJ5Jyk7XG4gICAgICAgICAgICBpZiAoc3VtbWFyeSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkcm9wZG93bi5vZmZzZXRIZWlnaHQgLSBzdW1tYXJ5Lm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkcm9wZG93bi5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiByZWNhbGN1bGF0ZURyb3Bkb3duc0hlaWdodCgpIHtcbiAgICAgICAgICAgIC8vINCf0LXRgNC10YDQsNGF0L7QstGD0ZTQvNC+INGB0YPQvNGDINCy0LjRgdC+0YIg0LLRgdGW0YUg0LLRltC00LrRgNC40YLQuNGFINC00YDQvtC/0LTQsNGD0L3RltCyICjRltCz0L3QvtGA0YPRjtGH0LggX2lnbm9yZS1oZWlnaHQpXG4gICAgICAgICAgICB0b3RhbERyb3Bkb3duc0hlaWdodCA9IDA7XG4gICAgICAgICAgICBjb25zdCBvcGVuRHJvcGRvd25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRyb3Bkb3duW29wZW5dJyk7XG4gICAgICAgICAgICBvcGVuRHJvcGRvd25zLmZvckVhY2goZHJvcGRvd24gPT4ge1xuICAgICAgICAgICAgICAgIC8vINCf0YDQvtC/0YPRgdC60LDRlNC80L4g0LTRgNC+0L/QtNCw0YPQvdC4INC3INC60LvQsNGB0L7QvCBfaWdub3JlLWhlaWdodFxuICAgICAgICAgICAgICAgIGlmICghZHJvcGRvd24uY2xhc3NMaXN0LmNvbnRhaW5zKCdfaWdub3JlLWhlaWdodCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvdGFsRHJvcGRvd25zSGVpZ2h0ICs9IGdldERyb3Bkb3duQ29udGVudEhlaWdodChkcm9wZG93bik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBmaXhCYWNrZ3JvdW5kUG9zaXRpb24oKSB7XG4gICAgICAgICAgICBjb25zdCBiZ0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RpY2t5LXdyYXAtYmcnKTtcbiAgICAgICAgICAgIGlmICghYmdFbGVtZW50KSByZXR1cm47XG5cbiAgICAgICAgICAgIC8vINCS0LjQutC+0YDQuNGB0YLQvtCy0YPRlNC80L4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lINC00LvRjyDQv9C70LDQstC90L7Qs9C+INC+0L3QvtCy0LvQtdC90L3Rj1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyDQntGC0YDQuNC80YPRlNC80L4g0L/QvtGC0L7Rh9C90YMg0L/QvtC30LjRhtGW0Y4g0LXQu9C10LzQtdC90YLQsCDQstGW0LTQvdC+0YHQvdC+IHZpZXdwb3J0XG4gICAgICAgICAgICAgICAgY29uc3QgcmVjdCA9IGJnRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyDQntCx0YfQuNGB0LvRjtGU0LzQviDQvdC+0LLRgyDQstC40YHQvtGC0YM6INC/0L7Rh9Cw0YLQutC+0LLQsCDQstC40YHQvtGC0LAgKyDRgdGD0LzQsCDQstC40YHQvtGCINCy0ZbQtNC60YDQuNGC0LjRhSDQtNGA0L7Qv9C00LDRg9C90ZbQslxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0hlaWdodCA9IGluaXRpYWxCYWNrZ3JvdW5kSGVpZ2h0ICE9PSBudWxsIFxuICAgICAgICAgICAgICAgICAgICA/IGluaXRpYWxCYWNrZ3JvdW5kSGVpZ2h0ICsgdG90YWxEcm9wZG93bnNIZWlnaHQgXG4gICAgICAgICAgICAgICAgICAgIDogcmVjdC5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8g0KTRltC60YHRg9GU0LzQviDQv9C+0LfQuNGG0ZbRjiDQstGW0LTQvdC+0YHQvdC+IHZpZXdwb3J0XG4gICAgICAgICAgICAgICAgYmdFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgICAgICAgICBiZ0VsZW1lbnQuc3R5bGUubGVmdCA9IGAke3JlY3QubGVmdCArIChyZWN0LndpZHRoIC8gMil9cHhgO1xuICAgICAgICAgICAgICAgIC8vIGJnRWxlbWVudC5zdHlsZS5ib3R0b20gPSBgJHt3aW5kb3cuaW5uZXJIZWlnaHQgLSByZWN0LmJvdHRvbX1weGA7XG4gICAgICAgICAgICAgICAgYmdFbGVtZW50LnN0eWxlLndpZHRoID0gYCR7cmVjdC53aWR0aH1weGA7XG4gICAgICAgICAgICAgICAgYmdFbGVtZW50LnN0eWxlLmhlaWdodCA9IGAke25ld0hlaWdodH1weGA7XG4gICAgICAgICAgICAgICAgYmdFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKC01MCUpJztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcmVzdG9yZUJhY2tncm91bmRQb3NpdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnN0IGJnRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGlja3ktd3JhcC1iZycpO1xuICAgICAgICAgICAgaWYgKCFiZ0VsZW1lbnQpIHJldHVybjtcblxuICAgICAgICAgICAgLy8g0KHQutC40LTQsNGU0LzQviDRgdGD0LzRgyDQstC40YHQvtGCINC00YDQvtC/0LTQsNGD0L3RltCyXG4gICAgICAgICAgICB0b3RhbERyb3Bkb3duc0hlaWdodCA9IDA7XG5cbiAgICAgICAgICAgIC8vINCS0ZbQtNC90L7QstC70Y7RlNC80L4g0YHRgtCw0L3QtNCw0YDRgtC90LUg0L/QvtC30LjRhtGW0L7QvdGD0LLQsNC90L3Rj1xuICAgICAgICAgICAgYmdFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJyc7XG4gICAgICAgICAgICBiZ0VsZW1lbnQuc3R5bGUubGVmdCA9ICcnO1xuICAgICAgICAgICAgYmdFbGVtZW50LnN0eWxlLmJvdHRvbSA9ICcnO1xuICAgICAgICAgICAgYmdFbGVtZW50LnN0eWxlLndpZHRoID0gJyc7XG4gICAgICAgICAgICBiZ0VsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJyc7XG4gICAgICAgICAgICBiZ0VsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gJyc7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBxdWlja0NoZWNrQW5kUmVuZGVyKCkge1xuICAgICAgICAgICAgLy8g0IbQvdGW0YbRltCw0LvRltC30YPRlNC80L4g0LLQuNGB0L7RgtC4INGB0YLQvtGA0ZbQvdC60Lgg0L3QsCDQvtGB0L3QvtCy0ZYgdmlld3BvcnQg0YLQsCDRhdC10LTQtdGA0LBcbiAgICAgICAgICAgIC8vIGluaXRQYWdlSGVpZ2h0KCk7XG5cbiAgICAgICAgICAgIC8vINCh0YLQstC+0YDRjtGU0LzQviDQtdC70LXQvNC10L3RgiDRhNC+0L3Rg1xuICAgICAgICAgICAgaW5pdFN0aWNreVdyYXBCYWNrZ3JvdW5kKCk7XG5cbiAgICAgICAgICAgIC8vINCf0LXRgNC10LLRltGA0Y/RlNC80L4g0YHRgtCw0YLRg9GBINC60L7RgNC40YHRgtGD0LLQsNGH0LAg0YLQsCDQstGW0LTQvtCx0YDQsNC20LDRlNC80L4g0LLRltC00L/QvtCy0ZbQtNC90ZYg0LrQvdC+0L/QutC4XG4gICAgICAgICAgICBjaGVja1VzZXJBdXRoKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gLy8g0JfQsNCy0LDQvdGC0LDQttGD0ZTQvNC+INC00LDQvdGWINC60L7RgNC40YHRgtGD0LLQsNGH0ZbQslxuICAgICAgICAgICAgICAgIC8vIHJldHVybiBsb2FkVXNlcnMoXCI/bm9jYWNoZT0xXCIpO1xuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8g0J/QtdGA0LXQstGW0YDRj9GU0LzQviDRh9C4INC/0YDQvtC80L4g0LfQsNCy0LXRgNGI0LXQvdC+XG4gICAgICAgICAgICAgICAgaWYgKGlzUHJvbW9PdmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRucy5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2xvY2snKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJlZGlyZWN0QnRucy5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2xvY2snKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIC8vINCS0ZbQtNC+0LHRgNCw0LbQsNGU0LzQviDQtNCw0L3RliDQutC+0YDQuNGB0YLRg9Cy0LDRh9GW0LIg0LTQu9GPINCw0LrRgtC40LLQvdC+0LPQviDRgtC40LbQvdGPXG4gICAgICAgICAgICAgICAgLy8gaWYgKGFjdGl2ZVdlZWsgJiYgdGFibGVEYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgcmVuZGVyVXNlcnMoYWN0aXZlV2VlaywgdGFibGVEYXRhKTtcbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaW5pdEdhbWVzV2VlaygpO1xuICAgICAgICAgICAgICAgIGluaXRQcm9ncmVzc0JhcigpO1xuICAgICAgICAgICAgICAgIGluaXRQYXJ0aWNpcGF0ZUNhbnZhcygpO1xuICAgICAgICAgICAgICAgIGluaXRTbm93Zmxha2VzQ2FudmFzKCk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChoaWRlTG9hZGVyLCAzMDApO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIEZpeCBkcm9wZG93biBzY3JvbGwgaXNzdWUgLSBwcmV2ZW50IHBhZ2UgZnJvbSBzaGlmdGluZyB1cCB3aGVuIG9wZW5pbmcgZHJvcGRvd25cbiAgICAgICAgICAgIC8vIGFuZCBwcmV2ZW50IGJhY2tncm91bmQgc3RyaXBlcyBmcm9tIGp1bXBpbmdcbiAgICAgICAgICAgIGNvbnN0IGRyb3Bkb3ducyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcm9wZG93bicpO1xuICAgICAgICAgICAgbGV0IG9wZW5Ecm9wZG93bnNDb3VudCA9IDA7XG5cbiAgICAgICAgICAgIC8vINCe0L3QvtCy0LvRjtGU0LzQviDQstC40YHQvtGC0Lgg0L/RgNC4INC30LzRltC90ZYg0YDQvtC30LzRltGA0YMg0LLRltC60L3QsFxuICAgICAgICAgICAgbGV0IHJlc2l6ZVRpbWVvdXQ7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHJlc2l6ZVRpbWVvdXQpO1xuICAgICAgICAgICAgICAgIHJlc2l6ZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaW5pdFBhZ2VIZWlnaHQoKTtcbiAgICAgICAgICAgICAgICAgICAgaW5pdFBhcnRpY2lwYXRlQ2FudmFzKCk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyDQntC90L7QstC70Y7RlNC80L4g0L/QvtGH0LDRgtC60L7QstGDINCy0LjRgdC+0YLRgyDRhNC+0L3RgyDQv9GA0Lgg0LfQvNGW0L3RliDRgNC+0LfQvNGW0YDRgyDQtdC60YDQsNC90YNcbiAgICAgICAgICAgICAgICAgICAgLy8g0J7RgtGA0LjQvNGD0ZTQvNC+INCx0LDQt9C+0LLRgyDQstC40YHQvtGC0YMg0LcgQ1NTICjQsdC10Lcg0YPRgNCw0YXRg9Cy0LDQvdC90Y8g0LTRgNC+0L/QtNCw0YPQvdGW0LIpXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJnRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGlja3ktd3JhcC1iZycpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYmdFbGVtZW50ICYmIG9wZW5Ecm9wZG93bnNDb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDQotC40LzRh9Cw0YHQvtCy0L4g0YHQutC40LTQsNGU0LzQviDQstC40YHQvtGC0YMg0LTQu9GPINC+0YLRgNC40LzQsNC90L3RjyDQsdCw0LfQvtCy0L7Qs9C+INC30L3QsNGH0LXQvdC90Y9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZW1wSGVpZ2h0ID0gYmdFbGVtZW50LnN0eWxlLmhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZ0VsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGJnRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbEJhY2tncm91bmRIZWlnaHQgPSBwYXJzZUZsb2F0KGNvbXB1dGVkU3R5bGUuaGVpZ2h0KSB8fCAxMzUwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJnRWxlbWVudC5zdHlsZS5oZWlnaHQgPSB0ZW1wSGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vINCe0L3QvtCy0LvRjtGU0LzQviDQv9C+0LfQuNGG0ZbRjiDRhNC+0L3RgyDRj9C60YnQviDQtNGA0L7Qv9C00LDRg9C9INCy0ZbQtNC60YDQuNGC0LjQuVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BlbkRyb3Bkb3duc0NvdW50ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVjYWxjdWxhdGVEcm9wZG93bnNIZWlnaHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpeEJhY2tncm91bmRQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm9yaWVudGF0aW9uY2hhbmdlXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaW5pdFBhZ2VIZWlnaHQoKTtcbiAgICAgICAgICAgICAgICAgICAgaW5pdFBhcnRpY2lwYXRlQ2FudmFzKCk7XG4gICAgICAgICAgICAgICAgICAgIGluaXRTbm93Zmxha2VzQ2FudmFzKCk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyDQntC90L7QstC70Y7RlNC80L4g0L/QvtGH0LDRgtC60L7QstGDINCy0LjRgdC+0YLRgyDRhNC+0L3RgyDQv9GA0Lgg0LfQvNGW0L3RliDQvtGA0ZbRlNC90YLQsNGG0ZbRl1xuICAgICAgICAgICAgICAgICAgICAvLyDQntGC0YDQuNC80YPRlNC80L4g0LHQsNC30L7QstGDINCy0LjRgdC+0YLRgyDQtyBDU1MgKNCx0LXQtyDRg9GA0LDRhdGD0LLQsNC90L3RjyDQtNGA0L7Qv9C00LDRg9C90ZbQsilcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYmdFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0aWNreS13cmFwLWJnJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChiZ0VsZW1lbnQgJiYgb3BlbkRyb3Bkb3duc0NvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vINCi0LjQvNGH0LDRgdC+0LLQviDRgdC60LjQtNCw0ZTQvNC+INCy0LjRgdC+0YLRgyDQtNC70Y8g0L7RgtGA0LjQvNCw0L3QvdGPINCx0LDQt9C+0LLQvtCz0L4g0LfQvdCw0YfQtdC90L3Rj1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlbXBIZWlnaHQgPSBiZ0VsZW1lbnQuc3R5bGUuaGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJnRWxlbWVudC5zdHlsZS5oZWlnaHQgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wdXRlZFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoYmdFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsQmFja2dyb3VuZEhlaWdodCA9IHBhcnNlRmxvYXQoY29tcHV0ZWRTdHlsZS5oZWlnaHQpIHx8IDEzNTA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmdFbGVtZW50LnN0eWxlLmhlaWdodCA9IHRlbXBIZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8g0J7QvdC+0LLQu9GO0ZTQvNC+INC/0L7Qt9C40YbRltGOINGE0L7QvdGDINGP0LrRidC+INC00YDQvtC/0LTQsNGD0L0g0LLRltC00LrRgNC40YLQuNC5XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcGVuRHJvcGRvd25zQ291bnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWNhbGN1bGF0ZURyb3Bkb3duc0hlaWdodCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZml4QmFja2dyb3VuZFBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGRyb3Bkb3ducy5mb3JFYWNoKChkcm9wZG93bikgPT4ge1xuICAgICAgICAgICAgICAgIC8vINCX0LHQtdGA0ZbQs9Cw0ZTQvNC+INCy0LjRgdC+0YLRgyDQtNGA0L7Qv9C00LDRg9C90LAg0LTQu9GPINC60L7QttC90L7Qs9C+INC+0LrRgNC10LzQvlxuICAgICAgICAgICAgICAgIGxldCBkcm9wZG93bkhlaWdodCA9IDA7XG4gICAgICAgICAgICAgICAgY29uc3QgaXNJZ25vcmVkID0gZHJvcGRvd24uY2xhc3NMaXN0LmNvbnRhaW5zKCdfaWdub3JlLWhlaWdodCcpO1xuXG4gICAgICAgICAgICAgICAgZHJvcGRvd24uYWRkRXZlbnRMaXN0ZW5lcigndG9nZ2xlJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub3Blbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRHJvcGRvd24gaXMgb3BlbmluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgb3BlbkRyb3Bkb3duc0NvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wZG93bkhlaWdodCA9IGdldERyb3Bkb3duQ29udGVudEhlaWdodCh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzSWdub3JlZCAmJiBkcm9wZG93bkhlaWdodCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxEcm9wZG93bnNIZWlnaHQgKz0gZHJvcGRvd25IZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpeEJhY2tncm91bmRQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN1bW1hcnkgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJ3N1bW1hcnknKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3VtbWFyeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmYXZQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhdi1wYWdlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmF2UGFnZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3VtbWFyeVJlY3QgPSBzdW1tYXJ5LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN1bW1hcnlSZWN0LnRvcCA8IDUwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2Nyb2xsRGVsdGEgPSBzdW1tYXJ5UmVjdC50b3AgLSAxMDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFNjcm9sbFRvcCA9IGZhdlBhZ2Uuc2Nyb2xsVG9wO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldFNjcm9sbFRvcCA9IGN1cnJlbnRTY3JvbGxUb3AgKyBzY3JvbGxEZWx0YTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhdlBhZ2Uuc2Nyb2xsVG8oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiBNYXRoLm1heCgwLCB0YXJnZXRTY3JvbGxUb3ApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNGP0ZTQvNC+INCy0LjQtNC40LzRltGB0YLRjCDQstGW0LTQutGA0LjRgtC+0LPQviDQtNGA0L7Qv9C00LDRg9C90LBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRyb3Bkb3duSGVpZ2h0ID0gdGhpcy5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkcm9wZG93blRvcCA9IHN1bW1hcnlSZWN0LnRvcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRyb3Bkb3duQm90dG9tID0gZHJvcGRvd25Ub3AgKyBkcm9wZG93bkhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZpZXdwb3J0SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDQktC40LfQvdCw0YfQsNGU0LzQviDQstC40LTQuNC80YMg0YfQsNGB0YLQuNC90YMg0LTRgNC+0L/QtNCw0YPQvdCwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2aXNpYmxlVG9wID0gTWF0aC5tYXgoMCwgZHJvcGRvd25Ub3ApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmlzaWJsZUJvdHRvbSA9IE1hdGgubWluKHZpZXdwb3J0SGVpZ2h0LCBkcm9wZG93bkJvdHRvbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2aXNpYmxlSGVpZ2h0ID0gTWF0aC5tYXgoMCwgdmlzaWJsZUJvdHRvbSAtIHZpc2libGVUb3ApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDQoNC+0LfRgNCw0YXQvtCy0YPRlNC80L4g0LLRltC00YHQvtGC0L7QuiDQstC40LTQuNC80L7RgdGC0ZZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZpc2libGVQZXJjZW50YWdlID0gZHJvcGRvd25IZWlnaHQgPiAwIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gKHZpc2libGVIZWlnaHQgLyBkcm9wZG93bkhlaWdodCkgKiAxMDAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDQr9C60YnQviDQstC40LTQuNC80L4g0LzQtdC90YjQtSA0MCUgLSDQv9GA0L7RgdC60YDQvtC70LjRgtC4INC90LAg0LfQsNC70LjRiNC+0Log0LLQuNGB0L7RgtC4INGP0LrQuNC5INGB0YXQvtCy0LDQstGB0Y9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2aXNpYmxlUGVyY2VudGFnZSA8IDQwICYmIGRyb3Bkb3duSGVpZ2h0ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vINCg0L7Qt9GA0LDRhdC+0LLRg9GU0LzQviDRgdC60ZbQu9GM0LrQuCDRgdGF0L7QstCw0LvQvtGB0Y8g0LfQstC10YDRhdGDXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaGlkZGVuVG9wID0gZHJvcGRvd25Ub3AgPCAwID8gTWF0aC5hYnMoZHJvcGRvd25Ub3ApIDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDQoNC+0LfRgNCw0YXQvtCy0YPRlNC80L4g0YHQutGW0LvRjNC60Lgg0YHRhdC+0LLQsNC70L7RgdGPINC30L3QuNC30YNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBoaWRkZW5Cb3R0b20gPSBkcm9wZG93bkJvdHRvbSA+IHZpZXdwb3J0SGVpZ2h0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGRyb3Bkb3duQm90dG9tIC0gdmlld3BvcnRIZWlnaHQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDQn9GA0L7RgdC60YDQvtC70Y7RlNC80L4g0L3QsCDQsdGW0LvRjNGI0LjQuSDQtyDRhtC40YUg0LfQvdCw0YfQtdC90YwgKNGJ0L7QsSDQv9C+0LrQsNC30LDRgtC4INCx0ZbQu9GM0YjQtSDQutC+0L3RgtC10L3RgtGDKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNjcm9sbERlbHRhID0gaGlkZGVuVG9wID4gaGlkZGVuQm90dG9tID8gaGlkZGVuVG9wIDogLWhpZGRlbkJvdHRvbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50U2Nyb2xsVG9wID0gZmF2UGFnZS5zY3JvbGxUb3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0U2Nyb2xsVG9wID0gY3VycmVudFNjcm9sbFRvcCArIHNjcm9sbERlbHRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vINCS0LjQutC+0YDQuNGB0YLQvtCy0YPRlNC80L4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lINC00LvRjyDQv9C70LDQstC90L7Qs9C+INGB0LrRgNC+0LvRg1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhdlBhZ2Uuc2Nyb2xsVG8oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiBNYXRoLm1heCgwLCB0YXJnZXRTY3JvbGxUb3ApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMTApO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRHJvcGRvd24gaXMgY2xvc2luZ1xuICAgICAgICAgICAgICAgICAgICAgICAgb3BlbkRyb3Bkb3duc0NvdW50LS07XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vINCS0ZbQtNC90ZbQvNCw0ZTQvNC+INCy0LjRgdC+0YLRgyDRhtGM0L7Qs9C+INC00YDQvtC/0LTQsNGD0L3QsCDQstGW0LQg0LfQsNCz0LDQu9GM0L3QvtGXINGB0YPQvNC4INGC0ZbQu9GM0LrQuCDRj9C60YnQviDQstC+0L3QsCDQsdGD0LvQsCDQtNC+0LTQsNC90LBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkcm9wZG93bkhlaWdodCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3RhbERyb3Bkb3duc0hlaWdodCAtPSBkcm9wZG93bkhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duSGVpZ2h0ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g0J7QvdC+0LLQu9GO0ZTQvNC+INC/0L7Qt9C40YbRltGOINGE0L7QvdGDXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3BlbkRyb3Bkb3duc0NvdW50ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vINCv0LrRidC+INGUINGW0L3RiNGWINCy0ZbQtNC60YDQuNGC0ZYg0LTRgNC+0L/QtNCw0YPQvdC4LCDQvtC90L7QstC70Y7RlNC80L4g0L/QvtC30LjRhtGW0Y5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZml4QmFja2dyb3VuZFBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMTApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDQktGW0LTQvdC+0LLQu9GO0ZTQvNC+INC/0L7Qt9C40YbRltGOINGE0L7QvdGDINGC0ZbQu9GM0LrQuCDRj9C60YnQviDQstGB0ZYg0LTRgNC+0L/QtNCw0YPQvdC4INC30LDQutGA0LjRgtGWXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3RvcmVCYWNrZ3JvdW5kUG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0J7QsdGA0L7QsdC90LjQuiDQutC70ZbQutGDINC90LAg0LrQvdC+0L/QutC4INGD0YfQsNGB0YLRllxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQuY2xvc2VzdCgnLnBhcnQtYnRuJykpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhdGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgd2FpdEZvclVzZXJJZCA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0cnlEZXRlY3RVc2VySWQoKTtcbiAgICAgICAgICAgICAgICBpZiAodXNlcklkIHx8IGF0dGVtcHRzID49IG1heEF0dGVtcHRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHF1aWNrQ2hlY2tBbmRSZW5kZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXR0ZW1wdHMrKztcbiAgICAgICAgICAgIH0sIGF0dGVtcHRJbnRlcnZhbCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGF3YWl0IHdhaXRGb3JVc2VySWQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tVc2VyQXV0aCgpIHtcbiAgICAgICAgLy8g0KHQtdC70LXQutGC0L7RgNC4INC00LvRjyDQutC90L7Qv9C+0LpcbiAgICAgICAgY29uc3QgdW5hdXRoTXNncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy51bmF1dGgtbXNnJyk7XG4gICAgICAgIC8vIHBhcnRCdG4gLSDQutC90L7Qv9C60Lgg0YPRh9Cw0YHRgtGWICjQvNCw0Y7RgtGMIGRhdGEtYnV0dG9uINC3IFwicGFydEJ0blwiINCw0LHQviDQutC70LDRgSAucGFydC1idG4pXG4gICAgICAgIGNvbnN0IHBhcnRpY2lwYXRlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYXJ0LWJ0biwgW2RhdGEtYnV0dG9uKj1cInBhcnRCdG5cIl0sIFtkYXRhLWJ1dHRvbio9XCJwYXJ0aWNpcGF0ZUJ0blwiXScpO1xuICAgICAgICAvLyBwbGF5QnRuIC0g0LrQvdC+0L/QutC4INC/0LXRgNC10YXQvtC00YMg0L3QsCDQtNC10L/QvtC30LjRgi/QutCw0LfQuNC90L4v0YHQv9C+0YDRgiAo0LzQsNGO0YLRjCBkYXRhLWJ1dHRvbiDQtyBcInBsYXlCdG5cIiwgXCJwbGF5Q2FzaW5vQnRuXCIsIFwiYmV0U3BvcnRCdG5cIilcbiAgICAgICAgY29uc3QgcmVkaXJlY3RCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtYnV0dG9uKj1cInBsYXlCdG5cIl0sIFtkYXRhLWJ1dHRvbio9XCJwbGF5Q2FzaW5vQnRuXCJdLCBbZGF0YS1idXR0b24qPVwiYmV0U3BvcnRCdG5cIl0nKTtcblxuICAgICAgICBpZiAodXNlcklkKSB7XG4gICAgICAgICAgICAvLyDQn9GA0LjRhdC+0LLRg9GU0LzQviDQutC90L7Qv9C60Lgg0LTQu9GPINC90LXQsNCy0YLQvtGA0LjQt9C+0LLQsNC90LjRhVxuICAgICAgICAgICAgZm9yIChjb25zdCB1bmF1dGhNZXMgb2YgdW5hdXRoTXNncykge1xuICAgICAgICAgICAgICAgIHVuYXV0aE1lcy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vINCf0LXRgNC10LLRltGA0Y/RlNC80L4g0YHRgtCw0YLRg9GBINC60L7RgNC40YHRgtGD0LLQsNGH0LAg0YfQtdGA0LXQtyBBUElcbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0KGAvZmF2dXNlci8ke3VzZXJJZH0/bm9jYWNoZT0xYClcbiAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLnVzZXJpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g0JrQvtGA0LjRgdGC0YPQstCw0Ycg0LLQtdGA0LjRhNGW0LrQvtCy0LDQvdC40LkgLSDQv9C+0LrQsNC30YPRlNC80L4g0LrQvdC+0L/QutC4INC/0LXRgNC10YXQvtC00YMgKHBsYXlCdG4pXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZGlyZWN0QnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNWZXJpZmllZFVzZXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g0JrQvtGA0LjRgdGC0YPQstCw0Ycg0L3QtSDQstC10YDQuNGE0ZbQutC+0LLQsNC90LjQuSAtINC/0L7QutCw0LfRg9GU0LzQviDQutC90L7Qv9C60Lgg0YPRh9Cw0YHRgtGWIChwYXJ0QnRuKVxuICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhdGVCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWRpcmVjdEJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVmVyaWZpZWRVc2VyID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjaGVja2luZyB1c2VyIGF1dGg6JywgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgLy8g0KMg0LLQuNC/0LDQtNC60YMg0L/QvtC80LjQu9C60Lgg0L/QvtC60LDQt9GD0ZTQvNC+INC60L3QvtC/0LrQuCDRg9GH0LDRgdGC0ZZcbiAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhdGVCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSk7XG4gICAgICAgICAgICAgICAgICAgIHJlZGlyZWN0QnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuICAgICAgICAgICAgICAgICAgICBpc1ZlcmlmaWVkVXNlciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vINCa0L7RgNC40YHRgtGD0LLQsNGHINC90LUg0LDQstGC0L7RgNC40LfQvtCy0LDQvdC40LkgLSDQv9C+0LrQsNC30YPRlNC80L4g0YLRltC70YzQutC4INC60L3QvtC/0LrQuCDQstGF0L7QtNGDXG4gICAgICAgICAgICBmb3IgKGxldCByZWRpcmVjdEJ0biBvZiByZWRpcmVjdEJ0bnMpIHtcbiAgICAgICAgICAgICAgICByZWRpcmVjdEJ0bi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBwYXJ0aWNpcGF0ZUJ0biBvZiBwYXJ0aWNpcGF0ZUJ0bnMpIHtcbiAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHVuYXV0aE1lcyBvZiB1bmF1dGhNc2dzKSB7XG4gICAgICAgICAgICAgICAgdW5hdXRoTWVzLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlzVmVyaWZpZWRVc2VyID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvYWRUcmFuc2xhdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiByZXF1ZXN0KGAvbmV3LXRyYW5zbGF0ZXMvJHtsb2NhbGV9YClcbiAgICAgICAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgICAgIGkxOG5EYXRhID0ganNvbjtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGUoKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBtdXRhdGlvbk9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKG11dGF0aW9ucykge1xuICAgICAgICAgICAgICAgIC8vICAgICBtdXRhdGlvbk9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgdHJhbnNsYXRlKCk7XG4gICAgICAgICAgICAgICAgLy8gICAgIG11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXROb2RlLCB7IGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgICAgICAgICAvLyBtdXRhdGlvbk9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoYXJkY29yZVRlbm5pc1wiKSwge1xuICAgICAgICAgICAgICAgIC8vICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgLy8gICAgIHN1YnRyZWU6IHRydWVcbiAgICAgICAgICAgICAgICAvLyB9KTtcblxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVwb3J0RXJyb3IoZXJyKSB7XG4gICAgICAgIGNvbnN0IHJlcG9ydERhdGEgPSB7XG4gICAgICAgICAgICBvcmlnaW46IHdpbmRvdy5sb2NhdGlvbi5ocmVmLFxuICAgICAgICAgICAgdXNlcmlkOiB1c2VySWQsXG4gICAgICAgICAgICBlcnJvclRleHQ6IGVycj8uZXJyb3IgfHwgZXJyPy50ZXh0IHx8IGVycj8ubWVzc2FnZSB8fCAnVW5rbm93biBlcnJvcicsXG4gICAgICAgICAgICB0eXBlOiBlcnI/Lm5hbWUgfHwgJ1Vua25vd25FcnJvcicsXG4gICAgICAgICAgICBzdGFjazogZXJyPy5zdGFjayB8fCAnJ1xuICAgICAgICB9O1xuXG4gICAgICAgIGZldGNoKCdodHRwczovL2Zhdi1wcm9tLmNvbS9hcGktY21zL3JlcG9ydHMvYWRkJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcG9ydERhdGEpXG4gICAgICAgIH0pLmNhdGNoKGNvbnNvbGUud2Fybik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdHJhbnNsYXRlKCkge1xuICAgICAgICBjb25zdCBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRyYW5zbGF0ZV0nKVxuICAgICAgICBpZiAoZWxlbXMgJiYgZWxlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZih0cmFuc2xhdGVTdGF0ZSl7XG4gICAgICAgICAgICAgICAgZWxlbXMuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gZWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgICAgICAgICAgICAgICAgIGVsZW0uaW5uZXJIVE1MID0gaTE4bkRhdGFba2V5XSB8fCAnKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiAgIGtleTogICcgKyBrZXk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpMThuRGF0YVtrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRyYW5zbGF0aW9uIHdvcmtzIVwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChsb2NhbGUgPT09ICdlbicpIHtcbiAgICAgICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5hZGQoJ2VuJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmVmcmVzaExvY2FsaXplZENsYXNzKG1haW5QYWdlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWZyZXNoTG9jYWxpemVkQ2xhc3MoZWxlbWVudCkge1xuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IGxhbmcgb2YgWydocicsICdlbiddKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUobGFuZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGxvY2FsZSk7XG4gICAgfVxuXG5cblxuXG4gICAgZnVuY3Rpb24gcmVuZGVyVXNlcnMod2Vla051bSwgdXNlckRhdGEgPSBbXSkge1xuICAgICAgICB3ZWVrTnVtID0gTnVtYmVyKHdlZWtOdW0pO1xuICAgICAgICBjb25zdCB3ZWVrT2JqID0gdXNlckRhdGEuZmluZCh3ID0+IHcud2VlayA9PT0gd2Vla051bSk7XG4gICAgICAgIGlmICghd2Vla09iaiB8fCAhd2Vla09iai5kYXRhIHx8ICFBcnJheS5pc0FycmF5KHdlZWtPYmouZGF0YS51c2VycykpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ9Cd0LXQstGW0YDQvdCwINGB0YLRgNGD0LrRgtGD0YDQsCDQtNCw0L3QuNGFJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpc1N0YWdlRW5kZWQgPSB3ZWVrT2JqLmRhdGEuaXNTdGFnZUVuZGVkXG5cbiAgICAgICAgdXNlckRhdGEgPSB3ZWVrT2JqLmRhdGEudXNlcnM7XG5cbiAgICAgICAgY29uc3Qgd2lubmVyQWRkaXRpb25hbFByaXplID0gdXNlckRhdGEuZmluZCh1ID0+IHtcbiAgICAgICAgICAgIGlmKHUud2lubmVyID09PSB0cnVlKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRVc2VyID0gdXNlckRhdGEuZmluZCh1c2VyID0+IHVzZXIudXNlcmlkID09PSB1c2VySWQpO1xuXG4gICAgICAgIGlmKHVzZXJJZCAmJiAhY3VycmVudFVzZXIgJiYgaXNWZXJpZmllZFVzZXIpe1xuICAgICAgICAgICAgdXNlckRhdGEgPSBbLi4udXNlckRhdGEsIHt1c2VyaWQ6IHVzZXJJZCwgcG9pbnRzOiAwfV1cbiAgICAgICAgfVxuICAgICAgICBwb3B1bGF0ZVVzZXJzVGFibGUodXNlckRhdGEsIHVzZXJJZCwgd2Vla051bSwgY3VycmVudFVzZXIsIGlzVmVyaWZpZWRVc2VyLCBpc1N0YWdlRW5kZWQsIHdpbm5lckFkZGl0aW9uYWxQcml6ZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcG9wdWxhdGVVc2Vyc1RhYmxlKHVzZXJzLCBjdXJyZW50VXNlcklkLCB3ZWVrLCBjdXJyZW50VXNlciwgaXNWZXJpZmllZFVzZXIsIGlzU3RhZ2VFbmRlZCwgd2lubmVyQWRkaXRpb25hbFByaXplKSB7XG4gICAgICAgIGlmICghdXNlcnM/Lmxlbmd0aCkgcmV0dXJuO1xuICAgICAgICByZXN1bHRzVGFibGUuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHJlc3VsdHNUYWJsZU90aGVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBzZWNvbmRUYWJsZU90aGVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBzZWNvbmRUYWJsZS5pbm5lckhUTUwgPSAnJztcblxuXG4gICAgICAgIGNvbnN0IGlzVG9wQ3VycmVudFVzZXIgPSBjdXJyZW50VXNlciAmJiB1c2Vycy5zbGljZSgwLCAxMCkuc29tZSh1c2VyID0+IHVzZXIudXNlcmlkID09PSBjdXJyZW50VXNlcklkKTtcblxuICAgICAgICBjb25zdCB0b3BVc2Vyc0xlbmd0aCA9ICF1c2VySWQgfHwgaXNUb3BDdXJyZW50VXNlciAgPyAxMCA6IDEwO1xuXG4gICAgICAgIGNvbnN0IHRvcFVzZXJzID0gdXNlcnMuc2xpY2UoMCwgdG9wVXNlcnNMZW5ndGgpO1xuXG4gICAgICAgIHRvcFVzZXJzLmZvckVhY2godXNlciA9PiB7XG4gICAgICAgICAgICBkaXNwbGF5VXNlcih1c2VyLCB1c2VyLnVzZXJpZCA9PT0gY3VycmVudFVzZXJJZCwgcmVzdWx0c1RhYmxlLCB0b3BVc2VycywgaXNUb3BDdXJyZW50VXNlciwgd2Vlayk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZihpc1ZlcmlmaWVkVXNlciAmJiAhY3VycmVudFVzZXIpIHtcbiAgICAgICAgICAgIGRpc3BsYXlVc2VyKGN1cnJlbnRVc2VyLCB0cnVlLCByZXN1bHRzVGFibGVPdGhlciwgdXNlcnMsIGZhbHNlLCB3ZWVrKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaXNUb3BDdXJyZW50VXNlciAmJiBjdXJyZW50VXNlcikge1xuICAgICAgICAgICAgZGlzcGxheVVzZXIoY3VycmVudFVzZXIsIHRydWUsIHJlc3VsdHNUYWJsZU90aGVyLCB1c2VycywgZmFsc2UsIHdlZWspO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzcGxheVVzZXIodXNlciwgaXNDdXJyZW50VXNlciwgdGFibGUsIHVzZXJzLCBpc1RvcEN1cnJlbnRVc2VyLCB3ZWVrKSB7XG5cbiAgICAgICAgY29uc3QgcmVuZGVyUm93ID0gKHVzZXJEYXRhLCBvcHRpb25zID0ge30pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgaGlnaGxpZ2h0ID0gZmFsc2UsIG5laWdoYm9yID0gZmFsc2UgfSA9IG9wdGlvbnM7XG4gICAgICAgICAgICBjb25zdCB1c2VyUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoJ3RhYmxlX19yb3cnKTtcblxuICAgICAgICAgICAgY29uc3QgdXNlclBsYWNlID0gdXNlcnMuaW5kZXhPZih1c2VyRGF0YSkgKyAxO1xuICAgICAgICAgICAgY29uc3QgcHJpemVLZXkgPSBkZWJ1ZyA/IG51bGwgOiBnZXRQcml6ZVRyYW5zbGF0aW9uS2V5KHVzZXJQbGFjZSwgd2Vlayk7XG5cbiAgICAgICAgICAgIGlmICh1c2VyUGxhY2UgPD0gMykge1xuICAgICAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZChgcGxhY2Uke3VzZXJQbGFjZX1gKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGhpZ2hsaWdodCB8fCBpc0N1cnJlbnRVc2VyICYmICFuZWlnaGJvcikge1xuICAgICAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZCgneW91Jyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5laWdoYm9yKSB7XG4gICAgICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKCdfbmVpZ2hib3InKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdXNlclJvdy5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHt1c2VyUGxhY2UgPCAxMCA/ICcwJyArIHVzZXJQbGFjZSA6IHVzZXJQbGFjZX1cbiAgICAgICAgICAgICAgICAke2lzQ3VycmVudFVzZXIgJiYgIW5laWdoYm9yID8gJzxzcGFuIGNsYXNzPVwieW91XCI+JyArIHRyYW5zbGF0ZUtleShcInlvdVwiKSArICc8L3NwYW4+JyA6ICcnfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHtpc0N1cnJlbnRVc2VyICYmICFuZWlnaGJvciA/IHVzZXJEYXRhLnVzZXJpZCA6IG1hc2tVc2VySWQodXNlckRhdGEudXNlcmlkKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuICAgICAgICAgICAgICAgICR7TnVtYmVyKHVzZXJEYXRhLnBvaW50cykudG9GaXhlZCgyKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuICAgICAgICAgICAgICAgICR7cHJpemVLZXkgPyB0cmFuc2xhdGVLZXkocHJpemVLZXkpIDogJyAtICd9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcblxuICAgICAgICAgICAgdGFibGUuYXBwZW5kKHVzZXJSb3cpO1xuICAgICAgICB9O1xuICAgICAgICBpZiAoaXNDdXJyZW50VXNlciAmJiAhaXNUb3BDdXJyZW50VXNlcikge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB1c2Vycy5pbmRleE9mKHVzZXIpO1xuICAgICAgICAgICAgaWYgKHVzZXJzW2luZGV4IC0gMV0pIHtcbiAgICAgICAgICAgICAgICByZW5kZXJSb3codXNlcnNbaW5kZXggLSAxXSwgeyBuZWlnaGJvcjogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlbmRlclJvdyh1c2VyLCB7IGhpZ2hsaWdodDogdHJ1ZSB9KTtcbiAgICAgICAgICAgIGlmICh1c2Vyc1tpbmRleCArIDFdKSB7XG4gICAgICAgICAgICAgICAgcmVuZGVyUm93KHVzZXJzW2luZGV4ICsgMV0sIHsgbmVpZ2hib3I6IHRydWUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZW5kZXJSb3codXNlcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0UHJvZ3Jlc3NCYXIoKSB7XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9ncmVzc0JhckNhbnZhcycpO1xuICAgICAgICBjb25zdCBwZXJjZW50RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9ncmVzc1BlcmNlbnQnKTtcbiAgICAgICAgaWYgKCFjYW52YXMgfHwgIXBlcmNlbnRFbGVtZW50KSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIFxuICAgICAgICAvLyDQmtC+0L3RgdGC0LDQvdGC0LhcbiAgICAgICAgY29uc3QgYmFySGVpZ2h0ID0gMjA7IC8vINCS0LjRgdC+0YLQsCDQv9GA0L7Qs9GA0LXRgS3QsdCw0YDRg1xuICAgICAgICBjb25zdCBzZWdtZW50V2lkdGggPSA0OyAvLyDQqNC40YDQuNC90LAg0L7QtNC90L7Qs9C+INGB0LXQs9C80LXQvdGC0LBcbiAgICAgICAgY29uc3Qgc2VnbWVudEhlaWdodCA9IDE0OyAvLyDQktC40YHQvtGC0LAg0L7QtNC90L7Qs9C+INGB0LXQs9C80LXQvdGC0LBcbiAgICAgICAgY29uc3Qgc2VnbWVudEdhcCA9IDI7IC8vINCf0YDQvtC80ZbQttC+0Log0LzRltC2INGB0LXQs9C80LXQvdGC0LDQvNC4XG4gICAgICAgIGNvbnN0IHBhZGRpbmcgPSAyOyAvLyDQktGW0LTRgdGC0YPQvyDQstGW0LQg0LrRgNCw0ZfQslxuICAgICAgICBjb25zdCBzZWdtZW50UmFkaXVzID0gMTsgLy8gQm9yZGVyIHJhZGl1cyDQtNC70Y8g0YHQtdCz0LzQtdC90YLRltCyXG4gICAgICAgIFxuICAgICAgICAvLyDQn9Cw0YDQsNC80LXRgtGA0Lgg0LDQvdGW0LzQsNGG0ZbRlyDQt9Cw0LLQsNC90YLQsNC20LXQvdC90Y9cbiAgICAgICAgbGV0IGN1cnJlbnRQcm9ncmVzcyA9IDE7IC8vINCf0L7Rh9C40L3QsNGU0LzQviDQtyAxJVxuICAgICAgICBjb25zdCB0YXJnZXRQcm9ncmVzcyA9IDEwMDsgLy8g0KbRltC70YzQvtCy0LjQuSDQv9GA0L7Qs9GA0LXRgVxuICAgICAgICBjb25zdCBsb2FkaW5nRHVyYXRpb24gPSAzMDAwOyAvLyDQotGA0LjQstCw0LvRltGB0YLRjCDQt9Cw0LLQsNC90YLQsNC20LXQvdC90Y86IDMg0YHQtdC60YPQvdC00LhcbiAgICAgICAgbGV0IHN0YXJ0VGltZSA9IERhdGUubm93KCk7XG4gICAgICAgIGxldCBhbmltYXRpb25JZCA9IG51bGw7XG4gICAgICAgIGxldCBtYXhTZWdtZW50cyA9IDA7XG4gICAgICAgIGxldCBpc0xvYWRpbmdDb21wbGV0ZSA9IGZhbHNlO1xuICAgICAgICBcbiAgICAgICAgZnVuY3Rpb24gcmVzaXplQ2FudmFzKCkge1xuICAgICAgICAgICAgLy8g0J7RgtGA0LjQvNGD0ZTQvNC+INGA0L7Qt9C80ZbRgNC4INC60L7QvdGC0LXQudC90LXRgNCwXG4gICAgICAgICAgICBjb25zdCBjb250YWluZXIgPSBjYW52YXMucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lcldpZHRoID0gY29udGFpbmVyLm9mZnNldFdpZHRoIHx8IDc2ODtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0JLRgdGC0LDQvdC+0LLQu9GO0ZTQvNC+INGA0L7Qt9C80ZbRgNC4IGNhbnZhc1xuICAgICAgICAgICAgY2FudmFzLndpZHRoID0gY29udGFpbmVyV2lkdGg7XG4gICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gYmFySGVpZ2h0O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQoNC+0LfRgNCw0YXQvtCy0YPRlNC80L4g0LrRltC70YzQutGW0YHRgtGMINGB0LXQs9C80LXQvdGC0ZbQsiwg0YnQviDQv9C+0LzRltGB0YLRj9GC0YzRgdGPXG4gICAgICAgICAgICBjb25zdCBhdmFpbGFibGVXaWR0aCA9IGNvbnRhaW5lcldpZHRoIC0gKHBhZGRpbmcgKiAyKTtcbiAgICAgICAgICAgIGNvbnN0IHNlZ21lbnRXaXRoR2FwID0gc2VnbWVudFdpZHRoICsgc2VnbWVudEdhcDtcbiAgICAgICAgICAgIG1heFNlZ21lbnRzID0gTWF0aC5mbG9vcihhdmFpbGFibGVXaWR0aCAvIHNlZ21lbnRXaXRoR2FwKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0J/QtdGA0LXQvNCw0LvRjNC+0LLRg9GU0LzQviDQtyDQv9C+0YLQvtGH0L3QuNC8INC/0YDQvtCz0YDQtdGB0L7QvFxuICAgICAgICAgICAgaWYgKGN1cnJlbnRQcm9ncmVzcyA+IDApIHtcbiAgICAgICAgICAgICAgICBkcmF3UHJvZ3Jlc3NCYXIoY3VycmVudFByb2dyZXNzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZnVuY3Rpb24gZHJhd1Byb2dyZXNzQmFyKHByb2dyZXNzKSB7XG4gICAgICAgICAgICAvLyDQntGH0LjRidCw0ZTQvNC+IGNhbnZhc1xuICAgICAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQnNCw0LvRjtGU0LzQviDRgNCw0LzQutGDICjQsdGW0LvQuNC5INC/0YDRj9C80L7QutGD0YLQvdC40LopXG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnI0ZGRkZGRic7XG4gICAgICAgICAgICBjdHgubGluZVdpZHRoID0gMTtcbiAgICAgICAgICAgIGN0eC5zdHJva2VSZWN0KDAuNSwgMC41LCBjYW52YXMud2lkdGggLSAxLCBjYW52YXMuaGVpZ2h0IC0gMSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCg0L7Qt9GA0LDRhdC+0LLRg9GU0LzQviDQutGW0LvRjNC60ZbRgdGC0Ywg0LfQsNC/0L7QstC90LXQvdC40YUg0YHQtdCz0LzQtdC90YLRltCyXG4gICAgICAgICAgICBjb25zdCBmaWxsZWRTZWdtZW50cyA9IE1hdGguZmxvb3IoKHByb2dyZXNzIC8gMTAwKSAqIG1heFNlZ21lbnRzKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0JzQsNC70Y7RlNC80L4g0LfQsNC/0L7QstC90LXQvdGWINGB0LXQs9C80LXQvdGC0Lgg0Lcg0LfQsNC+0LrRgNGD0LPQu9C10L3QuNC80Lgg0LrRg9GC0LDQvNC4XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gJyNGRkZGRkYnO1xuICAgICAgICAgICAgY29uc3QgY2VudGVyWSA9IChiYXJIZWlnaHQgLSBzZWdtZW50SGVpZ2h0KSAvIDI7IC8vINCS0LXRgNGC0LjQutCw0LvRjNC90LUg0YbQtdC90YLRgNGD0LLQsNC90L3Rj1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbGxlZFNlZ21lbnRzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCB4ID0gcGFkZGluZyArIGkgKiAoc2VnbWVudFdpZHRoICsgc2VnbWVudEdhcCk7XG4gICAgICAgICAgICAgICAgY29uc3QgeSA9IGNlbnRlclk7XG5cbiAgICAgICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgaWYgKGN0eC5yb3VuZFJlY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g0KHRg9GH0LDRgdC90LjQuSDQvNC10YLQvtC0ICjQv9GW0LTRgtGA0LjQvNGD0ZTRgtGM0YHRjyDQsiDQvdC+0LLQuNGFINCx0YDQsNGD0LfQtdGA0LDRhSlcbiAgICAgICAgICAgICAgICAgICAgY3R4LnJvdW5kUmVjdCh4LCB5LCBzZWdtZW50V2lkdGgsIHNlZ21lbnRIZWlnaHQsIHNlZ21lbnRSYWRpdXMpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEZhbGxiYWNrINC00LvRjyDRgdGC0LDRgNC40YUg0LHRgNCw0YPQt9C10YDRltCyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHIgPSBzZWdtZW50UmFkaXVzO1xuICAgICAgICAgICAgICAgICAgICBjdHgubW92ZVRvKHggKyByLCB5KTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmxpbmVUbyh4ICsgc2VnbWVudFdpZHRoIC0gciwgeSk7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHggKyBzZWdtZW50V2lkdGgsIHksIHggKyBzZWdtZW50V2lkdGgsIHkgKyByKTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmxpbmVUbyh4ICsgc2VnbWVudFdpZHRoLCB5ICsgc2VnbWVudEhlaWdodCAtIHIpO1xuICAgICAgICAgICAgICAgICAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4ICsgc2VnbWVudFdpZHRoLCB5ICsgc2VnbWVudEhlaWdodCwgeCArIHNlZ21lbnRXaWR0aCAtIHIsIHkgKyBzZWdtZW50SGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmxpbmVUbyh4ICsgciwgeSArIHNlZ21lbnRIZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4LCB5ICsgc2VnbWVudEhlaWdodCwgeCwgeSArIHNlZ21lbnRIZWlnaHQgLSByKTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmxpbmVUbyh4LCB5ICsgcik7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHgsIHksIHggKyByLCB5KTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBmdW5jdGlvbiB1cGRhdGVQcm9ncmVzcygpIHtcbiAgICAgICAgICAgIGNvbnN0IGVsYXBzZWQgPSBEYXRlLm5vdygpIC0gc3RhcnRUaW1lO1xuICAgICAgICAgICAgbGV0IHByb2dyZXNzID0gMSArIChlbGFwc2VkIC8gbG9hZGluZ0R1cmF0aW9uKSAqIDk5OyAvLyDQktGW0LQgMSUg0LTQviAxMDAlXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCe0LHQvNC10LbRg9GU0LzQviDQv9GA0L7Qs9GA0LXRgSDQtNC+IDEwMCVcbiAgICAgICAgICAgIGlmIChwcm9ncmVzcyA+PSB0YXJnZXRQcm9ncmVzcykge1xuICAgICAgICAgICAgICAgIHByb2dyZXNzID0gdGFyZ2V0UHJvZ3Jlc3M7XG4gICAgICAgICAgICAgICAgaXNMb2FkaW5nQ29tcGxldGUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjdXJyZW50UHJvZ3Jlc3MgPSBwcm9ncmVzcztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0J7QvdC+0LLQu9GO0ZTQvNC+INCy0ZbQtNC+0LHRgNCw0LbQtdC90L3Rj1xuICAgICAgICAgICAgZHJhd1Byb2dyZXNzQmFyKHByb2dyZXNzKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0J7QvdC+0LLQu9GO0ZTQvNC+INCy0ZbQtNGB0L7RgtC60LggKNGC0ZbQu9GM0LrQuCDRhtGW0LvRliDRh9C40YHQu9CwKVxuICAgICAgICAgICAgY29uc3QgcGVyY2VudCA9IE1hdGguZmxvb3IocHJvZ3Jlc3MpO1xuICAgICAgICAgICAgcGVyY2VudEVsZW1lbnQudGV4dENvbnRlbnQgPSBwZXJjZW50ICsgJyUnO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQn9GA0L7QtNC+0LLQttGD0ZTQvNC+INCw0L3RltC80LDRhtGW0Y4g0LTQviDQt9Cw0LLQtdGA0YjQtdC90L3RjyDQt9Cw0LLQsNC90YLQsNC20LXQvdC90Y9cbiAgICAgICAgICAgIGlmICghaXNMb2FkaW5nQ29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICBhbmltYXRpb25JZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGVQcm9ncmVzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vINCG0L3RltGG0ZbQsNC70ZbQt9GD0ZTQvNC+INGA0L7Qt9C80ZbRgNC4IGNhbnZhc1xuICAgICAgICByZXNpemVDYW52YXMoKTtcbiAgICAgICAgXG4gICAgICAgIC8vINCe0LHRgNC+0LHQutCwINC30LzRltC90Lgg0YDQvtC30LzRltGA0YMg0LLRltC60L3QsFxuICAgICAgICBsZXQgcmVzaXplVGltZW91dDtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChyZXNpemVUaW1lb3V0KTtcbiAgICAgICAgICAgIHJlc2l6ZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICByZXNpemVDYW52YXMoKTtcbiAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgLy8g0IbQvdGW0YbRltCw0LvRltC30LDRhtGW0Y8g0LDQvdGW0LzQsNGG0ZbRlyDQv9C+0Y/QstC4INGW0LrQvtC90L7QulxuICAgICAgICBpbml0SWNvbnNBbmltYXRpb24obG9hZGluZ0R1cmF0aW9uKTtcbiAgICAgICAgXG4gICAgICAgIC8vINCX0LDQv9GD0YHQutCw0ZTQvNC+INCw0L3RltC80LDRhtGW0Y4g0Lcg0L3QtdCy0LXQu9C40LrQvtGOINC30LDRgtGA0LjQvNC60L7RjiDQtNC70Y8g0LrQvtGA0LXQutGC0L3QvtCz0L4g0YDQvtC30YDQsNGF0YPQvdC60YMg0YDQvtC30LzRltGA0ZbQslxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICByZXNpemVDYW52YXMoKTtcbiAgICAgICAgICAgICAgICBzdGFydFRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZVByb2dyZXNzKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8g0JDQvdGW0LzQsNGG0ZbRjyDQv9C+0Y/QstC4INGW0LrQvtC90L7QuiDQv9C+INGH0LXRgNC30ZYg0L/RltC0INGH0LDRgSDQt9Cw0LLQsNC90YLQsNC20LXQvdC90Y9cbiAgICBmdW5jdGlvbiBpbml0SWNvbnNBbmltYXRpb24oZHVyYXRpb24pIHtcbiAgICAgICAgY29uc3QgaWNvbnMgPSBbXG4gICAgICAgICAgICAnLndlbGNvbWVfX2RlY29yLWl0ZW0uX2dhbWVwYWQnLFxuICAgICAgICAgICAgJy53ZWxjb21lX19kZWNvci1pdGVtLl9jaGlwJyxcbiAgICAgICAgICAgICcud2VsY29tZV9fZGVjb3ItaXRlbS5fY29pbicsXG4gICAgICAgICAgICAnLndlbGNvbWVfX2RlY29yLWl0ZW0uX2JhbGwnLFxuICAgICAgICAgICAgJy53ZWxjb21lX19kZWNvci1pdGVtLl9jdXAnLFxuICAgICAgICAgICAgJy53ZWxjb21lX19kZWNvci1pdGVtLl9jdWJlJyxcbiAgICAgICAgICAgICcud2VsY29tZV9fZGVjb3ItaXRlbS5fZ2xvYmUnXG4gICAgICAgIF07XG5cbiAgICAgICAgLy8g0JfQsdC10YDRltCz0LDRlNC80L4g0L7RgNC40LPRltC90LDQu9GM0L3RliB0cmFuc2Zvcm0g0LTQu9GPINC60L7QttC90L7RlyDRltC60L7QvdC60LhcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxUcmFuc2Zvcm1zID0gbmV3IE1hcCgpO1xuICAgICAgICBjb25zdCBoYWRJbmxpbmVUcmFuc2Zvcm0gPSBuZXcgTWFwKCk7XG5cbiAgICAgICAgLy8g0KHQv9C+0YfQsNGC0LrRgyDQv9GA0LjRhdC+0LLRg9GU0LzQviDQstGB0ZYg0ZbQutC+0L3QutC4XG4gICAgICAgIGljb25zLmZvckVhY2goc2VsZWN0b3IgPT4ge1xuICAgICAgICAgICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgICAgICAgICAgaWYgKGljb24pIHtcbiAgICAgICAgICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNGP0ZTQvNC+LCDRh9C4INCx0YPQsiDQstGB0YLQsNC90L7QstC70LXQvdC40LkgaW5saW5lIHRyYW5zZm9ybSDQlNCeINC90LDRiNC+0Zcg0LDQvdGW0LzQsNGG0ZbRl1xuICAgICAgICAgICAgICAgIGNvbnN0IGhhZElubGluZSA9IGljb24uc3R5bGUudHJhbnNmb3JtICYmIGljb24uc3R5bGUudHJhbnNmb3JtICE9PSAnJztcbiAgICAgICAgICAgICAgICBoYWRJbmxpbmVUcmFuc2Zvcm0uc2V0KHNlbGVjdG9yLCBoYWRJbmxpbmUpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vINCX0LHQtdGA0ZbQs9Cw0ZTQvNC+INC+0YDQuNCz0ZbQvdCw0LvRjNC90LjQuSB0cmFuc2Zvcm0g0LcgY29tcHV0ZWQgc3R5bGUgKNCy0LrQu9GO0YfQsNGUIENTUylcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wdXRlZFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoaWNvbik7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxUcmFuc2Zvcm0gPSBjb21wdXRlZFN0eWxlLnRyYW5zZm9ybTtcbiAgICAgICAgICAgICAgICBvcmlnaW5hbFRyYW5zZm9ybXMuc2V0KHNlbGVjdG9yLCBvcmlnaW5hbFRyYW5zZm9ybSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8g0JLRgdGC0LDQvdC+0LLQu9GO0ZTQvNC+INC/0L7Rh9Cw0YLQutC+0LLQuNC5INGB0YLQsNC9XG4gICAgICAgICAgICAgICAgaWNvbi5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgICAgICAgICAgICAgIGljb24uc3R5bGUudHJhbnNpdGlvbiA9ICdvcGFjaXR5IDAuNHMgZWFzZSwgdHJhbnNmb3JtIDAuNHMgZWFzZSc7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8g0JLRgdGC0LDQvdC+0LLQu9GO0ZTQvNC+IHNjYWxlINC3INC30LHQtdGA0LXQttC10L3QvdGP0Lwgcm90YXRlXG4gICAgICAgICAgICAgICAgaWYgKG9yaWdpbmFsVHJhbnNmb3JtICYmIG9yaWdpbmFsVHJhbnNmb3JtICE9PSAnbm9uZScpIHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbi5zdHlsZS50cmFuc2Zvcm0gPSBvcmlnaW5hbFRyYW5zZm9ybSArICcgc2NhbGUoMC41KSc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbi5zdHlsZS50cmFuc2Zvcm0gPSAnc2NhbGUoMC41KSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyDQoNC+0LfRgNCw0YXQvtCy0YPRlNC80L4g0ZbQvdGC0LXRgNCy0LDQuyDQvNGW0LYg0L/QvtGP0LLQvtGOINGW0LrQvtC90L7QulxuICAgICAgICBjb25zdCBpY29uQ291bnQgPSBpY29ucy5sZW5ndGg7XG4gICAgICAgIGNvbnN0IGludGVydmFsID0gZHVyYXRpb24gLyBpY29uQ291bnQ7IC8vINCg0ZbQstC90L7QvNGW0YDQvdC+INGA0L7Qt9C/0L7QtNGW0LvRj9GU0LzQviDQv9C+INGH0LDRgdGDXG5cbiAgICAgICAgLy8g0J/QvtC60LDQt9GD0ZTQvNC+INGW0LrQvtC90LrQuCDQv9C+INGH0LXRgNC30ZZcbiAgICAgICAgaWNvbnMuZm9yRWFjaCgoc2VsZWN0b3IsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgICAgICAgICAgICAgaWYgKGljb24pIHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbi5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8g0JLRltC00L3QvtCy0LvRjtGU0LzQviDQvtGA0LjQs9GW0L3QsNC70YzQvdC40LkgdHJhbnNmb3JtXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsVHJhbnNmb3JtID0gb3JpZ2luYWxUcmFuc2Zvcm1zLmdldChzZWxlY3Rvcik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGhhZElubGluZSA9IGhhZElubGluZVRyYW5zZm9ybS5nZXQoc2VsZWN0b3IpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9yaWdpbmFsVHJhbnNmb3JtICYmIG9yaWdpbmFsVHJhbnNmb3JtICE9PSAnbm9uZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb24uc3R5bGUudHJhbnNmb3JtID0gb3JpZ2luYWxUcmFuc2Zvcm07XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaGFkSW5saW5lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbi5zdHlsZS50cmFuc2Zvcm0gPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb24uc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zZm9ybScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgaW5kZXggKiBpbnRlcnZhbCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vINCX0LzRltC90L3RliDQtNC70Y8g0LfQsdC10YDRltCz0LDQvdC90Y8g0L/QvtGB0LjQu9Cw0L3RjCDQvdCwIGNhbnZhcyDRgtCwINC00LDQvdGWINC00LvRjyDQvtCx0YDQvtCx0L3QuNC60ZbQsiDQv9C+0LTRltC5XG4gICAgbGV0IHBhcnRpY2lwYXRlQ2FudmFzID0gbnVsbDtcbiAgICBsZXQgcGFydGljaXBhdGVEZWVycyA9IFtdO1xuICAgIGxldCBwYXJ0aWNpcGF0ZURlZXJXaWR0aCA9IDA7XG4gICAgbGV0IHBhcnRpY2lwYXRlRGVlckhlaWdodCA9IDA7XG4gICAgbGV0IGNhbnZhc0NsaWNrSGFuZGxlcnNBdHRhY2hlZCA9IGZhbHNlO1xuICAgIGxldCBwYXJ0aWNpcGF0ZUFuaW1hdGlvbklkID0gbnVsbDsgLy8g0JPQu9C+0LHQsNC70YzQvdCwINC30LzRltC90L3QsCDQtNC70Y8gSUQg0LDQvdGW0LzQsNGG0ZbRl1xuICAgIFxuICAgIC8vINCX0LzRltC90L3RliDQtNC70Y8g0LLRltC00YHRgtC10LbQtdC90L3RjyB0b3VjaCDQv9C+0LTRltC5XG4gICAgbGV0IHRvdWNoU3RhcnRYID0gMDtcbiAgICBsZXQgdG91Y2hTdGFydFkgPSAwO1xuXG4gICAgLy8g0J7QsdGA0L7QsdC90LjQuiDQutC70ZbQutGDINC/0L4gY2FudmFzXG4gICAgZnVuY3Rpb24gaGFuZGxlUGFydGljaXBhdGVDYW52YXNDbGljayhldmVudCkge1xuICAgICAgICBpZiAoIXBhcnRpY2lwYXRlQ2FudmFzIHx8ICFwYXJ0aWNpcGF0ZURlZXJzLmxlbmd0aCkgcmV0dXJuO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgcmVjdCA9IHBhcnRpY2lwYXRlQ2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBjb25zdCBzY2FsZVggPSBwYXJ0aWNpcGF0ZUNhbnZhcy53aWR0aCAvIHJlY3Qud2lkdGg7XG4gICAgICAgIGNvbnN0IHNjYWxlWSA9IHBhcnRpY2lwYXRlQ2FudmFzLmhlaWdodCAvIHJlY3QuaGVpZ2h0O1xuICAgICAgICBcbiAgICAgICAgLy8g0J7RgtGA0LjQvNGD0ZTQvNC+INC60L7QvtGA0LTQuNC90LDRgtC4INC60LvRltC60YMg0LLRltC00L3QvtGB0L3QviBjYW52YXNcbiAgICAgICAgY29uc3QgY2xpZW50WCA9IGV2ZW50LmNsaWVudFg7XG4gICAgICAgIGNvbnN0IGNsaWVudFkgPSBldmVudC5jbGllbnRZO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgY2xpY2tYID0gKGNsaWVudFggLSByZWN0LmxlZnQpICogc2NhbGVYO1xuICAgICAgICBjb25zdCBjbGlja1kgPSAoY2xpZW50WSAtIHJlY3QudG9wKSAqIHNjYWxlWTtcbiAgICAgICAgXG4gICAgICAgIC8vINCf0LXRgNC10LLRltGA0Y/RlNC80L4g0YfQuCDQutC70ZbQuiDQv9C+0YLRgNCw0L/QuNCyINC90LAg0Y/QutC+0LPQvtGB0Ywg0L7Qu9C10L3Rj1xuICAgICAgICBwYXJ0aWNpcGF0ZURlZXJzLmZvckVhY2goZGVlciA9PiB7XG4gICAgICAgICAgICBpZiAoZGVlci5pc1BvaW50SW5zaWRlKGNsaWNrWCwgY2xpY2tZLCBwYXJ0aWNpcGF0ZURlZXJXaWR0aCwgcGFydGljaXBhdGVEZWVySGVpZ2h0KSkge1xuICAgICAgICAgICAgICAgIGRlZXIuaGFuZGxlQ2xpY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIC8vINCe0LHRgNC+0LHQvdC40LogdG91Y2hzdGFydCDQtNC70Y8g0LLRltC00YHRgtC10LbQtdC90L3RjyDQv9C+0YfQsNGC0LrRgyDQtNC+0YLQuNC60YNcbiAgICBmdW5jdGlvbiBoYW5kbGVQYXJ0aWNpcGF0ZUNhbnZhc1RvdWNoU3RhcnQoZXZlbnQpIHtcbiAgICAgICAgaWYgKCFwYXJ0aWNpcGF0ZUNhbnZhcyB8fCAhcGFydGljaXBhdGVEZWVycy5sZW5ndGgpIHJldHVybjtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHRvdWNoID0gZXZlbnQudG91Y2hlc1swXTtcbiAgICAgICAgaWYgKCF0b3VjaCkgcmV0dXJuO1xuICAgICAgICBcbiAgICAgICAgLy8g0JfQsdC10YDRltCz0LDRlNC80L4g0LrQvtC+0YDQtNC40L3QsNGC0Lgg0L/QvtGH0LDRgtC60YMg0LTQvtGC0LjQutGDXG4gICAgICAgIHRvdWNoU3RhcnRYID0gdG91Y2guY2xpZW50WDtcbiAgICAgICAgdG91Y2hTdGFydFkgPSB0b3VjaC5jbGllbnRZO1xuICAgIH1cbiAgICBcbiAgICAvLyDQntCx0YDQvtCx0L3QuNC6IHRvdWNoZW5kINC00LvRjyDQstC40LfQvdCw0YfQtdC90L3RjyDRh9C4INGG0LUg0YLQsNC/INGH0Lgg0YHQutGA0L7Qu1xuICAgIGZ1bmN0aW9uIGhhbmRsZVBhcnRpY2lwYXRlQ2FudmFzVG91Y2hFbmQoZXZlbnQpIHtcbiAgICAgICAgaWYgKCFwYXJ0aWNpcGF0ZUNhbnZhcyB8fCAhcGFydGljaXBhdGVEZWVycy5sZW5ndGgpIHJldHVybjtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHRvdWNoID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgICAgIGlmICghdG91Y2gpIHJldHVybjtcbiAgICAgICAgXG4gICAgICAgIC8vINCg0L7Qt9GA0LDRhdC+0LLRg9GU0LzQviDQstGW0LTRgdGC0LDQvdGMINC80ZbQtiB0b3VjaHN0YXJ0INGC0LAgdG91Y2hlbmRcbiAgICAgICAgY29uc3QgZGVsdGFYID0gTWF0aC5hYnModG91Y2guY2xpZW50WCAtIHRvdWNoU3RhcnRYKTtcbiAgICAgICAgY29uc3QgZGVsdGFZID0gTWF0aC5hYnModG91Y2guY2xpZW50WSAtIHRvdWNoU3RhcnRZKTtcbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBNYXRoLnNxcnQoZGVsdGFYICogZGVsdGFYICsgZGVsdGFZICogZGVsdGFZKTtcbiAgICAgICAgXG4gICAgICAgIC8vINCv0LrRidC+INCy0ZbQtNGB0YLQsNC90Ywg0LHRltC70YzRiNC1IDEwcHggLSDRhtC1INGB0LrRgNC+0LssINC90LUg0L7QsdGA0L7QsdC70Y/RlNC80L5cbiAgICAgICAgaWYgKGRpc3RhbmNlID4gMTApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8g0K/QutGJ0L4g0LLRltC00YHRgtCw0L3RjCDQvNC10L3RiNC1INCw0LHQviDQtNC+0YDRltCy0L3RjtGUIDEwcHggLSDRhtC1INGC0LDQvywg0L7QsdGA0L7QsdC70Y/RlNC80L5cbiAgICAgICAgY29uc3QgcmVjdCA9IHBhcnRpY2lwYXRlQ2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBjb25zdCBzY2FsZVggPSBwYXJ0aWNpcGF0ZUNhbnZhcy53aWR0aCAvIHJlY3Qud2lkdGg7XG4gICAgICAgIGNvbnN0IHNjYWxlWSA9IHBhcnRpY2lwYXRlQ2FudmFzLmhlaWdodCAvIHJlY3QuaGVpZ2h0O1xuICAgICAgICBcbiAgICAgICAgY29uc3QgY2xpY2tYID0gKHRvdWNoLmNsaWVudFggLSByZWN0LmxlZnQpICogc2NhbGVYO1xuICAgICAgICBjb25zdCBjbGlja1kgPSAodG91Y2guY2xpZW50WSAtIHJlY3QudG9wKSAqIHNjYWxlWTtcbiAgICAgICAgXG4gICAgICAgIC8vINCf0LXRgNC10LLRltGA0Y/RlNC80L4g0YfQuCDRgtCw0L8g0L/QvtGC0YDQsNC/0LjQsiDQvdCwINGP0LrQvtCz0L7RgdGMINC+0LvQtdC90Y9cbiAgICAgICAgcGFydGljaXBhdGVEZWVycy5mb3JFYWNoKGRlZXIgPT4ge1xuICAgICAgICAgICAgaWYgKGRlZXIuaXNQb2ludEluc2lkZShjbGlja1gsIGNsaWNrWSwgcGFydGljaXBhdGVEZWVyV2lkdGgsIHBhcnRpY2lwYXRlRGVlckhlaWdodCkpIHtcbiAgICAgICAgICAgICAgICBkZWVyLmhhbmRsZUNsaWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluaXRQYXJ0aWNpcGF0ZUNhbnZhcygpIHtcbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BhcnRpY2lwYXRlQ2FudmFzJyk7XG4gICAgICAgIGlmICghY2FudmFzKSByZXR1cm47XG5cbiAgICAgICAgLy8g0JfRg9C/0LjQvdGP0ZTQvNC+INC/0L7Qv9C10YDQtdC00L3RjiDQsNC90ZbQvNCw0YbRltGOINGP0LrRidC+INCy0L7QvdCwINGW0YHQvdGD0ZRcbiAgICAgICAgaWYgKHBhcnRpY2lwYXRlQW5pbWF0aW9uSWQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHBhcnRpY2lwYXRlQW5pbWF0aW9uSWQpO1xuICAgICAgICAgICAgcGFydGljaXBhdGVBbmltYXRpb25JZCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vINCe0YfQuNGJ0LDRlNC80L4g0L/QvtC/0LXRgNC10LTQvdGW0YUg0L7Qu9C10L3RltCyXG4gICAgICAgIHBhcnRpY2lwYXRlRGVlcnMgPSBbXTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICBcbiAgICAgICAgLy8g0J7QvdC+0LLQu9GO0ZTQvNC+INC/0L7RgdC40LvQsNC90L3RjyDQvdCwIGNhbnZhc1xuICAgICAgICBwYXJ0aWNpcGF0ZUNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgXG4gICAgICAgIC8vINCS0LjQt9C90LDRh9Cw0ZTQvNC+INGH0Lgg0LXQutGA0LDQvSA8PSAxMDUwcHhcbiAgICAgICAgY29uc3QgaXNNb2JpbGUgPSB3aW5kb3cuaW5uZXJXaWR0aCA8PSAxMDUwO1xuXG4gICAgICAgIC8vINCa0L7QvdGB0YLQsNC90YLQuCDQtNC70Y8g0YDQvtC30LzRltGA0ZbQsiDRgtCwINC/0L7Qt9C40YbRltC5XG4gICAgICAgIGNvbnN0IENBTlZBU19XSURUSCA9IGlzTW9iaWxlID8gNzY4IDogMTM2NjtcbiAgICAgICAgY29uc3QgQ0FOVkFTX0hFSUdIVCA9IGlzTW9iaWxlID8gNDcwIDogNTAwO1xuICAgICAgICBcbiAgICAgICAgLy8g0JLRgdGC0LDQvdC+0LLQu9GO0ZTQvNC+INGA0L7Qt9C80ZbRgNC4IGNhbnZhc1xuICAgICAgICBjYW52YXMud2lkdGggPSBDQU5WQVNfV0lEVEg7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBDQU5WQVNfSEVJR0hUO1xuICAgICAgICBcbiAgICAgICAgLy8g0KTRltC60YHQvtCy0LDQvdGWINGA0L7Qt9C80ZbRgNC4INC00LXRgNC10LLQsCAo0L3QtSDQvNCw0YHRiNGC0LDQsdGD0Y7RgtGM0YHRjylcbiAgICAgICAgY29uc3QgVFJFRV9XSURUSCA9IDE3NTtcbiAgICAgICAgY29uc3QgVFJFRV9IRUlHSFQgPSAxNjc7XG4gICAgICAgIFxuICAgICAgICAvLyDQn9Cw0YDQsNC80LXRgtGA0Lgg0YHQv9GA0LDQudGCLdC70LjRgdGC0LBcbiAgICAgICAgY29uc3QgRlJBTUVTX1BFUl9ST1cgPSA1OyAvLyA1INC60LDQtNGA0ZbQsiDQsiDRgNGP0LTQutGDXG4gICAgICAgIGNvbnN0IFRPVEFMX1JPV1MgPSAyOyAvLyAyINGA0Y/QtNC4XG4gICAgICAgIGNvbnN0IFNQUklURV9TSEVFVF9XSURUSCA9IDExMDA7IC8vINCg0LXQsNC70YzQvdCwINGI0LjRgNC40L3QsCDRgdC/0YDQsNC50YIt0LvQuNGB0YLQsFxuICAgICAgICBjb25zdCBTUFJJVEVfU0hFRVRfSEVJR0hUID0gNDY4OyAvLyDQoNC10LDQu9GM0L3QsCDQstC40YHQvtGC0LAg0YHQv9GA0LDQudGCLdC70LjRgdGC0LBcbiAgICAgICAgXG4gICAgICAgIC8vINCg0L7Qt9C80ZbRgNC4INC+0LTQvdC+0LPQviDQutCw0LTRgNGDINCyINGB0L/RgNCw0LnRgi3Qu9C40YHRgtGWXG4gICAgICAgIGNvbnN0IEZSQU1FX1dJRFRIID0gTWF0aC5mbG9vcihTUFJJVEVfU0hFRVRfV0lEVEggLyBGUkFNRVNfUEVSX1JPVyk7IC8vIDIyMHB4XG4gICAgICAgIGNvbnN0IEZSQU1FX0hFSUdIVCA9IE1hdGguZmxvb3IoU1BSSVRFX1NIRUVUX0hFSUdIVCAvIFRPVEFMX1JPV1MpOyAvLyAyMzRweFxuICAgICAgICBcbiAgICAgICAgLy8g0KTRltC60YHQvtCy0LDQvdGWINGA0L7Qt9C80ZbRgNC4INC+0LvQtdC90Y8g0L3QsCBjYW52YXNcbiAgICAgICAgY29uc3QgREVFUl9TQ0FMRSA9IDAuNTsgLy8g0JzQsNGB0YjRgtCw0LEg0LTQu9GPINCy0ZbQtNC+0LHRgNCw0LbQtdC90L3RjyDQvdCwIGNhbnZhc1xuICAgICAgICBjb25zdCBCQVNFX0RFRVJfV0lEVEggPSBNYXRoLmZsb29yKEZSQU1FX1dJRFRIICogREVFUl9TQ0FMRSk7IFxuICAgICAgICBjb25zdCBCQVNFX0RFRVJfSEVJR0hUID0gTWF0aC5mbG9vcihGUkFNRV9IRUlHSFQgKiBERUVSX1NDQUxFKTtcbiAgICAgICAgXG4gICAgICAgIC8vINCX0LzQtdC90YjRg9GU0LzQviDRgNC+0LfQvNGW0YDQuCDQvtC70LXQvdGW0LIg0L3QsCAxNSUg0LTQu9GPINC80L7QsdGW0LvRjNC90LjRhSDQv9GA0LjRgdGC0YDQvtGX0LJcbiAgICAgICAgbGV0IERFRVJfV0lEVEggPSBCQVNFX0RFRVJfV0lEVEg7XG4gICAgICAgIGxldCBERUVSX0hFSUdIVCA9IEJBU0VfREVFUl9IRUlHSFQ7XG4gICAgICAgIGxldCBkZWVySGVpZ2h0T2Zmc2V0ID0gMDsgLy8g0JfQvNGW0YnQtdC90L3RjyDQtNC70Y8g0LfQsdC10YDQtdC20LXQvdC90Y8g0L/QvtC30LjRhtGW0Zcg0LLRltC00L3QvtGB0L3QviDQvdC40LbQvdGM0L7Qs9C+INC60YDQsNGOXG4gICAgICAgIFxuICAgICAgICBpZiAoaXNNb2JpbGUpIHtcbiAgICAgICAgICAgIERFRVJfV0lEVEggPSBNYXRoLmZsb29yKEJBU0VfREVFUl9XSURUSCAqIC44KTtcbiAgICAgICAgICAgIERFRVJfSEVJR0hUID0gTWF0aC5mbG9vcihCQVNFX0RFRVJfSEVJR0hUICogLjgpO1xuICAgICAgICAgICAgLy8g0KDQvtC30YDQsNGF0L7QstGD0ZTQvNC+INC30LzRltGJ0LXQvdC90Y8g0LTQu9GPINC30LHQtdGA0LXQttC10L3QvdGPINC/0L7Qt9C40YbRltGXINCy0ZbQtNC90L7RgdC90L4g0L3QuNC20L3RjNC+0LPQviDQutGA0LDRjlxuICAgICAgICAgICAgZGVlckhlaWdodE9mZnNldCA9IEJBU0VfREVFUl9IRUlHSFQgLSBERUVSX0hFSUdIVDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vINCf0L7Qt9C40YbRltGXINC10LvQtdC80LXQvdGC0ZbQslxuICAgICAgICBsZXQgdHJlZVgsIHRyZWVZO1xuICAgICAgICBpZiAoaXNNb2JpbGUpIHtcbiAgICAgICAgICAgIHRyZWVYID0gMjM1O1xuICAgICAgICAgICAgdHJlZVkgPSBDQU5WQVNfSEVJR0hUIC0gMTUyIC0gVFJFRV9IRUlHSFQ7IFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8g0JTQtdGB0LrRgtC+0L/QvdCwINCy0LXRgNGB0ZbRj1xuICAgICAgICAgICAgdHJlZVggPSBDQU5WQVNfV0lEVEggLyAyIC0gMzAwOyBcbiAgICAgICAgICAgIHRyZWVZID0gQ0FOVkFTX0hFSUdIVCAvIDIgLSBUUkVFX0hFSUdIVCAvIDI7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vINCf0LDRgNCw0LzQtdGC0YDQuCDQsNC90ZbQvNCw0YbRltGXICjRgdC/0ZbQu9GM0L3RliDQtNC70Y8g0LLRgdGW0YUg0L7Qu9C10L3RltCyKVxuICAgICAgICBjb25zdCBGUkFNRV9ERUxBWSA9IDEyOyAvLyDQl9Cw0YLRgNC40LzQutCwINC80ZbQtiDQutCw0LTRgNCw0LzQuFxuICAgICAgICBjb25zdCBXQUxLSU5HX0ZSQU1FUyA9IDU7IC8vINCa0ZbQu9GM0LrRltGB0YLRjCDQutCw0LTRgNGW0LIg0LTQu9GPINGF0L7QtNGM0LHQuFxuICAgICAgICBjb25zdCBGUkFNRV9SRVBFQVQgPSAyOyAvLyDQmtGW0LvRjNC60ZbRgdGC0Ywg0YDQsNC30ZbQsiDQv9C+0LrQsNC30YPQstCw0YLQuCDQutC+0LbQtdC9INC60LDQtNGAXG4gICAgICAgIGNvbnN0IElETEVfTUlOX0RVUkFUSU9OID0gNjA7IC8vINCc0ZbQvdGW0LzQsNC70YzQvdCwINGC0YDQuNCy0LDQu9GW0YHRgtGMINC30YPQv9C40L3QutC4ICgxINGB0LXQutGD0L3QtNCwINC/0YDQuCA2MGZwcylcbiAgICAgICAgY29uc3QgSURMRV9NQVhfRFVSQVRJT04gPSAxODA7IC8vINCc0LDQutGB0LjQvNCw0LvRjNC90LAg0YLRgNC40LLQsNC70ZbRgdGC0Ywg0LfRg9C/0LjQvdC60LggKDMg0YHQtdC60YPQvdC00Lgg0L/RgNC4IDYwZnBzKVxuXG4gICAgICAgIC8vINCh0YLQsNC90Lgg0LDQvdGW0LzQsNGG0ZbRlyDQvtC70LXQvdGPXG4gICAgICAgIGNvbnN0IERFRVJfU1RBVEUgPSB7XG4gICAgICAgICAgICBXQUxLSU5HOiAnd2Fsa2luZycsXG4gICAgICAgICAgICBJRExFOiAnaWRsZScsXG4gICAgICAgICAgICBQRVRUSU5HOiAncGV0dGluZydcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIC8vINCf0LDRgNCw0LzQtdGC0YDQuCDQtNC70Y8g0YHRgtCw0L3RgyBwZXR0aW5nXG4gICAgICAgIGNvbnN0IFBFVFRJTkdfTUlOX0RVUkFUSU9OID0gNjA7IC8vIDEg0YHQtdC60YPQvdC00LAg0L/RgNC4IDYwZnBzXG4gICAgICAgIGNvbnN0IFBFVFRJTkdfTUFYX0RVUkFUSU9OID0gMTgwOyAvLyAzINGB0LXQutGD0L3QtNC4INC/0YDQuCA2MGZwc1xuICAgICAgICBjb25zdCBIRUFSVF9TSVpFX01JTiA9IDg7XG4gICAgICAgIGNvbnN0IEhFQVJUX1NJWkVfTUFYID0gMTI7XG4gICAgICAgIGNvbnN0IEhFQVJUX1JJU0VfRElTVEFOQ0UgPSAzMDsgLy8g0JLRltC00YHRgtCw0L3RjCDQv9GW0LTQudC+0LzRgyDRgdC10YDQtNC10YfQutCwXG4gICAgICAgIGNvbnN0IEhFQVJUX1NQQVdOX0lOVEVSVkFMID0gMjA7IC8vINCG0L3RgtC10YDQstCw0Lsg0L/QvtGP0LLQuCDRgdC10YDQtNC10YfQvtC6ICjQutCw0LTRgNC4KVxuICAgICAgICBcbiAgICAgICAgbGV0IGZyYW1lQ291bnRlciA9IDA7IC8vINCT0LvQvtCx0LDQu9GM0L3QuNC5INC70ZbRh9C40LvRjNC90LjQuiDQutCw0LTRgNGW0LIg0LTQu9GPINGB0LjQvdGF0YDQvtC90ZbQt9Cw0YbRltGXXG5cbiAgICAgICAgLy8g0JrQu9Cw0YEg0LTQu9GPINGB0LXRgNC00LXRh9C60LBcbiAgICAgICAgY2xhc3MgSGVhcnQge1xuICAgICAgICAgICAgY29uc3RydWN0b3IoeCwgeSwgc2l6ZSwgaGVhcnRJbWFnZSkge1xuICAgICAgICAgICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgICAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xuICAgICAgICAgICAgICAgIHRoaXMub3BhY2l0eSA9IDE7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2FsZSA9IDE7XG4gICAgICAgICAgICAgICAgdGhpcy5yaXNlU3BlZWQgPSAwLjU7IC8vINCo0LLQuNC00LrRltGB0YLRjCDQv9GW0LTQudC+0LzRg1xuICAgICAgICAgICAgICAgIHRoaXMuaGVhcnRJbWFnZSA9IGhlYXJ0SW1hZ2U7IC8vINCX0L7QsdGA0LDQttC10L3QvdGPINGB0LXRgNC00LXRh9C60LBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdXBkYXRlKCkge1xuICAgICAgICAgICAgICAgIHRoaXMueSAtPSB0aGlzLnJpc2VTcGVlZDtcbiAgICAgICAgICAgICAgICB0aGlzLm9wYWNpdHkgLT0gMC4wMjtcbiAgICAgICAgICAgICAgICB0aGlzLnNjYWxlICs9IDAuMDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlzVmlzaWJsZSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5vcGFjaXR5ID4gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZHJhdyhjdHgpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNWaXNpYmxlKCkpIHJldHVybjtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNC60LAg0L3QsNGP0LLQvdC+0YHRgtGWINGC0LAg0LfQsNCy0LDQvdGC0LDQttC10L3QvdGPINC30L7QsdGA0LDQttC10L3QvdGPXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmhlYXJ0SW1hZ2UpIHJldHVybjtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaGVhcnRJbWFnZS5jb21wbGV0ZSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmhlYXJ0SW1hZ2UubmF0dXJhbFdpZHRoID09PSAwIHx8IHRoaXMuaGVhcnRJbWFnZS5uYXR1cmFsSGVpZ2h0ID09PSAwKSByZXR1cm47XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY3R4LnNhdmUoKTtcblxuICAgICAgICAgICAgICAgIGN0eC5nbG9iYWxBbHBoYSA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIHRoaXMub3BhY2l0eSkpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vINCc0LDQu9GO0ZTQvNC+INC30L7QsdGA0LDQttC10L3QvdGPINGB0LXRgNC00LXRh9C60LAg0Lcg0LzQsNGB0YjRgtCw0LHRg9Cy0LDQvdC90Y/QvFxuICAgICAgICAgICAgICAgIGNvbnN0IGRyYXdTaXplID0gdGhpcy5zaXplICogdGhpcy5zY2FsZTtcbiAgICAgICAgICAgICAgICBjb25zdCBkcmF3WCA9IHRoaXMueCAtIGRyYXdTaXplIC8gMjtcbiAgICAgICAgICAgICAgICBjb25zdCBkcmF3WSA9IHRoaXMueSAtIGRyYXdTaXplIC8gMjtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyDQlNC+0LTQsNGC0LrQvtCy0LAg0L/QtdGA0LXQstGW0YDQutCwINC00LvRjyDQutC+0YDQtdC60YLQvdC+0LPQviDQvNCw0LvRjtCy0LDQvdC90Y9cbiAgICAgICAgICAgICAgICBpZiAoZHJhd1NpemUgPiAwICYmIHRoaXMuaGVhcnRJbWFnZS53aWR0aCA+IDAgJiYgdGhpcy5oZWFydEltYWdlLmhlaWdodCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGVhcnRJbWFnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDAsIDAsIHRoaXMuaGVhcnRJbWFnZS53aWR0aCwgdGhpcy5oZWFydEltYWdlLmhlaWdodCwgXG4gICAgICAgICAgICAgICAgICAgICAgICBkcmF3WCwgZHJhd1ksIGRyYXdTaXplLCBkcmF3U2l6ZSBcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY3R4LnJlc3RvcmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vINCa0LvQsNGBINC00LvRjyDQvtC70LXQvdGPXG4gICAgICAgIGNsYXNzIERlZXIge1xuICAgICAgICAgICAgY29uc3RydWN0b3Ioc3RhcnRYLCBzdGFydFksIG1pblgsIG1heFgsIHNwZWVkID0gMC41LCB6SW5kZXggPSAwLCBoZWFydEltYWdlID0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMueCA9IHN0YXJ0WDtcbiAgICAgICAgICAgICAgICB0aGlzLnkgPSBzdGFydFk7XG4gICAgICAgICAgICAgICAgdGhpcy5taW5YID0gbWluWDtcbiAgICAgICAgICAgICAgICB0aGlzLm1heFggPSBtYXhYO1xuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWQgPSBzcGVlZDtcbiAgICAgICAgICAgICAgICB0aGlzLnpJbmRleCA9IHpJbmRleDsgLy8g0J/QvtGA0Y/QtNC+0Log0LzQsNC70Y7QstCw0L3QvdGPIFxuICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gLTE7IC8vIC0xID0g0LLQu9GW0LLQviwgMSA9INCy0L/RgNCw0LLQvlxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBERUVSX1NUQVRFLldBTEtJTkc7XG4gICAgICAgICAgICAgICAgdGhpcy5mcmFtZUluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLmZyYW1lUmVwZWF0Q291bnRlciA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5pZGxlVGltZXIgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuaWRsZUR1cmF0aW9uID0gMDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyDQktC70LDRgdGC0LjQstC+0YHRgtGWINC00LvRjyDRgdGC0LDQvdGDIHBldHRpbmdcbiAgICAgICAgICAgICAgICB0aGlzLnBldHRpbmdUaW1lciA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5wZXR0aW5nRHVyYXRpb24gPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMucHJldmlvdXNTdGF0ZSA9IG51bGw7IC8vINCX0LHQtdGA0ZbQs9Cw0ZTQvNC+INC/0L7Qv9C10YDQtdC00L3RltC5INGB0YLQsNC9XG4gICAgICAgICAgICAgICAgdGhpcy5zYXZlZFggPSAwOyAvLyDQl9Cx0LXRgNC10LbQtdC90ZYg0LrQvtC+0YDQtNC40L3QsNGC0Lgg0L/RgNC4INC/0LXRgNC10YXQvtC00ZYg0LIgcGV0dGluZ1xuICAgICAgICAgICAgICAgIHRoaXMuc2F2ZWRZID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLmhlYXJ0cyA9IFtdOyAvLyDQnNCw0YHQuNCyINGB0LXRgNC00LXRh9C+0LpcbiAgICAgICAgICAgICAgICB0aGlzLmhlYXJ0U3Bhd25Db3VudGVyID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLmhlYXJ0SW1hZ2UgPSBoZWFydEltYWdlOyAvLyDQl9C+0LHRgNCw0LbQtdC90L3RjyDRgdC10YDQtNC10YfQutCwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCf0LXRgNC10LLRltGA0LrQsCDRh9C4INC60LvRltC6INC/0L7RgtGA0LDQv9C40LIg0L3QsCDQvtC70LXQvdGPXG4gICAgICAgICAgICBpc1BvaW50SW5zaWRlKGNsaWNrWCwgY2xpY2tZLCBkZWVyV2lkdGgsIGRlZXJIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2xpY2tYID49IHRoaXMueCAmJiBcbiAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tYIDw9IHRoaXMueCArIGRlZXJXaWR0aCAmJiBcbiAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tZID49IHRoaXMueSAmJiBcbiAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tZIDw9IHRoaXMueSArIGRlZXJIZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCe0LHRgNC+0LHQutCwINC60LvRltC60YMg0L/QviDQvtC70LXQvdGOXG4gICAgICAgICAgICBoYW5kbGVDbGljaygpIHtcbiAgICAgICAgICAgICAgICAvLyDQn9C10YDQtdGF0L7QtNC40LzQviDQsiDRgdGC0LDQvSBwZXR0aW5nINCw0LHQviDQv9C+0L3QvtCy0LvRjtGU0LzQviDRgtCw0LnQvNC10YBcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZSAhPT0gREVFUl9TVEFURS5QRVRUSU5HKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vINCX0LHQtdGA0ZbQs9Cw0ZTQvNC+INC/0L7Qv9C10YDQtdC00L3RltC5INGB0YLQsNC9INGC0LAg0LrQvtC+0YDQtNC40L3QsNGC0LhcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmV2aW91c1N0YXRlID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zYXZlZFggPSB0aGlzLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2F2ZWRZID0gdGhpcy55O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0gREVFUl9TVEFURS5QRVRUSU5HO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBldHRpbmdUaW1lciA9IDA7XG4gICAgICAgICAgICAgICAgICAgIC8vINCe0YfQuNGJ0LDRlNC80L4g0YHRgtCw0YDRliDRgdC10YDQtNC10YfQutCwXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGVhcnRzID0gW107XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGVhcnRTcGF3bkNvdW50ZXIgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyDQn9C+0L3QvtCy0LvRjtGU0LzQviDRgtCw0LnQvNC10YAgcGV0dGluZyAoMS0zINGB0LXQutGD0L3QtNC4KSDRgtCwINGB0LrQuNC00LDRlNC80L4g0L/QvtGC0L7Rh9C90LjQuSDRgtCw0LnQvNC10YBcbiAgICAgICAgICAgICAgICB0aGlzLnBldHRpbmdEdXJhdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChQRVRUSU5HX01BWF9EVVJBVElPTiAtIFBFVFRJTkdfTUlOX0RVUkFUSU9OICsgMSkpICsgUEVUVElOR19NSU5fRFVSQVRJT047XG4gICAgICAgICAgICAgICAgdGhpcy5wZXR0aW5nVGltZXIgPSAwOyAvLyDQodC60LjQtNCw0ZTQvNC+INGC0LDQudC80LXRgCDQv9GA0Lgg0LrQvtC20L3QvtC80YMg0LrQu9GW0LrRg1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQodGC0LLQvtGA0LXQvdC90Y8g0L3QvtCy0L7Qs9C+INGB0LXRgNC00LXRh9C60LBcbiAgICAgICAgICAgIHNwYXduSGVhcnQoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmhlYXJ0SW1hZ2UpIHJldHVybjsgLy8g0K/QutGJ0L4g0LfQvtCx0YDQsNC20LXQvdC90Y8g0L3QtSDQt9Cw0LLQsNC90YLQsNC20LXQvdC1LCDQvdC1INGB0YLQstC+0YDRjtGU0LzQviDRgdC10YDQtNC10YfQutC+XG4gICAgICAgICAgICAgICAgY29uc3Qgc2l6ZSA9IE1hdGgucmFuZG9tKCkgKiAoSEVBUlRfU0laRV9NQVggLSBIRUFSVF9TSVpFX01JTikgKyBIRUFSVF9TSVpFX01JTjtcbiAgICAgICAgICAgICAgICBjb25zdCBvZmZzZXRYID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogREVFUl9XSURUSDsgLy8g0JLQuNC/0LDQtNC60L7QstC1INC30LzRltGJ0LXQvdC90Y8g0L/QviBYXG4gICAgICAgICAgICAgICAgY29uc3QgaGVhcnRYID0gdGhpcy54ICsgREVFUl9XSURUSCAvIDIgKyBvZmZzZXRYO1xuICAgICAgICAgICAgICAgIGNvbnN0IGhlYXJ0WSA9IHRoaXMueSAtIDEwOyAvLyDQotGA0L7RhdC4INCy0LjRidC1INC+0LvQtdC90Y9cbiAgICAgICAgICAgICAgICB0aGlzLmhlYXJ0cy5wdXNoKG5ldyBIZWFydChoZWFydFgsIGhlYXJ0WSwgc2l6ZSwgdGhpcy5oZWFydEltYWdlKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGdldFNwcml0ZUZyYW1lSW5kZXgoKSB7XG4gICAgICAgICAgICAgICAgLy8g0JLQtdGA0YXQvdGW0Lkg0YDRj9C00L7QuiAoMCkgPSDRgNGD0YUg0LLQu9GW0LLQviwg0L3QuNC20L3RltC5INGA0Y/QtNC+0LogKDEpID0g0YDRg9GFINCy0L/RgNCw0LLQvlxuICAgICAgICAgICAgICAgIGNvbnN0IHJvdyA9IHRoaXMuZGlyZWN0aW9uID09PSAtMSA/IDAgOiAxO1xuICAgICAgICAgICAgICAgIGxldCBjb2wgPSAwO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IERFRVJfU1RBVEUuV0FMS0lORykge1xuICAgICAgICAgICAgICAgICAgICAvLyDQmtCw0LTRgNC4INGF0L7QtNGM0LHQuDogMCwgMSwgMiwgMywgNCAo0LLRgdGWIDUg0LrQsNC00YDRltCyKVxuICAgICAgICAgICAgICAgICAgICBjb2wgPSB0aGlzLmZyYW1lSW5kZXggJSBXQUxLSU5HX0ZSQU1FUztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT09IERFRVJfU1RBVEUuUEVUVElORykge1xuICAgICAgICAgICAgICAgICAgICAvLyDQkiDRgdGC0LDQvdGWIHBldHRpbmcg0LLQuNC60L7RgNC40YHRgtC+0LLRg9GU0LzQviDQutCw0LTRgCAwIChpZGxlINC60LDQtNGAKVxuICAgICAgICAgICAgICAgICAgICBjb2wgPSAwO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vINCh0YLQsNC9INC30YPQv9C40L3QutC4IChJRExFKSAtINCy0LjQutC+0YDQuNGB0YLQvtCy0YPRlNC80L4g0LrQsNC00YAgMFxuICAgICAgICAgICAgICAgICAgICBjb2wgPSAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB7IHJvdywgY29sIH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHVwZGF0ZShzaG91bGRVcGRhdGVGcmFtZSkge1xuICAgICAgICAgICAgICAgIC8vINCe0L3QvtCy0LvRjtGU0LzQviDQsNC90ZbQvNCw0YbRltGOINC60LDQtNGA0ZbQsiDQtyDQv9C+0LLRgtC+0YDQtdC90L3Rj9C8INC00LvRjyDQv9C70LDQstC90L7RgdGC0ZZcbiAgICAgICAgICAgICAgICBpZiAoc2hvdWxkVXBkYXRlRnJhbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IERFRVJfU1RBVEUuV0FMS0lORykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mcmFtZVJlcGVhdENvdW50ZXIrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vINCf0L7QutCw0LfRg9GU0LzQviDQutC+0LbQtdC9INC60LDQtNGAINC60ZbQu9GM0LrQsCDRgNCw0LfRltCyINC00LvRjyDQv9C70LDQstC90ZbRiNC+0Zcg0LDQvdGW0LzQsNGG0ZbRl1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZnJhbWVSZXBlYXRDb3VudGVyID49IEZSQU1FX1JFUEVBVCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZnJhbWVSZXBlYXRDb3VudGVyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDQn9C+0YHQu9GW0LTQvtCy0L3QviDQv9GA0L7RhdC+0LTQuNC80L4g0YfQtdGA0LXQtyDQstGB0ZYg0LrQsNC00YDQuDogMCwgMSwgMiwgMywgNCwgMCwgMSwgMiwgMywgNC4uLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZnJhbWVJbmRleCA9ICh0aGlzLmZyYW1lSW5kZXggKyAxKSAlIFdBTEtJTkdfRlJBTUVTO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8g0JvQvtCz0ZbQutCwINGB0YLQsNC90ZbQsiDRgtCwINGA0YPRhdGDXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IERFRVJfU1RBVEUuUEVUVElORykge1xuICAgICAgICAgICAgICAgICAgICAvLyDQkiDRgdGC0LDQvdGWIHBldHRpbmcg0L7Qu9C10L3RjCDQvdC1INGA0YPRhdCw0ZTRgtGM0YHRj1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBldHRpbmdUaW1lcisrO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8g0KHRgtCy0L7RgNGO0ZTQvNC+INGB0LXRgNC00LXRh9C60LAg0Lcg0ZbQvdGC0LXRgNCy0LDQu9C+0LxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oZWFydFNwYXduQ291bnRlcisrO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5oZWFydFNwYXduQ291bnRlciA+PSBIRUFSVF9TUEFXTl9JTlRFUlZBTCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oZWFydFNwYXduQ291bnRlciA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNwYXduSGVhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8g0J7QvdC+0LLQu9GO0ZTQvNC+INGB0LXRgNC00LXRh9C60LBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oZWFydHMgPSB0aGlzLmhlYXJ0cy5maWx0ZXIoaGVhcnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVhcnQudXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaGVhcnQuaXNWaXNpYmxlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8g0J/QtdGA0LXQstGW0YDRj9GU0LzQviDRh9C4INC30LDQutGW0L3Rh9C40LLRgdGPINGB0YLQsNC9IHBldHRpbmdcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGV0dGluZ1RpbWVyID49IHRoaXMucGV0dGluZ0R1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDQn9C+0LLQtdGA0YLQsNGU0LzQvtGB0Y8g0LTQviDQt9Cx0LXRgNC10LbQtdC90LjRhSDQutC+0L7RgNC00LjQvdCw0YJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueCA9IHRoaXMuc2F2ZWRYO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy55ID0gdGhpcy5zYXZlZFk7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vINCf0L7QstC10YDRgtCw0ZTQvNC+0YHRjyDQtNC+INC/0L7Qv9C10YDQtdC00L3RjNC+0LPQviDRgdGC0LDQvdGDXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcmV2aW91c1N0YXRlID09PSBERUVSX1NUQVRFLldBTEtJTkcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0gREVFUl9TVEFURS5XQUxLSU5HO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vINCf0YDQvtC00L7QstC20YPRlNC80L4g0YDRg9GFINC3INC30LHQtdGA0LXQttC10L3QuNGFINC60L7QvtGA0LTQuNC90LDRglxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXZpb3VzU3RhdGUgPT09IERFRVJfU1RBVEUuSURMRSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBERUVSX1NUQVRFLklETEU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g0J/QvtCy0LXRgNGC0LDRlNC80L7RgdGPINC00L4g0YHRgtCw0L3RgyBpZGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pZGxlVGltZXIgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaWRsZUR1cmF0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKElETEVfTUFYX0RVUkFUSU9OIC0gSURMRV9NSU5fRFVSQVRJT04gKyAxKSkgKyBJRExFX01JTl9EVVJBVElPTjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmV2aW91c1N0YXRlID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGV0dGluZ1RpbWVyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGV0dGluZ0R1cmF0aW9uID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGVhcnRzID0gW107IC8vINCe0YfQuNGJ0LDRlNC80L4g0YHQtdGA0LTQtdGH0LrQsFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oZWFydFNwYXduQ291bnRlciA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT09IERFRVJfU1RBVEUuV0FMS0lORykge1xuICAgICAgICAgICAgICAgICAgICAvLyDQntC90L7QstC70Y7RlNC80L4g0L/QvtC30LjRhtGW0Y4g0L7Qu9C10L3Rj1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnggKz0gdGhpcy5zcGVlZCAqIHRoaXMuZGlyZWN0aW9uO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vINCf0LXRgNC10LLRltGA0Y/RlNC80L4g0LzQtdC20ZYg0YLQsCDQv9C10YDQtdGF0L7QtNC40LzQviDQtNC+INC30YPQv9C40L3QutC4XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnggPj0gdGhpcy5tYXhYICYmIHRoaXMuZGlyZWN0aW9uID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDQlNC+0YHRj9Cz0LvQuCDQv9GA0LDQstC+0LPQviDQutGA0LDRjiAtINC30YPQv9C40L3Rj9GU0LzQvtGB0Y9cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueCA9IHRoaXMubWF4WDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBERUVSX1NUQVRFLklETEU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlkbGVUaW1lciA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDQk9C10L3QtdGA0YPRlNC80L4g0LLQuNC/0LDQtNC60L7QstGDINGC0YDQuNCy0LDQu9GW0YHRgtGMINC30YPQv9C40L3QutC4INCy0ZbQtCAxINC00L4gMyDRgdC10LrRg9C90LRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaWRsZUR1cmF0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKElETEVfTUFYX0RVUkFUSU9OIC0gSURMRV9NSU5fRFVSQVRJT04gKyAxKSkgKyBJRExFX01JTl9EVVJBVElPTjtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnggPD0gdGhpcy5taW5YICYmIHRoaXMuZGlyZWN0aW9uID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g0JTQvtGB0Y/Qs9C70Lgg0LvRltCy0L7Qs9C+INC60YDQsNGOIC0g0LfRg9C/0LjQvdGP0ZTQvNC+0YHRj1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy54ID0gdGhpcy5taW5YO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IERFRVJfU1RBVEUuSURMRTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaWRsZVRpbWVyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vINCT0LXQvdC10YDRg9GU0LzQviDQstC40L/QsNC00LrQvtCy0YMg0YLRgNC40LLQsNC70ZbRgdGC0Ywg0LfRg9C/0LjQvdC60Lgg0LLRltC0IDEg0LTQviAzINGB0LXQutGD0L3QtFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pZGxlRHVyYXRpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoSURMRV9NQVhfRFVSQVRJT04gLSBJRExFX01JTl9EVVJBVElPTiArIDEpKSArIElETEVfTUlOX0RVUkFUSU9OO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlID09PSBERUVSX1NUQVRFLklETEUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pZGxlVGltZXIrKztcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vINCf0ZbRgdC70Y8g0LfQsNCy0LXRgNGI0LXQvdC90Y8g0LfRg9C/0LjQvdC60Lgg0LfQvNGW0L3RjtGU0LzQviDQvdCw0L/RgNGP0LzQvtC6INGC0LAg0L/QtdGA0LXRhdC+0LTQuNC80L4g0LTQviDRhdC+0LTRjNCx0LhcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaWRsZVRpbWVyID49IHRoaXMuaWRsZUR1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiAqPSAtMTsgLy8g0JfQvNGW0L3RjtGU0LzQviDQvdCw0L/RgNGP0LzQvtC6ICjQstC70ZbQstC+IOKGlCDQstC/0YDQsNCy0L4pXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0gREVFUl9TVEFURS5XQUxLSU5HO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mcmFtZUluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZnJhbWVSZXBlYXRDb3VudGVyID0gMDsgLy8g0KHQutC40LTQsNGU0LzQviDQu9GW0YfQuNC70YzQvdC40Log0L/QvtCy0YLQvtGA0LXQvdGMXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRyYXcoY3R4LCBzcHJpdGVJbWFnZSwgZnJhbWVXaWR0aCwgZnJhbWVIZWlnaHQsIGRlZXJXaWR0aCwgZGVlckhlaWdodCkge1xuICAgICAgICAgICAgICAgIGlmICghc3ByaXRlSW1hZ2UuY29tcGxldGUgfHwgZnJhbWVXaWR0aCA8PSAwIHx8IGZyYW1lSGVpZ2h0IDw9IDApIHJldHVybjtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHsgcm93LCBjb2wgfSA9IHRoaXMuZ2V0U3ByaXRlRnJhbWVJbmRleCgpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vINCa0L7QvtGA0LTQuNC90LDRgtC4INC60LDQtNGA0YMg0LIg0YHQv9GA0LDQudGCLdC70LjRgdGC0ZYgKNCy0LjQutC+0YDQuNGB0YLQvtCy0YPRlNC80L4gTWF0aC5mbG9vciDQtNC70Y8g0YPQvdC40LrQvdC10L3QvdGPIHN1Yi1waXhlbCDRgNC10L3QtNC10YDQuNC90LPRgyDQvdCwIGlPUylcbiAgICAgICAgICAgICAgICBjb25zdCBzb3VyY2VYID0gTWF0aC5mbG9vcihjb2wgKiBmcmFtZVdpZHRoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzb3VyY2VZID0gTWF0aC5mbG9vcihyb3cgKiBmcmFtZUhlaWdodCk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc291cmNlV2lkdGggPSBNYXRoLmZsb29yKGZyYW1lV2lkdGgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNvdXJjZUhlaWdodCA9IE1hdGguZmxvb3IoZnJhbWVIZWlnaHQpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vINCa0L7QvtGA0LTQuNC90LDRgtC4INC90LAgY2FudmFzICjRgtCw0LrQvtC2INCy0LjQutC+0YDQuNGB0YLQvtCy0YPRlNC80L4gTWF0aC5mbG9vcilcbiAgICAgICAgICAgICAgICBjb25zdCBkZXN0WCA9IE1hdGguZmxvb3IodGhpcy54KTtcbiAgICAgICAgICAgICAgICBjb25zdCBkZXN0WSA9IE1hdGguZmxvb3IodGhpcy55KTtcbiAgICAgICAgICAgICAgICBjb25zdCBkZXN0V2lkdGggPSBNYXRoLmZsb29yKGRlZXJXaWR0aCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVzdEhlaWdodCA9IE1hdGguZmxvb3IoZGVlckhlaWdodCk7XG5cbiAgICAgICAgICAgICAgICAvLyDQktC40YDRltC30LDRlNC80L4g0LrQsNC00YAg0LfRliDRgdC/0YDQsNC50YIt0LvQuNGB0YLQsCDRgtCwINC80LDQu9GO0ZTQvNC+INC90LAgY2FudmFzXG4gICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShcbiAgICAgICAgICAgICAgICAgICAgc3ByaXRlSW1hZ2UsXG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZVgsIHNvdXJjZVksIHNvdXJjZVdpZHRoLCBzb3VyY2VIZWlnaHQsIC8vINCU0LbQtdGA0LXQu9C+ICjRgdC/0YDQsNC50YIt0LvQuNGB0YIpXG4gICAgICAgICAgICAgICAgICAgIGRlc3RYLCBkZXN0WSwgZGVzdFdpZHRoLCBkZXN0SGVpZ2h0IC8vINCf0YDQuNC30L3QsNGH0LXQvdC90Y8gKGNhbnZhcylcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vINCc0LDQu9GO0ZTQvNC+INGB0LXRgNC00LXRh9C60LAg0L3QsNC0INC+0LvQtdC90LXQvFxuICAgICAgICAgICAgICAgIHRoaXMuaGVhcnRzLmZvckVhY2goaGVhcnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBoZWFydC5kcmF3KGN0eCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vINCX0LDQstCw0L3RgtCw0LbQtdC90L3RjyDQt9C+0LHRgNCw0LbQtdC90YwgKNGB0YLQstC+0YDRjtGU0LzQviDQv9C10YDQtdC0INGB0YLQstC+0YDQtdC90L3Rj9C8INC+0LvQtdC90ZbQsilcbiAgICAgICAgY29uc3QgaW1hZ2VzID0ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbmV3IEltYWdlKCksXG4gICAgICAgICAgICB0cmVlOiBuZXcgSW1hZ2UoKSxcbiAgICAgICAgICAgIGRlZXJTcHJpdGU6IG5ldyBJbWFnZSgpLCAvLyDQodC/0YDQsNC50YIt0LvQuNGB0YIg0LfQsNC80ZbRgdGC0Ywg0L7QtNC90L7Qs9C+INC30L7QsdGA0LDQttC10L3QvdGPXG4gICAgICAgICAgICBoZWFydDogbmV3IEltYWdlKCkgLy8g0JfQvtCx0YDQsNC20LXQvdC90Y8g0YHQtdGA0LTQtdGH0LrQsFxuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgLy8g0JzQsNGB0LjQsiDQvtC70LXQvdGW0LIgXG4gICAgICAgIGNvbnN0IGRlZXJzID0gW107XG4gICAgICAgIFxuICAgICAgICAvLyDQmtC+0L3RhNGW0LPRg9GA0LDRhtGW0Y8g0LTQu9GPINGB0YLQstC+0YDQtdC90L3RjyDQvtC70LXQvdGW0LJcbiAgICAgICAgY29uc3QgREVFUl9DT1VOVCA9IDM7IC8vINCa0ZbQu9GM0LrRltGB0YLRjCDQvtC70LXQvdGW0LJcbiAgICAgICAgXG4gICAgICAgIC8vINCg0L7Qt9GA0LDRhdC+0LLRg9GU0LzQviDQutC+0LXRhNGW0YbRltGU0L3RgiDQvNCw0YHRiNGC0LDQsdGD0LLQsNC90L3RjyDQtNC70Y8g0L/QvtC30LjRhtGW0Lkg0L7Qu9C10L3RltCyXG4gICAgICAgIGNvbnN0IHNjYWxlWCA9IENBTlZBU19XSURUSCAvIDEzNjY7XG4gICAgICAgIGNvbnN0IHNjYWxlWSA9IENBTlZBU19IRUlHSFQgLyA1MDA7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBkZWVyQ29uZmlncyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGFydFg6IENBTlZBU19XSURUSCAvIDIgKyA1MCAqIHNjYWxlWCxcbiAgICAgICAgICAgICAgICBzdGFydFk6IHRyZWVZICsgVFJFRV9IRUlHSFQgLSAyMCArIGRlZXJIZWlnaHRPZmZzZXQsIC8vINCf0ZbQtCDRj9C70LjQvdC60L7RjiAodHJlZVkgKyDQstC40YHQvtGC0LAg0Y/Qu9C40L3QutC4IC0g0LLRltC00YHRgtGD0L8pXG4gICAgICAgICAgICAgICAgbWluWDogQ0FOVkFTX1dJRFRIIC8gMiAtIDIwMCAqIHNjYWxlWCxcbiAgICAgICAgICAgICAgICBtYXhYOiBDQU5WQVNfV0lEVEggLyAyICsgMzAwICogc2NhbGVYLFxuICAgICAgICAgICAgICAgIHNwZWVkOiAwLjUsXG4gICAgICAgICAgICAgICAgekluZGV4OiA0XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXJ0WDogQ0FOVkFTX1dJRFRIIC8gMiAtIDEwMCAqIHNjYWxlWCxcbiAgICAgICAgICAgICAgICBzdGFydFk6IENBTlZBU19IRUlHSFQgLyAyIC0gQkFTRV9ERUVSX0hFSUdIVCAvIDIgKyA1MCAqIHNjYWxlWSArIGRlZXJIZWlnaHRPZmZzZXQsXG4gICAgICAgICAgICAgICAgbWluWDogQ0FOVkFTX1dJRFRIIC8gMiAtIDE1MCAqIHNjYWxlWCxcbiAgICAgICAgICAgICAgICBtYXhYOiBDQU5WQVNfV0lEVEggLyAyICsgMTUwICogc2NhbGVYLFxuICAgICAgICAgICAgICAgIHNwZWVkOiAwLjMsXG4gICAgICAgICAgICAgICAgekluZGV4OiAzXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXJ0WDogQ0FOVkFTX1dJRFRIIC8gMiAtIDEwMCAqIHNjYWxlWCxcbiAgICAgICAgICAgICAgICBzdGFydFk6IENBTlZBU19IRUlHSFQgLyAyIC0gQkFTRV9ERUVSX0hFSUdIVCAvIDIgLSA1MCAqIHNjYWxlWSArIGRlZXJIZWlnaHRPZmZzZXQsXG4gICAgICAgICAgICAgICAgbWluWDogQ0FOVkFTX1dJRFRIIC8gMiAtIDI1MCAqIHNjYWxlWCxcbiAgICAgICAgICAgICAgICBtYXhYOiBDQU5WQVNfV0lEVEggLyAyICsgMjUwICogc2NhbGVYLFxuICAgICAgICAgICAgICAgIHNwZWVkOiAwLjQsXG4gICAgICAgICAgICAgICAgekluZGV4OiAxIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICBcbiAgICAgICAgXTtcblxuICAgICAgICAvLyDQodGC0LLQvtGA0Y7RlNC80L4g0L7Qu9C10L3RltCyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgREVFUl9DT1VOVCAmJiBpIDwgZGVlckNvbmZpZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbmZpZyA9IGRlZXJDb25maWdzW2ldO1xuICAgICAgICAgICAgZGVlcnMucHVzaChuZXcgRGVlcihcbiAgICAgICAgICAgICAgICBjb25maWcuc3RhcnRYLFxuICAgICAgICAgICAgICAgIGNvbmZpZy5zdGFydFksXG4gICAgICAgICAgICAgICAgY29uZmlnLm1pblgsXG4gICAgICAgICAgICAgICAgY29uZmlnLm1heFgsXG4gICAgICAgICAgICAgICAgY29uZmlnLnNwZWVkLFxuICAgICAgICAgICAgICAgIGNvbmZpZy56SW5kZXggfHwgMCwgLy8g0JLQuNC60L7RgNC40YHRgtC+0LLRg9GU0LzQviB6SW5kZXgg0Lcg0LrQvtC90YTRltCz0YMg0LDQsdC+IDAg0LfQsCDQt9Cw0LzQvtCy0YfRg9Cy0LDQvdC90Y/QvFxuICAgICAgICAgICAgICAgIGltYWdlcy5oZWFydCAvLyDQn9C10YDQtdC00LDRlNC80L4g0LfQvtCx0YDQsNC20LXQvdC90Y8g0YHQtdGA0LTQtdGH0LrQsFxuICAgICAgICAgICAgKSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaW1hZ2VzTG9hZGVkID0gMDtcbiAgICAgICAgY29uc3QgdG90YWxJbWFnZXMgPSA0O1xuXG4gICAgICAgIGZ1bmN0aW9uIG9uSW1hZ2VMb2FkKCkge1xuICAgICAgICAgICAgaW1hZ2VzTG9hZGVkKys7XG4gICAgICAgICAgICBpZiAoaW1hZ2VzTG9hZGVkID09PSB0b3RhbEltYWdlcykge1xuICAgICAgICAgICAgICAgIC8vINCe0L3QvtCy0LvRjtGU0LzQviDQs9C70L7QsdCw0LvRjNC90ZYg0L/QvtGB0LjQu9Cw0L3QvdGPINC90LAg0L7Qu9C10L3RltCyINC/0ZbRgdC70Y8g0ZfRhSDRgdGC0LLQvtGA0LXQvdC90Y8g0YLQsCDQt9Cw0LLQsNC90YLQsNC20LXQvdC90Y8g0LfQvtCx0YDQsNC20LXQvdGMXG4gICAgICAgICAgICAgICAgcGFydGljaXBhdGVEZWVycyA9IGRlZXJzO1xuICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlRGVlcldpZHRoID0gREVFUl9XSURUSDtcbiAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0ZURlZXJIZWlnaHQgPSBERUVSX0hFSUdIVDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNGP0ZTQvNC+LCDRh9C4INGB0L/RgNCw0LnRgi3Qu9C40YHRgiDQt9Cw0LLQsNC90YLQsNC20LjQstGB0Y8g0LrQvtGA0LXQutGC0L3QvlxuICAgICAgICAgICAgICAgIGlmIChpbWFnZXMuZGVlclNwcml0ZS5jb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRGVlciBzcHJpdGUgbG9hZGVkOicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBpbWFnZXMuZGVlclNwcml0ZS53aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogaW1hZ2VzLmRlZXJTcHJpdGUuaGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICAgICAgZnJhbWVXaWR0aDogRlJBTUVfV0lEVEgsXG4gICAgICAgICAgICAgICAgICAgICAgICBmcmFtZUhlaWdodDogRlJBTUVfSEVJR0hULFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVlcldpZHRoOiBERUVSX1dJRFRILFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVlckhlaWdodDogREVFUl9IRUlHSFRcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRyYXdDYW52YXMoKTtcbiAgICAgICAgICAgICAgICBzdGFydEFuaW1hdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaW1hZ2VzLmJhY2tncm91bmQub25sb2FkID0gb25JbWFnZUxvYWQ7XG4gICAgICAgIGltYWdlcy50cmVlLm9ubG9hZCA9IG9uSW1hZ2VMb2FkO1xuICAgICAgICBpbWFnZXMuZGVlclNwcml0ZS5vbmxvYWQgPSBvbkltYWdlTG9hZDtcbiAgICAgICAgaW1hZ2VzLmhlYXJ0Lm9ubG9hZCA9IG9uSW1hZ2VMb2FkO1xuXG4gICAgICAgIGltYWdlcy5iYWNrZ3JvdW5kLnNyYyA9IGlzTW9iaWxlID8gJ2h0dHBzOi8vZmF2LXByb20uY29tL2h0bWwvZ2xvYmFsLW55LTIwMjYtaHIvaW1nL3BhcnRpY2lwYXRlL2NhbnZhcy1iZy10YWIucG5nJyA6ICdodHRwczovL2Zhdi1wcm9tLmNvbS9odG1sL2dsb2JhbC1ueS0yMDI2LWhyL2ltZy9wYXJ0aWNpcGF0ZS9jYW52YXMtYmcucG5nJztcbiAgICAgICAgaW1hZ2VzLnRyZWUuc3JjID0gJ2h0dHBzOi8vZmF2LXByb20uY29tL2h0bWwvZ2xvYmFsLW55LTIwMjYtaHIvaW1nL3BhcnRpY2lwYXRlL3RyZWUucG5nJztcbiAgICAgICAgaW1hZ2VzLmRlZXJTcHJpdGUuc3JjID0gJ2h0dHBzOi8vZmF2LXByb20uY29tL2h0bWwvZ2xvYmFsLW55LTIwMjYtaHIvaW1nL3BhcnRpY2lwYXRlL2RlZXItc3ByaXRlLnBuZyc7XG4gICAgICAgIGltYWdlcy5oZWFydC5zcmMgPSAnaHR0cHM6Ly9mYXYtcHJvbS5jb20vaHRtbC9nbG9iYWwtbnktMjAyNi1oci9pbWcvcGFydGljaXBhdGUvZGVlci1oZWFydC5wbmcnO1xuICAgICAgICBcbiAgICAgICAgLy8g0JTQvtC00LDRlNC80L4g0L7QsdGA0L7QsdC90LjQutC4INC/0L7QtNGW0Lkg0YLRltC70YzQutC4INC+0LTQuNC9INGA0LDQt1xuICAgICAgICBpZiAoIWNhbnZhc0NsaWNrSGFuZGxlcnNBdHRhY2hlZCkge1xuICAgICAgICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlUGFydGljaXBhdGVDYW52YXNDbGljayk7XG4gICAgICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGhhbmRsZVBhcnRpY2lwYXRlQ2FudmFzVG91Y2hTdGFydCwgeyBwYXNzaXZlOiB0cnVlIH0pO1xuICAgICAgICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgaGFuZGxlUGFydGljaXBhdGVDYW52YXNUb3VjaEVuZCwgeyBwYXNzaXZlOiB0cnVlIH0pO1xuICAgICAgICAgICAgY2FudmFzQ2xpY2tIYW5kbGVyc0F0dGFjaGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGRyYXdDYW52YXMoKSB7XG4gICAgICAgICAgICAvLyDQntGH0LjRidC10L3QvdGPIGNhbnZhc1xuICAgICAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBDQU5WQVNfV0lEVEgsIENBTlZBU19IRUlHSFQpO1xuXG4gICAgICAgICAgICAvLyDQnNCw0LvRjtGU0LzQviDRhNC+0L1cbiAgICAgICAgICAgIGlmIChpbWFnZXMuYmFja2dyb3VuZC5jb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1hZ2VzLmJhY2tncm91bmQsIDAsIDAsIENBTlZBU19XSURUSCwgQ0FOVkFTX0hFSUdIVCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHpJbmRleCDQtNC70Y8g0Y/Qu9C40L3QutC4ICjQvNGW0LYg0L7Qu9C10L3Rj9C80LgpXG4gICAgICAgICAgICBjb25zdCBUUkVFX1pfSU5ERVggPSAyOyAvLyDQr9C70LjQvdC60LAg0LzQsNC70Y7RlNGC0YzRgdGPINC80ZbQtiDQvtC70LXQvdGP0LzQuCDQtyB6SW5kZXggMSDRgtCwIDJcblxuICAgICAgICAgICAgLy8g0KHRgtCy0L7RgNGO0ZTQvNC+INC80LDRgdC40LIg0LLRgdGW0YUg0LXQu9C10LzQtdC90YLRltCyINC00LvRjyDQvNCw0LvRjtCy0LDQvdC90Y8gKNC+0LvQtdC90ZYgKyDRj9C70LjQvdC60LApXG4gICAgICAgICAgICBjb25zdCBkcmF3YWJsZUVsZW1lbnRzID0gW107XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCU0L7QtNCw0ZTQvNC+INC+0LvQtdC90ZbQslxuICAgICAgICAgICAgZGVlcnMuZm9yRWFjaChkZWVyID0+IHtcbiAgICAgICAgICAgICAgICBkcmF3YWJsZUVsZW1lbnRzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZGVlcicsXG4gICAgICAgICAgICAgICAgICAgIHpJbmRleDogZGVlci56SW5kZXgsXG4gICAgICAgICAgICAgICAgICAgIGRyYXc6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbWFnZXMuZGVlclNwcml0ZS5jb21wbGV0ZSAmJiBGUkFNRV9XSURUSCA+IDAgJiYgRlJBTUVfSEVJR0hUID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZXIuZHJhdyhjdHgsIGltYWdlcy5kZWVyU3ByaXRlLCBGUkFNRV9XSURUSCwgRlJBTUVfSEVJR0hULCBERUVSX1dJRFRILCBERUVSX0hFSUdIVCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQlNC+0LTQsNGU0LzQviDRj9C70LjQvdC60YNcbiAgICAgICAgICAgIGRyYXdhYmxlRWxlbWVudHMucHVzaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3RyZWUnLFxuICAgICAgICAgICAgICAgIHpJbmRleDogVFJFRV9aX0lOREVYLFxuICAgICAgICAgICAgICAgIGRyYXc6ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChpbWFnZXMudHJlZS5jb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1hZ2VzLnRyZWUsIHRyZWVYLCB0cmVlWSwgVFJFRV9XSURUSCwgVFJFRV9IRUlHSFQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyDQodC+0YDRgtGD0ZTQvNC+INCy0YHRliDQtdC70LXQvNC10L3RgtC4INC30LAgekluZGV4ICjQvNC10L3RiNC1ID0g0LzQsNC70Y7RlNGC0YzRgdGPINGA0LDQvdGW0YjQtSwg0LHRltC70YzRiNC1ID0g0LzQsNC70Y7RlNGC0YzRgdGPINC/0ZbQt9C90ZbRiNC1KVxuICAgICAgICAgICAgZHJhd2FibGVFbGVtZW50cy5zb3J0KChhLCBiKSA9PiBhLnpJbmRleCAtIGIuekluZGV4KTtcblxuICAgICAgICAgICAgLy8g0JzQsNC70Y7RlNC80L4g0LLRgdGWINC10LvQtdC80LXQvdGC0Lgg0LIg0L/RgNCw0LLQuNC70YzQvdC+0LzRgyDQv9C+0YDRj9C00LrRg1xuICAgICAgICAgICAgZHJhd2FibGVFbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuZHJhdygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBhbmltYXRlKCkge1xuICAgICAgICAgICAgZnJhbWVDb3VudGVyKys7XG5cbiAgICAgICAgICAgIC8vINCf0LXRgNC10LLRltGA0Y/RlNC80L4sINGH0Lgg0L/QvtGC0YDRltCx0L3QviDQvtC90L7QstC70Y7QstCw0YLQuCDQutCw0LTRgNC4INCw0L3RltC80LDRhtGW0ZdcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZFVwZGF0ZUZyYW1lID0gZnJhbWVDb3VudGVyID49IEZSQU1FX0RFTEFZO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQntC90L7QstC70Y7RlNC80L4g0LPQu9C+0LHQsNC70YzQvdC40Lkg0LvRltGH0LjQu9GM0L3QuNC6INC60LDQtNGA0ZbQslxuICAgICAgICAgICAgaWYgKHNob3VsZFVwZGF0ZUZyYW1lKSB7XG4gICAgICAgICAgICAgICAgZnJhbWVDb3VudGVyID0gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8g0J7QvdC+0LLQu9GO0ZTQvNC+INCy0YHRltGFINC+0LvQtdC90ZbQslxuICAgICAgICAgICAgZGVlcnMuZm9yRWFjaChkZWVyID0+IHtcbiAgICAgICAgICAgICAgICBkZWVyLnVwZGF0ZShzaG91bGRVcGRhdGVGcmFtZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8g0J/QtdGA0LXQvNCw0LvRjNC+0LLRg9GU0LzQviBjYW52YXNcbiAgICAgICAgICAgIGRyYXdDYW52YXMoKTtcblxuICAgICAgICAgICAgcGFydGljaXBhdGVBbmltYXRpb25JZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHN0YXJ0QW5pbWF0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHBhcnRpY2lwYXRlQW5pbWF0aW9uSWQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShwYXJ0aWNpcGF0ZUFuaW1hdGlvbklkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFuaW1hdGUoKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgLy8g0J7QsdGA0L7QsdC60LAg0LfQvNGW0L3QuCDRgNC+0LfQvNGW0YDRgyDQstGW0LrQvdCwINC00LvRjyDQsNC00LDQv9GC0LjQstC90L7RgdGC0ZZcbiAgICAgICAgbGV0IHJlc2l6ZVRpbWVvdXQ7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQocmVzaXplVGltZW91dCk7XG4gICAgICAgICAgICByZXNpemVUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3SXNNb2JpbGUgPSB3aW5kb3cuaW5uZXJXaWR0aCA8PSAxMDUwO1xuICAgICAgICAgICAgICAgIC8vINCf0LXRgNC10LfQsNC/0YPRgdC60LDRlNC80L4g0ZbQvdGW0YbRltCw0LvRltC30LDRhtGW0Y4g0YLRltC70YzQutC4INGP0LrRidC+INC30LzRltC90LjQstGB0Y8g0YDQtdC20LjQvCAobW9iaWxlL2Rlc2t0b3ApXG4gICAgICAgICAgICAgICAgaWYgKG5ld0lzTW9iaWxlICE9PSBpc01vYmlsZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyDQn9C10YDQtdC30LDQv9GD0YHQutCw0ZTQvNC+INGW0L3RltGG0ZbQsNC70ZbQt9Cw0YbRltGOICjQsNC90ZbQvNCw0YbRltGPINCx0YPQtNC1INC30YPQv9C40L3QtdC90LAg0LLRgdC10YDQtdC00LjQvdGWIGluaXRQYXJ0aWNpcGF0ZUNhbnZhcylcbiAgICAgICAgICAgICAgICAgICAgaW5pdFBhcnRpY2lwYXRlQ2FudmFzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMjUwKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGFydGljaXBhdGUoKSB7XG4gICAgICAgIGlmICghdXNlcklkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFyYW1zID0geyB1c2VyaWQ6IHVzZXJJZCB9O1xuICAgICAgICBmZXRjaChhcGlVUkwgKyAnL3VzZXIvJywge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGFyYW1zKVxuICAgICAgICB9KS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBsb2FkZXJCdG4gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRvZ2dsZUNsYXNzZXMocGFydGljaXBhdGVCdG5zLCBcImxvYWRlclwiKTtcbiAgICAgICAgICAgICAgICB0b2dnbGVUcmFuc2xhdGVzKHBhcnRpY2lwYXRlQnRucywgXCJsb2FkZXJcIik7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZVRyYW5zbGF0ZXMocGFydGljaXBhdGVCdG5zLCBcImxvYWRlcl9yZWFkeVwiKTtcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlQ2xhc3NlcyhwYXJ0aWNpcGF0ZUJ0bnMsIFwiZG9uZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlQ2xhc3NlcyhwYXJ0aWNpcGF0ZUJ0bnMsIFwibG9hZGVyXCIpO1xuICAgICAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrVXNlckF1dGgoKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gbG9hZFVzZXJzKFwiP25vY2FjaGU9MVwiKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGlmIChhY3RpdmVXZWVrICYmIHRhYmxlRGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgcmVuZGVyVXNlcnMoYWN0aXZlV2VlaywgdGFibGVEYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignQVBJIHJlcXVlc3QgZmFpbGVkOicsIGVycik7XG4gICAgICAgICAgICAgICAgcmVwb3J0RXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmF2LXBhZ2UnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uaHJlZi5zdGFydHNXaXRoKFwiaHR0cHM6Ly93d3cuZmF2YmV0LmhyL1wiKSkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvcHJvbW9jaWplL3Byb21vY2lqYS9zdHViLyc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3Byb21vcy9wcm9tby9zdHViLyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGxvYWRVc2VycyhwYXJhbWV0cikge1xuICAgICAgICBjb25zdCByZXF1ZXN0cyA9IFtdO1xuICAgICAgICB0YWJsZURhdGEubGVuZ3RoID0gMDtcblxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBwZXJpb2RBbW91bnQ7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgd2VlayA9IGk7XG4gICAgICAgICAgICBjb25zdCByZXEgPSByZXF1ZXN0KGAvdXNlcnMvJHt3ZWVrfSR7cGFyYW1ldHIgPyBwYXJhbWV0ciA6IFwiXCJ9YCkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICB0YWJsZURhdGEucHVzaCh7IHdlZWssIGRhdGE6IGRhdGEgfSk7XG4gICAgICAgICAgICAgICAgaWYgKCFhY3RpdmVXZWVrKSB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZVdlZWsgPSBkYXRhLmFjdGl2ZVN0YWdlTnVtYmVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpc1Byb21vT3ZlciA9IGRhdGEuaXNQcm9tb092ZXI7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJlcXVlc3RzLnB1c2gocmVxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChyZXF1ZXN0cylcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgbG9hZGluZyB1c2VyczonLCBlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIGluaXRTbm93Zmxha2VzQ2FudmFzKCkge1xuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc25vd2ZsYWtlc0NhbnZhcycpO1xuICAgICAgICBpZiAoIWNhbnZhcykgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICBjb25zdCBmYXZQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhdi1wYWdlJyk7XG4gICAgICAgIFxuICAgICAgICAvLyDQmtC+0L3RgdGC0LDQvdGC0LhcbiAgICAgICAgY29uc3QgU05PV0ZMQUtFX0NPVU5UID0gNDAwOyBcbiAgICAgICAgY29uc3QgU05PV0ZMQUtFX01JTl9TSVpFID0gNDtcbiAgICAgICAgY29uc3QgU05PV0ZMQUtFX01BWF9TSVpFID0gMTA7XG4gICAgICAgIGNvbnN0IFNOT1dGTEFLRV9NSU5fU1BFRUQgPSAwLjE7XG4gICAgICAgIGNvbnN0IFNOT1dGTEFLRV9NQVhfU1BFRUQgPSAwLjM7XG4gICAgICAgIGNvbnN0IFNOT1dGTEFLRV9XSU5EX1JBTkdFID0gMC40O1xuICAgICAgICBjb25zdCBTTk9XRkxBS0VfU1BBV05fSU5URVJWQUwgPSAyMDA7XG5cbiAgICAgICAgY29uc3Qgc25vd2ZsYWtlcyA9IFtdO1xuICAgICAgICBsZXQgbGFzdFNub3dmbGFrZVRpbWUgPSAwO1xuICAgICAgICBsZXQgYW5pbWF0aW9uSWQgPSBudWxsO1xuICAgICAgICBcbiAgICAgICAgLy8g0JLRgdGC0LDQvdC+0LLQu9GO0ZTQvNC+INGA0L7Qt9C80ZbRgCBjYW52YXMg0L3QsCDQstC10YHRjCAuZmF2LXBhZ2VcbiAgICAgICAgZnVuY3Rpb24gcmVzaXplQ2FudmFzKCkge1xuICAgICAgICAgICAgbGV0IG5ld1dpZHRoLCBuZXdIZWlnaHQ7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChmYXZQYWdlKSB7XG4gICAgICAgICAgICAgICAgLy8g0JLQuNC60L7RgNC40YHRgtC+0LLRg9GU0LzQviBzY3JvbGxIZWlnaHQg0LTQu9GPINC+0YLRgNC40LzQsNC90L3RjyDRgNC10LDQu9GM0L3QvtGXINCy0LjRgdC+0YLQuCDQutC+0L3RgtC10L3RgtGDXG4gICAgICAgICAgICAgICAgY29uc3QgcmVjdCA9IGZhdlBhZ2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAgICAgbmV3V2lkdGggPSByZWN0LndpZHRoIHx8IGZhdlBhZ2Uub2Zmc2V0V2lkdGggfHwgd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgICAgICAgICAgLy8g0JTQu9GPINCy0LjRgdC+0YLQuCDQstC40LrQvtGA0LjRgdGC0L7QstGD0ZTQvNC+IHNjcm9sbEhlaWdodCDRj9C60YnQviDQstGW0L0g0LHRltC70YzRiNC40Lkg0LfQsCBvZmZzZXRIZWlnaHRcbiAgICAgICAgICAgICAgICBjb25zdCBvZmZzZXRIZWlnaHQgPSBmYXZQYWdlLm9mZnNldEhlaWdodCB8fCBmYXZQYWdlLmNsaWVudEhlaWdodDtcbiAgICAgICAgICAgICAgICBjb25zdCBzY3JvbGxIZWlnaHQgPSBmYXZQYWdlLnNjcm9sbEhlaWdodDtcbiAgICAgICAgICAgICAgICBuZXdIZWlnaHQgPSBNYXRoLm1heChzY3JvbGxIZWlnaHQsIG9mZnNldEhlaWdodCwgcmVjdC5oZWlnaHQpIHx8IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gRmFsbGJhY2sg0L3QsCB2aWV3cG9ydFxuICAgICAgICAgICAgICAgIG5ld1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgICAgICAgICAgbmV3SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNGP0ZTQvNC+INGH0Lgg0YDQvtC30LzRltGA0Lgg0LfQvNGW0L3QuNC70LjRgdGPINC/0LXRgNC10LQg0L7QvdC+0LLQu9C10L3QvdGP0LxcbiAgICAgICAgICAgIGlmIChjYW52YXMud2lkdGggIT09IG5ld1dpZHRoIHx8IGNhbnZhcy5oZWlnaHQgIT09IG5ld0hlaWdodCkge1xuICAgICAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IG5ld1dpZHRoO1xuICAgICAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSBuZXdIZWlnaHQ7XG4gICAgICAgICAgICAgICAgLy8g0J7Rh9C40YnQsNGU0LzQviDRgdC90ZbQttC40L3QutC4INC/0YDQuCDQt9C80ZbQvdGWINGA0L7Qt9C80ZbRgNGDXG4gICAgICAgICAgICAgICAgc25vd2ZsYWtlcy5sZW5ndGggPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8g0JLRgdGC0LDQvdC+0LLQu9GO0ZTQvNC+INGA0L7Qt9C80ZbRgCBjYW52YXMg0Lcg0L3QtdCy0LXQu9C40LrQvtGOINC30LDRgtGA0LjQvNC60L7RjiDQtNC70Y8g0LrQvtGA0LXQutGC0L3QvtCz0L4g0YDQvtC30YDQsNGF0YPQvdC60YMg0YDQvtC30LzRltGA0ZbQslxuICAgICAgICAvLyDQktC40LrQvtGA0LjRgdGC0L7QstGD0ZTQvNC+INC60ZbQu9GM0LrQsCDQutCw0LTRgNGW0LIg0LTQu9GPINCz0LDRgNCw0L3RgtGW0Zcg0L/RgNCw0LLQuNC70YzQvdC+0LPQviDRgNC+0LfQvNGW0YDRg1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgcmVzaXplQ2FudmFzKCk7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc2l6ZUNhbnZhcygpO1xuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlc2l6ZUNhbnZhcygpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZUNhbnZhcyk7XG5cbiAgICAgICAgLy8g0JfQsNCy0LDQvdGC0LDQttC10L3QvdGPINC30L7QsdGA0LDQttC10L3QvdGPINGB0L3RltC20LjQvdC60LhcbiAgICAgICAgY29uc3Qgc25vd2ZsYWtlSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgbGV0IGltYWdlTG9hZGVkID0gZmFsc2U7XG5cbiAgICAgICAgc25vd2ZsYWtlSW1hZ2Uub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpbWFnZUxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICAvLyDQp9C10LrQsNGU0LzQviDQv9C+0LrQuCDRgdGC0L7RgNGW0L3QutCwINCy0LjQudC00LUg0LfRliDRgdGC0LDQvdGDIGxvYWRpbmcg0L/QtdGA0LXQtCDRgdGC0LDRgNGC0L7QvCDQsNC90ZbQvNCw0YbRltGXXG4gICAgICAgICAgICBmdW5jdGlvbiB3YWl0Rm9yUGFnZVJlYWR5KCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlzUGFnZUxvYWRpbmcgPSBtYWluUGFnZSAmJiBtYWluUGFnZS5jbGFzc0xpc3QuY29udGFpbnMoJ2xvYWRpbmcnKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoaXNQYWdlTG9hZGluZykge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzaXplQ2FudmFzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzaXplQ2FudmFzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vINCU0L7QtNCw0YLQutC+0LLQsCDQv9C10YDQtdCy0ZbRgNC60LAg0L/RltGB0LvRjyDRidC1INC+0LTQvdC+0LPQviDQutCw0LTRgNGDXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNpemVDYW52YXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYW52YXMud2lkdGggPiAwICYmIGNhbnZhcy5oZWlnaHQgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbENhbnZhc1dpdGhTbm93Zmxha2VzKCk7IC8vINCX0LDQv9C+0LLQvdGO0ZTQvNC+INC60LDQvdCy0LDRgSDRgdC90ZbQttC40L3QutCw0LzQuCDQv9GA0Lgg0L/QtdGA0YjQvtC80YMg0YDQtdC90LTQtdGA0ZZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydEFuaW1hdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDQr9C60YnQviDQstGB0LUg0YnQtSDQvdC10L/RgNCw0LLQuNC70YzQvdC40Lkg0YDQvtC30LzRltGALCDQv9C+0LLRgtC+0YDRjtGU0LzQvlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQod2FpdEZvclBhZ2VSZWFkeSwgNTApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9LCA0MDApOyAvLyDQp9C10LrQsNGU0LzQviDRgtGA0L7RhdC4INCx0ZbQu9GM0YjQtSDQvdGW0LYgaGlkZUxvYWRlciAoMzAwbXMpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g0KHRgtC+0YDRltC90LrQsCDQs9C+0YLQvtCy0LAsINCy0YHRgtCw0L3QvtCy0LvRjtGU0LzQviDRgNC+0LfQvNGW0YAg0YLQsCDQt9Cw0L/Rg9GB0LrQsNGU0LzQvlxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzaXplQ2FudmFzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc2l6ZUNhbnZhcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc2l6ZUNhbnZhcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2FudmFzLndpZHRoID4gMCAmJiBjYW52YXMuaGVpZ2h0ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGxDYW52YXNXaXRoU25vd2ZsYWtlcygpOyAvLyDQl9Cw0L/QvtCy0L3RjtGU0LzQviDQutCw0L3QstCw0YEg0YHQvdGW0LbQuNC90LrQsNC80Lgg0L/RgNC4INC/0LXRgNGI0L7QvNGDINGA0LXQvdC00LXRgNGWXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydEFuaW1hdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB3YWl0Rm9yUGFnZVJlYWR5KCk7XG4gICAgICAgIH07XG4gICAgICAgIHNub3dmbGFrZUltYWdlLnNyYyA9ICdodHRwczovL2Zhdi1wcm9tLmNvbS9odG1sL2dsb2JhbC1ueS0yMDI2LWhyL2ltZy9zbm93Zmxha2UucG5nJztcbiAgICAgICBcblxuICAgICAgICAvLyDQmtC70LDRgSDQtNC70Y8g0YHQvdGW0LbQuNC90LrQuFxuICAgICAgICBjbGFzcyBTbm93Zmxha2Uge1xuICAgICAgICAgICAgY29uc3RydWN0b3IoaW5pdGlhbFkgPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy54ID0gTWF0aC5yYW5kb20oKSAqIChjYW52YXMud2lkdGggfHwgd2luZG93LmlubmVyV2lkdGgpO1xuICAgICAgICAgICAgICAgIC8vINCv0LrRidC+INC/0LXRgNC10LTQsNC90L4gaW5pdGlhbFksINCy0LjQutC+0YDQuNGB0YLQvtCy0YPRlNC80L4g0ZfRlyAo0LTQu9GPINC/0L7Rh9Cw0YLQutC+0LLQvtCz0L4g0LfQsNC/0L7QstC90LXQvdC90Y8g0LrQsNC90LLQsNGB0YMpXG4gICAgICAgICAgICAgICAgLy8g0IbQvdCw0LrRiNC1INGB0L/QsNCy0L3QuNC80L4g0LfQstC10YDRhdGDXG4gICAgICAgICAgICAgICAgdGhpcy55ID0gaW5pdGlhbFkgIT09IG51bGwgPyBpbml0aWFsWSA6IC0yMDtcbiAgICAgICAgICAgICAgICB0aGlzLnNpemUgPSBNYXRoLnJhbmRvbSgpICogKFNOT1dGTEFLRV9NQVhfU0laRSAtIFNOT1dGTEFLRV9NSU5fU0laRSkgKyBTTk9XRkxBS0VfTUlOX1NJWkU7XG4gICAgICAgICAgICAgICAgdGhpcy5zcGVlZCA9IE1hdGgucmFuZG9tKCkgKiAoU05PV0ZMQUtFX01BWF9TUEVFRCAtIFNOT1dGTEFLRV9NSU5fU1BFRUQpICsgU05PV0ZMQUtFX01JTl9TUEVFRDtcbiAgICAgICAgICAgICAgICB0aGlzLndpbmQgPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiBTTk9XRkxBS0VfV0lORF9SQU5HRTtcbiAgICAgICAgICAgICAgICB0aGlzLm9wYWNpdHkgPSBNYXRoLnJhbmRvbSgpICogMC41ICsgMC41O1xuICAgICAgICAgICAgICAgIHRoaXMucm90YXRpb24gPSBNYXRoLnJhbmRvbSgpICogTWF0aC5QSSAqIDI7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3RhdGlvblNwZWVkID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMC4wMjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdXBkYXRlKCkge1xuICAgICAgICAgICAgICAgIHRoaXMueSArPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgICAgIHRoaXMueCArPSB0aGlzLndpbmQgKyAoTWF0aC5zaW4odGhpcy55ICogMC4wMSkgKiAwLjIpO1xuICAgICAgICAgICAgICAgIHRoaXMucm90YXRpb24gKz0gdGhpcy5yb3RhdGlvblNwZWVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkcmF3KCkge1xuICAgICAgICAgICAgICAgIGlmICghaW1hZ2VMb2FkZWQpIHJldHVybjtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNC60LAg0YfQuCBjYW52YXMg0LzQsNGUINC/0YDQsNCy0LjQu9GM0L3QuNC5INGA0L7Qt9C80ZbRgFxuICAgICAgICAgICAgICAgIGlmIChjYW52YXMud2lkdGggPT09IDAgfHwgY2FudmFzLmhlaWdodCA9PT0gMCkgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgY3R4LnNhdmUoKTtcbiAgICAgICAgICAgICAgICBjdHguZ2xvYmFsQWxwaGEgPSB0aGlzLm9wYWNpdHk7XG4gICAgICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZSh0aGlzLngsIHRoaXMueSk7XG4gICAgICAgICAgICAgICAgY3R4LnJvdGF0ZSh0aGlzLnJvdGF0aW9uKTtcbiAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgICAgICAgICBzbm93Zmxha2VJbWFnZSxcbiAgICAgICAgICAgICAgICAgICAgLXRoaXMuc2l6ZSAvIDIsXG4gICAgICAgICAgICAgICAgICAgIC10aGlzLnNpemUgLyAyLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNpemUsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2l6ZVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgY3R4LnJlc3RvcmUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaXNPZmZTY3JlZW4oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMueSA+IGNhbnZhcy5oZWlnaHQgKyAyMCB8fCBcbiAgICAgICAgICAgICAgICAgICAgICAgdGhpcy54IDwgLTIwIHx8IFxuICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnggPiBjYW52YXMud2lkdGggKyAyMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVNub3dmbGFrZShpbml0aWFsWSA9IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChzbm93Zmxha2VzLmxlbmd0aCA8IFNOT1dGTEFLRV9DT1VOVCkge1xuICAgICAgICAgICAgICAgIHNub3dmbGFrZXMucHVzaChuZXcgU25vd2ZsYWtlKGluaXRpYWxZKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vINCk0YPQvdC60YbRltGPINC00LvRjyDQv9C+0YfQsNGC0LrQvtCy0L7Qs9C+INC30LDQv9C+0LLQvdC10L3QvdGPINC60LDQvdCy0LDRgdGDINGB0L3RltC20LjQvdC60LDQvNC4XG4gICAgICAgIGZ1bmN0aW9uIGZpbGxDYW52YXNXaXRoU25vd2ZsYWtlcygpIHtcbiAgICAgICAgICAgIGlmIChjYW52YXMud2lkdGggPT09IDAgfHwgY2FudmFzLmhlaWdodCA9PT0gMCkgcmV0dXJuO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQodGC0LLQvtGA0Y7RlNC80L4g0YHQvdGW0LbQuNC90LrQuCDQv9C+INCy0YHRjNC+0LzRgyDQutCw0L3QstCw0YHRgyAo0LLRgdGWIDIwMCDRgdC90ZbQttC40L3QvtC6KVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBTTk9XRkxBS0VfQ09VTlQ7IGkrKykge1xuICAgICAgICAgICAgICAgIC8vINCg0L7Qt9C/0L7QtNGW0LvRj9GU0LzQviDRgdC90ZbQttC40L3QutC4INC/0L4g0LLRgdGW0Lkg0LLQuNGB0L7RgtGWINC60LDQvdCy0LDRgdGDXG4gICAgICAgICAgICAgICAgY29uc3QgaW5pdGlhbFkgPSBNYXRoLnJhbmRvbSgpICogY2FudmFzLmhlaWdodDtcbiAgICAgICAgICAgICAgICBjcmVhdGVTbm93Zmxha2UoaW5pdGlhbFkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlU25vd2ZsYWtlcygpIHtcbiAgICAgICAgICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gICAgICAgICAgICBpZiAobm93IC0gbGFzdFNub3dmbGFrZVRpbWUgPiBTTk9XRkxBS0VfU1BBV05fSU5URVJWQUwpIHtcbiAgICAgICAgICAgICAgICBjcmVhdGVTbm93Zmxha2UoKTtcbiAgICAgICAgICAgICAgICBsYXN0U25vd2ZsYWtlVGltZSA9IG5vdztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHNub3dmbGFrZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICBzbm93Zmxha2VzW2ldLnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgIGlmIChzbm93Zmxha2VzW2ldLmlzT2ZmU2NyZWVuKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgc25vd2ZsYWtlcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZHJhd1Nub3dmbGFrZXMoKSB7XG4gICAgICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNC60LAg0YfQuCBjYW52YXMg0LzQsNGUINC/0YDQsNCy0LjQu9GM0L3QuNC5INGA0L7Qt9C80ZbRgCDQv9C10YDQtdC0INC80LDQu9GO0LLQsNC90L3Rj9C8XG4gICAgICAgICAgICBpZiAoY2FudmFzLndpZHRoID09PSAwIHx8IGNhbnZhcy5oZWlnaHQgPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXNpemVDYW52YXMoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIHNub3dmbGFrZXMuZm9yRWFjaChzbm93Zmxha2UgPT4ge1xuICAgICAgICAgICAgICAgIHNub3dmbGFrZS5kcmF3KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGFuaW1hdGUoKSB7XG4gICAgICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNGP0ZTQvNC+INGA0L7Qt9C80ZbRgCBjYW52YXMg0L3QsCDQv9C+0YfQsNGC0LrRgyDQutC+0LbQvdC+0LPQviDQutCw0LTRgNGDICjRgtGW0LvRjNC60Lgg0Y/QutGJ0L4g0LLRltC9INC90LXQv9GA0LDQstC40LvRjNC90LjQuSlcbiAgICAgICAgICAgIGlmIChjYW52YXMud2lkdGggPT09IDAgfHwgY2FudmFzLmhlaWdodCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJlc2l6ZUNhbnZhcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB1cGRhdGVTbm93Zmxha2VzKCk7XG4gICAgICAgICAgICBkcmF3U25vd2ZsYWtlcygpO1xuICAgICAgICAgICAgYW5pbWF0aW9uSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBzdGFydEFuaW1hdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChhbmltYXRpb25JZCkge1xuICAgICAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbklkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFuaW1hdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vINCX0YPQv9C40L3Rj9GU0LzQviDQsNC90ZbQvNCw0YbRltGOINC/0YDQuCDQstC40YXQvtC00ZYg0Lcgdmlld3BvcnRcbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICAgICAgICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghYW5pbWF0aW9uSWQgJiYgaW1hZ2VMb2FkZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QW5pbWF0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYW5pbWF0aW9uSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbklkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbklkID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGNhbnZhcyk7XG4gICAgfVxuICAgIFxuICAgIGxvYWRUcmFuc2xhdGlvbnMoKVxuICAgICAgICAudGhlbihpbml0KSAvLyDQt9Cw0L/Rg9GB0Log0ZbQvdGW0YLRgyDRgdGC0L7RgNGW0L3QutC4XG5cbiAgICAvLyDQotC40LzRh9Cw0YHQvtCy0LjQuSDQvtCxJ9GU0LrRgiDQtyDQtNCw0L3QuNC80Lgg0L/RgNC+INC/0YDQvtC80ZbQttC60Lgg0YLQuNC20L3RltCyXG4gICAgLy8gVE9ETzog0JfQsNC80ZbQvdC40YLQuCDQvdCwINC00LDQvdGWINC3INCx0LXQutC10L3QtNGDXG4gICAgLy8g0J/RgNC40LrQu9Cw0LQg0YHRgtGA0YPQutGC0YPRgNC4INC00LDQvdC40YUg0Lcg0LHQtdC60LXQvdC00YM6XG4gICAgLy8ge1xuICAgIC8vICAgICAxOiB7IHN0YXJ0OiBcIjIwMjUtMTItMTVUMDA6MDA6MDBcIiwgZW5kOiBcIjIwMjUtMTItMjFUMjM6NTk6NTlcIiB9LFxuICAgIC8vICAgICAyOiB7IHN0YXJ0OiBcIjIwMjUtMTItMjJUMDA6MDA6MDBcIiwgZW5kOiBcIjIwMjUtMTItMjhUMjM6NTk6NTlcIiB9LFxuICAgIC8vICAgICAuLi5cbiAgICAvLyB9XG4gICAgLy8g0JTQu9GPINGW0L3RgtC10LPRgNCw0YbRltGXINC3INCx0LXQutC10L3QtNC+0Lw6INC30LDQvNGW0L3QuNGC0Lgg0YbQtdC5INC+0LEn0ZTQutGCINC90LAg0LTQsNC90ZYg0LcgQVBJXG4gICAgLy8g0J3QsNC/0YDQuNC60LvQsNC0OiBjb25zdCB3ZWVrc0RhdGEgPSBhd2FpdCByZXF1ZXN0KCcvYXBpL3dlZWtzJyk7XG4gICAgY29uc3Qgd2Vla3NEYXRhID0ge1xuICAgICAgICAxOiB7XG4gICAgICAgICAgICBzdGFydDogXCIyMDI1LTEyLTE1VDAwOjAwOjAwXCIsXG4gICAgICAgICAgICBlbmQ6IFwiMjAyNS0xMi0yMVQyMzo1OTo1OVwiXG4gICAgICAgIH0sXG4gICAgICAgIDI6IHtcbiAgICAgICAgICAgIHN0YXJ0OiBcIjIwMjUtMTItMjJUMDA6MDA6MDBcIixcbiAgICAgICAgICAgIGVuZDogXCIyMDI1LTEyLTI4VDIzOjU5OjU5XCJcbiAgICAgICAgfSxcbiAgICAgICAgMzoge1xuICAgICAgICAgICAgc3RhcnQ6IFwiMjAyNS0xMi0yOVQwMDowMDowMFwiLFxuICAgICAgICAgICAgZW5kOiBcIjIwMjYtMDEtMDRUMjM6NTk6NTlcIlxuICAgICAgICB9LFxuICAgICAgICA0OiB7XG4gICAgICAgICAgICBzdGFydDogXCIyMDI2LTAxLTA1VDAwOjAwOjAwXCIsXG4gICAgICAgICAgICBlbmQ6IFwiMjAyNi0wMS0xMVQyMzo1OTo1OVwiXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8g0KTRg9C90LrRhtGW0Y8g0LTQu9GPINCy0LjQt9C90LDRh9C10L3QvdGPINCw0LrRgtC40LLQvdC+0LPQviDRgtC40LbQvdGPINC90LAg0L7RgdC90L7QstGWINC00LDQvdC40YUg0Lcg0L7QsSfRlNC60YLQsFxuICAgIGZ1bmN0aW9uIGdldEFjdGl2ZVdlZWsod2Vla3NEYXRhKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgbGV0IGFjdGl2ZVdlZWtJbmRleCA9IG51bGw7XG5cbiAgICAgICAgLy8g0J/QtdGA0LXQstGW0YDQutCwINC60L7QttC90L7Qs9C+INGC0LjQttC90Y9cbiAgICAgICAgZm9yIChjb25zdCB3ZWVrTnVtIGluIHdlZWtzRGF0YSkge1xuICAgICAgICAgICAgY29uc3Qgd2VlayA9IHdlZWtzRGF0YVt3ZWVrTnVtXTtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gbmV3IERhdGUod2Vlay5zdGFydCk7XG4gICAgICAgICAgICBjb25zdCBlbmQgPSBuZXcgRGF0ZSh3ZWVrLmVuZCk7XG5cbiAgICAgICAgICAgIGlmIChjdXJyZW50RGF0ZSA+PSBzdGFydCAmJiBjdXJyZW50RGF0ZSA8PSBlbmQpIHtcbiAgICAgICAgICAgICAgICBhY3RpdmVXZWVrSW5kZXggPSBwYXJzZUludCh3ZWVrTnVtKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhY3RpdmVXZWVrSW5kZXg7XG4gICAgfVxuXG4gICAgLy8g0IbQvdGW0YbRltCw0LvRltC30LDRhtGW0Y8g0YHQtdC60YbRltGXINGW0LPQvtGAINC3INCw0LLRgtC+0LzQsNGC0LjRh9C90LjQvCDQstC40LfQvdCw0YfQtdC90L3Rj9C8INGC0LjQttC90Y9cbiAgICBmdW5jdGlvbiBpbml0R2FtZXNXZWVrKCkge1xuICAgICAgICAvLyDQktC40LrQvtGA0LjRgdGC0L7QstGD0ZTQvNC+INCz0LvQvtCx0LDQu9GM0L3RgyDQt9C80ZbQvdC90YMgYWN0aXZlV2Vlaywg0Y/QutGJ0L4g0LLQvtC90LAg0LLQttC1INCy0YHRgtCw0L3QvtCy0LvQtdC90LAsINGW0L3QsNC60YjQtSDQstC40LfQvdCw0YfQsNGU0LzQviDQtyB3ZWVrc0RhdGFcbiAgICAgICAgaWYgKCFhY3RpdmVXZWVrKSB7XG4gICAgICAgICAgICBhY3RpdmVXZWVrID0gZ2V0QWN0aXZlV2Vlayh3ZWVrc0RhdGEpIHx8IDE7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDQntCx0LzQtdC20LXQvdC90Y8g0LTQviA0INGC0LjQttC90ZbQslxuICAgICAgICBpZiAoYWN0aXZlV2VlayA+IDQpIGFjdGl2ZVdlZWsgPSA0O1xuXG4gICAgICAgIC8vINCf0YDQuNGF0L7QstGD0LLQsNC90L3RjyDQstGB0ZbRhSDRgdC/0LjRgdC60ZbQsiDRltCz0L7RgFxuICAgICAgICBjb25zdCBnYW1lTGlzdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2FtZXNfX2xpc3QnKTtcbiAgICAgICAgZ2FtZUxpc3RzLmZvckVhY2gobGlzdCA9PiB7XG4gICAgICAgICAgICBsaXN0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8g0J/QvtC60LDQtyDRgtGW0LvRjNC60Lgg0LDQutGC0LjQstC90L7Qs9C+INGC0LjQttC90Y9cbiAgICAgICAgY29uc3QgY3VycmVudExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZ2FtZXNfX2xpc3QuX3dlZWske2FjdGl2ZVdlZWt9YCk7XG4gICAgICAgIGlmIChjdXJyZW50TGlzdCkge1xuICAgICAgICAgICAgY3VycmVudExpc3QuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g0JDQstGC0L7QvNCw0YLQuNGH0L3QtSDQtNC+0LTQsNCy0LDQvdC90Y8gZGF0YS3QsNGC0YDQuNCx0YPRgtGW0LIg0LTQu9GPINGC0YDQtdC60ZbQvdCz0YMg0YLQsCDQstGB0YLQsNC90L7QstC70LXQvdC90Y8g0L/QvtGB0LjQu9Cw0L3RjFxuICAgICAgICBhdXRvQWRkRGF0YUJ1dHRvbnMoKTtcbiAgICAgICAgc2V0R2FtZUxpbmtzKCk7XG4gICAgfVxuXG4gICAgLy8g0KLQuNC80YfQsNGB0L7QstC40Lkg0L7QsSfRlNC60YIg0Lcg0LzQsNC/0ZbQvdCz0L7QvCBnYW1lLWlkINC90LAgVVJMXG4gICAgLy8gVE9ETzog0JfQsNC80ZbQvdC40YLQuCDQvdCwINC00LDQvdGWINC3INCx0LXQutC10L3QtNGDXG4gICAgLy8g0J/RgNC40LrQu9Cw0LQg0YHRgtGA0YPQutGC0YPRgNC4INC00LDQvdC40YUg0Lcg0LHQtdC60LXQvdC00YM6XG4gICAgLy8ge1xuICAgIC8vICAgICBcIndlZWsxX2dhbWUxXCI6IFwiL2Nhc2luby9zaG93LWdhbWUvZ2FtZS1zbHVnLTFcIixcbiAgICAvLyAgICAgXCJ3ZWVrMV9nYW1lMlwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL2dhbWUtc2x1Zy0yXCIsXG4gICAgLy8gICAgIC4uLlxuICAgIC8vIH1cbiAgICAvLyDQlNC70Y8g0ZbQvdGC0LXQs9GA0LDRhtGW0Zcg0Lcg0LHQtdC60LXQvdC00L7QvDogY29uc3QgZ2FtZXNMaW5rcyA9IGF3YWl0IHJlcXVlc3QoJy9hcGkvZ2FtZXMvbGlua3MnKTtcbiAgICBjb25zdCBnYW1lc0xpbmtzID0ge1xuICAgICAgICAvLyBXZWVrIDFcbiAgICAgICAgXCJ3ZWVrMV9nYW1lMVwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lMS9cIixcbiAgICAgICAgXCJ3ZWVrMV9nYW1lMlwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWsxX2dhbWUzXCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazFfZ2FtZTRcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrMV9nYW1lNVwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWsxX2dhbWU2XCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazFfZ2FtZTdcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrMV9nYW1lOFwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWsxX2dhbWU5XCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazFfZ2FtZTEwXCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIC8vIFdlZWsgMlxuICAgICAgICBcIndlZWsyX2dhbWUxXCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazJfZ2FtZTJcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrMl9nYW1lM1wiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWsyX2dhbWU0XCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazJfZ2FtZTVcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrMl9nYW1lNlwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWsyX2dhbWU3XCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazJfZ2FtZThcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrMl9nYW1lOVwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWsyX2dhbWUxMFwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICAvLyBXZWVrIDNcbiAgICAgICAgXCJ3ZWVrM19nYW1lMVwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWszX2dhbWUyXCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazNfZ2FtZTNcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrM19nYW1lNFwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWszX2dhbWU1XCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazNfZ2FtZTZcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrM19nYW1lN1wiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWszX2dhbWU4XCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazNfZ2FtZTlcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrM19nYW1lMTBcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgLy8gV2VlayA0XG4gICAgICAgIFwid2VlazRfZ2FtZTFcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrNF9nYW1lMlwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWs0X2dhbWUzXCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazRfZ2FtZTRcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrNF9nYW1lNVwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWs0X2dhbWU2XCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazRfZ2FtZTdcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrNF9nYW1lOFwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWs0X2dhbWU5XCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazRfZ2FtZTEwXCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCJcbiAgICB9O1xuXG4gICAgLy8g0JLRgdGC0LDQvdC+0LLQu9C10L3QvdGPINGD0L3RltC60LDQu9GM0L3QuNGFINC/0L7RgdC40LvQsNC90Ywg0LTQu9GPINC60L7QttC90L7RlyDQs9GA0LhcbiAgICBmdW5jdGlvbiBzZXRHYW1lTGlua3MoKSB7XG4gICAgICAgIGNvbnN0IGdhbWVMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYW1lc19faXRlbS1saW5rW2RhdGEtZ2FtZS1pZF0nKTtcbiAgICAgICAgXG4gICAgICAgIGdhbWVMaW5rcy5mb3JFYWNoKGxpbmsgPT4ge1xuICAgICAgICAgICAgY29uc3QgZ2FtZUlkID0gbGluay5nZXRBdHRyaWJ1dGUoJ2RhdGEtZ2FtZS1pZCcpO1xuICAgICAgICAgICAgaWYgKGdhbWVJZCAmJiBnYW1lc0xpbmtzW2dhbWVJZF0pIHtcbiAgICAgICAgICAgICAgICBsaW5rLmhyZWYgPSBnYW1lc0xpbmtzW2dhbWVJZF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vINCQ0LLRgtC+0LzQsNGC0LjRh9C90LUg0LTQvtC00LDQstCw0L3QvdGPIGRhdGEt0LDRgtGA0LjQsdGD0YLRltCyINC00LvRjyDRgtGA0LXQutGW0L3Qs9GDXG4gICAgZnVuY3Rpb24gYXV0b0FkZERhdGFCdXR0b25zKCkge1xuICAgICAgICBjb25zdCBnYW1lTGlzdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2FtZXNfX2xpc3QnKTtcbiAgICAgICAgXG4gICAgICAgIGdhbWVMaXN0cy5mb3JFYWNoKGxpc3QgPT4ge1xuICAgICAgICAgICAgY29uc3Qgd2Vla01hdGNoID0gbGlzdC5jbGFzc05hbWUubWF0Y2goL193ZWVrKFxcZCspLyk7XG4gICAgICAgICAgICBpZiAoIXdlZWtNYXRjaCkgcmV0dXJuO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCB3ZWVrID0gd2Vla01hdGNoWzFdO1xuICAgICAgICAgICAgY29uc3QgaXRlbXMgPSBsaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYW1lc19faXRlbScpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpdGVtcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGdhbWVOdW1iZXIgPSBpbmRleCArIDE7XG4gICAgICAgICAgICAgICAgY29uc3QgYnV0dG9uTmFtZSA9IGB3ZWVrJHt3ZWVrfUdhbWUke2dhbWVOdW1iZXJ9YDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBsaW5rRWwgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5nYW1lc19faXRlbS1saW5rJyk7XG4gICAgICAgICAgICAgICAgaWYgKGxpbmtFbCkge1xuICAgICAgICAgICAgICAgICAgICAvLyDQntC90L7QstC70Y7RlNC80L4gZGF0YS1idXR0b24g0Y/QutGJ0L4g0YnQtSDQvdC1INCy0YHRgtCw0L3QvtCy0LvQtdC90L4g0LDQsdC+INC90LXQutC+0YDQtdC60YLQvdC1XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRCdXR0b24gPSBsaW5rRWwuZ2V0QXR0cmlidXRlKCdkYXRhLWJ1dHRvbicpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWN1cnJlbnRCdXR0b24gfHwgIWN1cnJlbnRCdXR0b24uaW5jbHVkZXMoYHdlZWske3dlZWt9R2FtZWApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rRWwuc2V0QXR0cmlidXRlKCdkYXRhLWJ1dHRvbicsIGJ1dHRvbk5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vINCS0YHRgtCw0L3QvtCy0LvRjtGU0LzQviBkYXRhLXByb21vINGP0LrRidC+INGJ0LUg0L3QtSDQstGB0YLQsNC90L7QstC70LXQvdC+XG4gICAgICAgICAgICAgICAgICAgIGlmICghbGlua0VsLmdldEF0dHJpYnV0ZSgnZGF0YS1wcm9tbycpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rRWwuc2V0QXR0cmlidXRlKCdkYXRhLXByb21vJywgJ3JhemluYV8yMDI2X2hyJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdsb2FkaW5nJykge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT57XG4gICAgICAgICAgICBpbml0UGFnZUhlaWdodCgpO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBpbml0UGFnZUhlaWdodCgpO1xuICAgIH1cblxuICAgIC8vIFRFU1RcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1idG5cIik/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS10ZXN0XCIpPy5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKTtcbiAgICB9KTtcbiAgICBjb25zdCBsbmdCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxuZy1idG5cIilcblxuICAgIGxuZ0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBpZiAoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsZVwiKSkge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcImxvY2FsZVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJsb2NhbGVcIiwgXCJlblwiKTtcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBhdXRoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hdXRoLWJ0blwiKVxuXG4gICAgYXV0aEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCB1c2VyaWQxID0gXCI3Nzc3NzdcIjtcbiAgICAgICAgY29uc3QgdXNlcmlkMiA9IFwiODg4ODg4XCI7XG4gICAgICAgIFxuICAgICAgICAvLyDQktC40LfQvdCw0YfQsNGU0LzQviDQv9C+0YLQvtGH0L3QuNC5INGB0YLQsNC9INGC0LAg0L/QtdGA0LXRhdC+0LTQuNC80L4g0LTQviDQvdCw0YHRgtGD0L/QvdC+0LPQvlxuICAgICAgICBpZiAoIXVzZXJJZCkge1xuICAgICAgICAgICAgLy8g0KHRgtCw0L0gMTog0L3QtdC80LDRlCB1c2VySWQgLT4g0LLRgdGC0LDQvdC+0LLQu9GO0ZTQvNC+IHVzZXJpZDFcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJ1c2VySWRcIiwgdXNlcmlkMSk7XG4gICAgICAgIH0gZWxzZSBpZiAodXNlcklkLnRvU3RyaW5nKCkgPT09IHVzZXJpZDEpIHtcbiAgICAgICAgICAgIC8vINCh0YLQsNC9IDI6IHVzZXJpZDEgLT4g0LLRgdGC0LDQvdC+0LLQu9GO0ZTQvNC+IHVzZXJpZDJcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJ1c2VySWRcIiwgdXNlcmlkMik7XG4gICAgICAgIH0gZWxzZSBpZiAodXNlcklkLnRvU3RyaW5nKCkgPT09IHVzZXJpZDIpIHtcbiAgICAgICAgICAgIC8vINCh0YLQsNC9IDM6IHVzZXJpZDIgLT4g0LLQuNC00LDQu9GP0ZTQvNC+IHVzZXJJZFxuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcInVzZXJJZFwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vINCv0LrRidC+IHVzZXJJZCDRltC90YjQuNC5ICjQvdC10L7Rh9GW0LrRg9Cy0LDQvdC40LkpLCDQv9C+0YfQuNC90LDRlNC80L4g0LcgdXNlcmlkMVxuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcInVzZXJJZFwiLCB1c2VyaWQxKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH0pO1xuXG59KSgpO1xuIl19
