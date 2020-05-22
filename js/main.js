"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// Polyfill for forEach method
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}
/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-webp-setclasses !*/


!function (e, n, A) {
  function o(e, n) {
    return _typeof(e) === n;
  }

  function t() {
    var e, n, A, t, a, i, l;

    for (var f in r) {
      if (r.hasOwnProperty(f)) {
        if (e = [], n = r[f], n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length)) for (A = 0; A < n.options.aliases.length; A++) {
          e.push(n.options.aliases[A].toLowerCase());
        }

        for (t = o(n.fn, "function") ? n.fn() : n.fn, a = 0; a < e.length; a++) {
          i = e[a], l = i.split("."), 1 === l.length ? Modernizr[l[0]] = t : (!Modernizr[l[0]] || Modernizr[l[0]] instanceof Boolean || (Modernizr[l[0]] = new Boolean(Modernizr[l[0]])), Modernizr[l[0]][l[1]] = t), s.push((t ? "" : "no-") + l.join("-"));
        }
      }
    }
  }

  function a(e) {
    var n = u.className,
        A = Modernizr._config.classPrefix || "";

    if (c && (n = n.baseVal), Modernizr._config.enableJSClass) {
      var o = new RegExp("(^|\\s)" + A + "no-js(\\s|$)");
      n = n.replace(o, "$1" + A + "js$2");
    }

    Modernizr._config.enableClasses && (n += " " + A + e.join(" " + A), c ? u.className.baseVal = n : u.className = n);
  }

  function i(e, n) {
    if ("object" == _typeof(e)) for (var A in e) {
      f(e, A) && i(A, e[A]);
    } else {
      e = e.toLowerCase();
      var o = e.split("."),
          t = Modernizr[o[0]];
      if (2 == o.length && (t = t[o[1]]), "undefined" != typeof t) return Modernizr;
      n = "function" == typeof n ? n() : n, 1 == o.length ? Modernizr[o[0]] = n : (!Modernizr[o[0]] || Modernizr[o[0]] instanceof Boolean || (Modernizr[o[0]] = new Boolean(Modernizr[o[0]])), Modernizr[o[0]][o[1]] = n), a([(n && 0 != n ? "" : "no-") + o.join("-")]), Modernizr._trigger(e, n);
    }
    return Modernizr;
  }

  var s = [],
      r = [],
      l = {
    _version: "3.6.0",
    _config: {
      classPrefix: "",
      enableClasses: !0,
      enableJSClass: !0,
      usePrefixes: !0
    },
    _q: [],
    on: function on(e, n) {
      var A = this;
      setTimeout(function () {
        n(A[e]);
      }, 0);
    },
    addTest: function addTest(e, n, A) {
      r.push({
        name: e,
        fn: n,
        options: A
      });
    },
    addAsyncTest: function addAsyncTest(e) {
      r.push({
        name: null,
        fn: e
      });
    }
  },
      Modernizr = function Modernizr() {};

  Modernizr.prototype = l, Modernizr = new Modernizr();
  var f,
      u = n.documentElement,
      c = "svg" === u.nodeName.toLowerCase();
  !function () {
    var e = {}.hasOwnProperty;
    f = o(e, "undefined") || o(e.call, "undefined") ? function (e, n) {
      return n in e && o(e.constructor.prototype[n], "undefined");
    } : function (n, A) {
      return e.call(n, A);
    };
  }(), l._l = {}, l.on = function (e, n) {
    this._l[e] || (this._l[e] = []), this._l[e].push(n), Modernizr.hasOwnProperty(e) && setTimeout(function () {
      Modernizr._trigger(e, Modernizr[e]);
    }, 0);
  }, l._trigger = function (e, n) {
    if (this._l[e]) {
      var A = this._l[e];
      setTimeout(function () {
        var e, o;

        for (e = 0; e < A.length; e++) {
          (o = A[e])(n);
        }
      }, 0), delete this._l[e];
    }
  }, Modernizr._q.push(function () {
    l.addTest = i;
  }), Modernizr.addAsyncTest(function () {
    function e(e, n, A) {
      function o(n) {
        var o = n && "load" === n.type ? 1 == t.width : !1,
            a = "webp" === e;
        i(e, a && o ? new Boolean(o) : o), A && A(n);
      }

      var t = new Image();
      t.onerror = o, t.onload = o, t.src = n;
    }

    var n = [{
      uri: "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",
      name: "webp"
    }, {
      uri: "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",
      name: "webp.alpha"
    }, {
      uri: "data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",
      name: "webp.animation"
    }, {
      uri: "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",
      name: "webp.lossless"
    }],
        A = n.shift();
    e(A.name, A.uri, function (A) {
      if (A && "load" === A.type) for (var o = 0; o < n.length; o++) {
        e(n[o].name, n[o].uri);
      }
    });
  }), t(), a(s), delete l.addTest, delete l.addAsyncTest;

  for (var p = 0; p < Modernizr._q.length; p++) {
    Modernizr._q[p]();
  }

  e.Modernizr = Modernizr;
}(window, document);
;

