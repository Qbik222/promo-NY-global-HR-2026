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
  function initParticipateCanvas() {
    var canvas = document.querySelector('#participateCanvas');
    if (!canvas) return;
    var ctx = canvas.getContext('2d');
    canvas.width = 1366;
    canvas.height = 500;

    // Константи для розмірів та позицій
    var CANVAS_WIDTH = 1366;
    var CANVAS_HEIGHT = 500;
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
    var treeX = CANVAS_WIDTH / 2 - 300; // Трохи лівіше від центру
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

    // Клас для оленя
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
        this.zIndex = zIndex; // Порядок малювання 
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
      // Під ялинкою (treeY + висота ялинки - відступ)
      minX: CANVAS_WIDTH / 2 - 200,
      maxX: CANVAS_WIDTH / 2 + 300,
      speed: 0.5,
      zIndex: 3 // Малюється перед ялинкою (під ялинкою)
    }, {
      startX: CANVAS_WIDTH / 2 - 100,
      startY: CANVAS_HEIGHT / 2 - DEER_HEIGHT / 2 + 50,
      minX: CANVAS_WIDTH / 2 - 150,
      maxX: CANVAS_WIDTH / 2 + 150,
      speed: 0.3,
      zIndex: 2 // Малюється після ялинки (над ялинкою)
    }, {
      startX: CANVAS_WIDTH / 2 - 100,
      startY: CANVAS_HEIGHT / 2 - DEER_HEIGHT / 2 - 50,
      minX: CANVAS_WIDTH / 2 - 250,
      maxX: CANVAS_WIDTH / 2 + 250,
      speed: 0.4,
      zIndex: 1 // Малюється останнім (найвище)
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
      deerSprite: new Image() // Спрайт-лист замість одного зображення
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
    // Використовуємо спрайт-лист (якщо файл називається deer-sprite.png, змініть назву)
    images.deerSprite.src = 'img/participate/deer-sprite.png';
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwibWFpblBhZ2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJsb2FkZXIiLCJyZXN1bHRzVGFibGUiLCJyZXN1bHRzVGFibGVPdGhlciIsImhyTGVuZyIsImVuTGVuZyIsImxvY2FsZSIsImRlYnVnIiwiaGlkZUxvYWRlciIsImkxOG5EYXRhIiwidHJhbnNsYXRlU3RhdGUiLCJ1c2VySWQiLCJyZXF1ZXN0IiwibGluayIsImV4dHJhT3B0aW9ucyIsImZldGNoIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJvayIsIkVycm9yIiwianNvbiIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsInJlcG9ydEVycm9yIiwic3R5bGUiLCJkaXNwbGF5Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwic3RhcnRzV2l0aCIsIlByb21pc2UiLCJyZWplY3QiLCJjbGFzc0xpc3QiLCJhZGQiLCJib2R5Iiwib3ZlcmZsb3ciLCJyZW1vdmUiLCJpbml0IiwidHJ5RGV0ZWN0VXNlcklkIiwicXVpY2tDaGVja0FuZFJlbmRlciIsImluaXRHYW1lc1dlZWsiLCJpbml0UHJvZ3Jlc3NCYXIiLCJpbml0UGFydGljaXBhdGVDYW52YXMiLCJpbml0U25vd2ZsYWtlc0NhbnZhcyIsInNldFRpbWVvdXQiLCJkcm9wZG93bnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImRyb3Bkb3duIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50Iiwib3BlbiIsInN1bW1hcnkiLCJzdW1tYXJ5UmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImN1cnJlbnRTY3JvbGxZIiwic2Nyb2xsWSIsInBhZ2VZT2Zmc2V0IiwidGFyZ2V0U2Nyb2xsWSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInNjcm9sbFRvIiwiTWF0aCIsIm1heCIsImJlaGF2aW9yIiwic3RvcmUiLCJzdGF0ZSIsImdldFN0YXRlIiwiYXV0aCIsImlzQXV0aG9yaXplZCIsImlkIiwiZ191c2VyX2lkIiwiYXR0ZW1wdHMiLCJtYXhBdHRlbXB0cyIsImF0dGVtcHRJbnRlcnZhbCIsIndhaXRGb3JVc2VySWQiLCJyZXNvbHZlIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJsb2FkVHJhbnNsYXRpb25zIiwidHJhbnNsYXRlIiwicmVwb3J0RGF0YSIsIm9yaWdpbiIsInVzZXJpZCIsImVycm9yVGV4dCIsInRleHQiLCJtZXNzYWdlIiwidHlwZSIsIm5hbWUiLCJzdGFjayIsIm1ldGhvZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ3YXJuIiwiZWxlbXMiLCJsZW5ndGgiLCJlbGVtIiwia2V5IiwiZ2V0QXR0cmlidXRlIiwiaW5uZXJIVE1MIiwicmVtb3ZlQXR0cmlidXRlIiwibG9nIiwicmVmcmVzaExvY2FsaXplZENsYXNzIiwiZWxlbWVudCIsImxhbmciLCJyZW5kZXJVc2VycyIsIndlZWtOdW0iLCJ1c2VyRGF0YSIsIk51bWJlciIsIndlZWtPYmoiLCJmaW5kIiwidyIsIndlZWsiLCJkYXRhIiwiQXJyYXkiLCJpc0FycmF5IiwidXNlcnMiLCJpc1N0YWdlRW5kZWQiLCJ3aW5uZXJBZGRpdGlvbmFsUHJpemUiLCJ1Iiwid2lubmVyIiwiY3VycmVudFVzZXIiLCJ1c2VyIiwiaXNWZXJpZmllZFVzZXIiLCJwb2ludHMiLCJwb3B1bGF0ZVVzZXJzVGFibGUiLCJjdXJyZW50VXNlcklkIiwic2Vjb25kVGFibGVPdGhlciIsInNlY29uZFRhYmxlIiwiaXNUb3BDdXJyZW50VXNlciIsInNsaWNlIiwic29tZSIsInRvcFVzZXJzTGVuZ3RoIiwidG9wVXNlcnMiLCJkaXNwbGF5VXNlciIsImlzQ3VycmVudFVzZXIiLCJ0YWJsZSIsInJlbmRlclJvdyIsIm9wdGlvbnMiLCJoaWdobGlnaHQiLCJuZWlnaGJvciIsInVzZXJSb3ciLCJjcmVhdGVFbGVtZW50IiwidXNlclBsYWNlIiwiaW5kZXhPZiIsInByaXplS2V5IiwiZ2V0UHJpemVUcmFuc2xhdGlvbktleSIsInRyYW5zbGF0ZUtleSIsIm1hc2tVc2VySWQiLCJ0b0ZpeGVkIiwiYXBwZW5kIiwiaW5kZXgiLCJjYW52YXMiLCJwZXJjZW50RWxlbWVudCIsImN0eCIsImdldENvbnRleHQiLCJiYXJIZWlnaHQiLCJzZWdtZW50V2lkdGgiLCJzZWdtZW50SGVpZ2h0Iiwic2VnbWVudEdhcCIsInBhZGRpbmciLCJzZWdtZW50UmFkaXVzIiwiY3VycmVudFByb2dyZXNzIiwidGFyZ2V0UHJvZ3Jlc3MiLCJsb2FkaW5nRHVyYXRpb24iLCJzdGFydFRpbWUiLCJEYXRlIiwibm93IiwiYW5pbWF0aW9uSWQiLCJtYXhTZWdtZW50cyIsImlzTG9hZGluZ0NvbXBsZXRlIiwicmVzaXplQ2FudmFzIiwiY29udGFpbmVyIiwicGFyZW50RWxlbWVudCIsImNvbnRhaW5lcldpZHRoIiwib2Zmc2V0V2lkdGgiLCJ3aWR0aCIsImhlaWdodCIsImF2YWlsYWJsZVdpZHRoIiwic2VnbWVudFdpdGhHYXAiLCJmbG9vciIsImRyYXdQcm9ncmVzc0JhciIsInByb2dyZXNzIiwiY2xlYXJSZWN0Iiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJzdHJva2VSZWN0IiwiZmlsbGVkU2VnbWVudHMiLCJmaWxsU3R5bGUiLCJjZW50ZXJZIiwiaSIsIngiLCJ5IiwiYmVnaW5QYXRoIiwicm91bmRSZWN0IiwiciIsIm1vdmVUbyIsImxpbmVUbyIsInF1YWRyYXRpY0N1cnZlVG8iLCJjbG9zZVBhdGgiLCJmaWxsIiwidXBkYXRlUHJvZ3Jlc3MiLCJlbGFwc2VkIiwicGVyY2VudCIsInRleHRDb250ZW50IiwicmVzaXplVGltZW91dCIsImNsZWFyVGltZW91dCIsImluaXRJY29uc0FuaW1hdGlvbiIsImR1cmF0aW9uIiwiaWNvbnMiLCJvcmlnaW5hbFRyYW5zZm9ybXMiLCJNYXAiLCJzZWxlY3RvciIsImljb24iLCJjb21wdXRlZFN0eWxlIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIm9yaWdpbmFsVHJhbnNmb3JtIiwidHJhbnNmb3JtIiwic2V0Iiwib3BhY2l0eSIsInRyYW5zaXRpb24iLCJpY29uQ291bnQiLCJnZXQiLCJDQU5WQVNfV0lEVEgiLCJDQU5WQVNfSEVJR0hUIiwiVFJFRV9XSURUSCIsIlRSRUVfSEVJR0hUIiwiRlJBTUVTX1BFUl9ST1ciLCJUT1RBTF9ST1dTIiwiU1BSSVRFX1NIRUVUX1dJRFRIIiwiU1BSSVRFX1NIRUVUX0hFSUdIVCIsIkZSQU1FX1dJRFRIIiwiRlJBTUVfSEVJR0hUIiwiREVFUl9TQ0FMRSIsIkRFRVJfV0lEVEgiLCJERUVSX0hFSUdIVCIsInRyZWVYIiwidHJlZVkiLCJGUkFNRV9ERUxBWSIsIldBTEtJTkdfRlJBTUVTIiwiRlJBTUVfUkVQRUFUIiwiSURMRV9NSU5fRFVSQVRJT04iLCJJRExFX01BWF9EVVJBVElPTiIsIkRFRVJfU1RBVEUiLCJXQUxLSU5HIiwiSURMRSIsImZyYW1lQ291bnRlciIsIkRlZXIiLCJzdGFydFgiLCJzdGFydFkiLCJtaW5YIiwibWF4WCIsInNwZWVkIiwiekluZGV4IiwiZGlyZWN0aW9uIiwiZnJhbWVJbmRleCIsImZyYW1lUmVwZWF0Q291bnRlciIsImlkbGVUaW1lciIsImlkbGVEdXJhdGlvbiIsInJvdyIsImNvbCIsInNob3VsZFVwZGF0ZUZyYW1lIiwicmFuZG9tIiwic3ByaXRlSW1hZ2UiLCJmcmFtZVdpZHRoIiwiZnJhbWVIZWlnaHQiLCJkZWVyV2lkdGgiLCJkZWVySGVpZ2h0IiwiY29tcGxldGUiLCJnZXRTcHJpdGVGcmFtZUluZGV4Iiwic291cmNlWCIsInNvdXJjZVkiLCJkcmF3SW1hZ2UiLCJkZWVycyIsIkRFRVJfQ09VTlQiLCJkZWVyQ29uZmlncyIsImNvbmZpZyIsInB1c2giLCJpbWFnZXMiLCJiYWNrZ3JvdW5kIiwiSW1hZ2UiLCJ0cmVlIiwiZGVlclNwcml0ZSIsImltYWdlc0xvYWRlZCIsInRvdGFsSW1hZ2VzIiwib25JbWFnZUxvYWQiLCJkcmF3Q2FudmFzIiwic3RhcnRBbmltYXRpb24iLCJvbmxvYWQiLCJzcmMiLCJUUkVFX1pfSU5ERVgiLCJkcmF3YWJsZUVsZW1lbnRzIiwiZGVlciIsImRyYXciLCJzb3J0IiwiYSIsImIiLCJhbmltYXRlIiwidXBkYXRlIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJvYnNlcnZlIiwiZmF2UGFnZSIsIlNOT1dGTEFLRV9DT1VOVCIsIlNOT1dGTEFLRV9NSU5fU0laRSIsIlNOT1dGTEFLRV9NQVhfU0laRSIsIlNOT1dGTEFLRV9NSU5fU1BFRUQiLCJTTk9XRkxBS0VfTUFYX1NQRUVEIiwiU05PV0ZMQUtFX1dJTkRfUkFOR0UiLCJTTk9XRkxBS0VfU1BBV05fSU5URVJWQUwiLCJzbm93Zmxha2VzIiwibGFzdFNub3dmbGFrZVRpbWUiLCJuZXdXaWR0aCIsIm5ld0hlaWdodCIsInJlY3QiLCJpbm5lcldpZHRoIiwib2Zmc2V0SGVpZ2h0IiwiY2xpZW50SGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJzbm93Zmxha2VJbWFnZSIsImltYWdlTG9hZGVkIiwid2FpdEZvclBhZ2VSZWFkeSIsImlzUGFnZUxvYWRpbmciLCJjb250YWlucyIsIlNub3dmbGFrZSIsInNpemUiLCJ3aW5kIiwicm90YXRpb24iLCJQSSIsInJvdGF0aW9uU3BlZWQiLCJzaW4iLCJzYXZlIiwiZ2xvYmFsQWxwaGEiLCJyb3RhdGUiLCJyZXN0b3JlIiwiY3JlYXRlU25vd2ZsYWtlIiwidXBkYXRlU25vd2ZsYWtlcyIsImlzT2ZmU2NyZWVuIiwic3BsaWNlIiwiZHJhd1Nub3dmbGFrZXMiLCJzbm93Zmxha2UiLCJ3ZWVrc0RhdGEiLCJzdGFydCIsImVuZCIsImdldEFjdGl2ZVdlZWsiLCJjdXJyZW50RGF0ZSIsImFjdGl2ZVdlZWtJbmRleCIsInBhcnNlSW50IiwiYWN0aXZlV2VlayIsImdhbWVMaXN0cyIsImxpc3QiLCJjdXJyZW50TGlzdCIsImF1dG9BZGREYXRhQnV0dG9ucyIsInNldEdhbWVMaW5rcyIsImdhbWVzTGlua3MiLCJnYW1lTGlua3MiLCJnYW1lSWQiLCJ3ZWVrTWF0Y2giLCJjbGFzc05hbWUiLCJtYXRjaCIsIml0ZW1zIiwiaXRlbSIsImdhbWVOdW1iZXIiLCJidXR0b25OYW1lIiwibGlua0VsIiwiY3VycmVudEJ1dHRvbiIsImluY2x1ZGVzIiwic2V0QXR0cmlidXRlIl0sIm1hcHBpbmdzIjoiOzs7K0NBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBLENBQUMsWUFBWTtFQUVULElBQU1BLE1BQU0sR0FBRyxzQ0FBc0M7RUFFckQsSUFBTUMsUUFBUSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxXQUFXLENBQUM7SUFDaERDLE1BQU0sR0FBR0YsUUFBUSxDQUFDQyxhQUFhLENBQUMsa0JBQWtCLENBQUM7SUFDbkRFLFlBQVksR0FBR0gsUUFBUSxDQUFDQyxhQUFhLENBQUMsUUFBUSxDQUFDO0lBQy9DRyxpQkFBaUIsR0FBR0osUUFBUSxDQUFDQyxhQUFhLENBQUMsYUFBYSxDQUFDO0VBRTdELElBQU1JLE1BQU0sR0FBR0wsUUFBUSxDQUFDQyxhQUFhLENBQUMsU0FBUyxDQUFDO0VBQ2hELElBQU1LLE1BQU0sR0FBR04sUUFBUSxDQUFDQyxhQUFhLENBQUMsU0FBUyxDQUFDO0VBRWhELElBQUlNLE1BQU0sR0FBRyxJQUFJO0VBQ2pCOztFQUVBLElBQUlGLE1BQU0sRUFBRUUsTUFBTSxHQUFHLElBQUk7RUFDekIsSUFBSUQsTUFBTSxFQUFFQyxNQUFNLEdBQUcsSUFBSTtFQUV6QixJQUFJQyxLQUFLLEdBQUcsS0FBSztFQUVqQixJQUFJQSxLQUFLLEVBQUVDLFVBQVUsRUFBRTtFQUV2QixJQUFJQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO0VBQ2pCLElBQU1DLGNBQWMsR0FBRyxLQUFLO0VBQzVCLElBQUlDLE1BQU0sR0FBRyxJQUFJO0VBQ2pCOztFQUVBLElBQU1DLE9BQU8sR0FB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LE9BQU8sQ0FBQyxVQUFBcVQsSUFBSSxFQUFJO01BQ3RCLElBQU1PLFNBQVMsR0FBR1AsSUFBSSxDQUFDUSxTQUFTLENBQUNDLEtBQUssQ0FBQyxZQUFZLENBQUM7TUFDcEQsSUFBSSxDQUFDRixTQUFTLEVBQUU7TUFFaEIsSUFBTTFQLElBQUksR0FBRzBQLFNBQVMsQ0FBQyxDQUFDLENBQUM7TUFDekIsSUFBTUcsS0FBSyxHQUFHVixJQUFJLENBQUN0VCxnQkFBZ0IsQ0FBQyxjQUFjLENBQUM7TUFFbkRnVSxLQUFLLENBQUMvVCxPQUFPLENBQUMsVUFBQ2dVLElBQUksRUFBRXZOLEtBQUssRUFBSztRQUMzQixJQUFNd04sVUFBVSxHQUFHeE4sS0FBSyxHQUFHLENBQUM7UUFDNUIsSUFBTXlOLFVBQVUsaUJBQVVoUSxJQUFJLGlCQUFPK1AsVUFBVSxDQUFFO1FBRWpELElBQU1FLE1BQU0sR0FBR0gsSUFBSSxDQUFDalgsYUFBYSxDQUFDLG1CQUFtQixDQUFDO1FBQ3RELElBQUlvWCxNQUFNLEVBQUU7VUFDUjtVQUNBLElBQU1DLGFBQWEsR0FBR0QsTUFBTSxDQUFDL1EsWUFBWSxDQUFDLGFBQWEsQ0FBQztVQUN4RCxJQUFJLENBQUNnUixhQUFhLElBQUksQ0FBQ0EsYUFBYSxDQUFDQyxRQUFRLGVBQVFuUSxJQUFJLFVBQU8sRUFBRTtZQUM5RGlRLE1BQU0sQ0FBQ0csWUFBWSxDQUFDLGFBQWEsRUFBRUosVUFBVSxDQUFDO1VBQ2xEO1VBQ0E7VUFDQSxJQUFJLENBQUNDLE1BQU0sQ0FBQy9RLFlBQVksQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUNwQytRLE1BQU0sQ0FBQ0csWUFBWSxDQUFDLFlBQVksRUFBRSxnQkFBZ0IsQ0FBQztVQUN2RDtRQUNKO01BQ0osQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDO0VBQ047QUFHSixDQUFDLEdBQUciLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XG5cbiAgICBjb25zdCBhcGlVUkwgPSAnaHR0cHM6Ly9mYXYtcHJvbS5jb20vYXBpX2JsYWNrX3ByaXplJ1xuXG4gICAgY29uc3QgbWFpblBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhdi1wYWdlXCIpLFxuICAgICAgICBsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNwaW5uZXItb3ZlcmxheVwiKSxcbiAgICAgICAgcmVzdWx0c1RhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YWJsZVwiKSxcbiAgICAgICAgcmVzdWx0c1RhYmxlT3RoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RhYmxlT3RoZXJcIilcblxuICAgIGNvbnN0IGhyTGVuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNockxlbmcnKTtcbiAgICBjb25zdCBlbkxlbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW5MZW5nJyk7XG5cbiAgICBsZXQgbG9jYWxlID0gXCJoclwiXG4gICAgLy8gbGV0IGxvY2FsZSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJsb2NhbGVcIikgfHwgXCJoclwiXG5cbiAgICBpZiAoaHJMZW5nKSBsb2NhbGUgPSAnaHInO1xuICAgIGlmIChlbkxlbmcpIGxvY2FsZSA9ICdlbic7XG5cbiAgICBsZXQgZGVidWcgPSBmYWxzZVxuXG4gICAgaWYgKGRlYnVnKSBoaWRlTG9hZGVyKClcblxuICAgIGxldCBpMThuRGF0YSA9IHt9O1xuICAgIGNvbnN0IHRyYW5zbGF0ZVN0YXRlID0gZmFsc2U7XG4gICAgbGV0IHVzZXJJZCA9IG51bGw7XG4gICAgLy8gbGV0IHVzZXJJZCA9IE51bWJlcihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpKSA/PyBudWxsXG5cbiAgICBjb25zdCByZXF1ZXN0ID0gZnVuY3Rpb24gKGxpbmssIGV4dHJhT3B0aW9ucykge1xuICAgICAgICByZXR1cm4gZmV0Y2goYXBpVVJMICsgbGluaywge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC4uLihleHRyYU9wdGlvbnMgfHwge30pXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghcmVzLm9rKSB0aHJvdyBuZXcgRXJyb3IoJ0FQSSBlcnJvcicpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0FQSSByZXF1ZXN0IGZhaWxlZDonLCBlcnIpO1xuXG4gICAgICAgICAgICAgICAgcmVwb3J0RXJyb3IoZXJyKTtcblxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXYtcGFnZScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLnN0YXJ0c1dpdGgoXCJodHRwczovL3d3dy5mYXZiZXQuaHIvXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9wcm9tb2NpamUvcHJvbW9jaWphL3N0dWIvJztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvcHJvbW9zL3Byb21vL3N0dWIvJztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlkZUxvYWRlcigpe1xuICAgICAgICBsb2FkZXIuY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiXG4gICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5yZW1vdmUoXCJsb2FkaW5nXCIpXG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgbGV0IGF0dGVtcHRzID0gMDtcbiAgICAgICAgY29uc3QgbWF4QXR0ZW1wdHMgPSAyMDtcbiAgICAgICAgY29uc3QgYXR0ZW1wdEludGVydmFsID0gNTA7XG5cbiAgICAgICAgZnVuY3Rpb24gdHJ5RGV0ZWN0VXNlcklkKCkge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5zdG9yZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gd2luZG93LnN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgICAgICAgICAgdXNlcklkID0gc3RhdGUuYXV0aC5pc0F1dGhvcml6ZWQgJiYgc3RhdGUuYXV0aC5pZCB8fCAnJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAod2luZG93LmdfdXNlcl9pZCkge1xuICAgICAgICAgICAgICAgIHVzZXJJZCA9IHdpbmRvdy5nX3VzZXJfaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBxdWlja0NoZWNrQW5kUmVuZGVyKCkge1xuICAgICAgICAgICAgaW5pdEdhbWVzV2VlaygpO1xuICAgICAgICAgICAgaW5pdFByb2dyZXNzQmFyKCk7XG4gICAgICAgICAgICBpbml0UGFydGljaXBhdGVDYW52YXMoKTtcbiAgICAgICAgICAgIGluaXRTbm93Zmxha2VzQ2FudmFzKCk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGhpZGVMb2FkZXIsIDMwMCk7XG5cbiAgICAgICAgICAgIC8vIEZpeCBkcm9wZG93biBzY3JvbGwgaXNzdWUgLSBwcmV2ZW50IHBhZ2UgZnJvbSBzaGlmdGluZyB1cCB3aGVuIG9wZW5pbmcgZHJvcGRvd25cbiAgICAgICAgICAgIGNvbnN0IGRyb3Bkb3ducyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcm9wZG93bicpO1xuICAgICAgICAgICAgZHJvcGRvd25zLmZvckVhY2goKGRyb3Bkb3duKSA9PiB7XG4gICAgICAgICAgICAgICAgZHJvcGRvd24uYWRkRXZlbnRMaXN0ZW5lcigndG9nZ2xlJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub3Blbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRHJvcGRvd24gaXMgb3BlbmluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3VtbWFyeSA9IHRoaXMucXVlcnlTZWxlY3Rvcignc3VtbWFyeScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN1bW1hcnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBHZXQgc3VtbWFyeSBwb3NpdGlvbiByZWxhdGl2ZSB0byB2aWV3cG9ydFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN1bW1hcnlSZWN0ID0gc3VtbWFyeS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIHN1bW1hcnkgaXMgbmVhciB0aGUgdG9wIG9mIHZpZXdwb3J0ICh3aXRoaW4gMTAwcHggZnJvbSB0b3ApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN1bW1hcnlSZWN0LnRvcCA8IDEwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDYWxjdWxhdGUgaG93IG11Y2ggdG8gc2Nyb2xsIHRvIGtlZXAgc3VtbWFyeSB2aXNpYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRTY3JvbGxZID0gd2luZG93LnNjcm9sbFkgfHwgd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXRTY3JvbGxZID0gY3VycmVudFNjcm9sbFkgKyBzdW1tYXJ5UmVjdC50b3AgLSAxMjA7IC8vIDEyMHB4IG9mZnNldCBmcm9tIHRvcFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFVzZSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgZm9yIHNtb290aCBzY3JvbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiBNYXRoLm1heCgwLCB0YXJnZXRTY3JvbGxZKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHdhaXRGb3JVc2VySWQgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdHJ5RGV0ZWN0VXNlcklkKCk7XG4gICAgICAgICAgICAgICAgaWYgKHVzZXJJZCB8fCBhdHRlbXB0cyA+PSBtYXhBdHRlbXB0cykge1xuICAgICAgICAgICAgICAgICAgICBxdWlja0NoZWNrQW5kUmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGF0dGVtcHRzKys7XG4gICAgICAgICAgICB9LCBhdHRlbXB0SW50ZXJ2YWwpO1xuICAgICAgICB9KTtcblxuICAgICAgICBhd2FpdCB3YWl0Rm9yVXNlcklkO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvYWRUcmFuc2xhdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiByZXF1ZXN0KGAvbmV3LXRyYW5zbGF0ZXMvJHtsb2NhbGV9YClcbiAgICAgICAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgICAgIGkxOG5EYXRhID0ganNvbjtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGUoKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBtdXRhdGlvbk9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKG11dGF0aW9ucykge1xuICAgICAgICAgICAgICAgIC8vICAgICBtdXRhdGlvbk9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgdHJhbnNsYXRlKCk7XG4gICAgICAgICAgICAgICAgLy8gICAgIG11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXROb2RlLCB7IGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgICAgICAgICAvLyBtdXRhdGlvbk9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoYXJkY29yZVRlbm5pc1wiKSwge1xuICAgICAgICAgICAgICAgIC8vICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgLy8gICAgIHN1YnRyZWU6IHRydWVcbiAgICAgICAgICAgICAgICAvLyB9KTtcblxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVwb3J0RXJyb3IoZXJyKSB7XG4gICAgICAgIGNvbnN0IHJlcG9ydERhdGEgPSB7XG4gICAgICAgICAgICBvcmlnaW46IHdpbmRvdy5sb2NhdGlvbi5ocmVmLFxuICAgICAgICAgICAgdXNlcmlkOiB1c2VySWQsXG4gICAgICAgICAgICBlcnJvclRleHQ6IGVycj8uZXJyb3IgfHwgZXJyPy50ZXh0IHx8IGVycj8ubWVzc2FnZSB8fCAnVW5rbm93biBlcnJvcicsXG4gICAgICAgICAgICB0eXBlOiBlcnI/Lm5hbWUgfHwgJ1Vua25vd25FcnJvcicsXG4gICAgICAgICAgICBzdGFjazogZXJyPy5zdGFjayB8fCAnJ1xuICAgICAgICB9O1xuXG4gICAgICAgIGZldGNoKCdodHRwczovL2Zhdi1wcm9tLmNvbS9hcGktY21zL3JlcG9ydHMvYWRkJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcG9ydERhdGEpXG4gICAgICAgIH0pLmNhdGNoKGNvbnNvbGUud2Fybik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdHJhbnNsYXRlKCkge1xuICAgICAgICBjb25zdCBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRyYW5zbGF0ZV0nKVxuICAgICAgICBpZiAoZWxlbXMgJiYgZWxlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZih0cmFuc2xhdGVTdGF0ZSl7XG4gICAgICAgICAgICAgICAgZWxlbXMuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gZWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgICAgICAgICAgICAgICAgIGVsZW0uaW5uZXJIVE1MID0gaTE4bkRhdGFba2V5XSB8fCAnKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiAgIGtleTogICcgKyBrZXk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpMThuRGF0YVtrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRyYW5zbGF0aW9uIHdvcmtzIVwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChsb2NhbGUgPT09ICdlbicpIHtcbiAgICAgICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5hZGQoJ2VuJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmVmcmVzaExvY2FsaXplZENsYXNzKG1haW5QYWdlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWZyZXNoTG9jYWxpemVkQ2xhc3MoZWxlbWVudCkge1xuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IGxhbmcgb2YgWydocicsICdlbiddKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUobGFuZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGxvY2FsZSk7XG4gICAgfVxuXG5cblxuXG4gICAgZnVuY3Rpb24gcmVuZGVyVXNlcnMod2Vla051bSwgdXNlckRhdGEgPSBbXSkge1xuICAgICAgICB3ZWVrTnVtID0gTnVtYmVyKHdlZWtOdW0pO1xuICAgICAgICBjb25zdCB3ZWVrT2JqID0gdXNlckRhdGEuZmluZCh3ID0+IHcud2VlayA9PT0gd2Vla051bSk7XG4gICAgICAgIGlmICghd2Vla09iaiB8fCAhd2Vla09iai5kYXRhIHx8ICFBcnJheS5pc0FycmF5KHdlZWtPYmouZGF0YS51c2VycykpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ9Cd0LXQstGW0YDQvdCwINGB0YLRgNGD0LrRgtGD0YDQsCDQtNCw0L3QuNGFJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpc1N0YWdlRW5kZWQgPSB3ZWVrT2JqLmRhdGEuaXNTdGFnZUVuZGVkXG5cbiAgICAgICAgdXNlckRhdGEgPSB3ZWVrT2JqLmRhdGEudXNlcnM7XG5cbiAgICAgICAgY29uc3Qgd2lubmVyQWRkaXRpb25hbFByaXplID0gdXNlckRhdGEuZmluZCh1ID0+IHtcbiAgICAgICAgICAgIGlmKHUud2lubmVyID09PSB0cnVlKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRVc2VyID0gdXNlckRhdGEuZmluZCh1c2VyID0+IHVzZXIudXNlcmlkID09PSB1c2VySWQpO1xuXG4gICAgICAgIGlmKHVzZXJJZCAmJiAhY3VycmVudFVzZXIgJiYgaXNWZXJpZmllZFVzZXIpe1xuICAgICAgICAgICAgdXNlckRhdGEgPSBbLi4udXNlckRhdGEsIHt1c2VyaWQ6IHVzZXJJZCwgcG9pbnRzOiAwfV1cbiAgICAgICAgfVxuICAgICAgICBwb3B1bGF0ZVVzZXJzVGFibGUodXNlckRhdGEsIHVzZXJJZCwgd2Vla051bSwgY3VycmVudFVzZXIsIGlzVmVyaWZpZWRVc2VyLCBpc1N0YWdlRW5kZWQsIHdpbm5lckFkZGl0aW9uYWxQcml6ZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcG9wdWxhdGVVc2Vyc1RhYmxlKHVzZXJzLCBjdXJyZW50VXNlcklkLCB3ZWVrLCBjdXJyZW50VXNlciwgaXNWZXJpZmllZFVzZXIsIGlzU3RhZ2VFbmRlZCwgd2lubmVyQWRkaXRpb25hbFByaXplKSB7XG4gICAgICAgIGlmICghdXNlcnM/Lmxlbmd0aCkgcmV0dXJuO1xuICAgICAgICByZXN1bHRzVGFibGUuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHJlc3VsdHNUYWJsZU90aGVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBzZWNvbmRUYWJsZU90aGVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBzZWNvbmRUYWJsZS5pbm5lckhUTUwgPSAnJztcblxuXG4gICAgICAgIGNvbnN0IGlzVG9wQ3VycmVudFVzZXIgPSBjdXJyZW50VXNlciAmJiB1c2Vycy5zbGljZSgwLCAxMCkuc29tZSh1c2VyID0+IHVzZXIudXNlcmlkID09PSBjdXJyZW50VXNlcklkKTtcblxuICAgICAgICBjb25zdCB0b3BVc2Vyc0xlbmd0aCA9ICF1c2VySWQgfHwgaXNUb3BDdXJyZW50VXNlciAgPyAxMCA6IDEwO1xuXG4gICAgICAgIGNvbnN0IHRvcFVzZXJzID0gdXNlcnMuc2xpY2UoMCwgdG9wVXNlcnNMZW5ndGgpO1xuXG4gICAgICAgIHRvcFVzZXJzLmZvckVhY2godXNlciA9PiB7XG4gICAgICAgICAgICBkaXNwbGF5VXNlcih1c2VyLCB1c2VyLnVzZXJpZCA9PT0gY3VycmVudFVzZXJJZCwgcmVzdWx0c1RhYmxlLCB0b3BVc2VycywgaXNUb3BDdXJyZW50VXNlciwgd2Vlayk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZihpc1ZlcmlmaWVkVXNlciAmJiAhY3VycmVudFVzZXIpIHtcbiAgICAgICAgICAgIGRpc3BsYXlVc2VyKGN1cnJlbnRVc2VyLCB0cnVlLCByZXN1bHRzVGFibGVPdGhlciwgdXNlcnMsIGZhbHNlLCB3ZWVrKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaXNUb3BDdXJyZW50VXNlciAmJiBjdXJyZW50VXNlcikge1xuICAgICAgICAgICAgZGlzcGxheVVzZXIoY3VycmVudFVzZXIsIHRydWUsIHJlc3VsdHNUYWJsZU90aGVyLCB1c2VycywgZmFsc2UsIHdlZWspO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzcGxheVVzZXIodXNlciwgaXNDdXJyZW50VXNlciwgdGFibGUsIHVzZXJzLCBpc1RvcEN1cnJlbnRVc2VyLCB3ZWVrKSB7XG5cbiAgICAgICAgY29uc3QgcmVuZGVyUm93ID0gKHVzZXJEYXRhLCBvcHRpb25zID0ge30pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgaGlnaGxpZ2h0ID0gZmFsc2UsIG5laWdoYm9yID0gZmFsc2UgfSA9IG9wdGlvbnM7XG4gICAgICAgICAgICBjb25zdCB1c2VyUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoJ3RhYmxlX19yb3cnKTtcblxuICAgICAgICAgICAgY29uc3QgdXNlclBsYWNlID0gdXNlcnMuaW5kZXhPZih1c2VyRGF0YSkgKyAxO1xuICAgICAgICAgICAgY29uc3QgcHJpemVLZXkgPSBkZWJ1ZyA/IG51bGwgOiBnZXRQcml6ZVRyYW5zbGF0aW9uS2V5KHVzZXJQbGFjZSwgd2Vlayk7XG5cbiAgICAgICAgICAgIGlmICh1c2VyUGxhY2UgPD0gMykge1xuICAgICAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZChgcGxhY2Uke3VzZXJQbGFjZX1gKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGhpZ2hsaWdodCB8fCBpc0N1cnJlbnRVc2VyICYmICFuZWlnaGJvcikge1xuICAgICAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZCgneW91Jyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5laWdoYm9yKSB7XG4gICAgICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKCdfbmVpZ2hib3InKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdXNlclJvdy5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHt1c2VyUGxhY2UgPCAxMCA/ICcwJyArIHVzZXJQbGFjZSA6IHVzZXJQbGFjZX1cbiAgICAgICAgICAgICAgICAke2lzQ3VycmVudFVzZXIgJiYgIW5laWdoYm9yID8gJzxzcGFuIGNsYXNzPVwieW91XCI+JyArIHRyYW5zbGF0ZUtleShcInlvdVwiKSArICc8L3NwYW4+JyA6ICcnfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHtpc0N1cnJlbnRVc2VyICYmICFuZWlnaGJvciA/IHVzZXJEYXRhLnVzZXJpZCA6IG1hc2tVc2VySWQodXNlckRhdGEudXNlcmlkKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuICAgICAgICAgICAgICAgICR7TnVtYmVyKHVzZXJEYXRhLnBvaW50cykudG9GaXhlZCgyKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuICAgICAgICAgICAgICAgICR7cHJpemVLZXkgPyB0cmFuc2xhdGVLZXkocHJpemVLZXkpIDogJyAtICd9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcblxuICAgICAgICAgICAgdGFibGUuYXBwZW5kKHVzZXJSb3cpO1xuICAgICAgICB9O1xuICAgICAgICBpZiAoaXNDdXJyZW50VXNlciAmJiAhaXNUb3BDdXJyZW50VXNlcikge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB1c2Vycy5pbmRleE9mKHVzZXIpO1xuICAgICAgICAgICAgaWYgKHVzZXJzW2luZGV4IC0gMV0pIHtcbiAgICAgICAgICAgICAgICByZW5kZXJSb3codXNlcnNbaW5kZXggLSAxXSwgeyBuZWlnaGJvcjogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlbmRlclJvdyh1c2VyLCB7IGhpZ2hsaWdodDogdHJ1ZSB9KTtcbiAgICAgICAgICAgIGlmICh1c2Vyc1tpbmRleCArIDFdKSB7XG4gICAgICAgICAgICAgICAgcmVuZGVyUm93KHVzZXJzW2luZGV4ICsgMV0sIHsgbmVpZ2hib3I6IHRydWUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZW5kZXJSb3codXNlcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0UHJvZ3Jlc3NCYXIoKSB7XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9ncmVzc0JhckNhbnZhcycpO1xuICAgICAgICBjb25zdCBwZXJjZW50RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9ncmVzc1BlcmNlbnQnKTtcbiAgICAgICAgaWYgKCFjYW52YXMgfHwgIXBlcmNlbnRFbGVtZW50KSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIFxuICAgICAgICAvLyDQmtC+0L3RgdGC0LDQvdGC0LhcbiAgICAgICAgY29uc3QgYmFySGVpZ2h0ID0gMjA7IC8vINCS0LjRgdC+0YLQsCDQv9GA0L7Qs9GA0LXRgS3QsdCw0YDRg1xuICAgICAgICBjb25zdCBzZWdtZW50V2lkdGggPSA0OyAvLyDQqNC40YDQuNC90LAg0L7QtNC90L7Qs9C+INGB0LXQs9C80LXQvdGC0LBcbiAgICAgICAgY29uc3Qgc2VnbWVudEhlaWdodCA9IDE0OyAvLyDQktC40YHQvtGC0LAg0L7QtNC90L7Qs9C+INGB0LXQs9C80LXQvdGC0LBcbiAgICAgICAgY29uc3Qgc2VnbWVudEdhcCA9IDI7IC8vINCf0YDQvtC80ZbQttC+0Log0LzRltC2INGB0LXQs9C80LXQvdGC0LDQvNC4XG4gICAgICAgIGNvbnN0IHBhZGRpbmcgPSAyOyAvLyDQktGW0LTRgdGC0YPQvyDQstGW0LQg0LrRgNCw0ZfQslxuICAgICAgICBjb25zdCBzZWdtZW50UmFkaXVzID0gMTsgLy8gQm9yZGVyIHJhZGl1cyDQtNC70Y8g0YHQtdCz0LzQtdC90YLRltCyXG4gICAgICAgIFxuICAgICAgICAvLyDQn9Cw0YDQsNC80LXRgtGA0Lgg0LDQvdGW0LzQsNGG0ZbRlyDQt9Cw0LLQsNC90YLQsNC20LXQvdC90Y9cbiAgICAgICAgbGV0IGN1cnJlbnRQcm9ncmVzcyA9IDE7IC8vINCf0L7Rh9C40L3QsNGU0LzQviDQtyAxJVxuICAgICAgICBjb25zdCB0YXJnZXRQcm9ncmVzcyA9IDEwMDsgLy8g0KbRltC70YzQvtCy0LjQuSDQv9GA0L7Qs9GA0LXRgVxuICAgICAgICBjb25zdCBsb2FkaW5nRHVyYXRpb24gPSAzMDAwOyAvLyDQotGA0LjQstCw0LvRltGB0YLRjCDQt9Cw0LLQsNC90YLQsNC20LXQvdC90Y86IDMg0YHQtdC60YPQvdC00LhcbiAgICAgICAgbGV0IHN0YXJ0VGltZSA9IERhdGUubm93KCk7XG4gICAgICAgIGxldCBhbmltYXRpb25JZCA9IG51bGw7XG4gICAgICAgIGxldCBtYXhTZWdtZW50cyA9IDA7XG4gICAgICAgIGxldCBpc0xvYWRpbmdDb21wbGV0ZSA9IGZhbHNlO1xuICAgICAgICBcbiAgICAgICAgZnVuY3Rpb24gcmVzaXplQ2FudmFzKCkge1xuICAgICAgICAgICAgLy8g0J7RgtGA0LjQvNGD0ZTQvNC+INGA0L7Qt9C80ZbRgNC4INC60L7QvdGC0LXQudC90LXRgNCwXG4gICAgICAgICAgICBjb25zdCBjb250YWluZXIgPSBjYW52YXMucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lcldpZHRoID0gY29udGFpbmVyLm9mZnNldFdpZHRoIHx8IDc2ODtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0JLRgdGC0LDQvdC+0LLQu9GO0ZTQvNC+INGA0L7Qt9C80ZbRgNC4IGNhbnZhc1xuICAgICAgICAgICAgY2FudmFzLndpZHRoID0gY29udGFpbmVyV2lkdGg7XG4gICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gYmFySGVpZ2h0O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQoNC+0LfRgNCw0YXQvtCy0YPRlNC80L4g0LrRltC70YzQutGW0YHRgtGMINGB0LXQs9C80LXQvdGC0ZbQsiwg0YnQviDQv9C+0LzRltGB0YLRj9GC0YzRgdGPXG4gICAgICAgICAgICBjb25zdCBhdmFpbGFibGVXaWR0aCA9IGNvbnRhaW5lcldpZHRoIC0gKHBhZGRpbmcgKiAyKTtcbiAgICAgICAgICAgIGNvbnN0IHNlZ21lbnRXaXRoR2FwID0gc2VnbWVudFdpZHRoICsgc2VnbWVudEdhcDtcbiAgICAgICAgICAgIG1heFNlZ21lbnRzID0gTWF0aC5mbG9vcihhdmFpbGFibGVXaWR0aCAvIHNlZ21lbnRXaXRoR2FwKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0J/QtdGA0LXQvNCw0LvRjNC+0LLRg9GU0LzQviDQtyDQv9C+0YLQvtGH0L3QuNC8INC/0YDQvtCz0YDQtdGB0L7QvFxuICAgICAgICAgICAgaWYgKGN1cnJlbnRQcm9ncmVzcyA+IDApIHtcbiAgICAgICAgICAgICAgICBkcmF3UHJvZ3Jlc3NCYXIoY3VycmVudFByb2dyZXNzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZnVuY3Rpb24gZHJhd1Byb2dyZXNzQmFyKHByb2dyZXNzKSB7XG4gICAgICAgICAgICAvLyDQntGH0LjRidCw0ZTQvNC+IGNhbnZhc1xuICAgICAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQnNCw0LvRjtGU0LzQviDRgNCw0LzQutGDICjQsdGW0LvQuNC5INC/0YDRj9C80L7QutGD0YLQvdC40LopXG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnI0ZGRkZGRic7XG4gICAgICAgICAgICBjdHgubGluZVdpZHRoID0gMTtcbiAgICAgICAgICAgIGN0eC5zdHJva2VSZWN0KDAuNSwgMC41LCBjYW52YXMud2lkdGggLSAxLCBjYW52YXMuaGVpZ2h0IC0gMSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCg0L7Qt9GA0LDRhdC+0LLRg9GU0LzQviDQutGW0LvRjNC60ZbRgdGC0Ywg0LfQsNC/0L7QstC90LXQvdC40YUg0YHQtdCz0LzQtdC90YLRltCyXG4gICAgICAgICAgICBjb25zdCBmaWxsZWRTZWdtZW50cyA9IE1hdGguZmxvb3IoKHByb2dyZXNzIC8gMTAwKSAqIG1heFNlZ21lbnRzKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0JzQsNC70Y7RlNC80L4g0LfQsNC/0L7QstC90LXQvdGWINGB0LXQs9C80LXQvdGC0Lgg0Lcg0LfQsNC+0LrRgNGD0LPQu9C10L3QuNC80Lgg0LrRg9GC0LDQvNC4XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gJyNGRkZGRkYnO1xuICAgICAgICAgICAgY29uc3QgY2VudGVyWSA9IChiYXJIZWlnaHQgLSBzZWdtZW50SGVpZ2h0KSAvIDI7IC8vINCS0LXRgNGC0LjQutCw0LvRjNC90LUg0YbQtdC90YLRgNGD0LLQsNC90L3Rj1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbGxlZFNlZ21lbnRzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCB4ID0gcGFkZGluZyArIGkgKiAoc2VnbWVudFdpZHRoICsgc2VnbWVudEdhcCk7XG4gICAgICAgICAgICAgICAgY29uc3QgeSA9IGNlbnRlclk7XG5cbiAgICAgICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgaWYgKGN0eC5yb3VuZFJlY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g0KHRg9GH0LDRgdC90LjQuSDQvNC10YLQvtC0ICjQv9GW0LTRgtGA0LjQvNGD0ZTRgtGM0YHRjyDQsiDQvdC+0LLQuNGFINCx0YDQsNGD0LfQtdGA0LDRhSlcbiAgICAgICAgICAgICAgICAgICAgY3R4LnJvdW5kUmVjdCh4LCB5LCBzZWdtZW50V2lkdGgsIHNlZ21lbnRIZWlnaHQsIHNlZ21lbnRSYWRpdXMpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEZhbGxiYWNrINC00LvRjyDRgdGC0LDRgNC40YUg0LHRgNCw0YPQt9C10YDRltCyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHIgPSBzZWdtZW50UmFkaXVzO1xuICAgICAgICAgICAgICAgICAgICBjdHgubW92ZVRvKHggKyByLCB5KTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmxpbmVUbyh4ICsgc2VnbWVudFdpZHRoIC0gciwgeSk7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHggKyBzZWdtZW50V2lkdGgsIHksIHggKyBzZWdtZW50V2lkdGgsIHkgKyByKTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmxpbmVUbyh4ICsgc2VnbWVudFdpZHRoLCB5ICsgc2VnbWVudEhlaWdodCAtIHIpO1xuICAgICAgICAgICAgICAgICAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4ICsgc2VnbWVudFdpZHRoLCB5ICsgc2VnbWVudEhlaWdodCwgeCArIHNlZ21lbnRXaWR0aCAtIHIsIHkgKyBzZWdtZW50SGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmxpbmVUbyh4ICsgciwgeSArIHNlZ21lbnRIZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4LCB5ICsgc2VnbWVudEhlaWdodCwgeCwgeSArIHNlZ21lbnRIZWlnaHQgLSByKTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmxpbmVUbyh4LCB5ICsgcik7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHgsIHksIHggKyByLCB5KTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBmdW5jdGlvbiB1cGRhdGVQcm9ncmVzcygpIHtcbiAgICAgICAgICAgIGNvbnN0IGVsYXBzZWQgPSBEYXRlLm5vdygpIC0gc3RhcnRUaW1lO1xuICAgICAgICAgICAgbGV0IHByb2dyZXNzID0gMSArIChlbGFwc2VkIC8gbG9hZGluZ0R1cmF0aW9uKSAqIDk5OyAvLyDQktGW0LQgMSUg0LTQviAxMDAlXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCe0LHQvNC10LbRg9GU0LzQviDQv9GA0L7Qs9GA0LXRgSDQtNC+IDEwMCVcbiAgICAgICAgICAgIGlmIChwcm9ncmVzcyA+PSB0YXJnZXRQcm9ncmVzcykge1xuICAgICAgICAgICAgICAgIHByb2dyZXNzID0gdGFyZ2V0UHJvZ3Jlc3M7XG4gICAgICAgICAgICAgICAgaXNMb2FkaW5nQ29tcGxldGUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjdXJyZW50UHJvZ3Jlc3MgPSBwcm9ncmVzcztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0J7QvdC+0LLQu9GO0ZTQvNC+INCy0ZbQtNC+0LHRgNCw0LbQtdC90L3Rj1xuICAgICAgICAgICAgZHJhd1Byb2dyZXNzQmFyKHByb2dyZXNzKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0J7QvdC+0LLQu9GO0ZTQvNC+INCy0ZbQtNGB0L7RgtC60LggKNGC0ZbQu9GM0LrQuCDRhtGW0LvRliDRh9C40YHQu9CwKVxuICAgICAgICAgICAgY29uc3QgcGVyY2VudCA9IE1hdGguZmxvb3IocHJvZ3Jlc3MpO1xuICAgICAgICAgICAgcGVyY2VudEVsZW1lbnQudGV4dENvbnRlbnQgPSBwZXJjZW50ICsgJyUnO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQn9GA0L7QtNC+0LLQttGD0ZTQvNC+INCw0L3RltC80LDRhtGW0Y4g0LTQviDQt9Cw0LLQtdGA0YjQtdC90L3RjyDQt9Cw0LLQsNC90YLQsNC20LXQvdC90Y9cbiAgICAgICAgICAgIGlmICghaXNMb2FkaW5nQ29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICBhbmltYXRpb25JZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGVQcm9ncmVzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vINCG0L3RltGG0ZbQsNC70ZbQt9GD0ZTQvNC+INGA0L7Qt9C80ZbRgNC4IGNhbnZhc1xuICAgICAgICByZXNpemVDYW52YXMoKTtcbiAgICAgICAgXG4gICAgICAgIC8vINCe0LHRgNC+0LHQutCwINC30LzRltC90Lgg0YDQvtC30LzRltGA0YMg0LLRltC60L3QsFxuICAgICAgICBsZXQgcmVzaXplVGltZW91dDtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChyZXNpemVUaW1lb3V0KTtcbiAgICAgICAgICAgIHJlc2l6ZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICByZXNpemVDYW52YXMoKTtcbiAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgLy8g0IbQvdGW0YbRltCw0LvRltC30LDRhtGW0Y8g0LDQvdGW0LzQsNGG0ZbRlyDQv9C+0Y/QstC4INGW0LrQvtC90L7QulxuICAgICAgICBpbml0SWNvbnNBbmltYXRpb24obG9hZGluZ0R1cmF0aW9uKTtcbiAgICAgICAgXG4gICAgICAgIC8vINCX0LDQv9GD0YHQutCw0ZTQvNC+INCw0L3RltC80LDRhtGW0Y4g0Lcg0L3QtdCy0LXQu9C40LrQvtGOINC30LDRgtGA0LjQvNC60L7RjiDQtNC70Y8g0LrQvtGA0LXQutGC0L3QvtCz0L4g0YDQvtC30YDQsNGF0YPQvdC60YMg0YDQvtC30LzRltGA0ZbQslxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICByZXNpemVDYW52YXMoKTtcbiAgICAgICAgICAgICAgICBzdGFydFRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZVByb2dyZXNzKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8g0JDQvdGW0LzQsNGG0ZbRjyDQv9C+0Y/QstC4INGW0LrQvtC90L7QuiDQv9C+INGH0LXRgNC30ZYg0L/RltC0INGH0LDRgSDQt9Cw0LLQsNC90YLQsNC20LXQvdC90Y9cbiAgICBmdW5jdGlvbiBpbml0SWNvbnNBbmltYXRpb24oZHVyYXRpb24pIHtcbiAgICAgICAgY29uc3QgaWNvbnMgPSBbXG4gICAgICAgICAgICAnLndlbGNvbWVfX2RlY29yLWl0ZW0uX2dhbWVwYWQnLFxuICAgICAgICAgICAgJy53ZWxjb21lX19kZWNvci1pdGVtLl9jaGlwJyxcbiAgICAgICAgICAgICcud2VsY29tZV9fZGVjb3ItaXRlbS5fY29pbicsXG4gICAgICAgICAgICAnLndlbGNvbWVfX2RlY29yLWl0ZW0uX2JhbGwnLFxuICAgICAgICAgICAgJy53ZWxjb21lX19kZWNvci1pdGVtLl9jdXAnLFxuICAgICAgICAgICAgJy53ZWxjb21lX19kZWNvci1pdGVtLl9jdWJlJyxcbiAgICAgICAgICAgICcud2VsY29tZV9fZGVjb3ItaXRlbS5fZ2xvYmUnXG4gICAgICAgIF07XG5cbiAgICAgICAgLy8g0JfQsdC10YDRltCz0LDRlNC80L4g0L7RgNC40LPRltC90LDQu9GM0L3RliB0cmFuc2Zvcm0g0LTQu9GPINC60L7QttC90L7RlyDRltC60L7QvdC60LhcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxUcmFuc2Zvcm1zID0gbmV3IE1hcCgpO1xuXG4gICAgICAgIC8vINCh0L/QvtGH0LDRgtC60YMg0L/RgNC40YXQvtCy0YPRlNC80L4g0LLRgdGWINGW0LrQvtC90LrQuFxuICAgICAgICBpY29ucy5mb3JFYWNoKHNlbGVjdG9yID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICAgICAgICAgIGlmIChpY29uKSB7XG4gICAgICAgICAgICAgICAgLy8g0JfQsdC10YDRltCz0LDRlNC80L4g0L7RgNC40LPRltC90LDQu9GM0L3QuNC5IHRyYW5zZm9ybSAo0Y/QutGJ0L4g0ZQgcm90YXRlKVxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShpY29uKTtcbiAgICAgICAgICAgICAgICBjb25zdCBvcmlnaW5hbFRyYW5zZm9ybSA9IGNvbXB1dGVkU3R5bGUudHJhbnNmb3JtO1xuICAgICAgICAgICAgICAgIG9yaWdpbmFsVHJhbnNmb3Jtcy5zZXQoc2VsZWN0b3IsIG9yaWdpbmFsVHJhbnNmb3JtKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyDQktGB0YLQsNC90L7QstC70Y7RlNC80L4g0L/QvtGH0LDRgtC60L7QstC40Lkg0YHRgtCw0L1cbiAgICAgICAgICAgICAgICBpY29uLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgICAgICAgICAgICAgaWNvbi5zdHlsZS50cmFuc2l0aW9uID0gJ29wYWNpdHkgMC40cyBlYXNlLCB0cmFuc2Zvcm0gMC40cyBlYXNlJztcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyDQktGB0YLQsNC90L7QstC70Y7RlNC80L4gc2NhbGUg0Lcg0LfQsdC10YDQtdC20LXQvdC90Y/QvCByb3RhdGVcbiAgICAgICAgICAgICAgICBpZiAob3JpZ2luYWxUcmFuc2Zvcm0gJiYgb3JpZ2luYWxUcmFuc2Zvcm0gIT09ICdub25lJykge1xuICAgICAgICAgICAgICAgICAgICBpY29uLnN0eWxlLnRyYW5zZm9ybSA9IG9yaWdpbmFsVHJhbnNmb3JtICsgJyBzY2FsZSgwLjUpJztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpY29uLnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZSgwLjUpJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vINCg0L7Qt9GA0LDRhdC+0LLRg9GU0LzQviDRltC90YLQtdGA0LLQsNC7INC80ZbQtiDQv9C+0Y/QstC+0Y4g0ZbQutC+0L3QvtC6XG4gICAgICAgIGNvbnN0IGljb25Db3VudCA9IGljb25zLmxlbmd0aDtcbiAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBkdXJhdGlvbiAvIGljb25Db3VudDsgLy8g0KDRltCy0L3QvtC80ZbRgNC90L4g0YDQvtC30L/QvtC00ZbQu9GP0ZTQvNC+INC/0L4g0YfQsNGB0YNcblxuICAgICAgICAvLyDQn9C+0LrQsNC30YPRlNC80L4g0ZbQutC+0L3QutC4INC/0L4g0YfQtdGA0LfRllxuICAgICAgICBpY29ucy5mb3JFYWNoKChzZWxlY3RvciwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICAgICAgICAgICAgICBpZiAoaWNvbikge1xuICAgICAgICAgICAgICAgICAgICBpY29uLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgICAgICAgICAgICAgIC8vINCS0ZbQtNC90L7QstC70Y7RlNC80L4g0L7RgNC40LPRltC90LDQu9GM0L3QuNC5IHRyYW5zZm9ybVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvcmlnaW5hbFRyYW5zZm9ybSA9IG9yaWdpbmFsVHJhbnNmb3Jtcy5nZXQoc2VsZWN0b3IpO1xuICAgICAgICAgICAgICAgICAgICBpZiAob3JpZ2luYWxUcmFuc2Zvcm0gJiYgb3JpZ2luYWxUcmFuc2Zvcm0gIT09ICdub25lJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbi5zdHlsZS50cmFuc2Zvcm0gPSBvcmlnaW5hbFRyYW5zZm9ybTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb24uc3R5bGUudHJhbnNmb3JtID0gJ3NjYWxlKDEpJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIGluZGV4ICogaW50ZXJ2YWwpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0UGFydGljaXBhdGVDYW52YXMoKSB7XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwYXJ0aWNpcGF0ZUNhbnZhcycpO1xuICAgICAgICBpZiAoIWNhbnZhcykgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICBjYW52YXMud2lkdGggPSAxMzY2O1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gNTAwO1xuXG4gICAgICAgIC8vINCa0L7QvdGB0YLQsNC90YLQuCDQtNC70Y8g0YDQvtC30LzRltGA0ZbQsiDRgtCwINC/0L7Qt9C40YbRltC5XG4gICAgICAgIGNvbnN0IENBTlZBU19XSURUSCA9IDEzNjY7XG4gICAgICAgIGNvbnN0IENBTlZBU19IRUlHSFQgPSA1MDA7XG4gICAgICAgIGNvbnN0IFRSRUVfV0lEVEggPSAxNzU7XG4gICAgICAgIGNvbnN0IFRSRUVfSEVJR0hUID0gMTY3O1xuICAgICAgICBcbiAgICAgICAgLy8g0J/QsNGA0LDQvNC10YLRgNC4INGB0L/RgNCw0LnRgi3Qu9C40YHRgtCwXG4gICAgICAgIGNvbnN0IEZSQU1FU19QRVJfUk9XID0gNTsgLy8gNSDQutCw0LTRgNGW0LIg0LIg0YDRj9C00LrRg1xuICAgICAgICBjb25zdCBUT1RBTF9ST1dTID0gMjsgLy8gMiDRgNGP0LTQuFxuICAgICAgICBjb25zdCBTUFJJVEVfU0hFRVRfV0lEVEggPSAxMTAwOyAvLyDQoNC10LDQu9GM0L3QsCDRiNC40YDQuNC90LAg0YHQv9GA0LDQudGCLdC70LjRgdGC0LBcbiAgICAgICAgY29uc3QgU1BSSVRFX1NIRUVUX0hFSUdIVCA9IDQ2ODsgLy8g0KDQtdCw0LvRjNC90LAg0LLQuNGB0L7RgtCwINGB0L/RgNCw0LnRgi3Qu9C40YHRgtCwXG4gICAgICAgIFxuICAgICAgICAvLyDQoNC+0LfQvNGW0YDQuCDQvtC00L3QvtCz0L4g0LrQsNC00YDRgyDQsiDRgdC/0YDQsNC50YIt0LvQuNGB0YLRllxuICAgICAgICBjb25zdCBGUkFNRV9XSURUSCA9IE1hdGguZmxvb3IoU1BSSVRFX1NIRUVUX1dJRFRIIC8gRlJBTUVTX1BFUl9ST1cpOyAvLyAyMjBweFxuICAgICAgICBjb25zdCBGUkFNRV9IRUlHSFQgPSBNYXRoLmZsb29yKFNQUklURV9TSEVFVF9IRUlHSFQgLyBUT1RBTF9ST1dTKTsgLy8gMjM0cHhcbiAgICAgICAgXG4gICAgICAgIC8vINCg0L7Qt9C80ZbRgNC4INC+0LvQtdC90Y8g0L3QsCBjYW52YXMgKNC80L7QttC90LAg0LzQsNGB0YjRgtCw0LHRg9Cy0LDRgtC4KVxuICAgICAgICBjb25zdCBERUVSX1NDQUxFID0gMC41OyAvLyDQnNCw0YHRiNGC0LDQsSDQtNC70Y8g0LLRltC00L7QsdGA0LDQttC10L3QvdGPINC90LAgY2FudmFzXG4gICAgICAgIGNvbnN0IERFRVJfV0lEVEggPSBNYXRoLmZsb29yKEZSQU1FX1dJRFRIICogREVFUl9TQ0FMRSk7IC8vIH4xMTBweFxuICAgICAgICBjb25zdCBERUVSX0hFSUdIVCA9IE1hdGguZmxvb3IoRlJBTUVfSEVJR0hUICogREVFUl9TQ0FMRSk7IC8vIDExN3B4XG5cbiAgICAgICAgLy8g0J/QvtC30LjRhtGW0Zcg0LXQu9C10LzQtdC90YLRltCyXG4gICAgICAgIGNvbnN0IHRyZWVYID0gQ0FOVkFTX1dJRFRIIC8gMiAtIDMwMDsgLy8g0KLRgNC+0YXQuCDQu9GW0LLRltGI0LUg0LLRltC0INGG0LXQvdGC0YDRg1xuICAgICAgICBjb25zdCB0cmVlWSA9IENBTlZBU19IRUlHSFQgLyAyIC0gVFJFRV9IRUlHSFQgLyAyO1xuICAgICAgICBcbiAgICAgICAgLy8g0J/QsNGA0LDQvNC10YLRgNC4INCw0L3RltC80LDRhtGW0ZcgKNGB0L/RltC70YzQvdGWINC00LvRjyDQstGB0ZbRhSDQvtC70LXQvdGW0LIpXG4gICAgICAgIGNvbnN0IEZSQU1FX0RFTEFZID0gMTI7IC8vINCX0LDRgtGA0LjQvNC60LAg0LzRltC2INC60LDQtNGA0LDQvNC4XG4gICAgICAgIGNvbnN0IFdBTEtJTkdfRlJBTUVTID0gNTsgLy8g0JrRltC70YzQutGW0YHRgtGMINC60LDQtNGA0ZbQsiDQtNC70Y8g0YXQvtC00YzQsdC4XG4gICAgICAgIGNvbnN0IEZSQU1FX1JFUEVBVCA9IDI7IC8vINCa0ZbQu9GM0LrRltGB0YLRjCDRgNCw0LfRltCyINC/0L7QutCw0LfRg9Cy0LDRgtC4INC60L7QttC10L0g0LrQsNC00YBcbiAgICAgICAgY29uc3QgSURMRV9NSU5fRFVSQVRJT04gPSA2MDsgLy8g0JzRltC90ZbQvNCw0LvRjNC90LAg0YLRgNC40LLQsNC70ZbRgdGC0Ywg0LfRg9C/0LjQvdC60LggKDEg0YHQtdC60YPQvdC00LAg0L/RgNC4IDYwZnBzKVxuICAgICAgICBjb25zdCBJRExFX01BWF9EVVJBVElPTiA9IDE4MDsgLy8g0JzQsNC60YHQuNC80LDQu9GM0L3QsCDRgtGA0LjQstCw0LvRltGB0YLRjCDQt9GD0L/QuNC90LrQuCAoMyDRgdC10LrRg9C90LTQuCDQv9GA0LggNjBmcHMpXG5cbiAgICAgICAgLy8g0KHRgtCw0L3QuCDQsNC90ZbQvNCw0YbRltGXINC+0LvQtdC90Y9cbiAgICAgICAgY29uc3QgREVFUl9TVEFURSA9IHtcbiAgICAgICAgICAgIFdBTEtJTkc6ICd3YWxraW5nJyxcbiAgICAgICAgICAgIElETEU6ICdpZGxlJ1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgbGV0IGFuaW1hdGlvbklkID0gbnVsbDtcbiAgICAgICAgbGV0IGZyYW1lQ291bnRlciA9IDA7IC8vINCT0LvQvtCx0LDQu9GM0L3QuNC5INC70ZbRh9C40LvRjNC90LjQuiDQutCw0LTRgNGW0LIg0LTQu9GPINGB0LjQvdGF0YDQvtC90ZbQt9Cw0YbRltGXXG5cbiAgICAgICAgLy8g0JrQu9Cw0YEg0LTQu9GPINC+0LvQtdC90Y9cbiAgICAgICAgY2xhc3MgRGVlciB7XG4gICAgICAgICAgICBjb25zdHJ1Y3RvcihzdGFydFgsIHN0YXJ0WSwgbWluWCwgbWF4WCwgc3BlZWQgPSAwLjUsIHpJbmRleCA9IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnggPSBzdGFydFg7XG4gICAgICAgICAgICAgICAgdGhpcy55ID0gc3RhcnRZO1xuICAgICAgICAgICAgICAgIHRoaXMubWluWCA9IG1pblg7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXhYID0gbWF4WDtcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVkID0gc3BlZWQ7XG4gICAgICAgICAgICAgICAgdGhpcy56SW5kZXggPSB6SW5kZXg7IC8vINCf0L7RgNGP0LTQvtC6INC80LDQu9GO0LLQsNC90L3RjyBcbiAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IC0xOyAvLyAtMSA9INCy0LvRltCy0L4sIDEgPSDQstC/0YDQsNCy0L5cbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0gREVFUl9TVEFURS5XQUxLSU5HO1xuICAgICAgICAgICAgICAgIHRoaXMuZnJhbWVJbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5mcmFtZVJlcGVhdENvdW50ZXIgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuaWRsZVRpbWVyID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLmlkbGVEdXJhdGlvbiA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGdldFNwcml0ZUZyYW1lSW5kZXgoKSB7XG4gICAgICAgICAgICAgICAgLy8g0JLQtdGA0YXQvdGW0Lkg0YDRj9C00L7QuiAoMCkgPSDRgNGD0YUg0LLQu9GW0LLQviwg0L3QuNC20L3RltC5INGA0Y/QtNC+0LogKDEpID0g0YDRg9GFINCy0L/RgNCw0LLQvlxuICAgICAgICAgICAgICAgIGNvbnN0IHJvdyA9IHRoaXMuZGlyZWN0aW9uID09PSAtMSA/IDAgOiAxO1xuICAgICAgICAgICAgICAgIGxldCBjb2wgPSAwO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IERFRVJfU1RBVEUuV0FMS0lORykge1xuICAgICAgICAgICAgICAgICAgICAvLyDQmtCw0LTRgNC4INGF0L7QtNGM0LHQuDogMCwgMSwgMiwgMywgNCAo0LLRgdGWIDUg0LrQsNC00YDRltCyKVxuICAgICAgICAgICAgICAgICAgICBjb2wgPSB0aGlzLmZyYW1lSW5kZXggJSBXQUxLSU5HX0ZSQU1FUztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyDQodGC0LDQvSDQt9GD0L/QuNC90LrQuCAoSURMRSkgLSDQstC40LrQvtGA0LjRgdGC0L7QstGD0ZTQvNC+INC60LDQtNGAIDBcbiAgICAgICAgICAgICAgICAgICAgY29sID0gMDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4geyByb3csIGNvbCB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1cGRhdGUoc2hvdWxkVXBkYXRlRnJhbWUpIHtcbiAgICAgICAgICAgICAgICAvLyDQntC90L7QstC70Y7RlNC80L4g0LDQvdGW0LzQsNGG0ZbRjiDQutCw0LTRgNGW0LIg0Lcg0L/QvtCy0YLQvtGA0LXQvdC90Y/QvCDQtNC70Y8g0L/Qu9Cw0LLQvdC+0YHRgtGWXG4gICAgICAgICAgICAgICAgaWYgKHNob3VsZFVwZGF0ZUZyYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlID09PSBERUVSX1NUQVRFLldBTEtJTkcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZnJhbWVSZXBlYXRDb3VudGVyKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDQn9C+0LrQsNC30YPRlNC80L4g0LrQvtC20LXQvSDQutCw0LTRgCDQutGW0LvRjNC60LAg0YDQsNC30ZbQsiDQtNC70Y8g0L/Qu9Cw0LLQvdGW0YjQvtGXINCw0L3RltC80LDRhtGW0ZdcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmZyYW1lUmVwZWF0Q291bnRlciA+PSBGUkFNRV9SRVBFQVQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZyYW1lUmVwZWF0Q291bnRlciA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g0J/QvtGB0LvRltC00L7QstC90L4g0L/RgNC+0YXQvtC00LjQvNC+INGH0LXRgNC10Lcg0LLRgdGWINC60LDQtNGA0Lg6IDAsIDEsIDIsIDMsIDQsIDAsIDEsIDIsIDMsIDQuLi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZyYW1lSW5kZXggPSAodGhpcy5mcmFtZUluZGV4ICsgMSkgJSBXQUxLSU5HX0ZSQU1FUztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vINCb0L7Qs9GW0LrQsCDRgdGC0LDQvdGW0LIg0YLQsCDRgNGD0YXRg1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlID09PSBERUVSX1NUQVRFLldBTEtJTkcpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g0J7QvdC+0LLQu9GO0ZTQvNC+INC/0L7Qt9C40YbRltGOINC+0LvQtdC90Y9cbiAgICAgICAgICAgICAgICAgICAgdGhpcy54ICs9IHRoaXMuc3BlZWQgKiB0aGlzLmRpcmVjdGlvbjtcblxuICAgICAgICAgICAgICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNGP0ZTQvNC+INC80LXQttGWINGC0LAg0L/QtdGA0LXRhdC+0LTQuNC80L4g0LTQviDQt9GD0L/QuNC90LrQuFxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy54ID49IHRoaXMubWF4WCAmJiB0aGlzLmRpcmVjdGlvbiA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g0JTQvtGB0Y/Qs9C70Lgg0L/RgNCw0LLQvtCz0L4g0LrRgNCw0Y4gLSDQt9GD0L/QuNC90Y/RlNC80L7RgdGPXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnggPSB0aGlzLm1heFg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0gREVFUl9TVEFURS5JRExFO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pZGxlVGltZXIgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g0JPQtdC90LXRgNGD0ZTQvNC+INCy0LjQv9Cw0LTQutC+0LLRgyDRgtGA0LjQstCw0LvRltGB0YLRjCDQt9GD0L/QuNC90LrQuCDQstGW0LQgMSDQtNC+IDMg0YHQtdC60YPQvdC0XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlkbGVEdXJhdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChJRExFX01BWF9EVVJBVElPTiAtIElETEVfTUlOX0RVUkFUSU9OICsgMSkpICsgSURMRV9NSU5fRFVSQVRJT047XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy54IDw9IHRoaXMubWluWCAmJiB0aGlzLmRpcmVjdGlvbiA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vINCU0L7RgdGP0LPQu9C4INC70ZbQstC+0LPQviDQutGA0LDRjiAtINC30YPQv9C40L3Rj9GU0LzQvtGB0Y9cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueCA9IHRoaXMubWluWDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBERUVSX1NUQVRFLklETEU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlkbGVUaW1lciA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDQk9C10L3QtdGA0YPRlNC80L4g0LLQuNC/0LDQtNC60L7QstGDINGC0YDQuNCy0LDQu9GW0YHRgtGMINC30YPQv9C40L3QutC4INCy0ZbQtCAxINC00L4gMyDRgdC10LrRg9C90LRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaWRsZUR1cmF0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKElETEVfTUFYX0RVUkFUSU9OIC0gSURMRV9NSU5fRFVSQVRJT04gKyAxKSkgKyBJRExFX01JTl9EVVJBVElPTjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZSA9PT0gREVFUl9TVEFURS5JRExFKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaWRsZVRpbWVyKys7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyDQn9GW0YHQu9GPINC30LDQstC10YDRiNC10L3QvdGPINC30YPQv9C40L3QutC4INC30LzRltC90Y7RlNC80L4g0L3QsNC/0YDRj9C80L7QuiDRgtCwINC/0LXRgNC10YXQvtC00LjQvNC+INC00L4g0YXQvtC00YzQsdC4XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlkbGVUaW1lciA+PSB0aGlzLmlkbGVEdXJhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gKj0gLTE7IC8vINCX0LzRltC90Y7RlNC80L4g0L3QsNC/0YDRj9C80L7QuiAo0LLQu9GW0LLQviDihpQg0LLQv9GA0LDQstC+KVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IERFRVJfU1RBVEUuV0FMS0lORztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZnJhbWVJbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZyYW1lUmVwZWF0Q291bnRlciA9IDA7IC8vINCh0LrQuNC00LDRlNC80L4g0LvRltGH0LjQu9GM0L3QuNC6INC/0L7QstGC0L7RgNC10L3RjFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkcmF3KGN0eCwgc3ByaXRlSW1hZ2UsIGZyYW1lV2lkdGgsIGZyYW1lSGVpZ2h0LCBkZWVyV2lkdGgsIGRlZXJIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXNwcml0ZUltYWdlLmNvbXBsZXRlIHx8IGZyYW1lV2lkdGggPD0gMCB8fCBmcmFtZUhlaWdodCA8PSAwKSByZXR1cm47XG5cbiAgICAgICAgICAgICAgICBjb25zdCB7IHJvdywgY29sIH0gPSB0aGlzLmdldFNwcml0ZUZyYW1lSW5kZXgoKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyDQmtC+0L7RgNC00LjQvdCw0YLQuCDQutCw0LTRgNGDINCyINGB0L/RgNCw0LnRgi3Qu9C40YHRgtGWXG4gICAgICAgICAgICAgICAgY29uc3Qgc291cmNlWCA9IGNvbCAqIGZyYW1lV2lkdGg7XG4gICAgICAgICAgICAgICAgY29uc3Qgc291cmNlWSA9IHJvdyAqIGZyYW1lSGVpZ2h0O1xuXG4gICAgICAgICAgICAgICAgLy8g0JLQuNGA0ZbQt9Cw0ZTQvNC+INC60LDQtNGAINC30ZYg0YHQv9GA0LDQudGCLdC70LjRgdGC0LAg0YLQsCDQvNCw0LvRjtGU0LzQviDQvdCwIGNhbnZhc1xuICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICAgICAgICAgIHNwcml0ZUltYWdlLFxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VYLCBzb3VyY2VZLCBmcmFtZVdpZHRoLCBmcmFtZUhlaWdodCwgLy8g0JTQttC10YDQtdC70L4gKNGB0L/RgNCw0LnRgi3Qu9C40YHRgilcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54LCB0aGlzLnksIGRlZXJXaWR0aCwgZGVlckhlaWdodCAvLyDQn9GA0LjQt9C90LDRh9C10L3QvdGPIChjYW52YXMpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyDQnNCw0YHQuNCyINC+0LvQtdC90ZbQsiAo0LzQvtC20L3QsCDQtNC+0LTQsNGC0Lgg0LHRltC70YzRiNC1KVxuICAgICAgICBjb25zdCBkZWVycyA9IFtdO1xuICAgICAgICBcbiAgICAgICAgLy8g0JrQvtC90YTRltCz0YPRgNCw0YbRltGPINC00LvRjyDRgdGC0LLQvtGA0LXQvdC90Y8g0L7Qu9C10L3RltCyXG4gICAgICAgIGNvbnN0IERFRVJfQ09VTlQgPSAzOyAvLyDQmtGW0LvRjNC60ZbRgdGC0Ywg0L7Qu9C10L3RltCyXG4gICAgICAgIGNvbnN0IGRlZXJDb25maWdzID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXJ0WDogQ0FOVkFTX1dJRFRIIC8gMiArIDUwLFxuICAgICAgICAgICAgICAgIHN0YXJ0WTogdHJlZVkgKyBUUkVFX0hFSUdIVCAtIDIwLCAvLyDQn9GW0LQg0Y/Qu9C40L3QutC+0Y4gKHRyZWVZICsg0LLQuNGB0L7RgtCwINGP0LvQuNC90LrQuCAtINCy0ZbQtNGB0YLRg9C/KVxuICAgICAgICAgICAgICAgIG1pblg6IENBTlZBU19XSURUSCAvIDIgLSAyMDAsXG4gICAgICAgICAgICAgICAgbWF4WDogQ0FOVkFTX1dJRFRIIC8gMiArIDMwMCxcbiAgICAgICAgICAgICAgICBzcGVlZDogMC41LFxuICAgICAgICAgICAgICAgIHpJbmRleDogMyAvLyDQnNCw0LvRjtGU0YLRjNGB0Y8g0L/QtdGA0LXQtCDRj9C70LjQvdC60L7RjiAo0L/RltC0INGP0LvQuNC90LrQvtGOKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGFydFg6IENBTlZBU19XSURUSCAvIDIgLSAxMDAsXG4gICAgICAgICAgICAgICAgc3RhcnRZOiBDQU5WQVNfSEVJR0hUIC8gMiAtIERFRVJfSEVJR0hUIC8gMiArIDUwLFxuICAgICAgICAgICAgICAgIG1pblg6IENBTlZBU19XSURUSCAvIDIgLSAxNTAsXG4gICAgICAgICAgICAgICAgbWF4WDogQ0FOVkFTX1dJRFRIIC8gMiArIDE1MCxcbiAgICAgICAgICAgICAgICBzcGVlZDogMC4zLFxuICAgICAgICAgICAgICAgIHpJbmRleDogMiAvLyDQnNCw0LvRjtGU0YLRjNGB0Y8g0L/RltGB0LvRjyDRj9C70LjQvdC60LggKNC90LDQtCDRj9C70LjQvdC60L7RjilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhcnRYOiBDQU5WQVNfV0lEVEggLyAyIC0gMTAwLFxuICAgICAgICAgICAgICAgIHN0YXJ0WTogQ0FOVkFTX0hFSUdIVCAvIDIgLSBERUVSX0hFSUdIVCAvIDIgLSA1MCxcbiAgICAgICAgICAgICAgICBtaW5YOiBDQU5WQVNfV0lEVEggLyAyIC0gMjUwLFxuICAgICAgICAgICAgICAgIG1heFg6IENBTlZBU19XSURUSCAvIDIgKyAyNTAsXG4gICAgICAgICAgICAgICAgc3BlZWQ6IDAuNCxcbiAgICAgICAgICAgICAgICB6SW5kZXg6IDEgLy8g0JzQsNC70Y7RlNGC0YzRgdGPINC+0YHRgtCw0L3QvdGW0LwgKNC90LDQudCy0LjRidC1KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICBcbiAgICAgICAgXTtcblxuICAgICAgICAvLyDQodGC0LLQvtGA0Y7RlNC80L4g0L7Qu9C10L3RltCyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgREVFUl9DT1VOVCAmJiBpIDwgZGVlckNvbmZpZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbmZpZyA9IGRlZXJDb25maWdzW2ldO1xuICAgICAgICAgICAgZGVlcnMucHVzaChuZXcgRGVlcihcbiAgICAgICAgICAgICAgICBjb25maWcuc3RhcnRYLFxuICAgICAgICAgICAgICAgIGNvbmZpZy5zdGFydFksXG4gICAgICAgICAgICAgICAgY29uZmlnLm1pblgsXG4gICAgICAgICAgICAgICAgY29uZmlnLm1heFgsXG4gICAgICAgICAgICAgICAgY29uZmlnLnNwZWVkLFxuICAgICAgICAgICAgICAgIGNvbmZpZy56SW5kZXggfHwgMCAvLyDQktC40LrQvtGA0LjRgdGC0L7QstGD0ZTQvNC+IHpJbmRleCDQtyDQutC+0L3RhNGW0LPRgyDQsNCx0L4gMCDQt9CwINC30LDQvNC+0LLRh9GD0LLQsNC90L3Rj9C8XG4gICAgICAgICAgICApKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vINCX0LDQstCw0L3RgtCw0LbQtdC90L3RjyDQt9C+0LHRgNCw0LbQtdC90YxcbiAgICAgICAgY29uc3QgaW1hZ2VzID0ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbmV3IEltYWdlKCksXG4gICAgICAgICAgICB0cmVlOiBuZXcgSW1hZ2UoKSxcbiAgICAgICAgICAgIGRlZXJTcHJpdGU6IG5ldyBJbWFnZSgpIC8vINCh0L/RgNCw0LnRgi3Qu9C40YHRgiDQt9Cw0LzRltGB0YLRjCDQvtC00L3QvtCz0L4g0LfQvtCx0YDQsNC20LXQvdC90Y9cbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgaW1hZ2VzTG9hZGVkID0gMDtcbiAgICAgICAgY29uc3QgdG90YWxJbWFnZXMgPSAzO1xuXG4gICAgICAgIGZ1bmN0aW9uIG9uSW1hZ2VMb2FkKCkge1xuICAgICAgICAgICAgaW1hZ2VzTG9hZGVkKys7XG4gICAgICAgICAgICBpZiAoaW1hZ2VzTG9hZGVkID09PSB0b3RhbEltYWdlcykge1xuICAgICAgICAgICAgICAgIC8vINCf0LXRgNC10LLRltGA0Y/RlNC80L4sINGH0Lgg0YHQv9GA0LDQudGCLdC70LjRgdGCINC30LDQstCw0L3RgtCw0LbQuNCy0YHRjyDQutC+0YDQtdC60YLQvdC+XG4gICAgICAgICAgICAgICAgaWYgKGltYWdlcy5kZWVyU3ByaXRlLmNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEZWVyIHNwcml0ZSBsb2FkZWQ6Jywge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGltYWdlcy5kZWVyU3ByaXRlLndpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBpbWFnZXMuZGVlclNwcml0ZS5oZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgICAgICBmcmFtZVdpZHRoOiBGUkFNRV9XSURUSCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lSGVpZ2h0OiBGUkFNRV9IRUlHSFQsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWVyV2lkdGg6IERFRVJfV0lEVEgsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWVySGVpZ2h0OiBERUVSX0hFSUdIVFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZHJhd0NhbnZhcygpO1xuICAgICAgICAgICAgICAgIHN0YXJ0QW5pbWF0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpbWFnZXMuYmFja2dyb3VuZC5vbmxvYWQgPSBvbkltYWdlTG9hZDtcbiAgICAgICAgaW1hZ2VzLnRyZWUub25sb2FkID0gb25JbWFnZUxvYWQ7XG4gICAgICAgIGltYWdlcy5kZWVyU3ByaXRlLm9ubG9hZCA9IG9uSW1hZ2VMb2FkO1xuXG4gICAgICAgIGltYWdlcy5iYWNrZ3JvdW5kLnNyYyA9ICdpbWcvcGFydGljaXBhdGUvY2FudmFzLWJnLnBuZyc7XG4gICAgICAgIGltYWdlcy50cmVlLnNyYyA9ICdpbWcvcGFydGljaXBhdGUvdHJlZS5wbmcnO1xuICAgICAgICAvLyDQktC40LrQvtGA0LjRgdGC0L7QstGD0ZTQvNC+INGB0L/RgNCw0LnRgi3Qu9C40YHRgiAo0Y/QutGJ0L4g0YTQsNC50Lsg0L3QsNC30LjQstCw0ZTRgtGM0YHRjyBkZWVyLXNwcml0ZS5wbmcsINC30LzRltC90ZbRgtGMINC90LDQt9Cy0YMpXG4gICAgICAgIGltYWdlcy5kZWVyU3ByaXRlLnNyYyA9ICdpbWcvcGFydGljaXBhdGUvZGVlci1zcHJpdGUucG5nJztcblxuICAgICAgICBmdW5jdGlvbiBkcmF3Q2FudmFzKCkge1xuICAgICAgICAgICAgLy8g0J7Rh9C40YnQtdC90L3RjyBjYW52YXNcbiAgICAgICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgQ0FOVkFTX1dJRFRILCBDQU5WQVNfSEVJR0hUKTtcblxuICAgICAgICAgICAgLy8g0JzQsNC70Y7RlNC80L4g0YTQvtC9XG4gICAgICAgICAgICBpZiAoaW1hZ2VzLmJhY2tncm91bmQuY29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKGltYWdlcy5iYWNrZ3JvdW5kLCAwLCAwLCBDQU5WQVNfV0lEVEgsIENBTlZBU19IRUlHSFQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyB6SW5kZXgg0LTQu9GPINGP0LvQuNC90LrQuCAo0LzRltC2INC+0LvQtdC90Y/QvNC4KVxuICAgICAgICAgICAgY29uc3QgVFJFRV9aX0lOREVYID0gMjsgLy8g0K/Qu9C40L3QutCwINC80LDQu9GO0ZTRgtGM0YHRjyDQvNGW0LYg0L7Qu9C10L3Rj9C80Lgg0LcgekluZGV4IDEg0YLQsCAyXG5cbiAgICAgICAgICAgIC8vINCh0YLQstC+0YDRjtGU0LzQviDQvNCw0YHQuNCyINCy0YHRltGFINC10LvQtdC80LXQvdGC0ZbQsiDQtNC70Y8g0LzQsNC70Y7QstCw0L3QvdGPICjQvtC70LXQvdGWICsg0Y/Qu9C40L3QutCwKVxuICAgICAgICAgICAgY29uc3QgZHJhd2FibGVFbGVtZW50cyA9IFtdO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQlNC+0LTQsNGU0LzQviDQvtC70LXQvdGW0LJcbiAgICAgICAgICAgIGRlZXJzLmZvckVhY2goZGVlciA9PiB7XG4gICAgICAgICAgICAgICAgZHJhd2FibGVFbGVtZW50cy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2RlZXInLFxuICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IGRlZXIuekluZGV4LFxuICAgICAgICAgICAgICAgICAgICBkcmF3OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW1hZ2VzLmRlZXJTcHJpdGUuY29tcGxldGUgJiYgRlJBTUVfV0lEVEggPiAwICYmIEZSQU1FX0hFSUdIVCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWVyLmRyYXcoY3R4LCBpbWFnZXMuZGVlclNwcml0ZSwgRlJBTUVfV0lEVEgsIEZSQU1FX0hFSUdIVCwgREVFUl9XSURUSCwgREVFUl9IRUlHSFQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0JTQvtC00LDRlNC80L4g0Y/Qu9C40L3QutGDXG4gICAgICAgICAgICBkcmF3YWJsZUVsZW1lbnRzLnB1c2goe1xuICAgICAgICAgICAgICAgIHR5cGU6ICd0cmVlJyxcbiAgICAgICAgICAgICAgICB6SW5kZXg6IFRSRUVfWl9JTkRFWCxcbiAgICAgICAgICAgICAgICBkcmF3OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbWFnZXMudHJlZS5jb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShpbWFnZXMudHJlZSwgdHJlZVgsIHRyZWVZLCBUUkVFX1dJRFRILCBUUkVFX0hFSUdIVCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8g0KHQvtGA0YLRg9GU0LzQviDQstGB0ZYg0LXQu9C10LzQtdC90YLQuCDQt9CwIHpJbmRleCAo0LzQtdC90YjQtSA9INC80LDQu9GO0ZTRgtGM0YHRjyDRgNCw0L3RltGI0LUsINCx0ZbQu9GM0YjQtSA9INC80LDQu9GO0ZTRgtGM0YHRjyDQv9GW0LfQvdGW0YjQtSlcbiAgICAgICAgICAgIGRyYXdhYmxlRWxlbWVudHMuc29ydCgoYSwgYikgPT4gYS56SW5kZXggLSBiLnpJbmRleCk7XG5cbiAgICAgICAgICAgIC8vINCc0LDQu9GO0ZTQvNC+INCy0YHRliDQtdC70LXQvNC10L3RgtC4INCyINC/0YDQsNCy0LjQu9GM0L3QvtC80YMg0L/QvtGA0Y/QtNC60YNcbiAgICAgICAgICAgIGRyYXdhYmxlRWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmRyYXcoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbiAgICAgICAgICAgIGZyYW1lQ291bnRlcisrO1xuXG4gICAgICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNGP0ZTQvNC+LCDRh9C4INC/0L7RgtGA0ZbQsdC90L4g0L7QvdC+0LLQu9GO0LLQsNGC0Lgg0LrQsNC00YDQuCDQsNC90ZbQvNCw0YbRltGXXG4gICAgICAgICAgICBjb25zdCBzaG91bGRVcGRhdGVGcmFtZSA9IGZyYW1lQ291bnRlciA+PSBGUkFNRV9ERUxBWTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0J7QvdC+0LLQu9GO0ZTQvNC+INCz0LvQvtCx0LDQu9GM0L3QuNC5INC70ZbRh9C40LvRjNC90LjQuiDQutCw0LTRgNGW0LJcbiAgICAgICAgICAgIGlmIChzaG91bGRVcGRhdGVGcmFtZSkge1xuICAgICAgICAgICAgICAgIGZyYW1lQ291bnRlciA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vINCe0L3QvtCy0LvRjtGU0LzQviDQstGB0ZbRhSDQvtC70LXQvdGW0LJcbiAgICAgICAgICAgIGRlZXJzLmZvckVhY2goZGVlciA9PiB7XG4gICAgICAgICAgICAgICAgZGVlci51cGRhdGUoc2hvdWxkVXBkYXRlRnJhbWUpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vINCf0LXRgNC10LzQsNC70YzQvtCy0YPRlNC80L4gY2FudmFzXG4gICAgICAgICAgICBkcmF3Q2FudmFzKCk7XG5cbiAgICAgICAgICAgIGFuaW1hdGlvbklkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gc3RhcnRBbmltYXRpb24oKSB7XG4gICAgICAgICAgICBpZiAoYW5pbWF0aW9uSWQpIHtcbiAgICAgICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShhbmltYXRpb25JZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhbmltYXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDQl9GD0L/QuNC90Y/RlNC80L4g0LDQvdGW0LzQsNGG0ZbRjiDQv9GA0Lgg0LLQuNGF0L7QtNGWINC3IHZpZXdwb3J0ICjQvtC/0YbRltC+0L3QsNC70YzQvdC+KVxuICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgICAgICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFhbmltYXRpb25JZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRBbmltYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhbmltYXRpb25JZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uSWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uSWQgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUoY2FudmFzKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0U25vd2ZsYWtlc0NhbnZhcygpIHtcbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Nub3dmbGFrZXNDYW52YXMnKTtcbiAgICAgICAgaWYgKCFjYW52YXMpIHJldHVybjtcblxuICAgICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgY29uc3QgZmF2UGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXYtcGFnZScpO1xuICAgICAgICBcbiAgICAgICAgLy8g0JrQvtC90YHRgtCw0L3RgtC4XG4gICAgICAgIGNvbnN0IFNOT1dGTEFLRV9DT1VOVCA9IDEwMDtcbiAgICAgICAgY29uc3QgU05PV0ZMQUtFX01JTl9TSVpFID0gNDtcbiAgICAgICAgY29uc3QgU05PV0ZMQUtFX01BWF9TSVpFID0gMTA7XG4gICAgICAgIGNvbnN0IFNOT1dGTEFLRV9NSU5fU1BFRUQgPSAwLjE7XG4gICAgICAgIGNvbnN0IFNOT1dGTEFLRV9NQVhfU1BFRUQgPSAwLjM7XG4gICAgICAgIGNvbnN0IFNOT1dGTEFLRV9XSU5EX1JBTkdFID0gMC40O1xuICAgICAgICBjb25zdCBTTk9XRkxBS0VfU1BBV05fSU5URVJWQUwgPSAyMDA7XG5cbiAgICAgICAgY29uc3Qgc25vd2ZsYWtlcyA9IFtdO1xuICAgICAgICBsZXQgbGFzdFNub3dmbGFrZVRpbWUgPSAwO1xuICAgICAgICBsZXQgYW5pbWF0aW9uSWQgPSBudWxsO1xuICAgICAgICBcbiAgICAgICAgLy8g0JLRgdGC0LDQvdC+0LLQu9GO0ZTQvNC+INGA0L7Qt9C80ZbRgCBjYW52YXMg0L3QsCDQstC10YHRjCAuZmF2LXBhZ2VcbiAgICAgICAgZnVuY3Rpb24gcmVzaXplQ2FudmFzKCkge1xuICAgICAgICAgICAgbGV0IG5ld1dpZHRoLCBuZXdIZWlnaHQ7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChmYXZQYWdlKSB7XG4gICAgICAgICAgICAgICAgLy8g0JLQuNC60L7RgNC40YHRgtC+0LLRg9GU0LzQviBzY3JvbGxIZWlnaHQg0LTQu9GPINC+0YLRgNC40LzQsNC90L3RjyDRgNC10LDQu9GM0L3QvtGXINCy0LjRgdC+0YLQuCDQutC+0L3RgtC10L3RgtGDXG4gICAgICAgICAgICAgICAgY29uc3QgcmVjdCA9IGZhdlBhZ2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAgICAgbmV3V2lkdGggPSByZWN0LndpZHRoIHx8IGZhdlBhZ2Uub2Zmc2V0V2lkdGggfHwgd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgICAgICAgICAgLy8g0JTQu9GPINCy0LjRgdC+0YLQuCDQstC40LrQvtGA0LjRgdGC0L7QstGD0ZTQvNC+IHNjcm9sbEhlaWdodCDRj9C60YnQviDQstGW0L0g0LHRltC70YzRiNC40Lkg0LfQsCBvZmZzZXRIZWlnaHRcbiAgICAgICAgICAgICAgICBjb25zdCBvZmZzZXRIZWlnaHQgPSBmYXZQYWdlLm9mZnNldEhlaWdodCB8fCBmYXZQYWdlLmNsaWVudEhlaWdodDtcbiAgICAgICAgICAgICAgICBjb25zdCBzY3JvbGxIZWlnaHQgPSBmYXZQYWdlLnNjcm9sbEhlaWdodDtcbiAgICAgICAgICAgICAgICBuZXdIZWlnaHQgPSBNYXRoLm1heChzY3JvbGxIZWlnaHQsIG9mZnNldEhlaWdodCwgcmVjdC5oZWlnaHQpIHx8IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gRmFsbGJhY2sg0L3QsCB2aWV3cG9ydFxuICAgICAgICAgICAgICAgIG5ld1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgICAgICAgICAgbmV3SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNGP0ZTQvNC+INGH0Lgg0YDQvtC30LzRltGA0Lgg0LfQvNGW0L3QuNC70LjRgdGPINC/0LXRgNC10LQg0L7QvdC+0LLQu9C10L3QvdGP0LxcbiAgICAgICAgICAgIGlmIChjYW52YXMud2lkdGggIT09IG5ld1dpZHRoIHx8IGNhbnZhcy5oZWlnaHQgIT09IG5ld0hlaWdodCkge1xuICAgICAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IG5ld1dpZHRoO1xuICAgICAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSBuZXdIZWlnaHQ7XG4gICAgICAgICAgICAgICAgLy8g0J7Rh9C40YnQsNGU0LzQviDRgdC90ZbQttC40L3QutC4INC/0YDQuCDQt9C80ZbQvdGWINGA0L7Qt9C80ZbRgNGDXG4gICAgICAgICAgICAgICAgc25vd2ZsYWtlcy5sZW5ndGggPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8g0JLRgdGC0LDQvdC+0LLQu9GO0ZTQvNC+INGA0L7Qt9C80ZbRgCBjYW52YXMg0Lcg0L3QtdCy0LXQu9C40LrQvtGOINC30LDRgtGA0LjQvNC60L7RjiDQtNC70Y8g0LrQvtGA0LXQutGC0L3QvtCz0L4g0YDQvtC30YDQsNGF0YPQvdC60YMg0YDQvtC30LzRltGA0ZbQslxuICAgICAgICAvLyDQktC40LrQvtGA0LjRgdGC0L7QstGD0ZTQvNC+INC60ZbQu9GM0LrQsCDQutCw0LTRgNGW0LIg0LTQu9GPINCz0LDRgNCw0L3RgtGW0Zcg0L/RgNCw0LLQuNC70YzQvdC+0LPQviDRgNC+0LfQvNGW0YDRg1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgcmVzaXplQ2FudmFzKCk7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc2l6ZUNhbnZhcygpO1xuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlc2l6ZUNhbnZhcygpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZUNhbnZhcyk7XG5cbiAgICAgICAgLy8g0JfQsNCy0LDQvdGC0LDQttC10L3QvdGPINC30L7QsdGA0LDQttC10L3QvdGPINGB0L3RltC20LjQvdC60LhcbiAgICAgICAgY29uc3Qgc25vd2ZsYWtlSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgbGV0IGltYWdlTG9hZGVkID0gZmFsc2U7XG5cbiAgICAgICAgc25vd2ZsYWtlSW1hZ2Uub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpbWFnZUxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICAvLyDQp9C10LrQsNGU0LzQviDQv9C+0LrQuCDRgdGC0L7RgNGW0L3QutCwINCy0LjQudC00LUg0LfRliDRgdGC0LDQvdGDIGxvYWRpbmcg0L/QtdGA0LXQtCDRgdGC0LDRgNGC0L7QvCDQsNC90ZbQvNCw0YbRltGXXG4gICAgICAgICAgICBmdW5jdGlvbiB3YWl0Rm9yUGFnZVJlYWR5KCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlzUGFnZUxvYWRpbmcgPSBtYWluUGFnZSAmJiBtYWluUGFnZS5jbGFzc0xpc3QuY29udGFpbnMoJ2xvYWRpbmcnKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoaXNQYWdlTG9hZGluZykge1xuICAgICAgICAgICAgICAgICAgICAvLyDQr9C60YnQviDRgdGC0L7RgNGW0L3QutCwINGJ0LUg0LIg0YHRgtCw0L3RliBsb2FkaW5nLCDRh9C10LrQsNGU0LzQviDQv9C+0LrQuCBsb2FkZXIg0L/RgNC40YXQvtCy0LDRlNGC0YzRgdGPXG4gICAgICAgICAgICAgICAgICAgIC8vIGhpZGVMb2FkZXIg0LLQuNC60LvQuNC60LDRlNGC0YzRgdGPINGH0LXRgNC10LcgMzAwbXMg0L/RltGB0LvRjyBxdWlja0NoZWNrQW5kUmVuZGVyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNpemVDYW52YXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNpemVDYW52YXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g0JTQvtC00LDRgtC60L7QstCwINC/0LXRgNC10LLRltGA0LrQsCDQv9GW0YHQu9GPINGJ0LUg0L7QtNC90L7Qs9C+INC60LDQtNGA0YNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc2l6ZUNhbnZhcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhbnZhcy53aWR0aCA+IDAgJiYgY2FudmFzLmhlaWdodCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydEFuaW1hdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDQr9C60YnQviDQstGB0LUg0YnQtSDQvdC10L/RgNCw0LLQuNC70YzQvdC40Lkg0YDQvtC30LzRltGALCDQv9C+0LLRgtC+0YDRjtGU0LzQvlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQod2FpdEZvclBhZ2VSZWFkeSwgNTApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9LCA0MDApOyAvLyDQp9C10LrQsNGU0LzQviDRgtGA0L7RhdC4INCx0ZbQu9GM0YjQtSDQvdGW0LYgaGlkZUxvYWRlciAoMzAwbXMpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g0KHRgtC+0YDRltC90LrQsCDQs9C+0YLQvtCy0LAsINCy0YHRgtCw0L3QvtCy0LvRjtGU0LzQviDRgNC+0LfQvNGW0YAg0YLQsCDQt9Cw0L/Rg9GB0LrQsNGU0LzQvlxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzaXplQ2FudmFzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc2l6ZUNhbnZhcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc2l6ZUNhbnZhcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2FudmFzLndpZHRoID4gMCAmJiBjYW52YXMuaGVpZ2h0ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRBbmltYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgd2FpdEZvclBhZ2VSZWFkeSgpO1xuICAgICAgICB9O1xuICAgICAgICBzbm93Zmxha2VJbWFnZS5zcmMgPSAnaW1nL3Nub3dmbGFrZS5wbmcnO1xuICAgICAgIFxuXG4gICAgICAgIC8vINCa0LvQsNGBINC00LvRjyDRgdC90ZbQttC40L3QutC4XG4gICAgICAgIGNsYXNzIFNub3dmbGFrZSB7XG4gICAgICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnggPSBNYXRoLnJhbmRvbSgpICogKGNhbnZhcy53aWR0aCB8fCB3aW5kb3cuaW5uZXJXaWR0aCk7XG4gICAgICAgICAgICAgICAgdGhpcy55ID0gLTIwO1xuICAgICAgICAgICAgICAgIHRoaXMuc2l6ZSA9IE1hdGgucmFuZG9tKCkgKiAoU05PV0ZMQUtFX01BWF9TSVpFIC0gU05PV0ZMQUtFX01JTl9TSVpFKSArIFNOT1dGTEFLRV9NSU5fU0laRTtcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVkID0gTWF0aC5yYW5kb20oKSAqIChTTk9XRkxBS0VfTUFYX1NQRUVEIC0gU05PV0ZMQUtFX01JTl9TUEVFRCkgKyBTTk9XRkxBS0VfTUlOX1NQRUVEO1xuICAgICAgICAgICAgICAgIHRoaXMud2luZCA9IChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIFNOT1dGTEFLRV9XSU5EX1JBTkdFO1xuICAgICAgICAgICAgICAgIHRoaXMub3BhY2l0eSA9IE1hdGgucmFuZG9tKCkgKiAwLjUgKyAwLjU7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3RhdGlvbiA9IE1hdGgucmFuZG9tKCkgKiBNYXRoLlBJICogMjtcbiAgICAgICAgICAgICAgICB0aGlzLnJvdGF0aW9uU3BlZWQgPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiAwLjAyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1cGRhdGUoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy55ICs9IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICAgICAgdGhpcy54ICs9IHRoaXMud2luZCArIChNYXRoLnNpbih0aGlzLnkgKiAwLjAxKSAqIDAuMik7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3RhdGlvbiArPSB0aGlzLnJvdGF0aW9uU3BlZWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRyYXcoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpbWFnZUxvYWRlZCkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vINCf0LXRgNC10LLRltGA0LrQsCDRh9C4IGNhbnZhcyDQvNCw0ZQg0L/RgNCw0LLQuNC70YzQvdC40Lkg0YDQvtC30LzRltGAXG4gICAgICAgICAgICAgICAgaWYgKGNhbnZhcy53aWR0aCA9PT0gMCB8fCBjYW52YXMuaGVpZ2h0ID09PSAwKSByZXR1cm47XG5cbiAgICAgICAgICAgICAgICBjdHguc2F2ZSgpO1xuICAgICAgICAgICAgICAgIGN0eC5nbG9iYWxBbHBoYSA9IHRoaXMub3BhY2l0eTtcbiAgICAgICAgICAgICAgICBjdHgudHJhbnNsYXRlKHRoaXMueCwgdGhpcy55KTtcbiAgICAgICAgICAgICAgICBjdHgucm90YXRlKHRoaXMucm90YXRpb24pO1xuICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICAgICAgICAgIHNub3dmbGFrZUltYWdlLFxuICAgICAgICAgICAgICAgICAgICAtdGhpcy5zaXplIC8gMixcbiAgICAgICAgICAgICAgICAgICAgLXRoaXMuc2l6ZSAvIDIsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaXplXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBjdHgucmVzdG9yZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpc09mZlNjcmVlbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy55ID4gY2FudmFzLmhlaWdodCArIDIwIHx8IFxuICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnggPCAtMjAgfHwgXG4gICAgICAgICAgICAgICAgICAgICAgIHRoaXMueCA+IGNhbnZhcy53aWR0aCArIDIwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlU25vd2ZsYWtlKCkge1xuICAgICAgICAgICAgaWYgKHNub3dmbGFrZXMubGVuZ3RoIDwgU05PV0ZMQUtFX0NPVU5UKSB7XG4gICAgICAgICAgICAgICAgc25vd2ZsYWtlcy5wdXNoKG5ldyBTbm93Zmxha2UoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiB1cGRhdGVTbm93Zmxha2VzKCkge1xuICAgICAgICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIGlmIChub3cgLSBsYXN0U25vd2ZsYWtlVGltZSA+IFNOT1dGTEFLRV9TUEFXTl9JTlRFUlZBTCkge1xuICAgICAgICAgICAgICAgIGNyZWF0ZVNub3dmbGFrZSgpO1xuICAgICAgICAgICAgICAgIGxhc3RTbm93Zmxha2VUaW1lID0gbm93O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gc25vd2ZsYWtlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgIHNub3dmbGFrZXNbaV0udXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgaWYgKHNub3dmbGFrZXNbaV0uaXNPZmZTY3JlZW4oKSkge1xuICAgICAgICAgICAgICAgICAgICBzbm93Zmxha2VzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBkcmF3U25vd2ZsYWtlcygpIHtcbiAgICAgICAgICAgIC8vINCf0LXRgNC10LLRltGA0LrQsCDRh9C4IGNhbnZhcyDQvNCw0ZQg0L/RgNCw0LLQuNC70YzQvdC40Lkg0YDQvtC30LzRltGAINC/0LXRgNC10LQg0LzQsNC70Y7QstCw0L3QvdGP0LxcbiAgICAgICAgICAgIGlmIChjYW52YXMud2lkdGggPT09IDAgfHwgY2FudmFzLmhlaWdodCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJlc2l6ZUNhbnZhcygpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgICAgc25vd2ZsYWtlcy5mb3JFYWNoKHNub3dmbGFrZSA9PiB7XG4gICAgICAgICAgICAgICAgc25vd2ZsYWtlLmRyYXcoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbiAgICAgICAgICAgIC8vINCf0LXRgNC10LLRltGA0Y/RlNC80L4g0YDQvtC30LzRltGAIGNhbnZhcyDQvdCwINC/0L7Rh9Cw0YLQutGDINC60L7QttC90L7Qs9C+INC60LDQtNGA0YMgKNGC0ZbQu9GM0LrQuCDRj9C60YnQviDQstGW0L0g0L3QtdC/0YDQsNCy0LjQu9GM0L3QuNC5KVxuICAgICAgICAgICAgaWYgKGNhbnZhcy53aWR0aCA9PT0gMCB8fCBjYW52YXMuaGVpZ2h0ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmVzaXplQ2FudmFzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHVwZGF0ZVNub3dmbGFrZXMoKTtcbiAgICAgICAgICAgIGRyYXdTbm93Zmxha2VzKCk7XG4gICAgICAgICAgICBhbmltYXRpb25JZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHN0YXJ0QW5pbWF0aW9uKCkge1xuICAgICAgICAgICAgaWYgKGFuaW1hdGlvbklkKSB7XG4gICAgICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uSWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYW5pbWF0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g0JfRg9C/0LjQvdGP0ZTQvNC+INCw0L3RltC80LDRhtGW0Y4g0L/RgNC4INCy0LjRhdC+0LTRliDQtyB2aWV3cG9ydFxuICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgICAgICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFhbmltYXRpb25JZCAmJiBpbWFnZUxvYWRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRBbmltYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhbmltYXRpb25JZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uSWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uSWQgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUoY2FudmFzKTtcbiAgICB9XG4gICAgXG4gICAgbG9hZFRyYW5zbGF0aW9ucygpXG4gICAgICAgIC50aGVuKGluaXQpIC8vINC30LDQv9GD0YHQuiDRltC90ZbRgtGDINGB0YLQvtGA0ZbQvdC60LhcblxuXG5cblxuXG4gICAgLy8gY29uc3QgbG5nQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sbmctYnRuXCIpXG4gICAgLy9cbiAgICAvLyAvLyDQktGB0YLQsNC90L7QstC70Y7RlNC80L4g0YLQtdC60YHRgiDQutC90L7Qv9C60Lgg0L3QsCDQv9C+0YLQvtGH0L3RgyDQsNC60YLQuNCy0L3RgyDQvNC+0LLRg1xuICAgIC8vIGZ1bmN0aW9uIHVwZGF0ZUxhbmd1YWdlQnV0dG9uKCkge1xuICAgIC8vICAgICAvLyDQktC40LrQvtGA0LjRgdGC0L7QstGD0ZTQvNC+INGC0YMg0YHQsNC80YMg0LvQvtCz0ZbQutGDLCDRidC+INGWINC00LvRjyDQstC40LfQvdCw0YfQtdC90L3RjyBsb2NhbGVcbiAgICAvLyAgICAgbGV0IGN1cnJlbnRMb2NhbGUgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxlXCIpIHx8IFwiaHJcIjtcbiAgICAvLyAgICAgaWYgKGhyTGVuZykgY3VycmVudExvY2FsZSA9ICdocic7XG4gICAgLy8gICAgIGlmIChlbkxlbmcpIGN1cnJlbnRMb2NhbGUgPSAnZW4nO1xuICAgIC8vICAgICBpZiAobG5nQnRuKSB7XG4gICAgLy8gICAgICAgICBsbmdCdG4udGV4dENvbnRlbnQgPSBjdXJyZW50TG9jYWxlO1xuICAgIC8vICAgICB9XG4gICAgLy8gfVxuICAgIC8vXG4gICAgLy8gLy8g0J7QvdC+0LLQu9GO0ZTQvNC+INC60L3QvtC/0LrRgyDQv9GA0Lgg0LfQsNCy0LDQvdGC0LDQttC10L3QvdGWICjQv9GW0YHQu9GPINCy0LjQt9C90LDRh9C10L3QvdGPIGxvY2FsZSlcbiAgICAvLyB1cGRhdGVMYW5ndWFnZUJ1dHRvbigpO1xuXG4gICAgLy8gaWYgKGxuZ0J0bikge1xuICAgIC8vICAgICBsbmdCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAvLyAgICAgICAgIC8vINCS0LjQt9C90LDRh9Cw0ZTQvNC+INC/0L7RgtC+0YfQvdGDINC80L7QstGDINC/0LXRgNC10LQg0L/QtdGA0LXQvNC40LrQsNC90L3Rj9C8XG4gICAgLy8gICAgICAgICBsZXQgY3VycmVudExvY2FsZSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJsb2NhbGVcIikgfHwgXCJoclwiO1xuICAgIC8vICAgICAgICAgaWYgKGhyTGVuZykgY3VycmVudExvY2FsZSA9ICdocic7XG4gICAgLy8gICAgICAgICBpZiAoZW5MZW5nKSBjdXJyZW50TG9jYWxlID0gJ2VuJztcbiAgICAvL1xuICAgIC8vICAgICAgICAgaWYgKGN1cnJlbnRMb2NhbGUgPT09IFwiZW5cIikge1xuICAgIC8vICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJsb2NhbGVcIik7XG4gICAgLy8gICAgICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJsb2NhbGVcIiwgXCJlblwiKTtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gfVxuICAgIC8vXG4gICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWJ0blwiKT8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAvLyAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LXRlc3RcIik/LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpO1xuICAgIC8vIH0pO1xuXG4gICAgLy8g0KLQuNC80YfQsNGB0L7QstC40Lkg0L7QsSfRlNC60YIg0Lcg0LTQsNC90LjQvNC4INC/0YDQviDQv9GA0L7QvNGW0LbQutC4INGC0LjQttC90ZbQslxuICAgIC8vIFRPRE86INCX0LDQvNGW0L3QuNGC0Lgg0L3QsCDQtNCw0L3RliDQtyDQsdC10LrQtdC90LTRg1xuICAgIC8vINCf0YDQuNC60LvQsNC0INGB0YLRgNGD0LrRgtGD0YDQuCDQtNCw0L3QuNGFINC3INCx0LXQutC10L3QtNGDOlxuICAgIC8vIHtcbiAgICAvLyAgICAgMTogeyBzdGFydDogXCIyMDI1LTEyLTE1VDAwOjAwOjAwXCIsIGVuZDogXCIyMDI1LTEyLTIxVDIzOjU5OjU5XCIgfSxcbiAgICAvLyAgICAgMjogeyBzdGFydDogXCIyMDI1LTEyLTIyVDAwOjAwOjAwXCIsIGVuZDogXCIyMDI1LTEyLTI4VDIzOjU5OjU5XCIgfSxcbiAgICAvLyAgICAgLi4uXG4gICAgLy8gfVxuICAgIC8vINCU0LvRjyDRltC90YLQtdCz0YDQsNGG0ZbRlyDQtyDQsdC10LrQtdC90LTQvtC8OiDQt9Cw0LzRltC90LjRgtC4INGG0LXQuSDQvtCxJ9GU0LrRgiDQvdCwINC00LDQvdGWINC3IEFQSVxuICAgIC8vINCd0LDQv9GA0LjQutC70LDQtDogY29uc3Qgd2Vla3NEYXRhID0gYXdhaXQgcmVxdWVzdCgnL2FwaS93ZWVrcycpO1xuICAgIGNvbnN0IHdlZWtzRGF0YSA9IHtcbiAgICAgICAgMToge1xuICAgICAgICAgICAgc3RhcnQ6IFwiMjAyNS0xMi0xNVQwMDowMDowMFwiLFxuICAgICAgICAgICAgZW5kOiBcIjIwMjUtMTItMjFUMjM6NTk6NTlcIlxuICAgICAgICB9LFxuICAgICAgICAyOiB7XG4gICAgICAgICAgICBzdGFydDogXCIyMDI1LTEyLTIyVDAwOjAwOjAwXCIsXG4gICAgICAgICAgICBlbmQ6IFwiMjAyNS0xMi0yOFQyMzo1OTo1OVwiXG4gICAgICAgIH0sXG4gICAgICAgIDM6IHtcbiAgICAgICAgICAgIHN0YXJ0OiBcIjIwMjUtMTItMjlUMDA6MDA6MDBcIixcbiAgICAgICAgICAgIGVuZDogXCIyMDI2LTAxLTA0VDIzOjU5OjU5XCJcbiAgICAgICAgfSxcbiAgICAgICAgNDoge1xuICAgICAgICAgICAgc3RhcnQ6IFwiMjAyNi0wMS0wNVQwMDowMDowMFwiLFxuICAgICAgICAgICAgZW5kOiBcIjIwMjYtMDEtMTFUMjM6NTk6NTlcIlxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vINCk0YPQvdC60YbRltGPINC00LvRjyDQstC40LfQvdCw0YfQtdC90L3RjyDQsNC60YLQuNCy0L3QvtCz0L4g0YLQuNC20L3RjyDQvdCwINC+0YHQvdC+0LLRliDQtNCw0L3QuNGFINC3INC+0LEn0ZTQutGC0LBcbiAgICBmdW5jdGlvbiBnZXRBY3RpdmVXZWVrKHdlZWtzRGF0YSkge1xuICAgICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGxldCBhY3RpdmVXZWVrSW5kZXggPSBudWxsO1xuXG4gICAgICAgIC8vINCf0LXRgNC10LLRltGA0LrQsCDQutC+0LbQvdC+0LPQviDRgtC40LbQvdGPXG4gICAgICAgIGZvciAoY29uc3Qgd2Vla051bSBpbiB3ZWVrc0RhdGEpIHtcbiAgICAgICAgICAgIGNvbnN0IHdlZWsgPSB3ZWVrc0RhdGFbd2Vla051bV07XG4gICAgICAgICAgICBjb25zdCBzdGFydCA9IG5ldyBEYXRlKHdlZWsuc3RhcnQpO1xuICAgICAgICAgICAgY29uc3QgZW5kID0gbmV3IERhdGUod2Vlay5lbmQpO1xuXG4gICAgICAgICAgICBpZiAoY3VycmVudERhdGUgPj0gc3RhcnQgJiYgY3VycmVudERhdGUgPD0gZW5kKSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlV2Vla0luZGV4ID0gcGFyc2VJbnQod2Vla051bSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYWN0aXZlV2Vla0luZGV4O1xuICAgIH1cblxuICAgIC8vINCG0L3RltGG0ZbQsNC70ZbQt9Cw0YbRltGPINGB0LXQutGG0ZbRlyDRltCz0L7RgCDQtyDQsNCy0YLQvtC80LDRgtC40YfQvdC40Lwg0LLQuNC30L3QsNGH0LXQvdC90Y/QvCDRgtC40LbQvdGPXG4gICAgZnVuY3Rpb24gaW5pdEdhbWVzV2VlaygpIHtcbiAgICAgICAgLy8g0JLQuNC30L3QsNGH0LDRlNC80L4g0LDQutGC0LjQstC90LjQuSDRgtC40LbQtNC10L3RjCDQvdCwINC+0YHQvdC+0LLRliDQtNCw0L3QuNGFINC3INC+0LEn0ZTQutGC0LBcbiAgICAgICAgbGV0IGFjdGl2ZVdlZWsgPSBnZXRBY3RpdmVXZWVrKHdlZWtzRGF0YSkgfHwgMTtcblxuICAgICAgICAvLyDQntCx0LzQtdC20LXQvdC90Y8g0LTQviA0INGC0LjQttC90ZbQslxuICAgICAgICBpZiAoYWN0aXZlV2VlayA+IDQpIGFjdGl2ZVdlZWsgPSA0O1xuXG4gICAgICAgIC8vINCf0YDQuNGF0L7QstGD0LLQsNC90L3RjyDQstGB0ZbRhSDRgdC/0LjRgdC60ZbQsiDRltCz0L7RgFxuICAgICAgICBjb25zdCBnYW1lTGlzdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2FtZXNfX2xpc3QnKTtcbiAgICAgICAgZ2FtZUxpc3RzLmZvckVhY2gobGlzdCA9PiB7XG4gICAgICAgICAgICBsaXN0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8g0J/QvtC60LDQtyDRgtGW0LvRjNC60Lgg0LDQutGC0LjQstC90L7Qs9C+INGC0LjQttC90Y9cbiAgICAgICAgY29uc3QgY3VycmVudExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZ2FtZXNfX2xpc3QuX3dlZWske2FjdGl2ZVdlZWt9YCk7XG4gICAgICAgIGlmIChjdXJyZW50TGlzdCkge1xuICAgICAgICAgICAgY3VycmVudExpc3QuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g0JDQstGC0L7QvNCw0YLQuNGH0L3QtSDQtNC+0LTQsNCy0LDQvdC90Y8gZGF0YS3QsNGC0YDQuNCx0YPRgtGW0LIg0LTQu9GPINGC0YDQtdC60ZbQvdCz0YMg0YLQsCDQstGB0YLQsNC90L7QstC70LXQvdC90Y8g0L/QvtGB0LjQu9Cw0L3RjFxuICAgICAgICBhdXRvQWRkRGF0YUJ1dHRvbnMoKTtcbiAgICAgICAgc2V0R2FtZUxpbmtzKCk7XG4gICAgfVxuXG4gICAgLy8g0KLQuNC80YfQsNGB0L7QstC40Lkg0L7QsSfRlNC60YIg0Lcg0LzQsNC/0ZbQvdCz0L7QvCBnYW1lLWlkINC90LAgVVJMXG4gICAgLy8gVE9ETzog0JfQsNC80ZbQvdC40YLQuCDQvdCwINC00LDQvdGWINC3INCx0LXQutC10L3QtNGDXG4gICAgLy8g0J/RgNC40LrQu9Cw0LQg0YHRgtGA0YPQutGC0YPRgNC4INC00LDQvdC40YUg0Lcg0LHQtdC60LXQvdC00YM6XG4gICAgLy8ge1xuICAgIC8vICAgICBcIndlZWsxX2dhbWUxXCI6IFwiL2Nhc2luby9zaG93LWdhbWUvZ2FtZS1zbHVnLTFcIixcbiAgICAvLyAgICAgXCJ3ZWVrMV9nYW1lMlwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL2dhbWUtc2x1Zy0yXCIsXG4gICAgLy8gICAgIC4uLlxuICAgIC8vIH1cbiAgICAvLyDQlNC70Y8g0ZbQvdGC0LXQs9GA0LDRhtGW0Zcg0Lcg0LHQtdC60LXQvdC00L7QvDogY29uc3QgZ2FtZXNMaW5rcyA9IGF3YWl0IHJlcXVlc3QoJy9hcGkvZ2FtZXMvbGlua3MnKTtcbiAgICBjb25zdCBnYW1lc0xpbmtzID0ge1xuICAgICAgICAvLyBXZWVrIDFcbiAgICAgICAgXCJ3ZWVrMV9nYW1lMVwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWsxX2dhbWUyXCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazFfZ2FtZTNcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrMV9nYW1lNFwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWsxX2dhbWU1XCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazFfZ2FtZTZcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrMV9nYW1lN1wiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWsxX2dhbWU4XCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazFfZ2FtZTlcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrMV9nYW1lMTBcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgLy8gV2VlayAyXG4gICAgICAgIFwid2VlazJfZ2FtZTFcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrMl9nYW1lMlwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWsyX2dhbWUzXCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazJfZ2FtZTRcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrMl9nYW1lNVwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWsyX2dhbWU2XCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazJfZ2FtZTdcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrMl9nYW1lOFwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWsyX2dhbWU5XCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazJfZ2FtZTEwXCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIC8vIFdlZWsgM1xuICAgICAgICBcIndlZWszX2dhbWUxXCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazNfZ2FtZTJcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrM19nYW1lM1wiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWszX2dhbWU0XCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazNfZ2FtZTVcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrM19nYW1lNlwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWszX2dhbWU3XCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazNfZ2FtZThcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrM19nYW1lOVwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWszX2dhbWUxMFwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICAvLyBXZWVrIDRcbiAgICAgICAgXCJ3ZWVrNF9nYW1lMVwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWs0X2dhbWUyXCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazRfZ2FtZTNcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrNF9nYW1lNFwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWs0X2dhbWU1XCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazRfZ2FtZTZcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrNF9nYW1lN1wiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWs0X2dhbWU4XCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazRfZ2FtZTlcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrNF9nYW1lMTBcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIlxuICAgIH07XG5cbiAgICAvLyDQktGB0YLQsNC90L7QstC70LXQvdC90Y8g0YPQvdGW0LrQsNC70YzQvdC40YUg0L/QvtGB0LjQu9Cw0L3RjCDQtNC70Y8g0LrQvtC20L3QvtGXINCz0YDQuFxuICAgIGZ1bmN0aW9uIHNldEdhbWVMaW5rcygpIHtcbiAgICAgICAgY29uc3QgZ2FtZUxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdhbWVzX19pdGVtLWxpbmtbZGF0YS1nYW1lLWlkXScpO1xuICAgICAgICBcbiAgICAgICAgZ2FtZUxpbmtzLmZvckVhY2gobGluayA9PiB7XG4gICAgICAgICAgICBjb25zdCBnYW1lSWQgPSBsaW5rLmdldEF0dHJpYnV0ZSgnZGF0YS1nYW1lLWlkJyk7XG4gICAgICAgICAgICBpZiAoZ2FtZUlkICYmIGdhbWVzTGlua3NbZ2FtZUlkXSkge1xuICAgICAgICAgICAgICAgIGxpbmsuaHJlZiA9IGdhbWVzTGlua3NbZ2FtZUlkXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8g0JDQstGC0L7QvNCw0YLQuNGH0L3QtSDQtNC+0LTQsNCy0LDQvdC90Y8gZGF0YS3QsNGC0YDQuNCx0YPRgtGW0LIg0LTQu9GPINGC0YDQtdC60ZbQvdCz0YNcbiAgICBmdW5jdGlvbiBhdXRvQWRkRGF0YUJ1dHRvbnMoKSB7XG4gICAgICAgIGNvbnN0IGdhbWVMaXN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYW1lc19fbGlzdCcpO1xuICAgICAgICBcbiAgICAgICAgZ2FtZUxpc3RzLmZvckVhY2gobGlzdCA9PiB7XG4gICAgICAgICAgICBjb25zdCB3ZWVrTWF0Y2ggPSBsaXN0LmNsYXNzTmFtZS5tYXRjaCgvX3dlZWsoXFxkKykvKTtcbiAgICAgICAgICAgIGlmICghd2Vla01hdGNoKSByZXR1cm47XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHdlZWsgPSB3ZWVrTWF0Y2hbMV07XG4gICAgICAgICAgICBjb25zdCBpdGVtcyA9IGxpc3QucXVlcnlTZWxlY3RvckFsbCgnLmdhbWVzX19pdGVtJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZ2FtZU51bWJlciA9IGluZGV4ICsgMTtcbiAgICAgICAgICAgICAgICBjb25zdCBidXR0b25OYW1lID0gYHdlZWske3dlZWt9R2FtZSR7Z2FtZU51bWJlcn1gO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IGxpbmtFbCA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLmdhbWVzX19pdGVtLWxpbmsnKTtcbiAgICAgICAgICAgICAgICBpZiAobGlua0VsKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vINCe0L3QvtCy0LvRjtGU0LzQviBkYXRhLWJ1dHRvbiDRj9C60YnQviDRidC1INC90LUg0LLRgdGC0LDQvdC+0LLQu9C10L3QviDQsNCx0L4g0L3QtdC60L7RgNC10LrRgtC90LVcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudEJ1dHRvbiA9IGxpbmtFbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghY3VycmVudEJ1dHRvbiB8fCAhY3VycmVudEJ1dHRvbi5pbmNsdWRlcyhgd2VlayR7d2Vla31HYW1lYCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtFbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtYnV0dG9uJywgYnV0dG9uTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8g0JLRgdGC0LDQvdC+0LLQu9GO0ZTQvNC+IGRhdGEtcHJvbW8g0Y/QutGJ0L4g0YnQtSDQvdC1INCy0YHRgtCw0L3QvtCy0LvQtdC90L5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFsaW5rRWwuZ2V0QXR0cmlidXRlKCdkYXRhLXByb21vJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtFbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvbW8nLCAncmF6aW5hXzIwMjZfaHInKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cblxufSkoKTtcbiJdfQ==
