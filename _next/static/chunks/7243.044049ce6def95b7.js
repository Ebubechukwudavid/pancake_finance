(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[7243], {
    22716: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.PINO_CUSTOM_CONTEXT_KEY = t.PINO_LOGGER_DEFAULTS = void 0,
        t.PINO_LOGGER_DEFAULTS = {
            level: "info"
        },
        t.PINO_CUSTOM_CONTEXT_KEY = "custom_context"
    },
    91773: function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.pino = void 0;
        const r = i(33569)
          , s = r.__importDefault(i(9049));
        Object.defineProperty(t, "pino", {
            enumerable: !0,
            get: function() {
                return s.default
            }
        }),
        r.__exportStar(i(22716), t),
        r.__exportStar(i(57517), t)
    },
    57517: function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.generateChildLogger = t.formatChildLoggerContext = t.getLoggerContext = t.setBrowserLoggerContext = t.getBrowserLoggerContext = t.getDefaultLoggerOptions = void 0;
        const r = i(22716);
        function s(e, t=r.PINO_CUSTOM_CONTEXT_KEY) {
            return e[t] || ""
        }
        function n(e, t, i=r.PINO_CUSTOM_CONTEXT_KEY) {
            return e[i] = t,
            e
        }
        function o(e, t=r.PINO_CUSTOM_CONTEXT_KEY) {
            let i = "";
            return i = "undefined" === typeof e.bindings ? s(e, t) : e.bindings().context || "",
            i
        }
        function a(e, t, i=r.PINO_CUSTOM_CONTEXT_KEY) {
            const s = o(e, i);
            return s.trim() ? `${s}/${t}` : t
        }
        t.getDefaultLoggerOptions = function(e) {
            return Object.assign(Object.assign({}, e), {
                level: (null === e || void 0 === e ? void 0 : e.level) || r.PINO_LOGGER_DEFAULTS.level
            })
        }
        ,
        t.getBrowserLoggerContext = s,
        t.setBrowserLoggerContext = n,
        t.getLoggerContext = o,
        t.formatChildLoggerContext = a,
        t.generateChildLogger = function(e, t, i=r.PINO_CUSTOM_CONTEXT_KEY) {
            const s = a(e, t, i);
            return n(e.child({
                context: s
            }), s, i)
        }
    },
    69841: function(e) {
        "use strict";
        e.exports = function(e) {
            if (e.length >= 255)
                throw new TypeError("Alphabet too long");
            for (var t = new Uint8Array(256), i = 0; i < t.length; i++)
                t[i] = 255;
            for (var r = 0; r < e.length; r++) {
                var s = e.charAt(r)
                  , n = s.charCodeAt(0);
                if (255 !== t[n])
                    throw new TypeError(s + " is ambiguous");
                t[n] = r
            }
            var o = e.length
              , a = e.charAt(0)
              , c = Math.log(o) / Math.log(256)
              , h = Math.log(256) / Math.log(o);
            function l(e) {
                if ("string" !== typeof e)
                    throw new TypeError("Expected String");
                if (0 === e.length)
                    return new Uint8Array;
                for (var i = 0, r = 0, s = 0; e[i] === a; )
                    r++,
                    i++;
                for (var n = (e.length - i) * c + 1 >>> 0, h = new Uint8Array(n); e[i]; ) {
                    var l = t[e.charCodeAt(i)];
                    if (255 === l)
                        return;
                    for (var u = 0, d = n - 1; (0 !== l || u < s) && -1 !== d; d--,
                    u++)
                        l += o * h[d] >>> 0,
                        h[d] = l % 256 >>> 0,
                        l = l / 256 >>> 0;
                    if (0 !== l)
                        throw new Error("Non-zero carry");
                    s = u,
                    i++
                }
                for (var g = n - s; g !== n && 0 === h[g]; )
                    g++;
                for (var p = new Uint8Array(r + (n - g)), f = r; g !== n; )
                    p[f++] = h[g++];
                return p
            }
            return {
                encode: function(t) {
                    if (t instanceof Uint8Array || (ArrayBuffer.isView(t) ? t = new Uint8Array(t.buffer,t.byteOffset,t.byteLength) : Array.isArray(t) && (t = Uint8Array.from(t))),
                    !(t instanceof Uint8Array))
                        throw new TypeError("Expected Uint8Array");
                    if (0 === t.length)
                        return "";
                    for (var i = 0, r = 0, s = 0, n = t.length; s !== n && 0 === t[s]; )
                        s++,
                        i++;
                    for (var c = (n - s) * h + 1 >>> 0, l = new Uint8Array(c); s !== n; ) {
                        for (var u = t[s], d = 0, g = c - 1; (0 !== u || d < r) && -1 !== g; g--,
                        d++)
                            u += 256 * l[g] >>> 0,
                            l[g] = u % o >>> 0,
                            u = u / o >>> 0;
                        if (0 !== u)
                            throw new Error("Non-zero carry");
                        r = d,
                        s++
                    }
                    for (var p = c - r; p !== c && 0 === l[p]; )
                        p++;
                    for (var f = a.repeat(i); p < c; ++p)
                        f += e.charAt(l[p]);
                    return f
                },
                decodeUnsafe: l,
                decode: function(e) {
                    var t = l(e);
                    if (t)
                        return t;
                    throw new Error("Non-base" + o + " character")
                }
            }
        }
    },
    80400: function(e, t, i) {
        const r = i(69841);
        e.exports = r("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz")
    },
    6961: function(e, t, i) {
        "use strict";
        i.d(t, {
            DM: function() {
                return p
            },
            h8: function() {
                return b
            },
            jc: function() {
                return m
            },
            ln: function() {
                return f
            },
            o5: function() {
                return y
            }
        });
        const r = Symbol()
          , s = Symbol()
          , n = "a"
          , o = "w";
        let a = (e,t)=>new Proxy(e,t);
        const c = Object.getPrototypeOf
          , h = new WeakMap
          , l = e=>e && (h.has(e) ? h.get(e) : c(e) === Object.prototype || c(e) === Array.prototype)
          , u = e=>"object" == typeof e && null !== e
          , d = e=>{
            if (Array.isArray(e))
                return Array.from(e);
            const t = Object.getOwnPropertyDescriptors(e);
            return Object.values(t).forEach((e=>{
                e.configurable = !0
            }
            )),
            Object.create(c(e), t)
        }
          , g = e=>e[s] || e
          , p = (e,t,i,c)=>{
            if (!l(e))
                return e;
            let h = c && c.get(e);
            if (!h) {
                const t = g(e);
                h = (e=>Object.values(Object.getOwnPropertyDescriptors(e)).some((e=>!e.configurable && !e.writable)))(t) ? [t, d(t)] : [t],
                null == c || c.set(e, h)
            }
            const [u,f] = h;
            let y = i && i.get(u);
            return y && y[1].f === !!f || (y = ((e,t)=>{
                const i = {
                    f: t
                };
                let a = !1;
                const c = (t,r)=>{
                    if (!a) {
                        let s = i[n].get(e);
                        if (s || (s = {},
                        i[n].set(e, s)),
                        t === o)
                            s[o] = !0;
                        else {
                            let e = s[t];
                            e || (e = new Set,
                            s[t] = e),
                            e.add(r)
                        }
                    }
                }
                  , h = {
                    get: (t,r)=>r === s ? e : (c("k", r),
                    p(Reflect.get(t, r), i[n], i.c, i.t)),
                    has: (t,s)=>s === r ? (a = !0,
                    i[n].delete(e),
                    !0) : (c("h", s),
                    Reflect.has(t, s)),
                    getOwnPropertyDescriptor: (e,t)=>(c("o", t),
                    Reflect.getOwnPropertyDescriptor(e, t)),
                    ownKeys: e=>(c(o),
                    Reflect.ownKeys(e))
                };
                return t && (h.set = h.deleteProperty = ()=>!1),
                [h, i]
            }
            )(u, !!f),
            y[1].p = a(f || u, y[0]),
            i && i.set(u, y)),
            y[1][n] = t,
            y[1].c = i,
            y[1].t = c,
            y[1].p
        }
          , f = (e,t,i,r)=>{
            if (Object.is(e, t))
                return !1;
            if (!u(e) || !u(t))
                return !0;
            const s = i.get(g(e));
            if (!s)
                return !0;
            if (r) {
                const i = r.get(e);
                if (i && i.n === t)
                    return i.g;
                r.set(e, {
                    n: t,
                    g: !1
                })
            }
            let n = null;
            try {
                for (const i of s.h || [])
                    if (n = Reflect.has(e, i) !== Reflect.has(t, i),
                    n)
                        return n;
                if (!0 === s[o]) {
                    if (n = ((e,t)=>{
                        const i = Reflect.ownKeys(e)
                          , r = Reflect.ownKeys(t);
                        return i.length !== r.length || i.some(((e,t)=>e !== r[t]))
                    }
                    )(e, t),
                    n)
                        return n
                } else
                    for (const i of s.o || [])
                        if (n = !!Reflect.getOwnPropertyDescriptor(e, i) != !!Reflect.getOwnPropertyDescriptor(t, i),
                        n)
                            return n;
                for (const o of s.k || [])
                    if (n = f(e[o], t[o], i, r),
                    n)
                        return n;
                return null === n && (n = !0),
                n
            } finally {
                r && r.set(e, {
                    n: t,
                    g: n
                })
            }
        }
          , y = e=>l(e) && e[s] || null
          , m = (e,t=!0)=>{
            h.set(e, t)
        }
          , b = (e,t,i)=>{
            const r = []
              , s = new WeakSet
              , n = (e,a)=>{
                if (s.has(e))
                    return;
                u(e) && s.add(e);
                const c = u(e) && t.get(g(e));
                if (c) {
                    var h, l;
                    if (null == (h = c.h) || h.forEach((e=>{
                        const t = `:has(${String(e)})`;
                        r.push(a ? [...a, t] : [t])
                    }
                    )),
                    !0 === c[o]) {
                        const e = ":ownKeys";
                        r.push(a ? [...a, e] : [e])
                    } else {
                        var d;
                        null == (d = c.o) || d.forEach((e=>{
                            const t = `:hasOwn(${String(e)})`;
                            r.push(a ? [...a, t] : [t])
                        }
                        ))
                    }
                    null == (l = c.k) || l.forEach((t=>{
                        i && !("value"in (Object.getOwnPropertyDescriptor(e, t) || {})) || n(e[t], a ? [...a, t] : [t])
                    }
                    ))
                } else
                    a && r.push(a)
            }
            ;
            return n(e),
            r
        }
    },
    87243: function(e, t, i) {
        "use strict";
        i.d(t, {
            z3: function() {
                return Sa
            },
            aT: function() {
                return ya
            },
            zn: function() {
                return ma
            },
            us: function() {
                return ba
            },
            mr: function() {
                return wa
            },
            Q3: function() {
                return va
            },
            mU: function() {
                return Ea
            },
            p_: function() {
                return Ia
            },
            AW: function() {
                return _a
            },
            L7: function() {
                return ga
            }
        });
        var r = i(52983)
          , s = i(47324)
          , n = i.n(s)
          , o = i(54646)
          , a = i(77698)
          , c = i(91773)
          , h = i(92449);
        class l extends h.q {
            constructor(e) {
                super(),
                this.opts = e,
                this.protocol = "wc",
                this.version = 2
            }
        }
        class u extends h.q {
            constructor(e, t) {
                super(),
                this.core = e,
                this.logger = t,
                this.records = new Map
            }
        }
        class d {
            constructor(e, t) {
                this.logger = e,
                this.core = t
            }
        }
        class g extends h.q {
            constructor(e, t) {
                super(),
                this.relayer = e,
                this.logger = t
            }
        }
        class p extends h.q {
            constructor(e) {
                super()
            }
        }
        class f {
            constructor(e, t, i, r) {
                this.core = e,
                this.logger = t,
                this.name = i
            }
        }
        class y extends h.q {
            constructor(e, t) {
                super(),
                this.relayer = e,
                this.logger = t
            }
        }
        class m extends h.q {
            constructor(e, t) {
                super(),
                this.core = e,
                this.logger = t
            }
        }
        class b {
            constructor(e, t) {
                this.projectId = e,
                this.logger = t
            }
        }
        class w {
            constructor(e, t) {
                this.projectId = e,
                this.logger = t
            }
        }
        n();
        s.EventEmitter;
        var v = i(21646)
          , E = i(40267)
          , I = i(77279)
          , _ = i(4759)
          , S = i(80900)
          , P = i(58161)
          , O = i(5796)
          , x = i(42772)
          , A = i(79935)
          , R = i(89727)
          , T = i(21846)
          , N = (i(64390),
        i(68496))
          , C = i(43355)
          , L = i(73656);
        const D = e=>e?.split(":")
          , j = (e,t)=>{
            const i = `${e.domain} wants you to sign in with your Ethereum account:`
              , r = (e=>{
                const t = e && D(e);
                if (t)
                    return t.pop()
            }
            )(t)
              , s = e.statement
              , n = `URI: ${e.aud}`
              , o = `Version: ${e.version}`
              , a = `Chain ID: ${(e=>{
                const t = e && D(e);
                if (t)
                    return t[3]
            }
            )(t)}`
              , c = `Nonce: ${e.nonce}`
              , h = `Issued At: ${e.iat}`
              , l = e.resources && e.resources.length > 0 ? `Resources:\n${e.resources.map((e=>`- ${e}`)).join("\n")}` : void 0;
            return [i, r, "", s, "", n, o, a, c, h, l].filter((e=>null != e)).join("\n")
        }
          , U = "base10"
          , K = "base16"
          , z = "base64pad"
          , M = "utf8"
          , $ = 0
          , k = 1
          , B = 0
          , q = 1
          , V = 12
          , F = 32;
        function H() {
            const e = (0,
            S.randomBytes)(F);
            return (0,
            x.BB)(e, K)
        }
        function W(e, t) {
            const i = O.gi((0,
            x.mL)(e, K), (0,
            x.mL)(t, K), !0)
              , r = new _.t(P.mE,i).expand(F);
            return (0,
            x.BB)(r, K)
        }
        function J(e) {
            const t = (0,
            P.vp)((0,
            x.mL)(e, K));
            return (0,
            x.BB)(t, K)
        }
        function G(e) {
            const t = (0,
            P.vp)((0,
            x.mL)(e, M));
            return (0,
            x.BB)(t, K)
        }
        function Y(e) {
            return Number((0,
            x.BB)(e, U))
        }
        function Z(e) {
            const t = function(e) {
                return (0,
                x.mL)(`${e}`, U)
            }(typeof e.type < "u" ? e.type : $);
            if (Y(t) === k && typeof e.senderPublicKey > "u")
                throw new Error("Missing sender public key for type 1 envelope");
            const i = typeof e.senderPublicKey < "u" ? (0,
            x.mL)(e.senderPublicKey, K) : void 0
              , r = typeof e.iv < "u" ? (0,
            x.mL)(e.iv, K) : (0,
            S.randomBytes)(V);
            return function(e) {
                if (Y(e.type) === k) {
                    if (typeof e.senderPublicKey > "u")
                        throw new Error("Missing sender public key for type 1 envelope");
                    return (0,
                    x.BB)((0,
                    x.zo)([e.type, e.senderPublicKey, e.iv, e.sealed]), z)
                }
                return (0,
                x.BB)((0,
                x.zo)([e.type, e.iv, e.sealed]), z)
            }({
                type: t,
                sealed: new I.OK((0,
                x.mL)(e.symKey, K)).seal(r, (0,
                x.mL)(e.message, M)),
                iv: r,
                senderPublicKey: i
            })
        }
        function X(e) {
            const t = (0,
            x.mL)(e, z)
              , i = t.slice(B, q)
              , r = q;
            if (Y(i) === k) {
                const e = r + F
                  , s = e + V
                  , n = t.slice(r, e)
                  , o = t.slice(e, s);
                return {
                    type: i,
                    sealed: t.slice(s),
                    iv: o,
                    senderPublicKey: n
                }
            }
            const s = r + V
              , n = t.slice(r, s);
            return {
                type: i,
                sealed: t.slice(s),
                iv: n
            }
        }
        function Q(e) {
            const t = e?.type || $;
            if (t === k) {
                if (typeof e?.senderPublicKey > "u")
                    throw new Error("missing sender public key");
                if (typeof e?.receiverPublicKey > "u")
                    throw new Error("missing receiver public key")
            }
            return {
                type: t,
                senderPublicKey: e?.senderPublicKey,
                receiverPublicKey: e?.receiverPublicKey
            }
        }
        function ee(e) {
            return e.type === k && "string" == typeof e.senderPublicKey && "string" == typeof e.receiverPublicKey
        }
        var te = Object.defineProperty
          , ie = Object.getOwnPropertySymbols
          , re = Object.prototype.hasOwnProperty
          , se = Object.prototype.propertyIsEnumerable
          , ne = (e,t,i)=>t in e ? te(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: i
        }) : e[t] = i
          , oe = (e,t)=>{
            for (var i in t || (t = {}))
                re.call(t, i) && ne(e, i, t[i]);
            if (ie)
                for (var i of ie(t))
                    se.call(t, i) && ne(e, i, t[i]);
            return e
        }
        ;
        const ae = "ReactNative"
          , ce = {
            reactNative: "react-native",
            node: "node",
            browser: "browser",
            unknown: "unknown"
        }
          , he = "js";
        function le() {
            return typeof L < "u" && typeof L.versions < "u" && typeof L.versions.node < "u"
        }
        function ue() {
            return !(0,
            T.getDocument)() && !!(0,
            T.getNavigator)() && navigator.product === ae
        }
        function de() {
            return !le() && !!(0,
            T.getNavigator)() && !!(0,
            T.getDocument)()
        }
        function ge() {
            return ue() ? ce.reactNative : le() ? ce.node : de() ? ce.browser : ce.unknown
        }
        function pe(e, t, r) {
            const s = function() {
                if (ge() === ce.reactNative && typeof i.g < "u" && typeof (null == i.g ? void 0 : i.g.Platform) < "u") {
                    const {OS: e, Version: t} = i.g.Platform;
                    return [e, t].join("-")
                }
                const e = (0,
                A.qY)();
                if (null === e)
                    return "unknown";
                const t = e.os ? e.os.replace(" ", "").toLowerCase() : "unknown";
                return "browser" === e.type ? [t, e.name, e.version].join("-") : [t, e.version].join("-")
            }()
              , n = function() {
                var e;
                const t = ge();
                return t === ce.browser ? [t, (null == (e = (0,
                T.getLocation)()) ? void 0 : e.host) || "unknown"].join(":") : t
            }();
            return [[e, t].join("-"), [he, r].join("-"), s, n].join("/")
        }
        function fe({protocol: e, version: t, relayUrl: i, sdkVersion: r, auth: s, projectId: n, useOnCloseEvent: o, bundleId: a}) {
            const c = i.split("?")
              , h = {
                auth: s,
                ua: pe(e, t, r),
                projectId: n,
                useOnCloseEvent: o || void 0,
                origin: a || void 0
            }
              , l = function(e, t) {
                let i = N.parse(e);
                return i = oe(oe({}, i), t),
                N.stringify(i)
            }(c[1] || "", h);
            return c[0] + "?" + l
        }
        function ye(e) {
            return Object.fromEntries(e.entries())
        }
        function me(e) {
            return new Map(Object.entries(e))
        }
        function be(e, t, i) {
            return new Promise((async(r,s)=>{
                const n = setTimeout((()=>s(new Error(i))), t);
                try {
                    r(await e)
                } catch (o) {
                    s(o)
                }
                clearTimeout(n)
            }
            ))
        }
        function we(e, t) {
            if ("string" == typeof t && t.startsWith(`${e}:`))
                return t;
            if ("topic" === e.toLowerCase()) {
                if ("string" != typeof t)
                    throw new Error('Value must be "string" for expirer target type: topic');
                return `topic:${t}`
            }
            if ("id" === e.toLowerCase()) {
                if ("number" != typeof t)
                    throw new Error('Value must be "number" for expirer target type: id');
                return `id:${t}`
            }
            throw new Error(`Unknown expirer target type: ${e}`)
        }
        function ve(e, t) {
            return (0,
            R.fromMiliseconds)((t || Date.now()) + (0,
            R.toMiliseconds)(e))
        }
        function Ee(e) {
            return Date.now() >= (0,
            R.toMiliseconds)(e)
        }
        function Ie(e, t) {
            return `${e}${t ? `:${t}` : ""}`
        }
        function _e(e) {
            return e?.relay || {
                protocol: "irn"
            }
        }
        function Se(e) {
            const t = C.RELAY_JSONRPC[e];
            if (typeof t > "u")
                throw new Error(`Relay Protocol not supported: ${e}`);
            return t
        }
        var Pe = Object.defineProperty
          , Oe = Object.getOwnPropertySymbols
          , xe = Object.prototype.hasOwnProperty
          , Ae = Object.prototype.propertyIsEnumerable
          , Re = (e,t,i)=>t in e ? Pe(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: i
        }) : e[t] = i;
        function Te(e, t="-") {
            const i = {}
              , r = "relay" + t;
            return Object.keys(e).forEach((t=>{
                if (t.startsWith(r)) {
                    const s = t.replace(r, "")
                      , n = e[t];
                    i[s] = n
                }
            }
            )),
            i
        }
        function Ne(e) {
            const t = (e = (e = e.includes("wc://") ? e.replace("wc://", "") : e).includes("wc:") ? e.replace("wc:", "") : e).indexOf(":")
              , i = -1 !== e.indexOf("?") ? e.indexOf("?") : void 0
              , r = e.substring(0, t)
              , s = e.substring(t + 1, i).split("@")
              , n = typeof i < "u" ? e.substring(i) : ""
              , o = N.parse(n);
            return {
                protocol: r,
                topic: Ce(s[0]),
                version: parseInt(s[1], 10),
                symKey: o.symKey,
                relay: Te(o)
            }
        }
        function Ce(e) {
            return e.startsWith("//") ? e.substring(2) : e
        }
        function Le(e) {
            return `${e.protocol}:${e.topic}@${e.version}?` + N.stringify(((e,t)=>{
                for (var i in t || (t = {}))
                    xe.call(t, i) && Re(e, i, t[i]);
                if (Oe)
                    for (var i of Oe(t))
                        Ae.call(t, i) && Re(e, i, t[i]);
                return e
            }
            )({
                symKey: e.symKey
            }, function(e, t="-") {
                const i = {};
                return Object.keys(e).forEach((r=>{
                    const s = "relay" + t + r;
                    e[r] && (i[s] = e[r])
                }
                )),
                i
            }(e.relay)))
        }
        Object.defineProperty,
        Object.defineProperties,
        Object.getOwnPropertyDescriptors,
        Object.getOwnPropertySymbols,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable;
        const De = {
            INVALID_METHOD: {
                message: "Invalid method.",
                code: 1001
            },
            INVALID_EVENT: {
                message: "Invalid event.",
                code: 1002
            },
            INVALID_UPDATE_REQUEST: {
                message: "Invalid update request.",
                code: 1003
            },
            INVALID_EXTEND_REQUEST: {
                message: "Invalid extend request.",
                code: 1004
            },
            INVALID_SESSION_SETTLE_REQUEST: {
                message: "Invalid session settle request.",
                code: 1005
            },
            UNAUTHORIZED_METHOD: {
                message: "Unauthorized method.",
                code: 3001
            },
            UNAUTHORIZED_EVENT: {
                message: "Unauthorized event.",
                code: 3002
            },
            UNAUTHORIZED_UPDATE_REQUEST: {
                message: "Unauthorized update request.",
                code: 3003
            },
            UNAUTHORIZED_EXTEND_REQUEST: {
                message: "Unauthorized extend request.",
                code: 3004
            },
            USER_REJECTED: {
                message: "User rejected.",
                code: 5e3
            },
            USER_REJECTED_CHAINS: {
                message: "User rejected chains.",
                code: 5001
            },
            USER_REJECTED_METHODS: {
                message: "User rejected methods.",
                code: 5002
            },
            USER_REJECTED_EVENTS: {
                message: "User rejected events.",
                code: 5003
            },
            UNSUPPORTED_CHAINS: {
                message: "Unsupported chains.",
                code: 5100
            },
            UNSUPPORTED_METHODS: {
                message: "Unsupported methods.",
                code: 5101
            },
            UNSUPPORTED_EVENTS: {
                message: "Unsupported events.",
                code: 5102
            },
            UNSUPPORTED_ACCOUNTS: {
                message: "Unsupported accounts.",
                code: 5103
            },
            UNSUPPORTED_NAMESPACE_KEY: {
                message: "Unsupported namespace key.",
                code: 5104
            },
            USER_DISCONNECTED: {
                message: "User disconnected.",
                code: 6e3
            },
            SESSION_SETTLEMENT_FAILED: {
                message: "Session settlement failed.",
                code: 7e3
            },
            WC_METHOD_UNSUPPORTED: {
                message: "Unsupported wc_ method.",
                code: 10001
            }
        }
          , je = {
            NOT_INITIALIZED: {
                message: "Not initialized.",
                code: 1
            },
            NO_MATCHING_KEY: {
                message: "No matching key.",
                code: 2
            },
            RESTORE_WILL_OVERRIDE: {
                message: "Restore will override.",
                code: 3
            },
            RESUBSCRIBED: {
                message: "Resubscribed.",
                code: 4
            },
            MISSING_OR_INVALID: {
                message: "Missing or invalid.",
                code: 5
            },
            EXPIRED: {
                message: "Expired.",
                code: 6
            },
            UNKNOWN_TYPE: {
                message: "Unknown type.",
                code: 7
            },
            MISMATCHED_TOPIC: {
                message: "Mismatched topic.",
                code: 8
            },
            NON_CONFORMING_NAMESPACES: {
                message: "Non conforming namespaces.",
                code: 9
            }
        };
        function Ue(e, t) {
            const {message: i, code: r} = je[e];
            return {
                message: t ? `${i} ${t}` : i,
                code: r
            }
        }
        function Ke(e, t) {
            const {message: i, code: r} = De[e];
            return {
                message: t ? `${i} ${t}` : i,
                code: r
            }
        }
        function ze(e, t) {
            return !!Array.isArray(e) && (!(typeof t < "u" && e.length) || e.every(t))
        }
        function Me(e) {
            return typeof e > "u"
        }
        function $e(e, t) {
            return !(!t || !Me(e)) || "string" == typeof e && !!e.trim().length
        }
        function ke(e) {
            return typeof e < "u" && null !== typeof e
        }
        function Be() {
            const e = ge();
            return new Promise((t=>{
                switch (e) {
                case ce.browser:
                    t(de() && navigator?.onLine);
                    break;
                case ce.reactNative:
                    t(async function() {
                        if (ue() && typeof i.g < "u" && null != i.g && i.g.NetInfo) {
                            const e = await (null == i.g ? void 0 : i.g.NetInfo.fetch());
                            return e?.isConnected
                        }
                        return !0
                    }());
                    break;
                case ce.node:
                default:
                    t(!0)
                }
            }
            ))
        }
        function qe(e) {
            switch (ge()) {
            case ce.browser:
                !function(e) {
                    !ue() && de() && (window.addEventListener("online", (()=>e(!0))),
                    window.addEventListener("offline", (()=>e(!1))))
                }(e);
                break;
            case ce.reactNative:
                !function(e) {
                    ue() && typeof i.g < "u" && null != i.g && i.g.NetInfo && i.g?.NetInfo.addEventListener((t=>e(t?.isConnected)))
                }(e);
            case ce.node:
            }
        }
        var Ve = i(18085)
          , Fe = i(88972)
          , He = i(14219)
          , We = i(17361)
          , Je = i.n(We)
          , Ge = i(41846)
          , Ye = i.n(Ge)
          , Ze = i(73656);
        var Xe = function(e, t) {
            if (e.length >= 255)
                throw new TypeError("Alphabet too long");
            for (var i = new Uint8Array(256), r = 0; r < i.length; r++)
                i[r] = 255;
            for (var s = 0; s < e.length; s++) {
                var n = e.charAt(s)
                  , o = n.charCodeAt(0);
                if (255 !== i[o])
                    throw new TypeError(n + " is ambiguous");
                i[o] = s
            }
            var a = e.length
              , c = e.charAt(0)
              , h = Math.log(a) / Math.log(256)
              , l = Math.log(256) / Math.log(a);
            function u(e) {
                if ("string" != typeof e)
                    throw new TypeError("Expected String");
                if (0 === e.length)
                    return new Uint8Array;
                var t = 0;
                if (" " !== e[t]) {
                    for (var r = 0, s = 0; e[t] === c; )
                        r++,
                        t++;
                    for (var n = (e.length - t) * h + 1 >>> 0, o = new Uint8Array(n); e[t]; ) {
                        var l = i[e.charCodeAt(t)];
                        if (255 === l)
                            return;
                        for (var u = 0, d = n - 1; (0 !== l || u < s) && -1 !== d; d--,
                        u++)
                            l += a * o[d] >>> 0,
                            o[d] = l % 256 >>> 0,
                            l = l / 256 >>> 0;
                        if (0 !== l)
                            throw new Error("Non-zero carry");
                        s = u,
                        t++
                    }
                    if (" " !== e[t]) {
                        for (var g = n - s; g !== n && 0 === o[g]; )
                            g++;
                        for (var p = new Uint8Array(r + (n - g)), f = r; g !== n; )
                            p[f++] = o[g++];
                        return p
                    }
                }
            }
            return {
                encode: function(t) {
                    if (t instanceof Uint8Array || (ArrayBuffer.isView(t) ? t = new Uint8Array(t.buffer,t.byteOffset,t.byteLength) : Array.isArray(t) && (t = Uint8Array.from(t))),
                    !(t instanceof Uint8Array))
                        throw new TypeError("Expected Uint8Array");
                    if (0 === t.length)
                        return "";
                    for (var i = 0, r = 0, s = 0, n = t.length; s !== n && 0 === t[s]; )
                        s++,
                        i++;
                    for (var o = (n - s) * l + 1 >>> 0, h = new Uint8Array(o); s !== n; ) {
                        for (var u = t[s], d = 0, g = o - 1; (0 !== u || d < r) && -1 !== g; g--,
                        d++)
                            u += 256 * h[g] >>> 0,
                            h[g] = u % a >>> 0,
                            u = u / a >>> 0;
                        if (0 !== u)
                            throw new Error("Non-zero carry");
                        r = d,
                        s++
                    }
                    for (var p = o - r; p !== o && 0 === h[p]; )
                        p++;
                    for (var f = c.repeat(i); p < o; ++p)
                        f += e.charAt(h[p]);
                    return f
                },
                decodeUnsafe: u,
                decode: function(e) {
                    var i = u(e);
                    if (i)
                        return i;
                    throw new Error(`Non-${t} character`)
                }
            }
        }
          , Qe = Xe;
        const et = e=>{
            if (e instanceof Uint8Array && "Uint8Array" === e.constructor.name)
                return e;
            if (e instanceof ArrayBuffer)
                return new Uint8Array(e);
            if (ArrayBuffer.isView(e))
                return new Uint8Array(e.buffer,e.byteOffset,e.byteLength);
            throw new Error("Unknown type, must be binary type")
        }
        ;
        class tt {
            constructor(e, t, i) {
                this.name = e,
                this.prefix = t,
                this.baseEncode = i
            }
            encode(e) {
                if (e instanceof Uint8Array)
                    return `${this.prefix}${this.baseEncode(e)}`;
                throw Error("Unknown type, must be binary type")
            }
        }
        class it {
            constructor(e, t, i) {
                if (this.name = e,
                this.prefix = t,
                void 0 === t.codePointAt(0))
                    throw new Error("Invalid prefix character");
                this.prefixCodePoint = t.codePointAt(0),
                this.baseDecode = i
            }
            decode(e) {
                if ("string" == typeof e) {
                    if (e.codePointAt(0) !== this.prefixCodePoint)
                        throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
                    return this.baseDecode(e.slice(this.prefix.length))
                }
                throw Error("Can only multibase decode strings")
            }
            or(e) {
                return st(this, e)
            }
        }
        class rt {
            constructor(e) {
                this.decoders = e
            }
            or(e) {
                return st(this, e)
            }
            decode(e) {
                const t = e[0]
                  , i = this.decoders[t];
                if (i)
                    return i.decode(e);
                throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)
            }
        }
        const st = (e,t)=>new rt({
            ...e.decoders || {
                [e.prefix]: e
            },
            ...t.decoders || {
                [t.prefix]: t
            }
        });
        class nt {
            constructor(e, t, i, r) {
                this.name = e,
                this.prefix = t,
                this.baseEncode = i,
                this.baseDecode = r,
                this.encoder = new tt(e,t,i),
                this.decoder = new it(e,t,r)
            }
            encode(e) {
                return this.encoder.encode(e)
            }
            decode(e) {
                return this.decoder.decode(e)
            }
        }
        const ot = ({name: e, prefix: t, encode: i, decode: r})=>new nt(e,t,i,r)
          , at = ({prefix: e, name: t, alphabet: i})=>{
            const {encode: r, decode: s} = Qe(i, t);
            return ot({
                prefix: e,
                name: t,
                encode: r,
                decode: e=>et(s(e))
            })
        }
          , ct = ({name: e, prefix: t, bitsPerChar: i, alphabet: r})=>ot({
            prefix: t,
            name: e,
            encode: e=>((e,t,i)=>{
                const r = "=" === t[t.length - 1]
                  , s = (1 << i) - 1;
                let n = ""
                  , o = 0
                  , a = 0;
                for (let c = 0; c < e.length; ++c)
                    for (a = a << 8 | e[c],
                    o += 8; o > i; )
                        o -= i,
                        n += t[s & a >> o];
                if (o && (n += t[s & a << i - o]),
                r)
                    for (; n.length * i & 7; )
                        n += "=";
                return n
            }
            )(e, r, i),
            decode: t=>((e,t,i,r)=>{
                const s = {};
                for (let l = 0; l < t.length; ++l)
                    s[t[l]] = l;
                let n = e.length;
                for (; "=" === e[n - 1]; )
                    --n;
                const o = new Uint8Array(n * i / 8 | 0);
                let a = 0
                  , c = 0
                  , h = 0;
                for (let l = 0; l < n; ++l) {
                    const t = s[e[l]];
                    if (void 0 === t)
                        throw new SyntaxError(`Non-${r} character`);
                    c = c << i | t,
                    a += i,
                    a >= 8 && (a -= 8,
                    o[h++] = 255 & c >> a)
                }
                if (a >= i || 255 & c << 8 - a)
                    throw new SyntaxError("Unexpected end of data");
                return o
            }
            )(t, r, i, e)
        })
          , ht = ot({
            prefix: "\0",
            name: "identity",
            encode: e=>(e=>(new TextDecoder).decode(e))(e),
            decode: e=>(e=>(new TextEncoder).encode(e))(e)
        });
        var lt = Object.freeze({
            __proto__: null,
            identity: ht
        });
        const ut = ct({
            prefix: "0",
            name: "base2",
            alphabet: "01",
            bitsPerChar: 1
        });
        var dt = Object.freeze({
            __proto__: null,
            base2: ut
        });
        const gt = ct({
            prefix: "7",
            name: "base8",
            alphabet: "01234567",
            bitsPerChar: 3
        });
        var pt = Object.freeze({
            __proto__: null,
            base8: gt
        });
        const ft = at({
            prefix: "9",
            name: "base10",
            alphabet: "0123456789"
        });
        var yt = Object.freeze({
            __proto__: null,
            base10: ft
        });
        const mt = ct({
            prefix: "f",
            name: "base16",
            alphabet: "0123456789abcdef",
            bitsPerChar: 4
        })
          , bt = ct({
            prefix: "F",
            name: "base16upper",
            alphabet: "0123456789ABCDEF",
            bitsPerChar: 4
        });
        var wt = Object.freeze({
            __proto__: null,
            base16: mt,
            base16upper: bt
        });
        const vt = ct({
            prefix: "b",
            name: "base32",
            alphabet: "abcdefghijklmnopqrstuvwxyz234567",
            bitsPerChar: 5
        })
          , Et = ct({
            prefix: "B",
            name: "base32upper",
            alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
            bitsPerChar: 5
        })
          , It = ct({
            prefix: "c",
            name: "base32pad",
            alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
            bitsPerChar: 5
        })
          , _t = ct({
            prefix: "C",
            name: "base32padupper",
            alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
            bitsPerChar: 5
        })
          , St = ct({
            prefix: "v",
            name: "base32hex",
            alphabet: "0123456789abcdefghijklmnopqrstuv",
            bitsPerChar: 5
        })
          , Pt = ct({
            prefix: "V",
            name: "base32hexupper",
            alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
            bitsPerChar: 5
        })
          , Ot = ct({
            prefix: "t",
            name: "base32hexpad",
            alphabet: "0123456789abcdefghijklmnopqrstuv=",
            bitsPerChar: 5
        })
          , xt = ct({
            prefix: "T",
            name: "base32hexpadupper",
            alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
            bitsPerChar: 5
        })
          , At = ct({
            prefix: "h",
            name: "base32z",
            alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
            bitsPerChar: 5
        });
        var Rt = Object.freeze({
            __proto__: null,
            base32: vt,
            base32upper: Et,
            base32pad: It,
            base32padupper: _t,
            base32hex: St,
            base32hexupper: Pt,
            base32hexpad: Ot,
            base32hexpadupper: xt,
            base32z: At
        });
        const Tt = at({
            prefix: "k",
            name: "base36",
            alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
        })
          , Nt = at({
            prefix: "K",
            name: "base36upper",
            alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        });
        var Ct = Object.freeze({
            __proto__: null,
            base36: Tt,
            base36upper: Nt
        });
        const Lt = at({
            name: "base58btc",
            prefix: "z",
            alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
        })
          , Dt = at({
            name: "base58flickr",
            prefix: "Z",
            alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
        });
        var jt = Object.freeze({
            __proto__: null,
            base58btc: Lt,
            base58flickr: Dt
        });
        const Ut = ct({
            prefix: "m",
            name: "base64",
            alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            bitsPerChar: 6
        })
          , Kt = ct({
            prefix: "M",
            name: "base64pad",
            alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            bitsPerChar: 6
        })
          , zt = ct({
            prefix: "u",
            name: "base64url",
            alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
            bitsPerChar: 6
        })
          , Mt = ct({
            prefix: "U",
            name: "base64urlpad",
            alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
            bitsPerChar: 6
        });
        var $t = Object.freeze({
            __proto__: null,
            base64: Ut,
            base64pad: Kt,
            base64url: zt,
            base64urlpad: Mt
        });
        const kt = Array.from("\ud83d\ude80\ud83e\ude90\u2604\ud83d\udef0\ud83c\udf0c\ud83c\udf11\ud83c\udf12\ud83c\udf13\ud83c\udf14\ud83c\udf15\ud83c\udf16\ud83c\udf17\ud83c\udf18\ud83c\udf0d\ud83c\udf0f\ud83c\udf0e\ud83d\udc09\u2600\ud83d\udcbb\ud83d\udda5\ud83d\udcbe\ud83d\udcbf\ud83d\ude02\u2764\ud83d\ude0d\ud83e\udd23\ud83d\ude0a\ud83d\ude4f\ud83d\udc95\ud83d\ude2d\ud83d\ude18\ud83d\udc4d\ud83d\ude05\ud83d\udc4f\ud83d\ude01\ud83d\udd25\ud83e\udd70\ud83d\udc94\ud83d\udc96\ud83d\udc99\ud83d\ude22\ud83e\udd14\ud83d\ude06\ud83d\ude44\ud83d\udcaa\ud83d\ude09\u263a\ud83d\udc4c\ud83e\udd17\ud83d\udc9c\ud83d\ude14\ud83d\ude0e\ud83d\ude07\ud83c\udf39\ud83e\udd26\ud83c\udf89\ud83d\udc9e\u270c\u2728\ud83e\udd37\ud83d\ude31\ud83d\ude0c\ud83c\udf38\ud83d\ude4c\ud83d\ude0b\ud83d\udc97\ud83d\udc9a\ud83d\ude0f\ud83d\udc9b\ud83d\ude42\ud83d\udc93\ud83e\udd29\ud83d\ude04\ud83d\ude00\ud83d\udda4\ud83d\ude03\ud83d\udcaf\ud83d\ude48\ud83d\udc47\ud83c\udfb6\ud83d\ude12\ud83e\udd2d\u2763\ud83d\ude1c\ud83d\udc8b\ud83d\udc40\ud83d\ude2a\ud83d\ude11\ud83d\udca5\ud83d\ude4b\ud83d\ude1e\ud83d\ude29\ud83d\ude21\ud83e\udd2a\ud83d\udc4a\ud83e\udd73\ud83d\ude25\ud83e\udd24\ud83d\udc49\ud83d\udc83\ud83d\ude33\u270b\ud83d\ude1a\ud83d\ude1d\ud83d\ude34\ud83c\udf1f\ud83d\ude2c\ud83d\ude43\ud83c\udf40\ud83c\udf37\ud83d\ude3b\ud83d\ude13\u2b50\u2705\ud83e\udd7a\ud83c\udf08\ud83d\ude08\ud83e\udd18\ud83d\udca6\u2714\ud83d\ude23\ud83c\udfc3\ud83d\udc90\u2639\ud83c\udf8a\ud83d\udc98\ud83d\ude20\u261d\ud83d\ude15\ud83c\udf3a\ud83c\udf82\ud83c\udf3b\ud83d\ude10\ud83d\udd95\ud83d\udc9d\ud83d\ude4a\ud83d\ude39\ud83d\udde3\ud83d\udcab\ud83d\udc80\ud83d\udc51\ud83c\udfb5\ud83e\udd1e\ud83d\ude1b\ud83d\udd34\ud83d\ude24\ud83c\udf3c\ud83d\ude2b\u26bd\ud83e\udd19\u2615\ud83c\udfc6\ud83e\udd2b\ud83d\udc48\ud83d\ude2e\ud83d\ude46\ud83c\udf7b\ud83c\udf43\ud83d\udc36\ud83d\udc81\ud83d\ude32\ud83c\udf3f\ud83e\udde1\ud83c\udf81\u26a1\ud83c\udf1e\ud83c\udf88\u274c\u270a\ud83d\udc4b\ud83d\ude30\ud83e\udd28\ud83d\ude36\ud83e\udd1d\ud83d\udeb6\ud83d\udcb0\ud83c\udf53\ud83d\udca2\ud83e\udd1f\ud83d\ude41\ud83d\udea8\ud83d\udca8\ud83e\udd2c\u2708\ud83c\udf80\ud83c\udf7a\ud83e\udd13\ud83d\ude19\ud83d\udc9f\ud83c\udf31\ud83d\ude16\ud83d\udc76\ud83e\udd74\u25b6\u27a1\u2753\ud83d\udc8e\ud83d\udcb8\u2b07\ud83d\ude28\ud83c\udf1a\ud83e\udd8b\ud83d\ude37\ud83d\udd7a\u26a0\ud83d\ude45\ud83d\ude1f\ud83d\ude35\ud83d\udc4e\ud83e\udd32\ud83e\udd20\ud83e\udd27\ud83d\udccc\ud83d\udd35\ud83d\udc85\ud83e\uddd0\ud83d\udc3e\ud83c\udf52\ud83d\ude17\ud83e\udd11\ud83c\udf0a\ud83e\udd2f\ud83d\udc37\u260e\ud83d\udca7\ud83d\ude2f\ud83d\udc86\ud83d\udc46\ud83c\udfa4\ud83d\ude47\ud83c\udf51\u2744\ud83c\udf34\ud83d\udca3\ud83d\udc38\ud83d\udc8c\ud83d\udccd\ud83e\udd40\ud83e\udd22\ud83d\udc45\ud83d\udca1\ud83d\udca9\ud83d\udc50\ud83d\udcf8\ud83d\udc7b\ud83e\udd10\ud83e\udd2e\ud83c\udfbc\ud83e\udd75\ud83d\udea9\ud83c\udf4e\ud83c\udf4a\ud83d\udc7c\ud83d\udc8d\ud83d\udce3\ud83e\udd42")
          , Bt = kt.reduce(((e,t,i)=>(e[i] = t,
        e)), [])
          , qt = kt.reduce(((e,t,i)=>(e[t.codePointAt(0)] = i,
        e)), []);
        const Vt = ot({
            prefix: "\ud83d\ude80",
            name: "base256emoji",
            encode: function(e) {
                return e.reduce(((e,t)=>e += Bt[t]), "")
            },
            decode: function(e) {
                const t = [];
                for (const i of e) {
                    const e = qt[i.codePointAt(0)];
                    if (void 0 === e)
                        throw new Error(`Non-base256emoji character: ${i}`);
                    t.push(e)
                }
                return new Uint8Array(t)
            }
        });
        var Ft = Object.freeze({
            __proto__: null,
            base256emoji: Vt
        })
          , Ht = function e(t, i, r) {
            i = i || [];
            for (var s = r = r || 0; t >= Gt; )
                i[r++] = 255 & t | Wt,
                t /= 128;
            for (; t & Jt; )
                i[r++] = 255 & t | Wt,
                t >>>= 7;
            return i[r] = 0 | t,
            e.bytes = r - s + 1,
            i
        }
          , Wt = 128
          , Jt = -128
          , Gt = Math.pow(2, 31);
        var Yt = function e(t, i) {
            var r, s = 0, n = 0, o = i = i || 0, a = t.length;
            do {
                if (o >= a)
                    throw e.bytes = 0,
                    new RangeError("Could not decode varint");
                r = t[o++],
                s += n < 28 ? (r & Xt) << n : (r & Xt) * Math.pow(2, n),
                n += 7
            } while (r >= Zt);
            return e.bytes = o - i,
            s
        }
          , Zt = 128
          , Xt = 127;
        var Qt = Math.pow(2, 7)
          , ei = Math.pow(2, 14)
          , ti = Math.pow(2, 21)
          , ii = Math.pow(2, 28)
          , ri = Math.pow(2, 35)
          , si = Math.pow(2, 42)
          , ni = Math.pow(2, 49)
          , oi = Math.pow(2, 56)
          , ai = Math.pow(2, 63)
          , ci = {
            encode: Ht,
            decode: Yt,
            encodingLength: function(e) {
                return e < Qt ? 1 : e < ei ? 2 : e < ti ? 3 : e < ii ? 4 : e < ri ? 5 : e < si ? 6 : e < ni ? 7 : e < oi ? 8 : e < ai ? 9 : 10
            }
        }
          , hi = ci;
        const li = (e,t,i=0)=>(hi.encode(e, t, i),
        t)
          , ui = e=>hi.encodingLength(e)
          , di = (e,t)=>{
            const i = t.byteLength
              , r = ui(e)
              , s = r + ui(i)
              , n = new Uint8Array(s + i);
            return li(e, n, 0),
            li(i, n, r),
            n.set(t, s),
            new gi(e,i,t,n)
        }
        ;
        class gi {
            constructor(e, t, i, r) {
                this.code = e,
                this.size = t,
                this.digest = i,
                this.bytes = r
            }
        }
        const pi = ({name: e, code: t, encode: i})=>new fi(e,t,i);
        class fi {
            constructor(e, t, i) {
                this.name = e,
                this.code = t,
                this.encode = i
            }
            digest(e) {
                if (e instanceof Uint8Array) {
                    const t = this.encode(e);
                    return t instanceof Uint8Array ? di(this.code, t) : t.then((e=>di(this.code, e)))
                }
                throw Error("Unknown type, must be binary type")
            }
        }
        const yi = e=>async t=>new Uint8Array(await crypto.subtle.digest(e, t))
          , mi = pi({
            name: "sha2-256",
            code: 18,
            encode: yi("SHA-256")
        })
          , bi = pi({
            name: "sha2-512",
            code: 19,
            encode: yi("SHA-512")
        });
        Object.freeze({
            __proto__: null,
            sha256: mi,
            sha512: bi
        });
        const wi = et
          , vi = {
            code: 0,
            name: "identity",
            encode: wi,
            digest: e=>di(0, wi(e))
        };
        Object.freeze({
            __proto__: null,
            identity: vi
        });
        new TextEncoder,
        new TextDecoder;
        const Ei = {
            ...lt,
            ...dt,
            ...pt,
            ...yt,
            ...wt,
            ...Rt,
            ...Ct,
            ...jt,
            ...$t,
            ...Ft
        };
        function Ii(e) {
            return null != globalThis.Buffer ? new Uint8Array(e.buffer,e.byteOffset,e.byteLength) : e
        }
        function _i(e, t, i, r) {
            return {
                name: e,
                prefix: t,
                encoder: {
                    name: e,
                    prefix: t,
                    encode: i
                },
                decoder: {
                    decode: r
                }
            }
        }
        const Si = _i("utf8", "u", (e=>"u" + new TextDecoder("utf8").decode(e)), (e=>(new TextEncoder).encode(e.substring(1))))
          , Pi = _i("ascii", "a", (e=>{
            let t = "a";
            for (let i = 0; i < e.length; i++)
                t += String.fromCharCode(e[i]);
            return t
        }
        ), (e=>{
            const t = function(e=0) {
                return null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe ? Ii(globalThis.Buffer.allocUnsafe(e)) : new Uint8Array(e)
            }((e = e.substring(1)).length);
            for (let i = 0; i < e.length; i++)
                t[i] = e.charCodeAt(i);
            return t
        }
        ))
          , Oi = {
            utf8: Si,
            "utf-8": Si,
            hex: Ei.base16,
            latin1: Pi,
            ascii: Pi,
            binary: Pi,
            ...Ei
        };
        const xi = "core"
          , Ai = `wc@2:${xi}:`
          , Ri = "error"
          , Ti = {
            database: ":memory:"
        }
          , Ni = "client_ed25519_seed"
          , Ci = R.ONE_DAY
          , Li = R.SIX_HOURS
          , Di = "wss://relay.walletconnect.com"
          , ji = "wss://relay.walletconnect.org"
          , Ui = "relayer_message"
          , Ki = "relayer_message_ack"
          , zi = "relayer_connect"
          , Mi = "relayer_disconnect"
          , $i = "relayer_error"
          , ki = "relayer_connection_stalled"
          , Bi = "relayer_publish"
          , qi = "payload"
          , Vi = "connect"
          , Fi = "disconnect"
          , Hi = "error"
          , Wi = R.ONE_SECOND
          , Ji = "subscription_created"
          , Gi = "subscription_deleted"
          , Yi = "subscription_sync"
          , Zi = "subscription_resubscribed"
          , Xi = 1e3 * R.FIVE_SECONDS
          , Qi = {
            wc_pairingDelete: {
                req: {
                    ttl: R.ONE_DAY,
                    prompt: !1,
                    tag: 1e3
                },
                res: {
                    ttl: R.ONE_DAY,
                    prompt: !1,
                    tag: 1001
                }
            },
            wc_pairingPing: {
                req: {
                    ttl: R.THIRTY_SECONDS,
                    prompt: !1,
                    tag: 1002
                },
                res: {
                    ttl: R.THIRTY_SECONDS,
                    prompt: !1,
                    tag: 1003
                }
            },
            unregistered_method: {
                req: {
                    ttl: R.ONE_DAY,
                    prompt: !1,
                    tag: 0
                },
                res: {
                    ttl: R.ONE_DAY,
                    prompt: !1,
                    tag: 0
                }
            }
        }
          , er = "pairing_create"
          , tr = "pairing_expire"
          , ir = "pairing_delete"
          , rr = "pairing_ping"
          , sr = "history_created"
          , nr = "history_updated"
          , or = "history_deleted"
          , ar = "history_sync"
          , cr = "expirer_created"
          , hr = "expirer_deleted"
          , lr = "expirer_expired"
          , ur = "expirer_sync"
          , dr = "verify-api"
          , gr = "https://verify.walletconnect.com"
          , pr = "https://verify.walletconnect.org"
          , fr = [gr, pr];
        class yr {
            constructor(e, t) {
                this.core = e,
                this.logger = t,
                this.keychain = new Map,
                this.name = "keychain",
                this.version = "0.3",
                this.initialized = !1,
                this.storagePrefix = Ai,
                this.init = async()=>{
                    if (!this.initialized) {
                        const e = await this.getKeyChain();
                        typeof e < "u" && (this.keychain = e),
                        this.initialized = !0
                    }
                }
                ,
                this.has = e=>(this.isInitialized(),
                this.keychain.has(e)),
                this.set = async(e,t)=>{
                    this.isInitialized(),
                    this.keychain.set(e, t),
                    await this.persist()
                }
                ,
                this.get = e=>{
                    this.isInitialized();
                    const t = this.keychain.get(e);
                    if (typeof t > "u") {
                        const {message: t} = Ue("NO_MATCHING_KEY", `${this.name}: ${e}`);
                        throw new Error(t)
                    }
                    return t
                }
                ,
                this.del = async e=>{
                    this.isInitialized(),
                    this.keychain.delete(e),
                    await this.persist()
                }
                ,
                this.core = e,
                this.logger = (0,
                c.generateChildLogger)(t, this.name)
            }
            get context() {
                return (0,
                c.getLoggerContext)(this.logger)
            }
            get storageKey() {
                return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
            }
            async setKeyChain(e) {
                await this.core.storage.setItem(this.storageKey, ye(e))
            }
            async getKeyChain() {
                const e = await this.core.storage.getItem(this.storageKey);
                return typeof e < "u" ? me(e) : void 0
            }
            async persist() {
                await this.setKeyChain(this.keychain)
            }
            isInitialized() {
                if (!this.initialized) {
                    const {message: e} = Ue("NOT_INITIALIZED", this.name);
                    throw new Error(e)
                }
            }
        }
        class mr {
            constructor(e, t, i) {
                this.core = e,
                this.logger = t,
                this.name = "crypto",
                this.initialized = !1,
                this.init = async()=>{
                    this.initialized || (await this.keychain.init(),
                    this.initialized = !0)
                }
                ,
                this.hasKeys = e=>(this.isInitialized(),
                this.keychain.has(e)),
                this.getClientId = async()=>{
                    this.isInitialized();
                    const e = await this.getClientSeed()
                      , t = E.generateKeyPair(e);
                    return E.encodeIss(t.publicKey)
                }
                ,
                this.generateKeyPair = ()=>{
                    this.isInitialized();
                    const e = function() {
                        const e = O.Au();
                        return {
                            privateKey: (0,
                            x.BB)(e.secretKey, K),
                            publicKey: (0,
                            x.BB)(e.publicKey, K)
                        }
                    }();
                    return this.setPrivateKey(e.publicKey, e.privateKey)
                }
                ,
                this.signJWT = async e=>{
                    this.isInitialized();
                    const t = await this.getClientSeed()
                      , i = E.generateKeyPair(t)
                      , r = H()
                      , s = Ci;
                    return await E.signJWT(r, e, s, i)
                }
                ,
                this.generateSharedKey = (e,t,i)=>{
                    this.isInitialized();
                    const r = W(this.getPrivateKey(e), t);
                    return this.setSymKey(r, i)
                }
                ,
                this.setSymKey = async(e,t)=>{
                    this.isInitialized();
                    const i = t || J(e);
                    return await this.keychain.set(i, e),
                    i
                }
                ,
                this.deleteKeyPair = async e=>{
                    this.isInitialized(),
                    await this.keychain.del(e)
                }
                ,
                this.deleteSymKey = async e=>{
                    this.isInitialized(),
                    await this.keychain.del(e)
                }
                ,
                this.encode = async(e,t,i)=>{
                    this.isInitialized();
                    const r = Q(i)
                      , s = (0,
                    v.u)(t);
                    if (ee(r)) {
                        const t = r.senderPublicKey
                          , i = r.receiverPublicKey;
                        e = await this.generateSharedKey(t, i)
                    }
                    const n = this.getSymKey(e)
                      , {type: o, senderPublicKey: a} = r;
                    return Z({
                        type: o,
                        symKey: n,
                        message: s,
                        senderPublicKey: a
                    })
                }
                ,
                this.decode = async(e,t,i)=>{
                    this.isInitialized();
                    const r = function(e, t) {
                        const i = X(e);
                        return Q({
                            type: Y(i.type),
                            senderPublicKey: typeof i.senderPublicKey < "u" ? (0,
                            x.BB)(i.senderPublicKey, K) : void 0,
                            receiverPublicKey: t?.receiverPublicKey
                        })
                    }(t, i);
                    if (ee(r)) {
                        const t = r.receiverPublicKey
                          , i = r.senderPublicKey;
                        e = await this.generateSharedKey(t, i)
                    }
                    try {
                        const i = function(e) {
                            const t = new I.OK((0,
                            x.mL)(e.symKey, K))
                              , {sealed: i, iv: r} = X(e.encoded)
                              , s = t.open(r, i);
                            if (null === s)
                                throw new Error("Failed to decrypt");
                            return (0,
                            x.BB)(s, M)
                        }({
                            symKey: this.getSymKey(e),
                            encoded: t
                        });
                        return (0,
                        v.D)(i)
                    } catch (u) {
                        this.logger.error(`Failed to decode message from topic: '${e}', clientId: '${await this.getClientId()}'`),
                        this.logger.error(u)
                    }
                }
                ,
                this.getPayloadType = e=>Y(X(e).type),
                this.getPayloadSenderPublicKey = e=>{
                    const t = X(e);
                    return t.senderPublicKey ? (0,
                    x.BB)(t.senderPublicKey, K) : void 0
                }
                ,
                this.core = e,
                this.logger = (0,
                c.generateChildLogger)(t, this.name),
                this.keychain = i || new yr(this.core,this.logger)
            }
            get context() {
                return (0,
                c.getLoggerContext)(this.logger)
            }
            async setPrivateKey(e, t) {
                return await this.keychain.set(e, t),
                e
            }
            getPrivateKey(e) {
                return this.keychain.get(e)
            }
            async getClientSeed() {
                let e = "";
                try {
                    e = this.keychain.get(Ni)
                } catch {
                    e = H(),
                    await this.keychain.set(Ni, e)
                }
                return function(e, t="utf8") {
                    const i = Oi[t];
                    if (!i)
                        throw new Error(`Unsupported encoding "${t}"`);
                    return "utf8" !== t && "utf-8" !== t || null == globalThis.Buffer || null == globalThis.Buffer.from ? i.decoder.decode(`${i.prefix}${e}`) : Ii(globalThis.Buffer.from(e, "utf-8"))
                }(e, "base16")
            }
            getSymKey(e) {
                return this.keychain.get(e)
            }
            isInitialized() {
                if (!this.initialized) {
                    const {message: e} = Ue("NOT_INITIALIZED", this.name);
                    throw new Error(e)
                }
            }
        }
        class br extends d {
            constructor(e, t) {
                super(e, t),
                this.logger = e,
                this.core = t,
                this.messages = new Map,
                this.name = "messages",
                this.version = "0.3",
                this.initialized = !1,
                this.storagePrefix = Ai,
                this.init = async()=>{
                    if (!this.initialized) {
                        this.logger.trace("Initialized");
                        try {
                            const e = await this.getRelayerMessages();
                            typeof e < "u" && (this.messages = e),
                            this.logger.debug(`Successfully Restored records for ${this.name}`),
                            this.logger.trace({
                                type: "method",
                                method: "restore",
                                size: this.messages.size
                            })
                        } catch (e) {
                            this.logger.debug(`Failed to Restore records for ${this.name}`),
                            this.logger.error(e)
                        } finally {
                            this.initialized = !0
                        }
                    }
                }
                ,
                this.set = async(e,t)=>{
                    this.isInitialized();
                    const i = G(t);
                    let r = this.messages.get(e);
                    return typeof r > "u" && (r = {}),
                    typeof r[i] < "u" || (r[i] = t,
                    this.messages.set(e, r),
                    await this.persist()),
                    i
                }
                ,
                this.get = e=>{
                    this.isInitialized();
                    let t = this.messages.get(e);
                    return typeof t > "u" && (t = {}),
                    t
                }
                ,
                this.has = (e,t)=>{
                    this.isInitialized();
                    return typeof this.get(e)[G(t)] < "u"
                }
                ,
                this.del = async e=>{
                    this.isInitialized(),
                    this.messages.delete(e),
                    await this.persist()
                }
                ,
                this.logger = (0,
                c.generateChildLogger)(e, this.name),
                this.core = t
            }
            get context() {
                return (0,
                c.getLoggerContext)(this.logger)
            }
            get storageKey() {
                return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
            }
            async setRelayerMessages(e) {
                await this.core.storage.setItem(this.storageKey, ye(e))
            }
            async getRelayerMessages() {
                const e = await this.core.storage.getItem(this.storageKey);
                return typeof e < "u" ? me(e) : void 0
            }
            async persist() {
                await this.setRelayerMessages(this.messages)
            }
            isInitialized() {
                if (!this.initialized) {
                    const {message: e} = Ue("NOT_INITIALIZED", this.name);
                    throw new Error(e)
                }
            }
        }
        class wr extends g {
            constructor(e, t) {
                super(e, t),
                this.relayer = e,
                this.logger = t,
                this.events = new s.EventEmitter,
                this.name = "publisher",
                this.queue = new Map,
                this.publishTimeout = (0,
                R.toMiliseconds)(R.TEN_SECONDS),
                this.needsTransportRestart = !1,
                this.publish = async(e,t,i)=>{
                    var r;
                    this.logger.debug("Publishing Payload"),
                    this.logger.trace({
                        type: "method",
                        method: "publish",
                        params: {
                            topic: e,
                            message: t,
                            opts: i
                        }
                    });
                    try {
                        const s = i?.ttl || Li
                          , n = _e(i)
                          , o = i?.prompt || !1
                          , a = i?.tag || 0
                          , c = i?.id || (0,
                        Fe.getBigIntRpcId)().toString()
                          , h = {
                            topic: e,
                            message: t,
                            opts: {
                                ttl: s,
                                relay: n,
                                prompt: o,
                                tag: a,
                                id: c
                            }
                        }
                          , l = setTimeout((()=>this.queue.set(c, h)), this.publishTimeout);
                        try {
                            await await be(this.rpcPublish(e, t, s, n, o, a, c), this.publishTimeout, "Failed to publish payload, please try again."),
                            this.removeRequestFromQueue(c),
                            this.relayer.events.emit(Bi, h)
                        } catch (g) {
                            if (this.logger.debug("Publishing Payload stalled"),
                            this.needsTransportRestart = !0,
                            null != (r = i?.internal) && r.throwOnFailedPublish)
                                throw this.removeRequestFromQueue(c),
                                g;
                            return
                        } finally {
                            clearTimeout(l)
                        }
                        this.logger.debug("Successfully Published Payload"),
                        this.logger.trace({
                            type: "method",
                            method: "publish",
                            params: {
                                topic: e,
                                message: t,
                                opts: i
                            }
                        })
                    } catch (d) {
                        throw this.logger.debug("Failed to Publish Payload"),
                        this.logger.error(d),
                        d
                    }
                }
                ,
                this.on = (e,t)=>{
                    this.events.on(e, t)
                }
                ,
                this.once = (e,t)=>{
                    this.events.once(e, t)
                }
                ,
                this.off = (e,t)=>{
                    this.events.off(e, t)
                }
                ,
                this.removeListener = (e,t)=>{
                    this.events.removeListener(e, t)
                }
                ,
                this.relayer = e,
                this.logger = (0,
                c.generateChildLogger)(t, this.name),
                this.registerEventListeners()
            }
            get context() {
                return (0,
                c.getLoggerContext)(this.logger)
            }
            rpcPublish(e, t, i, r, s, n, o) {
                var a, c, h, l;
                const u = {
                    method: Se(r.protocol).publish,
                    params: {
                        topic: e,
                        message: t,
                        ttl: i,
                        prompt: s,
                        tag: n
                    },
                    id: o
                };
                return Me(null == (a = u.params) ? void 0 : a.prompt) && (null == (c = u.params) || delete c.prompt),
                Me(null == (h = u.params) ? void 0 : h.tag) && (null == (l = u.params) || delete l.tag),
                this.logger.debug("Outgoing Relay Payload"),
                this.logger.trace({
                    type: "message",
                    direction: "outgoing",
                    request: u
                }),
                this.relayer.request(u)
            }
            removeRequestFromQueue(e) {
                this.queue.delete(e)
            }
            checkQueue() {
                this.queue.forEach((async e=>{
                    const {topic: t, message: i, opts: r} = e;
                    await this.publish(t, i, r)
                }
                ))
            }
            registerEventListeners() {
                this.relayer.core.heartbeat.on(a.HEARTBEAT_EVENTS.pulse, (()=>{
                    if (this.needsTransportRestart)
                        return this.needsTransportRestart = !1,
                        void this.relayer.events.emit(ki);
                    this.checkQueue()
                }
                )),
                this.relayer.on(Ki, (e=>{
                    this.removeRequestFromQueue(e.id.toString())
                }
                ))
            }
        }
        class vr {
            constructor() {
                this.map = new Map,
                this.set = (e,t)=>{
                    const i = this.get(e);
                    this.exists(e, t) || this.map.set(e, [...i, t])
                }
                ,
                this.get = e=>this.map.get(e) || [],
                this.exists = (e,t)=>this.get(e).includes(t),
                this.delete = (e,t)=>{
                    if (typeof t > "u")
                        return void this.map.delete(e);
                    if (!this.map.has(e))
                        return;
                    const i = this.get(e);
                    if (!this.exists(e, t))
                        return;
                    const r = i.filter((e=>e !== t));
                    r.length ? this.map.set(e, r) : this.map.delete(e)
                }
                ,
                this.clear = ()=>{
                    this.map.clear()
                }
            }
            get topics() {
                return Array.from(this.map.keys())
            }
        }
        var Er = Object.defineProperty
          , Ir = Object.defineProperties
          , _r = Object.getOwnPropertyDescriptors
          , Sr = Object.getOwnPropertySymbols
          , Pr = Object.prototype.hasOwnProperty
          , Or = Object.prototype.propertyIsEnumerable
          , xr = (e,t,i)=>t in e ? Er(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: i
        }) : e[t] = i
          , Ar = (e,t)=>{
            for (var i in t || (t = {}))
                Pr.call(t, i) && xr(e, i, t[i]);
            if (Sr)
                for (var i of Sr(t))
                    Or.call(t, i) && xr(e, i, t[i]);
            return e
        }
          , Rr = (e,t)=>Ir(e, _r(t));
        class Tr extends y {
            constructor(e, t) {
                super(e, t),
                this.relayer = e,
                this.logger = t,
                this.subscriptions = new Map,
                this.topicMap = new vr,
                this.events = new s.EventEmitter,
                this.name = "subscription",
                this.version = "0.3",
                this.pending = new Map,
                this.cached = [],
                this.initialized = !1,
                this.pendingSubscriptionWatchLabel = "pending_sub_watch_label",
                this.pollingInterval = 20,
                this.storagePrefix = Ai,
                this.subscribeTimeout = 1e4,
                this.restartInProgress = !1,
                this.batchSubscribeTopicsLimit = 500,
                this.init = async()=>{
                    this.initialized || (this.logger.trace("Initialized"),
                    this.registerEventListeners(),
                    this.clientId = await this.relayer.core.crypto.getClientId())
                }
                ,
                this.subscribe = async(e,t)=>{
                    await this.restartToComplete(),
                    this.isInitialized(),
                    this.logger.debug("Subscribing Topic"),
                    this.logger.trace({
                        type: "method",
                        method: "subscribe",
                        params: {
                            topic: e,
                            opts: t
                        }
                    });
                    try {
                        const i = _e(t)
                          , r = {
                            topic: e,
                            relay: i
                        };
                        this.pending.set(e, r);
                        const s = await this.rpcSubscribe(e, i);
                        return this.onSubscribe(s, r),
                        this.logger.debug("Successfully Subscribed Topic"),
                        this.logger.trace({
                            type: "method",
                            method: "subscribe",
                            params: {
                                topic: e,
                                opts: t
                            }
                        }),
                        s
                    } catch (l) {
                        throw this.logger.debug("Failed to Subscribe Topic"),
                        this.logger.error(l),
                        l
                    }
                }
                ,
                this.unsubscribe = async(e,t)=>{
                    await this.restartToComplete(),
                    this.isInitialized(),
                    typeof t?.id < "u" ? await this.unsubscribeById(e, t.id, t) : await this.unsubscribeByTopic(e, t)
                }
                ,
                this.isSubscribed = async e=>!!this.topics.includes(e) || await new Promise(((t,i)=>{
                    const r = new R.Watch;
                    r.start(this.pendingSubscriptionWatchLabel);
                    const s = setInterval((()=>{
                        !this.pending.has(e) && this.topics.includes(e) && (clearInterval(s),
                        r.stop(this.pendingSubscriptionWatchLabel),
                        t(!0)),
                        r.elapsed(this.pendingSubscriptionWatchLabel) >= Xi && (clearInterval(s),
                        r.stop(this.pendingSubscriptionWatchLabel),
                        i(new Error("Subscription resolution timeout")))
                    }
                    ), this.pollingInterval)
                }
                )).catch((()=>!1)),
                this.on = (e,t)=>{
                    this.events.on(e, t)
                }
                ,
                this.once = (e,t)=>{
                    this.events.once(e, t)
                }
                ,
                this.off = (e,t)=>{
                    this.events.off(e, t)
                }
                ,
                this.removeListener = (e,t)=>{
                    this.events.removeListener(e, t)
                }
                ,
                this.restart = async()=>{
                    this.restartInProgress = !0,
                    await this.restore(),
                    await this.reset(),
                    this.restartInProgress = !1
                }
                ,
                this.relayer = e,
                this.logger = (0,
                c.generateChildLogger)(t, this.name),
                this.clientId = ""
            }
            get context() {
                return (0,
                c.getLoggerContext)(this.logger)
            }
            get storageKey() {
                return this.storagePrefix + this.version + this.relayer.core.customStoragePrefix + "//" + this.name
            }
            get length() {
                return this.subscriptions.size
            }
            get ids() {
                return Array.from(this.subscriptions.keys())
            }
            get values() {
                return Array.from(this.subscriptions.values())
            }
            get topics() {
                return this.topicMap.topics
            }
            hasSubscription(e, t) {
                let i = !1;
                try {
                    i = this.getSubscription(e).topic === t
                } catch {}
                return i
            }
            onEnable() {
                this.cached = [],
                this.initialized = !0
            }
            onDisable() {
                this.cached = this.values,
                this.subscriptions.clear(),
                this.topicMap.clear()
            }
            async unsubscribeByTopic(e, t) {
                const i = this.topicMap.get(e);
                await Promise.all(i.map((async i=>await this.unsubscribeById(e, i, t))))
            }
            async unsubscribeById(e, t, i) {
                this.logger.debug("Unsubscribing Topic"),
                this.logger.trace({
                    type: "method",
                    method: "unsubscribe",
                    params: {
                        topic: e,
                        id: t,
                        opts: i
                    }
                });
                try {
                    const r = _e(i);
                    await this.rpcUnsubscribe(e, t, r);
                    const s = Ke("USER_DISCONNECTED", `${this.name}, ${e}`);
                    await this.onUnsubscribe(e, t, s),
                    this.logger.debug("Successfully Unsubscribed Topic"),
                    this.logger.trace({
                        type: "method",
                        method: "unsubscribe",
                        params: {
                            topic: e,
                            id: t,
                            opts: i
                        }
                    })
                } catch (r) {
                    throw this.logger.debug("Failed to Unsubscribe Topic"),
                    this.logger.error(r),
                    r
                }
            }
            async rpcSubscribe(e, t) {
                const i = {
                    method: Se(t.protocol).subscribe,
                    params: {
                        topic: e
                    }
                };
                this.logger.debug("Outgoing Relay Payload"),
                this.logger.trace({
                    type: "payload",
                    direction: "outgoing",
                    request: i
                });
                try {
                    await await be(this.relayer.request(i), this.subscribeTimeout)
                } catch {
                    this.logger.debug("Outgoing Relay Subscribe Payload stalled"),
                    this.relayer.events.emit(ki)
                }
                return G(e + this.clientId)
            }
            async rpcBatchSubscribe(e) {
                if (!e.length)
                    return;
                const t = {
                    method: Se(e[0].relay.protocol).batchSubscribe,
                    params: {
                        topics: e.map((e=>e.topic))
                    }
                };
                this.logger.debug("Outgoing Relay Payload"),
                this.logger.trace({
                    type: "payload",
                    direction: "outgoing",
                    request: t
                });
                try {
                    return await await be(this.relayer.request(t), this.subscribeTimeout)
                } catch {
                    this.logger.debug("Outgoing Relay Payload stalled"),
                    this.relayer.events.emit(ki)
                }
            }
            rpcUnsubscribe(e, t, i) {
                const r = {
                    method: Se(i.protocol).unsubscribe,
                    params: {
                        topic: e,
                        id: t
                    }
                };
                return this.logger.debug("Outgoing Relay Payload"),
                this.logger.trace({
                    type: "payload",
                    direction: "outgoing",
                    request: r
                }),
                this.relayer.request(r)
            }
            onSubscribe(e, t) {
                this.setSubscription(e, Rr(Ar({}, t), {
                    id: e
                })),
                this.pending.delete(t.topic)
            }
            onBatchSubscribe(e) {
                e.length && e.forEach((e=>{
                    this.setSubscription(e.id, Ar({}, e)),
                    this.pending.delete(e.topic)
                }
                ))
            }
            async onUnsubscribe(e, t, i) {
                this.events.removeAllListeners(t),
                this.hasSubscription(t, e) && this.deleteSubscription(t, i),
                await this.relayer.messages.del(e)
            }
            async setRelayerSubscriptions(e) {
                await this.relayer.core.storage.setItem(this.storageKey, e)
            }
            async getRelayerSubscriptions() {
                return await this.relayer.core.storage.getItem(this.storageKey)
            }
            setSubscription(e, t) {
                this.subscriptions.has(e) || (this.logger.debug("Setting subscription"),
                this.logger.trace({
                    type: "method",
                    method: "setSubscription",
                    id: e,
                    subscription: t
                }),
                this.addSubscription(e, t))
            }
            addSubscription(e, t) {
                this.subscriptions.set(e, Ar({}, t)),
                this.topicMap.set(t.topic, e),
                this.events.emit(Ji, t)
            }
            getSubscription(e) {
                this.logger.debug("Getting subscription"),
                this.logger.trace({
                    type: "method",
                    method: "getSubscription",
                    id: e
                });
                const t = this.subscriptions.get(e);
                if (!t) {
                    const {message: t} = Ue("NO_MATCHING_KEY", `${this.name}: ${e}`);
                    throw new Error(t)
                }
                return t
            }
            deleteSubscription(e, t) {
                this.logger.debug("Deleting subscription"),
                this.logger.trace({
                    type: "method",
                    method: "deleteSubscription",
                    id: e,
                    reason: t
                });
                const i = this.getSubscription(e);
                this.subscriptions.delete(e),
                this.topicMap.delete(i.topic, e),
                this.events.emit(Gi, Rr(Ar({}, i), {
                    reason: t
                }))
            }
            async persist() {
                await this.setRelayerSubscriptions(this.values),
                this.events.emit(Yi)
            }
            async reset() {
                if (this.cached.length) {
                    const e = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
                    for (let t = 0; t < e; t++) {
                        const e = this.cached.splice(0, this.batchSubscribeTopicsLimit);
                        await this.batchSubscribe(e)
                    }
                }
                this.events.emit(Zi)
            }
            async restore() {
                try {
                    const e = await this.getRelayerSubscriptions();
                    if (typeof e > "u" || !e.length)
                        return;
                    if (this.subscriptions.size) {
                        const {message: e} = Ue("RESTORE_WILL_OVERRIDE", this.name);
                        throw this.logger.error(e),
                        this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`),
                        new Error(e)
                    }
                    this.cached = e,
                    this.logger.debug(`Successfully Restored subscriptions for ${this.name}`),
                    this.logger.trace({
                        type: "method",
                        method: "restore",
                        subscriptions: this.values
                    })
                } catch (Cn) {
                    this.logger.debug(`Failed to Restore subscriptions for ${this.name}`),
                    this.logger.error(Cn)
                }
            }
            async batchSubscribe(e) {
                if (!e.length)
                    return;
                const t = await this.rpcBatchSubscribe(e);
                ze(t) && this.onBatchSubscribe(t.map(((t,i)=>Rr(Ar({}, e[i]), {
                    id: t
                }))))
            }
            async onConnect() {
                this.restartInProgress || (await this.restart(),
                this.onEnable())
            }
            onDisconnect() {
                this.onDisable()
            }
            async checkPending() {
                if (!this.initialized || this.relayer.transportExplicitlyClosed)
                    return;
                const e = [];
                this.pending.forEach((t=>{
                    e.push(t)
                }
                )),
                await this.batchSubscribe(e)
            }
            registerEventListeners() {
                this.relayer.core.heartbeat.on(a.HEARTBEAT_EVENTS.pulse, (async()=>{
                    await this.checkPending()
                }
                )),
                this.relayer.on(zi, (async()=>{
                    await this.onConnect()
                }
                )),
                this.relayer.on(Mi, (()=>{
                    this.onDisconnect()
                }
                )),
                this.events.on(Ji, (async e=>{
                    const t = Ji;
                    this.logger.info(`Emitting ${t}`),
                    this.logger.debug({
                        type: "event",
                        event: t,
                        data: e
                    }),
                    await this.persist()
                }
                )),
                this.events.on(Gi, (async e=>{
                    const t = Gi;
                    this.logger.info(`Emitting ${t}`),
                    this.logger.debug({
                        type: "event",
                        event: t,
                        data: e
                    }),
                    await this.persist()
                }
                ))
            }
            isInitialized() {
                if (!this.initialized) {
                    const {message: e} = Ue("NOT_INITIALIZED", this.name);
                    throw new Error(e)
                }
            }
            async restartToComplete() {
                this.restartInProgress && await new Promise((e=>{
                    const t = setInterval((()=>{
                        this.restartInProgress || (clearInterval(t),
                        e())
                    }
                    ), this.pollingInterval)
                }
                ))
            }
        }
        var Nr = Object.defineProperty
          , Cr = Object.getOwnPropertySymbols
          , Lr = Object.prototype.hasOwnProperty
          , Dr = Object.prototype.propertyIsEnumerable
          , jr = (e,t,i)=>t in e ? Nr(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: i
        }) : e[t] = i;
        class Ur extends p {
            constructor(e) {
                super(e),
                this.protocol = "wc",
                this.version = 2,
                this.events = new s.EventEmitter,
                this.name = "relayer",
                this.transportExplicitlyClosed = !1,
                this.initialized = !1,
                this.connectionAttemptInProgress = !1,
                this.connectionStatusPollingInterval = 20,
                this.staleConnectionErrors = ["socket hang up", "socket stalled"],
                this.hasExperiencedNetworkDisruption = !1,
                this.request = async e=>{
                    this.logger.debug("Publishing Request Payload");
                    try {
                        return await this.toEstablishConnection(),
                        await this.provider.request(e)
                    } catch (t) {
                        throw this.logger.debug("Failed to Publish Request"),
                        this.logger.error(t),
                        t
                    }
                }
                ,
                this.onPayloadHandler = e=>{
                    this.onProviderPayload(e)
                }
                ,
                this.onConnectHandler = ()=>{
                    this.events.emit(zi)
                }
                ,
                this.onDisconnectHandler = ()=>{
                    this.onProviderDisconnect()
                }
                ,
                this.onProviderErrorHandler = e=>{
                    this.logger.error(e),
                    this.events.emit($i, e),
                    this.logger.info("Fatal socket error received, closing transport"),
                    this.transportClose()
                }
                ,
                this.registerProviderListeners = ()=>{
                    this.provider.on(qi, this.onPayloadHandler),
                    this.provider.on(Vi, this.onConnectHandler),
                    this.provider.on(Fi, this.onDisconnectHandler),
                    this.provider.on(Hi, this.onProviderErrorHandler)
                }
                ,
                this.core = e.core,
                this.logger = typeof e.logger < "u" && "string" != typeof e.logger ? (0,
                c.generateChildLogger)(e.logger, this.name) : (0,
                c.pino)((0,
                c.getDefaultLoggerOptions)({
                    level: e.logger || "error"
                })),
                this.messages = new br(this.logger,e.core),
                this.subscriber = new Tr(this,this.logger),
                this.publisher = new wr(this,this.logger),
                this.relayUrl = e?.relayUrl || Di,
                this.projectId = e.projectId,
                this.bundleId = function() {
                    var e;
                    try {
                        return ue() && typeof i.g < "u" && typeof (null == i.g ? void 0 : i.g.Application) < "u" ? null == (e = i.g.Application) ? void 0 : e.applicationId : void 0
                    } catch {
                        return
                    }
                }(),
                this.provider = {}
            }
            async init() {
                this.logger.trace("Initialized"),
                this.registerEventListeners(),
                await this.createProvider(),
                await Promise.all([this.messages.init(), this.subscriber.init()]);
                try {
                    await this.transportOpen()
                } catch {
                    this.logger.warn(`Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${ji}...`),
                    await this.restartTransport(ji)
                }
                this.initialized = !0,
                setTimeout((async()=>{
                    0 === this.subscriber.topics.length && (this.logger.info("No topics subscribed to after init, closing transport"),
                    await this.transportClose(),
                    this.transportExplicitlyClosed = !1)
                }
                ), 1e4)
            }
            get context() {
                return (0,
                c.getLoggerContext)(this.logger)
            }
            get connected() {
                return this.provider.connection.connected
            }
            get connecting() {
                return this.provider.connection.connecting
            }
            async publish(e, t, i) {
                this.isInitialized(),
                await this.publisher.publish(e, t, i),
                await this.recordMessageEvent({
                    topic: e,
                    message: t,
                    publishedAt: Date.now()
                })
            }
            async subscribe(e, t) {
                var i;
                this.isInitialized();
                let r, s = (null == (i = this.subscriber.topicMap.get(e)) ? void 0 : i[0]) || "";
                if (s)
                    return s;
                const n = t=>{
                    t.topic === e && (this.subscriber.off(Ji, n),
                    r())
                }
                ;
                return await Promise.all([new Promise((e=>{
                    r = e,
                    this.subscriber.on(Ji, n)
                }
                )), new Promise((async i=>{
                    s = await this.subscriber.subscribe(e, t),
                    i()
                }
                ))]),
                s
            }
            async unsubscribe(e, t) {
                this.isInitialized(),
                await this.subscriber.unsubscribe(e, t)
            }
            on(e, t) {
                this.events.on(e, t)
            }
            once(e, t) {
                this.events.once(e, t)
            }
            off(e, t) {
                this.events.off(e, t)
            }
            removeListener(e, t) {
                this.events.removeListener(e, t)
            }
            async transportClose() {
                this.transportExplicitlyClosed = !0,
                this.hasExperiencedNetworkDisruption && this.connected ? await be(this.provider.disconnect(), 1e3, "provider.disconnect()").catch((()=>this.onProviderDisconnect())) : this.connected && await this.provider.disconnect()
            }
            async transportOpen(e) {
                if (this.transportExplicitlyClosed = !1,
                await this.confirmOnlineStateOrThrow(),
                !this.connectionAttemptInProgress) {
                    e && e !== this.relayUrl && (this.relayUrl = e,
                    await this.transportClose(),
                    await this.createProvider()),
                    this.connectionAttemptInProgress = !0;
                    try {
                        await Promise.all([new Promise((e=>{
                            if (!this.initialized)
                                return e();
                            this.subscriber.once(Zi, (()=>{
                                e()
                            }
                            ))
                        }
                        )), new Promise((async(e,t)=>{
                            try {
                                await be(this.provider.connect(), 1e4, `Socket stalled when trying to connect to ${this.relayUrl}`)
                            } catch (i) {
                                return void t(i)
                            }
                            e()
                        }
                        ))])
                    } catch (Dn) {
                        this.logger.error(Dn);
                        const t = Dn;
                        if (!this.isConnectionStalled(t.message))
                            throw Dn;
                        this.provider.events.emit(Fi)
                    } finally {
                        this.connectionAttemptInProgress = !1,
                        this.hasExperiencedNetworkDisruption = !1
                    }
                }
            }
            async restartTransport(e) {
                await this.confirmOnlineStateOrThrow(),
                !this.connectionAttemptInProgress && (this.relayUrl = e || this.relayUrl,
                await this.transportClose(),
                await this.createProvider(),
                await this.transportOpen())
            }
            async confirmOnlineStateOrThrow() {
                if (!(await Be()))
                    throw new Error("No internet connection detected. Please restart your network and try again.")
            }
            isConnectionStalled(e) {
                return this.staleConnectionErrors.some((t=>e.includes(t)))
            }
            async createProvider() {
                this.provider.connection && this.unregisterProviderListeners();
                const e = await this.core.crypto.signJWT(this.relayUrl);
                this.provider = new Ve.r(new He.Z(fe({
                    sdkVersion: "2.11.0",
                    protocol: this.protocol,
                    version: this.version,
                    relayUrl: this.relayUrl,
                    projectId: this.projectId,
                    auth: e,
                    useOnCloseEvent: !0,
                    bundleId: this.bundleId
                }))),
                this.registerProviderListeners()
            }
            async recordMessageEvent(e) {
                const {topic: t, message: i} = e;
                await this.messages.set(t, i)
            }
            async shouldIgnoreMessageEvent(e) {
                const {topic: t, message: i} = e;
                if (!i || 0 === i.length)
                    return this.logger.debug(`Ignoring invalid/empty message: ${i}`),
                    !0;
                if (!(await this.subscriber.isSubscribed(t)))
                    return this.logger.debug(`Ignoring message for non-subscribed topic ${t}`),
                    !0;
                const r = this.messages.has(t, i);
                return r && this.logger.debug(`Ignoring duplicate message: ${i}`),
                r
            }
            async onProviderPayload(e) {
                if (this.logger.debug("Incoming Relay Payload"),
                this.logger.trace({
                    type: "payload",
                    direction: "incoming",
                    payload: e
                }),
                (0,
                Fe.isJsonRpcRequest)(e)) {
                    if (!e.method.endsWith("_subscription"))
                        return;
                    const t = e.params
                      , {topic: i, message: r, publishedAt: s} = t.data
                      , n = {
                        topic: i,
                        message: r,
                        publishedAt: s
                    };
                    this.logger.debug("Emitting Relayer Payload"),
                    this.logger.trace(((e,t)=>{
                        for (var i in t || (t = {}))
                            Lr.call(t, i) && jr(e, i, t[i]);
                        if (Cr)
                            for (var i of Cr(t))
                                Dr.call(t, i) && jr(e, i, t[i]);
                        return e
                    }
                    )({
                        type: "event",
                        event: t.id
                    }, n)),
                    this.events.emit(t.id, n),
                    await this.acknowledgePayload(e),
                    await this.onMessageEvent(n)
                } else
                    (0,
                    Fe.isJsonRpcResponse)(e) && this.events.emit(Ki, e)
            }
            async onMessageEvent(e) {
                await this.shouldIgnoreMessageEvent(e) || (this.events.emit(Ui, e),
                await this.recordMessageEvent(e))
            }
            async acknowledgePayload(e) {
                const t = (0,
                Fe.formatJsonRpcResult)(e.id, !0);
                await this.provider.connection.send(t)
            }
            unregisterProviderListeners() {
                this.provider.off(qi, this.onPayloadHandler),
                this.provider.off(Vi, this.onConnectHandler),
                this.provider.off(Fi, this.onDisconnectHandler),
                this.provider.off(Hi, this.onProviderErrorHandler)
            }
            async registerEventListeners() {
                this.events.on(ki, (()=>{
                    this.restartTransport().catch((e=>this.logger.error(e)))
                }
                ));
                let e = await Be();
                qe((async t=>{
                    this.initialized && e !== t && (e = t,
                    t ? await this.restartTransport().catch((e=>this.logger.error(e))) : (this.hasExperiencedNetworkDisruption = !0,
                    await this.transportClose().catch((e=>this.logger.error(e)))))
                }
                ))
            }
            onProviderDisconnect() {
                this.events.emit(Mi),
                this.attemptToReconnect()
            }
            attemptToReconnect() {
                this.transportExplicitlyClosed || (this.logger.info("attemptToReconnect called. Connecting..."),
                setTimeout((async()=>{
                    await this.restartTransport().catch((e=>this.logger.error(e)))
                }
                ), (0,
                R.toMiliseconds)(Wi)))
            }
            isInitialized() {
                if (!this.initialized) {
                    const {message: e} = Ue("NOT_INITIALIZED", this.name);
                    throw new Error(e)
                }
            }
            async toEstablishConnection() {
                if (await this.confirmOnlineStateOrThrow(),
                !this.connected) {
                    if (this.connectionAttemptInProgress)
                        return await new Promise((e=>{
                            const t = setInterval((()=>{
                                this.connected && (clearInterval(t),
                                e())
                            }
                            ), this.connectionStatusPollingInterval)
                        }
                        ));
                    await this.restartTransport()
                }
            }
        }
        var Kr = Object.defineProperty
          , zr = Object.getOwnPropertySymbols
          , Mr = Object.prototype.hasOwnProperty
          , $r = Object.prototype.propertyIsEnumerable
          , kr = (e,t,i)=>t in e ? Kr(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: i
        }) : e[t] = i
          , Br = (e,t)=>{
            for (var i in t || (t = {}))
                Mr.call(t, i) && kr(e, i, t[i]);
            if (zr)
                for (var i of zr(t))
                    $r.call(t, i) && kr(e, i, t[i]);
            return e
        }
        ;
        class qr extends f {
            constructor(e, t, i, r=Ai, s=void 0) {
                super(e, t, i, r),
                this.core = e,
                this.logger = t,
                this.name = i,
                this.map = new Map,
                this.version = "0.3",
                this.cached = [],
                this.initialized = !1,
                this.storagePrefix = Ai,
                this.init = async()=>{
                    this.initialized || (this.logger.trace("Initialized"),
                    await this.restore(),
                    this.cached.forEach((e=>{
                        this.getKey && null !== e && !Me(e) ? this.map.set(this.getKey(e), e) : function(e) {
                            var t;
                            return null == (t = e?.proposer) ? void 0 : t.publicKey
                        }(e) ? this.map.set(e.id, e) : function(e) {
                            return e?.topic
                        }(e) && this.map.set(e.topic, e)
                    }
                    )),
                    this.cached = [],
                    this.initialized = !0)
                }
                ,
                this.set = async(e,t)=>{
                    this.isInitialized(),
                    this.map.has(e) ? await this.update(e, t) : (this.logger.debug("Setting value"),
                    this.logger.trace({
                        type: "method",
                        method: "set",
                        key: e,
                        value: t
                    }),
                    this.map.set(e, t),
                    await this.persist())
                }
                ,
                this.get = e=>(this.isInitialized(),
                this.logger.debug("Getting value"),
                this.logger.trace({
                    type: "method",
                    method: "get",
                    key: e
                }),
                this.getData(e)),
                this.getAll = e=>(this.isInitialized(),
                e ? this.values.filter((t=>Object.keys(e).every((i=>Je()(t[i], e[i]))))) : this.values),
                this.update = async(e,t)=>{
                    this.isInitialized(),
                    this.logger.debug("Updating value"),
                    this.logger.trace({
                        type: "method",
                        method: "update",
                        key: e,
                        update: t
                    });
                    const i = Br(Br({}, this.getData(e)), t);
                    this.map.set(e, i),
                    await this.persist()
                }
                ,
                this.delete = async(e,t)=>{
                    this.isInitialized(),
                    this.map.has(e) && (this.logger.debug("Deleting value"),
                    this.logger.trace({
                        type: "method",
                        method: "delete",
                        key: e,
                        reason: t
                    }),
                    this.map.delete(e),
                    await this.persist())
                }
                ,
                this.logger = (0,
                c.generateChildLogger)(t, this.name),
                this.storagePrefix = r,
                this.getKey = s
            }
            get context() {
                return (0,
                c.getLoggerContext)(this.logger)
            }
            get storageKey() {
                return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
            }
            get length() {
                return this.map.size
            }
            get keys() {
                return Array.from(this.map.keys())
            }
            get values() {
                return Array.from(this.map.values())
            }
            async setDataStore(e) {
                await this.core.storage.setItem(this.storageKey, e)
            }
            async getDataStore() {
                return await this.core.storage.getItem(this.storageKey)
            }
            getData(e) {
                const t = this.map.get(e);
                if (!t) {
                    const {message: t} = Ue("NO_MATCHING_KEY", `${this.name}: ${e}`);
                    throw this.logger.error(t),
                    new Error(t)
                }
                return t
            }
            async persist() {
                await this.setDataStore(this.values)
            }
            async restore() {
                try {
                    const e = await this.getDataStore();
                    if (typeof e > "u" || !e.length)
                        return;
                    if (this.map.size) {
                        const {message: e} = Ue("RESTORE_WILL_OVERRIDE", this.name);
                        throw this.logger.error(e),
                        new Error(e)
                    }
                    this.cached = e,
                    this.logger.debug(`Successfully Restored value for ${this.name}`),
                    this.logger.trace({
                        type: "method",
                        method: "restore",
                        value: this.values
                    })
                } catch (Cn) {
                    this.logger.debug(`Failed to Restore value for ${this.name}`),
                    this.logger.error(Cn)
                }
            }
            isInitialized() {
                if (!this.initialized) {
                    const {message: e} = Ue("NOT_INITIALIZED", this.name);
                    throw new Error(e)
                }
            }
        }
        class Vr {
            constructor(e, t) {
                this.core = e,
                this.logger = t,
                this.name = "pairing",
                this.version = "0.3",
                this.events = new (n()),
                this.initialized = !1,
                this.storagePrefix = Ai,
                this.ignoredPayloadTypes = [k],
                this.registeredMethods = [],
                this.init = async()=>{
                    this.initialized || (await this.pairings.init(),
                    await this.cleanup(),
                    this.registerRelayerEvents(),
                    this.registerExpirerEvents(),
                    this.initialized = !0,
                    this.logger.trace("Initialized"))
                }
                ,
                this.register = ({methods: e})=>{
                    this.isInitialized(),
                    this.registeredMethods = [...new Set([...this.registeredMethods, ...e])]
                }
                ,
                this.create = async()=>{
                    this.isInitialized();
                    const e = H()
                      , t = await this.core.crypto.setSymKey(e)
                      , i = ve(R.FIVE_MINUTES)
                      , r = {
                        protocol: "irn"
                    }
                      , s = {
                        topic: t,
                        expiry: i,
                        relay: r,
                        active: !1
                    }
                      , n = Le({
                        protocol: this.core.protocol,
                        version: this.core.version,
                        topic: t,
                        symKey: e,
                        relay: r
                    });
                    return await this.pairings.set(t, s),
                    await this.core.relayer.subscribe(t),
                    this.core.expirer.set(t, i),
                    {
                        topic: t,
                        uri: n
                    }
                }
                ,
                this.pair = async e=>{
                    this.isInitialized(),
                    this.isValidPair(e);
                    const {topic: t, symKey: i, relay: r} = Ne(e.uri);
                    let s;
                    if (this.pairings.keys.includes(t) && (s = this.pairings.get(t),
                    s.active))
                        throw new Error(`Pairing already exists: ${t}. Please try again with a new connection URI.`);
                    const n = ve(R.FIVE_MINUTES)
                      , o = {
                        topic: t,
                        relay: r,
                        expiry: n,
                        active: !1
                    };
                    return await this.pairings.set(t, o),
                    this.core.expirer.set(t, n),
                    e.activatePairing && await this.activate({
                        topic: t
                    }),
                    this.events.emit(er, o),
                    this.core.crypto.keychain.has(t) || (await this.core.crypto.setSymKey(i, t),
                    await this.core.relayer.subscribe(t, {
                        relay: r
                    })),
                    o
                }
                ,
                this.activate = async({topic: e})=>{
                    this.isInitialized();
                    const t = ve(R.THIRTY_DAYS);
                    await this.pairings.update(e, {
                        active: !0,
                        expiry: t
                    }),
                    this.core.expirer.set(e, t)
                }
                ,
                this.ping = async e=>{
                    this.isInitialized(),
                    await this.isValidPing(e);
                    const {topic: t} = e;
                    if (this.pairings.keys.includes(t)) {
                        const e = await this.sendRequest(t, "wc_pairingPing", {})
                          , {done: i, resolve: r, reject: s} = function(e=R.FIVE_MINUTES, t) {
                            const i = (0,
                            R.toMiliseconds)(e || R.FIVE_MINUTES);
                            let r, s, n;
                            return {
                                resolve: e=>{
                                    n && r && (clearTimeout(n),
                                    r(e))
                                }
                                ,
                                reject: e=>{
                                    n && s && (clearTimeout(n),
                                    s(e))
                                }
                                ,
                                done: ()=>new Promise(((e,o)=>{
                                    n = setTimeout((()=>{
                                        o(new Error(t))
                                    }
                                    ), i),
                                    r = e,
                                    s = o
                                }
                                ))
                            }
                        }();
                        this.events.once(Ie("pairing_ping", e), (({error: e})=>{
                            e ? s(e) : r()
                        }
                        )),
                        await i()
                    }
                }
                ,
                this.updateExpiry = async({topic: e, expiry: t})=>{
                    this.isInitialized(),
                    await this.pairings.update(e, {
                        expiry: t
                    })
                }
                ,
                this.updateMetadata = async({topic: e, metadata: t})=>{
                    this.isInitialized(),
                    await this.pairings.update(e, {
                        peerMetadata: t
                    })
                }
                ,
                this.getPairings = ()=>(this.isInitialized(),
                this.pairings.values),
                this.disconnect = async e=>{
                    this.isInitialized(),
                    await this.isValidDisconnect(e);
                    const {topic: t} = e;
                    this.pairings.keys.includes(t) && (await this.sendRequest(t, "wc_pairingDelete", Ke("USER_DISCONNECTED")),
                    await this.deletePairing(t))
                }
                ,
                this.sendRequest = async(e,t,i)=>{
                    const r = (0,
                    Fe.formatJsonRpcRequest)(t, i)
                      , s = await this.core.crypto.encode(e, r)
                      , n = Qi[t].req;
                    return this.core.history.set(e, r),
                    this.core.relayer.publish(e, s, n),
                    r.id
                }
                ,
                this.sendResult = async(e,t,i)=>{
                    const r = (0,
                    Fe.formatJsonRpcResult)(e, i)
                      , s = await this.core.crypto.encode(t, r)
                      , n = await this.core.history.get(t, e)
                      , o = Qi[n.request.method].res;
                    await this.core.relayer.publish(t, s, o),
                    await this.core.history.resolve(r)
                }
                ,
                this.sendError = async(e,t,i)=>{
                    const r = (0,
                    Fe.formatJsonRpcError)(e, i)
                      , s = await this.core.crypto.encode(t, r)
                      , n = await this.core.history.get(t, e)
                      , o = Qi[n.request.method] ? Qi[n.request.method].res : Qi.unregistered_method.res;
                    await this.core.relayer.publish(t, s, o),
                    await this.core.history.resolve(r)
                }
                ,
                this.deletePairing = async(e,t)=>{
                    await this.core.relayer.unsubscribe(e),
                    await Promise.all([this.pairings.delete(e, Ke("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(e), t ? Promise.resolve() : this.core.expirer.del(e)])
                }
                ,
                this.cleanup = async()=>{
                    const e = this.pairings.getAll().filter((e=>Ee(e.expiry)));
                    await Promise.all(e.map((e=>this.deletePairing(e.topic))))
                }
                ,
                this.onRelayEventRequest = e=>{
                    const {topic: t, payload: i} = e;
                    switch (i.method) {
                    case "wc_pairingPing":
                        return this.onPairingPingRequest(t, i);
                    case "wc_pairingDelete":
                        return this.onPairingDeleteRequest(t, i);
                    default:
                        return this.onUnknownRpcMethodRequest(t, i)
                    }
                }
                ,
                this.onRelayEventResponse = async e=>{
                    const {topic: t, payload: i} = e
                      , r = (await this.core.history.get(t, i.id)).request.method;
                    return "wc_pairingPing" === r ? this.onPairingPingResponse(t, i) : this.onUnknownRpcMethodResponse(r)
                }
                ,
                this.onPairingPingRequest = async(e,t)=>{
                    const {id: i} = t;
                    try {
                        this.isValidPing({
                            topic: e
                        }),
                        await this.sendResult(i, e, !0),
                        this.events.emit(rr, {
                            id: i,
                            topic: e
                        })
                    } catch (r) {
                        await this.sendError(i, e, r),
                        this.logger.error(r)
                    }
                }
                ,
                this.onPairingPingResponse = (e,t)=>{
                    const {id: i} = t;
                    setTimeout((()=>{
                        (0,
                        Fe.isJsonRpcResult)(t) ? this.events.emit(Ie("pairing_ping", i), {}) : (0,
                        Fe.isJsonRpcError)(t) && this.events.emit(Ie("pairing_ping", i), {
                            error: t.error
                        })
                    }
                    ), 500)
                }
                ,
                this.onPairingDeleteRequest = async(e,t)=>{
                    const {id: i} = t;
                    try {
                        this.isValidDisconnect({
                            topic: e
                        }),
                        await this.deletePairing(e),
                        this.events.emit(ir, {
                            id: i,
                            topic: e
                        })
                    } catch (r) {
                        await this.sendError(i, e, r),
                        this.logger.error(r)
                    }
                }
                ,
                this.onUnknownRpcMethodRequest = async(e,t)=>{
                    const {id: i, method: r} = t;
                    try {
                        if (this.registeredMethods.includes(r))
                            return;
                        const t = Ke("WC_METHOD_UNSUPPORTED", r);
                        await this.sendError(i, e, t),
                        this.logger.error(t)
                    } catch (d) {
                        await this.sendError(i, e, d),
                        this.logger.error(d)
                    }
                }
                ,
                this.onUnknownRpcMethodResponse = e=>{
                    this.registeredMethods.includes(e) || this.logger.error(Ke("WC_METHOD_UNSUPPORTED", e))
                }
                ,
                this.isValidPair = e=>{
                    var t;
                    if (!ke(e)) {
                        const {message: t} = Ue("MISSING_OR_INVALID", `pair() params: ${e}`);
                        throw new Error(t)
                    }
                    if (!function(e) {
                        if ($e(e, !1))
                            try {
                                return typeof new URL(e) < "u"
                            } catch {
                                return !1
                            }
                        return !1
                    }(e.uri)) {
                        const {message: t} = Ue("MISSING_OR_INVALID", `pair() uri: ${e.uri}`);
                        throw new Error(t)
                    }
                    const i = Ne(e.uri);
                    if (null == (t = i?.relay) || !t.protocol) {
                        const {message: e} = Ue("MISSING_OR_INVALID", "pair() uri#relay-protocol");
                        throw new Error(e)
                    }
                    if (null == i || !i.symKey) {
                        const {message: e} = Ue("MISSING_OR_INVALID", "pair() uri#symKey");
                        throw new Error(e)
                    }
                }
                ,
                this.isValidPing = async e=>{
                    if (!ke(e)) {
                        const {message: t} = Ue("MISSING_OR_INVALID", `ping() params: ${e}`);
                        throw new Error(t)
                    }
                    const {topic: t} = e;
                    await this.isValidPairingTopic(t)
                }
                ,
                this.isValidDisconnect = async e=>{
                    if (!ke(e)) {
                        const {message: t} = Ue("MISSING_OR_INVALID", `disconnect() params: ${e}`);
                        throw new Error(t)
                    }
                    const {topic: t} = e;
                    await this.isValidPairingTopic(t)
                }
                ,
                this.isValidPairingTopic = async e=>{
                    if (!$e(e, !1)) {
                        const {message: t} = Ue("MISSING_OR_INVALID", `pairing topic should be a string: ${e}`);
                        throw new Error(t)
                    }
                    if (!this.pairings.keys.includes(e)) {
                        const {message: t} = Ue("NO_MATCHING_KEY", `pairing topic doesn't exist: ${e}`);
                        throw new Error(t)
                    }
                    if (Ee(this.pairings.get(e).expiry)) {
                        await this.deletePairing(e);
                        const {message: t} = Ue("EXPIRED", `pairing topic: ${e}`);
                        throw new Error(t)
                    }
                }
                ,
                this.core = e,
                this.logger = (0,
                c.generateChildLogger)(t, this.name),
                this.pairings = new qr(this.core,this.logger,this.name,this.storagePrefix)
            }
            get context() {
                return (0,
                c.getLoggerContext)(this.logger)
            }
            isInitialized() {
                if (!this.initialized) {
                    const {message: e} = Ue("NOT_INITIALIZED", this.name);
                    throw new Error(e)
                }
            }
            registerRelayerEvents() {
                this.core.relayer.on(Ui, (async e=>{
                    const {topic: t, message: i} = e;
                    if (!this.pairings.keys.includes(t) || this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(i)))
                        return;
                    const r = await this.core.crypto.decode(t, i);
                    try {
                        (0,
                        Fe.isJsonRpcRequest)(r) ? (this.core.history.set(t, r),
                        this.onRelayEventRequest({
                            topic: t,
                            payload: r
                        })) : (0,
                        Fe.isJsonRpcResponse)(r) && (await this.core.history.resolve(r),
                        await this.onRelayEventResponse({
                            topic: t,
                            payload: r
                        }),
                        this.core.history.delete(t, r.id))
                    } catch (l) {
                        this.logger.error(l)
                    }
                }
                ))
            }
            registerExpirerEvents() {
                this.core.expirer.on(lr, (async e=>{
                    const {topic: t} = function(e) {
                        const [t,i] = e.split(":")
                          , r = {
                            id: void 0,
                            topic: void 0
                        };
                        if ("topic" === t && "string" == typeof i)
                            r.topic = i;
                        else {
                            if ("id" !== t || !Number.isInteger(Number(i)))
                                throw new Error(`Invalid target, expected id:number or topic:string, got ${t}:${i}`);
                            r.id = Number(i)
                        }
                        return r
                    }(e.target);
                    t && this.pairings.keys.includes(t) && (await this.deletePairing(t, !0),
                    this.events.emit(tr, {
                        topic: t
                    }))
                }
                ))
            }
        }
        class Fr extends u {
            constructor(e, t) {
                super(e, t),
                this.core = e,
                this.logger = t,
                this.records = new Map,
                this.events = new s.EventEmitter,
                this.name = "history",
                this.version = "0.3",
                this.cached = [],
                this.initialized = !1,
                this.storagePrefix = Ai,
                this.init = async()=>{
                    this.initialized || (this.logger.trace("Initialized"),
                    await this.restore(),
                    this.cached.forEach((e=>this.records.set(e.id, e))),
                    this.cached = [],
                    this.registerEventListeners(),
                    this.initialized = !0)
                }
                ,
                this.set = (e,t,i)=>{
                    if (this.isInitialized(),
                    this.logger.debug("Setting JSON-RPC request history record"),
                    this.logger.trace({
                        type: "method",
                        method: "set",
                        topic: e,
                        request: t,
                        chainId: i
                    }),
                    this.records.has(t.id))
                        return;
                    const r = {
                        id: t.id,
                        topic: e,
                        request: {
                            method: t.method,
                            params: t.params || null
                        },
                        chainId: i,
                        expiry: ve(R.THIRTY_DAYS)
                    };
                    this.records.set(r.id, r),
                    this.events.emit(sr, r)
                }
                ,
                this.resolve = async e=>{
                    if (this.isInitialized(),
                    this.logger.debug("Updating JSON-RPC response history record"),
                    this.logger.trace({
                        type: "method",
                        method: "update",
                        response: e
                    }),
                    !this.records.has(e.id))
                        return;
                    const t = await this.getRecord(e.id);
                    typeof t.response > "u" && (t.response = (0,
                    Fe.isJsonRpcError)(e) ? {
                        error: e.error
                    } : {
                        result: e.result
                    },
                    this.records.set(t.id, t),
                    this.events.emit(nr, t))
                }
                ,
                this.get = async(e,t)=>(this.isInitialized(),
                this.logger.debug("Getting record"),
                this.logger.trace({
                    type: "method",
                    method: "get",
                    topic: e,
                    id: t
                }),
                await this.getRecord(t)),
                this.delete = (e,t)=>{
                    this.isInitialized(),
                    this.logger.debug("Deleting record"),
                    this.logger.trace({
                        type: "method",
                        method: "delete",
                        id: t
                    }),
                    this.values.forEach((i=>{
                        if (i.topic === e) {
                            if (typeof t < "u" && i.id !== t)
                                return;
                            this.records.delete(i.id),
                            this.events.emit(or, i)
                        }
                    }
                    ))
                }
                ,
                this.exists = async(e,t)=>(this.isInitialized(),
                !!this.records.has(t) && (await this.getRecord(t)).topic === e),
                this.on = (e,t)=>{
                    this.events.on(e, t)
                }
                ,
                this.once = (e,t)=>{
                    this.events.once(e, t)
                }
                ,
                this.off = (e,t)=>{
                    this.events.off(e, t)
                }
                ,
                this.removeListener = (e,t)=>{
                    this.events.removeListener(e, t)
                }
                ,
                this.logger = (0,
                c.generateChildLogger)(t, this.name)
            }
            get context() {
                return (0,
                c.getLoggerContext)(this.logger)
            }
            get storageKey() {
                return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
            }
            get size() {
                return this.records.size
            }
            get keys() {
                return Array.from(this.records.keys())
            }
            get values() {
                return Array.from(this.records.values())
            }
            get pending() {
                const e = [];
                return this.values.forEach((t=>{
                    if (typeof t.response < "u")
                        return;
                    const i = {
                        topic: t.topic,
                        request: (0,
                        Fe.formatJsonRpcRequest)(t.request.method, t.request.params, t.id),
                        chainId: t.chainId
                    };
                    return e.push(i)
                }
                )),
                e
            }
            async setJsonRpcRecords(e) {
                await this.core.storage.setItem(this.storageKey, e)
            }
            async getJsonRpcRecords() {
                return await this.core.storage.getItem(this.storageKey)
            }
            getRecord(e) {
                this.isInitialized();
                const t = this.records.get(e);
                if (!t) {
                    const {message: t} = Ue("NO_MATCHING_KEY", `${this.name}: ${e}`);
                    throw new Error(t)
                }
                return t
            }
            async persist() {
                await this.setJsonRpcRecords(this.values),
                this.events.emit(ar)
            }
            async restore() {
                try {
                    const e = await this.getJsonRpcRecords();
                    if (typeof e > "u" || !e.length)
                        return;
                    if (this.records.size) {
                        const {message: e} = Ue("RESTORE_WILL_OVERRIDE", this.name);
                        throw this.logger.error(e),
                        new Error(e)
                    }
                    this.cached = e,
                    this.logger.debug(`Successfully Restored records for ${this.name}`),
                    this.logger.trace({
                        type: "method",
                        method: "restore",
                        records: this.values
                    })
                } catch (Cn) {
                    this.logger.debug(`Failed to Restore records for ${this.name}`),
                    this.logger.error(Cn)
                }
            }
            registerEventListeners() {
                this.events.on(sr, (e=>{
                    const t = sr;
                    this.logger.info(`Emitting ${t}`),
                    this.logger.debug({
                        type: "event",
                        event: t,
                        record: e
                    }),
                    this.persist()
                }
                )),
                this.events.on(nr, (e=>{
                    const t = nr;
                    this.logger.info(`Emitting ${t}`),
                    this.logger.debug({
                        type: "event",
                        event: t,
                        record: e
                    }),
                    this.persist()
                }
                )),
                this.events.on(or, (e=>{
                    const t = or;
                    this.logger.info(`Emitting ${t}`),
                    this.logger.debug({
                        type: "event",
                        event: t,
                        record: e
                    }),
                    this.persist()
                }
                )),
                this.core.heartbeat.on(a.HEARTBEAT_EVENTS.pulse, (()=>{
                    this.cleanup()
                }
                ))
            }
            cleanup() {
                try {
                    this.records.forEach((e=>{
                        (0,
                        R.toMiliseconds)(e.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${e.id}`),
                        this.delete(e.topic, e.id))
                    }
                    ))
                } catch (Cn) {
                    this.logger.warn(Cn)
                }
            }
            isInitialized() {
                if (!this.initialized) {
                    const {message: e} = Ue("NOT_INITIALIZED", this.name);
                    throw new Error(e)
                }
            }
        }
        class Hr extends m {
            constructor(e, t) {
                super(e, t),
                this.core = e,
                this.logger = t,
                this.expirations = new Map,
                this.events = new s.EventEmitter,
                this.name = "expirer",
                this.version = "0.3",
                this.cached = [],
                this.initialized = !1,
                this.storagePrefix = Ai,
                this.init = async()=>{
                    this.initialized || (this.logger.trace("Initialized"),
                    await this.restore(),
                    this.cached.forEach((e=>this.expirations.set(e.target, e))),
                    this.cached = [],
                    this.registerEventListeners(),
                    this.initialized = !0)
                }
                ,
                this.has = e=>{
                    try {
                        const t = this.formatTarget(e);
                        return typeof this.getExpiration(t) < "u"
                    } catch {
                        return !1
                    }
                }
                ,
                this.set = (e,t)=>{
                    this.isInitialized();
                    const i = this.formatTarget(e)
                      , r = {
                        target: i,
                        expiry: t
                    };
                    this.expirations.set(i, r),
                    this.checkExpiry(i, r),
                    this.events.emit(cr, {
                        target: i,
                        expiration: r
                    })
                }
                ,
                this.get = e=>{
                    this.isInitialized();
                    const t = this.formatTarget(e);
                    return this.getExpiration(t)
                }
                ,
                this.del = e=>{
                    if (this.isInitialized(),
                    this.has(e)) {
                        const t = this.formatTarget(e)
                          , i = this.getExpiration(t);
                        this.expirations.delete(t),
                        this.events.emit(hr, {
                            target: t,
                            expiration: i
                        })
                    }
                }
                ,
                this.on = (e,t)=>{
                    this.events.on(e, t)
                }
                ,
                this.once = (e,t)=>{
                    this.events.once(e, t)
                }
                ,
                this.off = (e,t)=>{
                    this.events.off(e, t)
                }
                ,
                this.removeListener = (e,t)=>{
                    this.events.removeListener(e, t)
                }
                ,
                this.logger = (0,
                c.generateChildLogger)(t, this.name)
            }
            get context() {
                return (0,
                c.getLoggerContext)(this.logger)
            }
            get storageKey() {
                return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
            }
            get length() {
                return this.expirations.size
            }
            get keys() {
                return Array.from(this.expirations.keys())
            }
            get values() {
                return Array.from(this.expirations.values())
            }
            formatTarget(e) {
                if ("string" == typeof e)
                    return function(e) {
                        return we("topic", e)
                    }(e);
                if ("number" == typeof e)
                    return function(e) {
                        return we("id", e)
                    }(e);
                const {message: t} = Ue("UNKNOWN_TYPE", "Target type: " + typeof e);
                throw new Error(t)
            }
            async setExpirations(e) {
                await this.core.storage.setItem(this.storageKey, e)
            }
            async getExpirations() {
                return await this.core.storage.getItem(this.storageKey)
            }
            async persist() {
                await this.setExpirations(this.values),
                this.events.emit(ur)
            }
            async restore() {
                try {
                    const e = await this.getExpirations();
                    if (typeof e > "u" || !e.length)
                        return;
                    if (this.expirations.size) {
                        const {message: e} = Ue("RESTORE_WILL_OVERRIDE", this.name);
                        throw this.logger.error(e),
                        new Error(e)
                    }
                    this.cached = e,
                    this.logger.debug(`Successfully Restored expirations for ${this.name}`),
                    this.logger.trace({
                        type: "method",
                        method: "restore",
                        expirations: this.values
                    })
                } catch (Cn) {
                    this.logger.debug(`Failed to Restore expirations for ${this.name}`),
                    this.logger.error(Cn)
                }
            }
            getExpiration(e) {
                const t = this.expirations.get(e);
                if (!t) {
                    const {message: t} = Ue("NO_MATCHING_KEY", `${this.name}: ${e}`);
                    throw this.logger.error(t),
                    new Error(t)
                }
                return t
            }
            checkExpiry(e, t) {
                const {expiry: i} = t;
                (0,
                R.toMiliseconds)(i) - Date.now() <= 0 && this.expire(e, t)
            }
            expire(e, t) {
                this.expirations.delete(e),
                this.events.emit(lr, {
                    target: e,
                    expiration: t
                })
            }
            checkExpirations() {
                this.core.relayer.connected && this.expirations.forEach(((e,t)=>this.checkExpiry(t, e)))
            }
            registerEventListeners() {
                this.core.heartbeat.on(a.HEARTBEAT_EVENTS.pulse, (()=>this.checkExpirations())),
                this.events.on(cr, (e=>{
                    const t = cr;
                    this.logger.info(`Emitting ${t}`),
                    this.logger.debug({
                        type: "event",
                        event: t,
                        data: e
                    }),
                    this.persist()
                }
                )),
                this.events.on(lr, (e=>{
                    const t = lr;
                    this.logger.info(`Emitting ${t}`),
                    this.logger.debug({
                        type: "event",
                        event: t,
                        data: e
                    }),
                    this.persist()
                }
                )),
                this.events.on(hr, (e=>{
                    const t = hr;
                    this.logger.info(`Emitting ${t}`),
                    this.logger.debug({
                        type: "event",
                        event: t,
                        data: e
                    }),
                    this.persist()
                }
                ))
            }
            isInitialized() {
                if (!this.initialized) {
                    const {message: e} = Ue("NOT_INITIALIZED", this.name);
                    throw new Error(e)
                }
            }
        }
        class Wr extends b {
            constructor(e, t) {
                super(e, t),
                this.projectId = e,
                this.logger = t,
                this.name = dr,
                this.initialized = !1,
                this.queue = [],
                this.verifyDisabled = !1,
                this.init = async e=>{
                    if (this.verifyDisabled || ue() || !de())
                        return;
                    const t = this.getVerifyUrl(e?.verifyUrl);
                    this.verifyUrl !== t && this.removeIframe(),
                    this.verifyUrl = t;
                    try {
                        await this.createIframe()
                    } catch (l) {
                        this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`),
                        this.logger.info(l)
                    }
                    if (!this.initialized) {
                        this.removeIframe(),
                        this.verifyUrl = pr;
                        try {
                            await this.createIframe()
                        } catch (l) {
                            this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`),
                            this.logger.info(l),
                            this.verifyDisabled = !0
                        }
                    }
                }
                ,
                this.register = async e=>{
                    this.initialized ? this.sendPost(e.attestationId) : (this.addToQueue(e.attestationId),
                    await this.init())
                }
                ,
                this.resolve = async e=>{
                    if (this.isDevEnv)
                        return "";
                    const t = this.getVerifyUrl(e?.verifyUrl);
                    let i;
                    try {
                        i = await this.fetchAttestation(e.attestationId, t)
                    } catch (r) {
                        this.logger.info(`failed to resolve attestation: ${e.attestationId} from url: ${t}`),
                        this.logger.info(r),
                        i = await this.fetchAttestation(e.attestationId, pr)
                    }
                    return i
                }
                ,
                this.fetchAttestation = async(e,t)=>{
                    this.logger.info(`resolving attestation: ${e} from url: ${t}`);
                    const i = this.startAbortTimer(2 * R.ONE_SECOND)
                      , r = await fetch(`${t}/attestation/${e}`, {
                        signal: this.abortController.signal
                    });
                    return clearTimeout(i),
                    200 === r.status ? await r.json() : void 0
                }
                ,
                this.addToQueue = e=>{
                    this.queue.push(e)
                }
                ,
                this.processQueue = ()=>{
                    0 !== this.queue.length && (this.queue.forEach((e=>this.sendPost(e))),
                    this.queue = [])
                }
                ,
                this.sendPost = e=>{
                    var t;
                    try {
                        if (!this.iframe)
                            return;
                        null == (t = this.iframe.contentWindow) || t.postMessage(e, "*"),
                        this.logger.info(`postMessage sent: ${e} ${this.verifyUrl}`)
                    } catch {}
                }
                ,
                this.createIframe = async()=>{
                    let e;
                    const t = i=>{
                        "verify_ready" === i.data && (this.initialized = !0,
                        this.processQueue(),
                        window.removeEventListener("message", t),
                        e())
                    }
                    ;
                    await Promise.race([new Promise((i=>{
                        if (document.getElementById(dr))
                            return i();
                        window.addEventListener("message", t);
                        const r = document.createElement("iframe");
                        r.id = dr,
                        r.src = `${this.verifyUrl}/${this.projectId}`,
                        r.style.display = "none",
                        document.body.append(r),
                        this.iframe = r,
                        e = i
                    }
                    )), new Promise(((e,i)=>setTimeout((()=>{
                        window.removeEventListener("message", t),
                        i("verify iframe load timeout")
                    }
                    ), (0,
                    R.toMiliseconds)(R.FIVE_SECONDS))))])
                }
                ,
                this.removeIframe = ()=>{
                    this.iframe && (this.iframe.remove(),
                    this.iframe = void 0,
                    this.initialized = !1)
                }
                ,
                this.getVerifyUrl = e=>{
                    let t = e || gr;
                    return fr.includes(t) || (this.logger.info(`verify url: ${t}, not included in trusted list, assigning default: ${gr}`),
                    t = gr),
                    t
                }
                ,
                this.logger = (0,
                c.generateChildLogger)(t, this.name),
                this.verifyUrl = gr,
                this.abortController = new AbortController,
                this.isDevEnv = le() && Ze.env.IS_VITEST
            }
            get context() {
                return (0,
                c.getLoggerContext)(this.logger)
            }
            startAbortTimer(e) {
                return this.abortController = new AbortController,
                setTimeout((()=>this.abortController.abort()), (0,
                R.toMiliseconds)(e))
            }
        }
        class Jr extends w {
            constructor(e, t) {
                super(e, t),
                this.projectId = e,
                this.logger = t,
                this.context = "echo",
                this.registerDeviceToken = async e=>{
                    const {clientId: t, token: i, notificationType: r, enableEncrypted: s=!1} = e
                      , n = `https://echo.walletconnect.com/${this.projectId}/clients`;
                    await Ye()(n, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            client_id: t,
                            type: r,
                            token: i,
                            always_raw: s
                        })
                    })
                }
                ,
                this.logger = (0,
                c.generateChildLogger)(t, this.context)
            }
        }
        var Gr = Object.defineProperty
          , Yr = Object.getOwnPropertySymbols
          , Zr = Object.prototype.hasOwnProperty
          , Xr = Object.prototype.propertyIsEnumerable
          , Qr = (e,t,i)=>t in e ? Gr(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: i
        }) : e[t] = i
          , es = (e,t)=>{
            for (var i in t || (t = {}))
                Zr.call(t, i) && Qr(e, i, t[i]);
            if (Yr)
                for (var i of Yr(t))
                    Xr.call(t, i) && Qr(e, i, t[i]);
            return e
        }
        ;
        class ts extends l {
            constructor(e) {
                super(e),
                this.protocol = "wc",
                this.version = 2,
                this.name = xi,
                this.events = new s.EventEmitter,
                this.initialized = !1,
                this.on = (e,t)=>this.events.on(e, t),
                this.once = (e,t)=>this.events.once(e, t),
                this.off = (e,t)=>this.events.off(e, t),
                this.removeListener = (e,t)=>this.events.removeListener(e, t),
                this.projectId = e?.projectId,
                this.relayUrl = e?.relayUrl || Di,
                this.customStoragePrefix = null != e && e.customStoragePrefix ? `:${e.customStoragePrefix}` : "";
                const t = typeof e?.logger < "u" && "string" != typeof e?.logger ? e.logger : (0,
                c.pino)((0,
                c.getDefaultLoggerOptions)({
                    level: e?.logger || Ri
                }));
                this.logger = (0,
                c.generateChildLogger)(t, this.name),
                this.heartbeat = new a.HeartBeat,
                this.crypto = new mr(this,this.logger,e?.keychain),
                this.history = new Fr(this,this.logger),
                this.expirer = new Hr(this,this.logger),
                this.storage = null != e && e.storage ? e.storage : new o.Z(es(es({}, Ti), e?.storageOptions)),
                this.relayer = new Ur({
                    core: this,
                    logger: this.logger,
                    relayUrl: this.relayUrl,
                    projectId: this.projectId
                }),
                this.pairing = new Vr(this,this.logger),
                this.verify = new Wr(this.projectId || "",this.logger),
                this.echoClient = new Jr(this.projectId || "",this.logger)
            }
            static async init(e) {
                const t = new ts(e);
                await t.initialize();
                const i = await t.crypto.getClientId();
                return await t.storage.setItem("WALLETCONNECT_CLIENT_ID", i),
                t
            }
            get context() {
                return (0,
                c.getLoggerContext)(this.logger)
            }
            async start() {
                this.initialized || await this.initialize()
            }
            async initialize() {
                this.logger.trace("Initialized");
                try {
                    await this.crypto.init(),
                    await this.history.init(),
                    await this.expirer.init(),
                    await this.relayer.init(),
                    await this.heartbeat.init(),
                    await this.pairing.init(),
                    this.initialized = !0,
                    this.logger.info("Core Initialization Success")
                } catch (Cn) {
                    throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, Cn),
                    this.logger.error(Cn.message),
                    Cn
                }
            }
        }
        const is = ts;
        var rs = i(60661)
          , ss = i.t(rs, 2);
        const ns = BigInt(0)
          , os = BigInt(1)
          , as = BigInt(2)
          , cs = BigInt(8)
          , hs = BigInt("7237005577332262213973186563042994240857116359379907606001950938285454250989")
          , ls = Object.freeze({
            a: BigInt(-1),
            d: BigInt("37095705934669439343138083508754565189542113879843219016388785533085940283555"),
            P: BigInt("57896044618658097711785492504343953926634992332820282019728792003956564819949"),
            l: hs,
            n: hs,
            h: BigInt(8),
            Gx: BigInt("15112221349535400772501151409588531511454012693041857206046113283949847762202"),
            Gy: BigInt("46316835694926478169428394003475163141307993866256225615783033603165251855960")
        })
          , us = BigInt("0x10000000000000000000000000000000000000000000000000000000000000000")
          , ds = BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752")
          , gs = (BigInt("6853475219497561581579357271197624642482790079785650197046958215289687604742"),
        BigInt("25063068953384623474111414158702152701244531502492656460079210482610430750235"))
          , ps = BigInt("54469307008909316920995813868745141605393597292927456921205312896311721017578")
          , fs = BigInt("1159843021668779879193775521855586647937357759715417654439879720876111806838")
          , ys = BigInt("40440834346308536858101042469323190826248399146238708352240133220865137265952");
        class ms {
            constructor(e, t, i, r) {
                this.x = e,
                this.y = t,
                this.z = i,
                this.t = r
            }
            static fromAffine(e) {
                if (!(e instanceof Ss))
                    throw new TypeError("ExtendedPoint#fromAffine: expected Point");
                return e.equals(Ss.ZERO) ? ms.ZERO : new ms(e.x,e.y,os,Us(e.x * e.y))
            }
            static toAffineBatch(e) {
                const t = function(e, t=ls.P) {
                    const i = new Array(e.length)
                      , r = e.reduce(((e,r,s)=>r === ns ? e : (i[s] = e,
                    Us(e * r, t))), os)
                      , s = Ks(r, t);
                    return e.reduceRight(((e,r,s)=>r === ns ? e : (i[s] = Us(e * i[s], t),
                    Us(e * r, t))), s),
                    i
                }(e.map((e=>e.z)));
                return e.map(((e,i)=>e.toAffine(t[i])))
            }
            static normalizeZ(e) {
                return this.toAffineBatch(e).map(this.fromAffine)
            }
            equals(e) {
                ws(e);
                const {x: t, y: i, z: r} = this
                  , {x: s, y: n, z: o} = e
                  , a = Us(t * o)
                  , c = Us(s * r)
                  , h = Us(i * o)
                  , l = Us(n * r);
                return a === c && h === l
            }
            negate() {
                return new ms(Us(-this.x),this.y,this.z,Us(-this.t))
            }
            double() {
                const {x: e, y: t, z: i} = this
                  , {a: r} = ls
                  , s = Us(e * e)
                  , n = Us(t * t)
                  , o = Us(as * Us(i * i))
                  , a = Us(r * s)
                  , c = e + t
                  , h = Us(Us(c * c) - s - n)
                  , l = a + n
                  , u = l - o
                  , d = a - n
                  , g = Us(h * u)
                  , p = Us(l * d)
                  , f = Us(h * d)
                  , y = Us(u * l);
                return new ms(g,p,y,f)
            }
            add(e) {
                ws(e);
                const {x: t, y: i, z: r, t: s} = this
                  , {x: n, y: o, z: a, t: c} = e
                  , h = Us((i - t) * (o + n))
                  , l = Us((i + t) * (o - n))
                  , u = Us(l - h);
                if (u === ns)
                    return this.double();
                const d = Us(r * as * c)
                  , g = Us(s * as * a)
                  , p = g + d
                  , f = l + h
                  , y = g - d
                  , m = Us(p * u)
                  , b = Us(f * y)
                  , w = Us(p * y)
                  , v = Us(u * f);
                return new ms(m,b,v,w)
            }
            subtract(e) {
                return this.add(e.negate())
            }
            precomputeWindow(e) {
                const t = 1 + 256 / e
                  , i = [];
                let r = this
                  , s = r;
                for (let n = 0; n < t; n++) {
                    s = r,
                    i.push(s);
                    for (let t = 1; t < 2 ** (e - 1); t++)
                        s = s.add(r),
                        i.push(s);
                    r = s.double()
                }
                return i
            }
            wNAF(e, t) {
                !t && this.equals(ms.BASE) && (t = Ss.BASE);
                const i = t && t._WINDOW_SIZE || 1;
                if (256 % i)
                    throw new Error("Point#wNAF: Invalid precomputation window, must be power of 2");
                let r = t && _s.get(t);
                r || (r = this.precomputeWindow(i),
                t && 1 !== i && (r = ms.normalizeZ(r),
                _s.set(t, r)));
                let s = ms.ZERO
                  , n = ms.BASE;
                const o = 1 + 256 / i
                  , a = 2 ** (i - 1)
                  , c = BigInt(2 ** i - 1)
                  , h = 2 ** i
                  , l = BigInt(i);
                for (let u = 0; u < o; u++) {
                    const t = u * a;
                    let i = Number(e & c);
                    e >>= l,
                    i > a && (i -= h,
                    e += os);
                    const o = t
                      , d = t + Math.abs(i) - 1
                      , g = u % 2 !== 0
                      , p = i < 0;
                    0 === i ? n = n.add(bs(g, r[o])) : s = s.add(bs(p, r[d]))
                }
                return ms.normalizeZ([s, n])[0]
            }
            multiply(e, t) {
                return this.wNAF(Vs(e, ls.l), t)
            }
            multiplyUnsafe(e) {
                let t = Vs(e, ls.l, !1);
                const i = ms.BASE
                  , r = ms.ZERO;
                if (t === ns)
                    return r;
                if (this.equals(r) || t === os)
                    return this;
                if (this.equals(i))
                    return this.wNAF(t);
                let s = r
                  , n = this;
                for (; t > ns; )
                    t & os && (s = s.add(n)),
                    n = n.double(),
                    t >>= os;
                return s
            }
            isSmallOrder() {
                return this.multiplyUnsafe(ls.h).equals(ms.ZERO)
            }
            isTorsionFree() {
                let e = this.multiplyUnsafe(ls.l / as).double();
                return ls.l % as && (e = e.add(this)),
                e.equals(ms.ZERO)
            }
            toAffine(e) {
                const {x: t, y: i, z: r} = this
                  , s = this.equals(ms.ZERO);
                null == e && (e = s ? cs : Ks(r));
                const n = Us(t * e)
                  , o = Us(i * e)
                  , a = Us(r * e);
                if (s)
                    return Ss.ZERO;
                if (a !== os)
                    throw new Error("invZ was invalid");
                return new Ss(n,o)
            }
            fromRistrettoBytes() {
                Es()
            }
            toRistrettoBytes() {
                Es()
            }
            fromRistrettoHash() {
                Es()
            }
        }
        function bs(e, t) {
            const i = t.negate();
            return e ? i : t
        }
        function ws(e) {
            if (!(e instanceof ms))
                throw new TypeError("ExtendedPoint expected")
        }
        function vs(e) {
            if (!(e instanceof Is))
                throw new TypeError("RistrettoPoint expected")
        }
        function Es() {
            throw new Error("Legacy method: switch to RistrettoPoint")
        }
        ms.BASE = new ms(ls.Gx,ls.Gy,os,Us(ls.Gx * ls.Gy)),
        ms.ZERO = new ms(ns,os,os,ns);
        class Is {
            constructor(e) {
                this.ep = e
            }
            static calcElligatorRistrettoMap(e) {
                const {d: t} = ls
                  , i = Us(ds * e * e)
                  , r = Us((i + os) * fs);
                let s = BigInt(-1);
                const n = Us((s - t * i) * Us(i + t));
                let {isValid: o, value: a} = $s(r, n)
                  , c = Us(a * e);
                Cs(c) || (c = Us(-c)),
                o || (a = c),
                o || (s = i);
                const h = Us(s * (i - os) * ys - n)
                  , l = a * a
                  , u = Us((a + a) * n)
                  , d = Us(h * gs)
                  , g = Us(os - l)
                  , p = Us(os + l);
                return new ms(Us(u * p),Us(g * d),Us(d * p),Us(u * g))
            }
            static hashToCurve(e) {
                const t = js((e = qs(e, 64)).slice(0, 32))
                  , i = this.calcElligatorRistrettoMap(t)
                  , r = js(e.slice(32, 64))
                  , s = this.calcElligatorRistrettoMap(r);
                return new Is(i.add(s))
            }
            static fromHex(e) {
                e = qs(e, 32);
                const {a: t, d: i} = ls
                  , r = "RistrettoPoint.fromHex: the hex is not valid encoding of RistrettoPoint"
                  , s = js(e);
                if (!function(e, t) {
                    if (e.length !== t.length)
                        return !1;
                    for (let i = 0; i < e.length; i++)
                        if (e[i] !== t[i])
                            return !1;
                    return !0
                }(Ns(s), e) || Cs(s))
                    throw new Error(r);
                const n = Us(s * s)
                  , o = Us(os + t * n)
                  , a = Us(os - t * n)
                  , c = Us(o * o)
                  , h = Us(a * a)
                  , l = Us(t * i * c - h)
                  , {isValid: u, value: d} = ks(Us(l * h))
                  , g = Us(d * a)
                  , p = Us(d * g * l);
                let f = Us((s + s) * g);
                Cs(f) && (f = Us(-f));
                const y = Us(o * p)
                  , m = Us(f * y);
                if (!u || Cs(m) || y === ns)
                    throw new Error(r);
                return new Is(new ms(f,y,os,m))
            }
            toRawBytes() {
                let {x: e, y: t, z: i, t: r} = this.ep;
                const s = Us(Us(i + t) * Us(i - t))
                  , n = Us(e * t)
                  , o = Us(n * n)
                  , {value: a} = ks(Us(s * o))
                  , c = Us(a * s)
                  , h = Us(a * n)
                  , l = Us(c * h * r);
                let u;
                if (Cs(r * l)) {
                    let i = Us(t * ds)
                      , r = Us(e * ds);
                    e = i,
                    t = r,
                    u = Us(c * ps)
                } else
                    u = h;
                Cs(e * l) && (t = Us(-t));
                let d = Us((i - t) * u);
                return Cs(d) && (d = Us(-d)),
                Ns(d)
            }
            toHex() {
                return As(this.toRawBytes())
            }
            toString() {
                return this.toHex()
            }
            equals(e) {
                vs(e);
                const t = this.ep
                  , i = e.ep
                  , r = Us(t.x * i.y) === Us(t.y * i.x)
                  , s = Us(t.y * i.y) === Us(t.x * i.x);
                return r || s
            }
            add(e) {
                return vs(e),
                new Is(this.ep.add(e.ep))
            }
            subtract(e) {
                return vs(e),
                new Is(this.ep.subtract(e.ep))
            }
            multiply(e) {
                return new Is(this.ep.multiply(e))
            }
            multiplyUnsafe(e) {
                return new Is(this.ep.multiplyUnsafe(e))
            }
        }
        Is.BASE = new Is(ms.BASE),
        Is.ZERO = new Is(ms.ZERO);
        const _s = new WeakMap;
        class Ss {
            constructor(e, t) {
                this.x = e,
                this.y = t
            }
            _setWindowSize(e) {
                this._WINDOW_SIZE = e,
                _s.delete(this)
            }
            static fromHex(e, t=!0) {
                const {d: i, P: r} = ls
                  , s = (e = qs(e, 32)).slice();
                s[31] = -129 & e[31];
                const n = Ls(s);
                if (t && n >= r)
                    throw new Error("Expected 0 < hex < P");
                if (!t && n >= us)
                    throw new Error("Expected 0 < hex < 2**256");
                const o = Us(n * n)
                  , a = Us(o - os)
                  , c = Us(i * o + os);
                let {isValid: h, value: l} = $s(a, c);
                if (!h)
                    throw new Error("Point.fromHex: invalid y coordinate");
                const u = (l & os) === os;
                return 0 !== (128 & e[31]) !== u && (l = Us(-l)),
                new Ss(l,n)
            }
            static async fromPrivateKey(e) {
                return (await Gs(e)).point
            }
            toRawBytes() {
                const e = Ns(this.y);
                return e[31] |= this.x & os ? 128 : 0,
                e
            }
            toHex() {
                return As(this.toRawBytes())
            }
            toX25519() {
                const {y: e} = this;
                return Ns(Us((os + e) * Ks(os - e)))
            }
            isTorsionFree() {
                return ms.fromAffine(this).isTorsionFree()
            }
            equals(e) {
                return this.x === e.x && this.y === e.y
            }
            negate() {
                return new Ss(Us(-this.x),this.y)
            }
            add(e) {
                return ms.fromAffine(this).add(ms.fromAffine(e)).toAffine()
            }
            subtract(e) {
                return this.add(e.negate())
            }
            multiply(e) {
                return ms.fromAffine(this).multiply(e, this).toAffine()
            }
        }
        Ss.BASE = new Ss(ls.Gx,ls.Gy),
        Ss.ZERO = new Ss(ns,os);
        class Ps {
            constructor(e, t) {
                this.r = e,
                this.s = t,
                this.assertValidity()
            }
            static fromHex(e) {
                const t = qs(e, 64)
                  , i = Ss.fromHex(t.slice(0, 32), !1)
                  , r = Ls(t.slice(32, 64));
                return new Ps(i,r)
            }
            assertValidity() {
                const {r: e, s: t} = this;
                if (!(e instanceof Ss))
                    throw new Error("Expected Point instance");
                return Vs(t, ls.l, !1),
                this
            }
            toRawBytes() {
                const e = new Uint8Array(64);
                return e.set(this.r.toRawBytes()),
                e.set(Ns(this.s), 32),
                e
            }
            toHex() {
                return As(this.toRawBytes())
            }
        }
        function Os(...e) {
            if (!e.every((e=>e instanceof Uint8Array)))
                throw new Error("Expected Uint8Array list");
            if (1 === e.length)
                return e[0];
            const t = e.reduce(((e,t)=>e + t.length), 0)
              , i = new Uint8Array(t);
            for (let r = 0, s = 0; r < e.length; r++) {
                const t = e[r];
                i.set(t, s),
                s += t.length
            }
            return i
        }
        const xs = Array.from({
            length: 256
        }, ((e,t)=>t.toString(16).padStart(2, "0")));
        function As(e) {
            if (!(e instanceof Uint8Array))
                throw new Error("Uint8Array expected");
            let t = "";
            for (let i = 0; i < e.length; i++)
                t += xs[e[i]];
            return t
        }
        function Rs(e) {
            if ("string" !== typeof e)
                throw new TypeError("hexToBytes: expected string, got " + typeof e);
            if (e.length % 2)
                throw new Error("hexToBytes: received invalid unpadded hex");
            const t = new Uint8Array(e.length / 2);
            for (let i = 0; i < t.length; i++) {
                const r = 2 * i
                  , s = e.slice(r, r + 2)
                  , n = Number.parseInt(s, 16);
                if (Number.isNaN(n) || n < 0)
                    throw new Error("Invalid byte sequence");
                t[i] = n
            }
            return t
        }
        function Ts(e) {
            return Rs(e.toString(16).padStart(64, "0"))
        }
        function Ns(e) {
            return Ts(e).reverse()
        }
        function Cs(e) {
            return (Us(e) & os) === os
        }
        function Ls(e) {
            if (!(e instanceof Uint8Array))
                throw new Error("Expected Uint8Array");
            return BigInt("0x" + As(Uint8Array.from(e).reverse()))
        }
        const Ds = BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
        function js(e) {
            return Us(Ls(e) & Ds)
        }
        function Us(e, t=ls.P) {
            const i = e % t;
            return i >= ns ? i : t + i
        }
        function Ks(e, t=ls.P) {
            if (e === ns || t <= ns)
                throw new Error(`invert: expected positive integers, got n=${e} mod=${t}`);
            let i = Us(e, t)
              , r = t
              , s = ns
              , n = os
              , o = os
              , a = ns;
            for (; i !== ns; ) {
                const e = r / i
                  , t = r % i
                  , c = s - o * e
                  , h = n - a * e;
                r = i,
                i = t,
                s = o,
                n = a,
                o = c,
                a = h
            }
            if (r !== os)
                throw new Error("invert: does not exist");
            return Us(s, t)
        }
        function zs(e, t) {
            const {P: i} = ls;
            let r = e;
            for (; t-- > ns; )
                r *= r,
                r %= i;
            return r
        }
        function Ms(e) {
            const {P: t} = ls
              , i = BigInt(5)
              , r = BigInt(10)
              , s = BigInt(20)
              , n = BigInt(40)
              , o = BigInt(80)
              , a = e * e % t * e % t
              , c = zs(a, as) * a % t
              , h = zs(c, os) * e % t
              , l = zs(h, i) * h % t
              , u = zs(l, r) * l % t
              , d = zs(u, s) * u % t
              , g = zs(d, n) * d % t
              , p = zs(g, o) * g % t
              , f = zs(p, o) * g % t
              , y = zs(f, r) * l % t;
            return {
                pow_p_5_8: zs(y, as) * e % t,
                b2: a
            }
        }
        function $s(e, t) {
            const i = Us(t * t * t)
              , r = Us(i * i * t);
            let s = Us(e * i * Ms(e * r).pow_p_5_8);
            const n = Us(t * s * s)
              , o = s
              , a = Us(s * ds)
              , c = n === e
              , h = n === Us(-e)
              , l = n === Us(-e * ds);
            return c && (s = o),
            (h || l) && (s = a),
            Cs(s) && (s = Us(-s)),
            {
                isValid: c || h,
                value: s
            }
        }
        function ks(e) {
            return $s(os, e)
        }
        function Bs(e) {
            return Us(Ls(e), ls.l)
        }
        function qs(e, t) {
            const i = e instanceof Uint8Array ? Uint8Array.from(e) : Rs(e);
            if ("number" === typeof t && i.length !== t)
                throw new Error(`Expected ${t} bytes`);
            return i
        }
        function Vs(e, t, i=!0) {
            if (!t)
                throw new TypeError("Specify max value");
            if ("number" === typeof e && Number.isSafeInteger(e) && (e = BigInt(e)),
            "bigint" === typeof e && e < t)
                if (i) {
                    if (ns < e)
                        return e
                } else if (ns <= e)
                    return e;
            throw new TypeError("Expected valid scalar: 0 < scalar < max")
        }
        function Fs(e) {
            return e[0] &= 248,
            e[31] &= 127,
            e[31] |= 64,
            e
        }
        function Hs(e) {
            if (32 !== (e = "bigint" === typeof e || "number" === typeof e ? Ts(Vs(e, us)) : qs(e)).length)
                throw new Error("Expected 32 bytes");
            return e
        }
        function Ws(e) {
            const t = Fs(e.slice(0, 32))
              , i = e.slice(32, 64)
              , r = Bs(t)
              , s = Ss.BASE.multiply(r)
              , n = s.toRawBytes();
            return {
                head: t,
                prefix: i,
                scalar: r,
                point: s,
                pointBytes: n
            }
        }
        let Js;
        async function Gs(e) {
            return Ws(await Zs.sha512(Hs(e)))
        }
        Ss.BASE._setWindowSize(8);
        const Ys = {
            node: ss,
            web: "object" === typeof self && "crypto"in self ? self.crypto : void 0
        }
          , Zs = {
            bytesToHex: As,
            hexToBytes: Rs,
            concatBytes: Os,
            getExtendedPublicKey: Gs,
            mod: Us,
            invert: Ks,
            TORSION_SUBGROUP: ["0100000000000000000000000000000000000000000000000000000000000000", "c7176a703d4dd84fba3c0b760d10670f2a2053fa2c39ccc64ec7fd7792ac037a", "0000000000000000000000000000000000000000000000000000000000000080", "26e8958fc2b227b045c3f489f2ef98f0d5dfac05d3c63339b13802886d53fc05", "ecffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f", "26e8958fc2b227b045c3f489f2ef98f0d5dfac05d3c63339b13802886d53fc85", "0000000000000000000000000000000000000000000000000000000000000000", "c7176a703d4dd84fba3c0b760d10670f2a2053fa2c39ccc64ec7fd7792ac03fa"],
            hashToPrivateScalar: e=>{
                if ((e = qs(e)).length < 40 || e.length > 1024)
                    throw new Error("Expected 40-1024 bytes of private key as per FIPS 186");
                return Us(Ls(e), ls.l - os) + os
            }
            ,
            randomBytes: (e=32)=>{
                if (Ys.web)
                    return Ys.web.getRandomValues(new Uint8Array(e));
                if (Ys.node) {
                    const {randomBytes: t} = Ys.node;
                    return new Uint8Array(t(e).buffer)
                }
                throw new Error("The environment doesn't have randomBytes function")
            }
            ,
            randomPrivateKey: ()=>Zs.randomBytes(32),
            sha512: async(...e)=>{
                const t = Os(...e);
                if (Ys.web) {
                    const e = await Ys.web.subtle.digest("SHA-512", t.buffer);
                    return new Uint8Array(e)
                }
                if (Ys.node)
                    return Uint8Array.from(Ys.node.createHash("sha512").update(t).digest());
                throw new Error("The environment doesn't have sha512 function")
            }
            ,
            precompute(e=8, t=Ss.BASE) {
                const i = t.equals(Ss.BASE) ? t : new Ss(t.x,t.y);
                return i._setWindowSize(e),
                i.multiply(as),
                i
            },
            sha512Sync: void 0
        };
        Object.defineProperties(Zs, {
            sha512Sync: {
                configurable: !1,
                get: ()=>Js,
                set(e) {
                    Js || (Js = e)
                }
            }
        });
        var Xs = i(36869)
          , Qs = i(38593);
        const en = "https://rpc.walletconnect.com/v1";
        async function tn(e, t, i, r, s) {
            switch (i.t) {
            case "eip191":
                return function(e, t, i) {
                    return (0,
                    Qs.recoverAddress)((0,
                    Xs.r)(t), i).toLowerCase() === e.toLowerCase()
                }(e, t, i.s);
            case "eip1271":
                return await async function(e, t, i, r, s, n) {
                    try {
                        const o = "0x1626ba7e"
                          , a = "0000000000000000000000000000000000000000000000000000000000000040"
                          , c = "0000000000000000000000000000000000000000000000000000000000000041"
                          , h = i.substring(2)
                          , l = o + (0,
                        Xs.r)(t).substring(2) + a + c + h
                          , u = await Ye()(`${null !== n && void 0 !== n ? n : en}/?chainId=${r}&projectId=${s}`, {
                            method: "POST",
                            body: JSON.stringify({
                                id: Date.now() + Math.floor(1e3 * Math.random()),
                                jsonrpc: "2.0",
                                method: "eth_call",
                                params: [{
                                    to: e,
                                    data: l
                                }, "latest"]
                            })
                        })
                          , {result: d} = await u.json();
                        return !!d && d.slice(0, o.length).toLowerCase() === o.toLowerCase()
                    } catch (o) {
                        return !1
                    }
                }(e, t, i.s, r, s);
            default:
                throw new Error(`verifySignature failed: Attempted to verify CacaoSignature with unknown type: ${i.t}`)
            }
        }
        var rn = i(80400)
          , sn = i.n(rn)
          , nn = i(49382);
        const on = ":";
        var an = i(15313).Buffer;
        const cn = e=>e.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_")
          , hn = e=>{
            if (!(e=>Object.getPrototypeOf(e) === Object.prototype && Object.keys(e).length)(e))
                throw new Error(`Supplied object is not valid ${JSON.stringify(e)}`);
            return cn(an.from((new TextEncoder).encode(JSON.stringify(e))).toString("base64"))
        }
        ;
        var ln = i(15313).Buffer;
        const un = e=>`did${on}pkh${on}${e}`
          , dn = e=>{
            const t = sn().decode("K36")
              , i = Zs.hexToBytes(e)
              , r = nn.base58btc.encode(((e,t)=>{
                const i = new Uint8Array(e.length + t.length);
                return i.set(e),
                i.set(t, e.length),
                i
            }
            )(t, i));
            return `did${on}key${on}${r}`
        }
          , gn = async(e,t)=>{
            const [,i] = e
              , r = {
                alg: "EdDSA",
                typ: "JWT"
            }
              , s = (new TextEncoder).encode(((e,t)=>`${hn(e)}.${hn(t)}`)(r, t))
              , n = await async function(e, t) {
                e = qs(e);
                const {prefix: i, scalar: r, pointBytes: s} = await Gs(t)
                  , n = Bs(await Zs.sha512(i, e))
                  , o = Ss.BASE.multiply(n)
                  , a = Us(n + Bs(await Zs.sha512(o.toRawBytes(), s, e)) * r, ls.l);
                return new Ps(o,a).toRawBytes()
            }(s, i);
            return ((e,t,i)=>{
                const r = cn(ln.from(i).toString("base64"));
                return `${hn(e)}.${hn(t)}.${r}`
            }
            )(r, t, n)
        }
        ;
        var pn = i(46444);
        class fn {
            constructor(e, t, i) {
                this.core = e,
                this.projectId = t,
                this.init = async()=>{
                    await this.identityKeys.init()
                }
                ,
                this.generateIdAuth = async(e,t)=>{
                    const {identityKeyPub: i, identityKeyPriv: r} = this.identityKeys.get(e);
                    return gn([i, r], t)
                }
                ,
                this.generateIdentityKey = ()=>{
                    const e = Zs.randomPrivateKey();
                    return this.getKeyData(e)
                }
                ,
                this.getKeyHex = e=>Zs.bytesToHex(e).toLowerCase(),
                this.getKeyData = async e=>{
                    const t = await async function(e) {
                        return (await Gs(e)).pointBytes
                    }(e);
                    return {
                        publicKey: t,
                        privateKey: e,
                        pubKeyHex: this.getKeyHex(t),
                        privKeyHex: this.getKeyHex(e)
                    }
                }
                ,
                this.keyserverUrl = i ?? "https://keys.walletconnect.com",
                this.identityKeys = new qr(e,this.core.logger,"identityKeys","wc@2:identityKeys:",(e=>e.accountId))
            }
            isRegistered(e) {
                return this.identityKeys.keys.includes(e)
            }
            async prepareRegistration({domain: e, accountId: t, statement: i}) {
                const {privateKey: r, pubKeyHex: s} = await this.generateIdentityKey()
                  , n = {
                    aud: dn(s),
                    statement: i,
                    domain: e,
                    iss: un(t),
                    nonce: H(),
                    iat: (new Date).toISOString(),
                    version: "1",
                    resources: [this.keyserverUrl]
                };
                return {
                    message: j(n, un(t)),
                    registerParams: {
                        cacaoPayload: n,
                        privateIdentityKey: r
                    }
                }
            }
            async registerIdentity({registerParams: e, signature: t}) {
                const i = e.cacaoPayload.iss.split(":").slice(-3).join(":");
                if (this.isRegistered(i))
                    return this.identityKeys.get(i).identityKeyPub;
                try {
                    const s = j(e.cacaoPayload, e.cacaoPayload.iss);
                    if (!t.s)
                        throw new Error(`Provided an invalid signature. Expected a string but got: ${t.s}`);
                    const [n,o,a] = i.split(":")
                      , c = `Provided an invalid signature. Signature ${t.s} of type ${t.t} by account ${i} is not a valid signature for message ${s}`;
                    let h = !1;
                    try {
                        h = await tn(a, s, t, `${n}:${o}`, this.projectId)
                    } catch {
                        h = !1
                    }
                    if (!h)
                        throw new Error(c);
                    const l = `${this.keyserverUrl}/identity`
                      , u = {
                        h: {
                            t: "eip4361"
                        },
                        p: e.cacaoPayload,
                        s: t
                    };
                    try {
                        await pn.Z.post(l, {
                            cacao: u
                        })
                    } catch (r) {
                        throw new Error(`Failed to register on keyserver: ${r}`)
                    }
                    const {pubKeyHex: d, privKeyHex: g} = await this.getKeyData(e.privateIdentityKey);
                    return await this.core.crypto.keychain.set(d, g),
                    await this.identityKeys.set(i, {
                        identityKeyPriv: g,
                        identityKeyPub: d,
                        accountId: i
                    }),
                    d
                } catch (Dn) {
                    throw this.core.logger.error(Dn),
                    Dn
                }
            }
            async unregisterIdentity({account: e}) {
                try {
                    const i = Date.now()
                      , r = this.identityKeys.get(e)
                      , s = un(e)
                      , n = {
                        iat: i,
                        exp: (t = i,
                        t + 864e5),
                        iss: dn(r.identityKeyPub),
                        aud: this.keyserverUrl,
                        pkh: s,
                        act: "unregister_identity",
                        sub: "identity_keys"
                    }
                      , o = await this.generateIdAuth(e, n)
                      , a = `${this.keyserverUrl}/identity`
                      , c = await pn.Z.delete(a, {
                        data: {
                            idAuth: o
                        }
                    });
                    if (200 !== c.status)
                        throw new Error(`Failed to unregister on keyserver ${c.status}`);
                    await this.identityKeys.delete(e, {
                        code: -1,
                        message: `Account ${e} unregistered`
                    })
                } catch (i) {
                    throw this.core.logger.error(i),
                    i
                }
                var t
            }
            async resolveIdentity({publicKey: e}) {
                const t = `${this.keyserverUrl}/identity?publicKey=${e.split(":")[2]}`;
                try {
                    const {data: e} = await pn.Z.get(t);
                    return e.value.cacao
                } catch (Ln) {
                    throw this.core.logger.error(Ln),
                    new Error("Failed to resolve identity key")
                }
            }
            async getIdentity({account: e}) {
                return this.identityKeys.get(e).identityKeyPub
            }
            async hasIdentity({account: e}) {
                return this.identityKeys.keys.includes(e)
            }
        }
        i(15313).Buffer;
        const yn = ":";
        i(15313).Buffer;
        const mn = e=>`did${yn}pkh${yn}${e}`
          , bn = e=>{
            const t = sn().decode("K36")
              , i = Zs.hexToBytes(e)
              , r = nn.base58btc.encode(((e,t)=>{
                const i = new Uint8Array(e.length + t.length);
                return i.set(e),
                i.set(t, e.length),
                i
            }
            )(t, i));
            return `did${yn}key${yn}${r}`
        }
          , wn = "INTERNAL_ERROR"
          , vn = "SERVER_ERROR"
          , En = [-32700, -32600, -32601, -32602, -32603]
          , In = {
            PARSE_ERROR: {
                code: -32700,
                message: "Parse error"
            },
            INVALID_REQUEST: {
                code: -32600,
                message: "Invalid Request"
            },
            METHOD_NOT_FOUND: {
                code: -32601,
                message: "Method not found"
            },
            INVALID_PARAMS: {
                code: -32602,
                message: "Invalid params"
            },
            [wn]: {
                code: -32603,
                message: "Internal error"
            },
            [vn]: {
                code: -32e3,
                message: "Server error"
            }
        }
          , _n = vn;
        function Sn(e) {
            return En.includes(e)
        }
        function Pn(e) {
            return Object.keys(In).includes(e) ? In[e] : In[_n]
        }
        function On(e) {
            const t = Object.values(In).find((t=>t.code === e));
            return t || In[_n]
        }
        i(92389);
        function xn(e=3) {
            return Date.now() * Math.pow(10, e) + Math.floor(Math.random() * Math.pow(10, e))
        }
        function An(e, t) {
            return "undefined" === typeof e ? Pn(wn) : ("string" === typeof e && (e = Object.assign(Object.assign({}, Pn(vn)), {
                message: e
            })),
            "undefined" !== typeof t && (e.data = t),
            Sn(e.code) && (e = On(e.code)),
            e)
        }
        i(91381);
        function Rn(e) {
            return "object" === typeof e && "id"in e && "jsonrpc"in e && "2.0" === e.jsonrpc
        }
        function Tn(e) {
            return "result"in e
        }
        function Nn(e) {
            return "error"in e
        }
        function Cn(e) {
            this.message = e
        }
        Cn.prototype = new Error,
        Cn.prototype.name = "InvalidCharacterError";
        var Ln = "undefined" != typeof window && window.atob && window.atob.bind(window) || function(e) {
            var t = String(e).replace(/=+$/, "");
            if (t.length % 4 == 1)
                throw new Cn("'atob' failed: The string to be decoded is not correctly encoded.");
            for (var i, r, s = 0, n = 0, o = ""; r = t.charAt(n++); ~r && (i = s % 4 ? 64 * i + r : r,
            s++ % 4) ? o += String.fromCharCode(255 & i >> (-2 * s & 6)) : 0)
                r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(r);
            return o
        }
        ;
        function Dn(e) {
            var t = e.replace(/-/g, "+").replace(/_/g, "/");
            switch (t.length % 4) {
            case 0:
                break;
            case 2:
                t += "==";
                break;
            case 3:
                t += "=";
                break;
            default:
                throw "Illegal base64url string!"
            }
            try {
                return function(e) {
                    return decodeURIComponent(Ln(e).replace(/(.)/g, (function(e, t) {
                        var i = t.charCodeAt(0).toString(16).toUpperCase();
                        return i.length < 2 && (i = "0" + i),
                        "%" + i
                    }
                    )))
                }(t)
            } catch (e) {
                return Ln(t)
            }
        }
        function jn(e) {
            this.message = e
        }
        jn.prototype = new Error,
        jn.prototype.name = "InvalidTokenError";
        var Un = function(e, t) {
            if ("string" != typeof e)
                throw new jn("Invalid token specified");
            var i = !0 === (t = t || {}).header ? 0 : 1;
            try {
                return JSON.parse(Dn(e.split(".")[i]))
            } catch (e) {
                throw new jn("Invalid token specified: " + e.message)
            }
        }
          , Kn = i(15313).Buffer;
        const zn = "I further authorize this app to view and manage my notifications for ALL apps. Read more at https://walletconnect.com/notifications-all-apps"
          , Mn = "I further authorize this app to send me notifications. Read more at https://walletconnect.com/notifications"
          , $n = "did:web:"
          , kn = {
            wc_notifySubscribe: {
                req: {
                    ttl: R.FIVE_MINUTES,
                    tag: 4e3
                },
                res: {
                    ttl: R.THIRTY_DAYS,
                    tag: 4001
                }
            },
            wc_notifyMessage: {
                req: {
                    ttl: R.THIRTY_DAYS,
                    tag: 4002
                },
                res: {
                    ttl: R.THIRTY_DAYS,
                    tag: 4003
                }
            },
            wc_notifyDelete: {
                req: {
                    ttl: R.THIRTY_DAYS,
                    tag: 4004
                },
                res: {
                    ttl: R.THIRTY_DAYS,
                    tag: 4005
                }
            },
            wc_notifyUpdate: {
                req: {
                    ttl: R.FIVE_MINUTES,
                    tag: 4008
                },
                res: {
                    ttl: R.THIRTY_DAYS,
                    tag: 4009
                }
            },
            wc_notifyWatchSubscription: {
                req: {
                    ttl: R.FIVE_MINUTES,
                    tag: 4010
                },
                res: {
                    ttl: R.FIVE_MINUTES,
                    tag: 4011
                }
            },
            wc_notifySubscriptionsChanged: {
                req: {
                    ttl: R.FIVE_MINUTES,
                    tag: 4012
                },
                res: {
                    ttl: R.FIVE_MINUTES,
                    tag: 4013
                }
            },
            wc_notifyGetNotifications: {
                req: {
                    ttl: R.FIVE_MINUTES,
                    tag: 4014
                },
                res: {
                    ttl: R.FIVE_MINUTES,
                    tag: 4015
                }
            }
        }
          , Bn = "notifyClient"
          , qn = "wc@1:notify:"
          , Vn = "https://keys.walletconnect.com";
        class Fn {
            constructor(e) {
                this.client = e
            }
        }
        class Hn {
            constructor(e) {
                this.opts = e
            }
        }
        var Wn = {}
          , Jn = function(e, t) {
            return Jn = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var i in t)
                    t.hasOwnProperty(i) && (e[i] = t[i])
            }
            ,
            Jn(e, t)
        };
        var Gn = function() {
            return Gn = Object.assign || function(e) {
                for (var t, i = 1, r = arguments.length; i < r; i++)
                    for (var s in t = arguments[i])
                        Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
                return e
            }
            ,
            Gn.apply(this, arguments)
        };
        function Yn(e) {
            var t = "function" == typeof Symbol && Symbol.iterator
              , i = t && e[t]
              , r = 0;
            if (i)
                return i.call(e);
            if (e && "number" == typeof e.length)
                return {
                    next: function() {
                        return e && r >= e.length && (e = void 0),
                        {
                            value: e && e[r++],
                            done: !e
                        }
                    }
                };
            throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }
        function Zn(e, t) {
            var i = "function" == typeof Symbol && e[Symbol.iterator];
            if (!i)
                return e;
            var r, s, n = i.call(e), o = [];
            try {
                for (; (void 0 === t || t-- > 0) && !(r = n.next()).done; )
                    o.push(r.value)
            } catch (a) {
                s = {
                    error: a
                }
            } finally {
                try {
                    r && !r.done && (i = n.return) && i.call(n)
                } finally {
                    if (s)
                        throw s.error
                }
            }
            return o
        }
        function Xn(e) {
            return this instanceof Xn ? (this.v = e,
            this) : new Xn(e)
        }
        var Qn = Object.freeze({
            __proto__: null,
            __extends: function(e, t) {
                function i() {
                    this.constructor = e
                }
                Jn(e, t),
                e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype,
                new i)
            },
            get __assign() {
                return Gn
            },
            __rest: function(e, t) {
                var i = {};
                for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (i[r] = e[r]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                    var s = 0;
                    for (r = Object.getOwnPropertySymbols(e); s < r.length; s++)
                        t.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[s]) && (i[r[s]] = e[r[s]])
                }
                return i
            },
            __decorate: function(e, t, i, r) {
                var s, n = arguments.length, o = n < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, i) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    o = Reflect.decorate(e, t, i, r);
                else
                    for (var a = e.length - 1; a >= 0; a--)
                        (s = e[a]) && (o = (n < 3 ? s(o) : n > 3 ? s(t, i, o) : s(t, i)) || o);
                return n > 3 && o && Object.defineProperty(t, i, o),
                o
            },
            __param: function(e, t) {
                return function(i, r) {
                    t(i, r, e)
                }
            },
            __metadata: function(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
                    return Reflect.metadata(e, t)
            },
            __awaiter: function(e, t, i, r) {
                return new (i || (i = Promise))((function(s, n) {
                    function o(e) {
                        try {
                            c(r.next(e))
                        } catch (t) {
                            n(t)
                        }
                    }
                    function a(e) {
                        try {
                            c(r.throw(e))
                        } catch (t) {
                            n(t)
                        }
                    }
                    function c(e) {
                        e.done ? s(e.value) : function(e) {
                            return e instanceof i ? e : new i((function(t) {
                                t(e)
                            }
                            ))
                        }(e.value).then(o, a)
                    }
                    c((r = r.apply(e, t || [])).next())
                }
                ))
            },
            __generator: function(e, t) {
                var i, r, s, n, o = {
                    label: 0,
                    sent: function() {
                        if (1 & s[0])
                            throw s[1];
                        return s[1]
                    },
                    trys: [],
                    ops: []
                };
                return n = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                },
                "function" == typeof Symbol && (n[Symbol.iterator] = function() {
                    return this
                }
                ),
                n;
                function a(n) {
                    return function(a) {
                        return function(n) {
                            if (i)
                                throw new TypeError("Generator is already executing.");
                            for (; o; )
                                try {
                                    if (i = 1,
                                    r && (s = 2 & n[0] ? r.return : n[0] ? r.throw || ((s = r.return) && s.call(r),
                                    0) : r.next) && !(s = s.call(r, n[1])).done)
                                        return s;
                                    switch (r = 0,
                                    s && (n = [2 & n[0], s.value]),
                                    n[0]) {
                                    case 0:
                                    case 1:
                                        s = n;
                                        break;
                                    case 4:
                                        return o.label++,
                                        {
                                            value: n[1],
                                            done: !1
                                        };
                                    case 5:
                                        o.label++,
                                        r = n[1],
                                        n = [0];
                                        continue;
                                    case 7:
                                        n = o.ops.pop(),
                                        o.trys.pop();
                                        continue;
                                    default:
                                        if (!(s = (s = o.trys).length > 0 && s[s.length - 1]) && (6 === n[0] || 2 === n[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === n[0] && (!s || n[1] > s[0] && n[1] < s[3])) {
                                            o.label = n[1];
                                            break
                                        }
                                        if (6 === n[0] && o.label < s[1]) {
                                            o.label = s[1],
                                            s = n;
                                            break
                                        }
                                        if (s && o.label < s[2]) {
                                            o.label = s[2],
                                            o.ops.push(n);
                                            break
                                        }
                                        s[2] && o.ops.pop(),
                                        o.trys.pop();
                                        continue
                                    }
                                    n = t.call(e, o)
                                } catch (a) {
                                    n = [6, a],
                                    r = 0
                                } finally {
                                    i = s = 0
                                }
                            if (5 & n[0])
                                throw n[1];
                            return {
                                value: n[0] ? n[1] : void 0,
                                done: !0
                            }
                        }([n, a])
                    }
                }
            },
            __createBinding: function(e, t, i, r) {
                void 0 === r && (r = i),
                e[r] = t[i]
            },
            __exportStar: function(e, t) {
                for (var i in e)
                    "default" !== i && !t.hasOwnProperty(i) && (t[i] = e[i])
            },
            __values: Yn,
            __read: Zn,
            __spread: function() {
                for (var e = [], t = 0; t < arguments.length; t++)
                    e = e.concat(Zn(arguments[t]));
                return e
            },
            __spreadArrays: function() {
                for (var e = 0, t = 0, i = arguments.length; t < i; t++)
                    e += arguments[t].length;
                var r = Array(e)
                  , s = 0;
                for (t = 0; t < i; t++)
                    for (var n = arguments[t], o = 0, a = n.length; o < a; o++,
                    s++)
                        r[s] = n[o];
                return r
            },
            __await: Xn,
            __asyncGenerator: function(e, t, i) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var r, s = i.apply(e, t || []), n = [];
                return r = {},
                o("next"),
                o("throw"),
                o("return"),
                r[Symbol.asyncIterator] = function() {
                    return this
                }
                ,
                r;
                function o(e) {
                    s[e] && (r[e] = function(t) {
                        return new Promise((function(i, r) {
                            n.push([e, t, i, r]) > 1 || a(e, t)
                        }
                        ))
                    }
                    )
                }
                function a(e, t) {
                    try {
                        !function(e) {
                            e.value instanceof Xn ? Promise.resolve(e.value.v).then(c, h) : l(n[0][2], e)
                        }(s[e](t))
                    } catch (b) {
                        l(n[0][3], b)
                    }
                }
                function c(e) {
                    a("next", e)
                }
                function h(e) {
                    a("throw", e)
                }
                function l(e, t) {
                    e(t),
                    n.shift(),
                    n.length && a(n[0][0], n[0][1])
                }
            },
            __asyncDelegator: function(e) {
                var t, i;
                return t = {},
                r("next"),
                r("throw", (function(e) {
                    throw e
                }
                )),
                r("return"),
                t[Symbol.iterator] = function() {
                    return this
                }
                ,
                t;
                function r(r, s) {
                    t[r] = e[r] ? function(t) {
                        return (i = !i) ? {
                            value: Xn(e[r](t)),
                            done: "return" === r
                        } : s ? s(t) : t
                    }
                    : s
                }
            },
            __asyncValues: function(e) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var t, i = e[Symbol.asyncIterator];
                return i ? i.call(e) : (e = Yn(e),
                t = {},
                r("next"),
                r("throw"),
                r("return"),
                t[Symbol.asyncIterator] = function() {
                    return this
                }
                ,
                t);
                function r(i) {
                    t[i] = e[i] && function(t) {
                        return new Promise((function(r, s) {
                            (function(e, t, i, r) {
                                Promise.resolve(r).then((function(t) {
                                    e({
                                        value: t,
                                        done: i
                                    })
                                }
                                ), t)
                            }
                            )(r, s, (t = e[i](t)).done, t.value)
                        }
                        ))
                    }
                }
            },
            __makeTemplateObject: function(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t,
                e
            },
            __importStar: function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var i in e)
                        Object.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t.default = e,
                t
            },
            __importDefault: function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            },
            __classPrivateFieldGet: function(e, t) {
                if (!t.has(e))
                    throw new TypeError("attempted to get private field on non-instance");
                return t.get(e)
            },
            __classPrivateFieldSet: function(e, t, i) {
                if (!t.has(e))
                    throw new TypeError("attempted to set private field on non-instance");
                return t.set(e, i),
                i
            }
        })
          , eo = function(e) {
            var t = e.default;
            if ("function" == typeof t) {
                var i = function() {
                    return t.apply(this, arguments)
                };
                i.prototype = t.prototype
            } else
                i = {};
            return Object.defineProperty(i, "__esModule", {
                value: !0
            }),
            Object.keys(e).forEach((function(t) {
                var r = Object.getOwnPropertyDescriptor(e, t);
                Object.defineProperty(i, t, r.get ? r : {
                    enumerable: !0,
                    get: function() {
                        return e[t]
                    }
                })
            }
            )),
            i
        }(Qn);
        function to(e) {
            try {
                return JSON.stringify(e)
            } catch {
                return '"[Circular]"'
            }
        }
        var io = function(e, t, i) {
            var r = i && i.stringify || to;
            if ("object" == typeof e && null !== e) {
                var s = t.length + 1;
                if (1 === s)
                    return e;
                var n = new Array(s);
                n[0] = r(e);
                for (var o = 1; o < s; o++)
                    n[o] = r(t[o]);
                return n.join(" ")
            }
            if ("string" != typeof e)
                return e;
            var a = t.length;
            if (0 === a)
                return e;
            for (var c = "", h = 0, l = -1, u = e && e.length || 0, d = 0; d < u; ) {
                if (37 === e.charCodeAt(d) && d + 1 < u) {
                    switch (l = l > -1 ? l : 0,
                    e.charCodeAt(d + 1)) {
                    case 100:
                    case 102:
                        if (h >= a || null == t[h])
                            break;
                        l < d && (c += e.slice(l, d)),
                        c += Number(t[h]),
                        l = d + 2,
                        d++;
                        break;
                    case 105:
                        if (h >= a || null == t[h])
                            break;
                        l < d && (c += e.slice(l, d)),
                        c += Math.floor(Number(t[h])),
                        l = d + 2,
                        d++;
                        break;
                    case 79:
                    case 111:
                    case 106:
                        if (h >= a || void 0 === t[h])
                            break;
                        l < d && (c += e.slice(l, d));
                        var g = typeof t[h];
                        if ("string" === g) {
                            c += "'" + t[h] + "'",
                            l = d + 2,
                            d++;
                            break
                        }
                        if ("function" === g) {
                            c += t[h].name || "<anonymous>",
                            l = d + 2,
                            d++;
                            break
                        }
                        c += r(t[h]),
                        l = d + 2,
                        d++;
                        break;
                    case 115:
                        if (h >= a)
                            break;
                        l < d && (c += e.slice(l, d)),
                        c += String(t[h]),
                        l = d + 2,
                        d++;
                        break;
                    case 37:
                        l < d && (c += e.slice(l, d)),
                        c += "%",
                        l = d + 2,
                        d++,
                        h--
                    }
                    ++h
                }
                ++d
            }
            return -1 === l ? e : (l < u && (c += e.slice(l)),
            c)
        };
        const ro = io;
        var so = ao;
        const no = function() {
            function e(e) {
                return typeof e < "u" && e
            }
            try {
                return typeof globalThis < "u" || Object.defineProperty(Object.prototype, "globalThis", {
                    get: function() {
                        return delete Object.prototype.globalThis,
                        this.globalThis = this
                    },
                    configurable: !0
                }),
                globalThis
            } catch {
                return e(self) || e(window) || e(this) || {}
            }
        }().console || {}
          , oo = {
            mapHttpRequest: po,
            mapHttpResponse: po,
            wrapRequestSerializer: fo,
            wrapResponseSerializer: fo,
            wrapErrorSerializer: fo,
            req: po,
            res: po,
            err: function(e) {
                const t = {
                    type: e.constructor.name,
                    msg: e.message,
                    stack: e.stack
                };
                for (const i in e)
                    void 0 === t[i] && (t[i] = e[i]);
                return t
            }
        };
        function ao(e) {
            (e = e || {}).browser = e.browser || {};
            const t = e.browser.transmit;
            if (t && "function" != typeof t.send)
                throw Error("pino: transmit option must have a send function");
            const i = e.browser.write || no;
            e.browser.write && (e.browser.asObject = !0);
            const r = e.serializers || {}
              , s = function(e, t) {
                return Array.isArray(e) ? e.filter((function(e) {
                    return "!stdSerializers.err" !== e
                }
                )) : !0 === e && Object.keys(t)
            }(e.browser.serialize, r);
            let n = e.browser.serialize;
            Array.isArray(e.browser.serialize) && e.browser.serialize.indexOf("!stdSerializers.err") > -1 && (n = !1);
            "function" == typeof i && (i.error = i.fatal = i.warn = i.info = i.debug = i.trace = i),
            !1 === e.enabled && (e.level = "silent");
            const o = e.level || "info"
              , a = Object.create(i);
            a.log || (a.log = yo),
            Object.defineProperty(a, "levelVal", {
                get: function() {
                    return "silent" === this.level ? 1 / 0 : this.levels.values[this.level]
                }
            }),
            Object.defineProperty(a, "level", {
                get: function() {
                    return this._level
                },
                set: function(e) {
                    if ("silent" !== e && !this.levels.values[e])
                        throw Error("unknown level " + e);
                    this._level = e,
                    co(c, a, "error", "log"),
                    co(c, a, "fatal", "error"),
                    co(c, a, "warn", "error"),
                    co(c, a, "info", "log"),
                    co(c, a, "debug", "log"),
                    co(c, a, "trace", "log")
                }
            });
            const c = {
                transmit: t,
                serialize: s,
                asObject: e.browser.asObject,
                levels: ["error", "fatal", "warn", "info", "debug", "trace"],
                timestamp: go(e)
            };
            return a.levels = ao.levels,
            a.level = o,
            a.setMaxListeners = a.getMaxListeners = a.emit = a.addListener = a.on = a.prependListener = a.once = a.prependOnceListener = a.removeListener = a.removeAllListeners = a.listeners = a.listenerCount = a.eventNames = a.write = a.flush = yo,
            a.serializers = r,
            a._serialize = s,
            a._stdErrSerialize = n,
            a.child = function(i, n) {
                if (!i)
                    throw new Error("missing bindings for child Pino");
                n = n || {},
                s && i.serializers && (n.serializers = i.serializers);
                const o = n.serializers;
                if (s && o) {
                    var a = Object.assign({}, r, o)
                      , c = !0 === e.browser.serialize ? Object.keys(a) : s;
                    delete i.serializers,
                    ho([i], c, a, this._stdErrSerialize)
                }
                function h(e) {
                    this._childLevel = 1 + (0 | e._childLevel),
                    this.error = lo(e, i, "error"),
                    this.fatal = lo(e, i, "fatal"),
                    this.warn = lo(e, i, "warn"),
                    this.info = lo(e, i, "info"),
                    this.debug = lo(e, i, "debug"),
                    this.trace = lo(e, i, "trace"),
                    a && (this.serializers = a,
                    this._serialize = c),
                    t && (this._logEvent = uo([].concat(e._logEvent.bindings, i)))
                }
                return h.prototype = this,
                new h(this)
            }
            ,
            t && (a._logEvent = uo()),
            a
        }
        function co(e, t, i, r) {
            const s = Object.getPrototypeOf(t);
            t[i] = t.levelVal > t.levels.values[i] ? yo : s[i] ? s[i] : no[i] || no[r] || yo,
            function(e, t, i) {
                !e.transmit && t[i] === yo || (t[i] = function(r) {
                    return function() {
                        const s = e.timestamp()
                          , n = new Array(arguments.length)
                          , o = Object.getPrototypeOf && Object.getPrototypeOf(this) === no ? no : this;
                        for (var a = 0; a < n.length; a++)
                            n[a] = arguments[a];
                        if (e.serialize && !e.asObject && ho(n, this._serialize, this.serializers, this._stdErrSerialize),
                        e.asObject ? r.call(o, function(e, t, i, r) {
                            e._serialize && ho(i, e._serialize, e.serializers, e._stdErrSerialize);
                            const s = i.slice();
                            let n = s[0];
                            const o = {};
                            r && (o.time = r),
                            o.level = ao.levels.values[t];
                            let a = 1 + (0 | e._childLevel);
                            if (a < 1 && (a = 1),
                            null !== n && "object" == typeof n) {
                                for (; a-- && "object" == typeof s[0]; )
                                    Object.assign(o, s.shift());
                                n = s.length ? ro(s.shift(), s) : void 0
                            } else
                                "string" == typeof n && (n = ro(s.shift(), s));
                            return void 0 !== n && (o.msg = n),
                            o
                        }(this, i, n, s)) : r.apply(o, n),
                        e.transmit) {
                            const r = e.transmit.level || t.level
                              , o = ao.levels.values[r]
                              , a = ao.levels.values[i];
                            if (a < o)
                                return;
                            !function(e, t, i) {
                                const r = t.send
                                  , s = t.ts
                                  , n = t.methodLevel
                                  , o = t.methodValue
                                  , a = t.val
                                  , c = e._logEvent.bindings;
                                ho(i, e._serialize || Object.keys(e.serializers), e.serializers, void 0 === e._stdErrSerialize || e._stdErrSerialize),
                                e._logEvent.ts = s,
                                e._logEvent.messages = i.filter((function(e) {
                                    return -1 === c.indexOf(e)
                                }
                                )),
                                e._logEvent.level.label = n,
                                e._logEvent.level.value = o,
                                r(n, e._logEvent, a),
                                e._logEvent = uo(c)
                            }(this, {
                                ts: s,
                                methodLevel: i,
                                methodValue: a,
                                transmitLevel: r,
                                transmitValue: ao.levels.values[e.transmit.level || t.level],
                                send: e.transmit.send,
                                val: t.levelVal
                            }, n)
                        }
                    }
                }(t[i]))
            }(e, t, i)
        }
        function ho(e, t, i, r) {
            for (const s in e)
                if (r && e[s]instanceof Error)
                    e[s] = ao.stdSerializers.err(e[s]);
                else if ("object" == typeof e[s] && !Array.isArray(e[s]))
                    for (const r in e[s])
                        t && t.indexOf(r) > -1 && r in i && (e[s][r] = i[r](e[s][r]))
        }
        function lo(e, t, i) {
            return function() {
                const r = new Array(1 + arguments.length);
                r[0] = t;
                for (var s = 1; s < r.length; s++)
                    r[s] = arguments[s - 1];
                return e[i].apply(this, r)
            }
        }
        function uo(e) {
            return {
                ts: 0,
                messages: [],
                bindings: e || [],
                level: {
                    label: "",
                    value: 0
                }
            }
        }
        function go(e) {
            return "function" == typeof e.timestamp ? e.timestamp : !1 === e.timestamp ? mo : bo
        }
        function po() {
            return {}
        }
        function fo(e) {
            return e
        }
        function yo() {}
        function mo() {
            return !1
        }
        function bo() {
            return Date.now()
        }
        ao.levels = {
            values: {
                fatal: 60,
                error: 50,
                warn: 40,
                info: 30,
                debug: 20,
                trace: 10
            },
            labels: {
                10: "trace",
                20: "debug",
                30: "info",
                40: "warn",
                50: "error",
                60: "fatal"
            }
        },
        ao.stdSerializers = oo,
        ao.stdTimeFunctions = Object.assign({}, {
            nullTime: mo,
            epochTime: bo,
            unixTime: function() {
                return Math.round(Date.now() / 1e3)
            },
            isoTime: function() {
                return new Date(Date.now()).toISOString()
            }
        });
        var wo, vo = {};
        function Eo() {
            return wo || (wo = 1,
            Object.defineProperty(vo, "__esModule", {
                value: !0
            }),
            vo.PINO_CUSTOM_CONTEXT_KEY = vo.PINO_LOGGER_DEFAULTS = void 0,
            vo.PINO_LOGGER_DEFAULTS = {
                level: "info"
            },
            vo.PINO_CUSTOM_CONTEXT_KEY = "custom_context"),
            vo
        }
        var Io, _o = {};
        !function(e) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            e.pino = void 0;
            const t = eo
              , i = t.__importDefault(so);
            Object.defineProperty(e, "pino", {
                enumerable: !0,
                get: function() {
                    return i.default
                }
            }),
            t.__exportStar(Eo(), e),
            t.__exportStar(function() {
                if (Io)
                    return _o;
                Io = 1,
                Object.defineProperty(_o, "__esModule", {
                    value: !0
                }),
                _o.generateChildLogger = _o.formatChildLoggerContext = _o.getLoggerContext = _o.setBrowserLoggerContext = _o.getBrowserLoggerContext = _o.getDefaultLoggerOptions = void 0;
                const e = Eo();
                function t(t, i=e.PINO_CUSTOM_CONTEXT_KEY) {
                    return t[i] || ""
                }
                function i(t, i, r=e.PINO_CUSTOM_CONTEXT_KEY) {
                    return t[r] = i,
                    t
                }
                function r(i, r=e.PINO_CUSTOM_CONTEXT_KEY) {
                    let s = "";
                    return s = typeof i.bindings > "u" ? t(i, r) : i.bindings().context || "",
                    s
                }
                function s(t, i, s=e.PINO_CUSTOM_CONTEXT_KEY) {
                    const n = r(t, s);
                    return n.trim() ? `${n}/${i}` : i
                }
                return _o.getDefaultLoggerOptions = function(t) {
                    return Object.assign(Object.assign({}, t), {
                        level: t?.level || e.PINO_LOGGER_DEFAULTS.level
                    })
                }
                ,
                _o.getBrowserLoggerContext = t,
                _o.setBrowserLoggerContext = i,
                _o.getLoggerContext = r,
                _o.formatChildLoggerContext = s,
                _o.generateChildLogger = function(t, r, n=e.PINO_CUSTOM_CONTEXT_KEY) {
                    const o = s(t, r, n);
                    return i(t.child({
                        context: o
                    }), o, n)
                }
                ,
                _o
            }(), e)
        }(Wn);
        var So, Po = {
            exports: {}
        }, Oo = "object" == typeof Reflect ? Reflect : null, xo = Oo && "function" == typeof Oo.apply ? Oo.apply : function(e, t, i) {
            return Function.prototype.apply.call(e, t, i)
        }
        ;
        So = Oo && "function" == typeof Oo.ownKeys ? Oo.ownKeys : Object.getOwnPropertySymbols ? function(e) {
            return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
        }
        : function(e) {
            return Object.getOwnPropertyNames(e)
        }
        ;
        var Ao = Number.isNaN || function(e) {
            return e !== e
        }
        ;
        function Ro() {
            Ro.init.call(this)
        }
        Po.exports = Ro,
        Po.exports.once = function(e, t) {
            return new Promise((function(i, r) {
                function s(i) {
                    e.removeListener(t, n),
                    r(i)
                }
                function n() {
                    "function" == typeof e.removeListener && e.removeListener("error", s),
                    i([].slice.call(arguments))
                }
                Mo(e, t, n, {
                    once: !0
                }),
                "error" !== t && function(e, t, i) {
                    "function" == typeof e.on && Mo(e, "error", t, i)
                }(e, s, {
                    once: !0
                })
            }
            ))
        }
        ,
        Ro.EventEmitter = Ro,
        Ro.prototype._events = void 0,
        Ro.prototype._eventsCount = 0,
        Ro.prototype._maxListeners = void 0;
        var To = 10;
        function No(e) {
            if ("function" != typeof e)
                throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e)
        }
        function Co(e) {
            return void 0 === e._maxListeners ? Ro.defaultMaxListeners : e._maxListeners
        }
        function Lo(e, t, i, r) {
            var s, n, o;
            if (No(i),
            void 0 === (n = e._events) ? (n = e._events = Object.create(null),
            e._eventsCount = 0) : (void 0 !== n.newListener && (e.emit("newListener", t, i.listener ? i.listener : i),
            n = e._events),
            o = n[t]),
            void 0 === o)
                o = n[t] = i,
                ++e._eventsCount;
            else if ("function" == typeof o ? o = n[t] = r ? [i, o] : [o, i] : r ? o.unshift(i) : o.push(i),
            (s = Co(e)) > 0 && o.length > s && !o.warned) {
                o.warned = !0;
                var a = new Error("Possible EventEmitter memory leak detected. " + o.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                a.name = "MaxListenersExceededWarning",
                a.emitter = e,
                a.type = t,
                a.count = o.length,
                function(e) {
                    console && console.warn && console.warn(e)
                }(a)
            }
            return e
        }
        function Do() {
            if (!this.fired)
                return this.target.removeListener(this.type, this.wrapFn),
                this.fired = !0,
                0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
        }
        function jo(e, t, i) {
            var r = {
                fired: !1,
                wrapFn: void 0,
                target: e,
                type: t,
                listener: i
            }
              , s = Do.bind(r);
            return s.listener = i,
            r.wrapFn = s,
            s
        }
        function Uo(e, t, i) {
            var r = e._events;
            if (void 0 === r)
                return [];
            var s = r[t];
            return void 0 === s ? [] : "function" == typeof s ? i ? [s.listener || s] : [s] : i ? function(e) {
                for (var t = new Array(e.length), i = 0; i < t.length; ++i)
                    t[i] = e[i].listener || e[i];
                return t
            }(s) : zo(s, s.length)
        }
        function Ko(e) {
            var t = this._events;
            if (void 0 !== t) {
                var i = t[e];
                if ("function" == typeof i)
                    return 1;
                if (void 0 !== i)
                    return i.length
            }
            return 0
        }
        function zo(e, t) {
            for (var i = new Array(t), r = 0; r < t; ++r)
                i[r] = e[r];
            return i
        }
        function Mo(e, t, i, r) {
            if ("function" == typeof e.on)
                r.once ? e.once(t, i) : e.on(t, i);
            else {
                if ("function" != typeof e.addEventListener)
                    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
                e.addEventListener(t, (function s(n) {
                    r.once && e.removeEventListener(t, s),
                    i(n)
                }
                ))
            }
        }
        Object.defineProperty(Ro, "defaultMaxListeners", {
            enumerable: !0,
            get: function() {
                return To
            },
            set: function(e) {
                if ("number" != typeof e || e < 0 || Ao(e))
                    throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
                To = e
            }
        }),
        Ro.init = function() {
            (void 0 === this._events || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null),
            this._eventsCount = 0),
            this._maxListeners = this._maxListeners || void 0
        }
        ,
        Ro.prototype.setMaxListeners = function(e) {
            if ("number" != typeof e || e < 0 || Ao(e))
                throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
            return this._maxListeners = e,
            this
        }
        ,
        Ro.prototype.getMaxListeners = function() {
            return Co(this)
        }
        ,
        Ro.prototype.emit = function(e) {
            for (var t = [], i = 1; i < arguments.length; i++)
                t.push(arguments[i]);
            var r = "error" === e
              , s = this._events;
            if (void 0 !== s)
                r = r && void 0 === s.error;
            else if (!r)
                return !1;
            if (r) {
                var n;
                if (t.length > 0 && (n = t[0]),
                n instanceof Error)
                    throw n;
                var o = new Error("Unhandled error." + (n ? " (" + n.message + ")" : ""));
                throw o.context = n,
                o
            }
            var a = s[e];
            if (void 0 === a)
                return !1;
            if ("function" == typeof a)
                xo(a, this, t);
            else {
                var c = a.length
                  , h = zo(a, c);
                for (i = 0; i < c; ++i)
                    xo(h[i], this, t)
            }
            return !0
        }
        ,
        Ro.prototype.addListener = function(e, t) {
            return Lo(this, e, t, !1)
        }
        ,
        Ro.prototype.on = Ro.prototype.addListener,
        Ro.prototype.prependListener = function(e, t) {
            return Lo(this, e, t, !0)
        }
        ,
        Ro.prototype.once = function(e, t) {
            return No(t),
            this.on(e, jo(this, e, t)),
            this
        }
        ,
        Ro.prototype.prependOnceListener = function(e, t) {
            return No(t),
            this.prependListener(e, jo(this, e, t)),
            this
        }
        ,
        Ro.prototype.removeListener = function(e, t) {
            var i, r, s, n, o;
            if (No(t),
            void 0 === (r = this._events))
                return this;
            if (void 0 === (i = r[e]))
                return this;
            if (i === t || i.listener === t)
                0 === --this._eventsCount ? this._events = Object.create(null) : (delete r[e],
                r.removeListener && this.emit("removeListener", e, i.listener || t));
            else if ("function" != typeof i) {
                for (s = -1,
                n = i.length - 1; n >= 0; n--)
                    if (i[n] === t || i[n].listener === t) {
                        o = i[n].listener,
                        s = n;
                        break
                    }
                if (s < 0)
                    return this;
                0 === s ? i.shift() : function(e, t) {
                    for (; t + 1 < e.length; t++)
                        e[t] = e[t + 1];
                    e.pop()
                }(i, s),
                1 === i.length && (r[e] = i[0]),
                void 0 !== r.removeListener && this.emit("removeListener", e, o || t)
            }
            return this
        }
        ,
        Ro.prototype.off = Ro.prototype.removeListener,
        Ro.prototype.removeAllListeners = function(e) {
            var t, i, r;
            if (void 0 === (i = this._events))
                return this;
            if (void 0 === i.removeListener)
                return 0 === arguments.length ? (this._events = Object.create(null),
                this._eventsCount = 0) : void 0 !== i[e] && (0 === --this._eventsCount ? this._events = Object.create(null) : delete i[e]),
                this;
            if (0 === arguments.length) {
                var s, n = Object.keys(i);
                for (r = 0; r < n.length; ++r)
                    "removeListener" !== (s = n[r]) && this.removeAllListeners(s);
                return this.removeAllListeners("removeListener"),
                this._events = Object.create(null),
                this._eventsCount = 0,
                this
            }
            if ("function" == typeof (t = i[e]))
                this.removeListener(e, t);
            else if (void 0 !== t)
                for (r = t.length - 1; r >= 0; r--)
                    this.removeListener(e, t[r]);
            return this
        }
        ,
        Ro.prototype.listeners = function(e) {
            return Uo(this, e, !0)
        }
        ,
        Ro.prototype.rawListeners = function(e) {
            return Uo(this, e, !1)
        }
        ,
        Ro.listenerCount = function(e, t) {
            return "function" == typeof e.listenerCount ? e.listenerCount(t) : Ko.call(e, t)
        }
        ,
        Ro.prototype.listenerCount = Ko,
        Ro.prototype.eventNames = function() {
            return this._eventsCount > 0 ? So(this._events) : []
        }
        ;
        const $o = e=>e.split(":").slice(-3).join(":")
          , ko = e=>e.startsWith("localhost") ? `http://${e}` : `https://${e}`;
        var Bo = Object.defineProperty
          , qo = Object.defineProperties
          , Vo = Object.getOwnPropertyDescriptors
          , Fo = Object.getOwnPropertySymbols
          , Ho = Object.prototype.hasOwnProperty
          , Wo = Object.prototype.propertyIsEnumerable
          , Jo = (e,t,i)=>t in e ? Bo(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: i
        }) : e[t] = i
          , Go = (e,t)=>{
            for (var i in t || (t = {}))
                Ho.call(t, i) && Jo(e, i, t[i]);
            if (Fo)
                for (var i of Fo(t))
                    Wo.call(t, i) && Jo(e, i, t[i]);
            return e
        }
          , Yo = (e,t)=>qo(e, Vo(t))
          , Zo = (e,t,i)=>(Jo(e, "symbol" != typeof t ? t + "" : t, i),
        i);
        class Xo extends Fn {
            constructor(e) {
                super(e),
                Zo(this, "name", "notifyEngine"),
                Zo(this, "initialized", !1),
                Zo(this, "finishedInitialLoad", !1),
                Zo(this, "didDocMap", new Map),
                Zo(this, "init", (async()=>{
                    this.initialized || (this.registerRelayerEvents(),
                    this.client.core.pairing.register({
                        methods: Object.keys(kn)
                    }),
                    await this.watchLastWatchedAccountIfExists(),
                    this.initialized = !0)
                }
                )),
                Zo(this, "hasFinishedInitialLoad", (()=>this.finishedInitialLoad)),
                Zo(this, "prepareRegistration", (async({account: e, domain: t, allApps: i})=>{
                    const r = i ? zn : Mn;
                    return this.client.identityKeys.prepareRegistration({
                        accountId: e,
                        domain: t,
                        statement: r
                    })
                }
                )),
                Zo(this, "isRegistered", (({account: e, allApps: t, domain: i})=>!!this.client.identityKeys.isRegistered(e) && !this.checkIfIdentityIsStale(e, t ? zn : Mn, i))),
                Zo(this, "register", (async({registerParams: e, signature: t, signatureType: i})=>{
                    const r = await this.registerIdentity({
                        registerParams: e,
                        signature: t,
                        signatureType: i
                    })
                      , s = e.cacaoPayload.statement === zn
                      , n = e.cacaoPayload.domain
                      , o = $o(e.cacaoPayload.iss);
                    try {
                        await this.watchSubscriptions(o, n, s)
                    } catch (a) {
                        this.client.logger.error(`[Notify] Engine.register > watching subscriptions failed > ${a.message}`)
                    }
                    return r
                }
                )),
                Zo(this, "unregister", (async({account: e})=>{
                    try {
                        if (!(await this.client.identityKeys.hasIdentity({
                            account: e
                        })))
                            return;
                        if (this.client.watchedAccounts.keys.includes(e)) {
                            const t = this.client.watchedAccounts.get(e);
                            t && (this.client.logger.info(`[Notify] unregister > account ${t.account} was previously watched. Unsubscribing from watch topics`),
                            await this.client.core.relayer.subscriber.isSubscribed(t.resTopic) && await this.client.core.relayer.unsubscribe(t.resTopic),
                            t.lastWatched && (await this.client.watchedAccounts.update(t.account, {
                                lastWatched: !1
                            }),
                            this.client.logger.info(`[Notify] unregister > account ${t.account} was last to be watched. Unmarking as last watched`)))
                        }
                        for (const t of Object.values(this.getActiveSubscriptions({
                            account: e
                        })))
                            await this.client.core.relayer.unsubscribe(t.topic);
                        await this.client.identityKeys.unregisterIdentity({
                            account: e
                        }),
                        this.client.registrationData.keys.includes(e) && this.client.registrationData.delete(e, {
                            code: -1,
                            message: "Wallet was unregistered"
                        }),
                        this.client.logger.info(`Engine.unregister > Successfully unregistered account ${e}`)
                    } catch (Dn) {
                        this.client.logger.error(`[Notify] Engine.unregister > failed to unregister > ${Dn.message}`)
                    }
                }
                )),
                Zo(this, "subscribe", (async({appDomain: e, account: t})=>{
                    var i;
                    if (this.isInitialized(),
                    !this.client.identityKeys.isRegistered(t))
                        throw new Error(`Account ${t} is not registered.`);
                    const r = ko(e)
                      , {dappPublicKey: s, dappIdentityKey: n} = await this.resolveKeys(r)
                      , o = await this.resolveNotifyConfig(e);
                    this.client.logger.info(`[Notify] subscribe > publicKey for ${r} is: ${s}`);
                    const a = J(s)
                      , c = await this.client.core.crypto.generateKeyPair()
                      , h = await this.client.core.crypto.generateSharedKey(c, s)
                      , l = await this.client.identityKeys.getIdentity({
                        account: t
                    })
                      , u = Math.round(Date.now() / 1e3)
                      , d = u + kn.wc_notifySubscribe.req.ttl
                      , g = null != (i = o?.notificationTypes.map((e=>e.id)).join(" ")) ? i : ""
                      , p = {
                        iat: u,
                        exp: d,
                        iss: bn(l),
                        sub: mn(t),
                        aud: bn(n),
                        ksu: this.client.keyserverUrl,
                        scp: g,
                        act: "notify_subscription",
                        app: `${$n}${e}`
                    };
                    this.client.logger.info(`[Notify] subscribe > generating subscriptionAuth JWT for payload: ${JSON.stringify(p)}`);
                    const f = await this.generateSubscriptionAuth(t, p);
                    return this.client.logger.info(`[Notify] subscribe > generated subscriptionAuth JWT: ${f}`),
                    await this.client.core.relayer.subscribe(h),
                    this.client.logger.info(`[Notify] subscribe > subscribed to responseTopic ${h}`),
                    this.client.logger.info(`[Notify] subscribe > sending wc_notifySubscribe request on topic ${a}...`),
                    new Promise((e=>{
                        const t = i=>{
                            i.topic === h && (this.client.off("notify_subscription", t),
                            i.params.error ? e(!1) : e(!0))
                        }
                        ;
                        this.client.on("notify_subscription", t),
                        this.sendRequest(a, "wc_notifySubscribe", {
                            subscriptionAuth: f
                        }, {
                            type: k,
                            senderPublicKey: c,
                            receiverPublicKey: s
                        }).then((e=>{
                            this.client.logger.info({
                                action: "sendRequest",
                                method: "wc_notifySubscribe",
                                id: e,
                                topic: a,
                                subscriptionAuth: f,
                                params: {
                                    type: k,
                                    senderPublicKey: c,
                                    receiverPublicKey: s
                                }
                            })
                        }
                        ))
                    }
                    ))
                }
                )),
                Zo(this, "update", (async({topic: e, scope: t})=>{
                    let i;
                    this.isInitialized(),
                    this.client.logger.info(`[Notify] update > updating notify subscription for topic ${e} with new scope: ${JSON.stringify(t)}`);
                    try {
                        i = this.client.subscriptions.get(e)
                    } catch {
                        throw new Error(`update(): No subscription found to update for the given topic: ${e}`)
                    }
                    const r = await this.generateUpdateAuth({
                        subscription: i,
                        scope: t
                    });
                    return this.client.logger.info(`[Notify] update > generated updateAuth JWT: ${r}`),
                    new Promise(((t,i)=>{
                        const s = r=>{
                            r.topic === e && (this.client.off("notify_update", s),
                            r.params.error ? i(r.params.error) : t(!0))
                        }
                        ;
                        this.client.on("notify_update", s),
                        this.sendRequest(e, "wc_notifyUpdate", {
                            updateAuth: r
                        }).then((t=>{
                            this.client.logger.info({
                                action: "sendRequest",
                                method: "wc_notifyUpdate",
                                id: t,
                                topic: e,
                                updateAuth: r
                            })
                        }
                        ))
                    }
                    ))
                }
                )),
                Zo(this, "getNotificationHistory", (async({topic: e, limit: t, startingAfter: i})=>{
                    if (this.isInitialized(),
                    !this.client.subscriptions.keys.includes(e))
                        throw new Error(`No subscription with topic ${e} exists`);
                    const r = this.client.subscriptions.get(e)
                      , s = bn(await this.client.identityKeys.getIdentity({
                        account: r.account
                    }))
                      , n = Math.round(Date.now() / 1e3)
                      , o = n + kn.wc_notifyGetNotifications.req.ttl
                      , a = this.getCachedDappKey(r)
                      , c = ko(r.metadata.appDomain)
                      , {dappIdentityKey: h} = a ? {
                        dappIdentityKey: a
                    } : await this.resolveKeys(c)
                      , l = {
                        act: "notify_get_notifications",
                        aft: i ?? null,
                        iss: s,
                        ksu: this.client.keyserverUrl,
                        sub: mn(r.account),
                        iat: n,
                        exp: o,
                        aud: bn(h),
                        app: `${$n}${r.metadata.appDomain}`,
                        lmt: t ?? 50,
                        urf: !1
                    }
                      , u = await this.client.identityKeys.generateIdAuth(r.account, l);
                    return new Promise(((t,i)=>{
                        const r = s=>{
                            s.topic === e && (this.off("notify_get_notifications_response", r),
                            null === s.error ? t(s) : i(new Error(s.error)))
                        }
                        ;
                        this.on("notify_get_notifications_response", r),
                        setTimeout((()=>{
                            i(new Error("getNotificationHistory timed out waiting for a response"))
                        }
                        ), 1e3 * R.FIVE_MINUTES),
                        this.sendRequest(e, "wc_notifyGetNotifications", {
                            auth: u
                        })
                    }
                    ))
                }
                )),
                Zo(this, "decryptMessage", (async({topic: e, encryptedMessage: t})=>{
                    this.isInitialized();
                    try {
                        const i = await this.client.core.crypto.decode(e, t);
                        if (!("params"in i))
                            throw new Error("Invalid message payload provided to `decryptMessage`: expected `params` key to be present.");
                        if (!("messageAuth"in i.params))
                            throw new Error("Invalid message payload provided to `decryptMessage`: expected `messageAuth` key to be present.");
                        return this.decodeAndValidateJwtAuth(i.params.messageAuth, "notify_message").msg
                    } catch (i) {
                        throw new Error(`Could not decode payload "${t}" on topic ${e}: ${i.message || i}`)
                    }
                }
                )),
                Zo(this, "deleteSubscription", (async({topic: e})=>{
                    this.isInitialized();
                    const t = await this.generateDeleteAuth({
                        topic: e
                    });
                    return new Promise(((i,r)=>{
                        const s = t=>{
                            t.topic === e && (this.client.off("notify_delete", s),
                            t.params.error ? r(t.params.error) : i())
                        }
                        ;
                        this.client.on("notify_delete", s),
                        this.sendRequest(e, "wc_notifyDelete", {
                            deleteAuth: t
                        }).then((()=>{
                            this.client.logger.info(`[Notify] Engine.delete > deleted notify subscription on topic ${e}`)
                        }
                        ))
                    }
                    ))
                }
                )),
                Zo(this, "deleteNotifyMessage", (({id: e})=>{
                    this.isInitialized();
                    const t = this.client.messages.getAll().find((t=>t.messages[e]));
                    if (!t)
                        throw new Error(`No message with id ${e} found in notify message history.`);
                    delete t.messages[e],
                    this.client.messages.update(t.topic, t)
                }
                )),
                Zo(this, "getActiveSubscriptions", (e=>{
                    this.isInitialized();
                    const t = this.client.subscriptions.getAll(e).map((e=>[e.topic, e]));
                    return Object.fromEntries(t)
                }
                )),
                Zo(this, "sendRequest", (async(e,t,i,r)=>{
                    const s = (a = t,
                    c = i,
                    {
                        id: h || xn(),
                        jsonrpc: "2.0",
                        method: a,
                        params: c
                    })
                      , n = await this.client.core.crypto.encode(e, s, r)
                      , o = kn[t].req;
                    var a, c, h;
                    return this.client.core.history.set(e, s),
                    await this.client.core.relayer.publish(e, n, o),
                    this.client.logger.info({
                        action: "sendRequest",
                        id: s.id,
                        messageHash: n
                    }),
                    s.id
                }
                )),
                Zo(this, "sendResult", (async(e,t,i,r)=>{
                    if (!this.client.core.history.keys.includes(e))
                        return this.client.logger.info(`[Notify] Engine.sendResult > ignoring result for unknown request id ${e} without history record on topic ${t}.`),
                        e;
                    const s = {
                        id: e,
                        jsonrpc: "2.0",
                        result: i
                    }
                      , n = await this.client.core.crypto.encode(t, s, r)
                      , o = await this.client.core.history.get(t, e)
                      , a = kn[o.request.method].res;
                    return await this.client.core.relayer.publish(t, n, a),
                    await this.client.core.history.resolve(s),
                    this.client.core.history.delete(t, s.id),
                    s.id
                }
                )),
                Zo(this, "sendError", (async(e,t,i,r)=>{
                    const s = {
                        id: e,
                        jsonrpc: "2.0",
                        error: An(i, c)
                    }
                      , n = await this.client.core.crypto.encode(t, s, r)
                      , o = await this.client.core.history.get(t, e)
                      , a = kn[o.request.method].res;
                    var c;
                    return await this.client.core.relayer.publish(t, n, a),
                    await this.client.core.history.resolve(s),
                    this.client.core.history.delete(t, s.id),
                    s.id
                }
                )),
                Zo(this, "onRelayEventRequest", (e=>{
                    const {topic: t, payload: i, publishedAt: r} = e
                      , s = i.method;
                    switch (s) {
                    case "wc_notifyMessage":
                        return this.onNotifyMessageRequest(t, i, r);
                    case "wc_notifySubscriptionsChanged":
                        return this.onNotifySubscriptionsChangedRequest(t, i);
                    default:
                        return this.client.logger.info(`[Notify] Unsupported request method ${s}`)
                    }
                }
                )),
                Zo(this, "onRelayEventResponse", (async e=>{
                    const {topic: t, payload: i} = e;
                    let r;
                    if (!this.client.core.history.keys.includes(i.id))
                        return void this.client.logger.info("[Notify] Engine.onRelayEventResponse > ignoring response for unknown request without history record.");
                    r = await this.client.core.history.get(t, i.id);
                    const s = r.request.method;
                    switch (s) {
                    case "wc_notifySubscribe":
                        return this.onNotifySubscribeResponse(t, i);
                    case "wc_notifyMessage":
                        return this.onNotifyMessageResponse(t, i);
                    case "wc_notifyDelete":
                        return this.onNotifyDeleteResponse(t, i);
                    case "wc_notifyUpdate":
                        return this.onNotifyUpdateResponse(t, i);
                    case "wc_notifyWatchSubscription":
                        return this.onNotifyWatchSubscriptionsResponse(t, i);
                    case "wc_notifyGetNotifications":
                        return this.onNotifyGetNotificationsResponse(t, i);
                    default:
                        return this.client.logger.info(`[Notify] Unsupported response method ${s}`)
                    }
                }
                )),
                Zo(this, "onNotifySubscribeResponse", (async(e,t)=>{
                    if (this.client.logger.info(`onNotifySubscribeResponse on response topic ${e}`),
                    Tn(t)) {
                        const {id: i} = t;
                        this.client.logger.info({
                            event: "onNotifySubscribeResponse",
                            id: i,
                            topic: e,
                            response: t
                        });
                        const r = await this.updateSubscriptionsUsingJwt(t.result.responseAuth, "notify_subscription_response")
                          , s = this.decodeAndValidateJwtAuth(t.result.responseAuth, "notify_subscription_response")
                          , n = r.find((e=>`did:web:${e.metadata.appDomain}` === s.app));
                        n ? this.client.emit("notify_subscription", {
                            id: t.id,
                            topic: e,
                            params: {
                                allSubscriptions: Object.values(this.client.getActiveSubscriptions({
                                    account: n.account
                                })),
                                subscription: n
                            }
                        }) : this.client.emit("notify_subscription", {
                            id: t.id,
                            topic: e,
                            params: {
                                error: {
                                    code: -1,
                                    message: "Subscription not found"
                                }
                            }
                        }),
                        this.client.emit("notify_subscription", {
                            id: t.id,
                            topic: e,
                            params: {}
                        })
                    } else
                        Nn(t) && this.client.emit("notify_subscription", {
                            id: t.id,
                            topic: e,
                            params: {
                                error: t.error
                            }
                        })
                }
                )),
                Zo(this, "onNotifyMessageRequest", (async(e,t)=>{
                    let i;
                    this.client.logger.info({
                        event: "Engine.onNotifyMessageRequest",
                        topic: e,
                        payload: t
                    });
                    try {
                        i = this.decodeAndValidateJwtAuth(t.params.messageAuth, "notify_message")
                    } catch (d) {
                        return this.client.logger.error(`[Notify] Engine.onNotifyMessageRequest > decoding/validating messageAuth failed > ${d.message}`),
                        void (await this.sendError(t.id, e, d))
                    }
                    this.client.messages.keys.some((t=>t === e)) || await this.client.messages.set(e, {
                        messages: {},
                        topic: e
                    });
                    const r = this.client.messages.get(e).messages;
                    if (Object.values(r).some((e=>e.message.id === i.msg.id)))
                        this.client.logger.warn(`[Notify] Message with id ${i.msg.id} already received. Ignoring.`);
                    else {
                        await this.client.messages.update(e, {
                            messages: Yo(Go({}, r), {
                                [t.id]: {
                                    id: t.id,
                                    topic: e,
                                    message: i.msg,
                                    publishedAt: 1e3 * i.iat
                                }
                            })
                        });
                        try {
                            const i = await this.generateMessageResponseAuth({
                                topic: e
                            });
                            this.client.logger.info(`[Notify] Engine.onNotifyMessageRequest > generated responseAuth JWT: ${i}`),
                            await this.sendResult(t.id, e, {
                                responseAuth: i
                            })
                        } catch (d) {
                            this.client.logger.error(`[Notify] Engine.onNotifyMessageRequest > generating responseAuth failed: ${d.message}`),
                            await this.sendError(t.id, e, {
                                code: -1,
                                message: d.message || d
                            })
                        }
                        this.client.emit("notify_message", {
                            id: t.id,
                            topic: e,
                            params: {
                                message: i.msg
                            }
                        })
                    }
                }
                )),
                Zo(this, "onNotifyMessageResponse", (async(e,t)=>{
                    Tn(t) ? this.client.logger.info("[Notify] Engine.onNotifyMessageResponse > result:", e, t) : Nn(t) && this.client.logger.error("[Notify] Engine.onNotifyMessageResponse > error:", e, t.error)
                }
                )),
                Zo(this, "onNotifyDeleteResponse", (async(e,t)=>{
                    Tn(t) ? (this.client.logger.info("[Notify] Engine.onNotifyDeleteResponse > result:", e, t),
                    await this.updateSubscriptionsUsingJwt(t.result.responseAuth, "notify_delete_response"),
                    this.client.emit("notify_delete", {
                        id: t.id,
                        topic: e,
                        params: {}
                    })) : Nn(t) && (this.client.logger.error("[Notify] Engine.onNotifyDeleteResponse > error:", e, t.error),
                    this.client.emit("notify_delete", {
                        id: t.id,
                        topic: e,
                        params: {
                            error: t.error
                        }
                    }))
                }
                )),
                Zo(this, "onNotifyGetNotificationsResponse", (async(e,t)=>{
                    var i, r;
                    if (Tn(t)) {
                        this.client.logger.info("[Notify] Engine.onNotifyGetNotificationsResponse > result:", e, t);
                        const s = this.decodeAndValidateJwtAuth(t.result.auth, "notify_get_notifications_response")
                          , n = s.nfs.map((e=>({
                            body: e.body,
                            id: e.id,
                            sentAt: e.sent_at,
                            title: e.title,
                            url: e.url || null,
                            type: e.type
                        })));
                        this.emit("notify_get_notifications_response", {
                            topic: e,
                            hasMore: null != (i = s.mre) && i,
                            hasMoreUnread: null != (r = s.mur) && r,
                            error: null,
                            notifications: n
                        })
                    } else
                        Nn(t) && (this.client.logger.error("[Notify] Engine.onNotifyGetNotificationsResponse  > error:", e, t.error),
                        this.emit("notify_get_notifications_response", {
                            topic: e,
                            error: t.error.message
                        }))
                }
                )),
                Zo(this, "onNotifyWatchSubscriptionsResponse", (async(e,t)=>{
                    if (this.client.logger.info("onNotifyWatchSubscriptionsResponse", e, t),
                    Tn(t)) {
                        const i = await this.updateSubscriptionsUsingJwt(t.result.responseAuth, "notify_watch_subscriptions_response");
                        this.client.logger.info({
                            event: "notify_subscriptions_changed",
                            topic: e,
                            id: t.id,
                            subscriptions: i
                        }),
                        this.finishedInitialLoad = !0,
                        this.client.emit("notify_subscriptions_changed", {
                            id: t.id,
                            topic: e,
                            params: {
                                subscriptions: i
                            }
                        })
                    } else
                        Nn(t) && (this.finishedInitialLoad = !0,
                        this.client.logger.error({
                            event: "onNotifyWatchSubscriptionsResponse",
                            topic: e,
                            error: t.error
                        }))
                }
                )),
                Zo(this, "onNotifySubscriptionsChangedRequest", (async(e,t)=>{
                    this.client.logger.info("onNotifySubscriptionsChangedRequest", e, t);
                    const i = await this.updateSubscriptionsUsingJwt(t.params.subscriptionsChangedAuth, "notify_subscriptions_changed");
                    this.client.logger.info({
                        event: "notify_subscriptions_changed",
                        topic: e,
                        id: t.id,
                        subscriptions: i
                    }),
                    this.client.emit("notify_subscriptions_changed", {
                        id: t.id,
                        topic: e,
                        params: {
                            subscriptions: i
                        }
                    })
                }
                )),
                Zo(this, "onNotifyUpdateResponse", (async(e,t)=>{
                    if (Tn(t)) {
                        this.client.logger.info({
                            event: "onNotifyUpdateResponse",
                            topic: e,
                            result: t
                        });
                        const i = await this.updateSubscriptionsUsingJwt(t.result.responseAuth, "notify_update_response")
                          , r = this.decodeAndValidateJwtAuth(t.result.responseAuth, "notify_update_response")
                          , s = i.find((e=>`did:web:${e.metadata.appDomain}` === r.app));
                        s ? this.client.emit("notify_update", {
                            id: t.id,
                            topic: e,
                            params: {
                                subscription: s,
                                allSubscriptions: Object.values(this.client.getActiveSubscriptions({
                                    account: s.account
                                }))
                            }
                        }) : this.client.events.emit("notify_update", {
                            id: t.id,
                            topic: e,
                            params: {
                                error: {
                                    code: -1,
                                    message: "Subscription not found"
                                }
                            }
                        })
                    } else
                        Nn(t) && (this.client.logger.error({
                            event: "onNotifyUpdateResponse",
                            topic: e,
                            error: t.error
                        }),
                        this.client.emit("notify_update", {
                            id: t.id,
                            topic: e,
                            params: {
                                error: t.error
                            }
                        }))
                }
                )),
                Zo(this, "on", ((e,t)=>this.client.events.on(e, t))),
                Zo(this, "once", ((e,t)=>this.client.events.once(e, t))),
                Zo(this, "off", ((e,t)=>this.client.events.off(e, t))),
                Zo(this, "emit", ((e,t)=>this.client.events.emit(e, t))),
                Zo(this, "updateSubscriptionsUsingJwt", (async(e,t)=>{
                    const i = this.decodeAndValidateJwtAuth(e, t);
                    this.client.logger.info("updateSubscriptionsUsingJwt > claims", i);
                    const r = i.sbs.map((e=>J(e.symKey)));
                    for (const o of this.client.subscriptions.getAll().map((e=>e.topic)))
                        r.includes(o) || this.client.subscriptions.keys.includes(o) && this.client.subscriptions.get(o).account === i.sub.split(":").slice(2).join(":") && (this.client.logger.info(`[Notify] updateSubscriptionsUsingJwt > cleanupSubscription on topic ${o}`),
                        await this.cleanupSubscription(o));
                    const s = i.sbs.map((e=>async()=>{
                        var t, i;
                        const r = J(e.symKey)
                          , s = await this.resolveNotifyConfig(e.appDomain)
                          , n = s ? this.generateScopeMap(s, e) : {};
                        if (await this.client.subscriptions.set(r, {
                            account: e.account,
                            expiry: e.expiry,
                            topic: r,
                            scope: n,
                            symKey: e.symKey,
                            appAuthenticationKey: e.appAuthenticationKey,
                            metadata: {
                                name: null != (t = s?.name) ? t : e.appDomain,
                                description: null != (i = s?.description) ? i : e.appDomain,
                                icons: null != s && s.image_url ? Object.values(s.image_url) : [],
                                appDomain: e.appDomain
                            },
                            relay: {
                                protocol: "irn"
                            }
                        }),
                        await this.client.core.crypto.setSymKey(e.symKey, r),
                        !this.client.core.relayer.subscriber.topics.includes(r))
                            try {
                                await this.client.core.relayer.subscribe(r)
                            } catch (b) {
                                this.client.logger.error("Failed to subscribe from claims.sbs", b)
                            }
                        this.client.messages.keys.includes(r) || await this.client.messages.set(r, {
                            topic: r,
                            messages: {}
                        })
                    }
                    ))
                      , n = i.sbs.filter((e=>!this.client.subscriptions.keys.includes(J(e.symKey))));
                    this.client.logger.info("updateSubscriptionsUsingJwt > newSubscriptions", n);
                    for (const o of s)
                        await o();
                    return this.client.subscriptions.getAll()
                }
                )),
                Zo(this, "cleanupSubscription", (async e=>{
                    this.client.logger.info(`[Notify] cleanupSubscription > topic: ${e}`),
                    await this.client.core.relayer.unsubscribe(e),
                    await Promise.all([this.client.subscriptions.delete(e, {
                        code: -1,
                        message: "Deleted subscription."
                    }), this.client.messages.delete(e, {
                        code: -1,
                        message: "Deleted subscription."
                    }), this.client.core.crypto.deleteSymKey(e)])
                }
                )),
                Zo(this, "generateSubscriptionAuth", (async(e,t)=>this.client.identityKeys.generateIdAuth(e, t))),
                Zo(this, "generateMessageResponseAuth", (async({topic: e})=>{
                    try {
                        const t = this.client.subscriptions.get(e)
                          , i = await this.client.identityKeys.getIdentity({
                            account: t.account
                        })
                          , r = ko(t.metadata.appDomain)
                          , s = this.getCachedDappKey(t)
                          , {dappIdentityKey: n} = s ? {
                            dappIdentityKey: s
                        } : await this.resolveKeys(r)
                          , o = Math.round(Date.now() / 1e3)
                          , a = {
                            act: "notify_message_response",
                            iat: o,
                            exp: o + kn.wc_notifyMessage.res.ttl,
                            iss: bn(i),
                            aud: bn(n),
                            sub: mn(t.account),
                            app: `${$n}${t.metadata.appDomain}`,
                            ksu: this.client.keyserverUrl
                        };
                        return await this.client.identityKeys.generateIdAuth(t.account, a)
                    } catch (Dn) {
                        throw new Error(`generateMessageResponseAuth failed for message on topic ${e}: ${Dn.message || Dn}`)
                    }
                }
                )),
                Zo(this, "generateDeleteAuth", (async({topic: e})=>{
                    try {
                        const t = this.client.subscriptions.get(e)
                          , i = await this.client.identityKeys.getIdentity({
                            account: t.account
                        })
                          , r = ko(t.metadata.appDomain)
                          , s = this.getCachedDappKey(t)
                          , {dappIdentityKey: n} = s ? {
                            dappIdentityKey: s
                        } : await this.resolveKeys(r)
                          , o = Math.round(Date.now() / 1e3)
                          , a = {
                            act: "notify_delete",
                            iat: o,
                            exp: o + kn.wc_notifyDelete.req.ttl,
                            iss: bn(i),
                            aud: bn(n),
                            sub: mn(t.account),
                            ksu: this.client.keyserverUrl,
                            app: `${$n}${t.metadata.appDomain}`
                        };
                        return await this.client.identityKeys.generateIdAuth(t.account, a)
                    } catch (Dn) {
                        throw new Error(`generateDeleteAuth failed for topic ${e}: ${Dn.message || Dn}`)
                    }
                }
                )),
                Zo(this, "generateUpdateAuth", (async({subscription: e, scope: t})=>{
                    try {
                        const i = await this.client.identityKeys.getIdentity({
                            account: e.account
                        })
                          , r = ko(e.metadata.appDomain)
                          , s = this.getCachedDappKey(e)
                          , {dappIdentityKey: n} = s ? {
                            dappIdentityKey: s
                        } : await this.resolveKeys(r)
                          , o = Math.round(Date.now() / 1e3)
                          , a = {
                            act: "notify_update",
                            iat: o,
                            exp: o + kn.wc_notifyUpdate.req.ttl,
                            iss: bn(i),
                            aud: bn(n),
                            sub: mn(e.account),
                            app: `${$n}${e.metadata.appDomain}`,
                            ksu: this.client.keyserverUrl,
                            scp: t.join(" ")
                        };
                        return await this.client.identityKeys.generateIdAuth(e.account, a)
                    } catch (i) {
                        throw new Error(`generateUpdateAuth failed for topic ${e.topic}: ${i.message || i}`)
                    }
                }
                )),
                Zo(this, "decodeAndValidateJwtAuth", ((e,t)=>{
                    let i;
                    try {
                        i = Un(e)
                    } catch (Ln) {
                        throw this.client.logger.error(`[Notify] Engine.onNotifyMessageRequest > Failed to decode messageAuth JWT: ${e}`),
                        new Error(Ln.message)
                    }
                    if (i.act !== t)
                        throw new Error(`Invalid messageAuth JWT act claim: ${i.act}. Expected "${t}"`);
                    return i
                }
                )),
                Zo(this, "registerIdentity", (async({signature: e, signatureType: t, registerParams: i})=>{
                    const r = $o(i.cacaoPayload.iss)
                      , s = i.cacaoPayload.statement === zn;
                    if (this.client.identityKeys.isRegistered(r) && this.checkIfIdentityIsStale(r, s ? zn : Mn, i.cacaoPayload.domain))
                        throw new Error("Failed to register, user has an existing stale identity. Unregister using the unregister method.");
                    const n = await this.client.identityKeys.registerIdentity({
                        signature: {
                            s: e,
                            t: t ?? "eip191"
                        },
                        registerParams: i
                    })
                      , {statement: o, domain: a} = i.cacaoPayload;
                    if (!o)
                        throw new Error(`Failed to register. Expected statement to be string, instead got: ${o}`);
                    return this.client.registrationData.set(r, {
                        account: r,
                        domain: a,
                        statement: o
                    }),
                    n
                }
                )),
                Zo(this, "getCachedDappKey", (e=>e.appAuthenticationKey ? Kn.from((e=>{
                    var t;
                    const i = null !== (t = e.split(yn).pop()) && void 0 !== t ? t : ""
                      , r = Zs.bytesToHex(nn.base58btc.decode(i));
                    if (!r.startsWith("ed01"))
                        throw Error("Invalid Ed25519 key");
                    return Zs.hexToBytes(r.substring(4))
                }
                )(e.appAuthenticationKey)).toString("hex") : null)),
                Zo(this, "resolveKeys", (async e=>{
                    let t;
                    if (this.client.logger.debug("didDocMap: ", this.didDocMap),
                    this.didDocMap.has(e))
                        t = this.didDocMap.get(e);
                    else
                        try {
                            t = (await pn.Z.get(`${e}/.well-known/did.json`)).data,
                            this.didDocMap.set(e, t)
                        } catch (f) {
                            throw new Error(`Failed to fetch dapp's DID doc from ${e}/.well-known/did.json. Error: ${f.message}`)
                        }
                    const i = t.verificationMethod.find((e=>e.id === t.keyAgreement[0]))
                      , r = t.verificationMethod.find((e=>e.id === t.authentication[0]));
                    if (!i)
                        throw new Error(`No keyAgreement verification method found in DID doc for ${e}`);
                    if (!r)
                        throw new Error(`No authentication verification method found in DID doc for ${e}`);
                    const {publicKeyJwk: s} = i
                      , n = s.x.replace(/-/g, "+").replace(/_/g, "/")
                      , o = Kn.from(n, "base64").toString("hex")
                      , {publicKeyJwk: a} = r
                      , c = a.x.replace(/-/g, "+").replace(/_/g, "/")
                      , h = Kn.from(c, "base64").toString("hex");
                    return this.client.logger.info(`[Notify] resolveKeys > publicKey for ${e} is: ${o}`),
                    {
                        dappPublicKey: o,
                        dappIdentityKey: h
                    }
                }
                )),
                Zo(this, "resolveNotifyConfig", (async e=>{
                    const t = `https://explorer-api.walletconnect.com/w3i/v1/notify-config?projectId=${this.client.core.projectId}&appDomain=${e}`;
                    try {
                        const e = (await pn.Z.get(t)).data.data;
                        return this.client.logger.info(`[Notify] subscribe > got notify config: ${JSON.stringify(e)}`),
                        e
                    } catch (i) {
                        return this.client.logger.error(`Failed to fetch dapp's Notify config from ${t}. Error: ${i.message}`),
                        null
                    }
                }
                )),
                Zo(this, "generateScopeMap", ((e,t)=>Object.fromEntries(e.notificationTypes.map((e=>[e.id, {
                    imageUrls: e.imageUrls,
                    description: e.description,
                    name: e.name,
                    id: e.id,
                    enabled: t.scope.includes(e.id)
                }]))))),
                Zo(this, "checkIfIdentityIsStale", ((e,t,i)=>{
                    if (!this.client.registrationData.keys.includes(e))
                        return !0;
                    const r = this.client.registrationData.get(e);
                    return r.statement !== t || r.domain !== i
                }
                )),
                Zo(this, "watchLastWatchedAccountIfExists", (async()=>{
                    const e = this.client.watchedAccounts.getAll().find((e=>e.lastWatched));
                    if (e) {
                        const {account: t, appDomain: i, allApps: r} = e;
                        try {
                            if (!(await this.client.identityKeys.getIdentity({
                                account: t
                            })))
                                throw new Error(`No identity key found for lastWatchedAccount ${t}`)
                        } catch (d) {
                            return void this.client.logger.error(`[Notify] Engine > watchLastWatchedAccountIfExists failed: ${d}`)
                        }
                        try {
                            await this.watchSubscriptions(t, i, r)
                        } catch (d) {
                            this.client.logger.error(`[Notify] Engine.watchLastWatchedAccountIfExists > Failed to watch subscriptions for account ${t} > ${d.message}`)
                        }
                    } else
                        this.finishedInitialLoad = !0
                }
                ))
            }
            registerRelayerEvents() {
                this.client.core.relayer.on(Ui, (async e=>{
                    const {topic: t, message: i, publishedAt: r} = e
                      , s = await this.client.core.crypto.decode(t, i);
                    var n;
                    Rn(n = s) && "method"in n ? (this.client.core.history.set(t, s),
                    this.onRelayEventRequest({
                        topic: t,
                        payload: s,
                        publishedAt: r
                    })) : function(e) {
                        return Rn(e) && (Tn(e) || Nn(e))
                    }(s) && (await this.client.core.history.resolve(s),
                    await this.onRelayEventResponse({
                        topic: t,
                        payload: s,
                        publishedAt: r
                    }),
                    this.client.core.history.delete(t, s.id))
                }
                ))
            }
            isInitialized() {
                if (!this.initialized) {
                    const {message: e} = Ue("NOT_INITIALIZED", this.name);
                    throw new Error(e)
                }
            }
            async getNotifyServerWatchTopic(e) {
                return J(e)
            }
            async watchSubscriptions(e, t, i) {
                const r = await this.resolveKeys(this.client.notifyServerUrl)
                  , s = await this.getNotifyServerWatchTopic(r.dappPublicKey);
                this.client.logger.info("watchSubscriptions >", "notifyServerWatchReqTopic >", s);
                const n = Math.round(Date.now() / 1e3)
                  , o = n + kn.wc_notifyWatchSubscription.res.ttl;
                let a, c;
                if (this.client.watchedAccounts.keys.includes(e)) {
                    const t = this.client.watchedAccounts.get(e);
                    a = t.publicKeyY,
                    c = t.privateKeyY
                } else
                    a = await this.client.core.crypto.generateKeyPair(),
                    c = this.client.core.crypto.keychain.get(a);
                const h = J(W(c, r.dappPublicKey));
                await this.client.core.relayer.subscriber.subscribe(h);
                const l = {
                    act: "notify_watch_subscriptions",
                    iss: bn(await this.client.identityKeys.getIdentity({
                        account: e
                    })),
                    exp: o,
                    iat: n,
                    aud: bn(r.dappIdentityKey),
                    ksu: this.client.keyserverUrl,
                    sub: mn(e),
                    app: i ? null : `did:web:${t}`
                }
                  , u = await this.client.identityKeys.generateIdAuth(e, l);
                this.client.logger.info("watchSubscriptions >", "subscriptionAuth >", u);
                const d = await this.sendRequest(s, "wc_notifyWatchSubscription", {
                    watchSubscriptionsAuth: u
                }, {
                    type: k,
                    senderPublicKey: a,
                    receiverPublicKey: r.dappPublicKey
                })
                  , g = this.client.watchedAccounts.getAll().filter((e=>e.lastWatched));
                for (const p of g)
                    await this.client.watchedAccounts.update(p.account, {
                        lastWatched: !1
                    });
                await this.client.watchedAccounts.set(e, {
                    appDomain: t,
                    account: e,
                    allApps: i,
                    lastWatched: !0,
                    privateKeyY: c,
                    publicKeyY: a,
                    resTopic: h
                }),
                this.client.logger.info("watchSubscriptions >", "requestId >", d)
            }
        }
        var Qo = Object.defineProperty
          , ea = (e,t,i)=>(((e,t,i)=>{
            t in e ? Qo(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i
            }) : e[t] = i
        }
        )(e, "symbol" != typeof t ? t + "" : t, i),
        i);
        class ta extends Hn {
            constructor(e) {
                var t, i, r;
                super(e),
                ea(this, "protocol", "wc"),
                ea(this, "version", 1),
                ea(this, "name", Bn),
                ea(this, "keyserverUrl"),
                ea(this, "notifyServerUrl"),
                ea(this, "core"),
                ea(this, "logger"),
                ea(this, "events", new Po.exports.EventEmitter),
                ea(this, "engine"),
                ea(this, "subscriptions"),
                ea(this, "messages"),
                ea(this, "watchedAccounts"),
                ea(this, "registrationData"),
                ea(this, "identityKeys"),
                ea(this, "hasFinishedInitialLoad", (()=>this.engine.hasFinishedInitialLoad())),
                ea(this, "subscribe", (async e=>{
                    try {
                        return await this.engine.subscribe(e)
                    } catch (t) {
                        throw this.logger.error(t.message),
                        t
                    }
                }
                )),
                ea(this, "update", (async e=>{
                    try {
                        return await this.engine.update(e)
                    } catch (t) {
                        throw this.logger.error(t.message),
                        t
                    }
                }
                )),
                ea(this, "decryptMessage", (async e=>{
                    try {
                        return await this.engine.decryptMessage(e)
                    } catch (t) {
                        throw this.logger.error(t.message),
                        t
                    }
                }
                )),
                ea(this, "getNotificationHistory", (e=>{
                    try {
                        return this.engine.getNotificationHistory(e)
                    } catch (t) {
                        throw this.logger.error(t.message),
                        t
                    }
                }
                )),
                ea(this, "getActiveSubscriptions", (e=>{
                    try {
                        return this.engine.getActiveSubscriptions(e)
                    } catch (t) {
                        throw this.logger.error(t.message),
                        t
                    }
                }
                )),
                ea(this, "deleteSubscription", (async e=>{
                    try {
                        return await this.engine.deleteSubscription(e)
                    } catch (t) {
                        throw this.logger.error(t.message),
                        t
                    }
                }
                )),
                ea(this, "prepareRegistration", (e=>{
                    try {
                        return this.engine.prepareRegistration(e)
                    } catch (t) {
                        throw this.logger.error(t.message),
                        t
                    }
                }
                )),
                ea(this, "isRegistered", (e=>{
                    try {
                        return this.engine.isRegistered(e)
                    } catch (t) {
                        throw this.logger.error(t.message),
                        t
                    }
                }
                )),
                ea(this, "register", (async e=>{
                    try {
                        return await this.engine.register(e)
                    } catch (t) {
                        throw this.logger.error(t.message),
                        t
                    }
                }
                )),
                ea(this, "unregister", (async e=>{
                    try {
                        return await this.engine.unregister(e)
                    } catch (t) {
                        throw this.logger.error(t.message),
                        t
                    }
                }
                )),
                ea(this, "emit", ((e,t)=>this.events.emit(e, t))),
                ea(this, "on", ((e,t)=>this.events.on(e, t))),
                ea(this, "once", ((e,t)=>this.events.once(e, t))),
                ea(this, "off", ((e,t)=>this.events.off(e, t))),
                ea(this, "removeListener", ((e,t)=>this.events.removeListener(e, t))),
                this.name = e.name || Bn;
                const s = typeof e.logger < "u" && "string" != typeof e.logger ? e.logger : so(Wn.getDefaultLoggerOptions({
                    level: e.logger || "error"
                }));
                this.keyserverUrl = null != (t = e?.keyserverUrl) ? t : Vn,
                this.notifyServerUrl = "https://notify.walletconnect.com",
                this.core = e.core || new is(e),
                this.logger = Wn.generateChildLogger(s, this.name),
                this.registrationData = new qr(this.core,this.logger,"signedStatements",qn,(({account: e})=>e)),
                this.subscriptions = new qr(this.core,this.logger,"subscriptions",qn),
                this.messages = new qr(this.core,this.logger,"messages",qn),
                this.watchedAccounts = new qr(this.core,this.logger,"watchedAccounts",qn,(({account: e})=>e));
                const n = null != (i = e.projectId) ? i : this.core.projectId;
                if (!n)
                    throw new Error("Project ID is required for notify client");
                this.identityKeys = null != (r = e.identityKeys) ? r : new fn(this.core,n,this.keyserverUrl),
                this.engine = new Xo(this)
            }
            static async init(e) {
                const t = new ta(e);
                return await t.initialize(),
                t
            }
            get context() {
                return Wn.getLoggerContext(this.logger)
            }
            get pairing() {
                return this.core.pairing.pairings
            }
            async initialize() {
                this.logger.trace("Initialized");
                try {
                    await this.core.start(),
                    await this.subscriptions.init(),
                    await this.messages.init(),
                    await this.registrationData.init(),
                    await this.identityKeys.init(),
                    await this.watchedAccounts.init(),
                    await this.engine.init(),
                    this.logger.info("NotifyClient Initialization Success")
                } catch (l) {
                    throw this.logger.info("NotifyClient Initialization Failure"),
                    this.logger.error(l.message),
                    l
                }
            }
        }
        var ia = i(30673);
        Symbol();
        var ra = i(6961)
          , sa = i(83576);
        const {use: na} = r
          , {useSyncExternalStore: oa} = sa
          , aa = new WeakMap;
        function ca(e, t) {
            const i = null == t ? void 0 : t.sync
              , s = (0,
            r.useRef)()
              , n = (0,
            r.useRef)();
            let o = !0;
            const a = oa((0,
            r.useCallback)((t=>{
                const r = (0,
                ia.Ld)(e, t, i);
                return t(),
                r
            }
            ), [e, i]), (()=>{
                const t = (0,
                ia.CO)(e, na);
                try {
                    if (!o && s.current && n.current && !(0,
                    ra.ln)(s.current, t, n.current, new WeakMap))
                        return s.current
                } catch (Cn) {}
                return t
            }
            ), (()=>(0,
            ia.CO)(e, na)));
            o = !1;
            const c = new WeakMap;
            (0,
            r.useEffect)((()=>{
                s.current = a,
                n.current = c
            }
            )),
            ((e,t)=>{
                const i = (0,
                r.useRef)();
                (0,
                r.useEffect)((()=>{
                    i.current = (0,
                    ra.h8)(e, t, !0)
                }
                )),
                (0,
                r.useDebugValue)(i.current)
            }
            )(a, c);
            const h = (0,
            r.useMemo)((()=>new WeakMap), []);
            return (0,
            ra.DM)(a, c, h, aa)
        }
        var ha = (e,t,i)=>new Promise(((r,s)=>{
            const n = setTimeout((()=>{
                s(new Error(`${i} timed out after ${t} milliseconds`))
            }
            ), t);
            e.then(r).catch(s).finally((()=>clearTimeout(n)))
        }
        ))
          , la = async(e,t,i)=>{
            const {result: r} = await (async(e,t,i)=>{
                const r = i(t);
                try {
                    return await fetch(r, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            jsonrpc: "2.0",
                            method: "eth_getCode",
                            params: [e, "latest"],
                            id: Date.now()
                        })
                    }).then((e=>e.json()))
                } catch (Cn) {
                    throw new Error(`Failed to fetch bytecode of address ${e} from RPC ${r}. Error: ${Cn.message}`)
                }
            }
            )(e, t, i);
            return !(!r || "0x" === r || "0x0" === r || "0x00" === r)
        }
          , ua = class e {
            constructor(e, t, i, r, s) {
                this.notifyClient = e,
                this.domain = t,
                this.allApps = i,
                this.rpcUrlBuilder = r,
                this.projectId = s
            }
            getRequiredAccountParam(t) {
                return t || (e.clientState.account ? e.clientState.account : void 0)
            }
            attachEventListeners() {
                const t = ()=>{
                    e.subscriptionState.subscriptions = this.notifyClient.subscriptions.getAll()
                }
                ;
                this.notifyClient.on("notify_delete", t),
                this.notifyClient.on("notify_subscription", t),
                this.notifyClient.on("notify_update", t),
                this.notifyClient.on("notify_subscriptions_changed", t),
                (0,
                ia.Ld)(e.clientState, (()=>{
                    t()
                }
                ));
                const i = setInterval((()=>{
                    this.notifyClient.hasFinishedInitialLoad() && (t(),
                    clearInterval(i))
                }
                ), 100)
            }
            static getInstance() {
                if (e.clientState.isReady && e.instance)
                    return e.instance;
                throw new Error("Client not ready. getInstance can only be called when client is ready. Consider using getIsReady")
            }
            static getIsReady() {
                return e.clientState.isReady
            }
            static watchIsReady(t) {
                return t(e.clientState.isReady),
                (0,
                ia.Ld)(e.clientState, (()=>{
                    t(e.clientState.isReady)
                }
                ))
            }
            async setAccount(t) {
                if (await this.getAccountIsRegistered(t)) {
                    const i = await this.notifyClient.identityKeys.getIdentity({
                        account: t
                    });
                    e.clientState.registration = {
                        account: t,
                        identity: i
                    },
                    e.clientState.account = t
                } else
                    e.clientState.registration = void 0,
                    e.clientState.account = t
            }
            getAccount() {
                return e.clientState.account
            }
            watchAccount(t) {
                return t(e.clientState.account),
                (0,
                ia.Ld)(e.clientState, (()=>t(e.clientState.account)))
            }
            async getAccountIsRegistered(e) {
                try {
                    return this.notifyClient.isRegistered({
                        account: e,
                        allApps: this.allApps,
                        domain: this.domain
                    })
                } catch (Cn) {
                    return !1
                }
            }
            watchAccountIsRegistered(t, i) {
                return this.getAccountIsRegistered(t).then(i),
                (0,
                ia.Ld)(e.clientState, (async()=>{
                    i(await this.getAccountIsRegistered(t))
                }
                ))
            }
            static async init(t) {
                if (e.clientState.initting)
                    return new Promise((t=>{
                        (0,
                        ia.Ld)(e.clientState, (()=>{
                            e.clientState.isReady || t(e.instance)
                        }
                        ))
                    }
                    ));
                if (e.instance)
                    return e.instance;
                e.clientState.initting = !0;
                const i = {
                    core: new is({
                        customStoragePrefix: "w3i-core",
                        projectId: t.projectId
                    }),
                    keyserverUrl: Vn,
                    projectId: t.projectId,
                    logger: t.logLevel ?? "error"
                }
                  , r = await ta.init(i);
                return e.instance = new e(r,t.domain ?? window.location.host,t.allApps ?? !1,t.rpcUrlBuilder ?? (e=>`https://rpc.walletconnect.com/v1/?projectId=${t.projectId}&chainId=${e}`),t.projectId),
                e.subscriptionState.subscriptions = r.subscriptions.getAll(),
                e.instance.attachEventListeners(),
                e.clientState.initting = !1,
                e.clientState.isReady = !0,
                e.instance
            }
            getSubscription(t, i) {
                const r = this.getRequiredAccountParam(t)
                  , s = i ?? this.domain;
                if (!r)
                    return null;
                return e.subscriptionState.subscriptions.find((e=>{
                    const t = e.account === r
                      , i = e.metadata.appDomain === s;
                    return t && i
                }
                )) ?? null
            }
            getSubscriptions(t) {
                const i = this.getRequiredAccountParam(t);
                return i ? e.subscriptionState.subscriptions.filter((e=>e.account === i)) : []
            }
            watchSubscription(t, i, r) {
                return t(this.getSubscription(i, r)),
                (0,
                ia.Ld)(e.subscriptionState, (()=>{
                    t(this.getSubscription(i, r))
                }
                ))
            }
            watchSubscriptions(t, i) {
                return t(this.getSubscriptions(i)),
                (0,
                ia.Ld)(e.subscriptionState, (()=>{
                    t(this.getSubscriptions(i))
                }
                ))
            }
            async update(t, i, r) {
                if (!this.getRequiredAccountParam(i))
                    return !1;
                const s = this.getSubscription(i, r);
                return !!s && ha(this.notifyClient.update({
                    topic: s.topic,
                    scope: t
                }), e.maxTimeout, "update")
            }
            getNotificationTypes(e, t) {
                if (!this.getRequiredAccountParam(e))
                    return {};
                const i = this.getSubscription(e, t);
                return i ? i.scope : {}
            }
            pageNotifications(e, t, i, r) {
                const s = (0,
                ia.sj)({
                    notifications: [],
                    hasMore: !1
                })
                  , n = function(e) {
                    const t = (0,
                    ia.sj)({
                        data: Array.from(new Set(e)),
                        has(e) {
                            return -1 !== this.data.indexOf(e)
                        },
                        add(e) {
                            let t = !1;
                            return "object" === typeof e && null !== e && (t = -1 !== this.data.indexOf((0,
                            ia.sj)(e))),
                            -1 !== this.data.indexOf(e) || t || this.data.push(e),
                            this
                        },
                        delete(e) {
                            const t = this.data.indexOf(e);
                            return -1 !== t && (this.data.splice(t, 1),
                            !0)
                        },
                        clear() {
                            this.data.splice(0)
                        },
                        get size() {
                            return this.data.length
                        },
                        forEach(e) {
                            this.data.forEach((t=>{
                                e(t, t, this)
                            }
                            ))
                        },
                        get[Symbol.toStringTag]() {
                            return "Set"
                        },
                        toJSON() {
                            return new Set(this.data)
                        },
                        [Symbol.iterator]() {
                            return this.data[Symbol.iterator]()
                        },
                        values() {
                            return this.data.values()
                        },
                        keys() {
                            return this.data.values()
                        },
                        entries() {
                            return new Set(this.data).entries()
                        }
                    });
                    return Object.defineProperties(t, {
                        data: {
                            enumerable: !1
                        },
                        size: {
                            enumerable: !1
                        },
                        toJSON: {
                            enumerable: !1
                        }
                    }),
                    Object.seal(t),
                    t
                }([])
                  , o = async()=>{
                    const t = (await this.getNotificationHistory(e, void 0, i, r)).notifications.shift();
                    t && !n.has(t.id) && (s.notifications = [t, ...s.notifications],
                    n.add(t.id))
                }
                ;
                this.notifyClient.on("notify_message", o);
                const a = this.getRequiredAccountParam(i)
                  , c = async()=>{
                    const i = s.notifications.length ? s.notifications[s.notifications.length - 1].id : void 0
                      , o = await this.getNotificationHistory(e, i, a, r ?? this.domain);
                    s.notifications = t ? [...s.notifications, ...o.notifications.filter((e=>!n.has(e.id)))] : o.notifications;
                    for (const e of o.notifications)
                        n.add(e.id);
                    s.hasMore = o.hasMore
                }
                ;
                return c(),
                e=>{
                    const t = (0,
                    ia.Ld)(s, (()=>{
                        e(s)
                    }
                    ));
                    return {
                        stopWatchingNotifications: ()=>{
                            this.notifyClient.off("notify_message", o),
                            t()
                        }
                        ,
                        data: s,
                        nextPage: c
                    }
                }
            }
            getNotificationHistory(t, i, r, s) {
                const n = this.getRequiredAccountParam(r);
                if (!n)
                    return Promise.reject("No account configured");
                const o = this.getSubscription(n, s ?? this.domain);
                if (!o)
                    return Promise.reject(`No sub found for account ${r} and domain ${s ?? this.domain}`);
                try {
                    return ha(this.notifyClient.getNotificationHistory({
                        topic: o.topic,
                        limit: t,
                        startingAfter: i
                    }), e.maxTimeout, "getNotificationHistory")
                } catch (Cn) {
                    return console.error("Failed to fetch messages", Cn),
                    Promise.reject({
                        hasMore: !1,
                        notifications: []
                    })
                }
            }
            prepareRegistration(t) {
                return ha(this.notifyClient.prepareRegistration({
                    account: t.account,
                    domain: this.domain,
                    allApps: this.allApps
                }), e.maxTimeout, "prepareRegistration")
            }
            async register(t) {
                try {
                    const i = t.registerParams.cacaoPayload.iss.split(":").slice(-3).join(":")
                      , [r,s,n] = i.split(":")
                      , o = this.notifyClient?.core?.projectId;
                    if (!o)
                        throw new Error("Project ID needs to be supplied");
                    const a = await la(n, `${r}:${s}`, this.rpcUrlBuilder)
                      , c = await ha(this.notifyClient.register({
                        registerParams: t.registerParams,
                        signature: t.signature,
                        signatureType: a ? "eip1271" : "eip191"
                    }), e.maxTimeout, "register");
                    return e.clientState.registration = {
                        account: i,
                        identity: c
                    },
                    e.clientState.account = i,
                    c
                } catch (Cn) {
                    throw new Error(`Failed to register: ${Cn.message}`)
                }
            }
            async unregister(t) {
                try {
                    await ha(this.notifyClient.unregister(t), e.maxTimeout, "unregister"),
                    e.clientState.registration = void 0
                } catch (Cn) {
                    throw new Error(`Failed to uregister: ${Cn.message}`)
                }
            }
            isSubscribedToDapp(e, t) {
                const i = this.getSubscription(e, t);
                return Boolean(i)
            }
            async subscribeToDapp(t, i) {
                const r = this.getRequiredAccountParam(t);
                r ? this.isSubscribedToDapp(r, i) || await ha(this.notifyClient.subscribe({
                    account: r,
                    appDomain: i ?? this.domain
                }), e.maxTimeout, "subscribe") : console.error("Failed to subscribe since no account has been set")
            }
            async unsubscribeFromDapp(t, i) {
                const r = this.getRequiredAccountParam(t);
                if (!r)
                    return void console.error("Failed to unsubscribe since no account has been set");
                const s = this.getSubscription(r, i);
                s && await ha(this.notifyClient.deleteSubscription({
                    topic: s.topic
                }), e.maxTimeout, "deleteSubscription")
            }
            async registerWithPushServer(e, t="fcm") {
                const i = await this.notifyClient.core.crypto.getClientId()
                  , r = `https://echo.walletconnect.com/${this.projectId}/clients`
                  , s = await fetch(r, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        client_id: i,
                        type: t,
                        token: e
                    })
                });
                if (200 === s.status)
                    return i;
                throw new Error(`Registration with push server failed, status: ${s.status}, response: ${await s.text()}`)
            }
            watchIsSubscribed(t, i, r) {
                return t(this.isSubscribedToDapp(i, r)),
                (0,
                ia.Ld)(e.subscriptionState, (()=>{
                    t(this.isSubscribedToDapp(i, r))
                }
                ))
            }
            watchNotificationTypes(t, i, r) {
                return t(this.getSubscription(i, r)?.scope ?? {}),
                (0,
                ia.Ld)(e.subscriptionState, (()=>{
                    t(this.getSubscription(i, r)?.scope ?? {})
                }
                ))
            }
            on(e, t) {
                this.notifyClient.on(e, t)
            }
            off(e, t) {
                this.notifyClient.off(e, t)
            }
            once(e, t) {
                this.notifyClient.once(e, t)
            }
        }
        ;
        ua.maxTimeout = 1e4,
        ua.instance = null,
        ua.subscriptionState = (0,
        ia.sj)({
            subscriptions: [],
            messages: []
        }),
        ua.clientState = (0,
        ia.sj)({
            isReady: !1,
            initting: !1,
            account: void 0,
            registration: void 0
        });
        var da = ua
          , ga = ()=>{
            const [e,t] = (0,
            r.useState)(da.getIsReady())
              , [i,s] = (0,
            r.useState)(da.getIsReady() ? da.getInstance() : null);
            return (0,
            r.useEffect)((()=>{
                const e = da.watchIsReady(t);
                return ()=>{
                    e()
                }
            }
            ), []),
            (0,
            r.useEffect)((()=>{
                e && s(da.getInstance())
            }
            ), [e]),
            e && i ? {
                data: i,
                isLoading: !1,
                error: null
            } : {
                data: null,
                isLoading: !0,
                error: null
            }
        }
          , pa = ()=>ca(da.subscriptionState)
          , fa = ()=>ca(da.clientState)
          , ya = (e,t)=>{
            const {data: i} = ga()
              , {subscriptions: s} = pa()
              , [n,o] = (0,
            r.useState)(i?.getNotificationTypes(e) ?? {});
            return (0,
            r.useEffect)((()=>{
                i && o(i.getNotificationTypes(e, t))
            }
            ), [i, e, s, t]),
            {
                data: n,
                error: null,
                isLoading: !1,
                update: async r=>new Promise((async(s,n)=>{
                    if (!i) {
                        const e = new Error("Web3InboxClient is not ready, cannot subscribe");
                        return n(e)
                    }
                    return await i.update(r, e, t).then((e=>{
                        s(e)
                    }
                    )).catch((e=>{
                        n(e)
                    }
                    ))
                }
                ))
            }
        }
          , ma = (e,t,i,s)=>{
            const {data: n} = ga()
              , [o,a] = (0,
            r.useState)()
              , [c,h] = (0,
            r.useState)([])
              , [l,u] = (0,
            r.useState)(!1)
              , [d,g] = (0,
            r.useState)(null)
              , [p,f] = (0,
            r.useState)(!1)
              , [y,m] = (0,
            r.useState)(null);
            (0,
            r.useEffect)((()=>{
                if (n)
                    try {
                        u(!0);
                        const {nextPage: r, stopWatchingNotifications: o} = n.pageNotifications(e, t, i, s)((e=>{
                            h(e.notifications),
                            u(!1),
                            f(e.hasMore)
                        }
                        ));
                        return a((()=>r)),
                        ()=>{
                            o()
                        }
                    } catch (Cn) {
                        m(Cn.message)
                    }
            }
            ), [i, s, e, t, n]);
            const b = async()=>(g(null),
            u(!0),
            new Promise((async e=>{
                o || await (async e=>new Promise((t=>{
                    setInterval((()=>{
                        e() && t()
                    }
                    ), 100)
                }
                )))((()=>Boolean(o)));
                const t = o;
                return await t().then((t=>{
                    e(t),
                    u(!1)
                }
                )).catch((e=>{
                    g(e?.message ?? "Failed to fetch next page"),
                    u(!1)
                }
                ))
            }
            )));
            return (0,
            r.useEffect)((()=>{
                h([]),
                f(!1)
            }
            ), [s, i]),
            l ? {
                data: c,
                hasMore: p,
                error: null,
                isLoading: !1,
                isLoadingNextPage: l,
                fetchNextPage: b
            } : d || y ? {
                data: c,
                hasMore: p,
                error: d ?? y,
                isLoading: !1,
                isLoadingNextPage: !1,
                fetchNextPage: b
            } : {
                data: c,
                hasMore: p,
                error: null,
                isLoading: !1,
                isLoadingNextPage: !1,
                fetchNextPage: b
            }
        }
          , ba = ()=>{
            const {account: e} = fa()
              , {data: t} = ga()
              , [i,s] = (0,
            r.useState)(null)
              , [n,o] = (0,
            r.useState)(null)
              , [a,c] = (0,
            r.useState)(!1)
              , h = async()=>(o(null),
            c(!0),
            new Promise((async(i,r)=>{
                if (!e) {
                    const e = new Error("Account not set, cannot prepare registration");
                    return o(e.message),
                    r(e)
                }
                if (!t) {
                    const e = new Error("Web3InboxClient is not ready, cannot prepare registration");
                    return o(e.message),
                    r(e)
                }
                return await t.prepareRegistration({
                    account: e
                }).then((e=>{
                    s(e),
                    i(e)
                }
                )).catch((e=>{
                    s(null),
                    o(e?.message ?? "Failed to subscribe"),
                    r(e)
                }
                )).finally((()=>{
                    c(!1)
                }
                ))
            }
            )));
            return a ? {
                data: null,
                isLoading: a,
                error: null,
                prepareRegistration: h
            } : {
                data: i,
                error: n,
                isLoading: !1,
                prepareRegistration: h
            }
        }
          , wa = ()=>{
            const {account: e} = fa()
              , {data: t} = ga()
              , [i,s] = (0,
            r.useState)(null)
              , [n,o] = (0,
            r.useState)(null)
              , [a,c] = (0,
            r.useState)(!1)
              , h = async i=>(o(null),
            c(!0),
            new Promise((async(r,n)=>{
                if (!e) {
                    const e = new Error("Account not set, cannot prepare registration");
                    return o(e.message),
                    n(e)
                }
                if (!t) {
                    const e = new Error("Web3InboxClient is not ready, cannot prepare registration");
                    return o(e.message),
                    n(e)
                }
                return await t.register(i).then((e=>{
                    s(e),
                    r(e)
                }
                )).catch((e=>{
                    if (e?.message.includes("stale identity")) {
                        const e = i.registerParams.cacaoPayload.iss.split(":").slice(-3).join(":");
                        return t.unregister({
                            account: e
                        }).then((()=>{
                            t.register(i).then(r)
                        }
                        ))
                    }
                    s(null),
                    o(e?.message ?? "Failed to subscribe"),
                    n(e)
                }
                )).finally((()=>{
                    c(!1)
                }
                ))
            }
            )));
            return a ? {
                data: null,
                isLoading: a,
                error: null,
                register: h
            } : {
                data: i,
                error: n,
                isLoading: !1,
                register: h
            }
        }
          , va = (e,t)=>{
            const {data: i, isLoading: s} = ga()
              , [n,o] = (0,
            r.useState)(!1)
              , [a,c] = (0,
            r.useState)(null)
              , [h,l] = (0,
            r.useState)(!1)
              , u = async(r,s)=>(c(null),
            l(!0),
            new Promise((async(n,a)=>{
                if (!i) {
                    const e = new Error("Web3InboxClient is not ready, cannot subscribe");
                    return c(e.message),
                    a(e)
                }
                return await i.subscribeToDapp(r ?? e, s ?? t).then((e=>{
                    o(!0),
                    n(e)
                }
                )).catch((e=>{
                    o(!1),
                    c(e?.message ?? "Failed to subscribe"),
                    a(e)
                }
                )).finally((()=>{
                    l(!1)
                }
                ))
            }
            )));
            return h ? {
                data: null,
                error: null,
                isLoading: h,
                subscribe: u
            } : {
                data: n,
                error: a,
                isLoading: h,
                subscribe: u
            }
        }
          , Ea = (e,t)=>{
            const {data: i, isLoading: s} = ga()
              , [n,o] = (0,
            r.useState)(i?.getSubscription(e, t) ?? null)
              , [a,c] = (0,
            r.useState)(!1);
            return (0,
            r.useEffect)((()=>{
                i && !s && o(i.getSubscription(e, t))
            }
            ), [i, t, e, s]),
            (0,
            r.useEffect)((()=>{
                if (!i || a)
                    return;
                const r = i.watchSubscription((e=>{
                    o(e)
                }
                ), e, t);
                return c(!0),
                o(i.getSubscription(e, t)),
                ()=>{
                    c(!1),
                    r()
                }
            }
            ), [e, t, i]),
            s ? {
                data: null,
                error: null,
                isLoading: !0,
                watching: !1,
                getSubscription: ()=>null
            } : {
                data: n,
                error: null,
                isLoading: !1,
                watching: a,
                getSubscription: (e,t)=>i.getSubscription(e, t)
            }
        }
          , Ia = (e,t)=>{
            const {data: i} = ga()
              , [s,n] = (0,
            r.useState)(!1)
              , [o,a] = (0,
            r.useState)(null)
              , [c,h] = (0,
            r.useState)(!1)
              , l = async()=>(a(null),
            h(!0),
            new Promise((async(r,s)=>{
                if (!i) {
                    const e = new Error("Web3InboxClient is not ready, cannot subscribe");
                    return a(e.message),
                    s(e)
                }
                return await i.unsubscribeFromDapp(e, t).then((e=>{
                    n(!0),
                    r(e)
                }
                )).catch((e=>{
                    n(!1),
                    a(e?.message ?? "Failed to unsubscribe"),
                    s(e)
                }
                )).finally((()=>{
                    h(!1)
                }
                ))
            }
            )));
            return c ? {
                data: null,
                error: null,
                isLoading: c,
                unsubscribe: l
            } : {
                data: s,
                error: o,
                isLoading: c,
                unsubscribe: l
            }
        }
          , _a = e=>{
            const {data: t} = ga()
              , {account: i, registration: s} = fa()
              , [n,o] = (0,
            r.useState)(!1)
              , [a,c] = (0,
            r.useState)(i)
              , [h,l] = (0,
            r.useState)(null)
              , [u,d] = (0,
            r.useState)(!1)
              , g = n && s ? s.identity : null
              , p = async e=>{
                if (l(null),
                d(!0),
                !t)
                    throw new Error("Web3InboxClient is not ready, cannot set account");
                return t.setAccount(e).catch((e=>{
                    l(e?.message ?? "Failed to set account")
                }
                )).finally((()=>{
                    d(!1)
                }
                ))
            }
            ;
            return (0,
            r.useEffect)((()=>{
                const e = !!s && s.account === i;
                o(e)
            }
            ), [i, s]),
            (0,
            r.useEffect)((()=>{
                e && t && p(e)
            }
            ), [t, e]),
            (0,
            r.useEffect)((()=>{
                c(i)
            }
            ), [i]),
            u ? {
                data: null,
                identityKey: g,
                isRegistered: n,
                error: h,
                isLoading: u,
                setAccount: p
            } : {
                data: a,
                identityKey: g,
                isRegistered: n,
                error: h,
                isLoading: u,
                setAccount: p
            }
        }
          , Sa = ({projectId: e, domain: t, allApps: i, logLevel: r, rpcUrlBuilder: s})=>da.init({
            projectId: e,
            domain: t,
            allApps: i,
            logLevel: r,
            rpcUrlBuilder: s
        })
    },
    30673: function(e, t, i) {
        "use strict";
        i.d(t, {
            CO: function() {
                return d
            },
            Ld: function() {
                return u
            },
            bo: function() {
                return l
            },
            iH: function() {
                return g
            },
            sj: function() {
                return h
            },
            tp: function() {
                return p
            }
        });
        var r = i(6961);
        const s = e=>"object" === typeof e && null !== e
          , n = new WeakMap
          , o = new WeakSet
          , a = (e=Object.is,t=((e,t)=>new Proxy(e,t)),i=(e=>s(e) && !o.has(e) && (Array.isArray(e) || !(Symbol.iterator in e)) && !(e instanceof WeakMap) && !(e instanceof WeakSet) && !(e instanceof Error) && !(e instanceof Number) && !(e instanceof Date) && !(e instanceof String) && !(e instanceof RegExp) && !(e instanceof ArrayBuffer)),a=(e=>{
            switch (e.status) {
            case "fulfilled":
                return e.value;
            case "rejected":
                throw e.reason;
            default:
                throw e
            }
        }
        ),c=new WeakMap,h=((e,t,i=a)=>{
            const s = c.get(e);
            if ((null == s ? void 0 : s[0]) === t)
                return s[1];
            const l = Array.isArray(e) ? [] : Object.create(Object.getPrototypeOf(e));
            return (0,
            r.jc)(l, !0),
            c.set(e, [t, l]),
            Reflect.ownKeys(e).forEach((t=>{
                if (Object.getOwnPropertyDescriptor(l, t))
                    return;
                const s = Reflect.get(e, t)
                  , a = {
                    value: s,
                    enumerable: !0,
                    configurable: !0
                };
                if (o.has(s))
                    (0,
                    r.jc)(s, !1);
                else if (s instanceof Promise)
                    delete a.value,
                    a.get = ()=>i(s);
                else if (n.has(s)) {
                    const [e,t] = n.get(s);
                    a.value = h(e, t(), i)
                }
                Object.defineProperty(l, t, a)
            }
            )),
            Object.preventExtensions(l)
        }
        ),l=new WeakMap,u=[1, 1],d=(a=>{
            if (!s(a))
                throw new Error("object required");
            const c = l.get(a);
            if (c)
                return c;
            let g = u[0];
            const p = new Set
              , f = (e,t=++u[0])=>{
                g !== t && (g = t,
                p.forEach((i=>i(e, t))))
            }
            ;
            let y = u[1];
            const m = e=>(t,i)=>{
                const r = [...t];
                r[1] = [e, ...r[1]],
                f(r, i)
            }
              , b = new Map
              , w = e=>{
                var t;
                const i = b.get(e);
                i && (b.delete(e),
                null == (t = i[1]) || t.call(i))
            }
              , v = Array.isArray(a) ? [] : Object.create(Object.getPrototypeOf(a))
              , E = t(v, {
                deleteProperty(e, t) {
                    const i = Reflect.get(e, t);
                    w(t);
                    const r = Reflect.deleteProperty(e, t);
                    return r && f(["delete", [t], i]),
                    r
                },
                set(t, a, c, h) {
                    const u = Reflect.has(t, a)
                      , g = Reflect.get(t, a, h);
                    if (u && (e(g, c) || l.has(c) && e(g, l.get(c))))
                        return !0;
                    w(a),
                    s(c) && (c = (0,
                    r.o5)(c) || c);
                    let y = c;
                    if (c instanceof Promise)
                        c.then((e=>{
                            c.status = "fulfilled",
                            c.value = e,
                            f(["resolve", [a], e])
                        }
                        )).catch((e=>{
                            c.status = "rejected",
                            c.reason = e,
                            f(["reject", [a], e])
                        }
                        ));
                    else {
                        !n.has(c) && i(c) && (y = d(c));
                        const e = !o.has(y) && n.get(y);
                        e && ((e,t)=>{
                            if (b.has(e))
                                throw new Error("prop listener already exists");
                            if (p.size) {
                                const i = t[3](m(e));
                                b.set(e, [t, i])
                            } else
                                b.set(e, [t])
                        }
                        )(a, e)
                    }
                    return Reflect.set(t, a, y, h),
                    f(["set", [a], c, g]),
                    !0
                }
            });
            l.set(a, E);
            const I = [v, (e=++u[1])=>(y === e || p.size || (y = e,
            b.forEach((([t])=>{
                const i = t[1](e);
                i > g && (g = i)
            }
            ))),
            g), h, e=>{
                p.add(e),
                1 === p.size && b.forEach((([e,t],i)=>{
                    if (t)
                        throw new Error("remove already exists");
                    const r = e[3](m(i));
                    b.set(i, [e, r])
                }
                ));
                return ()=>{
                    p.delete(e),
                    0 === p.size && b.forEach((([e,t],i)=>{
                        t && (t(),
                        b.set(i, [e]))
                    }
                    ))
                }
            }
            ];
            return n.set(E, I),
            Reflect.ownKeys(a).forEach((e=>{
                const t = Object.getOwnPropertyDescriptor(a, e);
                "value"in t && (E[e] = a[e],
                delete t.value,
                delete t.writable),
                Object.defineProperty(v, e, t)
            }
            )),
            E
        }
        ))=>[d, n, o, e, t, i, a, c, h, l, u]
          , [c] = a();
        function h(e={}) {
            return c(e)
        }
        function l(e) {
            const t = n.get(e);
            return null == t ? void 0 : t[1]()
        }
        function u(e, t, i) {
            const r = n.get(e);
            let s;
            r || console.warn("Please use proxy object");
            const o = []
              , a = r[3];
            let c = !1;
            const h = a((e=>{
                o.push(e),
                i ? t(o.splice(0)) : s || (s = Promise.resolve().then((()=>{
                    s = void 0,
                    c && t(o.splice(0))
                }
                )))
            }
            ));
            return c = !0,
            ()=>{
                c = !1,
                h()
            }
        }
        function d(e, t) {
            const i = n.get(e);
            i || console.warn("Please use proxy object");
            const [r,s,o] = i;
            return o(r, s(), t)
        }
        function g(e) {
            return o.add(e),
            e
        }
        const p = a
    }
}]);