(function () {
  var docInfo = {
    info: {
      title: 'Тестовый документ PDF',
      author: 'BeInShape',
      subject: 'Диета',
      keywords: 'Ключевые слова'
    },
    pageSize: 'A4',
    pageOrientation: 'landscape',
    pageMargins: [50, 50, 30, 60],
    // Отступы от левого края, верхнего, правого и нижнего
    header: function header(currentPage, pageCount) {
      // Текущая страница, общее кол-во листов документа
      return {
        text: currentPage.toString() + 'из' + pageCount,
        alignment: 'right',
        margin: [0, 30, 10, 50]
      };
    },
    footer: [{
      text: 'Нижний колонтитул',
      alignment: 'center' // По умолчанию left

    }],
    content: [{
      text: 'Первая неделя',
      fontSize: 30,
      alignment: 'center' // pageBrake: 'after' // Разрыв страницы после этого параграфа (before - до этого параграфа). Последующая инфа будет отображаться на новом листе 

    }, {
      text: 'Понедельник',
      fontSize: 20
    }]
  }; // pdfMake.createPdf(docInfo).open(); // Открыть документ в новой вкладке браузера
  // pdfMake.createPdf(docInfo).download('диета.pdf'); // Скачать документ (названеи документа, который получит пользователь)
})();

var easing = {
  easeOutCubic: function easeOutCubic(pos) {
    return Math.pow(pos - 1, 3) + 1;
  },
  easeOutQuart: function easeOutQuart(pos) {
    return -(Math.pow(pos - 1, 4) - 1);
  }
};

