"use strict";

// Polyfill for forEach method
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
"use strict";

;

(function () {
  /* ПЕРЕМЕННЫЕ  */
  // Выбор пола
  var femaleBtns = document.querySelectorAll('.sex-btn'),
      weight = document.getElementById('weight'),
      height = document.getElementById('height'),
      age = document.getElementById('age'),
      activityBtns = document.querySelectorAll('.activity-btn'),
      targetBtns = document.querySelectorAll('.target-btn'),
      userB_M_IResult = document.querySelector('.index'),
      userB_M_IMes = document.querySelector('.index-message'),
      userCaloriesResult = document.querySelector('.calories'),
      userCaloriesMes = document.querySelector('.calories-message'); // Данные

  var userSex, userWeight, userHeight, userAge, userB_M_I, userActivity, dailyCalories, metabolism, target, caloriesDeficiteStart, caloriesDeficiteEnd, userB_M_IMassage;
  /* ФУНКЦИИ ДЛЯ РАСЧЕТОВ */

  function userParams() {
    femaleBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        userSex = btn.value;
        console.log("\u041F\u043E\u043B: ".concat(userSex));
      });
      return userSex;
    });
    targetBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        target = btn.value;
        console.log("\u0426\u0435\u043B\u044C: ".concat(target));
      });
      return target;
    });
    weight.addEventListener('change', function () {
      userWeight = weight.value;
      console.log("\u0412\u0435\u0441: ".concat(userWeight));
      return userWeight;
    });
    height.addEventListener('change', function () {
      userHeight = height.value / 100;
      console.log("\u0420\u043E\u0441\u0442: ".concat(userHeight));
      return userHeight;
    });
    age.addEventListener('change', function () {
      userAge = age.value;
      console.log("\u0412\u043E\u0437\u0440\u0430\u0441\u0442: ".concat(userAge));
      return userAge;
    });
    activityBtns.forEach(function (btn, i) {
      btn.addEventListener('click', function () {
        // console.log(i);
        if (i == 0 && userSex == 'male') {
          userActivity = 31;
          console.log("\u041A\u043E\u044D\u0444. \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0438: ".concat(userActivity));
        } else if (i == 0 && userSex == 'female') {
          userActivity = 28;
          console.log("\u041A\u043E\u044D\u0444. \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0438: ".concat(userActivity));
        }

        if (i == 1 && userSex == 'male') {
          userActivity = 32;
          console.log("\u041A\u043E\u044D\u0444. \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0438: ".concat(userActivity));
        } else if (i == 1 && userSex == 'female') {
          userActivity = 30;
          console.log("\u041A\u043E\u044D\u0444. \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0438: ".concat(userActivity));
        }

        if (i == 2 && userSex == 'male') {
          userActivity = 33;
          console.log("\u041A\u043E\u044D\u0444. \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0438: ".concat(userActivity));
        } else if (i == 2 && userSex == 'female') {
          userActivity = 31;
          console.log("\u041A\u043E\u044D\u0444. \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0438: ".concat(userActivity));
        }

        if (i == 3 && userSex == 'male') {
          userActivity = 35;
          console.log("\u041A\u043E\u044D\u0444. \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0438: ".concat(userActivity));
        } else if (i == 3 && userSex == 'female') {
          userActivity = 33;
          console.log("\u041A\u043E\u044D\u0444. \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0438: ".concat(userActivity));
        }

        if (i == 4 && userSex == 'male') {
          userActivity = 37;
          console.log("\u041A\u043E\u044D\u0444. \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0438: ".concat(userActivity));
        } else if (i == 4 && userSex == 'female') {
          userActivity = 35;
          console.log("\u041A\u043E\u044D\u0444. \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0438: ".concat(userActivity));
        }

        dailyCalories = userWeight * userActivity;
        console.log("\u0414\u043D\u0435\u0432\u043D\u0430\u044F \u043A\u0430\u043B\u043E\u0440\u0438\u0439\u043D\u043E\u0441\u0442\u044C: ".concat(dailyCalories));

        if (userSex == 'male') {
          metabolism = 24 * userWeight;
        } else if (userSex == 'female') {
          metabolism = 22 * userWeight;
        }

        console.log("\u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0439 \u043E\u0431\u043C\u0435\u043D: ".concat(metabolism));
        userB_M_I = Math.round(userWeight / (userHeight * userHeight));
        console.log("\u0418\u041C\u0422: ".concat(userB_M_I));

        if (target == 1) {
          if (userB_M_I >= 18 && userB_M_I <= 25) {
            caloriesDeficiteStart = dailyCalories - dailyCalories / 100 * 5;
            caloriesDeficiteEnd = dailyCalories - dailyCalories / 100 * 10;
          }

          if (userB_M_I >= 26 && userB_M_I <= 29) {
            caloriesDeficiteStart = dailyCalories - dailyCalories / 100 * 15;
            caloriesDeficiteEnd = dailyCalories - dailyCalories / 100 * 20;
          }

          if (userB_M_I > 29) {
            caloriesDeficiteStart = dailyCalories - dailyCalories / 100 * 5;
            caloriesDeficiteEnd = dailyCalories - dailyCalories / 100 * 10;
          }

          console.log("\u041A\u0430\u043B\u043E\u0440\u0438\u0438 \u0434\u043B\u044F \u043F\u043E\u0445\u0443\u0434\u0435\u043D\u0438\u044F: ".concat(caloriesDeficiteStart, " - ").concat(caloriesDeficiteEnd));
        } else if (target == 2) {
          caloriesDeficiteStart = dailyCalories + 100;
          caloriesDeficiteEnd = dailyCalories + 200;
          console.log("\u041A\u0430\u043B\u043E\u0440\u0438\u0438 \u0434\u043B\u044F \u043D\u0430\u0431\u043E\u0440\u0430 \u0432\u0435\u0441\u0430: ".concat(caloriesDeficiteStart, " - ").concat(caloriesDeficiteEnd));
        }

        if (userB_M_I < 20) {
          userB_M_IMassage = 'недостаток веса';
        } else if (userB_M_I >= 21 && userB_M_I < 25) {
          userB_M_IMassage = 'нормальный вес';
        } else if (userB_M_I >= 25 && userB_M_I <= 29) {
          userB_M_IMassage = 'есть лишний вес';
        } else if (userB_M_I > 30) {
          userB_M_IMassage = 'ожирение';
        }

        userB_M_IResult.innerHTML = userB_M_I;
        userB_M_IMes.innerHTML = userB_M_IMassage;
        userCaloriesResult.innerHTML = caloriesDeficiteStart + ' - ' + caloriesDeficiteEnd;
        userCaloriesMes.innerHTML = 'Рекомендуемое суточное количество калорий';
      });
      return userActivity;
    });
  }

  userParams(); // if (userSex != undefined && userWeight != undefined && userHeight != undefined && userAge != undefined) {
  //     bodyMassIndex(userWeight, userHeight);
  // }
  // function bodyMassIndex(w, h) {
  //     body_mass_index = w / (h * h);
  //     console.log(body_mass_index);
  // }
  // setTimeout(function () {
  //     console.log(userSex);
  // }, 5000);
})();
"use strict";

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