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
  var locale = "en";
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwibWFpblBhZ2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJsb2FkZXIiLCJyZXN1bHRzVGFibGUiLCJyZXN1bHRzVGFibGVPdGhlciIsImhyTGVuZyIsImVuTGVuZyIsImxvY2FsZSIsImRlYnVnIiwiaGlkZUxvYWRlciIsImkxOG5EYXRhIiwidHJhbnNsYXRlU3RhdGUiLCJ1c2VySWQiLCJyZXF1ZXN0IiwibGluayIsImV4dHJhT3B0aW9ucyIsImZldGNoIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJvayIsIkVycm9yIiwianNvbiIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsInJlcG9ydEVycm9yIiwic3R5bGUiLCJkaXNwbGF5Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwic3RhcnRzV2l0aCIsIlByb21pc2UiLCJyZWplY3QiLCJjbGFzc0xpc3QiLCJhZGQiLCJib2R5Iiwib3ZlcmZsb3ciLCJyZW1vdmUiLCJpbml0IiwidHJ5RGV0ZWN0VXNlcklkIiwicXVpY2tDaGVja0FuZFJlbmRlciIsImluaXRJbmZpbml0ZVNjcm9sbCIsImluaXRQcm9ncmVzc0JhciIsImluaXRQYXJ0aWNpcGF0ZUNhbnZhcyIsImluaXRTbm93Zmxha2VzQ2FudmFzIiwic2V0VGltZW91dCIsImRyb3Bkb3ducyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZHJvcGRvd24iLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJvcGVuIiwic3VtbWFyeSIsInN1bW1hcnlSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwiY3VycmVudFNjcm9sbFkiLCJzY3JvbGxZIiwicGFnZVlPZmZzZXQiLCJ0YXJnZXRTY3JvbGxZIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic2Nyb2xsVG8iLCJNYXRoIiwibWF4IiwiYmVoYXZpb3IiLCJzdG9yZSIsInN0YXRlIiwiZ2V0U3RhdGUiLCJhdXRoIiwiaXNBdXRob3JpemVkIiwiaWQiLCJnX3VzZXJfaWQiLCJhdHRlbXB0cyIsIm1heEF0dGVtcHRzIiwiYXR0ZW1wdEludGVydmFsIiwid2FpdEZvclVzZXJJZCIsInJlc29sdmUiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImxvYWRUcmFuc2xhdGlvbnMiLCJ0cmFuc2xhdGUiLCJyZXBvcnREYXRhIiwib3JpZ2luIiwidXNlcmlkIiwiZXJyb3JUZXh0IiwidGV4dCIsIm1lc3NhZ2UiLCJ0eXBlIiwibmFtZSIsInN0YWNrIiwibWV0aG9kIiwiSlNPTiIsInN0cmluZ2lmeSIsIndhcm4iLCJlbGVtcyIsImxlbmd0aCIsImVsZW0iLCJrZXkiLCJnZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJyZW1vdmVBdHRyaWJ1dGUiLCJsb2ciLCJyZWZyZXNoTG9jYWxpemVkQ2xhc3MiLCJlbGVtZW50IiwibGFuZyIsInJlbmRlclVzZXJzIiwid2Vla051bSIsInVzZXJEYXRhIiwiTnVtYmVyIiwid2Vla09iaiIsImZpbmQiLCJ3Iiwid2VlayIsImRhdGEiLCJBcnJheSIsImlzQXJyYXkiLCJ1c2VycyIsImlzU3RhZ2VFbmRlZCIsIndpbm5lckFkZGl0aW9uYWxQcml6ZSIsInUiLCJ3aW5uZXIiLCJjdXJyZW50VXNlciIsInVzZXIiLCJpc1ZlcmlmaWVkVXNlciIsInBvaW50cyIsInBvcHVsYXRlVXNlcnNUYWJsZSIsImN1cnJlbnRVc2VySWQiLCJzZWNvbmRUYWJsZU90aGVyIiwic2Vjb25kVGFibGUiLCJpc1RvcEN1cnJlbnRVc2VyIiwic2xpY2UiLCJzb21lIiwidG9wVXNlcnNMZW5ndGgiLCJ0b3BVc2VycyIsImRpc3BsYXlVc2VyIiwiaXNDdXJyZW50VXNlciIsInRhYmxlIiwicmVuZGVyUm93Iiwib3B0aW9ucyIsImhpZ2hsaWdodCIsIm5laWdoYm9yIiwidXNlclJvdyIsImNyZWF0ZUVsZW1lbnQiLCJ1c2VyUGxhY2UiLCJpbmRleE9mIiwicHJpemVLZXkiLCJnZXRQcml6ZVRyYW5zbGF0aW9uS2V5IiwidHJhbnNsYXRlS2V5IiwibWFza1VzZXJJZCIsInRvRml4ZWQiLCJhcHBlbmQiLCJpbmRleCIsImNhbnZhcyIsInBlcmNlbnRFbGVtZW50IiwiY3R4IiwiZ2V0Q29udGV4dCIsImJhckhlaWdodCIsInNlZ21lbnRXaWR0aCIsInNlZ21lbnRIZWlnaHQiLCJzZWdtZW50R2FwIiwicGFkZGluZyIsInNlZ21lbnRSYWRpdXMiLCJjdXJyZW50UHJvZ3Jlc3MiLCJ0YXJnZXRQcm9ncmVzcyIsImFuaW1hdGlvbkR1cmF0aW9uIiwic3RhcnRUaW1lIiwiRGF0ZSIsIm5vdyIsImFuaW1hdGlvbklkIiwibWF4U2VnbWVudHMiLCJyZXNpemVDYW52YXMiLCJjb250YWluZXIiLCJwYXJlbnRFbGVtZW50IiwiY29udGFpbmVyV2lkdGgiLCJvZmZzZXRXaWR0aCIsIndpZHRoIiwiaGVpZ2h0IiwiYXZhaWxhYmxlV2lkdGgiLCJzZWdtZW50V2l0aEdhcCIsImZsb29yIiwiZHJhd1Byb2dyZXNzQmFyIiwicHJvZ3Jlc3MiLCJjbGVhclJlY3QiLCJzdHJva2VTdHlsZSIsImxpbmVXaWR0aCIsInN0cm9rZVJlY3QiLCJmaWxsZWRTZWdtZW50cyIsImZpbGxTdHlsZSIsImNlbnRlclkiLCJpIiwieCIsInkiLCJiZWdpblBhdGgiLCJyb3VuZFJlY3QiLCJyIiwibW92ZVRvIiwibGluZVRvIiwicXVhZHJhdGljQ3VydmVUbyIsImNsb3NlUGF0aCIsImZpbGwiLCJ1cGRhdGVQcm9ncmVzcyIsImVsYXBzZWQiLCJwZXJjZW50IiwidGV4dENvbnRlbnQiLCJyZXNpemVUaW1lb3V0IiwiY2xlYXJUaW1lb3V0Iiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJvYnNlcnZlIiwiQ0FOVkFTX1dJRFRIIiwiQ0FOVkFTX0hFSUdIVCIsIlRSRUVfV0lEVEgiLCJUUkVFX0hFSUdIVCIsIkZSQU1FU19QRVJfUk9XIiwiVE9UQUxfUk9XUyIsIlNQUklURV9TSEVFVF9XSURUSCIsIlNQUklURV9TSEVFVF9IRUlHSFQiLCJGUkFNRV9XSURUSCIsIkZSQU1FX0hFSUdIVCIsIkRFRVJfU0NBTEUiLCJERUVSX1dJRFRIIiwiREVFUl9IRUlHSFQiLCJ0cmVlWCIsInRyZWVZIiwiRlJBTUVfREVMQVkiLCJXQUxLSU5HX0ZSQU1FUyIsIkZSQU1FX1JFUEVBVCIsIklETEVfTUlOX0RVUkFUSU9OIiwiSURMRV9NQVhfRFVSQVRJT04iLCJERUVSX1NUQVRFIiwiV0FMS0lORyIsIklETEUiLCJmcmFtZUNvdW50ZXIiLCJEZWVyIiwic3RhcnRYIiwic3RhcnRZIiwibWluWCIsIm1heFgiLCJzcGVlZCIsInpJbmRleCIsImRpcmVjdGlvbiIsImZyYW1lSW5kZXgiLCJmcmFtZVJlcGVhdENvdW50ZXIiLCJpZGxlVGltZXIiLCJpZGxlRHVyYXRpb24iLCJyb3ciLCJjb2wiLCJzaG91bGRVcGRhdGVGcmFtZSIsInJhbmRvbSIsInNwcml0ZUltYWdlIiwiZnJhbWVXaWR0aCIsImZyYW1lSGVpZ2h0IiwiZGVlcldpZHRoIiwiZGVlckhlaWdodCIsImNvbXBsZXRlIiwiZ2V0U3ByaXRlRnJhbWVJbmRleCIsInNvdXJjZVgiLCJzb3VyY2VZIiwiZHJhd0ltYWdlIiwiZGVlcnMiLCJERUVSX0NPVU5UIiwiZGVlckNvbmZpZ3MiLCJjb25maWciLCJwdXNoIiwiaW1hZ2VzIiwiYmFja2dyb3VuZCIsIkltYWdlIiwidHJlZSIsImRlZXJTcHJpdGUiLCJpbWFnZXNMb2FkZWQiLCJ0b3RhbEltYWdlcyIsIm9uSW1hZ2VMb2FkIiwiZHJhd0NhbnZhcyIsInN0YXJ0QW5pbWF0aW9uIiwib25sb2FkIiwic3JjIiwiVFJFRV9aX0lOREVYIiwiZHJhd2FibGVFbGVtZW50cyIsImRlZXIiLCJkcmF3Iiwic29ydCIsImEiLCJiIiwiYW5pbWF0ZSIsInVwZGF0ZSIsImZhdlBhZ2UiLCJTTk9XRkxBS0VfQ09VTlQiLCJTTk9XRkxBS0VfTUlOX1NJWkUiLCJTTk9XRkxBS0VfTUFYX1NJWkUiLCJTTk9XRkxBS0VfTUlOX1NQRUVEIiwiU05PV0ZMQUtFX01BWF9TUEVFRCIsIlNOT1dGTEFLRV9XSU5EX1JBTkdFIiwiU05PV0ZMQUtFX1NQQVdOX0lOVEVSVkFMIiwic25vd2ZsYWtlcyIsImxhc3RTbm93Zmxha2VUaW1lIiwibmV3V2lkdGgiLCJuZXdIZWlnaHQiLCJyZWN0IiwiaW5uZXJXaWR0aCIsIm9mZnNldEhlaWdodCIsImNsaWVudEhlaWdodCIsInNjcm9sbEhlaWdodCIsImlubmVySGVpZ2h0Iiwic25vd2ZsYWtlSW1hZ2UiLCJpbWFnZUxvYWRlZCIsIndhaXRGb3JQYWdlUmVhZHkiLCJpc1BhZ2VMb2FkaW5nIiwiY29udGFpbnMiLCJTbm93Zmxha2UiLCJzaXplIiwid2luZCIsIm9wYWNpdHkiLCJyb3RhdGlvbiIsIlBJIiwicm90YXRpb25TcGVlZCIsInNpbiIsInNhdmUiLCJnbG9iYWxBbHBoYSIsInJvdGF0ZSIsInJlc3RvcmUiLCJjcmVhdGVTbm93Zmxha2UiLCJ1cGRhdGVTbm93Zmxha2VzIiwiaXNPZmZTY3JlZW4iLCJzcGxpY2UiLCJkcmF3U25vd2ZsYWtlcyIsInNub3dmbGFrZSIsInNjcm9sbEJsb2NrcyIsInNjcm9sbEJsb2NrIiwic2Nyb2xsQ29udGVudCIsInNjcm9sbFRleHQiLCJ0cmltIiwicGFkZGluZ1JpZ2h0IiwiZml4ZWRXaWR0aCIsImVsZW1lbnRzIiwiaXRlbUNvdW50IiwiY3VycmVudFdpZHRoIiwidGVtcEVsZW1lbnQiLCJjbGFzc05hbWUiLCJ2aXNpYmlsaXR5IiwicG9zaXRpb24iLCJ3aGl0ZVNwYWNlIiwiYXBwZW5kQ2hpbGQiLCJpdGVtV2lkdGgiLCJyZW1vdmVDaGlsZCIsIm1heEl0ZXJhdGlvbnMiLCJjZWlsIiwiaXRlcmF0aW9ucyIsInRleHRFbGVtZW50IiwiY29udGVudFdpZHRoIiwiY2xvbmVkRWxlbWVudCIsImNsb25lTm9kZSIsInRyYW5zZm9ybSIsImNvbXB1dGVkU3R5bGUiLCJnZXRDb21wdXRl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Q0FBQzRVLFNBQVMsd0JBQWlCWixRQUFRLFFBQUs7UUFDM0QvSyxXQUFXLEdBQUc3RyxxQkFBcUIsQ0FBQ29PLE9BQU8sQ0FBQztNQUNoRDs7TUFFQTtNQUNBcE8scUJBQXFCLENBQUMsWUFBTTtRQUN4QjtRQUNBLElBQU15UyxhQUFhLEdBQUczVSxNQUFNLENBQUM0VSxnQkFBZ0IsQ0FBQzFCLFdBQVcsQ0FBQztRQUMxRCxJQUFNMkIsU0FBUyxHQUFHRixhQUFhLENBQUM1VSxPQUFPLEtBQUssTUFBTSxJQUNqQzRVLGFBQWEsQ0FBQ2QsVUFBVSxLQUFLLFFBQVE7UUFFdEQsSUFBSWdCLFNBQVMsSUFBSU4sWUFBWSxHQUFHLENBQUMsRUFBRTtVQUMvQmpFLE9BQU8sRUFBRTtRQUNiLENBQUMsTUFBTTtVQUNIO1VBQ0E7VUFDQUEsT0FBTyxFQUFFO1FBQ2I7TUFDSixDQUFDLENBQUM7SUFDTixDQUFDLENBQUM7RUFDTjtFQUVBaE4sZ0JBQWdCLEVBQUUsQ0FDYmpFLElBQUksQ0FBQ3NCLElBQUksQ0FBQyxFQUFDOztFQU1oQjtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7QUFHSixDQUFDLEdBQUciLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XG5cbiAgICBjb25zdCBhcGlVUkwgPSAnaHR0cHM6Ly9mYXYtcHJvbS5jb20vYXBpX2JsYWNrX3ByaXplJ1xuXG4gICAgY29uc3QgbWFpblBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhdi1wYWdlXCIpLFxuICAgICAgICBsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNwaW5uZXItb3ZlcmxheVwiKSxcbiAgICAgICAgcmVzdWx0c1RhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YWJsZVwiKSxcbiAgICAgICAgcmVzdWx0c1RhYmxlT3RoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RhYmxlT3RoZXJcIilcblxuICAgIGNvbnN0IGhyTGVuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNockxlbmcnKTtcbiAgICBjb25zdCBlbkxlbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW5MZW5nJyk7XG5cbiAgICBsZXQgbG9jYWxlID0gXCJlblwiXG4gICAgLy8gbGV0IGxvY2FsZSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJsb2NhbGVcIikgfHwgXCJoclwiXG5cbiAgICBpZiAoaHJMZW5nKSBsb2NhbGUgPSAnaHInO1xuICAgIGlmIChlbkxlbmcpIGxvY2FsZSA9ICdlbic7XG5cbiAgICBsZXQgZGVidWcgPSBmYWxzZVxuXG4gICAgaWYgKGRlYnVnKSBoaWRlTG9hZGVyKClcblxuICAgIGxldCBpMThuRGF0YSA9IHt9O1xuICAgIGNvbnN0IHRyYW5zbGF0ZVN0YXRlID0gZmFsc2U7XG4gICAgbGV0IHVzZXJJZCA9IG51bGw7XG4gICAgLy8gbGV0IHVzZXJJZCA9IE51bWJlcihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpKSA/PyBudWxsXG5cbiAgICBjb25zdCByZXF1ZXN0ID0gZnVuY3Rpb24gKGxpbmssIGV4dHJhT3B0aW9ucykge1xuICAgICAgICByZXR1cm4gZmV0Y2goYXBpVVJMICsgbGluaywge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC4uLihleHRyYU9wdGlvbnMgfHwge30pXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghcmVzLm9rKSB0aHJvdyBuZXcgRXJyb3IoJ0FQSSBlcnJvcicpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0FQSSByZXF1ZXN0IGZhaWxlZDonLCBlcnIpO1xuXG4gICAgICAgICAgICAgICAgcmVwb3J0RXJyb3IoZXJyKTtcblxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXYtcGFnZScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLnN0YXJ0c1dpdGgoXCJodHRwczovL3d3dy5mYXZiZXQuaHIvXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9wcm9tb2NpamUvcHJvbW9jaWphL3N0dWIvJztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvcHJvbW9zL3Byb21vL3N0dWIvJztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlkZUxvYWRlcigpe1xuICAgICAgICBsb2FkZXIuY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiXG4gICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5yZW1vdmUoXCJsb2FkaW5nXCIpXG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgbGV0IGF0dGVtcHRzID0gMDtcbiAgICAgICAgY29uc3QgbWF4QXR0ZW1wdHMgPSAyMDtcbiAgICAgICAgY29uc3QgYXR0ZW1wdEludGVydmFsID0gNTA7XG5cbiAgICAgICAgZnVuY3Rpb24gdHJ5RGV0ZWN0VXNlcklkKCkge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5zdG9yZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gd2luZG93LnN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgICAgICAgICAgdXNlcklkID0gc3RhdGUuYXV0aC5pc0F1dGhvcml6ZWQgJiYgc3RhdGUuYXV0aC5pZCB8fCAnJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAod2luZG93LmdfdXNlcl9pZCkge1xuICAgICAgICAgICAgICAgIHVzZXJJZCA9IHdpbmRvdy5nX3VzZXJfaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBxdWlja0NoZWNrQW5kUmVuZGVyKCkge1xuICAgICAgICAgICAgaW5pdEluZmluaXRlU2Nyb2xsKCk7XG4gICAgICAgICAgICBpbml0UHJvZ3Jlc3NCYXIoKTtcbiAgICAgICAgICAgIGluaXRQYXJ0aWNpcGF0ZUNhbnZhcygpO1xuICAgICAgICAgICAgaW5pdFNub3dmbGFrZXNDYW52YXMoKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoaGlkZUxvYWRlciwgMzAwKTtcblxuICAgICAgICAgICAgLy8gRml4IGRyb3Bkb3duIHNjcm9sbCBpc3N1ZSAtIHByZXZlbnQgcGFnZSBmcm9tIHNoaWZ0aW5nIHVwIHdoZW4gb3BlbmluZyBkcm9wZG93blxuICAgICAgICAgICAgY29uc3QgZHJvcGRvd25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRyb3Bkb3duJyk7XG4gICAgICAgICAgICBkcm9wZG93bnMuZm9yRWFjaCgoZHJvcGRvd24pID0+IHtcbiAgICAgICAgICAgICAgICBkcm9wZG93bi5hZGRFdmVudExpc3RlbmVyKCd0b2dnbGUnLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5vcGVuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBEcm9wZG93biBpcyBvcGVuaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdW1tYXJ5ID0gdGhpcy5xdWVyeVNlbGVjdG9yKCdzdW1tYXJ5Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3VtbWFyeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEdldCBzdW1tYXJ5IHBvc2l0aW9uIHJlbGF0aXZlIHRvIHZpZXdwb3J0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3VtbWFyeVJlY3QgPSBzdW1tYXJ5LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgc3VtbWFyeSBpcyBuZWFyIHRoZSB0b3Agb2Ygdmlld3BvcnQgKHdpdGhpbiAxMDBweCBmcm9tIHRvcClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3VtbWFyeVJlY3QudG9wIDwgMTAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENhbGN1bGF0ZSBob3cgbXVjaCB0byBzY3JvbGwgdG8ga2VlcCBzdW1tYXJ5IHZpc2libGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFNjcm9sbFkgPSB3aW5kb3cuc2Nyb2xsWSB8fCB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldFNjcm9sbFkgPSBjdXJyZW50U2Nyb2xsWSArIHN1bW1hcnlSZWN0LnRvcCAtIDEyMDsgLy8gMTIwcHggb2Zmc2V0IGZyb20gdG9wXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVXNlIHJlcXVlc3RBbmltYXRpb25GcmFtZSBmb3Igc21vb3RoIHNjcm9sbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IE1hdGgubWF4KDAsIHRhcmdldFNjcm9sbFkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgd2FpdEZvclVzZXJJZCA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0cnlEZXRlY3RVc2VySWQoKTtcbiAgICAgICAgICAgICAgICBpZiAodXNlcklkIHx8IGF0dGVtcHRzID49IG1heEF0dGVtcHRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHF1aWNrQ2hlY2tBbmRSZW5kZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXR0ZW1wdHMrKztcbiAgICAgICAgICAgIH0sIGF0dGVtcHRJbnRlcnZhbCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGF3YWl0IHdhaXRGb3JVc2VySWQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9hZFRyYW5zbGF0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVlc3QoYC9uZXctdHJhbnNsYXRlcy8ke2xvY2FsZX1gKVxuICAgICAgICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgICAgICAgaTE4bkRhdGEgPSBqc29uO1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnN0IG11dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAobXV0YXRpb25zKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIG11dGF0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgICAgIC8vICAgICB0cmFuc2xhdGUoKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKHRhcmdldE5vZGUsIHsgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgICAgICAgIC8vIG11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhhcmRjb3JlVGVubmlzXCIpLCB7XG4gICAgICAgICAgICAgICAgLy8gICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAvLyAgICAgc3VidHJlZTogdHJ1ZVxuICAgICAgICAgICAgICAgIC8vIH0pO1xuXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXBvcnRFcnJvcihlcnIpIHtcbiAgICAgICAgY29uc3QgcmVwb3J0RGF0YSA9IHtcbiAgICAgICAgICAgIG9yaWdpbjogd2luZG93LmxvY2F0aW9uLmhyZWYsXG4gICAgICAgICAgICB1c2VyaWQ6IHVzZXJJZCxcbiAgICAgICAgICAgIGVycm9yVGV4dDogZXJyPy5lcnJvciB8fCBlcnI/LnRleHQgfHwgZXJyPy5tZXNzYWdlIHx8ICdVbmtub3duIGVycm9yJyxcbiAgICAgICAgICAgIHR5cGU6IGVycj8ubmFtZSB8fCAnVW5rbm93bkVycm9yJyxcbiAgICAgICAgICAgIHN0YWNrOiBlcnI/LnN0YWNrIHx8ICcnXG4gICAgICAgIH07XG5cbiAgICAgICAgZmV0Y2goJ2h0dHBzOi8vZmF2LXByb20uY29tL2FwaS1jbXMvcmVwb3J0cy9hZGQnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVwb3J0RGF0YSlcbiAgICAgICAgfSkuY2F0Y2goY29uc29sZS53YXJuKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmFuc2xhdGUoKSB7XG4gICAgICAgIGNvbnN0IGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdHJhbnNsYXRlXScpXG4gICAgICAgIGlmIChlbGVtcyAmJiBlbGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmKHRyYW5zbGF0ZVN0YXRlKXtcbiAgICAgICAgICAgICAgICBlbGVtcy5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbS5pbm5lckhUTUwgPSBpMThuRGF0YVtrZXldIHx8ICcqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qICAga2V5OiAgJyArIGtleTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkxOG5EYXRhW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidHJhbnNsYXRpb24gd29ya3MhXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxvY2FsZSA9PT0gJ2VuJykge1xuICAgICAgICAgICAgbWFpblBhZ2UuY2xhc3NMaXN0LmFkZCgnZW4nKTtcbiAgICAgICAgfVxuICAgICAgICByZWZyZXNoTG9jYWxpemVkQ2xhc3MobWFpblBhZ2UpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlZnJlc2hMb2NhbGl6ZWRDbGFzcyhlbGVtZW50KSB7XG4gICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgbGFuZyBvZiBbJ2hyJywgJ2VuJ10pIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShsYW5nKTtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQobG9jYWxlKTtcbiAgICB9XG5cblxuXG5cbiAgICBmdW5jdGlvbiByZW5kZXJVc2Vycyh3ZWVrTnVtLCB1c2VyRGF0YSA9IFtdKSB7XG4gICAgICAgIHdlZWtOdW0gPSBOdW1iZXIod2Vla051bSk7XG4gICAgICAgIGNvbnN0IHdlZWtPYmogPSB1c2VyRGF0YS5maW5kKHcgPT4gdy53ZWVrID09PSB3ZWVrTnVtKTtcbiAgICAgICAgaWYgKCF3ZWVrT2JqIHx8ICF3ZWVrT2JqLmRhdGEgfHwgIUFycmF5LmlzQXJyYXkod2Vla09iai5kYXRhLnVzZXJzKSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcign0J3QtdCy0ZbRgNC90LAg0YHRgtGA0YPQutGC0YPRgNCwINC00LDQvdC40YUnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGlzU3RhZ2VFbmRlZCA9IHdlZWtPYmouZGF0YS5pc1N0YWdlRW5kZWRcblxuICAgICAgICB1c2VyRGF0YSA9IHdlZWtPYmouZGF0YS51c2VycztcblxuICAgICAgICBjb25zdCB3aW5uZXJBZGRpdGlvbmFsUHJpemUgPSB1c2VyRGF0YS5maW5kKHUgPT4ge1xuICAgICAgICAgICAgaWYodS53aW5uZXIgPT09IHRydWUpe1xuICAgICAgICAgICAgICAgIHJldHVybiB1XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgY29uc3QgY3VycmVudFVzZXIgPSB1c2VyRGF0YS5maW5kKHVzZXIgPT4gdXNlci51c2VyaWQgPT09IHVzZXJJZCk7XG5cbiAgICAgICAgaWYodXNlcklkICYmICFjdXJyZW50VXNlciAmJiBpc1ZlcmlmaWVkVXNlcil7XG4gICAgICAgICAgICB1c2VyRGF0YSA9IFsuLi51c2VyRGF0YSwge3VzZXJpZDogdXNlcklkLCBwb2ludHM6IDB9XVxuICAgICAgICB9XG4gICAgICAgIHBvcHVsYXRlVXNlcnNUYWJsZSh1c2VyRGF0YSwgdXNlcklkLCB3ZWVrTnVtLCBjdXJyZW50VXNlciwgaXNWZXJpZmllZFVzZXIsIGlzU3RhZ2VFbmRlZCwgd2lubmVyQWRkaXRpb25hbFByaXplKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwb3B1bGF0ZVVzZXJzVGFibGUodXNlcnMsIGN1cnJlbnRVc2VySWQsIHdlZWssIGN1cnJlbnRVc2VyLCBpc1ZlcmlmaWVkVXNlciwgaXNTdGFnZUVuZGVkLCB3aW5uZXJBZGRpdGlvbmFsUHJpemUpIHtcbiAgICAgICAgaWYgKCF1c2Vycz8ubGVuZ3RoKSByZXR1cm47XG4gICAgICAgIHJlc3VsdHNUYWJsZS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgcmVzdWx0c1RhYmxlT3RoZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHNlY29uZFRhYmxlT3RoZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHNlY29uZFRhYmxlLmlubmVySFRNTCA9ICcnO1xuXG5cbiAgICAgICAgY29uc3QgaXNUb3BDdXJyZW50VXNlciA9IGN1cnJlbnRVc2VyICYmIHVzZXJzLnNsaWNlKDAsIDEwKS5zb21lKHVzZXIgPT4gdXNlci51c2VyaWQgPT09IGN1cnJlbnRVc2VySWQpO1xuXG4gICAgICAgIGNvbnN0IHRvcFVzZXJzTGVuZ3RoID0gIXVzZXJJZCB8fCBpc1RvcEN1cnJlbnRVc2VyICA/IDEwIDogMTA7XG5cbiAgICAgICAgY29uc3QgdG9wVXNlcnMgPSB1c2Vycy5zbGljZSgwLCB0b3BVc2Vyc0xlbmd0aCk7XG5cbiAgICAgICAgdG9wVXNlcnMuZm9yRWFjaCh1c2VyID0+IHtcbiAgICAgICAgICAgIGRpc3BsYXlVc2VyKHVzZXIsIHVzZXIudXNlcmlkID09PSBjdXJyZW50VXNlcklkLCByZXN1bHRzVGFibGUsIHRvcFVzZXJzLCBpc1RvcEN1cnJlbnRVc2VyLCB3ZWVrKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmKGlzVmVyaWZpZWRVc2VyICYmICFjdXJyZW50VXNlcikge1xuICAgICAgICAgICAgZGlzcGxheVVzZXIoY3VycmVudFVzZXIsIHRydWUsIHJlc3VsdHNUYWJsZU90aGVyLCB1c2VycywgZmFsc2UsIHdlZWspO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFpc1RvcEN1cnJlbnRVc2VyICYmIGN1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgICBkaXNwbGF5VXNlcihjdXJyZW50VXNlciwgdHJ1ZSwgcmVzdWx0c1RhYmxlT3RoZXIsIHVzZXJzLCBmYWxzZSwgd2Vlayk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5VXNlcih1c2VyLCBpc0N1cnJlbnRVc2VyLCB0YWJsZSwgdXNlcnMsIGlzVG9wQ3VycmVudFVzZXIsIHdlZWspIHtcblxuICAgICAgICBjb25zdCByZW5kZXJSb3cgPSAodXNlckRhdGEsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBoaWdobGlnaHQgPSBmYWxzZSwgbmVpZ2hib3IgPSBmYWxzZSB9ID0gb3B0aW9ucztcbiAgICAgICAgICAgIGNvbnN0IHVzZXJSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZCgndGFibGVfX3JvdycpO1xuXG4gICAgICAgICAgICBjb25zdCB1c2VyUGxhY2UgPSB1c2Vycy5pbmRleE9mKHVzZXJEYXRhKSArIDE7XG4gICAgICAgICAgICBjb25zdCBwcml6ZUtleSA9IGRlYnVnID8gbnVsbCA6IGdldFByaXplVHJhbnNsYXRpb25LZXkodXNlclBsYWNlLCB3ZWVrKTtcblxuICAgICAgICAgICAgaWYgKHVzZXJQbGFjZSA8PSAzKSB7XG4gICAgICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKGBwbGFjZSR7dXNlclBsYWNlfWApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaGlnaGxpZ2h0IHx8IGlzQ3VycmVudFVzZXIgJiYgIW5laWdoYm9yKSB7XG4gICAgICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKCd5b3UnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmVpZ2hib3IpIHtcbiAgICAgICAgICAgICAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoJ19uZWlnaGJvcicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1c2VyUm93LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke3VzZXJQbGFjZSA8IDEwID8gJzAnICsgdXNlclBsYWNlIDogdXNlclBsYWNlfVxuICAgICAgICAgICAgICAgICR7aXNDdXJyZW50VXNlciAmJiAhbmVpZ2hib3IgPyAnPHNwYW4gY2xhc3M9XCJ5b3VcIj4nICsgdHJhbnNsYXRlS2V5KFwieW91XCIpICsgJzwvc3Bhbj4nIDogJyd9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke2lzQ3VycmVudFVzZXIgJiYgIW5laWdoYm9yID8gdXNlckRhdGEudXNlcmlkIDogbWFza1VzZXJJZCh1c2VyRGF0YS51c2VyaWQpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHtOdW1iZXIodXNlckRhdGEucG9pbnRzKS50b0ZpeGVkKDIpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHtwcml6ZUtleSA/IHRyYW5zbGF0ZUtleShwcml6ZUtleSkgOiAnIC0gJ31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuXG4gICAgICAgICAgICB0YWJsZS5hcHBlbmQodXNlclJvdyk7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChpc0N1cnJlbnRVc2VyICYmICFpc1RvcEN1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHVzZXJzLmluZGV4T2YodXNlcik7XG4gICAgICAgICAgICBpZiAodXNlcnNbaW5kZXggLSAxXSkge1xuICAgICAgICAgICAgICAgIHJlbmRlclJvdyh1c2Vyc1tpbmRleCAtIDFdLCB7IG5laWdoYm9yOiB0cnVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVuZGVyUm93KHVzZXIsIHsgaGlnaGxpZ2h0OiB0cnVlIH0pO1xuICAgICAgICAgICAgaWYgKHVzZXJzW2luZGV4ICsgMV0pIHtcbiAgICAgICAgICAgICAgICByZW5kZXJSb3codXNlcnNbaW5kZXggKyAxXSwgeyBuZWlnaGJvcjogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlbmRlclJvdyh1c2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluaXRQcm9ncmVzc0JhcigpIHtcbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2dyZXNzQmFyQ2FudmFzJyk7XG4gICAgICAgIGNvbnN0IHBlcmNlbnRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2dyZXNzUGVyY2VudCcpO1xuICAgICAgICBpZiAoIWNhbnZhcyB8fCAhcGVyY2VudEVsZW1lbnQpIHJldHVybjtcblxuICAgICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgXG4gICAgICAgIC8vINCa0L7QvdGB0YLQsNC90YLQuFxuICAgICAgICBjb25zdCBiYXJIZWlnaHQgPSAyMDsgLy8g0JLQuNGB0L7RgtCwINC/0YDQvtCz0YDQtdGBLdCx0LDRgNGDXG4gICAgICAgIGNvbnN0IHNlZ21lbnRXaWR0aCA9IDQ7IC8vINCo0LjRgNC40L3QsCDQvtC00L3QvtCz0L4g0YHQtdCz0LzQtdC90YLQsFxuICAgICAgICBjb25zdCBzZWdtZW50SGVpZ2h0ID0gMTQ7IC8vINCS0LjRgdC+0YLQsCDQvtC00L3QvtCz0L4g0YHQtdCz0LzQtdC90YLQsFxuICAgICAgICBjb25zdCBzZWdtZW50R2FwID0gMjsgLy8g0J/RgNC+0LzRltC20L7QuiDQvNGW0LYg0YHQtdCz0LzQtdC90YLQsNC80LhcbiAgICAgICAgY29uc3QgcGFkZGluZyA9IDI7IC8vINCS0ZbQtNGB0YLRg9C/INCy0ZbQtCDQutGA0LDRl9CyXG4gICAgICAgIGNvbnN0IHNlZ21lbnRSYWRpdXMgPSAxOyAvLyBCb3JkZXIgcmFkaXVzINC00LvRjyDRgdC10LPQvNC10L3RgtGW0LJcbiAgICAgICAgXG4gICAgICAgIC8vINCf0LDRgNCw0LzQtdGC0YDQuCDQsNC90ZbQvNCw0YbRltGXXG4gICAgICAgIGxldCBjdXJyZW50UHJvZ3Jlc3MgPSAwOyAvLyDQn9C+0YLQvtGH0L3QuNC5INC/0YDQvtCz0YDQtdGBICgwLTEwMClcbiAgICAgICAgY29uc3QgdGFyZ2V0UHJvZ3Jlc3MgPSAxMDA7IC8vINCm0ZbQu9GM0L7QstC40Lkg0L/RgNC+0LPRgNC10YFcbiAgICAgICAgY29uc3QgYW5pbWF0aW9uRHVyYXRpb24gPSA2MDAwMDsgLy8g0KLRgNC40LLQsNC70ZbRgdGC0Ywg0LDQvdGW0LzQsNGG0ZbRlyDQsiDQvNGW0LvRltGB0LXQutGD0L3QtNCw0YVcbiAgICAgICAgbGV0IHN0YXJ0VGltZSA9IERhdGUubm93KCk7XG4gICAgICAgIGxldCBhbmltYXRpb25JZCA9IG51bGw7XG4gICAgICAgIGxldCBtYXhTZWdtZW50cyA9IDA7XG4gICAgICAgIFxuICAgICAgICBmdW5jdGlvbiByZXNpemVDYW52YXMoKSB7XG4gICAgICAgICAgICAvLyDQntGC0YDQuNC80YPRlNC80L4g0YDQvtC30LzRltGA0Lgg0LrQvtC90YLQtdC50L3QtdGA0LBcbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGNhbnZhcy5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgY29uc3QgY29udGFpbmVyV2lkdGggPSBjb250YWluZXIub2Zmc2V0V2lkdGggfHwgNzY4O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQktGB0YLQsNC90L7QstC70Y7RlNC80L4g0YDQvtC30LzRltGA0LggY2FudmFzXG4gICAgICAgICAgICBjYW52YXMud2lkdGggPSBjb250YWluZXJXaWR0aDtcbiAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSBiYXJIZWlnaHQ7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCg0L7Qt9GA0LDRhdC+0LLRg9GU0LzQviDQutGW0LvRjNC60ZbRgdGC0Ywg0YHQtdCz0LzQtdC90YLRltCyLCDRidC+INC/0L7QvNGW0YHRgtGP0YLRjNGB0Y9cbiAgICAgICAgICAgIGNvbnN0IGF2YWlsYWJsZVdpZHRoID0gY29udGFpbmVyV2lkdGggLSAocGFkZGluZyAqIDIpO1xuICAgICAgICAgICAgY29uc3Qgc2VnbWVudFdpdGhHYXAgPSBzZWdtZW50V2lkdGggKyBzZWdtZW50R2FwO1xuICAgICAgICAgICAgbWF4U2VnbWVudHMgPSBNYXRoLmZsb29yKGF2YWlsYWJsZVdpZHRoIC8gc2VnbWVudFdpdGhHYXApO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQn9C10YDQtdC80LDQu9GM0L7QstGD0ZTQvNC+INC3INC/0L7RgtC+0YfQvdC40Lwg0L/RgNC+0LPRgNC10YHQvtC8XG4gICAgICAgICAgICBpZiAoY3VycmVudFByb2dyZXNzID4gMCkge1xuICAgICAgICAgICAgICAgIGRyYXdQcm9ncmVzc0JhcihjdXJyZW50UHJvZ3Jlc3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBmdW5jdGlvbiBkcmF3UHJvZ3Jlc3NCYXIocHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgIC8vINCe0YfQuNGJ0LDRlNC80L4gY2FudmFzXG4gICAgICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCc0LDQu9GO0ZTQvNC+INGA0LDQvNC60YMgKNCx0ZbQu9C40Lkg0L/RgNGP0LzQvtC60YPRgtC90LjQuilcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICcjRkZGRkZGJztcbiAgICAgICAgICAgIGN0eC5saW5lV2lkdGggPSAxO1xuICAgICAgICAgICAgY3R4LnN0cm9rZVJlY3QoMC41LCAwLjUsIGNhbnZhcy53aWR0aCAtIDEsIGNhbnZhcy5oZWlnaHQgLSAxKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0KDQvtC30YDQsNGF0L7QstGD0ZTQvNC+INC60ZbQu9GM0LrRltGB0YLRjCDQt9Cw0L/QvtCy0L3QtdC90LjRhSDRgdC10LPQvNC10L3RgtGW0LJcbiAgICAgICAgICAgIGNvbnN0IGZpbGxlZFNlZ21lbnRzID0gTWF0aC5mbG9vcigocHJvZ3Jlc3MgLyAxMDApICogbWF4U2VnbWVudHMpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQnNCw0LvRjtGU0LzQviDQt9Cw0L/QvtCy0L3QtdC90ZYg0YHQtdCz0LzQtdC90YLQuCDQtyDQt9Cw0L7QutGA0YPQs9C70LXQvdC40LzQuCDQutGD0YLQsNC80LhcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSAnI0ZGRkZGRic7XG4gICAgICAgICAgICBjb25zdCBjZW50ZXJZID0gKGJhckhlaWdodCAtIHNlZ21lbnRIZWlnaHQpIC8gMjsgLy8g0JLQtdGA0YLQuNC60LDQu9GM0L3QtSDRhtC10L3RgtGA0YPQstCw0L3QvdGPXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsbGVkU2VnbWVudHM7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHggPSBwYWRkaW5nICsgaSAqIChzZWdtZW50V2lkdGggKyBzZWdtZW50R2FwKTtcbiAgICAgICAgICAgICAgICBjb25zdCB5ID0gY2VudGVyWTtcblxuICAgICAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICBpZiAoY3R4LnJvdW5kUmVjdCkge1xuICAgICAgICAgICAgICAgICAgICAvLyDQodGD0YfQsNGB0L3QuNC5INC80LXRgtC+0LQgKNC/0ZbQtNGC0YDQuNC80YPRlNGC0YzRgdGPINCyINC90L7QstC40YUg0LHRgNCw0YPQt9C10YDQsNGFKVxuICAgICAgICAgICAgICAgICAgICBjdHgucm91bmRSZWN0KHgsIHksIHNlZ21lbnRXaWR0aCwgc2VnbWVudEhlaWdodCwgc2VnbWVudFJhZGl1cyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gRmFsbGJhY2sg0LTQu9GPINGB0YLQsNGA0LjRhSDQsdGA0LDRg9C30LXRgNGW0LJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgciA9IHNlZ21lbnRSYWRpdXM7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5tb3ZlVG8oeCArIHIsIHkpO1xuICAgICAgICAgICAgICAgICAgICBjdHgubGluZVRvKHggKyBzZWdtZW50V2lkdGggLSByLCB5KTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCArIHNlZ21lbnRXaWR0aCwgeSwgeCArIHNlZ21lbnRXaWR0aCwgeSArIHIpO1xuICAgICAgICAgICAgICAgICAgICBjdHgubGluZVRvKHggKyBzZWdtZW50V2lkdGgsIHkgKyBzZWdtZW50SGVpZ2h0IC0gcik7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHggKyBzZWdtZW50V2lkdGgsIHkgKyBzZWdtZW50SGVpZ2h0LCB4ICsgc2VnbWVudFdpZHRoIC0gciwgeSArIHNlZ21lbnRIZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICBjdHgubGluZVRvKHggKyByLCB5ICsgc2VnbWVudEhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHgsIHkgKyBzZWdtZW50SGVpZ2h0LCB4LCB5ICsgc2VnbWVudEhlaWdodCAtIHIpO1xuICAgICAgICAgICAgICAgICAgICBjdHgubGluZVRvKHgsIHkgKyByKTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCwgeSwgeCArIHIsIHkpO1xuICAgICAgICAgICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZVByb2dyZXNzKCkge1xuICAgICAgICAgICAgY29uc3QgZWxhcHNlZCA9IERhdGUubm93KCkgLSBzdGFydFRpbWU7XG4gICAgICAgICAgICBsZXQgcHJvZ3Jlc3MgPSAoZWxhcHNlZCAvIGFuaW1hdGlvbkR1cmF0aW9uKSAqIDEwMDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0JfQsNGG0LjQutC70LXQvdC90Y86INGP0LrRidC+INC00L7RgdGP0LPQu9C4IDEwMCUsINC/0L7Rh9C40L3QsNGU0LzQviDQt9C90L7QstGDINC3IDAlXG4gICAgICAgICAgICBpZiAocHJvZ3Jlc3MgPj0gdGFyZ2V0UHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgICAgICBwcm9ncmVzcyA9IDA7XG4gICAgICAgICAgICAgICAgc3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY3VycmVudFByb2dyZXNzID0gcHJvZ3Jlc3M7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCe0L3QvtCy0LvRjtGU0LzQviDQstGW0LTQvtCx0YDQsNC20LXQvdC90Y9cbiAgICAgICAgICAgIGRyYXdQcm9ncmVzc0Jhcihwcm9ncmVzcyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCe0L3QvtCy0LvRjtGU0LzQviDQstGW0LTRgdC+0YLQutC4ICjRgtGW0LvRjNC60Lgg0YbRltC70ZYg0YfQuNGB0LvQsClcbiAgICAgICAgICAgIGNvbnN0IHBlcmNlbnQgPSBNYXRoLmZsb29yKHByb2dyZXNzKTtcbiAgICAgICAgICAgIHBlcmNlbnRFbGVtZW50LnRleHRDb250ZW50ID0gcGVyY2VudCArICclJztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0J/RgNC+0LTQvtCy0LbRg9GU0LzQviDQsNC90ZbQvNCw0YbRltGOINCx0LXQt9C60ZbQvdC10YfQvdC+XG4gICAgICAgICAgICBhbmltYXRpb25JZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGVQcm9ncmVzcyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vINCG0L3RltGG0ZbQsNC70ZbQt9GD0ZTQvNC+INGA0L7Qt9C80ZbRgNC4IGNhbnZhc1xuICAgICAgICByZXNpemVDYW52YXMoKTtcbiAgICAgICAgXG4gICAgICAgIC8vINCe0LHRgNC+0LHQutCwINC30LzRltC90Lgg0YDQvtC30LzRltGA0YMg0LLRltC60L3QsFxuICAgICAgICBsZXQgcmVzaXplVGltZW91dDtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChyZXNpemVUaW1lb3V0KTtcbiAgICAgICAgICAgIHJlc2l6ZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICByZXNpemVDYW52YXMoKTtcbiAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgLy8g0JfQsNC/0YPRgdC60LDRlNC80L4g0LDQvdGW0LzQsNGG0ZbRjiDQtyDQvdC10LLQtdC70LjQutC+0Y4g0LfQsNGC0YDQuNC80LrQvtGOINC00LvRjyDQutC+0YDQtdC60YLQvdC+0LPQviDRgNC+0LfRgNCw0YXRg9C90LrRgyDRgNC+0LfQvNGW0YDRltCyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc2l6ZUNhbnZhcygpO1xuICAgICAgICAgICAgICAgIHN0YXJ0VGltZSA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgdXBkYXRlUHJvZ3Jlc3MoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIC8vINCX0YPQv9C40L3Rj9GU0LzQviDQsNC90ZbQvNCw0YbRltGOINC/0YDQuCDQstC40YXQvtC00ZYg0Lcgdmlld3BvcnRcbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICAgICAgICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghYW5pbWF0aW9uSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vINCS0ZbQtNC90L7QstC70Y7RlNC80L4g0LDQvdGW0LzQsNGG0ZbRjiDQtyDQv9C+0YLQvtGH0L3QvtCz0L4g0L/RgNC+0LPRgNC10YHRg1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRUaW1lID0gRGF0ZS5ub3coKSAtIChjdXJyZW50UHJvZ3Jlc3MgLyAxMDApICogYW5pbWF0aW9uRHVyYXRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVQcm9ncmVzcygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFuaW1hdGlvbklkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShhbmltYXRpb25JZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25JZCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGNhbnZhcyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdFBhcnRpY2lwYXRlQ2FudmFzKCkge1xuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGFydGljaXBhdGVDYW52YXMnKTtcbiAgICAgICAgaWYgKCFjYW52YXMpIHJldHVybjtcblxuICAgICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgY2FudmFzLndpZHRoID0gMTM2NjtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IDUwMDtcblxuICAgICAgICAvLyDQmtC+0L3RgdGC0LDQvdGC0Lgg0LTQu9GPINGA0L7Qt9C80ZbRgNGW0LIg0YLQsCDQv9C+0LfQuNGG0ZbQuVxuICAgICAgICBjb25zdCBDQU5WQVNfV0lEVEggPSAxMzY2O1xuICAgICAgICBjb25zdCBDQU5WQVNfSEVJR0hUID0gNTAwO1xuICAgICAgICBjb25zdCBUUkVFX1dJRFRIID0gMTc1O1xuICAgICAgICBjb25zdCBUUkVFX0hFSUdIVCA9IDE2NztcbiAgICAgICAgXG4gICAgICAgIC8vINCf0LDRgNCw0LzQtdGC0YDQuCDRgdC/0YDQsNC50YIt0LvQuNGB0YLQsFxuICAgICAgICBjb25zdCBGUkFNRVNfUEVSX1JPVyA9IDU7IC8vIDUg0LrQsNC00YDRltCyINCyINGA0Y/QtNC60YNcbiAgICAgICAgY29uc3QgVE9UQUxfUk9XUyA9IDI7IC8vIDIg0YDRj9C00LhcbiAgICAgICAgY29uc3QgU1BSSVRFX1NIRUVUX1dJRFRIID0gMTEwMDsgLy8g0KDQtdCw0LvRjNC90LAg0YjQuNGA0LjQvdCwINGB0L/RgNCw0LnRgi3Qu9C40YHRgtCwXG4gICAgICAgIGNvbnN0IFNQUklURV9TSEVFVF9IRUlHSFQgPSA0Njg7IC8vINCg0LXQsNC70YzQvdCwINCy0LjRgdC+0YLQsCDRgdC/0YDQsNC50YIt0LvQuNGB0YLQsFxuICAgICAgICBcbiAgICAgICAgLy8g0KDQvtC30LzRltGA0Lgg0L7QtNC90L7Qs9C+INC60LDQtNGA0YMg0LIg0YHQv9GA0LDQudGCLdC70LjRgdGC0ZZcbiAgICAgICAgY29uc3QgRlJBTUVfV0lEVEggPSBNYXRoLmZsb29yKFNQUklURV9TSEVFVF9XSURUSCAvIEZSQU1FU19QRVJfUk9XKTsgLy8gMjIwcHhcbiAgICAgICAgY29uc3QgRlJBTUVfSEVJR0hUID0gTWF0aC5mbG9vcihTUFJJVEVfU0hFRVRfSEVJR0hUIC8gVE9UQUxfUk9XUyk7IC8vIDIzNHB4XG4gICAgICAgIFxuICAgICAgICAvLyDQoNC+0LfQvNGW0YDQuCDQvtC70LXQvdGPINC90LAgY2FudmFzICjQvNC+0LbQvdCwINC80LDRgdGI0YLQsNCx0YPQstCw0YLQuClcbiAgICAgICAgY29uc3QgREVFUl9TQ0FMRSA9IDAuNTsgLy8g0JzQsNGB0YjRgtCw0LEg0LTQu9GPINCy0ZbQtNC+0LHRgNCw0LbQtdC90L3RjyDQvdCwIGNhbnZhc1xuICAgICAgICBjb25zdCBERUVSX1dJRFRIID0gTWF0aC5mbG9vcihGUkFNRV9XSURUSCAqIERFRVJfU0NBTEUpOyAvLyB+MTEwcHhcbiAgICAgICAgY29uc3QgREVFUl9IRUlHSFQgPSBNYXRoLmZsb29yKEZSQU1FX0hFSUdIVCAqIERFRVJfU0NBTEUpOyAvLyAxMTdweFxuXG4gICAgICAgIC8vINCf0L7Qt9C40YbRltGXINC10LvQtdC80LXQvdGC0ZbQslxuICAgICAgICBjb25zdCB0cmVlWCA9IENBTlZBU19XSURUSCAvIDIgLSAzMDA7IC8vINCi0YDQvtGF0Lgg0LvRltCy0ZbRiNC1INCy0ZbQtCDRhtC10L3RgtGA0YNcbiAgICAgICAgY29uc3QgdHJlZVkgPSBDQU5WQVNfSEVJR0hUIC8gMiAtIFRSRUVfSEVJR0hUIC8gMjtcbiAgICAgICAgXG4gICAgICAgIC8vINCf0LDRgNCw0LzQtdGC0YDQuCDQsNC90ZbQvNCw0YbRltGXICjRgdC/0ZbQu9GM0L3RliDQtNC70Y8g0LLRgdGW0YUg0L7Qu9C10L3RltCyKVxuICAgICAgICBjb25zdCBGUkFNRV9ERUxBWSA9IDEyOyAvLyDQl9Cw0YLRgNC40LzQutCwINC80ZbQtiDQutCw0LTRgNCw0LzQuFxuICAgICAgICBjb25zdCBXQUxLSU5HX0ZSQU1FUyA9IDU7IC8vINCa0ZbQu9GM0LrRltGB0YLRjCDQutCw0LTRgNGW0LIg0LTQu9GPINGF0L7QtNGM0LHQuFxuICAgICAgICBjb25zdCBGUkFNRV9SRVBFQVQgPSAyOyAvLyDQmtGW0LvRjNC60ZbRgdGC0Ywg0YDQsNC30ZbQsiDQv9C+0LrQsNC30YPQstCw0YLQuCDQutC+0LbQtdC9INC60LDQtNGAXG4gICAgICAgIGNvbnN0IElETEVfTUlOX0RVUkFUSU9OID0gNjA7IC8vINCc0ZbQvdGW0LzQsNC70YzQvdCwINGC0YDQuNCy0LDQu9GW0YHRgtGMINC30YPQv9C40L3QutC4ICgxINGB0LXQutGD0L3QtNCwINC/0YDQuCA2MGZwcylcbiAgICAgICAgY29uc3QgSURMRV9NQVhfRFVSQVRJT04gPSAxODA7IC8vINCc0LDQutGB0LjQvNCw0LvRjNC90LAg0YLRgNC40LLQsNC70ZbRgdGC0Ywg0LfRg9C/0LjQvdC60LggKDMg0YHQtdC60YPQvdC00Lgg0L/RgNC4IDYwZnBzKVxuXG4gICAgICAgIC8vINCh0YLQsNC90Lgg0LDQvdGW0LzQsNGG0ZbRlyDQvtC70LXQvdGPXG4gICAgICAgIGNvbnN0IERFRVJfU1RBVEUgPSB7XG4gICAgICAgICAgICBXQUxLSU5HOiAnd2Fsa2luZycsXG4gICAgICAgICAgICBJRExFOiAnaWRsZSdcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIGxldCBhbmltYXRpb25JZCA9IG51bGw7XG4gICAgICAgIGxldCBmcmFtZUNvdW50ZXIgPSAwOyAvLyDQk9C70L7QsdCw0LvRjNC90LjQuSDQu9GW0YfQuNC70YzQvdC40Log0LrQsNC00YDRltCyINC00LvRjyDRgdC40L3RhdGA0L7QvdGW0LfQsNGG0ZbRl1xuXG4gICAgICAgIC8vINCa0LvQsNGBINC00LvRjyDQv9GA0LXQtNGB0YLQsNCy0LvQtdC90L3RjyDQvtC00L3QvtCz0L4g0L7Qu9C10L3Rj1xuICAgICAgICBjbGFzcyBEZWVyIHtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yKHN0YXJ0WCwgc3RhcnRZLCBtaW5YLCBtYXhYLCBzcGVlZCA9IDAuNSwgekluZGV4ID0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMueCA9IHN0YXJ0WDtcbiAgICAgICAgICAgICAgICB0aGlzLnkgPSBzdGFydFk7XG4gICAgICAgICAgICAgICAgdGhpcy5taW5YID0gbWluWDtcbiAgICAgICAgICAgICAgICB0aGlzLm1heFggPSBtYXhYO1xuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWQgPSBzcGVlZDtcbiAgICAgICAgICAgICAgICB0aGlzLnpJbmRleCA9IHpJbmRleDsgLy8g0J/QvtGA0Y/QtNC+0Log0LzQsNC70Y7QstCw0L3QvdGPICjQvNC10L3RiNC1ID0g0LfQt9Cw0LTRgywg0LHRltC70YzRiNC1ID0g0YHQv9C10YDQtdC00YMpXG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAtMTsgLy8gLTEgPSDQstC70ZbQstC+LCAxID0g0LLQv9GA0LDQstC+XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IERFRVJfU1RBVEUuV0FMS0lORztcbiAgICAgICAgICAgICAgICB0aGlzLmZyYW1lSW5kZXggPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuZnJhbWVSZXBlYXRDb3VudGVyID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLmlkbGVUaW1lciA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5pZGxlRHVyYXRpb24gPSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBnZXRTcHJpdGVGcmFtZUluZGV4KCkge1xuICAgICAgICAgICAgICAgIC8vINCS0LXRgNGF0L3RltC5INGA0Y/QtNC+0LogKDApID0g0YDRg9GFINCy0LvRltCy0L4sINC90LjQttC90ZbQuSDRgNGP0LTQvtC6ICgxKSA9INGA0YPRhSDQstC/0YDQsNCy0L5cbiAgICAgICAgICAgICAgICBjb25zdCByb3cgPSB0aGlzLmRpcmVjdGlvbiA9PT0gLTEgPyAwIDogMTtcbiAgICAgICAgICAgICAgICBsZXQgY29sID0gMDtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlID09PSBERUVSX1NUQVRFLldBTEtJTkcpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g0JrQsNC00YDQuCDRhdC+0LTRjNCx0Lg6IDAsIDEsIDIsIDMsIDQgKNCy0YHRliA1INC60LDQtNGA0ZbQsilcbiAgICAgICAgICAgICAgICAgICAgY29sID0gdGhpcy5mcmFtZUluZGV4ICUgV0FMS0lOR19GUkFNRVM7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g0KHRgtCw0L0g0LfRg9C/0LjQvdC60LggKElETEUpIC0g0LLQuNC60L7RgNC40YHRgtC+0LLRg9GU0LzQviDQutCw0LTRgCAwXG4gICAgICAgICAgICAgICAgICAgIGNvbCA9IDA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgcm93LCBjb2wgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdXBkYXRlKHNob3VsZFVwZGF0ZUZyYW1lKSB7XG4gICAgICAgICAgICAgICAgLy8g0J7QvdC+0LLQu9GO0ZTQvNC+INCw0L3RltC80LDRhtGW0Y4g0LrQsNC00YDRltCyINC3INC/0L7QstGC0L7RgNC10L3QvdGP0Lwg0LTQu9GPINC/0LvQsNCy0L3QvtGB0YLRllxuICAgICAgICAgICAgICAgIGlmIChzaG91bGRVcGRhdGVGcmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gREVFUl9TVEFURS5XQUxLSU5HKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZyYW1lUmVwZWF0Q291bnRlcisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g0J/QvtC60LDQt9GD0ZTQvNC+INC60L7QttC10L0g0LrQsNC00YAg0LrRltC70YzQutCwINGA0LDQt9GW0LIg0LTQu9GPINC/0LvQsNCy0L3RltGI0L7RlyDQsNC90ZbQvNCw0YbRltGXXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5mcmFtZVJlcGVhdENvdW50ZXIgPj0gRlJBTUVfUkVQRUFUKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mcmFtZVJlcGVhdENvdW50ZXIgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vINCf0L7RgdC70ZbQtNC+0LLQvdC+INC/0YDQvtGF0L7QtNC40LzQviDRh9C10YDQtdC3INCy0YHRliDQutCw0LTRgNC4OiAwLCAxLCAyLCAzLCA0LCAwLCAxLCAyLCAzLCA0Li4uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mcmFtZUluZGV4ID0gKHRoaXMuZnJhbWVJbmRleCArIDEpICUgV0FMS0lOR19GUkFNRVM7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyDQm9C+0LPRltC60LAg0YHRgtCw0L3RltCyINGC0LAg0YDRg9GF0YNcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gREVFUl9TVEFURS5XQUxLSU5HKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vINCe0L3QvtCy0LvRjtGU0LzQviDQv9C+0LfQuNGG0ZbRjiDQvtC70LXQvdGPXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueCArPSB0aGlzLnNwZWVkICogdGhpcy5kaXJlY3Rpb247XG5cbiAgICAgICAgICAgICAgICAgICAgLy8g0J/QtdGA0LXQstGW0YDRj9GU0LzQviDQvNC10LbRliDRgtCwINC/0LXRgNC10YXQvtC00LjQvNC+INC00L4g0LfRg9C/0LjQvdC60LhcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMueCA+PSB0aGlzLm1heFggJiYgdGhpcy5kaXJlY3Rpb24gPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vINCU0L7RgdGP0LPQu9C4INC/0YDQsNCy0L7Qs9C+INC60YDQsNGOIC0g0LfRg9C/0LjQvdGP0ZTQvNC+0YHRj1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy54ID0gdGhpcy5tYXhYO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IERFRVJfU1RBVEUuSURMRTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaWRsZVRpbWVyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vINCT0LXQvdC10YDRg9GU0LzQviDQstC40L/QsNC00LrQvtCy0YMg0YLRgNC40LLQsNC70ZbRgdGC0Ywg0LfRg9C/0LjQvdC60Lgg0LLRltC0IDEg0LTQviAzINGB0LXQutGD0L3QtFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pZGxlRHVyYXRpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoSURMRV9NQVhfRFVSQVRJT04gLSBJRExFX01JTl9EVVJBVElPTiArIDEpKSArIElETEVfTUlOX0RVUkFUSU9OO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMueCA8PSB0aGlzLm1pblggJiYgdGhpcy5kaXJlY3Rpb24gPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDQlNC+0YHRj9Cz0LvQuCDQu9GW0LLQvtCz0L4g0LrRgNCw0Y4gLSDQt9GD0L/QuNC90Y/RlNC80L7RgdGPXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnggPSB0aGlzLm1pblg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0gREVFUl9TVEFURS5JRExFO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pZGxlVGltZXIgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g0JPQtdC90LXRgNGD0ZTQvNC+INCy0LjQv9Cw0LTQutC+0LLRgyDRgtGA0LjQstCw0LvRltGB0YLRjCDQt9GD0L/QuNC90LrQuCDQstGW0LQgMSDQtNC+IDMg0YHQtdC60YPQvdC0XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlkbGVEdXJhdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChJRExFX01BWF9EVVJBVElPTiAtIElETEVfTUlOX0RVUkFUSU9OICsgMSkpICsgSURMRV9NSU5fRFVSQVRJT047XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT09IERFRVJfU1RBVEUuSURMRSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlkbGVUaW1lcisrO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8g0J/RltGB0LvRjyDQt9Cw0LLQtdGA0YjQtdC90L3RjyDQt9GD0L/QuNC90LrQuCDQt9C80ZbQvdGO0ZTQvNC+INC90LDQv9GA0Y/QvNC+0Log0YLQsCDQv9C10YDQtdGF0L7QtNC40LzQviDQtNC+INGF0L7QtNGM0LHQuFxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pZGxlVGltZXIgPj0gdGhpcy5pZGxlRHVyYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uICo9IC0xOyAvLyDQl9C80ZbQvdGO0ZTQvNC+INC90LDQv9GA0Y/QvNC+0LogKNCy0LvRltCy0L4g4oaUINCy0L/RgNCw0LLQvilcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBERUVSX1NUQVRFLldBTEtJTkc7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZyYW1lSW5kZXggPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mcmFtZVJlcGVhdENvdW50ZXIgPSAwOyAvLyDQodC60LjQtNCw0ZTQvNC+INC70ZbRh9C40LvRjNC90LjQuiDQv9C+0LLRgtC+0YDQtdC90YxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZHJhdyhjdHgsIHNwcml0ZUltYWdlLCBmcmFtZVdpZHRoLCBmcmFtZUhlaWdodCwgZGVlcldpZHRoLCBkZWVySGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFzcHJpdGVJbWFnZS5jb21wbGV0ZSB8fCBmcmFtZVdpZHRoIDw9IDAgfHwgZnJhbWVIZWlnaHQgPD0gMCkgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgeyByb3csIGNvbCB9ID0gdGhpcy5nZXRTcHJpdGVGcmFtZUluZGV4KCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8g0JrQvtC+0YDQtNC40L3QsNGC0Lgg0LrQsNC00YDRgyDQsiDRgdC/0YDQsNC50YIt0LvQuNGB0YLRllxuICAgICAgICAgICAgICAgIGNvbnN0IHNvdXJjZVggPSBjb2wgKiBmcmFtZVdpZHRoO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNvdXJjZVkgPSByb3cgKiBmcmFtZUhlaWdodDtcblxuICAgICAgICAgICAgICAgIC8vINCS0LjRgNGW0LfQsNGU0LzQviDQutCw0LTRgCDQt9GWINGB0L/RgNCw0LnRgi3Qu9C40YHRgtCwINGC0LAg0LzQsNC70Y7RlNC80L4g0L3QsCBjYW52YXNcbiAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgICAgICAgICBzcHJpdGVJbWFnZSxcbiAgICAgICAgICAgICAgICAgICAgc291cmNlWCwgc291cmNlWSwgZnJhbWVXaWR0aCwgZnJhbWVIZWlnaHQsIC8vINCU0LbQtdGA0LXQu9C+ICjRgdC/0YDQsNC50YIt0LvQuNGB0YIpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueCwgdGhpcy55LCBkZWVyV2lkdGgsIGRlZXJIZWlnaHQgLy8g0J/RgNC40LfQvdCw0YfQtdC90L3RjyAoY2FudmFzKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyDQnNCw0YHQuNCyINC+0LvQtdC90ZbQsiAo0LzQvtC20L3QsCDQtNC+0LTQsNGC0Lgg0LHRltC70YzRiNC1KVxuICAgICAgICBjb25zdCBkZWVycyA9IFtdO1xuICAgICAgICBcbiAgICAgICAgLy8g0JrQvtC90YTRltCz0YPRgNCw0YbRltGPINC00LvRjyDRgdGC0LLQvtGA0LXQvdC90Y8g0L7Qu9C10L3RltCyXG4gICAgICAgIGNvbnN0IERFRVJfQ09VTlQgPSAzOyAvLyDQmtGW0LvRjNC60ZbRgdGC0Ywg0L7Qu9C10L3RltCyXG4gICAgICAgIGNvbnN0IGRlZXJDb25maWdzID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXJ0WDogQ0FOVkFTX1dJRFRIIC8gMiArIDUwLFxuICAgICAgICAgICAgICAgIHN0YXJ0WTogdHJlZVkgKyBUUkVFX0hFSUdIVCAtIDIwLCAvLyDQn9GW0LQg0Y/Qu9C40L3QutC+0Y4gKHRyZWVZICsg0LLQuNGB0L7RgtCwINGP0LvQuNC90LrQuCAtINCy0ZbQtNGB0YLRg9C/KVxuICAgICAgICAgICAgICAgIG1pblg6IENBTlZBU19XSURUSCAvIDIgLSAyMDAsXG4gICAgICAgICAgICAgICAgbWF4WDogQ0FOVkFTX1dJRFRIIC8gMiArIDMwMCxcbiAgICAgICAgICAgICAgICBzcGVlZDogMC41LFxuICAgICAgICAgICAgICAgIHpJbmRleDogMyAvLyDQnNCw0LvRjtGU0YLRjNGB0Y8g0L/QtdGA0LXQtCDRj9C70LjQvdC60L7RjiAo0L/RltC0INGP0LvQuNC90LrQvtGOKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGFydFg6IENBTlZBU19XSURUSCAvIDIgLSAxMDAsXG4gICAgICAgICAgICAgICAgc3RhcnRZOiBDQU5WQVNfSEVJR0hUIC8gMiAtIERFRVJfSEVJR0hUIC8gMiArIDUwLFxuICAgICAgICAgICAgICAgIG1pblg6IENBTlZBU19XSURUSCAvIDIgLSAxNTAsXG4gICAgICAgICAgICAgICAgbWF4WDogQ0FOVkFTX1dJRFRIIC8gMiArIDE1MCxcbiAgICAgICAgICAgICAgICBzcGVlZDogMC4zLFxuICAgICAgICAgICAgICAgIHpJbmRleDogMiAvLyDQnNCw0LvRjtGU0YLRjNGB0Y8g0L/RltGB0LvRjyDRj9C70LjQvdC60LggKNC90LDQtCDRj9C70LjQvdC60L7RjilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhcnRYOiBDQU5WQVNfV0lEVEggLyAyIC0gMTAwLFxuICAgICAgICAgICAgICAgIHN0YXJ0WTogQ0FOVkFTX0hFSUdIVCAvIDIgLSBERUVSX0hFSUdIVCAvIDIgLSA1MCxcbiAgICAgICAgICAgICAgICBtaW5YOiBDQU5WQVNfV0lEVEggLyAyIC0gMjUwLFxuICAgICAgICAgICAgICAgIG1heFg6IENBTlZBU19XSURUSCAvIDIgKyAyNTAsXG4gICAgICAgICAgICAgICAgc3BlZWQ6IDAuNCxcbiAgICAgICAgICAgICAgICB6SW5kZXg6IDEgLy8g0JzQsNC70Y7RlNGC0YzRgdGPINC+0YHRgtCw0L3QvdGW0LwgKNC90LDQudCy0LjRidC1KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICBcbiAgICAgICAgXTtcblxuICAgICAgICAvLyDQodGC0LLQvtGA0Y7RlNC80L4g0L7Qu9C10L3RltCyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgREVFUl9DT1VOVCAmJiBpIDwgZGVlckNvbmZpZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbmZpZyA9IGRlZXJDb25maWdzW2ldO1xuICAgICAgICAgICAgZGVlcnMucHVzaChuZXcgRGVlcihcbiAgICAgICAgICAgICAgICBjb25maWcuc3RhcnRYLFxuICAgICAgICAgICAgICAgIGNvbmZpZy5zdGFydFksXG4gICAgICAgICAgICAgICAgY29uZmlnLm1pblgsXG4gICAgICAgICAgICAgICAgY29uZmlnLm1heFgsXG4gICAgICAgICAgICAgICAgY29uZmlnLnNwZWVkLFxuICAgICAgICAgICAgICAgIGNvbmZpZy56SW5kZXggfHwgMCAvLyDQktC40LrQvtGA0LjRgdGC0L7QstGD0ZTQvNC+IHpJbmRleCDQtyDQutC+0L3RhNGW0LPRgyDQsNCx0L4gMCDQt9CwINC30LDQvNC+0LLRh9GD0LLQsNC90L3Rj9C8XG4gICAgICAgICAgICApKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vINCX0LDQstCw0L3RgtCw0LbQtdC90L3RjyDQt9C+0LHRgNCw0LbQtdC90YxcbiAgICAgICAgY29uc3QgaW1hZ2VzID0ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbmV3IEltYWdlKCksXG4gICAgICAgICAgICB0cmVlOiBuZXcgSW1hZ2UoKSxcbiAgICAgICAgICAgIGRlZXJTcHJpdGU6IG5ldyBJbWFnZSgpIC8vINCh0L/RgNCw0LnRgi3Qu9C40YHRgiDQt9Cw0LzRltGB0YLRjCDQvtC00L3QvtCz0L4g0LfQvtCx0YDQsNC20LXQvdC90Y9cbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgaW1hZ2VzTG9hZGVkID0gMDtcbiAgICAgICAgY29uc3QgdG90YWxJbWFnZXMgPSAzO1xuXG4gICAgICAgIGZ1bmN0aW9uIG9uSW1hZ2VMb2FkKCkge1xuICAgICAgICAgICAgaW1hZ2VzTG9hZGVkKys7XG4gICAgICAgICAgICBpZiAoaW1hZ2VzTG9hZGVkID09PSB0b3RhbEltYWdlcykge1xuICAgICAgICAgICAgICAgIC8vINCf0LXRgNC10LLRltGA0Y/RlNC80L4sINGH0Lgg0YHQv9GA0LDQudGCLdC70LjRgdGCINC30LDQstCw0L3RgtCw0LbQuNCy0YHRjyDQutC+0YDQtdC60YLQvdC+XG4gICAgICAgICAgICAgICAgaWYgKGltYWdlcy5kZWVyU3ByaXRlLmNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEZWVyIHNwcml0ZSBsb2FkZWQ6Jywge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGltYWdlcy5kZWVyU3ByaXRlLndpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBpbWFnZXMuZGVlclNwcml0ZS5oZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgICAgICBmcmFtZVdpZHRoOiBGUkFNRV9XSURUSCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lSGVpZ2h0OiBGUkFNRV9IRUlHSFQsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWVyV2lkdGg6IERFRVJfV0lEVEgsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWVySGVpZ2h0OiBERUVSX0hFSUdIVFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZHJhd0NhbnZhcygpO1xuICAgICAgICAgICAgICAgIHN0YXJ0QW5pbWF0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpbWFnZXMuYmFja2dyb3VuZC5vbmxvYWQgPSBvbkltYWdlTG9hZDtcbiAgICAgICAgaW1hZ2VzLnRyZWUub25sb2FkID0gb25JbWFnZUxvYWQ7XG4gICAgICAgIGltYWdlcy5kZWVyU3ByaXRlLm9ubG9hZCA9IG9uSW1hZ2VMb2FkO1xuXG4gICAgICAgIGltYWdlcy5iYWNrZ3JvdW5kLnNyYyA9ICdpbWcvcGFydGljaXBhdGUvY2FudmFzLWJnLnBuZyc7XG4gICAgICAgIGltYWdlcy50cmVlLnNyYyA9ICdpbWcvcGFydGljaXBhdGUvdHJlZS5wbmcnO1xuICAgICAgICAvLyDQktC40LrQvtGA0LjRgdGC0L7QstGD0ZTQvNC+INGB0L/RgNCw0LnRgi3Qu9C40YHRgiAo0Y/QutGJ0L4g0YTQsNC50Lsg0L3QsNC30LjQstCw0ZTRgtGM0YHRjyBkZWVyLXNwcml0ZS5wbmcsINC30LzRltC90ZbRgtGMINC90LDQt9Cy0YMpXG4gICAgICAgIGltYWdlcy5kZWVyU3ByaXRlLnNyYyA9ICdpbWcvcGFydGljaXBhdGUvZGVlci1zcHJpdGUucG5nJztcblxuICAgICAgICBmdW5jdGlvbiBkcmF3Q2FudmFzKCkge1xuICAgICAgICAgICAgLy8g0J7Rh9C40YnQtdC90L3RjyBjYW52YXNcbiAgICAgICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgQ0FOVkFTX1dJRFRILCBDQU5WQVNfSEVJR0hUKTtcblxuICAgICAgICAgICAgLy8g0JzQsNC70Y7RlNC80L4g0YTQvtC9XG4gICAgICAgICAgICBpZiAoaW1hZ2VzLmJhY2tncm91bmQuY29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKGltYWdlcy5iYWNrZ3JvdW5kLCAwLCAwLCBDQU5WQVNfV0lEVEgsIENBTlZBU19IRUlHSFQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyB6SW5kZXgg0LTQu9GPINGP0LvQuNC90LrQuCAo0LzRltC2INC+0LvQtdC90Y/QvNC4KVxuICAgICAgICAgICAgY29uc3QgVFJFRV9aX0lOREVYID0gMjsgLy8g0K/Qu9C40L3QutCwINC80LDQu9GO0ZTRgtGM0YHRjyDQvNGW0LYg0L7Qu9C10L3Rj9C80Lgg0LcgekluZGV4IDEg0YLQsCAyXG5cbiAgICAgICAgICAgIC8vINCh0YLQstC+0YDRjtGU0LzQviDQvNCw0YHQuNCyINCy0YHRltGFINC10LvQtdC80LXQvdGC0ZbQsiDQtNC70Y8g0LzQsNC70Y7QstCw0L3QvdGPICjQvtC70LXQvdGWICsg0Y/Qu9C40L3QutCwKVxuICAgICAgICAgICAgY29uc3QgZHJhd2FibGVFbGVtZW50cyA9IFtdO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQlNC+0LTQsNGU0LzQviDQvtC70LXQvdGW0LJcbiAgICAgICAgICAgIGRlZXJzLmZvckVhY2goZGVlciA9PiB7XG4gICAgICAgICAgICAgICAgZHJhd2FibGVFbGVtZW50cy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2RlZXInLFxuICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IGRlZXIuekluZGV4LFxuICAgICAgICAgICAgICAgICAgICBkcmF3OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW1hZ2VzLmRlZXJTcHJpdGUuY29tcGxldGUgJiYgRlJBTUVfV0lEVEggPiAwICYmIEZSQU1FX0hFSUdIVCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWVyLmRyYXcoY3R4LCBpbWFnZXMuZGVlclNwcml0ZSwgRlJBTUVfV0lEVEgsIEZSQU1FX0hFSUdIVCwgREVFUl9XSURUSCwgREVFUl9IRUlHSFQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0JTQvtC00LDRlNC80L4g0Y/Qu9C40L3QutGDXG4gICAgICAgICAgICBkcmF3YWJsZUVsZW1lbnRzLnB1c2goe1xuICAgICAgICAgICAgICAgIHR5cGU6ICd0cmVlJyxcbiAgICAgICAgICAgICAgICB6SW5kZXg6IFRSRUVfWl9JTkRFWCxcbiAgICAgICAgICAgICAgICBkcmF3OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbWFnZXMudHJlZS5jb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShpbWFnZXMudHJlZSwgdHJlZVgsIHRyZWVZLCBUUkVFX1dJRFRILCBUUkVFX0hFSUdIVCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8g0KHQvtGA0YLRg9GU0LzQviDQstGB0ZYg0LXQu9C10LzQtdC90YLQuCDQt9CwIHpJbmRleCAo0LzQtdC90YjQtSA9INC80LDQu9GO0ZTRgtGM0YHRjyDRgNCw0L3RltGI0LUsINCx0ZbQu9GM0YjQtSA9INC80LDQu9GO0ZTRgtGM0YHRjyDQv9GW0LfQvdGW0YjQtSlcbiAgICAgICAgICAgIGRyYXdhYmxlRWxlbWVudHMuc29ydCgoYSwgYikgPT4gYS56SW5kZXggLSBiLnpJbmRleCk7XG5cbiAgICAgICAgICAgIC8vINCc0LDQu9GO0ZTQvNC+INCy0YHRliDQtdC70LXQvNC10L3RgtC4INCyINC/0YDQsNCy0LjQu9GM0L3QvtC80YMg0L/QvtGA0Y/QtNC60YNcbiAgICAgICAgICAgIGRyYXdhYmxlRWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmRyYXcoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbiAgICAgICAgICAgIGZyYW1lQ291bnRlcisrO1xuXG4gICAgICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNGP0ZTQvNC+LCDRh9C4INC/0L7RgtGA0ZbQsdC90L4g0L7QvdC+0LLQu9GO0LLQsNGC0Lgg0LrQsNC00YDQuCDQsNC90ZbQvNCw0YbRltGXXG4gICAgICAgICAgICBjb25zdCBzaG91bGRVcGRhdGVGcmFtZSA9IGZyYW1lQ291bnRlciA+PSBGUkFNRV9ERUxBWTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0J7QvdC+0LLQu9GO0ZTQvNC+INCz0LvQvtCx0LDQu9GM0L3QuNC5INC70ZbRh9C40LvRjNC90LjQuiDQutCw0LTRgNGW0LJcbiAgICAgICAgICAgIGlmIChzaG91bGRVcGRhdGVGcmFtZSkge1xuICAgICAgICAgICAgICAgIGZyYW1lQ291bnRlciA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vINCe0L3QvtCy0LvRjtGU0LzQviDQstGB0ZbRhSDQvtC70LXQvdGW0LJcbiAgICAgICAgICAgIGRlZXJzLmZvckVhY2goZGVlciA9PiB7XG4gICAgICAgICAgICAgICAgZGVlci51cGRhdGUoc2hvdWxkVXBkYXRlRnJhbWUpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vINCf0LXRgNC10LzQsNC70YzQvtCy0YPRlNC80L4gY2FudmFzXG4gICAgICAgICAgICBkcmF3Q2FudmFzKCk7XG5cbiAgICAgICAgICAgIGFuaW1hdGlvbklkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gc3RhcnRBbmltYXRpb24oKSB7XG4gICAgICAgICAgICBpZiAoYW5pbWF0aW9uSWQpIHtcbiAgICAgICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShhbmltYXRpb25JZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhbmltYXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDQl9GD0L/QuNC90Y/RlNC80L4g0LDQvdGW0LzQsNGG0ZbRjiDQv9GA0Lgg0LLQuNGF0L7QtNGWINC3IHZpZXdwb3J0ICjQvtC/0YbRltC+0L3QsNC70YzQvdC+KVxuICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgICAgICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFhbmltYXRpb25JZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRBbmltYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhbmltYXRpb25JZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uSWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uSWQgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUoY2FudmFzKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0U25vd2ZsYWtlc0NhbnZhcygpIHtcbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Nub3dmbGFrZXNDYW52YXMnKTtcbiAgICAgICAgaWYgKCFjYW52YXMpIHJldHVybjtcblxuICAgICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgY29uc3QgZmF2UGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXYtcGFnZScpO1xuICAgICAgICBcbiAgICAgICAgLy8g0JrQvtC90YHRgtCw0L3RgtC4XG4gICAgICAgIGNvbnN0IFNOT1dGTEFLRV9DT1VOVCA9IDEwMDtcbiAgICAgICAgY29uc3QgU05PV0ZMQUtFX01JTl9TSVpFID0gNDtcbiAgICAgICAgY29uc3QgU05PV0ZMQUtFX01BWF9TSVpFID0gMTA7XG4gICAgICAgIGNvbnN0IFNOT1dGTEFLRV9NSU5fU1BFRUQgPSAwLjE7XG4gICAgICAgIGNvbnN0IFNOT1dGTEFLRV9NQVhfU1BFRUQgPSAwLjM7XG4gICAgICAgIGNvbnN0IFNOT1dGTEFLRV9XSU5EX1JBTkdFID0gMC40O1xuICAgICAgICBjb25zdCBTTk9XRkxBS0VfU1BBV05fSU5URVJWQUwgPSAyMDA7XG5cbiAgICAgICAgY29uc3Qgc25vd2ZsYWtlcyA9IFtdO1xuICAgICAgICBsZXQgbGFzdFNub3dmbGFrZVRpbWUgPSAwO1xuICAgICAgICBsZXQgYW5pbWF0aW9uSWQgPSBudWxsO1xuICAgICAgICBcbiAgICAgICAgLy8g0JLRgdGC0LDQvdC+0LLQu9GO0ZTQvNC+INGA0L7Qt9C80ZbRgCBjYW52YXMg0L3QsCDQstC10YHRjCAuZmF2LXBhZ2VcbiAgICAgICAgZnVuY3Rpb24gcmVzaXplQ2FudmFzKCkge1xuICAgICAgICAgICAgbGV0IG5ld1dpZHRoLCBuZXdIZWlnaHQ7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChmYXZQYWdlKSB7XG4gICAgICAgICAgICAgICAgLy8g0JLQuNC60L7RgNC40YHRgtC+0LLRg9GU0LzQviBzY3JvbGxIZWlnaHQg0LTQu9GPINC+0YLRgNC40LzQsNC90L3RjyDRgNC10LDQu9GM0L3QvtGXINCy0LjRgdC+0YLQuCDQutC+0L3RgtC10L3RgtGDXG4gICAgICAgICAgICAgICAgY29uc3QgcmVjdCA9IGZhdlBhZ2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAgICAgbmV3V2lkdGggPSByZWN0LndpZHRoIHx8IGZhdlBhZ2Uub2Zmc2V0V2lkdGggfHwgd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgICAgICAgICAgLy8g0JTQu9GPINCy0LjRgdC+0YLQuCDQstC40LrQvtGA0LjRgdGC0L7QstGD0ZTQvNC+IHNjcm9sbEhlaWdodCDRj9C60YnQviDQstGW0L0g0LHRltC70YzRiNC40Lkg0LfQsCBvZmZzZXRIZWlnaHRcbiAgICAgICAgICAgICAgICBjb25zdCBvZmZzZXRIZWlnaHQgPSBmYXZQYWdlLm9mZnNldEhlaWdodCB8fCBmYXZQYWdlLmNsaWVudEhlaWdodDtcbiAgICAgICAgICAgICAgICBjb25zdCBzY3JvbGxIZWlnaHQgPSBmYXZQYWdlLnNjcm9sbEhlaWdodDtcbiAgICAgICAgICAgICAgICBuZXdIZWlnaHQgPSBNYXRoLm1heChzY3JvbGxIZWlnaHQsIG9mZnNldEhlaWdodCwgcmVjdC5oZWlnaHQpIHx8IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gRmFsbGJhY2sg0L3QsCB2aWV3cG9ydFxuICAgICAgICAgICAgICAgIG5ld1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgICAgICAgICAgbmV3SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNGP0ZTQvNC+INGH0Lgg0YDQvtC30LzRltGA0Lgg0LfQvNGW0L3QuNC70LjRgdGPINC/0LXRgNC10LQg0L7QvdC+0LLQu9C10L3QvdGP0LxcbiAgICAgICAgICAgIGlmIChjYW52YXMud2lkdGggIT09IG5ld1dpZHRoIHx8IGNhbnZhcy5oZWlnaHQgIT09IG5ld0hlaWdodCkge1xuICAgICAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IG5ld1dpZHRoO1xuICAgICAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSBuZXdIZWlnaHQ7XG4gICAgICAgICAgICAgICAgLy8g0J7Rh9C40YnQsNGU0LzQviDRgdC90ZbQttC40L3QutC4INC/0YDQuCDQt9C80ZbQvdGWINGA0L7Qt9C80ZbRgNGDXG4gICAgICAgICAgICAgICAgc25vd2ZsYWtlcy5sZW5ndGggPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8g0JLRgdGC0LDQvdC+0LLQu9GO0ZTQvNC+INGA0L7Qt9C80ZbRgCBjYW52YXMg0Lcg0L3QtdCy0LXQu9C40LrQvtGOINC30LDRgtGA0LjQvNC60L7RjiDQtNC70Y8g0LrQvtGA0LXQutGC0L3QvtCz0L4g0YDQvtC30YDQsNGF0YPQvdC60YMg0YDQvtC30LzRltGA0ZbQslxuICAgICAgICAvLyDQktC40LrQvtGA0LjRgdGC0L7QstGD0ZTQvNC+INC60ZbQu9GM0LrQsCDQutCw0LTRgNGW0LIg0LTQu9GPINCz0LDRgNCw0L3RgtGW0Zcg0L/RgNCw0LLQuNC70YzQvdC+0LPQviDRgNC+0LfQvNGW0YDRg1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgcmVzaXplQ2FudmFzKCk7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc2l6ZUNhbnZhcygpO1xuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlc2l6ZUNhbnZhcygpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZUNhbnZhcyk7XG5cbiAgICAgICAgLy8g0JfQsNCy0LDQvdGC0LDQttC10L3QvdGPINC30L7QsdGA0LDQttC10L3QvdGPINGB0L3RltC20LjQvdC60LhcbiAgICAgICAgY29uc3Qgc25vd2ZsYWtlSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgbGV0IGltYWdlTG9hZGVkID0gZmFsc2U7XG5cbiAgICAgICAgc25vd2ZsYWtlSW1hZ2Uub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpbWFnZUxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICAvLyDQp9C10LrQsNGU0LzQviDQv9C+0LrQuCDRgdGC0L7RgNGW0L3QutCwINCy0LjQudC00LUg0LfRliDRgdGC0LDQvdGDIGxvYWRpbmcg0L/QtdGA0LXQtCDRgdGC0LDRgNGC0L7QvCDQsNC90ZbQvNCw0YbRltGXXG4gICAgICAgICAgICBmdW5jdGlvbiB3YWl0Rm9yUGFnZVJlYWR5KCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlzUGFnZUxvYWRpbmcgPSBtYWluUGFnZSAmJiBtYWluUGFnZS5jbGFzc0xpc3QuY29udGFpbnMoJ2xvYWRpbmcnKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoaXNQYWdlTG9hZGluZykge1xuICAgICAgICAgICAgICAgICAgICAvLyDQr9C60YnQviDRgdGC0L7RgNGW0L3QutCwINGJ0LUg0LIg0YHRgtCw0L3RliBsb2FkaW5nLCDRh9C10LrQsNGU0LzQviDQv9C+0LrQuCBsb2FkZXIg0L/RgNC40YXQvtCy0LDRlNGC0YzRgdGPXG4gICAgICAgICAgICAgICAgICAgIC8vIGhpZGVMb2FkZXIg0LLQuNC60LvQuNC60LDRlNGC0YzRgdGPINGH0LXRgNC10LcgMzAwbXMg0L/RltGB0LvRjyBxdWlja0NoZWNrQW5kUmVuZGVyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNpemVDYW52YXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNpemVDYW52YXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g0JTQvtC00LDRgtC60L7QstCwINC/0LXRgNC10LLRltGA0LrQsCDQv9GW0YHQu9GPINGJ0LUg0L7QtNC90L7Qs9C+INC60LDQtNGA0YNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc2l6ZUNhbnZhcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhbnZhcy53aWR0aCA+IDAgJiYgY2FudmFzLmhlaWdodCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydEFuaW1hdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDQr9C60YnQviDQstGB0LUg0YnQtSDQvdC10L/RgNCw0LLQuNC70YzQvdC40Lkg0YDQvtC30LzRltGALCDQv9C+0LLRgtC+0YDRjtGU0LzQvlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQod2FpdEZvclBhZ2VSZWFkeSwgNTApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9LCA0MDApOyAvLyDQp9C10LrQsNGU0LzQviDRgtGA0L7RhdC4INCx0ZbQu9GM0YjQtSDQvdGW0LYgaGlkZUxvYWRlciAoMzAwbXMpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g0KHRgtC+0YDRltC90LrQsCDQs9C+0YLQvtCy0LAsINCy0YHRgtCw0L3QvtCy0LvRjtGU0LzQviDRgNC+0LfQvNGW0YAg0YLQsCDQt9Cw0L/Rg9GB0LrQsNGU0LzQvlxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzaXplQ2FudmFzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc2l6ZUNhbnZhcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc2l6ZUNhbnZhcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2FudmFzLndpZHRoID4gMCAmJiBjYW52YXMuaGVpZ2h0ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRBbmltYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgd2FpdEZvclBhZ2VSZWFkeSgpO1xuICAgICAgICB9O1xuICAgICAgICBzbm93Zmxha2VJbWFnZS5zcmMgPSAnaW1nL3Nub3dmbGFrZS5wbmcnO1xuICAgICAgIFxuXG4gICAgICAgIC8vINCa0LvQsNGBINC00LvRjyDRgdC90ZbQttC40L3QutC4XG4gICAgICAgIGNsYXNzIFNub3dmbGFrZSB7XG4gICAgICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnggPSBNYXRoLnJhbmRvbSgpICogKGNhbnZhcy53aWR0aCB8fCB3aW5kb3cuaW5uZXJXaWR0aCk7XG4gICAgICAgICAgICAgICAgdGhpcy55ID0gLTIwO1xuICAgICAgICAgICAgICAgIHRoaXMuc2l6ZSA9IE1hdGgucmFuZG9tKCkgKiAoU05PV0ZMQUtFX01BWF9TSVpFIC0gU05PV0ZMQUtFX01JTl9TSVpFKSArIFNOT1dGTEFLRV9NSU5fU0laRTtcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVkID0gTWF0aC5yYW5kb20oKSAqIChTTk9XRkxBS0VfTUFYX1NQRUVEIC0gU05PV0ZMQUtFX01JTl9TUEVFRCkgKyBTTk9XRkxBS0VfTUlOX1NQRUVEO1xuICAgICAgICAgICAgICAgIHRoaXMud2luZCA9IChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIFNOT1dGTEFLRV9XSU5EX1JBTkdFO1xuICAgICAgICAgICAgICAgIHRoaXMub3BhY2l0eSA9IE1hdGgucmFuZG9tKCkgKiAwLjUgKyAwLjU7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3RhdGlvbiA9IE1hdGgucmFuZG9tKCkgKiBNYXRoLlBJICogMjtcbiAgICAgICAgICAgICAgICB0aGlzLnJvdGF0aW9uU3BlZWQgPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiAwLjAyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1cGRhdGUoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy55ICs9IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICAgICAgdGhpcy54ICs9IHRoaXMud2luZCArIChNYXRoLnNpbih0aGlzLnkgKiAwLjAxKSAqIDAuMik7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3RhdGlvbiArPSB0aGlzLnJvdGF0aW9uU3BlZWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRyYXcoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpbWFnZUxvYWRlZCkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vINCf0LXRgNC10LLRltGA0LrQsCDRh9C4IGNhbnZhcyDQvNCw0ZQg0L/RgNCw0LLQuNC70YzQvdC40Lkg0YDQvtC30LzRltGAXG4gICAgICAgICAgICAgICAgaWYgKGNhbnZhcy53aWR0aCA9PT0gMCB8fCBjYW52YXMuaGVpZ2h0ID09PSAwKSByZXR1cm47XG5cbiAgICAgICAgICAgICAgICBjdHguc2F2ZSgpO1xuICAgICAgICAgICAgICAgIGN0eC5nbG9iYWxBbHBoYSA9IHRoaXMub3BhY2l0eTtcbiAgICAgICAgICAgICAgICBjdHgudHJhbnNsYXRlKHRoaXMueCwgdGhpcy55KTtcbiAgICAgICAgICAgICAgICBjdHgucm90YXRlKHRoaXMucm90YXRpb24pO1xuICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICAgICAgICAgIHNub3dmbGFrZUltYWdlLFxuICAgICAgICAgICAgICAgICAgICAtdGhpcy5zaXplIC8gMixcbiAgICAgICAgICAgICAgICAgICAgLXRoaXMuc2l6ZSAvIDIsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaXplXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBjdHgucmVzdG9yZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpc09mZlNjcmVlbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy55ID4gY2FudmFzLmhlaWdodCArIDIwIHx8IFxuICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnggPCAtMjAgfHwgXG4gICAgICAgICAgICAgICAgICAgICAgIHRoaXMueCA+IGNhbnZhcy53aWR0aCArIDIwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlU25vd2ZsYWtlKCkge1xuICAgICAgICAgICAgaWYgKHNub3dmbGFrZXMubGVuZ3RoIDwgU05PV0ZMQUtFX0NPVU5UKSB7XG4gICAgICAgICAgICAgICAgc25vd2ZsYWtlcy5wdXNoKG5ldyBTbm93Zmxha2UoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiB1cGRhdGVTbm93Zmxha2VzKCkge1xuICAgICAgICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIGlmIChub3cgLSBsYXN0U25vd2ZsYWtlVGltZSA+IFNOT1dGTEFLRV9TUEFXTl9JTlRFUlZBTCkge1xuICAgICAgICAgICAgICAgIGNyZWF0ZVNub3dmbGFrZSgpO1xuICAgICAgICAgICAgICAgIGxhc3RTbm93Zmxha2VUaW1lID0gbm93O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gc25vd2ZsYWtlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgIHNub3dmbGFrZXNbaV0udXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgaWYgKHNub3dmbGFrZXNbaV0uaXNPZmZTY3JlZW4oKSkge1xuICAgICAgICAgICAgICAgICAgICBzbm93Zmxha2VzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBkcmF3U25vd2ZsYWtlcygpIHtcbiAgICAgICAgICAgIC8vINCf0LXRgNC10LLRltGA0LrQsCDRh9C4IGNhbnZhcyDQvNCw0ZQg0L/RgNCw0LLQuNC70YzQvdC40Lkg0YDQvtC30LzRltGAINC/0LXRgNC10LQg0LzQsNC70Y7QstCw0L3QvdGP0LxcbiAgICAgICAgICAgIGlmIChjYW52YXMud2lkdGggPT09IDAgfHwgY2FudmFzLmhlaWdodCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJlc2l6ZUNhbnZhcygpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgICAgc25vd2ZsYWtlcy5mb3JFYWNoKHNub3dmbGFrZSA9PiB7XG4gICAgICAgICAgICAgICAgc25vd2ZsYWtlLmRyYXcoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbiAgICAgICAgICAgIC8vINCf0LXRgNC10LLRltGA0Y/RlNC80L4g0YDQvtC30LzRltGAIGNhbnZhcyDQvdCwINC/0L7Rh9Cw0YLQutGDINC60L7QttC90L7Qs9C+INC60LDQtNGA0YMgKNGC0ZbQu9GM0LrQuCDRj9C60YnQviDQstGW0L0g0L3QtdC/0YDQsNCy0LjQu9GM0L3QuNC5KVxuICAgICAgICAgICAgaWYgKGNhbnZhcy53aWR0aCA9PT0gMCB8fCBjYW52YXMuaGVpZ2h0ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmVzaXplQ2FudmFzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHVwZGF0ZVNub3dmbGFrZXMoKTtcbiAgICAgICAgICAgIGRyYXdTbm93Zmxha2VzKCk7XG4gICAgICAgICAgICBhbmltYXRpb25JZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHN0YXJ0QW5pbWF0aW9uKCkge1xuICAgICAgICAgICAgaWYgKGFuaW1hdGlvbklkKSB7XG4gICAgICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uSWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYW5pbWF0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g0JfRg9C/0LjQvdGP0ZTQvNC+INCw0L3RltC80LDRhtGW0Y4g0L/RgNC4INCy0LjRhdC+0LTRliDQtyB2aWV3cG9ydFxuICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgICAgICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFhbmltYXRpb25JZCAmJiBpbWFnZUxvYWRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRBbmltYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhbmltYXRpb25JZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uSWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uSWQgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUoY2FudmFzKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0SW5maW5pdGVTY3JvbGwoKSB7XG4gICAgICAgIGNvbnN0IHNjcm9sbEJsb2NrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zY3JvbGwnKTtcbiAgICAgICAgXG4gICAgICAgIGlmICghc2Nyb2xsQmxvY2tzLmxlbmd0aCkgcmV0dXJuO1xuICAgICAgICBcbiAgICAgICAgc2Nyb2xsQmxvY2tzLmZvckVhY2goKHNjcm9sbEJsb2NrKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzY3JvbGxDb250ZW50ID0gc2Nyb2xsQmxvY2sucXVlcnlTZWxlY3RvcignLnNjcm9sbF9fY29udGVudCcpO1xuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsVGV4dCA9IHNjcm9sbEJsb2NrLnF1ZXJ5U2VsZWN0b3IoJy5zY3JvbGxfX3RleHQnKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCFzY3JvbGxDb250ZW50IHx8ICFzY3JvbGxUZXh0KSByZXR1cm47XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSBzY3JvbGxUZXh0LnRleHRDb250ZW50LnRyaW0oKTtcbiAgICAgICAgICAgIGlmICghdGV4dCkgcmV0dXJuOyAvLyDQn9C10YDQtdCy0ZbRgNC60LAg0L3QsCDQv9C+0YDQvtC20L3RltC5INGC0LXQutGB0YJcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgcGFkZGluZ1JpZ2h0ID0gMDtcbiAgICAgICAgICAgIGNvbnN0IGZpeGVkV2lkdGggPSAyNjAwOyAvLyDQpNGW0LrRgdC+0LLQsNC90LAg0YjQuNGA0LjQvdCwINC60L7QvdGC0LXQvdGC0YNcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0J7Rh9C40YnQsNGU0LzQviDQutC+0L3RgtC10L3RglxuICAgICAgICAgICAgc2Nyb2xsQ29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0KHRgtCy0L7RgNGO0ZTQvNC+INC10LvQtdC80LXQvdGC0Lgg0LTQviDRgtC40YUg0L/RltGALCDQv9C+0LrQuCDQvdC1INC00L7RgdGP0LPQvdC10LzQviDRhNGW0LrRgdC+0LLQsNC90L7RlyDRiNC40YDQuNC90LggMjYwMHB4XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50cyA9IFtdO1xuICAgICAgICAgICAgbGV0IGl0ZW1Db3VudCA9IDA7XG4gICAgICAgICAgICBsZXQgY3VycmVudFdpZHRoID0gMDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0KHQv9C+0YfQsNGC0LrRgyDRgdGC0LLQvtGA0Y7RlNC80L4g0L7QtNC40L0g0LXQu9C10LzQtdC90YIsINGJ0L7QsSDQvtGC0YDQuNC80LDRgtC4INC50L7Qs9C+INGI0LjRgNC40L3Rg1xuICAgICAgICAgICAgY29uc3QgdGVtcEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICB0ZW1wRWxlbWVudC5jbGFzc05hbWUgPSAnc2Nyb2xsX190ZXh0JztcbiAgICAgICAgICAgIHRlbXBFbGVtZW50LnRleHRDb250ZW50ID0gdGV4dDtcbiAgICAgICAgICAgIC8vINCi0LjQvNGH0LDRgdC+0LLQviDQv9C+0LrQsNC30YPRlNC80L4g0LXQu9C10LzQtdC90YIg0LTQu9GPINCy0LjQvNGW0YDRjtCy0LDQvdC90Y9cbiAgICAgICAgICAgIHRlbXBFbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgICAgICAgIHRlbXBFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgICAgIHRlbXBFbGVtZW50LnN0eWxlLndoaXRlU3BhY2UgPSAnbm93cmFwJztcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGVtcEVsZW1lbnQpO1xuICAgICAgICAgICAgY29uc3QgaXRlbVdpZHRoID0gdGVtcEVsZW1lbnQub2Zmc2V0V2lkdGggKyBwYWRkaW5nUmlnaHQ7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRlbXBFbGVtZW50KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0J/QtdGA0LXQstGW0YDQutCwINC90LAg0LLQsNC70ZbQtNC90YMg0YjQuNGA0LjQvdGDINC10LvQtdC80LXQvdGC0LBcbiAgICAgICAgICAgIGlmIChpdGVtV2lkdGggPD0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignU2Nyb2xsIGl0ZW0gd2lkdGggaXMgMCBvciBpbnZhbGlkJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQntCx0LzQtdC20YPRlNC80L4g0LrRltC70YzQutGW0YHRgtGMINGW0YLQtdGA0LDRhtGW0Lkg0LTQu9GPINCx0LXQt9C/0LXQutC4XG4gICAgICAgICAgICBjb25zdCBtYXhJdGVyYXRpb25zID0gTWF0aC5jZWlsKGZpeGVkV2lkdGggLyBpdGVtV2lkdGgpICsgMTA7XG4gICAgICAgICAgICBsZXQgaXRlcmF0aW9ucyA9IDA7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCh0YLQstC+0YDRjtGU0LzQviDQtdC70LXQvNC10L3RgtC4INC00L4g0YLQuNGFINC/0ZbRgCwg0L/QvtC60Lgg0L3QtSDQtNC+0YHRj9Cz0L3QtdC80L4g0YTRltC60YHQvtCy0LDQvdC+0Zcg0YjQuNGA0LjQvdC4XG4gICAgICAgICAgICB3aGlsZSAoY3VycmVudFdpZHRoIDwgZml4ZWRXaWR0aCAmJiBpdGVyYXRpb25zIDwgbWF4SXRlcmF0aW9ucykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRleHRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgICAgIHRleHRFbGVtZW50LmNsYXNzTmFtZSA9ICdzY3JvbGxfX3RleHQnO1xuICAgICAgICAgICAgICAgIHRleHRFbGVtZW50LnRleHRDb250ZW50ID0gdGV4dDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyDQmtC+0LbQtdC9INC00YDRg9Cz0LjQuSDQtdC70LXQvNC10L3RgiDQvtGC0YDQuNC80YPRlCDQutC70LDRgSBkYXJrXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW1Db3VudCAlIDIgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZGFyaycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBzY3JvbGxDb250ZW50LmFwcGVuZENoaWxkKHRleHRFbGVtZW50KTtcbiAgICAgICAgICAgICAgICBlbGVtZW50cy5wdXNoKHRleHRFbGVtZW50KTtcbiAgICAgICAgICAgICAgICBjdXJyZW50V2lkdGggKz0gaXRlbVdpZHRoO1xuICAgICAgICAgICAgICAgIGl0ZW1Db3VudCsrO1xuICAgICAgICAgICAgICAgIGl0ZXJhdGlvbnMrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0J/QtdGA0LXQstGW0YDQutCwINC90LAg0L3QsNGP0LLQvdGW0YHRgtGMINC10LvQtdC80LXQvdGC0ZbQslxuICAgICAgICAgICAgaWYgKGVsZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignTm8gc2Nyb2xsIGVsZW1lbnRzIGNyZWF0ZWQnKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCS0LjQutC+0YDQuNGB0YLQvtCy0YPRlNC80L4g0L7QsdGH0LjRgdC70LXQvdGDINGI0LjRgNC40L3RgyDQt9Cw0LzRltGB0YLRjCDQstC40LzRltGA0Y7QstCw0L3QvdGPICjQv9GA0LDRhtGO0ZQg0L3QsNCy0ZbRgtGMINC00LvRjyDQv9GA0LjRhdC+0LLQsNC90LjRhSDQtdC70LXQvNC10L3RgtGW0LIpXG4gICAgICAgICAgICBjb25zdCBjb250ZW50V2lkdGggPSBjdXJyZW50V2lkdGg7IC8vINCm0LUg0YjQuNGA0LjQvdCwINC/0LXRgNGI0L7Qs9C+INC90LDQsdC+0YDRgyDQtdC70LXQvNC10L3RgtGW0LJcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0J/QtdGA0LXQstGW0YDQutCwINC90LAg0LLQsNC70ZbQtNC90YMg0YjQuNGA0LjQvdGDINC60L7QvdGC0LXQvdGC0YNcbiAgICAgICAgICAgIGlmIChjb250ZW50V2lkdGggPD0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignU2Nyb2xsIGNvbnRlbnQgd2lkdGggaXMgMCBvciBpbnZhbGlkJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQodGC0LLQvtGA0Y7RlNC80L4g0LTRgNGD0LPRgyDQutC+0L/RltGOICjQvtGC0YDQuNC80YPRlNC80L4gMngg0YTRltC60YHQvtCy0LDQvdC+0Zcg0YjQuNGA0LjQvdC4KVxuICAgICAgICAgICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNsb25lZEVsZW1lbnQgPSBlbGVtZW50LmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgICAgICAgICBzY3JvbGxDb250ZW50LmFwcGVuZENoaWxkKGNsb25lZEVsZW1lbnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCQ0L3RltC80LDRhtGW0Y9cbiAgICAgICAgICAgIGxldCBwb3NpdGlvbiA9IDA7IC8vINCS0LjRhdGW0LTQvdCwINGC0L7Rh9C60LAgLSAwINCy0ZbQtNC90L7RgdC90L4g0LvRltCy0L7Qs9C+INC60YDQsNGOXG4gICAgICAgICAgICBjb25zdCBzcGVlZCA9IDAuMzsgLy8gcHggcGVyIGZyYW1lXG4gICAgICAgICAgICBsZXQgYW5pbWF0aW9uSWQgPSBudWxsO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBmdW5jdGlvbiBhbmltYXRlKCkge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uIC09IHNwZWVkOyAvLyDQoNGD0YXQsNGU0LzQviDQstC70ZbQstC+XG5cbiAgICAgICAgICAgICAgICBpZiAocG9zaXRpb24gPD0gLWNvbnRlbnRXaWR0aCkge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IHBvc2l0aW9uICsgY29udGVudFdpZHRoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBzY3JvbGxDb250ZW50LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7cG9zaXRpb259cHgpYDtcbiAgICAgICAgICAgICAgICBhbmltYXRpb25JZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0JfQsNC/0YPRgdC60LDRlNC80L4g0LDQvdGW0LzQsNGG0ZbRjlxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNGP0ZTQvNC+LCDRh9C4INC10LvQtdC80LXQvdGCINCy0LjQtNC40LzQuNC5INC/0LXRgNC10LQg0LfQsNC/0YPRgdC60L7QvFxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShzY3JvbGxCbG9jayk7XG4gICAgICAgICAgICAgICAgY29uc3QgaXNWaXNpYmxlID0gY29tcHV0ZWRTdHlsZS5kaXNwbGF5ICE9PSAnbm9uZScgJiYgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wdXRlZFN0eWxlLnZpc2liaWxpdHkgIT09ICdoaWRkZW4nO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChpc1Zpc2libGUgJiYgY29udGVudFdpZHRoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBhbmltYXRlKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g0K/QutGJ0L4g0LXQu9C10LzQtdC90YIg0L/RgNC40YXQvtCy0LDQvdC40LksINC30LDQv9GD0YHQutCw0ZTQvNC+INCw0L3RltC80LDRhtGW0Y4g0LLRgdC1INC+0LTQvdC+XG4gICAgICAgICAgICAgICAgICAgIC8vICjQstC+0L3QsCDQsdGD0LTQtSDQv9GA0LDRhtGO0LLQsNGC0LgsINC60L7Qu9C4INC10LvQtdC80LXQvdGCINGB0YLQsNC90LUg0LLQuNC00LjQvNC40LwpXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIGxvYWRUcmFuc2xhdGlvbnMoKVxuICAgICAgICAudGhlbihpbml0KSAvLyDQt9Cw0L/Rg9GB0Log0ZbQvdGW0YLRgyDRgdGC0L7RgNGW0L3QutC4XG5cblxuXG5cblxuICAgIC8vIGNvbnN0IGxuZ0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG5nLWJ0blwiKVxuICAgIC8vXG4gICAgLy8gLy8g0JLRgdGC0LDQvdC+0LLQu9GO0ZTQvNC+INGC0LXQutGB0YIg0LrQvdC+0L/QutC4INC90LAg0L/QvtGC0L7Rh9C90YMg0LDQutGC0LjQstC90YMg0LzQvtCy0YNcbiAgICAvLyBmdW5jdGlvbiB1cGRhdGVMYW5ndWFnZUJ1dHRvbigpIHtcbiAgICAvLyAgICAgLy8g0JLQuNC60L7RgNC40YHRgtC+0LLRg9GU0LzQviDRgtGDINGB0LDQvNGDINC70L7Qs9GW0LrRgywg0YnQviDRliDQtNC70Y8g0LLQuNC30L3QsNGH0LXQvdC90Y8gbG9jYWxlXG4gICAgLy8gICAgIGxldCBjdXJyZW50TG9jYWxlID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsZVwiKSB8fCBcImhyXCI7XG4gICAgLy8gICAgIGlmIChockxlbmcpIGN1cnJlbnRMb2NhbGUgPSAnaHInO1xuICAgIC8vICAgICBpZiAoZW5MZW5nKSBjdXJyZW50TG9jYWxlID0gJ2VuJztcbiAgICAvLyAgICAgaWYgKGxuZ0J0bikge1xuICAgIC8vICAgICAgICAgbG5nQnRuLnRleHRDb250ZW50ID0gY3VycmVudExvY2FsZTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cbiAgICAvL1xuICAgIC8vIC8vINCe0L3QvtCy0LvRjtGU0LzQviDQutC90L7Qv9C60YMg0L/RgNC4INC30LDQstCw0L3RgtCw0LbQtdC90L3RliAo0L/RltGB0LvRjyDQstC40LfQvdCw0YfQtdC90L3RjyBsb2NhbGUpXG4gICAgLy8gdXBkYXRlTGFuZ3VhZ2VCdXR0b24oKTtcblxuICAgIC8vIGlmIChsbmdCdG4pIHtcbiAgICAvLyAgICAgbG5nQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgLy8gICAgICAgICAvLyDQktC40LfQvdCw0YfQsNGU0LzQviDQv9C+0YLQvtGH0L3RgyDQvNC+0LLRgyDQv9C10YDQtdC0INC/0LXRgNC10LzQuNC60LDQvdC90Y/QvFxuICAgIC8vICAgICAgICAgbGV0IGN1cnJlbnRMb2NhbGUgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxlXCIpIHx8IFwiaHJcIjtcbiAgICAvLyAgICAgICAgIGlmIChockxlbmcpIGN1cnJlbnRMb2NhbGUgPSAnaHInO1xuICAgIC8vICAgICAgICAgaWYgKGVuTGVuZykgY3VycmVudExvY2FsZSA9ICdlbic7XG4gICAgLy9cbiAgICAvLyAgICAgICAgIGlmIChjdXJyZW50TG9jYWxlID09PSBcImVuXCIpIHtcbiAgICAvLyAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwibG9jYWxlXCIpO1xuICAgIC8vICAgICAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwibG9jYWxlXCIsIFwiZW5cIik7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgLy8gICAgIH0pO1xuICAgIC8vIH1cbiAgICAvL1xuICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1idG5cIik/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgLy8gICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS10ZXN0XCIpPy5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKTtcbiAgICAvLyB9KTtcblxuXG59KSgpO1xuIl19
