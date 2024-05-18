"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[5441], {
    35441: function(e, t, i) {
        i.d(t, {
            EthereumProvider: function() {
                return xo
            }
        });
        var r = i(47324)
          , n = i.n(r)
          , s = i(77279)
          , o = i(4759)
          , a = i(80900)
          , c = i(58161)
          , h = i(5796)
          , u = i(42772)
          , l = i(79935)
          , p = i(89727)
          , d = i(21846)
          , f = i(64390)
          , g = i(68496)
          , y = i(43355)
          , m = i(73656);
        const v = ":";
        function w(e) {
            const [t,i] = e.split(v);
            return {
                namespace: t,
                reference: i
            }
        }
        function _(e, t) {
            return e.includes(":") ? [e] : t.chains || []
        }
        const b = "base10"
          , I = "base16"
          , E = "base64pad"
          , P = "utf8"
          , S = 0
          , R = 1
          , O = 0
          , N = 1
          , x = 12
          , C = 32;
        function A() {
            const e = (0,
            a.randomBytes)(C);
            return (0,
            u.BB)(e, I)
        }
        function T(e) {
            const t = (0,
            c.vp)((0,
            u.mL)(e, P));
            return (0,
            u.BB)(t, I)
        }
        function q(e) {
            return Number((0,
            u.BB)(e, b))
        }
        function D(e) {
            const t = function(e) {
                return (0,
                u.mL)(`${e}`, b)
            }(typeof e.type < "u" ? e.type : S);
            if (q(t) === R && typeof e.senderPublicKey > "u")
                throw new Error("Missing sender public key for type 1 envelope");
            const i = typeof e.senderPublicKey < "u" ? (0,
            u.mL)(e.senderPublicKey, I) : void 0
              , r = typeof e.iv < "u" ? (0,
            u.mL)(e.iv, I) : (0,
            a.randomBytes)(x);
            return function(e) {
                if (q(e.type) === R) {
                    if (typeof e.senderPublicKey > "u")
                        throw new Error("Missing sender public key for type 1 envelope");
                    return (0,
                    u.BB)((0,
                    u.zo)([e.type, e.senderPublicKey, e.iv, e.sealed]), E)
                }
                return (0,
                u.BB)((0,
                u.zo)([e.type, e.iv, e.sealed]), E)
            }({
                type: t,
                sealed: new s.OK((0,
                u.mL)(e.symKey, I)).seal(r, (0,
                u.mL)(e.message, P)),
                iv: r,
                senderPublicKey: i
            })
        }
        function $(e) {
            const t = (0,
            u.mL)(e, E)
              , i = t.slice(O, N)
              , r = N;
            if (q(i) === R) {
                const e = r + C
                  , n = e + x
                  , s = t.slice(r, e)
                  , o = t.slice(e, n);
                return {
                    type: i,
                    sealed: t.slice(n),
                    iv: o,
                    senderPublicKey: s
                }
            }
            const n = r + x
              , s = t.slice(r, n);
            return {
                type: i,
                sealed: t.slice(n),
                iv: s
            }
        }
        function j(e) {
            const t = e?.type || S;
            if (t === R) {
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
        function U(e) {
            return e.type === R && "string" == typeof e.senderPublicKey && "string" == typeof e.receiverPublicKey
        }
        var M = Object.defineProperty
          , z = Object.getOwnPropertySymbols
          , k = Object.prototype.hasOwnProperty
          , L = Object.prototype.propertyIsEnumerable
          , V = (e,t,i)=>t in e ? M(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: i
        }) : e[t] = i
          , K = (e,t)=>{
            for (var i in t || (t = {}))
                k.call(t, i) && V(e, i, t[i]);
            if (z)
                for (var i of z(t))
                    L.call(t, i) && V(e, i, t[i]);
            return e
        }
        ;
        const H = "ReactNative"
          , B = {
            reactNative: "react-native",
            node: "node",
            browser: "browser",
            unknown: "unknown"
        }
          , F = "js";
        function J() {
            return typeof m < "u" && typeof m.versions < "u" && typeof m.versions.node < "u"
        }
        function G() {
            return !(0,
            d.getDocument)() && !!(0,
            d.getNavigator)() && navigator.product === H
        }
        function W() {
            return !J() && !!(0,
            d.getNavigator)() && !!(0,
            d.getDocument)()
        }
        function Q() {
            return G() ? B.reactNative : J() ? B.node : W() ? B.browser : B.unknown
        }
        function Y(e, t, r) {
            const n = function() {
                if (Q() === B.reactNative && typeof i.g < "u" && typeof (null == i.g ? void 0 : i.g.Platform) < "u") {
                    const {OS: e, Version: t} = i.g.Platform;
                    return [e, t].join("-")
                }
                const e = (0,
                l.qY)();
                if (null === e)
                    return "unknown";
                const t = e.os ? e.os.replace(" ", "").toLowerCase() : "unknown";
                return "browser" === e.type ? [t, e.name, e.version].join("-") : [t, e.version].join("-")
            }()
              , s = function() {
                var e;
                const t = Q();
                return t === B.browser ? [t, (null == (e = (0,
                d.getLocation)()) ? void 0 : e.host) || "unknown"].join(":") : t
            }();
            return [[e, t].join("-"), [F, r].join("-"), n, s].join("/")
        }
        function Z({protocol: e, version: t, relayUrl: i, sdkVersion: r, auth: n, projectId: s, useOnCloseEvent: o, bundleId: a}) {
            const c = i.split("?")
              , h = {
                auth: n,
                ua: Y(e, t, r),
                projectId: s,
                useOnCloseEvent: o || void 0,
                origin: a || void 0
            }
              , u = function(e, t) {
                let i = g.parse(e);
                return i = K(K({}, i), t),
                g.stringify(i)
            }(c[1] || "", h);
            return c[0] + "?" + u
        }
        function X(e, t) {
            return e.filter((e=>t.includes(e))).length === e.length
        }
        function ee(e) {
            return Object.fromEntries(e.entries())
        }
        function te(e) {
            return new Map(Object.entries(e))
        }
        function ie(e=p.FIVE_MINUTES, t) {
            const i = (0,
            p.toMiliseconds)(e || p.FIVE_MINUTES);
            let r, n, s;
            return {
                resolve: e=>{
                    s && r && (clearTimeout(s),
                    r(e))
                }
                ,
                reject: e=>{
                    s && n && (clearTimeout(s),
                    n(e))
                }
                ,
                done: ()=>new Promise(((e,o)=>{
                    s = setTimeout((()=>{
                        o(new Error(t))
                    }
                    ), i),
                    r = e,
                    n = o
                }
                ))
            }
        }
        function re(e, t, i) {
            return new Promise((async(r,n)=>{
                const s = setTimeout((()=>n(new Error(i))), t);
                try {
                    r(await e)
                } catch (lt) {
                    n(lt)
                }
                clearTimeout(s)
            }
            ))
        }
        function ne(e, t) {
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
        function se(e) {
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
        }
        function oe(e, t) {
            return (0,
            p.fromMiliseconds)((t || Date.now()) + (0,
            p.toMiliseconds)(e))
        }
        function ae(e) {
            return Date.now() >= (0,
            p.toMiliseconds)(e)
        }
        function ce(e, t) {
            return `${e}${t ? `:${t}` : ""}`
        }
        function he(e=[], t=[]) {
            return [...new Set([...e, ...t])]
        }
        function ue(e) {
            return e?.relay || {
                protocol: "irn"
            }
        }
        function le(e) {
            const t = y.RELAY_JSONRPC[e];
            if (typeof t > "u")
                throw new Error(`Relay Protocol not supported: ${e}`);
            return t
        }
        var pe = Object.defineProperty
          , de = Object.defineProperties
          , fe = Object.getOwnPropertyDescriptors
          , ge = Object.getOwnPropertySymbols
          , ye = Object.prototype.hasOwnProperty
          , me = Object.prototype.propertyIsEnumerable
          , ve = (e,t,i)=>t in e ? pe(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: i
        }) : e[t] = i;
        function we(e, t="-") {
            const i = {}
              , r = "relay" + t;
            return Object.keys(e).forEach((t=>{
                if (t.startsWith(r)) {
                    const n = t.replace(r, "")
                      , s = e[t];
                    i[n] = s
                }
            }
            )),
            i
        }
        function _e(e) {
            const t = (e = (e = e.includes("wc://") ? e.replace("wc://", "") : e).includes("wc:") ? e.replace("wc:", "") : e).indexOf(":")
              , i = -1 !== e.indexOf("?") ? e.indexOf("?") : void 0
              , r = e.substring(0, t)
              , n = e.substring(t + 1, i).split("@")
              , s = typeof i < "u" ? e.substring(i) : ""
              , o = g.parse(s);
            return {
                protocol: r,
                topic: be(n[0]),
                version: parseInt(n[1], 10),
                symKey: o.symKey,
                relay: we(o),
                expiryTimestamp: o.expiryTimestamp ? parseInt(o.expiryTimestamp, 10) : void 0
            }
        }
        function be(e) {
            return e.startsWith("//") ? e.substring(2) : e
        }
        function Ie(e) {
            return `${e.protocol}:${e.topic}@${e.version}?` + g.stringify(((e,t)=>de(e, fe(t)))(((e,t)=>{
                for (var i in t || (t = {}))
                    ye.call(t, i) && ve(e, i, t[i]);
                if (ge)
                    for (var i of ge(t))
                        me.call(t, i) && ve(e, i, t[i]);
                return e
            }
            )({
                symKey: e.symKey
            }, function(e, t="-") {
                const i = {};
                return Object.keys(e).forEach((r=>{
                    const n = "relay" + t + r;
                    e[r] && (i[n] = e[r])
                }
                )),
                i
            }(e.relay)), {
                expiryTimestamp: e.expiryTimestamp
            }))
        }
        Object.defineProperty,
        Object.defineProperties,
        Object.getOwnPropertyDescriptors,
        Object.getOwnPropertySymbols,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable;
        function Ee(e) {
            const t = [];
            return e.forEach((e=>{
                const [i,r] = e.split(":");
                t.push(`${i}:${r}`)
            }
            )),
            t
        }
        function Pe(e) {
            return e.includes(":")
        }
        function Se(e) {
            return Pe(e) ? e.split(":")[0] : e
        }
        const Re = {
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
          , Oe = {
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
        function Ne(e, t) {
            const {message: i, code: r} = Oe[e];
            return {
                message: t ? `${i} ${t}` : i,
                code: r
            }
        }
        function xe(e, t) {
            const {message: i, code: r} = Re[e];
            return {
                message: t ? `${i} ${t}` : i,
                code: r
            }
        }
        function Ce(e, t) {
            return !!Array.isArray(e) && (!(typeof t < "u" && e.length) || e.every(t))
        }
        function Ae(e) {
            return Object.getPrototypeOf(e) === Object.prototype && Object.keys(e).length
        }
        function Te(e) {
            return typeof e > "u"
        }
        function qe(e, t) {
            return !(!t || !Te(e)) || "string" == typeof e && !!e.trim().length
        }
        function De(e, t) {
            return !(!t || !Te(e)) || "number" == typeof e && !isNaN(e)
        }
        function $e(e) {
            return !(!qe(e, !1) || !e.includes(":")) && 2 === e.split(":").length
        }
        function je(e) {
            let t = !0;
            return Ce(e) ? e.length && (t = e.every((e=>qe(e, !1)))) : t = !1,
            t
        }
        function Ue(e, t, i) {
            let r = null;
            return Object.entries(e).forEach((([e,n])=>{
                if (r)
                    return;
                const s = function(e, t, i) {
                    let r = null;
                    return Ce(t) && t.length ? t.forEach((e=>{
                        r || $e(e) || (r = xe("UNSUPPORTED_CHAINS", `${i}, chain ${e} should be a string and conform to "namespace:chainId" format`))
                    }
                    )) : $e(e) || (r = xe("UNSUPPORTED_CHAINS", `${i}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)),
                    r
                }(e, _(e, n), `${t} ${i}`);
                s && (r = s)
            }
            )),
            r
        }
        function Me(e, t) {
            let i = null;
            return Ce(e) ? e.forEach((e=>{
                i || function(e) {
                    if (qe(e, !1) && e.includes(":")) {
                        const t = e.split(":");
                        if (3 === t.length) {
                            const e = t[0] + ":" + t[1];
                            return !!t[2] && $e(e)
                        }
                    }
                    return !1
                }(e) || (i = xe("UNSUPPORTED_ACCOUNTS", `${t}, account ${e} should be a string and conform to "namespace:chainId:address" format`))
            }
            )) : i = xe("UNSUPPORTED_ACCOUNTS", `${t}, accounts should be an array of strings conforming to "namespace:chainId:address" format`),
            i
        }
        function ze(e, t) {
            let i = null;
            return Object.values(e).forEach((e=>{
                if (i)
                    return;
                const r = function(e, t) {
                    let i = null;
                    return je(e?.methods) ? je(e?.events) || (i = xe("UNSUPPORTED_EVENTS", `${t}, events should be an array of strings or empty array for no events`)) : i = xe("UNSUPPORTED_METHODS", `${t}, methods should be an array of strings or empty array for no methods`),
                    i
                }(e, `${t}, namespace`);
                r && (i = r)
            }
            )),
            i
        }
        function ke(e, t) {
            let i = null;
            if (e && Ae(e)) {
                const r = ze(e, t);
                r && (i = r);
                const n = function(e, t) {
                    let i = null;
                    return Object.values(e).forEach((e=>{
                        if (i)
                            return;
                        const r = Me(e?.accounts, `${t} namespace`);
                        r && (i = r)
                    }
                    )),
                    i
                }(e, t);
                n && (i = n)
            } else
                i = Ne("MISSING_OR_INVALID", `${t}, namespaces should be an object with data`);
            return i
        }
        function Le(e) {
            return qe(e.protocol, !0)
        }
        function Ve(e) {
            return typeof e < "u" && null !== typeof e
        }
        function Ke(e, t) {
            return !(!$e(t) || !function(e) {
                const t = [];
                return Object.values(e).forEach((e=>{
                    t.push(...Ee(e.accounts))
                }
                )),
                t
            }(e).includes(t))
        }
        function He(e, t, i) {
            return !!qe(i, !1) && function(e, t) {
                const i = [];
                return Object.values(e).forEach((e=>{
                    Ee(e.accounts).includes(t) && i.push(...e.methods)
                }
                )),
                i
            }(e, t).includes(i)
        }
        function Be(e, t, i) {
            return !!qe(i, !1) && function(e, t) {
                const i = [];
                return Object.values(e).forEach((e=>{
                    Ee(e.accounts).includes(t) && i.push(...e.events)
                }
                )),
                i
            }(e, t).includes(i)
        }
        function Fe(e, t, i) {
            let r = null;
            const n = function(e) {
                const t = {};
                return Object.keys(e).forEach((i=>{
                    var r;
                    i.includes(":") ? t[i] = e[i] : null == (r = e[i].chains) || r.forEach((r=>{
                        t[r] = {
                            methods: e[i].methods,
                            events: e[i].events
                        }
                    }
                    ))
                }
                )),
                t
            }(e)
              , s = function(e) {
                const t = {};
                return Object.keys(e).forEach((i=>{
                    if (i.includes(":"))
                        t[i] = e[i];
                    else {
                        const r = Ee(e[i].accounts);
                        r?.forEach((r=>{
                            t[r] = {
                                accounts: e[i].accounts.filter((e=>e.includes(`${r}:`))),
                                methods: e[i].methods,
                                events: e[i].events
                            }
                        }
                        ))
                    }
                }
                )),
                t
            }(t)
              , o = Object.keys(n)
              , a = Object.keys(s)
              , c = Je(Object.keys(e))
              , h = Je(Object.keys(t))
              , u = c.filter((e=>!h.includes(e)));
            return u.length && (r = Ne("NON_CONFORMING_NAMESPACES", `${i} namespaces keys don't satisfy requiredNamespaces.\n      Required: ${u.toString()}\n      Received: ${Object.keys(t).toString()}`)),
            X(o, a) || (r = Ne("NON_CONFORMING_NAMESPACES", `${i} namespaces chains don't satisfy required namespaces.\n      Required: ${o.toString()}\n      Approved: ${a.toString()}`)),
            Object.keys(t).forEach((e=>{
                if (!e.includes(":") || r)
                    return;
                const n = Ee(t[e].accounts);
                n.includes(e) || (r = Ne("NON_CONFORMING_NAMESPACES", `${i} namespaces accounts don't satisfy namespace accounts for ${e}\n        Required: ${e}\n        Approved: ${n.toString()}`))
            }
            )),
            o.forEach((e=>{
                r || (X(n[e].methods, s[e].methods) ? X(n[e].events, s[e].events) || (r = Ne("NON_CONFORMING_NAMESPACES", `${i} namespaces events don't satisfy namespace events for ${e}`)) : r = Ne("NON_CONFORMING_NAMESPACES", `${i} namespaces methods don't satisfy namespace methods for ${e}`))
            }
            )),
            r
        }
        function Je(e) {
            return [...new Set(e.map((e=>e.includes(":") ? e.split(":")[0] : e)))]
        }
        function Ge() {
            const e = Q();
            return new Promise((t=>{
                switch (e) {
                case B.browser:
                    t(W() && navigator?.onLine);
                    break;
                case B.reactNative:
                    t(async function() {
                        if (G() && typeof i.g < "u" && null != i.g && i.g.NetInfo) {
                            const e = await (null == i.g ? void 0 : i.g.NetInfo.fetch());
                            return e?.isConnected
                        }
                        return !0
                    }());
                    break;
                case B.node:
                default:
                    t(!0)
                }
            }
            ))
        }
        function We(e) {
            switch (Q()) {
            case B.browser:
                !function(e) {
                    !G() && W() && (window.addEventListener("online", (()=>e(!0))),
                    window.addEventListener("offline", (()=>e(!1))))
                }(e);
                break;
            case B.reactNative:
                !function(e) {
                    G() && typeof i.g < "u" && null != i.g && i.g.NetInfo && i.g?.NetInfo.addEventListener((t=>e(t?.isConnected)))
                }(e);
            case B.node:
            }
        }
        const Qe = {};
        class Ye {
            static get(e) {
                return Qe[e]
            }
            static set(e, t) {
                Qe[e] = t
            }
            static delete(e) {
                delete Qe[e]
            }
        }
        var Ze = i(54646)
          , Xe = i(77698)
          , et = i(9049)
          , tt = i.n(et);
        const it = "info"
          , rt = "custom_context";
        Symbol.iterator;
        var nt = Object.defineProperty
          , st = Object.defineProperties
          , ot = Object.getOwnPropertyDescriptors
          , at = Object.getOwnPropertySymbols
          , ct = Object.prototype.hasOwnProperty
          , ht = Object.prototype.propertyIsEnumerable
          , ut = (e,t,i)=>t in e ? nt(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: i
        }) : e[t] = i
          , lt = (e,t)=>{
            for (var i in t || (t = {}))
                ct.call(t, i) && ut(e, i, t[i]);
            if (at)
                for (var i of at(t))
                    ht.call(t, i) && ut(e, i, t[i]);
            return e
        }
          , pt = (e,t)=>st(e, ot(t));
        function dt(e) {
            return pt(lt({}, e), {
                level: e?.level || it
            })
        }
        function ft(e, t=rt) {
            let i = "";
            return i = typeof e.bindings > "u" ? function(e, t=rt) {
                return e[t] || ""
            }(e, t) : e.bindings().context || "",
            i
        }
        function gt(e, t, i=rt) {
            const r = function(e, t, i=rt) {
                const r = ft(e, i);
                return r.trim() ? `${r}/${t}` : t
            }(e, t, i);
            return function(e, t, i=rt) {
                return e[i] = t,
                e
            }(e.child({
                context: r
            }), r, i)
        }
        var yt = i(92449);
        class mt extends yt.q {
            constructor(e) {
                super(),
                this.opts = e,
                this.protocol = "wc",
                this.version = 2
            }
        }
        class vt extends yt.q {
            constructor(e, t) {
                super(),
                this.core = e,
                this.logger = t,
                this.records = new Map
            }
        }
        class wt {
            constructor(e, t) {
                this.logger = e,
                this.core = t
            }
        }
        class _t extends yt.q {
            constructor(e, t) {
                super(),
                this.relayer = e,
                this.logger = t
            }
        }
        class bt extends yt.q {
            constructor(e) {
                super()
            }
        }
        class It {
            constructor(e, t, i, r) {
                this.core = e,
                this.logger = t,
                this.name = i
            }
        }
        class Et extends yt.q {
            constructor(e, t) {
                super(),
                this.relayer = e,
                this.logger = t
            }
        }
        class Pt extends yt.q {
            constructor(e, t) {
                super(),
                this.core = e,
                this.logger = t
            }
        }
        class St {
            constructor(e, t) {
                this.projectId = e,
                this.logger = t
            }
        }
        class Rt {
            constructor(e, t) {
                this.projectId = e,
                this.logger = t
            }
        }
        n();
        class Ot {
            constructor(e) {
                this.opts = e,
                this.protocol = "wc",
                this.version = 2
            }
        }
        r.EventEmitter;
        class Nt {
            constructor(e) {
                this.client = e
            }
        }
        var xt = i(21646)
          , Ct = i(40267)
          , At = i(18085)
          , Tt = i(88972)
          , qt = i(14219)
          , Dt = i(17361)
          , $t = i.n(Dt)
          , jt = i(41846)
          , Ut = i.n(jt)
          , Mt = i(73656);
        var zt = function(e, t) {
            if (e.length >= 255)
                throw new TypeError("Alphabet too long");
            for (var i = new Uint8Array(256), r = 0; r < i.length; r++)
                i[r] = 255;
            for (var n = 0; n < e.length; n++) {
                var s = e.charAt(n)
                  , o = s.charCodeAt(0);
                if (255 !== i[o])
                    throw new TypeError(s + " is ambiguous");
                i[o] = n
            }
            var a = e.length
              , c = e.charAt(0)
              , h = Math.log(a) / Math.log(256)
              , u = Math.log(256) / Math.log(a);
            function l(e) {
                if ("string" != typeof e)
                    throw new TypeError("Expected String");
                if (0 === e.length)
                    return new Uint8Array;
                var t = 0;
                if (" " !== e[t]) {
                    for (var r = 0, n = 0; e[t] === c; )
                        r++,
                        t++;
                    for (var s = (e.length - t) * h + 1 >>> 0, o = new Uint8Array(s); e[t]; ) {
                        var u = i[e.charCodeAt(t)];
                        if (255 === u)
                            return;
                        for (var l = 0, p = s - 1; (0 !== u || l < n) && -1 !== p; p--,
                        l++)
                            u += a * o[p] >>> 0,
                            o[p] = u % 256 >>> 0,
                            u = u / 256 >>> 0;
                        if (0 !== u)
                            throw new Error("Non-zero carry");
                        n = l,
                        t++
                    }
                    if (" " !== e[t]) {
                        for (var d = s - n; d !== s && 0 === o[d]; )
                            d++;
                        for (var f = new Uint8Array(r + (s - d)), g = r; d !== s; )
                            f[g++] = o[d++];
                        return f
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
                    for (var i = 0, r = 0, n = 0, s = t.length; n !== s && 0 === t[n]; )
                        n++,
                        i++;
                    for (var o = (s - n) * u + 1 >>> 0, h = new Uint8Array(o); n !== s; ) {
                        for (var l = t[n], p = 0, d = o - 1; (0 !== l || p < r) && -1 !== d; d--,
                        p++)
                            l += 256 * h[d] >>> 0,
                            h[d] = l % a >>> 0,
                            l = l / a >>> 0;
                        if (0 !== l)
                            throw new Error("Non-zero carry");
                        r = p,
                        n++
                    }
                    for (var f = o - r; f !== o && 0 === h[f]; )
                        f++;
                    for (var g = c.repeat(i); f < o; ++f)
                        g += e.charAt(h[f]);
                    return g
                },
                decodeUnsafe: l,
                decode: function(e) {
                    var i = l(e);
                    if (i)
                        return i;
                    throw new Error(`Non-${t} character`)
                }
            }
        }
          , kt = zt;
        const Lt = e=>{
            if (e instanceof Uint8Array && "Uint8Array" === e.constructor.name)
                return e;
            if (e instanceof ArrayBuffer)
                return new Uint8Array(e);
            if (ArrayBuffer.isView(e))
                return new Uint8Array(e.buffer,e.byteOffset,e.byteLength);
            throw new Error("Unknown type, must be binary type")
        }
        ;
        class Vt {
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
        class Kt {
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
                return Bt(this, e)
            }
        }
        class Ht {
            constructor(e) {
                this.decoders = e
            }
            or(e) {
                return Bt(this, e)
            }
            decode(e) {
                const t = e[0]
                  , i = this.decoders[t];
                if (i)
                    return i.decode(e);
                throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)
            }
        }
        const Bt = (e,t)=>new Ht({
            ...e.decoders || {
                [e.prefix]: e
            },
            ...t.decoders || {
                [t.prefix]: t
            }
        });
        class Ft {
            constructor(e, t, i, r) {
                this.name = e,
                this.prefix = t,
                this.baseEncode = i,
                this.baseDecode = r,
                this.encoder = new Vt(e,t,i),
                this.decoder = new Kt(e,t,r)
            }
            encode(e) {
                return this.encoder.encode(e)
            }
            decode(e) {
                return this.decoder.decode(e)
            }
        }
        const Jt = ({name: e, prefix: t, encode: i, decode: r})=>new Ft(e,t,i,r)
          , Gt = ({prefix: e, name: t, alphabet: i})=>{
            const {encode: r, decode: n} = kt(i, t);
            return Jt({
                prefix: e,
                name: t,
                encode: r,
                decode: e=>Lt(n(e))
            })
        }
          , Wt = ({name: e, prefix: t, bitsPerChar: i, alphabet: r})=>Jt({
            prefix: t,
            name: e,
            encode: e=>((e,t,i)=>{
                const r = "=" === t[t.length - 1]
                  , n = (1 << i) - 1;
                let s = ""
                  , o = 0
                  , a = 0;
                for (let c = 0; c < e.length; ++c)
                    for (a = a << 8 | e[c],
                    o += 8; o > i; )
                        o -= i,
                        s += t[n & a >> o];
                if (o && (s += t[n & a << i - o]),
                r)
                    for (; s.length * i & 7; )
                        s += "=";
                return s
            }
            )(e, r, i),
            decode: t=>((e,t,i,r)=>{
                const n = {};
                for (let u = 0; u < t.length; ++u)
                    n[t[u]] = u;
                let s = e.length;
                for (; "=" === e[s - 1]; )
                    --s;
                const o = new Uint8Array(s * i / 8 | 0);
                let a = 0
                  , c = 0
                  , h = 0;
                for (let u = 0; u < s; ++u) {
                    const t = n[e[u]];
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
          , Qt = Jt({
            prefix: "\0",
            name: "identity",
            encode: e=>(e=>(new TextDecoder).decode(e))(e),
            decode: e=>(e=>(new TextEncoder).encode(e))(e)
        });
        var Yt = Object.freeze({
            __proto__: null,
            identity: Qt
        });
        const Zt = Wt({
            prefix: "0",
            name: "base2",
            alphabet: "01",
            bitsPerChar: 1
        });
        var Xt = Object.freeze({
            __proto__: null,
            base2: Zt
        });
        const ei = Wt({
            prefix: "7",
            name: "base8",
            alphabet: "01234567",
            bitsPerChar: 3
        });
        var ti = Object.freeze({
            __proto__: null,
            base8: ei
        });
        const ii = Gt({
            prefix: "9",
            name: "base10",
            alphabet: "0123456789"
        });
        var ri = Object.freeze({
            __proto__: null,
            base10: ii
        });
        const ni = Wt({
            prefix: "f",
            name: "base16",
            alphabet: "0123456789abcdef",
            bitsPerChar: 4
        })
          , si = Wt({
            prefix: "F",
            name: "base16upper",
            alphabet: "0123456789ABCDEF",
            bitsPerChar: 4
        });
        var oi = Object.freeze({
            __proto__: null,
            base16: ni,
            base16upper: si
        });
        const ai = Wt({
            prefix: "b",
            name: "base32",
            alphabet: "abcdefghijklmnopqrstuvwxyz234567",
            bitsPerChar: 5
        })
          , ci = Wt({
            prefix: "B",
            name: "base32upper",
            alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
            bitsPerChar: 5
        })
          , hi = Wt({
            prefix: "c",
            name: "base32pad",
            alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
            bitsPerChar: 5
        })
          , ui = Wt({
            prefix: "C",
            name: "base32padupper",
            alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
            bitsPerChar: 5
        })
          , li = Wt({
            prefix: "v",
            name: "base32hex",
            alphabet: "0123456789abcdefghijklmnopqrstuv",
            bitsPerChar: 5
        })
          , pi = Wt({
            prefix: "V",
            name: "base32hexupper",
            alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
            bitsPerChar: 5
        })
          , di = Wt({
            prefix: "t",
            name: "base32hexpad",
            alphabet: "0123456789abcdefghijklmnopqrstuv=",
            bitsPerChar: 5
        })
          , fi = Wt({
            prefix: "T",
            name: "base32hexpadupper",
            alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
            bitsPerChar: 5
        })
          , gi = Wt({
            prefix: "h",
            name: "base32z",
            alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
            bitsPerChar: 5
        });
        var yi = Object.freeze({
            __proto__: null,
            base32: ai,
            base32upper: ci,
            base32pad: hi,
            base32padupper: ui,
            base32hex: li,
            base32hexupper: pi,
            base32hexpad: di,
            base32hexpadupper: fi,
            base32z: gi
        });
        const mi = Gt({
            prefix: "k",
            name: "base36",
            alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
        })
          , vi = Gt({
            prefix: "K",
            name: "base36upper",
            alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        });
        var wi = Object.freeze({
            __proto__: null,
            base36: mi,
            base36upper: vi
        });
        const _i = Gt({
            name: "base58btc",
            prefix: "z",
            alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
        })
          , bi = Gt({
            name: "base58flickr",
            prefix: "Z",
            alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
        });
        var Ii = Object.freeze({
            __proto__: null,
            base58btc: _i,
            base58flickr: bi
        });
        const Ei = Wt({
            prefix: "m",
            name: "base64",
            alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            bitsPerChar: 6
        })
          , Pi = Wt({
            prefix: "M",
            name: "base64pad",
            alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            bitsPerChar: 6
        })
          , Si = Wt({
            prefix: "u",
            name: "base64url",
            alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
            bitsPerChar: 6
        })
          , Ri = Wt({
            prefix: "U",
            name: "base64urlpad",
            alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
            bitsPerChar: 6
        });
        var Oi = Object.freeze({
            __proto__: null,
            base64: Ei,
            base64pad: Pi,
            base64url: Si,
            base64urlpad: Ri
        });
        const Ni = Array.from("\ud83d\ude80\ud83e\ude90\u2604\ud83d\udef0\ud83c\udf0c\ud83c\udf11\ud83c\udf12\ud83c\udf13\ud83c\udf14\ud83c\udf15\ud83c\udf16\ud83c\udf17\ud83c\udf18\ud83c\udf0d\ud83c\udf0f\ud83c\udf0e\ud83d\udc09\u2600\ud83d\udcbb\ud83d\udda5\ud83d\udcbe\ud83d\udcbf\ud83d\ude02\u2764\ud83d\ude0d\ud83e\udd23\ud83d\ude0a\ud83d\ude4f\ud83d\udc95\ud83d\ude2d\ud83d\ude18\ud83d\udc4d\ud83d\ude05\ud83d\udc4f\ud83d\ude01\ud83d\udd25\ud83e\udd70\ud83d\udc94\ud83d\udc96\ud83d\udc99\ud83d\ude22\ud83e\udd14\ud83d\ude06\ud83d\ude44\ud83d\udcaa\ud83d\ude09\u263a\ud83d\udc4c\ud83e\udd17\ud83d\udc9c\ud83d\ude14\ud83d\ude0e\ud83d\ude07\ud83c\udf39\ud83e\udd26\ud83c\udf89\ud83d\udc9e\u270c\u2728\ud83e\udd37\ud83d\ude31\ud83d\ude0c\ud83c\udf38\ud83d\ude4c\ud83d\ude0b\ud83d\udc97\ud83d\udc9a\ud83d\ude0f\ud83d\udc9b\ud83d\ude42\ud83d\udc93\ud83e\udd29\ud83d\ude04\ud83d\ude00\ud83d\udda4\ud83d\ude03\ud83d\udcaf\ud83d\ude48\ud83d\udc47\ud83c\udfb6\ud83d\ude12\ud83e\udd2d\u2763\ud83d\ude1c\ud83d\udc8b\ud83d\udc40\ud83d\ude2a\ud83d\ude11\ud83d\udca5\ud83d\ude4b\ud83d\ude1e\ud83d\ude29\ud83d\ude21\ud83e\udd2a\ud83d\udc4a\ud83e\udd73\ud83d\ude25\ud83e\udd24\ud83d\udc49\ud83d\udc83\ud83d\ude33\u270b\ud83d\ude1a\ud83d\ude1d\ud83d\ude34\ud83c\udf1f\ud83d\ude2c\ud83d\ude43\ud83c\udf40\ud83c\udf37\ud83d\ude3b\ud83d\ude13\u2b50\u2705\ud83e\udd7a\ud83c\udf08\ud83d\ude08\ud83e\udd18\ud83d\udca6\u2714\ud83d\ude23\ud83c\udfc3\ud83d\udc90\u2639\ud83c\udf8a\ud83d\udc98\ud83d\ude20\u261d\ud83d\ude15\ud83c\udf3a\ud83c\udf82\ud83c\udf3b\ud83d\ude10\ud83d\udd95\ud83d\udc9d\ud83d\ude4a\ud83d\ude39\ud83d\udde3\ud83d\udcab\ud83d\udc80\ud83d\udc51\ud83c\udfb5\ud83e\udd1e\ud83d\ude1b\ud83d\udd34\ud83d\ude24\ud83c\udf3c\ud83d\ude2b\u26bd\ud83e\udd19\u2615\ud83c\udfc6\ud83e\udd2b\ud83d\udc48\ud83d\ude2e\ud83d\ude46\ud83c\udf7b\ud83c\udf43\ud83d\udc36\ud83d\udc81\ud83d\ude32\ud83c\udf3f\ud83e\udde1\ud83c\udf81\u26a1\ud83c\udf1e\ud83c\udf88\u274c\u270a\ud83d\udc4b\ud83d\ude30\ud83e\udd28\ud83d\ude36\ud83e\udd1d\ud83d\udeb6\ud83d\udcb0\ud83c\udf53\ud83d\udca2\ud83e\udd1f\ud83d\ude41\ud83d\udea8\ud83d\udca8\ud83e\udd2c\u2708\ud83c\udf80\ud83c\udf7a\ud83e\udd13\ud83d\ude19\ud83d\udc9f\ud83c\udf31\ud83d\ude16\ud83d\udc76\ud83e\udd74\u25b6\u27a1\u2753\ud83d\udc8e\ud83d\udcb8\u2b07\ud83d\ude28\ud83c\udf1a\ud83e\udd8b\ud83d\ude37\ud83d\udd7a\u26a0\ud83d\ude45\ud83d\ude1f\ud83d\ude35\ud83d\udc4e\ud83e\udd32\ud83e\udd20\ud83e\udd27\ud83d\udccc\ud83d\udd35\ud83d\udc85\ud83e\uddd0\ud83d\udc3e\ud83c\udf52\ud83d\ude17\ud83e\udd11\ud83c\udf0a\ud83e\udd2f\ud83d\udc37\u260e\ud83d\udca7\ud83d\ude2f\ud83d\udc86\ud83d\udc46\ud83c\udfa4\ud83d\ude47\ud83c\udf51\u2744\ud83c\udf34\ud83d\udca3\ud83d\udc38\ud83d\udc8c\ud83d\udccd\ud83e\udd40\ud83e\udd22\ud83d\udc45\ud83d\udca1\ud83d\udca9\ud83d\udc50\ud83d\udcf8\ud83d\udc7b\ud83e\udd10\ud83e\udd2e\ud83c\udfbc\ud83e\udd75\ud83d\udea9\ud83c\udf4e\ud83c\udf4a\ud83d\udc7c\ud83d\udc8d\ud83d\udce3\ud83e\udd42")
          , xi = Ni.reduce(((e,t,i)=>(e[i] = t,
        e)), [])
          , Ci = Ni.reduce(((e,t,i)=>(e[t.codePointAt(0)] = i,
        e)), []);
        const Ai = Jt({
            prefix: "\ud83d\ude80",
            name: "base256emoji",
            encode: function(e) {
                return e.reduce(((e,t)=>e += xi[t]), "")
            },
            decode: function(e) {
                const t = [];
                for (const i of e) {
                    const e = Ci[i.codePointAt(0)];
                    if (void 0 === e)
                        throw new Error(`Non-base256emoji character: ${i}`);
                    t.push(e)
                }
                return new Uint8Array(t)
            }
        });
        var Ti = Object.freeze({
            __proto__: null,
            base256emoji: Ai
        })
          , qi = function e(t, i, r) {
            i = i || [];
            for (var n = r = r || 0; t >= ji; )
                i[r++] = 255 & t | Di,
                t /= 128;
            for (; t & $i; )
                i[r++] = 255 & t | Di,
                t >>>= 7;
            return i[r] = 0 | t,
            e.bytes = r - n + 1,
            i
        }
          , Di = 128
          , $i = -128
          , ji = Math.pow(2, 31);
        var Ui = function e(t, i) {
            var r, n = 0, s = (i = i || 0,
            0), o = i, a = t.length;
            do {
                if (o >= a)
                    throw e.bytes = 0,
                    new RangeError("Could not decode varint");
                r = t[o++],
                n += s < 28 ? (r & zi) << s : (r & zi) * Math.pow(2, s),
                s += 7
            } while (r >= Mi);
            return e.bytes = o - i,
            n
        }
          , Mi = 128
          , zi = 127;
        var ki = Math.pow(2, 7)
          , Li = Math.pow(2, 14)
          , Vi = Math.pow(2, 21)
          , Ki = Math.pow(2, 28)
          , Hi = Math.pow(2, 35)
          , Bi = Math.pow(2, 42)
          , Fi = Math.pow(2, 49)
          , Ji = Math.pow(2, 56)
          , Gi = Math.pow(2, 63)
          , Wi = {
            encode: qi,
            decode: Ui,
            encodingLength: function(e) {
                return e < ki ? 1 : e < Li ? 2 : e < Vi ? 3 : e < Ki ? 4 : e < Hi ? 5 : e < Bi ? 6 : e < Fi ? 7 : e < Ji ? 8 : e < Gi ? 9 : 10
            }
        }
          , Qi = Wi;
        const Yi = (e,t,i=0)=>(Qi.encode(e, t, i),
        t)
          , Zi = e=>Qi.encodingLength(e)
          , Xi = (e,t)=>{
            const i = t.byteLength
              , r = Zi(e)
              , n = r + Zi(i)
              , s = new Uint8Array(n + i);
            return Yi(e, s, 0),
            Yi(i, s, r),
            s.set(t, n),
            new er(e,i,t,s)
        }
        ;
        class er {
            constructor(e, t, i, r) {
                this.code = e,
                this.size = t,
                this.digest = i,
                this.bytes = r
            }
        }
        const tr = ({name: e, code: t, encode: i})=>new ir(e,t,i);
        class ir {
            constructor(e, t, i) {
                this.name = e,
                this.code = t,
                this.encode = i
            }
            digest(e) {
                if (e instanceof Uint8Array) {
                    const t = this.encode(e);
                    return t instanceof Uint8Array ? Xi(this.code, t) : t.then((e=>Xi(this.code, e)))
                }
                throw Error("Unknown type, must be binary type")
            }
        }
        const rr = e=>async t=>new Uint8Array(await crypto.subtle.digest(e, t))
          , nr = tr({
            name: "sha2-256",
            code: 18,
            encode: rr("SHA-256")
        })
          , sr = tr({
            name: "sha2-512",
            code: 19,
            encode: rr("SHA-512")
        });
        Object.freeze({
            __proto__: null,
            sha256: nr,
            sha512: sr
        });
        const or = Lt
          , ar = {
            code: 0,
            name: "identity",
            encode: or,
            digest: e=>Xi(0, or(e))
        };
        Object.freeze({
            __proto__: null,
            identity: ar
        });
        new TextEncoder,
        new TextDecoder;
        const cr = {
            ...Yt,
            ...Xt,
            ...ti,
            ...ri,
            ...oi,
            ...yi,
            ...wi,
            ...Ii,
            ...Oi,
            ...Ti
        };
        function hr(e) {
            return null != globalThis.Buffer ? new Uint8Array(e.buffer,e.byteOffset,e.byteLength) : e
        }
        function ur(e, t, i, r) {
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
        const lr = ur("utf8", "u", (e=>"u" + new TextDecoder("utf8").decode(e)), (e=>(new TextEncoder).encode(e.substring(1))))
          , pr = ur("ascii", "a", (e=>{
            let t = "a";
            for (let i = 0; i < e.length; i++)
                t += String.fromCharCode(e[i]);
            return t
        }
        ), (e=>{
            const t = function(e=0) {
                return null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe ? hr(globalThis.Buffer.allocUnsafe(e)) : new Uint8Array(e)
            }((e = e.substring(1)).length);
            for (let i = 0; i < e.length; i++)
                t[i] = e.charCodeAt(i);
            return t
        }
        ))
          , dr = {
            utf8: lr,
            "utf-8": lr,
            hex: cr.base16,
            latin1: pr,
            ascii: pr,
            binary: pr,
            ...cr
        };
        const fr = "core"
          , gr = `wc@2:${fr}:`
          , yr = "error"
          , mr = {
            database: ":memory:"
        }
          , vr = "client_ed25519_seed"
          , wr = p.ONE_DAY
          , _r = p.SIX_HOURS
          , br = "wss://relay.walletconnect.com"
          , Ir = "wss://relay.walletconnect.org"
          , Er = "relayer_message"
          , Pr = "relayer_message_ack"
          , Sr = "relayer_connect"
          , Rr = "relayer_disconnect"
          , Or = "relayer_error"
          , Nr = "relayer_connection_stalled"
          , xr = "relayer_publish"
          , Cr = "payload"
          , Ar = "connect"
          , Tr = "disconnect"
          , qr = "error"
          , Dr = p.ONE_SECOND
          , $r = "subscription_created"
          , jr = "subscription_deleted"
          , Ur = "subscription_sync"
          , Mr = "subscription_resubscribed"
          , zr = 1e3 * p.FIVE_SECONDS
          , kr = {
            wc_pairingDelete: {
                req: {
                    ttl: p.ONE_DAY,
                    prompt: !1,
                    tag: 1e3
                },
                res: {
                    ttl: p.ONE_DAY,
                    prompt: !1,
                    tag: 1001
                }
            },
            wc_pairingPing: {
                req: {
                    ttl: p.THIRTY_SECONDS,
                    prompt: !1,
                    tag: 1002
                },
                res: {
                    ttl: p.THIRTY_SECONDS,
                    prompt: !1,
                    tag: 1003
                }
            },
            unregistered_method: {
                req: {
                    ttl: p.ONE_DAY,
                    prompt: !1,
                    tag: 0
                },
                res: {
                    ttl: p.ONE_DAY,
                    prompt: !1,
                    tag: 0
                }
            }
        }
          , Lr = "pairing_create"
          , Vr = "pairing_expire"
          , Kr = "pairing_delete"
          , Hr = "pairing_ping"
          , Br = "history_created"
          , Fr = "history_updated"
          , Jr = "history_deleted"
          , Gr = "history_sync"
          , Wr = "expirer_created"
          , Qr = "expirer_deleted"
          , Yr = "expirer_expired"
          , Zr = "expirer_sync"
          , Xr = "verify-api"
          , en = "https://verify.walletconnect.com"
          , tn = "https://verify.walletconnect.org"
          , rn = [en, tn];
        class nn {
            constructor(e, t) {
                this.core = e,
                this.logger = t,
                this.keychain = new Map,
                this.name = "keychain",
                this.version = "0.3",
                this.initialized = !1,
                this.storagePrefix = gr,
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
                        const {message: t} = Ne("NO_MATCHING_KEY", `${this.name}: ${e}`);
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
                this.logger = gt(t, this.name)
            }
            get context() {
                return ft(this.logger)
            }
            get storageKey() {
                return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
            }
            async setKeyChain(e) {
                await this.core.storage.setItem(this.storageKey, ee(e))
            }
            async getKeyChain() {
                const e = await this.core.storage.getItem(this.storageKey);
                return typeof e < "u" ? te(e) : void 0
            }
            async persist() {
                await this.setKeyChain(this.keychain)
            }
            isInitialized() {
                if (!this.initialized) {
                    const {message: e} = Ne("NOT_INITIALIZED", this.name);
                    throw new Error(e)
                }
            }
        }
        class sn {
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
                      , t = Ct.generateKeyPair(e);
                    return Ct.encodeIss(t.publicKey)
                }
                ,
                this.generateKeyPair = ()=>{
                    this.isInitialized();
                    const e = function() {
                        const e = h.Au();
                        return {
                            privateKey: (0,
                            u.BB)(e.secretKey, I),
                            publicKey: (0,
                            u.BB)(e.publicKey, I)
                        }
                    }();
                    return this.setPrivateKey(e.publicKey, e.privateKey)
                }
                ,
                this.signJWT = async e=>{
                    this.isInitialized();
                    const t = await this.getClientSeed()
                      , i = Ct.generateKeyPair(t)
                      , r = A()
                      , n = wr;
                    return await Ct.signJWT(r, e, n, i)
                }
                ,
                this.generateSharedKey = (e,t,i)=>{
                    this.isInitialized();
                    const r = function(e, t) {
                        const i = h.gi((0,
                        u.mL)(e, I), (0,
                        u.mL)(t, I), !0)
                          , r = new o.t(c.mE,i).expand(C);
                        return (0,
                        u.BB)(r, I)
                    }(this.getPrivateKey(e), t);
                    return this.setSymKey(r, i)
                }
                ,
                this.setSymKey = async(e,t)=>{
                    this.isInitialized();
                    const i = t || function(e) {
                        const t = (0,
                        c.vp)((0,
                        u.mL)(e, I));
                        return (0,
                        u.BB)(t, I)
                    }(e);
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
                    const r = j(i)
                      , n = (0,
                    xt.u)(t);
                    if (U(r)) {
                        const t = r.senderPublicKey
                          , i = r.receiverPublicKey;
                        e = await this.generateSharedKey(t, i)
                    }
                    const s = this.getSymKey(e)
                      , {type: o, senderPublicKey: a} = r;
                    return D({
                        type: o,
                        symKey: s,
                        message: n,
                        senderPublicKey: a
                    })
                }
                ,
                this.decode = async(e,t,i)=>{
                    this.isInitialized();
                    const r = function(e, t) {
                        const i = $(e);
                        return j({
                            type: q(i.type),
                            senderPublicKey: typeof i.senderPublicKey < "u" ? (0,
                            u.BB)(i.senderPublicKey, I) : void 0,
                            receiverPublicKey: t?.receiverPublicKey
                        })
                    }(t, i);
                    if (U(r)) {
                        const t = r.receiverPublicKey
                          , i = r.senderPublicKey;
                        e = await this.generateSharedKey(t, i)
                    }
                    try {
                        const i = function(e) {
                            const t = new s.OK((0,
                            u.mL)(e.symKey, I))
                              , {sealed: i, iv: r} = $(e.encoded)
                              , n = t.open(r, i);
                            if (null === n)
                                throw new Error("Failed to decrypt");
                            return (0,
                            u.BB)(n, P)
                        }({
                            symKey: this.getSymKey(e),
                            encoded: t
                        });
                        return (0,
                        xt.D)(i)
                    } catch (n) {
                        this.logger.error(`Failed to decode message from topic: '${e}', clientId: '${await this.getClientId()}'`),
                        this.logger.error(n)
                    }
                }
                ,
                this.getPayloadType = e=>q($(e).type),
                this.getPayloadSenderPublicKey = e=>{
                    const t = $(e);
                    return t.senderPublicKey ? (0,
                    u.BB)(t.senderPublicKey, I) : void 0
                }
                ,
                this.core = e,
                this.logger = gt(t, this.name),
                this.keychain = i || new nn(this.core,this.logger)
            }
            get context() {
                return ft(this.logger)
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
                    e = this.keychain.get(vr)
                } catch {
                    e = A(),
                    await this.keychain.set(vr, e)
                }
                return function(e, t="utf8") {
                    const i = dr[t];
                    if (!i)
                        throw new Error(`Unsupported encoding "${t}"`);
                    return "utf8" !== t && "utf-8" !== t || null == globalThis.Buffer || null == globalThis.Buffer.from ? i.decoder.decode(`${i.prefix}${e}`) : hr(globalThis.Buffer.from(e, "utf-8"))
                }(e, "base16")
            }
            getSymKey(e) {
                return this.keychain.get(e)
            }
            isInitialized() {
                if (!this.initialized) {
                    const {message: e} = Ne("NOT_INITIALIZED", this.name);
                    throw new Error(e)
                }
            }
        }
        class on extends wt {
            constructor(e, t) {
                super(e, t),
                this.logger = e,
                this.core = t,
                this.messages = new Map,
                this.name = "messages",
                this.version = "0.3",
                this.initialized = !1,
                this.storagePrefix = gr,
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
                        } catch (lt) {
                            this.logger.debug(`Failed to Restore records for ${this.name}`),
                            this.logger.error(lt)
                        } finally {
                            this.initialized = !0
                        }
                    }
                }
                ,
                this.set = async(e,t)=>{
                    this.isInitialized();
                    const i = T(t);
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
                    return typeof this.get(e)[T(t)] < "u"
                }
                ,
                this.del = async e=>{
                    this.isInitialized(),
                    this.messages.delete(e),
                    await this.persist()
                }
                ,
                this.logger = gt(e, this.name),
                this.core = t
            }
            get context() {
                return ft(this.logger)
            }
            get storageKey() {
                return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
            }
            async setRelayerMessages(e) {
                await this.core.storage.setItem(this.storageKey, ee(e))
            }
            async getRelayerMessages() {
                const e = await this.core.storage.getItem(this.storageKey);
                return typeof e < "u" ? te(e) : void 0
            }
            async persist() {
                await this.setRelayerMessages(this.messages)
            }
            isInitialized() {
                if (!this.initialized) {
                    const {message: e} = Ne("NOT_INITIALIZED", this.name);
                    throw new Error(e)
                }
            }
        }
        class an extends _t {
            constructor(e, t) {
                super(e, t),
                this.relayer = e,
                this.logger = t,
                this.events = new r.EventEmitter,
                this.name = "publisher",
                this.queue = new Map,
                this.publishTimeout = (0,
                p.toMiliseconds)(2 * p.TEN_SECONDS),
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
                        const s = i?.ttl || _r
                          , o = ue(i)
                          , a = i?.prompt || !1
                          , c = i?.tag || 0
                          , h = i?.id || (0,
                        Tt.getBigIntRpcId)().toString()
                          , u = {
                            topic: e,
                            message: t,
                            opts: {
                                ttl: s,
                                relay: o,
                                prompt: a,
                                tag: c,
                                id: h
                            }
                        }
                          , l = setTimeout((()=>this.queue.set(h, u)), this.publishTimeout);
                        try {
                            await await re(this.rpcPublish(e, t, s, o, a, c, h), this.publishTimeout, `Failed to publish payload, please try again. id:${h} tag:${c}`),
                            this.removeRequestFromQueue(h),
                            this.relayer.events.emit(xr, u)
                        } catch (n) {
                            if (this.logger.debug("Publishing Payload stalled"),
                            this.needsTransportRestart = !0,
                            null != (r = i?.internal) && r.throwOnFailedPublish)
                                throw this.removeRequestFromQueue(h),
                                n;
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
                    } catch (wt) {
                        throw this.logger.debug("Failed to Publish Payload"),
                        this.logger.error(wt),
                        wt
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
                this.logger = gt(t, this.name),
                this.registerEventListeners()
            }
            get context() {
                return ft(this.logger)
            }
            rpcPublish(e, t, i, r, n, s, o) {
                var a, c, h, u;
                const l = {
                    method: le(r.protocol).publish,
                    params: {
                        topic: e,
                        message: t,
                        ttl: i,
                        prompt: n,
                        tag: s
                    },
                    id: o
                };
                return Te(null == (a = l.params) ? void 0 : a.prompt) && (null == (c = l.params) || delete c.prompt),
                Te(null == (h = l.params) ? void 0 : h.tag) && (null == (u = l.params) || delete u.tag),
                this.logger.debug("Outgoing Relay Payload"),
                this.logger.trace({
                    type: "message",
                    direction: "outgoing",
                    request: l
                }),
                this.relayer.request(l)
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
                this.relayer.core.heartbeat.on(Xe.HEARTBEAT_EVENTS.pulse, (()=>{
                    if (this.needsTransportRestart)
                        return this.needsTransportRestart = !1,
                        void this.relayer.events.emit(Nr);
                    this.checkQueue()
                }
                )),
                this.relayer.on(Pr, (e=>{
                    this.removeRequestFromQueue(e.id.toString())
                }
                ))
            }
        }
        class cn {
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
        var hn = Object.defineProperty
          , un = Object.defineProperties
          , ln = Object.getOwnPropertyDescriptors
          , pn = Object.getOwnPropertySymbols
          , dn = Object.prototype.hasOwnProperty
          , fn = Object.prototype.propertyIsEnumerable
          , gn = (e,t,i)=>t in e ? hn(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: i
        }) : e[t] = i
          , yn = (e,t)=>{
            for (var i in t || (t = {}))
                dn.call(t, i) && gn(e, i, t[i]);
            if (pn)
                for (var i of pn(t))
                    fn.call(t, i) && gn(e, i, t[i]);
            return e
        }
          , mn = (e,t)=>un(e, ln(t));
        class vn extends Et {
            constructor(e, t) {
                super(e, t),
                this.relayer = e,
                this.logger = t,
                this.subscriptions = new Map,
                this.topicMap = new cn,
                this.events = new r.EventEmitter,
                this.name = "subscription",
                this.version = "0.3",
                this.pending = new Map,
                this.cached = [],
                this.initialized = !1,
                this.pendingSubscriptionWatchLabel = "pending_sub_watch_label",
                this.pollingInterval = 20,
                this.storagePrefix = gr,
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
                        const i = ue(t)
                          , r = {
                            topic: e,
                            relay: i
                        };
                        this.pending.set(e, r);
                        const n = await this.rpcSubscribe(e, i);
                        return this.onSubscribe(n, r),
                        this.logger.debug("Successfully Subscribed Topic"),
                        this.logger.trace({
                            type: "method",
                            method: "subscribe",
                            params: {
                                topic: e,
                                opts: t
                            }
                        }),
                        n
                    } catch (i) {
                        throw this.logger.debug("Failed to Subscribe Topic"),
                        this.logger.error(i),
                        i
                    }
                }
                ,
                this.unsubscribe = async(e,t)=>{
                    await this.restartToComplete(),
                    this.isInitialized(),
                    typeof t?.id < "u" ? await this.unsubscribeById(e, t.id, t) : await this.unsubscribeByTopic(e, t)
                }
                ,
                this.isSubscribed = async e=>{
                    if (this.topics.includes(e))
                        return !0;
                    const t = `${this.pendingSubscriptionWatchLabel}_${e}`;
                    return await new Promise(((i,r)=>{
                        const n = new p.Watch;
                        n.start(t);
                        const s = setInterval((()=>{
                            !this.pending.has(e) && this.topics.includes(e) && (clearInterval(s),
                            n.stop(t),
                            i(!0)),
                            n.elapsed(t) >= zr && (clearInterval(s),
                            n.stop(t),
                            r(new Error("Subscription resolution timeout")))
                        }
                        ), this.pollingInterval)
                    }
                    )).catch((()=>!1))
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
                this.restart = async()=>{
                    this.restartInProgress = !0,
                    await this.restore(),
                    await this.reset(),
                    this.restartInProgress = !1
                }
                ,
                this.relayer = e,
                this.logger = gt(t, this.name),
                this.clientId = ""
            }
            get context() {
                return ft(this.logger)
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
                    const r = ue(i);
                    await this.rpcUnsubscribe(e, t, r);
                    const n = xe("USER_DISCONNECTED", `${this.name}, ${e}`);
                    await this.onUnsubscribe(e, t, n),
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
                    method: le(t.protocol).subscribe,
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
                    await await re(this.relayer.request(i), this.subscribeTimeout)
                } catch {
                    this.logger.debug("Outgoing Relay Subscribe Payload stalled"),
                    this.relayer.events.emit(Nr)
                }
                return T(e + this.clientId)
            }
            async rpcBatchSubscribe(e) {
                if (!e.length)
                    return;
                const t = {
                    method: le(e[0].relay.protocol).batchSubscribe,
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
                    return await await re(this.relayer.request(t), this.subscribeTimeout)
                } catch {
                    this.logger.debug("Outgoing Relay Payload stalled"),
                    this.relayer.events.emit(Nr)
                }
            }
            rpcUnsubscribe(e, t, i) {
                const r = {
                    method: le(i.protocol).unsubscribe,
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
                this.setSubscription(e, mn(yn({}, t), {
                    id: e
                })),
                this.pending.delete(t.topic)
            }
            onBatchSubscribe(e) {
                e.length && e.forEach((e=>{
                    this.setSubscription(e.id, yn({}, e)),
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
                this.subscriptions.set(e, yn({}, t)),
                this.topicMap.set(t.topic, e),
                this.events.emit($r, t)
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
                    const {message: t} = Ne("NO_MATCHING_KEY", `${this.name}: ${e}`);
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
                this.events.emit(jr, mn(yn({}, i), {
                    reason: t
                }))
            }
            async persist() {
                await this.setRelayerSubscriptions(this.values),
                this.events.emit(Ur)
            }
            async reset() {
                if (this.cached.length) {
                    const e = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
                    for (let t = 0; t < e; t++) {
                        const e = this.cached.splice(0, this.batchSubscribeTopicsLimit);
                        await this.batchSubscribe(e)
                    }
                }
                this.events.emit(Mr)
            }
            async restore() {
                try {
                    const e = await this.getRelayerSubscriptions();
                    if (typeof e > "u" || !e.length)
                        return;
                    if (this.subscriptions.size) {
                        const {message: e} = Ne("RESTORE_WILL_OVERRIDE", this.name);
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
                } catch (e) {
                    this.logger.debug(`Failed to Restore subscriptions for ${this.name}`),
                    this.logger.error(e)
                }
            }
            async batchSubscribe(e) {
                if (!e.length)
                    return;
                const t = await this.rpcBatchSubscribe(e);
                Ce(t) && this.onBatchSubscribe(t.map(((t,i)=>mn(yn({}, e[i]), {
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
                this.relayer.core.heartbeat.on(Xe.HEARTBEAT_EVENTS.pulse, (async()=>{
                    await this.checkPending()
                }
                )),
                this.relayer.on(Sr, (async()=>{
                    await this.onConnect()
                }
                )),
                this.relayer.on(Rr, (()=>{
                    this.onDisconnect()
                }
                )),
                this.events.on($r, (async e=>{
                    const t = $r;
                    this.logger.info(`Emitting ${t}`),
                    this.logger.debug({
                        type: "event",
                        event: t,
                        data: e
                    }),
                    await this.persist()
                }
                )),
                this.events.on(jr, (async e=>{
                    const t = jr;
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
                    const {message: e} = Ne("NOT_INITIALIZED", this.name);
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
        var wn = Object.defineProperty
          , _n = Object.getOwnPropertySymbols
          , bn = Object.prototype.hasOwnProperty
          , In = Object.prototype.propertyIsEnumerable
          , En = (e,t,i)=>t in e ? wn(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: i
        }) : e[t] = i;
        class Pn extends bt {
            constructor(e) {
                super(e),
                this.protocol = "wc",
                this.version = 2,
                this.events = new r.EventEmitter,
                this.name = "relayer",
                this.transportExplicitlyClosed = !1,
                this.initialized = !1,
                this.connectionAttemptInProgress = !1,
                this.connectionStatusPollingInterval = 20,
                this.staleConnectionErrors = ["socket hang up", "socket stalled"],
                this.hasExperiencedNetworkDisruption = !1,
                this.requestsInFlight = new Map,
                this.request = async e=>{
                    this.logger.debug("Publishing Request Payload");
                    const t = e.id;
                    try {
                        await this.toEstablishConnection();
                        const i = this.provider.request(e);
                        return this.requestsInFlight.set(t, {
                            promise: i,
                            request: e
                        }),
                        await i
                    } catch (i) {
                        throw this.logger.debug("Failed to Publish Request"),
                        this.logger.error(i),
                        i
                    } finally {
                        this.requestsInFlight.delete(t)
                    }
                }
                ,
                this.onPayloadHandler = e=>{
                    this.onProviderPayload(e)
                }
                ,
                this.onConnectHandler = ()=>{
                    this.events.emit(Sr)
                }
                ,
                this.onDisconnectHandler = ()=>{
                    this.onProviderDisconnect()
                }
                ,
                this.onProviderErrorHandler = e=>{
                    this.logger.error(e),
                    this.events.emit(Or, e),
                    this.logger.info("Fatal socket error received, closing transport"),
                    this.transportClose()
                }
                ,
                this.registerProviderListeners = ()=>{
                    this.provider.on(Cr, this.onPayloadHandler),
                    this.provider.on(Ar, this.onConnectHandler),
                    this.provider.on(Tr, this.onDisconnectHandler),
                    this.provider.on(qr, this.onProviderErrorHandler)
                }
                ,
                this.core = e.core,
                this.logger = typeof e.logger < "u" && "string" != typeof e.logger ? gt(e.logger, this.name) : tt()(dt({
                    level: e.logger || "error"
                })),
                this.messages = new on(this.logger,e.core),
                this.subscriber = new vn(this,this.logger),
                this.publisher = new an(this,this.logger),
                this.relayUrl = e?.relayUrl || br,
                this.projectId = e.projectId,
                this.bundleId = function() {
                    var e;
                    try {
                        return G() && typeof i.g < "u" && typeof (null == i.g ? void 0 : i.g.Application) < "u" ? null == (e = i.g.Application) ? void 0 : e.applicationId : void 0
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
                    this.logger.warn(`Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${Ir}...`),
                    await this.restartTransport(Ir)
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
                return ft(this.logger)
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
                let r, n = (null == (i = this.subscriber.topicMap.get(e)) ? void 0 : i[0]) || "";
                if (n)
                    return n;
                const s = t=>{
                    t.topic === e && (this.subscriber.off($r, s),
                    r())
                }
                ;
                return await Promise.all([new Promise((e=>{
                    r = e,
                    this.subscriber.on($r, s)
                }
                )), new Promise((async i=>{
                    n = await this.subscriber.subscribe(e, t),
                    i()
                }
                ))]),
                n
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
                this.requestsInFlight.size > 0 && (this.logger.debug("Waiting for all in-flight requests to finish before closing transport..."),
                this.requestsInFlight.forEach((async e=>{
                    await e.promise
                }
                ))),
                this.transportExplicitlyClosed = !0,
                this.hasExperiencedNetworkDisruption && this.connected ? await re(this.provider.disconnect(), 1e3, "provider.disconnect()").catch((()=>this.onProviderDisconnect())) : this.connected && await this.provider.disconnect()
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
                            this.subscriber.once(Mr, (()=>{
                                e()
                            }
                            ))
                        }
                        )), new Promise((async(e,t)=>{
                            try {
                                await re(this.provider.connect(), 1e4, `Socket stalled when trying to connect to ${this.relayUrl}`)
                            } catch (i) {
                                return void t(i)
                            }
                            e()
                        }
                        ))])
                    } catch (t) {
                        this.logger.error(t);
                        const e = t;
                        if (!this.isConnectionStalled(e.message))
                            throw t;
                        this.provider.events.emit(Tr)
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
                if (!(await Ge()))
                    throw new Error("No internet connection detected. Please restart your network and try again.")
            }
            isConnectionStalled(e) {
                return this.staleConnectionErrors.some((t=>e.includes(t)))
            }
            async createProvider() {
                this.provider.connection && this.unregisterProviderListeners();
                const e = await this.core.crypto.signJWT(this.relayUrl);
                this.provider = new At.r(new qt.Z(Z({
                    sdkVersion: "2.11.2",
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
                Tt.isJsonRpcRequest)(e)) {
                    if (!e.method.endsWith("_subscription"))
                        return;
                    const t = e.params
                      , {topic: i, message: r, publishedAt: n} = t.data
                      , s = {
                        topic: i,
                        message: r,
                        publishedAt: n
                    };
                    this.logger.debug("Emitting Relayer Payload"),
                    this.logger.trace(((e,t)=>{
                        for (var i in t || (t = {}))
                            bn.call(t, i) && En(e, i, t[i]);
                        if (_n)
                            for (var i of _n(t))
                                In.call(t, i) && En(e, i, t[i]);
                        return e
                    }
                    )({
                        type: "event",
                        event: t.id
                    }, s)),
                    this.events.emit(t.id, s),
                    await this.acknowledgePayload(e),
                    await this.onMessageEvent(s)
                } else
                    (0,
                    Tt.isJsonRpcResponse)(e) && this.events.emit(Pr, e)
            }
            async onMessageEvent(e) {
                await this.shouldIgnoreMessageEvent(e) || (this.events.emit(Er, e),
                await this.recordMessageEvent(e))
            }
            async acknowledgePayload(e) {
                const t = (0,
                Tt.formatJsonRpcResult)(e.id, !0);
                await this.provider.connection.send(t)
            }
            unregisterProviderListeners() {
                this.provider.off(Cr, this.onPayloadHandler),
                this.provider.off(Ar, this.onConnectHandler),
                this.provider.off(Tr, this.onDisconnectHandler),
                this.provider.off(qr, this.onProviderErrorHandler)
            }
            async registerEventListeners() {
                this.events.on(Nr, (()=>{
                    this.restartTransport().catch((e=>this.logger.error(e)))
                }
                ));
                let e = await Ge();
                We((async t=>{
                    this.initialized && e !== t && (e = t,
                    t ? await this.restartTransport().catch((e=>this.logger.error(e))) : (this.hasExperiencedNetworkDisruption = !0,
                    await this.transportClose().catch((e=>this.logger.error(e)))))
                }
                ))
            }
            onProviderDisconnect() {
                this.events.emit(Rr),
                this.attemptToReconnect()
            }
            attemptToReconnect() {
                this.transportExplicitlyClosed || (this.logger.info("attemptToReconnect called. Connecting..."),
                setTimeout((async()=>{
                    await this.restartTransport().catch((e=>this.logger.error(e)))
                }
                ), (0,
                p.toMiliseconds)(Dr)))
            }
            isInitialized() {
                if (!this.initialized) {
                    const {message: e} = Ne("NOT_INITIALIZED", this.name);
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
        var Sn = Object.defineProperty
          , Rn = Object.getOwnPropertySymbols
          , On = Object.prototype.hasOwnProperty
          , Nn = Object.prototype.propertyIsEnumerable
          , xn = (e,t,i)=>t in e ? Sn(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: i
        }) : e[t] = i
          , Cn = (e,t)=>{
            for (var i in t || (t = {}))
                On.call(t, i) && xn(e, i, t[i]);
            if (Rn)
                for (var i of Rn(t))
                    Nn.call(t, i) && xn(e, i, t[i]);
            return e
        }
        ;
        class An extends It {
            constructor(e, t, i, r=gr, n=void 0) {
                super(e, t, i, r),
                this.core = e,
                this.logger = t,
                this.name = i,
                this.map = new Map,
                this.version = "0.3",
                this.cached = [],
                this.initialized = !1,
                this.storagePrefix = gr,
                this.init = async()=>{
                    this.initialized || (this.logger.trace("Initialized"),
                    await this.restore(),
                    this.cached.forEach((e=>{
                        this.getKey && null !== e && !Te(e) ? this.map.set(this.getKey(e), e) : function(e) {
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
                e ? this.values.filter((t=>Object.keys(e).every((i=>$t()(t[i], e[i]))))) : this.values),
                this.update = async(e,t)=>{
                    this.isInitialized(),
                    this.logger.debug("Updating value"),
                    this.logger.trace({
                        type: "method",
                        method: "update",
                        key: e,
                        update: t
                    });
                    const i = Cn(Cn({}, this.getData(e)), t);
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
                this.logger = gt(t, this.name),
                this.storagePrefix = r,
                this.getKey = n
            }
            get context() {
                return ft(this.logger)
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
                    const {message: t} = Ne("NO_MATCHING_KEY", `${this.name}: ${e}`);
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
                        const {message: e} = Ne("RESTORE_WILL_OVERRIDE", this.name);
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
                } catch (e) {
                    this.logger.debug(`Failed to Restore value for ${this.name}`),
                    this.logger.error(e)
                }
            }
            isInitialized() {
                if (!this.initialized) {
                    const {message: e} = Ne("NOT_INITIALIZED", this.name);
                    throw new Error(e)
                }
            }
        }
        class Tn {
            constructor(e, t) {
                this.core = e,
                this.logger = t,
                this.name = "pairing",
                this.version = "0.3",
                this.events = new (n()),
                this.initialized = !1,
                this.storagePrefix = gr,
                this.ignoredPayloadTypes = [R],
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
                    const e = A()
                      , t = await this.core.crypto.setSymKey(e)
                      , i = oe(p.FIVE_MINUTES)
                      , r = {
                        protocol: "irn"
                    }
                      , n = {
                        topic: t,
                        expiry: i,
                        relay: r,
                        active: !1
                    }
                      , s = Ie({
                        protocol: this.core.protocol,
                        version: this.core.version,
                        topic: t,
                        symKey: e,
                        relay: r,
                        expiryTimestamp: i
                    });
                    return await this.pairings.set(t, n),
                    await this.core.relayer.subscribe(t),
                    this.core.expirer.set(t, i),
                    {
                        topic: t,
                        uri: s
                    }
                }
                ,
                this.pair = async e=>{
                    this.isInitialized(),
                    this.isValidPair(e);
                    const {topic: t, symKey: i, relay: r, expiryTimestamp: n} = _e(e.uri);
                    let s;
                    if (this.pairings.keys.includes(t) && (s = this.pairings.get(t),
                    s.active))
                        throw new Error(`Pairing already exists: ${t}. Please try again with a new connection URI.`);
                    const o = n || oe(p.FIVE_MINUTES)
                      , a = {
                        topic: t,
                        relay: r,
                        expiry: o,
                        active: !1
                    };
                    return await this.pairings.set(t, a),
                    this.core.expirer.set(t, o),
                    e.activatePairing && await this.activate({
                        topic: t
                    }),
                    this.events.emit(Lr, a),
                    this.core.crypto.keychain.has(t) || (await this.core.crypto.setSymKey(i, t),
                    await this.core.relayer.subscribe(t, {
                        relay: r
                    })),
                    a
                }
                ,
                this.activate = async({topic: e})=>{
                    this.isInitialized();
                    const t = oe(p.THIRTY_DAYS);
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
                          , {done: i, resolve: r, reject: n} = ie();
                        this.events.once(ce("pairing_ping", e), (({error: e})=>{
                            e ? n(e) : r()
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
                    this.pairings.keys.includes(t) && (await this.sendRequest(t, "wc_pairingDelete", xe("USER_DISCONNECTED")),
                    await this.deletePairing(t))
                }
                ,
                this.sendRequest = async(e,t,i)=>{
                    const r = (0,
                    Tt.formatJsonRpcRequest)(t, i)
                      , n = await this.core.crypto.encode(e, r)
                      , s = kr[t].req;
                    return this.core.history.set(e, r),
                    this.core.relayer.publish(e, n, s),
                    r.id
                }
                ,
                this.sendResult = async(e,t,i)=>{
                    const r = (0,
                    Tt.formatJsonRpcResult)(e, i)
                      , n = await this.core.crypto.encode(t, r)
                      , s = await this.core.history.get(t, e)
                      , o = kr[s.request.method].res;
                    await this.core.relayer.publish(t, n, o),
                    await this.core.history.resolve(r)
                }
                ,
                this.sendError = async(e,t,i)=>{
                    const r = (0,
                    Tt.formatJsonRpcError)(e, i)
                      , n = await this.core.crypto.encode(t, r)
                      , s = await this.core.history.get(t, e)
                      , o = kr[s.request.method] ? kr[s.request.method].res : kr.unregistered_method.res;
                    await this.core.relayer.publish(t, n, o),
                    await this.core.history.resolve(r)
                }
                ,
                this.deletePairing = async(e,t)=>{
                    await this.core.relayer.unsubscribe(e),
                    await Promise.all([this.pairings.delete(e, xe("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(e), t ? Promise.resolve() : this.core.expirer.del(e)])
                }
                ,
                this.cleanup = async()=>{
                    const e = this.pairings.getAll().filter((e=>ae(e.expiry)));
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
                        this.events.emit(Hr, {
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
                        Tt.isJsonRpcResult)(t) ? this.events.emit(ce("pairing_ping", i), {}) : (0,
                        Tt.isJsonRpcError)(t) && this.events.emit(ce("pairing_ping", i), {
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
                        this.events.emit(Kr, {
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
                        const t = xe("WC_METHOD_UNSUPPORTED", r);
                        await this.sendError(i, e, t),
                        this.logger.error(t)
                    } catch (wt) {
                        await this.sendError(i, e, wt),
                        this.logger.error(wt)
                    }
                }
                ,
                this.onUnknownRpcMethodResponse = e=>{
                    this.registeredMethods.includes(e) || this.logger.error(xe("WC_METHOD_UNSUPPORTED", e))
                }
                ,
                this.isValidPair = e=>{
                    var t;
                    if (!Ve(e)) {
                        const {message: t} = Ne("MISSING_OR_INVALID", `pair() params: ${e}`);
                        throw new Error(t)
                    }
                    if (!function(e) {
                        if (qe(e, !1))
                            try {
                                return typeof new URL(e) < "u"
                            } catch {
                                return !1
                            }
                        return !1
                    }(e.uri)) {
                        const {message: t} = Ne("MISSING_OR_INVALID", `pair() uri: ${e.uri}`);
                        throw new Error(t)
                    }
                    const i = _e(e.uri);
                    if (null == (t = i?.relay) || !t.protocol) {
                        const {message: e} = Ne("MISSING_OR_INVALID", "pair() uri#relay-protocol");
                        throw new Error(e)
                    }
                    if (null == i || !i.symKey) {
                        const {message: e} = Ne("MISSING_OR_INVALID", "pair() uri#symKey");
                        throw new Error(e)
                    }
                    if (null != i && i.expiryTimestamp && (0,
                    p.toMiliseconds)(i?.expiryTimestamp) < Date.now()) {
                        const {message: e} = Ne("EXPIRED", "pair() URI has expired. Please try again with a new connection URI.");
                        throw new Error(e)
                    }
                }
                ,
                this.isValidPing = async e=>{
                    if (!Ve(e)) {
                        const {message: t} = Ne("MISSING_OR_INVALID", `ping() params: ${e}`);
                        throw new Error(t)
                    }
                    const {topic: t} = e;
                    await this.isValidPairingTopic(t)
                }
                ,
                this.isValidDisconnect = async e=>{
                    if (!Ve(e)) {
                        const {message: t} = Ne("MISSING_OR_INVALID", `disconnect() params: ${e}`);
                        throw new Error(t)
                    }
                    const {topic: t} = e;
                    await this.isValidPairingTopic(t)
                }
                ,
                this.isValidPairingTopic = async e=>{
                    if (!qe(e, !1)) {
                        const {message: t} = Ne("MISSING_OR_INVALID", `pairing topic should be a string: ${e}`);
                        throw new Error(t)
                    }
                    if (!this.pairings.keys.includes(e)) {
                        const {message: t} = Ne("NO_MATCHING_KEY", `pairing topic doesn't exist: ${e}`);
                        throw new Error(t)
                    }
                    if (ae(this.pairings.get(e).expiry)) {
                        await this.deletePairing(e);
                        const {message: t} = Ne("EXPIRED", `pairing topic: ${e}`);
                        throw new Error(t)
                    }
                }
                ,
                this.core = e,
                this.logger = gt(t, this.name),
                this.pairings = new An(this.core,this.logger,this.name,this.storagePrefix)
            }
            get context() {
                return ft(this.logger)
            }
            isInitialized() {
                if (!this.initialized) {
                    const {message: e} = Ne("NOT_INITIALIZED", this.name);
                    throw new Error(e)
                }
            }
            registerRelayerEvents() {
                this.core.relayer.on(Er, (async e=>{
                    const {topic: t, message: i} = e;
                    if (!this.pairings.keys.includes(t) || this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(i)))
                        return;
                    const r = await this.core.crypto.decode(t, i);
                    try {
                        (0,
                        Tt.isJsonRpcRequest)(r) ? (this.core.history.set(t, r),
                        this.onRelayEventRequest({
                            topic: t,
                            payload: r
                        })) : (0,
                        Tt.isJsonRpcResponse)(r) && (await this.core.history.resolve(r),
                        await this.onRelayEventResponse({
                            topic: t,
                            payload: r
                        }),
                        this.core.history.delete(t, r.id))
                    } catch (n) {
                        this.logger.error(n)
                    }
                }
                ))
            }
            registerExpirerEvents() {
                this.core.expirer.on(Yr, (async e=>{
                    const {topic: t} = se(e.target);
                    t && this.pairings.keys.includes(t) && (await this.deletePairing(t, !0),
                    this.events.emit(Vr, {
                        topic: t
                    }))
                }
                ))
            }
        }
        class qn extends vt {
            constructor(e, t) {
                super(e, t),
                this.core = e,
                this.logger = t,
                this.records = new Map,
                this.events = new r.EventEmitter,
                this.name = "history",
                this.version = "0.3",
                this.cached = [],
                this.initialized = !1,
                this.storagePrefix = gr,
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
                        expiry: oe(p.THIRTY_DAYS)
                    };
                    this.records.set(r.id, r),
                    this.events.emit(Br, r)
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
                    Tt.isJsonRpcError)(e) ? {
                        error: e.error
                    } : {
                        result: e.result
                    },
                    this.records.set(t.id, t),
                    this.events.emit(Fr, t))
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
                            this.events.emit(Jr, i)
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
                this.logger = gt(t, this.name)
            }
            get context() {
                return ft(this.logger)
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
                        Tt.formatJsonRpcRequest)(t.request.method, t.request.params, t.id),
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
                    const {message: t} = Ne("NO_MATCHING_KEY", `${this.name}: ${e}`);
                    throw new Error(t)
                }
                return t
            }
            async persist() {
                await this.setJsonRpcRecords(this.values),
                this.events.emit(Gr)
            }
            async restore() {
                try {
                    const e = await this.getJsonRpcRecords();
                    if (typeof e > "u" || !e.length)
                        return;
                    if (this.records.size) {
                        const {message: e} = Ne("RESTORE_WILL_OVERRIDE", this.name);
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
                } catch (e) {
                    this.logger.debug(`Failed to Restore records for ${this.name}`),
                    this.logger.error(e)
                }
            }
            registerEventListeners() {
                this.events.on(Br, (e=>{
                    const t = Br;
                    this.logger.info(`Emitting ${t}`),
                    this.logger.debug({
                        type: "event",
                        event: t,
                        record: e
                    }),
                    this.persist()
                }
                )),
                this.events.on(Fr, (e=>{
                    const t = Fr;
                    this.logger.info(`Emitting ${t}`),
                    this.logger.debug({
                        type: "event",
                        event: t,
                        record: e
                    }),
                    this.persist()
                }
                )),
                this.events.on(Jr, (e=>{
                    const t = Jr;
                    this.logger.info(`Emitting ${t}`),
                    this.logger.debug({
                        type: "event",
                        event: t,
                        record: e
                    }),
                    this.persist()
                }
                )),
                this.core.heartbeat.on(Xe.HEARTBEAT_EVENTS.pulse, (()=>{
                    this.cleanup()
                }
                ))
            }
            cleanup() {
                try {
                    this.records.forEach((e=>{
                        (0,
                        p.toMiliseconds)(e.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${e.id}`),
                        this.delete(e.topic, e.id))
                    }
                    ))
                } catch (e) {
                    this.logger.warn(e)
                }
            }
            isInitialized() {
                if (!this.initialized) {
                    const {message: e} = Ne("NOT_INITIALIZED", this.name);
                    throw new Error(e)
                }
            }
        }
        class Dn extends Pt {
            constructor(e, t) {
                super(e, t),
                this.core = e,
                this.logger = t,
                this.expirations = new Map,
                this.events = new r.EventEmitter,
                this.name = "expirer",
                this.version = "0.3",
                this.cached = [],
                this.initialized = !1,
                this.storagePrefix = gr,
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
                    this.events.emit(Wr, {
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
                        this.events.emit(Qr, {
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
                this.logger = gt(t, this.name)
            }
            get context() {
                return ft(this.logger)
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
                        return ne("topic", e)
                    }(e);
                if ("number" == typeof e)
                    return function(e) {
                        return ne("id", e)
                    }(e);
                const {message: t} = Ne("UNKNOWN_TYPE", "Target type: " + typeof e);
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
                this.events.emit(Zr)
            }
            async restore() {
                try {
                    const e = await this.getExpirations();
                    if (typeof e > "u" || !e.length)
                        return;
                    if (this.expirations.size) {
                        const {message: e} = Ne("RESTORE_WILL_OVERRIDE", this.name);
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
                } catch (e) {
                    this.logger.debug(`Failed to Restore expirations for ${this.name}`),
                    this.logger.error(e)
                }
            }
            getExpiration(e) {
                const t = this.expirations.get(e);
                if (!t) {
                    const {message: t} = Ne("NO_MATCHING_KEY", `${this.name}: ${e}`);
                    throw this.logger.error(t),
                    new Error(t)
                }
                return t
            }
            checkExpiry(e, t) {
                const {expiry: i} = t;
                (0,
                p.toMiliseconds)(i) - Date.now() <= 0 && this.expire(e, t)
            }
            expire(e, t) {
                this.expirations.delete(e),
                this.events.emit(Yr, {
                    target: e,
                    expiration: t
                })
            }
            checkExpirations() {
                this.core.relayer.connected && this.expirations.forEach(((e,t)=>this.checkExpiry(t, e)))
            }
            registerEventListeners() {
                this.core.heartbeat.on(Xe.HEARTBEAT_EVENTS.pulse, (()=>this.checkExpirations())),
                this.events.on(Wr, (e=>{
                    const t = Wr;
                    this.logger.info(`Emitting ${t}`),
                    this.logger.debug({
                        type: "event",
                        event: t,
                        data: e
                    }),
                    this.persist()
                }
                )),
                this.events.on(Yr, (e=>{
                    const t = Yr;
                    this.logger.info(`Emitting ${t}`),
                    this.logger.debug({
                        type: "event",
                        event: t,
                        data: e
                    }),
                    this.persist()
                }
                )),
                this.events.on(Qr, (e=>{
                    const t = Qr;
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
                    const {message: e} = Ne("NOT_INITIALIZED", this.name);
                    throw new Error(e)
                }
            }
        }
        class $n extends St {
            constructor(e, t) {
                super(e, t),
                this.projectId = e,
                this.logger = t,
                this.name = Xr,
                this.initialized = !1,
                this.queue = [],
                this.verifyDisabled = !1,
                this.init = async e=>{
                    if (this.verifyDisabled || G() || !W())
                        return;
                    const t = this.getVerifyUrl(e?.verifyUrl);
                    this.verifyUrl !== t && this.removeIframe(),
                    this.verifyUrl = t;
                    try {
                        await this.createIframe()
                    } catch (i) {
                        this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`),
                        this.logger.info(i)
                    }
                    if (!this.initialized) {
                        this.removeIframe(),
                        this.verifyUrl = tn;
                        try {
                            await this.createIframe()
                        } catch (i) {
                            this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`),
                            this.logger.info(i),
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
                        i = await this.fetchAttestation(e.attestationId, tn)
                    }
                    return i
                }
                ,
                this.fetchAttestation = async(e,t)=>{
                    this.logger.info(`resolving attestation: ${e} from url: ${t}`);
                    const i = this.startAbortTimer(2 * p.ONE_SECOND)
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
                        if (document.getElementById(Xr))
                            return i();
                        window.addEventListener("message", t);
                        const r = document.createElement("iframe");
                        r.id = Xr,
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
                    p.toMiliseconds)(p.FIVE_SECONDS))))])
                }
                ,
                this.removeIframe = ()=>{
                    this.iframe && (this.iframe.remove(),
                    this.iframe = void 0,
                    this.initialized = !1)
                }
                ,
                this.getVerifyUrl = e=>{
                    let t = e || en;
                    return rn.includes(t) || (this.logger.info(`verify url: ${t}, not included in trusted list, assigning default: ${en}`),
                    t = en),
                    t
                }
                ,
                this.logger = gt(t, this.name),
                this.verifyUrl = en,
                this.abortController = new AbortController,
                this.isDevEnv = J() && Mt.env.IS_VITEST
            }
            get context() {
                return ft(this.logger)
            }
            startAbortTimer(e) {
                return this.abortController = new AbortController,
                setTimeout((()=>this.abortController.abort()), (0,
                p.toMiliseconds)(e))
            }
        }
        class jn extends Rt {
            constructor(e, t) {
                super(e, t),
                this.projectId = e,
                this.logger = t,
                this.context = "echo",
                this.registerDeviceToken = async e=>{
                    const {clientId: t, token: i, notificationType: r, enableEncrypted: n=!1} = e
                      , s = `https://echo.walletconnect.com/${this.projectId}/clients`;
                    await Ut()(s, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            client_id: t,
                            type: r,
                            token: i,
                            always_raw: n
                        })
                    })
                }
                ,
                this.logger = gt(t, this.context)
            }
        }
        var Un = Object.defineProperty
          , Mn = Object.getOwnPropertySymbols
          , zn = Object.prototype.hasOwnProperty
          , kn = Object.prototype.propertyIsEnumerable
          , Ln = (e,t,i)=>t in e ? Un(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: i
        }) : e[t] = i
          , Vn = (e,t)=>{
            for (var i in t || (t = {}))
                zn.call(t, i) && Ln(e, i, t[i]);
            if (Mn)
                for (var i of Mn(t))
                    kn.call(t, i) && Ln(e, i, t[i]);
            return e
        }
        ;
        class Kn extends mt {
            constructor(e) {
                super(e),
                this.protocol = "wc",
                this.version = 2,
                this.name = fr,
                this.events = new r.EventEmitter,
                this.initialized = !1,
                this.on = (e,t)=>this.events.on(e, t),
                this.once = (e,t)=>this.events.once(e, t),
                this.off = (e,t)=>this.events.off(e, t),
                this.removeListener = (e,t)=>this.events.removeListener(e, t),
                this.projectId = e?.projectId,
                this.relayUrl = e?.relayUrl || br,
                this.customStoragePrefix = null != e && e.customStoragePrefix ? `:${e.customStoragePrefix}` : "";
                const t = typeof e?.logger < "u" && "string" != typeof e?.logger ? e.logger : tt()(dt({
                    level: e?.logger || yr
                }));
                this.logger = gt(t, this.name),
                this.heartbeat = new Xe.HeartBeat,
                this.crypto = new sn(this,this.logger,e?.keychain),
                this.history = new qn(this,this.logger),
                this.expirer = new Dn(this,this.logger),
                this.storage = null != e && e.storage ? e.storage : new Ze.Z(Vn(Vn({}, mr), e?.storageOptions)),
                this.relayer = new Pn({
                    core: this,
                    logger: this.logger,
                    relayUrl: this.relayUrl,
                    projectId: this.projectId
                }),
                this.pairing = new Tn(this,this.logger),
                this.verify = new $n(this.projectId || "",this.logger),
                this.echoClient = new jn(this.projectId || "",this.logger)
            }
            static async init(e) {
                const t = new Kn(e);
                await t.initialize();
                const i = await t.crypto.getClientId();
                return await t.storage.setItem("WALLETCONNECT_CLIENT_ID", i),
                t
            }
            get context() {
                return ft(this.logger)
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
                } catch (e) {
                    throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, e),
                    this.logger.error(e.message),
                    e
                }
            }
        }
        const Hn = Kn
          , Bn = "client"
          , Fn = `wc@2:${Bn}:`
          , Jn = Bn
          , Gn = "error"
          , Wn = "WALLETCONNECT_DEEPLINK_CHOICE"
          , Qn = "Proposal expired"
          , Yn = p.SEVEN_DAYS
          , Zn = {
            wc_sessionPropose: {
                req: {
                    ttl: p.FIVE_MINUTES,
                    prompt: !0,
                    tag: 1100
                },
                res: {
                    ttl: p.FIVE_MINUTES,
                    prompt: !1,
                    tag: 1101
                }
            },
            wc_sessionSettle: {
                req: {
                    ttl: p.FIVE_MINUTES,
                    prompt: !1,
                    tag: 1102
                },
                res: {
                    ttl: p.FIVE_MINUTES,
                    prompt: !1,
                    tag: 1103
                }
            },
            wc_sessionUpdate: {
                req: {
                    ttl: p.ONE_DAY,
                    prompt: !1,
                    tag: 1104
                },
                res: {
                    ttl: p.ONE_DAY,
                    prompt: !1,
                    tag: 1105
                }
            },
            wc_sessionExtend: {
                req: {
                    ttl: p.ONE_DAY,
                    prompt: !1,
                    tag: 1106
                },
                res: {
                    ttl: p.ONE_DAY,
                    prompt: !1,
                    tag: 1107
                }
            },
            wc_sessionRequest: {
                req: {
                    ttl: p.FIVE_MINUTES,
                    prompt: !0,
                    tag: 1108
                },
                res: {
                    ttl: p.FIVE_MINUTES,
                    prompt: !1,
                    tag: 1109
                }
            },
            wc_sessionEvent: {
                req: {
                    ttl: p.FIVE_MINUTES,
                    prompt: !0,
                    tag: 1110
                },
                res: {
                    ttl: p.FIVE_MINUTES,
                    prompt: !1,
                    tag: 1111
                }
            },
            wc_sessionDelete: {
                req: {
                    ttl: p.ONE_DAY,
                    prompt: !1,
                    tag: 1112
                },
                res: {
                    ttl: p.ONE_DAY,
                    prompt: !1,
                    tag: 1113
                }
            },
            wc_sessionPing: {
                req: {
                    ttl: p.THIRTY_SECONDS,
                    prompt: !1,
                    tag: 1114
                },
                res: {
                    ttl: p.THIRTY_SECONDS,
                    prompt: !1,
                    tag: 1115
                }
            }
        }
          , Xn = {
            min: p.FIVE_MINUTES,
            max: p.SEVEN_DAYS
        }
          , es = "IDLE"
          , ts = "ACTIVE"
          , is = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
        var rs = Object.defineProperty
          , ns = Object.defineProperties
          , ss = Object.getOwnPropertyDescriptors
          , os = Object.getOwnPropertySymbols
          , as = Object.prototype.hasOwnProperty
          , cs = Object.prototype.propertyIsEnumerable
          , hs = (e,t,i)=>t in e ? rs(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: i
        }) : e[t] = i
          , us = (e,t)=>{
            for (var i in t || (t = {}))
                as.call(t, i) && hs(e, i, t[i]);
            if (os)
                for (var i of os(t))
                    cs.call(t, i) && hs(e, i, t[i]);
            return e
        }
          , ls = (e,t)=>ns(e, ss(t));
        class ps extends Nt {
            constructor(e) {
                super(e),
                this.name = "engine",
                this.events = new (n()),
                this.initialized = !1,
                this.ignoredPayloadTypes = [R],
                this.requestQueue = {
                    state: es,
                    queue: []
                },
                this.sessionRequestQueue = {
                    state: es,
                    queue: []
                },
                this.requestQueueDelay = p.ONE_SECOND,
                this.init = async()=>{
                    this.initialized || (await this.cleanup(),
                    this.registerRelayerEvents(),
                    this.registerExpirerEvents(),
                    this.registerPairingEvents(),
                    this.client.core.pairing.register({
                        methods: Object.keys(Zn)
                    }),
                    this.initialized = !0,
                    setTimeout((()=>{
                        this.sessionRequestQueue.queue = this.getPendingSessionRequests(),
                        this.processSessionRequestQueue()
                    }
                    ), (0,
                    p.toMiliseconds)(this.requestQueueDelay)))
                }
                ,
                this.connect = async e=>{
                    await this.isInitialized();
                    const t = ls(us({}, e), {
                        requiredNamespaces: e.requiredNamespaces || {},
                        optionalNamespaces: e.optionalNamespaces || {}
                    });
                    await this.isValidConnect(t);
                    const {pairingTopic: i, requiredNamespaces: r, optionalNamespaces: n, sessionProperties: s, relays: o} = t;
                    let a, c = i, h = !1;
                    if (c && (h = this.client.core.pairing.pairings.get(c).active),
                    !c || !h) {
                        const {topic: e, uri: t} = await this.client.core.pairing.create();
                        c = e,
                        a = t
                    }
                    const u = await this.client.core.crypto.generateKeyPair()
                      , l = Zn.wc_sessionPropose.req.ttl || p.FIVE_MINUTES
                      , d = oe(l)
                      , f = us({
                        requiredNamespaces: r,
                        optionalNamespaces: n,
                        relays: o ?? [{
                            protocol: "irn"
                        }],
                        proposer: {
                            publicKey: u,
                            metadata: this.client.metadata
                        },
                        expiryTimestamp: d
                    }, s && {
                        sessionProperties: s
                    })
                      , {reject: g, resolve: y, done: m} = ie(l, Qn);
                    if (this.events.once(ce("session_connect"), (async({error: e, session: t})=>{
                        if (e)
                            g(e);
                        else if (t) {
                            t.self.publicKey = u;
                            const e = ls(us({}, t), {
                                requiredNamespaces: f.requiredNamespaces,
                                optionalNamespaces: f.optionalNamespaces
                            });
                            await this.client.session.set(t.topic, e),
                            await this.setExpiry(t.topic, t.expiry),
                            c && await this.client.core.pairing.updateMetadata({
                                topic: c,
                                metadata: t.peer.metadata
                            }),
                            y(e)
                        }
                    }
                    )),
                    !c) {
                        const {message: e} = Ne("NO_MATCHING_KEY", `connect() pairing topic: ${c}`);
                        throw new Error(e)
                    }
                    const v = await this.sendRequest({
                        topic: c,
                        method: "wc_sessionPropose",
                        params: f,
                        throwOnFailedPublish: !0
                    });
                    return await this.setProposal(v, us({
                        id: v
                    }, f)),
                    {
                        uri: a,
                        approval: m
                    }
                }
                ,
                this.pair = async e=>(await this.isInitialized(),
                await this.client.core.pairing.pair(e)),
                this.approve = async e=>{
                    await this.isInitialized(),
                    await this.isValidApprove(e);
                    const {id: t, relayProtocol: i, namespaces: r, sessionProperties: n} = e
                      , s = this.client.proposal.get(t);
                    let {pairingTopic: o, proposer: a, requiredNamespaces: c, optionalNamespaces: h} = s;
                    o = o || "";
                    const u = await this.client.core.crypto.generateKeyPair()
                      , l = a.publicKey
                      , p = await this.client.core.crypto.generateSharedKey(u, l);
                    o && t && (await this.client.core.pairing.updateMetadata({
                        topic: o,
                        metadata: a.metadata
                    }),
                    await this.sendResult({
                        id: t,
                        topic: o,
                        result: {
                            relay: {
                                protocol: i ?? "irn"
                            },
                            responderPublicKey: u
                        }
                    }),
                    await this.client.proposal.delete(t, xe("USER_DISCONNECTED")),
                    await this.client.core.pairing.activate({
                        topic: o
                    }));
                    const d = us({
                        relay: {
                            protocol: i ?? "irn"
                        },
                        namespaces: r,
                        pairingTopic: o,
                        controller: {
                            publicKey: u,
                            metadata: this.client.metadata
                        },
                        expiry: oe(Yn)
                    }, n && {
                        sessionProperties: n
                    });
                    await this.client.core.relayer.subscribe(p);
                    const f = ls(us({}, d), {
                        topic: p,
                        requiredNamespaces: c,
                        optionalNamespaces: h,
                        pairingTopic: o,
                        acknowledged: !1,
                        self: d.controller,
                        peer: {
                            publicKey: a.publicKey,
                            metadata: a.metadata
                        },
                        controller: u
                    });
                    await this.client.session.set(p, f);
                    try {
                        await this.sendRequest({
                            topic: p,
                            method: "wc_sessionSettle",
                            params: d,
                            throwOnFailedPublish: !0
                        })
                    } catch (X) {
                        throw this.client.logger.error(X),
                        this.client.session.delete(p, xe("USER_DISCONNECTED")),
                        await this.client.core.relayer.unsubscribe(p),
                        X
                    }
                    return await this.setExpiry(p, oe(Yn)),
                    {
                        topic: p,
                        acknowledged: ()=>new Promise((e=>setTimeout((()=>e(this.client.session.get(p))), 500)))
                    }
                }
                ,
                this.reject = async e=>{
                    await this.isInitialized(),
                    await this.isValidReject(e);
                    const {id: t, reason: i} = e
                      , {pairingTopic: r} = this.client.proposal.get(t);
                    r && (await this.sendError(t, r, i),
                    await this.client.proposal.delete(t, xe("USER_DISCONNECTED")))
                }
                ,
                this.update = async e=>{
                    await this.isInitialized(),
                    await this.isValidUpdate(e);
                    const {topic: t, namespaces: i} = e
                      , r = await this.sendRequest({
                        topic: t,
                        method: "wc_sessionUpdate",
                        params: {
                            namespaces: i
                        }
                    })
                      , {done: n, resolve: s, reject: o} = ie();
                    return this.events.once(ce("session_update", r), (({error: e})=>{
                        e ? o(e) : s()
                    }
                    )),
                    await this.client.session.update(t, {
                        namespaces: i
                    }),
                    {
                        acknowledged: n
                    }
                }
                ,
                this.extend = async e=>{
                    await this.isInitialized(),
                    await this.isValidExtend(e);
                    const {topic: t} = e
                      , i = await this.sendRequest({
                        topic: t,
                        method: "wc_sessionExtend",
                        params: {}
                    })
                      , {done: r, resolve: n, reject: s} = ie();
                    return this.events.once(ce("session_extend", i), (({error: e})=>{
                        e ? s(e) : n()
                    }
                    )),
                    await this.setExpiry(t, oe(Yn)),
                    {
                        acknowledged: r
                    }
                }
                ,
                this.request = async t=>{
                    await this.isInitialized(),
                    await this.isValidRequest(t);
                    const {chainId: r, request: n, topic: s, expiry: o=Zn.wc_sessionRequest.req.ttl} = t
                      , a = (0,
                    Tt.payloadId)()
                      , {done: c, resolve: h, reject: u} = ie(o, "Request expired. Please try again.");
                    return this.events.once(ce("session_request", a), (({error: e, result: t})=>{
                        e ? u(e) : h(t)
                    }
                    )),
                    await Promise.all([new Promise((async e=>{
                        await this.sendRequest({
                            clientRpcId: a,
                            topic: s,
                            method: "wc_sessionRequest",
                            params: {
                                request: ls(us({}, n), {
                                    expiryTimestamp: oe(o)
                                }),
                                chainId: r
                            },
                            expiry: o,
                            throwOnFailedPublish: !0
                        }).catch((e=>u(e))),
                        this.client.events.emit("session_request_sent", {
                            topic: s,
                            request: n,
                            chainId: r,
                            id: a
                        }),
                        e()
                    }
                    )), new Promise((async t=>{
                        const r = await async function(e, t) {
                            try {
                                return await e.getItem(t) || (W() ? localStorage.getItem(t) : void 0)
                            } catch (n) {
                                console.error(n)
                            }
                        }(this.client.core.storage, Wn);
                        (async function({id: t, topic: r, wcDeepLink: n}) {
                            try {
                                if (!n)
                                    return;
                                const e = "string" == typeof n ? JSON.parse(n) : n;
                                let s = e?.href;
                                if ("string" != typeof s)
                                    return;
                                s.endsWith("/") && (s = s.slice(0, -1));
                                const o = `${s}/wc?requestId=${t}&sessionTopic=${r}`
                                  , a = Q();
                                a === B.browser ? o.startsWith("https://") ? window.open(o, "_blank", "noreferrer noopener") : window.open(o, "_self", "noreferrer noopener") : a === B.reactNative && typeof (null == i.g ? void 0 : i.g.Linking) < "u" && await i.g.Linking.openURL(o)
                            } catch (e) {
                                console.error(e)
                            }
                        }
                        )({
                            id: a,
                            topic: s,
                            wcDeepLink: r
                        }),
                        t()
                    }
                    )), c()]).then((e=>e[2]))
                }
                ,
                this.respond = async e=>{
                    await this.isInitialized(),
                    await this.isValidRespond(e);
                    const {topic: t, response: i} = e
                      , {id: r} = i;
                    (0,
                    Tt.isJsonRpcResult)(i) ? await this.sendResult({
                        id: r,
                        topic: t,
                        result: i.result,
                        throwOnFailedPublish: !0
                    }) : (0,
                    Tt.isJsonRpcError)(i) && await this.sendError(r, t, i.error),
                    this.cleanupAfterResponse(e)
                }
                ,
                this.ping = async e=>{
                    await this.isInitialized(),
                    await this.isValidPing(e);
                    const {topic: t} = e;
                    if (this.client.session.keys.includes(t)) {
                        const e = await this.sendRequest({
                            topic: t,
                            method: "wc_sessionPing",
                            params: {}
                        })
                          , {done: i, resolve: r, reject: n} = ie();
                        this.events.once(ce("session_ping", e), (({error: e})=>{
                            e ? n(e) : r()
                        }
                        )),
                        await i()
                    } else
                        this.client.core.pairing.pairings.keys.includes(t) && await this.client.core.pairing.ping({
                            topic: t
                        })
                }
                ,
                this.emit = async e=>{
                    await this.isInitialized(),
                    await this.isValidEmit(e);
                    const {topic: t, event: i, chainId: r} = e;
                    await this.sendRequest({
                        topic: t,
                        method: "wc_sessionEvent",
                        params: {
                            event: i,
                            chainId: r
                        }
                    })
                }
                ,
                this.disconnect = async e=>{
                    await this.isInitialized(),
                    await this.isValidDisconnect(e);
                    const {topic: t} = e;
                    if (this.client.session.keys.includes(t))
                        await this.sendRequest({
                            topic: t,
                            method: "wc_sessionDelete",
                            params: xe("USER_DISCONNECTED"),
                            throwOnFailedPublish: !0
                        }),
                        await this.deleteSession({
                            topic: t,
                            emitEvent: !1
                        });
                    else {
                        if (!this.client.core.pairing.pairings.keys.includes(t)) {
                            const {message: e} = Ne("MISMATCHED_TOPIC", `Session or pairing topic not found: ${t}`);
                            throw new Error(e)
                        }
                        await this.client.core.pairing.disconnect({
                            topic: t
                        })
                    }
                }
                ,
                this.find = e=>(this.isInitialized(),
                this.client.session.getAll().filter((t=>function(e, t) {
                    const {requiredNamespaces: i} = t
                      , r = Object.keys(e.namespaces)
                      , n = Object.keys(i);
                    let s = !0;
                    return !!X(n, r) && (r.forEach((t=>{
                        const {accounts: r, methods: n, events: o} = e.namespaces[t]
                          , a = Ee(r)
                          , c = i[t];
                        (!X(_(t, c), a) || !X(c.methods, n) || !X(c.events, o)) && (s = !1)
                    }
                    )),
                    s)
                }(t, e)))),
                this.getPendingSessionRequests = ()=>this.client.pendingRequest.getAll(),
                this.cleanupDuplicatePairings = async e=>{
                    if (e.pairingTopic)
                        try {
                            const t = this.client.core.pairing.pairings.get(e.pairingTopic)
                              , i = this.client.core.pairing.pairings.getAll().filter((i=>{
                                var r, n;
                                return (null == (r = i.peerMetadata) ? void 0 : r.url) && (null == (n = i.peerMetadata) ? void 0 : n.url) === e.peer.metadata.url && i.topic && i.topic !== t.topic
                            }
                            ));
                            if (0 === i.length)
                                return;
                            this.client.logger.info(`Cleaning up ${i.length} duplicate pairing(s)`),
                            await Promise.all(i.map((e=>this.client.core.pairing.disconnect({
                                topic: e.topic
                            })))),
                            this.client.logger.info("Duplicate pairings clean up finished")
                        } catch (t) {
                            this.client.logger.error(t)
                        }
                }
                ,
                this.deleteSession = async e=>{
                    const {topic: t, expirerHasDeleted: i=!1, emitEvent: r=!0, id: n=0} = e
                      , {self: s} = this.client.session.get(t);
                    await this.client.core.relayer.unsubscribe(t),
                    await this.client.session.delete(t, xe("USER_DISCONNECTED")),
                    this.client.core.crypto.keychain.has(s.publicKey) && await this.client.core.crypto.deleteKeyPair(s.publicKey),
                    this.client.core.crypto.keychain.has(t) && await this.client.core.crypto.deleteSymKey(t),
                    i || this.client.core.expirer.del(t),
                    this.client.core.storage.removeItem(Wn).catch((e=>this.client.logger.warn(e))),
                    this.getPendingSessionRequests().forEach((e=>{
                        e.topic === t && this.deletePendingSessionRequest(e.id, xe("USER_DISCONNECTED"))
                    }
                    )),
                    r && this.client.events.emit("session_delete", {
                        id: n,
                        topic: t
                    })
                }
                ,
                this.deleteProposal = async(e,t)=>{
                    await Promise.all([this.client.proposal.delete(e, xe("USER_DISCONNECTED")), t ? Promise.resolve() : this.client.core.expirer.del(e)])
                }
                ,
                this.deletePendingSessionRequest = async(e,t,i=!1)=>{
                    await Promise.all([this.client.pendingRequest.delete(e, t), i ? Promise.resolve() : this.client.core.expirer.del(e)]),
                    this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter((t=>t.id !== e)),
                    i && (this.sessionRequestQueue.state = es,
                    this.client.events.emit("session_request_expire", {
                        id: e
                    }))
                }
                ,
                this.setExpiry = async(e,t)=>{
                    this.client.session.keys.includes(e) && await this.client.session.update(e, {
                        expiry: t
                    }),
                    this.client.core.expirer.set(e, t)
                }
                ,
                this.setProposal = async(e,t)=>{
                    await this.client.proposal.set(e, t),
                    this.client.core.expirer.set(e, oe(Zn.wc_sessionPropose.req.ttl))
                }
                ,
                this.setPendingSessionRequest = async e=>{
                    const {id: t, topic: i, params: r, verifyContext: n} = e
                      , s = r.request.expiryTimestamp || oe(Zn.wc_sessionRequest.req.ttl);
                    await this.client.pendingRequest.set(t, {
                        id: t,
                        topic: i,
                        params: r,
                        verifyContext: n
                    }),
                    s && this.client.core.expirer.set(t, s)
                }
                ,
                this.sendRequest = async e=>{
                    const {topic: t, method: i, params: r, expiry: n, relayRpcId: s, clientRpcId: o, throwOnFailedPublish: a} = e
                      , c = (0,
                    Tt.formatJsonRpcRequest)(i, r, o);
                    if (W() && is.includes(i)) {
                        const e = T(JSON.stringify(c));
                        this.client.core.verify.register({
                            attestationId: e
                        })
                    }
                    const h = await this.client.core.crypto.encode(t, c)
                      , u = Zn[i].req;
                    return n && (u.ttl = n),
                    s && (u.id = s),
                    this.client.core.history.set(t, c),
                    a ? (u.internal = ls(us({}, u.internal), {
                        throwOnFailedPublish: !0
                    }),
                    await this.client.core.relayer.publish(t, h, u)) : this.client.core.relayer.publish(t, h, u).catch((e=>this.client.logger.error(e))),
                    c.id
                }
                ,
                this.sendResult = async e=>{
                    const {id: t, topic: i, result: r, throwOnFailedPublish: n} = e
                      , s = (0,
                    Tt.formatJsonRpcResult)(t, r)
                      , o = await this.client.core.crypto.encode(i, s)
                      , a = await this.client.core.history.get(i, t)
                      , c = Zn[a.request.method].res;
                    n ? (c.internal = ls(us({}, c.internal), {
                        throwOnFailedPublish: !0
                    }),
                    await this.client.core.relayer.publish(i, o, c)) : this.client.core.relayer.publish(i, o, c).catch((e=>this.client.logger.error(e))),
                    await this.client.core.history.resolve(s)
                }
                ,
                this.sendError = async(e,t,i)=>{
                    const r = (0,
                    Tt.formatJsonRpcError)(e, i)
                      , n = await this.client.core.crypto.encode(t, r)
                      , s = await this.client.core.history.get(t, e)
                      , o = Zn[s.request.method].res;
                    this.client.core.relayer.publish(t, n, o),
                    await this.client.core.history.resolve(r)
                }
                ,
                this.cleanup = async()=>{
                    const e = []
                      , t = [];
                    this.client.session.getAll().forEach((t=>{
                        let i = !1;
                        ae(t.expiry) && (i = !0),
                        this.client.core.crypto.keychain.has(t.topic) || (i = !0),
                        i && e.push(t.topic)
                    }
                    )),
                    this.client.proposal.getAll().forEach((e=>{
                        ae(e.expiryTimestamp) && t.push(e.id)
                    }
                    )),
                    await Promise.all([...e.map((e=>this.deleteSession({
                        topic: e
                    }))), ...t.map((e=>this.deleteProposal(e)))])
                }
                ,
                this.onRelayEventRequest = async e=>{
                    this.requestQueue.queue.push(e),
                    await this.processRequestsQueue()
                }
                ,
                this.processRequestsQueue = async()=>{
                    if (this.requestQueue.state !== ts) {
                        for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0; ) {
                            this.requestQueue.state = ts;
                            const t = this.requestQueue.queue.shift();
                            if (t)
                                try {
                                    this.processRequest(t),
                                    await new Promise((e=>setTimeout(e, 300)))
                                } catch (e) {
                                    this.client.logger.warn(e)
                                }
                        }
                        this.requestQueue.state = es
                    } else
                        this.client.logger.info("Request queue already active, skipping...")
                }
                ,
                this.processRequest = e=>{
                    const {topic: t, payload: i} = e
                      , r = i.method;
                    switch (r) {
                    case "wc_sessionPropose":
                        return this.onSessionProposeRequest(t, i);
                    case "wc_sessionSettle":
                        return this.onSessionSettleRequest(t, i);
                    case "wc_sessionUpdate":
                        return this.onSessionUpdateRequest(t, i);
                    case "wc_sessionExtend":
                        return this.onSessionExtendRequest(t, i);
                    case "wc_sessionPing":
                        return this.onSessionPingRequest(t, i);
                    case "wc_sessionDelete":
                        return this.onSessionDeleteRequest(t, i);
                    case "wc_sessionRequest":
                        return this.onSessionRequest(t, i);
                    case "wc_sessionEvent":
                        return this.onSessionEventRequest(t, i);
                    default:
                        return this.client.logger.info(`Unsupported request method ${r}`)
                    }
                }
                ,
                this.onRelayEventResponse = async e=>{
                    const {topic: t, payload: i} = e
                      , r = (await this.client.core.history.get(t, i.id)).request.method;
                    switch (r) {
                    case "wc_sessionPropose":
                        return this.onSessionProposeResponse(t, i);
                    case "wc_sessionSettle":
                        return this.onSessionSettleResponse(t, i);
                    case "wc_sessionUpdate":
                        return this.onSessionUpdateResponse(t, i);
                    case "wc_sessionExtend":
                        return this.onSessionExtendResponse(t, i);
                    case "wc_sessionPing":
                        return this.onSessionPingResponse(t, i);
                    case "wc_sessionRequest":
                        return this.onSessionRequestResponse(t, i);
                    default:
                        return this.client.logger.info(`Unsupported response method ${r}`)
                    }
                }
                ,
                this.onRelayEventUnknownPayload = e=>{
                    const {topic: t} = e
                      , {message: i} = Ne("MISSING_OR_INVALID", `Decoded payload on topic ${t} is not identifiable as a JSON-RPC request or a response.`);
                    throw new Error(i)
                }
                ,
                this.onSessionProposeRequest = async(e,t)=>{
                    const {params: i, id: r} = t;
                    try {
                        this.isValidConnect(us({}, t.params));
                        const n = i.expiryTimestamp || oe(Zn.wc_sessionPropose.req.ttl)
                          , s = us({
                            id: r,
                            pairingTopic: e,
                            expiryTimestamp: n
                        }, i);
                        await this.setProposal(r, s);
                        const o = T(JSON.stringify(t))
                          , a = await this.getVerifyContext(o, s.proposer.metadata);
                        this.client.events.emit("session_proposal", {
                            id: r,
                            params: s,
                            verifyContext: a
                        })
                    } catch (rt) {
                        await this.sendError(r, e, rt),
                        this.client.logger.error(rt)
                    }
                }
                ,
                this.onSessionProposeResponse = async(e,t)=>{
                    const {id: i} = t;
                    if ((0,
                    Tt.isJsonRpcResult)(t)) {
                        const {result: r} = t;
                        this.client.logger.trace({
                            type: "method",
                            method: "onSessionProposeResponse",
                            result: r
                        });
                        const n = this.client.proposal.get(i);
                        this.client.logger.trace({
                            type: "method",
                            method: "onSessionProposeResponse",
                            proposal: n
                        });
                        const s = n.proposer.publicKey;
                        this.client.logger.trace({
                            type: "method",
                            method: "onSessionProposeResponse",
                            selfPublicKey: s
                        });
                        const o = r.responderPublicKey;
                        this.client.logger.trace({
                            type: "method",
                            method: "onSessionProposeResponse",
                            peerPublicKey: o
                        });
                        const a = await this.client.core.crypto.generateSharedKey(s, o);
                        this.client.logger.trace({
                            type: "method",
                            method: "onSessionProposeResponse",
                            sessionTopic: a
                        });
                        const c = await this.client.core.relayer.subscribe(a);
                        this.client.logger.trace({
                            type: "method",
                            method: "onSessionProposeResponse",
                            subscriptionId: c
                        }),
                        await this.client.core.pairing.activate({
                            topic: e
                        })
                    } else
                        (0,
                        Tt.isJsonRpcError)(t) && (await this.client.proposal.delete(i, xe("USER_DISCONNECTED")),
                        this.events.emit(ce("session_connect"), {
                            error: t.error
                        }))
                }
                ,
                this.onSessionSettleRequest = async(e,t)=>{
                    const {id: i, params: r} = t;
                    try {
                        this.isValidSessionSettleRequest(r);
                        const {relay: i, controller: n, expiry: s, namespaces: o, sessionProperties: a, pairingTopic: c} = t.params
                          , h = us({
                            topic: e,
                            relay: i,
                            expiry: s,
                            namespaces: o,
                            acknowledged: !0,
                            pairingTopic: c,
                            requiredNamespaces: {},
                            optionalNamespaces: {},
                            controller: n.publicKey,
                            self: {
                                publicKey: "",
                                metadata: this.client.metadata
                            },
                            peer: {
                                publicKey: n.publicKey,
                                metadata: n.metadata
                            }
                        }, a && {
                            sessionProperties: a
                        });
                        await this.sendResult({
                            id: t.id,
                            topic: e,
                            result: !0
                        }),
                        this.events.emit(ce("session_connect"), {
                            session: h
                        }),
                        this.cleanupDuplicatePairings(h)
                    } catch (rt) {
                        await this.sendError(i, e, rt),
                        this.client.logger.error(rt)
                    }
                }
                ,
                this.onSessionSettleResponse = async(e,t)=>{
                    const {id: i} = t;
                    (0,
                    Tt.isJsonRpcResult)(t) ? (await this.client.session.update(e, {
                        acknowledged: !0
                    }),
                    this.events.emit(ce("session_approve", i), {})) : (0,
                    Tt.isJsonRpcError)(t) && (await this.client.session.delete(e, xe("USER_DISCONNECTED")),
                    this.events.emit(ce("session_approve", i), {
                        error: t.error
                    }))
                }
                ,
                this.onSessionUpdateRequest = async(e,t)=>{
                    const {params: i, id: r} = t;
                    try {
                        const t = `${e}_session_update`
                          , n = Ye.get(t);
                        if (n && this.isRequestOutOfSync(n, r))
                            return void this.client.logger.info(`Discarding out of sync request - ${r}`);
                        this.isValidUpdate(us({
                            topic: e
                        }, i)),
                        await this.client.session.update(e, {
                            namespaces: i.namespaces
                        }),
                        await this.sendResult({
                            id: r,
                            topic: e,
                            result: !0
                        }),
                        this.client.events.emit("session_update", {
                            id: r,
                            topic: e,
                            params: i
                        }),
                        Ye.set(t, r)
                    } catch (rt) {
                        await this.sendError(r, e, rt),
                        this.client.logger.error(rt)
                    }
                }
                ,
                this.isRequestOutOfSync = (e,t)=>parseInt(t.toString().slice(0, -3)) <= parseInt(e.toString().slice(0, -3)),
                this.onSessionUpdateResponse = (e,t)=>{
                    const {id: i} = t;
                    (0,
                    Tt.isJsonRpcResult)(t) ? this.events.emit(ce("session_update", i), {}) : (0,
                    Tt.isJsonRpcError)(t) && this.events.emit(ce("session_update", i), {
                        error: t.error
                    })
                }
                ,
                this.onSessionExtendRequest = async(e,t)=>{
                    const {id: i} = t;
                    try {
                        this.isValidExtend({
                            topic: e
                        }),
                        await this.setExpiry(e, oe(Yn)),
                        await this.sendResult({
                            id: i,
                            topic: e,
                            result: !0
                        }),
                        this.client.events.emit("session_extend", {
                            id: i,
                            topic: e
                        })
                    } catch (lt) {
                        await this.sendError(i, e, lt),
                        this.client.logger.error(lt)
                    }
                }
                ,
                this.onSessionExtendResponse = (e,t)=>{
                    const {id: i} = t;
                    (0,
                    Tt.isJsonRpcResult)(t) ? this.events.emit(ce("session_extend", i), {}) : (0,
                    Tt.isJsonRpcError)(t) && this.events.emit(ce("session_extend", i), {
                        error: t.error
                    })
                }
                ,
                this.onSessionPingRequest = async(e,t)=>{
                    const {id: i} = t;
                    try {
                        this.isValidPing({
                            topic: e
                        }),
                        await this.sendResult({
                            id: i,
                            topic: e,
                            result: !0
                        }),
                        this.client.events.emit("session_ping", {
                            id: i,
                            topic: e
                        })
                    } catch (lt) {
                        await this.sendError(i, e, lt),
                        this.client.logger.error(lt)
                    }
                }
                ,
                this.onSessionPingResponse = (e,t)=>{
                    const {id: i} = t;
                    setTimeout((()=>{
                        (0,
                        Tt.isJsonRpcResult)(t) ? this.events.emit(ce("session_ping", i), {}) : (0,
                        Tt.isJsonRpcError)(t) && this.events.emit(ce("session_ping", i), {
                            error: t.error
                        })
                    }
                    ), 500)
                }
                ,
                this.onSessionDeleteRequest = async(e,t)=>{
                    const {id: i} = t;
                    try {
                        this.isValidDisconnect({
                            topic: e,
                            reason: t.params
                        }),
                        await Promise.all([new Promise((t=>{
                            this.client.core.relayer.once(xr, (async()=>{
                                t(await this.deleteSession({
                                    topic: e,
                                    id: i
                                }))
                            }
                            ))
                        }
                        )), this.sendResult({
                            id: i,
                            topic: e,
                            result: !0
                        }), this.cleanupPendingSentRequestsForTopic({
                            topic: e,
                            error: xe("USER_DISCONNECTED")
                        })])
                    } catch (lt) {
                        this.client.logger.error(lt)
                    }
                }
                ,
                this.onSessionRequest = async(e,t)=>{
                    const {id: i, params: r} = t;
                    try {
                        this.isValidRequest(us({
                            topic: e
                        }, r));
                        const t = T(JSON.stringify((0,
                        Tt.formatJsonRpcRequest)("wc_sessionRequest", r, i)))
                          , n = this.client.session.get(e)
                          , s = {
                            id: i,
                            topic: e,
                            params: r,
                            verifyContext: await this.getVerifyContext(t, n.peer.metadata)
                        };
                        await this.setPendingSessionRequest(s),
                        this.addSessionRequestToSessionRequestQueue(s),
                        this.processSessionRequestQueue()
                    } catch (rt) {
                        await this.sendError(i, e, rt),
                        this.client.logger.error(rt)
                    }
                }
                ,
                this.onSessionRequestResponse = (e,t)=>{
                    const {id: i} = t;
                    (0,
                    Tt.isJsonRpcResult)(t) ? this.events.emit(ce("session_request", i), {
                        result: t.result
                    }) : (0,
                    Tt.isJsonRpcError)(t) && this.events.emit(ce("session_request", i), {
                        error: t.error
                    })
                }
                ,
                this.onSessionEventRequest = async(e,t)=>{
                    const {id: i, params: r} = t;
                    try {
                        const t = `${e}_session_event_${r.event.name}`
                          , n = Ye.get(t);
                        if (n && this.isRequestOutOfSync(n, i))
                            return void this.client.logger.info(`Discarding out of sync request - ${i}`);
                        this.isValidEmit(us({
                            topic: e
                        }, r)),
                        this.client.events.emit("session_event", {
                            id: i,
                            topic: e,
                            params: r
                        }),
                        Ye.set(t, i)
                    } catch (rt) {
                        await this.sendError(i, e, rt),
                        this.client.logger.error(rt)
                    }
                }
                ,
                this.addSessionRequestToSessionRequestQueue = e=>{
                    this.sessionRequestQueue.queue.push(e)
                }
                ,
                this.cleanupAfterResponse = e=>{
                    this.deletePendingSessionRequest(e.response.id, {
                        message: "fulfilled",
                        code: 0
                    }),
                    setTimeout((()=>{
                        this.sessionRequestQueue.state = es,
                        this.processSessionRequestQueue()
                    }
                    ), (0,
                    p.toMiliseconds)(this.requestQueueDelay))
                }
                ,
                this.cleanupPendingSentRequestsForTopic = ({topic: e, error: t})=>{
                    const i = this.client.core.history.pending;
                    i.length > 0 && i.filter((t=>t.topic === e && "wc_sessionRequest" === t.request.method)).forEach((e=>{
                        this.events.emit(ce("session_request", e.request.id), {
                            error: t
                        })
                    }
                    ))
                }
                ,
                this.processSessionRequestQueue = ()=>{
                    if (this.sessionRequestQueue.state === ts)
                        return void this.client.logger.info("session request queue is already active.");
                    const e = this.sessionRequestQueue.queue[0];
                    if (e)
                        try {
                            this.sessionRequestQueue.state = ts,
                            this.client.events.emit("session_request", e)
                        } catch (t) {
                            this.client.logger.error(t)
                        }
                    else
                        this.client.logger.info("session request queue is empty.")
                }
                ,
                this.onPairingCreated = e=>{
                    if (e.active)
                        return;
                    const t = this.client.proposal.getAll().find((t=>t.pairingTopic === e.topic));
                    t && this.onSessionProposeRequest(e.topic, (0,
                    Tt.formatJsonRpcRequest)("wc_sessionPropose", {
                        requiredNamespaces: t.requiredNamespaces,
                        optionalNamespaces: t.optionalNamespaces,
                        relays: t.relays,
                        proposer: t.proposer,
                        sessionProperties: t.sessionProperties
                    }, t.id))
                }
                ,
                this.isValidConnect = async e=>{
                    if (!Ve(e)) {
                        const {message: t} = Ne("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(e)}`);
                        throw new Error(t)
                    }
                    const {pairingTopic: t, requiredNamespaces: i, optionalNamespaces: r, sessionProperties: n, relays: s} = e;
                    if (Te(t) || await this.isValidPairingTopic(t),
                    !function(e, t) {
                        let i = !1;
                        return t && !e ? i = !0 : e && Ce(e) && e.length && e.forEach((e=>{
                            i = Le(e)
                        }
                        )),
                        i
                    }(s, !0)) {
                        const {message: e} = Ne("MISSING_OR_INVALID", `connect() relays: ${s}`);
                        throw new Error(e)
                    }
                    !Te(i) && 0 !== Ae(i) && this.validateNamespaces(i, "requiredNamespaces"),
                    !Te(r) && 0 !== Ae(r) && this.validateNamespaces(r, "optionalNamespaces"),
                    Te(n) || this.validateSessionProps(n, "sessionProperties")
                }
                ,
                this.validateNamespaces = (e,t)=>{
                    const i = function(e, t, i) {
                        let r = null;
                        if (e && Ae(e)) {
                            const n = ze(e, t);
                            n && (r = n);
                            const s = Ue(e, t, i);
                            s && (r = s)
                        } else
                            r = Ne("MISSING_OR_INVALID", `${t}, ${i} should be an object with data`);
                        return r
                    }(e, "connect()", t);
                    if (i)
                        throw new Error(i.message)
                }
                ,
                this.isValidApprove = async e=>{
                    if (!Ve(e))
                        throw new Error(Ne("MISSING_OR_INVALID", `approve() params: ${e}`).message);
                    const {id: t, namespaces: i, relayProtocol: r, sessionProperties: n} = e;
                    await this.isValidProposalId(t);
                    const s = this.client.proposal.get(t)
                      , o = ke(i, "approve()");
                    if (o)
                        throw new Error(o.message);
                    const a = Fe(s.requiredNamespaces, i, "approve()");
                    if (a)
                        throw new Error(a.message);
                    if (!qe(r, !0)) {
                        const {message: e} = Ne("MISSING_OR_INVALID", `approve() relayProtocol: ${r}`);
                        throw new Error(e)
                    }
                    Te(n) || this.validateSessionProps(n, "sessionProperties")
                }
                ,
                this.isValidReject = async e=>{
                    if (!Ve(e)) {
                        const {message: t} = Ne("MISSING_OR_INVALID", `reject() params: ${e}`);
                        throw new Error(t)
                    }
                    const {id: t, reason: i} = e;
                    if (await this.isValidProposalId(t),
                    !function(e) {
                        return !(!e || "object" != typeof e || !e.code || !De(e.code, !1) || !e.message || !qe(e.message, !1))
                    }(i)) {
                        const {message: e} = Ne("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(i)}`);
                        throw new Error(e)
                    }
                }
                ,
                this.isValidSessionSettleRequest = e=>{
                    if (!Ve(e)) {
                        const {message: t} = Ne("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${e}`);
                        throw new Error(t)
                    }
                    const {relay: t, controller: i, namespaces: r, expiry: n} = e;
                    if (!Le(t)) {
                        const {message: e} = Ne("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
                        throw new Error(e)
                    }
                    const s = function(e, t) {
                        let i = null;
                        return qe(e?.publicKey, !1) || (i = Ne("MISSING_OR_INVALID", `${t} controller public key should be a string`)),
                        i
                    }(i, "onSessionSettleRequest()");
                    if (s)
                        throw new Error(s.message);
                    const o = ke(r, "onSessionSettleRequest()");
                    if (o)
                        throw new Error(o.message);
                    if (ae(n)) {
                        const {message: e} = Ne("EXPIRED", "onSessionSettleRequest()");
                        throw new Error(e)
                    }
                }
                ,
                this.isValidUpdate = async e=>{
                    if (!Ve(e)) {
                        const {message: t} = Ne("MISSING_OR_INVALID", `update() params: ${e}`);
                        throw new Error(t)
                    }
                    const {topic: t, namespaces: i} = e;
                    await this.isValidSessionTopic(t);
                    const r = this.client.session.get(t)
                      , n = ke(i, "update()");
                    if (n)
                        throw new Error(n.message);
                    const s = Fe(r.requiredNamespaces, i, "update()");
                    if (s)
                        throw new Error(s.message)
                }
                ,
                this.isValidExtend = async e=>{
                    if (!Ve(e)) {
                        const {message: t} = Ne("MISSING_OR_INVALID", `extend() params: ${e}`);
                        throw new Error(t)
                    }
                    const {topic: t} = e;
                    await this.isValidSessionTopic(t)
                }
                ,
                this.isValidRequest = async e=>{
                    if (!Ve(e)) {
                        const {message: t} = Ne("MISSING_OR_INVALID", `request() params: ${e}`);
                        throw new Error(t)
                    }
                    const {topic: t, request: i, chainId: r, expiry: n} = e;
                    await this.isValidSessionTopic(t);
                    const {namespaces: s} = this.client.session.get(t);
                    if (!Ke(s, r)) {
                        const {message: e} = Ne("MISSING_OR_INVALID", `request() chainId: ${r}`);
                        throw new Error(e)
                    }
                    if (!function(e) {
                        return !(Te(e) || !qe(e.method, !1))
                    }(i)) {
                        const {message: e} = Ne("MISSING_OR_INVALID", `request() ${JSON.stringify(i)}`);
                        throw new Error(e)
                    }
                    if (!He(s, r, i.method)) {
                        const {message: e} = Ne("MISSING_OR_INVALID", `request() method: ${i.method}`);
                        throw new Error(e)
                    }
                    if (n && !function(e, t) {
                        return De(e, !1) && e <= t.max && e >= t.min
                    }(n, Xn)) {
                        const {message: e} = Ne("MISSING_OR_INVALID", `request() expiry: ${n}. Expiry must be a number (in seconds) between ${Xn.min} and ${Xn.max}`);
                        throw new Error(e)
                    }
                }
                ,
                this.isValidRespond = async e=>{
                    var t;
                    if (!Ve(e)) {
                        const {message: t} = Ne("MISSING_OR_INVALID", `respond() params: ${e}`);
                        throw new Error(t)
                    }
                    const {topic: i, response: r} = e;
                    try {
                        await this.isValidSessionTopic(i)
                    } catch (rt) {
                        throw null != (t = e?.response) && t.id && this.cleanupAfterResponse(e),
                        rt
                    }
                    if (!function(e) {
                        return !(Te(e) || Te(e.result) && Te(e.error) || !De(e.id, !1) || !qe(e.jsonrpc, !1))
                    }(r)) {
                        const {message: e} = Ne("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(r)}`);
                        throw new Error(e)
                    }
                }
                ,
                this.isValidPing = async e=>{
                    if (!Ve(e)) {
                        const {message: t} = Ne("MISSING_OR_INVALID", `ping() params: ${e}`);
                        throw new Error(t)
                    }
                    const {topic: t} = e;
                    await this.isValidSessionOrPairingTopic(t)
                }
                ,
                this.isValidEmit = async e=>{
                    if (!Ve(e)) {
                        const {message: t} = Ne("MISSING_OR_INVALID", `emit() params: ${e}`);
                        throw new Error(t)
                    }
                    const {topic: t, event: i, chainId: r} = e;
                    await this.isValidSessionTopic(t);
                    const {namespaces: n} = this.client.session.get(t);
                    if (!Ke(n, r)) {
                        const {message: e} = Ne("MISSING_OR_INVALID", `emit() chainId: ${r}`);
                        throw new Error(e)
                    }
                    if (!function(e) {
                        return !(Te(e) || !qe(e.name, !1))
                    }(i)) {
                        const {message: e} = Ne("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(i)}`);
                        throw new Error(e)
                    }
                    if (!Be(n, r, i.name)) {
                        const {message: e} = Ne("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(i)}`);
                        throw new Error(e)
                    }
                }
                ,
                this.isValidDisconnect = async e=>{
                    if (!Ve(e)) {
                        const {message: t} = Ne("MISSING_OR_INVALID", `disconnect() params: ${e}`);
                        throw new Error(t)
                    }
                    const {topic: t} = e;
                    await this.isValidSessionOrPairingTopic(t)
                }
                ,
                this.getVerifyContext = async(e,t)=>{
                    const i = {
                        verified: {
                            verifyUrl: t.verifyUrl || en,
                            validation: "UNKNOWN",
                            origin: t.url || ""
                        }
                    };
                    try {
                        const r = await this.client.core.verify.resolve({
                            attestationId: e,
                            verifyUrl: t.verifyUrl
                        });
                        r && (i.verified.origin = r.origin,
                        i.verified.isScam = r.isScam,
                        i.verified.validation = r.origin === new URL(t.url).origin ? "VALID" : "INVALID")
                    } catch (lt) {
                        this.client.logger.info(lt)
                    }
                    return this.client.logger.info(`Verify context: ${JSON.stringify(i)}`),
                    i
                }
                ,
                this.validateSessionProps = (e,t)=>{
                    Object.values(e).forEach((e=>{
                        if (!qe(e, !1)) {
                            const {message: i} = Ne("MISSING_OR_INVALID", `${t} must be in Record<string, string> format. Received: ${JSON.stringify(e)}`);
                            throw new Error(i)
                        }
                    }
                    ))
                }
            }
            async isInitialized() {
                if (!this.initialized) {
                    const {message: e} = Ne("NOT_INITIALIZED", this.name);
                    throw new Error(e)
                }
                await this.client.core.relayer.confirmOnlineStateOrThrow()
            }
            registerRelayerEvents() {
                this.client.core.relayer.on(Er, (async e=>{
                    const {topic: t, message: i} = e;
                    if (this.ignoredPayloadTypes.includes(this.client.core.crypto.getPayloadType(i)))
                        return;
                    const r = await this.client.core.crypto.decode(t, i);
                    try {
                        (0,
                        Tt.isJsonRpcRequest)(r) ? (this.client.core.history.set(t, r),
                        this.onRelayEventRequest({
                            topic: t,
                            payload: r
                        })) : (0,
                        Tt.isJsonRpcResponse)(r) ? (await this.client.core.history.resolve(r),
                        await this.onRelayEventResponse({
                            topic: t,
                            payload: r
                        }),
                        this.client.core.history.delete(t, r.id)) : this.onRelayEventUnknownPayload({
                            topic: t,
                            payload: r
                        })
                    } catch (lt) {
                        this.client.logger.error(lt)
                    }
                }
                ))
            }
            registerExpirerEvents() {
                this.client.core.expirer.on(Yr, (async e=>{
                    const {topic: t, id: i} = se(e.target);
                    if (i && this.client.pendingRequest.keys.includes(i))
                        return await this.deletePendingSessionRequest(i, Ne("EXPIRED"), !0);
                    t ? this.client.session.keys.includes(t) && (await this.deleteSession({
                        topic: t,
                        expirerHasDeleted: !0
                    }),
                    this.client.events.emit("session_expire", {
                        topic: t
                    })) : i && (await this.deleteProposal(i, !0),
                    this.client.events.emit("proposal_expire", {
                        id: i
                    }))
                }
                ))
            }
            registerPairingEvents() {
                this.client.core.pairing.events.on(Lr, (e=>this.onPairingCreated(e)))
            }
            isValidPairingTopic(e) {
                if (!qe(e, !1)) {
                    const {message: t} = Ne("MISSING_OR_INVALID", `pairing topic should be a string: ${e}`);
                    throw new Error(t)
                }
                if (!this.client.core.pairing.pairings.keys.includes(e)) {
                    const {message: t} = Ne("NO_MATCHING_KEY", `pairing topic doesn't exist: ${e}`);
                    throw new Error(t)
                }
                if (ae(this.client.core.pairing.pairings.get(e).expiry)) {
                    const {message: t} = Ne("EXPIRED", `pairing topic: ${e}`);
                    throw new Error(t)
                }
            }
            async isValidSessionTopic(e) {
                if (!qe(e, !1)) {
                    const {message: t} = Ne("MISSING_OR_INVALID", `session topic should be a string: ${e}`);
                    throw new Error(t)
                }
                if (!this.client.session.keys.includes(e)) {
                    const {message: t} = Ne("NO_MATCHING_KEY", `session topic doesn't exist: ${e}`);
                    throw new Error(t)
                }
                if (ae(this.client.session.get(e).expiry)) {
                    await this.deleteSession({
                        topic: e
                    });
                    const {message: t} = Ne("EXPIRED", `session topic: ${e}`);
                    throw new Error(t)
                }
                if (!this.client.core.crypto.keychain.has(e)) {
                    const {message: t} = Ne("MISSING_OR_INVALID", `session topic does not exist in keychain: ${e}`);
                    throw await this.deleteSession({
                        topic: e
                    }),
                    new Error(t)
                }
            }
            async isValidSessionOrPairingTopic(e) {
                if (this.client.session.keys.includes(e))
                    await this.isValidSessionTopic(e);
                else {
                    if (!this.client.core.pairing.pairings.keys.includes(e)) {
                        if (qe(e, !1)) {
                            const {message: t} = Ne("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${e}`);
                            throw new Error(t)
                        }
                        {
                            const {message: t} = Ne("MISSING_OR_INVALID", `session or pairing topic should be a string: ${e}`);
                            throw new Error(t)
                        }
                    }
                    this.isValidPairingTopic(e)
                }
            }
            async isValidProposalId(e) {
                if ("number" != typeof e) {
                    const {message: t} = Ne("MISSING_OR_INVALID", `proposal id should be a number: ${e}`);
                    throw new Error(t)
                }
                if (!this.client.proposal.keys.includes(e)) {
                    const {message: t} = Ne("NO_MATCHING_KEY", `proposal id doesn't exist: ${e}`);
                    throw new Error(t)
                }
                if (ae(this.client.proposal.get(e).expiryTimestamp)) {
                    await this.deleteProposal(e);
                    const {message: t} = Ne("EXPIRED", `proposal id: ${e}`);
                    throw new Error(t)
                }
            }
        }
        class ds extends An {
            constructor(e, t) {
                super(e, t, "proposal", Fn),
                this.core = e,
                this.logger = t
            }
        }
        class fs extends An {
            constructor(e, t) {
                super(e, t, "session", Fn),
                this.core = e,
                this.logger = t
            }
        }
        class gs extends An {
            constructor(e, t) {
                super(e, t, "request", Fn, (e=>e.id)),
                this.core = e,
                this.logger = t
            }
        }
        class ys extends Ot {
            constructor(e) {
                super(e),
                this.protocol = "wc",
                this.version = 2,
                this.name = Jn,
                this.events = new r.EventEmitter,
                this.on = (e,t)=>this.events.on(e, t),
                this.once = (e,t)=>this.events.once(e, t),
                this.off = (e,t)=>this.events.off(e, t),
                this.removeListener = (e,t)=>this.events.removeListener(e, t),
                this.removeAllListeners = e=>this.events.removeAllListeners(e),
                this.connect = async e=>{
                    try {
                        return await this.engine.connect(e)
                    } catch (t) {
                        throw this.logger.error(t.message),
                        t
                    }
                }
                ,
                this.pair = async e=>{
                    try {
                        return await this.engine.pair(e)
                    } catch (t) {
                        throw this.logger.error(t.message),
                        t
                    }
                }
                ,
                this.approve = async e=>{
                    try {
                        return await this.engine.approve(e)
                    } catch (t) {
                        throw this.logger.error(t.message),
                        t
                    }
                }
                ,
                this.reject = async e=>{
                    try {
                        return await this.engine.reject(e)
                    } catch (t) {
                        throw this.logger.error(t.message),
                        t
                    }
                }
                ,
                this.update = async e=>{
                    try {
                        return await this.engine.update(e)
                    } catch (t) {
                        throw this.logger.error(t.message),
                        t
                    }
                }
                ,
                this.extend = async e=>{
                    try {
                        return await this.engine.extend(e)
                    } catch (t) {
                        throw this.logger.error(t.message),
                        t
                    }
                }
                ,
                this.request = async e=>{
                    try {
                        return await this.engine.request(e)
                    } catch (t) {
                        throw this.logger.error(t.message),
                        t
                    }
                }
                ,
                this.respond = async e=>{
                    try {
                        return await this.engine.respond(e)
                    } catch (t) {
                        throw this.logger.error(t.message),
                        t
                    }
                }
                ,
                this.ping = async e=>{
                    try {
                        return await this.engine.ping(e)
                    } catch (t) {
                        throw this.logger.error(t.message),
                        t
                    }
                }
                ,
                this.emit = async e=>{
                    try {
                        return await this.engine.emit(e)
                    } catch (t) {
                        throw this.logger.error(t.message),
                        t
                    }
                }
                ,
                this.disconnect = async e=>{
                    try {
                        return await this.engine.disconnect(e)
                    } catch (t) {
                        throw this.logger.error(t.message),
                        t
                    }
                }
                ,
                this.find = e=>{
                    try {
                        return this.engine.find(e)
                    } catch (t) {
                        throw this.logger.error(t.message),
                        t
                    }
                }
                ,
                this.getPendingSessionRequests = ()=>{
                    try {
                        return this.engine.getPendingSessionRequests()
                    } catch (e) {
                        throw this.logger.error(e.message),
                        e
                    }
                }
                ,
                this.name = e?.name || Jn,
                this.metadata = e?.metadata || (0,
                f.D)() || {
                    name: "",
                    description: "",
                    url: "",
                    icons: [""]
                };
                const t = typeof e?.logger < "u" && "string" != typeof e?.logger ? e.logger : tt()(dt({
                    level: e?.logger || Gn
                }));
                this.core = e?.core || new Hn(e),
                this.logger = gt(t, this.name),
                this.session = new fs(this.core,this.logger),
                this.proposal = new ds(this.core,this.logger),
                this.pendingRequest = new gs(this.core,this.logger),
                this.engine = new ps(this)
            }
            static async init(e) {
                const t = new ys(e);
                return await t.initialize(),
                t
            }
            get context() {
                return ft(this.logger)
            }
            get pairing() {
                return this.core.pairing.pairings
            }
            async initialize() {
                this.logger.trace("Initialized");
                try {
                    await this.core.start(),
                    await this.session.init(),
                    await this.proposal.init(),
                    await this.pendingRequest.init(),
                    await this.engine.init(),
                    this.core.verify.init({
                        verifyUrl: this.metadata.verifyUrl
                    }),
                    this.logger.info("SignClient Initialization Success")
                } catch (e) {
                    throw this.logger.info("SignClient Initialization Failure"),
                    this.logger.error(e.message),
                    e
                }
            }
        }
        var ms = i(7759)
          , vs = i.n(ms);
        const ws = {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            method: "POST"
        };
        class _s {
            constructor(e, t=!1) {
                if (this.url = e,
                this.disableProviderPing = t,
                this.events = new r.EventEmitter,
                this.isAvailable = !1,
                this.registering = !1,
                !(0,
                Tt.isHttpUrl)(e))
                    throw new Error(`Provided URL is not compatible with HTTP connection: ${e}`);
                this.url = e,
                this.disableProviderPing = t
            }
            get connected() {
                return this.isAvailable
            }
            get connecting() {
                return this.registering
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
            async open(e=this.url) {
                await this.register(e)
            }
            async close() {
                if (!this.isAvailable)
                    throw new Error("Connection already closed");
                this.onClose()
            }
            async send(e, t) {
                this.isAvailable || await this.register();
                try {
                    const t = (0,
                    xt.u)(e)
                      , i = await vs()(this.url, Object.assign(Object.assign({}, ws), {
                        body: t
                    }))
                      , r = await i.json();
                    this.onPayload({
                        data: r
                    })
                } catch (i) {
                    this.onError(e.id, i)
                }
            }
            async register(e=this.url) {
                if (!(0,
                Tt.isHttpUrl)(e))
                    throw new Error(`Provided URL is not compatible with HTTP connection: ${e}`);
                if (this.registering) {
                    const e = this.events.getMaxListeners();
                    return (this.events.listenerCount("register_error") >= e || this.events.listenerCount("open") >= e) && this.events.setMaxListeners(e + 1),
                    new Promise(((e,t)=>{
                        this.events.once("register_error", (e=>{
                            this.resetMaxListeners(),
                            t(e)
                        }
                        )),
                        this.events.once("open", (()=>{
                            if (this.resetMaxListeners(),
                            "undefined" === typeof this.isAvailable)
                                return t(new Error("HTTP connection is missing or invalid"));
                            e()
                        }
                        ))
                    }
                    ))
                }
                this.url = e,
                this.registering = !0;
                try {
                    if (!this.disableProviderPing) {
                        const t = (0,
                        xt.u)({
                            id: 1,
                            jsonrpc: "2.0",
                            method: "test",
                            params: []
                        });
                        await vs()(e, Object.assign(Object.assign({}, ws), {
                            body: t
                        }))
                    }
                    this.onOpen()
                } catch (t) {
                    const e = this.parseError(t);
                    throw this.events.emit("register_error", e),
                    this.onClose(),
                    e
                }
            }
            onOpen() {
                this.isAvailable = !0,
                this.registering = !1,
                this.events.emit("open")
            }
            onClose() {
                this.isAvailable = !1,
                this.registering = !1,
                this.events.emit("close")
            }
            onPayload(e) {
                if ("undefined" === typeof e.data)
                    return;
                const t = "string" === typeof e.data ? (0,
                xt.D)(e.data) : e.data;
                this.events.emit("payload", t)
            }
            onError(e, t) {
                const i = this.parseError(t)
                  , r = i.message || i.toString()
                  , n = (0,
                Tt.formatJsonRpcError)(e, r);
                this.events.emit("payload", n)
            }
            parseError(e, t=this.url) {
                return (0,
                Tt.parseConnectionError)(e, t, "HTTP")
            }
            resetMaxListeners() {
                this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10)
            }
        }
        var bs = _s;
        const Is = "error"
          , Es = "wc@2:universal_provider:"
          , Ps = "default_chain_changed";
        var Ss = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof i.g < "u" ? i.g : typeof self < "u" ? self : {}
          , Rs = {
            exports: {}
        };
        !function(e, t) {
            (function() {
                var i, r = "Expected a function", n = "__lodash_hash_undefined__", s = "__lodash_placeholder__", o = 16, a = 32, c = 64, h = 128, u = 256, l = 1 / 0, p = 9007199254740991, d = NaN, f = 4294967295, g = [["ary", h], ["bind", 1], ["bindKey", 2], ["curry", 8], ["curryRight", o], ["flip", 512], ["partial", a], ["partialRight", c], ["rearg", u]], y = "[object Arguments]", m = "[object Array]", v = "[object Boolean]", w = "[object Date]", _ = "[object Error]", b = "[object Function]", I = "[object GeneratorFunction]", E = "[object Map]", P = "[object Number]", S = "[object Object]", R = "[object Promise]", O = "[object RegExp]", N = "[object Set]", x = "[object String]", C = "[object Symbol]", A = "[object WeakMap]", T = "[object ArrayBuffer]", q = "[object DataView]", D = "[object Float32Array]", $ = "[object Float64Array]", j = "[object Int8Array]", U = "[object Int16Array]", M = "[object Int32Array]", z = "[object Uint8Array]", k = "[object Uint8ClampedArray]", L = "[object Uint16Array]", V = "[object Uint32Array]", K = /\b__p \+= '';/g, H = /\b(__p \+=) '' \+/g, B = /(__e\(.*?\)|\b__t\)) \+\n'';/g, F = /&(?:amp|lt|gt|quot|#39);/g, J = /[&<>"']/g, G = RegExp(F.source), W = RegExp(J.source), Q = /<%-([\s\S]+?)%>/g, Y = /<%([\s\S]+?)%>/g, Z = /<%=([\s\S]+?)%>/g, X = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ee = /^\w*$/, te = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, ie = /[\\^$.*+?()[\]{}|]/g, re = RegExp(ie.source), ne = /^\s+/, se = /\s/, oe = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, ae = /\{\n\/\* \[wrapped with (.+)\] \*/, ce = /,? & /, he = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, ue = /[()=,{}\[\]\/\s]/, le = /\\(\\)?/g, pe = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, de = /\w*$/, fe = /^[-+]0x[0-9a-f]+$/i, ge = /^0b[01]+$/i, ye = /^\[object .+?Constructor\]$/, me = /^0o[0-7]+$/i, ve = /^(?:0|[1-9]\d*)$/, we = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, _e = /($^)/, be = /['\n\r\u2028\u2029\\]/g, Ie = "\\ud800-\\udfff", Ee = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff", Pe = "\\u2700-\\u27bf", Se = "a-z\\xdf-\\xf6\\xf8-\\xff", Re = "A-Z\\xc0-\\xd6\\xd8-\\xde", Oe = "\\ufe0e\\ufe0f", Ne = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", xe = "['\u2019]", Ce = "[" + Ie + "]", Ae = "[" + Ne + "]", Te = "[" + Ee + "]", qe = "\\d+", De = "[" + Pe + "]", $e = "[" + Se + "]", je = "[^" + Ie + Ne + qe + Pe + Se + Re + "]", Ue = "\\ud83c[\\udffb-\\udfff]", Me = "[^" + Ie + "]", ze = "(?:\\ud83c[\\udde6-\\uddff]){2}", ke = "[\\ud800-\\udbff][\\udc00-\\udfff]", Le = "[" + Re + "]", Ve = "\\u200d", Ke = "(?:" + $e + "|" + je + ")", He = "(?:" + Le + "|" + je + ")", Be = "(?:['\u2019](?:d|ll|m|re|s|t|ve))?", Fe = "(?:['\u2019](?:D|LL|M|RE|S|T|VE))?", Je = "(?:" + Te + "|" + Ue + ")" + "?", Ge = "[" + Oe + "]?", We = Ge + Je + ("(?:" + Ve + "(?:" + [Me, ze, ke].join("|") + ")" + Ge + Je + ")*"), Qe = "(?:" + [De, ze, ke].join("|") + ")" + We, Ye = "(?:" + [Me + Te + "?", Te, ze, ke, Ce].join("|") + ")", Ze = RegExp(xe, "g"), Xe = RegExp(Te, "g"), et = RegExp(Ue + "(?=" + Ue + ")|" + Ye + We, "g"), tt = RegExp([Le + "?" + $e + "+" + Be + "(?=" + [Ae, Le, "$"].join("|") + ")", He + "+" + Fe + "(?=" + [Ae, Le + Ke, "$"].join("|") + ")", Le + "?" + Ke + "+" + Be, Le + "+" + Fe, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", qe, Qe].join("|"), "g"), it = RegExp("[" + Ve + Ie + Ee + Oe + "]"), rt = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, nt = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"], st = -1, ot = {};
                ot[D] = ot[$] = ot[j] = ot[U] = ot[M] = ot[z] = ot[k] = ot[L] = ot[V] = !0,
                ot[y] = ot[m] = ot[T] = ot[v] = ot[q] = ot[w] = ot[_] = ot[b] = ot[E] = ot[P] = ot[S] = ot[O] = ot[N] = ot[x] = ot[A] = !1;
                var at = {};
                at[y] = at[m] = at[T] = at[q] = at[v] = at[w] = at[D] = at[$] = at[j] = at[U] = at[M] = at[E] = at[P] = at[S] = at[O] = at[N] = at[x] = at[C] = at[z] = at[k] = at[L] = at[V] = !0,
                at[_] = at[b] = at[A] = !1;
                var ct = {
                    "\\": "\\",
                    "'": "'",
                    "\n": "n",
                    "\r": "r",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                }
                  , ht = parseFloat
                  , ut = parseInt
                  , lt = "object" == typeof Ss && Ss && Ss.Object === Object && Ss
                  , pt = "object" == typeof self && self && self.Object === Object && self
                  , dt = lt || pt || Function("return this")()
                  , ft = t && !t.nodeType && t
                  , gt = ft && e && !e.nodeType && e
                  , yt = gt && gt.exports === ft
                  , mt = yt && lt.process
                  , vt = function() {
                    try {
                        return gt && gt.require && gt.require("util").types || mt && mt.binding && mt.binding("util")
                    } catch {}
                }()
                  , wt = vt && vt.isArrayBuffer
                  , _t = vt && vt.isDate
                  , bt = vt && vt.isMap
                  , It = vt && vt.isRegExp
                  , Et = vt && vt.isSet
                  , Pt = vt && vt.isTypedArray;
                function St(e, t, i) {
                    switch (i.length) {
                    case 0:
                        return e.call(t);
                    case 1:
                        return e.call(t, i[0]);
                    case 2:
                        return e.call(t, i[0], i[1]);
                    case 3:
                        return e.call(t, i[0], i[1], i[2])
                    }
                    return e.apply(t, i)
                }
                function Rt(e, t, i, r) {
                    for (var n = -1, s = null == e ? 0 : e.length; ++n < s; ) {
                        var o = e[n];
                        t(r, o, i(o), e)
                    }
                    return r
                }
                function Ot(e, t) {
                    for (var i = -1, r = null == e ? 0 : e.length; ++i < r && !1 !== t(e[i], i, e); )
                        ;
                    return e
                }
                function Nt(e, t) {
                    for (var i = null == e ? 0 : e.length; i-- && !1 !== t(e[i], i, e); )
                        ;
                    return e
                }
                function xt(e, t) {
                    for (var i = -1, r = null == e ? 0 : e.length; ++i < r; )
                        if (!t(e[i], i, e))
                            return !1;
                    return !0
                }
                function Ct(e, t) {
                    for (var i = -1, r = null == e ? 0 : e.length, n = 0, s = []; ++i < r; ) {
                        var o = e[i];
                        t(o, i, e) && (s[n++] = o)
                    }
                    return s
                }
                function At(e, t) {
                    return !!(null == e ? 0 : e.length) && Lt(e, t, 0) > -1
                }
                function Tt(e, t, i) {
                    for (var r = -1, n = null == e ? 0 : e.length; ++r < n; )
                        if (i(t, e[r]))
                            return !0;
                    return !1
                }
                function qt(e, t) {
                    for (var i = -1, r = null == e ? 0 : e.length, n = Array(r); ++i < r; )
                        n[i] = t(e[i], i, e);
                    return n
                }
                function Dt(e, t) {
                    for (var i = -1, r = t.length, n = e.length; ++i < r; )
                        e[n + i] = t[i];
                    return e
                }
                function $t(e, t, i, r) {
                    var n = -1
                      , s = null == e ? 0 : e.length;
                    for (r && s && (i = e[++n]); ++n < s; )
                        i = t(i, e[n], n, e);
                    return i
                }
                function jt(e, t, i, r) {
                    var n = null == e ? 0 : e.length;
                    for (r && n && (i = e[--n]); n--; )
                        i = t(i, e[n], n, e);
                    return i
                }
                function Ut(e, t) {
                    for (var i = -1, r = null == e ? 0 : e.length; ++i < r; )
                        if (t(e[i], i, e))
                            return !0;
                    return !1
                }
                var Mt = Bt("length");
                function zt(e, t, i) {
                    var r;
                    return i(e, (function(e, i, n) {
                        if (t(e, i, n))
                            return r = i,
                            !1
                    }
                    )),
                    r
                }
                function kt(e, t, i, r) {
                    for (var n = e.length, s = i + (r ? 1 : -1); r ? s-- : ++s < n; )
                        if (t(e[s], s, e))
                            return s;
                    return -1
                }
                function Lt(e, t, i) {
                    return t === t ? function(e, t, i) {
                        for (var r = i - 1, n = e.length; ++r < n; )
                            if (e[r] === t)
                                return r;
                        return -1
                    }(e, t, i) : kt(e, Kt, i)
                }
                function Vt(e, t, i, r) {
                    for (var n = i - 1, s = e.length; ++n < s; )
                        if (r(e[n], t))
                            return n;
                    return -1
                }
                function Kt(e) {
                    return e !== e
                }
                function Ht(e, t) {
                    var i = null == e ? 0 : e.length;
                    return i ? Gt(e, t) / i : d
                }
                function Bt(e) {
                    return function(t) {
                        return null == t ? i : t[e]
                    }
                }
                function Ft(e) {
                    return function(t) {
                        return null == e ? i : e[t]
                    }
                }
                function Jt(e, t, i, r, n) {
                    return n(e, (function(e, n, s) {
                        i = r ? (r = !1,
                        e) : t(i, e, n, s)
                    }
                    )),
                    i
                }
                function Gt(e, t) {
                    for (var r, n = -1, s = e.length; ++n < s; ) {
                        var o = t(e[n]);
                        o !== i && (r = r === i ? o : r + o)
                    }
                    return r
                }
                function Wt(e, t) {
                    for (var i = -1, r = Array(e); ++i < e; )
                        r[i] = t(i);
                    return r
                }
                function Qt(e) {
                    return e && e.slice(0, pi(e) + 1).replace(ne, "")
                }
                function Yt(e) {
                    return function(t) {
                        return e(t)
                    }
                }
                function Zt(e, t) {
                    return qt(t, (function(t) {
                        return e[t]
                    }
                    ))
                }
                function Xt(e, t) {
                    return e.has(t)
                }
                function ei(e, t) {
                    for (var i = -1, r = e.length; ++i < r && Lt(t, e[i], 0) > -1; )
                        ;
                    return i
                }
                function ti(e, t) {
                    for (var i = e.length; i-- && Lt(t, e[i], 0) > -1; )
                        ;
                    return i
                }
                var ii = Ft({
                    "\xc0": "A",
                    "\xc1": "A",
                    "\xc2": "A",
                    "\xc3": "A",
                    "\xc4": "A",
                    "\xc5": "A",
                    "\xe0": "a",
                    "\xe1": "a",
                    "\xe2": "a",
                    "\xe3": "a",
                    "\xe4": "a",
                    "\xe5": "a",
                    "\xc7": "C",
                    "\xe7": "c",
                    "\xd0": "D",
                    "\xf0": "d",
                    "\xc8": "E",
                    "\xc9": "E",
                    "\xca": "E",
                    "\xcb": "E",
                    "\xe8": "e",
                    "\xe9": "e",
                    "\xea": "e",
                    "\xeb": "e",
                    "\xcc": "I",
                    "\xcd": "I",
                    "\xce": "I",
                    "\xcf": "I",
                    "\xec": "i",
                    "\xed": "i",
                    "\xee": "i",
                    "\xef": "i",
                    "\xd1": "N",
                    "\xf1": "n",
                    "\xd2": "O",
                    "\xd3": "O",
                    "\xd4": "O",
                    "\xd5": "O",
                    "\xd6": "O",
                    "\xd8": "O",
                    "\xf2": "o",
                    "\xf3": "o",
                    "\xf4": "o",
                    "\xf5": "o",
                    "\xf6": "o",
                    "\xf8": "o",
                    "\xd9": "U",
                    "\xda": "U",
                    "\xdb": "U",
                    "\xdc": "U",
                    "\xf9": "u",
                    "\xfa": "u",
                    "\xfb": "u",
                    "\xfc": "u",
                    "\xdd": "Y",
                    "\xfd": "y",
                    "\xff": "y",
                    "\xc6": "Ae",
                    "\xe6": "ae",
                    "\xde": "Th",
                    "\xfe": "th",
                    "\xdf": "ss",
                    "\u0100": "A",
                    "\u0102": "A",
                    "\u0104": "A",
                    "\u0101": "a",
                    "\u0103": "a",
                    "\u0105": "a",
                    "\u0106": "C",
                    "\u0108": "C",
                    "\u010a": "C",
                    "\u010c": "C",
                    "\u0107": "c",
                    "\u0109": "c",
                    "\u010b": "c",
                    "\u010d": "c",
                    "\u010e": "D",
                    "\u0110": "D",
                    "\u010f": "d",
                    "\u0111": "d",
                    "\u0112": "E",
                    "\u0114": "E",
                    "\u0116": "E",
                    "\u0118": "E",
                    "\u011a": "E",
                    "\u0113": "e",
                    "\u0115": "e",
                    "\u0117": "e",
                    "\u0119": "e",
                    "\u011b": "e",
                    "\u011c": "G",
                    "\u011e": "G",
                    "\u0120": "G",
                    "\u0122": "G",
                    "\u011d": "g",
                    "\u011f": "g",
                    "\u0121": "g",
                    "\u0123": "g",
                    "\u0124": "H",
                    "\u0126": "H",
                    "\u0125": "h",
                    "\u0127": "h",
                    "\u0128": "I",
                    "\u012a": "I",
                    "\u012c": "I",
                    "\u012e": "I",
                    "\u0130": "I",
                    "\u0129": "i",
                    "\u012b": "i",
                    "\u012d": "i",
                    "\u012f": "i",
                    "\u0131": "i",
                    "\u0134": "J",
                    "\u0135": "j",
                    "\u0136": "K",
                    "\u0137": "k",
                    "\u0138": "k",
                    "\u0139": "L",
                    "\u013b": "L",
                    "\u013d": "L",
                    "\u013f": "L",
                    "\u0141": "L",
                    "\u013a": "l",
                    "\u013c": "l",
                    "\u013e": "l",
                    "\u0140": "l",
                    "\u0142": "l",
                    "\u0143": "N",
                    "\u0145": "N",
                    "\u0147": "N",
                    "\u014a": "N",
                    "\u0144": "n",
                    "\u0146": "n",
                    "\u0148": "n",
                    "\u014b": "n",
                    "\u014c": "O",
                    "\u014e": "O",
                    "\u0150": "O",
                    "\u014d": "o",
                    "\u014f": "o",
                    "\u0151": "o",
                    "\u0154": "R",
                    "\u0156": "R",
                    "\u0158": "R",
                    "\u0155": "r",
                    "\u0157": "r",
                    "\u0159": "r",
                    "\u015a": "S",
                    "\u015c": "S",
                    "\u015e": "S",
                    "\u0160": "S",
                    "\u015b": "s",
                    "\u015d": "s",
                    "\u015f": "s",
                    "\u0161": "s",
                    "\u0162": "T",
                    "\u0164": "T",
                    "\u0166": "T",
                    "\u0163": "t",
                    "\u0165": "t",
                    "\u0167": "t",
                    "\u0168": "U",
                    "\u016a": "U",
                    "\u016c": "U",
                    "\u016e": "U",
                    "\u0170": "U",
                    "\u0172": "U",
                    "\u0169": "u",
                    "\u016b": "u",
                    "\u016d": "u",
                    "\u016f": "u",
                    "\u0171": "u",
                    "\u0173": "u",
                    "\u0174": "W",
                    "\u0175": "w",
                    "\u0176": "Y",
                    "\u0177": "y",
                    "\u0178": "Y",
                    "\u0179": "Z",
                    "\u017b": "Z",
                    "\u017d": "Z",
                    "\u017a": "z",
                    "\u017c": "z",
                    "\u017e": "z",
                    "\u0132": "IJ",
                    "\u0133": "ij",
                    "\u0152": "Oe",
                    "\u0153": "oe",
                    "\u0149": "'n",
                    "\u017f": "s"
                })
                  , ri = Ft({
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;"
                });
                function ni(e) {
                    return "\\" + ct[e]
                }
                function si(e) {
                    return it.test(e)
                }
                function oi(e) {
                    var t = -1
                      , i = Array(e.size);
                    return e.forEach((function(e, r) {
                        i[++t] = [r, e]
                    }
                    )),
                    i
                }
                function ai(e, t) {
                    return function(i) {
                        return e(t(i))
                    }
                }
                function ci(e, t) {
                    for (var i = -1, r = e.length, n = 0, o = []; ++i < r; ) {
                        var a = e[i];
                        (a === t || a === s) && (e[i] = s,
                        o[n++] = i)
                    }
                    return o
                }
                function hi(e) {
                    var t = -1
                      , i = Array(e.size);
                    return e.forEach((function(e) {
                        i[++t] = e
                    }
                    )),
                    i
                }
                function ui(e) {
                    return si(e) ? function(e) {
                        for (var t = et.lastIndex = 0; et.test(e); )
                            ++t;
                        return t
                    }(e) : Mt(e)
                }
                function li(e) {
                    return si(e) ? function(e) {
                        return e.match(et) || []
                    }(e) : function(e) {
                        return e.split("")
                    }(e)
                }
                function pi(e) {
                    for (var t = e.length; t-- && se.test(e.charAt(t)); )
                        ;
                    return t
                }
                var di = Ft({
                    "&amp;": "&",
                    "&lt;": "<",
                    "&gt;": ">",
                    "&quot;": '"',
                    "&#39;": "'"
                });
                var fi = function e(t) {
                    var se = (t = null == t ? dt : fi.defaults(dt.Object(), t, fi.pick(dt, nt))).Array
                      , Ie = t.Date
                      , Ee = t.Error
                      , Pe = t.Function
                      , Se = t.Math
                      , Re = t.Object
                      , Oe = t.RegExp
                      , Ne = t.String
                      , xe = t.TypeError
                      , Ce = se.prototype
                      , Ae = Pe.prototype
                      , Te = Re.prototype
                      , qe = t["__core-js_shared__"]
                      , De = Ae.toString
                      , $e = Te.hasOwnProperty
                      , je = 0
                      , Ue = function() {
                        var e = /[^.]+$/.exec(qe && qe.keys && qe.keys.IE_PROTO || "");
                        return e ? "Symbol(src)_1." + e : ""
                    }()
                      , Me = Te.toString
                      , ze = De.call(Re)
                      , ke = dt._
                      , Le = Oe("^" + De.call($e).replace(ie, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$")
                      , Ve = yt ? t.Buffer : i
                      , Ke = t.Symbol
                      , He = t.Uint8Array
                      , Be = Ve ? Ve.allocUnsafe : i
                      , Fe = ai(Re.getPrototypeOf, Re)
                      , Je = Re.create
                      , Ge = Te.propertyIsEnumerable
                      , We = Ce.splice
                      , Qe = Ke ? Ke.isConcatSpreadable : i
                      , Ye = Ke ? Ke.iterator : i
                      , et = Ke ? Ke.toStringTag : i
                      , it = function() {
                        try {
                            var e = us(Re, "defineProperty");
                            return e({}, "", {}),
                            e
                        } catch {}
                    }()
                      , ct = t.clearTimeout !== dt.clearTimeout && t.clearTimeout
                      , lt = Ie && Ie.now !== dt.Date.now && Ie.now
                      , pt = t.setTimeout !== dt.setTimeout && t.setTimeout
                      , ft = Se.ceil
                      , gt = Se.floor
                      , mt = Re.getOwnPropertySymbols
                      , vt = Ve ? Ve.isBuffer : i
                      , Mt = t.isFinite
                      , Ft = Ce.join
                      , gi = ai(Re.keys, Re)
                      , yi = Se.max
                      , mi = Se.min
                      , vi = Ie.now
                      , wi = t.parseInt
                      , _i = Se.random
                      , bi = Ce.reverse
                      , Ii = us(t, "DataView")
                      , Ei = us(t, "Map")
                      , Pi = us(t, "Promise")
                      , Si = us(t, "Set")
                      , Ri = us(t, "WeakMap")
                      , Oi = us(Re, "create")
                      , Ni = Ri && new Ri
                      , xi = {}
                      , Ci = js(Ii)
                      , Ai = js(Ei)
                      , Ti = js(Pi)
                      , qi = js(Si)
                      , Di = js(Ri)
                      , $i = Ke ? Ke.prototype : i
                      , ji = $i ? $i.valueOf : i
                      , Ui = $i ? $i.toString : i;
                    function Mi(e) {
                        if (ea(e) && !Ko(e) && !(e instanceof Vi)) {
                            if (e instanceof Li)
                                return e;
                            if ($e.call(e, "__wrapped__"))
                                return Us(e)
                        }
                        return new Li(e)
                    }
                    var zi = function() {
                        function e() {}
                        return function(t) {
                            if (!Xo(t))
                                return {};
                            if (Je)
                                return Je(t);
                            e.prototype = t;
                            var r = new e;
                            return e.prototype = i,
                            r
                        }
                    }();
                    function ki() {}
                    function Li(e, t) {
                        this.__wrapped__ = e,
                        this.__actions__ = [],
                        this.__chain__ = !!t,
                        this.__index__ = 0,
                        this.__values__ = i
                    }
                    function Vi(e) {
                        this.__wrapped__ = e,
                        this.__actions__ = [],
                        this.__dir__ = 1,
                        this.__filtered__ = !1,
                        this.__iteratees__ = [],
                        this.__takeCount__ = f,
                        this.__views__ = []
                    }
                    function Ki(e) {
                        var t = -1
                          , i = null == e ? 0 : e.length;
                        for (this.clear(); ++t < i; ) {
                            var r = e[t];
                            this.set(r[0], r[1])
                        }
                    }
                    function Hi(e) {
                        var t = -1
                          , i = null == e ? 0 : e.length;
                        for (this.clear(); ++t < i; ) {
                            var r = e[t];
                            this.set(r[0], r[1])
                        }
                    }
                    function Bi(e) {
                        var t = -1
                          , i = null == e ? 0 : e.length;
                        for (this.clear(); ++t < i; ) {
                            var r = e[t];
                            this.set(r[0], r[1])
                        }
                    }
                    function Fi(e) {
                        var t = -1
                          , i = null == e ? 0 : e.length;
                        for (this.__data__ = new Bi; ++t < i; )
                            this.add(e[t])
                    }
                    function Ji(e) {
                        var t = this.__data__ = new Hi(e);
                        this.size = t.size
                    }
                    function Gi(e, t) {
                        var i = Ko(e)
                          , r = !i && Vo(e)
                          , n = !i && !r && Jo(e)
                          , s = !i && !r && !n && ca(e)
                          , o = i || r || n || s
                          , a = o ? Wt(e.length, Ne) : []
                          , c = a.length;
                        for (var h in e)
                            (t || $e.call(e, h)) && (!o || !("length" == h || n && ("offset" == h || "parent" == h) || s && ("buffer" == h || "byteLength" == h || "byteOffset" == h) || ms(h, c))) && a.push(h);
                        return a
                    }
                    function Wi(e) {
                        var t = e.length;
                        return t ? e[Fr(0, t - 1)] : i
                    }
                    function Qi(e, t) {
                        return qs(Nn(e), sr(t, 0, e.length))
                    }
                    function Yi(e) {
                        return qs(Nn(e))
                    }
                    function Zi(e, t, r) {
                        (r !== i && !zo(e[t], r) || r === i && !(t in e)) && rr(e, t, r)
                    }
                    function Xi(e, t, r) {
                        var n = e[t];
                        (!$e.call(e, t) || !zo(n, r) || r === i && !(t in e)) && rr(e, t, r)
                    }
                    function er(e, t) {
                        for (var i = e.length; i--; )
                            if (zo(e[i][0], t))
                                return i;
                        return -1
                    }
                    function tr(e, t, i, r) {
                        return ur(e, (function(e, n, s) {
                            t(r, e, i(e), s)
                        }
                        )),
                        r
                    }
                    function ir(e, t) {
                        return e && xn(t, Ca(t), e)
                    }
                    function rr(e, t, i) {
                        "__proto__" == t && it ? it(e, t, {
                            configurable: !0,
                            enumerable: !0,
                            value: i,
                            writable: !0
                        }) : e[t] = i
                    }
                    function nr(e, t) {
                        for (var r = -1, n = t.length, s = se(n), o = null == e; ++r < n; )
                            s[r] = o ? i : Sa(e, t[r]);
                        return s
                    }
                    function sr(e, t, r) {
                        return e === e && (r !== i && (e = e <= r ? e : r),
                        t !== i && (e = e >= t ? e : t)),
                        e
                    }
                    function or(e, t, r, n, s, o) {
                        var a, c = 1 & t, h = 2 & t, u = 4 & t;
                        if (r && (a = s ? r(e, n, s, o) : r(e)),
                        a !== i)
                            return a;
                        if (!Xo(e))
                            return e;
                        var l = Ko(e);
                        if (l) {
                            if (a = function(e) {
                                var t = e.length
                                  , i = new e.constructor(t);
                                return t && "string" == typeof e[0] && $e.call(e, "index") && (i.index = e.index,
                                i.input = e.input),
                                i
                            }(e),
                            !c)
                                return Nn(e, a)
                        } else {
                            var p = ds(e)
                              , d = p == b || p == I;
                            if (Jo(e))
                                return In(e, c);
                            if (p == S || p == y || d && !s) {
                                if (a = h || d ? {} : gs(e),
                                !c)
                                    return h ? function(e, t) {
                                        return xn(e, ps(e), t)
                                    }(e, function(e, t) {
                                        return e && xn(t, Aa(t), e)
                                    }(a, e)) : function(e, t) {
                                        return xn(e, ls(e), t)
                                    }(e, ir(a, e))
                            } else {
                                if (!at[p])
                                    return s ? e : {};
                                a = function(e, t, i) {
                                    var r = e.constructor;
                                    switch (t) {
                                    case T:
                                        return En(e);
                                    case v:
                                    case w:
                                        return new r(+e);
                                    case q:
                                        return function(e, t) {
                                            var i = t ? En(e.buffer) : e.buffer;
                                            return new e.constructor(i,e.byteOffset,e.byteLength)
                                        }(e, i);
                                    case D:
                                    case $:
                                    case j:
                                    case U:
                                    case M:
                                    case z:
                                    case k:
                                    case L:
                                    case V:
                                        return Pn(e, i);
                                    case E:
                                        return new r;
                                    case P:
                                    case x:
                                        return new r(e);
                                    case O:
                                        return function(e) {
                                            var t = new e.constructor(e.source,de.exec(e));
                                            return t.lastIndex = e.lastIndex,
                                            t
                                        }(e);
                                    case N:
                                        return new r;
                                    case C:
                                        return function(e) {
                                            return ji ? Re(ji.call(e)) : {}
                                        }(e)
                                    }
                                }(e, p, c)
                            }
                        }
                        o || (o = new Ji);
                        var f = o.get(e);
                        if (f)
                            return f;
                        o.set(e, a),
                        sa(e) ? e.forEach((function(i) {
                            a.add(or(i, t, r, i, e, o))
                        }
                        )) : ta(e) && e.forEach((function(i, n) {
                            a.set(n, or(i, t, r, n, e, o))
                        }
                        ));
                        var g = l ? i : (u ? h ? rs : is : h ? Aa : Ca)(e);
                        return Ot(g || e, (function(i, n) {
                            g && (i = e[n = i]),
                            Xi(a, n, or(i, t, r, n, e, o))
                        }
                        )),
                        a
                    }
                    function ar(e, t, r) {
                        var n = r.length;
                        if (null == e)
                            return !n;
                        for (e = Re(e); n--; ) {
                            var s = r[n]
                              , o = t[s]
                              , a = e[s];
                            if (a === i && !(s in e) || !o(a))
                                return !1
                        }
                        return !0
                    }
                    function cr(e, t, n) {
                        if ("function" != typeof e)
                            throw new xe(r);
                        return xs((function() {
                            e.apply(i, n)
                        }
                        ), t)
                    }
                    function hr(e, t, i, r) {
                        var n = -1
                          , s = At
                          , o = !0
                          , a = e.length
                          , c = []
                          , h = t.length;
                        if (!a)
                            return c;
                        i && (t = qt(t, Yt(i))),
                        r ? (s = Tt,
                        o = !1) : t.length >= 200 && (s = Xt,
                        o = !1,
                        t = new Fi(t));
                        e: for (; ++n < a; ) {
                            var u = e[n]
                              , l = null == i ? u : i(u);
                            if (u = r || 0 !== u ? u : 0,
                            o && l === l) {
                                for (var p = h; p--; )
                                    if (t[p] === l)
                                        continue e;
                                c.push(u)
                            } else
                                s(t, l, r) || c.push(u)
                        }
                        return c
                    }
                    Mi.templateSettings = {
                        escape: Q,
                        evaluate: Y,
                        interpolate: Z,
                        variable: "",
                        imports: {
                            _: Mi
                        }
                    },
                    Mi.prototype = ki.prototype,
                    Mi.prototype.constructor = Mi,
                    Li.prototype = zi(ki.prototype),
                    Li.prototype.constructor = Li,
                    Vi.prototype = zi(ki.prototype),
                    Vi.prototype.constructor = Vi,
                    Ki.prototype.clear = function() {
                        this.__data__ = Oi ? Oi(null) : {},
                        this.size = 0
                    }
                    ,
                    Ki.prototype.delete = function(e) {
                        var t = this.has(e) && delete this.__data__[e];
                        return this.size -= t ? 1 : 0,
                        t
                    }
                    ,
                    Ki.prototype.get = function(e) {
                        var t = this.__data__;
                        if (Oi) {
                            var r = t[e];
                            return r === n ? i : r
                        }
                        return $e.call(t, e) ? t[e] : i
                    }
                    ,
                    Ki.prototype.has = function(e) {
                        var t = this.__data__;
                        return Oi ? t[e] !== i : $e.call(t, e)
                    }
                    ,
                    Ki.prototype.set = function(e, t) {
                        var r = this.__data__;
                        return this.size += this.has(e) ? 0 : 1,
                        r[e] = Oi && t === i ? n : t,
                        this
                    }
                    ,
                    Hi.prototype.clear = function() {
                        this.__data__ = [],
                        this.size = 0
                    }
                    ,
                    Hi.prototype.delete = function(e) {
                        var t = this.__data__
                          , i = er(t, e);
                        return !(i < 0) && (i == t.length - 1 ? t.pop() : We.call(t, i, 1),
                        --this.size,
                        !0)
                    }
                    ,
                    Hi.prototype.get = function(e) {
                        var t = this.__data__
                          , r = er(t, e);
                        return r < 0 ? i : t[r][1]
                    }
                    ,
                    Hi.prototype.has = function(e) {
                        return er(this.__data__, e) > -1
                    }
                    ,
                    Hi.prototype.set = function(e, t) {
                        var i = this.__data__
                          , r = er(i, e);
                        return r < 0 ? (++this.size,
                        i.push([e, t])) : i[r][1] = t,
                        this
                    }
                    ,
                    Bi.prototype.clear = function() {
                        this.size = 0,
                        this.__data__ = {
                            hash: new Ki,
                            map: new (Ei || Hi),
                            string: new Ki
                        }
                    }
                    ,
                    Bi.prototype.delete = function(e) {
                        var t = cs(this, e).delete(e);
                        return this.size -= t ? 1 : 0,
                        t
                    }
                    ,
                    Bi.prototype.get = function(e) {
                        return cs(this, e).get(e)
                    }
                    ,
                    Bi.prototype.has = function(e) {
                        return cs(this, e).has(e)
                    }
                    ,
                    Bi.prototype.set = function(e, t) {
                        var i = cs(this, e)
                          , r = i.size;
                        return i.set(e, t),
                        this.size += i.size == r ? 0 : 1,
                        this
                    }
                    ,
                    Fi.prototype.add = Fi.prototype.push = function(e) {
                        return this.__data__.set(e, n),
                        this
                    }
                    ,
                    Fi.prototype.has = function(e) {
                        return this.__data__.has(e)
                    }
                    ,
                    Ji.prototype.clear = function() {
                        this.__data__ = new Hi,
                        this.size = 0
                    }
                    ,
                    Ji.prototype.delete = function(e) {
                        var t = this.__data__
                          , i = t.delete(e);
                        return this.size = t.size,
                        i
                    }
                    ,
                    Ji.prototype.get = function(e) {
                        return this.__data__.get(e)
                    }
                    ,
                    Ji.prototype.has = function(e) {
                        return this.__data__.has(e)
                    }
                    ,
                    Ji.prototype.set = function(e, t) {
                        var i = this.__data__;
                        if (i instanceof Hi) {
                            var r = i.__data__;
                            if (!Ei || r.length < 199)
                                return r.push([e, t]),
                                this.size = ++i.size,
                                this;
                            i = this.__data__ = new Bi(r)
                        }
                        return i.set(e, t),
                        this.size = i.size,
                        this
                    }
                    ;
                    var ur = Tn(vr)
                      , lr = Tn(wr, !0);
                    function pr(e, t) {
                        var i = !0;
                        return ur(e, (function(e, r, n) {
                            return i = !!t(e, r, n)
                        }
                        )),
                        i
                    }
                    function dr(e, t, r) {
                        for (var n = -1, s = e.length; ++n < s; ) {
                            var o = e[n]
                              , a = t(o);
                            if (null != a && (c === i ? a === a && !aa(a) : r(a, c)))
                                var c = a
                                  , h = o
                        }
                        return h
                    }
                    function fr(e, t) {
                        var i = [];
                        return ur(e, (function(e, r, n) {
                            t(e, r, n) && i.push(e)
                        }
                        )),
                        i
                    }
                    function gr(e, t, i, r, n) {
                        var s = -1
                          , o = e.length;
                        for (i || (i = ys),
                        n || (n = []); ++s < o; ) {
                            var a = e[s];
                            t > 0 && i(a) ? t > 1 ? gr(a, t - 1, i, r, n) : Dt(n, a) : r || (n[n.length] = a)
                        }
                        return n
                    }
                    var yr = qn()
                      , mr = qn(!0);
                    function vr(e, t) {
                        return e && yr(e, t, Ca)
                    }
                    function wr(e, t) {
                        return e && mr(e, t, Ca)
                    }
                    function _r(e, t) {
                        return Ct(t, (function(t) {
                            return Qo(e[t])
                        }
                        ))
                    }
                    function br(e, t) {
                        for (var r = 0, n = (t = vn(t, e)).length; null != e && r < n; )
                            e = e[$s(t[r++])];
                        return r && r == n ? e : i
                    }
                    function Ir(e, t, i) {
                        var r = t(e);
                        return Ko(e) ? r : Dt(r, i(e))
                    }
                    function Er(e) {
                        return null == e ? e === i ? "[object Undefined]" : "[object Null]" : et && et in Re(e) ? function(e) {
                            var t = $e.call(e, et)
                              , r = e[et];
                            try {
                                e[et] = i;
                                var n = !0
                            } catch {}
                            var s = Me.call(e);
                            return n && (t ? e[et] = r : delete e[et]),
                            s
                        }(e) : function(e) {
                            return Me.call(e)
                        }(e)
                    }
                    function Pr(e, t) {
                        return e > t
                    }
                    function Sr(e, t) {
                        return null != e && $e.call(e, t)
                    }
                    function Rr(e, t) {
                        return null != e && t in Re(e)
                    }
                    function Or(e, t, r) {
                        for (var n = r ? Tt : At, s = e[0].length, o = e.length, a = o, c = se(o), h = 1 / 0, u = []; a--; ) {
                            var l = e[a];
                            a && t && (l = qt(l, Yt(t))),
                            h = mi(l.length, h),
                            c[a] = !r && (t || s >= 120 && l.length >= 120) ? new Fi(a && l) : i
                        }
                        l = e[0];
                        var p = -1
                          , d = c[0];
                        e: for (; ++p < s && u.length < h; ) {
                            var f = l[p]
                              , g = t ? t(f) : f;
                            if (f = r || 0 !== f ? f : 0,
                            !(d ? Xt(d, g) : n(u, g, r))) {
                                for (a = o; --a; ) {
                                    var y = c[a];
                                    if (!(y ? Xt(y, g) : n(e[a], g, r)))
                                        continue e
                                }
                                d && d.push(g),
                                u.push(f)
                            }
                        }
                        return u
                    }
                    function Nr(e, t, r) {
                        var n = null == (e = Rs(e, t = vn(t, e))) ? e : e[$s(Gs(t))];
                        return null == n ? i : St(n, e, r)
                    }
                    function xr(e) {
                        return ea(e) && Er(e) == y
                    }
                    function Cr(e, t, r, n, s) {
                        return e === t || (null == e || null == t || !ea(e) && !ea(t) ? e !== e && t !== t : function(e, t, r, n, s, o) {
                            var a = Ko(e)
                              , c = Ko(t)
                              , h = a ? m : ds(e)
                              , u = c ? m : ds(t);
                            h = h == y ? S : h,
                            u = u == y ? S : u;
                            var l = h == S
                              , p = u == S
                              , d = h == u;
                            if (d && Jo(e)) {
                                if (!Jo(t))
                                    return !1;
                                a = !0,
                                l = !1
                            }
                            if (d && !l)
                                return o || (o = new Ji),
                                a || ca(e) ? es(e, t, r, n, s, o) : function(e, t, i, r, n, s, o) {
                                    switch (i) {
                                    case q:
                                        if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
                                            return !1;
                                        e = e.buffer,
                                        t = t.buffer;
                                    case T:
                                        return !(e.byteLength != t.byteLength || !s(new He(e), new He(t)));
                                    case v:
                                    case w:
                                    case P:
                                        return zo(+e, +t);
                                    case _:
                                        return e.name == t.name && e.message == t.message;
                                    case O:
                                    case x:
                                        return e == t + "";
                                    case E:
                                        var a = oi;
                                    case N:
                                        var c = 1 & r;
                                        if (a || (a = hi),
                                        e.size != t.size && !c)
                                            return !1;
                                        var h = o.get(e);
                                        if (h)
                                            return h == t;
                                        r |= 2,
                                        o.set(e, t);
                                        var u = es(a(e), a(t), r, n, s, o);
                                        return o.delete(e),
                                        u;
                                    case C:
                                        if (ji)
                                            return ji.call(e) == ji.call(t)
                                    }
                                    return !1
                                }(e, t, h, r, n, s, o);
                            if (!(1 & r)) {
                                var f = l && $e.call(e, "__wrapped__")
                                  , g = p && $e.call(t, "__wrapped__");
                                if (f || g) {
                                    var b = f ? e.value() : e
                                      , I = g ? t.value() : t;
                                    return o || (o = new Ji),
                                    s(b, I, r, n, o)
                                }
                            }
                            return !!d && (o || (o = new Ji),
                            function(e, t, r, n, s, o) {
                                var a = 1 & r
                                  , c = is(e)
                                  , h = c.length
                                  , u = is(t)
                                  , l = u.length;
                                if (h != l && !a)
                                    return !1;
                                for (var p = h; p--; ) {
                                    var d = c[p];
                                    if (!(a ? d in t : $e.call(t, d)))
                                        return !1
                                }
                                var f = o.get(e)
                                  , g = o.get(t);
                                if (f && g)
                                    return f == t && g == e;
                                var y = !0;
                                o.set(e, t),
                                o.set(t, e);
                                for (var m = a; ++p < h; ) {
                                    var v = e[d = c[p]]
                                      , w = t[d];
                                    if (n)
                                        var _ = a ? n(w, v, d, t, e, o) : n(v, w, d, e, t, o);
                                    if (!(_ === i ? v === w || s(v, w, r, n, o) : _)) {
                                        y = !1;
                                        break
                                    }
                                    m || (m = "constructor" == d)
                                }
                                if (y && !m) {
                                    var b = e.constructor
                                      , I = t.constructor;
                                    b != I && "constructor"in e && "constructor"in t && !("function" == typeof b && b instanceof b && "function" == typeof I && I instanceof I) && (y = !1)
                                }
                                return o.delete(e),
                                o.delete(t),
                                y
                            }(e, t, r, n, s, o))
                        }(e, t, r, n, Cr, s))
                    }
                    function Ar(e, t, r, n) {
                        var s = r.length
                          , o = s
                          , a = !n;
                        if (null == e)
                            return !o;
                        for (e = Re(e); s--; ) {
                            var c = r[s];
                            if (a && c[2] ? c[1] !== e[c[0]] : !(c[0]in e))
                                return !1
                        }
                        for (; ++s < o; ) {
                            var h = (c = r[s])[0]
                              , u = e[h]
                              , l = c[1];
                            if (a && c[2]) {
                                if (u === i && !(h in e))
                                    return !1
                            } else {
                                var p = new Ji;
                                if (n)
                                    var d = n(u, l, h, e, t, p);
                                if (!(d === i ? Cr(l, u, 3, n, p) : d))
                                    return !1
                            }
                        }
                        return !0
                    }
                    function Tr(e) {
                        return !(!Xo(e) || function(e) {
                            return !!Ue && Ue in e
                        }(e)) && (Qo(e) ? Le : ye).test(js(e))
                    }
                    function qr(e) {
                        return "function" == typeof e ? e : null == e ? ic : "object" == typeof e ? Ko(e) ? zr(e[0], e[1]) : Mr(e) : lc(e)
                    }
                    function Dr(e) {
                        if (!Is(e))
                            return gi(e);
                        var t = [];
                        for (var i in Re(e))
                            $e.call(e, i) && "constructor" != i && t.push(i);
                        return t
                    }
                    function $r(e) {
                        if (!Xo(e))
                            return function(e) {
                                var t = [];
                                if (null != e)
                                    for (var i in Re(e))
                                        t.push(i);
                                return t
                            }(e);
                        var t = Is(e)
                          , i = [];
                        for (var r in e)
                            "constructor" == r && (t || !$e.call(e, r)) || i.push(r);
                        return i
                    }
                    function jr(e, t) {
                        return e < t
                    }
                    function Ur(e, t) {
                        var i = -1
                          , r = Bo(e) ? se(e.length) : [];
                        return ur(e, (function(e, n, s) {
                            r[++i] = t(e, n, s)
                        }
                        )),
                        r
                    }
                    function Mr(e) {
                        var t = hs(e);
                        return 1 == t.length && t[0][2] ? Ps(t[0][0], t[0][1]) : function(i) {
                            return i === e || Ar(i, e, t)
                        }
                    }
                    function zr(e, t) {
                        return ws(e) && Es(t) ? Ps($s(e), t) : function(r) {
                            var n = Sa(r, e);
                            return n === i && n === t ? Ra(r, e) : Cr(t, n, 3)
                        }
                    }
                    function kr(e, t, r, n, s) {
                        e !== t && yr(t, (function(o, a) {
                            if (s || (s = new Ji),
                            Xo(o))
                                !function(e, t, r, n, s, o, a) {
                                    var c = Os(e, r)
                                      , h = Os(t, r)
                                      , u = a.get(h);
                                    if (u)
                                        return void Zi(e, r, u);
                                    var l = o ? o(c, h, r + "", e, t, a) : i
                                      , p = l === i;
                                    if (p) {
                                        var d = Ko(h)
                                          , f = !d && Jo(h)
                                          , g = !d && !f && ca(h);
                                        l = h,
                                        d || f || g ? Ko(c) ? l = c : Fo(c) ? l = Nn(c) : f ? (p = !1,
                                        l = In(h, !0)) : g ? (p = !1,
                                        l = Pn(h, !0)) : l = [] : ra(h) || Vo(h) ? (l = c,
                                        Vo(c) ? l = ya(c) : (!Xo(c) || Qo(c)) && (l = gs(h))) : p = !1
                                    }
                                    p && (a.set(h, l),
                                    s(l, h, n, o, a),
                                    a.delete(h)),
                                    Zi(e, r, l)
                                }(e, t, a, r, kr, n, s);
                            else {
                                var c = n ? n(Os(e, a), o, a + "", e, t, s) : i;
                                c === i && (c = o),
                                Zi(e, a, c)
                            }
                        }
                        ), Aa)
                    }
                    function Lr(e, t) {
                        var r = e.length;
                        if (r)
                            return ms(t += t < 0 ? r : 0, r) ? e[t] : i
                    }
                    function Vr(e, t, i) {
                        t = t.length ? qt(t, (function(e) {
                            return Ko(e) ? function(t) {
                                return br(t, 1 === e.length ? e[0] : e)
                            }
                            : e
                        }
                        )) : [ic];
                        var r = -1;
                        t = qt(t, Yt(as()));
                        var n = Ur(e, (function(e, i, n) {
                            var s = qt(t, (function(t) {
                                return t(e)
                            }
                            ));
                            return {
                                criteria: s,
                                index: ++r,
                                value: e
                            }
                        }
                        ));
                        return function(e, t) {
                            var i = e.length;
                            for (e.sort(t); i--; )
                                e[i] = e[i].value;
                            return e
                        }(n, (function(e, t) {
                            return function(e, t, i) {
                                for (var r = -1, n = e.criteria, s = t.criteria, o = n.length, a = i.length; ++r < o; ) {
                                    var c = Sn(n[r], s[r]);
                                    if (c)
                                        return r >= a ? c : c * ("desc" == i[r] ? -1 : 1)
                                }
                                return e.index - t.index
                            }(e, t, i)
                        }
                        ))
                    }
                    function Kr(e, t, i) {
                        for (var r = -1, n = t.length, s = {}; ++r < n; ) {
                            var o = t[r]
                              , a = br(e, o);
                            i(a, o) && Yr(s, vn(o, e), a)
                        }
                        return s
                    }
                    function Hr(e, t, i, r) {
                        var n = r ? Vt : Lt
                          , s = -1
                          , o = t.length
                          , a = e;
                        for (e === t && (t = Nn(t)),
                        i && (a = qt(e, Yt(i))); ++s < o; )
                            for (var c = 0, h = t[s], u = i ? i(h) : h; (c = n(a, u, c, r)) > -1; )
                                a !== e && We.call(a, c, 1),
                                We.call(e, c, 1);
                        return e
                    }
                    function Br(e, t) {
                        for (var i = e ? t.length : 0, r = i - 1; i--; ) {
                            var n = t[i];
                            if (i == r || n !== s) {
                                var s = n;
                                ms(n) ? We.call(e, n, 1) : un(e, n)
                            }
                        }
                        return e
                    }
                    function Fr(e, t) {
                        return e + gt(_i() * (t - e + 1))
                    }
                    function Jr(e, t) {
                        var i = "";
                        if (!e || t < 1 || t > p)
                            return i;
                        do {
                            t % 2 && (i += e),
                            (t = gt(t / 2)) && (e += e)
                        } while (t);
                        return i
                    }
                    function Gr(e, t) {
                        return Cs(Ss(e, t, ic), e + "")
                    }
                    function Wr(e) {
                        return Wi(za(e))
                    }
                    function Qr(e, t) {
                        var i = za(e);
                        return qs(i, sr(t, 0, i.length))
                    }
                    function Yr(e, t, r, n) {
                        if (!Xo(e))
                            return e;
                        for (var s = -1, o = (t = vn(t, e)).length, a = o - 1, c = e; null != c && ++s < o; ) {
                            var h = $s(t[s])
                              , u = r;
                            if ("__proto__" === h || "constructor" === h || "prototype" === h)
                                return e;
                            if (s != a) {
                                var l = c[h];
                                (u = n ? n(l, h, c) : i) === i && (u = Xo(l) ? l : ms(t[s + 1]) ? [] : {})
                            }
                            Xi(c, h, u),
                            c = c[h]
                        }
                        return e
                    }
                    var Zr = Ni ? function(e, t) {
                        return Ni.set(e, t),
                        e
                    }
                    : ic
                      , Xr = it ? function(e, t) {
                        return it(e, "toString", {
                            configurable: !0,
                            enumerable: !1,
                            value: Xa(t),
                            writable: !0
                        })
                    }
                    : ic;
                    function en(e) {
                        return qs(za(e))
                    }
                    function tn(e, t, i) {
                        var r = -1
                          , n = e.length;
                        t < 0 && (t = -t > n ? 0 : n + t),
                        (i = i > n ? n : i) < 0 && (i += n),
                        n = t > i ? 0 : i - t >>> 0,
                        t >>>= 0;
                        for (var s = se(n); ++r < n; )
                            s[r] = e[r + t];
                        return s
                    }
                    function rn(e, t) {
                        var i;
                        return ur(e, (function(e, r, n) {
                            return !(i = t(e, r, n))
                        }
                        )),
                        !!i
                    }
                    function nn(e, t, i) {
                        var r = 0
                          , n = null == e ? r : e.length;
                        if ("number" == typeof t && t === t && n <= 2147483647) {
                            for (; r < n; ) {
                                var s = r + n >>> 1
                                  , o = e[s];
                                null !== o && !aa(o) && (i ? o <= t : o < t) ? r = s + 1 : n = s
                            }
                            return n
                        }
                        return sn(e, t, ic, i)
                    }
                    function sn(e, t, r, n) {
                        var s = 0
                          , o = null == e ? 0 : e.length;
                        if (0 === o)
                            return 0;
                        for (var a = (t = r(t)) !== t, c = null === t, h = aa(t), u = t === i; s < o; ) {
                            var l = gt((s + o) / 2)
                              , p = r(e[l])
                              , d = p !== i
                              , f = null === p
                              , g = p === p
                              , y = aa(p);
                            if (a)
                                var m = n || g;
                            else
                                m = u ? g && (n || d) : c ? g && d && (n || !f) : h ? g && d && !f && (n || !y) : !f && !y && (n ? p <= t : p < t);
                            m ? s = l + 1 : o = l
                        }
                        return mi(o, 4294967294)
                    }
                    function on(e, t) {
                        for (var i = -1, r = e.length, n = 0, s = []; ++i < r; ) {
                            var o = e[i]
                              , a = t ? t(o) : o;
                            if (!i || !zo(a, c)) {
                                var c = a;
                                s[n++] = 0 === o ? 0 : o
                            }
                        }
                        return s
                    }
                    function an(e) {
                        return "number" == typeof e ? e : aa(e) ? d : +e
                    }
                    function cn(e) {
                        if ("string" == typeof e)
                            return e;
                        if (Ko(e))
                            return qt(e, cn) + "";
                        if (aa(e))
                            return Ui ? Ui.call(e) : "";
                        var t = e + "";
                        return "0" == t && 1 / e == -l ? "-0" : t
                    }
                    function hn(e, t, i) {
                        var r = -1
                          , n = At
                          , s = e.length
                          , o = !0
                          , a = []
                          , c = a;
                        if (i)
                            o = !1,
                            n = Tt;
                        else if (s >= 200) {
                            var h = t ? null : Gn(e);
                            if (h)
                                return hi(h);
                            o = !1,
                            n = Xt,
                            c = new Fi
                        } else
                            c = t ? [] : a;
                        e: for (; ++r < s; ) {
                            var u = e[r]
                              , l = t ? t(u) : u;
                            if (u = i || 0 !== u ? u : 0,
                            o && l === l) {
                                for (var p = c.length; p--; )
                                    if (c[p] === l)
                                        continue e;
                                t && c.push(l),
                                a.push(u)
                            } else
                                n(c, l, i) || (c !== a && c.push(l),
                                a.push(u))
                        }
                        return a
                    }
                    function un(e, t) {
                        return null == (e = Rs(e, t = vn(t, e))) || delete e[$s(Gs(t))]
                    }
                    function ln(e, t, i, r) {
                        return Yr(e, t, i(br(e, t)), r)
                    }
                    function pn(e, t, i, r) {
                        for (var n = e.length, s = r ? n : -1; (r ? s-- : ++s < n) && t(e[s], s, e); )
                            ;
                        return i ? tn(e, r ? 0 : s, r ? s + 1 : n) : tn(e, r ? s + 1 : 0, r ? n : s)
                    }
                    function dn(e, t) {
                        var i = e;
                        return i instanceof Vi && (i = i.value()),
                        $t(t, (function(e, t) {
                            return t.func.apply(t.thisArg, Dt([e], t.args))
                        }
                        ), i)
                    }
                    function fn(e, t, i) {
                        var r = e.length;
                        if (r < 2)
                            return r ? hn(e[0]) : [];
                        for (var n = -1, s = se(r); ++n < r; )
                            for (var o = e[n], a = -1; ++a < r; )
                                a != n && (s[n] = hr(s[n] || o, e[a], t, i));
                        return hn(gr(s, 1), t, i)
                    }
                    function gn(e, t, r) {
                        for (var n = -1, s = e.length, o = t.length, a = {}; ++n < s; ) {
                            var c = n < o ? t[n] : i;
                            r(a, e[n], c)
                        }
                        return a
                    }
                    function yn(e) {
                        return Fo(e) ? e : []
                    }
                    function mn(e) {
                        return "function" == typeof e ? e : ic
                    }
                    function vn(e, t) {
                        return Ko(e) ? e : ws(e, t) ? [e] : Ds(ma(e))
                    }
                    var wn = Gr;
                    function _n(e, t, r) {
                        var n = e.length;
                        return r = r === i ? n : r,
                        !t && r >= n ? e : tn(e, t, r)
                    }
                    var bn = ct || function(e) {
                        return dt.clearTimeout(e)
                    }
                    ;
                    function In(e, t) {
                        if (t)
                            return e.slice();
                        var i = e.length
                          , r = Be ? Be(i) : new e.constructor(i);
                        return e.copy(r),
                        r
                    }
                    function En(e) {
                        var t = new e.constructor(e.byteLength);
                        return new He(t).set(new He(e)),
                        t
                    }
                    function Pn(e, t) {
                        var i = t ? En(e.buffer) : e.buffer;
                        return new e.constructor(i,e.byteOffset,e.length)
                    }
                    function Sn(e, t) {
                        if (e !== t) {
                            var r = e !== i
                              , n = null === e
                              , s = e === e
                              , o = aa(e)
                              , a = t !== i
                              , c = null === t
                              , h = t === t
                              , u = aa(t);
                            if (!c && !u && !o && e > t || o && a && h && !c && !u || n && a && h || !r && h || !s)
                                return 1;
                            if (!n && !o && !u && e < t || u && r && s && !n && !o || c && r && s || !a && s || !h)
                                return -1
                        }
                        return 0
                    }
                    function Rn(e, t, i, r) {
                        for (var n = -1, s = e.length, o = i.length, a = -1, c = t.length, h = yi(s - o, 0), u = se(c + h), l = !r; ++a < c; )
                            u[a] = t[a];
                        for (; ++n < o; )
                            (l || n < s) && (u[i[n]] = e[n]);
                        for (; h--; )
                            u[a++] = e[n++];
                        return u
                    }
                    function On(e, t, i, r) {
                        for (var n = -1, s = e.length, o = -1, a = i.length, c = -1, h = t.length, u = yi(s - a, 0), l = se(u + h), p = !r; ++n < u; )
                            l[n] = e[n];
                        for (var d = n; ++c < h; )
                            l[d + c] = t[c];
                        for (; ++o < a; )
                            (p || n < s) && (l[d + i[o]] = e[n++]);
                        return l
                    }
                    function Nn(e, t) {
                        var i = -1
                          , r = e.length;
                        for (t || (t = se(r)); ++i < r; )
                            t[i] = e[i];
                        return t
                    }
                    function xn(e, t, r, n) {
                        var s = !r;
                        r || (r = {});
                        for (var o = -1, a = t.length; ++o < a; ) {
                            var c = t[o]
                              , h = n ? n(r[c], e[c], c, r, e) : i;
                            h === i && (h = e[c]),
                            s ? rr(r, c, h) : Xi(r, c, h)
                        }
                        return r
                    }
                    function Cn(e, t) {
                        return function(i, r) {
                            var n = Ko(i) ? Rt : tr
                              , s = t ? t() : {};
                            return n(i, e, as(r, 2), s)
                        }
                    }
                    function An(e) {
                        return Gr((function(t, r) {
                            var n = -1
                              , s = r.length
                              , o = s > 1 ? r[s - 1] : i
                              , a = s > 2 ? r[2] : i;
                            for (o = e.length > 3 && "function" == typeof o ? (s--,
                            o) : i,
                            a && vs(r[0], r[1], a) && (o = s < 3 ? i : o,
                            s = 1),
                            t = Re(t); ++n < s; ) {
                                var c = r[n];
                                c && e(t, c, n, o)
                            }
                            return t
                        }
                        ))
                    }
                    function Tn(e, t) {
                        return function(i, r) {
                            if (null == i)
                                return i;
                            if (!Bo(i))
                                return e(i, r);
                            for (var n = i.length, s = t ? n : -1, o = Re(i); (t ? s-- : ++s < n) && !1 !== r(o[s], s, o); )
                                ;
                            return i
                        }
                    }
                    function qn(e) {
                        return function(t, i, r) {
                            for (var n = -1, s = Re(t), o = r(t), a = o.length; a--; ) {
                                var c = o[e ? a : ++n];
                                if (!1 === i(s[c], c, s))
                                    break
                            }
                            return t
                        }
                    }
                    function Dn(e) {
                        return function(t) {
                            var r = si(t = ma(t)) ? li(t) : i
                              , n = r ? r[0] : t.charAt(0)
                              , s = r ? _n(r, 1).join("") : t.slice(1);
                            return n[e]() + s
                        }
                    }
                    function $n(e) {
                        return function(t) {
                            return $t(Qa(Va(t).replace(Ze, "")), e, "")
                        }
                    }
                    function jn(e) {
                        return function() {
                            var t = arguments;
                            switch (t.length) {
                            case 0:
                                return new e;
                            case 1:
                                return new e(t[0]);
                            case 2:
                                return new e(t[0],t[1]);
                            case 3:
                                return new e(t[0],t[1],t[2]);
                            case 4:
                                return new e(t[0],t[1],t[2],t[3]);
                            case 5:
                                return new e(t[0],t[1],t[2],t[3],t[4]);
                            case 6:
                                return new e(t[0],t[1],t[2],t[3],t[4],t[5]);
                            case 7:
                                return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])
                            }
                            var i = zi(e.prototype)
                              , r = e.apply(i, t);
                            return Xo(r) ? r : i
                        }
                    }
                    function Un(e) {
                        return function(t, r, n) {
                            var s = Re(t);
                            if (!Bo(t)) {
                                var o = as(r, 3);
                                t = Ca(t),
                                r = function(e) {
                                    return o(s[e], e, s)
                                }
                            }
                            var a = e(t, r, n);
                            return a > -1 ? s[o ? t[a] : a] : i
                        }
                    }
                    function Mn(e) {
                        return ts((function(t) {
                            var n = t.length
                              , s = n
                              , o = Li.prototype.thru;
                            for (e && t.reverse(); s--; ) {
                                var a = t[s];
                                if ("function" != typeof a)
                                    throw new xe(r);
                                if (o && !c && "wrapper" == ss(a))
                                    var c = new Li([],!0)
                            }
                            for (s = c ? s : n; ++s < n; ) {
                                var h = ss(a = t[s])
                                  , u = "wrapper" == h ? ns(a) : i;
                                c = u && _s(u[0]) && 424 == u[1] && !u[4].length && 1 == u[9] ? c[ss(u[0])].apply(c, u[3]) : 1 == a.length && _s(a) ? c[h]() : c.thru(a)
                            }
                            return function() {
                                var e = arguments
                                  , i = e[0];
                                if (c && 1 == e.length && Ko(i))
                                    return c.plant(i).value();
                                for (var r = 0, s = n ? t[r].apply(this, e) : i; ++r < n; )
                                    s = t[r].call(this, s);
                                return s
                            }
                        }
                        ))
                    }
                    function zn(e, t, r, n, s, o, a, c, u, l) {
                        var p = t & h
                          , d = 1 & t
                          , f = 2 & t
                          , g = 24 & t
                          , y = 512 & t
                          , m = f ? i : jn(e);
                        return function h() {
                            for (var v = arguments.length, w = se(v), _ = v; _--; )
                                w[_] = arguments[_];
                            if (g)
                                var b = os(h)
                                  , I = function(e, t) {
                                    for (var i = e.length, r = 0; i--; )
                                        e[i] === t && ++r;
                                    return r
                                }(w, b);
                            if (n && (w = Rn(w, n, s, g)),
                            o && (w = On(w, o, a, g)),
                            v -= I,
                            g && v < l) {
                                var E = ci(w, b);
                                return Fn(e, t, zn, h.placeholder, r, w, E, c, u, l - v)
                            }
                            var P = d ? r : this
                              , S = f ? P[e] : e;
                            return v = w.length,
                            c ? w = function(e, t) {
                                for (var r = e.length, n = mi(t.length, r), s = Nn(e); n--; ) {
                                    var o = t[n];
                                    e[n] = ms(o, r) ? s[o] : i
                                }
                                return e
                            }(w, c) : y && v > 1 && w.reverse(),
                            p && u < v && (w.length = u),
                            this && this !== dt && this instanceof h && (S = m || jn(S)),
                            S.apply(P, w)
                        }
                    }
                    function kn(e, t) {
                        return function(i, r) {
                            return function(e, t, i, r) {
                                return vr(e, (function(e, n, s) {
                                    t(r, i(e), n, s)
                                }
                                )),
                                r
                            }(i, e, t(r), {})
                        }
                    }
                    function Ln(e, t) {
                        return function(r, n) {
                            var s;
                            if (r === i && n === i)
                                return t;
                            if (r !== i && (s = r),
                            n !== i) {
                                if (s === i)
                                    return n;
                                "string" == typeof r || "string" == typeof n ? (r = cn(r),
                                n = cn(n)) : (r = an(r),
                                n = an(n)),
                                s = e(r, n)
                            }
                            return s
                        }
                    }
                    function Vn(e) {
                        return ts((function(t) {
                            return t = qt(t, Yt(as())),
                            Gr((function(i) {
                                var r = this;
                                return e(t, (function(e) {
                                    return St(e, r, i)
                                }
                                ))
                            }
                            ))
                        }
                        ))
                    }
                    function Kn(e, t) {
                        var r = (t = t === i ? " " : cn(t)).length;
                        if (r < 2)
                            return r ? Jr(t, e) : t;
                        var n = Jr(t, ft(e / ui(t)));
                        return si(t) ? _n(li(n), 0, e).join("") : n.slice(0, e)
                    }
                    function Hn(e) {
                        return function(t, r, n) {
                            return n && "number" != typeof n && vs(t, r, n) && (r = n = i),
                            t = pa(t),
                            r === i ? (r = t,
                            t = 0) : r = pa(r),
                            function(e, t, i, r) {
                                for (var n = -1, s = yi(ft((t - e) / (i || 1)), 0), o = se(s); s--; )
                                    o[r ? s : ++n] = e,
                                    e += i;
                                return o
                            }(t, r, n = n === i ? t < r ? 1 : -1 : pa(n), e)
                        }
                    }
                    function Bn(e) {
                        return function(t, i) {
                            return "string" == typeof t && "string" == typeof i || (t = ga(t),
                            i = ga(i)),
                            e(t, i)
                        }
                    }
                    function Fn(e, t, r, n, s, o, h, u, l, p) {
                        var d = 8 & t;
                        t |= d ? a : c,
                        4 & (t &= ~(d ? c : a)) || (t &= -4);
                        var f = [e, t, s, d ? o : i, d ? h : i, d ? i : o, d ? i : h, u, l, p]
                          , g = r.apply(i, f);
                        return _s(e) && Ns(g, f),
                        g.placeholder = n,
                        As(g, e, t)
                    }
                    function Jn(e) {
                        var t = Se[e];
                        return function(e, i) {
                            if (e = ga(e),
                            (i = null == i ? 0 : mi(da(i), 292)) && Mt(e)) {
                                var r = (ma(e) + "e").split("e");
                                return +((r = (ma(t(r[0] + "e" + (+r[1] + i))) + "e").split("e"))[0] + "e" + (+r[1] - i))
                            }
                            return t(e)
                        }
                    }
                    var Gn = Si && 1 / hi(new Si([, -0]))[1] == l ? function(e) {
                        return new Si(e)
                    }
                    : ac;
                    function Wn(e) {
                        return function(t) {
                            var i = ds(t);
                            return i == E ? oi(t) : i == N ? function(e) {
                                var t = -1
                                  , i = Array(e.size);
                                return e.forEach((function(e) {
                                    i[++t] = [e, e]
                                }
                                )),
                                i
                            }(t) : function(e, t) {
                                return qt(t, (function(t) {
                                    return [t, e[t]]
                                }
                                ))
                            }(t, e(t))
                        }
                    }
                    function Qn(e, t, n, l, p, d, f, g) {
                        var y = 2 & t;
                        if (!y && "function" != typeof e)
                            throw new xe(r);
                        var m = l ? l.length : 0;
                        if (m || (t &= -97,
                        l = p = i),
                        f = f === i ? f : yi(da(f), 0),
                        g = g === i ? g : da(g),
                        m -= p ? p.length : 0,
                        t & c) {
                            var v = l
                              , w = p;
                            l = p = i
                        }
                        var _ = y ? i : ns(e)
                          , b = [e, t, n, l, p, v, w, d, f, g];
                        if (_ && function(e, t) {
                            var i = e[1]
                              , r = t[1]
                              , n = i | r
                              , o = n < 131
                              , a = r == h && 8 == i || r == h && i == u && e[7].length <= t[8] || 384 == r && t[7].length <= t[8] && 8 == i;
                            if (!o && !a)
                                return e;
                            1 & r && (e[2] = t[2],
                            n |= 1 & i ? 0 : 4);
                            var c = t[3];
                            if (c) {
                                var l = e[3];
                                e[3] = l ? Rn(l, c, t[4]) : c,
                                e[4] = l ? ci(e[3], s) : t[4]
                            }
                            c = t[5],
                            c && (l = e[5],
                            e[5] = l ? On(l, c, t[6]) : c,
                            e[6] = l ? ci(e[5], s) : t[6]),
                            c = t[7],
                            c && (e[7] = c),
                            r & h && (e[8] = null == e[8] ? t[8] : mi(e[8], t[8])),
                            null == e[9] && (e[9] = t[9]),
                            e[0] = t[0],
                            e[1] = n
                        }(b, _),
                        e = b[0],
                        t = b[1],
                        n = b[2],
                        l = b[3],
                        p = b[4],
                        !(g = b[9] = b[9] === i ? y ? 0 : e.length : yi(b[9] - m, 0)) && 24 & t && (t &= -25),
                        t && 1 != t)
                            I = 8 == t || t == o ? function(e, t, r) {
                                var n = jn(e);
                                return function s() {
                                    for (var o = arguments.length, a = se(o), c = o, h = os(s); c--; )
                                        a[c] = arguments[c];
                                    var u = o < 3 && a[0] !== h && a[o - 1] !== h ? [] : ci(a, h);
                                    return (o -= u.length) < r ? Fn(e, t, zn, s.placeholder, i, a, u, i, i, r - o) : St(this && this !== dt && this instanceof s ? n : e, this, a)
                                }
                            }(e, t, g) : t != a && 33 != t || p.length ? zn.apply(i, b) : function(e, t, i, r) {
                                var n = 1 & t
                                  , s = jn(e);
                                return function t() {
                                    for (var o = -1, a = arguments.length, c = -1, h = r.length, u = se(h + a), l = this && this !== dt && this instanceof t ? s : e; ++c < h; )
                                        u[c] = r[c];
                                    for (; a--; )
                                        u[c++] = arguments[++o];
                                    return St(l, n ? i : this, u)
                                }
                            }(e, t, n, l);
                        else
                            var I = function(e, t, i) {
                                var r = 1 & t
                                  , n = jn(e);
                                return function t() {
                                    return (this && this !== dt && this instanceof t ? n : e).apply(r ? i : this, arguments)
                                }
                            }(e, t, n);
                        return As((_ ? Zr : Ns)(I, b), e, t)
                    }
                    function Yn(e, t, r, n) {
                        return e === i || zo(e, Te[r]) && !$e.call(n, r) ? t : e
                    }
                    function Zn(e, t, r, n, s, o) {
                        return Xo(e) && Xo(t) && (o.set(t, e),
                        kr(e, t, i, Zn, o),
                        o.delete(t)),
                        e
                    }
                    function Xn(e) {
                        return ra(e) ? i : e
                    }
                    function es(e, t, r, n, s, o) {
                        var a = 1 & r
                          , c = e.length
                          , h = t.length;
                        if (c != h && !(a && h > c))
                            return !1;
                        var u = o.get(e)
                          , l = o.get(t);
                        if (u && l)
                            return u == t && l == e;
                        var p = -1
                          , d = !0
                          , f = 2 & r ? new Fi : i;
                        for (o.set(e, t),
                        o.set(t, e); ++p < c; ) {
                            var g = e[p]
                              , y = t[p];
                            if (n)
                                var m = a ? n(y, g, p, t, e, o) : n(g, y, p, e, t, o);
                            if (m !== i) {
                                if (m)
                                    continue;
                                d = !1;
                                break
                            }
                            if (f) {
                                if (!Ut(t, (function(e, t) {
                                    if (!Xt(f, t) && (g === e || s(g, e, r, n, o)))
                                        return f.push(t)
                                }
                                ))) {
                                    d = !1;
                                    break
                                }
                            } else if (g !== y && !s(g, y, r, n, o)) {
                                d = !1;
                                break
                            }
                        }
                        return o.delete(e),
                        o.delete(t),
                        d
                    }
                    function ts(e) {
                        return Cs(Ss(e, i, Ks), e + "")
                    }
                    function is(e) {
                        return Ir(e, Ca, ls)
                    }
                    function rs(e) {
                        return Ir(e, Aa, ps)
                    }
                    var ns = Ni ? function(e) {
                        return Ni.get(e)
                    }
                    : ac;
                    function ss(e) {
                        for (var t = e.name + "", i = xi[t], r = $e.call(xi, t) ? i.length : 0; r--; ) {
                            var n = i[r]
                              , s = n.func;
                            if (null == s || s == e)
                                return n.name
                        }
                        return t
                    }
                    function os(e) {
                        return ($e.call(Mi, "placeholder") ? Mi : e).placeholder
                    }
                    function as() {
                        var e = Mi.iteratee || rc;
                        return e = e === rc ? qr : e,
                        arguments.length ? e(arguments[0], arguments[1]) : e
                    }
                    function cs(e, t) {
                        var i = e.__data__;
                        return function(e) {
                            var t = typeof e;
                            return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
                        }(t) ? i["string" == typeof t ? "string" : "hash"] : i.map
                    }
                    function hs(e) {
                        for (var t = Ca(e), i = t.length; i--; ) {
                            var r = t[i]
                              , n = e[r];
                            t[i] = [r, n, Es(n)]
                        }
                        return t
                    }
                    function us(e, t) {
                        var r = function(e, t) {
                            return null == e ? i : e[t]
                        }(e, t);
                        return Tr(r) ? r : i
                    }
                    var ls = mt ? function(e) {
                        return null == e ? [] : (e = Re(e),
                        Ct(mt(e), (function(t) {
                            return Ge.call(e, t)
                        }
                        )))
                    }
                    : fc
                      , ps = mt ? function(e) {
                        for (var t = []; e; )
                            Dt(t, ls(e)),
                            e = Fe(e);
                        return t
                    }
                    : fc
                      , ds = Er;
                    function fs(e, t, i) {
                        for (var r = -1, n = (t = vn(t, e)).length, s = !1; ++r < n; ) {
                            var o = $s(t[r]);
                            if (!(s = null != e && i(e, o)))
                                break;
                            e = e[o]
                        }
                        return s || ++r != n ? s : !!(n = null == e ? 0 : e.length) && Zo(n) && ms(o, n) && (Ko(e) || Vo(e))
                    }
                    function gs(e) {
                        return "function" != typeof e.constructor || Is(e) ? {} : zi(Fe(e))
                    }
                    function ys(e) {
                        return Ko(e) || Vo(e) || !!(Qe && e && e[Qe])
                    }
                    function ms(e, t) {
                        var i = typeof e;
                        return !!(t = t ?? p) && ("number" == i || "symbol" != i && ve.test(e)) && e > -1 && e % 1 == 0 && e < t
                    }
                    function vs(e, t, i) {
                        if (!Xo(i))
                            return !1;
                        var r = typeof t;
                        return !!("number" == r ? Bo(i) && ms(t, i.length) : "string" == r && t in i) && zo(i[t], e)
                    }
                    function ws(e, t) {
                        if (Ko(e))
                            return !1;
                        var i = typeof e;
                        return !("number" != i && "symbol" != i && "boolean" != i && null != e && !aa(e)) || (ee.test(e) || !X.test(e) || null != t && e in Re(t))
                    }
                    function _s(e) {
                        var t = ss(e)
                          , i = Mi[t];
                        if ("function" != typeof i || !(t in Vi.prototype))
                            return !1;
                        if (e === i)
                            return !0;
                        var r = ns(i);
                        return !!r && e === r[0]
                    }
                    (Ii && ds(new Ii(new ArrayBuffer(1))) != q || Ei && ds(new Ei) != E || Pi && ds(Pi.resolve()) != R || Si && ds(new Si) != N || Ri && ds(new Ri) != A) && (ds = function(e) {
                        var t = Er(e)
                          , r = t == S ? e.constructor : i
                          , n = r ? js(r) : "";
                        if (n)
                            switch (n) {
                            case Ci:
                                return q;
                            case Ai:
                                return E;
                            case Ti:
                                return R;
                            case qi:
                                return N;
                            case Di:
                                return A
                            }
                        return t
                    }
                    );
                    var bs = qe ? Qo : gc;
                    function Is(e) {
                        var t = e && e.constructor;
                        return e === ("function" == typeof t && t.prototype || Te)
                    }
                    function Es(e) {
                        return e === e && !Xo(e)
                    }
                    function Ps(e, t) {
                        return function(r) {
                            return null != r && (r[e] === t && (t !== i || e in Re(r)))
                        }
                    }
                    function Ss(e, t, r) {
                        return t = yi(t === i ? e.length - 1 : t, 0),
                        function() {
                            for (var i = arguments, n = -1, s = yi(i.length - t, 0), o = se(s); ++n < s; )
                                o[n] = i[t + n];
                            n = -1;
                            for (var a = se(t + 1); ++n < t; )
                                a[n] = i[n];
                            return a[t] = r(o),
                            St(e, this, a)
                        }
                    }
                    function Rs(e, t) {
                        return t.length < 2 ? e : br(e, tn(t, 0, -1))
                    }
                    function Os(e, t) {
                        if (("constructor" !== t || "function" != typeof e[t]) && "__proto__" != t)
                            return e[t]
                    }
                    var Ns = Ts(Zr)
                      , xs = pt || function(e, t) {
                        return dt.setTimeout(e, t)
                    }
                      , Cs = Ts(Xr);
                    function As(e, t, i) {
                        var r = t + "";
                        return Cs(e, function(e, t) {
                            var i = t.length;
                            if (!i)
                                return e;
                            var r = i - 1;
                            return t[r] = (i > 1 ? "& " : "") + t[r],
                            t = t.join(i > 2 ? ", " : " "),
                            e.replace(oe, "{\n/* [wrapped with " + t + "] */\n")
                        }(r, function(e, t) {
                            return Ot(g, (function(i) {
                                var r = "_." + i[0];
                                t & i[1] && !At(e, r) && e.push(r)
                            }
                            )),
                            e.sort()
                        }(function(e) {
                            var t = e.match(ae);
                            return t ? t[1].split(ce) : []
                        }(r), i)))
                    }
                    function Ts(e) {
                        var t = 0
                          , r = 0;
                        return function() {
                            var n = vi()
                              , s = 16 - (n - r);
                            if (r = n,
                            s > 0) {
                                if (++t >= 800)
                                    return arguments[0]
                            } else
                                t = 0;
                            return e.apply(i, arguments)
                        }
                    }
                    function qs(e, t) {
                        var r = -1
                          , n = e.length
                          , s = n - 1;
                        for (t = t === i ? n : t; ++r < t; ) {
                            var o = Fr(r, s)
                              , a = e[o];
                            e[o] = e[r],
                            e[r] = a
                        }
                        return e.length = t,
                        e
                    }
                    var Ds = function(e) {
                        var t = qo(e, (function(e) {
                            return 500 === i.size && i.clear(),
                            e
                        }
                        ))
                          , i = t.cache;
                        return t
                    }((function(e) {
                        var t = [];
                        return 46 === e.charCodeAt(0) && t.push(""),
                        e.replace(te, (function(e, i, r, n) {
                            t.push(r ? n.replace(le, "$1") : i || e)
                        }
                        )),
                        t
                    }
                    ));
                    function $s(e) {
                        if ("string" == typeof e || aa(e))
                            return e;
                        var t = e + "";
                        return "0" == t && 1 / e == -l ? "-0" : t
                    }
                    function js(e) {
                        if (null != e) {
                            try {
                                return De.call(e)
                            } catch {}
                            try {
                                return e + ""
                            } catch {}
                        }
                        return ""
                    }
                    function Us(e) {
                        if (e instanceof Vi)
                            return e.clone();
                        var t = new Li(e.__wrapped__,e.__chain__);
                        return t.__actions__ = Nn(e.__actions__),
                        t.__index__ = e.__index__,
                        t.__values__ = e.__values__,
                        t
                    }
                    var Ms = Gr((function(e, t) {
                        return Fo(e) ? hr(e, gr(t, 1, Fo, !0)) : []
                    }
                    ))
                      , zs = Gr((function(e, t) {
                        var r = Gs(t);
                        return Fo(r) && (r = i),
                        Fo(e) ? hr(e, gr(t, 1, Fo, !0), as(r, 2)) : []
                    }
                    ))
                      , ks = Gr((function(e, t) {
                        var r = Gs(t);
                        return Fo(r) && (r = i),
                        Fo(e) ? hr(e, gr(t, 1, Fo, !0), i, r) : []
                    }
                    ));
                    function Ls(e, t, i) {
                        var r = null == e ? 0 : e.length;
                        if (!r)
                            return -1;
                        var n = null == i ? 0 : da(i);
                        return n < 0 && (n = yi(r + n, 0)),
                        kt(e, as(t, 3), n)
                    }
                    function Vs(e, t, r) {
                        var n = null == e ? 0 : e.length;
                        if (!n)
                            return -1;
                        var s = n - 1;
                        return r !== i && (s = da(r),
                        s = r < 0 ? yi(n + s, 0) : mi(s, n - 1)),
                        kt(e, as(t, 3), s, !0)
                    }
                    function Ks(e) {
                        return (null == e ? 0 : e.length) ? gr(e, 1) : []
                    }
                    function Hs(e) {
                        return e && e.length ? e[0] : i
                    }
                    var Bs = Gr((function(e) {
                        var t = qt(e, yn);
                        return t.length && t[0] === e[0] ? Or(t) : []
                    }
                    ))
                      , Fs = Gr((function(e) {
                        var t = Gs(e)
                          , r = qt(e, yn);
                        return t === Gs(r) ? t = i : r.pop(),
                        r.length && r[0] === e[0] ? Or(r, as(t, 2)) : []
                    }
                    ))
                      , Js = Gr((function(e) {
                        var t = Gs(e)
                          , r = qt(e, yn);
                        return (t = "function" == typeof t ? t : i) && r.pop(),
                        r.length && r[0] === e[0] ? Or(r, i, t) : []
                    }
                    ));
                    function Gs(e) {
                        var t = null == e ? 0 : e.length;
                        return t ? e[t - 1] : i
                    }
                    var Ws = Gr(Qs);
                    function Qs(e, t) {
                        return e && e.length && t && t.length ? Hr(e, t) : e
                    }
                    var Ys = ts((function(e, t) {
                        var i = null == e ? 0 : e.length
                          , r = nr(e, t);
                        return Br(e, qt(t, (function(e) {
                            return ms(e, i) ? +e : e
                        }
                        )).sort(Sn)),
                        r
                    }
                    ));
                    function Zs(e) {
                        return null == e ? e : bi.call(e)
                    }
                    var Xs = Gr((function(e) {
                        return hn(gr(e, 1, Fo, !0))
                    }
                    ))
                      , eo = Gr((function(e) {
                        var t = Gs(e);
                        return Fo(t) && (t = i),
                        hn(gr(e, 1, Fo, !0), as(t, 2))
                    }
                    ))
                      , to = Gr((function(e) {
                        var t = Gs(e);
                        return t = "function" == typeof t ? t : i,
                        hn(gr(e, 1, Fo, !0), i, t)
                    }
                    ));
                    function io(e) {
                        if (!e || !e.length)
                            return [];
                        var t = 0;
                        return e = Ct(e, (function(e) {
                            if (Fo(e))
                                return t = yi(e.length, t),
                                !0
                        }
                        )),
                        Wt(t, (function(t) {
                            return qt(e, Bt(t))
                        }
                        ))
                    }
                    function ro(e, t) {
                        if (!e || !e.length)
                            return [];
                        var r = io(e);
                        return null == t ? r : qt(r, (function(e) {
                            return St(t, i, e)
                        }
                        ))
                    }
                    var no = Gr((function(e, t) {
                        return Fo(e) ? hr(e, t) : []
                    }
                    ))
                      , so = Gr((function(e) {
                        return fn(Ct(e, Fo))
                    }
                    ))
                      , oo = Gr((function(e) {
                        var t = Gs(e);
                        return Fo(t) && (t = i),
                        fn(Ct(e, Fo), as(t, 2))
                    }
                    ))
                      , ao = Gr((function(e) {
                        var t = Gs(e);
                        return t = "function" == typeof t ? t : i,
                        fn(Ct(e, Fo), i, t)
                    }
                    ))
                      , co = Gr(io);
                    var ho = Gr((function(e) {
                        var t = e.length
                          , r = t > 1 ? e[t - 1] : i;
                        return r = "function" == typeof r ? (e.pop(),
                        r) : i,
                        ro(e, r)
                    }
                    ));
                    function uo(e) {
                        var t = Mi(e);
                        return t.__chain__ = !0,
                        t
                    }
                    function lo(e, t) {
                        return t(e)
                    }
                    var po = ts((function(e) {
                        var t = e.length
                          , r = t ? e[0] : 0
                          , n = this.__wrapped__
                          , s = function(t) {
                            return nr(t, e)
                        };
                        return !(t > 1 || this.__actions__.length) && n instanceof Vi && ms(r) ? ((n = n.slice(r, +r + (t ? 1 : 0))).__actions__.push({
                            func: lo,
                            args: [s],
                            thisArg: i
                        }),
                        new Li(n,this.__chain__).thru((function(e) {
                            return t && !e.length && e.push(i),
                            e
                        }
                        ))) : this.thru(s)
                    }
                    ));
                    var fo = Cn((function(e, t, i) {
                        $e.call(e, i) ? ++e[i] : rr(e, i, 1)
                    }
                    ));
                    var go = Un(Ls)
                      , yo = Un(Vs);
                    function mo(e, t) {
                        return (Ko(e) ? Ot : ur)(e, as(t, 3))
                    }
                    function vo(e, t) {
                        return (Ko(e) ? Nt : lr)(e, as(t, 3))
                    }
                    var wo = Cn((function(e, t, i) {
                        $e.call(e, i) ? e[i].push(t) : rr(e, i, [t])
                    }
                    ));
                    var _o = Gr((function(e, t, i) {
                        var r = -1
                          , n = "function" == typeof t
                          , s = Bo(e) ? se(e.length) : [];
                        return ur(e, (function(e) {
                            s[++r] = n ? St(t, e, i) : Nr(e, t, i)
                        }
                        )),
                        s
                    }
                    ))
                      , bo = Cn((function(e, t, i) {
                        rr(e, i, t)
                    }
                    ));
                    function Io(e, t) {
                        return (Ko(e) ? qt : Ur)(e, as(t, 3))
                    }
                    var Eo = Cn((function(e, t, i) {
                        e[i ? 0 : 1].push(t)
                    }
                    ), (function() {
                        return [[], []]
                    }
                    ));
                    var Po = Gr((function(e, t) {
                        if (null == e)
                            return [];
                        var i = t.length;
                        return i > 1 && vs(e, t[0], t[1]) ? t = [] : i > 2 && vs(t[0], t[1], t[2]) && (t = [t[0]]),
                        Vr(e, gr(t, 1), [])
                    }
                    ))
                      , So = lt || function() {
                        return dt.Date.now()
                    }
                    ;
                    function Ro(e, t, r) {
                        return t = r ? i : t,
                        t = e && null == t ? e.length : t,
                        Qn(e, h, i, i, i, i, t)
                    }
                    function Oo(e, t) {
                        var n;
                        if ("function" != typeof t)
                            throw new xe(r);
                        return e = da(e),
                        function() {
                            return --e > 0 && (n = t.apply(this, arguments)),
                            e <= 1 && (t = i),
                            n
                        }
                    }
                    var No = Gr((function(e, t, i) {
                        var r = 1;
                        if (i.length) {
                            var n = ci(i, os(No));
                            r |= a
                        }
                        return Qn(e, r, t, i, n)
                    }
                    ))
                      , xo = Gr((function(e, t, i) {
                        var r = 3;
                        if (i.length) {
                            var n = ci(i, os(xo));
                            r |= a
                        }
                        return Qn(t, r, e, i, n)
                    }
                    ));
                    function Co(e, t, n) {
                        var s, o, a, c, h, u, l = 0, p = !1, d = !1, f = !0;
                        if ("function" != typeof e)
                            throw new xe(r);
                        function g(t) {
                            var r = s
                              , n = o;
                            return s = o = i,
                            l = t,
                            c = e.apply(n, r)
                        }
                        function y(e) {
                            var r = e - u;
                            return u === i || r >= t || r < 0 || d && e - l >= a
                        }
                        function m() {
                            var e = So();
                            if (y(e))
                                return v(e);
                            h = xs(m, function(e) {
                                var i = t - (e - u);
                                return d ? mi(i, a - (e - l)) : i
                            }(e))
                        }
                        function v(e) {
                            return h = i,
                            f && s ? g(e) : (s = o = i,
                            c)
                        }
                        function w() {
                            var e = So()
                              , r = y(e);
                            if (s = arguments,
                            o = this,
                            u = e,
                            r) {
                                if (h === i)
                                    return function(e) {
                                        return l = e,
                                        h = xs(m, t),
                                        p ? g(e) : c
                                    }(u);
                                if (d)
                                    return bn(h),
                                    h = xs(m, t),
                                    g(u)
                            }
                            return h === i && (h = xs(m, t)),
                            c
                        }
                        return t = ga(t) || 0,
                        Xo(n) && (p = !!n.leading,
                        a = (d = "maxWait"in n) ? yi(ga(n.maxWait) || 0, t) : a,
                        f = "trailing"in n ? !!n.trailing : f),
                        w.cancel = function() {
                            h !== i && bn(h),
                            l = 0,
                            s = u = o = h = i
                        }
                        ,
                        w.flush = function() {
                            return h === i ? c : v(So())
                        }
                        ,
                        w
                    }
                    var Ao = Gr((function(e, t) {
                        return cr(e, 1, t)
                    }
                    ))
                      , To = Gr((function(e, t, i) {
                        return cr(e, ga(t) || 0, i)
                    }
                    ));
                    function qo(e, t) {
                        if ("function" != typeof e || null != t && "function" != typeof t)
                            throw new xe(r);
                        var i = function() {
                            var r = arguments
                              , n = t ? t.apply(this, r) : r[0]
                              , s = i.cache;
                            if (s.has(n))
                                return s.get(n);
                            var o = e.apply(this, r);
                            return i.cache = s.set(n, o) || s,
                            o
                        };
                        return i.cache = new (qo.Cache || Bi),
                        i
                    }
                    function Do(e) {
                        if ("function" != typeof e)
                            throw new xe(r);
                        return function() {
                            var t = arguments;
                            switch (t.length) {
                            case 0:
                                return !e.call(this);
                            case 1:
                                return !e.call(this, t[0]);
                            case 2:
                                return !e.call(this, t[0], t[1]);
                            case 3:
                                return !e.call(this, t[0], t[1], t[2])
                            }
                            return !e.apply(this, t)
                        }
                    }
                    qo.Cache = Bi;
                    var $o = wn((function(e, t) {
                        var i = (t = 1 == t.length && Ko(t[0]) ? qt(t[0], Yt(as())) : qt(gr(t, 1), Yt(as()))).length;
                        return Gr((function(r) {
                            for (var n = -1, s = mi(r.length, i); ++n < s; )
                                r[n] = t[n].call(this, r[n]);
                            return St(e, this, r)
                        }
                        ))
                    }
                    ))
                      , jo = Gr((function(e, t) {
                        var r = ci(t, os(jo));
                        return Qn(e, a, i, t, r)
                    }
                    ))
                      , Uo = Gr((function(e, t) {
                        var r = ci(t, os(Uo));
                        return Qn(e, c, i, t, r)
                    }
                    ))
                      , Mo = ts((function(e, t) {
                        return Qn(e, u, i, i, i, t)
                    }
                    ));
                    function zo(e, t) {
                        return e === t || e !== e && t !== t
                    }
                    var ko = Bn(Pr)
                      , Lo = Bn((function(e, t) {
                        return e >= t
                    }
                    ))
                      , Vo = xr(function() {
                        return arguments
                    }()) ? xr : function(e) {
                        return ea(e) && $e.call(e, "callee") && !Ge.call(e, "callee")
                    }
                      , Ko = se.isArray
                      , Ho = wt ? Yt(wt) : function(e) {
                        return ea(e) && Er(e) == T
                    }
                    ;
                    function Bo(e) {
                        return null != e && Zo(e.length) && !Qo(e)
                    }
                    function Fo(e) {
                        return ea(e) && Bo(e)
                    }
                    var Jo = vt || gc
                      , Go = _t ? Yt(_t) : function(e) {
                        return ea(e) && Er(e) == w
                    }
                    ;
                    function Wo(e) {
                        if (!ea(e))
                            return !1;
                        var t = Er(e);
                        return t == _ || "[object DOMException]" == t || "string" == typeof e.message && "string" == typeof e.name && !ra(e)
                    }
                    function Qo(e) {
                        if (!Xo(e))
                            return !1;
                        var t = Er(e);
                        return t == b || t == I || "[object AsyncFunction]" == t || "[object Proxy]" == t
                    }
                    function Yo(e) {
                        return "number" == typeof e && e == da(e)
                    }
                    function Zo(e) {
                        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= p
                    }
                    function Xo(e) {
                        var t = typeof e;
                        return null != e && ("object" == t || "function" == t)
                    }
                    function ea(e) {
                        return null != e && "object" == typeof e
                    }
                    var ta = bt ? Yt(bt) : function(e) {
                        return ea(e) && ds(e) == E
                    }
                    ;
                    function ia(e) {
                        return "number" == typeof e || ea(e) && Er(e) == P
                    }
                    function ra(e) {
                        if (!ea(e) || Er(e) != S)
                            return !1;
                        var t = Fe(e);
                        if (null === t)
                            return !0;
                        var i = $e.call(t, "constructor") && t.constructor;
                        return "function" == typeof i && i instanceof i && De.call(i) == ze
                    }
                    var na = It ? Yt(It) : function(e) {
                        return ea(e) && Er(e) == O
                    }
                    ;
                    var sa = Et ? Yt(Et) : function(e) {
                        return ea(e) && ds(e) == N
                    }
                    ;
                    function oa(e) {
                        return "string" == typeof e || !Ko(e) && ea(e) && Er(e) == x
                    }
                    function aa(e) {
                        return "symbol" == typeof e || ea(e) && Er(e) == C
                    }
                    var ca = Pt ? Yt(Pt) : function(e) {
                        return ea(e) && Zo(e.length) && !!ot[Er(e)]
                    }
                    ;
                    var ha = Bn(jr)
                      , ua = Bn((function(e, t) {
                        return e <= t
                    }
                    ));
                    function la(e) {
                        if (!e)
                            return [];
                        if (Bo(e))
                            return oa(e) ? li(e) : Nn(e);
                        if (Ye && e[Ye])
                            return function(e) {
                                for (var t, i = []; !(t = e.next()).done; )
                                    i.push(t.value);
                                return i
                            }(e[Ye]());
                        var t = ds(e);
                        return (t == E ? oi : t == N ? hi : za)(e)
                    }
                    function pa(e) {
                        return e ? (e = ga(e)) === l || e === -l ? 17976931348623157e292 * (e < 0 ? -1 : 1) : e === e ? e : 0 : 0 === e ? e : 0
                    }
                    function da(e) {
                        var t = pa(e)
                          , i = t % 1;
                        return t === t ? i ? t - i : t : 0
                    }
                    function fa(e) {
                        return e ? sr(da(e), 0, f) : 0
                    }
                    function ga(e) {
                        if ("number" == typeof e)
                            return e;
                        if (aa(e))
                            return d;
                        if (Xo(e)) {
                            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                            e = Xo(t) ? t + "" : t
                        }
                        if ("string" != typeof e)
                            return 0 === e ? e : +e;
                        e = Qt(e);
                        var i = ge.test(e);
                        return i || me.test(e) ? ut(e.slice(2), i ? 2 : 8) : fe.test(e) ? d : +e
                    }
                    function ya(e) {
                        return xn(e, Aa(e))
                    }
                    function ma(e) {
                        return null == e ? "" : cn(e)
                    }
                    var va = An((function(e, t) {
                        if (Is(t) || Bo(t))
                            xn(t, Ca(t), e);
                        else
                            for (var i in t)
                                $e.call(t, i) && Xi(e, i, t[i])
                    }
                    ))
                      , wa = An((function(e, t) {
                        xn(t, Aa(t), e)
                    }
                    ))
                      , _a = An((function(e, t, i, r) {
                        xn(t, Aa(t), e, r)
                    }
                    ))
                      , ba = An((function(e, t, i, r) {
                        xn(t, Ca(t), e, r)
                    }
                    ))
                      , Ia = ts(nr);
                    var Ea = Gr((function(e, t) {
                        e = Re(e);
                        var r = -1
                          , n = t.length
                          , s = n > 2 ? t[2] : i;
                        for (s && vs(t[0], t[1], s) && (n = 1); ++r < n; )
                            for (var o = t[r], a = Aa(o), c = -1, h = a.length; ++c < h; ) {
                                var u = a[c]
                                  , l = e[u];
                                (l === i || zo(l, Te[u]) && !$e.call(e, u)) && (e[u] = o[u])
                            }
                        return e
                    }
                    ))
                      , Pa = Gr((function(e) {
                        return e.push(i, Zn),
                        St(qa, i, e)
                    }
                    ));
                    function Sa(e, t, r) {
                        var n = null == e ? i : br(e, t);
                        return n === i ? r : n
                    }
                    function Ra(e, t) {
                        return null != e && fs(e, t, Rr)
                    }
                    var Oa = kn((function(e, t, i) {
                        null != t && "function" != typeof t.toString && (t = Me.call(t)),
                        e[t] = i
                    }
                    ), Xa(ic))
                      , Na = kn((function(e, t, i) {
                        null != t && "function" != typeof t.toString && (t = Me.call(t)),
                        $e.call(e, t) ? e[t].push(i) : e[t] = [i]
                    }
                    ), as)
                      , xa = Gr(Nr);
                    function Ca(e) {
                        return Bo(e) ? Gi(e) : Dr(e)
                    }
                    function Aa(e) {
                        return Bo(e) ? Gi(e, !0) : $r(e)
                    }
                    var Ta = An((function(e, t, i) {
                        kr(e, t, i)
                    }
                    ))
                      , qa = An((function(e, t, i, r) {
                        kr(e, t, i, r)
                    }
                    ))
                      , Da = ts((function(e, t) {
                        var i = {};
                        if (null == e)
                            return i;
                        var r = !1;
                        t = qt(t, (function(t) {
                            return t = vn(t, e),
                            r || (r = t.length > 1),
                            t
                        }
                        )),
                        xn(e, rs(e), i),
                        r && (i = or(i, 7, Xn));
                        for (var n = t.length; n--; )
                            un(i, t[n]);
                        return i
                    }
                    ));
                    var $a = ts((function(e, t) {
                        return null == e ? {} : function(e, t) {
                            return Kr(e, t, (function(t, i) {
                                return Ra(e, i)
                            }
                            ))
                        }(e, t)
                    }
                    ));
                    function ja(e, t) {
                        if (null == e)
                            return {};
                        var i = qt(rs(e), (function(e) {
                            return [e]
                        }
                        ));
                        return t = as(t),
                        Kr(e, i, (function(e, i) {
                            return t(e, i[0])
                        }
                        ))
                    }
                    var Ua = Wn(Ca)
                      , Ma = Wn(Aa);
                    function za(e) {
                        return null == e ? [] : Zt(e, Ca(e))
                    }
                    var ka = $n((function(e, t, i) {
                        return t = t.toLowerCase(),
                        e + (i ? La(t) : t)
                    }
                    ));
                    function La(e) {
                        return Wa(ma(e).toLowerCase())
                    }
                    function Va(e) {
                        return (e = ma(e)) && e.replace(we, ii).replace(Xe, "")
                    }
                    var Ka = $n((function(e, t, i) {
                        return e + (i ? "-" : "") + t.toLowerCase()
                    }
                    ))
                      , Ha = $n((function(e, t, i) {
                        return e + (i ? " " : "") + t.toLowerCase()
                    }
                    ))
                      , Ba = Dn("toLowerCase");
                    var Fa = $n((function(e, t, i) {
                        return e + (i ? "_" : "") + t.toLowerCase()
                    }
                    ));
                    var Ja = $n((function(e, t, i) {
                        return e + (i ? " " : "") + Wa(t)
                    }
                    ));
                    var Ga = $n((function(e, t, i) {
                        return e + (i ? " " : "") + t.toUpperCase()
                    }
                    ))
                      , Wa = Dn("toUpperCase");
                    function Qa(e, t, r) {
                        return e = ma(e),
                        (t = r ? i : t) === i ? function(e) {
                            return rt.test(e)
                        }(e) ? function(e) {
                            return e.match(tt) || []
                        }(e) : function(e) {
                            return e.match(he) || []
                        }(e) : e.match(t) || []
                    }
                    var Ya = Gr((function(e, t) {
                        try {
                            return St(e, i, t)
                        } catch (r) {
                            return Wo(r) ? r : new Ee(r)
                        }
                    }
                    ))
                      , Za = ts((function(e, t) {
                        return Ot(t, (function(t) {
                            t = $s(t),
                            rr(e, t, No(e[t], e))
                        }
                        )),
                        e
                    }
                    ));
                    function Xa(e) {
                        return function() {
                            return e
                        }
                    }
                    var ec = Mn()
                      , tc = Mn(!0);
                    function ic(e) {
                        return e
                    }
                    function rc(e) {
                        return qr("function" == typeof e ? e : or(e, 1))
                    }
                    var nc = Gr((function(e, t) {
                        return function(i) {
                            return Nr(i, e, t)
                        }
                    }
                    ))
                      , sc = Gr((function(e, t) {
                        return function(i) {
                            return Nr(e, i, t)
                        }
                    }
                    ));
                    function oc(e, t, i) {
                        var r = Ca(t)
                          , n = _r(t, r);
                        null == i && (!Xo(t) || !n.length && r.length) && (i = t,
                        t = e,
                        e = this,
                        n = _r(t, Ca(t)));
                        var s = !(Xo(i) && "chain"in i) || !!i.chain
                          , o = Qo(e);
                        return Ot(n, (function(i) {
                            var r = t[i];
                            e[i] = r,
                            o && (e.prototype[i] = function() {
                                var t = this.__chain__;
                                if (s || t) {
                                    var i = e(this.__wrapped__);
                                    return (i.__actions__ = Nn(this.__actions__)).push({
                                        func: r,
                                        args: arguments,
                                        thisArg: e
                                    }),
                                    i.__chain__ = t,
                                    i
                                }
                                return r.apply(e, Dt([this.value()], arguments))
                            }
                            )
                        }
                        )),
                        e
                    }
                    function ac() {}
                    var cc = Vn(qt)
                      , hc = Vn(xt)
                      , uc = Vn(Ut);
                    function lc(e) {
                        return ws(e) ? Bt($s(e)) : function(e) {
                            return function(t) {
                                return br(t, e)
                            }
                        }(e)
                    }
                    var pc = Hn()
                      , dc = Hn(!0);
                    function fc() {
                        return []
                    }
                    function gc() {
                        return !1
                    }
                    var yc = Ln((function(e, t) {
                        return e + t
                    }
                    ), 0)
                      , mc = Jn("ceil")
                      , vc = Ln((function(e, t) {
                        return e / t
                    }
                    ), 1)
                      , wc = Jn("floor");
                    var _c = Ln((function(e, t) {
                        return e * t
                    }
                    ), 1)
                      , bc = Jn("round")
                      , Ic = Ln((function(e, t) {
                        return e - t
                    }
                    ), 0);
                    return Mi.after = function(e, t) {
                        if ("function" != typeof t)
                            throw new xe(r);
                        return e = da(e),
                        function() {
                            if (--e < 1)
                                return t.apply(this, arguments)
                        }
                    }
                    ,
                    Mi.ary = Ro,
                    Mi.assign = va,
                    Mi.assignIn = wa,
                    Mi.assignInWith = _a,
                    Mi.assignWith = ba,
                    Mi.at = Ia,
                    Mi.before = Oo,
                    Mi.bind = No,
                    Mi.bindAll = Za,
                    Mi.bindKey = xo,
                    Mi.castArray = function() {
                        if (!arguments.length)
                            return [];
                        var e = arguments[0];
                        return Ko(e) ? e : [e]
                    }
                    ,
                    Mi.chain = uo,
                    Mi.chunk = function(e, t, r) {
                        t = (r ? vs(e, t, r) : t === i) ? 1 : yi(da(t), 0);
                        var n = null == e ? 0 : e.length;
                        if (!n || t < 1)
                            return [];
                        for (var s = 0, o = 0, a = se(ft(n / t)); s < n; )
                            a[o++] = tn(e, s, s += t);
                        return a
                    }
                    ,
                    Mi.compact = function(e) {
                        for (var t = -1, i = null == e ? 0 : e.length, r = 0, n = []; ++t < i; ) {
                            var s = e[t];
                            s && (n[r++] = s)
                        }
                        return n
                    }
                    ,
                    Mi.concat = function() {
                        var e = arguments.length;
                        if (!e)
                            return [];
                        for (var t = se(e - 1), i = arguments[0], r = e; r--; )
                            t[r - 1] = arguments[r];
                        return Dt(Ko(i) ? Nn(i) : [i], gr(t, 1))
                    }
                    ,
                    Mi.cond = function(e) {
                        var t = null == e ? 0 : e.length
                          , i = as();
                        return e = t ? qt(e, (function(e) {
                            if ("function" != typeof e[1])
                                throw new xe(r);
                            return [i(e[0]), e[1]]
                        }
                        )) : [],
                        Gr((function(i) {
                            for (var r = -1; ++r < t; ) {
                                var n = e[r];
                                if (St(n[0], this, i))
                                    return St(n[1], this, i)
                            }
                        }
                        ))
                    }
                    ,
                    Mi.conforms = function(e) {
                        return function(e) {
                            var t = Ca(e);
                            return function(i) {
                                return ar(i, e, t)
                            }
                        }(or(e, 1))
                    }
                    ,
                    Mi.constant = Xa,
                    Mi.countBy = fo,
                    Mi.create = function(e, t) {
                        var i = zi(e);
                        return null == t ? i : ir(i, t)
                    }
                    ,
                    Mi.curry = function e(t, r, n) {
                        var s = Qn(t, 8, i, i, i, i, i, r = n ? i : r);
                        return s.placeholder = e.placeholder,
                        s
                    }
                    ,
                    Mi.curryRight = function e(t, r, n) {
                        var s = Qn(t, o, i, i, i, i, i, r = n ? i : r);
                        return s.placeholder = e.placeholder,
                        s
                    }
                    ,
                    Mi.debounce = Co,
                    Mi.defaults = Ea,
                    Mi.defaultsDeep = Pa,
                    Mi.defer = Ao,
                    Mi.delay = To,
                    Mi.difference = Ms,
                    Mi.differenceBy = zs,
                    Mi.differenceWith = ks,
                    Mi.drop = function(e, t, r) {
                        var n = null == e ? 0 : e.length;
                        return n ? tn(e, (t = r || t === i ? 1 : da(t)) < 0 ? 0 : t, n) : []
                    }
                    ,
                    Mi.dropRight = function(e, t, r) {
                        var n = null == e ? 0 : e.length;
                        return n ? tn(e, 0, (t = n - (t = r || t === i ? 1 : da(t))) < 0 ? 0 : t) : []
                    }
                    ,
                    Mi.dropRightWhile = function(e, t) {
                        return e && e.length ? pn(e, as(t, 3), !0, !0) : []
                    }
                    ,
                    Mi.dropWhile = function(e, t) {
                        return e && e.length ? pn(e, as(t, 3), !0) : []
                    }
                    ,
                    Mi.fill = function(e, t, r, n) {
                        var s = null == e ? 0 : e.length;
                        return s ? (r && "number" != typeof r && vs(e, t, r) && (r = 0,
                        n = s),
                        function(e, t, r, n) {
                            var s = e.length;
                            for ((r = da(r)) < 0 && (r = -r > s ? 0 : s + r),
                            (n = n === i || n > s ? s : da(n)) < 0 && (n += s),
                            n = r > n ? 0 : fa(n); r < n; )
                                e[r++] = t;
                            return e
                        }(e, t, r, n)) : []
                    }
                    ,
                    Mi.filter = function(e, t) {
                        return (Ko(e) ? Ct : fr)(e, as(t, 3))
                    }
                    ,
                    Mi.flatMap = function(e, t) {
                        return gr(Io(e, t), 1)
                    }
                    ,
                    Mi.flatMapDeep = function(e, t) {
                        return gr(Io(e, t), l)
                    }
                    ,
                    Mi.flatMapDepth = function(e, t, r) {
                        return r = r === i ? 1 : da(r),
                        gr(Io(e, t), r)
                    }
                    ,
                    Mi.flatten = Ks,
                    Mi.flattenDeep = function(e) {
                        return (null == e ? 0 : e.length) ? gr(e, l) : []
                    }
                    ,
                    Mi.flattenDepth = function(e, t) {
                        return (null == e ? 0 : e.length) ? gr(e, t = t === i ? 1 : da(t)) : []
                    }
                    ,
                    Mi.flip = function(e) {
                        return Qn(e, 512)
                    }
                    ,
                    Mi.flow = ec,
                    Mi.flowRight = tc,
                    Mi.fromPairs = function(e) {
                        for (var t = -1, i = null == e ? 0 : e.length, r = {}; ++t < i; ) {
                            var n = e[t];
                            r[n[0]] = n[1]
                        }
                        return r
                    }
                    ,
                    Mi.functions = function(e) {
                        return null == e ? [] : _r(e, Ca(e))
                    }
                    ,
                    Mi.functionsIn = function(e) {
                        return null == e ? [] : _r(e, Aa(e))
                    }
                    ,
                    Mi.groupBy = wo,
                    Mi.initial = function(e) {
                        return (null == e ? 0 : e.length) ? tn(e, 0, -1) : []
                    }
                    ,
                    Mi.intersection = Bs,
                    Mi.intersectionBy = Fs,
                    Mi.intersectionWith = Js,
                    Mi.invert = Oa,
                    Mi.invertBy = Na,
                    Mi.invokeMap = _o,
                    Mi.iteratee = rc,
                    Mi.keyBy = bo,
                    Mi.keys = Ca,
                    Mi.keysIn = Aa,
                    Mi.map = Io,
                    Mi.mapKeys = function(e, t) {
                        var i = {};
                        return t = as(t, 3),
                        vr(e, (function(e, r, n) {
                            rr(i, t(e, r, n), e)
                        }
                        )),
                        i
                    }
                    ,
                    Mi.mapValues = function(e, t) {
                        var i = {};
                        return t = as(t, 3),
                        vr(e, (function(e, r, n) {
                            rr(i, r, t(e, r, n))
                        }
                        )),
                        i
                    }
                    ,
                    Mi.matches = function(e) {
                        return Mr(or(e, 1))
                    }
                    ,
                    Mi.matchesProperty = function(e, t) {
                        return zr(e, or(t, 1))
                    }
                    ,
                    Mi.memoize = qo,
                    Mi.merge = Ta,
                    Mi.mergeWith = qa,
                    Mi.method = nc,
                    Mi.methodOf = sc,
                    Mi.mixin = oc,
                    Mi.negate = Do,
                    Mi.nthArg = function(e) {
                        return e = da(e),
                        Gr((function(t) {
                            return Lr(t, e)
                        }
                        ))
                    }
                    ,
                    Mi.omit = Da,
                    Mi.omitBy = function(e, t) {
                        return ja(e, Do(as(t)))
                    }
                    ,
                    Mi.once = function(e) {
                        return Oo(2, e)
                    }
                    ,
                    Mi.orderBy = function(e, t, r, n) {
                        return null == e ? [] : (Ko(t) || (t = null == t ? [] : [t]),
                        Ko(r = n ? i : r) || (r = null == r ? [] : [r]),
                        Vr(e, t, r))
                    }
                    ,
                    Mi.over = cc,
                    Mi.overArgs = $o,
                    Mi.overEvery = hc,
                    Mi.overSome = uc,
                    Mi.partial = jo,
                    Mi.partialRight = Uo,
                    Mi.partition = Eo,
                    Mi.pick = $a,
                    Mi.pickBy = ja,
                    Mi.property = lc,
                    Mi.propertyOf = function(e) {
                        return function(t) {
                            return null == e ? i : br(e, t)
                        }
                    }
                    ,
                    Mi.pull = Ws,
                    Mi.pullAll = Qs,
                    Mi.pullAllBy = function(e, t, i) {
                        return e && e.length && t && t.length ? Hr(e, t, as(i, 2)) : e
                    }
                    ,
                    Mi.pullAllWith = function(e, t, r) {
                        return e && e.length && t && t.length ? Hr(e, t, i, r) : e
                    }
                    ,
                    Mi.pullAt = Ys,
                    Mi.range = pc,
                    Mi.rangeRight = dc,
                    Mi.rearg = Mo,
                    Mi.reject = function(e, t) {
                        return (Ko(e) ? Ct : fr)(e, Do(as(t, 3)))
                    }
                    ,
                    Mi.remove = function(e, t) {
                        var i = [];
                        if (!e || !e.length)
                            return i;
                        var r = -1
                          , n = []
                          , s = e.length;
                        for (t = as(t, 3); ++r < s; ) {
                            var o = e[r];
                            t(o, r, e) && (i.push(o),
                            n.push(r))
                        }
                        return Br(e, n),
                        i
                    }
                    ,
                    Mi.rest = function(e, t) {
                        if ("function" != typeof e)
                            throw new xe(r);
                        return Gr(e, t = t === i ? t : da(t))
                    }
                    ,
                    Mi.reverse = Zs,
                    Mi.sampleSize = function(e, t, r) {
                        return t = (r ? vs(e, t, r) : t === i) ? 1 : da(t),
                        (Ko(e) ? Qi : Qr)(e, t)
                    }
                    ,
                    Mi.set = function(e, t, i) {
                        return null == e ? e : Yr(e, t, i)
                    }
                    ,
                    Mi.setWith = function(e, t, r, n) {
                        return n = "function" == typeof n ? n : i,
                        null == e ? e : Yr(e, t, r, n)
                    }
                    ,
                    Mi.shuffle = function(e) {
                        return (Ko(e) ? Yi : en)(e)
                    }
                    ,
                    Mi.slice = function(e, t, r) {
                        var n = null == e ? 0 : e.length;
                        return n ? (r && "number" != typeof r && vs(e, t, r) ? (t = 0,
                        r = n) : (t = null == t ? 0 : da(t),
                        r = r === i ? n : da(r)),
                        tn(e, t, r)) : []
                    }
                    ,
                    Mi.sortBy = Po,
                    Mi.sortedUniq = function(e) {
                        return e && e.length ? on(e) : []
                    }
                    ,
                    Mi.sortedUniqBy = function(e, t) {
                        return e && e.length ? on(e, as(t, 2)) : []
                    }
                    ,
                    Mi.split = function(e, t, r) {
                        return r && "number" != typeof r && vs(e, t, r) && (t = r = i),
                        (r = r === i ? f : r >>> 0) ? (e = ma(e)) && ("string" == typeof t || null != t && !na(t)) && (!(t = cn(t)) && si(e)) ? _n(li(e), 0, r) : e.split(t, r) : []
                    }
                    ,
                    Mi.spread = function(e, t) {
                        if ("function" != typeof e)
                            throw new xe(r);
                        return t = null == t ? 0 : yi(da(t), 0),
                        Gr((function(i) {
                            var r = i[t]
                              , n = _n(i, 0, t);
                            return r && Dt(n, r),
                            St(e, this, n)
                        }
                        ))
                    }
                    ,
                    Mi.tail = function(e) {
                        var t = null == e ? 0 : e.length;
                        return t ? tn(e, 1, t) : []
                    }
                    ,
                    Mi.take = function(e, t, r) {
                        return e && e.length ? tn(e, 0, (t = r || t === i ? 1 : da(t)) < 0 ? 0 : t) : []
                    }
                    ,
                    Mi.takeRight = function(e, t, r) {
                        var n = null == e ? 0 : e.length;
                        return n ? tn(e, (t = n - (t = r || t === i ? 1 : da(t))) < 0 ? 0 : t, n) : []
                    }
                    ,
                    Mi.takeRightWhile = function(e, t) {
                        return e && e.length ? pn(e, as(t, 3), !1, !0) : []
                    }
                    ,
                    Mi.takeWhile = function(e, t) {
                        return e && e.length ? pn(e, as(t, 3)) : []
                    }
                    ,
                    Mi.tap = function(e, t) {
                        return t(e),
                        e
                    }
                    ,
                    Mi.throttle = function(e, t, i) {
                        var n = !0
                          , s = !0;
                        if ("function" != typeof e)
                            throw new xe(r);
                        return Xo(i) && (n = "leading"in i ? !!i.leading : n,
                        s = "trailing"in i ? !!i.trailing : s),
                        Co(e, t, {
                            leading: n,
                            maxWait: t,
                            trailing: s
                        })
                    }
                    ,
                    Mi.thru = lo,
                    Mi.toArray = la,
                    Mi.toPairs = Ua,
                    Mi.toPairsIn = Ma,
                    Mi.toPath = function(e) {
                        return Ko(e) ? qt(e, $s) : aa(e) ? [e] : Nn(Ds(ma(e)))
                    }
                    ,
                    Mi.toPlainObject = ya,
                    Mi.transform = function(e, t, i) {
                        var r = Ko(e)
                          , n = r || Jo(e) || ca(e);
                        if (t = as(t, 4),
                        null == i) {
                            var s = e && e.constructor;
                            i = n ? r ? new s : [] : Xo(e) && Qo(s) ? zi(Fe(e)) : {}
                        }
                        return (n ? Ot : vr)(e, (function(e, r, n) {
                            return t(i, e, r, n)
                        }
                        )),
                        i
                    }
                    ,
                    Mi.unary = function(e) {
                        return Ro(e, 1)
                    }
                    ,
                    Mi.union = Xs,
                    Mi.unionBy = eo,
                    Mi.unionWith = to,
                    Mi.uniq = function(e) {
                        return e && e.length ? hn(e) : []
                    }
                    ,
                    Mi.uniqBy = function(e, t) {
                        return e && e.length ? hn(e, as(t, 2)) : []
                    }
                    ,
                    Mi.uniqWith = function(e, t) {
                        return t = "function" == typeof t ? t : i,
                        e && e.length ? hn(e, i, t) : []
                    }
                    ,
                    Mi.unset = function(e, t) {
                        return null == e || un(e, t)
                    }
                    ,
                    Mi.unzip = io,
                    Mi.unzipWith = ro,
                    Mi.update = function(e, t, i) {
                        return null == e ? e : ln(e, t, mn(i))
                    }
                    ,
                    Mi.updateWith = function(e, t, r, n) {
                        return n = "function" == typeof n ? n : i,
                        null == e ? e : ln(e, t, mn(r), n)
                    }
                    ,
                    Mi.values = za,
                    Mi.valuesIn = function(e) {
                        return null == e ? [] : Zt(e, Aa(e))
                    }
                    ,
                    Mi.without = no,
                    Mi.words = Qa,
                    Mi.wrap = function(e, t) {
                        return jo(mn(t), e)
                    }
                    ,
                    Mi.xor = so,
                    Mi.xorBy = oo,
                    Mi.xorWith = ao,
                    Mi.zip = co,
                    Mi.zipObject = function(e, t) {
                        return gn(e || [], t || [], Xi)
                    }
                    ,
                    Mi.zipObjectDeep = function(e, t) {
                        return gn(e || [], t || [], Yr)
                    }
                    ,
                    Mi.zipWith = ho,
                    Mi.entries = Ua,
                    Mi.entriesIn = Ma,
                    Mi.extend = wa,
                    Mi.extendWith = _a,
                    oc(Mi, Mi),
                    Mi.add = yc,
                    Mi.attempt = Ya,
                    Mi.camelCase = ka,
                    Mi.capitalize = La,
                    Mi.ceil = mc,
                    Mi.clamp = function(e, t, r) {
                        return r === i && (r = t,
                        t = i),
                        r !== i && (r = (r = ga(r)) === r ? r : 0),
                        t !== i && (t = (t = ga(t)) === t ? t : 0),
                        sr(ga(e), t, r)
                    }
                    ,
                    Mi.clone = function(e) {
                        return or(e, 4)
                    }
                    ,
                    Mi.cloneDeep = function(e) {
                        return or(e, 5)
                    }
                    ,
                    Mi.cloneDeepWith = function(e, t) {
                        return or(e, 5, t = "function" == typeof t ? t : i)
                    }
                    ,
                    Mi.cloneWith = function(e, t) {
                        return or(e, 4, t = "function" == typeof t ? t : i)
                    }
                    ,
                    Mi.conformsTo = function(e, t) {
                        return null == t || ar(e, t, Ca(t))
                    }
                    ,
                    Mi.deburr = Va,
                    Mi.defaultTo = function(e, t) {
                        return null == e || e !== e ? t : e
                    }
                    ,
                    Mi.divide = vc,
                    Mi.endsWith = function(e, t, r) {
                        e = ma(e),
                        t = cn(t);
                        var n = e.length
                          , s = r = r === i ? n : sr(da(r), 0, n);
                        return (r -= t.length) >= 0 && e.slice(r, s) == t
                    }
                    ,
                    Mi.eq = zo,
                    Mi.escape = function(e) {
                        return (e = ma(e)) && W.test(e) ? e.replace(J, ri) : e
                    }
                    ,
                    Mi.escapeRegExp = function(e) {
                        return (e = ma(e)) && re.test(e) ? e.replace(ie, "\\$&") : e
                    }
                    ,
                    Mi.every = function(e, t, r) {
                        var n = Ko(e) ? xt : pr;
                        return r && vs(e, t, r) && (t = i),
                        n(e, as(t, 3))
                    }
                    ,
                    Mi.find = go,
                    Mi.findIndex = Ls,
                    Mi.findKey = function(e, t) {
                        return zt(e, as(t, 3), vr)
                    }
                    ,
                    Mi.findLast = yo,
                    Mi.findLastIndex = Vs,
                    Mi.findLastKey = function(e, t) {
                        return zt(e, as(t, 3), wr)
                    }
                    ,
                    Mi.floor = wc,
                    Mi.forEach = mo,
                    Mi.forEachRight = vo,
                    Mi.forIn = function(e, t) {
                        return null == e ? e : yr(e, as(t, 3), Aa)
                    }
                    ,
                    Mi.forInRight = function(e, t) {
                        return null == e ? e : mr(e, as(t, 3), Aa)
                    }
                    ,
                    Mi.forOwn = function(e, t) {
                        return e && vr(e, as(t, 3))
                    }
                    ,
                    Mi.forOwnRight = function(e, t) {
                        return e && wr(e, as(t, 3))
                    }
                    ,
                    Mi.get = Sa,
                    Mi.gt = ko,
                    Mi.gte = Lo,
                    Mi.has = function(e, t) {
                        return null != e && fs(e, t, Sr)
                    }
                    ,
                    Mi.hasIn = Ra,
                    Mi.head = Hs,
                    Mi.identity = ic,
                    Mi.includes = function(e, t, i, r) {
                        e = Bo(e) ? e : za(e),
                        i = i && !r ? da(i) : 0;
                        var n = e.length;
                        return i < 0 && (i = yi(n + i, 0)),
                        oa(e) ? i <= n && e.indexOf(t, i) > -1 : !!n && Lt(e, t, i) > -1
                    }
                    ,
                    Mi.indexOf = function(e, t, i) {
                        var r = null == e ? 0 : e.length;
                        if (!r)
                            return -1;
                        var n = null == i ? 0 : da(i);
                        return n < 0 && (n = yi(r + n, 0)),
                        Lt(e, t, n)
                    }
                    ,
                    Mi.inRange = function(e, t, r) {
                        return t = pa(t),
                        r === i ? (r = t,
                        t = 0) : r = pa(r),
                        function(e, t, i) {
                            return e >= mi(t, i) && e < yi(t, i)
                        }(e = ga(e), t, r)
                    }
                    ,
                    Mi.invoke = xa,
                    Mi.isArguments = Vo,
                    Mi.isArray = Ko,
                    Mi.isArrayBuffer = Ho,
                    Mi.isArrayLike = Bo,
                    Mi.isArrayLikeObject = Fo,
                    Mi.isBoolean = function(e) {
                        return !0 === e || !1 === e || ea(e) && Er(e) == v
                    }
                    ,
                    Mi.isBuffer = Jo,
                    Mi.isDate = Go,
                    Mi.isElement = function(e) {
                        return ea(e) && 1 === e.nodeType && !ra(e)
                    }
                    ,
                    Mi.isEmpty = function(e) {
                        if (null == e)
                            return !0;
                        if (Bo(e) && (Ko(e) || "string" == typeof e || "function" == typeof e.splice || Jo(e) || ca(e) || Vo(e)))
                            return !e.length;
                        var t = ds(e);
                        if (t == E || t == N)
                            return !e.size;
                        if (Is(e))
                            return !Dr(e).length;
                        for (var i in e)
                            if ($e.call(e, i))
                                return !1;
                        return !0
                    }
                    ,
                    Mi.isEqual = function(e, t) {
                        return Cr(e, t)
                    }
                    ,
                    Mi.isEqualWith = function(e, t, r) {
                        var n = (r = "function" == typeof r ? r : i) ? r(e, t) : i;
                        return n === i ? Cr(e, t, i, r) : !!n
                    }
                    ,
                    Mi.isError = Wo,
                    Mi.isFinite = function(e) {
                        return "number" == typeof e && Mt(e)
                    }
                    ,
                    Mi.isFunction = Qo,
                    Mi.isInteger = Yo,
                    Mi.isLength = Zo,
                    Mi.isMap = ta,
                    Mi.isMatch = function(e, t) {
                        return e === t || Ar(e, t, hs(t))
                    }
                    ,
                    Mi.isMatchWith = function(e, t, r) {
                        return r = "function" == typeof r ? r : i,
                        Ar(e, t, hs(t), r)
                    }
                    ,
                    Mi.isNaN = function(e) {
                        return ia(e) && e != +e
                    }
                    ,
                    Mi.isNative = function(e) {
                        if (bs(e))
                            throw new Ee("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
                        return Tr(e)
                    }
                    ,
                    Mi.isNil = function(e) {
                        return null == e
                    }
                    ,
                    Mi.isNull = function(e) {
                        return null === e
                    }
                    ,
                    Mi.isNumber = ia,
                    Mi.isObject = Xo,
                    Mi.isObjectLike = ea,
                    Mi.isPlainObject = ra,
                    Mi.isRegExp = na,
                    Mi.isSafeInteger = function(e) {
                        return Yo(e) && e >= -p && e <= p
                    }
                    ,
                    Mi.isSet = sa,
                    Mi.isString = oa,
                    Mi.isSymbol = aa,
                    Mi.isTypedArray = ca,
                    Mi.isUndefined = function(e) {
                        return e === i
                    }
                    ,
                    Mi.isWeakMap = function(e) {
                        return ea(e) && ds(e) == A
                    }
                    ,
                    Mi.isWeakSet = function(e) {
                        return ea(e) && "[object WeakSet]" == Er(e)
                    }
                    ,
                    Mi.join = function(e, t) {
                        return null == e ? "" : Ft.call(e, t)
                    }
                    ,
                    Mi.kebabCase = Ka,
                    Mi.last = Gs,
                    Mi.lastIndexOf = function(e, t, r) {
                        var n = null == e ? 0 : e.length;
                        if (!n)
                            return -1;
                        var s = n;
                        return r !== i && (s = (s = da(r)) < 0 ? yi(n + s, 0) : mi(s, n - 1)),
                        t === t ? function(e, t, i) {
                            for (var r = i + 1; r--; )
                                if (e[r] === t)
                                    return r;
                            return r
                        }(e, t, s) : kt(e, Kt, s, !0)
                    }
                    ,
                    Mi.lowerCase = Ha,
                    Mi.lowerFirst = Ba,
                    Mi.lt = ha,
                    Mi.lte = ua,
                    Mi.max = function(e) {
                        return e && e.length ? dr(e, ic, Pr) : i
                    }
                    ,
                    Mi.maxBy = function(e, t) {
                        return e && e.length ? dr(e, as(t, 2), Pr) : i
                    }
                    ,
                    Mi.mean = function(e) {
                        return Ht(e, ic)
                    }
                    ,
                    Mi.meanBy = function(e, t) {
                        return Ht(e, as(t, 2))
                    }
                    ,
                    Mi.min = function(e) {
                        return e && e.length ? dr(e, ic, jr) : i
                    }
                    ,
                    Mi.minBy = function(e, t) {
                        return e && e.length ? dr(e, as(t, 2), jr) : i
                    }
                    ,
                    Mi.stubArray = fc,
                    Mi.stubFalse = gc,
                    Mi.stubObject = function() {
                        return {}
                    }
                    ,
                    Mi.stubString = function() {
                        return ""
                    }
                    ,
                    Mi.stubTrue = function() {
                        return !0
                    }
                    ,
                    Mi.multiply = _c,
                    Mi.nth = function(e, t) {
                        return e && e.length ? Lr(e, da(t)) : i
                    }
                    ,
                    Mi.noConflict = function() {
                        return dt._ === this && (dt._ = ke),
                        this
                    }
                    ,
                    Mi.noop = ac,
                    Mi.now = So,
                    Mi.pad = function(e, t, i) {
                        e = ma(e);
                        var r = (t = da(t)) ? ui(e) : 0;
                        if (!t || r >= t)
                            return e;
                        var n = (t - r) / 2;
                        return Kn(gt(n), i) + e + Kn(ft(n), i)
                    }
                    ,
                    Mi.padEnd = function(e, t, i) {
                        e = ma(e);
                        var r = (t = da(t)) ? ui(e) : 0;
                        return t && r < t ? e + Kn(t - r, i) : e
                    }
                    ,
                    Mi.padStart = function(e, t, i) {
                        e = ma(e);
                        var r = (t = da(t)) ? ui(e) : 0;
                        return t && r < t ? Kn(t - r, i) + e : e
                    }
                    ,
                    Mi.parseInt = function(e, t, i) {
                        return i || null == t ? t = 0 : t && (t = +t),
                        wi(ma(e).replace(ne, ""), t || 0)
                    }
                    ,
                    Mi.random = function(e, t, r) {
                        if (r && "boolean" != typeof r && vs(e, t, r) && (t = r = i),
                        r === i && ("boolean" == typeof t ? (r = t,
                        t = i) : "boolean" == typeof e && (r = e,
                        e = i)),
                        e === i && t === i ? (e = 0,
                        t = 1) : (e = pa(e),
                        t === i ? (t = e,
                        e = 0) : t = pa(t)),
                        e > t) {
                            var n = e;
                            e = t,
                            t = n
                        }
                        if (r || e % 1 || t % 1) {
                            var s = _i();
                            return mi(e + s * (t - e + ht("1e-" + ((s + "").length - 1))), t)
                        }
                        return Fr(e, t)
                    }
                    ,
                    Mi.reduce = function(e, t, i) {
                        var r = Ko(e) ? $t : Jt
                          , n = arguments.length < 3;
                        return r(e, as(t, 4), i, n, ur)
                    }
                    ,
                    Mi.reduceRight = function(e, t, i) {
                        var r = Ko(e) ? jt : Jt
                          , n = arguments.length < 3;
                        return r(e, as(t, 4), i, n, lr)
                    }
                    ,
                    Mi.repeat = function(e, t, r) {
                        return t = (r ? vs(e, t, r) : t === i) ? 1 : da(t),
                        Jr(ma(e), t)
                    }
                    ,
                    Mi.replace = function() {
                        var e = arguments
                          , t = ma(e[0]);
                        return e.length < 3 ? t : t.replace(e[1], e[2])
                    }
                    ,
                    Mi.result = function(e, t, r) {
                        var n = -1
                          , s = (t = vn(t, e)).length;
                        for (s || (s = 1,
                        e = i); ++n < s; ) {
                            var o = null == e ? i : e[$s(t[n])];
                            o === i && (n = s,
                            o = r),
                            e = Qo(o) ? o.call(e) : o
                        }
                        return e
                    }
                    ,
                    Mi.round = bc,
                    Mi.runInContext = e,
                    Mi.sample = function(e) {
                        return (Ko(e) ? Wi : Wr)(e)
                    }
                    ,
                    Mi.size = function(e) {
                        if (null == e)
                            return 0;
                        if (Bo(e))
                            return oa(e) ? ui(e) : e.length;
                        var t = ds(e);
                        return t == E || t == N ? e.size : Dr(e).length
                    }
                    ,
                    Mi.snakeCase = Fa,
                    Mi.some = function(e, t, r) {
                        var n = Ko(e) ? Ut : rn;
                        return r && vs(e, t, r) && (t = i),
                        n(e, as(t, 3))
                    }
                    ,
                    Mi.sortedIndex = function(e, t) {
                        return nn(e, t)
                    }
                    ,
                    Mi.sortedIndexBy = function(e, t, i) {
                        return sn(e, t, as(i, 2))
                    }
                    ,
                    Mi.sortedIndexOf = function(e, t) {
                        var i = null == e ? 0 : e.length;
                        if (i) {
                            var r = nn(e, t);
                            if (r < i && zo(e[r], t))
                                return r
                        }
                        return -1
                    }
                    ,
                    Mi.sortedLastIndex = function(e, t) {
                        return nn(e, t, !0)
                    }
                    ,
                    Mi.sortedLastIndexBy = function(e, t, i) {
                        return sn(e, t, as(i, 2), !0)
                    }
                    ,
                    Mi.sortedLastIndexOf = function(e, t) {
                        if (null == e ? 0 : e.length) {
                            var i = nn(e, t, !0) - 1;
                            if (zo(e[i], t))
                                return i
                        }
                        return -1
                    }
                    ,
                    Mi.startCase = Ja,
                    Mi.startsWith = function(e, t, i) {
                        return e = ma(e),
                        i = null == i ? 0 : sr(da(i), 0, e.length),
                        t = cn(t),
                        e.slice(i, i + t.length) == t
                    }
                    ,
                    Mi.subtract = Ic,
                    Mi.sum = function(e) {
                        return e && e.length ? Gt(e, ic) : 0
                    }
                    ,
                    Mi.sumBy = function(e, t) {
                        return e && e.length ? Gt(e, as(t, 2)) : 0
                    }
                    ,
                    Mi.template = function(e, t, r) {
                        var n = Mi.templateSettings;
                        r && vs(e, t, r) && (t = i),
                        e = ma(e),
                        t = _a({}, t, n, Yn);
                        var s, o, a = _a({}, t.imports, n.imports, Yn), c = Ca(a), h = Zt(a, c), u = 0, l = t.interpolate || _e, p = "__p += '", d = Oe((t.escape || _e).source + "|" + l.source + "|" + (l === Z ? pe : _e).source + "|" + (t.evaluate || _e).source + "|$", "g"), f = "//# sourceURL=" + ($e.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++st + "]") + "\n";
                        e.replace(d, (function(t, i, r, n, a, c) {
                            return r || (r = n),
                            p += e.slice(u, c).replace(be, ni),
                            i && (s = !0,
                            p += "' +\n__e(" + i + ") +\n'"),
                            a && (o = !0,
                            p += "';\n" + a + ";\n__p += '"),
                            r && (p += "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"),
                            u = c + t.length,
                            t
                        }
                        )),
                        p += "';\n";
                        var g = $e.call(t, "variable") && t.variable;
                        if (g) {
                            if (ue.test(g))
                                throw new Ee("Invalid `variable` option passed into `_.template`")
                        } else
                            p = "with (obj) {\n" + p + "\n}\n";
                        p = (o ? p.replace(K, "") : p).replace(H, "$1").replace(B, "$1;"),
                        p = "function(" + (g || "obj") + ") {\n" + (g ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (s ? ", __e = _.escape" : "") + (o ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + p + "return __p\n}";
                        var y = Ya((function() {
                            return Pe(c, f + "return " + p).apply(i, h)
                        }
                        ));
                        if (y.source = p,
                        Wo(y))
                            throw y;
                        return y
                    }
                    ,
                    Mi.times = function(e, t) {
                        if ((e = da(e)) < 1 || e > p)
                            return [];
                        var i = f
                          , r = mi(e, f);
                        t = as(t),
                        e -= f;
                        for (var n = Wt(r, t); ++i < e; )
                            t(i);
                        return n
                    }
                    ,
                    Mi.toFinite = pa,
                    Mi.toInteger = da,
                    Mi.toLength = fa,
                    Mi.toLower = function(e) {
                        return ma(e).toLowerCase()
                    }
                    ,
                    Mi.toNumber = ga,
                    Mi.toSafeInteger = function(e) {
                        return e ? sr(da(e), -p, p) : 0 === e ? e : 0
                    }
                    ,
                    Mi.toString = ma,
                    Mi.toUpper = function(e) {
                        return ma(e).toUpperCase()
                    }
                    ,
                    Mi.trim = function(e, t, r) {
                        if ((e = ma(e)) && (r || t === i))
                            return Qt(e);
                        if (!e || !(t = cn(t)))
                            return e;
                        var n = li(e)
                          , s = li(t);
                        return _n(n, ei(n, s), ti(n, s) + 1).join("")
                    }
                    ,
                    Mi.trimEnd = function(e, t, r) {
                        if ((e = ma(e)) && (r || t === i))
                            return e.slice(0, pi(e) + 1);
                        if (!e || !(t = cn(t)))
                            return e;
                        var n = li(e);
                        return _n(n, 0, ti(n, li(t)) + 1).join("")
                    }
                    ,
                    Mi.trimStart = function(e, t, r) {
                        if ((e = ma(e)) && (r || t === i))
                            return e.replace(ne, "");
                        if (!e || !(t = cn(t)))
                            return e;
                        var n = li(e);
                        return _n(n, ei(n, li(t))).join("")
                    }
                    ,
                    Mi.truncate = function(e, t) {
                        var r = 30
                          , n = "...";
                        if (Xo(t)) {
                            var s = "separator"in t ? t.separator : s;
                            r = "length"in t ? da(t.length) : r,
                            n = "omission"in t ? cn(t.omission) : n
                        }
                        var o = (e = ma(e)).length;
                        if (si(e)) {
                            var a = li(e);
                            o = a.length
                        }
                        if (r >= o)
                            return e;
                        var c = r - ui(n);
                        if (c < 1)
                            return n;
                        var h = a ? _n(a, 0, c).join("") : e.slice(0, c);
                        if (s === i)
                            return h + n;
                        if (a && (c += h.length - c),
                        na(s)) {
                            if (e.slice(c).search(s)) {
                                var u, l = h;
                                for (s.global || (s = Oe(s.source, ma(de.exec(s)) + "g")),
                                s.lastIndex = 0; u = s.exec(l); )
                                    var p = u.index;
                                h = h.slice(0, p === i ? c : p)
                            }
                        } else if (e.indexOf(cn(s), c) != c) {
                            var d = h.lastIndexOf(s);
                            d > -1 && (h = h.slice(0, d))
                        }
                        return h + n
                    }
                    ,
                    Mi.unescape = function(e) {
                        return (e = ma(e)) && G.test(e) ? e.replace(F, di) : e
                    }
                    ,
                    Mi.uniqueId = function(e) {
                        var t = ++je;
                        return ma(e) + t
                    }
                    ,
                    Mi.upperCase = Ga,
                    Mi.upperFirst = Wa,
                    Mi.each = mo,
                    Mi.eachRight = vo,
                    Mi.first = Hs,
                    oc(Mi, function() {
                        var e = {};
                        return vr(Mi, (function(t, i) {
                            $e.call(Mi.prototype, i) || (e[i] = t)
                        }
                        )),
                        e
                    }(), {
                        chain: !1
                    }),
                    Mi.VERSION = "4.17.21",
                    Ot(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], (function(e) {
                        Mi[e].placeholder = Mi
                    }
                    )),
                    Ot(["drop", "take"], (function(e, t) {
                        Vi.prototype[e] = function(r) {
                            r = r === i ? 1 : yi(da(r), 0);
                            var n = this.__filtered__ && !t ? new Vi(this) : this.clone();
                            return n.__filtered__ ? n.__takeCount__ = mi(r, n.__takeCount__) : n.__views__.push({
                                size: mi(r, f),
                                type: e + (n.__dir__ < 0 ? "Right" : "")
                            }),
                            n
                        }
                        ,
                        Vi.prototype[e + "Right"] = function(t) {
                            return this.reverse()[e](t).reverse()
                        }
                    }
                    )),
                    Ot(["filter", "map", "takeWhile"], (function(e, t) {
                        var i = t + 1
                          , r = 1 == i || 3 == i;
                        Vi.prototype[e] = function(e) {
                            var t = this.clone();
                            return t.__iteratees__.push({
                                iteratee: as(e, 3),
                                type: i
                            }),
                            t.__filtered__ = t.__filtered__ || r,
                            t
                        }
                    }
                    )),
                    Ot(["head", "last"], (function(e, t) {
                        var i = "take" + (t ? "Right" : "");
                        Vi.prototype[e] = function() {
                            return this[i](1).value()[0]
                        }
                    }
                    )),
                    Ot(["initial", "tail"], (function(e, t) {
                        var i = "drop" + (t ? "" : "Right");
                        Vi.prototype[e] = function() {
                            return this.__filtered__ ? new Vi(this) : this[i](1)
                        }
                    }
                    )),
                    Vi.prototype.compact = function() {
                        return this.filter(ic)
                    }
                    ,
                    Vi.prototype.find = function(e) {
                        return this.filter(e).head()
                    }
                    ,
                    Vi.prototype.findLast = function(e) {
                        return this.reverse().find(e)
                    }
                    ,
                    Vi.prototype.invokeMap = Gr((function(e, t) {
                        return "function" == typeof e ? new Vi(this) : this.map((function(i) {
                            return Nr(i, e, t)
                        }
                        ))
                    }
                    )),
                    Vi.prototype.reject = function(e) {
                        return this.filter(Do(as(e)))
                    }
                    ,
                    Vi.prototype.slice = function(e, t) {
                        e = da(e);
                        var r = this;
                        return r.__filtered__ && (e > 0 || t < 0) ? new Vi(r) : (e < 0 ? r = r.takeRight(-e) : e && (r = r.drop(e)),
                        t !== i && (r = (t = da(t)) < 0 ? r.dropRight(-t) : r.take(t - e)),
                        r)
                    }
                    ,
                    Vi.prototype.takeRightWhile = function(e) {
                        return this.reverse().takeWhile(e).reverse()
                    }
                    ,
                    Vi.prototype.toArray = function() {
                        return this.take(f)
                    }
                    ,
                    vr(Vi.prototype, (function(e, t) {
                        var r = /^(?:filter|find|map|reject)|While$/.test(t)
                          , n = /^(?:head|last)$/.test(t)
                          , s = Mi[n ? "take" + ("last" == t ? "Right" : "") : t]
                          , o = n || /^find/.test(t);
                        s && (Mi.prototype[t] = function() {
                            var t = this.__wrapped__
                              , a = n ? [1] : arguments
                              , c = t instanceof Vi
                              , h = a[0]
                              , u = c || Ko(t)
                              , l = function(e) {
                                var t = s.apply(Mi, Dt([e], a));
                                return n && p ? t[0] : t
                            };
                            u && r && "function" == typeof h && 1 != h.length && (c = u = !1);
                            var p = this.__chain__
                              , d = !!this.__actions__.length
                              , f = o && !p
                              , g = c && !d;
                            if (!o && u) {
                                t = g ? t : new Vi(this);
                                var y = e.apply(t, a);
                                return y.__actions__.push({
                                    func: lo,
                                    args: [l],
                                    thisArg: i
                                }),
                                new Li(y,p)
                            }
                            return f && g ? e.apply(this, a) : (y = this.thru(l),
                            f ? n ? y.value()[0] : y.value() : y)
                        }
                        )
                    }
                    )),
                    Ot(["pop", "push", "shift", "sort", "splice", "unshift"], (function(e) {
                        var t = Ce[e]
                          , i = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru"
                          , r = /^(?:pop|shift)$/.test(e);
                        Mi.prototype[e] = function() {
                            var e = arguments;
                            if (r && !this.__chain__) {
                                var n = this.value();
                                return t.apply(Ko(n) ? n : [], e)
                            }
                            return this[i]((function(i) {
                                return t.apply(Ko(i) ? i : [], e)
                            }
                            ))
                        }
                    }
                    )),
                    vr(Vi.prototype, (function(e, t) {
                        var i = Mi[t];
                        if (i) {
                            var r = i.name + "";
                            $e.call(xi, r) || (xi[r] = []),
                            xi[r].push({
                                name: t,
                                func: i
                            })
                        }
                    }
                    )),
                    xi[zn(i, 2).name] = [{
                        name: "wrapper",
                        func: i
                    }],
                    Vi.prototype.clone = function() {
                        var e = new Vi(this.__wrapped__);
                        return e.__actions__ = Nn(this.__actions__),
                        e.__dir__ = this.__dir__,
                        e.__filtered__ = this.__filtered__,
                        e.__iteratees__ = Nn(this.__iteratees__),
                        e.__takeCount__ = this.__takeCount__,
                        e.__views__ = Nn(this.__views__),
                        e
                    }
                    ,
                    Vi.prototype.reverse = function() {
                        if (this.__filtered__) {
                            var e = new Vi(this);
                            e.__dir__ = -1,
                            e.__filtered__ = !0
                        } else
                            (e = this.clone()).__dir__ *= -1;
                        return e
                    }
                    ,
                    Vi.prototype.value = function() {
                        var e = this.__wrapped__.value()
                          , t = this.__dir__
                          , i = Ko(e)
                          , r = t < 0
                          , n = i ? e.length : 0
                          , s = function(e, t, i) {
                            for (var r = -1, n = i.length; ++r < n; ) {
                                var s = i[r]
                                  , o = s.size;
                                switch (s.type) {
                                case "drop":
                                    e += o;
                                    break;
                                case "dropRight":
                                    t -= o;
                                    break;
                                case "take":
                                    t = mi(t, e + o);
                                    break;
                                case "takeRight":
                                    e = yi(e, t - o)
                                }
                            }
                            return {
                                start: e,
                                end: t
                            }
                        }(0, n, this.__views__)
                          , o = s.start
                          , a = s.end
                          , c = a - o
                          , h = r ? a : o - 1
                          , u = this.__iteratees__
                          , l = u.length
                          , p = 0
                          , d = mi(c, this.__takeCount__);
                        if (!i || !r && n == c && d == c)
                            return dn(e, this.__actions__);
                        var f = [];
                        e: for (; c-- && p < d; ) {
                            for (var g = -1, y = e[h += t]; ++g < l; ) {
                                var m = u[g]
                                  , v = m.iteratee
                                  , w = m.type
                                  , _ = v(y);
                                if (2 == w)
                                    y = _;
                                else if (!_) {
                                    if (1 == w)
                                        continue e;
                                    break e
                                }
                            }
                            f[p++] = y
                        }
                        return f
                    }
                    ,
                    Mi.prototype.at = po,
                    Mi.prototype.chain = function() {
                        return uo(this)
                    }
                    ,
                    Mi.prototype.commit = function() {
                        return new Li(this.value(),this.__chain__)
                    }
                    ,
                    Mi.prototype.next = function() {
                        this.__values__ === i && (this.__values__ = la(this.value()));
                        var e = this.__index__ >= this.__values__.length;
                        return {
                            done: e,
                            value: e ? i : this.__values__[this.__index__++]
                        }
                    }
                    ,
                    Mi.prototype.plant = function(e) {
                        for (var t, r = this; r instanceof ki; ) {
                            var n = Us(r);
                            n.__index__ = 0,
                            n.__values__ = i,
                            t ? s.__wrapped__ = n : t = n;
                            var s = n;
                            r = r.__wrapped__
                        }
                        return s.__wrapped__ = e,
                        t
                    }
                    ,
                    Mi.prototype.reverse = function() {
                        var e = this.__wrapped__;
                        if (e instanceof Vi) {
                            var t = e;
                            return this.__actions__.length && (t = new Vi(this)),
                            (t = t.reverse()).__actions__.push({
                                func: lo,
                                args: [Zs],
                                thisArg: i
                            }),
                            new Li(t,this.__chain__)
                        }
                        return this.thru(Zs)
                    }
                    ,
                    Mi.prototype.toJSON = Mi.prototype.valueOf = Mi.prototype.value = function() {
                        return dn(this.__wrapped__, this.__actions__)
                    }
                    ,
                    Mi.prototype.first = Mi.prototype.head,
                    Ye && (Mi.prototype[Ye] = function() {
                        return this
                    }
                    ),
                    Mi
                }();
                gt ? ((gt.exports = fi)._ = fi,
                ft._ = fi) : dt._ = fi
            }
            ).call(Ss)
        }(Rs, Rs.exports);
        var Os = Object.defineProperty
          , Ns = Object.defineProperties
          , xs = Object.getOwnPropertyDescriptors
          , Cs = Object.getOwnPropertySymbols
          , As = Object.prototype.hasOwnProperty
          , Ts = Object.prototype.propertyIsEnumerable
          , qs = (e,t,i)=>t in e ? Os(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: i
        }) : e[t] = i
          , Ds = (e,t)=>{
            for (var i in t || (t = {}))
                As.call(t, i) && qs(e, i, t[i]);
            if (Cs)
                for (var i of Cs(t))
                    Ts.call(t, i) && qs(e, i, t[i]);
            return e
        }
          , $s = (e,t)=>Ns(e, xs(t));
        function js(e, t, i) {
            var r;
            const n = w(e);
            return (null == (r = t.rpcMap) ? void 0 : r[n.reference]) || `https://rpc.walletconnect.com/v1/?chainId=${n.namespace}:${n.reference}&projectId=${i}`
        }
        function Us(e) {
            return e.includes(":") ? e.split(":")[1] : e
        }
        function Ms(e) {
            return e.map((e=>`${e.split(":")[0]}:${e.split(":")[1]}`))
        }
        function zs(e={}, t={}) {
            const i = ks(e)
              , r = ks(t);
            return Rs.exports.merge(i, r)
        }
        function ks(e) {
            var t, i, r, n;
            const s = {};
            if (!Ae(e))
                return s;
            for (const [o,a] of Object.entries(e)) {
                const e = Pe(o) ? [o] : a.chains
                  , c = a.methods || []
                  , h = a.events || []
                  , u = a.rpcMap || {}
                  , l = Se(o);
                s[l] = $s(Ds(Ds({}, s[l]), a), {
                    chains: he(e, null == (t = s[l]) ? void 0 : t.chains),
                    methods: he(c, null == (i = s[l]) ? void 0 : i.methods),
                    events: he(h, null == (r = s[l]) ? void 0 : r.events),
                    rpcMap: Ds(Ds({}, u), null == (n = s[l]) ? void 0 : n.rpcMap)
                })
            }
            return s
        }
        function Ls(e) {
            return e.includes(":") ? e.split(":")[2] : e
        }
        function Vs(e) {
            const t = {};
            for (const [i,r] of Object.entries(e)) {
                const e = r.methods || []
                  , n = r.events || []
                  , s = r.accounts || []
                  , o = Pe(i) ? [i] : r.chains ? r.chains : Ms(r.accounts);
                t[i] = {
                    chains: o,
                    methods: e,
                    events: n,
                    accounts: s
                }
            }
            return t
        }
        function Ks(e) {
            return "number" == typeof e ? e : e.includes("0x") ? parseInt(e, 16) : (e = e.includes(":") ? e.split(":")[1] : e,
            isNaN(Number(e)) ? e : Number(e))
        }
        const Hs = {}
          , Bs = e=>Hs[e]
          , Fs = (e,t)=>{
            Hs[e] = t
        }
        ;
        class Js {
            constructor(e) {
                this.name = "polkadot",
                this.namespace = e.namespace,
                this.events = Bs("events"),
                this.client = Bs("client"),
                this.chainId = this.getDefaultChain(),
                this.httpProviders = this.createHttpProviders()
            }
            updateNamespace(e) {
                this.namespace = Object.assign(this.namespace, e)
            }
            requestAccounts() {
                return this.getAccounts()
            }
            getDefaultChain() {
                if (this.chainId)
                    return this.chainId;
                if (this.namespace.defaultChain)
                    return this.namespace.defaultChain;
                const e = this.namespace.chains[0];
                if (!e)
                    throw new Error("ChainId not found");
                return e.split(":")[1]
            }
            request(e) {
                return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
            }
            setDefaultChain(e, t) {
                this.httpProviders[e] || this.setHttpProvider(e, t),
                this.chainId = e,
                this.events.emit(Ps, `${this.name}:${e}`)
            }
            getAccounts() {
                const e = this.namespace.accounts;
                return e && e.filter((e=>e.split(":")[1] === this.chainId.toString())).map((e=>e.split(":")[2])) || []
            }
            createHttpProviders() {
                const e = {};
                return this.namespace.chains.forEach((t=>{
                    var i;
                    const r = Us(t);
                    e[r] = this.createHttpProvider(r, null == (i = this.namespace.rpcMap) ? void 0 : i[t])
                }
                )),
                e
            }
            getHttpProvider() {
                const e = `${this.name}:${this.chainId}`
                  , t = this.httpProviders[e];
                if (typeof t > "u")
                    throw new Error(`JSON-RPC provider for ${e} not found`);
                return t
            }
            setHttpProvider(e, t) {
                const i = this.createHttpProvider(e, t);
                i && (this.httpProviders[e] = i)
            }
            createHttpProvider(e, t) {
                const i = t || js(e, this.namespace, this.client.core.projectId);
                if (!i)
                    throw new Error(`No RPC url provided for chainId: ${e}`);
                return new At.r(new bs(i,Bs("disableProviderPing")))
            }
        }
        class Gs {
            constructor(e) {
                this.name = "eip155",
                this.namespace = e.namespace,
                this.events = Bs("events"),
                this.client = Bs("client"),
                this.httpProviders = this.createHttpProviders(),
                this.chainId = parseInt(this.getDefaultChain())
            }
            async request(e) {
                switch (e.request.method) {
                case "eth_requestAccounts":
                case "eth_accounts":
                    return this.getAccounts();
                case "wallet_switchEthereumChain":
                    return await this.handleSwitchChain(e);
                case "eth_chainId":
                    return parseInt(this.getDefaultChain())
                }
                return this.namespace.methods.includes(e.request.method) ? await this.client.request(e) : this.getHttpProvider().request(e.request)
            }
            updateNamespace(e) {
                this.namespace = Object.assign(this.namespace, e)
            }
            setDefaultChain(e, t) {
                this.httpProviders[e] || this.setHttpProvider(parseInt(e), t),
                this.chainId = parseInt(e),
                this.events.emit(Ps, `${this.name}:${e}`)
            }
            requestAccounts() {
                return this.getAccounts()
            }
            getDefaultChain() {
                if (this.chainId)
                    return this.chainId.toString();
                if (this.namespace.defaultChain)
                    return this.namespace.defaultChain;
                const e = this.namespace.chains[0];
                if (!e)
                    throw new Error("ChainId not found");
                return e.split(":")[1]
            }
            createHttpProvider(e, t) {
                const i = t || js(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
                if (!i)
                    throw new Error(`No RPC url provided for chainId: ${e}`);
                return new At.r(new _s(i,Bs("disableProviderPing")))
            }
            setHttpProvider(e, t) {
                const i = this.createHttpProvider(e, t);
                i && (this.httpProviders[e] = i)
            }
            createHttpProviders() {
                const e = {};
                return this.namespace.chains.forEach((t=>{
                    var i;
                    const r = parseInt(Us(t));
                    e[r] = this.createHttpProvider(r, null == (i = this.namespace.rpcMap) ? void 0 : i[t])
                }
                )),
                e
            }
            getAccounts() {
                const e = this.namespace.accounts;
                return e ? [...new Set(e.filter((e=>e.split(":")[1] === this.chainId.toString())).map((e=>e.split(":")[2])))] : []
            }
            getHttpProvider() {
                const e = this.chainId
                  , t = this.httpProviders[e];
                if (typeof t > "u")
                    throw new Error(`JSON-RPC provider for ${e} not found`);
                return t
            }
            async handleSwitchChain(e) {
                var t, i;
                let r = e.request.params ? null == (t = e.request.params[0]) ? void 0 : t.chainId : "0x0";
                r = r.startsWith("0x") ? r : `0x${r}`;
                const n = parseInt(r, 16);
                if (this.isChainApproved(n))
                    this.setDefaultChain(`${n}`);
                else {
                    if (!this.namespace.methods.includes("wallet_switchEthereumChain"))
                        throw new Error(`Failed to switch to chain 'eip155:${n}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`);
                    await this.client.request({
                        topic: e.topic,
                        request: {
                            method: e.request.method,
                            params: [{
                                chainId: r
                            }]
                        },
                        chainId: null == (i = this.namespace.chains) ? void 0 : i[0]
                    }),
                    this.setDefaultChain(`${n}`)
                }
                return null
            }
            isChainApproved(e) {
                return this.namespace.chains.includes(`${this.name}:${e}`)
            }
        }
        class Ws {
            constructor(e) {
                this.name = "solana",
                this.namespace = e.namespace,
                this.events = Bs("events"),
                this.client = Bs("client"),
                this.chainId = this.getDefaultChain(),
                this.httpProviders = this.createHttpProviders()
            }
            updateNamespace(e) {
                this.namespace = Object.assign(this.namespace, e)
            }
            requestAccounts() {
                return this.getAccounts()
            }
            request(e) {
                return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
            }
            setDefaultChain(e, t) {
                this.httpProviders[e] || this.setHttpProvider(e, t),
                this.chainId = e,
                this.events.emit(Ps, `${this.name}:${e}`)
            }
            getDefaultChain() {
                if (this.chainId)
                    return this.chainId;
                if (this.namespace.defaultChain)
                    return this.namespace.defaultChain;
                const e = this.namespace.chains[0];
                if (!e)
                    throw new Error("ChainId not found");
                return e.split(":")[1]
            }
            getAccounts() {
                const e = this.namespace.accounts;
                return e ? [...new Set(e.filter((e=>e.split(":")[1] === this.chainId.toString())).map((e=>e.split(":")[2])))] : []
            }
            createHttpProviders() {
                const e = {};
                return this.namespace.chains.forEach((t=>{
                    var i;
                    const r = Us(t);
                    e[r] = this.createHttpProvider(r, null == (i = this.namespace.rpcMap) ? void 0 : i[t])
                }
                )),
                e
            }
            getHttpProvider() {
                const e = `${this.name}:${this.chainId}`
                  , t = this.httpProviders[e];
                if (typeof t > "u")
                    throw new Error(`JSON-RPC provider for ${e} not found`);
                return t
            }
            setHttpProvider(e, t) {
                const i = this.createHttpProvider(e, t);
                i && (this.httpProviders[e] = i)
            }
            createHttpProvider(e, t) {
                const i = t || js(e, this.namespace, this.client.core.projectId);
                if (!i)
                    throw new Error(`No RPC url provided for chainId: ${e}`);
                return new At.r(new bs(i,Bs("disableProviderPing")))
            }
        }
        class Qs {
            constructor(e) {
                this.name = "cosmos",
                this.namespace = e.namespace,
                this.events = Bs("events"),
                this.client = Bs("client"),
                this.chainId = this.getDefaultChain(),
                this.httpProviders = this.createHttpProviders()
            }
            updateNamespace(e) {
                this.namespace = Object.assign(this.namespace, e)
            }
            requestAccounts() {
                return this.getAccounts()
            }
            getDefaultChain() {
                if (this.chainId)
                    return this.chainId;
                if (this.namespace.defaultChain)
                    return this.namespace.defaultChain;
                const e = this.namespace.chains[0];
                if (!e)
                    throw new Error("ChainId not found");
                return e.split(":")[1]
            }
            request(e) {
                return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
            }
            setDefaultChain(e, t) {
                this.httpProviders[e] || this.setHttpProvider(e, t),
                this.chainId = e,
                this.events.emit(Ps, `${this.name}:${this.chainId}`)
            }
            getAccounts() {
                const e = this.namespace.accounts;
                return e ? [...new Set(e.filter((e=>e.split(":")[1] === this.chainId.toString())).map((e=>e.split(":")[2])))] : []
            }
            createHttpProviders() {
                const e = {};
                return this.namespace.chains.forEach((t=>{
                    var i;
                    const r = Us(t);
                    e[r] = this.createHttpProvider(r, null == (i = this.namespace.rpcMap) ? void 0 : i[t])
                }
                )),
                e
            }
            getHttpProvider() {
                const e = `${this.name}:${this.chainId}`
                  , t = this.httpProviders[e];
                if (typeof t > "u")
                    throw new Error(`JSON-RPC provider for ${e} not found`);
                return t
            }
            setHttpProvider(e, t) {
                const i = this.createHttpProvider(e, t);
                i && (this.httpProviders[e] = i)
            }
            createHttpProvider(e, t) {
                const i = t || js(e, this.namespace, this.client.core.projectId);
                if (!i)
                    throw new Error(`No RPC url provided for chainId: ${e}`);
                return new At.r(new bs(i,Bs("disableProviderPing")))
            }
        }
        class Ys {
            constructor(e) {
                this.name = "cip34",
                this.namespace = e.namespace,
                this.events = Bs("events"),
                this.client = Bs("client"),
                this.chainId = this.getDefaultChain(),
                this.httpProviders = this.createHttpProviders()
            }
            updateNamespace(e) {
                this.namespace = Object.assign(this.namespace, e)
            }
            requestAccounts() {
                return this.getAccounts()
            }
            getDefaultChain() {
                if (this.chainId)
                    return this.chainId;
                if (this.namespace.defaultChain)
                    return this.namespace.defaultChain;
                const e = this.namespace.chains[0];
                if (!e)
                    throw new Error("ChainId not found");
                return e.split(":")[1]
            }
            request(e) {
                return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
            }
            setDefaultChain(e, t) {
                this.httpProviders[e] || this.setHttpProvider(e, t),
                this.chainId = e,
                this.events.emit(Ps, `${this.name}:${this.chainId}`)
            }
            getAccounts() {
                const e = this.namespace.accounts;
                return e ? [...new Set(e.filter((e=>e.split(":")[1] === this.chainId.toString())).map((e=>e.split(":")[2])))] : []
            }
            createHttpProviders() {
                const e = {};
                return this.namespace.chains.forEach((t=>{
                    const i = this.getCardanoRPCUrl(t)
                      , r = Us(t);
                    e[r] = this.createHttpProvider(r, i)
                }
                )),
                e
            }
            getHttpProvider() {
                const e = `${this.name}:${this.chainId}`
                  , t = this.httpProviders[e];
                if (typeof t > "u")
                    throw new Error(`JSON-RPC provider for ${e} not found`);
                return t
            }
            getCardanoRPCUrl(e) {
                const t = this.namespace.rpcMap;
                if (t)
                    return t[e]
            }
            setHttpProvider(e, t) {
                const i = this.createHttpProvider(e, t);
                i && (this.httpProviders[e] = i)
            }
            createHttpProvider(e, t) {
                const i = t || this.getCardanoRPCUrl(e);
                if (!i)
                    throw new Error(`No RPC url provided for chainId: ${e}`);
                return new At.r(new bs(i,Bs("disableProviderPing")))
            }
        }
        class Zs {
            constructor(e) {
                this.name = "elrond",
                this.namespace = e.namespace,
                this.events = Bs("events"),
                this.client = Bs("client"),
                this.chainId = this.getDefaultChain(),
                this.httpProviders = this.createHttpProviders()
            }
            updateNamespace(e) {
                this.namespace = Object.assign(this.namespace, e)
            }
            requestAccounts() {
                return this.getAccounts()
            }
            request(e) {
                return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
            }
            setDefaultChain(e, t) {
                this.httpProviders[e] || this.setHttpProvider(e, t),
                this.chainId = e,
                this.events.emit(Ps, `${this.name}:${e}`)
            }
            getDefaultChain() {
                if (this.chainId)
                    return this.chainId;
                if (this.namespace.defaultChain)
                    return this.namespace.defaultChain;
                const e = this.namespace.chains[0];
                if (!e)
                    throw new Error("ChainId not found");
                return e.split(":")[1]
            }
            getAccounts() {
                const e = this.namespace.accounts;
                return e ? [...new Set(e.filter((e=>e.split(":")[1] === this.chainId.toString())).map((e=>e.split(":")[2])))] : []
            }
            createHttpProviders() {
                const e = {};
                return this.namespace.chains.forEach((t=>{
                    var i;
                    const r = Us(t);
                    e[r] = this.createHttpProvider(r, null == (i = this.namespace.rpcMap) ? void 0 : i[t])
                }
                )),
                e
            }
            getHttpProvider() {
                const e = `${this.name}:${this.chainId}`
                  , t = this.httpProviders[e];
                if (typeof t > "u")
                    throw new Error(`JSON-RPC provider for ${e} not found`);
                return t
            }
            setHttpProvider(e, t) {
                const i = this.createHttpProvider(e, t);
                i && (this.httpProviders[e] = i)
            }
            createHttpProvider(e, t) {
                const i = t || js(e, this.namespace, this.client.core.projectId);
                if (!i)
                    throw new Error(`No RPC url provided for chainId: ${e}`);
                return new At.r(new bs(i,Bs("disableProviderPing")))
            }
        }
        class Xs {
            constructor(e) {
                this.name = "multiversx",
                this.namespace = e.namespace,
                this.events = Bs("events"),
                this.client = Bs("client"),
                this.chainId = this.getDefaultChain(),
                this.httpProviders = this.createHttpProviders()
            }
            updateNamespace(e) {
                this.namespace = Object.assign(this.namespace, e)
            }
            requestAccounts() {
                return this.getAccounts()
            }
            request(e) {
                return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
            }
            setDefaultChain(e, t) {
                this.httpProviders[e] || this.setHttpProvider(e, t),
                this.chainId = e,
                this.events.emit(Ps, `${this.name}:${e}`)
            }
            getDefaultChain() {
                if (this.chainId)
                    return this.chainId;
                if (this.namespace.defaultChain)
                    return this.namespace.defaultChain;
                const e = this.namespace.chains[0];
                if (!e)
                    throw new Error("ChainId not found");
                return e.split(":")[1]
            }
            getAccounts() {
                const e = this.namespace.accounts;
                return e ? [...new Set(e.filter((e=>e.split(":")[1] === this.chainId.toString())).map((e=>e.split(":")[2])))] : []
            }
            createHttpProviders() {
                const e = {};
                return this.namespace.chains.forEach((t=>{
                    var i;
                    const r = Us(t);
                    e[r] = this.createHttpProvider(r, null == (i = this.namespace.rpcMap) ? void 0 : i[t])
                }
                )),
                e
            }
            getHttpProvider() {
                const e = `${this.name}:${this.chainId}`
                  , t = this.httpProviders[e];
                if (typeof t > "u")
                    throw new Error(`JSON-RPC provider for ${e} not found`);
                return t
            }
            setHttpProvider(e, t) {
                const i = this.createHttpProvider(e, t);
                i && (this.httpProviders[e] = i)
            }
            createHttpProvider(e, t) {
                const i = t || js(e, this.namespace, this.client.core.projectId);
                if (!i)
                    throw new Error(`No RPC url provided for chainId: ${e}`);
                return new At.r(new bs(i,Bs("disableProviderPing")))
            }
        }
        class eo {
            constructor(e) {
                this.name = "near",
                this.namespace = e.namespace,
                this.events = Bs("events"),
                this.client = Bs("client"),
                this.chainId = this.getDefaultChain(),
                this.httpProviders = this.createHttpProviders()
            }
            updateNamespace(e) {
                this.namespace = Object.assign(this.namespace, e)
            }
            requestAccounts() {
                return this.getAccounts()
            }
            getDefaultChain() {
                if (this.chainId)
                    return this.chainId;
                if (this.namespace.defaultChain)
                    return this.namespace.defaultChain;
                const e = this.namespace.chains[0];
                if (!e)
                    throw new Error("ChainId not found");
                return e.split(":")[1]
            }
            request(e) {
                return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
            }
            setDefaultChain(e, t) {
                if (this.chainId = e,
                !this.httpProviders[e]) {
                    const i = t || js(`${this.name}:${e}`, this.namespace);
                    if (!i)
                        throw new Error(`No RPC url provided for chainId: ${e}`);
                    this.setHttpProvider(e, i)
                }
                this.events.emit(Ps, `${this.name}:${this.chainId}`)
            }
            getAccounts() {
                const e = this.namespace.accounts;
                return e && e.filter((e=>e.split(":")[1] === this.chainId.toString())).map((e=>e.split(":")[2])) || []
            }
            createHttpProviders() {
                const e = {};
                return this.namespace.chains.forEach((t=>{
                    var i;
                    e[t] = this.createHttpProvider(t, null == (i = this.namespace.rpcMap) ? void 0 : i[t])
                }
                )),
                e
            }
            getHttpProvider() {
                const e = `${this.name}:${this.chainId}`
                  , t = this.httpProviders[e];
                if (typeof t > "u")
                    throw new Error(`JSON-RPC provider for ${e} not found`);
                return t
            }
            setHttpProvider(e, t) {
                const i = this.createHttpProvider(e, t);
                i && (this.httpProviders[e] = i)
            }
            createHttpProvider(e, t) {
                const i = t || js(e, this.namespace);
                return typeof i > "u" ? void 0 : new At.r(new bs(i,Bs("disableProviderPing")))
            }
        }
        var to = Object.defineProperty
          , io = Object.defineProperties
          , ro = Object.getOwnPropertyDescriptors
          , no = Object.getOwnPropertySymbols
          , so = Object.prototype.hasOwnProperty
          , oo = Object.prototype.propertyIsEnumerable
          , ao = (e,t,i)=>t in e ? to(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: i
        }) : e[t] = i
          , co = (e,t)=>{
            for (var i in t || (t = {}))
                so.call(t, i) && ao(e, i, t[i]);
            if (no)
                for (var i of no(t))
                    oo.call(t, i) && ao(e, i, t[i]);
            return e
        }
          , ho = (e,t)=>io(e, ro(t));
        class uo {
            constructor(e) {
                this.events = new (n()),
                this.rpcProviders = {},
                this.shouldAbortPairingAttempt = !1,
                this.maxPairingAttempts = 10,
                this.disableProviderPing = !1,
                this.providerOpts = e,
                this.logger = typeof e?.logger < "u" && "string" != typeof e?.logger ? e.logger : tt()(dt({
                    level: e?.logger || Is
                })),
                this.disableProviderPing = e?.disableProviderPing || !1
            }
            static async init(e) {
                const t = new uo(e);
                return await t.initialize(),
                t
            }
            async request(e, t, i) {
                const [r,n] = this.validateChain(t);
                if (!this.session)
                    throw new Error("Please call connect() before request()");
                return await this.getProvider(r).request({
                    request: co({}, e),
                    chainId: `${r}:${n}`,
                    topic: this.session.topic,
                    expiry: i
                })
            }
            sendAsync(e, t, i, r) {
                const n = (new Date).getTime();
                this.request(e, i, r).then((e=>t(null, (0,
                Tt.formatJsonRpcResult)(n, e)))).catch((e=>t(e, void 0)))
            }
            async enable() {
                if (!this.client)
                    throw new Error("Sign Client not initialized");
                return this.session || await this.connect({
                    namespaces: this.namespaces,
                    optionalNamespaces: this.optionalNamespaces,
                    sessionProperties: this.sessionProperties
                }),
                await this.requestAccounts()
            }
            async disconnect() {
                var e;
                if (!this.session)
                    throw new Error("Please call connect() before enable()");
                await this.client.disconnect({
                    topic: null == (e = this.session) ? void 0 : e.topic,
                    reason: xe("USER_DISCONNECTED")
                }),
                await this.cleanup()
            }
            async connect(e) {
                if (!this.client)
                    throw new Error("Sign Client not initialized");
                if (this.setNamespaces(e),
                await this.cleanupPendingPairings(),
                !e.skipPairing)
                    return await this.pair(e.pairingTopic)
            }
            on(e, t) {
                this.events.on(e, t)
            }
            once(e, t) {
                this.events.once(e, t)
            }
            removeListener(e, t) {
                this.events.removeListener(e, t)
            }
            off(e, t) {
                this.events.off(e, t)
            }
            get isWalletConnect() {
                return !0
            }
            async pair(e) {
                this.shouldAbortPairingAttempt = !1;
                let t = 0;
                do {
                    if (this.shouldAbortPairingAttempt)
                        throw new Error("Pairing aborted");
                    if (t >= this.maxPairingAttempts)
                        throw new Error("Max auto pairing attempts reached");
                    const {uri: i, approval: r} = await this.client.connect({
                        pairingTopic: e,
                        requiredNamespaces: this.namespaces,
                        optionalNamespaces: this.optionalNamespaces,
                        sessionProperties: this.sessionProperties
                    });
                    i && (this.uri = i,
                    this.events.emit("display_uri", i)),
                    await r().then((e=>{
                        this.session = e;
                        const t = Vs(e.namespaces);
                        this.namespaces = zs(this.namespaces, t),
                        this.persist("namespaces", this.namespaces)
                    }
                    )).catch((e=>{
                        if (e.message !== Qn)
                            throw e;
                        t++
                    }
                    ))
                } while (!this.session);
                return this.onConnect(),
                this.session
            }
            setDefaultChain(e, t) {
                try {
                    if (!this.session)
                        return;
                    const [i,r] = this.validateChain(e);
                    this.getProvider(i).setDefaultChain(r, t)
                } catch (i) {
                    if (!/Please call connect/.test(i.message))
                        throw i
                }
            }
            async cleanupPendingPairings(e={}) {
                this.logger.info("Cleaning up inactive pairings...");
                const t = this.client.pairing.getAll();
                if (Ce(t)) {
                    for (const i of t)
                        e.deletePairings ? this.client.core.expirer.set(i.topic, 0) : await this.client.core.relayer.subscriber.unsubscribe(i.topic);
                    this.logger.info(`Inactive pairings cleared: ${t.length}`)
                }
            }
            abortPairingAttempt() {
                this.shouldAbortPairingAttempt = !0
            }
            async checkStorage() {
                if (this.namespaces = await this.getFromStore("namespaces"),
                this.optionalNamespaces = await this.getFromStore("optionalNamespaces") || {},
                this.client.session.length) {
                    const e = this.client.session.keys.length - 1;
                    this.session = this.client.session.get(this.client.session.keys[e]),
                    this.createProviders()
                }
            }
            async initialize() {
                this.logger.trace("Initialized"),
                await this.createClient(),
                await this.checkStorage(),
                this.registerEventListeners()
            }
            async createClient() {
                this.client = this.providerOpts.client || await ys.init({
                    logger: this.providerOpts.logger || Is,
                    relayUrl: this.providerOpts.relayUrl || "wss://relay.walletconnect.com",
                    projectId: this.providerOpts.projectId,
                    metadata: this.providerOpts.metadata,
                    storageOptions: this.providerOpts.storageOptions,
                    storage: this.providerOpts.storage,
                    name: this.providerOpts.name
                }),
                this.logger.trace("SignClient Initialized")
            }
            createProviders() {
                if (!this.client)
                    throw new Error("Sign Client not initialized");
                if (!this.session)
                    throw new Error("Session not initialized. Please call connect() before enable()");
                const e = [...new Set(Object.keys(this.session.namespaces).map((e=>Se(e))))];
                Fs("client", this.client),
                Fs("events", this.events),
                Fs("disableProviderPing", this.disableProviderPing),
                e.forEach((e=>{
                    if (!this.session)
                        return;
                    const t = function(e, t) {
                        const i = Object.keys(t.namespaces).filter((t=>t.includes(e)));
                        if (!i.length)
                            return [];
                        const r = [];
                        return i.forEach((e=>{
                            const i = t.namespaces[e].accounts;
                            r.push(...i)
                        }
                        )),
                        r
                    }(e, this.session)
                      , i = Ms(t)
                      , r = zs(this.namespaces, this.optionalNamespaces)
                      , n = ho(co({}, r[e]), {
                        accounts: t,
                        chains: i
                    });
                    switch (e) {
                    case "eip155":
                        this.rpcProviders[e] = new Gs({
                            namespace: n
                        });
                        break;
                    case "solana":
                        this.rpcProviders[e] = new Ws({
                            namespace: n
                        });
                        break;
                    case "cosmos":
                        this.rpcProviders[e] = new Qs({
                            namespace: n
                        });
                        break;
                    case "polkadot":
                        this.rpcProviders[e] = new Js({
                            namespace: n
                        });
                        break;
                    case "cip34":
                        this.rpcProviders[e] = new Ys({
                            namespace: n
                        });
                        break;
                    case "elrond":
                        this.rpcProviders[e] = new Zs({
                            namespace: n
                        });
                        break;
                    case "multiversx":
                        this.rpcProviders[e] = new Xs({
                            namespace: n
                        });
                        break;
                    case "near":
                        this.rpcProviders[e] = new eo({
                            namespace: n
                        })
                    }
                }
                ))
            }
            registerEventListeners() {
                if (typeof this.client > "u")
                    throw new Error("Sign Client is not initialized");
                this.client.on("session_ping", (e=>{
                    this.events.emit("session_ping", e)
                }
                )),
                this.client.on("session_event", (e=>{
                    const {params: t} = e
                      , {event: i} = t;
                    if ("accountsChanged" === i.name) {
                        const e = i.data;
                        e && Ce(e) && this.events.emit("accountsChanged", e.map(Ls))
                    } else if ("chainChanged" === i.name) {
                        const e = t.chainId
                          , i = t.event.data
                          , r = Se(e)
                          , n = Ks(e) !== Ks(i) ? `${r}:${Ks(i)}` : e;
                        this.onChainChanged(n)
                    } else
                        this.events.emit(i.name, i.data);
                    this.events.emit("session_event", e)
                }
                )),
                this.client.on("session_update", (({topic: e, params: t})=>{
                    var i;
                    const {namespaces: r} = t
                      , n = null == (i = this.client) ? void 0 : i.session.get(e);
                    this.session = ho(co({}, n), {
                        namespaces: r
                    }),
                    this.onSessionUpdate(),
                    this.events.emit("session_update", {
                        topic: e,
                        params: t
                    })
                }
                )),
                this.client.on("session_delete", (async e=>{
                    await this.cleanup(),
                    this.events.emit("session_delete", e),
                    this.events.emit("disconnect", ho(co({}, xe("USER_DISCONNECTED")), {
                        data: e.topic
                    }))
                }
                )),
                this.on(Ps, (e=>{
                    this.onChainChanged(e, !0)
                }
                ))
            }
            getProvider(e) {
                if (!this.rpcProviders[e])
                    throw new Error(`Provider not found: ${e}`);
                return this.rpcProviders[e]
            }
            onSessionUpdate() {
                Object.keys(this.rpcProviders).forEach((e=>{
                    var t;
                    this.getProvider(e).updateNamespace(null == (t = this.session) ? void 0 : t.namespaces[e])
                }
                ))
            }
            setNamespaces(e) {
                const {namespaces: t, optionalNamespaces: i, sessionProperties: r} = e;
                t && Object.keys(t).length && (this.namespaces = t),
                i && Object.keys(i).length && (this.optionalNamespaces = i),
                this.sessionProperties = r,
                this.persist("namespaces", t),
                this.persist("optionalNamespaces", i)
            }
            validateChain(e) {
                const [t,i] = e?.split(":") || ["", ""];
                if (!this.namespaces || !Object.keys(this.namespaces).length)
                    return [t, i];
                if (t && !Object.keys(this.namespaces || {}).map((e=>Se(e))).includes(t))
                    throw new Error(`Namespace '${t}' is not configured. Please call connect() first with namespace config.`);
                if (t && i)
                    return [t, i];
                const r = Se(Object.keys(this.namespaces)[0]);
                return [r, this.rpcProviders[r].getDefaultChain()]
            }
            async requestAccounts() {
                const [e] = this.validateChain();
                return await this.getProvider(e).requestAccounts()
            }
            onChainChanged(e, t=!1) {
                if (!this.namespaces)
                    return;
                const [i,r] = this.validateChain(e);
                r && (t || this.getProvider(i).setDefaultChain(r),
                this.namespaces[i] ? this.namespaces[i].defaultChain = r : this.namespaces[`${i}:${r}`] ? this.namespaces[`${i}:${r}`].defaultChain = r : this.namespaces[`${i}:${r}`] = {
                    defaultChain: r
                },
                this.persist("namespaces", this.namespaces),
                this.events.emit("chainChanged", r))
            }
            onConnect() {
                this.createProviders(),
                this.events.emit("connect", {
                    session: this.session
                })
            }
            async cleanup() {
                this.session = void 0,
                this.namespaces = void 0,
                this.optionalNamespaces = void 0,
                this.sessionProperties = void 0,
                this.persist("namespaces", void 0),
                this.persist("optionalNamespaces", void 0),
                this.persist("sessionProperties", void 0),
                await this.cleanupPendingPairings({
                    deletePairings: !0
                })
            }
            persist(e, t) {
                this.client.core.storage.setItem(`${Es}/${e}`, t)
            }
            async getFromStore(e) {
                return await this.client.core.storage.getItem(`${Es}/${e}`)
            }
        }
        const lo = uo
          , po = ["eth_sendTransaction", "personal_sign"]
          , fo = ["eth_accounts", "eth_requestAccounts", "eth_sendRawTransaction", "eth_sign", "eth_signTransaction", "eth_signTypedData", "eth_signTypedData_v3", "eth_signTypedData_v4", "eth_sendTransaction", "personal_sign", "wallet_switchEthereumChain", "wallet_addEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode"]
          , go = ["chainChanged", "accountsChanged"]
          , yo = ["chainChanged", "accountsChanged", "message", "disconnect", "connect"];
        var mo = Object.defineProperty
          , vo = Object.defineProperties
          , wo = Object.getOwnPropertyDescriptors
          , _o = Object.getOwnPropertySymbols
          , bo = Object.prototype.hasOwnProperty
          , Io = Object.prototype.propertyIsEnumerable
          , Eo = (e,t,i)=>t in e ? mo(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: i
        }) : e[t] = i
          , Po = (e,t)=>{
            for (var i in t || (t = {}))
                bo.call(t, i) && Eo(e, i, t[i]);
            if (_o)
                for (var i of _o(t))
                    Io.call(t, i) && Eo(e, i, t[i]);
            return e
        }
          , So = (e,t)=>vo(e, wo(t));
        function Ro(e) {
            return Number(e[0].split(":")[1])
        }
        function Oo(e) {
            return `0x${e.toString(16)}`
        }
        class No {
            constructor() {
                this.events = new r.EventEmitter,
                this.namespace = "eip155",
                this.accounts = [],
                this.chainId = 1,
                this.STORAGE_KEY = "wc@2:ethereum_provider:",
                this.on = (e,t)=>(this.events.on(e, t),
                this),
                this.once = (e,t)=>(this.events.once(e, t),
                this),
                this.removeListener = (e,t)=>(this.events.removeListener(e, t),
                this),
                this.off = (e,t)=>(this.events.off(e, t),
                this),
                this.parseAccount = e=>this.isCompatibleChainId(e) ? this.parseAccountId(e).address : e,
                this.signer = {},
                this.rpc = {}
            }
            static async init(e) {
                const t = new No;
                return await t.initialize(e),
                t
            }
            async request(e, t) {
                return await this.signer.request(e, this.formatChainId(this.chainId), t)
            }
            sendAsync(e, t, i) {
                this.signer.sendAsync(e, t, this.formatChainId(this.chainId), i)
            }
            get connected() {
                return !!this.signer.client && this.signer.client.core.relayer.connected
            }
            get connecting() {
                return !!this.signer.client && this.signer.client.core.relayer.connecting
            }
            async enable() {
                return this.session || await this.connect(),
                await this.request({
                    method: "eth_requestAccounts"
                })
            }
            async connect(e) {
                if (!this.signer.client)
                    throw new Error("Provider not initialized. Call init() first");
                this.loadConnectOpts(e);
                const {required: t, optional: i} = function(e) {
                    const {chains: t, optionalChains: i, methods: r, optionalMethods: n, events: s, optionalEvents: o, rpcMap: a} = e;
                    if (!Ce(t))
                        throw new Error("Invalid chains");
                    const c = {
                        chains: t,
                        methods: r || po,
                        events: s || go,
                        rpcMap: Po({}, t.length ? {
                            [Ro(t)]: a[Ro(t)]
                        } : {})
                    }
                      , h = s?.filter((e=>!go.includes(e)))
                      , u = r?.filter((e=>!po.includes(e)));
                    if (!i && !o && !n && (null == h || !h.length) && (null == u || !u.length))
                        return {
                            required: t.length ? c : void 0
                        };
                    const l = {
                        chains: [...new Set(h?.length && u?.length || !i ? c.chains.concat(i || []) : i)],
                        methods: [...new Set(c.methods.concat(null != n && n.length ? n : fo))],
                        events: [...new Set(c.events.concat(null != o && o.length ? o : yo))],
                        rpcMap: a
                    };
                    return {
                        required: t.length ? c : void 0,
                        optional: i.length ? l : void 0
                    }
                }(this.rpc);
                try {
                    const r = await new Promise((async(r,n)=>{
                        var s;
                        this.rpc.showQrModal && (null == (s = this.modal) || s.subscribeModal((e=>{
                            !e.open && !this.signer.session && (this.signer.abortPairingAttempt(),
                            n(new Error("Connection request reset. Please try again.")))
                        }
                        ))),
                        await this.signer.connect(So(Po({
                            namespaces: Po({}, t && {
                                [this.namespace]: t
                            })
                        }, i && {
                            optionalNamespaces: {
                                [this.namespace]: i
                            }
                        }), {
                            pairingTopic: e?.pairingTopic
                        })).then((e=>{
                            r(e)
                        }
                        )).catch((e=>{
                            n(new Error(e.message))
                        }
                        ))
                    }
                    ));
                    if (!r)
                        return;
                    const n = function(e, t=[]) {
                        const i = [];
                        return Object.keys(e).forEach((r=>{
                            if (t.length && !t.includes(r))
                                return;
                            const n = e[r];
                            i.push(...n.accounts)
                        }
                        )),
                        i
                    }(r.namespaces, [this.namespace]);
                    this.setChainIds(this.rpc.chains.length ? this.rpc.chains : n),
                    this.setAccounts(n),
                    this.events.emit("connect", {
                        chainId: Oo(this.chainId)
                    })
                } catch (rt) {
                    throw this.signer.logger.error(rt),
                    rt
                } finally {
                    this.modal && this.modal.closeModal()
                }
            }
            async disconnect() {
                this.session && await this.signer.disconnect(),
                this.reset()
            }
            get isWalletConnect() {
                return !0
            }
            get session() {
                return this.signer.session
            }
            registerEventListeners() {
                this.signer.on("session_event", (e=>{
                    const {params: t} = e
                      , {event: i} = t;
                    "accountsChanged" === i.name ? (this.accounts = this.parseAccounts(i.data),
                    this.events.emit("accountsChanged", this.accounts)) : "chainChanged" === i.name ? this.setChainId(this.formatChainId(i.data)) : this.events.emit(i.name, i.data),
                    this.events.emit("session_event", e)
                }
                )),
                this.signer.on("chainChanged", (e=>{
                    const t = parseInt(e);
                    this.chainId = t,
                    this.events.emit("chainChanged", Oo(this.chainId)),
                    this.persist()
                }
                )),
                this.signer.on("session_update", (e=>{
                    this.events.emit("session_update", e)
                }
                )),
                this.signer.on("session_delete", (e=>{
                    this.reset(),
                    this.events.emit("session_delete", e),
                    this.events.emit("disconnect", So(Po({}, xe("USER_DISCONNECTED")), {
                        data: e.topic,
                        name: "USER_DISCONNECTED"
                    }))
                }
                )),
                this.signer.on("display_uri", (e=>{
                    var t, i;
                    this.rpc.showQrModal && (null == (t = this.modal) || t.closeModal(),
                    null == (i = this.modal) || i.openModal({
                        uri: e
                    })),
                    this.events.emit("display_uri", e)
                }
                ))
            }
            switchEthereumChain(e) {
                this.request({
                    method: "wallet_switchEthereumChain",
                    params: [{
                        chainId: e.toString(16)
                    }]
                })
            }
            isCompatibleChainId(e) {
                return "string" == typeof e && e.startsWith(`${this.namespace}:`)
            }
            formatChainId(e) {
                return `${this.namespace}:${e}`
            }
            parseChainId(e) {
                return Number(e.split(":")[1])
            }
            setChainIds(e) {
                const t = e.filter((e=>this.isCompatibleChainId(e))).map((e=>this.parseChainId(e)));
                t.length && (this.chainId = t[0],
                this.events.emit("chainChanged", Oo(this.chainId)),
                this.persist())
            }
            setChainId(e) {
                if (this.isCompatibleChainId(e)) {
                    const t = this.parseChainId(e);
                    this.chainId = t,
                    this.switchEthereumChain(t)
                }
            }
            parseAccountId(e) {
                const [t,i,r] = e.split(":");
                return {
                    chainId: `${t}:${i}`,
                    address: r
                }
            }
            setAccounts(e) {
                this.accounts = e.filter((e=>this.parseChainId(this.parseAccountId(e).chainId) === this.chainId)).map((e=>this.parseAccountId(e).address)),
                this.events.emit("accountsChanged", this.accounts)
            }
            getRpcConfig(e) {
                var t, i;
                const r = null != (t = e?.chains) ? t : []
                  , n = null != (i = e?.optionalChains) ? i : []
                  , s = r.concat(n);
                if (!s.length)
                    throw new Error("No chains specified in either `chains` or `optionalChains`");
                const o = r.length ? e?.methods || po : []
                  , a = r.length ? e?.events || go : []
                  , c = e?.optionalMethods || []
                  , h = e?.optionalEvents || []
                  , u = e?.rpcMap || this.buildRpcMap(s, e.projectId)
                  , l = e?.qrModalOptions || void 0;
                return {
                    chains: r?.map((e=>this.formatChainId(e))),
                    optionalChains: n.map((e=>this.formatChainId(e))),
                    methods: o,
                    events: a,
                    optionalMethods: c,
                    optionalEvents: h,
                    rpcMap: u,
                    showQrModal: !(null == e || !e.showQrModal),
                    qrModalOptions: l,
                    projectId: e.projectId,
                    metadata: e.metadata
                }
            }
            buildRpcMap(e, t) {
                const i = {};
                return e.forEach((e=>{
                    i[e] = this.getRpcUrl(e, t)
                }
                )),
                i
            }
            async initialize(e) {
                if (this.rpc = this.getRpcConfig(e),
                this.chainId = this.rpc.chains.length ? Ro(this.rpc.chains) : Ro(this.rpc.optionalChains),
                this.signer = await lo.init({
                    projectId: this.rpc.projectId,
                    metadata: this.rpc.metadata,
                    disableProviderPing: e.disableProviderPing,
                    relayUrl: e.relayUrl,
                    storageOptions: e.storageOptions
                }),
                this.registerEventListeners(),
                await this.loadPersistedSession(),
                this.rpc.showQrModal) {
                    let e;
                    try {
                        const {WalletConnectModal: t} = await i.e(4626).then(i.bind(i, 44626));
                        e = t
                    } catch {
                        throw new Error("To use QR modal, please install @walletconnect/modal package")
                    }
                    if (e)
                        try {
                            this.modal = new e(Po({
                                projectId: this.rpc.projectId
                            }, this.rpc.qrModalOptions))
                        } catch (lt) {
                            throw this.signer.logger.error(lt),
                            new Error("Could not generate WalletConnectModal Instance")
                        }
                }
            }
            loadConnectOpts(e) {
                if (!e)
                    return;
                const {chains: t, optionalChains: i, rpcMap: r} = e;
                t && Ce(t) && (this.rpc.chains = t.map((e=>this.formatChainId(e))),
                t.forEach((e=>{
                    this.rpc.rpcMap[e] = r?.[e] || this.getRpcUrl(e)
                }
                ))),
                i && Ce(i) && (this.rpc.optionalChains = [],
                this.rpc.optionalChains = i?.map((e=>this.formatChainId(e))),
                i.forEach((e=>{
                    this.rpc.rpcMap[e] = r?.[e] || this.getRpcUrl(e)
                }
                )))
            }
            getRpcUrl(e, t) {
                var i;
                return (null == (i = this.rpc.rpcMap) ? void 0 : i[e]) || `https://rpc.walletconnect.com/v1/?chainId=eip155:${e}&projectId=${t || this.rpc.projectId}`
            }
            async loadPersistedSession() {
                if (!this.session)
                    return;
                const e = await this.signer.client.core.storage.getItem(`${this.STORAGE_KEY}/chainId`)
                  , t = this.session.namespaces[`${this.namespace}:${e}`] ? this.session.namespaces[`${this.namespace}:${e}`] : this.session.namespaces[this.namespace];
                this.setChainIds(e ? [this.formatChainId(e)] : t?.accounts),
                this.setAccounts(t?.accounts)
            }
            reset() {
                this.chainId = 1,
                this.accounts = []
            }
            persist() {
                this.session && this.signer.client.core.storage.setItem(`${this.STORAGE_KEY}/chainId`, this.chainId)
            }
            parseAccounts(e) {
                return "string" == typeof e || e instanceof String ? [this.parseAccount(e)] : e.map((e=>this.parseAccount(e)))
            }
        }
        const xo = No
    }
}]);
