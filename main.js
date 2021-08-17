/*! modernizr 3.6.0 (Custom Build) | MIT */ !(function (e, t, n) {
  function o(e, t) {
    return typeof e === t;
  }
  function a(e) {
    var t = d.className,
      n = u._config.classPrefix || "";
    if ((f && (t = t.baseVal), u._config.enableJSClass)) {
      var o = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
      t = t.replace(o, "$1" + n + "js$2");
    }
    u._config.enableClasses &&
      ((t += " " + n + e.join(" " + n)),
      f ? (d.className.baseVal = t) : (d.className = t));
  }
  function i(e, t) {
    if ("object" == typeof e) for (var n in e) l(e, n) && i(n, e[n]);
    else {
      var o = (e = e.toLowerCase()).split("."),
        r = u[o[0]];
      if ((2 == o.length && (r = r[o[1]]), void 0 !== r)) return u;
      (t = "function" == typeof t ? t() : t),
        1 == o.length
          ? (u[o[0]] = t)
          : (!u[o[0]] ||
              u[o[0]] instanceof Boolean ||
              (u[o[0]] = new Boolean(u[o[0]])),
            (u[o[0]][o[1]] = t)),
        a([(t && 0 != t ? "" : "no-") + o.join("-")]),
        u._trigger(e, t);
    }
    return u;
  }
  var r = [],
    s = [],
    c = {
      _version: "3.6.0",
      _config: {
        classPrefix: "",
        enableClasses: !0,
        enableJSClass: !0,
        usePrefixes: !0,
      },
      _q: [],
      on: function (e, t) {
        var n = this;
        setTimeout(function () {
          t(n[e]);
        }, 0);
      },
      addTest: function (e, t, n) {
        s.push({ name: e, fn: t, options: n });
      },
      addAsyncTest: function (e) {
        s.push({ name: null, fn: e });
      },
    },
    u = function () {};
  (u.prototype = c), (u = new u());
  var l,
    d = t.documentElement,
    f = "svg" === d.nodeName.toLowerCase();
  !(function () {
    var e = {}.hasOwnProperty;
    l =
      o(e, "undefined") || o(e.call, "undefined")
        ? function (e, t) {
            return t in e && o(e.constructor.prototype[t], "undefined");
          }
        : function (t, n) {
            return e.call(t, n);
          };
  })(),
    (c._l = {}),
    (c.on = function (e, t) {
      this._l[e] || (this._l[e] = []),
        this._l[e].push(t),
        u.hasOwnProperty(e) &&
          setTimeout(function () {
            u._trigger(e, u[e]);
          }, 0);
    }),
    (c._trigger = function (e, t) {
      if (this._l[e]) {
        var n = this._l[e];
        setTimeout(function () {
          var e;
          for (e = 0; e < n.length; e++) (0, n[e])(t);
        }, 0),
          delete this._l[e];
      }
    }),
    u._q.push(function () {
      c.addTest = i;
    }),
    u.addAsyncTest(function () {
      function e(e, t, n) {
        function o(t) {
          var o = !(!t || "load" !== t.type) && 1 == a.width;
          i(e, "webp" === e && o ? new Boolean(o) : o), n && n(t);
        }
        var a = new Image();
        (a.onerror = o), (a.onload = o), (a.src = t);
      }
      var t = [
          {
            uri:
              "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",
            name: "webp",
          },
          {
            uri:
              "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",
            name: "webp.alpha",
          },
          {
            uri:
              "data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",
            name: "webp.animation",
          },
          {
            uri:
              "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",
            name: "webp.lossless",
          },
        ],
        n = t.shift();
      e(n.name, n.uri, function (n) {
        if (n && "load" === n.type)
          for (var o = 0; o < t.length; o++) e(t[o].name, t[o].uri);
      });
    }),
    u.addTest("canvas", function () {
      var e = (function () {
        return "function" != typeof t.createElement
          ? t.createElement(arguments[0])
          : f
          ? t.createElementNS.call(
              t,
              "http://www.w3.org/2000/svg",
              arguments[0]
            )
          : t.createElement.apply(t, arguments);
      })("canvas");
      return !(!e.getContext || !e.getContext("2d"));
    }),
    (function () {
      var e, t, n, a, i, c;
      for (var l in s)
        if (s.hasOwnProperty(l)) {
          if (
            ((e = []),
            (t = s[l]).name &&
              (e.push(t.name.toLowerCase()),
              t.options && t.options.aliases && t.options.aliases.length))
          )
            for (n = 0; n < t.options.aliases.length; n++)
              e.push(t.options.aliases[n].toLowerCase());
          for (
            a = o(t.fn, "function") ? t.fn() : t.fn, i = 0;
            i < e.length;
            i++
          )
            1 === (c = e[i].split(".")).length
              ? (u[c[0]] = a)
              : (!u[c[0]] ||
                  u[c[0]] instanceof Boolean ||
                  (u[c[0]] = new Boolean(u[c[0]])),
                (u[c[0]][c[1]] = a)),
              r.push((a ? "" : "no-") + c.join("-"));
        }
    })(),
    a(r),
    delete c.addTest,
    delete c.addAsyncTest;
  for (var p = 0; p < u._q.length; p++) u._q[p]();
  e.Modernizr = u;
})(window, document),
  (function (e, t) {
    "object" == typeof exports && "object" == typeof module
      ? (module.exports = t())
      : "function" == typeof define && define.amd
      ? define([], t)
      : "object" == typeof exports
      ? (exports.inView = t())
      : (e.inView = t());
  })(this, function () {
    return (function (e) {
      function t(o) {
        if (n[o]) return n[o].exports;
        var a = (n[o] = { exports: {}, id: o, loaded: !1 });
        return (
          e[o].call(a.exports, a, a.exports, t), (a.loaded = !0), a.exports
        );
      }
      var n = {};
      return (t.m = e), (t.c = n), (t.p = ""), t(0);
    })([
      function (e, t, n) {
        "use strict";
        var o = (function (e) {
          return e && e.__esModule ? e : { default: e };
        })(n(2));
        e.exports = o.default;
      },
      function (e, t) {
        e.exports = function (e) {
          var t = typeof e;
          return null != e && ("object" == t || "function" == t);
        };
      },
      function (e, t, n) {
        "use strict";
        function o(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var a = o(n(9)),
          i = o(n(3)),
          r = n(4);
        t.default = (function () {
          if ("undefined" != typeof window) {
            var e = { history: [] },
              t = { offset: {}, threshold: 0, test: r.inViewport },
              n = (0, a.default)(function () {
                e.history.forEach(function (t) {
                  e[t].check();
                });
              }, 100);
            ["scroll", "resize", "load"].forEach(function (e) {
              return addEventListener(e, n);
            }),
              window.MutationObserver &&
                addEventListener("DOMContentLoaded", function () {
                  new MutationObserver(n).observe(document.body, {
                    attributes: !0,
                    childList: !0,
                    subtree: !0,
                  });
                });
            var o = function (n) {
              if ("string" == typeof n) {
                var o = [].slice.call(document.querySelectorAll(n));
                return (
                  e.history.indexOf(n) > -1
                    ? (e[n].elements = o)
                    : ((e[n] = (0, i.default)(o, t)), e.history.push(n)),
                  e[n]
                );
              }
            };
            return (
              (o.offset = function (e) {
                if (void 0 === e) return t.offset;
                var n = function (e) {
                  return "number" == typeof e;
                };
                return (
                  ["top", "right", "bottom", "left"].forEach(
                    n(e)
                      ? function (n) {
                          return (t.offset[n] = e);
                        }
                      : function (o) {
                          return n(e[o]) ? (t.offset[o] = e[o]) : null;
                        }
                  ),
                  t.offset
                );
              }),
              (o.threshold = function (e) {
                return "number" == typeof e && e >= 0 && e <= 1
                  ? (t.threshold = e)
                  : t.threshold;
              }),
              (o.test = function (e) {
                return "function" == typeof e ? (t.test = e) : t.test;
              }),
              (o.is = function (e) {
                return t.test(e, t);
              }),
              o.offset(0),
              o
            );
          }
        })();
      },
      function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var o = t[n];
                (o.enumerable = o.enumerable || !1),
                  (o.configurable = !0),
                  "value" in o && (o.writable = !0),
                  Object.defineProperty(e, o.key, o);
              }
            }
            return function (t, n, o) {
              return n && e(t.prototype, n), o && e(t, o), t;
            };
          })(),
          o = (function () {
            function e(t, n) {
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
                (this.options = n),
                (this.elements = t),
                (this.current = []),
                (this.handlers = { enter: [], exit: [] }),
                (this.singles = { enter: [], exit: [] });
            }
            return (
              n(e, [
                {
                  key: "check",
                  value: function () {
                    var e = this;
                    return (
                      this.elements.forEach(function (t) {
                        var n = e.options.test(t, e.options),
                          o = e.current.indexOf(t),
                          a = o > -1,
                          i = !n && a;
                        n && !a && (e.current.push(t), e.emit("enter", t)),
                          i && (e.current.splice(o, 1), e.emit("exit", t));
                      }),
                      this
                    );
                  },
                },
                {
                  key: "on",
                  value: function (e, t) {
                    return this.handlers[e].push(t), this;
                  },
                },
                {
                  key: "once",
                  value: function (e, t) {
                    return this.singles[e].unshift(t), this;
                  },
                },
                {
                  key: "emit",
                  value: function (e, t) {
                    for (; this.singles[e].length; ) this.singles[e].pop()(t);
                    for (var n = this.handlers[e].length; --n > -1; )
                      this.handlers[e][n](t);
                    return this;
                  },
                },
              ]),
              e
            );
          })();
        t.default = function (e, t) {
          return new o(e, t);
        };
      },
      function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.inViewport = function (e, t) {
            var n = e.getBoundingClientRect(),
              o = n.top,
              a = n.right,
              i = n.bottom,
              r = n.left,
              s = n.width,
              c = n.height,
              u = i,
              l = window.innerWidth - r,
              d = window.innerHeight - o,
              f = a,
              p = t.threshold * s,
              w = t.threshold * c;
            return (
              u > t.offset.top + w &&
              l > t.offset.right + p &&
              d > t.offset.bottom + w &&
              f > t.offset.left + p
            );
          });
      },
      function (e, t) {
        (function (t) {
          var n = "object" == typeof t && t && t.Object === Object && t;
          e.exports = n;
        }.call(
          t,
          (function () {
            return this;
          })()
        ));
      },
      function (e, t, n) {
        var o = n(5),
          a = "object" == typeof self && self && self.Object === Object && self,
          i = o || a || Function("return this")();
        e.exports = i;
      },
      function (e, t, n) {
        var o = n(1),
          a = n(8),
          i = n(10),
          r = Math.max,
          s = Math.min;
        e.exports = function (e, t, n) {
          function c(t) {
            var n = w,
              o = m;
            return (w = m = void 0), (y = t), (A = e.apply(o, n));
          }
          function u(e) {
            return (y = e), (g = setTimeout(d, t)), b ? c(e) : A;
          }
          function l(e) {
            var n = e - v;
            return void 0 === v || n >= t || n < 0 || (x && e - y >= h);
          }
          function d() {
            var e = a();
            return l(e)
              ? f(e)
              : void (g = setTimeout(
                  d,
                  (function (e) {
                    var n = t - (e - v);
                    return x ? s(n, h - (e - y)) : n;
                  })(e)
                ));
          }
          function f(e) {
            return (g = void 0), T && w ? c(e) : ((w = m = void 0), A);
          }
          function p() {
            var e = a(),
              n = l(e);
            if (((w = arguments), (m = this), (v = e), n)) {
              if (void 0 === g) return u(v);
              if (x) return (g = setTimeout(d, t)), c(v);
            }
            return void 0 === g && (g = setTimeout(d, t)), A;
          }
          var w,
            m,
            h,
            A,
            g,
            v,
            y = 0,
            b = !1,
            x = !1,
            T = !0;
          if ("function" != typeof e)
            throw new TypeError("Expected a function");
          return (
            (t = i(t) || 0),
            o(n) &&
              ((b = !!n.leading),
              (h = (x = "maxWait" in n) ? r(i(n.maxWait) || 0, t) : h),
              (T = "trailing" in n ? !!n.trailing : T)),
            (p.cancel = function () {
              void 0 !== g && clearTimeout(g),
                (y = 0),
                (w = v = m = g = void 0);
            }),
            (p.flush = function () {
              return void 0 === g ? A : f(a());
            }),
            p
          );
        };
      },
      function (e, t, n) {
        var o = n(6);
        e.exports = function () {
          return o.Date.now();
        };
      },
      function (e, t, n) {
        var o = n(7),
          a = n(1);
        e.exports = function (e, t, n) {
          var i = !0,
            r = !0;
          if ("function" != typeof e)
            throw new TypeError("Expected a function");
          return (
            a(n) &&
              ((i = "leading" in n ? !!n.leading : i),
              (r = "trailing" in n ? !!n.trailing : r)),
            o(e, t, { leading: i, maxWait: t, trailing: r })
          );
        };
      },
      function (e, t) {
        e.exports = function (e) {
          return e;
        };
      },
    ]);
  });
