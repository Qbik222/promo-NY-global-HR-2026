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
  function initParticipateCanvas() {
    var canvas = document.querySelector('#participateCanvas');
    if (!canvas) return;
    var ctx = canvas.getContext('2d');

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwibWFpblBhZ2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJsb2FkZXIiLCJyZXN1bHRzVGFibGUiLCJyZXN1bHRzVGFibGVPdGhlciIsImhyTGVuZyIsImVuTGVuZyIsImxvY2FsZSIsImRlYnVnIiwiaGlkZUxvYWRlciIsImkxOG5EYXRhIiwidHJhbnNsYXRlU3RhdGUiLCJ1c2VySWQiLCJyZXF1ZXN0IiwibGluayIsImV4dHJhT3B0aW9ucyIsImZldGNoIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJvayIsIkVycm9yIiwianNvbiIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsInJlcG9ydEVycm9yIiwic3R5bGUiLCJkaXNwbGF5Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwic3RhcnRzV2l0aCIsIlByb21pc2UiLCJyZWplY3QiLCJjbGFzc0xpc3QiLCJhZGQiLCJib2R5Iiwib3ZlcmZsb3ciLCJyZW1vdmUiLCJpbml0IiwidHJ5RGV0ZWN0VXNlcklkIiwicXVpY2tDaGVja0FuZFJlbmRlciIsImluaXRHYW1lc1dlZWsiLCJpbml0UHJvZ3Jlc3NCYXIiLCJpbml0UGFydGljaXBhdGVDYW52YXMiLCJpbml0U25vd2ZsYWtlc0NhbnZhcyIsInNldFRpbWVvdXQiLCJhZGRFdmVudExpc3RlbmVyIiwiZHJvcGRvd25zIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJkcm9wZG93biIsImV2ZW50Iiwib3BlbiIsInN1bW1hcnkiLCJzdW1tYXJ5UmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImN1cnJlbnRTY3JvbGxZIiwic2Nyb2xsWSIsInBhZ2VZT2Zmc2V0IiwidGFyZ2V0U2Nyb2xsWSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInNjcm9sbFRvIiwiTWF0aCIsIm1heCIsImJlaGF2aW9yIiwic3RvcmUiLCJzdGF0ZSIsImdldFN0YXRlIiwiYXV0aCIsImlzQXV0aG9yaXplZCIsImlkIiwiZ191c2VyX2lkIiwiYXR0ZW1wdHMiLCJtYXhBdHRlbXB0cyIsImF0dGVtcHRJbnRlcnZhbCIsIndhaXRGb3JVc2VySWQiLCJyZXNvbHZlIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJsb2FkVHJhbnNsYXRpb25zIiwidHJhbnNsYXRlIiwicmVwb3J0RGF0YSIsIm9yaWdpbiIsInVzZXJpZCIsImVycm9yVGV4dCIsInRleHQiLCJtZXNzYWdlIiwidHlwZSIsIm5hbWUiLCJzdGFjayIsIm1ldGhvZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ3YXJuIiwiZWxlbXMiLCJsZW5ndGgiLCJlbGVtIiwia2V5IiwiZ2V0QXR0cmlidXRlIiwiaW5uZXJIVE1MIiwicmVtb3ZlQXR0cmlidXRlIiwibG9nIiwicmVmcmVzaExvY2FsaXplZENsYXNzIiwiZWxlbWVudCIsImxhbmciLCJyZW5kZXJVc2VycyIsIndlZWtOdW0iLCJ1c2VyRGF0YSIsIk51bWJlciIsIndlZWtPYmoiLCJmaW5kIiwidyIsIndlZWsiLCJkYXRhIiwiQXJyYXkiLCJpc0FycmF5IiwidXNlcnMiLCJpc1N0YWdlRW5kZWQiLCJ3aW5uZXJBZGRpdGlvbmFsUHJpemUiLCJ1Iiwid2lubmVyIiwiY3VycmVudFVzZXIiLCJ1c2VyIiwiaXNWZXJpZmllZFVzZXIiLCJwb2ludHMiLCJwb3B1bGF0ZVVzZXJzVGFibGUiLCJjdXJyZW50VXNlcklkIiwic2Vjb25kVGFibGVPdGhlciIsInNlY29uZFRhYmxlIiwiaXNUb3BDdXJyZW50VXNlciIsInNsaWNlIiwic29tZSIsInRvcFVzZXJzTGVuZ3RoIiwidG9wVXNlcnMiLCJkaXNwbGF5VXNlciIsImlzQ3VycmVudFVzZXIiLCJ0YWJsZSIsInJlbmRlclJvdyIsIm9wdGlvbnMiLCJoaWdobGlnaHQiLCJuZWlnaGJvciIsInVzZXJSb3ciLCJjcmVhdGVFbGVtZW50IiwidXNlclBsYWNlIiwiaW5kZXhPZiIsInByaXplS2V5IiwiZ2V0UHJpemVUcmFuc2xhdGlvbktleSIsInRyYW5zbGF0ZUtleSIsIm1hc2tVc2VySWQiLCJ0b0ZpeGVkIiwiYXBwZW5kIiwiaW5kZXgiLCJjYW52YXMiLCJwZXJjZW50RWxlbWVudCIsImN0eCIsImdldENvbnRleHQiLCJiYXJIZWlnaHQiLCJzZWdtZW50V2lkdGgiLCJzZWdtZW50SGVpZ2h0Iiwic2VnbWVudEdhcCIsInBhZGRpbmciLCJzZWdtZW50UmFkaXVzIiwiY3VycmVudFByb2dyZXNzIiwidGFyZ2V0UHJvZ3Jlc3MiLCJsb2FkaW5nRHVyYXRpb24iLCJzdGFydFRpbWUiLCJEYXRlIiwibm93IiwiYW5pbWF0aW9uSWQiLCJtYXhTZWdtZW50cyIsImlzTG9hZGluZ0NvbXBsZXRlIiwicmVzaXplQ2FudmFzIiwiY29udGFpbmVyIiwicGFyZW50RWxlbWVudCIsImNvbnRhaW5lcldpZHRoIiwib2Zmc2V0V2lkdGgiLCJ3aWR0aCIsImhlaWdodCIsImF2YWlsYWJsZVdpZHRoIiwic2VnbWVudFdpdGhHYXAiLCJmbG9vciIsImRyYXdQcm9ncmVzc0JhciIsInByb2dyZXNzIiwiY2xlYXJSZWN0Iiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJzdHJva2VSZWN0IiwiZmlsbGVkU2VnbWVudHMiLCJmaWxsU3R5bGUiLCJjZW50ZXJZIiwiaSIsIngiLCJ5IiwiYmVnaW5QYXRoIiwicm91bmRSZWN0IiwiciIsIm1vdmVUbyIsImxpbmVUbyIsInF1YWRyYXRpY0N1cnZlVG8iLCJjbG9zZVBhdGgiLCJmaWxsIiwidXBkYXRlUHJvZ3Jlc3MiLCJlbGFwc2VkIiwicGVyY2VudCIsInRleHRDb250ZW50IiwicmVzaXplVGltZW91dCIsImNsZWFyVGltZW91dCIsImluaXRJY29uc0FuaW1hdGlvbiIsImR1cmF0aW9uIiwiaWNvbnMiLCJvcmlnaW5hbFRyYW5zZm9ybXMiLCJNYXAiLCJzZWxlY3RvciIsImljb24iLCJjb21wdXRlZFN0eWxlIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIm9yaWdpbmFsVHJhbnNmb3JtIiwidHJhbnNmb3JtIiwic2V0Iiwib3BhY2l0eSIsInRyYW5zaXRpb24iLCJpY29uQ291bnQiLCJnZXQiLCJpc01vYmlsZSIsImlubmVyV2lkdGgiLCJDQU5WQVNfV0lEVEgiLCJDQU5WQVNfSEVJR0hUIiwiVFJFRV9XSURUSCIsIlRSRUVfSEVJR0hUIiwiRlJBTUVTX1BFUl9ST1ciLCJUT1RBTF9ST1dTIiwiU1BSSVRFX1NIRUVUX1dJRFRIIiwiU1BSSVRFX1NIRUVUX0hFSUdIVCIsIkZSQU1FX1dJRFRIIiwiRlJBTUVfSEVJR0hUIiwiREVFUl9TQ0FMRSIsIkRFRVJfV0lEVEgiLCJERUVSX0hFSUdIVCIsInRyZWVYIiwidHJlZVkiLCJGUkFNRV9ERUxBWSIsIldBTEtJTkdfRlJBTUVTIiwiRlJBTUVfUkVQRUFUIiwiSURMRV9NSU5fRFVSQVRJT04iLCJJRExFX01BWF9EVVJBVElPTiIsIkRFRVJfU1RBVEUiLCJXQUxLSU5HIiwiSURMRSIsImZyYW1lQ291bnRlciIsIkRlZXIiLCJzdGFydFgiLCJzdGFydFkiLCJtaW5YIiwibWF4WCIsInNwZWVkIiwiekluZGV4IiwiZGlyZWN0aW9uIiwiZnJhbWVJbmRleCIsImZyYW1lUmVwZWF0Q291bnRlciIsImlkbGVUaW1lciIsImlkbGVEdXJhdGlvbiIsInJvdyIsImNvbCIsInNob3VsZFVwZGF0ZUZyYW1lIiwicmFuZG9tIiwic3ByaXRlSW1hZ2UiLCJmcmFtZVdpZHRoIiwiZnJhbWVIZWlnaHQiLCJkZWVyV2lkdGgiLCJkZWVySGVpZ2h0IiwiY29tcGxldGUiLCJnZXRTcHJpdGVGcmFtZUluZGV4Iiwic291cmNlWCIsInNvdXJjZVkiLCJkcmF3SW1hZ2UiLCJkZWVycyIsIkRFRVJfQ09VTlQiLCJzY2FsZVgiLCJzY2FsZVkiLCJkZWVyQ29uZmlncyIsImNvbmZpZyIsInB1c2giLCJpbWFnZXMiLCJiYWNrZ3JvdW5kIiwiSW1hZ2UiLCJ0cmVlIiwiZGVlclNwcml0ZSIsImltYWdlc0xvYWRlZCIsInRvdGFsSW1hZ2VzIiwib25JbWFnZUxvYWQiLCJkcmF3Q2FudmFzIiwic3RhcnRBbmltYXRpb24iLCJvbmxvYWQiLCJzcmMiLCJUUkVFX1pfSU5ERVgiLCJkcmF3YWJsZUVsZW1lbnRzIiwiZGVlciIsImRyYXciLCJzb3J0IiwiYSIsImIiLCJhbmltYXRlIiwidXBkYXRlIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJvYnNlcnZlIiwibmV3SXNNb2JpbGUiLCJmYXZQYWdlIiwiU05PV0ZMQUtFX0NPVU5UIiwiU05PV0ZMQUtFX01JTl9TSVpFIiwiU05PV0ZMQUtFX01BWF9TSVpFIiwiU05PV0ZMQUtFX01JTl9TUEVFRCIsIlNOT1dGTEFLRV9NQVhfU1BFRUQiLCJTTk9XRkxBS0VfV0lORF9SQU5HRSIsIlNOT1dGTEFLRV9TUEFXTl9JTlRFUlZBTCIsInNub3dmbGFrZXMiLCJsYXN0U25vd2ZsYWtlVGltZSIsIm5ld1dpZHRoIiwibmV3SGVpZ2h0IiwicmVjdCIsIm9mZnNldEhlaWdodCIsImNsaWVudEhlaWdodCIsInNjcm9sbEhlaWdodCIsImlubmVySGVpZ2h0Iiwic25vd2ZsYWtlSW1hZ2UiLCJpbWFnZUxvYWRlZCIsIndhaXRGb3JQYWdlUmVhZHkiLCJpc1BhZ2VMb2FkaW5nIiwiY29udGFpbnMiLCJTbm93Zmxha2UiLCJzaXplIiwid2luZCIsInJvdGF0aW9uIiwiUEkiLCJyb3RhdGlvblNwZWVkIiwic2luIiwic2F2ZSIsImdsb2JhbEFscGhhIiwicm90YXRlIiwicmVzdG9yZSIsImNyZWF0ZVNub3dmbGFrZSIsInVwZGF0ZVNub3dmbGFrZXMiLCJpc09mZlNjcmVlbiIsInNwbGljZSIsImRyYXdTbm93Zmxha2VzIiwic25vd2ZsYWtlIiwid2Vla3NEYXRhIiwic3RhcnQiLCJlbmQiLCJnZXRBY3RpdmVXZWVrIiwiY3VycmVudERhdGUiLCJhY3RpdmVXZWVrSW5kZXgiLCJwYXJzZUludCIsImFjdGl2ZVdlZWsiLCJnYW1lTGlzdHMiLCJsaXN0IiwiY3VycmVudExpc3QiLCJhdXRvQWRkRGF0YUJ1dHRvbnMiLCJzZXRHYW1lTGlua3MiLCJnYW1lc0xpbmtzIiwiZ2FtZUxpbmtzIiwiZ2FtZUlkIiwid2Vla01hdGNoIiwiY2xhc3NOYW1lIiwibWF0Y2giLCJpdGVtcyIsIml0ZW0iLCJnYW1lTnVtYmVyIiwiYnV0dG9uTmFtZSIsImxpbmtFbCIsImN1cnJlbnRCdXR0b24iLCJpbmNsdWRlcyIsInNldEF0dHJpYnV0ZSJdLCJtYXBwaW5ncyI6Ijs7OytDQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQSxDQUFDLFlBQVk7RUFFVCxJQUFNQSxNQUFNLEdBQUcsc0NBQXNDO0VBRXJELElBQU1DLFFBQVEsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsV0FBVyxDQUFDO0lBQ2hEQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGtCQUFrQixDQUFDO0lBQ25ERSxZQUFZLEdBQUdILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsQ0FBQztJQUMvQ0csaUJBQWlCLEdBQUdKLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGFBQWEsQ0FBQztFQUU3RCxJQUFNSSxNQUFNLEdBQUdMLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFNBQVMsQ0FBQztFQUNoRCxJQUFNSyxNQUFNLEdBQUdOLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFNBQVMsQ0FBQztFQUVoRCxJQUFJTSxNQUFNLEdBQUcsSUFBSTtFQUNqQjs7RUFFQSxJQUFJRixNQUFNLEVBQUVFLE1BQU0sR0FBRyxJQUFJO0VBQ3pCLElBQUlELE1BQU0sRUFBRUMsTUFBTSxHQUFHLElBQUk7RUFFekIsSUFBSUMsS0FBSyxHQUFHLEtBQUs7RUFFakIsSUFBSUEsS0FBSyxFQUFFQyxVQUFVLEVBQUU7RUFFdkIsSUFBSUMsUUFBUSxHQUFHLENBQUMsQ0FBQztFQUNqQixJQUFNQyxjQUFjLEdBQUcsS0FBSztFQUM1QixJQUFJ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dGVudCI6WyIoZnVuY3Rpb24gKCkge1xuXG4gICAgY29uc3QgYXBpVVJMID0gJ2h0dHBzOi8vZmF2LXByb20uY29tL2FwaV9ibGFja19wcml6ZSdcblxuICAgIGNvbnN0IG1haW5QYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mYXYtcGFnZVwiKSxcbiAgICAgICAgbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zcGlubmVyLW92ZXJsYXlcIiksXG4gICAgICAgIHJlc3VsdHNUYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFibGVcIiksXG4gICAgICAgIHJlc3VsdHNUYWJsZU90aGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YWJsZU90aGVyXCIpXG5cbiAgICBjb25zdCBockxlbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaHJMZW5nJyk7XG4gICAgY29uc3QgZW5MZW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VuTGVuZycpO1xuXG4gICAgbGV0IGxvY2FsZSA9IFwiaHJcIlxuICAgIC8vIGxldCBsb2NhbGUgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxlXCIpIHx8IFwiaHJcIlxuXG4gICAgaWYgKGhyTGVuZykgbG9jYWxlID0gJ2hyJztcbiAgICBpZiAoZW5MZW5nKSBsb2NhbGUgPSAnZW4nO1xuXG4gICAgbGV0IGRlYnVnID0gZmFsc2VcblxuICAgIGlmIChkZWJ1ZykgaGlkZUxvYWRlcigpXG5cbiAgICBsZXQgaTE4bkRhdGEgPSB7fTtcbiAgICBjb25zdCB0cmFuc2xhdGVTdGF0ZSA9IGZhbHNlO1xuICAgIGxldCB1c2VySWQgPSBudWxsO1xuICAgIC8vIGxldCB1c2VySWQgPSBOdW1iZXIoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKSkgPz8gbnVsbFxuXG4gICAgY29uc3QgcmVxdWVzdCA9IGZ1bmN0aW9uIChsaW5rLCBleHRyYU9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKGFwaVVSTCArIGxpbmssIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAuLi4oZXh0cmFPcHRpb25zIHx8IHt9KVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKCdBUEkgZXJyb3InKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdBUEkgcmVxdWVzdCBmYWlsZWQ6JywgZXJyKTtcblxuICAgICAgICAgICAgICAgIHJlcG9ydEVycm9yKGVycik7XG5cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmF2LXBhZ2UnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uaHJlZi5zdGFydHNXaXRoKFwiaHR0cHM6Ly93d3cuZmF2YmV0LmhyL1wiKSkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvcHJvbW9jaWplL3Byb21vY2lqYS9zdHViLyc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3Byb21vcy9wcm9tby9zdHViLyc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycik7XG4gICAgICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhpZGVMb2FkZXIoKXtcbiAgICAgICAgbG9hZGVyLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImF1dG9cIlxuICAgICAgICBtYWluUGFnZS5jbGFzc0xpc3QucmVtb3ZlKFwibG9hZGluZ1wiKVxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIGxldCBhdHRlbXB0cyA9IDA7XG4gICAgICAgIGNvbnN0IG1heEF0dGVtcHRzID0gMjA7XG4gICAgICAgIGNvbnN0IGF0dGVtcHRJbnRlcnZhbCA9IDUwO1xuXG4gICAgICAgIGZ1bmN0aW9uIHRyeURldGVjdFVzZXJJZCgpIHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuc3RvcmUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHdpbmRvdy5zdG9yZS5nZXRTdGF0ZSgpO1xuICAgICAgICAgICAgICAgIHVzZXJJZCA9IHN0YXRlLmF1dGguaXNBdXRob3JpemVkICYmIHN0YXRlLmF1dGguaWQgfHwgJyc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHdpbmRvdy5nX3VzZXJfaWQpIHtcbiAgICAgICAgICAgICAgICB1c2VySWQgPSB3aW5kb3cuZ191c2VyX2lkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcXVpY2tDaGVja0FuZFJlbmRlcigpIHtcbiAgICAgICAgICAgIGluaXRHYW1lc1dlZWsoKTtcbiAgICAgICAgICAgIGluaXRQcm9ncmVzc0JhcigpO1xuICAgICAgICAgICAgaW5pdFBhcnRpY2lwYXRlQ2FudmFzKCk7XG4gICAgICAgICAgICBpbml0U25vd2ZsYWtlc0NhbnZhcygpO1xuICAgICAgICAgICAgc2V0VGltZW91dChoaWRlTG9hZGVyLCAzMDApO1xuXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBpbml0UGFydGljaXBhdGVDYW52YXMpO1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJvcmllbnRhdGlvbmNoYW5nZVwiLCBpbml0UGFydGljaXBhdGVDYW52YXMpO1xuXG4gICAgICAgICAgICAvLyBGaXggZHJvcGRvd24gc2Nyb2xsIGlzc3VlIC0gcHJldmVudCBwYWdlIGZyb20gc2hpZnRpbmcgdXAgd2hlbiBvcGVuaW5nIGRyb3Bkb3duXG4gICAgICAgICAgICBjb25zdCBkcm9wZG93bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJvcGRvd24nKTtcbiAgICAgICAgICAgIGRyb3Bkb3ducy5mb3JFYWNoKChkcm9wZG93bikgPT4ge1xuICAgICAgICAgICAgICAgIGRyb3Bkb3duLmFkZEV2ZW50TGlzdGVuZXIoJ3RvZ2dsZScsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERyb3Bkb3duIGlzIG9wZW5pbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN1bW1hcnkgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJ3N1bW1hcnknKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdW1tYXJ5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gR2V0IHN1bW1hcnkgcG9zaXRpb24gcmVsYXRpdmUgdG8gdmlld3BvcnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdW1tYXJ5UmVjdCA9IHN1bW1hcnkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiBzdW1tYXJ5IGlzIG5lYXIgdGhlIHRvcCBvZiB2aWV3cG9ydCAod2l0aGluIDEwMHB4IGZyb20gdG9wKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdW1tYXJ5UmVjdC50b3AgPCAxMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIGhvdyBtdWNoIHRvIHNjcm9sbCB0byBrZWVwIHN1bW1hcnkgdmlzaWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50U2Nyb2xsWSA9IHdpbmRvdy5zY3JvbGxZIHx8IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0U2Nyb2xsWSA9IGN1cnJlbnRTY3JvbGxZICsgc3VtbWFyeVJlY3QudG9wIC0gMTIwOyAvLyAxMjBweCBvZmZzZXQgZnJvbSB0b3BcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBVc2UgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIGZvciBzbW9vdGggc2Nyb2xsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogTWF0aC5tYXgoMCwgdGFyZ2V0U2Nyb2xsWSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB3YWl0Rm9yVXNlcklkID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRyeURldGVjdFVzZXJJZCgpO1xuICAgICAgICAgICAgICAgIGlmICh1c2VySWQgfHwgYXR0ZW1wdHMgPj0gbWF4QXR0ZW1wdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgcXVpY2tDaGVja0FuZFJlbmRlcigpO1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhdHRlbXB0cysrO1xuICAgICAgICAgICAgfSwgYXR0ZW1wdEludGVydmFsKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXdhaXQgd2FpdEZvclVzZXJJZDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2FkVHJhbnNsYXRpb25zKCkge1xuICAgICAgICByZXR1cm4gcmVxdWVzdChgL25ldy10cmFuc2xhdGVzLyR7bG9jYWxlfWApXG4gICAgICAgICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgICAgICBpMThuRGF0YSA9IGpzb247XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlKCk7XG4gICAgICAgICAgICAgICAgLy8gY29uc3QgbXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChtdXRhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgbXV0YXRpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgLy8gICAgIHRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgICAgIC8vICAgICBtdXRhdGlvbk9ic2VydmVyLm9ic2VydmUodGFyZ2V0Tm9kZSwgeyBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgICAgICAgICAgLy8gbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGFyZGNvcmVUZW5uaXNcIiksIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIC8vICAgICBzdWJ0cmVlOiB0cnVlXG4gICAgICAgICAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlcG9ydEVycm9yKGVycikge1xuICAgICAgICBjb25zdCByZXBvcnREYXRhID0ge1xuICAgICAgICAgICAgb3JpZ2luOiB3aW5kb3cubG9jYXRpb24uaHJlZixcbiAgICAgICAgICAgIHVzZXJpZDogdXNlcklkLFxuICAgICAgICAgICAgZXJyb3JUZXh0OiBlcnI/LmVycm9yIHx8IGVycj8udGV4dCB8fCBlcnI/Lm1lc3NhZ2UgfHwgJ1Vua25vd24gZXJyb3InLFxuICAgICAgICAgICAgdHlwZTogZXJyPy5uYW1lIHx8ICdVbmtub3duRXJyb3InLFxuICAgICAgICAgICAgc3RhY2s6IGVycj8uc3RhY2sgfHwgJydcbiAgICAgICAgfTtcblxuICAgICAgICBmZXRjaCgnaHR0cHM6Ly9mYXYtcHJvbS5jb20vYXBpLWNtcy9yZXBvcnRzL2FkZCcsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXBvcnREYXRhKVxuICAgICAgICB9KS5jYXRjaChjb25zb2xlLndhcm4pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRyYW5zbGF0ZSgpIHtcbiAgICAgICAgY29uc3QgZWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10cmFuc2xhdGVdJylcbiAgICAgICAgaWYgKGVsZW1zICYmIGVsZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYodHJhbnNsYXRlU3RhdGUpe1xuICAgICAgICAgICAgICAgIGVsZW1zLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGVsZW0uZ2V0QXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgICAgICAgICAgICAgICAgICBlbGVtLmlubmVySFRNTCA9IGkxOG5EYXRhW2tleV0gfHwgJyotLS0tTkVFRCBUTyBCRSBUUkFOU0xBVEVELS0tLSogICBrZXk6ICAnICsga2V5O1xuICAgICAgICAgICAgICAgICAgICBpZiAoaTE4bkRhdGFba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0cmFuc2xhdGlvbiB3b3JrcyFcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobG9jYWxlID09PSAnZW4nKSB7XG4gICAgICAgICAgICBtYWluUGFnZS5jbGFzc0xpc3QuYWRkKCdlbicpO1xuICAgICAgICB9XG4gICAgICAgIHJlZnJlc2hMb2NhbGl6ZWRDbGFzcyhtYWluUGFnZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVmcmVzaExvY2FsaXplZENsYXNzKGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBsYW5nIG9mIFsnaHInLCAnZW4nXSkge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGxhbmcpO1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChsb2NhbGUpO1xuICAgIH1cblxuXG5cblxuICAgIGZ1bmN0aW9uIHJlbmRlclVzZXJzKHdlZWtOdW0sIHVzZXJEYXRhID0gW10pIHtcbiAgICAgICAgd2Vla051bSA9IE51bWJlcih3ZWVrTnVtKTtcbiAgICAgICAgY29uc3Qgd2Vla09iaiA9IHVzZXJEYXRhLmZpbmQodyA9PiB3LndlZWsgPT09IHdlZWtOdW0pO1xuICAgICAgICBpZiAoIXdlZWtPYmogfHwgIXdlZWtPYmouZGF0YSB8fCAhQXJyYXkuaXNBcnJheSh3ZWVrT2JqLmRhdGEudXNlcnMpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCfQndC10LLRltGA0L3QsCDRgdGC0YDRg9C60YLRg9GA0LAg0LTQsNC90LjRhScpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaXNTdGFnZUVuZGVkID0gd2Vla09iai5kYXRhLmlzU3RhZ2VFbmRlZFxuXG4gICAgICAgIHVzZXJEYXRhID0gd2Vla09iai5kYXRhLnVzZXJzO1xuXG4gICAgICAgIGNvbnN0IHdpbm5lckFkZGl0aW9uYWxQcml6ZSA9IHVzZXJEYXRhLmZpbmQodSA9PiB7XG4gICAgICAgICAgICBpZih1Lndpbm5lciA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cblxuICAgICAgICBjb25zdCBjdXJyZW50VXNlciA9IHVzZXJEYXRhLmZpbmQodXNlciA9PiB1c2VyLnVzZXJpZCA9PT0gdXNlcklkKTtcblxuICAgICAgICBpZih1c2VySWQgJiYgIWN1cnJlbnRVc2VyICYmIGlzVmVyaWZpZWRVc2VyKXtcbiAgICAgICAgICAgIHVzZXJEYXRhID0gWy4uLnVzZXJEYXRhLCB7dXNlcmlkOiB1c2VySWQsIHBvaW50czogMH1dXG4gICAgICAgIH1cbiAgICAgICAgcG9wdWxhdGVVc2Vyc1RhYmxlKHVzZXJEYXRhLCB1c2VySWQsIHdlZWtOdW0sIGN1cnJlbnRVc2VyLCBpc1ZlcmlmaWVkVXNlciwgaXNTdGFnZUVuZGVkLCB3aW5uZXJBZGRpdGlvbmFsUHJpemUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBvcHVsYXRlVXNlcnNUYWJsZSh1c2VycywgY3VycmVudFVzZXJJZCwgd2VlaywgY3VycmVudFVzZXIsIGlzVmVyaWZpZWRVc2VyLCBpc1N0YWdlRW5kZWQsIHdpbm5lckFkZGl0aW9uYWxQcml6ZSkge1xuICAgICAgICBpZiAoIXVzZXJzPy5sZW5ndGgpIHJldHVybjtcbiAgICAgICAgcmVzdWx0c1RhYmxlLmlubmVySFRNTCA9ICcnO1xuICAgICAgICByZXN1bHRzVGFibGVPdGhlci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgc2Vjb25kVGFibGVPdGhlci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgc2Vjb25kVGFibGUuaW5uZXJIVE1MID0gJyc7XG5cblxuICAgICAgICBjb25zdCBpc1RvcEN1cnJlbnRVc2VyID0gY3VycmVudFVzZXIgJiYgdXNlcnMuc2xpY2UoMCwgMTApLnNvbWUodXNlciA9PiB1c2VyLnVzZXJpZCA9PT0gY3VycmVudFVzZXJJZCk7XG5cbiAgICAgICAgY29uc3QgdG9wVXNlcnNMZW5ndGggPSAhdXNlcklkIHx8IGlzVG9wQ3VycmVudFVzZXIgID8gMTAgOiAxMDtcblxuICAgICAgICBjb25zdCB0b3BVc2VycyA9IHVzZXJzLnNsaWNlKDAsIHRvcFVzZXJzTGVuZ3RoKTtcblxuICAgICAgICB0b3BVc2Vycy5mb3JFYWNoKHVzZXIgPT4ge1xuICAgICAgICAgICAgZGlzcGxheVVzZXIodXNlciwgdXNlci51c2VyaWQgPT09IGN1cnJlbnRVc2VySWQsIHJlc3VsdHNUYWJsZSwgdG9wVXNlcnMsIGlzVG9wQ3VycmVudFVzZXIsIHdlZWspO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYoaXNWZXJpZmllZFVzZXIgJiYgIWN1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgICBkaXNwbGF5VXNlcihjdXJyZW50VXNlciwgdHJ1ZSwgcmVzdWx0c1RhYmxlT3RoZXIsIHVzZXJzLCBmYWxzZSwgd2Vlayk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWlzVG9wQ3VycmVudFVzZXIgJiYgY3VycmVudFVzZXIpIHtcbiAgICAgICAgICAgIGRpc3BsYXlVc2VyKGN1cnJlbnRVc2VyLCB0cnVlLCByZXN1bHRzVGFibGVPdGhlciwgdXNlcnMsIGZhbHNlLCB3ZWVrKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlVc2VyKHVzZXIsIGlzQ3VycmVudFVzZXIsIHRhYmxlLCB1c2VycywgaXNUb3BDdXJyZW50VXNlciwgd2Vlaykge1xuXG4gICAgICAgIGNvbnN0IHJlbmRlclJvdyA9ICh1c2VyRGF0YSwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IGhpZ2hsaWdodCA9IGZhbHNlLCBuZWlnaGJvciA9IGZhbHNlIH0gPSBvcHRpb25zO1xuICAgICAgICAgICAgY29uc3QgdXNlclJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKCd0YWJsZV9fcm93Jyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHVzZXJQbGFjZSA9IHVzZXJzLmluZGV4T2YodXNlckRhdGEpICsgMTtcbiAgICAgICAgICAgIGNvbnN0IHByaXplS2V5ID0gZGVidWcgPyBudWxsIDogZ2V0UHJpemVUcmFuc2xhdGlvbktleSh1c2VyUGxhY2UsIHdlZWspO1xuXG4gICAgICAgICAgICBpZiAodXNlclBsYWNlIDw9IDMpIHtcbiAgICAgICAgICAgICAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoYHBsYWNlJHt1c2VyUGxhY2V9YCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChoaWdobGlnaHQgfHwgaXNDdXJyZW50VXNlciAmJiAhbmVpZ2hib3IpIHtcbiAgICAgICAgICAgICAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoJ3lvdScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChuZWlnaGJvcikge1xuICAgICAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZCgnX25laWdoYm9yJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHVzZXJSb3cuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuICAgICAgICAgICAgICAgICR7dXNlclBsYWNlIDwgMTAgPyAnMCcgKyB1c2VyUGxhY2UgOiB1c2VyUGxhY2V9XG4gICAgICAgICAgICAgICAgJHtpc0N1cnJlbnRVc2VyICYmICFuZWlnaGJvciA/ICc8c3BhbiBjbGFzcz1cInlvdVwiPicgKyB0cmFuc2xhdGVLZXkoXCJ5b3VcIikgKyAnPC9zcGFuPicgOiAnJ31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuICAgICAgICAgICAgICAgICR7aXNDdXJyZW50VXNlciAmJiAhbmVpZ2hib3IgPyB1c2VyRGF0YS51c2VyaWQgOiBtYXNrVXNlcklkKHVzZXJEYXRhLnVzZXJpZCl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke051bWJlcih1c2VyRGF0YS5wb2ludHMpLnRvRml4ZWQoMil9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke3ByaXplS2V5ID8gdHJhbnNsYXRlS2V5KHByaXplS2V5KSA6ICcgLSAnfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG5cbiAgICAgICAgICAgIHRhYmxlLmFwcGVuZCh1c2VyUm93KTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGlzQ3VycmVudFVzZXIgJiYgIWlzVG9wQ3VycmVudFVzZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdXNlcnMuaW5kZXhPZih1c2VyKTtcbiAgICAgICAgICAgIGlmICh1c2Vyc1tpbmRleCAtIDFdKSB7XG4gICAgICAgICAgICAgICAgcmVuZGVyUm93KHVzZXJzW2luZGV4IC0gMV0sIHsgbmVpZ2hib3I6IHRydWUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZW5kZXJSb3codXNlciwgeyBoaWdobGlnaHQ6IHRydWUgfSk7XG4gICAgICAgICAgICBpZiAodXNlcnNbaW5kZXggKyAxXSkge1xuICAgICAgICAgICAgICAgIHJlbmRlclJvdyh1c2Vyc1tpbmRleCArIDFdLCB7IG5laWdoYm9yOiB0cnVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVuZGVyUm93KHVzZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdFByb2dyZXNzQmFyKCkge1xuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvZ3Jlc3NCYXJDYW52YXMnKTtcbiAgICAgICAgY29uc3QgcGVyY2VudEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvZ3Jlc3NQZXJjZW50Jyk7XG4gICAgICAgIGlmICghY2FudmFzIHx8ICFwZXJjZW50RWxlbWVudCkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICBcbiAgICAgICAgLy8g0JrQvtC90YHRgtCw0L3RgtC4XG4gICAgICAgIGNvbnN0IGJhckhlaWdodCA9IDIwOyAvLyDQktC40YHQvtGC0LAg0L/RgNC+0LPRgNC10YEt0LHQsNGA0YNcbiAgICAgICAgY29uc3Qgc2VnbWVudFdpZHRoID0gNDsgLy8g0KjQuNGA0LjQvdCwINC+0LTQvdC+0LPQviDRgdC10LPQvNC10L3RgtCwXG4gICAgICAgIGNvbnN0IHNlZ21lbnRIZWlnaHQgPSAxNDsgLy8g0JLQuNGB0L7RgtCwINC+0LTQvdC+0LPQviDRgdC10LPQvNC10L3RgtCwXG4gICAgICAgIGNvbnN0IHNlZ21lbnRHYXAgPSAyOyAvLyDQn9GA0L7QvNGW0LbQvtC6INC80ZbQtiDRgdC10LPQvNC10L3RgtCw0LzQuFxuICAgICAgICBjb25zdCBwYWRkaW5nID0gMjsgLy8g0JLRltC00YHRgtGD0L8g0LLRltC0INC60YDQsNGX0LJcbiAgICAgICAgY29uc3Qgc2VnbWVudFJhZGl1cyA9IDE7IC8vIEJvcmRlciByYWRpdXMg0LTQu9GPINGB0LXQs9C80LXQvdGC0ZbQslxuICAgICAgICBcbiAgICAgICAgLy8g0J/QsNGA0LDQvNC10YLRgNC4INCw0L3RltC80LDRhtGW0Zcg0LfQsNCy0LDQvdGC0LDQttC10L3QvdGPXG4gICAgICAgIGxldCBjdXJyZW50UHJvZ3Jlc3MgPSAxOyAvLyDQn9C+0YfQuNC90LDRlNC80L4g0LcgMSVcbiAgICAgICAgY29uc3QgdGFyZ2V0UHJvZ3Jlc3MgPSAxMDA7IC8vINCm0ZbQu9GM0L7QstC40Lkg0L/RgNC+0LPRgNC10YFcbiAgICAgICAgY29uc3QgbG9hZGluZ0R1cmF0aW9uID0gMzAwMDsgLy8g0KLRgNC40LLQsNC70ZbRgdGC0Ywg0LfQsNCy0LDQvdGC0LDQttC10L3QvdGPOiAzINGB0LXQutGD0L3QtNC4XG4gICAgICAgIGxldCBzdGFydFRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICBsZXQgYW5pbWF0aW9uSWQgPSBudWxsO1xuICAgICAgICBsZXQgbWF4U2VnbWVudHMgPSAwO1xuICAgICAgICBsZXQgaXNMb2FkaW5nQ29tcGxldGUgPSBmYWxzZTtcbiAgICAgICAgXG4gICAgICAgIGZ1bmN0aW9uIHJlc2l6ZUNhbnZhcygpIHtcbiAgICAgICAgICAgIC8vINCe0YLRgNC40LzRg9GU0LzQviDRgNC+0LfQvNGW0YDQuCDQutC+0L3RgtC10LnQvdC10YDQsFxuICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gY2FudmFzLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICBjb25zdCBjb250YWluZXJXaWR0aCA9IGNvbnRhaW5lci5vZmZzZXRXaWR0aCB8fCA3Njg7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCS0YHRgtCw0L3QvtCy0LvRjtGU0LzQviDRgNC+0LfQvNGW0YDQuCBjYW52YXNcbiAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IGNvbnRhaW5lcldpZHRoO1xuICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IGJhckhlaWdodDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0KDQvtC30YDQsNGF0L7QstGD0ZTQvNC+INC60ZbQu9GM0LrRltGB0YLRjCDRgdC10LPQvNC10L3RgtGW0LIsINGJ0L4g0L/QvtC80ZbRgdGC0Y/RgtGM0YHRj1xuICAgICAgICAgICAgY29uc3QgYXZhaWxhYmxlV2lkdGggPSBjb250YWluZXJXaWR0aCAtIChwYWRkaW5nICogMik7XG4gICAgICAgICAgICBjb25zdCBzZWdtZW50V2l0aEdhcCA9IHNlZ21lbnRXaWR0aCArIHNlZ21lbnRHYXA7XG4gICAgICAgICAgICBtYXhTZWdtZW50cyA9IE1hdGguZmxvb3IoYXZhaWxhYmxlV2lkdGggLyBzZWdtZW50V2l0aEdhcCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCf0LXRgNC10LzQsNC70YzQvtCy0YPRlNC80L4g0Lcg0L/QvtGC0L7Rh9C90LjQvCDQv9GA0L7Qs9GA0LXRgdC+0LxcbiAgICAgICAgICAgIGlmIChjdXJyZW50UHJvZ3Jlc3MgPiAwKSB7XG4gICAgICAgICAgICAgICAgZHJhd1Byb2dyZXNzQmFyKGN1cnJlbnRQcm9ncmVzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGZ1bmN0aW9uIGRyYXdQcm9ncmVzc0Jhcihwcm9ncmVzcykge1xuICAgICAgICAgICAgLy8g0J7Rh9C40YnQsNGU0LzQviBjYW52YXNcbiAgICAgICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0JzQsNC70Y7RlNC80L4g0YDQsNC80LrRgyAo0LHRltC70LjQuSDQv9GA0Y/QvNC+0LrRg9GC0L3QuNC6KVxuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJyNGRkZGRkYnO1xuICAgICAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDE7XG4gICAgICAgICAgICBjdHguc3Ryb2tlUmVjdCgwLjUsIDAuNSwgY2FudmFzLndpZHRoIC0gMSwgY2FudmFzLmhlaWdodCAtIDEpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQoNC+0LfRgNCw0YXQvtCy0YPRlNC80L4g0LrRltC70YzQutGW0YHRgtGMINC30LDQv9C+0LLQvdC10L3QuNGFINGB0LXQs9C80LXQvdGC0ZbQslxuICAgICAgICAgICAgY29uc3QgZmlsbGVkU2VnbWVudHMgPSBNYXRoLmZsb29yKChwcm9ncmVzcyAvIDEwMCkgKiBtYXhTZWdtZW50cyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCc0LDQu9GO0ZTQvNC+INC30LDQv9C+0LLQvdC10L3RliDRgdC10LPQvNC10L3RgtC4INC3INC30LDQvtC60YDRg9Cz0LvQtdC90LjQvNC4INC60YPRgtCw0LzQuFxuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICcjRkZGRkZGJztcbiAgICAgICAgICAgIGNvbnN0IGNlbnRlclkgPSAoYmFySGVpZ2h0IC0gc2VnbWVudEhlaWdodCkgLyAyOyAvLyDQktC10YDRgtC40LrQsNC70YzQvdC1INGG0LXQvdGC0YDRg9Cy0LDQvdC90Y9cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWxsZWRTZWdtZW50czsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeCA9IHBhZGRpbmcgKyBpICogKHNlZ21lbnRXaWR0aCArIHNlZ21lbnRHYXApO1xuICAgICAgICAgICAgICAgIGNvbnN0IHkgPSBjZW50ZXJZO1xuXG4gICAgICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIGlmIChjdHgucm91bmRSZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vINCh0YPRh9Cw0YHQvdC40Lkg0LzQtdGC0L7QtCAo0L/RltC00YLRgNC40LzRg9GU0YLRjNGB0Y8g0LIg0L3QvtCy0LjRhSDQsdGA0LDRg9C30LXRgNCw0YUpXG4gICAgICAgICAgICAgICAgICAgIGN0eC5yb3VuZFJlY3QoeCwgeSwgc2VnbWVudFdpZHRoLCBzZWdtZW50SGVpZ2h0LCBzZWdtZW50UmFkaXVzKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBGYWxsYmFjayDQtNC70Y8g0YHRgtCw0YDQuNGFINCx0YDQsNGD0LfQtdGA0ZbQslxuICAgICAgICAgICAgICAgICAgICBjb25zdCByID0gc2VnbWVudFJhZGl1cztcbiAgICAgICAgICAgICAgICAgICAgY3R4Lm1vdmVUbyh4ICsgciwgeSk7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5saW5lVG8oeCArIHNlZ21lbnRXaWR0aCAtIHIsIHkpO1xuICAgICAgICAgICAgICAgICAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4ICsgc2VnbWVudFdpZHRoLCB5LCB4ICsgc2VnbWVudFdpZHRoLCB5ICsgcik7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5saW5lVG8oeCArIHNlZ21lbnRXaWR0aCwgeSArIHNlZ21lbnRIZWlnaHQgLSByKTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCArIHNlZ21lbnRXaWR0aCwgeSArIHNlZ21lbnRIZWlnaHQsIHggKyBzZWdtZW50V2lkdGggLSByLCB5ICsgc2VnbWVudEhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5saW5lVG8oeCArIHIsIHkgKyBzZWdtZW50SGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCwgeSArIHNlZ21lbnRIZWlnaHQsIHgsIHkgKyBzZWdtZW50SGVpZ2h0IC0gcik7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5saW5lVG8oeCwgeSArIHIpO1xuICAgICAgICAgICAgICAgICAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4LCB5LCB4ICsgciwgeSk7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlUHJvZ3Jlc3MoKSB7XG4gICAgICAgICAgICBjb25zdCBlbGFwc2VkID0gRGF0ZS5ub3coKSAtIHN0YXJ0VGltZTtcbiAgICAgICAgICAgIGxldCBwcm9ncmVzcyA9IDEgKyAoZWxhcHNlZCAvIGxvYWRpbmdEdXJhdGlvbikgKiA5OTsgLy8g0JLRltC0IDElINC00L4gMTAwJVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQntCx0LzQtdC20YPRlNC80L4g0L/RgNC+0LPRgNC10YEg0LTQviAxMDAlXG4gICAgICAgICAgICBpZiAocHJvZ3Jlc3MgPj0gdGFyZ2V0UHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgICAgICBwcm9ncmVzcyA9IHRhcmdldFByb2dyZXNzO1xuICAgICAgICAgICAgICAgIGlzTG9hZGluZ0NvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY3VycmVudFByb2dyZXNzID0gcHJvZ3Jlc3M7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCe0L3QvtCy0LvRjtGU0LzQviDQstGW0LTQvtCx0YDQsNC20LXQvdC90Y9cbiAgICAgICAgICAgIGRyYXdQcm9ncmVzc0Jhcihwcm9ncmVzcyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vINCe0L3QvtCy0LvRjtGU0LzQviDQstGW0LTRgdC+0YLQutC4ICjRgtGW0LvRjNC60Lgg0YbRltC70ZYg0YfQuNGB0LvQsClcbiAgICAgICAgICAgIGNvbnN0IHBlcmNlbnQgPSBNYXRoLmZsb29yKHByb2dyZXNzKTtcbiAgICAgICAgICAgIHBlcmNlbnRFbGVtZW50LnRleHRDb250ZW50ID0gcGVyY2VudCArICclJztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0J/RgNC+0LTQvtCy0LbRg9GU0LzQviDQsNC90ZbQvNCw0YbRltGOINC00L4g0LfQsNCy0LXRgNGI0LXQvdC90Y8g0LfQsNCy0LDQvdGC0LDQttC10L3QvdGPXG4gICAgICAgICAgICBpZiAoIWlzTG9hZGluZ0NvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlUHJvZ3Jlc3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyDQhtC90ZbRhtGW0LDQu9GW0LfRg9GU0LzQviDRgNC+0LfQvNGW0YDQuCBjYW52YXNcbiAgICAgICAgcmVzaXplQ2FudmFzKCk7XG4gICAgICAgIFxuICAgICAgICAvLyDQntCx0YDQvtCx0LrQsCDQt9C80ZbQvdC4INGA0L7Qt9C80ZbRgNGDINCy0ZbQutC90LBcbiAgICAgICAgbGV0IHJlc2l6ZVRpbWVvdXQ7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQocmVzaXplVGltZW91dCk7XG4gICAgICAgICAgICByZXNpemVUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzaXplQ2FudmFzKCk7XG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIC8vINCG0L3RltGG0ZbQsNC70ZbQt9Cw0YbRltGPINCw0L3RltC80LDRhtGW0Zcg0L/QvtGP0LLQuCDRltC60L7QvdC+0LpcbiAgICAgICAgaW5pdEljb25zQW5pbWF0aW9uKGxvYWRpbmdEdXJhdGlvbik7XG4gICAgICAgIFxuICAgICAgICAvLyDQl9Cw0L/Rg9GB0LrQsNGU0LzQviDQsNC90ZbQvNCw0YbRltGOINC3INC90LXQstC10LvQuNC60L7RjiDQt9Cw0YLRgNC40LzQutC+0Y4g0LTQu9GPINC60L7RgNC10LrRgtC90L7Qs9C+INGA0L7Qt9GA0LDRhdGD0L3QutGDINGA0L7Qt9C80ZbRgNGW0LJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzaXplQ2FudmFzKCk7XG4gICAgICAgICAgICAgICAgc3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVQcm9ncmVzcygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vINCQ0L3RltC80LDRhtGW0Y8g0L/QvtGP0LLQuCDRltC60L7QvdC+0Log0L/QviDRh9C10YDQt9GWINC/0ZbQtCDRh9Cw0YEg0LfQsNCy0LDQvdGC0LDQttC10L3QvdGPXG4gICAgZnVuY3Rpb24gaW5pdEljb25zQW5pbWF0aW9uKGR1cmF0aW9uKSB7XG4gICAgICAgIGNvbnN0IGljb25zID0gW1xuICAgICAgICAgICAgJy53ZWxjb21lX19kZWNvci1pdGVtLl9nYW1lcGFkJyxcbiAgICAgICAgICAgICcud2VsY29tZV9fZGVjb3ItaXRlbS5fY2hpcCcsXG4gICAgICAgICAgICAnLndlbGNvbWVfX2RlY29yLWl0ZW0uX2NvaW4nLFxuICAgICAgICAgICAgJy53ZWxjb21lX19kZWNvci1pdGVtLl9iYWxsJyxcbiAgICAgICAgICAgICcud2VsY29tZV9fZGVjb3ItaXRlbS5fY3VwJyxcbiAgICAgICAgICAgICcud2VsY29tZV9fZGVjb3ItaXRlbS5fY3ViZScsXG4gICAgICAgICAgICAnLndlbGNvbWVfX2RlY29yLWl0ZW0uX2dsb2JlJ1xuICAgICAgICBdO1xuXG4gICAgICAgIC8vINCX0LHQtdGA0ZbQs9Cw0ZTQvNC+INC+0YDQuNCz0ZbQvdCw0LvRjNC90ZYgdHJhbnNmb3JtINC00LvRjyDQutC+0LbQvdC+0Zcg0ZbQutC+0L3QutC4XG4gICAgICAgIGNvbnN0IG9yaWdpbmFsVHJhbnNmb3JtcyA9IG5ldyBNYXAoKTtcblxuICAgICAgICAvLyDQodC/0L7Rh9Cw0YLQutGDINC/0YDQuNGF0L7QstGD0ZTQvNC+INCy0YHRliDRltC60L7QvdC60LhcbiAgICAgICAgaWNvbnMuZm9yRWFjaChzZWxlY3RvciA9PiB7XG4gICAgICAgICAgICBjb25zdCBpY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgICAgICAgICBpZiAoaWNvbikge1xuICAgICAgICAgICAgICAgIC8vINCX0LHQtdGA0ZbQs9Cw0ZTQvNC+INC+0YDQuNCz0ZbQvdCw0LvRjNC90LjQuSB0cmFuc2Zvcm0gKNGP0LrRidC+INGUIHJvdGF0ZSlcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wdXRlZFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoaWNvbik7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxUcmFuc2Zvcm0gPSBjb21wdXRlZFN0eWxlLnRyYW5zZm9ybTtcbiAgICAgICAgICAgICAgICBvcmlnaW5hbFRyYW5zZm9ybXMuc2V0KHNlbGVjdG9yLCBvcmlnaW5hbFRyYW5zZm9ybSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8g0JLRgdGC0LDQvdC+0LLQu9GO0ZTQvNC+INC/0L7Rh9Cw0YLQutC+0LLQuNC5INGB0YLQsNC9XG4gICAgICAgICAgICAgICAgaWNvbi5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgICAgICAgICAgICAgIGljb24uc3R5bGUudHJhbnNpdGlvbiA9ICdvcGFjaXR5IDAuNHMgZWFzZSwgdHJhbnNmb3JtIDAuNHMgZWFzZSc7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8g0JLRgdGC0LDQvdC+0LLQu9GO0ZTQvNC+IHNjYWxlINC3INC30LHQtdGA0LXQttC10L3QvdGP0Lwgcm90YXRlXG4gICAgICAgICAgICAgICAgaWYgKG9yaWdpbmFsVHJhbnNmb3JtICYmIG9yaWdpbmFsVHJhbnNmb3JtICE9PSAnbm9uZScpIHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbi5zdHlsZS50cmFuc2Zvcm0gPSBvcmlnaW5hbFRyYW5zZm9ybSArICcgc2NhbGUoMC41KSc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbi5zdHlsZS50cmFuc2Zvcm0gPSAnc2NhbGUoMC41KSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyDQoNC+0LfRgNCw0YXQvtCy0YPRlNC80L4g0ZbQvdGC0LXRgNCy0LDQuyDQvNGW0LYg0L/QvtGP0LLQvtGOINGW0LrQvtC90L7QulxuICAgICAgICBjb25zdCBpY29uQ291bnQgPSBpY29ucy5sZW5ndGg7XG4gICAgICAgIGNvbnN0IGludGVydmFsID0gZHVyYXRpb24gLyBpY29uQ291bnQ7IC8vINCg0ZbQstC90L7QvNGW0YDQvdC+INGA0L7Qt9C/0L7QtNGW0LvRj9GU0LzQviDQv9C+INGH0LDRgdGDXG5cbiAgICAgICAgLy8g0J/QvtC60LDQt9GD0ZTQvNC+INGW0LrQvtC90LrQuCDQv9C+INGH0LXRgNC30ZZcbiAgICAgICAgaWNvbnMuZm9yRWFjaCgoc2VsZWN0b3IsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgICAgICAgICAgICAgaWYgKGljb24pIHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbi5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICAgICAgICAgICAgICAvLyDQktGW0LTQvdC+0LLQu9GO0ZTQvNC+INC+0YDQuNCz0ZbQvdCw0LvRjNC90LjQuSB0cmFuc2Zvcm1cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxUcmFuc2Zvcm0gPSBvcmlnaW5hbFRyYW5zZm9ybXMuZ2V0KHNlbGVjdG9yKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9yaWdpbmFsVHJhbnNmb3JtICYmIG9yaWdpbmFsVHJhbnNmb3JtICE9PSAnbm9uZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb24uc3R5bGUudHJhbnNmb3JtID0gb3JpZ2luYWxUcmFuc2Zvcm07XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uLnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZSgxKSc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBpbmRleCAqIGludGVydmFsKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdFBhcnRpY2lwYXRlQ2FudmFzKCkge1xuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGFydGljaXBhdGVDYW52YXMnKTtcbiAgICAgICAgaWYgKCFjYW52YXMpIHJldHVybjtcblxuICAgICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgXG4gICAgICAgIC8vINCS0LjQt9C90LDRh9Cw0ZTQvNC+INGH0Lgg0LXQutGA0LDQvSA8PSAxMDUwcHhcbiAgICAgICAgY29uc3QgaXNNb2JpbGUgPSB3aW5kb3cuaW5uZXJXaWR0aCA8PSAxMDUwO1xuICAgICAgICBcbiAgICAgICAgLy8g0JrQvtC90YHRgtCw0L3RgtC4INC00LvRjyDRgNC+0LfQvNGW0YDRltCyINGC0LAg0L/QvtC30LjRhtGW0LlcbiAgICAgICAgY29uc3QgQ0FOVkFTX1dJRFRIID0gaXNNb2JpbGUgPyA3NjggOiAxMzY2O1xuICAgICAgICBjb25zdCBDQU5WQVNfSEVJR0hUID0gaXNNb2JpbGUgPyA0NzAgOiA1MDA7XG4gICAgICAgIFxuICAgICAgICAvLyDQktGB0YLQsNC90L7QstC70Y7RlNC80L4g0YDQvtC30LzRltGA0LggY2FudmFzXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IENBTlZBU19XSURUSDtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IENBTlZBU19IRUlHSFQ7XG4gICAgICAgIFxuICAgICAgICAvLyDQpNGW0LrRgdC+0LLQsNC90ZYg0YDQvtC30LzRltGA0Lgg0LTQtdGA0LXQstCwICjQvdC1INC80LDRgdGI0YLQsNCx0YPRjtGC0YzRgdGPKVxuICAgICAgICBjb25zdCBUUkVFX1dJRFRIID0gMTc1O1xuICAgICAgICBjb25zdCBUUkVFX0hFSUdIVCA9IDE2NztcbiAgICAgICAgXG4gICAgICAgIC8vINCf0LDRgNCw0LzQtdGC0YDQuCDRgdC/0YDQsNC50YIt0LvQuNGB0YLQsFxuICAgICAgICBjb25zdCBGUkFNRVNfUEVSX1JPVyA9IDU7IC8vIDUg0LrQsNC00YDRltCyINCyINGA0Y/QtNC60YNcbiAgICAgICAgY29uc3QgVE9UQUxfUk9XUyA9IDI7IC8vIDIg0YDRj9C00LhcbiAgICAgICAgY29uc3QgU1BSSVRFX1NIRUVUX1dJRFRIID0gMTEwMDsgLy8g0KDQtdCw0LvRjNC90LAg0YjQuNGA0LjQvdCwINGB0L/RgNCw0LnRgi3Qu9C40YHRgtCwXG4gICAgICAgIGNvbnN0IFNQUklURV9TSEVFVF9IRUlHSFQgPSA0Njg7IC8vINCg0LXQsNC70YzQvdCwINCy0LjRgdC+0YLQsCDRgdC/0YDQsNC50YIt0LvQuNGB0YLQsFxuICAgICAgICBcbiAgICAgICAgLy8g0KDQvtC30LzRltGA0Lgg0L7QtNC90L7Qs9C+INC60LDQtNGA0YMg0LIg0YHQv9GA0LDQudGCLdC70LjRgdGC0ZZcbiAgICAgICAgY29uc3QgRlJBTUVfV0lEVEggPSBNYXRoLmZsb29yKFNQUklURV9TSEVFVF9XSURUSCAvIEZSQU1FU19QRVJfUk9XKTsgLy8gMjIwcHhcbiAgICAgICAgY29uc3QgRlJBTUVfSEVJR0hUID0gTWF0aC5mbG9vcihTUFJJVEVfU0hFRVRfSEVJR0hUIC8gVE9UQUxfUk9XUyk7IC8vIDIzNHB4XG4gICAgICAgIFxuICAgICAgICAvLyDQpNGW0LrRgdC+0LLQsNC90ZYg0YDQvtC30LzRltGA0Lgg0L7Qu9C10L3RjyDQvdCwIGNhbnZhcyAo0L3QtSDQvNCw0YHRiNGC0LDQsdGD0Y7RgtGM0YHRjylcbiAgICAgICAgY29uc3QgREVFUl9TQ0FMRSA9IDAuNTsgLy8g0JzQsNGB0YjRgtCw0LEg0LTQu9GPINCy0ZbQtNC+0LHRgNCw0LbQtdC90L3RjyDQvdCwIGNhbnZhc1xuICAgICAgICBjb25zdCBERUVSX1dJRFRIID0gTWF0aC5mbG9vcihGUkFNRV9XSURUSCAqIERFRVJfU0NBTEUpOyBcbiAgICAgICAgY29uc3QgREVFUl9IRUlHSFQgPSBNYXRoLmZsb29yKEZSQU1FX0hFSUdIVCAqIERFRVJfU0NBTEUpO1xuXG4gICAgICAgIC8vINCf0L7Qt9C40YbRltGXINC10LvQtdC80LXQvdGC0ZbQslxuICAgICAgICBsZXQgdHJlZVgsIHRyZWVZO1xuICAgICAgICBpZiAoaXNNb2JpbGUpIHtcbiAgICAgICAgICAgIHRyZWVYID0gMjM1O1xuICAgICAgICAgICAgdHJlZVkgPSBDQU5WQVNfSEVJR0hUIC0gMTUyIC0gVFJFRV9IRUlHSFQ7IFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8g0JTQtdGB0LrRgtC+0L/QvdCwINCy0LXRgNGB0ZbRj1xuICAgICAgICAgICAgdHJlZVggPSBDQU5WQVNfV0lEVEggLyAyIC0gMzAwOyBcbiAgICAgICAgICAgIHRyZWVZID0gQ0FOVkFTX0hFSUdIVCAvIDIgLSBUUkVFX0hFSUdIVCAvIDI7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vINCf0LDRgNCw0LzQtdGC0YDQuCDQsNC90ZbQvNCw0YbRltGXICjRgdC/0ZbQu9GM0L3RliDQtNC70Y8g0LLRgdGW0YUg0L7Qu9C10L3RltCyKVxuICAgICAgICBjb25zdCBGUkFNRV9ERUxBWSA9IDEyOyAvLyDQl9Cw0YLRgNC40LzQutCwINC80ZbQtiDQutCw0LTRgNCw0LzQuFxuICAgICAgICBjb25zdCBXQUxLSU5HX0ZSQU1FUyA9IDU7IC8vINCa0ZbQu9GM0LrRltGB0YLRjCDQutCw0LTRgNGW0LIg0LTQu9GPINGF0L7QtNGM0LHQuFxuICAgICAgICBjb25zdCBGUkFNRV9SRVBFQVQgPSAyOyAvLyDQmtGW0LvRjNC60ZbRgdGC0Ywg0YDQsNC30ZbQsiDQv9C+0LrQsNC30YPQstCw0YLQuCDQutC+0LbQtdC9INC60LDQtNGAXG4gICAgICAgIGNvbnN0IElETEVfTUlOX0RVUkFUSU9OID0gNjA7IC8vINCc0ZbQvdGW0LzQsNC70YzQvdCwINGC0YDQuNCy0LDQu9GW0YHRgtGMINC30YPQv9C40L3QutC4ICgxINGB0LXQutGD0L3QtNCwINC/0YDQuCA2MGZwcylcbiAgICAgICAgY29uc3QgSURMRV9NQVhfRFVSQVRJT04gPSAxODA7IC8vINCc0LDQutGB0LjQvNCw0LvRjNC90LAg0YLRgNC40LLQsNC70ZbRgdGC0Ywg0LfRg9C/0LjQvdC60LggKDMg0YHQtdC60YPQvdC00Lgg0L/RgNC4IDYwZnBzKVxuXG4gICAgICAgIC8vINCh0YLQsNC90Lgg0LDQvdGW0LzQsNGG0ZbRlyDQvtC70LXQvdGPXG4gICAgICAgIGNvbnN0IERFRVJfU1RBVEUgPSB7XG4gICAgICAgICAgICBXQUxLSU5HOiAnd2Fsa2luZycsXG4gICAgICAgICAgICBJRExFOiAnaWRsZSdcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIGxldCBhbmltYXRpb25JZCA9IG51bGw7XG4gICAgICAgIGxldCBmcmFtZUNvdW50ZXIgPSAwOyAvLyDQk9C70L7QsdCw0LvRjNC90LjQuSDQu9GW0YfQuNC70YzQvdC40Log0LrQsNC00YDRltCyINC00LvRjyDRgdC40L3RhdGA0L7QvdGW0LfQsNGG0ZbRl1xuXG4gICAgICAgIC8vINCa0LvQsNGBINC00LvRjyDQvtC70LXQvdGPXG4gICAgICAgIGNsYXNzIERlZXIge1xuICAgICAgICAgICAgY29uc3RydWN0b3Ioc3RhcnRYLCBzdGFydFksIG1pblgsIG1heFgsIHNwZWVkID0gMC41LCB6SW5kZXggPSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy54ID0gc3RhcnRYO1xuICAgICAgICAgICAgICAgIHRoaXMueSA9IHN0YXJ0WTtcbiAgICAgICAgICAgICAgICB0aGlzLm1pblggPSBtaW5YO1xuICAgICAgICAgICAgICAgIHRoaXMubWF4WCA9IG1heFg7XG4gICAgICAgICAgICAgICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xuICAgICAgICAgICAgICAgIHRoaXMuekluZGV4ID0gekluZGV4OyAvLyDQn9C+0YDRj9C00L7QuiDQvNCw0LvRjtCy0LDQvdC90Y8gXG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAtMTsgLy8gLTEgPSDQstC70ZbQstC+LCAxID0g0LLQv9GA0LDQstC+XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IERFRVJfU1RBVEUuV0FMS0lORztcbiAgICAgICAgICAgICAgICB0aGlzLmZyYW1lSW5kZXggPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuZnJhbWVSZXBlYXRDb3VudGVyID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLmlkbGVUaW1lciA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5pZGxlRHVyYXRpb24gPSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBnZXRTcHJpdGVGcmFtZUluZGV4KCkge1xuICAgICAgICAgICAgICAgIC8vINCS0LXRgNGF0L3RltC5INGA0Y/QtNC+0LogKDApID0g0YDRg9GFINCy0LvRltCy0L4sINC90LjQttC90ZbQuSDRgNGP0LTQvtC6ICgxKSA9INGA0YPRhSDQstC/0YDQsNCy0L5cbiAgICAgICAgICAgICAgICBjb25zdCByb3cgPSB0aGlzLmRpcmVjdGlvbiA9PT0gLTEgPyAwIDogMTtcbiAgICAgICAgICAgICAgICBsZXQgY29sID0gMDtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlID09PSBERUVSX1NUQVRFLldBTEtJTkcpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g0JrQsNC00YDQuCDRhdC+0LTRjNCx0Lg6IDAsIDEsIDIsIDMsIDQgKNCy0YHRliA1INC60LDQtNGA0ZbQsilcbiAgICAgICAgICAgICAgICAgICAgY29sID0gdGhpcy5mcmFtZUluZGV4ICUgV0FMS0lOR19GUkFNRVM7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g0KHRgtCw0L0g0LfRg9C/0LjQvdC60LggKElETEUpIC0g0LLQuNC60L7RgNC40YHRgtC+0LLRg9GU0LzQviDQutCw0LTRgCAwXG4gICAgICAgICAgICAgICAgICAgIGNvbCA9IDA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgcm93LCBjb2wgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdXBkYXRlKHNob3VsZFVwZGF0ZUZyYW1lKSB7XG4gICAgICAgICAgICAgICAgLy8g0J7QvdC+0LLQu9GO0ZTQvNC+INCw0L3RltC80LDRhtGW0Y4g0LrQsNC00YDRltCyINC3INC/0L7QstGC0L7RgNC10L3QvdGP0Lwg0LTQu9GPINC/0LvQsNCy0L3QvtGB0YLRllxuICAgICAgICAgICAgICAgIGlmIChzaG91bGRVcGRhdGVGcmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gREVFUl9TVEFURS5XQUxLSU5HKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZyYW1lUmVwZWF0Q291bnRlcisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g0J/QvtC60LDQt9GD0ZTQvNC+INC60L7QttC10L0g0LrQsNC00YAg0LrRltC70YzQutCwINGA0LDQt9GW0LIg0LTQu9GPINC/0LvQsNCy0L3RltGI0L7RlyDQsNC90ZbQvNCw0YbRltGXXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5mcmFtZVJlcGVhdENvdW50ZXIgPj0gRlJBTUVfUkVQRUFUKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mcmFtZVJlcGVhdENvdW50ZXIgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vINCf0L7RgdC70ZbQtNC+0LLQvdC+INC/0YDQvtGF0L7QtNC40LzQviDRh9C10YDQtdC3INCy0YHRliDQutCw0LTRgNC4OiAwLCAxLCAyLCAzLCA0LCAwLCAxLCAyLCAzLCA0Li4uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mcmFtZUluZGV4ID0gKHRoaXMuZnJhbWVJbmRleCArIDEpICUgV0FMS0lOR19GUkFNRVM7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyDQm9C+0LPRltC60LAg0YHRgtCw0L3RltCyINGC0LAg0YDRg9GF0YNcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gREVFUl9TVEFURS5XQUxLSU5HKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vINCe0L3QvtCy0LvRjtGU0LzQviDQv9C+0LfQuNGG0ZbRjiDQvtC70LXQvdGPXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueCArPSB0aGlzLnNwZWVkICogdGhpcy5kaXJlY3Rpb247XG5cbiAgICAgICAgICAgICAgICAgICAgLy8g0J/QtdGA0LXQstGW0YDRj9GU0LzQviDQvNC10LbRliDRgtCwINC/0LXRgNC10YXQvtC00LjQvNC+INC00L4g0LfRg9C/0LjQvdC60LhcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMueCA+PSB0aGlzLm1heFggJiYgdGhpcy5kaXJlY3Rpb24gPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vINCU0L7RgdGP0LPQu9C4INC/0YDQsNCy0L7Qs9C+INC60YDQsNGOIC0g0LfRg9C/0LjQvdGP0ZTQvNC+0YHRj1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy54ID0gdGhpcy5tYXhYO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IERFRVJfU1RBVEUuSURMRTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaWRsZVRpbWVyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vINCT0LXQvdC10YDRg9GU0LzQviDQstC40L/QsNC00LrQvtCy0YMg0YLRgNC40LLQsNC70ZbRgdGC0Ywg0LfRg9C/0LjQvdC60Lgg0LLRltC0IDEg0LTQviAzINGB0LXQutGD0L3QtFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pZGxlRHVyYXRpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoSURMRV9NQVhfRFVSQVRJT04gLSBJRExFX01JTl9EVVJBVElPTiArIDEpKSArIElETEVfTUlOX0RVUkFUSU9OO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMueCA8PSB0aGlzLm1pblggJiYgdGhpcy5kaXJlY3Rpb24gPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDQlNC+0YHRj9Cz0LvQuCDQu9GW0LLQvtCz0L4g0LrRgNCw0Y4gLSDQt9GD0L/QuNC90Y/RlNC80L7RgdGPXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnggPSB0aGlzLm1pblg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0gREVFUl9TVEFURS5JRExFO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pZGxlVGltZXIgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g0JPQtdC90LXRgNGD0ZTQvNC+INCy0LjQv9Cw0LTQutC+0LLRgyDRgtGA0LjQstCw0LvRltGB0YLRjCDQt9GD0L/QuNC90LrQuCDQstGW0LQgMSDQtNC+IDMg0YHQtdC60YPQvdC0XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlkbGVEdXJhdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChJRExFX01BWF9EVVJBVElPTiAtIElETEVfTUlOX0RVUkFUSU9OICsgMSkpICsgSURMRV9NSU5fRFVSQVRJT047XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT09IERFRVJfU1RBVEUuSURMRSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlkbGVUaW1lcisrO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8g0J/RltGB0LvRjyDQt9Cw0LLQtdGA0YjQtdC90L3RjyDQt9GD0L/QuNC90LrQuCDQt9C80ZbQvdGO0ZTQvNC+INC90LDQv9GA0Y/QvNC+0Log0YLQsCDQv9C10YDQtdGF0L7QtNC40LzQviDQtNC+INGF0L7QtNGM0LHQuFxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pZGxlVGltZXIgPj0gdGhpcy5pZGxlRHVyYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uICo9IC0xOyAvLyDQl9C80ZbQvdGO0ZTQvNC+INC90LDQv9GA0Y/QvNC+0LogKNCy0LvRltCy0L4g4oaUINCy0L/RgNCw0LLQvilcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBERUVSX1NUQVRFLldBTEtJTkc7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZyYW1lSW5kZXggPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mcmFtZVJlcGVhdENvdW50ZXIgPSAwOyAvLyDQodC60LjQtNCw0ZTQvNC+INC70ZbRh9C40LvRjNC90LjQuiDQv9C+0LLRgtC+0YDQtdC90YxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZHJhdyhjdHgsIHNwcml0ZUltYWdlLCBmcmFtZVdpZHRoLCBmcmFtZUhlaWdodCwgZGVlcldpZHRoLCBkZWVySGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFzcHJpdGVJbWFnZS5jb21wbGV0ZSB8fCBmcmFtZVdpZHRoIDw9IDAgfHwgZnJhbWVIZWlnaHQgPD0gMCkgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgeyByb3csIGNvbCB9ID0gdGhpcy5nZXRTcHJpdGVGcmFtZUluZGV4KCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8g0JrQvtC+0YDQtNC40L3QsNGC0Lgg0LrQsNC00YDRgyDQsiDRgdC/0YDQsNC50YIt0LvQuNGB0YLRllxuICAgICAgICAgICAgICAgIGNvbnN0IHNvdXJjZVggPSBjb2wgKiBmcmFtZVdpZHRoO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNvdXJjZVkgPSByb3cgKiBmcmFtZUhlaWdodDtcblxuICAgICAgICAgICAgICAgIC8vINCS0LjRgNGW0LfQsNGU0LzQviDQutCw0LTRgCDQt9GWINGB0L/RgNCw0LnRgi3Qu9C40YHRgtCwINGC0LAg0LzQsNC70Y7RlNC80L4g0L3QsCBjYW52YXNcbiAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgICAgICAgICBzcHJpdGVJbWFnZSxcbiAgICAgICAgICAgICAgICAgICAgc291cmNlWCwgc291cmNlWSwgZnJhbWVXaWR0aCwgZnJhbWVIZWlnaHQsIC8vINCU0LbQtdGA0LXQu9C+ICjRgdC/0YDQsNC50YIt0LvQuNGB0YIpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueCwgdGhpcy55LCBkZWVyV2lkdGgsIGRlZXJIZWlnaHQgLy8g0J/RgNC40LfQvdCw0YfQtdC90L3RjyAoY2FudmFzKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8g0JzQsNGB0LjQsiDQvtC70LXQvdGW0LIgKNC80L7QttC90LAg0LTQvtC00LDRgtC4INCx0ZbQu9GM0YjQtSlcbiAgICAgICAgY29uc3QgZGVlcnMgPSBbXTtcbiAgICAgICAgXG4gICAgICAgIC8vINCa0L7QvdGE0ZbQs9GD0YDQsNGG0ZbRjyDQtNC70Y8g0YHRgtCy0L7RgNC10L3QvdGPINC+0LvQtdC90ZbQslxuICAgICAgICBjb25zdCBERUVSX0NPVU5UID0gMzsgLy8g0JrRltC70YzQutGW0YHRgtGMINC+0LvQtdC90ZbQslxuICAgICAgICBcbiAgICAgICAgLy8g0KDQvtC30YDQsNGF0L7QstGD0ZTQvNC+INC60L7QtdGE0ZbRhtGW0ZTQvdGCINC80LDRgdGI0YLQsNCx0YPQstCw0L3QvdGPINC00LvRjyDQv9C+0LfQuNGG0ZbQuSDQvtC70LXQvdGW0LJcbiAgICAgICAgY29uc3Qgc2NhbGVYID0gQ0FOVkFTX1dJRFRIIC8gMTM2NjtcbiAgICAgICAgY29uc3Qgc2NhbGVZID0gQ0FOVkFTX0hFSUdIVCAvIDUwMDtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGRlZXJDb25maWdzID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXJ0WDogQ0FOVkFTX1dJRFRIIC8gMiArIDUwICogc2NhbGVYLFxuICAgICAgICAgICAgICAgIHN0YXJ0WTogdHJlZVkgKyBUUkVFX0hFSUdIVCAtIDIwLCAvLyDQn9GW0LQg0Y/Qu9C40L3QutC+0Y4gKHRyZWVZICsg0LLQuNGB0L7RgtCwINGP0LvQuNC90LrQuCAtINCy0ZbQtNGB0YLRg9C/KVxuICAgICAgICAgICAgICAgIG1pblg6IENBTlZBU19XSURUSCAvIDIgLSAyMDAgKiBzY2FsZVgsXG4gICAgICAgICAgICAgICAgbWF4WDogQ0FOVkFTX1dJRFRIIC8gMiArIDMwMCAqIHNjYWxlWCxcbiAgICAgICAgICAgICAgICBzcGVlZDogMC41LFxuICAgICAgICAgICAgICAgIHpJbmRleDogNFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGFydFg6IENBTlZBU19XSURUSCAvIDIgLSAxMDAgKiBzY2FsZVgsXG4gICAgICAgICAgICAgICAgc3RhcnRZOiBDQU5WQVNfSEVJR0hUIC8gMiAtIERFRVJfSEVJR0hUIC8gMiArIDUwICogc2NhbGVZLFxuICAgICAgICAgICAgICAgIG1pblg6IENBTlZBU19XSURUSCAvIDIgLSAxNTAgKiBzY2FsZVgsXG4gICAgICAgICAgICAgICAgbWF4WDogQ0FOVkFTX1dJRFRIIC8gMiArIDE1MCAqIHNjYWxlWCxcbiAgICAgICAgICAgICAgICBzcGVlZDogMC4zLFxuICAgICAgICAgICAgICAgIHpJbmRleDogM1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGFydFg6IENBTlZBU19XSURUSCAvIDIgLSAxMDAgKiBzY2FsZVgsXG4gICAgICAgICAgICAgICAgc3RhcnRZOiBDQU5WQVNfSEVJR0hUIC8gMiAtIERFRVJfSEVJR0hUIC8gMiAtIDUwICogc2NhbGVZLFxuICAgICAgICAgICAgICAgIG1pblg6IENBTlZBU19XSURUSCAvIDIgLSAyNTAgKiBzY2FsZVgsXG4gICAgICAgICAgICAgICAgbWF4WDogQ0FOVkFTX1dJRFRIIC8gMiArIDI1MCAqIHNjYWxlWCxcbiAgICAgICAgICAgICAgICBzcGVlZDogMC40LFxuICAgICAgICAgICAgICAgIHpJbmRleDogMSBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgXG4gICAgICAgIF07XG5cbiAgICAgICAgLy8g0KHRgtCy0L7RgNGO0ZTQvNC+INC+0LvQtdC90ZbQslxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IERFRVJfQ09VTlQgJiYgaSA8IGRlZXJDb25maWdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBjb25maWcgPSBkZWVyQ29uZmlnc1tpXTtcbiAgICAgICAgICAgIGRlZXJzLnB1c2gobmV3IERlZXIoXG4gICAgICAgICAgICAgICAgY29uZmlnLnN0YXJ0WCxcbiAgICAgICAgICAgICAgICBjb25maWcuc3RhcnRZLFxuICAgICAgICAgICAgICAgIGNvbmZpZy5taW5YLFxuICAgICAgICAgICAgICAgIGNvbmZpZy5tYXhYLFxuICAgICAgICAgICAgICAgIGNvbmZpZy5zcGVlZCxcbiAgICAgICAgICAgICAgICBjb25maWcuekluZGV4IHx8IDAgLy8g0JLQuNC60L7RgNC40YHRgtC+0LLRg9GU0LzQviB6SW5kZXgg0Lcg0LrQvtC90YTRltCz0YMg0LDQsdC+IDAg0LfQsCDQt9Cw0LzQvtCy0YfRg9Cy0LDQvdC90Y/QvFxuICAgICAgICAgICAgKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDQl9Cw0LLQsNC90YLQsNC20LXQvdC90Y8g0LfQvtCx0YDQsNC20LXQvdGMXG4gICAgICAgIGNvbnN0IGltYWdlcyA9IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IG5ldyBJbWFnZSgpLFxuICAgICAgICAgICAgdHJlZTogbmV3IEltYWdlKCksXG4gICAgICAgICAgICBkZWVyU3ByaXRlOiBuZXcgSW1hZ2UoKSAvLyDQodC/0YDQsNC50YIt0LvQuNGB0YIg0LfQsNC80ZbRgdGC0Ywg0L7QtNC90L7Qs9C+INC30L7QsdGA0LDQttC10L3QvdGPXG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IGltYWdlc0xvYWRlZCA9IDA7XG4gICAgICAgIGNvbnN0IHRvdGFsSW1hZ2VzID0gMztcblxuICAgICAgICBmdW5jdGlvbiBvbkltYWdlTG9hZCgpIHtcbiAgICAgICAgICAgIGltYWdlc0xvYWRlZCsrO1xuICAgICAgICAgICAgaWYgKGltYWdlc0xvYWRlZCA9PT0gdG90YWxJbWFnZXMpIHtcbiAgICAgICAgICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNGP0ZTQvNC+LCDRh9C4INGB0L/RgNCw0LnRgi3Qu9C40YHRgiDQt9Cw0LLQsNC90YLQsNC20LjQstGB0Y8g0LrQvtGA0LXQutGC0L3QvlxuICAgICAgICAgICAgICAgIGlmIChpbWFnZXMuZGVlclNwcml0ZS5jb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRGVlciBzcHJpdGUgbG9hZGVkOicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBpbWFnZXMuZGVlclNwcml0ZS53aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogaW1hZ2VzLmRlZXJTcHJpdGUuaGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICAgICAgZnJhbWVXaWR0aDogRlJBTUVfV0lEVEgsXG4gICAgICAgICAgICAgICAgICAgICAgICBmcmFtZUhlaWdodDogRlJBTUVfSEVJR0hULFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVlcldpZHRoOiBERUVSX1dJRFRILFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVlckhlaWdodDogREVFUl9IRUlHSFRcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRyYXdDYW52YXMoKTtcbiAgICAgICAgICAgICAgICBzdGFydEFuaW1hdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaW1hZ2VzLmJhY2tncm91bmQub25sb2FkID0gb25JbWFnZUxvYWQ7XG4gICAgICAgIGltYWdlcy50cmVlLm9ubG9hZCA9IG9uSW1hZ2VMb2FkO1xuICAgICAgICBpbWFnZXMuZGVlclNwcml0ZS5vbmxvYWQgPSBvbkltYWdlTG9hZDtcblxuICAgICAgICAvLyDQktC40LHQuNGA0LDRlNC80L4g0YTQvtC9INC30LDQu9C10LbQvdC+INCy0ZbQtCDRgNC+0LfQvNGW0YDRgyDQtdC60YDQsNC90YNcbiAgICAgICAgaW1hZ2VzLmJhY2tncm91bmQuc3JjID0gaXNNb2JpbGUgPyAnaW1nL3BhcnRpY2lwYXRlL2NhbnZhcy1iZy10YWIucG5nJyA6ICdpbWcvcGFydGljaXBhdGUvY2FudmFzLWJnLnBuZyc7XG4gICAgICAgIGltYWdlcy50cmVlLnNyYyA9ICdpbWcvcGFydGljaXBhdGUvdHJlZS5wbmcnO1xuICAgICAgICAvLyDQktC40LrQvtGA0LjRgdGC0L7QstGD0ZTQvNC+INGB0L/RgNCw0LnRgi3Qu9C40YHRgiAo0Y/QutGJ0L4g0YTQsNC50Lsg0L3QsNC30LjQstCw0ZTRgtGM0YHRjyBkZWVyLXNwcml0ZS5wbmcsINC30LzRltC90ZbRgtGMINC90LDQt9Cy0YMpXG4gICAgICAgIGltYWdlcy5kZWVyU3ByaXRlLnNyYyA9ICdpbWcvcGFydGljaXBhdGUvZGVlci1zcHJpdGUucG5nJztcblxuICAgICAgICBmdW5jdGlvbiBkcmF3Q2FudmFzKCkge1xuICAgICAgICAgICAgLy8g0J7Rh9C40YnQtdC90L3RjyBjYW52YXNcbiAgICAgICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgQ0FOVkFTX1dJRFRILCBDQU5WQVNfSEVJR0hUKTtcblxuICAgICAgICAgICAgLy8g0JzQsNC70Y7RlNC80L4g0YTQvtC9XG4gICAgICAgICAgICBpZiAoaW1hZ2VzLmJhY2tncm91bmQuY29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKGltYWdlcy5iYWNrZ3JvdW5kLCAwLCAwLCBDQU5WQVNfV0lEVEgsIENBTlZBU19IRUlHSFQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyB6SW5kZXgg0LTQu9GPINGP0LvQuNC90LrQuCAo0LzRltC2INC+0LvQtdC90Y/QvNC4KVxuICAgICAgICAgICAgY29uc3QgVFJFRV9aX0lOREVYID0gMjsgLy8g0K/Qu9C40L3QutCwINC80LDQu9GO0ZTRgtGM0YHRjyDQvNGW0LYg0L7Qu9C10L3Rj9C80Lgg0LcgekluZGV4IDEg0YLQsCAyXG5cbiAgICAgICAgICAgIC8vINCh0YLQstC+0YDRjtGU0LzQviDQvNCw0YHQuNCyINCy0YHRltGFINC10LvQtdC80LXQvdGC0ZbQsiDQtNC70Y8g0LzQsNC70Y7QstCw0L3QvdGPICjQvtC70LXQvdGWICsg0Y/Qu9C40L3QutCwKVxuICAgICAgICAgICAgY29uc3QgZHJhd2FibGVFbGVtZW50cyA9IFtdO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQlNC+0LTQsNGU0LzQviDQvtC70LXQvdGW0LJcbiAgICAgICAgICAgIGRlZXJzLmZvckVhY2goZGVlciA9PiB7XG4gICAgICAgICAgICAgICAgZHJhd2FibGVFbGVtZW50cy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2RlZXInLFxuICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IGRlZXIuekluZGV4LFxuICAgICAgICAgICAgICAgICAgICBkcmF3OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW1hZ2VzLmRlZXJTcHJpdGUuY29tcGxldGUgJiYgRlJBTUVfV0lEVEggPiAwICYmIEZSQU1FX0hFSUdIVCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWVyLmRyYXcoY3R4LCBpbWFnZXMuZGVlclNwcml0ZSwgRlJBTUVfV0lEVEgsIEZSQU1FX0hFSUdIVCwgREVFUl9XSURUSCwgREVFUl9IRUlHSFQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0JTQvtC00LDRlNC80L4g0Y/Qu9C40L3QutGDXG4gICAgICAgICAgICBkcmF3YWJsZUVsZW1lbnRzLnB1c2goe1xuICAgICAgICAgICAgICAgIHR5cGU6ICd0cmVlJyxcbiAgICAgICAgICAgICAgICB6SW5kZXg6IFRSRUVfWl9JTkRFWCxcbiAgICAgICAgICAgICAgICBkcmF3OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbWFnZXMudHJlZS5jb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShpbWFnZXMudHJlZSwgdHJlZVgsIHRyZWVZLCBUUkVFX1dJRFRILCBUUkVFX0hFSUdIVCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8g0KHQvtGA0YLRg9GU0LzQviDQstGB0ZYg0LXQu9C10LzQtdC90YLQuCDQt9CwIHpJbmRleCAo0LzQtdC90YjQtSA9INC80LDQu9GO0ZTRgtGM0YHRjyDRgNCw0L3RltGI0LUsINCx0ZbQu9GM0YjQtSA9INC80LDQu9GO0ZTRgtGM0YHRjyDQv9GW0LfQvdGW0YjQtSlcbiAgICAgICAgICAgIGRyYXdhYmxlRWxlbWVudHMuc29ydCgoYSwgYikgPT4gYS56SW5kZXggLSBiLnpJbmRleCk7XG5cbiAgICAgICAgICAgIC8vINCc0LDQu9GO0ZTQvNC+INCy0YHRliDQtdC70LXQvNC10L3RgtC4INCyINC/0YDQsNCy0LjQu9GM0L3QvtC80YMg0L/QvtGA0Y/QtNC60YNcbiAgICAgICAgICAgIGRyYXdhYmxlRWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmRyYXcoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbiAgICAgICAgICAgIGZyYW1lQ291bnRlcisrO1xuXG4gICAgICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNGP0ZTQvNC+LCDRh9C4INC/0L7RgtGA0ZbQsdC90L4g0L7QvdC+0LLQu9GO0LLQsNGC0Lgg0LrQsNC00YDQuCDQsNC90ZbQvNCw0YbRltGXXG4gICAgICAgICAgICBjb25zdCBzaG91bGRVcGRhdGVGcmFtZSA9IGZyYW1lQ291bnRlciA+PSBGUkFNRV9ERUxBWTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g0J7QvdC+0LLQu9GO0ZTQvNC+INCz0LvQvtCx0LDQu9GM0L3QuNC5INC70ZbRh9C40LvRjNC90LjQuiDQutCw0LTRgNGW0LJcbiAgICAgICAgICAgIGlmIChzaG91bGRVcGRhdGVGcmFtZSkge1xuICAgICAgICAgICAgICAgIGZyYW1lQ291bnRlciA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vINCe0L3QvtCy0LvRjtGU0LzQviDQstGB0ZbRhSDQvtC70LXQvdGW0LJcbiAgICAgICAgICAgIGRlZXJzLmZvckVhY2goZGVlciA9PiB7XG4gICAgICAgICAgICAgICAgZGVlci51cGRhdGUoc2hvdWxkVXBkYXRlRnJhbWUpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vINCf0LXRgNC10LzQsNC70YzQvtCy0YPRlNC80L4gY2FudmFzXG4gICAgICAgICAgICBkcmF3Q2FudmFzKCk7XG5cbiAgICAgICAgICAgIGFuaW1hdGlvbklkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gc3RhcnRBbmltYXRpb24oKSB7XG4gICAgICAgICAgICBpZiAoYW5pbWF0aW9uSWQpIHtcbiAgICAgICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShhbmltYXRpb25JZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhbmltYXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDQl9GD0L/QuNC90Y/RlNC80L4g0LDQvdGW0LzQsNGG0ZbRjiDQv9GA0Lgg0LLQuNGF0L7QtNGWINC3IHZpZXdwb3J0ICjQvtC/0YbRltC+0L3QsNC70YzQvdC+KVxuICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgICAgICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFhbmltYXRpb25JZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRBbmltYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhbmltYXRpb25JZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uSWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uSWQgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUoY2FudmFzKTtcbiAgICAgICAgXG4gICAgICAgIC8vINCe0LHRgNC+0LHQutCwINC30LzRltC90Lgg0YDQvtC30LzRltGA0YMg0LLRltC60L3QsCDQtNC70Y8g0LDQtNCw0L/RgtC40LLQvdC+0YHRgtGWXG4gICAgICAgIGxldCByZXNpemVUaW1lb3V0O1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHJlc2l6ZVRpbWVvdXQpO1xuICAgICAgICAgICAgcmVzaXplVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0lzTW9iaWxlID0gd2luZG93LmlubmVyV2lkdGggPD0gMTA1MDtcbiAgICAgICAgICAgICAgICAvLyDQn9C10YDQtdC30LDQv9GD0YHQutCw0ZTQvNC+INGW0L3RltGG0ZbQsNC70ZbQt9Cw0YbRltGOINGC0ZbQu9GM0LrQuCDRj9C60YnQviDQt9C80ZbQvdC40LLRgdGPINGA0LXQttC40LwgKG1vYmlsZS9kZXNrdG9wKVxuICAgICAgICAgICAgICAgIGlmIChuZXdJc01vYmlsZSAhPT0gaXNNb2JpbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g0JfRg9C/0LjQvdGP0ZTQvNC+INC/0L7RgtC+0YfQvdGDINCw0L3RltC80LDRhtGW0Y5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGFuaW1hdGlvbklkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShhbmltYXRpb25JZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25JZCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8g0J/QtdGA0LXQt9Cw0L/Rg9GB0LrQsNGU0LzQviDRltC90ZbRhtGW0LDQu9GW0LfQsNGG0ZbRjlxuICAgICAgICAgICAgICAgICAgICBpbml0UGFydGljaXBhdGVDYW52YXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAyNTApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0U25vd2ZsYWtlc0NhbnZhcygpIHtcbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Nub3dmbGFrZXNDYW52YXMnKTtcbiAgICAgICAgaWYgKCFjYW52YXMpIHJldHVybjtcblxuICAgICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgY29uc3QgZmF2UGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXYtcGFnZScpO1xuICAgICAgICBcbiAgICAgICAgLy8g0JrQvtC90YHRgtCw0L3RgtC4XG4gICAgICAgIGNvbnN0IFNOT1dGTEFLRV9DT1VOVCA9IDEwMDtcbiAgICAgICAgY29uc3QgU05PV0ZMQUtFX01JTl9TSVpFID0gNDtcbiAgICAgICAgY29uc3QgU05PV0ZMQUtFX01BWF9TSVpFID0gMTA7XG4gICAgICAgIGNvbnN0IFNOT1dGTEFLRV9NSU5fU1BFRUQgPSAwLjE7XG4gICAgICAgIGNvbnN0IFNOT1dGTEFLRV9NQVhfU1BFRUQgPSAwLjM7XG4gICAgICAgIGNvbnN0IFNOT1dGTEFLRV9XSU5EX1JBTkdFID0gMC40O1xuICAgICAgICBjb25zdCBTTk9XRkxBS0VfU1BBV05fSU5URVJWQUwgPSAyMDA7XG5cbiAgICAgICAgY29uc3Qgc25vd2ZsYWtlcyA9IFtdO1xuICAgICAgICBsZXQgbGFzdFNub3dmbGFrZVRpbWUgPSAwO1xuICAgICAgICBsZXQgYW5pbWF0aW9uSWQgPSBudWxsO1xuICAgICAgICBcbiAgICAgICAgLy8g0JLRgdGC0LDQvdC+0LLQu9GO0ZTQvNC+INGA0L7Qt9C80ZbRgCBjYW52YXMg0L3QsCDQstC10YHRjCAuZmF2LXBhZ2VcbiAgICAgICAgZnVuY3Rpb24gcmVzaXplQ2FudmFzKCkge1xuICAgICAgICAgICAgbGV0IG5ld1dpZHRoLCBuZXdIZWlnaHQ7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChmYXZQYWdlKSB7XG4gICAgICAgICAgICAgICAgLy8g0JLQuNC60L7RgNC40YHRgtC+0LLRg9GU0LzQviBzY3JvbGxIZWlnaHQg0LTQu9GPINC+0YLRgNC40LzQsNC90L3RjyDRgNC10LDQu9GM0L3QvtGXINCy0LjRgdC+0YLQuCDQutC+0L3RgtC10L3RgtGDXG4gICAgICAgICAgICAgICAgY29uc3QgcmVjdCA9IGZhdlBhZ2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAgICAgbmV3V2lkdGggPSByZWN0LndpZHRoIHx8IGZhdlBhZ2Uub2Zmc2V0V2lkdGggfHwgd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgICAgICAgICAgLy8g0JTQu9GPINCy0LjRgdC+0YLQuCDQstC40LrQvtGA0LjRgdGC0L7QstGD0ZTQvNC+IHNjcm9sbEhlaWdodCDRj9C60YnQviDQstGW0L0g0LHRltC70YzRiNC40Lkg0LfQsCBvZmZzZXRIZWlnaHRcbiAgICAgICAgICAgICAgICBjb25zdCBvZmZzZXRIZWlnaHQgPSBmYXZQYWdlLm9mZnNldEhlaWdodCB8fCBmYXZQYWdlLmNsaWVudEhlaWdodDtcbiAgICAgICAgICAgICAgICBjb25zdCBzY3JvbGxIZWlnaHQgPSBmYXZQYWdlLnNjcm9sbEhlaWdodDtcbiAgICAgICAgICAgICAgICBuZXdIZWlnaHQgPSBNYXRoLm1heChzY3JvbGxIZWlnaHQsIG9mZnNldEhlaWdodCwgcmVjdC5oZWlnaHQpIHx8IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gRmFsbGJhY2sg0L3QsCB2aWV3cG9ydFxuICAgICAgICAgICAgICAgIG5ld1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgICAgICAgICAgbmV3SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNGP0ZTQvNC+INGH0Lgg0YDQvtC30LzRltGA0Lgg0LfQvNGW0L3QuNC70LjRgdGPINC/0LXRgNC10LQg0L7QvdC+0LLQu9C10L3QvdGP0LxcbiAgICAgICAgICAgIGlmIChjYW52YXMud2lkdGggIT09IG5ld1dpZHRoIHx8IGNhbnZhcy5oZWlnaHQgIT09IG5ld0hlaWdodCkge1xuICAgICAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IG5ld1dpZHRoO1xuICAgICAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSBuZXdIZWlnaHQ7XG4gICAgICAgICAgICAgICAgLy8g0J7Rh9C40YnQsNGU0LzQviDRgdC90ZbQttC40L3QutC4INC/0YDQuCDQt9C80ZbQvdGWINGA0L7Qt9C80ZbRgNGDXG4gICAgICAgICAgICAgICAgc25vd2ZsYWtlcy5sZW5ndGggPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8g0JLRgdGC0LDQvdC+0LLQu9GO0ZTQvNC+INGA0L7Qt9C80ZbRgCBjYW52YXMg0Lcg0L3QtdCy0LXQu9C40LrQvtGOINC30LDRgtGA0LjQvNC60L7RjiDQtNC70Y8g0LrQvtGA0LXQutGC0L3QvtCz0L4g0YDQvtC30YDQsNGF0YPQvdC60YMg0YDQvtC30LzRltGA0ZbQslxuICAgICAgICAvLyDQktC40LrQvtGA0LjRgdGC0L7QstGD0ZTQvNC+INC60ZbQu9GM0LrQsCDQutCw0LTRgNGW0LIg0LTQu9GPINCz0LDRgNCw0L3RgtGW0Zcg0L/RgNCw0LLQuNC70YzQvdC+0LPQviDRgNC+0LfQvNGW0YDRg1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgcmVzaXplQ2FudmFzKCk7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc2l6ZUNhbnZhcygpO1xuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlc2l6ZUNhbnZhcygpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZUNhbnZhcyk7XG5cbiAgICAgICAgLy8g0JfQsNCy0LDQvdGC0LDQttC10L3QvdGPINC30L7QsdGA0LDQttC10L3QvdGPINGB0L3RltC20LjQvdC60LhcbiAgICAgICAgY29uc3Qgc25vd2ZsYWtlSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgbGV0IGltYWdlTG9hZGVkID0gZmFsc2U7XG5cbiAgICAgICAgc25vd2ZsYWtlSW1hZ2Uub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpbWFnZUxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICAvLyDQp9C10LrQsNGU0LzQviDQv9C+0LrQuCDRgdGC0L7RgNGW0L3QutCwINCy0LjQudC00LUg0LfRliDRgdGC0LDQvdGDIGxvYWRpbmcg0L/QtdGA0LXQtCDRgdGC0LDRgNGC0L7QvCDQsNC90ZbQvNCw0YbRltGXXG4gICAgICAgICAgICBmdW5jdGlvbiB3YWl0Rm9yUGFnZVJlYWR5KCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlzUGFnZUxvYWRpbmcgPSBtYWluUGFnZSAmJiBtYWluUGFnZS5jbGFzc0xpc3QuY29udGFpbnMoJ2xvYWRpbmcnKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoaXNQYWdlTG9hZGluZykge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzaXplQ2FudmFzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzaXplQ2FudmFzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vINCU0L7QtNCw0YLQutC+0LLQsCDQv9C10YDQtdCy0ZbRgNC60LAg0L/RltGB0LvRjyDRidC1INC+0LTQvdC+0LPQviDQutCw0LTRgNGDXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNpemVDYW52YXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYW52YXMud2lkdGggPiAwICYmIGNhbnZhcy5oZWlnaHQgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRBbmltYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g0K/QutGJ0L4g0LLRgdC1INGJ0LUg0L3QtdC/0YDQsNCy0LjQu9GM0L3QuNC5INGA0L7Qt9C80ZbRgCwg0L/QvtCy0YLQvtGA0Y7RlNC80L5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KHdhaXRGb3JQYWdlUmVhZHksIDUwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSwgNDAwKTsgLy8g0KfQtdC60LDRlNC80L4g0YLRgNC+0YXQuCDQsdGW0LvRjNGI0LUg0L3RltC2IGhpZGVMb2FkZXIgKDMwMG1zKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vINCh0YLQvtGA0ZbQvdC60LAg0LPQvtGC0L7QstCwLCDQstGB0YLQsNC90L7QstC70Y7RlNC80L4g0YDQvtC30LzRltGAINGC0LAg0LfQsNC/0YPRgdC60LDRlNC80L5cbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc2l6ZUNhbnZhcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNpemVDYW52YXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNpemVDYW52YXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhbnZhcy53aWR0aCA+IDAgJiYgY2FudmFzLmhlaWdodCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QW5pbWF0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHdhaXRGb3JQYWdlUmVhZHkoKTtcbiAgICAgICAgfTtcbiAgICAgICAgc25vd2ZsYWtlSW1hZ2Uuc3JjID0gJ2ltZy9zbm93Zmxha2UucG5nJztcbiAgICAgICBcblxuICAgICAgICAvLyDQmtC70LDRgSDQtNC70Y8g0YHQvdGW0LbQuNC90LrQuFxuICAgICAgICBjbGFzcyBTbm93Zmxha2Uge1xuICAgICAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy54ID0gTWF0aC5yYW5kb20oKSAqIChjYW52YXMud2lkdGggfHwgd2luZG93LmlubmVyV2lkdGgpO1xuICAgICAgICAgICAgICAgIHRoaXMueSA9IC0yMDtcbiAgICAgICAgICAgICAgICB0aGlzLnNpemUgPSBNYXRoLnJhbmRvbSgpICogKFNOT1dGTEFLRV9NQVhfU0laRSAtIFNOT1dGTEFLRV9NSU5fU0laRSkgKyBTTk9XRkxBS0VfTUlOX1NJWkU7XG4gICAgICAgICAgICAgICAgdGhpcy5zcGVlZCA9IE1hdGgucmFuZG9tKCkgKiAoU05PV0ZMQUtFX01BWF9TUEVFRCAtIFNOT1dGTEFLRV9NSU5fU1BFRUQpICsgU05PV0ZMQUtFX01JTl9TUEVFRDtcbiAgICAgICAgICAgICAgICB0aGlzLndpbmQgPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiBTTk9XRkxBS0VfV0lORF9SQU5HRTtcbiAgICAgICAgICAgICAgICB0aGlzLm9wYWNpdHkgPSBNYXRoLnJhbmRvbSgpICogMC41ICsgMC41O1xuICAgICAgICAgICAgICAgIHRoaXMucm90YXRpb24gPSBNYXRoLnJhbmRvbSgpICogTWF0aC5QSSAqIDI7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3RhdGlvblNwZWVkID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMC4wMjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdXBkYXRlKCkge1xuICAgICAgICAgICAgICAgIHRoaXMueSArPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgICAgIHRoaXMueCArPSB0aGlzLndpbmQgKyAoTWF0aC5zaW4odGhpcy55ICogMC4wMSkgKiAwLjIpO1xuICAgICAgICAgICAgICAgIHRoaXMucm90YXRpb24gKz0gdGhpcy5yb3RhdGlvblNwZWVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkcmF3KCkge1xuICAgICAgICAgICAgICAgIGlmICghaW1hZ2VMb2FkZWQpIHJldHVybjtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNC60LAg0YfQuCBjYW52YXMg0LzQsNGUINC/0YDQsNCy0LjQu9GM0L3QuNC5INGA0L7Qt9C80ZbRgFxuICAgICAgICAgICAgICAgIGlmIChjYW52YXMud2lkdGggPT09IDAgfHwgY2FudmFzLmhlaWdodCA9PT0gMCkgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgY3R4LnNhdmUoKTtcbiAgICAgICAgICAgICAgICBjdHguZ2xvYmFsQWxwaGEgPSB0aGlzLm9wYWNpdHk7XG4gICAgICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZSh0aGlzLngsIHRoaXMueSk7XG4gICAgICAgICAgICAgICAgY3R4LnJvdGF0ZSh0aGlzLnJvdGF0aW9uKTtcbiAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgICAgICAgICBzbm93Zmxha2VJbWFnZSxcbiAgICAgICAgICAgICAgICAgICAgLXRoaXMuc2l6ZSAvIDIsXG4gICAgICAgICAgICAgICAgICAgIC10aGlzLnNpemUgLyAyLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNpemUsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2l6ZVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgY3R4LnJlc3RvcmUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaXNPZmZTY3JlZW4oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMueSA+IGNhbnZhcy5oZWlnaHQgKyAyMCB8fCBcbiAgICAgICAgICAgICAgICAgICAgICAgdGhpcy54IDwgLTIwIHx8IFxuICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnggPiBjYW52YXMud2lkdGggKyAyMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVNub3dmbGFrZSgpIHtcbiAgICAgICAgICAgIGlmIChzbm93Zmxha2VzLmxlbmd0aCA8IFNOT1dGTEFLRV9DT1VOVCkge1xuICAgICAgICAgICAgICAgIHNub3dmbGFrZXMucHVzaChuZXcgU25vd2ZsYWtlKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlU25vd2ZsYWtlcygpIHtcbiAgICAgICAgICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gICAgICAgICAgICBpZiAobm93IC0gbGFzdFNub3dmbGFrZVRpbWUgPiBTTk9XRkxBS0VfU1BBV05fSU5URVJWQUwpIHtcbiAgICAgICAgICAgICAgICBjcmVhdGVTbm93Zmxha2UoKTtcbiAgICAgICAgICAgICAgICBsYXN0U25vd2ZsYWtlVGltZSA9IG5vdztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHNub3dmbGFrZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICBzbm93Zmxha2VzW2ldLnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgIGlmIChzbm93Zmxha2VzW2ldLmlzT2ZmU2NyZWVuKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgc25vd2ZsYWtlcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZHJhd1Nub3dmbGFrZXMoKSB7XG4gICAgICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNC60LAg0YfQuCBjYW52YXMg0LzQsNGUINC/0YDQsNCy0LjQu9GM0L3QuNC5INGA0L7Qt9C80ZbRgCDQv9C10YDQtdC0INC80LDQu9GO0LLQsNC90L3Rj9C8XG4gICAgICAgICAgICBpZiAoY2FudmFzLndpZHRoID09PSAwIHx8IGNhbnZhcy5oZWlnaHQgPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXNpemVDYW52YXMoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIHNub3dmbGFrZXMuZm9yRWFjaChzbm93Zmxha2UgPT4ge1xuICAgICAgICAgICAgICAgIHNub3dmbGFrZS5kcmF3KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGFuaW1hdGUoKSB7XG4gICAgICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNGP0ZTQvNC+INGA0L7Qt9C80ZbRgCBjYW52YXMg0L3QsCDQv9C+0YfQsNGC0LrRgyDQutC+0LbQvdC+0LPQviDQutCw0LTRgNGDICjRgtGW0LvRjNC60Lgg0Y/QutGJ0L4g0LLRltC9INC90LXQv9GA0LDQstC40LvRjNC90LjQuSlcbiAgICAgICAgICAgIGlmIChjYW52YXMud2lkdGggPT09IDAgfHwgY2FudmFzLmhlaWdodCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJlc2l6ZUNhbnZhcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB1cGRhdGVTbm93Zmxha2VzKCk7XG4gICAgICAgICAgICBkcmF3U25vd2ZsYWtlcygpO1xuICAgICAgICAgICAgYW5pbWF0aW9uSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBzdGFydEFuaW1hdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChhbmltYXRpb25JZCkge1xuICAgICAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbklkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFuaW1hdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vINCX0YPQv9C40L3Rj9GU0LzQviDQsNC90ZbQvNCw0YbRltGOINC/0YDQuCDQstC40YXQvtC00ZYg0Lcgdmlld3BvcnRcbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICAgICAgICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghYW5pbWF0aW9uSWQgJiYgaW1hZ2VMb2FkZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QW5pbWF0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYW5pbWF0aW9uSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbklkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbklkID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGNhbnZhcyk7XG4gICAgfVxuICAgIFxuICAgIGxvYWRUcmFuc2xhdGlvbnMoKVxuICAgICAgICAudGhlbihpbml0KSAvLyDQt9Cw0L/Rg9GB0Log0ZbQvdGW0YLRgyDRgdGC0L7RgNGW0L3QutC4XG5cblxuXG5cblxuICAgIC8vIGNvbnN0IGxuZ0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG5nLWJ0blwiKVxuICAgIC8vXG4gICAgLy8gLy8g0JLRgdGC0LDQvdC+0LLQu9GO0ZTQvNC+INGC0LXQutGB0YIg0LrQvdC+0L/QutC4INC90LAg0L/QvtGC0L7Rh9C90YMg0LDQutGC0LjQstC90YMg0LzQvtCy0YNcbiAgICAvLyBmdW5jdGlvbiB1cGRhdGVMYW5ndWFnZUJ1dHRvbigpIHtcbiAgICAvLyAgICAgLy8g0JLQuNC60L7RgNC40YHRgtC+0LLRg9GU0LzQviDRgtGDINGB0LDQvNGDINC70L7Qs9GW0LrRgywg0YnQviDRliDQtNC70Y8g0LLQuNC30L3QsNGH0LXQvdC90Y8gbG9jYWxlXG4gICAgLy8gICAgIGxldCBjdXJyZW50TG9jYWxlID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsZVwiKSB8fCBcImhyXCI7XG4gICAgLy8gICAgIGlmIChockxlbmcpIGN1cnJlbnRMb2NhbGUgPSAnaHInO1xuICAgIC8vICAgICBpZiAoZW5MZW5nKSBjdXJyZW50TG9jYWxlID0gJ2VuJztcbiAgICAvLyAgICAgaWYgKGxuZ0J0bikge1xuICAgIC8vICAgICAgICAgbG5nQnRuLnRleHRDb250ZW50ID0gY3VycmVudExvY2FsZTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cbiAgICAvL1xuICAgIC8vIC8vINCe0L3QvtCy0LvRjtGU0LzQviDQutC90L7Qv9C60YMg0L/RgNC4INC30LDQstCw0L3RgtCw0LbQtdC90L3RliAo0L/RltGB0LvRjyDQstC40LfQvdCw0YfQtdC90L3RjyBsb2NhbGUpXG4gICAgLy8gdXBkYXRlTGFuZ3VhZ2VCdXR0b24oKTtcblxuICAgIC8vIGlmIChsbmdCdG4pIHtcbiAgICAvLyAgICAgbG5nQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgLy8gICAgICAgICAvLyDQktC40LfQvdCw0YfQsNGU0LzQviDQv9C+0YLQvtGH0L3RgyDQvNC+0LLRgyDQv9C10YDQtdC0INC/0LXRgNC10LzQuNC60LDQvdC90Y/QvFxuICAgIC8vICAgICAgICAgbGV0IGN1cnJlbnRMb2NhbGUgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxlXCIpIHx8IFwiaHJcIjtcbiAgICAvLyAgICAgICAgIGlmIChockxlbmcpIGN1cnJlbnRMb2NhbGUgPSAnaHInO1xuICAgIC8vICAgICAgICAgaWYgKGVuTGVuZykgY3VycmVudExvY2FsZSA9ICdlbic7XG4gICAgLy9cbiAgICAvLyAgICAgICAgIGlmIChjdXJyZW50TG9jYWxlID09PSBcImVuXCIpIHtcbiAgICAvLyAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwibG9jYWxlXCIpO1xuICAgIC8vICAgICAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwibG9jYWxlXCIsIFwiZW5cIik7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgLy8gICAgIH0pO1xuICAgIC8vIH1cbiAgICAvL1xuICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1idG5cIik/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgLy8gICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS10ZXN0XCIpPy5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKTtcbiAgICAvLyB9KTtcblxuICAgIC8vINCi0LjQvNGH0LDRgdC+0LLQuNC5INC+0LEn0ZTQutGCINC3INC00LDQvdC40LzQuCDQv9GA0L4g0L/RgNC+0LzRltC20LrQuCDRgtC40LbQvdGW0LJcbiAgICAvLyBUT0RPOiDQl9Cw0LzRltC90LjRgtC4INC90LAg0LTQsNC90ZYg0Lcg0LHQtdC60LXQvdC00YNcbiAgICAvLyDQn9GA0LjQutC70LDQtCDRgdGC0YDRg9C60YLRg9GA0Lgg0LTQsNC90LjRhSDQtyDQsdC10LrQtdC90LTRgzpcbiAgICAvLyB7XG4gICAgLy8gICAgIDE6IHsgc3RhcnQ6IFwiMjAyNS0xMi0xNVQwMDowMDowMFwiLCBlbmQ6IFwiMjAyNS0xMi0yMVQyMzo1OTo1OVwiIH0sXG4gICAgLy8gICAgIDI6IHsgc3RhcnQ6IFwiMjAyNS0xMi0yMlQwMDowMDowMFwiLCBlbmQ6IFwiMjAyNS0xMi0yOFQyMzo1OTo1OVwiIH0sXG4gICAgLy8gICAgIC4uLlxuICAgIC8vIH1cbiAgICAvLyDQlNC70Y8g0ZbQvdGC0LXQs9GA0LDRhtGW0Zcg0Lcg0LHQtdC60LXQvdC00L7QvDog0LfQsNC80ZbQvdC40YLQuCDRhtC10Lkg0L7QsSfRlNC60YIg0L3QsCDQtNCw0L3RliDQtyBBUElcbiAgICAvLyDQndCw0L/RgNC40LrQu9Cw0LQ6IGNvbnN0IHdlZWtzRGF0YSA9IGF3YWl0IHJlcXVlc3QoJy9hcGkvd2Vla3MnKTtcbiAgICBjb25zdCB3ZWVrc0RhdGEgPSB7XG4gICAgICAgIDE6IHtcbiAgICAgICAgICAgIHN0YXJ0OiBcIjIwMjUtMTItMTVUMDA6MDA6MDBcIixcbiAgICAgICAgICAgIGVuZDogXCIyMDI1LTEyLTIxVDIzOjU5OjU5XCJcbiAgICAgICAgfSxcbiAgICAgICAgMjoge1xuICAgICAgICAgICAgc3RhcnQ6IFwiMjAyNS0xMi0yMlQwMDowMDowMFwiLFxuICAgICAgICAgICAgZW5kOiBcIjIwMjUtMTItMjhUMjM6NTk6NTlcIlxuICAgICAgICB9LFxuICAgICAgICAzOiB7XG4gICAgICAgICAgICBzdGFydDogXCIyMDI1LTEyLTI5VDAwOjAwOjAwXCIsXG4gICAgICAgICAgICBlbmQ6IFwiMjAyNi0wMS0wNFQyMzo1OTo1OVwiXG4gICAgICAgIH0sXG4gICAgICAgIDQ6IHtcbiAgICAgICAgICAgIHN0YXJ0OiBcIjIwMjYtMDEtMDVUMDA6MDA6MDBcIixcbiAgICAgICAgICAgIGVuZDogXCIyMDI2LTAxLTExVDIzOjU5OjU5XCJcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyDQpNGD0L3QutGG0ZbRjyDQtNC70Y8g0LLQuNC30L3QsNGH0LXQvdC90Y8g0LDQutGC0LjQstC90L7Qs9C+INGC0LjQttC90Y8g0L3QsCDQvtGB0L3QvtCy0ZYg0LTQsNC90LjRhSDQtyDQvtCxJ9GU0LrRgtCwXG4gICAgZnVuY3Rpb24gZ2V0QWN0aXZlV2Vlayh3ZWVrc0RhdGEpIHtcbiAgICAgICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBsZXQgYWN0aXZlV2Vla0luZGV4ID0gbnVsbDtcblxuICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNC60LAg0LrQvtC20L3QvtCz0L4g0YLQuNC20L3Rj1xuICAgICAgICBmb3IgKGNvbnN0IHdlZWtOdW0gaW4gd2Vla3NEYXRhKSB7XG4gICAgICAgICAgICBjb25zdCB3ZWVrID0gd2Vla3NEYXRhW3dlZWtOdW1dO1xuICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSBuZXcgRGF0ZSh3ZWVrLnN0YXJ0KTtcbiAgICAgICAgICAgIGNvbnN0IGVuZCA9IG5ldyBEYXRlKHdlZWsuZW5kKTtcblxuICAgICAgICAgICAgaWYgKGN1cnJlbnREYXRlID49IHN0YXJ0ICYmIGN1cnJlbnREYXRlIDw9IGVuZCkge1xuICAgICAgICAgICAgICAgIGFjdGl2ZVdlZWtJbmRleCA9IHBhcnNlSW50KHdlZWtOdW0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFjdGl2ZVdlZWtJbmRleDtcbiAgICB9XG5cbiAgICAvLyDQhtC90ZbRhtGW0LDQu9GW0LfQsNGG0ZbRjyDRgdC10LrRhtGW0Zcg0ZbQs9C+0YAg0Lcg0LDQstGC0L7QvNCw0YLQuNGH0L3QuNC8INCy0LjQt9C90LDRh9C10L3QvdGP0Lwg0YLQuNC20L3Rj1xuICAgIGZ1bmN0aW9uIGluaXRHYW1lc1dlZWsoKSB7XG4gICAgICAgIC8vINCS0LjQt9C90LDRh9Cw0ZTQvNC+INCw0LrRgtC40LLQvdC40Lkg0YLQuNC20LTQtdC90Ywg0L3QsCDQvtGB0L3QvtCy0ZYg0LTQsNC90LjRhSDQtyDQvtCxJ9GU0LrRgtCwXG4gICAgICAgIGxldCBhY3RpdmVXZWVrID0gZ2V0QWN0aXZlV2Vlayh3ZWVrc0RhdGEpIHx8IDE7XG5cbiAgICAgICAgLy8g0J7QsdC80LXQttC10L3QvdGPINC00L4gNCDRgtC40LbQvdGW0LJcbiAgICAgICAgaWYgKGFjdGl2ZVdlZWsgPiA0KSBhY3RpdmVXZWVrID0gNDtcblxuICAgICAgICAvLyDQn9GA0LjRhdC+0LLRg9Cy0LDQvdC90Y8g0LLRgdGW0YUg0YHQv9C40YHQutGW0LIg0ZbQs9C+0YBcbiAgICAgICAgY29uc3QgZ2FtZUxpc3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdhbWVzX19saXN0Jyk7XG4gICAgICAgIGdhbWVMaXN0cy5mb3JFYWNoKGxpc3QgPT4ge1xuICAgICAgICAgICAgbGlzdC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vINCf0L7QutCw0Lcg0YLRltC70YzQutC4INCw0LrRgtC40LLQvdC+0LPQviDRgtC40LbQvdGPXG4gICAgICAgIGNvbnN0IGN1cnJlbnRMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmdhbWVzX19saXN0Ll93ZWVrJHthY3RpdmVXZWVrfWApO1xuICAgICAgICBpZiAoY3VycmVudExpc3QpIHtcbiAgICAgICAgICAgIGN1cnJlbnRMaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vINCQ0LLRgtC+0LzQsNGC0LjRh9C90LUg0LTQvtC00LDQstCw0L3QvdGPIGRhdGEt0LDRgtGA0LjQsdGD0YLRltCyINC00LvRjyDRgtGA0LXQutGW0L3Qs9GDINGC0LAg0LLRgdGC0LDQvdC+0LLQu9C10L3QvdGPINC/0L7RgdC40LvQsNC90YxcbiAgICAgICAgYXV0b0FkZERhdGFCdXR0b25zKCk7XG4gICAgICAgIHNldEdhbWVMaW5rcygpO1xuICAgIH1cblxuICAgIC8vINCi0LjQvNGH0LDRgdC+0LLQuNC5INC+0LEn0ZTQutGCINC3INC80LDQv9GW0L3Qs9C+0LwgZ2FtZS1pZCDQvdCwIFVSTFxuICAgIC8vIFRPRE86INCX0LDQvNGW0L3QuNGC0Lgg0L3QsCDQtNCw0L3RliDQtyDQsdC10LrQtdC90LTRg1xuICAgIC8vINCf0YDQuNC60LvQsNC0INGB0YLRgNGD0LrRgtGD0YDQuCDQtNCw0L3QuNGFINC3INCx0LXQutC10L3QtNGDOlxuICAgIC8vIHtcbiAgICAvLyAgICAgXCJ3ZWVrMV9nYW1lMVwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL2dhbWUtc2x1Zy0xXCIsXG4gICAgLy8gICAgIFwid2VlazFfZ2FtZTJcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9nYW1lLXNsdWctMlwiLFxuICAgIC8vICAgICAuLi5cbiAgICAvLyB9XG4gICAgLy8g0JTQu9GPINGW0L3RgtC10LPRgNCw0YbRltGXINC3INCx0LXQutC10L3QtNC+0Lw6IGNvbnN0IGdhbWVzTGlua3MgPSBhd2FpdCByZXF1ZXN0KCcvYXBpL2dhbWVzL2xpbmtzJyk7XG4gICAgY29uc3QgZ2FtZXNMaW5rcyA9IHtcbiAgICAgICAgLy8gV2VlayAxXG4gICAgICAgIFwid2VlazFfZ2FtZTFcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrMV9nYW1lMlwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWsxX2dhbWUzXCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazFfZ2FtZTRcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrMV9nYW1lNVwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWsxX2dhbWU2XCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazFfZ2FtZTdcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrMV9nYW1lOFwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWsxX2dhbWU5XCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazFfZ2FtZTEwXCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIC8vIFdlZWsgMlxuICAgICAgICBcIndlZWsyX2dhbWUxXCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazJfZ2FtZTJcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrMl9nYW1lM1wiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWsyX2dhbWU0XCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazJfZ2FtZTVcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrMl9nYW1lNlwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWsyX2dhbWU3XCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazJfZ2FtZThcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrMl9nYW1lOVwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWsyX2dhbWUxMFwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICAvLyBXZWVrIDNcbiAgICAgICAgXCJ3ZWVrM19nYW1lMVwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWszX2dhbWUyXCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazNfZ2FtZTNcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrM19nYW1lNFwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWszX2dhbWU1XCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazNfZ2FtZTZcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrM19nYW1lN1wiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWszX2dhbWU4XCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazNfZ2FtZTlcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrM19nYW1lMTBcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgLy8gV2VlayA0XG4gICAgICAgIFwid2VlazRfZ2FtZTFcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrNF9nYW1lMlwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWs0X2dhbWUzXCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazRfZ2FtZTRcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrNF9nYW1lNVwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWs0X2dhbWU2XCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazRfZ2FtZTdcIjogXCIvY2FzaW5vL3Nob3ctZ2FtZS9cIixcbiAgICAgICAgXCJ3ZWVrNF9nYW1lOFwiOiBcIi9jYXNpbm8vc2hvdy1nYW1lL1wiLFxuICAgICAgICBcIndlZWs0X2dhbWU5XCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCIsXG4gICAgICAgIFwid2VlazRfZ2FtZTEwXCI6IFwiL2Nhc2luby9zaG93LWdhbWUvXCJcbiAgICB9O1xuXG4gICAgLy8g0JLRgdGC0LDQvdC+0LLQu9C10L3QvdGPINGD0L3RltC60LDQu9GM0L3QuNGFINC/0L7RgdC40LvQsNC90Ywg0LTQu9GPINC60L7QttC90L7RlyDQs9GA0LhcbiAgICBmdW5jdGlvbiBzZXRHYW1lTGlua3MoKSB7XG4gICAgICAgIGNvbnN0IGdhbWVMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYW1lc19faXRlbS1saW5rW2RhdGEtZ2FtZS1pZF0nKTtcbiAgICAgICAgXG4gICAgICAgIGdhbWVMaW5rcy5mb3JFYWNoKGxpbmsgPT4ge1xuICAgICAgICAgICAgY29uc3QgZ2FtZUlkID0gbGluay5nZXRBdHRyaWJ1dGUoJ2RhdGEtZ2FtZS1pZCcpO1xuICAgICAgICAgICAgaWYgKGdhbWVJZCAmJiBnYW1lc0xpbmtzW2dhbWVJZF0pIHtcbiAgICAgICAgICAgICAgICBsaW5rLmhyZWYgPSBnYW1lc0xpbmtzW2dhbWVJZF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vINCQ0LLRgtC+0LzQsNGC0LjRh9C90LUg0LTQvtC00LDQstCw0L3QvdGPIGRhdGEt0LDRgtGA0LjQsdGD0YLRltCyINC00LvRjyDRgtGA0LXQutGW0L3Qs9GDXG4gICAgZnVuY3Rpb24gYXV0b0FkZERhdGFCdXR0b25zKCkge1xuICAgICAgICBjb25zdCBnYW1lTGlzdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2FtZXNfX2xpc3QnKTtcbiAgICAgICAgXG4gICAgICAgIGdhbWVMaXN0cy5mb3JFYWNoKGxpc3QgPT4ge1xuICAgICAgICAgICAgY29uc3Qgd2Vla01hdGNoID0gbGlzdC5jbGFzc05hbWUubWF0Y2goL193ZWVrKFxcZCspLyk7XG4gICAgICAgICAgICBpZiAoIXdlZWtNYXRjaCkgcmV0dXJuO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCB3ZWVrID0gd2Vla01hdGNoWzFdO1xuICAgICAgICAgICAgY29uc3QgaXRlbXMgPSBsaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYW1lc19faXRlbScpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpdGVtcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGdhbWVOdW1iZXIgPSBpbmRleCArIDE7XG4gICAgICAgICAgICAgICAgY29uc3QgYnV0dG9uTmFtZSA9IGB3ZWVrJHt3ZWVrfUdhbWUke2dhbWVOdW1iZXJ9YDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBsaW5rRWwgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5nYW1lc19faXRlbS1saW5rJyk7XG4gICAgICAgICAgICAgICAgaWYgKGxpbmtFbCkge1xuICAgICAgICAgICAgICAgICAgICAvLyDQntC90L7QstC70Y7RlNC80L4gZGF0YS1idXR0b24g0Y/QutGJ0L4g0YnQtSDQvdC1INCy0YHRgtCw0L3QvtCy0LvQtdC90L4g0LDQsdC+INC90LXQutC+0YDQtdC60YLQvdC1XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRCdXR0b24gPSBsaW5rRWwuZ2V0QXR0cmlidXRlKCdkYXRhLWJ1dHRvbicpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWN1cnJlbnRCdXR0b24gfHwgIWN1cnJlbnRCdXR0b24uaW5jbHVkZXMoYHdlZWske3dlZWt9R2FtZWApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rRWwuc2V0QXR0cmlidXRlKCdkYXRhLWJ1dHRvbicsIGJ1dHRvbk5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vINCS0YHRgtCw0L3QvtCy0LvRjtGU0LzQviBkYXRhLXByb21vINGP0LrRidC+INGJ0LUg0L3QtSDQstGB0YLQsNC90L7QstC70LXQvdC+XG4gICAgICAgICAgICAgICAgICAgIGlmICghbGlua0VsLmdldEF0dHJpYnV0ZSgnZGF0YS1wcm9tbycpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rRWwuc2V0QXR0cmlidXRlKCdkYXRhLXByb21vJywgJ3JhemluYV8yMDI2X2hyJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbn0pKCk7XG4iXX0=
