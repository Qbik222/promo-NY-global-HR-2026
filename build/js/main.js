"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
(function () {
  var apiURL = 'https://fav-prom.com/api_black_prize';
  var mainPage = document.querySelector(".fav-page"),
    loader = document.querySelector(".spinner-overlay"),
    resultsTable = document.querySelector("#table"),
    resultsTableOther = document.querySelector("#tableOther");
  var hrLeng = document.querySelector('#hrLeng');
  var enLeng = document.querySelector('#enLeng');
  var locale = "hr";
  // let locale = sessionStorage.getItem("locale") || "hr"

  if (hrLeng) locale = 'hr';
  if (enLeng) locale = 'en';
  var debug = false;
  if (debug) hideLoader();
  var i18nData = {};
  var translateState = false;
  var userId = null;
  // let userId = Number(sessionStorage.getItem("userId")) ?? null

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
      var attempts, maxAttempts, attemptInterval, tryDetectUserId, quickCheckAndRender, waitForUserId;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            quickCheckAndRender = function _quickCheckAndRender() {
              // Ініціалізуємо висоти сторінки на основі viewport та хедера
              initPageHeight();
              initGamesWeek();
              initProgressBar();
              initParticipateCanvas();
              initSnowflakesCanvas();
              setTimeout(hideLoader, 300);

              // Оновлюємо висоти при зміні розміру вікна
              var resizeTimeout;
              window.addEventListener("resize", function () {
                clearTimeout(resizeTimeout);
                resizeTimeout = setTimeout(function () {
                  initPageHeight();
                  initParticipateCanvas();
                }, 100);
              });
              window.addEventListener("orientationchange", function () {
                setTimeout(function () {
                  initPageHeight();
                  initParticipateCanvas();
                }, 100);
              });

              // Fix dropdown scroll issue - prevent page from shifting up when opening dropdown
              var dropdowns = document.querySelectorAll('.dropdown');
              dropdowns.forEach(function (dropdown) {
                dropdown.addEventListener('toggle', function (event) {
                  if (this.open) {
                    // Dropdown is opening
                    var summary = this.querySelector('summary');
                    if (summary) {
                      // Get summary position relative to viewport
                      var summaryRect = summary.getBoundingClientRect();

                      // Check if summary is near the top of viewport (within 100px from top)
                      if (summaryRect.top < 100) {
                        // Calculate how much to scroll to keep summary visible
                        var currentScrollY = window.scrollY || window.pageYOffset;
                        var targetScrollY = currentScrollY + summaryRect.top - 120; // 120px offset from top

                        // Use requestAnimationFrame for smooth scroll
                        requestAnimationFrame(function () {
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
    // Визначаємо активний тиждень на основі даних з об'єкта
    var activeWeek = getActiveWeek(weeksData) || 1;

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

  // Викликаємо initPageHeight при завантаженні сторінки
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      initPageHeight();
    });
  } else {
    // DOM вже завантажений
    initPageHeight();
  }

  // Викликаємо init() для ініціалізації всіх компонентів
  init();
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwibWFpblBhZ2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJsb2FkZXIiLCJyZXN1bHRzVGFibGUiLCJyZXN1bHRzVGFibGVPdGhlciIsImhyTGVuZyIsImVuTGVuZyIsImxvY2FsZSIsImRlYnVnIiwiaGlkZUxvYWRlciIsImkxOG5EYXRhIiwidHJhbnNsYXRlU3RhdGUiLCJ1c2VySWQiLCJyZXF1ZXN0IiwibGluayIsImV4dHJhT3B0aW9ucyIsImZldGNoIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJvayIsIkVycm9yIiwianNvbiIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsInJlcG9ydEVycm9yIiwic3R5bGUiLCJkaXNwbGF5Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwic3RhcnRzV2l0aCIsIlByb21pc2UiLCJyZWplY3QiLCJjbGFzc0xpc3QiLCJhZGQiLCJib2R5Iiwib3ZlcmZsb3ciLCJyZW1vdmUiLCJpbml0UGFnZUhlaWdodCIsImZhdlBhZ2UiLCJmcmFtZSIsInN0aWNreVdyYXAiLCJoZWFkZXJIZWlnaHQiLCJpbm5lcldpZHRoIiwiZm9vdGVySGVpZ2h0Iiwidmlld3BvcnRIZWlnaHQiLCJpbm5lckhlaWdodCIsImNhbGN1bGF0ZWRIZWlnaHQiLCJmYXZQYWdlSGVpZ2h0IiwiTWF0aCIsIm1heCIsIm1pbkhlaWdodCIsIm1heEhlaWdodCIsImZyYW1lSGVpZ2h0IiwibWFyZ2luVG9wIiwiaW5pdCIsInRyeURldGVjdFVzZXJJZCIsInF1aWNrQ2hlY2tBbmRSZW5kZXIiLCJpbml0R2FtZXNXZWVrIiwiaW5pdFByb2dyZXNzQmFyIiwiaW5pdFBhcnRpY2lwYXRlQ2FudmFzIiwiaW5pdFNub3dmbGFrZXNDYW52YXMiLCJzZXRUaW1lb3V0IiwicmVzaXplVGltZW91dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGVhclRpbWVvdXQiLCJkcm9wZG93bnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImRyb3Bkb3duIiwiZXZlbnQiLCJvcGVuIiwic3VtbWFyeSIsInN1bW1hcnlSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwiY3VycmVudFNjcm9sbFkiLCJzY3JvbGxZIiwicGFnZVlPZmZzZXQiLCJ0YXJnZXRTY3JvbGxZIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic2Nyb2xsVG8iLCJiZWhhdmlvciIsInN0b3JlIiwic3RhdGUiLCJnZXRTdGF0ZSIsImF1dGgiLCJpc0F1dGhvcml6ZWQiLCJpZCIsImdfdXNlcl9pZCIsImF0dGVtcHRzIiwibWF4QXR0ZW1wdHMiLCJhdHRlbXB0SW50ZXJ2YWwiLCJ3YWl0Rm9yVXNlcklkIiwicmVzb2x2ZSIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwibG9hZFRyYW5zbGF0aW9ucyIsInRyYW5zbGF0ZSIsInJlcG9ydERhdGEiLCJvcmlnaW4iLCJ1c2VyaWQiLCJlcnJvclRleHQiLCJ0ZXh0IiwibWVzc2FnZSIsInR5cGUiLCJuYW1lIiwic3RhY2siLCJtZXRob2QiLCJKU09OIiwic3RyaW5naWZ5Iiwid2FybiIsImVsZW1zIiwibGVuZ3RoIiwiZWxlbSIsImtleSIsImdldEF0dHJpYnV0ZSIsImlubmVySFRNTCIsInJlbW92ZUF0dHJpYnV0ZSIsImxvZyIsInJlZnJlc2hMb2NhbGl6ZWRDbGFzcyIsImVsZW1lbnQiLCJsYW5nIiwicmVuZGVyVXNlcnMiLCJ3ZWVrTnVtIiwidXNlckRhdGEiLCJOdW1iZXIiLCJ3ZWVrT2JqIiwiZmluZCIsInciLCJ3ZWVrIiwiZGF0YSIsIkFycmF5IiwiaXNBcnJheSIsInVzZXJzIiwiaXNTdGFnZUVuZGVkIiwid2lubmVyQWRkaXRpb25hbFByaXplIiwidSIsIndpbm5lciIsImN1cnJlbnRVc2VyIiwidXNlciIsImlzVmVyaWZpZWRVc2VyIiwicG9pbnRzIiwicG9wdWxhdGVVc2Vyc1RhYmxlIiwiY3VycmVudFVzZXJJZCIsInNlY29uZFRhYmxlT3RoZXIiLCJzZWNvbmRUYWJsZSIsImlzVG9wQ3VycmVudFVzZXIiLCJzbGljZSIsInNvbWUiLCJ0b3BVc2Vyc0xlbmd0aCIsInRvcFVzZXJzIiwiZGlzcGxheVVzZXIiLCJpc0N1cnJlbnRVc2VyIiwidGFibGUiLCJyZW5kZXJSb3ciLCJvcHRpb25zIiwiaGlnaGxpZ2h0IiwibmVpZ2hib3IiLCJ1c2VyUm93IiwiY3JlYXRlRWxlbWVudCIsInVzZXJQbGFjZSIsImluZGV4T2YiLCJwcml6ZUtleSIsImdldFByaXplVHJhbnNsYXRpb25LZXkiLCJ0cmFuc2xhdGVLZXkiLCJtYXNrVXNlcklkIiwidG9GaXhlZCIsImFwcGVuZCIsImluZGV4IiwiY2FudmFzIiwicGVyY2VudEVsZW1lbnQiLCJjdHgiLCJnZXRDb250ZXh0IiwiYmFySGVpZ2h0Iiwic2VnbWVudFdpZHRoIiwic2VnbWVudEhlaWdodCIsInNlZ21lbnRHYXAiLCJwYWRkaW5nIiwic2VnbWVudFJhZGl1cyIsImN1cnJlbnRQcm9ncmVzcyIsInRhcmdldFByb2dyZXNzIiwibG9hZGluZ0R1cmF0aW9uIiwic3RhcnRUaW1lIiwiRGF0ZSIsIm5vdyIsImFuaW1hdGlvbklkIiwibWF4U2VnbWVudHMiLCJpc0xvYWRpbmdDb21wbGV0ZSIsInJlc2l6ZUNhbnZhcyIsImNvbnRhaW5lciIsInBhcmVudEVsZW1lbnQiLCJjb250YWluZXJXaWR0aCIsIm9mZnNldFdpZHRoIiwid2lkdGgiLCJoZWlnaHQiLCJhdmFpbGFibGVXaWR0aCIsInNlZ21lbnRXaXRoR2FwIiwiZmxvb3IiLCJkcmF3UHJvZ3Jlc3NCYXIiLCJwcm9ncmVzcyIsImNsZWFyUmVjdCIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwic3Ryb2tlUmVjdCIsImZpbGxlZFNlZ21lbnRzIiwiZmlsbFN0eWxlIiwiY2VudGVyWSIsImkiLCJ4IiwieSIsImJlZ2luUGF0aCIsInJvdW5kUmVjdCIsInIiLCJtb3ZlVG8iLCJsaW5lVG8iLCJxdWFkcmF0aWNDdXJ2ZVRvIiwiY2xvc2VQYXRoIiwiZmlsbCIsInVwZGF0ZVByb2dyZXNzIiwiZWxhcHNlZCIsInBlcmNlbnQiLCJ0ZXh0Q29udGVudCIsImluaXRJY29uc0FuaW1hdGlvbiIsImR1cmF0aW9uIiwiaWNvbnMiLCJvcmlnaW5hbFRyYW5zZm9ybXMiLCJNYXAiLCJoYWRJbmxpbmVUcmFuc2Zvcm0iLCJzZWxlY3RvciIsImljb24iLCJoYWRJbmxpbmUiLCJ0cmFuc2Zvcm0iLCJzZXQiLCJjb21wdXRlZFN0eWxlIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIm9yaWdpbmFsVHJhbnNmb3JtIiwib3BhY2l0eSIsInRyYW5zaXRpb24iLCJpY29uQ291bnQiLCJnZXQiLCJyZW1vdmVQcm9wZXJ0eSIsInBhcnRpY2lwYXRlQ2FudmFzIiwicGFydGljaXBhdGVEZWVycyIsInBhcnRpY2lwYXRlRGVlcldpZHRoIiwicGFydGljaXBhdGVEZWVySGVpZ2h0IiwiY2FudmFzQ2xpY2tIYW5kbGVyc0F0dGFjaGVkIiwicGFydGljaXBhdGVBbmltYXRpb25JZCIsInRvdWNoU3RhcnRYIiwidG91Y2hTdGFydFkiLCJoYW5kbGVQYXJ0aWNpcGF0ZUNhbnZhc0NsaWNrIiwicmVjdCIsInNjYWxlWCIsInNjYWxlWSIsImNsaWVudFgiLCJjbGllbnRZIiwiY2xpY2tYIiwibGVmdCIsImNsaWNrWSIsImRlZXIiLCJpc1BvaW50SW5zaWRlIiwiaGFuZGxlQ2xpY2siLCJoYW5kbGVQYXJ0aWNpcGF0ZUNhbnZhc1RvdWNoU3RhcnQiLCJ0b3VjaCIsInRvdWNoZXMiLCJoYW5kbGVQYXJ0aWNpcGF0ZUNhbnZhc1RvdWNoRW5kIiwiY2hhbmdlZFRvdWNoZXMiLCJkZWx0YVgiLCJhYnMiLCJkZWx0YVkiLCJkaXN0YW5jZSIsInNxcnQiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImlzTW9iaWxlIiwiQ0FOVkFTX1dJRFRIIiwiQ0FOVkFTX0hFSUdIVCIsIlRSRUVfV0lEVEgiLCJUUkVFX0hFSUdIVCIsIkZSQU1FU19QRVJfUk9XIiwiVE9UQUxfUk9XUyIsIlNQUklURV9TSEVFVF9XSURUSCIsIlNQUklURV9TSEVFVF9IRUlHSFQiLCJGUkFNRV9XSURUSCIsIkZSQU1FX0hFSUdIVCIsIkRFRVJfU0NBTEUiLCJCQVNFX0RFRVJfV0lEVEgiLCJCQVNFX0RFRVJfSEVJR0hUIiwiREVFUl9XSURUSCIsIkRFRVJfSEVJR0hUIiwiZGVlckhlaWdodE9mZnNldCIsInRyZWVYIiwidHJlZVkiLCJGUkFNRV9ERUxBWSIsIldBTEtJTkdfRlJBTUVTIiwiRlJBTUVfUkVQRUFUIiwiSURMRV9NSU5fRFVSQVRJT04iLCJJRExFX01BWF9EVVJBVElPTiIsIkRFRVJfU1RBVEUiLCJXQUxLSU5HIiwiSURMRSIsIlBFVFRJTkciLCJQRVRUSU5HX01JTl9EVVJBVElPTiIsIlBFVFRJTkdfTUFYX0RVUkFUSU9OIiwiSEVBUlRfU0laRV9NSU4iLCJIRUFSVF9TSVpFX01BWCIsIkhFQVJUX1JJU0VfRElTVEFOQ0UiLCJIRUFSVF9TUEFXTl9JTlRFUlZBTCIsImZyYW1lQ291bnRlciIsIkhlYXJ0Iiwic2l6ZSIsImhlYXJ0SW1hZ2UiLCJzY2FsZSIsInJpc2VTcGVlZCIsImlzVmlzaWJsZSIsImNvbXBsZXRlIiwibmF0dXJhbFdpZHRoIiwibmF0dXJhbEhlaWdodCIsInNhdmUiLCJnbG9iYWxBbHBoYSIsIm1pbiIsImRyYXdTaXplIiwiZHJhd1giLCJkcmF3WSIsImRyYXdJbWFnZSIsInJlc3RvcmUiLCJEZWVyIiwic3RhcnRYIiwic3RhcnRZIiwibWluWCIsIm1heFgiLCJzcGVlZCIsInpJbmRleCIsImRpcmVjdGlvbiIsImZyYW1lSW5kZXgiLCJmcmFtZVJlcGVhdENvdW50ZXIiLCJpZGxlVGltZXIiLCJpZGxlRHVyYXRpb24iLCJwZXR0aW5nVGltZXIiLCJwZXR0aW5nRHVyYXRpb24iLCJwcmV2aW91c1N0YXRlIiwic2F2ZWRYIiwic2F2ZWRZIiwiaGVhcnRzIiwiaGVhcnRTcGF3bkNvdW50ZXIiLCJkZWVyV2lkdGgiLCJkZWVySGVpZ2h0IiwicmFuZG9tIiwib2Zmc2V0WCIsImhlYXJ0WCIsImhlYXJ0WSIsInB1c2giLCJyb3ciLCJjb2wiLCJzaG91bGRVcGRhdGVGcmFtZSIsInNwYXduSGVhcnQiLCJmaWx0ZXIiLCJoZWFydCIsInVwZGF0ZSIsInNwcml0ZUltYWdlIiwiZnJhbWVXaWR0aCIsImdldFNwcml0ZUZyYW1lSW5kZXgiLCJzb3VyY2VYIiwic291cmNlWSIsInNvdXJjZVdpZHRoIiwic291cmNlSGVpZ2h0IiwiZGVzdFgiLCJkZXN0WSIsImRlc3RXaWR0aCIsImRlc3RIZWlnaHQiLCJkcmF3IiwiaW1hZ2VzIiwiYmFja2dyb3VuZCIsIkltYWdlIiwidHJlZSIsImRlZXJTcHJpdGUiLCJkZWVycyIsIkRFRVJfQ09VTlQiLCJkZWVyQ29uZmlncyIsImNvbmZpZyIsImltYWdlc0xvYWRlZCIsInRvdGFsSW1hZ2VzIiwib25JbWFnZUxvYWQiLCJkcmF3Q2FudmFzIiwic3RhcnRBbmltYXRpb24iLCJvbmxvYWQiLCJzcmMiLCJwYXNzaXZlIiwiVFJFRV9aX0lOREVYIiwiZHJhd2FibGVFbGVtZW50cyIsInNvcnQiLCJhIiwiYiIsImFuaW1hdGUiLCJuZXdJc01vYmlsZSIsIlNOT1dGTEFLRV9DT1VOVCIsIlNOT1dGTEFLRV9NSU5fU0laRSIsIlNOT1dGTEFLRV9NQVhfU0laRSIsIlNOT1dGTEFLRV9NSU5fU1BFRUQiLCJTTk9XRkxBS0VfTUFYX1NQRUVEIiwiU05PV0ZMQUtFX1dJTkRfUkFOR0UiLCJTTk9XRkxBS0VfU1BBV05fSU5URVJWQUwiLCJzbm93Zmxha2VzIiwibGFzdFNub3dmbGFrZVRpbWUiLCJuZXdXaWR0aCIsIm5ld0hlaWdodCIsIm9mZnNldEhlaWdodCIsImNsaWVudEhlaWdodCIsInNjcm9sbEhlaWdodCIsInNub3dmbGFrZUltYWdlIiwiaW1hZ2VMb2FkZWQiLCJ3YWl0Rm9yUGFnZVJlYWR5IiwiaXNQYWdlTG9hZGluZyIsImNvbnRhaW5zIiwiZmlsbENhbnZhc1dpdGhTbm93Zmxha2VzIiwiU25vd2ZsYWtlIiwiaW5pdGlhbFkiLCJ3aW5kIiwicm90YXRpb24iLCJQSSIsInJvdGF0aW9uU3BlZWQiLCJzaW4iLCJyb3RhdGUiLCJjcmVhdGVTbm93Zmxha2UiLCJ1cGRhdGVTbm93Zmxha2VzIiwiaXNPZmZTY3JlZW4iLCJzcGxpY2UiLCJkcmF3U25vd2ZsYWtlcyIsInNub3dmbGFrZSIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsIm9ic2VydmUiLCJ3ZWVrc0RhdGEiLCJzdGFydCIsImVuZCIsImdldEFjdGl2ZVdlZWsiLCJjdXJyZW50RGF0ZSIsImFjdGl2ZVdlZWtJbmRleCIsInBhcnNlSW50IiwiYWN0aXZlV2VlayIsImdhbWVMaXN0cyIsImxpc3QiLCJjdXJyZW50TGlzdCIsImF1dG9BZGREYXRhQnV0dG9ucyIsInNldEdhbWVMaW5rcyIsImdhbWVzTGlua3MiLCJnYW1lTGlua3MiLCJnYW1lSWQiLCJ3ZWVrTWF0Y2giLCJjbGFzc05hbWUiLCJtYXRjaCIsIml0ZW1zIiwiaXRlbSIsImdhbWVOdW1iZXIiLCJidXR0b25OYW1lIiwibGlua0VsIiwiY3VycmVudEJ1dHRvbiIsImluY2x1ZGVzIiwic2V0QXR0cmlidXRlIiwicmVhZHlTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7OytDQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQSxDQUFDLFlBQVk7RUFFVCxJQUFNQSxNQUFNLEdBQUcsc0NBQXNDO0VBRXJELElBQU1DLFFBQVEsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsV0FBVyxDQUFDO0lBQ2hEQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGtCQUFrQixDQUFDO0lBQ25ERSxZQUFZLEdBQUdILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsQ0FBQztJQUMvQ0csaUJBQWlCLEdBQUdKLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGFBQWEsQ0FBQztFQUU3RCxJQUFNSSxNQUFNLEdBQUdMLFFB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R0FBRzlSLEtBQUssR0FBRyxDQUFDO1FBQzVCLElBQU0rUixVQUFVLGlCQUFVdFUsSUFBSSxpQkFBT3FVLFVBQVUsQ0FBRTtRQUVqRCxJQUFNRSxNQUFNLEdBQUdILElBQUksQ0FBQ3hjLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQztRQUN0RCxJQUFJMmMsTUFBTSxFQUFFO1VBQ1I7VUFDQSxJQUFNQyxhQUFhLEdBQUdELE1BQU0sQ0FBQ3JWLFlBQVksQ0FBQyxhQUFhLENBQUM7VUFDeEQsSUFBSSxDQUFDc1YsYUFBYSxJQUFJLENBQUNBLGFBQWEsQ0FBQ0MsUUFBUSxlQUFRelUsSUFBSSxVQUFPLEVBQUU7WUFDOUR1VSxNQUFNLENBQUNHLFlBQVksQ0FBQyxhQUFhLEVBQUVKLFVBQVUsQ0FBQztVQUNsRDtVQUNBO1VBQ0EsSUFBSSxDQUFDQyxNQUFNLENBQUNyVixZQUFZLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFDcENxVixNQUFNLENBQUNHLFlBQVksQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLENBQUM7VUFDdkQ7UUFDSjtNQUNKLENBQUMsQ0FBQztJQUNOLENBQUMsQ0FBQztFQUNOOztFQUVBO0VBQ0EsSUFBSS9jLFFBQVEsQ0FBQ2dkLFVBQVUsS0FBSyxTQUFTLEVBQUU7SUFDbkNoZCxRQUFRLENBQUNrRSxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxZQUFNO01BQ2hEMUIsY0FBYyxFQUFFO0lBQ3BCLENBQUMsQ0FBQztFQUNOLENBQUMsTUFBTTtJQUNIO0lBQ0FBLGNBQWMsRUFBRTtFQUNwQjs7RUFFQTtFQUNBaUIsSUFBSSxFQUFFO0FBRVYsQ0FBQyxHQUFHIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xuXG4gICAgY29uc3QgYXBpVVJMID0gJ2h0dHBzOi8vZmF2LXByb20uY29tL2FwaV9ibGFja19wcml6ZSdcblxuICAgIGNvbnN0IG1haW5QYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mYXYtcGFnZVwiKSxcbiAgICAgICAgbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zcGlubmVyLW92ZXJsYXlcIiksXG4gICAgICAgIHJlc3VsdHNUYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFibGVcIiksXG4gICAgICAgIHJlc3VsdHNUYWJsZU90aGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YWJsZU90aGVyXCIpXG5cbiAgICBjb25zdCBockxlbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaHJMZW5nJyk7XG4gICAgY29uc3QgZW5MZW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VuTGVuZycpO1xuXG4gICAgbGV0IGxvY2FsZSA9IFwiaHJcIlxuICAgIC8vIGxldCBsb2NhbGUgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxlXCIpIHx8IFwiaHJcIlxuXG4gICAgaWYgKGhyTGVuZykgbG9jYWxlID0gJ2hyJztcbiAgICBpZiAoZW5MZW5nKSBsb2NhbGUgPSAnZW4nO1xuXG4gICAgbGV0IGRlYnVnID0gZmFsc2VcblxuICAgIGlmIChkZWJ1ZykgaGlkZUxvYWRlcigpXG5cbiAgICBsZXQgaTE4bkRhdGEgPSB7fTtcbiAgICBjb25zdCB0cmFuc2xhdGVTdGF0ZSA9IGZhbHNlO1xuICAgIGxldCB1c2VySWQgPSBudWxsO1xuICAgIC8vIGxldCB1c2VySWQgPSBOdW1iZXIoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKSkgPz8gbnVsbFxuXG4gICAgY29uc3QgcmVxdWVzdCA9IGZ1bmN0aW9uIChsaW5rLCBleHRyYU9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKGFwaVVSTCArIGxpbmssIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAuLi4oZXh0cmFPcHRpb25zIHx8IHt9KVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKCdBUEkgZXJyb3InKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdBUEkgcmVxdWVzdCBmYWlsZWQ6JywgZXJyKTtcblxuICAgICAgICAgICAgICAgIHJlcG9ydEVycm9yKGVycik7XG5cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmF2LXBhZ2UnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uaHJlZi5zdGFydHNXaXRoKFwiaHR0cHM6Ly93d3cuZmF2YmV0LmhyL1wiKSkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvcHJvbW9jaWplL3Byb21vY2lqYS9zdHViLyc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3Byb21vcy9wcm9tby9zdHViLyc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycik7XG4gICAgICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhpZGVMb2FkZXIoKXtcbiAgICAgICAgbG9hZGVyLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImF1dG9cIlxuICAgICAgICBtYWluUGFnZS5jbGFzc0xpc3QucmVtb3ZlKFwibG9hZGluZ1wiKVxuICAgIH1cblxuICAgIC8vINCk0YPQvdC60YbRltGPINC00LvRjyDQstGB0YLQsNC90L7QstC70LXQvdC90Y8g0LLQuNGB0L7RgiDQvdCwINC+0YHQvdC+0LLRliB2aWV3cG9ydCwg0YXQtdC00LXRgNCwINGC0LAg0YTRg9GC0LXRgNCwXG4gICAgZnVuY3Rpb24gaW5pdFBhZ2VIZWlnaHQoKSB7XG4gICAgICAgIGNvbnN0IGZhdlBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmF2LXBhZ2UnKTtcbiAgICAgICAgY29uc3QgZnJhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZnJhbWUnKTtcbiAgICAgICAgY29uc3Qgc3RpY2t5V3JhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGlja3ktd3JhcCcpO1xuICAgICAgICBcbiAgICAgICAgaWYgKCFmYXZQYWdlIHx8ICFmcmFtZSB8fCAhc3RpY2t5V3JhcCkgcmV0dXJuO1xuICAgICAgICBcbiAgICAgICAgLy8g0JLQuNC30L3QsNGH0LDRlNC80L4g0LLQuNGB0L7RgtGDINGF0LXQtNC10YDQsCDQt9Cw0LvQtdC20L3QviDQstGW0LQg0YjQuNGA0LjQvdC4INC10LrRgNCw0L3Rg1xuICAgICAgICAvLyDQlNC10YHQutGC0L7QvyAoPiAxMDI0cHgpOiA2MCArIDIxID0gODFweFxuICAgICAgICAvLyDQnNC+0LHRltC70LrQuCAo4omkIDEwMjRweCk6IDQ4ICsgMjEgPSA2OXB4XG4gICAgICAgIGNvbnN0IGhlYWRlckhlaWdodCA9IHdpbmRvdy5pbm5lcldpZHRoID4gMTAyNCA/IDgxIDogNjk7XG4gICAgICAgIFxuICAgICAgICAvLyDQktC40LfQvdCw0YfQsNGU0LzQviDQstC40YHQvtGC0YMg0YTRg9GC0LXRgNCwINC30LDQu9C10LbQvdC+INCy0ZbQtCDRiNC40YDQuNC90Lgg0LXQutGA0LDQvdGDXG4gICAgICAgIC8vINCk0YPRgtC10YAg0L/RgNC40YHRg9GC0L3RltC5INGC0ZbQu9GM0LrQuCDQvdCwINC10LrRgNCw0L3QsNGFIOKJpCAxMDI0cHgsINCy0LjRgdC+0YLQsCA1NnB4XG4gICAgICAgIGNvbnN0IGZvb3RlckhlaWdodCA9IHdpbmRvdy5pbm5lcldpZHRoIDw9IDEwMjQgPyA1NiA6IDA7XG4gICAgICAgIFxuICAgICAgICAvLyDQntCx0YfQuNGB0LvRjtGU0LzQviDQstC40YHQvtGC0YMgLmZhdi1wYWdlOiB2aWV3cG9ydCBoZWlnaHQgLSBoZWFkZXIgaGVpZ2h0IC0gZm9vdGVyIGhlaWdodCAtINCy0ZbQtNGB0YLRg9C/XG4gICAgICAgIGNvbnN0IHZpZXdwb3J0SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICBjb25zdCBjYWxjdWxhdGVkSGVpZ2h0ID0gdmlld3BvcnRIZWlnaHQgLSBoZWFkZXJIZWlnaHQgLSBmb290ZXJIZWlnaHQgLSAzMjtcbiAgICAgICAgLy8g0JLQuNGB0L7RgtCwINC90LUg0L/QvtCy0LjQvdC90LAg0LHRg9GC0Lgg0LzQtdC90YjQtSAzMDBweFxuICAgICAgICBjb25zdCBmYXZQYWdlSGVpZ2h0ID0gTWF0aC5tYXgoY2FsY3VsYXRlZEhlaWdodCwgMjUwKTtcbiAgICAgICAgXG4gICAgICAgIC8vINCS0YHRgtCw0L3QvtCy0LvRjtGU0LzQviDQstC40YHQvtGC0YMgLmZhdi1wYWdlXG4gICAgICAgIGZhdlBhZ2Uuc3R5bGUubWluSGVpZ2h0ID0gYCR7ZmF2UGFnZUhlaWdodH1weGA7XG4gICAgICAgIGZhdlBhZ2Uuc3R5bGUubWF4SGVpZ2h0ID0gYCR7ZmF2UGFnZUhlaWdodH1weGA7XG4gICAgICAgIFxuICAgICAgICAvLyDQktGB0YLQsNC90L7QstC70Y7RlNC80L4g0LLQuNGB0L7RgtGDIC5mcmFtZTogLmZhdi1wYWdlICsgMnB4XG4gICAgICAgIGNvbnN0IGZyYW1lSGVpZ2h0ID0gZmF2UGFnZUhlaWdodCArIDI7XG4gICAgICAgIGZyYW1lLnN0eWxlLm1pbkhlaWdodCA9IGAke2ZyYW1lSGVpZ2h0fXB4YDtcbiAgICAgICAgZnJhbWUuc3R5bGUubWF4SGVpZ2h0ID0gYCR7ZnJhbWVIZWlnaHR9cHhgO1xuICAgICAgICBcbiAgICAgICAgLy8g0JLRgdGC0LDQvdC+0LLQu9GO0ZTQvNC+IG1hcmdpbi10b3Ag0LTQu9GPIC5zdGlja3ktd3JhcDog0L3QtdCz0LDRgtC40LLQvdCwINCy0LjRgdC+0YLQsCAuZmF2LXBhZ2VcbiAgICAgICAgc3RpY2t5V3JhcC5zdHlsZS5tYXJnaW5Ub3AgPSBgLSR7ZmF2UGFnZUhlaWdodH1weGA7XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgbGV0IGF0dGVtcHRzID0gMDtcbiAgICAgICAgY29uc3QgbWF4QXR0ZW1wdHMgPSAyMDtcbiAgICAgICAgY29uc3QgYXR0ZW1wdEludGVydmFsID0gNTA7XG5cbiAgICAgICAgZnVuY3Rpb24gdHJ5RGV0ZWN0VXNlcklkKCkge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5zdG9yZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gd2luZG93LnN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgICAgICAgICAgdXNlcklkID0gc3RhdGUuYXV0aC5pc0F1dGhvcml6ZWQgJiYgc3RhdGUuYXV0aC5pZCB8fCAnJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAod2luZG93LmdfdXNlcl9pZCkge1xuICAgICAgICAgICAgICAgIHVzZXJJZCA9IHdpbmRvdy5nX3VzZXJfaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBxdWlja0NoZWNrQW5kUmVuZGVyKCkge1xuICAgICAgICAgICAgLy8g0IbQvdGW0YbRltCw0LvRltC30YPRlNC80L4g0LLQuNGB0L7RgtC4INGB0YLQvtGA0ZbQvdC60Lgg0L3QsCDQvtGB0L3QvtCy0ZYgdmlld3BvcnQg0YLQsCDRhdC10LTQtdGA0LBcbiAgICAgICAgICAgIGluaXRQYWdlSGVpZ2h0KCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGluaXRHYW1lc1dlZWsoKTtcbiAgICAgICAgICAgIGluaXRQcm9ncmVzc0JhcigpO1xuICAgICAgICAgICAgaW5pdFBhcnRpY2lwYXRlQ2FudmFzKCk7XG4gICAgICAgICAgICBpbml0U25vd2ZsYWtlc0NhbnZhcygpO1xuICAgICAgICAgICAgc2V0VGltZW91dChoaWRlTG9hZGVyLCAzMDApO1xuXG4gICAgICAgICAgICAvLyDQntC90L7QstC70Y7RlNC80L4g0LLQuNGB0L7RgtC4INC/0YDQuCDQt9C80ZbQvdGWINGA0L7Qt9C80ZbRgNGDINCy0ZbQutC90LBcbiAgICAgICAgICAgIGxldCByZXNpemVUaW1lb3V0O1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChyZXNpemVUaW1lb3V0KTtcbiAgICAgICAgICAgICAgICByZXNpemVUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGluaXRQYWdlSGVpZ2h0KCk7XG4gICAgICAgICAgICAgICAgICAgIGluaXRQYXJ0aWNpcGF0ZUNhbnZhcygpO1xuICAgICAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJvcmllbnRhdGlvbmNoYW5nZVwiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGluaXRQYWdlSGVpZ2h0KCk7XG4gICAgICAgICAgICAgICAgICAgIGluaXRQYXJ0aWNpcGF0ZUNhbnZhcygpO1xuICAgICAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gRml4IGRyb3Bkb3duIHNjcm9sbCBpc3N1ZSAtIHByZXZlbnQgcGFnZSBmcm9tIHNoaWZ0aW5nIHVwIHdoZW4gb3BlbmluZyBkcm9wZG93blxuICAgICAgICAgICAgY29uc3QgZHJvcGRvd25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRyb3Bkb3duJyk7XG4gICAgICAgICAgICBkcm9wZG93bnMuZm9yRWFjaCgoZHJvcGRvd24pID0+IHtcbiAgICAgICAgICAgICAgICBkcm9wZG93bi5hZGRFdmVudExpc3RlbmVyKCd0b2dnbGUnLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5vcGVuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBEcm9wZG93biBpcyBvcGVuaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdW1tYXJ5ID0gdGhpcy5xdWVyeVNlbGVjdG9yKCdzdW1tYXJ5Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3VtbWFyeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEdldCBzdW1tYXJ5IHBvc2l0aW9uIHJlbGF0aXZlIHRvIHZpZXdwb3J0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3VtbWFyeVJlY3QgPSBzdW1tYXJ5LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgc3VtbWFyeSBpcyBuZWFyIHRoZSB0b3Agb2Ygdmlld3BvcnQgKHdpdGhpbiAxMDBweCBmcm9tIHRvcClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3VtbWFyeVJlY3QudG9wIDwgMTAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENhbGN1bGF0ZSBob3cgbXVjaCB0byBzY3JvbGwgdG8ga2VlcCBzdW1tYXJ5IHZpc2libGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFNjcm9sbFkgPSB3aW5kb3cuc2Nyb2xsWSB8fCB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldFNjcm9sbFkgPSBjdXJyZW50U2Nyb2xsWSArIHN1bW1hcnlSZWN0LnRvcCAtIDEyMDsgLy8gMTIwcHggb2Zmc2V0IGZyb20gdG9wXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVXNlIHJlcXVlc3RBbmltYXRpb25GcmFtZSBmb3Igc21vb3RoIHNjcm9sbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IE1hdGgubWF4KDAsIHRhcmdldFNjcm9sbFkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgd2FpdEZvclVzZXJJZCA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0cnlEZXRlY3RVc2VySWQoKTtcbiAgICAgICAgICAgICAgICBpZiAodXNlcklkIHx8IGF0dGVtcHRzID49IG1heEF0dGVtcHRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHF1aWNrQ2hlY2tBbmRSZW5kZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXR0ZW1wdHMrKztcbiAgICAgICAgICAgIH0sIGF0dGVtcHRJbnRlcnZhbCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGF3YWl0IHdhaXRGb3JVc2VySWQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9hZFRyYW5zbGF0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVlc3QoYC9uZXctdHJhbnNsYXRlcy8ke2xvY2FsZX1gKVxuICAgICAgICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgICAgICAgaTE4bkRhdGEgPSBqc29uO1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnN0IG11dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAobXV0YXRpb25zKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIG11dGF0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgICAgIC8vICAgICB0cmFuc2xhdGUoKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKHRhcmdldE5vZGUsIHsgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgICAgICAgIC8vIG11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhhcmRjb3JlVGVubmlzXCIpLCB7XG4gICAgICAgICAgICAgICAgLy8gICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAvLyAgICAgc3VidHJlZTogdHJ1ZVxuICAgICAgICAgICAgICAgIC8vIH0pO1xuXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXBvcnRFcnJvcihlcnIpIHtcbiAgICAgICAgY29uc3QgcmVwb3J0RGF0YSA9IHtcbiAgICAgICAgICAgIG9yaWdpbjogd2luZG93LmxvY2F0aW9uLmhyZWYsXG4gICAgICAgICAgICB1c2VyaWQ6IHVzZXJJZCxcbiAgICAgICAgICAgIGVycm9yVGV4dDogZXJyPy5lcnJvciB8fCBlcnI/LnRleHQgfHwgZXJyPy5tZXNzYWdlIHx8ICdVbmtub3duIGVycm9yJyxcbiAgICAgICAgICAgIHR5cGU6IGVycj8ubmFtZSB8fCAnVW5rbm93bkVycm9yJyxcbiAgICAgICAgICAgIHN0YWNrOiBlcnI/LnN0YWNrIHx8ICcnXG4gICAgICAgIH07XG5cbiAgICAgICAgZmV0Y2goJ2h0dHBzOi8vZmF2LXByb20uY29tL2FwaS1jbXMvcmVwb3J0cy9hZGQnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVwb3J0RGF0YSlcbiAgICAgICAgfSkuY2F0Y2goY29uc29sZS53YXJuKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmFuc2xhdGUoKSB7XG4gICAgICAgIGNvbnN0IGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdHJhbnNsYXRlXScpXG4gICAgICAgIGlmIChlbGVtcyAmJiBlbGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmKHRyYW5zbGF0ZVN0YXRlKXtcbiAgICAgICAgICAgICAgICBlbGVtcy5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbS5pbm5lckhUTUwgPSBpMThuRGF0YVtrZXldIHx8ICcqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qICAga2V5OiAgJyArIGtleTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkxOG5EYXRhW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidHJhbnNsYXRpb24gd29ya3MhXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxvY2FsZSA9PT0gJ2VuJykge1xuICAgICAgICAgICAgbWFpblBhZ2UuY2xhc3NMaXN0LmFkZCgnZW4nKTtcbiAgICAgICAgfVxuICAgICAgICByZWZyZXNoTG9jYWxpemVkQ2xhc3MobWFpblBhZ2UpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlZnJlc2hMb2NhbGl6ZWRDbGFzcyhlbGVtZW50KSB7XG4gICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgbGFuZyBvZiBbJ2hyJywgJ2VuJ10pIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShsYW5nKTtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQobG9jYWxlKTtcbiAgICB9XG5cblxuXG5cbiAgICBmdW5jdGlvbiByZW5kZXJVc2Vycyh3ZWVrTnVtLCB1c2VyRGF0YSA9IFtdKSB7XG4gICAgICAgIHdlZWtOdW0gPSBOdW1iZXIod2Vla051bSk7XG4gICAgICAgIGNvbnN0IHdlZWtPYmogPSB1c2VyRGF0YS5maW5kKHcgPT4gdy53ZWVrID09PSB3ZWVrTnVtKTtcbiAgICAgICAgaWYgKCF3ZWVrT2JqIHx8ICF3ZWVrT2JqLmRhdGEgfHwgIUFycmF5LmlzQXJyYXkod2Vla09iai5kYXRhLnVzZXJzKSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcign0J3QtdCy0ZbRgNC90LAg0YHRgtGA0YPQutGC0YPRgNCwINC00LDQvdC40YUnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGlzU3RhZ2VFbmRlZCA9IHdlZWtPYmouZGF0YS5pc1N0YWdlRW5kZWRcblxuICAgICAgICB1c2VyRGF0YSA9IHdlZWtPYmouZGF0YS51c2VycztcblxuICAgICAgICBjb25zdCB3aW5uZXJBZGRpdGlvbmFsUHJpemUgPSB1c2VyRGF0YS5maW5kKHUgPT4ge1xuICAgICAgICAgICAgaWYodS53aW5uZXIgPT09IHRydWUpe1xuICAgICAgICAgICAgICAgIHJldHVybiB1XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgY29uc3QgY3VycmVudFVzZXIgPSB1c2VyRGF0YS5maW5kKHVzZXIgPT4gdXNlci51c2VyaWQgPT09IHVzZXJJZCk7XG5cbiAgICAgICAgaWYodXNlcklkICYmICFjdXJyZW50VXNlciAmJiBpc1ZlcmlmaWVkVXNlcil7XG4gICAgICAgICAgICB1c2VyRGF0YSA9IFsuLi51c2VyRGF0YSwge3VzZXJpZDogdXNlcklkLCBwb2ludHM6IDB9XVxuICAgICAgICB9XG4gICAgICAgIHBvcHVsYXRlVXNlcnNUYWJsZSh1c2VyRGF0YSwgdXNlcklkLCB3ZWVrTnVtLCBjdXJyZW50VXNlciwgaXNWZXJpZmllZFVzZXIsIGlzU3RhZ2VFbmRlZCwgd2lubmVyQWRkaXRpb25hbFByaXplKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwb3B1bGF0ZVVzZXJzVGFibGUodXNlcnMsIGN1cnJlbnRVc2VySWQsIHdlZWssIGN1cnJlbnRVc2VyLCBpc1ZlcmlmaWVkVXNlciwgaXNTdGFnZUVuZGVkLCB3aW5uZXJBZGRpdGlvbmFsUHJpemUpIHtcbiAgICAgICAgaWYgKCF1c2Vycz8ubGVuZ3RoKSByZXR1cm47XG4gICAgICAgIHJlc3VsdHNUYWJsZS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgcmVzdWx0c1RhYmxlT3RoZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHNlY29uZFRhYmxlT3RoZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHNlY29uZFRhYmxlLmlubmVySFRNTCA9ICcnO1xuXG5cbiAgICAgICAgY29uc3QgaXNUb3BDdXJyZW50VXNlciA9IGN1cnJlbnRVc2VyICYmIHVzZXJzLnNsaWNlKDAsIDEwKS5zb21lKHVzZXIgPT4gdXNlci51c2VyaWQgPT09IGN1cnJlbnRVc2VySWQpO1xuXG4gICAgICAgIGNvbnN0IHRvcFVzZXJzTGVuZ3RoID0gIXVzZXJJZCB8fCBpc1RvcEN1cnJlbnRVc2VyICA/IDEwIDogMTA7XG5cbiAgICAgICAgY29uc3QgdG9wVXNlcnMgPSB1c2Vycy5zbGljZSgwLCB0b3BVc2Vyc0xlbmd0aCk7XG5cbiAgICAgICAgdG9wVXNlcnMuZm9yRWFjaCh1c2VyID0+IHtcbiAgICAgICAgICAgIGRpc3BsYXlVc2VyKHVzZXIsIHVzZXIudXNlcmlkID09PSBjdXJyZW50VXNlcklkLCByZXN1bHRzVGFibGUsIHRvcFVzZXJzLCBpc1RvcEN1cnJlbnRVc2VyLCB3ZWVrKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmKGlzVmVyaWZpZWRVc2VyICYmICFjdXJyZW50VXNlcikge1xuICAgICAgICAgICAgZGlzcGxheVVzZXIoY3VycmVudFVzZXIsIHRydWUsIHJlc3VsdHNUYWJsZU90aGVyLCB1c2VycywgZmFsc2UsIHdlZWspO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFpc1RvcEN1cnJlbnRVc2VyICYmIGN1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgICBkaXNwbGF5VXNlcihjdXJyZW50VXNlciwgdHJ1ZSwgcmVzdWx0c1RhYmxlT3RoZXIsIHVzZXJzLCBmYWxzZSwgd2Vlayk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5VXNlcih1c2VyLCBpc0N1cnJlbnRVc2VyLCB0YWJsZSwgdXNlcnMsIGlzVG9wQ3VycmVudFVzZXIsIHdlZWspIHtcblxuICAgICAgICBjb25zdCByZW5kZXJSb3cgPSAodXNlckRhdGEsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBoaWdobGlnaHQgPSBmYWxzZSwgbmVpZ2hib3IgPSBmYWxzZSB9ID0gb3B0aW9ucztcbiAgICAgICAgICAgIGNvbnN0IHVzZXJSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZCgndGFibGVfX3JvdycpO1xuXG4gICAgICAgICAgICBjb25zdCB1c2VyUGxhY2UgPSB1c2Vycy5pbmRleE9mKHVzZXJEYXRhKSArIDE7XG4gICAgICAgICAgICBjb25zdCBwcml6ZUtleSA9IGRlYnVnID8gbnVsbCA6IGdldFByaXplVHJhbnNsYXRpb25LZXkodXNlclBsYWNlLCB3ZWVrKTtcblxuICAgICAgICAgICAgaWYgKHVzZXJQbGFjZSA8PSAzKSB7XG4gICAgICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKGBwbGFjZSR7dXNlclBsYWNlfWApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaGlnaGxpZ2h0IHx8IGlzQ3VycmVudFVzZXIgJiYgIW5laWdoYm9yKSB7XG4gICAgICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKCd5b3UnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmVpZ2hib3IpIHtcbiAgICAgICAgICAgICAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoJ19uZWlnaGJvcicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1c2VyUm93LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke3VzZXJQbGFjZSA8IDEwID8gJzAnICsgdXNlclBsYWNlIDogdXNlclBsYWNlfVxuICAgICAgICAgICAgICAgICR7aXNDdXJyZW50VXNlciAmJiAhbmVpZ2hib3IgPyAnPHNwYW4gY2xhc3M9XCJ5b3VcIj4nICsgdHJhbnNsYXRlS2V5KFwieW91XCIpICsgJzwvc3Bhbj4nIDogJyd9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke2lzQ3VycmVudFVzZXIgJiYgIW5laWdoYm9yID8gdXNlckRhdGEudXNlcmlkIDogbWFza1VzZXJJZCh1c2VyRGF0YS51c2VyaWQpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHtOdW1iZXIodXNlckRhdGEucG9pbnRzKS50b0ZpeGVkKDIpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHtwcml6ZUtleSA/IHRyYW5zbGF0ZUtleShwcml6ZUtleSkgOiAnIC0gJ31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuXG4gICAgICAgICAgICB0YWJsZS5hcHBlbmQodXNlclJvdyk7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChpc0N1cnJlbnRVc2VyICYmICFpc1RvcEN1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHVzZXJzLmluZGV4T2YodXNlcik7XG4gICAgICAgICAgICBpZiAodXNlcnNbaW5kZXggLSAxXSkge1xuICAgICAgICAgICAgICAgIHJlbmRlclJvdyh1c2Vyc1tpbmRleCAtIDFdLCB7IG5laWdoYm9yOiB0cnVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVuZGVyUm93KHVzZXIsIHsgaGlnaGxpZ2h0OiB0cnVlIH0pO1xuICAgICAgICAgICAgaWYgKHVzZXJzW2luZGV4ICsgMV0pIHtcbiAgICAgICAgICAgICAgICByZW5kZXJSb3codXNlcnNbaW5kZXggKyAxXSwgeyBuZWlnaGJvcjogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlbmRlclJvdyh1c2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluaXRQcm9ncmVzc0JhcigpIHtcbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2dyZXNzQmFyQ2FudmFzJyk7XG4gICAgICAgIGNvbnN0IHBlcmNlbnRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2dyZXNzUGVyY2VudCcpO1xuICAgICAgICBpZiAoIWNhbnZhcyB8fCAhcGVyY2VudEVsZW1lbnQpIHJldHVybjtcblxuICAgICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgXG4gICAgICAgIC8vINCa0L7QvdGB0YLQsNC90YLQuFxuICAgICAgICBjb25zdCBiYXJIZWlnaHQgPSAyMDsgLy8g0JLQuNGB0L7RgtCwINC/0YDQvtCz0YDQtdGBLdCx0LDRgNGDXG4gICAgICAgIGNvbnN0IHNlZ21lbnRXaWR0aCA9IDQ7IC8vINCo0LjRgNC40L3QsCDQvtC00L3QvtCz0L4g0YHQtdCz0LzQtdC90YLQsFxuICAgICAgICBjb25zdCBzZWdtZW50SGVpZ2h0ID0gMTQ7IC8vINCS0LjRgdC+0YLQsCDQvtC00L3QvtCz0L4g0YHQtdCz0LzQtdC90YLQsFxuICAgICAgICBjb25zdCBzZWdtZW50R2FwID0gMjsgLy8g0J/RgNC+0LzRltC20L7QuiDQvNGW0LYg0YHQtdCz0LzQtdC90YLQsNC80LhcbiAgICAgICAgY29uc3QgcGFkZGluZyA9IDI7IC8vINCS0ZbQtNGB0YLRg9C/INCy0ZbQtCDQutGA0LDRl9CyXG4gICAgICAgIGNvbnN0IHNlZ21lbnRSYWRpdXMgPSAxOyAvLyBCb3JkZXIgcmFkaXVzINC00LvRjyDRgdC10LPQvNC10L3RgtGW0LJcbiAgICAgICAgXG4gICAgICAgIC8vINCf0LDRgNCw0LzQtdGC0YDQuCDQsNC90ZbQvNCw0YbRltGXINC30LDQstCw0L3RgtCw0LbQtdC90L3Rj1xuICAgICAgICBsZXQgY3VycmVudFByb2dyZXNzID0gMTsgLy8g0J/QvtGH0LjQvdCw0ZTQvNC+INC3IDElXG4gICAgICAgIGNvbnN0IHRhcmdldFByb2dyZXNzID0gMTAwOyAvLyDQptGW0LvRjNC+0LLQuNC5INC/0YDQvtCz0YDQtdGBXG4gICAgICAgIGNvbnN0IGxvYWRpbmdEdXJhdGlvbiA9IDMwMDA7IC8vINCi0YDQuNCy0LDQu9GW0YHRgtGMINC30LDQstCw0L3RgtCw0LbQtdC90L3RjzogMyDRgdC10LrRg9C90LTQuFxuICAgICAgICBsZXQgc3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgbGV0IGFuaW1hdGlvbklkID0gbnVsbDtcbiAgICAgICAgbGV0IG1heFNlZ21lbnRzID0gMDtcbiAgICAgICAgbGV0IGlzTG9hZGluZ0NvbXBsZXRlID0gZmFsc2U7XG4gICAgICAgIFxuICAgICAgICBmdW5jdGlvbiByZXNpemVDYW52YXMoKSB7XG4gICAgICAgICAgICAvLyDQntGC0YDQuNC80YPRlNC80L4g0YDQvtC30LzRltGA0Lgg0LrQvtC90YLQtdC50L3QtdGA0LBcbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGNhbnZhcy5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgY29uc3QgY29udGFpbmVyV2lkdGggPSBjb250YWluZXIub2Zmc2V0V2lkdGggfHwgNzY4O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQktGB0YLQsNC90L7QstC70Y7RlNC80L4g0YDQvtC30LzRltGA0LggY2FudmFzXG4gICAgICAgICAgICBjYW52YXMud2lkdGggPSBjb250YWluZXJXaWR0aDtcbiAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSBiYXJIZWlnaHQ7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCg0L7Qt9GA0LDRhdC+0LLRg9GU0LzQviDQutGW0LvRjNC60ZbRgdGC0Ywg0YHQtdCz0LzQtdC90YLRltCyLCDRidC+INC/0L7QvNGW0YHRgtGP0YLRjNGB0Y9cbiAgICAgICAgICAgIGNvbnN0IGF2YWlsYWJsZVdpZHRoID0gY29udGFpbmVyV2lkdGggLSAocGFkZGluZyAqIDIpO1xuICAgICAgICAgICAgY29uc3Qgc2VnbWVudFdpdGhHYXAgPSBzZWdtZW50V2lkdGggKyBzZWdtZW50R2FwO1xuICAgICAgICAgICAgbWF4U2VnbWVudHMgPSBNYXRoLmZsb29yKGF2YWlsYWJsZVdpZHRoIC8gc2VnbWVudFdpdGhHYXApO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQn9C10YDQtdC80LDQu9GM0L7QstGD0ZTQvNC+INC3INC/0L7RgtC+0YfQvdC40Lwg0L/RgNC+0LPRgNC10YHQvtC8XG4gICAgICAgICAgICBpZiAoY3VycmVudFByb2dyZXNzID4gMCkge1xuICAgICAgICAgICAgICAgIGRyYXdQcm9ncmVzc0JhcihjdXJyZW50UHJvZ3Jlc3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBmdW5jdGlvbiBkcmF3UHJvZ3Jlc3NCYXIocHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgIC8vINCe0YfQuNGJ0LDRlNC80L4gY2FudmFzXG4gICAgICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCc0LDQu9GO0ZTQvNC+INGA0LDQvNC60YMgKNCx0ZbQu9C40Lkg0L/RgNGP0LzQvtC60YPRgtC90LjQuilcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICcjRkZGRkZGJztcbiAgICAgICAgICAgIGN0eC5saW5lV2lkdGggPSAxO1xuICAgICAgICAgICAgY3R4LnN0cm9rZVJlY3QoMC41LCAwLjUsIGNhbnZhcy53aWR0aCAtIDEsIGNhbnZhcy5oZWlnaHQgLSAxKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0KDQvtC30YDQsNGF0L7QstGD0ZTQvNC+INC60ZbQu9GM0LrRltGB0YLRjCDQt9Cw0L/QvtCy0L3QtdC90LjRhSDRgdC10LPQvNC10L3RgtGW0LJcbiAgICAgICAgICAgIGNvbnN0IGZpbGxlZFNlZ21lbnRzID0gTWF0aC5mbG9vcigocHJvZ3Jlc3MgLyAxMDApICogbWF4U2VnbWVudHMpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQnNCw0LvRjtGU0LzQviDQt9Cw0L/QvtCy0L3QtdC90ZYg0YHQtdCz0LzQtdC90YLQuCDQtyDQt9Cw0L7QutGA0YPQs9C70LXQvdC40LzQuCDQutGD0YLQsNC80LhcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSAnI0ZGRkZGRic7XG4gICAgICAgICAgICBjb25zdCBjZW50ZXJZID0gKGJhckhlaWdodCAtIHNlZ21lbnRIZWlnaHQpIC8gMjsgLy8g0JLQtdGA0YLQuNC60LDQu9GM0L3QtSDRhtC10L3RgtGA0YPQstCw0L3QvdGPXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsbGVkU2VnbWVudHM7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHggPSBwYWRkaW5nICsgaSAqIChzZWdtZW50V2lkdGggKyBzZWdtZW50R2FwKTtcbiAgICAgICAgICAgICAgICBjb25zdCB5ID0gY2VudGVyWTtcblxuICAgICAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICBpZiAoY3R4LnJvdW5kUmVjdCkge1xuICAgICAgICAgICAgICAgICAgICAvLyDQodGD0YfQsNGB0L3QuNC5INC80LXRgtC+0LQgKNC/0ZbQtNGC0YDQuNC80YPRlNGC0YzRgdGPINCyINC90L7QstC40YUg0LHRgNCw0YPQt9C10YDQsNGFKVxuICAgICAgICAgICAgICAgICAgICBjdHgucm91bmRSZWN0KHgsIHksIHNlZ21lbnRXaWR0aCwgc2VnbWVudEhlaWdodCwgc2VnbWVudFJhZGl1cyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gRmFsbGJhY2sg0LTQu9GPINGB0YLQsNGA0LjRhSDQsdGA0LDRg9C30LXRgNGW0LJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgciA9IHNlZ21lbnRSYWRpdXM7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5tb3ZlVG8oeCArIHIsIHkpO1xuICAgICAgICAgICAgICAgICAgICBjdHgubGluZVRvKHggKyBzZWdtZW50V2lkdGggLSByLCB5KTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCArIHNlZ21lbnRXaWR0aCwgeSwgeCArIHNlZ21lbnRXaWR0aCwgeSArIHIpO1xuICAgICAgICAgICAgICAgICAgICBjdHgubGluZVRvKHggKyBzZWdtZW50V2lkdGgsIHkgKyBzZWdtZW50SGVpZ2h0IC0gcik7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHggKyBzZWdtZW50V2lkdGgsIHkgKyBzZWdtZW50SGVpZ2h0LCB4ICsgc2VnbWVudFdpZHRoIC0gciwgeSArIHNlZ21lbnRIZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICBjdHgubGluZVRvKHggKyByLCB5ICsgc2VnbWVudEhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHgsIHkgKyBzZWdtZW50SGVpZ2h0LCB4LCB5ICsgc2VnbWVudEhlaWdodCAtIHIpO1xuICAgICAgICAgICAgICAgICAgICBjdHgubGluZVRvKHgsIHkgKyByKTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCwgeSwgeCArIHIsIHkpO1xuICAgICAgICAgICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZVByb2dyZXNzKCkge1xuICAgICAgICAgICAgY29uc3QgZWxhcHNlZCA9IERhdGUubm93KCkgLSBzdGFydFRpbWU7XG4gICAgICAgICAgICBsZXQgcHJvZ3Jlc3MgPSAxICsgKGVsYXBzZWQgLyBsb2FkaW5nRHVyYXRpb24pICogOTk7IC8vINCS0ZbQtCAxJSDQtNC+IDEwMCVcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0J7QsdC80LXQttGD0ZTQvNC+INC/0YDQvtCz0YDQtdGBINC00L4gMTAwJVxuICAgICAgICAgICAgaWYgKHByb2dyZXNzID49IHRhcmdldFByb2dyZXNzKSB7XG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3MgPSB0YXJnZXRQcm9ncmVzcztcbiAgICAgICAgICAgICAgICBpc0xvYWRpbmdDb21wbGV0ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGN1cnJlbnRQcm9ncmVzcyA9IHByb2dyZXNzO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQntC90L7QstC70Y7RlNC80L4g0LLRltC00L7QsdGA0LDQttC10L3QvdGPXG4gICAgICAgICAgICBkcmF3UHJvZ3Jlc3NCYXIocHJvZ3Jlc3MpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQntC90L7QstC70Y7RlNC80L4g0LLRltC00YHQvtGC0LrQuCAo0YLRltC70YzQutC4INGG0ZbQu9GWINGH0LjRgdC70LApXG4gICAgICAgICAgICBjb25zdCBwZXJjZW50ID0gTWF0aC5mbG9vcihwcm9ncmVzcyk7XG4gICAgICAgICAgICBwZXJjZW50RWxlbWVudC50ZXh0Q29udGVudCA9IHBlcmNlbnQgKyAnJSc7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCf0YDQvtC00L7QstC20YPRlNC80L4g0LDQvdGW0LzQsNGG0ZbRjiDQtNC+INC30LDQstC10YDRiNC10L3QvdGPINC30LDQstCw0L3RgtCw0LbQtdC90L3Rj1xuICAgICAgICAgICAgaWYgKCFpc0xvYWRpbmdDb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbklkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZVByb2dyZXNzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8g0IbQvdGW0YbRltCw0LvRltC30YPRlNC80L4g0YDQvtC30LzRltGA0LggY2FudmFzXG4gICAgICAgIHJlc2l6ZUNhbnZhcygpO1xuICAgICAgICBcbiAgICAgICAgLy8g0J7QsdGA0L7QsdC60LAg0LfQvNGW0L3QuCDRgNC+0LfQvNGW0YDRgyDQstGW0LrQvdCwXG4gICAgICAgIGxldCByZXNpemVUaW1lb3V0O1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHJlc2l6ZVRpbWVvdXQpO1xuICAgICAgICAgICAgcmVzaXplVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc2l6ZUNhbnZhcygpO1xuICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICAvLyDQhtC90ZbRhtGW0LDQu9GW0LfQsNGG0ZbRjyDQsNC90ZbQvNCw0YbRltGXINC/0L7Rj9Cy0Lgg0ZbQutC+0L3QvtC6XG4gICAgICAgIGluaXRJY29uc0FuaW1hdGlvbihsb2FkaW5nRHVyYXRpb24pO1xuICAgICAgICBcbiAgICAgICAgLy8g0JfQsNC/0YPRgdC60LDRlNC80L4g0LDQvdGW0LzQsNGG0ZbRjiDQtyDQvdC10LLQtdC70LjQutC+0Y4g0LfQsNGC0YDQuNC80LrQvtGOINC00LvRjyDQutC+0YDQtdC60YLQvdC+0LPQviDRgNC+0LfRgNCw0YXRg9C90LrRgyDRgNC+0LfQvNGW0YDRltCyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc2l6ZUNhbnZhcygpO1xuICAgICAgICAgICAgICAgIHN0YXJ0VGltZSA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgdXBkYXRlUHJvZ3Jlc3MoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyDQkNC90ZbQvNCw0YbRltGPINC/0L7Rj9Cy0Lgg0ZbQutC+0L3QvtC6INC/0L4g0YfQtdGA0LfRliDQv9GW0LQg0YfQsNGBINC30LDQstCw0L3RgtCw0LbQtdC90L3Rj1xuICAgIGZ1bmN0aW9uIGluaXRJY29uc0FuaW1hdGlvbihkdXJhdGlvbikge1xuICAgICAgICBjb25zdCBpY29ucyA9IFtcbiAgICAgICAgICAgICcud2VsY29tZV9fZGVjb3ItaXRlbS5fZ2FtZXBhZCcsXG4gICAgICAgICAgICAnLndlbGNvbWVfX2RlY29yLWl0ZW0uX2NoaXAnLFxuICAgICAgICAgICAgJy53ZWxjb21lX19kZWNvci1pdGVtLl9jb2luJyxcbiAgICAgICAgICAgICcud2VsY29tZV9fZGVjb3ItaXRlbS5fYmFsbCcsXG4gICAgICAgICAgICAnLndlbGNvbWVfX2RlY29yLWl0ZW0uX2N1cCcsXG4gICAgICAgICAgICAnLndlbGNvbWVfX2RlY29yLWl0ZW0uX2N1YmUnLFxuICAgICAgICAgICAgJy53ZWxjb21lX19kZWNvci1pdGVtLl9nbG9iZSdcbiAgICAgICAgXTtcblxuICAgICAgICAvLyDQl9Cx0LXRgNGW0LPQsNGU0LzQviDQvtGA0LjQs9GW0L3QsNC70YzQvdGWIHRyYW5zZm9ybSDQtNC70Y8g0LrQvtC20L3QvtGXINGW0LrQvtC90LrQuFxuICAgICAgICBjb25zdCBvcmlnaW5hbFRyYW5zZm9ybXMgPSBuZXcgTWFwKCk7XG4gICAgICAgIGNvbnN0IGhhZElubGluZVRyYW5zZm9ybSA9IG5ldyBNYXAoKTtcblxuICAgICAgICAvLyDQodC/0L7Rh9Cw0YLQutGDINC/0YDQuNGF0L7QstGD0ZTQvNC+INCy0YHRliDRltC60L7QvdC60LhcbiAgICAgICAgaWNvbnMuZm9yRWFjaChzZWxlY3RvciA9PiB7XG4gICAgICAgICAgICBjb25zdCBpY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgICAgICAgICBpZiAoaWNvbikge1xuICAgICAgICAgICAgICAgIC8vINCf0LXRgNC10LLRltGA0Y/RlNC80L4sINGH0Lgg0LHRg9CyINCy0YHRgtCw0L3QvtCy0LvQtdC90LjQuSBpbmxpbmUgdHJhbnNmb3JtINCU0J4g0L3QsNGI0L7RlyDQsNC90ZbQvNCw0YbRltGXXG4gICAgICAgICAgICAgICAgY29uc3QgaGFkSW5saW5lID0gaWNvbi5zdHlsZS50cmFuc2Zvcm0gJiYgaWNvbi5zdHlsZS50cmFuc2Zvcm0gIT09ICcnO1xuICAgICAgICAgICAgICAgIGhhZElubGluZVRyYW5zZm9ybS5zZXQoc2VsZWN0b3IsIGhhZElubGluZSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8g0JfQsdC10YDRltCz0LDRlNC80L4g0L7RgNC40LPRltC90LDQu9GM0L3QuNC5IHRyYW5zZm9ybSDQtyBjb21wdXRlZCBzdHlsZSAo0LLQutC70Y7Rh9Cw0ZQgQ1NTKVxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShpY29uKTtcbiAgICAgICAgICAgICAgICBjb25zdCBvcmlnaW5hbFRyYW5zZm9ybSA9IGNvbXB1dGVkU3R5bGUudHJhbnNmb3JtO1xuICAgICAgICAgICAgICAgIG9yaWdpbmFsVHJhbnNmb3Jtcy5zZXQoc2VsZWN0b3IsIG9yaWdpbmFsVHJhbnNmb3JtKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyDQktGB0YLQsNC90L7QstC70Y7RlNC80L4g0L/QvtGH0LDRgtC60L7QstC40Lkg0YHRgtCw0L1cbiAgICAgICAgICAgICAgICBpY29uLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgICAgICAgICAgICAgaWNvbi5zdHlsZS50cmFuc2l0aW9uID0gJ29wYWNpdHkgMC40cyBlYXNlLCB0cmFuc2Zvcm0gMC40cyBlYXNlJztcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyDQktGB0YLQsNC90L7QstC70Y7RlNC80L4gc2NhbGUg0Lcg0LfQsdC10YDQtdC20LXQvdC90Y/QvCByb3RhdGVcbiAgICAgICAgICAgICAgICBpZiAob3JpZ2luYWxUcmFuc2Zvcm0gJiYgb3JpZ2luYWxUcmFuc2Zvcm0gIT09ICdub25lJykge1xuICAgICAgICAgICAgICAgICAgICBpY29uLnN0eWxlLnRyYW5zZm9ybSA9IG9yaWdpbmFsVHJhbnNmb3JtICsgJyBzY2FsZSgwLjUpJztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpY29uLnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZSgwLjUpJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vINCg0L7Qt9GA0LDRhdC+0LLRg9GU0LzQviDRltC90YLQtdGA0LLQsNC7INC80ZbQtiDQv9C+0Y/QstC+0Y4g0ZbQutC+0L3QvtC6XG4gICAgICAgIGNvbnN0IGljb25Db3VudCA9IGljb25zLmxlbmd0aDtcbiAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBkdXJhdGlvbiAvIGljb25Db3VudDsgLy8g0KDRltCy0L3QvtC80ZbRgNC90L4g0YDQvtC30L/QvtC00ZbQu9GP0ZTQvNC+INC/0L4g0YfQsNGB0YNcblxuICAgICAgICAvLyDQn9C+0LrQsNC30YPRlNC80L4g0ZbQutC+0L3QutC4INC/0L4g0YfQtdGA0LfRllxuICAgICAgICBpY29ucy5mb3JFYWNoKChzZWxlY3RvciwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICAgICAgICAgICAgICBpZiAoaWNvbikge1xuICAgICAgICAgICAgICAgICAgICBpY29uLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyDQktGW0LTQvdC+0LLQu9GO0ZTQvNC+INC+0YDQuNCz0ZbQvdCw0LvRjNC90LjQuSB0cmFuc2Zvcm1cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxUcmFuc2Zvcm0gPSBvcmlnaW5hbFRyYW5zZm9ybXMuZ2V0KHNlbGVjdG9yKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaGFkSW5saW5lID0gaGFkSW5saW5lVHJhbnNmb3JtLmdldChzZWxlY3Rvcik7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAob3JpZ2luYWxUcmFuc2Zvcm0gJiYgb3JpZ2luYWxUcmFuc2Zvcm0gIT09ICdub25lJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbi5zdHlsZS50cmFuc2Zvcm0gPSBvcmlnaW5hbFRyYW5zZm9ybTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChoYWRJbmxpbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uLnN0eWxlLnRyYW5zZm9ybSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbi5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNmb3JtJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBpbmRleCAqIGludGVydmFsKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8g0JfQvNGW0L3QvdGWINC00LvRjyDQt9Cx0LXRgNGW0LPQsNC90L3RjyDQv9C+0YHQuNC70LDQvdGMINC90LAgY2FudmFzINGC0LAg0LTQsNC90ZYg0LTQu9GPINC+0LHRgNC+0LHQvdC40LrRltCyINC/0L7QtNGW0LlcbiAgICBsZXQgcGFydGljaXBhdGVDYW52YXMgPSBudWxsO1xuICAgIGxldCBwYXJ0aWNpcGF0ZURlZXJzID0gW107XG4gICAgbGV0IHBhcnRpY2lwYXRlRGVlcldpZHRoID0gMDtcbiAgICBsZXQgcGFydGljaXBhdGVEZWVySGVpZ2h0ID0gMDtcbiAgICBsZXQgY2FudmFzQ2xpY2tIYW5kbGVyc0F0dGFjaGVkID0gZmFsc2U7XG4gICAgbGV0IHBhcnRpY2lwYXRlQW5pbWF0aW9uSWQgPSBudWxsOyAvLyDQk9C70L7QsdCw0LvRjNC90LAg0LfQvNGW0L3QvdCwINC00LvRjyBJRCDQsNC90ZbQvNCw0YbRltGXXG4gICAgXG4gICAgLy8g0JfQvNGW0L3QvdGWINC00LvRjyDQstGW0LTRgdGC0LXQttC10L3QvdGPIHRvdWNoINC/0L7QtNGW0LlcbiAgICBsZXQgdG91Y2hTdGFydFggPSAwO1xuICAgIGxldCB0b3VjaFN0YXJ0WSA9IDA7XG5cbiAgICAvLyDQntCx0YDQvtCx0L3QuNC6INC60LvRltC60YMg0L/QviBjYW52YXNcbiAgICBmdW5jdGlvbiBoYW5kbGVQYXJ0aWNpcGF0ZUNhbnZhc0NsaWNrKGV2ZW50KSB7XG4gICAgICAgIGlmICghcGFydGljaXBhdGVDYW52YXMgfHwgIXBhcnRpY2lwYXRlRGVlcnMubGVuZ3RoKSByZXR1cm47XG4gICAgICAgIFxuICAgICAgICBjb25zdCByZWN0ID0gcGFydGljaXBhdGVDYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IHNjYWxlWCA9IHBhcnRpY2lwYXRlQ2FudmFzLndpZHRoIC8gcmVjdC53aWR0aDtcbiAgICAgICAgY29uc3Qgc2NhbGVZID0gcGFydGljaXBhdGVDYW52YXMuaGVpZ2h0IC8gcmVjdC5oZWlnaHQ7XG4gICAgICAgIFxuICAgICAgICAvLyDQntGC0YDQuNC80YPRlNC80L4g0LrQvtC+0YDQtNC40L3QsNGC0Lgg0LrQu9GW0LrRgyDQstGW0LTQvdC+0YHQvdC+IGNhbnZhc1xuICAgICAgICBjb25zdCBjbGllbnRYID0gZXZlbnQuY2xpZW50WDtcbiAgICAgICAgY29uc3QgY2xpZW50WSA9IGV2ZW50LmNsaWVudFk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBjbGlja1ggPSAoY2xpZW50WCAtIHJlY3QubGVmdCkgKiBzY2FsZVg7XG4gICAgICAgIGNvbnN0IGNsaWNrWSA9IChjbGllbnRZIC0gcmVjdC50b3ApICogc2NhbGVZO1xuICAgICAgICBcbiAgICAgICAgLy8g0J/QtdGA0LXQstGW0YDRj9GU0LzQviDRh9C4INC60LvRltC6INC/0L7RgtGA0LDQv9C40LIg0L3QsCDRj9C60L7Qs9C+0YHRjCDQvtC70LXQvdGPXG4gICAgICAgIHBhcnRpY2lwYXRlRGVlcnMuZm9yRWFjaChkZWVyID0+IHtcbiAgICAgICAgICAgIGlmIChkZWVyLmlzUG9pbnRJbnNpZGUoY2xpY2tYLCBjbGlja1ksIHBhcnRpY2lwYXRlRGVlcldpZHRoLCBwYXJ0aWNpcGF0ZURlZXJIZWlnaHQpKSB7XG4gICAgICAgICAgICAgICAgZGVlci5oYW5kbGVDbGljaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgLy8g0J7QsdGA0L7QsdC90LjQuiB0b3VjaHN0YXJ0INC00LvRjyDQstGW0LTRgdGC0LXQttC10L3QvdGPINC/0L7Rh9Cw0YLQutGDINC00L7RgtC40LrRg1xuICAgIGZ1bmN0aW9uIGhhbmRsZVBhcnRpY2lwYXRlQ2FudmFzVG91Y2hTdGFydChldmVudCkge1xuICAgICAgICBpZiAoIXBhcnRpY2lwYXRlQ2FudmFzIHx8ICFwYXJ0aWNpcGF0ZURlZXJzLmxlbmd0aCkgcmV0dXJuO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgdG91Y2ggPSBldmVudC50b3VjaGVzWzBdO1xuICAgICAgICBpZiAoIXRvdWNoKSByZXR1cm47XG4gICAgICAgIFxuICAgICAgICAvLyDQl9Cx0LXRgNGW0LPQsNGU0LzQviDQutC+0L7RgNC00LjQvdCw0YLQuCDQv9C+0YfQsNGC0LrRgyDQtNC+0YLQuNC60YNcbiAgICAgICAgdG91Y2hTdGFydFggPSB0b3VjaC5jbGllbnRYO1xuICAgICAgICB0b3VjaFN0YXJ0WSA9IHRvdWNoLmNsaWVudFk7XG4gICAgfVxuICAgIFxuICAgIC8vINCe0LHRgNC+0LHQvdC40LogdG91Y2hlbmQg0LTQu9GPINCy0LjQt9C90LDRh9C10L3QvdGPINGH0Lgg0YbQtSDRgtCw0L8g0YfQuCDRgdC60YDQvtC7XG4gICAgZnVuY3Rpb24gaGFuZGxlUGFydGljaXBhdGVDYW52YXNUb3VjaEVuZChldmVudCkge1xuICAgICAgICBpZiAoIXBhcnRpY2lwYXRlQ2FudmFzIHx8ICFwYXJ0aWNpcGF0ZURlZXJzLmxlbmd0aCkgcmV0dXJuO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgdG91Y2ggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXTtcbiAgICAgICAgaWYgKCF0b3VjaCkgcmV0dXJuO1xuICAgICAgICBcbiAgICAgICAgLy8g0KDQvtC30YDQsNGF0L7QstGD0ZTQvNC+INCy0ZbQtNGB0YLQsNC90Ywg0LzRltC2IHRvdWNoc3RhcnQg0YLQsCB0b3VjaGVuZFxuICAgICAgICBjb25zdCBkZWx0YVggPSBNYXRoLmFicyh0b3VjaC5jbGllbnRYIC0gdG91Y2hTdGFydFgpO1xuICAgICAgICBjb25zdCBkZWx0YVkgPSBNYXRoLmFicyh0b3VjaC5jbGllbnRZIC0gdG91Y2hTdGFydFkpO1xuICAgICAgICBjb25zdCBkaXN0YW5jZSA9IE1hdGguc3FydChkZWx0YVggKiBkZWx0YVggKyBkZWx0YVkgKiBkZWx0YVkpO1xuICAgICAgICBcbiAgICAgICAgLy8g0K/QutGJ0L4g0LLRltC00YHRgtCw0L3RjCDQsdGW0LvRjNGI0LUgMTBweCAtINGG0LUg0YHQutGA0L7Quywg0L3QtSDQvtCx0YDQvtCx0LvRj9GU0LzQvlxuICAgICAgICBpZiAoZGlzdGFuY2UgPiAxMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyDQr9C60YnQviDQstGW0LTRgdGC0LDQvdGMINC80LXQvdGI0LUg0LDQsdC+INC00L7RgNGW0LLQvdGO0ZQgMTBweCAtINGG0LUg0YLQsNC/LCDQvtCx0YDQvtCx0LvRj9GU0LzQvlxuICAgICAgICBjb25zdCByZWN0ID0gcGFydGljaXBhdGVDYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IHNjYWxlWCA9IHBhcnRpY2lwYXRlQ2FudmFzLndpZHRoIC8gcmVjdC53aWR0aDtcbiAgICAgICAgY29uc3Qgc2NhbGVZID0gcGFydGljaXBhdGVDYW52YXMuaGVpZ2h0IC8gcmVjdC5oZWlnaHQ7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBjbGlja1ggPSAodG91Y2guY2xpZW50WCAtIHJlY3QubGVmdCkgKiBzY2FsZVg7XG4gICAgICAgIGNvbnN0IGNsaWNrWSA9ICh0b3VjaC5jbGllbnRZIC0gcmVjdC50b3ApICogc2NhbGVZO1xuICAgICAgICBcbiAgICAgICAgLy8g0J/QtdGA0LXQstGW0YDRj9GU0LzQviDRh9C4INGC0LDQvyDQv9C+0YLRgNCw0L/QuNCyINC90LAg0Y/QutC+0LPQvtGB0Ywg0L7Qu9C10L3Rj1xuICAgICAgICBwYXJ0aWNpcGF0ZURlZXJzLmZvckVhY2goZGVlciA9PiB7XG4gICAgICAgICAgICBpZiAoZGVlci5pc1BvaW50SW5zaWRlKGNsaWNrWCwgY2xpY2tZLCBwYXJ0aWNpcGF0ZURlZXJXaWR0aCwgcGFydGljaXBhdGVEZWVySGVpZ2h0KSkge1xuICAgICAgICAgICAgICAgIGRlZXIuaGFuZGxlQ2xpY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdFBhcnRpY2lwYXRlQ2FudmFzKCkge1xuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGFydGljaXBhdGVDYW52YXMnKTtcbiAgICAgICAgaWYgKCFjYW52YXMpIHJldHVybjtcblxuICAgICAgICAvLyDQl9GD0L/QuNC90Y/RlNC80L4g0L/QvtC/0LXRgNC10LTQvdGOINCw0L3RltC80LDRhtGW0Y4g0Y/QutGJ0L4g0LLQvtC90LAg0ZbRgdC90YPRlFxuICAgICAgICBpZiAocGFydGljaXBhdGVBbmltYXRpb25JZCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUocGFydGljaXBhdGVBbmltYXRpb25JZCk7XG4gICAgICAgICAgICBwYXJ0aWNpcGF0ZUFuaW1hdGlvbklkID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8g0J7Rh9C40YnQsNGU0LzQviDQv9C+0L/QtdGA0LXQtNC90ZbRhSDQvtC70LXQvdGW0LJcbiAgICAgICAgcGFydGljaXBhdGVEZWVycyA9IFtdO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIFxuICAgICAgICAvLyDQntC90L7QstC70Y7RlNC80L4g0L/QvtGB0LjQu9Cw0L3QvdGPINC90LAgY2FudmFzXG4gICAgICAgIHBhcnRpY2lwYXRlQ2FudmFzID0gY2FudmFzO1xuICAgICAgICBcbiAgICAgICAgLy8g0JLQuNC30L3QsNGH0LDRlNC80L4g0YfQuCDQtdC60YDQsNC9IDw9IDEwNTBweFxuICAgICAgICBjb25zdCBpc01vYmlsZSA9IHdpbmRvdy5pbm5lcldpZHRoIDw9IDEwNTA7XG5cbiAgICAgICAgLy8g0JrQvtC90YHRgtCw0L3RgtC4INC00LvRjyDRgNC+0LfQvNGW0YDRltCyINGC0LAg0L/QvtC30LjRhtGW0LlcbiAgICAgICAgY29uc3QgQ0FOVkFTX1dJRFRIID0gaXNNb2JpbGUgPyA3NjggOiAxMzY2O1xuICAgICAgICBjb25zdCBDQU5WQVNfSEVJR0hUID0gaXNNb2JpbGUgPyA0NzAgOiA1MDA7XG4gICAgICAgIFxuICAgICAgICAvLyDQktGB0YLQsNC90L7QstC70Y7RlNC80L4g0YDQvtC30LzRltGA0LggY2FudmFzXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IENBTlZBU19XSURUSDtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IENBTlZBU19IRUlHSFQ7XG4gICAgICAgIFxuICAgICAgICAvLyDQpNGW0LrRgdC+0LLQsNC90ZYg0YDQvtC30LzRltGA0Lgg0LTQtdGA0LXQstCwICjQvdC1INC80LDRgdGI0YLQsNCx0YPRjtGC0YzRgdGPKVxuICAgICAgICBjb25zdCBUUkVFX1dJRFRIID0gMTc1O1xuICAgICAgICBjb25zdCBUUkVFX0hFSUdIVCA9IDE2NztcbiAgICAgICAgXG4gICAgICAgIC8vINCf0LDRgNCw0LzQtdGC0YDQuCDRgdC/0YDQsNC50YIt0LvQuNGB0YLQsFxuICAgICAgICBjb25zdCBGUkFNRVNfUEVSX1JPVyA9IDU7IC8vIDUg0LrQsNC00YDRltCyINCyINGA0Y/QtNC60YNcbiAgICAgICAgY29uc3QgVE9UQUxfUk9XUyA9IDI7IC8vIDIg0YDRj9C00LhcbiAgICAgICAgY29uc3QgU1BSSVRFX1NIRUVUX1dJRFRIID0gMTEwMDsgLy8g0KDQtdCw0LvRjNC90LAg0YjQuNGA0LjQvdCwINGB0L/RgNCw0LnRgi3Qu9C40YHRgtCwXG4gICAgICAgIGNvbnN0IFNQUklURV9TSEVFVF9IRUlHSFQgPSA0Njg7IC8vINCg0LXQsNC70YzQvdCwINCy0LjRgdC+0YLQsCDRgdC/0YDQsNC50YIt0LvQuNGB0YLQsFxuICAgICAgICBcbiAgICAgICAgLy8g0KDQvtC30LzRltGA0Lgg0L7QtNC90L7Qs9C+INC60LDQtNGA0YMg0LIg0YHQv9GA0LDQudGCLdC70LjRgdGC0ZZcbiAgICAgICAgY29uc3QgRlJBTUVfV0lEVEggPSBNYXRoLmZsb29yKFNQUklURV9TSEVFVF9XSURUSCAvIEZSQU1FU19QRVJfUk9XKTsgLy8gMjIwcHhcbiAgICAgICAgY29uc3QgRlJBTUVfSEVJR0hUID0gTWF0aC5mbG9vcihTUFJJVEVfU0hFRVRfSEVJR0hUIC8gVE9UQUxfUk9XUyk7IC8vIDIzNHB4XG4gICAgICAgIFxuICAgICAgICAvLyDQpNGW0LrRgdC+0LLQsNC90ZYg0YDQvtC30LzRltGA0Lgg0L7Qu9C10L3RjyDQvdCwIGNhbnZhc1xuICAgICAgICBjb25zdCBERUVSX1NDQUxFID0gMC41OyAvLyDQnNCw0YHRiNGC0LDQsSDQtNC70Y8g0LLRltC00L7QsdGA0LDQttC10L3QvdGPINC90LAgY2FudmFzXG4gICAgICAgIGNvbnN0IEJBU0VfREVFUl9XSURUSCA9IE1hdGguZmxvb3IoRlJBTUVfV0lEVEggKiBERUVSX1NDQUxFKTsgXG4gICAgICAgIGNvbnN0IEJBU0VfREVFUl9IRUlHSFQgPSBNYXRoLmZsb29yKEZSQU1FX0hFSUdIVCAqIERFRVJfU0NBTEUpO1xuICAgICAgICBcbiAgICAgICAgLy8g0JfQvNC10L3RiNGD0ZTQvNC+INGA0L7Qt9C80ZbRgNC4INC+0LvQtdC90ZbQsiDQvdCwIDE1JSDQtNC70Y8g0LzQvtCx0ZbQu9GM0L3QuNGFINC/0YDQuNGB0YLRgNC+0ZfQslxuICAgICAgICBsZXQgREVFUl9XSURUSCA9IEJBU0VfREVFUl9XSURUSDtcbiAgICAgICAgbGV0IERFRVJfSEVJR0hUID0gQkFTRV9ERUVSX0hFSUdIVDtcbiAgICAgICAgbGV0IGRlZXJIZWlnaHRPZmZzZXQgPSAwOyAvLyDQl9C80ZbRidC10L3QvdGPINC00LvRjyDQt9Cx0LXRgNC10LbQtdC90L3RjyDQv9C+0LfQuNGG0ZbRlyDQstGW0LTQvdC+0YHQvdC+INC90LjQttC90YzQvtCz0L4g0LrRgNCw0Y5cbiAgICAgICAgXG4gICAgICAgIGlmIChpc01vYmlsZSkge1xuICAgICAgICAgICAgREVFUl9XSURUSCA9IE1hdGguZmxvb3IoQkFTRV9ERUVSX1dJRFRIICogLjgpO1xuICAgICAgICAgICAgREVFUl9IRUlHSFQgPSBNYXRoLmZsb29yKEJBU0VfREVFUl9IRUlHSFQgKiAuOCk7XG4gICAgICAgICAgICAvLyDQoNC+0LfRgNCw0YXQvtCy0YPRlNC80L4g0LfQvNGW0YnQtdC90L3RjyDQtNC70Y8g0LfQsdC10YDQtdC20LXQvdC90Y8g0L/QvtC30LjRhtGW0Zcg0LLRltC00L3QvtGB0L3QviDQvdC40LbQvdGM0L7Qs9C+INC60YDQsNGOXG4gICAgICAgICAgICBkZWVySGVpZ2h0T2Zmc2V0ID0gQkFTRV9ERUVSX0hFSUdIVCAtIERFRVJfSEVJR0hUO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g0J/QvtC30LjRhtGW0Zcg0LXQu9C10LzQtdC90YLRltCyXG4gICAgICAgIGxldCB0cmVlWCwgdHJlZVk7XG4gICAgICAgIGlmIChpc01vYmlsZSkge1xuICAgICAgICAgICAgdHJlZVggPSAyMzU7XG4gICAgICAgICAgICB0cmVlWSA9IENBTlZBU19IRUlHSFQgLSAxNTIgLSBUUkVFX0hFSUdIVDsgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyDQlNC10YHQutGC0L7Qv9C90LAg0LLQtdGA0YHRltGPXG4gICAgICAgICAgICB0cmVlWCA9IENBTlZBU19XSURUSCAvIDIgLSAzMDA7IFxuICAgICAgICAgICAgdHJlZVkgPSBDQU5WQVNfSEVJR0hUIC8gMiAtIFRSRUVfSEVJR0hUIC8gMjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8g0J/QsNGA0LDQvNC10YLRgNC4INCw0L3RltC80LDRhtGW0ZcgKNGB0L/RltC70YzQvdGWINC00LvRjyDQstGB0ZbRhSDQvtC70LXQvdGW0LIpXG4gICAgICAgIGNvbnN0IEZSQU1FX0RFTEFZID0gMTI7IC8vINCX0LDRgtGA0LjQvNC60LAg0LzRltC2INC60LDQtNGA0LDQvNC4XG4gICAgICAgIGNvbnN0IFdBTEtJTkdfRlJBTUVTID0gNTsgLy8g0JrRltC70YzQutGW0YHRgtGMINC60LDQtNGA0ZbQsiDQtNC70Y8g0YXQvtC00YzQsdC4XG4gICAgICAgIGNvbnN0IEZSQU1FX1JFUEVBVCA9IDI7IC8vINCa0ZbQu9GM0LrRltGB0YLRjCDRgNCw0LfRltCyINC/0L7QutCw0LfRg9Cy0LDRgtC4INC60L7QttC10L0g0LrQsNC00YBcbiAgICAgICAgY29uc3QgSURMRV9NSU5fRFVSQVRJT04gPSA2MDsgLy8g0JzRltC90ZbQvNCw0LvRjNC90LAg0YLRgNC40LLQsNC70ZbRgdGC0Ywg0LfRg9C/0LjQvdC60LggKDEg0YHQtdC60YPQvdC00LAg0L/RgNC4IDYwZnBzKVxuICAgICAgICBjb25zdCBJRExFX01BWF9EVVJBVElPTiA9IDE4MDsgLy8g0JzQsNC60YHQuNC80LDQu9GM0L3QsCDRgtGA0LjQstCw0LvRltGB0YLRjCDQt9GD0L/QuNC90LrQuCAoMyDRgdC10LrRg9C90LTQuCDQv9GA0LggNjBmcHMpXG5cbiAgICAgICAgLy8g0KHRgtCw0L3QuCDQsNC90ZbQvNCw0YbRltGXINC+0LvQtdC90Y9cbiAgICAgICAgY29uc3QgREVFUl9TVEFURSA9IHtcbiAgICAgICAgICAgIFdBTEtJTkc6ICd3YWxraW5nJyxcbiAgICAgICAgICAgIElETEU6ICdpZGxlJyxcbiAgICAgICAgICAgIFBFVFRJTkc6ICdwZXR0aW5nJ1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgLy8g0J/QsNGA0LDQvNC10YLRgNC4INC00LvRjyDRgdGC0LDQvdGDIHBldHRpbmdcbiAgICAgICAgY29uc3QgUEVUVElOR19NSU5fRFVSQVRJT04gPSA2MDsgLy8gMSDRgdC10LrRg9C90LTQsCDQv9GA0LggNjBmcHNcbiAgICAgICAgY29uc3QgUEVUVElOR19NQVhfRFVSQVRJT04gPSAxODA7IC8vIDMg0YHQtdC60YPQvdC00Lgg0L/RgNC4IDYwZnBzXG4gICAgICAgIGNvbnN0IEhFQVJUX1NJWkVfTUlOID0gODtcbiAgICAgICAgY29uc3QgSEVBUlRfU0laRV9NQVggPSAxMjtcbiAgICAgICAgY29uc3QgSEVBUlRfUklTRV9ESVNUQU5DRSA9IDMwOyAvLyDQktGW0LTRgdGC0LDQvdGMINC/0ZbQtNC50L7QvNGDINGB0LXRgNC00LXRh9C60LBcbiAgICAgICAgY29uc3QgSEVBUlRfU1BBV05fSU5URVJWQUwgPSAyMDsgLy8g0IbQvdGC0LXRgNCy0LDQuyDQv9C+0Y/QstC4INGB0LXRgNC00LXRh9C+0LogKNC60LDQtNGA0LgpXG4gICAgICAgIFxuICAgICAgICBsZXQgZnJhbWVDb3VudGVyID0gMDsgLy8g0JPQu9C+0LHQsNC70YzQvdC40Lkg0LvRltGH0LjQu9GM0L3QuNC6INC60LDQtNGA0ZbQsiDQtNC70Y8g0YHQuNC90YXRgNC+0L3RltC30LDRhtGW0ZdcblxuICAgICAgICAvLyDQmtC70LDRgSDQtNC70Y8g0YHQtdGA0LTQtdGH0LrQsFxuICAgICAgICBjbGFzcyBIZWFydCB7XG4gICAgICAgICAgICBjb25zdHJ1Y3Rvcih4LCB5LCBzaXplLCBoZWFydEltYWdlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICAgICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XG4gICAgICAgICAgICAgICAgdGhpcy5vcGFjaXR5ID0gMTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjYWxlID0gMTtcbiAgICAgICAgICAgICAgICB0aGlzLnJpc2VTcGVlZCA9IDAuNTsgLy8g0KjQstC40LTQutGW0YHRgtGMINC/0ZbQtNC50L7QvNGDXG4gICAgICAgICAgICAgICAgdGhpcy5oZWFydEltYWdlID0gaGVhcnRJbWFnZTsgLy8g0JfQvtCx0YDQsNC20LXQvdC90Y8g0YHQtdGA0LTQtdGH0LrQsFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB1cGRhdGUoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy55IC09IHRoaXMucmlzZVNwZWVkO1xuICAgICAgICAgICAgICAgIHRoaXMub3BhY2l0eSAtPSAwLjAyO1xuICAgICAgICAgICAgICAgIHRoaXMuc2NhbGUgKz0gMC4wMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaXNWaXNpYmxlKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm9wYWNpdHkgPiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBkcmF3KGN0eCkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc1Zpc2libGUoKSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vINCf0LXRgNC10LLRltGA0LrQsCDQvdCw0Y/QstC90L7RgdGC0ZYg0YLQsCDQt9Cw0LLQsNC90YLQsNC20LXQvdC90Y8g0LfQvtCx0YDQsNC20LXQvdC90Y9cbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaGVhcnRJbWFnZSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5oZWFydEltYWdlLmNvbXBsZXRlKSByZXR1cm47XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaGVhcnRJbWFnZS5uYXR1cmFsV2lkdGggPT09IDAgfHwgdGhpcy5oZWFydEltYWdlLm5hdHVyYWxIZWlnaHQgPT09IDApIHJldHVybjtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjdHguc2F2ZSgpO1xuXG4gICAgICAgICAgICAgICAgY3R4Lmdsb2JhbEFscGhhID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgdGhpcy5vcGFjaXR5KSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8g0JzQsNC70Y7RlNC80L4g0LfQvtCx0YDQsNC20LXQvdC90Y8g0YHQtdGA0LTQtdGH0LrQsCDQtyDQvNCw0YHRiNGC0LDQsdGD0LLQsNC90L3Rj9C8XG4gICAgICAgICAgICAgICAgY29uc3QgZHJhd1NpemUgPSB0aGlzLnNpemUgKiB0aGlzLnNjYWxlO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRyYXdYID0gdGhpcy54IC0gZHJhd1NpemUgLyAyO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRyYXdZID0gdGhpcy55IC0gZHJhd1NpemUgLyAyO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vINCU0L7QtNCw0YLQutC+0LLQsCDQv9C10YDQtdCy0ZbRgNC60LAg0LTQu9GPINC60L7RgNC10LrRgtC90L7Qs9C+INC80LDQu9GO0LLQsNC90L3Rj1xuICAgICAgICAgICAgICAgIGlmIChkcmF3U2l6ZSA+IDAgJiYgdGhpcy5oZWFydEltYWdlLndpZHRoID4gMCAmJiB0aGlzLmhlYXJ0SW1hZ2UuaGVpZ2h0ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oZWFydEltYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgMCwgMCwgdGhpcy5oZWFydEltYWdlLndpZHRoLCB0aGlzLmhlYXJ0SW1hZ2UuaGVpZ2h0LCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGRyYXdYLCBkcmF3WSwgZHJhd1NpemUsIGRyYXdTaXplIFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjdHgucmVzdG9yZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8g0JrQu9Cw0YEg0LTQu9GPINC+0LvQtdC90Y9cbiAgICAgICAgY2xhc3MgRGVlciB7XG4gICAgICAgICAgICBjb25zdHJ1Y3RvcihzdGFydFgsIHN0YXJ0WSwgbWluWCwgbWF4WCwgc3BlZWQgPSAwLjUsIHpJbmRleCA9IDAsIGhlYXJ0SW1hZ2UgPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy54ID0gc3RhcnRYO1xuICAgICAgICAgICAgICAgIHRoaXMueSA9IHN0YXJ0WTtcbiAgICAgICAgICAgICAgICB0aGlzLm1pblggPSBtaW5YO1xuICAgICAgICAgICAgICAgIHRoaXMubWF4WCA9IG1heFg7XG4gICAgICAgICAgICAgICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xuICAgICAgICAgICAgICAgIHRoaXMuekluZGV4ID0gekluZGV4OyAvLyDQn9C+0YDRj9C00L7QuiDQvNCw0LvRjtCy0LDQvdC90Y8gXG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAtMTsgLy8gLTEgPSDQstC70ZbQstC+LCAxID0g0LLQv9GA0LDQstC+XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IERFRVJfU1RBVEUuV0FMS0lORztcbiAgICAgICAgICAgICAgICB0aGlzLmZyYW1lSW5kZXggPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuZnJhbWVSZXBlYXRDb3VudGVyID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLmlkbGVUaW1lciA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5pZGxlRHVyYXRpb24gPSAwO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vINCS0LvQsNGB0YLQuNCy0L7RgdGC0ZYg0LTQu9GPINGB0YLQsNC90YMgcGV0dGluZ1xuICAgICAgICAgICAgICAgIHRoaXMucGV0dGluZ1RpbWVyID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLnBldHRpbmdEdXJhdGlvbiA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5wcmV2aW91c1N0YXRlID0gbnVsbDsgLy8g0JfQsdC10YDRltCz0LDRlNC80L4g0L/QvtC/0LXRgNC10LTQvdGW0Lkg0YHRgtCw0L1cbiAgICAgICAgICAgICAgICB0aGlzLnNhdmVkWCA9IDA7IC8vINCX0LHQtdGA0LXQttC10L3RliDQutC+0L7RgNC00LjQvdCw0YLQuCDQv9GA0Lgg0L/QtdGA0LXRhdC+0LTRliDQsiBwZXR0aW5nXG4gICAgICAgICAgICAgICAgdGhpcy5zYXZlZFkgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuaGVhcnRzID0gW107IC8vINCc0LDRgdC40LIg0YHQtdGA0LTQtdGH0L7QulxuICAgICAgICAgICAgICAgIHRoaXMuaGVhcnRTcGF3bkNvdW50ZXIgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuaGVhcnRJbWFnZSA9IGhlYXJ0SW1hZ2U7IC8vINCX0L7QsdGA0LDQttC10L3QvdGPINGB0LXRgNC00LXRh9C60LBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0J/QtdGA0LXQstGW0YDQutCwINGH0Lgg0LrQu9GW0Log0L/QvtGC0YDQsNC/0LjQsiDQvdCwINC+0LvQtdC90Y9cbiAgICAgICAgICAgIGlzUG9pbnRJbnNpZGUoY2xpY2tYLCBjbGlja1ksIGRlZXJXaWR0aCwgZGVlckhlaWdodCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjbGlja1ggPj0gdGhpcy54ICYmIFxuICAgICAgICAgICAgICAgICAgICAgICBjbGlja1ggPD0gdGhpcy54ICsgZGVlcldpZHRoICYmIFxuICAgICAgICAgICAgICAgICAgICAgICBjbGlja1kgPj0gdGhpcy55ICYmIFxuICAgICAgICAgICAgICAgICAgICAgICBjbGlja1kgPD0gdGhpcy55ICsgZGVlckhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0J7QsdGA0L7QsdC60LAg0LrQu9GW0LrRgyDQv9C+INC+0LvQtdC90Y5cbiAgICAgICAgICAgIGhhbmRsZUNsaWNrKCkge1xuICAgICAgICAgICAgICAgIC8vINCf0LXRgNC10YXQvtC00LjQvNC+INCyINGB0YLQsNC9IHBldHRpbmcg0LDQsdC+INC/0L7QvdC+0LLQu9GO0ZTQvNC+INGC0LDQudC80LXRgFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlICE9PSBERUVSX1NUQVRFLlBFVFRJTkcpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g0JfQsdC10YDRltCz0LDRlNC80L4g0L/QvtC/0LXRgNC10LTQvdGW0Lkg0YHRgtCw0L0g0YLQsCDQutC+0L7RgNC00LjQvdCw0YLQuFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXZpb3VzU3RhdGUgPSB0aGlzLnN0YXRlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNhdmVkWCA9IHRoaXMueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zYXZlZFkgPSB0aGlzLnk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBERUVSX1NUQVRFLlBFVFRJTkc7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGV0dGluZ1RpbWVyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgLy8g0J7Rh9C40YnQsNGU0LzQviDRgdGC0LDRgNGWINGB0LXRgNC00LXRh9C60LBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oZWFydHMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oZWFydFNwYXduQ291bnRlciA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vINCf0L7QvdC+0LLQu9GO0ZTQvNC+INGC0LDQudC80LXRgCBwZXR0aW5nICgxLTMg0YHQtdC60YPQvdC00LgpINGC0LAg0YHQutC40LTQsNGU0LzQviDQv9C+0YLQvtGH0L3QuNC5INGC0LDQudC80LXRgFxuICAgICAgICAgICAgICAgIHRoaXMucGV0dGluZ0R1cmF0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKFBFVFRJTkdfTUFYX0RVUkFUSU9OIC0gUEVUVElOR19NSU5fRFVSQVRJT04gKyAxKSkgKyBQRVRUSU5HX01JTl9EVVJBVElPTjtcbiAgICAgICAgICAgICAgICB0aGlzLnBldHRpbmdUaW1lciA9IDA7IC8vINCh0LrQuNC00LDRlNC80L4g0YLQsNC50LzQtdGAINC/0YDQuCDQutC+0LbQvdC+0LzRgyDQutC70ZbQutGDXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCh0YLQstC+0YDQtdC90L3RjyDQvdC+0LLQvtCz0L4g0YHQtdGA0LTQtdGH0LrQsFxuICAgICAgICAgICAgc3Bhd25IZWFydCgpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaGVhcnRJbWFnZSkgcmV0dXJuOyAvLyDQr9C60YnQviDQt9C+0LHRgNCw0LbQtdC90L3RjyDQvdC1INC30LDQstCw0L3RgtCw0LbQtdC90LUsINC90LUg0YHRgtCy0L7RgNGO0ZTQvNC+INGB0LXRgNC00LXRh9C60L5cbiAgICAgICAgICAgICAgICBjb25zdCBzaXplID0gTWF0aC5yYW5kb20oKSAqIChIRUFSVF9TSVpFX01BWCAtIEhFQVJUX1NJWkVfTUlOKSArIEhFQVJUX1NJWkVfTUlOO1xuICAgICAgICAgICAgICAgIGNvbnN0IG9mZnNldFggPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiBERUVSX1dJRFRIOyAvLyDQktC40L/QsNC00LrQvtCy0LUg0LfQvNGW0YnQtdC90L3RjyDQv9C+IFhcbiAgICAgICAgICAgICAgICBjb25zdCBoZWFydFggPSB0aGlzLnggKyBERUVSX1dJRFRIIC8gMiArIG9mZnNldFg7XG4gICAgICAgICAgICAgICAgY29uc3QgaGVhcnRZID0gdGhpcy55IC0gMTA7IC8vINCi0YDQvtGF0Lgg0LLQuNGJ0LUg0L7Qu9C10L3Rj1xuICAgICAgICAgICAgICAgIHRoaXMuaGVhcnRzLnB1c2gobmV3IEhlYXJ0KGhlYXJ0WCwgaGVhcnRZLCBzaXplLCB0aGlzLmhlYXJ0SW1hZ2UpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZ2V0U3ByaXRlRnJhbWVJbmRleCgpIHtcbiAgICAgICAgICAgICAgICAvLyDQktC10YDRhdC90ZbQuSDRgNGP0LTQvtC6ICgwKSA9INGA0YPRhSDQstC70ZbQstC+LCDQvdC40LbQvdGW0Lkg0YDRj9C00L7QuiAoMSkgPSDRgNGD0YUg0LLQv9GA0LDQstC+XG4gICAgICAgICAgICAgICAgY29uc3Qgcm93ID0gdGhpcy5kaXJlY3Rpb24gPT09IC0xID8gMCA6IDE7XG4gICAgICAgICAgICAgICAgbGV0IGNvbCA9IDA7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gREVFUl9TVEFURS5XQUxLSU5HKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vINCa0LDQtNGA0Lgg0YXQvtC00YzQsdC4OiAwLCAxLCAyLCAzLCA0ICjQstGB0ZYgNSDQutCw0LTRgNGW0LIpXG4gICAgICAgICAgICAgICAgICAgIGNvbCA9IHRoaXMuZnJhbWVJbmRleCAlIFdBTEtJTkdfRlJBTUVTO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZSA9PT0gREVFUl9TVEFURS5QRVRUSU5HKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vINCSINGB0YLQsNC90ZYgcGV0dGluZyDQstC40LrQvtGA0LjRgdGC0L7QstGD0ZTQvNC+INC60LDQtNGAIDAgKGlkbGUg0LrQsNC00YApXG4gICAgICAgICAgICAgICAgICAgIGNvbCA9IDA7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g0KHRgtCw0L0g0LfRg9C/0LjQvdC60LggKElETEUpIC0g0LLQuNC60L7RgNC40YHRgtC+0LLRg9GU0LzQviDQutCw0LTRgCAwXG4gICAgICAgICAgICAgICAgICAgIGNvbCA9IDA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgcm93LCBjb2wgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdXBkYXRlKHNob3VsZFVwZGF0ZUZyYW1lKSB7XG4gICAgICAgICAgICAgICAgLy8g0J7QvdC+0LLQu9GO0ZTQvNC+INCw0L3RltC80LDRhtGW0Y4g0LrQsNC00YDRltCyINC3INC/0L7QstGC0L7RgNC10L3QvdGP0Lwg0LTQu9GPINC/0LvQsNCy0L3QvtGB0YLRllxuICAgICAgICAgICAgICAgIGlmIChzaG91bGRVcGRhdGVGcmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gREVFUl9TVEFURS5XQUxLSU5HKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZyYW1lUmVwZWF0Q291bnRlcisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g0J/QvtC60LDQt9GD0ZTQvNC+INC60L7QttC10L0g0LrQsNC00YAg0LrRltC70YzQutCwINGA0LDQt9GW0LIg0LTQu9GPINC/0LvQsNCy0L3RltGI0L7RlyDQsNC90ZbQvNCw0YbRltGXXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5mcmFtZVJlcGVhdENvdW50ZXIgPj0gRlJBTUVfUkVQRUFUKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mcmFtZVJlcGVhdENvdW50ZXIgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vINCf0L7RgdC70ZbQtNC+0LLQvdC+INC/0YDQvtGF0L7QtNC40LzQviDRh9C10YDQtdC3INCy0YHRliDQutCw0LTRgNC4OiAwLCAxLCAyLCAzLCA0LCAwLCAxLCAyLCAzLCA0Li4uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mcmFtZUluZGV4ID0gKHRoaXMuZnJhbWVJbmRleCArIDEpICUgV0FMS0lOR19GUkFNRVM7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyDQm9C+0LPRltC60LAg0YHRgtCw0L3RltCyINGC0LAg0YDRg9GF0YNcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gREVFUl9TVEFURS5QRVRUSU5HKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vINCSINGB0YLQsNC90ZYgcGV0dGluZyDQvtC70LXQvdGMINC90LUg0YDRg9GF0LDRlNGC0YzRgdGPXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGV0dGluZ1RpbWVyKys7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyDQodGC0LLQvtGA0Y7RlNC80L4g0YHQtdGA0LTQtdGH0LrQsCDQtyDRltC90YLQtdGA0LLQsNC70L7QvFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhlYXJ0U3Bhd25Db3VudGVyKys7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmhlYXJ0U3Bhd25Db3VudGVyID49IEhFQVJUX1NQQVdOX0lOVEVSVkFMKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhlYXJ0U3Bhd25Db3VudGVyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3Bhd25IZWFydCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyDQntC90L7QstC70Y7RlNC80L4g0YHQtdGA0LTQtdGH0LrQsFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhlYXJ0cyA9IHRoaXMuaGVhcnRzLmZpbHRlcihoZWFydCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFydC51cGRhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBoZWFydC5pc1Zpc2libGUoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNGP0ZTQvNC+INGH0Lgg0LfQsNC60ZbQvdGH0LjQstGB0Y8g0YHRgtCw0L0gcGV0dGluZ1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wZXR0aW5nVGltZXIgPj0gdGhpcy5wZXR0aW5nRHVyYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vINCf0L7QstC10YDRgtCw0ZTQvNC+0YHRjyDQtNC+INC30LHQtdGA0LXQttC10L3QuNGFINC60L7QvtGA0LTQuNC90LDRglxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy54ID0gdGhpcy5zYXZlZFg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnkgPSB0aGlzLnNhdmVkWTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g0J/QvtCy0LXRgNGC0LDRlNC80L7RgdGPINC00L4g0L/QvtC/0LXRgNC10LTQvdGM0L7Qs9C+INGB0YLQsNC90YNcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnByZXZpb3VzU3RhdGUgPT09IERFRVJfU1RBVEUuV0FMS0lORykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBERUVSX1NUQVRFLldBTEtJTkc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g0J/RgNC+0LTQvtCy0LbRg9GU0LzQviDRgNGD0YUg0Lcg0LfQsdC10YDQtdC20LXQvdC40YUg0LrQvtC+0YDQtNC40L3QsNGCXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldmlvdXNTdGF0ZSA9PT0gREVFUl9TVEFURS5JRExFKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IERFRVJfU1RBVEUuSURMRTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDQn9C+0LLQtdGA0YLQsNGU0LzQvtGB0Y8g0LTQviDRgdGC0LDQvdGDIGlkbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlkbGVUaW1lciA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pZGxlRHVyYXRpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoSURMRV9NQVhfRFVSQVRJT04gLSBJRExFX01JTl9EVVJBVElPTiArIDEpKSArIElETEVfTUlOX0RVUkFUSU9OO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXZpb3VzU3RhdGUgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wZXR0aW5nVGltZXIgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wZXR0aW5nRHVyYXRpb24gPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oZWFydHMgPSBbXTsgLy8g0J7Rh9C40YnQsNGU0LzQviDRgdC10YDQtNC10YfQutCwXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhlYXJ0U3Bhd25Db3VudGVyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZSA9PT0gREVFUl9TVEFURS5XQUxLSU5HKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vINCe0L3QvtCy0LvRjtGU0LzQviDQv9C+0LfQuNGG0ZbRjiDQvtC70LXQvdGPXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueCArPSB0aGlzLnNwZWVkICogdGhpcy5kaXJlY3Rpb247XG5cbiAgICAgICAgICAgICAgICAgICAgLy8g0J/QtdGA0LXQstGW0YDRj9GU0LzQviDQvNC10LbRliDRgtCwINC/0LXRgNC10YXQvtC00LjQvNC+INC00L4g0LfRg9C/0LjQvdC60LhcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMueCA+PSB0aGlzLm1heFggJiYgdGhpcy5kaXJlY3Rpb24gPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vINCU0L7RgdGP0LPQu9C4INC/0YDQsNCy0L7Qs9C+INC60YDQsNGOIC0g0LfRg9C/0LjQvdGP0ZTQvNC+0YHRj1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy54ID0gdGhpcy5tYXhYO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IERFRVJfU1RBVEUuSURMRTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaWRsZVRpbWVyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vINCT0LXQvdC10YDRg9GU0LzQviDQstC40L/QsNC00LrQvtCy0YMg0YLRgNC40LLQsNC70ZbRgdGC0Ywg0LfRg9C/0LjQvdC60Lgg0LLRltC0IDEg0LTQviAzINGB0LXQutGD0L3QtFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pZGxlRHVyYXRpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoSURMRV9NQVhfRFVSQVRJT04gLSBJRExFX01JTl9EVVJBVElPTiArIDEpKSArIElETEVfTUlOX0RVUkFUSU9OO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMueCA8PSB0aGlzLm1pblggJiYgdGhpcy5kaXJlY3Rpb24gPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDQlNC+0YHRj9Cz0LvQuCDQu9GW0LLQvtCz0L4g0LrRgNCw0Y4gLSDQt9GD0L/QuNC90Y/RlNC80L7RgdGPXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnggPSB0aGlzLm1pblg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0gREVFUl9TVEFURS5JRExFO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pZGxlVGltZXIgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g0JPQtdC90LXRgNGD0ZTQvNC+INCy0LjQv9Cw0LTQutC+0LLRgyDRgtGA0LjQstCw0LvRltGB0YLRjCDQt9GD0L/QuNC90LrQuCDQstGW0LQgMSDQtNC+IDMg0YHQtdC60YPQvdC0XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlkbGVEdXJhdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChJRExFX01BWF9EVVJBVElPTiAtIElETEVfTUlOX0RVUkFUSU9OICsgMSkpICsgSURMRV9NSU5fRFVSQVRJT047XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT09IERFRVJfU1RBVEUuSURMRSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlkbGVUaW1lcisrO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8g0J/RltGB0LvRjyDQt9Cw0LLQtdGA0YjQtdC90L3RjyDQt9GD0L/QuNC90LrQuCDQt9C80ZbQvdGO0ZTQvNC+INC90LDQv9GA0Y/QvNC+0Log0YLQsCDQv9C10YDQtdGF0L7QtNC40LzQviDQtNC+INGF0L7QtNGM0LHQuFxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pZGxlVGltZXIgPj0gdGhpcy5pZGxlRHVyYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uICo9IC0xOyAvLyDQl9C80ZbQvdGO0ZTQvNC+INC90LDQv9GA0Y/QvNC+0LogKNCy0LvRltCy0L4g4oaUINCy0L/RgNCw0LLQvilcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBERUVSX1NUQVRFLldBTEtJTkc7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZyYW1lSW5kZXggPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mcmFtZVJlcGVhdENvdW50ZXIgPSAwOyAvLyDQodC60LjQtNCw0ZTQvNC+INC70ZbRh9C40LvRjNC90LjQuiDQv9C+0LLRgtC+0YDQtdC90YxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZHJhdyhjdHgsIHNwcml0ZUltYWdlLCBmcmFtZVdpZHRoLCBmcmFtZUhlaWdodCwgZGVlcldpZHRoLCBkZWVySGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFzcHJpdGVJbWFnZS5jb21wbGV0ZSB8fCBmcmFtZVdpZHRoIDw9IDAgfHwgZnJhbWVIZWlnaHQgPD0gMCkgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgeyByb3csIGNvbCB9ID0gdGhpcy5nZXRTcHJpdGVGcmFtZUluZGV4KCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8g0JrQvtC+0YDQtNC40L3QsNGC0Lgg0LrQsNC00YDRgyDQsiDRgdC/0YDQsNC50YIt0LvQuNGB0YLRliAo0LLQuNC60L7RgNC40YHRgtC+0LLRg9GU0LzQviBNYXRoLmZsb29yINC00LvRjyDRg9C90LjQutC90LXQvdC90Y8gc3ViLXBpeGVsINGA0LXQvdC00LXRgNC40L3Qs9GDINC90LAgaU9TKVxuICAgICAgICAgICAgICAgIGNvbnN0IHNvdXJjZVggPSBNYXRoLmZsb29yKGNvbCAqIGZyYW1lV2lkdGgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNvdXJjZVkgPSBNYXRoLmZsb29yKHJvdyAqIGZyYW1lSGVpZ2h0KTtcbiAgICAgICAgICAgICAgICBjb25zdCBzb3VyY2VXaWR0aCA9IE1hdGguZmxvb3IoZnJhbWVXaWR0aCk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc291cmNlSGVpZ2h0ID0gTWF0aC5mbG9vcihmcmFtZUhlaWdodCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8g0JrQvtC+0YDQtNC40L3QsNGC0Lgg0L3QsCBjYW52YXMgKNGC0LDQutC+0LYg0LLQuNC60L7RgNC40YHRgtC+0LLRg9GU0LzQviBNYXRoLmZsb29yKVxuICAgICAgICAgICAgICAgIGNvbnN0IGRlc3RYID0gTWF0aC5mbG9vcih0aGlzLngpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlc3RZID0gTWF0aC5mbG9vcih0aGlzLnkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlc3RXaWR0aCA9IE1hdGguZmxvb3IoZGVlcldpZHRoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBkZXN0SGVpZ2h0ID0gTWF0aC5mbG9vcihkZWVySGVpZ2h0KTtcblxuICAgICAgICAgICAgICAgIC8vINCS0LjRgNGW0LfQsNGU0LzQviDQutCw0LTRgCDQt9GWINGB0L/RgNCw0LnRgi3Qu9C40YHRgtCwINGC0LAg0LzQsNC70Y7RlNC80L4g0L3QsCBjYW52YXNcbiAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgICAgICAgICBzcHJpdGVJbWFnZSxcbiAgICAgICAgICAgICAgICAgICAgc291cmNlWCwgc291cmNlWSwgc291cmNlV2lkdGgsIHNvdXJjZUhlaWdodCwgLy8g0JTQttC10YDQtdC70L4gKNGB0L/RgNCw0LnRgi3Qu9C40YHRgilcbiAgICAgICAgICAgICAgICAgICAgZGVzdFgsIGRlc3RZLCBkZXN0V2lkdGgsIGRlc3RIZWlnaHQgLy8g0J/RgNC40LfQvdCw0YfQtdC90L3RjyAoY2FudmFzKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8g0JzQsNC70Y7RlNC80L4g0YHQtdGA0LTQtdGH0LrQsCDQvdCw0LQg0L7Qu9C10L3QtdC8XG4gICAgICAgICAgICAgICAgdGhpcy5oZWFydHMuZm9yRWFjaChoZWFydCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGhlYXJ0LmRyYXcoY3R4KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8g0JfQsNCy0LDQvdGC0LDQttC10L3QvdGPINC30L7QsdGA0LDQttC10L3RjCAo0YHRgtCy0L7RgNGO0ZTQvNC+INC/0LXRgNC10LQg0YHRgtCy0L7RgNC10L3QvdGP0Lwg0L7Qu9C10L3RltCyKVxuICAgICAgICBjb25zdCBpbWFnZXMgPSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBuZXcgSW1hZ2UoKSxcbiAgICAgICAgICAgIHRyZWU6IG5ldyBJbWFnZSgpLFxuICAgICAgICAgICAgZGVlclNwcml0ZTogbmV3IEltYWdlKCksIC8vINCh0L/RgNCw0LnRgi3Qu9C40YHRgiDQt9Cw0LzRltGB0YLRjCDQvtC00L3QvtCz0L4g0LfQvtCx0YDQsNC20LXQvdC90Y9cbiAgICAgICAgICAgIGhlYXJ0OiBuZXcgSW1hZ2UoKSAvLyDQl9C+0LHRgNCw0LbQtdC90L3RjyDRgdC10YDQtNC10YfQutCwXG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICAvLyDQnNCw0YHQuNCyINC+0LvQtdC90ZbQsiBcbiAgICAgICAgY29uc3QgZGVlcnMgPSBbXTtcbiAgICAgICAgXG4gICAgICAgIC8vINCa0L7QvdGE0ZbQs9GD0YDQsNGG0ZbRjyDQtNC70Y8g0YHRgtCy0L7RgNC10L3QvdGPINC+0LvQtdC90ZbQslxuICAgICAgICBjb25zdCBERUVSX0NPVU5UID0gMzsgLy8g0JrRltC70YzQutGW0YHRgtGMINC+0LvQtdC90ZbQslxuICAgICAgICBcbiAgICAgICAgLy8g0KDQvtC30YDQsNGF0L7QstGD0ZTQvNC+INC60L7QtdGE0ZbRhtGW0ZTQvdGCINC80LDRgdGI0YLQsNCx0YPQstCw0L3QvdGPINC00LvRjyDQv9C+0LfQuNGG0ZbQuSDQvtC70LXQvdGW0LJcbiAgICAgICAgY29uc3Qgc2NhbGVYID0gQ0FOVkFTX1dJRFRIIC8gMTM2NjtcbiAgICAgICAgY29uc3Qgc2NhbGVZID0gQ0FOVkFTX0hFSUdIVCAvIDUwMDtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGRlZXJDb25maWdzID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXJ0WDogQ0FOVkFTX1dJRFRIIC8gMiArIDUwICogc2NhbGVYLFxuICAgICAgICAgICAgICAgIHN0YXJ0WTogdHJlZVkgKyBUUkVFX0hFSUdIVCAtIDIwICsgZGVlckhlaWdodE9mZnNldCwgLy8g0J/RltC0INGP0LvQuNC90LrQvtGOICh0cmVlWSArINCy0LjRgdC+0YLQsCDRj9C70LjQvdC60LggLSDQstGW0LTRgdGC0YPQvylcbiAgICAgICAgICAgICAgICBtaW5YOiBDQU5WQVNfV0lEVEggLyAyIC0gMjAwICogc2NhbGVYLFxuICAgICAgICAgICAgICAgIG1heFg6IENBTlZBU19XSURUSCAvIDIgKyAzMDAgKiBzY2FsZVgsXG4gICAgICAgICAgICAgICAgc3BlZWQ6IDAuNSxcbiAgICAgICAgICAgICAgICB6SW5kZXg6IDRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhcnRYOiBDQU5WQVNfV0lEVEggLyAyIC0gMTAwICogc2NhbGVYLFxuICAgICAgICAgICAgICAgIHN0YXJ0WTogQ0FOVkFTX0hFSUdIVCAvIDIgLSBCQVNFX0RFRVJfSEVJR0hUIC8gMiArIDUwICogc2NhbGVZICsgZGVlckhlaWdodE9mZnNldCxcbiAgICAgICAgICAgICAgICBtaW5YOiBDQU5WQVNfV0lEVEggLyAyIC0gMTUwICogc2NhbGVYLFxuICAgICAgICAgICAgICAgIG1heFg6IENBTlZBU19XSURUSCAvIDIgKyAxNTAgKiBzY2FsZVgsXG4gICAgICAgICAgICAgICAgc3BlZWQ6IDAuMyxcbiAgICAgICAgICAgICAgICB6SW5kZXg6IDNcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhcnRYOiBDQU5WQVNfV0lEVEggLyAyIC0gMTAwICogc2NhbGVYLFxuICAgICAgICAgICAgICAgIHN0YXJ0WTogQ0FOVkFTX0hFSUdIVCAvIDIgLSBCQVNFX0RFRVJfSEVJR0hUIC8gMiAtIDUwICogc2NhbGVZICsgZGVlckhlaWdodE9mZnNldCxcbiAgICAgICAgICAgICAgICBtaW5YOiBDQU5WQVNfV0lEVEggLyAyIC0gMjUwICogc2NhbGVYLFxuICAgICAgICAgICAgICAgIG1heFg6IENBTlZBU19XSURUSCAvIDIgKyAyNTAgKiBzY2FsZVgsXG4gICAgICAgICAgICAgICAgc3BlZWQ6IDAuNCxcbiAgICAgICAgICAgICAgICB6SW5kZXg6IDEgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgIFxuICAgICAgICBdO1xuXG4gICAgICAgIC8vINCh0YLQstC+0YDRjtGU0LzQviDQvtC70LXQvdGW0LJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBERUVSX0NPVU5UICYmIGkgPCBkZWVyQ29uZmlncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY29uZmlnID0gZGVlckNvbmZpZ3NbaV07XG4gICAgICAgICAgICBkZWVycy5wdXNoKG5ldyBEZWVyKFxuICAgICAgICAgICAgICAgIGNvbmZpZy5zdGFydFgsXG4gICAgICAgICAgICAgICAgY29uZmlnLnN0YXJ0WSxcbiAgICAgICAgICAgICAgICBjb25maWcubWluWCxcbiAgICAgICAgICAgICAgICBjb25maWcubWF4WCxcbiAgICAgICAgICAgICAgICBjb25maWcuc3BlZWQsXG4gICAgICAgICAgICAgICAgY29uZmlnLnpJbmRleCB8fCAwLCAvLyDQktC40LrQvtGA0LjRgdGC0L7QstGD0ZTQvNC+IHpJbmRleCDQtyDQutC+0L3RhNGW0LPRgyDQsNCx0L4gMCDQt9CwINC30LDQvNC+0LLRh9GD0LLQsNC90L3Rj9C8XG4gICAgICAgICAgICAgICAgaW1hZ2VzLmhlYXJ0IC8vINCf0LXRgNC10LTQsNGU0LzQviDQt9C+0LHRgNCw0LbQtdC90L3RjyDRgdC10YDQtNC10YfQutCwXG4gICAgICAgICAgICApKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpbWFnZXNMb2FkZWQgPSAwO1xuICAgICAgICBjb25zdCB0b3RhbEltYWdlcyA9IDQ7XG5cbiAgICAgICAgZnVuY3Rpb24gb25JbWFnZUxvYWQoKSB7XG4gICAgICAgICAgICBpbWFnZXNMb2FkZWQrKztcbiAgICAgICAgICAgIGlmIChpbWFnZXNMb2FkZWQgPT09IHRvdGFsSW1hZ2VzKSB7XG4gICAgICAgICAgICAgICAgLy8g0J7QvdC+0LLQu9GO0ZTQvNC+INCz0LvQvtCx0LDQu9GM0L3RliDQv9C+0YHQuNC70LDQvdC90Y8g0L3QsCDQvtC70LXQvdGW0LIg0L/RltGB0LvRjyDRl9GFINGB0YLQstC+0YDQtdC90L3RjyDRgtCwINC30LDQstCw0L3RgtCw0LbQtdC90L3RjyDQt9C+0LHRgNCw0LbQtdC90YxcbiAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0ZURlZXJzID0gZGVlcnM7XG4gICAgICAgICAgICAgICAgcGFydGljaXBhdGVEZWVyV2lkdGggPSBERUVSX1dJRFRIO1xuICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlRGVlckhlaWdodCA9IERFRVJfSEVJR0hUO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vINCf0LXRgNC10LLRltGA0Y/RlNC80L4sINGH0Lgg0YHQv9GA0LDQudGCLdC70LjRgdGCINC30LDQstCw0L3RgtCw0LbQuNCy0YHRjyDQutC+0YDQtdC60YLQvdC+XG4gICAgICAgICAgICAgICAgaWYgKGltYWdlcy5kZWVyU3ByaXRlLmNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEZWVyIHNwcml0ZSBsb2FkZWQ6Jywge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGltYWdlcy5kZWVyU3ByaXRlLndpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBpbWFnZXMuZGVlclNwcml0ZS5oZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgICAgICBmcmFtZVdpZHRoOiBGUkFNRV9XSURUSCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lSGVpZ2h0OiBGUkFNRV9IRUlHSFQsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWVyV2lkdGg6IERFRVJfV0lEVEgsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWVySGVpZ2h0OiBERUVSX0hFSUdIVFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZHJhd0NhbnZhcygpO1xuICAgICAgICAgICAgICAgIHN0YXJ0QW5pbWF0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpbWFnZXMuYmFja2dyb3VuZC5vbmxvYWQgPSBvbkltYWdlTG9hZDtcbiAgICAgICAgaW1hZ2VzLnRyZWUub25sb2FkID0gb25JbWFnZUxvYWQ7XG4gICAgICAgIGltYWdlcy5kZWVyU3ByaXRlLm9ubG9hZCA9IG9uSW1hZ2VMb2FkO1xuICAgICAgICBpbWFnZXMuaGVhcnQub25sb2FkID0gb25JbWFnZUxvYWQ7XG5cbiAgICAgICAgaW1hZ2VzLmJhY2tncm91bmQuc3JjID0gaXNNb2JpbGUgPyAnaHR0cHM6Ly9mYXYtcHJvbS5jb20vaHRtbC9nbG9iYWwtbnktMjAyNi1oci9pbWcvcGFydGljaXBhdGUvY2FudmFzLWJnLXRhYi5wbmcnIDogJ2h0dHBzOi8vZmF2LXByb20uY29tL2h0bWwvZ2xvYmFsLW55LTIwMjYtaHIvaW1nL3BhcnRpY2lwYXRlL2NhbnZhcy1iZy5wbmcnO1xuICAgICAgICBpbWFnZXMudHJlZS5zcmMgPSAnaHR0cHM6Ly9mYXYtcHJvbS5jb20vaHRtbC9nbG9iYWwtbnktMjAyNi1oci9pbWcvcGFydGljaXBhdGUvdHJlZS5wbmcnO1xuICAgICAgICBpbWFnZXMuZGVlclNwcml0ZS5zcmMgPSAnaHR0cHM6Ly9mYXYtcHJvbS5jb20vaHRtbC9nbG9iYWwtbnktMjAyNi1oci9pbWcvcGFydGljaXBhdGUvZGVlci1zcHJpdGUucG5nJztcbiAgICAgICAgaW1hZ2VzLmhlYXJ0LnNyYyA9ICdodHRwczovL2Zhdi1wcm9tLmNvbS9odG1sL2dsb2JhbC1ueS0yMDI2LWhyL2ltZy9wYXJ0aWNpcGF0ZS9kZWVyLWhlYXJ0LnBuZyc7XG4gICAgICAgIFxuICAgICAgICAvLyDQlNC+0LTQsNGU0LzQviDQvtCx0YDQvtCx0L3QuNC60Lgg0L/QvtC00ZbQuSDRgtGW0LvRjNC60Lgg0L7QtNC40L0g0YDQsNC3XG4gICAgICAgIGlmICghY2FudmFzQ2xpY2tIYW5kbGVyc0F0dGFjaGVkKSB7XG4gICAgICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVQYXJ0aWNpcGF0ZUNhbnZhc0NsaWNrKTtcbiAgICAgICAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgaGFuZGxlUGFydGljaXBhdGVDYW52YXNUb3VjaFN0YXJ0LCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gICAgICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBoYW5kbGVQYXJ0aWNpcGF0ZUNhbnZhc1RvdWNoRW5kLCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gICAgICAgICAgICBjYW52YXNDbGlja0hhbmRsZXJzQXR0YWNoZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZHJhd0NhbnZhcygpIHtcbiAgICAgICAgICAgIC8vINCe0YfQuNGJ0LXQvdC90Y8gY2FudmFzXG4gICAgICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIENBTlZBU19XSURUSCwgQ0FOVkFTX0hFSUdIVCk7XG5cbiAgICAgICAgICAgIC8vINCc0LDQu9GO0ZTQvNC+INGE0L7QvVxuICAgICAgICAgICAgaWYgKGltYWdlcy5iYWNrZ3JvdW5kLmNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShpbWFnZXMuYmFja2dyb3VuZCwgMCwgMCwgQ0FOVkFTX1dJRFRILCBDQU5WQVNfSEVJR0hUKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gekluZGV4INC00LvRjyDRj9C70LjQvdC60LggKNC80ZbQtiDQvtC70LXQvdGP0LzQuClcbiAgICAgICAgICAgIGNvbnN0IFRSRUVfWl9JTkRFWCA9IDI7IC8vINCv0LvQuNC90LrQsCDQvNCw0LvRjtGU0YLRjNGB0Y8g0LzRltC2INC+0LvQtdC90Y/QvNC4INC3IHpJbmRleCAxINGC0LAgMlxuXG4gICAgICAgICAgICAvLyDQodGC0LLQvtGA0Y7RlNC80L4g0LzQsNGB0LjQsiDQstGB0ZbRhSDQtdC70LXQvNC10L3RgtGW0LIg0LTQu9GPINC80LDQu9GO0LLQsNC90L3RjyAo0L7Qu9C10L3RliArINGP0LvQuNC90LrQsClcbiAgICAgICAgICAgIGNvbnN0IGRyYXdhYmxlRWxlbWVudHMgPSBbXTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0JTQvtC00LDRlNC80L4g0L7Qu9C10L3RltCyXG4gICAgICAgICAgICBkZWVycy5mb3JFYWNoKGRlZXIgPT4ge1xuICAgICAgICAgICAgICAgIGRyYXdhYmxlRWxlbWVudHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdkZWVyJyxcbiAgICAgICAgICAgICAgICAgICAgekluZGV4OiBkZWVyLnpJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgZHJhdzogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGltYWdlcy5kZWVyU3ByaXRlLmNvbXBsZXRlICYmIEZSQU1FX1dJRFRIID4gMCAmJiBGUkFNRV9IRUlHSFQgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVlci5kcmF3KGN0eCwgaW1hZ2VzLmRlZXJTcHJpdGUsIEZSQU1FX1dJRFRILCBGUkFNRV9IRUlHSFQsIERFRVJfV0lEVEgsIERFRVJfSEVJR0hUKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCU0L7QtNCw0ZTQvNC+INGP0LvQuNC90LrRg1xuICAgICAgICAgICAgZHJhd2FibGVFbGVtZW50cy5wdXNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiAndHJlZScsXG4gICAgICAgICAgICAgICAgekluZGV4OiBUUkVFX1pfSU5ERVgsXG4gICAgICAgICAgICAgICAgZHJhdzogKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGltYWdlcy50cmVlLmNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShpbWFnZXMudHJlZSwgdHJlZVgsIHRyZWVZLCBUUkVFX1dJRFRILCBUUkVFX0hFSUdIVCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vINCh0L7RgNGC0YPRlNC80L4g0LLRgdGWINC10LvQtdC80LXQvdGC0Lgg0LfQsCB6SW5kZXggKNC80LXQvdGI0LUgPSDQvNCw0LvRjtGU0YLRjNGB0Y8g0YDQsNC90ZbRiNC1LCDQsdGW0LvRjNGI0LUgPSDQvNCw0LvRjtGU0YLRjNGB0Y8g0L/RltC30L3RltGI0LUpXG4gICAgICAgICAgICBkcmF3YWJsZUVsZW1lbnRzLnNvcnQoKGEsIGIpID0+IGEuekluZGV4IC0gYi56SW5kZXgpO1xuXG4gICAgICAgICAgICAvLyDQnNCw0LvRjtGU0LzQviDQstGB0ZYg0LXQu9C10LzQtdC90YLQuCDQsiDQv9GA0LDQstC40LvRjNC90L7QvNGDINC/0L7RgNGP0LTQutGDXG4gICAgICAgICAgICBkcmF3YWJsZUVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5kcmF3KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGFuaW1hdGUoKSB7XG4gICAgICAgICAgICBmcmFtZUNvdW50ZXIrKztcblxuICAgICAgICAgICAgLy8g0J/QtdGA0LXQstGW0YDRj9GU0LzQviwg0YfQuCDQv9C+0YLRgNGW0LHQvdC+INC+0L3QvtCy0LvRjtCy0LDRgtC4INC60LDQtNGA0Lgg0LDQvdGW0LzQsNGG0ZbRl1xuICAgICAgICAgICAgY29uc3Qgc2hvdWxkVXBkYXRlRnJhbWUgPSBmcmFtZUNvdW50ZXIgPj0gRlJBTUVfREVMQVk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCe0L3QvtCy0LvRjtGU0LzQviDQs9C70L7QsdCw0LvRjNC90LjQuSDQu9GW0YfQuNC70YzQvdC40Log0LrQsNC00YDRltCyXG4gICAgICAgICAgICBpZiAoc2hvdWxkVXBkYXRlRnJhbWUpIHtcbiAgICAgICAgICAgICAgICBmcmFtZUNvdW50ZXIgPSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDQntC90L7QstC70Y7RlNC80L4g0LLRgdGW0YUg0L7Qu9C10L3RltCyXG4gICAgICAgICAgICBkZWVycy5mb3JFYWNoKGRlZXIgPT4ge1xuICAgICAgICAgICAgICAgIGRlZXIudXBkYXRlKHNob3VsZFVwZGF0ZUZyYW1lKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyDQn9C10YDQtdC80LDQu9GM0L7QstGD0ZTQvNC+IGNhbnZhc1xuICAgICAgICAgICAgZHJhd0NhbnZhcygpO1xuXG4gICAgICAgICAgICBwYXJ0aWNpcGF0ZUFuaW1hdGlvbklkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gc3RhcnRBbmltYXRpb24oKSB7XG4gICAgICAgICAgICBpZiAocGFydGljaXBhdGVBbmltYXRpb25JZCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHBhcnRpY2lwYXRlQW5pbWF0aW9uSWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYW5pbWF0ZSgpO1xuICAgICAgICB9XG5cblxuICAgICAgICAvLyDQntCx0YDQvtCx0LrQsCDQt9C80ZbQvdC4INGA0L7Qt9C80ZbRgNGDINCy0ZbQutC90LAg0LTQu9GPINCw0LTQsNC/0YLQuNCy0L3QvtGB0YLRllxuICAgICAgICBsZXQgcmVzaXplVGltZW91dDtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChyZXNpemVUaW1lb3V0KTtcbiAgICAgICAgICAgIHJlc2l6ZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdJc01vYmlsZSA9IHdpbmRvdy5pbm5lcldpZHRoIDw9IDEwNTA7XG4gICAgICAgICAgICAgICAgLy8g0J/QtdGA0LXQt9Cw0L/Rg9GB0LrQsNGU0LzQviDRltC90ZbRhtGW0LDQu9GW0LfQsNGG0ZbRjiDRgtGW0LvRjNC60Lgg0Y/QutGJ0L4g0LfQvNGW0L3QuNCy0YHRjyDRgNC10LbQuNC8IChtb2JpbGUvZGVza3RvcClcbiAgICAgICAgICAgICAgICBpZiAobmV3SXNNb2JpbGUgIT09IGlzTW9iaWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vINCf0LXRgNC10LfQsNC/0YPRgdC60LDRlNC80L4g0ZbQvdGW0YbRltCw0LvRltC30LDRhtGW0Y4gKNCw0L3RltC80LDRhtGW0Y8g0LHRg9C00LUg0LfRg9C/0LjQvdC10L3QsCDQstGB0LXRgNC10LTQuNC90ZYgaW5pdFBhcnRpY2lwYXRlQ2FudmFzKVxuICAgICAgICAgICAgICAgICAgICBpbml0UGFydGljaXBhdGVDYW52YXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAyNTApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0U25vd2ZsYWtlc0NhbnZhcygpIHtcbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Nub3dmbGFrZXNDYW52YXMnKTtcbiAgICAgICAgaWYgKCFjYW52YXMpIHJldHVybjtcblxuICAgICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgY29uc3QgZmF2UGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXYtcGFnZScpO1xuICAgICAgICBcbiAgICAgICAgLy8g0JrQvtC90YHRgtCw0L3RgtC4XG4gICAgICAgIGNvbnN0IFNOT1dGTEFLRV9DT1VOVCA9IDQwMDsgXG4gICAgICAgIGNvbnN0IFNOT1dGTEFLRV9NSU5fU0laRSA9IDQ7XG4gICAgICAgIGNvbnN0IFNOT1dGTEFLRV9NQVhfU0laRSA9IDEwO1xuICAgICAgICBjb25zdCBTTk9XRkxBS0VfTUlOX1NQRUVEID0gMC4xO1xuICAgICAgICBjb25zdCBTTk9XRkxBS0VfTUFYX1NQRUVEID0gMC4zO1xuICAgICAgICBjb25zdCBTTk9XRkxBS0VfV0lORF9SQU5HRSA9IDAuNDtcbiAgICAgICAgY29uc3QgU05PV0ZMQUtFX1NQQVdOX0lOVEVSVkFMID0gMjAwO1xuXG4gICAgICAgIGNvbnN0IHNub3dmbGFrZXMgPSBbXTtcbiAgICAgICAgbGV0IGxhc3RTbm93Zmxha2VUaW1lID0gMDtcbiAgICAgICAgbGV0IGFuaW1hdGlvbklkID0gbnVsbDtcbiAgICAgICAgXG4gICAgICAgIC8vINCS0YHRgtCw0L3QvtCy0LvRjtGU0LzQviDRgNC+0LfQvNGW0YAgY2FudmFzINC90LAg0LLQtdGB0YwgLmZhdi1wYWdlXG4gICAgICAgIGZ1bmN0aW9uIHJlc2l6ZUNhbnZhcygpIHtcbiAgICAgICAgICAgIGxldCBuZXdXaWR0aCwgbmV3SGVpZ2h0O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoZmF2UGFnZSkge1xuICAgICAgICAgICAgICAgIC8vINCS0LjQutC+0YDQuNGB0YLQvtCy0YPRlNC80L4gc2Nyb2xsSGVpZ2h0INC00LvRjyDQvtGC0YDQuNC80LDQvdC90Y8g0YDQtdCw0LvRjNC90L7RlyDQstC40YHQvtGC0Lgg0LrQvtC90YLQtdC90YLRg1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlY3QgPSBmYXZQYWdlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgICAgIG5ld1dpZHRoID0gcmVjdC53aWR0aCB8fCBmYXZQYWdlLm9mZnNldFdpZHRoIHx8IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICAgICAgICAgIC8vINCU0LvRjyDQstC40YHQvtGC0Lgg0LLQuNC60L7RgNC40YHRgtC+0LLRg9GU0LzQviBzY3JvbGxIZWlnaHQg0Y/QutGJ0L4g0LLRltC9INCx0ZbQu9GM0YjQuNC5INC30LAgb2Zmc2V0SGVpZ2h0XG4gICAgICAgICAgICAgICAgY29uc3Qgb2Zmc2V0SGVpZ2h0ID0gZmF2UGFnZS5vZmZzZXRIZWlnaHQgfHwgZmF2UGFnZS5jbGllbnRIZWlnaHQ7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2Nyb2xsSGVpZ2h0ID0gZmF2UGFnZS5zY3JvbGxIZWlnaHQ7XG4gICAgICAgICAgICAgICAgbmV3SGVpZ2h0ID0gTWF0aC5tYXgoc2Nyb2xsSGVpZ2h0LCBvZmZzZXRIZWlnaHQsIHJlY3QuaGVpZ2h0KSB8fCB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIEZhbGxiYWNrINC90LAgdmlld3BvcnRcbiAgICAgICAgICAgICAgICBuZXdXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICAgICAgICAgIG5ld0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0J/QtdGA0LXQstGW0YDRj9GU0LzQviDRh9C4INGA0L7Qt9C80ZbRgNC4INC30LzRltC90LjQu9C40YHRjyDQv9C10YDQtdC0INC+0L3QvtCy0LvQtdC90L3Rj9C8XG4gICAgICAgICAgICBpZiAoY2FudmFzLndpZHRoICE9PSBuZXdXaWR0aCB8fCBjYW52YXMuaGVpZ2h0ICE9PSBuZXdIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICBjYW52YXMud2lkdGggPSBuZXdXaWR0aDtcbiAgICAgICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gbmV3SGVpZ2h0O1xuICAgICAgICAgICAgICAgIC8vINCe0YfQuNGJ0LDRlNC80L4g0YHQvdGW0LbQuNC90LrQuCDQv9GA0Lgg0LfQvNGW0L3RliDRgNC+0LfQvNGW0YDRg1xuICAgICAgICAgICAgICAgIHNub3dmbGFrZXMubGVuZ3RoID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vINCS0YHRgtCw0L3QvtCy0LvRjtGU0LzQviDRgNC+0LfQvNGW0YAgY2FudmFzINC3INC90LXQstC10LvQuNC60L7RjiDQt9Cw0YLRgNC40LzQutC+0Y4g0LTQu9GPINC60L7RgNC10LrRgtC90L7Qs9C+INGA0L7Qt9GA0LDRhdGD0L3QutGDINGA0L7Qt9C80ZbRgNGW0LJcbiAgICAgICAgLy8g0JLQuNC60L7RgNC40YHRgtC+0LLRg9GU0LzQviDQutGW0LvRjNC60LAg0LrQsNC00YDRltCyINC00LvRjyDQs9Cw0YDQsNC90YLRltGXINC/0YDQsNCy0LjQu9GM0L3QvtCz0L4g0YDQvtC30LzRltGA0YNcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgIHJlc2l6ZUNhbnZhcygpO1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICByZXNpemVDYW52YXMoKTtcbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXNpemVDYW52YXMoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemVDYW52YXMpO1xuXG4gICAgICAgIC8vINCX0LDQstCw0L3RgtCw0LbQtdC90L3RjyDQt9C+0LHRgNCw0LbQtdC90L3RjyDRgdC90ZbQttC40L3QutC4XG4gICAgICAgIGNvbnN0IHNub3dmbGFrZUltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGxldCBpbWFnZUxvYWRlZCA9IGZhbHNlO1xuXG4gICAgICAgIHNub3dmbGFrZUltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaW1hZ2VMb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgLy8g0KfQtdC60LDRlNC80L4g0L/QvtC60Lgg0YHRgtC+0YDRltC90LrQsCDQstC40LnQtNC1INC30ZYg0YHRgtCw0L3RgyBsb2FkaW5nINC/0LXRgNC10LQg0YHRgtCw0YDRgtC+0Lwg0LDQvdGW0LzQsNGG0ZbRl1xuICAgICAgICAgICAgZnVuY3Rpb24gd2FpdEZvclBhZ2VSZWFkeSgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpc1BhZ2VMb2FkaW5nID0gbWFpblBhZ2UgJiYgbWFpblBhZ2UuY2xhc3NMaXN0LmNvbnRhaW5zKCdsb2FkaW5nJyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKGlzUGFnZUxvYWRpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc2l6ZUNhbnZhcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc2l6ZUNhbnZhcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDQlNC+0LTQsNGC0LrQvtCy0LAg0L/QtdGA0LXQstGW0YDQutCwINC/0ZbRgdC70Y8g0YnQtSDQvtC00L3QvtCz0L4g0LrQsNC00YDRg1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzaXplQ2FudmFzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2FudmFzLndpZHRoID4gMCAmJiBjYW52YXMuaGVpZ2h0ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGxDYW52YXNXaXRoU25vd2ZsYWtlcygpOyAvLyDQl9Cw0L/QvtCy0L3RjtGU0LzQviDQutCw0L3QstCw0YEg0YHQvdGW0LbQuNC90LrQsNC80Lgg0L/RgNC4INC/0LXRgNGI0L7QvNGDINGA0LXQvdC00LXRgNGWXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRBbmltYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g0K/QutGJ0L4g0LLRgdC1INGJ0LUg0L3QtdC/0YDQsNCy0LjQu9GM0L3QuNC5INGA0L7Qt9C80ZbRgCwg0L/QvtCy0YLQvtGA0Y7RlNC80L5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KHdhaXRGb3JQYWdlUmVhZHksIDUwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSwgNDAwKTsgLy8g0KfQtdC60LDRlNC80L4g0YLRgNC+0YXQuCDQsdGW0LvRjNGI0LUg0L3RltC2IGhpZGVMb2FkZXIgKDMwMG1zKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vINCh0YLQvtGA0ZbQvdC60LAg0LPQvtGC0L7QstCwLCDQstGB0YLQsNC90L7QstC70Y7RlNC80L4g0YDQvtC30LzRltGAINGC0LAg0LfQsNC/0YPRgdC60LDRlNC80L5cbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc2l6ZUNhbnZhcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNpemVDYW52YXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNpemVDYW52YXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhbnZhcy53aWR0aCA+IDAgJiYgY2FudmFzLmhlaWdodCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsQ2FudmFzV2l0aFNub3dmbGFrZXMoKTsgLy8g0JfQsNC/0L7QstC90Y7RlNC80L4g0LrQsNC90LLQsNGBINGB0L3RltC20LjQvdC60LDQvNC4INC/0YDQuCDQv9C10YDRiNC+0LzRgyDRgNC10L3QtNC10YDRllxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRBbmltYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgd2FpdEZvclBhZ2VSZWFkeSgpO1xuICAgICAgICB9O1xuICAgICAgICBzbm93Zmxha2VJbWFnZS5zcmMgPSAnaHR0cHM6Ly9mYXYtcHJvbS5jb20vaHRtbC9nbG9iYWwtbnktMjAyNi1oci9pbWcvc25vd2ZsYWtlLnBuZyc7XG4gICAgICAgXG5cbiAgICAgICAgLy8g0JrQu9Cw0YEg0LTQu9GPINGB0L3RltC20LjQvdC60LhcbiAgICAgICAgY2xhc3MgU25vd2ZsYWtlIHtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yKGluaXRpYWxZID0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMueCA9IE1hdGgucmFuZG9tKCkgKiAoY2FudmFzLndpZHRoIHx8IHdpbmRvdy5pbm5lcldpZHRoKTtcbiAgICAgICAgICAgICAgICAvLyDQr9C60YnQviDQv9C10YDQtdC00LDQvdC+IGluaXRpYWxZLCDQstC40LrQvtGA0LjRgdGC0L7QstGD0ZTQvNC+INGX0ZcgKNC00LvRjyDQv9C+0YfQsNGC0LrQvtCy0L7Qs9C+INC30LDQv9C+0LLQvdC10L3QvdGPINC60LDQvdCy0LDRgdGDKVxuICAgICAgICAgICAgICAgIC8vINCG0L3QsNC60YjQtSDRgdC/0LDQstC90LjQvNC+INC30LLQtdGA0YXRg1xuICAgICAgICAgICAgICAgIHRoaXMueSA9IGluaXRpYWxZICE9PSBudWxsID8gaW5pdGlhbFkgOiAtMjA7XG4gICAgICAgICAgICAgICAgdGhpcy5zaXplID0gTWF0aC5yYW5kb20oKSAqIChTTk9XRkxBS0VfTUFYX1NJWkUgLSBTTk9XRkxBS0VfTUlOX1NJWkUpICsgU05PV0ZMQUtFX01JTl9TSVpFO1xuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWQgPSBNYXRoLnJhbmRvbSgpICogKFNOT1dGTEFLRV9NQVhfU1BFRUQgLSBTTk9XRkxBS0VfTUlOX1NQRUVEKSArIFNOT1dGTEFLRV9NSU5fU1BFRUQ7XG4gICAgICAgICAgICAgICAgdGhpcy53aW5kID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogU05PV0ZMQUtFX1dJTkRfUkFOR0U7XG4gICAgICAgICAgICAgICAgdGhpcy5vcGFjaXR5ID0gTWF0aC5yYW5kb20oKSAqIDAuNSArIDAuNTtcbiAgICAgICAgICAgICAgICB0aGlzLnJvdGF0aW9uID0gTWF0aC5yYW5kb20oKSAqIE1hdGguUEkgKiAyO1xuICAgICAgICAgICAgICAgIHRoaXMucm90YXRpb25TcGVlZCA9IChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDAuMDI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnkgKz0gdGhpcy5zcGVlZDtcbiAgICAgICAgICAgICAgICB0aGlzLnggKz0gdGhpcy53aW5kICsgKE1hdGguc2luKHRoaXMueSAqIDAuMDEpICogMC4yKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJvdGF0aW9uICs9IHRoaXMucm90YXRpb25TcGVlZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZHJhdygpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWltYWdlTG9hZGVkKSByZXR1cm47XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8g0J/QtdGA0LXQstGW0YDQutCwINGH0LggY2FudmFzINC80LDRlCDQv9GA0LDQstC40LvRjNC90LjQuSDRgNC+0LfQvNGW0YBcbiAgICAgICAgICAgICAgICBpZiAoY2FudmFzLndpZHRoID09PSAwIHx8IGNhbnZhcy5oZWlnaHQgPT09IDApIHJldHVybjtcblxuICAgICAgICAgICAgICAgIGN0eC5zYXZlKCk7XG4gICAgICAgICAgICAgICAgY3R4Lmdsb2JhbEFscGhhID0gdGhpcy5vcGFjaXR5O1xuICAgICAgICAgICAgICAgIGN0eC50cmFuc2xhdGUodGhpcy54LCB0aGlzLnkpO1xuICAgICAgICAgICAgICAgIGN0eC5yb3RhdGUodGhpcy5yb3RhdGlvbik7XG4gICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShcbiAgICAgICAgICAgICAgICAgICAgc25vd2ZsYWtlSW1hZ2UsXG4gICAgICAgICAgICAgICAgICAgIC10aGlzLnNpemUgLyAyLFxuICAgICAgICAgICAgICAgICAgICAtdGhpcy5zaXplIC8gMixcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaXplLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNpemVcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGN0eC5yZXN0b3JlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlzT2ZmU2NyZWVuKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnkgPiBjYW52YXMuaGVpZ2h0ICsgMjAgfHwgXG4gICAgICAgICAgICAgICAgICAgICAgIHRoaXMueCA8IC0yMCB8fCBcbiAgICAgICAgICAgICAgICAgICAgICAgdGhpcy54ID4gY2FudmFzLndpZHRoICsgMjA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBjcmVhdGVTbm93Zmxha2UoaW5pdGlhbFkgPSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoc25vd2ZsYWtlcy5sZW5ndGggPCBTTk9XRkxBS0VfQ09VTlQpIHtcbiAgICAgICAgICAgICAgICBzbm93Zmxha2VzLnB1c2gobmV3IFNub3dmbGFrZShpbml0aWFsWSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyDQpNGD0L3QutGG0ZbRjyDQtNC70Y8g0L/QvtGH0LDRgtC60L7QstC+0LPQviDQt9Cw0L/QvtCy0L3QtdC90L3RjyDQutCw0L3QstCw0YHRgyDRgdC90ZbQttC40L3QutCw0LzQuFxuICAgICAgICBmdW5jdGlvbiBmaWxsQ2FudmFzV2l0aFNub3dmbGFrZXMoKSB7XG4gICAgICAgICAgICBpZiAoY2FudmFzLndpZHRoID09PSAwIHx8IGNhbnZhcy5oZWlnaHQgPT09IDApIHJldHVybjtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0KHRgtCy0L7RgNGO0ZTQvNC+INGB0L3RltC20LjQvdC60Lgg0L/QviDQstGB0YzQvtC80YMg0LrQsNC90LLQsNGB0YMgKNCy0YHRliAyMDAg0YHQvdGW0LbQuNC90L7QuilcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgU05PV0ZMQUtFX0NPVU5UOyBpKyspIHtcbiAgICAgICAgICAgICAgICAvLyDQoNC+0LfQv9C+0LTRltC70Y/RlNC80L4g0YHQvdGW0LbQuNC90LrQuCDQv9C+INCy0YHRltC5INCy0LjRgdC+0YLRliDQutCw0L3QstCw0YHRg1xuICAgICAgICAgICAgICAgIGNvbnN0IGluaXRpYWxZID0gTWF0aC5yYW5kb20oKSAqIGNhbnZhcy5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgY3JlYXRlU25vd2ZsYWtlKGluaXRpYWxZKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZVNub3dmbGFrZXMoKSB7XG4gICAgICAgICAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgaWYgKG5vdyAtIGxhc3RTbm93Zmxha2VUaW1lID4gU05PV0ZMQUtFX1NQQVdOX0lOVEVSVkFMKSB7XG4gICAgICAgICAgICAgICAgY3JlYXRlU25vd2ZsYWtlKCk7XG4gICAgICAgICAgICAgICAgbGFzdFNub3dmbGFrZVRpbWUgPSBub3c7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBzbm93Zmxha2VzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgc25vd2ZsYWtlc1tpXS51cGRhdGUoKTtcbiAgICAgICAgICAgICAgICBpZiAoc25vd2ZsYWtlc1tpXS5pc09mZlNjcmVlbigpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNub3dmbGFrZXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGRyYXdTbm93Zmxha2VzKCkge1xuICAgICAgICAgICAgLy8g0J/QtdGA0LXQstGW0YDQutCwINGH0LggY2FudmFzINC80LDRlCDQv9GA0LDQstC40LvRjNC90LjQuSDRgNC+0LfQvNGW0YAg0L/QtdGA0LXQtCDQvNCw0LvRjtCy0LDQvdC90Y/QvFxuICAgICAgICAgICAgaWYgKGNhbnZhcy53aWR0aCA9PT0gMCB8fCBjYW52YXMuaGVpZ2h0ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmVzaXplQ2FudmFzKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICBzbm93Zmxha2VzLmZvckVhY2goc25vd2ZsYWtlID0+IHtcbiAgICAgICAgICAgICAgICBzbm93Zmxha2UuZHJhdygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBhbmltYXRlKCkge1xuICAgICAgICAgICAgLy8g0J/QtdGA0LXQstGW0YDRj9GU0LzQviDRgNC+0LfQvNGW0YAgY2FudmFzINC90LAg0L/QvtGH0LDRgtC60YMg0LrQvtC20L3QvtCz0L4g0LrQsNC00YDRgyAo0YLRltC70YzQutC4INGP0LrRidC+INCy0ZbQvSDQvdC10L/RgNCw0LLQuNC70YzQvdC40LkpXG4gICAgICAgICAgICBpZiAoY2FudmFzLndpZHRoID09PSAwIHx8IGNhbnZhcy5oZWlnaHQgPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXNpemVDYW52YXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdXBkYXRlU25vd2ZsYWtlcygpO1xuICAgICAgICAgICAgZHJhd1Nub3dmbGFrZXMoKTtcbiAgICAgICAgICAgIGFuaW1hdGlvbklkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gc3RhcnRBbmltYXRpb24oKSB7XG4gICAgICAgICAgICBpZiAoYW5pbWF0aW9uSWQpIHtcbiAgICAgICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShhbmltYXRpb25JZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhbmltYXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDQl9GD0L/QuNC90Y/RlNC80L4g0LDQvdGW0LzQsNGG0ZbRjiDQv9GA0Lgg0LLQuNGF0L7QtNGWINC3IHZpZXdwb3J0XG4gICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgICAgICAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWFuaW1hdGlvbklkICYmIGltYWdlTG9hZGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydEFuaW1hdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFuaW1hdGlvbklkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShhbmltYXRpb25JZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25JZCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShjYW52YXMpO1xuICAgIH1cbiAgICBcbiAgICBsb2FkVHJhbnNsYXRpb25zKClcbiAgICAgICAgLnRoZW4oaW5pdCkgLy8g0LfQsNC/0YPRgdC6INGW0L3RltGC0YMg0YHRgtC+0YDRltC90LrQuFxuXG5cblxuXG5cbiAgICAvLyBjb25zdCBsbmdCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxuZy1idG5cIilcbiAgICAvL1xuICAgIC8vIC8vINCS0YHRgtCw0L3QvtCy0LvRjtGU0LzQviDRgtC10LrRgdGCINC60L3QvtC/0LrQuCDQvdCwINC/0L7RgtC+0YfQvdGDINCw0LrRgtC40LLQvdGDINC80L7QstGDXG4gICAgLy8gZnVuY3Rpb24gdXBkYXRlTGFuZ3VhZ2VCdXR0b24oKSB7XG4gICAgLy8gICAgIC8vINCS0LjQutC+0YDQuNGB0YLQvtCy0YPRlNC80L4g0YLRgyDRgdCw0LzRgyDQu9C+0LPRltC60YMsINGJ0L4g0ZYg0LTQu9GPINCy0LjQt9C90LDRh9C10L3QvdGPIGxvY2FsZVxuICAgIC8vICAgICBsZXQgY3VycmVudExvY2FsZSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJsb2NhbGVcIikgfHwgXCJoclwiO1xuICAgIC8vICAgICBpZiAoaHJMZW5nKSBjdXJyZW50TG9jYWxlID0gJ2hyJztcbiAgICAvLyAgICAgaWYgKGVuTGVuZykgY3VycmVudExvY2FsZSA9ICdlbic7XG4gICAgLy8gICAgIGlmIChsbmdCdG4pIHtcbiAgICAvLyAgICAgICAgIGxuZ0J0bi50ZXh0Q29udGVudCA9IGN1cnJlbnRMb2NhbGU7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG4gICAgLy9cbiAgICAvLyAvLyDQntC90L7QstC70Y7RlNC80L4g0LrQvdC+0L/QutGDINC/0YDQuCDQt9Cw0LLQsNC90YLQsNC20LXQvdC90ZYgKNC/0ZbRgdC70Y8g0LLQuNC30L3QsNGH0LXQvdC90Y8gbG9jYWxlKVxuICAgIC8vIHVwZGF0ZUxhbmd1YWdlQnV0dG9uKCk7XG5cbiAgICAvLyBpZiAobG5nQnRuKSB7XG4gICAgLy8gICAgIGxuZ0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIC8vICAgICAgICAgLy8g0JLQuNC30L3QsNGH0LDRlNC80L4g0L/QvtGC0L7Rh9C90YMg0LzQvtCy0YMg0L/QtdGA0LXQtCDQv9C10YDQtdC80LjQutCw0L3QvdGP0LxcbiAgICAvLyAgICAgICAgIGxldCBjdXJyZW50TG9jYWxlID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsZVwiKSB8fCBcImhyXCI7XG4gICAgLy8gICAgICAgICBpZiAoaHJMZW5nKSBjdXJyZW50TG9jYWxlID0gJ2hyJztcbiAgICAvLyAgICAgICAgIGlmIChlbkxlbmcpIGN1cnJlbnRMb2NhbGUgPSAnZW4nO1xuICAgIC8vXG4gICAgLy8gICAgICAgICBpZiAoY3VycmVudExvY2FsZSA9PT0gXCJlblwiKSB7XG4gICAgLy8gICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcImxvY2FsZVwiKTtcbiAgICAvLyAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsZVwiLCBcImVuXCIpO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIC8vICAgICB9KTtcbiAgICAvLyB9XG4gICAgLy9cbiAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtYnRuXCIpPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIC8vICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtdGVzdFwiKT8uY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIik7XG4gICAgLy8gfSk7XG5cbiAgICAvLyDQotC40LzRh9Cw0YHQvtCy0LjQuSDQvtCxJ9GU0LrRgiDQtyDQtNCw0L3QuNC80Lgg0L/RgNC+INC/0YDQvtC80ZbQttC60Lgg0YLQuNC20L3RltCyXG4gICAgLy8gVE9ETzog0JfQsNC80ZbQvdC40YLQuCDQvdCwINC00LDQvdGWINC3INCx0LXQutC10L3QtNGDXG4gICAgLy8g0J/RgNC40LrQu9Cw0LQg0YHRgtGA0YPQutGC0YPRgNC4INC00LDQvdC40YUg0Lcg0LHQtdC60LXQvdC00YM6XG4gICAgLy8ge1xuICAgIC8vICAgICAxOiB7IHN0YXJ0OiBcIjIwMjUtMTItMTVUMDA6MDA6MDBcIiwgZW5kOiBcIjIwMjUtMTItMjFUMjM6NTk6NTlcIiB9LFxuICAgIC8vICAgICAyOiB7IHN0YXJ0OiBcIjIwMjUtMTItMjJUMDA6MDA6MDBcIiwgZW5kOiBcIjIwMjUtMTItMjhUMjM6NTk6NTlcIiB9LFxuICAgIC8vICAgICAuLi5cbiAgICAvLyB9XG4gICAgLy8g0JTQu9GPINGW0L3RgtC10LPRgNCw0YbRltGXINC3INCx0LXQutC10L3QtNC+0Lw6INC30LDQvNGW0L3QuNGC0Lgg0YbQtdC5INC+0LEn0ZTQutGCINC90LAg0LTQsNC90ZYg0LcgQVBJXG4gICAgLy8g0J3QsNC/0YDQuNC60LvQsNC0OiBjb25zdCB3ZWVrc0RhdGEgPSBhd2FpdCByZXF1ZXN0KCcvYXBpL3dlZWtzJyk7XG4gICAgY29uc3Qgd2Vla3NEYXRhID0ge1xuICAgICAgICAxOiB7XG4gICAgICAgICAgICBzdGFydDogXCIyMDI1LTEyLTE1VDAwOjAwOjAwXCIsXG4gICAgICAgICAgICBlbmQ6IFwiMjAyNS0xMi0yMVQyMzo1OTo1OVwiXG4gICAgICAgIH0sXG4gICAgICAgIDI6IHtcbiAgICAgICAgICAgIHN0YXJ0OiBcIjIwMjUtMTItMjJUMDA6MDA6MDBcIixcbiAgICAgICAgICAgIGVuZDogXCIyMDI1LTEyLTI4VDIzOjU5OjU5XCJcbiAgICAgICAgfSxcbiAgICAgICAgMzoge1xuICAgICAgICAgICAgc3RhcnQ6IFwiMjAyNS0xMi0yOVQwMDowMDowMFwiLFxuICAgICAgICAgICAgZW5kOiBcIjIwMjYtMDEtMDRUMjM6NTk6NTlcIlxuICAgICAgICB9LFxuICAgICAgICA0OiB7XG4gICAgICAgICAgICBzdGFydDogXCIyMDI2LTAxLTA1VDAwOjAwOjAwXCIsXG4gICAgICAgICAgICBlbmQ6IFwiMjAyNi0wMS0xMVQyMzo1OTo1OVwiXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8g0KTRg9C90LrRhtGW0Y8g0LTQu9GPINCy0LjQt9C90LDRh9C10L3QvdGPINCw0LrRgtC40LLQvdC+0LPQviDRgtC40LbQvdGPINC90LAg0L7RgdC90L7QstGWINC00LDQvdC40YUg0Lcg0L7QsSfRlNC60YLQsFxuICAgIGZ1bmN0aW9uIGdldEFjdGl2ZVdlZWsod2Vla3NEYXRhKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgbGV0IGFjdGl2ZVdlZWtJbmRleCA9IG51bGw7XG5cbiAgICAgICAgLy8g0J/QtdGA0LXQstGW0YDQutCwINC60L7QttC90L7Qs9C+INGC0LjQttC90Y9cbiAgICAgICAgZm9yIChjb25zdCB3ZWVrTnVtIGluIHdlZWtzRGF0YSkge1xuICAgICAgICAgICAgY29uc3Qgd2VlayA9IHdlZWtzRGF0YVt3ZWVrTnVtXTtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gbmV3IERhdGUod2Vlay5zdGFydCk7XG4gICAgICAgICAgICBjb25zdCBlbmQgPSBuZXcgRGF0ZSh3ZWVrLmVuZCk7XG5cbiAgICAgICAgICAgIGlmIChjdXJyZW50RGF0ZSA+PSBzdGFydCAmJiBjdXJyZW50RGF0ZSA8PSBlbmQpIHtcbiAgICAgICAgICAgICAgICBhY3RpdmVXZWVrSW5kZXggPSBwYXJzZUludCh3ZWVrTnVtKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhY3RpdmVXZWVrSW5kZXg7XG4gICAgfVxuXG4gICAgLy8g0IbQvdGW0YbRltCw0LvRltC30LDRhtGW0Y8g0YHQtdC60YbRltGXINGW0LPQvtGAINC3INCw0LLRgtC+0LzQsNGC0LjRh9C90LjQvCDQstC40LfQvdCw0YfQtdC90L3Rj9C8INGC0LjQttC90Y9cbiAgICBmdW5jdGlvbiBpbml0R2FtZXNXZWVrKCkge1xuICAgICAgICAvLyDQktC40LfQvdCw0YfQsNGU0LzQviDQsNC60YLQuNCy0L3QuNC5INGC0LjQttC00LXQvdGMINC90LAg0L7RgdC90L7QstGWINC00LDQvdC40YUg0Lcg0L7QsSfRlNC60YLQsFxuICAgICAgICBsZXQgYWN0aXZlV2VlayA9IGdldEFjdGl2ZVdlZWsod2Vla3NEYXRhKSB8fCAxO1xuXG4gICAgICAgIC8vINCe0LHQvNC10LbQtdC90L3RjyDQtNC+IDQg0YLQuNC20L3RltCyXG4gICAgICAgIGlmIChhY3RpdmVXZWVrID4gNCkgYWN0aXZlV2VlayA9IDQ7XG5cbiAgICAgICAgLy8g0J/RgNC40YXQvtCy0YPQstCw0L3QvdGPINCy0YHRltGFINGB0L/QuNGB0LrRltCyINGW0LPQvtGAXG4gICAgICAgIGNvbnN0IGdhbWVMaXN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYW1lc19fbGlzdCcpO1xuICAgICAgICBnYW1lTGlzdHMuZm9yRWFjaChsaXN0ID0+IHtcbiAgICAgICAgICAgIGxpc3QuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyDQn9C+0LrQsNC3INGC0ZbQu9GM0LrQuCDQsNC60YLQuNCy0L3QvtCz0L4g0YLQuNC20L3Rj1xuICAgICAgICBjb25zdCBjdXJyZW50TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5nYW1lc19fbGlzdC5fd2VlayR7YWN0aXZlV2Vla31gKTtcbiAgICAgICAgaWYgKGN1cnJlbnRMaXN0KSB7XG4gICAgICAgICAgICBjdXJyZW50TGlzdC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDQkNCy0YLQvtC80LDRgtC40YfQvdC1INC00L7QtNCw0LLQsNC90L3RjyBkYXRhLdCw0YLRgNC40LHRg9GC0ZbQsiDQtNC70Y8g0YLRgNC10LrRltC90LPRgyDRgtCwINCy0YHRgtCw0L3QvtCy0LvQtdC90L3RjyDQv9C+0YHQuNC70LDQvdGMXG4gICAgICAgIGF1dG9BZGREYXRhQnV0dG9ucygpO1xuICAgICAgICBzZXRHYW1lTGlua3MoKTtcbiAgICB9XG5cbiAgICAvLyDQotC40LzRh9Cw0YHQvtCy0LjQuSDQvtCxJ9GU0LrRgiDQtyDQvNCw0L/RltC90LPQvtC8IGdhbWUtaWQg0L3QsCBVUkxcbiAgICAvLyBUT0RPOiDQl9Cw0LzRltC90LjRgtC4INC90LAg0LTQsNC90ZYg0Lcg0LHQtdC60LXQvdC00YNcbiAgICAvLyDQn9GA0LjQutC70LDQtCDRgdGC0YDRg9C60YLRg9GA0Lgg0LTQsNC90LjRhSDQtyDQsdC10LrQtdC90LTRgzpcbiAgICAvLyB7XG4gICAgLy8gICAgIFwid2VlazFfZ2FtZTFcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9nYW1lLXNsdWctMVwiLFxuICAgIC8vICAgICBcIndlZWsxX2dhbWUyXCI6IFwiL2Nhc2luby9zaG93LWdhbWUvZ2FtZS1zbHVnLTJcIixcbiAgICAvLyAgICAgLi4uXG4gICAgLy8gfVxuICAgIC8vINCU0LvRjyDRltC90YLQtdCz0YDQsNGG0ZbRlyDQtyDQsdC10LrQtdC90LTQvtC8OiBjb25zdCBnYW1lc0xpbmtzID0gYXdhaXQgcmVxdWVzdCgnL2FwaS9nYW1lcy9saW5rcycpO1xuICAgIGNvbnN0IGdhbWVzTGlua3MgPSB7XG4gICAgICAgIC8vIFdlZWsgMVxuICAgICAgICBcIndlZWsxX2dhbWUxXCI6IFwiL2Nhc2luby9zaG93LWdhbWUxL1wiLFxuICAgICAgICBcIndlZWsxX2dhbWUyXCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazFfZ2FtZTNcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrMV9nYW1lNFwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWsxX2dhbWU1XCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazFfZ2FtZTZcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrMV9nYW1lN1wiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWsxX2dhbWU4XCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazFfZ2FtZTlcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrMV9nYW1lMTBcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgLy8gV2VlayAyXG4gICAgICAgIFwid2VlazJfZ2FtZTFcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrMl9nYW1lMlwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWsyX2dhbWUzXCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazJfZ2FtZTRcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrMl9nYW1lNVwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWsyX2dhbWU2XCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazJfZ2FtZTdcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrMl9nYW1lOFwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWsyX2dhbWU5XCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazJfZ2FtZTEwXCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIC8vIFdlZWsgM1xuICAgICAgICBcIndlZWszX2dhbWUxXCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazNfZ2FtZTJcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrM19nYW1lM1wiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWszX2dhbWU0XCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazNfZ2FtZTVcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrM19nYW1lNlwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWszX2dhbWU3XCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazNfZ2FtZThcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrM19nYW1lOVwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWszX2dhbWUxMFwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICAvLyBXZWVrIDRcbiAgICAgICAgXCJ3ZWVrNF9nYW1lMVwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWs0X2dhbWUyXCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazRfZ2FtZTNcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrNF9nYW1lNFwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWs0X2dhbWU1XCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazRfZ2FtZTZcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrNF9nYW1lN1wiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWs0X2dhbWU4XCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazRfZ2FtZTlcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrNF9nYW1lMTBcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIlxuICAgIH07XG5cbiAgICAvLyDQktGB0YLQsNC90L7QstC70LXQvdC90Y8g0YPQvdGW0LrQsNC70YzQvdC40YUg0L/QvtGB0LjQu9Cw0L3RjCDQtNC70Y8g0LrQvtC20L3QvtGXINCz0YDQuFxuICAgIGZ1bmN0aW9uIHNldEdhbWVMaW5rcygpIHtcbiAgICAgICAgY29uc3QgZ2FtZUxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdhbWVzX19pdGVtLWxpbmtbZGF0YS1nYW1lLWlkXScpO1xuICAgICAgICBcbiAgICAgICAgZ2FtZUxpbmtzLmZvckVhY2gobGluayA9PiB7XG4gICAgICAgICAgICBjb25zdCBnYW1lSWQgPSBsaW5rLmdldEF0dHJpYnV0ZSgnZGF0YS1nYW1lLWlkJyk7XG4gICAgICAgICAgICBpZiAoZ2FtZUlkICYmIGdhbWVzTGlua3NbZ2FtZUlkXSkge1xuICAgICAgICAgICAgICAgIGxpbmsuaHJlZiA9IGdhbWVzTGlua3NbZ2FtZUlkXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8g0JDQstGC0L7QvNCw0YLQuNGH0L3QtSDQtNC+0LTQsNCy0LDQvdC90Y8gZGF0YS3QsNGC0YDQuNCx0YPRgtGW0LIg0LTQu9GPINGC0YDQtdC60ZbQvdCz0YNcbiAgICBmdW5jdGlvbiBhdXRvQWRkRGF0YUJ1dHRvbnMoKSB7XG4gICAgICAgIGNvbnN0IGdhbWVMaXN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYW1lc19fbGlzdCcpO1xuICAgICAgICBcbiAgICAgICAgZ2FtZUxpc3RzLmZvckVhY2gobGlzdCA9PiB7XG4gICAgICAgICAgICBjb25zdCB3ZWVrTWF0Y2ggPSBsaXN0LmNsYXNzTmFtZS5tYXRjaCgvX3dlZWsoXFxkKykvKTtcbiAgICAgICAgICAgIGlmICghd2Vla01hdGNoKSByZXR1cm47XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHdlZWsgPSB3ZWVrTWF0Y2hbMV07XG4gICAgICAgICAgICBjb25zdCBpdGVtcyA9IGxpc3QucXVlcnlTZWxlY3RvckFsbCgnLmdhbWVzX19pdGVtJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZ2FtZU51bWJlciA9IGluZGV4ICsgMTtcbiAgICAgICAgICAgICAgICBjb25zdCBidXR0b25OYW1lID0gYHdlZWske3dlZWt9R2FtZSR7Z2FtZU51bWJlcn1gO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IGxpbmtFbCA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLmdhbWVzX19pdGVtLWxpbmsnKTtcbiAgICAgICAgICAgICAgICBpZiAobGlua0VsKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vINCe0L3QvtCy0LvRjtGU0LzQviBkYXRhLWJ1dHRvbiDRj9C60YnQviDRidC1INC90LUg0LLRgdGC0LDQvdC+0LLQu9C10L3QviDQsNCx0L4g0L3QtdC60L7RgNC10LrRgtC90LVcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudEJ1dHRvbiA9IGxpbmtFbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghY3VycmVudEJ1dHRvbiB8fCAhY3VycmVudEJ1dHRvbi5pbmNsdWRlcyhgd2VlayR7d2Vla31HYW1lYCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtFbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtYnV0dG9uJywgYnV0dG9uTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8g0JLRgdGC0LDQvdC+0LLQu9GO0ZTQvNC+IGRhdGEtcHJvbW8g0Y/QutGJ0L4g0YnQtSDQvdC1INCy0YHRgtCw0L3QvtCy0LvQtdC90L5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFsaW5rRWwuZ2V0QXR0cmlidXRlKCdkYXRhLXByb21vJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtFbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvbW8nLCAncmF6aW5hXzIwMjZfaHInKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyDQktC40LrQu9C40LrQsNGU0LzQviBpbml0UGFnZUhlaWdodCDQv9GA0Lgg0LfQsNCy0LDQvdGC0LDQttC10L3QvdGWINGB0YLQvtGA0ZbQvdC60LhcbiAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2xvYWRpbmcnKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgICAgICAgICBpbml0UGFnZUhlaWdodCgpO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBET00g0LLQttC1INC30LDQstCw0L3RgtCw0LbQtdC90LjQuVxuICAgICAgICBpbml0UGFnZUhlaWdodCgpO1xuICAgIH1cblxuICAgIC8vINCS0LjQutC70LjQutCw0ZTQvNC+IGluaXQoKSDQtNC70Y8g0ZbQvdGW0YbRltCw0LvRltC30LDRhtGW0Zcg0LLRgdGW0YUg0LrQvtC80L/QvtC90LXQvdGC0ZbQslxuICAgIGluaXQoKTtcblxufSkoKTtcbiJdfQ==
