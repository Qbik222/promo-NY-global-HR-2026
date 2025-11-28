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
    var FRAMES_PER_ROW = 5; // 6 кадрів в рядку
    var TOTAL_ROWS = 2; // 2 ряди
    var SPRITE_SHEET_WIDTH = 1100; // Реальна ширина спрайт-листа
    var SPRITE_SHEET_HEIGHT = 468; // Реальна висота спрайт-листа

    // Розміри одного кадру в спрайт-листі
    var FRAME_WIDTH = Math.floor(SPRITE_SHEET_WIDTH / FRAMES_PER_ROW); // ~183px
    var FRAME_HEIGHT = Math.floor(SPRITE_SHEET_HEIGHT / TOTAL_ROWS); // 234px

    // Розміри оленя на canvas (можна масштабувати)
    var DEER_SCALE = 0.5; // Масштаб для відображення на canvas
    var DEER_WIDTH = Math.floor(FRAME_WIDTH * DEER_SCALE); // ~92px
    var DEER_HEIGHT = Math.floor(FRAME_HEIGHT * DEER_SCALE); // 117px

    // Позиції елементів
    var treeX = CANVAS_WIDTH / 2 - 300; // Трохи лівіше від центру
    var treeY = CANVAS_HEIGHT / 2 - TREE_HEIGHT / 2;

    // Початкова позиція оленя (правіше від ялинки)
    var deerX = CANVAS_WIDTH / 2 + 50;
    var deerY = CANVAS_HEIGHT / 2 - DEER_HEIGHT / 2 + 30;

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
    var frameIndex = 0; // Індекс поточного кадру для ходьби (0-4 для кадрів 0-4)
    var frameCounter = 0; // Лічильник для контролю швидкості анімації
    var FRAME_DELAY = 12; // Затримка між кадрами (більше = повільніше, плавніше)
    var WALKING_FRAMES = 5; // Кількість кадрів для ходьби (всі 5 кадрів: 0-4)
    var WALKING_START_FRAME = 0; // Початковий кадр ходьби (індекс 0)
    var FRAME_REPEAT = 2; // Кількість разів показувати кожен кадр (для плавності)
    var frameRepeatCounter = 0; // Лічильник повторень кадру
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

    // Отримуємо індекс кадру в спрайт-листі
    function getSpriteFrameIndex() {
      // Верхній рядок (0) = рух вліво, нижній рядок (1) = рух вправо
      var row = deerDirection === -1 ? 0 : 1; // -1 = вліво (рядок 0), 1 = вправо (рядок 1)
      var col = 0;
      if (deerState === DEER_STATE.WALKING) {
        // Кадри ходьби: 0, 1, 2, 3, 4 (всі 5 кадрів)
        // frameIndex циклічно йде 0, 1, 2, 3, 4, 0, 1, 2, 3, 4...
        // Для обох напрямків використовуємо однакову послідовність кадрів
        col = frameIndex % WALKING_FRAMES; // 0, 1, 2, 3, 4
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
      if (images.deerSprite.complete && FRAME_WIDTH > 0 && FRAME_HEIGHT > 0) {
        var _getSpriteFrameIndex = getSpriteFrameIndex(),
          row = _getSpriteFrameIndex.row,
          col = _getSpriteFrameIndex.col;

        // Координати кадру в спрайт-листі
        var sourceX = col * FRAME_WIDTH;
        var sourceY = row * FRAME_HEIGHT;

        // Вирізаємо кадр зі спрайт-листа та малюємо на canvas
        ctx.drawImage(images.deerSprite, sourceX, sourceY, FRAME_WIDTH, FRAME_HEIGHT,
        // Джерело (спрайт-лист)
        deerX, deerY, DEER_WIDTH, DEER_HEIGHT // Призначення (canvas)
        );
      }
    }

    function animate() {
      frameCounter++;

      // Оновлюємо анімацію кадрів з повторенням для плавності
      if (frameCounter >= FRAME_DELAY) {
        frameCounter = 0;
        if (deerState === DEER_STATE.WALKING) {
          frameRepeatCounter++;
          // Показуємо кожен кадр кілька разів для плавнішої анімації
          if (frameRepeatCounter >= FRAME_REPEAT) {
            frameRepeatCounter = 0;
            // Послідовно проходимо через всі кадри: 0, 1, 2, 3, 4, 0, 1, 2, 3, 4...
            frameIndex = (frameIndex + 1) % WALKING_FRAMES;
          }
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
          frameRepeatCounter = 0; // Скидаємо лічильник повторень
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwibWFpblBhZ2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJsb2FkZXIiLCJyZXN1bHRzVGFibGUiLCJyZXN1bHRzVGFibGVPdGhlciIsImhyTGVuZyIsImVuTGVuZyIsImxvY2FsZSIsImRlYnVnIiwiaGlkZUxvYWRlciIsImkxOG5EYXRhIiwidHJhbnNsYXRlU3RhdGUiLCJ1c2VySWQiLCJyZXF1ZXN0IiwibGluayIsImV4dHJhT3B0aW9ucyIsImZldGNoIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJvayIsIkVycm9yIiwianNvbiIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsInJlcG9ydEVycm9yIiwic3R5bGUiLCJkaXNwbGF5Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwic3RhcnRzV2l0aCIsIlByb21pc2UiLCJyZWplY3QiLCJjbGFzc0xpc3QiLCJhZGQiLCJib2R5Iiwib3ZlcmZsb3ciLCJyZW1vdmUiLCJpbml0IiwidHJ5RGV0ZWN0VXNlcklkIiwicXVpY2tDaGVja0FuZFJlbmRlciIsImluaXRJbmZpbml0ZVNjcm9sbCIsImluaXRQcm9ncmVzc0JhciIsImluaXRQYXJ0aWNpcGF0ZUNhbnZhcyIsImluaXRTbm93Zmxha2VzQ2FudmFzIiwic2V0VGltZW91dCIsImRyb3Bkb3ducyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZHJvcGRvd24iLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJvcGVuIiwic3VtbWFyeSIsInN1bW1hcnlSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwiY3VycmVudFNjcm9sbFkiLCJzY3JvbGxZIiwicGFnZVlPZmZzZXQiLCJ0YXJnZXRTY3JvbGxZIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic2Nyb2xsVG8iLCJNYXRoIiwibWF4IiwiYmVoYXZpb3IiLCJzdG9yZSIsInN0YXRlIiwiZ2V0U3RhdGUiLCJhdXRoIiwiaXNBdXRob3JpemVkIiwiaWQiLCJnX3VzZXJfaWQiLCJhdHRlbXB0cyIsIm1heEF0dGVtcHRzIiwiYXR0ZW1wdEludGVydmFsIiwid2FpdEZvclVzZXJJZCIsInJlc29sdmUiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImxvYWRUcmFuc2xhdGlvbnMiLCJ0cmFuc2xhdGUiLCJyZXBvcnREYXRhIiwib3JpZ2luIiwidXNlcmlkIiwiZXJyb3JUZXh0IiwidGV4dCIsIm1lc3NhZ2UiLCJ0eXBlIiwibmFtZSIsInN0YWNrIiwibWV0aG9kIiwiSlNPTiIsInN0cmluZ2lmeSIsIndhcm4iLCJlbGVtcyIsImxlbmd0aCIsImVsZW0iLCJrZXkiLCJnZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJyZW1vdmVBdHRyaWJ1dGUiLCJsb2ciLCJyZWZyZXNoTG9jYWxpemVkQ2xhc3MiLCJlbGVtZW50IiwibGFuZyIsInJlbmRlclVzZXJzIiwid2Vla051bSIsInVzZXJEYXRhIiwiTnVtYmVyIiwid2Vla09iaiIsImZpbmQiLCJ3Iiwid2VlayIsImRhdGEiLCJBcnJheSIsImlzQXJyYXkiLCJ1c2VycyIsImlzU3RhZ2VFbmRlZCIsIndpbm5lckFkZGl0aW9uYWxQcml6ZSIsInUiLCJ3aW5uZXIiLCJjdXJyZW50VXNlciIsInVzZXIiLCJpc1ZlcmlmaWVkVXNlciIsInBvaW50cyIsInBvcHVsYXRlVXNlcnNUYWJsZSIsImN1cnJlbnRVc2VySWQiLCJzZWNvbmRUYWJsZU90aGVyIiwic2Vjb25kVGFibGUiLCJpc1RvcEN1cnJlbnRVc2VyIiwic2xpY2UiLCJzb21lIiwidG9wVXNlcnNMZW5ndGgiLCJ0b3BVc2VycyIsImRpc3BsYXlVc2VyIiwiaXNDdXJyZW50VXNlciIsInRhYmxlIiwicmVuZGVyUm93Iiwib3B0aW9ucyIsImhpZ2hsaWdodCIsIm5laWdoYm9yIiwidXNlclJvdyIsImNyZWF0ZUVsZW1lbnQiLCJ1c2VyUGxhY2UiLCJpbmRleE9mIiwicHJpemVLZXkiLCJnZXRQcml6ZVRyYW5zbGF0aW9uS2V5IiwidHJhbnNsYXRlS2V5IiwibWFza1VzZXJJZCIsInRvRml4ZWQiLCJhcHBlbmQiLCJpbmRleCIsImNhbnZhcyIsInBlcmNlbnRFbGVtZW50IiwiY3R4IiwiZ2V0Q29udGV4dCIsImJhckhlaWdodCIsInNlZ21lbnRXaWR0aCIsInNlZ21lbnRIZWlnaHQiLCJzZWdtZW50R2FwIiwicGFkZGluZyIsInNlZ21lbnRSYWRpdXMiLCJjdXJyZW50UHJvZ3Jlc3MiLCJ0YXJnZXRQcm9ncmVzcyIsImFuaW1hdGlvbkR1cmF0aW9uIiwic3RhcnRUaW1lIiwiRGF0ZSIsIm5vdyIsImFuaW1hdGlvbklkIiwibWF4U2VnbWVudHMiLCJyZXNpemVDYW52YXMiLCJjb250YWluZXIiLCJwYXJlbnRFbGVtZW50IiwiY29udGFpbmVyV2lkdGgiLCJvZmZzZXRXaWR0aCIsIndpZHRoIiwiaGVpZ2h0IiwiYXZhaWxhYmxlV2lkdGgiLCJzZWdtZW50V2l0aEdhcCIsImZsb29yIiwiZHJhd1Byb2dyZXNzQmFyIiwicHJvZ3Jlc3MiLCJjbGVhclJlY3QiLCJzdHJva2VTdHlsZSIsImxpbmVXaWR0aCIsInN0cm9rZVJlY3QiLCJmaWxsZWRTZWdtZW50cyIsImZpbGxTdHlsZSIsImNlbnRlclkiLCJpIiwieCIsInkiLCJiZWdpblBhdGgiLCJyb3VuZFJlY3QiLCJyIiwibW92ZVRvIiwibGluZVRvIiwicXVhZHJhdGljQ3VydmVUbyIsImNsb3NlUGF0aCIsImZpbGwiLCJ1cGRhdGVQcm9ncmVzcyIsImVsYXBzZWQiLCJwZXJjZW50IiwidGV4dENvbnRlbnQiLCJyZXNpemVUaW1lb3V0IiwiY2xlYXJUaW1lb3V0Iiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJvYnNlcnZlIiwiQ0FOVkFTX1dJRFRIIiwiQ0FOVkFTX0hFSUdIVCIsIlRSRUVfV0lEVEgiLCJUUkVFX0hFSUdIVCIsIkZSQU1FU19QRVJfUk9XIiwiVE9UQUxfUk9XUyIsIlNQUklURV9TSEVFVF9XSURUSCIsIlNQUklURV9TSEVFVF9IRUlHSFQiLCJGUkFNRV9XSURUSCIsIkZSQU1FX0hFSUdIVCIsIkRFRVJfU0NBTEUiLCJERUVSX1dJRFRIIiwiREVFUl9IRUlHSFQiLCJ0cmVlWCIsInRyZWVZIiwiZGVlclgiLCJkZWVyWSIsImRlZXJEaXJlY3Rpb24iLCJkZWVyU3BlZWQiLCJkZWVyTWluWCIsImRlZXJNYXhYIiwiREVFUl9TVEFURSIsIldBTEtJTkciLCJJRExFIiwiZGVlclN0YXRlIiwiZnJhbWVJbmRleCIsImZyYW1lQ291bnRlciIsIkZSQU1FX0RFTEFZIiwiV0FMS0lOR19GUkFNRVMiLCJXQUxLSU5HX1NUQVJUX0ZSQU1FIiwiRlJBTUVfUkVQRUFUIiwiZnJhbWVSZXBlYXRDb3VudGVyIiwiaWRsZVRpbWVyIiwiaWRsZUR1cmF0aW9uIiwiSURMRV9NSU5fRFVSQVRJT04iLCJJRExFX01BWF9EVVJBVElPTiIsImltYWdlcyIsImJhY2tncm91bmQiLCJJbWFnZSIsInRyZWUiLCJkZWVyU3ByaXRlIiwiaW1hZ2VzTG9hZGVkIiwidG90YWxJbWFnZXMiLCJvbkltYWdlTG9hZCIsImNvbXBsZXRlIiwiZnJhbWVXaWR0aCIsImZyYW1lSGVpZ2h0IiwiZGVlcldpZHRoIiwiZGVlckhlaWdodCIsImRyYXdDYW52YXMiLCJzdGFydEFuaW1hdGlvbiIsIm9ubG9hZCIsInNyYyIsImdldFNwcml0ZUZyYW1lSW5kZXgiLCJyb3ciLCJjb2wiLCJkcmF3SW1hZ2UiLCJzb3VyY2VYIiwic291cmNlWSIsImFuaW1hdGUiLCJyYW5kb20iLCJmYXZQYWdlIiwiU05PV0ZMQUtFX0NPVU5UIiwiU05PV0ZMQUtFX01JTl9TSVpFIiwiU05PV0ZMQUtFX01BWF9TSVpFIiwiU05PV0ZMQUtFX01JTl9TUEVFRCIsIlNOT1dGTEFLRV9NQVhfU1BFRUQiLCJTTk9XRkxBS0VfV0lORF9SQU5HRSIsIlNOT1dGTEFLRV9TUEFXTl9JTlRFUlZBTCIsInNub3dmbGFrZXMiLCJsYXN0U25vd2ZsYWtlVGltZSIsIm5ld1dpZHRoIiwibmV3SGVpZ2h0IiwicmVjdCIsImlubmVyV2lkdGgiLCJvZmZzZXRIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJpbm5lckhlaWdodCIsInNub3dmbGFrZUltYWdlIiwiaW1hZ2VMb2FkZWQiLCJ3YWl0Rm9yUGFnZVJlYWR5IiwiaXNQYWdlTG9hZGluZyIsImNvbnRhaW5zIiwiU25vd2ZsYWtlIiwic2l6ZSIsInNwZWVkIiwid2luZCIsIm9wYWNpdHkiLCJyb3RhdGlvbiIsIlBJIiwicm90YXRpb25TcGVlZCIsInNpbiIsInNhdmUiLCJnbG9iYWxBbHBoYSIsInJvdGF0ZSIsInJlc3RvcmUiLCJjcmVhdGVTbm93Zmxha2UiLCJwdXNoIiwidXBkYXRlU25vd2ZsYWtlcyIsInVwZGF0ZSIsImlzT2ZmU2NyZWVuIiwic3BsaWNlIiwiZHJhd1Nub3dmbGFrZXMiLCJzbm93Zmxha2UiLCJkcmF3Iiwic2Nyb2xsQmxvY2tzIiwic2Nyb2xsQmxvY2siLCJzY3JvbGxDb250ZW50Iiwic2Nyb2xsVGV4dCIsInRyaW0iLCJwYWRkaW5nUmlnaHQiLCJmaXhlZFdpZHRoIiwiZWxlbWVudHMiLCJpdGVtQ291bnQiLCJjdXJyZW50V2lkdGgiLCJ0ZW1wRWxlbWVudCIsImNsYXNzTmFtZSIsInZpc2liaWxpdHkiLCJwb3NpdGlvbiIsIndoaXRlU3BhY2UiLCJhcHBlbmRDaGlsZCIsIml0ZW1XaWR0aCIsInJlbW92ZUNoaWxkIiwibWF4SXRlcmF0aW9ucyIsImNlaWwiLCJpdGVyYXRpb25zIiwidGV4dEVsZW1lbnQiLCJjb250ZW50V2lkdGgiLCJjbG9uZWRFbGVtZW50IiwiY2xvbmVOb2RlIiwidHJhbnNmb3JtIiwiY29tcHV0ZWRTdHlsZSIsImdldENvbXB1dGVkU3R5bGUiLCJpc1Zpc2libGUiXSwibWFwcGluZ3MiOiI7OzsrQ0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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QUFTLEdBQUdGLGFBQWEsQ0FBQ2pVLE9BQU8sS0FBSyxNQUFNLElBQ2pDaVUsYUFBYSxDQUFDZCxVQUFVLEtBQUssUUFBUTtRQUV0RCxJQUFJZ0IsU0FBUyxJQUFJTixZQUFZLEdBQUcsQ0FBQyxFQUFFO1VBQy9CckUsT0FBTyxFQUFFO1FBQ2IsQ0FBQyxNQUFNO1VBQ0g7VUFDQTtVQUNBQSxPQUFPLEVBQUU7UUFDYjtNQUNKLENBQUMsQ0FBQztJQUNOLENBQUMsQ0FBQztFQUNOO0VBRUFqTSxnQkFBZ0IsRUFBRSxDQUNiakUsSUFBSSxDQUFDc0IsSUFBSSxDQUFDLEVBQUM7O0VBTWhCO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtBQUdKLENBQUMsR0FBRyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgpIHtcblxuICAgIGNvbnN0IGFwaVVSTCA9ICdodHRwczovL2Zhdi1wcm9tLmNvbS9hcGlfYmxhY2tfcHJpemUnXG5cbiAgICBjb25zdCBtYWluUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmF2LXBhZ2VcIiksXG4gICAgICAgIGxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3Bpbm5lci1vdmVybGF5XCIpLFxuICAgICAgICByZXN1bHRzVGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RhYmxlXCIpLFxuICAgICAgICByZXN1bHRzVGFibGVPdGhlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFibGVPdGhlclwiKVxuXG4gICAgY29uc3QgaHJMZW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hyTGVuZycpO1xuICAgIGNvbnN0IGVuTGVuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbkxlbmcnKTtcblxuICAgIGxldCBsb2NhbGUgPSBcImVuXCJcbiAgICAvLyBsZXQgbG9jYWxlID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsZVwiKSB8fCBcImhyXCJcblxuICAgIGlmIChockxlbmcpIGxvY2FsZSA9ICdocic7XG4gICAgaWYgKGVuTGVuZykgbG9jYWxlID0gJ2VuJztcblxuICAgIGxldCBkZWJ1ZyA9IGZhbHNlXG5cbiAgICBpZiAoZGVidWcpIGhpZGVMb2FkZXIoKVxuXG4gICAgbGV0IGkxOG5EYXRhID0ge307XG4gICAgY29uc3QgdHJhbnNsYXRlU3RhdGUgPSBmYWxzZTtcbiAgICBsZXQgdXNlcklkID0gbnVsbDtcbiAgICAvLyBsZXQgdXNlcklkID0gTnVtYmVyKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIikpID8/IG51bGxcblxuICAgIGNvbnN0IHJlcXVlc3QgPSBmdW5jdGlvbiAobGluaywgZXh0cmFPcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBmZXRjaChhcGlVUkwgKyBsaW5rLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLi4uKGV4dHJhT3B0aW9ucyB8fCB7fSlcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXMub2spIHRocm93IG5ldyBFcnJvcignQVBJIGVycm9yJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignQVBJIHJlcXVlc3QgZmFpbGVkOicsIGVycik7XG5cbiAgICAgICAgICAgICAgICByZXBvcnRFcnJvcihlcnIpO1xuXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhdi1wYWdlJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYuc3RhcnRzV2l0aChcImh0dHBzOi8vd3d3LmZhdmJldC5oci9cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3Byb21vY2lqZS9wcm9tb2NpamEvc3R1Yi8nO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9wcm9tb3MvcHJvbW8vc3R1Yi8nO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoaWRlTG9hZGVyKCl7XG4gICAgICAgIGxvYWRlci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCJcbiAgICAgICAgbWFpblBhZ2UuY2xhc3NMaXN0LnJlbW92ZShcImxvYWRpbmdcIilcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICBsZXQgYXR0ZW1wdHMgPSAwO1xuICAgICAgICBjb25zdCBtYXhBdHRlbXB0cyA9IDIwO1xuICAgICAgICBjb25zdCBhdHRlbXB0SW50ZXJ2YWwgPSA1MDtcblxuICAgICAgICBmdW5jdGlvbiB0cnlEZXRlY3RVc2VySWQoKSB7XG4gICAgICAgICAgICBpZiAod2luZG93LnN0b3JlKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSB3aW5kb3cuc3RvcmUuZ2V0U3RhdGUoKTtcbiAgICAgICAgICAgICAgICB1c2VySWQgPSBzdGF0ZS5hdXRoLmlzQXV0aG9yaXplZCAmJiBzdGF0ZS5hdXRoLmlkIHx8ICcnO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh3aW5kb3cuZ191c2VyX2lkKSB7XG4gICAgICAgICAgICAgICAgdXNlcklkID0gd2luZG93LmdfdXNlcl9pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHF1aWNrQ2hlY2tBbmRSZW5kZXIoKSB7XG4gICAgICAgICAgICBpbml0SW5maW5pdGVTY3JvbGwoKTtcbiAgICAgICAgICAgIGluaXRQcm9ncmVzc0JhcigpO1xuICAgICAgICAgICAgaW5pdFBhcnRpY2lwYXRlQ2FudmFzKCk7XG4gICAgICAgICAgICBpbml0U25vd2ZsYWtlc0NhbnZhcygpO1xuICAgICAgICAgICAgc2V0VGltZW91dChoaWRlTG9hZGVyLCAzMDApO1xuXG4gICAgICAgICAgICAvLyBGaXggZHJvcGRvd24gc2Nyb2xsIGlzc3VlIC0gcHJldmVudCBwYWdlIGZyb20gc2hpZnRpbmcgdXAgd2hlbiBvcGVuaW5nIGRyb3Bkb3duXG4gICAgICAgICAgICBjb25zdCBkcm9wZG93bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJvcGRvd24nKTtcbiAgICAgICAgICAgIGRyb3Bkb3ducy5mb3JFYWNoKChkcm9wZG93bikgPT4ge1xuICAgICAgICAgICAgICAgIGRyb3Bkb3duLmFkZEV2ZW50TGlzdGVuZXIoJ3RvZ2dsZScsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERyb3Bkb3duIGlzIG9wZW5pbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN1bW1hcnkgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJ3N1bW1hcnknKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdW1tYXJ5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gR2V0IHN1bW1hcnkgcG9zaXRpb24gcmVsYXRpdmUgdG8gdmlld3BvcnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdW1tYXJ5UmVjdCA9IHN1bW1hcnkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiBzdW1tYXJ5IGlzIG5lYXIgdGhlIHRvcCBvZiB2aWV3cG9ydCAod2l0aGluIDEwMHB4IGZyb20gdG9wKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdW1tYXJ5UmVjdC50b3AgPCAxMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIGhvdyBtdWNoIHRvIHNjcm9sbCB0byBrZWVwIHN1bW1hcnkgdmlzaWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50U2Nyb2xsWSA9IHdpbmRvdy5zY3JvbGxZIHx8IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0U2Nyb2xsWSA9IGN1cnJlbnRTY3JvbGxZICsgc3VtbWFyeVJlY3QudG9wIC0gMTIwOyAvLyAxMjBweCBvZmZzZXQgZnJvbSB0b3BcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBVc2UgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIGZvciBzbW9vdGggc2Nyb2xsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogTWF0aC5tYXgoMCwgdGFyZ2V0U2Nyb2xsWSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB3YWl0Rm9yVXNlcklkID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRyeURldGVjdFVzZXJJZCgpO1xuICAgICAgICAgICAgICAgIGlmICh1c2VySWQgfHwgYXR0ZW1wdHMgPj0gbWF4QXR0ZW1wdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgcXVpY2tDaGVja0FuZFJlbmRlcigpO1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhdHRlbXB0cysrO1xuICAgICAgICAgICAgfSwgYXR0ZW1wdEludGVydmFsKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXdhaXQgd2FpdEZvclVzZXJJZDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2FkVHJhbnNsYXRpb25zKCkge1xuICAgICAgICByZXR1cm4gcmVxdWVzdChgL25ldy10cmFuc2xhdGVzLyR7bG9jYWxlfWApXG4gICAgICAgICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgICAgICBpMThuRGF0YSA9IGpzb247XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlKCk7XG4gICAgICAgICAgICAgICAgLy8gY29uc3QgbXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChtdXRhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgbXV0YXRpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgLy8gICAgIHRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgICAgIC8vICAgICBtdXRhdGlvbk9ic2VydmVyLm9ic2VydmUodGFyZ2V0Tm9kZSwgeyBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgICAgICAgICAgLy8gbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGFyZGNvcmVUZW5uaXNcIiksIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIC8vICAgICBzdWJ0cmVlOiB0cnVlXG4gICAgICAgICAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlcG9ydEVycm9yKGVycikge1xuICAgICAgICBjb25zdCByZXBvcnREYXRhID0ge1xuICAgICAgICAgICAgb3JpZ2luOiB3aW5kb3cubG9jYXRpb24uaHJlZixcbiAgICAgICAgICAgIHVzZXJpZDogdXNlcklkLFxuICAgICAgICAgICAgZXJyb3JUZXh0OiBlcnI/LmVycm9yIHx8IGVycj8udGV4dCB8fCBlcnI/Lm1lc3NhZ2UgfHwgJ1Vua25vd24gZXJyb3InLFxuICAgICAgICAgICAgdHlwZTogZXJyPy5uYW1lIHx8ICdVbmtub3duRXJyb3InLFxuICAgICAgICAgICAgc3RhY2s6IGVycj8uc3RhY2sgfHwgJydcbiAgICAgICAgfTtcblxuICAgICAgICBmZXRjaCgnaHR0cHM6Ly9mYXYtcHJvbS5jb20vYXBpLWNtcy9yZXBvcnRzL2FkZCcsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXBvcnREYXRhKVxuICAgICAgICB9KS5jYXRjaChjb25zb2xlLndhcm4pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRyYW5zbGF0ZSgpIHtcbiAgICAgICAgY29uc3QgZWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10cmFuc2xhdGVdJylcbiAgICAgICAgaWYgKGVsZW1zICYmIGVsZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYodHJhbnNsYXRlU3RhdGUpe1xuICAgICAgICAgICAgICAgIGVsZW1zLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGVsZW0uZ2V0QXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgICAgICAgICAgICAgICAgICBlbGVtLmlubmVySFRNTCA9IGkxOG5EYXRhW2tleV0gfHwgJyotLS0tTkVFRCBUTyBCRSBUUkFOU0xBVEVELS0tLSogICBrZXk6ICAnICsga2V5O1xuICAgICAgICAgICAgICAgICAgICBpZiAoaTE4bkRhdGFba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0cmFuc2xhdGlvbiB3b3JrcyFcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobG9jYWxlID09PSAnZW4nKSB7XG4gICAgICAgICAgICBtYWluUGFnZS5jbGFzc0xpc3QuYWRkKCdlbicpO1xuICAgICAgICB9XG4gICAgICAgIHJlZnJlc2hMb2NhbGl6ZWRDbGFzcyhtYWluUGFnZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVmcmVzaExvY2FsaXplZENsYXNzKGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBsYW5nIG9mIFsnaHInLCAnZW4nXSkge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGxhbmcpO1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChsb2NhbGUpO1xuICAgIH1cblxuXG5cblxuICAgIGZ1bmN0aW9uIHJlbmRlclVzZXJzKHdlZWtOdW0sIHVzZXJEYXRhID0gW10pIHtcbiAgICAgICAgd2Vla051bSA9IE51bWJlcih3ZWVrTnVtKTtcbiAgICAgICAgY29uc3Qgd2Vla09iaiA9IHVzZXJEYXRhLmZpbmQodyA9PiB3LndlZWsgPT09IHdlZWtOdW0pO1xuICAgICAgICBpZiAoIXdlZWtPYmogfHwgIXdlZWtPYmouZGF0YSB8fCAhQXJyYXkuaXNBcnJheSh3ZWVrT2JqLmRhdGEudXNlcnMpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCfQndC10LLRltGA0L3QsCDRgdGC0YDRg9C60YLRg9GA0LAg0LTQsNC90LjRhScpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaXNTdGFnZUVuZGVkID0gd2Vla09iai5kYXRhLmlzU3RhZ2VFbmRlZFxuXG4gICAgICAgIHVzZXJEYXRhID0gd2Vla09iai5kYXRhLnVzZXJzO1xuXG4gICAgICAgIGNvbnN0IHdpbm5lckFkZGl0aW9uYWxQcml6ZSA9IHVzZXJEYXRhLmZpbmQodSA9PiB7XG4gICAgICAgICAgICBpZih1Lndpbm5lciA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cblxuICAgICAgICBjb25zdCBjdXJyZW50VXNlciA9IHVzZXJEYXRhLmZpbmQodXNlciA9PiB1c2VyLnVzZXJpZCA9PT0gdXNlcklkKTtcblxuICAgICAgICBpZih1c2VySWQgJiYgIWN1cnJlbnRVc2VyICYmIGlzVmVyaWZpZWRVc2VyKXtcbiAgICAgICAgICAgIHVzZXJEYXRhID0gWy4uLnVzZXJEYXRhLCB7dXNlcmlkOiB1c2VySWQsIHBvaW50czogMH1dXG4gICAgICAgIH1cbiAgICAgICAgcG9wdWxhdGVVc2Vyc1RhYmxlKHVzZXJEYXRhLCB1c2VySWQsIHdlZWtOdW0sIGN1cnJlbnRVc2VyLCBpc1ZlcmlmaWVkVXNlciwgaXNTdGFnZUVuZGVkLCB3aW5uZXJBZGRpdGlvbmFsUHJpemUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBvcHVsYXRlVXNlcnNUYWJsZSh1c2VycywgY3VycmVudFVzZXJJZCwgd2VlaywgY3VycmVudFVzZXIsIGlzVmVyaWZpZWRVc2VyLCBpc1N0YWdlRW5kZWQsIHdpbm5lckFkZGl0aW9uYWxQcml6ZSkge1xuICAgICAgICBpZiAoIXVzZXJzPy5sZW5ndGgpIHJldHVybjtcbiAgICAgICAgcmVzdWx0c1RhYmxlLmlubmVySFRNTCA9ICcnO1xuICAgICAgICByZXN1bHRzVGFibGVPdGhlci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgc2Vjb25kVGFibGVPdGhlci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgc2Vjb25kVGFibGUuaW5uZXJIVE1MID0gJyc7XG5cblxuICAgICAgICBjb25zdCBpc1RvcEN1cnJlbnRVc2VyID0gY3VycmVudFVzZXIgJiYgdXNlcnMuc2xpY2UoMCwgMTApLnNvbWUodXNlciA9PiB1c2VyLnVzZXJpZCA9PT0gY3VycmVudFVzZXJJZCk7XG5cbiAgICAgICAgY29uc3QgdG9wVXNlcnNMZW5ndGggPSAhdXNlcklkIHx8IGlzVG9wQ3VycmVudFVzZXIgID8gMTAgOiAxMDtcblxuICAgICAgICBjb25zdCB0b3BVc2VycyA9IHVzZXJzLnNsaWNlKDAsIHRvcFVzZXJzTGVuZ3RoKTtcblxuICAgICAgICB0b3BVc2Vycy5mb3JFYWNoKHVzZXIgPT4ge1xuICAgICAgICAgICAgZGlzcGxheVVzZXIodXNlciwgdXNlci51c2VyaWQgPT09IGN1cnJlbnRVc2VySWQsIHJlc3VsdHNUYWJsZSwgdG9wVXNlcnMsIGlzVG9wQ3VycmVudFVzZXIsIHdlZWspO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYoaXNWZXJpZmllZFVzZXIgJiYgIWN1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgICBkaXNwbGF5VXNlcihjdXJyZW50VXNlciwgdHJ1ZSwgcmVzdWx0c1RhYmxlT3RoZXIsIHVzZXJzLCBmYWxzZSwgd2Vlayk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWlzVG9wQ3VycmVudFVzZXIgJiYgY3VycmVudFVzZXIpIHtcbiAgICAgICAgICAgIGRpc3BsYXlVc2VyKGN1cnJlbnRVc2VyLCB0cnVlLCByZXN1bHRzVGFibGVPdGhlciwgdXNlcnMsIGZhbHNlLCB3ZWVrKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlVc2VyKHVzZXIsIGlzQ3VycmVudFVzZXIsIHRhYmxlLCB1c2VycywgaXNUb3BDdXJyZW50VXNlciwgd2Vlaykge1xuXG4gICAgICAgIGNvbnN0IHJlbmRlclJvdyA9ICh1c2VyRGF0YSwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IGhpZ2hsaWdodCA9IGZhbHNlLCBuZWlnaGJvciA9IGZhbHNlIH0gPSBvcHRpb25zO1xuICAgICAgICAgICAgY29uc3QgdXNlclJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKCd0YWJsZV9fcm93Jyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHVzZXJQbGFjZSA9IHVzZXJzLmluZGV4T2YodXNlckRhdGEpICsgMTtcbiAgICAgICAgICAgIGNvbnN0IHByaXplS2V5ID0gZGVidWcgPyBudWxsIDogZ2V0UHJpemVUcmFuc2xhdGlvbktleSh1c2VyUGxhY2UsIHdlZWspO1xuXG4gICAgICAgICAgICBpZiAodXNlclBsYWNlIDw9IDMpIHtcbiAgICAgICAgICAgICAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoYHBsYWNlJHt1c2VyUGxhY2V9YCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChoaWdobGlnaHQgfHwgaXNDdXJyZW50VXNlciAmJiAhbmVpZ2hib3IpIHtcbiAgICAgICAgICAgICAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoJ3lvdScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChuZWlnaGJvcikge1xuICAgICAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZCgnX25laWdoYm9yJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHVzZXJSb3cuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuICAgICAgICAgICAgICAgICR7dXNlclBsYWNlIDwgMTAgPyAnMCcgKyB1c2VyUGxhY2UgOiB1c2VyUGxhY2V9XG4gICAgICAgICAgICAgICAgJHtpc0N1cnJlbnRVc2VyICYmICFuZWlnaGJvciA/ICc8c3BhbiBjbGFzcz1cInlvdVwiPicgKyB0cmFuc2xhdGVLZXkoXCJ5b3VcIikgKyAnPC9zcGFuPicgOiAnJ31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuICAgICAgICAgICAgICAgICR7aXNDdXJyZW50VXNlciAmJiAhbmVpZ2hib3IgPyB1c2VyRGF0YS51c2VyaWQgOiBtYXNrVXNlcklkKHVzZXJEYXRhLnVzZXJpZCl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke051bWJlcih1c2VyRGF0YS5wb2ludHMpLnRvRml4ZWQoMil9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke3ByaXplS2V5ID8gdHJhbnNsYXRlS2V5KHByaXplS2V5KSA6ICcgLSAnfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG5cbiAgICAgICAgICAgIHRhYmxlLmFwcGVuZCh1c2VyUm93KTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGlzQ3VycmVudFVzZXIgJiYgIWlzVG9wQ3VycmVudFVzZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdXNlcnMuaW5kZXhPZih1c2VyKTtcbiAgICAgICAgICAgIGlmICh1c2Vyc1tpbmRleCAtIDFdKSB7XG4gICAgICAgICAgICAgICAgcmVuZGVyUm93KHVzZXJzW2luZGV4IC0gMV0sIHsgbmVpZ2hib3I6IHRydWUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZW5kZXJSb3codXNlciwgeyBoaWdobGlnaHQ6IHRydWUgfSk7XG4gICAgICAgICAgICBpZiAodXNlcnNbaW5kZXggKyAxXSkge1xuICAgICAgICAgICAgICAgIHJlbmRlclJvdyh1c2Vyc1tpbmRleCArIDFdLCB7IG5laWdoYm9yOiB0cnVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVuZGVyUm93KHVzZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdFByb2dyZXNzQmFyKCkge1xuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvZ3Jlc3NCYXJDYW52YXMnKTtcbiAgICAgICAgY29uc3QgcGVyY2VudEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvZ3Jlc3NQZXJjZW50Jyk7XG4gICAgICAgIGlmICghY2FudmFzIHx8ICFwZXJjZW50RWxlbWVudCkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICBcbiAgICAgICAgLy8g0JrQvtC90YHRgtCw0L3RgtC4XG4gICAgICAgIGNvbnN0IGJhckhlaWdodCA9IDIwOyAvLyDQktC40YHQvtGC0LAg0L/RgNC+0LPRgNC10YEt0LHQsNGA0YNcbiAgICAgICAgY29uc3Qgc2VnbWVudFdpZHRoID0gNDsgLy8g0KjQuNGA0LjQvdCwINC+0LTQvdC+0LPQviDRgdC10LPQvNC10L3RgtCwXG4gICAgICAgIGNvbnN0IHNlZ21lbnRIZWlnaHQgPSAxNDsgLy8g0JLQuNGB0L7RgtCwINC+0LTQvdC+0LPQviDRgdC10LPQvNC10L3RgtCwXG4gICAgICAgIGNvbnN0IHNlZ21lbnRHYXAgPSAyOyAvLyDQn9GA0L7QvNGW0LbQvtC6INC80ZbQtiDRgdC10LPQvNC10L3RgtCw0LzQuFxuICAgICAgICBjb25zdCBwYWRkaW5nID0gMjsgLy8g0JLRltC00YHRgtGD0L8g0LLRltC0INC60YDQsNGX0LJcbiAgICAgICAgY29uc3Qgc2VnbWVudFJhZGl1cyA9IDE7IC8vIEJvcmRlciByYWRpdXMg0LTQu9GPINGB0LXQs9C80LXQvdGC0ZbQslxuICAgICAgICBcbiAgICAgICAgLy8g0J/QsNGA0LDQvNC10YLRgNC4INCw0L3RltC80LDRhtGW0ZdcbiAgICAgICAgbGV0IGN1cnJlbnRQcm9ncmVzcyA9IDA7IC8vINCf0L7RgtC+0YfQvdC40Lkg0L/RgNC+0LPRgNC10YEgKDAtMTAwKVxuICAgICAgICBjb25zdCB0YXJnZXRQcm9ncmVzcyA9IDEwMDsgLy8g0KbRltC70YzQvtCy0LjQuSDQv9GA0L7Qs9GA0LXRgVxuICAgICAgICBjb25zdCBhbmltYXRpb25EdXJhdGlvbiA9IDYwMDAwOyAvLyDQotGA0LjQstCw0LvRltGB0YLRjCDQsNC90ZbQvNCw0YbRltGXINCyINC80ZbQu9GW0YHQtdC60YPQvdC00LDRhVxuICAgICAgICBsZXQgc3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgbGV0IGFuaW1hdGlvbklkID0gbnVsbDtcbiAgICAgICAgbGV0IG1heFNlZ21lbnRzID0gMDtcbiAgICAgICAgXG4gICAgICAgIGZ1bmN0aW9uIHJlc2l6ZUNhbnZhcygpIHtcbiAgICAgICAgICAgIC8vINCe0YLRgNC40LzRg9GU0LzQviDRgNC+0LfQvNGW0YDQuCDQutC+0L3RgtC10LnQvdC10YDQsFxuICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gY2FudmFzLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICBjb25zdCBjb250YWluZXJXaWR0aCA9IGNvbnRhaW5lci5vZmZzZXRXaWR0aCB8fCA3Njg7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCS0YHRgtCw0L3QvtCy0LvRjtGU0LzQviDRgNC+0LfQvNGW0YDQuCBjYW52YXNcbiAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IGNvbnRhaW5lcldpZHRoO1xuICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IGJhckhlaWdodDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0KDQvtC30YDQsNGF0L7QstGD0ZTQvNC+INC60ZbQu9GM0LrRltGB0YLRjCDRgdC10LPQvNC10L3RgtGW0LIsINGJ0L4g0L/QvtC80ZbRgdGC0Y/RgtGM0YHRj1xuICAgICAgICAgICAgY29uc3QgYXZhaWxhYmxlV2lkdGggPSBjb250YWluZXJXaWR0aCAtIChwYWRkaW5nICogMik7XG4gICAgICAgICAgICBjb25zdCBzZWdtZW50V2l0aEdhcCA9IHNlZ21lbnRXaWR0aCArIHNlZ21lbnRHYXA7XG4gICAgICAgICAgICBtYXhTZWdtZW50cyA9IE1hdGguZmxvb3IoYXZhaWxhYmxlV2lkdGggLyBzZWdtZW50V2l0aEdhcCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCf0LXRgNC10LzQsNC70YzQvtCy0YPRlNC80L4g0Lcg0L/QvtGC0L7Rh9C90LjQvCDQv9GA0L7Qs9GA0LXRgdC+0LxcbiAgICAgICAgICAgIGlmIChjdXJyZW50UHJvZ3Jlc3MgPiAwKSB7XG4gICAgICAgICAgICAgICAgZHJhd1Byb2dyZXNzQmFyKGN1cnJlbnRQcm9ncmVzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGZ1bmN0aW9uIGRyYXdQcm9ncmVzc0Jhcihwcm9ncmVzcykge1xuICAgICAgICAgICAgLy8g0J7Rh9C40YnQsNGU0LzQviBjYW52YXNcbiAgICAgICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0JzQsNC70Y7RlNC80L4g0YDQsNC80LrRgyAo0LHRltC70LjQuSDQv9GA0Y/QvNC+0LrRg9GC0L3QuNC6KVxuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJyNGRkZGRkYnO1xuICAgICAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDE7XG4gICAgICAgICAgICBjdHguc3Ryb2tlUmVjdCgwLjUsIDAuNSwgY2FudmFzLndpZHRoIC0gMSwgY2FudmFzLmhlaWdodCAtIDEpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQoNC+0LfRgNCw0YXQvtCy0YPRlNC80L4g0LrRltC70YzQutGW0YHRgtGMINC30LDQv9C+0LLQvdC10L3QuNGFINGB0LXQs9C80LXQvdGC0ZbQslxuICAgICAgICAgICAgY29uc3QgZmlsbGVkU2VnbWVudHMgPSBNYXRoLmZsb29yKChwcm9ncmVzcyAvIDEwMCkgKiBtYXhTZWdtZW50cyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCc0LDQu9GO0ZTQvNC+INC30LDQv9C+0LLQvdC10L3RliDRgdC10LPQvNC10L3RgtC4INC3INC30LDQvtC60YDRg9Cz0LvQtdC90LjQvNC4INC60YPRgtCw0LzQuFxuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICcjRkZGRkZGJztcbiAgICAgICAgICAgIGNvbnN0IGNlbnRlclkgPSAoYmFySGVpZ2h0IC0gc2VnbWVudEhlaWdodCkgLyAyOyAvLyDQktC10YDRgtC40LrQsNC70YzQvdC1INGG0LXQvdGC0YDRg9Cy0LDQvdC90Y9cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWxsZWRTZWdtZW50czsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeCA9IHBhZGRpbmcgKyBpICogKHNlZ21lbnRXaWR0aCArIHNlZ21lbnRHYXApO1xuICAgICAgICAgICAgICAgIGNvbnN0IHkgPSBjZW50ZXJZO1xuXG4gICAgICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIGlmIChjdHgucm91bmRSZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vINCh0YPRh9Cw0YHQvdC40Lkg0LzQtdGC0L7QtCAo0L/RltC00YLRgNC40LzRg9GU0YLRjNGB0Y8g0LIg0L3QvtCy0LjRhSDQsdGA0LDRg9C30LXRgNCw0YUpXG4gICAgICAgICAgICAgICAgICAgIGN0eC5yb3VuZFJlY3QoeCwgeSwgc2VnbWVudFdpZHRoLCBzZWdtZW50SGVpZ2h0LCBzZWdtZW50UmFkaXVzKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBGYWxsYmFjayDQtNC70Y8g0YHRgtCw0YDQuNGFINCx0YDQsNGD0LfQtdGA0ZbQslxuICAgICAgICAgICAgICAgICAgICBjb25zdCByID0gc2VnbWVudFJhZGl1cztcbiAgICAgICAgICAgICAgICAgICAgY3R4Lm1vdmVUbyh4ICsgciwgeSk7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5saW5lVG8oeCArIHNlZ21lbnRXaWR0aCAtIHIsIHkpO1xuICAgICAgICAgICAgICAgICAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4ICsgc2VnbWVudFdpZHRoLCB5LCB4ICsgc2VnbWVudFdpZHRoLCB5ICsgcik7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5saW5lVG8oeCArIHNlZ21lbnRXaWR0aCwgeSArIHNlZ21lbnRIZWlnaHQgLSByKTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCArIHNlZ21lbnRXaWR0aCwgeSArIHNlZ21lbnRIZWlnaHQsIHggKyBzZWdtZW50V2lkdGggLSByLCB5ICsgc2VnbWVudEhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5saW5lVG8oeCArIHIsIHkgKyBzZWdtZW50SGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCwgeSArIHNlZ21lbnRIZWlnaHQsIHgsIHkgKyBzZWdtZW50SGVpZ2h0IC0gcik7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5saW5lVG8oeCwgeSArIHIpO1xuICAgICAgICAgICAgICAgICAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4LCB5LCB4ICsgciwgeSk7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlUHJvZ3Jlc3MoKSB7XG4gICAgICAgICAgICBjb25zdCBlbGFwc2VkID0gRGF0ZS5ub3coKSAtIHN0YXJ0VGltZTtcbiAgICAgICAgICAgIGxldCBwcm9ncmVzcyA9IChlbGFwc2VkIC8gYW5pbWF0aW9uRHVyYXRpb24pICogMTAwO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQl9Cw0YbQuNC60LvQtdC90L3Rjzog0Y/QutGJ0L4g0LTQvtGB0Y/Qs9C70LggMTAwJSwg0L/QvtGH0LjQvdCw0ZTQvNC+INC30L3QvtCy0YMg0LcgMCVcbiAgICAgICAgICAgIGlmIChwcm9ncmVzcyA+PSB0YXJnZXRQcm9ncmVzcykge1xuICAgICAgICAgICAgICAgIHByb2dyZXNzID0gMDtcbiAgICAgICAgICAgICAgICBzdGFydFRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjdXJyZW50UHJvZ3Jlc3MgPSBwcm9ncmVzcztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0J7QvdC+0LLQu9GO0ZTQvNC+INCy0ZbQtNC+0LHRgNCw0LbQtdC90L3Rj1xuICAgICAgICAgICAgZHJhd1Byb2dyZXNzQmFyKHByb2dyZXNzKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0J7QvdC+0LLQu9GO0ZTQvNC+INCy0ZbQtNGB0L7RgtC60LggKNGC0ZbQu9GM0LrQuCDRhtGW0LvRliDRh9C40YHQu9CwKVxuICAgICAgICAgICAgY29uc3QgcGVyY2VudCA9IE1hdGguZmxvb3IocHJvZ3Jlc3MpO1xuICAgICAgICAgICAgcGVyY2VudEVsZW1lbnQudGV4dENvbnRlbnQgPSBwZXJjZW50ICsgJyUnO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQn9GA0L7QtNC+0LLQttGD0ZTQvNC+INCw0L3RltC80LDRhtGW0Y4g0LHQtdC30LrRltC90LXRh9C90L5cbiAgICAgICAgICAgIGFuaW1hdGlvbklkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZVByb2dyZXNzKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8g0IbQvdGW0YbRltCw0LvRltC30YPRlNC80L4g0YDQvtC30LzRltGA0LggY2FudmFzXG4gICAgICAgIHJlc2l6ZUNhbnZhcygpO1xuICAgICAgICBcbiAgICAgICAgLy8g0J7QsdGA0L7QsdC60LAg0LfQvNGW0L3QuCDRgNC+0LfQvNGW0YDRgyDQstGW0LrQvdCwXG4gICAgICAgIGxldCByZXNpemVUaW1lb3V0O1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHJlc2l6ZVRpbWVvdXQpO1xuICAgICAgICAgICAgcmVzaXplVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc2l6ZUNhbnZhcygpO1xuICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICAvLyDQl9Cw0L/Rg9GB0LrQsNGU0LzQviDQsNC90ZbQvNCw0YbRltGOINC3INC90LXQstC10LvQuNC60L7RjiDQt9Cw0YLRgNC40LzQutC+0Y4g0LTQu9GPINC60L7RgNC10LrRgtC90L7Qs9C+INGA0L7Qt9GA0LDRhdGD0L3QutGDINGA0L7Qt9C80ZbRgNGW0LJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzaXplQ2FudmFzKCk7XG4gICAgICAgICAgICAgICAgc3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVQcm9ncmVzcygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgLy8g0JfRg9C/0LjQvdGP0ZTQvNC+INCw0L3RltC80LDRhtGW0Y4g0L/RgNC4INCy0LjRhdC+0LTRliDQtyB2aWV3cG9ydFxuICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgICAgICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFhbmltYXRpb25JZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g0JLRltC00L3QvtCy0LvRjtGU0LzQviDQsNC90ZbQvNCw0YbRltGOINC3INC/0L7RgtC+0YfQvdC+0LPQviDQv9GA0L7Qs9GA0LXRgdGDXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydFRpbWUgPSBEYXRlLm5vdygpIC0gKGN1cnJlbnRQcm9ncmVzcyAvIDEwMCkgKiBhbmltYXRpb25EdXJhdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVByb2dyZXNzKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYW5pbWF0aW9uSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbklkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbklkID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUoY2FudmFzKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0UGFydGljaXBhdGVDYW52YXMoKSB7XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwYXJ0aWNpcGF0ZUNhbnZhcycpO1xuICAgICAgICBpZiAoIWNhbnZhcykgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICBjYW52YXMud2lkdGggPSAxMzY2O1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gNTAwO1xuXG4gICAgICAgIC8vINCa0L7QvdGB0YLQsNC90YLQuCDQtNC70Y8g0YDQvtC30LzRltGA0ZbQsiDRgtCwINC/0L7Qt9C40YbRltC5XG4gICAgICAgIGNvbnN0IENBTlZBU19XSURUSCA9IDEzNjY7XG4gICAgICAgIGNvbnN0IENBTlZBU19IRUlHSFQgPSA1MDA7XG4gICAgICAgIGNvbnN0IFRSRUVfV0lEVEggPSAxNzU7XG4gICAgICAgIGNvbnN0IFRSRUVfSEVJR0hUID0gMTY3O1xuICAgICAgICBcbiAgICAgICAgLy8g0J/QsNGA0LDQvNC10YLRgNC4INGB0L/RgNCw0LnRgi3Qu9C40YHRgtCwXG4gICAgICAgIGNvbnN0IEZSQU1FU19QRVJfUk9XID0gNTsgLy8gNiDQutCw0LTRgNGW0LIg0LIg0YDRj9C00LrRg1xuICAgICAgICBjb25zdCBUT1RBTF9ST1dTID0gMjsgLy8gMiDRgNGP0LTQuFxuICAgICAgICBjb25zdCBTUFJJVEVfU0hFRVRfV0lEVEggPSAxMTAwOyAvLyDQoNC10LDQu9GM0L3QsCDRiNC40YDQuNC90LAg0YHQv9GA0LDQudGCLdC70LjRgdGC0LBcbiAgICAgICAgY29uc3QgU1BSSVRFX1NIRUVUX0hFSUdIVCA9IDQ2ODsgLy8g0KDQtdCw0LvRjNC90LAg0LLQuNGB0L7RgtCwINGB0L/RgNCw0LnRgi3Qu9C40YHRgtCwXG4gICAgICAgIFxuICAgICAgICAvLyDQoNC+0LfQvNGW0YDQuCDQvtC00L3QvtCz0L4g0LrQsNC00YDRgyDQsiDRgdC/0YDQsNC50YIt0LvQuNGB0YLRllxuICAgICAgICBjb25zdCBGUkFNRV9XSURUSCA9IE1hdGguZmxvb3IoU1BSSVRFX1NIRUVUX1dJRFRIIC8gRlJBTUVTX1BFUl9ST1cpOyAvLyB+MTgzcHhcbiAgICAgICAgY29uc3QgRlJBTUVfSEVJR0hUID0gTWF0aC5mbG9vcihTUFJJVEVfU0hFRVRfSEVJR0hUIC8gVE9UQUxfUk9XUyk7IC8vIDIzNHB4XG4gICAgICAgIFxuICAgICAgICAvLyDQoNC+0LfQvNGW0YDQuCDQvtC70LXQvdGPINC90LAgY2FudmFzICjQvNC+0LbQvdCwINC80LDRgdGI0YLQsNCx0YPQstCw0YLQuClcbiAgICAgICAgY29uc3QgREVFUl9TQ0FMRSA9IDAuNTsgLy8g0JzQsNGB0YjRgtCw0LEg0LTQu9GPINCy0ZbQtNC+0LHRgNCw0LbQtdC90L3RjyDQvdCwIGNhbnZhc1xuICAgICAgICBjb25zdCBERUVSX1dJRFRIID0gTWF0aC5mbG9vcihGUkFNRV9XSURUSCAqIERFRVJfU0NBTEUpOyAvLyB+OTJweFxuICAgICAgICBjb25zdCBERUVSX0hFSUdIVCA9IE1hdGguZmxvb3IoRlJBTUVfSEVJR0hUICogREVFUl9TQ0FMRSk7IC8vIDExN3B4XG5cbiAgICAgICAgLy8g0J/QvtC30LjRhtGW0Zcg0LXQu9C10LzQtdC90YLRltCyXG4gICAgICAgIGNvbnN0IHRyZWVYID0gQ0FOVkFTX1dJRFRIIC8gMiAtIDMwMDsgLy8g0KLRgNC+0YXQuCDQu9GW0LLRltGI0LUg0LLRltC0INGG0LXQvdGC0YDRg1xuICAgICAgICBjb25zdCB0cmVlWSA9IENBTlZBU19IRUlHSFQgLyAyIC0gVFJFRV9IRUlHSFQgLyAyO1xuICAgICAgICBcbiAgICAgICAgLy8g0J/QvtGH0LDRgtC60L7QstCwINC/0L7Qt9C40YbRltGPINC+0LvQtdC90Y8gKNC/0YDQsNCy0ZbRiNC1INCy0ZbQtCDRj9C70LjQvdC60LgpXG4gICAgICAgIGxldCBkZWVyWCA9IENBTlZBU19XSURUSCAvIDIgKyA1MDtcbiAgICAgICAgbGV0IGRlZXJZID0gQ0FOVkFTX0hFSUdIVCAvIDIgLSBERUVSX0hFSUdIVCAvIDIgKyAzMDtcbiAgICAgICAgXG4gICAgICAgIC8vINCf0LDRgNCw0LzQtdGC0YDQuCDQsNC90ZbQvNCw0YbRltGXXG4gICAgICAgIGxldCBkZWVyRGlyZWN0aW9uID0gLTE7IC8vIC0xID0g0LLQu9GW0LLQviAo0L/QvtGH0LjQvdCw0ZTQvNC+INC3INGA0YPRhdGDINCy0LvRltCy0L4pLCAxID0g0LLQv9GA0LDQstC+XG4gICAgICAgIGNvbnN0IGRlZXJTcGVlZCA9IDAuNTsgLy8g0KjQstC40LTQutGW0YHRgtGMINGA0YPRhdGDXG4gICAgICAgIGNvbnN0IGRlZXJNaW5YID0gQ0FOVkFTX1dJRFRIIC8gMiAtIDIwMDsgLy8g0JzRltC90ZbQvNCw0LvRjNC90LAg0L/QvtC30LjRhtGW0Y8gKNC70ZbQstC+0YDRg9GHKVxuICAgICAgICBjb25zdCBkZWVyTWF4WCA9IENBTlZBU19XSURUSCAvIDIgKyAzMDA7IC8vINCc0LDQutGB0LjQvNCw0LvRjNC90LAg0L/QvtC30LjRhtGW0Y8gKNC/0YDQsNCy0L7RgNGD0YcpXG4gICAgICAgIGxldCBhbmltYXRpb25JZCA9IG51bGw7XG5cbiAgICAgICAgLy8g0KHRgtCw0L3QuCDQsNC90ZbQvNCw0YbRltGXINC+0LvQtdC90Y9cbiAgICAgICAgY29uc3QgREVFUl9TVEFURSA9IHtcbiAgICAgICAgICAgIFdBTEtJTkc6ICd3YWxraW5nJyxcbiAgICAgICAgICAgIElETEU6ICdpZGxlJ1xuICAgICAgICB9O1xuICAgICAgICBsZXQgZGVlclN0YXRlID0gREVFUl9TVEFURS5XQUxLSU5HO1xuICAgICAgICBsZXQgZnJhbWVJbmRleCA9IDA7IC8vINCG0L3QtNC10LrRgSDQv9C+0YLQvtGH0L3QvtCz0L4g0LrQsNC00YDRgyDQtNC70Y8g0YXQvtC00YzQsdC4ICgwLTQg0LTQu9GPINC60LDQtNGA0ZbQsiAwLTQpXG4gICAgICAgIGxldCBmcmFtZUNvdW50ZXIgPSAwOyAvLyDQm9GW0YfQuNC70YzQvdC40Log0LTQu9GPINC60L7QvdGC0YDQvtC70Y4g0YjQstC40LTQutC+0YHRgtGWINCw0L3RltC80LDRhtGW0ZdcbiAgICAgICAgY29uc3QgRlJBTUVfREVMQVkgPSAxMjsgLy8g0JfQsNGC0YDQuNC80LrQsCDQvNGW0LYg0LrQsNC00YDQsNC80LggKNCx0ZbQu9GM0YjQtSA9INC/0L7QstGW0LvRjNC90ZbRiNC1LCDQv9C70LDQstC90ZbRiNC1KVxuICAgICAgICBjb25zdCBXQUxLSU5HX0ZSQU1FUyA9IDU7IC8vINCa0ZbQu9GM0LrRltGB0YLRjCDQutCw0LTRgNGW0LIg0LTQu9GPINGF0L7QtNGM0LHQuCAo0LLRgdGWIDUg0LrQsNC00YDRltCyOiAwLTQpXG4gICAgICAgIGNvbnN0IFdBTEtJTkdfU1RBUlRfRlJBTUUgPSAwOyAvLyDQn9C+0YfQsNGC0LrQvtCy0LjQuSDQutCw0LTRgCDRhdC+0LTRjNCx0LggKNGW0L3QtNC10LrRgSAwKVxuICAgICAgICBjb25zdCBGUkFNRV9SRVBFQVQgPSAyOyAvLyDQmtGW0LvRjNC60ZbRgdGC0Ywg0YDQsNC30ZbQsiDQv9C+0LrQsNC30YPQstCw0YLQuCDQutC+0LbQtdC9INC60LDQtNGAICjQtNC70Y8g0L/Qu9Cw0LLQvdC+0YHRgtGWKVxuICAgICAgICBsZXQgZnJhbWVSZXBlYXRDb3VudGVyID0gMDsgLy8g0JvRltGH0LjQu9GM0L3QuNC6INC/0L7QstGC0L7RgNC10L3RjCDQutCw0LTRgNGDXG4gICAgICAgIGxldCBpZGxlVGltZXIgPSAwOyAvLyDQotCw0LnQvNC10YAg0LTQu9GPINC30YPQv9C40L3QutC4XG4gICAgICAgIGxldCBpZGxlRHVyYXRpb24gPSAwOyAvLyDQotGA0LjQstCw0LvRltGB0YLRjCDQt9GD0L/QuNC90LrQuCDQsiDQutCw0LTRgNCw0YUgKNCy0LjQv9Cw0LTQutC+0LLQsCDQstGW0LQgMSDQtNC+IDMg0YHQtdC60YPQvdC0KVxuICAgICAgICBjb25zdCBJRExFX01JTl9EVVJBVElPTiA9IDYwOyAvLyDQnNGW0L3RltC80LDQu9GM0L3QsCDRgtGA0LjQstCw0LvRltGB0YLRjCDQt9GD0L/QuNC90LrQuCAoMSDRgdC10LrRg9C90LTQsCDQv9GA0LggNjBmcHMpXG4gICAgICAgIGNvbnN0IElETEVfTUFYX0RVUkFUSU9OID0gMTgwOyAvLyDQnNCw0LrRgdC40LzQsNC70YzQvdCwINGC0YDQuNCy0LDQu9GW0YHRgtGMINC30YPQv9C40L3QutC4ICgzINGB0LXQutGD0L3QtNC4INC/0YDQuCA2MGZwcylcblxuICAgICAgICAvLyDQl9Cw0LLQsNC90YLQsNC20LXQvdC90Y8g0LfQvtCx0YDQsNC20LXQvdGMXG4gICAgICAgIGNvbnN0IGltYWdlcyA9IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IG5ldyBJbWFnZSgpLFxuICAgICAgICAgICAgdHJlZTogbmV3IEltYWdlKCksXG4gICAgICAgICAgICBkZWVyU3ByaXRlOiBuZXcgSW1hZ2UoKSAvLyDQodC/0YDQsNC50YIt0LvQuNGB0YIg0LfQsNC80ZbRgdGC0Ywg0L7QtNC90L7Qs9C+INC30L7QsdGA0LDQttC10L3QvdGPXG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IGltYWdlc0xvYWRlZCA9IDA7XG4gICAgICAgIGNvbnN0IHRvdGFsSW1hZ2VzID0gMztcblxuICAgICAgICBmdW5jdGlvbiBvbkltYWdlTG9hZCgpIHtcbiAgICAgICAgICAgIGltYWdlc0xvYWRlZCsrO1xuICAgICAgICAgICAgaWYgKGltYWdlc0xvYWRlZCA9PT0gdG90YWxJbWFnZXMpIHtcbiAgICAgICAgICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNGP0ZTQvNC+LCDRh9C4INGB0L/RgNCw0LnRgi3Qu9C40YHRgiDQt9Cw0LLQsNC90YLQsNC20LjQstGB0Y8g0LrQvtGA0LXQutGC0L3QvlxuICAgICAgICAgICAgICAgIGlmIChpbWFnZXMuZGVlclNwcml0ZS5jb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRGVlciBzcHJpdGUgbG9hZGVkOicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBpbWFnZXMuZGVlclNwcml0ZS53aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogaW1hZ2VzLmRlZXJTcHJpdGUuaGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICAgICAgZnJhbWVXaWR0aDogRlJBTUVfV0lEVEgsXG4gICAgICAgICAgICAgICAgICAgICAgICBmcmFtZUhlaWdodDogRlJBTUVfSEVJR0hULFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVlcldpZHRoOiBERUVSX1dJRFRILFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVlckhlaWdodDogREVFUl9IRUlHSFRcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRyYXdDYW52YXMoKTtcbiAgICAgICAgICAgICAgICBzdGFydEFuaW1hdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaW1hZ2VzLmJhY2tncm91bmQub25sb2FkID0gb25JbWFnZUxvYWQ7XG4gICAgICAgIGltYWdlcy50cmVlLm9ubG9hZCA9IG9uSW1hZ2VMb2FkO1xuICAgICAgICBpbWFnZXMuZGVlclNwcml0ZS5vbmxvYWQgPSBvbkltYWdlTG9hZDtcblxuICAgICAgICBpbWFnZXMuYmFja2dyb3VuZC5zcmMgPSAnaW1nL3BhcnRpY2lwYXRlL2NhbnZhcy1iZy5wbmcnO1xuICAgICAgICBpbWFnZXMudHJlZS5zcmMgPSAnaW1nL3BhcnRpY2lwYXRlL3RyZWUucG5nJztcbiAgICAgICAgLy8g0JLQuNC60L7RgNC40YHRgtC+0LLRg9GU0LzQviDRgdC/0YDQsNC50YIt0LvQuNGB0YIgKNGP0LrRidC+INGE0LDQudC7INC90LDQt9C40LLQsNGU0YLRjNGB0Y8gZGVlci1zcHJpdGUucG5nLCDQt9C80ZbQvdGW0YLRjCDQvdCw0LfQstGDKVxuICAgICAgICBpbWFnZXMuZGVlclNwcml0ZS5zcmMgPSAnaW1nL3BhcnRpY2lwYXRlL2RlZXItc3ByaXRlLnBuZyc7XG5cbiAgICAgICAgLy8g0J7RgtGA0LjQvNGD0ZTQvNC+INGW0L3QtNC10LrRgSDQutCw0LTRgNGDINCyINGB0L/RgNCw0LnRgi3Qu9C40YHRgtGWXG4gICAgICAgIGZ1bmN0aW9uIGdldFNwcml0ZUZyYW1lSW5kZXgoKSB7XG4gICAgICAgICAgICAvLyDQktC10YDRhdC90ZbQuSDRgNGP0LTQvtC6ICgwKSA9INGA0YPRhSDQstC70ZbQstC+LCDQvdC40LbQvdGW0Lkg0YDRj9C00L7QuiAoMSkgPSDRgNGD0YUg0LLQv9GA0LDQstC+XG4gICAgICAgICAgICBjb25zdCByb3cgPSBkZWVyRGlyZWN0aW9uID09PSAtMSA/IDAgOiAxOyAvLyAtMSA9INCy0LvRltCy0L4gKNGA0Y/QtNC+0LogMCksIDEgPSDQstC/0YDQsNCy0L4gKNGA0Y/QtNC+0LogMSlcbiAgICAgICAgICAgIGxldCBjb2wgPSAwO1xuXG4gICAgICAgICAgICBpZiAoZGVlclN0YXRlID09PSBERUVSX1NUQVRFLldBTEtJTkcpIHtcbiAgICAgICAgICAgICAgICAvLyDQmtCw0LTRgNC4INGF0L7QtNGM0LHQuDogMCwgMSwgMiwgMywgNCAo0LLRgdGWIDUg0LrQsNC00YDRltCyKVxuICAgICAgICAgICAgICAgIC8vIGZyYW1lSW5kZXgg0YbQuNC60LvRltGH0L3QviDQudC00LUgMCwgMSwgMiwgMywgNCwgMCwgMSwgMiwgMywgNC4uLlxuICAgICAgICAgICAgICAgIC8vINCU0LvRjyDQvtCx0L7RhSDQvdCw0L/RgNGP0LzQutGW0LIg0LLQuNC60L7RgNC40YHRgtC+0LLRg9GU0LzQviDQvtC00L3QsNC60L7QstGDINC/0L7RgdC70ZbQtNC+0LLQvdGW0YHRgtGMINC60LDQtNGA0ZbQslxuICAgICAgICAgICAgICAgIGNvbCA9IGZyYW1lSW5kZXggJSBXQUxLSU5HX0ZSQU1FUzsgLy8gMCwgMSwgMiwgMywgNFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyDQodGC0LDQvSDQt9GD0L/QuNC90LrQuCAoSURMRSkgLSDQstC40LrQvtGA0LjRgdGC0L7QstGD0ZTQvNC+INC60LDQtNGAIDBcbiAgICAgICAgICAgICAgICBjb2wgPSAwOyAvLyBJZGxlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB7IHJvdywgY29sIH07XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBkcmF3Q2FudmFzKCkge1xuICAgICAgICAgICAgLy8g0J7Rh9C40YnQtdC90L3RjyBjYW52YXNcbiAgICAgICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgQ0FOVkFTX1dJRFRILCBDQU5WQVNfSEVJR0hUKTtcblxuICAgICAgICAgICAgLy8g0JzQsNC70Y7RlNC80L4g0YTQvtC9XG4gICAgICAgICAgICBpZiAoaW1hZ2VzLmJhY2tncm91bmQuY29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKGltYWdlcy5iYWNrZ3JvdW5kLCAwLCAwLCBDQU5WQVNfV0lEVEgsIENBTlZBU19IRUlHSFQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDQnNCw0LvRjtGU0LzQviDRj9C70LjQvdC60YMgKNGB0YLQsNGC0LjRh9C90LApXG4gICAgICAgICAgICBpZiAoaW1hZ2VzLnRyZWUuY29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKGltYWdlcy50cmVlLCB0cmVlWCwgdHJlZVksIFRSRUVfV0lEVEgsIFRSRUVfSEVJR0hUKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8g0JzQsNC70Y7RlNC80L4g0L7Qu9C10L3RjyDQt9GWINGB0L/RgNCw0LnRgi3Qu9C40YHRgtCwXG4gICAgICAgICAgICBpZiAoaW1hZ2VzLmRlZXJTcHJpdGUuY29tcGxldGUgJiYgRlJBTUVfV0lEVEggPiAwICYmIEZSQU1FX0hFSUdIVCA+IDApIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHJvdywgY29sIH0gPSBnZXRTcHJpdGVGcmFtZUluZGV4KCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8g0JrQvtC+0YDQtNC40L3QsNGC0Lgg0LrQsNC00YDRgyDQsiDRgdC/0YDQsNC50YIt0LvQuNGB0YLRllxuICAgICAgICAgICAgICAgIGNvbnN0IHNvdXJjZVggPSBjb2wgKiBGUkFNRV9XSURUSDtcbiAgICAgICAgICAgICAgICBjb25zdCBzb3VyY2VZID0gcm93ICogRlJBTUVfSEVJR0hUO1xuXG4gICAgICAgICAgICAgICAgLy8g0JLQuNGA0ZbQt9Cw0ZTQvNC+INC60LDQtNGAINC30ZYg0YHQv9GA0LDQudGCLdC70LjRgdGC0LAg0YLQsCDQvNCw0LvRjtGU0LzQviDQvdCwIGNhbnZhc1xuICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICAgICAgICAgIGltYWdlcy5kZWVyU3ByaXRlLFxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VYLCBzb3VyY2VZLCBGUkFNRV9XSURUSCwgRlJBTUVfSEVJR0hULCAvLyDQlNC20LXRgNC10LvQviAo0YHQv9GA0LDQudGCLdC70LjRgdGCKVxuICAgICAgICAgICAgICAgICAgICBkZWVyWCwgZGVlclksIERFRVJfV0lEVEgsIERFRVJfSEVJR0hUIC8vINCf0YDQuNC30L3QsNGH0LXQvdC90Y8gKGNhbnZhcylcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbiAgICAgICAgICAgIGZyYW1lQ291bnRlcisrO1xuXG4gICAgICAgICAgICAvLyDQntC90L7QstC70Y7RlNC80L4g0LDQvdGW0LzQsNGG0ZbRjiDQutCw0LTRgNGW0LIg0Lcg0L/QvtCy0YLQvtGA0LXQvdC90Y/QvCDQtNC70Y8g0L/Qu9Cw0LLQvdC+0YHRgtGWXG4gICAgICAgICAgICBpZiAoZnJhbWVDb3VudGVyID49IEZSQU1FX0RFTEFZKSB7XG4gICAgICAgICAgICAgICAgZnJhbWVDb3VudGVyID0gMDtcbiAgICAgICAgICAgICAgICBpZiAoZGVlclN0YXRlID09PSBERUVSX1NUQVRFLldBTEtJTkcpIHtcbiAgICAgICAgICAgICAgICAgICAgZnJhbWVSZXBlYXRDb3VudGVyKys7XG4gICAgICAgICAgICAgICAgICAgIC8vINCf0L7QutCw0LfRg9GU0LzQviDQutC+0LbQtdC9INC60LDQtNGAINC60ZbQu9GM0LrQsCDRgNCw0LfRltCyINC00LvRjyDQv9C70LDQstC90ZbRiNC+0Zcg0LDQvdGW0LzQsNGG0ZbRl1xuICAgICAgICAgICAgICAgICAgICBpZiAoZnJhbWVSZXBlYXRDb3VudGVyID49IEZSQU1FX1JFUEVBVCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZnJhbWVSZXBlYXRDb3VudGVyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vINCf0L7RgdC70ZbQtNC+0LLQvdC+INC/0YDQvtGF0L7QtNC40LzQviDRh9C10YDQtdC3INCy0YHRliDQutCw0LTRgNC4OiAwLCAxLCAyLCAzLCA0LCAwLCAxLCAyLCAzLCA0Li4uXG4gICAgICAgICAgICAgICAgICAgICAgICBmcmFtZUluZGV4ID0gKGZyYW1lSW5kZXggKyAxKSAlIFdBTEtJTkdfRlJBTUVTO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDQm9C+0LPRltC60LAg0YHRgtCw0L3RltCyINGC0LAg0YDRg9GF0YNcbiAgICAgICAgICAgIGlmIChkZWVyU3RhdGUgPT09IERFRVJfU1RBVEUuV0FMS0lORykge1xuICAgICAgICAgICAgICAgIC8vINCe0L3QvtCy0LvRjtGU0LzQviDQv9C+0LfQuNGG0ZbRjiDQvtC70LXQvdGPXG4gICAgICAgICAgICAgICAgZGVlclggKz0gZGVlclNwZWVkICogZGVlckRpcmVjdGlvbjtcblxuICAgICAgICAgICAgICAgIC8vINCf0LXRgNC10LLRltGA0Y/RlNC80L4g0LzQtdC20ZYg0YLQsCDQv9C10YDQtdGF0L7QtNC40LzQviDQtNC+INC30YPQv9C40L3QutC4XG4gICAgICAgICAgICAgICAgaWYgKGRlZXJYID49IGRlZXJNYXhYICYmIGRlZXJEaXJlY3Rpb24gPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g0JTQvtGB0Y/Qs9C70Lgg0L/RgNCw0LLQvtCz0L4g0LrRgNCw0Y4gLSDQt9GD0L/QuNC90Y/RlNC80L7RgdGPXG4gICAgICAgICAgICAgICAgICAgIGRlZXJYID0gZGVlck1heFg7XG4gICAgICAgICAgICAgICAgICAgIGRlZXJTdGF0ZSA9IERFRVJfU1RBVEUuSURMRTtcbiAgICAgICAgICAgICAgICAgICAgaWRsZVRpbWVyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgLy8g0JPQtdC90LXRgNGD0ZTQvNC+INCy0LjQv9Cw0LTQutC+0LLRgyDRgtGA0LjQstCw0LvRltGB0YLRjCDQt9GD0L/QuNC90LrQuCDQstGW0LQgMSDQtNC+IDMg0YHQtdC60YPQvdC0XG4gICAgICAgICAgICAgICAgICAgIGlkbGVEdXJhdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChJRExFX01BWF9EVVJBVElPTiAtIElETEVfTUlOX0RVUkFUSU9OICsgMSkpICsgSURMRV9NSU5fRFVSQVRJT047XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkZWVyWCA8PSBkZWVyTWluWCAmJiBkZWVyRGlyZWN0aW9uID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAvLyDQlNC+0YHRj9Cz0LvQuCDQu9GW0LLQvtCz0L4g0LrRgNCw0Y4gLSDQt9GD0L/QuNC90Y/RlNC80L7RgdGPXG4gICAgICAgICAgICAgICAgICAgIGRlZXJYID0gZGVlck1pblg7XG4gICAgICAgICAgICAgICAgICAgIGRlZXJTdGF0ZSA9IERFRVJfU1RBVEUuSURMRTtcbiAgICAgICAgICAgICAgICAgICAgaWRsZVRpbWVyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgLy8g0JPQtdC90LXRgNGD0ZTQvNC+INCy0LjQv9Cw0LTQutC+0LLRgyDRgtGA0LjQstCw0LvRltGB0YLRjCDQt9GD0L/QuNC90LrQuCDQstGW0LQgMSDQtNC+IDMg0YHQtdC60YPQvdC0XG4gICAgICAgICAgICAgICAgICAgIGlkbGVEdXJhdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChJRExFX01BWF9EVVJBVElPTiAtIElETEVfTUlOX0RVUkFUSU9OICsgMSkpICsgSURMRV9NSU5fRFVSQVRJT047XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChkZWVyU3RhdGUgPT09IERFRVJfU1RBVEUuSURMRSkge1xuICAgICAgICAgICAgICAgIGlkbGVUaW1lcisrO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vINCf0ZbRgdC70Y8g0LfQsNCy0LXRgNGI0LXQvdC90Y8g0LfRg9C/0LjQvdC60Lgg0LfQvNGW0L3RjtGU0LzQviDQvdCw0L/RgNGP0LzQvtC6INGC0LAg0L/QtdGA0LXRhdC+0LTQuNC80L4g0LTQviDRhdC+0LTRjNCx0LhcbiAgICAgICAgICAgICAgICBpZiAoaWRsZVRpbWVyID49IGlkbGVEdXJhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBkZWVyRGlyZWN0aW9uICo9IC0xOyAvLyDQl9C80ZbQvdGO0ZTQvNC+INC90LDQv9GA0Y/QvNC+0LogKNCy0LvRltCy0L4g4oaUINCy0L/RgNCw0LLQvilcbiAgICAgICAgICAgICAgICAgICAgZGVlclN0YXRlID0gREVFUl9TVEFURS5XQUxLSU5HO1xuICAgICAgICAgICAgICAgICAgICBmcmFtZUluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgZnJhbWVSZXBlYXRDb3VudGVyID0gMDsgLy8g0KHQutC40LTQsNGU0LzQviDQu9GW0YfQuNC70YzQvdC40Log0L/QvtCy0YLQvtGA0LXQvdGMXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDQn9C10YDQtdC80LDQu9GM0L7QstGD0ZTQvNC+IGNhbnZhc1xuICAgICAgICAgICAgZHJhd0NhbnZhcygpO1xuXG4gICAgICAgICAgICBhbmltYXRpb25JZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHN0YXJ0QW5pbWF0aW9uKCkge1xuICAgICAgICAgICAgaWYgKGFuaW1hdGlvbklkKSB7XG4gICAgICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uSWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYW5pbWF0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g0JfRg9C/0LjQvdGP0ZTQvNC+INCw0L3RltC80LDRhtGW0Y4g0L/RgNC4INCy0LjRhdC+0LTRliDQtyB2aWV3cG9ydCAo0L7Qv9GG0ZbQvtC90LDQu9GM0L3QvilcbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICAgICAgICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghYW5pbWF0aW9uSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QW5pbWF0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYW5pbWF0aW9uSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbklkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbklkID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGNhbnZhcyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdFNub3dmbGFrZXNDYW52YXMoKSB7XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzbm93Zmxha2VzQ2FudmFzJyk7XG4gICAgICAgIGlmICghY2FudmFzKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIGNvbnN0IGZhdlBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmF2LXBhZ2UnKTtcbiAgICAgICAgXG4gICAgICAgIC8vINCa0L7QvdGB0YLQsNC90YLQuFxuICAgICAgICBjb25zdCBTTk9XRkxBS0VfQ09VTlQgPSAxMDA7XG4gICAgICAgIGNvbnN0IFNOT1dGTEFLRV9NSU5fU0laRSA9IDQ7XG4gICAgICAgIGNvbnN0IFNOT1dGTEFLRV9NQVhfU0laRSA9IDEwO1xuICAgICAgICBjb25zdCBTTk9XRkxBS0VfTUlOX1NQRUVEID0gMC4xO1xuICAgICAgICBjb25zdCBTTk9XRkxBS0VfTUFYX1NQRUVEID0gMC4zO1xuICAgICAgICBjb25zdCBTTk9XRkxBS0VfV0lORF9SQU5HRSA9IDAuNDtcbiAgICAgICAgY29uc3QgU05PV0ZMQUtFX1NQQVdOX0lOVEVSVkFMID0gMjAwO1xuXG4gICAgICAgIGNvbnN0IHNub3dmbGFrZXMgPSBbXTtcbiAgICAgICAgbGV0IGxhc3RTbm93Zmxha2VUaW1lID0gMDtcbiAgICAgICAgbGV0IGFuaW1hdGlvbklkID0gbnVsbDtcbiAgICAgICAgXG4gICAgICAgIC8vINCS0YHRgtCw0L3QvtCy0LvRjtGU0LzQviDRgNC+0LfQvNGW0YAgY2FudmFzINC90LAg0LLQtdGB0YwgLmZhdi1wYWdlXG4gICAgICAgIGZ1bmN0aW9uIHJlc2l6ZUNhbnZhcygpIHtcbiAgICAgICAgICAgIGxldCBuZXdXaWR0aCwgbmV3SGVpZ2h0O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoZmF2UGFnZSkge1xuICAgICAgICAgICAgICAgIC8vINCS0LjQutC+0YDQuNGB0YLQvtCy0YPRlNC80L4gc2Nyb2xsSGVpZ2h0INC00LvRjyDQvtGC0YDQuNC80LDQvdC90Y8g0YDQtdCw0LvRjNC90L7RlyDQstC40YHQvtGC0Lgg0LrQvtC90YLQtdC90YLRg1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlY3QgPSBmYXZQYWdlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgICAgIG5ld1dpZHRoID0gcmVjdC53aWR0aCB8fCBmYXZQYWdlLm9mZnNldFdpZHRoIHx8IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICAgICAgICAgIC8vINCU0LvRjyDQstC40YHQvtGC0Lgg0LLQuNC60L7RgNC40YHRgtC+0LLRg9GU0LzQviBzY3JvbGxIZWlnaHQg0Y/QutGJ0L4g0LLRltC9INCx0ZbQu9GM0YjQuNC5INC30LAgb2Zmc2V0SGVpZ2h0XG4gICAgICAgICAgICAgICAgY29uc3Qgb2Zmc2V0SGVpZ2h0ID0gZmF2UGFnZS5vZmZzZXRIZWlnaHQgfHwgZmF2UGFnZS5jbGllbnRIZWlnaHQ7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2Nyb2xsSGVpZ2h0ID0gZmF2UGFnZS5zY3JvbGxIZWlnaHQ7XG4gICAgICAgICAgICAgICAgbmV3SGVpZ2h0ID0gTWF0aC5tYXgoc2Nyb2xsSGVpZ2h0LCBvZmZzZXRIZWlnaHQsIHJlY3QuaGVpZ2h0KSB8fCB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIEZhbGxiYWNrINC90LAgdmlld3BvcnRcbiAgICAgICAgICAgICAgICBuZXdXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICAgICAgICAgIG5ld0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0J/QtdGA0LXQstGW0YDRj9GU0LzQviDRh9C4INGA0L7Qt9C80ZbRgNC4INC30LzRltC90LjQu9C40YHRjyDQv9C10YDQtdC0INC+0L3QvtCy0LvQtdC90L3Rj9C8XG4gICAgICAgICAgICBpZiAoY2FudmFzLndpZHRoICE9PSBuZXdXaWR0aCB8fCBjYW52YXMuaGVpZ2h0ICE9PSBuZXdIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICBjYW52YXMud2lkdGggPSBuZXdXaWR0aDtcbiAgICAgICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gbmV3SGVpZ2h0O1xuICAgICAgICAgICAgICAgIC8vINCe0YfQuNGJ0LDRlNC80L4g0YHQvdGW0LbQuNC90LrQuCDQv9GA0Lgg0LfQvNGW0L3RliDRgNC+0LfQvNGW0YDRg1xuICAgICAgICAgICAgICAgIHNub3dmbGFrZXMubGVuZ3RoID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vINCS0YHRgtCw0L3QvtCy0LvRjtGU0LzQviDRgNC+0LfQvNGW0YAgY2FudmFzINC3INC90LXQstC10LvQuNC60L7RjiDQt9Cw0YLRgNC40LzQutC+0Y4g0LTQu9GPINC60L7RgNC10LrRgtC90L7Qs9C+INGA0L7Qt9GA0LDRhdGD0L3QutGDINGA0L7Qt9C80ZbRgNGW0LJcbiAgICAgICAgLy8g0JLQuNC60L7RgNC40YHRgtC+0LLRg9GU0LzQviDQutGW0LvRjNC60LAg0LrQsNC00YDRltCyINC00LvRjyDQs9Cw0YDQsNC90YLRltGXINC/0YDQsNCy0LjQu9GM0L3QvtCz0L4g0YDQvtC30LzRltGA0YNcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgIHJlc2l6ZUNhbnZhcygpO1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICByZXNpemVDYW52YXMoKTtcbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXNpemVDYW52YXMoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemVDYW52YXMpO1xuXG4gICAgICAgIC8vINCX0LDQstCw0L3RgtCw0LbQtdC90L3RjyDQt9C+0LHRgNCw0LbQtdC90L3RjyDRgdC90ZbQttC40L3QutC4XG4gICAgICAgIGNvbnN0IHNub3dmbGFrZUltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGxldCBpbWFnZUxvYWRlZCA9IGZhbHNlO1xuXG4gICAgICAgIHNub3dmbGFrZUltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaW1hZ2VMb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgLy8g0KfQtdC60LDRlNC80L4g0L/QvtC60Lgg0YHRgtC+0YDRltC90LrQsCDQstC40LnQtNC1INC30ZYg0YHRgtCw0L3RgyBsb2FkaW5nINC/0LXRgNC10LQg0YHRgtCw0YDRgtC+0Lwg0LDQvdGW0LzQsNGG0ZbRl1xuICAgICAgICAgICAgZnVuY3Rpb24gd2FpdEZvclBhZ2VSZWFkeSgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpc1BhZ2VMb2FkaW5nID0gbWFpblBhZ2UgJiYgbWFpblBhZ2UuY2xhc3NMaXN0LmNvbnRhaW5zKCdsb2FkaW5nJyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKGlzUGFnZUxvYWRpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g0K/QutGJ0L4g0YHRgtC+0YDRltC90LrQsCDRidC1INCyINGB0YLQsNC90ZYgbG9hZGluZywg0YfQtdC60LDRlNC80L4g0L/QvtC60LggbG9hZGVyINC/0YDQuNGF0L7QstCw0ZTRgtGM0YHRj1xuICAgICAgICAgICAgICAgICAgICAvLyBoaWRlTG9hZGVyINCy0LjQutC70LjQutCw0ZTRgtGM0YHRjyDRh9C10YDQtdC3IDMwMG1zINC/0ZbRgdC70Y8gcXVpY2tDaGVja0FuZFJlbmRlclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzaXplQ2FudmFzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzaXplQ2FudmFzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vINCU0L7QtNCw0YLQutC+0LLQsCDQv9C10YDQtdCy0ZbRgNC60LAg0L/RltGB0LvRjyDRidC1INC+0LTQvdC+0LPQviDQutCw0LTRgNGDXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNpemVDYW52YXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYW52YXMud2lkdGggPiAwICYmIGNhbnZhcy5oZWlnaHQgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRBbmltYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g0K/QutGJ0L4g0LLRgdC1INGJ0LUg0L3QtdC/0YDQsNCy0LjQu9GM0L3QuNC5INGA0L7Qt9C80ZbRgCwg0L/QvtCy0YLQvtGA0Y7RlNC80L5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KHdhaXRGb3JQYWdlUmVhZHksIDUwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSwgNDAwKTsgLy8g0KfQtdC60LDRlNC80L4g0YLRgNC+0YXQuCDQsdGW0LvRjNGI0LUg0L3RltC2IGhpZGVMb2FkZXIgKDMwMG1zKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vINCh0YLQvtGA0ZbQvdC60LAg0LPQvtGC0L7QstCwLCDQstGB0YLQsNC90L7QstC70Y7RlNC80L4g0YDQvtC30LzRltGAINGC0LAg0LfQsNC/0YPRgdC60LDRlNC80L5cbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc2l6ZUNhbnZhcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNpemVDYW52YXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNpemVDYW52YXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhbnZhcy53aWR0aCA+IDAgJiYgY2FudmFzLmhlaWdodCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QW5pbWF0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHdhaXRGb3JQYWdlUmVhZHkoKTtcbiAgICAgICAgfTtcbiAgICAgICAgc25vd2ZsYWtlSW1hZ2Uuc3JjID0gJ2ltZy9zbm93Zmxha2UucG5nJztcbiAgICAgICBcblxuICAgICAgICAvLyDQmtC70LDRgSDQtNC70Y8g0YHQvdGW0LbQuNC90LrQuFxuICAgICAgICBjbGFzcyBTbm93Zmxha2Uge1xuICAgICAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy54ID0gTWF0aC5yYW5kb20oKSAqIChjYW52YXMud2lkdGggfHwgd2luZG93LmlubmVyV2lkdGgpO1xuICAgICAgICAgICAgICAgIHRoaXMueSA9IC0yMDtcbiAgICAgICAgICAgICAgICB0aGlzLnNpemUgPSBNYXRoLnJhbmRvbSgpICogKFNOT1dGTEFLRV9NQVhfU0laRSAtIFNOT1dGTEFLRV9NSU5fU0laRSkgKyBTTk9XRkxBS0VfTUlOX1NJWkU7XG4gICAgICAgICAgICAgICAgdGhpcy5zcGVlZCA9IE1hdGgucmFuZG9tKCkgKiAoU05PV0ZMQUtFX01BWF9TUEVFRCAtIFNOT1dGTEFLRV9NSU5fU1BFRUQpICsgU05PV0ZMQUtFX01JTl9TUEVFRDtcbiAgICAgICAgICAgICAgICB0aGlzLndpbmQgPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiBTTk9XRkxBS0VfV0lORF9SQU5HRTtcbiAgICAgICAgICAgICAgICB0aGlzLm9wYWNpdHkgPSBNYXRoLnJhbmRvbSgpICogMC41ICsgMC41O1xuICAgICAgICAgICAgICAgIHRoaXMucm90YXRpb24gPSBNYXRoLnJhbmRvbSgpICogTWF0aC5QSSAqIDI7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3RhdGlvblNwZWVkID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMC4wMjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdXBkYXRlKCkge1xuICAgICAgICAgICAgICAgIHRoaXMueSArPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgICAgIHRoaXMueCArPSB0aGlzLndpbmQgKyAoTWF0aC5zaW4odGhpcy55ICogMC4wMSkgKiAwLjIpO1xuICAgICAgICAgICAgICAgIHRoaXMucm90YXRpb24gKz0gdGhpcy5yb3RhdGlvblNwZWVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkcmF3KCkge1xuICAgICAgICAgICAgICAgIGlmICghaW1hZ2VMb2FkZWQpIHJldHVybjtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNC60LAg0YfQuCBjYW52YXMg0LzQsNGUINC/0YDQsNCy0LjQu9GM0L3QuNC5INGA0L7Qt9C80ZbRgFxuICAgICAgICAgICAgICAgIGlmIChjYW52YXMud2lkdGggPT09IDAgfHwgY2FudmFzLmhlaWdodCA9PT0gMCkgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgY3R4LnNhdmUoKTtcbiAgICAgICAgICAgICAgICBjdHguZ2xvYmFsQWxwaGEgPSB0aGlzLm9wYWNpdHk7XG4gICAgICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZSh0aGlzLngsIHRoaXMueSk7XG4gICAgICAgICAgICAgICAgY3R4LnJvdGF0ZSh0aGlzLnJvdGF0aW9uKTtcbiAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgICAgICAgICBzbm93Zmxha2VJbWFnZSxcbiAgICAgICAgICAgICAgICAgICAgLXRoaXMuc2l6ZSAvIDIsXG4gICAgICAgICAgICAgICAgICAgIC10aGlzLnNpemUgLyAyLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNpemUsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2l6ZVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgY3R4LnJlc3RvcmUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaXNPZmZTY3JlZW4oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMueSA+IGNhbnZhcy5oZWlnaHQgKyAyMCB8fCBcbiAgICAgICAgICAgICAgICAgICAgICAgdGhpcy54IDwgLTIwIHx8IFxuICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnggPiBjYW52YXMud2lkdGggKyAyMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVNub3dmbGFrZSgpIHtcbiAgICAgICAgICAgIGlmIChzbm93Zmxha2VzLmxlbmd0aCA8IFNOT1dGTEFLRV9DT1VOVCkge1xuICAgICAgICAgICAgICAgIHNub3dmbGFrZXMucHVzaChuZXcgU25vd2ZsYWtlKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlU25vd2ZsYWtlcygpIHtcbiAgICAgICAgICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gICAgICAgICAgICBpZiAobm93IC0gbGFzdFNub3dmbGFrZVRpbWUgPiBTTk9XRkxBS0VfU1BBV05fSU5URVJWQUwpIHtcbiAgICAgICAgICAgICAgICBjcmVhdGVTbm93Zmxha2UoKTtcbiAgICAgICAgICAgICAgICBsYXN0U25vd2ZsYWtlVGltZSA9IG5vdztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHNub3dmbGFrZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICBzbm93Zmxha2VzW2ldLnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgIGlmIChzbm93Zmxha2VzW2ldLmlzT2ZmU2NyZWVuKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgc25vd2ZsYWtlcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZHJhd1Nub3dmbGFrZXMoKSB7XG4gICAgICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNC60LAg0YfQuCBjYW52YXMg0LzQsNGUINC/0YDQsNCy0LjQu9GM0L3QuNC5INGA0L7Qt9C80ZbRgCDQv9C10YDQtdC0INC80LDQu9GO0LLQsNC90L3Rj9C8XG4gICAgICAgICAgICBpZiAoY2FudmFzLndpZHRoID09PSAwIHx8IGNhbnZhcy5oZWlnaHQgPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXNpemVDYW52YXMoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIHNub3dmbGFrZXMuZm9yRWFjaChzbm93Zmxha2UgPT4ge1xuICAgICAgICAgICAgICAgIHNub3dmbGFrZS5kcmF3KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGFuaW1hdGUoKSB7XG4gICAgICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNGP0ZTQvNC+INGA0L7Qt9C80ZbRgCBjYW52YXMg0L3QsCDQv9C+0YfQsNGC0LrRgyDQutC+0LbQvdC+0LPQviDQutCw0LTRgNGDICjRgtGW0LvRjNC60Lgg0Y/QutGJ0L4g0LLRltC9INC90LXQv9GA0LDQstC40LvRjNC90LjQuSlcbiAgICAgICAgICAgIGlmIChjYW52YXMud2lkdGggPT09IDAgfHwgY2FudmFzLmhlaWdodCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJlc2l6ZUNhbnZhcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB1cGRhdGVTbm93Zmxha2VzKCk7XG4gICAgICAgICAgICBkcmF3U25vd2ZsYWtlcygpO1xuICAgICAgICAgICAgYW5pbWF0aW9uSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBzdGFydEFuaW1hdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChhbmltYXRpb25JZCkge1xuICAgICAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbklkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFuaW1hdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vINCX0YPQv9C40L3Rj9GU0LzQviDQsNC90ZbQvNCw0YbRltGOINC/0YDQuCDQstC40YXQvtC00ZYg0Lcgdmlld3BvcnRcbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICAgICAgICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghYW5pbWF0aW9uSWQgJiYgaW1hZ2VMb2FkZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QW5pbWF0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYW5pbWF0aW9uSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbklkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbklkID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGNhbnZhcyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdEluZmluaXRlU2Nyb2xsKCkge1xuICAgICAgICBjb25zdCBzY3JvbGxCbG9ja3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2Nyb2xsJyk7XG4gICAgICAgIFxuICAgICAgICBpZiAoIXNjcm9sbEJsb2Nrcy5sZW5ndGgpIHJldHVybjtcbiAgICAgICAgXG4gICAgICAgIHNjcm9sbEJsb2Nrcy5mb3JFYWNoKChzY3JvbGxCbG9jaykgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsQ29udGVudCA9IHNjcm9sbEJsb2NrLnF1ZXJ5U2VsZWN0b3IoJy5zY3JvbGxfX2NvbnRlbnQnKTtcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbFRleHQgPSBzY3JvbGxCbG9jay5xdWVyeVNlbGVjdG9yKCcuc2Nyb2xsX190ZXh0Jyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICghc2Nyb2xsQ29udGVudCB8fCAhc2Nyb2xsVGV4dCkgcmV0dXJuO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gc2Nyb2xsVGV4dC50ZXh0Q29udGVudC50cmltKCk7XG4gICAgICAgICAgICBpZiAoIXRleHQpIHJldHVybjsgLy8g0J/QtdGA0LXQstGW0YDQutCwINC90LAg0L/QvtGA0L7QttC90ZbQuSDRgtC10LrRgdGCXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHBhZGRpbmdSaWdodCA9IDA7XG4gICAgICAgICAgICBjb25zdCBmaXhlZFdpZHRoID0gMjYwMDsgLy8g0KTRltC60YHQvtCy0LDQvdCwINGI0LjRgNC40L3QsCDQutC+0L3RgtC10L3RgtGDXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCe0YfQuNGJ0LDRlNC80L4g0LrQvtC90YLQtdC90YJcbiAgICAgICAgICAgIHNjcm9sbENvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCh0YLQstC+0YDRjtGU0LzQviDQtdC70LXQvNC10L3RgtC4INC00L4g0YLQuNGFINC/0ZbRgCwg0L/QvtC60Lgg0L3QtSDQtNC+0YHRj9Cz0L3QtdC80L4g0YTRltC60YHQvtCy0LDQvdC+0Zcg0YjQuNGA0LjQvdC4IDI2MDBweFxuICAgICAgICAgICAgY29uc3QgZWxlbWVudHMgPSBbXTtcbiAgICAgICAgICAgIGxldCBpdGVtQ291bnQgPSAwO1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRXaWR0aCA9IDA7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCh0L/QvtGH0LDRgtC60YMg0YHRgtCy0L7RgNGO0ZTQvNC+INC+0LTQuNC9INC10LvQtdC80LXQvdGCLCDRidC+0LEg0L7RgtGA0LjQvNCw0YLQuCDQudC+0LPQviDRiNC40YDQuNC90YNcbiAgICAgICAgICAgIGNvbnN0IHRlbXBFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgdGVtcEVsZW1lbnQuY2xhc3NOYW1lID0gJ3Njcm9sbF9fdGV4dCc7XG4gICAgICAgICAgICB0ZW1wRWxlbWVudC50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICAgICAgICAvLyDQotC40LzRh9Cw0YHQvtCy0L4g0L/QvtC60LDQt9GD0ZTQvNC+INC10LvQtdC80LXQvdGCINC00LvRjyDQstC40LzRltGA0Y7QstCw0L3QvdGPXG4gICAgICAgICAgICB0ZW1wRWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgICAgICB0ZW1wRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgICAgICB0ZW1wRWxlbWVudC5zdHlsZS53aGl0ZVNwYWNlID0gJ25vd3JhcCc7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRlbXBFbGVtZW50KTtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1XaWR0aCA9IHRlbXBFbGVtZW50Lm9mZnNldFdpZHRoICsgcGFkZGluZ1JpZ2h0O1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0ZW1wRWxlbWVudCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCf0LXRgNC10LLRltGA0LrQsCDQvdCwINCy0LDQu9GW0LTQvdGDINGI0LjRgNC40L3RgyDQtdC70LXQvNC10L3RgtCwXG4gICAgICAgICAgICBpZiAoaXRlbVdpZHRoIDw9IDApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1Njcm9sbCBpdGVtIHdpZHRoIGlzIDAgb3IgaW52YWxpZCcpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0J7QsdC80LXQttGD0ZTQvNC+INC60ZbQu9GM0LrRltGB0YLRjCDRltGC0LXRgNCw0YbRltC5INC00LvRjyDQsdC10LfQv9C10LrQuFxuICAgICAgICAgICAgY29uc3QgbWF4SXRlcmF0aW9ucyA9IE1hdGguY2VpbChmaXhlZFdpZHRoIC8gaXRlbVdpZHRoKSArIDEwO1xuICAgICAgICAgICAgbGV0IGl0ZXJhdGlvbnMgPSAwO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQodGC0LLQvtGA0Y7RlNC80L4g0LXQu9C10LzQtdC90YLQuCDQtNC+INGC0LjRhSDQv9GW0YAsINC/0L7QutC4INC90LUg0LTQvtGB0Y/Qs9C90LXQvNC+INGE0ZbQutGB0L7QstCw0L3QvtGXINGI0LjRgNC40L3QuFxuICAgICAgICAgICAgd2hpbGUgKGN1cnJlbnRXaWR0aCA8IGZpeGVkV2lkdGggJiYgaXRlcmF0aW9ucyA8IG1heEl0ZXJhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXh0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgICAgICB0ZXh0RWxlbWVudC5jbGFzc05hbWUgPSAnc2Nyb2xsX190ZXh0JztcbiAgICAgICAgICAgICAgICB0ZXh0RWxlbWVudC50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8g0JrQvtC20LXQvSDQtNGA0YPQs9C40Lkg0LXQu9C10LzQtdC90YIg0L7RgtGA0LjQvNGD0ZQg0LrQu9Cw0YEgZGFya1xuICAgICAgICAgICAgICAgIGlmIChpdGVtQ291bnQgJSAyID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHRleHRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RhcmsnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgc2Nyb2xsQ29udGVudC5hcHBlbmRDaGlsZCh0ZXh0RWxlbWVudCk7XG4gICAgICAgICAgICAgICAgZWxlbWVudHMucHVzaCh0ZXh0RWxlbWVudCk7XG4gICAgICAgICAgICAgICAgY3VycmVudFdpZHRoICs9IGl0ZW1XaWR0aDtcbiAgICAgICAgICAgICAgICBpdGVtQ291bnQrKztcbiAgICAgICAgICAgICAgICBpdGVyYXRpb25zKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCf0LXRgNC10LLRltGA0LrQsCDQvdCwINC90LDRj9Cy0L3RltGB0YLRjCDQtdC70LXQvNC10L3RgtGW0LJcbiAgICAgICAgICAgIGlmIChlbGVtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ05vIHNjcm9sbCBlbGVtZW50cyBjcmVhdGVkJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQktC40LrQvtGA0LjRgdGC0L7QstGD0ZTQvNC+INC+0LHRh9C40YHQu9C10L3RgyDRiNC40YDQuNC90YMg0LfQsNC80ZbRgdGC0Ywg0LLQuNC80ZbRgNGO0LLQsNC90L3RjyAo0L/RgNCw0YbRjtGUINC90LDQstGW0YLRjCDQtNC70Y8g0L/RgNC40YXQvtCy0LDQvdC40YUg0LXQu9C10LzQtdC90YLRltCyKVxuICAgICAgICAgICAgY29uc3QgY29udGVudFdpZHRoID0gY3VycmVudFdpZHRoOyAvLyDQptC1INGI0LjRgNC40L3QsCDQv9C10YDRiNC+0LPQviDQvdCw0LHQvtGA0YMg0LXQu9C10LzQtdC90YLRltCyXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCf0LXRgNC10LLRltGA0LrQsCDQvdCwINCy0LDQu9GW0LTQvdGDINGI0LjRgNC40L3RgyDQutC+0L3RgtC10L3RgtGDXG4gICAgICAgICAgICBpZiAoY29udGVudFdpZHRoIDw9IDApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1Njcm9sbCBjb250ZW50IHdpZHRoIGlzIDAgb3IgaW52YWxpZCcpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0KHRgtCy0L7RgNGO0ZTQvNC+INC00YDRg9Cz0YMg0LrQvtC/0ZbRjiAo0L7RgtGA0LjQvNGD0ZTQvNC+IDJ4INGE0ZbQutGB0L7QstCw0L3QvtGXINGI0LjRgNC40L3QuClcbiAgICAgICAgICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjbG9uZWRFbGVtZW50ID0gZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgc2Nyb2xsQ29udGVudC5hcHBlbmRDaGlsZChjbG9uZWRFbGVtZW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQkNC90ZbQvNCw0YbRltGPXG4gICAgICAgICAgICBsZXQgcG9zaXRpb24gPSAwOyAvLyDQktC40YXRltC00L3QsCDRgtC+0YfQutCwIC0gMCDQstGW0LTQvdC+0YHQvdC+INC70ZbQstC+0LPQviDQutGA0LDRjlxuICAgICAgICAgICAgY29uc3Qgc3BlZWQgPSAwLjM7IC8vIHB4IHBlciBmcmFtZVxuICAgICAgICAgICAgbGV0IGFuaW1hdGlvbklkID0gbnVsbDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiAtPSBzcGVlZDsgLy8g0KDRg9GF0LDRlNC80L4g0LLQu9GW0LLQvlxuXG4gICAgICAgICAgICAgICAgaWYgKHBvc2l0aW9uIDw9IC1jb250ZW50V2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24gPSBwb3NpdGlvbiArIGNvbnRlbnRXaWR0aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgc2Nyb2xsQ29udGVudC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3Bvc2l0aW9ufXB4KWA7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCX0LDQv9GD0YHQutCw0ZTQvNC+INCw0L3RltC80LDRhtGW0Y5cbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8g0J/QtdGA0LXQstGW0YDRj9GU0LzQviwg0YfQuCDQtdC70LXQvNC10L3RgiDQstC40LTQuNC80LjQuSDQv9C10YDQtdC0INC30LDQv9GD0YHQutC+0LxcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wdXRlZFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoc2Nyb2xsQmxvY2spO1xuICAgICAgICAgICAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IGNvbXB1dGVkU3R5bGUuZGlzcGxheSAhPT0gJ25vbmUnICYmIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcHV0ZWRTdHlsZS52aXNpYmlsaXR5ICE9PSAnaGlkZGVuJztcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoaXNWaXNpYmxlICYmIGNvbnRlbnRXaWR0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZSgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vINCv0LrRidC+INC10LvQtdC80LXQvdGCINC/0YDQuNGF0L7QstCw0L3QuNC5LCDQt9Cw0L/Rg9GB0LrQsNGU0LzQviDQsNC90ZbQvNCw0YbRltGOINCy0YHQtSDQvtC00L3QvlxuICAgICAgICAgICAgICAgICAgICAvLyAo0LLQvtC90LAg0LHRg9C00LUg0L/RgNCw0YbRjtCy0LDRgtC4LCDQutC+0LvQuCDQtdC70LXQvNC10L3RgiDRgdGC0LDQvdC1INCy0LjQtNC40LzQuNC8KVxuICAgICAgICAgICAgICAgICAgICBhbmltYXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICBsb2FkVHJhbnNsYXRpb25zKClcbiAgICAgICAgLnRoZW4oaW5pdCkgLy8g0LfQsNC/0YPRgdC6INGW0L3RltGC0YMg0YHRgtC+0YDRltC90LrQuFxuXG5cblxuXG5cbiAgICAvLyBjb25zdCBsbmdCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxuZy1idG5cIilcbiAgICAvL1xuICAgIC8vIC8vINCS0YHRgtCw0L3QvtCy0LvRjtGU0LzQviDRgtC10LrRgdGCINC60L3QvtC/0LrQuCDQvdCwINC/0L7RgtC+0YfQvdGDINCw0LrRgtC40LLQvdGDINC80L7QstGDXG4gICAgLy8gZnVuY3Rpb24gdXBkYXRlTGFuZ3VhZ2VCdXR0b24oKSB7XG4gICAgLy8gICAgIC8vINCS0LjQutC+0YDQuNGB0YLQvtCy0YPRlNC80L4g0YLRgyDRgdCw0LzRgyDQu9C+0LPRltC60YMsINGJ0L4g0ZYg0LTQu9GPINCy0LjQt9C90LDRh9C10L3QvdGPIGxvY2FsZVxuICAgIC8vICAgICBsZXQgY3VycmVudExvY2FsZSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJsb2NhbGVcIikgfHwgXCJoclwiO1xuICAgIC8vICAgICBpZiAoaHJMZW5nKSBjdXJyZW50TG9jYWxlID0gJ2hyJztcbiAgICAvLyAgICAgaWYgKGVuTGVuZykgY3VycmVudExvY2FsZSA9ICdlbic7XG4gICAgLy8gICAgIGlmIChsbmdCdG4pIHtcbiAgICAvLyAgICAgICAgIGxuZ0J0bi50ZXh0Q29udGVudCA9IGN1cnJlbnRMb2NhbGU7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG4gICAgLy9cbiAgICAvLyAvLyDQntC90L7QstC70Y7RlNC80L4g0LrQvdC+0L/QutGDINC/0YDQuCDQt9Cw0LLQsNC90YLQsNC20LXQvdC90ZYgKNC/0ZbRgdC70Y8g0LLQuNC30L3QsNGH0LXQvdC90Y8gbG9jYWxlKVxuICAgIC8vIHVwZGF0ZUxhbmd1YWdlQnV0dG9uKCk7XG5cbiAgICAvLyBpZiAobG5nQnRuKSB7XG4gICAgLy8gICAgIGxuZ0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIC8vICAgICAgICAgLy8g0JLQuNC30L3QsNGH0LDRlNC80L4g0L/QvtGC0L7Rh9C90YMg0LzQvtCy0YMg0L/QtdGA0LXQtCDQv9C10YDQtdC80LjQutCw0L3QvdGP0LxcbiAgICAvLyAgICAgICAgIGxldCBjdXJyZW50TG9jYWxlID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsZVwiKSB8fCBcImhyXCI7XG4gICAgLy8gICAgICAgICBpZiAoaHJMZW5nKSBjdXJyZW50TG9jYWxlID0gJ2hyJztcbiAgICAvLyAgICAgICAgIGlmIChlbkxlbmcpIGN1cnJlbnRMb2NhbGUgPSAnZW4nO1xuICAgIC8vXG4gICAgLy8gICAgICAgICBpZiAoY3VycmVudExvY2FsZSA9PT0gXCJlblwiKSB7XG4gICAgLy8gICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcImxvY2FsZVwiKTtcbiAgICAvLyAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsZVwiLCBcImVuXCIpO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIC8vICAgICB9KTtcbiAgICAvLyB9XG4gICAgLy9cbiAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtYnRuXCIpPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIC8vICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtdGVzdFwiKT8uY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIik7XG4gICAgLy8gfSk7XG5cblxufSkoKTtcbiJdfQ==
