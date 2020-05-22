// Polyfill for forEach method

if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
}
/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-webp-setclasses !*/
!function(e,n,A){function o(e,n){return typeof e===n}function t(){var e,n,A,t,a,i,l;for(var f in r)if(r.hasOwnProperty(f)){if(e=[],n=r[f],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(A=0;A<n.options.aliases.length;A++)e.push(n.options.aliases[A].toLowerCase());for(t=o(n.fn,"function")?n.fn():n.fn,a=0;a<e.length;a++)i=e[a],l=i.split("."),1===l.length?Modernizr[l[0]]=t:(!Modernizr[l[0]]||Modernizr[l[0]]instanceof Boolean||(Modernizr[l[0]]=new Boolean(Modernizr[l[0]])),Modernizr[l[0]][l[1]]=t),s.push((t?"":"no-")+l.join("-"))}}function a(e){var n=u.className,A=Modernizr._config.classPrefix||"";if(c&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+A+"no-js(\\s|$)");n=n.replace(o,"$1"+A+"js$2")}Modernizr._config.enableClasses&&(n+=" "+A+e.join(" "+A),c?u.className.baseVal=n:u.className=n)}function i(e,n){if("object"==typeof e)for(var A in e)f(e,A)&&i(A,e[A]);else{e=e.toLowerCase();var o=e.split("."),t=Modernizr[o[0]];if(2==o.length&&(t=t[o[1]]),"undefined"!=typeof t)return Modernizr;n="function"==typeof n?n():n,1==o.length?Modernizr[o[0]]=n:(!Modernizr[o[0]]||Modernizr[o[0]]instanceof Boolean||(Modernizr[o[0]]=new Boolean(Modernizr[o[0]])),Modernizr[o[0]][o[1]]=n),a([(n&&0!=n?"":"no-")+o.join("-")]),Modernizr._trigger(e,n)}return Modernizr}var s=[],r=[],l={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var A=this;setTimeout(function(){n(A[e])},0)},addTest:function(e,n,A){r.push({name:e,fn:n,options:A})},addAsyncTest:function(e){r.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=l,Modernizr=new Modernizr;var f,u=n.documentElement,c="svg"===u.nodeName.toLowerCase();!function(){var e={}.hasOwnProperty;f=o(e,"undefined")||o(e.call,"undefined")?function(e,n){return n in e&&o(e.constructor.prototype[n],"undefined")}:function(n,A){return e.call(n,A)}}(),l._l={},l.on=function(e,n){this._l[e]||(this._l[e]=[]),this._l[e].push(n),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},l._trigger=function(e,n){if(this._l[e]){var A=this._l[e];setTimeout(function(){var e,o;for(e=0;e<A.length;e++)(o=A[e])(n)},0),delete this._l[e]}},Modernizr._q.push(function(){l.addTest=i}),Modernizr.addAsyncTest(function(){function e(e,n,A){function o(n){var o=n&&"load"===n.type?1==t.width:!1,a="webp"===e;i(e,a&&o?new Boolean(o):o),A&&A(n)}var t=new Image;t.onerror=o,t.onload=o,t.src=n}var n=[{uri:"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",name:"webp"},{uri:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",name:"webp.alpha"},{uri:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",name:"webp.animation"},{uri:"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",name:"webp.lossless"}],A=n.shift();e(A.name,A.uri,function(A){if(A&&"load"===A.type)for(var o=0;o<n.length;o++)e(n[o].name,n[o].uri)})}),t(),a(s),delete l.addTest,delete l.addAsyncTest;for(var p=0;p<Modernizr._q.length;p++)Modernizr._q[p]();e.Modernizr=Modernizr}(window,document);
;
(function () {

    let docInfo = {
        info: {
            title: 'Тестовый документ PDF',
            author: 'BeInShape',
            subject: 'Диета',
            keywords: 'Ключевые слова'
        },
        pageSize: 'A4',
        pageOrientation: 'landscape',
        pageMargins: [50, 50, 30, 60], // Отступы от левого края, верхнего, правого и нижнего

        header: function (currentPage, pageCount) { // Текущая страница, общее кол-во листов документа
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
                alignment: 'center'
                // pageBrake: 'after' // Разрыв страницы после этого параграфа (before - до этого параграфа). Последующая инфа будет отображаться на новом листе 
            },

            {
                text: 'Понедельник',
                fontSize: 20
            }
        ]
    };
    // pdfMake.createPdf(docInfo).open(); // Открыть документ в новой вкладке браузера
    // pdfMake.createPdf(docInfo).download('диета.pdf'); // Скачать документ (названеи документа, который получит пользователь)
})();
(function () {
  /* ПЕРЕМЕННЫЕ  */

  // Выбор пола
  const femaleBtns = document.querySelectorAll(".sex-btn"),
    weight = document.getElementById("weight"),
    height = document.getElementById("height"),
    age = document.getElementById("age"),
    activityBtns = document.querySelectorAll(".activity-btn"),
    targetBtns = document.querySelectorAll(".target-btn"),
    userB_M_IResult = document.querySelector(".index"),
    userB_M_IMes = document.querySelector(".index-message"),
    userCaloriesResult = document.querySelector(".calories"),
    userCaloriesMes = document.querySelector(".calories-message"),
    calcBtn = document.getElementById("calc");

  // Данные
  let userSex,
    userWeight,
    userHeight,
    userAge,
    weightIndex,
    userActivity,
    dailyCalories,
    metabolism,
    target,
    caloriesDeficiteStart,
    caloriesDeficiteEnd,
    weightIndexMessage,
    normalWeight;

  /* ФУНКЦИИ ДЛЯ РАСЧЕТОВ */

  function userParams() {
    femaleBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        userSex = btn.value;
        console.log(`Пол: ${userSex}`);
      });
      return userSex;
    });

    targetBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        target = btn.value;
        console.log(`Цель: ${target}`);
      });
      return target;
    });

    weight.addEventListener("change", () => {
      userWeight = Number(weight.value);
      console.log("Вес: ");
      console.log(userWeight);
      return userWeight;
    });

    height.addEventListener("change", () => {
      userHeight = Number(height.value);
      console.log("Рост: ");
      console.log(userHeight);
      return userHeight;
    });

    age.addEventListener("change", () => {
      userAge = Number(age.value);
      console.log("Возраст: ");
      console.log(userAge);
      return userAge;
    });
  }
  userParams();

  function weightIndexCalc() {
    weightIndex = Number(Math.round(userWeight / (userHeight * userHeight)));
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
    if (weightIndex > 29 || (weightIndex >= 0 && weightIndex <= 19)) {
      normalWeight = userHeight * 100 - 100;
      console.log("Нормальный вес: ");
      console.log(normalWeight);

      if (userSex == "male") {
        metabolism = Math.round(
          9.9 * normalWeight + 6.25 * (userHeight * 100) - 4.92 * userAge + 5
        );
      } else if (userSex == "female") {
        metabolism = Math.round(
          9.9 * normalWeight + 6.25 * (userHeight * 100) - 4.92 * userAge - 161
        );
      }
    } else {
      if (userSex == "male") {
        metabolism = Math.round(
          9.9 * userWeight + 6.25 * (userHeight * 100) - 4.92 * userAge + 5
        );
      } else if (userSex == "female") {
        metabolism = Math.round(
          9.9 * userWeight + 6.25 * (userHeight * 100) - 4.92 * userAge - 161
        );
      }
    }
    console.log("Минимальная калорийность (основной обмен): ");
    console.log(metabolism);
    return metabolism;
  }

  function activity() {
    activityBtns.forEach((btn, i) => {
      btn.addEventListener("click", () => {
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
    if (target == 1) {
      if (weightIndex >= 19 && weightIndex < 25) {
        caloriesDeficiteStart = Math.round(
          dailyCalories - (dailyCalories / 100) * 10
        );
        caloriesDeficiteEnd = Math.round(
          dailyCalories - (dailyCalories / 100) * 15
        );
        console.log("Кал. для похудения: ");
        console.log(caloriesDeficiteStart + " - " + caloriesDeficiteEnd);
      } else if (weightIndex >= 25 && weightIndex < 30) {
        caloriesDeficiteStart = Math.round(
          dailyCalories - (dailyCalories / 100) * 15
        );
        caloriesDeficiteEnd = Math.round(
          dailyCalories - (dailyCalories / 100) * 20
        );
        console.log("Кал. для похудения: ");
        console.log(caloriesDeficiteStart + " - " + caloriesDeficiteEnd);
      } else if (weightIndex >= 30) {
        caloriesDeficiteStart = Math.round(
          dailyCalories - (dailyCalories / 100) * 10
        );
        caloriesDeficiteEnd = Math.round(
          dailyCalories - (dailyCalories / 100) * 15
        );
        console.log("Кал. для похудения: ");
        console.log(caloriesDeficiteStart + " - " + caloriesDeficiteEnd);
      }
    } else if (target == 2) {
      caloriesDeficiteStart = dailyCalories + 100;
      caloriesDeficiteEnd = dailyCalories + 200;
      console.log("Кал. для набора веса: ");
      console.log(caloriesDeficiteStart + " - " + caloriesDeficiteEnd);
    }
  }

  function resultShow() {
    userB_M_IResult.innerHTML = weightIndex;
    userB_M_IMes.innerHTML = weightIndexMessage;

    if (target == 3) {
      userCaloriesResult.innerHTML = dailyCalories;
    } else {
      userCaloriesResult.innerHTML =
        caloriesDeficiteStart + " - " + caloriesDeficiteEnd;
    }
    userCaloriesMes.innerHTML = "Рекомендуемое суточное количество калорий";
  }

  calc.addEventListener("click", () => {
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
(function(){if("undefined"!==typeof window&&window.addEventListener){var e=Object.create(null),l,d=function(){clearTimeout(l);l=setTimeout(n,100)},m=function(){},t=function(){window.addEventListener("resize",d,!1);window.addEventListener("orientationchange",d,!1);if(window.MutationObserver){var k=new MutationObserver(d);k.observe(document.documentElement,{childList:!0,subtree:!0,attributes:!0});m=function(){try{k.disconnect(),window.removeEventListener("resize",d,!1),window.removeEventListener("orientationchange",
d,!1)}catch(v){}}}else document.documentElement.addEventListener("DOMSubtreeModified",d,!1),m=function(){document.documentElement.removeEventListener("DOMSubtreeModified",d,!1);window.removeEventListener("resize",d,!1);window.removeEventListener("orientationchange",d,!1)}},u=function(k){function e(a){if(void 0!==a.protocol)var c=a;else c=document.createElement("a"),c.href=a;return c.protocol.replace(/:/g,"")+c.host}if(window.XMLHttpRequest){var d=new XMLHttpRequest;var m=e(location);k=e(k);d=void 0===
d.withCredentials&&""!==k&&k!==m?XDomainRequest||void 0:XMLHttpRequest}return d};var n=function(){function d(){--q;0===q&&(m(),t())}function l(a){return function(){!0!==e[a.base]&&(a.useEl.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href","#"+a.hash),a.useEl.hasAttribute("href")&&a.useEl.setAttribute("href","#"+a.hash))}}function p(a){return function(){var c=document.body,b=document.createElement("x");a.onload=null;b.innerHTML=a.responseText;if(b=b.getElementsByTagName("svg")[0])b.setAttribute("aria-hidden",
"true"),b.style.position="absolute",b.style.width=0,b.style.height=0,b.style.overflow="hidden",c.insertBefore(b,c.firstChild);d()}}function n(a){return function(){a.onerror=null;a.ontimeout=null;d()}}var a,c,q=0;m();var f=document.getElementsByTagName("use");for(c=0;c<f.length;c+=1){try{var g=f[c].getBoundingClientRect()}catch(w){g=!1}var h=(a=f[c].getAttribute("href")||f[c].getAttributeNS("http://www.w3.org/1999/xlink","href")||f[c].getAttribute("xlink:href"))&&a.split?a.split("#"):["",""];var b=
h[0];h=h[1];var r=g&&0===g.left&&0===g.right&&0===g.top&&0===g.bottom;g&&0===g.width&&0===g.height&&!r?(f[c].hasAttribute("href")&&f[c].setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a),b.length&&(a=e[b],!0!==a&&setTimeout(l({useEl:f[c],base:b,hash:h}),0),void 0===a&&(h=u(b),void 0!==h&&(a=new h,e[b]=a,a.onload=p(a),a.onerror=n(a),a.ontimeout=n(a),a.open("GET",b),a.send(),q+=1)))):r?b.length&&e[b]&&setTimeout(l({useEl:f[c],base:b,hash:h}),0):void 0===e[b]?e[b]=!0:e[b].onload&&(e[b].abort(),
delete e[b].onload,e[b]=!0)}f="";q+=1;d()};var p=function(){window.removeEventListener("load",p,!1);l=setTimeout(n,0)};"complete"!==document.readyState?window.addEventListener("load",p,!1):p()}})();
