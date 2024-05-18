"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[660], {
    31630: function(n) {
        n.exports = function() {
            throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
        }
    },
    10660: function(n, e, t) {
        t.r(e),
        t.d(e, {
            default: function() {
                return Be
            },
            getProvider: function() {
                return Ne
            }
        });
        var r = t(59769)
          , i = t(7759)
          , o = t(95569);
        function a(n, e, t, r, i, o, a) {
            try {
                var s = n[o](a)
                  , c = s.value
            } catch (n) {
                return void t(n)
            }
            s.done ? e(c) : Promise.resolve(c).then(r, i)
        }
        function s(n) {
            return function() {
                var e = this
                  , t = arguments;
                return new Promise((function(r, i) {
                    var o = n.apply(e, t);
                    function s(n) {
                        a(o, r, i, s, c, "next", n)
                    }
                    function c(n) {
                        a(o, r, i, s, c, "throw", n)
                    }
                    s(void 0)
                }
                ))
            }
        }
        function c(n, e) {
            for (var t = 0; t < e.length; t++) {
                var r = e[t];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(n, r.key, r)
            }
        }
        function l(n, e, t) {
            return e in n ? Object.defineProperty(n, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : n[e] = t,
            n
        }
        function u(n) {
            for (var e = 1; e < arguments.length; e++) {
                var t = null != arguments[e] ? arguments[e] : {}
                  , r = Object.keys(t);
                "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(n) {
                    return Object.getOwnPropertyDescriptor(t, n).enumerable
                }
                )))),
                r.forEach((function(e) {
                    l(n, e, t[e])
                }
                ))
            }
            return n
        }
        function d(n, e) {
            return e = null != e ? e : {},
            Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : function(n, e) {
                var t = Object.keys(n);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(n);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }
                    ))),
                    t.push.apply(t, r)
                }
                return t
            }(Object(e)).forEach((function(t) {
                Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(e, t))
            }
            )),
            n
        }
        function p(n) {
            return n && "undefined" !== typeof Symbol && n.constructor === Symbol ? "symbol" : typeof n
        }
        function f(n, e) {
            var t, r, i, o, a = {
                label: 0,
                sent: function() {
                    if (1 & i[0])
                        throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: s(0),
                throw: s(1),
                return: s(2)
            },
            "function" === typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function s(n) {
                return function(e) {
                    return c([n, e])
                }
            }
            function c(o) {
                if (t)
                    throw new TypeError("Generator is already executing.");
                for (; a; )
                    try {
                        if (t = 1,
                        r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r),
                        0) : r.next) && !(i = i.call(r, o[1])).done)
                            return i;
                        switch (r = 0,
                        i && (o = [2 & o[0], i.value]),
                        o[0]) {
                        case 0:
                        case 1:
                            i = o;
                            break;
                        case 4:
                            return a.label++,
                            {
                                value: o[1],
                                done: !1
                            };
                        case 5:
                            a.label++,
                            r = o[1],
                            o = [0];
                            continue;
                        case 7:
                            o = a.ops.pop(),
                            a.trys.pop();
                            continue;
                        default:
                            if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                a = 0;
                                continue
                            }
                            if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                a.label = o[1];
                                break
                            }
                            if (6 === o[0] && a.label < i[1]) {
                                a.label = i[1],
                                i = o;
                                break
                            }
                            if (i && a.label < i[2]) {
                                a.label = i[2],
                                a.ops.push(o);
                                break
                            }
                            i[2] && a.ops.pop(),
                            a.trys.pop();
                            continue
                        }
                        o = e.call(n, a)
                    } catch (n) {
                        o = [6, n],
                        r = 0
                    } finally {
                        t = i = 0
                    }
                if (5 & o[0])
                    throw o[1];
                return {
                    value: o[0] ? o[1] : void 0,
                    done: !0
                }
            }
        }
        var h = Object.defineProperty
          , m = function(n, e, t) {
            return function(n, e, t) {
                e in n ? h(n, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                }) : n[e] = t
            }(n, "symbol" != ("undefined" === typeof e ? "undefined" : p(e)) ? e + "" : e, t),
            t
        }
          , w = {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            method: "POST"
        }
          , y = function() {
            function n(e) {
                if (function(n, e) {
                    if (!(n instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                this.url = e,
                m(this, "events", new o.v),
                m(this, "isAvailable", !1),
                m(this, "registering", !1),
                !(0,
                r.jK)(e))
                    throw new Error("Provided URL is not compatible with HTTP connection: ".concat(e));
                this.url = e
            }
            return function(n, e, t) {
                e && c(n.prototype, e),
                t && c(n, t)
            }(n, [{
                key: "connected",
                get: function() {
                    return this.isAvailable
                }
            }, {
                key: "connecting",
                get: function() {
                    return this.registering
                }
            }, {
                key: "open",
                value: function() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.url
                      , e = this;
                    return s((function() {
                        return f(this, (function(t) {
                            switch (t.label) {
                            case 0:
                                return [4, e.register(n)];
                            case 1:
                                return t.sent(),
                                [2]
                            }
                        }
                        ))
                    }
                    ))()
                }
            }, {
                key: "close",
                value: function() {
                    var n = this;
                    return s((function() {
                        return f(this, (function(e) {
                            if (!n.isAvailable)
                                throw new Error("Connection already closed");
                            return n.onClose(),
                            [2]
                        }
                        ))
                    }
                    ))()
                }
            }, {
                key: "request",
                value: function(n) {
                    var e = this;
                    return s((function() {
                        var t, o, a, s;
                        return f(this, (function(c) {
                            switch (c.label) {
                            case 0:
                                return r.cM.debug("HttpClient ~ request ~ payload:", n),
                                e.isAvailable ? [3, 2] : [4, e.register()];
                            case 1:
                                c.sent(),
                                c.label = 2;
                            case 2:
                                c.label = 3;
                            case 3:
                                return c.trys.push([3, 6, , 7]),
                                t = (0,
                                r.u4)(n),
                                [4, i(e.url, d(u({}, w), {
                                    body: t
                                }))];
                            case 4:
                                return [4, c.sent().json()];
                            case 5:
                                return o = c.sent(),
                                a = "string" == typeof o ? (0,
                                r.D6)(o) : o,
                                [2, (r.cM.debug("HttpClient ~ request ~ result:", a),
                                a)];
                            case 6:
                                return s = c.sent(),
                                [2, e.formatError(n.id, s)];
                            case 7:
                                return [2]
                            }
                        }
                        ))
                    }
                    ))()
                }
            }, {
                key: "formatError",
                value: function(n, e) {
                    var t = this.parseError(e)
                      , i = t.message || t.toString();
                    return (0,
                    r.RI)(n, i)
                }
            }, {
                key: "register",
                value: function() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.url
                      , e = this;
                    return s((function() {
                        var t, o, a;
                        return f(this, (function(s) {
                            switch (s.label) {
                            case 0:
                                if (!(0,
                                r.jK)(n))
                                    throw new Error("Provided URL is not compatible with HTTP connection: ".concat(n));
                                if (e.registering)
                                    return [2, new Promise((function(n, t) {
                                        e.events.once("register_error", (function(n) {
                                            t(n)
                                        }
                                        )),
                                        e.events.once("open", (function() {
                                            if (p(e.isAvailable) > "u")
                                                return t(new Error("HTTP connection is missing or invalid"));
                                            n()
                                        }
                                        ))
                                    }
                                    ))];
                                e.url = n,
                                e.registering = !0,
                                s.label = 1;
                            case 1:
                                return s.trys.push([1, 3, , 4]),
                                t = (0,
                                r.u4)({
                                    id: 1,
                                    jsonrpc: "2.0",
                                    method: "test",
                                    params: []
                                }),
                                [4, i(n, d(u({}, w), {
                                    body: t
                                }))];
                            case 2:
                                return s.sent(),
                                e.onOpen(),
                                [3, 4];
                            case 3:
                                throw o = s.sent(),
                                a = e.parseError(o),
                                e.events.emit("register_error", a),
                                e.onClose(),
                                a;
                            case 4:
                                return [2]
                            }
                        }
                        ))
                    }
                    ))()
                }
            }, {
                key: "onOpen",
                value: function() {
                    this.isAvailable = !0,
                    this.registering = !1,
                    this.events.emit("open")
                }
            }, {
                key: "onClose",
                value: function() {
                    this.isAvailable = !1,
                    this.registering = !1,
                    this.events.emit("open")
                }
            }, {
                key: "parseError",
                value: function(n) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.url;
                    return (0,
                    r.CX)(n, e, "HTTP")
                }
            }]),
            n
        }()
          , k = t(52983)
          , b = t(78520)
          , v = t(43127);
        function g(n, e) {
            (null == e || e > n.length) && (e = n.length);
            for (var t = 0, r = new Array(e); t < e; t++)
                r[t] = n[t];
            return r
        }
        function C(n, e, t, r, i, o, a) {
            try {
                var s = n[o](a)
                  , c = s.value
            } catch (n) {
                return void t(n)
            }
            s.done ? e(c) : Promise.resolve(c).then(r, i)
        }
        function S(n, e, t) {
            return e in n ? Object.defineProperty(n, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : n[e] = t,
            n
        }
        function I(n) {
            for (var e = 1; e < arguments.length; e++) {
                var t = null != arguments[e] ? arguments[e] : {}
                  , r = Object.keys(t);
                "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(n) {
                    return Object.getOwnPropertyDescriptor(t, n).enumerable
                }
                )))),
                r.forEach((function(e) {
                    S(n, e, t[e])
                }
                ))
            }
            return n
        }
        function x(n, e) {
            if (null == n)
                return {};
            var t, r, i = function(n, e) {
                if (null == n)
                    return {};
                var t, r, i = {}, o = Object.keys(n);
                for (r = 0; r < o.length; r++)
                    t = o[r],
                    e.indexOf(t) >= 0 || (i[t] = n[t]);
                return i
            }(n, e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(n);
                for (r = 0; r < o.length; r++)
                    t = o[r],
                    e.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(n, t) && (i[t] = n[t])
            }
            return i
        }
        function E(n, e) {
            return function(n) {
                if (Array.isArray(n))
                    return n
            }(n) || function(n, e) {
                var t = null == n ? null : "undefined" !== typeof Symbol && n[Symbol.iterator] || n["@@iterator"];
                if (null != t) {
                    var r, i, o = [], a = !0, s = !1;
                    try {
                        for (t = t.call(n); !(a = (r = t.next()).done) && (o.push(r.value),
                        !e || o.length !== e); a = !0)
                            ;
                    } catch (n) {
                        s = !0,
                        i = n
                    } finally {
                        try {
                            a || null == t.return || t.return()
                        } finally {
                            if (s)
                                throw i
                        }
                    }
                    return o
                }
            }(n, e) || function(n, e) {
                if (!n)
                    return;
                if ("string" === typeof n)
                    return g(n, e);
                var t = Object.prototype.toString.call(n).slice(8, -1);
                "Object" === t && n.constructor && (t = n.constructor.name);
                if ("Map" === t || "Set" === t)
                    return Array.from(t);
                if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                    return g(n, e)
            }(n, e) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        var O = "\n".concat("#binanceW3W-wrapper :is(.pointer-events-auto) {\n  pointer-events: auto;\n}\n\n#binanceW3W-wrapper :is(.fixed) {\n  position: fixed;\n}\n\n#binanceW3W-wrapper :is(.absolute) {\n  position: absolute;\n}\n\n#binanceW3W-wrapper :is(.relative) {\n  position: relative;\n}\n\n#binanceW3W-wrapper :is(.bottom-0) {\n  bottom: 0px;\n}\n\n#binanceW3W-wrapper :is(.left-0) {\n  left: 0px;\n}\n\n#binanceW3W-wrapper :is(.top-0) {\n  top: 0px;\n}\n\n#binanceW3W-wrapper :is(.m-auto) {\n  margin: auto;\n}\n\n#binanceW3W-wrapper :is(.mx-\\[4px\\]) {\n  margin-left: 4px;\n  margin-right: 4px;\n}\n\n#binanceW3W-wrapper :is(.mb-4) {\n  margin-bottom: 1rem;\n}\n\n#binanceW3W-wrapper :is(.mb-6) {\n  margin-bottom: 1.5rem;\n}\n\n#binanceW3W-wrapper :is(.ml-1) {\n  margin-left: 0.25rem;\n}\n\n#binanceW3W-wrapper :is(.mt-6) {\n  margin-top: 1.5rem;\n}\n\n#binanceW3W-wrapper :is(.mt-\\[35px\\]) {\n  margin-top: 35px;\n}\n\n#binanceW3W-wrapper :is(.flex) {\n  display: flex;\n}\n\n#binanceW3W-wrapper :is(.grid) {\n  display: grid;\n}\n\n#binanceW3W-wrapper :is(.h-\\[200px\\]) {\n  height: 200px;\n}\n\n#binanceW3W-wrapper :is(.h-\\[24px\\]) {\n  height: 24px;\n}\n\n#binanceW3W-wrapper :is(.h-\\[40px\\]) {\n  height: 40px;\n}\n\n#binanceW3W-wrapper :is(.h-\\[52px\\]) {\n  height: 52px;\n}\n\n#binanceW3W-wrapper :is(.h-full) {\n  height: 100%;\n}\n\n#binanceW3W-wrapper :is(.w-\\[150px\\]) {\n  width: 150px;\n}\n\n#binanceW3W-wrapper :is(.w-\\[200px\\]) {\n  width: 200px;\n}\n\n#binanceW3W-wrapper :is(.w-\\[20px\\]) {\n  width: 20px;\n}\n\n#binanceW3W-wrapper :is(.w-\\[24px\\]) {\n  width: 24px;\n}\n\n#binanceW3W-wrapper :is(.w-\\[343px\\]) {\n  width: 343px;\n}\n\n#binanceW3W-wrapper :is(.w-\\[60px\\]) {\n  width: 60px;\n}\n\n#binanceW3W-wrapper :is(.w-\\[75px\\]) {\n  width: 75px;\n}\n\n#binanceW3W-wrapper :is(.w-full) {\n  width: 100%;\n}\n\n#binanceW3W-wrapper :is(.transform) {\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n#binanceW3W-wrapper :is(.cursor-pointer) {\n  cursor: pointer;\n}\n\n#binanceW3W-wrapper :is(.grid-flow-col) {\n  grid-auto-flow: column;\n}\n\n#binanceW3W-wrapper :is(.grid-cols-2) {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n\n#binanceW3W-wrapper :is(.items-center) {\n  align-items: center;\n}\n\n#binanceW3W-wrapper :is(.justify-end) {\n  justify-content: flex-end;\n}\n\n#binanceW3W-wrapper :is(.justify-center) {\n  justify-content: center;\n}\n\n#binanceW3W-wrapper :is(.justify-between) {\n  justify-content: space-between;\n}\n\n#binanceW3W-wrapper :is(.gap-x-4) {\n  -moz-column-gap: 1rem;\n       column-gap: 1rem;\n}\n\n#binanceW3W-wrapper :is(.gap-y-2) {\n  row-gap: 0.5rem;\n}\n\n#binanceW3W-wrapper :is(.rounded) {\n  border-radius: 0.25rem;\n}\n\n#binanceW3W-wrapper :is(.rounded-2xl) {\n  border-radius: 1rem;\n}\n\n#binanceW3W-wrapper :is(.rounded-lg) {\n  border-radius: 0.5rem;\n}\n\n#binanceW3W-wrapper :is(.rounded-t-2xl) {\n  border-top-left-radius: 1rem;\n  border-top-right-radius: 1rem;\n}\n\n#binanceW3W-wrapper :is(.border) {\n  border-width: 1px;\n}\n\n#binanceW3W-wrapper :is(.border-b) {\n  border-bottom-width: 1px;\n}\n\n#binanceW3W-wrapper :is(.border-gray-300) {\n  --tw-border-opacity: 1;\n  border-color: rgb(209 213 219 / var(--tw-border-opacity));\n}\n\n#binanceW3W-wrapper :is(.bg-black\\/\\[\\.80\\]) {\n  background-color: rgb(0 0 0 / .80);\n}\n\n#binanceW3W-wrapper :is(.bg-white) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\n\n#binanceW3W-wrapper :is(.p-\\[12px\\]) {\n  padding: 12px;\n}\n\n#binanceW3W-wrapper :is(.px-4) {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n\n#binanceW3W-wrapper :is(.px-6) {\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n}\n\n#binanceW3W-wrapper :is(.py-3) {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}\n\n#binanceW3W-wrapper :is(.py-4) {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n\n#binanceW3W-wrapper :is(.pb-6) {\n  padding-bottom: 1.5rem;\n}\n\n#binanceW3W-wrapper :is(.pt-\\[20px\\]) {\n  padding-top: 20px;\n}\n\n#binanceW3W-wrapper :is(.text-center) {\n  text-align: center;\n}\n\n#binanceW3W-wrapper :is(.text-base) {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n\n#binanceW3W-wrapper :is(.font-medium) {\n  font-weight: 500;\n}\n\n#binanceW3W-wrapper :is(.text-\\[\\#1E2329\\]) {\n  --tw-text-opacity: 1;\n  color: rgb(30 35 41 / var(--tw-text-opacity));\n}\n\n#binanceW3W-wrapper :is(.text-\\[\\#929AA5\\]) {\n  --tw-text-opacity: 1;\n  color: rgb(146 154 165 / var(--tw-text-opacity));\n}\n\n#binanceW3W-wrapper :is(.shadow-inner) {\n  --tw-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: inset 0 2px 4px 0 var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n#binanceW3W-wrapper :is(.duration-300) {\n  transition-duration: 300ms;\n}\n\n#binanceW3W-wrapper :is(.ease-in-out) {\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n#binanceW3W-wrapper :is(.will-change-auto) {\n  will-change: auto;\n}\n\n#binanceW3W-wrapper :is(.will-change-transform) {\n  will-change: transform;\n}\n\n.w3w-body3 {\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 20px;\n}\n\n.w3w-subtitle1 {\n  font-size: 20px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 28px;\n}\n\n.w3w-subtitle3 {\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 24px;\n  /* 150% */\n}\n\n.w3w-caption2 {\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 16px;\n}\n\n.w3w-t-black {\n  color: #0b0e11;\n}\n\n.w3w-t-brand {\n  color: #c99400;\n}\n\n.w3w-t-primary {\n  color: #202630;\n}\n\n.w3w-t-secondary {\n  color: #474d57;\n}\n\n.w3w-bg-primary {\n  background: #fcd535;\n}\n\n@media (min-width: 768px) {\n  .md\\:w3w-subtitle1 {\n    font-size: 20px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: 28px;\n  }\n\n  #binanceW3W-wrapper :is(.md\\:w-\\[400px\\]) {\n    width: 400px;\n  }\n\n  #binanceW3W-wrapper :is(.md\\:font-semibold) {\n    font-weight: 600;\n  }\n}\n\n@media (min-width: 1024px) {\n  #binanceW3W-wrapper :is(.lg\\:p-8) {\n    padding: 2rem;\n  }\n\n  #binanceW3W-wrapper :is(.lg\\:pt-6) {\n    padding-top: 1.5rem;\n  }\n\n  #binanceW3W-wrapper :is(.lg\\:text-xl) {\n    font-size: 1.25rem;\n    line-height: 1.75rem;\n  }\n}\n", "\n\n:root {\n  --animation-duration: 300ms;\n}\n\n@keyframes w3w-fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes w3w-fadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n.w3w-animated {\n  animation-duration: var(--animation-duration);\n  animation-fill-mode: both;\n}\n\n.w3w-fadeIn {\n  animation-name: w3w-fadeIn;\n}\n\n.w3w-fadeOut {\n  animation-name: w3w-fadeOut;\n}\n\n#binanceW3W-wrapper {\n  -webkit-user-select: none;\n  align-items: center;\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  left: 0;\n  pointer-events: none;\n  position: fixed;\n  top: 0;\n  user-select: none;\n  width: 100%;\n  z-index: 99999999999999;\n}\n")
          , W = (0,
        k.createContext)({})
          , _ = "binanceW3W-wrapper"
          , A = "binanceW3W-qrcode-modal"
          , M = "https://app.appsflyer.com/com.binance.dev?pid=https%3A%2F%2Fwww.binance.com%2Fen&c=https%3A%2F%2Fwww.binance.com%2Fen"
          , T = "https://app.appsflyer.com/id1436799971?pid=https%3A%2F%2Fwww.binance.com%2Fen&c=https%3A%2F%2Fwww.binance.com%2Fen"
          , j = "data:image/svg+xml;base64,".concat("PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMiIgeT0iMiIgd2lkdGg9IjUyIiBoZWlnaHQ9IjUyIiByeD0iMTAiIGZpbGw9IiMxNDE1MUEiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iNCIvPgo8cGF0aCBkPSJNMTIgMjhMMTUuNjEyOSAyNC4zODcxTDE5LjIyNTggMjhMMTUuNjEyOSAzMS42MTI5TDEyIDI4WiIgZmlsbD0iI0YwQjkwQiIvPgo8cGF0aCBkPSJNMTguMTkzNSAyMS44MDY1TDI4IDEyTDM3LjgwNjUgMjEuODA2NUwzNC4xOTM2IDI1LjQxOTRMMjggMTkuMjI1OEwyMS44MDY1IDI1LjQxOTRMMTguMTkzNSAyMS44MDY1WiIgZmlsbD0iI0YwQjkwQiIvPgo8cGF0aCBkPSJNMjQuMzg3MSAyOEwyOCAyNC4zODcxTDMxLjYxMjkgMjhMMjggMzEuNjEyOUwyNC4zODcxIDI4WiIgZmlsbD0iI0YwQjkwQiIvPgo8cGF0aCBkPSJNMjEuODA2NSAzMC41ODA2TDE4LjE5MzUgMzQuMTkzNUwyOCA0NEwzNy44MDY1IDM0LjE5MzVMMzQuMTkzNiAzMC41ODA2TDI4IDM2Ljc3NDJMMjEuODA2NSAzMC41ODA2WiIgZmlsbD0iI0YwQjkwQiIvPgo8cGF0aCBkPSJNMzYuNzc0MiAyOEw0MC4zODcxIDI0LjM4NzFMNDQgMjhMNDAuMzg3MSAzMS42MTI5TDM2Ljc3NDIgMjhaIiBmaWxsPSIjRjBCOTBCIi8+Cjwvc3ZnPgo=")
          , N = function() {
            var n = E((0,
            k.useState)(), 2)
              , e = n[0]
              , t = n[1]
              , i = E((0,
            k.useState)(!1), 2)
              , o = i[0]
              , a = i[1];
            return (0,
            k.useEffect)((function() {
                var n = (0,
                r.W7)()
                  , e = (0,
                r.CN)();
                t(n),
                a(e)
            }
            ), []),
            {
                isMobile: e,
                isAndroid: o
            }
        }
          , B = {
            en: {
                "sdk-download-android": "Download for Android",
                "sdk-connect": "Connect",
                "sdk-download-ios": "Download for iOS",
                "sdk-install": "Install",
                "sdk-modal-instruct-1": "1. Open Binance app",
                "sdk-modal-instruct-2": "2. Tap {{icon}} on Home Screen",
                "sdk-modal-title": "Connect With Binance",
                "sdk-no-app": "Don\u2019t have the Binance app yet?"
            },
            ar: {
                "sdk-download-android": "\u062a\u0646\u0632\u064a\u0644 \u0644\u0646\u0638\u0627\u0645 Android",
                "sdk-connect": "\u0627\u062a\u0635\u0627\u0644",
                "sdk-download-ios": "\u062a\u0646\u0632\u064a\u0644 \u0644\u0646\u0638\u0627\u0645 iOS",
                "sdk-install": "\u062a\u062b\u0628\u064a\u062a",
                "sdk-modal-instruct-1": "1. \u0627\u0641\u062a\u062d \u062a\u0637\u0628\u064a\u0642 Binance",
                "sdk-modal-instruct-2": "2. \u0627\u0636\u063a\u0637 {{icon}} \u0639\u0644\u0649 \u0627\u0644\u0634\u0627\u0634\u0629 \u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629",
                "sdk-modal-title": "\u0627\u0644\u0631\u0628\u0637 \u0645\u0639 Binance (\u0628\u064a\u0646\u0627\u0646\u0633)",
                "sdk-no-app": "\u0644\u064a\u0633 \u0644\u062f\u064a\u0643 \u062a\u0637\u0628\u064a\u0642 Binance \u062d\u062a\u0651\u0649 \u0627\u0644\u0622\u0646\u061f"
            },
            "bg-BG": {
                "sdk-download-android": "\u0418\u0437\u0442\u0435\u0433\u043b\u044f\u043d\u0435 \u0437\u0430 Android",
                "sdk-connect": "\u0421\u0432\u044a\u0440\u0436\u0438",
                "sdk-download-ios": "\u0418\u0437\u0442\u0435\u0433\u043b\u044f\u043d\u0435 \u0437\u0430 iOS",
                "sdk-install": "\u0418\u043d\u0441\u0442\u0430\u043b\u0438\u0440\u0430\u043d\u0435",
                "sdk-modal-instruct-1": "1. \u041e\u0442\u0432\u043e\u0440\u0435\u0442\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435\u0442\u043e Binance",
                "sdk-modal-instruct-2": "2. \u0414\u043e\u043a\u043e\u0441\u043d\u0435\u0442\u0435 {{icon}} \u043d\u0430 \u043d\u0430\u0447\u0430\u043b\u043d\u0438\u044f \u0435\u043a\u0440\u0430\u043d",
                "sdk-modal-title": "\u0421\u0432\u044a\u0440\u0436\u0435\u0442\u0435 \u0441\u0435 \u0441 Binance",
                "sdk-no-app": "\u0412\u0441\u0435 \u043e\u0449\u0435 \u043d\u044f\u043c\u0430\u0442\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435\u0442\u043e Binance?"
            },
            "zh-CN": {
                "sdk-download-android": "\u4e0b\u8f7d\u5b89\u5353\u7248",
                "sdk-connect": "\u5173\u8054",
                "sdk-download-ios": "\u4e0b\u8f7diOS\u7248",
                "sdk-install": "\u5b89\u88c5",
                "sdk-modal-instruct-1": "1.\u6253\u5f00\u5e01\u5b89App",
                "sdk-modal-instruct-2": "2.\u70b9\u51fb\u4e3b\u5c4f\u5e55\u7684{{icon}}",
                "sdk-modal-title": "\u5173\u8054\u5e01\u5b89",
                "sdk-no-app": "\u5c1a\u672a\u5b89\u88c5\u5e01\u5b89App\uff1f"
            },
            "zh-TW": {
                "sdk-download-android": "Android \u4e0b\u8f09",
                "sdk-connect": "\u9023\u63a5",
                "sdk-download-ios": "iOS \u4e0b\u8f09",
                "sdk-install": "\u5b89\u88dd",
                "sdk-modal-instruct-1": "1. \u958b\u555f\u5e63\u5b89 App",
                "sdk-modal-instruct-2": "2. \u5728\u9996\u9801\u756b\u9762\u4e0a\u9ede\u64ca {{icon}}",
                "sdk-modal-title": "\u8207\u5e63\u5b89\u9023\u63a5",
                "sdk-no-app": "\u9084\u6c92\u6709\u5e63\u5b89 App \u55ce\uff1f"
            },
            "cs-CZ": {
                "sdk-download-android": "St\xe1hnout pro Android",
                "sdk-connect": "P\u0159ipojit",
                "sdk-download-ios": "St\xe1hnout pro iOS",
                "sdk-install": "Instalovat",
                "sdk-modal-instruct-1": "1. Otev\u0159ete aplikaci Binance",
                "sdk-modal-instruct-2": "2. Klepn\u011bte na {{icon}} na domovsk\xe9 obrazovce",
                "sdk-modal-title": "P\u0159ipojit platformu Binance",
                "sdk-no-app": "Je\u0161t\u011b nem\xe1te aplikaci Binance?"
            },
            "fr-FR": {
                "sdk-download-android": "T\xe9l\xe9charger pour Android",
                "sdk-connect": "Se connecter",
                "sdk-download-ios": "T\xe9l\xe9charger pour iOS",
                "sdk-install": "Installer",
                "sdk-modal-instruct-1": "1. Ouvrez l\u2019application de Binance",
                "sdk-modal-instruct-2": "2. Appuyez sur {{icon}} sur l\u2019\xe9cran d\u2019accueil",
                "sdk-modal-title": "Se connecter \xe0 Binance",
                "sdk-no-app": "Vous n\u2019avez pas encore l\u2019application de Binance\xa0?"
            },
            "de-DE": {
                "sdk-download-android": "F\xfcr Android herunterladen",
                "sdk-connect": "Verbinden",
                "sdk-download-ios": "F\xfcr iOS herunterladen",
                "sdk-install": "Installieren",
                "sdk-modal-instruct-1": "1. Binance-App \xf6ffnen",
                "sdk-modal-instruct-2": "2. Tippe auf dem Startbildschirm auf {{icon}}",
                "sdk-modal-title": "Mit Binance verkn\xfcpfen",
                "sdk-no-app": "Du hast die Binance-App noch nicht?"
            },
            "el-GR": {
                "sdk-download-android": "\u039b\u03ae\u03c8\u03b7 \u03b3\u03b9\u03b1 Android",
                "sdk-connect": "\u03a3\u03c5\u03bd\u03b4\u03b5\u03b8\u03b5\u03af\u03c4\u03b5",
                "sdk-download-ios": "\u039b\u03ae\u03c8\u03b7 \u03b3\u03b9\u03b1 iOS",
                "sdk-install": "\u0395\u03b3\u03ba\u03b1\u03c4\u03ac\u03c3\u03c4\u03b1\u03c3\u03b7",
                "sdk-modal-instruct-1": "1. \u0391\u03bd\u03bf\u03af\u03be\u03c4\u03b5 \u03c4\u03b7\u03bd \u03b5\u03c6\u03b1\u03c1\u03bc\u03bf\u03b3\u03ae Binance",
                "sdk-modal-instruct-2": "2. \u03a0\u03b1\u03c4\u03ae\u03c3\u03c4\u03b5 {{icon}} \u03c3\u03c4\u03b7\u03bd \u03b1\u03c1\u03c7\u03b9\u03ba\u03ae \u03bf\u03b8\u03cc\u03bd\u03b7",
                "sdk-modal-title": "\u03a3\u03c5\u03bd\u03b4\u03b5\u03b8\u03b5\u03af\u03c4\u03b5 \u03bc\u03b5 \u03c4\u03b7\u03bd Binance",
                "sdk-no-app": "\u0394\u03b5\u03bd \u03ad\u03c7\u03b5\u03c4\u03b5 \u03b1\u03ba\u03cc\u03bc\u03b1 \u03c4\u03b7\u03bd \u03b5\u03c6\u03b1\u03c1\u03bc\u03bf\u03b3\u03ae Binance;"
            },
            "id-ID": {
                "sdk-download-android": "Unduh untuk Android",
                "sdk-connect": "Terhubung",
                "sdk-download-ios": "Unduh untuk iOS",
                "sdk-install": "Instal",
                "sdk-modal-instruct-1": "1. Buka aplikasi Binance",
                "sdk-modal-instruct-2": "2. Ketuk {{icon}} di Layar Beranda",
                "sdk-modal-title": "Hubungkan dengan Binance",
                "sdk-no-app": "Belum punya aplikasi Binance?"
            },
            "it-IT": {
                "sdk-download-android": "Scarica per Android",
                "sdk-connect": "Collega",
                "sdk-download-ios": "Scarica per iOS",
                "sdk-install": "Installa",
                "sdk-modal-instruct-1": "1. Apri l'app Binance",
                "sdk-modal-instruct-2": "2. Tocca {{icon}} nella homepage",
                "sdk-modal-title": "Collega con Binance",
                "sdk-no-app": "Non hai ancora l'app Binance?"
            },
            "kk-KZ": {
                "sdk-download-android": "Android \u04af\u0448\u0456\u043d \u0436\u04af\u043a\u0442\u0435\u043f \u0430\u043b\u0443",
                "sdk-connect": "\u049a\u043e\u0441\u044b\u043b\u0443",
                "sdk-download-ios": "iOS \u04af\u0448\u0456\u043d \u0436\u04af\u043a\u0442\u0435\u043f \u0430\u043b\u0443",
                "sdk-install": "\u041e\u0440\u043d\u0430\u0442\u0443",
                "sdk-modal-instruct-1": "1. Binance \u049b\u043e\u043b\u0434\u0430\u043d\u0431\u0430\u0441\u044b\u043d \u0430\u0448\u044b\u04a3\u044b\u0437",
                "sdk-modal-instruct-2": "2. \u0411\u0430\u0441\u0442\u044b \u044d\u043a\u0440\u0430\u043d\u0434\u0430\u0493\u044b {{icon}} \u0431\u0435\u043b\u0433\u0456\u0448\u0435\u0441\u0456\u043d \u0442\u04af\u0440\u0442\u0456\u04a3\u0456\u0437",
                "sdk-modal-title": "Binance \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430\u0441\u044b\u043c\u0435\u043d \u0431\u0430\u0439\u043b\u0430\u043d\u044b\u0441\u0442\u044b\u0440\u0443",
                "sdk-no-app": "\u0421\u0456\u0437\u0434\u0435 \u04d9\u043b\u0456 Binance \u049b\u043e\u043b\u0434\u0430\u043d\u0431\u0430\u0441\u044b \u0436\u043e\u049b \u043f\u0430?"
            },
            "lv-LV": {
                "sdk-download-android": "Lejupiel\u0101d\u0113t Android ier\u012bcei",
                "sdk-connect": "Savienot",
                "sdk-download-ios": "Lejupiel\u0101d\u0113t iOS ier\u012bcei",
                "sdk-install": "Instal\u0113t",
                "sdk-modal-instruct-1": "1.\xa0Atver Binance lietotni",
                "sdk-modal-instruct-2": "2.\xa0Pieskaries pie {{icon}} s\u0101kuma ekr\u0101n\u0101",
                "sdk-modal-title": "Savieno ar Binance",
                "sdk-no-app": "Vai tev v\u0113l nav Binance lietotnes?"
            },
            "pl-PL": {
                "sdk-download-android": "Pobierz na Androida",
                "sdk-connect": "Po\u0142\u0105cz",
                "sdk-download-ios": "Pobierz na iOS",
                "sdk-install": "Zainstaluj",
                "sdk-modal-instruct-1": "1. Otw\xf3rz Aplikacj\u0119 Binance",
                "sdk-modal-instruct-2": "2. Kliknij {{icon}} na ekranie g\u0142\xf3wnym",
                "sdk-modal-title": "Po\u0142\u0105cz z Binance",
                "sdk-no-app": "Nie masz jeszcze aplikacji Binance?"
            },
            "pt-BR": {
                "sdk-download-android": "Baixar para Android",
                "sdk-connect": "Conecte",
                "sdk-download-ios": "Baixar para iOS",
                "sdk-install": "Instalar",
                "sdk-modal-instruct-1": "1. Abra o Aplicativo da Binance",
                "sdk-modal-instruct-2": "2. Toque em {{icon}} na Tela Inicial",
                "sdk-modal-title": "Conectar com a Binance",
                "sdk-no-app": "Ainda n\xe3o tem o aplicativo da Binance?"
            },
            "pt-PT": {
                "sdk-download-android": "Transferir para Android",
                "sdk-connect": "Associar",
                "sdk-download-ios": "Transferir para iOS",
                "sdk-install": "Instalar",
                "sdk-modal-instruct-1": "1. Abre a aplica\xe7\xe3o Binance",
                "sdk-modal-instruct-2": "2. Toca em {{icon}} no Ecr\xe3 Inicial",
                "sdk-modal-title": "Associa com a Binance",
                "sdk-no-app": "Ainda n\xe3o tens a aplica\xe7\xe3o Binance?"
            },
            "ro-RO": {
                "sdk-download-android": "Desc\u0103rca\u021bi pentru Android",
                "sdk-connect": "Conectare",
                "sdk-download-ios": "Desc\u0103rca\u021bi pentru iOS",
                "sdk-install": "Instala\u021bi",
                "sdk-modal-instruct-1": "1. Deschide\u021bi aplica\u021bia Binance",
                "sdk-modal-instruct-2": "2. Atinge\u021bi {{icon}} pe ecranul de pornire",
                "sdk-modal-title": "Conecta\u021bi-v\u0103 cu Binance",
                "sdk-no-app": "Nu ave\u021bi \xeenc\u0103 aplica\u021bia Binance?"
            },
            "ru-RU": {
                "sdk-download-android": "\u0421\u043a\u0430\u0447\u0430\u0442\u044c \u0434\u043b\u044f Android",
                "sdk-connect": "\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c",
                "sdk-download-ios": "\u0421\u043a\u0430\u0447\u0430\u0442\u044c \u0434\u043b\u044f iOS",
                "sdk-install": "\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c",
                "sdk-modal-instruct-1": "1. \u041e\u0442\u043a\u0440\u043e\u0439\u0442\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 Binance",
                "sdk-modal-instruct-2": "2. \u041d\u0430\u0436\u043c\u0438\u0442\u0435 {{icon}} \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u043e\u043c \u044d\u043a\u0440\u0430\u043d\u0435",
                "sdk-modal-title": "\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u043a\u043e\u0448\u0435\u043b\u0435\u043a Binance",
                "sdk-no-app": "\u0423 \u0432\u0430\u0441 \u0435\u0449\u0435 \u043d\u0435\u0442 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f Binance?"
            },
            "sk-SK": {
                "sdk-download-android": "Stiahnu\u0165 pre Android",
                "sdk-connect": "Pripoji\u0165",
                "sdk-download-ios": "Stiahnu\u0165 pre iOS",
                "sdk-install": "Nain\u0161talova\u0165",
                "sdk-modal-instruct-1": "1. Otvorte aplik\xe1ciu Binance",
                "sdk-modal-instruct-2": "2. Klepnite na ikonu {{icon}} na domovskej obrazovke",
                "sdk-modal-title": "Spojte sa s\xa0Binance",
                "sdk-no-app": "E\u0161te nem\xe1te aplik\xe1ciu Binance?"
            },
            "sl-SI": {
                "sdk-download-android": "Prenos za Android",
                "sdk-connect": "Pove\u017ei",
                "sdk-download-ios": "Prenos za iOS",
                "sdk-install": "Namesti",
                "sdk-modal-instruct-1": "1. Odprite aplikacijo Binance",
                "sdk-modal-instruct-2": "2. Tapnite {{icon}} na za\u010detnem zaslonu",
                "sdk-modal-title": "Pove\u017eite se s platformo Binance",
                "sdk-no-app": "\u0160e nimate aplikacije Binance?"
            },
            "es-LA": {
                "sdk-download-android": "Descargar para Android",
                "sdk-connect": "Conecta",
                "sdk-download-ios": "Descargar para iOS",
                "sdk-install": "Instala",
                "sdk-modal-instruct-1": "1. Abre la aplicaci\xf3n de Binance",
                "sdk-modal-instruct-2": "2. Toca {{icon}} en la pantalla de inicio",
                "sdk-modal-title": "Conectar con Binance",
                "sdk-no-app": "\xbfA\xfan no tienes la aplicaci\xf3n de Binance?"
            },
            "es-ES": {
                "sdk-download-android": "Descargar para Android",
                "sdk-connect": "Conectar",
                "sdk-download-ios": "Descargar para iOS",
                "sdk-install": "Instalar",
                "sdk-modal-instruct-1": "1. Open Binance app",
                "sdk-modal-instruct-2": "2. Pulsa en {{icon}} en la p\xe1gina principal",
                "sdk-modal-title": "Connect With Binance",
                "sdk-no-app": "\xbfA\xfan no tienes la aplicaci\xf3n de Binance?"
            },
            "sv-SE": {
                "sdk-download-android": "Ladda ned f\xf6r Android",
                "sdk-connect": "Anslut",
                "sdk-download-ios": "Ladda ned f\xf6r iOS",
                "sdk-install": "Installera",
                "sdk-modal-instruct-1": "1. \xd6ppna Binance-appen",
                "sdk-modal-instruct-2": "2. Tryck p\xe5 {{icon}} p\xe5 startsk\xe4rmen",
                "sdk-modal-title": "Anslut med Binance",
                "sdk-no-app": "Har du inte Binance-appen \xe4nnu?"
            },
            "tr-TR": {
                "sdk-download-android": "Android i\xe7in indir",
                "sdk-connect": "Ba\u011flan",
                "sdk-download-ios": "iOS i\xe7in indir",
                "sdk-install": "Y\xfckle",
                "sdk-modal-instruct-1": "1. Binance Uygulamas\u0131n\u0131 A\xe7\u0131n",
                "sdk-modal-instruct-2": "2. Ana Ekranda {{icon}} simgesine dokunun",
                "sdk-modal-title": "Binance ile Ba\u011flan\u0131n",
                "sdk-no-app": "Hen\xfcz Binance uygulaman\u0131z yok mu?"
            },
            "uk-UA": {
                "sdk-download-android": "\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0438\u0442\u0438 \u0434\u043b\u044f Android",
                "sdk-connect": "\u041f\u0456\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u0438\u0441\u044c",
                "sdk-download-ios": "\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0438\u0442\u0438 \u0434\u043b\u044f iOS",
                "sdk-install": "\u0412\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0438",
                "sdk-modal-instruct-1": "1. \u0412\u0456\u0434\u043a\u0440\u0438\u0439\u0442\u0435 \u0437\u0430\u0441\u0442\u043e\u0441\u0443\u043d\u043e\u043a Binance",
                "sdk-modal-instruct-2": "2. \u0422\u043e\u0440\u043a\u043d\u0456\u0442\u044c\u0441\u044f {{icon}} \u043d\u0430 \u0433\u043e\u043b\u043e\u0432\u043d\u043e\u043c\u0443 \u0435\u043a\u0440\u0430\u043d\u0456",
                "sdk-modal-title": "\u041f\u0456\u0434\u043a\u043b\u044e\u0447\u0456\u0442\u044c\u0441\u044f \u0434\u043e Binance",
                "sdk-no-app": "\u0429\u0435 \u043d\u0435 \u043c\u0430\u0454\u0442\u0435 \u0437\u0430\u0441\u0442\u043e\u0441\u0443\u043d\u043a\u0443 Binance?"
            },
            "vi-VN": {
                "sdk-download-android": "T\u1ea3i xu\u1ed1ng cho Android",
                "sdk-connect": "K\u1ebft n\u1ed1i",
                "sdk-download-ios": "T\u1ea3i xu\u1ed1ng cho iOS",
                "sdk-install": "C\xe0i \u0111\u1eb7t",
                "sdk-modal-instruct-1": "1. M\u1edf \u1ee9ng d\u1ee5ng Binance",
                "sdk-modal-instruct-2": "2. Nh\u1ea5n v\xe0o {{icon}} tr\xean M\xe0n h\xecnh ch\xednh",
                "sdk-modal-title": "K\u1ebft n\u1ed1i v\u1edbi Binance",
                "sdk-no-app": "B\u1ea1n ch\u01b0a c\xf3 \u1ee9ng d\u1ee5ng Binance?"
            },
            "da-DK": {
                "sdk-download-android": "Download til Android",
                "sdk-connect": "Forbind",
                "sdk-download-ios": "Download til iOS",
                "sdk-install": "Installer",
                "sdk-modal-instruct-1": "1. \xc5bn Binance-appen",
                "sdk-modal-instruct-2": "2. Tryk p\xe5 {{icon}} p\xe5 startsk\xe6rmen",
                "sdk-modal-title": "Forbind til Binance",
                "sdk-no-app": "Har du ikke Binance-appen endnu?"
            },
            "my-MM": {
                "sdk-download-android": "\u1021\u1014\u103a\u1038\u1012\u101b\u103d\u102d\u102f\u1000\u103a\u1021\u1010\u103d\u1000\u103a \u1012\u1031\u102b\u1004\u103a\u1038\u101c\u102f\u1012\u103a\u101c\u102f\u1015\u103a\u1019\u100a\u103a",
                "sdk-connect": "\u1001\u103b\u102d\u1010\u103a\u1006\u1000\u103a\u1019\u100a\u103a",
                "sdk-download-ios": "iOS \u1021\u1010\u103d\u1000\u103a \u1012\u1031\u102b\u1004\u103a\u1038\u101c\u102f\u1012\u103a\u101c\u102f\u1015\u103a\u1019\u100a\u103a",
                "sdk-install": "\u1011\u100a\u1037\u103a\u101e\u103d\u1004\u103a\u1038\u1019\u100a\u103a",
                "sdk-modal-instruct-1": "1. Open Binance app",
                "sdk-modal-instruct-2": "\u1015\u1004\u103a\u1019\u1019\u103b\u1000\u103a\u1014\u103e\u102c\u1015\u103c\u1004\u103a\u1019\u103e {{icon}} \u1000\u102d\u102f\u1014\u103e\u102d\u1015\u103a\u1015\u102b\u104b",
                "sdk-modal-title": "Connect With Binance",
                "sdk-no-app": "Binance App \u1019\u101b\u103e\u102d\u101e\u1031\u1038\u1018\u1030\u1038\u101c\u102c\u1038\u104b"
            },
            "lo-LA": {
                "sdk-download-android": "\u0e94\u0eb2\u0ea7\u0ec2\u0eab\u0ebc\u0e94\u0eaa\u0ecd\u0eb2\u0ea5\u0eb1\u0e9a Android",
                "sdk-connect": "\u0ec0\u0e8a\u0eb7\u0ec8\u0ead\u0ea1\u0e95\u0ecd\u0ec8",
                "sdk-download-ios": "\u0e94\u0eb2\u0ea7\u0ec2\u0eab\u0ebc\u0e94\u0eaa\u0ecd\u0eb2\u0ea5\u0eb1\u0e9a iOS",
                "sdk-install": "\u0e95\u0eb4\u0e94\u0e95\u0eb1\u0ec9\u0e87",
                "sdk-modal-instruct-1": "1. \u0ec0\u0e9b\u0eb5\u0e94\u0ec1\u0ead\u0eb1\u0e9a Binance",
                "sdk-modal-instruct-2": "2. \u0ec1\u0e95\u0eb0 {{icon}} \u0ec3\u0e99\u0edc\u0ec9\u0eb2\u0e88\u0ecd\u0eab\u0ebc\u0eb1\u0e81",
                "sdk-modal-title": "\u0ec0\u0e8a\u0eb7\u0ec8\u0ead\u0ea1\u0e95\u0ecd\u0ec8\u0e81\u0eb1\u0e9a Binance",
                "sdk-no-app": "\u0e8d\u0eb1\u0e87\u0e9a\u0ecd\u0ec8\u0ea1\u0eb5\u0ec1\u0ead\u0eb1\u0e9a Binance \u0ec0\u0e97\u0eb7\u0ec8\u0ead\u0e9a\u0ecd?"
            },
            "si-LK": {
                "sdk-download-android": "Android \u0dc3\u0db3\u0dc4\u0dcf \u0db6\u0dcf\u0d9c\u0dad \u0d9a\u0dbb\u0db1\u0dca\u0db1",
                "sdk-connect": "\u0dc3\u0db8\u0dca\u0db6\u0db1\u0dca\u0db0 \u0d9a\u0dbb\u0db1\u0dca\u0db1",
                "sdk-download-ios": "iOS \u0dc3\u0db3\u0dc4\u0dcf \u0db6\u0dcf\u0d9c\u0dad \u0d9a\u0dbb\u0db1\u0dca\u0db1",
                "sdk-install": "\u0dc3\u0dca\u0dae\u0dcf\u0db4\u0db1\u0dba \u0d9a\u0dbb\u0db1\u0dca\u0db1",
                "sdk-modal-instruct-1": "1. Binance \u0dba\u0dd9\u0daf\u0dd4\u0db8 \u0dc0\u0dd2\u0dc0\u0dd8\u0dad \u0d9a\u0dbb\u0db1\u0dca\u0db1",
                "sdk-modal-instruct-2": "2. \u0db8\u0dd4\u0dbd\u0dca \u0dad\u0dd2\u0dbb\u0dba\u0dda {{icon}} \u0db8\u0dad \u0dad\u0da7\u0dca\u0da7\u0dd4 \u0d9a\u0dbb\u0db1\u0dca\u0db1",
                "sdk-modal-title": "Binance \u0dc3\u0db8\u0d9c \u0dc3\u0db8\u0dca\u0db6\u0db1\u0dca\u0db0 \u0dc0\u0db1\u0dca\u0db1",
                "sdk-no-app": "\u0dad\u0dc0\u0db8\u0dad\u0dca Binance \u0dba\u0dd9\u0daf\u0dd4\u0db8 \u0db1\u0dd0\u0dad\u0dd2 \u0daf?"
            }
        }
          , P = ["en", "ar", "bg-BG", "zh-CN", "zh-TW", "cs-CZ", "fr-FR", "de-DE", "el-GR", "id-ID", "it-IT", "kk-KZ", "lv-LV", "pl-PL", "pt-BR", "pt-PT", "ro-RO", "ru-RU", "sk-SK", "sl-SI", "es-LA", "es-ES", "sv-SE", "tr-TR", "uk-UA", "vi-VN", "da-DK", "my-MM", "lo-LA", "si-LK"].reduce((function(n, e) {
            return n[e] = B[e],
            n
        }
        ), {})
          , R = P
          , D = function() {
            var n = (0,
            k.useContext)(W).lng;
            return (0,
            k.useCallback)((function(e, t) {
                var r, i;
                return (null === R || void 0 === R || null === (r = R[n]) || void 0 === r ? void 0 : r[e]) || (null === R || void 0 === R || null === (i = R.en) || void 0 === i ? void 0 : i[e]) || (null === t || void 0 === t ? void 0 : t.default) || e
            }
            ), [n])
        }
          , z = function(n) {
            var e = n.size
              , t = void 0 === e ? 24 : e
              , r = n.color
              , i = void 0 === r ? "currentColor" : r
              , o = n.className
              , a = n.children
              , s = x(n, ["size", "color", "className", "children"]);
            return k.createElement("svg", I({
                width: t,
                height: t,
                fill: i,
                className: o,
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg"
            }, s), a)
        }
          , L = function(n) {
            return k.createElement(z, I({
                size: 24
            }, n), k.createElement("path", {
                d: "M21.7725 18.7033C21.4062 19.5418 20.9727 20.3136 20.4704 21.0232C19.7857 21.9906 19.2251 22.6602 18.7931 23.032C18.1233 23.6424 17.4058 23.955 16.6374 23.9728C16.0857 23.9728 15.4205 23.8172 14.6461 23.5017C13.8692 23.1876 13.1552 23.032 12.5024 23.032C11.8177 23.032 11.0834 23.1876 10.2979 23.5017C9.51127 23.8172 8.87756 23.9816 8.39305 23.9979C7.65619 24.0291 6.92173 23.7076 6.1886 23.032C5.72069 22.6276 5.13542 21.9343 4.43429 20.9521C3.68203 19.9033 3.06358 18.687 2.57906 17.3004C2.06017 15.8026 1.80005 14.3523 1.80005 12.9482C1.80005 11.3398 2.15076 9.95259 2.85324 8.79011C3.40532 7.85636 4.13979 7.11979 5.05903 6.57906C5.97827 6.03834 6.97151 5.76279 8.04114 5.74516C8.62641 5.74516 9.39391 5.92456 10.3477 6.27715C11.2988 6.63091 11.9095 6.81032 12.1772 6.81032C12.3774 6.81032 13.0558 6.60054 14.2058 6.18233C15.2934 5.79449 16.2113 5.63391 16.9633 5.69716C19.0009 5.86012 20.5317 6.6561 21.5497 8.09013C19.7274 9.18432 18.826 10.7169 18.8439 12.6829C18.8603 14.2142 19.4209 15.4886 20.5227 16.5004C21.022 16.97 21.5796 17.333 22.2001 17.5907C22.0655 17.9774 21.9235 18.3477 21.7725 18.7033ZM17.0993 0.480137C17.0993 1.68041 16.6568 2.8011 15.7748 3.8384C14.7104 5.07155 13.4229 5.78412 12.0268 5.67168C12.009 5.52769 11.9987 5.37614 11.9987 5.21688C11.9987 4.06462 12.5049 2.83147 13.4038 1.82321C13.8526 1.3127 14.4234 0.888228 15.1155 0.549615C15.8062 0.216055 16.4595 0.031589 17.0739 0C17.0918 0.160458 17.0993 0.320926 17.0993 0.480121V0.480137Z",
                fill: "#1E2329"
            }))
        }
          , Z = function(n) {
            return k.createElement(z, I({
                size: 24
            }, n), k.createElement("path", {
                d: "M13.5589 11.0874L4.08203 1.59644H4.17441C4.98558 1.59644 5.68614 1.89129 6.81073 2.4993L16.7488 7.88083L13.5589 11.0874Z",
                fill: "#202630"
            }), k.createElement("path", {
                d: "M12.6373 12.008L2.90218 21.7203C2.66236 21.3329 2.49658 20.7063 2.49658 19.8034V4.19354C2.49658 3.29078 2.66236 2.66403 2.90218 2.2771L12.6373 12.008Z",
                fill: "#202630"
            }), k.createElement("path", {
                d: "M13.5589 12.9124L16.7488 16.1187L6.81073 21.5001C5.68614 22.1083 4.98548 22.4036 4.17441 22.4036H4.08203L13.5589 12.9124Z",
                fill: "#202630"
            }), k.createElement("path", {
                d: "M17.9437 8.52563L14.4775 12.0091L17.9437 15.4738L20.0456 14.3309C20.8199 13.9069 22 13.1329 22 12.0091C22 10.8662 20.8199 10.0922 20.0456 9.66821L17.9437 8.52563Z",
                fill: "#202630"
            }))
        }
          , H = function(n) {
            return k.createElement(z, I({
                size: 24
            }, n), k.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M7.5 4H10.5V7H7.5V10H4.5V7V4H7.5ZM14.5 4H17.5H20.5V7V10H17.5V7H14.5V4ZM10.5 20V17H7.5V14H4.5V17V20H7.5H10.5ZM17.5 20H14.5V17H17.5V14H20.5V17V20H17.5ZM16.5 10.5H8.5V13.5H16.5V10.5Z",
                fill: "#202630"
            }))
        }
          , F = function(n) {
            var e = n.value
              , t = x(n, ["value"])
              , r = q(e).map((function(n) {
                return "string" == typeof n ? n : k.cloneElement(t[n.key], {
                    key: n.key
                })
            }
            ));
            return k.createElement(k.Fragment, null, r)
        }
          , q = function(n) {
            for (var e, t = /{{(.*?)}}/g, r = 0, i = []; null !== (e = t.exec(n)); )
                e.index !== r && i.push(n.substring(r, e.index)),
                i.push({
                    key: e[1]
                }),
                r = t.lastIndex;
            return r !== n.length && i.push(n.substring(r)),
            i
        }
          , V = function() {
            var n = D();
            return k.createElement(k.Fragment, null, k.createElement(Q, {
                t: n
            }), k.createElement(U, {
                t: n
            }), k.createElement(G, null))
        }
          , Q = function(n) {
            var e = n.t;
            return k.createElement("div", {
                style: {
                    borderBottom: "1px solid #EAECEF"
                },
                className: "grid justify-center gap-y-2 pb-6 w3w-body3 w3w-t-black border-b border-gray-300"
            }, k.createElement("div", null, e("sdk-modal-instruct-1", {
                default: "1. Open Binance app"
            })), k.createElement("div", {
                className: "flex items-center"
            }, k.createElement(F, {
                value: e("sdk-modal-instruct-2", {
                    default: "2. Tap {{icon}} on Home"
                }),
                icon: k.createElement(H, {
                    className: "w-[24px] h-[24px] mx-[4px]"
                })
            })))
        }
          , U = function(n) {
            var e = n.t;
            return k.createElement("div", {
                className: "py-4 w3w-body3 w3w-t-secondary text-center"
            }, e("sdk-no-app", {
                default: "Don't have Binance app yet?"
            }))
        }
          , G = function() {
            return k.createElement("div", {
                className: "grid grid-cols-2 gap-x-4"
            }, k.createElement(J, {
                type: "iOS"
            }), k.createElement(J, {
                type: "Android"
            }))
        }
          , J = function(n) {
            var e = n.type
              , t = D();
            return k.createElement("div", {
                style: {
                    border: "1px solid #EAECEF"
                },
                className: "p-[12px] rounded-lg grid cursor-pointer w3w-t-secondary grid-flow-col items-center gap-x-4 w-[150px]",
                onClick: function() {
                    window.open("Android" === e ? M : T, "_blank")
                }
            }, "Android" === e ? k.createElement(Z, {
                className: "w-[24px] h-[24px] m-auto"
            }) : k.createElement(L, {
                className: "w-[24px] h-[24px] m-auto"
            }), k.createElement("div", {
                className: "w-[75px] w3w-caption2 w3w-t-secondary"
            }, t("sdk-download-".concat(e.toLowerCase()), {
                default: "Download for ".concat(e)
            })))
        }
          , Y = function(n) {
            return k.createElement(z, I({}, n), k.createElement("path", {
                d: "M6.69708 4.57538L4.57576 6.6967L9.87906 12L4.57576 17.3033L6.69708 19.4246L12.0004 14.1213L17.3037 19.4246L19.425 17.3033L14.1217 12L19.425 6.6967L17.3037 4.57538L12.0004 9.87868L6.69708 4.57538Z",
                fill: "currentColor"
            }))
        }
          , K = function(n) {
            var e = n.onClose
              , t = D();
            return k.createElement("div", {
                className: "flex items-center justify-between"
            }, k.createElement("p", {
                className: "text-base font-medium text-[#1E2329] lg:text-xl md:font-semibold md:w3w-subtitle1"
            }, t("sdk-modal-title", {
                default: "Connect with Binance"
            })), k.createElement("div", {
                className: "cursor-pointer text-[#929AA5]",
                onClick: e
            }, k.createElement(Y, null)))
        }
          , X = function(n) {
            var e = n.id
              , t = n.onClose
              , r = n.onConnect
              , i = D();
            return k.createElement("div", {
                id: e,
                className: "w3w-animated w3w-fadeIn pointer-events-auto fixed top-0 left-0 h-full w-full bg-black/[.80] duration-300 ease-in-out will-change-auto"
            }, k.createElement("div", {
                className: "absolute bottom-0 m-auto w-full rounded-t-2xl bg-white px-4 pb-6 shadow-inner duration-300 ease-in-out will-change-transform md:w-[400px]"
            }, k.createElement($, {
                onClose: t
            }), k.createElement("div", {
                className: "mt-6 mb-4 flex justify-center"
            }, k.createElement("img", {
                className: "w-[60px]",
                src: j
            })), k.createElement("div", {
                className: "w3w-subtitle1 text-center mb-6 w3w-t-primary"
            }, i("sdk-modal-title", {
                default: "Connect with Binance"
            })), k.createElement("button", {
                onClick: r,
                style: {
                    borderColor: "transparent"
                },
                className: "w-full rounded h-[40px] flex justify-center items-center w3w-bg-primary w3w-t-primary w3w-subtitle3 mb-4"
            }, i("sdk-connect", {
                default: "Connect"
            })), k.createElement("div", {
                className: "text-center py-3 w3w-t-secondary"
            }, k.createElement("span", null, i("sdk-no-app", {
                default: "Don\u2019t have Binance app yet?"
            })), k.createElement("a", {
                target: "_blank",
                href: "https://www.binance.com/en/download",
                className: "w3w-t-brand ml-1"
            }, i("sdk-install", {
                default: "Install"
            })))))
        }
          , $ = function(n) {
            var e = n.onClose;
            return k.createElement("div", {
                className: "flex items-center justify-end h-[52px]"
            }, k.createElement("div", {
                className: "cursor-pointer text-[#929AA5]",
                onClick: e
            }, k.createElement(Y, {
                className: "w-[20px]"
            })))
        }
          , nn = function(n) {
            var e = document.createElement("a");
            e.href = n,
            document.body.appendChild(e),
            function(n, e) {
                var t = "visibilitychange"
                  , r = setTimeout((function() {
                    document.hidden || n()
                }
                ), e)
                  , i = function() {
                    document.hidden && (clearTimeout(r),
                    document.removeEventListener(t, i))
                };
                document.addEventListener(t, i, !1)
            }((function() {
                window.location.href = "https://www.binance.com/en/download"
            }
            ), 1e3),
            e.click(),
            document.body.removeChild(e)
        };
        var en = function(n) {
            var e = function(n) {
                var e = N()
                  , t = e.isAndroid
                  , i = e.isMobile;
                return {
                    toBinance: function() {
                        var e = (0,
                        r.wS)(t, n);
                        if (i) {
                            if (!t) {
                                var o = document.createElement("a");
                                o.href = e,
                                document.body.appendChild(o),
                                o.click(),
                                document.body.removeChild(o)
                            }
                            t && nn(e)
                        }
                    }
                }
            }(n.url)
              , t = e.toBinance;
            return k.createElement("div", null, k.createElement("div", {
                className: "mt-[35px] flex justify-center"
            }, k.createElement("div", {
                className: "w-[200px] h-[200px] mb-4",
                onClick: t
            }, n.url && k.createElement(v.QRCodeSVG, {
                value: n.url,
                width: "100%",
                height: "100%",
                level: "M",
                imageSettings: {
                    src: j,
                    height: 32,
                    width: 32,
                    excavate: !1
                }
            }))))
        }
          , tn = function(n) {
            var e = n.onClose
              , t = n.isReady
              , i = N().isMobile
              , o = E((0,
            k.useState)(""), 2)
              , a = o[0]
              , s = o[1]
              , c = E((0,
            k.useState)(!1), 2)
              , l = c[0]
              , u = c[1];
            (0,
            k.useEffect)((function() {
                t.then(s).catch((function() {
                    return u(!0)
                }
                ))
            }
            ), [t]);
            var d = {
                url: a,
                error: l
            };
            return !1 === i ? k.createElement("div", {
                id: A,
                className: "w3w-animated w3w-fadeIn pointer-events-auto fixed top-0 left-0 h-full w-full bg-black/[.80] duration-300 ease-in-out will-change-auto"
            }, k.createElement("div", {
                style: {
                    transform: "translateY(-50%)",
                    top: "50%"
                },
                className: "relative m-auto w-[343px] rounded-2xl bg-white px-6 pt-[20px] pb-6 shadow-inner duration-300 ease-in-out will-change-transform md:w-[400px] lg:p-8 lg:pt-6"
            }, k.createElement(K, {
                onClose: e
            }), k.createElement(en, I({}, d)), k.createElement(V, null))) : i ? k.createElement(X, {
                onConnect: function() {
                    (0,
                    r.jm)(a)
                },
                onClose: e,
                id: A
            }) : void 0
        }
          , rn = {
            order: ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag", "path", "subdomain"],
            lookupQuerystring: function() {
                var n = window.location.search.match(/lng=([^&]*)/);
                return n && n[1]
            },
            lookupCookie: function() {
                var n = document.cookie.match(/i18next=([^;]*)/);
                return n && n[1]
            },
            lookupLocalStorage: function() {
                return localStorage.getItem("i18nextLng")
            },
            lookupSessionStorage: function() {
                return sessionStorage.getItem("i18nextLng")
            },
            lookupFromNavigator: function() {
                return navigator.language
            },
            lookupFromHtmlTag: function() {
                return document.documentElement.lang
            },
            lookupFromPath: function() {
                var n = window.location.pathname.match(/\/([^/]*)/);
                return n && n[1]
            },
            lookupFromSubdomain: function() {
                var n = window.location.hostname.match(/^(.+)\./);
                return n && n[1]
            }
        }
          , on = function() {
            var n = !0
              , e = !1
              , t = void 0;
            try {
                for (var r, i = rn.order[Symbol.iterator](); !(n = (r = i.next()).done); n = !0) {
                    var o = r.value;
                    try {
                        var a = rn["lookup" + o.charAt(0).toUpperCase() + o.slice(1)]();
                        if (a)
                            return a
                    } catch (n) {
                        console.error("Error detecting language with method: ".concat(o), n);
                        continue
                    }
                }
            } catch (n) {
                e = !0,
                t = n
            } finally {
                try {
                    n || null == i.return || i.return()
                } finally {
                    if (e)
                        throw t
                }
            }
            return "en"
        };
        function an() {
            var n = window.document
              , e = n.getElementById(A);
            e && (e.className = e.className.replace("w3w-fadeIn", "w3w-fadeOut"),
            setTimeout((function() {
                var e = n.getElementById(_);
                e && n.body.removeChild(e)
            }
            ), 300))
        }
        function sn(n) {
            return function() {
                an(),
                n && n()
            }
        }
        function cn() {
            return cn = function(n) {
                return function() {
                    var e = this
                      , t = arguments;
                    return new Promise((function(r, i) {
                        var o = n.apply(e, t);
                        function a(n) {
                            C(o, r, i, a, s, "next", n)
                        }
                        function s(n) {
                            C(o, r, i, a, s, "throw", n)
                        }
                        a(void 0)
                    }
                    ))
                }
            }((function(n) {
                var e, t, r, i, o, a;
                return function(n, e) {
                    var t, r, i, o, a = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0])
                                throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    },
                    "function" === typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }
                    ),
                    o;
                    function s(n) {
                        return function(e) {
                            return c([n, e])
                        }
                    }
                    function c(o) {
                        if (t)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (t = 1,
                                r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r),
                                0) : r.next) && !(i = i.call(r, o[1])).done)
                                    return i;
                                switch (r = 0,
                                i && (o = [2 & o[0], i.value]),
                                o[0]) {
                                case 0:
                                case 1:
                                    i = o;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    r = o[1],
                                    o = [0];
                                    continue;
                                case 7:
                                    o = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                        a.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && a.label < i[1]) {
                                        a.label = i[1],
                                        i = o;
                                        break
                                    }
                                    if (i && a.label < i[2]) {
                                        a.label = i[2],
                                        a.ops.push(o);
                                        break
                                    }
                                    i[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                o = e.call(n, a)
                            } catch (n) {
                                o = [6, n],
                                r = 0
                            } finally {
                                t = i = 0
                            }
                        if (5 & o[0])
                            throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }
                }(this, (function(s) {
                    switch (s.label) {
                    case 0:
                        return e = n.isReady,
                        t = n.cb,
                        r = n.lng,
                        i = function() {
                            var n = window.document
                              , e = n.createElement("div");
                            return e.setAttribute("id", _),
                            n.body.appendChild(e),
                            e
                        }(),
                        o = (0,
                        b.createRoot)(i),
                        [4, e];
                    case 1:
                        return s.sent(),
                        a = null !== r && void 0 !== r ? r : on(),
                        o.render(k.createElement(W.Provider, {
                            value: {
                                lng: a
                            }
                        }, k.createElement("style", {
                            dangerouslySetInnerHTML: {
                                __html: O
                            }
                        }), k.createElement(tn, {
                            isReady: e,
                            onClose: sn(t)
                        }))),
                        [2]
                    }
                }
                ))
            }
            )),
            cn.apply(this, arguments)
        }
        var ln = function(n) {}
          , un = function() {};
        var dn = {
            open: function(n) {
                var e = n.cb
                  , t = n.lng
                  , i = new Promise((function(n, e) {
                    ln = n,
                    un = e
                }
                ));
                (0,
                r.UG)() || function(n) {
                    cn.apply(this, arguments)
                }({
                    isReady: i,
                    cb: e,
                    lng: t
                })
            },
            close: function() {
                (0,
                r.UG)() || an()
            },
            ready: function(n) {
                ln(n)
            },
            fail: function() {
                console.log("relay failed...."),
                un()
            }
        }
          , pn = dn
          , fn = t(31630);
        function hn(n) {
            if (void 0 === n)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return n
        }
        function mn(n, e) {
            for (var t = 0; t < e.length; t++) {
                var r = e[t];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(n, r.key, r)
            }
        }
        function wn(n) {
            return wn = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
                return n.__proto__ || Object.getPrototypeOf(n)
            }
            ,
            wn(n)
        }
        function yn(n, e) {
            return yn = Object.setPrototypeOf || function(n, e) {
                return n.__proto__ = e,
                n
            }
            ,
            yn(n, e)
        }
        function kn(n) {
            return n && "undefined" !== typeof Symbol && n.constructor === Symbol ? "symbol" : typeof n
        }
        function bn(n) {
            var e = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" === typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (n) {
                    return !1
                }
            }();
            return function() {
                var t, r = wn(n);
                if (e) {
                    var i = wn(this).constructor;
                    t = Reflect.construct(r, arguments, i)
                } else
                    t = r.apply(this, arguments);
                return function(n, e) {
                    return !e || "object" !== kn(e) && "function" !== typeof e ? hn(n) : e
                }(this, t)
            }
        }
        var vn = Object.defineProperty
          , gn = function(n, e, t) {
            return function(n, e, t) {
                e in n ? vn(n, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                }) : n[e] = t
            }(n, "symbol" != ("undefined" === typeof e ? "undefined" : kn(e)) ? e + "" : e, t),
            t
        }
          , Cn = ("undefined" === typeof window ? "undefined" : kn(window)) < "u" ? window.WebSocket : fn
          , Sn = function(n) {
            !function(n, e) {
                if ("function" !== typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function");
                n.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: n,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && yn(n, e)
            }(t, n);
            var e = bn(t);
            function t(n) {
                var r;
                return function(n, e) {
                    if (!(n instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                (r = e.call(this)).opts = n,
                gn(hn(r), "qs"),
                gn(hn(r), "urls", []),
                gn(hn(r), "url"),
                gn(hn(r), "socket"),
                gn(hn(r), "nextSocket"),
                gn(hn(r), "queue", []),
                gn(hn(r), "subscriptions", []),
                gn(hn(r), "retryIndex", 0),
                r.socket = null,
                r.nextSocket = null,
                r.subscriptions = n.subscriptions || [],
                r.qs = "env=browser&protocol=wc&version=".concat(n.version),
                r
            }
            return function(n, e, t) {
                e && mn(n.prototype, e),
                t && mn(n, t)
            }(t, [{
                key: "readyState",
                get: function() {
                    return this.socket ? this.socket.readyState : -1
                },
                set: function(n) {}
            }, {
                key: "connecting",
                get: function() {
                    return 0 === this.readyState
                },
                set: function(n) {}
            }, {
                key: "connected",
                get: function() {
                    return 1 === this.readyState
                },
                set: function(n) {}
            }, {
                key: "retryFailed",
                get: function() {
                    return this.retryIndex > 0 && this.retryIndex > this.urls.length
                },
                set: function(n) {}
            }, {
                key: "open",
                value: function(n) {
                    if (!Array.isArray(n) || 0 === n.length)
                        throw new Error("Missing or invalid WebSocket url");
                    this.urls = n,
                    this.retryIndex = 0,
                    this.socketCreate()
                }
            }, {
                key: "close",
                value: function() {
                    this._socketClose()
                }
            }, {
                key: "send",
                value: function(n, e, t) {
                    if (!e || "string" != typeof e)
                        throw new Error("Missing or invalid topic field");
                    this.socketSend({
                        topic: e,
                        type: "pub",
                        payload: n,
                        silent: !!t
                    })
                }
            }, {
                key: "subscribe",
                value: function(n) {
                    this.socketSend({
                        topic: n,
                        type: "sub",
                        payload: "",
                        silent: !0
                    })
                }
            }, {
                key: "socketCreate",
                value: function() {
                    var n = this;
                    if (!this.nextSocket) {
                        var e = this.url || this.getWsUrl();
                        if (!e)
                            return this.events.emit("error", new Error("Retry limit reached. Can't connect to any url."), e);
                        if (this.url = e,
                        this.nextSocket = new Cn(e),
                        !this.nextSocket)
                            throw new Error("Failed to create socket");
                        this.nextSocket.onmessage = function(e) {
                            return n.socketReceive(e)
                        }
                        ,
                        this.nextSocket.onopen = function() {
                            return n.socketOpen()
                        }
                        ,
                        this.nextSocket.onerror = function(t) {
                            return n.socketError(t, e)
                        }
                        ,
                        this.nextSocket.onclose = function(e) {
                            n.nextSocket = null,
                            n.socketCreate()
                        }
                    }
                }
            }, {
                key: "getWsUrl",
                value: function() {
                    return this.retryIndex >= this.urls.length ? "" : "".concat(this.urls[this.retryIndex++], "?").concat(this.qs)
                }
            }, {
                key: "socketOpen",
                value: function() {
                    this._socketClose(),
                    this.socket = this.nextSocket,
                    this.nextSocket = null,
                    this.queueSubscriptions(),
                    this.pushQueue(),
                    this.events.emit("open", this.urls[this.retryIndex - 1])
                }
            }, {
                key: "_socketClose",
                value: function() {
                    this.socket && (this.socket.onclose = function() {}
                    ,
                    this.socket.close(),
                    this.events.emit("close"))
                }
            }, {
                key: "socketSend",
                value: function(n) {
                    var e = JSON.stringify(n);
                    this.socket && 1 === this.socket.readyState ? this.socket.send(e) : this.setToQueue(n)
                }
            }, {
                key: "socketReceive",
                value: function(n) {
                    var e;
                    try {
                        e = JSON.parse(n.data)
                    } catch (n) {
                        return
                    }
                    this.socketSend({
                        topic: e.topic,
                        type: "ack",
                        payload: "",
                        silent: !0
                    }),
                    this.socket && 1 === this.socket.readyState && this.events.emit("message", e)
                }
            }, {
                key: "socketError",
                value: function(n, e) {
                    this.events.emit("error", n, e)
                }
            }, {
                key: "queueSubscriptions",
                value: function() {
                    var n = this;
                    this.subscriptions.forEach((function(e) {
                        return n.queue.push({
                            topic: e,
                            type: "sub",
                            payload: "",
                            silent: !0
                        })
                    }
                    )),
                    this.subscriptions = this.opts.subscriptions || []
                }
            }, {
                key: "setToQueue",
                value: function(n) {
                    this.queue.push(n)
                }
            }, {
                key: "pushQueue",
                value: function() {
                    var n = this;
                    this.queue.forEach((function(e) {
                        return n.socketSend(e)
                    }
                    )),
                    this.queue = []
                }
            }]),
            t
        }(r.zW);
        function In(n) {
            if (void 0 === n)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return n
        }
        function xn(n, e) {
            if (!(n instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        function En(n) {
            return En = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
                return n.__proto__ || Object.getPrototypeOf(n)
            }
            ,
            En(n)
        }
        function On(n, e) {
            if ("function" !== typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function");
            n.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: n,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && Wn(n, e)
        }
        function Wn(n, e) {
            return Wn = Object.setPrototypeOf || function(n, e) {
                return n.__proto__ = e,
                n
            }
            ,
            Wn(n, e)
        }
        function _n(n) {
            return n && "undefined" !== typeof Symbol && n.constructor === Symbol ? "symbol" : typeof n
        }
        function An(n) {
            var e = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" === typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (n) {
                    return !1
                }
            }();
            return function() {
                var t, r = En(n);
                if (e) {
                    var i = En(this).constructor;
                    t = Reflect.construct(r, arguments, i)
                } else
                    t = r.apply(this, arguments);
                return function(n, e) {
                    return !e || "object" !== _n(e) && "function" !== typeof e ? In(n) : e
                }(this, t)
            }
        }
        var Mn = Object.defineProperty
          , Tn = function(n, e, t) {
            return function(n, e, t) {
                e in n ? Mn(n, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                }) : n[e] = t
            }(n, "symbol" != ("undefined" === typeof e ? "undefined" : _n(e)) ? e + "" : e, t),
            t
        }
          , jn = function(n) {
            On(t, n);
            var e = An(t);
            function t() {
                return xn(this, t),
                e.apply(this, arguments)
            }
            return t
        }((function n() {
            xn(this, n),
            Tn(this, "events")
        }
        ))
          , Nn = (function(n) {
            On(t, n);
            var e = An(t);
            function t() {
                var n;
                return xn(this, t),
                n = e.call.apply(e, [this].concat(Array.prototype.slice.call(arguments))),
                Tn(In(n), "connection"),
                n
            }
        }(jn),
        function(n) {
            return n[n.DisconnectAtWallet = 0] = "DisconnectAtWallet",
            n[n.DisconnectAtClient = 1] = "DisconnectAtClient",
            n[n.NetworkError = 2] = "NetworkError",
            n
        }(Nn || {}))
          , Bn = t(36284)
          , Pn = t(46444)
          , Rn = t(61675);
        function Dn(n) {
            if (void 0 === n)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return n
        }
        function zn(n, e, t, r, i, o, a) {
            try {
                var s = n[o](a)
                  , c = s.value
            } catch (n) {
                return void t(n)
            }
            s.done ? e(c) : Promise.resolve(c).then(r, i)
        }
        function Ln(n) {
            return function() {
                var e = this
                  , t = arguments;
                return new Promise((function(r, i) {
                    var o = n.apply(e, t);
                    function a(n) {
                        zn(o, r, i, a, s, "next", n)
                    }
                    function s(n) {
                        zn(o, r, i, a, s, "throw", n)
                    }
                    a(void 0)
                }
                ))
            }
        }
        function Zn(n, e) {
            if (!(n instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        function Hn(n, e) {
            for (var t = 0; t < e.length; t++) {
                var r = e[t];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(n, r.key, r)
            }
        }
        function Fn(n, e, t) {
            return e && Hn(n.prototype, e),
            t && Hn(n, t),
            n
        }
        function qn(n) {
            return qn = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
                return n.__proto__ || Object.getPrototypeOf(n)
            }
            ,
            qn(n)
        }
        function Vn(n, e) {
            if ("function" !== typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function");
            n.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: n,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && Qn(n, e)
        }
        function Qn(n, e) {
            return Qn = Object.setPrototypeOf || function(n, e) {
                return n.__proto__ = e,
                n
            }
            ,
            Qn(n, e)
        }
        function Un(n) {
            return n && "undefined" !== typeof Symbol && n.constructor === Symbol ? "symbol" : typeof n
        }
        function Gn(n) {
            var e = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" === typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (n) {
                    return !1
                }
            }();
            return function() {
                var t, r = qn(n);
                if (e) {
                    var i = qn(this).constructor;
                    t = Reflect.construct(r, arguments, i)
                } else
                    t = r.apply(this, arguments);
                return function(n, e) {
                    return !e || "object" !== Un(e) && "function" !== typeof e ? Dn(n) : e
                }(this, t)
            }
        }
        function Jn(n, e) {
            var t, r, i, o, a = {
                label: 0,
                sent: function() {
                    if (1 & i[0])
                        throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: s(0),
                throw: s(1),
                return: s(2)
            },
            "function" === typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function s(n) {
                return function(e) {
                    return c([n, e])
                }
            }
            function c(o) {
                if (t)
                    throw new TypeError("Generator is already executing.");
                for (; a; )
                    try {
                        if (t = 1,
                        r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r),
                        0) : r.next) && !(i = i.call(r, o[1])).done)
                            return i;
                        switch (r = 0,
                        i && (o = [2 & o[0], i.value]),
                        o[0]) {
                        case 0:
                        case 1:
                            i = o;
                            break;
                        case 4:
                            return a.label++,
                            {
                                value: o[1],
                                done: !1
                            };
                        case 5:
                            a.label++,
                            r = o[1],
                            o = [0];
                            continue;
                        case 7:
                            o = a.ops.pop(),
                            a.trys.pop();
                            continue;
                        default:
                            if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                a = 0;
                                continue
                            }
                            if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                a.label = o[1];
                                break
                            }
                            if (6 === o[0] && a.label < i[1]) {
                                a.label = i[1],
                                i = o;
                                break
                            }
                            if (i && a.label < i[2]) {
                                a.label = i[2],
                                a.ops.push(o);
                                break
                            }
                            i[2] && a.ops.pop(),
                            a.trys.pop();
                            continue
                        }
                        o = e.call(n, a)
                    } catch (n) {
                        o = [6, n],
                        r = 0
                    } finally {
                        t = i = 0
                    }
                if (5 & o[0])
                    throw o[1];
                return {
                    value: o[0] ? o[1] : void 0,
                    done: !0
                }
            }
        }
        var Yn = Object.defineProperty
          , Kn = function(n, e, t) {
            return function(n, e, t) {
                e in n ? Yn(n, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                }) : n[e] = t
            }(n, "symbol" != ("undefined" === typeof e ? "undefined" : Un(e)) ? e + "" : e, t),
            t
        }
          , Xn = "connect-session"
          , $n = "connect-domains"
          , ne = "wss://nbstream.binance.com/wallet-connector"
          , ee = ["https://rpc.ankr.com/bsc", "https://binance.nodereal.io", "https://bscrpc.com", "https://bsc-dataseed2.ninicoin.io"]
          , te = function(n) {
            Vn(t, n);
            var e = Gn(t);
            function t() {
                var n;
                return Zn(this, t),
                n = e.call.apply(e, [this].concat(Array.prototype.slice.call(arguments))),
                Kn(Dn(n), "pending", !1),
                Kn(Dn(n), "callbacks", new Map),
                Kn(Dn(n), "clientMeta"),
                Kn(Dn(n), "relay"),
                Kn(Dn(n), "_key", null),
                Kn(Dn(n), "_clientId", ""),
                Kn(Dn(n), "_peerId", ""),
                Kn(Dn(n), "_peerMeta", null),
                Kn(Dn(n), "_handshakeId", 0),
                Kn(Dn(n), "_handshakeTopic", ""),
                Kn(Dn(n), "_connected", !1),
                Kn(Dn(n), "_accounts", []),
                Kn(Dn(n), "_chainId", "0x0"),
                n
            }
            return Fn(t, [{
                key: "key",
                get: function() {
                    return this._key ? (0,
                    r.wb)(this._key, !0) : ""
                },
                set: function(n) {
                    if (n) {
                        var e = (0,
                        r.y_)(n);
                        this._key = e
                    }
                }
            }, {
                key: "clientId",
                get: function() {
                    var n = this._clientId;
                    return n || (n = this._clientId = (0,
                    r.Vj)()),
                    this._clientId
                },
                set: function(n) {
                    n && (this._clientId = n)
                }
            }, {
                key: "peerId",
                get: function() {
                    return this._peerId
                },
                set: function(n) {
                    n && (this._peerId = n)
                }
            }, {
                key: "peerMeta",
                get: function() {
                    return this._peerMeta
                },
                set: function(n) {
                    this._peerMeta = n
                }
            }, {
                key: "handshakeTopic",
                get: function() {
                    return this._handshakeTopic
                },
                set: function(n) {
                    n && (this._handshakeTopic = n)
                }
            }, {
                key: "handshakeId",
                get: function() {
                    return this._handshakeId
                },
                set: function(n) {
                    n && (this._handshakeId = n)
                }
            }, {
                key: "uri",
                get: function() {
                    return "wc:".concat(this.handshakeTopic, "@1?bridge=").concat(this.relay, "&key=").concat(this.key, "&scene=bid")
                }
            }, {
                key: "chainId",
                get: function() {
                    return this._chainId
                },
                set: function(n) {
                    this._chainId = n
                }
            }, {
                key: "accounts",
                get: function() {
                    return this._accounts
                },
                set: function(n) {
                    this._accounts = n
                }
            }, {
                key: "connected",
                get: function() {
                    return this._connected
                },
                set: function(n) {}
            }, {
                key: "session",
                get: function() {
                    return {
                        connected: this.connected,
                        accounts: this.accounts,
                        chainId: this.chainId,
                        relay: this.relay,
                        key: this.key,
                        clientId: this.clientId,
                        clientMeta: this.clientMeta,
                        peerId: this.peerId,
                        peerMeta: this.peerMeta,
                        handshakeId: this.handshakeId,
                        handshakeTopic: this.handshakeTopic
                    }
                },
                set: function(n) {
                    n && (this._connected = n.connected,
                    this.accounts = n.accounts,
                    this.chainId = n.chainId,
                    this.relay = n.relay,
                    this.key = n.key,
                    this.clientId = n.clientId,
                    this.clientMeta = n.clientMeta,
                    this.peerId = n.peerId,
                    this.peerMeta = n.peerMeta,
                    this.handshakeId = n.handshakeId,
                    this.handshakeTopic = n.handshakeTopic)
                }
            }]),
            t
        }(r.zW)
          , re = function(n) {
            Vn(t, n);
            var e = Gn(t);
            function t() {
                return Zn(this, t),
                e.apply(this, arguments)
            }
            return Fn(t, [{
                key: "getStorageSession",
                value: function() {
                    try {
                        return (0,
                        r.cF)(Xn)
                    } catch (n) {}
                    return null
                }
            }, {
                key: "setStorageSession",
                value: function() {
                    (0,
                    r.po)(Xn, this.session)
                }
            }, {
                key: "removeStorageSession",
                value: function() {
                    (0,
                    r.Li)(Xn)
                }
            }, {
                key: "manageStorageSession",
                value: function() {
                    this._connected ? this.setStorageSession() : this.removeStorageSession()
                }
            }]),
            t
        }(te);
        function ie() {
            return oe.apply(this, arguments)
        }
        function oe() {
            return oe = Ln((function() {
                var n, e;
                return Jn(this, (function(t) {
                    switch (t.label) {
                    case 0:
                        return [4, Promise.any(ee.map((function(n) {
                            return Pn.Z.request({
                                url: n,
                                method: "POST",
                                data: {
                                    jsonrpc: "2.0",
                                    id: Date.now(),
                                    method: "eth_call",
                                    params: [{
                                        to: "0x76054B318785b588A3164B2A6eA5476F7cBA51e0",
                                        data: "0x97b5f450"
                                    }, "latest"]
                                }
                            })
                        }
                        )))];
                    case 1:
                        return n = t.sent(),
                        e = new Bn.vU(["function apiDomains() view returns (string)"]),
                        [2, (0,
                        Rn.Jx)(e.decodeFunctionResult("apiDomains", n.data.result)[0]).split(",")]
                    }
                }
                ))
            }
            )),
            oe.apply(this, arguments)
        }
        function ae(n) {
            return n.filter((function(n) {
                return n.ttl > 0
            }
            )).sort((function(n, e) {
                return n.ttl - e.ttl
            }
            )).map((function(n) {
                return n.url
            }
            ))
        }
        function se() {
            return se = Ln((function() {
                var n;
                return Jn(this, (function(e) {
                    switch (e.label) {
                    case 0:
                        return [4, ie()];
                    case 1:
                        return n = e.sent(),
                        [4, Promise.all(n.map((function(n) {
                            var e = n.split(".").slice(1).join(".");
                            return function(n) {
                                var e = Date.now();
                                return new Promise((function(t) {
                                    try {
                                        setTimeout((function() {
                                            t({
                                                ttl: 0,
                                                url: n
                                            })
                                        }
                                        ), 5e3);
                                        var r = new Cn(n);
                                        r.onopen = function() {
                                            r.close(),
                                            t({
                                                ttl: Date.now() - e,
                                                url: n
                                            })
                                        }
                                        ,
                                        r.onerror = function() {
                                            t({
                                                ttl: 0,
                                                url: n
                                            })
                                        }
                                    } catch (e) {
                                        t({
                                            ttl: 0,
                                            url: n
                                        })
                                    }
                                }
                                ))
                            }("wss://nbstream.".concat(e, "/wallet-connector"))
                        }
                        )))];
                    case 2:
                        return [2, ae(e.sent())]
                    }
                }
                ))
            }
            )),
            se.apply(this, arguments)
        }
        var ce = Promise.resolve([]);
        if (!(0,
        r.UG)()) {
            var le = (0,
            r.cF)($n);
            ce = Promise.resolve(le),
            (!le || 0 === le.length) && (ce = function() {
                return se.apply(this, arguments)
            }().then((function(n) {
                return console.log("\ud83d\ude80 ~ file: relay.ts:63 ~ .then ~ domains:", n),
                (0,
                r.po)($n, n),
                n
            }
            )).catch((function() {
                return []
            }
            )))
        }
        function ue() {
            return de.apply(this, arguments)
        }
        function de() {
            return de = Ln((function() {
                var n;
                return Jn(this, (function(e) {
                    switch (e.label) {
                    case 0:
                        return [4, ce];
                    case 1:
                        return [2, (0 === (n = e.sent()).length && n.push(ne),
                        n)]
                    }
                }
                ))
            }
            )),
            de.apply(this, arguments)
        }
        function pe() {
            (0,
            r.Li)($n)
        }
        var fe = function(n) {
            Vn(t, n);
            var e = Gn(t);
            function t() {
                var n;
                Zn(this, t),
                n = e.call(this),
                Kn(Dn(n), "transport"),
                Kn(Dn(n), "lng"),
                n.clientMeta = (0,
                r.AN)();
                var i = n.getStorageSession();
                return i && (n.session = i),
                n.handshakeId && n.subscribeToSessionResponse(n.handshakeId),
                n.initTransport(),
                n.subscribeInternalEvent(),
                n
            }
            return Fn(t, [{
                key: "request",
                value: function(n) {
                    var e = this;
                    return Ln((function() {
                        return Jn(this, (function(t) {
                            if (!e.connected)
                                throw new r.zZ(r.rr.PROVIDER_NOT_READY.code,r.rr.PROVIDER_NOT_READY.message);
                            if (r.V7.indexOf(n.method) < 0)
                                throw new r.zZ(r.fc.METHOD_NOT_SUPPORT.code,r.fc.METHOD_NOT_SUPPORT.message);
                            switch (n.method) {
                            case "eth_requestAccounts":
                            case "eth_accounts":
                                return [2, e.accounts];
                            case "eth_chainId":
                                return [2, (0,
                                r.uA)(e.chainId)];
                            case "eth_signTransaction":
                            case "eth_sendTransaction":
                            case "eth_sign":
                            case "personal_sign":
                            case "eth_signTypedData":
                            case "eth_signTypedData_v1":
                            case "eth_signTypedData_v2":
                            case "eth_signTypedData_v3":
                            case "eth_signTypedData_v4":
                            case "wallet_switchEthereumChain":
                            case "wallet_watchAsset":
                                return [2, new Promise((function(t, i) {
                                    n.id || (n.id = (0,
                                    r.o0)()),
                                    e.callbacks.set("response-".concat(n.id), (function(n, e) {
                                        n ? i(function(n) {
                                            return -32050 === n.code || -32e3 === n.code || 1e3 === n.code ? new r.zZ(r.fc.REJECT_ERR.code,r.fc.REJECT_ERR.message) : -32603 === n.code ? new r.zZ(r.g.INTERNAL_ERR.code,r.g.INTERNAL_ERR.message) : -32600 === n.code || -32602 === n.code ? new r.zZ(r.fc.INVALID_PARAM.code,r.fc.INVALID_PARAM.message) : n
                                        }(n)) : e ? t(e.result) : i(new r.zZ(r.fc.MISSING_RESPONSE.code,r.fc.MISSING_RESPONSE.message))
                                    }
                                    )),
                                    e.sendRequest(n),
                                    e.events.emit("call_request_sent")
                                }
                                ))]
                            }
                            return [2]
                        }
                        ))
                    }
                    ))()
                }
            }, {
                key: "killSession",
                value: function() {
                    if (this.connected) {
                        var n = {
                            id: (0,
                            r.o0)(),
                            method: "wc_sessionUpdate",
                            params: [{
                                approved: !1,
                                chainId: null,
                                networkId: null,
                                accounts: null
                            }]
                        };
                        this.sendRequest(n),
                        this.handleSessionDisconnect(Nn.DisconnectAtClient)
                    }
                }
            }, {
                key: "connect",
                value: function() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , e = n.chainId
                      , t = n.lng
                      , r = n.showQrCodeModal
                      , i = this;
                    return Ln((function() {
                        return Jn(this, (function(n) {
                            return [2, (i.lng = t,
                            i.connected ? {
                                chainId: i.chainId,
                                accounts: i.accounts
                            } : new Promise((function(n, t) {
                                i.on("modal_closed", (function(n) {
                                    t(n)
                                }
                                )),
                                i.on("session_error", (function(n) {
                                    t(n)
                                }
                                )),
                                i.on("connect", (function(e) {
                                    n(e)
                                }
                                )),
                                i.createSession({
                                    chainId: e,
                                    showQrCodeModal: r
                                })
                            }
                            )))]
                        }
                        ))
                    }
                    ))()
                }
            }, {
                key: "createSession",
                value: function(n) {
                    var e = n.chainId
                      , t = n.showQrCodeModal;
                    try {
                        if (this.connected)
                            throw new r.zZ(r.rr.CONNECTED.code,r.rr.CONNECTED.message);
                        if (this.pending || this._handshakeTopic)
                            throw new r.zZ(r.rr.CONNECTING.code,r.rr.CONNECTING.message);
                        this.pending = !0,
                        this._key = (0,
                        r.k$)(),
                        this.handshakeId = (0,
                        r.o0)(),
                        this.handshakeTopic = (0,
                        r.Vj)();
                        var i = {
                            id: this.handshakeId,
                            method: "wc_sessionRequest",
                            params: [{
                                peerId: this.clientId,
                                peerMeta: this.clientMeta,
                                chainId: e ? Number(e) : null
                            }]
                        };
                        this.sendRequest(i, this.handshakeTopic),
                        this.subscribeToSessionResponse(this.handshakeId),
                        this.events.emit("display_uri", {
                            showQrCodeModal: t
                        })
                    } catch (n) {
                        this.pending = !1;
                        var o = "response-".concat(this.handshakeId);
                        this.callbacks.get(o) && this.callbacks.delete(o);
                        var a = n.message
                          , s = function(n, e) {
                            return null != e && "undefined" !== typeof Symbol && e[Symbol.hasInstance] ? !!e[Symbol.hasInstance](n) : n instanceof e
                        }(n, r.zZ) ? n : new r.zZ(r.g.INTERNAL_ERR.code,"".concat(r.g.INTERNAL_ERR.message, ": ").concat(a));
                        throw this.handleRejectSessionConnection(s),
                        r.cM.error("[binance-w3w] create connection failed: ".concat(a)),
                        s
                    }
                }
            }, {
                key: "initTransport",
                value: function() {
                    var n = this;
                    return Ln((function() {
                        var e, t, i, o;
                        return Jn(this, (function(a) {
                            switch (a.label) {
                            case 0:
                                n.transport = new Sn({
                                    version: 1,
                                    subscriptions: [n.clientId]
                                }),
                                n.transport.on("message", (function(e) {
                                    return n.setIncomingMessages(e)
                                }
                                )),
                                n.transport.on("open", (function(e) {
                                    n.events.emit("transport_open", e)
                                }
                                )),
                                n.transport.on("close", (function() {
                                    n.events.emit("transport_close")
                                }
                                )),
                                n.transport.on("error", (function(e, t) {
                                    n.events.emit("transport_error", e, t)
                                }
                                )),
                                a.label = 1;
                            case 1:
                                return a.trys.push([1, 5, , 6]),
                                n.session.relay ? (n.transport.open([n.session.relay]),
                                [3, 4]) : [3, 2];
                            case 2:
                                return [4, ue()];
                            case 3:
                                e = a.sent(),
                                n.transport.open(e),
                                a.label = 4;
                            case 4:
                                return [3, 6];
                            case 5:
                                throw t = a.sent(),
                                pe(),
                                i = t.message,
                                o = new r.zZ(r.g.INTERNAL_ERR.code,"".concat(r.g.INTERNAL_ERR.message, ": ").concat(i)),
                                n.handleRejectSessionConnection(o),
                                o;
                            case 6:
                                return [2]
                            }
                        }
                        ))
                    }
                    ))()
                }
            }, {
                key: "setIncomingMessages",
                value: function(n) {
                    if ([this.clientId, this.handshakeTopic].includes(n.topic)) {
                        var e;
                        try {
                            e = JSON.parse(n.payload)
                        } catch (n) {
                            return
                        }
                        var t = this.decrypt(e);
                        if (t)
                            if ("method"in t && t.method)
                                this.events.emit(t.method, null, t);
                            else {
                                var i = t.id
                                  , o = "response-".concat(i)
                                  , a = this.callbacks.get(o);
                                if (a) {
                                    if ("error"in t && t.error)
                                        a(new r.zZ(t.error.code,t.error.message), null);
                                    else
                                        "result"in t && t.result && a(null, t);
                                    this.callbacks.delete(o)
                                } else
                                    r.cM.error("[binance-w3w] callback id: ".concat(i, " not found"))
                            }
                    }
                }
            }, {
                key: "encrypt",
                value: function(n) {
                    var e = this._key;
                    return e ? (0,
                    r.HI)(n, e) : null
                }
            }, {
                key: "decrypt",
                value: function(n) {
                    var e = this._key;
                    return e ? (0,
                    r.pe)(n, e) : null
                }
            }, {
                key: "sendRequest",
                value: function(n, e) {
                    var t = (0,
                    r.sT)(n.method, n.params, n.id)
                      , i = this.encrypt(t)
                      , o = e || this.peerId
                      , a = JSON.stringify(i);
                    this.transport.send(a, o, !0)
                }
            }, {
                key: "subscribeInternalEvent",
                value: function() {
                    var n = this;
                    this.on("display_uri", (function(e) {
                        !1 !== e.showQrCodeModal && (pn.open({
                            cb: function() {
                                n.events.emit("modal_closed", new r.zZ(r.rr.CLOSE_MODAL.code,r.rr.CLOSE_MODAL.message))
                            },
                            lng: n.lng
                        }),
                        n.transport.connected ? (n.events.emit("uri_ready", n.uri),
                        n.key && pn.ready(n.uri)) : n.transport.retryFailed && pn.fail())
                    }
                    )),
                    this.on("transport_open", (function(e) {
                        n.relay = e,
                        n.events.emit("uri_ready", n.uri),
                        n.key && pn.ready(n.uri)
                    }
                    )),
                    this.on("transport_error", (function(n, e) {
                        e ? function(n) {
                            var e = (0,
                            r.cF)($n);
                            if (e) {
                                var t = e.filter((function(e) {
                                    return e !== n
                                }
                                ));
                                (0,
                                r.po)($n, t)
                            }
                        }(function(n) {
                            var e = n.indexOf("?");
                            return e > -1 ? n.slice(0, e) : n
                        }(e)) : (pe(),
                        pn.fail())
                    }
                    )),
                    this.on("modal_closed", (function() {
                        var e = "response-".concat(n.handshakeId);
                        n.callbacks.get(e) && n.callbacks.delete(e),
                        n.clearConnectionStatus()
                    }
                    )),
                    this.on("connect", (function() {
                        n.pending = !1,
                        pn.close()
                    }
                    )),
                    this.on("call_request_sent", (function() {
                        (0,
                        r.jm)()
                    }
                    )),
                    this.on("wc_sessionUpdate", (function(e, t) {
                        e ? n.handleSessionResponse() : t.params && Array.isArray(t.params) ? n.handleSessionResponse(t.params[0]) : t.error && n.handleSessionResponse()
                    }
                    ))
                }
            }, {
                key: "subscribeToSessionResponse",
                value: function(n) {
                    var e = this;
                    this.callbacks.set("response-".concat(n), (function(n, t) {
                        n ? e.handleSessionResponse() : t && (t.result ? e.handleSessionResponse(t.result) : (t.error && t.error.message,
                        e.handleSessionResponse()))
                    }
                    ))
                }
            }, {
                key: "handleSessionResponse",
                value: function(n) {
                    n ? n.approved ? (this._connected ? (n.chainId && this.setChainId(n.chainId),
                    n.accounts && this.setAddress(n.accounts)) : (this._connected = !0,
                    n.chainId && this.setChainId(n.chainId),
                    n.accounts && this.setAddress(n.accounts),
                    n.peerId && !this.peerId && (this.peerId = n.peerId),
                    n.peerMeta && !this.peerMeta && (this.peerMeta = n.peerMeta),
                    this.events.emit("connect", {
                        chainId: this.chainId,
                        accounts: this.accounts
                    })),
                    this.manageStorageSession()) : this.connected ? this.handleSessionDisconnect(Nn.DisconnectAtWallet) : this.handleRejectSessionConnection(new r.zZ(r.rr.REJECT_SESSION.code,r.rr.REJECT_SESSION.message)) : this.handleRejectSessionConnection(new r.zZ(r.rr.REJECT_SESSION.code,r.rr.REJECT_SESSION.message))
                }
            }, {
                key: "handleRejectSessionConnection",
                value: function(n) {
                    pn.close(),
                    this.clearConnectionStatus(),
                    this.events.emit("session_error", n)
                }
            }, {
                key: "handleSessionDisconnect",
                value: function(n) {
                    this._connected || pn.close(),
                    this.events.emit("disconnect", n),
                    this.clearConnectionStatus()
                }
            }, {
                key: "clearConnectionStatus",
                value: function() {
                    this._connected && (this._connected = !1),
                    this._handshakeId && (this._handshakeId = 0),
                    this._handshakeTopic && (this._handshakeTopic = ""),
                    this._peerId && (this._peerId = ""),
                    this._clientId && (this._clientId = ""),
                    this.pending && (this.pending = !1),
                    this.callbacks.clear(),
                    this._peerMeta = null,
                    this._accounts = [],
                    this._chainId = "0x0",
                    this.offConnectEvents(),
                    this.removeStorageSession(),
                    this.transport.close()
                }
            }, {
                key: "offConnectEvents",
                value: function() {
                    this.removeListener("connect")
                }
            }, {
                key: "setChainId",
                value: function(n) {
                    var e = (0,
                    r.uA)(n);
                    "0x0" !== e ? (Un(this.chainId) < "u" && this.chainId !== e && this.events.emit("chainChanged", e),
                    this.chainId = e) : this.chainId = e
                }
            }, {
                key: "setAddress",
                value: function() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
                      , e = n.filter((function(n) {
                        return "string" == typeof n
                    }
                    )).map((function(n) {
                        return n.toLowerCase()
                    }
                    )).filter(Boolean);
                    JSON.stringify(this.accounts) !== JSON.stringify(e) && this.events.emit("accountsChanged", e),
                    this.accounts = e
                }
            }]),
            t
        }(re);
        function he(n) {
            if (void 0 === n)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return n
        }
        function me(n, e, t, r, i, o, a) {
            try {
                var s = n[o](a)
                  , c = s.value
            } catch (n) {
                return void t(n)
            }
            s.done ? e(c) : Promise.resolve(c).then(r, i)
        }
        function we(n) {
            return function() {
                var e = this
                  , t = arguments;
                return new Promise((function(r, i) {
                    var o = n.apply(e, t);
                    function a(n) {
                        me(o, r, i, a, s, "next", n)
                    }
                    function s(n) {
                        me(o, r, i, a, s, "throw", n)
                    }
                    a(void 0)
                }
                ))
            }
        }
        function ye(n, e) {
            for (var t = 0; t < e.length; t++) {
                var r = e[t];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(n, r.key, r)
            }
        }
        function ke(n) {
            return ke = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
                return n.__proto__ || Object.getPrototypeOf(n)
            }
            ,
            ke(n)
        }
        function be(n, e) {
            return be = Object.setPrototypeOf || function(n, e) {
                return n.__proto__ = e,
                n
            }
            ,
            be(n, e)
        }
        function ve(n) {
            return n && "undefined" !== typeof Symbol && n.constructor === Symbol ? "symbol" : typeof n
        }
        function ge(n) {
            var e = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" === typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (n) {
                    return !1
                }
            }();
            return function() {
                var t, r = ke(n);
                if (e) {
                    var i = ke(this).constructor;
                    t = Reflect.construct(r, arguments, i)
                } else
                    t = r.apply(this, arguments);
                return function(n, e) {
                    return !e || "object" !== ve(e) && "function" !== typeof e ? he(n) : e
                }(this, t)
            }
        }
        function Ce(n, e) {
            var t, r, i, o, a = {
                label: 0,
                sent: function() {
                    if (1 & i[0])
                        throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: s(0),
                throw: s(1),
                return: s(2)
            },
            "function" === typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function s(n) {
                return function(e) {
                    return c([n, e])
                }
            }
            function c(o) {
                if (t)
                    throw new TypeError("Generator is already executing.");
                for (; a; )
                    try {
                        if (t = 1,
                        r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r),
                        0) : r.next) && !(i = i.call(r, o[1])).done)
                            return i;
                        switch (r = 0,
                        i && (o = [2 & o[0], i.value]),
                        o[0]) {
                        case 0:
                        case 1:
                            i = o;
                            break;
                        case 4:
                            return a.label++,
                            {
                                value: o[1],
                                done: !1
                            };
                        case 5:
                            a.label++,
                            r = o[1],
                            o = [0];
                            continue;
                        case 7:
                            o = a.ops.pop(),
                            a.trys.pop();
                            continue;
                        default:
                            if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                a = 0;
                                continue
                            }
                            if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                a.label = o[1];
                                break
                            }
                            if (6 === o[0] && a.label < i[1]) {
                                a.label = i[1],
                                i = o;
                                break
                            }
                            if (i && a.label < i[2]) {
                                a.label = i[2],
                                a.ops.push(o);
                                break
                            }
                            i[2] && a.ops.pop(),
                            a.trys.pop();
                            continue
                        }
                        o = e.call(n, a)
                    } catch (n) {
                        o = [6, n],
                        r = 0
                    } finally {
                        t = i = 0
                    }
                if (5 & o[0])
                    throw o[1];
                return {
                    value: o[0] ? o[1] : void 0,
                    done: !0
                }
            }
        }
        var Se = Object.defineProperty
          , Ie = function(n, e, t) {
            return function(n, e, t) {
                e in n ? Se(n, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                }) : n[e] = t
            }(n, "symbol" != ("undefined" === typeof e ? "undefined" : ve(e)) ? e + "" : e, t),
            t
        }
          , xe = function(n) {
            !function(n, e) {
                if ("function" !== typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function");
                n.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: n,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && be(n, e)
            }(t, n);
            var e = ge(t);
            function t() {
                var n;
                return function(n, e) {
                    if (!(n instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                n = e.call(this),
                Ie(he(n), "accounts", []),
                Ie(he(n), "coreConnection"),
                n.register(),
                n
            }
            return function(n, e, t) {
                e && ye(n.prototype, e),
                t && ye(n, t)
            }(t, [{
                key: "chainId",
                get: function() {
                    return this.coreConnection ? this.coreConnection.chainId : "0x0"
                }
            }, {
                key: "connected",
                get: function() {
                    return !!this.coreConnection && this.coreConnection.connected
                }
            }, {
                key: "connecting",
                get: function() {
                    return !!this.coreConnection && this.coreConnection.pending
                }
            }, {
                key: "open",
                value: function(n) {
                    var e = n.requestChainId
                      , t = n.lng
                      , r = n.showQrCodeModal
                      , i = this;
                    return we((function() {
                        var n, o;
                        return Ce(this, (function(a) {
                            switch (a.label) {
                            case 0:
                                return i.register(),
                                i.coreConnection.connected ? [2] : [4, i.coreConnection.connect({
                                    chainId: e,
                                    lng: t,
                                    showQrCodeModal: r
                                })];
                            case 1:
                                return n = a.sent(),
                                o = n.accounts,
                                i.accounts = o,
                                [2]
                            }
                        }
                        ))
                    }
                    ))()
                }
            }, {
                key: "request",
                value: function(n) {
                    var e = this;
                    return we((function() {
                        return Ce(this, (function(t) {
                            switch (t.label) {
                            case 0:
                                return e.connected ? [3, 2] : [4, e.open({})];
                            case 1:
                                t.sent(),
                                t.label = 2;
                            case 2:
                                return [2, e.coreConnection.request(n)]
                            }
                        }
                        ))
                    }
                    ))()
                }
            }, {
                key: "disconnect",
                value: function() {
                    this.connected && (this.coreConnection.killSession(),
                    this.onClose(Nn.DisconnectAtClient))
                }
            }, {
                key: "register",
                value: function() {
                    if (this.coreConnection)
                        return this.coreConnection;
                    this.coreConnection = new fe,
                    this.accounts = this.coreConnection.accounts,
                    this.subscribeEvents()
                }
            }, {
                key: "subscribeEvents",
                value: function() {
                    var n = this;
                    this.coreConnection.on("chainChanged", (function(e) {
                        n.events.emit("chainChanged", e)
                    }
                    )),
                    this.coreConnection.on("accountsChanged", (function(e) {
                        n.accounts = e,
                        n.events.emit("accountsChanged", e)
                    }
                    )),
                    this.coreConnection.on("uri_ready", (function(e) {
                        n.events.emit("uri_ready", e)
                    }
                    )),
                    this.coreConnection.on("disconnect", (function(e) {
                        n.onClose(e)
                    }
                    ))
                }
            }, {
                key: "onClose",
                value: function(n) {
                    this.coreConnection = null,
                    this.events.emit("disconnect", n)
                }
            }]),
            t
        }(r.zW);
        function Ee(n, e, t, r, i, o, a) {
            try {
                var s = n[o](a)
                  , c = s.value
            } catch (n) {
                return void t(n)
            }
            s.done ? e(c) : Promise.resolve(c).then(r, i)
        }
        function Oe(n) {
            return function() {
                var e = this
                  , t = arguments;
                return new Promise((function(r, i) {
                    var o = n.apply(e, t);
                    function a(n) {
                        Ee(o, r, i, a, s, "next", n)
                    }
                    function s(n) {
                        Ee(o, r, i, a, s, "throw", n)
                    }
                    a(void 0)
                }
                ))
            }
        }
        function We(n, e) {
            for (var t = 0; t < e.length; t++) {
                var r = e[t];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(n, r.key, r)
            }
        }
        function _e(n) {
            return n && "undefined" !== typeof Symbol && n.constructor === Symbol ? "symbol" : typeof n
        }
        function Ae(n, e) {
            var t, r, i, o, a = {
                label: 0,
                sent: function() {
                    if (1 & i[0])
                        throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: s(0),
                throw: s(1),
                return: s(2)
            },
            "function" === typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function s(n) {
                return function(e) {
                    return c([n, e])
                }
            }
            function c(o) {
                if (t)
                    throw new TypeError("Generator is already executing.");
                for (; a; )
                    try {
                        if (t = 1,
                        r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r),
                        0) : r.next) && !(i = i.call(r, o[1])).done)
                            return i;
                        switch (r = 0,
                        i && (o = [2 & o[0], i.value]),
                        o[0]) {
                        case 0:
                        case 1:
                            i = o;
                            break;
                        case 4:
                            return a.label++,
                            {
                                value: o[1],
                                done: !1
                            };
                        case 5:
                            a.label++,
                            r = o[1],
                            o = [0];
                            continue;
                        case 7:
                            o = a.ops.pop(),
                            a.trys.pop();
                            continue;
                        default:
                            if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                a = 0;
                                continue
                            }
                            if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                a.label = o[1];
                                break
                            }
                            if (6 === o[0] && a.label < i[1]) {
                                a.label = i[1],
                                i = o;
                                break
                            }
                            if (i && a.label < i[2]) {
                                a.label = i[2],
                                a.ops.push(o);
                                break
                            }
                            i[2] && a.ops.pop(),
                            a.trys.pop();
                            continue
                        }
                        o = e.call(n, a)
                    } catch (n) {
                        o = [6, n],
                        r = 0
                    } finally {
                        t = i = 0
                    }
                if (5 & o[0])
                    throw o[1];
                return {
                    value: o[0] ? o[1] : void 0,
                    done: !0
                }
            }
        }
        var Me = Object.defineProperty
          , Te = function(n, e, t) {
            return function(n, e, t) {
                e in n ? Me(n, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                }) : n[e] = t
            }(n, "symbol" != ("undefined" === typeof e ? "undefined" : _e(e)) ? e + "" : e, t),
            t
        }
          , je = function() {
            function n(e) {
                !function(n, e) {
                    if (!(n instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                Te(this, "events", new o.Z),
                Te(this, "signClient"),
                Te(this, "rpc"),
                Te(this, "httpClient"),
                Te(this, "optsChainId"),
                Te(this, "lng"),
                Te(this, "showQrCodeModal"),
                this.rpc = {
                    infuraId: null === e || void 0 === e ? void 0 : e.infuraId,
                    custom: null === e || void 0 === e ? void 0 : e.rpc
                },
                this.lng = (null === e || void 0 === e ? void 0 : e.lng) || "en",
                this.showQrCodeModal = null === e || void 0 === e ? void 0 : e.showQrCodeModal,
                this.signClient = new xe,
                this.optsChainId = Number(this.signClient.coreConnection.chainId) || (null === e || void 0 === e ? void 0 : e.chainId) || 56,
                this.registerEventListeners(),
                this.httpClient = this.setHttpProvider(this.optsChainId)
            }
            return function(n, e, t) {
                e && We(n.prototype, e),
                t && We(n, t)
            }(n, [{
                key: "connected",
                get: function() {
                    return this.signClient.connected
                }
            }, {
                key: "connector",
                get: function() {
                    return this.signClient
                }
            }, {
                key: "accounts",
                get: function() {
                    return this.signClient.accounts
                }
            }, {
                key: "chainId",
                get: function() {
                    return r.cM.debug("provider get chainId", this.signClient.chainId),
                    this.signClient.chainId
                }
            }, {
                key: "rpcUrl",
                get: function() {
                    return this.httpClient.url || ""
                }
            }, {
                key: "request",
                value: function(n) {
                    var e = this;
                    return Oe((function() {
                        var t, i;
                        return Ae(this, (function(o) {
                            switch (o.label) {
                            case 0:
                                switch (r.cM.debug("ethereum-provider request", n),
                                n.method) {
                                case "eth_requestAccounts":
                                    return [3, 1];
                                case "eth_chainId":
                                    return [3, 3];
                                case "eth_accounts":
                                    return [3, 4];
                                case "wallet_switchEthereumChain":
                                    return [3, 5]
                                }
                                return [3, 6];
                            case 1:
                                return [4, e.connect()];
                            case 2:
                                return [2, (o.sent(),
                                e.accounts)];
                            case 3:
                                return [2, e.chainId];
                            case 4:
                                return [2, e.accounts];
                            case 5:
                                return [2, e.switchChain(n)];
                            case 6:
                                return [3, 7];
                            case 7:
                                if (t = (0,
                                r.sT)(n.method, n.params || []),
                                r.V7.includes(n.method))
                                    return [2, e.signClient.request(t)];
                                if (_e(e.httpClient) > "u")
                                    throw new Error("Cannot request JSON-RPC method (".concat(n.method, ") without provided rpc url"));
                                return [4, e.httpClient.request(t)];
                            case 8:
                                if (i = o.sent(),
                                (0,
                                r.om)(i))
                                    return [2, i.result];
                                throw new Error(i.error.message)
                            }
                        }
                        ))
                    }
                    ))()
                }
            }, {
                key: "signMessage",
                value: function(n) {
                    var e = this;
                    return Oe((function() {
                        return Ae(this, (function(t) {
                            switch (t.label) {
                            case 0:
                                return r.cM.debug("signMessage", n),
                                e.accounts.length ? [3, 2] : [4, e.enable()];
                            case 1:
                                t.sent(),
                                t.label = 2;
                            case 2:
                                return [4, e.request({
                                    method: "personal_sign",
                                    params: [(0,
                                    r.OG)(n), e.accounts[0]]
                                })];
                            case 3:
                                return [2, t.sent()]
                            }
                        }
                        ))
                    }
                    ))()
                }
            }, {
                key: "sendAsync",
                value: function(n, e) {
                    this.request(n).then((function(n) {
                        return e(null, n)
                    }
                    )).catch((function(n) {
                        return e(n, void 0)
                    }
                    ))
                }
            }, {
                key: "setLng",
                value: function(n) {
                    this.lng = n
                }
            }, {
                key: "enable",
                value: function(n) {
                    var e = this;
                    return Oe((function() {
                        return Ae(this, (function(t) {
                            switch (t.label) {
                            case 0:
                                return [4, e.connect(n)];
                            case 1:
                                return [2, (t.sent(),
                                e.accounts)]
                            }
                        }
                        ))
                    }
                    ))()
                }
            }, {
                key: "switchChain",
                value: function(n) {
                    var e = this;
                    return Oe((function() {
                        var t;
                        return Ae(this, (function(i) {
                            switch (i.label) {
                            case 0:
                                return t = (0,
                                r.sT)(n.method, n.params || []),
                                [4, Promise.race([e.signClient.request(t), new Promise((function(t) {
                                    return e.on("chainChanged", (function(e) {
                                        e === n.params[0].chainId && t(e)
                                    }
                                    ))
                                }
                                ))])];
                            case 1:
                                return [2, i.sent()]
                            }
                        }
                        ))
                    }
                    ))()
                }
            }, {
                key: "connect",
                value: function(n) {
                    var e = this;
                    return Oe((function() {
                        var t;
                        return Ae(this, (function(i) {
                            switch (i.label) {
                            case 0:
                                return e.connected ? (r.cM.info("already connected"),
                                [3, 3]) : [3, 1];
                            case 1:
                                return [4, e.signClient.open({
                                    requestChainId: null !== (t = null === n || void 0 === n ? void 0 : n.toString()) && void 0 !== t ? t : e.optsChainId.toString(),
                                    lng: e.lng,
                                    showQrCodeModal: e.showQrCodeModal
                                })];
                            case 2:
                                i.sent(),
                                i.label = 3;
                            case 3:
                                return [2]
                            }
                        }
                        ))
                    }
                    ))()
                }
            }, {
                key: "disconnect",
                value: function() {
                    this.connected && this.signClient.disconnect()
                }
            }, {
                key: "on",
                value: function(n, e) {
                    this.events.on(n, e)
                }
            }, {
                key: "once",
                value: function(n, e) {
                    this.events.once(n, e)
                }
            }, {
                key: "removeListener",
                value: function(n, e) {
                    this.events.removeListener(n, e)
                }
            }, {
                key: "off",
                value: function(n, e) {
                    this.events.off(n, e)
                }
            }, {
                key: "isWalletConnect",
                get: function() {
                    return !0
                }
            }, {
                key: "registerEventListeners",
                value: function() {
                    var n = this;
                    this.signClient.on("accountsChanged", (function(e) {
                        n.events.emit("accountsChanged", e)
                    }
                    )),
                    this.signClient.on("chainChanged", (function(e) {
                        n.httpClient = n.setHttpProvider((0,
                        r.Jk)(e)),
                        n.events.emit("chainChanged", e)
                    }
                    )),
                    this.signClient.on("disconnect", (function() {
                        n.events.emit("disconnect")
                    }
                    )),
                    this.signClient.on("uri_ready", (function(e) {
                        n.events.emit("uri_ready", e)
                    }
                    ))
                }
            }, {
                key: "setHttpProvider",
                value: function(n) {
                    var e = (0,
                    r.RM)(n, this.rpc);
                    if (!(("undefined" === typeof e ? "undefined" : _e(e)) > "u"))
                        return new y(e)
                }
            }]),
            n
        }()
          , Ne = function(n) {
            if ((0,
            r.bD)()) {
                var e = ("undefined" === typeof window ? "undefined" : _e(window)) < "u" ? window.ethereum : void 0;
                if (e)
                    return e.setLng = function() {}
                    ,
                    e.disconnect = function() {}
                    ,
                    e
            }
            return new je(n)
        }
          , Be = je
    }
}]);
