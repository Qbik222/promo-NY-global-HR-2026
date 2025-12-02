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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwibWFpblBhZ2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJsb2FkZXIiLCJyZXN1bHRzVGFibGUiLCJyZXN1bHRzVGFibGVPdGhlciIsImhyTGVuZyIsImVuTGVuZyIsImxvY2FsZSIsImRlYnVnIiwiaGlkZUxvYWRlciIsImkxOG5EYXRhIiwidHJhbnNsYXRlU3RhdGUiLCJ1c2VySWQiLCJyZXF1ZXN0IiwibGluayIsImV4dHJhT3B0aW9ucyIsImZldGNoIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJvayIsIkVycm9yIiwianNvbiIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsInJlcG9ydEVycm9yIiwic3R5bGUiLCJkaXNwbGF5Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwic3RhcnRzV2l0aCIsIlByb21pc2UiLCJyZWplY3QiLCJjbGFzc0xpc3QiLCJhZGQiLCJib2R5Iiwib3ZlcmZsb3ciLCJyZW1vdmUiLCJpbml0IiwidHJ5RGV0ZWN0VXNlcklkIiwicXVpY2tDaGVja0FuZFJlbmRlciIsImluaXRHYW1lc1dlZWsiLCJpbml0UHJvZ3Jlc3NCYXIiLCJpbml0UGFydGljaXBhdGVDYW52YXMiLCJpbml0U25vd2ZsYWtlc0NhbnZhcyIsInNldFRpbWVvdXQiLCJhZGRFdmVudExpc3RlbmVyIiwiZHJvcGRvd25zIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJkcm9wZG93biIsImV2ZW50Iiwib3BlbiIsInN1bW1hcnkiLCJzdW1tYXJ5UmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImN1cnJlbnRTY3JvbGxZIiwic2Nyb2xsWSIsInBhZ2VZT2Zmc2V0IiwidGFyZ2V0U2Nyb2xsWSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInNjcm9sbFRvIiwiTWF0aCIsIm1heCIsImJlaGF2aW9yIiwic3RvcmUiLCJzdGF0ZSIsImdldFN0YXRlIiwiYXV0aCIsImlzQXV0aG9yaXplZCIsImlkIiwiZ191c2VyX2lkIiwiYXR0ZW1wdHMiLCJtYXhBdHRlbXB0cyIsImF0dGVtcHRJbnRlcnZhbCIsIndhaXRGb3JVc2VySWQiLCJyZXNvbHZlIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJsb2FkVHJhbnNsYXRpb25zIiwidHJhbnNsYXRlIiwicmVwb3J0RGF0YSIsIm9yaWdpbiIsInVzZXJpZCIsImVycm9yVGV4dCIsInRleHQiLCJtZXNzYWdlIiwidHlwZSIsIm5hbWUiLCJzdGFjayIsIm1ldGhvZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ3YXJuIiwiZWxlbXMiLCJsZW5ndGgiLCJlbGVtIiwia2V5IiwiZ2V0QXR0cmlidXRlIiwiaW5uZXJIVE1MIiwicmVtb3ZlQXR0cmlidXRlIiwibG9nIiwicmVmcmVzaExvY2FsaXplZENsYXNzIiwiZWxlbWVudCIsImxhbmciLCJyZW5kZXJVc2VycyIsIndlZWtOdW0iLCJ1c2VyRGF0YSIsIk51bWJlciIsIndlZWtPYmoiLCJmaW5kIiwidyIsIndlZWsiLCJkYXRhIiwiQXJyYXkiLCJpc0FycmF5IiwidXNlcnMiLCJpc1N0YWdlRW5kZWQiLCJ3aW5uZXJBZGRpdGlvbmFsUHJpemUiLCJ1Iiwid2lubmVyIiwiY3VycmVudFVzZXIiLCJ1c2VyIiwiaXNWZXJpZmllZFVzZXIiLCJwb2ludHMiLCJwb3B1bGF0ZVVzZXJzVGFibGUiLCJjdXJyZW50VXNlcklkIiwic2Vjb25kVGFibGVPdGhlciIsInNlY29uZFRhYmxlIiwiaXNUb3BDdXJyZW50VXNlciIsInNsaWNlIiwic29tZSIsInRvcFVzZXJzTGVuZ3RoIiwidG9wVXNlcnMiLCJkaXNwbGF5VXNlciIsImlzQ3VycmVudFVzZXIiLCJ0YWJsZSIsInJlbmRlclJvdyIsIm9wdGlvbnMiLCJoaWdobGlnaHQiLCJuZWlnaGJvciIsInVzZXJSb3ciLCJjcmVhdGVFbGVtZW50IiwidXNlclBsYWNlIiwiaW5kZXhPZiIsInByaXplS2V5IiwiZ2V0UHJpemVUcmFuc2xhdGlvbktleSIsInRyYW5zbGF0ZUtleSIsIm1hc2tVc2VySWQiLCJ0b0ZpeGVkIiwiYXBwZW5kIiwiaW5kZXgiLCJjYW52YXMiLCJwZXJjZW50RWxlbWVudCIsImN0eCIsImdldENvbnRleHQiLCJiYXJIZWlnaHQiLCJzZWdtZW50V2lkdGgiLCJzZWdtZW50SGVpZ2h0Iiwic2VnbWVudEdhcCIsInBhZGRpbmciLCJzZWdtZW50UmFkaXVzIiwiY3VycmVudFByb2dyZXNzIiwidGFyZ2V0UHJvZ3Jlc3MiLCJsb2FkaW5nRHVyYXRpb24iLCJzdGFydFRpbWUiLCJEYXRlIiwibm93IiwiYW5pbWF0aW9uSWQiLCJtYXhTZWdtZW50cyIsImlzTG9hZGluZ0NvbXBsZXRlIiwicmVzaXplQ2FudmFzIiwiY29udGFpbmVyIiwicGFyZW50RWxlbWVudCIsImNvbnRhaW5lcldpZHRoIiwib2Zmc2V0V2lkdGgiLCJ3aWR0aCIsImhlaWdodCIsImF2YWlsYWJsZVdpZHRoIiwic2VnbWVudFdpdGhHYXAiLCJmbG9vciIsImRyYXdQcm9ncmVzc0JhciIsInByb2dyZXNzIiwiY2xlYXJSZWN0Iiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJzdHJva2VSZWN0IiwiZmlsbGVkU2VnbWVudHMiLCJmaWxsU3R5bGUiLCJjZW50ZXJZIiwiaSIsIngiLCJ5IiwiYmVnaW5QYXRoIiwicm91bmRSZWN0IiwiciIsIm1vdmVUbyIsImxpbmVUbyIsInF1YWRyYXRpY0N1cnZlVG8iLCJjbG9zZVBhdGgiLCJmaWxsIiwidXBkYXRlUHJvZ3Jlc3MiLCJlbGFwc2VkIiwicGVyY2VudCIsInRleHRDb250ZW50IiwicmVzaXplVGltZW91dCIsImNsZWFyVGltZW91dCIsImluaXRJY29uc0FuaW1hdGlvbiIsImR1cmF0aW9uIiwiaWNvbnMiLCJvcmlnaW5hbFRyYW5zZm9ybXMiLCJNYXAiLCJzZWxlY3RvciIsImljb24iLCJjb21wdXRlZFN0eWxlIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIm9yaWdpbmFsVHJhbnNmb3JtIiwidHJhbnNmb3JtIiwic2V0Iiwib3BhY2l0eSIsInRyYW5zaXRpb24iLCJpY29uQ291bnQiLCJnZXQiLCJwYXJ0aWNpcGF0ZUNhbnZhcyIsInBhcnRpY2lwYXRlRGVlcnMiLCJwYXJ0aWNpcGF0ZURlZXJXaWR0aCIsInBhcnRpY2lwYXRlRGVlckhlaWdodCIsImNhbnZhc0NsaWNrSGFuZGxlcnNBdHRhY2hlZCIsInRvdWNoU3RhcnRYIiwidG91Y2hTdGFydFkiLCJoYW5kbGVQYXJ0aWNpcGF0ZUNhbnZhc0NsaWNrIiwicmVjdCIsInNjYWxlWCIsInNjYWxlWSIsImNsaWVudFgiLCJjbGllbnRZIiwiY2xpY2tYIiwibGVmdCIsImNsaWNrWSIsImRlZXIiLCJpc1BvaW50SW5zaWRlIiwiaGFuZGxlQ2xpY2siLCJoYW5kbGVQYXJ0aWNpcGF0ZUNhbnZhc1RvdWNoU3RhcnQiLCJ0b3VjaCIsInRvdWNoZXMiLCJoYW5kbGVQYXJ0aWNpcGF0ZUNhbnZhc1RvdWNoRW5kIiwiY2hhbmdlZFRvdWNoZXMiLCJkZWx0YVgiLCJhYnMiLCJkZWx0YVkiLCJkaXN0YW5jZSIsInNxcnQiLCJpc01vYmlsZSIsImlubmVyV2lkdGgiLCJDQU5WQVNfV0lEVEgiLCJDQU5WQVNfSEVJR0hUIiwiVFJFRV9XSURUSCIsIlRSRUVfSEVJR0hUIiwiRlJBTUVTX1BFUl9ST1ciLCJUT1RBTF9ST1dTIiwiU1BSSVRFX1NIRUVUX1dJRFRIIiwiU1BSSVRFX1NIRUVUX0hFSUdIVCIsIkZSQU1FX1dJRFRIIiwiRlJBTUVfSEVJR0hUIiwiREVFUl9TQ0FMRSIsIkRFRVJfV0lEVEgiLCJERUVSX0hFSUdIVCIsInRyZWVYIiwidHJlZVkiLCJGUkFNRV9ERUxBWSIsIldBTEtJTkdfRlJBTUVTIiwiRlJBTUVfUkVQRUFUIiwiSURMRV9NSU5fRFVSQVRJT04iLCJJRExFX01BWF9EVVJBVElPTiIsIkRFRVJfU1RBVEUiLCJXQUxLSU5HIiwiSURMRSIsIlBFVFRJTkciLCJQRVRUSU5HX01JTl9EVVJBVElPTiIsIlBFVFRJTkdfTUFYX0RVUkFUSU9OIiwiSEVBUlRfU0laRV9NSU4iLCJIRUFSVF9TSVpFX01BWCIsIkhFQVJUX1JJU0VfRElTVEFOQ0UiLCJIRUFSVF9TUEFXTl9JTlRFUlZBTCIsImZyYW1lQ291bnRlciIsIkhlYXJ0Iiwic2l6ZSIsImhlYXJ0SW1hZ2UiLCJzY2FsZSIsInJpc2VTcGVlZCIsImlzVmlzaWJsZSIsImNvbXBsZXRlIiwic2F2ZSIsImdsb2JhbEFscGhhIiwiZHJhd1NpemUiLCJkcmF3WCIsImRyYXdZIiwiZHJhd0ltYWdlIiwicmVzdG9yZSIsIkRlZXIiLCJzdGFydFgiLCJzdGFydFkiLCJtaW5YIiwibWF4WCIsInNwZWVkIiwiekluZGV4IiwiZGlyZWN0aW9uIiwiZnJhbWVJbmRleCIsImZyYW1lUmVwZWF0Q291bnRlciIsImlkbGVUaW1lciIsImlkbGVEdXJhdGlvbiIsInBldHRpbmdUaW1lciIsInBldHRpbmdEdXJhdGlvbiIsInByZXZpb3VzU3RhdGUiLCJzYXZlZFgiLCJzYXZlZFkiLCJoZWFydHMiLCJoZWFydFNwYXduQ291bnRlciIsImRlZXJXaWR0aCIsImRlZXJIZWlnaHQiLCJyYW5kb20iLCJvZmZzZXRYIiwiaGVhcnRYIiwiaGVhcnRZIiwicHVzaCIsInJvdyIsImNvbCIsInNob3VsZFVwZGF0ZUZyYW1lIiwic3Bhd25IZWFydCIsImZpbHRlciIsImhlYXJ0IiwidXBkYXRlIiwic3ByaXRlSW1hZ2UiLCJmcmFtZVdpZHRoIiwiZnJhbWVIZWlnaHQiLCJnZXRTcHJpdGVGcmFtZUluZGV4Iiwic291cmNlWCIsInNvdXJjZVkiLCJkcmF3IiwiaW1hZ2VzIiwiYmFja2dyb3VuZCIsIkltYWdlIiwidHJlZSIsImRlZXJTcHJpdGUiLCJkZWVycyIsIkRFRVJfQ09VTlQiLCJkZWVyQ29uZmlncyIsImNvbmZpZyIsImltYWdlc0xvYWRlZCIsInRvdGFsSW1hZ2VzIiwib25JbWFnZUxvYWQiLCJkcmF3Q2FudmFzIiwic3RhcnRBbmltYXRpb24iLCJvbmxvYWQiLCJzcmMiLCJwYXNzaXZlIiwiVFJFRV9aX0lOREVYIiwiZHJhd2FibGVFbGVtZW50cyIsInNvcnQiLCJhIiwiYiIsImFuaW1hdGUiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsIm9ic2VydmUiLCJuZXdJc01vYmlsZSIsImZhdlBhZ2UiLCJTTk9XRkxBS0VfQ09VTlQiLCJTTk9XRkxBS0VfTUlOX1NJWkUiLCJTTk9XRkxBS0VfTUFYX1NJWkUiLCJTTk9XRkxBS0VfTUlOX1NQRUVEIiwiU05PV0ZMQUtFX01BWF9TUEVFRCIsIlNOT1dGTEFLRV9XSU5EX1JBTkdFIiwiU05PV0ZMQUtFX1NQQVdOX0lOVEVSVkFMIiwic25vd2ZsYWtlcyIsImxhc3RTbm93Zmxha2VUaW1lIiwibmV3V2lkdGgiLCJuZXdIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJpbm5lckhlaWdodCIsInNub3dmbGFrZUltYWdlIiwiaW1hZ2VMb2FkZWQiLCJ3YWl0Rm9yUGFnZVJlYWR5IiwiaXNQYWdlTG9hZGluZyIsImNvbnRhaW5zIiwiU25vd2ZsYWtlIiwid2luZCIsInJvdGF0aW9uIiwiUEkiLCJyb3RhdGlvblNwZWVkIiwic2luIiwicm90YXRlIiwiY3JlYXRlU25vd2ZsYWtlIiwidXBkYXRlU25vd2ZsYWtlcyIsImlzT2ZmU2NyZWVuIiwic3BsaWNlIiwiZHJhd1Nub3dmbGFrZXMiLCJzbm93Zmxha2UiLCJ3ZWVrc0RhdGEiLCJzdGFydCIsImVuZCIsImdldEFjdGl2ZVdlZWsiLCJjdXJyZW50RGF0ZSIsImFjdGl2ZVdlZWtJbmRleCIsInBhcnNlSW50IiwiYWN0aXZlV2VlayIsImdhbWVMaXN0cyIsImxpc3QiLCJjdXJyZW50TGlzdCIsImF1dG9BZGREYXRhQnV0dG9ucyIsInNldEdhbWVMaW5rcyIsImdhbWVzTGlua3MiLCJnYW1lTGlua3MiLCJnYW1lSWQiLCJ3ZWVrTWF0Y2giLCJjbGFzc05hbWUiLCJtYXRjaCIsIml0ZW1zIiwiaXRlbSIsImdhbWVOdW1iZXIiLCJidXR0b25OYW1lIiwibGlua0VsIiwiY3VycmVudEJ1dHRvbiIsImluY2x1ZGVzIiwic2V0QXR0cmlidXRlIl0sIm1hcHBpbmdzIjoiOzs7K0NBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBLENBQUMsWUFBWTtFQUVULElBQU1BLE1BQU0sR0FBRyxzQ0FBc0M7RUFFckQsSUFBTUMsUUFBUSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxXQUFXLENBQUM7SUFDaERDLE1BQU0sR0FBR0YsUUFBUSxDQUFDQyxhQUFhLENBQUMsa0JBQWtCLENBQUM7SUFDbkRFLFlBQVksR0FBR0gsUUFBUSxDQUFDQyxhQUFhLENBQUMsUUFBUSxDQUFDO0lBQy9DRyxpQkFBaUIsR0FBR0osUUFBUSxDQUFDQyxhQUFhLENBQUMsYUFBYSxDQUFDO0VBRTdELElBQU1JLE1BQU0sR0FBR0wsUUFBUSxDQUFDQyxhQUFhLENBQUMsU0FBUyxDQUFDO0VBQ2hELElBQU1LLE1BQU0sR0FBR04sUUFBUSxDQUFDQyxhQUFhLENBQUMsU0FBUyxDQUFDO0VBRWhELElBQUlNLE1BQU0sR0FBRyxJQUFJO0VBQ2pCOztFQUVBLElBQUlGLE1BQU0sRUFBRUUsTUFBTSxHQUFHLElBQUk7RUFDekIsSUFBSUQsTUFBTSxFQUFFQyxNQUFNLEdBQUcsSUFBSTtFQUV6QixJQUFJQyxLQUFLLEdBQUcsS0FBSztFQUVqQixJQUFJQSxLQUFLLEVBQUVDLFVBQVUsRUFBRTtFQUV2QixJQUFJQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO0VBQ2pCLElBQU1DLGNBQWMsR0FBRyxLQUFLO0VBQzVCLElBQUlDLE1BQU0sR0FBRyxJQUFJO0VBQ2pCOztFQUVBLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFPLENBQWFDLElBQUksRUFBRUMsWUFBWSxFQUFFO0lBQzFDLE9BQU9DLEtBQUssQ0FBQ2xCLE1BQU0sR0FBR2dCLElBQUk7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Q0FBQyxZQUFZLENBQUM7TUFDcEQsSUFBSSxDQUFDRixTQUFTLEVBQUU7TUFFaEIsSUFBTXBULElBQUksR0FBR29ULFNBQVMsQ0FBQyxDQUFDLENBQUM7TUFDekIsSUFBTUcsS0FBSyxHQUFHVixJQUFJLENBQUMvVyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUM7TUFFbkR5WCxLQUFLLENBQUN4WCxPQUFPLENBQUMsVUFBQ3lYLElBQUksRUFBRWpSLEtBQUssRUFBSztRQUMzQixJQUFNa1IsVUFBVSxHQUFHbFIsS0FBSyxHQUFHLENBQUM7UUFDNUIsSUFBTW1SLFVBQVUsaUJBQVUxVCxJQUFJLGlCQUFPeVQsVUFBVSxDQUFFO1FBRWpELElBQU1FLE1BQU0sR0FBR0gsSUFBSSxDQUFDM2EsYUFBYSxDQUFDLG1CQUFtQixDQUFDO1FBQ3RELElBQUk4YSxNQUFNLEVBQUU7VUFDUjtVQUNBLElBQU1DLGFBQWEsR0FBR0QsTUFBTSxDQUFDelUsWUFBWSxDQUFDLGFBQWEsQ0FBQztVQUN4RCxJQUFJLENBQUMwVSxhQUFhLElBQUksQ0FBQ0EsYUFBYSxDQUFDQyxRQUFRLGVBQVE3VCxJQUFJLFVBQU8sRUFBRTtZQUM5RDJULE1BQU0sQ0FBQ0csWUFBWSxDQUFDLGFBQWEsRUFBRUosVUFBVSxDQUFDO1VBQ2xEO1VBQ0E7VUFDQSxJQUFJLENBQUNDLE1BQU0sQ0FBQ3pVLFlBQVksQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUNwQ3lVLE1BQU0sQ0FBQ0csWUFBWSxDQUFDLFlBQVksRUFBRSxnQkFBZ0IsQ0FBQztVQUN2RDtRQUNKO01BQ0osQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDO0VBQ047QUFHSixDQUFDLEdBQUciLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XG5cbiAgICBjb25zdCBhcGlVUkwgPSAnaHR0cHM6Ly9mYXYtcHJvbS5jb20vYXBpX2JsYWNrX3ByaXplJ1xuXG4gICAgY29uc3QgbWFpblBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhdi1wYWdlXCIpLFxuICAgICAgICBsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNwaW5uZXItb3ZlcmxheVwiKSxcbiAgICAgICAgcmVzdWx0c1RhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YWJsZVwiKSxcbiAgICAgICAgcmVzdWx0c1RhYmxlT3RoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RhYmxlT3RoZXJcIilcblxuICAgIGNvbnN0IGhyTGVuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNockxlbmcnKTtcbiAgICBjb25zdCBlbkxlbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW5MZW5nJyk7XG5cbiAgICBsZXQgbG9jYWxlID0gXCJoclwiXG4gICAgLy8gbGV0IGxvY2FsZSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJsb2NhbGVcIikgfHwgXCJoclwiXG5cbiAgICBpZiAoaHJMZW5nKSBsb2NhbGUgPSAnaHInO1xuICAgIGlmIChlbkxlbmcpIGxvY2FsZSA9ICdlbic7XG5cbiAgICBsZXQgZGVidWcgPSBmYWxzZVxuXG4gICAgaWYgKGRlYnVnKSBoaWRlTG9hZGVyKClcblxuICAgIGxldCBpMThuRGF0YSA9IHt9O1xuICAgIGNvbnN0IHRyYW5zbGF0ZVN0YXRlID0gZmFsc2U7XG4gICAgbGV0IHVzZXJJZCA9IG51bGw7XG4gICAgLy8gbGV0IHVzZXJJZCA9IE51bWJlcihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpKSA/PyBudWxsXG5cbiAgICBjb25zdCByZXF1ZXN0ID0gZnVuY3Rpb24gKGxpbmssIGV4dHJhT3B0aW9ucykge1xuICAgICAgICByZXR1cm4gZmV0Y2goYXBpVVJMICsgbGluaywge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC4uLihleHRyYU9wdGlvbnMgfHwge30pXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghcmVzLm9rKSB0aHJvdyBuZXcgRXJyb3IoJ0FQSSBlcnJvcicpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0FQSSByZXF1ZXN0IGZhaWxlZDonLCBlcnIpO1xuXG4gICAgICAgICAgICAgICAgcmVwb3J0RXJyb3IoZXJyKTtcblxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXYtcGFnZScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLnN0YXJ0c1dpdGgoXCJodHRwczovL3d3dy5mYXZiZXQuaHIvXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9wcm9tb2NpamUvcHJvbW9jaWphL3N0dWIvJztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvcHJvbW9zL3Byb21vL3N0dWIvJztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlkZUxvYWRlcigpe1xuICAgICAgICBsb2FkZXIuY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiXG4gICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5yZW1vdmUoXCJsb2FkaW5nXCIpXG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgbGV0IGF0dGVtcHRzID0gMDtcbiAgICAgICAgY29uc3QgbWF4QXR0ZW1wdHMgPSAyMDtcbiAgICAgICAgY29uc3QgYXR0ZW1wdEludGVydmFsID0gNTA7XG5cbiAgICAgICAgZnVuY3Rpb24gdHJ5RGV0ZWN0VXNlcklkKCkge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5zdG9yZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gd2luZG93LnN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgICAgICAgICAgdXNlcklkID0gc3RhdGUuYXV0aC5pc0F1dGhvcml6ZWQgJiYgc3RhdGUuYXV0aC5pZCB8fCAnJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAod2luZG93LmdfdXNlcl9pZCkge1xuICAgICAgICAgICAgICAgIHVzZXJJZCA9IHdpbmRvdy5nX3VzZXJfaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBxdWlja0NoZWNrQW5kUmVuZGVyKCkge1xuICAgICAgICAgICAgaW5pdEdhbWVzV2VlaygpO1xuICAgICAgICAgICAgaW5pdFByb2dyZXNzQmFyKCk7XG4gICAgICAgICAgICBpbml0UGFydGljaXBhdGVDYW52YXMoKTtcbiAgICAgICAgICAgIGluaXRTbm93Zmxha2VzQ2FudmFzKCk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGhpZGVMb2FkZXIsIDMwMCk7XG5cbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGluaXRQYXJ0aWNpcGF0ZUNhbnZhcyk7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm9yaWVudGF0aW9uY2hhbmdlXCIsIGluaXRQYXJ0aWNpcGF0ZUNhbnZhcyk7XG5cbiAgICAgICAgICAgIC8vIEZpeCBkcm9wZG93biBzY3JvbGwgaXNzdWUgLSBwcmV2ZW50IHBhZ2UgZnJvbSBzaGlmdGluZyB1cCB3aGVuIG9wZW5pbmcgZHJvcGRvd25cbiAgICAgICAgICAgIGNvbnN0IGRyb3Bkb3ducyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcm9wZG93bicpO1xuICAgICAgICAgICAgZHJvcGRvd25zLmZvckVhY2goKGRyb3Bkb3duKSA9PiB7XG4gICAgICAgICAgICAgICAgZHJvcGRvd24uYWRkRXZlbnRMaXN0ZW5lcigndG9nZ2xlJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub3Blbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRHJvcGRvd24gaXMgb3BlbmluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3VtbWFyeSA9IHRoaXMucXVlcnlTZWxlY3Rvcignc3VtbWFyeScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN1bW1hcnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBHZXQgc3VtbWFyeSBwb3NpdGlvbiByZWxhdGl2ZSB0byB2aWV3cG9ydFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN1bW1hcnlSZWN0ID0gc3VtbWFyeS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIHN1bW1hcnkgaXMgbmVhciB0aGUgdG9wIG9mIHZpZXdwb3J0ICh3aXRoaW4gMTAwcHggZnJvbSB0b3ApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN1bW1hcnlSZWN0LnRvcCA8IDEwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDYWxjdWxhdGUgaG93IG11Y2ggdG8gc2Nyb2xsIHRvIGtlZXAgc3VtbWFyeSB2aXNpYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRTY3JvbGxZID0gd2luZG93LnNjcm9sbFkgfHwgd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXRTY3JvbGxZID0gY3VycmVudFNjcm9sbFkgKyBzdW1tYXJ5UmVjdC50b3AgLSAxMjA7IC8vIDEyMHB4IG9mZnNldCBmcm9tIHRvcFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFVzZSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgZm9yIHNtb290aCBzY3JvbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiBNYXRoLm1heCgwLCB0YXJnZXRTY3JvbGxZKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHdhaXRGb3JVc2VySWQgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdHJ5RGV0ZWN0VXNlcklkKCk7XG4gICAgICAgICAgICAgICAgaWYgKHVzZXJJZCB8fCBhdHRlbXB0cyA+PSBtYXhBdHRlbXB0cykge1xuICAgICAgICAgICAgICAgICAgICBxdWlja0NoZWNrQW5kUmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGF0dGVtcHRzKys7XG4gICAgICAgICAgICB9LCBhdHRlbXB0SW50ZXJ2YWwpO1xuICAgICAgICB9KTtcblxuICAgICAgICBhd2FpdCB3YWl0Rm9yVXNlcklkO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvYWRUcmFuc2xhdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiByZXF1ZXN0KGAvbmV3LXRyYW5zbGF0ZXMvJHtsb2NhbGV9YClcbiAgICAgICAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgICAgIGkxOG5EYXRhID0ganNvbjtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGUoKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBtdXRhdGlvbk9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKG11dGF0aW9ucykge1xuICAgICAgICAgICAgICAgIC8vICAgICBtdXRhdGlvbk9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgdHJhbnNsYXRlKCk7XG4gICAgICAgICAgICAgICAgLy8gICAgIG11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXROb2RlLCB7IGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgICAgICAgICAvLyBtdXRhdGlvbk9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoYXJkY29yZVRlbm5pc1wiKSwge1xuICAgICAgICAgICAgICAgIC8vICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgLy8gICAgIHN1YnRyZWU6IHRydWVcbiAgICAgICAgICAgICAgICAvLyB9KTtcblxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVwb3J0RXJyb3IoZXJyKSB7XG4gICAgICAgIGNvbnN0IHJlcG9ydERhdGEgPSB7XG4gICAgICAgICAgICBvcmlnaW46IHdpbmRvdy5sb2NhdGlvbi5ocmVmLFxuICAgICAgICAgICAgdXNlcmlkOiB1c2VySWQsXG4gICAgICAgICAgICBlcnJvclRleHQ6IGVycj8uZXJyb3IgfHwgZXJyPy50ZXh0IHx8IGVycj8ubWVzc2FnZSB8fCAnVW5rbm93biBlcnJvcicsXG4gICAgICAgICAgICB0eXBlOiBlcnI/Lm5hbWUgfHwgJ1Vua25vd25FcnJvcicsXG4gICAgICAgICAgICBzdGFjazogZXJyPy5zdGFjayB8fCAnJ1xuICAgICAgICB9O1xuXG4gICAgICAgIGZldGNoKCdodHRwczovL2Zhdi1wcm9tLmNvbS9hcGktY21zL3JlcG9ydHMvYWRkJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcG9ydERhdGEpXG4gICAgICAgIH0pLmNhdGNoKGNvbnNvbGUud2Fybik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdHJhbnNsYXRlKCkge1xuICAgICAgICBjb25zdCBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRyYW5zbGF0ZV0nKVxuICAgICAgICBpZiAoZWxlbXMgJiYgZWxlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZih0cmFuc2xhdGVTdGF0ZSl7XG4gICAgICAgICAgICAgICAgZWxlbXMuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gZWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgICAgICAgICAgICAgICAgIGVsZW0uaW5uZXJIVE1MID0gaTE4bkRhdGFba2V5XSB8fCAnKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiAgIGtleTogICcgKyBrZXk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpMThuRGF0YVtrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRyYW5zbGF0aW9uIHdvcmtzIVwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChsb2NhbGUgPT09ICdlbicpIHtcbiAgICAgICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5hZGQoJ2VuJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmVmcmVzaExvY2FsaXplZENsYXNzKG1haW5QYWdlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWZyZXNoTG9jYWxpemVkQ2xhc3MoZWxlbWVudCkge1xuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IGxhbmcgb2YgWydocicsICdlbiddKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUobGFuZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGxvY2FsZSk7XG4gICAgfVxuXG5cblxuXG4gICAgZnVuY3Rpb24gcmVuZGVyVXNlcnMod2Vla051bSwgdXNlckRhdGEgPSBbXSkge1xuICAgICAgICB3ZWVrTnVtID0gTnVtYmVyKHdlZWtOdW0pO1xuICAgICAgICBjb25zdCB3ZWVrT2JqID0gdXNlckRhdGEuZmluZCh3ID0+IHcud2VlayA9PT0gd2Vla051bSk7XG4gICAgICAgIGlmICghd2Vla09iaiB8fCAhd2Vla09iai5kYXRhIHx8ICFBcnJheS5pc0FycmF5KHdlZWtPYmouZGF0YS51c2VycykpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ9Cd0LXQstGW0YDQvdCwINGB0YLRgNGD0LrRgtGD0YDQsCDQtNCw0L3QuNGFJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpc1N0YWdlRW5kZWQgPSB3ZWVrT2JqLmRhdGEuaXNTdGFnZUVuZGVkXG5cbiAgICAgICAgdXNlckRhdGEgPSB3ZWVrT2JqLmRhdGEudXNlcnM7XG5cbiAgICAgICAgY29uc3Qgd2lubmVyQWRkaXRpb25hbFByaXplID0gdXNlckRhdGEuZmluZCh1ID0+IHtcbiAgICAgICAgICAgIGlmKHUud2lubmVyID09PSB0cnVlKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRVc2VyID0gdXNlckRhdGEuZmluZCh1c2VyID0+IHVzZXIudXNlcmlkID09PSB1c2VySWQpO1xuXG4gICAgICAgIGlmKHVzZXJJZCAmJiAhY3VycmVudFVzZXIgJiYgaXNWZXJpZmllZFVzZXIpe1xuICAgICAgICAgICAgdXNlckRhdGEgPSBbLi4udXNlckRhdGEsIHt1c2VyaWQ6IHVzZXJJZCwgcG9pbnRzOiAwfV1cbiAgICAgICAgfVxuICAgICAgICBwb3B1bGF0ZVVzZXJzVGFibGUodXNlckRhdGEsIHVzZXJJZCwgd2Vla051bSwgY3VycmVudFVzZXIsIGlzVmVyaWZpZWRVc2VyLCBpc1N0YWdlRW5kZWQsIHdpbm5lckFkZGl0aW9uYWxQcml6ZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcG9wdWxhdGVVc2Vyc1RhYmxlKHVzZXJzLCBjdXJyZW50VXNlcklkLCB3ZWVrLCBjdXJyZW50VXNlciwgaXNWZXJpZmllZFVzZXIsIGlzU3RhZ2VFbmRlZCwgd2lubmVyQWRkaXRpb25hbFByaXplKSB7XG4gICAgICAgIGlmICghdXNlcnM/Lmxlbmd0aCkgcmV0dXJuO1xuICAgICAgICByZXN1bHRzVGFibGUuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHJlc3VsdHNUYWJsZU90aGVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBzZWNvbmRUYWJsZU90aGVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBzZWNvbmRUYWJsZS5pbm5lckhUTUwgPSAnJztcblxuXG4gICAgICAgIGNvbnN0IGlzVG9wQ3VycmVudFVzZXIgPSBjdXJyZW50VXNlciAmJiB1c2Vycy5zbGljZSgwLCAxMCkuc29tZSh1c2VyID0+IHVzZXIudXNlcmlkID09PSBjdXJyZW50VXNlcklkKTtcblxuICAgICAgICBjb25zdCB0b3BVc2Vyc0xlbmd0aCA9ICF1c2VySWQgfHwgaXNUb3BDdXJyZW50VXNlciAgPyAxMCA6IDEwO1xuXG4gICAgICAgIGNvbnN0IHRvcFVzZXJzID0gdXNlcnMuc2xpY2UoMCwgdG9wVXNlcnNMZW5ndGgpO1xuXG4gICAgICAgIHRvcFVzZXJzLmZvckVhY2godXNlciA9PiB7XG4gICAgICAgICAgICBkaXNwbGF5VXNlcih1c2VyLCB1c2VyLnVzZXJpZCA9PT0gY3VycmVudFVzZXJJZCwgcmVzdWx0c1RhYmxlLCB0b3BVc2VycywgaXNUb3BDdXJyZW50VXNlciwgd2Vlayk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZihpc1ZlcmlmaWVkVXNlciAmJiAhY3VycmVudFVzZXIpIHtcbiAgICAgICAgICAgIGRpc3BsYXlVc2VyKGN1cnJlbnRVc2VyLCB0cnVlLCByZXN1bHRzVGFibGVPdGhlciwgdXNlcnMsIGZhbHNlLCB3ZWVrKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaXNUb3BDdXJyZW50VXNlciAmJiBjdXJyZW50VXNlcikge1xuICAgICAgICAgICAgZGlzcGxheVVzZXIoY3VycmVudFVzZXIsIHRydWUsIHJlc3VsdHNUYWJsZU90aGVyLCB1c2VycywgZmFsc2UsIHdlZWspO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzcGxheVVzZXIodXNlciwgaXNDdXJyZW50VXNlciwgdGFibGUsIHVzZXJzLCBpc1RvcEN1cnJlbnRVc2VyLCB3ZWVrKSB7XG5cbiAgICAgICAgY29uc3QgcmVuZGVyUm93ID0gKHVzZXJEYXRhLCBvcHRpb25zID0ge30pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgaGlnaGxpZ2h0ID0gZmFsc2UsIG5laWdoYm9yID0gZmFsc2UgfSA9IG9wdGlvbnM7XG4gICAgICAgICAgICBjb25zdCB1c2VyUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoJ3RhYmxlX19yb3cnKTtcblxuICAgICAgICAgICAgY29uc3QgdXNlclBsYWNlID0gdXNlcnMuaW5kZXhPZih1c2VyRGF0YSkgKyAxO1xuICAgICAgICAgICAgY29uc3QgcHJpemVLZXkgPSBkZWJ1ZyA/IG51bGwgOiBnZXRQcml6ZVRyYW5zbGF0aW9uS2V5KHVzZXJQbGFjZSwgd2Vlayk7XG5cbiAgICAgICAgICAgIGlmICh1c2VyUGxhY2UgPD0gMykge1xuICAgICAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZChgcGxhY2Uke3VzZXJQbGFjZX1gKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGhpZ2hsaWdodCB8fCBpc0N1cnJlbnRVc2VyICYmICFuZWlnaGJvcikge1xuICAgICAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZCgneW91Jyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5laWdoYm9yKSB7XG4gICAgICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKCdfbmVpZ2hib3InKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdXNlclJvdy5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHt1c2VyUGxhY2UgPCAxMCA/ICcwJyArIHVzZXJQbGFjZSA6IHVzZXJQbGFjZX1cbiAgICAgICAgICAgICAgICAke2lzQ3VycmVudFVzZXIgJiYgIW5laWdoYm9yID8gJzxzcGFuIGNsYXNzPVwieW91XCI+JyArIHRyYW5zbGF0ZUtleShcInlvdVwiKSArICc8L3NwYW4+JyA6ICcnfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHtpc0N1cnJlbnRVc2VyICYmICFuZWlnaGJvciA/IHVzZXJEYXRhLnVzZXJpZCA6IG1hc2tVc2VySWQodXNlckRhdGEudXNlcmlkKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuICAgICAgICAgICAgICAgICR7TnVtYmVyKHVzZXJEYXRhLnBvaW50cykudG9GaXhlZCgyKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuICAgICAgICAgICAgICAgICR7cHJpemVLZXkgPyB0cmFuc2xhdGVLZXkocHJpemVLZXkpIDogJyAtICd9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcblxuICAgICAgICAgICAgdGFibGUuYXBwZW5kKHVzZXJSb3cpO1xuICAgICAgICB9O1xuICAgICAgICBpZiAoaXNDdXJyZW50VXNlciAmJiAhaXNUb3BDdXJyZW50VXNlcikge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB1c2Vycy5pbmRleE9mKHVzZXIpO1xuICAgICAgICAgICAgaWYgKHVzZXJzW2luZGV4IC0gMV0pIHtcbiAgICAgICAgICAgICAgICByZW5kZXJSb3codXNlcnNbaW5kZXggLSAxXSwgeyBuZWlnaGJvcjogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlbmRlclJvdyh1c2VyLCB7IGhpZ2hsaWdodDogdHJ1ZSB9KTtcbiAgICAgICAgICAgIGlmICh1c2Vyc1tpbmRleCArIDFdKSB7XG4gICAgICAgICAgICAgICAgcmVuZGVyUm93KHVzZXJzW2luZGV4ICsgMV0sIHsgbmVpZ2hib3I6IHRydWUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZW5kZXJSb3codXNlcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0UHJvZ3Jlc3NCYXIoKSB7XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9ncmVzc0JhckNhbnZhcycpO1xuICAgICAgICBjb25zdCBwZXJjZW50RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9ncmVzc1BlcmNlbnQnKTtcbiAgICAgICAgaWYgKCFjYW52YXMgfHwgIXBlcmNlbnRFbGVtZW50KSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIFxuICAgICAgICAvLyDQmtC+0L3RgdGC0LDQvdGC0LhcbiAgICAgICAgY29uc3QgYmFySGVpZ2h0ID0gMjA7IC8vINCS0LjRgdC+0YLQsCDQv9GA0L7Qs9GA0LXRgS3QsdCw0YDRg1xuICAgICAgICBjb25zdCBzZWdtZW50V2lkdGggPSA0OyAvLyDQqNC40YDQuNC90LAg0L7QtNC90L7Qs9C+INGB0LXQs9C80LXQvdGC0LBcbiAgICAgICAgY29uc3Qgc2VnbWVudEhlaWdodCA9IDE0OyAvLyDQktC40YHQvtGC0LAg0L7QtNC90L7Qs9C+INGB0LXQs9C80LXQvdGC0LBcbiAgICAgICAgY29uc3Qgc2VnbWVudEdhcCA9IDI7IC8vINCf0YDQvtC80ZbQttC+0Log0LzRltC2INGB0LXQs9C80LXQvdGC0LDQvNC4XG4gICAgICAgIGNvbnN0IHBhZGRpbmcgPSAyOyAvLyDQktGW0LTRgdGC0YPQvyDQstGW0LQg0LrRgNCw0ZfQslxuICAgICAgICBjb25zdCBzZWdtZW50UmFkaXVzID0gMTsgLy8gQm9yZGVyIHJhZGl1cyDQtNC70Y8g0YHQtdCz0LzQtdC90YLRltCyXG4gICAgICAgIFxuICAgICAgICAvLyDQn9Cw0YDQsNC80LXRgtGA0Lgg0LDQvdGW0LzQsNGG0ZbRlyDQt9Cw0LLQsNC90YLQsNC20LXQvdC90Y9cbiAgICAgICAgbGV0IGN1cnJlbnRQcm9ncmVzcyA9IDE7IC8vINCf0L7Rh9C40L3QsNGU0LzQviDQtyAxJVxuICAgICAgICBjb25zdCB0YXJnZXRQcm9ncmVzcyA9IDEwMDsgLy8g0KbRltC70YzQvtCy0LjQuSDQv9GA0L7Qs9GA0LXRgVxuICAgICAgICBjb25zdCBsb2FkaW5nRHVyYXRpb24gPSAzMDAwOyAvLyDQotGA0LjQstCw0LvRltGB0YLRjCDQt9Cw0LLQsNC90YLQsNC20LXQvdC90Y86IDMg0YHQtdC60YPQvdC00LhcbiAgICAgICAgbGV0IHN0YXJ0VGltZSA9IERhdGUubm93KCk7XG4gICAgICAgIGxldCBhbmltYXRpb25JZCA9IG51bGw7XG4gICAgICAgIGxldCBtYXhTZWdtZW50cyA9IDA7XG4gICAgICAgIGxldCBpc0xvYWRpbmdDb21wbGV0ZSA9IGZhbHNlO1xuICAgICAgICBcbiAgICAgICAgZnVuY3Rpb24gcmVzaXplQ2FudmFzKCkge1xuICAgICAgICAgICAgLy8g0J7RgtGA0LjQvNGD0ZTQvNC+INGA0L7Qt9C80ZbRgNC4INC60L7QvdGC0LXQudC90LXRgNCwXG4gICAgICAgICAgICBjb25zdCBjb250YWluZXIgPSBjYW52YXMucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lcldpZHRoID0gY29udGFpbmVyLm9mZnNldFdpZHRoIHx8IDc2ODtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0JLRgdGC0LDQvdC+0LLQu9GO0ZTQvNC+INGA0L7Qt9C80ZbRgNC4IGNhbnZhc1xuICAgICAgICAgICAgY2FudmFzLndpZHRoID0gY29udGFpbmVyV2lkdGg7XG4gICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gYmFySGVpZ2h0O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQoNC+0LfRgNCw0YXQvtCy0YPRlNC80L4g0LrRltC70YzQutGW0YHRgtGMINGB0LXQs9C80LXQvdGC0ZbQsiwg0YnQviDQv9C+0LzRltGB0YLRj9GC0YzRgdGPXG4gICAgICAgICAgICBjb25zdCBhdmFpbGFibGVXaWR0aCA9IGNvbnRhaW5lcldpZHRoIC0gKHBhZGRpbmcgKiAyKTtcbiAgICAgICAgICAgIGNvbnN0IHNlZ21lbnRXaXRoR2FwID0gc2VnbWVudFdpZHRoICsgc2VnbWVudEdhcDtcbiAgICAgICAgICAgIG1heFNlZ21lbnRzID0gTWF0aC5mbG9vcihhdmFpbGFibGVXaWR0aCAvIHNlZ21lbnRXaXRoR2FwKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0J/QtdGA0LXQvNCw0LvRjNC+0LLRg9GU0LzQviDQtyDQv9C+0YLQvtGH0L3QuNC8INC/0YDQvtCz0YDQtdGB0L7QvFxuICAgICAgICAgICAgaWYgKGN1cnJlbnRQcm9ncmVzcyA+IDApIHtcbiAgICAgICAgICAgICAgICBkcmF3UHJvZ3Jlc3NCYXIoY3VycmVudFByb2dyZXNzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZnVuY3Rpb24gZHJhd1Byb2dyZXNzQmFyKHByb2dyZXNzKSB7XG4gICAgICAgICAgICAvLyDQntGH0LjRidCw0ZTQvNC+IGNhbnZhc1xuICAgICAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQnNCw0LvRjtGU0LzQviDRgNCw0LzQutGDICjQsdGW0LvQuNC5INC/0YDRj9C80L7QutGD0YLQvdC40LopXG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnI0ZGRkZGRic7XG4gICAgICAgICAgICBjdHgubGluZVdpZHRoID0gMTtcbiAgICAgICAgICAgIGN0eC5zdHJva2VSZWN0KDAuNSwgMC41LCBjYW52YXMud2lkdGggLSAxLCBjYW52YXMuaGVpZ2h0IC0gMSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCg0L7Qt9GA0LDRhdC+0LLRg9GU0LzQviDQutGW0LvRjNC60ZbRgdGC0Ywg0LfQsNC/0L7QstC90LXQvdC40YUg0YHQtdCz0LzQtdC90YLRltCyXG4gICAgICAgICAgICBjb25zdCBmaWxsZWRTZWdtZW50cyA9IE1hdGguZmxvb3IoKHByb2dyZXNzIC8gMTAwKSAqIG1heFNlZ21lbnRzKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0JzQsNC70Y7RlNC80L4g0LfQsNC/0L7QstC90LXQvdGWINGB0LXQs9C80LXQvdGC0Lgg0Lcg0LfQsNC+0LrRgNGD0LPQu9C10L3QuNC80Lgg0LrRg9GC0LDQvNC4XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gJyNGRkZGRkYnO1xuICAgICAgICAgICAgY29uc3QgY2VudGVyWSA9IChiYXJIZWlnaHQgLSBzZWdtZW50SGVpZ2h0KSAvIDI7IC8vINCS0LXRgNGC0LjQutCw0LvRjNC90LUg0YbQtdC90YLRgNGD0LLQsNC90L3Rj1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbGxlZFNlZ21lbnRzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCB4ID0gcGFkZGluZyArIGkgKiAoc2VnbWVudFdpZHRoICsgc2VnbWVudEdhcCk7XG4gICAgICAgICAgICAgICAgY29uc3QgeSA9IGNlbnRlclk7XG5cbiAgICAgICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgaWYgKGN0eC5yb3VuZFJlY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g0KHRg9GH0LDRgdC90LjQuSDQvNC10YLQvtC0ICjQv9GW0LTRgtGA0LjQvNGD0ZTRgtGM0YHRjyDQsiDQvdC+0LLQuNGFINCx0YDQsNGD0LfQtdGA0LDRhSlcbiAgICAgICAgICAgICAgICAgICAgY3R4LnJvdW5kUmVjdCh4LCB5LCBzZWdtZW50V2lkdGgsIHNlZ21lbnRIZWlnaHQsIHNlZ21lbnRSYWRpdXMpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEZhbGxiYWNrINC00LvRjyDRgdGC0LDRgNC40YUg0LHRgNCw0YPQt9C10YDRltCyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHIgPSBzZWdtZW50UmFkaXVzO1xuICAgICAgICAgICAgICAgICAgICBjdHgubW92ZVRvKHggKyByLCB5KTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmxpbmVUbyh4ICsgc2VnbWVudFdpZHRoIC0gciwgeSk7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHggKyBzZWdtZW50V2lkdGgsIHksIHggKyBzZWdtZW50V2lkdGgsIHkgKyByKTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmxpbmVUbyh4ICsgc2VnbWVudFdpZHRoLCB5ICsgc2VnbWVudEhlaWdodCAtIHIpO1xuICAgICAgICAgICAgICAgICAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4ICsgc2VnbWVudFdpZHRoLCB5ICsgc2VnbWVudEhlaWdodCwgeCArIHNlZ21lbnRXaWR0aCAtIHIsIHkgKyBzZWdtZW50SGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmxpbmVUbyh4ICsgciwgeSArIHNlZ21lbnRIZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4LCB5ICsgc2VnbWVudEhlaWdodCwgeCwgeSArIHNlZ21lbnRIZWlnaHQgLSByKTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmxpbmVUbyh4LCB5ICsgcik7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHgsIHksIHggKyByLCB5KTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBmdW5jdGlvbiB1cGRhdGVQcm9ncmVzcygpIHtcbiAgICAgICAgICAgIGNvbnN0IGVsYXBzZWQgPSBEYXRlLm5vdygpIC0gc3RhcnRUaW1lO1xuICAgICAgICAgICAgbGV0IHByb2dyZXNzID0gMSArIChlbGFwc2VkIC8gbG9hZGluZ0R1cmF0aW9uKSAqIDk5OyAvLyDQktGW0LQgMSUg0LTQviAxMDAlXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCe0LHQvNC10LbRg9GU0LzQviDQv9GA0L7Qs9GA0LXRgSDQtNC+IDEwMCVcbiAgICAgICAgICAgIGlmIChwcm9ncmVzcyA+PSB0YXJnZXRQcm9ncmVzcykge1xuICAgICAgICAgICAgICAgIHByb2dyZXNzID0gdGFyZ2V0UHJvZ3Jlc3M7XG4gICAgICAgICAgICAgICAgaXNMb2FkaW5nQ29tcGxldGUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjdXJyZW50UHJvZ3Jlc3MgPSBwcm9ncmVzcztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0J7QvdC+0LLQu9GO0ZTQvNC+INCy0ZbQtNC+0LHRgNCw0LbQtdC90L3Rj1xuICAgICAgICAgICAgZHJhd1Byb2dyZXNzQmFyKHByb2dyZXNzKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0J7QvdC+0LLQu9GO0ZTQvNC+INCy0ZbQtNGB0L7RgtC60LggKNGC0ZbQu9GM0LrQuCDRhtGW0LvRliDRh9C40YHQu9CwKVxuICAgICAgICAgICAgY29uc3QgcGVyY2VudCA9IE1hdGguZmxvb3IocHJvZ3Jlc3MpO1xuICAgICAgICAgICAgcGVyY2VudEVsZW1lbnQudGV4dENvbnRlbnQgPSBwZXJjZW50ICsgJyUnO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQn9GA0L7QtNC+0LLQttGD0ZTQvNC+INCw0L3RltC80LDRhtGW0Y4g0LTQviDQt9Cw0LLQtdGA0YjQtdC90L3RjyDQt9Cw0LLQsNC90YLQsNC20LXQvdC90Y9cbiAgICAgICAgICAgIGlmICghaXNMb2FkaW5nQ29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICBhbmltYXRpb25JZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGVQcm9ncmVzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vINCG0L3RltGG0ZbQsNC70ZbQt9GD0ZTQvNC+INGA0L7Qt9C80ZbRgNC4IGNhbnZhc1xuICAgICAgICByZXNpemVDYW52YXMoKTtcbiAgICAgICAgXG4gICAgICAgIC8vINCe0LHRgNC+0LHQutCwINC30LzRltC90Lgg0YDQvtC30LzRltGA0YMg0LLRltC60L3QsFxuICAgICAgICBsZXQgcmVzaXplVGltZW91dDtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChyZXNpemVUaW1lb3V0KTtcbiAgICAgICAgICAgIHJlc2l6ZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICByZXNpemVDYW52YXMoKTtcbiAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgLy8g0IbQvdGW0YbRltCw0LvRltC30LDRhtGW0Y8g0LDQvdGW0LzQsNGG0ZbRlyDQv9C+0Y/QstC4INGW0LrQvtC90L7QulxuICAgICAgICBpbml0SWNvbnNBbmltYXRpb24obG9hZGluZ0R1cmF0aW9uKTtcbiAgICAgICAgXG4gICAgICAgIC8vINCX0LDQv9GD0YHQutCw0ZTQvNC+INCw0L3RltC80LDRhtGW0Y4g0Lcg0L3QtdCy0LXQu9C40LrQvtGOINC30LDRgtGA0LjQvNC60L7RjiDQtNC70Y8g0LrQvtGA0LXQutGC0L3QvtCz0L4g0YDQvtC30YDQsNGF0YPQvdC60YMg0YDQvtC30LzRltGA0ZbQslxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICByZXNpemVDYW52YXMoKTtcbiAgICAgICAgICAgICAgICBzdGFydFRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZVByb2dyZXNzKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8g0JDQvdGW0LzQsNGG0ZbRjyDQv9C+0Y/QstC4INGW0LrQvtC90L7QuiDQv9C+INGH0LXRgNC30ZYg0L/RltC0INGH0LDRgSDQt9Cw0LLQsNC90YLQsNC20LXQvdC90Y9cbiAgICBmdW5jdGlvbiBpbml0SWNvbnNBbmltYXRpb24oZHVyYXRpb24pIHtcbiAgICAgICAgY29uc3QgaWNvbnMgPSBbXG4gICAgICAgICAgICAnLndlbGNvbWVfX2RlY29yLWl0ZW0uX2dhbWVwYWQnLFxuICAgICAgICAgICAgJy53ZWxjb21lX19kZWNvci1pdGVtLl9jaGlwJyxcbiAgICAgICAgICAgICcud2VsY29tZV9fZGVjb3ItaXRlbS5fY29pbicsXG4gICAgICAgICAgICAnLndlbGNvbWVfX2RlY29yLWl0ZW0uX2JhbGwnLFxuICAgICAgICAgICAgJy53ZWxjb21lX19kZWNvci1pdGVtLl9jdXAnLFxuICAgICAgICAgICAgJy53ZWxjb21lX19kZWNvci1pdGVtLl9jdWJlJyxcbiAgICAgICAgICAgICcud2VsY29tZV9fZGVjb3ItaXRlbS5fZ2xvYmUnXG4gICAgICAgIF07XG5cbiAgICAgICAgLy8g0JfQsdC10YDRltCz0LDRlNC80L4g0L7RgNC40LPRltC90LDQu9GM0L3RliB0cmFuc2Zvcm0g0LTQu9GPINC60L7QttC90L7RlyDRltC60L7QvdC60LhcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxUcmFuc2Zvcm1zID0gbmV3IE1hcCgpO1xuXG4gICAgICAgIC8vINCh0L/QvtGH0LDRgtC60YMg0L/RgNC40YXQvtCy0YPRlNC80L4g0LLRgdGWINGW0LrQvtC90LrQuFxuICAgICAgICBpY29ucy5mb3JFYWNoKHNlbGVjdG9yID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICAgICAgICAgIGlmIChpY29uKSB7XG4gICAgICAgICAgICAgICAgLy8g0JfQsdC10YDRltCz0LDRlNC80L4g0L7RgNC40LPRltC90LDQu9GM0L3QuNC5IHRyYW5zZm9ybSAo0Y/QutGJ0L4g0ZQgcm90YXRlKVxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShpY29uKTtcbiAgICAgICAgICAgICAgICBjb25zdCBvcmlnaW5hbFRyYW5zZm9ybSA9IGNvbXB1dGVkU3R5bGUudHJhbnNmb3JtO1xuICAgICAgICAgICAgICAgIG9yaWdpbmFsVHJhbnNmb3Jtcy5zZXQoc2VsZWN0b3IsIG9yaWdpbmFsVHJhbnNmb3JtKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyDQktGB0YLQsNC90L7QstC70Y7RlNC80L4g0L/QvtGH0LDRgtC60L7QstC40Lkg0YHRgtCw0L1cbiAgICAgICAgICAgICAgICBpY29uLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgICAgICAgICAgICAgaWNvbi5zdHlsZS50cmFuc2l0aW9uID0gJ29wYWNpdHkgMC40cyBlYXNlLCB0cmFuc2Zvcm0gMC40cyBlYXNlJztcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyDQktGB0YLQsNC90L7QstC70Y7RlNC80L4gc2NhbGUg0Lcg0LfQsdC10YDQtdC20LXQvdC90Y/QvCByb3RhdGVcbiAgICAgICAgICAgICAgICBpZiAob3JpZ2luYWxUcmFuc2Zvcm0gJiYgb3JpZ2luYWxUcmFuc2Zvcm0gIT09ICdub25lJykge1xuICAgICAgICAgICAgICAgICAgICBpY29uLnN0eWxlLnRyYW5zZm9ybSA9IG9yaWdpbmFsVHJhbnNmb3JtICsgJyBzY2FsZSgwLjUpJztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpY29uLnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZSgwLjUpJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vINCg0L7Qt9GA0LDRhdC+0LLRg9GU0LzQviDRltC90YLQtdGA0LLQsNC7INC80ZbQtiDQv9C+0Y/QstC+0Y4g0ZbQutC+0L3QvtC6XG4gICAgICAgIGNvbnN0IGljb25Db3VudCA9IGljb25zLmxlbmd0aDtcbiAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBkdXJhdGlvbiAvIGljb25Db3VudDsgLy8g0KDRltCy0L3QvtC80ZbRgNC90L4g0YDQvtC30L/QvtC00ZbQu9GP0ZTQvNC+INC/0L4g0YfQsNGB0YNcblxuICAgICAgICAvLyDQn9C+0LrQsNC30YPRlNC80L4g0ZbQutC+0L3QutC4INC/0L4g0YfQtdGA0LfRllxuICAgICAgICBpY29ucy5mb3JFYWNoKChzZWxlY3RvciwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICAgICAgICAgICAgICBpZiAoaWNvbikge1xuICAgICAgICAgICAgICAgICAgICBpY29uLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgICAgICAgICAgICAgIC8vINCS0ZbQtNC90L7QstC70Y7RlNC80L4g0L7RgNC40LPRltC90LDQu9GM0L3QuNC5IHRyYW5zZm9ybVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvcmlnaW5hbFRyYW5zZm9ybSA9IG9yaWdpbmFsVHJhbnNmb3Jtcy5nZXQoc2VsZWN0b3IpO1xuICAgICAgICAgICAgICAgICAgICBpZiAob3JpZ2luYWxUcmFuc2Zvcm0gJiYgb3JpZ2luYWxUcmFuc2Zvcm0gIT09ICdub25lJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbi5zdHlsZS50cmFuc2Zvcm0gPSBvcmlnaW5hbFRyYW5zZm9ybTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb24uc3R5bGUudHJhbnNmb3JtID0gJ3NjYWxlKDEpJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIGluZGV4ICogaW50ZXJ2YWwpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyDQl9C80ZbQvdC90ZYg0LTQu9GPINC30LHQtdGA0ZbQs9Cw0L3QvdGPINC/0L7RgdC40LvQsNC90Ywg0L3QsCBjYW52YXMg0YLQsCDQtNCw0L3RliDQtNC70Y8g0L7QsdGA0L7QsdC90LjQutGW0LIg0L/QvtC00ZbQuVxuICAgIGxldCBwYXJ0aWNpcGF0ZUNhbnZhcyA9IG51bGw7XG4gICAgbGV0IHBhcnRpY2lwYXRlRGVlcnMgPSBbXTtcbiAgICBsZXQgcGFydGljaXBhdGVEZWVyV2lkdGggPSAwO1xuICAgIGxldCBwYXJ0aWNpcGF0ZURlZXJIZWlnaHQgPSAwO1xuICAgIGxldCBjYW52YXNDbGlja0hhbmRsZXJzQXR0YWNoZWQgPSBmYWxzZTtcbiAgICBcbiAgICAvLyDQl9C80ZbQvdC90ZYg0LTQu9GPINCy0ZbQtNGB0YLQtdC20LXQvdC90Y8gdG91Y2gg0L/QvtC00ZbQuVxuICAgIGxldCB0b3VjaFN0YXJ0WCA9IDA7XG4gICAgbGV0IHRvdWNoU3RhcnRZID0gMDtcblxuICAgIC8vINCe0LHRgNC+0LHQvdC40Log0LrQu9GW0LrRgyDQv9C+IGNhbnZhc1xuICAgIGZ1bmN0aW9uIGhhbmRsZVBhcnRpY2lwYXRlQ2FudmFzQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgaWYgKCFwYXJ0aWNpcGF0ZUNhbnZhcyB8fCAhcGFydGljaXBhdGVEZWVycy5sZW5ndGgpIHJldHVybjtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHJlY3QgPSBwYXJ0aWNpcGF0ZUNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3Qgc2NhbGVYID0gcGFydGljaXBhdGVDYW52YXMud2lkdGggLyByZWN0LndpZHRoO1xuICAgICAgICBjb25zdCBzY2FsZVkgPSBwYXJ0aWNpcGF0ZUNhbnZhcy5oZWlnaHQgLyByZWN0LmhlaWdodDtcbiAgICAgICAgXG4gICAgICAgIC8vINCe0YLRgNC40LzRg9GU0LzQviDQutC+0L7RgNC00LjQvdCw0YLQuCDQutC70ZbQutGDINCy0ZbQtNC90L7RgdC90L4gY2FudmFzXG4gICAgICAgIGNvbnN0IGNsaWVudFggPSBldmVudC5jbGllbnRYO1xuICAgICAgICBjb25zdCBjbGllbnRZID0gZXZlbnQuY2xpZW50WTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGNsaWNrWCA9IChjbGllbnRYIC0gcmVjdC5sZWZ0KSAqIHNjYWxlWDtcbiAgICAgICAgY29uc3QgY2xpY2tZID0gKGNsaWVudFkgLSByZWN0LnRvcCkgKiBzY2FsZVk7XG4gICAgICAgIFxuICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNGP0ZTQvNC+INGH0Lgg0LrQu9GW0Log0L/QvtGC0YDQsNC/0LjQsiDQvdCwINGP0LrQvtCz0L7RgdGMINC+0LvQtdC90Y9cbiAgICAgICAgcGFydGljaXBhdGVEZWVycy5mb3JFYWNoKGRlZXIgPT4ge1xuICAgICAgICAgICAgaWYgKGRlZXIuaXNQb2ludEluc2lkZShjbGlja1gsIGNsaWNrWSwgcGFydGljaXBhdGVEZWVyV2lkdGgsIHBhcnRpY2lwYXRlRGVlckhlaWdodCkpIHtcbiAgICAgICAgICAgICAgICBkZWVyLmhhbmRsZUNsaWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICAvLyDQntCx0YDQvtCx0L3QuNC6IHRvdWNoc3RhcnQg0LTQu9GPINCy0ZbQtNGB0YLQtdC20LXQvdC90Y8g0L/QvtGH0LDRgtC60YMg0LTQvtGC0LjQutGDXG4gICAgZnVuY3Rpb24gaGFuZGxlUGFydGljaXBhdGVDYW52YXNUb3VjaFN0YXJ0KGV2ZW50KSB7XG4gICAgICAgIGlmICghcGFydGljaXBhdGVDYW52YXMgfHwgIXBhcnRpY2lwYXRlRGVlcnMubGVuZ3RoKSByZXR1cm47XG4gICAgICAgIFxuICAgICAgICBjb25zdCB0b3VjaCA9IGV2ZW50LnRvdWNoZXNbMF07XG4gICAgICAgIGlmICghdG91Y2gpIHJldHVybjtcbiAgICAgICAgXG4gICAgICAgIC8vINCX0LHQtdGA0ZbQs9Cw0ZTQvNC+INC60L7QvtGA0LTQuNC90LDRgtC4INC/0L7Rh9Cw0YLQutGDINC00L7RgtC40LrRg1xuICAgICAgICB0b3VjaFN0YXJ0WCA9IHRvdWNoLmNsaWVudFg7XG4gICAgICAgIHRvdWNoU3RhcnRZID0gdG91Y2guY2xpZW50WTtcbiAgICB9XG4gICAgXG4gICAgLy8g0J7QsdGA0L7QsdC90LjQuiB0b3VjaGVuZCDQtNC70Y8g0LLQuNC30L3QsNGH0LXQvdC90Y8g0YfQuCDRhtC1INGC0LDQvyDRh9C4INGB0LrRgNC+0LtcbiAgICBmdW5jdGlvbiBoYW5kbGVQYXJ0aWNpcGF0ZUNhbnZhc1RvdWNoRW5kKGV2ZW50KSB7XG4gICAgICAgIGlmICghcGFydGljaXBhdGVDYW52YXMgfHwgIXBhcnRpY2lwYXRlRGVlcnMubGVuZ3RoKSByZXR1cm47XG4gICAgICAgIFxuICAgICAgICBjb25zdCB0b3VjaCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdO1xuICAgICAgICBpZiAoIXRvdWNoKSByZXR1cm47XG4gICAgICAgIFxuICAgICAgICAvLyDQoNC+0LfRgNCw0YXQvtCy0YPRlNC80L4g0LLRltC00YHRgtCw0L3RjCDQvNGW0LYgdG91Y2hzdGFydCDRgtCwIHRvdWNoZW5kXG4gICAgICAgIGNvbnN0IGRlbHRhWCA9IE1hdGguYWJzKHRvdWNoLmNsaWVudFggLSB0b3VjaFN0YXJ0WCk7XG4gICAgICAgIGNvbnN0IGRlbHRhWSA9IE1hdGguYWJzKHRvdWNoLmNsaWVudFkgLSB0b3VjaFN0YXJ0WSk7XG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KGRlbHRhWCAqIGRlbHRhWCArIGRlbHRhWSAqIGRlbHRhWSk7XG4gICAgICAgIFxuICAgICAgICAvLyDQr9C60YnQviDQstGW0LTRgdGC0LDQvdGMINCx0ZbQu9GM0YjQtSAxMHB4IC0g0YbQtSDRgdC60YDQvtC7LCDQvdC1INC+0LHRgNC+0LHQu9GP0ZTQvNC+XG4gICAgICAgIGlmIChkaXN0YW5jZSA+IDEwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vINCv0LrRidC+INCy0ZbQtNGB0YLQsNC90Ywg0LzQtdC90YjQtSDQsNCx0L4g0LTQvtGA0ZbQstC90Y7RlCAxMHB4IC0g0YbQtSDRgtCw0L8sINC+0LHRgNC+0LHQu9GP0ZTQvNC+XG4gICAgICAgIGNvbnN0IHJlY3QgPSBwYXJ0aWNpcGF0ZUNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3Qgc2NhbGVYID0gcGFydGljaXBhdGVDYW52YXMud2lkdGggLyByZWN0LndpZHRoO1xuICAgICAgICBjb25zdCBzY2FsZVkgPSBwYXJ0aWNpcGF0ZUNhbnZhcy5oZWlnaHQgLyByZWN0LmhlaWdodDtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGNsaWNrWCA9ICh0b3VjaC5jbGllbnRYIC0gcmVjdC5sZWZ0KSAqIHNjYWxlWDtcbiAgICAgICAgY29uc3QgY2xpY2tZID0gKHRvdWNoLmNsaWVudFkgLSByZWN0LnRvcCkgKiBzY2FsZVk7XG4gICAgICAgIFxuICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNGP0ZTQvNC+INGH0Lgg0YLQsNC/INC/0L7RgtGA0LDQv9C40LIg0L3QsCDRj9C60L7Qs9C+0YHRjCDQvtC70LXQvdGPXG4gICAgICAgIHBhcnRpY2lwYXRlRGVlcnMuZm9yRWFjaChkZWVyID0+IHtcbiAgICAgICAgICAgIGlmIChkZWVyLmlzUG9pbnRJbnNpZGUoY2xpY2tYLCBjbGlja1ksIHBhcnRpY2lwYXRlRGVlcldpZHRoLCBwYXJ0aWNpcGF0ZURlZXJIZWlnaHQpKSB7XG4gICAgICAgICAgICAgICAgZGVlci5oYW5kbGVDbGljaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0UGFydGljaXBhdGVDYW52YXMoKSB7XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwYXJ0aWNpcGF0ZUNhbnZhcycpO1xuICAgICAgICBpZiAoIWNhbnZhcykgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICBcbiAgICAgICAgLy8g0J7QvdC+0LLQu9GO0ZTQvNC+INC/0L7RgdC40LvQsNC90L3RjyDQvdCwIGNhbnZhc1xuICAgICAgICBwYXJ0aWNpcGF0ZUNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgXG4gICAgICAgIC8vINCS0LjQt9C90LDRh9Cw0ZTQvNC+INGH0Lgg0LXQutGA0LDQvSA8PSAxMDUwcHhcbiAgICAgICAgY29uc3QgaXNNb2JpbGUgPSB3aW5kb3cuaW5uZXJXaWR0aCA8PSAxMDUwO1xuICAgICAgICBcbiAgICAgICAgLy8g0JrQvtC90YHRgtCw0L3RgtC4INC00LvRjyDRgNC+0LfQvNGW0YDRltCyINGC0LAg0L/QvtC30LjRhtGW0LlcbiAgICAgICAgY29uc3QgQ0FOVkFTX1dJRFRIID0gaXNNb2JpbGUgPyA3NjggOiAxMzY2O1xuICAgICAgICBjb25zdCBDQU5WQVNfSEVJR0hUID0gaXNNb2JpbGUgPyA0NzAgOiA1MDA7XG4gICAgICAgIFxuICAgICAgICAvLyDQktGB0YLQsNC90L7QstC70Y7RlNC80L4g0YDQvtC30LzRltGA0LggY2FudmFzXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IENBTlZBU19XSURUSDtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IENBTlZBU19IRUlHSFQ7XG4gICAgICAgIFxuICAgICAgICAvLyDQpNGW0LrRgdC+0LLQsNC90ZYg0YDQvtC30LzRltGA0Lgg0LTQtdGA0LXQstCwICjQvdC1INC80LDRgdGI0YLQsNCx0YPRjtGC0YzRgdGPKVxuICAgICAgICBjb25zdCBUUkVFX1dJRFRIID0gMTc1O1xuICAgICAgICBjb25zdCBUUkVFX0hFSUdIVCA9IDE2NztcbiAgICAgICAgXG4gICAgICAgIC8vINCf0LDRgNCw0LzQtdGC0YDQuCDRgdC/0YDQsNC50YIt0LvQuNGB0YLQsFxuICAgICAgICBjb25zdCBGUkFNRVNfUEVSX1JPVyA9IDU7IC8vIDUg0LrQsNC00YDRltCyINCyINGA0Y/QtNC60YNcbiAgICAgICAgY29uc3QgVE9UQUxfUk9XUyA9IDI7IC8vIDIg0YDRj9C00LhcbiAgICAgICAgY29uc3QgU1BSSVRFX1NIRUVUX1dJRFRIID0gMTEwMDsgLy8g0KDQtdCw0LvRjNC90LAg0YjQuNGA0LjQvdCwINGB0L/RgNCw0LnRgi3Qu9C40YHRgtCwXG4gICAgICAgIGNvbnN0IFNQUklURV9TSEVFVF9IRUlHSFQgPSA0Njg7IC8vINCg0LXQsNC70YzQvdCwINCy0LjRgdC+0YLQsCDRgdC/0YDQsNC50YIt0LvQuNGB0YLQsFxuICAgICAgICBcbiAgICAgICAgLy8g0KDQvtC30LzRltGA0Lgg0L7QtNC90L7Qs9C+INC60LDQtNGA0YMg0LIg0YHQv9GA0LDQudGCLdC70LjRgdGC0ZZcbiAgICAgICAgY29uc3QgRlJBTUVfV0lEVEggPSBNYXRoLmZsb29yKFNQUklURV9TSEVFVF9XSURUSCAvIEZSQU1FU19QRVJfUk9XKTsgLy8gMjIwcHhcbiAgICAgICAgY29uc3QgRlJBTUVfSEVJR0hUID0gTWF0aC5mbG9vcihTUFJJVEVfU0hFRVRfSEVJR0hUIC8gVE9UQUxfUk9XUyk7IC8vIDIzNHB4XG4gICAgICAgIFxuICAgICAgICAvLyDQpNGW0LrRgdC+0LLQsNC90ZYg0YDQvtC30LzRltGA0Lgg0L7Qu9C10L3RjyDQvdCwIGNhbnZhcyAo0L3QtSDQvNCw0YHRiNGC0LDQsdGD0Y7RgtGM0YHRjylcbiAgICAgICAgY29uc3QgREVFUl9TQ0FMRSA9IDAuNTsgLy8g0JzQsNGB0YjRgtCw0LEg0LTQu9GPINCy0ZbQtNC+0LHRgNCw0LbQtdC90L3RjyDQvdCwIGNhbnZhc1xuICAgICAgICBjb25zdCBERUVSX1dJRFRIID0gTWF0aC5mbG9vcihGUkFNRV9XSURUSCAqIERFRVJfU0NBTEUpOyBcbiAgICAgICAgY29uc3QgREVFUl9IRUlHSFQgPSBNYXRoLmZsb29yKEZSQU1FX0hFSUdIVCAqIERFRVJfU0NBTEUpO1xuXG4gICAgICAgIC8vINCf0L7Qt9C40YbRltGXINC10LvQtdC80LXQvdGC0ZbQslxuICAgICAgICBsZXQgdHJlZVgsIHRyZWVZO1xuICAgICAgICBpZiAoaXNNb2JpbGUpIHtcbiAgICAgICAgICAgIHRyZWVYID0gMjM1O1xuICAgICAgICAgICAgdHJlZVkgPSBDQU5WQVNfSEVJR0hUIC0gMTUyIC0gVFJFRV9IRUlHSFQ7IFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8g0JTQtdGB0LrRgtC+0L/QvdCwINCy0LXRgNGB0ZbRj1xuICAgICAgICAgICAgdHJlZVggPSBDQU5WQVNfV0lEVEggLyAyIC0gMzAwOyBcbiAgICAgICAgICAgIHRyZWVZID0gQ0FOVkFTX0hFSUdIVCAvIDIgLSBUUkVFX0hFSUdIVCAvIDI7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vINCf0LDRgNCw0LzQtdGC0YDQuCDQsNC90ZbQvNCw0YbRltGXICjRgdC/0ZbQu9GM0L3RliDQtNC70Y8g0LLRgdGW0YUg0L7Qu9C10L3RltCyKVxuICAgICAgICBjb25zdCBGUkFNRV9ERUxBWSA9IDEyOyAvLyDQl9Cw0YLRgNC40LzQutCwINC80ZbQtiDQutCw0LTRgNCw0LzQuFxuICAgICAgICBjb25zdCBXQUxLSU5HX0ZSQU1FUyA9IDU7IC8vINCa0ZbQu9GM0LrRltGB0YLRjCDQutCw0LTRgNGW0LIg0LTQu9GPINGF0L7QtNGM0LHQuFxuICAgICAgICBjb25zdCBGUkFNRV9SRVBFQVQgPSAyOyAvLyDQmtGW0LvRjNC60ZbRgdGC0Ywg0YDQsNC30ZbQsiDQv9C+0LrQsNC30YPQstCw0YLQuCDQutC+0LbQtdC9INC60LDQtNGAXG4gICAgICAgIGNvbnN0IElETEVfTUlOX0RVUkFUSU9OID0gNjA7IC8vINCc0ZbQvdGW0LzQsNC70YzQvdCwINGC0YDQuNCy0LDQu9GW0YHRgtGMINC30YPQv9C40L3QutC4ICgxINGB0LXQutGD0L3QtNCwINC/0YDQuCA2MGZwcylcbiAgICAgICAgY29uc3QgSURMRV9NQVhfRFVSQVRJT04gPSAxODA7IC8vINCc0LDQutGB0LjQvNCw0LvRjNC90LAg0YLRgNC40LLQsNC70ZbRgdGC0Ywg0LfRg9C/0LjQvdC60LggKDMg0YHQtdC60YPQvdC00Lgg0L/RgNC4IDYwZnBzKVxuXG4gICAgICAgIC8vINCh0YLQsNC90Lgg0LDQvdGW0LzQsNGG0ZbRlyDQvtC70LXQvdGPXG4gICAgICAgIGNvbnN0IERFRVJfU1RBVEUgPSB7XG4gICAgICAgICAgICBXQUxLSU5HOiAnd2Fsa2luZycsXG4gICAgICAgICAgICBJRExFOiAnaWRsZScsXG4gICAgICAgICAgICBQRVRUSU5HOiAncGV0dGluZydcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIC8vINCf0LDRgNCw0LzQtdGC0YDQuCDQtNC70Y8g0YHRgtCw0L3RgyBwZXR0aW5nXG4gICAgICAgIGNvbnN0IFBFVFRJTkdfTUlOX0RVUkFUSU9OID0gNjA7IC8vIDEg0YHQtdC60YPQvdC00LAg0L/RgNC4IDYwZnBzXG4gICAgICAgIGNvbnN0IFBFVFRJTkdfTUFYX0RVUkFUSU9OID0gMTgwOyAvLyAzINGB0LXQutGD0L3QtNC4INC/0YDQuCA2MGZwc1xuICAgICAgICBjb25zdCBIRUFSVF9TSVpFX01JTiA9IDg7XG4gICAgICAgIGNvbnN0IEhFQVJUX1NJWkVfTUFYID0gMTI7XG4gICAgICAgIGNvbnN0IEhFQVJUX1JJU0VfRElTVEFOQ0UgPSAzMDsgLy8g0JLRltC00YHRgtCw0L3RjCDQv9GW0LTQudC+0LzRgyDRgdC10YDQtNC10YfQutCwXG4gICAgICAgIGNvbnN0IEhFQVJUX1NQQVdOX0lOVEVSVkFMID0gMjA7IC8vINCG0L3RgtC10YDQstCw0Lsg0L/QvtGP0LLQuCDRgdC10YDQtNC10YfQvtC6ICjQutCw0LTRgNC4KVxuICAgICAgICBcbiAgICAgICAgbGV0IGFuaW1hdGlvbklkID0gbnVsbDtcbiAgICAgICAgbGV0IGZyYW1lQ291bnRlciA9IDA7IC8vINCT0LvQvtCx0LDQu9GM0L3QuNC5INC70ZbRh9C40LvRjNC90LjQuiDQutCw0LTRgNGW0LIg0LTQu9GPINGB0LjQvdGF0YDQvtC90ZbQt9Cw0YbRltGXXG5cbiAgICAgICAgLy8g0JrQu9Cw0YEg0LTQu9GPINGB0LXRgNC00LXRh9C60LBcbiAgICAgICAgY2xhc3MgSGVhcnQge1xuICAgICAgICAgICAgY29uc3RydWN0b3IoeCwgeSwgc2l6ZSwgaGVhcnRJbWFnZSkge1xuICAgICAgICAgICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgICAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xuICAgICAgICAgICAgICAgIHRoaXMub3BhY2l0eSA9IDE7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2FsZSA9IDE7XG4gICAgICAgICAgICAgICAgdGhpcy5yaXNlU3BlZWQgPSAwLjU7IC8vINCo0LLQuNC00LrRltGB0YLRjCDQv9GW0LTQudC+0LzRg1xuICAgICAgICAgICAgICAgIHRoaXMuaGVhcnRJbWFnZSA9IGhlYXJ0SW1hZ2U7IC8vINCX0L7QsdGA0LDQttC10L3QvdGPINGB0LXRgNC00LXRh9C60LBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdXBkYXRlKCkge1xuICAgICAgICAgICAgICAgIHRoaXMueSAtPSB0aGlzLnJpc2VTcGVlZDtcbiAgICAgICAgICAgICAgICB0aGlzLm9wYWNpdHkgLT0gMC4wMjtcbiAgICAgICAgICAgICAgICB0aGlzLnNjYWxlICs9IDAuMDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlzVmlzaWJsZSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5vcGFjaXR5ID4gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZHJhdyhjdHgpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNWaXNpYmxlKCkgfHwgIXRoaXMuaGVhcnRJbWFnZSB8fCAhdGhpcy5oZWFydEltYWdlLmNvbXBsZXRlKSByZXR1cm47XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY3R4LnNhdmUoKTtcbiAgICAgICAgICAgICAgICBjdHguZ2xvYmFsQWxwaGEgPSB0aGlzLm9wYWNpdHk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8g0JzQsNC70Y7RlNC80L4g0LfQvtCx0YDQsNC20LXQvdC90Y8g0YHQtdGA0LTQtdGH0LrQsCDQtyDQvNCw0YHRiNGC0LDQsdGD0LLQsNC90L3Rj9C8XG4gICAgICAgICAgICAgICAgY29uc3QgZHJhd1NpemUgPSB0aGlzLnNpemUgKiB0aGlzLnNjYWxlO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRyYXdYID0gdGhpcy54IC0gZHJhd1NpemUgLyAyO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRyYXdZID0gdGhpcy55IC0gZHJhd1NpemUgLyAyO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGVhcnRJbWFnZSxcbiAgICAgICAgICAgICAgICAgICAgZHJhd1gsIGRyYXdZLCBkcmF3U2l6ZSwgZHJhd1NpemVcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGN0eC5yZXN0b3JlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyDQmtC70LDRgSDQtNC70Y8g0L7Qu9C10L3Rj1xuICAgICAgICBjbGFzcyBEZWVyIHtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yKHN0YXJ0WCwgc3RhcnRZLCBtaW5YLCBtYXhYLCBzcGVlZCA9IDAuNSwgekluZGV4ID0gMCwgaGVhcnRJbWFnZSA9IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnggPSBzdGFydFg7XG4gICAgICAgICAgICAgICAgdGhpcy55ID0gc3RhcnRZO1xuICAgICAgICAgICAgICAgIHRoaXMubWluWCA9IG1pblg7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXhYID0gbWF4WDtcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVkID0gc3BlZWQ7XG4gICAgICAgICAgICAgICAgdGhpcy56SW5kZXggPSB6SW5kZXg7IC8vINCf0L7RgNGP0LTQvtC6INC80LDQu9GO0LLQsNC90L3RjyBcbiAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IC0xOyAvLyAtMSA9INCy0LvRltCy0L4sIDEgPSDQstC/0YDQsNCy0L5cbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0gREVFUl9TVEFURS5XQUxLSU5HO1xuICAgICAgICAgICAgICAgIHRoaXMuZnJhbWVJbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5mcmFtZVJlcGVhdENvdW50ZXIgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuaWRsZVRpbWVyID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLmlkbGVEdXJhdGlvbiA9IDA7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8g0JLQu9Cw0YHRgtC40LLQvtGB0YLRliDQtNC70Y8g0YHRgtCw0L3RgyBwZXR0aW5nXG4gICAgICAgICAgICAgICAgdGhpcy5wZXR0aW5nVGltZXIgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMucGV0dGluZ0R1cmF0aW9uID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLnByZXZpb3VzU3RhdGUgPSBudWxsOyAvLyDQl9Cx0LXRgNGW0LPQsNGU0LzQviDQv9C+0L/QtdGA0LXQtNC90ZbQuSDRgdGC0LDQvVxuICAgICAgICAgICAgICAgIHRoaXMuc2F2ZWRYID0gMDsgLy8g0JfQsdC10YDQtdC20LXQvdGWINC60L7QvtGA0LTQuNC90LDRgtC4INC/0YDQuCDQv9C10YDQtdGF0L7QtNGWINCyIHBldHRpbmdcbiAgICAgICAgICAgICAgICB0aGlzLnNhdmVkWSA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5oZWFydHMgPSBbXTsgLy8g0JzQsNGB0LjQsiDRgdC10YDQtNC10YfQvtC6XG4gICAgICAgICAgICAgICAgdGhpcy5oZWFydFNwYXduQ291bnRlciA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5oZWFydEltYWdlID0gaGVhcnRJbWFnZTsgLy8g0JfQvtCx0YDQsNC20LXQvdC90Y8g0YHQtdGA0LTQtdGH0LrQsFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNC60LAg0YfQuCDQutC70ZbQuiDQv9C+0YLRgNCw0L/QuNCyINC90LAg0L7Qu9C10L3Rj1xuICAgICAgICAgICAgaXNQb2ludEluc2lkZShjbGlja1gsIGNsaWNrWSwgZGVlcldpZHRoLCBkZWVySGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNsaWNrWCA+PSB0aGlzLnggJiYgXG4gICAgICAgICAgICAgICAgICAgICAgIGNsaWNrWCA8PSB0aGlzLnggKyBkZWVyV2lkdGggJiYgXG4gICAgICAgICAgICAgICAgICAgICAgIGNsaWNrWSA+PSB0aGlzLnkgJiYgXG4gICAgICAgICAgICAgICAgICAgICAgIGNsaWNrWSA8PSB0aGlzLnkgKyBkZWVySGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQntCx0YDQvtCx0LrQsCDQutC70ZbQutGDINC/0L4g0L7Qu9C10L3RjlxuICAgICAgICAgICAgaGFuZGxlQ2xpY2soKSB7XG4gICAgICAgICAgICAgICAgLy8g0J/QtdGA0LXRhdC+0LTQuNC80L4g0LIg0YHRgtCw0L0gcGV0dGluZyDQsNCx0L4g0L/QvtC90L7QstC70Y7RlNC80L4g0YLQsNC50LzQtdGAXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUgIT09IERFRVJfU1RBVEUuUEVUVElORykge1xuICAgICAgICAgICAgICAgICAgICAvLyDQl9Cx0LXRgNGW0LPQsNGU0LzQviDQv9C+0L/QtdGA0LXQtNC90ZbQuSDRgdGC0LDQvSDRgtCwINC60L7QvtGA0LTQuNC90LDRgtC4XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJldmlvdXNTdGF0ZSA9IHRoaXMuc3RhdGU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2F2ZWRYID0gdGhpcy54O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNhdmVkWSA9IHRoaXMueTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IERFRVJfU1RBVEUuUEVUVElORztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wZXR0aW5nVGltZXIgPSAwO1xuICAgICAgICAgICAgICAgICAgICAvLyDQntGH0LjRidCw0ZTQvNC+INGB0YLQsNGA0ZYg0YHQtdGA0LTQtdGH0LrQsFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhlYXJ0cyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhlYXJ0U3Bhd25Db3VudGVyID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8g0J/QvtC90L7QstC70Y7RlNC80L4g0YLQsNC50LzQtdGAIHBldHRpbmcgKDEtMyDRgdC10LrRg9C90LTQuCkg0YLQsCDRgdC60LjQtNCw0ZTQvNC+INC/0L7RgtC+0YfQvdC40Lkg0YLQsNC50LzQtdGAXG4gICAgICAgICAgICAgICAgdGhpcy5wZXR0aW5nRHVyYXRpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoUEVUVElOR19NQVhfRFVSQVRJT04gLSBQRVRUSU5HX01JTl9EVVJBVElPTiArIDEpKSArIFBFVFRJTkdfTUlOX0RVUkFUSU9OO1xuICAgICAgICAgICAgICAgIHRoaXMucGV0dGluZ1RpbWVyID0gMDsgLy8g0KHQutC40LTQsNGU0LzQviDRgtCw0LnQvNC10YAg0L/RgNC4INC60L7QttC90L7QvNGDINC60LvRltC60YNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0KHRgtCy0L7RgNC10L3QvdGPINC90L7QstC+0LPQviDRgdC10YDQtNC10YfQutCwXG4gICAgICAgICAgICBzcGF3bkhlYXJ0KCkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5oZWFydEltYWdlKSByZXR1cm47IC8vINCv0LrRidC+INC30L7QsdGA0LDQttC10L3QvdGPINC90LUg0LfQsNCy0LDQvdGC0LDQttC10L3QtSwg0L3QtSDRgdGC0LLQvtGA0Y7RlNC80L4g0YHQtdGA0LTQtdGH0LrQvlxuICAgICAgICAgICAgICAgIGNvbnN0IHNpemUgPSBNYXRoLnJhbmRvbSgpICogKEhFQVJUX1NJWkVfTUFYIC0gSEVBUlRfU0laRV9NSU4pICsgSEVBUlRfU0laRV9NSU47XG4gICAgICAgICAgICAgICAgY29uc3Qgb2Zmc2V0WCA9IChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIERFRVJfV0lEVEg7IC8vINCS0LjQv9Cw0LTQutC+0LLQtSDQt9C80ZbRidC10L3QvdGPINC/0L4gWFxuICAgICAgICAgICAgICAgIGNvbnN0IGhlYXJ0WCA9IHRoaXMueCArIERFRVJfV0lEVEggLyAyICsgb2Zmc2V0WDtcbiAgICAgICAgICAgICAgICBjb25zdCBoZWFydFkgPSB0aGlzLnkgLSAxMDsgLy8g0KLRgNC+0YXQuCDQstC40YnQtSDQvtC70LXQvdGPXG4gICAgICAgICAgICAgICAgdGhpcy5oZWFydHMucHVzaChuZXcgSGVhcnQoaGVhcnRYLCBoZWFydFksIHNpemUsIHRoaXMuaGVhcnRJbWFnZSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBnZXRTcHJpdGVGcmFtZUluZGV4KCkge1xuICAgICAgICAgICAgICAgIC8vINCS0LXRgNGF0L3RltC5INGA0Y/QtNC+0LogKDApID0g0YDRg9GFINCy0LvRltCy0L4sINC90LjQttC90ZbQuSDRgNGP0LTQvtC6ICgxKSA9INGA0YPRhSDQstC/0YDQsNCy0L5cbiAgICAgICAgICAgICAgICBjb25zdCByb3cgPSB0aGlzLmRpcmVjdGlvbiA9PT0gLTEgPyAwIDogMTtcbiAgICAgICAgICAgICAgICBsZXQgY29sID0gMDtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlID09PSBERUVSX1NUQVRFLldBTEtJTkcpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g0JrQsNC00YDQuCDRhdC+0LTRjNCx0Lg6IDAsIDEsIDIsIDMsIDQgKNCy0YHRliA1INC60LDQtNGA0ZbQsilcbiAgICAgICAgICAgICAgICAgICAgY29sID0gdGhpcy5mcmFtZUluZGV4ICUgV0FMS0lOR19GUkFNRVM7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlID09PSBERUVSX1NUQVRFLlBFVFRJTkcpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g0JIg0YHRgtCw0L3RliBwZXR0aW5nINCy0LjQutC+0YDQuNGB0YLQvtCy0YPRlNC80L4g0LrQsNC00YAgMCAoaWRsZSDQutCw0LTRgClcbiAgICAgICAgICAgICAgICAgICAgY29sID0gMDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyDQodGC0LDQvSDQt9GD0L/QuNC90LrQuCAoSURMRSkgLSDQstC40LrQvtGA0LjRgdGC0L7QstGD0ZTQvNC+INC60LDQtNGAIDBcbiAgICAgICAgICAgICAgICAgICAgY29sID0gMDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4geyByb3csIGNvbCB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1cGRhdGUoc2hvdWxkVXBkYXRlRnJhbWUpIHtcbiAgICAgICAgICAgICAgICAvLyDQntC90L7QstC70Y7RlNC80L4g0LDQvdGW0LzQsNGG0ZbRjiDQutCw0LTRgNGW0LIg0Lcg0L/QvtCy0YLQvtGA0LXQvdC90Y/QvCDQtNC70Y8g0L/Qu9Cw0LLQvdC+0YHRgtGWXG4gICAgICAgICAgICAgICAgaWYgKHNob3VsZFVwZGF0ZUZyYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlID09PSBERUVSX1NUQVRFLldBTEtJTkcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZnJhbWVSZXBlYXRDb3VudGVyKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDQn9C+0LrQsNC30YPRlNC80L4g0LrQvtC20LXQvSDQutCw0LTRgCDQutGW0LvRjNC60LAg0YDQsNC30ZbQsiDQtNC70Y8g0L/Qu9Cw0LLQvdGW0YjQvtGXINCw0L3RltC80LDRhtGW0ZdcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmZyYW1lUmVwZWF0Q291bnRlciA+PSBGUkFNRV9SRVBFQVQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZyYW1lUmVwZWF0Q291bnRlciA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g0J/QvtGB0LvRltC00L7QstC90L4g0L/RgNC+0YXQvtC00LjQvNC+INGH0LXRgNC10Lcg0LLRgdGWINC60LDQtNGA0Lg6IDAsIDEsIDIsIDMsIDQsIDAsIDEsIDIsIDMsIDQuLi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZyYW1lSW5kZXggPSAodGhpcy5mcmFtZUluZGV4ICsgMSkgJSBXQUxLSU5HX0ZSQU1FUztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vINCb0L7Qs9GW0LrQsCDRgdGC0LDQvdGW0LIg0YLQsCDRgNGD0YXRg1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlID09PSBERUVSX1NUQVRFLlBFVFRJTkcpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g0JIg0YHRgtCw0L3RliBwZXR0aW5nINC+0LvQtdC90Ywg0L3QtSDRgNGD0YXQsNGU0YLRjNGB0Y9cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wZXR0aW5nVGltZXIrKztcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vINCh0YLQstC+0YDRjtGU0LzQviDRgdC10YDQtNC10YfQutCwINC3INGW0L3RgtC10YDQstCw0LvQvtC8XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGVhcnRTcGF3bkNvdW50ZXIrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaGVhcnRTcGF3bkNvdW50ZXIgPj0gSEVBUlRfU1BBV05fSU5URVJWQUwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGVhcnRTcGF3bkNvdW50ZXIgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGF3bkhlYXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vINCe0L3QvtCy0LvRjtGU0LzQviDRgdC10YDQtNC10YfQutCwXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGVhcnRzID0gdGhpcy5oZWFydHMuZmlsdGVyKGhlYXJ0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYXJ0LnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGhlYXJ0LmlzVmlzaWJsZSgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vINCf0LXRgNC10LLRltGA0Y/RlNC80L4g0YfQuCDQt9Cw0LrRltC90YfQuNCy0YHRjyDRgdGC0LDQvSBwZXR0aW5nXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBldHRpbmdUaW1lciA+PSB0aGlzLnBldHRpbmdEdXJhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g0J/QvtCy0LXRgNGC0LDRlNC80L7RgdGPINC00L4g0LfQsdC10YDQtdC20LXQvdC40YUg0LrQvtC+0YDQtNC40L3QsNGCXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnggPSB0aGlzLnNhdmVkWDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueSA9IHRoaXMuc2F2ZWRZO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDQn9C+0LLQtdGA0YLQsNGU0LzQvtGB0Y8g0LTQviDQv9C+0L/QtdGA0LXQtNC90YzQvtCz0L4g0YHRgtCw0L3Rg1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHJldmlvdXNTdGF0ZSA9PT0gREVFUl9TVEFURS5XQUxLSU5HKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IERFRVJfU1RBVEUuV0FMS0lORztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDQn9GA0L7QtNC+0LLQttGD0ZTQvNC+INGA0YPRhSDQtyDQt9Cx0LXRgNC10LbQtdC90LjRhSDQutC+0L7RgNC00LjQvdCw0YJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2aW91c1N0YXRlID09PSBERUVSX1NUQVRFLklETEUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0gREVFUl9TVEFURS5JRExFO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vINCf0L7QstC10YDRgtCw0ZTQvNC+0YHRjyDQtNC+INGB0YLQsNC90YMgaWRsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaWRsZVRpbWVyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlkbGVEdXJhdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChJRExFX01BWF9EVVJBVElPTiAtIElETEVfTUlOX0RVUkFUSU9OICsgMSkpICsgSURMRV9NSU5fRFVSQVRJT047XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJldmlvdXNTdGF0ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBldHRpbmdUaW1lciA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBldHRpbmdEdXJhdGlvbiA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhlYXJ0cyA9IFtdOyAvLyDQntGH0LjRidCw0ZTQvNC+INGB0LXRgNC00LXRh9C60LBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGVhcnRTcGF3bkNvdW50ZXIgPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlID09PSBERUVSX1NUQVRFLldBTEtJTkcpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g0J7QvdC+0LLQu9GO0ZTQvNC+INC/0L7Qt9C40YbRltGOINC+0LvQtdC90Y9cbiAgICAgICAgICAgICAgICAgICAgdGhpcy54ICs9IHRoaXMuc3BlZWQgKiB0aGlzLmRpcmVjdGlvbjtcblxuICAgICAgICAgICAgICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNGP0ZTQvNC+INC80LXQttGWINGC0LAg0L/QtdGA0LXRhdC+0LTQuNC80L4g0LTQviDQt9GD0L/QuNC90LrQuFxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy54ID49IHRoaXMubWF4WCAmJiB0aGlzLmRpcmVjdGlvbiA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g0JTQvtGB0Y/Qs9C70Lgg0L/RgNCw0LLQvtCz0L4g0LrRgNCw0Y4gLSDQt9GD0L/QuNC90Y/RlNC80L7RgdGPXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnggPSB0aGlzLm1heFg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0gREVFUl9TVEFURS5JRExFO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pZGxlVGltZXIgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g0JPQtdC90LXRgNGD0ZTQvNC+INCy0LjQv9Cw0LTQutC+0LLRgyDRgtGA0LjQstCw0LvRltGB0YLRjCDQt9GD0L/QuNC90LrQuCDQstGW0LQgMSDQtNC+IDMg0YHQtdC60YPQvdC0XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlkbGVEdXJhdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChJRExFX01BWF9EVVJBVElPTiAtIElETEVfTUlOX0RVUkFUSU9OICsgMSkpICsgSURMRV9NSU5fRFVSQVRJT047XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy54IDw9IHRoaXMubWluWCAmJiB0aGlzLmRpcmVjdGlvbiA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vINCU0L7RgdGP0LPQu9C4INC70ZbQstC+0LPQviDQutGA0LDRjiAtINC30YPQv9C40L3Rj9GU0LzQvtGB0Y9cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueCA9IHRoaXMubWluWDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBERUVSX1NUQVRFLklETEU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlkbGVUaW1lciA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDQk9C10L3QtdGA0YPRlNC80L4g0LLQuNC/0LDQtNC60L7QstGDINGC0YDQuNCy0LDQu9GW0YHRgtGMINC30YPQv9C40L3QutC4INCy0ZbQtCAxINC00L4gMyDRgdC10LrRg9C90LRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaWRsZUR1cmF0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKElETEVfTUFYX0RVUkFUSU9OIC0gSURMRV9NSU5fRFVSQVRJT04gKyAxKSkgKyBJRExFX01JTl9EVVJBVElPTjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZSA9PT0gREVFUl9TVEFURS5JRExFKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaWRsZVRpbWVyKys7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyDQn9GW0YHQu9GPINC30LDQstC10YDRiNC10L3QvdGPINC30YPQv9C40L3QutC4INC30LzRltC90Y7RlNC80L4g0L3QsNC/0YDRj9C80L7QuiDRgtCwINC/0LXRgNC10YXQvtC00LjQvNC+INC00L4g0YXQvtC00YzQsdC4XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlkbGVUaW1lciA+PSB0aGlzLmlkbGVEdXJhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gKj0gLTE7IC8vINCX0LzRltC90Y7RlNC80L4g0L3QsNC/0YDRj9C80L7QuiAo0LLQu9GW0LLQviDihpQg0LLQv9GA0LDQstC+KVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IERFRVJfU1RBVEUuV0FMS0lORztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZnJhbWVJbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZyYW1lUmVwZWF0Q291bnRlciA9IDA7IC8vINCh0LrQuNC00LDRlNC80L4g0LvRltGH0LjQu9GM0L3QuNC6INC/0L7QstGC0L7RgNC10L3RjFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkcmF3KGN0eCwgc3ByaXRlSW1hZ2UsIGZyYW1lV2lkdGgsIGZyYW1lSGVpZ2h0LCBkZWVyV2lkdGgsIGRlZXJIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXNwcml0ZUltYWdlLmNvbXBsZXRlIHx8IGZyYW1lV2lkdGggPD0gMCB8fCBmcmFtZUhlaWdodCA8PSAwKSByZXR1cm47XG5cbiAgICAgICAgICAgICAgICBjb25zdCB7IHJvdywgY29sIH0gPSB0aGlzLmdldFNwcml0ZUZyYW1lSW5kZXgoKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyDQmtC+0L7RgNC00LjQvdCw0YLQuCDQutCw0LTRgNGDINCyINGB0L/RgNCw0LnRgi3Qu9C40YHRgtGWXG4gICAgICAgICAgICAgICAgY29uc3Qgc291cmNlWCA9IGNvbCAqIGZyYW1lV2lkdGg7XG4gICAgICAgICAgICAgICAgY29uc3Qgc291cmNlWSA9IHJvdyAqIGZyYW1lSGVpZ2h0O1xuXG4gICAgICAgICAgICAgICAgLy8g0JLQuNGA0ZbQt9Cw0ZTQvNC+INC60LDQtNGAINC30ZYg0YHQv9GA0LDQudGCLdC70LjRgdGC0LAg0YLQsCDQvNCw0LvRjtGU0LzQviDQvdCwIGNhbnZhc1xuICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICAgICAgICAgIHNwcml0ZUltYWdlLFxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VYLCBzb3VyY2VZLCBmcmFtZVdpZHRoLCBmcmFtZUhlaWdodCwgLy8g0JTQttC10YDQtdC70L4gKNGB0L/RgNCw0LnRgi3Qu9C40YHRgilcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54LCB0aGlzLnksIGRlZXJXaWR0aCwgZGVlckhlaWdodCAvLyDQn9GA0LjQt9C90LDRh9C10L3QvdGPIChjYW52YXMpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyDQnNCw0LvRjtGU0LzQviDRgdC10YDQtNC10YfQutCwINC90LDQtCDQvtC70LXQvdC10LxcbiAgICAgICAgICAgICAgICB0aGlzLmhlYXJ0cy5mb3JFYWNoKGhlYXJ0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaGVhcnQuZHJhdyhjdHgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyDQl9Cw0LLQsNC90YLQsNC20LXQvdC90Y8g0LfQvtCx0YDQsNC20LXQvdGMICjRgdGC0LLQvtGA0Y7RlNC80L4g0L/QtdGA0LXQtCDRgdGC0LLQvtGA0LXQvdC90Y/QvCDQvtC70LXQvdGW0LIpXG4gICAgICAgIGNvbnN0IGltYWdlcyA9IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IG5ldyBJbWFnZSgpLFxuICAgICAgICAgICAgdHJlZTogbmV3IEltYWdlKCksXG4gICAgICAgICAgICBkZWVyU3ByaXRlOiBuZXcgSW1hZ2UoKSwgLy8g0KHQv9GA0LDQudGCLdC70LjRgdGCINC30LDQvNGW0YHRgtGMINC+0LTQvdC+0LPQviDQt9C+0LHRgNCw0LbQtdC90L3Rj1xuICAgICAgICAgICAgaGVhcnQ6IG5ldyBJbWFnZSgpIC8vINCX0L7QsdGA0LDQttC10L3QvdGPINGB0LXRgNC00LXRh9C60LBcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIC8vINCc0LDRgdC40LIg0L7Qu9C10L3RltCyICjQvNC+0LbQvdCwINC00L7QtNCw0YLQuCDQsdGW0LvRjNGI0LUpXG4gICAgICAgIGNvbnN0IGRlZXJzID0gW107XG4gICAgICAgIFxuICAgICAgICAvLyDQmtC+0L3RhNGW0LPRg9GA0LDRhtGW0Y8g0LTQu9GPINGB0YLQstC+0YDQtdC90L3RjyDQvtC70LXQvdGW0LJcbiAgICAgICAgY29uc3QgREVFUl9DT1VOVCA9IDM7IC8vINCa0ZbQu9GM0LrRltGB0YLRjCDQvtC70LXQvdGW0LJcbiAgICAgICAgXG4gICAgICAgIC8vINCg0L7Qt9GA0LDRhdC+0LLRg9GU0LzQviDQutC+0LXRhNGW0YbRltGU0L3RgiDQvNCw0YHRiNGC0LDQsdGD0LLQsNC90L3RjyDQtNC70Y8g0L/QvtC30LjRhtGW0Lkg0L7Qu9C10L3RltCyXG4gICAgICAgIGNvbnN0IHNjYWxlWCA9IENBTlZBU19XSURUSCAvIDEzNjY7XG4gICAgICAgIGNvbnN0IHNjYWxlWSA9IENBTlZBU19IRUlHSFQgLyA1MDA7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBkZWVyQ29uZmlncyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGFydFg6IENBTlZBU19XSURUSCAvIDIgKyA1MCAqIHNjYWxlWCxcbiAgICAgICAgICAgICAgICBzdGFydFk6IHRyZWVZICsgVFJFRV9IRUlHSFQgLSAyMCwgLy8g0J/RltC0INGP0LvQuNC90LrQvtGOICh0cmVlWSArINCy0LjRgdC+0YLQsCDRj9C70LjQvdC60LggLSDQstGW0LTRgdGC0YPQvylcbiAgICAgICAgICAgICAgICBtaW5YOiBDQU5WQVNfV0lEVEggLyAyIC0gMjAwICogc2NhbGVYLFxuICAgICAgICAgICAgICAgIG1heFg6IENBTlZBU19XSURUSCAvIDIgKyAzMDAgKiBzY2FsZVgsXG4gICAgICAgICAgICAgICAgc3BlZWQ6IDAuNSxcbiAgICAgICAgICAgICAgICB6SW5kZXg6IDRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhcnRYOiBDQU5WQVNfV0lEVEggLyAyIC0gMTAwICogc2NhbGVYLFxuICAgICAgICAgICAgICAgIHN0YXJ0WTogQ0FOVkFTX0hFSUdIVCAvIDIgLSBERUVSX0hFSUdIVCAvIDIgKyA1MCAqIHNjYWxlWSxcbiAgICAgICAgICAgICAgICBtaW5YOiBDQU5WQVNfV0lEVEggLyAyIC0gMTUwICogc2NhbGVYLFxuICAgICAgICAgICAgICAgIG1heFg6IENBTlZBU19XSURUSCAvIDIgKyAxNTAgKiBzY2FsZVgsXG4gICAgICAgICAgICAgICAgc3BlZWQ6IDAuMyxcbiAgICAgICAgICAgICAgICB6SW5kZXg6IDNcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhcnRYOiBDQU5WQVNfV0lEVEggLyAyIC0gMTAwICogc2NhbGVYLFxuICAgICAgICAgICAgICAgIHN0YXJ0WTogQ0FOVkFTX0hFSUdIVCAvIDIgLSBERUVSX0hFSUdIVCAvIDIgLSA1MCAqIHNjYWxlWSxcbiAgICAgICAgICAgICAgICBtaW5YOiBDQU5WQVNfV0lEVEggLyAyIC0gMjUwICogc2NhbGVYLFxuICAgICAgICAgICAgICAgIG1heFg6IENBTlZBU19XSURUSCAvIDIgKyAyNTAgKiBzY2FsZVgsXG4gICAgICAgICAgICAgICAgc3BlZWQ6IDAuNCxcbiAgICAgICAgICAgICAgICB6SW5kZXg6IDEgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgIFxuICAgICAgICBdO1xuXG4gICAgICAgIC8vINCh0YLQstC+0YDRjtGU0LzQviDQvtC70LXQvdGW0LJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBERUVSX0NPVU5UICYmIGkgPCBkZWVyQ29uZmlncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY29uZmlnID0gZGVlckNvbmZpZ3NbaV07XG4gICAgICAgICAgICBkZWVycy5wdXNoKG5ldyBEZWVyKFxuICAgICAgICAgICAgICAgIGNvbmZpZy5zdGFydFgsXG4gICAgICAgICAgICAgICAgY29uZmlnLnN0YXJ0WSxcbiAgICAgICAgICAgICAgICBjb25maWcubWluWCxcbiAgICAgICAgICAgICAgICBjb25maWcubWF4WCxcbiAgICAgICAgICAgICAgICBjb25maWcuc3BlZWQsXG4gICAgICAgICAgICAgICAgY29uZmlnLnpJbmRleCB8fCAwLCAvLyDQktC40LrQvtGA0LjRgdGC0L7QstGD0ZTQvNC+IHpJbmRleCDQtyDQutC+0L3RhNGW0LPRgyDQsNCx0L4gMCDQt9CwINC30LDQvNC+0LLRh9GD0LLQsNC90L3Rj9C8XG4gICAgICAgICAgICAgICAgaW1hZ2VzLmhlYXJ0IC8vINCf0LXRgNC10LTQsNGU0LzQviDQt9C+0LHRgNCw0LbQtdC90L3RjyDRgdC10YDQtNC10YfQutCwXG4gICAgICAgICAgICApKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpbWFnZXNMb2FkZWQgPSAwO1xuICAgICAgICBjb25zdCB0b3RhbEltYWdlcyA9IDQ7XG5cbiAgICAgICAgZnVuY3Rpb24gb25JbWFnZUxvYWQoKSB7XG4gICAgICAgICAgICBpbWFnZXNMb2FkZWQrKztcbiAgICAgICAgICAgIGlmIChpbWFnZXNMb2FkZWQgPT09IHRvdGFsSW1hZ2VzKSB7XG4gICAgICAgICAgICAgICAgLy8g0J/QtdGA0LXQstGW0YDRj9GU0LzQviwg0YfQuCDRgdC/0YDQsNC50YIt0LvQuNGB0YIg0LfQsNCy0LDQvdGC0LDQttC40LLRgdGPINC60L7RgNC10LrRgtC90L5cbiAgICAgICAgICAgICAgICBpZiAoaW1hZ2VzLmRlZXJTcHJpdGUuY29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0RlZXIgc3ByaXRlIGxvYWRlZDonLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogaW1hZ2VzLmRlZXJTcHJpdGUud2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGltYWdlcy5kZWVyU3ByaXRlLmhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lV2lkdGg6IEZSQU1FX1dJRFRILFxuICAgICAgICAgICAgICAgICAgICAgICAgZnJhbWVIZWlnaHQ6IEZSQU1FX0hFSUdIVCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZXJXaWR0aDogREVFUl9XSURUSCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZXJIZWlnaHQ6IERFRVJfSEVJR0hUXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkcmF3Q2FudmFzKCk7XG4gICAgICAgICAgICAgICAgc3RhcnRBbmltYXRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGltYWdlcy5iYWNrZ3JvdW5kLm9ubG9hZCA9IG9uSW1hZ2VMb2FkO1xuICAgICAgICBpbWFnZXMudHJlZS5vbmxvYWQgPSBvbkltYWdlTG9hZDtcbiAgICAgICAgaW1hZ2VzLmRlZXJTcHJpdGUub25sb2FkID0gb25JbWFnZUxvYWQ7XG4gICAgICAgIGltYWdlcy5oZWFydC5vbmxvYWQgPSBvbkltYWdlTG9hZDtcblxuICAgICAgICAvLyDQktC40LHQuNGA0LDRlNC80L4g0YTQvtC9INC30LDQu9C10LbQvdC+INCy0ZbQtCDRgNC+0LfQvNGW0YDRgyDQtdC60YDQsNC90YNcbiAgICAgICAgaW1hZ2VzLmJhY2tncm91bmQuc3JjID0gaXNNb2JpbGUgPyAnaW1nL3BhcnRpY2lwYXRlL2NhbnZhcy1iZy10YWIucG5nJyA6ICdpbWcvcGFydGljaXBhdGUvY2FudmFzLWJnLnBuZyc7XG4gICAgICAgIGltYWdlcy50cmVlLnNyYyA9ICdpbWcvcGFydGljaXBhdGUvdHJlZS5wbmcnO1xuICAgICAgICAvLyDQktC40LrQvtGA0LjRgdGC0L7QstGD0ZTQvNC+INGB0L/RgNCw0LnRgi3Qu9C40YHRgiAo0Y/QutGJ0L4g0YTQsNC50Lsg0L3QsNC30LjQstCw0ZTRgtGM0YHRjyBkZWVyLXNwcml0ZS5wbmcsINC30LzRltC90ZbRgtGMINC90LDQt9Cy0YMpXG4gICAgICAgIGltYWdlcy5kZWVyU3ByaXRlLnNyYyA9ICdpbWcvcGFydGljaXBhdGUvZGVlci1zcHJpdGUucG5nJztcbiAgICAgICAgaW1hZ2VzLmhlYXJ0LnNyYyA9ICdpbWcvcGFydGljaXBhdGUvZGVlci1oZWFydC5wbmcnO1xuICAgICAgICBcbiAgICAgICAgLy8g0J7QvdC+0LLQu9GO0ZTQvNC+INC/0L7RgdC40LvQsNC90L3RjyDQvdCwINC00LDQvdGWINC00LvRjyDQvtCx0YDQvtCx0L3QuNC60ZbQsiDQv9C+0LTRltC5XG4gICAgICAgIHBhcnRpY2lwYXRlRGVlcnMgPSBkZWVycztcbiAgICAgICAgcGFydGljaXBhdGVEZWVyV2lkdGggPSBERUVSX1dJRFRIO1xuICAgICAgICBwYXJ0aWNpcGF0ZURlZXJIZWlnaHQgPSBERUVSX0hFSUdIVDtcbiAgICAgICAgXG4gICAgICAgIC8vINCU0L7QtNCw0ZTQvNC+INC+0LHRgNC+0LHQvdC40LrQuCDQv9C+0LTRltC5INGC0ZbQu9GM0LrQuCDQvtC00LjQvSDRgNCw0LdcbiAgICAgICAgaWYgKCFjYW52YXNDbGlja0hhbmRsZXJzQXR0YWNoZWQpIHtcbiAgICAgICAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVBhcnRpY2lwYXRlQ2FudmFzQ2xpY2spO1xuICAgICAgICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBoYW5kbGVQYXJ0aWNpcGF0ZUNhbnZhc1RvdWNoU3RhcnQsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIGhhbmRsZVBhcnRpY2lwYXRlQ2FudmFzVG91Y2hFbmQsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgIGNhbnZhc0NsaWNrSGFuZGxlcnNBdHRhY2hlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBkcmF3Q2FudmFzKCkge1xuICAgICAgICAgICAgLy8g0J7Rh9C40YnQtdC90L3RjyBjYW52YXNcbiAgICAgICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgQ0FOVkFTX1dJRFRILCBDQU5WQVNfSEVJR0hUKTtcblxuICAgICAgICAgICAgLy8g0JzQsNC70Y7RlNC80L4g0YTQvtC9XG4gICAgICAgICAgICBpZiAoaW1hZ2VzLmJhY2tncm91bmQuY29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKGltYWdlcy5iYWNrZ3JvdW5kLCAwLCAwLCBDQU5WQVNfV0lEVEgsIENBTlZBU19IRUlHSFQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyB6SW5kZXgg0LTQu9GPINGP0LvQuNC90LrQuCAo0LzRltC2INC+0LvQtdC90Y/QvNC4KVxuICAgICAgICAgICAgY29uc3QgVFJFRV9aX0lOREVYID0gMjsgLy8g0K/Qu9C40L3QutCwINC80LDQu9GO0ZTRgtGM0YHRjyDQvNGW0LYg0L7Qu9C10L3Rj9C80Lgg0LcgekluZGV4IDEg0YLQsCAyXG5cbiAgICAgICAgICAgIC8vINCh0YLQstC+0YDRjtGU0LzQviDQvNCw0YHQuNCyINCy0YHRltGFINC10LvQtdC80LXQvdGC0ZbQsiDQtNC70Y8g0LzQsNC70Y7QstCw0L3QvdGPICjQvtC70LXQvdGWICsg0Y/Qu9C40L3QutCwKVxuICAgICAgICAgICAgY29uc3QgZHJhd2FibGVFbGVtZW50cyA9IFtdO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQlNC+0LTQsNGU0LzQviDQvtC70LXQvdGW0LJcbiAgICAgICAgICAgIGRlZXJzLmZvckVhY2goZGVlciA9PiB7XG4gICAgICAgICAgICAgICAgZHJhd2FibGVFbGVtZW50cy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2RlZXInLFxuICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IGRlZXIuekluZGV4LFxuICAgICAgICAgICAgICAgICAgICBkcmF3OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW1hZ2VzLmRlZXJTcHJpdGUuY29tcGxldGUgJiYgRlJBTUVfV0lEVEggPiAwICYmIEZSQU1FX0hFSUdIVCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWVyLmRyYXcoY3R4LCBpbWFnZXMuZGVlclNwcml0ZSwgRlJBTUVfV0lEVEgsIEZSQU1FX0hFSUdIVCwgREVFUl9XSURUSCwgREVFUl9IRUlHSFQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0JTQvtC00LDRlNC80L4g0Y/Qu9C40L3QutGDXG4gICAgICAgICAgICBkcmF3YWJsZUVsZW1lbnRzLnB1c2goe1xuICAgICAgICAgICAgICAgIHR5cGU6ICd0cmVlJyxcbiAgICAgICAgICAgICAgICB6SW5kZXg6IFRSRUVfWl9JTkRFWCxcbiAgICAgICAgICAgICAgICBkcmF3OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbWFnZXMudHJlZS5jb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShpbWFnZXMudHJlZSwgdHJlZVgsIHRyZWVZLCBUUkVFX1dJRFRILCBUUkVFX0hFSUdIVCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8g0KHQvtGA0YLRg9GU0LzQviDQstGB0ZYg0LXQu9C10LzQtdC90YLQuCDQt9CwIHpJbmRleCAo0LzQtdC90YjQtSA9INC80LDQu9GO0ZTRgtGM0YHRjyDRgNCw0L3RltGI0LUsINCx0ZbQu9GM0YjQtSA9INC80LDQu9GO0ZTRgtGM0YHRjyDQv9GW0LfQvdGW0YjQtSlcbiAgICAgICAgICAgIGRyYXdhYmxlRWxlbWVudHMuc29ydCgoYSwgYikgPT4gYS56SW5kZXggLSBiLnpJbmRleCk7XG5cbiAgICAgICAgICAgIC8vINCc0LDQu9GO0ZTQvNC+INCy0YHRliDQtdC70LXQvNC10L3RgtC4INCyINC/0YDQsNCy0LjQu9GM0L3QvtC80YMg0L/QvtGA0Y/QtNC60YNcbiAgICAgICAgICAgIGRyYXdhYmxlRWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmRyYXcoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbiAgICAgICAgICAgIGZyYW1lQ291bnRlcisrO1xuXG4gICAgICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNGP0ZTQvNC+LCDRh9C4INC/0L7RgtGA0ZbQsdC90L4g0L7QvdC+0LLQu9GO0LLQsNGC0Lgg0LrQsNC00YDQuCDQsNC90ZbQvNCw0YbRltGXXG4gICAgICAgICAgICBjb25zdCBzaG91bGRVcGRhdGVGcmFtZSA9IGZyYW1lQ291bnRlciA+PSBGUkFNRV9ERUxBWTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0J7QvdC+0LLQu9GO0ZTQvNC+INCz0LvQvtCx0LDQu9GM0L3QuNC5INC70ZbRh9C40LvRjNC90LjQuiDQutCw0LTRgNGW0LJcbiAgICAgICAgICAgIGlmIChzaG91bGRVcGRhdGVGcmFtZSkge1xuICAgICAgICAgICAgICAgIGZyYW1lQ291bnRlciA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vINCe0L3QvtCy0LvRjtGU0LzQviDQstGB0ZbRhSDQvtC70LXQvdGW0LJcbiAgICAgICAgICAgIGRlZXJzLmZvckVhY2goZGVlciA9PiB7XG4gICAgICAgICAgICAgICAgZGVlci51cGRhdGUoc2hvdWxkVXBkYXRlRnJhbWUpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vINCf0LXRgNC10LzQsNC70YzQvtCy0YPRlNC80L4gY2FudmFzXG4gICAgICAgICAgICBkcmF3Q2FudmFzKCk7XG5cbiAgICAgICAgICAgIGFuaW1hdGlvbklkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gc3RhcnRBbmltYXRpb24oKSB7XG4gICAgICAgICAgICBpZiAoYW5pbWF0aW9uSWQpIHtcbiAgICAgICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShhbmltYXRpb25JZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhbmltYXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDQl9GD0L/QuNC90Y/RlNC80L4g0LDQvdGW0LzQsNGG0ZbRjiDQv9GA0Lgg0LLQuNGF0L7QtNGWINC3IHZpZXdwb3J0ICjQvtC/0YbRltC+0L3QsNC70YzQvdC+KVxuICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgICAgICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFhbmltYXRpb25JZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRBbmltYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhbmltYXRpb25JZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uSWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uSWQgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUoY2FudmFzKTtcbiAgICAgICAgXG4gICAgICAgIC8vINCe0LHRgNC+0LHQutCwINC30LzRltC90Lgg0YDQvtC30LzRltGA0YMg0LLRltC60L3QsCDQtNC70Y8g0LDQtNCw0L/RgtC40LLQvdC+0YHRgtGWXG4gICAgICAgIGxldCByZXNpemVUaW1lb3V0O1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHJlc2l6ZVRpbWVvdXQpO1xuICAgICAgICAgICAgcmVzaXplVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0lzTW9iaWxlID0gd2luZG93LmlubmVyV2lkdGggPD0gMTA1MDtcbiAgICAgICAgICAgICAgICAvLyDQn9C10YDQtdC30LDQv9GD0YHQutCw0ZTQvNC+INGW0L3RltGG0ZbQsNC70ZbQt9Cw0YbRltGOINGC0ZbQu9GM0LrQuCDRj9C60YnQviDQt9C80ZbQvdC40LLRgdGPINGA0LXQttC40LwgKG1vYmlsZS9kZXNrdG9wKVxuICAgICAgICAgICAgICAgIGlmIChuZXdJc01vYmlsZSAhPT0gaXNNb2JpbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g0JfRg9C/0LjQvdGP0ZTQvNC+INC/0L7RgtC+0YfQvdGDINCw0L3RltC80LDRhtGW0Y5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGFuaW1hdGlvbklkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShhbmltYXRpb25JZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25JZCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8g0J/QtdGA0LXQt9Cw0L/Rg9GB0LrQsNGU0LzQviDRltC90ZbRhtGW0LDQu9GW0LfQsNGG0ZbRjlxuICAgICAgICAgICAgICAgICAgICBpbml0UGFydGljaXBhdGVDYW52YXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAyNTApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0U25vd2ZsYWtlc0NhbnZhcygpIHtcbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Nub3dmbGFrZXNDYW52YXMnKTtcbiAgICAgICAgaWYgKCFjYW52YXMpIHJldHVybjtcblxuICAgICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgY29uc3QgZmF2UGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXYtcGFnZScpO1xuICAgICAgICBcbiAgICAgICAgLy8g0JrQvtC90YHRgtCw0L3RgtC4XG4gICAgICAgIGNvbnN0IFNOT1dGTEFLRV9DT1VOVCA9IDEwMDtcbiAgICAgICAgY29uc3QgU05PV0ZMQUtFX01JTl9TSVpFID0gNDtcbiAgICAgICAgY29uc3QgU05PV0ZMQUtFX01BWF9TSVpFID0gMTA7XG4gICAgICAgIGNvbnN0IFNOT1dGTEFLRV9NSU5fU1BFRUQgPSAwLjE7XG4gICAgICAgIGNvbnN0IFNOT1dGTEFLRV9NQVhfU1BFRUQgPSAwLjM7XG4gICAgICAgIGNvbnN0IFNOT1dGTEFLRV9XSU5EX1JBTkdFID0gMC40O1xuICAgICAgICBjb25zdCBTTk9XRkxBS0VfU1BBV05fSU5URVJWQUwgPSAyMDA7XG5cbiAgICAgICAgY29uc3Qgc25vd2ZsYWtlcyA9IFtdO1xuICAgICAgICBsZXQgbGFzdFNub3dmbGFrZVRpbWUgPSAwO1xuICAgICAgICBsZXQgYW5pbWF0aW9uSWQgPSBudWxsO1xuICAgICAgICBcbiAgICAgICAgLy8g0JLRgdGC0LDQvdC+0LLQu9GO0ZTQvNC+INGA0L7Qt9C80ZbRgCBjYW52YXMg0L3QsCDQstC10YHRjCAuZmF2LXBhZ2VcbiAgICAgICAgZnVuY3Rpb24gcmVzaXplQ2FudmFzKCkge1xuICAgICAgICAgICAgbGV0IG5ld1dpZHRoLCBuZXdIZWlnaHQ7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChmYXZQYWdlKSB7XG4gICAgICAgICAgICAgICAgLy8g0JLQuNC60L7RgNC40YHRgtC+0LLRg9GU0LzQviBzY3JvbGxIZWlnaHQg0LTQu9GPINC+0YLRgNC40LzQsNC90L3RjyDRgNC10LDQu9GM0L3QvtGXINCy0LjRgdC+0YLQuCDQutC+0L3RgtC10L3RgtGDXG4gICAgICAgICAgICAgICAgY29uc3QgcmVjdCA9IGZhdlBhZ2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAgICAgbmV3V2lkdGggPSByZWN0LndpZHRoIHx8IGZhdlBhZ2Uub2Zmc2V0V2lkdGggfHwgd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgICAgICAgICAgLy8g0JTQu9GPINCy0LjRgdC+0YLQuCDQstC40LrQvtGA0LjRgdGC0L7QstGD0ZTQvNC+IHNjcm9sbEhlaWdodCDRj9C60YnQviDQstGW0L0g0LHRltC70YzRiNC40Lkg0LfQsCBvZmZzZXRIZWlnaHRcbiAgICAgICAgICAgICAgICBjb25zdCBvZmZzZXRIZWlnaHQgPSBmYXZQYWdlLm9mZnNldEhlaWdodCB8fCBmYXZQYWdlLmNsaWVudEhlaWdodDtcbiAgICAgICAgICAgICAgICBjb25zdCBzY3JvbGxIZWlnaHQgPSBmYXZQYWdlLnNjcm9sbEhlaWdodDtcbiAgICAgICAgICAgICAgICBuZXdIZWlnaHQgPSBNYXRoLm1heChzY3JvbGxIZWlnaHQsIG9mZnNldEhlaWdodCwgcmVjdC5oZWlnaHQpIHx8IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gRmFsbGJhY2sg0L3QsCB2aWV3cG9ydFxuICAgICAgICAgICAgICAgIG5ld1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgICAgICAgICAgbmV3SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNGP0ZTQvNC+INGH0Lgg0YDQvtC30LzRltGA0Lgg0LfQvNGW0L3QuNC70LjRgdGPINC/0LXRgNC10LQg0L7QvdC+0LLQu9C10L3QvdGP0LxcbiAgICAgICAgICAgIGlmIChjYW52YXMud2lkdGggIT09IG5ld1dpZHRoIHx8IGNhbnZhcy5oZWlnaHQgIT09IG5ld0hlaWdodCkge1xuICAgICAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IG5ld1dpZHRoO1xuICAgICAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSBuZXdIZWlnaHQ7XG4gICAgICAgICAgICAgICAgLy8g0J7Rh9C40YnQsNGU0LzQviDRgdC90ZbQttC40L3QutC4INC/0YDQuCDQt9C80ZbQvdGWINGA0L7Qt9C80ZbRgNGDXG4gICAgICAgICAgICAgICAgc25vd2ZsYWtlcy5sZW5ndGggPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8g0JLRgdGC0LDQvdC+0LLQu9GO0ZTQvNC+INGA0L7Qt9C80ZbRgCBjYW52YXMg0Lcg0L3QtdCy0LXQu9C40LrQvtGOINC30LDRgtGA0LjQvNC60L7RjiDQtNC70Y8g0LrQvtGA0LXQutGC0L3QvtCz0L4g0YDQvtC30YDQsNGF0YPQvdC60YMg0YDQvtC30LzRltGA0ZbQslxuICAgICAgICAvLyDQktC40LrQvtGA0LjRgdGC0L7QstGD0ZTQvNC+INC60ZbQu9GM0LrQsCDQutCw0LTRgNGW0LIg0LTQu9GPINCz0LDRgNCw0L3RgtGW0Zcg0L/RgNCw0LLQuNC70YzQvdC+0LPQviDRgNC+0LfQvNGW0YDRg1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgcmVzaXplQ2FudmFzKCk7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc2l6ZUNhbnZhcygpO1xuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlc2l6ZUNhbnZhcygpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZUNhbnZhcyk7XG5cbiAgICAgICAgLy8g0JfQsNCy0LDQvdGC0LDQttC10L3QvdGPINC30L7QsdGA0LDQttC10L3QvdGPINGB0L3RltC20LjQvdC60LhcbiAgICAgICAgY29uc3Qgc25vd2ZsYWtlSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgbGV0IGltYWdlTG9hZGVkID0gZmFsc2U7XG5cbiAgICAgICAgc25vd2ZsYWtlSW1hZ2Uub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpbWFnZUxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICAvLyDQp9C10LrQsNGU0LzQviDQv9C+0LrQuCDRgdGC0L7RgNGW0L3QutCwINCy0LjQudC00LUg0LfRliDRgdGC0LDQvdGDIGxvYWRpbmcg0L/QtdGA0LXQtCDRgdGC0LDRgNGC0L7QvCDQsNC90ZbQvNCw0YbRltGXXG4gICAgICAgICAgICBmdW5jdGlvbiB3YWl0Rm9yUGFnZVJlYWR5KCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlzUGFnZUxvYWRpbmcgPSBtYWluUGFnZSAmJiBtYWluUGFnZS5jbGFzc0xpc3QuY29udGFpbnMoJ2xvYWRpbmcnKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoaXNQYWdlTG9hZGluZykge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzaXplQ2FudmFzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzaXplQ2FudmFzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vINCU0L7QtNCw0YLQutC+0LLQsCDQv9C10YDQtdCy0ZbRgNC60LAg0L/RltGB0LvRjyDRidC1INC+0LTQvdC+0LPQviDQutCw0LTRgNGDXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNpemVDYW52YXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYW52YXMud2lkdGggPiAwICYmIGNhbnZhcy5oZWlnaHQgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRBbmltYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g0K/QutGJ0L4g0LLRgdC1INGJ0LUg0L3QtdC/0YDQsNCy0LjQu9GM0L3QuNC5INGA0L7Qt9C80ZbRgCwg0L/QvtCy0YLQvtGA0Y7RlNC80L5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KHdhaXRGb3JQYWdlUmVhZHksIDUwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSwgNDAwKTsgLy8g0KfQtdC60LDRlNC80L4g0YLRgNC+0YXQuCDQsdGW0LvRjNGI0LUg0L3RltC2IGhpZGVMb2FkZXIgKDMwMG1zKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vINCh0YLQvtGA0ZbQvdC60LAg0LPQvtGC0L7QstCwLCDQstGB0YLQsNC90L7QstC70Y7RlNC80L4g0YDQvtC30LzRltGAINGC0LAg0LfQsNC/0YPRgdC60LDRlNC80L5cbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc2l6ZUNhbnZhcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNpemVDYW52YXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNpemVDYW52YXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhbnZhcy53aWR0aCA+IDAgJiYgY2FudmFzLmhlaWdodCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QW5pbWF0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHdhaXRGb3JQYWdlUmVhZHkoKTtcbiAgICAgICAgfTtcbiAgICAgICAgc25vd2ZsYWtlSW1hZ2Uuc3JjID0gJ2ltZy9zbm93Zmxha2UucG5nJztcbiAgICAgICBcblxuICAgICAgICAvLyDQmtC70LDRgSDQtNC70Y8g0YHQvdGW0LbQuNC90LrQuFxuICAgICAgICBjbGFzcyBTbm93Zmxha2Uge1xuICAgICAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy54ID0gTWF0aC5yYW5kb20oKSAqIChjYW52YXMud2lkdGggfHwgd2luZG93LmlubmVyV2lkdGgpO1xuICAgICAgICAgICAgICAgIHRoaXMueSA9IC0yMDtcbiAgICAgICAgICAgICAgICB0aGlzLnNpemUgPSBNYXRoLnJhbmRvbSgpICogKFNOT1dGTEFLRV9NQVhfU0laRSAtIFNOT1dGTEFLRV9NSU5fU0laRSkgKyBTTk9XRkxBS0VfTUlOX1NJWkU7XG4gICAgICAgICAgICAgICAgdGhpcy5zcGVlZCA9IE1hdGgucmFuZG9tKCkgKiAoU05PV0ZMQUtFX01BWF9TUEVFRCAtIFNOT1dGTEFLRV9NSU5fU1BFRUQpICsgU05PV0ZMQUtFX01JTl9TUEVFRDtcbiAgICAgICAgICAgICAgICB0aGlzLndpbmQgPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiBTTk9XRkxBS0VfV0lORF9SQU5HRTtcbiAgICAgICAgICAgICAgICB0aGlzLm9wYWNpdHkgPSBNYXRoLnJhbmRvbSgpICogMC41ICsgMC41O1xuICAgICAgICAgICAgICAgIHRoaXMucm90YXRpb24gPSBNYXRoLnJhbmRvbSgpICogTWF0aC5QSSAqIDI7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3RhdGlvblNwZWVkID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMC4wMjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdXBkYXRlKCkge1xuICAgICAgICAgICAgICAgIHRoaXMueSArPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgICAgIHRoaXMueCArPSB0aGlzLndpbmQgKyAoTWF0aC5zaW4odGhpcy55ICogMC4wMSkgKiAwLjIpO1xuICAgICAgICAgICAgICAgIHRoaXMucm90YXRpb24gKz0gdGhpcy5yb3RhdGlvblNwZWVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkcmF3KCkge1xuICAgICAgICAgICAgICAgIGlmICghaW1hZ2VMb2FkZWQpIHJldHVybjtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNC60LAg0YfQuCBjYW52YXMg0LzQsNGUINC/0YDQsNCy0LjQu9GM0L3QuNC5INGA0L7Qt9C80ZbRgFxuICAgICAgICAgICAgICAgIGlmIChjYW52YXMud2lkdGggPT09IDAgfHwgY2FudmFzLmhlaWdodCA9PT0gMCkgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgY3R4LnNhdmUoKTtcbiAgICAgICAgICAgICAgICBjdHguZ2xvYmFsQWxwaGEgPSB0aGlzLm9wYWNpdHk7XG4gICAgICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZSh0aGlzLngsIHRoaXMueSk7XG4gICAgICAgICAgICAgICAgY3R4LnJvdGF0ZSh0aGlzLnJvdGF0aW9uKTtcbiAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgICAgICAgICBzbm93Zmxha2VJbWFnZSxcbiAgICAgICAgICAgICAgICAgICAgLXRoaXMuc2l6ZSAvIDIsXG4gICAgICAgICAgICAgICAgICAgIC10aGlzLnNpemUgLyAyLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNpemUsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2l6ZVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgY3R4LnJlc3RvcmUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaXNPZmZTY3JlZW4oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMueSA+IGNhbnZhcy5oZWlnaHQgKyAyMCB8fCBcbiAgICAgICAgICAgICAgICAgICAgICAgdGhpcy54IDwgLTIwIHx8IFxuICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnggPiBjYW52YXMud2lkdGggKyAyMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVNub3dmbGFrZSgpIHtcbiAgICAgICAgICAgIGlmIChzbm93Zmxha2VzLmxlbmd0aCA8IFNOT1dGTEFLRV9DT1VOVCkge1xuICAgICAgICAgICAgICAgIHNub3dmbGFrZXMucHVzaChuZXcgU25vd2ZsYWtlKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlU25vd2ZsYWtlcygpIHtcbiAgICAgICAgICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gICAgICAgICAgICBpZiAobm93IC0gbGFzdFNub3dmbGFrZVRpbWUgPiBTTk9XRkxBS0VfU1BBV05fSU5URVJWQUwpIHtcbiAgICAgICAgICAgICAgICBjcmVhdGVTbm93Zmxha2UoKTtcbiAgICAgICAgICAgICAgICBsYXN0U25vd2ZsYWtlVGltZSA9IG5vdztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHNub3dmbGFrZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICBzbm93Zmxha2VzW2ldLnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgIGlmIChzbm93Zmxha2VzW2ldLmlzT2ZmU2NyZWVuKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgc25vd2ZsYWtlcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZHJhd1Nub3dmbGFrZXMoKSB7XG4gICAgICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNC60LAg0YfQuCBjYW52YXMg0LzQsNGUINC/0YDQsNCy0LjQu9GM0L3QuNC5INGA0L7Qt9C80ZbRgCDQv9C10YDQtdC0INC80LDQu9GO0LLQsNC90L3Rj9C8XG4gICAgICAgICAgICBpZiAoY2FudmFzLndpZHRoID09PSAwIHx8IGNhbnZhcy5oZWlnaHQgPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXNpemVDYW52YXMoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIHNub3dmbGFrZXMuZm9yRWFjaChzbm93Zmxha2UgPT4ge1xuICAgICAgICAgICAgICAgIHNub3dmbGFrZS5kcmF3KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGFuaW1hdGUoKSB7XG4gICAgICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNGP0ZTQvNC+INGA0L7Qt9C80ZbRgCBjYW52YXMg0L3QsCDQv9C+0YfQsNGC0LrRgyDQutC+0LbQvdC+0LPQviDQutCw0LTRgNGDICjRgtGW0LvRjNC60Lgg0Y/QutGJ0L4g0LLRltC9INC90LXQv9GA0LDQstC40LvRjNC90LjQuSlcbiAgICAgICAgICAgIGlmIChjYW52YXMud2lkdGggPT09IDAgfHwgY2FudmFzLmhlaWdodCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJlc2l6ZUNhbnZhcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB1cGRhdGVTbm93Zmxha2VzKCk7XG4gICAgICAgICAgICBkcmF3U25vd2ZsYWtlcygpO1xuICAgICAgICAgICAgYW5pbWF0aW9uSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBzdGFydEFuaW1hdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChhbmltYXRpb25JZCkge1xuICAgICAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbklkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFuaW1hdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vINCX0YPQv9C40L3Rj9GU0LzQviDQsNC90ZbQvNCw0YbRltGOINC/0YDQuCDQstC40YXQvtC00ZYg0Lcgdmlld3BvcnRcbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICAgICAgICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghYW5pbWF0aW9uSWQgJiYgaW1hZ2VMb2FkZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QW5pbWF0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYW5pbWF0aW9uSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbklkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbklkID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGNhbnZhcyk7XG4gICAgfVxuICAgIFxuICAgIGxvYWRUcmFuc2xhdGlvbnMoKVxuICAgICAgICAudGhlbihpbml0KSAvLyDQt9Cw0L/Rg9GB0Log0ZbQvdGW0YLRgyDRgdGC0L7RgNGW0L3QutC4XG5cblxuXG5cblxuICAgIC8vIGNvbnN0IGxuZ0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG5nLWJ0blwiKVxuICAgIC8vXG4gICAgLy8gLy8g0JLRgdGC0LDQvdC+0LLQu9GO0ZTQvNC+INGC0LXQutGB0YIg0LrQvdC+0L/QutC4INC90LAg0L/QvtGC0L7Rh9C90YMg0LDQutGC0LjQstC90YMg0LzQvtCy0YNcbiAgICAvLyBmdW5jdGlvbiB1cGRhdGVMYW5ndWFnZUJ1dHRvbigpIHtcbiAgICAvLyAgICAgLy8g0JLQuNC60L7RgNC40YHRgtC+0LLRg9GU0LzQviDRgtGDINGB0LDQvNGDINC70L7Qs9GW0LrRgywg0YnQviDRliDQtNC70Y8g0LLQuNC30L3QsNGH0LXQvdC90Y8gbG9jYWxlXG4gICAgLy8gICAgIGxldCBjdXJyZW50TG9jYWxlID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsZVwiKSB8fCBcImhyXCI7XG4gICAgLy8gICAgIGlmIChockxlbmcpIGN1cnJlbnRMb2NhbGUgPSAnaHInO1xuICAgIC8vICAgICBpZiAoZW5MZW5nKSBjdXJyZW50TG9jYWxlID0gJ2VuJztcbiAgICAvLyAgICAgaWYgKGxuZ0J0bikge1xuICAgIC8vICAgICAgICAgbG5nQnRuLnRleHRDb250ZW50ID0gY3VycmVudExvY2FsZTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cbiAgICAvL1xuICAgIC8vIC8vINCe0L3QvtCy0LvRjtGU0LzQviDQutC90L7Qv9C60YMg0L/RgNC4INC30LDQstCw0L3RgtCw0LbQtdC90L3RliAo0L/RltGB0LvRjyDQstC40LfQvdCw0YfQtdC90L3RjyBsb2NhbGUpXG4gICAgLy8gdXBkYXRlTGFuZ3VhZ2VCdXR0b24oKTtcblxuICAgIC8vIGlmIChsbmdCdG4pIHtcbiAgICAvLyAgICAgbG5nQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgLy8gICAgICAgICAvLyDQktC40LfQvdCw0YfQsNGU0LzQviDQv9C+0YLQvtGH0L3RgyDQvNC+0LLRgyDQv9C10YDQtdC0INC/0LXRgNC10LzQuNC60LDQvdC90Y/QvFxuICAgIC8vICAgICAgICAgbGV0IGN1cnJlbnRMb2NhbGUgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxlXCIpIHx8IFwiaHJcIjtcbiAgICAvLyAgICAgICAgIGlmIChockxlbmcpIGN1cnJlbnRMb2NhbGUgPSAnaHInO1xuICAgIC8vICAgICAgICAgaWYgKGVuTGVuZykgY3VycmVudExvY2FsZSA9ICdlbic7XG4gICAgLy9cbiAgICAvLyAgICAgICAgIGlmIChjdXJyZW50TG9jYWxlID09PSBcImVuXCIpIHtcbiAgICAvLyAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwibG9jYWxlXCIpO1xuICAgIC8vICAgICAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwibG9jYWxlXCIsIFwiZW5cIik7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgLy8gICAgIH0pO1xuICAgIC8vIH1cbiAgICAvL1xuICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1idG5cIik/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgLy8gICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS10ZXN0XCIpPy5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKTtcbiAgICAvLyB9KTtcblxuICAgIC8vINCi0LjQvNGH0LDRgdC+0LLQuNC5INC+0LEn0ZTQutGCINC3INC00LDQvdC40LzQuCDQv9GA0L4g0L/RgNC+0LzRltC20LrQuCDRgtC40LbQvdGW0LJcbiAgICAvLyBUT0RPOiDQl9Cw0LzRltC90LjRgtC4INC90LAg0LTQsNC90ZYg0Lcg0LHQtdC60LXQvdC00YNcbiAgICAvLyDQn9GA0LjQutC70LDQtCDRgdGC0YDRg9C60YLRg9GA0Lgg0LTQsNC90LjRhSDQtyDQsdC10LrQtdC90LTRgzpcbiAgICAvLyB7XG4gICAgLy8gICAgIDE6IHsgc3RhcnQ6IFwiMjAyNS0xMi0xNVQwMDowMDowMFwiLCBlbmQ6IFwiMjAyNS0xMi0yMVQyMzo1OTo1OVwiIH0sXG4gICAgLy8gICAgIDI6IHsgc3RhcnQ6IFwiMjAyNS0xMi0yMlQwMDowMDowMFwiLCBlbmQ6IFwiMjAyNS0xMi0yOFQyMzo1OTo1OVwiIH0sXG4gICAgLy8gICAgIC4uLlxuICAgIC8vIH1cbiAgICAvLyDQlNC70Y8g0ZbQvdGC0LXQs9GA0LDRhtGW0Zcg0Lcg0LHQtdC60LXQvdC00L7QvDog0LfQsNC80ZbQvdC40YLQuCDRhtC10Lkg0L7QsSfRlNC60YIg0L3QsCDQtNCw0L3RliDQtyBBUElcbiAgICAvLyDQndCw0L/RgNC40LrQu9Cw0LQ6IGNvbnN0IHdlZWtzRGF0YSA9IGF3YWl0IHJlcXVlc3QoJy9hcGkvd2Vla3MnKTtcbiAgICBjb25zdCB3ZWVrc0RhdGEgPSB7XG4gICAgICAgIDE6IHtcbiAgICAgICAgICAgIHN0YXJ0OiBcIjIwMjUtMTItMTVUMDA6MDA6MDBcIixcbiAgICAgICAgICAgIGVuZDogXCIyMDI1LTEyLTIxVDIzOjU5OjU5XCJcbiAgICAgICAgfSxcbiAgICAgICAgMjoge1xuICAgICAgICAgICAgc3RhcnQ6IFwiMjAyNS0xMi0yMlQwMDowMDowMFwiLFxuICAgICAgICAgICAgZW5kOiBcIjIwMjUtMTItMjhUMjM6NTk6NTlcIlxuICAgICAgICB9LFxuICAgICAgICAzOiB7XG4gICAgICAgICAgICBzdGFydDogXCIyMDI1LTEyLTI5VDAwOjAwOjAwXCIsXG4gICAgICAgICAgICBlbmQ6IFwiMjAyNi0wMS0wNFQyMzo1OTo1OVwiXG4gICAgICAgIH0sXG4gICAgICAgIDQ6IHtcbiAgICAgICAgICAgIHN0YXJ0OiBcIjIwMjYtMDEtMDVUMDA6MDA6MDBcIixcbiAgICAgICAgICAgIGVuZDogXCIyMDI2LTAxLTExVDIzOjU5OjU5XCJcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyDQpNGD0L3QutGG0ZbRjyDQtNC70Y8g0LLQuNC30L3QsNGH0LXQvdC90Y8g0LDQutGC0LjQstC90L7Qs9C+INGC0LjQttC90Y8g0L3QsCDQvtGB0L3QvtCy0ZYg0LTQsNC90LjRhSDQtyDQvtCxJ9GU0LrRgtCwXG4gICAgZnVuY3Rpb24gZ2V0QWN0aXZlV2Vlayh3ZWVrc0RhdGEpIHtcbiAgICAgICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBsZXQgYWN0aXZlV2Vla0luZGV4ID0gbnVsbDtcblxuICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNC60LAg0LrQvtC20L3QvtCz0L4g0YLQuNC20L3Rj1xuICAgICAgICBmb3IgKGNvbnN0IHdlZWtOdW0gaW4gd2Vla3NEYXRhKSB7XG4gICAgICAgICAgICBjb25zdCB3ZWVrID0gd2Vla3NEYXRhW3dlZWtOdW1dO1xuICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSBuZXcgRGF0ZSh3ZWVrLnN0YXJ0KTtcbiAgICAgICAgICAgIGNvbnN0IGVuZCA9IG5ldyBEYXRlKHdlZWsuZW5kKTtcblxuICAgICAgICAgICAgaWYgKGN1cnJlbnREYXRlID49IHN0YXJ0ICYmIGN1cnJlbnREYXRlIDw9IGVuZCkge1xuICAgICAgICAgICAgICAgIGFjdGl2ZVdlZWtJbmRleCA9IHBhcnNlSW50KHdlZWtOdW0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFjdGl2ZVdlZWtJbmRleDtcbiAgICB9XG5cbiAgICAvLyDQhtC90ZbRhtGW0LDQu9GW0LfQsNGG0ZbRjyDRgdC10LrRhtGW0Zcg0ZbQs9C+0YAg0Lcg0LDQstGC0L7QvNCw0YLQuNGH0L3QuNC8INCy0LjQt9C90LDRh9C10L3QvdGP0Lwg0YLQuNC20L3Rj1xuICAgIGZ1bmN0aW9uIGluaXRHYW1lc1dlZWsoKSB7XG4gICAgICAgIC8vINCS0LjQt9C90LDRh9Cw0ZTQvNC+INCw0LrRgtC40LLQvdC40Lkg0YLQuNC20LTQtdC90Ywg0L3QsCDQvtGB0L3QvtCy0ZYg0LTQsNC90LjRhSDQtyDQvtCxJ9GU0LrRgtCwXG4gICAgICAgIGxldCBhY3RpdmVXZWVrID0gZ2V0QWN0aXZlV2Vlayh3ZWVrc0RhdGEpIHx8IDE7XG5cbiAgICAgICAgLy8g0J7QsdC80LXQttC10L3QvdGPINC00L4gNCDRgtC40LbQvdGW0LJcbiAgICAgICAgaWYgKGFjdGl2ZVdlZWsgPiA0KSBhY3RpdmVXZWVrID0gNDtcblxuICAgICAgICAvLyDQn9GA0LjRhdC+0LLRg9Cy0LDQvdC90Y8g0LLRgdGW0YUg0YHQv9C40YHQutGW0LIg0ZbQs9C+0YBcbiAgICAgICAgY29uc3QgZ2FtZUxpc3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdhbWVzX19saXN0Jyk7XG4gICAgICAgIGdhbWVMaXN0cy5mb3JFYWNoKGxpc3QgPT4ge1xuICAgICAgICAgICAgbGlzdC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vINCf0L7QutCw0Lcg0YLRltC70YzQutC4INCw0LrRgtC40LLQvdC+0LPQviDRgtC40LbQvdGPXG4gICAgICAgIGNvbnN0IGN1cnJlbnRMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmdhbWVzX19saXN0Ll93ZWVrJHthY3RpdmVXZWVrfWApO1xuICAgICAgICBpZiAoY3VycmVudExpc3QpIHtcbiAgICAgICAgICAgIGN1cnJlbnRMaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vINCQ0LLRgtC+0LzQsNGC0LjRh9C90LUg0LTQvtC00LDQstCw0L3QvdGPIGRhdGEt0LDRgtGA0LjQsdGD0YLRltCyINC00LvRjyDRgtGA0LXQutGW0L3Qs9GDINGC0LAg0LLRgdGC0LDQvdC+0LLQu9C10L3QvdGPINC/0L7RgdC40LvQsNC90YxcbiAgICAgICAgYXV0b0FkZERhdGFCdXR0b25zKCk7XG4gICAgICAgIHNldEdhbWVMaW5rcygpO1xuICAgIH1cblxuICAgIC8vINCi0LjQvNGH0LDRgdC+0LLQuNC5INC+0LEn0ZTQutGCINC3INC80LDQv9GW0L3Qs9C+0LwgZ2FtZS1pZCDQvdCwIFVSTFxuICAgIC8vIFRPRE86INCX0LDQvNGW0L3QuNGC0Lgg0L3QsCDQtNCw0L3RliDQtyDQsdC10LrQtdC90LTRg1xuICAgIC8vINCf0YDQuNC60LvQsNC0INGB0YLRgNGD0LrRgtGD0YDQuCDQtNCw0L3QuNGFINC3INCx0LXQutC10L3QtNGDOlxuICAgIC8vIHtcbiAgICAvLyAgICAgXCJ3ZWVrMV9nYW1lMVwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL2dhbWUtc2x1Zy0xXCIsXG4gICAgLy8gICAgIFwid2VlazFfZ2FtZTJcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9nYW1lLXNsdWctMlwiLFxuICAgIC8vICAgICAuLi5cbiAgICAvLyB9XG4gICAgLy8g0JTQu9GPINGW0L3RgtC10LPRgNCw0YbRltGXINC3INCx0LXQutC10L3QtNC+0Lw6IGNvbnN0IGdhbWVzTGlua3MgPSBhd2FpdCByZXF1ZXN0KCcvYXBpL2dhbWVzL2xpbmtzJyk7XG4gICAgY29uc3QgZ2FtZXNMaW5rcyA9IHtcbiAgICAgICAgLy8gV2VlayAxXG4gICAgICAgIFwid2VlazFfZ2FtZTFcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrMV9nYW1lMlwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWsxX2dhbWUzXCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazFfZ2FtZTRcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrMV9nYW1lNVwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWsxX2dhbWU2XCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazFfZ2FtZTdcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrMV9nYW1lOFwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWsxX2dhbWU5XCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazFfZ2FtZTEwXCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIC8vIFdlZWsgMlxuICAgICAgICBcIndlZWsyX2dhbWUxXCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazJfZ2FtZTJcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrMl9nYW1lM1wiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWsyX2dhbWU0XCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazJfZ2FtZTVcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrMl9nYW1lNlwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWsyX2dhbWU3XCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazJfZ2FtZThcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrMl9nYW1lOVwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWsyX2dhbWUxMFwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICAvLyBXZWVrIDNcbiAgICAgICAgXCJ3ZWVrM19nYW1lMVwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWszX2dhbWUyXCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazNfZ2FtZTNcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrM19nYW1lNFwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWszX2dhbWU1XCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazNfZ2FtZTZcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrM19nYW1lN1wiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWszX2dhbWU4XCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazNfZ2FtZTlcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrM19nYW1lMTBcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgLy8gV2VlayA0XG4gICAgICAgIFwid2VlazRfZ2FtZTFcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrNF9nYW1lMlwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWs0X2dhbWUzXCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazRfZ2FtZTRcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrNF9nYW1lNVwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWs0X2dhbWU2XCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazRfZ2FtZTdcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrNF9nYW1lOFwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWs0X2dhbWU5XCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazRfZ2FtZTEwXCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCJcbiAgICB9O1xuXG4gICAgLy8g0JLRgdGC0LDQvdC+0LLQu9C10L3QvdGPINGD0L3RltC60LDQu9GM0L3QuNGFINC/0L7RgdC40LvQsNC90Ywg0LTQu9GPINC60L7QttC90L7RlyDQs9GA0LhcbiAgICBmdW5jdGlvbiBzZXRHYW1lTGlua3MoKSB7XG4gICAgICAgIGNvbnN0IGdhbWVMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYW1lc19faXRlbS1saW5rW2RhdGEtZ2FtZS1pZF0nKTtcbiAgICAgICAgXG4gICAgICAgIGdhbWVMaW5rcy5mb3JFYWNoKGxpbmsgPT4ge1xuICAgICAgICAgICAgY29uc3QgZ2FtZUlkID0gbGluay5nZXRBdHRyaWJ1dGUoJ2RhdGEtZ2FtZS1pZCcpO1xuICAgICAgICAgICAgaWYgKGdhbWVJZCAmJiBnYW1lc0xpbmtzW2dhbWVJZF0pIHtcbiAgICAgICAgICAgICAgICBsaW5rLmhyZWYgPSBnYW1lc0xpbmtzW2dhbWVJZF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vINCQ0LLRgtC+0LzQsNGC0LjRh9C90LUg0LTQvtC00LDQstCw0L3QvdGPIGRhdGEt0LDRgtGA0LjQsdGD0YLRltCyINC00LvRjyDRgtGA0LXQutGW0L3Qs9GDXG4gICAgZnVuY3Rpb24gYXV0b0FkZERhdGFCdXR0b25zKCkge1xuICAgICAgICBjb25zdCBnYW1lTGlzdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2FtZXNfX2xpc3QnKTtcbiAgICAgICAgXG4gICAgICAgIGdhbWVMaXN0cy5mb3JFYWNoKGxpc3QgPT4ge1xuICAgICAgICAgICAgY29uc3Qgd2Vla01hdGNoID0gbGlzdC5jbGFzc05hbWUubWF0Y2goL193ZWVrKFxcZCspLyk7XG4gICAgICAgICAgICBpZiAoIXdlZWtNYXRjaCkgcmV0dXJuO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCB3ZWVrID0gd2Vla01hdGNoWzFdO1xuICAgICAgICAgICAgY29uc3QgaXRlbXMgPSBsaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYW1lc19faXRlbScpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpdGVtcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGdhbWVOdW1iZXIgPSBpbmRleCArIDE7XG4gICAgICAgICAgICAgICAgY29uc3QgYnV0dG9uTmFtZSA9IGB3ZWVrJHt3ZWVrfUdhbWUke2dhbWVOdW1iZXJ9YDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBsaW5rRWwgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5nYW1lc19faXRlbS1saW5rJyk7XG4gICAgICAgICAgICAgICAgaWYgKGxpbmtFbCkge1xuICAgICAgICAgICAgICAgICAgICAvLyDQntC90L7QstC70Y7RlNC80L4gZGF0YS1idXR0b24g0Y/QutGJ0L4g0YnQtSDQvdC1INCy0YHRgtCw0L3QvtCy0LvQtdC90L4g0LDQsdC+INC90LXQutC+0YDQtdC60YLQvdC1XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRCdXR0b24gPSBsaW5rRWwuZ2V0QXR0cmlidXRlKCdkYXRhLWJ1dHRvbicpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWN1cnJlbnRCdXR0b24gfHwgIWN1cnJlbnRCdXR0b24uaW5jbHVkZXMoYHdlZWske3dlZWt9R2FtZWApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rRWwuc2V0QXR0cmlidXRlKCdkYXRhLWJ1dHRvbicsIGJ1dHRvbk5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vINCS0YHRgtCw0L3QvtCy0LvRjtGU0LzQviBkYXRhLXByb21vINGP0LrRidC+INGJ0LUg0L3QtSDQstGB0YLQsNC90L7QstC70LXQvdC+XG4gICAgICAgICAgICAgICAgICAgIGlmICghbGlua0VsLmdldEF0dHJpYnV0ZSgnZGF0YS1wcm9tbycpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rRWwuc2V0QXR0cmlidXRlKCdkYXRhLXByb21vJywgJ3JhemluYV8yMDI2X2hyJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbn0pKCk7XG4iXX0=
