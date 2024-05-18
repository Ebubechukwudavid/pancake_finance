(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[4455], {
    14908: function(t, e, n) {
        "use strict";
        n.r(e),
        n.d(e, {
            CountUp: function() {
                return r
            }
        });
        var i = function() {
            return i = Object.assign || function(t) {
                for (var e, n = 1, i = arguments.length; n < i; n++)
                    for (var r in e = arguments[n])
                        Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t
            }
            ,
            i.apply(this, arguments)
        }
          , r = function() {
            function t(t, e, n) {
                var r = this;
                this.endVal = e,
                this.options = n,
                this.version = "2.8.0",
                this.defaults = {
                    startVal: 0,
                    decimalPlaces: 0,
                    duration: 2,
                    useEasing: !0,
                    useGrouping: !0,
                    useIndianSeparators: !1,
                    smartEasingThreshold: 999,
                    smartEasingAmount: 333,
                    separator: ",",
                    decimal: ".",
                    prefix: "",
                    suffix: "",
                    enableScrollSpy: !1,
                    scrollSpyDelay: 200,
                    scrollSpyOnce: !1
                },
                this.finalEndVal = null,
                this.useEasing = !0,
                this.countDown = !1,
                this.error = "",
                this.startVal = 0,
                this.paused = !0,
                this.once = !1,
                this.count = function(t) {
                    r.startTime || (r.startTime = t);
                    var e = t - r.startTime;
                    r.remaining = r.duration - e,
                    r.useEasing ? r.countDown ? r.frameVal = r.startVal - r.easingFn(e, 0, r.startVal - r.endVal, r.duration) : r.frameVal = r.easingFn(e, r.startVal, r.endVal - r.startVal, r.duration) : r.frameVal = r.startVal + (r.endVal - r.startVal) * (e / r.duration);
                    var n = r.countDown ? r.frameVal < r.endVal : r.frameVal > r.endVal;
                    r.frameVal = n ? r.endVal : r.frameVal,
                    r.frameVal = Number(r.frameVal.toFixed(r.options.decimalPlaces)),
                    r.printValue(r.frameVal),
                    e < r.duration ? r.rAF = requestAnimationFrame(r.count) : null !== r.finalEndVal ? r.update(r.finalEndVal) : r.options.onCompleteCallback && r.options.onCompleteCallback()
                }
                ,
                this.formatNumber = function(t) {
                    var e, n, i, o, s = t < 0 ? "-" : "";
                    e = Math.abs(t).toFixed(r.options.decimalPlaces);
                    var a = (e += "").split(".");
                    if (n = a[0],
                    i = a.length > 1 ? r.options.decimal + a[1] : "",
                    r.options.useGrouping) {
                        o = "";
                        for (var l = 3, u = 0, c = 0, d = n.length; c < d; ++c)
                            r.options.useIndianSeparators && 4 === c && (l = 2,
                            u = 1),
                            0 !== c && u % l == 0 && (o = r.options.separator + o),
                            u++,
                            o = n[d - c - 1] + o;
                        n = o
                    }
                    return r.options.numerals && r.options.numerals.length && (n = n.replace(/[0-9]/g, (function(t) {
                        return r.options.numerals[+t]
                    }
                    )),
                    i = i.replace(/[0-9]/g, (function(t) {
                        return r.options.numerals[+t]
                    }
                    ))),
                    s + r.options.prefix + n + i + r.options.suffix
                }
                ,
                this.easeOutExpo = function(t, e, n, i) {
                    return n * (1 - Math.pow(2, -10 * t / i)) * 1024 / 1023 + e
                }
                ,
                this.options = i(i({}, this.defaults), n),
                this.formattingFn = this.options.formattingFn ? this.options.formattingFn : this.formatNumber,
                this.easingFn = this.options.easingFn ? this.options.easingFn : this.easeOutExpo,
                this.startVal = this.validateValue(this.options.startVal),
                this.frameVal = this.startVal,
                this.endVal = this.validateValue(e),
                this.options.decimalPlaces = Math.max(this.options.decimalPlaces),
                this.resetDuration(),
                this.options.separator = String(this.options.separator),
                this.useEasing = this.options.useEasing,
                "" === this.options.separator && (this.options.useGrouping = !1),
                this.el = "string" == typeof t ? document.getElementById(t) : t,
                this.el ? this.printValue(this.startVal) : this.error = "[CountUp] target is null or undefined",
                "undefined" != typeof window && this.options.enableScrollSpy && (this.error ? console.error(this.error, t) : (window.onScrollFns = window.onScrollFns || [],
                window.onScrollFns.push((function() {
                    return r.handleScroll(r)
                }
                )),
                window.onscroll = function() {
                    window.onScrollFns.forEach((function(t) {
                        return t()
                    }
                    ))
                }
                ,
                this.handleScroll(this)))
            }
            return t.prototype.handleScroll = function(t) {
                if (t && window && !t.once) {
                    var e = window.innerHeight + window.scrollY
                      , n = t.el.getBoundingClientRect()
                      , i = n.top + window.pageYOffset
                      , r = n.top + n.height + window.pageYOffset;
                    r < e && r > window.scrollY && t.paused ? (t.paused = !1,
                    setTimeout((function() {
                        return t.start()
                    }
                    ), t.options.scrollSpyDelay),
                    t.options.scrollSpyOnce && (t.once = !0)) : (window.scrollY > r || i > e) && !t.paused && t.reset()
                }
            }
            ,
            t.prototype.determineDirectionAndSmartEasing = function() {
                var t = this.finalEndVal ? this.finalEndVal : this.endVal;
                this.countDown = this.startVal > t;
                var e = t - this.startVal;
                if (Math.abs(e) > this.options.smartEasingThreshold && this.options.useEasing) {
                    this.finalEndVal = t;
                    var n = this.countDown ? 1 : -1;
                    this.endVal = t + n * this.options.smartEasingAmount,
                    this.duration = this.duration / 2
                } else
                    this.endVal = t,
                    this.finalEndVal = null;
                null !== this.finalEndVal ? this.useEasing = !1 : this.useEasing = this.options.useEasing
            }
            ,
            t.prototype.start = function(t) {
                this.error || (this.options.onStartCallback && this.options.onStartCallback(),
                t && (this.options.onCompleteCallback = t),
                this.duration > 0 ? (this.determineDirectionAndSmartEasing(),
                this.paused = !1,
                this.rAF = requestAnimationFrame(this.count)) : this.printValue(this.endVal))
            }
            ,
            t.prototype.pauseResume = function() {
                this.paused ? (this.startTime = null,
                this.duration = this.remaining,
                this.startVal = this.frameVal,
                this.determineDirectionAndSmartEasing(),
                this.rAF = requestAnimationFrame(this.count)) : cancelAnimationFrame(this.rAF),
                this.paused = !this.paused
            }
            ,
            t.prototype.reset = function() {
                cancelAnimationFrame(this.rAF),
                this.paused = !0,
                this.resetDuration(),
                this.startVal = this.validateValue(this.options.startVal),
                this.frameVal = this.startVal,
                this.printValue(this.startVal)
            }
            ,
            t.prototype.update = function(t) {
                cancelAnimationFrame(this.rAF),
                this.startTime = null,
                this.endVal = this.validateValue(t),
                this.endVal !== this.frameVal && (this.startVal = this.frameVal,
                null == this.finalEndVal && this.resetDuration(),
                this.finalEndVal = null,
                this.determineDirectionAndSmartEasing(),
                this.rAF = requestAnimationFrame(this.count))
            }
            ,
            t.prototype.printValue = function(t) {
                var e;
                if (this.el) {
                    var n = this.formattingFn(t);
                    (null === (e = this.options.plugin) || void 0 === e ? void 0 : e.render) ? this.options.plugin.render(this.el, n) : "INPUT" === this.el.tagName ? this.el.value = n : "text" === this.el.tagName || "tspan" === this.el.tagName ? this.el.textContent = n : this.el.innerHTML = n
                }
            }
            ,
            t.prototype.ensureNumber = function(t) {
                return "number" == typeof t && !isNaN(t)
            }
            ,
            t.prototype.validateValue = function(t) {
                var e = Number(t);
                return this.ensureNumber(e) ? e : (this.error = "[CountUp] invalid start or end value: ".concat(t),
                null)
            }
            ,
            t.prototype.resetDuration = function() {
                this.startTime = null,
                this.duration = 1e3 * Number(this.options.duration),
                this.remaining = this.duration
            }
            ,
            t
        }()
    },
    55782: function(t, e, n) {
        "use strict";
        var i = n(97458)
          , r = n(58685);
        e.Z = t=>(0,
        i.jsxs)(r.Z, {
            viewBox: "0 0 48 48",
            ...t,
            children: [(0,
            i.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M14.9024 0C10.8947 0 7.87179 3.60289 8.60749 7.50271L10.3484 16.7306C4.45101 19.3061 0 23.7533 0 29.3333V32.7273C0 37.3405 3.08306 41.2029 7.39317 43.8102C11.7369 46.4379 17.6132 48 24 48C30.3868 48 36.2631 46.4379 40.6068 43.8102C44.9169 41.2029 48 37.3405 48 32.7273V29.3333C48 23.7236 43.5028 19.2593 37.5552 16.6889L39.2882 7.50271C40.0239 3.6029 37.001 0 32.9933 0C29.4567 0 26.5896 2.83809 26.5896 6.33904V14.147C25.7386 14.0899 24.8746 14.0606 24 14.0606C23.0897 14.0606 22.1908 14.0923 21.3061 14.1541V6.33904C21.3061 2.83809 18.4391 0 14.9024 0ZM17.8776 28.3637C17.8776 30.372 16.7811 32 15.4286 32C14.0761 32 12.9796 30.372 12.9796 28.3637C12.9796 26.3554 14.0761 24.7273 15.4286 24.7273C16.7811 24.7273 17.8776 26.3554 17.8776 28.3637ZM34.7757 28.3637C34.7757 30.372 33.6792 32 32.3267 32C30.9742 32 29.8777 30.372 29.8777 28.3637C29.8777 26.3554 30.9742 24.7273 32.3267 24.7273C33.6792 24.7273 34.7757 26.3554 34.7757 28.3637Z",
                fill: "url(#paint0_linear)"
            }), (0,
            i.jsx)("defs", {
                children: (0,
                i.jsxs)("linearGradient", {
                    id: "paint0_linear",
                    x1: "24",
                    y1: "0",
                    x2: "24",
                    y2: "48",
                    gradientUnits: "userSpaceOnUse",
                    children: [(0,
                    i.jsx)("stop", {
                        stopColor: "#7645D9"
                    }), (0,
                    i.jsx)("stop", {
                        offset: "1",
                        stopColor: "#5121B1"
                    })]
                })
            })]
        })
    },
    56282: function(t, e, n) {
        "use strict";
        n.d(e, {
            U: function() {
                return s
            },
            s: function() {
                return o
            }
        });
        var i = n(97458)
          , r = n(58685);
        const o = t=>(0,
        i.jsxs)(r.Z, {
            viewBox: "0 0 1660 339",
            ...t,
            children: [(0,
            i.jsx)("path", {
                d: "M804 167.023C520.5 167.023 267.5 290.522 0 304.5V339H1660V0.5C1358.83 0.5 1104 167.023 804 167.023Z",
                fill: "url(#paint0_linear_light)"
            }), (0,
            i.jsx)("defs", {
                children: (0,
                i.jsxs)("linearGradient", {
                    id: "paint0_linear_light",
                    x1: "830",
                    y1: "84",
                    x2: "830",
                    y2: "339",
                    gradientUnits: "userSpaceOnUse",
                    children: [(0,
                    i.jsx)("stop", {
                        stopColor: "white",
                        stopOpacity: "0.48"
                    }), (0,
                    i.jsx)("stop", {
                        offset: "0.566389",
                        stopColor: "white",
                        stopOpacity: "0.35"
                    }), (0,
                    i.jsx)("stop", {
                        offset: "1",
                        stopColor: "white"
                    })]
                })
            })]
        })
          , s = t=>(0,
        i.jsxs)(r.Z, {
            viewBox: "0 0 1660 339",
            ...t,
            children: [(0,
            i.jsx)("path", {
                d: "M804 166.523C520.5 166.523 267.5 290.022 0 304V338.5H1660V0C1358.83 0 1104 166.523 804 166.523Z",
                fill: "url(#paint0_linear_dark)"
            }), (0,
            i.jsx)("defs", {
                children: (0,
                i.jsxs)("linearGradient", {
                    id: "paint0_linear_dark",
                    x1: "830",
                    y1: "83.5",
                    x2: "830",
                    y2: "338.5",
                    gradientUnits: "userSpaceOnUse",
                    children: [(0,
                    i.jsx)("stop", {
                        stopColor: "#08060B",
                        stopOpacity: "0.2"
                    }), (0,
                    i.jsx)("stop", {
                        offset: "0.545554",
                        stopColor: "#08060B",
                        stopOpacity: "0.5"
                    }), (0,
                    i.jsx)("stop", {
                        offset: "1",
                        stopColor: "#08060B"
                    })]
                })
            })]
        })
    },
    41693: function(t, e, n) {
        "use strict";
        var i = n(97458)
          , r = n(52983)
          , o = n(58297)
          , s = n(52341);
        e.Z = t=>{
            let {value: e, color: n="text", decimals: a=3, isDisabled: l=!1, unit: u, prefix: c, onClick: d, strikeThrough: p, startFromValue: f=!1, ...h} = t;
            const m = (0,
            r.useMemo)((()=>c ? {
                prefix: c
            } : {}), [c])
              , g = (0,
            r.useMemo)((()=>u ? {
                suffix: u
            } : {}), [u])
              , v = (0,
            r.useMemo)((()=>e % 1 !== 0), [e]);
            return (0,
            i.jsx)(o.ZP, {
                start: f ? e : 0,
                preserveValue: !0,
                delay: 0,
                end: e,
                ...m,
                ...g,
                decimals: v ? a : 0,
                duration: 1,
                separator: ",",
                children: t=>{
                    let {countUpRef: e} = t;
                    return (0,
                    i.jsx)(s.Z, {
                        color: l ? "textDisabled" : n,
                        style: p ? {
                            textDecoration: "line-through"
                        } : void 0,
                        onClick: d,
                        ...h,
                        children: (0,
                        i.jsx)("span", {
                            ref: e
                        })
                    })
                }
            })
        }
    },
    79904: function(t, e, n) {
        "use strict";
        var i = n(21058)
          , r = n(97843)
          , o = n(13729);
        const s = r.zo.div.withConfig({
            shouldForwardProp: i.ZP
        }).withConfig({
            componentId: "sc-924b0d3b-0"
        })(["", ""], o.Dh);
        s.defaultProps = {
            p: ["16px", null, "24px"]
        },
        e.Z = s
    },
    49747: function(t, e, n) {
        "use strict";
        var i = n(97458)
          , r = n(43431);
        e.Z = t=>{
            let {children: e, ...n} = t;
            return (0,
            i.jsx)(r.ZP, {
                px: ["16px", "24px"],
                mx: "auto",
                maxWidth: "1200px",
                ...n,
                children: e
            })
        }
    },
    61777: function(t, e, n) {
        "use strict";
        n.d(e, {
            Z: function() {
                return C
            }
        });
        var i = n(97458)
          , r = n(52983)
          , o = n(97843)
          , s = n(49747)
          , a = n(20051)
          , l = n(43431);
        const u = (t,e,n)=>(0,
        o.iv)(["width:100%;height:20px;clip-path:url(", ");background:", ";& svg{display:block;}"], e, (()=>t.isDark ? (null === n || void 0 === n ? void 0 : n.dark) || (null === n || void 0 === n ? void 0 : n.light) || t.colors.background : (null === n || void 0 === n ? void 0 : n.light) || t.colors.background))
          , c = (0,
        o.zo)(l.ZP).withConfig({
            componentId: "sc-1b6f8143-0"
        })(["", " transform:", ";"], (t=>{
            let {theme: e, clipPath: n, clipFill: i} = t;
            return u(e, n, i)
        }
        ), (t=>{
            let {clipPath: e} = t;
            return "#bottomConcaveCurve" === e ? "translate(0, -13px)" : "translate(0, 1px)"
        }
        ))
          , d = (0,
        o.zo)(l.ZP).withConfig({
            componentId: "sc-1b6f8143-1"
        })(["", " transform:", ";"], (t=>{
            let {theme: e, clipPath: n, clipFill: i} = t;
            return u(e, n, i)
        }
        ), (t=>{
            let {clipPath: e} = t;
            return "#bottomConvexCurve" === e ? "translate(0, -13px)" : "translate(0, -1px)"
        }
        ))
          , p = t=>{
            let {clipFill: e} = t;
            return (0,
            i.jsx)(d, {
                clipFill: e,
                clipPath: "#topConvexCurve",
                children: (0,
                i.jsx)("svg", {
                    width: "0",
                    height: "0",
                    children: (0,
                    i.jsx)("defs", {
                        children: (0,
                        i.jsx)("clipPath", {
                            id: "topConvexCurve",
                            clipPathUnits: "objectBoundingBox",
                            children: (0,
                            i.jsx)("path", {
                                d: "M 0,1 L 0,0 L 1,0 L 1,1 C 0.75 0, .25 0, 0 1 Z"
                            })
                        })
                    })
                })
            })
        }
          , f = t=>{
            let {clipFill: e} = t;
            return (0,
            i.jsx)(d, {
                clipFill: e,
                clipPath: "#bottomConvexCurve",
                children: (0,
                i.jsx)("svg", {
                    width: "0",
                    height: "0",
                    children: (0,
                    i.jsx)("defs", {
                        children: (0,
                        i.jsx)("clipPath", {
                            id: "bottomConvexCurve",
                            clipPathUnits: "objectBoundingBox",
                            children: (0,
                            i.jsx)("path", {
                                d: "M 0,0 L 0,1 L 1,1 L 1,0 C .75 1, .25 1, 0 0 Z"
                            })
                        })
                    })
                })
            })
        }
          , h = t=>{
            let {clipFill: e} = t;
            return (0,
            i.jsx)(c, {
                clipFill: e,
                clipPath: "#topConcaveCurve",
                children: (0,
                i.jsx)("svg", {
                    width: "0",
                    height: "0",
                    children: (0,
                    i.jsx)("defs", {
                        children: (0,
                        i.jsx)("clipPath", {
                            id: "topConcaveCurve",
                            clipPathUnits: "objectBoundingBox",
                            children: (0,
                            i.jsx)("path", {
                                d: "M 0,0 L 0,1 L 1,1 L 1,0 C .75 1, .25 1, 0 0 Z"
                            })
                        })
                    })
                })
            })
        }
          , m = t=>{
            let {clipFill: e} = t;
            return (0,
            i.jsx)(c, {
                clipFill: e,
                clipPath: "#bottomConcaveCurve",
                children: (0,
                i.jsx)("svg", {
                    width: "0",
                    height: "0",
                    children: (0,
                    i.jsx)("defs", {
                        children: (0,
                        i.jsx)("clipPath", {
                            id: "bottomConcaveCurve",
                            clipPathUnits: "objectBoundingBox",
                            children: (0,
                            i.jsx)("path", {
                                d: "M 0,1 L 0,0 L 1,0 L 1,1 C .75 0.1, .25 0.1, 0 1 Z"
                            })
                        })
                    })
                })
            })
        }
          , g = o.zo.div.withConfig({
            componentId: "sc-183d958c-0"
        })(["background:", ";z-index:", ";position:relative;display:flex;align-items:center;width:100%;"], (t=>{
            let {theme: e, dividerFill: n} = t;
            return e.isDark ? (null === n || void 0 === n ? void 0 : n.dark) || (null === n || void 0 === n ? void 0 : n.light) || "none" : (null === n || void 0 === n ? void 0 : n.light) || (null === n || void 0 === n ? void 0 : n.dark) || "none"
        }
        ), (t=>{
            let {index: e} = t;
            return e
        }
        ))
          , v = o.zo.div.withConfig({
            componentId: "sc-183d958c-1"
        })(["z-index:", ";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);"], (t=>{
            let {index: e} = t;
            return e + 1
        }
        ));
        var x = t=>{
            let {index: e, dividerPosition: n, dividerComponent: r, concave: o, clipFill: s, dividerFill: a} = t;
            const l = "top" === n && !o
              , u = "bottom" === n && !o
              , c = "top" === n && o
              , d = "bottom" === n && o;
            return (0,
            i.jsxs)(g, {
                index: e,
                dividerFill: a,
                children: [r && (0,
                i.jsx)(v, {
                    index: e,
                    children: r
                }), (0,
                i.jsxs)(i.Fragment, {
                    children: [c && (0,
                    i.jsx)(h, {
                        clipFill: s
                    }), d && (0,
                    i.jsx)(m, {
                        clipFill: s
                    })]
                }), (0,
                i.jsxs)(i.Fragment, {
                    children: [l && (0,
                    i.jsx)(p, {
                        clipFill: s
                    }), u && (0,
                    i.jsx)(f, {
                        clipFill: s
                    })]
                })]
            })
        }
        ;
        const y = (0,
        o.zo)(a.Z).attrs({
            className: "page-bg"
        }).withConfig({
            componentId: "sc-9dcbf71c-0"
        })(["position:relative;flex-direction:column;align-items:center;z-index:", ";padding:", ";"], (t=>{
            let {index: e} = t;
            return e - 1
        }
        ), (t=>{
            let {padding: e} = t;
            return e
        }
        ))
          , b = (0,
        o.zo)(s.Z).withConfig({
            componentId: "sc-9dcbf71c-1"
        })(["min-height:auto;padding-top:16px;padding-bottom:16px;padding-left:8px;padding-right:8px;", "{padding-top:32px;padding-bottom:32px;}", "{padding-top:48px;padding-bottom:48px;padding-left:16px;padding-right:16px;overflow:hidden;}", "{overflow:visible;}"], (t=>{
            let {theme: e} = t;
            return e.mediaQueries.sm
        }
        ), (t=>{
            let {theme: e} = t;
            return e.mediaQueries.lg
        }
        ), (t=>{
            let {theme: e} = t;
            return e.mediaQueries.xxl
        }
        ));
        var C = t=>{
            let {children: e, svgFill: n, index: o=1, dividerComponent: s, dividerPosition: a="bottom", hasCurvedDivider: u=!0, concaveDivider: c=!1, clipFill: d, dividerFill: p, containerProps: f, innerProps: h, ...m} = t;
            const g = (0,
            r.useMemo)((()=>u ? "bottom" === a ? "48px 0 14px" : "top" === a ? "14px 0 48px" : "48px 0" : "48px 0"), [a, u]);
            return (0,
            i.jsxs)(l.ZP, {
                ...f,
                children: [u && "top" === a && (0,
                i.jsx)(x, {
                    svgFill: n,
                    index: o,
                    concave: c,
                    dividerPosition: a,
                    dividerComponent: s,
                    clipFill: d,
                    dividerFill: p
                }), (0,
                i.jsx)(y, {
                    index: o,
                    padding: g,
                    ...m,
                    children: (0,
                    i.jsx)(b, {
                        ...h,
                        children: e
                    })
                }), u && "bottom" === a && (0,
                i.jsx)(x, {
                    svgFill: n,
                    index: o,
                    concave: c,
                    dividerPosition: a,
                    dividerComponent: s,
                    clipFill: d,
                    dividerFill: p
                })]
            })
        }
    },
    58297: function(t, e, n) {
        "use strict";
        var i = n(52983)
          , r = n(14908);
        function o(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                n.push.apply(n, i)
            }
            return n
        }
        function s(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? o(Object(n), !0).forEach((function(e) {
                    a(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        }
        function a(t, e, n) {
            return (e = function(t) {
                var e = function(t, e) {
                    if ("object" !== typeof t || null === t)
                        return t;
                    var n = t[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var i = n.call(t, e || "default");
                        if ("object" !== typeof i)
                            return i;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" === typeof e ? e : String(e)
            }(e))in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n,
            t
        }
        function l() {
            return l = Object.assign ? Object.assign.bind() : function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var i in n)
                        Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
                }
                return t
            }
            ,
            l.apply(this, arguments)
        }
        function u(t, e) {
            if (null == t)
                return {};
            var n, i, r = function(t, e) {
                if (null == t)
                    return {};
                var n, i, r = {}, o = Object.keys(t);
                for (i = 0; i < o.length; i++)
                    n = o[i],
                    e.indexOf(n) >= 0 || (r[n] = t[n]);
                return r
            }(t, e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                for (i = 0; i < o.length; i++)
                    n = o[i],
                    e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n])
            }
            return r
        }
        function c(t, e) {
            return function(t) {
                if (Array.isArray(t))
                    return t
            }(t) || function(t, e) {
                var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (null != n) {
                    var i, r, o, s, a = [], l = !0, u = !1;
                    try {
                        if (o = (n = n.call(t)).next,
                        0 === e) {
                            if (Object(n) !== n)
                                return;
                            l = !1
                        } else
                            for (; !(l = (i = o.call(n)).done) && (a.push(i.value),
                            a.length !== e); l = !0)
                                ;
                    } catch (t) {
                        u = !0,
                        r = t
                    } finally {
                        try {
                            if (!l && null != n.return && (s = n.return(),
                            Object(s) !== s))
                                return
                        } finally {
                            if (u)
                                throw r
                        }
                    }
                    return a
                }
            }(t, e) || function(t, e) {
                if (!t)
                    return;
                if ("string" === typeof t)
                    return d(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                "Object" === n && t.constructor && (n = t.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(t);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return d(t, e)
            }(t, e) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function d(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, i = new Array(e); n < e; n++)
                i[n] = t[n];
            return i
        }
        var p = "undefined" !== typeof window && "undefined" !== typeof window.document && "undefined" !== typeof window.document.createElement ? i.useLayoutEffect : i.useEffect;
        function f(t) {
            var e = i.useRef(t);
            return p((function() {
                e.current = t
            }
            )),
            i.useCallback((function() {
                for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++)
                    n[i] = arguments[i];
                return e.current.apply(void 0, n)
            }
            ), [])
        }
        var h = ["ref", "startOnMount", "enableReinitialize", "delay", "onEnd", "onStart", "onPauseResume", "onReset", "onUpdate"]
          , m = {
            decimal: ".",
            separator: ",",
            delay: null,
            prefix: "",
            suffix: "",
            duration: 2,
            start: 0,
            decimals: 0,
            startOnMount: !0,
            enableReinitialize: !0,
            useEasing: !0,
            useGrouping: !0,
            useIndianSeparators: !1
        }
          , g = function(t) {
            var e = Object.fromEntries(Object.entries(t).filter((function(t) {
                return void 0 !== c(t, 2)[1]
            }
            )))
              , n = i.useMemo((function() {
                return s(s({}, m), e)
            }
            ), [t])
              , o = n.ref
              , a = n.startOnMount
              , l = n.enableReinitialize
              , d = n.delay
              , p = n.onEnd
              , g = n.onStart
              , v = n.onPauseResume
              , x = n.onReset
              , y = n.onUpdate
              , b = u(n, h)
              , C = i.useRef()
              , j = i.useRef()
              , w = i.useRef(!1)
              , V = f((function() {
                return function(t, e) {
                    var n = e.decimal
                      , i = e.decimals
                      , o = e.duration
                      , s = e.easingFn
                      , a = e.end
                      , l = e.formattingFn
                      , u = e.numerals
                      , c = e.prefix
                      , d = e.separator
                      , p = e.start
                      , f = e.suffix
                      , h = e.useEasing
                      , m = e.useGrouping
                      , g = e.useIndianSeparators
                      , v = e.enableScrollSpy
                      , x = e.scrollSpyDelay
                      , y = e.scrollSpyOnce
                      , b = e.plugin;
                    return new r.CountUp(t,a,{
                        startVal: p,
                        duration: o,
                        decimal: n,
                        decimalPlaces: i,
                        easingFn: s,
                        formattingFn: l,
                        numerals: u,
                        separator: d,
                        prefix: c,
                        suffix: f,
                        plugin: b,
                        useEasing: h,
                        useIndianSeparators: g,
                        useGrouping: m,
                        enableScrollSpy: v,
                        scrollSpyDelay: x,
                        scrollSpyOnce: y
                    })
                }("string" === typeof o ? o : o.current, b)
            }
            ))
              , F = f((function(t) {
                var e = C.current;
                if (e && !t)
                    return e;
                var n = V();
                return C.current = n,
                n
            }
            ))
              , O = f((function() {
                var t = function() {
                    return F(!0).start((function() {
                        null === p || void 0 === p || p({
                            pauseResume: E,
                            reset: P,
                            start: D,
                            update: S
                        })
                    }
                    ))
                };
                d && d > 0 ? j.current = setTimeout(t, 1e3 * d) : t(),
                null === g || void 0 === g || g({
                    pauseResume: E,
                    reset: P,
                    update: S
                })
            }
            ))
              , E = f((function() {
                F().pauseResume(),
                null === v || void 0 === v || v({
                    reset: P,
                    start: D,
                    update: S
                })
            }
            ))
              , P = f((function() {
                F().el && (j.current && clearTimeout(j.current),
                F().reset(),
                null === x || void 0 === x || x({
                    pauseResume: E,
                    start: D,
                    update: S
                }))
            }
            ))
              , S = f((function(t) {
                F().update(t),
                null === y || void 0 === y || y({
                    pauseResume: E,
                    reset: P,
                    start: D
                })
            }
            ))
              , D = f((function() {
                P(),
                O()
            }
            ))
              , R = f((function(t) {
                a && (t && P(),
                O())
            }
            ));
            return i.useEffect((function() {
                w.current ? l && R(!0) : (w.current = !0,
                R())
            }
            ), [l, w, R, d, t.start, t.suffix, t.prefix, t.duration, t.separator, t.decimals, t.decimal, t.formattingFn]),
            i.useEffect((function() {
                return function() {
                    P()
                }
            }
            ), [P]),
            {
                start: D,
                pauseResume: E,
                reset: P,
                update: S,
                getCountUp: F
            }
        }
          , v = ["className", "redraw", "containerProps", "children", "style"];
        e.ZP = function(t) {
            var e = t.className
              , n = t.redraw
              , r = t.containerProps
              , o = t.children
              , a = t.style
              , c = u(t, v)
              , d = i.useRef(null)
              , p = i.useRef(!1)
              , h = g(s(s({}, c), {}, {
                ref: d,
                startOnMount: "function" !== typeof o || 0 === t.delay,
                enableReinitialize: !1
            }))
              , m = h.start
              , x = h.reset
              , y = h.update
              , b = h.pauseResume
              , C = h.getCountUp
              , j = f((function() {
                m()
            }
            ))
              , w = f((function(e) {
                t.preserveValue || x(),
                y(e)
            }
            ))
              , V = f((function() {
                "function" !== typeof t.children || d.current instanceof Element ? C() : console.error('Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.')
            }
            ));
            i.useEffect((function() {
                V()
            }
            ), [V]),
            i.useEffect((function() {
                p.current && w(t.end)
            }
            ), [t.end, w]);
            var F = n && t;
            return i.useEffect((function() {
                n && p.current && j()
            }
            ), [j, n, F]),
            i.useEffect((function() {
                !n && p.current && j()
            }
            ), [j, n, t.start, t.suffix, t.prefix, t.duration, t.separator, t.decimals, t.decimal, t.className, t.formattingFn]),
            i.useEffect((function() {
                p.current = !0
            }
            ), []),
            "function" === typeof o ? o({
                countUpRef: d,
                start: m,
                reset: x,
                update: y,
                pauseResume: b,
                getCountUp: C
            }) : i.createElement("span", l({
                className: e,
                ref: d,
                style: a
            }, r), "undefined" !== typeof t.start ? C().formattingFn(t.start) : "")
        }
    },
    93452: function() {}
}]);