var IosSelector = /*#__PURE__*/function () {
  function IosSelector(options) {
    _classCallCheck(this, IosSelector);

    var defaults = {
      el: '',
      // dom 
      type: 'infinite',
      // infinite 无限滚动，normal 非无限 
      count: 20,
      // 圆环规格，圆环上选项个数，必须设置 4 的倍数
      sensitivity: 0.8,
      // 灵敏度
      source: [],
      // 选项 {value: xx, text: xx}
      value: null,
      onChange: null
    };
    this.options = Object.assign({}, defaults, options);
    this.options.count = this.options.count - this.options.count % 4;
    Object.assign(this, this.options);
    this.halfCount = this.options.count / 2;
    this.quarterCount = this.options.count / 4;
    this.a = this.options.sensitivity * 10; // 滚动减速度

    this.minV = Math.sqrt(1 / this.a); // 最小初速度

    this.selected = this.source[0];
    this.exceedA = 10; // 超出减速 

    this.moveT = 0; // 滚动 tick

    this.moving = false;
    this.elems = {
      el: document.querySelector(this.options.el),
      circleList: null,
      circleItems: null,
      // list
      highlight: null,
      highlightList: null,
      highListItems: null // list

    };
    this.events = {
      touchstart: null,
      touchmove: null,
      touchend: null
    };
    this.itemHeight = this.elems.el.offsetHeight * 3 / this.options.count; // 每项高度

    this.itemAngle = 360 / this.options.count; // 每项之间旋转度数

    this.radius = this.itemHeight / Math.tan(this.itemAngle * Math.PI / 180); // 圆环半径 

    this.scroll = 0; // 单位为一个 item 的高度（度数）

    this._init();
  }

  _createClass(IosSelector, [{
    key: "_init",
    value: function _init() {
      var _this = this;

      this._create(this.options.source);

      var touchData = {
        startY: 0,
        yArr: []
      };

      for (var eventName in this.events) {
        this.events[eventName] = function (eventName) {
          return function (e) {
            if (_this.elems.el.contains(e.target) || e.target === _this.elems.el) {
              e.preventDefault();

              if (_this.source.length) {
                _this['_' + eventName](e, touchData);
              }
            }
          };
        }(eventName);
      }

      this.elems.el.addEventListener('touchstart', this.events.touchstart);
      document.addEventListener('mousedown', this.events.touchstart);
      this.elems.el.addEventListener('touchend', this.events.touchend);
      document.addEventListener('mouseup', this.events.touchend);

      if (this.source.length) {
        this.value = this.value !== null ? this.value : this.source[0].value;
        this.select(this.value);
      }
    }
  }, {
    key: "_touchstart",
    value: function _touchstart(e, touchData) {
      this.elems.el.addEventListener('touchmove', this.events.touchmove);
      document.addEventListener('mousemove', this.events.touchmove);
      var eventY = e.clientY || e.touches[0].clientY;
      touchData.startY = eventY;
      touchData.yArr = [[eventY, new Date().getTime()]];
      touchData.touchScroll = this.scroll;

      this._stop();
    }
  }, {
    key: "_touchmove",
    value: function _touchmove(e, touchData) {
      var eventY = e.clientY || e.touches[0].clientY;
      touchData.yArr.push([eventY, new Date().getTime()]);

      if (touchData.length > 5) {
        touchData.unshift();
      }

      var scrollAdd = (touchData.startY - eventY) / this.itemHeight;
      var moveToScroll = scrollAdd + this.scroll; // 非无限滚动时，超出范围使滚动变得困难

      if (this.type === 'normal') {
        if (moveToScroll < 0) {
          moveToScroll *= 0.3;
        } else if (moveToScroll > this.source.length) {
          moveToScroll = this.source.length + (moveToScroll - this.source.length) * 0.3;
        } // console.log(moveToScroll);

      } else {
        moveToScroll = this._normalizeScroll(moveToScroll);
      }

      touchData.touchScroll = this._moveTo(moveToScroll);
    }
  }, {
    key: "_touchend",
    value: function _touchend(e, touchData) {
      // console.log(e);
      this.elems.el.removeEventListener('touchmove', this.events.touchmove);
      document.removeEventListener('mousemove', this.events.touchmove);
      var v;

      if (touchData.yArr.length === 1) {
        v = 0;
      } else {
        var startTime = touchData.yArr[touchData.yArr.length - 2][1];
        var endTime = touchData.yArr[touchData.yArr.length - 1][1];
        var startY = touchData.yArr[touchData.yArr.length - 2][0];
        var endY = touchData.yArr[touchData.yArr.length - 1][0]; // 计算速度

        v = (startY - endY) / this.itemHeight * 1000 / (endTime - startTime);
        var sign = v > 0 ? 1 : -1;
        v = Math.abs(v) > 30 ? 30 * sign : v;
      }

      this.scroll = touchData.touchScroll;

      this._animateMoveByInitV(v); // console.log('end');

    }
  }, {
    key: "_create",
    value: function _create(source) {
      if (!source.length) {
        return;
      }

      var template = "\n        <div class=\"select-wrap\">\n          <ul class=\"select-options\" style=\"transform: translate3d(0, 0, ".concat(-this.radius, "px) rotateX(0deg);\">\n            {{circleListHTML}}\n            <!-- <li class=\"select-option\">a0</li> -->\n          </ul>\n          <div class=\"highlight\">\n            <ul class=\"highlight-list\">\n              <!-- <li class=\"highlight-item\"></li> -->\n              {{highListHTML}}\n            </ul>\n          </div>\n        </div>\n      "); // source 处理

      if (this.options.type === 'infinite') {
        var concatSource = [].concat(source);

        while (concatSource.length < this.halfCount) {
          concatSource = concatSource.concat(source);
        }

        source = concatSource;
      }

      this.source = source;
      var sourceLength = source.length; // 圆环 HTML

      var circleListHTML = '';

      for (var i = 0; i < source.length; i++) {
        circleListHTML += "<li class=\"select-option\"\n                      style=\"\n                        top: ".concat(this.itemHeight * -0.5, "px;\n                        height: ").concat(this.itemHeight, "px;\n                        line-height: ").concat(this.itemHeight, "px;\n                        transform: rotateX(").concat(-this.itemAngle * i, "deg) translate3d(0, 0, ").concat(this.radius, "px);\n                      \"\n                      data-index=\"").concat(i, "\"\n                      >").concat(source[i].text, "</li>");
      } // 中间高亮 HTML


      var highListHTML = '';

      for (var _i = 0; _i < source.length; _i++) {
        highListHTML += "<li class=\"highlight-item\" style=\"height: ".concat(this.itemHeight, "px;\">\n                          ").concat(source[_i].text, "\n                        </li>");
      }

      if (this.options.type === 'infinite') {
        // 圆环头尾
        for (var _i2 = 0; _i2 < this.quarterCount; _i2++) {
          // 头
          circleListHTML = "<li class=\"select-option\"\n                        style=\"\n                          top: ".concat(this.itemHeight * -0.5, "px;\n                          height: ").concat(this.itemHeight, "px;\n                          line-height: ").concat(this.itemHeight, "px;\n                          transform: rotateX(").concat(this.itemAngle * (_i2 + 1), "deg) translate3d(0, 0, ").concat(this.radius, "px);\n                        \"\n                        data-index=\"").concat(-_i2 - 1, "\"\n                        >").concat(source[sourceLength - _i2 - 1].text, "</li>") + circleListHTML; // 尾

          circleListHTML += "<li class=\"select-option\"\n                        style=\"\n                          top: ".concat(this.itemHeight * -0.5, "px;\n                          height: ").concat(this.itemHeight, "px;\n                          line-height: ").concat(this.itemHeight, "px;\n                          transform: rotateX(").concat(-this.itemAngle * (_i2 + sourceLength), "deg) translate3d(0, 0, ").concat(this.radius, "px);\n                        \"\n                        data-index=\"").concat(_i2 + sourceLength, "\"\n                        >").concat(source[_i2].text, "</li>");
        } // 高亮头尾


        highListHTML = "<li class=\"highlight-item\" style=\"height: ".concat(this.itemHeight, "px;\">\n                            ").concat(source[sourceLength - 1].text, "\n                        </li>") + highListHTML;
        highListHTML += "<li class=\"highlight-item\" style=\"height: ".concat(this.itemHeight, "px;\">").concat(source[0].text, "</li>");
      }

      this.elems.el.innerHTML = template.replace('{{circleListHTML}}', circleListHTML).replace('{{highListHTML}}', highListHTML);
      this.elems.circleList = this.elems.el.querySelector('.select-options');
      this.elems.circleItems = this.elems.el.querySelectorAll('.select-option');
      this.elems.highlight = this.elems.el.querySelector('.highlight');
      this.elems.highlightList = this.elems.el.querySelector('.highlight-list');
      this.elems.highlightitems = this.elems.el.querySelectorAll('.highlight-item');

      if (this.type === 'infinite') {
        this.elems.highlightList.style.top = -this.itemHeight + 'px';
      }

      this.elems.highlight.style.height = this.itemHeight + 'px';
      this.elems.highlight.style.lineHeight = this.itemHeight + 'px';
    }
    /**
     * 对 scroll 取模，eg source.length = 5 scroll = 6.1 
     * 取模之后 normalizedScroll = 1.1
     * @param {init} scroll 
     * @return 取模之后的 normalizedScroll
     */

  }, {
    key: "_normalizeScroll",
    value: function _normalizeScroll(scroll) {
      var normalizedScroll = scroll;

      while (normalizedScroll < 0) {
        normalizedScroll += this.source.length;
      }

      normalizedScroll = normalizedScroll % this.source.length;
      return normalizedScroll;
    }
    /**
     * 定位到 scroll，无动画
     * @param {init} scroll 
     * @return 返回指定 normalize 之后的 scroll
     */

  }, {
    key: "_moveTo",
    value: function _moveTo(scroll) {
      var _this2 = this;

      if (this.type === 'infinite') {
        scroll = this._normalizeScroll(scroll);
      }

      this.elems.circleList.style.transform = "translate3d(0, 0, ".concat(-this.radius, "px) rotateX(").concat(this.itemAngle * scroll, "deg)");
      this.elems.highlightList.style.transform = "translate3d(0, ".concat(-scroll * this.itemHeight, "px, 0)");

      _toConsumableArray(this.elems.circleItems).forEach(function (itemElem) {
        if (Math.abs(itemElem.dataset.index - scroll) > _this2.quarterCount) {
          itemElem.style.visibility = 'hidden';
        } else {
          itemElem.style.visibility = 'visible';
        }
      }); // console.log(scroll);
      // console.log(`translate3d(0, 0, ${-this.radius}px) rotateX(${-this.itemAngle * scroll}deg)`);


      return scroll;
    }
    /**
     * 以初速度 initV 滚动
     * @param {init} initV， initV 会被重置
     * 以根据加速度确保滚动到整数 scroll (保证能通过 scroll 定位到一个选中值)
     */

  }, {
    key: "_animateMoveByInitV",
    value: function () {
      var _animateMoveByInitV2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(initV) {
        var initScroll, finalScroll, finalV, totalScrollLen, a, t;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(this.type === 'normal')) {
                  _context.next = 26;
                  break;
                }

                if (!(this.scroll < 0 || this.scroll > this.source.length - 1)) {
                  _context.next = 14;
                  break;
                }

                a = this.exceedA;
                initScroll = this.scroll;
                finalScroll = this.scroll < 0 ? 0 : this.source.length - 1;
                totalScrollLen = initScroll - finalScroll;
                t = Math.sqrt(Math.abs(totalScrollLen / a));
                initV = a * t;
                initV = this.scroll > 0 ? -initV : initV;
                finalV = 0;
                _context.next = 12;
                return this._animateToScroll(initScroll, finalScroll, t);

              case 12:
                _context.next = 24;
                break;

              case 14:
                initScroll = this.scroll;
                a = initV > 0 ? -this.a : this.a; // 减速加速度

                t = Math.abs(initV / a); // 速度减到 0 花费时间

                totalScrollLen = initV * t + a * t * t / 2; // 总滚动长度

                finalScroll = Math.round(this.scroll + totalScrollLen); // 取整，确保准确最终 scroll 为整数

                finalScroll = finalScroll < 0 ? 0 : finalScroll > this.source.length - 1 ? this.source.length - 1 : finalScroll;
                totalScrollLen = finalScroll - initScroll;
                t = Math.sqrt(Math.abs(totalScrollLen / a));
                _context.next = 24;
                return this._animateToScroll(this.scroll, finalScroll, t, 'easeOutQuart');

              case 24:
                _context.next = 33;
                break;

              case 26:
                initScroll = this.scroll;
                a = initV > 0 ? -this.a : this.a; // 减速加速度

                t = Math.abs(initV / a); // 速度减到 0 花费时间

                totalScrollLen = initV * t + a * t * t / 2; // 总滚动长度

                finalScroll = Math.round(this.scroll + totalScrollLen); // 取整，确保准确最终 scroll 为整数

                _context.next = 33;
                return this._animateToScroll(this.scroll, finalScroll, t, 'easeOutQuart');

              case 33:
                // await this._animateToScroll(this.scroll, finalScroll, initV, 0);
                this._selectByScroll(this.scroll);

              case 34:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function _animateMoveByInitV(_x) {
        return _animateMoveByInitV2.apply(this, arguments);
      }

      return _animateMoveByInitV;
    }()
  }, {
    key: "_animateToScroll",
    value: function _animateToScroll(initScroll, finalScroll, t) {
      var _this3 = this;

      var easingName = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'easeOutQuart';

      if (initScroll === finalScroll || t === 0) {
        this._moveTo(initScroll);

        return;
      }

      var start = new Date().getTime() / 1000;
      var pass = 0;
      var totalScrollLen = finalScroll - initScroll; // console.log(initScroll, finalScroll, initV, finalV, a);

      return new Promise(function (resolve, reject) {
        _this3.moving = true;

        var tick = function tick() {
          pass = new Date().getTime() / 1000 - start;

          if (pass < t) {
            _this3.scroll = _this3._moveTo(initScroll + easing[easingName](pass / t) * totalScrollLen);
            _this3.moveT = requestAnimationFrame(tick);
          } else {
            resolve();

            _this3._stop();

            _this3.scroll = _this3._moveTo(initScroll + totalScrollLen);
          }
        };

        tick();
      });
    }
  }, {
    key: "_stop",
    value: function _stop() {
      this.moving = false;
      cancelAnimationFrame(this.moveT);
    }
  }, {
    key: "_selectByScroll",
    value: function _selectByScroll(scroll) {
      scroll = this._normalizeScroll(scroll) | 0;

      if (scroll > this.source.length - 1) {
        scroll = this.source.length - 1;

        this._moveTo(scroll);
      }

      this._moveTo(scroll);

      this.scroll = scroll;
      this.selected = this.source[scroll];
      this.value = this.selected.value;
      this.onChange && this.onChange(this.selected);
    }
  }, {
    key: "updateSource",
    value: function updateSource(source) {
      this._create(source);

      if (!this.moving) {
        this._selectByScroll(this.scroll);
      }
    }
  }, {
    key: "select",
    value: function select(value) {
      var _this4 = this;

      var _loop = function _loop(i) {
        if (_this4.source[i].value === value) {
          window.cancelAnimationFrame(_this4.moveT); // this.scroll = this._moveTo(i);

          var initScroll = _this4._normalizeScroll(_this4.scroll);

          var finalScroll = i;
          var t = Math.sqrt(Math.abs((finalScroll - initScroll) / _this4.a));

          _this4._animateToScroll(initScroll, finalScroll, t);

          setTimeout(function () {
            return _this4._selectByScroll(i);
          });
          return {
            v: void 0
          };
        }
      };

      for (var i = 0; i < this.source.length; i++) {
        var _ret = _loop(i);

        if (_typeof(_ret) === "object") return _ret.v;
      }

      throw new Error("can not select value: ".concat(value, ", ").concat(value, " match nothing in current source"));
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this._stop(); // document 事件解绑


      for (var eventName in this.events) {
        this.elems.el.removeEventListener('eventName', this.events[eventName]);
      }

      document.removeEventListener('mousedown', this.events['touchstart']);
      document.removeEventListener('mousemove', this.events['touchmove']);
      document.removeEventListener('mouseup', this.events['touchend']); // 元素移除

      this.elems.el.innerHTML = '';
      this.elems = null;
    }
  }]);

  return IosSelector;
}(); // date logic


