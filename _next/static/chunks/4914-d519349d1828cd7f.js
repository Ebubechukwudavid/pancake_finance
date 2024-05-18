"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[4914], {
    54914: function(e, a, t) {
        t.d(a, {
            pt: function() {
                return c
            },
            xW: function() {
                return g
            },
            Rv: function() {
                return u
            },
            N1: function() {
                return i
            },
            Gk: function() {
                return l
            },
            W_: function() {
                return o
            },
            tl: function() {
                return p
            }
        });
        var s = t(97364)
          , n = t(95122);
        function i(e) {
            let {swiper: a, extendParams: t, on: i, emit: l} = e;
            const r = (0,
            s.g)()
              , o = (0,
            s.a)();
            function d(e) {
                if (!a.enabled)
                    return;
                const {rtlTranslate: t} = a;
                let s = e;
                s.originalEvent && (s = s.originalEvent);
                const i = s.keyCode || s.charCode
                  , d = a.params.keyboard.pageUpDown
                  , p = d && 33 === i
                  , c = d && 34 === i
                  , u = 37 === i
                  , m = 39 === i
                  , f = 38 === i
                  , g = 40 === i;
                if (!a.allowSlideNext && (a.isHorizontal() && m || a.isVertical() && g || c))
                    return !1;
                if (!a.allowSlidePrev && (a.isHorizontal() && u || a.isVertical() && f || p))
                    return !1;
                if (!(s.shiftKey || s.altKey || s.ctrlKey || s.metaKey) && (!r.activeElement || !r.activeElement.nodeName || "input" !== r.activeElement.nodeName.toLowerCase() && "textarea" !== r.activeElement.nodeName.toLowerCase())) {
                    if (a.params.keyboard.onlyInViewport && (p || c || u || m || f || g)) {
                        let e = !1;
                        if ((0,
                        n.a)(a.el, `.${a.params.slideClass}, swiper-slide`).length > 0 && 0 === (0,
                        n.a)(a.el, `.${a.params.slideActiveClass}`).length)
                            return;
                        const s = a.el
                          , i = s.clientWidth
                          , l = s.clientHeight
                          , r = o.innerWidth
                          , d = o.innerHeight
                          , p = (0,
                        n.b)(s);
                        t && (p.left -= s.scrollLeft);
                        const c = [[p.left, p.top], [p.left + i, p.top], [p.left, p.top + l], [p.left + i, p.top + l]];
                        for (let a = 0; a < c.length; a += 1) {
                            const t = c[a];
                            if (t[0] >= 0 && t[0] <= r && t[1] >= 0 && t[1] <= d) {
                                if (0 === t[0] && 0 === t[1])
                                    continue;
                                e = !0
                            }
                        }
                        if (!e)
                            return
                    }
                    a.isHorizontal() ? ((p || c || u || m) && (s.preventDefault ? s.preventDefault() : s.returnValue = !1),
                    ((c || m) && !t || (p || u) && t) && a.slideNext(),
                    ((p || u) && !t || (c || m) && t) && a.slidePrev()) : ((p || c || f || g) && (s.preventDefault ? s.preventDefault() : s.returnValue = !1),
                    (c || g) && a.slideNext(),
                    (p || f) && a.slidePrev()),
                    l("keyPress", i)
                }
            }
            function p() {
                a.keyboard.enabled || (r.addEventListener("keydown", d),
                a.keyboard.enabled = !0)
            }
            function c() {
                a.keyboard.enabled && (r.removeEventListener("keydown", d),
                a.keyboard.enabled = !1)
            }
            a.keyboard = {
                enabled: !1
            },
            t({
                keyboard: {
                    enabled: !1,
                    onlyInViewport: !0,
                    pageUpDown: !0
                }
            }),
            i("init", (()=>{
                a.params.keyboard.enabled && p()
            }
            )),
            i("destroy", (()=>{
                a.keyboard.enabled && c()
            }
            )),
            Object.assign(a.keyboard, {
                enable: p,
                disable: c
            })
        }
        function l(e) {
            let {swiper: a, extendParams: t, on: i, emit: l} = e;
            const r = (0,
            s.a)();
            let o;
            t({
                mousewheel: {
                    enabled: !1,
                    releaseOnEdges: !1,
                    invert: !1,
                    forceToAxis: !1,
                    sensitivity: 1,
                    eventsTarget: "container",
                    thresholdDelta: null,
                    thresholdTime: null,
                    noMousewheelClass: "swiper-no-mousewheel"
                }
            }),
            a.mousewheel = {
                enabled: !1
            };
            let d, p = (0,
            n.d)();
            const c = [];
            function u() {
                a.enabled && (a.mouseEntered = !0)
            }
            function m() {
                a.enabled && (a.mouseEntered = !1)
            }
            function f(e) {
                return !(a.params.mousewheel.thresholdDelta && e.delta < a.params.mousewheel.thresholdDelta) && (!(a.params.mousewheel.thresholdTime && (0,
                n.d)() - p < a.params.mousewheel.thresholdTime) && (e.delta >= 6 && (0,
                n.d)() - p < 60 || (e.direction < 0 ? a.isEnd && !a.params.loop || a.animating || (a.slideNext(),
                l("scroll", e.raw)) : a.isBeginning && !a.params.loop || a.animating || (a.slidePrev(),
                l("scroll", e.raw)),
                p = (new r.Date).getTime(),
                !1)))
            }
            function g(e) {
                let t = e
                  , s = !0;
                if (!a.enabled)
                    return;
                if (e.target.closest(`.${a.params.mousewheel.noMousewheelClass}`))
                    return;
                const i = a.params.mousewheel;
                a.params.cssMode && t.preventDefault();
                let r = a.el;
                "container" !== a.params.mousewheel.eventsTarget && (r = document.querySelector(a.params.mousewheel.eventsTarget));
                const p = r && r.contains(t.target);
                if (!a.mouseEntered && !p && !i.releaseOnEdges)
                    return !0;
                t.originalEvent && (t = t.originalEvent);
                let u = 0;
                const m = a.rtlTranslate ? -1 : 1
                  , g = function(e) {
                    let a = 0
                      , t = 0
                      , s = 0
                      , n = 0;
                    return "detail"in e && (t = e.detail),
                    "wheelDelta"in e && (t = -e.wheelDelta / 120),
                    "wheelDeltaY"in e && (t = -e.wheelDeltaY / 120),
                    "wheelDeltaX"in e && (a = -e.wheelDeltaX / 120),
                    "axis"in e && e.axis === e.HORIZONTAL_AXIS && (a = t,
                    t = 0),
                    s = 10 * a,
                    n = 10 * t,
                    "deltaY"in e && (n = e.deltaY),
                    "deltaX"in e && (s = e.deltaX),
                    e.shiftKey && !s && (s = n,
                    n = 0),
                    (s || n) && e.deltaMode && (1 === e.deltaMode ? (s *= 40,
                    n *= 40) : (s *= 800,
                    n *= 800)),
                    s && !a && (a = s < 1 ? -1 : 1),
                    n && !t && (t = n < 1 ? -1 : 1),
                    {
                        spinX: a,
                        spinY: t,
                        pixelX: s,
                        pixelY: n
                    }
                }(t);
                if (i.forceToAxis)
                    if (a.isHorizontal()) {
                        if (!(Math.abs(g.pixelX) > Math.abs(g.pixelY)))
                            return !0;
                        u = -g.pixelX * m
                    } else {
                        if (!(Math.abs(g.pixelY) > Math.abs(g.pixelX)))
                            return !0;
                        u = -g.pixelY
                    }
                else
                    u = Math.abs(g.pixelX) > Math.abs(g.pixelY) ? -g.pixelX * m : -g.pixelY;
                if (0 === u)
                    return !0;
                i.invert && (u = -u);
                let v = a.getTranslate() + u * i.sensitivity;
                if (v >= a.minTranslate() && (v = a.minTranslate()),
                v <= a.maxTranslate() && (v = a.maxTranslate()),
                s = !!a.params.loop || !(v === a.minTranslate() || v === a.maxTranslate()),
                s && a.params.nested && t.stopPropagation(),
                a.params.freeMode && a.params.freeMode.enabled) {
                    const e = {
                        time: (0,
                        n.d)(),
                        delta: Math.abs(u),
                        direction: Math.sign(u)
                    }
                      , s = d && e.time < d.time + 500 && e.delta <= d.delta && e.direction === d.direction;
                    if (!s) {
                        d = void 0;
                        let r = a.getTranslate() + u * i.sensitivity;
                        const p = a.isBeginning
                          , m = a.isEnd;
                        if (r >= a.minTranslate() && (r = a.minTranslate()),
                        r <= a.maxTranslate() && (r = a.maxTranslate()),
                        a.setTransition(0),
                        a.setTranslate(r),
                        a.updateProgress(),
                        a.updateActiveIndex(),
                        a.updateSlidesClasses(),
                        (!p && a.isBeginning || !m && a.isEnd) && a.updateSlidesClasses(),
                        a.params.loop && a.loopFix({
                            direction: e.direction < 0 ? "next" : "prev",
                            byMousewheel: !0
                        }),
                        a.params.freeMode.sticky) {
                            clearTimeout(o),
                            o = void 0,
                            c.length >= 15 && c.shift();
                            const t = c.length ? c[c.length - 1] : void 0
                              , s = c[0];
                            if (c.push(e),
                            t && (e.delta > t.delta || e.direction !== t.direction))
                                c.splice(0);
                            else if (c.length >= 15 && e.time - s.time < 500 && s.delta - e.delta >= 1 && e.delta <= 6) {
                                const t = u > 0 ? .8 : .2;
                                d = e,
                                c.splice(0),
                                o = (0,
                                n.n)((()=>{
                                    a.slideToClosest(a.params.speed, !0, void 0, t)
                                }
                                ), 0)
                            }
                            o || (o = (0,
                            n.n)((()=>{
                                d = e,
                                c.splice(0),
                                a.slideToClosest(a.params.speed, !0, void 0, .5)
                            }
                            ), 500))
                        }
                        if (s || l("scroll", t),
                        a.params.autoplay && a.params.autoplayDisableOnInteraction && a.autoplay.stop(),
                        i.releaseOnEdges && (r === a.minTranslate() || r === a.maxTranslate()))
                            return !0
                    }
                } else {
                    const t = {
                        time: (0,
                        n.d)(),
                        delta: Math.abs(u),
                        direction: Math.sign(u),
                        raw: e
                    };
                    c.length >= 2 && c.shift();
                    const s = c.length ? c[c.length - 1] : void 0;
                    if (c.push(t),
                    s ? (t.direction !== s.direction || t.delta > s.delta || t.time > s.time + 150) && f(t) : f(t),
                    function(e) {
                        const t = a.params.mousewheel;
                        if (e.direction < 0) {
                            if (a.isEnd && !a.params.loop && t.releaseOnEdges)
                                return !0
                        } else if (a.isBeginning && !a.params.loop && t.releaseOnEdges)
                            return !0;
                        return !1
                    }(t))
                        return !0
                }
                return t.preventDefault ? t.preventDefault() : t.returnValue = !1,
                !1
            }
            function v(e) {
                let t = a.el;
                "container" !== a.params.mousewheel.eventsTarget && (t = document.querySelector(a.params.mousewheel.eventsTarget)),
                t[e]("mouseenter", u),
                t[e]("mouseleave", m),
                t[e]("wheel", g)
            }
            function h() {
                return a.params.cssMode ? (a.wrapperEl.removeEventListener("wheel", g),
                !0) : !a.mousewheel.enabled && (v("addEventListener"),
                a.mousewheel.enabled = !0,
                !0)
            }
            function y() {
                return a.params.cssMode ? (a.wrapperEl.addEventListener(event, g),
                !0) : !!a.mousewheel.enabled && (v("removeEventListener"),
                a.mousewheel.enabled = !1,
                !0)
            }
            i("init", (()=>{
                !a.params.mousewheel.enabled && a.params.cssMode && y(),
                a.params.mousewheel.enabled && h()
            }
            )),
            i("destroy", (()=>{
                a.params.cssMode && h(),
                a.mousewheel.enabled && y()
            }
            )),
            Object.assign(a.mousewheel, {
                enable: h,
                disable: y
            })
        }
        function r(e, a, t, s) {
            return e.params.createElements && Object.keys(s).forEach((i=>{
                if (!t[i] && !0 === t.auto) {
                    let l = (0,
                    n.e)(e.el, `.${s[i]}`)[0];
                    l || (l = (0,
                    n.c)("div", s[i]),
                    l.className = s[i],
                    e.el.append(l)),
                    t[i] = l,
                    a[i] = l
                }
            }
            )),
            t
        }
        function o(e) {
            let {swiper: a, extendParams: t, on: s, emit: n} = e;
            t({
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: !1,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock",
                    navigationDisabledClass: "swiper-navigation-disabled"
                }
            }),
            a.navigation = {
                nextEl: null,
                prevEl: null
            };
            const i = e=>(Array.isArray(e) ? e : [e]).filter((e=>!!e));
            function l(e) {
                let t;
                return e && "string" === typeof e && a.isElement && (t = a.el.querySelector(e),
                t) ? t : (e && ("string" === typeof e && (t = [...document.querySelectorAll(e)]),
                a.params.uniqueNavElements && "string" === typeof e && t.length > 1 && 1 === a.el.querySelectorAll(e).length && (t = a.el.querySelector(e))),
                e && !t ? e : t)
            }
            function o(e, t) {
                const s = a.params.navigation;
                (e = i(e)).forEach((e=>{
                    e && (e.classList[t ? "add" : "remove"](...s.disabledClass.split(" ")),
                    "BUTTON" === e.tagName && (e.disabled = t),
                    a.params.watchOverflow && a.enabled && e.classList[a.isLocked ? "add" : "remove"](s.lockClass))
                }
                ))
            }
            function d() {
                const {nextEl: e, prevEl: t} = a.navigation;
                if (a.params.loop)
                    return o(t, !1),
                    void o(e, !1);
                o(t, a.isBeginning && !a.params.rewind),
                o(e, a.isEnd && !a.params.rewind)
            }
            function p(e) {
                e.preventDefault(),
                (!a.isBeginning || a.params.loop || a.params.rewind) && (a.slidePrev(),
                n("navigationPrev"))
            }
            function c(e) {
                e.preventDefault(),
                (!a.isEnd || a.params.loop || a.params.rewind) && (a.slideNext(),
                n("navigationNext"))
            }
            function u() {
                const e = a.params.navigation;
                if (a.params.navigation = r(a, a.originalParams.navigation, a.params.navigation, {
                    nextEl: "swiper-button-next",
                    prevEl: "swiper-button-prev"
                }),
                !e.nextEl && !e.prevEl)
                    return;
                let t = l(e.nextEl)
                  , s = l(e.prevEl);
                Object.assign(a.navigation, {
                    nextEl: t,
                    prevEl: s
                }),
                t = i(t),
                s = i(s);
                const n = (t,s)=>{
                    t && t.addEventListener("click", "next" === s ? c : p),
                    !a.enabled && t && t.classList.add(...e.lockClass.split(" "))
                }
                ;
                t.forEach((e=>n(e, "next"))),
                s.forEach((e=>n(e, "prev")))
            }
            function m() {
                let {nextEl: e, prevEl: t} = a.navigation;
                e = i(e),
                t = i(t);
                const s = (e,t)=>{
                    e.removeEventListener("click", "next" === t ? c : p),
                    e.classList.remove(...a.params.navigation.disabledClass.split(" "))
                }
                ;
                e.forEach((e=>s(e, "next"))),
                t.forEach((e=>s(e, "prev")))
            }
            s("init", (()=>{
                !1 === a.params.navigation.enabled ? f() : (u(),
                d())
            }
            )),
            s("toEdge fromEdge lock unlock", (()=>{
                d()
            }
            )),
            s("destroy", (()=>{
                m()
            }
            )),
            s("enable disable", (()=>{
                let {nextEl: e, prevEl: t} = a.navigation;
                e = i(e),
                t = i(t),
                a.enabled ? d() : [...e, ...t].filter((e=>!!e)).forEach((e=>e.classList.add(a.params.navigation.lockClass)))
            }
            )),
            s("click", ((e,t)=>{
                let {nextEl: s, prevEl: l} = a.navigation;
                s = i(s),
                l = i(l);
                const r = t.target;
                if (a.params.navigation.hideOnClick && !l.includes(r) && !s.includes(r)) {
                    if (a.pagination && a.params.pagination && a.params.pagination.clickable && (a.pagination.el === r || a.pagination.el.contains(r)))
                        return;
                    let e;
                    s.length ? e = s[0].classList.contains(a.params.navigation.hiddenClass) : l.length && (e = l[0].classList.contains(a.params.navigation.hiddenClass)),
                    n(!0 === e ? "navigationShow" : "navigationHide"),
                    [...s, ...l].filter((e=>!!e)).forEach((e=>e.classList.toggle(a.params.navigation.hiddenClass)))
                }
            }
            ));
            const f = ()=>{
                a.el.classList.add(...a.params.navigation.navigationDisabledClass.split(" ")),
                m()
            }
            ;
            Object.assign(a.navigation, {
                enable: ()=>{
                    a.el.classList.remove(...a.params.navigation.navigationDisabledClass.split(" ")),
                    u(),
                    d()
                }
                ,
                disable: f,
                update: d,
                init: u,
                destroy: m
            })
        }
        function d(e) {
            return void 0 === e && (e = ""),
            `.${e.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".")}`
        }
        function p(e) {
            let {swiper: a, extendParams: t, on: s, emit: i} = e;
            const l = "swiper-pagination";
            let o;
            t({
                pagination: {
                    el: null,
                    bulletElement: "span",
                    clickable: !1,
                    hideOnClick: !1,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    progressbarOpposite: !1,
                    type: "bullets",
                    dynamicBullets: !1,
                    dynamicMainBullets: 1,
                    formatFractionCurrent: e=>e,
                    formatFractionTotal: e=>e,
                    bulletClass: `${l}-bullet`,
                    bulletActiveClass: `${l}-bullet-active`,
                    modifierClass: `${l}-`,
                    currentClass: `${l}-current`,
                    totalClass: `${l}-total`,
                    hiddenClass: `${l}-hidden`,
                    progressbarFillClass: `${l}-progressbar-fill`,
                    progressbarOppositeClass: `${l}-progressbar-opposite`,
                    clickableClass: `${l}-clickable`,
                    lockClass: `${l}-lock`,
                    horizontalClass: `${l}-horizontal`,
                    verticalClass: `${l}-vertical`,
                    paginationDisabledClass: `${l}-disabled`
                }
            }),
            a.pagination = {
                el: null,
                bullets: []
            };
            let p = 0;
            const c = e=>(Array.isArray(e) ? e : [e]).filter((e=>!!e));
            function u() {
                return !a.params.pagination.el || !a.pagination.el || Array.isArray(a.pagination.el) && 0 === a.pagination.el.length
            }
            function m(e, t) {
                const {bulletActiveClass: s} = a.params.pagination;
                e && (e = e[("prev" === t ? "previous" : "next") + "ElementSibling"]) && (e.classList.add(`${s}-${t}`),
                (e = e[("prev" === t ? "previous" : "next") + "ElementSibling"]) && e.classList.add(`${s}-${t}-${t}`))
            }
            function f(e) {
                const t = e.target.closest(d(a.params.pagination.bulletClass));
                if (!t)
                    return;
                e.preventDefault();
                const s = (0,
                n.g)(t) * a.params.slidesPerGroup;
                if (a.params.loop) {
                    if (a.realIndex === s)
                        return;
                    a.slideToLoop(s)
                } else
                    a.slideTo(s)
            }
            function g() {
                const e = a.rtl
                  , t = a.params.pagination;
                if (u())
                    return;
                let s, l, r = a.pagination.el;
                r = c(r);
                const f = a.virtual && a.params.virtual.enabled ? a.virtual.slides.length : a.slides.length
                  , g = a.params.loop ? Math.ceil(f / a.params.slidesPerGroup) : a.snapGrid.length;
                if (a.params.loop ? (l = a.previousRealIndex || 0,
                s = a.params.slidesPerGroup > 1 ? Math.floor(a.realIndex / a.params.slidesPerGroup) : a.realIndex) : "undefined" !== typeof a.snapIndex ? (s = a.snapIndex,
                l = a.previousSnapIndex) : (l = a.previousIndex || 0,
                s = a.activeIndex || 0),
                "bullets" === t.type && a.pagination.bullets && a.pagination.bullets.length > 0) {
                    const i = a.pagination.bullets;
                    let d, c, u;
                    if (t.dynamicBullets && (o = (0,
                    n.f)(i[0], a.isHorizontal() ? "width" : "height", !0),
                    r.forEach((e=>{
                        e.style[a.isHorizontal() ? "width" : "height"] = o * (t.dynamicMainBullets + 4) + "px"
                    }
                    )),
                    t.dynamicMainBullets > 1 && void 0 !== l && (p += s - (l || 0),
                    p > t.dynamicMainBullets - 1 ? p = t.dynamicMainBullets - 1 : p < 0 && (p = 0)),
                    d = Math.max(s - p, 0),
                    c = d + (Math.min(i.length, t.dynamicMainBullets) - 1),
                    u = (c + d) / 2),
                    i.forEach((e=>{
                        const a = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((e=>`${t.bulletActiveClass}${e}`))].map((e=>"string" === typeof e && e.includes(" ") ? e.split(" ") : e)).flat();
                        e.classList.remove(...a)
                    }
                    )),
                    r.length > 1)
                        i.forEach((e=>{
                            const i = (0,
                            n.g)(e);
                            i === s ? e.classList.add(...t.bulletActiveClass.split(" ")) : a.isElement && e.setAttribute("part", "bullet"),
                            t.dynamicBullets && (i >= d && i <= c && e.classList.add(...`${t.bulletActiveClass}-main`.split(" ")),
                            i === d && m(e, "prev"),
                            i === c && m(e, "next"))
                        }
                        ));
                    else {
                        const e = i[s];
                        if (e && e.classList.add(...t.bulletActiveClass.split(" ")),
                        a.isElement && i.forEach(((e,a)=>{
                            e.setAttribute("part", a === s ? "bullet-active" : "bullet")
                        }
                        )),
                        t.dynamicBullets) {
                            const e = i[d]
                              , a = i[c];
                            for (let s = d; s <= c; s += 1)
                                i[s] && i[s].classList.add(...`${t.bulletActiveClass}-main`.split(" "));
                            m(e, "prev"),
                            m(a, "next")
                        }
                    }
                    if (t.dynamicBullets) {
                        const s = Math.min(i.length, t.dynamicMainBullets + 4)
                          , n = (o * s - o) / 2 - u * o
                          , l = e ? "right" : "left";
                        i.forEach((e=>{
                            e.style[a.isHorizontal() ? l : "top"] = `${n}px`
                        }
                        ))
                    }
                }
                r.forEach(((e,n)=>{
                    if ("fraction" === t.type && (e.querySelectorAll(d(t.currentClass)).forEach((e=>{
                        e.textContent = t.formatFractionCurrent(s + 1)
                    }
                    )),
                    e.querySelectorAll(d(t.totalClass)).forEach((e=>{
                        e.textContent = t.formatFractionTotal(g)
                    }
                    ))),
                    "progressbar" === t.type) {
                        let n;
                        n = t.progressbarOpposite ? a.isHorizontal() ? "vertical" : "horizontal" : a.isHorizontal() ? "horizontal" : "vertical";
                        const i = (s + 1) / g;
                        let l = 1
                          , r = 1;
                        "horizontal" === n ? l = i : r = i,
                        e.querySelectorAll(d(t.progressbarFillClass)).forEach((e=>{
                            e.style.transform = `translate3d(0,0,0) scaleX(${l}) scaleY(${r})`,
                            e.style.transitionDuration = `${a.params.speed}ms`
                        }
                        ))
                    }
                    "custom" === t.type && t.renderCustom ? (e.innerHTML = t.renderCustom(a, s + 1, g),
                    0 === n && i("paginationRender", e)) : (0 === n && i("paginationRender", e),
                    i("paginationUpdate", e)),
                    a.params.watchOverflow && a.enabled && e.classList[a.isLocked ? "add" : "remove"](t.lockClass)
                }
                ))
            }
            function v() {
                const e = a.params.pagination;
                if (u())
                    return;
                const t = a.virtual && a.params.virtual.enabled ? a.virtual.slides.length : a.grid && a.params.grid.rows > 1 ? a.slides.length / Math.ceil(a.params.grid.rows) : a.slides.length;
                let s = a.pagination.el;
                s = c(s);
                let n = "";
                if ("bullets" === e.type) {
                    let s = a.params.loop ? Math.ceil(t / a.params.slidesPerGroup) : a.snapGrid.length;
                    a.params.freeMode && a.params.freeMode.enabled && s > t && (s = t);
                    for (let t = 0; t < s; t += 1)
                        e.renderBullet ? n += e.renderBullet.call(a, t, e.bulletClass) : n += `<${e.bulletElement} ${a.isElement ? 'part="bullet"' : ""} class="${e.bulletClass}"></${e.bulletElement}>`
                }
                "fraction" === e.type && (n = e.renderFraction ? e.renderFraction.call(a, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),
                "progressbar" === e.type && (n = e.renderProgressbar ? e.renderProgressbar.call(a, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`),
                a.pagination.bullets = [],
                s.forEach((t=>{
                    "custom" !== e.type && (t.innerHTML = n || ""),
                    "bullets" === e.type && a.pagination.bullets.push(...t.querySelectorAll(d(e.bulletClass)))
                }
                )),
                "custom" !== e.type && i("paginationRender", s[0])
            }
            function h() {
                a.params.pagination = r(a, a.originalParams.pagination, a.params.pagination, {
                    el: "swiper-pagination"
                });
                const e = a.params.pagination;
                if (!e.el)
                    return;
                let t;
                "string" === typeof e.el && a.isElement && (t = a.el.querySelector(e.el)),
                t || "string" !== typeof e.el || (t = [...document.querySelectorAll(e.el)]),
                t || (t = e.el),
                t && 0 !== t.length && (a.params.uniqueNavElements && "string" === typeof e.el && Array.isArray(t) && t.length > 1 && (t = [...a.el.querySelectorAll(e.el)],
                t.length > 1 && (t = t.filter((e=>(0,
                n.a)(e, ".swiper")[0] === a.el))[0])),
                Array.isArray(t) && 1 === t.length && (t = t[0]),
                Object.assign(a.pagination, {
                    el: t
                }),
                t = c(t),
                t.forEach((t=>{
                    "bullets" === e.type && e.clickable && t.classList.add(...(e.clickableClass || "").split(" ")),
                    t.classList.add(e.modifierClass + e.type),
                    t.classList.add(a.isHorizontal() ? e.horizontalClass : e.verticalClass),
                    "bullets" === e.type && e.dynamicBullets && (t.classList.add(`${e.modifierClass}${e.type}-dynamic`),
                    p = 0,
                    e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
                    "progressbar" === e.type && e.progressbarOpposite && t.classList.add(e.progressbarOppositeClass),
                    e.clickable && t.addEventListener("click", f),
                    a.enabled || t.classList.add(e.lockClass)
                }
                )))
            }
            function y() {
                const e = a.params.pagination;
                if (u())
                    return;
                let t = a.pagination.el;
                t && (t = c(t),
                t.forEach((t=>{
                    t.classList.remove(e.hiddenClass),
                    t.classList.remove(e.modifierClass + e.type),
                    t.classList.remove(a.isHorizontal() ? e.horizontalClass : e.verticalClass),
                    e.clickable && (t.classList.remove(...(e.clickableClass || "").split(" ")),
                    t.removeEventListener("click", f))
                }
                ))),
                a.pagination.bullets && a.pagination.bullets.forEach((a=>a.classList.remove(...e.bulletActiveClass.split(" "))))
            }
            s("changeDirection", (()=>{
                if (!a.pagination || !a.pagination.el)
                    return;
                const e = a.params.pagination;
                let {el: t} = a.pagination;
                t = c(t),
                t.forEach((t=>{
                    t.classList.remove(e.horizontalClass, e.verticalClass),
                    t.classList.add(a.isHorizontal() ? e.horizontalClass : e.verticalClass)
                }
                ))
            }
            )),
            s("init", (()=>{
                !1 === a.params.pagination.enabled ? b() : (h(),
                v(),
                g())
            }
            )),
            s("activeIndexChange", (()=>{
                "undefined" === typeof a.snapIndex && g()
            }
            )),
            s("snapIndexChange", (()=>{
                g()
            }
            )),
            s("snapGridLengthChange", (()=>{
                v(),
                g()
            }
            )),
            s("destroy", (()=>{
                y()
            }
            )),
            s("enable disable", (()=>{
                let {el: e} = a.pagination;
                e && (e = c(e),
                e.forEach((e=>e.classList[a.enabled ? "remove" : "add"](a.params.pagination.lockClass))))
            }
            )),
            s("lock unlock", (()=>{
                g()
            }
            )),
            s("click", ((e,t)=>{
                const s = t.target
                  , n = c(a.pagination.el);
                if (a.params.pagination.el && a.params.pagination.hideOnClick && n && n.length > 0 && !s.classList.contains(a.params.pagination.bulletClass)) {
                    if (a.navigation && (a.navigation.nextEl && s === a.navigation.nextEl || a.navigation.prevEl && s === a.navigation.prevEl))
                        return;
                    const e = n[0].classList.contains(a.params.pagination.hiddenClass);
                    i(!0 === e ? "paginationShow" : "paginationHide"),
                    n.forEach((e=>e.classList.toggle(a.params.pagination.hiddenClass)))
                }
            }
            ));
            const b = ()=>{
                a.el.classList.add(a.params.pagination.paginationDisabledClass);
                let {el: e} = a.pagination;
                e && (e = c(e),
                e.forEach((e=>e.classList.add(a.params.pagination.paginationDisabledClass)))),
                y()
            }
            ;
            Object.assign(a.pagination, {
                enable: ()=>{
                    a.el.classList.remove(a.params.pagination.paginationDisabledClass);
                    let {el: e} = a.pagination;
                    e && (e = c(e),
                    e.forEach((e=>e.classList.remove(a.params.pagination.paginationDisabledClass)))),
                    h(),
                    v(),
                    g()
                }
                ,
                disable: b,
                render: v,
                update: g,
                init: h,
                destroy: y
            })
        }
        function c(e) {
            let a, t, {swiper: n, extendParams: i, on: l, emit: r, params: o} = e;
            n.autoplay = {
                running: !1,
                paused: !1,
                timeLeft: 0
            },
            i({
                autoplay: {
                    enabled: !1,
                    delay: 3e3,
                    waitForTransition: !0,
                    disableOnInteraction: !1,
                    stopOnLastSlide: !1,
                    reverseDirection: !1,
                    pauseOnMouseEnter: !1
                }
            });
            let d, p, c, u, m, f, g, v, h = o && o.autoplay ? o.autoplay.delay : 3e3, y = o && o.autoplay ? o.autoplay.delay : 3e3, b = (new Date).getTime();
            function E(e) {
                n && !n.destroyed && n.wrapperEl && e.target === n.wrapperEl && (n.wrapperEl.removeEventListener("transitionend", E),
                v || L())
            }
            const w = ()=>{
                if (n.destroyed || !n.autoplay.running)
                    return;
                n.autoplay.paused ? p = !0 : p && (y = d,
                p = !1);
                const e = n.autoplay.paused ? d : b + y - (new Date).getTime();
                n.autoplay.timeLeft = e,
                r("autoplayTimeLeft", e, e / h),
                t = requestAnimationFrame((()=>{
                    w()
                }
                ))
            }
              , C = e=>{
                if (n.destroyed || !n.autoplay.running)
                    return;
                cancelAnimationFrame(t),
                w();
                let s = "undefined" === typeof e ? n.params.autoplay.delay : e;
                h = n.params.autoplay.delay,
                y = n.params.autoplay.delay;
                const i = (()=>{
                    let e;
                    if (e = n.virtual && n.params.virtual.enabled ? n.slides.filter((e=>e.classList.contains("swiper-slide-active")))[0] : n.slides[n.activeIndex],
                    !e)
                        return;
                    return parseInt(e.getAttribute("data-swiper-autoplay"), 10)
                }
                )();
                !Number.isNaN(i) && i > 0 && "undefined" === typeof e && (s = i,
                h = i,
                y = i),
                d = s;
                const l = n.params.speed
                  , o = ()=>{
                    n && !n.destroyed && (n.params.autoplay.reverseDirection ? !n.isBeginning || n.params.loop || n.params.rewind ? (n.slidePrev(l, !0, !0),
                    r("autoplay")) : n.params.autoplay.stopOnLastSlide || (n.slideTo(n.slides.length - 1, l, !0, !0),
                    r("autoplay")) : !n.isEnd || n.params.loop || n.params.rewind ? (n.slideNext(l, !0, !0),
                    r("autoplay")) : n.params.autoplay.stopOnLastSlide || (n.slideTo(0, l, !0, !0),
                    r("autoplay")),
                    n.params.cssMode && (b = (new Date).getTime(),
                    requestAnimationFrame((()=>{
                        C()
                    }
                    ))))
                }
                ;
                return s > 0 ? (clearTimeout(a),
                a = setTimeout((()=>{
                    o()
                }
                ), s)) : requestAnimationFrame((()=>{
                    o()
                }
                )),
                s
            }
              , T = ()=>{
                b = (new Date).getTime(),
                n.autoplay.running = !0,
                C(),
                r("autoplayStart")
            }
              , x = ()=>{
                n.autoplay.running = !1,
                clearTimeout(a),
                cancelAnimationFrame(t),
                r("autoplayStop")
            }
              , M = (e,t)=>{
                if (n.destroyed || !n.autoplay.running)
                    return;
                clearTimeout(a),
                e || (g = !0);
                const s = ()=>{
                    r("autoplayPause"),
                    n.params.autoplay.waitForTransition ? n.wrapperEl.addEventListener("transitionend", E) : L()
                }
                ;
                if (n.autoplay.paused = !0,
                t)
                    return f && (d = n.params.autoplay.delay),
                    f = !1,
                    void s();
                const i = d || n.params.autoplay.delay;
                d = i - ((new Date).getTime() - b),
                n.isEnd && d < 0 && !n.params.loop || (d < 0 && (d = 0),
                s())
            }
              , L = ()=>{
                n.isEnd && d < 0 && !n.params.loop || n.destroyed || !n.autoplay.running || (b = (new Date).getTime(),
                g ? (g = !1,
                C(d)) : C(),
                n.autoplay.paused = !1,
                r("autoplayResume"))
            }
              , k = ()=>{
                if (n.destroyed || !n.autoplay.running)
                    return;
                const e = (0,
                s.g)();
                "hidden" === e.visibilityState && (g = !0,
                M(!0)),
                "visible" === e.visibilityState && L()
            }
              , S = e=>{
                "mouse" === e.pointerType && (g = !0,
                v = !0,
                n.animating || n.autoplay.paused || M(!0))
            }
              , D = e=>{
                "mouse" === e.pointerType && (v = !1,
                n.autoplay.paused && L())
            }
            ;
            l("init", (()=>{
                n.params.autoplay.enabled && (n.params.autoplay.pauseOnMouseEnter && (n.el.addEventListener("pointerenter", S),
                n.el.addEventListener("pointerleave", D)),
                (0,
                s.g)().addEventListener("visibilitychange", k),
                T())
            }
            )),
            l("destroy", (()=>{
                n.el.removeEventListener("pointerenter", S),
                n.el.removeEventListener("pointerleave", D),
                (0,
                s.g)().removeEventListener("visibilitychange", k),
                n.autoplay.running && x()
            }
            )),
            l("_freeModeStaticRelease", (()=>{
                (u || g) && L()
            }
            )),
            l("_freeModeNoMomentumRelease", (()=>{
                n.params.autoplay.disableOnInteraction ? x() : M(!0, !0)
            }
            )),
            l("beforeTransitionStart", ((e,a,t)=>{
                !n.destroyed && n.autoplay.running && (t || !n.params.autoplay.disableOnInteraction ? M(!0, !0) : x())
            }
            )),
            l("sliderFirstMove", (()=>{
                !n.destroyed && n.autoplay.running && (n.params.autoplay.disableOnInteraction ? x() : (c = !0,
                u = !1,
                g = !1,
                m = setTimeout((()=>{
                    g = !0,
                    u = !0,
                    M(!0)
                }
                ), 200)))
            }
            )),
            l("touchEnd", (()=>{
                if (!n.destroyed && n.autoplay.running && c) {
                    if (clearTimeout(m),
                    clearTimeout(a),
                    n.params.autoplay.disableOnInteraction)
                        return u = !1,
                        void (c = !1);
                    u && n.params.cssMode && L(),
                    u = !1,
                    c = !1
                }
            }
            )),
            l("slideChange", (()=>{
                !n.destroyed && n.autoplay.running && (f = !0)
            }
            )),
            Object.assign(n.autoplay, {
                start: T,
                stop: x,
                pause: M,
                resume: L
            })
        }
        function u(e) {
            let {swiper: a, extendParams: t, emit: s, once: i} = e;
            t({
                freeMode: {
                    enabled: !1,
                    momentum: !0,
                    momentumRatio: 1,
                    momentumBounce: !0,
                    momentumBounceRatio: 1,
                    momentumVelocityRatio: 1,
                    sticky: !1,
                    minimumVelocity: .02
                }
            }),
            Object.assign(a, {
                freeMode: {
                    onTouchStart: function() {
                        if (a.params.cssMode)
                            return;
                        const e = a.getTranslate();
                        a.setTranslate(e),
                        a.setTransition(0),
                        a.touchEventsData.velocities.length = 0,
                        a.freeMode.onTouchEnd({
                            currentPos: a.rtl ? a.translate : -a.translate
                        })
                    },
                    onTouchMove: function() {
                        if (a.params.cssMode)
                            return;
                        const {touchEventsData: e, touches: t} = a;
                        0 === e.velocities.length && e.velocities.push({
                            position: t[a.isHorizontal() ? "startX" : "startY"],
                            time: e.touchStartTime
                        }),
                        e.velocities.push({
                            position: t[a.isHorizontal() ? "currentX" : "currentY"],
                            time: (0,
                            n.d)()
                        })
                    },
                    onTouchEnd: function(e) {
                        let {currentPos: t} = e;
                        if (a.params.cssMode)
                            return;
                        const {params: l, wrapperEl: r, rtlTranslate: o, snapGrid: d, touchEventsData: p} = a
                          , c = (0,
                        n.d)() - p.touchStartTime;
                        if (t < -a.minTranslate())
                            a.slideTo(a.activeIndex);
                        else if (t > -a.maxTranslate())
                            a.slides.length < d.length ? a.slideTo(d.length - 1) : a.slideTo(a.slides.length - 1);
                        else {
                            if (l.freeMode.momentum) {
                                if (p.velocities.length > 1) {
                                    const e = p.velocities.pop()
                                      , t = p.velocities.pop()
                                      , s = e.position - t.position
                                      , i = e.time - t.time;
                                    a.velocity = s / i,
                                    a.velocity /= 2,
                                    Math.abs(a.velocity) < l.freeMode.minimumVelocity && (a.velocity = 0),
                                    (i > 150 || (0,
                                    n.d)() - e.time > 300) && (a.velocity = 0)
                                } else
                                    a.velocity = 0;
                                a.velocity *= l.freeMode.momentumVelocityRatio,
                                p.velocities.length = 0;
                                let e = 1e3 * l.freeMode.momentumRatio;
                                const t = a.velocity * e;
                                let c = a.translate + t;
                                o && (c = -c);
                                let u, m = !1;
                                const f = 20 * Math.abs(a.velocity) * l.freeMode.momentumBounceRatio;
                                let g;
                                if (c < a.maxTranslate())
                                    l.freeMode.momentumBounce ? (c + a.maxTranslate() < -f && (c = a.maxTranslate() - f),
                                    u = a.maxTranslate(),
                                    m = !0,
                                    p.allowMomentumBounce = !0) : c = a.maxTranslate(),
                                    l.loop && l.centeredSlides && (g = !0);
                                else if (c > a.minTranslate())
                                    l.freeMode.momentumBounce ? (c - a.minTranslate() > f && (c = a.minTranslate() + f),
                                    u = a.minTranslate(),
                                    m = !0,
                                    p.allowMomentumBounce = !0) : c = a.minTranslate(),
                                    l.loop && l.centeredSlides && (g = !0);
                                else if (l.freeMode.sticky) {
                                    let e;
                                    for (let a = 0; a < d.length; a += 1)
                                        if (d[a] > -c) {
                                            e = a;
                                            break
                                        }
                                    c = Math.abs(d[e] - c) < Math.abs(d[e - 1] - c) || "next" === a.swipeDirection ? d[e] : d[e - 1],
                                    c = -c
                                }
                                if (g && i("transitionEnd", (()=>{
                                    a.loopFix()
                                }
                                )),
                                0 !== a.velocity) {
                                    if (e = o ? Math.abs((-c - a.translate) / a.velocity) : Math.abs((c - a.translate) / a.velocity),
                                    l.freeMode.sticky) {
                                        const t = Math.abs((o ? -c : c) - a.translate)
                                          , s = a.slidesSizesGrid[a.activeIndex];
                                        e = t < s ? l.speed : t < 2 * s ? 1.5 * l.speed : 2.5 * l.speed
                                    }
                                } else if (l.freeMode.sticky)
                                    return void a.slideToClosest();
                                l.freeMode.momentumBounce && m ? (a.updateProgress(u),
                                a.setTransition(e),
                                a.setTranslate(c),
                                a.transitionStart(!0, a.swipeDirection),
                                a.animating = !0,
                                (0,
                                n.j)(r, (()=>{
                                    a && !a.destroyed && p.allowMomentumBounce && (s("momentumBounce"),
                                    a.setTransition(l.speed),
                                    setTimeout((()=>{
                                        a.setTranslate(u),
                                        (0,
                                        n.j)(r, (()=>{
                                            a && !a.destroyed && a.transitionEnd()
                                        }
                                        ))
                                    }
                                    ), 0))
                                }
                                ))) : a.velocity ? (s("_freeModeNoMomentumRelease"),
                                a.updateProgress(c),
                                a.setTransition(e),
                                a.setTranslate(c),
                                a.transitionStart(!0, a.swipeDirection),
                                a.animating || (a.animating = !0,
                                (0,
                                n.j)(r, (()=>{
                                    a && !a.destroyed && a.transitionEnd()
                                }
                                )))) : a.updateProgress(c),
                                a.updateActiveIndex(),
                                a.updateSlidesClasses()
                            } else {
                                if (l.freeMode.sticky)
                                    return void a.slideToClosest();
                                l.freeMode && s("_freeModeNoMomentumRelease")
                            }
                            (!l.freeMode.momentum || c >= l.longSwipesMs) && (s("_freeModeStaticRelease"),
                            a.updateProgress(),
                            a.updateActiveIndex(),
                            a.updateSlidesClasses())
                        }
                    }
                }
            })
        }
        function m(e, a) {
            const t = (0,
            n.l)(a);
            return t !== a && (t.style.backfaceVisibility = "hidden",
            t.style["-webkit-backface-visibility"] = "hidden"),
            t
        }
        function f(e) {
            let {swiper: a, duration: t, transformElements: s, allSlides: i} = e;
            const {activeIndex: l} = a;
            if (a.params.virtualTranslate && 0 !== t) {
                let e, t = !1;
                e = i ? s : s.filter((e=>{
                    const t = e.classList.contains("swiper-slide-transform") ? (e=>{
                        if (!e.parentElement)
                            return a.slides.filter((a=>a.shadowRoot && a.shadowRoot === e.parentNode))[0];
                        return e.parentElement
                    }
                    )(e) : e;
                    return a.getSlideIndex(t) === l
                }
                )),
                e.forEach((e=>{
                    (0,
                    n.j)(e, (()=>{
                        if (t)
                            return;
                        if (!a || a.destroyed)
                            return;
                        t = !0,
                        a.animating = !1;
                        const e = new window.CustomEvent("transitionend",{
                            bubbles: !0,
                            cancelable: !0
                        });
                        a.wrapperEl.dispatchEvent(e)
                    }
                    ))
                }
                ))
            }
        }
        function g(e) {
            let {swiper: a, extendParams: t, on: s} = e;
            t({
                fadeEffect: {
                    crossFade: !1
                }
            });
            !function(e) {
                const {effect: a, swiper: t, on: s, setTranslate: n, setTransition: i, overwriteParams: l, perspective: r, recreateShadows: o, getEffectParams: d} = e;
                let p;
                s("beforeInit", (()=>{
                    if (t.params.effect !== a)
                        return;
                    t.classNames.push(`${t.params.containerModifierClass}${a}`),
                    r && r() && t.classNames.push(`${t.params.containerModifierClass}3d`);
                    const e = l ? l() : {};
                    Object.assign(t.params, e),
                    Object.assign(t.originalParams, e)
                }
                )),
                s("setTranslate", (()=>{
                    t.params.effect === a && n()
                }
                )),
                s("setTransition", ((e,s)=>{
                    t.params.effect === a && i(s)
                }
                )),
                s("transitionEnd", (()=>{
                    if (t.params.effect === a && o) {
                        if (!d || !d().slideShadows)
                            return;
                        t.slides.forEach((e=>{
                            e.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((e=>e.remove()))
                        }
                        )),
                        o()
                    }
                }
                )),
                s("virtualUpdate", (()=>{
                    t.params.effect === a && (t.slides.length || (p = !0),
                    requestAnimationFrame((()=>{
                        p && t.slides && t.slides.length && (n(),
                        p = !1)
                    }
                    )))
                }
                ))
            }({
                effect: "fade",
                swiper: a,
                on: s,
                setTranslate: ()=>{
                    const {slides: e} = a;
                    a.params.fadeEffect;
                    for (let t = 0; t < e.length; t += 1) {
                        const e = a.slides[t];
                        let s = -e.swiperSlideOffset;
                        a.params.virtualTranslate || (s -= a.translate);
                        let n = 0;
                        a.isHorizontal() || (n = s,
                        s = 0);
                        const i = a.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(e.progress), 0) : 1 + Math.min(Math.max(e.progress, -1), 0)
                          , l = m(0, e);
                        l.style.opacity = i,
                        l.style.transform = `translate3d(${s}px, ${n}px, 0px)`
                    }
                }
                ,
                setTransition: e=>{
                    const t = a.slides.map((e=>(0,
                    n.l)(e)));
                    t.forEach((a=>{
                        a.style.transitionDuration = `${e}ms`
                    }
                    )),
                    f({
                        swiper: a,
                        duration: e,
                        transformElements: t,
                        allSlides: !0
                    })
                }
                ,
                overwriteParams: ()=>({
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: !0,
                    spaceBetween: 0,
                    virtualTranslate: !a.params.cssMode
                })
            })
        }
    }
}]);
