!(function () {
  "use strict";
  function n(a, t) {
    var e,
      n = Object.keys(a);
    return (
      Object.getOwnPropertySymbols &&
        ((e = Object.getOwnPropertySymbols(a)),
        t &&
          (e = e.filter(function (t) {
            return Object.getOwnPropertyDescriptor(a, t).enumerable;
          })),
        n.push.apply(n, e)),
      n
    );
  }
  function k(a) {
    for (var t = 1; t < arguments.length; t++) {
      var e = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? n(Object(e), !0).forEach(function (t) {
            u(a, t, e[t]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(e))
        : n(Object(e)).forEach(function (t) {
            Object.defineProperty(a, t, Object.getOwnPropertyDescriptor(e, t));
          });
    }
    return a;
  }
  function r(t) {
    return (r =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              "function" == typeof Symbol &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          })(t);
  }
  function t() {
    t = function (t, a) {
      return new n(t, void 0, a);
    };
    var r = RegExp.prototype,
      i = new WeakMap();
    function n(t, a, e) {
      a = new RegExp(t, a);
      return i.set(a, e || i.get(t)), c(a, n.prototype);
    }
    function o(e, t) {
      var n = i.get(t);
      return Object.keys(n).reduce(function (t, a) {
        return (t[a] = e[n[a]]), t;
      }, Object.create(null));
    }
    return (
      (function (t, a) {
        if ("function" != typeof a && null !== a)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (t.prototype = Object.create(a && a.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          a && c(t, a);
      })(n, RegExp),
      (n.prototype.exec = function (t) {
        t = r.exec.call(this, t);
        return t && (t.groups = o(t, this)), t;
      }),
      (n.prototype[Symbol.replace] = function (t, a) {
        if ("string" == typeof a) {
          var e = i.get(this);
          return r[Symbol.replace].call(
            this,
            t,
            a.replace(/\$<([^>]+)>/g, function (t, a) {
              return "$" + e[a];
            })
          );
        }
        if ("function" != typeof a) return r[Symbol.replace].call(this, t, a);
        var n = this;
        return r[Symbol.replace].call(this, t, function () {
          var t = arguments;
          return (
            "object" != typeof t[t.length - 1] &&
              (t = [].slice.call(t)).push(o(t, n)),
            a.apply(this, t)
          );
        });
      }),
      t.apply(this, arguments)
    );
  }
  function i(t, a) {
    for (var e = 0; e < a.length; e++) {
      var n = a[e];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(t, n.key, n);
    }
  }
  function u(t, a, e) {
    return (
      a in t
        ? Object.defineProperty(t, a, {
            value: e,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (t[a] = e),
      t
    );
  }
  function c(t, a) {
    return (c =
      Object.setPrototypeOf ||
      function (t, a) {
        return (t.__proto__ = a), t;
      })(t, a);
  }
  function m(t, a) {
    return (
      (function (t) {
        if (Array.isArray(t)) return t;
      })(t) ||
      (function (t, a) {
        var e =
          null == t
            ? null
            : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
              t["@@iterator"];
        if (null != e) {
          var n,
            r,
            i = [],
            o = !0,
            c = !1;
          try {
            for (
              e = e.call(t);
              !(o = (n = e.next()).done) &&
              (i.push(n.value), !a || i.length !== a);
              o = !0
            );
          } catch (t) {
            (c = !0), (r = t);
          } finally {
            try {
              o || null == e.return || e.return();
            } finally {
              if (c) throw r;
            }
          }
          return i;
        }
      })(t, a) ||
      e(t, a) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function l(t) {
    return (
      (function (t) {
        if (Array.isArray(t)) return o(t);
      })(t) ||
      (function (t) {
        if (
          ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
          null != t["@@iterator"]
        )
          return Array.from(t);
      })(t) ||
      e(t) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function e(t, a) {
    if (t) {
      if ("string" == typeof t) return o(t, a);
      var e = Object.prototype.toString.call(t).slice(8, -1);
      return "Map" ===
        (e = "Object" === e && t.constructor ? t.constructor.name : e) ||
        "Set" === e
        ? Array.from(t)
        : "Arguments" === e ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
        ? o(t, a)
        : void 0;
    }
  }
  function o(t, a) {
    (null == a || a > t.length) && (a = t.length);
    for (var e = 0, n = new Array(a); e < a; e++) n[e] = t[e];
    return n;
  }
  function a() {}
  var s = {},
    f = {},
    d = null,
    p = { mark: a, measure: a };
  try {
    "undefined" != typeof window && (s = window),
      "undefined" != typeof document && (f = document),
      "undefined" != typeof MutationObserver && (d = MutationObserver),
      "undefined" != typeof performance && (p = performance);
  } catch (t) {}
  var v = (s.navigator || {}).userAgent,
    v = void 0 === v ? "" : v,
    g = s,
    b = f,
    h = d,
    f = p,
    y = !!g.document,
    w =
      !!b.documentElement &&
      !!b.head &&
      "function" == typeof b.addEventListener &&
      "function" == typeof b.createElement,
    x = ~v.indexOf("MSIE") || ~v.indexOf("Trident/"),
    d = "___FONT_AWESOME___",
    A = 16,
    S = "svg-inline--fa",
    O = "data-fa-i2svg",
    N = "data-fa-pseudo-element",
    C = "data-fa-pseudo-element-pending",
    P = "data-prefix",
    j = "data-icon",
    E = "fontawesome-i2svg",
    z = "async",
    M = ["HTML", "HEAD", "STYLE", "SCRIPT"],
    R = (function () {
      try {
        return !0;
      } catch (t) {
        return !1;
      }
    })(),
    I = {
      fas: "solid",
      "fa-solid": "solid",
      far: "regular",
      "fa-regular": "regular",
      fal: "light",
      "fa-light": "light",
      fat: "thin",
      "fa-thin": "thin",
      fad: "duotone",
      "fa-duotone": "duotone",
      fab: "brands",
      "fa-brands": "brands",
      fak: "kit",
      "fa-kit": "kit",
      fa: "solid",
    },
    L = {
      solid: "fas",
      regular: "far",
      light: "fal",
      thin: "fat",
      duotone: "fad",
      brands: "fab",
      kit: "fak",
    },
    F = {
      fab: "fa-brands",
      fad: "fa-duotone",
      fak: "fa-kit",
      fal: "fa-light",
      far: "fa-regular",
      fas: "fa-solid",
      fat: "fa-thin",
    },
    Y = {
      "fa-brands": "fab",
      "fa-duotone": "fad",
      "fa-kit": "fak",
      "fa-light": "fal",
      "fa-regular": "far",
      "fa-solid": "fas",
      "fa-thin": "fat",
    },
    T = /fa[srltdbk\-\ ]/,
    D = "fa-layers-text",
    U =
      /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,
    H = { 900: "fas", 400: "far", normal: "far", 300: "fal", 100: "fat" },
    p = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    v = p.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
    _ = [
      "class",
      "data-prefix",
      "data-icon",
      "data-fa-transform",
      "data-fa-mask",
    ],
    W = {
      GROUP: "duotone-group",
      SWAP_OPACITY: "swap-opacity",
      PRIMARY: "primary",
      SECONDARY: "secondary",
    },
    V = []
      .concat(l(Object.keys(L)), [
        "2xs",
        "xs",
        "sm",
        "lg",
        "xl",
        "2xl",
        "beat",
        "border",
        "fade",
        "beat-fade",
        "bounce",
        "flip-both",
        "flip-horizontal",
        "flip-vertical",
        "flip",
        "fw",
        "inverse",
        "layers-counter",
        "layers-text",
        "layers",
        "li",
        "pull-left",
        "pull-right",
        "pulse",
        "rotate-180",
        "rotate-270",
        "rotate-90",
        "rotate-by",
        "shake",
        "spin-pulse",
        "spin-reverse",
        "spin",
        "stack-1x",
        "stack-2x",
        "stack",
        "ul",
        W.GROUP,
        W.SWAP_OPACITY,
        W.PRIMARY,
        W.SECONDARY,
      ])
      .concat(
        p.map(function (t) {
          return "".concat(t, "x");
        })
      )
      .concat(
        v.map(function (t) {
          return "w-".concat(t);
        })
      ),
    B = g.FontAwesomeConfig || {};
  b &&
    "function" == typeof b.querySelector &&
    ((K = [
      ["data-family-prefix", "familyPrefix"],
      ["data-style-default", "styleDefault"],
      ["data-replacement-class", "replacementClass"],
      ["data-auto-replace-svg", "autoReplaceSvg"],
      ["data-auto-add-css", "autoAddCss"],
      ["data-auto-a11y", "autoA11y"],
      ["data-search-pseudo-elements", "searchPseudoElements"],
      ["data-observe-mutations", "observeMutations"],
      ["data-mutate-approach", "mutateApproach"],
      ["data-keep-original-source", "keepOriginalSource"],
      ["data-measure-performance", "measurePerformance"],
      ["data-show-missing-icons", "showMissingIcons"],
    ]).push(
      ["data-auto-fetch-svg", "autoFetchSvg"],
      ["data-fetch-svg-from", "fetchSvgFrom"],
      ["data-fetch-uploaded-svg-from", "fetchUploadedSvgFrom"]
    ),
    K.forEach(function (t) {
      var a = m(t, 2),
        t = a[0],
        a = a[1],
        t =
          "" ===
            (t = (function (t) {
              var a = b.querySelector("script[" + t + "]");
              if (a) return a.getAttribute(t);
            })(t)) ||
          ("false" !== t && ("true" === t || t));
      null != t && (B[a] = t);
    }));
  var v = {
      familyPrefix: "fa",
      styleDefault: "solid",
      replacementClass: S,
      autoReplaceSvg: !0,
      autoAddCss: !0,
      autoA11y: !0,
      searchPseudoElements: !1,
      observeMutations: !0,
      mutateApproach: "async",
      keepOriginalSource: !0,
      measurePerformance: !1,
      showMissingIcons: !0,
      autoFetchSvg: !1,
      fetchSvgFrom: null,
      fetchUploadedSvgFrom: null,
    },
    G = k(k({}, v), B);
  G.autoReplaceSvg || (G.observeMutations = !1);
  var K = /\/js\/.*\.js.*/,
    v =
      'Manually set config.fetchSvgFrom = "URL" or use <script data-fetch-svg-from="URL" ...> to explicitly configure.';
  G.autoFetchSvg &&
    !G.fetchSvgFrom &&
    b &&
    b.currentScript &&
    -1 < (st = b.currentScript.getAttribute("src")).search(K) &&
    (R ||
      console.info(
        "Font Awesome SVG Auto-fetching URL has been determined using document.currentScript. This features is not supported in any version of Internet Explorer. ".concat(
          v
        )
      ),
    (G.fetchSvgFrom = st.replace(K, "/svgs"))),
    G.fetchSvgFrom &&
      (((La = b.createElement("a")).href = G.fetchSvgFrom),
      (G.fetchSvgFrom = La.href)),
    !G.autoFetchSvg ||
      G.fetchSvgFrom ||
      R ||
      (console.error(
        "Disabling Font Awesome auto-fetching of SVG icons (it was enabled) because we could not guess the correct URL to load them from. ".concat(
          v
        )
      ),
      (G.autoFetchSvg = !1));
  var X = {};
  Object.keys(G).forEach(function (a) {
    Object.defineProperty(X, a, {
      enumerable: !0,
      set: function (t) {
        (G[a] = t),
          q.forEach(function (t) {
            return t(X);
          });
      },
      get: function () {
        return G[a];
      },
    });
  }),
    (g.FontAwesomeConfig = X);
  var q = [];
  var $ = A,
    J = { size: 16, x: 0, y: 0, rotate: 0, flipX: !1, flipY: !1 };
  var Q = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  function Z() {
    for (var t = 12, a = ""; 0 < t--; ) a += Q[(62 * Math.random()) | 0];
    return a;
  }
  function tt(t) {
    for (var a = [], e = (t || []).length >>> 0; e--; ) a[e] = t[e];
    return a;
  }
  function at(t) {
    return t.classList
      ? tt(t.classList)
      : (t.getAttribute("class") || "").split(" ").filter(function (t) {
          return t;
        });
  }
  function et(t) {
    return ""
      .concat(t)
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }
  function nt(e) {
    return Object.keys(e || {}).reduce(function (t, a) {
      return t + "".concat(a, ": ").concat(e[a].trim(), ";");
    }, "");
  }
  function rt(t) {
    return (
      t.size !== J.size ||
      t.x !== J.x ||
      t.y !== J.y ||
      t.rotate !== J.rotate ||
      t.flipX ||
      t.flipY
    );
  }
  function it() {
    var t,
      a,
      e = S,
      n = X.familyPrefix,
      r = X.replacementClass,
      i =
        ':host,:root{--fa-font-solid:normal 900 1em/1 "Font Awesome 6 Solid";--fa-font-regular:normal 400 1em/1 "Font Awesome 6 Regular";--fa-font-light:normal 300 1em/1 "Font Awesome 6 Light";--fa-font-thin:normal 100 1em/1 "Font Awesome 6 Thin";--fa-font-duotone:normal 900 1em/1 "Font Awesome 6 Duotone";--fa-font-brands:normal 400 1em/1 "Font Awesome 6 Brands"}svg:not(:host).svg-inline--fa,svg:not(:root).svg-inline--fa{overflow:visible;box-sizing:content-box}.svg-inline--fa{display:var(--fa-display,inline-block);height:1em;overflow:visible;vertical-align:-.125em}.svg-inline--fa.fa-2xs{vertical-align:.1em}.svg-inline--fa.fa-xs{vertical-align:0}.svg-inline--fa.fa-sm{vertical-align:-.0714285705em}.svg-inline--fa.fa-lg{vertical-align:-.2em}.svg-inline--fa.fa-xl{vertical-align:-.25em}.svg-inline--fa.fa-2xl{vertical-align:-.3125em}.svg-inline--fa.fa-pull-left{margin-right:var(--fa-pull-margin,.3em);width:auto}.svg-inline--fa.fa-pull-right{margin-left:var(--fa-pull-margin,.3em);width:auto}.svg-inline--fa.fa-li{width:var(--fa-li-width,2em);top:.25em}.svg-inline--fa.fa-fw{width:var(--fa-fw-width,1.25em)}.fa-layers svg.svg-inline--fa{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.fa-layers-counter,.fa-layers-text{display:inline-block;position:absolute;text-align:center}.fa-layers{display:inline-block;height:1em;position:relative;text-align:center;vertical-align:-.125em;width:1em}.fa-layers svg.svg-inline--fa{-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-text{left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter{background-color:var(--fa-counter-background-color,#ff253a);border-radius:var(--fa-counter-border-radius,1em);box-sizing:border-box;color:var(--fa-inverse,#fff);line-height:var(--fa-counter-line-height,1);max-width:var(--fa-counter-max-width,5em);min-width:var(--fa-counter-min-width,1.5em);overflow:hidden;padding:var(--fa-counter-padding,.25em .5em);right:var(--fa-right,0);text-overflow:ellipsis;top:var(--fa-top,0);-webkit-transform:scale(var(--fa-counter-scale,.25));transform:scale(var(--fa-counter-scale,.25));-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-bottom-right{bottom:var(--fa-bottom,0);right:var(--fa-right,0);top:auto;-webkit-transform:scale(var(--fa-layers-scale,.25));transform:scale(var(--fa-layers-scale,.25));-webkit-transform-origin:bottom right;transform-origin:bottom right}.fa-layers-bottom-left{bottom:var(--fa-bottom,0);left:var(--fa-left,0);right:auto;top:auto;-webkit-transform:scale(var(--fa-layers-scale,.25));transform:scale(var(--fa-layers-scale,.25));-webkit-transform-origin:bottom left;transform-origin:bottom left}.fa-layers-top-right{top:var(--fa-top,0);right:var(--fa-right,0);-webkit-transform:scale(var(--fa-layers-scale,.25));transform:scale(var(--fa-layers-scale,.25));-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-top-left{left:var(--fa-left,0);right:auto;top:var(--fa-top,0);-webkit-transform:scale(var(--fa-layers-scale,.25));transform:scale(var(--fa-layers-scale,.25));-webkit-transform-origin:top left;transform-origin:top left}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-2xs{font-size:.625em;line-height:.1em;vertical-align:.225em}.fa-xs{font-size:.75em;line-height:.0833333337em;vertical-align:.125em}.fa-sm{font-size:.875em;line-height:.0714285718em;vertical-align:.0535714295em}.fa-lg{font-size:1.25em;line-height:.05em;vertical-align:-.075em}.fa-xl{font-size:1.5em;line-height:.0416666682em;vertical-align:-.125em}.fa-2xl{font-size:2em;line-height:.03125em;vertical-align:-.1875em}.fa-fw{text-align:center;width:1.25em}.fa-ul{list-style-type:none;margin-left:var(--fa-li-margin,2.5em);padding-left:0}.fa-ul>li{position:relative}.fa-li{left:calc(var(--fa-li-width,2em) * -1);position:absolute;text-align:center;width:var(--fa-li-width,2em);line-height:inherit}.fa-border{border-color:var(--fa-border-color,#eee);border-radius:var(--fa-border-radius,.1em);border-style:var(--fa-border-style,solid);border-width:var(--fa-border-width,.08em);padding:var(--fa-border-padding,.2em .25em .15em)}.fa-pull-left{float:left;margin-right:var(--fa-pull-margin,.3em)}.fa-pull-right{float:right;margin-left:var(--fa-pull-margin,.3em)}.fa-beat{-webkit-animation-name:fa-beat;animation-name:fa-beat;-webkit-animation-delay:var(--fa-animation-delay,0);animation-delay:var(--fa-animation-delay,0);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,ease-in-out);animation-timing-function:var(--fa-animation-timing,ease-in-out)}.fa-bounce{-webkit-animation-name:fa-bounce;animation-name:fa-bounce;-webkit-animation-delay:var(--fa-animation-delay,0);animation-delay:var(--fa-animation-delay,0);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,cubic-bezier(.28,.84,.42,1));animation-timing-function:var(--fa-animation-timing,cubic-bezier(.28,.84,.42,1))}.fa-fade{-webkit-animation-name:fa-fade;animation-name:fa-fade;-webkit-animation-delay:var(--fa-animation-delay,0);animation-delay:var(--fa-animation-delay,0);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1));animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1))}.fa-beat-fade{-webkit-animation-name:fa-beat-fade;animation-name:fa-beat-fade;-webkit-animation-delay:var(--fa-animation-delay,0);animation-delay:var(--fa-animation-delay,0);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1));animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1))}.fa-flip{-webkit-animation-name:fa-flip;animation-name:fa-flip;-webkit-animation-delay:var(--fa-animation-delay,0);animation-delay:var(--fa-animation-delay,0);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,ease-in-out);animation-timing-function:var(--fa-animation-timing,ease-in-out)}.fa-shake{-webkit-animation-name:fa-shake;animation-name:fa-shake;-webkit-animation-delay:var(--fa-animation-delay,0);animation-delay:var(--fa-animation-delay,0);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,linear);animation-timing-function:var(--fa-animation-timing,linear)}.fa-spin{-webkit-animation-name:fa-spin;animation-name:fa-spin;-webkit-animation-delay:var(--fa-animation-delay,0);animation-delay:var(--fa-animation-delay,0);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,2s);animation-duration:var(--fa-animation-duration,2s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,linear);animation-timing-function:var(--fa-animation-timing,linear)}.fa-spin-reverse{--fa-animation-direction:reverse}.fa-pulse,.fa-spin-pulse{-webkit-animation-name:fa-spin;animation-name:fa-spin;-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,steps(8));animation-timing-function:var(--fa-animation-timing,steps(8))}@media (prefers-reduced-motion:reduce){.fa-beat,.fa-beat-fade,.fa-bounce,.fa-fade,.fa-flip,.fa-pulse,.fa-shake,.fa-spin,.fa-spin-pulse{-webkit-animation-delay:-1ms;animation-delay:-1ms;-webkit-animation-duration:1ms;animation-duration:1ms;-webkit-animation-iteration-count:1;animation-iteration-count:1;transition-delay:0s;transition-duration:0s}}@-webkit-keyframes fa-beat{0%,90%{-webkit-transform:scale(1);transform:scale(1)}45%{-webkit-transform:scale(var(--fa-beat-scale,1.25));transform:scale(var(--fa-beat-scale,1.25))}}@keyframes fa-beat{0%,90%{-webkit-transform:scale(1);transform:scale(1)}45%{-webkit-transform:scale(var(--fa-beat-scale,1.25));transform:scale(var(--fa-beat-scale,1.25))}}@-webkit-keyframes fa-bounce{0%{-webkit-transform:scale(1,1) translateY(0);transform:scale(1,1) translateY(0)}10%{-webkit-transform:scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0);transform:scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0)}30%{-webkit-transform:scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em));transform:scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em))}50%{-webkit-transform:scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0);transform:scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0)}57%{-webkit-transform:scale(1,1) translateY(var(--fa-bounce-rebound,-.125em));transform:scale(1,1) translateY(var(--fa-bounce-rebound,-.125em))}64%{-webkit-transform:scale(1,1) translateY(0);transform:scale(1,1) translateY(0)}100%{-webkit-transform:scale(1,1) translateY(0);transform:scale(1,1) translateY(0)}}@keyframes fa-bounce{0%{-webkit-transform:scale(1,1) translateY(0);transform:scale(1,1) translateY(0)}10%{-webkit-transform:scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0);transform:scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0)}30%{-webkit-transform:scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em));transform:scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em))}50%{-webkit-transform:scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0);transform:scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0)}57%{-webkit-transform:scale(1,1) translateY(var(--fa-bounce-rebound,-.125em));transform:scale(1,1) translateY(var(--fa-bounce-rebound,-.125em))}64%{-webkit-transform:scale(1,1) translateY(0);transform:scale(1,1) translateY(0)}100%{-webkit-transform:scale(1,1) translateY(0);transform:scale(1,1) translateY(0)}}@-webkit-keyframes fa-fade{50%{opacity:var(--fa-fade-opacity,.4)}}@keyframes fa-fade{50%{opacity:var(--fa-fade-opacity,.4)}}@-webkit-keyframes fa-beat-fade{0%,100%{opacity:var(--fa-beat-fade-opacity,.4);-webkit-transform:scale(1);transform:scale(1)}50%{opacity:1;-webkit-transform:scale(var(--fa-beat-fade-scale,1.125));transform:scale(var(--fa-beat-fade-scale,1.125))}}@keyframes fa-beat-fade{0%,100%{opacity:var(--fa-beat-fade-opacity,.4);-webkit-transform:scale(1);transform:scale(1)}50%{opacity:1;-webkit-transform:scale(var(--fa-beat-fade-scale,1.125));transform:scale(var(--fa-beat-fade-scale,1.125))}}@-webkit-keyframes fa-flip{50%{-webkit-transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg));transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg))}}@keyframes fa-flip{50%{-webkit-transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg));transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg))}}@-webkit-keyframes fa-shake{0%{-webkit-transform:rotate(-15deg);transform:rotate(-15deg)}4%{-webkit-transform:rotate(15deg);transform:rotate(15deg)}24%,8%{-webkit-transform:rotate(-18deg);transform:rotate(-18deg)}12%,28%{-webkit-transform:rotate(18deg);transform:rotate(18deg)}16%{-webkit-transform:rotate(-22deg);transform:rotate(-22deg)}20%{-webkit-transform:rotate(22deg);transform:rotate(22deg)}32%{-webkit-transform:rotate(-12deg);transform:rotate(-12deg)}36%{-webkit-transform:rotate(12deg);transform:rotate(12deg)}100%,40%{-webkit-transform:rotate(0);transform:rotate(0)}}@keyframes fa-shake{0%{-webkit-transform:rotate(-15deg);transform:rotate(-15deg)}4%{-webkit-transform:rotate(15deg);transform:rotate(15deg)}24%,8%{-webkit-transform:rotate(-18deg);transform:rotate(-18deg)}12%,28%{-webkit-transform:rotate(18deg);transform:rotate(18deg)}16%{-webkit-transform:rotate(-22deg);transform:rotate(-22deg)}20%{-webkit-transform:rotate(22deg);transform:rotate(22deg)}32%{-webkit-transform:rotate(-12deg);transform:rotate(-12deg)}36%{-webkit-transform:rotate(12deg);transform:rotate(12deg)}100%,40%{-webkit-transform:rotate(0);transform:rotate(0)}}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.fa-rotate-90{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-webkit-transform:scale(-1,1);transform:scale(-1,1)}.fa-flip-vertical{-webkit-transform:scale(1,-1);transform:scale(1,-1)}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical{-webkit-transform:scale(-1,-1);transform:scale(-1,-1)}.fa-rotate-by{-webkit-transform:rotate(var(--fa-rotate-angle,none));transform:rotate(var(--fa-rotate-angle,none))}.fa-stack{display:inline-block;vertical-align:middle;height:2em;position:relative;width:2.5em}.fa-stack-1x,.fa-stack-2x{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0;z-index:var(--fa-stack-z-index,auto)}.svg-inline--fa.fa-stack-1x{height:1em;width:1.25em}.svg-inline--fa.fa-stack-2x{height:2em;width:2.5em}.fa-inverse{color:var(--fa-inverse,#fff)}.fa-sr-only,.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.fa-sr-only-focusable:not(:focus),.sr-only-focusable:not(:focus){position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.svg-inline--fa .fa-primary{fill:var(--fa-primary-color,currentColor);opacity:var(--fa-primary-opacity,1)}.svg-inline--fa .fa-secondary{fill:var(--fa-secondary-color,currentColor);opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-primary{opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-secondary{opacity:var(--fa-primary-opacity,1)}.svg-inline--fa mask .fa-primary,.svg-inline--fa mask .fa-secondary{fill:#000}.fa-duotone.fa-inverse,.fad.fa-inverse{color:var(--fa-inverse,#fff)}';
    return (
      ("fa" === n && r === e) ||
        ((t = new RegExp("\\.".concat("fa", "\\-"), "g")),
        (a = new RegExp("\\--".concat("fa", "\\-"), "g")),
        (e = new RegExp("\\.".concat(e), "g")),
        (i = i
          .replace(t, ".".concat(n, "-"))
          .replace(a, "--".concat(n, "-"))
          .replace(e, ".".concat(r)))),
      i
    );
  }
  var ot = !1;
  function ct() {
    X.autoAddCss &&
      !ot &&
      ((function (t) {
        if (t && w) {
          var a = b.createElement("style");
          a.setAttribute("type", "text/css"), (a.innerHTML = t);
          for (
            var e = b.head.childNodes, n = null, r = e.length - 1;
            -1 < r;
            r--
          ) {
            var i = e[r],
              o = (i.tagName || "").toUpperCase();
            -1 < ["STYLE", "LINK"].indexOf(o) && (n = i);
          }
          b.head.insertBefore(a, n);
        }
      })(it()),
      (ot = !0));
  }
  var st = {
      mixout: function () {
        return { dom: { css: it, insertCss: ct } };
      },
      hooks: function () {
        return {
          beforeDOMElementCreation: function () {
            ct();
          },
          beforeI2svg: function () {
            ct();
          },
        };
      },
    },
    K = g || {};
  K[d] || (K[d] = {}),
    K[d].styles || (K[d].styles = {}),
    K[d].hooks || (K[d].hooks = {}),
    K[d].shims || (K[d].shims = []);
  function ft() {
    b.removeEventListener("DOMContentLoaded", ft),
      (mt = 1),
      ut.map(function (t) {
        return t();
      });
  }
  var lt = K[d],
    ut = [],
    mt = !1;
  function dt(t) {
    w && (mt ? setTimeout(t, 0) : ut.push(t));
  }
  function pt(t) {
    var e,
      a = t.tag,
      n = t.attributes,
      r = void 0 === n ? {} : n,
      n = t.children,
      n = void 0 === n ? [] : n;
    return "string" == typeof t
      ? et(t)
      : "<"
          .concat(a, " ")
          .concat(
            ((e = r),
            Object.keys(e || {})
              .reduce(function (t, a) {
                return t + "".concat(a, '="').concat(et(e[a]), '" ');
              }, "")
              .trim()),
            ">"
          )
          .concat(n.map(pt).join(""), "</")
          .concat(a, ">");
  }
  function vt(t, a, e) {
    if (t && t[a] && t[a][e]) return { prefix: a, iconName: e, icon: t[a][e] };
  }
  w &&
    ((mt = (b.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(
      b.readyState
    )) ||
      b.addEventListener("DOMContentLoaded", ft));
  function gt(t, a, e, n) {
    for (
      var r,
        i,
        o = Object.keys(t),
        c = o.length,
        s = void 0 !== n ? bt(a, n) : a,
        f = void 0 === e ? ((r = 1), t[o[0]]) : ((r = 0), e);
      r < c;
      r++
    )
      f = s(f, t[(i = o[r])], i, t);
    return f;
  }
  var bt = function (r, i) {
    return function (t, a, e, n) {
      return r.call(i, t, a, e, n);
    };
  };
  function ht(t) {
    t = (function (t) {
      for (var a = [], e = 0, n = t.length; e < n; ) {
        var r,
          i = t.charCodeAt(e++);
        55296 <= i && i <= 56319 && e < n
          ? 56320 == (64512 & (r = t.charCodeAt(e++)))
            ? a.push(((1023 & i) << 10) + (1023 & r) + 65536)
            : (a.push(i), e--)
          : a.push(i);
      }
      return a;
    })(t);
    return 1 === t.length ? t[0].toString(16) : null;
  }
  function yt(t, a) {
    var e,
      n = t.length,
      r = t.charCodeAt(a);
    return 55296 <= r &&
      r <= 56319 &&
      a + 1 < n &&
      56320 <= (e = t.charCodeAt(a + 1)) &&
      e <= 57343
      ? 1024 * (r - 55296) + e - 56320 + 65536
      : r;
  }
  function kt(t) {
    if (1 === t.length) {
      t = yt(t, 0);
      return 57344 <= t && t <= 63743;
    }
  }
  function wt(n) {
    return Object.keys(n).reduce(function (t, a) {
      var e = n[a];
      return !!e.icon ? (t[e.iconName] = e.icon) : (t[a] = e), t;
    }, {});
  }
  function xt(t, a, e) {
    var n = (2 < arguments.length && void 0 !== e ? e : {}).skipHooks,
      e = void 0 !== n && n,
      n = wt(a);
    "function" != typeof lt.hooks.addPack || e
      ? (lt.styles[t] = k(k({}, lt.styles[t] || {}), n))
      : lt.hooks.addPack(t, wt(a)),
      "fas" === t && xt("fa", a);
  }
  var At = /viewBox="0 0 ([0-9]+) ([0-9]+)"/,
    St = /path d="([^"]+)"/,
    Ot = [
      t(/path d="((?:(?!")[\s\S])+)".*path d="((?:(?!")[\s\S])+)"/, {
        d1: 1,
        d2: 2,
      }),
      t(
        /path class="((?:(?!")[\s\S])+)".*d="((?:(?!")[\s\S])+)".*path class="((?:(?!")[\s\S])+)".*d="((?:(?!")[\s\S])+)"/,
        { cls1: 1, d1: 2, cls2: 3, d2: 4 }
      ),
      t(/path class="((?:(?!")[\s\S])+)".*d="((?:(?!")[\s\S])+)"/, {
        cls1: 1,
        d1: 2,
      }),
    ];
  var Nt = lt.styles,
    Ct = lt.shims,
    Pt = Object.values(F),
    jt = null,
    Et = {},
    zt = {},
    Mt = {},
    Rt = {},
    It = {},
    Lt = Object.keys(I);
  function Ft(t, a, e) {
    var n,
      r,
      i,
      o,
      c,
      s,
      f,
      l =
        ((o = i = null),
        (c = (n = e).match(At)),
        (s = n.match(St)),
        (f = n.match(Ot[0]) || n.match(Ot[1]) || n.match(Ot[2]))
          ? ((e = (r = f.groups).cls1),
            (n = r.d1),
            (f = r.cls2),
            (r = r.d2),
            n && r && !e && !f
              ? (o = [n, r])
              : n && e && !r
              ? (o = -1 < e.indexOf("primary") ? ["", n] : [n, ""])
              : n &&
                r &&
                e &&
                f &&
                (o = -1 < e.indexOf("primary") ? [r, n] : [n, r]))
          : s && 2 === s.length && (o = s[1]),
        (i =
          c && o ? [parseInt(c[1], 10), parseInt(c[2], 10), [], null, o] : i));
    l && !kt(a) && (xt(t, u({}, a, l), { skipHooks: !0 }), Ut()),
      Yt[t][a].map(function (t) {
        t(l);
      }),
      delete Yt[t][a];
  }
  var Yt = {};
  function Tt(t, a) {
    return (kt(t) ? "unicode/".concat(ht(t)) : "".concat(t)).concat(
      void 0 === a ? "" : "-".concat(a),
      ".svg"
    );
  }
  function Dt(t, a) {
    var e = a.split("-"),
      a = e[0],
      e = e.slice(1).join("-");
    return a !== t || "" === e || ~V.indexOf(e) ? null : e;
  }
  function Ut() {
    function t(n) {
      return gt(
        Nt,
        function (t, a, e) {
          return (t[e] = gt(a, n, {})), t;
        },
        {}
      );
    }
    (Et = t(function (a, t, e) {
      return (
        t[3] && (a[t[3]] = e),
        t[2] &&
          t[2]
            .filter(function (t) {
              return "number" == typeof t;
            })
            .forEach(function (t) {
              a[t.toString(16)] = e;
            }),
        a
      );
    })),
      (zt = t(function (a, t, e) {
        return (
          (a[e] = e),
          t[2] &&
            t[2]
              .filter(function (t) {
                return "string" == typeof t;
              })
              .forEach(function (t) {
                a[t] = e;
              }),
          a
        );
      })),
      (It = t(function (a, t, e) {
        t = t[2];
        return (
          (a[e] = e),
          t.forEach(function (t) {
            a[t] = e;
          }),
          a
        );
      }));
    var r = "far" in Nt || X.autoFetchSvg,
      a = gt(
        Ct,
        function (t, a) {
          var e = a[0],
            n = a[1],
            a = a[2];
          return (
            "far" !== n || r || (n = "fas"),
            "string" == typeof e && (t.names[e] = { prefix: n, iconName: a }),
            "number" == typeof e &&
              (t.unicodes[e.toString(16)] = { prefix: n, iconName: a }),
            t
          );
        },
        { names: {}, unicodes: {} }
      );
    (Mt = a.names), (Rt = a.unicodes), (jt = Bt(X.styleDefault));
  }
  function Ht(t, a) {
    return (Et[t] || {})[a];
  }
  function _t(t, a) {
    return (It[t] || {})[a];
  }
  function Wt(t) {
    return Mt[t] || { prefix: null, iconName: null };
  }
  (La = function (t) {
    jt = Bt(t.styleDefault);
  }),
    q.push(La),
    Ut();
  function Vt() {
    return { prefix: null, iconName: null, rest: [] };
  }
  function Bt(t) {
    var a = I[t],
      a = L[t] || L[a],
      t = t in lt.styles ? t : null;
    return a || t || null;
  }
  function Gt(t, a) {
    var a = (1 < arguments.length && void 0 !== a ? a : {}).skipLookups,
      n = void 0 !== a && a,
      r = null,
      t = t.reduce(function (t, a) {
        var e = Dt(X.familyPrefix, a);
        return (
          Nt[a]
            ? ((a = Pt.includes(a) ? Y[a] : a), (r = a), (t.prefix = a))
            : -1 < Lt.indexOf(a)
            ? ((r = a), (t.prefix = Bt(a)))
            : e
            ? (t.iconName = e)
            : a !== X.replacementClass && t.rest.push(a),
          !n &&
            t.prefix &&
            t.iconName &&
            ((e = "fa" === r ? Wt(t.iconName) : {}),
            (a = _t(t.prefix, t.iconName)),
            e.prefix && (r = null),
            (t.iconName = e.iconName || a || t.iconName),
            (t.prefix = e.prefix || t.prefix),
            "far" !== t.prefix ||
              Nt.far ||
              !Nt.fas ||
              X.autoFetchSvg ||
              (t.prefix = "fas")),
          t
        );
      }, Vt());
    return ("fa" !== t.prefix && "fa" !== r) || (t.prefix = jt || "fas"), t;
  }
  var v = (function () {
      function t() {
        !(function (t, a) {
          if (!(t instanceof a))
            throw new TypeError("Cannot call a class as a function");
        })(this, t),
          (this.definitions = {});
      }
      var a, e, n;
      return (
        (a = t),
        (e = [
          {
            key: "add",
            value: function () {
              for (
                var e = this, t = arguments.length, a = new Array(t), n = 0;
                n < t;
                n++
              )
                a[n] = arguments[n];
              var r = a.reduce(this._pullDefinitions, {});
              Object.keys(r).forEach(function (t) {
                (e.definitions[t] = k(k({}, e.definitions[t] || {}), r[t])),
                  xt(t, r[t]);
                var a = F[t];
                a && xt(a, r[t]), Ut();
              });
            },
          },
          {
            key: "reset",
            value: function () {
              this.definitions = {};
            },
          },
          {
            key: "_pullDefinitions",
            value: function (r, t) {
              var i = t.prefix && t.iconName && t.icon ? { 0: t } : t;
              return (
                Object.keys(i).map(function (t) {
                  var a = i[t],
                    e = a.prefix,
                    t = a.iconName,
                    n = a.icon,
                    a = n[2];
                  r[e] || (r[e] = {}),
                    0 < a.length &&
                      a.forEach(function (t) {
                        "string" == typeof t && (r[e][t] = n);
                      }),
                    (r[e][t] = n);
                }),
                r
              );
            },
          },
        ]) && i(a.prototype, e),
        n && i(a, n),
        Object.defineProperty(a, "prototype", { writable: !1 }),
        t
      );
    })(),
    K = [],
    Kt = {},
    Xt = {},
    qt = Object.keys(Xt);
  function $t(t, a) {
    for (
      var e = arguments.length, n = new Array(2 < e ? e - 2 : 0), r = 2;
      r < e;
      r++
    )
      n[r - 2] = arguments[r];
    return (
      (Kt[t] || []).forEach(function (t) {
        a = t.apply(null, [a].concat(n));
      }),
      a
    );
  }
  function Jt(t) {
    for (
      var a = arguments.length, e = new Array(1 < a ? a - 1 : 0), n = 1;
      n < a;
      n++
    )
      e[n - 1] = arguments[n];
    (Kt[t] || []).forEach(function (t) {
      t.apply(null, e);
    });
  }
  function Qt(t) {
    var a = t,
      t = Array.prototype.slice.call(arguments, 1);
    return Xt[a] ? Xt[a].apply(null, t) : void 0;
  }
  function Zt(t) {
    "fa" === t.prefix && (t.prefix = "fas");
    var a = t.iconName,
      t = t.prefix || jt;
    if (a)
      return (
        (a = _t(t, a) || a), vt(ta.definitions, t, a) || vt(lt.styles, t, a)
      );
  }
  var ta = new v(),
    aa = {
      noAuto: function () {
        (X.autoReplaceSvg = !1), (X.observeMutations = !1), Jt("noAuto");
      },
      config: X,
      dom: {
        i2svg: function () {
          var t =
            0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
          return w
            ? (Jt("beforeI2svg", t),
              Qt("pseudoElements2svg", t),
              Qt("i2svg", t))
            : Promise.reject("Operation requires a DOM of some kind.");
        },
        watch: function () {
          var t =
              0 < arguments.length && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            a = t.autoReplaceSvgRoot;
          !1 === X.autoReplaceSvg && (X.autoReplaceSvg = !0),
            (X.observeMutations = !0),
            dt(function () {
              ea({ autoReplaceSvgRoot: a }), Jt("watch", t);
            });
        },
      },
      parse: {
        icon: function (t) {
          if (null === t) return null;
          if ("object" === r(t) && t.prefix && t.iconName)
            return {
              prefix: t.prefix,
              iconName: _t(t.prefix, t.iconName) || t.iconName,
            };
          if (Array.isArray(t) && 2 === t.length) {
            var a = 0 === t[1].indexOf("fa-") ? t[1].slice(3) : t[1],
              e = Bt(t[0]);
            return { prefix: e, iconName: _t(e, a) || a };
          }
          if (
            "string" == typeof t &&
            (-1 < t.indexOf("".concat(X.familyPrefix, "-")) || t.match(T))
          ) {
            a = Gt(t.split(" "), { skipLookups: !0 });
            return {
              prefix: a.prefix || jt,
              iconName: _t(a.prefix, a.iconName) || a.iconName,
            };
          }
          return "string" == typeof t
            ? { prefix: jt, iconName: _t(jt, t) || t }
            : void 0;
        },
      },
      library: ta,
      findIconDefinition: Zt,
      toHtml: pt,
    },
    ea = function () {
      var t = (
          0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
        ).autoReplaceSvgRoot,
        t = void 0 === t ? b : t;
      (0 < Object.keys(lt.styles).length || X.autoFetchSvg) &&
        w &&
        X.autoReplaceSvg &&
        aa.dom.i2svg({ node: t });
    };
  function na(a, t) {
    return (
      Object.defineProperty(a, "abstract", { get: t }),
      Object.defineProperty(a, "html", {
        get: function () {
          return a.abstract.map(pt);
        },
      }),
      Object.defineProperty(a, "node", {
        get: function () {
          if (w) {
            var t = b.createElement("div");
            return (t.innerHTML = a.html), t.children;
          }
        },
      }),
      a
    );
  }
  function ra(t) {
    var a = t.icons,
      e = a.main,
      n = a.mask,
      r = t.prefix,
      i = t.iconName,
      o = t.transform,
      c = t.symbol,
      s = t.title,
      f = t.maskId,
      l = t.titleId,
      u = t.extra,
      m = t.watchable,
      d = void 0 !== m && m,
      p = n.found ? n : e,
      a = p.width,
      t = p.height,
      m = "fak" === r,
      p = [
        X.replacementClass,
        i ? "".concat(X.familyPrefix, "-").concat(i) : "",
      ]
        .filter(function (t) {
          return -1 === u.classes.indexOf(t);
        })
        .filter(function (t) {
          return "" !== t || !!t;
        })
        .concat(u.classes)
        .join(" "),
      p = {
        children: [],
        attributes: k(
          k({}, u.attributes),
          {},
          {
            "data-prefix": r,
            "data-icon": i,
            class: p,
            role: u.attributes.role || "img",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 ".concat(a, " ").concat(t),
          }
        ),
      },
      t =
        m && !~u.classes.indexOf("fa-fw")
          ? { width: "".concat((a / t) * 16 * 0.0625, "em") }
          : {};
    d && (p.attributes[O] = ""),
      s &&
        (p.children.push({
          tag: "title",
          attributes: {
            id: p.attributes["aria-labelledby"] || "title-".concat(l || Z()),
          },
          children: [s],
        }),
        delete p.attributes.title);
    var v,
      g,
      b,
      h,
      y,
      t = k(
        k({}, p),
        {},
        {
          prefix: r,
          iconName: i,
          main: e,
          mask: n,
          maskId: f,
          transform: o,
          symbol: c,
          styles: k(k({}, t), u.styles),
        }
      ),
      n =
        n.found && e.found
          ? Qt("generateAbstractMask", t) || { children: [], attributes: {} }
          : Qt("generateAbstractIcon", t) || { children: [], attributes: {} },
      e = n.children,
      n = n.attributes;
    return (
      (t.children = e),
      (t.attributes = n),
      c
        ? ((g = (v = t).prefix),
          (b = v.iconName),
          (h = v.children),
          (y = v.attributes),
          (v =
            !0 === (v = v.symbol)
              ? "".concat(g, "-").concat(X.familyPrefix, "-").concat(b)
              : v),
          [
            {
              tag: "svg",
              attributes: { style: "display: none;" },
              children: [
                {
                  tag: "symbol",
                  attributes: k(k({}, y), {}, { id: v }),
                  children: h,
                },
              ],
            },
          ])
        : ((b = (g = t).children),
          (y = g.main),
          (v = g.mask),
          (h = g.attributes),
          (t = g.styles),
          rt((g = g.transform)) &&
            y.found &&
            !v.found &&
            ((v = y.width / y.height / 2),
            (y = 0.5),
            (h.style = nt(
              k(
                k({}, t),
                {},
                {
                  "transform-origin": ""
                    .concat(v + g.x / 16, "em ")
                    .concat(y + g.y / 16, "em"),
                }
              )
            ))),
          [{ tag: "svg", attributes: h, children: b }])
    );
  }
  function ia(t) {
    var a = t.content,
      e = t.width,
      n = t.height,
      r = t.transform,
      i = t.title,
      o = t.extra,
      c = t.watchable,
      s = void 0 !== c && c,
      t = k(
        k(k({}, o.attributes), i ? { title: i } : {}),
        {},
        { class: o.classes.join(" ") }
      );
    s && (t[O] = "");
    c = k({}, o.styles);
    rt(r) &&
      ((c.transform =
        ((o = (s = { transform: r, startCentered: !0, width: e, height: n })
          .transform),
        (r = s.width),
        (n = void 0 === (e = s.height) ? A : e),
        (s = void 0 !== (e = s.startCentered) && e),
        (e = ""),
        (e +=
          s && x
            ? "translate("
                .concat(o.x / $ - (void 0 === r ? A : r) / 2, "em, ")
                .concat(o.y / $ - n / 2, "em) ")
            : s
            ? "translate(calc(-50% + "
                .concat(o.x / $, "em), calc(-50% + ")
                .concat(o.y / $, "em)) ")
            : "translate(".concat(o.x / $, "em, ").concat(o.y / $, "em) ")),
        (e += "scale("
          .concat((o.size / $) * (o.flipX ? -1 : 1), ", ")
          .concat((o.size / $) * (o.flipY ? -1 : 1), ") ")),
        (e += "rotate(".concat(o.rotate, "deg) ")))),
      (c["-webkit-transform"] = c.transform));
    c = nt(c);
    0 < c.length && (t.style = c);
    c = [];
    return (
      c.push({ tag: "span", attributes: t, children: [a] }),
      i &&
        c.push({
          tag: "span",
          attributes: { class: "sr-only" },
          children: [i],
        }),
      c
    );
  }
  var oa = lt.styles;
  function ca(t) {
    var a = t[0],
      e = t[1],
      t = m(t.slice(4), 1)[0];
    return {
      found: !0,
      width: a,
      height: e,
      icon: Array.isArray(t)
        ? {
            tag: "g",
            attributes: {
              class: "".concat(X.familyPrefix, "-").concat(W.GROUP),
            },
            children: [
              {
                tag: "path",
                attributes: {
                  class: "".concat(X.familyPrefix, "-").concat(W.SECONDARY),
                  fill: "currentColor",
                  d: t[0],
                },
              },
              {
                tag: "path",
                attributes: {
                  class: "".concat(X.familyPrefix, "-").concat(W.PRIMARY),
                  fill: "currentColor",
                  d: t[1],
                },
              },
            ],
          }
        : { tag: "path", attributes: { fill: "currentColor", d: t } },
    };
  }
  var sa = { found: !1, width: 512, height: 512 };
  function fa(t, a) {
    R ||
      X.showMissingIcons ||
      !t ||
      console.error(
        'Icon with name "'
          .concat(t, '" and prefix "')
          .concat(a, '" is missing.')
      );
  }
  function la(r, i) {
    var o = i;
    return (
      "fa" === i && null !== X.styleDefault && (i = jt),
      new Promise(function (a, t) {
        Qt("missingIconAbstract");
        if (
          ("fa" === o &&
            ((n = Wt(r) || {}), (r = n.iconName || r), (i = n.prefix || i)),
          r && i && oa[i] && oa[i][r])
        ) {
          var e = oa[i][r];
          return a(ca(e));
        }
        var n = {},
          e = (function (t, a) {
            var t = 0 < arguments.length && void 0 !== t ? t : {},
              e = 1 < arguments.length ? a : void 0;
            if (e && kt(e)) {
              if (t && t.iconUploads) {
                var n = t.iconUploads,
                  a = Object.keys(n).find(function (t) {
                    return n[t] && n[t].u && n[t].u === ht(e);
                  });
                if (a) return n[a].v;
              }
            } else if (
              t &&
              t.iconUploads &&
              t.iconUploads[e] &&
              t.iconUploads[e].v
            )
              return t.iconUploads[e].v;
          })(g.FontAwesomeKitConfig, r);
        if (
          (g.FontAwesomeKitConfig &&
            g.FontAwesomeKitConfig.token &&
            (n.token = g.FontAwesomeKitConfig.token),
          "fak" === i && (n.version = e),
          r && i && X.autoFetchSvg)
        )
          return (function (e, n) {
            var t =
                2 < arguments.length && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              r = "fak" === e,
              a = t.url,
              i = void 0 === a ? X.fetchSvgFrom : a,
              a = t.uploadedSvgUrl,
              o = void 0 === a ? X.fetchUploadedSvgFrom : a,
              c = t.token,
              s = t.version;
            return (
              (Yt[e] && Yt[e][n]) ||
                (Yt[e] = k(k({}, Yt[e] || {}), u({}, n, []))),
              new Promise(function (a, t) {
                if (!i)
                  return t(
                    new Error(
                      "No URL available to fetch SVGs from. Specify in params or by setting config.fetchSvgFrom"
                    )
                  );
                if (r && !o)
                  return t(
                    new Error(
                      "No URL available to fetch kit SVGs from. Specify in params or by setting config.fetchKitSvgFrom"
                    )
                  );
                t = r
                  ? "".concat(o, "/").concat(c, "/icons/").concat(Tt(n, s))
                  : "".concat(i, "/").concat(I[e], "/").concat(Tt(n));
                if (
                  (c && (t = "".concat(t, "?token=").concat(c)),
                  lt.styles[e] && lt.styles[e][n])
                )
                  return a(lt.styles[e][n]);
                Yt[e][n].push(function (t) {
                  a(t);
                }),
                  1 === Yt[e][n].length &&
                    ("function" == typeof fetch
                      ? fetch(t, { mode: "cors" })
                          .then(function (t) {
                            return t.text();
                          })
                          .then(function (t) {
                            Ft(e, n, t);
                          })
                          .catch(function () {
                            Ft(e, n, "");
                          })
                      : Ft(e, n, ""));
              })
            );
          })(i, r, k({}, n))
            .then(function (t) {
              t
                ? a(ca(t))
                : (fa(r, i),
                  a(
                    k(
                      k({}, sa),
                      {},
                      {
                        icon:
                          (X.showMissingIcons &&
                            r &&
                            Qt("missingIconAbstract")) ||
                          {},
                      }
                    )
                  ));
            })
            .catch(t);
        fa(r, i),
          a(
            k(
              k({}, sa),
              {},
              {
                icon:
                  (X.showMissingIcons && r && Qt("missingIconAbstract")) || {},
              }
            )
          );
      })
    );
  }
  function ua() {}
  function ma(t) {
    da.mark("".concat(pa, " ").concat(t, " ends")),
      da.measure(
        "".concat(pa, " ").concat(t),
        "".concat(pa, " ").concat(t, " begins"),
        "".concat(pa, " ").concat(t, " ends")
      );
  }
  var da =
      X.measurePerformance && f && f.mark && f.measure
        ? f
        : { mark: ua, measure: ua },
    pa = 'FA "6.1.1"',
    va = {
      begin: function (t) {
        return (
          da.mark("".concat(pa, " ").concat(t, " begins")),
          function () {
            return ma(t);
          }
        );
      },
      end: ma,
    },
    ga = function () {};
  function ba(t) {
    return "string" == typeof (t.getAttribute ? t.getAttribute(O) : null);
  }
  function ha(t) {
    return b.createElementNS("http://www.w3.org/2000/svg", t);
  }
  function ya(t) {
    return b.createElement(t);
  }
  var ka = {
    replace: function (t) {
      var a = t[0];
      a.parentNode &&
        (t[1].forEach(function (t) {
          a.parentNode.insertBefore(
            (function a(e, t) {
              var t = (1 < arguments.length && void 0 !== t ? t : {}).ceFn,
                n = void 0 === t ? ("svg" === e.tag ? ha : ya) : t;
              if ("string" == typeof e) return b.createTextNode(e);
              var r = n(e.tag);
              return (
                Object.keys(e.attributes || []).forEach(function (t) {
                  r.setAttribute(t, e.attributes[t]);
                }),
                (e.children || []).forEach(function (t) {
                  r.appendChild(a(t, { ceFn: n }));
                }),
                r
              );
            })(t),
            a
          );
        }),
        null === a.getAttribute(O) && X.keepOriginalSource
          ? ((t = b.createComment(" ".concat(a.outerHTML, " "))),
            a.parentNode.replaceChild(t, a))
          : a.remove());
    },
    nest: function (t) {
      var a = t[0],
        e = t[1];
      if (~at(a).indexOf(X.replacementClass)) return ka.replace(t);
      var n = new RegExp("".concat(X.familyPrefix, "-.*"));
      delete e[0].attributes.id,
        e[0].attributes.class &&
          ((t = e[0].attributes.class.split(" ").reduce(
            function (t, a) {
              return (
                (a === X.replacementClass || a.match(n)
                  ? t.toSvg
                  : t.toNode
                ).push(a),
                t
              );
            },
            { toNode: [], toSvg: [] }
          )),
          (e[0].attributes.class = t.toSvg.join(" ")),
          0 === t.toNode.length
            ? a.removeAttribute("class")
            : a.setAttribute("class", t.toNode.join(" ")));
      e = e.map(pt).join("\n");
      a.setAttribute(O, ""), (a.innerHTML = e);
    },
  };
  function wa(t) {
    t();
  }
  function xa(e, t) {
    var n = "function" == typeof t ? t : ga;
    0 === e.length
      ? n()
      : (X.mutateApproach === z ? g.requestAnimationFrame || wa : wa)(
          function () {
            var t =
                (!0 !== X.autoReplaceSvg && ka[X.autoReplaceSvg]) || ka.replace,
              a = va.begin("mutate");
            e.map(t), a(), n();
          }
        );
  }
  var Aa = !1;
  function Sa() {
    Aa = !0;
  }
  function Oa() {
    Aa = !1;
  }
  var Na = null;
  function Ca(t) {
    var i, o, a, c;
    h &&
      X.observeMutations &&
      ((a = t.treeCallback),
      (i = void 0 === a ? ga : a),
      (a = t.nodeCallback),
      (o = void 0 === a ? ga : a),
      (a = t.pseudoElementsCallback),
      (c = void 0 === a ? ga : a),
      (t = void 0 === (t = t.observeMutationsRoot) ? b : t),
      (Na = new h(function (t) {
        var r;
        Aa ||
          ((r = jt),
          tt(t).forEach(function (t) {
            var a, e, n;
            "childList" === t.type &&
              0 < t.addedNodes.length &&
              !ba(t.addedNodes[0]) &&
              (X.searchPseudoElements && c(t.target), i(t.target)),
              "attributes" === t.type &&
                t.target.parentNode &&
                X.searchPseudoElements &&
                c(t.target.parentNode),
              "attributes" === t.type &&
                ba(t.target) &&
                ~_.indexOf(t.attributeName) &&
                ("class" === t.attributeName &&
                ((e = t.target),
                (n = e.getAttribute ? e.getAttribute(P) : null),
                (e = e.getAttribute ? e.getAttribute(j) : null),
                n && e)
                  ? ((e = (a = Gt(at(t.target))).prefix),
                    (a = a.iconName),
                    t.target.setAttribute(P, e || r),
                    a && t.target.setAttribute(j, a))
                  : (a = t.target) &&
                    a.classList &&
                    a.classList.contains &&
                    a.classList.contains(X.replacementClass) &&
                    o(t.target));
          }));
      })),
      w &&
        Na.observe(t, {
          childList: !0,
          attributes: !0,
          characterData: !0,
          subtree: !0,
        }));
  }
  function Pa(t) {
    var a = t.getAttribute("data-prefix"),
      e = t.getAttribute("data-icon"),
      n = void 0 !== t.innerText ? t.innerText.trim() : "",
      r = Gt(at(t));
    return (
      r.prefix || (r.prefix = jt),
      a && e && ((r.prefix = a), (r.iconName = e)),
      (r.iconName && r.prefix) ||
        (r.prefix &&
          0 < n.length &&
          (r.iconName =
            ((e = r.prefix),
            (n = t.innerText),
            (zt[e] || {})[n] || Ht(r.prefix, ht(t.innerText))))),
      r
    );
  }
  function ja(t, a) {
    var e = 1 < arguments.length && void 0 !== a ? a : { styleParser: !0 },
      n = Pa(t),
      r = n.iconName,
      i = n.prefix,
      o = n.rest,
      c =
        ((a = tt((c = t).attributes).reduce(function (t, a) {
          return (
            "class" !== t.name && "style" !== t.name && (t[a.name] = a.value), t
          );
        }, {})),
        (n = c.getAttribute("title")),
        (c = c.getAttribute("data-fa-title-id")),
        X.autoA11y &&
          (n
            ? (a["aria-labelledby"] = ""
                .concat(X.replacementClass, "-title-")
                .concat(c || Z()))
            : ((a["aria-hidden"] = "true"), (a.focusable = "false"))),
        a),
      a = $t("parseNodeAttributes", {}, t),
      s = e.styleParser
        ? ((e = (s = t).getAttribute("style")),
          (s = []),
          (s = e
            ? e.split(";").reduce(function (t, a) {
                var e = a.split(":"),
                  a = e[0],
                  e = e.slice(1);
                return a && 0 < e.length && (t[a] = e.join(":").trim()), t;
              }, {})
            : s))
        : [];
    return k(
      {
        iconName: r,
        title: t.getAttribute("title"),
        titleId: t.getAttribute("data-fa-title-id"),
        prefix: i,
        transform: J,
        mask: { iconName: null, prefix: null, rest: [] },
        maskId: null,
        symbol: !1,
        extra: { classes: o, styles: s, attributes: c },
      },
      a
    );
  }
  var Ea = lt.styles;
  function za(t) {
    var a = "nest" === X.autoReplaceSvg ? ja(t, { styleParser: !1 }) : ja(t);
    return ~a.extra.classes.indexOf(D)
      ? Qt("generateLayersText", t, a)
      : Qt("generateSvgReplacementMutation", t, a);
  }
  function Ma(t) {
    var n =
      1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
    if (!w) return Promise.resolve();
    function r(t) {
      return a.add("".concat(E, "-").concat(t));
    }
    function i(t) {
      return a.remove("".concat(E, "-").concat(t));
    }
    var a = b.documentElement.classList,
      e = X.autoFetchSvg ? Object.keys(I) : Object.keys(Ea),
      o = [".".concat(D, ":not([").concat(O, "])")]
        .concat(
          e.map(function (t) {
            return ".".concat(t, ":not([").concat(O, "])");
          })
        )
        .join(", ");
    if (0 === o.length) return Promise.resolve();
    e = [];
    try {
      e = tt(t.querySelectorAll(o));
    } catch (t) {}
    if (!(0 < e.length)) return Promise.resolve();
    r("pending"), i("complete");
    var c = va.begin("onTree"),
      s = e.reduce(function (t, a) {
        try {
          var e = za(a);
          e && t.push(e);
        } catch (t) {
          R || ("MissingIcon" === t.name && console.error(t));
        }
        return t;
      }, []);
    return new Promise(function (a, e) {
      Promise.all(s)
        .then(function (t) {
          xa(t, function () {
            r("active"),
              r("complete"),
              i("pending"),
              "function" == typeof n && n(),
              c(),
              a();
          });
        })
        .catch(function (t) {
          c(), e(t);
        });
    });
  }
  function Ra(t) {
    var a =
      1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
    za(t).then(function (t) {
      t && xa([t], a);
    });
  }
  function Ia(t) {
    var a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
      e = a.transform,
      n = void 0 === e ? J : e,
      r = void 0 !== (e = a.symbol) && e,
      i = void 0 === (e = a.mask) ? null : e,
      o = void 0 === (e = a.maskId) ? null : e,
      c = void 0 === (e = a.title) ? null : e,
      s = void 0 === (e = a.titleId) ? null : e,
      f = void 0 === (e = a.classes) ? [] : e,
      l = void 0 === (e = a.attributes) ? {} : e,
      u = void 0 === (e = a.styles) ? {} : e;
    if (t) {
      var m = t.prefix,
        d = t.iconName,
        p = t.icon;
      return na(k({ type: "icon" }, t), function () {
        return (
          Jt("beforeDOMElementCreation", { iconDefinition: t, params: a }),
          X.autoA11y &&
            (c
              ? (l["aria-labelledby"] = ""
                  .concat(X.replacementClass, "-title-")
                  .concat(s || Z()))
              : ((l["aria-hidden"] = "true"), (l.focusable = "false"))),
          ra({
            icons: {
              main: ca(p),
              mask: i
                ? ca(i.icon)
                : { found: !1, width: null, height: null, icon: {} },
            },
            prefix: m,
            iconName: d,
            transform: k(k({}, J), n),
            symbol: r,
            title: c,
            maskId: o,
            titleId: s,
            extra: { attributes: l, styles: u, classes: f },
          })
        );
      });
    }
  }
  var d = {
      mixout: function () {
        return {
          icon:
            ((n = Ia),
            function (t) {
              var a =
                  1 < arguments.length && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                e = (t || {}).icon ? t : Zt(t || {}),
                t = (t = a.mask) && ((t || {}).icon ? t : Zt(t || {}));
              return n(e, k(k({}, a), {}, { mask: t }));
            }),
        };
        var n;
      },
      hooks: function () {
        return {
          mutationObserverCallbacks: function (t) {
            return (t.treeCallback = Ma), (t.nodeCallback = Ra), t;
          },
        };
      },
      provides: function (t) {
        (t.i2svg = function (t) {
          var a = t.node,
            t = t.callback;
          return Ma(void 0 === a ? b : a, void 0 === t ? function () {} : t);
        }),
          (t.generateSvgReplacementMutation = function (n, t) {
            var r = t.iconName,
              i = t.title,
              o = t.titleId,
              c = t.prefix,
              s = t.transform,
              f = t.symbol,
              a = t.mask,
              l = t.maskId,
              u = t.extra;
            return new Promise(function (e, t) {
              Promise.all([
                la(r, c),
                a.iconName
                  ? la(a.iconName, a.prefix)
                  : Promise.resolve({
                      found: !1,
                      width: 512,
                      height: 512,
                      icon: {},
                    }),
              ])
                .then(function (t) {
                  var a = m(t, 2),
                    t = a[0],
                    a = a[1];
                  e([
                    n,
                    ra({
                      icons: { main: t, mask: a },
                      prefix: c,
                      iconName: r,
                      transform: s,
                      symbol: f,
                      maskId: l,
                      title: i,
                      titleId: o,
                      extra: u,
                      watchable: !0,
                    }),
                  ]);
                })
                .catch(t);
            });
          }),
          (t.generateAbstractIcon = function (t) {
            var a,
              e = t.children,
              n = t.attributes,
              r = t.main,
              i = t.transform,
              t = nt(t.styles);
            return (
              0 < t.length && (n.style = t),
              rt(i) &&
                (a = Qt("generateAbstractTransformGrouping", {
                  main: r,
                  transform: i,
                  containerWidth: r.width,
                  iconWidth: r.width,
                })),
              e.push(a || r.icon),
              { children: e, attributes: n }
            );
          });
      },
    },
    La = {
      mixout: function () {
        return {
          layer: function (t) {
            var e =
                1 < arguments.length && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              a = e.classes,
              n = void 0 === a ? [] : a;
            return na({ type: "layer" }, function () {
              Jt("beforeDOMElementCreation", { assembler: t, params: e });
              var a = [];
              return (
                t(function (t) {
                  Array.isArray(t)
                    ? t.map(function (t) {
                        a = a.concat(t.abstract);
                      })
                    : (a = a.concat(t.abstract));
                }),
                [
                  {
                    tag: "span",
                    attributes: {
                      class: ["".concat(X.familyPrefix, "-layers")]
                        .concat(l(n))
                        .join(" "),
                    },
                    children: a,
                  },
                ]
              );
            });
          },
        };
      },
    },
    v = {
      mixout: function () {
        return {
          counter: function (r) {
            var i =
                1 < arguments.length && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              t = i.title,
              o = void 0 === t ? null : t,
              t = i.classes,
              c = void 0 === t ? [] : t,
              t = i.attributes,
              s = void 0 === t ? {} : t,
              t = i.styles,
              f = void 0 === t ? {} : t;
            return na({ type: "counter", content: r }, function () {
              return (
                Jt("beforeDOMElementCreation", { content: r, params: i }),
                (t = {
                  content: r.toString(),
                  title: o,
                  extra: {
                    attributes: s,
                    styles: f,
                    classes: [
                      "".concat(X.familyPrefix, "-layers-counter"),
                    ].concat(l(c)),
                  },
                }),
                (a = t.content),
                (e = t.title),
                (n = t.extra),
                (t = k(
                  k(k({}, n.attributes), e ? { title: e } : {}),
                  {},
                  { class: n.classes.join(" ") }
                )),
                0 < (n = nt(n.styles)).length && (t.style = n),
                (n = []).push({ tag: "span", attributes: t, children: [a] }),
                e &&
                  n.push({
                    tag: "span",
                    attributes: { class: "sr-only" },
                    children: [e],
                  }),
                n
              );
              var t, a, e, n;
            });
          },
        };
      },
    },
    f = {
      mixout: function () {
        return {
          text: function (t) {
            var a =
                1 < arguments.length && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              e = a.transform,
              n = void 0 === e ? J : e,
              e = a.title,
              r = void 0 === e ? null : e,
              e = a.classes,
              i = void 0 === e ? [] : e,
              e = a.attributes,
              o = void 0 === e ? {} : e,
              e = a.styles,
              c = void 0 === e ? {} : e;
            return na({ type: "text", content: t }, function () {
              return (
                Jt("beforeDOMElementCreation", { content: t, params: a }),
                ia({
                  content: t,
                  transform: k(k({}, J), n),
                  title: r,
                  extra: {
                    attributes: o,
                    styles: c,
                    classes: ["".concat(X.familyPrefix, "-layers-text")].concat(
                      l(i)
                    ),
                  },
                })
              );
            });
          },
        };
      },
      provides: function (t) {
        t.generateLayersText = function (t, a) {
          var e,
            n = a.title,
            r = a.transform,
            i = a.extra,
            o = null,
            c = null;
          return (
            x &&
              ((e = parseInt(getComputedStyle(t).fontSize, 10)),
              (o = (a = t.getBoundingClientRect()).width / e),
              (c = a.height / e)),
            X.autoA11y && !n && (i.attributes["aria-hidden"] = "true"),
            Promise.resolve([
              t,
              ia({
                content: t.innerHTML,
                width: o,
                height: c,
                transform: r,
                title: n,
                extra: i,
                watchable: !0,
              }),
            ])
          );
        };
      },
    },
    Fa = new RegExp('"', "ug"),
    Ya = [1105920, 1112319];
  function Ta(m, d) {
    var p = "".concat(C).concat(d.replace(":", "-"));
    return new Promise(function (e, t) {
      if (null !== m.getAttribute(p)) return e();
      var n,
        a,
        r,
        i,
        o,
        c = tt(m.children).filter(function (t) {
          return t.getAttribute(N) === d;
        })[0],
        s = g.getComputedStyle(m, d),
        f = s.getPropertyValue("font-family").match(U),
        l = s.getPropertyValue("font-weight"),
        u = s.getPropertyValue("content");
      if (c && !f) return m.removeChild(c), e();
      f && "none" !== u && "" !== u
        ? ((a = s.getPropertyValue("content")),
          (n = ~[
            "Solid",
            "Regular",
            "Light",
            "Thin",
            "Duotone",
            "Brands",
            "Kit",
          ].indexOf(f[2])
            ? L[f[2].toLowerCase()]
            : H[l]),
          (s = (a =
            ((s = (u = a).replace(Fa, "")),
            (l = yt(s, 0)),
            (u = Ya[0] <= l && l <= Ya[1]),
            {
              value: ht((l = 2 === s.length && s[0] === s[1]) ? s[0] : s),
              isSecondary: u || l,
            })).value),
          (u = a.isSecondary),
          (l = f[0].startsWith("FontAwesome")),
          (a = Ht(n, s)),
          (r = a),
          l &&
            ((l = Rt[(f = s)]),
            (f = Ht("fas", f)),
            (f = l ||
              (f ? { prefix: "fas", iconName: f } : null) || {
                prefix: null,
                iconName: null,
              }).iconName &&
              f.prefix &&
              ((a = f.iconName), (n = f.prefix))),
          (r = r || s),
          !(a = a || String.fromCharCode(parseInt(s, 16))) ||
          u ||
          (c && c.getAttribute(P) === n && c.getAttribute(j) === r)
            ? e()
            : (m.setAttribute(p, r),
              c && m.removeChild(c),
              ((o = (i = {
                iconName: null,
                title: null,
                titleId: null,
                prefix: null,
                transform: J,
                symbol: !1,
                mask: { iconName: null, prefix: null, rest: [] },
                maskId: null,
                extra: { classes: [], styles: {}, attributes: {} },
              }).extra).attributes[N] = d),
              la(a, n)
                .then(function (t) {
                  var a = ra(
                      k(
                        k({}, i),
                        {},
                        {
                          icons: { main: t, mask: Vt() },
                          prefix: n,
                          iconName: r,
                          extra: o,
                          watchable: !0,
                        }
                      )
                    ),
                    t = b.createElement("svg");
                  "::before" === d
                    ? m.insertBefore(t, m.firstChild)
                    : m.appendChild(t),
                    (t.outerHTML = a.map(pt).join("\n")),
                    m.removeAttribute(p),
                    e();
                })
                .catch(t)))
        : e();
    });
  }
  function Da(t) {
    return Promise.all([Ta(t, "::before"), Ta(t, "::after")]);
  }
  function Ua(t) {
    return !(
      t.parentNode === document.head ||
      ~M.indexOf(t.tagName.toUpperCase()) ||
      t.getAttribute(N) ||
      (t.parentNode && "svg" === t.parentNode.tagName)
    );
  }
  function Ha(r) {
    if (w)
      return new Promise(function (t, a) {
        var e = tt(r.querySelectorAll("*")).filter(Ua).map(Da),
          n = va.begin("searchPseudoElements");
        Sa(),
          Promise.all(e)
            .then(function () {
              n(), Oa(), t();
            })
            .catch(function () {
              n(), Oa(), a();
            });
      });
  }
  function _a(t) {
    return t
      .toLowerCase()
      .split(" ")
      .reduce(
        function (t, a) {
          var e = a.toLowerCase().split("-"),
            a = e[0],
            n = e.slice(1).join("-");
          if (a && "h" === n) return (t.flipX = !0), t;
          if (a && "v" === n) return (t.flipY = !0), t;
          if (((n = parseFloat(n)), isNaN(n))) return t;
          switch (a) {
            case "grow":
              t.size = t.size + n;
              break;
            case "shrink":
              t.size = t.size - n;
              break;
            case "left":
              t.x = t.x - n;
              break;
            case "right":
              t.x = t.x + n;
              break;
            case "up":
              t.y = t.y - n;
              break;
            case "down":
              t.y = t.y + n;
              break;
            case "rotate":
              t.rotate = t.rotate + n;
          }
          return t;
        },
        { size: 16, x: 0, y: 0, flipX: !1, flipY: !1, rotate: 0 }
      );
  }
  var Wa = !1,
    Va = { x: 0, y: 0, width: "100%", height: "100%" };
  function Ba(t) {
    return (
      t.attributes &&
        (t.attributes.fill ||
          !(1 < arguments.length && void 0 !== arguments[1]) ||
          arguments[1]) &&
        (t.attributes.fill = "black"),
      t
    );
  }
  var Ga;
  (Ga = { mixoutsTo: aa }.mixoutsTo),
    (K = [
      st,
      d,
      La,
      v,
      f,
      {
        hooks: function () {
          return {
            mutationObserverCallbacks: function (t) {
              return (t.pseudoElementsCallback = Ha), t;
            },
          };
        },
        provides: function (t) {
          t.pseudoElements2svg = function (t) {
            t = t.node;
            X.searchPseudoElements && Ha(void 0 === t ? b : t);
          };
        },
      },
      {
        mixout: function () {
          return {
            dom: {
              unwatch: function () {
                Sa(), (Wa = !0);
              },
            },
          };
        },
        hooks: function () {
          return {
            bootstrap: function () {
              Ca($t("mutationObserverCallbacks", {}));
            },
            noAuto: function () {
              Na && Na.disconnect();
            },
            watch: function (t) {
              t = t.observeMutationsRoot;
              Wa
                ? Oa()
                : Ca(
                    $t("mutationObserverCallbacks", { observeMutationsRoot: t })
                  );
            },
          };
        },
      },
      {
        mixout: function () {
          return { parse: { transform: _a } };
        },
        hooks: function () {
          return {
            parseNodeAttributes: function (t, a) {
              a = a.getAttribute("data-fa-transform");
              return a && (t.transform = _a(a)), t;
            },
          };
        },
        provides: function (t) {
          t.generateAbstractTransformGrouping = function (t) {
            var a = t.main,
              e = t.transform,
              n = t.containerWidth,
              r = t.iconWidth,
              i = { transform: "translate(".concat(n / 2, " 256)") },
              t = "translate(".concat(32 * e.x, ", ").concat(32 * e.y, ") "),
              n = "scale("
                .concat((e.size / 16) * (e.flipX ? -1 : 1), ", ")
                .concat((e.size / 16) * (e.flipY ? -1 : 1), ") "),
              e = "rotate(".concat(e.rotate, " 0 0)"),
              r = {
                outer: i,
                inner: {
                  transform: "".concat(t, " ").concat(n, " ").concat(e),
                },
                path: {
                  transform: "translate(".concat((r / 2) * -1, " -256)"),
                },
              };
            return {
              tag: "g",
              attributes: k({}, r.outer),
              children: [
                {
                  tag: "g",
                  attributes: k({}, r.inner),
                  children: [
                    {
                      tag: a.icon.tag,
                      children: a.icon.children,
                      attributes: k(k({}, a.icon.attributes), r.path),
                    },
                  ],
                },
              ],
            };
          };
        },
      },
      {
        hooks: function () {
          return {
            parseNodeAttributes: function (t, a) {
              var e = a.getAttribute("data-fa-mask"),
                e = e
                  ? Gt(
                      e.split(" ").map(function (t) {
                        return t.trim();
                      })
                    )
                  : Vt();
              return (
                e.prefix || (e.prefix = jt),
                (t.mask = e),
                (t.maskId = a.getAttribute("data-fa-mask-id")),
                t
              );
            },
          };
        },
        provides: function (t) {
          t.generateAbstractMask = function (t) {
            var a = t.children,
              e = t.attributes,
              n = t.main,
              r = t.mask,
              i = t.maskId,
              o = t.transform,
              c = n.width,
              s = n.icon,
              f = r.width,
              t = r.icon,
              o =
                ((r = (n = { transform: o, containerWidth: f, iconWidth: c })
                  .transform),
                (o = n.containerWidth),
                (f = n.iconWidth),
                (c = { transform: "translate(".concat(o / 2, " 256)") }),
                (n = "translate("
                  .concat(32 * r.x, ", ")
                  .concat(32 * r.y, ") ")),
                (o = "scale("
                  .concat((r.size / 16) * (r.flipX ? -1 : 1), ", ")
                  .concat((r.size / 16) * (r.flipY ? -1 : 1), ") ")),
                (r = "rotate(".concat(r.rotate, " 0 0)")),
                {
                  outer: c,
                  inner: {
                    transform: "".concat(n, " ").concat(o, " ").concat(r),
                  },
                  path: {
                    transform: "translate(".concat((f / 2) * -1, " -256)"),
                  },
                }),
              r = {
                tag: "rect",
                attributes: k(k({}, Va), {}, { fill: "white" }),
              },
              f = s.children ? { children: s.children.map(Ba) } : {},
              f = {
                tag: "g",
                attributes: k({}, o.inner),
                children: [
                  Ba(
                    k(
                      {
                        tag: s.tag,
                        attributes: k(k({}, s.attributes), o.path),
                      },
                      f
                    )
                  ),
                ],
              },
              o = { tag: "g", attributes: k({}, o.outer), children: [f] },
              f = "mask-".concat(i || Z()),
              i = "clip-".concat(i || Z()),
              o = {
                tag: "mask",
                attributes: k(
                  k({}, Va),
                  {},
                  {
                    id: f,
                    maskUnits: "userSpaceOnUse",
                    maskContentUnits: "userSpaceOnUse",
                  }
                ),
                children: [r, o],
              },
              o = {
                tag: "defs",
                children: [
                  {
                    tag: "clipPath",
                    attributes: { id: i },
                    children: "g" === (t = t).tag ? t.children : [t],
                  },
                  o,
                ],
              };
            return (
              a.push(o, {
                tag: "rect",
                attributes: k(
                  {
                    fill: "currentColor",
                    "clip-path": "url(#".concat(i, ")"),
                    mask: "url(#".concat(f, ")"),
                  },
                  Va
                ),
              }),
              { children: a, attributes: e }
            );
          };
        },
      },
      {
        provides: function (t) {
          var i = !1;
          g.matchMedia &&
            (i = g.matchMedia("(prefers-reduced-motion: reduce)").matches),
            (t.missingIconAbstract = function () {
              var t = [],
                a = { fill: "currentColor" },
                e = {
                  attributeType: "XML",
                  repeatCount: "indefinite",
                  dur: "2s",
                };
              t.push({
                tag: "path",
                attributes: k(
                  k({}, a),
                  {},
                  {
                    d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z",
                  }
                ),
              });
              var n = k(k({}, e), {}, { attributeName: "opacity" }),
                r = {
                  tag: "circle",
                  attributes: k(
                    k({}, a),
                    {},
                    { cx: "256", cy: "364", r: "28" }
                  ),
                  children: [],
                };
              return (
                i ||
                  r.children.push(
                    {
                      tag: "animate",
                      attributes: k(
                        k({}, e),
                        {},
                        { attributeName: "r", values: "28;14;28;28;14;28;" }
                      ),
                    },
                    {
                      tag: "animate",
                      attributes: k(k({}, n), {}, { values: "1;0;1;1;0;1;" }),
                    }
                  ),
                t.push(r),
                t.push({
                  tag: "path",
                  attributes: k(
                    k({}, a),
                    {},
                    {
                      opacity: "1",
                      d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z",
                    }
                  ),
                  children: i
                    ? []
                    : [
                        {
                          tag: "animate",
                          attributes: k(
                            k({}, n),
                            {},
                            { values: "1;0;0;0;0;1;" }
                          ),
                        },
                      ],
                }),
                i ||
                  t.push({
                    tag: "path",
                    attributes: k(
                      k({}, a),
                      {},
                      {
                        opacity: "0",
                        d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z",
                      }
                    ),
                    children: [
                      {
                        tag: "animate",
                        attributes: k(k({}, n), {}, { values: "0;0;1;1;0;0;" }),
                      },
                    ],
                  }),
                { tag: "g", attributes: { class: "missing" }, children: t }
              );
            });
        },
      },
      {
        hooks: function () {
          return {
            parseNodeAttributes: function (t, a) {
              a = a.getAttribute("data-fa-symbol");
              return (t.symbol = null !== a && ("" === a || a)), t;
            },
          };
        },
      },
    ]),
    (Kt = {}),
    Object.keys(Xt).forEach(function (t) {
      -1 === qt.indexOf(t) && delete Xt[t];
    }),
    K.forEach(function (t) {
      var a,
        e = t.mixout ? t.mixout() : {};
      Object.keys(e).forEach(function (a) {
        "function" == typeof e[a] && (Ga[a] = e[a]),
          "object" === r(e[a]) &&
            Object.keys(e[a]).forEach(function (t) {
              Ga[a] || (Ga[a] = {}), (Ga[a][t] = e[a][t]);
            });
      }),
        t.hooks &&
          ((a = t.hooks()),
          Object.keys(a).forEach(function (t) {
            Kt[t] || (Kt[t] = []), Kt[t].push(a[t]);
          })),
        t.provides && t.provides(Xt);
    }),
    (function (t) {
      try {
        for (
          var a = arguments.length, e = new Array(1 < a ? a - 1 : 0), n = 1;
          n < a;
          n++
        )
          e[n - 1] = arguments[n];
        t.apply(void 0, e);
      } catch (t) {
        if (!R) throw t;
      }
    })(function (t) {
      y &&
        (g.FontAwesome || (g.FontAwesome = aa),
        dt(function () {
          ea(), Jt("bootstrap");
        })),
        (lt.hooks = k(
          k({}, lt.hooks),
          {},
          {
            addPack: function (t, a) {
              (lt.styles[t] = k(k({}, lt.styles[t] || {}), a)), Ut(), ea();
            },
            addPacks: function (t) {
              t.forEach(function (t) {
                var a = m(t, 2),
                  t = a[0],
                  a = a[1];
                lt.styles[t] = k(k({}, lt.styles[t] || {}), a);
              }),
                Ut(),
                ea();
            },
            addShims: function (t) {
              var a;
              (a = lt.shims).push.apply(a, l(t)), Ut(), ea();
            },
          }
        ));
    });
})();