function getYears() {
  var currentYear = new Date().getFullYear();
  var years = [];

  for (var i = 1; i <= 250; i++) {
    years.push({
      value: i,
      text: i
    });
  }

  return years;
}

function getMonths(year) {
  var months = [];

  for (var i = 1; i <= 250; i++) {
    months.push({
      value: i,
      text: i
    });
  }

  return months;
}

function getDays(year, month) {
  var dayCount = new Date(year, month, 0).getDate();
  var days = [];

  for (var i = 1; i <= 100; i++) {
    days.push({
      value: i,
      text: i
    });
  }

  return days;
}

var currentYear = new Date().getFullYear();
var currentMonth = 1;
var currentDay = 1;
var yearSelector;
var monthSelector;
var daySelector;
yearSource = getYears();
monthSource = getMonths();
daySource = getDays(currentYear, currentMonth);
yearSelector = new IosSelector({
  el: '#year1',
  type: 'infinite',
  source: yearSource,
  count: 20,
  onChange: function onChange(selected) {
    currentYear = selected.value;
    daySource = getDays(currentYear, currentMonth);
    daySelector.updateSource(daySource);
    console.log(yearSelector.value, monthSelector.value, daySelector.value);
  }
});
monthSelector = new IosSelector({
  el: '#month1',
  type: 'infinite',
  source: monthSource,
  count: 20,
  onChange: function onChange(selected) {
    currentMonth = selected.value;
    daySource = getDays(currentYear, currentMonth);
    daySelector.updateSource(daySource);
    console.log(yearSelector.value, monthSelector.value, daySelector.value);
  }
});
daySelector = new IosSelector({
  el: '#day1',
  type: 'infinite',
  source: [],
  count: 20,
  onChange: function onChange(selected) {
    currentDay = selected.value;
    console.log(yearSelector.value, monthSelector.value, daySelector.value);
  }
});
var now = new Date();
setTimeout(function () {
  yearSelector.select(now.getFullYear());
  monthSelector.select(now.getMonth() + 1);
  daySelector.select(now.getDate());
});

