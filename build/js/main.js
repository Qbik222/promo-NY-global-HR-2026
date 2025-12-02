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

  // Обробник кліку/тапу по canvas (винесено за межі initParticipateCanvas)
  function handleParticipateCanvasClick(event) {
    if (!participateCanvas || !participateDeers.length) return;

    // Для touch подій запобігаємо стандартній поведінці
    if (event.type === 'touchstart') {
      event.preventDefault();
    }
    var rect = participateCanvas.getBoundingClientRect();
    var scaleX = participateCanvas.width / rect.width;
    var scaleY = participateCanvas.height / rect.height;

    // Отримуємо координати кліку відносно canvas
    var clientX = event.clientX || (event.touches && event.touches[0] ? event.touches[0].clientX : 0);
    var clientY = event.clientY || (event.touches && event.touches[0] ? event.touches[0].clientY : 0);
    var clickX = (clientX - rect.left) * scaleX;
    var clickY = (clientY - rect.top) * scaleY;

    // Перевіряємо чи клік потрапив на якогось оленя
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
      function Heart(x, y, size) {
        _classCallCheck(this, Heart);
        this.x = x;
        this.y = y;
        this.size = size;
        this.opacity = 1;
        this.scale = 1;
        this.riseSpeed = 0.5; // Швидкість підйому
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
          ctx.save();
          ctx.globalAlpha = this.opacity;
          ctx.translate(this.x, this.y);
          ctx.scale(this.scale, this.scale);

          // Малюємо сердечко
          ctx.fillStyle = '#ff6b9d';
          ctx.beginPath();
          ctx.moveTo(0, -this.size / 2);
          ctx.bezierCurveTo(-this.size / 2, -this.size / 2, -this.size / 2, 0, 0, this.size / 2);
          ctx.bezierCurveTo(this.size / 2, 0, this.size / 2, -this.size / 2, 0, -this.size / 2);
          ctx.fill();
          ctx.restore();
        }
      }]);
      return Heart;
    }(); // Клас для оленя
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

        // Властивості для стану petting
        this.pettingTimer = 0;
        this.pettingDuration = 0;
        this.previousState = null; // Зберігаємо попередній стан
        this.savedX = 0; // Збережені координати при переході в petting
        this.savedY = 0;
        this.hearts = []; // Масив сердечок
        this.heartSpawnCounter = 0;
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
          var size = Math.random() * (HEART_SIZE_MAX - HEART_SIZE_MIN) + HEART_SIZE_MIN;
          var offsetX = (Math.random() - 0.5) * DEER_WIDTH; // Випадкове зміщення по X
          var heartX = this.x + DEER_WIDTH / 2 + offsetX;
          var heartY = this.y - 10; // Трохи вище оленя
          this.hearts.push(new Heart(heartX, heartY, size));
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

          // Координати кадру в спрайт-листі
          var sourceX = col * frameWidth;
          var sourceY = row * frameHeight;

          // Вирізаємо кадр зі спрайт-листа та малюємо на canvas
          ctx.drawImage(spriteImage, sourceX, sourceY, frameWidth, frameHeight,
          // Джерело (спрайт-лист)
          this.x, this.y, deerWidth, deerHeight // Призначення (canvas)
          );

          // Малюємо сердечка над оленем
          this.hearts.forEach(function (heart) {
            heart.draw(ctx);
          });
        }
      }]);
      return Deer;
    }(); // Масив оленів (можна додати більше)
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

    // Вибираємо фон залежно від розміру екрану
    images.background.src = isMobile ? 'img/participate/canvas-bg-tab.png' : 'img/participate/canvas-bg.png';
    images.tree.src = 'img/participate/tree.png';
    // Використовуємо спрайт-лист (якщо файл називається deer-sprite.png, змініть назву)
    images.deerSprite.src = 'img/participate/deer-sprite.png';

    // Оновлюємо посилання на дані для обробників подій
    participateDeers = deers;
    participateDeerWidth = DEER_WIDTH;
    participateDeerHeight = DEER_HEIGHT;

    // Додаємо обробники подій тільки один раз
    if (!canvasClickHandlersAttached) {
      canvas.addEventListener('click', handleParticipateCanvasClick);
      canvas.addEventListener('touchstart', handleParticipateCanvasClick, {
        passive: false
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwibWFpblBhZ2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJsb2FkZXIiLCJyZXN1bHRzVGFibGUiLCJyZXN1bHRzVGFibGVPdGhlciIsImhyTGVuZyIsImVuTGVuZyIsImxvY2FsZSIsImRlYnVnIiwiaGlkZUxvYWRlciIsImkxOG5EYXRhIiwidHJhbnNsYXRlU3RhdGUiLCJ1c2VySWQiLCJyZXF1ZXN0IiwibGluayIsImV4dHJhT3B0aW9ucyIsImZldGNoIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJvayIsIkVycm9yIiwianNvbiIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsInJlcG9ydEVycm9yIiwic3R5bGUiLCJkaXNwbGF5Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwic3RhcnRzV2l0aCIsIlByb21pc2UiLCJyZWplY3QiLCJjbGFzc0xpc3QiLCJhZGQiLCJib2R5Iiwib3ZlcmZsb3ciLCJyZW1vdmUiLCJpbml0IiwidHJ5RGV0ZWN0VXNlcklkIiwicXVpY2tDaGVja0FuZFJlbmRlciIsImluaXRHYW1lc1dlZWsiLCJpbml0UHJvZ3Jlc3NCYXIiLCJpbml0UGFydGljaXBhdGVDYW52YXMiLCJpbml0U25vd2ZsYWtlc0NhbnZhcyIsInNldFRpbWVvdXQiLCJhZGRFdmVudExpc3RlbmVyIiwiZHJvcGRvd25zIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJkcm9wZG93biIsImV2ZW50Iiwib3BlbiIsInN1bW1hcnkiLCJzdW1tYXJ5UmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImN1cnJlbnRTY3JvbGxZIiwic2Nyb2xsWSIsInBhZ2VZT2Zmc2V0IiwidGFyZ2V0U2Nyb2xsWSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInNjcm9sbFRvIiwiTWF0aCIsIm1heCIsImJlaGF2aW9yIiwic3RvcmUiLCJzdGF0ZSIsImdldFN0YXRlIiwiYXV0aCIsImlzQXV0aG9yaXplZCIsImlkIiwiZ191c2VyX2lkIiwiYXR0ZW1wdHMiLCJtYXhBdHRlbXB0cyIsImF0dGVtcHRJbnRlcnZhbCIsIndhaXRGb3JVc2VySWQiLCJyZXNvbHZlIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJsb2FkVHJhbnNsYXRpb25zIiwidHJhbnNsYXRlIiwicmVwb3J0RGF0YSIsIm9yaWdpbiIsInVzZXJpZCIsImVycm9yVGV4dCIsInRleHQiLCJtZXNzYWdlIiwidHlwZSIsIm5hbWUiLCJzdGFjayIsIm1ldGhvZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ3YXJuIiwiZWxlbXMiLCJsZW5ndGgiLCJlbGVtIiwia2V5IiwiZ2V0QXR0cmlidXRlIiwiaW5uZXJIVE1MIiwicmVtb3ZlQXR0cmlidXRlIiwibG9nIiwicmVmcmVzaExvY2FsaXplZENsYXNzIiwiZWxlbWVudCIsImxhbmciLCJyZW5kZXJVc2VycyIsIndlZWtOdW0iLCJ1c2VyRGF0YSIsIk51bWJlciIsIndlZWtPYmoiLCJmaW5kIiwidyIsIndlZWsiLCJkYXRhIiwiQXJyYXkiLCJpc0FycmF5IiwidXNlcnMiLCJpc1N0YWdlRW5kZWQiLCJ3aW5uZXJBZGRpdGlvbmFsUHJpemUiLCJ1Iiwid2lubmVyIiwiY3VycmVudFVzZXIiLCJ1c2VyIiwiaXNWZXJpZmllZFVzZXIiLCJwb2ludHMiLCJwb3B1bGF0ZVVzZXJzVGFibGUiLCJjdXJyZW50VXNlcklkIiwic2Vjb25kVGFibGVPdGhlciIsInNlY29uZFRhYmxlIiwiaXNUb3BDdXJyZW50VXNlciIsInNsaWNlIiwic29tZSIsInRvcFVzZXJzTGVuZ3RoIiwidG9wVXNlcnMiLCJkaXNwbGF5VXNlciIsImlzQ3VycmVudFVzZXIiLCJ0YWJsZSIsInJlbmRlclJvdyIsIm9wdGlvbnMiLCJoaWdobGlnaHQiLCJuZWlnaGJvciIsInVzZXJSb3ciLCJjcmVhdGVFbGVtZW50IiwidXNlclBsYWNlIiwiaW5kZXhPZiIsInByaXplS2V5IiwiZ2V0UHJpemVUcmFuc2xhdGlvbktleSIsInRyYW5zbGF0ZUtleSIsIm1hc2tVc2VySWQiLCJ0b0ZpeGVkIiwiYXBwZW5kIiwiaW5kZXgiLCJjYW52YXMiLCJwZXJjZW50RWxlbWVudCIsImN0eCIsImdldENvbnRleHQiLCJiYXJIZWlnaHQiLCJzZWdtZW50V2lkdGgiLCJzZWdtZW50SGVpZ2h0Iiwic2VnbWVudEdhcCIsInBhZGRpbmciLCJzZWdtZW50UmFkaXVzIiwiY3VycmVudFByb2dyZXNzIiwidGFyZ2V0UHJvZ3Jlc3MiLCJsb2FkaW5nRHVyYXRpb24iLCJzdGFydFRpbWUiLCJEYXRlIiwibm93IiwiYW5pbWF0aW9uSWQiLCJtYXhTZWdtZW50cyIsImlzTG9hZGluZ0NvbXBsZXRlIiwicmVzaXplQ2FudmFzIiwiY29udGFpbmVyIiwicGFyZW50RWxlbWVudCIsImNvbnRhaW5lcldpZHRoIiwib2Zmc2V0V2lkdGgiLCJ3aWR0aCIsImhlaWdodCIsImF2YWlsYWJsZVdpZHRoIiwic2VnbWVudFdpdGhHYXAiLCJmbG9vciIsImRyYXdQcm9ncmVzc0JhciIsInByb2dyZXNzIiwiY2xlYXJSZWN0Iiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJzdHJva2VSZWN0IiwiZmlsbGVkU2VnbWVudHMiLCJmaWxsU3R5bGUiLCJjZW50ZXJZIiwiaSIsIngiLCJ5IiwiYmVnaW5QYXRoIiwicm91bmRSZWN0IiwiciIsIm1vdmVUbyIsImxpbmVUbyIsInF1YWRyYXRpY0N1cnZlVG8iLCJjbG9zZVBhdGgiLCJmaWxsIiwidXBkYXRlUHJvZ3Jlc3MiLCJlbGFwc2VkIiwicGVyY2VudCIsInRleHRDb250ZW50IiwicmVzaXplVGltZW91dCIsImNsZWFyVGltZW91dCIsImluaXRJY29uc0FuaW1hdGlvbiIsImR1cmF0aW9uIiwiaWNvbnMiLCJvcmlnaW5hbFRyYW5zZm9ybXMiLCJNYXAiLCJzZWxlY3RvciIsImljb24iLCJjb21wdXRlZFN0eWxlIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIm9yaWdpbmFsVHJhbnNmb3JtIiwidHJhbnNmb3JtIiwic2V0Iiwib3BhY2l0eSIsInRyYW5zaXRpb24iLCJpY29uQ291bnQiLCJnZXQiLCJwYXJ0aWNpcGF0ZUNhbnZhcyIsInBhcnRpY2lwYXRlRGVlcnMiLCJwYXJ0aWNpcGF0ZURlZXJXaWR0aCIsInBhcnRpY2lwYXRlRGVlckhlaWdodCIsImNhbnZhc0NsaWNrSGFuZGxlcnNBdHRhY2hlZCIsImhhbmRsZVBhcnRpY2lwYXRlQ2FudmFzQ2xpY2siLCJwcmV2ZW50RGVmYXVsdCIsInJlY3QiLCJzY2FsZVgiLCJzY2FsZVkiLCJjbGllbnRYIiwidG91Y2hlcyIsImNsaWVudFkiLCJjbGlja1giLCJsZWZ0IiwiY2xpY2tZIiwiZGVlciIsImlzUG9pbnRJbnNpZGUiLCJoYW5kbGVDbGljayIsImlzTW9iaWxlIiwiaW5uZXJXaWR0aCIsIkNBTlZBU19XSURUSCIsIkNBTlZBU19IRUlHSFQiLCJUUkVFX1dJRFRIIiwiVFJFRV9IRUlHSFQiLCJGUkFNRVNfUEVSX1JPVyIsIlRPVEFMX1JPV1MiLCJTUFJJVEVfU0hFRVRfV0lEVEgiLCJTUFJJVEVfU0hFRVRfSEVJR0hUIiwiRlJBTUVfV0lEVEgiLCJGUkFNRV9IRUlHSFQiLCJERUVSX1NDQUxFIiwiREVFUl9XSURUSCIsIkRFRVJfSEVJR0hUIiwidHJlZVgiLCJ0cmVlWSIsIkZSQU1FX0RFTEFZIiwiV0FMS0lOR19GUkFNRVMiLCJGUkFNRV9SRVBFQVQiLCJJRExFX01JTl9EVVJBVElPTiIsIklETEVfTUFYX0RVUkFUSU9OIiwiREVFUl9TVEFURSIsIldBTEtJTkciLCJJRExFIiwiUEVUVElORyIsIlBFVFRJTkdfTUlOX0RVUkFUSU9OIiwiUEVUVElOR19NQVhfRFVSQVRJT04iLCJIRUFSVF9TSVpFX01JTiIsIkhFQVJUX1NJWkVfTUFYIiwiSEVBUlRfUklTRV9ESVNUQU5DRSIsIkhFQVJUX1NQQVdOX0lOVEVSVkFMIiwiZnJhbWVDb3VudGVyIiwiSGVhcnQiLCJzaXplIiwic2NhbGUiLCJyaXNlU3BlZWQiLCJpc1Zpc2libGUiLCJzYXZlIiwiZ2xvYmFsQWxwaGEiLCJiZXppZXJDdXJ2ZVRvIiwicmVzdG9yZSIsIkRlZXIiLCJzdGFydFgiLCJzdGFydFkiLCJtaW5YIiwibWF4WCIsInNwZWVkIiwiekluZGV4IiwiZGlyZWN0aW9uIiwiZnJhbWVJbmRleCIsImZyYW1lUmVwZWF0Q291bnRlciIsImlkbGVUaW1lciIsImlkbGVEdXJhdGlvbiIsInBldHRpbmdUaW1lciIsInBldHRpbmdEdXJhdGlvbiIsInByZXZpb3VzU3RhdGUiLCJzYXZlZFgiLCJzYXZlZFkiLCJoZWFydHMiLCJoZWFydFNwYXduQ291bnRlciIsImRlZXJXaWR0aCIsImRlZXJIZWlnaHQiLCJyYW5kb20iLCJvZmZzZXRYIiwiaGVhcnRYIiwiaGVhcnRZIiwicHVzaCIsInJvdyIsImNvbCIsInNob3VsZFVwZGF0ZUZyYW1lIiwic3Bhd25IZWFydCIsImZpbHRlciIsImhlYXJ0IiwidXBkYXRlIiwic3ByaXRlSW1hZ2UiLCJmcmFtZVdpZHRoIiwiZnJhbWVIZWlnaHQiLCJjb21wbGV0ZSIsImdldFNwcml0ZUZyYW1lSW5kZXgiLCJzb3VyY2VYIiwic291cmNlWSIsImRyYXdJbWFnZSIsImRyYXciLCJkZWVycyIsIkRFRVJfQ09VTlQiLCJkZWVyQ29uZmlncyIsImNvbmZpZyIsImltYWdlcyIsImJhY2tncm91bmQiLCJJbWFnZSIsInRyZWUiLCJkZWVyU3ByaXRlIiwiaW1hZ2VzTG9hZGVkIiwidG90YWxJbWFnZXMiLCJvbkltYWdlTG9hZCIsImRyYXdDYW52YXMiLCJzdGFydEFuaW1hdGlvbiIsIm9ubG9hZCIsInNyYyIsInBhc3NpdmUiLCJUUkVFX1pfSU5ERVgiLCJkcmF3YWJsZUVsZW1lbnRzIiwic29ydCIsImEiLCJiIiwiYW5pbWF0ZSIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwib2JzZXJ2ZSIsIm5ld0lzTW9iaWxlIiwiZmF2UGFnZSIsIlNOT1dGTEFLRV9DT1VOVCIsIlNOT1dGTEFLRV9NSU5fU0laRSIsIlNOT1dGTEFLRV9NQVhfU0laRSIsIlNOT1dGTEFLRV9NSU5fU1BFRUQiLCJTTk9XRkxBS0VfTUFYX1NQRUVEIiwiU05PV0ZMQUtFX1dJTkRfUkFOR0UiLCJTTk9XRkxBS0VfU1BBV05fSU5URVJWQUwiLCJzbm93Zmxha2VzIiwibGFzdFNub3dmbGFrZVRpbWUiLCJuZXdXaWR0aCIsIm5ld0hlaWdodCIsIm9mZnNldEhlaWdodCIsImNsaWVudEhlaWdodCIsInNjcm9sbEhlaWdodCIsImlubmVySGVpZ2h0Iiwic25vd2ZsYWtlSW1hZ2UiLCJpbWFnZUxvYWRlZCIsIndhaXRGb3JQYWdlUmVhZHkiLCJpc1BhZ2VMb2FkaW5nIiwiY29udGFpbnMiLCJTbm93Zmxha2UiLCJ3aW5kIiwicm90YXRpb24iLCJQSSIsInJvdGF0aW9uU3BlZWQiLCJzaW4iLCJyb3RhdGUiLCJjcmVhdGVTbm93Zmxha2UiLCJ1cGRhdGVTbm93Zmxha2VzIiwiaXNPZmZTY3JlZW4iLCJzcGxpY2UiLCJkcmF3U25vd2ZsYWtlcyIsInNub3dmbGFrZSIsIndlZWtzRGF0YSIsInN0YXJ0IiwiZW5kIiwiZ2V0QWN0aXZlV2VlayIsImN1cnJlbnREYXRlIiwiYWN0aXZlV2Vla0luZGV4IiwicGFyc2VJbnQiLCJhY3RpdmVXZWVrIiwiZ2FtZUxpc3RzIiwibGlzdCIsImN1cnJlbnRMaXN0IiwiYXV0b0FkZERhdGFCdXR0b25zIiwic2V0R2FtZUxpbmtzIiwiZ2FtZXNMaW5rcyIsImdhbWVMaW5rcyIsImdhbWVJZCIsIndlZWtNYXRjaCIsImNsYXNzTmFtZSIsIm1hdGNoIiwiaXRlbXMiLCJpdGVtIiwiZ2FtZU51bWJlciIsImJ1dHRvbk5hbWUiLCJsaW5rRWwiLCJjdXJyZW50QnV0dG9uIiwiaW5jbHVkZXMiLCJzZXRBdHRyaWJ1dGUiXSwibWFwcGluZ3MiOiI7OzsrQ0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7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QUFvQjtJQUNuQyxhQUFhLEVBQUUsb0JBQW9CO0lBQ25DLGFBQWEsRUFBRSxvQkFBb0I7SUFDbkMsYUFBYSxFQUFFLG9CQUFvQjtJQUNuQyxhQUFhLEVBQUUsb0JBQW9CO0lBQ25DLGFBQWEsRUFBRSxvQkFBb0I7SUFDbkMsYUFBYSxFQUFFLG9CQUFvQjtJQUNuQyxhQUFhLEVBQUUsb0JBQW9CO0lBQ25DLGNBQWMsRUFBRSxvQkFBb0I7SUFDcEM7SUFDQSxhQUFhLEVBQUUsb0JBQW9CO0lBQ25DLGFBQWEsRUFBRSxvQkFBb0I7SUFDbkMsYUFBYSxFQUFFLG9CQUFvQjtJQUNuQyxhQUFhLEVBQUUsb0JBQW9CO0lBQ25DLGFBQWEsRUFBRSxvQkFBb0I7SUFDbkMsYUFBYSxFQUFFLG9CQUFvQjtJQUNuQyxhQUFhLEVBQUUsb0JBQW9CO0lBQ25DLGFBQWEsRUFBRSxvQkFBb0I7SUFDbkMsYUFBYSxFQUFFLG9CQUFvQjtJQUNuQyxjQUFjLEVBQUUsb0JBQW9CO0lBQ3BDO0lBQ0EsYUFBYSxFQUFFLG9CQUFvQjtJQUNuQyxhQUFhLEVBQUUsb0JBQW9CO0lBQ25DLGFBQWEsRUFBRSxvQkFBb0I7SUFDbkMsYUFBYSxFQUFFLG9CQUFvQjtJQUNuQyxhQUFhLEVBQUUsb0JBQW9CO0lBQ25DLGFBQWEsRUFBRSxvQkFBb0I7SUFDbkMsYUFBYSxFQUFFLG9CQUFvQjtJQUNuQyxhQUFhLEVBQUUsb0JBQW9CO0lBQ25DLGFBQWEsRUFBRSxvQkFBb0I7SUFDbkMsY0FBYyxFQUFFLG9CQUFvQjtJQUNwQztJQUNBLGFBQWEsRUFBRSxvQkFBb0I7SUFDbkMsYUFBYSxFQUFFLG9CQUFvQjtJQUNuQyxhQUFhLEVBQUUsb0JBQW9CO0lBQ25DLGFBQWEsRUFBRSxvQkFBb0I7SUFDbkMsYUFBYSxFQUFFLG9CQUFvQjtJQUNuQyxhQUFhLEVBQUUsb0JBQW9CO0lBQ25DLGFBQWEsRUFBRSxvQkFBb0I7SUFDbkMsYUFBYSxFQUFFLG9CQUFvQjtJQUNuQyxhQUFhLEVBQUUsb0JBQW9CO0lBQ25DLGNBQWMsRUFBRTtFQUNwQixDQUFDOztFQUVEO0VBQ0EsU0FBU0QsWUFBWSxHQUFHO0lBQ3BCLElBQU1FLFNBQVMsR0FBR3paLFFBQVEsQ0FBQ2tELGdCQUFnQixDQUFDLGlDQUFpQyxDQUFDO0lBRTlFdVcsU0FBUyxDQUFDdFcsT0FBTyxDQUFDLFVBQUFyQyxJQUFJLEVBQUk7TUFDdEIsSUFBTTRZLE1BQU0sR0FBRzVZLElBQUksQ0FBQ3dGLFlBQVksQ0FBQyxjQUFjLENBQUM7TUFDaEQsSUFBSW9ULE1BQU0sSUFBSUYsVUFBVSxDQUFDRSxNQUFNLENBQUMsRUFBRTtRQUM5QjVZLElBQUksQ0FBQ2lCLElBQUksR0FBR3lYLFVBQVUsQ0FBQ0UsTUFBTSxDQUFDO01BQ2xDO0lBQ0osQ0FBQyxDQUFDO0VBQ047O0VBRUE7RUFDQSxTQUFTSixrQkFBa0IsR0FBRztJQUMxQixJQUFNSCxTQUFTLEdBQUduWixRQUFRLENBQUNrRCxnQkFBZ0IsQ0FBQyxjQUFjLENBQUM7SUFFM0RpVyxTQUFTLENBQUNoVyxPQUFPLENBQUMsVUFBQWlXLElBQUksRUFBSTtNQUN0QixJQUFNTyxTQUFTLEdBQUdQLElBQUksQ0FBQ1EsU0FBUyxDQUFDQyxLQUFLLENBQUMsWUFBWSxDQUFDO01BQ3BELElBQUksQ0FBQ0YsU0FBUyxFQUFFO01BRWhCLElBQU12UyxJQUFJLEdBQUd1UyxTQUFTLENBQUMsQ0FBQyxDQUFDO01BQ3pCLElBQU1HLEtBQUssR0FBR1YsSUFBSSxDQUFDbFcsZ0JBQWdCLENBQUMsY0FBYyxDQUFDO01BRW5ENFcsS0FBSyxDQUFDM1csT0FBTyxDQUFDLFVBQUM0VyxJQUFJLEVBQUVwUSxLQUFLLEVBQUs7UUFDM0IsSUFBTXFRLFVBQVUsR0FBR3JRLEtBQUssR0FBRyxDQUFDO1FBQzVCLElBQU1zUSxVQUFVLGlCQUFVN1MsSUFBSSxpQkFBTzRTLFVBQVUsQ0FBRTtRQUVqRCxJQUFNRSxNQUFNLEdBQUdILElBQUksQ0FBQzlaLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQztRQUN0RCxJQUFJaWEsTUFBTSxFQUFFO1VBQ1I7VUFDQSxJQUFNQyxhQUFhLEdBQUdELE1BQU0sQ0FBQzVULFlBQVksQ0FBQyxhQUFhLENBQUM7VUFDeEQsSUFBSSxDQUFDNlQsYUFBYSxJQUFJLENBQUNBLGFBQWEsQ0FBQ0MsUUFBUSxlQUFRaFQsSUFBSSxVQUFPLEVBQUU7WUFDOUQ4UyxNQUFNLENBQUNHLFlBQVksQ0FBQyxhQUFhLEVBQUVKLFVBQVUsQ0FBQztVQUNsRDtVQUNBO1VBQ0EsSUFBSSxDQUFDQyxNQUFNLENBQUM1VCxZQUFZLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFDcEM0VCxNQUFNLENBQUNHLFlBQVksQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLENBQUM7VUFDdkQ7UUFDSjtNQUNKLENBQUMsQ0FBQztJQUNOLENBQUMsQ0FBQztFQUNOO0FBR0osQ0FBQyxHQUFHIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xuXG4gICAgY29uc3QgYXBpVVJMID0gJ2h0dHBzOi8vZmF2LXByb20uY29tL2FwaV9ibGFja19wcml6ZSdcblxuICAgIGNvbnN0IG1haW5QYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mYXYtcGFnZVwiKSxcbiAgICAgICAgbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zcGlubmVyLW92ZXJsYXlcIiksXG4gICAgICAgIHJlc3VsdHNUYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFibGVcIiksXG4gICAgICAgIHJlc3VsdHNUYWJsZU90aGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YWJsZU90aGVyXCIpXG5cbiAgICBjb25zdCBockxlbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaHJMZW5nJyk7XG4gICAgY29uc3QgZW5MZW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VuTGVuZycpO1xuXG4gICAgbGV0IGxvY2FsZSA9IFwiaHJcIlxuICAgIC8vIGxldCBsb2NhbGUgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxlXCIpIHx8IFwiaHJcIlxuXG4gICAgaWYgKGhyTGVuZykgbG9jYWxlID0gJ2hyJztcbiAgICBpZiAoZW5MZW5nKSBsb2NhbGUgPSAnZW4nO1xuXG4gICAgbGV0IGRlYnVnID0gZmFsc2VcblxuICAgIGlmIChkZWJ1ZykgaGlkZUxvYWRlcigpXG5cbiAgICBsZXQgaTE4bkRhdGEgPSB7fTtcbiAgICBjb25zdCB0cmFuc2xhdGVTdGF0ZSA9IGZhbHNlO1xuICAgIGxldCB1c2VySWQgPSBudWxsO1xuICAgIC8vIGxldCB1c2VySWQgPSBOdW1iZXIoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKSkgPz8gbnVsbFxuXG4gICAgY29uc3QgcmVxdWVzdCA9IGZ1bmN0aW9uIChsaW5rLCBleHRyYU9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKGFwaVVSTCArIGxpbmssIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAuLi4oZXh0cmFPcHRpb25zIHx8IHt9KVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKCdBUEkgZXJyb3InKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdBUEkgcmVxdWVzdCBmYWlsZWQ6JywgZXJyKTtcblxuICAgICAgICAgICAgICAgIHJlcG9ydEVycm9yKGVycik7XG5cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmF2LXBhZ2UnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uaHJlZi5zdGFydHNXaXRoKFwiaHR0cHM6Ly93d3cuZmF2YmV0LmhyL1wiKSkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvcHJvbW9jaWplL3Byb21vY2lqYS9zdHViLyc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3Byb21vcy9wcm9tby9zdHViLyc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycik7XG4gICAgICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhpZGVMb2FkZXIoKXtcbiAgICAgICAgbG9hZGVyLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImF1dG9cIlxuICAgICAgICBtYWluUGFnZS5jbGFzc0xpc3QucmVtb3ZlKFwibG9hZGluZ1wiKVxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIGxldCBhdHRlbXB0cyA9IDA7XG4gICAgICAgIGNvbnN0IG1heEF0dGVtcHRzID0gMjA7XG4gICAgICAgIGNvbnN0IGF0dGVtcHRJbnRlcnZhbCA9IDUwO1xuXG4gICAgICAgIGZ1bmN0aW9uIHRyeURldGVjdFVzZXJJZCgpIHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuc3RvcmUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHdpbmRvdy5zdG9yZS5nZXRTdGF0ZSgpO1xuICAgICAgICAgICAgICAgIHVzZXJJZCA9IHN0YXRlLmF1dGguaXNBdXRob3JpemVkICYmIHN0YXRlLmF1dGguaWQgfHwgJyc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHdpbmRvdy5nX3VzZXJfaWQpIHtcbiAgICAgICAgICAgICAgICB1c2VySWQgPSB3aW5kb3cuZ191c2VyX2lkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcXVpY2tDaGVja0FuZFJlbmRlcigpIHtcbiAgICAgICAgICAgIGluaXRHYW1lc1dlZWsoKTtcbiAgICAgICAgICAgIGluaXRQcm9ncmVzc0JhcigpO1xuICAgICAgICAgICAgaW5pdFBhcnRpY2lwYXRlQ2FudmFzKCk7XG4gICAgICAgICAgICBpbml0U25vd2ZsYWtlc0NhbnZhcygpO1xuICAgICAgICAgICAgc2V0VGltZW91dChoaWRlTG9hZGVyLCAzMDApO1xuXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBpbml0UGFydGljaXBhdGVDYW52YXMpO1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJvcmllbnRhdGlvbmNoYW5nZVwiLCBpbml0UGFydGljaXBhdGVDYW52YXMpO1xuXG4gICAgICAgICAgICAvLyBGaXggZHJvcGRvd24gc2Nyb2xsIGlzc3VlIC0gcHJldmVudCBwYWdlIGZyb20gc2hpZnRpbmcgdXAgd2hlbiBvcGVuaW5nIGRyb3Bkb3duXG4gICAgICAgICAgICBjb25zdCBkcm9wZG93bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJvcGRvd24nKTtcbiAgICAgICAgICAgIGRyb3Bkb3ducy5mb3JFYWNoKChkcm9wZG93bikgPT4ge1xuICAgICAgICAgICAgICAgIGRyb3Bkb3duLmFkZEV2ZW50TGlzdGVuZXIoJ3RvZ2dsZScsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERyb3Bkb3duIGlzIG9wZW5pbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN1bW1hcnkgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJ3N1bW1hcnknKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdW1tYXJ5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gR2V0IHN1bW1hcnkgcG9zaXRpb24gcmVsYXRpdmUgdG8gdmlld3BvcnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdW1tYXJ5UmVjdCA9IHN1bW1hcnkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiBzdW1tYXJ5IGlzIG5lYXIgdGhlIHRvcCBvZiB2aWV3cG9ydCAod2l0aGluIDEwMHB4IGZyb20gdG9wKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdW1tYXJ5UmVjdC50b3AgPCAxMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIGhvdyBtdWNoIHRvIHNjcm9sbCB0byBrZWVwIHN1bW1hcnkgdmlzaWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50U2Nyb2xsWSA9IHdpbmRvdy5zY3JvbGxZIHx8IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0U2Nyb2xsWSA9IGN1cnJlbnRTY3JvbGxZICsgc3VtbWFyeVJlY3QudG9wIC0gMTIwOyAvLyAxMjBweCBvZmZzZXQgZnJvbSB0b3BcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBVc2UgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIGZvciBzbW9vdGggc2Nyb2xsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogTWF0aC5tYXgoMCwgdGFyZ2V0U2Nyb2xsWSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB3YWl0Rm9yVXNlcklkID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRyeURldGVjdFVzZXJJZCgpO1xuICAgICAgICAgICAgICAgIGlmICh1c2VySWQgfHwgYXR0ZW1wdHMgPj0gbWF4QXR0ZW1wdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgcXVpY2tDaGVja0FuZFJlbmRlcigpO1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhdHRlbXB0cysrO1xuICAgICAgICAgICAgfSwgYXR0ZW1wdEludGVydmFsKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXdhaXQgd2FpdEZvclVzZXJJZDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2FkVHJhbnNsYXRpb25zKCkge1xuICAgICAgICByZXR1cm4gcmVxdWVzdChgL25ldy10cmFuc2xhdGVzLyR7bG9jYWxlfWApXG4gICAgICAgICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgICAgICBpMThuRGF0YSA9IGpzb247XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlKCk7XG4gICAgICAgICAgICAgICAgLy8gY29uc3QgbXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChtdXRhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgbXV0YXRpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgLy8gICAgIHRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgICAgIC8vICAgICBtdXRhdGlvbk9ic2VydmVyLm9ic2VydmUodGFyZ2V0Tm9kZSwgeyBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgICAgICAgICAgLy8gbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGFyZGNvcmVUZW5uaXNcIiksIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIC8vICAgICBzdWJ0cmVlOiB0cnVlXG4gICAgICAgICAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlcG9ydEVycm9yKGVycikge1xuICAgICAgICBjb25zdCByZXBvcnREYXRhID0ge1xuICAgICAgICAgICAgb3JpZ2luOiB3aW5kb3cubG9jYXRpb24uaHJlZixcbiAgICAgICAgICAgIHVzZXJpZDogdXNlcklkLFxuICAgICAgICAgICAgZXJyb3JUZXh0OiBlcnI/LmVycm9yIHx8IGVycj8udGV4dCB8fCBlcnI/Lm1lc3NhZ2UgfHwgJ1Vua25vd24gZXJyb3InLFxuICAgICAgICAgICAgdHlwZTogZXJyPy5uYW1lIHx8ICdVbmtub3duRXJyb3InLFxuICAgICAgICAgICAgc3RhY2s6IGVycj8uc3RhY2sgfHwgJydcbiAgICAgICAgfTtcblxuICAgICAgICBmZXRjaCgnaHR0cHM6Ly9mYXYtcHJvbS5jb20vYXBpLWNtcy9yZXBvcnRzL2FkZCcsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXBvcnREYXRhKVxuICAgICAgICB9KS5jYXRjaChjb25zb2xlLndhcm4pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRyYW5zbGF0ZSgpIHtcbiAgICAgICAgY29uc3QgZWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10cmFuc2xhdGVdJylcbiAgICAgICAgaWYgKGVsZW1zICYmIGVsZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYodHJhbnNsYXRlU3RhdGUpe1xuICAgICAgICAgICAgICAgIGVsZW1zLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGVsZW0uZ2V0QXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgICAgICAgICAgICAgICAgICBlbGVtLmlubmVySFRNTCA9IGkxOG5EYXRhW2tleV0gfHwgJyotLS0tTkVFRCBUTyBCRSBUUkFOU0xBVEVELS0tLSogICBrZXk6ICAnICsga2V5O1xuICAgICAgICAgICAgICAgICAgICBpZiAoaTE4bkRhdGFba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0cmFuc2xhdGlvbiB3b3JrcyFcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobG9jYWxlID09PSAnZW4nKSB7XG4gICAgICAgICAgICBtYWluUGFnZS5jbGFzc0xpc3QuYWRkKCdlbicpO1xuICAgICAgICB9XG4gICAgICAgIHJlZnJlc2hMb2NhbGl6ZWRDbGFzcyhtYWluUGFnZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVmcmVzaExvY2FsaXplZENsYXNzKGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBsYW5nIG9mIFsnaHInLCAnZW4nXSkge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGxhbmcpO1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChsb2NhbGUpO1xuICAgIH1cblxuXG5cblxuICAgIGZ1bmN0aW9uIHJlbmRlclVzZXJzKHdlZWtOdW0sIHVzZXJEYXRhID0gW10pIHtcbiAgICAgICAgd2Vla051bSA9IE51bWJlcih3ZWVrTnVtKTtcbiAgICAgICAgY29uc3Qgd2Vla09iaiA9IHVzZXJEYXRhLmZpbmQodyA9PiB3LndlZWsgPT09IHdlZWtOdW0pO1xuICAgICAgICBpZiAoIXdlZWtPYmogfHwgIXdlZWtPYmouZGF0YSB8fCAhQXJyYXkuaXNBcnJheSh3ZWVrT2JqLmRhdGEudXNlcnMpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCfQndC10LLRltGA0L3QsCDRgdGC0YDRg9C60YLRg9GA0LAg0LTQsNC90LjRhScpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaXNTdGFnZUVuZGVkID0gd2Vla09iai5kYXRhLmlzU3RhZ2VFbmRlZFxuXG4gICAgICAgIHVzZXJEYXRhID0gd2Vla09iai5kYXRhLnVzZXJzO1xuXG4gICAgICAgIGNvbnN0IHdpbm5lckFkZGl0aW9uYWxQcml6ZSA9IHVzZXJEYXRhLmZpbmQodSA9PiB7XG4gICAgICAgICAgICBpZih1Lndpbm5lciA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cblxuICAgICAgICBjb25zdCBjdXJyZW50VXNlciA9IHVzZXJEYXRhLmZpbmQodXNlciA9PiB1c2VyLnVzZXJpZCA9PT0gdXNlcklkKTtcblxuICAgICAgICBpZih1c2VySWQgJiYgIWN1cnJlbnRVc2VyICYmIGlzVmVyaWZpZWRVc2VyKXtcbiAgICAgICAgICAgIHVzZXJEYXRhID0gWy4uLnVzZXJEYXRhLCB7dXNlcmlkOiB1c2VySWQsIHBvaW50czogMH1dXG4gICAgICAgIH1cbiAgICAgICAgcG9wdWxhdGVVc2Vyc1RhYmxlKHVzZXJEYXRhLCB1c2VySWQsIHdlZWtOdW0sIGN1cnJlbnRVc2VyLCBpc1ZlcmlmaWVkVXNlciwgaXNTdGFnZUVuZGVkLCB3aW5uZXJBZGRpdGlvbmFsUHJpemUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBvcHVsYXRlVXNlcnNUYWJsZSh1c2VycywgY3VycmVudFVzZXJJZCwgd2VlaywgY3VycmVudFVzZXIsIGlzVmVyaWZpZWRVc2VyLCBpc1N0YWdlRW5kZWQsIHdpbm5lckFkZGl0aW9uYWxQcml6ZSkge1xuICAgICAgICBpZiAoIXVzZXJzPy5sZW5ndGgpIHJldHVybjtcbiAgICAgICAgcmVzdWx0c1RhYmxlLmlubmVySFRNTCA9ICcnO1xuICAgICAgICByZXN1bHRzVGFibGVPdGhlci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgc2Vjb25kVGFibGVPdGhlci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgc2Vjb25kVGFibGUuaW5uZXJIVE1MID0gJyc7XG5cblxuICAgICAgICBjb25zdCBpc1RvcEN1cnJlbnRVc2VyID0gY3VycmVudFVzZXIgJiYgdXNlcnMuc2xpY2UoMCwgMTApLnNvbWUodXNlciA9PiB1c2VyLnVzZXJpZCA9PT0gY3VycmVudFVzZXJJZCk7XG5cbiAgICAgICAgY29uc3QgdG9wVXNlcnNMZW5ndGggPSAhdXNlcklkIHx8IGlzVG9wQ3VycmVudFVzZXIgID8gMTAgOiAxMDtcblxuICAgICAgICBjb25zdCB0b3BVc2VycyA9IHVzZXJzLnNsaWNlKDAsIHRvcFVzZXJzTGVuZ3RoKTtcblxuICAgICAgICB0b3BVc2Vycy5mb3JFYWNoKHVzZXIgPT4ge1xuICAgICAgICAgICAgZGlzcGxheVVzZXIodXNlciwgdXNlci51c2VyaWQgPT09IGN1cnJlbnRVc2VySWQsIHJlc3VsdHNUYWJsZSwgdG9wVXNlcnMsIGlzVG9wQ3VycmVudFVzZXIsIHdlZWspO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYoaXNWZXJpZmllZFVzZXIgJiYgIWN1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgICBkaXNwbGF5VXNlcihjdXJyZW50VXNlciwgdHJ1ZSwgcmVzdWx0c1RhYmxlT3RoZXIsIHVzZXJzLCBmYWxzZSwgd2Vlayk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWlzVG9wQ3VycmVudFVzZXIgJiYgY3VycmVudFVzZXIpIHtcbiAgICAgICAgICAgIGRpc3BsYXlVc2VyKGN1cnJlbnRVc2VyLCB0cnVlLCByZXN1bHRzVGFibGVPdGhlciwgdXNlcnMsIGZhbHNlLCB3ZWVrKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlVc2VyKHVzZXIsIGlzQ3VycmVudFVzZXIsIHRhYmxlLCB1c2VycywgaXNUb3BDdXJyZW50VXNlciwgd2Vlaykge1xuXG4gICAgICAgIGNvbnN0IHJlbmRlclJvdyA9ICh1c2VyRGF0YSwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IGhpZ2hsaWdodCA9IGZhbHNlLCBuZWlnaGJvciA9IGZhbHNlIH0gPSBvcHRpb25zO1xuICAgICAgICAgICAgY29uc3QgdXNlclJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKCd0YWJsZV9fcm93Jyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHVzZXJQbGFjZSA9IHVzZXJzLmluZGV4T2YodXNlckRhdGEpICsgMTtcbiAgICAgICAgICAgIGNvbnN0IHByaXplS2V5ID0gZGVidWcgPyBudWxsIDogZ2V0UHJpemVUcmFuc2xhdGlvbktleSh1c2VyUGxhY2UsIHdlZWspO1xuXG4gICAgICAgICAgICBpZiAodXNlclBsYWNlIDw9IDMpIHtcbiAgICAgICAgICAgICAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoYHBsYWNlJHt1c2VyUGxhY2V9YCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChoaWdobGlnaHQgfHwgaXNDdXJyZW50VXNlciAmJiAhbmVpZ2hib3IpIHtcbiAgICAgICAgICAgICAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoJ3lvdScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChuZWlnaGJvcikge1xuICAgICAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZCgnX25laWdoYm9yJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHVzZXJSb3cuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuICAgICAgICAgICAgICAgICR7dXNlclBsYWNlIDwgMTAgPyAnMCcgKyB1c2VyUGxhY2UgOiB1c2VyUGxhY2V9XG4gICAgICAgICAgICAgICAgJHtpc0N1cnJlbnRVc2VyICYmICFuZWlnaGJvciA/ICc8c3BhbiBjbGFzcz1cInlvdVwiPicgKyB0cmFuc2xhdGVLZXkoXCJ5b3VcIikgKyAnPC9zcGFuPicgOiAnJ31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuICAgICAgICAgICAgICAgICR7aXNDdXJyZW50VXNlciAmJiAhbmVpZ2hib3IgPyB1c2VyRGF0YS51c2VyaWQgOiBtYXNrVXNlcklkKHVzZXJEYXRhLnVzZXJpZCl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke051bWJlcih1c2VyRGF0YS5wb2ludHMpLnRvRml4ZWQoMil9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke3ByaXplS2V5ID8gdHJhbnNsYXRlS2V5KHByaXplS2V5KSA6ICcgLSAnfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG5cbiAgICAgICAgICAgIHRhYmxlLmFwcGVuZCh1c2VyUm93KTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGlzQ3VycmVudFVzZXIgJiYgIWlzVG9wQ3VycmVudFVzZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdXNlcnMuaW5kZXhPZih1c2VyKTtcbiAgICAgICAgICAgIGlmICh1c2Vyc1tpbmRleCAtIDFdKSB7XG4gICAgICAgICAgICAgICAgcmVuZGVyUm93KHVzZXJzW2luZGV4IC0gMV0sIHsgbmVpZ2hib3I6IHRydWUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZW5kZXJSb3codXNlciwgeyBoaWdobGlnaHQ6IHRydWUgfSk7XG4gICAgICAgICAgICBpZiAodXNlcnNbaW5kZXggKyAxXSkge1xuICAgICAgICAgICAgICAgIHJlbmRlclJvdyh1c2Vyc1tpbmRleCArIDFdLCB7IG5laWdoYm9yOiB0cnVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVuZGVyUm93KHVzZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdFByb2dyZXNzQmFyKCkge1xuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvZ3Jlc3NCYXJDYW52YXMnKTtcbiAgICAgICAgY29uc3QgcGVyY2VudEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvZ3Jlc3NQZXJjZW50Jyk7XG4gICAgICAgIGlmICghY2FudmFzIHx8ICFwZXJjZW50RWxlbWVudCkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICBcbiAgICAgICAgLy8g0JrQvtC90YHRgtCw0L3RgtC4XG4gICAgICAgIGNvbnN0IGJhckhlaWdodCA9IDIwOyAvLyDQktC40YHQvtGC0LAg0L/RgNC+0LPRgNC10YEt0LHQsNGA0YNcbiAgICAgICAgY29uc3Qgc2VnbWVudFdpZHRoID0gNDsgLy8g0KjQuNGA0LjQvdCwINC+0LTQvdC+0LPQviDRgdC10LPQvNC10L3RgtCwXG4gICAgICAgIGNvbnN0IHNlZ21lbnRIZWlnaHQgPSAxNDsgLy8g0JLQuNGB0L7RgtCwINC+0LTQvdC+0LPQviDRgdC10LPQvNC10L3RgtCwXG4gICAgICAgIGNvbnN0IHNlZ21lbnRHYXAgPSAyOyAvLyDQn9GA0L7QvNGW0LbQvtC6INC80ZbQtiDRgdC10LPQvNC10L3RgtCw0LzQuFxuICAgICAgICBjb25zdCBwYWRkaW5nID0gMjsgLy8g0JLRltC00YHRgtGD0L8g0LLRltC0INC60YDQsNGX0LJcbiAgICAgICAgY29uc3Qgc2VnbWVudFJhZGl1cyA9IDE7IC8vIEJvcmRlciByYWRpdXMg0LTQu9GPINGB0LXQs9C80LXQvdGC0ZbQslxuICAgICAgICBcbiAgICAgICAgLy8g0J/QsNGA0LDQvNC10YLRgNC4INCw0L3RltC80LDRhtGW0Zcg0LfQsNCy0LDQvdGC0LDQttC10L3QvdGPXG4gICAgICAgIGxldCBjdXJyZW50UHJvZ3Jlc3MgPSAxOyAvLyDQn9C+0YfQuNC90LDRlNC80L4g0LcgMSVcbiAgICAgICAgY29uc3QgdGFyZ2V0UHJvZ3Jlc3MgPSAxMDA7IC8vINCm0ZbQu9GM0L7QstC40Lkg0L/RgNC+0LPRgNC10YFcbiAgICAgICAgY29uc3QgbG9hZGluZ0R1cmF0aW9uID0gMzAwMDsgLy8g0KLRgNC40LLQsNC70ZbRgdGC0Ywg0LfQsNCy0LDQvdGC0LDQttC10L3QvdGPOiAzINGB0LXQutGD0L3QtNC4XG4gICAgICAgIGxldCBzdGFydFRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICBsZXQgYW5pbWF0aW9uSWQgPSBudWxsO1xuICAgICAgICBsZXQgbWF4U2VnbWVudHMgPSAwO1xuICAgICAgICBsZXQgaXNMb2FkaW5nQ29tcGxldGUgPSBmYWxzZTtcbiAgICAgICAgXG4gICAgICAgIGZ1bmN0aW9uIHJlc2l6ZUNhbnZhcygpIHtcbiAgICAgICAgICAgIC8vINCe0YLRgNC40LzRg9GU0LzQviDRgNC+0LfQvNGW0YDQuCDQutC+0L3RgtC10LnQvdC10YDQsFxuICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gY2FudmFzLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICBjb25zdCBjb250YWluZXJXaWR0aCA9IGNvbnRhaW5lci5vZmZzZXRXaWR0aCB8fCA3Njg7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCS0YHRgtCw0L3QvtCy0LvRjtGU0LzQviDRgNC+0LfQvNGW0YDQuCBjYW52YXNcbiAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IGNvbnRhaW5lcldpZHRoO1xuICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IGJhckhlaWdodDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0KDQvtC30YDQsNGF0L7QstGD0ZTQvNC+INC60ZbQu9GM0LrRltGB0YLRjCDRgdC10LPQvNC10L3RgtGW0LIsINGJ0L4g0L/QvtC80ZbRgdGC0Y/RgtGM0YHRj1xuICAgICAgICAgICAgY29uc3QgYXZhaWxhYmxlV2lkdGggPSBjb250YWluZXJXaWR0aCAtIChwYWRkaW5nICogMik7XG4gICAgICAgICAgICBjb25zdCBzZWdtZW50V2l0aEdhcCA9IHNlZ21lbnRXaWR0aCArIHNlZ21lbnRHYXA7XG4gICAgICAgICAgICBtYXhTZWdtZW50cyA9IE1hdGguZmxvb3IoYXZhaWxhYmxlV2lkdGggLyBzZWdtZW50V2l0aEdhcCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCf0LXRgNC10LzQsNC70YzQvtCy0YPRlNC80L4g0Lcg0L/QvtGC0L7Rh9C90LjQvCDQv9GA0L7Qs9GA0LXRgdC+0LxcbiAgICAgICAgICAgIGlmIChjdXJyZW50UHJvZ3Jlc3MgPiAwKSB7XG4gICAgICAgICAgICAgICAgZHJhd1Byb2dyZXNzQmFyKGN1cnJlbnRQcm9ncmVzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGZ1bmN0aW9uIGRyYXdQcm9ncmVzc0Jhcihwcm9ncmVzcykge1xuICAgICAgICAgICAgLy8g0J7Rh9C40YnQsNGU0LzQviBjYW52YXNcbiAgICAgICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0JzQsNC70Y7RlNC80L4g0YDQsNC80LrRgyAo0LHRltC70LjQuSDQv9GA0Y/QvNC+0LrRg9GC0L3QuNC6KVxuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJyNGRkZGRkYnO1xuICAgICAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDE7XG4gICAgICAgICAgICBjdHguc3Ryb2tlUmVjdCgwLjUsIDAuNSwgY2FudmFzLndpZHRoIC0gMSwgY2FudmFzLmhlaWdodCAtIDEpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQoNC+0LfRgNCw0YXQvtCy0YPRlNC80L4g0LrRltC70YzQutGW0YHRgtGMINC30LDQv9C+0LLQvdC10L3QuNGFINGB0LXQs9C80LXQvdGC0ZbQslxuICAgICAgICAgICAgY29uc3QgZmlsbGVkU2VnbWVudHMgPSBNYXRoLmZsb29yKChwcm9ncmVzcyAvIDEwMCkgKiBtYXhTZWdtZW50cyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCc0LDQu9GO0ZTQvNC+INC30LDQv9C+0LLQvdC10L3RliDRgdC10LPQvNC10L3RgtC4INC3INC30LDQvtC60YDRg9Cz0LvQtdC90LjQvNC4INC60YPRgtCw0LzQuFxuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICcjRkZGRkZGJztcbiAgICAgICAgICAgIGNvbnN0IGNlbnRlclkgPSAoYmFySGVpZ2h0IC0gc2VnbWVudEhlaWdodCkgLyAyOyAvLyDQktC10YDRgtC40LrQsNC70YzQvdC1INGG0LXQvdGC0YDRg9Cy0LDQvdC90Y9cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWxsZWRTZWdtZW50czsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeCA9IHBhZGRpbmcgKyBpICogKHNlZ21lbnRXaWR0aCArIHNlZ21lbnRHYXApO1xuICAgICAgICAgICAgICAgIGNvbnN0IHkgPSBjZW50ZXJZO1xuXG4gICAgICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIGlmIChjdHgucm91bmRSZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vINCh0YPRh9Cw0YHQvdC40Lkg0LzQtdGC0L7QtCAo0L/RltC00YLRgNC40LzRg9GU0YLRjNGB0Y8g0LIg0L3QvtCy0LjRhSDQsdGA0LDRg9C30LXRgNCw0YUpXG4gICAgICAgICAgICAgICAgICAgIGN0eC5yb3VuZFJlY3QoeCwgeSwgc2VnbWVudFdpZHRoLCBzZWdtZW50SGVpZ2h0LCBzZWdtZW50UmFkaXVzKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBGYWxsYmFjayDQtNC70Y8g0YHRgtCw0YDQuNGFINCx0YDQsNGD0LfQtdGA0ZbQslxuICAgICAgICAgICAgICAgICAgICBjb25zdCByID0gc2VnbWVudFJhZGl1cztcbiAgICAgICAgICAgICAgICAgICAgY3R4Lm1vdmVUbyh4ICsgciwgeSk7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5saW5lVG8oeCArIHNlZ21lbnRXaWR0aCAtIHIsIHkpO1xuICAgICAgICAgICAgICAgICAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4ICsgc2VnbWVudFdpZHRoLCB5LCB4ICsgc2VnbWVudFdpZHRoLCB5ICsgcik7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5saW5lVG8oeCArIHNlZ21lbnRXaWR0aCwgeSArIHNlZ21lbnRIZWlnaHQgLSByKTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCArIHNlZ21lbnRXaWR0aCwgeSArIHNlZ21lbnRIZWlnaHQsIHggKyBzZWdtZW50V2lkdGggLSByLCB5ICsgc2VnbWVudEhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5saW5lVG8oeCArIHIsIHkgKyBzZWdtZW50SGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCwgeSArIHNlZ21lbnRIZWlnaHQsIHgsIHkgKyBzZWdtZW50SGVpZ2h0IC0gcik7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5saW5lVG8oeCwgeSArIHIpO1xuICAgICAgICAgICAgICAgICAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4LCB5LCB4ICsgciwgeSk7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlUHJvZ3Jlc3MoKSB7XG4gICAgICAgICAgICBjb25zdCBlbGFwc2VkID0gRGF0ZS5ub3coKSAtIHN0YXJ0VGltZTtcbiAgICAgICAgICAgIGxldCBwcm9ncmVzcyA9IDEgKyAoZWxhcHNlZCAvIGxvYWRpbmdEdXJhdGlvbikgKiA5OTsgLy8g0JLRltC0IDElINC00L4gMTAwJVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQntCx0LzQtdC20YPRlNC80L4g0L/RgNC+0LPRgNC10YEg0LTQviAxMDAlXG4gICAgICAgICAgICBpZiAocHJvZ3Jlc3MgPj0gdGFyZ2V0UHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgICAgICBwcm9ncmVzcyA9IHRhcmdldFByb2dyZXNzO1xuICAgICAgICAgICAgICAgIGlzTG9hZGluZ0NvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY3VycmVudFByb2dyZXNzID0gcHJvZ3Jlc3M7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCe0L3QvtCy0LvRjtGU0LzQviDQstGW0LTQvtCx0YDQsNC20LXQvdC90Y9cbiAgICAgICAgICAgIGRyYXdQcm9ncmVzc0Jhcihwcm9ncmVzcyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCe0L3QvtCy0LvRjtGU0LzQviDQstGW0LTRgdC+0YLQutC4ICjRgtGW0LvRjNC60Lgg0YbRltC70ZYg0YfQuNGB0LvQsClcbiAgICAgICAgICAgIGNvbnN0IHBlcmNlbnQgPSBNYXRoLmZsb29yKHByb2dyZXNzKTtcbiAgICAgICAgICAgIHBlcmNlbnRFbGVtZW50LnRleHRDb250ZW50ID0gcGVyY2VudCArICclJztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0J/RgNC+0LTQvtCy0LbRg9GU0LzQviDQsNC90ZbQvNCw0YbRltGOINC00L4g0LfQsNCy0LXRgNGI0LXQvdC90Y8g0LfQsNCy0LDQvdGC0LDQttC10L3QvdGPXG4gICAgICAgICAgICBpZiAoIWlzTG9hZGluZ0NvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlUHJvZ3Jlc3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyDQhtC90ZbRhtGW0LDQu9GW0LfRg9GU0LzQviDRgNC+0LfQvNGW0YDQuCBjYW52YXNcbiAgICAgICAgcmVzaXplQ2FudmFzKCk7XG4gICAgICAgIFxuICAgICAgICAvLyDQntCx0YDQvtCx0LrQsCDQt9C80ZbQvdC4INGA0L7Qt9C80ZbRgNGDINCy0ZbQutC90LBcbiAgICAgICAgbGV0IHJlc2l6ZVRpbWVvdXQ7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQocmVzaXplVGltZW91dCk7XG4gICAgICAgICAgICByZXNpemVUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzaXplQ2FudmFzKCk7XG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIC8vINCG0L3RltGG0ZbQsNC70ZbQt9Cw0YbRltGPINCw0L3RltC80LDRhtGW0Zcg0L/QvtGP0LLQuCDRltC60L7QvdC+0LpcbiAgICAgICAgaW5pdEljb25zQW5pbWF0aW9uKGxvYWRpbmdEdXJhdGlvbik7XG4gICAgICAgIFxuICAgICAgICAvLyDQl9Cw0L/Rg9GB0LrQsNGU0LzQviDQsNC90ZbQvNCw0YbRltGOINC3INC90LXQstC10LvQuNC60L7RjiDQt9Cw0YLRgNC40LzQutC+0Y4g0LTQu9GPINC60L7RgNC10LrRgtC90L7Qs9C+INGA0L7Qt9GA0LDRhdGD0L3QutGDINGA0L7Qt9C80ZbRgNGW0LJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzaXplQ2FudmFzKCk7XG4gICAgICAgICAgICAgICAgc3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVQcm9ncmVzcygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vINCQ0L3RltC80LDRhtGW0Y8g0L/QvtGP0LLQuCDRltC60L7QvdC+0Log0L/QviDRh9C10YDQt9GWINC/0ZbQtCDRh9Cw0YEg0LfQsNCy0LDQvdGC0LDQttC10L3QvdGPXG4gICAgZnVuY3Rpb24gaW5pdEljb25zQW5pbWF0aW9uKGR1cmF0aW9uKSB7XG4gICAgICAgIGNvbnN0IGljb25zID0gW1xuICAgICAgICAgICAgJy53ZWxjb21lX19kZWNvci1pdGVtLl9nYW1lcGFkJyxcbiAgICAgICAgICAgICcud2VsY29tZV9fZGVjb3ItaXRlbS5fY2hpcCcsXG4gICAgICAgICAgICAnLndlbGNvbWVfX2RlY29yLWl0ZW0uX2NvaW4nLFxuICAgICAgICAgICAgJy53ZWxjb21lX19kZWNvci1pdGVtLl9iYWxsJyxcbiAgICAgICAgICAgICcud2VsY29tZV9fZGVjb3ItaXRlbS5fY3VwJyxcbiAgICAgICAgICAgICcud2VsY29tZV9fZGVjb3ItaXRlbS5fY3ViZScsXG4gICAgICAgICAgICAnLndlbGNvbWVfX2RlY29yLWl0ZW0uX2dsb2JlJ1xuICAgICAgICBdO1xuXG4gICAgICAgIC8vINCX0LHQtdGA0ZbQs9Cw0ZTQvNC+INC+0YDQuNCz0ZbQvdCw0LvRjNC90ZYgdHJhbnNmb3JtINC00LvRjyDQutC+0LbQvdC+0Zcg0ZbQutC+0L3QutC4XG4gICAgICAgIGNvbnN0IG9yaWdpbmFsVHJhbnNmb3JtcyA9IG5ldyBNYXAoKTtcblxuICAgICAgICAvLyDQodC/0L7Rh9Cw0YLQutGDINC/0YDQuNGF0L7QstGD0ZTQvNC+INCy0YHRliDRltC60L7QvdC60LhcbiAgICAgICAgaWNvbnMuZm9yRWFjaChzZWxlY3RvciA9PiB7XG4gICAgICAgICAgICBjb25zdCBpY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgICAgICAgICBpZiAoaWNvbikge1xuICAgICAgICAgICAgICAgIC8vINCX0LHQtdGA0ZbQs9Cw0ZTQvNC+INC+0YDQuNCz0ZbQvdCw0LvRjNC90LjQuSB0cmFuc2Zvcm0gKNGP0LrRidC+INGUIHJvdGF0ZSlcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wdXRlZFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoaWNvbik7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxUcmFuc2Zvcm0gPSBjb21wdXRlZFN0eWxlLnRyYW5zZm9ybTtcbiAgICAgICAgICAgICAgICBvcmlnaW5hbFRyYW5zZm9ybXMuc2V0KHNlbGVjdG9yLCBvcmlnaW5hbFRyYW5zZm9ybSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8g0JLRgdGC0LDQvdC+0LLQu9GO0ZTQvNC+INC/0L7Rh9Cw0YLQutC+0LLQuNC5INGB0YLQsNC9XG4gICAgICAgICAgICAgICAgaWNvbi5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgICAgICAgICAgICAgIGljb24uc3R5bGUudHJhbnNpdGlvbiA9ICdvcGFjaXR5IDAuNHMgZWFzZSwgdHJhbnNmb3JtIDAuNHMgZWFzZSc7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8g0JLRgdGC0LDQvdC+0LLQu9GO0ZTQvNC+IHNjYWxlINC3INC30LHQtdGA0LXQttC10L3QvdGP0Lwgcm90YXRlXG4gICAgICAgICAgICAgICAgaWYgKG9yaWdpbmFsVHJhbnNmb3JtICYmIG9yaWdpbmFsVHJhbnNmb3JtICE9PSAnbm9uZScpIHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbi5zdHlsZS50cmFuc2Zvcm0gPSBvcmlnaW5hbFRyYW5zZm9ybSArICcgc2NhbGUoMC41KSc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbi5zdHlsZS50cmFuc2Zvcm0gPSAnc2NhbGUoMC41KSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyDQoNC+0LfRgNCw0YXQvtCy0YPRlNC80L4g0ZbQvdGC0LXRgNCy0LDQuyDQvNGW0LYg0L/QvtGP0LLQvtGOINGW0LrQvtC90L7QulxuICAgICAgICBjb25zdCBpY29uQ291bnQgPSBpY29ucy5sZW5ndGg7XG4gICAgICAgIGNvbnN0IGludGVydmFsID0gZHVyYXRpb24gLyBpY29uQ291bnQ7IC8vINCg0ZbQstC90L7QvNGW0YDQvdC+INGA0L7Qt9C/0L7QtNGW0LvRj9GU0LzQviDQv9C+INGH0LDRgdGDXG5cbiAgICAgICAgLy8g0J/QvtC60LDQt9GD0ZTQvNC+INGW0LrQvtC90LrQuCDQv9C+INGH0LXRgNC30ZZcbiAgICAgICAgaWNvbnMuZm9yRWFjaCgoc2VsZWN0b3IsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgICAgICAgICAgICAgaWYgKGljb24pIHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbi5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICAgICAgICAgICAgICAvLyDQktGW0LTQvdC+0LLQu9GO0ZTQvNC+INC+0YDQuNCz0ZbQvdCw0LvRjNC90LjQuSB0cmFuc2Zvcm1cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxUcmFuc2Zvcm0gPSBvcmlnaW5hbFRyYW5zZm9ybXMuZ2V0KHNlbGVjdG9yKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9yaWdpbmFsVHJhbnNmb3JtICYmIG9yaWdpbmFsVHJhbnNmb3JtICE9PSAnbm9uZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb24uc3R5bGUudHJhbnNmb3JtID0gb3JpZ2luYWxUcmFuc2Zvcm07XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uLnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZSgxKSc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBpbmRleCAqIGludGVydmFsKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8g0JfQvNGW0L3QvdGWINC00LvRjyDQt9Cx0LXRgNGW0LPQsNC90L3RjyDQv9C+0YHQuNC70LDQvdGMINC90LAgY2FudmFzINGC0LAg0LTQsNC90ZYg0LTQu9GPINC+0LHRgNC+0LHQvdC40LrRltCyINC/0L7QtNGW0LlcbiAgICBsZXQgcGFydGljaXBhdGVDYW52YXMgPSBudWxsO1xuICAgIGxldCBwYXJ0aWNpcGF0ZURlZXJzID0gW107XG4gICAgbGV0IHBhcnRpY2lwYXRlRGVlcldpZHRoID0gMDtcbiAgICBsZXQgcGFydGljaXBhdGVEZWVySGVpZ2h0ID0gMDtcbiAgICBsZXQgY2FudmFzQ2xpY2tIYW5kbGVyc0F0dGFjaGVkID0gZmFsc2U7XG5cbiAgICAvLyDQntCx0YDQvtCx0L3QuNC6INC60LvRltC60YMv0YLQsNC/0YMg0L/QviBjYW52YXMgKNCy0LjQvdC10YHQtdC90L4g0LfQsCDQvNC10LbRliBpbml0UGFydGljaXBhdGVDYW52YXMpXG4gICAgZnVuY3Rpb24gaGFuZGxlUGFydGljaXBhdGVDYW52YXNDbGljayhldmVudCkge1xuICAgICAgICBpZiAoIXBhcnRpY2lwYXRlQ2FudmFzIHx8ICFwYXJ0aWNpcGF0ZURlZXJzLmxlbmd0aCkgcmV0dXJuO1xuICAgICAgICBcbiAgICAgICAgLy8g0JTQu9GPIHRvdWNoINC/0L7QtNGW0Lkg0LfQsNC/0L7QsdGW0LPQsNGU0LzQviDRgdGC0LDQvdC00LDRgNGC0L3RltC5INC/0L7QstC10LTRltC90YbRllxuICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ3RvdWNoc3RhcnQnKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb25zdCByZWN0ID0gcGFydGljaXBhdGVDYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IHNjYWxlWCA9IHBhcnRpY2lwYXRlQ2FudmFzLndpZHRoIC8gcmVjdC53aWR0aDtcbiAgICAgICAgY29uc3Qgc2NhbGVZID0gcGFydGljaXBhdGVDYW52YXMuaGVpZ2h0IC8gcmVjdC5oZWlnaHQ7XG4gICAgICAgIFxuICAgICAgICAvLyDQntGC0YDQuNC80YPRlNC80L4g0LrQvtC+0YDQtNC40L3QsNGC0Lgg0LrQu9GW0LrRgyDQstGW0LTQvdC+0YHQvdC+IGNhbnZhc1xuICAgICAgICBjb25zdCBjbGllbnRYID0gZXZlbnQuY2xpZW50WCB8fCAoZXZlbnQudG91Y2hlcyAmJiBldmVudC50b3VjaGVzWzBdID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYIDogMCk7XG4gICAgICAgIGNvbnN0IGNsaWVudFkgPSBldmVudC5jbGllbnRZIHx8IChldmVudC50b3VjaGVzICYmIGV2ZW50LnRvdWNoZXNbMF0gPyBldmVudC50b3VjaGVzWzBdLmNsaWVudFkgOiAwKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGNsaWNrWCA9IChjbGllbnRYIC0gcmVjdC5sZWZ0KSAqIHNjYWxlWDtcbiAgICAgICAgY29uc3QgY2xpY2tZID0gKGNsaWVudFkgLSByZWN0LnRvcCkgKiBzY2FsZVk7XG4gICAgICAgIFxuICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNGP0ZTQvNC+INGH0Lgg0LrQu9GW0Log0L/QvtGC0YDQsNC/0LjQsiDQvdCwINGP0LrQvtCz0L7RgdGMINC+0LvQtdC90Y9cbiAgICAgICAgcGFydGljaXBhdGVEZWVycy5mb3JFYWNoKGRlZXIgPT4ge1xuICAgICAgICAgICAgaWYgKGRlZXIuaXNQb2ludEluc2lkZShjbGlja1gsIGNsaWNrWSwgcGFydGljaXBhdGVEZWVyV2lkdGgsIHBhcnRpY2lwYXRlRGVlckhlaWdodCkpIHtcbiAgICAgICAgICAgICAgICBkZWVyLmhhbmRsZUNsaWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluaXRQYXJ0aWNpcGF0ZUNhbnZhcygpIHtcbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BhcnRpY2lwYXRlQ2FudmFzJyk7XG4gICAgICAgIGlmICghY2FudmFzKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIFxuICAgICAgICAvLyDQntC90L7QstC70Y7RlNC80L4g0L/QvtGB0LjQu9Cw0L3QvdGPINC90LAgY2FudmFzXG4gICAgICAgIHBhcnRpY2lwYXRlQ2FudmFzID0gY2FudmFzO1xuICAgICAgICBcbiAgICAgICAgLy8g0JLQuNC30L3QsNGH0LDRlNC80L4g0YfQuCDQtdC60YDQsNC9IDw9IDEwNTBweFxuICAgICAgICBjb25zdCBpc01vYmlsZSA9IHdpbmRvdy5pbm5lcldpZHRoIDw9IDEwNTA7XG4gICAgICAgIFxuICAgICAgICAvLyDQmtC+0L3RgdGC0LDQvdGC0Lgg0LTQu9GPINGA0L7Qt9C80ZbRgNGW0LIg0YLQsCDQv9C+0LfQuNGG0ZbQuVxuICAgICAgICBjb25zdCBDQU5WQVNfV0lEVEggPSBpc01vYmlsZSA/IDc2OCA6IDEzNjY7XG4gICAgICAgIGNvbnN0IENBTlZBU19IRUlHSFQgPSBpc01vYmlsZSA/IDQ3MCA6IDUwMDtcbiAgICAgICAgXG4gICAgICAgIC8vINCS0YHRgtCw0L3QvtCy0LvRjtGU0LzQviDRgNC+0LfQvNGW0YDQuCBjYW52YXNcbiAgICAgICAgY2FudmFzLndpZHRoID0gQ0FOVkFTX1dJRFRIO1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gQ0FOVkFTX0hFSUdIVDtcbiAgICAgICAgXG4gICAgICAgIC8vINCk0ZbQutGB0L7QstCw0L3RliDRgNC+0LfQvNGW0YDQuCDQtNC10YDQtdCy0LAgKNC90LUg0LzQsNGB0YjRgtCw0LHRg9GO0YLRjNGB0Y8pXG4gICAgICAgIGNvbnN0IFRSRUVfV0lEVEggPSAxNzU7XG4gICAgICAgIGNvbnN0IFRSRUVfSEVJR0hUID0gMTY3O1xuICAgICAgICBcbiAgICAgICAgLy8g0J/QsNGA0LDQvNC10YLRgNC4INGB0L/RgNCw0LnRgi3Qu9C40YHRgtCwXG4gICAgICAgIGNvbnN0IEZSQU1FU19QRVJfUk9XID0gNTsgLy8gNSDQutCw0LTRgNGW0LIg0LIg0YDRj9C00LrRg1xuICAgICAgICBjb25zdCBUT1RBTF9ST1dTID0gMjsgLy8gMiDRgNGP0LTQuFxuICAgICAgICBjb25zdCBTUFJJVEVfU0hFRVRfV0lEVEggPSAxMTAwOyAvLyDQoNC10LDQu9GM0L3QsCDRiNC40YDQuNC90LAg0YHQv9GA0LDQudGCLdC70LjRgdGC0LBcbiAgICAgICAgY29uc3QgU1BSSVRFX1NIRUVUX0hFSUdIVCA9IDQ2ODsgLy8g0KDQtdCw0LvRjNC90LAg0LLQuNGB0L7RgtCwINGB0L/RgNCw0LnRgi3Qu9C40YHRgtCwXG4gICAgICAgIFxuICAgICAgICAvLyDQoNC+0LfQvNGW0YDQuCDQvtC00L3QvtCz0L4g0LrQsNC00YDRgyDQsiDRgdC/0YDQsNC50YIt0LvQuNGB0YLRllxuICAgICAgICBjb25zdCBGUkFNRV9XSURUSCA9IE1hdGguZmxvb3IoU1BSSVRFX1NIRUVUX1dJRFRIIC8gRlJBTUVTX1BFUl9ST1cpOyAvLyAyMjBweFxuICAgICAgICBjb25zdCBGUkFNRV9IRUlHSFQgPSBNYXRoLmZsb29yKFNQUklURV9TSEVFVF9IRUlHSFQgLyBUT1RBTF9ST1dTKTsgLy8gMjM0cHhcbiAgICAgICAgXG4gICAgICAgIC8vINCk0ZbQutGB0L7QstCw0L3RliDRgNC+0LfQvNGW0YDQuCDQvtC70LXQvdGPINC90LAgY2FudmFzICjQvdC1INC80LDRgdGI0YLQsNCx0YPRjtGC0YzRgdGPKVxuICAgICAgICBjb25zdCBERUVSX1NDQUxFID0gMC41OyAvLyDQnNCw0YHRiNGC0LDQsSDQtNC70Y8g0LLRltC00L7QsdGA0LDQttC10L3QvdGPINC90LAgY2FudmFzXG4gICAgICAgIGNvbnN0IERFRVJfV0lEVEggPSBNYXRoLmZsb29yKEZSQU1FX1dJRFRIICogREVFUl9TQ0FMRSk7IFxuICAgICAgICBjb25zdCBERUVSX0hFSUdIVCA9IE1hdGguZmxvb3IoRlJBTUVfSEVJR0hUICogREVFUl9TQ0FMRSk7XG5cbiAgICAgICAgLy8g0J/QvtC30LjRhtGW0Zcg0LXQu9C10LzQtdC90YLRltCyXG4gICAgICAgIGxldCB0cmVlWCwgdHJlZVk7XG4gICAgICAgIGlmIChpc01vYmlsZSkge1xuICAgICAgICAgICAgdHJlZVggPSAyMzU7XG4gICAgICAgICAgICB0cmVlWSA9IENBTlZBU19IRUlHSFQgLSAxNTIgLSBUUkVFX0hFSUdIVDsgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyDQlNC10YHQutGC0L7Qv9C90LAg0LLQtdGA0YHRltGPXG4gICAgICAgICAgICB0cmVlWCA9IENBTlZBU19XSURUSCAvIDIgLSAzMDA7IFxuICAgICAgICAgICAgdHJlZVkgPSBDQU5WQVNfSEVJR0hUIC8gMiAtIFRSRUVfSEVJR0hUIC8gMjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8g0J/QsNGA0LDQvNC10YLRgNC4INCw0L3RltC80LDRhtGW0ZcgKNGB0L/RltC70YzQvdGWINC00LvRjyDQstGB0ZbRhSDQvtC70LXQvdGW0LIpXG4gICAgICAgIGNvbnN0IEZSQU1FX0RFTEFZID0gMTI7IC8vINCX0LDRgtGA0LjQvNC60LAg0LzRltC2INC60LDQtNGA0LDQvNC4XG4gICAgICAgIGNvbnN0IFdBTEtJTkdfRlJBTUVTID0gNTsgLy8g0JrRltC70YzQutGW0YHRgtGMINC60LDQtNGA0ZbQsiDQtNC70Y8g0YXQvtC00YzQsdC4XG4gICAgICAgIGNvbnN0IEZSQU1FX1JFUEVBVCA9IDI7IC8vINCa0ZbQu9GM0LrRltGB0YLRjCDRgNCw0LfRltCyINC/0L7QutCw0LfRg9Cy0LDRgtC4INC60L7QttC10L0g0LrQsNC00YBcbiAgICAgICAgY29uc3QgSURMRV9NSU5fRFVSQVRJT04gPSA2MDsgLy8g0JzRltC90ZbQvNCw0LvRjNC90LAg0YLRgNC40LLQsNC70ZbRgdGC0Ywg0LfRg9C/0LjQvdC60LggKDEg0YHQtdC60YPQvdC00LAg0L/RgNC4IDYwZnBzKVxuICAgICAgICBjb25zdCBJRExFX01BWF9EVVJBVElPTiA9IDE4MDsgLy8g0JzQsNC60YHQuNC80LDQu9GM0L3QsCDRgtGA0LjQstCw0LvRltGB0YLRjCDQt9GD0L/QuNC90LrQuCAoMyDRgdC10LrRg9C90LTQuCDQv9GA0LggNjBmcHMpXG5cbiAgICAgICAgLy8g0KHRgtCw0L3QuCDQsNC90ZbQvNCw0YbRltGXINC+0LvQtdC90Y9cbiAgICAgICAgY29uc3QgREVFUl9TVEFURSA9IHtcbiAgICAgICAgICAgIFdBTEtJTkc6ICd3YWxraW5nJyxcbiAgICAgICAgICAgIElETEU6ICdpZGxlJyxcbiAgICAgICAgICAgIFBFVFRJTkc6ICdwZXR0aW5nJ1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgLy8g0J/QsNGA0LDQvNC10YLRgNC4INC00LvRjyDRgdGC0LDQvdGDIHBldHRpbmdcbiAgICAgICAgY29uc3QgUEVUVElOR19NSU5fRFVSQVRJT04gPSA2MDsgLy8gMSDRgdC10LrRg9C90LTQsCDQv9GA0LggNjBmcHNcbiAgICAgICAgY29uc3QgUEVUVElOR19NQVhfRFVSQVRJT04gPSAxODA7IC8vIDMg0YHQtdC60YPQvdC00Lgg0L/RgNC4IDYwZnBzXG4gICAgICAgIGNvbnN0IEhFQVJUX1NJWkVfTUlOID0gODtcbiAgICAgICAgY29uc3QgSEVBUlRfU0laRV9NQVggPSAxMjtcbiAgICAgICAgY29uc3QgSEVBUlRfUklTRV9ESVNUQU5DRSA9IDMwOyAvLyDQktGW0LTRgdGC0LDQvdGMINC/0ZbQtNC50L7QvNGDINGB0LXRgNC00LXRh9C60LBcbiAgICAgICAgY29uc3QgSEVBUlRfU1BBV05fSU5URVJWQUwgPSAyMDsgLy8g0IbQvdGC0LXRgNCy0LDQuyDQv9C+0Y/QstC4INGB0LXRgNC00LXRh9C+0LogKNC60LDQtNGA0LgpXG4gICAgICAgIFxuICAgICAgICBsZXQgYW5pbWF0aW9uSWQgPSBudWxsO1xuICAgICAgICBsZXQgZnJhbWVDb3VudGVyID0gMDsgLy8g0JPQu9C+0LHQsNC70YzQvdC40Lkg0LvRltGH0LjQu9GM0L3QuNC6INC60LDQtNGA0ZbQsiDQtNC70Y8g0YHQuNC90YXRgNC+0L3RltC30LDRhtGW0ZdcblxuICAgICAgICAvLyDQmtC70LDRgSDQtNC70Y8g0YHQtdGA0LTQtdGH0LrQsFxuICAgICAgICBjbGFzcyBIZWFydCB7XG4gICAgICAgICAgICBjb25zdHJ1Y3Rvcih4LCB5LCBzaXplKSB7XG4gICAgICAgICAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICAgICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XG4gICAgICAgICAgICAgICAgdGhpcy5vcGFjaXR5ID0gMTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjYWxlID0gMTtcbiAgICAgICAgICAgICAgICB0aGlzLnJpc2VTcGVlZCA9IDAuNTsgLy8g0KjQstC40LTQutGW0YHRgtGMINC/0ZbQtNC50L7QvNGDXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnkgLT0gdGhpcy5yaXNlU3BlZWQ7XG4gICAgICAgICAgICAgICAgdGhpcy5vcGFjaXR5IC09IDAuMDI7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2FsZSArPSAwLjAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpc1Zpc2libGUoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMub3BhY2l0eSA+IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGRyYXcoY3R4KSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzVmlzaWJsZSgpKSByZXR1cm47XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY3R4LnNhdmUoKTtcbiAgICAgICAgICAgICAgICBjdHguZ2xvYmFsQWxwaGEgPSB0aGlzLm9wYWNpdHk7XG4gICAgICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZSh0aGlzLngsIHRoaXMueSk7XG4gICAgICAgICAgICAgICAgY3R4LnNjYWxlKHRoaXMuc2NhbGUsIHRoaXMuc2NhbGUpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vINCc0LDQu9GO0ZTQvNC+INGB0LXRgNC00LXRh9C60L5cbiAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gJyNmZjZiOWQnO1xuICAgICAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICBjdHgubW92ZVRvKDAsIC10aGlzLnNpemUgLyAyKTtcbiAgICAgICAgICAgICAgICBjdHguYmV6aWVyQ3VydmVUbygtdGhpcy5zaXplIC8gMiwgLXRoaXMuc2l6ZSAvIDIsIC10aGlzLnNpemUgLyAyLCAwLCAwLCB0aGlzLnNpemUgLyAyKTtcbiAgICAgICAgICAgICAgICBjdHguYmV6aWVyQ3VydmVUbyh0aGlzLnNpemUgLyAyLCAwLCB0aGlzLnNpemUgLyAyLCAtdGhpcy5zaXplIC8gMiwgMCwgLXRoaXMuc2l6ZSAvIDIpO1xuICAgICAgICAgICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY3R4LnJlc3RvcmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vINCa0LvQsNGBINC00LvRjyDQvtC70LXQvdGPXG4gICAgICAgIGNsYXNzIERlZXIge1xuICAgICAgICAgICAgY29uc3RydWN0b3Ioc3RhcnRYLCBzdGFydFksIG1pblgsIG1heFgsIHNwZWVkID0gMC41LCB6SW5kZXggPSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy54ID0gc3RhcnRYO1xuICAgICAgICAgICAgICAgIHRoaXMueSA9IHN0YXJ0WTtcbiAgICAgICAgICAgICAgICB0aGlzLm1pblggPSBtaW5YO1xuICAgICAgICAgICAgICAgIHRoaXMubWF4WCA9IG1heFg7XG4gICAgICAgICAgICAgICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xuICAgICAgICAgICAgICAgIHRoaXMuekluZGV4ID0gekluZGV4OyAvLyDQn9C+0YDRj9C00L7QuiDQvNCw0LvRjtCy0LDQvdC90Y8gXG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAtMTsgLy8gLTEgPSDQstC70ZbQstC+LCAxID0g0LLQv9GA0LDQstC+XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IERFRVJfU1RBVEUuV0FMS0lORztcbiAgICAgICAgICAgICAgICB0aGlzLmZyYW1lSW5kZXggPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuZnJhbWVSZXBlYXRDb3VudGVyID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLmlkbGVUaW1lciA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5pZGxlRHVyYXRpb24gPSAwO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vINCS0LvQsNGB0YLQuNCy0L7RgdGC0ZYg0LTQu9GPINGB0YLQsNC90YMgcGV0dGluZ1xuICAgICAgICAgICAgICAgIHRoaXMucGV0dGluZ1RpbWVyID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLnBldHRpbmdEdXJhdGlvbiA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5wcmV2aW91c1N0YXRlID0gbnVsbDsgLy8g0JfQsdC10YDRltCz0LDRlNC80L4g0L/QvtC/0LXRgNC10LTQvdGW0Lkg0YHRgtCw0L1cbiAgICAgICAgICAgICAgICB0aGlzLnNhdmVkWCA9IDA7IC8vINCX0LHQtdGA0LXQttC10L3RliDQutC+0L7RgNC00LjQvdCw0YLQuCDQv9GA0Lgg0L/QtdGA0LXRhdC+0LTRliDQsiBwZXR0aW5nXG4gICAgICAgICAgICAgICAgdGhpcy5zYXZlZFkgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuaGVhcnRzID0gW107IC8vINCc0LDRgdC40LIg0YHQtdGA0LTQtdGH0L7QulxuICAgICAgICAgICAgICAgIHRoaXMuaGVhcnRTcGF3bkNvdW50ZXIgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNC60LAg0YfQuCDQutC70ZbQuiDQv9C+0YLRgNCw0L/QuNCyINC90LAg0L7Qu9C10L3Rj1xuICAgICAgICAgICAgaXNQb2ludEluc2lkZShjbGlja1gsIGNsaWNrWSwgZGVlcldpZHRoLCBkZWVySGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNsaWNrWCA+PSB0aGlzLnggJiYgXG4gICAgICAgICAgICAgICAgICAgICAgIGNsaWNrWCA8PSB0aGlzLnggKyBkZWVyV2lkdGggJiYgXG4gICAgICAgICAgICAgICAgICAgICAgIGNsaWNrWSA+PSB0aGlzLnkgJiYgXG4gICAgICAgICAgICAgICAgICAgICAgIGNsaWNrWSA8PSB0aGlzLnkgKyBkZWVySGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQntCx0YDQvtCx0LrQsCDQutC70ZbQutGDINC/0L4g0L7Qu9C10L3RjlxuICAgICAgICAgICAgaGFuZGxlQ2xpY2soKSB7XG4gICAgICAgICAgICAgICAgLy8g0J/QtdGA0LXRhdC+0LTQuNC80L4g0LIg0YHRgtCw0L0gcGV0dGluZyDQsNCx0L4g0L/QvtC90L7QstC70Y7RlNC80L4g0YLQsNC50LzQtdGAXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUgIT09IERFRVJfU1RBVEUuUEVUVElORykge1xuICAgICAgICAgICAgICAgICAgICAvLyDQl9Cx0LXRgNGW0LPQsNGU0LzQviDQv9C+0L/QtdGA0LXQtNC90ZbQuSDRgdGC0LDQvSDRgtCwINC60L7QvtGA0LTQuNC90LDRgtC4XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJldmlvdXNTdGF0ZSA9IHRoaXMuc3RhdGU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2F2ZWRYID0gdGhpcy54O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNhdmVkWSA9IHRoaXMueTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IERFRVJfU1RBVEUuUEVUVElORztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wZXR0aW5nVGltZXIgPSAwO1xuICAgICAgICAgICAgICAgICAgICAvLyDQntGH0LjRidCw0ZTQvNC+INGB0YLQsNGA0ZYg0YHQtdGA0LTQtdGH0LrQsFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhlYXJ0cyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhlYXJ0U3Bhd25Db3VudGVyID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8g0J/QvtC90L7QstC70Y7RlNC80L4g0YLQsNC50LzQtdGAIHBldHRpbmcgKDEtMyDRgdC10LrRg9C90LTQuCkg0YLQsCDRgdC60LjQtNCw0ZTQvNC+INC/0L7RgtC+0YfQvdC40Lkg0YLQsNC50LzQtdGAXG4gICAgICAgICAgICAgICAgdGhpcy5wZXR0aW5nRHVyYXRpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoUEVUVElOR19NQVhfRFVSQVRJT04gLSBQRVRUSU5HX01JTl9EVVJBVElPTiArIDEpKSArIFBFVFRJTkdfTUlOX0RVUkFUSU9OO1xuICAgICAgICAgICAgICAgIHRoaXMucGV0dGluZ1RpbWVyID0gMDsgLy8g0KHQutC40LTQsNGU0LzQviDRgtCw0LnQvNC10YAg0L/RgNC4INC60L7QttC90L7QvNGDINC60LvRltC60YNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0KHRgtCy0L7RgNC10L3QvdGPINC90L7QstC+0LPQviDRgdC10YDQtNC10YfQutCwXG4gICAgICAgICAgICBzcGF3bkhlYXJ0KCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNpemUgPSBNYXRoLnJhbmRvbSgpICogKEhFQVJUX1NJWkVfTUFYIC0gSEVBUlRfU0laRV9NSU4pICsgSEVBUlRfU0laRV9NSU47XG4gICAgICAgICAgICAgICAgY29uc3Qgb2Zmc2V0WCA9IChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIERFRVJfV0lEVEg7IC8vINCS0LjQv9Cw0LTQutC+0LLQtSDQt9C80ZbRidC10L3QvdGPINC/0L4gWFxuICAgICAgICAgICAgICAgIGNvbnN0IGhlYXJ0WCA9IHRoaXMueCArIERFRVJfV0lEVEggLyAyICsgb2Zmc2V0WDtcbiAgICAgICAgICAgICAgICBjb25zdCBoZWFydFkgPSB0aGlzLnkgLSAxMDsgLy8g0KLRgNC+0YXQuCDQstC40YnQtSDQvtC70LXQvdGPXG4gICAgICAgICAgICAgICAgdGhpcy5oZWFydHMucHVzaChuZXcgSGVhcnQoaGVhcnRYLCBoZWFydFksIHNpemUpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZ2V0U3ByaXRlRnJhbWVJbmRleCgpIHtcbiAgICAgICAgICAgICAgICAvLyDQktC10YDRhdC90ZbQuSDRgNGP0LTQvtC6ICgwKSA9INGA0YPRhSDQstC70ZbQstC+LCDQvdC40LbQvdGW0Lkg0YDRj9C00L7QuiAoMSkgPSDRgNGD0YUg0LLQv9GA0LDQstC+XG4gICAgICAgICAgICAgICAgY29uc3Qgcm93ID0gdGhpcy5kaXJlY3Rpb24gPT09IC0xID8gMCA6IDE7XG4gICAgICAgICAgICAgICAgbGV0IGNvbCA9IDA7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gREVFUl9TVEFURS5XQUxLSU5HKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vINCa0LDQtNGA0Lgg0YXQvtC00YzQsdC4OiAwLCAxLCAyLCAzLCA0ICjQstGB0ZYgNSDQutCw0LTRgNGW0LIpXG4gICAgICAgICAgICAgICAgICAgIGNvbCA9IHRoaXMuZnJhbWVJbmRleCAlIFdBTEtJTkdfRlJBTUVTO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZSA9PT0gREVFUl9TVEFURS5QRVRUSU5HKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vINCSINGB0YLQsNC90ZYgcGV0dGluZyDQstC40LrQvtGA0LjRgdGC0L7QstGD0ZTQvNC+INC60LDQtNGAIDAgKGlkbGUg0LrQsNC00YApXG4gICAgICAgICAgICAgICAgICAgIGNvbCA9IDA7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g0KHRgtCw0L0g0LfRg9C/0LjQvdC60LggKElETEUpIC0g0LLQuNC60L7RgNC40YHRgtC+0LLRg9GU0LzQviDQutCw0LTRgCAwXG4gICAgICAgICAgICAgICAgICAgIGNvbCA9IDA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgcm93LCBjb2wgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdXBkYXRlKHNob3VsZFVwZGF0ZUZyYW1lKSB7XG4gICAgICAgICAgICAgICAgLy8g0J7QvdC+0LLQu9GO0ZTQvNC+INCw0L3RltC80LDRhtGW0Y4g0LrQsNC00YDRltCyINC3INC/0L7QstGC0L7RgNC10L3QvdGP0Lwg0LTQu9GPINC/0LvQsNCy0L3QvtGB0YLRllxuICAgICAgICAgICAgICAgIGlmIChzaG91bGRVcGRhdGVGcmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gREVFUl9TVEFURS5XQUxLSU5HKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZyYW1lUmVwZWF0Q291bnRlcisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g0J/QvtC60LDQt9GD0ZTQvNC+INC60L7QttC10L0g0LrQsNC00YAg0LrRltC70YzQutCwINGA0LDQt9GW0LIg0LTQu9GPINC/0LvQsNCy0L3RltGI0L7RlyDQsNC90ZbQvNCw0YbRltGXXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5mcmFtZVJlcGVhdENvdW50ZXIgPj0gRlJBTUVfUkVQRUFUKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mcmFtZVJlcGVhdENvdW50ZXIgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vINCf0L7RgdC70ZbQtNC+0LLQvdC+INC/0YDQvtGF0L7QtNC40LzQviDRh9C10YDQtdC3INCy0YHRliDQutCw0LTRgNC4OiAwLCAxLCAyLCAzLCA0LCAwLCAxLCAyLCAzLCA0Li4uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mcmFtZUluZGV4ID0gKHRoaXMuZnJhbWVJbmRleCArIDEpICUgV0FMS0lOR19GUkFNRVM7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyDQm9C+0LPRltC60LAg0YHRgtCw0L3RltCyINGC0LAg0YDRg9GF0YNcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gREVFUl9TVEFURS5QRVRUSU5HKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vINCSINGB0YLQsNC90ZYgcGV0dGluZyDQvtC70LXQvdGMINC90LUg0YDRg9GF0LDRlNGC0YzRgdGPXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGV0dGluZ1RpbWVyKys7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyDQodGC0LLQvtGA0Y7RlNC80L4g0YHQtdGA0LTQtdGH0LrQsCDQtyDRltC90YLQtdGA0LLQsNC70L7QvFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhlYXJ0U3Bhd25Db3VudGVyKys7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmhlYXJ0U3Bhd25Db3VudGVyID49IEhFQVJUX1NQQVdOX0lOVEVSVkFMKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhlYXJ0U3Bhd25Db3VudGVyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3Bhd25IZWFydCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyDQntC90L7QstC70Y7RlNC80L4g0YHQtdGA0LTQtdGH0LrQsFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhlYXJ0cyA9IHRoaXMuaGVhcnRzLmZpbHRlcihoZWFydCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFydC51cGRhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBoZWFydC5pc1Zpc2libGUoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNGP0ZTQvNC+INGH0Lgg0LfQsNC60ZbQvdGH0LjQstGB0Y8g0YHRgtCw0L0gcGV0dGluZ1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wZXR0aW5nVGltZXIgPj0gdGhpcy5wZXR0aW5nRHVyYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vINCf0L7QstC10YDRgtCw0ZTQvNC+0YHRjyDQtNC+INC30LHQtdGA0LXQttC10L3QuNGFINC60L7QvtGA0LTQuNC90LDRglxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy54ID0gdGhpcy5zYXZlZFg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnkgPSB0aGlzLnNhdmVkWTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g0J/QvtCy0LXRgNGC0LDRlNC80L7RgdGPINC00L4g0L/QvtC/0LXRgNC10LTQvdGM0L7Qs9C+INGB0YLQsNC90YNcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnByZXZpb3VzU3RhdGUgPT09IERFRVJfU1RBVEUuV0FMS0lORykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBERUVSX1NUQVRFLldBTEtJTkc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g0J/RgNC+0LTQvtCy0LbRg9GU0LzQviDRgNGD0YUg0Lcg0LfQsdC10YDQtdC20LXQvdC40YUg0LrQvtC+0YDQtNC40L3QsNGCXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldmlvdXNTdGF0ZSA9PT0gREVFUl9TVEFURS5JRExFKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IERFRVJfU1RBVEUuSURMRTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDQn9C+0LLQtdGA0YLQsNGU0LzQvtGB0Y8g0LTQviDRgdGC0LDQvdGDIGlkbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlkbGVUaW1lciA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pZGxlRHVyYXRpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoSURMRV9NQVhfRFVSQVRJT04gLSBJRExFX01JTl9EVVJBVElPTiArIDEpKSArIElETEVfTUlOX0RVUkFUSU9OO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXZpb3VzU3RhdGUgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wZXR0aW5nVGltZXIgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wZXR0aW5nRHVyYXRpb24gPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oZWFydHMgPSBbXTsgLy8g0J7Rh9C40YnQsNGU0LzQviDRgdC10YDQtNC10YfQutCwXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhlYXJ0U3Bhd25Db3VudGVyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZSA9PT0gREVFUl9TVEFURS5XQUxLSU5HKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vINCe0L3QvtCy0LvRjtGU0LzQviDQv9C+0LfQuNGG0ZbRjiDQvtC70LXQvdGPXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueCArPSB0aGlzLnNwZWVkICogdGhpcy5kaXJlY3Rpb247XG5cbiAgICAgICAgICAgICAgICAgICAgLy8g0J/QtdGA0LXQstGW0YDRj9GU0LzQviDQvNC10LbRliDRgtCwINC/0LXRgNC10YXQvtC00LjQvNC+INC00L4g0LfRg9C/0LjQvdC60LhcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMueCA+PSB0aGlzLm1heFggJiYgdGhpcy5kaXJlY3Rpb24gPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vINCU0L7RgdGP0LPQu9C4INC/0YDQsNCy0L7Qs9C+INC60YDQsNGOIC0g0LfRg9C/0LjQvdGP0ZTQvNC+0YHRj1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy54ID0gdGhpcy5tYXhYO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IERFRVJfU1RBVEUuSURMRTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaWRsZVRpbWVyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vINCT0LXQvdC10YDRg9GU0LzQviDQstC40L/QsNC00LrQvtCy0YMg0YLRgNC40LLQsNC70ZbRgdGC0Ywg0LfRg9C/0LjQvdC60Lgg0LLRltC0IDEg0LTQviAzINGB0LXQutGD0L3QtFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pZGxlRHVyYXRpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoSURMRV9NQVhfRFVSQVRJT04gLSBJRExFX01JTl9EVVJBVElPTiArIDEpKSArIElETEVfTUlOX0RVUkFUSU9OO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMueCA8PSB0aGlzLm1pblggJiYgdGhpcy5kaXJlY3Rpb24gPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDQlNC+0YHRj9Cz0LvQuCDQu9GW0LLQvtCz0L4g0LrRgNCw0Y4gLSDQt9GD0L/QuNC90Y/RlNC80L7RgdGPXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnggPSB0aGlzLm1pblg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0gREVFUl9TVEFURS5JRExFO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pZGxlVGltZXIgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g0JPQtdC90LXRgNGD0ZTQvNC+INCy0LjQv9Cw0LTQutC+0LLRgyDRgtGA0LjQstCw0LvRltGB0YLRjCDQt9GD0L/QuNC90LrQuCDQstGW0LQgMSDQtNC+IDMg0YHQtdC60YPQvdC0XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlkbGVEdXJhdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChJRExFX01BWF9EVVJBVElPTiAtIElETEVfTUlOX0RVUkFUSU9OICsgMSkpICsgSURMRV9NSU5fRFVSQVRJT047XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT09IERFRVJfU1RBVEUuSURMRSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlkbGVUaW1lcisrO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8g0J/RltGB0LvRjyDQt9Cw0LLQtdGA0YjQtdC90L3RjyDQt9GD0L/QuNC90LrQuCDQt9C80ZbQvdGO0ZTQvNC+INC90LDQv9GA0Y/QvNC+0Log0YLQsCDQv9C10YDQtdGF0L7QtNC40LzQviDQtNC+INGF0L7QtNGM0LHQuFxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pZGxlVGltZXIgPj0gdGhpcy5pZGxlRHVyYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uICo9IC0xOyAvLyDQl9C80ZbQvdGO0ZTQvNC+INC90LDQv9GA0Y/QvNC+0LogKNCy0LvRltCy0L4g4oaUINCy0L/RgNCw0LLQvilcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBERUVSX1NUQVRFLldBTEtJTkc7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZyYW1lSW5kZXggPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mcmFtZVJlcGVhdENvdW50ZXIgPSAwOyAvLyDQodC60LjQtNCw0ZTQvNC+INC70ZbRh9C40LvRjNC90LjQuiDQv9C+0LLRgtC+0YDQtdC90YxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZHJhdyhjdHgsIHNwcml0ZUltYWdlLCBmcmFtZVdpZHRoLCBmcmFtZUhlaWdodCwgZGVlcldpZHRoLCBkZWVySGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFzcHJpdGVJbWFnZS5jb21wbGV0ZSB8fCBmcmFtZVdpZHRoIDw9IDAgfHwgZnJhbWVIZWlnaHQgPD0gMCkgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgeyByb3csIGNvbCB9ID0gdGhpcy5nZXRTcHJpdGVGcmFtZUluZGV4KCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8g0JrQvtC+0YDQtNC40L3QsNGC0Lgg0LrQsNC00YDRgyDQsiDRgdC/0YDQsNC50YIt0LvQuNGB0YLRllxuICAgICAgICAgICAgICAgIGNvbnN0IHNvdXJjZVggPSBjb2wgKiBmcmFtZVdpZHRoO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNvdXJjZVkgPSByb3cgKiBmcmFtZUhlaWdodDtcblxuICAgICAgICAgICAgICAgIC8vINCS0LjRgNGW0LfQsNGU0LzQviDQutCw0LTRgCDQt9GWINGB0L/RgNCw0LnRgi3Qu9C40YHRgtCwINGC0LAg0LzQsNC70Y7RlNC80L4g0L3QsCBjYW52YXNcbiAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgICAgICAgICBzcHJpdGVJbWFnZSxcbiAgICAgICAgICAgICAgICAgICAgc291cmNlWCwgc291cmNlWSwgZnJhbWVXaWR0aCwgZnJhbWVIZWlnaHQsIC8vINCU0LbQtdGA0LXQu9C+ICjRgdC/0YDQsNC50YIt0LvQuNGB0YIpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueCwgdGhpcy55LCBkZWVyV2lkdGgsIGRlZXJIZWlnaHQgLy8g0J/RgNC40LfQvdCw0YfQtdC90L3RjyAoY2FudmFzKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8g0JzQsNC70Y7RlNC80L4g0YHQtdGA0LTQtdGH0LrQsCDQvdCw0LQg0L7Qu9C10L3QtdC8XG4gICAgICAgICAgICAgICAgdGhpcy5oZWFydHMuZm9yRWFjaChoZWFydCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGhlYXJ0LmRyYXcoY3R4KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyDQnNCw0YHQuNCyINC+0LvQtdC90ZbQsiAo0LzQvtC20L3QsCDQtNC+0LTQsNGC0Lgg0LHRltC70YzRiNC1KVxuICAgICAgICBjb25zdCBkZWVycyA9IFtdO1xuICAgICAgICBcbiAgICAgICAgLy8g0JrQvtC90YTRltCz0YPRgNCw0YbRltGPINC00LvRjyDRgdGC0LLQvtGA0LXQvdC90Y8g0L7Qu9C10L3RltCyXG4gICAgICAgIGNvbnN0IERFRVJfQ09VTlQgPSAzOyAvLyDQmtGW0LvRjNC60ZbRgdGC0Ywg0L7Qu9C10L3RltCyXG4gICAgICAgIFxuICAgICAgICAvLyDQoNC+0LfRgNCw0YXQvtCy0YPRlNC80L4g0LrQvtC10YTRltGG0ZbRlNC90YIg0LzQsNGB0YjRgtCw0LHRg9Cy0LDQvdC90Y8g0LTQu9GPINC/0L7Qt9C40YbRltC5INC+0LvQtdC90ZbQslxuICAgICAgICBjb25zdCBzY2FsZVggPSBDQU5WQVNfV0lEVEggLyAxMzY2O1xuICAgICAgICBjb25zdCBzY2FsZVkgPSBDQU5WQVNfSEVJR0hUIC8gNTAwO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgZGVlckNvbmZpZ3MgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhcnRYOiBDQU5WQVNfV0lEVEggLyAyICsgNTAgKiBzY2FsZVgsXG4gICAgICAgICAgICAgICAgc3RhcnRZOiB0cmVlWSArIFRSRUVfSEVJR0hUIC0gMjAsIC8vINCf0ZbQtCDRj9C70LjQvdC60L7RjiAodHJlZVkgKyDQstC40YHQvtGC0LAg0Y/Qu9C40L3QutC4IC0g0LLRltC00YHRgtGD0L8pXG4gICAgICAgICAgICAgICAgbWluWDogQ0FOVkFTX1dJRFRIIC8gMiAtIDIwMCAqIHNjYWxlWCxcbiAgICAgICAgICAgICAgICBtYXhYOiBDQU5WQVNfV0lEVEggLyAyICsgMzAwICogc2NhbGVYLFxuICAgICAgICAgICAgICAgIHNwZWVkOiAwLjUsXG4gICAgICAgICAgICAgICAgekluZGV4OiA0XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXJ0WDogQ0FOVkFTX1dJRFRIIC8gMiAtIDEwMCAqIHNjYWxlWCxcbiAgICAgICAgICAgICAgICBzdGFydFk6IENBTlZBU19IRUlHSFQgLyAyIC0gREVFUl9IRUlHSFQgLyAyICsgNTAgKiBzY2FsZVksXG4gICAgICAgICAgICAgICAgbWluWDogQ0FOVkFTX1dJRFRIIC8gMiAtIDE1MCAqIHNjYWxlWCxcbiAgICAgICAgICAgICAgICBtYXhYOiBDQU5WQVNfV0lEVEggLyAyICsgMTUwICogc2NhbGVYLFxuICAgICAgICAgICAgICAgIHNwZWVkOiAwLjMsXG4gICAgICAgICAgICAgICAgekluZGV4OiAzXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXJ0WDogQ0FOVkFTX1dJRFRIIC8gMiAtIDEwMCAqIHNjYWxlWCxcbiAgICAgICAgICAgICAgICBzdGFydFk6IENBTlZBU19IRUlHSFQgLyAyIC0gREVFUl9IRUlHSFQgLyAyIC0gNTAgKiBzY2FsZVksXG4gICAgICAgICAgICAgICAgbWluWDogQ0FOVkFTX1dJRFRIIC8gMiAtIDI1MCAqIHNjYWxlWCxcbiAgICAgICAgICAgICAgICBtYXhYOiBDQU5WQVNfV0lEVEggLyAyICsgMjUwICogc2NhbGVYLFxuICAgICAgICAgICAgICAgIHNwZWVkOiAwLjQsXG4gICAgICAgICAgICAgICAgekluZGV4OiAxIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICBcbiAgICAgICAgXTtcblxuICAgICAgICAvLyDQodGC0LLQvtGA0Y7RlNC80L4g0L7Qu9C10L3RltCyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgREVFUl9DT1VOVCAmJiBpIDwgZGVlckNvbmZpZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbmZpZyA9IGRlZXJDb25maWdzW2ldO1xuICAgICAgICAgICAgZGVlcnMucHVzaChuZXcgRGVlcihcbiAgICAgICAgICAgICAgICBjb25maWcuc3RhcnRYLFxuICAgICAgICAgICAgICAgIGNvbmZpZy5zdGFydFksXG4gICAgICAgICAgICAgICAgY29uZmlnLm1pblgsXG4gICAgICAgICAgICAgICAgY29uZmlnLm1heFgsXG4gICAgICAgICAgICAgICAgY29uZmlnLnNwZWVkLFxuICAgICAgICAgICAgICAgIGNvbmZpZy56SW5kZXggfHwgMCAvLyDQktC40LrQvtGA0LjRgdGC0L7QstGD0ZTQvNC+IHpJbmRleCDQtyDQutC+0L3RhNGW0LPRgyDQsNCx0L4gMCDQt9CwINC30LDQvNC+0LLRh9GD0LLQsNC90L3Rj9C8XG4gICAgICAgICAgICApKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vINCX0LDQstCw0L3RgtCw0LbQtdC90L3RjyDQt9C+0LHRgNCw0LbQtdC90YxcbiAgICAgICAgY29uc3QgaW1hZ2VzID0ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbmV3IEltYWdlKCksXG4gICAgICAgICAgICB0cmVlOiBuZXcgSW1hZ2UoKSxcbiAgICAgICAgICAgIGRlZXJTcHJpdGU6IG5ldyBJbWFnZSgpIC8vINCh0L/RgNCw0LnRgi3Qu9C40YHRgiDQt9Cw0LzRltGB0YLRjCDQvtC00L3QvtCz0L4g0LfQvtCx0YDQsNC20LXQvdC90Y9cbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgaW1hZ2VzTG9hZGVkID0gMDtcbiAgICAgICAgY29uc3QgdG90YWxJbWFnZXMgPSAzO1xuXG4gICAgICAgIGZ1bmN0aW9uIG9uSW1hZ2VMb2FkKCkge1xuICAgICAgICAgICAgaW1hZ2VzTG9hZGVkKys7XG4gICAgICAgICAgICBpZiAoaW1hZ2VzTG9hZGVkID09PSB0b3RhbEltYWdlcykge1xuICAgICAgICAgICAgICAgIC8vINCf0LXRgNC10LLRltGA0Y/RlNC80L4sINGH0Lgg0YHQv9GA0LDQudGCLdC70LjRgdGCINC30LDQstCw0L3RgtCw0LbQuNCy0YHRjyDQutC+0YDQtdC60YLQvdC+XG4gICAgICAgICAgICAgICAgaWYgKGltYWdlcy5kZWVyU3ByaXRlLmNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEZWVyIHNwcml0ZSBsb2FkZWQ6Jywge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGltYWdlcy5kZWVyU3ByaXRlLndpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBpbWFnZXMuZGVlclNwcml0ZS5oZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgICAgICBmcmFtZVdpZHRoOiBGUkFNRV9XSURUSCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lSGVpZ2h0OiBGUkFNRV9IRUlHSFQsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWVyV2lkdGg6IERFRVJfV0lEVEgsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWVySGVpZ2h0OiBERUVSX0hFSUdIVFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZHJhd0NhbnZhcygpO1xuICAgICAgICAgICAgICAgIHN0YXJ0QW5pbWF0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpbWFnZXMuYmFja2dyb3VuZC5vbmxvYWQgPSBvbkltYWdlTG9hZDtcbiAgICAgICAgaW1hZ2VzLnRyZWUub25sb2FkID0gb25JbWFnZUxvYWQ7XG4gICAgICAgIGltYWdlcy5kZWVyU3ByaXRlLm9ubG9hZCA9IG9uSW1hZ2VMb2FkO1xuXG4gICAgICAgIC8vINCS0LjQsdC40YDQsNGU0LzQviDRhNC+0L0g0LfQsNC70LXQttC90L4g0LLRltC0INGA0L7Qt9C80ZbRgNGDINC10LrRgNCw0L3Rg1xuICAgICAgICBpbWFnZXMuYmFja2dyb3VuZC5zcmMgPSBpc01vYmlsZSA/ICdpbWcvcGFydGljaXBhdGUvY2FudmFzLWJnLXRhYi5wbmcnIDogJ2ltZy9wYXJ0aWNpcGF0ZS9jYW52YXMtYmcucG5nJztcbiAgICAgICAgaW1hZ2VzLnRyZWUuc3JjID0gJ2ltZy9wYXJ0aWNpcGF0ZS90cmVlLnBuZyc7XG4gICAgICAgIC8vINCS0LjQutC+0YDQuNGB0YLQvtCy0YPRlNC80L4g0YHQv9GA0LDQudGCLdC70LjRgdGCICjRj9C60YnQviDRhNCw0LnQuyDQvdCw0LfQuNCy0LDRlNGC0YzRgdGPIGRlZXItc3ByaXRlLnBuZywg0LfQvNGW0L3RltGC0Ywg0L3QsNC30LLRgylcbiAgICAgICAgaW1hZ2VzLmRlZXJTcHJpdGUuc3JjID0gJ2ltZy9wYXJ0aWNpcGF0ZS9kZWVyLXNwcml0ZS5wbmcnO1xuICAgICAgICBcbiAgICAgICAgLy8g0J7QvdC+0LLQu9GO0ZTQvNC+INC/0L7RgdC40LvQsNC90L3RjyDQvdCwINC00LDQvdGWINC00LvRjyDQvtCx0YDQvtCx0L3QuNC60ZbQsiDQv9C+0LTRltC5XG4gICAgICAgIHBhcnRpY2lwYXRlRGVlcnMgPSBkZWVycztcbiAgICAgICAgcGFydGljaXBhdGVEZWVyV2lkdGggPSBERUVSX1dJRFRIO1xuICAgICAgICBwYXJ0aWNpcGF0ZURlZXJIZWlnaHQgPSBERUVSX0hFSUdIVDtcbiAgICAgICAgXG4gICAgICAgIC8vINCU0L7QtNCw0ZTQvNC+INC+0LHRgNC+0LHQvdC40LrQuCDQv9C+0LTRltC5INGC0ZbQu9GM0LrQuCDQvtC00LjQvSDRgNCw0LdcbiAgICAgICAgaWYgKCFjYW52YXNDbGlja0hhbmRsZXJzQXR0YWNoZWQpIHtcbiAgICAgICAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVBhcnRpY2lwYXRlQ2FudmFzQ2xpY2spO1xuICAgICAgICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBoYW5kbGVQYXJ0aWNpcGF0ZUNhbnZhc0NsaWNrLCB7IHBhc3NpdmU6IGZhbHNlIH0pO1xuICAgICAgICAgICAgY2FudmFzQ2xpY2tIYW5kbGVyc0F0dGFjaGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGRyYXdDYW52YXMoKSB7XG4gICAgICAgICAgICAvLyDQntGH0LjRidC10L3QvdGPIGNhbnZhc1xuICAgICAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBDQU5WQVNfV0lEVEgsIENBTlZBU19IRUlHSFQpO1xuXG4gICAgICAgICAgICAvLyDQnNCw0LvRjtGU0LzQviDRhNC+0L1cbiAgICAgICAgICAgIGlmIChpbWFnZXMuYmFja2dyb3VuZC5jb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1hZ2VzLmJhY2tncm91bmQsIDAsIDAsIENBTlZBU19XSURUSCwgQ0FOVkFTX0hFSUdIVCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHpJbmRleCDQtNC70Y8g0Y/Qu9C40L3QutC4ICjQvNGW0LYg0L7Qu9C10L3Rj9C80LgpXG4gICAgICAgICAgICBjb25zdCBUUkVFX1pfSU5ERVggPSAyOyAvLyDQr9C70LjQvdC60LAg0LzQsNC70Y7RlNGC0YzRgdGPINC80ZbQtiDQvtC70LXQvdGP0LzQuCDQtyB6SW5kZXggMSDRgtCwIDJcblxuICAgICAgICAgICAgLy8g0KHRgtCy0L7RgNGO0ZTQvNC+INC80LDRgdC40LIg0LLRgdGW0YUg0LXQu9C10LzQtdC90YLRltCyINC00LvRjyDQvNCw0LvRjtCy0LDQvdC90Y8gKNC+0LvQtdC90ZYgKyDRj9C70LjQvdC60LApXG4gICAgICAgICAgICBjb25zdCBkcmF3YWJsZUVsZW1lbnRzID0gW107XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCU0L7QtNCw0ZTQvNC+INC+0LvQtdC90ZbQslxuICAgICAgICAgICAgZGVlcnMuZm9yRWFjaChkZWVyID0+IHtcbiAgICAgICAgICAgICAgICBkcmF3YWJsZUVsZW1lbnRzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZGVlcicsXG4gICAgICAgICAgICAgICAgICAgIHpJbmRleDogZGVlci56SW5kZXgsXG4gICAgICAgICAgICAgICAgICAgIGRyYXc6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbWFnZXMuZGVlclNwcml0ZS5jb21wbGV0ZSAmJiBGUkFNRV9XSURUSCA+IDAgJiYgRlJBTUVfSEVJR0hUID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZXIuZHJhdyhjdHgsIGltYWdlcy5kZWVyU3ByaXRlLCBGUkFNRV9XSURUSCwgRlJBTUVfSEVJR0hULCBERUVSX1dJRFRILCBERUVSX0hFSUdIVCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQlNC+0LTQsNGU0LzQviDRj9C70LjQvdC60YNcbiAgICAgICAgICAgIGRyYXdhYmxlRWxlbWVudHMucHVzaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3RyZWUnLFxuICAgICAgICAgICAgICAgIHpJbmRleDogVFJFRV9aX0lOREVYLFxuICAgICAgICAgICAgICAgIGRyYXc6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGltYWdlcy50cmVlLmNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKGltYWdlcy50cmVlLCB0cmVlWCwgdHJlZVksIFRSRUVfV0lEVEgsIFRSRUVfSEVJR0hUKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyDQodC+0YDRgtGD0ZTQvNC+INCy0YHRliDQtdC70LXQvNC10L3RgtC4INC30LAgekluZGV4ICjQvNC10L3RiNC1ID0g0LzQsNC70Y7RlNGC0YzRgdGPINGA0LDQvdGW0YjQtSwg0LHRltC70YzRiNC1ID0g0LzQsNC70Y7RlNGC0YzRgdGPINC/0ZbQt9C90ZbRiNC1KVxuICAgICAgICAgICAgZHJhd2FibGVFbGVtZW50cy5zb3J0KChhLCBiKSA9PiBhLnpJbmRleCAtIGIuekluZGV4KTtcblxuICAgICAgICAgICAgLy8g0JzQsNC70Y7RlNC80L4g0LLRgdGWINC10LvQtdC80LXQvdGC0Lgg0LIg0L/RgNCw0LLQuNC70YzQvdC+0LzRgyDQv9C+0YDRj9C00LrRg1xuICAgICAgICAgICAgZHJhd2FibGVFbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuZHJhdygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBhbmltYXRlKCkge1xuICAgICAgICAgICAgZnJhbWVDb3VudGVyKys7XG5cbiAgICAgICAgICAgIC8vINCf0LXRgNC10LLRltGA0Y/RlNC80L4sINGH0Lgg0L/QvtGC0YDRltCx0L3QviDQvtC90L7QstC70Y7QstCw0YLQuCDQutCw0LTRgNC4INCw0L3RltC80LDRhtGW0ZdcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZFVwZGF0ZUZyYW1lID0gZnJhbWVDb3VudGVyID49IEZSQU1FX0RFTEFZO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQntC90L7QstC70Y7RlNC80L4g0LPQu9C+0LHQsNC70YzQvdC40Lkg0LvRltGH0LjQu9GM0L3QuNC6INC60LDQtNGA0ZbQslxuICAgICAgICAgICAgaWYgKHNob3VsZFVwZGF0ZUZyYW1lKSB7XG4gICAgICAgICAgICAgICAgZnJhbWVDb3VudGVyID0gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8g0J7QvdC+0LLQu9GO0ZTQvNC+INCy0YHRltGFINC+0LvQtdC90ZbQslxuICAgICAgICAgICAgZGVlcnMuZm9yRWFjaChkZWVyID0+IHtcbiAgICAgICAgICAgICAgICBkZWVyLnVwZGF0ZShzaG91bGRVcGRhdGVGcmFtZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8g0J/QtdGA0LXQvNCw0LvRjNC+0LLRg9GU0LzQviBjYW52YXNcbiAgICAgICAgICAgIGRyYXdDYW52YXMoKTtcblxuICAgICAgICAgICAgYW5pbWF0aW9uSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBzdGFydEFuaW1hdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChhbmltYXRpb25JZCkge1xuICAgICAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbklkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFuaW1hdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vINCX0YPQv9C40L3Rj9GU0LzQviDQsNC90ZbQvNCw0YbRltGOINC/0YDQuCDQstC40YXQvtC00ZYg0Lcgdmlld3BvcnQgKNC+0L/RhtGW0L7QvdCw0LvRjNC90L4pXG4gICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgICAgICAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWFuaW1hdGlvbklkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydEFuaW1hdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFuaW1hdGlvbklkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShhbmltYXRpb25JZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25JZCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShjYW52YXMpO1xuICAgICAgICBcbiAgICAgICAgLy8g0J7QsdGA0L7QsdC60LAg0LfQvNGW0L3QuCDRgNC+0LfQvNGW0YDRgyDQstGW0LrQvdCwINC00LvRjyDQsNC00LDQv9GC0LjQstC90L7RgdGC0ZZcbiAgICAgICAgbGV0IHJlc2l6ZVRpbWVvdXQ7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQocmVzaXplVGltZW91dCk7XG4gICAgICAgICAgICByZXNpemVUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3SXNNb2JpbGUgPSB3aW5kb3cuaW5uZXJXaWR0aCA8PSAxMDUwO1xuICAgICAgICAgICAgICAgIC8vINCf0LXRgNC10LfQsNC/0YPRgdC60LDRlNC80L4g0ZbQvdGW0YbRltCw0LvRltC30LDRhtGW0Y4g0YLRltC70YzQutC4INGP0LrRidC+INC30LzRltC90LjQstGB0Y8g0YDQtdC20LjQvCAobW9iaWxlL2Rlc2t0b3ApXG4gICAgICAgICAgICAgICAgaWYgKG5ld0lzTW9iaWxlICE9PSBpc01vYmlsZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyDQl9GD0L/QuNC90Y/RlNC80L4g0L/QvtGC0L7Rh9C90YMg0LDQvdGW0LzQsNGG0ZbRjlxuICAgICAgICAgICAgICAgICAgICBpZiAoYW5pbWF0aW9uSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbklkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbklkID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyDQn9C10YDQtdC30LDQv9GD0YHQutCw0ZTQvNC+INGW0L3RltGG0ZbQsNC70ZbQt9Cw0YbRltGOXG4gICAgICAgICAgICAgICAgICAgIGluaXRQYXJ0aWNpcGF0ZUNhbnZhcygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDI1MCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluaXRTbm93Zmxha2VzQ2FudmFzKCkge1xuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc25vd2ZsYWtlc0NhbnZhcycpO1xuICAgICAgICBpZiAoIWNhbnZhcykgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICBjb25zdCBmYXZQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhdi1wYWdlJyk7XG4gICAgICAgIFxuICAgICAgICAvLyDQmtC+0L3RgdGC0LDQvdGC0LhcbiAgICAgICAgY29uc3QgU05PV0ZMQUtFX0NPVU5UID0gMTAwO1xuICAgICAgICBjb25zdCBTTk9XRkxBS0VfTUlOX1NJWkUgPSA0O1xuICAgICAgICBjb25zdCBTTk9XRkxBS0VfTUFYX1NJWkUgPSAxMDtcbiAgICAgICAgY29uc3QgU05PV0ZMQUtFX01JTl9TUEVFRCA9IDAuMTtcbiAgICAgICAgY29uc3QgU05PV0ZMQUtFX01BWF9TUEVFRCA9IDAuMztcbiAgICAgICAgY29uc3QgU05PV0ZMQUtFX1dJTkRfUkFOR0UgPSAwLjQ7XG4gICAgICAgIGNvbnN0IFNOT1dGTEFLRV9TUEFXTl9JTlRFUlZBTCA9IDIwMDtcblxuICAgICAgICBjb25zdCBzbm93Zmxha2VzID0gW107XG4gICAgICAgIGxldCBsYXN0U25vd2ZsYWtlVGltZSA9IDA7XG4gICAgICAgIGxldCBhbmltYXRpb25JZCA9IG51bGw7XG4gICAgICAgIFxuICAgICAgICAvLyDQktGB0YLQsNC90L7QstC70Y7RlNC80L4g0YDQvtC30LzRltGAIGNhbnZhcyDQvdCwINCy0LXRgdGMIC5mYXYtcGFnZVxuICAgICAgICBmdW5jdGlvbiByZXNpemVDYW52YXMoKSB7XG4gICAgICAgICAgICBsZXQgbmV3V2lkdGgsIG5ld0hlaWdodDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGZhdlBhZ2UpIHtcbiAgICAgICAgICAgICAgICAvLyDQktC40LrQvtGA0LjRgdGC0L7QstGD0ZTQvNC+IHNjcm9sbEhlaWdodCDQtNC70Y8g0L7RgtGA0LjQvNCw0L3QvdGPINGA0LXQsNC70YzQvdC+0Zcg0LLQuNGB0L7RgtC4INC60L7QvdGC0LXQvdGC0YNcbiAgICAgICAgICAgICAgICBjb25zdCByZWN0ID0gZmF2UGFnZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgICAgICBuZXdXaWR0aCA9IHJlY3Qud2lkdGggfHwgZmF2UGFnZS5vZmZzZXRXaWR0aCB8fCB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgICAgICAgICAvLyDQlNC70Y8g0LLQuNGB0L7RgtC4INCy0LjQutC+0YDQuNGB0YLQvtCy0YPRlNC80L4gc2Nyb2xsSGVpZ2h0INGP0LrRidC+INCy0ZbQvSDQsdGW0LvRjNGI0LjQuSDQt9CwIG9mZnNldEhlaWdodFxuICAgICAgICAgICAgICAgIGNvbnN0IG9mZnNldEhlaWdodCA9IGZhdlBhZ2Uub2Zmc2V0SGVpZ2h0IHx8IGZhdlBhZ2UuY2xpZW50SGVpZ2h0O1xuICAgICAgICAgICAgICAgIGNvbnN0IHNjcm9sbEhlaWdodCA9IGZhdlBhZ2Uuc2Nyb2xsSGVpZ2h0O1xuICAgICAgICAgICAgICAgIG5ld0hlaWdodCA9IE1hdGgubWF4KHNjcm9sbEhlaWdodCwgb2Zmc2V0SGVpZ2h0LCByZWN0LmhlaWdodCkgfHwgd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBGYWxsYmFjayDQvdCwIHZpZXdwb3J0XG4gICAgICAgICAgICAgICAgbmV3V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgICAgICAgICBuZXdIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCf0LXRgNC10LLRltGA0Y/RlNC80L4g0YfQuCDRgNC+0LfQvNGW0YDQuCDQt9C80ZbQvdC40LvQuNGB0Y8g0L/QtdGA0LXQtCDQvtC90L7QstC70LXQvdC90Y/QvFxuICAgICAgICAgICAgaWYgKGNhbnZhcy53aWR0aCAhPT0gbmV3V2lkdGggfHwgY2FudmFzLmhlaWdodCAhPT0gbmV3SGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgY2FudmFzLndpZHRoID0gbmV3V2lkdGg7XG4gICAgICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IG5ld0hlaWdodDtcbiAgICAgICAgICAgICAgICAvLyDQntGH0LjRidCw0ZTQvNC+INGB0L3RltC20LjQvdC60Lgg0L/RgNC4INC30LzRltC90ZYg0YDQvtC30LzRltGA0YNcbiAgICAgICAgICAgICAgICBzbm93Zmxha2VzLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyDQktGB0YLQsNC90L7QstC70Y7RlNC80L4g0YDQvtC30LzRltGAIGNhbnZhcyDQtyDQvdC10LLQtdC70LjQutC+0Y4g0LfQsNGC0YDQuNC80LrQvtGOINC00LvRjyDQutC+0YDQtdC60YLQvdC+0LPQviDRgNC+0LfRgNCw0YXRg9C90LrRgyDRgNC+0LfQvNGW0YDRltCyXG4gICAgICAgIC8vINCS0LjQutC+0YDQuNGB0YLQvtCy0YPRlNC80L4g0LrRltC70YzQutCwINC60LDQtNGA0ZbQsiDQtNC70Y8g0LPQsNGA0LDQvdGC0ZbRlyDQv9GA0LDQstC40LvRjNC90L7Qs9C+INGA0L7Qt9C80ZbRgNGDXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICByZXNpemVDYW52YXMoKTtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzaXplQ2FudmFzKCk7XG4gICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzaXplQ2FudmFzKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplQ2FudmFzKTtcblxuICAgICAgICAvLyDQl9Cw0LLQsNC90YLQsNC20LXQvdC90Y8g0LfQvtCx0YDQsNC20LXQvdC90Y8g0YHQvdGW0LbQuNC90LrQuFxuICAgICAgICBjb25zdCBzbm93Zmxha2VJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBsZXQgaW1hZ2VMb2FkZWQgPSBmYWxzZTtcblxuICAgICAgICBzbm93Zmxha2VJbWFnZS5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGltYWdlTG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vINCn0LXQutCw0ZTQvNC+INC/0L7QutC4INGB0YLQvtGA0ZbQvdC60LAg0LLQuNC50LTQtSDQt9GWINGB0YLQsNC90YMgbG9hZGluZyDQv9C10YDQtdC0INGB0YLQsNGA0YLQvtC8INCw0L3RltC80LDRhtGW0ZdcbiAgICAgICAgICAgIGZ1bmN0aW9uIHdhaXRGb3JQYWdlUmVhZHkoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXNQYWdlTG9hZGluZyA9IG1haW5QYWdlICYmIG1haW5QYWdlLmNsYXNzTGlzdC5jb250YWlucygnbG9hZGluZycpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChpc1BhZ2VMb2FkaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNpemVDYW52YXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNpemVDYW52YXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g0JTQvtC00LDRgtC60L7QstCwINC/0LXRgNC10LLRltGA0LrQsCDQv9GW0YHQu9GPINGJ0LUg0L7QtNC90L7Qs9C+INC60LDQtNGA0YNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc2l6ZUNhbnZhcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhbnZhcy53aWR0aCA+IDAgJiYgY2FudmFzLmhlaWdodCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydEFuaW1hdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDQr9C60YnQviDQstGB0LUg0YnQtSDQvdC10L/RgNCw0LLQuNC70YzQvdC40Lkg0YDQvtC30LzRltGALCDQv9C+0LLRgtC+0YDRjtGU0LzQvlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQod2FpdEZvclBhZ2VSZWFkeSwgNTApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9LCA0MDApOyAvLyDQp9C10LrQsNGU0LzQviDRgtGA0L7RhdC4INCx0ZbQu9GM0YjQtSDQvdGW0LYgaGlkZUxvYWRlciAoMzAwbXMpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g0KHRgtC+0YDRltC90LrQsCDQs9C+0YLQvtCy0LAsINCy0YHRgtCw0L3QvtCy0LvRjtGU0LzQviDRgNC+0LfQvNGW0YAg0YLQsCDQt9Cw0L/Rg9GB0LrQsNGU0LzQvlxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzaXplQ2FudmFzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc2l6ZUNhbnZhcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc2l6ZUNhbnZhcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2FudmFzLndpZHRoID4gMCAmJiBjYW52YXMuaGVpZ2h0ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRBbmltYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgd2FpdEZvclBhZ2VSZWFkeSgpO1xuICAgICAgICB9O1xuICAgICAgICBzbm93Zmxha2VJbWFnZS5zcmMgPSAnaW1nL3Nub3dmbGFrZS5wbmcnO1xuICAgICAgIFxuXG4gICAgICAgIC8vINCa0LvQsNGBINC00LvRjyDRgdC90ZbQttC40L3QutC4XG4gICAgICAgIGNsYXNzIFNub3dmbGFrZSB7XG4gICAgICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnggPSBNYXRoLnJhbmRvbSgpICogKGNhbnZhcy53aWR0aCB8fCB3aW5kb3cuaW5uZXJXaWR0aCk7XG4gICAgICAgICAgICAgICAgdGhpcy55ID0gLTIwO1xuICAgICAgICAgICAgICAgIHRoaXMuc2l6ZSA9IE1hdGgucmFuZG9tKCkgKiAoU05PV0ZMQUtFX01BWF9TSVpFIC0gU05PV0ZMQUtFX01JTl9TSVpFKSArIFNOT1dGTEFLRV9NSU5fU0laRTtcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVkID0gTWF0aC5yYW5kb20oKSAqIChTTk9XRkxBS0VfTUFYX1NQRUVEIC0gU05PV0ZMQUtFX01JTl9TUEVFRCkgKyBTTk9XRkxBS0VfTUlOX1NQRUVEO1xuICAgICAgICAgICAgICAgIHRoaXMud2luZCA9IChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIFNOT1dGTEFLRV9XSU5EX1JBTkdFO1xuICAgICAgICAgICAgICAgIHRoaXMub3BhY2l0eSA9IE1hdGgucmFuZG9tKCkgKiAwLjUgKyAwLjU7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3RhdGlvbiA9IE1hdGgucmFuZG9tKCkgKiBNYXRoLlBJICogMjtcbiAgICAgICAgICAgICAgICB0aGlzLnJvdGF0aW9uU3BlZWQgPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiAwLjAyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1cGRhdGUoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy55ICs9IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICAgICAgdGhpcy54ICs9IHRoaXMud2luZCArIChNYXRoLnNpbih0aGlzLnkgKiAwLjAxKSAqIDAuMik7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3RhdGlvbiArPSB0aGlzLnJvdGF0aW9uU3BlZWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRyYXcoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpbWFnZUxvYWRlZCkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vINCf0LXRgNC10LLRltGA0LrQsCDRh9C4IGNhbnZhcyDQvNCw0ZQg0L/RgNCw0LLQuNC70YzQvdC40Lkg0YDQvtC30LzRltGAXG4gICAgICAgICAgICAgICAgaWYgKGNhbnZhcy53aWR0aCA9PT0gMCB8fCBjYW52YXMuaGVpZ2h0ID09PSAwKSByZXR1cm47XG5cbiAgICAgICAgICAgICAgICBjdHguc2F2ZSgpO1xuICAgICAgICAgICAgICAgIGN0eC5nbG9iYWxBbHBoYSA9IHRoaXMub3BhY2l0eTtcbiAgICAgICAgICAgICAgICBjdHgudHJhbnNsYXRlKHRoaXMueCwgdGhpcy55KTtcbiAgICAgICAgICAgICAgICBjdHgucm90YXRlKHRoaXMucm90YXRpb24pO1xuICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICAgICAgICAgIHNub3dmbGFrZUltYWdlLFxuICAgICAgICAgICAgICAgICAgICAtdGhpcy5zaXplIC8gMixcbiAgICAgICAgICAgICAgICAgICAgLXRoaXMuc2l6ZSAvIDIsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaXplXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBjdHgucmVzdG9yZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpc09mZlNjcmVlbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy55ID4gY2FudmFzLmhlaWdodCArIDIwIHx8IFxuICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnggPCAtMjAgfHwgXG4gICAgICAgICAgICAgICAgICAgICAgIHRoaXMueCA+IGNhbnZhcy53aWR0aCArIDIwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlU25vd2ZsYWtlKCkge1xuICAgICAgICAgICAgaWYgKHNub3dmbGFrZXMubGVuZ3RoIDwgU05PV0ZMQUtFX0NPVU5UKSB7XG4gICAgICAgICAgICAgICAgc25vd2ZsYWtlcy5wdXNoKG5ldyBTbm93Zmxha2UoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiB1cGRhdGVTbm93Zmxha2VzKCkge1xuICAgICAgICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIGlmIChub3cgLSBsYXN0U25vd2ZsYWtlVGltZSA+IFNOT1dGTEFLRV9TUEFXTl9JTlRFUlZBTCkge1xuICAgICAgICAgICAgICAgIGNyZWF0ZVNub3dmbGFrZSgpO1xuICAgICAgICAgICAgICAgIGxhc3RTbm93Zmxha2VUaW1lID0gbm93O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gc25vd2ZsYWtlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgIHNub3dmbGFrZXNbaV0udXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgaWYgKHNub3dmbGFrZXNbaV0uaXNPZmZTY3JlZW4oKSkge1xuICAgICAgICAgICAgICAgICAgICBzbm93Zmxha2VzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBkcmF3U25vd2ZsYWtlcygpIHtcbiAgICAgICAgICAgIC8vINCf0LXRgNC10LLRltGA0LrQsCDRh9C4IGNhbnZhcyDQvNCw0ZQg0L/RgNCw0LLQuNC70YzQvdC40Lkg0YDQvtC30LzRltGAINC/0LXRgNC10LQg0LzQsNC70Y7QstCw0L3QvdGP0LxcbiAgICAgICAgICAgIGlmIChjYW52YXMud2lkdGggPT09IDAgfHwgY2FudmFzLmhlaWdodCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJlc2l6ZUNhbnZhcygpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgICAgc25vd2ZsYWtlcy5mb3JFYWNoKHNub3dmbGFrZSA9PiB7XG4gICAgICAgICAgICAgICAgc25vd2ZsYWtlLmRyYXcoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbiAgICAgICAgICAgIC8vINCf0LXRgNC10LLRltGA0Y/RlNC80L4g0YDQvtC30LzRltGAIGNhbnZhcyDQvdCwINC/0L7Rh9Cw0YLQutGDINC60L7QttC90L7Qs9C+INC60LDQtNGA0YMgKNGC0ZbQu9GM0LrQuCDRj9C60YnQviDQstGW0L0g0L3QtdC/0YDQsNCy0LjQu9GM0L3QuNC5KVxuICAgICAgICAgICAgaWYgKGNhbnZhcy53aWR0aCA9PT0gMCB8fCBjYW52YXMuaGVpZ2h0ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmVzaXplQ2FudmFzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHVwZGF0ZVNub3dmbGFrZXMoKTtcbiAgICAgICAgICAgIGRyYXdTbm93Zmxha2VzKCk7XG4gICAgICAgICAgICBhbmltYXRpb25JZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHN0YXJ0QW5pbWF0aW9uKCkge1xuICAgICAgICAgICAgaWYgKGFuaW1hdGlvbklkKSB7XG4gICAgICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uSWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYW5pbWF0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g0JfRg9C/0LjQvdGP0ZTQvNC+INCw0L3RltC80LDRhtGW0Y4g0L/RgNC4INCy0LjRhdC+0LTRliDQtyB2aWV3cG9ydFxuICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgICAgICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFhbmltYXRpb25JZCAmJiBpbWFnZUxvYWRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRBbmltYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhbmltYXRpb25JZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uSWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uSWQgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUoY2FudmFzKTtcbiAgICB9XG4gICAgXG4gICAgbG9hZFRyYW5zbGF0aW9ucygpXG4gICAgICAgIC50aGVuKGluaXQpIC8vINC30LDQv9GD0YHQuiDRltC90ZbRgtGDINGB0YLQvtGA0ZbQvdC60LhcblxuXG5cblxuXG4gICAgLy8gY29uc3QgbG5nQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sbmctYnRuXCIpXG4gICAgLy9cbiAgICAvLyAvLyDQktGB0YLQsNC90L7QstC70Y7RlNC80L4g0YLQtdC60YHRgiDQutC90L7Qv9C60Lgg0L3QsCDQv9C+0YLQvtGH0L3RgyDQsNC60YLQuNCy0L3RgyDQvNC+0LLRg1xuICAgIC8vIGZ1bmN0aW9uIHVwZGF0ZUxhbmd1YWdlQnV0dG9uKCkge1xuICAgIC8vICAgICAvLyDQktC40LrQvtGA0LjRgdGC0L7QstGD0ZTQvNC+INGC0YMg0YHQsNC80YMg0LvQvtCz0ZbQutGDLCDRidC+INGWINC00LvRjyDQstC40LfQvdCw0YfQtdC90L3RjyBsb2NhbGVcbiAgICAvLyAgICAgbGV0IGN1cnJlbnRMb2NhbGUgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxlXCIpIHx8IFwiaHJcIjtcbiAgICAvLyAgICAgaWYgKGhyTGVuZykgY3VycmVudExvY2FsZSA9ICdocic7XG4gICAgLy8gICAgIGlmIChlbkxlbmcpIGN1cnJlbnRMb2NhbGUgPSAnZW4nO1xuICAgIC8vICAgICBpZiAobG5nQnRuKSB7XG4gICAgLy8gICAgICAgICBsbmdCdG4udGV4dENvbnRlbnQgPSBjdXJyZW50TG9jYWxlO1xuICAgIC8vICAgICB9XG4gICAgLy8gfVxuICAgIC8vXG4gICAgLy8gLy8g0J7QvdC+0LLQu9GO0ZTQvNC+INC60L3QvtC/0LrRgyDQv9GA0Lgg0LfQsNCy0LDQvdGC0LDQttC10L3QvdGWICjQv9GW0YHQu9GPINCy0LjQt9C90LDRh9C10L3QvdGPIGxvY2FsZSlcbiAgICAvLyB1cGRhdGVMYW5ndWFnZUJ1dHRvbigpO1xuXG4gICAgLy8gaWYgKGxuZ0J0bikge1xuICAgIC8vICAgICBsbmdCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAvLyAgICAgICAgIC8vINCS0LjQt9C90LDRh9Cw0ZTQvNC+INC/0L7RgtC+0YfQvdGDINC80L7QstGDINC/0LXRgNC10LQg0L/QtdGA0LXQvNC40LrQsNC90L3Rj9C8XG4gICAgLy8gICAgICAgICBsZXQgY3VycmVudExvY2FsZSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJsb2NhbGVcIikgfHwgXCJoclwiO1xuICAgIC8vICAgICAgICAgaWYgKGhyTGVuZykgY3VycmVudExvY2FsZSA9ICdocic7XG4gICAgLy8gICAgICAgICBpZiAoZW5MZW5nKSBjdXJyZW50TG9jYWxlID0gJ2VuJztcbiAgICAvL1xuICAgIC8vICAgICAgICAgaWYgKGN1cnJlbnRMb2NhbGUgPT09IFwiZW5cIikge1xuICAgIC8vICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJsb2NhbGVcIik7XG4gICAgLy8gICAgICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJsb2NhbGVcIiwgXCJlblwiKTtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gfVxuICAgIC8vXG4gICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWJ0blwiKT8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAvLyAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LXRlc3RcIik/LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpO1xuICAgIC8vIH0pO1xuXG4gICAgLy8g0KLQuNC80YfQsNGB0L7QstC40Lkg0L7QsSfRlNC60YIg0Lcg0LTQsNC90LjQvNC4INC/0YDQviDQv9GA0L7QvNGW0LbQutC4INGC0LjQttC90ZbQslxuICAgIC8vIFRPRE86INCX0LDQvNGW0L3QuNGC0Lgg0L3QsCDQtNCw0L3RliDQtyDQsdC10LrQtdC90LTRg1xuICAgIC8vINCf0YDQuNC60LvQsNC0INGB0YLRgNGD0LrRgtGD0YDQuCDQtNCw0L3QuNGFINC3INCx0LXQutC10L3QtNGDOlxuICAgIC8vIHtcbiAgICAvLyAgICAgMTogeyBzdGFydDogXCIyMDI1LTEyLTE1VDAwOjAwOjAwXCIsIGVuZDogXCIyMDI1LTEyLTIxVDIzOjU5OjU5XCIgfSxcbiAgICAvLyAgICAgMjogeyBzdGFydDogXCIyMDI1LTEyLTIyVDAwOjAwOjAwXCIsIGVuZDogXCIyMDI1LTEyLTI4VDIzOjU5OjU5XCIgfSxcbiAgICAvLyAgICAgLi4uXG4gICAgLy8gfVxuICAgIC8vINCU0LvRjyDRltC90YLQtdCz0YDQsNGG0ZbRlyDQtyDQsdC10LrQtdC90LTQvtC8OiDQt9Cw0LzRltC90LjRgtC4INGG0LXQuSDQvtCxJ9GU0LrRgiDQvdCwINC00LDQvdGWINC3IEFQSVxuICAgIC8vINCd0LDQv9GA0LjQutC70LDQtDogY29uc3Qgd2Vla3NEYXRhID0gYXdhaXQgcmVxdWVzdCgnL2FwaS93ZWVrcycpO1xuICAgIGNvbnN0IHdlZWtzRGF0YSA9IHtcbiAgICAgICAgMToge1xuICAgICAgICAgICAgc3RhcnQ6IFwiMjAyNS0xMi0xNVQwMDowMDowMFwiLFxuICAgICAgICAgICAgZW5kOiBcIjIwMjUtMTItMjFUMjM6NTk6NTlcIlxuICAgICAgICB9LFxuICAgICAgICAyOiB7XG4gICAgICAgICAgICBzdGFydDogXCIyMDI1LTEyLTIyVDAwOjAwOjAwXCIsXG4gICAgICAgICAgICBlbmQ6IFwiMjAyNS0xMi0yOFQyMzo1OTo1OVwiXG4gICAgICAgIH0sXG4gICAgICAgIDM6IHtcbiAgICAgICAgICAgIHN0YXJ0OiBcIjIwMjUtMTItMjlUMDA6MDA6MDBcIixcbiAgICAgICAgICAgIGVuZDogXCIyMDI2LTAxLTA0VDIzOjU5OjU5XCJcbiAgICAgICAgfSxcbiAgICAgICAgNDoge1xuICAgICAgICAgICAgc3RhcnQ6IFwiMjAyNi0wMS0wNVQwMDowMDowMFwiLFxuICAgICAgICAgICAgZW5kOiBcIjIwMjYtMDEtMTFUMjM6NTk6NTlcIlxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vINCk0YPQvdC60YbRltGPINC00LvRjyDQstC40LfQvdCw0YfQtdC90L3RjyDQsNC60YLQuNCy0L3QvtCz0L4g0YLQuNC20L3RjyDQvdCwINC+0YHQvdC+0LLRliDQtNCw0L3QuNGFINC3INC+0LEn0ZTQutGC0LBcbiAgICBmdW5jdGlvbiBnZXRBY3RpdmVXZWVrKHdlZWtzRGF0YSkge1xuICAgICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGxldCBhY3RpdmVXZWVrSW5kZXggPSBudWxsO1xuXG4gICAgICAgIC8vINCf0LXRgNC10LLRltGA0LrQsCDQutC+0LbQvdC+0LPQviDRgtC40LbQvdGPXG4gICAgICAgIGZvciAoY29uc3Qgd2Vla051bSBpbiB3ZWVrc0RhdGEpIHtcbiAgICAgICAgICAgIGNvbnN0IHdlZWsgPSB3ZWVrc0RhdGFbd2Vla051bV07XG4gICAgICAgICAgICBjb25zdCBzdGFydCA9IG5ldyBEYXRlKHdlZWsuc3RhcnQpO1xuICAgICAgICAgICAgY29uc3QgZW5kID0gbmV3IERhdGUod2Vlay5lbmQpO1xuXG4gICAgICAgICAgICBpZiAoY3VycmVudERhdGUgPj0gc3RhcnQgJiYgY3VycmVudERhdGUgPD0gZW5kKSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlV2Vla0luZGV4ID0gcGFyc2VJbnQod2Vla051bSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYWN0aXZlV2Vla0luZGV4O1xuICAgIH1cblxuICAgIC8vINCG0L3RltGG0ZbQsNC70ZbQt9Cw0YbRltGPINGB0LXQutGG0ZbRlyDRltCz0L7RgCDQtyDQsNCy0YLQvtC80LDRgtC40YfQvdC40Lwg0LLQuNC30L3QsNGH0LXQvdC90Y/QvCDRgtC40LbQvdGPXG4gICAgZnVuY3Rpb24gaW5pdEdhbWVzV2VlaygpIHtcbiAgICAgICAgLy8g0JLQuNC30L3QsNGH0LDRlNC80L4g0LDQutGC0LjQstC90LjQuSDRgtC40LbQtNC10L3RjCDQvdCwINC+0YHQvdC+0LLRliDQtNCw0L3QuNGFINC3INC+0LEn0ZTQutGC0LBcbiAgICAgICAgbGV0IGFjdGl2ZVdlZWsgPSBnZXRBY3RpdmVXZWVrKHdlZWtzRGF0YSkgfHwgMTtcblxuICAgICAgICAvLyDQntCx0LzQtdC20LXQvdC90Y8g0LTQviA0INGC0LjQttC90ZbQslxuICAgICAgICBpZiAoYWN0aXZlV2VlayA+IDQpIGFjdGl2ZVdlZWsgPSA0O1xuXG4gICAgICAgIC8vINCf0YDQuNGF0L7QstGD0LLQsNC90L3RjyDQstGB0ZbRhSDRgdC/0LjRgdC60ZbQsiDRltCz0L7RgFxuICAgICAgICBjb25zdCBnYW1lTGlzdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2FtZXNfX2xpc3QnKTtcbiAgICAgICAgZ2FtZUxpc3RzLmZvckVhY2gobGlzdCA9PiB7XG4gICAgICAgICAgICBsaXN0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8g0J/QvtC60LDQtyDRgtGW0LvRjNC60Lgg0LDQutGC0LjQstC90L7Qs9C+INGC0LjQttC90Y9cbiAgICAgICAgY29uc3QgY3VycmVudExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZ2FtZXNfX2xpc3QuX3dlZWske2FjdGl2ZVdlZWt9YCk7XG4gICAgICAgIGlmIChjdXJyZW50TGlzdCkge1xuICAgICAgICAgICAgY3VycmVudExpc3QuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g0JDQstGC0L7QvNCw0YLQuNGH0L3QtSDQtNC+0LTQsNCy0LDQvdC90Y8gZGF0YS3QsNGC0YDQuNCx0YPRgtGW0LIg0LTQu9GPINGC0YDQtdC60ZbQvdCz0YMg0YLQsCDQstGB0YLQsNC90L7QstC70LXQvdC90Y8g0L/QvtGB0LjQu9Cw0L3RjFxuICAgICAgICBhdXRvQWRkRGF0YUJ1dHRvbnMoKTtcbiAgICAgICAgc2V0R2FtZUxpbmtzKCk7XG4gICAgfVxuXG4gICAgLy8g0KLQuNC80YfQsNGB0L7QstC40Lkg0L7QsSfRlNC60YIg0Lcg0LzQsNC/0ZbQvdCz0L7QvCBnYW1lLWlkINC90LAgVVJMXG4gICAgLy8gVE9ETzog0JfQsNC80ZbQvdC40YLQuCDQvdCwINC00LDQvdGWINC3INCx0LXQutC10L3QtNGDXG4gICAgLy8g0J/RgNC40LrQu9Cw0LQg0YHRgtGA0YPQutGC0YPRgNC4INC00LDQvdC40YUg0Lcg0LHQtdC60LXQvdC00YM6XG4gICAgLy8ge1xuICAgIC8vICAgICBcIndlZWsxX2dhbWUxXCI6IFwiL2Nhc2luby9zaG93LWdhbWUvZ2FtZS1zbHVnLTFcIixcbiAgICAvLyAgICAgXCJ3ZWVrMV9nYW1lMlwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL2dhbWUtc2x1Zy0yXCIsXG4gICAgLy8gICAgIC4uLlxuICAgIC8vIH1cbiAgICAvLyDQlNC70Y8g0ZbQvdGC0LXQs9GA0LDRhtGW0Zcg0Lcg0LHQtdC60LXQvdC00L7QvDogY29uc3QgZ2FtZXNMaW5rcyA9IGF3YWl0IHJlcXVlc3QoJy9hcGkvZ2FtZXMvbGlua3MnKTtcbiAgICBjb25zdCBnYW1lc0xpbmtzID0ge1xuICAgICAgICAvLyBXZWVrIDFcbiAgICAgICAgXCJ3ZWVrMV9nYW1lMVwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWsxX2dhbWUyXCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazFfZ2FtZTNcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrMV9nYW1lNFwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWsxX2dhbWU1XCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazFfZ2FtZTZcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrMV9nYW1lN1wiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWsxX2dhbWU4XCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazFfZ2FtZTlcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrMV9nYW1lMTBcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgLy8gV2VlayAyXG4gICAgICAgIFwid2VlazJfZ2FtZTFcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrMl9nYW1lMlwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWsyX2dhbWUzXCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazJfZ2FtZTRcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrMl9nYW1lNVwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWsyX2dhbWU2XCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazJfZ2FtZTdcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrMl9nYW1lOFwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWsyX2dhbWU5XCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazJfZ2FtZTEwXCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIC8vIFdlZWsgM1xuICAgICAgICBcIndlZWszX2dhbWUxXCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazNfZ2FtZTJcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrM19nYW1lM1wiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWszX2dhbWU0XCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazNfZ2FtZTVcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrM19nYW1lNlwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWszX2dhbWU3XCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazNfZ2FtZThcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrM19nYW1lOVwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWszX2dhbWUxMFwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICAvLyBXZWVrIDRcbiAgICAgICAgXCJ3ZWVrNF9nYW1lMVwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWs0X2dhbWUyXCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazRfZ2FtZTNcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrNF9nYW1lNFwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWs0X2dhbWU1XCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazRfZ2FtZTZcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrNF9nYW1lN1wiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWs0X2dhbWU4XCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazRfZ2FtZTlcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrNF9nYW1lMTBcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIlxuICAgIH07XG5cbiAgICAvLyDQktGB0YLQsNC90L7QstC70LXQvdC90Y8g0YPQvdGW0LrQsNC70YzQvdC40YUg0L/QvtGB0LjQu9Cw0L3RjCDQtNC70Y8g0LrQvtC20L3QvtGXINCz0YDQuFxuICAgIGZ1bmN0aW9uIHNldEdhbWVMaW5rcygpIHtcbiAgICAgICAgY29uc3QgZ2FtZUxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdhbWVzX19pdGVtLWxpbmtbZGF0YS1nYW1lLWlkXScpO1xuICAgICAgICBcbiAgICAgICAgZ2FtZUxpbmtzLmZvckVhY2gobGluayA9PiB7XG4gICAgICAgICAgICBjb25zdCBnYW1lSWQgPSBsaW5rLmdldEF0dHJpYnV0ZSgnZGF0YS1nYW1lLWlkJyk7XG4gICAgICAgICAgICBpZiAoZ2FtZUlkICYmIGdhbWVzTGlua3NbZ2FtZUlkXSkge1xuICAgICAgICAgICAgICAgIGxpbmsuaHJlZiA9IGdhbWVzTGlua3NbZ2FtZUlkXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8g0JDQstGC0L7QvNCw0YLQuNGH0L3QtSDQtNC+0LTQsNCy0LDQvdC90Y8gZGF0YS3QsNGC0YDQuNCx0YPRgtGW0LIg0LTQu9GPINGC0YDQtdC60ZbQvdCz0YNcbiAgICBmdW5jdGlvbiBhdXRvQWRkRGF0YUJ1dHRvbnMoKSB7XG4gICAgICAgIGNvbnN0IGdhbWVMaXN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYW1lc19fbGlzdCcpO1xuICAgICAgICBcbiAgICAgICAgZ2FtZUxpc3RzLmZvckVhY2gobGlzdCA9PiB7XG4gICAgICAgICAgICBjb25zdCB3ZWVrTWF0Y2ggPSBsaXN0LmNsYXNzTmFtZS5tYXRjaCgvX3dlZWsoXFxkKykvKTtcbiAgICAgICAgICAgIGlmICghd2Vla01hdGNoKSByZXR1cm47XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHdlZWsgPSB3ZWVrTWF0Y2hbMV07XG4gICAgICAgICAgICBjb25zdCBpdGVtcyA9IGxpc3QucXVlcnlTZWxlY3RvckFsbCgnLmdhbWVzX19pdGVtJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZ2FtZU51bWJlciA9IGluZGV4ICsgMTtcbiAgICAgICAgICAgICAgICBjb25zdCBidXR0b25OYW1lID0gYHdlZWske3dlZWt9R2FtZSR7Z2FtZU51bWJlcn1gO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IGxpbmtFbCA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLmdhbWVzX19pdGVtLWxpbmsnKTtcbiAgICAgICAgICAgICAgICBpZiAobGlua0VsKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vINCe0L3QvtCy0LvRjtGU0LzQviBkYXRhLWJ1dHRvbiDRj9C60YnQviDRidC1INC90LUg0LLRgdGC0LDQvdC+0LLQu9C10L3QviDQsNCx0L4g0L3QtdC60L7RgNC10LrRgtC90LVcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudEJ1dHRvbiA9IGxpbmtFbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghY3VycmVudEJ1dHRvbiB8fCAhY3VycmVudEJ1dHRvbi5pbmNsdWRlcyhgd2VlayR7d2Vla31HYW1lYCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtFbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtYnV0dG9uJywgYnV0dG9uTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8g0JLRgdGC0LDQvdC+0LLQu9GO0ZTQvNC+IGRhdGEtcHJvbW8g0Y/QutGJ0L4g0YnQtSDQvdC1INCy0YHRgtCw0L3QvtCy0LvQtdC90L5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFsaW5rRWwuZ2V0QXR0cmlidXRlKCdkYXRhLXByb21vJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtFbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvbW8nLCAncmF6aW5hXzIwMjZfaHInKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cblxufSkoKTtcbiJdfQ==
