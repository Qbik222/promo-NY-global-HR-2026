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

    // Позиції елементів
    var treeX = CANVAS_WIDTH / 2 - 100; // Трохи лівіше від центру
    var treeY = CANVAS_HEIGHT / 2 - TREE_HEIGHT / 2;

    // Початкова позиція оленя (правіше від ялинки)
    var deerX = CANVAS_WIDTH / 2 + 50;
    var deerY = CANVAS_HEIGHT / 2 - DEER_HEIGHT / 2;

    // Параметри анімації
    var deerDirection = 1; // 1 = вправо, -1 = вліво
    var deerSpeed = 0.5; // Швидкість руху
    var deerMinX = CANVAS_WIDTH / 2 - 200; // Мінімальна позиція (ліворуч)
    var deerMaxX = CANVAS_WIDTH / 2 + 300; // Максимальна позиція (праворуч)
    var animationId = null;

    // Завантаження зображень
    var images = {
      background: new Image(),
      tree: new Image(),
      deer: new Image()
    };
    var imagesLoaded = 0;
    var totalImages = 3;
    function onImageLoad() {
      imagesLoaded++;
      if (imagesLoaded === totalImages) {
        drawCanvas();
        startAnimation();
      }
    }
    images.background.onload = onImageLoad;
    images.tree.onload = onImageLoad;
    images.deer.onload = onImageLoad;
    images.background.src = 'img/participate/canvas-bg.png';
    images.tree.src = 'img/participate/tree.png';
    images.deer.src = 'img/participate/deer.png';
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

      // Малюємо оленя
      if (images.deer.complete) {
        // Відображаємо оленя в залежності від напрямку
        if (deerDirection === -1) {
          // Відображаємо дзеркально для руху вліво
          ctx.save();
          ctx.scale(-1, 1);
          ctx.drawImage(images.deer, -deerX - DEER_WIDTH, deerY, DEER_WIDTH, DEER_HEIGHT);
          ctx.restore();
        } else {
          ctx.drawImage(images.deer, deerX, deerY, DEER_WIDTH, DEER_HEIGHT);
        }
      }
    }
    function animate() {
      // Оновлюємо позицію оленя
      deerX += deerSpeed * deerDirection;

      // Перевіряємо межі та змінюємо напрямок
      if (deerX >= deerMaxX) {
        deerX = deerMaxX;
        deerDirection = -1; // Рухаємося вліво
      } else if (deerX <= deerMinX) {
        deerX = deerMinX;
        deerDirection = 1; // Рухаємося вправо
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
    var SNOWFLAKE_COUNT = 50;
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwibWFpblBhZ2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJsb2FkZXIiLCJyZXN1bHRzVGFibGUiLCJyZXN1bHRzVGFibGVPdGhlciIsImhyTGVuZyIsImVuTGVuZyIsImxvY2FsZSIsImRlYnVnIiwiaGlkZUxvYWRlciIsImkxOG5EYXRhIiwidHJhbnNsYXRlU3RhdGUiLCJ1c2VySWQiLCJyZXF1ZXN0IiwibGluayIsImV4dHJhT3B0aW9ucyIsImZldGNoIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJvayIsIkVycm9yIiwianNvbiIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsInJlcG9ydEVycm9yIiwic3R5bGUiLCJkaXNwbGF5Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwic3RhcnRzV2l0aCIsIlByb21pc2UiLCJyZWplY3QiLCJjbGFzc0xpc3QiLCJhZGQiLCJib2R5Iiwib3ZlcmZsb3ciLCJyZW1vdmUiLCJpbml0IiwidHJ5RGV0ZWN0VXNlcklkIiwicXVpY2tDaGVja0FuZFJlbmRlciIsImluaXRJbmZpbml0ZVNjcm9sbCIsImluaXRQYXJ0aWNpcGF0ZUNhbnZhcyIsImluaXRTbm93Zmxha2VzQ2FudmFzIiwic2V0VGltZW91dCIsImRyb3Bkb3ducyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZHJvcGRvd24iLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJvcGVuIiwic3VtbWFyeSIsInN1bW1hcnlSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwiY3VycmVudFNjcm9sbFkiLCJzY3JvbGxZIiwicGFnZVlPZmZzZXQiLCJ0YXJnZXRTY3JvbGxZIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic2Nyb2xsVG8iLCJNYXRoIiwibWF4IiwiYmVoYXZpb3IiLCJzdG9yZSIsInN0YXRlIiwiZ2V0U3RhdGUiLCJhdXRoIiwiaXNBdXRob3JpemVkIiwiaWQiLCJnX3VzZXJfaWQiLCJhdHRlbXB0cyIsIm1heEF0dGVtcHRzIiwiYXR0ZW1wdEludGVydmFsIiwid2FpdEZvclVzZXJJZCIsInJlc29sdmUiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImxvYWRUcmFuc2xhdGlvbnMiLCJ0cmFuc2xhdGUiLCJyZXBvcnREYXRhIiwib3JpZ2luIiwidXNlcmlkIiwiZXJyb3JUZXh0IiwidGV4dCIsIm1lc3NhZ2UiLCJ0eXBlIiwibmFtZSIsInN0YWNrIiwibWV0aG9kIiwiSlNPTiIsInN0cmluZ2lmeSIsIndhcm4iLCJlbGVtcyIsImxlbmd0aCIsImVsZW0iLCJrZXkiLCJnZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJyZW1vdmVBdHRyaWJ1dGUiLCJsb2ciLCJyZWZyZXNoTG9jYWxpemVkQ2xhc3MiLCJlbGVtZW50IiwibGFuZyIsInJlbmRlclVzZXJzIiwid2Vla051bSIsInVzZXJEYXRhIiwiTnVtYmVyIiwid2Vla09iaiIsImZpbmQiLCJ3Iiwid2VlayIsImRhdGEiLCJBcnJheSIsImlzQXJyYXkiLCJ1c2VycyIsImlzU3RhZ2VFbmRlZCIsIndpbm5lckFkZGl0aW9uYWxQcml6ZSIsInUiLCJ3aW5uZXIiLCJjdXJyZW50VXNlciIsInVzZXIiLCJpc1ZlcmlmaWVkVXNlciIsInBvaW50cyIsInBvcHVsYXRlVXNlcnNUYWJsZSIsImN1cnJlbnRVc2VySWQiLCJzZWNvbmRUYWJsZU90aGVyIiwic2Vjb25kVGFibGUiLCJpc1RvcEN1cnJlbnRVc2VyIiwic2xpY2UiLCJzb21lIiwidG9wVXNlcnNMZW5ndGgiLCJ0b3BVc2VycyIsImRpc3BsYXlVc2VyIiwiaXNDdXJyZW50VXNlciIsInRhYmxlIiwicmVuZGVyUm93Iiwib3B0aW9ucyIsImhpZ2hsaWdodCIsIm5laWdoYm9yIiwidXNlclJvdyIsImNyZWF0ZUVsZW1lbnQiLCJ1c2VyUGxhY2UiLCJpbmRleE9mIiwicHJpemVLZXkiLCJnZXRQcml6ZVRyYW5zbGF0aW9uS2V5IiwidHJhbnNsYXRlS2V5IiwibWFza1VzZXJJZCIsInRvRml4ZWQiLCJhcHBlbmQiLCJpbmRleCIsImNhbnZhcyIsImN0eCIsImdldENvbnRleHQiLCJ3aWR0aCIsImhlaWdodCIsIkNBTlZBU19XSURUSCIsIkNBTlZBU19IRUlHSFQiLCJUUkVFX1dJRFRIIiwiVFJFRV9IRUlHSFQiLCJERUVSX1dJRFRIIiwiREVFUl9IRUlHSFQiLCJ0cmVlWCIsInRyZWVZIiwiZGVlclgiLCJkZWVyWSIsImRlZXJEaXJlY3Rpb24iLCJkZWVyU3BlZWQiLCJkZWVyTWluWCIsImRlZXJNYXhYIiwiYW5pbWF0aW9uSWQiLCJpbWFnZXMiLCJiYWNrZ3JvdW5kIiwiSW1hZ2UiLCJ0cmVlIiwiZGVlciIsImltYWdlc0xvYWRlZCIsInRvdGFsSW1hZ2VzIiwib25JbWFnZUxvYWQiLCJkcmF3Q2FudmFzIiwic3RhcnRBbmltYXRpb24iLCJvbmxvYWQiLCJzcmMiLCJjbGVhclJlY3QiLCJjb21wbGV0ZSIsImRyYXdJbWFnZSIsInNhdmUiLCJzY2FsZSIsInJlc3RvcmUiLCJhbmltYXRlIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJvYnNlcnZlIiwiZmF2UGFnZSIsIlNOT1dGTEFLRV9DT1VOVCIsIlNOT1dGTEFLRV9NSU5fU0laRSIsIlNOT1dGTEFLRV9NQVhfU0laRSIsIlNOT1dGTEFLRV9NSU5fU1BFRUQiLCJTTk9XRkxBS0VfTUFYX1NQRUVEIiwiU05PV0ZMQUtFX1dJTkRfUkFOR0UiLCJTTk9XRkxBS0VfU1BBV05fSU5URVJWQUwiLCJzbm93Zmxha2VzIiwibGFzdFNub3dmbGFrZVRpbWUiLCJyZXNpemVDYW52YXMiLCJuZXdXaWR0aCIsIm5ld0hlaWdodCIsInJlY3QiLCJvZmZzZXRXaWR0aCIsImlubmVyV2lkdGgiLCJvZmZzZXRIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJpbm5lckhlaWdodCIsInNub3dmbGFrZUltYWdlIiwiaW1hZ2VMb2FkZWQiLCJ3YWl0Rm9yUGFnZVJlYWR5IiwiaXNQYWdlTG9hZGluZyIsImNvbnRhaW5zIiwiU25vd2ZsYWtlIiwieCIsInJhbmRvbSIsInkiLCJzaXplIiwic3BlZWQiLCJ3aW5kIiwib3BhY2l0eSIsInJvdGF0aW9uIiwiUEkiLCJyb3RhdGlvblNwZWVkIiwic2luIiwiZ2xvYmFsQWxwaGEiLCJyb3RhdGUiLCJjcmVhdGVTbm93Zmxha2UiLCJwdXNoIiwidXBkYXRlU25vd2ZsYWtlcyIsIm5vdyIsIkRhdGUiLCJpIiwidXBkYXRlIiwiaXNPZmZTY3JlZW4iLCJzcGxpY2UiLCJkcmF3U25vd2ZsYWtlcyIsInNub3dmbGFrZSIsImRyYXciLCJzY3JvbGxCbG9ja3MiLCJzY3JvbGxCbG9jayIsInNjcm9sbENvbnRlbnQiLCJzY3JvbGxUZXh0IiwidGV4dENvbnRlbnQiLCJ0cmltIiwicGFkZGluZ1JpZ2h0IiwiZml4ZWRXaWR0aCIsImVsZW1lbnRzIiwiaXRlbUNvdW50IiwiY3VycmVudFdpZHRoIiwidGVtcEVsZW1lbnQiLCJjbGFzc05hbWUiLCJ2aXNpYmlsaXR5IiwicG9zaXRpb24iLCJ3aGl0ZVNwYWNlIiwiYXBwZW5kQ2hpbGQiLCJpdGVtV2lkdGgiLCJyZW1vdmVDaGlsZCIsIm1heEl0ZXJhdGlvbnMiLCJjZWlsIiwiaXRlcmF0aW9ucyIsInRleHRFbGVtZW50IiwiY29udGVudFdpZHRoIiwiY2xvbmVkRWxlbWVudCIsImNsb25lTm9kZSIsInRyYW5zZm9ybSIsImNvbXB1dGVkU3R5bGUiLCJnZXRDb21wdXRlZFN0eWxlIiwiaXNWaXNpYmxlIl0sIm1hcHBpbmdzIjoiOzs7K0NBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBLENBQUMsWUFBWTtFQUVULElBQU1BLE1BQU0sR0FBRyxzQ0FBc0M7RUFFckQsSUFBTUMsUUFBUSxH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QVEsR0FBR1MsWUFBWTtRQUN0QztRQUVBckIsYUFBYSxDQUFDbk8sS0FBSyxDQUFDMlAsU0FBUyx3QkFBaUJaLFFBQVEsUUFBSztRQUMzRDVGLFdBQVcsR0FBR2hILHFCQUFxQixDQUFDbUksT0FBTyxDQUFDO01BQ2hEOztNQUVBO01BQ0FuSSxxQkFBcUIsQ0FBQyxZQUFNO1FBQ3hCO1FBQ0EsSUFBTXlOLGFBQWEsR0FBRzFQLE1BQU0sQ0FBQzJQLGdCQUFnQixDQUFDM0IsV0FBVyxDQUFDO1FBQzFELElBQU00QixTQUFTLEdBQUdGLGFBQWEsQ0FBQzNQLE9BQU8sS0FBSyxNQUFNLElBQ2pDMlAsYUFBYSxDQUFDZCxVQUFVLEtBQUssUUFBUTtRQUV0RCxJQUFJZ0IsU0FBUyxJQUFJTixZQUFZLEdBQUcsQ0FBQyxFQUFFO1VBQy9CbEYsT0FBTyxFQUFFO1FBQ2IsQ0FBQyxNQUFNO1VBQ0g7VUFDQTtVQUNBQSxPQUFPLEVBQUU7UUFDYjtNQUNKLENBQUMsQ0FBQztJQUNOLENBQUMsQ0FBQztFQUNOO0VBRUEvRyxnQkFBZ0IsRUFBRSxDQUNiaEUsSUFBSSxDQUFDc0IsSUFBSSxDQUFDLEVBQUM7O0VBTWhCO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtBQUdKLENBQUMsR0FBRyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgpIHtcblxuICAgIGNvbnN0IGFwaVVSTCA9ICdodHRwczovL2Zhdi1wcm9tLmNvbS9hcGlfYmxhY2tfcHJpemUnXG5cbiAgICBjb25zdCBtYWluUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmF2LXBhZ2VcIiksXG4gICAgICAgIGxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3Bpbm5lci1vdmVybGF5XCIpLFxuICAgICAgICByZXN1bHRzVGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RhYmxlXCIpLFxuICAgICAgICByZXN1bHRzVGFibGVPdGhlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFibGVPdGhlclwiKVxuXG4gICAgY29uc3QgaHJMZW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hyTGVuZycpO1xuICAgIGNvbnN0IGVuTGVuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbkxlbmcnKTtcblxuICAgIGxldCBsb2NhbGUgPSBcImVuXCJcbiAgICAvLyBsZXQgbG9jYWxlID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsZVwiKSB8fCBcImhyXCJcblxuICAgIGlmIChockxlbmcpIGxvY2FsZSA9ICdocic7XG4gICAgaWYgKGVuTGVuZykgbG9jYWxlID0gJ2VuJztcblxuICAgIGxldCBkZWJ1ZyA9IGZhbHNlXG5cbiAgICBpZiAoZGVidWcpIGhpZGVMb2FkZXIoKVxuXG4gICAgbGV0IGkxOG5EYXRhID0ge307XG4gICAgY29uc3QgdHJhbnNsYXRlU3RhdGUgPSBmYWxzZTtcbiAgICBsZXQgdXNlcklkID0gbnVsbDtcbiAgICAvLyBsZXQgdXNlcklkID0gTnVtYmVyKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIikpID8/IG51bGxcblxuICAgIGNvbnN0IHJlcXVlc3QgPSBmdW5jdGlvbiAobGluaywgZXh0cmFPcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBmZXRjaChhcGlVUkwgKyBsaW5rLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLi4uKGV4dHJhT3B0aW9ucyB8fCB7fSlcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXMub2spIHRocm93IG5ldyBFcnJvcignQVBJIGVycm9yJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignQVBJIHJlcXVlc3QgZmFpbGVkOicsIGVycik7XG5cbiAgICAgICAgICAgICAgICByZXBvcnRFcnJvcihlcnIpO1xuXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhdi1wYWdlJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYuc3RhcnRzV2l0aChcImh0dHBzOi8vd3d3LmZhdmJldC5oci9cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3Byb21vY2lqZS9wcm9tb2NpamEvc3R1Yi8nO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9wcm9tb3MvcHJvbW8vc3R1Yi8nO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoaWRlTG9hZGVyKCl7XG4gICAgICAgIGxvYWRlci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCJcbiAgICAgICAgbWFpblBhZ2UuY2xhc3NMaXN0LnJlbW92ZShcImxvYWRpbmdcIilcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICBsZXQgYXR0ZW1wdHMgPSAwO1xuICAgICAgICBjb25zdCBtYXhBdHRlbXB0cyA9IDIwO1xuICAgICAgICBjb25zdCBhdHRlbXB0SW50ZXJ2YWwgPSA1MDtcblxuICAgICAgICBmdW5jdGlvbiB0cnlEZXRlY3RVc2VySWQoKSB7XG4gICAgICAgICAgICBpZiAod2luZG93LnN0b3JlKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSB3aW5kb3cuc3RvcmUuZ2V0U3RhdGUoKTtcbiAgICAgICAgICAgICAgICB1c2VySWQgPSBzdGF0ZS5hdXRoLmlzQXV0aG9yaXplZCAmJiBzdGF0ZS5hdXRoLmlkIHx8ICcnO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh3aW5kb3cuZ191c2VyX2lkKSB7XG4gICAgICAgICAgICAgICAgdXNlcklkID0gd2luZG93LmdfdXNlcl9pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHF1aWNrQ2hlY2tBbmRSZW5kZXIoKSB7XG4gICAgICAgICAgICBpbml0SW5maW5pdGVTY3JvbGwoKTtcbiAgICAgICAgICAgIGluaXRQYXJ0aWNpcGF0ZUNhbnZhcygpO1xuICAgICAgICAgICAgaW5pdFNub3dmbGFrZXNDYW52YXMoKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoaGlkZUxvYWRlciwgMzAwKTtcblxuICAgICAgICAgICAgLy8gRml4IGRyb3Bkb3duIHNjcm9sbCBpc3N1ZSAtIHByZXZlbnQgcGFnZSBmcm9tIHNoaWZ0aW5nIHVwIHdoZW4gb3BlbmluZyBkcm9wZG93blxuICAgICAgICAgICAgY29uc3QgZHJvcGRvd25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRyb3Bkb3duJyk7XG4gICAgICAgICAgICBkcm9wZG93bnMuZm9yRWFjaCgoZHJvcGRvd24pID0+IHtcbiAgICAgICAgICAgICAgICBkcm9wZG93bi5hZGRFdmVudExpc3RlbmVyKCd0b2dnbGUnLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5vcGVuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBEcm9wZG93biBpcyBvcGVuaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdW1tYXJ5ID0gdGhpcy5xdWVyeVNlbGVjdG9yKCdzdW1tYXJ5Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3VtbWFyeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEdldCBzdW1tYXJ5IHBvc2l0aW9uIHJlbGF0aXZlIHRvIHZpZXdwb3J0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3VtbWFyeVJlY3QgPSBzdW1tYXJ5LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgc3VtbWFyeSBpcyBuZWFyIHRoZSB0b3Agb2Ygdmlld3BvcnQgKHdpdGhpbiAxMDBweCBmcm9tIHRvcClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3VtbWFyeVJlY3QudG9wIDwgMTAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENhbGN1bGF0ZSBob3cgbXVjaCB0byBzY3JvbGwgdG8ga2VlcCBzdW1tYXJ5IHZpc2libGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFNjcm9sbFkgPSB3aW5kb3cuc2Nyb2xsWSB8fCB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldFNjcm9sbFkgPSBjdXJyZW50U2Nyb2xsWSArIHN1bW1hcnlSZWN0LnRvcCAtIDEyMDsgLy8gMTIwcHggb2Zmc2V0IGZyb20gdG9wXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVXNlIHJlcXVlc3RBbmltYXRpb25GcmFtZSBmb3Igc21vb3RoIHNjcm9sbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IE1hdGgubWF4KDAsIHRhcmdldFNjcm9sbFkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgd2FpdEZvclVzZXJJZCA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0cnlEZXRlY3RVc2VySWQoKTtcbiAgICAgICAgICAgICAgICBpZiAodXNlcklkIHx8IGF0dGVtcHRzID49IG1heEF0dGVtcHRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHF1aWNrQ2hlY2tBbmRSZW5kZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXR0ZW1wdHMrKztcbiAgICAgICAgICAgIH0sIGF0dGVtcHRJbnRlcnZhbCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGF3YWl0IHdhaXRGb3JVc2VySWQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9hZFRyYW5zbGF0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVlc3QoYC9uZXctdHJhbnNsYXRlcy8ke2xvY2FsZX1gKVxuICAgICAgICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgICAgICAgaTE4bkRhdGEgPSBqc29uO1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnN0IG11dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAobXV0YXRpb25zKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIG11dGF0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgICAgIC8vICAgICB0cmFuc2xhdGUoKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKHRhcmdldE5vZGUsIHsgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgICAgICAgIC8vIG11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhhcmRjb3JlVGVubmlzXCIpLCB7XG4gICAgICAgICAgICAgICAgLy8gICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAvLyAgICAgc3VidHJlZTogdHJ1ZVxuICAgICAgICAgICAgICAgIC8vIH0pO1xuXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXBvcnRFcnJvcihlcnIpIHtcbiAgICAgICAgY29uc3QgcmVwb3J0RGF0YSA9IHtcbiAgICAgICAgICAgIG9yaWdpbjogd2luZG93LmxvY2F0aW9uLmhyZWYsXG4gICAgICAgICAgICB1c2VyaWQ6IHVzZXJJZCxcbiAgICAgICAgICAgIGVycm9yVGV4dDogZXJyPy5lcnJvciB8fCBlcnI/LnRleHQgfHwgZXJyPy5tZXNzYWdlIHx8ICdVbmtub3duIGVycm9yJyxcbiAgICAgICAgICAgIHR5cGU6IGVycj8ubmFtZSB8fCAnVW5rbm93bkVycm9yJyxcbiAgICAgICAgICAgIHN0YWNrOiBlcnI/LnN0YWNrIHx8ICcnXG4gICAgICAgIH07XG5cbiAgICAgICAgZmV0Y2goJ2h0dHBzOi8vZmF2LXByb20uY29tL2FwaS1jbXMvcmVwb3J0cy9hZGQnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVwb3J0RGF0YSlcbiAgICAgICAgfSkuY2F0Y2goY29uc29sZS53YXJuKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmFuc2xhdGUoKSB7XG4gICAgICAgIGNvbnN0IGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdHJhbnNsYXRlXScpXG4gICAgICAgIGlmIChlbGVtcyAmJiBlbGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmKHRyYW5zbGF0ZVN0YXRlKXtcbiAgICAgICAgICAgICAgICBlbGVtcy5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbS5pbm5lckhUTUwgPSBpMThuRGF0YVtrZXldIHx8ICcqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qICAga2V5OiAgJyArIGtleTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkxOG5EYXRhW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidHJhbnNsYXRpb24gd29ya3MhXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxvY2FsZSA9PT0gJ2VuJykge1xuICAgICAgICAgICAgbWFpblBhZ2UuY2xhc3NMaXN0LmFkZCgnZW4nKTtcbiAgICAgICAgfVxuICAgICAgICByZWZyZXNoTG9jYWxpemVkQ2xhc3MobWFpblBhZ2UpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlZnJlc2hMb2NhbGl6ZWRDbGFzcyhlbGVtZW50KSB7XG4gICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgbGFuZyBvZiBbJ2hyJywgJ2VuJ10pIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShsYW5nKTtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQobG9jYWxlKTtcbiAgICB9XG5cblxuXG5cbiAgICBmdW5jdGlvbiByZW5kZXJVc2Vycyh3ZWVrTnVtLCB1c2VyRGF0YSA9IFtdKSB7XG4gICAgICAgIHdlZWtOdW0gPSBOdW1iZXIod2Vla051bSk7XG4gICAgICAgIGNvbnN0IHdlZWtPYmogPSB1c2VyRGF0YS5maW5kKHcgPT4gdy53ZWVrID09PSB3ZWVrTnVtKTtcbiAgICAgICAgaWYgKCF3ZWVrT2JqIHx8ICF3ZWVrT2JqLmRhdGEgfHwgIUFycmF5LmlzQXJyYXkod2Vla09iai5kYXRhLnVzZXJzKSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcign0J3QtdCy0ZbRgNC90LAg0YHRgtGA0YPQutGC0YPRgNCwINC00LDQvdC40YUnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGlzU3RhZ2VFbmRlZCA9IHdlZWtPYmouZGF0YS5pc1N0YWdlRW5kZWRcblxuICAgICAgICB1c2VyRGF0YSA9IHdlZWtPYmouZGF0YS51c2VycztcblxuICAgICAgICBjb25zdCB3aW5uZXJBZGRpdGlvbmFsUHJpemUgPSB1c2VyRGF0YS5maW5kKHUgPT4ge1xuICAgICAgICAgICAgaWYodS53aW5uZXIgPT09IHRydWUpe1xuICAgICAgICAgICAgICAgIHJldHVybiB1XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgY29uc3QgY3VycmVudFVzZXIgPSB1c2VyRGF0YS5maW5kKHVzZXIgPT4gdXNlci51c2VyaWQgPT09IHVzZXJJZCk7XG5cbiAgICAgICAgaWYodXNlcklkICYmICFjdXJyZW50VXNlciAmJiBpc1ZlcmlmaWVkVXNlcil7XG4gICAgICAgICAgICB1c2VyRGF0YSA9IFsuLi51c2VyRGF0YSwge3VzZXJpZDogdXNlcklkLCBwb2ludHM6IDB9XVxuICAgICAgICB9XG4gICAgICAgIHBvcHVsYXRlVXNlcnNUYWJsZSh1c2VyRGF0YSwgdXNlcklkLCB3ZWVrTnVtLCBjdXJyZW50VXNlciwgaXNWZXJpZmllZFVzZXIsIGlzU3RhZ2VFbmRlZCwgd2lubmVyQWRkaXRpb25hbFByaXplKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwb3B1bGF0ZVVzZXJzVGFibGUodXNlcnMsIGN1cnJlbnRVc2VySWQsIHdlZWssIGN1cnJlbnRVc2VyLCBpc1ZlcmlmaWVkVXNlciwgaXNTdGFnZUVuZGVkLCB3aW5uZXJBZGRpdGlvbmFsUHJpemUpIHtcbiAgICAgICAgaWYgKCF1c2Vycz8ubGVuZ3RoKSByZXR1cm47XG4gICAgICAgIHJlc3VsdHNUYWJsZS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgcmVzdWx0c1RhYmxlT3RoZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHNlY29uZFRhYmxlT3RoZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHNlY29uZFRhYmxlLmlubmVySFRNTCA9ICcnO1xuXG5cbiAgICAgICAgY29uc3QgaXNUb3BDdXJyZW50VXNlciA9IGN1cnJlbnRVc2VyICYmIHVzZXJzLnNsaWNlKDAsIDEwKS5zb21lKHVzZXIgPT4gdXNlci51c2VyaWQgPT09IGN1cnJlbnRVc2VySWQpO1xuXG4gICAgICAgIGNvbnN0IHRvcFVzZXJzTGVuZ3RoID0gIXVzZXJJZCB8fCBpc1RvcEN1cnJlbnRVc2VyICA/IDEwIDogMTA7XG5cbiAgICAgICAgY29uc3QgdG9wVXNlcnMgPSB1c2Vycy5zbGljZSgwLCB0b3BVc2Vyc0xlbmd0aCk7XG5cbiAgICAgICAgdG9wVXNlcnMuZm9yRWFjaCh1c2VyID0+IHtcbiAgICAgICAgICAgIGRpc3BsYXlVc2VyKHVzZXIsIHVzZXIudXNlcmlkID09PSBjdXJyZW50VXNlcklkLCByZXN1bHRzVGFibGUsIHRvcFVzZXJzLCBpc1RvcEN1cnJlbnRVc2VyLCB3ZWVrKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmKGlzVmVyaWZpZWRVc2VyICYmICFjdXJyZW50VXNlcikge1xuICAgICAgICAgICAgZGlzcGxheVVzZXIoY3VycmVudFVzZXIsIHRydWUsIHJlc3VsdHNUYWJsZU90aGVyLCB1c2VycywgZmFsc2UsIHdlZWspO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFpc1RvcEN1cnJlbnRVc2VyICYmIGN1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgICBkaXNwbGF5VXNlcihjdXJyZW50VXNlciwgdHJ1ZSwgcmVzdWx0c1RhYmxlT3RoZXIsIHVzZXJzLCBmYWxzZSwgd2Vlayk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5VXNlcih1c2VyLCBpc0N1cnJlbnRVc2VyLCB0YWJsZSwgdXNlcnMsIGlzVG9wQ3VycmVudFVzZXIsIHdlZWspIHtcblxuICAgICAgICBjb25zdCByZW5kZXJSb3cgPSAodXNlckRhdGEsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBoaWdobGlnaHQgPSBmYWxzZSwgbmVpZ2hib3IgPSBmYWxzZSB9ID0gb3B0aW9ucztcbiAgICAgICAgICAgIGNvbnN0IHVzZXJSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZCgndGFibGVfX3JvdycpO1xuXG4gICAgICAgICAgICBjb25zdCB1c2VyUGxhY2UgPSB1c2Vycy5pbmRleE9mKHVzZXJEYXRhKSArIDE7XG4gICAgICAgICAgICBjb25zdCBwcml6ZUtleSA9IGRlYnVnID8gbnVsbCA6IGdldFByaXplVHJhbnNsYXRpb25LZXkodXNlclBsYWNlLCB3ZWVrKTtcblxuICAgICAgICAgICAgaWYgKHVzZXJQbGFjZSA8PSAzKSB7XG4gICAgICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKGBwbGFjZSR7dXNlclBsYWNlfWApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaGlnaGxpZ2h0IHx8IGlzQ3VycmVudFVzZXIgJiYgIW5laWdoYm9yKSB7XG4gICAgICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKCd5b3UnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmVpZ2hib3IpIHtcbiAgICAgICAgICAgICAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoJ19uZWlnaGJvcicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1c2VyUm93LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke3VzZXJQbGFjZSA8IDEwID8gJzAnICsgdXNlclBsYWNlIDogdXNlclBsYWNlfVxuICAgICAgICAgICAgICAgICR7aXNDdXJyZW50VXNlciAmJiAhbmVpZ2hib3IgPyAnPHNwYW4gY2xhc3M9XCJ5b3VcIj4nICsgdHJhbnNsYXRlS2V5KFwieW91XCIpICsgJzwvc3Bhbj4nIDogJyd9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke2lzQ3VycmVudFVzZXIgJiYgIW5laWdoYm9yID8gdXNlckRhdGEudXNlcmlkIDogbWFza1VzZXJJZCh1c2VyRGF0YS51c2VyaWQpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHtOdW1iZXIodXNlckRhdGEucG9pbnRzKS50b0ZpeGVkKDIpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHtwcml6ZUtleSA/IHRyYW5zbGF0ZUtleShwcml6ZUtleSkgOiAnIC0gJ31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuXG4gICAgICAgICAgICB0YWJsZS5hcHBlbmQodXNlclJvdyk7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChpc0N1cnJlbnRVc2VyICYmICFpc1RvcEN1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHVzZXJzLmluZGV4T2YodXNlcik7XG4gICAgICAgICAgICBpZiAodXNlcnNbaW5kZXggLSAxXSkge1xuICAgICAgICAgICAgICAgIHJlbmRlclJvdyh1c2Vyc1tpbmRleCAtIDFdLCB7IG5laWdoYm9yOiB0cnVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVuZGVyUm93KHVzZXIsIHsgaGlnaGxpZ2h0OiB0cnVlIH0pO1xuICAgICAgICAgICAgaWYgKHVzZXJzW2luZGV4ICsgMV0pIHtcbiAgICAgICAgICAgICAgICByZW5kZXJSb3codXNlcnNbaW5kZXggKyAxXSwgeyBuZWlnaGJvcjogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlbmRlclJvdyh1c2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluaXRQYXJ0aWNpcGF0ZUNhbnZhcygpIHtcbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BhcnRpY2lwYXRlQ2FudmFzJyk7XG4gICAgICAgIGlmICghY2FudmFzKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IDEzNjY7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSA1MDA7XG5cbiAgICAgICAgLy8g0JrQvtC90YHRgtCw0L3RgtC4INC00LvRjyDRgNC+0LfQvNGW0YDRltCyINGC0LAg0L/QvtC30LjRhtGW0LlcbiAgICAgICAgY29uc3QgQ0FOVkFTX1dJRFRIID0gMTM2NjtcbiAgICAgICAgY29uc3QgQ0FOVkFTX0hFSUdIVCA9IDUwMDtcbiAgICAgICAgY29uc3QgVFJFRV9XSURUSCA9IDE3NTtcbiAgICAgICAgY29uc3QgVFJFRV9IRUlHSFQgPSAxNjc7XG4gICAgICAgIGNvbnN0IERFRVJfV0lEVEggPSAxMTA7XG4gICAgICAgIGNvbnN0IERFRVJfSEVJR0hUID0gMTE3O1xuXG4gICAgICAgIC8vINCf0L7Qt9C40YbRltGXINC10LvQtdC80LXQvdGC0ZbQslxuICAgICAgICBjb25zdCB0cmVlWCA9IENBTlZBU19XSURUSCAvIDIgLSAxMDA7IC8vINCi0YDQvtGF0Lgg0LvRltCy0ZbRiNC1INCy0ZbQtCDRhtC10L3RgtGA0YNcbiAgICAgICAgY29uc3QgdHJlZVkgPSBDQU5WQVNfSEVJR0hUIC8gMiAtIFRSRUVfSEVJR0hUIC8gMjtcbiAgICAgICAgXG4gICAgICAgIC8vINCf0L7Rh9Cw0YLQutC+0LLQsCDQv9C+0LfQuNGG0ZbRjyDQvtC70LXQvdGPICjQv9GA0LDQstGW0YjQtSDQstGW0LQg0Y/Qu9C40L3QutC4KVxuICAgICAgICBsZXQgZGVlclggPSBDQU5WQVNfV0lEVEggLyAyICsgNTA7XG4gICAgICAgIGxldCBkZWVyWSA9IENBTlZBU19IRUlHSFQgLyAyIC0gREVFUl9IRUlHSFQgLyAyO1xuICAgICAgICBcbiAgICAgICAgLy8g0J/QsNGA0LDQvNC10YLRgNC4INCw0L3RltC80LDRhtGW0ZdcbiAgICAgICAgbGV0IGRlZXJEaXJlY3Rpb24gPSAxOyAvLyAxID0g0LLQv9GA0LDQstC+LCAtMSA9INCy0LvRltCy0L5cbiAgICAgICAgY29uc3QgZGVlclNwZWVkID0gMC41OyAvLyDQqNCy0LjQtNC60ZbRgdGC0Ywg0YDRg9GF0YNcbiAgICAgICAgY29uc3QgZGVlck1pblggPSBDQU5WQVNfV0lEVEggLyAyIC0gMjAwOyAvLyDQnNGW0L3RltC80LDQu9GM0L3QsCDQv9C+0LfQuNGG0ZbRjyAo0LvRltCy0L7RgNGD0YcpXG4gICAgICAgIGNvbnN0IGRlZXJNYXhYID0gQ0FOVkFTX1dJRFRIIC8gMiArIDMwMDsgLy8g0JzQsNC60YHQuNC80LDQu9GM0L3QsCDQv9C+0LfQuNGG0ZbRjyAo0L/RgNCw0LLQvtGA0YPRhylcbiAgICAgICAgbGV0IGFuaW1hdGlvbklkID0gbnVsbDtcblxuXG4gICAgICAgIC8vINCX0LDQstCw0L3RgtCw0LbQtdC90L3RjyDQt9C+0LHRgNCw0LbQtdC90YxcbiAgICAgICAgY29uc3QgaW1hZ2VzID0ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbmV3IEltYWdlKCksXG4gICAgICAgICAgICB0cmVlOiBuZXcgSW1hZ2UoKSxcbiAgICAgICAgICAgIGRlZXI6IG5ldyBJbWFnZSgpXG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IGltYWdlc0xvYWRlZCA9IDA7XG4gICAgICAgIGNvbnN0IHRvdGFsSW1hZ2VzID0gMztcblxuICAgICAgICBmdW5jdGlvbiBvbkltYWdlTG9hZCgpIHtcbiAgICAgICAgICAgIGltYWdlc0xvYWRlZCsrO1xuICAgICAgICAgICAgaWYgKGltYWdlc0xvYWRlZCA9PT0gdG90YWxJbWFnZXMpIHtcbiAgICAgICAgICAgICAgICBkcmF3Q2FudmFzKCk7XG4gICAgICAgICAgICAgICAgc3RhcnRBbmltYXRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGltYWdlcy5iYWNrZ3JvdW5kLm9ubG9hZCA9IG9uSW1hZ2VMb2FkO1xuICAgICAgICBpbWFnZXMudHJlZS5vbmxvYWQgPSBvbkltYWdlTG9hZDtcbiAgICAgICAgaW1hZ2VzLmRlZXIub25sb2FkID0gb25JbWFnZUxvYWQ7XG5cbiAgICAgICAgaW1hZ2VzLmJhY2tncm91bmQuc3JjID0gJ2ltZy9wYXJ0aWNpcGF0ZS9jYW52YXMtYmcucG5nJztcbiAgICAgICAgaW1hZ2VzLnRyZWUuc3JjID0gJ2ltZy9wYXJ0aWNpcGF0ZS90cmVlLnBuZyc7XG4gICAgICAgIGltYWdlcy5kZWVyLnNyYyA9ICdpbWcvcGFydGljaXBhdGUvZGVlci5wbmcnO1xuXG4gICAgICAgIGZ1bmN0aW9uIGRyYXdDYW52YXMoKSB7XG4gICAgICAgICAgICAvLyDQntGH0LjRidC10L3QvdGPIGNhbnZhc1xuICAgICAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBDQU5WQVNfV0lEVEgsIENBTlZBU19IRUlHSFQpO1xuXG4gICAgICAgICAgICAvLyDQnNCw0LvRjtGU0LzQviDRhNC+0L1cbiAgICAgICAgICAgIGlmIChpbWFnZXMuYmFja2dyb3VuZC5jb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1hZ2VzLmJhY2tncm91bmQsIDAsIDAsIENBTlZBU19XSURUSCwgQ0FOVkFTX0hFSUdIVCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vINCc0LDQu9GO0ZTQvNC+INGP0LvQuNC90LrRgyAo0YHRgtCw0YLQuNGH0L3QsClcbiAgICAgICAgICAgIGlmIChpbWFnZXMudHJlZS5jb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1hZ2VzLnRyZWUsIHRyZWVYLCB0cmVlWSwgVFJFRV9XSURUSCwgVFJFRV9IRUlHSFQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDQnNCw0LvRjtGU0LzQviDQvtC70LXQvdGPXG4gICAgICAgICAgICBpZiAoaW1hZ2VzLmRlZXIuY29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICAvLyDQktGW0LTQvtCx0YDQsNC20LDRlNC80L4g0L7Qu9C10L3RjyDQsiDQt9Cw0LvQtdC20L3QvtGB0YLRliDQstGW0LQg0L3QsNC/0YDRj9C80LrRg1xuICAgICAgICAgICAgICAgIGlmIChkZWVyRGlyZWN0aW9uID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAvLyDQktGW0LTQvtCx0YDQsNC20LDRlNC80L4g0LTQt9C10YDQutCw0LvRjNC90L4g0LTQu9GPINGA0YPRhdGDINCy0LvRltCy0L5cbiAgICAgICAgICAgICAgICAgICAgY3R4LnNhdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LnNjYWxlKC0xLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShpbWFnZXMuZGVlciwgLWRlZXJYIC0gREVFUl9XSURUSCwgZGVlclksIERFRVJfV0lEVEgsIERFRVJfSEVJR0hUKTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LnJlc3RvcmUoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKGltYWdlcy5kZWVyLCBkZWVyWCwgZGVlclksIERFRVJfV0lEVEgsIERFRVJfSEVJR0hUKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBhbmltYXRlKCkge1xuICAgICAgICAgICAgLy8g0J7QvdC+0LLQu9GO0ZTQvNC+INC/0L7Qt9C40YbRltGOINC+0LvQtdC90Y9cbiAgICAgICAgICAgIGRlZXJYICs9IGRlZXJTcGVlZCAqIGRlZXJEaXJlY3Rpb247XG5cbiAgICAgICAgICAgIC8vINCf0LXRgNC10LLRltGA0Y/RlNC80L4g0LzQtdC20ZYg0YLQsCDQt9C80ZbQvdGO0ZTQvNC+INC90LDQv9GA0Y/QvNC+0LpcbiAgICAgICAgICAgIGlmIChkZWVyWCA+PSBkZWVyTWF4WCkge1xuICAgICAgICAgICAgICAgIGRlZXJYID0gZGVlck1heFg7XG4gICAgICAgICAgICAgICAgZGVlckRpcmVjdGlvbiA9IC0xOyAvLyDQoNGD0YXQsNGU0LzQvtGB0Y8g0LLQu9GW0LLQvlxuICAgICAgICAgICAgfSBlbHNlIGlmIChkZWVyWCA8PSBkZWVyTWluWCkge1xuICAgICAgICAgICAgICAgIGRlZXJYID0gZGVlck1pblg7XG4gICAgICAgICAgICAgICAgZGVlckRpcmVjdGlvbiA9IDE7IC8vINCg0YPRhdCw0ZTQvNC+0YHRjyDQstC/0YDQsNCy0L5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8g0J/QtdGA0LXQvNCw0LvRjNC+0LLRg9GU0LzQviBjYW52YXNcbiAgICAgICAgICAgIGRyYXdDYW52YXMoKTtcblxuICAgICAgICAgICAgYW5pbWF0aW9uSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBzdGFydEFuaW1hdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChhbmltYXRpb25JZCkge1xuICAgICAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbklkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFuaW1hdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vINCX0YPQv9C40L3Rj9GU0LzQviDQsNC90ZbQvNCw0YbRltGOINC/0YDQuCDQstC40YXQvtC00ZYg0Lcgdmlld3BvcnQgKNC+0L/RhtGW0L7QvdCw0LvRjNC90L4pXG4gICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgICAgICAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWFuaW1hdGlvbklkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydEFuaW1hdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFuaW1hdGlvbklkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShhbmltYXRpb25JZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25JZCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShjYW52YXMpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluaXRTbm93Zmxha2VzQ2FudmFzKCkge1xuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc25vd2ZsYWtlc0NhbnZhcycpO1xuICAgICAgICBpZiAoIWNhbnZhcykgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICBjb25zdCBmYXZQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhdi1wYWdlJyk7XG4gICAgICAgIFxuICAgICAgICAvLyDQmtC+0L3RgdGC0LDQvdGC0LhcbiAgICAgICAgY29uc3QgU05PV0ZMQUtFX0NPVU5UID0gNTA7XG4gICAgICAgIGNvbnN0IFNOT1dGTEFLRV9NSU5fU0laRSA9IDQ7XG4gICAgICAgIGNvbnN0IFNOT1dGTEFLRV9NQVhfU0laRSA9IDEwO1xuICAgICAgICBjb25zdCBTTk9XRkxBS0VfTUlOX1NQRUVEID0gMC4xO1xuICAgICAgICBjb25zdCBTTk9XRkxBS0VfTUFYX1NQRUVEID0gMC4zO1xuICAgICAgICBjb25zdCBTTk9XRkxBS0VfV0lORF9SQU5HRSA9IDAuNDtcbiAgICAgICAgY29uc3QgU05PV0ZMQUtFX1NQQVdOX0lOVEVSVkFMID0gMjAwO1xuXG4gICAgICAgIGNvbnN0IHNub3dmbGFrZXMgPSBbXTtcbiAgICAgICAgbGV0IGxhc3RTbm93Zmxha2VUaW1lID0gMDtcbiAgICAgICAgbGV0IGFuaW1hdGlvbklkID0gbnVsbDtcbiAgICAgICAgXG4gICAgICAgIC8vINCS0YHRgtCw0L3QvtCy0LvRjtGU0LzQviDRgNC+0LfQvNGW0YAgY2FudmFzINC90LAg0LLQtdGB0YwgLmZhdi1wYWdlXG4gICAgICAgIGZ1bmN0aW9uIHJlc2l6ZUNhbnZhcygpIHtcbiAgICAgICAgICAgIGxldCBuZXdXaWR0aCwgbmV3SGVpZ2h0O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoZmF2UGFnZSkge1xuICAgICAgICAgICAgICAgIC8vINCS0LjQutC+0YDQuNGB0YLQvtCy0YPRlNC80L4gc2Nyb2xsSGVpZ2h0INC00LvRjyDQvtGC0YDQuNC80LDQvdC90Y8g0YDQtdCw0LvRjNC90L7RlyDQstC40YHQvtGC0Lgg0LrQvtC90YLQtdC90YLRg1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlY3QgPSBmYXZQYWdlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgICAgIG5ld1dpZHRoID0gcmVjdC53aWR0aCB8fCBmYXZQYWdlLm9mZnNldFdpZHRoIHx8IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICAgICAgICAgIC8vINCU0LvRjyDQstC40YHQvtGC0Lgg0LLQuNC60L7RgNC40YHRgtC+0LLRg9GU0LzQviBzY3JvbGxIZWlnaHQg0Y/QutGJ0L4g0LLRltC9INCx0ZbQu9GM0YjQuNC5INC30LAgb2Zmc2V0SGVpZ2h0XG4gICAgICAgICAgICAgICAgY29uc3Qgb2Zmc2V0SGVpZ2h0ID0gZmF2UGFnZS5vZmZzZXRIZWlnaHQgfHwgZmF2UGFnZS5jbGllbnRIZWlnaHQ7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2Nyb2xsSGVpZ2h0ID0gZmF2UGFnZS5zY3JvbGxIZWlnaHQ7XG4gICAgICAgICAgICAgICAgbmV3SGVpZ2h0ID0gTWF0aC5tYXgoc2Nyb2xsSGVpZ2h0LCBvZmZzZXRIZWlnaHQsIHJlY3QuaGVpZ2h0KSB8fCB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIEZhbGxiYWNrINC90LAgdmlld3BvcnRcbiAgICAgICAgICAgICAgICBuZXdXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICAgICAgICAgIG5ld0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0J/QtdGA0LXQstGW0YDRj9GU0LzQviDRh9C4INGA0L7Qt9C80ZbRgNC4INC30LzRltC90LjQu9C40YHRjyDQv9C10YDQtdC0INC+0L3QvtCy0LvQtdC90L3Rj9C8XG4gICAgICAgICAgICBpZiAoY2FudmFzLndpZHRoICE9PSBuZXdXaWR0aCB8fCBjYW52YXMuaGVpZ2h0ICE9PSBuZXdIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICBjYW52YXMud2lkdGggPSBuZXdXaWR0aDtcbiAgICAgICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gbmV3SGVpZ2h0O1xuICAgICAgICAgICAgICAgIC8vINCe0YfQuNGJ0LDRlNC80L4g0YHQvdGW0LbQuNC90LrQuCDQv9GA0Lgg0LfQvNGW0L3RliDRgNC+0LfQvNGW0YDRg1xuICAgICAgICAgICAgICAgIHNub3dmbGFrZXMubGVuZ3RoID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vINCS0YHRgtCw0L3QvtCy0LvRjtGU0LzQviDRgNC+0LfQvNGW0YAgY2FudmFzINC3INC90LXQstC10LvQuNC60L7RjiDQt9Cw0YLRgNC40LzQutC+0Y4g0LTQu9GPINC60L7RgNC10LrRgtC90L7Qs9C+INGA0L7Qt9GA0LDRhdGD0L3QutGDINGA0L7Qt9C80ZbRgNGW0LJcbiAgICAgICAgLy8g0JLQuNC60L7RgNC40YHRgtC+0LLRg9GU0LzQviDQutGW0LvRjNC60LAg0LrQsNC00YDRltCyINC00LvRjyDQs9Cw0YDQsNC90YLRltGXINC/0YDQsNCy0LjQu9GM0L3QvtCz0L4g0YDQvtC30LzRltGA0YNcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgIHJlc2l6ZUNhbnZhcygpO1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICByZXNpemVDYW52YXMoKTtcbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXNpemVDYW52YXMoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemVDYW52YXMpO1xuXG4gICAgICAgIC8vINCX0LDQstCw0L3RgtCw0LbQtdC90L3RjyDQt9C+0LHRgNCw0LbQtdC90L3RjyDRgdC90ZbQttC40L3QutC4XG4gICAgICAgIGNvbnN0IHNub3dmbGFrZUltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGxldCBpbWFnZUxvYWRlZCA9IGZhbHNlO1xuXG4gICAgICAgIHNub3dmbGFrZUltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaW1hZ2VMb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgLy8g0KfQtdC60LDRlNC80L4g0L/QvtC60Lgg0YHRgtC+0YDRltC90LrQsCDQstC40LnQtNC1INC30ZYg0YHRgtCw0L3RgyBsb2FkaW5nINC/0LXRgNC10LQg0YHRgtCw0YDRgtC+0Lwg0LDQvdGW0LzQsNGG0ZbRl1xuICAgICAgICAgICAgZnVuY3Rpb24gd2FpdEZvclBhZ2VSZWFkeSgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpc1BhZ2VMb2FkaW5nID0gbWFpblBhZ2UgJiYgbWFpblBhZ2UuY2xhc3NMaXN0LmNvbnRhaW5zKCdsb2FkaW5nJyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKGlzUGFnZUxvYWRpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g0K/QutGJ0L4g0YHRgtC+0YDRltC90LrQsCDRidC1INCyINGB0YLQsNC90ZYgbG9hZGluZywg0YfQtdC60LDRlNC80L4g0L/QvtC60LggbG9hZGVyINC/0YDQuNGF0L7QstCw0ZTRgtGM0YHRj1xuICAgICAgICAgICAgICAgICAgICAvLyBoaWRlTG9hZGVyINCy0LjQutC70LjQutCw0ZTRgtGM0YHRjyDRh9C10YDQtdC3IDMwMG1zINC/0ZbRgdC70Y8gcXVpY2tDaGVja0FuZFJlbmRlclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzaXplQ2FudmFzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzaXplQ2FudmFzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vINCU0L7QtNCw0YLQutC+0LLQsCDQv9C10YDQtdCy0ZbRgNC60LAg0L/RltGB0LvRjyDRidC1INC+0LTQvdC+0LPQviDQutCw0LTRgNGDXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNpemVDYW52YXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYW52YXMud2lkdGggPiAwICYmIGNhbnZhcy5oZWlnaHQgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRBbmltYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g0K/QutGJ0L4g0LLRgdC1INGJ0LUg0L3QtdC/0YDQsNCy0LjQu9GM0L3QuNC5INGA0L7Qt9C80ZbRgCwg0L/QvtCy0YLQvtGA0Y7RlNC80L5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KHdhaXRGb3JQYWdlUmVhZHksIDUwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSwgNDAwKTsgLy8g0KfQtdC60LDRlNC80L4g0YLRgNC+0YXQuCDQsdGW0LvRjNGI0LUg0L3RltC2IGhpZGVMb2FkZXIgKDMwMG1zKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vINCh0YLQvtGA0ZbQvdC60LAg0LPQvtGC0L7QstCwLCDQstGB0YLQsNC90L7QstC70Y7RlNC80L4g0YDQvtC30LzRltGAINGC0LAg0LfQsNC/0YPRgdC60LDRlNC80L5cbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc2l6ZUNhbnZhcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNpemVDYW52YXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNpemVDYW52YXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhbnZhcy53aWR0aCA+IDAgJiYgY2FudmFzLmhlaWdodCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QW5pbWF0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHdhaXRGb3JQYWdlUmVhZHkoKTtcbiAgICAgICAgfTtcbiAgICAgICAgc25vd2ZsYWtlSW1hZ2Uuc3JjID0gJ2ltZy9zbm93Zmxha2UucG5nJztcbiAgICAgICBcblxuICAgICAgICAvLyDQmtC70LDRgSDQtNC70Y8g0YHQvdGW0LbQuNC90LrQuFxuICAgICAgICBjbGFzcyBTbm93Zmxha2Uge1xuICAgICAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy54ID0gTWF0aC5yYW5kb20oKSAqIChjYW52YXMud2lkdGggfHwgd2luZG93LmlubmVyV2lkdGgpO1xuICAgICAgICAgICAgICAgIHRoaXMueSA9IC0yMDtcbiAgICAgICAgICAgICAgICB0aGlzLnNpemUgPSBNYXRoLnJhbmRvbSgpICogKFNOT1dGTEFLRV9NQVhfU0laRSAtIFNOT1dGTEFLRV9NSU5fU0laRSkgKyBTTk9XRkxBS0VfTUlOX1NJWkU7XG4gICAgICAgICAgICAgICAgdGhpcy5zcGVlZCA9IE1hdGgucmFuZG9tKCkgKiAoU05PV0ZMQUtFX01BWF9TUEVFRCAtIFNOT1dGTEFLRV9NSU5fU1BFRUQpICsgU05PV0ZMQUtFX01JTl9TUEVFRDtcbiAgICAgICAgICAgICAgICB0aGlzLndpbmQgPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiBTTk9XRkxBS0VfV0lORF9SQU5HRTtcbiAgICAgICAgICAgICAgICB0aGlzLm9wYWNpdHkgPSBNYXRoLnJhbmRvbSgpICogMC41ICsgMC41O1xuICAgICAgICAgICAgICAgIHRoaXMucm90YXRpb24gPSBNYXRoLnJhbmRvbSgpICogTWF0aC5QSSAqIDI7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3RhdGlvblNwZWVkID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMC4wMjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdXBkYXRlKCkge1xuICAgICAgICAgICAgICAgIHRoaXMueSArPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgICAgIHRoaXMueCArPSB0aGlzLndpbmQgKyAoTWF0aC5zaW4odGhpcy55ICogMC4wMSkgKiAwLjIpO1xuICAgICAgICAgICAgICAgIHRoaXMucm90YXRpb24gKz0gdGhpcy5yb3RhdGlvblNwZWVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkcmF3KCkge1xuICAgICAgICAgICAgICAgIGlmICghaW1hZ2VMb2FkZWQpIHJldHVybjtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNC60LAg0YfQuCBjYW52YXMg0LzQsNGUINC/0YDQsNCy0LjQu9GM0L3QuNC5INGA0L7Qt9C80ZbRgFxuICAgICAgICAgICAgICAgIGlmIChjYW52YXMud2lkdGggPT09IDAgfHwgY2FudmFzLmhlaWdodCA9PT0gMCkgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgY3R4LnNhdmUoKTtcbiAgICAgICAgICAgICAgICBjdHguZ2xvYmFsQWxwaGEgPSB0aGlzLm9wYWNpdHk7XG4gICAgICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZSh0aGlzLngsIHRoaXMueSk7XG4gICAgICAgICAgICAgICAgY3R4LnJvdGF0ZSh0aGlzLnJvdGF0aW9uKTtcbiAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgICAgICAgICBzbm93Zmxha2VJbWFnZSxcbiAgICAgICAgICAgICAgICAgICAgLXRoaXMuc2l6ZSAvIDIsXG4gICAgICAgICAgICAgICAgICAgIC10aGlzLnNpemUgLyAyLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNpemUsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2l6ZVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgY3R4LnJlc3RvcmUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaXNPZmZTY3JlZW4oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMueSA+IGNhbnZhcy5oZWlnaHQgKyAyMCB8fCBcbiAgICAgICAgICAgICAgICAgICAgICAgdGhpcy54IDwgLTIwIHx8IFxuICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnggPiBjYW52YXMud2lkdGggKyAyMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVNub3dmbGFrZSgpIHtcbiAgICAgICAgICAgIGlmIChzbm93Zmxha2VzLmxlbmd0aCA8IFNOT1dGTEFLRV9DT1VOVCkge1xuICAgICAgICAgICAgICAgIHNub3dmbGFrZXMucHVzaChuZXcgU25vd2ZsYWtlKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlU25vd2ZsYWtlcygpIHtcbiAgICAgICAgICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gICAgICAgICAgICBpZiAobm93IC0gbGFzdFNub3dmbGFrZVRpbWUgPiBTTk9XRkxBS0VfU1BBV05fSU5URVJWQUwpIHtcbiAgICAgICAgICAgICAgICBjcmVhdGVTbm93Zmxha2UoKTtcbiAgICAgICAgICAgICAgICBsYXN0U25vd2ZsYWtlVGltZSA9IG5vdztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHNub3dmbGFrZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICBzbm93Zmxha2VzW2ldLnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgIGlmIChzbm93Zmxha2VzW2ldLmlzT2ZmU2NyZWVuKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgc25vd2ZsYWtlcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZHJhd1Nub3dmbGFrZXMoKSB7XG4gICAgICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNC60LAg0YfQuCBjYW52YXMg0LzQsNGUINC/0YDQsNCy0LjQu9GM0L3QuNC5INGA0L7Qt9C80ZbRgCDQv9C10YDQtdC0INC80LDQu9GO0LLQsNC90L3Rj9C8XG4gICAgICAgICAgICBpZiAoY2FudmFzLndpZHRoID09PSAwIHx8IGNhbnZhcy5oZWlnaHQgPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXNpemVDYW52YXMoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIHNub3dmbGFrZXMuZm9yRWFjaChzbm93Zmxha2UgPT4ge1xuICAgICAgICAgICAgICAgIHNub3dmbGFrZS5kcmF3KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGFuaW1hdGUoKSB7XG4gICAgICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNGP0ZTQvNC+INGA0L7Qt9C80ZbRgCBjYW52YXMg0L3QsCDQv9C+0YfQsNGC0LrRgyDQutC+0LbQvdC+0LPQviDQutCw0LTRgNGDICjRgtGW0LvRjNC60Lgg0Y/QutGJ0L4g0LLRltC9INC90LXQv9GA0LDQstC40LvRjNC90LjQuSlcbiAgICAgICAgICAgIGlmIChjYW52YXMud2lkdGggPT09IDAgfHwgY2FudmFzLmhlaWdodCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJlc2l6ZUNhbnZhcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB1cGRhdGVTbm93Zmxha2VzKCk7XG4gICAgICAgICAgICBkcmF3U25vd2ZsYWtlcygpO1xuICAgICAgICAgICAgYW5pbWF0aW9uSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBzdGFydEFuaW1hdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChhbmltYXRpb25JZCkge1xuICAgICAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbklkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFuaW1hdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vINCX0YPQv9C40L3Rj9GU0LzQviDQsNC90ZbQvNCw0YbRltGOINC/0YDQuCDQstC40YXQvtC00ZYg0Lcgdmlld3BvcnRcbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICAgICAgICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghYW5pbWF0aW9uSWQgJiYgaW1hZ2VMb2FkZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QW5pbWF0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYW5pbWF0aW9uSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbklkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbklkID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGNhbnZhcyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdEluZmluaXRlU2Nyb2xsKCkge1xuICAgICAgICBjb25zdCBzY3JvbGxCbG9ja3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2Nyb2xsJyk7XG4gICAgICAgIFxuICAgICAgICBpZiAoIXNjcm9sbEJsb2Nrcy5sZW5ndGgpIHJldHVybjtcbiAgICAgICAgXG4gICAgICAgIHNjcm9sbEJsb2Nrcy5mb3JFYWNoKChzY3JvbGxCbG9jaykgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsQ29udGVudCA9IHNjcm9sbEJsb2NrLnF1ZXJ5U2VsZWN0b3IoJy5zY3JvbGxfX2NvbnRlbnQnKTtcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbFRleHQgPSBzY3JvbGxCbG9jay5xdWVyeVNlbGVjdG9yKCcuc2Nyb2xsX190ZXh0Jyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICghc2Nyb2xsQ29udGVudCB8fCAhc2Nyb2xsVGV4dCkgcmV0dXJuO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gc2Nyb2xsVGV4dC50ZXh0Q29udGVudC50cmltKCk7XG4gICAgICAgICAgICBpZiAoIXRleHQpIHJldHVybjsgLy8g0J/QtdGA0LXQstGW0YDQutCwINC90LAg0L/QvtGA0L7QttC90ZbQuSDRgtC10LrRgdGCXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHBhZGRpbmdSaWdodCA9IDA7XG4gICAgICAgICAgICBjb25zdCBmaXhlZFdpZHRoID0gMjYwMDsgLy8g0KTRltC60YHQvtCy0LDQvdCwINGI0LjRgNC40L3QsCDQutC+0L3RgtC10L3RgtGDXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCe0YfQuNGJ0LDRlNC80L4g0LrQvtC90YLQtdC90YJcbiAgICAgICAgICAgIHNjcm9sbENvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCh0YLQstC+0YDRjtGU0LzQviDQtdC70LXQvNC10L3RgtC4INC00L4g0YLQuNGFINC/0ZbRgCwg0L/QvtC60Lgg0L3QtSDQtNC+0YHRj9Cz0L3QtdC80L4g0YTRltC60YHQvtCy0LDQvdC+0Zcg0YjQuNGA0LjQvdC4IDI2MDBweFxuICAgICAgICAgICAgY29uc3QgZWxlbWVudHMgPSBbXTtcbiAgICAgICAgICAgIGxldCBpdGVtQ291bnQgPSAwO1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRXaWR0aCA9IDA7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCh0L/QvtGH0LDRgtC60YMg0YHRgtCy0L7RgNGO0ZTQvNC+INC+0LTQuNC9INC10LvQtdC80LXQvdGCLCDRidC+0LEg0L7RgtGA0LjQvNCw0YLQuCDQudC+0LPQviDRiNC40YDQuNC90YNcbiAgICAgICAgICAgIGNvbnN0IHRlbXBFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgdGVtcEVsZW1lbnQuY2xhc3NOYW1lID0gJ3Njcm9sbF9fdGV4dCc7XG4gICAgICAgICAgICB0ZW1wRWxlbWVudC50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICAgICAgICAvLyDQotC40LzRh9Cw0YHQvtCy0L4g0L/QvtC60LDQt9GD0ZTQvNC+INC10LvQtdC80LXQvdGCINC00LvRjyDQstC40LzRltGA0Y7QstCw0L3QvdGPXG4gICAgICAgICAgICB0ZW1wRWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgICAgICB0ZW1wRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgICAgICB0ZW1wRWxlbWVudC5zdHlsZS53aGl0ZVNwYWNlID0gJ25vd3JhcCc7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRlbXBFbGVtZW50KTtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1XaWR0aCA9IHRlbXBFbGVtZW50Lm9mZnNldFdpZHRoICsgcGFkZGluZ1JpZ2h0O1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0ZW1wRWxlbWVudCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCf0LXRgNC10LLRltGA0LrQsCDQvdCwINCy0LDQu9GW0LTQvdGDINGI0LjRgNC40L3RgyDQtdC70LXQvNC10L3RgtCwXG4gICAgICAgICAgICBpZiAoaXRlbVdpZHRoIDw9IDApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1Njcm9sbCBpdGVtIHdpZHRoIGlzIDAgb3IgaW52YWxpZCcpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0J7QsdC80LXQttGD0ZTQvNC+INC60ZbQu9GM0LrRltGB0YLRjCDRltGC0LXRgNCw0YbRltC5INC00LvRjyDQsdC10LfQv9C10LrQuFxuICAgICAgICAgICAgY29uc3QgbWF4SXRlcmF0aW9ucyA9IE1hdGguY2VpbChmaXhlZFdpZHRoIC8gaXRlbVdpZHRoKSArIDEwO1xuICAgICAgICAgICAgbGV0IGl0ZXJhdGlvbnMgPSAwO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQodGC0LLQvtGA0Y7RlNC80L4g0LXQu9C10LzQtdC90YLQuCDQtNC+INGC0LjRhSDQv9GW0YAsINC/0L7QutC4INC90LUg0LTQvtGB0Y/Qs9C90LXQvNC+INGE0ZbQutGB0L7QstCw0L3QvtGXINGI0LjRgNC40L3QuFxuICAgICAgICAgICAgd2hpbGUgKGN1cnJlbnRXaWR0aCA8IGZpeGVkV2lkdGggJiYgaXRlcmF0aW9ucyA8IG1heEl0ZXJhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXh0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgICAgICB0ZXh0RWxlbWVudC5jbGFzc05hbWUgPSAnc2Nyb2xsX190ZXh0JztcbiAgICAgICAgICAgICAgICB0ZXh0RWxlbWVudC50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8g0JrQvtC20LXQvSDQtNGA0YPQs9C40Lkg0LXQu9C10LzQtdC90YIg0L7RgtGA0LjQvNGD0ZQg0LrQu9Cw0YEgZGFya1xuICAgICAgICAgICAgICAgIGlmIChpdGVtQ291bnQgJSAyID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHRleHRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RhcmsnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgc2Nyb2xsQ29udGVudC5hcHBlbmRDaGlsZCh0ZXh0RWxlbWVudCk7XG4gICAgICAgICAgICAgICAgZWxlbWVudHMucHVzaCh0ZXh0RWxlbWVudCk7XG4gICAgICAgICAgICAgICAgY3VycmVudFdpZHRoICs9IGl0ZW1XaWR0aDtcbiAgICAgICAgICAgICAgICBpdGVtQ291bnQrKztcbiAgICAgICAgICAgICAgICBpdGVyYXRpb25zKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCf0LXRgNC10LLRltGA0LrQsCDQvdCwINC90LDRj9Cy0L3RltGB0YLRjCDQtdC70LXQvNC10L3RgtGW0LJcbiAgICAgICAgICAgIGlmIChlbGVtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ05vIHNjcm9sbCBlbGVtZW50cyBjcmVhdGVkJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQktC40LrQvtGA0LjRgdGC0L7QstGD0ZTQvNC+INC+0LHRh9C40YHQu9C10L3RgyDRiNC40YDQuNC90YMg0LfQsNC80ZbRgdGC0Ywg0LLQuNC80ZbRgNGO0LLQsNC90L3RjyAo0L/RgNCw0YbRjtGUINC90LDQstGW0YLRjCDQtNC70Y8g0L/RgNC40YXQvtCy0LDQvdC40YUg0LXQu9C10LzQtdC90YLRltCyKVxuICAgICAgICAgICAgY29uc3QgY29udGVudFdpZHRoID0gY3VycmVudFdpZHRoOyAvLyDQptC1INGI0LjRgNC40L3QsCDQv9C10YDRiNC+0LPQviDQvdCw0LHQvtGA0YMg0LXQu9C10LzQtdC90YLRltCyXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCf0LXRgNC10LLRltGA0LrQsCDQvdCwINCy0LDQu9GW0LTQvdGDINGI0LjRgNC40L3RgyDQutC+0L3RgtC10L3RgtGDXG4gICAgICAgICAgICBpZiAoY29udGVudFdpZHRoIDw9IDApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1Njcm9sbCBjb250ZW50IHdpZHRoIGlzIDAgb3IgaW52YWxpZCcpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0KHRgtCy0L7RgNGO0ZTQvNC+INC00YDRg9Cz0YMg0LrQvtC/0ZbRjiAo0L7RgtGA0LjQvNGD0ZTQvNC+IDJ4INGE0ZbQutGB0L7QstCw0L3QvtGXINGI0LjRgNC40L3QuClcbiAgICAgICAgICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjbG9uZWRFbGVtZW50ID0gZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgc2Nyb2xsQ29udGVudC5hcHBlbmRDaGlsZChjbG9uZWRFbGVtZW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQkNC90ZbQvNCw0YbRltGPXG4gICAgICAgICAgICBsZXQgcG9zaXRpb24gPSAwOyAvLyDQktC40YXRltC00L3QsCDRgtC+0YfQutCwIC0gMCDQstGW0LTQvdC+0YHQvdC+INC70ZbQstC+0LPQviDQutGA0LDRjlxuICAgICAgICAgICAgY29uc3Qgc3BlZWQgPSAwLjM7IC8vIHB4IHBlciBmcmFtZVxuICAgICAgICAgICAgbGV0IGFuaW1hdGlvbklkID0gbnVsbDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiAtPSBzcGVlZDsgLy8g0KDRg9GF0LDRlNC80L4g0LLQu9GW0LLQvlxuXG4gICAgICAgICAgICAgICAgaWYgKHBvc2l0aW9uIDw9IC1jb250ZW50V2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24gPSBwb3NpdGlvbiArIGNvbnRlbnRXaWR0aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgc2Nyb2xsQ29udGVudC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3Bvc2l0aW9ufXB4KWA7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCX0LDQv9GD0YHQutCw0ZTQvNC+INCw0L3RltC80LDRhtGW0Y5cbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8g0J/QtdGA0LXQstGW0YDRj9GU0LzQviwg0YfQuCDQtdC70LXQvNC10L3RgiDQstC40LTQuNC80LjQuSDQv9C10YDQtdC0INC30LDQv9GD0YHQutC+0LxcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wdXRlZFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoc2Nyb2xsQmxvY2spO1xuICAgICAgICAgICAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IGNvbXB1dGVkU3R5bGUuZGlzcGxheSAhPT0gJ25vbmUnICYmIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcHV0ZWRTdHlsZS52aXNpYmlsaXR5ICE9PSAnaGlkZGVuJztcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoaXNWaXNpYmxlICYmIGNvbnRlbnRXaWR0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZSgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vINCv0LrRidC+INC10LvQtdC80LXQvdGCINC/0YDQuNGF0L7QstCw0L3QuNC5LCDQt9Cw0L/Rg9GB0LrQsNGU0LzQviDQsNC90ZbQvNCw0YbRltGOINCy0YHQtSDQvtC00L3QvlxuICAgICAgICAgICAgICAgICAgICAvLyAo0LLQvtC90LAg0LHRg9C00LUg0L/RgNCw0YbRjtCy0LDRgtC4LCDQutC+0LvQuCDQtdC70LXQvNC10L3RgiDRgdGC0LDQvdC1INCy0LjQtNC40LzQuNC8KVxuICAgICAgICAgICAgICAgICAgICBhbmltYXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICBsb2FkVHJhbnNsYXRpb25zKClcbiAgICAgICAgLnRoZW4oaW5pdCkgLy8g0LfQsNC/0YPRgdC6INGW0L3RltGC0YMg0YHRgtC+0YDRltC90LrQuFxuXG5cblxuXG5cbiAgICAvLyBjb25zdCBsbmdCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxuZy1idG5cIilcbiAgICAvL1xuICAgIC8vIC8vINCS0YHRgtCw0L3QvtCy0LvRjtGU0LzQviDRgtC10LrRgdGCINC60L3QvtC/0LrQuCDQvdCwINC/0L7RgtC+0YfQvdGDINCw0LrRgtC40LLQvdGDINC80L7QstGDXG4gICAgLy8gZnVuY3Rpb24gdXBkYXRlTGFuZ3VhZ2VCdXR0b24oKSB7XG4gICAgLy8gICAgIC8vINCS0LjQutC+0YDQuNGB0YLQvtCy0YPRlNC80L4g0YLRgyDRgdCw0LzRgyDQu9C+0LPRltC60YMsINGJ0L4g0ZYg0LTQu9GPINCy0LjQt9C90LDRh9C10L3QvdGPIGxvY2FsZVxuICAgIC8vICAgICBsZXQgY3VycmVudExvY2FsZSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJsb2NhbGVcIikgfHwgXCJoclwiO1xuICAgIC8vICAgICBpZiAoaHJMZW5nKSBjdXJyZW50TG9jYWxlID0gJ2hyJztcbiAgICAvLyAgICAgaWYgKGVuTGVuZykgY3VycmVudExvY2FsZSA9ICdlbic7XG4gICAgLy8gICAgIGlmIChsbmdCdG4pIHtcbiAgICAvLyAgICAgICAgIGxuZ0J0bi50ZXh0Q29udGVudCA9IGN1cnJlbnRMb2NhbGU7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG4gICAgLy9cbiAgICAvLyAvLyDQntC90L7QstC70Y7RlNC80L4g0LrQvdC+0L/QutGDINC/0YDQuCDQt9Cw0LLQsNC90YLQsNC20LXQvdC90ZYgKNC/0ZbRgdC70Y8g0LLQuNC30L3QsNGH0LXQvdC90Y8gbG9jYWxlKVxuICAgIC8vIHVwZGF0ZUxhbmd1YWdlQnV0dG9uKCk7XG5cbiAgICAvLyBpZiAobG5nQnRuKSB7XG4gICAgLy8gICAgIGxuZ0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIC8vICAgICAgICAgLy8g0JLQuNC30L3QsNGH0LDRlNC80L4g0L/QvtGC0L7Rh9C90YMg0LzQvtCy0YMg0L/QtdGA0LXQtCDQv9C10YDQtdC80LjQutCw0L3QvdGP0LxcbiAgICAvLyAgICAgICAgIGxldCBjdXJyZW50TG9jYWxlID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsZVwiKSB8fCBcImhyXCI7XG4gICAgLy8gICAgICAgICBpZiAoaHJMZW5nKSBjdXJyZW50TG9jYWxlID0gJ2hyJztcbiAgICAvLyAgICAgICAgIGlmIChlbkxlbmcpIGN1cnJlbnRMb2NhbGUgPSAnZW4nO1xuICAgIC8vXG4gICAgLy8gICAgICAgICBpZiAoY3VycmVudExvY2FsZSA9PT0gXCJlblwiKSB7XG4gICAgLy8gICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcImxvY2FsZVwiKTtcbiAgICAvLyAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsZVwiLCBcImVuXCIpO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIC8vICAgICB9KTtcbiAgICAvLyB9XG4gICAgLy9cbiAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtYnRuXCIpPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIC8vICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtdGVzdFwiKT8uY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIik7XG4gICAgLy8gfSk7XG5cblxufSkoKTtcbiJdfQ==