(function () {
  /* ПЕРЕМЕННЫЕ  */
  // Выбор пола
  var femaleBtns = document.querySelectorAll(".sex-btn"),
      weight = document.getElementById("weight"),
      height = document.getElementById("height"),
      age = document.getElementById("age"),
      activityBtns = document.querySelectorAll(".activity-btn"),
      targetBtns = document.querySelectorAll(".target-btn"),
      userB_M_IResult = document.querySelector(".index"),
      userB_M_IMes = document.querySelector(".index-message"),
      userCaloriesResult = document.querySelector(".calories"),
      userCaloriesMes = document.querySelector(".calories-message"),
      calcBtn = document.getElementById("calc"); // Данные

  var userSex, userWeight, userHeightMeters, userHeight, userAge, weightIndex, userActivity, dailyCalories, metabolism, target, caloriesDeficiteStart, caloriesDeficiteEnd, weightIndexMessage, normalWeight;
  /* ФУНКЦИИ ДЛЯ РАСЧЕТОВ */

  function userParams() {
    femaleBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        userSex = btn.value;
        console.log("\u041F\u043E\u043B: ".concat(userSex));
      });
      return userSex;
    });
    targetBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        target = btn.value;
        console.log("\u0426\u0435\u043B\u044C: ".concat(target));
      });
      return target;
    });
    weight.addEventListener("change", function () {
      userWeight = Number(weight.value);
      console.log("Вес: ");
      console.log(userWeight);
      return userWeight;
    });
    height.addEventListener("change", function () {
      userHeight = Number(height.value);
      console.log("Рост: ");
      console.log(userHeight);
      return userHeight;
    });
    age.addEventListener("change", function () {
      userAge = Number(age.value);
      console.log("Возраст: ");
      console.log(userAge);
      return userAge;
    });
  }

  userParams();

  function weightIndexCalc() {
    userHeightMeters = userHeight / 100;
    console.log("Вес в метрах: ");
    console.log(userHeightMeters);
    weightIndex = Number(Math.round(userWeight / (userHeightMeters * userHeightMeters)));
    console.log("ИМТ: ");
    console.log(weightIndex);

    if (weightIndex >= 0 && weightIndex < 16) {
      console.log("ИМТ: Выраженный дефицит массы тела");
      weightIndexMessage = "Выраженный дефицит массы тела";
    }

    if (weightIndex >= 16 && weightIndex < 19) {
      console.log("ИМТ: Недостаточная масса тела");
      weightIndexMessage = "Недостаточная масса тела";
    }

    if (weightIndex >= 20 && weightIndex < 25) {
      console.log("ИМТ: Нормальная масса тела");
      weightIndexMessage = "Нормальная масса тела";
    }

    if (weightIndex >= 25 && weightIndex < 30) {
      console.log("ИМТ: Избыточная масса тела (предожирение)");
      weightIndexMessage = "Избыточная масса тела (предожирение)";
    }

    if (weightIndex >= 30 && weightIndex < 35) {
      console.log("ИМТ: Ожирение 1-ой степени");
      weightIndexMessage = "Ожирение 1-ой степени";
    }

    if (weightIndex >= 35 && weightIndex <= 40) {
      console.log("ИМТ: Ожирение 2-ой степени");
      weightIndexMessage = "Ожирение 2-ой степени";
    }

    if (weightIndex > 40) {
      console.log("ИМТ: Ожирение 3-ой степени");
      weightIndexMessage = "Ожирение 3-ой степени";
    }

    return weightIndex;
  }

  function minCalories() {
    if (weightIndex > 29 || weightIndex >= 0 && weightIndex <= 19) {
      normalWeight = userHeight - 100;
      console.log("Нормальный вес: ");
      console.log(normalWeight);

      if (userSex == "male") {
        metabolism = Math.round(9.9 * normalWeight + 6.25 * userHeight - 4.92 * userAge + 5);
      } else if (userSex == "female") {
        metabolism = Math.round(9.9 * normalWeight + 6.25 * userHeight - 4.92 * userAge - 161);
      }
    } else {
      if (userSex == "male") {
        metabolism = Math.round(9.9 * userWeight + 6.25 * userHeight - 4.92 * userAge + 5);
      } else if (userSex == "female") {
        metabolism = Math.round(9.9 * userWeight + 6.25 * userHeight - 4.92 * userAge - 161);
      }
    }

    console.log("Минимальная калорийность (основной обмен): ");
    console.log(metabolism);
    return metabolism;
  }

  function activity() {
    activityBtns.forEach(function (btn, i) {
      btn.addEventListener("click", function () {
        if (i == 0) {
          userActivity = 1.2;
          console.log("Коэф. активности: ");
          console.log(userActivity);
        } else if (i == 1) {
          userActivity = 1.3;
          console.log("Коэф. активности: ");
          console.log(userActivity);
        } else if (i == 2) {
          userActivity = 1.4;
          console.log("Коэф. активности: ");
          console.log(userActivity);
        } else if (i == 3) {
          userActivity = 1.5;
          console.log("Коэф. активности: ");
          console.log(userActivity);
        } else if (i == 4) {
          userActivity = 1.6;
          console.log("Коэф. активности: ");
          console.log(userActivity);
        } else if (i == 5) {
          userActivity = 1.9;
          console.log("Коэф. активности: ");
          console.log(userActivity);
        }
      });
    });
    return userActivity;
  }

  activity();

  function dailyCaloriesCalc() {
    dailyCalories = Math.round(metabolism * userActivity);
    console.log("Дневная калорийность: ");
    console.log(dailyCalories);

    if (weightIndex >= 0 && weightIndex < 19) {
      dailyCalories = Math.round(metabolism * userActivity);
      userCaloriesResult.innerHTML = dailyCalories;
    }

    if (target == 1) {
      if (weightIndex >= 19 && weightIndex < 25) {
        caloriesDeficiteStart = Math.round(dailyCalories - dailyCalories / 100 * 10);
        caloriesDeficiteEnd = Math.round(dailyCalories - dailyCalories / 100 * 15);
        console.log("Кал. для похудения: ");
        console.log(caloriesDeficiteStart + " - " + caloriesDeficiteEnd);
        userCaloriesResult.innerHTML = caloriesDeficiteStart + " - " + caloriesDeficiteEnd;
      } else if (weightIndex >= 25 && weightIndex < 30) {
        caloriesDeficiteStart = Math.round(dailyCalories - dailyCalories / 100 * 15);
        caloriesDeficiteEnd = Math.round(dailyCalories - dailyCalories / 100 * 20);
        console.log("Кал. для похудения: ");
        console.log(caloriesDeficiteStart + " - " + caloriesDeficiteEnd);
        userCaloriesResult.innerHTML = caloriesDeficiteStart + " - " + caloriesDeficiteEnd;
      } else if (weightIndex >= 30) {
        caloriesDeficiteStart = Math.round(dailyCalories - dailyCalories / 100 * 10);
        caloriesDeficiteEnd = Math.round(dailyCalories - dailyCalories / 100 * 15);
        console.log("Кал. для похудения: ");
        console.log(caloriesDeficiteStart + " - " + caloriesDeficiteEnd);
        userCaloriesResult.innerHTML = caloriesDeficiteStart + " - " + caloriesDeficiteEnd;
      }
    } else if (target == 2) {
      caloriesDeficiteStart = dailyCalories + 100;
      caloriesDeficiteEnd = dailyCalories + 200;
      console.log("Кал. для набора веса: ");
      console.log(caloriesDeficiteStart + " - " + caloriesDeficiteEnd);
      userCaloriesResult.innerHTML = caloriesDeficiteStart + " - " + caloriesDeficiteEnd;
    }
  }

  function resultShow() {
    userB_M_IResult.innerHTML = weightIndex;
    userB_M_IMes.innerHTML = weightIndexMessage; // if (target == 3) {
    //   userCaloriesResult.innerHTML = dailyCalories;
    // } else {
    //   userCaloriesResult.innerHTML =
    //     caloriesDeficiteStart + " - " + caloriesDeficiteEnd;
    // }

    userCaloriesMes.innerHTML = "Рекомендуемое суточное количество калорий";
  }

  calc.addEventListener("click", function () {
    weightIndexCalc();
    minCalories();
    dailyCaloriesCalc();
    resultShow();
  });
})();
/*!
 * @copyright Copyright (c) 2017 IcoMoon.io
 * @license   Licensed under MIT license
 *            See https://github.com/Keyamoon/svgxuse
 * @version   1.2.6
 */


