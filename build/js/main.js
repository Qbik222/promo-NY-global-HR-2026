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
              initGamesWeek();
              initProgressBar();
              initParticipateCanvas();
              initSnowflakesCanvas();
              setTimeout(hideLoader, 300);
              window.addEventListener("resize", initParticipateCanvas);
              window.addEventListener("orientationchange", initParticipateCanvas);

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

    // Фіксовані розміри оленя на canvas (не масштабуються)
    var DEER_SCALE = 0.5; // Масштаб для відображення на canvas
    var DEER_WIDTH = Math.floor(FRAME_WIDTH * DEER_SCALE);
    var DEER_HEIGHT = Math.floor(FRAME_HEIGHT * DEER_SCALE);

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
      startY: treeY + TREE_HEIGHT - 20,
      // Під ялинкою (treeY + висота ялинки - відступ)
      minX: CANVAS_WIDTH / 2 - 200 * scaleX,
      maxX: CANVAS_WIDTH / 2 + 300 * scaleX,
      speed: 0.5,
      zIndex: 4
    }, {
      startX: CANVAS_WIDTH / 2 - 100 * scaleX,
      startY: CANVAS_HEIGHT / 2 - DEER_HEIGHT / 2 + 50 * scaleY,
      minX: CANVAS_WIDTH / 2 - 150 * scaleX,
      maxX: CANVAS_WIDTH / 2 + 150 * scaleX,
      speed: 0.3,
      zIndex: 3
    }, {
      startX: CANVAS_WIDTH / 2 - 100 * scaleX,
      startY: CANVAS_HEIGHT / 2 - DEER_HEIGHT / 2 - 50 * scaleY,
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

    // Вибираємо фон залежно від розміру екрану
    images.background.src = isMobile ? 'img/participate/canvas-bg-tab.png' : 'img/participate/canvas-bg.png';
    images.tree.src = 'img/participate/tree.png';
    // Використовуємо спрайт-лист (якщо файл називається deer-sprite.png, змініть назву)
    images.deerSprite.src = 'img/participate/deer-sprite.png';
    images.heart.src = 'img/participate/deer-heart.png';

    // Оновлюємо посилання на дані для обробників подій
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
    "week1_game1": "/casino/show-game/",
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
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwibWFpblBhZ2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJsb2FkZXIiLCJyZXN1bHRzVGFibGUiLCJyZXN1bHRzVGFibGVPdGhlciIsImhyTGVuZyIsImVuTGVuZyIsImxvY2FsZSIsImRlYnVnIiwiaGlkZUxvYWRlciIsImkxOG5EYXRhIiwidHJhbnNsYXRlU3RhdGUiLCJ1c2VySWQiLCJyZXF1ZXN0IiwibGluayIsImV4dHJhT3B0aW9ucyIsImZldGNoIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJvayIsIkVycm9yIiwianNvbiIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsInJlcG9ydEVycm9yIiwic3R5bGUiLCJkaXNwbGF5Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwic3RhcnRzV2l0aCIsIlByb21pc2UiLCJyZWplY3QiLCJjbGFzc0xpc3QiLCJhZGQiLCJib2R5Iiwib3ZlcmZsb3ciLCJyZW1vdmUiLCJpbml0IiwidHJ5RGV0ZWN0VXNlcklkIiwicXVpY2tDaGVja0FuZFJlbmRlciIsImluaXRHYW1lc1dlZWsiLCJpbml0UHJvZ3Jlc3NCYXIiLCJpbml0UGFydGljaXBhdGVDYW52YXMiLCJpbml0U25vd2ZsYWtlc0NhbnZhcyIsInNldFRpbWVvdXQiLCJhZGRFdmVudExpc3RlbmVyIiwiZHJvcGRvd25zIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJkcm9wZG93biIsImV2ZW50Iiwib3BlbiIsInN1bW1hcnkiLCJzdW1tYXJ5UmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImN1cnJlbnRTY3JvbGxZIiwic2Nyb2xsWSIsInBhZ2VZT2Zmc2V0IiwidGFyZ2V0U2Nyb2xsWSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInNjcm9sbFRvIiwiTWF0aCIsIm1heCIsImJlaGF2aW9yIiwic3RvcmUiLCJzdGF0ZSIsImdldFN0YXRlIiwiYXV0aCIsImlzQXV0aG9yaXplZCIsImlkIiwiZ191c2VyX2lkIiwiYXR0ZW1wdHMiLCJtYXhBdHRlbXB0cyIsImF0dGVtcHRJbnRlcnZhbCIsIndhaXRGb3JVc2VySWQiLCJyZXNvbHZlIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJsb2FkVHJhbnNsYXRpb25zIiwidHJhbnNsYXRlIiwicmVwb3J0RGF0YSIsIm9yaWdpbiIsInVzZXJpZCIsImVycm9yVGV4dCIsInRleHQiLCJtZXNzYWdlIiwidHlwZSIsIm5hbWUiLCJzdGFjayIsIm1ldGhvZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ3YXJuIiwiZWxlbXMiLCJsZW5ndGgiLCJlbGVtIiwia2V5IiwiZ2V0QXR0cmlidXRlIiwiaW5uZXJIVE1MIiwicmVtb3ZlQXR0cmlidXRlIiwibG9nIiwicmVmcmVzaExvY2FsaXplZENsYXNzIiwiZWxlbWVudCIsImxhbmciLCJyZW5kZXJVc2VycyIsIndlZWtOdW0iLCJ1c2VyRGF0YSIsIk51bWJlciIsIndlZWtPYmoiLCJmaW5kIiwidyIsIndlZWsiLCJkYXRhIiwiQXJyYXkiLCJpc0FycmF5IiwidXNlcnMiLCJpc1N0YWdlRW5kZWQiLCJ3aW5uZXJBZGRpdGlvbmFsUHJpemUiLCJ1Iiwid2lubmVyIiwiY3VycmVudFVzZXIiLCJ1c2VyIiwiaXNWZXJpZmllZFVzZXIiLCJwb2ludHMiLCJwb3B1bGF0ZVVzZXJzVGFibGUiLCJjdXJyZW50VXNlcklkIiwic2Vjb25kVGFibGVPdGhlciIsInNlY29uZFRhYmxlIiwiaXNUb3BDdXJyZW50VXNlciIsInNsaWNlIiwic29tZSIsInRvcFVzZXJzTGVuZ3RoIiwidG9wVXNlcnMiLCJkaXNwbGF5VXNlciIsImlzQ3VycmVudFVzZXIiLCJ0YWJsZSIsInJlbmRlclJvdyIsIm9wdGlvbnMiLCJoaWdobGlnaHQiLCJuZWlnaGJvciIsInVzZXJSb3ciLCJjcmVhdGVFbGVtZW50IiwidXNlclBsYWNlIiwiaW5kZXhPZiIsInByaXplS2V5IiwiZ2V0UHJpemVUcmFuc2xhdGlvbktleSIsInRyYW5zbGF0ZUtleSIsIm1hc2tVc2VySWQiLCJ0b0ZpeGVkIiwiYXBwZW5kIiwiaW5kZXgiLCJjYW52YXMiLCJwZXJjZW50RWxlbWVudCIsImN0eCIsImdldENvbnRleHQiLCJiYXJIZWlnaHQiLCJzZWdtZW50V2lkdGgiLCJzZWdtZW50SGVpZ2h0Iiwic2VnbWVudEdhcCIsInBhZGRpbmciLCJzZWdtZW50UmFkaXVzIiwiY3VycmVudFByb2dyZXNzIiwidGFyZ2V0UHJvZ3Jlc3MiLCJsb2FkaW5nRHVyYXRpb24iLCJzdGFydFRpbWUiLCJEYXRlIiwibm93IiwiYW5pbWF0aW9uSWQiLCJtYXhTZWdtZW50cyIsImlzTG9hZGluZ0NvbXBsZXRlIiwicmVzaXplQ2FudmFzIiwiY29udGFpbmVyIiwicGFyZW50RWxlbWVudCIsImNvbnRhaW5lcldpZHRoIiwib2Zmc2V0V2lkdGgiLCJ3aWR0aCIsImhlaWdodCIsImF2YWlsYWJsZVdpZHRoIiwic2VnbWVudFdpdGhHYXAiLCJmbG9vciIsImRyYXdQcm9ncmVzc0JhciIsInByb2dyZXNzIiwiY2xlYXJSZWN0Iiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJzdHJva2VSZWN0IiwiZmlsbGVkU2VnbWVudHMiLCJmaWxsU3R5bGUiLCJjZW50ZXJZIiwiaSIsIngiLCJ5IiwiYmVnaW5QYXRoIiwicm91bmRSZWN0IiwiciIsIm1vdmVUbyIsImxpbmVUbyIsInF1YWRyYXRpY0N1cnZlVG8iLCJjbG9zZVBhdGgiLCJmaWxsIiwidXBkYXRlUHJvZ3Jlc3MiLCJlbGFwc2VkIiwicGVyY2VudCIsInRleHRDb250ZW50IiwicmVzaXplVGltZW91dCIsImNsZWFyVGltZW91dCIsImluaXRJY29uc0FuaW1hdGlvbiIsImR1cmF0aW9uIiwiaWNvbnMiLCJvcmlnaW5hbFRyYW5zZm9ybXMiLCJNYXAiLCJzZWxlY3RvciIsImljb24iLCJjb21wdXRlZFN0eWxlIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIm9yaWdpbmFsVHJhbnNmb3JtIiwidHJhbnNmb3JtIiwic2V0Iiwib3BhY2l0eSIsInRyYW5zaXRpb24iLCJpY29uQ291bnQiLCJnZXQiLCJwYXJ0aWNpcGF0ZUNhbnZhcyIsInBhcnRpY2lwYXRlRGVlcnMiLCJwYXJ0aWNpcGF0ZURlZXJXaWR0aCIsInBhcnRpY2lwYXRlRGVlckhlaWdodCIsImNhbnZhc0NsaWNrSGFuZGxlcnNBdHRhY2hlZCIsInRvdWNoU3RhcnRYIiwidG91Y2hTdGFydFkiLCJoYW5kbGVQYXJ0aWNpcGF0ZUNhbnZhc0NsaWNrIiwicmVjdCIsInNjYWxlWCIsInNjYWxlWSIsImNsaWVudFgiLCJjbGllbnRZIiwiY2xpY2tYIiwibGVmdCIsImNsaWNrWSIsImRlZXIiLCJpc1BvaW50SW5zaWRlIiwiaGFuZGxlQ2xpY2siLCJoYW5kbGVQYXJ0aWNpcGF0ZUNhbnZhc1RvdWNoU3RhcnQiLCJ0b3VjaCIsInRvdWNoZXMiLCJoYW5kbGVQYXJ0aWNpcGF0ZUNhbnZhc1RvdWNoRW5kIiwiY2hhbmdlZFRvdWNoZXMiLCJkZWx0YVgiLCJhYnMiLCJkZWx0YVkiLCJkaXN0YW5jZSIsInNxcnQiLCJpc01vYmlsZSIsImlubmVyV2lkdGgiLCJDQU5WQVNfV0lEVEgiLCJDQU5WQVNfSEVJR0hUIiwiVFJFRV9XSURUSCIsIlRSRUVfSEVJR0hUIiwiRlJBTUVTX1BFUl9ST1ciLCJUT1RBTF9ST1dTIiwiU1BSSVRFX1NIRUVUX1dJRFRIIiwiU1BSSVRFX1NIRUVUX0hFSUdIVCIsIkZSQU1FX1dJRFRIIiwiRlJBTUVfSEVJR0hUIiwiREVFUl9TQ0FMRSIsIkRFRVJfV0lEVEgiLCJERUVSX0hFSUdIVCIsInRyZWVYIiwidHJlZVkiLCJGUkFNRV9ERUxBWSIsIldBTEtJTkdfRlJBTUVTIiwiRlJBTUVfUkVQRUFUIiwiSURMRV9NSU5fRFVSQVRJT04iLCJJRExFX01BWF9EVVJBVElPTiIsIkRFRVJfU1RBVEUiLCJXQUxLSU5HIiwiSURMRSIsIlBFVFRJTkciLCJQRVRUSU5HX01JTl9EVVJBVElPTiIsIlBFVFRJTkdfTUFYX0RVUkFUSU9OIiwiSEVBUlRfU0laRV9NSU4iLCJIRUFSVF9TSVpFX01BWCIsIkhFQVJUX1JJU0VfRElTVEFOQ0UiLCJIRUFSVF9TUEFXTl9JTlRFUlZBTCIsImZyYW1lQ291bnRlciIsIkhlYXJ0Iiwic2l6ZSIsImhlYXJ0SW1hZ2UiLCJzY2FsZSIsInJpc2VTcGVlZCIsImlzVmlzaWJsZSIsImNvbXBsZXRlIiwic2F2ZSIsImdsb2JhbEFscGhhIiwiZHJhd1NpemUiLCJkcmF3WCIsImRyYXdZIiwiZHJhd0ltYWdlIiwicmVzdG9yZSIsIkRlZXIiLCJzdGFydFgiLCJzdGFydFkiLCJtaW5YIiwibWF4WCIsInNwZWVkIiwiekluZGV4IiwiZGlyZWN0aW9uIiwiZnJhbWVJbmRleCIsImZyYW1lUmVwZWF0Q291bnRlciIsImlkbGVUaW1lciIsImlkbGVEdXJhdGlvbiIsInBldHRpbmdUaW1lciIsInBldHRpbmdEdXJhdGlvbiIsInByZXZpb3VzU3RhdGUiLCJzYXZlZFgiLCJzYXZlZFkiLCJoZWFydHMiLCJoZWFydFNwYXduQ291bnRlciIsImRlZXJXaWR0aCIsImRlZXJIZWlnaHQiLCJyYW5kb20iLCJvZmZzZXRYIiwiaGVhcnRYIiwiaGVhcnRZIiwicHVzaCIsInJvdyIsImNvbCIsInNob3VsZFVwZGF0ZUZyYW1lIiwic3Bhd25IZWFydCIsImZpbHRlciIsImhlYXJ0IiwidXBkYXRlIiwic3ByaXRlSW1hZ2UiLCJmcmFtZVdpZHRoIiwiZnJhbWVIZWlnaHQiLCJnZXRTcHJpdGVGcmFtZUluZGV4Iiwic291cmNlWCIsInNvdXJjZVkiLCJzb3VyY2VXaWR0aCIsInNvdXJjZUhlaWdodCIsImRlc3RYIiwiZGVzdFkiLCJkZXN0V2lkdGgiLCJkZXN0SGVpZ2h0IiwiZHJhdyIsImltYWdlcyIsImJhY2tncm91bmQiLCJJbWFnZSIsInRyZWUiLCJkZWVyU3ByaXRlIiwiZGVlcnMiLCJERUVSX0NPVU5UIiwiZGVlckNvbmZpZ3MiLCJjb25maWciLCJpbWFnZXNMb2FkZWQiLCJ0b3RhbEltYWdlcyIsIm9uSW1hZ2VMb2FkIiwiZHJhd0NhbnZhcyIsInN0YXJ0QW5pbWF0aW9uIiwib25sb2FkIiwic3JjIiwicGFzc2l2ZSIsIlRSRUVfWl9JTkRFWCIsImRyYXdhYmxlRWxlbWVudHMiLCJzb3J0IiwiYSIsImIiLCJhbmltYXRlIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJvYnNlcnZlIiwibmV3SXNNb2JpbGUiLCJmYXZQYWdlIiwiU05PV0ZMQUtFX0NPVU5UIiwiU05PV0ZMQUtFX01JTl9TSVpFIiwiU05PV0ZMQUtFX01BWF9TSVpFIiwiU05PV0ZMQUtFX01JTl9TUEVFRCIsIlNOT1dGTEFLRV9NQVhfU1BFRUQiLCJTTk9XRkxBS0VfV0lORF9SQU5HRSIsIlNOT1dGTEFLRV9TUEFXTl9JTlRFUlZBTCIsInNub3dmbGFrZXMiLCJsYXN0U25vd2ZsYWtlVGltZSIsIm5ld1dpZHRoIiwibmV3SGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiY2xpZW50SGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJzbm93Zmxha2VJbWFnZSIsImltYWdlTG9hZGVkIiwid2FpdEZvclBhZ2VSZWFkeSIsImlzUGFnZUxvYWRpbmciLCJjb250YWlucyIsIlNub3dmbGFrZSIsIndpbmQiLCJyb3RhdGlvbiIsIlBJIiwicm90YXRpb25TcGVlZCIsInNpbiIsInJvdGF0ZSIsImNyZWF0ZVNub3dmbGFrZSIsInVwZGF0ZVNub3dmbGFrZXMiLCJpc09mZlNjcmVlbiIsInNwbGljZSIsImRyYXdTbm93Zmxha2VzIiwic25vd2ZsYWtlIiwid2Vla3NEYXRhIiwic3RhcnQiLCJlbmQiLCJnZXRBY3RpdmVXZWVrIiwiY3VycmVudERhdGUiLCJhY3RpdmVXZWVrSW5kZXgiLCJwYXJzZUludCIsImFjdGl2ZVdlZWsiLCJnYW1lTGlzdHMiLCJsaXN0IiwiY3VycmVudExpc3QiLCJhdXRvQWRkRGF0YUJ1dHRvbnMiLCJzZXRHYW1lTGlua3MiLCJnYW1lc0xpbmtzIiwiZ2FtZUxpbmtzIiwiZ2FtZUlkIiwid2Vla01hdGNoIiwiY2xhc3NOYW1lIiwibWF0Y2giLCJpdGVtcyIsIml0ZW0iLCJnYW1lTnVtYmVyIiwiYnV0dG9uTmFtZSIsImxpbmtFbCIsImN1cnJlbnRCdXR0b24iLCJpbmNsdWRlcyIsInNldEF0dHJpYnV0ZSJdLCJtYXBwaW5ncyI6Ijs7OytDQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQSxDQUFDLFlBQVk7RUFFVCxJQUFNQSxNQUFNLEdBQUcsc0NBQXNDO0VBRXJELElBQU1DLFFBQVEsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsV0FBVyxDQUFDO0lBQ2hEQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGtCQUFrQixDQUFDO0lBQ25ERSxZQUFZLEdBQUdILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsQ0FBQztJQUMvQ0csaUJBQWlCLEdBQUdKLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGFBQWEsQ0FBQztFQUU3RCxJQUFNSSxNQUFNLEdBQUdMLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFNBQVMsQ0FBQztFQUNoRCxJQUFNSyxNQUFNLEdBQUdOLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFNBQVMsQ0FBQztFQUVoRCxJQUFJTSxNQUFNLEdBQUcsSUFBSTtFQUNqQjs7RUFFQSxJQUFJRixNQUFNLEVBQUVFLE1BQU0sR0FBRyxJQUFJO0VBQ3pCLElBQUlELE1BQU0sRUFBRUMsTUFBTSxHQUFHLElBQUk7RUFFekIsSUFBSUMsS0FBSyxHQUFHLEtBQUs7RUFFakIsSUFBSUEsS0FBSyxFQUFFQyxVQUFVLEVBQUU7RUFFdkIsSUFBSUMsUUFBUSxHQUFHLENBQUMsQ0FBQztFQUNqQixJQUFNQyxjQUFjLEdBQUcsS0FBSztFQUM1QixJQUFJQyxNQUFNLEdBQUcsSUFBSTtFQUNqQjs7RUFFQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FB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WSxDQUFDLGFBQWEsQ0FBQztVQUN4RCxJQUFJLENBQUNnVixhQUFhLElBQUksQ0FBQ0EsYUFBYSxDQUFDQyxRQUFRLGVBQVFuVSxJQUFJLFVBQU8sRUFBRTtZQUM5RGlVLE1BQU0sQ0FBQ0csWUFBWSxDQUFDLGFBQWEsRUFBRUosVUFBVSxDQUFDO1VBQ2xEO1VBQ0E7VUFDQSxJQUFJLENBQUNDLE1BQU0sQ0FBQy9VLFlBQVksQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUNwQytVLE1BQU0sQ0FBQ0csWUFBWSxDQUFDLFlBQVksRUFBRSxnQkFBZ0IsQ0FBQztVQUN2RDtRQUNKO01BQ0osQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDO0VBQ047QUFHSixDQUFDLEdBQUciLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XG5cbiAgICBjb25zdCBhcGlVUkwgPSAnaHR0cHM6Ly9mYXYtcHJvbS5jb20vYXBpX2JsYWNrX3ByaXplJ1xuXG4gICAgY29uc3QgbWFpblBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhdi1wYWdlXCIpLFxuICAgICAgICBsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNwaW5uZXItb3ZlcmxheVwiKSxcbiAgICAgICAgcmVzdWx0c1RhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YWJsZVwiKSxcbiAgICAgICAgcmVzdWx0c1RhYmxlT3RoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RhYmxlT3RoZXJcIilcblxuICAgIGNvbnN0IGhyTGVuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNockxlbmcnKTtcbiAgICBjb25zdCBlbkxlbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW5MZW5nJyk7XG5cbiAgICBsZXQgbG9jYWxlID0gXCJoclwiXG4gICAgLy8gbGV0IGxvY2FsZSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJsb2NhbGVcIikgfHwgXCJoclwiXG5cbiAgICBpZiAoaHJMZW5nKSBsb2NhbGUgPSAnaHInO1xuICAgIGlmIChlbkxlbmcpIGxvY2FsZSA9ICdlbic7XG5cbiAgICBsZXQgZGVidWcgPSBmYWxzZVxuXG4gICAgaWYgKGRlYnVnKSBoaWRlTG9hZGVyKClcblxuICAgIGxldCBpMThuRGF0YSA9IHt9O1xuICAgIGNvbnN0IHRyYW5zbGF0ZVN0YXRlID0gZmFsc2U7XG4gICAgbGV0IHVzZXJJZCA9IG51bGw7XG4gICAgLy8gbGV0IHVzZXJJZCA9IE51bWJlcihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpKSA/PyBudWxsXG5cbiAgICBjb25zdCByZXF1ZXN0ID0gZnVuY3Rpb24gKGxpbmssIGV4dHJhT3B0aW9ucykge1xuICAgICAgICByZXR1cm4gZmV0Y2goYXBpVVJMICsgbGluaywge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC4uLihleHRyYU9wdGlvbnMgfHwge30pXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghcmVzLm9rKSB0aHJvdyBuZXcgRXJyb3IoJ0FQSSBlcnJvcicpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0FQSSByZXF1ZXN0IGZhaWxlZDonLCBlcnIpO1xuXG4gICAgICAgICAgICAgICAgcmVwb3J0RXJyb3IoZXJyKTtcblxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXYtcGFnZScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLnN0YXJ0c1dpdGgoXCJodHRwczovL3d3dy5mYXZiZXQuaHIvXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9wcm9tb2NpamUvcHJvbW9jaWphL3N0dWIvJztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvcHJvbW9zL3Byb21vL3N0dWIvJztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlkZUxvYWRlcigpe1xuICAgICAgICBsb2FkZXIuY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiXG4gICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5yZW1vdmUoXCJsb2FkaW5nXCIpXG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgbGV0IGF0dGVtcHRzID0gMDtcbiAgICAgICAgY29uc3QgbWF4QXR0ZW1wdHMgPSAyMDtcbiAgICAgICAgY29uc3QgYXR0ZW1wdEludGVydmFsID0gNTA7XG5cbiAgICAgICAgZnVuY3Rpb24gdHJ5RGV0ZWN0VXNlcklkKCkge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5zdG9yZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gd2luZG93LnN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgICAgICAgICAgdXNlcklkID0gc3RhdGUuYXV0aC5pc0F1dGhvcml6ZWQgJiYgc3RhdGUuYXV0aC5pZCB8fCAnJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAod2luZG93LmdfdXNlcl9pZCkge1xuICAgICAgICAgICAgICAgIHVzZXJJZCA9IHdpbmRvdy5nX3VzZXJfaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBxdWlja0NoZWNrQW5kUmVuZGVyKCkge1xuICAgICAgICAgICAgaW5pdEdhbWVzV2VlaygpO1xuICAgICAgICAgICAgaW5pdFByb2dyZXNzQmFyKCk7XG4gICAgICAgICAgICBpbml0UGFydGljaXBhdGVDYW52YXMoKTtcbiAgICAgICAgICAgIGluaXRTbm93Zmxha2VzQ2FudmFzKCk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGhpZGVMb2FkZXIsIDMwMCk7XG5cbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGluaXRQYXJ0aWNpcGF0ZUNhbnZhcyk7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm9yaWVudGF0aW9uY2hhbmdlXCIsIGluaXRQYXJ0aWNpcGF0ZUNhbnZhcyk7XG5cbiAgICAgICAgICAgIC8vIEZpeCBkcm9wZG93biBzY3JvbGwgaXNzdWUgLSBwcmV2ZW50IHBhZ2UgZnJvbSBzaGlmdGluZyB1cCB3aGVuIG9wZW5pbmcgZHJvcGRvd25cbiAgICAgICAgICAgIGNvbnN0IGRyb3Bkb3ducyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcm9wZG93bicpO1xuICAgICAgICAgICAgZHJvcGRvd25zLmZvckVhY2goKGRyb3Bkb3duKSA9PiB7XG4gICAgICAgICAgICAgICAgZHJvcGRvd24uYWRkRXZlbnRMaXN0ZW5lcigndG9nZ2xlJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub3Blbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRHJvcGRvd24gaXMgb3BlbmluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3VtbWFyeSA9IHRoaXMucXVlcnlTZWxlY3Rvcignc3VtbWFyeScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN1bW1hcnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBHZXQgc3VtbWFyeSBwb3NpdGlvbiByZWxhdGl2ZSB0byB2aWV3cG9ydFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN1bW1hcnlSZWN0ID0gc3VtbWFyeS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIHN1bW1hcnkgaXMgbmVhciB0aGUgdG9wIG9mIHZpZXdwb3J0ICh3aXRoaW4gMTAwcHggZnJvbSB0b3ApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN1bW1hcnlSZWN0LnRvcCA8IDEwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDYWxjdWxhdGUgaG93IG11Y2ggdG8gc2Nyb2xsIHRvIGtlZXAgc3VtbWFyeSB2aXNpYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRTY3JvbGxZID0gd2luZG93LnNjcm9sbFkgfHwgd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXRTY3JvbGxZID0gY3VycmVudFNjcm9sbFkgKyBzdW1tYXJ5UmVjdC50b3AgLSAxMjA7IC8vIDEyMHB4IG9mZnNldCBmcm9tIHRvcFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFVzZSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgZm9yIHNtb290aCBzY3JvbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiBNYXRoLm1heCgwLCB0YXJnZXRTY3JvbGxZKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHdhaXRGb3JVc2VySWQgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdHJ5RGV0ZWN0VXNlcklkKCk7XG4gICAgICAgICAgICAgICAgaWYgKHVzZXJJZCB8fCBhdHRlbXB0cyA+PSBtYXhBdHRlbXB0cykge1xuICAgICAgICAgICAgICAgICAgICBxdWlja0NoZWNrQW5kUmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGF0dGVtcHRzKys7XG4gICAgICAgICAgICB9LCBhdHRlbXB0SW50ZXJ2YWwpO1xuICAgICAgICB9KTtcblxuICAgICAgICBhd2FpdCB3YWl0Rm9yVXNlcklkO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvYWRUcmFuc2xhdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiByZXF1ZXN0KGAvbmV3LXRyYW5zbGF0ZXMvJHtsb2NhbGV9YClcbiAgICAgICAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgICAgIGkxOG5EYXRhID0ganNvbjtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGUoKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBtdXRhdGlvbk9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKG11dGF0aW9ucykge1xuICAgICAgICAgICAgICAgIC8vICAgICBtdXRhdGlvbk9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgdHJhbnNsYXRlKCk7XG4gICAgICAgICAgICAgICAgLy8gICAgIG11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXROb2RlLCB7IGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgICAgICAgICAvLyBtdXRhdGlvbk9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoYXJkY29yZVRlbm5pc1wiKSwge1xuICAgICAgICAgICAgICAgIC8vICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgLy8gICAgIHN1YnRyZWU6IHRydWVcbiAgICAgICAgICAgICAgICAvLyB9KTtcblxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVwb3J0RXJyb3IoZXJyKSB7XG4gICAgICAgIGNvbnN0IHJlcG9ydERhdGEgPSB7XG4gICAgICAgICAgICBvcmlnaW46IHdpbmRvdy5sb2NhdGlvbi5ocmVmLFxuICAgICAgICAgICAgdXNlcmlkOiB1c2VySWQsXG4gICAgICAgICAgICBlcnJvclRleHQ6IGVycj8uZXJyb3IgfHwgZXJyPy50ZXh0IHx8IGVycj8ubWVzc2FnZSB8fCAnVW5rbm93biBlcnJvcicsXG4gICAgICAgICAgICB0eXBlOiBlcnI/Lm5hbWUgfHwgJ1Vua25vd25FcnJvcicsXG4gICAgICAgICAgICBzdGFjazogZXJyPy5zdGFjayB8fCAnJ1xuICAgICAgICB9O1xuXG4gICAgICAgIGZldGNoKCdodHRwczovL2Zhdi1wcm9tLmNvbS9hcGktY21zL3JlcG9ydHMvYWRkJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcG9ydERhdGEpXG4gICAgICAgIH0pLmNhdGNoKGNvbnNvbGUud2Fybik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdHJhbnNsYXRlKCkge1xuICAgICAgICBjb25zdCBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRyYW5zbGF0ZV0nKVxuICAgICAgICBpZiAoZWxlbXMgJiYgZWxlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZih0cmFuc2xhdGVTdGF0ZSl7XG4gICAgICAgICAgICAgICAgZWxlbXMuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gZWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgICAgICAgICAgICAgICAgIGVsZW0uaW5uZXJIVE1MID0gaTE4bkRhdGFba2V5XSB8fCAnKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiAgIGtleTogICcgKyBrZXk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpMThuRGF0YVtrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRyYW5zbGF0aW9uIHdvcmtzIVwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChsb2NhbGUgPT09ICdlbicpIHtcbiAgICAgICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5hZGQoJ2VuJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmVmcmVzaExvY2FsaXplZENsYXNzKG1haW5QYWdlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWZyZXNoTG9jYWxpemVkQ2xhc3MoZWxlbWVudCkge1xuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IGxhbmcgb2YgWydocicsICdlbiddKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUobGFuZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGxvY2FsZSk7XG4gICAgfVxuXG5cblxuXG4gICAgZnVuY3Rpb24gcmVuZGVyVXNlcnMod2Vla051bSwgdXNlckRhdGEgPSBbXSkge1xuICAgICAgICB3ZWVrTnVtID0gTnVtYmVyKHdlZWtOdW0pO1xuICAgICAgICBjb25zdCB3ZWVrT2JqID0gdXNlckRhdGEuZmluZCh3ID0+IHcud2VlayA9PT0gd2Vla051bSk7XG4gICAgICAgIGlmICghd2Vla09iaiB8fCAhd2Vla09iai5kYXRhIHx8ICFBcnJheS5pc0FycmF5KHdlZWtPYmouZGF0YS51c2VycykpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ9Cd0LXQstGW0YDQvdCwINGB0YLRgNGD0LrRgtGD0YDQsCDQtNCw0L3QuNGFJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpc1N0YWdlRW5kZWQgPSB3ZWVrT2JqLmRhdGEuaXNTdGFnZUVuZGVkXG5cbiAgICAgICAgdXNlckRhdGEgPSB3ZWVrT2JqLmRhdGEudXNlcnM7XG5cbiAgICAgICAgY29uc3Qgd2lubmVyQWRkaXRpb25hbFByaXplID0gdXNlckRhdGEuZmluZCh1ID0+IHtcbiAgICAgICAgICAgIGlmKHUud2lubmVyID09PSB0cnVlKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRVc2VyID0gdXNlckRhdGEuZmluZCh1c2VyID0+IHVzZXIudXNlcmlkID09PSB1c2VySWQpO1xuXG4gICAgICAgIGlmKHVzZXJJZCAmJiAhY3VycmVudFVzZXIgJiYgaXNWZXJpZmllZFVzZXIpe1xuICAgICAgICAgICAgdXNlckRhdGEgPSBbLi4udXNlckRhdGEsIHt1c2VyaWQ6IHVzZXJJZCwgcG9pbnRzOiAwfV1cbiAgICAgICAgfVxuICAgICAgICBwb3B1bGF0ZVVzZXJzVGFibGUodXNlckRhdGEsIHVzZXJJZCwgd2Vla051bSwgY3VycmVudFVzZXIsIGlzVmVyaWZpZWRVc2VyLCBpc1N0YWdlRW5kZWQsIHdpbm5lckFkZGl0aW9uYWxQcml6ZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcG9wdWxhdGVVc2Vyc1RhYmxlKHVzZXJzLCBjdXJyZW50VXNlcklkLCB3ZWVrLCBjdXJyZW50VXNlciwgaXNWZXJpZmllZFVzZXIsIGlzU3RhZ2VFbmRlZCwgd2lubmVyQWRkaXRpb25hbFByaXplKSB7XG4gICAgICAgIGlmICghdXNlcnM/Lmxlbmd0aCkgcmV0dXJuO1xuICAgICAgICByZXN1bHRzVGFibGUuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHJlc3VsdHNUYWJsZU90aGVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBzZWNvbmRUYWJsZU90aGVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBzZWNvbmRUYWJsZS5pbm5lckhUTUwgPSAnJztcblxuXG4gICAgICAgIGNvbnN0IGlzVG9wQ3VycmVudFVzZXIgPSBjdXJyZW50VXNlciAmJiB1c2Vycy5zbGljZSgwLCAxMCkuc29tZSh1c2VyID0+IHVzZXIudXNlcmlkID09PSBjdXJyZW50VXNlcklkKTtcblxuICAgICAgICBjb25zdCB0b3BVc2Vyc0xlbmd0aCA9ICF1c2VySWQgfHwgaXNUb3BDdXJyZW50VXNlciAgPyAxMCA6IDEwO1xuXG4gICAgICAgIGNvbnN0IHRvcFVzZXJzID0gdXNlcnMuc2xpY2UoMCwgdG9wVXNlcnNMZW5ndGgpO1xuXG4gICAgICAgIHRvcFVzZXJzLmZvckVhY2godXNlciA9PiB7XG4gICAgICAgICAgICBkaXNwbGF5VXNlcih1c2VyLCB1c2VyLnVzZXJpZCA9PT0gY3VycmVudFVzZXJJZCwgcmVzdWx0c1RhYmxlLCB0b3BVc2VycywgaXNUb3BDdXJyZW50VXNlciwgd2Vlayk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZihpc1ZlcmlmaWVkVXNlciAmJiAhY3VycmVudFVzZXIpIHtcbiAgICAgICAgICAgIGRpc3BsYXlVc2VyKGN1cnJlbnRVc2VyLCB0cnVlLCByZXN1bHRzVGFibGVPdGhlciwgdXNlcnMsIGZhbHNlLCB3ZWVrKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaXNUb3BDdXJyZW50VXNlciAmJiBjdXJyZW50VXNlcikge1xuICAgICAgICAgICAgZGlzcGxheVVzZXIoY3VycmVudFVzZXIsIHRydWUsIHJlc3VsdHNUYWJsZU90aGVyLCB1c2VycywgZmFsc2UsIHdlZWspO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzcGxheVVzZXIodXNlciwgaXNDdXJyZW50VXNlciwgdGFibGUsIHVzZXJzLCBpc1RvcEN1cnJlbnRVc2VyLCB3ZWVrKSB7XG5cbiAgICAgICAgY29uc3QgcmVuZGVyUm93ID0gKHVzZXJEYXRhLCBvcHRpb25zID0ge30pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgaGlnaGxpZ2h0ID0gZmFsc2UsIG5laWdoYm9yID0gZmFsc2UgfSA9IG9wdGlvbnM7XG4gICAgICAgICAgICBjb25zdCB1c2VyUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoJ3RhYmxlX19yb3cnKTtcblxuICAgICAgICAgICAgY29uc3QgdXNlclBsYWNlID0gdXNlcnMuaW5kZXhPZih1c2VyRGF0YSkgKyAxO1xuICAgICAgICAgICAgY29uc3QgcHJpemVLZXkgPSBkZWJ1ZyA/IG51bGwgOiBnZXRQcml6ZVRyYW5zbGF0aW9uS2V5KHVzZXJQbGFjZSwgd2Vlayk7XG5cbiAgICAgICAgICAgIGlmICh1c2VyUGxhY2UgPD0gMykge1xuICAgICAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZChgcGxhY2Uke3VzZXJQbGFjZX1gKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGhpZ2hsaWdodCB8fCBpc0N1cnJlbnRVc2VyICYmICFuZWlnaGJvcikge1xuICAgICAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZCgneW91Jyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5laWdoYm9yKSB7XG4gICAgICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKCdfbmVpZ2hib3InKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdXNlclJvdy5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHt1c2VyUGxhY2UgPCAxMCA/ICcwJyArIHVzZXJQbGFjZSA6IHVzZXJQbGFjZX1cbiAgICAgICAgICAgICAgICAke2lzQ3VycmVudFVzZXIgJiYgIW5laWdoYm9yID8gJzxzcGFuIGNsYXNzPVwieW91XCI+JyArIHRyYW5zbGF0ZUtleShcInlvdVwiKSArICc8L3NwYW4+JyA6ICcnfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHtpc0N1cnJlbnRVc2VyICYmICFuZWlnaGJvciA/IHVzZXJEYXRhLnVzZXJpZCA6IG1hc2tVc2VySWQodXNlckRhdGEudXNlcmlkKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuICAgICAgICAgICAgICAgICR7TnVtYmVyKHVzZXJEYXRhLnBvaW50cykudG9GaXhlZCgyKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuICAgICAgICAgICAgICAgICR7cHJpemVLZXkgPyB0cmFuc2xhdGVLZXkocHJpemVLZXkpIDogJyAtICd9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcblxuICAgICAgICAgICAgdGFibGUuYXBwZW5kKHVzZXJSb3cpO1xuICAgICAgICB9O1xuICAgICAgICBpZiAoaXNDdXJyZW50VXNlciAmJiAhaXNUb3BDdXJyZW50VXNlcikge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB1c2Vycy5pbmRleE9mKHVzZXIpO1xuICAgICAgICAgICAgaWYgKHVzZXJzW2luZGV4IC0gMV0pIHtcbiAgICAgICAgICAgICAgICByZW5kZXJSb3codXNlcnNbaW5kZXggLSAxXSwgeyBuZWlnaGJvcjogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlbmRlclJvdyh1c2VyLCB7IGhpZ2hsaWdodDogdHJ1ZSB9KTtcbiAgICAgICAgICAgIGlmICh1c2Vyc1tpbmRleCArIDFdKSB7XG4gICAgICAgICAgICAgICAgcmVuZGVyUm93KHVzZXJzW2luZGV4ICsgMV0sIHsgbmVpZ2hib3I6IHRydWUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZW5kZXJSb3codXNlcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0UHJvZ3Jlc3NCYXIoKSB7XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9ncmVzc0JhckNhbnZhcycpO1xuICAgICAgICBjb25zdCBwZXJjZW50RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9ncmVzc1BlcmNlbnQnKTtcbiAgICAgICAgaWYgKCFjYW52YXMgfHwgIXBlcmNlbnRFbGVtZW50KSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIFxuICAgICAgICAvLyDQmtC+0L3RgdGC0LDQvdGC0LhcbiAgICAgICAgY29uc3QgYmFySGVpZ2h0ID0gMjA7IC8vINCS0LjRgdC+0YLQsCDQv9GA0L7Qs9GA0LXRgS3QsdCw0YDRg1xuICAgICAgICBjb25zdCBzZWdtZW50V2lkdGggPSA0OyAvLyDQqNC40YDQuNC90LAg0L7QtNC90L7Qs9C+INGB0LXQs9C80LXQvdGC0LBcbiAgICAgICAgY29uc3Qgc2VnbWVudEhlaWdodCA9IDE0OyAvLyDQktC40YHQvtGC0LAg0L7QtNC90L7Qs9C+INGB0LXQs9C80LXQvdGC0LBcbiAgICAgICAgY29uc3Qgc2VnbWVudEdhcCA9IDI7IC8vINCf0YDQvtC80ZbQttC+0Log0LzRltC2INGB0LXQs9C80LXQvdGC0LDQvNC4XG4gICAgICAgIGNvbnN0IHBhZGRpbmcgPSAyOyAvLyDQktGW0LTRgdGC0YPQvyDQstGW0LQg0LrRgNCw0ZfQslxuICAgICAgICBjb25zdCBzZWdtZW50UmFkaXVzID0gMTsgLy8gQm9yZGVyIHJhZGl1cyDQtNC70Y8g0YHQtdCz0LzQtdC90YLRltCyXG4gICAgICAgIFxuICAgICAgICAvLyDQn9Cw0YDQsNC80LXRgtGA0Lgg0LDQvdGW0LzQsNGG0ZbRlyDQt9Cw0LLQsNC90YLQsNC20LXQvdC90Y9cbiAgICAgICAgbGV0IGN1cnJlbnRQcm9ncmVzcyA9IDE7IC8vINCf0L7Rh9C40L3QsNGU0LzQviDQtyAxJVxuICAgICAgICBjb25zdCB0YXJnZXRQcm9ncmVzcyA9IDEwMDsgLy8g0KbRltC70YzQvtCy0LjQuSDQv9GA0L7Qs9GA0LXRgVxuICAgICAgICBjb25zdCBsb2FkaW5nRHVyYXRpb24gPSAzMDAwOyAvLyDQotGA0LjQstCw0LvRltGB0YLRjCDQt9Cw0LLQsNC90YLQsNC20LXQvdC90Y86IDMg0YHQtdC60YPQvdC00LhcbiAgICAgICAgbGV0IHN0YXJ0VGltZSA9IERhdGUubm93KCk7XG4gICAgICAgIGxldCBhbmltYXRpb25JZCA9IG51bGw7XG4gICAgICAgIGxldCBtYXhTZWdtZW50cyA9IDA7XG4gICAgICAgIGxldCBpc0xvYWRpbmdDb21wbGV0ZSA9IGZhbHNlO1xuICAgICAgICBcbiAgICAgICAgZnVuY3Rpb24gcmVzaXplQ2FudmFzKCkge1xuICAgICAgICAgICAgLy8g0J7RgtGA0LjQvNGD0ZTQvNC+INGA0L7Qt9C80ZbRgNC4INC60L7QvdGC0LXQudC90LXRgNCwXG4gICAgICAgICAgICBjb25zdCBjb250YWluZXIgPSBjYW52YXMucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lcldpZHRoID0gY29udGFpbmVyLm9mZnNldFdpZHRoIHx8IDc2ODtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0JLRgdGC0LDQvdC+0LLQu9GO0ZTQvNC+INGA0L7Qt9C80ZbRgNC4IGNhbnZhc1xuICAgICAgICAgICAgY2FudmFzLndpZHRoID0gY29udGFpbmVyV2lkdGg7XG4gICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gYmFySGVpZ2h0O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQoNC+0LfRgNCw0YXQvtCy0YPRlNC80L4g0LrRltC70YzQutGW0YHRgtGMINGB0LXQs9C80LXQvdGC0ZbQsiwg0YnQviDQv9C+0LzRltGB0YLRj9GC0YzRgdGPXG4gICAgICAgICAgICBjb25zdCBhdmFpbGFibGVXaWR0aCA9IGNvbnRhaW5lcldpZHRoIC0gKHBhZGRpbmcgKiAyKTtcbiAgICAgICAgICAgIGNvbnN0IHNlZ21lbnRXaXRoR2FwID0gc2VnbWVudFdpZHRoICsgc2VnbWVudEdhcDtcbiAgICAgICAgICAgIG1heFNlZ21lbnRzID0gTWF0aC5mbG9vcihhdmFpbGFibGVXaWR0aCAvIHNlZ21lbnRXaXRoR2FwKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0J/QtdGA0LXQvNCw0LvRjNC+0LLRg9GU0LzQviDQtyDQv9C+0YLQvtGH0L3QuNC8INC/0YDQvtCz0YDQtdGB0L7QvFxuICAgICAgICAgICAgaWYgKGN1cnJlbnRQcm9ncmVzcyA+IDApIHtcbiAgICAgICAgICAgICAgICBkcmF3UHJvZ3Jlc3NCYXIoY3VycmVudFByb2dyZXNzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZnVuY3Rpb24gZHJhd1Byb2dyZXNzQmFyKHByb2dyZXNzKSB7XG4gICAgICAgICAgICAvLyDQntGH0LjRidCw0ZTQvNC+IGNhbnZhc1xuICAgICAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQnNCw0LvRjtGU0LzQviDRgNCw0LzQutGDICjQsdGW0LvQuNC5INC/0YDRj9C80L7QutGD0YLQvdC40LopXG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnI0ZGRkZGRic7XG4gICAgICAgICAgICBjdHgubGluZVdpZHRoID0gMTtcbiAgICAgICAgICAgIGN0eC5zdHJva2VSZWN0KDAuNSwgMC41LCBjYW52YXMud2lkdGggLSAxLCBjYW52YXMuaGVpZ2h0IC0gMSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCg0L7Qt9GA0LDRhdC+0LLRg9GU0LzQviDQutGW0LvRjNC60ZbRgdGC0Ywg0LfQsNC/0L7QstC90LXQvdC40YUg0YHQtdCz0LzQtdC90YLRltCyXG4gICAgICAgICAgICBjb25zdCBmaWxsZWRTZWdtZW50cyA9IE1hdGguZmxvb3IoKHByb2dyZXNzIC8gMTAwKSAqIG1heFNlZ21lbnRzKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0JzQsNC70Y7RlNC80L4g0LfQsNC/0L7QstC90LXQvdGWINGB0LXQs9C80LXQvdGC0Lgg0Lcg0LfQsNC+0LrRgNGD0LPQu9C10L3QuNC80Lgg0LrRg9GC0LDQvNC4XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gJyNGRkZGRkYnO1xuICAgICAgICAgICAgY29uc3QgY2VudGVyWSA9IChiYXJIZWlnaHQgLSBzZWdtZW50SGVpZ2h0KSAvIDI7IC8vINCS0LXRgNGC0LjQutCw0LvRjNC90LUg0YbQtdC90YLRgNGD0LLQsNC90L3Rj1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbGxlZFNlZ21lbnRzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCB4ID0gcGFkZGluZyArIGkgKiAoc2VnbWVudFdpZHRoICsgc2VnbWVudEdhcCk7XG4gICAgICAgICAgICAgICAgY29uc3QgeSA9IGNlbnRlclk7XG5cbiAgICAgICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgaWYgKGN0eC5yb3VuZFJlY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g0KHRg9GH0LDRgdC90LjQuSDQvNC10YLQvtC0ICjQv9GW0LTRgtGA0LjQvNGD0ZTRgtGM0YHRjyDQsiDQvdC+0LLQuNGFINCx0YDQsNGD0LfQtdGA0LDRhSlcbiAgICAgICAgICAgICAgICAgICAgY3R4LnJvdW5kUmVjdCh4LCB5LCBzZWdtZW50V2lkdGgsIHNlZ21lbnRIZWlnaHQsIHNlZ21lbnRSYWRpdXMpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEZhbGxiYWNrINC00LvRjyDRgdGC0LDRgNC40YUg0LHRgNCw0YPQt9C10YDRltCyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHIgPSBzZWdtZW50UmFkaXVzO1xuICAgICAgICAgICAgICAgICAgICBjdHgubW92ZVRvKHggKyByLCB5KTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmxpbmVUbyh4ICsgc2VnbWVudFdpZHRoIC0gciwgeSk7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHggKyBzZWdtZW50V2lkdGgsIHksIHggKyBzZWdtZW50V2lkdGgsIHkgKyByKTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmxpbmVUbyh4ICsgc2VnbWVudFdpZHRoLCB5ICsgc2VnbWVudEhlaWdodCAtIHIpO1xuICAgICAgICAgICAgICAgICAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4ICsgc2VnbWVudFdpZHRoLCB5ICsgc2VnbWVudEhlaWdodCwgeCArIHNlZ21lbnRXaWR0aCAtIHIsIHkgKyBzZWdtZW50SGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmxpbmVUbyh4ICsgciwgeSArIHNlZ21lbnRIZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4LCB5ICsgc2VnbWVudEhlaWdodCwgeCwgeSArIHNlZ21lbnRIZWlnaHQgLSByKTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmxpbmVUbyh4LCB5ICsgcik7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHgsIHksIHggKyByLCB5KTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBmdW5jdGlvbiB1cGRhdGVQcm9ncmVzcygpIHtcbiAgICAgICAgICAgIGNvbnN0IGVsYXBzZWQgPSBEYXRlLm5vdygpIC0gc3RhcnRUaW1lO1xuICAgICAgICAgICAgbGV0IHByb2dyZXNzID0gMSArIChlbGFwc2VkIC8gbG9hZGluZ0R1cmF0aW9uKSAqIDk5OyAvLyDQktGW0LQgMSUg0LTQviAxMDAlXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCe0LHQvNC10LbRg9GU0LzQviDQv9GA0L7Qs9GA0LXRgSDQtNC+IDEwMCVcbiAgICAgICAgICAgIGlmIChwcm9ncmVzcyA+PSB0YXJnZXRQcm9ncmVzcykge1xuICAgICAgICAgICAgICAgIHByb2dyZXNzID0gdGFyZ2V0UHJvZ3Jlc3M7XG4gICAgICAgICAgICAgICAgaXNMb2FkaW5nQ29tcGxldGUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjdXJyZW50UHJvZ3Jlc3MgPSBwcm9ncmVzcztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0J7QvdC+0LLQu9GO0ZTQvNC+INCy0ZbQtNC+0LHRgNCw0LbQtdC90L3Rj1xuICAgICAgICAgICAgZHJhd1Byb2dyZXNzQmFyKHByb2dyZXNzKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0J7QvdC+0LLQu9GO0ZTQvNC+INCy0ZbQtNGB0L7RgtC60LggKNGC0ZbQu9GM0LrQuCDRhtGW0LvRliDRh9C40YHQu9CwKVxuICAgICAgICAgICAgY29uc3QgcGVyY2VudCA9IE1hdGguZmxvb3IocHJvZ3Jlc3MpO1xuICAgICAgICAgICAgcGVyY2VudEVsZW1lbnQudGV4dENvbnRlbnQgPSBwZXJjZW50ICsgJyUnO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQn9GA0L7QtNC+0LLQttGD0ZTQvNC+INCw0L3RltC80LDRhtGW0Y4g0LTQviDQt9Cw0LLQtdGA0YjQtdC90L3RjyDQt9Cw0LLQsNC90YLQsNC20LXQvdC90Y9cbiAgICAgICAgICAgIGlmICghaXNMb2FkaW5nQ29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICBhbmltYXRpb25JZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGVQcm9ncmVzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vINCG0L3RltGG0ZbQsNC70ZbQt9GD0ZTQvNC+INGA0L7Qt9C80ZbRgNC4IGNhbnZhc1xuICAgICAgICByZXNpemVDYW52YXMoKTtcbiAgICAgICAgXG4gICAgICAgIC8vINCe0LHRgNC+0LHQutCwINC30LzRltC90Lgg0YDQvtC30LzRltGA0YMg0LLRltC60L3QsFxuICAgICAgICBsZXQgcmVzaXplVGltZW91dDtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChyZXNpemVUaW1lb3V0KTtcbiAgICAgICAgICAgIHJlc2l6ZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICByZXNpemVDYW52YXMoKTtcbiAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgLy8g0IbQvdGW0YbRltCw0LvRltC30LDRhtGW0Y8g0LDQvdGW0LzQsNGG0ZbRlyDQv9C+0Y/QstC4INGW0LrQvtC90L7QulxuICAgICAgICBpbml0SWNvbnNBbmltYXRpb24obG9hZGluZ0R1cmF0aW9uKTtcbiAgICAgICAgXG4gICAgICAgIC8vINCX0LDQv9GD0YHQutCw0ZTQvNC+INCw0L3RltC80LDRhtGW0Y4g0Lcg0L3QtdCy0LXQu9C40LrQvtGOINC30LDRgtGA0LjQvNC60L7RjiDQtNC70Y8g0LrQvtGA0LXQutGC0L3QvtCz0L4g0YDQvtC30YDQsNGF0YPQvdC60YMg0YDQvtC30LzRltGA0ZbQslxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICByZXNpemVDYW52YXMoKTtcbiAgICAgICAgICAgICAgICBzdGFydFRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZVByb2dyZXNzKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8g0JDQvdGW0LzQsNGG0ZbRjyDQv9C+0Y/QstC4INGW0LrQvtC90L7QuiDQv9C+INGH0LXRgNC30ZYg0L/RltC0INGH0LDRgSDQt9Cw0LLQsNC90YLQsNC20LXQvdC90Y9cbiAgICBmdW5jdGlvbiBpbml0SWNvbnNBbmltYXRpb24oZHVyYXRpb24pIHtcbiAgICAgICAgY29uc3QgaWNvbnMgPSBbXG4gICAgICAgICAgICAnLndlbGNvbWVfX2RlY29yLWl0ZW0uX2dhbWVwYWQnLFxuICAgICAgICAgICAgJy53ZWxjb21lX19kZWNvci1pdGVtLl9jaGlwJyxcbiAgICAgICAgICAgICcud2VsY29tZV9fZGVjb3ItaXRlbS5fY29pbicsXG4gICAgICAgICAgICAnLndlbGNvbWVfX2RlY29yLWl0ZW0uX2JhbGwnLFxuICAgICAgICAgICAgJy53ZWxjb21lX19kZWNvci1pdGVtLl9jdXAnLFxuICAgICAgICAgICAgJy53ZWxjb21lX19kZWNvci1pdGVtLl9jdWJlJyxcbiAgICAgICAgICAgICcud2VsY29tZV9fZGVjb3ItaXRlbS5fZ2xvYmUnXG4gICAgICAgIF07XG5cbiAgICAgICAgLy8g0JfQsdC10YDRltCz0LDRlNC80L4g0L7RgNC40LPRltC90LDQu9GM0L3RliB0cmFuc2Zvcm0g0LTQu9GPINC60L7QttC90L7RlyDRltC60L7QvdC60LhcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxUcmFuc2Zvcm1zID0gbmV3IE1hcCgpO1xuXG4gICAgICAgIC8vINCh0L/QvtGH0LDRgtC60YMg0L/RgNC40YXQvtCy0YPRlNC80L4g0LLRgdGWINGW0LrQvtC90LrQuFxuICAgICAgICBpY29ucy5mb3JFYWNoKHNlbGVjdG9yID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICAgICAgICAgIGlmIChpY29uKSB7XG4gICAgICAgICAgICAgICAgLy8g0JfQsdC10YDRltCz0LDRlNC80L4g0L7RgNC40LPRltC90LDQu9GM0L3QuNC5IHRyYW5zZm9ybSAo0Y/QutGJ0L4g0ZQgcm90YXRlKVxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShpY29uKTtcbiAgICAgICAgICAgICAgICBjb25zdCBvcmlnaW5hbFRyYW5zZm9ybSA9IGNvbXB1dGVkU3R5bGUudHJhbnNmb3JtO1xuICAgICAgICAgICAgICAgIG9yaWdpbmFsVHJhbnNmb3Jtcy5zZXQoc2VsZWN0b3IsIG9yaWdpbmFsVHJhbnNmb3JtKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyDQktGB0YLQsNC90L7QstC70Y7RlNC80L4g0L/QvtGH0LDRgtC60L7QstC40Lkg0YHRgtCw0L1cbiAgICAgICAgICAgICAgICBpY29uLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgICAgICAgICAgICAgaWNvbi5zdHlsZS50cmFuc2l0aW9uID0gJ29wYWNpdHkgMC40cyBlYXNlLCB0cmFuc2Zvcm0gMC40cyBlYXNlJztcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyDQktGB0YLQsNC90L7QstC70Y7RlNC80L4gc2NhbGUg0Lcg0LfQsdC10YDQtdC20LXQvdC90Y/QvCByb3RhdGVcbiAgICAgICAgICAgICAgICBpZiAob3JpZ2luYWxUcmFuc2Zvcm0gJiYgb3JpZ2luYWxUcmFuc2Zvcm0gIT09ICdub25lJykge1xuICAgICAgICAgICAgICAgICAgICBpY29uLnN0eWxlLnRyYW5zZm9ybSA9IG9yaWdpbmFsVHJhbnNmb3JtICsgJyBzY2FsZSgwLjUpJztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpY29uLnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZSgwLjUpJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vINCg0L7Qt9GA0LDRhdC+0LLRg9GU0LzQviDRltC90YLQtdGA0LLQsNC7INC80ZbQtiDQv9C+0Y/QstC+0Y4g0ZbQutC+0L3QvtC6XG4gICAgICAgIGNvbnN0IGljb25Db3VudCA9IGljb25zLmxlbmd0aDtcbiAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBkdXJhdGlvbiAvIGljb25Db3VudDsgLy8g0KDRltCy0L3QvtC80ZbRgNC90L4g0YDQvtC30L/QvtC00ZbQu9GP0ZTQvNC+INC/0L4g0YfQsNGB0YNcblxuICAgICAgICAvLyDQn9C+0LrQsNC30YPRlNC80L4g0ZbQutC+0L3QutC4INC/0L4g0YfQtdGA0LfRllxuICAgICAgICBpY29ucy5mb3JFYWNoKChzZWxlY3RvciwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICAgICAgICAgICAgICBpZiAoaWNvbikge1xuICAgICAgICAgICAgICAgICAgICBpY29uLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgICAgICAgICAgICAgIC8vINCS0ZbQtNC90L7QstC70Y7RlNC80L4g0L7RgNC40LPRltC90LDQu9GM0L3QuNC5IHRyYW5zZm9ybVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvcmlnaW5hbFRyYW5zZm9ybSA9IG9yaWdpbmFsVHJhbnNmb3Jtcy5nZXQoc2VsZWN0b3IpO1xuICAgICAgICAgICAgICAgICAgICBpZiAob3JpZ2luYWxUcmFuc2Zvcm0gJiYgb3JpZ2luYWxUcmFuc2Zvcm0gIT09ICdub25lJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbi5zdHlsZS50cmFuc2Zvcm0gPSBvcmlnaW5hbFRyYW5zZm9ybTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb24uc3R5bGUudHJhbnNmb3JtID0gJ3NjYWxlKDEpJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIGluZGV4ICogaW50ZXJ2YWwpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyDQl9C80ZbQvdC90ZYg0LTQu9GPINC30LHQtdGA0ZbQs9Cw0L3QvdGPINC/0L7RgdC40LvQsNC90Ywg0L3QsCBjYW52YXMg0YLQsCDQtNCw0L3RliDQtNC70Y8g0L7QsdGA0L7QsdC90LjQutGW0LIg0L/QvtC00ZbQuVxuICAgIGxldCBwYXJ0aWNpcGF0ZUNhbnZhcyA9IG51bGw7XG4gICAgbGV0IHBhcnRpY2lwYXRlRGVlcnMgPSBbXTtcbiAgICBsZXQgcGFydGljaXBhdGVEZWVyV2lkdGggPSAwO1xuICAgIGxldCBwYXJ0aWNpcGF0ZURlZXJIZWlnaHQgPSAwO1xuICAgIGxldCBjYW52YXNDbGlja0hhbmRsZXJzQXR0YWNoZWQgPSBmYWxzZTtcbiAgICBcbiAgICAvLyDQl9C80ZbQvdC90ZYg0LTQu9GPINCy0ZbQtNGB0YLQtdC20LXQvdC90Y8gdG91Y2gg0L/QvtC00ZbQuVxuICAgIGxldCB0b3VjaFN0YXJ0WCA9IDA7XG4gICAgbGV0IHRvdWNoU3RhcnRZID0gMDtcblxuICAgIC8vINCe0LHRgNC+0LHQvdC40Log0LrQu9GW0LrRgyDQv9C+IGNhbnZhc1xuICAgIGZ1bmN0aW9uIGhhbmRsZVBhcnRpY2lwYXRlQ2FudmFzQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgaWYgKCFwYXJ0aWNpcGF0ZUNhbnZhcyB8fCAhcGFydGljaXBhdGVEZWVycy5sZW5ndGgpIHJldHVybjtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHJlY3QgPSBwYXJ0aWNpcGF0ZUNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3Qgc2NhbGVYID0gcGFydGljaXBhdGVDYW52YXMud2lkdGggLyByZWN0LndpZHRoO1xuICAgICAgICBjb25zdCBzY2FsZVkgPSBwYXJ0aWNpcGF0ZUNhbnZhcy5oZWlnaHQgLyByZWN0LmhlaWdodDtcbiAgICAgICAgXG4gICAgICAgIC8vINCe0YLRgNC40LzRg9GU0LzQviDQutC+0L7RgNC00LjQvdCw0YLQuCDQutC70ZbQutGDINCy0ZbQtNC90L7RgdC90L4gY2FudmFzXG4gICAgICAgIGNvbnN0IGNsaWVudFggPSBldmVudC5jbGllbnRYO1xuICAgICAgICBjb25zdCBjbGllbnRZID0gZXZlbnQuY2xpZW50WTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGNsaWNrWCA9IChjbGllbnRYIC0gcmVjdC5sZWZ0KSAqIHNjYWxlWDtcbiAgICAgICAgY29uc3QgY2xpY2tZID0gKGNsaWVudFkgLSByZWN0LnRvcCkgKiBzY2FsZVk7XG4gICAgICAgIFxuICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNGP0ZTQvNC+INGH0Lgg0LrQu9GW0Log0L/QvtGC0YDQsNC/0LjQsiDQvdCwINGP0LrQvtCz0L7RgdGMINC+0LvQtdC90Y9cbiAgICAgICAgcGFydGljaXBhdGVEZWVycy5mb3JFYWNoKGRlZXIgPT4ge1xuICAgICAgICAgICAgaWYgKGRlZXIuaXNQb2ludEluc2lkZShjbGlja1gsIGNsaWNrWSwgcGFydGljaXBhdGVEZWVyV2lkdGgsIHBhcnRpY2lwYXRlRGVlckhlaWdodCkpIHtcbiAgICAgICAgICAgICAgICBkZWVyLmhhbmRsZUNsaWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICAvLyDQntCx0YDQvtCx0L3QuNC6IHRvdWNoc3RhcnQg0LTQu9GPINCy0ZbQtNGB0YLQtdC20LXQvdC90Y8g0L/QvtGH0LDRgtC60YMg0LTQvtGC0LjQutGDXG4gICAgZnVuY3Rpb24gaGFuZGxlUGFydGljaXBhdGVDYW52YXNUb3VjaFN0YXJ0KGV2ZW50KSB7XG4gICAgICAgIGlmICghcGFydGljaXBhdGVDYW52YXMgfHwgIXBhcnRpY2lwYXRlRGVlcnMubGVuZ3RoKSByZXR1cm47XG4gICAgICAgIFxuICAgICAgICBjb25zdCB0b3VjaCA9IGV2ZW50LnRvdWNoZXNbMF07XG4gICAgICAgIGlmICghdG91Y2gpIHJldHVybjtcbiAgICAgICAgXG4gICAgICAgIC8vINCX0LHQtdGA0ZbQs9Cw0ZTQvNC+INC60L7QvtGA0LTQuNC90LDRgtC4INC/0L7Rh9Cw0YLQutGDINC00L7RgtC40LrRg1xuICAgICAgICB0b3VjaFN0YXJ0WCA9IHRvdWNoLmNsaWVudFg7XG4gICAgICAgIHRvdWNoU3RhcnRZID0gdG91Y2guY2xpZW50WTtcbiAgICB9XG4gICAgXG4gICAgLy8g0J7QsdGA0L7QsdC90LjQuiB0b3VjaGVuZCDQtNC70Y8g0LLQuNC30L3QsNGH0LXQvdC90Y8g0YfQuCDRhtC1INGC0LDQvyDRh9C4INGB0LrRgNC+0LtcbiAgICBmdW5jdGlvbiBoYW5kbGVQYXJ0aWNpcGF0ZUNhbnZhc1RvdWNoRW5kKGV2ZW50KSB7XG4gICAgICAgIGlmICghcGFydGljaXBhdGVDYW52YXMgfHwgIXBhcnRpY2lwYXRlRGVlcnMubGVuZ3RoKSByZXR1cm47XG4gICAgICAgIFxuICAgICAgICBjb25zdCB0b3VjaCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdO1xuICAgICAgICBpZiAoIXRvdWNoKSByZXR1cm47XG4gICAgICAgIFxuICAgICAgICAvLyDQoNC+0LfRgNCw0YXQvtCy0YPRlNC80L4g0LLRltC00YHRgtCw0L3RjCDQvNGW0LYgdG91Y2hzdGFydCDRgtCwIHRvdWNoZW5kXG4gICAgICAgIGNvbnN0IGRlbHRhWCA9IE1hdGguYWJzKHRvdWNoLmNsaWVudFggLSB0b3VjaFN0YXJ0WCk7XG4gICAgICAgIGNvbnN0IGRlbHRhWSA9IE1hdGguYWJzKHRvdWNoLmNsaWVudFkgLSB0b3VjaFN0YXJ0WSk7XG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KGRlbHRhWCAqIGRlbHRhWCArIGRlbHRhWSAqIGRlbHRhWSk7XG4gICAgICAgIFxuICAgICAgICAvLyDQr9C60YnQviDQstGW0LTRgdGC0LDQvdGMINCx0ZbQu9GM0YjQtSAxMHB4IC0g0YbQtSDRgdC60YDQvtC7LCDQvdC1INC+0LHRgNC+0LHQu9GP0ZTQvNC+XG4gICAgICAgIGlmIChkaXN0YW5jZSA+IDEwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vINCv0LrRidC+INCy0ZbQtNGB0YLQsNC90Ywg0LzQtdC90YjQtSDQsNCx0L4g0LTQvtGA0ZbQstC90Y7RlCAxMHB4IC0g0YbQtSDRgtCw0L8sINC+0LHRgNC+0LHQu9GP0ZTQvNC+XG4gICAgICAgIGNvbnN0IHJlY3QgPSBwYXJ0aWNpcGF0ZUNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3Qgc2NhbGVYID0gcGFydGljaXBhdGVDYW52YXMud2lkdGggLyByZWN0LndpZHRoO1xuICAgICAgICBjb25zdCBzY2FsZVkgPSBwYXJ0aWNpcGF0ZUNhbnZhcy5oZWlnaHQgLyByZWN0LmhlaWdodDtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGNsaWNrWCA9ICh0b3VjaC5jbGllbnRYIC0gcmVjdC5sZWZ0KSAqIHNjYWxlWDtcbiAgICAgICAgY29uc3QgY2xpY2tZID0gKHRvdWNoLmNsaWVudFkgLSByZWN0LnRvcCkgKiBzY2FsZVk7XG4gICAgICAgIFxuICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNGP0ZTQvNC+INGH0Lgg0YLQsNC/INC/0L7RgtGA0LDQv9C40LIg0L3QsCDRj9C60L7Qs9C+0YHRjCDQvtC70LXQvdGPXG4gICAgICAgIHBhcnRpY2lwYXRlRGVlcnMuZm9yRWFjaChkZWVyID0+IHtcbiAgICAgICAgICAgIGlmIChkZWVyLmlzUG9pbnRJbnNpZGUoY2xpY2tYLCBjbGlja1ksIHBhcnRpY2lwYXRlRGVlcldpZHRoLCBwYXJ0aWNpcGF0ZURlZXJIZWlnaHQpKSB7XG4gICAgICAgICAgICAgICAgZGVlci5oYW5kbGVDbGljaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0UGFydGljaXBhdGVDYW52YXMoKSB7XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwYXJ0aWNpcGF0ZUNhbnZhcycpO1xuICAgICAgICBpZiAoIWNhbnZhcykgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICBcbiAgICAgICAgLy8g0J7QvdC+0LLQu9GO0ZTQvNC+INC/0L7RgdC40LvQsNC90L3RjyDQvdCwIGNhbnZhc1xuICAgICAgICBwYXJ0aWNpcGF0ZUNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgXG4gICAgICAgIC8vINCS0LjQt9C90LDRh9Cw0ZTQvNC+INGH0Lgg0LXQutGA0LDQvSA8PSAxMDUwcHhcbiAgICAgICAgY29uc3QgaXNNb2JpbGUgPSB3aW5kb3cuaW5uZXJXaWR0aCA8PSAxMDUwO1xuICAgICAgICBcbiAgICAgICAgLy8g0JrQvtC90YHRgtCw0L3RgtC4INC00LvRjyDRgNC+0LfQvNGW0YDRltCyINGC0LAg0L/QvtC30LjRhtGW0LlcbiAgICAgICAgY29uc3QgQ0FOVkFTX1dJRFRIID0gaXNNb2JpbGUgPyA3NjggOiAxMzY2O1xuICAgICAgICBjb25zdCBDQU5WQVNfSEVJR0hUID0gaXNNb2JpbGUgPyA0NzAgOiA1MDA7XG4gICAgICAgIFxuICAgICAgICAvLyDQktGB0YLQsNC90L7QstC70Y7RlNC80L4g0YDQvtC30LzRltGA0LggY2FudmFzXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IENBTlZBU19XSURUSDtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IENBTlZBU19IRUlHSFQ7XG4gICAgICAgIFxuICAgICAgICAvLyDQpNGW0LrRgdC+0LLQsNC90ZYg0YDQvtC30LzRltGA0Lgg0LTQtdGA0LXQstCwICjQvdC1INC80LDRgdGI0YLQsNCx0YPRjtGC0YzRgdGPKVxuICAgICAgICBjb25zdCBUUkVFX1dJRFRIID0gMTc1O1xuICAgICAgICBjb25zdCBUUkVFX0hFSUdIVCA9IDE2NztcbiAgICAgICAgXG4gICAgICAgIC8vINCf0LDRgNCw0LzQtdGC0YDQuCDRgdC/0YDQsNC50YIt0LvQuNGB0YLQsFxuICAgICAgICBjb25zdCBGUkFNRVNfUEVSX1JPVyA9IDU7IC8vIDUg0LrQsNC00YDRltCyINCyINGA0Y/QtNC60YNcbiAgICAgICAgY29uc3QgVE9UQUxfUk9XUyA9IDI7IC8vIDIg0YDRj9C00LhcbiAgICAgICAgY29uc3QgU1BSSVRFX1NIRUVUX1dJRFRIID0gMTEwMDsgLy8g0KDQtdCw0LvRjNC90LAg0YjQuNGA0LjQvdCwINGB0L/RgNCw0LnRgi3Qu9C40YHRgtCwXG4gICAgICAgIGNvbnN0IFNQUklURV9TSEVFVF9IRUlHSFQgPSA0Njg7IC8vINCg0LXQsNC70YzQvdCwINCy0LjRgdC+0YLQsCDRgdC/0YDQsNC50YIt0LvQuNGB0YLQsFxuICAgICAgICBcbiAgICAgICAgLy8g0KDQvtC30LzRltGA0Lgg0L7QtNC90L7Qs9C+INC60LDQtNGA0YMg0LIg0YHQv9GA0LDQudGCLdC70LjRgdGC0ZZcbiAgICAgICAgY29uc3QgRlJBTUVfV0lEVEggPSBNYXRoLmZsb29yKFNQUklURV9TSEVFVF9XSURUSCAvIEZSQU1FU19QRVJfUk9XKTsgLy8gMjIwcHhcbiAgICAgICAgY29uc3QgRlJBTUVfSEVJR0hUID0gTWF0aC5mbG9vcihTUFJJVEVfU0hFRVRfSEVJR0hUIC8gVE9UQUxfUk9XUyk7IC8vIDIzNHB4XG4gICAgICAgIFxuICAgICAgICAvLyDQpNGW0LrRgdC+0LLQsNC90ZYg0YDQvtC30LzRltGA0Lgg0L7Qu9C10L3RjyDQvdCwIGNhbnZhcyAo0L3QtSDQvNCw0YHRiNGC0LDQsdGD0Y7RgtGM0YHRjylcbiAgICAgICAgY29uc3QgREVFUl9TQ0FMRSA9IDAuNTsgLy8g0JzQsNGB0YjRgtCw0LEg0LTQu9GPINCy0ZbQtNC+0LHRgNCw0LbQtdC90L3RjyDQvdCwIGNhbnZhc1xuICAgICAgICBjb25zdCBERUVSX1dJRFRIID0gTWF0aC5mbG9vcihGUkFNRV9XSURUSCAqIERFRVJfU0NBTEUpOyBcbiAgICAgICAgY29uc3QgREVFUl9IRUlHSFQgPSBNYXRoLmZsb29yKEZSQU1FX0hFSUdIVCAqIERFRVJfU0NBTEUpO1xuXG4gICAgICAgIC8vINCf0L7Qt9C40YbRltGXINC10LvQtdC80LXQvdGC0ZbQslxuICAgICAgICBsZXQgdHJlZVgsIHRyZWVZO1xuICAgICAgICBpZiAoaXNNb2JpbGUpIHtcbiAgICAgICAgICAgIHRyZWVYID0gMjM1O1xuICAgICAgICAgICAgdHJlZVkgPSBDQU5WQVNfSEVJR0hUIC0gMTUyIC0gVFJFRV9IRUlHSFQ7IFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8g0JTQtdGB0LrRgtC+0L/QvdCwINCy0LXRgNGB0ZbRj1xuICAgICAgICAgICAgdHJlZVggPSBDQU5WQVNfV0lEVEggLyAyIC0gMzAwOyBcbiAgICAgICAgICAgIHRyZWVZID0gQ0FOVkFTX0hFSUdIVCAvIDIgLSBUUkVFX0hFSUdIVCAvIDI7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vINCf0LDRgNCw0LzQtdGC0YDQuCDQsNC90ZbQvNCw0YbRltGXICjRgdC/0ZbQu9GM0L3RliDQtNC70Y8g0LLRgdGW0YUg0L7Qu9C10L3RltCyKVxuICAgICAgICBjb25zdCBGUkFNRV9ERUxBWSA9IDEyOyAvLyDQl9Cw0YLRgNC40LzQutCwINC80ZbQtiDQutCw0LTRgNCw0LzQuFxuICAgICAgICBjb25zdCBXQUxLSU5HX0ZSQU1FUyA9IDU7IC8vINCa0ZbQu9GM0LrRltGB0YLRjCDQutCw0LTRgNGW0LIg0LTQu9GPINGF0L7QtNGM0LHQuFxuICAgICAgICBjb25zdCBGUkFNRV9SRVBFQVQgPSAyOyAvLyDQmtGW0LvRjNC60ZbRgdGC0Ywg0YDQsNC30ZbQsiDQv9C+0LrQsNC30YPQstCw0YLQuCDQutC+0LbQtdC9INC60LDQtNGAXG4gICAgICAgIGNvbnN0IElETEVfTUlOX0RVUkFUSU9OID0gNjA7IC8vINCc0ZbQvdGW0LzQsNC70YzQvdCwINGC0YDQuNCy0LDQu9GW0YHRgtGMINC30YPQv9C40L3QutC4ICgxINGB0LXQutGD0L3QtNCwINC/0YDQuCA2MGZwcylcbiAgICAgICAgY29uc3QgSURMRV9NQVhfRFVSQVRJT04gPSAxODA7IC8vINCc0LDQutGB0LjQvNCw0LvRjNC90LAg0YLRgNC40LLQsNC70ZbRgdGC0Ywg0LfRg9C/0LjQvdC60LggKDMg0YHQtdC60YPQvdC00Lgg0L/RgNC4IDYwZnBzKVxuXG4gICAgICAgIC8vINCh0YLQsNC90Lgg0LDQvdGW0LzQsNGG0ZbRlyDQvtC70LXQvdGPXG4gICAgICAgIGNvbnN0IERFRVJfU1RBVEUgPSB7XG4gICAgICAgICAgICBXQUxLSU5HOiAnd2Fsa2luZycsXG4gICAgICAgICAgICBJRExFOiAnaWRsZScsXG4gICAgICAgICAgICBQRVRUSU5HOiAncGV0dGluZydcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIC8vINCf0LDRgNCw0LzQtdGC0YDQuCDQtNC70Y8g0YHRgtCw0L3RgyBwZXR0aW5nXG4gICAgICAgIGNvbnN0IFBFVFRJTkdfTUlOX0RVUkFUSU9OID0gNjA7IC8vIDEg0YHQtdC60YPQvdC00LAg0L/RgNC4IDYwZnBzXG4gICAgICAgIGNvbnN0IFBFVFRJTkdfTUFYX0RVUkFUSU9OID0gMTgwOyAvLyAzINGB0LXQutGD0L3QtNC4INC/0YDQuCA2MGZwc1xuICAgICAgICBjb25zdCBIRUFSVF9TSVpFX01JTiA9IDg7XG4gICAgICAgIGNvbnN0IEhFQVJUX1NJWkVfTUFYID0gMTI7XG4gICAgICAgIGNvbnN0IEhFQVJUX1JJU0VfRElTVEFOQ0UgPSAzMDsgLy8g0JLRltC00YHRgtCw0L3RjCDQv9GW0LTQudC+0LzRgyDRgdC10YDQtNC10YfQutCwXG4gICAgICAgIGNvbnN0IEhFQVJUX1NQQVdOX0lOVEVSVkFMID0gMjA7IC8vINCG0L3RgtC10YDQstCw0Lsg0L/QvtGP0LLQuCDRgdC10YDQtNC10YfQvtC6ICjQutCw0LTRgNC4KVxuICAgICAgICBcbiAgICAgICAgbGV0IGFuaW1hdGlvbklkID0gbnVsbDtcbiAgICAgICAgbGV0IGZyYW1lQ291bnRlciA9IDA7IC8vINCT0LvQvtCx0LDQu9GM0L3QuNC5INC70ZbRh9C40LvRjNC90LjQuiDQutCw0LTRgNGW0LIg0LTQu9GPINGB0LjQvdGF0YDQvtC90ZbQt9Cw0YbRltGXXG5cbiAgICAgICAgLy8g0JrQu9Cw0YEg0LTQu9GPINGB0LXRgNC00LXRh9C60LBcbiAgICAgICAgY2xhc3MgSGVhcnQge1xuICAgICAgICAgICAgY29uc3RydWN0b3IoeCwgeSwgc2l6ZSwgaGVhcnRJbWFnZSkge1xuICAgICAgICAgICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgICAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xuICAgICAgICAgICAgICAgIHRoaXMub3BhY2l0eSA9IDE7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2FsZSA9IDE7XG4gICAgICAgICAgICAgICAgdGhpcy5yaXNlU3BlZWQgPSAwLjU7IC8vINCo0LLQuNC00LrRltGB0YLRjCDQv9GW0LTQudC+0LzRg1xuICAgICAgICAgICAgICAgIHRoaXMuaGVhcnRJbWFnZSA9IGhlYXJ0SW1hZ2U7IC8vINCX0L7QsdGA0LDQttC10L3QvdGPINGB0LXRgNC00LXRh9C60LBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdXBkYXRlKCkge1xuICAgICAgICAgICAgICAgIHRoaXMueSAtPSB0aGlzLnJpc2VTcGVlZDtcbiAgICAgICAgICAgICAgICB0aGlzLm9wYWNpdHkgLT0gMC4wMjtcbiAgICAgICAgICAgICAgICB0aGlzLnNjYWxlICs9IDAuMDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlzVmlzaWJsZSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5vcGFjaXR5ID4gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZHJhdyhjdHgpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNWaXNpYmxlKCkgfHwgIXRoaXMuaGVhcnRJbWFnZSB8fCAhdGhpcy5oZWFydEltYWdlLmNvbXBsZXRlKSByZXR1cm47XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY3R4LnNhdmUoKTtcbiAgICAgICAgICAgICAgICBjdHguZ2xvYmFsQWxwaGEgPSB0aGlzLm9wYWNpdHk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8g0JzQsNC70Y7RlNC80L4g0LfQvtCx0YDQsNC20LXQvdC90Y8g0YHQtdGA0LTQtdGH0LrQsCDQtyDQvNCw0YHRiNGC0LDQsdGD0LLQsNC90L3Rj9C8XG4gICAgICAgICAgICAgICAgY29uc3QgZHJhd1NpemUgPSB0aGlzLnNpemUgKiB0aGlzLnNjYWxlO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRyYXdYID0gdGhpcy54IC0gZHJhd1NpemUgLyAyO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRyYXdZID0gdGhpcy55IC0gZHJhd1NpemUgLyAyO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGVhcnRJbWFnZSxcbiAgICAgICAgICAgICAgICAgICAgZHJhd1gsIGRyYXdZLCBkcmF3U2l6ZSwgZHJhd1NpemVcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGN0eC5yZXN0b3JlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyDQmtC70LDRgSDQtNC70Y8g0L7Qu9C10L3Rj1xuICAgICAgICBjbGFzcyBEZWVyIHtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yKHN0YXJ0WCwgc3RhcnRZLCBtaW5YLCBtYXhYLCBzcGVlZCA9IDAuNSwgekluZGV4ID0gMCwgaGVhcnRJbWFnZSA9IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnggPSBzdGFydFg7XG4gICAgICAgICAgICAgICAgdGhpcy55ID0gc3RhcnRZO1xuICAgICAgICAgICAgICAgIHRoaXMubWluWCA9IG1pblg7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXhYID0gbWF4WDtcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVkID0gc3BlZWQ7XG4gICAgICAgICAgICAgICAgdGhpcy56SW5kZXggPSB6SW5kZXg7IC8vINCf0L7RgNGP0LTQvtC6INC80LDQu9GO0LLQsNC90L3RjyBcbiAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IC0xOyAvLyAtMSA9INCy0LvRltCy0L4sIDEgPSDQstC/0YDQsNCy0L5cbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0gREVFUl9TVEFURS5XQUxLSU5HO1xuICAgICAgICAgICAgICAgIHRoaXMuZnJhbWVJbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5mcmFtZVJlcGVhdENvdW50ZXIgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuaWRsZVRpbWVyID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLmlkbGVEdXJhdGlvbiA9IDA7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8g0JLQu9Cw0YHRgtC40LLQvtGB0YLRliDQtNC70Y8g0YHRgtCw0L3RgyBwZXR0aW5nXG4gICAgICAgICAgICAgICAgdGhpcy5wZXR0aW5nVGltZXIgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMucGV0dGluZ0R1cmF0aW9uID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLnByZXZpb3VzU3RhdGUgPSBudWxsOyAvLyDQl9Cx0LXRgNGW0LPQsNGU0LzQviDQv9C+0L/QtdGA0LXQtNC90ZbQuSDRgdGC0LDQvVxuICAgICAgICAgICAgICAgIHRoaXMuc2F2ZWRYID0gMDsgLy8g0JfQsdC10YDQtdC20LXQvdGWINC60L7QvtGA0LTQuNC90LDRgtC4INC/0YDQuCDQv9C10YDQtdGF0L7QtNGWINCyIHBldHRpbmdcbiAgICAgICAgICAgICAgICB0aGlzLnNhdmVkWSA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5oZWFydHMgPSBbXTsgLy8g0JzQsNGB0LjQsiDRgdC10YDQtNC10YfQvtC6XG4gICAgICAgICAgICAgICAgdGhpcy5oZWFydFNwYXduQ291bnRlciA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5oZWFydEltYWdlID0gaGVhcnRJbWFnZTsgLy8g0JfQvtCx0YDQsNC20LXQvdC90Y8g0YHQtdGA0LTQtdGH0LrQsFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNC60LAg0YfQuCDQutC70ZbQuiDQv9C+0YLRgNCw0L/QuNCyINC90LAg0L7Qu9C10L3Rj1xuICAgICAgICAgICAgaXNQb2ludEluc2lkZShjbGlja1gsIGNsaWNrWSwgZGVlcldpZHRoLCBkZWVySGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNsaWNrWCA+PSB0aGlzLnggJiYgXG4gICAgICAgICAgICAgICAgICAgICAgIGNsaWNrWCA8PSB0aGlzLnggKyBkZWVyV2lkdGggJiYgXG4gICAgICAgICAgICAgICAgICAgICAgIGNsaWNrWSA+PSB0aGlzLnkgJiYgXG4gICAgICAgICAgICAgICAgICAgICAgIGNsaWNrWSA8PSB0aGlzLnkgKyBkZWVySGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQntCx0YDQvtCx0LrQsCDQutC70ZbQutGDINC/0L4g0L7Qu9C10L3RjlxuICAgICAgICAgICAgaGFuZGxlQ2xpY2soKSB7XG4gICAgICAgICAgICAgICAgLy8g0J/QtdGA0LXRhdC+0LTQuNC80L4g0LIg0YHRgtCw0L0gcGV0dGluZyDQsNCx0L4g0L/QvtC90L7QstC70Y7RlNC80L4g0YLQsNC50LzQtdGAXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUgIT09IERFRVJfU1RBVEUuUEVUVElORykge1xuICAgICAgICAgICAgICAgICAgICAvLyDQl9Cx0LXRgNGW0LPQsNGU0LzQviDQv9C+0L/QtdGA0LXQtNC90ZbQuSDRgdGC0LDQvSDRgtCwINC60L7QvtGA0LTQuNC90LDRgtC4XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJldmlvdXNTdGF0ZSA9IHRoaXMuc3RhdGU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2F2ZWRYID0gdGhpcy54O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNhdmVkWSA9IHRoaXMueTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IERFRVJfU1RBVEUuUEVUVElORztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wZXR0aW5nVGltZXIgPSAwO1xuICAgICAgICAgICAgICAgICAgICAvLyDQntGH0LjRidCw0ZTQvNC+INGB0YLQsNGA0ZYg0YHQtdGA0LTQtdGH0LrQsFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhlYXJ0cyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhlYXJ0U3Bhd25Db3VudGVyID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8g0J/QvtC90L7QstC70Y7RlNC80L4g0YLQsNC50LzQtdGAIHBldHRpbmcgKDEtMyDRgdC10LrRg9C90LTQuCkg0YLQsCDRgdC60LjQtNCw0ZTQvNC+INC/0L7RgtC+0YfQvdC40Lkg0YLQsNC50LzQtdGAXG4gICAgICAgICAgICAgICAgdGhpcy5wZXR0aW5nRHVyYXRpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoUEVUVElOR19NQVhfRFVSQVRJT04gLSBQRVRUSU5HX01JTl9EVVJBVElPTiArIDEpKSArIFBFVFRJTkdfTUlOX0RVUkFUSU9OO1xuICAgICAgICAgICAgICAgIHRoaXMucGV0dGluZ1RpbWVyID0gMDsgLy8g0KHQutC40LTQsNGU0LzQviDRgtCw0LnQvNC10YAg0L/RgNC4INC60L7QttC90L7QvNGDINC60LvRltC60YNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0KHRgtCy0L7RgNC10L3QvdGPINC90L7QstC+0LPQviDRgdC10YDQtNC10YfQutCwXG4gICAgICAgICAgICBzcGF3bkhlYXJ0KCkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5oZWFydEltYWdlKSByZXR1cm47IC8vINCv0LrRidC+INC30L7QsdGA0LDQttC10L3QvdGPINC90LUg0LfQsNCy0LDQvdGC0LDQttC10L3QtSwg0L3QtSDRgdGC0LLQvtGA0Y7RlNC80L4g0YHQtdGA0LTQtdGH0LrQvlxuICAgICAgICAgICAgICAgIGNvbnN0IHNpemUgPSBNYXRoLnJhbmRvbSgpICogKEhFQVJUX1NJWkVfTUFYIC0gSEVBUlRfU0laRV9NSU4pICsgSEVBUlRfU0laRV9NSU47XG4gICAgICAgICAgICAgICAgY29uc3Qgb2Zmc2V0WCA9IChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIERFRVJfV0lEVEg7IC8vINCS0LjQv9Cw0LTQutC+0LLQtSDQt9C80ZbRidC10L3QvdGPINC/0L4gWFxuICAgICAgICAgICAgICAgIGNvbnN0IGhlYXJ0WCA9IHRoaXMueCArIERFRVJfV0lEVEggLyAyICsgb2Zmc2V0WDtcbiAgICAgICAgICAgICAgICBjb25zdCBoZWFydFkgPSB0aGlzLnkgLSAxMDsgLy8g0KLRgNC+0YXQuCDQstC40YnQtSDQvtC70LXQvdGPXG4gICAgICAgICAgICAgICAgdGhpcy5oZWFydHMucHVzaChuZXcgSGVhcnQoaGVhcnRYLCBoZWFydFksIHNpemUsIHRoaXMuaGVhcnRJbWFnZSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBnZXRTcHJpdGVGcmFtZUluZGV4KCkge1xuICAgICAgICAgICAgICAgIC8vINCS0LXRgNGF0L3RltC5INGA0Y/QtNC+0LogKDApID0g0YDRg9GFINCy0LvRltCy0L4sINC90LjQttC90ZbQuSDRgNGP0LTQvtC6ICgxKSA9INGA0YPRhSDQstC/0YDQsNCy0L5cbiAgICAgICAgICAgICAgICBjb25zdCByb3cgPSB0aGlzLmRpcmVjdGlvbiA9PT0gLTEgPyAwIDogMTtcbiAgICAgICAgICAgICAgICBsZXQgY29sID0gMDtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlID09PSBERUVSX1NUQVRFLldBTEtJTkcpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g0JrQsNC00YDQuCDRhdC+0LTRjNCx0Lg6IDAsIDEsIDIsIDMsIDQgKNCy0YHRliA1INC60LDQtNGA0ZbQsilcbiAgICAgICAgICAgICAgICAgICAgY29sID0gdGhpcy5mcmFtZUluZGV4ICUgV0FMS0lOR19GUkFNRVM7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlID09PSBERUVSX1NUQVRFLlBFVFRJTkcpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g0JIg0YHRgtCw0L3RliBwZXR0aW5nINCy0LjQutC+0YDQuNGB0YLQvtCy0YPRlNC80L4g0LrQsNC00YAgMCAoaWRsZSDQutCw0LTRgClcbiAgICAgICAgICAgICAgICAgICAgY29sID0gMDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyDQodGC0LDQvSDQt9GD0L/QuNC90LrQuCAoSURMRSkgLSDQstC40LrQvtGA0LjRgdGC0L7QstGD0ZTQvNC+INC60LDQtNGAIDBcbiAgICAgICAgICAgICAgICAgICAgY29sID0gMDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4geyByb3csIGNvbCB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1cGRhdGUoc2hvdWxkVXBkYXRlRnJhbWUpIHtcbiAgICAgICAgICAgICAgICAvLyDQntC90L7QstC70Y7RlNC80L4g0LDQvdGW0LzQsNGG0ZbRjiDQutCw0LTRgNGW0LIg0Lcg0L/QvtCy0YLQvtGA0LXQvdC90Y/QvCDQtNC70Y8g0L/Qu9Cw0LLQvdC+0YHRgtGWXG4gICAgICAgICAgICAgICAgaWYgKHNob3VsZFVwZGF0ZUZyYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlID09PSBERUVSX1NUQVRFLldBTEtJTkcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZnJhbWVSZXBlYXRDb3VudGVyKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDQn9C+0LrQsNC30YPRlNC80L4g0LrQvtC20LXQvSDQutCw0LTRgCDQutGW0LvRjNC60LAg0YDQsNC30ZbQsiDQtNC70Y8g0L/Qu9Cw0LLQvdGW0YjQvtGXINCw0L3RltC80LDRhtGW0ZdcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmZyYW1lUmVwZWF0Q291bnRlciA+PSBGUkFNRV9SRVBFQVQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZyYW1lUmVwZWF0Q291bnRlciA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g0J/QvtGB0LvRltC00L7QstC90L4g0L/RgNC+0YXQvtC00LjQvNC+INGH0LXRgNC10Lcg0LLRgdGWINC60LDQtNGA0Lg6IDAsIDEsIDIsIDMsIDQsIDAsIDEsIDIsIDMsIDQuLi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZyYW1lSW5kZXggPSAodGhpcy5mcmFtZUluZGV4ICsgMSkgJSBXQUxLSU5HX0ZSQU1FUztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vINCb0L7Qs9GW0LrQsCDRgdGC0LDQvdGW0LIg0YLQsCDRgNGD0YXRg1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlID09PSBERUVSX1NUQVRFLlBFVFRJTkcpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g0JIg0YHRgtCw0L3RliBwZXR0aW5nINC+0LvQtdC90Ywg0L3QtSDRgNGD0YXQsNGU0YLRjNGB0Y9cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wZXR0aW5nVGltZXIrKztcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vINCh0YLQstC+0YDRjtGU0LzQviDRgdC10YDQtNC10YfQutCwINC3INGW0L3RgtC10YDQstCw0LvQvtC8XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGVhcnRTcGF3bkNvdW50ZXIrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaGVhcnRTcGF3bkNvdW50ZXIgPj0gSEVBUlRfU1BBV05fSU5URVJWQUwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGVhcnRTcGF3bkNvdW50ZXIgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGF3bkhlYXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vINCe0L3QvtCy0LvRjtGU0LzQviDRgdC10YDQtNC10YfQutCwXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGVhcnRzID0gdGhpcy5oZWFydHMuZmlsdGVyKGhlYXJ0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYXJ0LnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGhlYXJ0LmlzVmlzaWJsZSgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vINCf0LXRgNC10LLRltGA0Y/RlNC80L4g0YfQuCDQt9Cw0LrRltC90YfQuNCy0YHRjyDRgdGC0LDQvSBwZXR0aW5nXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBldHRpbmdUaW1lciA+PSB0aGlzLnBldHRpbmdEdXJhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g0J/QvtCy0LXRgNGC0LDRlNC80L7RgdGPINC00L4g0LfQsdC10YDQtdC20LXQvdC40YUg0LrQvtC+0YDQtNC40L3QsNGCXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnggPSB0aGlzLnNhdmVkWDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueSA9IHRoaXMuc2F2ZWRZO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDQn9C+0LLQtdGA0YLQsNGU0LzQvtGB0Y8g0LTQviDQv9C+0L/QtdGA0LXQtNC90YzQvtCz0L4g0YHRgtCw0L3Rg1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHJldmlvdXNTdGF0ZSA9PT0gREVFUl9TVEFURS5XQUxLSU5HKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IERFRVJfU1RBVEUuV0FMS0lORztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDQn9GA0L7QtNC+0LLQttGD0ZTQvNC+INGA0YPRhSDQtyDQt9Cx0LXRgNC10LbQtdC90LjRhSDQutC+0L7RgNC00LjQvdCw0YJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2aW91c1N0YXRlID09PSBERUVSX1NUQVRFLklETEUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0gREVFUl9TVEFURS5JRExFO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vINCf0L7QstC10YDRgtCw0ZTQvNC+0YHRjyDQtNC+INGB0YLQsNC90YMgaWRsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaWRsZVRpbWVyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlkbGVEdXJhdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChJRExFX01BWF9EVVJBVElPTiAtIElETEVfTUlOX0RVUkFUSU9OICsgMSkpICsgSURMRV9NSU5fRFVSQVRJT047XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJldmlvdXNTdGF0ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBldHRpbmdUaW1lciA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBldHRpbmdEdXJhdGlvbiA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhlYXJ0cyA9IFtdOyAvLyDQntGH0LjRidCw0ZTQvNC+INGB0LXRgNC00LXRh9C60LBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGVhcnRTcGF3bkNvdW50ZXIgPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlID09PSBERUVSX1NUQVRFLldBTEtJTkcpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g0J7QvdC+0LLQu9GO0ZTQvNC+INC/0L7Qt9C40YbRltGOINC+0LvQtdC90Y9cbiAgICAgICAgICAgICAgICAgICAgdGhpcy54ICs9IHRoaXMuc3BlZWQgKiB0aGlzLmRpcmVjdGlvbjtcblxuICAgICAgICAgICAgICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNGP0ZTQvNC+INC80LXQttGWINGC0LAg0L/QtdGA0LXRhdC+0LTQuNC80L4g0LTQviDQt9GD0L/QuNC90LrQuFxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy54ID49IHRoaXMubWF4WCAmJiB0aGlzLmRpcmVjdGlvbiA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g0JTQvtGB0Y/Qs9C70Lgg0L/RgNCw0LLQvtCz0L4g0LrRgNCw0Y4gLSDQt9GD0L/QuNC90Y/RlNC80L7RgdGPXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnggPSB0aGlzLm1heFg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0gREVFUl9TVEFURS5JRExFO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pZGxlVGltZXIgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g0JPQtdC90LXRgNGD0ZTQvNC+INCy0LjQv9Cw0LTQutC+0LLRgyDRgtGA0LjQstCw0LvRltGB0YLRjCDQt9GD0L/QuNC90LrQuCDQstGW0LQgMSDQtNC+IDMg0YHQtdC60YPQvdC0XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlkbGVEdXJhdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChJRExFX01BWF9EVVJBVElPTiAtIElETEVfTUlOX0RVUkFUSU9OICsgMSkpICsgSURMRV9NSU5fRFVSQVRJT047XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy54IDw9IHRoaXMubWluWCAmJiB0aGlzLmRpcmVjdGlvbiA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vINCU0L7RgdGP0LPQu9C4INC70ZbQstC+0LPQviDQutGA0LDRjiAtINC30YPQv9C40L3Rj9GU0LzQvtGB0Y9cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueCA9IHRoaXMubWluWDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBERUVSX1NUQVRFLklETEU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlkbGVUaW1lciA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDQk9C10L3QtdGA0YPRlNC80L4g0LLQuNC/0LDQtNC60L7QstGDINGC0YDQuNCy0LDQu9GW0YHRgtGMINC30YPQv9C40L3QutC4INCy0ZbQtCAxINC00L4gMyDRgdC10LrRg9C90LRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaWRsZUR1cmF0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKElETEVfTUFYX0RVUkFUSU9OIC0gSURMRV9NSU5fRFVSQVRJT04gKyAxKSkgKyBJRExFX01JTl9EVVJBVElPTjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZSA9PT0gREVFUl9TVEFURS5JRExFKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaWRsZVRpbWVyKys7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyDQn9GW0YHQu9GPINC30LDQstC10YDRiNC10L3QvdGPINC30YPQv9C40L3QutC4INC30LzRltC90Y7RlNC80L4g0L3QsNC/0YDRj9C80L7QuiDRgtCwINC/0LXRgNC10YXQvtC00LjQvNC+INC00L4g0YXQvtC00YzQsdC4XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlkbGVUaW1lciA+PSB0aGlzLmlkbGVEdXJhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gKj0gLTE7IC8vINCX0LzRltC90Y7RlNC80L4g0L3QsNC/0YDRj9C80L7QuiAo0LLQu9GW0LLQviDihpQg0LLQv9GA0LDQstC+KVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IERFRVJfU1RBVEUuV0FMS0lORztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZnJhbWVJbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZyYW1lUmVwZWF0Q291bnRlciA9IDA7IC8vINCh0LrQuNC00LDRlNC80L4g0LvRltGH0LjQu9GM0L3QuNC6INC/0L7QstGC0L7RgNC10L3RjFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkcmF3KGN0eCwgc3ByaXRlSW1hZ2UsIGZyYW1lV2lkdGgsIGZyYW1lSGVpZ2h0LCBkZWVyV2lkdGgsIGRlZXJIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXNwcml0ZUltYWdlLmNvbXBsZXRlIHx8IGZyYW1lV2lkdGggPD0gMCB8fCBmcmFtZUhlaWdodCA8PSAwKSByZXR1cm47XG5cbiAgICAgICAgICAgICAgICBjb25zdCB7IHJvdywgY29sIH0gPSB0aGlzLmdldFNwcml0ZUZyYW1lSW5kZXgoKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyDQmtC+0L7RgNC00LjQvdCw0YLQuCDQutCw0LTRgNGDINCyINGB0L/RgNCw0LnRgi3Qu9C40YHRgtGWICjQstC40LrQvtGA0LjRgdGC0L7QstGD0ZTQvNC+IE1hdGguZmxvb3Ig0LTQu9GPINGD0L3QuNC60L3QtdC90L3RjyBzdWItcGl4ZWwg0YDQtdC90LTQtdGA0LjQvdCz0YMg0L3QsCBpT1MpXG4gICAgICAgICAgICAgICAgY29uc3Qgc291cmNlWCA9IE1hdGguZmxvb3IoY29sICogZnJhbWVXaWR0aCk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc291cmNlWSA9IE1hdGguZmxvb3Iocm93ICogZnJhbWVIZWlnaHQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNvdXJjZVdpZHRoID0gTWF0aC5mbG9vcihmcmFtZVdpZHRoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzb3VyY2VIZWlnaHQgPSBNYXRoLmZsb29yKGZyYW1lSGVpZ2h0KTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyDQmtC+0L7RgNC00LjQvdCw0YLQuCDQvdCwIGNhbnZhcyAo0YLQsNC60L7QtiDQstC40LrQvtGA0LjRgdGC0L7QstGD0ZTQvNC+IE1hdGguZmxvb3IpXG4gICAgICAgICAgICAgICAgY29uc3QgZGVzdFggPSBNYXRoLmZsb29yKHRoaXMueCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVzdFkgPSBNYXRoLmZsb29yKHRoaXMueSk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVzdFdpZHRoID0gTWF0aC5mbG9vcihkZWVyV2lkdGgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlc3RIZWlnaHQgPSBNYXRoLmZsb29yKGRlZXJIZWlnaHQpO1xuXG4gICAgICAgICAgICAgICAgLy8g0JLQuNGA0ZbQt9Cw0ZTQvNC+INC60LDQtNGAINC30ZYg0YHQv9GA0LDQudGCLdC70LjRgdGC0LAg0YLQsCDQvNCw0LvRjtGU0LzQviDQvdCwIGNhbnZhc1xuICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICAgICAgICAgIHNwcml0ZUltYWdlLFxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VYLCBzb3VyY2VZLCBzb3VyY2VXaWR0aCwgc291cmNlSGVpZ2h0LCAvLyDQlNC20LXRgNC10LvQviAo0YHQv9GA0LDQudGCLdC70LjRgdGCKVxuICAgICAgICAgICAgICAgICAgICBkZXN0WCwgZGVzdFksIGRlc3RXaWR0aCwgZGVzdEhlaWdodCAvLyDQn9GA0LjQt9C90LDRh9C10L3QvdGPIChjYW52YXMpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyDQnNCw0LvRjtGU0LzQviDRgdC10YDQtNC10YfQutCwINC90LDQtCDQvtC70LXQvdC10LxcbiAgICAgICAgICAgICAgICB0aGlzLmhlYXJ0cy5mb3JFYWNoKGhlYXJ0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaGVhcnQuZHJhdyhjdHgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyDQl9Cw0LLQsNC90YLQsNC20LXQvdC90Y8g0LfQvtCx0YDQsNC20LXQvdGMICjRgdGC0LLQvtGA0Y7RlNC80L4g0L/QtdGA0LXQtCDRgdGC0LLQvtGA0LXQvdC90Y/QvCDQvtC70LXQvdGW0LIpXG4gICAgICAgIGNvbnN0IGltYWdlcyA9IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IG5ldyBJbWFnZSgpLFxuICAgICAgICAgICAgdHJlZTogbmV3IEltYWdlKCksXG4gICAgICAgICAgICBkZWVyU3ByaXRlOiBuZXcgSW1hZ2UoKSwgLy8g0KHQv9GA0LDQudGCLdC70LjRgdGCINC30LDQvNGW0YHRgtGMINC+0LTQvdC+0LPQviDQt9C+0LHRgNCw0LbQtdC90L3Rj1xuICAgICAgICAgICAgaGVhcnQ6IG5ldyBJbWFnZSgpIC8vINCX0L7QsdGA0LDQttC10L3QvdGPINGB0LXRgNC00LXRh9C60LBcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIC8vINCc0LDRgdC40LIg0L7Qu9C10L3RltCyICjQvNC+0LbQvdCwINC00L7QtNCw0YLQuCDQsdGW0LvRjNGI0LUpXG4gICAgICAgIGNvbnN0IGRlZXJzID0gW107XG4gICAgICAgIFxuICAgICAgICAvLyDQmtC+0L3RhNGW0LPRg9GA0LDRhtGW0Y8g0LTQu9GPINGB0YLQstC+0YDQtdC90L3RjyDQvtC70LXQvdGW0LJcbiAgICAgICAgY29uc3QgREVFUl9DT1VOVCA9IDM7IC8vINCa0ZbQu9GM0LrRltGB0YLRjCDQvtC70LXQvdGW0LJcbiAgICAgICAgXG4gICAgICAgIC8vINCg0L7Qt9GA0LDRhdC+0LLRg9GU0LzQviDQutC+0LXRhNGW0YbRltGU0L3RgiDQvNCw0YHRiNGC0LDQsdGD0LLQsNC90L3RjyDQtNC70Y8g0L/QvtC30LjRhtGW0Lkg0L7Qu9C10L3RltCyXG4gICAgICAgIGNvbnN0IHNjYWxlWCA9IENBTlZBU19XSURUSCAvIDEzNjY7XG4gICAgICAgIGNvbnN0IHNjYWxlWSA9IENBTlZBU19IRUlHSFQgLyA1MDA7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBkZWVyQ29uZmlncyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGFydFg6IENBTlZBU19XSURUSCAvIDIgKyA1MCAqIHNjYWxlWCxcbiAgICAgICAgICAgICAgICBzdGFydFk6IHRyZWVZICsgVFJFRV9IRUlHSFQgLSAyMCwgLy8g0J/RltC0INGP0LvQuNC90LrQvtGOICh0cmVlWSArINCy0LjRgdC+0YLQsCDRj9C70LjQvdC60LggLSDQstGW0LTRgdGC0YPQvylcbiAgICAgICAgICAgICAgICBtaW5YOiBDQU5WQVNfV0lEVEggLyAyIC0gMjAwICogc2NhbGVYLFxuICAgICAgICAgICAgICAgIG1heFg6IENBTlZBU19XSURUSCAvIDIgKyAzMDAgKiBzY2FsZVgsXG4gICAgICAgICAgICAgICAgc3BlZWQ6IDAuNSxcbiAgICAgICAgICAgICAgICB6SW5kZXg6IDRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhcnRYOiBDQU5WQVNfV0lEVEggLyAyIC0gMTAwICogc2NhbGVYLFxuICAgICAgICAgICAgICAgIHN0YXJ0WTogQ0FOVkFTX0hFSUdIVCAvIDIgLSBERUVSX0hFSUdIVCAvIDIgKyA1MCAqIHNjYWxlWSxcbiAgICAgICAgICAgICAgICBtaW5YOiBDQU5WQVNfV0lEVEggLyAyIC0gMTUwICogc2NhbGVYLFxuICAgICAgICAgICAgICAgIG1heFg6IENBTlZBU19XSURUSCAvIDIgKyAxNTAgKiBzY2FsZVgsXG4gICAgICAgICAgICAgICAgc3BlZWQ6IDAuMyxcbiAgICAgICAgICAgICAgICB6SW5kZXg6IDNcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhcnRYOiBDQU5WQVNfV0lEVEggLyAyIC0gMTAwICogc2NhbGVYLFxuICAgICAgICAgICAgICAgIHN0YXJ0WTogQ0FOVkFTX0hFSUdIVCAvIDIgLSBERUVSX0hFSUdIVCAvIDIgLSA1MCAqIHNjYWxlWSxcbiAgICAgICAgICAgICAgICBtaW5YOiBDQU5WQVNfV0lEVEggLyAyIC0gMjUwICogc2NhbGVYLFxuICAgICAgICAgICAgICAgIG1heFg6IENBTlZBU19XSURUSCAvIDIgKyAyNTAgKiBzY2FsZVgsXG4gICAgICAgICAgICAgICAgc3BlZWQ6IDAuNCxcbiAgICAgICAgICAgICAgICB6SW5kZXg6IDEgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgIFxuICAgICAgICBdO1xuXG4gICAgICAgIC8vINCh0YLQstC+0YDRjtGU0LzQviDQvtC70LXQvdGW0LJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBERUVSX0NPVU5UICYmIGkgPCBkZWVyQ29uZmlncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY29uZmlnID0gZGVlckNvbmZpZ3NbaV07XG4gICAgICAgICAgICBkZWVycy5wdXNoKG5ldyBEZWVyKFxuICAgICAgICAgICAgICAgIGNvbmZpZy5zdGFydFgsXG4gICAgICAgICAgICAgICAgY29uZmlnLnN0YXJ0WSxcbiAgICAgICAgICAgICAgICBjb25maWcubWluWCxcbiAgICAgICAgICAgICAgICBjb25maWcubWF4WCxcbiAgICAgICAgICAgICAgICBjb25maWcuc3BlZWQsXG4gICAgICAgICAgICAgICAgY29uZmlnLnpJbmRleCB8fCAwLCAvLyDQktC40LrQvtGA0LjRgdGC0L7QstGD0ZTQvNC+IHpJbmRleCDQtyDQutC+0L3RhNGW0LPRgyDQsNCx0L4gMCDQt9CwINC30LDQvNC+0LLRh9GD0LLQsNC90L3Rj9C8XG4gICAgICAgICAgICAgICAgaW1hZ2VzLmhlYXJ0IC8vINCf0LXRgNC10LTQsNGU0LzQviDQt9C+0LHRgNCw0LbQtdC90L3RjyDRgdC10YDQtNC10YfQutCwXG4gICAgICAgICAgICApKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpbWFnZXNMb2FkZWQgPSAwO1xuICAgICAgICBjb25zdCB0b3RhbEltYWdlcyA9IDQ7XG5cbiAgICAgICAgZnVuY3Rpb24gb25JbWFnZUxvYWQoKSB7XG4gICAgICAgICAgICBpbWFnZXNMb2FkZWQrKztcbiAgICAgICAgICAgIGlmIChpbWFnZXNMb2FkZWQgPT09IHRvdGFsSW1hZ2VzKSB7XG4gICAgICAgICAgICAgICAgLy8g0J/QtdGA0LXQstGW0YDRj9GU0LzQviwg0YfQuCDRgdC/0YDQsNC50YIt0LvQuNGB0YIg0LfQsNCy0LDQvdGC0LDQttC40LLRgdGPINC60L7RgNC10LrRgtC90L5cbiAgICAgICAgICAgICAgICBpZiAoaW1hZ2VzLmRlZXJTcHJpdGUuY29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0RlZXIgc3ByaXRlIGxvYWRlZDonLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogaW1hZ2VzLmRlZXJTcHJpdGUud2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGltYWdlcy5kZWVyU3ByaXRlLmhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lV2lkdGg6IEZSQU1FX1dJRFRILFxuICAgICAgICAgICAgICAgICAgICAgICAgZnJhbWVIZWlnaHQ6IEZSQU1FX0hFSUdIVCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZXJXaWR0aDogREVFUl9XSURUSCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZXJIZWlnaHQ6IERFRVJfSEVJR0hUXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkcmF3Q2FudmFzKCk7XG4gICAgICAgICAgICAgICAgc3RhcnRBbmltYXRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGltYWdlcy5iYWNrZ3JvdW5kLm9ubG9hZCA9IG9uSW1hZ2VMb2FkO1xuICAgICAgICBpbWFnZXMudHJlZS5vbmxvYWQgPSBvbkltYWdlTG9hZDtcbiAgICAgICAgaW1hZ2VzLmRlZXJTcHJpdGUub25sb2FkID0gb25JbWFnZUxvYWQ7XG4gICAgICAgIGltYWdlcy5oZWFydC5vbmxvYWQgPSBvbkltYWdlTG9hZDtcblxuICAgICAgICAvLyDQktC40LHQuNGA0LDRlNC80L4g0YTQvtC9INC30LDQu9C10LbQvdC+INCy0ZbQtCDRgNC+0LfQvNGW0YDRgyDQtdC60YDQsNC90YNcbiAgICAgICAgaW1hZ2VzLmJhY2tncm91bmQuc3JjID0gaXNNb2JpbGUgPyAnaW1nL3BhcnRpY2lwYXRlL2NhbnZhcy1iZy10YWIucG5nJyA6ICdpbWcvcGFydGljaXBhdGUvY2FudmFzLWJnLnBuZyc7XG4gICAgICAgIGltYWdlcy50cmVlLnNyYyA9ICdpbWcvcGFydGljaXBhdGUvdHJlZS5wbmcnO1xuICAgICAgICAvLyDQktC40LrQvtGA0LjRgdGC0L7QstGD0ZTQvNC+INGB0L/RgNCw0LnRgi3Qu9C40YHRgiAo0Y/QutGJ0L4g0YTQsNC50Lsg0L3QsNC30LjQstCw0ZTRgtGM0YHRjyBkZWVyLXNwcml0ZS5wbmcsINC30LzRltC90ZbRgtGMINC90LDQt9Cy0YMpXG4gICAgICAgIGltYWdlcy5kZWVyU3ByaXRlLnNyYyA9ICdpbWcvcGFydGljaXBhdGUvZGVlci1zcHJpdGUucG5nJztcbiAgICAgICAgaW1hZ2VzLmhlYXJ0LnNyYyA9ICdpbWcvcGFydGljaXBhdGUvZGVlci1oZWFydC5wbmcnO1xuICAgICAgICBcbiAgICAgICAgLy8g0J7QvdC+0LLQu9GO0ZTQvNC+INC/0L7RgdC40LvQsNC90L3RjyDQvdCwINC00LDQvdGWINC00LvRjyDQvtCx0YDQvtCx0L3QuNC60ZbQsiDQv9C+0LTRltC5XG4gICAgICAgIHBhcnRpY2lwYXRlRGVlcnMgPSBkZWVycztcbiAgICAgICAgcGFydGljaXBhdGVEZWVyV2lkdGggPSBERUVSX1dJRFRIO1xuICAgICAgICBwYXJ0aWNpcGF0ZURlZXJIZWlnaHQgPSBERUVSX0hFSUdIVDtcbiAgICAgICAgXG4gICAgICAgIC8vINCU0L7QtNCw0ZTQvNC+INC+0LHRgNC+0LHQvdC40LrQuCDQv9C+0LTRltC5INGC0ZbQu9GM0LrQuCDQvtC00LjQvSDRgNCw0LdcbiAgICAgICAgaWYgKCFjYW52YXNDbGlja0hhbmRsZXJzQXR0YWNoZWQpIHtcbiAgICAgICAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVBhcnRpY2lwYXRlQ2FudmFzQ2xpY2spO1xuICAgICAgICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBoYW5kbGVQYXJ0aWNpcGF0ZUNhbnZhc1RvdWNoU3RhcnQsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIGhhbmRsZVBhcnRpY2lwYXRlQ2FudmFzVG91Y2hFbmQsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgIGNhbnZhc0NsaWNrSGFuZGxlcnNBdHRhY2hlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBkcmF3Q2FudmFzKCkge1xuICAgICAgICAgICAgLy8g0J7Rh9C40YnQtdC90L3RjyBjYW52YXNcbiAgICAgICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgQ0FOVkFTX1dJRFRILCBDQU5WQVNfSEVJR0hUKTtcblxuICAgICAgICAgICAgLy8g0JzQsNC70Y7RlNC80L4g0YTQvtC9XG4gICAgICAgICAgICBpZiAoaW1hZ2VzLmJhY2tncm91bmQuY29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKGltYWdlcy5iYWNrZ3JvdW5kLCAwLCAwLCBDQU5WQVNfV0lEVEgsIENBTlZBU19IRUlHSFQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyB6SW5kZXgg0LTQu9GPINGP0LvQuNC90LrQuCAo0LzRltC2INC+0LvQtdC90Y/QvNC4KVxuICAgICAgICAgICAgY29uc3QgVFJFRV9aX0lOREVYID0gMjsgLy8g0K/Qu9C40L3QutCwINC80LDQu9GO0ZTRgtGM0YHRjyDQvNGW0LYg0L7Qu9C10L3Rj9C80Lgg0LcgekluZGV4IDEg0YLQsCAyXG5cbiAgICAgICAgICAgIC8vINCh0YLQstC+0YDRjtGU0LzQviDQvNCw0YHQuNCyINCy0YHRltGFINC10LvQtdC80LXQvdGC0ZbQsiDQtNC70Y8g0LzQsNC70Y7QstCw0L3QvdGPICjQvtC70LXQvdGWICsg0Y/Qu9C40L3QutCwKVxuICAgICAgICAgICAgY29uc3QgZHJhd2FibGVFbGVtZW50cyA9IFtdO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQlNC+0LTQsNGU0LzQviDQvtC70LXQvdGW0LJcbiAgICAgICAgICAgIGRlZXJzLmZvckVhY2goZGVlciA9PiB7XG4gICAgICAgICAgICAgICAgZHJhd2FibGVFbGVtZW50cy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2RlZXInLFxuICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IGRlZXIuekluZGV4LFxuICAgICAgICAgICAgICAgICAgICBkcmF3OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW1hZ2VzLmRlZXJTcHJpdGUuY29tcGxldGUgJiYgRlJBTUVfV0lEVEggPiAwICYmIEZSQU1FX0hFSUdIVCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWVyLmRyYXcoY3R4LCBpbWFnZXMuZGVlclNwcml0ZSwgRlJBTUVfV0lEVEgsIEZSQU1FX0hFSUdIVCwgREVFUl9XSURUSCwgREVFUl9IRUlHSFQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0JTQvtC00LDRlNC80L4g0Y/Qu9C40L3QutGDXG4gICAgICAgICAgICBkcmF3YWJsZUVsZW1lbnRzLnB1c2goe1xuICAgICAgICAgICAgICAgIHR5cGU6ICd0cmVlJyxcbiAgICAgICAgICAgICAgICB6SW5kZXg6IFRSRUVfWl9JTkRFWCxcbiAgICAgICAgICAgICAgICBkcmF3OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbWFnZXMudHJlZS5jb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShpbWFnZXMudHJlZSwgdHJlZVgsIHRyZWVZLCBUUkVFX1dJRFRILCBUUkVFX0hFSUdIVCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8g0KHQvtGA0YLRg9GU0LzQviDQstGB0ZYg0LXQu9C10LzQtdC90YLQuCDQt9CwIHpJbmRleCAo0LzQtdC90YjQtSA9INC80LDQu9GO0ZTRgtGM0YHRjyDRgNCw0L3RltGI0LUsINCx0ZbQu9GM0YjQtSA9INC80LDQu9GO0ZTRgtGM0YHRjyDQv9GW0LfQvdGW0YjQtSlcbiAgICAgICAgICAgIGRyYXdhYmxlRWxlbWVudHMuc29ydCgoYSwgYikgPT4gYS56SW5kZXggLSBiLnpJbmRleCk7XG5cbiAgICAgICAgICAgIC8vINCc0LDQu9GO0ZTQvNC+INCy0YHRliDQtdC70LXQvNC10L3RgtC4INCyINC/0YDQsNCy0LjQu9GM0L3QvtC80YMg0L/QvtGA0Y/QtNC60YNcbiAgICAgICAgICAgIGRyYXdhYmxlRWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmRyYXcoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbiAgICAgICAgICAgIGZyYW1lQ291bnRlcisrO1xuXG4gICAgICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNGP0ZTQvNC+LCDRh9C4INC/0L7RgtGA0ZbQsdC90L4g0L7QvdC+0LLQu9GO0LLQsNGC0Lgg0LrQsNC00YDQuCDQsNC90ZbQvNCw0YbRltGXXG4gICAgICAgICAgICBjb25zdCBzaG91bGRVcGRhdGVGcmFtZSA9IGZyYW1lQ291bnRlciA+PSBGUkFNRV9ERUxBWTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0J7QvdC+0LLQu9GO0ZTQvNC+INCz0LvQvtCx0LDQu9GM0L3QuNC5INC70ZbRh9C40LvRjNC90LjQuiDQutCw0LTRgNGW0LJcbiAgICAgICAgICAgIGlmIChzaG91bGRVcGRhdGVGcmFtZSkge1xuICAgICAgICAgICAgICAgIGZyYW1lQ291bnRlciA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vINCe0L3QvtCy0LvRjtGU0LzQviDQstGB0ZbRhSDQvtC70LXQvdGW0LJcbiAgICAgICAgICAgIGRlZXJzLmZvckVhY2goZGVlciA9PiB7XG4gICAgICAgICAgICAgICAgZGVlci51cGRhdGUoc2hvdWxkVXBkYXRlRnJhbWUpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vINCf0LXRgNC10LzQsNC70YzQvtCy0YPRlNC80L4gY2FudmFzXG4gICAgICAgICAgICBkcmF3Q2FudmFzKCk7XG5cbiAgICAgICAgICAgIGFuaW1hdGlvbklkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gc3RhcnRBbmltYXRpb24oKSB7XG4gICAgICAgICAgICBpZiAoYW5pbWF0aW9uSWQpIHtcbiAgICAgICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShhbmltYXRpb25JZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhbmltYXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDQl9GD0L/QuNC90Y/RlNC80L4g0LDQvdGW0LzQsNGG0ZbRjiDQv9GA0Lgg0LLQuNGF0L7QtNGWINC3IHZpZXdwb3J0ICjQvtC/0YbRltC+0L3QsNC70YzQvdC+KVxuICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgICAgICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFhbmltYXRpb25JZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRBbmltYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhbmltYXRpb25JZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uSWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uSWQgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUoY2FudmFzKTtcbiAgICAgICAgXG4gICAgICAgIC8vINCe0LHRgNC+0LHQutCwINC30LzRltC90Lgg0YDQvtC30LzRltGA0YMg0LLRltC60L3QsCDQtNC70Y8g0LDQtNCw0L/RgtC40LLQvdC+0YHRgtGWXG4gICAgICAgIGxldCByZXNpemVUaW1lb3V0O1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHJlc2l6ZVRpbWVvdXQpO1xuICAgICAgICAgICAgcmVzaXplVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0lzTW9iaWxlID0gd2luZG93LmlubmVyV2lkdGggPD0gMTA1MDtcbiAgICAgICAgICAgICAgICAvLyDQn9C10YDQtdC30LDQv9GD0YHQutCw0ZTQvNC+INGW0L3RltGG0ZbQsNC70ZbQt9Cw0YbRltGOINGC0ZbQu9GM0LrQuCDRj9C60YnQviDQt9C80ZbQvdC40LLRgdGPINGA0LXQttC40LwgKG1vYmlsZS9kZXNrdG9wKVxuICAgICAgICAgICAgICAgIGlmIChuZXdJc01vYmlsZSAhPT0gaXNNb2JpbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g0JfRg9C/0LjQvdGP0ZTQvNC+INC/0L7RgtC+0YfQvdGDINCw0L3RltC80LDRhtGW0Y5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGFuaW1hdGlvbklkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShhbmltYXRpb25JZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25JZCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8g0J/QtdGA0LXQt9Cw0L/Rg9GB0LrQsNGU0LzQviDRltC90ZbRhtGW0LDQu9GW0LfQsNGG0ZbRjlxuICAgICAgICAgICAgICAgICAgICBpbml0UGFydGljaXBhdGVDYW52YXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAyNTApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0U25vd2ZsYWtlc0NhbnZhcygpIHtcbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Nub3dmbGFrZXNDYW52YXMnKTtcbiAgICAgICAgaWYgKCFjYW52YXMpIHJldHVybjtcblxuICAgICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgY29uc3QgZmF2UGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXYtcGFnZScpO1xuICAgICAgICBcbiAgICAgICAgLy8g0JrQvtC90YHRgtCw0L3RgtC4XG4gICAgICAgIGNvbnN0IFNOT1dGTEFLRV9DT1VOVCA9IDEwMDtcbiAgICAgICAgY29uc3QgU05PV0ZMQUtFX01JTl9TSVpFID0gNDtcbiAgICAgICAgY29uc3QgU05PV0ZMQUtFX01BWF9TSVpFID0gMTA7XG4gICAgICAgIGNvbnN0IFNOT1dGTEFLRV9NSU5fU1BFRUQgPSAwLjE7XG4gICAgICAgIGNvbnN0IFNOT1dGTEFLRV9NQVhfU1BFRUQgPSAwLjM7XG4gICAgICAgIGNvbnN0IFNOT1dGTEFLRV9XSU5EX1JBTkdFID0gMC40O1xuICAgICAgICBjb25zdCBTTk9XRkxBS0VfU1BBV05fSU5URVJWQUwgPSAyMDA7XG5cbiAgICAgICAgY29uc3Qgc25vd2ZsYWtlcyA9IFtdO1xuICAgICAgICBsZXQgbGFzdFNub3dmbGFrZVRpbWUgPSAwO1xuICAgICAgICBsZXQgYW5pbWF0aW9uSWQgPSBudWxsO1xuICAgICAgICBcbiAgICAgICAgLy8g0JLRgdGC0LDQvdC+0LLQu9GO0ZTQvNC+INGA0L7Qt9C80ZbRgCBjYW52YXMg0L3QsCDQstC10YHRjCAuZmF2LXBhZ2VcbiAgICAgICAgZnVuY3Rpb24gcmVzaXplQ2FudmFzKCkge1xuICAgICAgICAgICAgbGV0IG5ld1dpZHRoLCBuZXdIZWlnaHQ7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChmYXZQYWdlKSB7XG4gICAgICAgICAgICAgICAgLy8g0JLQuNC60L7RgNC40YHRgtC+0LLRg9GU0LzQviBzY3JvbGxIZWlnaHQg0LTQu9GPINC+0YLRgNC40LzQsNC90L3RjyDRgNC10LDQu9GM0L3QvtGXINCy0LjRgdC+0YLQuCDQutC+0L3RgtC10L3RgtGDXG4gICAgICAgICAgICAgICAgY29uc3QgcmVjdCA9IGZhdlBhZ2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAgICAgbmV3V2lkdGggPSByZWN0LndpZHRoIHx8IGZhdlBhZ2Uub2Zmc2V0V2lkdGggfHwgd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgICAgICAgICAgLy8g0JTQu9GPINCy0LjRgdC+0YLQuCDQstC40LrQvtGA0LjRgdGC0L7QstGD0ZTQvNC+IHNjcm9sbEhlaWdodCDRj9C60YnQviDQstGW0L0g0LHRltC70YzRiNC40Lkg0LfQsCBvZmZzZXRIZWlnaHRcbiAgICAgICAgICAgICAgICBjb25zdCBvZmZzZXRIZWlnaHQgPSBmYXZQYWdlLm9mZnNldEhlaWdodCB8fCBmYXZQYWdlLmNsaWVudEhlaWdodDtcbiAgICAgICAgICAgICAgICBjb25zdCBzY3JvbGxIZWlnaHQgPSBmYXZQYWdlLnNjcm9sbEhlaWdodDtcbiAgICAgICAgICAgICAgICBuZXdIZWlnaHQgPSBNYXRoLm1heChzY3JvbGxIZWlnaHQsIG9mZnNldEhlaWdodCwgcmVjdC5oZWlnaHQpIHx8IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gRmFsbGJhY2sg0L3QsCB2aWV3cG9ydFxuICAgICAgICAgICAgICAgIG5ld1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgICAgICAgICAgbmV3SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNGP0ZTQvNC+INGH0Lgg0YDQvtC30LzRltGA0Lgg0LfQvNGW0L3QuNC70LjRgdGPINC/0LXRgNC10LQg0L7QvdC+0LLQu9C10L3QvdGP0LxcbiAgICAgICAgICAgIGlmIChjYW52YXMud2lkdGggIT09IG5ld1dpZHRoIHx8IGNhbnZhcy5oZWlnaHQgIT09IG5ld0hlaWdodCkge1xuICAgICAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IG5ld1dpZHRoO1xuICAgICAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSBuZXdIZWlnaHQ7XG4gICAgICAgICAgICAgICAgLy8g0J7Rh9C40YnQsNGU0LzQviDRgdC90ZbQttC40L3QutC4INC/0YDQuCDQt9C80ZbQvdGWINGA0L7Qt9C80ZbRgNGDXG4gICAgICAgICAgICAgICAgc25vd2ZsYWtlcy5sZW5ndGggPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8g0JLRgdGC0LDQvdC+0LLQu9GO0ZTQvNC+INGA0L7Qt9C80ZbRgCBjYW52YXMg0Lcg0L3QtdCy0LXQu9C40LrQvtGOINC30LDRgtGA0LjQvNC60L7RjiDQtNC70Y8g0LrQvtGA0LXQutGC0L3QvtCz0L4g0YDQvtC30YDQsNGF0YPQvdC60YMg0YDQvtC30LzRltGA0ZbQslxuICAgICAgICAvLyDQktC40LrQvtGA0LjRgdGC0L7QstGD0ZTQvNC+INC60ZbQu9GM0LrQsCDQutCw0LTRgNGW0LIg0LTQu9GPINCz0LDRgNCw0L3RgtGW0Zcg0L/RgNCw0LLQuNC70YzQvdC+0LPQviDRgNC+0LfQvNGW0YDRg1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgcmVzaXplQ2FudmFzKCk7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc2l6ZUNhbnZhcygpO1xuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlc2l6ZUNhbnZhcygpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZUNhbnZhcyk7XG5cbiAgICAgICAgLy8g0JfQsNCy0LDQvdGC0LDQttC10L3QvdGPINC30L7QsdGA0LDQttC10L3QvdGPINGB0L3RltC20LjQvdC60LhcbiAgICAgICAgY29uc3Qgc25vd2ZsYWtlSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgbGV0IGltYWdlTG9hZGVkID0gZmFsc2U7XG5cbiAgICAgICAgc25vd2ZsYWtlSW1hZ2Uub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpbWFnZUxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICAvLyDQp9C10LrQsNGU0LzQviDQv9C+0LrQuCDRgdGC0L7RgNGW0L3QutCwINCy0LjQudC00LUg0LfRliDRgdGC0LDQvdGDIGxvYWRpbmcg0L/QtdGA0LXQtCDRgdGC0LDRgNGC0L7QvCDQsNC90ZbQvNCw0YbRltGXXG4gICAgICAgICAgICBmdW5jdGlvbiB3YWl0Rm9yUGFnZVJlYWR5KCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlzUGFnZUxvYWRpbmcgPSBtYWluUGFnZSAmJiBtYWluUGFnZS5jbGFzc0xpc3QuY29udGFpbnMoJ2xvYWRpbmcnKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoaXNQYWdlTG9hZGluZykge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzaXplQ2FudmFzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzaXplQ2FudmFzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vINCU0L7QtNCw0YLQutC+0LLQsCDQv9C10YDQtdCy0ZbRgNC60LAg0L/RltGB0LvRjyDRidC1INC+0LTQvdC+0LPQviDQutCw0LTRgNGDXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNpemVDYW52YXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYW52YXMud2lkdGggPiAwICYmIGNhbnZhcy5oZWlnaHQgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRBbmltYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g0K/QutGJ0L4g0LLRgdC1INGJ0LUg0L3QtdC/0YDQsNCy0LjQu9GM0L3QuNC5INGA0L7Qt9C80ZbRgCwg0L/QvtCy0YLQvtGA0Y7RlNC80L5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KHdhaXRGb3JQYWdlUmVhZHksIDUwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSwgNDAwKTsgLy8g0KfQtdC60LDRlNC80L4g0YLRgNC+0YXQuCDQsdGW0LvRjNGI0LUg0L3RltC2IGhpZGVMb2FkZXIgKDMwMG1zKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vINCh0YLQvtGA0ZbQvdC60LAg0LPQvtGC0L7QstCwLCDQstGB0YLQsNC90L7QstC70Y7RlNC80L4g0YDQvtC30LzRltGAINGC0LAg0LfQsNC/0YPRgdC60LDRlNC80L5cbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc2l6ZUNhbnZhcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNpemVDYW52YXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNpemVDYW52YXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhbnZhcy53aWR0aCA+IDAgJiYgY2FudmFzLmhlaWdodCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QW5pbWF0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHdhaXRGb3JQYWdlUmVhZHkoKTtcbiAgICAgICAgfTtcbiAgICAgICAgc25vd2ZsYWtlSW1hZ2Uuc3JjID0gJ2ltZy9zbm93Zmxha2UucG5nJztcbiAgICAgICBcblxuICAgICAgICAvLyDQmtC70LDRgSDQtNC70Y8g0YHQvdGW0LbQuNC90LrQuFxuICAgICAgICBjbGFzcyBTbm93Zmxha2Uge1xuICAgICAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy54ID0gTWF0aC5yYW5kb20oKSAqIChjYW52YXMud2lkdGggfHwgd2luZG93LmlubmVyV2lkdGgpO1xuICAgICAgICAgICAgICAgIHRoaXMueSA9IC0yMDtcbiAgICAgICAgICAgICAgICB0aGlzLnNpemUgPSBNYXRoLnJhbmRvbSgpICogKFNOT1dGTEFLRV9NQVhfU0laRSAtIFNOT1dGTEFLRV9NSU5fU0laRSkgKyBTTk9XRkxBS0VfTUlOX1NJWkU7XG4gICAgICAgICAgICAgICAgdGhpcy5zcGVlZCA9IE1hdGgucmFuZG9tKCkgKiAoU05PV0ZMQUtFX01BWF9TUEVFRCAtIFNOT1dGTEFLRV9NSU5fU1BFRUQpICsgU05PV0ZMQUtFX01JTl9TUEVFRDtcbiAgICAgICAgICAgICAgICB0aGlzLndpbmQgPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiBTTk9XRkxBS0VfV0lORF9SQU5HRTtcbiAgICAgICAgICAgICAgICB0aGlzLm9wYWNpdHkgPSBNYXRoLnJhbmRvbSgpICogMC41ICsgMC41O1xuICAgICAgICAgICAgICAgIHRoaXMucm90YXRpb24gPSBNYXRoLnJhbmRvbSgpICogTWF0aC5QSSAqIDI7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3RhdGlvblNwZWVkID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMC4wMjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdXBkYXRlKCkge1xuICAgICAgICAgICAgICAgIHRoaXMueSArPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgICAgIHRoaXMueCArPSB0aGlzLndpbmQgKyAoTWF0aC5zaW4odGhpcy55ICogMC4wMSkgKiAwLjIpO1xuICAgICAgICAgICAgICAgIHRoaXMucm90YXRpb24gKz0gdGhpcy5yb3RhdGlvblNwZWVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkcmF3KCkge1xuICAgICAgICAgICAgICAgIGlmICghaW1hZ2VMb2FkZWQpIHJldHVybjtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNC60LAg0YfQuCBjYW52YXMg0LzQsNGUINC/0YDQsNCy0LjQu9GM0L3QuNC5INGA0L7Qt9C80ZbRgFxuICAgICAgICAgICAgICAgIGlmIChjYW52YXMud2lkdGggPT09IDAgfHwgY2FudmFzLmhlaWdodCA9PT0gMCkgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgY3R4LnNhdmUoKTtcbiAgICAgICAgICAgICAgICBjdHguZ2xvYmFsQWxwaGEgPSB0aGlzLm9wYWNpdHk7XG4gICAgICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZSh0aGlzLngsIHRoaXMueSk7XG4gICAgICAgICAgICAgICAgY3R4LnJvdGF0ZSh0aGlzLnJvdGF0aW9uKTtcbiAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgICAgICAgICBzbm93Zmxha2VJbWFnZSxcbiAgICAgICAgICAgICAgICAgICAgLXRoaXMuc2l6ZSAvIDIsXG4gICAgICAgICAgICAgICAgICAgIC10aGlzLnNpemUgLyAyLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNpemUsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2l6ZVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgY3R4LnJlc3RvcmUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaXNPZmZTY3JlZW4oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMueSA+IGNhbnZhcy5oZWlnaHQgKyAyMCB8fCBcbiAgICAgICAgICAgICAgICAgICAgICAgdGhpcy54IDwgLTIwIHx8IFxuICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnggPiBjYW52YXMud2lkdGggKyAyMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVNub3dmbGFrZSgpIHtcbiAgICAgICAgICAgIGlmIChzbm93Zmxha2VzLmxlbmd0aCA8IFNOT1dGTEFLRV9DT1VOVCkge1xuICAgICAgICAgICAgICAgIHNub3dmbGFrZXMucHVzaChuZXcgU25vd2ZsYWtlKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlU25vd2ZsYWtlcygpIHtcbiAgICAgICAgICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gICAgICAgICAgICBpZiAobm93IC0gbGFzdFNub3dmbGFrZVRpbWUgPiBTTk9XRkxBS0VfU1BBV05fSU5URVJWQUwpIHtcbiAgICAgICAgICAgICAgICBjcmVhdGVTbm93Zmxha2UoKTtcbiAgICAgICAgICAgICAgICBsYXN0U25vd2ZsYWtlVGltZSA9IG5vdztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHNub3dmbGFrZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICBzbm93Zmxha2VzW2ldLnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgIGlmIChzbm93Zmxha2VzW2ldLmlzT2ZmU2NyZWVuKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgc25vd2ZsYWtlcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZHJhd1Nub3dmbGFrZXMoKSB7XG4gICAgICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNC60LAg0YfQuCBjYW52YXMg0LzQsNGUINC/0YDQsNCy0LjQu9GM0L3QuNC5INGA0L7Qt9C80ZbRgCDQv9C10YDQtdC0INC80LDQu9GO0LLQsNC90L3Rj9C8XG4gICAgICAgICAgICBpZiAoY2FudmFzLndpZHRoID09PSAwIHx8IGNhbnZhcy5oZWlnaHQgPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXNpemVDYW52YXMoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIHNub3dmbGFrZXMuZm9yRWFjaChzbm93Zmxha2UgPT4ge1xuICAgICAgICAgICAgICAgIHNub3dmbGFrZS5kcmF3KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGFuaW1hdGUoKSB7XG4gICAgICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNGP0ZTQvNC+INGA0L7Qt9C80ZbRgCBjYW52YXMg0L3QsCDQv9C+0YfQsNGC0LrRgyDQutC+0LbQvdC+0LPQviDQutCw0LTRgNGDICjRgtGW0LvRjNC60Lgg0Y/QutGJ0L4g0LLRltC9INC90LXQv9GA0LDQstC40LvRjNC90LjQuSlcbiAgICAgICAgICAgIGlmIChjYW52YXMud2lkdGggPT09IDAgfHwgY2FudmFzLmhlaWdodCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJlc2l6ZUNhbnZhcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB1cGRhdGVTbm93Zmxha2VzKCk7XG4gICAgICAgICAgICBkcmF3U25vd2ZsYWtlcygpO1xuICAgICAgICAgICAgYW5pbWF0aW9uSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBzdGFydEFuaW1hdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChhbmltYXRpb25JZCkge1xuICAgICAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbklkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFuaW1hdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vINCX0YPQv9C40L3Rj9GU0LzQviDQsNC90ZbQvNCw0YbRltGOINC/0YDQuCDQstC40YXQvtC00ZYg0Lcgdmlld3BvcnRcbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICAgICAgICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghYW5pbWF0aW9uSWQgJiYgaW1hZ2VMb2FkZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QW5pbWF0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYW5pbWF0aW9uSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbklkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbklkID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGNhbnZhcyk7XG4gICAgfVxuICAgIFxuICAgIGxvYWRUcmFuc2xhdGlvbnMoKVxuICAgICAgICAudGhlbihpbml0KSAvLyDQt9Cw0L/Rg9GB0Log0ZbQvdGW0YLRgyDRgdGC0L7RgNGW0L3QutC4XG5cblxuXG5cblxuICAgIC8vIGNvbnN0IGxuZ0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG5nLWJ0blwiKVxuICAgIC8vXG4gICAgLy8gLy8g0JLRgdGC0LDQvdC+0LLQu9GO0ZTQvNC+INGC0LXQutGB0YIg0LrQvdC+0L/QutC4INC90LAg0L/QvtGC0L7Rh9C90YMg0LDQutGC0LjQstC90YMg0LzQvtCy0YNcbiAgICAvLyBmdW5jdGlvbiB1cGRhdGVMYW5ndWFnZUJ1dHRvbigpIHtcbiAgICAvLyAgICAgLy8g0JLQuNC60L7RgNC40YHRgtC+0LLRg9GU0LzQviDRgtGDINGB0LDQvNGDINC70L7Qs9GW0LrRgywg0YnQviDRliDQtNC70Y8g0LLQuNC30L3QsNGH0LXQvdC90Y8gbG9jYWxlXG4gICAgLy8gICAgIGxldCBjdXJyZW50TG9jYWxlID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsZVwiKSB8fCBcImhyXCI7XG4gICAgLy8gICAgIGlmIChockxlbmcpIGN1cnJlbnRMb2NhbGUgPSAnaHInO1xuICAgIC8vICAgICBpZiAoZW5MZW5nKSBjdXJyZW50TG9jYWxlID0gJ2VuJztcbiAgICAvLyAgICAgaWYgKGxuZ0J0bikge1xuICAgIC8vICAgICAgICAgbG5nQnRuLnRleHRDb250ZW50ID0gY3VycmVudExvY2FsZTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cbiAgICAvL1xuICAgIC8vIC8vINCe0L3QvtCy0LvRjtGU0LzQviDQutC90L7Qv9C60YMg0L/RgNC4INC30LDQstCw0L3RgtCw0LbQtdC90L3RliAo0L/RltGB0LvRjyDQstC40LfQvdCw0YfQtdC90L3RjyBsb2NhbGUpXG4gICAgLy8gdXBkYXRlTGFuZ3VhZ2VCdXR0b24oKTtcblxuICAgIC8vIGlmIChsbmdCdG4pIHtcbiAgICAvLyAgICAgbG5nQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgLy8gICAgICAgICAvLyDQktC40LfQvdCw0YfQsNGU0LzQviDQv9C+0YLQvtGH0L3RgyDQvNC+0LLRgyDQv9C10YDQtdC0INC/0LXRgNC10LzQuNC60LDQvdC90Y/QvFxuICAgIC8vICAgICAgICAgbGV0IGN1cnJlbnRMb2NhbGUgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxlXCIpIHx8IFwiaHJcIjtcbiAgICAvLyAgICAgICAgIGlmIChockxlbmcpIGN1cnJlbnRMb2NhbGUgPSAnaHInO1xuICAgIC8vICAgICAgICAgaWYgKGVuTGVuZykgY3VycmVudExvY2FsZSA9ICdlbic7XG4gICAgLy9cbiAgICAvLyAgICAgICAgIGlmIChjdXJyZW50TG9jYWxlID09PSBcImVuXCIpIHtcbiAgICAvLyAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwibG9jYWxlXCIpO1xuICAgIC8vICAgICAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwibG9jYWxlXCIsIFwiZW5cIik7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgLy8gICAgIH0pO1xuICAgIC8vIH1cbiAgICAvL1xuICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1idG5cIik/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgLy8gICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS10ZXN0XCIpPy5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKTtcbiAgICAvLyB9KTtcblxuICAgIC8vINCi0LjQvNGH0LDRgdC+0LLQuNC5INC+0LEn0ZTQutGCINC3INC00LDQvdC40LzQuCDQv9GA0L4g0L/RgNC+0LzRltC20LrQuCDRgtC40LbQvdGW0LJcbiAgICAvLyBUT0RPOiDQl9Cw0LzRltC90LjRgtC4INC90LAg0LTQsNC90ZYg0Lcg0LHQtdC60LXQvdC00YNcbiAgICAvLyDQn9GA0LjQutC70LDQtCDRgdGC0YDRg9C60YLRg9GA0Lgg0LTQsNC90LjRhSDQtyDQsdC10LrQtdC90LTRgzpcbiAgICAvLyB7XG4gICAgLy8gICAgIDE6IHsgc3RhcnQ6IFwiMjAyNS0xMi0xNVQwMDowMDowMFwiLCBlbmQ6IFwiMjAyNS0xMi0yMVQyMzo1OTo1OVwiIH0sXG4gICAgLy8gICAgIDI6IHsgc3RhcnQ6IFwiMjAyNS0xMi0yMlQwMDowMDowMFwiLCBlbmQ6IFwiMjAyNS0xMi0yOFQyMzo1OTo1OVwiIH0sXG4gICAgLy8gICAgIC4uLlxuICAgIC8vIH1cbiAgICAvLyDQlNC70Y8g0ZbQvdGC0LXQs9GA0LDRhtGW0Zcg0Lcg0LHQtdC60LXQvdC00L7QvDog0LfQsNC80ZbQvdC40YLQuCDRhtC10Lkg0L7QsSfRlNC60YIg0L3QsCDQtNCw0L3RliDQtyBBUElcbiAgICAvLyDQndCw0L/RgNC40LrQu9Cw0LQ6IGNvbnN0IHdlZWtzRGF0YSA9IGF3YWl0IHJlcXVlc3QoJy9hcGkvd2Vla3MnKTtcbiAgICBjb25zdCB3ZWVrc0RhdGEgPSB7XG4gICAgICAgIDE6IHtcbiAgICAgICAgICAgIHN0YXJ0OiBcIjIwMjUtMTItMTVUMDA6MDA6MDBcIixcbiAgICAgICAgICAgIGVuZDogXCIyMDI1LTEyLTIxVDIzOjU5OjU5XCJcbiAgICAgICAgfSxcbiAgICAgICAgMjoge1xuICAgICAgICAgICAgc3RhcnQ6IFwiMjAyNS0xMi0yMlQwMDowMDowMFwiLFxuICAgICAgICAgICAgZW5kOiBcIjIwMjUtMTItMjhUMjM6NTk6NTlcIlxuICAgICAgICB9LFxuICAgICAgICAzOiB7XG4gICAgICAgICAgICBzdGFydDogXCIyMDI1LTEyLTI5VDAwOjAwOjAwXCIsXG4gICAgICAgICAgICBlbmQ6IFwiMjAyNi0wMS0wNFQyMzo1OTo1OVwiXG4gICAgICAgIH0sXG4gICAgICAgIDQ6IHtcbiAgICAgICAgICAgIHN0YXJ0OiBcIjIwMjYtMDEtMDVUMDA6MDA6MDBcIixcbiAgICAgICAgICAgIGVuZDogXCIyMDI2LTAxLTExVDIzOjU5OjU5XCJcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyDQpNGD0L3QutGG0ZbRjyDQtNC70Y8g0LLQuNC30L3QsNGH0LXQvdC90Y8g0LDQutGC0LjQstC90L7Qs9C+INGC0LjQttC90Y8g0L3QsCDQvtGB0L3QvtCy0ZYg0LTQsNC90LjRhSDQtyDQvtCxJ9GU0LrRgtCwXG4gICAgZnVuY3Rpb24gZ2V0QWN0aXZlV2Vlayh3ZWVrc0RhdGEpIHtcbiAgICAgICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBsZXQgYWN0aXZlV2Vla0luZGV4ID0gbnVsbDtcblxuICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNC60LAg0LrQvtC20L3QvtCz0L4g0YLQuNC20L3Rj1xuICAgICAgICBmb3IgKGNvbnN0IHdlZWtOdW0gaW4gd2Vla3NEYXRhKSB7XG4gICAgICAgICAgICBjb25zdCB3ZWVrID0gd2Vla3NEYXRhW3dlZWtOdW1dO1xuICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSBuZXcgRGF0ZSh3ZWVrLnN0YXJ0KTtcbiAgICAgICAgICAgIGNvbnN0IGVuZCA9IG5ldyBEYXRlKHdlZWsuZW5kKTtcblxuICAgICAgICAgICAgaWYgKGN1cnJlbnREYXRlID49IHN0YXJ0ICYmIGN1cnJlbnREYXRlIDw9IGVuZCkge1xuICAgICAgICAgICAgICAgIGFjdGl2ZVdlZWtJbmRleCA9IHBhcnNlSW50KHdlZWtOdW0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFjdGl2ZVdlZWtJbmRleDtcbiAgICB9XG5cbiAgICAvLyDQhtC90ZbRhtGW0LDQu9GW0LfQsNGG0ZbRjyDRgdC10LrRhtGW0Zcg0ZbQs9C+0YAg0Lcg0LDQstGC0L7QvNCw0YLQuNGH0L3QuNC8INCy0LjQt9C90LDRh9C10L3QvdGP0Lwg0YLQuNC20L3Rj1xuICAgIGZ1bmN0aW9uIGluaXRHYW1lc1dlZWsoKSB7XG4gICAgICAgIC8vINCS0LjQt9C90LDRh9Cw0ZTQvNC+INCw0LrRgtC40LLQvdC40Lkg0YLQuNC20LTQtdC90Ywg0L3QsCDQvtGB0L3QvtCy0ZYg0LTQsNC90LjRhSDQtyDQvtCxJ9GU0LrRgtCwXG4gICAgICAgIGxldCBhY3RpdmVXZWVrID0gZ2V0QWN0aXZlV2Vlayh3ZWVrc0RhdGEpIHx8IDE7XG5cbiAgICAgICAgLy8g0J7QsdC80LXQttC10L3QvdGPINC00L4gNCDRgtC40LbQvdGW0LJcbiAgICAgICAgaWYgKGFjdGl2ZVdlZWsgPiA0KSBhY3RpdmVXZWVrID0gNDtcblxuICAgICAgICAvLyDQn9GA0LjRhdC+0LLRg9Cy0LDQvdC90Y8g0LLRgdGW0YUg0YHQv9C40YHQutGW0LIg0ZbQs9C+0YBcbiAgICAgICAgY29uc3QgZ2FtZUxpc3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdhbWVzX19saXN0Jyk7XG4gICAgICAgIGdhbWVMaXN0cy5mb3JFYWNoKGxpc3QgPT4ge1xuICAgICAgICAgICAgbGlzdC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vINCf0L7QutCw0Lcg0YLRltC70YzQutC4INCw0LrRgtC40LLQvdC+0LPQviDRgtC40LbQvdGPXG4gICAgICAgIGNvbnN0IGN1cnJlbnRMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmdhbWVzX19saXN0Ll93ZWVrJHthY3RpdmVXZWVrfWApO1xuICAgICAgICBpZiAoY3VycmVudExpc3QpIHtcbiAgICAgICAgICAgIGN1cnJlbnRMaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vINCQ0LLRgtC+0LzQsNGC0LjRh9C90LUg0LTQvtC00LDQstCw0L3QvdGPIGRhdGEt0LDRgtGA0LjQsdGD0YLRltCyINC00LvRjyDRgtGA0LXQutGW0L3Qs9GDINGC0LAg0LLRgdGC0LDQvdC+0LLQu9C10L3QvdGPINC/0L7RgdC40LvQsNC90YxcbiAgICAgICAgYXV0b0FkZERhdGFCdXR0b25zKCk7XG4gICAgICAgIHNldEdhbWVMaW5rcygpO1xuICAgIH1cblxuICAgIC8vINCi0LjQvNGH0LDRgdC+0LLQuNC5INC+0LEn0ZTQutGCINC3INC80LDQv9GW0L3Qs9C+0LwgZ2FtZS1pZCDQvdCwIFVSTFxuICAgIC8vIFRPRE86INCX0LDQvNGW0L3QuNGC0Lgg0L3QsCDQtNCw0L3RliDQtyDQsdC10LrQtdC90LTRg1xuICAgIC8vINCf0YDQuNC60LvQsNC0INGB0YLRgNGD0LrRgtGD0YDQuCDQtNCw0L3QuNGFINC3INCx0LXQutC10L3QtNGDOlxuICAgIC8vIHtcbiAgICAvLyAgICAgXCJ3ZWVrMV9nYW1lMVwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL2dhbWUtc2x1Zy0xXCIsXG4gICAgLy8gICAgIFwid2VlazFfZ2FtZTJcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9nYW1lLXNsdWctMlwiLFxuICAgIC8vICAgICAuLi5cbiAgICAvLyB9XG4gICAgLy8g0JTQu9GPINGW0L3RgtC10LPRgNCw0YbRltGXINC3INCx0LXQutC10L3QtNC+0Lw6IGNvbnN0IGdhbWVzTGlua3MgPSBhd2FpdCByZXF1ZXN0KCcvYXBpL2dhbWVzL2xpbmtzJyk7XG4gICAgY29uc3QgZ2FtZXNMaW5rcyA9IHtcbiAgICAgICAgLy8gV2VlayAxXG4gICAgICAgIFwid2VlazFfZ2FtZTFcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrMV9nYW1lMlwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWsxX2dhbWUzXCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazFfZ2FtZTRcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrMV9nYW1lNVwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWsxX2dhbWU2XCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazFfZ2FtZTdcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrMV9nYW1lOFwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWsxX2dhbWU5XCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazFfZ2FtZTEwXCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIC8vIFdlZWsgMlxuICAgICAgICBcIndlZWsyX2dhbWUxXCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazJfZ2FtZTJcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrMl9nYW1lM1wiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWsyX2dhbWU0XCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazJfZ2FtZTVcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrMl9nYW1lNlwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWsyX2dhbWU3XCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazJfZ2FtZThcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrMl9nYW1lOVwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWsyX2dhbWUxMFwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICAvLyBXZWVrIDNcbiAgICAgICAgXCJ3ZWVrM19nYW1lMVwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWszX2dhbWUyXCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazNfZ2FtZTNcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrM19nYW1lNFwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWszX2dhbWU1XCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazNfZ2FtZTZcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrM19nYW1lN1wiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWszX2dhbWU4XCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazNfZ2FtZTlcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrM19nYW1lMTBcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgLy8gV2VlayA0XG4gICAgICAgIFwid2VlazRfZ2FtZTFcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrNF9nYW1lMlwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWs0X2dhbWUzXCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazRfZ2FtZTRcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrNF9nYW1lNVwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWs0X2dhbWU2XCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazRfZ2FtZTdcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrNF9nYW1lOFwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWs0X2dhbWU5XCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazRfZ2FtZTEwXCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCJcbiAgICB9O1xuXG4gICAgLy8g0JLRgdGC0LDQvdC+0LLQu9C10L3QvdGPINGD0L3RltC60LDQu9GM0L3QuNGFINC/0L7RgdC40LvQsNC90Ywg0LTQu9GPINC60L7QttC90L7RlyDQs9GA0LhcbiAgICBmdW5jdGlvbiBzZXRHYW1lTGlua3MoKSB7XG4gICAgICAgIGNvbnN0IGdhbWVMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYW1lc19faXRlbS1saW5rW2RhdGEtZ2FtZS1pZF0nKTtcbiAgICAgICAgXG4gICAgICAgIGdhbWVMaW5rcy5mb3JFYWNoKGxpbmsgPT4ge1xuICAgICAgICAgICAgY29uc3QgZ2FtZUlkID0gbGluay5nZXRBdHRyaWJ1dGUoJ2RhdGEtZ2FtZS1pZCcpO1xuICAgICAgICAgICAgaWYgKGdhbWVJZCAmJiBnYW1lc0xpbmtzW2dhbWVJZF0pIHtcbiAgICAgICAgICAgICAgICBsaW5rLmhyZWYgPSBnYW1lc0xpbmtzW2dhbWVJZF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vINCQ0LLRgtC+0LzQsNGC0LjRh9C90LUg0LTQvtC00LDQstCw0L3QvdGPIGRhdGEt0LDRgtGA0LjQsdGD0YLRltCyINC00LvRjyDRgtGA0LXQutGW0L3Qs9GDXG4gICAgZnVuY3Rpb24gYXV0b0FkZERhdGFCdXR0b25zKCkge1xuICAgICAgICBjb25zdCBnYW1lTGlzdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2FtZXNfX2xpc3QnKTtcbiAgICAgICAgXG4gICAgICAgIGdhbWVMaXN0cy5mb3JFYWNoKGxpc3QgPT4ge1xuICAgICAgICAgICAgY29uc3Qgd2Vla01hdGNoID0gbGlzdC5jbGFzc05hbWUubWF0Y2goL193ZWVrKFxcZCspLyk7XG4gICAgICAgICAgICBpZiAoIXdlZWtNYXRjaCkgcmV0dXJuO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCB3ZWVrID0gd2Vla01hdGNoWzFdO1xuICAgICAgICAgICAgY29uc3QgaXRlbXMgPSBsaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYW1lc19faXRlbScpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpdGVtcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGdhbWVOdW1iZXIgPSBpbmRleCArIDE7XG4gICAgICAgICAgICAgICAgY29uc3QgYnV0dG9uTmFtZSA9IGB3ZWVrJHt3ZWVrfUdhbWUke2dhbWVOdW1iZXJ9YDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBsaW5rRWwgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5nYW1lc19faXRlbS1saW5rJyk7XG4gICAgICAgICAgICAgICAgaWYgKGxpbmtFbCkge1xuICAgICAgICAgICAgICAgICAgICAvLyDQntC90L7QstC70Y7RlNC80L4gZGF0YS1idXR0b24g0Y/QutGJ0L4g0YnQtSDQvdC1INCy0YHRgtCw0L3QvtCy0LvQtdC90L4g0LDQsdC+INC90LXQutC+0YDQtdC60YLQvdC1XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRCdXR0b24gPSBsaW5rRWwuZ2V0QXR0cmlidXRlKCdkYXRhLWJ1dHRvbicpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWN1cnJlbnRCdXR0b24gfHwgIWN1cnJlbnRCdXR0b24uaW5jbHVkZXMoYHdlZWske3dlZWt9R2FtZWApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rRWwuc2V0QXR0cmlidXRlKCdkYXRhLWJ1dHRvbicsIGJ1dHRvbk5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vINCS0YHRgtCw0L3QvtCy0LvRjtGU0LzQviBkYXRhLXByb21vINGP0LrRidC+INGJ0LUg0L3QtSDQstGB0YLQsNC90L7QstC70LXQvdC+XG4gICAgICAgICAgICAgICAgICAgIGlmICghbGlua0VsLmdldEF0dHJpYnV0ZSgnZGF0YS1wcm9tbycpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rRWwuc2V0QXR0cmlidXRlKCdkYXRhLXByb21vJywgJ3JhemluYV8yMDI2X2hyJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbn0pKCk7XG4iXX0=
