"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[8172], {
    97364: function(e, t, s) {
        function r(e) {
            return null !== e && "object" === typeof e && "constructor"in e && e.constructor === Object
        }
        function i(e, t) {
            void 0 === e && (e = {}),
            void 0 === t && (t = {}),
            Object.keys(t).forEach((s=>{
                "undefined" === typeof e[s] ? e[s] = t[s] : r(t[s]) && r(e[s]) && Object.keys(t[s]).length > 0 && i(e[s], t[s])
            }
            ))
        }
        s.d(t, {
            a: function() {
                return o
            },
            g: function() {
                return a
            }
        });
        const n = {
            body: {},
            addEventListener() {},
            removeEventListener() {},
            activeElement: {
                blur() {},
                nodeName: ""
            },
            querySelector: ()=>null,
            querySelectorAll: ()=>[],
            getElementById: ()=>null,
            createEvent: ()=>({
                initEvent() {}
            }),
            createElement: ()=>({
                children: [],
                childNodes: [],
                style: {},
                setAttribute() {},
                getElementsByTagName: ()=>[]
            }),
            createElementNS: ()=>({}),
            importNode: ()=>null,
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            }
        };
        function a() {
            const e = "undefined" !== typeof document ? document : {};
            return i(e, n),
            e
        }
        const l = {
            document: n,
            navigator: {
                userAgent: ""
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            },
            history: {
                replaceState() {},
                pushState() {},
                go() {},
                back() {}
            },
            CustomEvent: function() {
                return this
            },
            addEventListener() {},
            removeEventListener() {},
            getComputedStyle: ()=>({
                getPropertyValue: ()=>""
            }),
            Image() {},
            Date() {},
            screen: {},
            setTimeout() {},
            clearTimeout() {},
            matchMedia: ()=>({}),
            requestAnimationFrame: e=>"undefined" === typeof setTimeout ? (e(),
            null) : setTimeout(e, 0),
            cancelAnimationFrame(e) {
                "undefined" !== typeof setTimeout && clearTimeout(e)
            }
        };
        function o() {
            const e = "undefined" !== typeof window ? window : {};
            return i(e, l),
            e
        }
    },
    95122: function(e, t, s) {
        s.d(t, {
            a: function() {
                return T
            },
            b: function() {
                return v
            },
            c: function() {
                return m
            },
            d: function() {
                return a
            },
            e: function() {
                return f
            },
            f: function() {
                return E
            },
            g: function() {
                return b
            },
            i: function() {
                return l
            },
            j: function() {
                return y
            },
            l: function() {
                return u
            },
            m: function() {
                return S
            },
            n: function() {
                return n
            },
            o: function() {
                return w
            },
            p: function() {
                return g
            },
            q: function() {
                return p
            },
            r: function() {
                return h
            },
            s: function() {
                return c
            },
            t: function() {
                return d
            },
            u: function() {
                return i
            }
        });
        var r = s(97364);
        function i(e) {
            const t = e;
            Object.keys(t).forEach((e=>{
                try {
                    t[e] = null
                } catch (s) {}
                try {
                    delete t[e]
                } catch (s) {}
            }
            ))
        }
        function n(e, t) {
            return void 0 === t && (t = 0),
            setTimeout(e, t)
        }
        function a() {
            return Date.now()
        }
        function l(e, t) {
            void 0 === t && (t = "x");
            const s = (0,
            r.a)();
            let i, n, a;
            const l = function(e) {
                const t = (0,
                r.a)();
                let s;
                return t.getComputedStyle && (s = t.getComputedStyle(e, null)),
                !s && e.currentStyle && (s = e.currentStyle),
                s || (s = e.style),
                s
            }(e);
            return s.WebKitCSSMatrix ? (n = l.transform || l.webkitTransform,
            n.split(",").length > 6 && (n = n.split(", ").map((e=>e.replace(",", "."))).join(", ")),
            a = new s.WebKitCSSMatrix("none" === n ? "" : n)) : (a = l.MozTransform || l.OTransform || l.MsTransform || l.msTransform || l.transform || l.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"),
            i = a.toString().split(",")),
            "x" === t && (n = s.WebKitCSSMatrix ? a.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])),
            "y" === t && (n = s.WebKitCSSMatrix ? a.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])),
            n || 0
        }
        function o(e) {
            return "object" === typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
        }
        function d() {
            const e = Object(arguments.length <= 0 ? void 0 : arguments[0])
              , t = ["__proto__", "constructor", "prototype"];
            for (let r = 1; r < arguments.length; r += 1) {
                const i = r < 0 || arguments.length <= r ? void 0 : arguments[r];
                if (void 0 !== i && null !== i && (s = i,
                !("undefined" !== typeof window && "undefined" !== typeof window.HTMLElement ? s instanceof HTMLElement : s && (1 === s.nodeType || 11 === s.nodeType)))) {
                    const s = Object.keys(Object(i)).filter((e=>t.indexOf(e) < 0));
                    for (let t = 0, r = s.length; t < r; t += 1) {
                        const r = s[t]
                          , n = Object.getOwnPropertyDescriptor(i, r);
                        void 0 !== n && n.enumerable && (o(e[r]) && o(i[r]) ? i[r].__swiper__ ? e[r] = i[r] : d(e[r], i[r]) : !o(e[r]) && o(i[r]) ? (e[r] = {},
                        i[r].__swiper__ ? e[r] = i[r] : d(e[r], i[r])) : e[r] = i[r])
                    }
                }
            }
            var s;
            return e
        }
        function c(e, t, s) {
            e.style.setProperty(t, s)
        }
        function p(e) {
            let {swiper: t, targetPosition: s, side: i} = e;
            const n = (0,
            r.a)()
              , a = -t.translate;
            let l, o = null;
            const d = t.params.speed;
            t.wrapperEl.style.scrollSnapType = "none",
            n.cancelAnimationFrame(t.cssModeFrameID);
            const c = s > a ? "next" : "prev"
              , p = (e,t)=>"next" === c && e >= t || "prev" === c && e <= t
              , u = ()=>{
                l = (new Date).getTime(),
                null === o && (o = l);
                const e = Math.max(Math.min((l - o) / d, 1), 0)
                  , r = .5 - Math.cos(e * Math.PI) / 2;
                let c = a + r * (s - a);
                if (p(c, s) && (c = s),
                t.wrapperEl.scrollTo({
                    [i]: c
                }),
                p(c, s))
                    return t.wrapperEl.style.overflow = "hidden",
                    t.wrapperEl.style.scrollSnapType = "",
                    setTimeout((()=>{
                        t.wrapperEl.style.overflow = "",
                        t.wrapperEl.scrollTo({
                            [i]: c
                        })
                    }
                    )),
                    void n.cancelAnimationFrame(t.cssModeFrameID);
                t.cssModeFrameID = n.requestAnimationFrame(u)
            }
            ;
            u()
        }
        function u(e) {
            return e.querySelector(".swiper-slide-transform") || e.shadowRoot && e.shadowRoot.querySelector(".swiper-slide-transform") || e
        }
        function f(e, t) {
            return void 0 === t && (t = ""),
            [...e.children].filter((e=>e.matches(t)))
        }
        function h(e) {
            try {
                return void console.warn(e)
            } catch (t) {}
        }
        function m(e, t) {
            void 0 === t && (t = []);
            const s = document.createElement(e);
            return s.classList.add(...Array.isArray(t) ? t : function(e) {
                return void 0 === e && (e = ""),
                e.trim().split(" ").filter((e=>!!e.trim()))
            }(t)),
            s
        }
        function v(e) {
            const t = (0,
            r.a)()
              , s = (0,
            r.g)()
              , i = e.getBoundingClientRect()
              , n = s.body
              , a = e.clientTop || n.clientTop || 0
              , l = e.clientLeft || n.clientLeft || 0
              , o = e === t ? t.scrollY : e.scrollTop
              , d = e === t ? t.scrollX : e.scrollLeft;
            return {
                top: i.top + o - a,
                left: i.left + d - l
            }
        }
        function g(e, t) {
            const s = [];
            for (; e.previousElementSibling; ) {
                const r = e.previousElementSibling;
                t ? r.matches(t) && s.push(r) : s.push(r),
                e = r
            }
            return s
        }
        function w(e, t) {
            const s = [];
            for (; e.nextElementSibling; ) {
                const r = e.nextElementSibling;
                t ? r.matches(t) && s.push(r) : s.push(r),
                e = r
            }
            return s
        }
        function S(e, t) {
            return (0,
            r.a)().getComputedStyle(e, null).getPropertyValue(t)
        }
        function b(e) {
            let t, s = e;
            if (s) {
                for (t = 0; null !== (s = s.previousSibling); )
                    1 === s.nodeType && (t += 1);
                return t
            }
        }
        function T(e, t) {
            const s = [];
            let r = e.parentElement;
            for (; r; )
                t ? r.matches(t) && s.push(r) : s.push(r),
                r = r.parentElement;
            return s
        }
        function y(e, t) {
            t && e.addEventListener("transitionend", (function s(r) {
                r.target === e && (t.call(e, r),
                e.removeEventListener("transitionend", s))
            }
            ))
        }
        function E(e, t, s) {
            const i = (0,
            r.a)();
            return s ? e["width" === t ? "offsetWidth" : "offsetHeight"] + parseFloat(i.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-right" : "margin-top")) + parseFloat(i.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-left" : "margin-bottom")) : e.offsetWidth
        }
    },
    58172: function(e, t, s) {
        s.d(t, {
            tq: function() {
                return Q
            },
            o5: function() {
                return ee
            },
            oc: function() {
                return J
            }
        });
        var r = s(52983)
          , i = s(97364)
          , n = s(95122);
        let a, l, o;
        function d() {
            return a || (a = function() {
                const e = (0,
                i.a)()
                  , t = (0,
                i.g)();
                return {
                    smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior"in t.documentElement.style,
                    touch: !!("ontouchstart"in e || e.DocumentTouch && t instanceof e.DocumentTouch)
                }
            }()),
            a
        }
        function c(e) {
            return void 0 === e && (e = {}),
            l || (l = function(e) {
                let {userAgent: t} = void 0 === e ? {} : e;
                const s = d()
                  , r = (0,
                i.a)()
                  , n = r.navigator.platform
                  , a = t || r.navigator.userAgent
                  , l = {
                    ios: !1,
                    android: !1
                }
                  , o = r.screen.width
                  , c = r.screen.height
                  , p = a.match(/(Android);?[\s\/]+([\d.]+)?/);
                let u = a.match(/(iPad).*OS\s([\d_]+)/);
                const f = a.match(/(iPod)(.*OS\s([\d_]+))?/)
                  , h = !u && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/)
                  , m = "Win32" === n;
                let v = "MacIntel" === n;
                return !u && v && s.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${o}x${c}`) >= 0 && (u = a.match(/(Version)\/([\d.]+)/),
                u || (u = [0, 1, "13_0_0"]),
                v = !1),
                p && !m && (l.os = "android",
                l.android = !0),
                (u || h || f) && (l.os = "ios",
                l.ios = !0),
                l
            }(e)),
            l
        }
        function p() {
            return o || (o = function() {
                const e = (0,
                i.a)();
                let t = !1;
                function s() {
                    const t = e.navigator.userAgent.toLowerCase();
                    return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
                }
                if (s()) {
                    const s = String(e.navigator.userAgent);
                    if (s.includes("Version/")) {
                        const [e,r] = s.split("Version/")[1].split(" ")[0].split(".").map((e=>Number(e)));
                        t = e < 16 || 16 === e && r < 2
                    }
                }
                return {
                    isSafari: t || s(),
                    needPerspectiveFix: t,
                    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
                }
            }()),
            o
        }
        var u = {
            on(e, t, s) {
                const r = this;
                if (!r.eventsListeners || r.destroyed)
                    return r;
                if ("function" !== typeof t)
                    return r;
                const i = s ? "unshift" : "push";
                return e.split(" ").forEach((e=>{
                    r.eventsListeners[e] || (r.eventsListeners[e] = []),
                    r.eventsListeners[e][i](t)
                }
                )),
                r
            },
            once(e, t, s) {
                const r = this;
                if (!r.eventsListeners || r.destroyed)
                    return r;
                if ("function" !== typeof t)
                    return r;
                function i() {
                    r.off(e, i),
                    i.__emitterProxy && delete i.__emitterProxy;
                    for (var s = arguments.length, n = new Array(s), a = 0; a < s; a++)
                        n[a] = arguments[a];
                    t.apply(r, n)
                }
                return i.__emitterProxy = t,
                r.on(e, i, s)
            },
            onAny(e, t) {
                const s = this;
                if (!s.eventsListeners || s.destroyed)
                    return s;
                if ("function" !== typeof e)
                    return s;
                const r = t ? "unshift" : "push";
                return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[r](e),
                s
            },
            offAny(e) {
                const t = this;
                if (!t.eventsListeners || t.destroyed)
                    return t;
                if (!t.eventsAnyListeners)
                    return t;
                const s = t.eventsAnyListeners.indexOf(e);
                return s >= 0 && t.eventsAnyListeners.splice(s, 1),
                t
            },
            off(e, t) {
                const s = this;
                return !s.eventsListeners || s.destroyed ? s : s.eventsListeners ? (e.split(" ").forEach((e=>{
                    "undefined" === typeof t ? s.eventsListeners[e] = [] : s.eventsListeners[e] && s.eventsListeners[e].forEach(((r,i)=>{
                        (r === t || r.__emitterProxy && r.__emitterProxy === t) && s.eventsListeners[e].splice(i, 1)
                    }
                    ))
                }
                )),
                s) : s
            },
            emit() {
                const e = this;
                if (!e.eventsListeners || e.destroyed)
                    return e;
                if (!e.eventsListeners)
                    return e;
                let t, s, r;
                for (var i = arguments.length, n = new Array(i), a = 0; a < i; a++)
                    n[a] = arguments[a];
                "string" === typeof n[0] || Array.isArray(n[0]) ? (t = n[0],
                s = n.slice(1, n.length),
                r = e) : (t = n[0].events,
                s = n[0].data,
                r = n[0].context || e),
                s.unshift(r);
                return (Array.isArray(t) ? t : t.split(" ")).forEach((t=>{
                    e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach((e=>{
                        e.apply(r, [t, ...s])
                    }
                    )),
                    e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach((e=>{
                        e.apply(r, s)
                    }
                    ))
                }
                )),
                e
            }
        };
        const f = (e,t)=>{
            if (!e || e.destroyed || !e.params)
                return;
            const s = t.closest(e.isElement ? "swiper-slide" : `.${e.params.slideClass}`);
            if (s) {
                let t = s.querySelector(`.${e.params.lazyPreloaderClass}`);
                !t && e.isElement && (s.shadowRoot ? t = s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`) : requestAnimationFrame((()=>{
                    s.shadowRoot && (t = s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),
                    t && t.remove())
                }
                ))),
                t && t.remove()
            }
        }
          , h = (e,t)=>{
            if (!e.slides[t])
                return;
            const s = e.slides[t].querySelector('[loading="lazy"]');
            s && s.removeAttribute("loading")
        }
          , m = e=>{
            if (!e || e.destroyed || !e.params)
                return;
            let t = e.params.lazyPreloadPrevNext;
            const s = e.slides.length;
            if (!s || !t || t < 0)
                return;
            t = Math.min(t, s);
            const r = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView)
              , i = e.activeIndex;
            if (e.params.grid && e.params.grid.rows > 1) {
                const s = i
                  , n = [s - t];
                return n.push(...Array.from({
                    length: t
                }).map(((e,t)=>s + r + t))),
                void e.slides.forEach(((t,s)=>{
                    n.includes(t.column) && h(e, s)
                }
                ))
            }
            const n = i + r - 1;
            if (e.params.rewind || e.params.loop)
                for (let a = i - t; a <= n + t; a += 1) {
                    const t = (a % s + s) % s;
                    (t < i || t > n) && h(e, t)
                }
            else
                for (let a = Math.max(i - t, 0); a <= Math.min(n + t, s - 1); a += 1)
                    a !== i && (a > n || a < i) && h(e, a)
        }
        ;
        var v = {
            updateSize: function() {
                const e = this;
                let t, s;
                const r = e.el;
                t = "undefined" !== typeof e.params.width && null !== e.params.width ? e.params.width : r.clientWidth,
                s = "undefined" !== typeof e.params.height && null !== e.params.height ? e.params.height : r.clientHeight,
                0 === t && e.isHorizontal() || 0 === s && e.isVertical() || (t = t - parseInt((0,
                n.m)(r, "padding-left") || 0, 10) - parseInt((0,
                n.m)(r, "padding-right") || 0, 10),
                s = s - parseInt((0,
                n.m)(r, "padding-top") || 0, 10) - parseInt((0,
                n.m)(r, "padding-bottom") || 0, 10),
                Number.isNaN(t) && (t = 0),
                Number.isNaN(s) && (s = 0),
                Object.assign(e, {
                    width: t,
                    height: s,
                    size: e.isHorizontal() ? t : s
                }))
            },
            updateSlides: function() {
                const e = this;
                function t(t, s) {
                    return parseFloat(t.getPropertyValue(e.getDirectionLabel(s)) || 0)
                }
                const s = e.params
                  , {wrapperEl: r, slidesEl: i, size: a, rtlTranslate: l, wrongRTL: o} = e
                  , d = e.virtual && s.virtual.enabled
                  , c = d ? e.virtual.slides.length : e.slides.length
                  , p = (0,
                n.e)(i, `.${e.params.slideClass}, swiper-slide`)
                  , u = d ? e.virtual.slides.length : p.length;
                let f = [];
                const h = []
                  , m = [];
                let v = s.slidesOffsetBefore;
                "function" === typeof v && (v = s.slidesOffsetBefore.call(e));
                let g = s.slidesOffsetAfter;
                "function" === typeof g && (g = s.slidesOffsetAfter.call(e));
                const w = e.snapGrid.length
                  , S = e.slidesGrid.length;
                let b = s.spaceBetween
                  , T = -v
                  , y = 0
                  , E = 0;
                if ("undefined" === typeof a)
                    return;
                "string" === typeof b && b.indexOf("%") >= 0 ? b = parseFloat(b.replace("%", "")) / 100 * a : "string" === typeof b && (b = parseFloat(b)),
                e.virtualSize = -b,
                p.forEach((e=>{
                    l ? e.style.marginLeft = "" : e.style.marginRight = "",
                    e.style.marginBottom = "",
                    e.style.marginTop = ""
                }
                )),
                s.centeredSlides && s.cssMode && ((0,
                n.s)(r, "--swiper-centered-offset-before", ""),
                (0,
                n.s)(r, "--swiper-centered-offset-after", ""));
                const x = s.grid && s.grid.rows > 1 && e.grid;
                let C;
                x ? e.grid.initSlides(p) : e.grid && e.grid.unsetSlides();
                const P = "auto" === s.slidesPerView && s.breakpoints && Object.keys(s.breakpoints).filter((e=>"undefined" !== typeof s.breakpoints[e].slidesPerView)).length > 0;
                for (let M = 0; M < u; M += 1) {
                    let r;
                    if (C = 0,
                    p[M] && (r = p[M]),
                    x && e.grid.updateSlide(M, r, p),
                    !p[M] || "none" !== (0,
                    n.m)(r, "display")) {
                        if ("auto" === s.slidesPerView) {
                            P && (p[M].style[e.getDirectionLabel("width")] = "");
                            const i = getComputedStyle(r)
                              , a = r.style.transform
                              , l = r.style.webkitTransform;
                            if (a && (r.style.transform = "none"),
                            l && (r.style.webkitTransform = "none"),
                            s.roundLengths)
                                C = e.isHorizontal() ? (0,
                                n.f)(r, "width", !0) : (0,
                                n.f)(r, "height", !0);
                            else {
                                const e = t(i, "width")
                                  , s = t(i, "padding-left")
                                  , n = t(i, "padding-right")
                                  , a = t(i, "margin-left")
                                  , l = t(i, "margin-right")
                                  , o = i.getPropertyValue("box-sizing");
                                if (o && "border-box" === o)
                                    C = e + a + l;
                                else {
                                    const {clientWidth: t, offsetWidth: i} = r;
                                    C = e + s + n + a + l + (i - t)
                                }
                            }
                            a && (r.style.transform = a),
                            l && (r.style.webkitTransform = l),
                            s.roundLengths && (C = Math.floor(C))
                        } else
                            C = (a - (s.slidesPerView - 1) * b) / s.slidesPerView,
                            s.roundLengths && (C = Math.floor(C)),
                            p[M] && (p[M].style[e.getDirectionLabel("width")] = `${C}px`);
                        p[M] && (p[M].swiperSlideSize = C),
                        m.push(C),
                        s.centeredSlides ? (T = T + C / 2 + y / 2 + b,
                        0 === y && 0 !== M && (T = T - a / 2 - b),
                        0 === M && (T = T - a / 2 - b),
                        Math.abs(T) < .001 && (T = 0),
                        s.roundLengths && (T = Math.floor(T)),
                        E % s.slidesPerGroup === 0 && f.push(T),
                        h.push(T)) : (s.roundLengths && (T = Math.floor(T)),
                        (E - Math.min(e.params.slidesPerGroupSkip, E)) % e.params.slidesPerGroup === 0 && f.push(T),
                        h.push(T),
                        T = T + C + b),
                        e.virtualSize += C + b,
                        y = C,
                        E += 1
                    }
                }
                if (e.virtualSize = Math.max(e.virtualSize, a) + g,
                l && o && ("slide" === s.effect || "coverflow" === s.effect) && (r.style.width = `${e.virtualSize + b}px`),
                s.setWrapperSize && (r.style[e.getDirectionLabel("width")] = `${e.virtualSize + b}px`),
                x && e.grid.updateWrapperSize(C, f),
                !s.centeredSlides) {
                    const t = [];
                    for (let r = 0; r < f.length; r += 1) {
                        let i = f[r];
                        s.roundLengths && (i = Math.floor(i)),
                        f[r] <= e.virtualSize - a && t.push(i)
                    }
                    f = t,
                    Math.floor(e.virtualSize - a) - Math.floor(f[f.length - 1]) > 1 && f.push(e.virtualSize - a)
                }
                if (d && s.loop) {
                    const t = m[0] + b;
                    if (s.slidesPerGroup > 1) {
                        const r = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / s.slidesPerGroup)
                          , i = t * s.slidesPerGroup;
                        for (let e = 0; e < r; e += 1)
                            f.push(f[f.length - 1] + i)
                    }
                    for (let r = 0; r < e.virtual.slidesBefore + e.virtual.slidesAfter; r += 1)
                        1 === s.slidesPerGroup && f.push(f[f.length - 1] + t),
                        h.push(h[h.length - 1] + t),
                        e.virtualSize += t
                }
                if (0 === f.length && (f = [0]),
                0 !== b) {
                    const t = e.isHorizontal() && l ? "marginLeft" : e.getDirectionLabel("marginRight");
                    p.filter(((e,t)=>!(s.cssMode && !s.loop) || t !== p.length - 1)).forEach((e=>{
                        e.style[t] = `${b}px`
                    }
                    ))
                }
                if (s.centeredSlides && s.centeredSlidesBounds) {
                    let e = 0;
                    m.forEach((t=>{
                        e += t + (b || 0)
                    }
                    )),
                    e -= b;
                    const t = e - a;
                    f = f.map((e=>e <= 0 ? -v : e > t ? t + g : e))
                }
                if (s.centerInsufficientSlides) {
                    let e = 0;
                    if (m.forEach((t=>{
                        e += t + (b || 0)
                    }
                    )),
                    e -= b,
                    e < a) {
                        const t = (a - e) / 2;
                        f.forEach(((e,s)=>{
                            f[s] = e - t
                        }
                        )),
                        h.forEach(((e,s)=>{
                            h[s] = e + t
                        }
                        ))
                    }
                }
                if (Object.assign(e, {
                    slides: p,
                    snapGrid: f,
                    slidesGrid: h,
                    slidesSizesGrid: m
                }),
                s.centeredSlides && s.cssMode && !s.centeredSlidesBounds) {
                    (0,
                    n.s)(r, "--swiper-centered-offset-before", -f[0] + "px"),
                    (0,
                    n.s)(r, "--swiper-centered-offset-after", e.size / 2 - m[m.length - 1] / 2 + "px");
                    const t = -e.snapGrid[0]
                      , s = -e.slidesGrid[0];
                    e.snapGrid = e.snapGrid.map((e=>e + t)),
                    e.slidesGrid = e.slidesGrid.map((e=>e + s))
                }
                if (u !== c && e.emit("slidesLengthChange"),
                f.length !== w && (e.params.watchOverflow && e.checkOverflow(),
                e.emit("snapGridLengthChange")),
                h.length !== S && e.emit("slidesGridLengthChange"),
                s.watchSlidesProgress && e.updateSlidesOffset(),
                e.emit("slidesUpdated"),
                !d && !s.cssMode && ("slide" === s.effect || "fade" === s.effect)) {
                    const t = `${s.containerModifierClass}backface-hidden`
                      , r = e.el.classList.contains(t);
                    u <= s.maxBackfaceHiddenSlides ? r || e.el.classList.add(t) : r && e.el.classList.remove(t)
                }
            },
            updateAutoHeight: function(e) {
                const t = this
                  , s = []
                  , r = t.virtual && t.params.virtual.enabled;
                let i, n = 0;
                "number" === typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
                const a = e=>r ? t.slides[t.getSlideIndexByData(e)] : t.slides[e];
                if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
                    if (t.params.centeredSlides)
                        (t.visibleSlides || []).forEach((e=>{
                            s.push(e)
                        }
                        ));
                    else
                        for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
                            const e = t.activeIndex + i;
                            if (e > t.slides.length && !r)
                                break;
                            s.push(a(e))
                        }
                else
                    s.push(a(t.activeIndex));
                for (i = 0; i < s.length; i += 1)
                    if ("undefined" !== typeof s[i]) {
                        const e = s[i].offsetHeight;
                        n = e > n ? e : n
                    }
                (n || 0 === n) && (t.wrapperEl.style.height = `${n}px`)
            },
            updateSlidesOffset: function() {
                const e = this
                  , t = e.slides
                  , s = e.isElement ? e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop : 0;
                for (let r = 0; r < t.length; r += 1)
                    t[r].swiperSlideOffset = (e.isHorizontal() ? t[r].offsetLeft : t[r].offsetTop) - s - e.cssOverflowAdjustment()
            },
            updateSlidesProgress: function(e) {
                void 0 === e && (e = this && this.translate || 0);
                const t = this
                  , s = t.params
                  , {slides: r, rtlTranslate: i, snapGrid: n} = t;
                if (0 === r.length)
                    return;
                "undefined" === typeof r[0].swiperSlideOffset && t.updateSlidesOffset();
                let a = -e;
                i && (a = e),
                r.forEach((e=>{
                    e.classList.remove(s.slideVisibleClass, s.slideFullyVisibleClass)
                }
                )),
                t.visibleSlidesIndexes = [],
                t.visibleSlides = [];
                let l = s.spaceBetween;
                "string" === typeof l && l.indexOf("%") >= 0 ? l = parseFloat(l.replace("%", "")) / 100 * t.size : "string" === typeof l && (l = parseFloat(l));
                for (let o = 0; o < r.length; o += 1) {
                    const e = r[o];
                    let d = e.swiperSlideOffset;
                    s.cssMode && s.centeredSlides && (d -= r[0].swiperSlideOffset);
                    const c = (a + (s.centeredSlides ? t.minTranslate() : 0) - d) / (e.swiperSlideSize + l)
                      , p = (a - n[0] + (s.centeredSlides ? t.minTranslate() : 0) - d) / (e.swiperSlideSize + l)
                      , u = -(a - d)
                      , f = u + t.slidesSizesGrid[o]
                      , h = u >= 0 && u <= t.size - t.slidesSizesGrid[o];
                    (u >= 0 && u < t.size - 1 || f > 1 && f <= t.size || u <= 0 && f >= t.size) && (t.visibleSlides.push(e),
                    t.visibleSlidesIndexes.push(o),
                    r[o].classList.add(s.slideVisibleClass)),
                    h && r[o].classList.add(s.slideFullyVisibleClass),
                    e.progress = i ? -c : c,
                    e.originalProgress = i ? -p : p
                }
            },
            updateProgress: function(e) {
                const t = this;
                if ("undefined" === typeof e) {
                    const s = t.rtlTranslate ? -1 : 1;
                    e = t && t.translate && t.translate * s || 0
                }
                const s = t.params
                  , r = t.maxTranslate() - t.minTranslate();
                let {progress: i, isBeginning: n, isEnd: a, progressLoop: l} = t;
                const o = n
                  , d = a;
                if (0 === r)
                    i = 0,
                    n = !0,
                    a = !0;
                else {
                    i = (e - t.minTranslate()) / r;
                    const s = Math.abs(e - t.minTranslate()) < 1
                      , l = Math.abs(e - t.maxTranslate()) < 1;
                    n = s || i <= 0,
                    a = l || i >= 1,
                    s && (i = 0),
                    l && (i = 1)
                }
                if (s.loop) {
                    const s = t.getSlideIndexByData(0)
                      , r = t.getSlideIndexByData(t.slides.length - 1)
                      , i = t.slidesGrid[s]
                      , n = t.slidesGrid[r]
                      , a = t.slidesGrid[t.slidesGrid.length - 1]
                      , o = Math.abs(e);
                    l = o >= i ? (o - i) / a : (o + a - n) / a,
                    l > 1 && (l -= 1)
                }
                Object.assign(t, {
                    progress: i,
                    progressLoop: l,
                    isBeginning: n,
                    isEnd: a
                }),
                (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e),
                n && !o && t.emit("reachBeginning toEdge"),
                a && !d && t.emit("reachEnd toEdge"),
                (o && !n || d && !a) && t.emit("fromEdge"),
                t.emit("progress", i)
            },
            updateSlidesClasses: function() {
                const e = this
                  , {slides: t, params: s, slidesEl: r, activeIndex: i} = e
                  , a = e.virtual && s.virtual.enabled
                  , l = e.grid && s.grid && s.grid.rows > 1
                  , o = e=>(0,
                n.e)(r, `.${s.slideClass}${e}, swiper-slide${e}`)[0];
                let d, c, p;
                if (t.forEach((e=>{
                    e.classList.remove(s.slideActiveClass, s.slideNextClass, s.slidePrevClass)
                }
                )),
                a)
                    if (s.loop) {
                        let t = i - e.virtual.slidesBefore;
                        t < 0 && (t = e.virtual.slides.length + t),
                        t >= e.virtual.slides.length && (t -= e.virtual.slides.length),
                        d = o(`[data-swiper-slide-index="${t}"]`)
                    } else
                        d = o(`[data-swiper-slide-index="${i}"]`);
                else
                    l ? (d = t.filter((e=>e.column === i))[0],
                    p = t.filter((e=>e.column === i + 1))[0],
                    c = t.filter((e=>e.column === i - 1))[0]) : d = t[i];
                d && (d.classList.add(s.slideActiveClass),
                l ? (p && p.classList.add(s.slideNextClass),
                c && c.classList.add(s.slidePrevClass)) : (p = (0,
                n.o)(d, `.${s.slideClass}, swiper-slide`)[0],
                s.loop && !p && (p = t[0]),
                p && p.classList.add(s.slideNextClass),
                c = (0,
                n.p)(d, `.${s.slideClass}, swiper-slide`)[0],
                s.loop && 0 === !c && (c = t[t.length - 1]),
                c && c.classList.add(s.slidePrevClass))),
                e.emitSlidesClasses()
            },
            updateActiveIndex: function(e) {
                const t = this
                  , s = t.rtlTranslate ? t.translate : -t.translate
                  , {snapGrid: r, params: i, activeIndex: n, realIndex: a, snapIndex: l} = t;
                let o, d = e;
                const c = e=>{
                    let s = e - t.virtual.slidesBefore;
                    return s < 0 && (s = t.virtual.slides.length + s),
                    s >= t.virtual.slides.length && (s -= t.virtual.slides.length),
                    s
                }
                ;
                if ("undefined" === typeof d && (d = function(e) {
                    const {slidesGrid: t, params: s} = e
                      , r = e.rtlTranslate ? e.translate : -e.translate;
                    let i;
                    for (let n = 0; n < t.length; n += 1)
                        "undefined" !== typeof t[n + 1] ? r >= t[n] && r < t[n + 1] - (t[n + 1] - t[n]) / 2 ? i = n : r >= t[n] && r < t[n + 1] && (i = n + 1) : r >= t[n] && (i = n);
                    return s.normalizeSlideIndex && (i < 0 || "undefined" === typeof i) && (i = 0),
                    i
                }(t)),
                r.indexOf(s) >= 0)
                    o = r.indexOf(s);
                else {
                    const e = Math.min(i.slidesPerGroupSkip, d);
                    o = e + Math.floor((d - e) / i.slidesPerGroup)
                }
                if (o >= r.length && (o = r.length - 1),
                d === n && !t.params.loop)
                    return void (o !== l && (t.snapIndex = o,
                    t.emit("snapIndexChange")));
                if (d === n && t.params.loop && t.virtual && t.params.virtual.enabled)
                    return void (t.realIndex = c(d));
                const p = t.grid && i.grid && i.grid.rows > 1;
                let u;
                if (t.virtual && i.virtual.enabled && i.loop)
                    u = c(d);
                else if (p) {
                    const e = t.slides.filter((e=>e.column === d))[0];
                    let s = parseInt(e.getAttribute("data-swiper-slide-index"), 10);
                    Number.isNaN(s) && (s = Math.max(t.slides.indexOf(e), 0)),
                    u = Math.floor(s / i.grid.rows)
                } else if (t.slides[d]) {
                    const e = t.slides[d].getAttribute("data-swiper-slide-index");
                    u = e ? parseInt(e, 10) : d
                } else
                    u = d;
                Object.assign(t, {
                    previousSnapIndex: l,
                    snapIndex: o,
                    previousRealIndex: a,
                    realIndex: u,
                    previousIndex: n,
                    activeIndex: d
                }),
                t.initialized && m(t),
                t.emit("activeIndexChange"),
                t.emit("snapIndexChange"),
                (t.initialized || t.params.runCallbacksOnInit) && (a !== u && t.emit("realIndexChange"),
                t.emit("slideChange"))
            },
            updateClickedSlide: function(e, t) {
                const s = this
                  , r = s.params;
                let i = e.closest(`.${r.slideClass}, swiper-slide`);
                !i && s.isElement && t && t.length > 1 && t.includes(e) && [...t.slice(t.indexOf(e) + 1, t.length)].forEach((e=>{
                    !i && e.matches && e.matches(`.${r.slideClass}, swiper-slide`) && (i = e)
                }
                ));
                let n, a = !1;
                if (i)
                    for (let l = 0; l < s.slides.length; l += 1)
                        if (s.slides[l] === i) {
                            a = !0,
                            n = l;
                            break
                        }
                if (!i || !a)
                    return s.clickedSlide = void 0,
                    void (s.clickedIndex = void 0);
                s.clickedSlide = i,
                s.virtual && s.params.virtual.enabled ? s.clickedIndex = parseInt(i.getAttribute("data-swiper-slide-index"), 10) : s.clickedIndex = n,
                r.slideToClickedSlide && void 0 !== s.clickedIndex && s.clickedIndex !== s.activeIndex && s.slideToClickedSlide()
            }
        };
        var g = {
            getTranslate: function(e) {
                void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                const {params: t, rtlTranslate: s, translate: r, wrapperEl: i} = this;
                if (t.virtualTranslate)
                    return s ? -r : r;
                if (t.cssMode)
                    return r;
                let a = (0,
                n.i)(i, e);
                return a += this.cssOverflowAdjustment(),
                s && (a = -a),
                a || 0
            },
            setTranslate: function(e, t) {
                const s = this
                  , {rtlTranslate: r, params: i, wrapperEl: n, progress: a} = s;
                let l, o = 0, d = 0;
                s.isHorizontal() ? o = r ? -e : e : d = e,
                i.roundLengths && (o = Math.floor(o),
                d = Math.floor(d)),
                s.previousTranslate = s.translate,
                s.translate = s.isHorizontal() ? o : d,
                i.cssMode ? n[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -o : -d : i.virtualTranslate || (s.isHorizontal() ? o -= s.cssOverflowAdjustment() : d -= s.cssOverflowAdjustment(),
                n.style.transform = `translate3d(${o}px, ${d}px, 0px)`);
                const c = s.maxTranslate() - s.minTranslate();
                l = 0 === c ? 0 : (e - s.minTranslate()) / c,
                l !== a && s.updateProgress(e),
                s.emit("setTranslate", s.translate, t)
            },
            minTranslate: function() {
                return -this.snapGrid[0]
            },
            maxTranslate: function() {
                return -this.snapGrid[this.snapGrid.length - 1]
            },
            translateTo: function(e, t, s, r, i) {
                void 0 === e && (e = 0),
                void 0 === t && (t = this.params.speed),
                void 0 === s && (s = !0),
                void 0 === r && (r = !0);
                const a = this
                  , {params: l, wrapperEl: o} = a;
                if (a.animating && l.preventInteractionOnTransition)
                    return !1;
                const d = a.minTranslate()
                  , c = a.maxTranslate();
                let p;
                if (p = r && e > d ? d : r && e < c ? c : e,
                a.updateProgress(p),
                l.cssMode) {
                    const e = a.isHorizontal();
                    if (0 === t)
                        o[e ? "scrollLeft" : "scrollTop"] = -p;
                    else {
                        if (!a.support.smoothScroll)
                            return (0,
                            n.q)({
                                swiper: a,
                                targetPosition: -p,
                                side: e ? "left" : "top"
                            }),
                            !0;
                        o.scrollTo({
                            [e ? "left" : "top"]: -p,
                            behavior: "smooth"
                        })
                    }
                    return !0
                }
                return 0 === t ? (a.setTransition(0),
                a.setTranslate(p),
                s && (a.emit("beforeTransitionStart", t, i),
                a.emit("transitionEnd"))) : (a.setTransition(t),
                a.setTranslate(p),
                s && (a.emit("beforeTransitionStart", t, i),
                a.emit("transitionStart")),
                a.animating || (a.animating = !0,
                a.onTranslateToWrapperTransitionEnd || (a.onTranslateToWrapperTransitionEnd = function(e) {
                    a && !a.destroyed && e.target === this && (a.wrapperEl.removeEventListener("transitionend", a.onTranslateToWrapperTransitionEnd),
                    a.onTranslateToWrapperTransitionEnd = null,
                    delete a.onTranslateToWrapperTransitionEnd,
                    s && a.emit("transitionEnd"))
                }
                ),
                a.wrapperEl.addEventListener("transitionend", a.onTranslateToWrapperTransitionEnd))),
                !0
            }
        };
        function w(e) {
            let {swiper: t, runCallbacks: s, direction: r, step: i} = e;
            const {activeIndex: n, previousIndex: a} = t;
            let l = r;
            if (l || (l = n > a ? "next" : n < a ? "prev" : "reset"),
            t.emit(`transition${i}`),
            s && n !== a) {
                if ("reset" === l)
                    return void t.emit(`slideResetTransition${i}`);
                t.emit(`slideChangeTransition${i}`),
                "next" === l ? t.emit(`slideNextTransition${i}`) : t.emit(`slidePrevTransition${i}`)
            }
        }
        var S = {
            slideTo: function(e, t, s, r, i) {
                void 0 === e && (e = 0),
                void 0 === t && (t = this.params.speed),
                void 0 === s && (s = !0),
                "string" === typeof e && (e = parseInt(e, 10));
                const a = this;
                let l = e;
                l < 0 && (l = 0);
                const {params: o, snapGrid: d, slidesGrid: c, previousIndex: p, activeIndex: u, rtlTranslate: f, wrapperEl: h, enabled: m} = a;
                if (a.animating && o.preventInteractionOnTransition || !m && !r && !i)
                    return !1;
                const v = Math.min(a.params.slidesPerGroupSkip, l);
                let g = v + Math.floor((l - v) / a.params.slidesPerGroup);
                g >= d.length && (g = d.length - 1);
                const w = -d[g];
                if (o.normalizeSlideIndex)
                    for (let n = 0; n < c.length; n += 1) {
                        const e = -Math.floor(100 * w)
                          , t = Math.floor(100 * c[n])
                          , s = Math.floor(100 * c[n + 1]);
                        "undefined" !== typeof c[n + 1] ? e >= t && e < s - (s - t) / 2 ? l = n : e >= t && e < s && (l = n + 1) : e >= t && (l = n)
                    }
                if (a.initialized && l !== u) {
                    if (!a.allowSlideNext && (f ? w > a.translate && w > a.minTranslate() : w < a.translate && w < a.minTranslate()))
                        return !1;
                    if (!a.allowSlidePrev && w > a.translate && w > a.maxTranslate() && (u || 0) !== l)
                        return !1
                }
                let S;
                if (l !== (p || 0) && s && a.emit("beforeSlideChangeStart"),
                a.updateProgress(w),
                S = l > u ? "next" : l < u ? "prev" : "reset",
                f && -w === a.translate || !f && w === a.translate)
                    return a.updateActiveIndex(l),
                    o.autoHeight && a.updateAutoHeight(),
                    a.updateSlidesClasses(),
                    "slide" !== o.effect && a.setTranslate(w),
                    "reset" !== S && (a.transitionStart(s, S),
                    a.transitionEnd(s, S)),
                    !1;
                if (o.cssMode) {
                    const e = a.isHorizontal()
                      , s = f ? w : -w;
                    if (0 === t) {
                        const t = a.virtual && a.params.virtual.enabled;
                        t && (a.wrapperEl.style.scrollSnapType = "none",
                        a._immediateVirtual = !0),
                        t && !a._cssModeVirtualInitialSet && a.params.initialSlide > 0 ? (a._cssModeVirtualInitialSet = !0,
                        requestAnimationFrame((()=>{
                            h[e ? "scrollLeft" : "scrollTop"] = s
                        }
                        ))) : h[e ? "scrollLeft" : "scrollTop"] = s,
                        t && requestAnimationFrame((()=>{
                            a.wrapperEl.style.scrollSnapType = "",
                            a._immediateVirtual = !1
                        }
                        ))
                    } else {
                        if (!a.support.smoothScroll)
                            return (0,
                            n.q)({
                                swiper: a,
                                targetPosition: s,
                                side: e ? "left" : "top"
                            }),
                            !0;
                        h.scrollTo({
                            [e ? "left" : "top"]: s,
                            behavior: "smooth"
                        })
                    }
                    return !0
                }
                return a.setTransition(t),
                a.setTranslate(w),
                a.updateActiveIndex(l),
                a.updateSlidesClasses(),
                a.emit("beforeTransitionStart", t, r),
                a.transitionStart(s, S),
                0 === t ? a.transitionEnd(s, S) : a.animating || (a.animating = !0,
                a.onSlideToWrapperTransitionEnd || (a.onSlideToWrapperTransitionEnd = function(e) {
                    a && !a.destroyed && e.target === this && (a.wrapperEl.removeEventListener("transitionend", a.onSlideToWrapperTransitionEnd),
                    a.onSlideToWrapperTransitionEnd = null,
                    delete a.onSlideToWrapperTransitionEnd,
                    a.transitionEnd(s, S))
                }
                ),
                a.wrapperEl.addEventListener("transitionend", a.onSlideToWrapperTransitionEnd)),
                !0
            },
            slideToLoop: function(e, t, s, r) {
                if (void 0 === e && (e = 0),
                void 0 === t && (t = this.params.speed),
                void 0 === s && (s = !0),
                "string" === typeof e) {
                    e = parseInt(e, 10)
                }
                const i = this
                  , n = i.grid && i.params.grid && i.params.grid.rows > 1;
                let a = e;
                if (i.params.loop)
                    if (i.virtual && i.params.virtual.enabled)
                        a += i.virtual.slidesBefore;
                    else {
                        let e;
                        if (n) {
                            const t = a * i.params.grid.rows;
                            e = i.slides.filter((e=>1 * e.getAttribute("data-swiper-slide-index") === t))[0].column
                        } else
                            e = i.getSlideIndexByData(a);
                        const t = n ? Math.ceil(i.slides.length / i.params.grid.rows) : i.slides.length
                          , {centeredSlides: s} = i.params;
                        let r = i.params.slidesPerView;
                        "auto" === r ? r = i.slidesPerViewDynamic() : (r = Math.ceil(parseFloat(i.params.slidesPerView, 10)),
                        s && r % 2 === 0 && (r += 1));
                        let l = t - e < r;
                        if (s && (l = l || e < Math.ceil(r / 2)),
                        l) {
                            const r = s ? e < i.activeIndex ? "prev" : "next" : e - i.activeIndex - 1 < i.params.slidesPerView ? "next" : "prev";
                            i.loopFix({
                                direction: r,
                                slideTo: !0,
                                activeSlideIndex: "next" === r ? e + 1 : e - t + 1,
                                slideRealIndex: "next" === r ? i.realIndex : void 0
                            })
                        }
                        if (n) {
                            const e = a * i.params.grid.rows;
                            a = i.slides.filter((t=>1 * t.getAttribute("data-swiper-slide-index") === e))[0].column
                        } else
                            a = i.getSlideIndexByData(a)
                    }
                return requestAnimationFrame((()=>{
                    i.slideTo(a, t, s, r)
                }
                )),
                i
            },
            slideNext: function(e, t, s) {
                void 0 === e && (e = this.params.speed),
                void 0 === t && (t = !0);
                const r = this
                  , {enabled: i, params: n, animating: a} = r;
                if (!i)
                    return r;
                let l = n.slidesPerGroup;
                "auto" === n.slidesPerView && 1 === n.slidesPerGroup && n.slidesPerGroupAuto && (l = Math.max(r.slidesPerViewDynamic("current", !0), 1));
                const o = r.activeIndex < n.slidesPerGroupSkip ? 1 : l
                  , d = r.virtual && n.virtual.enabled;
                if (n.loop) {
                    if (a && !d && n.loopPreventsSliding)
                        return !1;
                    if (r.loopFix({
                        direction: "next"
                    }),
                    r._clientLeft = r.wrapperEl.clientLeft,
                    r.activeIndex === r.slides.length - 1 && n.cssMode)
                        return requestAnimationFrame((()=>{
                            r.slideTo(r.activeIndex + o, e, t, s)
                        }
                        )),
                        !0
                }
                return n.rewind && r.isEnd ? r.slideTo(0, e, t, s) : r.slideTo(r.activeIndex + o, e, t, s)
            },
            slidePrev: function(e, t, s) {
                void 0 === e && (e = this.params.speed),
                void 0 === t && (t = !0);
                const r = this
                  , {params: i, snapGrid: n, slidesGrid: a, rtlTranslate: l, enabled: o, animating: d} = r;
                if (!o)
                    return r;
                const c = r.virtual && i.virtual.enabled;
                if (i.loop) {
                    if (d && !c && i.loopPreventsSliding)
                        return !1;
                    r.loopFix({
                        direction: "prev"
                    }),
                    r._clientLeft = r.wrapperEl.clientLeft
                }
                function p(e) {
                    return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                }
                const u = p(l ? r.translate : -r.translate)
                  , f = n.map((e=>p(e)));
                let h = n[f.indexOf(u) - 1];
                if ("undefined" === typeof h && i.cssMode) {
                    let e;
                    n.forEach(((t,s)=>{
                        u >= t && (e = s)
                    }
                    )),
                    "undefined" !== typeof e && (h = n[e > 0 ? e - 1 : e])
                }
                let m = 0;
                if ("undefined" !== typeof h && (m = a.indexOf(h),
                m < 0 && (m = r.activeIndex - 1),
                "auto" === i.slidesPerView && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && (m = m - r.slidesPerViewDynamic("previous", !0) + 1,
                m = Math.max(m, 0))),
                i.rewind && r.isBeginning) {
                    const i = r.params.virtual && r.params.virtual.enabled && r.virtual ? r.virtual.slides.length - 1 : r.slides.length - 1;
                    return r.slideTo(i, e, t, s)
                }
                return i.loop && 0 === r.activeIndex && i.cssMode ? (requestAnimationFrame((()=>{
                    r.slideTo(m, e, t, s)
                }
                )),
                !0) : r.slideTo(m, e, t, s)
            },
            slideReset: function(e, t, s) {
                return void 0 === e && (e = this.params.speed),
                void 0 === t && (t = !0),
                this.slideTo(this.activeIndex, e, t, s)
            },
            slideToClosest: function(e, t, s, r) {
                void 0 === e && (e = this.params.speed),
                void 0 === t && (t = !0),
                void 0 === r && (r = .5);
                const i = this;
                let n = i.activeIndex;
                const a = Math.min(i.params.slidesPerGroupSkip, n)
                  , l = a + Math.floor((n - a) / i.params.slidesPerGroup)
                  , o = i.rtlTranslate ? i.translate : -i.translate;
                if (o >= i.snapGrid[l]) {
                    const e = i.snapGrid[l];
                    o - e > (i.snapGrid[l + 1] - e) * r && (n += i.params.slidesPerGroup)
                } else {
                    const e = i.snapGrid[l - 1];
                    o - e <= (i.snapGrid[l] - e) * r && (n -= i.params.slidesPerGroup)
                }
                return n = Math.max(n, 0),
                n = Math.min(n, i.slidesGrid.length - 1),
                i.slideTo(n, e, t, s)
            },
            slideToClickedSlide: function() {
                const e = this
                  , {params: t, slidesEl: s} = e
                  , r = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
                let i, a = e.clickedIndex;
                const l = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
                if (t.loop) {
                    if (e.animating)
                        return;
                    i = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10),
                    t.centeredSlides ? a < e.loopedSlides - r / 2 || a > e.slides.length - e.loopedSlides + r / 2 ? (e.loopFix(),
                    a = e.getSlideIndex((0,
                    n.e)(s, `${l}[data-swiper-slide-index="${i}"]`)[0]),
                    (0,
                    n.n)((()=>{
                        e.slideTo(a)
                    }
                    ))) : e.slideTo(a) : a > e.slides.length - r ? (e.loopFix(),
                    a = e.getSlideIndex((0,
                    n.e)(s, `${l}[data-swiper-slide-index="${i}"]`)[0]),
                    (0,
                    n.n)((()=>{
                        e.slideTo(a)
                    }
                    ))) : e.slideTo(a)
                } else
                    e.slideTo(a)
            }
        };
        var b = {
            loopCreate: function(e) {
                const t = this
                  , {params: s, slidesEl: r} = t;
                if (!s.loop || t.virtual && t.params.virtual.enabled)
                    return;
                const i = ()=>{
                    (0,
                    n.e)(r, `.${s.slideClass}, swiper-slide`).forEach(((e,t)=>{
                        e.setAttribute("data-swiper-slide-index", t)
                    }
                    ))
                }
                  , a = t.grid && s.grid && s.grid.rows > 1
                  , l = s.slidesPerGroup * (a ? s.grid.rows : 1)
                  , o = t.slides.length % l !== 0
                  , d = a && t.slides.length % s.grid.rows !== 0
                  , c = e=>{
                    for (let r = 0; r < e; r += 1) {
                        const e = t.isElement ? (0,
                        n.c)("swiper-slide", [s.slideBlankClass]) : (0,
                        n.c)("div", [s.slideClass, s.slideBlankClass]);
                        t.slidesEl.append(e)
                    }
                }
                ;
                if (o) {
                    if (s.loopAddBlankSlides) {
                        c(l - t.slides.length % l),
                        t.recalcSlides(),
                        t.updateSlides()
                    } else
                        (0,
                        n.r)("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
                    i()
                } else if (d) {
                    if (s.loopAddBlankSlides) {
                        c(s.grid.rows - t.slides.length % s.grid.rows),
                        t.recalcSlides(),
                        t.updateSlides()
                    } else
                        (0,
                        n.r)("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
                    i()
                } else
                    i();
                t.loopFix({
                    slideRealIndex: e,
                    direction: s.centeredSlides ? void 0 : "next"
                })
            },
            loopFix: function(e) {
                let {slideRealIndex: t, slideTo: s=!0, direction: r, setTranslate: i, activeSlideIndex: a, byController: l, byMousewheel: o} = void 0 === e ? {} : e;
                const d = this;
                if (!d.params.loop)
                    return;
                d.emit("beforeLoopFix");
                const {slides: c, allowSlidePrev: p, allowSlideNext: u, slidesEl: f, params: h} = d
                  , {centeredSlides: m} = h;
                if (d.allowSlidePrev = !0,
                d.allowSlideNext = !0,
                d.virtual && h.virtual.enabled)
                    return s && (h.centeredSlides || 0 !== d.snapIndex ? h.centeredSlides && d.snapIndex < h.slidesPerView ? d.slideTo(d.virtual.slides.length + d.snapIndex, 0, !1, !0) : d.snapIndex === d.snapGrid.length - 1 && d.slideTo(d.virtual.slidesBefore, 0, !1, !0) : d.slideTo(d.virtual.slides.length, 0, !1, !0)),
                    d.allowSlidePrev = p,
                    d.allowSlideNext = u,
                    void d.emit("loopFix");
                let v = h.slidesPerView;
                "auto" === v ? v = d.slidesPerViewDynamic() : (v = Math.ceil(parseFloat(h.slidesPerView, 10)),
                m && v % 2 === 0 && (v += 1));
                const g = h.slidesPerGroupAuto ? v : h.slidesPerGroup;
                let w = g;
                w % g !== 0 && (w += g - w % g),
                w += h.loopAdditionalSlides,
                d.loopedSlides = w;
                const S = d.grid && h.grid && h.grid.rows > 1;
                c.length < v + w ? (0,
                n.r)("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : S && "row" === h.grid.fill && (0,
                n.r)("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
                const b = []
                  , T = [];
                let y = d.activeIndex;
                "undefined" === typeof a ? a = d.getSlideIndex(c.filter((e=>e.classList.contains(h.slideActiveClass)))[0]) : y = a;
                const E = "next" === r || !r
                  , x = "prev" === r || !r;
                let C = 0
                  , P = 0;
                const M = S ? Math.ceil(c.length / h.grid.rows) : c.length
                  , k = (S ? c[a].column : a) + (m && "undefined" === typeof i ? -v / 2 + .5 : 0);
                if (k < w) {
                    C = Math.max(w - k, g);
                    for (let e = 0; e < w - k; e += 1) {
                        const t = e - Math.floor(e / M) * M;
                        if (S) {
                            const e = M - t - 1;
                            for (let t = c.length - 1; t >= 0; t -= 1)
                                c[t].column === e && b.push(t)
                        } else
                            b.push(M - t - 1)
                    }
                } else if (k + v > M - w) {
                    P = Math.max(k - (M - 2 * w), g);
                    for (let e = 0; e < P; e += 1) {
                        const t = e - Math.floor(e / M) * M;
                        S ? c.forEach(((e,s)=>{
                            e.column === t && T.push(s)
                        }
                        )) : T.push(t)
                    }
                }
                if (d.__preventObserver__ = !0,
                requestAnimationFrame((()=>{
                    d.__preventObserver__ = !1
                }
                )),
                x && b.forEach((e=>{
                    c[e].swiperLoopMoveDOM = !0,
                    f.prepend(c[e]),
                    c[e].swiperLoopMoveDOM = !1
                }
                )),
                E && T.forEach((e=>{
                    c[e].swiperLoopMoveDOM = !0,
                    f.append(c[e]),
                    c[e].swiperLoopMoveDOM = !1
                }
                )),
                d.recalcSlides(),
                "auto" === h.slidesPerView ? d.updateSlides() : S && (b.length > 0 && x || T.length > 0 && E) && d.slides.forEach(((e,t)=>{
                    d.grid.updateSlide(t, e, d.slides)
                }
                )),
                h.watchSlidesProgress && d.updateSlidesOffset(),
                s)
                    if (b.length > 0 && x) {
                        if ("undefined" === typeof t) {
                            const e = d.slidesGrid[y]
                              , t = d.slidesGrid[y + C] - e;
                            o ? d.setTranslate(d.translate - t) : (d.slideTo(y + C, 0, !1, !0),
                            i && (d.touchEventsData.startTranslate = d.touchEventsData.startTranslate - t,
                            d.touchEventsData.currentTranslate = d.touchEventsData.currentTranslate - t))
                        } else if (i) {
                            const e = S ? b.length / h.grid.rows : b.length;
                            d.slideTo(d.activeIndex + e, 0, !1, !0),
                            d.touchEventsData.currentTranslate = d.translate
                        }
                    } else if (T.length > 0 && E)
                        if ("undefined" === typeof t) {
                            const e = d.slidesGrid[y]
                              , t = d.slidesGrid[y - P] - e;
                            o ? d.setTranslate(d.translate - t) : (d.slideTo(y - P, 0, !1, !0),
                            i && (d.touchEventsData.startTranslate = d.touchEventsData.startTranslate - t,
                            d.touchEventsData.currentTranslate = d.touchEventsData.currentTranslate - t))
                        } else {
                            const e = S ? T.length / h.grid.rows : T.length;
                            d.slideTo(d.activeIndex - e, 0, !1, !0)
                        }
                if (d.allowSlidePrev = p,
                d.allowSlideNext = u,
                d.controller && d.controller.control && !l) {
                    const e = {
                        slideRealIndex: t,
                        direction: r,
                        setTranslate: i,
                        activeSlideIndex: a,
                        byController: !0
                    };
                    Array.isArray(d.controller.control) ? d.controller.control.forEach((t=>{
                        !t.destroyed && t.params.loop && t.loopFix({
                            ...e,
                            slideTo: t.params.slidesPerView === h.slidesPerView && s
                        })
                    }
                    )) : d.controller.control instanceof d.constructor && d.controller.control.params.loop && d.controller.control.loopFix({
                        ...e,
                        slideTo: d.controller.control.params.slidesPerView === h.slidesPerView && s
                    })
                }
                d.emit("loopFix")
            },
            loopDestroy: function() {
                const e = this
                  , {params: t, slidesEl: s} = e;
                if (!t.loop || e.virtual && e.params.virtual.enabled)
                    return;
                e.recalcSlides();
                const r = [];
                e.slides.forEach((e=>{
                    const t = "undefined" === typeof e.swiperSlideIndex ? 1 * e.getAttribute("data-swiper-slide-index") : e.swiperSlideIndex;
                    r[t] = e
                }
                )),
                e.slides.forEach((e=>{
                    e.removeAttribute("data-swiper-slide-index")
                }
                )),
                r.forEach((e=>{
                    s.append(e)
                }
                )),
                e.recalcSlides(),
                e.slideTo(e.realIndex, 0)
            }
        };
        function T(e, t, s) {
            const r = (0,
            i.a)()
              , {params: n} = e
              , a = n.edgeSwipeDetection
              , l = n.edgeSwipeThreshold;
            return !a || !(s <= l || s >= r.innerWidth - l) || "prevent" === a && (t.preventDefault(),
            !0)
        }
        function y(e) {
            const t = this
              , s = (0,
            i.g)();
            let r = e;
            r.originalEvent && (r = r.originalEvent);
            const a = t.touchEventsData;
            if ("pointerdown" === r.type) {
                if (null !== a.pointerId && a.pointerId !== r.pointerId)
                    return;
                a.pointerId = r.pointerId
            } else
                "touchstart" === r.type && 1 === r.targetTouches.length && (a.touchId = r.targetTouches[0].identifier);
            if ("touchstart" === r.type)
                return void T(t, r, r.targetTouches[0].pageX);
            const {params: l, touches: o, enabled: d} = t;
            if (!d)
                return;
            if (!l.simulateTouch && "mouse" === r.pointerType)
                return;
            if (t.animating && l.preventInteractionOnTransition)
                return;
            !t.animating && l.cssMode && l.loop && t.loopFix();
            let c = r.target;
            if ("wrapper" === l.touchEventsTarget && !t.wrapperEl.contains(c))
                return;
            if ("which"in r && 3 === r.which)
                return;
            if ("button"in r && r.button > 0)
                return;
            if (a.isTouched && a.isMoved)
                return;
            const p = !!l.noSwipingClass && "" !== l.noSwipingClass
              , u = r.composedPath ? r.composedPath() : r.path;
            p && r.target && r.target.shadowRoot && u && (c = u[0]);
            const f = l.noSwipingSelector ? l.noSwipingSelector : `.${l.noSwipingClass}`
              , h = !(!r.target || !r.target.shadowRoot);
            if (l.noSwiping && (h ? function(e, t) {
                return void 0 === t && (t = this),
                function t(s) {
                    if (!s || s === (0,
                    i.g)() || s === (0,
                    i.a)())
                        return null;
                    s.assignedSlot && (s = s.assignedSlot);
                    const r = s.closest(e);
                    return r || s.getRootNode ? r || t(s.getRootNode().host) : null
                }(t)
            }(f, c) : c.closest(f)))
                return void (t.allowClick = !0);
            if (l.swipeHandler && !c.closest(l.swipeHandler))
                return;
            o.currentX = r.pageX,
            o.currentY = r.pageY;
            const m = o.currentX
              , v = o.currentY;
            if (!T(t, r, m))
                return;
            Object.assign(a, {
                isTouched: !0,
                isMoved: !1,
                allowTouchCallbacks: !0,
                isScrolling: void 0,
                startMoving: void 0
            }),
            o.startX = m,
            o.startY = v,
            a.touchStartTime = (0,
            n.d)(),
            t.allowClick = !0,
            t.updateSize(),
            t.swipeDirection = void 0,
            l.threshold > 0 && (a.allowThresholdMove = !1);
            let g = !0;
            c.matches(a.focusableElements) && (g = !1,
            "SELECT" === c.nodeName && (a.isTouched = !1)),
            s.activeElement && s.activeElement.matches(a.focusableElements) && s.activeElement !== c && s.activeElement.blur();
            const w = g && t.allowTouchMove && l.touchStartPreventDefault;
            !l.touchStartForcePreventDefault && !w || c.isContentEditable || r.preventDefault(),
            l.freeMode && l.freeMode.enabled && t.freeMode && t.animating && !l.cssMode && t.freeMode.onTouchStart(),
            t.emit("touchStart", r)
        }
        function E(e) {
            const t = (0,
            i.g)()
              , s = this
              , r = s.touchEventsData
              , {params: a, touches: l, rtlTranslate: o, enabled: d} = s;
            if (!d)
                return;
            if (!a.simulateTouch && "mouse" === e.pointerType)
                return;
            let c, p = e;
            if (p.originalEvent && (p = p.originalEvent),
            "pointermove" === p.type) {
                if (null !== r.touchId)
                    return;
                if (p.pointerId !== r.pointerId)
                    return
            }
            if ("touchmove" === p.type) {
                if (c = [...p.changedTouches].filter((e=>e.identifier === r.touchId))[0],
                !c || c.identifier !== r.touchId)
                    return
            } else
                c = p;
            if (!r.isTouched)
                return void (r.startMoving && r.isScrolling && s.emit("touchMoveOpposite", p));
            const u = c.pageX
              , f = c.pageY;
            if (p.preventedByNestedSwiper)
                return l.startX = u,
                void (l.startY = f);
            if (!s.allowTouchMove)
                return p.target.matches(r.focusableElements) || (s.allowClick = !1),
                void (r.isTouched && (Object.assign(l, {
                    startX: u,
                    startY: f,
                    currentX: u,
                    currentY: f
                }),
                r.touchStartTime = (0,
                n.d)()));
            if (a.touchReleaseOnEdges && !a.loop)
                if (s.isVertical()) {
                    if (f < l.startY && s.translate <= s.maxTranslate() || f > l.startY && s.translate >= s.minTranslate())
                        return r.isTouched = !1,
                        void (r.isMoved = !1)
                } else if (u < l.startX && s.translate <= s.maxTranslate() || u > l.startX && s.translate >= s.minTranslate())
                    return;
            if (t.activeElement && p.target === t.activeElement && p.target.matches(r.focusableElements))
                return r.isMoved = !0,
                void (s.allowClick = !1);
            r.allowTouchCallbacks && s.emit("touchMove", p),
            l.previousX = l.currentX,
            l.previousY = l.currentY,
            l.currentX = u,
            l.currentY = f;
            const h = l.currentX - l.startX
              , m = l.currentY - l.startY;
            if (s.params.threshold && Math.sqrt(h ** 2 + m ** 2) < s.params.threshold)
                return;
            if ("undefined" === typeof r.isScrolling) {
                let e;
                s.isHorizontal() && l.currentY === l.startY || s.isVertical() && l.currentX === l.startX ? r.isScrolling = !1 : h * h + m * m >= 25 && (e = 180 * Math.atan2(Math.abs(m), Math.abs(h)) / Math.PI,
                r.isScrolling = s.isHorizontal() ? e > a.touchAngle : 90 - e > a.touchAngle)
            }
            if (r.isScrolling && s.emit("touchMoveOpposite", p),
            "undefined" === typeof r.startMoving && (l.currentX === l.startX && l.currentY === l.startY || (r.startMoving = !0)),
            r.isScrolling)
                return void (r.isTouched = !1);
            if (!r.startMoving)
                return;
            s.allowClick = !1,
            !a.cssMode && p.cancelable && p.preventDefault(),
            a.touchMoveStopPropagation && !a.nested && p.stopPropagation();
            let v = s.isHorizontal() ? h : m
              , g = s.isHorizontal() ? l.currentX - l.previousX : l.currentY - l.previousY;
            a.oneWayMovement && (v = Math.abs(v) * (o ? 1 : -1),
            g = Math.abs(g) * (o ? 1 : -1)),
            l.diff = v,
            v *= a.touchRatio,
            o && (v = -v,
            g = -g);
            const w = s.touchesDirection;
            s.swipeDirection = v > 0 ? "prev" : "next",
            s.touchesDirection = g > 0 ? "prev" : "next";
            const S = s.params.loop && !a.cssMode
              , b = "next" === s.touchesDirection && s.allowSlideNext || "prev" === s.touchesDirection && s.allowSlidePrev;
            if (!r.isMoved) {
                if (S && b && s.loopFix({
                    direction: s.swipeDirection
                }),
                r.startTranslate = s.getTranslate(),
                s.setTransition(0),
                s.animating) {
                    const e = new window.CustomEvent("transitionend",{
                        bubbles: !0,
                        cancelable: !0
                    });
                    s.wrapperEl.dispatchEvent(e)
                }
                r.allowMomentumBounce = !1,
                !a.grabCursor || !0 !== s.allowSlideNext && !0 !== s.allowSlidePrev || s.setGrabCursor(!0),
                s.emit("sliderFirstMove", p)
            }
            if ((new Date).getTime(),
            r.isMoved && r.allowThresholdMove && w !== s.touchesDirection && S && b && Math.abs(v) >= 1)
                return Object.assign(l, {
                    startX: u,
                    startY: f,
                    currentX: u,
                    currentY: f,
                    startTranslate: r.currentTranslate
                }),
                r.loopSwapReset = !0,
                void (r.startTranslate = r.currentTranslate);
            s.emit("sliderMove", p),
            r.isMoved = !0,
            r.currentTranslate = v + r.startTranslate;
            let T = !0
              , y = a.resistanceRatio;
            if (a.touchReleaseOnEdges && (y = 0),
            v > 0 ? (S && b && r.allowThresholdMove && r.currentTranslate > (a.centeredSlides ? s.minTranslate() - s.slidesSizesGrid[s.activeIndex + 1] : s.minTranslate()) && s.loopFix({
                direction: "prev",
                setTranslate: !0,
                activeSlideIndex: 0
            }),
            r.currentTranslate > s.minTranslate() && (T = !1,
            a.resistance && (r.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + r.startTranslate + v) ** y))) : v < 0 && (S && b && r.allowThresholdMove && r.currentTranslate < (a.centeredSlides ? s.maxTranslate() + s.slidesSizesGrid[s.slidesSizesGrid.length - 1] : s.maxTranslate()) && s.loopFix({
                direction: "next",
                setTranslate: !0,
                activeSlideIndex: s.slides.length - ("auto" === a.slidesPerView ? s.slidesPerViewDynamic() : Math.ceil(parseFloat(a.slidesPerView, 10)))
            }),
            r.currentTranslate < s.maxTranslate() && (T = !1,
            a.resistance && (r.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - r.startTranslate - v) ** y))),
            T && (p.preventedByNestedSwiper = !0),
            !s.allowSlideNext && "next" === s.swipeDirection && r.currentTranslate < r.startTranslate && (r.currentTranslate = r.startTranslate),
            !s.allowSlidePrev && "prev" === s.swipeDirection && r.currentTranslate > r.startTranslate && (r.currentTranslate = r.startTranslate),
            s.allowSlidePrev || s.allowSlideNext || (r.currentTranslate = r.startTranslate),
            a.threshold > 0) {
                if (!(Math.abs(v) > a.threshold || r.allowThresholdMove))
                    return void (r.currentTranslate = r.startTranslate);
                if (!r.allowThresholdMove)
                    return r.allowThresholdMove = !0,
                    l.startX = l.currentX,
                    l.startY = l.currentY,
                    r.currentTranslate = r.startTranslate,
                    void (l.diff = s.isHorizontal() ? l.currentX - l.startX : l.currentY - l.startY)
            }
            a.followFinger && !a.cssMode && ((a.freeMode && a.freeMode.enabled && s.freeMode || a.watchSlidesProgress) && (s.updateActiveIndex(),
            s.updateSlidesClasses()),
            a.freeMode && a.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(),
            s.updateProgress(r.currentTranslate),
            s.setTranslate(r.currentTranslate))
        }
        function x(e) {
            const t = this
              , s = t.touchEventsData;
            let r, i = e;
            i.originalEvent && (i = i.originalEvent);
            if ("touchend" === i.type || "touchcancel" === i.type) {
                if (r = [...i.changedTouches].filter((e=>e.identifier === s.touchId))[0],
                !r || r.identifier !== s.touchId)
                    return
            } else {
                if (null !== s.touchId)
                    return;
                if (i.pointerId !== s.pointerId)
                    return;
                r = i
            }
            if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(i.type)) {
                if (!(["pointercancel", "contextmenu"].includes(i.type) && (t.browser.isSafari || t.browser.isWebView)))
                    return
            }
            s.pointerId = null,
            s.touchId = null;
            const {params: a, touches: l, rtlTranslate: o, slidesGrid: d, enabled: c} = t;
            if (!c)
                return;
            if (!a.simulateTouch && "mouse" === i.pointerType)
                return;
            if (s.allowTouchCallbacks && t.emit("touchEnd", i),
            s.allowTouchCallbacks = !1,
            !s.isTouched)
                return s.isMoved && a.grabCursor && t.setGrabCursor(!1),
                s.isMoved = !1,
                void (s.startMoving = !1);
            a.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
            const p = (0,
            n.d)()
              , u = p - s.touchStartTime;
            if (t.allowClick) {
                const e = i.path || i.composedPath && i.composedPath();
                t.updateClickedSlide(e && e[0] || i.target, e),
                t.emit("tap click", i),
                u < 300 && p - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", i)
            }
            if (s.lastClickTime = (0,
            n.d)(),
            (0,
            n.n)((()=>{
                t.destroyed || (t.allowClick = !0)
            }
            )),
            !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === l.diff && !s.loopSwapReset || s.currentTranslate === s.startTranslate && !s.loopSwapReset)
                return s.isTouched = !1,
                s.isMoved = !1,
                void (s.startMoving = !1);
            let f;
            if (s.isTouched = !1,
            s.isMoved = !1,
            s.startMoving = !1,
            f = a.followFinger ? o ? t.translate : -t.translate : -s.currentTranslate,
            a.cssMode)
                return;
            if (a.freeMode && a.freeMode.enabled)
                return void t.freeMode.onTouchEnd({
                    currentPos: f
                });
            const h = f >= -t.maxTranslate() && !t.params.loop;
            let m = 0
              , v = t.slidesSizesGrid[0];
            for (let n = 0; n < d.length; n += n < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup) {
                const e = n < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
                "undefined" !== typeof d[n + e] ? (h || f >= d[n] && f < d[n + e]) && (m = n,
                v = d[n + e] - d[n]) : (h || f >= d[n]) && (m = n,
                v = d[d.length - 1] - d[d.length - 2])
            }
            let g = null
              , w = null;
            a.rewind && (t.isBeginning ? w = a.virtual && a.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (g = 0));
            const S = (f - d[m]) / v
              , b = m < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
            if (u > a.longSwipesMs) {
                if (!a.longSwipes)
                    return void t.slideTo(t.activeIndex);
                "next" === t.swipeDirection && (S >= a.longSwipesRatio ? t.slideTo(a.rewind && t.isEnd ? g : m + b) : t.slideTo(m)),
                "prev" === t.swipeDirection && (S > 1 - a.longSwipesRatio ? t.slideTo(m + b) : null !== w && S < 0 && Math.abs(S) > a.longSwipesRatio ? t.slideTo(w) : t.slideTo(m))
            } else {
                if (!a.shortSwipes)
                    return void t.slideTo(t.activeIndex);
                t.navigation && (i.target === t.navigation.nextEl || i.target === t.navigation.prevEl) ? i.target === t.navigation.nextEl ? t.slideTo(m + b) : t.slideTo(m) : ("next" === t.swipeDirection && t.slideTo(null !== g ? g : m + b),
                "prev" === t.swipeDirection && t.slideTo(null !== w ? w : m))
            }
        }
        function C() {
            const e = this
              , {params: t, el: s} = e;
            if (s && 0 === s.offsetWidth)
                return;
            t.breakpoints && e.setBreakpoint();
            const {allowSlideNext: r, allowSlidePrev: i, snapGrid: n} = e
              , a = e.virtual && e.params.virtual.enabled;
            e.allowSlideNext = !0,
            e.allowSlidePrev = !0,
            e.updateSize(),
            e.updateSlides(),
            e.updateSlidesClasses();
            const l = a && t.loop;
            !("auto" === t.slidesPerView || t.slidesPerView > 1) || !e.isEnd || e.isBeginning || e.params.centeredSlides || l ? e.params.loop && !a ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0) : e.slideTo(e.slides.length - 1, 0, !1, !0),
            e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout),
            e.autoplay.resizeTimeout = setTimeout((()=>{
                e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume()
            }
            ), 500)),
            e.allowSlidePrev = i,
            e.allowSlideNext = r,
            e.params.watchOverflow && n !== e.snapGrid && e.checkOverflow()
        }
        function P(e) {
            const t = this;
            t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(),
            t.params.preventClicksPropagation && t.animating && (e.stopPropagation(),
            e.stopImmediatePropagation())))
        }
        function M() {
            const e = this
              , {wrapperEl: t, rtlTranslate: s, enabled: r} = e;
            if (!r)
                return;
            let i;
            e.previousTranslate = e.translate,
            e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop,
            0 === e.translate && (e.translate = 0),
            e.updateActiveIndex(),
            e.updateSlidesClasses();
            const n = e.maxTranslate() - e.minTranslate();
            i = 0 === n ? 0 : (e.translate - e.minTranslate()) / n,
            i !== e.progress && e.updateProgress(s ? -e.translate : e.translate),
            e.emit("setTranslate", e.translate, !1)
        }
        function k(e) {
            const t = this;
            f(t, e.target),
            t.params.cssMode || "auto" !== t.params.slidesPerView && !t.params.autoHeight || t.update()
        }
        function O() {
            const e = this;
            e.documentTouchHandlerProceeded || (e.documentTouchHandlerProceeded = !0,
            e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"))
        }
        const I = (e,t)=>{
            const s = (0,
            i.g)()
              , {params: r, el: n, wrapperEl: a, device: l} = e
              , o = !!r.nested
              , d = "on" === t ? "addEventListener" : "removeEventListener"
              , c = t;
            s[d]("touchstart", e.onDocumentTouchStart, {
                passive: !1,
                capture: o
            }),
            n[d]("touchstart", e.onTouchStart, {
                passive: !1
            }),
            n[d]("pointerdown", e.onTouchStart, {
                passive: !1
            }),
            s[d]("touchmove", e.onTouchMove, {
                passive: !1,
                capture: o
            }),
            s[d]("pointermove", e.onTouchMove, {
                passive: !1,
                capture: o
            }),
            s[d]("touchend", e.onTouchEnd, {
                passive: !0
            }),
            s[d]("pointerup", e.onTouchEnd, {
                passive: !0
            }),
            s[d]("pointercancel", e.onTouchEnd, {
                passive: !0
            }),
            s[d]("touchcancel", e.onTouchEnd, {
                passive: !0
            }),
            s[d]("pointerout", e.onTouchEnd, {
                passive: !0
            }),
            s[d]("pointerleave", e.onTouchEnd, {
                passive: !0
            }),
            s[d]("contextmenu", e.onTouchEnd, {
                passive: !0
            }),
            (r.preventClicks || r.preventClicksPropagation) && n[d]("click", e.onClick, !0),
            r.cssMode && a[d]("scroll", e.onScroll),
            r.updateOnWindowResize ? e[c](l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", C, !0) : e[c]("observerUpdate", C, !0),
            n[d]("load", e.onLoad, {
                capture: !0
            })
        }
        ;
        const L = (e,t)=>e.grid && t.grid && t.grid.rows > 1;
        var _ = {
            init: !0,
            direction: "horizontal",
            oneWayMovement: !1,
            touchEventsTarget: "wrapper",
            initialSlide: 0,
            speed: 300,
            cssMode: !1,
            updateOnWindowResize: !0,
            resizeObserver: !0,
            nested: !1,
            createElements: !1,
            eventsPrefix: "swiper",
            enabled: !0,
            focusableElements: "input, select, option, textarea, button, video, label",
            width: null,
            height: null,
            preventInteractionOnTransition: !1,
            userAgent: null,
            url: null,
            edgeSwipeDetection: !1,
            edgeSwipeThreshold: 20,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            breakpointsBase: "window",
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            slidesPerGroupAuto: !1,
            centeredSlides: !1,
            centeredSlidesBounds: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            centerInsufficientSlides: !1,
            watchOverflow: !0,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 5,
            touchMoveStopPropagation: !1,
            touchStartPreventDefault: !0,
            touchStartForcePreventDefault: !1,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: .85,
            watchSlidesProgress: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            loop: !1,
            loopAddBlankSlides: !0,
            loopAdditionalSlides: 0,
            loopPreventsSliding: !0,
            rewind: !1,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: !0,
            maxBackfaceHiddenSlides: 10,
            containerModifierClass: "swiper-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-blank",
            slideActiveClass: "swiper-slide-active",
            slideVisibleClass: "swiper-slide-visible",
            slideFullyVisibleClass: "swiper-slide-fully-visible",
            slideNextClass: "swiper-slide-next",
            slidePrevClass: "swiper-slide-prev",
            wrapperClass: "swiper-wrapper",
            lazyPreloaderClass: "swiper-lazy-preloader",
            lazyPreloadPrevNext: 0,
            runCallbacksOnInit: !0,
            _emitClasses: !1
        };
        function z(e, t) {
            return function(s) {
                void 0 === s && (s = {});
                const r = Object.keys(s)[0]
                  , i = s[r];
                "object" === typeof i && null !== i ? (!0 === e[r] && (e[r] = {
                    enabled: !0
                }),
                "navigation" === r && e[r] && e[r].enabled && !e[r].prevEl && !e[r].nextEl && (e[r].auto = !0),
                ["pagination", "scrollbar"].indexOf(r) >= 0 && e[r] && e[r].enabled && !e[r].el && (e[r].auto = !0),
                r in e && "enabled"in i ? ("object" !== typeof e[r] || "enabled"in e[r] || (e[r].enabled = !0),
                e[r] || (e[r] = {
                    enabled: !1
                }),
                (0,
                n.t)(t, s)) : (0,
                n.t)(t, s)) : (0,
                n.t)(t, s)
            }
        }
        const A = {
            eventsEmitter: u,
            update: v,
            translate: g,
            transition: {
                setTransition: function(e, t) {
                    const s = this;
                    s.params.cssMode || (s.wrapperEl.style.transitionDuration = `${e}ms`,
                    s.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : ""),
                    s.emit("setTransition", e, t)
                },
                transitionStart: function(e, t) {
                    void 0 === e && (e = !0);
                    const s = this
                      , {params: r} = s;
                    r.cssMode || (r.autoHeight && s.updateAutoHeight(),
                    w({
                        swiper: s,
                        runCallbacks: e,
                        direction: t,
                        step: "Start"
                    }))
                },
                transitionEnd: function(e, t) {
                    void 0 === e && (e = !0);
                    const s = this
                      , {params: r} = s;
                    s.animating = !1,
                    r.cssMode || (s.setTransition(0),
                    w({
                        swiper: s,
                        runCallbacks: e,
                        direction: t,
                        step: "End"
                    }))
                }
            },
            slide: S,
            loop: b,
            grabCursor: {
                setGrabCursor: function(e) {
                    const t = this;
                    if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode)
                        return;
                    const s = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                    t.isElement && (t.__preventObserver__ = !0),
                    s.style.cursor = "move",
                    s.style.cursor = e ? "grabbing" : "grab",
                    t.isElement && requestAnimationFrame((()=>{
                        t.__preventObserver__ = !1
                    }
                    ))
                },
                unsetGrabCursor: function() {
                    const e = this;
                    e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0),
                    e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "",
                    e.isElement && requestAnimationFrame((()=>{
                        e.__preventObserver__ = !1
                    }
                    )))
                }
            },
            events: {
                attachEvents: function() {
                    const e = this
                      , {params: t} = e;
                    e.onTouchStart = y.bind(e),
                    e.onTouchMove = E.bind(e),
                    e.onTouchEnd = x.bind(e),
                    e.onDocumentTouchStart = O.bind(e),
                    t.cssMode && (e.onScroll = M.bind(e)),
                    e.onClick = P.bind(e),
                    e.onLoad = k.bind(e),
                    I(e, "on")
                },
                detachEvents: function() {
                    I(this, "off")
                }
            },
            breakpoints: {
                setBreakpoint: function() {
                    const e = this
                      , {realIndex: t, initialized: s, params: r, el: i} = e
                      , a = r.breakpoints;
                    if (!a || a && 0 === Object.keys(a).length)
                        return;
                    const l = e.getBreakpoint(a, e.params.breakpointsBase, e.el);
                    if (!l || e.currentBreakpoint === l)
                        return;
                    const o = (l in a ? a[l] : void 0) || e.originalParams
                      , d = L(e, r)
                      , c = L(e, o)
                      , p = r.enabled;
                    d && !c ? (i.classList.remove(`${r.containerModifierClass}grid`, `${r.containerModifierClass}grid-column`),
                    e.emitContainerClasses()) : !d && c && (i.classList.add(`${r.containerModifierClass}grid`),
                    (o.grid.fill && "column" === o.grid.fill || !o.grid.fill && "column" === r.grid.fill) && i.classList.add(`${r.containerModifierClass}grid-column`),
                    e.emitContainerClasses()),
                    ["navigation", "pagination", "scrollbar"].forEach((t=>{
                        if ("undefined" === typeof o[t])
                            return;
                        const s = r[t] && r[t].enabled
                          , i = o[t] && o[t].enabled;
                        s && !i && e[t].disable(),
                        !s && i && e[t].enable()
                    }
                    ));
                    const u = o.direction && o.direction !== r.direction
                      , f = r.loop && (o.slidesPerView !== r.slidesPerView || u)
                      , h = r.loop;
                    u && s && e.changeDirection(),
                    (0,
                    n.t)(e.params, o);
                    const m = e.params.enabled
                      , v = e.params.loop;
                    Object.assign(e, {
                        allowTouchMove: e.params.allowTouchMove,
                        allowSlideNext: e.params.allowSlideNext,
                        allowSlidePrev: e.params.allowSlidePrev
                    }),
                    p && !m ? e.disable() : !p && m && e.enable(),
                    e.currentBreakpoint = l,
                    e.emit("_beforeBreakpoint", o),
                    s && (f ? (e.loopDestroy(),
                    e.loopCreate(t),
                    e.updateSlides()) : !h && v ? (e.loopCreate(t),
                    e.updateSlides()) : h && !v && e.loopDestroy()),
                    e.emit("breakpoint", o)
                },
                getBreakpoint: function(e, t, s) {
                    if (void 0 === t && (t = "window"),
                    !e || "container" === t && !s)
                        return;
                    let r = !1;
                    const n = (0,
                    i.a)()
                      , a = "window" === t ? n.innerHeight : s.clientHeight
                      , l = Object.keys(e).map((e=>{
                        if ("string" === typeof e && 0 === e.indexOf("@")) {
                            const t = parseFloat(e.substr(1));
                            return {
                                value: a * t,
                                point: e
                            }
                        }
                        return {
                            value: e,
                            point: e
                        }
                    }
                    ));
                    l.sort(((e,t)=>parseInt(e.value, 10) - parseInt(t.value, 10)));
                    for (let i = 0; i < l.length; i += 1) {
                        const {point: e, value: a} = l[i];
                        "window" === t ? n.matchMedia(`(min-width: ${a}px)`).matches && (r = e) : a <= s.clientWidth && (r = e)
                    }
                    return r || "max"
                }
            },
            checkOverflow: {
                checkOverflow: function() {
                    const e = this
                      , {isLocked: t, params: s} = e
                      , {slidesOffsetBefore: r} = s;
                    if (r) {
                        const t = e.slides.length - 1
                          , s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * r;
                        e.isLocked = e.size > s
                    } else
                        e.isLocked = 1 === e.snapGrid.length;
                    !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
                    !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
                    t && t !== e.isLocked && (e.isEnd = !1),
                    t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
                }
            },
            classes: {
                addClasses: function() {
                    const e = this
                      , {classNames: t, params: s, rtl: r, el: i, device: n} = e
                      , a = function(e, t) {
                        const s = [];
                        return e.forEach((e=>{
                            "object" === typeof e ? Object.keys(e).forEach((r=>{
                                e[r] && s.push(t + r)
                            }
                            )) : "string" === typeof e && s.push(t + e)
                        }
                        )),
                        s
                    }(["initialized", s.direction, {
                        "free-mode": e.params.freeMode && s.freeMode.enabled
                    }, {
                        autoheight: s.autoHeight
                    }, {
                        rtl: r
                    }, {
                        grid: s.grid && s.grid.rows > 1
                    }, {
                        "grid-column": s.grid && s.grid.rows > 1 && "column" === s.grid.fill
                    }, {
                        android: n.android
                    }, {
                        ios: n.ios
                    }, {
                        "css-mode": s.cssMode
                    }, {
                        centered: s.cssMode && s.centeredSlides
                    }, {
                        "watch-progress": s.watchSlidesProgress
                    }], s.containerModifierClass);
                    t.push(...a),
                    i.classList.add(...t),
                    e.emitContainerClasses()
                },
                removeClasses: function() {
                    const {el: e, classNames: t} = this;
                    e.classList.remove(...t),
                    this.emitContainerClasses()
                }
            }
        }
          , G = {};
        class D {
            constructor() {
                let e, t;
                for (var s = arguments.length, r = new Array(s), a = 0; a < s; a++)
                    r[a] = arguments[a];
                1 === r.length && r[0].constructor && "Object" === Object.prototype.toString.call(r[0]).slice(8, -1) ? t = r[0] : [e,t] = r,
                t || (t = {}),
                t = (0,
                n.t)({}, t),
                e && !t.el && (t.el = e);
                const l = (0,
                i.g)();
                if (t.el && "string" === typeof t.el && l.querySelectorAll(t.el).length > 1) {
                    const e = [];
                    return l.querySelectorAll(t.el).forEach((s=>{
                        const r = (0,
                        n.t)({}, t, {
                            el: s
                        });
                        e.push(new D(r))
                    }
                    )),
                    e
                }
                const o = this;
                o.__swiper__ = !0,
                o.support = d(),
                o.device = c({
                    userAgent: t.userAgent
                }),
                o.browser = p(),
                o.eventsListeners = {},
                o.eventsAnyListeners = [],
                o.modules = [...o.__modules__],
                t.modules && Array.isArray(t.modules) && o.modules.push(...t.modules);
                const u = {};
                o.modules.forEach((e=>{
                    e({
                        params: t,
                        swiper: o,
                        extendParams: z(t, u),
                        on: o.on.bind(o),
                        once: o.once.bind(o),
                        off: o.off.bind(o),
                        emit: o.emit.bind(o)
                    })
                }
                ));
                const f = (0,
                n.t)({}, _, u);
                return o.params = (0,
                n.t)({}, f, G, t),
                o.originalParams = (0,
                n.t)({}, o.params),
                o.passedParams = (0,
                n.t)({}, t),
                o.params && o.params.on && Object.keys(o.params.on).forEach((e=>{
                    o.on(e, o.params.on[e])
                }
                )),
                o.params && o.params.onAny && o.onAny(o.params.onAny),
                Object.assign(o, {
                    enabled: o.params.enabled,
                    el: e,
                    classNames: [],
                    slides: [],
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal: ()=>"horizontal" === o.params.direction,
                    isVertical: ()=>"vertical" === o.params.direction,
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: !0,
                    isEnd: !1,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: !1,
                    cssOverflowAdjustment() {
                        return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
                    },
                    allowSlideNext: o.params.allowSlideNext,
                    allowSlidePrev: o.params.allowSlidePrev,
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        focusableElements: o.params.focusableElements,
                        lastClickTime: 0,
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        startMoving: void 0,
                        pointerId: null,
                        touchId: null
                    },
                    allowClick: !0,
                    allowTouchMove: o.params.allowTouchMove,
                    touches: {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    },
                    imagesToLoad: [],
                    imagesLoaded: 0
                }),
                o.emit("_swiper"),
                o.params.init && o.init(),
                o
            }
            getDirectionLabel(e) {
                return this.isHorizontal() ? e : {
                    width: "height",
                    "margin-top": "margin-left",
                    "margin-bottom ": "margin-right",
                    "margin-left": "margin-top",
                    "margin-right": "margin-bottom",
                    "padding-left": "padding-top",
                    "padding-right": "padding-bottom",
                    marginRight: "marginBottom"
                }[e]
            }
            getSlideIndex(e) {
                const {slidesEl: t, params: s} = this
                  , r = (0,
                n.e)(t, `.${s.slideClass}, swiper-slide`)
                  , i = (0,
                n.g)(r[0]);
                return (0,
                n.g)(e) - i
            }
            getSlideIndexByData(e) {
                return this.getSlideIndex(this.slides.filter((t=>1 * t.getAttribute("data-swiper-slide-index") === e))[0])
            }
            recalcSlides() {
                const {slidesEl: e, params: t} = this;
                this.slides = (0,
                n.e)(e, `.${t.slideClass}, swiper-slide`)
            }
            enable() {
                const e = this;
                e.enabled || (e.enabled = !0,
                e.params.grabCursor && e.setGrabCursor(),
                e.emit("enable"))
            }
            disable() {
                const e = this;
                e.enabled && (e.enabled = !1,
                e.params.grabCursor && e.unsetGrabCursor(),
                e.emit("disable"))
            }
            setProgress(e, t) {
                const s = this;
                e = Math.min(Math.max(e, 0), 1);
                const r = s.minTranslate()
                  , i = (s.maxTranslate() - r) * e + r;
                s.translateTo(i, "undefined" === typeof t ? 0 : t),
                s.updateActiveIndex(),
                s.updateSlidesClasses()
            }
            emitContainerClasses() {
                const e = this;
                if (!e.params._emitClasses || !e.el)
                    return;
                const t = e.el.className.split(" ").filter((t=>0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass)));
                e.emit("_containerClasses", t.join(" "))
            }
            getSlideClasses(e) {
                const t = this;
                return t.destroyed ? "" : e.className.split(" ").filter((e=>0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass))).join(" ")
            }
            emitSlidesClasses() {
                const e = this;
                if (!e.params._emitClasses || !e.el)
                    return;
                const t = [];
                e.slides.forEach((s=>{
                    const r = e.getSlideClasses(s);
                    t.push({
                        slideEl: s,
                        classNames: r
                    }),
                    e.emit("_slideClass", s, r)
                }
                )),
                e.emit("_slideClasses", t)
            }
            slidesPerViewDynamic(e, t) {
                void 0 === e && (e = "current"),
                void 0 === t && (t = !1);
                const {params: s, slides: r, slidesGrid: i, slidesSizesGrid: n, size: a, activeIndex: l} = this;
                let o = 1;
                if ("number" === typeof s.slidesPerView)
                    return s.slidesPerView;
                if (s.centeredSlides) {
                    let e, t = r[l] ? r[l].swiperSlideSize : 0;
                    for (let s = l + 1; s < r.length; s += 1)
                        r[s] && !e && (t += r[s].swiperSlideSize,
                        o += 1,
                        t > a && (e = !0));
                    for (let s = l - 1; s >= 0; s -= 1)
                        r[s] && !e && (t += r[s].swiperSlideSize,
                        o += 1,
                        t > a && (e = !0))
                } else if ("current" === e)
                    for (let d = l + 1; d < r.length; d += 1) {
                        (t ? i[d] + n[d] - i[l] < a : i[d] - i[l] < a) && (o += 1)
                    }
                else
                    for (let d = l - 1; d >= 0; d -= 1) {
                        i[l] - i[d] < a && (o += 1)
                    }
                return o
            }
            update() {
                const e = this;
                if (!e || e.destroyed)
                    return;
                const {snapGrid: t, params: s} = e;
                function r() {
                    const t = e.rtlTranslate ? -1 * e.translate : e.translate
                      , s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                    e.setTranslate(s),
                    e.updateActiveIndex(),
                    e.updateSlidesClasses()
                }
                let i;
                if (s.breakpoints && e.setBreakpoint(),
                [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t=>{
                    t.complete && f(e, t)
                }
                )),
                e.updateSize(),
                e.updateSlides(),
                e.updateProgress(),
                e.updateSlidesClasses(),
                s.freeMode && s.freeMode.enabled && !s.cssMode)
                    r(),
                    s.autoHeight && e.updateAutoHeight();
                else {
                    if (("auto" === s.slidesPerView || s.slidesPerView > 1) && e.isEnd && !s.centeredSlides) {
                        const t = e.virtual && s.virtual.enabled ? e.virtual.slides : e.slides;
                        i = e.slideTo(t.length - 1, 0, !1, !0)
                    } else
                        i = e.slideTo(e.activeIndex, 0, !1, !0);
                    i || r()
                }
                s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
                e.emit("update")
            }
            changeDirection(e, t) {
                void 0 === t && (t = !0);
                const s = this
                  , r = s.params.direction;
                return e || (e = "horizontal" === r ? "vertical" : "horizontal"),
                e === r || "horizontal" !== e && "vertical" !== e || (s.el.classList.remove(`${s.params.containerModifierClass}${r}`),
                s.el.classList.add(`${s.params.containerModifierClass}${e}`),
                s.emitContainerClasses(),
                s.params.direction = e,
                s.slides.forEach((t=>{
                    "vertical" === e ? t.style.width = "" : t.style.height = ""
                }
                )),
                s.emit("changeDirection"),
                t && s.update()),
                s
            }
            changeLanguageDirection(e) {
                const t = this;
                t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e,
                t.rtlTranslate = "horizontal" === t.params.direction && t.rtl,
                t.rtl ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`),
                t.el.dir = "rtl") : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`),
                t.el.dir = "ltr"),
                t.update())
            }
            mount(e) {
                const t = this;
                if (t.mounted)
                    return !0;
                let s = e || t.params.el;
                if ("string" === typeof s && (s = document.querySelector(s)),
                !s)
                    return !1;
                s.swiper = t,
                s.parentNode && s.parentNode.host && "SWIPER-CONTAINER" === s.parentNode.host.nodeName && (t.isElement = !0);
                const r = ()=>`.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
                let i = (()=>{
                    if (s && s.shadowRoot && s.shadowRoot.querySelector) {
                        return s.shadowRoot.querySelector(r())
                    }
                    return (0,
                    n.e)(s, r())[0]
                }
                )();
                return !i && t.params.createElements && (i = (0,
                n.c)("div", t.params.wrapperClass),
                s.append(i),
                (0,
                n.e)(s, `.${t.params.slideClass}`).forEach((e=>{
                    i.append(e)
                }
                ))),
                Object.assign(t, {
                    el: s,
                    wrapperEl: i,
                    slidesEl: t.isElement && !s.parentNode.host.slideSlots ? s.parentNode.host : i,
                    hostEl: t.isElement ? s.parentNode.host : s,
                    mounted: !0,
                    rtl: "rtl" === s.dir.toLowerCase() || "rtl" === (0,
                    n.m)(s, "direction"),
                    rtlTranslate: "horizontal" === t.params.direction && ("rtl" === s.dir.toLowerCase() || "rtl" === (0,
                    n.m)(s, "direction")),
                    wrongRTL: "-webkit-box" === (0,
                    n.m)(i, "display")
                }),
                !0
            }
            init(e) {
                const t = this;
                if (t.initialized)
                    return t;
                if (!1 === t.mount(e))
                    return t;
                t.emit("beforeInit"),
                t.params.breakpoints && t.setBreakpoint(),
                t.addClasses(),
                t.updateSize(),
                t.updateSlides(),
                t.params.watchOverflow && t.checkOverflow(),
                t.params.grabCursor && t.enabled && t.setGrabCursor(),
                t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0),
                t.params.loop && t.loopCreate(),
                t.attachEvents();
                const s = [...t.el.querySelectorAll('[loading="lazy"]')];
                return t.isElement && s.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),
                s.forEach((e=>{
                    e.complete ? f(t, e) : e.addEventListener("load", (e=>{
                        f(t, e.target)
                    }
                    ))
                }
                )),
                m(t),
                t.initialized = !0,
                m(t),
                t.emit("init"),
                t.emit("afterInit"),
                t
            }
            destroy(e, t) {
                void 0 === e && (e = !0),
                void 0 === t && (t = !0);
                const s = this
                  , {params: r, el: i, wrapperEl: a, slides: l} = s;
                return "undefined" === typeof s.params || s.destroyed || (s.emit("beforeDestroy"),
                s.initialized = !1,
                s.detachEvents(),
                r.loop && s.loopDestroy(),
                t && (s.removeClasses(),
                i.removeAttribute("style"),
                a.removeAttribute("style"),
                l && l.length && l.forEach((e=>{
                    e.classList.remove(r.slideVisibleClass, r.slideFullyVisibleClass, r.slideActiveClass, r.slideNextClass, r.slidePrevClass),
                    e.removeAttribute("style"),
                    e.removeAttribute("data-swiper-slide-index")
                }
                ))),
                s.emit("destroy"),
                Object.keys(s.eventsListeners).forEach((e=>{
                    s.off(e)
                }
                )),
                !1 !== e && (s.el.swiper = null,
                (0,
                n.u)(s)),
                s.destroyed = !0),
                null
            }
            static extendDefaults(e) {
                (0,
                n.t)(G, e)
            }
            static get extendedDefaults() {
                return G
            }
            static get defaults() {
                return _
            }
            static installModule(e) {
                D.prototype.__modules__ || (D.prototype.__modules__ = []);
                const t = D.prototype.__modules__;
                "function" === typeof e && t.indexOf(e) < 0 && t.push(e)
            }
            static use(e) {
                return Array.isArray(e) ? (e.forEach((e=>D.installModule(e))),
                D) : (D.installModule(e),
                D)
            }
        }
        Object.keys(A).forEach((e=>{
            Object.keys(A[e]).forEach((t=>{
                D.prototype[t] = A[e][t]
            }
            ))
        }
        )),
        D.use([function(e) {
            let {swiper: t, on: s, emit: r} = e;
            const n = (0,
            i.a)();
            let a = null
              , l = null;
            const o = ()=>{
                t && !t.destroyed && t.initialized && (r("beforeResize"),
                r("resize"))
            }
              , d = ()=>{
                t && !t.destroyed && t.initialized && r("orientationchange")
            }
            ;
            s("init", (()=>{
                t.params.resizeObserver && "undefined" !== typeof n.ResizeObserver ? t && !t.destroyed && t.initialized && (a = new ResizeObserver((e=>{
                    l = n.requestAnimationFrame((()=>{
                        const {width: s, height: r} = t;
                        let i = s
                          , n = r;
                        e.forEach((e=>{
                            let {contentBoxSize: s, contentRect: r, target: a} = e;
                            a && a !== t.el || (i = r ? r.width : (s[0] || s).inlineSize,
                            n = r ? r.height : (s[0] || s).blockSize)
                        }
                        )),
                        i === s && n === r || o()
                    }
                    ))
                }
                )),
                a.observe(t.el)) : (n.addEventListener("resize", o),
                n.addEventListener("orientationchange", d))
            }
            )),
            s("destroy", (()=>{
                l && n.cancelAnimationFrame(l),
                a && a.unobserve && t.el && (a.unobserve(t.el),
                a = null),
                n.removeEventListener("resize", o),
                n.removeEventListener("orientationchange", d)
            }
            ))
        }
        , function(e) {
            let {swiper: t, extendParams: s, on: r, emit: a} = e;
            const l = []
              , o = (0,
            i.a)()
              , d = function(e, s) {
                void 0 === s && (s = {});
                const r = new (o.MutationObserver || o.WebkitMutationObserver)((e=>{
                    if (t.__preventObserver__)
                        return;
                    if (1 === e.length)
                        return void a("observerUpdate", e[0]);
                    const s = function() {
                        a("observerUpdate", e[0])
                    };
                    o.requestAnimationFrame ? o.requestAnimationFrame(s) : o.setTimeout(s, 0)
                }
                ));
                r.observe(e, {
                    attributes: "undefined" === typeof s.attributes || s.attributes,
                    childList: "undefined" === typeof s.childList || s.childList,
                    characterData: "undefined" === typeof s.characterData || s.characterData
                }),
                l.push(r)
            };
            s({
                observer: !1,
                observeParents: !1,
                observeSlideChildren: !1
            }),
            r("init", (()=>{
                if (t.params.observer) {
                    if (t.params.observeParents) {
                        const e = (0,
                        n.a)(t.hostEl);
                        for (let t = 0; t < e.length; t += 1)
                            d(e[t])
                    }
                    d(t.hostEl, {
                        childList: t.params.observeSlideChildren
                    }),
                    d(t.wrapperEl, {
                        attributes: !1
                    })
                }
            }
            )),
            r("destroy", (()=>{
                l.forEach((e=>{
                    e.disconnect()
                }
                )),
                l.splice(0, l.length)
            }
            ))
        }
        ]);
        const N = ["eventsPrefix", "injectStyles", "injectStylesUrls", "modules", "init", "_direction", "oneWayMovement", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "breakpointsBase", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_loop", "loopAdditionalSlides", "loopAddBlankSlides", "loopPreventsSliding", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideActiveClass", "slideVisibleClass", "slideFullyVisibleClass", "slideNextClass", "slidePrevClass", "slideBlankClass", "wrapperClass", "lazyPreloaderClass", "lazyPreloadPrevNext", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom", "control"];
        function V(e) {
            return "object" === typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1) && !e.__swiper__
        }
        function B(e, t) {
            const s = ["__proto__", "constructor", "prototype"];
            Object.keys(t).filter((e=>s.indexOf(e) < 0)).forEach((s=>{
                "undefined" === typeof e[s] ? e[s] = t[s] : V(t[s]) && V(e[s]) && Object.keys(t[s]).length > 0 ? t[s].__swiper__ ? e[s] = t[s] : B(e[s], t[s]) : e[s] = t[s]
            }
            ))
        }
        function j(e) {
            return void 0 === e && (e = {}),
            e.navigation && "undefined" === typeof e.navigation.nextEl && "undefined" === typeof e.navigation.prevEl
        }
        function F(e) {
            return void 0 === e && (e = {}),
            e.pagination && "undefined" === typeof e.pagination.el
        }
        function R(e) {
            return void 0 === e && (e = {}),
            e.scrollbar && "undefined" === typeof e.scrollbar.el
        }
        function $(e) {
            void 0 === e && (e = "");
            const t = e.split(" ").map((e=>e.trim())).filter((e=>!!e))
              , s = [];
            return t.forEach((e=>{
                s.indexOf(e) < 0 && s.push(e)
            }
            )),
            s.join(" ")
        }
        function H(e) {
            return void 0 === e && (e = ""),
            e ? e.includes("swiper-wrapper") ? e : `swiper-wrapper ${e}` : "swiper-wrapper"
        }
        function W() {
            return W = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var s = arguments[t];
                    for (var r in s)
                        Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
                }
                return e
            }
            ,
            W.apply(this, arguments)
        }
        function q(e) {
            return e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
        }
        function Y(e) {
            const t = [];
            return r.Children.toArray(e).forEach((e=>{
                q(e) ? t.push(e) : e.props && e.props.children && Y(e.props.children).forEach((e=>t.push(e)))
            }
            )),
            t
        }
        function X(e) {
            const t = []
              , s = {
                "container-start": [],
                "container-end": [],
                "wrapper-start": [],
                "wrapper-end": []
            };
            return r.Children.toArray(e).forEach((e=>{
                if (q(e))
                    t.push(e);
                else if (e.props && e.props.slot && s[e.props.slot])
                    s[e.props.slot].push(e);
                else if (e.props && e.props.children) {
                    const r = Y(e.props.children);
                    r.length > 0 ? r.forEach((e=>t.push(e))) : s["container-end"].push(e)
                } else
                    s["container-end"].push(e)
            }
            )),
            {
                slides: t,
                slots: s
            }
        }
        function U(e, t) {
            return "undefined" === typeof window ? (0,
            r.useEffect)(e, t) : (0,
            r.useLayoutEffect)(e, t)
        }
        const K = (0,
        r.createContext)(null)
          , Z = (0,
        r.createContext)(null)
          , J = ()=>(0,
        r.useContext)(Z)
          , Q = (0,
        r.forwardRef)((function(e, t) {
            let {className: s, tag: i="div", wrapperTag: n="div", children: a, onSwiper: l, ...o} = void 0 === e ? {} : e
              , d = !1;
            const [c,p] = (0,
            r.useState)("swiper")
              , [u,f] = (0,
            r.useState)(null)
              , [h,m] = (0,
            r.useState)(!1)
              , v = (0,
            r.useRef)(!1)
              , g = (0,
            r.useRef)(null)
              , w = (0,
            r.useRef)(null)
              , S = (0,
            r.useRef)(null)
              , b = (0,
            r.useRef)(null)
              , T = (0,
            r.useRef)(null)
              , y = (0,
            r.useRef)(null)
              , E = (0,
            r.useRef)(null)
              , x = (0,
            r.useRef)(null)
              , {params: C, passedParams: P, rest: M, events: k} = function(e, t) {
                void 0 === e && (e = {}),
                void 0 === t && (t = !0);
                const s = {
                    on: {}
                }
                  , r = {}
                  , i = {};
                B(s, _),
                s._emitClasses = !0,
                s.init = !1;
                const n = {}
                  , a = N.map((e=>e.replace(/_/, "")))
                  , l = Object.assign({}, e);
                return Object.keys(l).forEach((l=>{
                    "undefined" !== typeof e[l] && (a.indexOf(l) >= 0 ? V(e[l]) ? (s[l] = {},
                    i[l] = {},
                    B(s[l], e[l]),
                    B(i[l], e[l])) : (s[l] = e[l],
                    i[l] = e[l]) : 0 === l.search(/on[A-Z]/) && "function" === typeof e[l] ? t ? r[`${l[2].toLowerCase()}${l.substr(3)}`] = e[l] : s.on[`${l[2].toLowerCase()}${l.substr(3)}`] = e[l] : n[l] = e[l])
                }
                )),
                ["navigation", "pagination", "scrollbar"].forEach((e=>{
                    !0 === s[e] && (s[e] = {}),
                    !1 === s[e] && delete s[e]
                }
                )),
                {
                    params: s,
                    passedParams: i,
                    rest: n,
                    events: r
                }
            }(o)
              , {slides: O, slots: I} = X(a)
              , L = ()=>{
                m(!h)
            }
            ;
            Object.assign(C.on, {
                _containerClasses(e, t) {
                    p(t)
                }
            });
            const z = ()=>{
                Object.assign(C.on, k),
                d = !0;
                const e = {
                    ...C
                };
                if (delete e.wrapperClass,
                w.current = new D(e),
                w.current.virtual && w.current.params.virtual.enabled) {
                    w.current.virtual.slides = O;
                    const e = {
                        cache: !1,
                        slides: O,
                        renderExternal: f,
                        renderExternalUpdate: !1
                    };
                    B(w.current.params.virtual, e),
                    B(w.current.originalParams.virtual, e)
                }
            }
            ;
            g.current || z(),
            w.current && w.current.on("_beforeBreakpoint", L);
            return (0,
            r.useEffect)((()=>()=>{
                w.current && w.current.off("_beforeBreakpoint", L)
            }
            )),
            (0,
            r.useEffect)((()=>{
                !v.current && w.current && (w.current.emitSlidesClasses(),
                v.current = !0)
            }
            )),
            U((()=>{
                if (t && (t.current = g.current),
                g.current)
                    return w.current.destroyed && z(),
                    function(e, t) {
                        let {el: s, nextEl: r, prevEl: i, paginationEl: n, scrollbarEl: a, swiper: l} = e;
                        j(t) && r && i && (l.params.navigation.nextEl = r,
                        l.originalParams.navigation.nextEl = r,
                        l.params.navigation.prevEl = i,
                        l.originalParams.navigation.prevEl = i),
                        F(t) && n && (l.params.pagination.el = n,
                        l.originalParams.pagination.el = n),
                        R(t) && a && (l.params.scrollbar.el = a,
                        l.originalParams.scrollbar.el = a),
                        l.init(s)
                    }({
                        el: g.current,
                        nextEl: T.current,
                        prevEl: y.current,
                        paginationEl: E.current,
                        scrollbarEl: x.current,
                        swiper: w.current
                    }, C),
                    l && l(w.current),
                    ()=>{
                        w.current && !w.current.destroyed && w.current.destroy(!0, !1)
                    }
            }
            ), []),
            U((()=>{
                !d && k && w.current && Object.keys(k).forEach((e=>{
                    w.current.on(e, k[e])
                }
                ));
                const e = function(e, t, s, r, i) {
                    const n = [];
                    if (!t)
                        return n;
                    const a = e=>{
                        n.indexOf(e) < 0 && n.push(e)
                    }
                    ;
                    if (s && r) {
                        const e = r.map(i)
                          , t = s.map(i);
                        e.join("") !== t.join("") && a("children"),
                        r.length !== s.length && a("children")
                    }
                    return N.filter((e=>"_" === e[0])).map((e=>e.replace(/_/, ""))).forEach((s=>{
                        if (s in e && s in t)
                            if (V(e[s]) && V(t[s])) {
                                const r = Object.keys(e[s])
                                  , i = Object.keys(t[s]);
                                r.length !== i.length ? a(s) : (r.forEach((r=>{
                                    e[s][r] !== t[s][r] && a(s)
                                }
                                )),
                                i.forEach((r=>{
                                    e[s][r] !== t[s][r] && a(s)
                                }
                                )))
                            } else
                                e[s] !== t[s] && a(s)
                    }
                    )),
                    n
                }(P, S.current, O, b.current, (e=>e.key));
                return S.current = P,
                b.current = O,
                e.length && w.current && !w.current.destroyed && function(e) {
                    let {swiper: t, slides: s, passedParams: r, changedParams: i, nextEl: n, prevEl: a, scrollbarEl: l, paginationEl: o} = e;
                    const d = i.filter((e=>"children" !== e && "direction" !== e && "wrapperClass" !== e))
                      , {params: c, pagination: p, navigation: u, scrollbar: f, virtual: h, thumbs: m} = t;
                    let v, g, w, S, b, T, y, E;
                    i.includes("thumbs") && r.thumbs && r.thumbs.swiper && c.thumbs && !c.thumbs.swiper && (v = !0),
                    i.includes("controller") && r.controller && r.controller.control && c.controller && !c.controller.control && (g = !0),
                    i.includes("pagination") && r.pagination && (r.pagination.el || o) && (c.pagination || !1 === c.pagination) && p && !p.el && (w = !0),
                    i.includes("scrollbar") && r.scrollbar && (r.scrollbar.el || l) && (c.scrollbar || !1 === c.scrollbar) && f && !f.el && (S = !0),
                    i.includes("navigation") && r.navigation && (r.navigation.prevEl || a) && (r.navigation.nextEl || n) && (c.navigation || !1 === c.navigation) && u && !u.prevEl && !u.nextEl && (b = !0);
                    const x = e=>{
                        t[e] && (t[e].destroy(),
                        "navigation" === e ? (t.isElement && (t[e].prevEl.remove(),
                        t[e].nextEl.remove()),
                        c[e].prevEl = void 0,
                        c[e].nextEl = void 0,
                        t[e].prevEl = void 0,
                        t[e].nextEl = void 0) : (t.isElement && t[e].el.remove(),
                        c[e].el = void 0,
                        t[e].el = void 0))
                    }
                    ;
                    i.includes("loop") && t.isElement && (c.loop && !r.loop ? T = !0 : !c.loop && r.loop ? y = !0 : E = !0),
                    d.forEach((e=>{
                        if (V(c[e]) && V(r[e]))
                            Object.assign(c[e], r[e]),
                            "navigation" !== e && "pagination" !== e && "scrollbar" !== e || !("enabled"in r[e]) || r[e].enabled || x(e);
                        else {
                            const t = r[e];
                            !0 !== t && !1 !== t || "navigation" !== e && "pagination" !== e && "scrollbar" !== e ? c[e] = r[e] : !1 === t && x(e)
                        }
                    }
                    )),
                    d.includes("controller") && !g && t.controller && t.controller.control && c.controller && c.controller.control && (t.controller.control = c.controller.control),
                    i.includes("children") && s && h && c.virtual.enabled ? (h.slides = s,
                    h.update(!0)) : i.includes("virtual") && h && c.virtual.enabled && (s && (h.slides = s),
                    h.update(!0)),
                    i.includes("children") && s && c.loop && (E = !0),
                    v && m.init() && m.update(!0);
                    g && (t.controller.control = c.controller.control),
                    w && (!t.isElement || o && "string" !== typeof o || (o = document.createElement("div"),
                    o.classList.add("swiper-pagination"),
                    o.part.add("pagination"),
                    t.el.appendChild(o)),
                    o && (c.pagination.el = o),
                    p.init(),
                    p.render(),
                    p.update()),
                    S && (!t.isElement || l && "string" !== typeof l || (l = document.createElement("div"),
                    l.classList.add("swiper-scrollbar"),
                    l.part.add("scrollbar"),
                    t.el.appendChild(l)),
                    l && (c.scrollbar.el = l),
                    f.init(),
                    f.updateSize(),
                    f.setTranslate()),
                    b && (t.isElement && (n && "string" !== typeof n || (n = document.createElement("div"),
                    n.classList.add("swiper-button-next"),
                    n.innerHTML = t.hostEl.constructor.nextButtonSvg,
                    n.part.add("button-next"),
                    t.el.appendChild(n)),
                    a && "string" !== typeof a || (a = document.createElement("div"),
                    a.classList.add("swiper-button-prev"),
                    a.innerHTML = t.hostEl.constructor.prevButtonSvg,
                    a.part.add("button-prev"),
                    t.el.appendChild(a))),
                    n && (c.navigation.nextEl = n),
                    a && (c.navigation.prevEl = a),
                    u.init(),
                    u.update()),
                    i.includes("allowSlideNext") && (t.allowSlideNext = r.allowSlideNext),
                    i.includes("allowSlidePrev") && (t.allowSlidePrev = r.allowSlidePrev),
                    i.includes("direction") && t.changeDirection(r.direction, !1),
                    (T || E) && t.loopDestroy(),
                    (y || E) && t.loopCreate(),
                    t.update()
                }({
                    swiper: w.current,
                    slides: O,
                    passedParams: P,
                    changedParams: e,
                    nextEl: T.current,
                    prevEl: y.current,
                    scrollbarEl: x.current,
                    paginationEl: E.current
                }),
                ()=>{
                    k && w.current && Object.keys(k).forEach((e=>{
                        w.current.off(e, k[e])
                    }
                    ))
                }
            }
            )),
            U((()=>{
                var e;
                !(e = w.current) || e.destroyed || !e.params.virtual || e.params.virtual && !e.params.virtual.enabled || (e.updateSlides(),
                e.updateProgress(),
                e.updateSlidesClasses(),
                e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate())
            }
            ), [u]),
            r.createElement(i, W({
                ref: g,
                className: $(`${c}${s ? ` ${s}` : ""}`)
            }, M), r.createElement(Z.Provider, {
                value: w.current
            }, I["container-start"], r.createElement(n, {
                className: H(C.wrapperClass)
            }, I["wrapper-start"], C.virtual ? function(e, t, s) {
                if (!s)
                    return null;
                const i = e=>{
                    let s = e;
                    return e < 0 ? s = t.length + e : s >= t.length && (s -= t.length),
                    s
                }
                  , n = e.isHorizontal() ? {
                    [e.rtlTranslate ? "right" : "left"]: `${s.offset}px`
                } : {
                    top: `${s.offset}px`
                }
                  , {from: a, to: l} = s
                  , o = e.params.loop ? -t.length : 0
                  , d = e.params.loop ? 2 * t.length : t.length
                  , c = [];
                for (let r = o; r < d; r += 1)
                    r >= a && r <= l && c.push(t[i(r)]);
                return c.map(((t,s)=>r.cloneElement(t, {
                    swiper: e,
                    style: n,
                    key: `slide-${s}`
                })))
            }(w.current, O, u) : O.map(((e,t)=>r.cloneElement(e, {
                swiper: w.current,
                swiperSlideIndex: t
            }))), I["wrapper-end"]), j(C) && r.createElement(r.Fragment, null, r.createElement("div", {
                ref: y,
                className: "swiper-button-prev"
            }), r.createElement("div", {
                ref: T,
                className: "swiper-button-next"
            })), R(C) && r.createElement("div", {
                ref: x,
                className: "swiper-scrollbar"
            }), F(C) && r.createElement("div", {
                ref: E,
                className: "swiper-pagination"
            }), I["container-end"]))
        }
        ));
        Q.displayName = "Swiper";
        const ee = (0,
        r.forwardRef)((function(e, t) {
            let {tag: s="div", children: i, className: n="", swiper: a, zoom: l, lazy: o, virtualIndex: d, swiperSlideIndex: c, ...p} = void 0 === e ? {} : e;
            const u = (0,
            r.useRef)(null)
              , [f,h] = (0,
            r.useState)("swiper-slide")
              , [m,v] = (0,
            r.useState)(!1);
            function g(e, t, s) {
                t === u.current && h(s)
            }
            U((()=>{
                if ("undefined" !== typeof c && (u.current.swiperSlideIndex = c),
                t && (t.current = u.current),
                u.current && a) {
                    if (!a.destroyed)
                        return a.on("_slideClass", g),
                        ()=>{
                            a && a.off("_slideClass", g)
                        }
                        ;
                    "swiper-slide" !== f && h("swiper-slide")
                }
            }
            )),
            U((()=>{
                a && u.current && !a.destroyed && h(a.getSlideClasses(u.current))
            }
            ), [a]);
            const w = {
                isActive: f.indexOf("swiper-slide-active") >= 0,
                isVisible: f.indexOf("swiper-slide-visible") >= 0,
                isPrev: f.indexOf("swiper-slide-prev") >= 0,
                isNext: f.indexOf("swiper-slide-next") >= 0
            }
              , S = ()=>"function" === typeof i ? i(w) : i;
            return r.createElement(s, W({
                ref: u,
                className: $(`${f}${n ? ` ${n}` : ""}`),
                "data-swiper-slide-index": d,
                onLoad: ()=>{
                    v(!0)
                }
            }, p), l && r.createElement(K.Provider, {
                value: w
            }, r.createElement("div", {
                className: "swiper-zoom-container",
                "data-swiper-zoom": "number" === typeof l ? l : void 0
            }, S(), o && !m && r.createElement("div", {
                className: "swiper-lazy-preloader"
            }))), !l && r.createElement(K.Provider, {
                value: w
            }, S(), o && !m && r.createElement("div", {
                className: "swiper-lazy-preloader"
            })))
        }
        ));
        ee.displayName = "SwiperSlide"
    }
}]);
