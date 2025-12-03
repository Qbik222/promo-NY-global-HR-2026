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

    // Зупиняємо анімацію при виході з viewport (опціонально)
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwibWFpblBhZ2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJsb2FkZXIiLCJyZXN1bHRzVGFibGUiLCJyZXN1bHRzVGFibGVPdGhlciIsImhyTGVuZyIsImVuTGVuZyIsImxvY2FsZSIsImRlYnVnIiwiaGlkZUxvYWRlciIsImkxOG5EYXRhIiwidHJhbnNsYXRlU3RhdGUiLCJ1c2VySWQiLCJyZXF1ZXN0IiwibGluayIsImV4dHJhT3B0aW9ucyIsImZldGNoIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJvayIsIkVycm9yIiwianNvbiIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsInJlcG9ydEVycm9yIiwic3R5bGUiLCJkaXNwbGF5Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwic3RhcnRzV2l0aCIsIlByb21pc2UiLCJyZWplY3QiLCJjbGFzc0xpc3QiLCJhZGQiLCJib2R5Iiwib3ZlcmZsb3ciLCJyZW1vdmUiLCJpbml0UGFnZUhlaWdodCIsImZhdlBhZ2UiLCJmcmFtZSIsInN0aWNreVdyYXAiLCJoZWFkZXJIZWlnaHQiLCJpbm5lcldpZHRoIiwiZm9vdGVySGVpZ2h0Iiwidmlld3BvcnRIZWlnaHQiLCJpbm5lckhlaWdodCIsImZhdlBhZ2VIZWlnaHQiLCJtaW5IZWlnaHQiLCJtYXhIZWlnaHQiLCJmcmFtZUhlaWdodCIsIm1hcmdpblRvcCIsImluaXQiLCJ0cnlEZXRlY3RVc2VySWQiLCJxdWlja0NoZWNrQW5kUmVuZGVyIiwiaW5pdEdhbWVzV2VlayIsImluaXRQcm9ncmVzc0JhciIsImluaXRQYXJ0aWNpcGF0ZUNhbnZhcyIsImluaXRTbm93Zmxha2VzQ2FudmFzIiwic2V0VGltZW91dCIsInJlc2l6ZVRpbWVvdXQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xlYXJUaW1lb3V0IiwiZHJvcGRvd25zIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJkcm9wZG93biIsImV2ZW50Iiwib3BlbiIsInN1bW1hcnkiLCJzdW1tYXJ5UmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImN1cnJlbnRTY3JvbGxZIiwic2Nyb2xsWSIsInBhZ2VZT2Zmc2V0IiwidGFyZ2V0U2Nyb2xsWSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInNjcm9sbFRvIiwiTWF0aCIsIm1heCIsImJlaGF2aW9yIiwic3RvcmUiLCJzdGF0ZSIsImdldFN0YXRlIiwiYXV0aCIsImlzQXV0aG9yaXplZCIsImlkIiwiZ191c2VyX2lkIiwiYXR0ZW1wdHMiLCJtYXhBdHRlbXB0cyIsImF0dGVtcHRJbnRlcnZhbCIsIndhaXRGb3JVc2VySWQiLCJyZXNvbHZlIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJsb2FkVHJhbnNsYXRpb25zIiwidHJhbnNsYXRlIiwicmVwb3J0RGF0YSIsIm9yaWdpbiIsInVzZXJpZCIsImVycm9yVGV4dCIsInRleHQiLCJtZXNzYWdlIiwidHlwZSIsIm5hbWUiLCJzdGFjayIsIm1ldGhvZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ3YXJuIiwiZWxlbXMiLCJsZW5ndGgiLCJlbGVtIiwia2V5IiwiZ2V0QXR0cmlidXRlIiwiaW5uZXJIVE1MIiwicmVtb3ZlQXR0cmlidXRlIiwibG9nIiwicmVmcmVzaExvY2FsaXplZENsYXNzIiwiZWxlbWVudCIsImxhbmciLCJyZW5kZXJVc2VycyIsIndlZWtOdW0iLCJ1c2VyRGF0YSIsIk51bWJlciIsIndlZWtPYmoiLCJmaW5kIiwidyIsIndlZWsiLCJkYXRhIiwiQXJyYXkiLCJpc0FycmF5IiwidXNlcnMiLCJpc1N0YWdlRW5kZWQiLCJ3aW5uZXJBZGRpdGlvbmFsUHJpemUiLCJ1Iiwid2lubmVyIiwiY3VycmVudFVzZXIiLCJ1c2VyIiwiaXNWZXJpZmllZFVzZXIiLCJwb2ludHMiLCJwb3B1bGF0ZVVzZXJzVGFibGUiLCJjdXJyZW50VXNlcklkIiwic2Vjb25kVGFibGVPdGhlciIsInNlY29uZFRhYmxlIiwiaXNUb3BDdXJyZW50VXNlciIsInNsaWNlIiwic29tZSIsInRvcFVzZXJzTGVuZ3RoIiwidG9wVXNlcnMiLCJkaXNwbGF5VXNlciIsImlzQ3VycmVudFVzZXIiLCJ0YWJsZSIsInJlbmRlclJvdyIsIm9wdGlvbnMiLCJoaWdobGlnaHQiLCJuZWlnaGJvciIsInVzZXJSb3ciLCJjcmVhdGVFbGVtZW50IiwidXNlclBsYWNlIiwiaW5kZXhPZiIsInByaXplS2V5IiwiZ2V0UHJpemVUcmFuc2xhdGlvbktleSIsInRyYW5zbGF0ZUtleSIsIm1hc2tVc2VySWQiLCJ0b0ZpeGVkIiwiYXBwZW5kIiwiaW5kZXgiLCJjYW52YXMiLCJwZXJjZW50RWxlbWVudCIsImN0eCIsImdldENvbnRleHQiLCJiYXJIZWlnaHQiLCJzZWdtZW50V2lkdGgiLCJzZWdtZW50SGVpZ2h0Iiwic2VnbWVudEdhcCIsInBhZGRpbmciLCJzZWdtZW50UmFkaXVzIiwiY3VycmVudFByb2dyZXNzIiwidGFyZ2V0UHJvZ3Jlc3MiLCJsb2FkaW5nRHVyYXRpb24iLCJzdGFydFRpbWUiLCJEYXRlIiwibm93IiwiYW5pbWF0aW9uSWQiLCJtYXhTZWdtZW50cyIsImlzTG9hZGluZ0NvbXBsZXRlIiwicmVzaXplQ2FudmFzIiwiY29udGFpbmVyIiwicGFyZW50RWxlbWVudCIsImNvbnRhaW5lcldpZHRoIiwib2Zmc2V0V2lkdGgiLCJ3aWR0aCIsImhlaWdodCIsImF2YWlsYWJsZVdpZHRoIiwic2VnbWVudFdpdGhHYXAiLCJmbG9vciIsImRyYXdQcm9ncmVzc0JhciIsInByb2dyZXNzIiwiY2xlYXJSZWN0Iiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJzdHJva2VSZWN0IiwiZmlsbGVkU2VnbWVudHMiLCJmaWxsU3R5bGUiLCJjZW50ZXJZIiwiaSIsIngiLCJ5IiwiYmVnaW5QYXRoIiwicm91bmRSZWN0IiwiciIsIm1vdmVUbyIsImxpbmVUbyIsInF1YWRyYXRpY0N1cnZlVG8iLCJjbG9zZVBhdGgiLCJmaWxsIiwidXBkYXRlUHJvZ3Jlc3MiLCJlbGFwc2VkIiwicGVyY2VudCIsInRleHRDb250ZW50IiwiaW5pdEljb25zQW5pbWF0aW9uIiwiZHVyYXRpb24iLCJpY29ucyIsIm9yaWdpbmFsVHJhbnNmb3JtcyIsIk1hcCIsInNlbGVjdG9yIiwiaWNvbiIsImNvbXB1dGVkU3R5bGUiLCJnZXRDb21wdXRlZFN0eWxlIiwib3JpZ2luYWxUcmFuc2Zvcm0iLCJ0cmFuc2Zvcm0iLCJzZXQiLCJvcGFjaXR5IiwidHJhbnNpdGlvbiIsImljb25Db3VudCIsImdldCIsInBhcnRpY2lwYXRlQ2FudmFzIiwicGFydGljaXBhdGVEZWVycyIsInBhcnRpY2lwYXRlRGVlcldpZHRoIiwicGFydGljaXBhdGVEZWVySGVpZ2h0IiwiY2FudmFzQ2xpY2tIYW5kbGVyc0F0dGFjaGVkIiwicGFydGljaXBhdGVBbmltYXRpb25JZCIsInRvdWNoU3RhcnRYIiwidG91Y2hTdGFydFkiLCJoYW5kbGVQYXJ0aWNpcGF0ZUNhbnZhc0NsaWNrIiwicmVjdCIsInNjYWxlWCIsInNjYWxlWSIsImNsaWVudFgiLCJjbGllbnRZIiwiY2xpY2tYIiwibGVmdCIsImNsaWNrWSIsImRlZXIiLCJpc1BvaW50SW5zaWRlIiwiaGFuZGxlQ2xpY2siLCJoYW5kbGVQYXJ0aWNpcGF0ZUNhbnZhc1RvdWNoU3RhcnQiLCJ0b3VjaCIsInRvdWNoZXMiLCJoYW5kbGVQYXJ0aWNpcGF0ZUNhbnZhc1RvdWNoRW5kIiwiY2hhbmdlZFRvdWNoZXMiLCJkZWx0YVgiLCJhYnMiLCJkZWx0YVkiLCJkaXN0YW5jZSIsInNxcnQiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImlzTW9iaWxlIiwiQ0FOVkFTX1dJRFRIIiwiQ0FOVkFTX0hFSUdIVCIsIlRSRUVfV0lEVEgiLCJUUkVFX0hFSUdIVCIsIkZSQU1FU19QRVJfUk9XIiwiVE9UQUxfUk9XUyIsIlNQUklURV9TSEVFVF9XSURUSCIsIlNQUklURV9TSEVFVF9IRUlHSFQiLCJGUkFNRV9XSURUSCIsIkZSQU1FX0hFSUdIVCIsIkRFRVJfU0NBTEUiLCJCQVNFX0RFRVJfV0lEVEgiLCJCQVNFX0RFRVJfSEVJR0hUIiwiREVFUl9XSURUSCIsIkRFRVJfSEVJR0hUIiwiZGVlckhlaWdodE9mZnNldCIsInRyZWVYIiwidHJlZVkiLCJGUkFNRV9ERUxBWSIsIldBTEtJTkdfRlJBTUVTIiwiRlJBTUVfUkVQRUFUIiwiSURMRV9NSU5fRFVSQVRJT04iLCJJRExFX01BWF9EVVJBVElPTiIsIkRFRVJfU1RBVEUiLCJXQUxLSU5HIiwiSURMRSIsIlBFVFRJTkciLCJQRVRUSU5HX01JTl9EVVJBVElPTiIsIlBFVFRJTkdfTUFYX0RVUkFUSU9OIiwiSEVBUlRfU0laRV9NSU4iLCJIRUFSVF9TSVpFX01BWCIsIkhFQVJUX1JJU0VfRElTVEFOQ0UiLCJIRUFSVF9TUEFXTl9JTlRFUlZBTCIsImZyYW1lQ291bnRlciIsIkhlYXJ0Iiwic2l6ZSIsImhlYXJ0SW1hZ2UiLCJzY2FsZSIsInJpc2VTcGVlZCIsImlzVmlzaWJsZSIsImNvbXBsZXRlIiwic2F2ZSIsImdsb2JhbEFscGhhIiwiZHJhd1NpemUiLCJkcmF3WCIsImRyYXdZIiwiZHJhd0ltYWdlIiwicmVzdG9yZSIsIkRlZXIiLCJzdGFydFgiLCJzdGFydFkiLCJtaW5YIiwibWF4WCIsInNwZWVkIiwiekluZGV4IiwiZGlyZWN0aW9uIiwiZnJhbWVJbmRleCIsImZyYW1lUmVwZWF0Q291bnRlciIsImlkbGVUaW1lciIsImlkbGVEdXJhdGlvbiIsInBldHRpbmdUaW1lciIsInBldHRpbmdEdXJhdGlvbiIsInByZXZpb3VzU3RhdGUiLCJzYXZlZFgiLCJzYXZlZFkiLCJoZWFydHMiLCJoZWFydFNwYXduQ291bnRlciIsImRlZXJXaWR0aCIsImRlZXJIZWlnaHQiLCJyYW5kb20iLCJvZmZzZXRYIiwiaGVhcnRYIiwiaGVhcnRZIiwicHVzaCIsInJvdyIsImNvbCIsInNob3VsZFVwZGF0ZUZyYW1lIiwic3Bhd25IZWFydCIsImZpbHRlciIsImhlYXJ0IiwidXBkYXRlIiwic3ByaXRlSW1hZ2UiLCJmcmFtZVdpZHRoIiwiZ2V0U3ByaXRlRnJhbWVJbmRleCIsInNvdXJjZVgiLCJzb3VyY2VZIiwic291cmNlV2lkdGgiLCJzb3VyY2VIZWlnaHQiLCJkZXN0WCIsImRlc3RZIiwiZGVzdFdpZHRoIiwiZGVzdEhlaWdodCIsImRyYXciLCJpbWFnZXMiLCJiYWNrZ3JvdW5kIiwiSW1hZ2UiLCJ0cmVlIiwiZGVlclNwcml0ZSIsImRlZXJzIiwiREVFUl9DT1VOVCIsImRlZXJDb25maWdzIiwiY29uZmlnIiwiaW1hZ2VzTG9hZGVkIiwidG90YWxJbWFnZXMiLCJvbkltYWdlTG9hZCIsImRyYXdDYW52YXMiLCJzdGFydEFuaW1hdGlvbiIsIm9ubG9hZCIsInNyYyIsInBhc3NpdmUiLCJUUkVFX1pfSU5ERVgiLCJkcmF3YWJsZUVsZW1lbnRzIiwic29ydCIsImEiLCJiIiwiYW5pbWF0ZSIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsIm9ic2VydmUiLCJuZXdJc01vYmlsZSIsIlNOT1dGTEFLRV9DT1VOVCIsIlNOT1dGTEFLRV9NSU5fU0laRSIsIlNOT1dGTEFLRV9NQVhfU0laRSIsIlNOT1dGTEFLRV9NSU5fU1BFRUQiLCJTTk9XRkxBS0VfTUFYX1NQRUVEIiwiU05PV0ZMQUtFX1dJTkRfUkFOR0UiLCJTTk9XRkxBS0VfU1BBV05fSU5URVJWQUwiLCJzbm93Zmxha2VzIiwibGFzdFNub3dmbGFrZVRpbWUiLCJuZXdXaWR0aCIsIm5ld0hlaWdodCIsIm9mZnNldEhlaWdodCIsImNsaWVudEhlaWdodCIsInNjcm9sbEhlaWdodCIsInNub3dmbGFrZUltYWdlIiwiaW1hZ2VMb2FkZWQiLCJ3YWl0Rm9yUGFnZVJlYWR5IiwiaXNQYWdlTG9hZGluZyIsImNvbnRhaW5zIiwiZmlsbENhbnZhc1dpdGhTbm93Zmxha2VzIiwiU25vd2ZsYWtlIiwiaW5pdGlhbFkiLCJ3aW5kIiwicm90YXRpb24iLCJQSSIsInJvdGF0aW9uU3BlZWQiLCJzaW4iLCJyb3RhdGUiLCJjcmVhdGVTbm93Zmxha2UiLCJ1cGRhdGVTbm93Zmxha2VzIiwiaXNPZmZTY3JlZW4iLCJzcGxpY2UiLCJkcmF3U25vd2ZsYWtlcyIsInNub3dmbGFrZSIsIndlZWtzRGF0YSIsInN0YXJ0IiwiZW5kIiwiZ2V0QWN0aXZlV2VlayIsImN1cnJlbnREYXRlIiwiYWN0aXZlV2Vla0luZGV4IiwicGFyc2VJbnQiLCJhY3RpdmVXZWVrIiwiZ2FtZUxpc3RzIiwibGlzdCIsImN1cnJlbnRMaXN0IiwiYXV0b0FkZERhdGFCdXR0b25zIiwic2V0R2FtZUxpbmtzIiwiZ2FtZXNMaW5rcyIsImdhbWVMaW5rcyIsImdhbWVJZCIsIndlZWtNYXRjaCIsImNsYXNzTmFtZSIsIm1hdGNoIiwiaXRlbXMiLCJpdGVtIiwiZ2FtZU51bWJlciIsImJ1dHRvbk5hbWUiLCJsaW5rRWwiLCJjdXJyZW50QnV0dG9uIiwiaW5jbHVkZXMiLCJzZXRBdHRyaWJ1dGUiLCJyZWFkeVN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7K0NBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBLENBQUMsWUFBWTtFQUVULElBQU1BLE1BQU0sR0FBRyxzQ0FBc0M7RUFFckQsSUFBTUMsUUFBUSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxXQUFXLENBQUM7SUFDaERDLE1BQU0sR0FBR0YsUUFBUSxDQUFDQyxhQUFhLENBQUMsa0JBQWtCLENBQUM7SUFDbkRFLFlBQVksR0FBR0gsUUFBUSxDQUFDQyxhQUFhLENBQUMsUUFBUSxDQUFDO0lBQy9DRyxpQkFBaUIsR0FBR0osUUFBUSxDQUFDQyxhQUFhLENBQUMsYUFBYSxDQUFDO0VBRTdELElBQU1JLE1BQU0sR0FBR0wsUUFBUSxDQUFDQyxhQUFhLENBQUMsU0FBUyxDQUFDO0VBQ2hELElBQU1LLE1BQU0sR0FBR04sUUFBUSxDQUFDQyxhQUFhLENBQUMsU0FBUyxDQUFDO0VBRWhELElBQUlNLE1BQU0sR0FBRyxJ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SUFDbkN6YyxRQUFRLENBQUMrRCxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxZQUFNO01BQ2hEdkIsY0FBYyxFQUFFO0lBQ3BCLENBQUMsQ0FBQztFQUNOLENBQUMsTUFBTTtJQUNIO0lBQ0FBLGNBQWMsRUFBRTtFQUNwQjs7RUFFQTtFQUNBYyxJQUFJLEVBQUU7QUFFVixDQUFDLEdBQUciLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XG5cbiAgICBjb25zdCBhcGlVUkwgPSAnaHR0cHM6Ly9mYXYtcHJvbS5jb20vYXBpX2JsYWNrX3ByaXplJ1xuXG4gICAgY29uc3QgbWFpblBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhdi1wYWdlXCIpLFxuICAgICAgICBsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNwaW5uZXItb3ZlcmxheVwiKSxcbiAgICAgICAgcmVzdWx0c1RhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YWJsZVwiKSxcbiAgICAgICAgcmVzdWx0c1RhYmxlT3RoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RhYmxlT3RoZXJcIilcblxuICAgIGNvbnN0IGhyTGVuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNockxlbmcnKTtcbiAgICBjb25zdCBlbkxlbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW5MZW5nJyk7XG5cbiAgICBsZXQgbG9jYWxlID0gXCJoclwiXG4gICAgLy8gbGV0IGxvY2FsZSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJsb2NhbGVcIikgfHwgXCJoclwiXG5cbiAgICBpZiAoaHJMZW5nKSBsb2NhbGUgPSAnaHInO1xuICAgIGlmIChlbkxlbmcpIGxvY2FsZSA9ICdlbic7XG5cbiAgICBsZXQgZGVidWcgPSBmYWxzZVxuXG4gICAgaWYgKGRlYnVnKSBoaWRlTG9hZGVyKClcblxuICAgIGxldCBpMThuRGF0YSA9IHt9O1xuICAgIGNvbnN0IHRyYW5zbGF0ZVN0YXRlID0gZmFsc2U7XG4gICAgbGV0IHVzZXJJZCA9IG51bGw7XG4gICAgLy8gbGV0IHVzZXJJZCA9IE51bWJlcihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpKSA/PyBudWxsXG5cbiAgICBjb25zdCByZXF1ZXN0ID0gZnVuY3Rpb24gKGxpbmssIGV4dHJhT3B0aW9ucykge1xuICAgICAgICByZXR1cm4gZmV0Y2goYXBpVVJMICsgbGluaywge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC4uLihleHRyYU9wdGlvbnMgfHwge30pXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghcmVzLm9rKSB0aHJvdyBuZXcgRXJyb3IoJ0FQSSBlcnJvcicpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0FQSSByZXF1ZXN0IGZhaWxlZDonLCBlcnIpO1xuXG4gICAgICAgICAgICAgICAgcmVwb3J0RXJyb3IoZXJyKTtcblxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXYtcGFnZScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLnN0YXJ0c1dpdGgoXCJodHRwczovL3d3dy5mYXZiZXQuaHIvXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9wcm9tb2NpamUvcHJvbW9jaWphL3N0dWIvJztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvcHJvbW9zL3Byb21vL3N0dWIvJztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlkZUxvYWRlcigpe1xuICAgICAgICBsb2FkZXIuY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiXG4gICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5yZW1vdmUoXCJsb2FkaW5nXCIpXG4gICAgfVxuXG4gICAgLy8g0KTRg9C90LrRhtGW0Y8g0LTQu9GPINCy0YHRgtCw0L3QvtCy0LvQtdC90L3RjyDQstC40YHQvtGCINC90LAg0L7RgdC90L7QstGWIHZpZXdwb3J0LCDRhdC10LTQtdGA0LAg0YLQsCDRhNGD0YLQtdGA0LBcbiAgICBmdW5jdGlvbiBpbml0UGFnZUhlaWdodCgpIHtcbiAgICAgICAgY29uc3QgZmF2UGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXYtcGFnZScpO1xuICAgICAgICBjb25zdCBmcmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mcmFtZScpO1xuICAgICAgICBjb25zdCBzdGlja3lXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0aWNreS13cmFwJyk7XG4gICAgICAgIFxuICAgICAgICBpZiAoIWZhdlBhZ2UgfHwgIWZyYW1lIHx8ICFzdGlja3lXcmFwKSByZXR1cm47XG4gICAgICAgIFxuICAgICAgICAvLyDQktC40LfQvdCw0YfQsNGU0LzQviDQstC40YHQvtGC0YMg0YXQtdC00LXRgNCwINC30LDQu9C10LbQvdC+INCy0ZbQtCDRiNC40YDQuNC90Lgg0LXQutGA0LDQvdGDXG4gICAgICAgIC8vINCU0LXRgdC60YLQvtC/ICg+IDEwMjRweCk6IDYwICsgMjEgPSA4MXB4XG4gICAgICAgIC8vINCc0L7QsdGW0LvQutC4ICjiiaQgMTAyNHB4KTogNDggKyAyMSA9IDY5cHhcbiAgICAgICAgY29uc3QgaGVhZGVySGVpZ2h0ID0gd2luZG93LmlubmVyV2lkdGggPiAxMDI0ID8gODEgOiA2OTtcbiAgICAgICAgXG4gICAgICAgIC8vINCS0LjQt9C90LDRh9Cw0ZTQvNC+INCy0LjRgdC+0YLRgyDRhNGD0YLQtdGA0LAg0LfQsNC70LXQttC90L4g0LLRltC0INGI0LjRgNC40L3QuCDQtdC60YDQsNC90YNcbiAgICAgICAgLy8g0KTRg9GC0LXRgCDQv9GA0LjRgdGD0YLQvdGW0Lkg0YLRltC70YzQutC4INC90LAg0LXQutGA0LDQvdCw0YUg4omkIDEwMjRweCwg0LLQuNGB0L7RgtCwIDU2cHhcbiAgICAgICAgY29uc3QgZm9vdGVySGVpZ2h0ID0gd2luZG93LmlubmVyV2lkdGggPD0gMTAyNCA/IDU2IDogMDtcbiAgICAgICAgXG4gICAgICAgIC8vINCe0LHRh9C40YHQu9GO0ZTQvNC+INCy0LjRgdC+0YLRgyAuZmF2LXBhZ2U6IHZpZXdwb3J0IGhlaWdodCAtIGhlYWRlciBoZWlnaHQgLSBmb290ZXIgaGVpZ2h0IC0g0LLRltC00YHRgtGD0L9cbiAgICAgICAgY29uc3Qgdmlld3BvcnRIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgIGNvbnN0IGZhdlBhZ2VIZWlnaHQgPSB2aWV3cG9ydEhlaWdodCAtIGhlYWRlckhlaWdodCAtIGZvb3RlckhlaWdodCAtIDMyO1xuICAgICAgICBcbiAgICAgICAgLy8g0JLRgdGC0LDQvdC+0LLQu9GO0ZTQvNC+INCy0LjRgdC+0YLRgyAuZmF2LXBhZ2VcbiAgICAgICAgZmF2UGFnZS5zdHlsZS5taW5IZWlnaHQgPSBgJHtmYXZQYWdlSGVpZ2h0fXB4YDtcbiAgICAgICAgZmF2UGFnZS5zdHlsZS5tYXhIZWlnaHQgPSBgJHtmYXZQYWdlSGVpZ2h0fXB4YDtcbiAgICAgICAgXG4gICAgICAgIC8vINCS0YHRgtCw0L3QvtCy0LvRjtGU0LzQviDQstC40YHQvtGC0YMgLmZyYW1lOiAuZmF2LXBhZ2UgKyAycHhcbiAgICAgICAgY29uc3QgZnJhbWVIZWlnaHQgPSBmYXZQYWdlSGVpZ2h0ICsgMjtcbiAgICAgICAgZnJhbWUuc3R5bGUubWluSGVpZ2h0ID0gYCR7ZnJhbWVIZWlnaHR9cHhgO1xuICAgICAgICBmcmFtZS5zdHlsZS5tYXhIZWlnaHQgPSBgJHtmcmFtZUhlaWdodH1weGA7XG4gICAgICAgIFxuICAgICAgICAvLyDQktGB0YLQsNC90L7QstC70Y7RlNC80L4gbWFyZ2luLXRvcCDQtNC70Y8gLnN0aWNreS13cmFwOiDQvdC10LPQsNGC0LjQstC90LAg0LLQuNGB0L7RgtCwIC5mYXYtcGFnZVxuICAgICAgICBzdGlja3lXcmFwLnN0eWxlLm1hcmdpblRvcCA9IGAtJHtmYXZQYWdlSGVpZ2h0fXB4YDtcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICBsZXQgYXR0ZW1wdHMgPSAwO1xuICAgICAgICBjb25zdCBtYXhBdHRlbXB0cyA9IDIwO1xuICAgICAgICBjb25zdCBhdHRlbXB0SW50ZXJ2YWwgPSA1MDtcblxuICAgICAgICBmdW5jdGlvbiB0cnlEZXRlY3RVc2VySWQoKSB7XG4gICAgICAgICAgICBpZiAod2luZG93LnN0b3JlKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSB3aW5kb3cuc3RvcmUuZ2V0U3RhdGUoKTtcbiAgICAgICAgICAgICAgICB1c2VySWQgPSBzdGF0ZS5hdXRoLmlzQXV0aG9yaXplZCAmJiBzdGF0ZS5hdXRoLmlkIHx8ICcnO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh3aW5kb3cuZ191c2VyX2lkKSB7XG4gICAgICAgICAgICAgICAgdXNlcklkID0gd2luZG93LmdfdXNlcl9pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHF1aWNrQ2hlY2tBbmRSZW5kZXIoKSB7XG4gICAgICAgICAgICAvLyDQhtC90ZbRhtGW0LDQu9GW0LfRg9GU0LzQviDQstC40YHQvtGC0Lgg0YHRgtC+0YDRltC90LrQuCDQvdCwINC+0YHQvdC+0LLRliB2aWV3cG9ydCDRgtCwINGF0LXQtNC10YDQsFxuICAgICAgICAgICAgaW5pdFBhZ2VIZWlnaHQoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaW5pdEdhbWVzV2VlaygpO1xuICAgICAgICAgICAgaW5pdFByb2dyZXNzQmFyKCk7XG4gICAgICAgICAgICBpbml0UGFydGljaXBhdGVDYW52YXMoKTtcbiAgICAgICAgICAgIGluaXRTbm93Zmxha2VzQ2FudmFzKCk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGhpZGVMb2FkZXIsIDMwMCk7XG5cbiAgICAgICAgICAgIC8vINCe0L3QvtCy0LvRjtGU0LzQviDQstC40YHQvtGC0Lgg0L/RgNC4INC30LzRltC90ZYg0YDQvtC30LzRltGA0YMg0LLRltC60L3QsFxuICAgICAgICAgICAgbGV0IHJlc2l6ZVRpbWVvdXQ7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHJlc2l6ZVRpbWVvdXQpO1xuICAgICAgICAgICAgICAgIHJlc2l6ZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaW5pdFBhZ2VIZWlnaHQoKTtcbiAgICAgICAgICAgICAgICAgICAgaW5pdFBhcnRpY2lwYXRlQ2FudmFzKCk7XG4gICAgICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm9yaWVudGF0aW9uY2hhbmdlXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaW5pdFBhZ2VIZWlnaHQoKTtcbiAgICAgICAgICAgICAgICAgICAgaW5pdFBhcnRpY2lwYXRlQ2FudmFzKCk7XG4gICAgICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBGaXggZHJvcGRvd24gc2Nyb2xsIGlzc3VlIC0gcHJldmVudCBwYWdlIGZyb20gc2hpZnRpbmcgdXAgd2hlbiBvcGVuaW5nIGRyb3Bkb3duXG4gICAgICAgICAgICBjb25zdCBkcm9wZG93bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJvcGRvd24nKTtcbiAgICAgICAgICAgIGRyb3Bkb3ducy5mb3JFYWNoKChkcm9wZG93bikgPT4ge1xuICAgICAgICAgICAgICAgIGRyb3Bkb3duLmFkZEV2ZW50TGlzdGVuZXIoJ3RvZ2dsZScsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERyb3Bkb3duIGlzIG9wZW5pbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN1bW1hcnkgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJ3N1bW1hcnknKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdW1tYXJ5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gR2V0IHN1bW1hcnkgcG9zaXRpb24gcmVsYXRpdmUgdG8gdmlld3BvcnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdW1tYXJ5UmVjdCA9IHN1bW1hcnkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiBzdW1tYXJ5IGlzIG5lYXIgdGhlIHRvcCBvZiB2aWV3cG9ydCAod2l0aGluIDEwMHB4IGZyb20gdG9wKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdW1tYXJ5UmVjdC50b3AgPCAxMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIGhvdyBtdWNoIHRvIHNjcm9sbCB0byBrZWVwIHN1bW1hcnkgdmlzaWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50U2Nyb2xsWSA9IHdpbmRvdy5zY3JvbGxZIHx8IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0U2Nyb2xsWSA9IGN1cnJlbnRTY3JvbGxZICsgc3VtbWFyeVJlY3QudG9wIC0gMTIwOyAvLyAxMjBweCBvZmZzZXQgZnJvbSB0b3BcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBVc2UgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIGZvciBzbW9vdGggc2Nyb2xsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogTWF0aC5tYXgoMCwgdGFyZ2V0U2Nyb2xsWSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB3YWl0Rm9yVXNlcklkID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRyeURldGVjdFVzZXJJZCgpO1xuICAgICAgICAgICAgICAgIGlmICh1c2VySWQgfHwgYXR0ZW1wdHMgPj0gbWF4QXR0ZW1wdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgcXVpY2tDaGVja0FuZFJlbmRlcigpO1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhdHRlbXB0cysrO1xuICAgICAgICAgICAgfSwgYXR0ZW1wdEludGVydmFsKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXdhaXQgd2FpdEZvclVzZXJJZDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2FkVHJhbnNsYXRpb25zKCkge1xuICAgICAgICByZXR1cm4gcmVxdWVzdChgL25ldy10cmFuc2xhdGVzLyR7bG9jYWxlfWApXG4gICAgICAgICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgICAgICBpMThuRGF0YSA9IGpzb247XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlKCk7XG4gICAgICAgICAgICAgICAgLy8gY29uc3QgbXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChtdXRhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgbXV0YXRpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgLy8gICAgIHRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgICAgIC8vICAgICBtdXRhdGlvbk9ic2VydmVyLm9ic2VydmUodGFyZ2V0Tm9kZSwgeyBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgICAgICAgICAgLy8gbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGFyZGNvcmVUZW5uaXNcIiksIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIC8vICAgICBzdWJ0cmVlOiB0cnVlXG4gICAgICAgICAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlcG9ydEVycm9yKGVycikge1xuICAgICAgICBjb25zdCByZXBvcnREYXRhID0ge1xuICAgICAgICAgICAgb3JpZ2luOiB3aW5kb3cubG9jYXRpb24uaHJlZixcbiAgICAgICAgICAgIHVzZXJpZDogdXNlcklkLFxuICAgICAgICAgICAgZXJyb3JUZXh0OiBlcnI/LmVycm9yIHx8IGVycj8udGV4dCB8fCBlcnI/Lm1lc3NhZ2UgfHwgJ1Vua25vd24gZXJyb3InLFxuICAgICAgICAgICAgdHlwZTogZXJyPy5uYW1lIHx8ICdVbmtub3duRXJyb3InLFxuICAgICAgICAgICAgc3RhY2s6IGVycj8uc3RhY2sgfHwgJydcbiAgICAgICAgfTtcblxuICAgICAgICBmZXRjaCgnaHR0cHM6Ly9mYXYtcHJvbS5jb20vYXBpLWNtcy9yZXBvcnRzL2FkZCcsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXBvcnREYXRhKVxuICAgICAgICB9KS5jYXRjaChjb25zb2xlLndhcm4pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRyYW5zbGF0ZSgpIHtcbiAgICAgICAgY29uc3QgZWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10cmFuc2xhdGVdJylcbiAgICAgICAgaWYgKGVsZW1zICYmIGVsZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYodHJhbnNsYXRlU3RhdGUpe1xuICAgICAgICAgICAgICAgIGVsZW1zLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGVsZW0uZ2V0QXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgICAgICAgICAgICAgICAgICBlbGVtLmlubmVySFRNTCA9IGkxOG5EYXRhW2tleV0gfHwgJyotLS0tTkVFRCBUTyBCRSBUUkFOU0xBVEVELS0tLSogICBrZXk6ICAnICsga2V5O1xuICAgICAgICAgICAgICAgICAgICBpZiAoaTE4bkRhdGFba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0cmFuc2xhdGlvbiB3b3JrcyFcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobG9jYWxlID09PSAnZW4nKSB7XG4gICAgICAgICAgICBtYWluUGFnZS5jbGFzc0xpc3QuYWRkKCdlbicpO1xuICAgICAgICB9XG4gICAgICAgIHJlZnJlc2hMb2NhbGl6ZWRDbGFzcyhtYWluUGFnZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVmcmVzaExvY2FsaXplZENsYXNzKGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBsYW5nIG9mIFsnaHInLCAnZW4nXSkge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGxhbmcpO1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChsb2NhbGUpO1xuICAgIH1cblxuXG5cblxuICAgIGZ1bmN0aW9uIHJlbmRlclVzZXJzKHdlZWtOdW0sIHVzZXJEYXRhID0gW10pIHtcbiAgICAgICAgd2Vla051bSA9IE51bWJlcih3ZWVrTnVtKTtcbiAgICAgICAgY29uc3Qgd2Vla09iaiA9IHVzZXJEYXRhLmZpbmQodyA9PiB3LndlZWsgPT09IHdlZWtOdW0pO1xuICAgICAgICBpZiAoIXdlZWtPYmogfHwgIXdlZWtPYmouZGF0YSB8fCAhQXJyYXkuaXNBcnJheSh3ZWVrT2JqLmRhdGEudXNlcnMpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCfQndC10LLRltGA0L3QsCDRgdGC0YDRg9C60YLRg9GA0LAg0LTQsNC90LjRhScpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaXNTdGFnZUVuZGVkID0gd2Vla09iai5kYXRhLmlzU3RhZ2VFbmRlZFxuXG4gICAgICAgIHVzZXJEYXRhID0gd2Vla09iai5kYXRhLnVzZXJzO1xuXG4gICAgICAgIGNvbnN0IHdpbm5lckFkZGl0aW9uYWxQcml6ZSA9IHVzZXJEYXRhLmZpbmQodSA9PiB7XG4gICAgICAgICAgICBpZih1Lndpbm5lciA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cblxuICAgICAgICBjb25zdCBjdXJyZW50VXNlciA9IHVzZXJEYXRhLmZpbmQodXNlciA9PiB1c2VyLnVzZXJpZCA9PT0gdXNlcklkKTtcblxuICAgICAgICBpZih1c2VySWQgJiYgIWN1cnJlbnRVc2VyICYmIGlzVmVyaWZpZWRVc2VyKXtcbiAgICAgICAgICAgIHVzZXJEYXRhID0gWy4uLnVzZXJEYXRhLCB7dXNlcmlkOiB1c2VySWQsIHBvaW50czogMH1dXG4gICAgICAgIH1cbiAgICAgICAgcG9wdWxhdGVVc2Vyc1RhYmxlKHVzZXJEYXRhLCB1c2VySWQsIHdlZWtOdW0sIGN1cnJlbnRVc2VyLCBpc1ZlcmlmaWVkVXNlciwgaXNTdGFnZUVuZGVkLCB3aW5uZXJBZGRpdGlvbmFsUHJpemUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBvcHVsYXRlVXNlcnNUYWJsZSh1c2VycywgY3VycmVudFVzZXJJZCwgd2VlaywgY3VycmVudFVzZXIsIGlzVmVyaWZpZWRVc2VyLCBpc1N0YWdlRW5kZWQsIHdpbm5lckFkZGl0aW9uYWxQcml6ZSkge1xuICAgICAgICBpZiAoIXVzZXJzPy5sZW5ndGgpIHJldHVybjtcbiAgICAgICAgcmVzdWx0c1RhYmxlLmlubmVySFRNTCA9ICcnO1xuICAgICAgICByZXN1bHRzVGFibGVPdGhlci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgc2Vjb25kVGFibGVPdGhlci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgc2Vjb25kVGFibGUuaW5uZXJIVE1MID0gJyc7XG5cblxuICAgICAgICBjb25zdCBpc1RvcEN1cnJlbnRVc2VyID0gY3VycmVudFVzZXIgJiYgdXNlcnMuc2xpY2UoMCwgMTApLnNvbWUodXNlciA9PiB1c2VyLnVzZXJpZCA9PT0gY3VycmVudFVzZXJJZCk7XG5cbiAgICAgICAgY29uc3QgdG9wVXNlcnNMZW5ndGggPSAhdXNlcklkIHx8IGlzVG9wQ3VycmVudFVzZXIgID8gMTAgOiAxMDtcblxuICAgICAgICBjb25zdCB0b3BVc2VycyA9IHVzZXJzLnNsaWNlKDAsIHRvcFVzZXJzTGVuZ3RoKTtcblxuICAgICAgICB0b3BVc2Vycy5mb3JFYWNoKHVzZXIgPT4ge1xuICAgICAgICAgICAgZGlzcGxheVVzZXIodXNlciwgdXNlci51c2VyaWQgPT09IGN1cnJlbnRVc2VySWQsIHJlc3VsdHNUYWJsZSwgdG9wVXNlcnMsIGlzVG9wQ3VycmVudFVzZXIsIHdlZWspO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYoaXNWZXJpZmllZFVzZXIgJiYgIWN1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgICBkaXNwbGF5VXNlcihjdXJyZW50VXNlciwgdHJ1ZSwgcmVzdWx0c1RhYmxlT3RoZXIsIHVzZXJzLCBmYWxzZSwgd2Vlayk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWlzVG9wQ3VycmVudFVzZXIgJiYgY3VycmVudFVzZXIpIHtcbiAgICAgICAgICAgIGRpc3BsYXlVc2VyKGN1cnJlbnRVc2VyLCB0cnVlLCByZXN1bHRzVGFibGVPdGhlciwgdXNlcnMsIGZhbHNlLCB3ZWVrKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlVc2VyKHVzZXIsIGlzQ3VycmVudFVzZXIsIHRhYmxlLCB1c2VycywgaXNUb3BDdXJyZW50VXNlciwgd2Vlaykge1xuXG4gICAgICAgIGNvbnN0IHJlbmRlclJvdyA9ICh1c2VyRGF0YSwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IGhpZ2hsaWdodCA9IGZhbHNlLCBuZWlnaGJvciA9IGZhbHNlIH0gPSBvcHRpb25zO1xuICAgICAgICAgICAgY29uc3QgdXNlclJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKCd0YWJsZV9fcm93Jyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHVzZXJQbGFjZSA9IHVzZXJzLmluZGV4T2YodXNlckRhdGEpICsgMTtcbiAgICAgICAgICAgIGNvbnN0IHByaXplS2V5ID0gZGVidWcgPyBudWxsIDogZ2V0UHJpemVUcmFuc2xhdGlvbktleSh1c2VyUGxhY2UsIHdlZWspO1xuXG4gICAgICAgICAgICBpZiAodXNlclBsYWNlIDw9IDMpIHtcbiAgICAgICAgICAgICAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoYHBsYWNlJHt1c2VyUGxhY2V9YCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChoaWdobGlnaHQgfHwgaXNDdXJyZW50VXNlciAmJiAhbmVpZ2hib3IpIHtcbiAgICAgICAgICAgICAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoJ3lvdScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChuZWlnaGJvcikge1xuICAgICAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZCgnX25laWdoYm9yJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHVzZXJSb3cuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuICAgICAgICAgICAgICAgICR7dXNlclBsYWNlIDwgMTAgPyAnMCcgKyB1c2VyUGxhY2UgOiB1c2VyUGxhY2V9XG4gICAgICAgICAgICAgICAgJHtpc0N1cnJlbnRVc2VyICYmICFuZWlnaGJvciA/ICc8c3BhbiBjbGFzcz1cInlvdVwiPicgKyB0cmFuc2xhdGVLZXkoXCJ5b3VcIikgKyAnPC9zcGFuPicgOiAnJ31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuICAgICAgICAgICAgICAgICR7aXNDdXJyZW50VXNlciAmJiAhbmVpZ2hib3IgPyB1c2VyRGF0YS51c2VyaWQgOiBtYXNrVXNlcklkKHVzZXJEYXRhLnVzZXJpZCl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke051bWJlcih1c2VyRGF0YS5wb2ludHMpLnRvRml4ZWQoMil9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke3ByaXplS2V5ID8gdHJhbnNsYXRlS2V5KHByaXplS2V5KSA6ICcgLSAnfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG5cbiAgICAgICAgICAgIHRhYmxlLmFwcGVuZCh1c2VyUm93KTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGlzQ3VycmVudFVzZXIgJiYgIWlzVG9wQ3VycmVudFVzZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdXNlcnMuaW5kZXhPZih1c2VyKTtcbiAgICAgICAgICAgIGlmICh1c2Vyc1tpbmRleCAtIDFdKSB7XG4gICAgICAgICAgICAgICAgcmVuZGVyUm93KHVzZXJzW2luZGV4IC0gMV0sIHsgbmVpZ2hib3I6IHRydWUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZW5kZXJSb3codXNlciwgeyBoaWdobGlnaHQ6IHRydWUgfSk7XG4gICAgICAgICAgICBpZiAodXNlcnNbaW5kZXggKyAxXSkge1xuICAgICAgICAgICAgICAgIHJlbmRlclJvdyh1c2Vyc1tpbmRleCArIDFdLCB7IG5laWdoYm9yOiB0cnVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVuZGVyUm93KHVzZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdFByb2dyZXNzQmFyKCkge1xuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvZ3Jlc3NCYXJDYW52YXMnKTtcbiAgICAgICAgY29uc3QgcGVyY2VudEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvZ3Jlc3NQZXJjZW50Jyk7XG4gICAgICAgIGlmICghY2FudmFzIHx8ICFwZXJjZW50RWxlbWVudCkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICBcbiAgICAgICAgLy8g0JrQvtC90YHRgtCw0L3RgtC4XG4gICAgICAgIGNvbnN0IGJhckhlaWdodCA9IDIwOyAvLyDQktC40YHQvtGC0LAg0L/RgNC+0LPRgNC10YEt0LHQsNGA0YNcbiAgICAgICAgY29uc3Qgc2VnbWVudFdpZHRoID0gNDsgLy8g0KjQuNGA0LjQvdCwINC+0LTQvdC+0LPQviDRgdC10LPQvNC10L3RgtCwXG4gICAgICAgIGNvbnN0IHNlZ21lbnRIZWlnaHQgPSAxNDsgLy8g0JLQuNGB0L7RgtCwINC+0LTQvdC+0LPQviDRgdC10LPQvNC10L3RgtCwXG4gICAgICAgIGNvbnN0IHNlZ21lbnRHYXAgPSAyOyAvLyDQn9GA0L7QvNGW0LbQvtC6INC80ZbQtiDRgdC10LPQvNC10L3RgtCw0LzQuFxuICAgICAgICBjb25zdCBwYWRkaW5nID0gMjsgLy8g0JLRltC00YHRgtGD0L8g0LLRltC0INC60YDQsNGX0LJcbiAgICAgICAgY29uc3Qgc2VnbWVudFJhZGl1cyA9IDE7IC8vIEJvcmRlciByYWRpdXMg0LTQu9GPINGB0LXQs9C80LXQvdGC0ZbQslxuICAgICAgICBcbiAgICAgICAgLy8g0J/QsNGA0LDQvNC10YLRgNC4INCw0L3RltC80LDRhtGW0Zcg0LfQsNCy0LDQvdGC0LDQttC10L3QvdGPXG4gICAgICAgIGxldCBjdXJyZW50UHJvZ3Jlc3MgPSAxOyAvLyDQn9C+0YfQuNC90LDRlNC80L4g0LcgMSVcbiAgICAgICAgY29uc3QgdGFyZ2V0UHJvZ3Jlc3MgPSAxMDA7IC8vINCm0ZbQu9GM0L7QstC40Lkg0L/RgNC+0LPRgNC10YFcbiAgICAgICAgY29uc3QgbG9hZGluZ0R1cmF0aW9uID0gMzAwMDsgLy8g0KLRgNC40LLQsNC70ZbRgdGC0Ywg0LfQsNCy0LDQvdGC0LDQttC10L3QvdGPOiAzINGB0LXQutGD0L3QtNC4XG4gICAgICAgIGxldCBzdGFydFRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICBsZXQgYW5pbWF0aW9uSWQgPSBudWxsO1xuICAgICAgICBsZXQgbWF4U2VnbWVudHMgPSAwO1xuICAgICAgICBsZXQgaXNMb2FkaW5nQ29tcGxldGUgPSBmYWxzZTtcbiAgICAgICAgXG4gICAgICAgIGZ1bmN0aW9uIHJlc2l6ZUNhbnZhcygpIHtcbiAgICAgICAgICAgIC8vINCe0YLRgNC40LzRg9GU0LzQviDRgNC+0LfQvNGW0YDQuCDQutC+0L3RgtC10LnQvdC10YDQsFxuICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gY2FudmFzLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICBjb25zdCBjb250YWluZXJXaWR0aCA9IGNvbnRhaW5lci5vZmZzZXRXaWR0aCB8fCA3Njg7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCS0YHRgtCw0L3QvtCy0LvRjtGU0LzQviDRgNC+0LfQvNGW0YDQuCBjYW52YXNcbiAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IGNvbnRhaW5lcldpZHRoO1xuICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IGJhckhlaWdodDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0KDQvtC30YDQsNGF0L7QstGD0ZTQvNC+INC60ZbQu9GM0LrRltGB0YLRjCDRgdC10LPQvNC10L3RgtGW0LIsINGJ0L4g0L/QvtC80ZbRgdGC0Y/RgtGM0YHRj1xuICAgICAgICAgICAgY29uc3QgYXZhaWxhYmxlV2lkdGggPSBjb250YWluZXJXaWR0aCAtIChwYWRkaW5nICogMik7XG4gICAgICAgICAgICBjb25zdCBzZWdtZW50V2l0aEdhcCA9IHNlZ21lbnRXaWR0aCArIHNlZ21lbnRHYXA7XG4gICAgICAgICAgICBtYXhTZWdtZW50cyA9IE1hdGguZmxvb3IoYXZhaWxhYmxlV2lkdGggLyBzZWdtZW50V2l0aEdhcCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCf0LXRgNC10LzQsNC70YzQvtCy0YPRlNC80L4g0Lcg0L/QvtGC0L7Rh9C90LjQvCDQv9GA0L7Qs9GA0LXRgdC+0LxcbiAgICAgICAgICAgIGlmIChjdXJyZW50UHJvZ3Jlc3MgPiAwKSB7XG4gICAgICAgICAgICAgICAgZHJhd1Byb2dyZXNzQmFyKGN1cnJlbnRQcm9ncmVzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGZ1bmN0aW9uIGRyYXdQcm9ncmVzc0Jhcihwcm9ncmVzcykge1xuICAgICAgICAgICAgLy8g0J7Rh9C40YnQsNGU0LzQviBjYW52YXNcbiAgICAgICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0JzQsNC70Y7RlNC80L4g0YDQsNC80LrRgyAo0LHRltC70LjQuSDQv9GA0Y/QvNC+0LrRg9GC0L3QuNC6KVxuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJyNGRkZGRkYnO1xuICAgICAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDE7XG4gICAgICAgICAgICBjdHguc3Ryb2tlUmVjdCgwLjUsIDAuNSwgY2FudmFzLndpZHRoIC0gMSwgY2FudmFzLmhlaWdodCAtIDEpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQoNC+0LfRgNCw0YXQvtCy0YPRlNC80L4g0LrRltC70YzQutGW0YHRgtGMINC30LDQv9C+0LLQvdC10L3QuNGFINGB0LXQs9C80LXQvdGC0ZbQslxuICAgICAgICAgICAgY29uc3QgZmlsbGVkU2VnbWVudHMgPSBNYXRoLmZsb29yKChwcm9ncmVzcyAvIDEwMCkgKiBtYXhTZWdtZW50cyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCc0LDQu9GO0ZTQvNC+INC30LDQv9C+0LLQvdC10L3RliDRgdC10LPQvNC10L3RgtC4INC3INC30LDQvtC60YDRg9Cz0LvQtdC90LjQvNC4INC60YPRgtCw0LzQuFxuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICcjRkZGRkZGJztcbiAgICAgICAgICAgIGNvbnN0IGNlbnRlclkgPSAoYmFySGVpZ2h0IC0gc2VnbWVudEhlaWdodCkgLyAyOyAvLyDQktC10YDRgtC40LrQsNC70YzQvdC1INGG0LXQvdGC0YDRg9Cy0LDQvdC90Y9cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWxsZWRTZWdtZW50czsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeCA9IHBhZGRpbmcgKyBpICogKHNlZ21lbnRXaWR0aCArIHNlZ21lbnRHYXApO1xuICAgICAgICAgICAgICAgIGNvbnN0IHkgPSBjZW50ZXJZO1xuXG4gICAgICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIGlmIChjdHgucm91bmRSZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vINCh0YPRh9Cw0YHQvdC40Lkg0LzQtdGC0L7QtCAo0L/RltC00YLRgNC40LzRg9GU0YLRjNGB0Y8g0LIg0L3QvtCy0LjRhSDQsdGA0LDRg9C30LXRgNCw0YUpXG4gICAgICAgICAgICAgICAgICAgIGN0eC5yb3VuZFJlY3QoeCwgeSwgc2VnbWVudFdpZHRoLCBzZWdtZW50SGVpZ2h0LCBzZWdtZW50UmFkaXVzKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBGYWxsYmFjayDQtNC70Y8g0YHRgtCw0YDQuNGFINCx0YDQsNGD0LfQtdGA0ZbQslxuICAgICAgICAgICAgICAgICAgICBjb25zdCByID0gc2VnbWVudFJhZGl1cztcbiAgICAgICAgICAgICAgICAgICAgY3R4Lm1vdmVUbyh4ICsgciwgeSk7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5saW5lVG8oeCArIHNlZ21lbnRXaWR0aCAtIHIsIHkpO1xuICAgICAgICAgICAgICAgICAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4ICsgc2VnbWVudFdpZHRoLCB5LCB4ICsgc2VnbWVudFdpZHRoLCB5ICsgcik7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5saW5lVG8oeCArIHNlZ21lbnRXaWR0aCwgeSArIHNlZ21lbnRIZWlnaHQgLSByKTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCArIHNlZ21lbnRXaWR0aCwgeSArIHNlZ21lbnRIZWlnaHQsIHggKyBzZWdtZW50V2lkdGggLSByLCB5ICsgc2VnbWVudEhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5saW5lVG8oeCArIHIsIHkgKyBzZWdtZW50SGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCwgeSArIHNlZ21lbnRIZWlnaHQsIHgsIHkgKyBzZWdtZW50SGVpZ2h0IC0gcik7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5saW5lVG8oeCwgeSArIHIpO1xuICAgICAgICAgICAgICAgICAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4LCB5LCB4ICsgciwgeSk7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlUHJvZ3Jlc3MoKSB7XG4gICAgICAgICAgICBjb25zdCBlbGFwc2VkID0gRGF0ZS5ub3coKSAtIHN0YXJ0VGltZTtcbiAgICAgICAgICAgIGxldCBwcm9ncmVzcyA9IDEgKyAoZWxhcHNlZCAvIGxvYWRpbmdEdXJhdGlvbikgKiA5OTsgLy8g0JLRltC0IDElINC00L4gMTAwJVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQntCx0LzQtdC20YPRlNC80L4g0L/RgNC+0LPRgNC10YEg0LTQviAxMDAlXG4gICAgICAgICAgICBpZiAocHJvZ3Jlc3MgPj0gdGFyZ2V0UHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgICAgICBwcm9ncmVzcyA9IHRhcmdldFByb2dyZXNzO1xuICAgICAgICAgICAgICAgIGlzTG9hZGluZ0NvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY3VycmVudFByb2dyZXNzID0gcHJvZ3Jlc3M7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCe0L3QvtCy0LvRjtGU0LzQviDQstGW0LTQvtCx0YDQsNC20LXQvdC90Y9cbiAgICAgICAgICAgIGRyYXdQcm9ncmVzc0Jhcihwcm9ncmVzcyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCe0L3QvtCy0LvRjtGU0LzQviDQstGW0LTRgdC+0YLQutC4ICjRgtGW0LvRjNC60Lgg0YbRltC70ZYg0YfQuNGB0LvQsClcbiAgICAgICAgICAgIGNvbnN0IHBlcmNlbnQgPSBNYXRoLmZsb29yKHByb2dyZXNzKTtcbiAgICAgICAgICAgIHBlcmNlbnRFbGVtZW50LnRleHRDb250ZW50ID0gcGVyY2VudCArICclJztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0J/RgNC+0LTQvtCy0LbRg9GU0LzQviDQsNC90ZbQvNCw0YbRltGOINC00L4g0LfQsNCy0LXRgNGI0LXQvdC90Y8g0LfQsNCy0LDQvdGC0LDQttC10L3QvdGPXG4gICAgICAgICAgICBpZiAoIWlzTG9hZGluZ0NvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlUHJvZ3Jlc3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyDQhtC90ZbRhtGW0LDQu9GW0LfRg9GU0LzQviDRgNC+0LfQvNGW0YDQuCBjYW52YXNcbiAgICAgICAgcmVzaXplQ2FudmFzKCk7XG4gICAgICAgIFxuICAgICAgICAvLyDQntCx0YDQvtCx0LrQsCDQt9C80ZbQvdC4INGA0L7Qt9C80ZbRgNGDINCy0ZbQutC90LBcbiAgICAgICAgbGV0IHJlc2l6ZVRpbWVvdXQ7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQocmVzaXplVGltZW91dCk7XG4gICAgICAgICAgICByZXNpemVUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzaXplQ2FudmFzKCk7XG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIC8vINCG0L3RltGG0ZbQsNC70ZbQt9Cw0YbRltGPINCw0L3RltC80LDRhtGW0Zcg0L/QvtGP0LLQuCDRltC60L7QvdC+0LpcbiAgICAgICAgaW5pdEljb25zQW5pbWF0aW9uKGxvYWRpbmdEdXJhdGlvbik7XG4gICAgICAgIFxuICAgICAgICAvLyDQl9Cw0L/Rg9GB0LrQsNGU0LzQviDQsNC90ZbQvNCw0YbRltGOINC3INC90LXQstC10LvQuNC60L7RjiDQt9Cw0YLRgNC40LzQutC+0Y4g0LTQu9GPINC60L7RgNC10LrRgtC90L7Qs9C+INGA0L7Qt9GA0LDRhdGD0L3QutGDINGA0L7Qt9C80ZbRgNGW0LJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzaXplQ2FudmFzKCk7XG4gICAgICAgICAgICAgICAgc3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVQcm9ncmVzcygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vINCQ0L3RltC80LDRhtGW0Y8g0L/QvtGP0LLQuCDRltC60L7QvdC+0Log0L/QviDRh9C10YDQt9GWINC/0ZbQtCDRh9Cw0YEg0LfQsNCy0LDQvdGC0LDQttC10L3QvdGPXG4gICAgZnVuY3Rpb24gaW5pdEljb25zQW5pbWF0aW9uKGR1cmF0aW9uKSB7XG4gICAgICAgIGNvbnN0IGljb25zID0gW1xuICAgICAgICAgICAgJy53ZWxjb21lX19kZWNvci1pdGVtLl9nYW1lcGFkJyxcbiAgICAgICAgICAgICcud2VsY29tZV9fZGVjb3ItaXRlbS5fY2hpcCcsXG4gICAgICAgICAgICAnLndlbGNvbWVfX2RlY29yLWl0ZW0uX2NvaW4nLFxuICAgICAgICAgICAgJy53ZWxjb21lX19kZWNvci1pdGVtLl9iYWxsJyxcbiAgICAgICAgICAgICcud2VsY29tZV9fZGVjb3ItaXRlbS5fY3VwJyxcbiAgICAgICAgICAgICcud2VsY29tZV9fZGVjb3ItaXRlbS5fY3ViZScsXG4gICAgICAgICAgICAnLndlbGNvbWVfX2RlY29yLWl0ZW0uX2dsb2JlJ1xuICAgICAgICBdO1xuXG4gICAgICAgIC8vINCX0LHQtdGA0ZbQs9Cw0ZTQvNC+INC+0YDQuNCz0ZbQvdCw0LvRjNC90ZYgdHJhbnNmb3JtINC00LvRjyDQutC+0LbQvdC+0Zcg0ZbQutC+0L3QutC4XG4gICAgICAgIGNvbnN0IG9yaWdpbmFsVHJhbnNmb3JtcyA9IG5ldyBNYXAoKTtcblxuICAgICAgICAvLyDQodC/0L7Rh9Cw0YLQutGDINC/0YDQuNGF0L7QstGD0ZTQvNC+INCy0YHRliDRltC60L7QvdC60LhcbiAgICAgICAgaWNvbnMuZm9yRWFjaChzZWxlY3RvciA9PiB7XG4gICAgICAgICAgICBjb25zdCBpY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgICAgICAgICBpZiAoaWNvbikge1xuICAgICAgICAgICAgICAgIC8vINCX0LHQtdGA0ZbQs9Cw0ZTQvNC+INC+0YDQuNCz0ZbQvdCw0LvRjNC90LjQuSB0cmFuc2Zvcm0gKNGP0LrRidC+INGUIHJvdGF0ZSlcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wdXRlZFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoaWNvbik7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxUcmFuc2Zvcm0gPSBjb21wdXRlZFN0eWxlLnRyYW5zZm9ybTtcbiAgICAgICAgICAgICAgICBvcmlnaW5hbFRyYW5zZm9ybXMuc2V0KHNlbGVjdG9yLCBvcmlnaW5hbFRyYW5zZm9ybSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8g0JLRgdGC0LDQvdC+0LLQu9GO0ZTQvNC+INC/0L7Rh9Cw0YLQutC+0LLQuNC5INGB0YLQsNC9XG4gICAgICAgICAgICAgICAgaWNvbi5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgICAgICAgICAgICAgIGljb24uc3R5bGUudHJhbnNpdGlvbiA9ICdvcGFjaXR5IDAuNHMgZWFzZSwgdHJhbnNmb3JtIDAuNHMgZWFzZSc7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8g0JLRgdGC0LDQvdC+0LLQu9GO0ZTQvNC+IHNjYWxlINC3INC30LHQtdGA0LXQttC10L3QvdGP0Lwgcm90YXRlXG4gICAgICAgICAgICAgICAgaWYgKG9yaWdpbmFsVHJhbnNmb3JtICYmIG9yaWdpbmFsVHJhbnNmb3JtICE9PSAnbm9uZScpIHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbi5zdHlsZS50cmFuc2Zvcm0gPSBvcmlnaW5hbFRyYW5zZm9ybSArICcgc2NhbGUoMC41KSc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbi5zdHlsZS50cmFuc2Zvcm0gPSAnc2NhbGUoMC41KSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyDQoNC+0LfRgNCw0YXQvtCy0YPRlNC80L4g0ZbQvdGC0LXRgNCy0LDQuyDQvNGW0LYg0L/QvtGP0LLQvtGOINGW0LrQvtC90L7QulxuICAgICAgICBjb25zdCBpY29uQ291bnQgPSBpY29ucy5sZW5ndGg7XG4gICAgICAgIGNvbnN0IGludGVydmFsID0gZHVyYXRpb24gLyBpY29uQ291bnQ7IC8vINCg0ZbQstC90L7QvNGW0YDQvdC+INGA0L7Qt9C/0L7QtNGW0LvRj9GU0LzQviDQv9C+INGH0LDRgdGDXG5cbiAgICAgICAgLy8g0J/QvtC60LDQt9GD0ZTQvNC+INGW0LrQvtC90LrQuCDQv9C+INGH0LXRgNC30ZZcbiAgICAgICAgaWNvbnMuZm9yRWFjaCgoc2VsZWN0b3IsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgICAgICAgICAgICAgaWYgKGljb24pIHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbi5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICAgICAgICAgICAgICAvLyDQktGW0LTQvdC+0LLQu9GO0ZTQvNC+INC+0YDQuNCz0ZbQvdCw0LvRjNC90LjQuSB0cmFuc2Zvcm1cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxUcmFuc2Zvcm0gPSBvcmlnaW5hbFRyYW5zZm9ybXMuZ2V0KHNlbGVjdG9yKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9yaWdpbmFsVHJhbnNmb3JtICYmIG9yaWdpbmFsVHJhbnNmb3JtICE9PSAnbm9uZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb24uc3R5bGUudHJhbnNmb3JtID0gb3JpZ2luYWxUcmFuc2Zvcm07XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uLnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZSgxKSc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBpbmRleCAqIGludGVydmFsKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8g0JfQvNGW0L3QvdGWINC00LvRjyDQt9Cx0LXRgNGW0LPQsNC90L3RjyDQv9C+0YHQuNC70LDQvdGMINC90LAgY2FudmFzINGC0LAg0LTQsNC90ZYg0LTQu9GPINC+0LHRgNC+0LHQvdC40LrRltCyINC/0L7QtNGW0LlcbiAgICBsZXQgcGFydGljaXBhdGVDYW52YXMgPSBudWxsO1xuICAgIGxldCBwYXJ0aWNpcGF0ZURlZXJzID0gW107XG4gICAgbGV0IHBhcnRpY2lwYXRlRGVlcldpZHRoID0gMDtcbiAgICBsZXQgcGFydGljaXBhdGVEZWVySGVpZ2h0ID0gMDtcbiAgICBsZXQgY2FudmFzQ2xpY2tIYW5kbGVyc0F0dGFjaGVkID0gZmFsc2U7XG4gICAgbGV0IHBhcnRpY2lwYXRlQW5pbWF0aW9uSWQgPSBudWxsOyAvLyDQk9C70L7QsdCw0LvRjNC90LAg0LfQvNGW0L3QvdCwINC00LvRjyBJRCDQsNC90ZbQvNCw0YbRltGXXG4gICAgXG4gICAgLy8g0JfQvNGW0L3QvdGWINC00LvRjyDQstGW0LTRgdGC0LXQttC10L3QvdGPIHRvdWNoINC/0L7QtNGW0LlcbiAgICBsZXQgdG91Y2hTdGFydFggPSAwO1xuICAgIGxldCB0b3VjaFN0YXJ0WSA9IDA7XG5cbiAgICAvLyDQntCx0YDQvtCx0L3QuNC6INC60LvRltC60YMg0L/QviBjYW52YXNcbiAgICBmdW5jdGlvbiBoYW5kbGVQYXJ0aWNpcGF0ZUNhbnZhc0NsaWNrKGV2ZW50KSB7XG4gICAgICAgIGlmICghcGFydGljaXBhdGVDYW52YXMgfHwgIXBhcnRpY2lwYXRlRGVlcnMubGVuZ3RoKSByZXR1cm47XG4gICAgICAgIFxuICAgICAgICBjb25zdCByZWN0ID0gcGFydGljaXBhdGVDYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IHNjYWxlWCA9IHBhcnRpY2lwYXRlQ2FudmFzLndpZHRoIC8gcmVjdC53aWR0aDtcbiAgICAgICAgY29uc3Qgc2NhbGVZID0gcGFydGljaXBhdGVDYW52YXMuaGVpZ2h0IC8gcmVjdC5oZWlnaHQ7XG4gICAgICAgIFxuICAgICAgICAvLyDQntGC0YDQuNC80YPRlNC80L4g0LrQvtC+0YDQtNC40L3QsNGC0Lgg0LrQu9GW0LrRgyDQstGW0LTQvdC+0YHQvdC+IGNhbnZhc1xuICAgICAgICBjb25zdCBjbGllbnRYID0gZXZlbnQuY2xpZW50WDtcbiAgICAgICAgY29uc3QgY2xpZW50WSA9IGV2ZW50LmNsaWVudFk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBjbGlja1ggPSAoY2xpZW50WCAtIHJlY3QubGVmdCkgKiBzY2FsZVg7XG4gICAgICAgIGNvbnN0IGNsaWNrWSA9IChjbGllbnRZIC0gcmVjdC50b3ApICogc2NhbGVZO1xuICAgICAgICBcbiAgICAgICAgLy8g0J/QtdGA0LXQstGW0YDRj9GU0LzQviDRh9C4INC60LvRltC6INC/0L7RgtGA0LDQv9C40LIg0L3QsCDRj9C60L7Qs9C+0YHRjCDQvtC70LXQvdGPXG4gICAgICAgIHBhcnRpY2lwYXRlRGVlcnMuZm9yRWFjaChkZWVyID0+IHtcbiAgICAgICAgICAgIGlmIChkZWVyLmlzUG9pbnRJbnNpZGUoY2xpY2tYLCBjbGlja1ksIHBhcnRpY2lwYXRlRGVlcldpZHRoLCBwYXJ0aWNpcGF0ZURlZXJIZWlnaHQpKSB7XG4gICAgICAgICAgICAgICAgZGVlci5oYW5kbGVDbGljaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgLy8g0J7QsdGA0L7QsdC90LjQuiB0b3VjaHN0YXJ0INC00LvRjyDQstGW0LTRgdGC0LXQttC10L3QvdGPINC/0L7Rh9Cw0YLQutGDINC00L7RgtC40LrRg1xuICAgIGZ1bmN0aW9uIGhhbmRsZVBhcnRpY2lwYXRlQ2FudmFzVG91Y2hTdGFydChldmVudCkge1xuICAgICAgICBpZiAoIXBhcnRpY2lwYXRlQ2FudmFzIHx8ICFwYXJ0aWNpcGF0ZURlZXJzLmxlbmd0aCkgcmV0dXJuO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgdG91Y2ggPSBldmVudC50b3VjaGVzWzBdO1xuICAgICAgICBpZiAoIXRvdWNoKSByZXR1cm47XG4gICAgICAgIFxuICAgICAgICAvLyDQl9Cx0LXRgNGW0LPQsNGU0LzQviDQutC+0L7RgNC00LjQvdCw0YLQuCDQv9C+0YfQsNGC0LrRgyDQtNC+0YLQuNC60YNcbiAgICAgICAgdG91Y2hTdGFydFggPSB0b3VjaC5jbGllbnRYO1xuICAgICAgICB0b3VjaFN0YXJ0WSA9IHRvdWNoLmNsaWVudFk7XG4gICAgfVxuICAgIFxuICAgIC8vINCe0LHRgNC+0LHQvdC40LogdG91Y2hlbmQg0LTQu9GPINCy0LjQt9C90LDRh9C10L3QvdGPINGH0Lgg0YbQtSDRgtCw0L8g0YfQuCDRgdC60YDQvtC7XG4gICAgZnVuY3Rpb24gaGFuZGxlUGFydGljaXBhdGVDYW52YXNUb3VjaEVuZChldmVudCkge1xuICAgICAgICBpZiAoIXBhcnRpY2lwYXRlQ2FudmFzIHx8ICFwYXJ0aWNpcGF0ZURlZXJzLmxlbmd0aCkgcmV0dXJuO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgdG91Y2ggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXTtcbiAgICAgICAgaWYgKCF0b3VjaCkgcmV0dXJuO1xuICAgICAgICBcbiAgICAgICAgLy8g0KDQvtC30YDQsNGF0L7QstGD0ZTQvNC+INCy0ZbQtNGB0YLQsNC90Ywg0LzRltC2IHRvdWNoc3RhcnQg0YLQsCB0b3VjaGVuZFxuICAgICAgICBjb25zdCBkZWx0YVggPSBNYXRoLmFicyh0b3VjaC5jbGllbnRYIC0gdG91Y2hTdGFydFgpO1xuICAgICAgICBjb25zdCBkZWx0YVkgPSBNYXRoLmFicyh0b3VjaC5jbGllbnRZIC0gdG91Y2hTdGFydFkpO1xuICAgICAgICBjb25zdCBkaXN0YW5jZSA9IE1hdGguc3FydChkZWx0YVggKiBkZWx0YVggKyBkZWx0YVkgKiBkZWx0YVkpO1xuICAgICAgICBcbiAgICAgICAgLy8g0K/QutGJ0L4g0LLRltC00YHRgtCw0L3RjCDQsdGW0LvRjNGI0LUgMTBweCAtINGG0LUg0YHQutGA0L7Quywg0L3QtSDQvtCx0YDQvtCx0LvRj9GU0LzQvlxuICAgICAgICBpZiAoZGlzdGFuY2UgPiAxMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyDQr9C60YnQviDQstGW0LTRgdGC0LDQvdGMINC80LXQvdGI0LUg0LDQsdC+INC00L7RgNGW0LLQvdGO0ZQgMTBweCAtINGG0LUg0YLQsNC/LCDQvtCx0YDQvtCx0LvRj9GU0LzQvlxuICAgICAgICBjb25zdCByZWN0ID0gcGFydGljaXBhdGVDYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IHNjYWxlWCA9IHBhcnRpY2lwYXRlQ2FudmFzLndpZHRoIC8gcmVjdC53aWR0aDtcbiAgICAgICAgY29uc3Qgc2NhbGVZID0gcGFydGljaXBhdGVDYW52YXMuaGVpZ2h0IC8gcmVjdC5oZWlnaHQ7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBjbGlja1ggPSAodG91Y2guY2xpZW50WCAtIHJlY3QubGVmdCkgKiBzY2FsZVg7XG4gICAgICAgIGNvbnN0IGNsaWNrWSA9ICh0b3VjaC5jbGllbnRZIC0gcmVjdC50b3ApICogc2NhbGVZO1xuICAgICAgICBcbiAgICAgICAgLy8g0J/QtdGA0LXQstGW0YDRj9GU0LzQviDRh9C4INGC0LDQvyDQv9C+0YLRgNCw0L/QuNCyINC90LAg0Y/QutC+0LPQvtGB0Ywg0L7Qu9C10L3Rj1xuICAgICAgICBwYXJ0aWNpcGF0ZURlZXJzLmZvckVhY2goZGVlciA9PiB7XG4gICAgICAgICAgICBpZiAoZGVlci5pc1BvaW50SW5zaWRlKGNsaWNrWCwgY2xpY2tZLCBwYXJ0aWNpcGF0ZURlZXJXaWR0aCwgcGFydGljaXBhdGVEZWVySGVpZ2h0KSkge1xuICAgICAgICAgICAgICAgIGRlZXIuaGFuZGxlQ2xpY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdFBhcnRpY2lwYXRlQ2FudmFzKCkge1xuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGFydGljaXBhdGVDYW52YXMnKTtcbiAgICAgICAgaWYgKCFjYW52YXMpIHJldHVybjtcblxuICAgICAgICAvLyDQl9GD0L/QuNC90Y/RlNC80L4g0L/QvtC/0LXRgNC10LTQvdGOINCw0L3RltC80LDRhtGW0Y4g0Y/QutGJ0L4g0LLQvtC90LAg0ZbRgdC90YPRlFxuICAgICAgICBpZiAocGFydGljaXBhdGVBbmltYXRpb25JZCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUocGFydGljaXBhdGVBbmltYXRpb25JZCk7XG4gICAgICAgICAgICBwYXJ0aWNpcGF0ZUFuaW1hdGlvbklkID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8g0J7Rh9C40YnQsNGU0LzQviDQv9C+0L/QtdGA0LXQtNC90ZbRhSDQvtC70LXQvdGW0LJcbiAgICAgICAgcGFydGljaXBhdGVEZWVycyA9IFtdO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIFxuICAgICAgICAvLyDQntC90L7QstC70Y7RlNC80L4g0L/QvtGB0LjQu9Cw0L3QvdGPINC90LAgY2FudmFzXG4gICAgICAgIHBhcnRpY2lwYXRlQ2FudmFzID0gY2FudmFzO1xuICAgICAgICBcbiAgICAgICAgLy8g0JLQuNC30L3QsNGH0LDRlNC80L4g0YfQuCDQtdC60YDQsNC9IDw9IDEwNTBweFxuICAgICAgICBjb25zdCBpc01vYmlsZSA9IHdpbmRvdy5pbm5lcldpZHRoIDw9IDEwNTA7XG5cbiAgICAgICAgLy8g0JrQvtC90YHRgtCw0L3RgtC4INC00LvRjyDRgNC+0LfQvNGW0YDRltCyINGC0LAg0L/QvtC30LjRhtGW0LlcbiAgICAgICAgY29uc3QgQ0FOVkFTX1dJRFRIID0gaXNNb2JpbGUgPyA3NjggOiAxMzY2O1xuICAgICAgICBjb25zdCBDQU5WQVNfSEVJR0hUID0gaXNNb2JpbGUgPyA0NzAgOiA1MDA7XG4gICAgICAgIFxuICAgICAgICAvLyDQktGB0YLQsNC90L7QstC70Y7RlNC80L4g0YDQvtC30LzRltGA0LggY2FudmFzXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IENBTlZBU19XSURUSDtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IENBTlZBU19IRUlHSFQ7XG4gICAgICAgIFxuICAgICAgICAvLyDQpNGW0LrRgdC+0LLQsNC90ZYg0YDQvtC30LzRltGA0Lgg0LTQtdGA0LXQstCwICjQvdC1INC80LDRgdGI0YLQsNCx0YPRjtGC0YzRgdGPKVxuICAgICAgICBjb25zdCBUUkVFX1dJRFRIID0gMTc1O1xuICAgICAgICBjb25zdCBUUkVFX0hFSUdIVCA9IDE2NztcbiAgICAgICAgXG4gICAgICAgIC8vINCf0LDRgNCw0LzQtdGC0YDQuCDRgdC/0YDQsNC50YIt0LvQuNGB0YLQsFxuICAgICAgICBjb25zdCBGUkFNRVNfUEVSX1JPVyA9IDU7IC8vIDUg0LrQsNC00YDRltCyINCyINGA0Y/QtNC60YNcbiAgICAgICAgY29uc3QgVE9UQUxfUk9XUyA9IDI7IC8vIDIg0YDRj9C00LhcbiAgICAgICAgY29uc3QgU1BSSVRFX1NIRUVUX1dJRFRIID0gMTEwMDsgLy8g0KDQtdCw0LvRjNC90LAg0YjQuNGA0LjQvdCwINGB0L/RgNCw0LnRgi3Qu9C40YHRgtCwXG4gICAgICAgIGNvbnN0IFNQUklURV9TSEVFVF9IRUlHSFQgPSA0Njg7IC8vINCg0LXQsNC70YzQvdCwINCy0LjRgdC+0YLQsCDRgdC/0YDQsNC50YIt0LvQuNGB0YLQsFxuICAgICAgICBcbiAgICAgICAgLy8g0KDQvtC30LzRltGA0Lgg0L7QtNC90L7Qs9C+INC60LDQtNGA0YMg0LIg0YHQv9GA0LDQudGCLdC70LjRgdGC0ZZcbiAgICAgICAgY29uc3QgRlJBTUVfV0lEVEggPSBNYXRoLmZsb29yKFNQUklURV9TSEVFVF9XSURUSCAvIEZSQU1FU19QRVJfUk9XKTsgLy8gMjIwcHhcbiAgICAgICAgY29uc3QgRlJBTUVfSEVJR0hUID0gTWF0aC5mbG9vcihTUFJJVEVfU0hFRVRfSEVJR0hUIC8gVE9UQUxfUk9XUyk7IC8vIDIzNHB4XG4gICAgICAgIFxuICAgICAgICAvLyDQpNGW0LrRgdC+0LLQsNC90ZYg0YDQvtC30LzRltGA0Lgg0L7Qu9C10L3RjyDQvdCwIGNhbnZhc1xuICAgICAgICBjb25zdCBERUVSX1NDQUxFID0gMC41OyAvLyDQnNCw0YHRiNGC0LDQsSDQtNC70Y8g0LLRltC00L7QsdGA0LDQttC10L3QvdGPINC90LAgY2FudmFzXG4gICAgICAgIGNvbnN0IEJBU0VfREVFUl9XSURUSCA9IE1hdGguZmxvb3IoRlJBTUVfV0lEVEggKiBERUVSX1NDQUxFKTsgXG4gICAgICAgIGNvbnN0IEJBU0VfREVFUl9IRUlHSFQgPSBNYXRoLmZsb29yKEZSQU1FX0hFSUdIVCAqIERFRVJfU0NBTEUpO1xuICAgICAgICBcbiAgICAgICAgLy8g0JfQvNC10L3RiNGD0ZTQvNC+INGA0L7Qt9C80ZbRgNC4INC+0LvQtdC90ZbQsiDQvdCwIDE1JSDQtNC70Y8g0LzQvtCx0ZbQu9GM0L3QuNGFINC/0YDQuNGB0YLRgNC+0ZfQslxuICAgICAgICBsZXQgREVFUl9XSURUSCA9IEJBU0VfREVFUl9XSURUSDtcbiAgICAgICAgbGV0IERFRVJfSEVJR0hUID0gQkFTRV9ERUVSX0hFSUdIVDtcbiAgICAgICAgbGV0IGRlZXJIZWlnaHRPZmZzZXQgPSAwOyAvLyDQl9C80ZbRidC10L3QvdGPINC00LvRjyDQt9Cx0LXRgNC10LbQtdC90L3RjyDQv9C+0LfQuNGG0ZbRlyDQstGW0LTQvdC+0YHQvdC+INC90LjQttC90YzQvtCz0L4g0LrRgNCw0Y5cbiAgICAgICAgXG4gICAgICAgIGlmIChpc01vYmlsZSkge1xuICAgICAgICAgICAgREVFUl9XSURUSCA9IE1hdGguZmxvb3IoQkFTRV9ERUVSX1dJRFRIICogLjgpO1xuICAgICAgICAgICAgREVFUl9IRUlHSFQgPSBNYXRoLmZsb29yKEJBU0VfREVFUl9IRUlHSFQgKiAuOCk7XG4gICAgICAgICAgICAvLyDQoNC+0LfRgNCw0YXQvtCy0YPRlNC80L4g0LfQvNGW0YnQtdC90L3RjyDQtNC70Y8g0LfQsdC10YDQtdC20LXQvdC90Y8g0L/QvtC30LjRhtGW0Zcg0LLRltC00L3QvtGB0L3QviDQvdC40LbQvdGM0L7Qs9C+INC60YDQsNGOXG4gICAgICAgICAgICBkZWVySGVpZ2h0T2Zmc2V0ID0gQkFTRV9ERUVSX0hFSUdIVCAtIERFRVJfSEVJR0hUO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g0J/QvtC30LjRhtGW0Zcg0LXQu9C10LzQtdC90YLRltCyXG4gICAgICAgIGxldCB0cmVlWCwgdHJlZVk7XG4gICAgICAgIGlmIChpc01vYmlsZSkge1xuICAgICAgICAgICAgdHJlZVggPSAyMzU7XG4gICAgICAgICAgICB0cmVlWSA9IENBTlZBU19IRUlHSFQgLSAxNTIgLSBUUkVFX0hFSUdIVDsgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyDQlNC10YHQutGC0L7Qv9C90LAg0LLQtdGA0YHRltGPXG4gICAgICAgICAgICB0cmVlWCA9IENBTlZBU19XSURUSCAvIDIgLSAzMDA7IFxuICAgICAgICAgICAgdHJlZVkgPSBDQU5WQVNfSEVJR0hUIC8gMiAtIFRSRUVfSEVJR0hUIC8gMjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8g0J/QsNGA0LDQvNC10YLRgNC4INCw0L3RltC80LDRhtGW0ZcgKNGB0L/RltC70YzQvdGWINC00LvRjyDQstGB0ZbRhSDQvtC70LXQvdGW0LIpXG4gICAgICAgIGNvbnN0IEZSQU1FX0RFTEFZID0gMTI7IC8vINCX0LDRgtGA0LjQvNC60LAg0LzRltC2INC60LDQtNGA0LDQvNC4XG4gICAgICAgIGNvbnN0IFdBTEtJTkdfRlJBTUVTID0gNTsgLy8g0JrRltC70YzQutGW0YHRgtGMINC60LDQtNGA0ZbQsiDQtNC70Y8g0YXQvtC00YzQsdC4XG4gICAgICAgIGNvbnN0IEZSQU1FX1JFUEVBVCA9IDI7IC8vINCa0ZbQu9GM0LrRltGB0YLRjCDRgNCw0LfRltCyINC/0L7QutCw0LfRg9Cy0LDRgtC4INC60L7QttC10L0g0LrQsNC00YBcbiAgICAgICAgY29uc3QgSURMRV9NSU5fRFVSQVRJT04gPSA2MDsgLy8g0JzRltC90ZbQvNCw0LvRjNC90LAg0YLRgNC40LLQsNC70ZbRgdGC0Ywg0LfRg9C/0LjQvdC60LggKDEg0YHQtdC60YPQvdC00LAg0L/RgNC4IDYwZnBzKVxuICAgICAgICBjb25zdCBJRExFX01BWF9EVVJBVElPTiA9IDE4MDsgLy8g0JzQsNC60YHQuNC80LDQu9GM0L3QsCDRgtGA0LjQstCw0LvRltGB0YLRjCDQt9GD0L/QuNC90LrQuCAoMyDRgdC10LrRg9C90LTQuCDQv9GA0LggNjBmcHMpXG5cbiAgICAgICAgLy8g0KHRgtCw0L3QuCDQsNC90ZbQvNCw0YbRltGXINC+0LvQtdC90Y9cbiAgICAgICAgY29uc3QgREVFUl9TVEFURSA9IHtcbiAgICAgICAgICAgIFdBTEtJTkc6ICd3YWxraW5nJyxcbiAgICAgICAgICAgIElETEU6ICdpZGxlJyxcbiAgICAgICAgICAgIFBFVFRJTkc6ICdwZXR0aW5nJ1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgLy8g0J/QsNGA0LDQvNC10YLRgNC4INC00LvRjyDRgdGC0LDQvdGDIHBldHRpbmdcbiAgICAgICAgY29uc3QgUEVUVElOR19NSU5fRFVSQVRJT04gPSA2MDsgLy8gMSDRgdC10LrRg9C90LTQsCDQv9GA0LggNjBmcHNcbiAgICAgICAgY29uc3QgUEVUVElOR19NQVhfRFVSQVRJT04gPSAxODA7IC8vIDMg0YHQtdC60YPQvdC00Lgg0L/RgNC4IDYwZnBzXG4gICAgICAgIGNvbnN0IEhFQVJUX1NJWkVfTUlOID0gODtcbiAgICAgICAgY29uc3QgSEVBUlRfU0laRV9NQVggPSAxMjtcbiAgICAgICAgY29uc3QgSEVBUlRfUklTRV9ESVNUQU5DRSA9IDMwOyAvLyDQktGW0LTRgdGC0LDQvdGMINC/0ZbQtNC50L7QvNGDINGB0LXRgNC00LXRh9C60LBcbiAgICAgICAgY29uc3QgSEVBUlRfU1BBV05fSU5URVJWQUwgPSAyMDsgLy8g0IbQvdGC0LXRgNCy0LDQuyDQv9C+0Y/QstC4INGB0LXRgNC00LXRh9C+0LogKNC60LDQtNGA0LgpXG4gICAgICAgIFxuICAgICAgICBsZXQgZnJhbWVDb3VudGVyID0gMDsgLy8g0JPQu9C+0LHQsNC70YzQvdC40Lkg0LvRltGH0LjQu9GM0L3QuNC6INC60LDQtNGA0ZbQsiDQtNC70Y8g0YHQuNC90YXRgNC+0L3RltC30LDRhtGW0ZdcblxuICAgICAgICAvLyDQmtC70LDRgSDQtNC70Y8g0YHQtdGA0LTQtdGH0LrQsFxuICAgICAgICBjbGFzcyBIZWFydCB7XG4gICAgICAgICAgICBjb25zdHJ1Y3Rvcih4LCB5LCBzaXplLCBoZWFydEltYWdlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICAgICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XG4gICAgICAgICAgICAgICAgdGhpcy5vcGFjaXR5ID0gMTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjYWxlID0gMTtcbiAgICAgICAgICAgICAgICB0aGlzLnJpc2VTcGVlZCA9IDAuNTsgLy8g0KjQstC40LTQutGW0YHRgtGMINC/0ZbQtNC50L7QvNGDXG4gICAgICAgICAgICAgICAgdGhpcy5oZWFydEltYWdlID0gaGVhcnRJbWFnZTsgLy8g0JfQvtCx0YDQsNC20LXQvdC90Y8g0YHQtdGA0LTQtdGH0LrQsFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB1cGRhdGUoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy55IC09IHRoaXMucmlzZVNwZWVkO1xuICAgICAgICAgICAgICAgIHRoaXMub3BhY2l0eSAtPSAwLjAyO1xuICAgICAgICAgICAgICAgIHRoaXMuc2NhbGUgKz0gMC4wMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaXNWaXNpYmxlKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm9wYWNpdHkgPiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBkcmF3KGN0eCkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc1Zpc2libGUoKSB8fCAhdGhpcy5oZWFydEltYWdlIHx8ICF0aGlzLmhlYXJ0SW1hZ2UuY29tcGxldGUpIHJldHVybjtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjdHguc2F2ZSgpO1xuICAgICAgICAgICAgICAgIGN0eC5nbG9iYWxBbHBoYSA9IHRoaXMub3BhY2l0eTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyDQnNCw0LvRjtGU0LzQviDQt9C+0LHRgNCw0LbQtdC90L3RjyDRgdC10YDQtNC10YfQutCwINC3INC80LDRgdGI0YLQsNCx0YPQstCw0L3QvdGP0LxcbiAgICAgICAgICAgICAgICBjb25zdCBkcmF3U2l6ZSA9IHRoaXMuc2l6ZSAqIHRoaXMuc2NhbGU7XG4gICAgICAgICAgICAgICAgY29uc3QgZHJhd1ggPSB0aGlzLnggLSBkcmF3U2l6ZSAvIDI7XG4gICAgICAgICAgICAgICAgY29uc3QgZHJhd1kgPSB0aGlzLnkgLSBkcmF3U2l6ZSAvIDI7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oZWFydEltYWdlLFxuICAgICAgICAgICAgICAgICAgICBkcmF3WCwgZHJhd1ksIGRyYXdTaXplLCBkcmF3U2l6ZVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY3R4LnJlc3RvcmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vINCa0LvQsNGBINC00LvRjyDQvtC70LXQvdGPXG4gICAgICAgIGNsYXNzIERlZXIge1xuICAgICAgICAgICAgY29uc3RydWN0b3Ioc3RhcnRYLCBzdGFydFksIG1pblgsIG1heFgsIHNwZWVkID0gMC41LCB6SW5kZXggPSAwLCBoZWFydEltYWdlID0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMueCA9IHN0YXJ0WDtcbiAgICAgICAgICAgICAgICB0aGlzLnkgPSBzdGFydFk7XG4gICAgICAgICAgICAgICAgdGhpcy5taW5YID0gbWluWDtcbiAgICAgICAgICAgICAgICB0aGlzLm1heFggPSBtYXhYO1xuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWQgPSBzcGVlZDtcbiAgICAgICAgICAgICAgICB0aGlzLnpJbmRleCA9IHpJbmRleDsgLy8g0J/QvtGA0Y/QtNC+0Log0LzQsNC70Y7QstCw0L3QvdGPIFxuICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gLTE7IC8vIC0xID0g0LLQu9GW0LLQviwgMSA9INCy0L/RgNCw0LLQvlxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBERUVSX1NUQVRFLldBTEtJTkc7XG4gICAgICAgICAgICAgICAgdGhpcy5mcmFtZUluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLmZyYW1lUmVwZWF0Q291bnRlciA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5pZGxlVGltZXIgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuaWRsZUR1cmF0aW9uID0gMDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyDQktC70LDRgdGC0LjQstC+0YHRgtGWINC00LvRjyDRgdGC0LDQvdGDIHBldHRpbmdcbiAgICAgICAgICAgICAgICB0aGlzLnBldHRpbmdUaW1lciA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5wZXR0aW5nRHVyYXRpb24gPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMucHJldmlvdXNTdGF0ZSA9IG51bGw7IC8vINCX0LHQtdGA0ZbQs9Cw0ZTQvNC+INC/0L7Qv9C10YDQtdC00L3RltC5INGB0YLQsNC9XG4gICAgICAgICAgICAgICAgdGhpcy5zYXZlZFggPSAwOyAvLyDQl9Cx0LXRgNC10LbQtdC90ZYg0LrQvtC+0YDQtNC40L3QsNGC0Lgg0L/RgNC4INC/0LXRgNC10YXQvtC00ZYg0LIgcGV0dGluZ1xuICAgICAgICAgICAgICAgIHRoaXMuc2F2ZWRZID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLmhlYXJ0cyA9IFtdOyAvLyDQnNCw0YHQuNCyINGB0LXRgNC00LXRh9C+0LpcbiAgICAgICAgICAgICAgICB0aGlzLmhlYXJ0U3Bhd25Db3VudGVyID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLmhlYXJ0SW1hZ2UgPSBoZWFydEltYWdlOyAvLyDQl9C+0LHRgNCw0LbQtdC90L3RjyDRgdC10YDQtNC10YfQutCwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCf0LXRgNC10LLRltGA0LrQsCDRh9C4INC60LvRltC6INC/0L7RgtGA0LDQv9C40LIg0L3QsCDQvtC70LXQvdGPXG4gICAgICAgICAgICBpc1BvaW50SW5zaWRlKGNsaWNrWCwgY2xpY2tZLCBkZWVyV2lkdGgsIGRlZXJIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2xpY2tYID49IHRoaXMueCAmJiBcbiAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tYIDw9IHRoaXMueCArIGRlZXJXaWR0aCAmJiBcbiAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tZID49IHRoaXMueSAmJiBcbiAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tZIDw9IHRoaXMueSArIGRlZXJIZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCe0LHRgNC+0LHQutCwINC60LvRltC60YMg0L/QviDQvtC70LXQvdGOXG4gICAgICAgICAgICBoYW5kbGVDbGljaygpIHtcbiAgICAgICAgICAgICAgICAvLyDQn9C10YDQtdGF0L7QtNC40LzQviDQsiDRgdGC0LDQvSBwZXR0aW5nINCw0LHQviDQv9C+0L3QvtCy0LvRjtGU0LzQviDRgtCw0LnQvNC10YBcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZSAhPT0gREVFUl9TVEFURS5QRVRUSU5HKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vINCX0LHQtdGA0ZbQs9Cw0ZTQvNC+INC/0L7Qv9C10YDQtdC00L3RltC5INGB0YLQsNC9INGC0LAg0LrQvtC+0YDQtNC40L3QsNGC0LhcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmV2aW91c1N0YXRlID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zYXZlZFggPSB0aGlzLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2F2ZWRZID0gdGhpcy55O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0gREVFUl9TVEFURS5QRVRUSU5HO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBldHRpbmdUaW1lciA9IDA7XG4gICAgICAgICAgICAgICAgICAgIC8vINCe0YfQuNGJ0LDRlNC80L4g0YHRgtCw0YDRliDRgdC10YDQtNC10YfQutCwXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGVhcnRzID0gW107XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGVhcnRTcGF3bkNvdW50ZXIgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyDQn9C+0L3QvtCy0LvRjtGU0LzQviDRgtCw0LnQvNC10YAgcGV0dGluZyAoMS0zINGB0LXQutGD0L3QtNC4KSDRgtCwINGB0LrQuNC00LDRlNC80L4g0L/QvtGC0L7Rh9C90LjQuSDRgtCw0LnQvNC10YBcbiAgICAgICAgICAgICAgICB0aGlzLnBldHRpbmdEdXJhdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChQRVRUSU5HX01BWF9EVVJBVElPTiAtIFBFVFRJTkdfTUlOX0RVUkFUSU9OICsgMSkpICsgUEVUVElOR19NSU5fRFVSQVRJT047XG4gICAgICAgICAgICAgICAgdGhpcy5wZXR0aW5nVGltZXIgPSAwOyAvLyDQodC60LjQtNCw0ZTQvNC+INGC0LDQudC80LXRgCDQv9GA0Lgg0LrQvtC20L3QvtC80YMg0LrQu9GW0LrRg1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQodGC0LLQvtGA0LXQvdC90Y8g0L3QvtCy0L7Qs9C+INGB0LXRgNC00LXRh9C60LBcbiAgICAgICAgICAgIHNwYXduSGVhcnQoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmhlYXJ0SW1hZ2UpIHJldHVybjsgLy8g0K/QutGJ0L4g0LfQvtCx0YDQsNC20LXQvdC90Y8g0L3QtSDQt9Cw0LLQsNC90YLQsNC20LXQvdC1LCDQvdC1INGB0YLQstC+0YDRjtGU0LzQviDRgdC10YDQtNC10YfQutC+XG4gICAgICAgICAgICAgICAgY29uc3Qgc2l6ZSA9IE1hdGgucmFuZG9tKCkgKiAoSEVBUlRfU0laRV9NQVggLSBIRUFSVF9TSVpFX01JTikgKyBIRUFSVF9TSVpFX01JTjtcbiAgICAgICAgICAgICAgICBjb25zdCBvZmZzZXRYID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogREVFUl9XSURUSDsgLy8g0JLQuNC/0LDQtNC60L7QstC1INC30LzRltGJ0LXQvdC90Y8g0L/QviBYXG4gICAgICAgICAgICAgICAgY29uc3QgaGVhcnRYID0gdGhpcy54ICsgREVFUl9XSURUSCAvIDIgKyBvZmZzZXRYO1xuICAgICAgICAgICAgICAgIGNvbnN0IGhlYXJ0WSA9IHRoaXMueSAtIDEwOyAvLyDQotGA0L7RhdC4INCy0LjRidC1INC+0LvQtdC90Y9cbiAgICAgICAgICAgICAgICB0aGlzLmhlYXJ0cy5wdXNoKG5ldyBIZWFydChoZWFydFgsIGhlYXJ0WSwgc2l6ZSwgdGhpcy5oZWFydEltYWdlKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGdldFNwcml0ZUZyYW1lSW5kZXgoKSB7XG4gICAgICAgICAgICAgICAgLy8g0JLQtdGA0YXQvdGW0Lkg0YDRj9C00L7QuiAoMCkgPSDRgNGD0YUg0LLQu9GW0LLQviwg0L3QuNC20L3RltC5INGA0Y/QtNC+0LogKDEpID0g0YDRg9GFINCy0L/RgNCw0LLQvlxuICAgICAgICAgICAgICAgIGNvbnN0IHJvdyA9IHRoaXMuZGlyZWN0aW9uID09PSAtMSA/IDAgOiAxO1xuICAgICAgICAgICAgICAgIGxldCBjb2wgPSAwO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IERFRVJfU1RBVEUuV0FMS0lORykge1xuICAgICAgICAgICAgICAgICAgICAvLyDQmtCw0LTRgNC4INGF0L7QtNGM0LHQuDogMCwgMSwgMiwgMywgNCAo0LLRgdGWIDUg0LrQsNC00YDRltCyKVxuICAgICAgICAgICAgICAgICAgICBjb2wgPSB0aGlzLmZyYW1lSW5kZXggJSBXQUxLSU5HX0ZSQU1FUztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT09IERFRVJfU1RBVEUuUEVUVElORykge1xuICAgICAgICAgICAgICAgICAgICAvLyDQkiDRgdGC0LDQvdGWIHBldHRpbmcg0LLQuNC60L7RgNC40YHRgtC+0LLRg9GU0LzQviDQutCw0LTRgCAwIChpZGxlINC60LDQtNGAKVxuICAgICAgICAgICAgICAgICAgICBjb2wgPSAwO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vINCh0YLQsNC9INC30YPQv9C40L3QutC4IChJRExFKSAtINCy0LjQutC+0YDQuNGB0YLQvtCy0YPRlNC80L4g0LrQsNC00YAgMFxuICAgICAgICAgICAgICAgICAgICBjb2wgPSAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB7IHJvdywgY29sIH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHVwZGF0ZShzaG91bGRVcGRhdGVGcmFtZSkge1xuICAgICAgICAgICAgICAgIC8vINCe0L3QvtCy0LvRjtGU0LzQviDQsNC90ZbQvNCw0YbRltGOINC60LDQtNGA0ZbQsiDQtyDQv9C+0LLRgtC+0YDQtdC90L3Rj9C8INC00LvRjyDQv9C70LDQstC90L7RgdGC0ZZcbiAgICAgICAgICAgICAgICBpZiAoc2hvdWxkVXBkYXRlRnJhbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IERFRVJfU1RBVEUuV0FMS0lORykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mcmFtZVJlcGVhdENvdW50ZXIrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vINCf0L7QutCw0LfRg9GU0LzQviDQutC+0LbQtdC9INC60LDQtNGAINC60ZbQu9GM0LrQsCDRgNCw0LfRltCyINC00LvRjyDQv9C70LDQstC90ZbRiNC+0Zcg0LDQvdGW0LzQsNGG0ZbRl1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZnJhbWVSZXBlYXRDb3VudGVyID49IEZSQU1FX1JFUEVBVCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZnJhbWVSZXBlYXRDb3VudGVyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDQn9C+0YHQu9GW0LTQvtCy0L3QviDQv9GA0L7RhdC+0LTQuNC80L4g0YfQtdGA0LXQtyDQstGB0ZYg0LrQsNC00YDQuDogMCwgMSwgMiwgMywgNCwgMCwgMSwgMiwgMywgNC4uLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZnJhbWVJbmRleCA9ICh0aGlzLmZyYW1lSW5kZXggKyAxKSAlIFdBTEtJTkdfRlJBTUVTO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8g0JvQvtCz0ZbQutCwINGB0YLQsNC90ZbQsiDRgtCwINGA0YPRhdGDXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IERFRVJfU1RBVEUuUEVUVElORykge1xuICAgICAgICAgICAgICAgICAgICAvLyDQkiDRgdGC0LDQvdGWIHBldHRpbmcg0L7Qu9C10L3RjCDQvdC1INGA0YPRhdCw0ZTRgtGM0YHRj1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBldHRpbmdUaW1lcisrO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8g0KHRgtCy0L7RgNGO0ZTQvNC+INGB0LXRgNC00LXRh9C60LAg0Lcg0ZbQvdGC0LXRgNCy0LDQu9C+0LxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oZWFydFNwYXduQ291bnRlcisrO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5oZWFydFNwYXduQ291bnRlciA+PSBIRUFSVF9TUEFXTl9JTlRFUlZBTCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oZWFydFNwYXduQ291bnRlciA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNwYXduSGVhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8g0J7QvdC+0LLQu9GO0ZTQvNC+INGB0LXRgNC00LXRh9C60LBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oZWFydHMgPSB0aGlzLmhlYXJ0cy5maWx0ZXIoaGVhcnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVhcnQudXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaGVhcnQuaXNWaXNpYmxlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8g0J/QtdGA0LXQstGW0YDRj9GU0LzQviDRh9C4INC30LDQutGW0L3Rh9C40LLRgdGPINGB0YLQsNC9IHBldHRpbmdcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGV0dGluZ1RpbWVyID49IHRoaXMucGV0dGluZ0R1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDQn9C+0LLQtdGA0YLQsNGU0LzQvtGB0Y8g0LTQviDQt9Cx0LXRgNC10LbQtdC90LjRhSDQutC+0L7RgNC00LjQvdCw0YJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueCA9IHRoaXMuc2F2ZWRYO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy55ID0gdGhpcy5zYXZlZFk7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vINCf0L7QstC10YDRgtCw0ZTQvNC+0YHRjyDQtNC+INC/0L7Qv9C10YDQtdC00L3RjNC+0LPQviDRgdGC0LDQvdGDXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcmV2aW91c1N0YXRlID09PSBERUVSX1NUQVRFLldBTEtJTkcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0gREVFUl9TVEFURS5XQUxLSU5HO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vINCf0YDQvtC00L7QstC20YPRlNC80L4g0YDRg9GFINC3INC30LHQtdGA0LXQttC10L3QuNGFINC60L7QvtGA0LTQuNC90LDRglxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXZpb3VzU3RhdGUgPT09IERFRVJfU1RBVEUuSURMRSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBERUVSX1NUQVRFLklETEU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g0J/QvtCy0LXRgNGC0LDRlNC80L7RgdGPINC00L4g0YHRgtCw0L3RgyBpZGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pZGxlVGltZXIgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaWRsZUR1cmF0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKElETEVfTUFYX0RVUkFUSU9OIC0gSURMRV9NSU5fRFVSQVRJT04gKyAxKSkgKyBJRExFX01JTl9EVVJBVElPTjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmV2aW91c1N0YXRlID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGV0dGluZ1RpbWVyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGV0dGluZ0R1cmF0aW9uID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGVhcnRzID0gW107IC8vINCe0YfQuNGJ0LDRlNC80L4g0YHQtdGA0LTQtdGH0LrQsFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oZWFydFNwYXduQ291bnRlciA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT09IERFRVJfU1RBVEUuV0FMS0lORykge1xuICAgICAgICAgICAgICAgICAgICAvLyDQntC90L7QstC70Y7RlNC80L4g0L/QvtC30LjRhtGW0Y4g0L7Qu9C10L3Rj1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnggKz0gdGhpcy5zcGVlZCAqIHRoaXMuZGlyZWN0aW9uO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vINCf0LXRgNC10LLRltGA0Y/RlNC80L4g0LzQtdC20ZYg0YLQsCDQv9C10YDQtdGF0L7QtNC40LzQviDQtNC+INC30YPQv9C40L3QutC4XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnggPj0gdGhpcy5tYXhYICYmIHRoaXMuZGlyZWN0aW9uID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDQlNC+0YHRj9Cz0LvQuCDQv9GA0LDQstC+0LPQviDQutGA0LDRjiAtINC30YPQv9C40L3Rj9GU0LzQvtGB0Y9cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueCA9IHRoaXMubWF4WDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBERUVSX1NUQVRFLklETEU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlkbGVUaW1lciA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDQk9C10L3QtdGA0YPRlNC80L4g0LLQuNC/0LDQtNC60L7QstGDINGC0YDQuNCy0LDQu9GW0YHRgtGMINC30YPQv9C40L3QutC4INCy0ZbQtCAxINC00L4gMyDRgdC10LrRg9C90LRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaWRsZUR1cmF0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKElETEVfTUFYX0RVUkFUSU9OIC0gSURMRV9NSU5fRFVSQVRJT04gKyAxKSkgKyBJRExFX01JTl9EVVJBVElPTjtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnggPD0gdGhpcy5taW5YICYmIHRoaXMuZGlyZWN0aW9uID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g0JTQvtGB0Y/Qs9C70Lgg0LvRltCy0L7Qs9C+INC60YDQsNGOIC0g0LfRg9C/0LjQvdGP0ZTQvNC+0YHRj1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy54ID0gdGhpcy5taW5YO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IERFRVJfU1RBVEUuSURMRTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaWRsZVRpbWVyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vINCT0LXQvdC10YDRg9GU0LzQviDQstC40L/QsNC00LrQvtCy0YMg0YLRgNC40LLQsNC70ZbRgdGC0Ywg0LfRg9C/0LjQvdC60Lgg0LLRltC0IDEg0LTQviAzINGB0LXQutGD0L3QtFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pZGxlRHVyYXRpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoSURMRV9NQVhfRFVSQVRJT04gLSBJRExFX01JTl9EVVJBVElPTiArIDEpKSArIElETEVfTUlOX0RVUkFUSU9OO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlID09PSBERUVSX1NUQVRFLklETEUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pZGxlVGltZXIrKztcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vINCf0ZbRgdC70Y8g0LfQsNCy0LXRgNGI0LXQvdC90Y8g0LfRg9C/0LjQvdC60Lgg0LfQvNGW0L3RjtGU0LzQviDQvdCw0L/RgNGP0LzQvtC6INGC0LAg0L/QtdGA0LXRhdC+0LTQuNC80L4g0LTQviDRhdC+0LTRjNCx0LhcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaWRsZVRpbWVyID49IHRoaXMuaWRsZUR1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiAqPSAtMTsgLy8g0JfQvNGW0L3RjtGU0LzQviDQvdCw0L/RgNGP0LzQvtC6ICjQstC70ZbQstC+IOKGlCDQstC/0YDQsNCy0L4pXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0gREVFUl9TVEFURS5XQUxLSU5HO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mcmFtZUluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZnJhbWVSZXBlYXRDb3VudGVyID0gMDsgLy8g0KHQutC40LTQsNGU0LzQviDQu9GW0YfQuNC70YzQvdC40Log0L/QvtCy0YLQvtGA0LXQvdGMXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRyYXcoY3R4LCBzcHJpdGVJbWFnZSwgZnJhbWVXaWR0aCwgZnJhbWVIZWlnaHQsIGRlZXJXaWR0aCwgZGVlckhlaWdodCkge1xuICAgICAgICAgICAgICAgIGlmICghc3ByaXRlSW1hZ2UuY29tcGxldGUgfHwgZnJhbWVXaWR0aCA8PSAwIHx8IGZyYW1lSGVpZ2h0IDw9IDApIHJldHVybjtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHsgcm93LCBjb2wgfSA9IHRoaXMuZ2V0U3ByaXRlRnJhbWVJbmRleCgpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vINCa0L7QvtGA0LTQuNC90LDRgtC4INC60LDQtNGA0YMg0LIg0YHQv9GA0LDQudGCLdC70LjRgdGC0ZYgKNCy0LjQutC+0YDQuNGB0YLQvtCy0YPRlNC80L4gTWF0aC5mbG9vciDQtNC70Y8g0YPQvdC40LrQvdC10L3QvdGPIHN1Yi1waXhlbCDRgNC10L3QtNC10YDQuNC90LPRgyDQvdCwIGlPUylcbiAgICAgICAgICAgICAgICBjb25zdCBzb3VyY2VYID0gTWF0aC5mbG9vcihjb2wgKiBmcmFtZVdpZHRoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzb3VyY2VZID0gTWF0aC5mbG9vcihyb3cgKiBmcmFtZUhlaWdodCk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc291cmNlV2lkdGggPSBNYXRoLmZsb29yKGZyYW1lV2lkdGgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNvdXJjZUhlaWdodCA9IE1hdGguZmxvb3IoZnJhbWVIZWlnaHQpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vINCa0L7QvtGA0LTQuNC90LDRgtC4INC90LAgY2FudmFzICjRgtCw0LrQvtC2INCy0LjQutC+0YDQuNGB0YLQvtCy0YPRlNC80L4gTWF0aC5mbG9vcilcbiAgICAgICAgICAgICAgICBjb25zdCBkZXN0WCA9IE1hdGguZmxvb3IodGhpcy54KTtcbiAgICAgICAgICAgICAgICBjb25zdCBkZXN0WSA9IE1hdGguZmxvb3IodGhpcy55KTtcbiAgICAgICAgICAgICAgICBjb25zdCBkZXN0V2lkdGggPSBNYXRoLmZsb29yKGRlZXJXaWR0aCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVzdEhlaWdodCA9IE1hdGguZmxvb3IoZGVlckhlaWdodCk7XG5cbiAgICAgICAgICAgICAgICAvLyDQktC40YDRltC30LDRlNC80L4g0LrQsNC00YAg0LfRliDRgdC/0YDQsNC50YIt0LvQuNGB0YLQsCDRgtCwINC80LDQu9GO0ZTQvNC+INC90LAgY2FudmFzXG4gICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShcbiAgICAgICAgICAgICAgICAgICAgc3ByaXRlSW1hZ2UsXG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZVgsIHNvdXJjZVksIHNvdXJjZVdpZHRoLCBzb3VyY2VIZWlnaHQsIC8vINCU0LbQtdGA0LXQu9C+ICjRgdC/0YDQsNC50YIt0LvQuNGB0YIpXG4gICAgICAgICAgICAgICAgICAgIGRlc3RYLCBkZXN0WSwgZGVzdFdpZHRoLCBkZXN0SGVpZ2h0IC8vINCf0YDQuNC30L3QsNGH0LXQvdC90Y8gKGNhbnZhcylcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vINCc0LDQu9GO0ZTQvNC+INGB0LXRgNC00LXRh9C60LAg0L3QsNC0INC+0LvQtdC90LXQvFxuICAgICAgICAgICAgICAgIHRoaXMuaGVhcnRzLmZvckVhY2goaGVhcnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBoZWFydC5kcmF3KGN0eCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vINCX0LDQstCw0L3RgtCw0LbQtdC90L3RjyDQt9C+0LHRgNCw0LbQtdC90YwgKNGB0YLQstC+0YDRjtGU0LzQviDQv9C10YDQtdC0INGB0YLQstC+0YDQtdC90L3Rj9C8INC+0LvQtdC90ZbQsilcbiAgICAgICAgY29uc3QgaW1hZ2VzID0ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbmV3IEltYWdlKCksXG4gICAgICAgICAgICB0cmVlOiBuZXcgSW1hZ2UoKSxcbiAgICAgICAgICAgIGRlZXJTcHJpdGU6IG5ldyBJbWFnZSgpLCAvLyDQodC/0YDQsNC50YIt0LvQuNGB0YIg0LfQsNC80ZbRgdGC0Ywg0L7QtNC90L7Qs9C+INC30L7QsdGA0LDQttC10L3QvdGPXG4gICAgICAgICAgICBoZWFydDogbmV3IEltYWdlKCkgLy8g0JfQvtCx0YDQsNC20LXQvdC90Y8g0YHQtdGA0LTQtdGH0LrQsFxuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgLy8g0JzQsNGB0LjQsiDQvtC70LXQvdGW0LIgKNC80L7QttC90LAg0LTQvtC00LDRgtC4INCx0ZbQu9GM0YjQtSlcbiAgICAgICAgY29uc3QgZGVlcnMgPSBbXTtcbiAgICAgICAgXG4gICAgICAgIC8vINCa0L7QvdGE0ZbQs9GD0YDQsNGG0ZbRjyDQtNC70Y8g0YHRgtCy0L7RgNC10L3QvdGPINC+0LvQtdC90ZbQslxuICAgICAgICBjb25zdCBERUVSX0NPVU5UID0gMzsgLy8g0JrRltC70YzQutGW0YHRgtGMINC+0LvQtdC90ZbQslxuICAgICAgICBcbiAgICAgICAgLy8g0KDQvtC30YDQsNGF0L7QstGD0ZTQvNC+INC60L7QtdGE0ZbRhtGW0ZTQvdGCINC80LDRgdGI0YLQsNCx0YPQstCw0L3QvdGPINC00LvRjyDQv9C+0LfQuNGG0ZbQuSDQvtC70LXQvdGW0LJcbiAgICAgICAgY29uc3Qgc2NhbGVYID0gQ0FOVkFTX1dJRFRIIC8gMTM2NjtcbiAgICAgICAgY29uc3Qgc2NhbGVZID0gQ0FOVkFTX0hFSUdIVCAvIDUwMDtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGRlZXJDb25maWdzID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXJ0WDogQ0FOVkFTX1dJRFRIIC8gMiArIDUwICogc2NhbGVYLFxuICAgICAgICAgICAgICAgIC8vINCU0LvRjyDQt9Cx0LXRgNC10LbQtdC90L3RjyDQv9C+0LfQuNGG0ZbRlyDQstGW0LTQvdC+0YHQvdC+INC90LjQttC90YzQvtCz0L4g0LrRgNCw0Y4g0LTQvtC00LDRlNC80L4g0LfQvNGW0YnQtdC90L3Rj1xuICAgICAgICAgICAgICAgIHN0YXJ0WTogdHJlZVkgKyBUUkVFX0hFSUdIVCAtIDIwICsgZGVlckhlaWdodE9mZnNldCwgLy8g0J/RltC0INGP0LvQuNC90LrQvtGOICh0cmVlWSArINCy0LjRgdC+0YLQsCDRj9C70LjQvdC60LggLSDQstGW0LTRgdGC0YPQvylcbiAgICAgICAgICAgICAgICBtaW5YOiBDQU5WQVNfV0lEVEggLyAyIC0gMjAwICogc2NhbGVYLFxuICAgICAgICAgICAgICAgIG1heFg6IENBTlZBU19XSURUSCAvIDIgKyAzMDAgKiBzY2FsZVgsXG4gICAgICAgICAgICAgICAgc3BlZWQ6IDAuNSxcbiAgICAgICAgICAgICAgICB6SW5kZXg6IDRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhcnRYOiBDQU5WQVNfV0lEVEggLyAyIC0gMTAwICogc2NhbGVYLFxuICAgICAgICAgICAgICAgIC8vINCU0LvRjyDQt9Cx0LXRgNC10LbQtdC90L3RjyDQv9C+0LfQuNGG0ZbRlyDQstGW0LTQvdC+0YHQvdC+INC90LjQttC90YzQvtCz0L4g0LrRgNCw0Y4g0LTQvtC00LDRlNC80L4g0LfQvNGW0YnQtdC90L3Rj1xuICAgICAgICAgICAgICAgIHN0YXJ0WTogQ0FOVkFTX0hFSUdIVCAvIDIgLSBCQVNFX0RFRVJfSEVJR0hUIC8gMiArIDUwICogc2NhbGVZICsgZGVlckhlaWdodE9mZnNldCxcbiAgICAgICAgICAgICAgICBtaW5YOiBDQU5WQVNfV0lEVEggLyAyIC0gMTUwICogc2NhbGVYLFxuICAgICAgICAgICAgICAgIG1heFg6IENBTlZBU19XSURUSCAvIDIgKyAxNTAgKiBzY2FsZVgsXG4gICAgICAgICAgICAgICAgc3BlZWQ6IDAuMyxcbiAgICAgICAgICAgICAgICB6SW5kZXg6IDNcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhcnRYOiBDQU5WQVNfV0lEVEggLyAyIC0gMTAwICogc2NhbGVYLFxuICAgICAgICAgICAgICAgIC8vINCU0LvRjyDQt9Cx0LXRgNC10LbQtdC90L3RjyDQv9C+0LfQuNGG0ZbRlyDQstGW0LTQvdC+0YHQvdC+INC90LjQttC90YzQvtCz0L4g0LrRgNCw0Y4g0LTQvtC00LDRlNC80L4g0LfQvNGW0YnQtdC90L3Rj1xuICAgICAgICAgICAgICAgIHN0YXJ0WTogQ0FOVkFTX0hFSUdIVCAvIDIgLSBCQVNFX0RFRVJfSEVJR0hUIC8gMiAtIDUwICogc2NhbGVZICsgZGVlckhlaWdodE9mZnNldCxcbiAgICAgICAgICAgICAgICBtaW5YOiBDQU5WQVNfV0lEVEggLyAyIC0gMjUwICogc2NhbGVYLFxuICAgICAgICAgICAgICAgIG1heFg6IENBTlZBU19XSURUSCAvIDIgKyAyNTAgKiBzY2FsZVgsXG4gICAgICAgICAgICAgICAgc3BlZWQ6IDAuNCxcbiAgICAgICAgICAgICAgICB6SW5kZXg6IDEgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgIFxuICAgICAgICBdO1xuXG4gICAgICAgIC8vINCh0YLQstC+0YDRjtGU0LzQviDQvtC70LXQvdGW0LJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBERUVSX0NPVU5UICYmIGkgPCBkZWVyQ29uZmlncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY29uZmlnID0gZGVlckNvbmZpZ3NbaV07XG4gICAgICAgICAgICBkZWVycy5wdXNoKG5ldyBEZWVyKFxuICAgICAgICAgICAgICAgIGNvbmZpZy5zdGFydFgsXG4gICAgICAgICAgICAgICAgY29uZmlnLnN0YXJ0WSxcbiAgICAgICAgICAgICAgICBjb25maWcubWluWCxcbiAgICAgICAgICAgICAgICBjb25maWcubWF4WCxcbiAgICAgICAgICAgICAgICBjb25maWcuc3BlZWQsXG4gICAgICAgICAgICAgICAgY29uZmlnLnpJbmRleCB8fCAwLCAvLyDQktC40LrQvtGA0LjRgdGC0L7QstGD0ZTQvNC+IHpJbmRleCDQtyDQutC+0L3RhNGW0LPRgyDQsNCx0L4gMCDQt9CwINC30LDQvNC+0LLRh9GD0LLQsNC90L3Rj9C8XG4gICAgICAgICAgICAgICAgaW1hZ2VzLmhlYXJ0IC8vINCf0LXRgNC10LTQsNGU0LzQviDQt9C+0LHRgNCw0LbQtdC90L3RjyDRgdC10YDQtNC10YfQutCwXG4gICAgICAgICAgICApKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpbWFnZXNMb2FkZWQgPSAwO1xuICAgICAgICBjb25zdCB0b3RhbEltYWdlcyA9IDQ7XG5cbiAgICAgICAgZnVuY3Rpb24gb25JbWFnZUxvYWQoKSB7XG4gICAgICAgICAgICBpbWFnZXNMb2FkZWQrKztcbiAgICAgICAgICAgIGlmIChpbWFnZXNMb2FkZWQgPT09IHRvdGFsSW1hZ2VzKSB7XG4gICAgICAgICAgICAgICAgLy8g0J7QvdC+0LLQu9GO0ZTQvNC+INCz0LvQvtCx0LDQu9GM0L3RliDQv9C+0YHQuNC70LDQvdC90Y8g0L3QsCDQvtC70LXQvdGW0LIg0L/RltGB0LvRjyDRl9GFINGB0YLQstC+0YDQtdC90L3RjyDRgtCwINC30LDQstCw0L3RgtCw0LbQtdC90L3RjyDQt9C+0LHRgNCw0LbQtdC90YxcbiAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0ZURlZXJzID0gZGVlcnM7XG4gICAgICAgICAgICAgICAgcGFydGljaXBhdGVEZWVyV2lkdGggPSBERUVSX1dJRFRIO1xuICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlRGVlckhlaWdodCA9IERFRVJfSEVJR0hUO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vINCf0LXRgNC10LLRltGA0Y/RlNC80L4sINGH0Lgg0YHQv9GA0LDQudGCLdC70LjRgdGCINC30LDQstCw0L3RgtCw0LbQuNCy0YHRjyDQutC+0YDQtdC60YLQvdC+XG4gICAgICAgICAgICAgICAgaWYgKGltYWdlcy5kZWVyU3ByaXRlLmNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEZWVyIHNwcml0ZSBsb2FkZWQ6Jywge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGltYWdlcy5kZWVyU3ByaXRlLndpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBpbWFnZXMuZGVlclNwcml0ZS5oZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgICAgICBmcmFtZVdpZHRoOiBGUkFNRV9XSURUSCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lSGVpZ2h0OiBGUkFNRV9IRUlHSFQsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWVyV2lkdGg6IERFRVJfV0lEVEgsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWVySGVpZ2h0OiBERUVSX0hFSUdIVFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZHJhd0NhbnZhcygpO1xuICAgICAgICAgICAgICAgIHN0YXJ0QW5pbWF0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpbWFnZXMuYmFja2dyb3VuZC5vbmxvYWQgPSBvbkltYWdlTG9hZDtcbiAgICAgICAgaW1hZ2VzLnRyZWUub25sb2FkID0gb25JbWFnZUxvYWQ7XG4gICAgICAgIGltYWdlcy5kZWVyU3ByaXRlLm9ubG9hZCA9IG9uSW1hZ2VMb2FkO1xuICAgICAgICBpbWFnZXMuaGVhcnQub25sb2FkID0gb25JbWFnZUxvYWQ7XG5cbiAgICAgICAgaW1hZ2VzLmJhY2tncm91bmQuc3JjID0gaXNNb2JpbGUgPyAnaHR0cHM6Ly9mYXYtcHJvbS5jb20vaHRtbC9nbG9iYWwtbnktMjAyNi1oci9pbWcvcGFydGljaXBhdGUvY2FudmFzLWJnLXRhYi5wbmcnIDogJ2h0dHBzOi8vZmF2LXByb20uY29tL2h0bWwvZ2xvYmFsLW55LTIwMjYtaHIvaW1nL3BhcnRpY2lwYXRlL2NhbnZhcy1iZy5wbmcnO1xuICAgICAgICBpbWFnZXMudHJlZS5zcmMgPSAnaHR0cHM6Ly9mYXYtcHJvbS5jb20vaHRtbC9nbG9iYWwtbnktMjAyNi1oci9pbWcvcGFydGljaXBhdGUvdHJlZS5wbmcnO1xuICAgICAgICBpbWFnZXMuZGVlclNwcml0ZS5zcmMgPSAnaHR0cHM6Ly9mYXYtcHJvbS5jb20vaHRtbC9nbG9iYWwtbnktMjAyNi1oci9pbWcvcGFydGljaXBhdGUvZGVlci1zcHJpdGUucG5nJztcbiAgICAgICAgaW1hZ2VzLmhlYXJ0LnNyYyA9ICdodHRwczovL2Zhdi1wcm9tLmNvbS9odG1sL2dsb2JhbC1ueS0yMDI2LWhyL2ltZy9wYXJ0aWNpcGF0ZS9kZWVyLWhlYXJ0LnBuZyc7XG4gICAgICAgIFxuICAgICAgICAvLyDQlNC+0LTQsNGU0LzQviDQvtCx0YDQvtCx0L3QuNC60Lgg0L/QvtC00ZbQuSDRgtGW0LvRjNC60Lgg0L7QtNC40L0g0YDQsNC3XG4gICAgICAgIGlmICghY2FudmFzQ2xpY2tIYW5kbGVyc0F0dGFjaGVkKSB7XG4gICAgICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVQYXJ0aWNpcGF0ZUNhbnZhc0NsaWNrKTtcbiAgICAgICAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgaGFuZGxlUGFydGljaXBhdGVDYW52YXNUb3VjaFN0YXJ0LCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gICAgICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBoYW5kbGVQYXJ0aWNpcGF0ZUNhbnZhc1RvdWNoRW5kLCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gICAgICAgICAgICBjYW52YXNDbGlja0hhbmRsZXJzQXR0YWNoZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZHJhd0NhbnZhcygpIHtcbiAgICAgICAgICAgIC8vINCe0YfQuNGJ0LXQvdC90Y8gY2FudmFzXG4gICAgICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIENBTlZBU19XSURUSCwgQ0FOVkFTX0hFSUdIVCk7XG5cbiAgICAgICAgICAgIC8vINCc0LDQu9GO0ZTQvNC+INGE0L7QvVxuICAgICAgICAgICAgaWYgKGltYWdlcy5iYWNrZ3JvdW5kLmNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShpbWFnZXMuYmFja2dyb3VuZCwgMCwgMCwgQ0FOVkFTX1dJRFRILCBDQU5WQVNfSEVJR0hUKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gekluZGV4INC00LvRjyDRj9C70LjQvdC60LggKNC80ZbQtiDQvtC70LXQvdGP0LzQuClcbiAgICAgICAgICAgIGNvbnN0IFRSRUVfWl9JTkRFWCA9IDI7IC8vINCv0LvQuNC90LrQsCDQvNCw0LvRjtGU0YLRjNGB0Y8g0LzRltC2INC+0LvQtdC90Y/QvNC4INC3IHpJbmRleCAxINGC0LAgMlxuXG4gICAgICAgICAgICAvLyDQodGC0LLQvtGA0Y7RlNC80L4g0LzQsNGB0LjQsiDQstGB0ZbRhSDQtdC70LXQvNC10L3RgtGW0LIg0LTQu9GPINC80LDQu9GO0LLQsNC90L3RjyAo0L7Qu9C10L3RliArINGP0LvQuNC90LrQsClcbiAgICAgICAgICAgIGNvbnN0IGRyYXdhYmxlRWxlbWVudHMgPSBbXTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0JTQvtC00LDRlNC80L4g0L7Qu9C10L3RltCyXG4gICAgICAgICAgICBkZWVycy5mb3JFYWNoKGRlZXIgPT4ge1xuICAgICAgICAgICAgICAgIGRyYXdhYmxlRWxlbWVudHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdkZWVyJyxcbiAgICAgICAgICAgICAgICAgICAgekluZGV4OiBkZWVyLnpJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgZHJhdzogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGltYWdlcy5kZWVyU3ByaXRlLmNvbXBsZXRlICYmIEZSQU1FX1dJRFRIID4gMCAmJiBGUkFNRV9IRUlHSFQgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVlci5kcmF3KGN0eCwgaW1hZ2VzLmRlZXJTcHJpdGUsIEZSQU1FX1dJRFRILCBGUkFNRV9IRUlHSFQsIERFRVJfV0lEVEgsIERFRVJfSEVJR0hUKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCU0L7QtNCw0ZTQvNC+INGP0LvQuNC90LrRg1xuICAgICAgICAgICAgZHJhd2FibGVFbGVtZW50cy5wdXNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiAndHJlZScsXG4gICAgICAgICAgICAgICAgekluZGV4OiBUUkVFX1pfSU5ERVgsXG4gICAgICAgICAgICAgICAgZHJhdzogKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGltYWdlcy50cmVlLmNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShpbWFnZXMudHJlZSwgdHJlZVgsIHRyZWVZLCBUUkVFX1dJRFRILCBUUkVFX0hFSUdIVCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vINCh0L7RgNGC0YPRlNC80L4g0LLRgdGWINC10LvQtdC80LXQvdGC0Lgg0LfQsCB6SW5kZXggKNC80LXQvdGI0LUgPSDQvNCw0LvRjtGU0YLRjNGB0Y8g0YDQsNC90ZbRiNC1LCDQsdGW0LvRjNGI0LUgPSDQvNCw0LvRjtGU0YLRjNGB0Y8g0L/RltC30L3RltGI0LUpXG4gICAgICAgICAgICBkcmF3YWJsZUVsZW1lbnRzLnNvcnQoKGEsIGIpID0+IGEuekluZGV4IC0gYi56SW5kZXgpO1xuXG4gICAgICAgICAgICAvLyDQnNCw0LvRjtGU0LzQviDQstGB0ZYg0LXQu9C10LzQtdC90YLQuCDQsiDQv9GA0LDQstC40LvRjNC90L7QvNGDINC/0L7RgNGP0LTQutGDXG4gICAgICAgICAgICBkcmF3YWJsZUVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5kcmF3KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGFuaW1hdGUoKSB7XG4gICAgICAgICAgICBmcmFtZUNvdW50ZXIrKztcblxuICAgICAgICAgICAgLy8g0J/QtdGA0LXQstGW0YDRj9GU0LzQviwg0YfQuCDQv9C+0YLRgNGW0LHQvdC+INC+0L3QvtCy0LvRjtCy0LDRgtC4INC60LDQtNGA0Lgg0LDQvdGW0LzQsNGG0ZbRl1xuICAgICAgICAgICAgY29uc3Qgc2hvdWxkVXBkYXRlRnJhbWUgPSBmcmFtZUNvdW50ZXIgPj0gRlJBTUVfREVMQVk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCe0L3QvtCy0LvRjtGU0LzQviDQs9C70L7QsdCw0LvRjNC90LjQuSDQu9GW0YfQuNC70YzQvdC40Log0LrQsNC00YDRltCyXG4gICAgICAgICAgICBpZiAoc2hvdWxkVXBkYXRlRnJhbWUpIHtcbiAgICAgICAgICAgICAgICBmcmFtZUNvdW50ZXIgPSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDQntC90L7QstC70Y7RlNC80L4g0LLRgdGW0YUg0L7Qu9C10L3RltCyXG4gICAgICAgICAgICBkZWVycy5mb3JFYWNoKGRlZXIgPT4ge1xuICAgICAgICAgICAgICAgIGRlZXIudXBkYXRlKHNob3VsZFVwZGF0ZUZyYW1lKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyDQn9C10YDQtdC80LDQu9GM0L7QstGD0ZTQvNC+IGNhbnZhc1xuICAgICAgICAgICAgZHJhd0NhbnZhcygpO1xuXG4gICAgICAgICAgICBwYXJ0aWNpcGF0ZUFuaW1hdGlvbklkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gc3RhcnRBbmltYXRpb24oKSB7XG4gICAgICAgICAgICBpZiAocGFydGljaXBhdGVBbmltYXRpb25JZCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHBhcnRpY2lwYXRlQW5pbWF0aW9uSWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYW5pbWF0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g0JfRg9C/0LjQvdGP0ZTQvNC+INCw0L3RltC80LDRhtGW0Y4g0L/RgNC4INCy0LjRhdC+0LTRliDQtyB2aWV3cG9ydCAo0L7Qv9GG0ZbQvtC90LDQu9GM0L3QvilcbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICAgICAgICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJ0aWNpcGF0ZUFuaW1hdGlvbklkID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydEFuaW1hdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnRpY2lwYXRlQW5pbWF0aW9uSWQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHBhcnRpY2lwYXRlQW5pbWF0aW9uSWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhdGVBbmltYXRpb25JZCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShjYW52YXMpO1xuICAgICAgICBcbiAgICAgICAgLy8g0J7QsdGA0L7QsdC60LAg0LfQvNGW0L3QuCDRgNC+0LfQvNGW0YDRgyDQstGW0LrQvdCwINC00LvRjyDQsNC00LDQv9GC0LjQstC90L7RgdGC0ZZcbiAgICAgICAgbGV0IHJlc2l6ZVRpbWVvdXQ7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQocmVzaXplVGltZW91dCk7XG4gICAgICAgICAgICByZXNpemVUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3SXNNb2JpbGUgPSB3aW5kb3cuaW5uZXJXaWR0aCA8PSAxMDUwO1xuICAgICAgICAgICAgICAgIC8vINCf0LXRgNC10LfQsNC/0YPRgdC60LDRlNC80L4g0ZbQvdGW0YbRltCw0LvRltC30LDRhtGW0Y4g0YLRltC70YzQutC4INGP0LrRidC+INC30LzRltC90LjQstGB0Y8g0YDQtdC20LjQvCAobW9iaWxlL2Rlc2t0b3ApXG4gICAgICAgICAgICAgICAgaWYgKG5ld0lzTW9iaWxlICE9PSBpc01vYmlsZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyDQn9C10YDQtdC30LDQv9GD0YHQutCw0ZTQvNC+INGW0L3RltGG0ZbQsNC70ZbQt9Cw0YbRltGOICjQsNC90ZbQvNCw0YbRltGPINCx0YPQtNC1INC30YPQv9C40L3QtdC90LAg0LLRgdC10YDQtdC00LjQvdGWIGluaXRQYXJ0aWNpcGF0ZUNhbnZhcylcbiAgICAgICAgICAgICAgICAgICAgaW5pdFBhcnRpY2lwYXRlQ2FudmFzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMjUwKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdFNub3dmbGFrZXNDYW52YXMoKSB7XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzbm93Zmxha2VzQ2FudmFzJyk7XG4gICAgICAgIGlmICghY2FudmFzKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIGNvbnN0IGZhdlBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmF2LXBhZ2UnKTtcbiAgICAgICAgXG4gICAgICAgIC8vINCa0L7QvdGB0YLQsNC90YLQuFxuICAgICAgICBjb25zdCBTTk9XRkxBS0VfQ09VTlQgPSA0MDA7IFxuICAgICAgICBjb25zdCBTTk9XRkxBS0VfTUlOX1NJWkUgPSA0O1xuICAgICAgICBjb25zdCBTTk9XRkxBS0VfTUFYX1NJWkUgPSAxMDtcbiAgICAgICAgY29uc3QgU05PV0ZMQUtFX01JTl9TUEVFRCA9IDAuMTtcbiAgICAgICAgY29uc3QgU05PV0ZMQUtFX01BWF9TUEVFRCA9IDAuMztcbiAgICAgICAgY29uc3QgU05PV0ZMQUtFX1dJTkRfUkFOR0UgPSAwLjQ7XG4gICAgICAgIGNvbnN0IFNOT1dGTEFLRV9TUEFXTl9JTlRFUlZBTCA9IDIwMDtcblxuICAgICAgICBjb25zdCBzbm93Zmxha2VzID0gW107XG4gICAgICAgIGxldCBsYXN0U25vd2ZsYWtlVGltZSA9IDA7XG4gICAgICAgIGxldCBhbmltYXRpb25JZCA9IG51bGw7XG4gICAgICAgIFxuICAgICAgICAvLyDQktGB0YLQsNC90L7QstC70Y7RlNC80L4g0YDQvtC30LzRltGAIGNhbnZhcyDQvdCwINCy0LXRgdGMIC5mYXYtcGFnZVxuICAgICAgICBmdW5jdGlvbiByZXNpemVDYW52YXMoKSB7XG4gICAgICAgICAgICBsZXQgbmV3V2lkdGgsIG5ld0hlaWdodDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGZhdlBhZ2UpIHtcbiAgICAgICAgICAgICAgICAvLyDQktC40LrQvtGA0LjRgdGC0L7QstGD0ZTQvNC+IHNjcm9sbEhlaWdodCDQtNC70Y8g0L7RgtGA0LjQvNCw0L3QvdGPINGA0LXQsNC70YzQvdC+0Zcg0LLQuNGB0L7RgtC4INC60L7QvdGC0LXQvdGC0YNcbiAgICAgICAgICAgICAgICBjb25zdCByZWN0ID0gZmF2UGFnZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgICAgICBuZXdXaWR0aCA9IHJlY3Qud2lkdGggfHwgZmF2UGFnZS5vZmZzZXRXaWR0aCB8fCB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgICAgICAgICAvLyDQlNC70Y8g0LLQuNGB0L7RgtC4INCy0LjQutC+0YDQuNGB0YLQvtCy0YPRlNC80L4gc2Nyb2xsSGVpZ2h0INGP0LrRidC+INCy0ZbQvSDQsdGW0LvRjNGI0LjQuSDQt9CwIG9mZnNldEhlaWdodFxuICAgICAgICAgICAgICAgIGNvbnN0IG9mZnNldEhlaWdodCA9IGZhdlBhZ2Uub2Zmc2V0SGVpZ2h0IHx8IGZhdlBhZ2UuY2xpZW50SGVpZ2h0O1xuICAgICAgICAgICAgICAgIGNvbnN0IHNjcm9sbEhlaWdodCA9IGZhdlBhZ2Uuc2Nyb2xsSGVpZ2h0O1xuICAgICAgICAgICAgICAgIG5ld0hlaWdodCA9IE1hdGgubWF4KHNjcm9sbEhlaWdodCwgb2Zmc2V0SGVpZ2h0LCByZWN0LmhlaWdodCkgfHwgd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBGYWxsYmFjayDQvdCwIHZpZXdwb3J0XG4gICAgICAgICAgICAgICAgbmV3V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgICAgICAgICBuZXdIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCf0LXRgNC10LLRltGA0Y/RlNC80L4g0YfQuCDRgNC+0LfQvNGW0YDQuCDQt9C80ZbQvdC40LvQuNGB0Y8g0L/QtdGA0LXQtCDQvtC90L7QstC70LXQvdC90Y/QvFxuICAgICAgICAgICAgaWYgKGNhbnZhcy53aWR0aCAhPT0gbmV3V2lkdGggfHwgY2FudmFzLmhlaWdodCAhPT0gbmV3SGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgY2FudmFzLndpZHRoID0gbmV3V2lkdGg7XG4gICAgICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IG5ld0hlaWdodDtcbiAgICAgICAgICAgICAgICAvLyDQntGH0LjRidCw0ZTQvNC+INGB0L3RltC20LjQvdC60Lgg0L/RgNC4INC30LzRltC90ZYg0YDQvtC30LzRltGA0YNcbiAgICAgICAgICAgICAgICBzbm93Zmxha2VzLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyDQktGB0YLQsNC90L7QstC70Y7RlNC80L4g0YDQvtC30LzRltGAIGNhbnZhcyDQtyDQvdC10LLQtdC70LjQutC+0Y4g0LfQsNGC0YDQuNC80LrQvtGOINC00LvRjyDQutC+0YDQtdC60YLQvdC+0LPQviDRgNC+0LfRgNCw0YXRg9C90LrRgyDRgNC+0LfQvNGW0YDRltCyXG4gICAgICAgIC8vINCS0LjQutC+0YDQuNGB0YLQvtCy0YPRlNC80L4g0LrRltC70YzQutCwINC60LDQtNGA0ZbQsiDQtNC70Y8g0LPQsNGA0LDQvdGC0ZbRlyDQv9GA0LDQstC40LvRjNC90L7Qs9C+INGA0L7Qt9C80ZbRgNGDXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICByZXNpemVDYW52YXMoKTtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzaXplQ2FudmFzKCk7XG4gICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzaXplQ2FudmFzKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplQ2FudmFzKTtcblxuICAgICAgICAvLyDQl9Cw0LLQsNC90YLQsNC20LXQvdC90Y8g0LfQvtCx0YDQsNC20LXQvdC90Y8g0YHQvdGW0LbQuNC90LrQuFxuICAgICAgICBjb25zdCBzbm93Zmxha2VJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBsZXQgaW1hZ2VMb2FkZWQgPSBmYWxzZTtcblxuICAgICAgICBzbm93Zmxha2VJbWFnZS5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGltYWdlTG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vINCn0LXQutCw0ZTQvNC+INC/0L7QutC4INGB0YLQvtGA0ZbQvdC60LAg0LLQuNC50LTQtSDQt9GWINGB0YLQsNC90YMgbG9hZGluZyDQv9C10YDQtdC0INGB0YLQsNGA0YLQvtC8INCw0L3RltC80LDRhtGW0ZdcbiAgICAgICAgICAgIGZ1bmN0aW9uIHdhaXRGb3JQYWdlUmVhZHkoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXNQYWdlTG9hZGluZyA9IG1haW5QYWdlICYmIG1haW5QYWdlLmNsYXNzTGlzdC5jb250YWlucygnbG9hZGluZycpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChpc1BhZ2VMb2FkaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNpemVDYW52YXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNpemVDYW52YXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g0JTQvtC00LDRgtC60L7QstCwINC/0LXRgNC10LLRltGA0LrQsCDQv9GW0YHQu9GPINGJ0LUg0L7QtNC90L7Qs9C+INC60LDQtNGA0YNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc2l6ZUNhbnZhcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhbnZhcy53aWR0aCA+IDAgJiYgY2FudmFzLmhlaWdodCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsQ2FudmFzV2l0aFNub3dmbGFrZXMoKTsgLy8g0JfQsNC/0L7QstC90Y7RlNC80L4g0LrQsNC90LLQsNGBINGB0L3RltC20LjQvdC60LDQvNC4INC/0YDQuCDQv9C10YDRiNC+0LzRgyDRgNC10L3QtNC10YDRllxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QW5pbWF0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vINCv0LrRidC+INCy0YHQtSDRidC1INC90LXQv9GA0LDQstC40LvRjNC90LjQuSDRgNC+0LfQvNGW0YAsINC/0L7QstGC0L7RgNGO0ZTQvNC+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCh3YWl0Rm9yUGFnZVJlYWR5LCA1MCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDQwMCk7IC8vINCn0LXQutCw0ZTQvNC+INGC0YDQvtGF0Lgg0LHRltC70YzRiNC1INC90ZbQtiBoaWRlTG9hZGVyICgzMDBtcylcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyDQodGC0L7RgNGW0L3QutCwINCz0L7RgtC+0LLQsCwg0LLRgdGC0LDQvdC+0LLQu9GO0ZTQvNC+INGA0L7Qt9C80ZbRgCDRgtCwINC30LDQv9GD0YHQutCw0ZTQvNC+XG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNpemVDYW52YXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzaXplQ2FudmFzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzaXplQ2FudmFzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYW52YXMud2lkdGggPiAwICYmIGNhbnZhcy5oZWlnaHQgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbENhbnZhc1dpdGhTbm93Zmxha2VzKCk7IC8vINCX0LDQv9C+0LLQvdGO0ZTQvNC+INC60LDQvdCy0LDRgSDRgdC90ZbQttC40L3QutCw0LzQuCDQv9GA0Lgg0L/QtdGA0YjQvtC80YMg0YDQtdC90LTQtdGA0ZZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QW5pbWF0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHdhaXRGb3JQYWdlUmVhZHkoKTtcbiAgICAgICAgfTtcbiAgICAgICAgc25vd2ZsYWtlSW1hZ2Uuc3JjID0gJ2ltZy9zbm93Zmxha2UucG5nJztcbiAgICAgICBcblxuICAgICAgICAvLyDQmtC70LDRgSDQtNC70Y8g0YHQvdGW0LbQuNC90LrQuFxuICAgICAgICBjbGFzcyBTbm93Zmxha2Uge1xuICAgICAgICAgICAgY29uc3RydWN0b3IoaW5pdGlhbFkgPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy54ID0gTWF0aC5yYW5kb20oKSAqIChjYW52YXMud2lkdGggfHwgd2luZG93LmlubmVyV2lkdGgpO1xuICAgICAgICAgICAgICAgIC8vINCv0LrRidC+INC/0LXRgNC10LTQsNC90L4gaW5pdGlhbFksINCy0LjQutC+0YDQuNGB0YLQvtCy0YPRlNC80L4g0ZfRlyAo0LTQu9GPINC/0L7Rh9Cw0YLQutC+0LLQvtCz0L4g0LfQsNC/0L7QstC90LXQvdC90Y8g0LrQsNC90LLQsNGB0YMpXG4gICAgICAgICAgICAgICAgLy8g0IbQvdCw0LrRiNC1INGB0L/QsNCy0L3QuNC80L4g0LfQstC10YDRhdGDXG4gICAgICAgICAgICAgICAgdGhpcy55ID0gaW5pdGlhbFkgIT09IG51bGwgPyBpbml0aWFsWSA6IC0yMDtcbiAgICAgICAgICAgICAgICB0aGlzLnNpemUgPSBNYXRoLnJhbmRvbSgpICogKFNOT1dGTEFLRV9NQVhfU0laRSAtIFNOT1dGTEFLRV9NSU5fU0laRSkgKyBTTk9XRkxBS0VfTUlOX1NJWkU7XG4gICAgICAgICAgICAgICAgdGhpcy5zcGVlZCA9IE1hdGgucmFuZG9tKCkgKiAoU05PV0ZMQUtFX01BWF9TUEVFRCAtIFNOT1dGTEFLRV9NSU5fU1BFRUQpICsgU05PV0ZMQUtFX01JTl9TUEVFRDtcbiAgICAgICAgICAgICAgICB0aGlzLndpbmQgPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiBTTk9XRkxBS0VfV0lORF9SQU5HRTtcbiAgICAgICAgICAgICAgICB0aGlzLm9wYWNpdHkgPSBNYXRoLnJhbmRvbSgpICogMC41ICsgMC41O1xuICAgICAgICAgICAgICAgIHRoaXMucm90YXRpb24gPSBNYXRoLnJhbmRvbSgpICogTWF0aC5QSSAqIDI7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3RhdGlvblNwZWVkID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMC4wMjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdXBkYXRlKCkge1xuICAgICAgICAgICAgICAgIHRoaXMueSArPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgICAgIHRoaXMueCArPSB0aGlzLndpbmQgKyAoTWF0aC5zaW4odGhpcy55ICogMC4wMSkgKiAwLjIpO1xuICAgICAgICAgICAgICAgIHRoaXMucm90YXRpb24gKz0gdGhpcy5yb3RhdGlvblNwZWVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkcmF3KCkge1xuICAgICAgICAgICAgICAgIGlmICghaW1hZ2VMb2FkZWQpIHJldHVybjtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNC60LAg0YfQuCBjYW52YXMg0LzQsNGUINC/0YDQsNCy0LjQu9GM0L3QuNC5INGA0L7Qt9C80ZbRgFxuICAgICAgICAgICAgICAgIGlmIChjYW52YXMud2lkdGggPT09IDAgfHwgY2FudmFzLmhlaWdodCA9PT0gMCkgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgY3R4LnNhdmUoKTtcbiAgICAgICAgICAgICAgICBjdHguZ2xvYmFsQWxwaGEgPSB0aGlzLm9wYWNpdHk7XG4gICAgICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZSh0aGlzLngsIHRoaXMueSk7XG4gICAgICAgICAgICAgICAgY3R4LnJvdGF0ZSh0aGlzLnJvdGF0aW9uKTtcbiAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgICAgICAgICBzbm93Zmxha2VJbWFnZSxcbiAgICAgICAgICAgICAgICAgICAgLXRoaXMuc2l6ZSAvIDIsXG4gICAgICAgICAgICAgICAgICAgIC10aGlzLnNpemUgLyAyLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNpemUsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2l6ZVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgY3R4LnJlc3RvcmUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaXNPZmZTY3JlZW4oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMueSA+IGNhbnZhcy5oZWlnaHQgKyAyMCB8fCBcbiAgICAgICAgICAgICAgICAgICAgICAgdGhpcy54IDwgLTIwIHx8IFxuICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnggPiBjYW52YXMud2lkdGggKyAyMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVNub3dmbGFrZShpbml0aWFsWSA9IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChzbm93Zmxha2VzLmxlbmd0aCA8IFNOT1dGTEFLRV9DT1VOVCkge1xuICAgICAgICAgICAgICAgIHNub3dmbGFrZXMucHVzaChuZXcgU25vd2ZsYWtlKGluaXRpYWxZKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vINCk0YPQvdC60YbRltGPINC00LvRjyDQv9C+0YfQsNGC0LrQvtCy0L7Qs9C+INC30LDQv9C+0LLQvdC10L3QvdGPINC60LDQvdCy0LDRgdGDINGB0L3RltC20LjQvdC60LDQvNC4XG4gICAgICAgIGZ1bmN0aW9uIGZpbGxDYW52YXNXaXRoU25vd2ZsYWtlcygpIHtcbiAgICAgICAgICAgIGlmIChjYW52YXMud2lkdGggPT09IDAgfHwgY2FudmFzLmhlaWdodCA9PT0gMCkgcmV0dXJuO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQodGC0LLQvtGA0Y7RlNC80L4g0YHQvdGW0LbQuNC90LrQuCDQv9C+INCy0YHRjNC+0LzRgyDQutCw0L3QstCw0YHRgyAo0LLRgdGWIDIwMCDRgdC90ZbQttC40L3QvtC6KVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBTTk9XRkxBS0VfQ09VTlQ7IGkrKykge1xuICAgICAgICAgICAgICAgIC8vINCg0L7Qt9C/0L7QtNGW0LvRj9GU0LzQviDRgdC90ZbQttC40L3QutC4INC/0L4g0LLRgdGW0Lkg0LLQuNGB0L7RgtGWINC60LDQvdCy0LDRgdGDXG4gICAgICAgICAgICAgICAgY29uc3QgaW5pdGlhbFkgPSBNYXRoLnJhbmRvbSgpICogY2FudmFzLmhlaWdodDtcbiAgICAgICAgICAgICAgICBjcmVhdGVTbm93Zmxha2UoaW5pdGlhbFkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlU25vd2ZsYWtlcygpIHtcbiAgICAgICAgICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gICAgICAgICAgICBpZiAobm93IC0gbGFzdFNub3dmbGFrZVRpbWUgPiBTTk9XRkxBS0VfU1BBV05fSU5URVJWQUwpIHtcbiAgICAgICAgICAgICAgICBjcmVhdGVTbm93Zmxha2UoKTtcbiAgICAgICAgICAgICAgICBsYXN0U25vd2ZsYWtlVGltZSA9IG5vdztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHNub3dmbGFrZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICBzbm93Zmxha2VzW2ldLnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgIGlmIChzbm93Zmxha2VzW2ldLmlzT2ZmU2NyZWVuKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgc25vd2ZsYWtlcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZHJhd1Nub3dmbGFrZXMoKSB7XG4gICAgICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNC60LAg0YfQuCBjYW52YXMg0LzQsNGUINC/0YDQsNCy0LjQu9GM0L3QuNC5INGA0L7Qt9C80ZbRgCDQv9C10YDQtdC0INC80LDQu9GO0LLQsNC90L3Rj9C8XG4gICAgICAgICAgICBpZiAoY2FudmFzLndpZHRoID09PSAwIHx8IGNhbnZhcy5oZWlnaHQgPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXNpemVDYW52YXMoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIHNub3dmbGFrZXMuZm9yRWFjaChzbm93Zmxha2UgPT4ge1xuICAgICAgICAgICAgICAgIHNub3dmbGFrZS5kcmF3KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGFuaW1hdGUoKSB7XG4gICAgICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNGP0ZTQvNC+INGA0L7Qt9C80ZbRgCBjYW52YXMg0L3QsCDQv9C+0YfQsNGC0LrRgyDQutC+0LbQvdC+0LPQviDQutCw0LTRgNGDICjRgtGW0LvRjNC60Lgg0Y/QutGJ0L4g0LLRltC9INC90LXQv9GA0LDQstC40LvRjNC90LjQuSlcbiAgICAgICAgICAgIGlmIChjYW52YXMud2lkdGggPT09IDAgfHwgY2FudmFzLmhlaWdodCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJlc2l6ZUNhbnZhcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB1cGRhdGVTbm93Zmxha2VzKCk7XG4gICAgICAgICAgICBkcmF3U25vd2ZsYWtlcygpO1xuICAgICAgICAgICAgYW5pbWF0aW9uSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBzdGFydEFuaW1hdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChhbmltYXRpb25JZCkge1xuICAgICAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbklkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFuaW1hdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vINCX0YPQv9C40L3Rj9GU0LzQviDQsNC90ZbQvNCw0YbRltGOINC/0YDQuCDQstC40YXQvtC00ZYg0Lcgdmlld3BvcnRcbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICAgICAgICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghYW5pbWF0aW9uSWQgJiYgaW1hZ2VMb2FkZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QW5pbWF0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYW5pbWF0aW9uSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbklkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbklkID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGNhbnZhcyk7XG4gICAgfVxuICAgIFxuICAgIGxvYWRUcmFuc2xhdGlvbnMoKVxuICAgICAgICAudGhlbihpbml0KSAvLyDQt9Cw0L/Rg9GB0Log0ZbQvdGW0YLRgyDRgdGC0L7RgNGW0L3QutC4XG5cblxuXG5cblxuICAgIC8vIGNvbnN0IGxuZ0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG5nLWJ0blwiKVxuICAgIC8vXG4gICAgLy8gLy8g0JLRgdGC0LDQvdC+0LLQu9GO0ZTQvNC+INGC0LXQutGB0YIg0LrQvdC+0L/QutC4INC90LAg0L/QvtGC0L7Rh9C90YMg0LDQutGC0LjQstC90YMg0LzQvtCy0YNcbiAgICAvLyBmdW5jdGlvbiB1cGRhdGVMYW5ndWFnZUJ1dHRvbigpIHtcbiAgICAvLyAgICAgLy8g0JLQuNC60L7RgNC40YHRgtC+0LLRg9GU0LzQviDRgtGDINGB0LDQvNGDINC70L7Qs9GW0LrRgywg0YnQviDRliDQtNC70Y8g0LLQuNC30L3QsNGH0LXQvdC90Y8gbG9jYWxlXG4gICAgLy8gICAgIGxldCBjdXJyZW50TG9jYWxlID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsZVwiKSB8fCBcImhyXCI7XG4gICAgLy8gICAgIGlmIChockxlbmcpIGN1cnJlbnRMb2NhbGUgPSAnaHInO1xuICAgIC8vICAgICBpZiAoZW5MZW5nKSBjdXJyZW50TG9jYWxlID0gJ2VuJztcbiAgICAvLyAgICAgaWYgKGxuZ0J0bikge1xuICAgIC8vICAgICAgICAgbG5nQnRuLnRleHRDb250ZW50ID0gY3VycmVudExvY2FsZTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cbiAgICAvL1xuICAgIC8vIC8vINCe0L3QvtCy0LvRjtGU0LzQviDQutC90L7Qv9C60YMg0L/RgNC4INC30LDQstCw0L3RgtCw0LbQtdC90L3RliAo0L/RltGB0LvRjyDQstC40LfQvdCw0YfQtdC90L3RjyBsb2NhbGUpXG4gICAgLy8gdXBkYXRlTGFuZ3VhZ2VCdXR0b24oKTtcblxuICAgIC8vIGlmIChsbmdCdG4pIHtcbiAgICAvLyAgICAgbG5nQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgLy8gICAgICAgICAvLyDQktC40LfQvdCw0YfQsNGU0LzQviDQv9C+0YLQvtGH0L3RgyDQvNC+0LLRgyDQv9C10YDQtdC0INC/0LXRgNC10LzQuNC60LDQvdC90Y/QvFxuICAgIC8vICAgICAgICAgbGV0IGN1cnJlbnRMb2NhbGUgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxlXCIpIHx8IFwiaHJcIjtcbiAgICAvLyAgICAgICAgIGlmIChockxlbmcpIGN1cnJlbnRMb2NhbGUgPSAnaHInO1xuICAgIC8vICAgICAgICAgaWYgKGVuTGVuZykgY3VycmVudExvY2FsZSA9ICdlbic7XG4gICAgLy9cbiAgICAvLyAgICAgICAgIGlmIChjdXJyZW50TG9jYWxlID09PSBcImVuXCIpIHtcbiAgICAvLyAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwibG9jYWxlXCIpO1xuICAgIC8vICAgICAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwibG9jYWxlXCIsIFwiZW5cIik7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgLy8gICAgIH0pO1xuICAgIC8vIH1cbiAgICAvL1xuICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1idG5cIik/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgLy8gICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS10ZXN0XCIpPy5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKTtcbiAgICAvLyB9KTtcblxuICAgIC8vINCi0LjQvNGH0LDRgdC+0LLQuNC5INC+0LEn0ZTQutGCINC3INC00LDQvdC40LzQuCDQv9GA0L4g0L/RgNC+0LzRltC20LrQuCDRgtC40LbQvdGW0LJcbiAgICAvLyBUT0RPOiDQl9Cw0LzRltC90LjRgtC4INC90LAg0LTQsNC90ZYg0Lcg0LHQtdC60LXQvdC00YNcbiAgICAvLyDQn9GA0LjQutC70LDQtCDRgdGC0YDRg9C60YLRg9GA0Lgg0LTQsNC90LjRhSDQtyDQsdC10LrQtdC90LTRgzpcbiAgICAvLyB7XG4gICAgLy8gICAgIDE6IHsgc3RhcnQ6IFwiMjAyNS0xMi0xNVQwMDowMDowMFwiLCBlbmQ6IFwiMjAyNS0xMi0yMVQyMzo1OTo1OVwiIH0sXG4gICAgLy8gICAgIDI6IHsgc3RhcnQ6IFwiMjAyNS0xMi0yMlQwMDowMDowMFwiLCBlbmQ6IFwiMjAyNS0xMi0yOFQyMzo1OTo1OVwiIH0sXG4gICAgLy8gICAgIC4uLlxuICAgIC8vIH1cbiAgICAvLyDQlNC70Y8g0ZbQvdGC0LXQs9GA0LDRhtGW0Zcg0Lcg0LHQtdC60LXQvdC00L7QvDog0LfQsNC80ZbQvdC40YLQuCDRhtC10Lkg0L7QsSfRlNC60YIg0L3QsCDQtNCw0L3RliDQtyBBUElcbiAgICAvLyDQndCw0L/RgNC40LrQu9Cw0LQ6IGNvbnN0IHdlZWtzRGF0YSA9IGF3YWl0IHJlcXVlc3QoJy9hcGkvd2Vla3MnKTtcbiAgICBjb25zdCB3ZWVrc0RhdGEgPSB7XG4gICAgICAgIDE6IHtcbiAgICAgICAgICAgIHN0YXJ0OiBcIjIwMjUtMTItMTVUMDA6MDA6MDBcIixcbiAgICAgICAgICAgIGVuZDogXCIyMDI1LTEyLTIxVDIzOjU5OjU5XCJcbiAgICAgICAgfSxcbiAgICAgICAgMjoge1xuICAgICAgICAgICAgc3RhcnQ6IFwiMjAyNS0xMi0yMlQwMDowMDowMFwiLFxuICAgICAgICAgICAgZW5kOiBcIjIwMjUtMTItMjhUMjM6NTk6NTlcIlxuICAgICAgICB9LFxuICAgICAgICAzOiB7XG4gICAgICAgICAgICBzdGFydDogXCIyMDI1LTEyLTI5VDAwOjAwOjAwXCIsXG4gICAgICAgICAgICBlbmQ6IFwiMjAyNi0wMS0wNFQyMzo1OTo1OVwiXG4gICAgICAgIH0sXG4gICAgICAgIDQ6IHtcbiAgICAgICAgICAgIHN0YXJ0OiBcIjIwMjYtMDEtMDVUMDA6MDA6MDBcIixcbiAgICAgICAgICAgIGVuZDogXCIyMDI2LTAxLTExVDIzOjU5OjU5XCJcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyDQpNGD0L3QutGG0ZbRjyDQtNC70Y8g0LLQuNC30L3QsNGH0LXQvdC90Y8g0LDQutGC0LjQstC90L7Qs9C+INGC0LjQttC90Y8g0L3QsCDQvtGB0L3QvtCy0ZYg0LTQsNC90LjRhSDQtyDQvtCxJ9GU0LrRgtCwXG4gICAgZnVuY3Rpb24gZ2V0QWN0aXZlV2Vlayh3ZWVrc0RhdGEpIHtcbiAgICAgICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBsZXQgYWN0aXZlV2Vla0luZGV4ID0gbnVsbDtcblxuICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNC60LAg0LrQvtC20L3QvtCz0L4g0YLQuNC20L3Rj1xuICAgICAgICBmb3IgKGNvbnN0IHdlZWtOdW0gaW4gd2Vla3NEYXRhKSB7XG4gICAgICAgICAgICBjb25zdCB3ZWVrID0gd2Vla3NEYXRhW3dlZWtOdW1dO1xuICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSBuZXcgRGF0ZSh3ZWVrLnN0YXJ0KTtcbiAgICAgICAgICAgIGNvbnN0IGVuZCA9IG5ldyBEYXRlKHdlZWsuZW5kKTtcblxuICAgICAgICAgICAgaWYgKGN1cnJlbnREYXRlID49IHN0YXJ0ICYmIGN1cnJlbnREYXRlIDw9IGVuZCkge1xuICAgICAgICAgICAgICAgIGFjdGl2ZVdlZWtJbmRleCA9IHBhcnNlSW50KHdlZWtOdW0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFjdGl2ZVdlZWtJbmRleDtcbiAgICB9XG5cbiAgICAvLyDQhtC90ZbRhtGW0LDQu9GW0LfQsNGG0ZbRjyDRgdC10LrRhtGW0Zcg0ZbQs9C+0YAg0Lcg0LDQstGC0L7QvNCw0YLQuNGH0L3QuNC8INCy0LjQt9C90LDRh9C10L3QvdGP0Lwg0YLQuNC20L3Rj1xuICAgIGZ1bmN0aW9uIGluaXRHYW1lc1dlZWsoKSB7XG4gICAgICAgIC8vINCS0LjQt9C90LDRh9Cw0ZTQvNC+INCw0LrRgtC40LLQvdC40Lkg0YLQuNC20LTQtdC90Ywg0L3QsCDQvtGB0L3QvtCy0ZYg0LTQsNC90LjRhSDQtyDQvtCxJ9GU0LrRgtCwXG4gICAgICAgIGxldCBhY3RpdmVXZWVrID0gZ2V0QWN0aXZlV2Vlayh3ZWVrc0RhdGEpIHx8IDE7XG5cbiAgICAgICAgLy8g0J7QsdC80LXQttC10L3QvdGPINC00L4gNCDRgtC40LbQvdGW0LJcbiAgICAgICAgaWYgKGFjdGl2ZVdlZWsgPiA0KSBhY3RpdmVXZWVrID0gNDtcblxuICAgICAgICAvLyDQn9GA0LjRhdC+0LLRg9Cy0LDQvdC90Y8g0LLRgdGW0YUg0YHQv9C40YHQutGW0LIg0ZbQs9C+0YBcbiAgICAgICAgY29uc3QgZ2FtZUxpc3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdhbWVzX19saXN0Jyk7XG4gICAgICAgIGdhbWVMaXN0cy5mb3JFYWNoKGxpc3QgPT4ge1xuICAgICAgICAgICAgbGlzdC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vINCf0L7QutCw0Lcg0YLRltC70YzQutC4INCw0LrRgtC40LLQvdC+0LPQviDRgtC40LbQvdGPXG4gICAgICAgIGNvbnN0IGN1cnJlbnRMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmdhbWVzX19saXN0Ll93ZWVrJHthY3RpdmVXZWVrfWApO1xuICAgICAgICBpZiAoY3VycmVudExpc3QpIHtcbiAgICAgICAgICAgIGN1cnJlbnRMaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vINCQ0LLRgtC+0LzQsNGC0LjRh9C90LUg0LTQvtC00LDQstCw0L3QvdGPIGRhdGEt0LDRgtGA0LjQsdGD0YLRltCyINC00LvRjyDRgtGA0LXQutGW0L3Qs9GDINGC0LAg0LLRgdGC0LDQvdC+0LLQu9C10L3QvdGPINC/0L7RgdC40LvQsNC90YxcbiAgICAgICAgYXV0b0FkZERhdGFCdXR0b25zKCk7XG4gICAgICAgIHNldEdhbWVMaW5rcygpO1xuICAgIH1cblxuICAgIC8vINCi0LjQvNGH0LDRgdC+0LLQuNC5INC+0LEn0ZTQutGCINC3INC80LDQv9GW0L3Qs9C+0LwgZ2FtZS1pZCDQvdCwIFVSTFxuICAgIC8vIFRPRE86INCX0LDQvNGW0L3QuNGC0Lgg0L3QsCDQtNCw0L3RliDQtyDQsdC10LrQtdC90LTRg1xuICAgIC8vINCf0YDQuNC60LvQsNC0INGB0YLRgNGD0LrRgtGD0YDQuCDQtNCw0L3QuNGFINC3INCx0LXQutC10L3QtNGDOlxuICAgIC8vIHtcbiAgICAvLyAgICAgXCJ3ZWVrMV9nYW1lMVwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL2dhbWUtc2x1Zy0xXCIsXG4gICAgLy8gICAgIFwid2VlazFfZ2FtZTJcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9nYW1lLXNsdWctMlwiLFxuICAgIC8vICAgICAuLi5cbiAgICAvLyB9XG4gICAgLy8g0JTQu9GPINGW0L3RgtC10LPRgNCw0YbRltGXINC3INCx0LXQutC10L3QtNC+0Lw6IGNvbnN0IGdhbWVzTGlua3MgPSBhd2FpdCByZXF1ZXN0KCcvYXBpL2dhbWVzL2xpbmtzJyk7XG4gICAgY29uc3QgZ2FtZXNMaW5rcyA9IHtcbiAgICAgICAgLy8gV2VlayAxXG4gICAgICAgIFwid2VlazFfZ2FtZTFcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZTEvXCIsXG4gICAgICAgIFwid2VlazFfZ2FtZTJcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrMV9nYW1lM1wiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWsxX2dhbWU0XCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazFfZ2FtZTVcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrMV9nYW1lNlwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWsxX2dhbWU3XCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazFfZ2FtZThcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrMV9nYW1lOVwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWsxX2dhbWUxMFwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICAvLyBXZWVrIDJcbiAgICAgICAgXCJ3ZWVrMl9nYW1lMVwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWsyX2dhbWUyXCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazJfZ2FtZTNcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrMl9nYW1lNFwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWsyX2dhbWU1XCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazJfZ2FtZTZcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrMl9nYW1lN1wiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWsyX2dhbWU4XCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazJfZ2FtZTlcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrMl9nYW1lMTBcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgLy8gV2VlayAzXG4gICAgICAgIFwid2VlazNfZ2FtZTFcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrM19nYW1lMlwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWszX2dhbWUzXCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazNfZ2FtZTRcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrM19nYW1lNVwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWszX2dhbWU2XCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazNfZ2FtZTdcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrM19nYW1lOFwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWszX2dhbWU5XCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazNfZ2FtZTEwXCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIC8vIFdlZWsgNFxuICAgICAgICBcIndlZWs0X2dhbWUxXCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazRfZ2FtZTJcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrNF9nYW1lM1wiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWs0X2dhbWU0XCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazRfZ2FtZTVcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrNF9nYW1lNlwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWs0X2dhbWU3XCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazRfZ2FtZThcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrNF9nYW1lOVwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWs0X2dhbWUxMFwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiXG4gICAgfTtcblxuICAgIC8vINCS0YHRgtCw0L3QvtCy0LvQtdC90L3RjyDRg9C90ZbQutCw0LvRjNC90LjRhSDQv9C+0YHQuNC70LDQvdGMINC00LvRjyDQutC+0LbQvdC+0Zcg0LPRgNC4XG4gICAgZnVuY3Rpb24gc2V0R2FtZUxpbmtzKCkge1xuICAgICAgICBjb25zdCBnYW1lTGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2FtZXNfX2l0ZW0tbGlua1tkYXRhLWdhbWUtaWRdJyk7XG4gICAgICAgIFxuICAgICAgICBnYW1lTGlua3MuZm9yRWFjaChsaW5rID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGdhbWVJZCA9IGxpbmsuZ2V0QXR0cmlidXRlKCdkYXRhLWdhbWUtaWQnKTtcbiAgICAgICAgICAgIGlmIChnYW1lSWQgJiYgZ2FtZXNMaW5rc1tnYW1lSWRdKSB7XG4gICAgICAgICAgICAgICAgbGluay5ocmVmID0gZ2FtZXNMaW5rc1tnYW1lSWRdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyDQkNCy0YLQvtC80LDRgtC40YfQvdC1INC00L7QtNCw0LLQsNC90L3RjyBkYXRhLdCw0YLRgNC40LHRg9GC0ZbQsiDQtNC70Y8g0YLRgNC10LrRltC90LPRg1xuICAgIGZ1bmN0aW9uIGF1dG9BZGREYXRhQnV0dG9ucygpIHtcbiAgICAgICAgY29uc3QgZ2FtZUxpc3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdhbWVzX19saXN0Jyk7XG4gICAgICAgIFxuICAgICAgICBnYW1lTGlzdHMuZm9yRWFjaChsaXN0ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHdlZWtNYXRjaCA9IGxpc3QuY2xhc3NOYW1lLm1hdGNoKC9fd2VlayhcXGQrKS8pO1xuICAgICAgICAgICAgaWYgKCF3ZWVrTWF0Y2gpIHJldHVybjtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3Qgd2VlayA9IHdlZWtNYXRjaFsxXTtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1zID0gbGlzdC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2FtZXNfX2l0ZW0nKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBnYW1lTnVtYmVyID0gaW5kZXggKyAxO1xuICAgICAgICAgICAgICAgIGNvbnN0IGJ1dHRvbk5hbWUgPSBgd2VlayR7d2Vla31HYW1lJHtnYW1lTnVtYmVyfWA7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgbGlua0VsID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuZ2FtZXNfX2l0ZW0tbGluaycpO1xuICAgICAgICAgICAgICAgIGlmIChsaW5rRWwpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g0J7QvdC+0LLQu9GO0ZTQvNC+IGRhdGEtYnV0dG9uINGP0LrRidC+INGJ0LUg0L3QtSDQstGB0YLQsNC90L7QstC70LXQvdC+INCw0LHQviDQvdC10LrQvtGA0LXQutGC0L3QtVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50QnV0dG9uID0gbGlua0VsLmdldEF0dHJpYnV0ZSgnZGF0YS1idXR0b24nKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjdXJyZW50QnV0dG9uIHx8ICFjdXJyZW50QnV0dG9uLmluY2x1ZGVzKGB3ZWVrJHt3ZWVrfUdhbWVgKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlua0VsLnNldEF0dHJpYnV0ZSgnZGF0YS1idXR0b24nLCBidXR0b25OYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyDQktGB0YLQsNC90L7QstC70Y7RlNC80L4gZGF0YS1wcm9tbyDRj9C60YnQviDRidC1INC90LUg0LLRgdGC0LDQvdC+0LLQu9C10L3QvlxuICAgICAgICAgICAgICAgICAgICBpZiAoIWxpbmtFbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvbW8nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlua0VsLnNldEF0dHJpYnV0ZSgnZGF0YS1wcm9tbycsICdyYXppbmFfMjAyNl9ocicpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vINCS0LjQutC70LjQutCw0ZTQvNC+IGluaXRQYWdlSGVpZ2h0INC/0YDQuCDQt9Cw0LLQsNC90YLQsNC20LXQvdC90ZYg0YHRgtC+0YDRltC90LrQuFxuICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnbG9hZGluZycpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICAgICAgICAgIGluaXRQYWdlSGVpZ2h0KCk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIERPTSDQstC20LUg0LfQsNCy0LDQvdGC0LDQttC10L3QuNC5XG4gICAgICAgIGluaXRQYWdlSGVpZ2h0KCk7XG4gICAgfVxuXG4gICAgLy8g0JLQuNC60LvQuNC60LDRlNC80L4gaW5pdCgpINC00LvRjyDRltC90ZbRhtGW0LDQu9GW0LfQsNGG0ZbRlyDQstGB0ZbRhSDQutC+0LzQv9C+0L3QtdC90YLRltCyXG4gICAgaW5pdCgpO1xuXG59KSgpO1xuIl19
