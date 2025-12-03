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
    var favPageHeight = viewportHeight - headerHeight - footerHeight - 32;

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

    // Спочатку приховуємо всі іконки
    icons.forEach(function (selector) {
      var icon = document.querySelector(selector);
      if (icon) {
        // Зберігаємо оригінальний transform (якщо є rotate)
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
  var participateCanvas = null;
  var participateDeers = [];
  var participateDeerWidth = 0;
  var participateDeerHeight = 0;
  var canvasClickHandlersAttached = false;

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

    var animationId = null;
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
          if (!this.isVisible() || !this.heartImage || !this.heartImage.complete) return;
          ctx.save();
          ctx.globalAlpha = this.opacity;

          // Малюємо зображення сердечка з масштабуванням
          var drawSize = this.size * this.scale;
          var drawX = this.x - drawSize / 2;
          var drawY = this.y - drawSize / 2;
          ctx.drawImage(this.heartImage, drawX, drawY, drawSize, drawSize);
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

    // Масив оленів (можна додати більше)
    var deers = [];

    // Конфігурація для створення оленів
    var DEER_COUNT = 3; // Кількість оленів

    // Розраховуємо коефіцієнт масштабування для позицій оленів
    var scaleX = CANVAS_WIDTH / 1366;
    var scaleY = CANVAS_HEIGHT / 500;
    var deerConfigs = [{
      startX: CANVAS_WIDTH / 2 + 50 * scaleX,
      // Для збереження позиції відносно нижнього краю додаємо зміщення
      startY: treeY + TREE_HEIGHT - 20 + deerHeightOffset,
      // Під ялинкою (treeY + висота ялинки - відступ)
      minX: CANVAS_WIDTH / 2 - 200 * scaleX,
      maxX: CANVAS_WIDTH / 2 + 300 * scaleX,
      speed: 0.5,
      zIndex: 4
    }, {
      startX: CANVAS_WIDTH / 2 - 100 * scaleX,
      // Для збереження позиції відносно нижнього краю додаємо зміщення
      startY: CANVAS_HEIGHT / 2 - BASE_DEER_HEIGHT / 2 + 50 * scaleY + deerHeightOffset,
      minX: CANVAS_WIDTH / 2 - 150 * scaleX,
      maxX: CANVAS_WIDTH / 2 + 150 * scaleX,
      speed: 0.3,
      zIndex: 3
    }, {
      startX: CANVAS_WIDTH / 2 - 100 * scaleX,
      // Для збереження позиції відносно нижнього краю додаємо зміщення
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
    participateDeers = deers;
    participateDeerWidth = DEER_WIDTH;
    participateDeerHeight = DEER_HEIGHT;

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
      animationId = requestAnimationFrame(animate);
    }
    function startAnimation() {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      animate();
    }

    // Зупиняємо анімацію при виході з viewport (опціонально)
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
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

    // Обробка зміни розміру вікна для адаптивності
    var resizeTimeout;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(function () {
        var newIsMobile = window.innerWidth <= 1050;
        // Перезапускаємо ініціалізацію тільки якщо змінився режим (mobile/desktop)
        if (newIsMobile !== isMobile) {
          // Зупиняємо поточну анімацію
          if (animationId) {
            cancelAnimationFrame(animationId);
            animationId = null;
          }
          // Перезапускаємо ініціалізацію
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
    snowflakeImage.src = 'img/snowflake.png';

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwibWFpblBhZ2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJsb2FkZXIiLCJyZXN1bHRzVGFibGUiLCJyZXN1bHRzVGFibGVPdGhlciIsImhyTGVuZyIsImVuTGVuZyIsImxvY2FsZSIsImRlYnVnIiwiaGlkZUxvYWRlciIsImkxOG5EYXRhIiwidHJhbnNsYXRlU3RhdGUiLCJ1c2VySWQiLCJyZXF1ZXN0IiwibGluayIsImV4dHJhT3B0aW9ucyIsImZldGNoIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJvayIsIkVycm9yIiwianNvbiIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsInJlcG9ydEVycm9yIiwic3R5bGUiLCJkaXNwbGF5Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwic3RhcnRzV2l0aCIsIlByb21pc2UiLCJyZWplY3QiLCJjbGFzc0xpc3QiLCJhZGQiLCJib2R5Iiwib3ZlcmZsb3ciLCJyZW1vdmUiLCJpbml0UGFnZUhlaWdodCIsImZhdlBhZ2UiLCJmcmFtZSIsInN0aWNreVdyYXAiLCJoZWFkZXJIZWlnaHQiLCJpbm5lcldpZHRoIiwiZm9vdGVySGVpZ2h0Iiwidmlld3BvcnRIZWlnaHQiLCJpbm5lckhlaWdodCIsImZhdlBhZ2VIZWlnaHQiLCJtaW5IZWlnaHQiLCJtYXhIZWlnaHQiLCJmcmFtZUhlaWdodCIsIm1hcmdpblRvcCIsImluaXQiLCJ0cnlEZXRlY3RVc2VySWQiLCJxdWlja0NoZWNrQW5kUmVuZGVyIiwiaW5pdEdhbWVzV2VlayIsImluaXRQcm9ncmVzc0JhciIsImluaXRQYXJ0aWNpcGF0ZUNhbnZhcyIsImluaXRTbm93Zmxha2VzQ2FudmFzIiwic2V0VGltZW91dCIsInJlc2l6ZVRpbWVvdXQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xlYXJUaW1lb3V0IiwiZHJvcGRvd25zIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJkcm9wZG93biIsImV2ZW50Iiwib3BlbiIsInN1bW1hcnkiLCJzdW1tYXJ5UmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImN1cnJlbnRTY3JvbGxZIiwic2Nyb2xsWSIsInBhZ2VZT2Zmc2V0IiwidGFyZ2V0U2Nyb2xsWSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInNjcm9sbFRvIiwiTWF0aCIsIm1heCIsImJlaGF2aW9yIiwic3RvcmUiLCJzdGF0ZSIsImdldFN0YXRlIiwiYXV0aCIsImlzQXV0aG9yaXplZCIsImlkIiwiZ191c2VyX2lkIiwiYXR0ZW1wdHMiLCJtYXhBdHRlbXB0cyIsImF0dGVtcHRJbnRlcnZhbCIsIndhaXRGb3JVc2VySWQiLCJyZXNvbHZlIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJsb2FkVHJhbnNsYXRpb25zIiwidHJhbnNsYXRlIiwicmVwb3J0RGF0YSIsIm9yaWdpbiIsInVzZXJpZCIsImVycm9yVGV4dCIsInRleHQiLCJtZXNzYWdlIiwidHlwZSIsIm5hbWUiLCJzdGFjayIsIm1ldGhvZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ3YXJuIiwiZWxlbXMiLCJsZW5ndGgiLCJlbGVtIiwia2V5IiwiZ2V0QXR0cmlidXRlIiwiaW5uZXJIVE1MIiwicmVtb3ZlQXR0cmlidXRlIiwibG9nIiwicmVmcmVzaExvY2FsaXplZENsYXNzIiwiZWxlbWVudCIsImxhbmciLCJyZW5kZXJVc2VycyIsIndlZWtOdW0iLCJ1c2VyRGF0YSIsIk51bWJlciIsIndlZWtPYmoiLCJmaW5kIiwidyIsIndlZWsiLCJkYXRhIiwiQXJyYXkiLCJpc0FycmF5IiwidXNlcnMiLCJpc1N0YWdlRW5kZWQiLCJ3aW5uZXJBZGRpdGlvbmFsUHJpemUiLCJ1Iiwid2lubmVyIiwiY3VycmVudFVzZXIiLCJ1c2VyIiwiaXNWZXJpZmllZFVzZXIiLCJwb2ludHMiLCJwb3B1bGF0ZVVzZXJzVGFibGUiLCJjdXJyZW50VXNlcklkIiwic2Vjb25kVGFibGVPdGhlciIsInNlY29uZFRhYmxlIiwiaXNUb3BDdXJyZW50VXNlciIsInNsaWNlIiwic29tZSIsInRvcFVzZXJzTGVuZ3RoIiwidG9wVXNlcnMiLCJkaXNwbGF5VXNlciIsImlzQ3VycmVudFVzZXIiLCJ0YWJsZSIsInJlbmRlclJvdyIsIm9wdGlvbnMiLCJoaWdobGlnaHQiLCJuZWlnaGJvciIsInVzZXJSb3ciLCJjcmVhdGVFbGVtZW50IiwidXNlclBsYWNlIiwiaW5kZXhPZiIsInByaXplS2V5IiwiZ2V0UHJpemVUcmFuc2xhdGlvbktleSIsInRyYW5zbGF0ZUtleSIsIm1hc2tVc2VySWQiLCJ0b0ZpeGVkIiwiYXBwZW5kIiwiaW5kZXgiLCJjYW52YXMiLCJwZXJjZW50RWxlbWVudCIsImN0eCIsImdldENvbnRleHQiLCJiYXJIZWlnaHQiLCJzZWdtZW50V2lkdGgiLCJzZWdtZW50SGVpZ2h0Iiwic2VnbWVudEdhcCIsInBhZGRpbmciLCJzZWdtZW50UmFkaXVzIiwiY3VycmVudFByb2dyZXNzIiwidGFyZ2V0UHJvZ3Jlc3MiLCJsb2FkaW5nRHVyYXRpb24iLCJzdGFydFRpbWUiLCJEYXRlIiwibm93IiwiYW5pbWF0aW9uSWQiLCJtYXhTZWdtZW50cyIsImlzTG9hZGluZ0NvbXBsZXRlIiwicmVzaXplQ2FudmFzIiwiY29udGFpbmVyIiwicGFyZW50RWxlbWVudCIsImNvbnRhaW5lcldpZHRoIiwib2Zmc2V0V2lkdGgiLCJ3aWR0aCIsImhlaWdodCIsImF2YWlsYWJsZVdpZHRoIiwic2VnbWVudFdpdGhHYXAiLCJmbG9vciIsImRyYXdQcm9ncmVzc0JhciIsInByb2dyZXNzIiwiY2xlYXJSZWN0Iiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJzdHJva2VSZWN0IiwiZmlsbGVkU2VnbWVudHMiLCJmaWxsU3R5bGUiLCJjZW50ZXJZIiwiaSIsIngiLCJ5IiwiYmVnaW5QYXRoIiwicm91bmRSZWN0IiwiciIsIm1vdmVUbyIsImxpbmVUbyIsInF1YWRyYXRpY0N1cnZlVG8iLCJjbG9zZVBhdGgiLCJmaWxsIiwidXBkYXRlUHJvZ3Jlc3MiLCJlbGFwc2VkIiwicGVyY2VudCIsInRleHRDb250ZW50IiwiaW5pdEljb25zQW5pbWF0aW9uIiwiZHVyYXRpb24iLCJpY29ucyIsIm9yaWdpbmFsVHJhbnNmb3JtcyIsIk1hcCIsInNlbGVjdG9yIiwiaWNvbiIsImNvbXB1dGVkU3R5bGUiLCJnZXRDb21wdXRlZFN0eWxlIiwib3JpZ2luYWxUcmFuc2Zvcm0iLCJ0cmFuc2Zvcm0iLCJzZXQiLCJvcGFjaXR5IiwidHJhbnNpdGlvbiIsImljb25Db3VudCIsImdldCIsInBhcnRpY2lwYXRlQ2FudmFzIiwicGFydGljaXBhdGVEZWVycyIsInBhcnRpY2lwYXRlRGVlcldpZHRoIiwicGFydGljaXBhdGVEZWVySGVpZ2h0IiwiY2FudmFzQ2xpY2tIYW5kbGVyc0F0dGFjaGVkIiwidG91Y2hTdGFydFgiLCJ0b3VjaFN0YXJ0WSIsImhhbmRsZVBhcnRpY2lwYXRlQ2FudmFzQ2xpY2siLCJyZWN0Iiwic2NhbGVYIiwic2NhbGVZIiwiY2xpZW50WCIsImNsaWVudFkiLCJjbGlja1giLCJsZWZ0IiwiY2xpY2tZIiwiZGVlciIsImlzUG9pbnRJbnNpZGUiLCJoYW5kbGVDbGljayIsImhhbmRsZVBhcnRpY2lwYXRlQ2FudmFzVG91Y2hTdGFydCIsInRvdWNoIiwidG91Y2hlcyIsImhhbmRsZVBhcnRpY2lwYXRlQ2FudmFzVG91Y2hFbmQiLCJjaGFuZ2VkVG91Y2hlcyIsImRlbHRhWCIsImFicyIsImRlbHRhWSIsImRpc3RhbmNlIiwic3FydCIsImlzTW9iaWxlIiwiQ0FOVkFTX1dJRFRIIiwiQ0FOVkFTX0hFSUdIVCIsIlRSRUVfV0lEVEgiLCJUUkVFX0hFSUdIVCIsIkZSQU1FU19QRVJfUk9XIiwiVE9UQUxfUk9XUyIsIlNQUklURV9TSEVFVF9XSURUSCIsIlNQUklURV9TSEVFVF9IRUlHSFQiLCJGUkFNRV9XSURUSCIsIkZSQU1FX0hFSUdIVCIsIkRFRVJfU0NBTEUiLCJCQVNFX0RFRVJfV0lEVEgiLCJCQVNFX0RFRVJfSEVJR0hUIiwiREVFUl9XSURUSCIsIkRFRVJfSEVJR0hUIiwiZGVlckhlaWdodE9mZnNldCIsInRyZWVYIiwidHJlZVkiLCJGUkFNRV9ERUxBWSIsIldBTEtJTkdfRlJBTUVTIiwiRlJBTUVfUkVQRUFUIiwiSURMRV9NSU5fRFVSQVRJT04iLCJJRExFX01BWF9EVVJBVElPTiIsIkRFRVJfU1RBVEUiLCJXQUxLSU5HIiwiSURMRSIsIlBFVFRJTkciLCJQRVRUSU5HX01JTl9EVVJBVElPTiIsIlBFVFRJTkdfTUFYX0RVUkFUSU9OIiwiSEVBUlRfU0laRV9NSU4iLCJIRUFSVF9TSVpFX01BWCIsIkhFQVJUX1JJU0VfRElTVEFOQ0UiLCJIRUFSVF9TUEFXTl9JTlRFUlZBTCIsImZyYW1lQ291bnRlciIsIkhlYXJ0Iiwic2l6ZSIsImhlYXJ0SW1hZ2UiLCJzY2FsZSIsInJpc2VTcGVlZCIsImlzVmlzaWJsZSIsImNvbXBsZXRlIiwic2F2ZSIsImdsb2JhbEFscGhhIiwiZHJhd1NpemUiLCJkcmF3WCIsImRyYXdZIiwiZHJhd0ltYWdlIiwicmVzdG9yZSIsIkRlZXIiLCJzdGFydFgiLCJzdGFydFkiLCJtaW5YIiwibWF4WCIsInNwZWVkIiwiekluZGV4IiwiZGlyZWN0aW9uIiwiZnJhbWVJbmRleCIsImZyYW1lUmVwZWF0Q291bnRlciIsImlkbGVUaW1lciIsImlkbGVEdXJhdGlvbiIsInBldHRpbmdUaW1lciIsInBldHRpbmdEdXJhdGlvbiIsInByZXZpb3VzU3RhdGUiLCJzYXZlZFgiLCJzYXZlZFkiLCJoZWFydHMiLCJoZWFydFNwYXduQ291bnRlciIsImRlZXJXaWR0aCIsImRlZXJIZWlnaHQiLCJyYW5kb20iLCJvZmZzZXRYIiwiaGVhcnRYIiwiaGVhcnRZIiwicHVzaCIsInJvdyIsImNvbCIsInNob3VsZFVwZGF0ZUZyYW1lIiwic3Bhd25IZWFydCIsImZpbHRlciIsImhlYXJ0IiwidXBkYXRlIiwic3ByaXRlSW1hZ2UiLCJmcmFtZVdpZHRoIiwiZ2V0U3ByaXRlRnJhbWVJbmRleCIsInNvdXJjZVgiLCJzb3VyY2VZIiwic291cmNlV2lkdGgiLCJzb3VyY2VIZWlnaHQiLCJkZXN0WCIsImRlc3RZIiwiZGVzdFdpZHRoIiwiZGVzdEhlaWdodCIsImRyYXciLCJpbWFnZXMiLCJiYWNrZ3JvdW5kIiwiSW1hZ2UiLCJ0cmVlIiwiZGVlclNwcml0ZSIsImRlZXJzIiwiREVFUl9DT1VOVCIsImRlZXJDb25maWdzIiwiY29uZmlnIiwiaW1hZ2VzTG9hZGVkIiwidG90YWxJbWFnZXMiLCJvbkltYWdlTG9hZCIsImRyYXdDYW52YXMiLCJzdGFydEFuaW1hdGlvbiIsIm9ubG9hZCIsInNyYyIsInBhc3NpdmUiLCJUUkVFX1pfSU5ERVgiLCJkcmF3YWJsZUVsZW1lbnRzIiwic29ydCIsImEiLCJiIiwiYW5pbWF0ZSIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwib2JzZXJ2ZSIsIm5ld0lzTW9iaWxlIiwiU05PV0ZMQUtFX0NPVU5UIiwiU05PV0ZMQUtFX01JTl9TSVpFIiwiU05PV0ZMQUtFX01BWF9TSVpFIiwiU05PV0ZMQUtFX01JTl9TUEVFRCIsIlNOT1dGTEFLRV9NQVhfU1BFRUQiLCJTTk9XRkxBS0VfV0lORF9SQU5HRSIsIlNOT1dGTEFLRV9TUEFXTl9JTlRFUlZBTCIsInNub3dmbGFrZXMiLCJsYXN0U25vd2ZsYWtlVGltZSIsIm5ld1dpZHRoIiwibmV3SGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiY2xpZW50SGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0Iiwic25vd2ZsYWtlSW1hZ2UiLCJpbWFnZUxvYWRlZCIsIndhaXRGb3JQYWdlUmVhZHkiLCJpc1BhZ2VMb2FkaW5nIiwiY29udGFpbnMiLCJmaWxsQ2FudmFzV2l0aFNub3dmbGFrZXMiLCJTbm93Zmxha2UiLCJpbml0aWFsWSIsIndpbmQiLCJyb3RhdGlvbiIsIlBJIiwicm90YXRpb25TcGVlZCIsInNpbiIsInJvdGF0ZSIsImNyZWF0ZVNub3dmbGFrZSIsInVwZGF0ZVNub3dmbGFrZXMiLCJpc09mZlNjcmVlbiIsInNwbGljZSIsImRyYXdTbm93Zmxha2VzIiwic25vd2ZsYWtlIiwid2Vla3NEYXRhIiwic3RhcnQiLCJlbmQiLCJnZXRBY3RpdmVXZWVrIiwiY3VycmVudERhdGUiLCJhY3RpdmVXZWVrSW5kZXgiLCJwYXJzZUludCIsImFjdGl2ZVdlZWsiLCJnYW1lTGlzdHMiLCJsaXN0IiwiY3VycmVudExpc3QiLCJhdXRvQWRkRGF0YUJ1dHRvbnMiLCJzZXRHYW1lTGlua3MiLCJnYW1lc0xpbmtzIiwiZ2FtZUxpbmtzIiwiZ2FtZUlkIiwid2Vla01hdGNoIiwiY2xhc3NOYW1lIiwibWF0Y2giLCJpdGVtcyIsIml0ZW0iLCJnYW1lTnVtYmVyIiwiYnV0dG9uTmFtZSIsImxpbmtFbCIsImN1cnJlbnRCdXR0b24iLCJpbmNsdWRlcyIsInNldEF0dHJpYnV0ZSIsInJlYWR5U3RhdGUiXSwibWFwcGluZ3MiOiI7OzsrQ0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREEsQ0FBQyxZQUFZO0VBRVQsSUFBTUEsTUFBTSxHQUFHLHNDQUFzQztFQUVyRCxJQUFNQyxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFdBQVcsQ0FBQztJQUNoREMsTUFBTSxHQUFHRixRQUFRLENBQUNDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQztJQUNuREUsWUFBWSxHQUFHSCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxRQUFRLENBQUM7SUFDL0NHLGlCQUFpQixHQUFHSixRQUFRLENBQUNDLGFBQWEsQ0FBQyxhQUFhLENBQUM7RUFFN0QsSUFBTUksTUFBTSxHQUFHTCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxTQUFTLENBQUM7RUFDaEQsSUFBTUssTUFBTSxHQUFHTixRQUFRLENBQUNDLGFBQWEsQ0FBQyxTQUFTLENBQUM7RUFFaEQsSUFBSU0sTUFBTSxHQUFHLElBQUk7RUFDakI7O0VBRUEsSUFBSUYsTUFB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Q0FjLElBQUksRUFBRTtBQUVWLENBQUMsR0FBRyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgpIHtcblxuICAgIGNvbnN0IGFwaVVSTCA9ICdodHRwczovL2Zhdi1wcm9tLmNvbS9hcGlfYmxhY2tfcHJpemUnXG5cbiAgICBjb25zdCBtYWluUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmF2LXBhZ2VcIiksXG4gICAgICAgIGxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3Bpbm5lci1vdmVybGF5XCIpLFxuICAgICAgICByZXN1bHRzVGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RhYmxlXCIpLFxuICAgICAgICByZXN1bHRzVGFibGVPdGhlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFibGVPdGhlclwiKVxuXG4gICAgY29uc3QgaHJMZW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hyTGVuZycpO1xuICAgIGNvbnN0IGVuTGVuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbkxlbmcnKTtcblxuICAgIGxldCBsb2NhbGUgPSBcImhyXCJcbiAgICAvLyBsZXQgbG9jYWxlID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsZVwiKSB8fCBcImhyXCJcblxuICAgIGlmIChockxlbmcpIGxvY2FsZSA9ICdocic7XG4gICAgaWYgKGVuTGVuZykgbG9jYWxlID0gJ2VuJztcblxuICAgIGxldCBkZWJ1ZyA9IGZhbHNlXG5cbiAgICBpZiAoZGVidWcpIGhpZGVMb2FkZXIoKVxuXG4gICAgbGV0IGkxOG5EYXRhID0ge307XG4gICAgY29uc3QgdHJhbnNsYXRlU3RhdGUgPSBmYWxzZTtcbiAgICBsZXQgdXNlcklkID0gbnVsbDtcbiAgICAvLyBsZXQgdXNlcklkID0gTnVtYmVyKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIikpID8/IG51bGxcblxuICAgIGNvbnN0IHJlcXVlc3QgPSBmdW5jdGlvbiAobGluaywgZXh0cmFPcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBmZXRjaChhcGlVUkwgKyBsaW5rLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLi4uKGV4dHJhT3B0aW9ucyB8fCB7fSlcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXMub2spIHRocm93IG5ldyBFcnJvcignQVBJIGVycm9yJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignQVBJIHJlcXVlc3QgZmFpbGVkOicsIGVycik7XG5cbiAgICAgICAgICAgICAgICByZXBvcnRFcnJvcihlcnIpO1xuXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhdi1wYWdlJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYuc3RhcnRzV2l0aChcImh0dHBzOi8vd3d3LmZhdmJldC5oci9cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3Byb21vY2lqZS9wcm9tb2NpamEvc3R1Yi8nO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9wcm9tb3MvcHJvbW8vc3R1Yi8nO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoaWRlTG9hZGVyKCl7XG4gICAgICAgIGxvYWRlci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCJcbiAgICAgICAgbWFpblBhZ2UuY2xhc3NMaXN0LnJlbW92ZShcImxvYWRpbmdcIilcbiAgICB9XG5cbiAgICAvLyDQpNGD0L3QutGG0ZbRjyDQtNC70Y8g0LLRgdGC0LDQvdC+0LLQu9C10L3QvdGPINCy0LjRgdC+0YIg0L3QsCDQvtGB0L3QvtCy0ZYgdmlld3BvcnQsINGF0LXQtNC10YDQsCDRgtCwINGE0YPRgtC10YDQsFxuICAgIGZ1bmN0aW9uIGluaXRQYWdlSGVpZ2h0KCkge1xuICAgICAgICBjb25zdCBmYXZQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhdi1wYWdlJyk7XG4gICAgICAgIGNvbnN0IGZyYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZyYW1lJyk7XG4gICAgICAgIGNvbnN0IHN0aWNreVdyYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RpY2t5LXdyYXAnKTtcbiAgICAgICAgXG4gICAgICAgIGlmICghZmF2UGFnZSB8fCAhZnJhbWUgfHwgIXN0aWNreVdyYXApIHJldHVybjtcbiAgICAgICAgXG4gICAgICAgIC8vINCS0LjQt9C90LDRh9Cw0ZTQvNC+INCy0LjRgdC+0YLRgyDRhdC10LTQtdGA0LAg0LfQsNC70LXQttC90L4g0LLRltC0INGI0LjRgNC40L3QuCDQtdC60YDQsNC90YNcbiAgICAgICAgLy8g0JTQtdGB0LrRgtC+0L8gKD4gMTAyNHB4KTogNjAgKyAyMSA9IDgxcHhcbiAgICAgICAgLy8g0JzQvtCx0ZbQu9C60LggKOKJpCAxMDI0cHgpOiA0OCArIDIxID0gNjlweFxuICAgICAgICBjb25zdCBoZWFkZXJIZWlnaHQgPSB3aW5kb3cuaW5uZXJXaWR0aCA+IDEwMjQgPyA4MSA6IDY5O1xuICAgICAgICBcbiAgICAgICAgLy8g0JLQuNC30L3QsNGH0LDRlNC80L4g0LLQuNGB0L7RgtGDINGE0YPRgtC10YDQsCDQt9Cw0LvQtdC20L3QviDQstGW0LQg0YjQuNGA0LjQvdC4INC10LrRgNCw0L3Rg1xuICAgICAgICAvLyDQpNGD0YLQtdGAINC/0YDQuNGB0YPRgtC90ZbQuSDRgtGW0LvRjNC60Lgg0L3QsCDQtdC60YDQsNC90LDRhSDiiaQgMTAyNHB4LCDQstC40YHQvtGC0LAgNTZweFxuICAgICAgICBjb25zdCBmb290ZXJIZWlnaHQgPSB3aW5kb3cuaW5uZXJXaWR0aCA8PSAxMDI0ID8gNTYgOiAwO1xuICAgICAgICBcbiAgICAgICAgLy8g0J7QsdGH0LjRgdC70Y7RlNC80L4g0LLQuNGB0L7RgtGDIC5mYXYtcGFnZTogdmlld3BvcnQgaGVpZ2h0IC0gaGVhZGVyIGhlaWdodCAtIGZvb3RlciBoZWlnaHQgLSDQstGW0LTRgdGC0YPQv1xuICAgICAgICBjb25zdCB2aWV3cG9ydEhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgY29uc3QgZmF2UGFnZUhlaWdodCA9IHZpZXdwb3J0SGVpZ2h0IC0gaGVhZGVySGVpZ2h0IC0gZm9vdGVySGVpZ2h0IC0gMzI7XG4gICAgICAgIFxuICAgICAgICAvLyDQktGB0YLQsNC90L7QstC70Y7RlNC80L4g0LLQuNGB0L7RgtGDIC5mYXYtcGFnZVxuICAgICAgICBmYXZQYWdlLnN0eWxlLm1pbkhlaWdodCA9IGAke2ZhdlBhZ2VIZWlnaHR9cHhgO1xuICAgICAgICBmYXZQYWdlLnN0eWxlLm1heEhlaWdodCA9IGAke2ZhdlBhZ2VIZWlnaHR9cHhgO1xuICAgICAgICBcbiAgICAgICAgLy8g0JLRgdGC0LDQvdC+0LLQu9GO0ZTQvNC+INCy0LjRgdC+0YLRgyAuZnJhbWU6IC5mYXYtcGFnZSArIDJweFxuICAgICAgICBjb25zdCBmcmFtZUhlaWdodCA9IGZhdlBhZ2VIZWlnaHQgKyAyO1xuICAgICAgICBmcmFtZS5zdHlsZS5taW5IZWlnaHQgPSBgJHtmcmFtZUhlaWdodH1weGA7XG4gICAgICAgIGZyYW1lLnN0eWxlLm1heEhlaWdodCA9IGAke2ZyYW1lSGVpZ2h0fXB4YDtcbiAgICAgICAgXG4gICAgICAgIC8vINCS0YHRgtCw0L3QvtCy0LvRjtGU0LzQviBtYXJnaW4tdG9wINC00LvRjyAuc3RpY2t5LXdyYXA6INC90LXQs9Cw0YLQuNCy0L3QsCDQstC40YHQvtGC0LAgLmZhdi1wYWdlXG4gICAgICAgIHN0aWNreVdyYXAuc3R5bGUubWFyZ2luVG9wID0gYC0ke2ZhdlBhZ2VIZWlnaHR9cHhgO1xuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIGxldCBhdHRlbXB0cyA9IDA7XG4gICAgICAgIGNvbnN0IG1heEF0dGVtcHRzID0gMjA7XG4gICAgICAgIGNvbnN0IGF0dGVtcHRJbnRlcnZhbCA9IDUwO1xuXG4gICAgICAgIGZ1bmN0aW9uIHRyeURldGVjdFVzZXJJZCgpIHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuc3RvcmUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHdpbmRvdy5zdG9yZS5nZXRTdGF0ZSgpO1xuICAgICAgICAgICAgICAgIHVzZXJJZCA9IHN0YXRlLmF1dGguaXNBdXRob3JpemVkICYmIHN0YXRlLmF1dGguaWQgfHwgJyc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHdpbmRvdy5nX3VzZXJfaWQpIHtcbiAgICAgICAgICAgICAgICB1c2VySWQgPSB3aW5kb3cuZ191c2VyX2lkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcXVpY2tDaGVja0FuZFJlbmRlcigpIHtcbiAgICAgICAgICAgIC8vINCG0L3RltGG0ZbQsNC70ZbQt9GD0ZTQvNC+INCy0LjRgdC+0YLQuCDRgdGC0L7RgNGW0L3QutC4INC90LAg0L7RgdC90L7QstGWIHZpZXdwb3J0INGC0LAg0YXQtdC00LXRgNCwXG4gICAgICAgICAgICBpbml0UGFnZUhlaWdodCgpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpbml0R2FtZXNXZWVrKCk7XG4gICAgICAgICAgICBpbml0UHJvZ3Jlc3NCYXIoKTtcbiAgICAgICAgICAgIGluaXRQYXJ0aWNpcGF0ZUNhbnZhcygpO1xuICAgICAgICAgICAgaW5pdFNub3dmbGFrZXNDYW52YXMoKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoaGlkZUxvYWRlciwgMzAwKTtcblxuICAgICAgICAgICAgLy8g0J7QvdC+0LLQu9GO0ZTQvNC+INCy0LjRgdC+0YLQuCDQv9GA0Lgg0LfQvNGW0L3RliDRgNC+0LfQvNGW0YDRgyDQstGW0LrQvdCwXG4gICAgICAgICAgICBsZXQgcmVzaXplVGltZW91dDtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQocmVzaXplVGltZW91dCk7XG4gICAgICAgICAgICAgICAgcmVzaXplVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpbml0UGFnZUhlaWdodCgpO1xuICAgICAgICAgICAgICAgICAgICBpbml0UGFydGljaXBhdGVDYW52YXMoKTtcbiAgICAgICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwib3JpZW50YXRpb25jaGFuZ2VcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpbml0UGFnZUhlaWdodCgpO1xuICAgICAgICAgICAgICAgICAgICBpbml0UGFydGljaXBhdGVDYW52YXMoKTtcbiAgICAgICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIEZpeCBkcm9wZG93biBzY3JvbGwgaXNzdWUgLSBwcmV2ZW50IHBhZ2UgZnJvbSBzaGlmdGluZyB1cCB3aGVuIG9wZW5pbmcgZHJvcGRvd25cbiAgICAgICAgICAgIGNvbnN0IGRyb3Bkb3ducyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcm9wZG93bicpO1xuICAgICAgICAgICAgZHJvcGRvd25zLmZvckVhY2goKGRyb3Bkb3duKSA9PiB7XG4gICAgICAgICAgICAgICAgZHJvcGRvd24uYWRkRXZlbnRMaXN0ZW5lcigndG9nZ2xlJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub3Blbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRHJvcGRvd24gaXMgb3BlbmluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3VtbWFyeSA9IHRoaXMucXVlcnlTZWxlY3Rvcignc3VtbWFyeScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN1bW1hcnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBHZXQgc3VtbWFyeSBwb3NpdGlvbiByZWxhdGl2ZSB0byB2aWV3cG9ydFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN1bW1hcnlSZWN0ID0gc3VtbWFyeS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIHN1bW1hcnkgaXMgbmVhciB0aGUgdG9wIG9mIHZpZXdwb3J0ICh3aXRoaW4gMTAwcHggZnJvbSB0b3ApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN1bW1hcnlSZWN0LnRvcCA8IDEwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDYWxjdWxhdGUgaG93IG11Y2ggdG8gc2Nyb2xsIHRvIGtlZXAgc3VtbWFyeSB2aXNpYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRTY3JvbGxZID0gd2luZG93LnNjcm9sbFkgfHwgd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXRTY3JvbGxZID0gY3VycmVudFNjcm9sbFkgKyBzdW1tYXJ5UmVjdC50b3AgLSAxMjA7IC8vIDEyMHB4IG9mZnNldCBmcm9tIHRvcFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFVzZSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgZm9yIHNtb290aCBzY3JvbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiBNYXRoLm1heCgwLCB0YXJnZXRTY3JvbGxZKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHdhaXRGb3JVc2VySWQgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdHJ5RGV0ZWN0VXNlcklkKCk7XG4gICAgICAgICAgICAgICAgaWYgKHVzZXJJZCB8fCBhdHRlbXB0cyA+PSBtYXhBdHRlbXB0cykge1xuICAgICAgICAgICAgICAgICAgICBxdWlja0NoZWNrQW5kUmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGF0dGVtcHRzKys7XG4gICAgICAgICAgICB9LCBhdHRlbXB0SW50ZXJ2YWwpO1xuICAgICAgICB9KTtcblxuICAgICAgICBhd2FpdCB3YWl0Rm9yVXNlcklkO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvYWRUcmFuc2xhdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiByZXF1ZXN0KGAvbmV3LXRyYW5zbGF0ZXMvJHtsb2NhbGV9YClcbiAgICAgICAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgICAgIGkxOG5EYXRhID0ganNvbjtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGUoKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBtdXRhdGlvbk9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKG11dGF0aW9ucykge1xuICAgICAgICAgICAgICAgIC8vICAgICBtdXRhdGlvbk9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgdHJhbnNsYXRlKCk7XG4gICAgICAgICAgICAgICAgLy8gICAgIG11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXROb2RlLCB7IGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgICAgICAgICAvLyBtdXRhdGlvbk9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoYXJkY29yZVRlbm5pc1wiKSwge1xuICAgICAgICAgICAgICAgIC8vICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgLy8gICAgIHN1YnRyZWU6IHRydWVcbiAgICAgICAgICAgICAgICAvLyB9KTtcblxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVwb3J0RXJyb3IoZXJyKSB7XG4gICAgICAgIGNvbnN0IHJlcG9ydERhdGEgPSB7XG4gICAgICAgICAgICBvcmlnaW46IHdpbmRvdy5sb2NhdGlvbi5ocmVmLFxuICAgICAgICAgICAgdXNlcmlkOiB1c2VySWQsXG4gICAgICAgICAgICBlcnJvclRleHQ6IGVycj8uZXJyb3IgfHwgZXJyPy50ZXh0IHx8IGVycj8ubWVzc2FnZSB8fCAnVW5rbm93biBlcnJvcicsXG4gICAgICAgICAgICB0eXBlOiBlcnI/Lm5hbWUgfHwgJ1Vua25vd25FcnJvcicsXG4gICAgICAgICAgICBzdGFjazogZXJyPy5zdGFjayB8fCAnJ1xuICAgICAgICB9O1xuXG4gICAgICAgIGZldGNoKCdodHRwczovL2Zhdi1wcm9tLmNvbS9hcGktY21zL3JlcG9ydHMvYWRkJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcG9ydERhdGEpXG4gICAgICAgIH0pLmNhdGNoKGNvbnNvbGUud2Fybik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdHJhbnNsYXRlKCkge1xuICAgICAgICBjb25zdCBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRyYW5zbGF0ZV0nKVxuICAgICAgICBpZiAoZWxlbXMgJiYgZWxlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZih0cmFuc2xhdGVTdGF0ZSl7XG4gICAgICAgICAgICAgICAgZWxlbXMuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gZWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgICAgICAgICAgICAgICAgIGVsZW0uaW5uZXJIVE1MID0gaTE4bkRhdGFba2V5XSB8fCAnKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiAgIGtleTogICcgKyBrZXk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpMThuRGF0YVtrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRyYW5zbGF0aW9uIHdvcmtzIVwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChsb2NhbGUgPT09ICdlbicpIHtcbiAgICAgICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5hZGQoJ2VuJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmVmcmVzaExvY2FsaXplZENsYXNzKG1haW5QYWdlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWZyZXNoTG9jYWxpemVkQ2xhc3MoZWxlbWVudCkge1xuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IGxhbmcgb2YgWydocicsICdlbiddKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUobGFuZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGxvY2FsZSk7XG4gICAgfVxuXG5cblxuXG4gICAgZnVuY3Rpb24gcmVuZGVyVXNlcnMod2Vla051bSwgdXNlckRhdGEgPSBbXSkge1xuICAgICAgICB3ZWVrTnVtID0gTnVtYmVyKHdlZWtOdW0pO1xuICAgICAgICBjb25zdCB3ZWVrT2JqID0gdXNlckRhdGEuZmluZCh3ID0+IHcud2VlayA9PT0gd2Vla051bSk7XG4gICAgICAgIGlmICghd2Vla09iaiB8fCAhd2Vla09iai5kYXRhIHx8ICFBcnJheS5pc0FycmF5KHdlZWtPYmouZGF0YS51c2VycykpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ9Cd0LXQstGW0YDQvdCwINGB0YLRgNGD0LrRgtGD0YDQsCDQtNCw0L3QuNGFJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpc1N0YWdlRW5kZWQgPSB3ZWVrT2JqLmRhdGEuaXNTdGFnZUVuZGVkXG5cbiAgICAgICAgdXNlckRhdGEgPSB3ZWVrT2JqLmRhdGEudXNlcnM7XG5cbiAgICAgICAgY29uc3Qgd2lubmVyQWRkaXRpb25hbFByaXplID0gdXNlckRhdGEuZmluZCh1ID0+IHtcbiAgICAgICAgICAgIGlmKHUud2lubmVyID09PSB0cnVlKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRVc2VyID0gdXNlckRhdGEuZmluZCh1c2VyID0+IHVzZXIudXNlcmlkID09PSB1c2VySWQpO1xuXG4gICAgICAgIGlmKHVzZXJJZCAmJiAhY3VycmVudFVzZXIgJiYgaXNWZXJpZmllZFVzZXIpe1xuICAgICAgICAgICAgdXNlckRhdGEgPSBbLi4udXNlckRhdGEsIHt1c2VyaWQ6IHVzZXJJZCwgcG9pbnRzOiAwfV1cbiAgICAgICAgfVxuICAgICAgICBwb3B1bGF0ZVVzZXJzVGFibGUodXNlckRhdGEsIHVzZXJJZCwgd2Vla051bSwgY3VycmVudFVzZXIsIGlzVmVyaWZpZWRVc2VyLCBpc1N0YWdlRW5kZWQsIHdpbm5lckFkZGl0aW9uYWxQcml6ZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcG9wdWxhdGVVc2Vyc1RhYmxlKHVzZXJzLCBjdXJyZW50VXNlcklkLCB3ZWVrLCBjdXJyZW50VXNlciwgaXNWZXJpZmllZFVzZXIsIGlzU3RhZ2VFbmRlZCwgd2lubmVyQWRkaXRpb25hbFByaXplKSB7XG4gICAgICAgIGlmICghdXNlcnM/Lmxlbmd0aCkgcmV0dXJuO1xuICAgICAgICByZXN1bHRzVGFibGUuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHJlc3VsdHNUYWJsZU90aGVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBzZWNvbmRUYWJsZU90aGVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBzZWNvbmRUYWJsZS5pbm5lckhUTUwgPSAnJztcblxuXG4gICAgICAgIGNvbnN0IGlzVG9wQ3VycmVudFVzZXIgPSBjdXJyZW50VXNlciAmJiB1c2Vycy5zbGljZSgwLCAxMCkuc29tZSh1c2VyID0+IHVzZXIudXNlcmlkID09PSBjdXJyZW50VXNlcklkKTtcblxuICAgICAgICBjb25zdCB0b3BVc2Vyc0xlbmd0aCA9ICF1c2VySWQgfHwgaXNUb3BDdXJyZW50VXNlciAgPyAxMCA6IDEwO1xuXG4gICAgICAgIGNvbnN0IHRvcFVzZXJzID0gdXNlcnMuc2xpY2UoMCwgdG9wVXNlcnNMZW5ndGgpO1xuXG4gICAgICAgIHRvcFVzZXJzLmZvckVhY2godXNlciA9PiB7XG4gICAgICAgICAgICBkaXNwbGF5VXNlcih1c2VyLCB1c2VyLnVzZXJpZCA9PT0gY3VycmVudFVzZXJJZCwgcmVzdWx0c1RhYmxlLCB0b3BVc2VycywgaXNUb3BDdXJyZW50VXNlciwgd2Vlayk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZihpc1ZlcmlmaWVkVXNlciAmJiAhY3VycmVudFVzZXIpIHtcbiAgICAgICAgICAgIGRpc3BsYXlVc2VyKGN1cnJlbnRVc2VyLCB0cnVlLCByZXN1bHRzVGFibGVPdGhlciwgdXNlcnMsIGZhbHNlLCB3ZWVrKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaXNUb3BDdXJyZW50VXNlciAmJiBjdXJyZW50VXNlcikge1xuICAgICAgICAgICAgZGlzcGxheVVzZXIoY3VycmVudFVzZXIsIHRydWUsIHJlc3VsdHNUYWJsZU90aGVyLCB1c2VycywgZmFsc2UsIHdlZWspO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzcGxheVVzZXIodXNlciwgaXNDdXJyZW50VXNlciwgdGFibGUsIHVzZXJzLCBpc1RvcEN1cnJlbnRVc2VyLCB3ZWVrKSB7XG5cbiAgICAgICAgY29uc3QgcmVuZGVyUm93ID0gKHVzZXJEYXRhLCBvcHRpb25zID0ge30pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgaGlnaGxpZ2h0ID0gZmFsc2UsIG5laWdoYm9yID0gZmFsc2UgfSA9IG9wdGlvbnM7XG4gICAgICAgICAgICBjb25zdCB1c2VyUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoJ3RhYmxlX19yb3cnKTtcblxuICAgICAgICAgICAgY29uc3QgdXNlclBsYWNlID0gdXNlcnMuaW5kZXhPZih1c2VyRGF0YSkgKyAxO1xuICAgICAgICAgICAgY29uc3QgcHJpemVLZXkgPSBkZWJ1ZyA/IG51bGwgOiBnZXRQcml6ZVRyYW5zbGF0aW9uS2V5KHVzZXJQbGFjZSwgd2Vlayk7XG5cbiAgICAgICAgICAgIGlmICh1c2VyUGxhY2UgPD0gMykge1xuICAgICAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZChgcGxhY2Uke3VzZXJQbGFjZX1gKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGhpZ2hsaWdodCB8fCBpc0N1cnJlbnRVc2VyICYmICFuZWlnaGJvcikge1xuICAgICAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZCgneW91Jyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5laWdoYm9yKSB7XG4gICAgICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKCdfbmVpZ2hib3InKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdXNlclJvdy5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHt1c2VyUGxhY2UgPCAxMCA/ICcwJyArIHVzZXJQbGFjZSA6IHVzZXJQbGFjZX1cbiAgICAgICAgICAgICAgICAke2lzQ3VycmVudFVzZXIgJiYgIW5laWdoYm9yID8gJzxzcGFuIGNsYXNzPVwieW91XCI+JyArIHRyYW5zbGF0ZUtleShcInlvdVwiKSArICc8L3NwYW4+JyA6ICcnfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHtpc0N1cnJlbnRVc2VyICYmICFuZWlnaGJvciA/IHVzZXJEYXRhLnVzZXJpZCA6IG1hc2tVc2VySWQodXNlckRhdGEudXNlcmlkKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuICAgICAgICAgICAgICAgICR7TnVtYmVyKHVzZXJEYXRhLnBvaW50cykudG9GaXhlZCgyKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuICAgICAgICAgICAgICAgICR7cHJpemVLZXkgPyB0cmFuc2xhdGVLZXkocHJpemVLZXkpIDogJyAtICd9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcblxuICAgICAgICAgICAgdGFibGUuYXBwZW5kKHVzZXJSb3cpO1xuICAgICAgICB9O1xuICAgICAgICBpZiAoaXNDdXJyZW50VXNlciAmJiAhaXNUb3BDdXJyZW50VXNlcikge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB1c2Vycy5pbmRleE9mKHVzZXIpO1xuICAgICAgICAgICAgaWYgKHVzZXJzW2luZGV4IC0gMV0pIHtcbiAgICAgICAgICAgICAgICByZW5kZXJSb3codXNlcnNbaW5kZXggLSAxXSwgeyBuZWlnaGJvcjogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlbmRlclJvdyh1c2VyLCB7IGhpZ2hsaWdodDogdHJ1ZSB9KTtcbiAgICAgICAgICAgIGlmICh1c2Vyc1tpbmRleCArIDFdKSB7XG4gICAgICAgICAgICAgICAgcmVuZGVyUm93KHVzZXJzW2luZGV4ICsgMV0sIHsgbmVpZ2hib3I6IHRydWUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZW5kZXJSb3codXNlcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0UHJvZ3Jlc3NCYXIoKSB7XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9ncmVzc0JhckNhbnZhcycpO1xuICAgICAgICBjb25zdCBwZXJjZW50RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9ncmVzc1BlcmNlbnQnKTtcbiAgICAgICAgaWYgKCFjYW52YXMgfHwgIXBlcmNlbnRFbGVtZW50KSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIFxuICAgICAgICAvLyDQmtC+0L3RgdGC0LDQvdGC0LhcbiAgICAgICAgY29uc3QgYmFySGVpZ2h0ID0gMjA7IC8vINCS0LjRgdC+0YLQsCDQv9GA0L7Qs9GA0LXRgS3QsdCw0YDRg1xuICAgICAgICBjb25zdCBzZWdtZW50V2lkdGggPSA0OyAvLyDQqNC40YDQuNC90LAg0L7QtNC90L7Qs9C+INGB0LXQs9C80LXQvdGC0LBcbiAgICAgICAgY29uc3Qgc2VnbWVudEhlaWdodCA9IDE0OyAvLyDQktC40YHQvtGC0LAg0L7QtNC90L7Qs9C+INGB0LXQs9C80LXQvdGC0LBcbiAgICAgICAgY29uc3Qgc2VnbWVudEdhcCA9IDI7IC8vINCf0YDQvtC80ZbQttC+0Log0LzRltC2INGB0LXQs9C80LXQvdGC0LDQvNC4XG4gICAgICAgIGNvbnN0IHBhZGRpbmcgPSAyOyAvLyDQktGW0LTRgdGC0YPQvyDQstGW0LQg0LrRgNCw0ZfQslxuICAgICAgICBjb25zdCBzZWdtZW50UmFkaXVzID0gMTsgLy8gQm9yZGVyIHJhZGl1cyDQtNC70Y8g0YHQtdCz0LzQtdC90YLRltCyXG4gICAgICAgIFxuICAgICAgICAvLyDQn9Cw0YDQsNC80LXRgtGA0Lgg0LDQvdGW0LzQsNGG0ZbRlyDQt9Cw0LLQsNC90YLQsNC20LXQvdC90Y9cbiAgICAgICAgbGV0IGN1cnJlbnRQcm9ncmVzcyA9IDE7IC8vINCf0L7Rh9C40L3QsNGU0LzQviDQtyAxJVxuICAgICAgICBjb25zdCB0YXJnZXRQcm9ncmVzcyA9IDEwMDsgLy8g0KbRltC70YzQvtCy0LjQuSDQv9GA0L7Qs9GA0LXRgVxuICAgICAgICBjb25zdCBsb2FkaW5nRHVyYXRpb24gPSAzMDAwOyAvLyDQotGA0LjQstCw0LvRltGB0YLRjCDQt9Cw0LLQsNC90YLQsNC20LXQvdC90Y86IDMg0YHQtdC60YPQvdC00LhcbiAgICAgICAgbGV0IHN0YXJ0VGltZSA9IERhdGUubm93KCk7XG4gICAgICAgIGxldCBhbmltYXRpb25JZCA9IG51bGw7XG4gICAgICAgIGxldCBtYXhTZWdtZW50cyA9IDA7XG4gICAgICAgIGxldCBpc0xvYWRpbmdDb21wbGV0ZSA9IGZhbHNlO1xuICAgICAgICBcbiAgICAgICAgZnVuY3Rpb24gcmVzaXplQ2FudmFzKCkge1xuICAgICAgICAgICAgLy8g0J7RgtGA0LjQvNGD0ZTQvNC+INGA0L7Qt9C80ZbRgNC4INC60L7QvdGC0LXQudC90LXRgNCwXG4gICAgICAgICAgICBjb25zdCBjb250YWluZXIgPSBjYW52YXMucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lcldpZHRoID0gY29udGFpbmVyLm9mZnNldFdpZHRoIHx8IDc2ODtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0JLRgdGC0LDQvdC+0LLQu9GO0ZTQvNC+INGA0L7Qt9C80ZbRgNC4IGNhbnZhc1xuICAgICAgICAgICAgY2FudmFzLndpZHRoID0gY29udGFpbmVyV2lkdGg7XG4gICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gYmFySGVpZ2h0O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQoNC+0LfRgNCw0YXQvtCy0YPRlNC80L4g0LrRltC70YzQutGW0YHRgtGMINGB0LXQs9C80LXQvdGC0ZbQsiwg0YnQviDQv9C+0LzRltGB0YLRj9GC0YzRgdGPXG4gICAgICAgICAgICBjb25zdCBhdmFpbGFibGVXaWR0aCA9IGNvbnRhaW5lcldpZHRoIC0gKHBhZGRpbmcgKiAyKTtcbiAgICAgICAgICAgIGNvbnN0IHNlZ21lbnRXaXRoR2FwID0gc2VnbWVudFdpZHRoICsgc2VnbWVudEdhcDtcbiAgICAgICAgICAgIG1heFNlZ21lbnRzID0gTWF0aC5mbG9vcihhdmFpbGFibGVXaWR0aCAvIHNlZ21lbnRXaXRoR2FwKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0J/QtdGA0LXQvNCw0LvRjNC+0LLRg9GU0LzQviDQtyDQv9C+0YLQvtGH0L3QuNC8INC/0YDQvtCz0YDQtdGB0L7QvFxuICAgICAgICAgICAgaWYgKGN1cnJlbnRQcm9ncmVzcyA+IDApIHtcbiAgICAgICAgICAgICAgICBkcmF3UHJvZ3Jlc3NCYXIoY3VycmVudFByb2dyZXNzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZnVuY3Rpb24gZHJhd1Byb2dyZXNzQmFyKHByb2dyZXNzKSB7XG4gICAgICAgICAgICAvLyDQntGH0LjRidCw0ZTQvNC+IGNhbnZhc1xuICAgICAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQnNCw0LvRjtGU0LzQviDRgNCw0LzQutGDICjQsdGW0LvQuNC5INC/0YDRj9C80L7QutGD0YLQvdC40LopXG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnI0ZGRkZGRic7XG4gICAgICAgICAgICBjdHgubGluZVdpZHRoID0gMTtcbiAgICAgICAgICAgIGN0eC5zdHJva2VSZWN0KDAuNSwgMC41LCBjYW52YXMud2lkdGggLSAxLCBjYW52YXMuaGVpZ2h0IC0gMSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCg0L7Qt9GA0LDRhdC+0LLRg9GU0LzQviDQutGW0LvRjNC60ZbRgdGC0Ywg0LfQsNC/0L7QstC90LXQvdC40YUg0YHQtdCz0LzQtdC90YLRltCyXG4gICAgICAgICAgICBjb25zdCBmaWxsZWRTZWdtZW50cyA9IE1hdGguZmxvb3IoKHByb2dyZXNzIC8gMTAwKSAqIG1heFNlZ21lbnRzKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0JzQsNC70Y7RlNC80L4g0LfQsNC/0L7QstC90LXQvdGWINGB0LXQs9C80LXQvdGC0Lgg0Lcg0LfQsNC+0LrRgNGD0LPQu9C10L3QuNC80Lgg0LrRg9GC0LDQvNC4XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gJyNGRkZGRkYnO1xuICAgICAgICAgICAgY29uc3QgY2VudGVyWSA9IChiYXJIZWlnaHQgLSBzZWdtZW50SGVpZ2h0KSAvIDI7IC8vINCS0LXRgNGC0LjQutCw0LvRjNC90LUg0YbQtdC90YLRgNGD0LLQsNC90L3Rj1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbGxlZFNlZ21lbnRzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCB4ID0gcGFkZGluZyArIGkgKiAoc2VnbWVudFdpZHRoICsgc2VnbWVudEdhcCk7XG4gICAgICAgICAgICAgICAgY29uc3QgeSA9IGNlbnRlclk7XG5cbiAgICAgICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgaWYgKGN0eC5yb3VuZFJlY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g0KHRg9GH0LDRgdC90LjQuSDQvNC10YLQvtC0ICjQv9GW0LTRgtGA0LjQvNGD0ZTRgtGM0YHRjyDQsiDQvdC+0LLQuNGFINCx0YDQsNGD0LfQtdGA0LDRhSlcbiAgICAgICAgICAgICAgICAgICAgY3R4LnJvdW5kUmVjdCh4LCB5LCBzZWdtZW50V2lkdGgsIHNlZ21lbnRIZWlnaHQsIHNlZ21lbnRSYWRpdXMpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEZhbGxiYWNrINC00LvRjyDRgdGC0LDRgNC40YUg0LHRgNCw0YPQt9C10YDRltCyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHIgPSBzZWdtZW50UmFkaXVzO1xuICAgICAgICAgICAgICAgICAgICBjdHgubW92ZVRvKHggKyByLCB5KTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmxpbmVUbyh4ICsgc2VnbWVudFdpZHRoIC0gciwgeSk7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHggKyBzZWdtZW50V2lkdGgsIHksIHggKyBzZWdtZW50V2lkdGgsIHkgKyByKTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmxpbmVUbyh4ICsgc2VnbWVudFdpZHRoLCB5ICsgc2VnbWVudEhlaWdodCAtIHIpO1xuICAgICAgICAgICAgICAgICAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4ICsgc2VnbWVudFdpZHRoLCB5ICsgc2VnbWVudEhlaWdodCwgeCArIHNlZ21lbnRXaWR0aCAtIHIsIHkgKyBzZWdtZW50SGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmxpbmVUbyh4ICsgciwgeSArIHNlZ21lbnRIZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4LCB5ICsgc2VnbWVudEhlaWdodCwgeCwgeSArIHNlZ21lbnRIZWlnaHQgLSByKTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmxpbmVUbyh4LCB5ICsgcik7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHgsIHksIHggKyByLCB5KTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBmdW5jdGlvbiB1cGRhdGVQcm9ncmVzcygpIHtcbiAgICAgICAgICAgIGNvbnN0IGVsYXBzZWQgPSBEYXRlLm5vdygpIC0gc3RhcnRUaW1lO1xuICAgICAgICAgICAgbGV0IHByb2dyZXNzID0gMSArIChlbGFwc2VkIC8gbG9hZGluZ0R1cmF0aW9uKSAqIDk5OyAvLyDQktGW0LQgMSUg0LTQviAxMDAlXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCe0LHQvNC10LbRg9GU0LzQviDQv9GA0L7Qs9GA0LXRgSDQtNC+IDEwMCVcbiAgICAgICAgICAgIGlmIChwcm9ncmVzcyA+PSB0YXJnZXRQcm9ncmVzcykge1xuICAgICAgICAgICAgICAgIHByb2dyZXNzID0gdGFyZ2V0UHJvZ3Jlc3M7XG4gICAgICAgICAgICAgICAgaXNMb2FkaW5nQ29tcGxldGUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjdXJyZW50UHJvZ3Jlc3MgPSBwcm9ncmVzcztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0J7QvdC+0LLQu9GO0ZTQvNC+INCy0ZbQtNC+0LHRgNCw0LbQtdC90L3Rj1xuICAgICAgICAgICAgZHJhd1Byb2dyZXNzQmFyKHByb2dyZXNzKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0J7QvdC+0LLQu9GO0ZTQvNC+INCy0ZbQtNGB0L7RgtC60LggKNGC0ZbQu9GM0LrQuCDRhtGW0LvRliDRh9C40YHQu9CwKVxuICAgICAgICAgICAgY29uc3QgcGVyY2VudCA9IE1hdGguZmxvb3IocHJvZ3Jlc3MpO1xuICAgICAgICAgICAgcGVyY2VudEVsZW1lbnQudGV4dENvbnRlbnQgPSBwZXJjZW50ICsgJyUnO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQn9GA0L7QtNC+0LLQttGD0ZTQvNC+INCw0L3RltC80LDRhtGW0Y4g0LTQviDQt9Cw0LLQtdGA0YjQtdC90L3RjyDQt9Cw0LLQsNC90YLQsNC20LXQvdC90Y9cbiAgICAgICAgICAgIGlmICghaXNMb2FkaW5nQ29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICBhbmltYXRpb25JZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGVQcm9ncmVzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vINCG0L3RltGG0ZbQsNC70ZbQt9GD0ZTQvNC+INGA0L7Qt9C80ZbRgNC4IGNhbnZhc1xuICAgICAgICByZXNpemVDYW52YXMoKTtcbiAgICAgICAgXG4gICAgICAgIC8vINCe0LHRgNC+0LHQutCwINC30LzRltC90Lgg0YDQvtC30LzRltGA0YMg0LLRltC60L3QsFxuICAgICAgICBsZXQgcmVzaXplVGltZW91dDtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChyZXNpemVUaW1lb3V0KTtcbiAgICAgICAgICAgIHJlc2l6ZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICByZXNpemVDYW52YXMoKTtcbiAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgLy8g0IbQvdGW0YbRltCw0LvRltC30LDRhtGW0Y8g0LDQvdGW0LzQsNGG0ZbRlyDQv9C+0Y/QstC4INGW0LrQvtC90L7QulxuICAgICAgICBpbml0SWNvbnNBbmltYXRpb24obG9hZGluZ0R1cmF0aW9uKTtcbiAgICAgICAgXG4gICAgICAgIC8vINCX0LDQv9GD0YHQutCw0ZTQvNC+INCw0L3RltC80LDRhtGW0Y4g0Lcg0L3QtdCy0LXQu9C40LrQvtGOINC30LDRgtGA0LjQvNC60L7RjiDQtNC70Y8g0LrQvtGA0LXQutGC0L3QvtCz0L4g0YDQvtC30YDQsNGF0YPQvdC60YMg0YDQvtC30LzRltGA0ZbQslxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICByZXNpemVDYW52YXMoKTtcbiAgICAgICAgICAgICAgICBzdGFydFRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZVByb2dyZXNzKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8g0JDQvdGW0LzQsNGG0ZbRjyDQv9C+0Y/QstC4INGW0LrQvtC90L7QuiDQv9C+INGH0LXRgNC30ZYg0L/RltC0INGH0LDRgSDQt9Cw0LLQsNC90YLQsNC20LXQvdC90Y9cbiAgICBmdW5jdGlvbiBpbml0SWNvbnNBbmltYXRpb24oZHVyYXRpb24pIHtcbiAgICAgICAgY29uc3QgaWNvbnMgPSBbXG4gICAgICAgICAgICAnLndlbGNvbWVfX2RlY29yLWl0ZW0uX2dhbWVwYWQnLFxuICAgICAgICAgICAgJy53ZWxjb21lX19kZWNvci1pdGVtLl9jaGlwJyxcbiAgICAgICAgICAgICcud2VsY29tZV9fZGVjb3ItaXRlbS5fY29pbicsXG4gICAgICAgICAgICAnLndlbGNvbWVfX2RlY29yLWl0ZW0uX2JhbGwnLFxuICAgICAgICAgICAgJy53ZWxjb21lX19kZWNvci1pdGVtLl9jdXAnLFxuICAgICAgICAgICAgJy53ZWxjb21lX19kZWNvci1pdGVtLl9jdWJlJyxcbiAgICAgICAgICAgICcud2VsY29tZV9fZGVjb3ItaXRlbS5fZ2xvYmUnXG4gICAgICAgIF07XG5cbiAgICAgICAgLy8g0JfQsdC10YDRltCz0LDRlNC80L4g0L7RgNC40LPRltC90LDQu9GM0L3RliB0cmFuc2Zvcm0g0LTQu9GPINC60L7QttC90L7RlyDRltC60L7QvdC60LhcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxUcmFuc2Zvcm1zID0gbmV3IE1hcCgpO1xuXG4gICAgICAgIC8vINCh0L/QvtGH0LDRgtC60YMg0L/RgNC40YXQvtCy0YPRlNC80L4g0LLRgdGWINGW0LrQvtC90LrQuFxuICAgICAgICBpY29ucy5mb3JFYWNoKHNlbGVjdG9yID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICAgICAgICAgIGlmIChpY29uKSB7XG4gICAgICAgICAgICAgICAgLy8g0JfQsdC10YDRltCz0LDRlNC80L4g0L7RgNC40LPRltC90LDQu9GM0L3QuNC5IHRyYW5zZm9ybSAo0Y/QutGJ0L4g0ZQgcm90YXRlKVxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShpY29uKTtcbiAgICAgICAgICAgICAgICBjb25zdCBvcmlnaW5hbFRyYW5zZm9ybSA9IGNvbXB1dGVkU3R5bGUudHJhbnNmb3JtO1xuICAgICAgICAgICAgICAgIG9yaWdpbmFsVHJhbnNmb3Jtcy5zZXQoc2VsZWN0b3IsIG9yaWdpbmFsVHJhbnNmb3JtKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyDQktGB0YLQsNC90L7QstC70Y7RlNC80L4g0L/QvtGH0LDRgtC60L7QstC40Lkg0YHRgtCw0L1cbiAgICAgICAgICAgICAgICBpY29uLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgICAgICAgICAgICAgaWNvbi5zdHlsZS50cmFuc2l0aW9uID0gJ29wYWNpdHkgMC40cyBlYXNlLCB0cmFuc2Zvcm0gMC40cyBlYXNlJztcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyDQktGB0YLQsNC90L7QstC70Y7RlNC80L4gc2NhbGUg0Lcg0LfQsdC10YDQtdC20LXQvdC90Y/QvCByb3RhdGVcbiAgICAgICAgICAgICAgICBpZiAob3JpZ2luYWxUcmFuc2Zvcm0gJiYgb3JpZ2luYWxUcmFuc2Zvcm0gIT09ICdub25lJykge1xuICAgICAgICAgICAgICAgICAgICBpY29uLnN0eWxlLnRyYW5zZm9ybSA9IG9yaWdpbmFsVHJhbnNmb3JtICsgJyBzY2FsZSgwLjUpJztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpY29uLnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZSgwLjUpJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vINCg0L7Qt9GA0LDRhdC+0LLRg9GU0LzQviDRltC90YLQtdGA0LLQsNC7INC80ZbQtiDQv9C+0Y/QstC+0Y4g0ZbQutC+0L3QvtC6XG4gICAgICAgIGNvbnN0IGljb25Db3VudCA9IGljb25zLmxlbmd0aDtcbiAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBkdXJhdGlvbiAvIGljb25Db3VudDsgLy8g0KDRltCy0L3QvtC80ZbRgNC90L4g0YDQvtC30L/QvtC00ZbQu9GP0ZTQvNC+INC/0L4g0YfQsNGB0YNcblxuICAgICAgICAvLyDQn9C+0LrQsNC30YPRlNC80L4g0ZbQutC+0L3QutC4INC/0L4g0YfQtdGA0LfRllxuICAgICAgICBpY29ucy5mb3JFYWNoKChzZWxlY3RvciwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICAgICAgICAgICAgICBpZiAoaWNvbikge1xuICAgICAgICAgICAgICAgICAgICBpY29uLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgICAgICAgICAgICAgIC8vINCS0ZbQtNC90L7QstC70Y7RlNC80L4g0L7RgNC40LPRltC90LDQu9GM0L3QuNC5IHRyYW5zZm9ybVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvcmlnaW5hbFRyYW5zZm9ybSA9IG9yaWdpbmFsVHJhbnNmb3Jtcy5nZXQoc2VsZWN0b3IpO1xuICAgICAgICAgICAgICAgICAgICBpZiAob3JpZ2luYWxUcmFuc2Zvcm0gJiYgb3JpZ2luYWxUcmFuc2Zvcm0gIT09ICdub25lJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbi5zdHlsZS50cmFuc2Zvcm0gPSBvcmlnaW5hbFRyYW5zZm9ybTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb24uc3R5bGUudHJhbnNmb3JtID0gJ3NjYWxlKDEpJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIGluZGV4ICogaW50ZXJ2YWwpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyDQl9C80ZbQvdC90ZYg0LTQu9GPINC30LHQtdGA0ZbQs9Cw0L3QvdGPINC/0L7RgdC40LvQsNC90Ywg0L3QsCBjYW52YXMg0YLQsCDQtNCw0L3RliDQtNC70Y8g0L7QsdGA0L7QsdC90LjQutGW0LIg0L/QvtC00ZbQuVxuICAgIGxldCBwYXJ0aWNpcGF0ZUNhbnZhcyA9IG51bGw7XG4gICAgbGV0IHBhcnRpY2lwYXRlRGVlcnMgPSBbXTtcbiAgICBsZXQgcGFydGljaXBhdGVEZWVyV2lkdGggPSAwO1xuICAgIGxldCBwYXJ0aWNpcGF0ZURlZXJIZWlnaHQgPSAwO1xuICAgIGxldCBjYW52YXNDbGlja0hhbmRsZXJzQXR0YWNoZWQgPSBmYWxzZTtcbiAgICBcbiAgICAvLyDQl9C80ZbQvdC90ZYg0LTQu9GPINCy0ZbQtNGB0YLQtdC20LXQvdC90Y8gdG91Y2gg0L/QvtC00ZbQuVxuICAgIGxldCB0b3VjaFN0YXJ0WCA9IDA7XG4gICAgbGV0IHRvdWNoU3RhcnRZID0gMDtcblxuICAgIC8vINCe0LHRgNC+0LHQvdC40Log0LrQu9GW0LrRgyDQv9C+IGNhbnZhc1xuICAgIGZ1bmN0aW9uIGhhbmRsZVBhcnRpY2lwYXRlQ2FudmFzQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgaWYgKCFwYXJ0aWNpcGF0ZUNhbnZhcyB8fCAhcGFydGljaXBhdGVEZWVycy5sZW5ndGgpIHJldHVybjtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHJlY3QgPSBwYXJ0aWNpcGF0ZUNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3Qgc2NhbGVYID0gcGFydGljaXBhdGVDYW52YXMud2lkdGggLyByZWN0LndpZHRoO1xuICAgICAgICBjb25zdCBzY2FsZVkgPSBwYXJ0aWNpcGF0ZUNhbnZhcy5oZWlnaHQgLyByZWN0LmhlaWdodDtcbiAgICAgICAgXG4gICAgICAgIC8vINCe0YLRgNC40LzRg9GU0LzQviDQutC+0L7RgNC00LjQvdCw0YLQuCDQutC70ZbQutGDINCy0ZbQtNC90L7RgdC90L4gY2FudmFzXG4gICAgICAgIGNvbnN0IGNsaWVudFggPSBldmVudC5jbGllbnRYO1xuICAgICAgICBjb25zdCBjbGllbnRZID0gZXZlbnQuY2xpZW50WTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGNsaWNrWCA9IChjbGllbnRYIC0gcmVjdC5sZWZ0KSAqIHNjYWxlWDtcbiAgICAgICAgY29uc3QgY2xpY2tZID0gKGNsaWVudFkgLSByZWN0LnRvcCkgKiBzY2FsZVk7XG4gICAgICAgIFxuICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNGP0ZTQvNC+INGH0Lgg0LrQu9GW0Log0L/QvtGC0YDQsNC/0LjQsiDQvdCwINGP0LrQvtCz0L7RgdGMINC+0LvQtdC90Y9cbiAgICAgICAgcGFydGljaXBhdGVEZWVycy5mb3JFYWNoKGRlZXIgPT4ge1xuICAgICAgICAgICAgaWYgKGRlZXIuaXNQb2ludEluc2lkZShjbGlja1gsIGNsaWNrWSwgcGFydGljaXBhdGVEZWVyV2lkdGgsIHBhcnRpY2lwYXRlRGVlckhlaWdodCkpIHtcbiAgICAgICAgICAgICAgICBkZWVyLmhhbmRsZUNsaWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICAvLyDQntCx0YDQvtCx0L3QuNC6IHRvdWNoc3RhcnQg0LTQu9GPINCy0ZbQtNGB0YLQtdC20LXQvdC90Y8g0L/QvtGH0LDRgtC60YMg0LTQvtGC0LjQutGDXG4gICAgZnVuY3Rpb24gaGFuZGxlUGFydGljaXBhdGVDYW52YXNUb3VjaFN0YXJ0KGV2ZW50KSB7XG4gICAgICAgIGlmICghcGFydGljaXBhdGVDYW52YXMgfHwgIXBhcnRpY2lwYXRlRGVlcnMubGVuZ3RoKSByZXR1cm47XG4gICAgICAgIFxuICAgICAgICBjb25zdCB0b3VjaCA9IGV2ZW50LnRvdWNoZXNbMF07XG4gICAgICAgIGlmICghdG91Y2gpIHJldHVybjtcbiAgICAgICAgXG4gICAgICAgIC8vINCX0LHQtdGA0ZbQs9Cw0ZTQvNC+INC60L7QvtGA0LTQuNC90LDRgtC4INC/0L7Rh9Cw0YLQutGDINC00L7RgtC40LrRg1xuICAgICAgICB0b3VjaFN0YXJ0WCA9IHRvdWNoLmNsaWVudFg7XG4gICAgICAgIHRvdWNoU3RhcnRZID0gdG91Y2guY2xpZW50WTtcbiAgICB9XG4gICAgXG4gICAgLy8g0J7QsdGA0L7QsdC90LjQuiB0b3VjaGVuZCDQtNC70Y8g0LLQuNC30L3QsNGH0LXQvdC90Y8g0YfQuCDRhtC1INGC0LDQvyDRh9C4INGB0LrRgNC+0LtcbiAgICBmdW5jdGlvbiBoYW5kbGVQYXJ0aWNpcGF0ZUNhbnZhc1RvdWNoRW5kKGV2ZW50KSB7XG4gICAgICAgIGlmICghcGFydGljaXBhdGVDYW52YXMgfHwgIXBhcnRpY2lwYXRlRGVlcnMubGVuZ3RoKSByZXR1cm47XG4gICAgICAgIFxuICAgICAgICBjb25zdCB0b3VjaCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdO1xuICAgICAgICBpZiAoIXRvdWNoKSByZXR1cm47XG4gICAgICAgIFxuICAgICAgICAvLyDQoNC+0LfRgNCw0YXQvtCy0YPRlNC80L4g0LLRltC00YHRgtCw0L3RjCDQvNGW0LYgdG91Y2hzdGFydCDRgtCwIHRvdWNoZW5kXG4gICAgICAgIGNvbnN0IGRlbHRhWCA9IE1hdGguYWJzKHRvdWNoLmNsaWVudFggLSB0b3VjaFN0YXJ0WCk7XG4gICAgICAgIGNvbnN0IGRlbHRhWSA9IE1hdGguYWJzKHRvdWNoLmNsaWVudFkgLSB0b3VjaFN0YXJ0WSk7XG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KGRlbHRhWCAqIGRlbHRhWCArIGRlbHRhWSAqIGRlbHRhWSk7XG4gICAgICAgIFxuICAgICAgICAvLyDQr9C60YnQviDQstGW0LTRgdGC0LDQvdGMINCx0ZbQu9GM0YjQtSAxMHB4IC0g0YbQtSDRgdC60YDQvtC7LCDQvdC1INC+0LHRgNC+0LHQu9GP0ZTQvNC+XG4gICAgICAgIGlmIChkaXN0YW5jZSA+IDEwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vINCv0LrRidC+INCy0ZbQtNGB0YLQsNC90Ywg0LzQtdC90YjQtSDQsNCx0L4g0LTQvtGA0ZbQstC90Y7RlCAxMHB4IC0g0YbQtSDRgtCw0L8sINC+0LHRgNC+0LHQu9GP0ZTQvNC+XG4gICAgICAgIGNvbnN0IHJlY3QgPSBwYXJ0aWNpcGF0ZUNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3Qgc2NhbGVYID0gcGFydGljaXBhdGVDYW52YXMud2lkdGggLyByZWN0LndpZHRoO1xuICAgICAgICBjb25zdCBzY2FsZVkgPSBwYXJ0aWNpcGF0ZUNhbnZhcy5oZWlnaHQgLyByZWN0LmhlaWdodDtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGNsaWNrWCA9ICh0b3VjaC5jbGllbnRYIC0gcmVjdC5sZWZ0KSAqIHNjYWxlWDtcbiAgICAgICAgY29uc3QgY2xpY2tZID0gKHRvdWNoLmNsaWVudFkgLSByZWN0LnRvcCkgKiBzY2FsZVk7XG4gICAgICAgIFxuICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNGP0ZTQvNC+INGH0Lgg0YLQsNC/INC/0L7RgtGA0LDQv9C40LIg0L3QsCDRj9C60L7Qs9C+0YHRjCDQvtC70LXQvdGPXG4gICAgICAgIHBhcnRpY2lwYXRlRGVlcnMuZm9yRWFjaChkZWVyID0+IHtcbiAgICAgICAgICAgIGlmIChkZWVyLmlzUG9pbnRJbnNpZGUoY2xpY2tYLCBjbGlja1ksIHBhcnRpY2lwYXRlRGVlcldpZHRoLCBwYXJ0aWNpcGF0ZURlZXJIZWlnaHQpKSB7XG4gICAgICAgICAgICAgICAgZGVlci5oYW5kbGVDbGljaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0UGFydGljaXBhdGVDYW52YXMoKSB7XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwYXJ0aWNpcGF0ZUNhbnZhcycpO1xuICAgICAgICBpZiAoIWNhbnZhcykgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICBcbiAgICAgICAgLy8g0J7QvdC+0LLQu9GO0ZTQvNC+INC/0L7RgdC40LvQsNC90L3RjyDQvdCwIGNhbnZhc1xuICAgICAgICBwYXJ0aWNpcGF0ZUNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgXG4gICAgICAgIC8vINCS0LjQt9C90LDRh9Cw0ZTQvNC+INGH0Lgg0LXQutGA0LDQvSA8PSAxMDUwcHhcbiAgICAgICAgY29uc3QgaXNNb2JpbGUgPSB3aW5kb3cuaW5uZXJXaWR0aCA8PSAxMDUwO1xuXG4gICAgICAgIC8vINCa0L7QvdGB0YLQsNC90YLQuCDQtNC70Y8g0YDQvtC30LzRltGA0ZbQsiDRgtCwINC/0L7Qt9C40YbRltC5XG4gICAgICAgIGNvbnN0IENBTlZBU19XSURUSCA9IGlzTW9iaWxlID8gNzY4IDogMTM2NjtcbiAgICAgICAgY29uc3QgQ0FOVkFTX0hFSUdIVCA9IGlzTW9iaWxlID8gNDcwIDogNTAwO1xuICAgICAgICBcbiAgICAgICAgLy8g0JLRgdGC0LDQvdC+0LLQu9GO0ZTQvNC+INGA0L7Qt9C80ZbRgNC4IGNhbnZhc1xuICAgICAgICBjYW52YXMud2lkdGggPSBDQU5WQVNfV0lEVEg7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBDQU5WQVNfSEVJR0hUO1xuICAgICAgICBcbiAgICAgICAgLy8g0KTRltC60YHQvtCy0LDQvdGWINGA0L7Qt9C80ZbRgNC4INC00LXRgNC10LLQsCAo0L3QtSDQvNCw0YHRiNGC0LDQsdGD0Y7RgtGM0YHRjylcbiAgICAgICAgY29uc3QgVFJFRV9XSURUSCA9IDE3NTtcbiAgICAgICAgY29uc3QgVFJFRV9IRUlHSFQgPSAxNjc7XG4gICAgICAgIFxuICAgICAgICAvLyDQn9Cw0YDQsNC80LXRgtGA0Lgg0YHQv9GA0LDQudGCLdC70LjRgdGC0LBcbiAgICAgICAgY29uc3QgRlJBTUVTX1BFUl9ST1cgPSA1OyAvLyA1INC60LDQtNGA0ZbQsiDQsiDRgNGP0LTQutGDXG4gICAgICAgIGNvbnN0IFRPVEFMX1JPV1MgPSAyOyAvLyAyINGA0Y/QtNC4XG4gICAgICAgIGNvbnN0IFNQUklURV9TSEVFVF9XSURUSCA9IDExMDA7IC8vINCg0LXQsNC70YzQvdCwINGI0LjRgNC40L3QsCDRgdC/0YDQsNC50YIt0LvQuNGB0YLQsFxuICAgICAgICBjb25zdCBTUFJJVEVfU0hFRVRfSEVJR0hUID0gNDY4OyAvLyDQoNC10LDQu9GM0L3QsCDQstC40YHQvtGC0LAg0YHQv9GA0LDQudGCLdC70LjRgdGC0LBcbiAgICAgICAgXG4gICAgICAgIC8vINCg0L7Qt9C80ZbRgNC4INC+0LTQvdC+0LPQviDQutCw0LTRgNGDINCyINGB0L/RgNCw0LnRgi3Qu9C40YHRgtGWXG4gICAgICAgIGNvbnN0IEZSQU1FX1dJRFRIID0gTWF0aC5mbG9vcihTUFJJVEVfU0hFRVRfV0lEVEggLyBGUkFNRVNfUEVSX1JPVyk7IC8vIDIyMHB4XG4gICAgICAgIGNvbnN0IEZSQU1FX0hFSUdIVCA9IE1hdGguZmxvb3IoU1BSSVRFX1NIRUVUX0hFSUdIVCAvIFRPVEFMX1JPV1MpOyAvLyAyMzRweFxuICAgICAgICBcbiAgICAgICAgLy8g0KTRltC60YHQvtCy0LDQvdGWINGA0L7Qt9C80ZbRgNC4INC+0LvQtdC90Y8g0L3QsCBjYW52YXNcbiAgICAgICAgY29uc3QgREVFUl9TQ0FMRSA9IDAuNTsgLy8g0JzQsNGB0YjRgtCw0LEg0LTQu9GPINCy0ZbQtNC+0LHRgNCw0LbQtdC90L3RjyDQvdCwIGNhbnZhc1xuICAgICAgICBjb25zdCBCQVNFX0RFRVJfV0lEVEggPSBNYXRoLmZsb29yKEZSQU1FX1dJRFRIICogREVFUl9TQ0FMRSk7IFxuICAgICAgICBjb25zdCBCQVNFX0RFRVJfSEVJR0hUID0gTWF0aC5mbG9vcihGUkFNRV9IRUlHSFQgKiBERUVSX1NDQUxFKTtcbiAgICAgICAgXG4gICAgICAgIC8vINCX0LzQtdC90YjRg9GU0LzQviDRgNC+0LfQvNGW0YDQuCDQvtC70LXQvdGW0LIg0L3QsCAxNSUg0LTQu9GPINC80L7QsdGW0LvRjNC90LjRhSDQv9GA0LjRgdGC0YDQvtGX0LJcbiAgICAgICAgbGV0IERFRVJfV0lEVEggPSBCQVNFX0RFRVJfV0lEVEg7XG4gICAgICAgIGxldCBERUVSX0hFSUdIVCA9IEJBU0VfREVFUl9IRUlHSFQ7XG4gICAgICAgIGxldCBkZWVySGVpZ2h0T2Zmc2V0ID0gMDsgLy8g0JfQvNGW0YnQtdC90L3RjyDQtNC70Y8g0LfQsdC10YDQtdC20LXQvdC90Y8g0L/QvtC30LjRhtGW0Zcg0LLRltC00L3QvtGB0L3QviDQvdC40LbQvdGM0L7Qs9C+INC60YDQsNGOXG4gICAgICAgIFxuICAgICAgICBpZiAoaXNNb2JpbGUpIHtcbiAgICAgICAgICAgIERFRVJfV0lEVEggPSBNYXRoLmZsb29yKEJBU0VfREVFUl9XSURUSCAqIC44KTtcbiAgICAgICAgICAgIERFRVJfSEVJR0hUID0gTWF0aC5mbG9vcihCQVNFX0RFRVJfSEVJR0hUICogLjgpO1xuICAgICAgICAgICAgLy8g0KDQvtC30YDQsNGF0L7QstGD0ZTQvNC+INC30LzRltGJ0LXQvdC90Y8g0LTQu9GPINC30LHQtdGA0LXQttC10L3QvdGPINC/0L7Qt9C40YbRltGXINCy0ZbQtNC90L7RgdC90L4g0L3QuNC20L3RjNC+0LPQviDQutGA0LDRjlxuICAgICAgICAgICAgZGVlckhlaWdodE9mZnNldCA9IEJBU0VfREVFUl9IRUlHSFQgLSBERUVSX0hFSUdIVDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vINCf0L7Qt9C40YbRltGXINC10LvQtdC80LXQvdGC0ZbQslxuICAgICAgICBsZXQgdHJlZVgsIHRyZWVZO1xuICAgICAgICBpZiAoaXNNb2JpbGUpIHtcbiAgICAgICAgICAgIHRyZWVYID0gMjM1O1xuICAgICAgICAgICAgdHJlZVkgPSBDQU5WQVNfSEVJR0hUIC0gMTUyIC0gVFJFRV9IRUlHSFQ7IFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8g0JTQtdGB0LrRgtC+0L/QvdCwINCy0LXRgNGB0ZbRj1xuICAgICAgICAgICAgdHJlZVggPSBDQU5WQVNfV0lEVEggLyAyIC0gMzAwOyBcbiAgICAgICAgICAgIHRyZWVZID0gQ0FOVkFTX0hFSUdIVCAvIDIgLSBUUkVFX0hFSUdIVCAvIDI7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vINCf0LDRgNCw0LzQtdGC0YDQuCDQsNC90ZbQvNCw0YbRltGXICjRgdC/0ZbQu9GM0L3RliDQtNC70Y8g0LLRgdGW0YUg0L7Qu9C10L3RltCyKVxuICAgICAgICBjb25zdCBGUkFNRV9ERUxBWSA9IDEyOyAvLyDQl9Cw0YLRgNC40LzQutCwINC80ZbQtiDQutCw0LTRgNCw0LzQuFxuICAgICAgICBjb25zdCBXQUxLSU5HX0ZSQU1FUyA9IDU7IC8vINCa0ZbQu9GM0LrRltGB0YLRjCDQutCw0LTRgNGW0LIg0LTQu9GPINGF0L7QtNGM0LHQuFxuICAgICAgICBjb25zdCBGUkFNRV9SRVBFQVQgPSAyOyAvLyDQmtGW0LvRjNC60ZbRgdGC0Ywg0YDQsNC30ZbQsiDQv9C+0LrQsNC30YPQstCw0YLQuCDQutC+0LbQtdC9INC60LDQtNGAXG4gICAgICAgIGNvbnN0IElETEVfTUlOX0RVUkFUSU9OID0gNjA7IC8vINCc0ZbQvdGW0LzQsNC70YzQvdCwINGC0YDQuNCy0LDQu9GW0YHRgtGMINC30YPQv9C40L3QutC4ICgxINGB0LXQutGD0L3QtNCwINC/0YDQuCA2MGZwcylcbiAgICAgICAgY29uc3QgSURMRV9NQVhfRFVSQVRJT04gPSAxODA7IC8vINCc0LDQutGB0LjQvNCw0LvRjNC90LAg0YLRgNC40LLQsNC70ZbRgdGC0Ywg0LfRg9C/0LjQvdC60LggKDMg0YHQtdC60YPQvdC00Lgg0L/RgNC4IDYwZnBzKVxuXG4gICAgICAgIC8vINCh0YLQsNC90Lgg0LDQvdGW0LzQsNGG0ZbRlyDQvtC70LXQvdGPXG4gICAgICAgIGNvbnN0IERFRVJfU1RBVEUgPSB7XG4gICAgICAgICAgICBXQUxLSU5HOiAnd2Fsa2luZycsXG4gICAgICAgICAgICBJRExFOiAnaWRsZScsXG4gICAgICAgICAgICBQRVRUSU5HOiAncGV0dGluZydcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIC8vINCf0LDRgNCw0LzQtdGC0YDQuCDQtNC70Y8g0YHRgtCw0L3RgyBwZXR0aW5nXG4gICAgICAgIGNvbnN0IFBFVFRJTkdfTUlOX0RVUkFUSU9OID0gNjA7IC8vIDEg0YHQtdC60YPQvdC00LAg0L/RgNC4IDYwZnBzXG4gICAgICAgIGNvbnN0IFBFVFRJTkdfTUFYX0RVUkFUSU9OID0gMTgwOyAvLyAzINGB0LXQutGD0L3QtNC4INC/0YDQuCA2MGZwc1xuICAgICAgICBjb25zdCBIRUFSVF9TSVpFX01JTiA9IDg7XG4gICAgICAgIGNvbnN0IEhFQVJUX1NJWkVfTUFYID0gMTI7XG4gICAgICAgIGNvbnN0IEhFQVJUX1JJU0VfRElTVEFOQ0UgPSAzMDsgLy8g0JLRltC00YHRgtCw0L3RjCDQv9GW0LTQudC+0LzRgyDRgdC10YDQtNC10YfQutCwXG4gICAgICAgIGNvbnN0IEhFQVJUX1NQQVdOX0lOVEVSVkFMID0gMjA7IC8vINCG0L3RgtC10YDQstCw0Lsg0L/QvtGP0LLQuCDRgdC10YDQtNC10YfQvtC6ICjQutCw0LTRgNC4KVxuICAgICAgICBcbiAgICAgICAgbGV0IGFuaW1hdGlvbklkID0gbnVsbDtcbiAgICAgICAgbGV0IGZyYW1lQ291bnRlciA9IDA7IC8vINCT0LvQvtCx0LDQu9GM0L3QuNC5INC70ZbRh9C40LvRjNC90LjQuiDQutCw0LTRgNGW0LIg0LTQu9GPINGB0LjQvdGF0YDQvtC90ZbQt9Cw0YbRltGXXG5cbiAgICAgICAgLy8g0JrQu9Cw0YEg0LTQu9GPINGB0LXRgNC00LXRh9C60LBcbiAgICAgICAgY2xhc3MgSGVhcnQge1xuICAgICAgICAgICAgY29uc3RydWN0b3IoeCwgeSwgc2l6ZSwgaGVhcnRJbWFnZSkge1xuICAgICAgICAgICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgICAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xuICAgICAgICAgICAgICAgIHRoaXMub3BhY2l0eSA9IDE7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2FsZSA9IDE7XG4gICAgICAgICAgICAgICAgdGhpcy5yaXNlU3BlZWQgPSAwLjU7IC8vINCo0LLQuNC00LrRltGB0YLRjCDQv9GW0LTQudC+0LzRg1xuICAgICAgICAgICAgICAgIHRoaXMuaGVhcnRJbWFnZSA9IGhlYXJ0SW1hZ2U7IC8vINCX0L7QsdGA0LDQttC10L3QvdGPINGB0LXRgNC00LXRh9C60LBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdXBkYXRlKCkge1xuICAgICAgICAgICAgICAgIHRoaXMueSAtPSB0aGlzLnJpc2VTcGVlZDtcbiAgICAgICAgICAgICAgICB0aGlzLm9wYWNpdHkgLT0gMC4wMjtcbiAgICAgICAgICAgICAgICB0aGlzLnNjYWxlICs9IDAuMDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlzVmlzaWJsZSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5vcGFjaXR5ID4gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZHJhdyhjdHgpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNWaXNpYmxlKCkgfHwgIXRoaXMuaGVhcnRJbWFnZSB8fCAhdGhpcy5oZWFydEltYWdlLmNvbXBsZXRlKSByZXR1cm47XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY3R4LnNhdmUoKTtcbiAgICAgICAgICAgICAgICBjdHguZ2xvYmFsQWxwaGEgPSB0aGlzLm9wYWNpdHk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8g0JzQsNC70Y7RlNC80L4g0LfQvtCx0YDQsNC20LXQvdC90Y8g0YHQtdGA0LTQtdGH0LrQsCDQtyDQvNCw0YHRiNGC0LDQsdGD0LLQsNC90L3Rj9C8XG4gICAgICAgICAgICAgICAgY29uc3QgZHJhd1NpemUgPSB0aGlzLnNpemUgKiB0aGlzLnNjYWxlO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRyYXdYID0gdGhpcy54IC0gZHJhd1NpemUgLyAyO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRyYXdZID0gdGhpcy55IC0gZHJhd1NpemUgLyAyO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGVhcnRJbWFnZSxcbiAgICAgICAgICAgICAgICAgICAgZHJhd1gsIGRyYXdZLCBkcmF3U2l6ZSwgZHJhd1NpemVcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGN0eC5yZXN0b3JlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyDQmtC70LDRgSDQtNC70Y8g0L7Qu9C10L3Rj1xuICAgICAgICBjbGFzcyBEZWVyIHtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yKHN0YXJ0WCwgc3RhcnRZLCBtaW5YLCBtYXhYLCBzcGVlZCA9IDAuNSwgekluZGV4ID0gMCwgaGVhcnRJbWFnZSA9IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnggPSBzdGFydFg7XG4gICAgICAgICAgICAgICAgdGhpcy55ID0gc3RhcnRZO1xuICAgICAgICAgICAgICAgIHRoaXMubWluWCA9IG1pblg7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXhYID0gbWF4WDtcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVkID0gc3BlZWQ7XG4gICAgICAgICAgICAgICAgdGhpcy56SW5kZXggPSB6SW5kZXg7IC8vINCf0L7RgNGP0LTQvtC6INC80LDQu9GO0LLQsNC90L3RjyBcbiAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IC0xOyAvLyAtMSA9INCy0LvRltCy0L4sIDEgPSDQstC/0YDQsNCy0L5cbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0gREVFUl9TVEFURS5XQUxLSU5HO1xuICAgICAgICAgICAgICAgIHRoaXMuZnJhbWVJbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5mcmFtZVJlcGVhdENvdW50ZXIgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuaWRsZVRpbWVyID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLmlkbGVEdXJhdGlvbiA9IDA7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8g0JLQu9Cw0YHRgtC40LLQvtGB0YLRliDQtNC70Y8g0YHRgtCw0L3RgyBwZXR0aW5nXG4gICAgICAgICAgICAgICAgdGhpcy5wZXR0aW5nVGltZXIgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMucGV0dGluZ0R1cmF0aW9uID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLnByZXZpb3VzU3RhdGUgPSBudWxsOyAvLyDQl9Cx0LXRgNGW0LPQsNGU0LzQviDQv9C+0L/QtdGA0LXQtNC90ZbQuSDRgdGC0LDQvVxuICAgICAgICAgICAgICAgIHRoaXMuc2F2ZWRYID0gMDsgLy8g0JfQsdC10YDQtdC20LXQvdGWINC60L7QvtGA0LTQuNC90LDRgtC4INC/0YDQuCDQv9C10YDQtdGF0L7QtNGWINCyIHBldHRpbmdcbiAgICAgICAgICAgICAgICB0aGlzLnNhdmVkWSA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5oZWFydHMgPSBbXTsgLy8g0JzQsNGB0LjQsiDRgdC10YDQtNC10YfQvtC6XG4gICAgICAgICAgICAgICAgdGhpcy5oZWFydFNwYXduQ291bnRlciA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5oZWFydEltYWdlID0gaGVhcnRJbWFnZTsgLy8g0JfQvtCx0YDQsNC20LXQvdC90Y8g0YHQtdGA0LTQtdGH0LrQsFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNC60LAg0YfQuCDQutC70ZbQuiDQv9C+0YLRgNCw0L/QuNCyINC90LAg0L7Qu9C10L3Rj1xuICAgICAgICAgICAgaXNQb2ludEluc2lkZShjbGlja1gsIGNsaWNrWSwgZGVlcldpZHRoLCBkZWVySGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNsaWNrWCA+PSB0aGlzLnggJiYgXG4gICAgICAgICAgICAgICAgICAgICAgIGNsaWNrWCA8PSB0aGlzLnggKyBkZWVyV2lkdGggJiYgXG4gICAgICAgICAgICAgICAgICAgICAgIGNsaWNrWSA+PSB0aGlzLnkgJiYgXG4gICAgICAgICAgICAgICAgICAgICAgIGNsaWNrWSA8PSB0aGlzLnkgKyBkZWVySGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQntCx0YDQvtCx0LrQsCDQutC70ZbQutGDINC/0L4g0L7Qu9C10L3RjlxuICAgICAgICAgICAgaGFuZGxlQ2xpY2soKSB7XG4gICAgICAgICAgICAgICAgLy8g0J/QtdGA0LXRhdC+0LTQuNC80L4g0LIg0YHRgtCw0L0gcGV0dGluZyDQsNCx0L4g0L/QvtC90L7QstC70Y7RlNC80L4g0YLQsNC50LzQtdGAXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUgIT09IERFRVJfU1RBVEUuUEVUVElORykge1xuICAgICAgICAgICAgICAgICAgICAvLyDQl9Cx0LXRgNGW0LPQsNGU0LzQviDQv9C+0L/QtdGA0LXQtNC90ZbQuSDRgdGC0LDQvSDRgtCwINC60L7QvtGA0LTQuNC90LDRgtC4XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJldmlvdXNTdGF0ZSA9IHRoaXMuc3RhdGU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2F2ZWRYID0gdGhpcy54O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNhdmVkWSA9IHRoaXMueTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IERFRVJfU1RBVEUuUEVUVElORztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wZXR0aW5nVGltZXIgPSAwO1xuICAgICAgICAgICAgICAgICAgICAvLyDQntGH0LjRidCw0ZTQvNC+INGB0YLQsNGA0ZYg0YHQtdGA0LTQtdGH0LrQsFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhlYXJ0cyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhlYXJ0U3Bhd25Db3VudGVyID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8g0J/QvtC90L7QstC70Y7RlNC80L4g0YLQsNC50LzQtdGAIHBldHRpbmcgKDEtMyDRgdC10LrRg9C90LTQuCkg0YLQsCDRgdC60LjQtNCw0ZTQvNC+INC/0L7RgtC+0YfQvdC40Lkg0YLQsNC50LzQtdGAXG4gICAgICAgICAgICAgICAgdGhpcy5wZXR0aW5nRHVyYXRpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoUEVUVElOR19NQVhfRFVSQVRJT04gLSBQRVRUSU5HX01JTl9EVVJBVElPTiArIDEpKSArIFBFVFRJTkdfTUlOX0RVUkFUSU9OO1xuICAgICAgICAgICAgICAgIHRoaXMucGV0dGluZ1RpbWVyID0gMDsgLy8g0KHQutC40LTQsNGU0LzQviDRgtCw0LnQvNC10YAg0L/RgNC4INC60L7QttC90L7QvNGDINC60LvRltC60YNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0KHRgtCy0L7RgNC10L3QvdGPINC90L7QstC+0LPQviDRgdC10YDQtNC10YfQutCwXG4gICAgICAgICAgICBzcGF3bkhlYXJ0KCkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5oZWFydEltYWdlKSByZXR1cm47IC8vINCv0LrRidC+INC30L7QsdGA0LDQttC10L3QvdGPINC90LUg0LfQsNCy0LDQvdGC0LDQttC10L3QtSwg0L3QtSDRgdGC0LLQvtGA0Y7RlNC80L4g0YHQtdGA0LTQtdGH0LrQvlxuICAgICAgICAgICAgICAgIGNvbnN0IHNpemUgPSBNYXRoLnJhbmRvbSgpICogKEhFQVJUX1NJWkVfTUFYIC0gSEVBUlRfU0laRV9NSU4pICsgSEVBUlRfU0laRV9NSU47XG4gICAgICAgICAgICAgICAgY29uc3Qgb2Zmc2V0WCA9IChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIERFRVJfV0lEVEg7IC8vINCS0LjQv9Cw0LTQutC+0LLQtSDQt9C80ZbRidC10L3QvdGPINC/0L4gWFxuICAgICAgICAgICAgICAgIGNvbnN0IGhlYXJ0WCA9IHRoaXMueCArIERFRVJfV0lEVEggLyAyICsgb2Zmc2V0WDtcbiAgICAgICAgICAgICAgICBjb25zdCBoZWFydFkgPSB0aGlzLnkgLSAxMDsgLy8g0KLRgNC+0YXQuCDQstC40YnQtSDQvtC70LXQvdGPXG4gICAgICAgICAgICAgICAgdGhpcy5oZWFydHMucHVzaChuZXcgSGVhcnQoaGVhcnRYLCBoZWFydFksIHNpemUsIHRoaXMuaGVhcnRJbWFnZSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBnZXRTcHJpdGVGcmFtZUluZGV4KCkge1xuICAgICAgICAgICAgICAgIC8vINCS0LXRgNGF0L3RltC5INGA0Y/QtNC+0LogKDApID0g0YDRg9GFINCy0LvRltCy0L4sINC90LjQttC90ZbQuSDRgNGP0LTQvtC6ICgxKSA9INGA0YPRhSDQstC/0YDQsNCy0L5cbiAgICAgICAgICAgICAgICBjb25zdCByb3cgPSB0aGlzLmRpcmVjdGlvbiA9PT0gLTEgPyAwIDogMTtcbiAgICAgICAgICAgICAgICBsZXQgY29sID0gMDtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlID09PSBERUVSX1NUQVRFLldBTEtJTkcpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g0JrQsNC00YDQuCDRhdC+0LTRjNCx0Lg6IDAsIDEsIDIsIDMsIDQgKNCy0YHRliA1INC60LDQtNGA0ZbQsilcbiAgICAgICAgICAgICAgICAgICAgY29sID0gdGhpcy5mcmFtZUluZGV4ICUgV0FMS0lOR19GUkFNRVM7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlID09PSBERUVSX1NUQVRFLlBFVFRJTkcpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g0JIg0YHRgtCw0L3RliBwZXR0aW5nINCy0LjQutC+0YDQuNGB0YLQvtCy0YPRlNC80L4g0LrQsNC00YAgMCAoaWRsZSDQutCw0LTRgClcbiAgICAgICAgICAgICAgICAgICAgY29sID0gMDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyDQodGC0LDQvSDQt9GD0L/QuNC90LrQuCAoSURMRSkgLSDQstC40LrQvtGA0LjRgdGC0L7QstGD0ZTQvNC+INC60LDQtNGAIDBcbiAgICAgICAgICAgICAgICAgICAgY29sID0gMDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4geyByb3csIGNvbCB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1cGRhdGUoc2hvdWxkVXBkYXRlRnJhbWUpIHtcbiAgICAgICAgICAgICAgICAvLyDQntC90L7QstC70Y7RlNC80L4g0LDQvdGW0LzQsNGG0ZbRjiDQutCw0LTRgNGW0LIg0Lcg0L/QvtCy0YLQvtGA0LXQvdC90Y/QvCDQtNC70Y8g0L/Qu9Cw0LLQvdC+0YHRgtGWXG4gICAgICAgICAgICAgICAgaWYgKHNob3VsZFVwZGF0ZUZyYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlID09PSBERUVSX1NUQVRFLldBTEtJTkcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZnJhbWVSZXBlYXRDb3VudGVyKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDQn9C+0LrQsNC30YPRlNC80L4g0LrQvtC20LXQvSDQutCw0LTRgCDQutGW0LvRjNC60LAg0YDQsNC30ZbQsiDQtNC70Y8g0L/Qu9Cw0LLQvdGW0YjQvtGXINCw0L3RltC80LDRhtGW0ZdcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmZyYW1lUmVwZWF0Q291bnRlciA+PSBGUkFNRV9SRVBFQVQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZyYW1lUmVwZWF0Q291bnRlciA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g0J/QvtGB0LvRltC00L7QstC90L4g0L/RgNC+0YXQvtC00LjQvNC+INGH0LXRgNC10Lcg0LLRgdGWINC60LDQtNGA0Lg6IDAsIDEsIDIsIDMsIDQsIDAsIDEsIDIsIDMsIDQuLi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZyYW1lSW5kZXggPSAodGhpcy5mcmFtZUluZGV4ICsgMSkgJSBXQUxLSU5HX0ZSQU1FUztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vINCb0L7Qs9GW0LrQsCDRgdGC0LDQvdGW0LIg0YLQsCDRgNGD0YXRg1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlID09PSBERUVSX1NUQVRFLlBFVFRJTkcpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g0JIg0YHRgtCw0L3RliBwZXR0aW5nINC+0LvQtdC90Ywg0L3QtSDRgNGD0YXQsNGU0YLRjNGB0Y9cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wZXR0aW5nVGltZXIrKztcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vINCh0YLQstC+0YDRjtGU0LzQviDRgdC10YDQtNC10YfQutCwINC3INGW0L3RgtC10YDQstCw0LvQvtC8XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGVhcnRTcGF3bkNvdW50ZXIrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaGVhcnRTcGF3bkNvdW50ZXIgPj0gSEVBUlRfU1BBV05fSU5URVJWQUwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGVhcnRTcGF3bkNvdW50ZXIgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGF3bkhlYXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vINCe0L3QvtCy0LvRjtGU0LzQviDRgdC10YDQtNC10YfQutCwXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGVhcnRzID0gdGhpcy5oZWFydHMuZmlsdGVyKGhlYXJ0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYXJ0LnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGhlYXJ0LmlzVmlzaWJsZSgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vINCf0LXRgNC10LLRltGA0Y/RlNC80L4g0YfQuCDQt9Cw0LrRltC90YfQuNCy0YHRjyDRgdGC0LDQvSBwZXR0aW5nXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBldHRpbmdUaW1lciA+PSB0aGlzLnBldHRpbmdEdXJhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g0J/QvtCy0LXRgNGC0LDRlNC80L7RgdGPINC00L4g0LfQsdC10YDQtdC20LXQvdC40YUg0LrQvtC+0YDQtNC40L3QsNGCXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnggPSB0aGlzLnNhdmVkWDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueSA9IHRoaXMuc2F2ZWRZO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDQn9C+0LLQtdGA0YLQsNGU0LzQvtGB0Y8g0LTQviDQv9C+0L/QtdGA0LXQtNC90YzQvtCz0L4g0YHRgtCw0L3Rg1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHJldmlvdXNTdGF0ZSA9PT0gREVFUl9TVEFURS5XQUxLSU5HKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IERFRVJfU1RBVEUuV0FMS0lORztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDQn9GA0L7QtNC+0LLQttGD0ZTQvNC+INGA0YPRhSDQtyDQt9Cx0LXRgNC10LbQtdC90LjRhSDQutC+0L7RgNC00LjQvdCw0YJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2aW91c1N0YXRlID09PSBERUVSX1NUQVRFLklETEUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0gREVFUl9TVEFURS5JRExFO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vINCf0L7QstC10YDRgtCw0ZTQvNC+0YHRjyDQtNC+INGB0YLQsNC90YMgaWRsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaWRsZVRpbWVyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlkbGVEdXJhdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChJRExFX01BWF9EVVJBVElPTiAtIElETEVfTUlOX0RVUkFUSU9OICsgMSkpICsgSURMRV9NSU5fRFVSQVRJT047XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJldmlvdXNTdGF0ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBldHRpbmdUaW1lciA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBldHRpbmdEdXJhdGlvbiA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhlYXJ0cyA9IFtdOyAvLyDQntGH0LjRidCw0ZTQvNC+INGB0LXRgNC00LXRh9C60LBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGVhcnRTcGF3bkNvdW50ZXIgPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlID09PSBERUVSX1NUQVRFLldBTEtJTkcpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g0J7QvdC+0LLQu9GO0ZTQvNC+INC/0L7Qt9C40YbRltGOINC+0LvQtdC90Y9cbiAgICAgICAgICAgICAgICAgICAgdGhpcy54ICs9IHRoaXMuc3BlZWQgKiB0aGlzLmRpcmVjdGlvbjtcblxuICAgICAgICAgICAgICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNGP0ZTQvNC+INC80LXQttGWINGC0LAg0L/QtdGA0LXRhdC+0LTQuNC80L4g0LTQviDQt9GD0L/QuNC90LrQuFxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy54ID49IHRoaXMubWF4WCAmJiB0aGlzLmRpcmVjdGlvbiA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g0JTQvtGB0Y/Qs9C70Lgg0L/RgNCw0LLQvtCz0L4g0LrRgNCw0Y4gLSDQt9GD0L/QuNC90Y/RlNC80L7RgdGPXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnggPSB0aGlzLm1heFg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0gREVFUl9TVEFURS5JRExFO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pZGxlVGltZXIgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g0JPQtdC90LXRgNGD0ZTQvNC+INCy0LjQv9Cw0LTQutC+0LLRgyDRgtGA0LjQstCw0LvRltGB0YLRjCDQt9GD0L/QuNC90LrQuCDQstGW0LQgMSDQtNC+IDMg0YHQtdC60YPQvdC0XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlkbGVEdXJhdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChJRExFX01BWF9EVVJBVElPTiAtIElETEVfTUlOX0RVUkFUSU9OICsgMSkpICsgSURMRV9NSU5fRFVSQVRJT047XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy54IDw9IHRoaXMubWluWCAmJiB0aGlzLmRpcmVjdGlvbiA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vINCU0L7RgdGP0LPQu9C4INC70ZbQstC+0LPQviDQutGA0LDRjiAtINC30YPQv9C40L3Rj9GU0LzQvtGB0Y9cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueCA9IHRoaXMubWluWDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBERUVSX1NUQVRFLklETEU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlkbGVUaW1lciA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDQk9C10L3QtdGA0YPRlNC80L4g0LLQuNC/0LDQtNC60L7QstGDINGC0YDQuNCy0LDQu9GW0YHRgtGMINC30YPQv9C40L3QutC4INCy0ZbQtCAxINC00L4gMyDRgdC10LrRg9C90LRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaWRsZUR1cmF0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKElETEVfTUFYX0RVUkFUSU9OIC0gSURMRV9NSU5fRFVSQVRJT04gKyAxKSkgKyBJRExFX01JTl9EVVJBVElPTjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZSA9PT0gREVFUl9TVEFURS5JRExFKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaWRsZVRpbWVyKys7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyDQn9GW0YHQu9GPINC30LDQstC10YDRiNC10L3QvdGPINC30YPQv9C40L3QutC4INC30LzRltC90Y7RlNC80L4g0L3QsNC/0YDRj9C80L7QuiDRgtCwINC/0LXRgNC10YXQvtC00LjQvNC+INC00L4g0YXQvtC00YzQsdC4XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlkbGVUaW1lciA+PSB0aGlzLmlkbGVEdXJhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gKj0gLTE7IC8vINCX0LzRltC90Y7RlNC80L4g0L3QsNC/0YDRj9C80L7QuiAo0LLQu9GW0LLQviDihpQg0LLQv9GA0LDQstC+KVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IERFRVJfU1RBVEUuV0FMS0lORztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZnJhbWVJbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZyYW1lUmVwZWF0Q291bnRlciA9IDA7IC8vINCh0LrQuNC00LDRlNC80L4g0LvRltGH0LjQu9GM0L3QuNC6INC/0L7QstGC0L7RgNC10L3RjFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkcmF3KGN0eCwgc3ByaXRlSW1hZ2UsIGZyYW1lV2lkdGgsIGZyYW1lSGVpZ2h0LCBkZWVyV2lkdGgsIGRlZXJIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXNwcml0ZUltYWdlLmNvbXBsZXRlIHx8IGZyYW1lV2lkdGggPD0gMCB8fCBmcmFtZUhlaWdodCA8PSAwKSByZXR1cm47XG5cbiAgICAgICAgICAgICAgICBjb25zdCB7IHJvdywgY29sIH0gPSB0aGlzLmdldFNwcml0ZUZyYW1lSW5kZXgoKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyDQmtC+0L7RgNC00LjQvdCw0YLQuCDQutCw0LTRgNGDINCyINGB0L/RgNCw0LnRgi3Qu9C40YHRgtGWICjQstC40LrQvtGA0LjRgdGC0L7QstGD0ZTQvNC+IE1hdGguZmxvb3Ig0LTQu9GPINGD0L3QuNC60L3QtdC90L3RjyBzdWItcGl4ZWwg0YDQtdC90LTQtdGA0LjQvdCz0YMg0L3QsCBpT1MpXG4gICAgICAgICAgICAgICAgY29uc3Qgc291cmNlWCA9IE1hdGguZmxvb3IoY29sICogZnJhbWVXaWR0aCk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc291cmNlWSA9IE1hdGguZmxvb3Iocm93ICogZnJhbWVIZWlnaHQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNvdXJjZVdpZHRoID0gTWF0aC5mbG9vcihmcmFtZVdpZHRoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzb3VyY2VIZWlnaHQgPSBNYXRoLmZsb29yKGZyYW1lSGVpZ2h0KTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyDQmtC+0L7RgNC00LjQvdCw0YLQuCDQvdCwIGNhbnZhcyAo0YLQsNC60L7QtiDQstC40LrQvtGA0LjRgdGC0L7QstGD0ZTQvNC+IE1hdGguZmxvb3IpXG4gICAgICAgICAgICAgICAgY29uc3QgZGVzdFggPSBNYXRoLmZsb29yKHRoaXMueCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVzdFkgPSBNYXRoLmZsb29yKHRoaXMueSk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVzdFdpZHRoID0gTWF0aC5mbG9vcihkZWVyV2lkdGgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlc3RIZWlnaHQgPSBNYXRoLmZsb29yKGRlZXJIZWlnaHQpO1xuXG4gICAgICAgICAgICAgICAgLy8g0JLQuNGA0ZbQt9Cw0ZTQvNC+INC60LDQtNGAINC30ZYg0YHQv9GA0LDQudGCLdC70LjRgdGC0LAg0YLQsCDQvNCw0LvRjtGU0LzQviDQvdCwIGNhbnZhc1xuICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICAgICAgICAgIHNwcml0ZUltYWdlLFxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VYLCBzb3VyY2VZLCBzb3VyY2VXaWR0aCwgc291cmNlSGVpZ2h0LCAvLyDQlNC20LXRgNC10LvQviAo0YHQv9GA0LDQudGCLdC70LjRgdGCKVxuICAgICAgICAgICAgICAgICAgICBkZXN0WCwgZGVzdFksIGRlc3RXaWR0aCwgZGVzdEhlaWdodCAvLyDQn9GA0LjQt9C90LDRh9C10L3QvdGPIChjYW52YXMpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyDQnNCw0LvRjtGU0LzQviDRgdC10YDQtNC10YfQutCwINC90LDQtCDQvtC70LXQvdC10LxcbiAgICAgICAgICAgICAgICB0aGlzLmhlYXJ0cy5mb3JFYWNoKGhlYXJ0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaGVhcnQuZHJhdyhjdHgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyDQl9Cw0LLQsNC90YLQsNC20LXQvdC90Y8g0LfQvtCx0YDQsNC20LXQvdGMICjRgdGC0LLQvtGA0Y7RlNC80L4g0L/QtdGA0LXQtCDRgdGC0LLQvtGA0LXQvdC90Y/QvCDQvtC70LXQvdGW0LIpXG4gICAgICAgIGNvbnN0IGltYWdlcyA9IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IG5ldyBJbWFnZSgpLFxuICAgICAgICAgICAgdHJlZTogbmV3IEltYWdlKCksXG4gICAgICAgICAgICBkZWVyU3ByaXRlOiBuZXcgSW1hZ2UoKSwgLy8g0KHQv9GA0LDQudGCLdC70LjRgdGCINC30LDQvNGW0YHRgtGMINC+0LTQvdC+0LPQviDQt9C+0LHRgNCw0LbQtdC90L3Rj1xuICAgICAgICAgICAgaGVhcnQ6IG5ldyBJbWFnZSgpIC8vINCX0L7QsdGA0LDQttC10L3QvdGPINGB0LXRgNC00LXRh9C60LBcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIC8vINCc0LDRgdC40LIg0L7Qu9C10L3RltCyICjQvNC+0LbQvdCwINC00L7QtNCw0YLQuCDQsdGW0LvRjNGI0LUpXG4gICAgICAgIGNvbnN0IGRlZXJzID0gW107XG4gICAgICAgIFxuICAgICAgICAvLyDQmtC+0L3RhNGW0LPRg9GA0LDRhtGW0Y8g0LTQu9GPINGB0YLQstC+0YDQtdC90L3RjyDQvtC70LXQvdGW0LJcbiAgICAgICAgY29uc3QgREVFUl9DT1VOVCA9IDM7IC8vINCa0ZbQu9GM0LrRltGB0YLRjCDQvtC70LXQvdGW0LJcbiAgICAgICAgXG4gICAgICAgIC8vINCg0L7Qt9GA0LDRhdC+0LLRg9GU0LzQviDQutC+0LXRhNGW0YbRltGU0L3RgiDQvNCw0YHRiNGC0LDQsdGD0LLQsNC90L3RjyDQtNC70Y8g0L/QvtC30LjRhtGW0Lkg0L7Qu9C10L3RltCyXG4gICAgICAgIGNvbnN0IHNjYWxlWCA9IENBTlZBU19XSURUSCAvIDEzNjY7XG4gICAgICAgIGNvbnN0IHNjYWxlWSA9IENBTlZBU19IRUlHSFQgLyA1MDA7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBkZWVyQ29uZmlncyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGFydFg6IENBTlZBU19XSURUSCAvIDIgKyA1MCAqIHNjYWxlWCxcbiAgICAgICAgICAgICAgICAvLyDQlNC70Y8g0LfQsdC10YDQtdC20LXQvdC90Y8g0L/QvtC30LjRhtGW0Zcg0LLRltC00L3QvtGB0L3QviDQvdC40LbQvdGM0L7Qs9C+INC60YDQsNGOINC00L7QtNCw0ZTQvNC+INC30LzRltGJ0LXQvdC90Y9cbiAgICAgICAgICAgICAgICBzdGFydFk6IHRyZWVZICsgVFJFRV9IRUlHSFQgLSAyMCArIGRlZXJIZWlnaHRPZmZzZXQsIC8vINCf0ZbQtCDRj9C70LjQvdC60L7RjiAodHJlZVkgKyDQstC40YHQvtGC0LAg0Y/Qu9C40L3QutC4IC0g0LLRltC00YHRgtGD0L8pXG4gICAgICAgICAgICAgICAgbWluWDogQ0FOVkFTX1dJRFRIIC8gMiAtIDIwMCAqIHNjYWxlWCxcbiAgICAgICAgICAgICAgICBtYXhYOiBDQU5WQVNfV0lEVEggLyAyICsgMzAwICogc2NhbGVYLFxuICAgICAgICAgICAgICAgIHNwZWVkOiAwLjUsXG4gICAgICAgICAgICAgICAgekluZGV4OiA0XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXJ0WDogQ0FOVkFTX1dJRFRIIC8gMiAtIDEwMCAqIHNjYWxlWCxcbiAgICAgICAgICAgICAgICAvLyDQlNC70Y8g0LfQsdC10YDQtdC20LXQvdC90Y8g0L/QvtC30LjRhtGW0Zcg0LLRltC00L3QvtGB0L3QviDQvdC40LbQvdGM0L7Qs9C+INC60YDQsNGOINC00L7QtNCw0ZTQvNC+INC30LzRltGJ0LXQvdC90Y9cbiAgICAgICAgICAgICAgICBzdGFydFk6IENBTlZBU19IRUlHSFQgLyAyIC0gQkFTRV9ERUVSX0hFSUdIVCAvIDIgKyA1MCAqIHNjYWxlWSArIGRlZXJIZWlnaHRPZmZzZXQsXG4gICAgICAgICAgICAgICAgbWluWDogQ0FOVkFTX1dJRFRIIC8gMiAtIDE1MCAqIHNjYWxlWCxcbiAgICAgICAgICAgICAgICBtYXhYOiBDQU5WQVNfV0lEVEggLyAyICsgMTUwICogc2NhbGVYLFxuICAgICAgICAgICAgICAgIHNwZWVkOiAwLjMsXG4gICAgICAgICAgICAgICAgekluZGV4OiAzXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXJ0WDogQ0FOVkFTX1dJRFRIIC8gMiAtIDEwMCAqIHNjYWxlWCxcbiAgICAgICAgICAgICAgICAvLyDQlNC70Y8g0LfQsdC10YDQtdC20LXQvdC90Y8g0L/QvtC30LjRhtGW0Zcg0LLRltC00L3QvtGB0L3QviDQvdC40LbQvdGM0L7Qs9C+INC60YDQsNGOINC00L7QtNCw0ZTQvNC+INC30LzRltGJ0LXQvdC90Y9cbiAgICAgICAgICAgICAgICBzdGFydFk6IENBTlZBU19IRUlHSFQgLyAyIC0gQkFTRV9ERUVSX0hFSUdIVCAvIDIgLSA1MCAqIHNjYWxlWSArIGRlZXJIZWlnaHRPZmZzZXQsXG4gICAgICAgICAgICAgICAgbWluWDogQ0FOVkFTX1dJRFRIIC8gMiAtIDI1MCAqIHNjYWxlWCxcbiAgICAgICAgICAgICAgICBtYXhYOiBDQU5WQVNfV0lEVEggLyAyICsgMjUwICogc2NhbGVYLFxuICAgICAgICAgICAgICAgIHNwZWVkOiAwLjQsXG4gICAgICAgICAgICAgICAgekluZGV4OiAxIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICBcbiAgICAgICAgXTtcblxuICAgICAgICAvLyDQodGC0LLQvtGA0Y7RlNC80L4g0L7Qu9C10L3RltCyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgREVFUl9DT1VOVCAmJiBpIDwgZGVlckNvbmZpZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbmZpZyA9IGRlZXJDb25maWdzW2ldO1xuICAgICAgICAgICAgZGVlcnMucHVzaChuZXcgRGVlcihcbiAgICAgICAgICAgICAgICBjb25maWcuc3RhcnRYLFxuICAgICAgICAgICAgICAgIGNvbmZpZy5zdGFydFksXG4gICAgICAgICAgICAgICAgY29uZmlnLm1pblgsXG4gICAgICAgICAgICAgICAgY29uZmlnLm1heFgsXG4gICAgICAgICAgICAgICAgY29uZmlnLnNwZWVkLFxuICAgICAgICAgICAgICAgIGNvbmZpZy56SW5kZXggfHwgMCwgLy8g0JLQuNC60L7RgNC40YHRgtC+0LLRg9GU0LzQviB6SW5kZXgg0Lcg0LrQvtC90YTRltCz0YMg0LDQsdC+IDAg0LfQsCDQt9Cw0LzQvtCy0YfRg9Cy0LDQvdC90Y/QvFxuICAgICAgICAgICAgICAgIGltYWdlcy5oZWFydCAvLyDQn9C10YDQtdC00LDRlNC80L4g0LfQvtCx0YDQsNC20LXQvdC90Y8g0YHQtdGA0LTQtdGH0LrQsFxuICAgICAgICAgICAgKSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaW1hZ2VzTG9hZGVkID0gMDtcbiAgICAgICAgY29uc3QgdG90YWxJbWFnZXMgPSA0O1xuXG4gICAgICAgIGZ1bmN0aW9uIG9uSW1hZ2VMb2FkKCkge1xuICAgICAgICAgICAgaW1hZ2VzTG9hZGVkKys7XG4gICAgICAgICAgICBpZiAoaW1hZ2VzTG9hZGVkID09PSB0b3RhbEltYWdlcykge1xuICAgICAgICAgICAgICAgIC8vINCf0LXRgNC10LLRltGA0Y/RlNC80L4sINGH0Lgg0YHQv9GA0LDQudGCLdC70LjRgdGCINC30LDQstCw0L3RgtCw0LbQuNCy0YHRjyDQutC+0YDQtdC60YLQvdC+XG4gICAgICAgICAgICAgICAgaWYgKGltYWdlcy5kZWVyU3ByaXRlLmNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEZWVyIHNwcml0ZSBsb2FkZWQ6Jywge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGltYWdlcy5kZWVyU3ByaXRlLndpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBpbWFnZXMuZGVlclNwcml0ZS5oZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgICAgICBmcmFtZVdpZHRoOiBGUkFNRV9XSURUSCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lSGVpZ2h0OiBGUkFNRV9IRUlHSFQsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWVyV2lkdGg6IERFRVJfV0lEVEgsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWVySGVpZ2h0OiBERUVSX0hFSUdIVFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZHJhd0NhbnZhcygpO1xuICAgICAgICAgICAgICAgIHN0YXJ0QW5pbWF0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpbWFnZXMuYmFja2dyb3VuZC5vbmxvYWQgPSBvbkltYWdlTG9hZDtcbiAgICAgICAgaW1hZ2VzLnRyZWUub25sb2FkID0gb25JbWFnZUxvYWQ7XG4gICAgICAgIGltYWdlcy5kZWVyU3ByaXRlLm9ubG9hZCA9IG9uSW1hZ2VMb2FkO1xuICAgICAgICBpbWFnZXMuaGVhcnQub25sb2FkID0gb25JbWFnZUxvYWQ7XG5cbiAgICAgICAgaW1hZ2VzLmJhY2tncm91bmQuc3JjID0gaXNNb2JpbGUgPyAnaHR0cHM6Ly9mYXYtcHJvbS5jb20vaHRtbC9nbG9iYWwtbnktMjAyNi1oci9pbWcvcGFydGljaXBhdGUvY2FudmFzLWJnLXRhYi5wbmcnIDogJ2h0dHBzOi8vZmF2LXByb20uY29tL2h0bWwvZ2xvYmFsLW55LTIwMjYtaHIvaW1nL3BhcnRpY2lwYXRlL2NhbnZhcy1iZy5wbmcnO1xuICAgICAgICBpbWFnZXMudHJlZS5zcmMgPSAnaHR0cHM6Ly9mYXYtcHJvbS5jb20vaHRtbC9nbG9iYWwtbnktMjAyNi1oci9pbWcvcGFydGljaXBhdGUvdHJlZS5wbmcnO1xuICAgICAgICBpbWFnZXMuZGVlclNwcml0ZS5zcmMgPSAnaHR0cHM6Ly9mYXYtcHJvbS5jb20vaHRtbC9nbG9iYWwtbnktMjAyNi1oci9pbWcvcGFydGljaXBhdGUvZGVlci1zcHJpdGUucG5nJztcbiAgICAgICAgaW1hZ2VzLmhlYXJ0LnNyYyA9ICdodHRwczovL2Zhdi1wcm9tLmNvbS9odG1sL2dsb2JhbC1ueS0yMDI2LWhyL2ltZy9wYXJ0aWNpcGF0ZS9kZWVyLWhlYXJ0LnBuZyc7XG4gICAgICAgIFxuICAgICAgICBwYXJ0aWNpcGF0ZURlZXJzID0gZGVlcnM7XG4gICAgICAgIHBhcnRpY2lwYXRlRGVlcldpZHRoID0gREVFUl9XSURUSDtcbiAgICAgICAgcGFydGljaXBhdGVEZWVySGVpZ2h0ID0gREVFUl9IRUlHSFQ7XG4gICAgICAgIFxuICAgICAgICAvLyDQlNC+0LTQsNGU0LzQviDQvtCx0YDQvtCx0L3QuNC60Lgg0L/QvtC00ZbQuSDRgtGW0LvRjNC60Lgg0L7QtNC40L0g0YDQsNC3XG4gICAgICAgIGlmICghY2FudmFzQ2xpY2tIYW5kbGVyc0F0dGFjaGVkKSB7XG4gICAgICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVQYXJ0aWNpcGF0ZUNhbnZhc0NsaWNrKTtcbiAgICAgICAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgaGFuZGxlUGFydGljaXBhdGVDYW52YXNUb3VjaFN0YXJ0LCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gICAgICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBoYW5kbGVQYXJ0aWNpcGF0ZUNhbnZhc1RvdWNoRW5kLCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gICAgICAgICAgICBjYW52YXNDbGlja0hhbmRsZXJzQXR0YWNoZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZHJhd0NhbnZhcygpIHtcbiAgICAgICAgICAgIC8vINCe0YfQuNGJ0LXQvdC90Y8gY2FudmFzXG4gICAgICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIENBTlZBU19XSURUSCwgQ0FOVkFTX0hFSUdIVCk7XG5cbiAgICAgICAgICAgIC8vINCc0LDQu9GO0ZTQvNC+INGE0L7QvVxuICAgICAgICAgICAgaWYgKGltYWdlcy5iYWNrZ3JvdW5kLmNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShpbWFnZXMuYmFja2dyb3VuZCwgMCwgMCwgQ0FOVkFTX1dJRFRILCBDQU5WQVNfSEVJR0hUKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gekluZGV4INC00LvRjyDRj9C70LjQvdC60LggKNC80ZbQtiDQvtC70LXQvdGP0LzQuClcbiAgICAgICAgICAgIGNvbnN0IFRSRUVfWl9JTkRFWCA9IDI7IC8vINCv0LvQuNC90LrQsCDQvNCw0LvRjtGU0YLRjNGB0Y8g0LzRltC2INC+0LvQtdC90Y/QvNC4INC3IHpJbmRleCAxINGC0LAgMlxuXG4gICAgICAgICAgICAvLyDQodGC0LLQvtGA0Y7RlNC80L4g0LzQsNGB0LjQsiDQstGB0ZbRhSDQtdC70LXQvNC10L3RgtGW0LIg0LTQu9GPINC80LDQu9GO0LLQsNC90L3RjyAo0L7Qu9C10L3RliArINGP0LvQuNC90LrQsClcbiAgICAgICAgICAgIGNvbnN0IGRyYXdhYmxlRWxlbWVudHMgPSBbXTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0JTQvtC00LDRlNC80L4g0L7Qu9C10L3RltCyXG4gICAgICAgICAgICBkZWVycy5mb3JFYWNoKGRlZXIgPT4ge1xuICAgICAgICAgICAgICAgIGRyYXdhYmxlRWxlbWVudHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdkZWVyJyxcbiAgICAgICAgICAgICAgICAgICAgekluZGV4OiBkZWVyLnpJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgZHJhdzogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGltYWdlcy5kZWVyU3ByaXRlLmNvbXBsZXRlICYmIEZSQU1FX1dJRFRIID4gMCAmJiBGUkFNRV9IRUlHSFQgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVlci5kcmF3KGN0eCwgaW1hZ2VzLmRlZXJTcHJpdGUsIEZSQU1FX1dJRFRILCBGUkFNRV9IRUlHSFQsIERFRVJfV0lEVEgsIERFRVJfSEVJR0hUKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCU0L7QtNCw0ZTQvNC+INGP0LvQuNC90LrRg1xuICAgICAgICAgICAgZHJhd2FibGVFbGVtZW50cy5wdXNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiAndHJlZScsXG4gICAgICAgICAgICAgICAgekluZGV4OiBUUkVFX1pfSU5ERVgsXG4gICAgICAgICAgICAgICAgZHJhdzogKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGltYWdlcy50cmVlLmNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShpbWFnZXMudHJlZSwgdHJlZVgsIHRyZWVZLCBUUkVFX1dJRFRILCBUUkVFX0hFSUdIVCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vINCh0L7RgNGC0YPRlNC80L4g0LLRgdGWINC10LvQtdC80LXQvdGC0Lgg0LfQsCB6SW5kZXggKNC80LXQvdGI0LUgPSDQvNCw0LvRjtGU0YLRjNGB0Y8g0YDQsNC90ZbRiNC1LCDQsdGW0LvRjNGI0LUgPSDQvNCw0LvRjtGU0YLRjNGB0Y8g0L/RltC30L3RltGI0LUpXG4gICAgICAgICAgICBkcmF3YWJsZUVsZW1lbnRzLnNvcnQoKGEsIGIpID0+IGEuekluZGV4IC0gYi56SW5kZXgpO1xuXG4gICAgICAgICAgICAvLyDQnNCw0LvRjtGU0LzQviDQstGB0ZYg0LXQu9C10LzQtdC90YLQuCDQsiDQv9GA0LDQstC40LvRjNC90L7QvNGDINC/0L7RgNGP0LTQutGDXG4gICAgICAgICAgICBkcmF3YWJsZUVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5kcmF3KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGFuaW1hdGUoKSB7XG4gICAgICAgICAgICBmcmFtZUNvdW50ZXIrKztcblxuICAgICAgICAgICAgLy8g0J/QtdGA0LXQstGW0YDRj9GU0LzQviwg0YfQuCDQv9C+0YLRgNGW0LHQvdC+INC+0L3QvtCy0LvRjtCy0LDRgtC4INC60LDQtNGA0Lgg0LDQvdGW0LzQsNGG0ZbRl1xuICAgICAgICAgICAgY29uc3Qgc2hvdWxkVXBkYXRlRnJhbWUgPSBmcmFtZUNvdW50ZXIgPj0gRlJBTUVfREVMQVk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCe0L3QvtCy0LvRjtGU0LzQviDQs9C70L7QsdCw0LvRjNC90LjQuSDQu9GW0YfQuNC70YzQvdC40Log0LrQsNC00YDRltCyXG4gICAgICAgICAgICBpZiAoc2hvdWxkVXBkYXRlRnJhbWUpIHtcbiAgICAgICAgICAgICAgICBmcmFtZUNvdW50ZXIgPSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDQntC90L7QstC70Y7RlNC80L4g0LLRgdGW0YUg0L7Qu9C10L3RltCyXG4gICAgICAgICAgICBkZWVycy5mb3JFYWNoKGRlZXIgPT4ge1xuICAgICAgICAgICAgICAgIGRlZXIudXBkYXRlKHNob3VsZFVwZGF0ZUZyYW1lKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyDQn9C10YDQtdC80LDQu9GM0L7QstGD0ZTQvNC+IGNhbnZhc1xuICAgICAgICAgICAgZHJhd0NhbnZhcygpO1xuXG4gICAgICAgICAgICBhbmltYXRpb25JZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHN0YXJ0QW5pbWF0aW9uKCkge1xuICAgICAgICAgICAgaWYgKGFuaW1hdGlvbklkKSB7XG4gICAgICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uSWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYW5pbWF0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g0JfRg9C/0LjQvdGP0ZTQvNC+INCw0L3RltC80LDRhtGW0Y4g0L/RgNC4INCy0LjRhdC+0LTRliDQtyB2aWV3cG9ydCAo0L7Qv9GG0ZbQvtC90LDQu9GM0L3QvilcbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICAgICAgICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghYW5pbWF0aW9uSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QW5pbWF0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYW5pbWF0aW9uSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbklkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbklkID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGNhbnZhcyk7XG4gICAgICAgIFxuICAgICAgICAvLyDQntCx0YDQvtCx0LrQsCDQt9C80ZbQvdC4INGA0L7Qt9C80ZbRgNGDINCy0ZbQutC90LAg0LTQu9GPINCw0LTQsNC/0YLQuNCy0L3QvtGB0YLRllxuICAgICAgICBsZXQgcmVzaXplVGltZW91dDtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChyZXNpemVUaW1lb3V0KTtcbiAgICAgICAgICAgIHJlc2l6ZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdJc01vYmlsZSA9IHdpbmRvdy5pbm5lcldpZHRoIDw9IDEwNTA7XG4gICAgICAgICAgICAgICAgLy8g0J/QtdGA0LXQt9Cw0L/Rg9GB0LrQsNGU0LzQviDRltC90ZbRhtGW0LDQu9GW0LfQsNGG0ZbRjiDRgtGW0LvRjNC60Lgg0Y/QutGJ0L4g0LfQvNGW0L3QuNCy0YHRjyDRgNC10LbQuNC8IChtb2JpbGUvZGVza3RvcClcbiAgICAgICAgICAgICAgICBpZiAobmV3SXNNb2JpbGUgIT09IGlzTW9iaWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vINCX0YPQv9C40L3Rj9GU0LzQviDQv9C+0YLQvtGH0L3RgyDQsNC90ZbQvNCw0YbRltGOXG4gICAgICAgICAgICAgICAgICAgIGlmIChhbmltYXRpb25JZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uSWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uSWQgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vINCf0LXRgNC10LfQsNC/0YPRgdC60LDRlNC80L4g0ZbQvdGW0YbRltCw0LvRltC30LDRhtGW0Y5cbiAgICAgICAgICAgICAgICAgICAgaW5pdFBhcnRpY2lwYXRlQ2FudmFzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMjUwKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdFNub3dmbGFrZXNDYW52YXMoKSB7XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzbm93Zmxha2VzQ2FudmFzJyk7XG4gICAgICAgIGlmICghY2FudmFzKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIGNvbnN0IGZhdlBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmF2LXBhZ2UnKTtcbiAgICAgICAgXG4gICAgICAgIC8vINCa0L7QvdGB0YLQsNC90YLQuFxuICAgICAgICBjb25zdCBTTk9XRkxBS0VfQ09VTlQgPSA0MDA7IFxuICAgICAgICBjb25zdCBTTk9XRkxBS0VfTUlOX1NJWkUgPSA0O1xuICAgICAgICBjb25zdCBTTk9XRkxBS0VfTUFYX1NJWkUgPSAxMDtcbiAgICAgICAgY29uc3QgU05PV0ZMQUtFX01JTl9TUEVFRCA9IDAuMTtcbiAgICAgICAgY29uc3QgU05PV0ZMQUtFX01BWF9TUEVFRCA9IDAuMztcbiAgICAgICAgY29uc3QgU05PV0ZMQUtFX1dJTkRfUkFOR0UgPSAwLjQ7XG4gICAgICAgIGNvbnN0IFNOT1dGTEFLRV9TUEFXTl9JTlRFUlZBTCA9IDIwMDtcblxuICAgICAgICBjb25zdCBzbm93Zmxha2VzID0gW107XG4gICAgICAgIGxldCBsYXN0U25vd2ZsYWtlVGltZSA9IDA7XG4gICAgICAgIGxldCBhbmltYXRpb25JZCA9IG51bGw7XG4gICAgICAgIFxuICAgICAgICAvLyDQktGB0YLQsNC90L7QstC70Y7RlNC80L4g0YDQvtC30LzRltGAIGNhbnZhcyDQvdCwINCy0LXRgdGMIC5mYXYtcGFnZVxuICAgICAgICBmdW5jdGlvbiByZXNpemVDYW52YXMoKSB7XG4gICAgICAgICAgICBsZXQgbmV3V2lkdGgsIG5ld0hlaWdodDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGZhdlBhZ2UpIHtcbiAgICAgICAgICAgICAgICAvLyDQktC40LrQvtGA0LjRgdGC0L7QstGD0ZTQvNC+IHNjcm9sbEhlaWdodCDQtNC70Y8g0L7RgtGA0LjQvNCw0L3QvdGPINGA0LXQsNC70YzQvdC+0Zcg0LLQuNGB0L7RgtC4INC60L7QvdGC0LXQvdGC0YNcbiAgICAgICAgICAgICAgICBjb25zdCByZWN0ID0gZmF2UGFnZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgICAgICBuZXdXaWR0aCA9IHJlY3Qud2lkdGggfHwgZmF2UGFnZS5vZmZzZXRXaWR0aCB8fCB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgICAgICAgICAvLyDQlNC70Y8g0LLQuNGB0L7RgtC4INCy0LjQutC+0YDQuNGB0YLQvtCy0YPRlNC80L4gc2Nyb2xsSGVpZ2h0INGP0LrRidC+INCy0ZbQvSDQsdGW0LvRjNGI0LjQuSDQt9CwIG9mZnNldEhlaWdodFxuICAgICAgICAgICAgICAgIGNvbnN0IG9mZnNldEhlaWdodCA9IGZhdlBhZ2Uub2Zmc2V0SGVpZ2h0IHx8IGZhdlBhZ2UuY2xpZW50SGVpZ2h0O1xuICAgICAgICAgICAgICAgIGNvbnN0IHNjcm9sbEhlaWdodCA9IGZhdlBhZ2Uuc2Nyb2xsSGVpZ2h0O1xuICAgICAgICAgICAgICAgIG5ld0hlaWdodCA9IE1hdGgubWF4KHNjcm9sbEhlaWdodCwgb2Zmc2V0SGVpZ2h0LCByZWN0LmhlaWdodCkgfHwgd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBGYWxsYmFjayDQvdCwIHZpZXdwb3J0XG4gICAgICAgICAgICAgICAgbmV3V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgICAgICAgICBuZXdIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCf0LXRgNC10LLRltGA0Y/RlNC80L4g0YfQuCDRgNC+0LfQvNGW0YDQuCDQt9C80ZbQvdC40LvQuNGB0Y8g0L/QtdGA0LXQtCDQvtC90L7QstC70LXQvdC90Y/QvFxuICAgICAgICAgICAgaWYgKGNhbnZhcy53aWR0aCAhPT0gbmV3V2lkdGggfHwgY2FudmFzLmhlaWdodCAhPT0gbmV3SGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgY2FudmFzLndpZHRoID0gbmV3V2lkdGg7XG4gICAgICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IG5ld0hlaWdodDtcbiAgICAgICAgICAgICAgICAvLyDQntGH0LjRidCw0ZTQvNC+INGB0L3RltC20LjQvdC60Lgg0L/RgNC4INC30LzRltC90ZYg0YDQvtC30LzRltGA0YNcbiAgICAgICAgICAgICAgICBzbm93Zmxha2VzLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyDQktGB0YLQsNC90L7QstC70Y7RlNC80L4g0YDQvtC30LzRltGAIGNhbnZhcyDQtyDQvdC10LLQtdC70LjQutC+0Y4g0LfQsNGC0YDQuNC80LrQvtGOINC00LvRjyDQutC+0YDQtdC60YLQvdC+0LPQviDRgNC+0LfRgNCw0YXRg9C90LrRgyDRgNC+0LfQvNGW0YDRltCyXG4gICAgICAgIC8vINCS0LjQutC+0YDQuNGB0YLQvtCy0YPRlNC80L4g0LrRltC70YzQutCwINC60LDQtNGA0ZbQsiDQtNC70Y8g0LPQsNGA0LDQvdGC0ZbRlyDQv9GA0LDQstC40LvRjNC90L7Qs9C+INGA0L7Qt9C80ZbRgNGDXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICByZXNpemVDYW52YXMoKTtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzaXplQ2FudmFzKCk7XG4gICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzaXplQ2FudmFzKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplQ2FudmFzKTtcblxuICAgICAgICAvLyDQl9Cw0LLQsNC90YLQsNC20LXQvdC90Y8g0LfQvtCx0YDQsNC20LXQvdC90Y8g0YHQvdGW0LbQuNC90LrQuFxuICAgICAgICBjb25zdCBzbm93Zmxha2VJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBsZXQgaW1hZ2VMb2FkZWQgPSBmYWxzZTtcblxuICAgICAgICBzbm93Zmxha2VJbWFnZS5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGltYWdlTG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vINCn0LXQutCw0ZTQvNC+INC/0L7QutC4INGB0YLQvtGA0ZbQvdC60LAg0LLQuNC50LTQtSDQt9GWINGB0YLQsNC90YMgbG9hZGluZyDQv9C10YDQtdC0INGB0YLQsNGA0YLQvtC8INCw0L3RltC80LDRhtGW0ZdcbiAgICAgICAgICAgIGZ1bmN0aW9uIHdhaXRGb3JQYWdlUmVhZHkoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXNQYWdlTG9hZGluZyA9IG1haW5QYWdlICYmIG1haW5QYWdlLmNsYXNzTGlzdC5jb250YWlucygnbG9hZGluZycpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChpc1BhZ2VMb2FkaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNpemVDYW52YXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNpemVDYW52YXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g0JTQvtC00LDRgtC60L7QstCwINC/0LXRgNC10LLRltGA0LrQsCDQv9GW0YHQu9GPINGJ0LUg0L7QtNC90L7Qs9C+INC60LDQtNGA0YNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc2l6ZUNhbnZhcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhbnZhcy53aWR0aCA+IDAgJiYgY2FudmFzLmhlaWdodCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsQ2FudmFzV2l0aFNub3dmbGFrZXMoKTsgLy8g0JfQsNC/0L7QstC90Y7RlNC80L4g0LrQsNC90LLQsNGBINGB0L3RltC20LjQvdC60LDQvNC4INC/0YDQuCDQv9C10YDRiNC+0LzRgyDRgNC10L3QtNC10YDRllxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QW5pbWF0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vINCv0LrRidC+INCy0YHQtSDRidC1INC90LXQv9GA0LDQstC40LvRjNC90LjQuSDRgNC+0LfQvNGW0YAsINC/0L7QstGC0L7RgNGO0ZTQvNC+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCh3YWl0Rm9yUGFnZVJlYWR5LCA1MCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDQwMCk7IC8vINCn0LXQutCw0ZTQvNC+INGC0YDQvtGF0Lgg0LHRltC70YzRiNC1INC90ZbQtiBoaWRlTG9hZGVyICgzMDBtcylcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyDQodGC0L7RgNGW0L3QutCwINCz0L7RgtC+0LLQsCwg0LLRgdGC0LDQvdC+0LLQu9GO0ZTQvNC+INGA0L7Qt9C80ZbRgCDRgtCwINC30LDQv9GD0YHQutCw0ZTQvNC+XG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNpemVDYW52YXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzaXplQ2FudmFzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzaXplQ2FudmFzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYW52YXMud2lkdGggPiAwICYmIGNhbnZhcy5oZWlnaHQgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbENhbnZhc1dpdGhTbm93Zmxha2VzKCk7IC8vINCX0LDQv9C+0LLQvdGO0ZTQvNC+INC60LDQvdCy0LDRgSDRgdC90ZbQttC40L3QutCw0LzQuCDQv9GA0Lgg0L/QtdGA0YjQvtC80YMg0YDQtdC90LTQtdGA0ZZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QW5pbWF0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHdhaXRGb3JQYWdlUmVhZHkoKTtcbiAgICAgICAgfTtcbiAgICAgICAgc25vd2ZsYWtlSW1hZ2Uuc3JjID0gJ2ltZy9zbm93Zmxha2UucG5nJztcbiAgICAgICBcblxuICAgICAgICAvLyDQmtC70LDRgSDQtNC70Y8g0YHQvdGW0LbQuNC90LrQuFxuICAgICAgICBjbGFzcyBTbm93Zmxha2Uge1xuICAgICAgICAgICAgY29uc3RydWN0b3IoaW5pdGlhbFkgPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy54ID0gTWF0aC5yYW5kb20oKSAqIChjYW52YXMud2lkdGggfHwgd2luZG93LmlubmVyV2lkdGgpO1xuICAgICAgICAgICAgICAgIC8vINCv0LrRidC+INC/0LXRgNC10LTQsNC90L4gaW5pdGlhbFksINCy0LjQutC+0YDQuNGB0YLQvtCy0YPRlNC80L4g0ZfRlyAo0LTQu9GPINC/0L7Rh9Cw0YLQutC+0LLQvtCz0L4g0LfQsNC/0L7QstC90LXQvdC90Y8g0LrQsNC90LLQsNGB0YMpXG4gICAgICAgICAgICAgICAgLy8g0IbQvdCw0LrRiNC1INGB0L/QsNCy0L3QuNC80L4g0LfQstC10YDRhdGDXG4gICAgICAgICAgICAgICAgdGhpcy55ID0gaW5pdGlhbFkgIT09IG51bGwgPyBpbml0aWFsWSA6IC0yMDtcbiAgICAgICAgICAgICAgICB0aGlzLnNpemUgPSBNYXRoLnJhbmRvbSgpICogKFNOT1dGTEFLRV9NQVhfU0laRSAtIFNOT1dGTEFLRV9NSU5fU0laRSkgKyBTTk9XRkxBS0VfTUlOX1NJWkU7XG4gICAgICAgICAgICAgICAgdGhpcy5zcGVlZCA9IE1hdGgucmFuZG9tKCkgKiAoU05PV0ZMQUtFX01BWF9TUEVFRCAtIFNOT1dGTEFLRV9NSU5fU1BFRUQpICsgU05PV0ZMQUtFX01JTl9TUEVFRDtcbiAgICAgICAgICAgICAgICB0aGlzLndpbmQgPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiBTTk9XRkxBS0VfV0lORF9SQU5HRTtcbiAgICAgICAgICAgICAgICB0aGlzLm9wYWNpdHkgPSBNYXRoLnJhbmRvbSgpICogMC41ICsgMC41O1xuICAgICAgICAgICAgICAgIHRoaXMucm90YXRpb24gPSBNYXRoLnJhbmRvbSgpICogTWF0aC5QSSAqIDI7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3RhdGlvblNwZWVkID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMC4wMjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdXBkYXRlKCkge1xuICAgICAgICAgICAgICAgIHRoaXMueSArPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgICAgIHRoaXMueCArPSB0aGlzLndpbmQgKyAoTWF0aC5zaW4odGhpcy55ICogMC4wMSkgKiAwLjIpO1xuICAgICAgICAgICAgICAgIHRoaXMucm90YXRpb24gKz0gdGhpcy5yb3RhdGlvblNwZWVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkcmF3KCkge1xuICAgICAgICAgICAgICAgIGlmICghaW1hZ2VMb2FkZWQpIHJldHVybjtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNC60LAg0YfQuCBjYW52YXMg0LzQsNGUINC/0YDQsNCy0LjQu9GM0L3QuNC5INGA0L7Qt9C80ZbRgFxuICAgICAgICAgICAgICAgIGlmIChjYW52YXMud2lkdGggPT09IDAgfHwgY2FudmFzLmhlaWdodCA9PT0gMCkgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgY3R4LnNhdmUoKTtcbiAgICAgICAgICAgICAgICBjdHguZ2xvYmFsQWxwaGEgPSB0aGlzLm9wYWNpdHk7XG4gICAgICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZSh0aGlzLngsIHRoaXMueSk7XG4gICAgICAgICAgICAgICAgY3R4LnJvdGF0ZSh0aGlzLnJvdGF0aW9uKTtcbiAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgICAgICAgICBzbm93Zmxha2VJbWFnZSxcbiAgICAgICAgICAgICAgICAgICAgLXRoaXMuc2l6ZSAvIDIsXG4gICAgICAgICAgICAgICAgICAgIC10aGlzLnNpemUgLyAyLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNpemUsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2l6ZVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgY3R4LnJlc3RvcmUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaXNPZmZTY3JlZW4oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMueSA+IGNhbnZhcy5oZWlnaHQgKyAyMCB8fCBcbiAgICAgICAgICAgICAgICAgICAgICAgdGhpcy54IDwgLTIwIHx8IFxuICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnggPiBjYW52YXMud2lkdGggKyAyMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVNub3dmbGFrZShpbml0aWFsWSA9IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChzbm93Zmxha2VzLmxlbmd0aCA8IFNOT1dGTEFLRV9DT1VOVCkge1xuICAgICAgICAgICAgICAgIHNub3dmbGFrZXMucHVzaChuZXcgU25vd2ZsYWtlKGluaXRpYWxZKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vINCk0YPQvdC60YbRltGPINC00LvRjyDQv9C+0YfQsNGC0LrQvtCy0L7Qs9C+INC30LDQv9C+0LLQvdC10L3QvdGPINC60LDQvdCy0LDRgdGDINGB0L3RltC20LjQvdC60LDQvNC4XG4gICAgICAgIGZ1bmN0aW9uIGZpbGxDYW52YXNXaXRoU25vd2ZsYWtlcygpIHtcbiAgICAgICAgICAgIGlmIChjYW52YXMud2lkdGggPT09IDAgfHwgY2FudmFzLmhlaWdodCA9PT0gMCkgcmV0dXJuO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQodGC0LLQvtGA0Y7RlNC80L4g0YHQvdGW0LbQuNC90LrQuCDQv9C+INCy0YHRjNC+0LzRgyDQutCw0L3QstCw0YHRgyAo0LLRgdGWIDIwMCDRgdC90ZbQttC40L3QvtC6KVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBTTk9XRkxBS0VfQ09VTlQ7IGkrKykge1xuICAgICAgICAgICAgICAgIC8vINCg0L7Qt9C/0L7QtNGW0LvRj9GU0LzQviDRgdC90ZbQttC40L3QutC4INC/0L4g0LLRgdGW0Lkg0LLQuNGB0L7RgtGWINC60LDQvdCy0LDRgdGDXG4gICAgICAgICAgICAgICAgY29uc3QgaW5pdGlhbFkgPSBNYXRoLnJhbmRvbSgpICogY2FudmFzLmhlaWdodDtcbiAgICAgICAgICAgICAgICBjcmVhdGVTbm93Zmxha2UoaW5pdGlhbFkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlU25vd2ZsYWtlcygpIHtcbiAgICAgICAgICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gICAgICAgICAgICBpZiAobm93IC0gbGFzdFNub3dmbGFrZVRpbWUgPiBTTk9XRkxBS0VfU1BBV05fSU5URVJWQUwpIHtcbiAgICAgICAgICAgICAgICBjcmVhdGVTbm93Zmxha2UoKTtcbiAgICAgICAgICAgICAgICBsYXN0U25vd2ZsYWtlVGltZSA9IG5vdztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHNub3dmbGFrZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICBzbm93Zmxha2VzW2ldLnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgIGlmIChzbm93Zmxha2VzW2ldLmlzT2ZmU2NyZWVuKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgc25vd2ZsYWtlcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZHJhd1Nub3dmbGFrZXMoKSB7XG4gICAgICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNC60LAg0YfQuCBjYW52YXMg0LzQsNGUINC/0YDQsNCy0LjQu9GM0L3QuNC5INGA0L7Qt9C80ZbRgCDQv9C10YDQtdC0INC80LDQu9GO0LLQsNC90L3Rj9C8XG4gICAgICAgICAgICBpZiAoY2FudmFzLndpZHRoID09PSAwIHx8IGNhbnZhcy5oZWlnaHQgPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXNpemVDYW52YXMoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIHNub3dmbGFrZXMuZm9yRWFjaChzbm93Zmxha2UgPT4ge1xuICAgICAgICAgICAgICAgIHNub3dmbGFrZS5kcmF3KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGFuaW1hdGUoKSB7XG4gICAgICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNGP0ZTQvNC+INGA0L7Qt9C80ZbRgCBjYW52YXMg0L3QsCDQv9C+0YfQsNGC0LrRgyDQutC+0LbQvdC+0LPQviDQutCw0LTRgNGDICjRgtGW0LvRjNC60Lgg0Y/QutGJ0L4g0LLRltC9INC90LXQv9GA0LDQstC40LvRjNC90LjQuSlcbiAgICAgICAgICAgIGlmIChjYW52YXMud2lkdGggPT09IDAgfHwgY2FudmFzLmhlaWdodCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJlc2l6ZUNhbnZhcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB1cGRhdGVTbm93Zmxha2VzKCk7XG4gICAgICAgICAgICBkcmF3U25vd2ZsYWtlcygpO1xuICAgICAgICAgICAgYW5pbWF0aW9uSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBzdGFydEFuaW1hdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChhbmltYXRpb25JZCkge1xuICAgICAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbklkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFuaW1hdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vINCX0YPQv9C40L3Rj9GU0LzQviDQsNC90ZbQvNCw0YbRltGOINC/0YDQuCDQstC40YXQvtC00ZYg0Lcgdmlld3BvcnRcbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICAgICAgICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghYW5pbWF0aW9uSWQgJiYgaW1hZ2VMb2FkZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QW5pbWF0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYW5pbWF0aW9uSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbklkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbklkID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGNhbnZhcyk7XG4gICAgfVxuICAgIFxuICAgIGxvYWRUcmFuc2xhdGlvbnMoKVxuICAgICAgICAudGhlbihpbml0KSAvLyDQt9Cw0L/Rg9GB0Log0ZbQvdGW0YLRgyDRgdGC0L7RgNGW0L3QutC4XG5cblxuXG5cblxuICAgIC8vIGNvbnN0IGxuZ0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG5nLWJ0blwiKVxuICAgIC8vXG4gICAgLy8gLy8g0JLRgdGC0LDQvdC+0LLQu9GO0ZTQvNC+INGC0LXQutGB0YIg0LrQvdC+0L/QutC4INC90LAg0L/QvtGC0L7Rh9C90YMg0LDQutGC0LjQstC90YMg0LzQvtCy0YNcbiAgICAvLyBmdW5jdGlvbiB1cGRhdGVMYW5ndWFnZUJ1dHRvbigpIHtcbiAgICAvLyAgICAgLy8g0JLQuNC60L7RgNC40YHRgtC+0LLRg9GU0LzQviDRgtGDINGB0LDQvNGDINC70L7Qs9GW0LrRgywg0YnQviDRliDQtNC70Y8g0LLQuNC30L3QsNGH0LXQvdC90Y8gbG9jYWxlXG4gICAgLy8gICAgIGxldCBjdXJyZW50TG9jYWxlID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsZVwiKSB8fCBcImhyXCI7XG4gICAgLy8gICAgIGlmIChockxlbmcpIGN1cnJlbnRMb2NhbGUgPSAnaHInO1xuICAgIC8vICAgICBpZiAoZW5MZW5nKSBjdXJyZW50TG9jYWxlID0gJ2VuJztcbiAgICAvLyAgICAgaWYgKGxuZ0J0bikge1xuICAgIC8vICAgICAgICAgbG5nQnRuLnRleHRDb250ZW50ID0gY3VycmVudExvY2FsZTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cbiAgICAvL1xuICAgIC8vIC8vINCe0L3QvtCy0LvRjtGU0LzQviDQutC90L7Qv9C60YMg0L/RgNC4INC30LDQstCw0L3RgtCw0LbQtdC90L3RliAo0L/RltGB0LvRjyDQstC40LfQvdCw0YfQtdC90L3RjyBsb2NhbGUpXG4gICAgLy8gdXBkYXRlTGFuZ3VhZ2VCdXR0b24oKTtcblxuICAgIC8vIGlmIChsbmdCdG4pIHtcbiAgICAvLyAgICAgbG5nQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgLy8gICAgICAgICAvLyDQktC40LfQvdCw0YfQsNGU0LzQviDQv9C+0YLQvtGH0L3RgyDQvNC+0LLRgyDQv9C10YDQtdC0INC/0LXRgNC10LzQuNC60LDQvdC90Y/QvFxuICAgIC8vICAgICAgICAgbGV0IGN1cnJlbnRMb2NhbGUgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxlXCIpIHx8IFwiaHJcIjtcbiAgICAvLyAgICAgICAgIGlmIChockxlbmcpIGN1cnJlbnRMb2NhbGUgPSAnaHInO1xuICAgIC8vICAgICAgICAgaWYgKGVuTGVuZykgY3VycmVudExvY2FsZSA9ICdlbic7XG4gICAgLy9cbiAgICAvLyAgICAgICAgIGlmIChjdXJyZW50TG9jYWxlID09PSBcImVuXCIpIHtcbiAgICAvLyAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwibG9jYWxlXCIpO1xuICAgIC8vICAgICAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwibG9jYWxlXCIsIFwiZW5cIik7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgLy8gICAgIH0pO1xuICAgIC8vIH1cbiAgICAvL1xuICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1idG5cIik/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgLy8gICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS10ZXN0XCIpPy5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKTtcbiAgICAvLyB9KTtcblxuICAgIC8vINCi0LjQvNGH0LDRgdC+0LLQuNC5INC+0LEn0ZTQutGCINC3INC00LDQvdC40LzQuCDQv9GA0L4g0L/RgNC+0LzRltC20LrQuCDRgtC40LbQvdGW0LJcbiAgICAvLyBUT0RPOiDQl9Cw0LzRltC90LjRgtC4INC90LAg0LTQsNC90ZYg0Lcg0LHQtdC60LXQvdC00YNcbiAgICAvLyDQn9GA0LjQutC70LDQtCDRgdGC0YDRg9C60YLRg9GA0Lgg0LTQsNC90LjRhSDQtyDQsdC10LrQtdC90LTRgzpcbiAgICAvLyB7XG4gICAgLy8gICAgIDE6IHsgc3RhcnQ6IFwiMjAyNS0xMi0xNVQwMDowMDowMFwiLCBlbmQ6IFwiMjAyNS0xMi0yMVQyMzo1OTo1OVwiIH0sXG4gICAgLy8gICAgIDI6IHsgc3RhcnQ6IFwiMjAyNS0xMi0yMlQwMDowMDowMFwiLCBlbmQ6IFwiMjAyNS0xMi0yOFQyMzo1OTo1OVwiIH0sXG4gICAgLy8gICAgIC4uLlxuICAgIC8vIH1cbiAgICAvLyDQlNC70Y8g0ZbQvdGC0LXQs9GA0LDRhtGW0Zcg0Lcg0LHQtdC60LXQvdC00L7QvDog0LfQsNC80ZbQvdC40YLQuCDRhtC10Lkg0L7QsSfRlNC60YIg0L3QsCDQtNCw0L3RliDQtyBBUElcbiAgICAvLyDQndCw0L/RgNC40LrQu9Cw0LQ6IGNvbnN0IHdlZWtzRGF0YSA9IGF3YWl0IHJlcXVlc3QoJy9hcGkvd2Vla3MnKTtcbiAgICBjb25zdCB3ZWVrc0RhdGEgPSB7XG4gICAgICAgIDE6IHtcbiAgICAgICAgICAgIHN0YXJ0OiBcIjIwMjUtMTItMTVUMDA6MDA6MDBcIixcbiAgICAgICAgICAgIGVuZDogXCIyMDI1LTEyLTIxVDIzOjU5OjU5XCJcbiAgICAgICAgfSxcbiAgICAgICAgMjoge1xuICAgICAgICAgICAgc3RhcnQ6IFwiMjAyNS0xMi0yMlQwMDowMDowMFwiLFxuICAgICAgICAgICAgZW5kOiBcIjIwMjUtMTItMjhUMjM6NTk6NTlcIlxuICAgICAgICB9LFxuICAgICAgICAzOiB7XG4gICAgICAgICAgICBzdGFydDogXCIyMDI1LTEyLTI5VDAwOjAwOjAwXCIsXG4gICAgICAgICAgICBlbmQ6IFwiMjAyNi0wMS0wNFQyMzo1OTo1OVwiXG4gICAgICAgIH0sXG4gICAgICAgIDQ6IHtcbiAgICAgICAgICAgIHN0YXJ0OiBcIjIwMjYtMDEtMDVUMDA6MDA6MDBcIixcbiAgICAgICAgICAgIGVuZDogXCIyMDI2LTAxLTExVDIzOjU5OjU5XCJcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyDQpNGD0L3QutGG0ZbRjyDQtNC70Y8g0LLQuNC30L3QsNGH0LXQvdC90Y8g0LDQutGC0LjQstC90L7Qs9C+INGC0LjQttC90Y8g0L3QsCDQvtGB0L3QvtCy0ZYg0LTQsNC90LjRhSDQtyDQvtCxJ9GU0LrRgtCwXG4gICAgZnVuY3Rpb24gZ2V0QWN0aXZlV2Vlayh3ZWVrc0RhdGEpIHtcbiAgICAgICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBsZXQgYWN0aXZlV2Vla0luZGV4ID0gbnVsbDtcblxuICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNC60LAg0LrQvtC20L3QvtCz0L4g0YLQuNC20L3Rj1xuICAgICAgICBmb3IgKGNvbnN0IHdlZWtOdW0gaW4gd2Vla3NEYXRhKSB7XG4gICAgICAgICAgICBjb25zdCB3ZWVrID0gd2Vla3NEYXRhW3dlZWtOdW1dO1xuICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSBuZXcgRGF0ZSh3ZWVrLnN0YXJ0KTtcbiAgICAgICAgICAgIGNvbnN0IGVuZCA9IG5ldyBEYXRlKHdlZWsuZW5kKTtcblxuICAgICAgICAgICAgaWYgKGN1cnJlbnREYXRlID49IHN0YXJ0ICYmIGN1cnJlbnREYXRlIDw9IGVuZCkge1xuICAgICAgICAgICAgICAgIGFjdGl2ZVdlZWtJbmRleCA9IHBhcnNlSW50KHdlZWtOdW0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFjdGl2ZVdlZWtJbmRleDtcbiAgICB9XG5cbiAgICAvLyDQhtC90ZbRhtGW0LDQu9GW0LfQsNGG0ZbRjyDRgdC10LrRhtGW0Zcg0ZbQs9C+0YAg0Lcg0LDQstGC0L7QvNCw0YLQuNGH0L3QuNC8INCy0LjQt9C90LDRh9C10L3QvdGP0Lwg0YLQuNC20L3Rj1xuICAgIGZ1bmN0aW9uIGluaXRHYW1lc1dlZWsoKSB7XG4gICAgICAgIC8vINCS0LjQt9C90LDRh9Cw0ZTQvNC+INCw0LrRgtC40LLQvdC40Lkg0YLQuNC20LTQtdC90Ywg0L3QsCDQvtGB0L3QvtCy0ZYg0LTQsNC90LjRhSDQtyDQvtCxJ9GU0LrRgtCwXG4gICAgICAgIGxldCBhY3RpdmVXZWVrID0gZ2V0QWN0aXZlV2Vlayh3ZWVrc0RhdGEpIHx8IDE7XG5cbiAgICAgICAgLy8g0J7QsdC80LXQttC10L3QvdGPINC00L4gNCDRgtC40LbQvdGW0LJcbiAgICAgICAgaWYgKGFjdGl2ZVdlZWsgPiA0KSBhY3RpdmVXZWVrID0gNDtcblxuICAgICAgICAvLyDQn9GA0LjRhdC+0LLRg9Cy0LDQvdC90Y8g0LLRgdGW0YUg0YHQv9C40YHQutGW0LIg0ZbQs9C+0YBcbiAgICAgICAgY29uc3QgZ2FtZUxpc3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdhbWVzX19saXN0Jyk7XG4gICAgICAgIGdhbWVMaXN0cy5mb3JFYWNoKGxpc3QgPT4ge1xuICAgICAgICAgICAgbGlzdC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vINCf0L7QutCw0Lcg0YLRltC70YzQutC4INCw0LrRgtC40LLQvdC+0LPQviDRgtC40LbQvdGPXG4gICAgICAgIGNvbnN0IGN1cnJlbnRMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmdhbWVzX19saXN0Ll93ZWVrJHthY3RpdmVXZWVrfWApO1xuICAgICAgICBpZiAoY3VycmVudExpc3QpIHtcbiAgICAgICAgICAgIGN1cnJlbnRMaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vINCQ0LLRgtC+0LzQsNGC0LjRh9C90LUg0LTQvtC00LDQstCw0L3QvdGPIGRhdGEt0LDRgtGA0LjQsdGD0YLRltCyINC00LvRjyDRgtGA0LXQutGW0L3Qs9GDINGC0LAg0LLRgdGC0LDQvdC+0LLQu9C10L3QvdGPINC/0L7RgdC40LvQsNC90YxcbiAgICAgICAgYXV0b0FkZERhdGFCdXR0b25zKCk7XG4gICAgICAgIHNldEdhbWVMaW5rcygpO1xuICAgIH1cblxuICAgIC8vINCi0LjQvNGH0LDRgdC+0LLQuNC5INC+0LEn0ZTQutGCINC3INC80LDQv9GW0L3Qs9C+0LwgZ2FtZS1pZCDQvdCwIFVSTFxuICAgIC8vIFRPRE86INCX0LDQvNGW0L3QuNGC0Lgg0L3QsCDQtNCw0L3RliDQtyDQsdC10LrQtdC90LTRg1xuICAgIC8vINCf0YDQuNC60LvQsNC0INGB0YLRgNGD0LrRgtGD0YDQuCDQtNCw0L3QuNGFINC3INCx0LXQutC10L3QtNGDOlxuICAgIC8vIHtcbiAgICAvLyAgICAgXCJ3ZWVrMV9nYW1lMVwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL2dhbWUtc2x1Zy0xXCIsXG4gICAgLy8gICAgIFwid2VlazFfZ2FtZTJcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9nYW1lLXNsdWctMlwiLFxuICAgIC8vICAgICAuLi5cbiAgICAvLyB9XG4gICAgLy8g0JTQu9GPINGW0L3RgtC10LPRgNCw0YbRltGXINC3INCx0LXQutC10L3QtNC+0Lw6IGNvbnN0IGdhbWVzTGlua3MgPSBhd2FpdCByZXF1ZXN0KCcvYXBpL2dhbWVzL2xpbmtzJyk7XG4gICAgY29uc3QgZ2FtZXNMaW5rcyA9IHtcbiAgICAgICAgLy8gV2VlayAxXG4gICAgICAgIFwid2VlazFfZ2FtZTFcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZTEvXCIsXG4gICAgICAgIFwid2VlazFfZ2FtZTJcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrMV9nYW1lM1wiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWsxX2dhbWU0XCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazFfZ2FtZTVcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrMV9nYW1lNlwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWsxX2dhbWU3XCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazFfZ2FtZThcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrMV9nYW1lOVwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWsxX2dhbWUxMFwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICAvLyBXZWVrIDJcbiAgICAgICAgXCJ3ZWVrMl9nYW1lMVwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWsyX2dhbWUyXCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazJfZ2FtZTNcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrMl9nYW1lNFwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWsyX2dhbWU1XCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazJfZ2FtZTZcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrMl9nYW1lN1wiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWsyX2dhbWU4XCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazJfZ2FtZTlcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrMl9nYW1lMTBcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgLy8gV2VlayAzXG4gICAgICAgIFwid2VlazNfZ2FtZTFcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrM19nYW1lMlwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWszX2dhbWUzXCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazNfZ2FtZTRcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrM19nYW1lNVwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWszX2dhbWU2XCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazNfZ2FtZTdcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrM19nYW1lOFwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWszX2dhbWU5XCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazNfZ2FtZTEwXCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIC8vIFdlZWsgNFxuICAgICAgICBcIndlZWs0X2dhbWUxXCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazRfZ2FtZTJcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrNF9nYW1lM1wiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWs0X2dhbWU0XCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazRfZ2FtZTVcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrNF9nYW1lNlwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWs0X2dhbWU3XCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazRfZ2FtZThcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrNF9nYW1lOVwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWs0X2dhbWUxMFwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiXG4gICAgfTtcblxuICAgIC8vINCS0YHRgtCw0L3QvtCy0LvQtdC90L3RjyDRg9C90ZbQutCw0LvRjNC90LjRhSDQv9C+0YHQuNC70LDQvdGMINC00LvRjyDQutC+0LbQvdC+0Zcg0LPRgNC4XG4gICAgZnVuY3Rpb24gc2V0R2FtZUxpbmtzKCkge1xuICAgICAgICBjb25zdCBnYW1lTGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2FtZXNfX2l0ZW0tbGlua1tkYXRhLWdhbWUtaWRdJyk7XG4gICAgICAgIFxuICAgICAgICBnYW1lTGlua3MuZm9yRWFjaChsaW5rID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGdhbWVJZCA9IGxpbmsuZ2V0QXR0cmlidXRlKCdkYXRhLWdhbWUtaWQnKTtcbiAgICAgICAgICAgIGlmIChnYW1lSWQgJiYgZ2FtZXNMaW5rc1tnYW1lSWRdKSB7XG4gICAgICAgICAgICAgICAgbGluay5ocmVmID0gZ2FtZXNMaW5rc1tnYW1lSWRdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyDQkNCy0YLQvtC80LDRgtC40YfQvdC1INC00L7QtNCw0LLQsNC90L3RjyBkYXRhLdCw0YLRgNC40LHRg9GC0ZbQsiDQtNC70Y8g0YLRgNC10LrRltC90LPRg1xuICAgIGZ1bmN0aW9uIGF1dG9BZGREYXRhQnV0dG9ucygpIHtcbiAgICAgICAgY29uc3QgZ2FtZUxpc3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdhbWVzX19saXN0Jyk7XG4gICAgICAgIFxuICAgICAgICBnYW1lTGlzdHMuZm9yRWFjaChsaXN0ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHdlZWtNYXRjaCA9IGxpc3QuY2xhc3NOYW1lLm1hdGNoKC9fd2VlayhcXGQrKS8pO1xuICAgICAgICAgICAgaWYgKCF3ZWVrTWF0Y2gpIHJldHVybjtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3Qgd2VlayA9IHdlZWtNYXRjaFsxXTtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1zID0gbGlzdC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2FtZXNfX2l0ZW0nKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBnYW1lTnVtYmVyID0gaW5kZXggKyAxO1xuICAgICAgICAgICAgICAgIGNvbnN0IGJ1dHRvbk5hbWUgPSBgd2VlayR7d2Vla31HYW1lJHtnYW1lTnVtYmVyfWA7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgbGlua0VsID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuZ2FtZXNfX2l0ZW0tbGluaycpO1xuICAgICAgICAgICAgICAgIGlmIChsaW5rRWwpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g0J7QvdC+0LLQu9GO0ZTQvNC+IGRhdGEtYnV0dG9uINGP0LrRidC+INGJ0LUg0L3QtSDQstGB0YLQsNC90L7QstC70LXQvdC+INCw0LHQviDQvdC10LrQvtGA0LXQutGC0L3QtVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50QnV0dG9uID0gbGlua0VsLmdldEF0dHJpYnV0ZSgnZGF0YS1idXR0b24nKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjdXJyZW50QnV0dG9uIHx8ICFjdXJyZW50QnV0dG9uLmluY2x1ZGVzKGB3ZWVrJHt3ZWVrfUdhbWVgKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlua0VsLnNldEF0dHJpYnV0ZSgnZGF0YS1idXR0b24nLCBidXR0b25OYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyDQktGB0YLQsNC90L7QstC70Y7RlNC80L4gZGF0YS1wcm9tbyDRj9C60YnQviDRidC1INC90LUg0LLRgdGC0LDQvdC+0LLQu9C10L3QvlxuICAgICAgICAgICAgICAgICAgICBpZiAoIWxpbmtFbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvbW8nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlua0VsLnNldEF0dHJpYnV0ZSgnZGF0YS1wcm9tbycsICdyYXppbmFfMjAyNl9ocicpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vINCS0LjQutC70LjQutCw0ZTQvNC+IGluaXRQYWdlSGVpZ2h0INC/0YDQuCDQt9Cw0LLQsNC90YLQsNC20LXQvdC90ZYg0YHRgtC+0YDRltC90LrQuFxuICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnbG9hZGluZycpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICAgICAgICAgIGluaXRQYWdlSGVpZ2h0KCk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIERPTSDQstC20LUg0LfQsNCy0LDQvdGC0LDQttC10L3QuNC5XG4gICAgICAgIGluaXRQYWdlSGVpZ2h0KCk7XG4gICAgfVxuXG4gICAgLy8g0JLQuNC60LvQuNC60LDRlNC80L4gaW5pdCgpINC00LvRjyDRltC90ZbRhtGW0LDQu9GW0LfQsNGG0ZbRlyDQstGB0ZbRhSDQutC+0LzQv9C+0L3QtdC90YLRltCyXG4gICAgaW5pdCgpO1xuXG59KSgpO1xuIl19
