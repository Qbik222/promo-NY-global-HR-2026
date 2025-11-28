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
    var DEER_WIDTH = 110;
    var DEER_HEIGHT = 117;

    // Параметри спрайт-листа (будуть визначені після завантаження)
    var spriteSheetWidth = 0;
    var spriteSheetHeight = 0;
    var frameWidth = 0;
    var frameHeight = 0;
    var FRAMES_PER_ROW = 6; // 6 кадрів в рядку
    var TOTAL_ROWS = 2; // 2 ряди

    // Позиції елементів
    var treeX = CANVAS_WIDTH / 2 - 300; // Трохи лівіше від центру
    var treeY = CANVAS_HEIGHT / 2 - TREE_HEIGHT / 2;

    // Початкова позиція оленя (правіше від ялинки)
    var deerX = CANVAS_WIDTH / 2 + 50;
    var deerY = CANVAS_HEIGHT / 2 - DEER_HEIGHT / 2;

    // Параметри анімації
    var deerDirection = -1; // -1 = вліво (починаємо з руху вліво), 1 = вправо
    var deerSpeed = 0.5; // Швидкість руху
    var deerMinX = CANVAS_WIDTH / 2 - 200; // Мінімальна позиція (ліворуч)
    var deerMaxX = CANVAS_WIDTH / 2 + 300; // Максимальна позиція (праворуч)
    var animationId = null;

    // Стани анімації оленя
    var DEER_STATE = {
      WALKING: 'walking',
      IDLE: 'idle'
    };
    var deerState = DEER_STATE.WALKING;
    var frameIndex = 0; // Індекс поточного кадру для ходьби
    var frameCounter = 0; // Лічильник для контролю швидкості анімації
    var FRAME_DELAY = 8; // Затримка між кадрами (менше = швидше)
    var idleTimer = 0; // Таймер для зупинки
    var idleDuration = 0; // Тривалість зупинки в кадрах (випадкова від 1 до 3 секунд)
    var IDLE_MIN_DURATION = 60; // Мінімальна тривалість зупинки (1 секунда при 60fps)
    var IDLE_MAX_DURATION = 180; // Максимальна тривалість зупинки (3 секунди при 60fps)

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
        // Визначаємо розміри кадрів після завантаження спрайт-листа
        if (images.deerSprite.complete) {
          spriteSheetWidth = images.deerSprite.width;
          spriteSheetHeight = images.deerSprite.height;
          frameWidth = spriteSheetWidth / FRAMES_PER_ROW;
          frameHeight = spriteSheetHeight / TOTAL_ROWS;
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

    // Отримуємо індекс кадру в спрайт-листі
    function getSpriteFrameIndex() {
      var row = deerDirection === 1 ? 0 : 1; // 0 = вправо, 1 = вліво
      var col = 0;
      if (deerState === DEER_STATE.WALKING) {
        // Кадри ходьби: 1, 2 (індекси 1, 2)
        col = frameIndex % 2 + 1; // Чергуємо між кадрами 1 і 2
      } else {
        // Стан зупинки (IDLE) - використовуємо кадр 0
        col = 0; // Idle
      }

      return {
        row: row,
        col: col
      };
    }
    function drawCanvas() {
      // Очищення canvas
      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

      // Малюємо фон
      if (images.background.complete) {
        ctx.drawImage(images.background, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      }

      // Малюємо ялинку (статична)
      if (images.tree.complete) {
        ctx.drawImage(images.tree, treeX, treeY, TREE_WIDTH, TREE_HEIGHT);
      }

      // Малюємо оленя зі спрайт-листа
      if (images.deerSprite.complete && frameWidth > 0 && frameHeight > 0) {
        var _getSpriteFrameIndex = getSpriteFrameIndex(),
          row = _getSpriteFrameIndex.row,
          col = _getSpriteFrameIndex.col;

        // Координати кадру в спрайт-листі
        var sourceX = col * frameWidth;
        var sourceY = row * frameHeight;

        // Вирізаємо кадр зі спрайт-листа та малюємо на canvas
        ctx.drawImage(images.deerSprite, sourceX, sourceY, frameWidth, frameHeight,
        // Джерело (спрайт-лист)
        deerX, deerY, DEER_WIDTH, DEER_HEIGHT // Призначення (canvas)
        );
      }
    }

    function animate() {
      frameCounter++;

      // Оновлюємо анімацію кадрів
      if (frameCounter >= FRAME_DELAY) {
        frameCounter = 0;
        if (deerState === DEER_STATE.WALKING) {
          frameIndex = (frameIndex + 1) % 2; // Чергуємо між кадрами 0 і 1
        }
      }

      // Логіка станів та руху
      if (deerState === DEER_STATE.WALKING) {
        // Оновлюємо позицію оленя
        deerX += deerSpeed * deerDirection;

        // Перевіряємо межі та переходимо до зупинки
        if (deerX >= deerMaxX && deerDirection === 1) {
          // Досягли правого краю - зупиняємося
          deerX = deerMaxX;
          deerState = DEER_STATE.IDLE;
          idleTimer = 0;
          // Генеруємо випадкову тривалість зупинки від 1 до 3 секунд
          idleDuration = Math.floor(Math.random() * (IDLE_MAX_DURATION - IDLE_MIN_DURATION + 1)) + IDLE_MIN_DURATION;
        } else if (deerX <= deerMinX && deerDirection === -1) {
          // Досягли лівого краю - зупиняємося
          deerX = deerMinX;
          deerState = DEER_STATE.IDLE;
          idleTimer = 0;
          // Генеруємо випадкову тривалість зупинки від 1 до 3 секунд
          idleDuration = Math.floor(Math.random() * (IDLE_MAX_DURATION - IDLE_MIN_DURATION + 1)) + IDLE_MIN_DURATION;
        }
      } else if (deerState === DEER_STATE.IDLE) {
        idleTimer++;

        // Після завершення зупинки змінюємо напрямок та переходимо до ходьби
        if (idleTimer >= idleDuration) {
          deerDirection *= -1; // Змінюємо напрямок (вліво ↔ вправо)
          deerState = DEER_STATE.WALKING;
          frameIndex = 0;
        }
      }

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwibWFpblBhZ2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJsb2FkZXIiLCJyZXN1bHRzVGFibGUiLCJyZXN1bHRzVGFibGVPdGhlciIsImhyTGVuZyIsImVuTGVuZyIsImxvY2FsZSIsImRlYnVnIiwiaGlkZUxvYWRlciIsImkxOG5EYXRhIiwidHJhbnNsYXRlU3RhdGUiLCJ1c2VySWQiLCJyZXF1ZXN0IiwibGluayIsImV4dHJhT3B0aW9ucyIsImZldGNoIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJvayIsIkVycm9yIiwianNvbiIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsInJlcG9ydEVycm9yIiwic3R5bGUiLCJkaXNwbGF5Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwic3RhcnRzV2l0aCIsIlByb21pc2UiLCJyZWplY3QiLCJjbGFzc0xpc3QiLCJhZGQiLCJib2R5Iiwib3ZlcmZsb3ciLCJyZW1vdmUiLCJpbml0IiwidHJ5RGV0ZWN0VXNlcklkIiwicXVpY2tDaGVja0FuZFJlbmRlciIsImluaXRJbmZpbml0ZVNjcm9sbCIsImluaXRQcm9ncmVzc0JhciIsImluaXRQYXJ0aWNpcGF0ZUNhbnZhcyIsImluaXRTbm93Zmxha2VzQ2FudmFzIiwic2V0VGltZW91dCIsImRyb3Bkb3ducyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZHJvcGRvd24iLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJvcGVuIiwic3VtbWFyeSIsInN1bW1hcnlSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwiY3VycmVudFNjcm9sbFkiLCJzY3JvbGxZIiwicGFnZVlPZmZzZXQiLCJ0YXJnZXRTY3JvbGxZIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic2Nyb2xsVG8iLCJNYXRoIiwibWF4IiwiYmVoYXZpb3IiLCJzdG9yZSIsInN0YXRlIiwiZ2V0U3RhdGUiLCJhdXRoIiwiaXNBdXRob3JpemVkIiwiaWQiLCJnX3VzZXJfaWQiLCJhdHRlbXB0cyIsIm1heEF0dGVtcHRzIiwiYXR0ZW1wdEludGVydmFsIiwid2FpdEZvclVzZXJJZCIsInJlc29sdmUiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImxvYWRUcmFuc2xhdGlvbnMiLCJ0cmFuc2xhdGUiLCJyZXBvcnREYXRhIiwib3JpZ2luIiwidXNlcmlkIiwiZXJyb3JUZXh0IiwidGV4dCIsIm1lc3NhZ2UiLCJ0eXBlIiwibmFtZSIsInN0YWNrIiwibWV0aG9kIiwiSlNPTiIsInN0cmluZ2lmeSIsIndhcm4iLCJlbGVtcyIsImxlbmd0aCIsImVsZW0iLCJrZXkiLCJnZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJyZW1vdmVBdHRyaWJ1dGUiLCJsb2ciLCJyZWZyZXNoTG9jYWxpemVkQ2xhc3MiLCJlbGVtZW50IiwibGFuZyIsInJlbmRlclVzZXJzIiwid2Vla051bSIsInVzZXJEYXRhIiwiTnVtYmVyIiwid2Vla09iaiIsImZpbmQiLCJ3Iiwid2VlayIsImRhdGEiLCJBcnJheSIsImlzQXJyYXkiLCJ1c2VycyIsImlzU3RhZ2VFbmRlZCIsIndpbm5lckFkZGl0aW9uYWxQcml6ZSIsInUiLCJ3aW5uZXIiLCJjdXJyZW50VXNlciIsInVzZXIiLCJpc1ZlcmlmaWVkVXNlciIsInBvaW50cyIsInBvcHVsYXRlVXNlcnNUYWJsZSIsImN1cnJlbnRVc2VySWQiLCJzZWNvbmRUYWJsZU90aGVyIiwic2Vjb25kVGFibGUiLCJpc1RvcEN1cnJlbnRVc2VyIiwic2xpY2UiLCJzb21lIiwidG9wVXNlcnNMZW5ndGgiLCJ0b3BVc2VycyIsImRpc3BsYXlVc2VyIiwiaXNDdXJyZW50VXNlciIsInRhYmxlIiwicmVuZGVyUm93Iiwib3B0aW9ucyIsImhpZ2hsaWdodCIsIm5laWdoYm9yIiwidXNlclJvdyIsImNyZWF0ZUVsZW1lbnQiLCJ1c2VyUGxhY2UiLCJpbmRleE9mIiwicHJpemVLZXkiLCJnZXRQcml6ZVRyYW5zbGF0aW9uS2V5IiwidHJhbnNsYXRlS2V5IiwibWFza1VzZXJJZCIsInRvRml4ZWQiLCJhcHBlbmQiLCJpbmRleCIsImNhbnZhcyIsInBlcmNlbnRFbGVtZW50IiwiY3R4IiwiZ2V0Q29udGV4dCIsImJhckhlaWdodCIsInNlZ21lbnRXaWR0aCIsInNlZ21lbnRIZWlnaHQiLCJzZWdtZW50R2FwIiwicGFkZGluZyIsInNlZ21lbnRSYWRpdXMiLCJjdXJyZW50UHJvZ3Jlc3MiLCJ0YXJnZXRQcm9ncmVzcyIsImFuaW1hdGlvbkR1cmF0aW9uIiwic3RhcnRUaW1lIiwiRGF0ZSIsIm5vdyIsImFuaW1hdGlvbklkIiwibWF4U2VnbWVudHMiLCJyZXNpemVDYW52YXMiLCJjb250YWluZXIiLCJwYXJlbnRFbGVtZW50IiwiY29udGFpbmVyV2lkdGgiLCJvZmZzZXRXaWR0aCIsIndpZHRoIiwiaGVpZ2h0IiwiYXZhaWxhYmxlV2lkdGgiLCJzZWdtZW50V2l0aEdhcCIsImZsb29yIiwiZHJhd1Byb2dyZXNzQmFyIiwicHJvZ3Jlc3MiLCJjbGVhclJlY3QiLCJzdHJva2VTdHlsZSIsImxpbmVXaWR0aCIsInN0cm9rZVJlY3QiLCJmaWxsZWRTZWdtZW50cyIsImZpbGxTdHlsZSIsImNlbnRlclkiLCJpIiwieCIsInkiLCJiZWdpblBhdGgiLCJyb3VuZFJlY3QiLCJyIiwibW92ZVRvIiwibGluZVRvIiwicXVhZHJhdGljQ3VydmVUbyIsImNsb3NlUGF0aCIsImZpbGwiLCJ1cGRhdGVQcm9ncmVzcyIsImVsYXBzZWQiLCJwZXJjZW50IiwidGV4dENvbnRlbnQiLCJyZXNpemVUaW1lb3V0IiwiY2xlYXJUaW1lb3V0Iiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJvYnNlcnZlIiwiQ0FOVkFTX1dJRFRIIiwiQ0FOVkFTX0hFSUdIVCIsIlRSRUVfV0lEVEgiLCJUUkVFX0hFSUdIVCIsIkRFRVJfV0lEVEgiLCJERUVSX0hFSUdIVCIsInNwcml0ZVNoZWV0V2lkdGgiLCJzcHJpdGVTaGVldEhlaWdodCIsImZyYW1lV2lkdGgiLCJmcmFtZUhlaWdodCIsIkZSQU1FU19QRVJfUk9XIiwiVE9UQUxfUk9XUyIsInRyZWVYIiwidHJlZVkiLCJkZWVyWCIsImRlZXJZIiwiZGVlckRpcmVjdGlvbiIsImRlZXJTcGVlZCIsImRlZXJNaW5YIiwiZGVlck1heFgiLCJERUVSX1NUQVRFIiwiV0FMS0lORyIsIklETEUiLCJkZWVyU3RhdGUiLCJmcmFtZUluZGV4IiwiZnJhbWVDb3VudGVyIiwiRlJBTUVfREVMQVkiLCJpZGxlVGltZXIiLCJpZGxlRHVyYXRpb24iLCJJRExFX01JTl9EVVJBVElPTiIsIklETEVfTUFYX0RVUkFUSU9OIiwiaW1hZ2VzIiwiYmFja2dyb3VuZCIsIkltYWdlIiwidHJlZSIsImRlZXJTcHJpdGUiLCJpbWFnZXNMb2FkZWQiLCJ0b3RhbEltYWdlcyIsIm9uSW1hZ2VMb2FkIiwiY29tcGxldGUiLCJkcmF3Q2FudmFzIiwic3RhcnRBbmltYXRpb24iLCJvbmxvYWQiLCJzcmMiLCJnZXRTcHJpdGVGcmFtZUluZGV4Iiwicm93IiwiY29sIiwiZHJhd0ltYWdlIiwic291cmNlWCIsInNvdXJjZVkiLCJhbmltYXRlIiwicmFuZG9tIiwiZmF2UGFnZSIsIlNOT1dGTEFLRV9DT1VOVCIsIlNOT1dGTEFLRV9NSU5fU0laRSIsIlNOT1dGTEFLRV9NQVhfU0laRSIsIlNOT1dGTEFLRV9NSU5fU1BFRUQiLCJTTk9XRkxBS0VfTUFYX1NQRUVEIiwiU05PV0ZMQUtFX1dJTkRfUkFOR0UiLCJTTk9XRkxBS0VfU1BBV05fSU5URVJWQUwiLCJzbm93Zmxha2VzIiwibGFzdFNub3dmbGFrZVRpbWUiLCJuZXdXaWR0aCIsIm5ld0hlaWdodCIsInJlY3QiLCJpbm5lcldpZHRoIiwib2Zmc2V0SGVpZ2h0IiwiY2xpZW50SGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJzbm93Zmxha2VJbWFnZSIsImltYWdlTG9hZGVkIiwid2FpdEZvclBhZ2VSZWFkeSIsImlzUGFnZUxvYWRpbmciLCJjb250YWlucyIsIlNub3dmbGFrZSIsInNpemUiLCJzcGVlZCIsIndpbmQiLCJvcGFjaXR5Iiwicm90YXRpb24iLCJQSSIsInJvdGF0aW9uU3BlZWQiLCJzaW4iLCJzYXZlIiwiZ2xvYmFsQWxwaGEiLCJyb3RhdGUiLCJyZXN0b3JlIiwiY3JlYXRlU25vd2ZsYWtlIiwicHVzaCIsInVwZGF0ZVNub3dmbGFrZXMiLCJ1cGRhdGUiLCJpc09mZlNjcmVlbiIsInNwbGljZSIsImRyYXdTbm93Zmxha2VzIiwic25vd2ZsYWtlIiwiZHJhdyIsInNjcm9sbEJsb2NrcyIsInNjcm9sbEJsb2NrIiwic2Nyb2xsQ29udGVudCIsInNjcm9sbFRleHQiLCJ0cmltIiwicGFkZGluZ1JpZ2h0IiwiZml4ZWRXaWR0aCIsImVsZW1lbnRzIiwiaXRlbUNvdW50IiwiY3VycmVudFdpZHRoIiwidGVtcEVsZW1lbnQiLCJjbGFzc05hbWUiLCJ2aXNpYmlsaXR5IiwicG9zaXRpb24iLCJ3aGl0ZVNwYWNlIiwiYXBwZW5kQ2hpbGQiLCJpdGVtV2lkdGgiLCJyZW1vdmVDaGlsZCIsIm1heEl0ZXJhdGlvbnMiLCJjZWlsIiwiaXRlcmF0aW9ucyIsInRleHRFbGVtZW50IiwiY29udGVudFdpZHRoIiwiY2xvbmVkRWxlbWVudCIsImNsb25lTm9kZSIsInRyYW5zZm9ybSIsImNvbXB1dGVkU3R5bGUiLCJnZXRDb21wdXRlZFN0eWxlIiwiaXNWaXNpYmxlIl0sIm1hcHBpbmdzIjoiOzs7K0NBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBLENBQUMsWUFBWTtFQUVULElBQU1BLE1BQU0sR0FBRyxzQ0FBc0M7RUFFckQsSUFBTUMsUUFBUSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxXQUFXLENBQUM7SUFDaERDLE1BQU0sR0FBR0YsUUFB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QUNBNU0scUJBQXFCLENBQUMsWUFBTTtRQUN4QjtRQUNBLElBQU1xUixhQUFhLEdBQUd2VCxNQUFNLENBQUN3VCxnQkFBZ0IsQ0FBQzFCLFdBQVcsQ0FBQztRQUMxRCxJQUFNMkIsU0FBUyxHQUFHRixhQUFhLENBQUN4VCxPQUFPLEtBQUssTUFBTSxJQUNqQ3dULGFBQWEsQ0FBQ2QsVUFBVSxLQUFLLFFBQVE7UUFFdEQsSUFBSWdCLFNBQVMsSUFBSU4sWUFBWSxHQUFHLENBQUMsRUFBRTtVQUMvQnJFLE9BQU8sRUFBRTtRQUNiLENBQUMsTUFBTTtVQUNIO1VBQ0E7VUFDQUEsT0FBTyxFQUFFO1FBQ2I7TUFDSixDQUFDLENBQUM7SUFDTixDQUFDLENBQUM7RUFDTjtFQUVBeEwsZ0JBQWdCLEVBQUUsQ0FDYmpFLElBQUksQ0FBQ3NCLElBQUksQ0FBQyxFQUFDOztFQU1oQjtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7QUFHSixDQUFDLEdBQUciLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XG5cbiAgICBjb25zdCBhcGlVUkwgPSAnaHR0cHM6Ly9mYXYtcHJvbS5jb20vYXBpX2JsYWNrX3ByaXplJ1xuXG4gICAgY29uc3QgbWFpblBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhdi1wYWdlXCIpLFxuICAgICAgICBsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNwaW5uZXItb3ZlcmxheVwiKSxcbiAgICAgICAgcmVzdWx0c1RhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YWJsZVwiKSxcbiAgICAgICAgcmVzdWx0c1RhYmxlT3RoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RhYmxlT3RoZXJcIilcblxuICAgIGNvbnN0IGhyTGVuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNockxlbmcnKTtcbiAgICBjb25zdCBlbkxlbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW5MZW5nJyk7XG5cbiAgICBsZXQgbG9jYWxlID0gXCJlblwiXG4gICAgLy8gbGV0IGxvY2FsZSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJsb2NhbGVcIikgfHwgXCJoclwiXG5cbiAgICBpZiAoaHJMZW5nKSBsb2NhbGUgPSAnaHInO1xuICAgIGlmIChlbkxlbmcpIGxvY2FsZSA9ICdlbic7XG5cbiAgICBsZXQgZGVidWcgPSBmYWxzZVxuXG4gICAgaWYgKGRlYnVnKSBoaWRlTG9hZGVyKClcblxuICAgIGxldCBpMThuRGF0YSA9IHt9O1xuICAgIGNvbnN0IHRyYW5zbGF0ZVN0YXRlID0gZmFsc2U7XG4gICAgbGV0IHVzZXJJZCA9IG51bGw7XG4gICAgLy8gbGV0IHVzZXJJZCA9IE51bWJlcihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpKSA/PyBudWxsXG5cbiAgICBjb25zdCByZXF1ZXN0ID0gZnVuY3Rpb24gKGxpbmssIGV4dHJhT3B0aW9ucykge1xuICAgICAgICByZXR1cm4gZmV0Y2goYXBpVVJMICsgbGluaywge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC4uLihleHRyYU9wdGlvbnMgfHwge30pXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghcmVzLm9rKSB0aHJvdyBuZXcgRXJyb3IoJ0FQSSBlcnJvcicpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0FQSSByZXF1ZXN0IGZhaWxlZDonLCBlcnIpO1xuXG4gICAgICAgICAgICAgICAgcmVwb3J0RXJyb3IoZXJyKTtcblxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXYtcGFnZScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLnN0YXJ0c1dpdGgoXCJodHRwczovL3d3dy5mYXZiZXQuaHIvXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9wcm9tb2NpamUvcHJvbW9jaWphL3N0dWIvJztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvcHJvbW9zL3Byb21vL3N0dWIvJztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlkZUxvYWRlcigpe1xuICAgICAgICBsb2FkZXIuY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiXG4gICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5yZW1vdmUoXCJsb2FkaW5nXCIpXG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgbGV0IGF0dGVtcHRzID0gMDtcbiAgICAgICAgY29uc3QgbWF4QXR0ZW1wdHMgPSAyMDtcbiAgICAgICAgY29uc3QgYXR0ZW1wdEludGVydmFsID0gNTA7XG5cbiAgICAgICAgZnVuY3Rpb24gdHJ5RGV0ZWN0VXNlcklkKCkge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5zdG9yZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gd2luZG93LnN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgICAgICAgICAgdXNlcklkID0gc3RhdGUuYXV0aC5pc0F1dGhvcml6ZWQgJiYgc3RhdGUuYXV0aC5pZCB8fCAnJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAod2luZG93LmdfdXNlcl9pZCkge1xuICAgICAgICAgICAgICAgIHVzZXJJZCA9IHdpbmRvdy5nX3VzZXJfaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBxdWlja0NoZWNrQW5kUmVuZGVyKCkge1xuICAgICAgICAgICAgaW5pdEluZmluaXRlU2Nyb2xsKCk7XG4gICAgICAgICAgICBpbml0UHJvZ3Jlc3NCYXIoKTtcbiAgICAgICAgICAgIGluaXRQYXJ0aWNpcGF0ZUNhbnZhcygpO1xuICAgICAgICAgICAgaW5pdFNub3dmbGFrZXNDYW52YXMoKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoaGlkZUxvYWRlciwgMzAwKTtcblxuICAgICAgICAgICAgLy8gRml4IGRyb3Bkb3duIHNjcm9sbCBpc3N1ZSAtIHByZXZlbnQgcGFnZSBmcm9tIHNoaWZ0aW5nIHVwIHdoZW4gb3BlbmluZyBkcm9wZG93blxuICAgICAgICAgICAgY29uc3QgZHJvcGRvd25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRyb3Bkb3duJyk7XG4gICAgICAgICAgICBkcm9wZG93bnMuZm9yRWFjaCgoZHJvcGRvd24pID0+IHtcbiAgICAgICAgICAgICAgICBkcm9wZG93bi5hZGRFdmVudExpc3RlbmVyKCd0b2dnbGUnLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5vcGVuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBEcm9wZG93biBpcyBvcGVuaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdW1tYXJ5ID0gdGhpcy5xdWVyeVNlbGVjdG9yKCdzdW1tYXJ5Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3VtbWFyeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEdldCBzdW1tYXJ5IHBvc2l0aW9uIHJlbGF0aXZlIHRvIHZpZXdwb3J0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3VtbWFyeVJlY3QgPSBzdW1tYXJ5LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgc3VtbWFyeSBpcyBuZWFyIHRoZSB0b3Agb2Ygdmlld3BvcnQgKHdpdGhpbiAxMDBweCBmcm9tIHRvcClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3VtbWFyeVJlY3QudG9wIDwgMTAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENhbGN1bGF0ZSBob3cgbXVjaCB0byBzY3JvbGwgdG8ga2VlcCBzdW1tYXJ5IHZpc2libGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFNjcm9sbFkgPSB3aW5kb3cuc2Nyb2xsWSB8fCB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldFNjcm9sbFkgPSBjdXJyZW50U2Nyb2xsWSArIHN1bW1hcnlSZWN0LnRvcCAtIDEyMDsgLy8gMTIwcHggb2Zmc2V0IGZyb20gdG9wXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVXNlIHJlcXVlc3RBbmltYXRpb25GcmFtZSBmb3Igc21vb3RoIHNjcm9sbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IE1hdGgubWF4KDAsIHRhcmdldFNjcm9sbFkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgd2FpdEZvclVzZXJJZCA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0cnlEZXRlY3RVc2VySWQoKTtcbiAgICAgICAgICAgICAgICBpZiAodXNlcklkIHx8IGF0dGVtcHRzID49IG1heEF0dGVtcHRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHF1aWNrQ2hlY2tBbmRSZW5kZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXR0ZW1wdHMrKztcbiAgICAgICAgICAgIH0sIGF0dGVtcHRJbnRlcnZhbCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGF3YWl0IHdhaXRGb3JVc2VySWQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9hZFRyYW5zbGF0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVlc3QoYC9uZXctdHJhbnNsYXRlcy8ke2xvY2FsZX1gKVxuICAgICAgICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgICAgICAgaTE4bkRhdGEgPSBqc29uO1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnN0IG11dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAobXV0YXRpb25zKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIG11dGF0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgICAgIC8vICAgICB0cmFuc2xhdGUoKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKHRhcmdldE5vZGUsIHsgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgICAgICAgIC8vIG11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhhcmRjb3JlVGVubmlzXCIpLCB7XG4gICAgICAgICAgICAgICAgLy8gICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAvLyAgICAgc3VidHJlZTogdHJ1ZVxuICAgICAgICAgICAgICAgIC8vIH0pO1xuXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXBvcnRFcnJvcihlcnIpIHtcbiAgICAgICAgY29uc3QgcmVwb3J0RGF0YSA9IHtcbiAgICAgICAgICAgIG9yaWdpbjogd2luZG93LmxvY2F0aW9uLmhyZWYsXG4gICAgICAgICAgICB1c2VyaWQ6IHVzZXJJZCxcbiAgICAgICAgICAgIGVycm9yVGV4dDogZXJyPy5lcnJvciB8fCBlcnI/LnRleHQgfHwgZXJyPy5tZXNzYWdlIHx8ICdVbmtub3duIGVycm9yJyxcbiAgICAgICAgICAgIHR5cGU6IGVycj8ubmFtZSB8fCAnVW5rbm93bkVycm9yJyxcbiAgICAgICAgICAgIHN0YWNrOiBlcnI/LnN0YWNrIHx8ICcnXG4gICAgICAgIH07XG5cbiAgICAgICAgZmV0Y2goJ2h0dHBzOi8vZmF2LXByb20uY29tL2FwaS1jbXMvcmVwb3J0cy9hZGQnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVwb3J0RGF0YSlcbiAgICAgICAgfSkuY2F0Y2goY29uc29sZS53YXJuKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmFuc2xhdGUoKSB7XG4gICAgICAgIGNvbnN0IGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdHJhbnNsYXRlXScpXG4gICAgICAgIGlmIChlbGVtcyAmJiBlbGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmKHRyYW5zbGF0ZVN0YXRlKXtcbiAgICAgICAgICAgICAgICBlbGVtcy5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbS5pbm5lckhUTUwgPSBpMThuRGF0YVtrZXldIHx8ICcqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qICAga2V5OiAgJyArIGtleTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkxOG5EYXRhW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidHJhbnNsYXRpb24gd29ya3MhXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxvY2FsZSA9PT0gJ2VuJykge1xuICAgICAgICAgICAgbWFpblBhZ2UuY2xhc3NMaXN0LmFkZCgnZW4nKTtcbiAgICAgICAgfVxuICAgICAgICByZWZyZXNoTG9jYWxpemVkQ2xhc3MobWFpblBhZ2UpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlZnJlc2hMb2NhbGl6ZWRDbGFzcyhlbGVtZW50KSB7XG4gICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgbGFuZyBvZiBbJ2hyJywgJ2VuJ10pIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShsYW5nKTtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQobG9jYWxlKTtcbiAgICB9XG5cblxuXG5cbiAgICBmdW5jdGlvbiByZW5kZXJVc2Vycyh3ZWVrTnVtLCB1c2VyRGF0YSA9IFtdKSB7XG4gICAgICAgIHdlZWtOdW0gPSBOdW1iZXIod2Vla051bSk7XG4gICAgICAgIGNvbnN0IHdlZWtPYmogPSB1c2VyRGF0YS5maW5kKHcgPT4gdy53ZWVrID09PSB3ZWVrTnVtKTtcbiAgICAgICAgaWYgKCF3ZWVrT2JqIHx8ICF3ZWVrT2JqLmRhdGEgfHwgIUFycmF5LmlzQXJyYXkod2Vla09iai5kYXRhLnVzZXJzKSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcign0J3QtdCy0ZbRgNC90LAg0YHRgtGA0YPQutGC0YPRgNCwINC00LDQvdC40YUnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGlzU3RhZ2VFbmRlZCA9IHdlZWtPYmouZGF0YS5pc1N0YWdlRW5kZWRcblxuICAgICAgICB1c2VyRGF0YSA9IHdlZWtPYmouZGF0YS51c2VycztcblxuICAgICAgICBjb25zdCB3aW5uZXJBZGRpdGlvbmFsUHJpemUgPSB1c2VyRGF0YS5maW5kKHUgPT4ge1xuICAgICAgICAgICAgaWYodS53aW5uZXIgPT09IHRydWUpe1xuICAgICAgICAgICAgICAgIHJldHVybiB1XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgY29uc3QgY3VycmVudFVzZXIgPSB1c2VyRGF0YS5maW5kKHVzZXIgPT4gdXNlci51c2VyaWQgPT09IHVzZXJJZCk7XG5cbiAgICAgICAgaWYodXNlcklkICYmICFjdXJyZW50VXNlciAmJiBpc1ZlcmlmaWVkVXNlcil7XG4gICAgICAgICAgICB1c2VyRGF0YSA9IFsuLi51c2VyRGF0YSwge3VzZXJpZDogdXNlcklkLCBwb2ludHM6IDB9XVxuICAgICAgICB9XG4gICAgICAgIHBvcHVsYXRlVXNlcnNUYWJsZSh1c2VyRGF0YSwgdXNlcklkLCB3ZWVrTnVtLCBjdXJyZW50VXNlciwgaXNWZXJpZmllZFVzZXIsIGlzU3RhZ2VFbmRlZCwgd2lubmVyQWRkaXRpb25hbFByaXplKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwb3B1bGF0ZVVzZXJzVGFibGUodXNlcnMsIGN1cnJlbnRVc2VySWQsIHdlZWssIGN1cnJlbnRVc2VyLCBpc1ZlcmlmaWVkVXNlciwgaXNTdGFnZUVuZGVkLCB3aW5uZXJBZGRpdGlvbmFsUHJpemUpIHtcbiAgICAgICAgaWYgKCF1c2Vycz8ubGVuZ3RoKSByZXR1cm47XG4gICAgICAgIHJlc3VsdHNUYWJsZS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgcmVzdWx0c1RhYmxlT3RoZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHNlY29uZFRhYmxlT3RoZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHNlY29uZFRhYmxlLmlubmVySFRNTCA9ICcnO1xuXG5cbiAgICAgICAgY29uc3QgaXNUb3BDdXJyZW50VXNlciA9IGN1cnJlbnRVc2VyICYmIHVzZXJzLnNsaWNlKDAsIDEwKS5zb21lKHVzZXIgPT4gdXNlci51c2VyaWQgPT09IGN1cnJlbnRVc2VySWQpO1xuXG4gICAgICAgIGNvbnN0IHRvcFVzZXJzTGVuZ3RoID0gIXVzZXJJZCB8fCBpc1RvcEN1cnJlbnRVc2VyICA/IDEwIDogMTA7XG5cbiAgICAgICAgY29uc3QgdG9wVXNlcnMgPSB1c2Vycy5zbGljZSgwLCB0b3BVc2Vyc0xlbmd0aCk7XG5cbiAgICAgICAgdG9wVXNlcnMuZm9yRWFjaCh1c2VyID0+IHtcbiAgICAgICAgICAgIGRpc3BsYXlVc2VyKHVzZXIsIHVzZXIudXNlcmlkID09PSBjdXJyZW50VXNlcklkLCByZXN1bHRzVGFibGUsIHRvcFVzZXJzLCBpc1RvcEN1cnJlbnRVc2VyLCB3ZWVrKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmKGlzVmVyaWZpZWRVc2VyICYmICFjdXJyZW50VXNlcikge1xuICAgICAgICAgICAgZGlzcGxheVVzZXIoY3VycmVudFVzZXIsIHRydWUsIHJlc3VsdHNUYWJsZU90aGVyLCB1c2VycywgZmFsc2UsIHdlZWspO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFpc1RvcEN1cnJlbnRVc2VyICYmIGN1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgICBkaXNwbGF5VXNlcihjdXJyZW50VXNlciwgdHJ1ZSwgcmVzdWx0c1RhYmxlT3RoZXIsIHVzZXJzLCBmYWxzZSwgd2Vlayk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5VXNlcih1c2VyLCBpc0N1cnJlbnRVc2VyLCB0YWJsZSwgdXNlcnMsIGlzVG9wQ3VycmVudFVzZXIsIHdlZWspIHtcblxuICAgICAgICBjb25zdCByZW5kZXJSb3cgPSAodXNlckRhdGEsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBoaWdobGlnaHQgPSBmYWxzZSwgbmVpZ2hib3IgPSBmYWxzZSB9ID0gb3B0aW9ucztcbiAgICAgICAgICAgIGNvbnN0IHVzZXJSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZCgndGFibGVfX3JvdycpO1xuXG4gICAgICAgICAgICBjb25zdCB1c2VyUGxhY2UgPSB1c2Vycy5pbmRleE9mKHVzZXJEYXRhKSArIDE7XG4gICAgICAgICAgICBjb25zdCBwcml6ZUtleSA9IGRlYnVnID8gbnVsbCA6IGdldFByaXplVHJhbnNsYXRpb25LZXkodXNlclBsYWNlLCB3ZWVrKTtcblxuICAgICAgICAgICAgaWYgKHVzZXJQbGFjZSA8PSAzKSB7XG4gICAgICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKGBwbGFjZSR7dXNlclBsYWNlfWApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaGlnaGxpZ2h0IHx8IGlzQ3VycmVudFVzZXIgJiYgIW5laWdoYm9yKSB7XG4gICAgICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKCd5b3UnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmVpZ2hib3IpIHtcbiAgICAgICAgICAgICAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoJ19uZWlnaGJvcicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1c2VyUm93LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke3VzZXJQbGFjZSA8IDEwID8gJzAnICsgdXNlclBsYWNlIDogdXNlclBsYWNlfVxuICAgICAgICAgICAgICAgICR7aXNDdXJyZW50VXNlciAmJiAhbmVpZ2hib3IgPyAnPHNwYW4gY2xhc3M9XCJ5b3VcIj4nICsgdHJhbnNsYXRlS2V5KFwieW91XCIpICsgJzwvc3Bhbj4nIDogJyd9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke2lzQ3VycmVudFVzZXIgJiYgIW5laWdoYm9yID8gdXNlckRhdGEudXNlcmlkIDogbWFza1VzZXJJZCh1c2VyRGF0YS51c2VyaWQpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHtOdW1iZXIodXNlckRhdGEucG9pbnRzKS50b0ZpeGVkKDIpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHtwcml6ZUtleSA/IHRyYW5zbGF0ZUtleShwcml6ZUtleSkgOiAnIC0gJ31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuXG4gICAgICAgICAgICB0YWJsZS5hcHBlbmQodXNlclJvdyk7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChpc0N1cnJlbnRVc2VyICYmICFpc1RvcEN1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHVzZXJzLmluZGV4T2YodXNlcik7XG4gICAgICAgICAgICBpZiAodXNlcnNbaW5kZXggLSAxXSkge1xuICAgICAgICAgICAgICAgIHJlbmRlclJvdyh1c2Vyc1tpbmRleCAtIDFdLCB7IG5laWdoYm9yOiB0cnVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVuZGVyUm93KHVzZXIsIHsgaGlnaGxpZ2h0OiB0cnVlIH0pO1xuICAgICAgICAgICAgaWYgKHVzZXJzW2luZGV4ICsgMV0pIHtcbiAgICAgICAgICAgICAgICByZW5kZXJSb3codXNlcnNbaW5kZXggKyAxXSwgeyBuZWlnaGJvcjogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlbmRlclJvdyh1c2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluaXRQcm9ncmVzc0JhcigpIHtcbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2dyZXNzQmFyQ2FudmFzJyk7XG4gICAgICAgIGNvbnN0IHBlcmNlbnRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2dyZXNzUGVyY2VudCcpO1xuICAgICAgICBpZiAoIWNhbnZhcyB8fCAhcGVyY2VudEVsZW1lbnQpIHJldHVybjtcblxuICAgICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgXG4gICAgICAgIC8vINCa0L7QvdGB0YLQsNC90YLQuFxuICAgICAgICBjb25zdCBiYXJIZWlnaHQgPSAyMDsgLy8g0JLQuNGB0L7RgtCwINC/0YDQvtCz0YDQtdGBLdCx0LDRgNGDXG4gICAgICAgIGNvbnN0IHNlZ21lbnRXaWR0aCA9IDQ7IC8vINCo0LjRgNC40L3QsCDQvtC00L3QvtCz0L4g0YHQtdCz0LzQtdC90YLQsFxuICAgICAgICBjb25zdCBzZWdtZW50SGVpZ2h0ID0gMTQ7IC8vINCS0LjRgdC+0YLQsCDQvtC00L3QvtCz0L4g0YHQtdCz0LzQtdC90YLQsFxuICAgICAgICBjb25zdCBzZWdtZW50R2FwID0gMjsgLy8g0J/RgNC+0LzRltC20L7QuiDQvNGW0LYg0YHQtdCz0LzQtdC90YLQsNC80LhcbiAgICAgICAgY29uc3QgcGFkZGluZyA9IDI7IC8vINCS0ZbQtNGB0YLRg9C/INCy0ZbQtCDQutGA0LDRl9CyXG4gICAgICAgIGNvbnN0IHNlZ21lbnRSYWRpdXMgPSAxOyAvLyBCb3JkZXIgcmFkaXVzINC00LvRjyDRgdC10LPQvNC10L3RgtGW0LJcbiAgICAgICAgXG4gICAgICAgIC8vINCf0LDRgNCw0LzQtdGC0YDQuCDQsNC90ZbQvNCw0YbRltGXXG4gICAgICAgIGxldCBjdXJyZW50UHJvZ3Jlc3MgPSAwOyAvLyDQn9C+0YLQvtGH0L3QuNC5INC/0YDQvtCz0YDQtdGBICgwLTEwMClcbiAgICAgICAgY29uc3QgdGFyZ2V0UHJvZ3Jlc3MgPSAxMDA7IC8vINCm0ZbQu9GM0L7QstC40Lkg0L/RgNC+0LPRgNC10YFcbiAgICAgICAgY29uc3QgYW5pbWF0aW9uRHVyYXRpb24gPSA2MDAwMDsgLy8g0KLRgNC40LLQsNC70ZbRgdGC0Ywg0LDQvdGW0LzQsNGG0ZbRlyDQsiDQvNGW0LvRltGB0LXQutGD0L3QtNCw0YVcbiAgICAgICAgbGV0IHN0YXJ0VGltZSA9IERhdGUubm93KCk7XG4gICAgICAgIGxldCBhbmltYXRpb25JZCA9IG51bGw7XG4gICAgICAgIGxldCBtYXhTZWdtZW50cyA9IDA7XG4gICAgICAgIFxuICAgICAgICBmdW5jdGlvbiByZXNpemVDYW52YXMoKSB7XG4gICAgICAgICAgICAvLyDQntGC0YDQuNC80YPRlNC80L4g0YDQvtC30LzRltGA0Lgg0LrQvtC90YLQtdC50L3QtdGA0LBcbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGNhbnZhcy5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgY29uc3QgY29udGFpbmVyV2lkdGggPSBjb250YWluZXIub2Zmc2V0V2lkdGggfHwgNzY4O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQktGB0YLQsNC90L7QstC70Y7RlNC80L4g0YDQvtC30LzRltGA0LggY2FudmFzXG4gICAgICAgICAgICBjYW52YXMud2lkdGggPSBjb250YWluZXJXaWR0aDtcbiAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSBiYXJIZWlnaHQ7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCg0L7Qt9GA0LDRhdC+0LLRg9GU0LzQviDQutGW0LvRjNC60ZbRgdGC0Ywg0YHQtdCz0LzQtdC90YLRltCyLCDRidC+INC/0L7QvNGW0YHRgtGP0YLRjNGB0Y9cbiAgICAgICAgICAgIGNvbnN0IGF2YWlsYWJsZVdpZHRoID0gY29udGFpbmVyV2lkdGggLSAocGFkZGluZyAqIDIpO1xuICAgICAgICAgICAgY29uc3Qgc2VnbWVudFdpdGhHYXAgPSBzZWdtZW50V2lkdGggKyBzZWdtZW50R2FwO1xuICAgICAgICAgICAgbWF4U2VnbWVudHMgPSBNYXRoLmZsb29yKGF2YWlsYWJsZVdpZHRoIC8gc2VnbWVudFdpdGhHYXApO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQn9C10YDQtdC80LDQu9GM0L7QstGD0ZTQvNC+INC3INC/0L7RgtC+0YfQvdC40Lwg0L/RgNC+0LPRgNC10YHQvtC8XG4gICAgICAgICAgICBpZiAoY3VycmVudFByb2dyZXNzID4gMCkge1xuICAgICAgICAgICAgICAgIGRyYXdQcm9ncmVzc0JhcihjdXJyZW50UHJvZ3Jlc3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBmdW5jdGlvbiBkcmF3UHJvZ3Jlc3NCYXIocHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgIC8vINCe0YfQuNGJ0LDRlNC80L4gY2FudmFzXG4gICAgICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCc0LDQu9GO0ZTQvNC+INGA0LDQvNC60YMgKNCx0ZbQu9C40Lkg0L/RgNGP0LzQvtC60YPRgtC90LjQuilcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICcjRkZGRkZGJztcbiAgICAgICAgICAgIGN0eC5saW5lV2lkdGggPSAxO1xuICAgICAgICAgICAgY3R4LnN0cm9rZVJlY3QoMC41LCAwLjUsIGNhbnZhcy53aWR0aCAtIDEsIGNhbnZhcy5oZWlnaHQgLSAxKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0KDQvtC30YDQsNGF0L7QstGD0ZTQvNC+INC60ZbQu9GM0LrRltGB0YLRjCDQt9Cw0L/QvtCy0L3QtdC90LjRhSDRgdC10LPQvNC10L3RgtGW0LJcbiAgICAgICAgICAgIGNvbnN0IGZpbGxlZFNlZ21lbnRzID0gTWF0aC5mbG9vcigocHJvZ3Jlc3MgLyAxMDApICogbWF4U2VnbWVudHMpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQnNCw0LvRjtGU0LzQviDQt9Cw0L/QvtCy0L3QtdC90ZYg0YHQtdCz0LzQtdC90YLQuCDQtyDQt9Cw0L7QutGA0YPQs9C70LXQvdC40LzQuCDQutGD0YLQsNC80LhcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSAnI0ZGRkZGRic7XG4gICAgICAgICAgICBjb25zdCBjZW50ZXJZID0gKGJhckhlaWdodCAtIHNlZ21lbnRIZWlnaHQpIC8gMjsgLy8g0JLQtdGA0YLQuNC60LDQu9GM0L3QtSDRhtC10L3RgtGA0YPQstCw0L3QvdGPXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsbGVkU2VnbWVudHM7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHggPSBwYWRkaW5nICsgaSAqIChzZWdtZW50V2lkdGggKyBzZWdtZW50R2FwKTtcbiAgICAgICAgICAgICAgICBjb25zdCB5ID0gY2VudGVyWTtcblxuICAgICAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICBpZiAoY3R4LnJvdW5kUmVjdCkge1xuICAgICAgICAgICAgICAgICAgICAvLyDQodGD0YfQsNGB0L3QuNC5INC80LXRgtC+0LQgKNC/0ZbQtNGC0YDQuNC80YPRlNGC0YzRgdGPINCyINC90L7QstC40YUg0LHRgNCw0YPQt9C10YDQsNGFKVxuICAgICAgICAgICAgICAgICAgICBjdHgucm91bmRSZWN0KHgsIHksIHNlZ21lbnRXaWR0aCwgc2VnbWVudEhlaWdodCwgc2VnbWVudFJhZGl1cyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gRmFsbGJhY2sg0LTQu9GPINGB0YLQsNGA0LjRhSDQsdGA0LDRg9C30LXRgNGW0LJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgciA9IHNlZ21lbnRSYWRpdXM7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5tb3ZlVG8oeCArIHIsIHkpO1xuICAgICAgICAgICAgICAgICAgICBjdHgubGluZVRvKHggKyBzZWdtZW50V2lkdGggLSByLCB5KTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCArIHNlZ21lbnRXaWR0aCwgeSwgeCArIHNlZ21lbnRXaWR0aCwgeSArIHIpO1xuICAgICAgICAgICAgICAgICAgICBjdHgubGluZVRvKHggKyBzZWdtZW50V2lkdGgsIHkgKyBzZWdtZW50SGVpZ2h0IC0gcik7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHggKyBzZWdtZW50V2lkdGgsIHkgKyBzZWdtZW50SGVpZ2h0LCB4ICsgc2VnbWVudFdpZHRoIC0gciwgeSArIHNlZ21lbnRIZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICBjdHgubGluZVRvKHggKyByLCB5ICsgc2VnbWVudEhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHgsIHkgKyBzZWdtZW50SGVpZ2h0LCB4LCB5ICsgc2VnbWVudEhlaWdodCAtIHIpO1xuICAgICAgICAgICAgICAgICAgICBjdHgubGluZVRvKHgsIHkgKyByKTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCwgeSwgeCArIHIsIHkpO1xuICAgICAgICAgICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZVByb2dyZXNzKCkge1xuICAgICAgICAgICAgY29uc3QgZWxhcHNlZCA9IERhdGUubm93KCkgLSBzdGFydFRpbWU7XG4gICAgICAgICAgICBsZXQgcHJvZ3Jlc3MgPSAoZWxhcHNlZCAvIGFuaW1hdGlvbkR1cmF0aW9uKSAqIDEwMDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0JfQsNGG0LjQutC70LXQvdC90Y86INGP0LrRidC+INC00L7RgdGP0LPQu9C4IDEwMCUsINC/0L7Rh9C40L3QsNGU0LzQviDQt9C90L7QstGDINC3IDAlXG4gICAgICAgICAgICBpZiAocHJvZ3Jlc3MgPj0gdGFyZ2V0UHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgICAgICBwcm9ncmVzcyA9IDA7XG4gICAgICAgICAgICAgICAgc3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY3VycmVudFByb2dyZXNzID0gcHJvZ3Jlc3M7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCe0L3QvtCy0LvRjtGU0LzQviDQstGW0LTQvtCx0YDQsNC20LXQvdC90Y9cbiAgICAgICAgICAgIGRyYXdQcm9ncmVzc0Jhcihwcm9ncmVzcyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCe0L3QvtCy0LvRjtGU0LzQviDQstGW0LTRgdC+0YLQutC4ICjRgtGW0LvRjNC60Lgg0YbRltC70ZYg0YfQuNGB0LvQsClcbiAgICAgICAgICAgIGNvbnN0IHBlcmNlbnQgPSBNYXRoLmZsb29yKHByb2dyZXNzKTtcbiAgICAgICAgICAgIHBlcmNlbnRFbGVtZW50LnRleHRDb250ZW50ID0gcGVyY2VudCArICclJztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0J/RgNC+0LTQvtCy0LbRg9GU0LzQviDQsNC90ZbQvNCw0YbRltGOINCx0LXQt9C60ZbQvdC10YfQvdC+XG4gICAgICAgICAgICBhbmltYXRpb25JZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGVQcm9ncmVzcyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vINCG0L3RltGG0ZbQsNC70ZbQt9GD0ZTQvNC+INGA0L7Qt9C80ZbRgNC4IGNhbnZhc1xuICAgICAgICByZXNpemVDYW52YXMoKTtcbiAgICAgICAgXG4gICAgICAgIC8vINCe0LHRgNC+0LHQutCwINC30LzRltC90Lgg0YDQvtC30LzRltGA0YMg0LLRltC60L3QsFxuICAgICAgICBsZXQgcmVzaXplVGltZW91dDtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChyZXNpemVUaW1lb3V0KTtcbiAgICAgICAgICAgIHJlc2l6ZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICByZXNpemVDYW52YXMoKTtcbiAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgLy8g0JfQsNC/0YPRgdC60LDRlNC80L4g0LDQvdGW0LzQsNGG0ZbRjiDQtyDQvdC10LLQtdC70LjQutC+0Y4g0LfQsNGC0YDQuNC80LrQvtGOINC00LvRjyDQutC+0YDQtdC60YLQvdC+0LPQviDRgNC+0LfRgNCw0YXRg9C90LrRgyDRgNC+0LfQvNGW0YDRltCyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc2l6ZUNhbnZhcygpO1xuICAgICAgICAgICAgICAgIHN0YXJ0VGltZSA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgdXBkYXRlUHJvZ3Jlc3MoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIC8vINCX0YPQv9C40L3Rj9GU0LzQviDQsNC90ZbQvNCw0YbRltGOINC/0YDQuCDQstC40YXQvtC00ZYg0Lcgdmlld3BvcnRcbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICAgICAgICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghYW5pbWF0aW9uSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vINCS0ZbQtNC90L7QstC70Y7RlNC80L4g0LDQvdGW0LzQsNGG0ZbRjiDQtyDQv9C+0YLQvtGH0L3QvtCz0L4g0L/RgNC+0LPRgNC10YHRg1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRUaW1lID0gRGF0ZS5ub3coKSAtIChjdXJyZW50UHJvZ3Jlc3MgLyAxMDApICogYW5pbWF0aW9uRHVyYXRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVQcm9ncmVzcygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFuaW1hdGlvbklkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShhbmltYXRpb25JZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25JZCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGNhbnZhcyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdFBhcnRpY2lwYXRlQ2FudmFzKCkge1xuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGFydGljaXBhdGVDYW52YXMnKTtcbiAgICAgICAgaWYgKCFjYW52YXMpIHJldHVybjtcblxuICAgICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgY2FudmFzLndpZHRoID0gMTM2NjtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IDUwMDtcblxuICAgICAgICAvLyDQmtC+0L3RgdGC0LDQvdGC0Lgg0LTQu9GPINGA0L7Qt9C80ZbRgNGW0LIg0YLQsCDQv9C+0LfQuNGG0ZbQuVxuICAgICAgICBjb25zdCBDQU5WQVNfV0lEVEggPSAxMzY2O1xuICAgICAgICBjb25zdCBDQU5WQVNfSEVJR0hUID0gNTAwO1xuICAgICAgICBjb25zdCBUUkVFX1dJRFRIID0gMTc1O1xuICAgICAgICBjb25zdCBUUkVFX0hFSUdIVCA9IDE2NztcbiAgICAgICAgY29uc3QgREVFUl9XSURUSCA9IDExMDtcbiAgICAgICAgY29uc3QgREVFUl9IRUlHSFQgPSAxMTc7XG5cbiAgICAgICAgLy8g0J/QsNGA0LDQvNC10YLRgNC4INGB0L/RgNCw0LnRgi3Qu9C40YHRgtCwICjQsdGD0LTRg9GC0Ywg0LLQuNC30L3QsNGH0LXQvdGWINC/0ZbRgdC70Y8g0LfQsNCy0LDQvdGC0LDQttC10L3QvdGPKVxuICAgICAgICBsZXQgc3ByaXRlU2hlZXRXaWR0aCA9IDA7XG4gICAgICAgIGxldCBzcHJpdGVTaGVldEhlaWdodCA9IDA7XG4gICAgICAgIGxldCBmcmFtZVdpZHRoID0gMDtcbiAgICAgICAgbGV0IGZyYW1lSGVpZ2h0ID0gMDtcbiAgICAgICAgY29uc3QgRlJBTUVTX1BFUl9ST1cgPSA2OyAvLyA2INC60LDQtNGA0ZbQsiDQsiDRgNGP0LTQutGDXG4gICAgICAgIGNvbnN0IFRPVEFMX1JPV1MgPSAyOyAvLyAyINGA0Y/QtNC4XG5cbiAgICAgICAgLy8g0J/QvtC30LjRhtGW0Zcg0LXQu9C10LzQtdC90YLRltCyXG4gICAgICAgIGNvbnN0IHRyZWVYID0gQ0FOVkFTX1dJRFRIIC8gMiAtIDMwMDsgLy8g0KLRgNC+0YXQuCDQu9GW0LLRltGI0LUg0LLRltC0INGG0LXQvdGC0YDRg1xuICAgICAgICBjb25zdCB0cmVlWSA9IENBTlZBU19IRUlHSFQgLyAyIC0gVFJFRV9IRUlHSFQgLyAyO1xuICAgICAgICBcbiAgICAgICAgLy8g0J/QvtGH0LDRgtC60L7QstCwINC/0L7Qt9C40YbRltGPINC+0LvQtdC90Y8gKNC/0YDQsNCy0ZbRiNC1INCy0ZbQtCDRj9C70LjQvdC60LgpXG4gICAgICAgIGxldCBkZWVyWCA9IENBTlZBU19XSURUSCAvIDIgKyA1MDtcbiAgICAgICAgbGV0IGRlZXJZID0gQ0FOVkFTX0hFSUdIVCAvIDIgLSBERUVSX0hFSUdIVCAvIDI7XG4gICAgICAgIFxuICAgICAgICAvLyDQn9Cw0YDQsNC80LXRgtGA0Lgg0LDQvdGW0LzQsNGG0ZbRl1xuICAgICAgICBsZXQgZGVlckRpcmVjdGlvbiA9IC0xOyAvLyAtMSA9INCy0LvRltCy0L4gKNC/0L7Rh9C40L3QsNGU0LzQviDQtyDRgNGD0YXRgyDQstC70ZbQstC+KSwgMSA9INCy0L/RgNCw0LLQvlxuICAgICAgICBjb25zdCBkZWVyU3BlZWQgPSAwLjU7IC8vINCo0LLQuNC00LrRltGB0YLRjCDRgNGD0YXRg1xuICAgICAgICBjb25zdCBkZWVyTWluWCA9IENBTlZBU19XSURUSCAvIDIgLSAyMDA7IC8vINCc0ZbQvdGW0LzQsNC70YzQvdCwINC/0L7Qt9C40YbRltGPICjQu9GW0LLQvtGA0YPRhylcbiAgICAgICAgY29uc3QgZGVlck1heFggPSBDQU5WQVNfV0lEVEggLyAyICsgMzAwOyAvLyDQnNCw0LrRgdC40LzQsNC70YzQvdCwINC/0L7Qt9C40YbRltGPICjQv9GA0LDQstC+0YDRg9GHKVxuICAgICAgICBsZXQgYW5pbWF0aW9uSWQgPSBudWxsO1xuXG4gICAgICAgIC8vINCh0YLQsNC90Lgg0LDQvdGW0LzQsNGG0ZbRlyDQvtC70LXQvdGPXG4gICAgICAgIGNvbnN0IERFRVJfU1RBVEUgPSB7XG4gICAgICAgICAgICBXQUxLSU5HOiAnd2Fsa2luZycsXG4gICAgICAgICAgICBJRExFOiAnaWRsZSdcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IGRlZXJTdGF0ZSA9IERFRVJfU1RBVEUuV0FMS0lORztcbiAgICAgICAgbGV0IGZyYW1lSW5kZXggPSAwOyAvLyDQhtC90LTQtdC60YEg0L/QvtGC0L7Rh9C90L7Qs9C+INC60LDQtNGA0YMg0LTQu9GPINGF0L7QtNGM0LHQuFxuICAgICAgICBsZXQgZnJhbWVDb3VudGVyID0gMDsgLy8g0JvRltGH0LjQu9GM0L3QuNC6INC00LvRjyDQutC+0L3RgtGA0L7Qu9GOINGI0LLQuNC00LrQvtGB0YLRliDQsNC90ZbQvNCw0YbRltGXXG4gICAgICAgIGNvbnN0IEZSQU1FX0RFTEFZID0gODsgLy8g0JfQsNGC0YDQuNC80LrQsCDQvNGW0LYg0LrQsNC00YDQsNC80LggKNC80LXQvdGI0LUgPSDRiNCy0LjQtNGI0LUpXG4gICAgICAgIGxldCBpZGxlVGltZXIgPSAwOyAvLyDQotCw0LnQvNC10YAg0LTQu9GPINC30YPQv9C40L3QutC4XG4gICAgICAgIGxldCBpZGxlRHVyYXRpb24gPSAwOyAvLyDQotGA0LjQstCw0LvRltGB0YLRjCDQt9GD0L/QuNC90LrQuCDQsiDQutCw0LTRgNCw0YUgKNCy0LjQv9Cw0LTQutC+0LLQsCDQstGW0LQgMSDQtNC+IDMg0YHQtdC60YPQvdC0KVxuICAgICAgICBjb25zdCBJRExFX01JTl9EVVJBVElPTiA9IDYwOyAvLyDQnNGW0L3RltC80LDQu9GM0L3QsCDRgtGA0LjQstCw0LvRltGB0YLRjCDQt9GD0L/QuNC90LrQuCAoMSDRgdC10LrRg9C90LTQsCDQv9GA0LggNjBmcHMpXG4gICAgICAgIGNvbnN0IElETEVfTUFYX0RVUkFUSU9OID0gMTgwOyAvLyDQnNCw0LrRgdC40LzQsNC70YzQvdCwINGC0YDQuNCy0LDQu9GW0YHRgtGMINC30YPQv9C40L3QutC4ICgzINGB0LXQutGD0L3QtNC4INC/0YDQuCA2MGZwcylcblxuICAgICAgICAvLyDQl9Cw0LLQsNC90YLQsNC20LXQvdC90Y8g0LfQvtCx0YDQsNC20LXQvdGMXG4gICAgICAgIGNvbnN0IGltYWdlcyA9IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IG5ldyBJbWFnZSgpLFxuICAgICAgICAgICAgdHJlZTogbmV3IEltYWdlKCksXG4gICAgICAgICAgICBkZWVyU3ByaXRlOiBuZXcgSW1hZ2UoKSAvLyDQodC/0YDQsNC50YIt0LvQuNGB0YIg0LfQsNC80ZbRgdGC0Ywg0L7QtNC90L7Qs9C+INC30L7QsdGA0LDQttC10L3QvdGPXG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IGltYWdlc0xvYWRlZCA9IDA7XG4gICAgICAgIGNvbnN0IHRvdGFsSW1hZ2VzID0gMztcblxuICAgICAgICBmdW5jdGlvbiBvbkltYWdlTG9hZCgpIHtcbiAgICAgICAgICAgIGltYWdlc0xvYWRlZCsrO1xuICAgICAgICAgICAgaWYgKGltYWdlc0xvYWRlZCA9PT0gdG90YWxJbWFnZXMpIHtcbiAgICAgICAgICAgICAgICAvLyDQktC40LfQvdCw0YfQsNGU0LzQviDRgNC+0LfQvNGW0YDQuCDQutCw0LTRgNGW0LIg0L/RltGB0LvRjyDQt9Cw0LLQsNC90YLQsNC20LXQvdC90Y8g0YHQv9GA0LDQudGCLdC70LjRgdGC0LBcbiAgICAgICAgICAgICAgICBpZiAoaW1hZ2VzLmRlZXJTcHJpdGUuY29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICAgICAgc3ByaXRlU2hlZXRXaWR0aCA9IGltYWdlcy5kZWVyU3ByaXRlLndpZHRoO1xuICAgICAgICAgICAgICAgICAgICBzcHJpdGVTaGVldEhlaWdodCA9IGltYWdlcy5kZWVyU3ByaXRlLmhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgZnJhbWVXaWR0aCA9IHNwcml0ZVNoZWV0V2lkdGggLyBGUkFNRVNfUEVSX1JPVztcbiAgICAgICAgICAgICAgICAgICAgZnJhbWVIZWlnaHQgPSBzcHJpdGVTaGVldEhlaWdodCAvIFRPVEFMX1JPV1M7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRyYXdDYW52YXMoKTtcbiAgICAgICAgICAgICAgICBzdGFydEFuaW1hdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaW1hZ2VzLmJhY2tncm91bmQub25sb2FkID0gb25JbWFnZUxvYWQ7XG4gICAgICAgIGltYWdlcy50cmVlLm9ubG9hZCA9IG9uSW1hZ2VMb2FkO1xuICAgICAgICBpbWFnZXMuZGVlclNwcml0ZS5vbmxvYWQgPSBvbkltYWdlTG9hZDtcblxuICAgICAgICBpbWFnZXMuYmFja2dyb3VuZC5zcmMgPSAnaW1nL3BhcnRpY2lwYXRlL2NhbnZhcy1iZy5wbmcnO1xuICAgICAgICBpbWFnZXMudHJlZS5zcmMgPSAnaW1nL3BhcnRpY2lwYXRlL3RyZWUucG5nJztcbiAgICAgICAgLy8g0JLQuNC60L7RgNC40YHRgtC+0LLRg9GU0LzQviDRgdC/0YDQsNC50YIt0LvQuNGB0YIgKNGP0LrRidC+INGE0LDQudC7INC90LDQt9C40LLQsNGU0YLRjNGB0Y8gZGVlci1zcHJpdGUucG5nLCDQt9C80ZbQvdGW0YLRjCDQvdCw0LfQstGDKVxuICAgICAgICBpbWFnZXMuZGVlclNwcml0ZS5zcmMgPSAnaW1nL3BhcnRpY2lwYXRlL2RlZXItc3ByaXRlLnBuZyc7XG5cbiAgICAgICAgLy8g0J7RgtGA0LjQvNGD0ZTQvNC+INGW0L3QtNC10LrRgSDQutCw0LTRgNGDINCyINGB0L/RgNCw0LnRgi3Qu9C40YHRgtGWXG4gICAgICAgIGZ1bmN0aW9uIGdldFNwcml0ZUZyYW1lSW5kZXgoKSB7XG4gICAgICAgICAgICBjb25zdCByb3cgPSBkZWVyRGlyZWN0aW9uID09PSAxID8gMCA6IDE7IC8vIDAgPSDQstC/0YDQsNCy0L4sIDEgPSDQstC70ZbQstC+XG4gICAgICAgICAgICBsZXQgY29sID0gMDtcblxuICAgICAgICAgICAgaWYgKGRlZXJTdGF0ZSA9PT0gREVFUl9TVEFURS5XQUxLSU5HKSB7XG4gICAgICAgICAgICAgICAgLy8g0JrQsNC00YDQuCDRhdC+0LTRjNCx0Lg6IDEsIDIgKNGW0L3QtNC10LrRgdC4IDEsIDIpXG4gICAgICAgICAgICAgICAgY29sID0gKGZyYW1lSW5kZXggJSAyKSArIDE7IC8vINCn0LXRgNCz0YPRlNC80L4g0LzRltC2INC60LDQtNGA0LDQvNC4IDEg0ZYgMlxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyDQodGC0LDQvSDQt9GD0L/QuNC90LrQuCAoSURMRSkgLSDQstC40LrQvtGA0LjRgdGC0L7QstGD0ZTQvNC+INC60LDQtNGAIDBcbiAgICAgICAgICAgICAgICBjb2wgPSAwOyAvLyBJZGxlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB7IHJvdywgY29sIH07XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBkcmF3Q2FudmFzKCkge1xuICAgICAgICAgICAgLy8g0J7Rh9C40YnQtdC90L3RjyBjYW52YXNcbiAgICAgICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgQ0FOVkFTX1dJRFRILCBDQU5WQVNfSEVJR0hUKTtcblxuICAgICAgICAgICAgLy8g0JzQsNC70Y7RlNC80L4g0YTQvtC9XG4gICAgICAgICAgICBpZiAoaW1hZ2VzLmJhY2tncm91bmQuY29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKGltYWdlcy5iYWNrZ3JvdW5kLCAwLCAwLCBDQU5WQVNfV0lEVEgsIENBTlZBU19IRUlHSFQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDQnNCw0LvRjtGU0LzQviDRj9C70LjQvdC60YMgKNGB0YLQsNGC0LjRh9C90LApXG4gICAgICAgICAgICBpZiAoaW1hZ2VzLnRyZWUuY29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKGltYWdlcy50cmVlLCB0cmVlWCwgdHJlZVksIFRSRUVfV0lEVEgsIFRSRUVfSEVJR0hUKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8g0JzQsNC70Y7RlNC80L4g0L7Qu9C10L3RjyDQt9GWINGB0L/RgNCw0LnRgi3Qu9C40YHRgtCwXG4gICAgICAgICAgICBpZiAoaW1hZ2VzLmRlZXJTcHJpdGUuY29tcGxldGUgJiYgZnJhbWVXaWR0aCA+IDAgJiYgZnJhbWVIZWlnaHQgPiAwKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyByb3csIGNvbCB9ID0gZ2V0U3ByaXRlRnJhbWVJbmRleCgpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vINCa0L7QvtGA0LTQuNC90LDRgtC4INC60LDQtNGA0YMg0LIg0YHQv9GA0LDQudGCLdC70LjRgdGC0ZZcbiAgICAgICAgICAgICAgICBjb25zdCBzb3VyY2VYID0gY29sICogZnJhbWVXaWR0aDtcbiAgICAgICAgICAgICAgICBjb25zdCBzb3VyY2VZID0gcm93ICogZnJhbWVIZWlnaHQ7XG5cbiAgICAgICAgICAgICAgICAvLyDQktC40YDRltC30LDRlNC80L4g0LrQsNC00YAg0LfRliDRgdC/0YDQsNC50YIt0LvQuNGB0YLQsCDRgtCwINC80LDQu9GO0ZTQvNC+INC90LAgY2FudmFzXG4gICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VzLmRlZXJTcHJpdGUsXG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZVgsIHNvdXJjZVksIGZyYW1lV2lkdGgsIGZyYW1lSGVpZ2h0LCAvLyDQlNC20LXRgNC10LvQviAo0YHQv9GA0LDQudGCLdC70LjRgdGCKVxuICAgICAgICAgICAgICAgICAgICBkZWVyWCwgZGVlclksIERFRVJfV0lEVEgsIERFRVJfSEVJR0hUIC8vINCf0YDQuNC30L3QsNGH0LXQvdC90Y8gKGNhbnZhcylcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbiAgICAgICAgICAgIGZyYW1lQ291bnRlcisrO1xuXG4gICAgICAgICAgICAvLyDQntC90L7QstC70Y7RlNC80L4g0LDQvdGW0LzQsNGG0ZbRjiDQutCw0LTRgNGW0LJcbiAgICAgICAgICAgIGlmIChmcmFtZUNvdW50ZXIgPj0gRlJBTUVfREVMQVkpIHtcbiAgICAgICAgICAgICAgICBmcmFtZUNvdW50ZXIgPSAwO1xuICAgICAgICAgICAgICAgIGlmIChkZWVyU3RhdGUgPT09IERFRVJfU1RBVEUuV0FMS0lORykge1xuICAgICAgICAgICAgICAgICAgICBmcmFtZUluZGV4ID0gKGZyYW1lSW5kZXggKyAxKSAlIDI7IC8vINCn0LXRgNCz0YPRlNC80L4g0LzRltC2INC60LDQtNGA0LDQvNC4IDAg0ZYgMVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8g0JvQvtCz0ZbQutCwINGB0YLQsNC90ZbQsiDRgtCwINGA0YPRhdGDXG4gICAgICAgICAgICBpZiAoZGVlclN0YXRlID09PSBERUVSX1NUQVRFLldBTEtJTkcpIHtcbiAgICAgICAgICAgICAgICAvLyDQntC90L7QstC70Y7RlNC80L4g0L/QvtC30LjRhtGW0Y4g0L7Qu9C10L3Rj1xuICAgICAgICAgICAgICAgIGRlZXJYICs9IGRlZXJTcGVlZCAqIGRlZXJEaXJlY3Rpb247XG5cbiAgICAgICAgICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNGP0ZTQvNC+INC80LXQttGWINGC0LAg0L/QtdGA0LXRhdC+0LTQuNC80L4g0LTQviDQt9GD0L/QuNC90LrQuFxuICAgICAgICAgICAgICAgIGlmIChkZWVyWCA+PSBkZWVyTWF4WCAmJiBkZWVyRGlyZWN0aW9uID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vINCU0L7RgdGP0LPQu9C4INC/0YDQsNCy0L7Qs9C+INC60YDQsNGOIC0g0LfRg9C/0LjQvdGP0ZTQvNC+0YHRj1xuICAgICAgICAgICAgICAgICAgICBkZWVyWCA9IGRlZXJNYXhYO1xuICAgICAgICAgICAgICAgICAgICBkZWVyU3RhdGUgPSBERUVSX1NUQVRFLklETEU7XG4gICAgICAgICAgICAgICAgICAgIGlkbGVUaW1lciA9IDA7XG4gICAgICAgICAgICAgICAgICAgIC8vINCT0LXQvdC10YDRg9GU0LzQviDQstC40L/QsNC00LrQvtCy0YMg0YLRgNC40LLQsNC70ZbRgdGC0Ywg0LfRg9C/0LjQvdC60Lgg0LLRltC0IDEg0LTQviAzINGB0LXQutGD0L3QtFxuICAgICAgICAgICAgICAgICAgICBpZGxlRHVyYXRpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoSURMRV9NQVhfRFVSQVRJT04gLSBJRExFX01JTl9EVVJBVElPTiArIDEpKSArIElETEVfTUlOX0RVUkFUSU9OO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZGVlclggPD0gZGVlck1pblggJiYgZGVlckRpcmVjdGlvbiA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g0JTQvtGB0Y/Qs9C70Lgg0LvRltCy0L7Qs9C+INC60YDQsNGOIC0g0LfRg9C/0LjQvdGP0ZTQvNC+0YHRj1xuICAgICAgICAgICAgICAgICAgICBkZWVyWCA9IGRlZXJNaW5YO1xuICAgICAgICAgICAgICAgICAgICBkZWVyU3RhdGUgPSBERUVSX1NUQVRFLklETEU7XG4gICAgICAgICAgICAgICAgICAgIGlkbGVUaW1lciA9IDA7XG4gICAgICAgICAgICAgICAgICAgIC8vINCT0LXQvdC10YDRg9GU0LzQviDQstC40L/QsNC00LrQvtCy0YMg0YLRgNC40LLQsNC70ZbRgdGC0Ywg0LfRg9C/0LjQvdC60Lgg0LLRltC0IDEg0LTQviAzINGB0LXQutGD0L3QtFxuICAgICAgICAgICAgICAgICAgICBpZGxlRHVyYXRpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoSURMRV9NQVhfRFVSQVRJT04gLSBJRExFX01JTl9EVVJBVElPTiArIDEpKSArIElETEVfTUlOX0RVUkFUSU9OO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGVlclN0YXRlID09PSBERUVSX1NUQVRFLklETEUpIHtcbiAgICAgICAgICAgICAgICBpZGxlVGltZXIrKztcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyDQn9GW0YHQu9GPINC30LDQstC10YDRiNC10L3QvdGPINC30YPQv9C40L3QutC4INC30LzRltC90Y7RlNC80L4g0L3QsNC/0YDRj9C80L7QuiDRgtCwINC/0LXRgNC10YXQvtC00LjQvNC+INC00L4g0YXQvtC00YzQsdC4XG4gICAgICAgICAgICAgICAgaWYgKGlkbGVUaW1lciA+PSBpZGxlRHVyYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgZGVlckRpcmVjdGlvbiAqPSAtMTsgLy8g0JfQvNGW0L3RjtGU0LzQviDQvdCw0L/RgNGP0LzQvtC6ICjQstC70ZbQstC+IOKGlCDQstC/0YDQsNCy0L4pXG4gICAgICAgICAgICAgICAgICAgIGRlZXJTdGF0ZSA9IERFRVJfU1RBVEUuV0FMS0lORztcbiAgICAgICAgICAgICAgICAgICAgZnJhbWVJbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDQn9C10YDQtdC80LDQu9GM0L7QstGD0ZTQvNC+IGNhbnZhc1xuICAgICAgICAgICAgZHJhd0NhbnZhcygpO1xuXG4gICAgICAgICAgICBhbmltYXRpb25JZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHN0YXJ0QW5pbWF0aW9uKCkge1xuICAgICAgICAgICAgaWYgKGFuaW1hdGlvbklkKSB7XG4gICAgICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uSWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYW5pbWF0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g0JfRg9C/0LjQvdGP0ZTQvNC+INCw0L3RltC80LDRhtGW0Y4g0L/RgNC4INCy0LjRhdC+0LTRliDQtyB2aWV3cG9ydCAo0L7Qv9GG0ZbQvtC90LDQu9GM0L3QvilcbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICAgICAgICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghYW5pbWF0aW9uSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QW5pbWF0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYW5pbWF0aW9uSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbklkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbklkID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGNhbnZhcyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdFNub3dmbGFrZXNDYW52YXMoKSB7XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzbm93Zmxha2VzQ2FudmFzJyk7XG4gICAgICAgIGlmICghY2FudmFzKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIGNvbnN0IGZhdlBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmF2LXBhZ2UnKTtcbiAgICAgICAgXG4gICAgICAgIC8vINCa0L7QvdGB0YLQsNC90YLQuFxuICAgICAgICBjb25zdCBTTk9XRkxBS0VfQ09VTlQgPSAxMDA7XG4gICAgICAgIGNvbnN0IFNOT1dGTEFLRV9NSU5fU0laRSA9IDQ7XG4gICAgICAgIGNvbnN0IFNOT1dGTEFLRV9NQVhfU0laRSA9IDEwO1xuICAgICAgICBjb25zdCBTTk9XRkxBS0VfTUlOX1NQRUVEID0gMC4xO1xuICAgICAgICBjb25zdCBTTk9XRkxBS0VfTUFYX1NQRUVEID0gMC4zO1xuICAgICAgICBjb25zdCBTTk9XRkxBS0VfV0lORF9SQU5HRSA9IDAuNDtcbiAgICAgICAgY29uc3QgU05PV0ZMQUtFX1NQQVdOX0lOVEVSVkFMID0gMjAwO1xuXG4gICAgICAgIGNvbnN0IHNub3dmbGFrZXMgPSBbXTtcbiAgICAgICAgbGV0IGxhc3RTbm93Zmxha2VUaW1lID0gMDtcbiAgICAgICAgbGV0IGFuaW1hdGlvbklkID0gbnVsbDtcbiAgICAgICAgXG4gICAgICAgIC8vINCS0YHRgtCw0L3QvtCy0LvRjtGU0LzQviDRgNC+0LfQvNGW0YAgY2FudmFzINC90LAg0LLQtdGB0YwgLmZhdi1wYWdlXG4gICAgICAgIGZ1bmN0aW9uIHJlc2l6ZUNhbnZhcygpIHtcbiAgICAgICAgICAgIGxldCBuZXdXaWR0aCwgbmV3SGVpZ2h0O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoZmF2UGFnZSkge1xuICAgICAgICAgICAgICAgIC8vINCS0LjQutC+0YDQuNGB0YLQvtCy0YPRlNC80L4gc2Nyb2xsSGVpZ2h0INC00LvRjyDQvtGC0YDQuNC80LDQvdC90Y8g0YDQtdCw0LvRjNC90L7RlyDQstC40YHQvtGC0Lgg0LrQvtC90YLQtdC90YLRg1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlY3QgPSBmYXZQYWdlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgICAgIG5ld1dpZHRoID0gcmVjdC53aWR0aCB8fCBmYXZQYWdlLm9mZnNldFdpZHRoIHx8IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICAgICAgICAgIC8vINCU0LvRjyDQstC40YHQvtGC0Lgg0LLQuNC60L7RgNC40YHRgtC+0LLRg9GU0LzQviBzY3JvbGxIZWlnaHQg0Y/QutGJ0L4g0LLRltC9INCx0ZbQu9GM0YjQuNC5INC30LAgb2Zmc2V0SGVpZ2h0XG4gICAgICAgICAgICAgICAgY29uc3Qgb2Zmc2V0SGVpZ2h0ID0gZmF2UGFnZS5vZmZzZXRIZWlnaHQgfHwgZmF2UGFnZS5jbGllbnRIZWlnaHQ7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2Nyb2xsSGVpZ2h0ID0gZmF2UGFnZS5zY3JvbGxIZWlnaHQ7XG4gICAgICAgICAgICAgICAgbmV3SGVpZ2h0ID0gTWF0aC5tYXgoc2Nyb2xsSGVpZ2h0LCBvZmZzZXRIZWlnaHQsIHJlY3QuaGVpZ2h0KSB8fCB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIEZhbGxiYWNrINC90LAgdmlld3BvcnRcbiAgICAgICAgICAgICAgICBuZXdXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICAgICAgICAgIG5ld0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0J/QtdGA0LXQstGW0YDRj9GU0LzQviDRh9C4INGA0L7Qt9C80ZbRgNC4INC30LzRltC90LjQu9C40YHRjyDQv9C10YDQtdC0INC+0L3QvtCy0LvQtdC90L3Rj9C8XG4gICAgICAgICAgICBpZiAoY2FudmFzLndpZHRoICE9PSBuZXdXaWR0aCB8fCBjYW52YXMuaGVpZ2h0ICE9PSBuZXdIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICBjYW52YXMud2lkdGggPSBuZXdXaWR0aDtcbiAgICAgICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gbmV3SGVpZ2h0O1xuICAgICAgICAgICAgICAgIC8vINCe0YfQuNGJ0LDRlNC80L4g0YHQvdGW0LbQuNC90LrQuCDQv9GA0Lgg0LfQvNGW0L3RliDRgNC+0LfQvNGW0YDRg1xuICAgICAgICAgICAgICAgIHNub3dmbGFrZXMubGVuZ3RoID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vINCS0YHRgtCw0L3QvtCy0LvRjtGU0LzQviDRgNC+0LfQvNGW0YAgY2FudmFzINC3INC90LXQstC10LvQuNC60L7RjiDQt9Cw0YLRgNC40LzQutC+0Y4g0LTQu9GPINC60L7RgNC10LrRgtC90L7Qs9C+INGA0L7Qt9GA0LDRhdGD0L3QutGDINGA0L7Qt9C80ZbRgNGW0LJcbiAgICAgICAgLy8g0JLQuNC60L7RgNC40YHRgtC+0LLRg9GU0LzQviDQutGW0LvRjNC60LAg0LrQsNC00YDRltCyINC00LvRjyDQs9Cw0YDQsNC90YLRltGXINC/0YDQsNCy0LjQu9GM0L3QvtCz0L4g0YDQvtC30LzRltGA0YNcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgIHJlc2l6ZUNhbnZhcygpO1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICByZXNpemVDYW52YXMoKTtcbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXNpemVDYW52YXMoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemVDYW52YXMpO1xuXG4gICAgICAgIC8vINCX0LDQstCw0L3RgtCw0LbQtdC90L3RjyDQt9C+0LHRgNCw0LbQtdC90L3RjyDRgdC90ZbQttC40L3QutC4XG4gICAgICAgIGNvbnN0IHNub3dmbGFrZUltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGxldCBpbWFnZUxvYWRlZCA9IGZhbHNlO1xuXG4gICAgICAgIHNub3dmbGFrZUltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaW1hZ2VMb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgLy8g0KfQtdC60LDRlNC80L4g0L/QvtC60Lgg0YHRgtC+0YDRltC90LrQsCDQstC40LnQtNC1INC30ZYg0YHRgtCw0L3RgyBsb2FkaW5nINC/0LXRgNC10LQg0YHRgtCw0YDRgtC+0Lwg0LDQvdGW0LzQsNGG0ZbRl1xuICAgICAgICAgICAgZnVuY3Rpb24gd2FpdEZvclBhZ2VSZWFkeSgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpc1BhZ2VMb2FkaW5nID0gbWFpblBhZ2UgJiYgbWFpblBhZ2UuY2xhc3NMaXN0LmNvbnRhaW5zKCdsb2FkaW5nJyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKGlzUGFnZUxvYWRpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g0K/QutGJ0L4g0YHRgtC+0YDRltC90LrQsCDRidC1INCyINGB0YLQsNC90ZYgbG9hZGluZywg0YfQtdC60LDRlNC80L4g0L/QvtC60LggbG9hZGVyINC/0YDQuNGF0L7QstCw0ZTRgtGM0YHRj1xuICAgICAgICAgICAgICAgICAgICAvLyBoaWRlTG9hZGVyINCy0LjQutC70LjQutCw0ZTRgtGM0YHRjyDRh9C10YDQtdC3IDMwMG1zINC/0ZbRgdC70Y8gcXVpY2tDaGVja0FuZFJlbmRlclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzaXplQ2FudmFzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzaXplQ2FudmFzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vINCU0L7QtNCw0YLQutC+0LLQsCDQv9C10YDQtdCy0ZbRgNC60LAg0L/RltGB0LvRjyDRidC1INC+0LTQvdC+0LPQviDQutCw0LTRgNGDXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNpemVDYW52YXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYW52YXMud2lkdGggPiAwICYmIGNhbnZhcy5oZWlnaHQgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRBbmltYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g0K/QutGJ0L4g0LLRgdC1INGJ0LUg0L3QtdC/0YDQsNCy0LjQu9GM0L3QuNC5INGA0L7Qt9C80ZbRgCwg0L/QvtCy0YLQvtGA0Y7RlNC80L5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KHdhaXRGb3JQYWdlUmVhZHksIDUwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSwgNDAwKTsgLy8g0KfQtdC60LDRlNC80L4g0YLRgNC+0YXQuCDQsdGW0LvRjNGI0LUg0L3RltC2IGhpZGVMb2FkZXIgKDMwMG1zKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vINCh0YLQvtGA0ZbQvdC60LAg0LPQvtGC0L7QstCwLCDQstGB0YLQsNC90L7QstC70Y7RlNC80L4g0YDQvtC30LzRltGAINGC0LAg0LfQsNC/0YPRgdC60LDRlNC80L5cbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc2l6ZUNhbnZhcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNpemVDYW52YXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNpemVDYW52YXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhbnZhcy53aWR0aCA+IDAgJiYgY2FudmFzLmhlaWdodCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QW5pbWF0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHdhaXRGb3JQYWdlUmVhZHkoKTtcbiAgICAgICAgfTtcbiAgICAgICAgc25vd2ZsYWtlSW1hZ2Uuc3JjID0gJ2ltZy9zbm93Zmxha2UucG5nJztcbiAgICAgICBcblxuICAgICAgICAvLyDQmtC70LDRgSDQtNC70Y8g0YHQvdGW0LbQuNC90LrQuFxuICAgICAgICBjbGFzcyBTbm93Zmxha2Uge1xuICAgICAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy54ID0gTWF0aC5yYW5kb20oKSAqIChjYW52YXMud2lkdGggfHwgd2luZG93LmlubmVyV2lkdGgpO1xuICAgICAgICAgICAgICAgIHRoaXMueSA9IC0yMDtcbiAgICAgICAgICAgICAgICB0aGlzLnNpemUgPSBNYXRoLnJhbmRvbSgpICogKFNOT1dGTEFLRV9NQVhfU0laRSAtIFNOT1dGTEFLRV9NSU5fU0laRSkgKyBTTk9XRkxBS0VfTUlOX1NJWkU7XG4gICAgICAgICAgICAgICAgdGhpcy5zcGVlZCA9IE1hdGgucmFuZG9tKCkgKiAoU05PV0ZMQUtFX01BWF9TUEVFRCAtIFNOT1dGTEFLRV9NSU5fU1BFRUQpICsgU05PV0ZMQUtFX01JTl9TUEVFRDtcbiAgICAgICAgICAgICAgICB0aGlzLndpbmQgPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiBTTk9XRkxBS0VfV0lORF9SQU5HRTtcbiAgICAgICAgICAgICAgICB0aGlzLm9wYWNpdHkgPSBNYXRoLnJhbmRvbSgpICogMC41ICsgMC41O1xuICAgICAgICAgICAgICAgIHRoaXMucm90YXRpb24gPSBNYXRoLnJhbmRvbSgpICogTWF0aC5QSSAqIDI7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3RhdGlvblNwZWVkID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMC4wMjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdXBkYXRlKCkge1xuICAgICAgICAgICAgICAgIHRoaXMueSArPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgICAgIHRoaXMueCArPSB0aGlzLndpbmQgKyAoTWF0aC5zaW4odGhpcy55ICogMC4wMSkgKiAwLjIpO1xuICAgICAgICAgICAgICAgIHRoaXMucm90YXRpb24gKz0gdGhpcy5yb3RhdGlvblNwZWVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkcmF3KCkge1xuICAgICAgICAgICAgICAgIGlmICghaW1hZ2VMb2FkZWQpIHJldHVybjtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNC60LAg0YfQuCBjYW52YXMg0LzQsNGUINC/0YDQsNCy0LjQu9GM0L3QuNC5INGA0L7Qt9C80ZbRgFxuICAgICAgICAgICAgICAgIGlmIChjYW52YXMud2lkdGggPT09IDAgfHwgY2FudmFzLmhlaWdodCA9PT0gMCkgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgY3R4LnNhdmUoKTtcbiAgICAgICAgICAgICAgICBjdHguZ2xvYmFsQWxwaGEgPSB0aGlzLm9wYWNpdHk7XG4gICAgICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZSh0aGlzLngsIHRoaXMueSk7XG4gICAgICAgICAgICAgICAgY3R4LnJvdGF0ZSh0aGlzLnJvdGF0aW9uKTtcbiAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgICAgICAgICBzbm93Zmxha2VJbWFnZSxcbiAgICAgICAgICAgICAgICAgICAgLXRoaXMuc2l6ZSAvIDIsXG4gICAgICAgICAgICAgICAgICAgIC10aGlzLnNpemUgLyAyLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNpemUsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2l6ZVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgY3R4LnJlc3RvcmUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaXNPZmZTY3JlZW4oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMueSA+IGNhbnZhcy5oZWlnaHQgKyAyMCB8fCBcbiAgICAgICAgICAgICAgICAgICAgICAgdGhpcy54IDwgLTIwIHx8IFxuICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnggPiBjYW52YXMud2lkdGggKyAyMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVNub3dmbGFrZSgpIHtcbiAgICAgICAgICAgIGlmIChzbm93Zmxha2VzLmxlbmd0aCA8IFNOT1dGTEFLRV9DT1VOVCkge1xuICAgICAgICAgICAgICAgIHNub3dmbGFrZXMucHVzaChuZXcgU25vd2ZsYWtlKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlU25vd2ZsYWtlcygpIHtcbiAgICAgICAgICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gICAgICAgICAgICBpZiAobm93IC0gbGFzdFNub3dmbGFrZVRpbWUgPiBTTk9XRkxBS0VfU1BBV05fSU5URVJWQUwpIHtcbiAgICAgICAgICAgICAgICBjcmVhdGVTbm93Zmxha2UoKTtcbiAgICAgICAgICAgICAgICBsYXN0U25vd2ZsYWtlVGltZSA9IG5vdztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHNub3dmbGFrZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICBzbm93Zmxha2VzW2ldLnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgIGlmIChzbm93Zmxha2VzW2ldLmlzT2ZmU2NyZWVuKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgc25vd2ZsYWtlcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZHJhd1Nub3dmbGFrZXMoKSB7XG4gICAgICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNC60LAg0YfQuCBjYW52YXMg0LzQsNGUINC/0YDQsNCy0LjQu9GM0L3QuNC5INGA0L7Qt9C80ZbRgCDQv9C10YDQtdC0INC80LDQu9GO0LLQsNC90L3Rj9C8XG4gICAgICAgICAgICBpZiAoY2FudmFzLndpZHRoID09PSAwIHx8IGNhbnZhcy5oZWlnaHQgPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXNpemVDYW52YXMoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIHNub3dmbGFrZXMuZm9yRWFjaChzbm93Zmxha2UgPT4ge1xuICAgICAgICAgICAgICAgIHNub3dmbGFrZS5kcmF3KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGFuaW1hdGUoKSB7XG4gICAgICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNGP0ZTQvNC+INGA0L7Qt9C80ZbRgCBjYW52YXMg0L3QsCDQv9C+0YfQsNGC0LrRgyDQutC+0LbQvdC+0LPQviDQutCw0LTRgNGDICjRgtGW0LvRjNC60Lgg0Y/QutGJ0L4g0LLRltC9INC90LXQv9GA0LDQstC40LvRjNC90LjQuSlcbiAgICAgICAgICAgIGlmIChjYW52YXMud2lkdGggPT09IDAgfHwgY2FudmFzLmhlaWdodCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJlc2l6ZUNhbnZhcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB1cGRhdGVTbm93Zmxha2VzKCk7XG4gICAgICAgICAgICBkcmF3U25vd2ZsYWtlcygpO1xuICAgICAgICAgICAgYW5pbWF0aW9uSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBzdGFydEFuaW1hdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChhbmltYXRpb25JZCkge1xuICAgICAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbklkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFuaW1hdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vINCX0YPQv9C40L3Rj9GU0LzQviDQsNC90ZbQvNCw0YbRltGOINC/0YDQuCDQstC40YXQvtC00ZYg0Lcgdmlld3BvcnRcbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICAgICAgICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghYW5pbWF0aW9uSWQgJiYgaW1hZ2VMb2FkZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QW5pbWF0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYW5pbWF0aW9uSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbklkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbklkID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGNhbnZhcyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdEluZmluaXRlU2Nyb2xsKCkge1xuICAgICAgICBjb25zdCBzY3JvbGxCbG9ja3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2Nyb2xsJyk7XG4gICAgICAgIFxuICAgICAgICBpZiAoIXNjcm9sbEJsb2Nrcy5sZW5ndGgpIHJldHVybjtcbiAgICAgICAgXG4gICAgICAgIHNjcm9sbEJsb2Nrcy5mb3JFYWNoKChzY3JvbGxCbG9jaykgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsQ29udGVudCA9IHNjcm9sbEJsb2NrLnF1ZXJ5U2VsZWN0b3IoJy5zY3JvbGxfX2NvbnRlbnQnKTtcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbFRleHQgPSBzY3JvbGxCbG9jay5xdWVyeVNlbGVjdG9yKCcuc2Nyb2xsX190ZXh0Jyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICghc2Nyb2xsQ29udGVudCB8fCAhc2Nyb2xsVGV4dCkgcmV0dXJuO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gc2Nyb2xsVGV4dC50ZXh0Q29udGVudC50cmltKCk7XG4gICAgICAgICAgICBpZiAoIXRleHQpIHJldHVybjsgLy8g0J/QtdGA0LXQstGW0YDQutCwINC90LAg0L/QvtGA0L7QttC90ZbQuSDRgtC10LrRgdGCXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHBhZGRpbmdSaWdodCA9IDA7XG4gICAgICAgICAgICBjb25zdCBmaXhlZFdpZHRoID0gMjYwMDsgLy8g0KTRltC60YHQvtCy0LDQvdCwINGI0LjRgNC40L3QsCDQutC+0L3RgtC10L3RgtGDXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCe0YfQuNGJ0LDRlNC80L4g0LrQvtC90YLQtdC90YJcbiAgICAgICAgICAgIHNjcm9sbENvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCh0YLQstC+0YDRjtGU0LzQviDQtdC70LXQvNC10L3RgtC4INC00L4g0YLQuNGFINC/0ZbRgCwg0L/QvtC60Lgg0L3QtSDQtNC+0YHRj9Cz0L3QtdC80L4g0YTRltC60YHQvtCy0LDQvdC+0Zcg0YjQuNGA0LjQvdC4IDI2MDBweFxuICAgICAgICAgICAgY29uc3QgZWxlbWVudHMgPSBbXTtcbiAgICAgICAgICAgIGxldCBpdGVtQ291bnQgPSAwO1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRXaWR0aCA9IDA7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCh0L/QvtGH0LDRgtC60YMg0YHRgtCy0L7RgNGO0ZTQvNC+INC+0LTQuNC9INC10LvQtdC80LXQvdGCLCDRidC+0LEg0L7RgtGA0LjQvNCw0YLQuCDQudC+0LPQviDRiNC40YDQuNC90YNcbiAgICAgICAgICAgIGNvbnN0IHRlbXBFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgdGVtcEVsZW1lbnQuY2xhc3NOYW1lID0gJ3Njcm9sbF9fdGV4dCc7XG4gICAgICAgICAgICB0ZW1wRWxlbWVudC50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICAgICAgICAvLyDQotC40LzRh9Cw0YHQvtCy0L4g0L/QvtC60LDQt9GD0ZTQvNC+INC10LvQtdC80LXQvdGCINC00LvRjyDQstC40LzRltGA0Y7QstCw0L3QvdGPXG4gICAgICAgICAgICB0ZW1wRWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgICAgICB0ZW1wRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgICAgICB0ZW1wRWxlbWVudC5zdHlsZS53aGl0ZVNwYWNlID0gJ25vd3JhcCc7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRlbXBFbGVtZW50KTtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1XaWR0aCA9IHRlbXBFbGVtZW50Lm9mZnNldFdpZHRoICsgcGFkZGluZ1JpZ2h0O1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0ZW1wRWxlbWVudCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCf0LXRgNC10LLRltGA0LrQsCDQvdCwINCy0LDQu9GW0LTQvdGDINGI0LjRgNC40L3RgyDQtdC70LXQvNC10L3RgtCwXG4gICAgICAgICAgICBpZiAoaXRlbVdpZHRoIDw9IDApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1Njcm9sbCBpdGVtIHdpZHRoIGlzIDAgb3IgaW52YWxpZCcpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0J7QsdC80LXQttGD0ZTQvNC+INC60ZbQu9GM0LrRltGB0YLRjCDRltGC0LXRgNCw0YbRltC5INC00LvRjyDQsdC10LfQv9C10LrQuFxuICAgICAgICAgICAgY29uc3QgbWF4SXRlcmF0aW9ucyA9IE1hdGguY2VpbChmaXhlZFdpZHRoIC8gaXRlbVdpZHRoKSArIDEwO1xuICAgICAgICAgICAgbGV0IGl0ZXJhdGlvbnMgPSAwO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQodGC0LLQvtGA0Y7RlNC80L4g0LXQu9C10LzQtdC90YLQuCDQtNC+INGC0LjRhSDQv9GW0YAsINC/0L7QutC4INC90LUg0LTQvtGB0Y/Qs9C90LXQvNC+INGE0ZbQutGB0L7QstCw0L3QvtGXINGI0LjRgNC40L3QuFxuICAgICAgICAgICAgd2hpbGUgKGN1cnJlbnRXaWR0aCA8IGZpeGVkV2lkdGggJiYgaXRlcmF0aW9ucyA8IG1heEl0ZXJhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXh0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgICAgICB0ZXh0RWxlbWVudC5jbGFzc05hbWUgPSAnc2Nyb2xsX190ZXh0JztcbiAgICAgICAgICAgICAgICB0ZXh0RWxlbWVudC50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8g0JrQvtC20LXQvSDQtNGA0YPQs9C40Lkg0LXQu9C10LzQtdC90YIg0L7RgtGA0LjQvNGD0ZQg0LrQu9Cw0YEgZGFya1xuICAgICAgICAgICAgICAgIGlmIChpdGVtQ291bnQgJSAyID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHRleHRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RhcmsnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgc2Nyb2xsQ29udGVudC5hcHBlbmRDaGlsZCh0ZXh0RWxlbWVudCk7XG4gICAgICAgICAgICAgICAgZWxlbWVudHMucHVzaCh0ZXh0RWxlbWVudCk7XG4gICAgICAgICAgICAgICAgY3VycmVudFdpZHRoICs9IGl0ZW1XaWR0aDtcbiAgICAgICAgICAgICAgICBpdGVtQ291bnQrKztcbiAgICAgICAgICAgICAgICBpdGVyYXRpb25zKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCf0LXRgNC10LLRltGA0LrQsCDQvdCwINC90LDRj9Cy0L3RltGB0YLRjCDQtdC70LXQvNC10L3RgtGW0LJcbiAgICAgICAgICAgIGlmIChlbGVtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ05vIHNjcm9sbCBlbGVtZW50cyBjcmVhdGVkJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQktC40LrQvtGA0LjRgdGC0L7QstGD0ZTQvNC+INC+0LHRh9C40YHQu9C10L3RgyDRiNC40YDQuNC90YMg0LfQsNC80ZbRgdGC0Ywg0LLQuNC80ZbRgNGO0LLQsNC90L3RjyAo0L/RgNCw0YbRjtGUINC90LDQstGW0YLRjCDQtNC70Y8g0L/RgNC40YXQvtCy0LDQvdC40YUg0LXQu9C10LzQtdC90YLRltCyKVxuICAgICAgICAgICAgY29uc3QgY29udGVudFdpZHRoID0gY3VycmVudFdpZHRoOyAvLyDQptC1INGI0LjRgNC40L3QsCDQv9C10YDRiNC+0LPQviDQvdCw0LHQvtGA0YMg0LXQu9C10LzQtdC90YLRltCyXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCf0LXRgNC10LLRltGA0LrQsCDQvdCwINCy0LDQu9GW0LTQvdGDINGI0LjRgNC40L3RgyDQutC+0L3RgtC10L3RgtGDXG4gICAgICAgICAgICBpZiAoY29udGVudFdpZHRoIDw9IDApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1Njcm9sbCBjb250ZW50IHdpZHRoIGlzIDAgb3IgaW52YWxpZCcpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0KHRgtCy0L7RgNGO0ZTQvNC+INC00YDRg9Cz0YMg0LrQvtC/0ZbRjiAo0L7RgtGA0LjQvNGD0ZTQvNC+IDJ4INGE0ZbQutGB0L7QstCw0L3QvtGXINGI0LjRgNC40L3QuClcbiAgICAgICAgICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjbG9uZWRFbGVtZW50ID0gZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgc2Nyb2xsQ29udGVudC5hcHBlbmRDaGlsZChjbG9uZWRFbGVtZW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQkNC90ZbQvNCw0YbRltGPXG4gICAgICAgICAgICBsZXQgcG9zaXRpb24gPSAwOyAvLyDQktC40YXRltC00L3QsCDRgtC+0YfQutCwIC0gMCDQstGW0LTQvdC+0YHQvdC+INC70ZbQstC+0LPQviDQutGA0LDRjlxuICAgICAgICAgICAgY29uc3Qgc3BlZWQgPSAwLjM7IC8vIHB4IHBlciBmcmFtZVxuICAgICAgICAgICAgbGV0IGFuaW1hdGlvbklkID0gbnVsbDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiAtPSBzcGVlZDsgLy8g0KDRg9GF0LDRlNC80L4g0LLQu9GW0LLQvlxuXG4gICAgICAgICAgICAgICAgaWYgKHBvc2l0aW9uIDw9IC1jb250ZW50V2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24gPSBwb3NpdGlvbiArIGNvbnRlbnRXaWR0aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgc2Nyb2xsQ29udGVudC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3Bvc2l0aW9ufXB4KWA7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCX0LDQv9GD0YHQutCw0ZTQvNC+INCw0L3RltC80LDRhtGW0Y5cbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8g0J/QtdGA0LXQstGW0YDRj9GU0LzQviwg0YfQuCDQtdC70LXQvNC10L3RgiDQstC40LTQuNC80LjQuSDQv9C10YDQtdC0INC30LDQv9GD0YHQutC+0LxcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wdXRlZFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoc2Nyb2xsQmxvY2spO1xuICAgICAgICAgICAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IGNvbXB1dGVkU3R5bGUuZGlzcGxheSAhPT0gJ25vbmUnICYmIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcHV0ZWRTdHlsZS52aXNpYmlsaXR5ICE9PSAnaGlkZGVuJztcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoaXNWaXNpYmxlICYmIGNvbnRlbnRXaWR0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZSgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vINCv0LrRidC+INC10LvQtdC80LXQvdGCINC/0YDQuNGF0L7QstCw0L3QuNC5LCDQt9Cw0L/Rg9GB0LrQsNGU0LzQviDQsNC90ZbQvNCw0YbRltGOINCy0YHQtSDQvtC00L3QvlxuICAgICAgICAgICAgICAgICAgICAvLyAo0LLQvtC90LAg0LHRg9C00LUg0L/RgNCw0YbRjtCy0LDRgtC4LCDQutC+0LvQuCDQtdC70LXQvNC10L3RgiDRgdGC0LDQvdC1INCy0LjQtNC40LzQuNC8KVxuICAgICAgICAgICAgICAgICAgICBhbmltYXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICBsb2FkVHJhbnNsYXRpb25zKClcbiAgICAgICAgLnRoZW4oaW5pdCkgLy8g0LfQsNC/0YPRgdC6INGW0L3RltGC0YMg0YHRgtC+0YDRltC90LrQuFxuXG5cblxuXG5cbiAgICAvLyBjb25zdCBsbmdCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxuZy1idG5cIilcbiAgICAvL1xuICAgIC8vIC8vINCS0YHRgtCw0L3QvtCy0LvRjtGU0LzQviDRgtC10LrRgdGCINC60L3QvtC/0LrQuCDQvdCwINC/0L7RgtC+0YfQvdGDINCw0LrRgtC40LLQvdGDINC80L7QstGDXG4gICAgLy8gZnVuY3Rpb24gdXBkYXRlTGFuZ3VhZ2VCdXR0b24oKSB7XG4gICAgLy8gICAgIC8vINCS0LjQutC+0YDQuNGB0YLQvtCy0YPRlNC80L4g0YLRgyDRgdCw0LzRgyDQu9C+0LPRltC60YMsINGJ0L4g0ZYg0LTQu9GPINCy0LjQt9C90LDRh9C10L3QvdGPIGxvY2FsZVxuICAgIC8vICAgICBsZXQgY3VycmVudExvY2FsZSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJsb2NhbGVcIikgfHwgXCJoclwiO1xuICAgIC8vICAgICBpZiAoaHJMZW5nKSBjdXJyZW50TG9jYWxlID0gJ2hyJztcbiAgICAvLyAgICAgaWYgKGVuTGVuZykgY3VycmVudExvY2FsZSA9ICdlbic7XG4gICAgLy8gICAgIGlmIChsbmdCdG4pIHtcbiAgICAvLyAgICAgICAgIGxuZ0J0bi50ZXh0Q29udGVudCA9IGN1cnJlbnRMb2NhbGU7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG4gICAgLy9cbiAgICAvLyAvLyDQntC90L7QstC70Y7RlNC80L4g0LrQvdC+0L/QutGDINC/0YDQuCDQt9Cw0LLQsNC90YLQsNC20LXQvdC90ZYgKNC/0ZbRgdC70Y8g0LLQuNC30L3QsNGH0LXQvdC90Y8gbG9jYWxlKVxuICAgIC8vIHVwZGF0ZUxhbmd1YWdlQnV0dG9uKCk7XG5cbiAgICAvLyBpZiAobG5nQnRuKSB7XG4gICAgLy8gICAgIGxuZ0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIC8vICAgICAgICAgLy8g0JLQuNC30L3QsNGH0LDRlNC80L4g0L/QvtGC0L7Rh9C90YMg0LzQvtCy0YMg0L/QtdGA0LXQtCDQv9C10YDQtdC80LjQutCw0L3QvdGP0LxcbiAgICAvLyAgICAgICAgIGxldCBjdXJyZW50TG9jYWxlID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsZVwiKSB8fCBcImhyXCI7XG4gICAgLy8gICAgICAgICBpZiAoaHJMZW5nKSBjdXJyZW50TG9jYWxlID0gJ2hyJztcbiAgICAvLyAgICAgICAgIGlmIChlbkxlbmcpIGN1cnJlbnRMb2NhbGUgPSAnZW4nO1xuICAgIC8vXG4gICAgLy8gICAgICAgICBpZiAoY3VycmVudExvY2FsZSA9PT0gXCJlblwiKSB7XG4gICAgLy8gICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcImxvY2FsZVwiKTtcbiAgICAvLyAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsZVwiLCBcImVuXCIpO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIC8vICAgICB9KTtcbiAgICAvLyB9XG4gICAgLy9cbiAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtYnRuXCIpPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIC8vICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtdGVzdFwiKT8uY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIik7XG4gICAgLy8gfSk7XG5cblxufSkoKTtcbiJdfQ==
