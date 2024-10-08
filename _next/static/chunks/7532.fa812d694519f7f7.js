"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[7532], {
    57532: function(t, e, i) {
        i.d(e, {
            g: function() {
                return ve
            }
        });
        var s = i(60318)
          , o = i(29200)
          , n = i(58315)
          , r = i(93942)
          , a = i(12575)
          , h = i(42280)
          , l = i(21499);
        const c = (t,e)=>Math.abs(t - e);
        var u = i(30388)
          , d = i(47665);
        class m {
            constructor(t, e, {transformPagePoint: i}={}) {
                if (this.startEvent = null,
                this.lastMoveEvent = null,
                this.lastMoveEventInfo = null,
                this.handlers = {},
                this.updatePoint = ()=>{
                    if (!this.lastMoveEvent || !this.lastMoveEventInfo)
                        return;
                    const t = y(this.lastMoveEventInfo, this.history)
                      , e = null !== this.startEvent
                      , i = function(t, e) {
                        const i = c(t.x, e.x)
                          , s = c(t.y, e.y);
                        return Math.sqrt(i ** 2 + s ** 2)
                    }(t.offset, {
                        x: 0,
                        y: 0
                    }) >= 3;
                    if (!e && !i)
                        return;
                    const {point: s} = t
                      , {timestamp: o} = d.frameData;
                    this.history.push({
                        ...s,
                        timestamp: o
                    });
                    const {onStart: n, onMove: r} = this.handlers;
                    e || (n && n(this.lastMoveEvent, t),
                    this.startEvent = this.lastMoveEvent),
                    r && r(this.lastMoveEvent, t)
                }
                ,
                this.handlePointerMove = (t,e)=>{
                    this.lastMoveEvent = t,
                    this.lastMoveEventInfo = p(e, this.transformPagePoint),
                    d.Wi.update(this.updatePoint, !0)
                }
                ,
                this.handlePointerUp = (t,e)=>{
                    if (this.end(),
                    !this.lastMoveEvent || !this.lastMoveEventInfo)
                        return;
                    const {onEnd: i, onSessionEnd: s} = this.handlers
                      , o = y("pointercancel" === t.type ? this.lastMoveEventInfo : p(e, this.transformPagePoint), this.history);
                    this.startEvent && i && i(t, o),
                    s && s(t, o)
                }
                ,
                !(0,
                u.D)(t))
                    return;
                this.handlers = e,
                this.transformPagePoint = i;
                const s = p((0,
                r.Q)(t), this.transformPagePoint)
                  , {point: o} = s
                  , {timestamp: n} = d.frameData;
                this.history = [{
                    ...o,
                    timestamp: n
                }];
                const {onSessionStart: a} = e;
                a && a(t, y(s, this.history)),
                this.removeListeners = (0,
                l.z)((0,
                h.a)(window, "pointermove", this.handlePointerMove), (0,
                h.a)(window, "pointerup", this.handlePointerUp), (0,
                h.a)(window, "pointercancel", this.handlePointerUp))
            }
            updateHandlers(t) {
                this.handlers = t
            }
            end() {
                this.removeListeners && this.removeListeners(),
                (0,
                d.Pn)(this.updatePoint)
            }
        }
        function p(t, e) {
            return e ? {
                point: e(t.point)
            } : t
        }
        function g(t, e) {
            return {
                x: t.x - e.x,
                y: t.y - e.y
            }
        }
        function y({point: t}, e) {
            return {
                point: t,
                delta: g(t, v(e)),
                offset: g(t, f(e)),
                velocity: x(e, .1)
            }
        }
        function f(t) {
            return t[0]
        }
        function v(t) {
            return t[t.length - 1]
        }
        function x(t, e) {
            if (t.length < 2)
                return {
                    x: 0,
                    y: 0
                };
            let i = t.length - 1
              , s = null;
            const o = v(t);
            for (; i >= 0 && (s = t[i],
            !(o.timestamp - s.timestamp > (0,
            a.w)(e))); )
                i--;
            if (!s)
                return {
                    x: 0,
                    y: 0
                };
            const n = (0,
            a.X)(o.timestamp - s.timestamp);
            if (0 === n)
                return {
                    x: 0,
                    y: 0
                };
            const r = {
                x: (o.x - s.x) / n,
                y: (o.y - s.y) / n
            };
            return r.x === 1 / 0 && (r.x = 0),
            r.y === 1 / 0 && (r.y = 0),
            r
        }
        var P = i(55586)
          , T = i(21383)
          , D = i(13592)
          , E = i(10717);
        function S(t) {
            return t.max - t.min
        }
        function L(t, e=0, i=.01) {
            return Math.abs(t - e) <= i
        }
        function R(t, e, i, s=.5) {
            t.origin = s,
            t.originPoint = (0,
            E.C)(e.min, e.max, t.origin),
            t.scale = S(i) / S(e),
            (L(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1),
            t.translate = (0,
            E.C)(i.min, i.max, t.origin) - t.originPoint,
            (L(t.translate) || isNaN(t.translate)) && (t.translate = 0)
        }
        function C(t, e, i, s) {
            R(t.x, e.x, i.x, s ? s.originX : void 0),
            R(t.y, e.y, i.y, s ? s.originY : void 0)
        }
        function j(t, e, i) {
            t.min = i.min + e.min,
            t.max = t.min + S(e)
        }
        function A(t, e, i) {
            t.min = e.min - i.min,
            t.max = t.min + S(e)
        }
        function B(t, e, i) {
            A(t.x, e.x, i.x),
            A(t.y, e.y, i.y)
        }
        var M = i(24150);
        function b(t, e, i) {
            return {
                min: void 0 !== e ? t.min + e : void 0,
                max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0
            }
        }
        function V(t, e) {
            let i = e.min - t.min
              , s = e.max - t.max;
            return e.max - e.min < t.max - t.min && ([i,s] = [s, i]),
            {
                min: i,
                max: s
            }
        }
        const k = .35;
        function w(t, e, i) {
            return {
                min: U(t, e),
                max: U(t, i)
            }
        }
        function U(t, e) {
            return "number" === typeof t ? t : t[e] || 0
        }
        var F = i(20183);
        function O(t) {
            return [t("x"), t("y")]
        }
        var I = i(39265)
          , G = i(93370)
          , N = i(42506)
          , W = i(53927)
          , z = i(26867);
        const $ = new WeakMap;
        class H {
            constructor(t) {
                this.openGlobalLock = null,
                this.isDragging = !1,
                this.currentDirection = null,
                this.originPoint = {
                    x: 0,
                    y: 0
                },
                this.constraints = !1,
                this.hasMutatedConstraints = !1,
                this.elastic = (0,
                F.dO)(),
                this.visualElement = t
            }
            start(t, {snapToCursor: e=!1}={}) {
                const {presenceContext: i} = this.visualElement;
                if (i && !1 === i.isPresent)
                    return;
                this.panSession = new m(t,{
                    onSessionStart: t=>{
                        this.stopAnimation(),
                        e && this.snapToCursor((0,
                        r.Q)(t, "page").point)
                    }
                    ,
                    onStart: (t,e)=>{
                        const {drag: i, dragPropagation: s, onDragStart: o} = this.getProps();
                        if (i && !s && (this.openGlobalLock && this.openGlobalLock(),
                        this.openGlobalLock = (0,
                        P.fJ)(i),
                        !this.openGlobalLock))
                            return;
                        this.isDragging = !0,
                        this.currentDirection = null,
                        this.resolveConstraints(),
                        this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
                        this.visualElement.projection.target = void 0),
                        O((t=>{
                            let e = this.getAxisMotionValue(t).get() || 0;
                            if (W.aQ.test(e)) {
                                const {projection: i} = this.visualElement;
                                if (i && i.layout) {
                                    const s = i.layout.layoutBox[t];
                                    if (s) {
                                        e = S(s) * (parseFloat(e) / 100)
                                    }
                                }
                            }
                            this.originPoint[t] = e
                        }
                        )),
                        o && d.Wi.update((()=>o(t, e)), !1, !0);
                        const {animationState: n} = this.visualElement;
                        n && n.setActive("whileDrag", !0)
                    }
                    ,
                    onMove: (t,e)=>{
                        const {dragPropagation: i, dragDirectionLock: s, onDirectionLock: o, onDrag: n} = this.getProps();
                        if (!i && !this.openGlobalLock)
                            return;
                        const {offset: r} = e;
                        if (s && null === this.currentDirection)
                            return this.currentDirection = function(t, e=10) {
                                let i = null;
                                Math.abs(t.y) > e ? i = "y" : Math.abs(t.x) > e && (i = "x");
                                return i
                            }(r),
                            void (null !== this.currentDirection && o && o(this.currentDirection));
                        this.updateAxis("x", e.point, r),
                        this.updateAxis("y", e.point, r),
                        this.visualElement.render(),
                        n && n(t, e)
                    }
                    ,
                    onSessionEnd: (t,e)=>this.stop(t, e)
                },{
                    transformPagePoint: this.visualElement.getTransformPagePoint()
                })
            }
            stop(t, e) {
                const i = this.isDragging;
                if (this.cancel(),
                !i)
                    return;
                const {velocity: s} = e;
                this.startAnimation(s);
                const {onDragEnd: o} = this.getProps();
                o && d.Wi.update((()=>o(t, e)))
            }
            cancel() {
                this.isDragging = !1;
                const {projection: t, animationState: e} = this.visualElement;
                t && (t.isAnimationBlocked = !1),
                this.panSession && this.panSession.end(),
                this.panSession = void 0;
                const {dragPropagation: i} = this.getProps();
                !i && this.openGlobalLock && (this.openGlobalLock(),
                this.openGlobalLock = null),
                e && e.setActive("whileDrag", !1)
            }
            updateAxis(t, e, i) {
                const {drag: s} = this.getProps();
                if (!i || !Y(t, s, this.currentDirection))
                    return;
                const o = this.getAxisMotionValue(t);
                let n = this.originPoint[t] + i[t];
                this.constraints && this.constraints[t] && (n = function(t, {min: e, max: i}, s) {
                    return void 0 !== e && t < e ? t = s ? (0,
                    E.C)(e, t, s.min) : Math.max(t, e) : void 0 !== i && t > i && (t = s ? (0,
                    E.C)(i, t, s.max) : Math.min(t, i)),
                    t
                }(n, this.constraints[t], this.elastic[t])),
                o.set(n)
            }
            resolveConstraints() {
                const {dragConstraints: t, dragElastic: e} = this.getProps()
                  , {layout: i} = this.visualElement.projection || {}
                  , s = this.constraints;
                t && (0,
                T.I)(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : this.constraints = !(!t || !i) && function(t, {top: e, left: i, bottom: s, right: o}) {
                    return {
                        x: b(t.x, i, o),
                        y: b(t.y, e, s)
                    }
                }(i.layoutBox, t),
                this.elastic = function(t=k) {
                    return !1 === t ? t = 0 : !0 === t && (t = k),
                    {
                        x: w(t, "left", "right"),
                        y: w(t, "top", "bottom")
                    }
                }(e),
                s !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && O((t=>{
                    this.getAxisMotionValue(t) && (this.constraints[t] = function(t, e) {
                        const i = {};
                        return void 0 !== e.min && (i.min = e.min - t.min),
                        void 0 !== e.max && (i.max = e.max - t.min),
                        i
                    }(i.layoutBox[t], this.constraints[t]))
                }
                ))
            }
            resolveRefConstraints() {
                const {dragConstraints: t, onMeasureDragConstraints: e} = this.getProps();
                if (!t || !(0,
                T.I)(t))
                    return !1;
                const i = t.current;
                (0,
                n.k)(null !== i, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
                const {projection: s} = this.visualElement;
                if (!s || !s.layout)
                    return !1;
                const o = (0,
                I.z)(i, s.root, this.visualElement.getTransformPagePoint());
                let r = function(t, e) {
                    return {
                        x: V(t.x, e.x),
                        y: V(t.y, e.y)
                    }
                }(s.layout.layoutBox, o);
                if (e) {
                    const t = e((0,
                    G.z2)(r));
                    this.hasMutatedConstraints = !!t,
                    t && (r = (0,
                    G.i8)(t))
                }
                return r
            }
            startAnimation(t) {
                const {drag: e, dragMomentum: i, dragElastic: s, dragTransition: o, dragSnapToOrigin: n, onDragTransitionEnd: r} = this.getProps()
                  , a = this.constraints || {}
                  , h = O((r=>{
                    if (!Y(r, e, this.currentDirection))
                        return;
                    let h = a && a[r] || {};
                    n && (h = {
                        min: 0,
                        max: 0
                    });
                    const l = s ? 200 : 1e6
                      , c = s ? 40 : 1e7
                      , u = {
                        type: "inertia",
                        velocity: i ? t[r] : 0,
                        bounceStiffness: l,
                        bounceDamping: c,
                        timeConstant: 750,
                        restDelta: 1,
                        restSpeed: 10,
                        ...o,
                        ...h
                    };
                    return this.startAxisValueAnimation(r, u)
                }
                ));
                return Promise.all(h).then(r)
            }
            startAxisValueAnimation(t, e) {
                const i = this.getAxisMotionValue(t);
                return i.start((0,
                z.v)(t, i, 0, e))
            }
            stopAnimation() {
                O((t=>this.getAxisMotionValue(t).stop()))
            }
            getAxisMotionValue(t) {
                const e = "_drag" + t.toUpperCase()
                  , i = this.visualElement.getProps()
                  , s = i[e];
                return s || this.visualElement.getValue(t, (i.initial ? i.initial[t] : void 0) || 0)
            }
            snapToCursor(t) {
                O((e=>{
                    const {drag: i} = this.getProps();
                    if (!Y(e, i, this.currentDirection))
                        return;
                    const {projection: s} = this.visualElement
                      , o = this.getAxisMotionValue(e);
                    if (s && s.layout) {
                        const {min: i, max: n} = s.layout.layoutBox[e];
                        o.set(t[e] - (0,
                        E.C)(i, n, .5))
                    }
                }
                ))
            }
            scalePositionWithinConstraints() {
                if (!this.visualElement.current)
                    return;
                const {drag: t, dragConstraints: e} = this.getProps()
                  , {projection: i} = this.visualElement;
                if (!(0,
                T.I)(e) || !i || !this.constraints)
                    return;
                this.stopAnimation();
                const s = {
                    x: 0,
                    y: 0
                };
                O((t=>{
                    const e = this.getAxisMotionValue(t);
                    if (e) {
                        const i = e.get();
                        s[t] = function(t, e) {
                            let i = .5;
                            const s = S(t)
                              , o = S(e);
                            return o > s ? i = (0,
                            D.Y)(e.min, e.max - s, t.min) : s > o && (i = (0,
                            D.Y)(t.min, t.max - o, e.min)),
                            (0,
                            M.u)(0, 1, i)
                        }({
                            min: i,
                            max: i
                        }, this.constraints[t])
                    }
                }
                ));
                const {transformTemplate: o} = this.visualElement.getProps();
                this.visualElement.current.style.transform = o ? o({}, "") : "none",
                i.root && i.root.updateScroll(),
                i.updateLayout(),
                this.resolveConstraints(),
                O((e=>{
                    if (!Y(e, t, null))
                        return;
                    const i = this.getAxisMotionValue(e)
                      , {min: o, max: n} = this.constraints[e];
                    i.set((0,
                    E.C)(o, n, s[e]))
                }
                ))
            }
            addListeners() {
                if (!this.visualElement.current)
                    return;
                $.set(this.visualElement, this);
                const t = this.visualElement.current
                  , e = (0,
                h.a)(t, "pointerdown", (t=>{
                    const {drag: e, dragListener: i=!0} = this.getProps();
                    e && i && this.start(t)
                }
                ))
                  , i = ()=>{
                    const {dragConstraints: t} = this.getProps();
                    (0,
                    T.I)(t) && (this.constraints = this.resolveRefConstraints())
                }
                  , {projection: s} = this.visualElement
                  , o = s.addEventListener("measure", i);
                s && !s.layout && (s.root && s.root.updateScroll(),
                s.updateLayout()),
                i();
                const n = (0,
                N.E)(window, "resize", (()=>this.scalePositionWithinConstraints()))
                  , r = s.addEventListener("didUpdate", (({delta: t, hasLayoutChanged: e})=>{
                    this.isDragging && e && (O((e=>{
                        const i = this.getAxisMotionValue(e);
                        i && (this.originPoint[e] += t[e].translate,
                        i.set(i.get() + t[e].translate))
                    }
                    )),
                    this.visualElement.render())
                }
                ));
                return ()=>{
                    n(),
                    e(),
                    o(),
                    r && r()
                }
            }
            getProps() {
                const t = this.visualElement.getProps()
                  , {drag: e=!1, dragDirectionLock: i=!1, dragPropagation: s=!1, dragConstraints: o=!1, dragElastic: n=k, dragMomentum: r=!0} = t;
                return {
                    ...t,
                    drag: e,
                    dragDirectionLock: i,
                    dragPropagation: s,
                    dragConstraints: o,
                    dragElastic: n,
                    dragMomentum: r
                }
            }
        }
        function Y(t, e, i) {
            return (!0 === e || e === t) && (null === i || i === t)
        }
        class X extends s.L {
            constructor(t) {
                super(t),
                this.removeGroupControls = o.Z,
                this.removeListeners = o.Z,
                this.controls = new H(t)
            }
            mount() {
                const {dragControls: t} = this.node.getProps();
                t && (this.removeGroupControls = t.subscribe(this.controls)),
                this.removeListeners = this.controls.addListeners() || o.Z
            }
            unmount() {
                this.removeGroupControls(),
                this.removeListeners()
            }
        }
        const Z = t=>(e,i)=>{
            t && d.Wi.update((()=>t(e, i)))
        }
        ;
        class Q extends s.L {
            constructor() {
                super(...arguments),
                this.removePointerDownListener = o.Z
            }
            onPointerDown(t) {
                this.session = new m(t,this.createPanHandlers(),{
                    transformPagePoint: this.node.getTransformPagePoint()
                })
            }
            createPanHandlers() {
                const {onPanSessionStart: t, onPanStart: e, onPan: i, onPanEnd: s} = this.node.getProps();
                return {
                    onSessionStart: Z(t),
                    onStart: Z(e),
                    onMove: i,
                    onEnd: (t,e)=>{
                        delete this.session,
                        s && d.Wi.update((()=>s(t, e)))
                    }
                }
            }
            mount() {
                this.removePointerDownListener = (0,
                h.a)(this.node.current, "pointerdown", (t=>this.onPointerDown(t)))
            }
            update() {
                this.session && this.session.updateHandlers(this.createPanHandlers())
            }
            unmount() {
                this.removePointerDownListener(),
                this.session && this.session.end()
            }
        }
        var _ = i(52983)
          , q = i(46882);
        var J = i(92813)
          , K = i(66630);
        const tt = {
            hasAnimatedSinceResize: !0,
            hasEverUpdated: !1
        };
        function et(t, e) {
            return e.max === e.min ? 0 : t / (e.max - e.min) * 100
        }
        const it = {
            correct: (t,e)=>{
                if (!e.target)
                    return t;
                if ("string" === typeof t) {
                    if (!W.px.test(t))
                        return t;
                    t = parseFloat(t)
                }
                return `${et(t, e.target.x)}% ${et(t, e.target.y)}%`
            }
        };
        var st = i(34852);
        const ot = {
            correct: (t,{treeScale: e, projectionDelta: i})=>{
                const s = t
                  , o = st.P.parse(t);
                if (o.length > 5)
                    return s;
                const n = st.P.createTransformer(t)
                  , r = "number" !== typeof o[0] ? 1 : 0
                  , a = i.x.scale * e.x
                  , h = i.y.scale * e.y;
                o[0 + r] /= a,
                o[1 + r] /= h;
                const l = (0,
                E.C)(a, h, .5);
                return "number" === typeof o[2 + r] && (o[2 + r] /= l),
                "number" === typeof o[3 + r] && (o[3 + r] /= l),
                n(o)
            }
        };
        var nt = i(79863);
        class rt extends _.Component {
            componentDidMount() {
                const {visualElement: t, layoutGroup: e, switchLayoutGroup: i, layoutId: s} = this.props
                  , {projection: o} = t;
                (0,
                nt.B)(ht),
                o && (e.group && e.group.add(o),
                i && i.register && s && i.register(o),
                o.root.didUpdate(),
                o.addEventListener("animationComplete", (()=>{
                    this.safeToRemove()
                }
                )),
                o.setOptions({
                    ...o.options,
                    onExitComplete: ()=>this.safeToRemove()
                })),
                tt.hasEverUpdated = !0
            }
            getSnapshotBeforeUpdate(t) {
                const {layoutDependency: e, visualElement: i, drag: s, isPresent: o} = this.props
                  , n = i.projection;
                return n ? (n.isPresent = o,
                s || t.layoutDependency !== e || void 0 === e ? n.willUpdate() : this.safeToRemove(),
                t.isPresent !== o && (o ? n.promote() : n.relegate() || d.Wi.postRender((()=>{
                    const t = n.getStack();
                    t && t.members.length || this.safeToRemove()
                }
                ))),
                null) : null
            }
            componentDidUpdate() {
                const {projection: t} = this.props.visualElement;
                t && (t.root.didUpdate(),
                queueMicrotask((()=>{
                    !t.currentAnimation && t.isLead() && this.safeToRemove()
                }
                )))
            }
            componentWillUnmount() {
                const {visualElement: t, layoutGroup: e, switchLayoutGroup: i} = this.props
                  , {projection: s} = t;
                s && (s.scheduleCheckAfterUnmount(),
                e && e.group && e.group.remove(s),
                i && i.deregister && i.deregister(s))
            }
            safeToRemove() {
                const {safeToRemove: t} = this.props;
                t && t()
            }
            render() {
                return null
            }
        }
        function at(t) {
            const [e,i] = function() {
                const t = (0,
                _.useContext)(q.O);
                if (null === t)
                    return [!0, null];
                const {isPresent: e, onExitComplete: i, register: s} = t
                  , o = (0,
                _.useId)();
                return (0,
                _.useEffect)((()=>s(o)), []),
                !e && i ? [!1, ()=>i && i(o)] : [!0]
            }()
              , s = (0,
            _.useContext)(J.p);
            return _.createElement(rt, {
                ...t,
                layoutGroup: s,
                switchLayoutGroup: (0,
                _.useContext)(K.g),
                isPresent: e,
                safeToRemove: i
            })
        }
        const ht = {
            borderRadius: {
                ...it,
                applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
            },
            borderTopLeftRadius: it,
            borderTopRightRadius: it,
            borderBottomLeftRadius: it,
            borderBottomRightRadius: it,
            boxShadow: ot
        };
        var lt = i(55295)
          , ct = i(92448);
        const ut = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
          , dt = ut.length
          , mt = t=>"string" === typeof t ? parseFloat(t) : t
          , pt = t=>"number" === typeof t || W.px.test(t);
        function gt(t, e) {
            return void 0 !== t[e] ? t[e] : t.borderRadius
        }
        const yt = vt(0, .5, ct.Bn)
          , ft = vt(.5, .95, o.Z);
        function vt(t, e, i) {
            return s=>s < t ? 0 : s > e ? 1 : i((0,
            D.Y)(t, e, s))
        }
        function xt(t, e) {
            t.min = e.min,
            t.max = e.max
        }
        function Pt(t, e) {
            xt(t.x, e.x),
            xt(t.y, e.y)
        }
        var Tt = i(10573);
        function Dt(t, e, i, s, o) {
            return t -= e,
            t = (0,
            Tt.q2)(t, 1 / i, s),
            void 0 !== o && (t = (0,
            Tt.q2)(t, 1 / o, s)),
            t
        }
        function Et(t, e, [i,s,o], n, r) {
            !function(t, e=0, i=1, s=.5, o, n=t, r=t) {
                W.aQ.test(e) && (e = parseFloat(e),
                e = (0,
                E.C)(r.min, r.max, e / 100) - r.min);
                if ("number" !== typeof e)
                    return;
                let a = (0,
                E.C)(n.min, n.max, s);
                t === n && (a -= e),
                t.min = Dt(t.min, e, i, a, o),
                t.max = Dt(t.max, e, i, a, o)
            }(t, e[i], e[s], e[o], e.scale, n, r)
        }
        const St = ["x", "scaleX", "originX"]
          , Lt = ["y", "scaleY", "originY"];
        function Rt(t, e, i, s) {
            Et(t.x, e, St, i ? i.x : void 0, s ? s.x : void 0),
            Et(t.y, e, Lt, i ? i.y : void 0, s ? s.y : void 0)
        }
        var Ct = i(49e3);
        function jt(t) {
            return 0 === t.translate && 1 === t.scale
        }
        function At(t) {
            return jt(t.x) && jt(t.y)
        }
        function Bt(t, e) {
            return Math.round(t.x.min) === Math.round(e.x.min) && Math.round(t.x.max) === Math.round(e.x.max) && Math.round(t.y.min) === Math.round(e.y.min) && Math.round(t.y.max) === Math.round(e.y.max)
        }
        function Mt(t) {
            return S(t.x) / S(t.y)
        }
        var bt = i(40248);
        class Vt {
            constructor() {
                this.members = []
            }
            add(t) {
                (0,
                bt.y4)(this.members, t),
                t.scheduleRender()
            }
            remove(t) {
                if ((0,
                bt.cl)(this.members, t),
                t === this.prevLead && (this.prevLead = void 0),
                t === this.lead) {
                    const t = this.members[this.members.length - 1];
                    t && this.promote(t)
                }
            }
            relegate(t) {
                const e = this.members.findIndex((e=>t === e));
                if (0 === e)
                    return !1;
                let i;
                for (let s = e; s >= 0; s--) {
                    const t = this.members[s];
                    if (!1 !== t.isPresent) {
                        i = t;
                        break
                    }
                }
                return !!i && (this.promote(i),
                !0)
            }
            promote(t, e) {
                const i = this.lead;
                if (t !== i && (this.prevLead = i,
                this.lead = t,
                t.show(),
                i)) {
                    i.instance && i.scheduleRender(),
                    t.scheduleRender(),
                    t.resumeFrom = i,
                    e && (t.resumeFrom.preserveOpacity = !0),
                    i.snapshot && (t.snapshot = i.snapshot,
                    t.snapshot.latestValues = i.animationValues || i.latestValues),
                    t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
                    const {crossfade: s} = t.options;
                    !1 === s && i.hide()
                }
            }
            exitAnimationComplete() {
                this.members.forEach((t=>{
                    const {options: e, resumingFrom: i} = t;
                    e.onExitComplete && e.onExitComplete(),
                    i && i.options.onExitComplete && i.options.onExitComplete()
                }
                ))
            }
            scheduleRender() {
                this.members.forEach((t=>{
                    t.instance && t.scheduleRender(!1)
                }
                ))
            }
            removeLeadSnapshot() {
                this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
            }
        }
        function kt(t, e, i) {
            let s = "";
            const o = t.x.translate / e.x
              , n = t.y.translate / e.y;
            if ((o || n) && (s = `translate3d(${o}px, ${n}px, 0) `),
            1 === e.x && 1 === e.y || (s += `scale(${1 / e.x}, ${1 / e.y}) `),
            i) {
                const {rotate: t, rotateX: e, rotateY: o} = i;
                t && (s += `rotate(${t}deg) `),
                e && (s += `rotateX(${e}deg) `),
                o && (s += `rotateY(${o}deg) `)
            }
            const r = t.x.scale * e.x
              , a = t.y.scale * e.y;
            return 1 === r && 1 === a || (s += `scale(${r}, ${a})`),
            s || "none"
        }
        var wt = i(75295);
        const Ut = (t,e)=>t.depth - e.depth;
        class Ft {
            constructor() {
                this.children = [],
                this.isDirty = !1
            }
            add(t) {
                (0,
                bt.y4)(this.children, t),
                this.isDirty = !0
            }
            remove(t) {
                (0,
                bt.cl)(this.children, t),
                this.isDirty = !0
            }
            forEach(t) {
                this.isDirty && this.children.sort(Ut),
                this.isDirty = !1,
                this.children.forEach(t)
            }
        }
        var Ot = i(96524);
        var It = i(47457);
        var Gt = i(73768)
          , Nt = i(45044);
        const Wt = ["", "X", "Y", "Z"];
        let zt = 0;
        const $t = {
            type: "projectionFrame",
            totalNodes: 0,
            resolvedTargetDeltas: 0,
            recalculatedProjection: 0
        };
        function Ht({attachResizeListener: t, defaultParent: e, measureScroll: i, checkIsScrollRoot: s, resetTransform: o}) {
            return class {
                constructor(t={}, i=(null === e || void 0 === e ? void 0 : e())) {
                    this.id = zt++,
                    this.animationId = 0,
                    this.children = new Set,
                    this.options = {},
                    this.isTreeAnimating = !1,
                    this.isAnimationBlocked = !1,
                    this.isLayoutDirty = !1,
                    this.isProjectionDirty = !1,
                    this.isSharedProjectionDirty = !1,
                    this.isTransformDirty = !1,
                    this.updateManuallyBlocked = !1,
                    this.updateBlockedByResize = !1,
                    this.isUpdating = !1,
                    this.isSVG = !1,
                    this.needsReset = !1,
                    this.shouldResetTransform = !1,
                    this.treeScale = {
                        x: 1,
                        y: 1
                    },
                    this.eventHandlers = new Map,
                    this.hasTreeAnimated = !1,
                    this.updateScheduled = !1,
                    this.checkUpdateFailed = ()=>{
                        this.isUpdating && (this.isUpdating = !1,
                        this.clearAllSnapshots())
                    }
                    ,
                    this.updateProjection = ()=>{
                        $t.totalNodes = $t.resolvedTargetDeltas = $t.recalculatedProjection = 0,
                        this.nodes.forEach(Zt),
                        this.nodes.forEach(ee),
                        this.nodes.forEach(ie),
                        this.nodes.forEach(Qt),
                        (0,
                        It.I)($t)
                    }
                    ,
                    this.hasProjected = !1,
                    this.isVisible = !0,
                    this.animationProgress = 0,
                    this.sharedNodes = new Map,
                    this.latestValues = t,
                    this.root = i ? i.root || i : this,
                    this.path = i ? [...i.path, i] : [],
                    this.parent = i,
                    this.depth = i ? i.depth + 1 : 0;
                    for (let e = 0; e < this.path.length; e++)
                        this.path[e].shouldResetTransform = !0;
                    this.root === this && (this.nodes = new Ft)
                }
                addEventListener(t, e) {
                    return this.eventHandlers.has(t) || this.eventHandlers.set(t, new lt.L),
                    this.eventHandlers.get(t).add(e)
                }
                notifyListeners(t, ...e) {
                    const i = this.eventHandlers.get(t);
                    i && i.notify(...e)
                }
                hasListeners(t) {
                    return this.eventHandlers.has(t)
                }
                mount(e, i=this.root.hasTreeAnimated) {
                    if (this.instance)
                        return;
                    var s;
                    this.isSVG = (s = e)instanceof SVGElement && "svg" !== s.tagName,
                    this.instance = e;
                    const {layoutId: o, layout: n, visualElement: r} = this.options;
                    if (r && !r.current && r.mount(e),
                    this.root.nodes.add(this),
                    this.parent && this.parent.children.add(this),
                    i && (n || o) && (this.isLayoutDirty = !0),
                    t) {
                        let i;
                        const s = ()=>this.root.updateBlockedByResize = !1;
                        t(e, (()=>{
                            this.root.updateBlockedByResize = !0,
                            i && i(),
                            i = function(t, e) {
                                const i = performance.now()
                                  , s = ({timestamp: o})=>{
                                    const n = o - i;
                                    n >= e && ((0,
                                    d.Pn)(s),
                                    t(n - e))
                                }
                                ;
                                return d.Wi.read(s, !0),
                                ()=>(0,
                                d.Pn)(s)
                            }(s, 250),
                            tt.hasAnimatedSinceResize && (tt.hasAnimatedSinceResize = !1,
                            this.nodes.forEach(te))
                        }
                        ))
                    }
                    o && this.root.registerSharedNode(o, this),
                    !1 !== this.options.animate && r && (o || n) && this.addEventListener("didUpdate", (({delta: t, hasLayoutChanged: e, hasRelativeTargetChanged: i, layout: s})=>{
                        if (this.isTreeAnimationBlocked())
                            return this.target = void 0,
                            void (this.relativeTarget = void 0);
                        const o = this.options.transition || r.getDefaultTransition() || he
                          , {onLayoutAnimationStart: n, onLayoutAnimationComplete: a} = r.getProps()
                          , h = !this.targetLayout || !Bt(this.targetLayout, s) || i
                          , l = !e && i;
                        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || l || e && (h || !this.currentAnimation)) {
                            this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                            this.resumingFrom.resumingFrom = void 0),
                            this.setAnimationOrigin(t, l);
                            const e = {
                                ...(0,
                                Ct.e)(o, "layout"),
                                onPlay: n,
                                onComplete: a
                            };
                            (r.shouldReduceMotion || this.options.layoutRoot) && (e.delay = 0,
                            e.type = !1),
                            this.startAnimation(e)
                        } else
                            e || te(this),
                            this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                        this.targetLayout = s
                    }
                    ))
                }
                unmount() {
                    this.options.layoutId && this.willUpdate(),
                    this.root.nodes.remove(this);
                    const t = this.getStack();
                    t && t.remove(this),
                    this.parent && this.parent.children.delete(this),
                    this.instance = void 0,
                    (0,
                    d.Pn)(this.updateProjection)
                }
                blockUpdate() {
                    this.updateManuallyBlocked = !0
                }
                unblockUpdate() {
                    this.updateManuallyBlocked = !1
                }
                isUpdateBlocked() {
                    return this.updateManuallyBlocked || this.updateBlockedByResize
                }
                isTreeAnimationBlocked() {
                    return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
                }
                startUpdate() {
                    this.isUpdateBlocked() || (this.isUpdating = !0,
                    this.nodes && this.nodes.forEach(se),
                    this.animationId++)
                }
                getTransformTemplate() {
                    const {visualElement: t} = this.options;
                    return t && t.getProps().transformTemplate
                }
                willUpdate(t=!0) {
                    if (this.root.hasTreeAnimated = !0,
                    this.root.isUpdateBlocked())
                        return void (this.options.onExitComplete && this.options.onExitComplete());
                    if (!this.root.isUpdating && this.root.startUpdate(),
                    this.isLayoutDirty)
                        return;
                    this.isLayoutDirty = !0;
                    for (let o = 0; o < this.path.length; o++) {
                        const t = this.path[o];
                        t.shouldResetTransform = !0,
                        t.updateScroll("snapshot"),
                        t.options.layoutRoot && t.willUpdate(!1)
                    }
                    const {layoutId: e, layout: i} = this.options;
                    if (void 0 === e && !i)
                        return;
                    const s = this.getTransformTemplate();
                    this.prevTransformTemplateValue = s ? s(this.latestValues, "") : void 0,
                    this.updateSnapshot(),
                    t && this.notifyListeners("willUpdate")
                }
                update() {
                    this.updateScheduled = !1;
                    if (this.isUpdateBlocked())
                        return this.unblockUpdate(),
                        this.clearAllSnapshots(),
                        void this.nodes.forEach(qt);
                    this.isUpdating || this.nodes.forEach(Jt),
                    this.isUpdating = !1,
                    this.nodes.forEach(Kt),
                    this.nodes.forEach(Yt),
                    this.nodes.forEach(Xt),
                    this.clearAllSnapshots();
                    const t = performance.now();
                    d.frameData.delta = (0,
                    M.u)(0, 1e3 / 60, t - d.frameData.timestamp),
                    d.frameData.timestamp = t,
                    d.frameData.isProcessing = !0,
                    d.S6.update.process(d.frameData),
                    d.S6.preRender.process(d.frameData),
                    d.S6.render.process(d.frameData),
                    d.frameData.isProcessing = !1
                }
                didUpdate() {
                    this.updateScheduled || (this.updateScheduled = !0,
                    queueMicrotask((()=>this.update())))
                }
                clearAllSnapshots() {
                    this.nodes.forEach(_t),
                    this.sharedNodes.forEach(oe)
                }
                scheduleUpdateProjection() {
                    d.Wi.preRender(this.updateProjection, !1, !0)
                }
                scheduleCheckAfterUnmount() {
                    d.Wi.postRender((()=>{
                        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
                    }
                    ))
                }
                updateSnapshot() {
                    !this.snapshot && this.instance && (this.snapshot = this.measure())
                }
                updateLayout() {
                    if (!this.instance)
                        return;
                    if (this.updateScroll(),
                    (!this.options.alwaysMeasureLayout || !this.isLead()) && !this.isLayoutDirty)
                        return;
                    if (this.resumeFrom && !this.resumeFrom.instance)
                        for (let i = 0; i < this.path.length; i++) {
                            this.path[i].updateScroll()
                        }
                    const t = this.layout;
                    this.layout = this.measure(!1),
                    this.layoutCorrected = (0,
                    F.dO)(),
                    this.isLayoutDirty = !1,
                    this.projectionDelta = void 0,
                    this.notifyListeners("measure", this.layout.layoutBox);
                    const {visualElement: e} = this.options;
                    e && e.notify("LayoutMeasure", this.layout.layoutBox, t ? t.layoutBox : void 0)
                }
                updateScroll(t="measure") {
                    let e = Boolean(this.options.layoutScroll && this.instance);
                    this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t && (e = !1),
                    e && (this.scroll = {
                        animationId: this.root.animationId,
                        phase: t,
                        isRoot: s(this.instance),
                        offset: i(this.instance)
                    })
                }
                resetTransform() {
                    if (!o)
                        return;
                    const t = this.isLayoutDirty || this.shouldResetTransform
                      , e = this.projectionDelta && !At(this.projectionDelta)
                      , i = this.getTransformTemplate()
                      , s = i ? i(this.latestValues, "") : void 0
                      , n = s !== this.prevTransformTemplateValue;
                    t && (e || (0,
                    wt.ud)(this.latestValues) || n) && (o(this.instance, s),
                    this.shouldResetTransform = !1,
                    this.scheduleRender())
                }
                measure(t=!0) {
                    const e = this.measurePageBox();
                    let i = this.removeElementScroll(e);
                    var s;
                    return t && (i = this.removeTransform(i)),
                    ue((s = i).x),
                    ue(s.y),
                    {
                        animationId: this.root.animationId,
                        measuredBox: e,
                        layoutBox: i,
                        latestValues: {},
                        source: this.id
                    }
                }
                measurePageBox() {
                    const {visualElement: t} = this.options;
                    if (!t)
                        return (0,
                        F.dO)();
                    const e = t.measureViewportBox()
                      , {scroll: i} = this.root;
                    return i && ((0,
                    Tt.am)(e.x, i.offset.x),
                    (0,
                    Tt.am)(e.y, i.offset.y)),
                    e
                }
                removeElementScroll(t) {
                    const e = (0,
                    F.dO)();
                    Pt(e, t);
                    for (let i = 0; i < this.path.length; i++) {
                        const s = this.path[i]
                          , {scroll: o, options: n} = s;
                        if (s !== this.root && o && n.layoutScroll) {
                            if (o.isRoot) {
                                Pt(e, t);
                                const {scroll: i} = this.root;
                                i && ((0,
                                Tt.am)(e.x, -i.offset.x),
                                (0,
                                Tt.am)(e.y, -i.offset.y))
                            }
                            (0,
                            Tt.am)(e.x, o.offset.x),
                            (0,
                            Tt.am)(e.y, o.offset.y)
                        }
                    }
                    return e
                }
                applyTransform(t, e=!1) {
                    const i = (0,
                    F.dO)();
                    Pt(i, t);
                    for (let s = 0; s < this.path.length; s++) {
                        const t = this.path[s];
                        !e && t.options.layoutScroll && t.scroll && t !== t.root && (0,
                        Tt.D2)(i, {
                            x: -t.scroll.offset.x,
                            y: -t.scroll.offset.y
                        }),
                        (0,
                        wt.ud)(t.latestValues) && (0,
                        Tt.D2)(i, t.latestValues)
                    }
                    return (0,
                    wt.ud)(this.latestValues) && (0,
                    Tt.D2)(i, this.latestValues),
                    i
                }
                removeTransform(t) {
                    const e = (0,
                    F.dO)();
                    Pt(e, t);
                    for (let i = 0; i < this.path.length; i++) {
                        const t = this.path[i];
                        if (!t.instance)
                            continue;
                        if (!(0,
                        wt.ud)(t.latestValues))
                            continue;
                        (0,
                        wt.Lj)(t.latestValues) && t.updateSnapshot();
                        const s = (0,
                        F.dO)();
                        Pt(s, t.measurePageBox()),
                        Rt(e, t.latestValues, t.snapshot ? t.snapshot.layoutBox : void 0, s)
                    }
                    return (0,
                    wt.ud)(this.latestValues) && Rt(e, this.latestValues),
                    e
                }
                setTargetDelta(t) {
                    this.targetDelta = t,
                    this.root.scheduleUpdateProjection(),
                    this.isProjectionDirty = !0
                }
                setOptions(t) {
                    this.options = {
                        ...this.options,
                        ...t,
                        crossfade: void 0 === t.crossfade || t.crossfade
                    }
                }
                clearMeasurements() {
                    this.scroll = void 0,
                    this.layout = void 0,
                    this.snapshot = void 0,
                    this.prevTransformTemplateValue = void 0,
                    this.targetDelta = void 0,
                    this.target = void 0,
                    this.isLayoutDirty = !1
                }
                forceRelativeParentToResolveTarget() {
                    this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== d.frameData.timestamp && this.relativeParent.resolveTargetDelta(!0)
                }
                resolveTargetDelta(t=!1) {
                    var e;
                    const i = this.getLead();
                    this.isProjectionDirty || (this.isProjectionDirty = i.isProjectionDirty),
                    this.isTransformDirty || (this.isTransformDirty = i.isTransformDirty),
                    this.isSharedProjectionDirty || (this.isSharedProjectionDirty = i.isSharedProjectionDirty);
                    const s = Boolean(this.resumingFrom) || this !== i;
                    if (!(t || s && this.isSharedProjectionDirty || this.isProjectionDirty || (null === (e = this.parent) || void 0 === e ? void 0 : e.isProjectionDirty) || this.attemptToResolveRelativeTarget))
                        return;
                    const {layout: o, layoutId: n} = this.options;
                    if (this.layout && (o || n)) {
                        if (this.resolvedRelativeTargetAt = d.frameData.timestamp,
                        !this.targetDelta && !this.relativeTarget) {
                            const t = this.getClosestProjectingParent();
                            t && t.layout && 1 !== this.animationProgress ? (this.relativeParent = t,
                            this.forceRelativeParentToResolveTarget(),
                            this.relativeTarget = (0,
                            F.dO)(),
                            this.relativeTargetOrigin = (0,
                            F.dO)(),
                            B(this.relativeTargetOrigin, this.layout.layoutBox, t.layout.layoutBox),
                            Pt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                        }
                        if (this.relativeTarget || this.targetDelta) {
                            var r, a, h;
                            if (this.target || (this.target = (0,
                            F.dO)(),
                            this.targetWithTransforms = (0,
                            F.dO)()),
                            this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
                            r = this.target,
                            a = this.relativeTarget,
                            h = this.relativeParent.target,
                            j(r.x, a.x, h.x),
                            j(r.y, a.y, h.y)) : this.targetDelta ? (Boolean(this.resumingFrom) ? this.target = this.applyTransform(this.layout.layoutBox) : Pt(this.target, this.layout.layoutBox),
                            (0,
                            Tt.o2)(this.target, this.targetDelta)) : Pt(this.target, this.layout.layoutBox),
                            this.attemptToResolveRelativeTarget) {
                                this.attemptToResolveRelativeTarget = !1;
                                const t = this.getClosestProjectingParent();
                                t && Boolean(t.resumingFrom) === Boolean(this.resumingFrom) && !t.options.layoutScroll && t.target && 1 !== this.animationProgress ? (this.relativeParent = t,
                                this.forceRelativeParentToResolveTarget(),
                                this.relativeTarget = (0,
                                F.dO)(),
                                this.relativeTargetOrigin = (0,
                                F.dO)(),
                                B(this.relativeTargetOrigin, this.target, t.target),
                                Pt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                            }
                            $t.resolvedTargetDeltas++
                        }
                    }
                }
                getClosestProjectingParent() {
                    if (this.parent && !(0,
                    wt.Lj)(this.parent.latestValues) && !(0,
                    wt.D_)(this.parent.latestValues))
                        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
                }
                isProjecting() {
                    return Boolean((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
                }
                calcProjection() {
                    var t;
                    const e = this.getLead()
                      , i = Boolean(this.resumingFrom) || this !== e;
                    let s = !0;
                    if ((this.isProjectionDirty || (null === (t = this.parent) || void 0 === t ? void 0 : t.isProjectionDirty)) && (s = !1),
                    i && (this.isSharedProjectionDirty || this.isTransformDirty) && (s = !1),
                    this.resolvedRelativeTargetAt === d.frameData.timestamp && (s = !1),
                    s)
                        return;
                    const {layout: o, layoutId: n} = this.options;
                    if (this.isTreeAnimating = Boolean(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
                    this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
                    !this.layout || !o && !n)
                        return;
                    Pt(this.layoutCorrected, this.layout.layoutBox);
                    const r = this.treeScale.x
                      , a = this.treeScale.y;
                    (0,
                    Tt.YY)(this.layoutCorrected, this.treeScale, this.path, i),
                    !e.layout || e.target || 1 === this.treeScale.x && 1 === this.treeScale.y || (e.target = e.layout.layoutBox);
                    const {target: h} = e;
                    if (!h)
                        return void (this.projectionTransform && (this.projectionDelta = (0,
                        F.wc)(),
                        this.projectionTransform = "none",
                        this.scheduleRender()));
                    this.projectionDelta || (this.projectionDelta = (0,
                    F.wc)(),
                    this.projectionDeltaWithTransform = (0,
                    F.wc)());
                    const l = this.projectionTransform;
                    C(this.projectionDelta, this.layoutCorrected, h, this.latestValues),
                    this.projectionTransform = kt(this.projectionDelta, this.treeScale),
                    this.projectionTransform === l && this.treeScale.x === r && this.treeScale.y === a || (this.hasProjected = !0,
                    this.scheduleRender(),
                    this.notifyListeners("projectionUpdate", h)),
                    $t.recalculatedProjection++
                }
                hide() {
                    this.isVisible = !1
                }
                show() {
                    this.isVisible = !0
                }
                scheduleRender(t=!0) {
                    if (this.options.scheduleRender && this.options.scheduleRender(),
                    t) {
                        const t = this.getStack();
                        t && t.scheduleRender()
                    }
                    this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
                }
                setAnimationOrigin(t, e=!1) {
                    const i = this.snapshot
                      , s = i ? i.latestValues : {}
                      , o = {
                        ...this.latestValues
                    }
                      , n = (0,
                    F.wc)();
                    this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0),
                    this.attemptToResolveRelativeTarget = !e;
                    const r = (0,
                    F.dO)()
                      , a = (i ? i.source : void 0) !== (this.layout ? this.layout.source : void 0)
                      , h = this.getStack()
                      , l = !h || h.members.length <= 1
                      , c = Boolean(a && !l && !0 === this.options.crossfade && !this.path.some(ae));
                    let u;
                    this.animationProgress = 0,
                    this.mixTargetDelta = e=>{
                        const i = e / 1e3;
                        var h, d, m, p, g, y;
                        ne(n.x, t.x, i),
                        ne(n.y, t.y, i),
                        this.setTargetDelta(n),
                        this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (B(r, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                        m = this.relativeTarget,
                        p = this.relativeTargetOrigin,
                        g = r,
                        y = i,
                        re(m.x, p.x, g.x, y),
                        re(m.y, p.y, g.y, y),
                        u && (h = this.relativeTarget,
                        d = u,
                        h.x.min === d.x.min && h.x.max === d.x.max && h.y.min === d.y.min && h.y.max === d.y.max) && (this.isProjectionDirty = !1),
                        u || (u = (0,
                        F.dO)()),
                        Pt(u, this.relativeTarget)),
                        a && (this.animationValues = o,
                        function(t, e, i, s, o, n) {
                            o ? (t.opacity = (0,
                            E.C)(0, void 0 !== i.opacity ? i.opacity : 1, yt(s)),
                            t.opacityExit = (0,
                            E.C)(void 0 !== e.opacity ? e.opacity : 1, 0, ft(s))) : n && (t.opacity = (0,
                            E.C)(void 0 !== e.opacity ? e.opacity : 1, void 0 !== i.opacity ? i.opacity : 1, s));
                            for (let r = 0; r < dt; r++) {
                                const o = `border${ut[r]}Radius`;
                                let n = gt(e, o)
                                  , a = gt(i, o);
                                void 0 === n && void 0 === a || (n || (n = 0),
                                a || (a = 0),
                                0 === n || 0 === a || pt(n) === pt(a) ? (t[o] = Math.max((0,
                                E.C)(mt(n), mt(a), s), 0),
                                (W.aQ.test(a) || W.aQ.test(n)) && (t[o] += "%")) : t[o] = a)
                            }
                            (e.rotate || i.rotate) && (t.rotate = (0,
                            E.C)(e.rotate || 0, i.rotate || 0, s))
                        }(o, s, this.latestValues, i, c, l)),
                        this.root.scheduleUpdateProjection(),
                        this.scheduleRender(),
                        this.animationProgress = i
                    }
                    ,
                    this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
                }
                startAnimation(t) {
                    this.notifyListeners("animationStart"),
                    this.currentAnimation && this.currentAnimation.stop(),
                    this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
                    this.pendingAnimation && ((0,
                    d.Pn)(this.pendingAnimation),
                    this.pendingAnimation = void 0),
                    this.pendingAnimation = d.Wi.update((()=>{
                        tt.hasAnimatedSinceResize = !0,
                        this.currentAnimation = function(t, e, i) {
                            const s = (0,
                            Nt.i)(t) ? t : (0,
                            Gt.BX)(t);
                            return s.start((0,
                            z.v)("", s, e, i)),
                            s.animation
                        }(0, 1e3, {
                            ...t,
                            onUpdate: e=>{
                                this.mixTargetDelta(e),
                                t.onUpdate && t.onUpdate(e)
                            }
                            ,
                            onComplete: ()=>{
                                t.onComplete && t.onComplete(),
                                this.completeAnimation()
                            }
                        }),
                        this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                        this.pendingAnimation = void 0
                    }
                    ))
                }
                completeAnimation() {
                    this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
                    this.resumingFrom.preserveOpacity = void 0);
                    const t = this.getStack();
                    t && t.exitAnimationComplete(),
                    this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
                    this.notifyListeners("animationComplete")
                }
                finishAnimation() {
                    this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3),
                    this.currentAnimation.stop()),
                    this.completeAnimation()
                }
                applyTransformsToTarget() {
                    const t = this.getLead();
                    let {targetWithTransforms: e, target: i, layout: s, latestValues: o} = t;
                    if (e && i && s) {
                        if (this !== t && this.layout && s && de(this.options.animationType, this.layout.layoutBox, s.layoutBox)) {
                            i = this.target || (0,
                            F.dO)();
                            const e = S(this.layout.layoutBox.x);
                            i.x.min = t.target.x.min,
                            i.x.max = i.x.min + e;
                            const s = S(this.layout.layoutBox.y);
                            i.y.min = t.target.y.min,
                            i.y.max = i.y.min + s
                        }
                        Pt(e, i),
                        (0,
                        Tt.D2)(e, o),
                        C(this.projectionDeltaWithTransform, this.layoutCorrected, e, o)
                    }
                }
                registerSharedNode(t, e) {
                    this.sharedNodes.has(t) || this.sharedNodes.set(t, new Vt);
                    this.sharedNodes.get(t).add(e);
                    const i = e.options.initialPromotionConfig;
                    e.promote({
                        transition: i ? i.transition : void 0,
                        preserveFollowOpacity: i && i.shouldPreserveFollowOpacity ? i.shouldPreserveFollowOpacity(e) : void 0
                    })
                }
                isLead() {
                    const t = this.getStack();
                    return !t || t.lead === this
                }
                getLead() {
                    var t;
                    const {layoutId: e} = this.options;
                    return e && (null === (t = this.getStack()) || void 0 === t ? void 0 : t.lead) || this
                }
                getPrevLead() {
                    var t;
                    const {layoutId: e} = this.options;
                    return e ? null === (t = this.getStack()) || void 0 === t ? void 0 : t.prevLead : void 0
                }
                getStack() {
                    const {layoutId: t} = this.options;
                    if (t)
                        return this.root.sharedNodes.get(t)
                }
                promote({needsReset: t, transition: e, preserveFollowOpacity: i}={}) {
                    const s = this.getStack();
                    s && s.promote(this, i),
                    t && (this.projectionDelta = void 0,
                    this.needsReset = !0),
                    e && this.setOptions({
                        transition: e
                    })
                }
                relegate() {
                    const t = this.getStack();
                    return !!t && t.relegate(this)
                }
                resetRotation() {
                    const {visualElement: t} = this.options;
                    if (!t)
                        return;
                    let e = !1;
                    const {latestValues: i} = t;
                    if ((i.rotate || i.rotateX || i.rotateY || i.rotateZ) && (e = !0),
                    !e)
                        return;
                    const s = {};
                    for (let o = 0; o < Wt.length; o++) {
                        const e = "rotate" + Wt[o];
                        i[e] && (s[e] = i[e],
                        t.setStaticValue(e, 0))
                    }
                    t.render();
                    for (const o in s)
                        t.setStaticValue(o, s[o]);
                    t.scheduleRender()
                }
                getProjectionStyles(t={}) {
                    var e, i;
                    const s = {};
                    if (!this.instance || this.isSVG)
                        return s;
                    if (!this.isVisible)
                        return {
                            visibility: "hidden"
                        };
                    s.visibility = "";
                    const o = this.getTransformTemplate();
                    if (this.needsReset)
                        return this.needsReset = !1,
                        s.opacity = "",
                        s.pointerEvents = (0,
                        Ot.b)(t.pointerEvents) || "",
                        s.transform = o ? o(this.latestValues, "") : "none",
                        s;
                    const n = this.getLead();
                    if (!this.projectionDelta || !this.layout || !n.target) {
                        const e = {};
                        return this.options.layoutId && (e.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1,
                        e.pointerEvents = (0,
                        Ot.b)(t.pointerEvents) || ""),
                        this.hasProjected && !(0,
                        wt.ud)(this.latestValues) && (e.transform = o ? o({}, "") : "none",
                        this.hasProjected = !1),
                        e
                    }
                    const r = n.animationValues || n.latestValues;
                    this.applyTransformsToTarget(),
                    s.transform = kt(this.projectionDeltaWithTransform, this.treeScale, r),
                    o && (s.transform = o(r, s.transform));
                    const {x: a, y: h} = this.projectionDelta;
                    s.transformOrigin = `${100 * a.origin}% ${100 * h.origin}% 0`,
                    n.animationValues ? s.opacity = n === this ? null !== (i = null !== (e = r.opacity) && void 0 !== e ? e : this.latestValues.opacity) && void 0 !== i ? i : 1 : this.preserveOpacity ? this.latestValues.opacity : r.opacityExit : s.opacity = n === this ? void 0 !== r.opacity ? r.opacity : "" : void 0 !== r.opacityExit ? r.opacityExit : 0;
                    for (const l in nt.P) {
                        if (void 0 === r[l])
                            continue;
                        const {correct: t, applyTo: e} = nt.P[l]
                          , i = "none" === s.transform ? r[l] : t(r[l], n);
                        if (e) {
                            const t = e.length;
                            for (let o = 0; o < t; o++)
                                s[e[o]] = i
                        } else
                            s[l] = i
                    }
                    return this.options.layoutId && (s.pointerEvents = n === this ? (0,
                    Ot.b)(t.pointerEvents) || "" : "none"),
                    s
                }
                clearSnapshot() {
                    this.resumeFrom = this.snapshot = void 0
                }
                resetTree() {
                    this.root.nodes.forEach((t=>{
                        var e;
                        return null === (e = t.currentAnimation) || void 0 === e ? void 0 : e.stop()
                    }
                    )),
                    this.root.nodes.forEach(qt),
                    this.root.sharedNodes.clear()
                }
            }
        }
        function Yt(t) {
            t.updateLayout()
        }
        function Xt(t) {
            var e;
            const i = (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) || t.snapshot;
            if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
                const {layoutBox: e, measuredBox: s} = t.layout
                  , {animationType: o} = t.options
                  , n = i.source !== t.layout.source;
                "size" === o ? O((t=>{
                    const s = n ? i.measuredBox[t] : i.layoutBox[t]
                      , o = S(s);
                    s.min = e[t].min,
                    s.max = s.min + o
                }
                )) : de(o, i.layoutBox, e) && O((s=>{
                    const o = n ? i.measuredBox[s] : i.layoutBox[s]
                      , r = S(e[s]);
                    o.max = o.min + r,
                    t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0,
                    t.relativeTarget[s].max = t.relativeTarget[s].min + r)
                }
                ));
                const r = (0,
                F.wc)();
                C(r, e, i.layoutBox);
                const a = (0,
                F.wc)();
                n ? C(a, t.applyTransform(s, !0), i.measuredBox) : C(a, e, i.layoutBox);
                const h = !At(r);
                let l = !1;
                if (!t.resumeFrom) {
                    const s = t.getClosestProjectingParent();
                    if (s && !s.resumeFrom) {
                        const {snapshot: o, layout: n} = s;
                        if (o && n) {
                            const r = (0,
                            F.dO)();
                            B(r, i.layoutBox, o.layoutBox);
                            const a = (0,
                            F.dO)();
                            B(a, e, n.layoutBox),
                            Bt(r, a) || (l = !0),
                            s.options.layoutRoot && (t.relativeTarget = a,
                            t.relativeTargetOrigin = r,
                            t.relativeParent = s)
                        }
                    }
                }
                t.notifyListeners("didUpdate", {
                    layout: e,
                    snapshot: i,
                    delta: a,
                    layoutDelta: r,
                    hasLayoutChanged: h,
                    hasRelativeTargetChanged: l
                })
            } else if (t.isLead()) {
                const {onExitComplete: e} = t.options;
                e && e()
            }
            t.options.transition = void 0
        }
        function Zt(t) {
            $t.totalNodes++,
            t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty),
            t.isSharedProjectionDirty || (t.isSharedProjectionDirty = Boolean(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)),
            t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
        }
        function Qt(t) {
            t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
        }
        function _t(t) {
            t.clearSnapshot()
        }
        function qt(t) {
            t.clearMeasurements()
        }
        function Jt(t) {
            t.isLayoutDirty = !1
        }
        function Kt(t) {
            const {visualElement: e} = t.options;
            e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"),
            t.resetTransform()
        }
        function te(t) {
            t.finishAnimation(),
            t.targetDelta = t.relativeTarget = t.target = void 0,
            t.isProjectionDirty = !0
        }
        function ee(t) {
            t.resolveTargetDelta()
        }
        function ie(t) {
            t.calcProjection()
        }
        function se(t) {
            t.resetRotation()
        }
        function oe(t) {
            t.removeLeadSnapshot()
        }
        function ne(t, e, i) {
            t.translate = (0,
            E.C)(e.translate, 0, i),
            t.scale = (0,
            E.C)(e.scale, 1, i),
            t.origin = e.origin,
            t.originPoint = e.originPoint
        }
        function re(t, e, i, s) {
            t.min = (0,
            E.C)(e.min, i.min, s),
            t.max = (0,
            E.C)(e.max, i.max, s)
        }
        function ae(t) {
            return t.animationValues && void 0 !== t.animationValues.opacityExit
        }
        const he = {
            duration: .45,
            ease: [.4, 0, .1, 1]
        }
          , le = t=>"undefined" !== typeof navigator && navigator.userAgent.toLowerCase().includes(t)
          , ce = le("applewebkit/") && !le("chrome/") ? Math.round : o.Z;
        function ue(t) {
            t.min = ce(t.min),
            t.max = ce(t.max)
        }
        function de(t, e, i) {
            return "position" === t || "preserve-aspect" === t && !L(Mt(e), Mt(i), .2)
        }
        const me = Ht({
            attachResizeListener: (t,e)=>(0,
            N.E)(t, "resize", e),
            measureScroll: ()=>({
                x: document.documentElement.scrollLeft || document.body.scrollLeft,
                y: document.documentElement.scrollTop || document.body.scrollTop
            }),
            checkIsScrollRoot: ()=>!0
        })
          , pe = {
            current: void 0
        }
          , ge = Ht({
            measureScroll: t=>({
                x: t.scrollLeft,
                y: t.scrollTop
            }),
            defaultParent: ()=>{
                if (!pe.current) {
                    const t = new me({});
                    t.mount(window),
                    t.setOptions({
                        layoutScroll: !0
                    }),
                    pe.current = t
                }
                return pe.current
            }
            ,
            resetTransform: (t,e)=>{
                t.style.transform = void 0 !== e ? e : "none"
            }
            ,
            checkIsScrollRoot: t=>Boolean("fixed" === window.getComputedStyle(t).position)
        })
          , ye = {
            pan: {
                Feature: Q
            },
            drag: {
                Feature: X,
                ProjectionNode: ge,
                MeasureLayout: at
            }
        }
          , fe = {
            layout: {
                ProjectionNode: ge,
                MeasureLayout: at
            }
        };
        const ve = {
            ...i(6831).H,
            ...ye,
            ...fe
        }
    }
}]);
