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
              initProgressBar();
              initParticipateCanvas();
              initSnowflakesCanvas();
              setTimeout(hideLoader, 300);

              // // Fix dropdown scroll issue - prevent page from shifting up when opening dropdown
              // const dropdowns = document.querySelectorAll('.dropdown');
              // dropdowns.forEach((dropdown) => {
              //     dropdown.addEventListener('toggle', function(event) {
              //         if (this.open) {
              //             // Dropdown is opening
              //             const summary = this.querySelector('summary');
              //             if (summary) {
              //                 // Get summary position relative to viewport
              //                 const summaryRect = summary.getBoundingClientRect();
              //
              //                 // Check if summary is near the top of viewport (within 100px from top)
              //                 if (summaryRect.top < 100) {
              //                     // Calculate how much to scroll to keep summary visible
              //                     const currentScrollY = window.scrollY || window.pageYOffset;
              //                     const targetScrollY = currentScrollY + summaryRect.top - 120; // 120px offset from top
              //
              //                     // Use requestAnimationFrame for smooth scroll
              //                     requestAnimationFrame(() => {
              //                         window.scrollTo({
              //                             top: Math.max(0, targetScrollY),
              //                             behavior: 'smooth'
              //                         });
              //                     });
              //                 }
              //             }
              //         }
              //     });
              // });
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

    // Параметри анімації
    var currentProgress = 0; // Поточний прогрес (0-100)
    var targetProgress = 100; // Цільовий прогрес
    var animationDuration = 60000; // Тривалість анімації в мілісекундах
    var startTime = Date.now();
    var animationId = null;
    var maxSegments = 0;
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
      var progress = elapsed / animationDuration * 100;

      // Зациклення: якщо досягли 100%, починаємо знову з 0%
      if (progress >= targetProgress) {
        progress = 0;
        startTime = Date.now();
      }
      currentProgress = progress;

      // Оновлюємо відображення
      drawProgressBar(progress);

      // Оновлюємо відсотки (тільки цілі числа)
      var percent = Math.floor(progress);
      percentElement.textContent = percent + '%';

      // Продовжуємо анімацію безкінечно
      animationId = requestAnimationFrame(updateProgress);
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

    // Запускаємо анімацію з невеликою затримкою для коректного розрахунку розмірів
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        resizeCanvas();
        startTime = Date.now();
        updateProgress();
      });
    });

    // Зупиняємо анімацію при виході з viewport
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          if (!animationId) {
            // Відновлюємо анімацію з поточного прогресу
            startTime = Date.now() - currentProgress / 100 * animationDuration;
            updateProgress();
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
  function initParticipateCanvas() {
    var canvas = document.querySelector('#participateCanvas');
    if (!canvas) return;
    var ctx = canvas.getContext('2d');
    canvas.width = 1366;
    canvas.height = 545;

    // Константи для розмірів та позицій
    var CANVAS_WIDTH = 1366;
    var CANVAS_HEIGHT = 545;
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

    // Розміри оленя на canvas (можна масштабувати)
    var DEER_SCALE = 0.5; // Масштаб для відображення на canvas
    var DEER_WIDTH = Math.floor(FRAME_WIDTH * DEER_SCALE); // ~110px
    var DEER_HEIGHT = Math.floor(FRAME_HEIGHT * DEER_SCALE); // 117px

    // Позиції елементів
    var treeX = CANVAS_WIDTH / 2 - 190; // Трохи лівіше від центру
    var treeY = CANVAS_HEIGHT / 2 - TREE_HEIGHT / 2;

    // Параметри анімації (спільні для всіх оленів)
    var FRAME_DELAY = 12; // Затримка між кадрами
    var WALKING_FRAMES = 5; // Кількість кадрів для ходьби
    var FRAME_REPEAT = 2; // Кількість разів показувати кожен кадр
    var IDLE_MIN_DURATION = 60; // Мінімальна тривалість зупинки (1 секунда при 60fps)
    var IDLE_MAX_DURATION = 180; // Максимальна тривалість зупинки (3 секунди при 60fps)

    // Стани анімації оленя
    var DEER_STATE = {
      WALKING: 'walking',
      IDLE: 'idle'
    };
    var animationId = null;
    var frameCounter = 0; // Глобальний лічильник кадрів для синхронізації

    // Клас для представлення одного оленя
    var Deer = /*#__PURE__*/function () {
      function Deer(startX, startY, minX, maxX) {
        var speed = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0.5;
        var zIndex = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
        _classCallCheck(this, Deer);
        this.x = startX;
        this.y = startY;
        this.minX = minX;
        this.maxX = maxX;
        this.speed = speed;
        this.zIndex = zIndex; // Порядок малювання (менше = ззаду, більше = спереду)
        this.direction = -1; // -1 = вліво, 1 = вправо
        this.state = DEER_STATE.WALKING;
        this.frameIndex = 0;
        this.frameRepeatCounter = 0;
        this.idleTimer = 0;
        this.idleDuration = 0;
      }
      _createClass(Deer, [{
        key: "getSpriteFrameIndex",
        value: function getSpriteFrameIndex() {
          // Верхній рядок (0) = рух вліво, нижній рядок (1) = рух вправо
          var row = this.direction === -1 ? 0 : 1;
          var col = 0;
          if (this.state === DEER_STATE.WALKING) {
            // Кадри ходьби: 0, 1, 2, 3, 4 (всі 5 кадрів)
            col = this.frameIndex % WALKING_FRAMES;
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
          if (this.state === DEER_STATE.WALKING) {
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

          // Координати кадру в спрайт-листі
          var sourceX = col * frameWidth;
          var sourceY = row * frameHeight;

          // Вирізаємо кадр зі спрайт-листа та малюємо на canvas
          ctx.drawImage(spriteImage, sourceX, sourceY, frameWidth, frameHeight,
          // Джерело (спрайт-лист)
          this.x, this.y, deerWidth, deerHeight // Призначення (canvas)
          );
        }
      }]);
      return Deer;
    }(); // Масив оленів (можна додати більше)
    var deers = [];

    // Конфігурація для створення оленів
    var DEER_COUNT = 3; // Кількість оленів
    var deerConfigs = [{
      startX: CANVAS_WIDTH / 2 + 50,
      startY: treeY + TREE_HEIGHT - 20,
      minX: CANVAS_WIDTH / 2 - 200,
      maxX: CANVAS_WIDTH / 2 + 300,
      speed: 0.5,
      zIndex: 4
    }, {
      startX: CANVAS_WIDTH / 2 - 100,
      startY: CANVAS_HEIGHT / 2 - DEER_HEIGHT / 2 + 50,
      minX: CANVAS_WIDTH / 2 - 150,
      maxX: CANVAS_WIDTH / 2 + 150,
      speed: 0.3,
      zIndex: 3
    }, {
      startX: CANVAS_WIDTH / 2 - 100,
      startY: CANVAS_HEIGHT / 2 - DEER_HEIGHT / 2 - 50,
      minX: CANVAS_WIDTH / 2 - 250,
      maxX: CANVAS_WIDTH / 2 + 250,
      speed: 0.4,
      zIndex: 1
    }];

    // Створюємо оленів
    for (var i = 0; i < DEER_COUNT && i < deerConfigs.length; i++) {
      var config = deerConfigs[i];
      deers.push(new Deer(config.startX, config.startY, config.minX, config.maxX, config.speed, config.zIndex || 0 // Використовуємо zIndex з конфігу або 0 за замовчуванням
      ));
    }

    // Завантаження зображень
    var images = {
      background: new Image(),
      tree: new Image(),
      deerSprite: new Image()
    };
    var imagesLoaded = 0;
    var totalImages = 3;
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
    images.background.src = 'img/participate/canvas-bg.png';
    images.tree.src = 'img/participate/tree.png';
    images.deerSprite.src = 'img/participate/deer-sprite.png';
    function drawCanvas() {
      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      if (images.background.complete) {
        ctx.drawImage(images.background, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      }
      var TREE_Z_INDEX = 2;
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
  }
  function initSnowflakesCanvas() {
    var canvas = document.querySelector('#snowflakesCanvas');
    if (!canvas) return;
    var ctx = canvas.getContext('2d');
    var favPage = document.querySelector('.sticky-wrap');

    // Константи
    var SNOWFLAKE_COUNT = 100;
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
        console.log(newHeight);
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
          // Якщо сторінка ще в стані loading, чекаємо поки loader приховається
          // hideLoader викликається через 300ms після quickCheckAndRender
          setTimeout(function () {
            requestAnimationFrame(function () {
              resizeCanvas();
              requestAnimationFrame(function () {
                resizeCanvas();
                // Додаткова перевірка після ще одного кадру
                requestAnimationFrame(function () {
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
          requestAnimationFrame(function () {
            resizeCanvas();
            requestAnimationFrame(function () {
              resizeCanvas();
              requestAnimationFrame(function () {
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
    var Snowflake = /*#__PURE__*/function () {
      function Snowflake() {
        _classCallCheck(this, Snowflake);
        this.x = Math.random() * (canvas.width || window.innerWidth);
        this.y = -20;
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
      if (snowflakes.length < SNOWFLAKE_COUNT) {
        snowflakes.push(new Snowflake());
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwibWFpblBhZ2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJsb2FkZXIiLCJyZXN1bHRzVGFibGUiLCJyZXN1bHRzVGFibGVPdGhlciIsImhyTGVuZyIsImVuTGVuZyIsImxvY2FsZSIsImRlYnVnIiwiaGlkZUxvYWRlciIsImkxOG5EYXRhIiwidHJhbnNsYXRlU3RhdGUiLCJ1c2VySWQiLCJyZXF1ZXN0IiwibGluayIsImV4dHJhT3B0aW9ucyIsImZldGNoIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJvayIsIkVycm9yIiwianNvbiIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsInJlcG9ydEVycm9yIiwic3R5bGUiLCJkaXNwbGF5Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwic3RhcnRzV2l0aCIsIlByb21pc2UiLCJyZWplY3QiLCJjbGFzc0xpc3QiLCJhZGQiLCJib2R5Iiwib3ZlcmZsb3ciLCJyZW1vdmUiLCJpbml0IiwidHJ5RGV0ZWN0VXNlcklkIiwicXVpY2tDaGVja0FuZFJlbmRlciIsImluaXRJbmZpbml0ZVNjcm9sbCIsImluaXRQcm9ncmVzc0JhciIsImluaXRQYXJ0aWNpcGF0ZUNhbnZhcyIsImluaXRTbm93Zmxha2VzQ2FudmFzIiwic2V0VGltZW91dCIsInN0b3JlIiwic3RhdGUiLCJnZXRTdGF0ZSIsImF1dGgiLCJpc0F1dGhvcml6ZWQiLCJpZCIsImdfdXNlcl9pZCIsImF0dGVtcHRzIiwibWF4QXR0ZW1wdHMiLCJhdHRlbXB0SW50ZXJ2YWwiLCJ3YWl0Rm9yVXNlcklkIiwicmVzb2x2ZSIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwibG9hZFRyYW5zbGF0aW9ucyIsInRyYW5zbGF0ZSIsInJlcG9ydERhdGEiLCJvcmlnaW4iLCJ1c2VyaWQiLCJlcnJvclRleHQiLCJ0ZXh0IiwibWVzc2FnZSIsInR5cGUiLCJuYW1lIiwic3RhY2siLCJtZXRob2QiLCJKU09OIiwic3RyaW5naWZ5Iiwid2FybiIsImVsZW1zIiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsImZvckVhY2giLCJlbGVtIiwia2V5IiwiZ2V0QXR0cmlidXRlIiwiaW5uZXJIVE1MIiwicmVtb3ZlQXR0cmlidXRlIiwibG9nIiwicmVmcmVzaExvY2FsaXplZENsYXNzIiwiZWxlbWVudCIsImxhbmciLCJyZW5kZXJVc2VycyIsIndlZWtOdW0iLCJ1c2VyRGF0YSIsIk51bWJlciIsIndlZWtPYmoiLCJmaW5kIiwidyIsIndlZWsiLCJkYXRhIiwiQXJyYXkiLCJpc0FycmF5IiwidXNlcnMiLCJpc1N0YWdlRW5kZWQiLCJ3aW5uZXJBZGRpdGlvbmFsUHJpemUiLCJ1Iiwid2lubmVyIiwiY3VycmVudFVzZXIiLCJ1c2VyIiwiaXNWZXJpZmllZFVzZXIiLCJwb2ludHMiLCJwb3B1bGF0ZVVzZXJzVGFibGUiLCJjdXJyZW50VXNlcklkIiwic2Vjb25kVGFibGVPdGhlciIsInNlY29uZFRhYmxlIiwiaXNUb3BDdXJyZW50VXNlciIsInNsaWNlIiwic29tZSIsInRvcFVzZXJzTGVuZ3RoIiwidG9wVXNlcnMiLCJkaXNwbGF5VXNlciIsImlzQ3VycmVudFVzZXIiLCJ0YWJsZSIsInJlbmRlclJvdyIsIm9wdGlvbnMiLCJoaWdobGlnaHQiLCJuZWlnaGJvciIsInVzZXJSb3ciLCJjcmVhdGVFbGVtZW50IiwidXNlclBsYWNlIiwiaW5kZXhPZiIsInByaXplS2V5IiwiZ2V0UHJpemVUcmFuc2xhdGlvbktleSIsInRyYW5zbGF0ZUtleSIsIm1hc2tVc2VySWQiLCJ0b0ZpeGVkIiwiYXBwZW5kIiwiaW5kZXgiLCJjYW52YXMiLCJwZXJjZW50RWxlbWVudCIsImN0eCIsImdldENvbnRleHQiLCJiYXJIZWlnaHQiLCJzZWdtZW50V2lkdGgiLCJzZWdtZW50SGVpZ2h0Iiwic2VnbWVudEdhcCIsInBhZGRpbmciLCJzZWdtZW50UmFkaXVzIiwiY3VycmVudFByb2dyZXNzIiwidGFyZ2V0UHJvZ3Jlc3MiLCJhbmltYXRpb25EdXJhdGlvbiIsInN0YXJ0VGltZSIsIkRhdGUiLCJub3ciLCJhbmltYXRpb25JZCIsIm1heFNlZ21lbnRzIiwicmVzaXplQ2FudmFzIiwiY29udGFpbmVyIiwicGFyZW50RWxlbWVudCIsImNvbnRhaW5lcldpZHRoIiwib2Zmc2V0V2lkdGgiLCJ3aWR0aCIsImhlaWdodCIsImF2YWlsYWJsZVdpZHRoIiwic2VnbWVudFdpdGhHYXAiLCJNYXRoIiwiZmxvb3IiLCJkcmF3UHJvZ3Jlc3NCYXIiLCJwcm9ncmVzcyIsImNsZWFyUmVjdCIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwic3Ryb2tlUmVjdCIsImZpbGxlZFNlZ21lbnRzIiwiZmlsbFN0eWxlIiwiY2VudGVyWSIsImkiLCJ4IiwieSIsImJlZ2luUGF0aCIsInJvdW5kUmVjdCIsInIiLCJtb3ZlVG8iLCJsaW5lVG8iLCJxdWFkcmF0aWNDdXJ2ZVRvIiwiY2xvc2VQYXRoIiwiZmlsbCIsInVwZGF0ZVByb2dyZXNzIiwiZWxhcHNlZCIsInBlcmNlbnQiLCJ0ZXh0Q29udGVudCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInJlc2l6ZVRpbWVvdXQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xlYXJUaW1lb3V0Iiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJvYnNlcnZlIiwiQ0FOVkFTX1dJRFRIIiwiQ0FOVkFTX0hFSUdIVCIsIlRSRUVfV0lEVEgiLCJUUkVFX0hFSUdIVCIsIkZSQU1FU19QRVJfUk9XIiwiVE9UQUxfUk9XUyIsIlNQUklURV9TSEVFVF9XSURUSCIsIlNQUklURV9TSEVFVF9IRUlHSFQiLCJGUkFNRV9XSURUSCIsIkZSQU1FX0hFSUdIVCIsIkRFRVJfU0NBTEUiLCJERUVSX1dJRFRIIiwiREVFUl9IRUlHSFQiLCJ0cmVlWCIsInRyZWVZIiwiRlJBTUVfREVMQVkiLCJXQUxLSU5HX0ZSQU1FUyIsIkZSQU1FX1JFUEVBVCIsIklETEVfTUlOX0RVUkFUSU9OIiwiSURMRV9NQVhfRFVSQVRJT04iLCJERUVSX1NUQVRFIiwiV0FMS0lORyIsIklETEUiLCJmcmFtZUNvdW50ZXIiLCJEZWVyIiwic3RhcnRYIiwic3RhcnRZIiwibWluWCIsIm1heFgiLCJzcGVlZCIsInpJbmRleCIsImRpcmVjdGlvbiIsImZyYW1lSW5kZXgiLCJmcmFtZVJlcGVhdENvdW50ZXIiLCJpZGxlVGltZXIiLCJpZGxlRHVyYXRpb24iLCJyb3ciLCJjb2wiLCJzaG91bGRVcGRhdGVGcmFtZSIsInJhbmRvbSIsInNwcml0ZUltYWdlIiwiZnJhbWVXaWR0aCIsImZyYW1lSGVpZ2h0IiwiZGVlcldpZHRoIiwiZGVlckhlaWdodCIsImNvbXBsZXRlIiwiZ2V0U3ByaXRlRnJhbWVJbmRleCIsInNvdXJjZVgiLCJzb3VyY2VZIiwiZHJhd0ltYWdlIiwiZGVlcnMiLCJERUVSX0NPVU5UIiwiZGVlckNvbmZpZ3MiLCJjb25maWciLCJwdXNoIiwiaW1hZ2VzIiwiYmFja2dyb3VuZCIsIkltYWdlIiwidHJlZSIsImRlZXJTcHJpdGUiLCJpbWFnZXNMb2FkZWQiLCJ0b3RhbEltYWdlcyIsIm9uSW1hZ2VMb2FkIiwiZHJhd0NhbnZhcyIsInN0YXJ0QW5pbWF0aW9uIiwib25sb2FkIiwic3JjIiwiVFJFRV9aX0lOREVYIiwiZHJhd2FibGVFbGVtZW50cyIsImRlZXIiLCJkcmF3Iiwic29ydCIsImEiLCJiIiwiYW5pbWF0ZSIsInVwZGF0ZSIsImZhdlBhZ2UiLCJTTk9XRkxBS0VfQ09VTlQiLCJTTk9XRkxBS0VfTUlOX1NJWkUiLCJTTk9XRkxBS0VfTUFYX1NJWkUiLCJTTk9XRkxBS0VfTUlOX1NQRUVEIiwiU05PV0ZMQUtFX01BWF9TUEVFRCIsIlNOT1dGTEFLRV9XSU5EX1JBTkdFIiwiU05PV0ZMQUtFX1NQQVdOX0lOVEVSVkFMIiwic25vd2ZsYWtlcyIsImxhc3RTbm93Zmxha2VUaW1lIiwibmV3V2lkdGgiLCJuZXdIZWlnaHQiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaW5uZXJXaWR0aCIsIm9mZnNldEhlaWdodCIsImNsaWVudEhlaWdodCIsInNjcm9sbEhlaWdodCIsIm1heCIsImlubmVySGVpZ2h0Iiwic25vd2ZsYWtlSW1hZ2UiLCJpbWFnZUxvYWRlZCIsIndhaXRGb3JQYWdlUmVhZHkiLCJpc1BhZ2VMb2FkaW5nIiwiY29udGFpbnMiLCJTbm93Zmxha2UiLCJzaXplIiwid2luZCIsIm9wYWNpdHkiLCJyb3RhdGlvbiIsIlBJIiwicm90YXRpb25TcGVlZCIsInNpbiIsInNhdmUiLCJnbG9iYWxBbHBoYSIsInJvdGF0ZSIsInJlc3RvcmUiLCJjcmVhdGVTbm93Zmxha2UiLCJ1cGRhdGVTbm93Zmxha2VzIiwiaXNPZmZTY3JlZW4iLCJzcGxpY2UiLCJkcmF3U25vd2ZsYWtlcyIsInNub3dmbGFrZSIsInNjcm9sbEJsb2NrcyIsInNjcm9sbEJsb2NrIiwic2Nyb2xsQ29udGVudCIsInNjcm9sbFRleHQiLCJ0cmltIiwicGFkZGluZ1JpZ2h0IiwiZml4ZWRXaWR0aCIsImVsZW1lbnRzIiwiaXRlbUNvdW50IiwiY3VycmVudFdpZHRoIiwidGVtcEVsZW1lbnQiLCJjbGFzc05hbWUiLCJ2aXNpYmlsaXR5IiwicG9zaXRpb24iLCJ3aGl0ZVNwYWNlIiwiYXBwZW5kQ2hpbGQiLCJpdGVtV2lkdGgiLCJyZW1vdmVDaGlsZCIsIm1heEl0ZXJhdGlvbnMiLCJjZWlsIiwiaXRlcmF0aW9ucyIsInRleHRFbGVtZW50IiwiY29udGVudFdpZHRoIiwiY2xvbmVkRWxlbWVudCIsImNsb25lTm9kZSIsInRyYW5zZm9ybSIsImNvbXB1dGVkU3R5bGUiLCJnZXRDb21wdXRlZFN0eWxlIiwiaXNWaXNpYmxlIl0sIm1hcHBpbmdzIjoiOzs7K0NBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBLENBQUMsWUFBWTtFQUVULElBQU1B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QUFJLENBQUNTLFlBQVksRUFBRTtVQUMzQlQsUUFBUSxHQUFHQSxRQUFRLEdBQUdTLFlBQVk7UUFDdEM7UUFFQXBCLGFBQWEsQ0FBQ3hTLEtBQUssQ0FBQytULFNBQVMsd0JBQWlCWixRQUFRLFFBQUs7UUFDM0RwTCxXQUFXLEdBQUdxQyxxQkFBcUIsQ0FBQ3FGLE9BQU8sQ0FBQztNQUNoRDs7TUFFQTtNQUNBckYscUJBQXFCLENBQUMsWUFBTTtRQUN4QjtRQUNBLElBQU00SixhQUFhLEdBQUc5VCxNQUFNLENBQUMrVCxnQkFBZ0IsQ0FBQzFCLFdBQVcsQ0FBQztRQUMxRCxJQUFNMkIsU0FBUyxHQUFHRixhQUFhLENBQUMvVCxPQUFPLEtBQUssTUFBTSxJQUNqQytULGFBQWEsQ0FBQ2QsVUFBVSxLQUFLLFFBQVE7UUFFdEQsSUFBSWdCLFNBQVMsSUFBSU4sWUFBWSxHQUFHLENBQUMsRUFBRTtVQUMvQm5FLE9BQU8sRUFBRTtRQUNiLENBQUMsTUFBTTtVQUNIO1VBQ0E7VUFDQUEsT0FBTyxFQUFFO1FBQ2I7TUFDSixDQUFDLENBQUM7SUFDTixDQUFDLENBQUM7RUFDTjtFQUVBck4sZ0JBQWdCLEVBQUUsQ0FDYjdDLElBQUksQ0FBQ3NCLElBQUksQ0FBQyxFQUFDOztFQU1oQjtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7QUFHSixDQUFDLEdBQUciLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XG5cbiAgICBjb25zdCBhcGlVUkwgPSAnaHR0cHM6Ly9mYXYtcHJvbS5jb20vYXBpX2JsYWNrX3ByaXplJ1xuXG4gICAgY29uc3QgbWFpblBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhdi1wYWdlXCIpLFxuICAgICAgICBsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNwaW5uZXItb3ZlcmxheVwiKSxcbiAgICAgICAgcmVzdWx0c1RhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YWJsZVwiKSxcbiAgICAgICAgcmVzdWx0c1RhYmxlT3RoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RhYmxlT3RoZXJcIilcblxuICAgIGNvbnN0IGhyTGVuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNockxlbmcnKTtcbiAgICBjb25zdCBlbkxlbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW5MZW5nJyk7XG5cbiAgICBsZXQgbG9jYWxlID0gXCJoclwiXG4gICAgLy8gbGV0IGxvY2FsZSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJsb2NhbGVcIikgfHwgXCJoclwiXG5cbiAgICBpZiAoaHJMZW5nKSBsb2NhbGUgPSAnaHInO1xuICAgIGlmIChlbkxlbmcpIGxvY2FsZSA9ICdlbic7XG5cbiAgICBsZXQgZGVidWcgPSBmYWxzZVxuXG4gICAgaWYgKGRlYnVnKSBoaWRlTG9hZGVyKClcblxuICAgIGxldCBpMThuRGF0YSA9IHt9O1xuICAgIGNvbnN0IHRyYW5zbGF0ZVN0YXRlID0gZmFsc2U7XG4gICAgbGV0IHVzZXJJZCA9IG51bGw7XG4gICAgLy8gbGV0IHVzZXJJZCA9IE51bWJlcihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpKSA/PyBudWxsXG5cbiAgICBjb25zdCByZXF1ZXN0ID0gZnVuY3Rpb24gKGxpbmssIGV4dHJhT3B0aW9ucykge1xuICAgICAgICByZXR1cm4gZmV0Y2goYXBpVVJMICsgbGluaywge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC4uLihleHRyYU9wdGlvbnMgfHwge30pXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghcmVzLm9rKSB0aHJvdyBuZXcgRXJyb3IoJ0FQSSBlcnJvcicpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0FQSSByZXF1ZXN0IGZhaWxlZDonLCBlcnIpO1xuXG4gICAgICAgICAgICAgICAgcmVwb3J0RXJyb3IoZXJyKTtcblxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXYtcGFnZScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLnN0YXJ0c1dpdGgoXCJodHRwczovL3d3dy5mYXZiZXQuaHIvXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9wcm9tb2NpamUvcHJvbW9jaWphL3N0dWIvJztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvcHJvbW9zL3Byb21vL3N0dWIvJztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlkZUxvYWRlcigpe1xuICAgICAgICBsb2FkZXIuY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiXG4gICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5yZW1vdmUoXCJsb2FkaW5nXCIpXG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgbGV0IGF0dGVtcHRzID0gMDtcbiAgICAgICAgY29uc3QgbWF4QXR0ZW1wdHMgPSAyMDtcbiAgICAgICAgY29uc3QgYXR0ZW1wdEludGVydmFsID0gNTA7XG5cbiAgICAgICAgZnVuY3Rpb24gdHJ5RGV0ZWN0VXNlcklkKCkge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5zdG9yZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gd2luZG93LnN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgICAgICAgICAgdXNlcklkID0gc3RhdGUuYXV0aC5pc0F1dGhvcml6ZWQgJiYgc3RhdGUuYXV0aC5pZCB8fCAnJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAod2luZG93LmdfdXNlcl9pZCkge1xuICAgICAgICAgICAgICAgIHVzZXJJZCA9IHdpbmRvdy5nX3VzZXJfaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBxdWlja0NoZWNrQW5kUmVuZGVyKCkge1xuICAgICAgICAgICAgaW5pdEluZmluaXRlU2Nyb2xsKCk7XG4gICAgICAgICAgICBpbml0UHJvZ3Jlc3NCYXIoKTtcbiAgICAgICAgICAgIGluaXRQYXJ0aWNpcGF0ZUNhbnZhcygpO1xuICAgICAgICAgICAgaW5pdFNub3dmbGFrZXNDYW52YXMoKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoaGlkZUxvYWRlciwgMzAwKTtcblxuICAgICAgICAgICAgLy8gLy8gRml4IGRyb3Bkb3duIHNjcm9sbCBpc3N1ZSAtIHByZXZlbnQgcGFnZSBmcm9tIHNoaWZ0aW5nIHVwIHdoZW4gb3BlbmluZyBkcm9wZG93blxuICAgICAgICAgICAgLy8gY29uc3QgZHJvcGRvd25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRyb3Bkb3duJyk7XG4gICAgICAgICAgICAvLyBkcm9wZG93bnMuZm9yRWFjaCgoZHJvcGRvd24pID0+IHtcbiAgICAgICAgICAgIC8vICAgICBkcm9wZG93bi5hZGRFdmVudExpc3RlbmVyKCd0b2dnbGUnLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgLy8gICAgICAgICBpZiAodGhpcy5vcGVuKSB7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAvLyBEcm9wZG93biBpcyBvcGVuaW5nXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBjb25zdCBzdW1tYXJ5ID0gdGhpcy5xdWVyeVNlbGVjdG9yKCdzdW1tYXJ5Jyk7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBpZiAoc3VtbWFyeSkge1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIC8vIEdldCBzdW1tYXJ5IHBvc2l0aW9uIHJlbGF0aXZlIHRvIHZpZXdwb3J0XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgY29uc3Qgc3VtbWFyeVJlY3QgPSBzdW1tYXJ5LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiBzdW1tYXJ5IGlzIG5lYXIgdGhlIHRvcCBvZiB2aWV3cG9ydCAod2l0aGluIDEwMHB4IGZyb20gdG9wKVxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIGlmIChzdW1tYXJ5UmVjdC50b3AgPCAxMDApIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIGhvdyBtdWNoIHRvIHNjcm9sbCB0byBrZWVwIHN1bW1hcnkgdmlzaWJsZVxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50U2Nyb2xsWSA9IHdpbmRvdy5zY3JvbGxZIHx8IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0U2Nyb2xsWSA9IGN1cnJlbnRTY3JvbGxZICsgc3VtbWFyeVJlY3QudG9wIC0gMTIwOyAvLyAxMjBweCBvZmZzZXQgZnJvbSB0b3BcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIC8vIFVzZSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgZm9yIHNtb290aCBzY3JvbGxcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiBNYXRoLm1heCgwLCB0YXJnZXRTY3JvbGxZKSxcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgICAgIC8vIH0pO1xuXG5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHdhaXRGb3JVc2VySWQgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdHJ5RGV0ZWN0VXNlcklkKCk7XG4gICAgICAgICAgICAgICAgaWYgKHVzZXJJZCB8fCBhdHRlbXB0cyA+PSBtYXhBdHRlbXB0cykge1xuICAgICAgICAgICAgICAgICAgICBxdWlja0NoZWNrQW5kUmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGF0dGVtcHRzKys7XG4gICAgICAgICAgICB9LCBhdHRlbXB0SW50ZXJ2YWwpO1xuICAgICAgICB9KTtcblxuICAgICAgICBhd2FpdCB3YWl0Rm9yVXNlcklkO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvYWRUcmFuc2xhdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiByZXF1ZXN0KGAvbmV3LXRyYW5zbGF0ZXMvJHtsb2NhbGV9YClcbiAgICAgICAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgICAgIGkxOG5EYXRhID0ganNvbjtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGUoKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBtdXRhdGlvbk9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKG11dGF0aW9ucykge1xuICAgICAgICAgICAgICAgIC8vICAgICBtdXRhdGlvbk9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgdHJhbnNsYXRlKCk7XG4gICAgICAgICAgICAgICAgLy8gICAgIG11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXROb2RlLCB7IGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgICAgICAgICAvLyBtdXRhdGlvbk9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoYXJkY29yZVRlbm5pc1wiKSwge1xuICAgICAgICAgICAgICAgIC8vICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgLy8gICAgIHN1YnRyZWU6IHRydWVcbiAgICAgICAgICAgICAgICAvLyB9KTtcblxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVwb3J0RXJyb3IoZXJyKSB7XG4gICAgICAgIGNvbnN0IHJlcG9ydERhdGEgPSB7XG4gICAgICAgICAgICBvcmlnaW46IHdpbmRvdy5sb2NhdGlvbi5ocmVmLFxuICAgICAgICAgICAgdXNlcmlkOiB1c2VySWQsXG4gICAgICAgICAgICBlcnJvclRleHQ6IGVycj8uZXJyb3IgfHwgZXJyPy50ZXh0IHx8IGVycj8ubWVzc2FnZSB8fCAnVW5rbm93biBlcnJvcicsXG4gICAgICAgICAgICB0eXBlOiBlcnI/Lm5hbWUgfHwgJ1Vua25vd25FcnJvcicsXG4gICAgICAgICAgICBzdGFjazogZXJyPy5zdGFjayB8fCAnJ1xuICAgICAgICB9O1xuXG4gICAgICAgIGZldGNoKCdodHRwczovL2Zhdi1wcm9tLmNvbS9hcGktY21zL3JlcG9ydHMvYWRkJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcG9ydERhdGEpXG4gICAgICAgIH0pLmNhdGNoKGNvbnNvbGUud2Fybik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdHJhbnNsYXRlKCkge1xuICAgICAgICBjb25zdCBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRyYW5zbGF0ZV0nKVxuICAgICAgICBpZiAoZWxlbXMgJiYgZWxlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZih0cmFuc2xhdGVTdGF0ZSl7XG4gICAgICAgICAgICAgICAgZWxlbXMuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gZWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgICAgICAgICAgICAgICAgIGVsZW0uaW5uZXJIVE1MID0gaTE4bkRhdGFba2V5XSB8fCAnKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiAgIGtleTogICcgKyBrZXk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpMThuRGF0YVtrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRyYW5zbGF0aW9uIHdvcmtzIVwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChsb2NhbGUgPT09ICdlbicpIHtcbiAgICAgICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5hZGQoJ2VuJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmVmcmVzaExvY2FsaXplZENsYXNzKG1haW5QYWdlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWZyZXNoTG9jYWxpemVkQ2xhc3MoZWxlbWVudCkge1xuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IGxhbmcgb2YgWydocicsICdlbiddKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUobGFuZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGxvY2FsZSk7XG4gICAgfVxuXG5cblxuXG4gICAgZnVuY3Rpb24gcmVuZGVyVXNlcnMod2Vla051bSwgdXNlckRhdGEgPSBbXSkge1xuICAgICAgICB3ZWVrTnVtID0gTnVtYmVyKHdlZWtOdW0pO1xuICAgICAgICBjb25zdCB3ZWVrT2JqID0gdXNlckRhdGEuZmluZCh3ID0+IHcud2VlayA9PT0gd2Vla051bSk7XG4gICAgICAgIGlmICghd2Vla09iaiB8fCAhd2Vla09iai5kYXRhIHx8ICFBcnJheS5pc0FycmF5KHdlZWtPYmouZGF0YS51c2VycykpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ9Cd0LXQstGW0YDQvdCwINGB0YLRgNGD0LrRgtGD0YDQsCDQtNCw0L3QuNGFJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpc1N0YWdlRW5kZWQgPSB3ZWVrT2JqLmRhdGEuaXNTdGFnZUVuZGVkXG5cbiAgICAgICAgdXNlckRhdGEgPSB3ZWVrT2JqLmRhdGEudXNlcnM7XG5cbiAgICAgICAgY29uc3Qgd2lubmVyQWRkaXRpb25hbFByaXplID0gdXNlckRhdGEuZmluZCh1ID0+IHtcbiAgICAgICAgICAgIGlmKHUud2lubmVyID09PSB0cnVlKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRVc2VyID0gdXNlckRhdGEuZmluZCh1c2VyID0+IHVzZXIudXNlcmlkID09PSB1c2VySWQpO1xuXG4gICAgICAgIGlmKHVzZXJJZCAmJiAhY3VycmVudFVzZXIgJiYgaXNWZXJpZmllZFVzZXIpe1xuICAgICAgICAgICAgdXNlckRhdGEgPSBbLi4udXNlckRhdGEsIHt1c2VyaWQ6IHVzZXJJZCwgcG9pbnRzOiAwfV1cbiAgICAgICAgfVxuICAgICAgICBwb3B1bGF0ZVVzZXJzVGFibGUodXNlckRhdGEsIHVzZXJJZCwgd2Vla051bSwgY3VycmVudFVzZXIsIGlzVmVyaWZpZWRVc2VyLCBpc1N0YWdlRW5kZWQsIHdpbm5lckFkZGl0aW9uYWxQcml6ZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcG9wdWxhdGVVc2Vyc1RhYmxlKHVzZXJzLCBjdXJyZW50VXNlcklkLCB3ZWVrLCBjdXJyZW50VXNlciwgaXNWZXJpZmllZFVzZXIsIGlzU3RhZ2VFbmRlZCwgd2lubmVyQWRkaXRpb25hbFByaXplKSB7XG4gICAgICAgIGlmICghdXNlcnM/Lmxlbmd0aCkgcmV0dXJuO1xuICAgICAgICByZXN1bHRzVGFibGUuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHJlc3VsdHNUYWJsZU90aGVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBzZWNvbmRUYWJsZU90aGVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBzZWNvbmRUYWJsZS5pbm5lckhUTUwgPSAnJztcblxuXG4gICAgICAgIGNvbnN0IGlzVG9wQ3VycmVudFVzZXIgPSBjdXJyZW50VXNlciAmJiB1c2Vycy5zbGljZSgwLCAxMCkuc29tZSh1c2VyID0+IHVzZXIudXNlcmlkID09PSBjdXJyZW50VXNlcklkKTtcblxuICAgICAgICBjb25zdCB0b3BVc2Vyc0xlbmd0aCA9ICF1c2VySWQgfHwgaXNUb3BDdXJyZW50VXNlciAgPyAxMCA6IDEwO1xuXG4gICAgICAgIGNvbnN0IHRvcFVzZXJzID0gdXNlcnMuc2xpY2UoMCwgdG9wVXNlcnNMZW5ndGgpO1xuXG4gICAgICAgIHRvcFVzZXJzLmZvckVhY2godXNlciA9PiB7XG4gICAgICAgICAgICBkaXNwbGF5VXNlcih1c2VyLCB1c2VyLnVzZXJpZCA9PT0gY3VycmVudFVzZXJJZCwgcmVzdWx0c1RhYmxlLCB0b3BVc2VycywgaXNUb3BDdXJyZW50VXNlciwgd2Vlayk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZihpc1ZlcmlmaWVkVXNlciAmJiAhY3VycmVudFVzZXIpIHtcbiAgICAgICAgICAgIGRpc3BsYXlVc2VyKGN1cnJlbnRVc2VyLCB0cnVlLCByZXN1bHRzVGFibGVPdGhlciwgdXNlcnMsIGZhbHNlLCB3ZWVrKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaXNUb3BDdXJyZW50VXNlciAmJiBjdXJyZW50VXNlcikge1xuICAgICAgICAgICAgZGlzcGxheVVzZXIoY3VycmVudFVzZXIsIHRydWUsIHJlc3VsdHNUYWJsZU90aGVyLCB1c2VycywgZmFsc2UsIHdlZWspO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzcGxheVVzZXIodXNlciwgaXNDdXJyZW50VXNlciwgdGFibGUsIHVzZXJzLCBpc1RvcEN1cnJlbnRVc2VyLCB3ZWVrKSB7XG5cbiAgICAgICAgY29uc3QgcmVuZGVyUm93ID0gKHVzZXJEYXRhLCBvcHRpb25zID0ge30pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgaGlnaGxpZ2h0ID0gZmFsc2UsIG5laWdoYm9yID0gZmFsc2UgfSA9IG9wdGlvbnM7XG4gICAgICAgICAgICBjb25zdCB1c2VyUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoJ3RhYmxlX19yb3cnKTtcblxuICAgICAgICAgICAgY29uc3QgdXNlclBsYWNlID0gdXNlcnMuaW5kZXhPZih1c2VyRGF0YSkgKyAxO1xuICAgICAgICAgICAgY29uc3QgcHJpemVLZXkgPSBkZWJ1ZyA/IG51bGwgOiBnZXRQcml6ZVRyYW5zbGF0aW9uS2V5KHVzZXJQbGFjZSwgd2Vlayk7XG5cbiAgICAgICAgICAgIGlmICh1c2VyUGxhY2UgPD0gMykge1xuICAgICAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZChgcGxhY2Uke3VzZXJQbGFjZX1gKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGhpZ2hsaWdodCB8fCBpc0N1cnJlbnRVc2VyICYmICFuZWlnaGJvcikge1xuICAgICAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZCgneW91Jyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5laWdoYm9yKSB7XG4gICAgICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKCdfbmVpZ2hib3InKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdXNlclJvdy5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHt1c2VyUGxhY2UgPCAxMCA/ICcwJyArIHVzZXJQbGFjZSA6IHVzZXJQbGFjZX1cbiAgICAgICAgICAgICAgICAke2lzQ3VycmVudFVzZXIgJiYgIW5laWdoYm9yID8gJzxzcGFuIGNsYXNzPVwieW91XCI+JyArIHRyYW5zbGF0ZUtleShcInlvdVwiKSArICc8L3NwYW4+JyA6ICcnfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHtpc0N1cnJlbnRVc2VyICYmICFuZWlnaGJvciA/IHVzZXJEYXRhLnVzZXJpZCA6IG1hc2tVc2VySWQodXNlckRhdGEudXNlcmlkKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuICAgICAgICAgICAgICAgICR7TnVtYmVyKHVzZXJEYXRhLnBvaW50cykudG9GaXhlZCgyKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuICAgICAgICAgICAgICAgICR7cHJpemVLZXkgPyB0cmFuc2xhdGVLZXkocHJpemVLZXkpIDogJyAtICd9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcblxuICAgICAgICAgICAgdGFibGUuYXBwZW5kKHVzZXJSb3cpO1xuICAgICAgICB9O1xuICAgICAgICBpZiAoaXNDdXJyZW50VXNlciAmJiAhaXNUb3BDdXJyZW50VXNlcikge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB1c2Vycy5pbmRleE9mKHVzZXIpO1xuICAgICAgICAgICAgaWYgKHVzZXJzW2luZGV4IC0gMV0pIHtcbiAgICAgICAgICAgICAgICByZW5kZXJSb3codXNlcnNbaW5kZXggLSAxXSwgeyBuZWlnaGJvcjogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlbmRlclJvdyh1c2VyLCB7IGhpZ2hsaWdodDogdHJ1ZSB9KTtcbiAgICAgICAgICAgIGlmICh1c2Vyc1tpbmRleCArIDFdKSB7XG4gICAgICAgICAgICAgICAgcmVuZGVyUm93KHVzZXJzW2luZGV4ICsgMV0sIHsgbmVpZ2hib3I6IHRydWUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZW5kZXJSb3codXNlcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0UHJvZ3Jlc3NCYXIoKSB7XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9ncmVzc0JhckNhbnZhcycpO1xuICAgICAgICBjb25zdCBwZXJjZW50RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9ncmVzc1BlcmNlbnQnKTtcbiAgICAgICAgaWYgKCFjYW52YXMgfHwgIXBlcmNlbnRFbGVtZW50KSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIFxuICAgICAgICAvLyDQmtC+0L3RgdGC0LDQvdGC0LhcbiAgICAgICAgY29uc3QgYmFySGVpZ2h0ID0gMjA7IC8vINCS0LjRgdC+0YLQsCDQv9GA0L7Qs9GA0LXRgS3QsdCw0YDRg1xuICAgICAgICBjb25zdCBzZWdtZW50V2lkdGggPSA0OyAvLyDQqNC40YDQuNC90LAg0L7QtNC90L7Qs9C+INGB0LXQs9C80LXQvdGC0LBcbiAgICAgICAgY29uc3Qgc2VnbWVudEhlaWdodCA9IDE0OyAvLyDQktC40YHQvtGC0LAg0L7QtNC90L7Qs9C+INGB0LXQs9C80LXQvdGC0LBcbiAgICAgICAgY29uc3Qgc2VnbWVudEdhcCA9IDI7IC8vINCf0YDQvtC80ZbQttC+0Log0LzRltC2INGB0LXQs9C80LXQvdGC0LDQvNC4XG4gICAgICAgIGNvbnN0IHBhZGRpbmcgPSAyOyAvLyDQktGW0LTRgdGC0YPQvyDQstGW0LQg0LrRgNCw0ZfQslxuICAgICAgICBjb25zdCBzZWdtZW50UmFkaXVzID0gMTsgLy8gQm9yZGVyIHJhZGl1cyDQtNC70Y8g0YHQtdCz0LzQtdC90YLRltCyXG4gICAgICAgIFxuICAgICAgICAvLyDQn9Cw0YDQsNC80LXRgtGA0Lgg0LDQvdGW0LzQsNGG0ZbRl1xuICAgICAgICBsZXQgY3VycmVudFByb2dyZXNzID0gMDsgLy8g0J/QvtGC0L7Rh9C90LjQuSDQv9GA0L7Qs9GA0LXRgSAoMC0xMDApXG4gICAgICAgIGNvbnN0IHRhcmdldFByb2dyZXNzID0gMTAwOyAvLyDQptGW0LvRjNC+0LLQuNC5INC/0YDQvtCz0YDQtdGBXG4gICAgICAgIGNvbnN0IGFuaW1hdGlvbkR1cmF0aW9uID0gNjAwMDA7IC8vINCi0YDQuNCy0LDQu9GW0YHRgtGMINCw0L3RltC80LDRhtGW0Zcg0LIg0LzRltC70ZbRgdC10LrRg9C90LTQsNGFXG4gICAgICAgIGxldCBzdGFydFRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICBsZXQgYW5pbWF0aW9uSWQgPSBudWxsO1xuICAgICAgICBsZXQgbWF4U2VnbWVudHMgPSAwO1xuICAgICAgICBcbiAgICAgICAgZnVuY3Rpb24gcmVzaXplQ2FudmFzKCkge1xuICAgICAgICAgICAgLy8g0J7RgtGA0LjQvNGD0ZTQvNC+INGA0L7Qt9C80ZbRgNC4INC60L7QvdGC0LXQudC90LXRgNCwXG4gICAgICAgICAgICBjb25zdCBjb250YWluZXIgPSBjYW52YXMucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lcldpZHRoID0gY29udGFpbmVyLm9mZnNldFdpZHRoIHx8IDc2ODtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0JLRgdGC0LDQvdC+0LLQu9GO0ZTQvNC+INGA0L7Qt9C80ZbRgNC4IGNhbnZhc1xuICAgICAgICAgICAgY2FudmFzLndpZHRoID0gY29udGFpbmVyV2lkdGg7XG4gICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gYmFySGVpZ2h0O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQoNC+0LfRgNCw0YXQvtCy0YPRlNC80L4g0LrRltC70YzQutGW0YHRgtGMINGB0LXQs9C80LXQvdGC0ZbQsiwg0YnQviDQv9C+0LzRltGB0YLRj9GC0YzRgdGPXG4gICAgICAgICAgICBjb25zdCBhdmFpbGFibGVXaWR0aCA9IGNvbnRhaW5lcldpZHRoIC0gKHBhZGRpbmcgKiAyKTtcbiAgICAgICAgICAgIGNvbnN0IHNlZ21lbnRXaXRoR2FwID0gc2VnbWVudFdpZHRoICsgc2VnbWVudEdhcDtcbiAgICAgICAgICAgIG1heFNlZ21lbnRzID0gTWF0aC5mbG9vcihhdmFpbGFibGVXaWR0aCAvIHNlZ21lbnRXaXRoR2FwKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0J/QtdGA0LXQvNCw0LvRjNC+0LLRg9GU0LzQviDQtyDQv9C+0YLQvtGH0L3QuNC8INC/0YDQvtCz0YDQtdGB0L7QvFxuICAgICAgICAgICAgaWYgKGN1cnJlbnRQcm9ncmVzcyA+IDApIHtcbiAgICAgICAgICAgICAgICBkcmF3UHJvZ3Jlc3NCYXIoY3VycmVudFByb2dyZXNzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZnVuY3Rpb24gZHJhd1Byb2dyZXNzQmFyKHByb2dyZXNzKSB7XG4gICAgICAgICAgICAvLyDQntGH0LjRidCw0ZTQvNC+IGNhbnZhc1xuICAgICAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQnNCw0LvRjtGU0LzQviDRgNCw0LzQutGDICjQsdGW0LvQuNC5INC/0YDRj9C80L7QutGD0YLQvdC40LopXG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnI0ZGRkZGRic7XG4gICAgICAgICAgICBjdHgubGluZVdpZHRoID0gMTtcbiAgICAgICAgICAgIGN0eC5zdHJva2VSZWN0KDAuNSwgMC41LCBjYW52YXMud2lkdGggLSAxLCBjYW52YXMuaGVpZ2h0IC0gMSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCg0L7Qt9GA0LDRhdC+0LLRg9GU0LzQviDQutGW0LvRjNC60ZbRgdGC0Ywg0LfQsNC/0L7QstC90LXQvdC40YUg0YHQtdCz0LzQtdC90YLRltCyXG4gICAgICAgICAgICBjb25zdCBmaWxsZWRTZWdtZW50cyA9IE1hdGguZmxvb3IoKHByb2dyZXNzIC8gMTAwKSAqIG1heFNlZ21lbnRzKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0JzQsNC70Y7RlNC80L4g0LfQsNC/0L7QstC90LXQvdGWINGB0LXQs9C80LXQvdGC0Lgg0Lcg0LfQsNC+0LrRgNGD0LPQu9C10L3QuNC80Lgg0LrRg9GC0LDQvNC4XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gJyNGRkZGRkYnO1xuICAgICAgICAgICAgY29uc3QgY2VudGVyWSA9IChiYXJIZWlnaHQgLSBzZWdtZW50SGVpZ2h0KSAvIDI7IC8vINCS0LXRgNGC0LjQutCw0LvRjNC90LUg0YbQtdC90YLRgNGD0LLQsNC90L3Rj1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbGxlZFNlZ21lbnRzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCB4ID0gcGFkZGluZyArIGkgKiAoc2VnbWVudFdpZHRoICsgc2VnbWVudEdhcCk7XG4gICAgICAgICAgICAgICAgY29uc3QgeSA9IGNlbnRlclk7XG5cbiAgICAgICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgaWYgKGN0eC5yb3VuZFJlY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g0KHRg9GH0LDRgdC90LjQuSDQvNC10YLQvtC0ICjQv9GW0LTRgtGA0LjQvNGD0ZTRgtGM0YHRjyDQsiDQvdC+0LLQuNGFINCx0YDQsNGD0LfQtdGA0LDRhSlcbiAgICAgICAgICAgICAgICAgICAgY3R4LnJvdW5kUmVjdCh4LCB5LCBzZWdtZW50V2lkdGgsIHNlZ21lbnRIZWlnaHQsIHNlZ21lbnRSYWRpdXMpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEZhbGxiYWNrINC00LvRjyDRgdGC0LDRgNC40YUg0LHRgNCw0YPQt9C10YDRltCyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHIgPSBzZWdtZW50UmFkaXVzO1xuICAgICAgICAgICAgICAgICAgICBjdHgubW92ZVRvKHggKyByLCB5KTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmxpbmVUbyh4ICsgc2VnbWVudFdpZHRoIC0gciwgeSk7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHggKyBzZWdtZW50V2lkdGgsIHksIHggKyBzZWdtZW50V2lkdGgsIHkgKyByKTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmxpbmVUbyh4ICsgc2VnbWVudFdpZHRoLCB5ICsgc2VnbWVudEhlaWdodCAtIHIpO1xuICAgICAgICAgICAgICAgICAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4ICsgc2VnbWVudFdpZHRoLCB5ICsgc2VnbWVudEhlaWdodCwgeCArIHNlZ21lbnRXaWR0aCAtIHIsIHkgKyBzZWdtZW50SGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmxpbmVUbyh4ICsgciwgeSArIHNlZ21lbnRIZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4LCB5ICsgc2VnbWVudEhlaWdodCwgeCwgeSArIHNlZ21lbnRIZWlnaHQgLSByKTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmxpbmVUbyh4LCB5ICsgcik7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHgsIHksIHggKyByLCB5KTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBmdW5jdGlvbiB1cGRhdGVQcm9ncmVzcygpIHtcbiAgICAgICAgICAgIGNvbnN0IGVsYXBzZWQgPSBEYXRlLm5vdygpIC0gc3RhcnRUaW1lO1xuICAgICAgICAgICAgbGV0IHByb2dyZXNzID0gKGVsYXBzZWQgLyBhbmltYXRpb25EdXJhdGlvbikgKiAxMDA7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCX0LDRhtC40LrQu9C10L3QvdGPOiDRj9C60YnQviDQtNC+0YHRj9Cz0LvQuCAxMDAlLCDQv9C+0YfQuNC90LDRlNC80L4g0LfQvdC+0LLRgyDQtyAwJVxuICAgICAgICAgICAgaWYgKHByb2dyZXNzID49IHRhcmdldFByb2dyZXNzKSB7XG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3MgPSAwO1xuICAgICAgICAgICAgICAgIHN0YXJ0VGltZSA9IERhdGUubm93KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGN1cnJlbnRQcm9ncmVzcyA9IHByb2dyZXNzO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQntC90L7QstC70Y7RlNC80L4g0LLRltC00L7QsdGA0LDQttC10L3QvdGPXG4gICAgICAgICAgICBkcmF3UHJvZ3Jlc3NCYXIocHJvZ3Jlc3MpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQntC90L7QstC70Y7RlNC80L4g0LLRltC00YHQvtGC0LrQuCAo0YLRltC70YzQutC4INGG0ZbQu9GWINGH0LjRgdC70LApXG4gICAgICAgICAgICBjb25zdCBwZXJjZW50ID0gTWF0aC5mbG9vcihwcm9ncmVzcyk7XG4gICAgICAgICAgICBwZXJjZW50RWxlbWVudC50ZXh0Q29udGVudCA9IHBlcmNlbnQgKyAnJSc7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCf0YDQvtC00L7QstC20YPRlNC80L4g0LDQvdGW0LzQsNGG0ZbRjiDQsdC10LfQutGW0L3QtdGH0L3QvlxuICAgICAgICAgICAgYW5pbWF0aW9uSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlUHJvZ3Jlc3MpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyDQhtC90ZbRhtGW0LDQu9GW0LfRg9GU0LzQviDRgNC+0LfQvNGW0YDQuCBjYW52YXNcbiAgICAgICAgcmVzaXplQ2FudmFzKCk7XG4gICAgICAgIFxuICAgICAgICAvLyDQntCx0YDQvtCx0LrQsCDQt9C80ZbQvdC4INGA0L7Qt9C80ZbRgNGDINCy0ZbQutC90LBcbiAgICAgICAgbGV0IHJlc2l6ZVRpbWVvdXQ7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQocmVzaXplVGltZW91dCk7XG4gICAgICAgICAgICByZXNpemVUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzaXplQ2FudmFzKCk7XG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIC8vINCX0LDQv9GD0YHQutCw0ZTQvNC+INCw0L3RltC80LDRhtGW0Y4g0Lcg0L3QtdCy0LXQu9C40LrQvtGOINC30LDRgtGA0LjQvNC60L7RjiDQtNC70Y8g0LrQvtGA0LXQutGC0L3QvtCz0L4g0YDQvtC30YDQsNGF0YPQvdC60YMg0YDQvtC30LzRltGA0ZbQslxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICByZXNpemVDYW52YXMoKTtcbiAgICAgICAgICAgICAgICBzdGFydFRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZVByb2dyZXNzKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICAvLyDQl9GD0L/QuNC90Y/RlNC80L4g0LDQvdGW0LzQsNGG0ZbRjiDQv9GA0Lgg0LLQuNGF0L7QtNGWINC3IHZpZXdwb3J0XG4gICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgICAgICAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWFuaW1hdGlvbklkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDQktGW0LTQvdC+0LLQu9GO0ZTQvNC+INCw0L3RltC80LDRhtGW0Y4g0Lcg0L/QvtGC0L7Rh9C90L7Qs9C+INC/0YDQvtCz0YDQtdGB0YNcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0VGltZSA9IERhdGUubm93KCkgLSAoY3VycmVudFByb2dyZXNzIC8gMTAwKSAqIGFuaW1hdGlvbkR1cmF0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlUHJvZ3Jlc3MoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhbmltYXRpb25JZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uSWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uSWQgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShjYW52YXMpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluaXRQYXJ0aWNpcGF0ZUNhbnZhcygpIHtcbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BhcnRpY2lwYXRlQ2FudmFzJyk7XG4gICAgICAgIGlmICghY2FudmFzKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IDEzNjY7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSA1NDU7XG5cbiAgICAgICAgLy8g0JrQvtC90YHRgtCw0L3RgtC4INC00LvRjyDRgNC+0LfQvNGW0YDRltCyINGC0LAg0L/QvtC30LjRhtGW0LlcbiAgICAgICAgY29uc3QgQ0FOVkFTX1dJRFRIID0gMTM2NjtcbiAgICAgICAgY29uc3QgQ0FOVkFTX0hFSUdIVCA9IDU0NTtcbiAgICAgICAgY29uc3QgVFJFRV9XSURUSCA9IDE3NTtcbiAgICAgICAgY29uc3QgVFJFRV9IRUlHSFQgPSAxNjc7XG4gICAgICAgIFxuICAgICAgICAvLyDQn9Cw0YDQsNC80LXRgtGA0Lgg0YHQv9GA0LDQudGCLdC70LjRgdGC0LBcbiAgICAgICAgY29uc3QgRlJBTUVTX1BFUl9ST1cgPSA1OyAvLyA1INC60LDQtNGA0ZbQsiDQsiDRgNGP0LTQutGDXG4gICAgICAgIGNvbnN0IFRPVEFMX1JPV1MgPSAyOyAvLyAyINGA0Y/QtNC4XG4gICAgICAgIGNvbnN0IFNQUklURV9TSEVFVF9XSURUSCA9IDExMDA7IC8vINCg0LXQsNC70YzQvdCwINGI0LjRgNC40L3QsCDRgdC/0YDQsNC50YIt0LvQuNGB0YLQsFxuICAgICAgICBjb25zdCBTUFJJVEVfU0hFRVRfSEVJR0hUID0gNDY4OyAvLyDQoNC10LDQu9GM0L3QsCDQstC40YHQvtGC0LAg0YHQv9GA0LDQudGCLdC70LjRgdGC0LBcbiAgICAgICAgXG4gICAgICAgIC8vINCg0L7Qt9C80ZbRgNC4INC+0LTQvdC+0LPQviDQutCw0LTRgNGDINCyINGB0L/RgNCw0LnRgi3Qu9C40YHRgtGWXG4gICAgICAgIGNvbnN0IEZSQU1FX1dJRFRIID0gTWF0aC5mbG9vcihTUFJJVEVfU0hFRVRfV0lEVEggLyBGUkFNRVNfUEVSX1JPVyk7IC8vIDIyMHB4XG4gICAgICAgIGNvbnN0IEZSQU1FX0hFSUdIVCA9IE1hdGguZmxvb3IoU1BSSVRFX1NIRUVUX0hFSUdIVCAvIFRPVEFMX1JPV1MpOyAvLyAyMzRweFxuICAgICAgICBcbiAgICAgICAgLy8g0KDQvtC30LzRltGA0Lgg0L7Qu9C10L3RjyDQvdCwIGNhbnZhcyAo0LzQvtC20L3QsCDQvNCw0YHRiNGC0LDQsdGD0LLQsNGC0LgpXG4gICAgICAgIGNvbnN0IERFRVJfU0NBTEUgPSAwLjU7IC8vINCc0LDRgdGI0YLQsNCxINC00LvRjyDQstGW0LTQvtCx0YDQsNC20LXQvdC90Y8g0L3QsCBjYW52YXNcbiAgICAgICAgY29uc3QgREVFUl9XSURUSCA9IE1hdGguZmxvb3IoRlJBTUVfV0lEVEggKiBERUVSX1NDQUxFKTsgLy8gfjExMHB4XG4gICAgICAgIGNvbnN0IERFRVJfSEVJR0hUID0gTWF0aC5mbG9vcihGUkFNRV9IRUlHSFQgKiBERUVSX1NDQUxFKTsgLy8gMTE3cHhcblxuICAgICAgICAvLyDQn9C+0LfQuNGG0ZbRlyDQtdC70LXQvNC10L3RgtGW0LJcbiAgICAgICAgY29uc3QgdHJlZVggPSBDQU5WQVNfV0lEVEggLyAyIC0gMTkwOyAvLyDQotGA0L7RhdC4INC70ZbQstGW0YjQtSDQstGW0LQg0YbQtdC90YLRgNGDXG4gICAgICAgIGNvbnN0IHRyZWVZID0gQ0FOVkFTX0hFSUdIVCAvIDIgLSBUUkVFX0hFSUdIVCAvIDI7XG4gICAgICAgIFxuICAgICAgICAvLyDQn9Cw0YDQsNC80LXRgtGA0Lgg0LDQvdGW0LzQsNGG0ZbRlyAo0YHQv9GW0LvRjNC90ZYg0LTQu9GPINCy0YHRltGFINC+0LvQtdC90ZbQsilcbiAgICAgICAgY29uc3QgRlJBTUVfREVMQVkgPSAxMjsgLy8g0JfQsNGC0YDQuNC80LrQsCDQvNGW0LYg0LrQsNC00YDQsNC80LhcbiAgICAgICAgY29uc3QgV0FMS0lOR19GUkFNRVMgPSA1OyAvLyDQmtGW0LvRjNC60ZbRgdGC0Ywg0LrQsNC00YDRltCyINC00LvRjyDRhdC+0LTRjNCx0LhcbiAgICAgICAgY29uc3QgRlJBTUVfUkVQRUFUID0gMjsgLy8g0JrRltC70YzQutGW0YHRgtGMINGA0LDQt9GW0LIg0L/QvtC60LDQt9GD0LLQsNGC0Lgg0LrQvtC20LXQvSDQutCw0LTRgFxuICAgICAgICBjb25zdCBJRExFX01JTl9EVVJBVElPTiA9IDYwOyAvLyDQnNGW0L3RltC80LDQu9GM0L3QsCDRgtGA0LjQstCw0LvRltGB0YLRjCDQt9GD0L/QuNC90LrQuCAoMSDRgdC10LrRg9C90LTQsCDQv9GA0LggNjBmcHMpXG4gICAgICAgIGNvbnN0IElETEVfTUFYX0RVUkFUSU9OID0gMTgwOyAvLyDQnNCw0LrRgdC40LzQsNC70YzQvdCwINGC0YDQuNCy0LDQu9GW0YHRgtGMINC30YPQv9C40L3QutC4ICgzINGB0LXQutGD0L3QtNC4INC/0YDQuCA2MGZwcylcblxuICAgICAgICAvLyDQodGC0LDQvdC4INCw0L3RltC80LDRhtGW0Zcg0L7Qu9C10L3Rj1xuICAgICAgICBjb25zdCBERUVSX1NUQVRFID0ge1xuICAgICAgICAgICAgV0FMS0lORzogJ3dhbGtpbmcnLFxuICAgICAgICAgICAgSURMRTogJ2lkbGUnXG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICBsZXQgYW5pbWF0aW9uSWQgPSBudWxsO1xuICAgICAgICBsZXQgZnJhbWVDb3VudGVyID0gMDsgLy8g0JPQu9C+0LHQsNC70YzQvdC40Lkg0LvRltGH0LjQu9GM0L3QuNC6INC60LDQtNGA0ZbQsiDQtNC70Y8g0YHQuNC90YXRgNC+0L3RltC30LDRhtGW0ZdcblxuICAgICAgICAvLyDQmtC70LDRgSDQtNC70Y8g0L/RgNC10LTRgdGC0LDQstC70LXQvdC90Y8g0L7QtNC90L7Qs9C+INC+0LvQtdC90Y9cbiAgICAgICAgY2xhc3MgRGVlciB7XG4gICAgICAgICAgICBjb25zdHJ1Y3RvcihzdGFydFgsIHN0YXJ0WSwgbWluWCwgbWF4WCwgc3BlZWQgPSAwLjUsIHpJbmRleCA9IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnggPSBzdGFydFg7XG4gICAgICAgICAgICAgICAgdGhpcy55ID0gc3RhcnRZO1xuICAgICAgICAgICAgICAgIHRoaXMubWluWCA9IG1pblg7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXhYID0gbWF4WDtcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVkID0gc3BlZWQ7XG4gICAgICAgICAgICAgICAgdGhpcy56SW5kZXggPSB6SW5kZXg7IC8vINCf0L7RgNGP0LTQvtC6INC80LDQu9GO0LLQsNC90L3RjyAo0LzQtdC90YjQtSA9INC30LfQsNC00YMsINCx0ZbQu9GM0YjQtSA9INGB0L/QtdGA0LXQtNGDKVxuICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gLTE7IC8vIC0xID0g0LLQu9GW0LLQviwgMSA9INCy0L/RgNCw0LLQvlxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBERUVSX1NUQVRFLldBTEtJTkc7XG4gICAgICAgICAgICAgICAgdGhpcy5mcmFtZUluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLmZyYW1lUmVwZWF0Q291bnRlciA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5pZGxlVGltZXIgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuaWRsZUR1cmF0aW9uID0gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZ2V0U3ByaXRlRnJhbWVJbmRleCgpIHtcbiAgICAgICAgICAgICAgICAvLyDQktC10YDRhdC90ZbQuSDRgNGP0LTQvtC6ICgwKSA9INGA0YPRhSDQstC70ZbQstC+LCDQvdC40LbQvdGW0Lkg0YDRj9C00L7QuiAoMSkgPSDRgNGD0YUg0LLQv9GA0LDQstC+XG4gICAgICAgICAgICAgICAgY29uc3Qgcm93ID0gdGhpcy5kaXJlY3Rpb24gPT09IC0xID8gMCA6IDE7XG4gICAgICAgICAgICAgICAgbGV0IGNvbCA9IDA7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gREVFUl9TVEFURS5XQUxLSU5HKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vINCa0LDQtNGA0Lgg0YXQvtC00YzQsdC4OiAwLCAxLCAyLCAzLCA0ICjQstGB0ZYgNSDQutCw0LTRgNGW0LIpXG4gICAgICAgICAgICAgICAgICAgIGNvbCA9IHRoaXMuZnJhbWVJbmRleCAlIFdBTEtJTkdfRlJBTUVTO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vINCh0YLQsNC9INC30YPQv9C40L3QutC4IChJRExFKSAtINCy0LjQutC+0YDQuNGB0YLQvtCy0YPRlNC80L4g0LrQsNC00YAgMFxuICAgICAgICAgICAgICAgICAgICBjb2wgPSAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB7IHJvdywgY29sIH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHVwZGF0ZShzaG91bGRVcGRhdGVGcmFtZSkge1xuICAgICAgICAgICAgICAgIC8vINCe0L3QvtCy0LvRjtGU0LzQviDQsNC90ZbQvNCw0YbRltGOINC60LDQtNGA0ZbQsiDQtyDQv9C+0LLRgtC+0YDQtdC90L3Rj9C8INC00LvRjyDQv9C70LDQstC90L7RgdGC0ZZcbiAgICAgICAgICAgICAgICBpZiAoc2hvdWxkVXBkYXRlRnJhbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IERFRVJfU1RBVEUuV0FMS0lORykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mcmFtZVJlcGVhdENvdW50ZXIrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vINCf0L7QutCw0LfRg9GU0LzQviDQutC+0LbQtdC9INC60LDQtNGAINC60ZbQu9GM0LrQsCDRgNCw0LfRltCyINC00LvRjyDQv9C70LDQstC90ZbRiNC+0Zcg0LDQvdGW0LzQsNGG0ZbRl1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZnJhbWVSZXBlYXRDb3VudGVyID49IEZSQU1FX1JFUEVBVCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZnJhbWVSZXBlYXRDb3VudGVyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDQn9C+0YHQu9GW0LTQvtCy0L3QviDQv9GA0L7RhdC+0LTQuNC80L4g0YfQtdGA0LXQtyDQstGB0ZYg0LrQsNC00YDQuDogMCwgMSwgMiwgMywgNCwgMCwgMSwgMiwgMywgNC4uLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZnJhbWVJbmRleCA9ICh0aGlzLmZyYW1lSW5kZXggKyAxKSAlIFdBTEtJTkdfRlJBTUVTO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8g0JvQvtCz0ZbQutCwINGB0YLQsNC90ZbQsiDRgtCwINGA0YPRhdGDXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IERFRVJfU1RBVEUuV0FMS0lORykge1xuICAgICAgICAgICAgICAgICAgICAvLyDQntC90L7QstC70Y7RlNC80L4g0L/QvtC30LjRhtGW0Y4g0L7Qu9C10L3Rj1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnggKz0gdGhpcy5zcGVlZCAqIHRoaXMuZGlyZWN0aW9uO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vINCf0LXRgNC10LLRltGA0Y/RlNC80L4g0LzQtdC20ZYg0YLQsCDQv9C10YDQtdGF0L7QtNC40LzQviDQtNC+INC30YPQv9C40L3QutC4XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnggPj0gdGhpcy5tYXhYICYmIHRoaXMuZGlyZWN0aW9uID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDQlNC+0YHRj9Cz0LvQuCDQv9GA0LDQstC+0LPQviDQutGA0LDRjiAtINC30YPQv9C40L3Rj9GU0LzQvtGB0Y9cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueCA9IHRoaXMubWF4WDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBERUVSX1NUQVRFLklETEU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlkbGVUaW1lciA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDQk9C10L3QtdGA0YPRlNC80L4g0LLQuNC/0LDQtNC60L7QstGDINGC0YDQuNCy0LDQu9GW0YHRgtGMINC30YPQv9C40L3QutC4INCy0ZbQtCAxINC00L4gMyDRgdC10LrRg9C90LRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaWRsZUR1cmF0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKElETEVfTUFYX0RVUkFUSU9OIC0gSURMRV9NSU5fRFVSQVRJT04gKyAxKSkgKyBJRExFX01JTl9EVVJBVElPTjtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnggPD0gdGhpcy5taW5YICYmIHRoaXMuZGlyZWN0aW9uID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g0JTQvtGB0Y/Qs9C70Lgg0LvRltCy0L7Qs9C+INC60YDQsNGOIC0g0LfRg9C/0LjQvdGP0ZTQvNC+0YHRj1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy54ID0gdGhpcy5taW5YO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IERFRVJfU1RBVEUuSURMRTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaWRsZVRpbWVyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vINCT0LXQvdC10YDRg9GU0LzQviDQstC40L/QsNC00LrQvtCy0YMg0YLRgNC40LLQsNC70ZbRgdGC0Ywg0LfRg9C/0LjQvdC60Lgg0LLRltC0IDEg0LTQviAzINGB0LXQutGD0L3QtFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pZGxlRHVyYXRpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoSURMRV9NQVhfRFVSQVRJT04gLSBJRExFX01JTl9EVVJBVElPTiArIDEpKSArIElETEVfTUlOX0RVUkFUSU9OO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlID09PSBERUVSX1NUQVRFLklETEUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pZGxlVGltZXIrKztcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vINCf0ZbRgdC70Y8g0LfQsNCy0LXRgNGI0LXQvdC90Y8g0LfRg9C/0LjQvdC60Lgg0LfQvNGW0L3RjtGU0LzQviDQvdCw0L/RgNGP0LzQvtC6INGC0LAg0L/QtdGA0LXRhdC+0LTQuNC80L4g0LTQviDRhdC+0LTRjNCx0LhcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaWRsZVRpbWVyID49IHRoaXMuaWRsZUR1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiAqPSAtMTsgLy8g0JfQvNGW0L3RjtGU0LzQviDQvdCw0L/RgNGP0LzQvtC6ICjQstC70ZbQstC+IOKGlCDQstC/0YDQsNCy0L4pXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0gREVFUl9TVEFURS5XQUxLSU5HO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mcmFtZUluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZnJhbWVSZXBlYXRDb3VudGVyID0gMDsgLy8g0KHQutC40LTQsNGU0LzQviDQu9GW0YfQuNC70YzQvdC40Log0L/QvtCy0YLQvtGA0LXQvdGMXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRyYXcoY3R4LCBzcHJpdGVJbWFnZSwgZnJhbWVXaWR0aCwgZnJhbWVIZWlnaHQsIGRlZXJXaWR0aCwgZGVlckhlaWdodCkge1xuICAgICAgICAgICAgICAgIGlmICghc3ByaXRlSW1hZ2UuY29tcGxldGUgfHwgZnJhbWVXaWR0aCA8PSAwIHx8IGZyYW1lSGVpZ2h0IDw9IDApIHJldHVybjtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHsgcm93LCBjb2wgfSA9IHRoaXMuZ2V0U3ByaXRlRnJhbWVJbmRleCgpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vINCa0L7QvtGA0LTQuNC90LDRgtC4INC60LDQtNGA0YMg0LIg0YHQv9GA0LDQudGCLdC70LjRgdGC0ZZcbiAgICAgICAgICAgICAgICBjb25zdCBzb3VyY2VYID0gY29sICogZnJhbWVXaWR0aDtcbiAgICAgICAgICAgICAgICBjb25zdCBzb3VyY2VZID0gcm93ICogZnJhbWVIZWlnaHQ7XG5cbiAgICAgICAgICAgICAgICAvLyDQktC40YDRltC30LDRlNC80L4g0LrQsNC00YAg0LfRliDRgdC/0YDQsNC50YIt0LvQuNGB0YLQsCDRgtCwINC80LDQu9GO0ZTQvNC+INC90LAgY2FudmFzXG4gICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShcbiAgICAgICAgICAgICAgICAgICAgc3ByaXRlSW1hZ2UsXG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZVgsIHNvdXJjZVksIGZyYW1lV2lkdGgsIGZyYW1lSGVpZ2h0LCAvLyDQlNC20LXRgNC10LvQviAo0YHQv9GA0LDQudGCLdC70LjRgdGCKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLngsIHRoaXMueSwgZGVlcldpZHRoLCBkZWVySGVpZ2h0IC8vINCf0YDQuNC30L3QsNGH0LXQvdC90Y8gKGNhbnZhcylcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8g0JzQsNGB0LjQsiDQvtC70LXQvdGW0LIgKNC80L7QttC90LAg0LTQvtC00LDRgtC4INCx0ZbQu9GM0YjQtSlcbiAgICAgICAgY29uc3QgZGVlcnMgPSBbXTtcbiAgICAgICAgXG4gICAgICAgIC8vINCa0L7QvdGE0ZbQs9GD0YDQsNGG0ZbRjyDQtNC70Y8g0YHRgtCy0L7RgNC10L3QvdGPINC+0LvQtdC90ZbQslxuICAgICAgICBjb25zdCBERUVSX0NPVU5UID0gMzsgLy8g0JrRltC70YzQutGW0YHRgtGMINC+0LvQtdC90ZbQslxuICAgICAgICBjb25zdCBkZWVyQ29uZmlncyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGFydFg6IENBTlZBU19XSURUSCAvIDIgKyA1MCxcbiAgICAgICAgICAgICAgICBzdGFydFk6IHRyZWVZICsgVFJFRV9IRUlHSFQgLSAyMCxcbiAgICAgICAgICAgICAgICBtaW5YOiBDQU5WQVNfV0lEVEggLyAyIC0gMjAwLFxuICAgICAgICAgICAgICAgIG1heFg6IENBTlZBU19XSURUSCAvIDIgKyAzMDAsXG4gICAgICAgICAgICAgICAgc3BlZWQ6IDAuNSxcbiAgICAgICAgICAgICAgICB6SW5kZXg6IDRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhcnRYOiBDQU5WQVNfV0lEVEggLyAyIC0gMTAwLFxuICAgICAgICAgICAgICAgIHN0YXJ0WTogQ0FOVkFTX0hFSUdIVCAvIDIgLSBERUVSX0hFSUdIVCAvIDIgKyA1MCxcbiAgICAgICAgICAgICAgICBtaW5YOiBDQU5WQVNfV0lEVEggLyAyIC0gMTUwLFxuICAgICAgICAgICAgICAgIG1heFg6IENBTlZBU19XSURUSCAvIDIgKyAxNTAsXG4gICAgICAgICAgICAgICAgc3BlZWQ6IDAuMyxcbiAgICAgICAgICAgICAgICB6SW5kZXg6IDNcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhcnRYOiBDQU5WQVNfV0lEVEggLyAyIC0gMTAwLFxuICAgICAgICAgICAgICAgIHN0YXJ0WTogQ0FOVkFTX0hFSUdIVCAvIDIgLSBERUVSX0hFSUdIVCAvIDIgLSA1MCxcbiAgICAgICAgICAgICAgICBtaW5YOiBDQU5WQVNfV0lEVEggLyAyIC0gMjUwLFxuICAgICAgICAgICAgICAgIG1heFg6IENBTlZBU19XSURUSCAvIDIgKyAyNTAsXG4gICAgICAgICAgICAgICAgc3BlZWQ6IDAuNCxcbiAgICAgICAgICAgICAgICB6SW5kZXg6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgXG4gICAgICAgIF07XG5cbiAgICAgICAgLy8g0KHRgtCy0L7RgNGO0ZTQvNC+INC+0LvQtdC90ZbQslxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IERFRVJfQ09VTlQgJiYgaSA8IGRlZXJDb25maWdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBjb25maWcgPSBkZWVyQ29uZmlnc1tpXTtcbiAgICAgICAgICAgIGRlZXJzLnB1c2gobmV3IERlZXIoXG4gICAgICAgICAgICAgICAgY29uZmlnLnN0YXJ0WCxcbiAgICAgICAgICAgICAgICBjb25maWcuc3RhcnRZLFxuICAgICAgICAgICAgICAgIGNvbmZpZy5taW5YLFxuICAgICAgICAgICAgICAgIGNvbmZpZy5tYXhYLFxuICAgICAgICAgICAgICAgIGNvbmZpZy5zcGVlZCxcbiAgICAgICAgICAgICAgICBjb25maWcuekluZGV4IHx8IDAgLy8g0JLQuNC60L7RgNC40YHRgtC+0LLRg9GU0LzQviB6SW5kZXgg0Lcg0LrQvtC90YTRltCz0YMg0LDQsdC+IDAg0LfQsCDQt9Cw0LzQvtCy0YfRg9Cy0LDQvdC90Y/QvFxuICAgICAgICAgICAgKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDQl9Cw0LLQsNC90YLQsNC20LXQvdC90Y8g0LfQvtCx0YDQsNC20LXQvdGMXG4gICAgICAgIGNvbnN0IGltYWdlcyA9IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IG5ldyBJbWFnZSgpLFxuICAgICAgICAgICAgdHJlZTogbmV3IEltYWdlKCksXG4gICAgICAgICAgICBkZWVyU3ByaXRlOiBuZXcgSW1hZ2UoKVxuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBpbWFnZXNMb2FkZWQgPSAwO1xuICAgICAgICBjb25zdCB0b3RhbEltYWdlcyA9IDM7XG5cbiAgICAgICAgZnVuY3Rpb24gb25JbWFnZUxvYWQoKSB7XG4gICAgICAgICAgICBpbWFnZXNMb2FkZWQrKztcbiAgICAgICAgICAgIGlmIChpbWFnZXNMb2FkZWQgPT09IHRvdGFsSW1hZ2VzKSB7XG4gICAgICAgICAgICAgICAgLy8g0J/QtdGA0LXQstGW0YDRj9GU0LzQviwg0YfQuCDRgdC/0YDQsNC50YIt0LvQuNGB0YIg0LfQsNCy0LDQvdGC0LDQttC40LLRgdGPINC60L7RgNC10LrRgtC90L5cbiAgICAgICAgICAgICAgICBpZiAoaW1hZ2VzLmRlZXJTcHJpdGUuY29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0RlZXIgc3ByaXRlIGxvYWRlZDonLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogaW1hZ2VzLmRlZXJTcHJpdGUud2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGltYWdlcy5kZWVyU3ByaXRlLmhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lV2lkdGg6IEZSQU1FX1dJRFRILFxuICAgICAgICAgICAgICAgICAgICAgICAgZnJhbWVIZWlnaHQ6IEZSQU1FX0hFSUdIVCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZXJXaWR0aDogREVFUl9XSURUSCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZXJIZWlnaHQ6IERFRVJfSEVJR0hUXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkcmF3Q2FudmFzKCk7XG4gICAgICAgICAgICAgICAgc3RhcnRBbmltYXRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGltYWdlcy5iYWNrZ3JvdW5kLm9ubG9hZCA9IG9uSW1hZ2VMb2FkO1xuICAgICAgICBpbWFnZXMudHJlZS5vbmxvYWQgPSBvbkltYWdlTG9hZDtcbiAgICAgICAgaW1hZ2VzLmRlZXJTcHJpdGUub25sb2FkID0gb25JbWFnZUxvYWQ7XG5cbiAgICAgICAgaW1hZ2VzLmJhY2tncm91bmQuc3JjID0gJ2ltZy9wYXJ0aWNpcGF0ZS9jYW52YXMtYmcucG5nJztcbiAgICAgICAgaW1hZ2VzLnRyZWUuc3JjID0gJ2ltZy9wYXJ0aWNpcGF0ZS90cmVlLnBuZyc7XG4gICAgICAgIGltYWdlcy5kZWVyU3ByaXRlLnNyYyA9ICdpbWcvcGFydGljaXBhdGUvZGVlci1zcHJpdGUucG5nJztcblxuICAgICAgICBmdW5jdGlvbiBkcmF3Q2FudmFzKCkge1xuICAgICAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBDQU5WQVNfV0lEVEgsIENBTlZBU19IRUlHSFQpO1xuXG4gICAgICAgICAgICBpZiAoaW1hZ2VzLmJhY2tncm91bmQuY29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKGltYWdlcy5iYWNrZ3JvdW5kLCAwLCAwLCBDQU5WQVNfV0lEVEgsIENBTlZBU19IRUlHSFQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBUUkVFX1pfSU5ERVggPSAyO1xuXG4gICAgICAgICAgICBjb25zdCBkcmF3YWJsZUVsZW1lbnRzID0gW107XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCU0L7QtNCw0ZTQvNC+INC+0LvQtdC90ZbQslxuICAgICAgICAgICAgZGVlcnMuZm9yRWFjaChkZWVyID0+IHtcbiAgICAgICAgICAgICAgICBkcmF3YWJsZUVsZW1lbnRzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZGVlcicsXG4gICAgICAgICAgICAgICAgICAgIHpJbmRleDogZGVlci56SW5kZXgsXG4gICAgICAgICAgICAgICAgICAgIGRyYXc6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbWFnZXMuZGVlclNwcml0ZS5jb21wbGV0ZSAmJiBGUkFNRV9XSURUSCA+IDAgJiYgRlJBTUVfSEVJR0hUID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZXIuZHJhdyhjdHgsIGltYWdlcy5kZWVyU3ByaXRlLCBGUkFNRV9XSURUSCwgRlJBTUVfSEVJR0hULCBERUVSX1dJRFRILCBERUVSX0hFSUdIVCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQlNC+0LTQsNGU0LzQviDRj9C70LjQvdC60YNcbiAgICAgICAgICAgIGRyYXdhYmxlRWxlbWVudHMucHVzaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3RyZWUnLFxuICAgICAgICAgICAgICAgIHpJbmRleDogVFJFRV9aX0lOREVYLFxuICAgICAgICAgICAgICAgIGRyYXc6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGltYWdlcy50cmVlLmNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKGltYWdlcy50cmVlLCB0cmVlWCwgdHJlZVksIFRSRUVfV0lEVEgsIFRSRUVfSEVJR0hUKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyDQodC+0YDRgtGD0ZTQvNC+INCy0YHRliDQtdC70LXQvNC10L3RgtC4INC30LAgekluZGV4ICjQvNC10L3RiNC1ID0g0LzQsNC70Y7RlNGC0YzRgdGPINGA0LDQvdGW0YjQtSwg0LHRltC70YzRiNC1ID0g0LzQsNC70Y7RlNGC0YzRgdGPINC/0ZbQt9C90ZbRiNC1KVxuICAgICAgICAgICAgZHJhd2FibGVFbGVtZW50cy5zb3J0KChhLCBiKSA9PiBhLnpJbmRleCAtIGIuekluZGV4KTtcblxuICAgICAgICAgICAgLy8g0JzQsNC70Y7RlNC80L4g0LLRgdGWINC10LvQtdC80LXQvdGC0Lgg0LIg0L/RgNCw0LLQuNC70YzQvdC+0LzRgyDQv9C+0YDRj9C00LrRg1xuICAgICAgICAgICAgZHJhd2FibGVFbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuZHJhdygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBhbmltYXRlKCkge1xuICAgICAgICAgICAgZnJhbWVDb3VudGVyKys7XG5cbiAgICAgICAgICAgIC8vINCf0LXRgNC10LLRltGA0Y/RlNC80L4sINGH0Lgg0L/QvtGC0YDRltCx0L3QviDQvtC90L7QstC70Y7QstCw0YLQuCDQutCw0LTRgNC4INCw0L3RltC80LDRhtGW0ZdcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZFVwZGF0ZUZyYW1lID0gZnJhbWVDb3VudGVyID49IEZSQU1FX0RFTEFZO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQntC90L7QstC70Y7RlNC80L4g0LPQu9C+0LHQsNC70YzQvdC40Lkg0LvRltGH0LjQu9GM0L3QuNC6INC60LDQtNGA0ZbQslxuICAgICAgICAgICAgaWYgKHNob3VsZFVwZGF0ZUZyYW1lKSB7XG4gICAgICAgICAgICAgICAgZnJhbWVDb3VudGVyID0gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8g0J7QvdC+0LLQu9GO0ZTQvNC+INCy0YHRltGFINC+0LvQtdC90ZbQslxuICAgICAgICAgICAgZGVlcnMuZm9yRWFjaChkZWVyID0+IHtcbiAgICAgICAgICAgICAgICBkZWVyLnVwZGF0ZShzaG91bGRVcGRhdGVGcmFtZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8g0J/QtdGA0LXQvNCw0LvRjNC+0LLRg9GU0LzQviBjYW52YXNcbiAgICAgICAgICAgIGRyYXdDYW52YXMoKTtcblxuICAgICAgICAgICAgYW5pbWF0aW9uSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBzdGFydEFuaW1hdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChhbmltYXRpb25JZCkge1xuICAgICAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbklkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFuaW1hdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vINCX0YPQv9C40L3Rj9GU0LzQviDQsNC90ZbQvNCw0YbRltGOINC/0YDQuCDQstC40YXQvtC00ZYg0Lcgdmlld3BvcnQgKNC+0L/RhtGW0L7QvdCw0LvRjNC90L4pXG4gICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgICAgICAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWFuaW1hdGlvbklkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydEFuaW1hdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFuaW1hdGlvbklkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShhbmltYXRpb25JZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25JZCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShjYW52YXMpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluaXRTbm93Zmxha2VzQ2FudmFzKCkge1xuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc25vd2ZsYWtlc0NhbnZhcycpO1xuICAgICAgICBpZiAoIWNhbnZhcykgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICBjb25zdCBmYXZQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0aWNreS13cmFwJyk7XG4gICAgICAgIFxuICAgICAgICAvLyDQmtC+0L3RgdGC0LDQvdGC0LhcbiAgICAgICAgY29uc3QgU05PV0ZMQUtFX0NPVU5UID0gMTAwO1xuICAgICAgICBjb25zdCBTTk9XRkxBS0VfTUlOX1NJWkUgPSA0O1xuICAgICAgICBjb25zdCBTTk9XRkxBS0VfTUFYX1NJWkUgPSAxMDtcbiAgICAgICAgY29uc3QgU05PV0ZMQUtFX01JTl9TUEVFRCA9IDAuMTtcbiAgICAgICAgY29uc3QgU05PV0ZMQUtFX01BWF9TUEVFRCA9IDAuMztcbiAgICAgICAgY29uc3QgU05PV0ZMQUtFX1dJTkRfUkFOR0UgPSAwLjQ7XG4gICAgICAgIGNvbnN0IFNOT1dGTEFLRV9TUEFXTl9JTlRFUlZBTCA9IDIwMDtcblxuICAgICAgICBjb25zdCBzbm93Zmxha2VzID0gW107XG4gICAgICAgIGxldCBsYXN0U25vd2ZsYWtlVGltZSA9IDA7XG4gICAgICAgIGxldCBhbmltYXRpb25JZCA9IG51bGw7XG4gICAgICAgIFxuICAgICAgICAvLyDQktGB0YLQsNC90L7QstC70Y7RlNC80L4g0YDQvtC30LzRltGAIGNhbnZhcyDQvdCwINCy0LXRgdGMIC5mYXYtcGFnZVxuICAgICAgICBmdW5jdGlvbiByZXNpemVDYW52YXMoKSB7XG4gICAgICAgICAgICBsZXQgbmV3V2lkdGgsIG5ld0hlaWdodDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGZhdlBhZ2UpIHtcbiAgICAgICAgICAgICAgICAvLyDQktC40LrQvtGA0LjRgdGC0L7QstGD0ZTQvNC+IHNjcm9sbEhlaWdodCDQtNC70Y8g0L7RgtGA0LjQvNCw0L3QvdGPINGA0LXQsNC70YzQvdC+0Zcg0LLQuNGB0L7RgtC4INC60L7QvdGC0LXQvdGC0YNcbiAgICAgICAgICAgICAgICBjb25zdCByZWN0ID0gZmF2UGFnZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgICAgICBuZXdXaWR0aCA9IHJlY3Qud2lkdGggfHwgZmF2UGFnZS5vZmZzZXRXaWR0aCB8fCB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgICAgICAgICAvLyDQlNC70Y8g0LLQuNGB0L7RgtC4INCy0LjQutC+0YDQuNGB0YLQvtCy0YPRlNC80L4gc2Nyb2xsSGVpZ2h0INGP0LrRidC+INCy0ZbQvSDQsdGW0LvRjNGI0LjQuSDQt9CwIG9mZnNldEhlaWdodFxuICAgICAgICAgICAgICAgIGNvbnN0IG9mZnNldEhlaWdodCA9IGZhdlBhZ2Uub2Zmc2V0SGVpZ2h0IHx8IGZhdlBhZ2UuY2xpZW50SGVpZ2h0O1xuICAgICAgICAgICAgICAgIGNvbnN0IHNjcm9sbEhlaWdodCA9IGZhdlBhZ2Uuc2Nyb2xsSGVpZ2h0O1xuICAgICAgICAgICAgICAgIG5ld0hlaWdodCA9IE1hdGgubWF4KHNjcm9sbEhlaWdodCwgb2Zmc2V0SGVpZ2h0LCByZWN0LmhlaWdodCkgfHwgd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG5ld0hlaWdodCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIEZhbGxiYWNrINC90LAgdmlld3BvcnRcbiAgICAgICAgICAgICAgICBuZXdXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICAgICAgICAgIG5ld0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0J/QtdGA0LXQstGW0YDRj9GU0LzQviDRh9C4INGA0L7Qt9C80ZbRgNC4INC30LzRltC90LjQu9C40YHRjyDQv9C10YDQtdC0INC+0L3QvtCy0LvQtdC90L3Rj9C8XG4gICAgICAgICAgICBpZiAoY2FudmFzLndpZHRoICE9PSBuZXdXaWR0aCB8fCBjYW52YXMuaGVpZ2h0ICE9PSBuZXdIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICBjYW52YXMud2lkdGggPSBuZXdXaWR0aDtcbiAgICAgICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gbmV3SGVpZ2h0O1xuICAgICAgICAgICAgICAgIC8vINCe0YfQuNGJ0LDRlNC80L4g0YHQvdGW0LbQuNC90LrQuCDQv9GA0Lgg0LfQvNGW0L3RliDRgNC+0LfQvNGW0YDRg1xuICAgICAgICAgICAgICAgIHNub3dmbGFrZXMubGVuZ3RoID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vINCS0YHRgtCw0L3QvtCy0LvRjtGU0LzQviDRgNC+0LfQvNGW0YAgY2FudmFzINC3INC90LXQstC10LvQuNC60L7RjiDQt9Cw0YLRgNC40LzQutC+0Y4g0LTQu9GPINC60L7RgNC10LrRgtC90L7Qs9C+INGA0L7Qt9GA0LDRhdGD0L3QutGDINGA0L7Qt9C80ZbRgNGW0LJcbiAgICAgICAgLy8g0JLQuNC60L7RgNC40YHRgtC+0LLRg9GU0LzQviDQutGW0LvRjNC60LAg0LrQsNC00YDRltCyINC00LvRjyDQs9Cw0YDQsNC90YLRltGXINC/0YDQsNCy0LjQu9GM0L3QvtCz0L4g0YDQvtC30LzRltGA0YNcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgIHJlc2l6ZUNhbnZhcygpO1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICByZXNpemVDYW52YXMoKTtcbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXNpemVDYW52YXMoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemVDYW52YXMpO1xuXG4gICAgICAgIC8vINCX0LDQstCw0L3RgtCw0LbQtdC90L3RjyDQt9C+0LHRgNCw0LbQtdC90L3RjyDRgdC90ZbQttC40L3QutC4XG4gICAgICAgIGNvbnN0IHNub3dmbGFrZUltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGxldCBpbWFnZUxvYWRlZCA9IGZhbHNlO1xuXG4gICAgICAgIHNub3dmbGFrZUltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaW1hZ2VMb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgLy8g0KfQtdC60LDRlNC80L4g0L/QvtC60Lgg0YHRgtC+0YDRltC90LrQsCDQstC40LnQtNC1INC30ZYg0YHRgtCw0L3RgyBsb2FkaW5nINC/0LXRgNC10LQg0YHRgtCw0YDRgtC+0Lwg0LDQvdGW0LzQsNGG0ZbRl1xuICAgICAgICAgICAgZnVuY3Rpb24gd2FpdEZvclBhZ2VSZWFkeSgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpc1BhZ2VMb2FkaW5nID0gbWFpblBhZ2UgJiYgbWFpblBhZ2UuY2xhc3NMaXN0LmNvbnRhaW5zKCdsb2FkaW5nJyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKGlzUGFnZUxvYWRpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g0K/QutGJ0L4g0YHRgtC+0YDRltC90LrQsCDRidC1INCyINGB0YLQsNC90ZYgbG9hZGluZywg0YfQtdC60LDRlNC80L4g0L/QvtC60LggbG9hZGVyINC/0YDQuNGF0L7QstCw0ZTRgtGM0YHRj1xuICAgICAgICAgICAgICAgICAgICAvLyBoaWRlTG9hZGVyINCy0LjQutC70LjQutCw0ZTRgtGM0YHRjyDRh9C10YDQtdC3IDMwMG1zINC/0ZbRgdC70Y8gcXVpY2tDaGVja0FuZFJlbmRlclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzaXplQ2FudmFzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzaXplQ2FudmFzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vINCU0L7QtNCw0YLQutC+0LLQsCDQv9C10YDQtdCy0ZbRgNC60LAg0L/RltGB0LvRjyDRidC1INC+0LTQvdC+0LPQviDQutCw0LTRgNGDXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNpemVDYW52YXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYW52YXMud2lkdGggPiAwICYmIGNhbnZhcy5oZWlnaHQgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRBbmltYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g0K/QutGJ0L4g0LLRgdC1INGJ0LUg0L3QtdC/0YDQsNCy0LjQu9GM0L3QuNC5INGA0L7Qt9C80ZbRgCwg0L/QvtCy0YLQvtGA0Y7RlNC80L5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KHdhaXRGb3JQYWdlUmVhZHksIDUwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSwgNDAwKTsgLy8g0KfQtdC60LDRlNC80L4g0YLRgNC+0YXQuCDQsdGW0LvRjNGI0LUg0L3RltC2IGhpZGVMb2FkZXIgKDMwMG1zKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vINCh0YLQvtGA0ZbQvdC60LAg0LPQvtGC0L7QstCwLCDQstGB0YLQsNC90L7QstC70Y7RlNC80L4g0YDQvtC30LzRltGAINGC0LAg0LfQsNC/0YPRgdC60LDRlNC80L5cbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc2l6ZUNhbnZhcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNpemVDYW52YXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNpemVDYW52YXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhbnZhcy53aWR0aCA+IDAgJiYgY2FudmFzLmhlaWdodCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QW5pbWF0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHdhaXRGb3JQYWdlUmVhZHkoKTtcbiAgICAgICAgfTtcbiAgICAgICAgc25vd2ZsYWtlSW1hZ2Uuc3JjID0gJ2ltZy9zbm93Zmxha2UucG5nJztcbiAgICAgICBcblxuICAgICAgICAvLyDQmtC70LDRgSDQtNC70Y8g0YHQvdGW0LbQuNC90LrQuFxuICAgICAgICBjbGFzcyBTbm93Zmxha2Uge1xuICAgICAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy54ID0gTWF0aC5yYW5kb20oKSAqIChjYW52YXMud2lkdGggfHwgd2luZG93LmlubmVyV2lkdGgpO1xuICAgICAgICAgICAgICAgIHRoaXMueSA9IC0yMDtcbiAgICAgICAgICAgICAgICB0aGlzLnNpemUgPSBNYXRoLnJhbmRvbSgpICogKFNOT1dGTEFLRV9NQVhfU0laRSAtIFNOT1dGTEFLRV9NSU5fU0laRSkgKyBTTk9XRkxBS0VfTUlOX1NJWkU7XG4gICAgICAgICAgICAgICAgdGhpcy5zcGVlZCA9IE1hdGgucmFuZG9tKCkgKiAoU05PV0ZMQUtFX01BWF9TUEVFRCAtIFNOT1dGTEFLRV9NSU5fU1BFRUQpICsgU05PV0ZMQUtFX01JTl9TUEVFRDtcbiAgICAgICAgICAgICAgICB0aGlzLndpbmQgPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiBTTk9XRkxBS0VfV0lORF9SQU5HRTtcbiAgICAgICAgICAgICAgICB0aGlzLm9wYWNpdHkgPSBNYXRoLnJhbmRvbSgpICogMC41ICsgMC41O1xuICAgICAgICAgICAgICAgIHRoaXMucm90YXRpb24gPSBNYXRoLnJhbmRvbSgpICogTWF0aC5QSSAqIDI7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3RhdGlvblNwZWVkID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMC4wMjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdXBkYXRlKCkge1xuICAgICAgICAgICAgICAgIHRoaXMueSArPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgICAgIHRoaXMueCArPSB0aGlzLndpbmQgKyAoTWF0aC5zaW4odGhpcy55ICogMC4wMSkgKiAwLjIpO1xuICAgICAgICAgICAgICAgIHRoaXMucm90YXRpb24gKz0gdGhpcy5yb3RhdGlvblNwZWVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkcmF3KCkge1xuICAgICAgICAgICAgICAgIGlmICghaW1hZ2VMb2FkZWQpIHJldHVybjtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNC60LAg0YfQuCBjYW52YXMg0LzQsNGUINC/0YDQsNCy0LjQu9GM0L3QuNC5INGA0L7Qt9C80ZbRgFxuICAgICAgICAgICAgICAgIGlmIChjYW52YXMud2lkdGggPT09IDAgfHwgY2FudmFzLmhlaWdodCA9PT0gMCkgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgY3R4LnNhdmUoKTtcbiAgICAgICAgICAgICAgICBjdHguZ2xvYmFsQWxwaGEgPSB0aGlzLm9wYWNpdHk7XG4gICAgICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZSh0aGlzLngsIHRoaXMueSk7XG4gICAgICAgICAgICAgICAgY3R4LnJvdGF0ZSh0aGlzLnJvdGF0aW9uKTtcbiAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgICAgICAgICBzbm93Zmxha2VJbWFnZSxcbiAgICAgICAgICAgICAgICAgICAgLXRoaXMuc2l6ZSAvIDIsXG4gICAgICAgICAgICAgICAgICAgIC10aGlzLnNpemUgLyAyLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNpemUsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2l6ZVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgY3R4LnJlc3RvcmUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaXNPZmZTY3JlZW4oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMueSA+IGNhbnZhcy5oZWlnaHQgKyAyMCB8fCBcbiAgICAgICAgICAgICAgICAgICAgICAgdGhpcy54IDwgLTIwIHx8IFxuICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnggPiBjYW52YXMud2lkdGggKyAyMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVNub3dmbGFrZSgpIHtcbiAgICAgICAgICAgIGlmIChzbm93Zmxha2VzLmxlbmd0aCA8IFNOT1dGTEFLRV9DT1VOVCkge1xuICAgICAgICAgICAgICAgIHNub3dmbGFrZXMucHVzaChuZXcgU25vd2ZsYWtlKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlU25vd2ZsYWtlcygpIHtcbiAgICAgICAgICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gICAgICAgICAgICBpZiAobm93IC0gbGFzdFNub3dmbGFrZVRpbWUgPiBTTk9XRkxBS0VfU1BBV05fSU5URVJWQUwpIHtcbiAgICAgICAgICAgICAgICBjcmVhdGVTbm93Zmxha2UoKTtcbiAgICAgICAgICAgICAgICBsYXN0U25vd2ZsYWtlVGltZSA9IG5vdztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHNub3dmbGFrZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICBzbm93Zmxha2VzW2ldLnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgIGlmIChzbm93Zmxha2VzW2ldLmlzT2ZmU2NyZWVuKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgc25vd2ZsYWtlcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZHJhd1Nub3dmbGFrZXMoKSB7XG4gICAgICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNC60LAg0YfQuCBjYW52YXMg0LzQsNGUINC/0YDQsNCy0LjQu9GM0L3QuNC5INGA0L7Qt9C80ZbRgCDQv9C10YDQtdC0INC80LDQu9GO0LLQsNC90L3Rj9C8XG4gICAgICAgICAgICBpZiAoY2FudmFzLndpZHRoID09PSAwIHx8IGNhbnZhcy5oZWlnaHQgPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXNpemVDYW52YXMoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIHNub3dmbGFrZXMuZm9yRWFjaChzbm93Zmxha2UgPT4ge1xuICAgICAgICAgICAgICAgIHNub3dmbGFrZS5kcmF3KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGFuaW1hdGUoKSB7XG4gICAgICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNGP0ZTQvNC+INGA0L7Qt9C80ZbRgCBjYW52YXMg0L3QsCDQv9C+0YfQsNGC0LrRgyDQutC+0LbQvdC+0LPQviDQutCw0LTRgNGDICjRgtGW0LvRjNC60Lgg0Y/QutGJ0L4g0LLRltC9INC90LXQv9GA0LDQstC40LvRjNC90LjQuSlcbiAgICAgICAgICAgIGlmIChjYW52YXMud2lkdGggPT09IDAgfHwgY2FudmFzLmhlaWdodCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJlc2l6ZUNhbnZhcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB1cGRhdGVTbm93Zmxha2VzKCk7XG4gICAgICAgICAgICBkcmF3U25vd2ZsYWtlcygpO1xuICAgICAgICAgICAgYW5pbWF0aW9uSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBzdGFydEFuaW1hdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChhbmltYXRpb25JZCkge1xuICAgICAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbklkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFuaW1hdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vINCX0YPQv9C40L3Rj9GU0LzQviDQsNC90ZbQvNCw0YbRltGOINC/0YDQuCDQstC40YXQvtC00ZYg0Lcgdmlld3BvcnRcbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICAgICAgICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghYW5pbWF0aW9uSWQgJiYgaW1hZ2VMb2FkZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QW5pbWF0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYW5pbWF0aW9uSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbklkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbklkID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGNhbnZhcyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdEluZmluaXRlU2Nyb2xsKCkge1xuICAgICAgICBjb25zdCBzY3JvbGxCbG9ja3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2Nyb2xsJyk7XG4gICAgICAgIFxuICAgICAgICBpZiAoIXNjcm9sbEJsb2Nrcy5sZW5ndGgpIHJldHVybjtcbiAgICAgICAgXG4gICAgICAgIHNjcm9sbEJsb2Nrcy5mb3JFYWNoKChzY3JvbGxCbG9jaykgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsQ29udGVudCA9IHNjcm9sbEJsb2NrLnF1ZXJ5U2VsZWN0b3IoJy5zY3JvbGxfX2NvbnRlbnQnKTtcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbFRleHQgPSBzY3JvbGxCbG9jay5xdWVyeVNlbGVjdG9yKCcuc2Nyb2xsX190ZXh0Jyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICghc2Nyb2xsQ29udGVudCB8fCAhc2Nyb2xsVGV4dCkgcmV0dXJuO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gc2Nyb2xsVGV4dC50ZXh0Q29udGVudC50cmltKCk7XG4gICAgICAgICAgICBpZiAoIXRleHQpIHJldHVybjsgLy8g0J/QtdGA0LXQstGW0YDQutCwINC90LAg0L/QvtGA0L7QttC90ZbQuSDRgtC10LrRgdGCXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHBhZGRpbmdSaWdodCA9IDA7XG4gICAgICAgICAgICBjb25zdCBmaXhlZFdpZHRoID0gMjYwMDsgLy8g0KTRltC60YHQvtCy0LDQvdCwINGI0LjRgNC40L3QsCDQutC+0L3RgtC10L3RgtGDXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCe0YfQuNGJ0LDRlNC80L4g0LrQvtC90YLQtdC90YJcbiAgICAgICAgICAgIHNjcm9sbENvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCh0YLQstC+0YDRjtGU0LzQviDQtdC70LXQvNC10L3RgtC4INC00L4g0YLQuNGFINC/0ZbRgCwg0L/QvtC60Lgg0L3QtSDQtNC+0YHRj9Cz0L3QtdC80L4g0YTRltC60YHQvtCy0LDQvdC+0Zcg0YjQuNGA0LjQvdC4IDI2MDBweFxuICAgICAgICAgICAgY29uc3QgZWxlbWVudHMgPSBbXTtcbiAgICAgICAgICAgIGxldCBpdGVtQ291bnQgPSAwO1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRXaWR0aCA9IDA7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCh0L/QvtGH0LDRgtC60YMg0YHRgtCy0L7RgNGO0ZTQvNC+INC+0LTQuNC9INC10LvQtdC80LXQvdGCLCDRidC+0LEg0L7RgtGA0LjQvNCw0YLQuCDQudC+0LPQviDRiNC40YDQuNC90YNcbiAgICAgICAgICAgIGNvbnN0IHRlbXBFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgdGVtcEVsZW1lbnQuY2xhc3NOYW1lID0gJ3Njcm9sbF9fdGV4dCc7XG4gICAgICAgICAgICB0ZW1wRWxlbWVudC50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICAgICAgICAvLyDQotC40LzRh9Cw0YHQvtCy0L4g0L/QvtC60LDQt9GD0ZTQvNC+INC10LvQtdC80LXQvdGCINC00LvRjyDQstC40LzRltGA0Y7QstCw0L3QvdGPXG4gICAgICAgICAgICB0ZW1wRWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgICAgICB0ZW1wRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgICAgICB0ZW1wRWxlbWVudC5zdHlsZS53aGl0ZVNwYWNlID0gJ25vd3JhcCc7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRlbXBFbGVtZW50KTtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1XaWR0aCA9IHRlbXBFbGVtZW50Lm9mZnNldFdpZHRoICsgcGFkZGluZ1JpZ2h0O1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0ZW1wRWxlbWVudCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCf0LXRgNC10LLRltGA0LrQsCDQvdCwINCy0LDQu9GW0LTQvdGDINGI0LjRgNC40L3RgyDQtdC70LXQvNC10L3RgtCwXG4gICAgICAgICAgICBpZiAoaXRlbVdpZHRoIDw9IDApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1Njcm9sbCBpdGVtIHdpZHRoIGlzIDAgb3IgaW52YWxpZCcpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0J7QsdC80LXQttGD0ZTQvNC+INC60ZbQu9GM0LrRltGB0YLRjCDRltGC0LXRgNCw0YbRltC5INC00LvRjyDQsdC10LfQv9C10LrQuFxuICAgICAgICAgICAgY29uc3QgbWF4SXRlcmF0aW9ucyA9IE1hdGguY2VpbChmaXhlZFdpZHRoIC8gaXRlbVdpZHRoKSArIDEwO1xuICAgICAgICAgICAgbGV0IGl0ZXJhdGlvbnMgPSAwO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQodGC0LLQvtGA0Y7RlNC80L4g0LXQu9C10LzQtdC90YLQuCDQtNC+INGC0LjRhSDQv9GW0YAsINC/0L7QutC4INC90LUg0LTQvtGB0Y/Qs9C90LXQvNC+INGE0ZbQutGB0L7QstCw0L3QvtGXINGI0LjRgNC40L3QuFxuICAgICAgICAgICAgd2hpbGUgKGN1cnJlbnRXaWR0aCA8IGZpeGVkV2lkdGggJiYgaXRlcmF0aW9ucyA8IG1heEl0ZXJhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXh0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgICAgICB0ZXh0RWxlbWVudC5jbGFzc05hbWUgPSAnc2Nyb2xsX190ZXh0JztcbiAgICAgICAgICAgICAgICB0ZXh0RWxlbWVudC50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8g0JrQvtC20LXQvSDQtNGA0YPQs9C40Lkg0LXQu9C10LzQtdC90YIg0L7RgtGA0LjQvNGD0ZQg0LrQu9Cw0YEgZGFya1xuICAgICAgICAgICAgICAgIGlmIChpdGVtQ291bnQgJSAyID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHRleHRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RhcmsnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgc2Nyb2xsQ29udGVudC5hcHBlbmRDaGlsZCh0ZXh0RWxlbWVudCk7XG4gICAgICAgICAgICAgICAgZWxlbWVudHMucHVzaCh0ZXh0RWxlbWVudCk7XG4gICAgICAgICAgICAgICAgY3VycmVudFdpZHRoICs9IGl0ZW1XaWR0aDtcbiAgICAgICAgICAgICAgICBpdGVtQ291bnQrKztcbiAgICAgICAgICAgICAgICBpdGVyYXRpb25zKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCf0LXRgNC10LLRltGA0LrQsCDQvdCwINC90LDRj9Cy0L3RltGB0YLRjCDQtdC70LXQvNC10L3RgtGW0LJcbiAgICAgICAgICAgIGlmIChlbGVtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ05vIHNjcm9sbCBlbGVtZW50cyBjcmVhdGVkJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQktC40LrQvtGA0LjRgdGC0L7QstGD0ZTQvNC+INC+0LHRh9C40YHQu9C10L3RgyDRiNC40YDQuNC90YMg0LfQsNC80ZbRgdGC0Ywg0LLQuNC80ZbRgNGO0LLQsNC90L3RjyAo0L/RgNCw0YbRjtGUINC90LDQstGW0YLRjCDQtNC70Y8g0L/RgNC40YXQvtCy0LDQvdC40YUg0LXQu9C10LzQtdC90YLRltCyKVxuICAgICAgICAgICAgY29uc3QgY29udGVudFdpZHRoID0gY3VycmVudFdpZHRoOyAvLyDQptC1INGI0LjRgNC40L3QsCDQv9C10YDRiNC+0LPQviDQvdCw0LHQvtGA0YMg0LXQu9C10LzQtdC90YLRltCyXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCf0LXRgNC10LLRltGA0LrQsCDQvdCwINCy0LDQu9GW0LTQvdGDINGI0LjRgNC40L3RgyDQutC+0L3RgtC10L3RgtGDXG4gICAgICAgICAgICBpZiAoY29udGVudFdpZHRoIDw9IDApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1Njcm9sbCBjb250ZW50IHdpZHRoIGlzIDAgb3IgaW52YWxpZCcpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0KHRgtCy0L7RgNGO0ZTQvNC+INC00YDRg9Cz0YMg0LrQvtC/0ZbRjiAo0L7RgtGA0LjQvNGD0ZTQvNC+IDJ4INGE0ZbQutGB0L7QstCw0L3QvtGXINGI0LjRgNC40L3QuClcbiAgICAgICAgICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjbG9uZWRFbGVtZW50ID0gZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgc2Nyb2xsQ29udGVudC5hcHBlbmRDaGlsZChjbG9uZWRFbGVtZW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQkNC90ZbQvNCw0YbRltGPXG4gICAgICAgICAgICBsZXQgcG9zaXRpb24gPSAwOyAvLyDQktC40YXRltC00L3QsCDRgtC+0YfQutCwIC0gMCDQstGW0LTQvdC+0YHQvdC+INC70ZbQstC+0LPQviDQutGA0LDRjlxuICAgICAgICAgICAgY29uc3Qgc3BlZWQgPSAwLjM7IC8vIHB4IHBlciBmcmFtZVxuICAgICAgICAgICAgbGV0IGFuaW1hdGlvbklkID0gbnVsbDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiAtPSBzcGVlZDsgLy8g0KDRg9GF0LDRlNC80L4g0LLQu9GW0LLQvlxuXG4gICAgICAgICAgICAgICAgaWYgKHBvc2l0aW9uIDw9IC1jb250ZW50V2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24gPSBwb3NpdGlvbiArIGNvbnRlbnRXaWR0aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgc2Nyb2xsQ29udGVudC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3Bvc2l0aW9ufXB4KWA7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCX0LDQv9GD0YHQutCw0ZTQvNC+INCw0L3RltC80LDRhtGW0Y5cbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8g0J/QtdGA0LXQstGW0YDRj9GU0LzQviwg0YfQuCDQtdC70LXQvNC10L3RgiDQstC40LTQuNC80LjQuSDQv9C10YDQtdC0INC30LDQv9GD0YHQutC+0LxcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wdXRlZFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoc2Nyb2xsQmxvY2spO1xuICAgICAgICAgICAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IGNvbXB1dGVkU3R5bGUuZGlzcGxheSAhPT0gJ25vbmUnICYmIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcHV0ZWRTdHlsZS52aXNpYmlsaXR5ICE9PSAnaGlkZGVuJztcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoaXNWaXNpYmxlICYmIGNvbnRlbnRXaWR0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZSgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vINCv0LrRidC+INC10LvQtdC80LXQvdGCINC/0YDQuNGF0L7QstCw0L3QuNC5LCDQt9Cw0L/Rg9GB0LrQsNGU0LzQviDQsNC90ZbQvNCw0YbRltGOINCy0YHQtSDQvtC00L3QvlxuICAgICAgICAgICAgICAgICAgICAvLyAo0LLQvtC90LAg0LHRg9C00LUg0L/RgNCw0YbRjtCy0LDRgtC4LCDQutC+0LvQuCDQtdC70LXQvNC10L3RgiDRgdGC0LDQvdC1INCy0LjQtNC40LzQuNC8KVxuICAgICAgICAgICAgICAgICAgICBhbmltYXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICBsb2FkVHJhbnNsYXRpb25zKClcbiAgICAgICAgLnRoZW4oaW5pdCkgLy8g0LfQsNC/0YPRgdC6INGW0L3RltGC0YMg0YHRgtC+0YDRltC90LrQuFxuXG5cblxuXG5cbiAgICAvLyBjb25zdCBsbmdCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxuZy1idG5cIilcbiAgICAvL1xuICAgIC8vIC8vINCS0YHRgtCw0L3QvtCy0LvRjtGU0LzQviDRgtC10LrRgdGCINC60L3QvtC/0LrQuCDQvdCwINC/0L7RgtC+0YfQvdGDINCw0LrRgtC40LLQvdGDINC80L7QstGDXG4gICAgLy8gZnVuY3Rpb24gdXBkYXRlTGFuZ3VhZ2VCdXR0b24oKSB7XG4gICAgLy8gICAgIC8vINCS0LjQutC+0YDQuNGB0YLQvtCy0YPRlNC80L4g0YLRgyDRgdCw0LzRgyDQu9C+0LPRltC60YMsINGJ0L4g0ZYg0LTQu9GPINCy0LjQt9C90LDRh9C10L3QvdGPIGxvY2FsZVxuICAgIC8vICAgICBsZXQgY3VycmVudExvY2FsZSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJsb2NhbGVcIikgfHwgXCJoclwiO1xuICAgIC8vICAgICBpZiAoaHJMZW5nKSBjdXJyZW50TG9jYWxlID0gJ2hyJztcbiAgICAvLyAgICAgaWYgKGVuTGVuZykgY3VycmVudExvY2FsZSA9ICdlbic7XG4gICAgLy8gICAgIGlmIChsbmdCdG4pIHtcbiAgICAvLyAgICAgICAgIGxuZ0J0bi50ZXh0Q29udGVudCA9IGN1cnJlbnRMb2NhbGU7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG4gICAgLy9cbiAgICAvLyAvLyDQntC90L7QstC70Y7RlNC80L4g0LrQvdC+0L/QutGDINC/0YDQuCDQt9Cw0LLQsNC90YLQsNC20LXQvdC90ZYgKNC/0ZbRgdC70Y8g0LLQuNC30L3QsNGH0LXQvdC90Y8gbG9jYWxlKVxuICAgIC8vIHVwZGF0ZUxhbmd1YWdlQnV0dG9uKCk7XG5cbiAgICAvLyBpZiAobG5nQnRuKSB7XG4gICAgLy8gICAgIGxuZ0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIC8vICAgICAgICAgLy8g0JLQuNC30L3QsNGH0LDRlNC80L4g0L/QvtGC0L7Rh9C90YMg0LzQvtCy0YMg0L/QtdGA0LXQtCDQv9C10YDQtdC80LjQutCw0L3QvdGP0LxcbiAgICAvLyAgICAgICAgIGxldCBjdXJyZW50TG9jYWxlID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsZVwiKSB8fCBcImhyXCI7XG4gICAgLy8gICAgICAgICBpZiAoaHJMZW5nKSBjdXJyZW50TG9jYWxlID0gJ2hyJztcbiAgICAvLyAgICAgICAgIGlmIChlbkxlbmcpIGN1cnJlbnRMb2NhbGUgPSAnZW4nO1xuICAgIC8vXG4gICAgLy8gICAgICAgICBpZiAoY3VycmVudExvY2FsZSA9PT0gXCJlblwiKSB7XG4gICAgLy8gICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcImxvY2FsZVwiKTtcbiAgICAvLyAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsZVwiLCBcImVuXCIpO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIC8vICAgICB9KTtcbiAgICAvLyB9XG4gICAgLy9cbiAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtYnRuXCIpPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIC8vICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtdGVzdFwiKT8uY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIik7XG4gICAgLy8gfSk7XG5cblxufSkoKTtcbiJdfQ==