var currentPage = document.querySelector("#a-main-content").dataset.currentPage,
  primColorData = document.querySelector("body").dataset.primColor,
  mouseX = 0,
  mouseY = 0,
  posX = 0,
  posY = 0,
  links = document.querySelectorAll("a"),
  hpProjectItems = document.querySelectorAll("div.b-project-item"),
  cursor = document.querySelector(".a-cursor"),
  active = "active",
  inactive = "inactive",
  disableMouseVar = 0,
  centerVer = window.innerHeight / 2;
$(window).resize(function () {
  (centerVer = window.innerHeight / 2), projectTitleCenter();
});
var isMobile = !1;
function showError() {}
function patchInitialized() {}
function patchFinishedLoading() {
  CABLES.patch.setVarValue("startAnim", "1");
}
(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
  navigator.userAgent
) ||
  /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
    navigator.userAgent.substr(0, 4)
  )) &&
  ((isMobile = !0), (disableMouseVar = 1));
var canvasPatch1 = 0;
if (
  (document.addEventListener("DOMContentLoaded", function (e) {
    CABLES.patch = new CABLES.Patch({
      patch: CABLES.exportedPatch,
      prefixAssetPath: "/",
      glCanvasId: "glcanvas",
      glCanvasResizeToWindow: !0,
      onError: showError,
      onPatchLoaded: patchInitialized,
      onFinishedLoading: patchFinishedLoading,
      canvas: { alpha: !0, premultipliedAlpha: !0 },
      variables: {
        varSetTransColor: primColorData,
        disableMouse: disableMouseVar,
      },
    });
  }),
  !isMobile)
) {
  var follower = $(".a-cursor"),
    hpProjectBg = $(".a-project-bg");
  (posX = 0),
    (posY = 0),
    (mouseX = 0),
    (mouseY = 0),
    TweenMax.to({}, 0.005, {
      repeat: -1,
      onRepeat: function () {
        (posX += (mouseX - posX) / 5),
          (posY += (mouseY - posY) / 5),
          TweenMax.set(follower, { css: { left: posX - 40, top: posY - 40 } }),
          TweenMax.set(hpProjectBg, {
            css: {
              left: posX - window.innerWidth / 2,
              top: posY - window.innerHeight / 2,
            },
          });
      },
    });
}
function disableMouseAnimation() {
  $(".a-cursor").hasClass("active")
    ? ($(".a-cursor").addClass("inactive"),
      $(".a-cursor").removeClass("active"))
    : ($(".a-cursor").addClass("active"),
      $(".a-cursor").removeClass("inactive"));
}
function projectVisualShow(e) {
  var t = e.dataset.content,
    n = $(e).find("a");
  TweenMax.to(e, 0.5, { opacity: 1, ease: Power4.easeOut }),
    TweenMax.to(n, 0.5, {
      color: "rgba(251, 203, 188, 1)",
      ease: Power4.easeOut,
    }),
    TweenMax.to('*[data-projecttitle="' + t + '"] .d-anim', 1, {
      scale: 1,
      ease: Power4.easeOut,
    }),
    TweenMax.to('*[data-projecttitle="' + t + '"] .d-img-container', 0.7, {
      scale: 1,
      opacity: 1,
      ease: Power4.easeOut,
    }),
    TweenMax.to('*[data-projecttitle="GROVE LUST"] .d-anim', 1, {
      scale: 3,
      ease: Power4.easeOut,
    }),
    TweenMax.to('*[data-projecttitle="GROVE LUST"] .d-img-container', 0.5, {
      scale: 0.5,
      opacity: 0,
      ease: Power4.easeOut,
    });
}
function projectVisualHide(e) {
  var t = e.dataset.content,
    n = $(e).find("a");
  TweenMax.to(e, 0.5, { opacity: 0.5, ease: Power4.easeOut }),
    TweenMax.to(n, 0.5, {
      color: "rgba(251, 203, 188, 0)",
      ease: Power4.easeOut,
    }),
    TweenMax.to('*[data-projecttitle="' + t + '"] .d-anim', 1, {
      scale: 3,
      ease: Power4.easeOut,
    }),
    TweenMax.to('*[data-projecttitle="' + t + '"] .d-img-container', 0.5, {
      scale: 0.5,
      opacity: 0,
      ease: Power4.easeOut,
    }),
    TweenMax.to('*[data-projecttitle="GROVE LUST"] .d-anim', 1, {
      scale: 1,
      ease: Power4.easeOut,
    }),
    TweenMax.to('*[data-projecttitle="GROVE LUST"] .d-img-container', 0.7, {
      scale: 1,
      opacity: 1,
      ease: Power4.easeOut,
    });
}
function projectTitleCenter() {
  inView.offset(centerVer),
    inView("div.b-project-item")
      .on("enter", function (e) {
        projectVisualShow(e);
      })
      .on("exit", e => {
        projectVisualHide(e);
      });
}
$(document).on("mousemove", function (e) {
  (mouseX = e.clientX), (mouseY = e.clientY);
}),
  links.forEach(e => e.addEventListener("mouseover", disableMouseAnimation)),
  links.forEach(e => e.addEventListener("mouseleave", disableMouseAnimation)),
  TweenMax.set(".a-project-bg .d-img-container", { opacity: 0, scale: 0.5 }),
  TweenMax.set(".a-project-bg .d-anim", { scale: 3 }),
  TweenMax.set(
    ".a-project-bg *[data-projecttitle='GROVE LUST'] .d-img-container",
    { opacity: 1, scale: 1 }
  ),
  TweenMax.set(".a-project-bg *[data-projecttitle='GROVE LUST'] .d-anim", {
    scale: 1,
  }),
  ("HP" != currentPage && "CA" != currentPage) || projectTitleCenter(),
  $(document).ready(function () {
    var e = 0;
    document.querySelector("#a-main-content").addEventListener(
      "scroll",
      function () {
        var t = document.querySelector("#a-main-content").scrollTop;
        t > e
          ? (TweenMax.to(
              [".a-menu .work h3", ".a-menu .workflow h3"],
              1,
              { opacity: 0, y: -20, ease: Power4.easeOut },
              0
            ),
            TweenMax.to(
              [".a-menu .work p", ".a-menu .workflow p", ".a-menu .contact p"],
              1,
              { delay: 0.1, opacity: 0, y: -20, ease: Power4.easeOut },
              0
            ))
          : t < e &&
            (TweenMax.to(
              ".a-menu .menu-item h3",
              1,
              { delay: 0.1, opacity: 1, y: 0, ease: Power4.easeOut },
              0
            ),
            TweenMax.to(
              ".a-menu .menu-item p",
              1,
              { opacity: 0.5, y: 0, ease: Power4.easeOut },
              0
            )),
          (e = t <= 0 ? 0 : t);
      },
      !1
    ),
      TweenMax.staggerFrom(
        ".a-menu .menu-item",
        1,
        { delay: 0.5, y: 10, opacity: 0, ease: Power4.easeOut },
        0.1
      ),
      TweenMax.set([".project-stagger-title-2", ".project-stagger-title-1"], {
        opacity: 0,
        y: 80,
      }),
      TweenMax.staggerTo(
        [".project-stagger-title-1", ".project-stagger-title-2"],
        1,
        { delay: 1, y: 0, opacity: 1, ease: Power4.easeOut }
      ),
      TweenMax.to(".a-border-wrapper", 1, {
        delay: 0.5,
        opacity: 1,
        ease: Power4.easeOut,
      }),
      TweenMax.to(".a-logo svg", 1, {
        delay: 1,
        opacity: 1,
        ease: Power4.easeOut,
      }),
      TweenMax.to(".a-social", 1, {
        delay: 1.2,
        opacity: 1,
        ease: Power4.easeOut,
      }),
      TweenMax.to(".d-anim-hero", 4, {
        scale: 1,
        opacity: 1,
        ease: Power4.easeOut,
      }),
      TweenMax.to("#a-hero .b-arrow", 1, {
        delay: 1.3,
        opacity: 1,
        y: 0,
        ease: Power4.easeOut,
      }),
      "HP" != currentPage &&
        "CA" != currentPage &&
        inView(".d-img-container").on("enter", function (e) {
          TweenMax.to($(e), 1, { scale: 1, ease: Power4.easeOut }),
            TweenMax.to($(e).find(".d-anim"), 1.5, {
              scale: 1,
              ease: Power4.easeOut,
            });
        }),
      inView(".b-visual-bg-container").on("enter", function (e) {
        TweenMax.to($(e).find(".d-anim"), 3, {
          scale: 1,
          ease: Power4.easeOut,
        });
      }),
      TweenMax.set(
        [".title-fade", ".title-fade-delay", ".text-fade", ".text-fade-half"],
        { opacity: 0, y: 50 }
      ),
      inView(".title-fade").on("enter", function (e) {
        TweenMax.to($(e), 2, { opacity: 1, y: 0, ease: Power4.easeOut });
      }),
      inView(".title-fade-delay").on("enter", function (e) {
        TweenMax.to($(e), 2, {
          delay: 0.2,
          opacity: 1,
          y: 0,
          ease: Power4.easeOut,
        });
      }),
      inView(".text-fade-half").on("enter", function (e) {
        TweenMax.to($(e), 2, {
          delay: 0.1,
          opacity: 0.5,
          y: 0,
          ease: Power4.easeOut,
        }),
          $(this).unbind("inview");
      }),
      inView(".text-fade").on("enter", function (e) {
        TweenMax.to($(e), 2, {
          delay: 0.1,
          opacity: 1,
          y: 0,
          ease: Power4.easeOut,
        });
      });
  }),
  inView("#a-next-project").on("enter", function (e) {
    TweenMax.to("#a-next-project .project-stagger-title-3", 1, {
      delay: 0.1,
      y: "-50%",
      x: "-50%",
      ease: Power4.easeOut,
    }),
      TweenMax.to("#a-next-project p", 1, {
        opacity: 1,
        y: 0,
        ease: Power4.easeOut,
      });
  }),
  inView(".b-canvas")
    .on("enter", function () {
      CABLES.patch.resume();
    })
    .on("exit", function () {
      CABLES.patch.pause();
    }),
  inView(".video")
    .on("enter", function (e) {
      e.play();
    })
    .on("exit", e => {
      e.pause();
    });