(function () {
  if ("undefined" !== typeof window && window.addEventListener) {
    var e = Object.create(null),
        l,
        d = function d() {
      clearTimeout(l);
      l = setTimeout(n, 100);
    },
        m = function m() {},
        t = function t() {
      window.addEventListener("resize", d, !1);
      window.addEventListener("orientationchange", d, !1);

      if (window.MutationObserver) {
        var k = new MutationObserver(d);
        k.observe(document.documentElement, {
          childList: !0,
          subtree: !0,
          attributes: !0
        });

        m = function m() {
          try {
            k.disconnect(), window.removeEventListener("resize", d, !1), window.removeEventListener("orientationchange", d, !1);
          } catch (v) {}
        };
      } else document.documentElement.addEventListener("DOMSubtreeModified", d, !1), m = function m() {
        document.documentElement.removeEventListener("DOMSubtreeModified", d, !1);
        window.removeEventListener("resize", d, !1);
        window.removeEventListener("orientationchange", d, !1);
      };
    },
        u = function u(k) {
      function e(a) {
        if (void 0 !== a.protocol) var c = a;else c = document.createElement("a"), c.href = a;
        return c.protocol.replace(/:/g, "") + c.host;
      }

      if (window.XMLHttpRequest) {
        var d = new XMLHttpRequest();
        var m = e(location);
        k = e(k);
        d = void 0 === d.withCredentials && "" !== k && k !== m ? XDomainRequest || void 0 : XMLHttpRequest;
      }

      return d;
    };

    var n = function n() {
      function d() {
        --q;
        0 === q && (m(), t());
      }

      function l(a) {
        return function () {
          !0 !== e[a.base] && (a.useEl.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#" + a.hash), a.useEl.hasAttribute("href") && a.useEl.setAttribute("href", "#" + a.hash));
        };
      }

      function p(a) {
        return function () {
          var c = document.body,
              b = document.createElement("x");
          a.onload = null;
          b.innerHTML = a.responseText;
          if (b = b.getElementsByTagName("svg")[0]) b.setAttribute("aria-hidden", "true"), b.style.position = "absolute", b.style.width = 0, b.style.height = 0, b.style.overflow = "hidden", c.insertBefore(b, c.firstChild);
          d();
        };
      }

      function n(a) {
        return function () {
          a.onerror = null;
          a.ontimeout = null;
          d();
        };
      }

      var a,
          c,
          q = 0;
      m();
      var f = document.getElementsByTagName("use");

      for (c = 0; c < f.length; c += 1) {
        try {
          var g = f[c].getBoundingClientRect();
        } catch (w) {
          g = !1;
        }

        var h = (a = f[c].getAttribute("href") || f[c].getAttributeNS("http://www.w3.org/1999/xlink", "href") || f[c].getAttribute("xlink:href")) && a.split ? a.split("#") : ["", ""];
        var b = h[0];
        h = h[1];
        var r = g && 0 === g.left && 0 === g.right && 0 === g.top && 0 === g.bottom;
        g && 0 === g.width && 0 === g.height && !r ? (f[c].hasAttribute("href") && f[c].setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a), b.length && (a = e[b], !0 !== a && setTimeout(l({
          useEl: f[c],
          base: b,
          hash: h
        }), 0), void 0 === a && (h = u(b), void 0 !== h && (a = new h(), e[b] = a, a.onload = p(a), a.onerror = n(a), a.ontimeout = n(a), a.open("GET", b), a.send(), q += 1)))) : r ? b.length && e[b] && setTimeout(l({
          useEl: f[c],
          base: b,
          hash: h
        }), 0) : void 0 === e[b] ? e[b] = !0 : e[b].onload && (e[b].abort(), delete e[b].onload, e[b] = !0);
      }

      f = "";
      q += 1;
      d();
    };

    var p = function p() {
      window.removeEventListener("load", p, !1);
      l = setTimeout(n, 0);
    };

    "complete" !== document.readyState ? window.addEventListener("load", p, !1) : p();
  }
})();