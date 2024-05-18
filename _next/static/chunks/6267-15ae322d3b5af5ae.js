"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[6267], {
    36869: function(e, t, r) {
        r.d(t, {
            B: function() {
                return s
            },
            r: function() {
                return o
            }
        });
        var f = r(70367)
          , n = r(92381)
          , i = r(4082);
        const s = "\x19Ethereum Signed Message:\n";
        function o(e) {
            return "string" === typeof e && (e = (0,
            i.Y0)(e)),
            (0,
            n.w)((0,
            f.concat)([(0,
            i.Y0)(s), (0,
            i.Y0)(String(e.length)), e]))
        }
    },
    47770: function(e, t, r) {
        r.r(t),
        r.d(t, {
            SigningKey: function() {
                return $
            },
            computePublicKey: function() {
                return U
            },
            recoverPublicKey: function() {
                return X
            }
        });
        var f = r(98394)
          , n = r.n(f)
          , i = r(45370)
          , s = r.n(i);
        "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof r.g ? r.g : "undefined" !== typeof self && self;
        function o(e, t, r) {
            return r = {
                path: t,
                exports: {},
                require: function(e, t) {
                    return function() {
                        throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
                    }((void 0 === t || null === t) && r.path)
                }
            },
            e(r, r.exports),
            r.exports
        }
        var d = u;
        function u(e, t) {
            if (!e)
                throw new Error(t || "Assertion failed")
        }
        u.equal = function(e, t, r) {
            if (e != t)
                throw new Error(r || "Assertion failed: " + e + " != " + t)
        }
        ;
        var a = o((function(e, t) {
            var r = t;
            function f(e) {
                return 1 === e.length ? "0" + e : e
            }
            function n(e) {
                for (var t = "", r = 0; r < e.length; r++)
                    t += f(e[r].toString(16));
                return t
            }
            r.toArray = function(e, t) {
                if (Array.isArray(e))
                    return e.slice();
                if (!e)
                    return [];
                var r = [];
                if ("string" !== typeof e) {
                    for (var f = 0; f < e.length; f++)
                        r[f] = 0 | e[f];
                    return r
                }
                if ("hex" === t) {
                    (e = e.replace(/[^a-z0-9]+/gi, "")).length % 2 !== 0 && (e = "0" + e);
                    for (f = 0; f < e.length; f += 2)
                        r.push(parseInt(e[f] + e[f + 1], 16))
                } else
                    for (f = 0; f < e.length; f++) {
                        var n = e.charCodeAt(f)
                          , i = n >> 8
                          , s = 255 & n;
                        i ? r.push(i, s) : r.push(s)
                    }
                return r
            }
            ,
            r.zero2 = f,
            r.toHex = n,
            r.encode = function(e, t) {
                return "hex" === t ? n(e) : e
            }
        }
        ))
          , h = o((function(e, t) {
            var r = t;
            r.assert = d,
            r.toArray = a.toArray,
            r.zero2 = a.zero2,
            r.toHex = a.toHex,
            r.encode = a.encode,
            r.getNAF = function(e, t, r) {
                var f = new Array(Math.max(e.bitLength(), r) + 1);
                f.fill(0);
                for (var n = 1 << t + 1, i = e.clone(), s = 0; s < f.length; s++) {
                    var o, d = i.andln(n - 1);
                    i.isOdd() ? (o = d > (n >> 1) - 1 ? (n >> 1) - d : d,
                    i.isubn(o)) : o = 0,
                    f[s] = o,
                    i.iushrn(1)
                }
                return f
            }
            ,
            r.getJSF = function(e, t) {
                var r = [[], []];
                e = e.clone(),
                t = t.clone();
                for (var f, n = 0, i = 0; e.cmpn(-n) > 0 || t.cmpn(-i) > 0; ) {
                    var s, o, d = e.andln(3) + n & 3, u = t.andln(3) + i & 3;
                    3 === d && (d = -1),
                    3 === u && (u = -1),
                    s = 0 === (1 & d) ? 0 : 3 !== (f = e.andln(7) + n & 7) && 5 !== f || 2 !== u ? d : -d,
                    r[0].push(s),
                    o = 0 === (1 & u) ? 0 : 3 !== (f = t.andln(7) + i & 7) && 5 !== f || 2 !== d ? u : -u,
                    r[1].push(o),
                    2 * n === s + 1 && (n = 1 - n),
                    2 * i === o + 1 && (i = 1 - i),
                    e.iushrn(1),
                    t.iushrn(1)
                }
                return r
            }
            ,
            r.cachedProperty = function(e, t, r) {
                var f = "_" + t;
                e.prototype[t] = function() {
                    return void 0 !== this[f] ? this[f] : this[f] = r.call(this)
                }
            }
            ,
            r.parseBytes = function(e) {
                return "string" === typeof e ? r.toArray(e, "hex") : e
            }
            ,
            r.intFromLE = function(e) {
                return new (n())(e,"hex","le")
            }
        }
        ))
          , c = h.getNAF
          , p = h.getJSF
          , l = h.assert;
        function y(e, t) {
            this.type = e,
            this.p = new (n())(t.p,16),
            this.red = t.prime ? n().red(t.prime) : n().mont(this.p),
            this.zero = new (n())(0).toRed(this.red),
            this.one = new (n())(1).toRed(this.red),
            this.two = new (n())(2).toRed(this.red),
            this.n = t.n && new (n())(t.n,16),
            this.g = t.g && this.pointFromJSON(t.g, t.gRed),
            this._wnafT1 = new Array(4),
            this._wnafT2 = new Array(4),
            this._wnafT3 = new Array(4),
            this._wnafT4 = new Array(4),
            this._bitLength = this.n ? this.n.bitLength() : 0;
            var r = this.n && this.p.div(this.n);
            !r || r.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = !0,
            this.redN = this.n.toRed(this.red))
        }
        var b = y;
        function v(e, t) {
            this.curve = e,
            this.type = t,
            this.precomputed = null
        }
        y.prototype.point = function() {
            throw new Error("Not implemented")
        }
        ,
        y.prototype.validate = function() {
            throw new Error("Not implemented")
        }
        ,
        y.prototype._fixedNafMul = function(e, t) {
            l(e.precomputed);
            var r = e._getDoubles()
              , f = c(t, 1, this._bitLength)
              , n = (1 << r.step + 1) - (r.step % 2 === 0 ? 2 : 1);
            n /= 3;
            var i, s, o = [];
            for (i = 0; i < f.length; i += r.step) {
                s = 0;
                for (var d = i + r.step - 1; d >= i; d--)
                    s = (s << 1) + f[d];
                o.push(s)
            }
            for (var u = this.jpoint(null, null, null), a = this.jpoint(null, null, null), h = n; h > 0; h--) {
                for (i = 0; i < o.length; i++)
                    (s = o[i]) === h ? a = a.mixedAdd(r.points[i]) : s === -h && (a = a.mixedAdd(r.points[i].neg()));
                u = u.add(a)
            }
            return u.toP()
        }
        ,
        y.prototype._wnafMul = function(e, t) {
            var r = 4
              , f = e._getNAFPoints(r);
            r = f.wnd;
            for (var n = f.points, i = c(t, r, this._bitLength), s = this.jpoint(null, null, null), o = i.length - 1; o >= 0; o--) {
                for (var d = 0; o >= 0 && 0 === i[o]; o--)
                    d++;
                if (o >= 0 && d++,
                s = s.dblp(d),
                o < 0)
                    break;
                var u = i[o];
                l(0 !== u),
                s = "affine" === e.type ? u > 0 ? s.mixedAdd(n[u - 1 >> 1]) : s.mixedAdd(n[-u - 1 >> 1].neg()) : u > 0 ? s.add(n[u - 1 >> 1]) : s.add(n[-u - 1 >> 1].neg())
            }
            return "affine" === e.type ? s.toP() : s
        }
        ,
        y.prototype._wnafMulAdd = function(e, t, r, f, n) {
            var i, s, o, d = this._wnafT1, u = this._wnafT2, a = this._wnafT3, h = 0;
            for (i = 0; i < f; i++) {
                var l = (o = t[i])._getNAFPoints(e);
                d[i] = l.wnd,
                u[i] = l.points
            }
            for (i = f - 1; i >= 1; i -= 2) {
                var y = i - 1
                  , b = i;
                if (1 === d[y] && 1 === d[b]) {
                    var v = [t[y], null, null, t[b]];
                    0 === t[y].y.cmp(t[b].y) ? (v[1] = t[y].add(t[b]),
                    v[2] = t[y].toJ().mixedAdd(t[b].neg())) : 0 === t[y].y.cmp(t[b].y.redNeg()) ? (v[1] = t[y].toJ().mixedAdd(t[b]),
                    v[2] = t[y].add(t[b].neg())) : (v[1] = t[y].toJ().mixedAdd(t[b]),
                    v[2] = t[y].toJ().mixedAdd(t[b].neg()));
                    var m = [-3, -1, -5, -7, 0, 7, 5, 1, 3]
                      , g = p(r[y], r[b]);
                    for (h = Math.max(g[0].length, h),
                    a[y] = new Array(h),
                    a[b] = new Array(h),
                    s = 0; s < h; s++) {
                        var A = 0 | g[0][s]
                          , w = 0 | g[1][s];
                        a[y][s] = m[3 * (A + 1) + (w + 1)],
                        a[b][s] = 0,
                        u[y] = v
                    }
                } else
                    a[y] = c(r[y], d[y], this._bitLength),
                    a[b] = c(r[b], d[b], this._bitLength),
                    h = Math.max(a[y].length, h),
                    h = Math.max(a[b].length, h)
            }
            var x = this.jpoint(null, null, null)
              , S = this._wnafT4;
            for (i = h; i >= 0; i--) {
                for (var I = 0; i >= 0; ) {
                    var P = !0;
                    for (s = 0; s < f; s++)
                        S[s] = 0 | a[s][i],
                        0 !== S[s] && (P = !1);
                    if (!P)
                        break;
                    I++,
                    i--
                }
                if (i >= 0 && I++,
                x = x.dblp(I),
                i < 0)
                    break;
                for (s = 0; s < f; s++) {
                    var _ = S[s];
                    0 !== _ && (_ > 0 ? o = u[s][_ - 1 >> 1] : _ < 0 && (o = u[s][-_ - 1 >> 1].neg()),
                    x = "affine" === o.type ? x.mixedAdd(o) : x.add(o))
                }
            }
            for (i = 0; i < f; i++)
                u[i] = null;
            return n ? x : x.toP()
        }
        ,
        y.BasePoint = v,
        v.prototype.eq = function() {
            throw new Error("Not implemented")
        }
        ,
        v.prototype.validate = function() {
            return this.curve.validate(this)
        }
        ,
        y.prototype.decodePoint = function(e, t) {
            e = h.toArray(e, t);
            var r = this.p.byteLength();
            if ((4 === e[0] || 6 === e[0] || 7 === e[0]) && e.length - 1 === 2 * r)
                return 6 === e[0] ? l(e[e.length - 1] % 2 === 0) : 7 === e[0] && l(e[e.length - 1] % 2 === 1),
                this.point(e.slice(1, 1 + r), e.slice(1 + r, 1 + 2 * r));
            if ((2 === e[0] || 3 === e[0]) && e.length - 1 === r)
                return this.pointFromX(e.slice(1, 1 + r), 3 === e[0]);
            throw new Error("Unknown point format")
        }
        ,
        v.prototype.encodeCompressed = function(e) {
            return this.encode(e, !0)
        }
        ,
        v.prototype._encode = function(e) {
            var t = this.curve.p.byteLength()
              , r = this.getX().toArray("be", t);
            return e ? [this.getY().isEven() ? 2 : 3].concat(r) : [4].concat(r, this.getY().toArray("be", t))
        }
        ,
        v.prototype.encode = function(e, t) {
            return h.encode(this._encode(t), e)
        }
        ,
        v.prototype.precompute = function(e) {
            if (this.precomputed)
                return this;
            var t = {
                doubles: null,
                naf: null,
                beta: null
            };
            return t.naf = this._getNAFPoints(8),
            t.doubles = this._getDoubles(4, e),
            t.beta = this._getBeta(),
            this.precomputed = t,
            this
        }
        ,
        v.prototype._hasDoubles = function(e) {
            if (!this.precomputed)
                return !1;
            var t = this.precomputed.doubles;
            return !!t && t.points.length >= Math.ceil((e.bitLength() + 1) / t.step)
        }
        ,
        v.prototype._getDoubles = function(e, t) {
            if (this.precomputed && this.precomputed.doubles)
                return this.precomputed.doubles;
            for (var r = [this], f = this, n = 0; n < t; n += e) {
                for (var i = 0; i < e; i++)
                    f = f.dbl();
                r.push(f)
            }
            return {
                step: e,
                points: r
            }
        }
        ,
        v.prototype._getNAFPoints = function(e) {
            if (this.precomputed && this.precomputed.naf)
                return this.precomputed.naf;
            for (var t = [this], r = (1 << e) - 1, f = 1 === r ? null : this.dbl(), n = 1; n < r; n++)
                t[n] = t[n - 1].add(f);
            return {
                wnd: e,
                points: t
            }
        }
        ,
        v.prototype._getBeta = function() {
            return null
        }
        ,
        v.prototype.dblp = function(e) {
            for (var t = this, r = 0; r < e; r++)
                t = t.dbl();
            return t
        }
        ;
        var m = o((function(e) {
            "function" === typeof Object.create ? e.exports = function(e, t) {
                t && (e.super_ = t,
                e.prototype = Object.create(t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }))
            }
            : e.exports = function(e, t) {
                if (t) {
                    e.super_ = t;
                    var r = function() {};
                    r.prototype = t.prototype,
                    e.prototype = new r,
                    e.prototype.constructor = e
                }
            }
        }
        ))
          , g = h.assert;
        function A(e) {
            b.call(this, "short", e),
            this.a = new (n())(e.a,16).toRed(this.red),
            this.b = new (n())(e.b,16).toRed(this.red),
            this.tinv = this.two.redInvm(),
            this.zeroA = 0 === this.a.fromRed().cmpn(0),
            this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3),
            this.endo = this._getEndomorphism(e),
            this._endoWnafT1 = new Array(4),
            this._endoWnafT2 = new Array(4)
        }
        m(A, b);
        var w = A;
        function x(e, t, r, f) {
            b.BasePoint.call(this, e, "affine"),
            null === t && null === r ? (this.x = null,
            this.y = null,
            this.inf = !0) : (this.x = new (n())(t,16),
            this.y = new (n())(r,16),
            f && (this.x.forceRed(this.curve.red),
            this.y.forceRed(this.curve.red)),
            this.x.red || (this.x = this.x.toRed(this.curve.red)),
            this.y.red || (this.y = this.y.toRed(this.curve.red)),
            this.inf = !1)
        }
        function S(e, t, r, f) {
            b.BasePoint.call(this, e, "jacobian"),
            null === t && null === r && null === f ? (this.x = this.curve.one,
            this.y = this.curve.one,
            this.z = new (n())(0)) : (this.x = new (n())(t,16),
            this.y = new (n())(r,16),
            this.z = new (n())(f,16)),
            this.x.red || (this.x = this.x.toRed(this.curve.red)),
            this.y.red || (this.y = this.y.toRed(this.curve.red)),
            this.z.red || (this.z = this.z.toRed(this.curve.red)),
            this.zOne = this.z === this.curve.one
        }
        A.prototype._getEndomorphism = function(e) {
            if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
                var t, r;
                if (e.beta)
                    t = new (n())(e.beta,16).toRed(this.red);
                else {
                    var f = this._getEndoRoots(this.p);
                    t = (t = f[0].cmp(f[1]) < 0 ? f[0] : f[1]).toRed(this.red)
                }
                if (e.lambda)
                    r = new (n())(e.lambda,16);
                else {
                    var i = this._getEndoRoots(this.n);
                    0 === this.g.mul(i[0]).x.cmp(this.g.x.redMul(t)) ? r = i[0] : (r = i[1],
                    g(0 === this.g.mul(r).x.cmp(this.g.x.redMul(t))))
                }
                return {
                    beta: t,
                    lambda: r,
                    basis: e.basis ? e.basis.map((function(e) {
                        return {
                            a: new (n())(e.a,16),
                            b: new (n())(e.b,16)
                        }
                    }
                    )) : this._getEndoBasis(r)
                }
            }
        }
        ,
        A.prototype._getEndoRoots = function(e) {
            var t = e === this.p ? this.red : n().mont(e)
              , r = new (n())(2).toRed(t).redInvm()
              , f = r.redNeg()
              , i = new (n())(3).toRed(t).redNeg().redSqrt().redMul(r);
            return [f.redAdd(i).fromRed(), f.redSub(i).fromRed()]
        }
        ,
        A.prototype._getEndoBasis = function(e) {
            for (var t, r, f, i, s, o, d, u, a, h = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), c = e, p = this.n.clone(), l = new (n())(1), y = new (n())(0), b = new (n())(0), v = new (n())(1), m = 0; 0 !== c.cmpn(0); ) {
                var g = p.div(c);
                u = p.sub(g.mul(c)),
                a = b.sub(g.mul(l));
                var A = v.sub(g.mul(y));
                if (!f && u.cmp(h) < 0)
                    t = d.neg(),
                    r = l,
                    f = u.neg(),
                    i = a;
                else if (f && 2 === ++m)
                    break;
                d = u,
                p = c,
                c = u,
                b = l,
                l = a,
                v = y,
                y = A
            }
            s = u.neg(),
            o = a;
            var w = f.sqr().add(i.sqr());
            return s.sqr().add(o.sqr()).cmp(w) >= 0 && (s = t,
            o = r),
            f.negative && (f = f.neg(),
            i = i.neg()),
            s.negative && (s = s.neg(),
            o = o.neg()),
            [{
                a: f,
                b: i
            }, {
                a: s,
                b: o
            }]
        }
        ,
        A.prototype._endoSplit = function(e) {
            var t = this.endo.basis
              , r = t[0]
              , f = t[1]
              , n = f.b.mul(e).divRound(this.n)
              , i = r.b.neg().mul(e).divRound(this.n)
              , s = n.mul(r.a)
              , o = i.mul(f.a)
              , d = n.mul(r.b)
              , u = i.mul(f.b);
            return {
                k1: e.sub(s).sub(o),
                k2: d.add(u).neg()
            }
        }
        ,
        A.prototype.pointFromX = function(e, t) {
            (e = new (n())(e,16)).red || (e = e.toRed(this.red));
            var r = e.redSqr().redMul(e).redIAdd(e.redMul(this.a)).redIAdd(this.b)
              , f = r.redSqrt();
            if (0 !== f.redSqr().redSub(r).cmp(this.zero))
                throw new Error("invalid point");
            var i = f.fromRed().isOdd();
            return (t && !i || !t && i) && (f = f.redNeg()),
            this.point(e, f)
        }
        ,
        A.prototype.validate = function(e) {
            if (e.inf)
                return !0;
            var t = e.x
              , r = e.y
              , f = this.a.redMul(t)
              , n = t.redSqr().redMul(t).redIAdd(f).redIAdd(this.b);
            return 0 === r.redSqr().redISub(n).cmpn(0)
        }
        ,
        A.prototype._endoWnafMulAdd = function(e, t, r) {
            for (var f = this._endoWnafT1, n = this._endoWnafT2, i = 0; i < e.length; i++) {
                var s = this._endoSplit(t[i])
                  , o = e[i]
                  , d = o._getBeta();
                s.k1.negative && (s.k1.ineg(),
                o = o.neg(!0)),
                s.k2.negative && (s.k2.ineg(),
                d = d.neg(!0)),
                f[2 * i] = o,
                f[2 * i + 1] = d,
                n[2 * i] = s.k1,
                n[2 * i + 1] = s.k2
            }
            for (var u = this._wnafMulAdd(1, f, n, 2 * i, r), a = 0; a < 2 * i; a++)
                f[a] = null,
                n[a] = null;
            return u
        }
        ,
        m(x, b.BasePoint),
        A.prototype.point = function(e, t, r) {
            return new x(this,e,t,r)
        }
        ,
        A.prototype.pointFromJSON = function(e, t) {
            return x.fromJSON(this, e, t)
        }
        ,
        x.prototype._getBeta = function() {
            if (this.curve.endo) {
                var e = this.precomputed;
                if (e && e.beta)
                    return e.beta;
                var t = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
                if (e) {
                    var r = this.curve
                      , f = function(e) {
                        return r.point(e.x.redMul(r.endo.beta), e.y)
                    };
                    e.beta = t,
                    t.precomputed = {
                        beta: null,
                        naf: e.naf && {
                            wnd: e.naf.wnd,
                            points: e.naf.points.map(f)
                        },
                        doubles: e.doubles && {
                            step: e.doubles.step,
                            points: e.doubles.points.map(f)
                        }
                    }
                }
                return t
            }
        }
        ,
        x.prototype.toJSON = function() {
            return this.precomputed ? [this.x, this.y, this.precomputed && {
                doubles: this.precomputed.doubles && {
                    step: this.precomputed.doubles.step,
                    points: this.precomputed.doubles.points.slice(1)
                },
                naf: this.precomputed.naf && {
                    wnd: this.precomputed.naf.wnd,
                    points: this.precomputed.naf.points.slice(1)
                }
            }] : [this.x, this.y]
        }
        ,
        x.fromJSON = function(e, t, r) {
            "string" === typeof t && (t = JSON.parse(t));
            var f = e.point(t[0], t[1], r);
            if (!t[2])
                return f;
            function n(t) {
                return e.point(t[0], t[1], r)
            }
            var i = t[2];
            return f.precomputed = {
                beta: null,
                doubles: i.doubles && {
                    step: i.doubles.step,
                    points: [f].concat(i.doubles.points.map(n))
                },
                naf: i.naf && {
                    wnd: i.naf.wnd,
                    points: [f].concat(i.naf.points.map(n))
                }
            },
            f
        }
        ,
        x.prototype.inspect = function() {
            return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">"
        }
        ,
        x.prototype.isInfinity = function() {
            return this.inf
        }
        ,
        x.prototype.add = function(e) {
            if (this.inf)
                return e;
            if (e.inf)
                return this;
            if (this.eq(e))
                return this.dbl();
            if (this.neg().eq(e))
                return this.curve.point(null, null);
            if (0 === this.x.cmp(e.x))
                return this.curve.point(null, null);
            var t = this.y.redSub(e.y);
            0 !== t.cmpn(0) && (t = t.redMul(this.x.redSub(e.x).redInvm()));
            var r = t.redSqr().redISub(this.x).redISub(e.x)
              , f = t.redMul(this.x.redSub(r)).redISub(this.y);
            return this.curve.point(r, f)
        }
        ,
        x.prototype.dbl = function() {
            if (this.inf)
                return this;
            var e = this.y.redAdd(this.y);
            if (0 === e.cmpn(0))
                return this.curve.point(null, null);
            var t = this.curve.a
              , r = this.x.redSqr()
              , f = e.redInvm()
              , n = r.redAdd(r).redIAdd(r).redIAdd(t).redMul(f)
              , i = n.redSqr().redISub(this.x.redAdd(this.x))
              , s = n.redMul(this.x.redSub(i)).redISub(this.y);
            return this.curve.point(i, s)
        }
        ,
        x.prototype.getX = function() {
            return this.x.fromRed()
        }
        ,
        x.prototype.getY = function() {
            return this.y.fromRed()
        }
        ,
        x.prototype.mul = function(e) {
            return e = new (n())(e,16),
            this.isInfinity() ? this : this._hasDoubles(e) ? this.curve._fixedNafMul(this, e) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [e]) : this.curve._wnafMul(this, e)
        }
        ,
        x.prototype.mulAdd = function(e, t, r) {
            var f = [this, t]
              , n = [e, r];
            return this.curve.endo ? this.curve._endoWnafMulAdd(f, n) : this.curve._wnafMulAdd(1, f, n, 2)
        }
        ,
        x.prototype.jmulAdd = function(e, t, r) {
            var f = [this, t]
              , n = [e, r];
            return this.curve.endo ? this.curve._endoWnafMulAdd(f, n, !0) : this.curve._wnafMulAdd(1, f, n, 2, !0)
        }
        ,
        x.prototype.eq = function(e) {
            return this === e || this.inf === e.inf && (this.inf || 0 === this.x.cmp(e.x) && 0 === this.y.cmp(e.y))
        }
        ,
        x.prototype.neg = function(e) {
            if (this.inf)
                return this;
            var t = this.curve.point(this.x, this.y.redNeg());
            if (e && this.precomputed) {
                var r = this.precomputed
                  , f = function(e) {
                    return e.neg()
                };
                t.precomputed = {
                    naf: r.naf && {
                        wnd: r.naf.wnd,
                        points: r.naf.points.map(f)
                    },
                    doubles: r.doubles && {
                        step: r.doubles.step,
                        points: r.doubles.points.map(f)
                    }
                }
            }
            return t
        }
        ,
        x.prototype.toJ = function() {
            return this.inf ? this.curve.jpoint(null, null, null) : this.curve.jpoint(this.x, this.y, this.curve.one)
        }
        ,
        m(S, b.BasePoint),
        A.prototype.jpoint = function(e, t, r) {
            return new S(this,e,t,r)
        }
        ,
        S.prototype.toP = function() {
            if (this.isInfinity())
                return this.curve.point(null, null);
            var e = this.z.redInvm()
              , t = e.redSqr()
              , r = this.x.redMul(t)
              , f = this.y.redMul(t).redMul(e);
            return this.curve.point(r, f)
        }
        ,
        S.prototype.neg = function() {
            return this.curve.jpoint(this.x, this.y.redNeg(), this.z)
        }
        ,
        S.prototype.add = function(e) {
            if (this.isInfinity())
                return e;
            if (e.isInfinity())
                return this;
            var t = e.z.redSqr()
              , r = this.z.redSqr()
              , f = this.x.redMul(t)
              , n = e.x.redMul(r)
              , i = this.y.redMul(t.redMul(e.z))
              , s = e.y.redMul(r.redMul(this.z))
              , o = f.redSub(n)
              , d = i.redSub(s);
            if (0 === o.cmpn(0))
                return 0 !== d.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
            var u = o.redSqr()
              , a = u.redMul(o)
              , h = f.redMul(u)
              , c = d.redSqr().redIAdd(a).redISub(h).redISub(h)
              , p = d.redMul(h.redISub(c)).redISub(i.redMul(a))
              , l = this.z.redMul(e.z).redMul(o);
            return this.curve.jpoint(c, p, l)
        }
        ,
        S.prototype.mixedAdd = function(e) {
            if (this.isInfinity())
                return e.toJ();
            if (e.isInfinity())
                return this;
            var t = this.z.redSqr()
              , r = this.x
              , f = e.x.redMul(t)
              , n = this.y
              , i = e.y.redMul(t).redMul(this.z)
              , s = r.redSub(f)
              , o = n.redSub(i);
            if (0 === s.cmpn(0))
                return 0 !== o.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
            var d = s.redSqr()
              , u = d.redMul(s)
              , a = r.redMul(d)
              , h = o.redSqr().redIAdd(u).redISub(a).redISub(a)
              , c = o.redMul(a.redISub(h)).redISub(n.redMul(u))
              , p = this.z.redMul(s);
            return this.curve.jpoint(h, c, p)
        }
        ,
        S.prototype.dblp = function(e) {
            if (0 === e)
                return this;
            if (this.isInfinity())
                return this;
            if (!e)
                return this.dbl();
            var t;
            if (this.curve.zeroA || this.curve.threeA) {
                var r = this;
                for (t = 0; t < e; t++)
                    r = r.dbl();
                return r
            }
            var f = this.curve.a
              , n = this.curve.tinv
              , i = this.x
              , s = this.y
              , o = this.z
              , d = o.redSqr().redSqr()
              , u = s.redAdd(s);
            for (t = 0; t < e; t++) {
                var a = i.redSqr()
                  , h = u.redSqr()
                  , c = h.redSqr()
                  , p = a.redAdd(a).redIAdd(a).redIAdd(f.redMul(d))
                  , l = i.redMul(h)
                  , y = p.redSqr().redISub(l.redAdd(l))
                  , b = l.redISub(y)
                  , v = p.redMul(b);
                v = v.redIAdd(v).redISub(c);
                var m = u.redMul(o);
                t + 1 < e && (d = d.redMul(c)),
                i = y,
                o = m,
                u = v
            }
            return this.curve.jpoint(i, u.redMul(n), o)
        }
        ,
        S.prototype.dbl = function() {
            return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl()
        }
        ,
        S.prototype._zeroDbl = function() {
            var e, t, r;
            if (this.zOne) {
                var f = this.x.redSqr()
                  , n = this.y.redSqr()
                  , i = n.redSqr()
                  , s = this.x.redAdd(n).redSqr().redISub(f).redISub(i);
                s = s.redIAdd(s);
                var o = f.redAdd(f).redIAdd(f)
                  , d = o.redSqr().redISub(s).redISub(s)
                  , u = i.redIAdd(i);
                u = (u = u.redIAdd(u)).redIAdd(u),
                e = d,
                t = o.redMul(s.redISub(d)).redISub(u),
                r = this.y.redAdd(this.y)
            } else {
                var a = this.x.redSqr()
                  , h = this.y.redSqr()
                  , c = h.redSqr()
                  , p = this.x.redAdd(h).redSqr().redISub(a).redISub(c);
                p = p.redIAdd(p);
                var l = a.redAdd(a).redIAdd(a)
                  , y = l.redSqr()
                  , b = c.redIAdd(c);
                b = (b = b.redIAdd(b)).redIAdd(b),
                e = y.redISub(p).redISub(p),
                t = l.redMul(p.redISub(e)).redISub(b),
                r = (r = this.y.redMul(this.z)).redIAdd(r)
            }
            return this.curve.jpoint(e, t, r)
        }
        ,
        S.prototype._threeDbl = function() {
            var e, t, r;
            if (this.zOne) {
                var f = this.x.redSqr()
                  , n = this.y.redSqr()
                  , i = n.redSqr()
                  , s = this.x.redAdd(n).redSqr().redISub(f).redISub(i);
                s = s.redIAdd(s);
                var o = f.redAdd(f).redIAdd(f).redIAdd(this.curve.a)
                  , d = o.redSqr().redISub(s).redISub(s);
                e = d;
                var u = i.redIAdd(i);
                u = (u = u.redIAdd(u)).redIAdd(u),
                t = o.redMul(s.redISub(d)).redISub(u),
                r = this.y.redAdd(this.y)
            } else {
                var a = this.z.redSqr()
                  , h = this.y.redSqr()
                  , c = this.x.redMul(h)
                  , p = this.x.redSub(a).redMul(this.x.redAdd(a));
                p = p.redAdd(p).redIAdd(p);
                var l = c.redIAdd(c)
                  , y = (l = l.redIAdd(l)).redAdd(l);
                e = p.redSqr().redISub(y),
                r = this.y.redAdd(this.z).redSqr().redISub(h).redISub(a);
                var b = h.redSqr();
                b = (b = (b = b.redIAdd(b)).redIAdd(b)).redIAdd(b),
                t = p.redMul(l.redISub(e)).redISub(b)
            }
            return this.curve.jpoint(e, t, r)
        }
        ,
        S.prototype._dbl = function() {
            var e = this.curve.a
              , t = this.x
              , r = this.y
              , f = this.z
              , n = f.redSqr().redSqr()
              , i = t.redSqr()
              , s = r.redSqr()
              , o = i.redAdd(i).redIAdd(i).redIAdd(e.redMul(n))
              , d = t.redAdd(t)
              , u = (d = d.redIAdd(d)).redMul(s)
              , a = o.redSqr().redISub(u.redAdd(u))
              , h = u.redISub(a)
              , c = s.redSqr();
            c = (c = (c = c.redIAdd(c)).redIAdd(c)).redIAdd(c);
            var p = o.redMul(h).redISub(c)
              , l = r.redAdd(r).redMul(f);
            return this.curve.jpoint(a, p, l)
        }
        ,
        S.prototype.trpl = function() {
            if (!this.curve.zeroA)
                return this.dbl().add(this);
            var e = this.x.redSqr()
              , t = this.y.redSqr()
              , r = this.z.redSqr()
              , f = t.redSqr()
              , n = e.redAdd(e).redIAdd(e)
              , i = n.redSqr()
              , s = this.x.redAdd(t).redSqr().redISub(e).redISub(f)
              , o = (s = (s = (s = s.redIAdd(s)).redAdd(s).redIAdd(s)).redISub(i)).redSqr()
              , d = f.redIAdd(f);
            d = (d = (d = d.redIAdd(d)).redIAdd(d)).redIAdd(d);
            var u = n.redIAdd(s).redSqr().redISub(i).redISub(o).redISub(d)
              , a = t.redMul(u);
            a = (a = a.redIAdd(a)).redIAdd(a);
            var h = this.x.redMul(o).redISub(a);
            h = (h = h.redIAdd(h)).redIAdd(h);
            var c = this.y.redMul(u.redMul(d.redISub(u)).redISub(s.redMul(o)));
            c = (c = (c = c.redIAdd(c)).redIAdd(c)).redIAdd(c);
            var p = this.z.redAdd(s).redSqr().redISub(r).redISub(o);
            return this.curve.jpoint(h, c, p)
        }
        ,
        S.prototype.mul = function(e, t) {
            return e = new (n())(e,t),
            this.curve._wnafMul(this, e)
        }
        ,
        S.prototype.eq = function(e) {
            if ("affine" === e.type)
                return this.eq(e.toJ());
            if (this === e)
                return !0;
            var t = this.z.redSqr()
              , r = e.z.redSqr();
            if (0 !== this.x.redMul(r).redISub(e.x.redMul(t)).cmpn(0))
                return !1;
            var f = t.redMul(this.z)
              , n = r.redMul(e.z);
            return 0 === this.y.redMul(n).redISub(e.y.redMul(f)).cmpn(0)
        }
        ,
        S.prototype.eqXToP = function(e) {
            var t = this.z.redSqr()
              , r = e.toRed(this.curve.red).redMul(t);
            if (0 === this.x.cmp(r))
                return !0;
            for (var f = e.clone(), n = this.curve.redN.redMul(t); ; ) {
                if (f.iadd(this.curve.n),
                f.cmp(this.curve.p) >= 0)
                    return !1;
                if (r.redIAdd(n),
                0 === this.x.cmp(r))
                    return !0
            }
        }
        ,
        S.prototype.inspect = function() {
            return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">"
        }
        ,
        S.prototype.isInfinity = function() {
            return 0 === this.z.cmpn(0)
        }
        ;
        var I = o((function(e, t) {
            var r = t;
            r.base = b,
            r.short = w,
            r.mont = null,
            r.edwards = null
        }
        ))
          , P = o((function(e, t) {
            var r, f = t, n = h.assert;
            function i(e) {
                "short" === e.type ? this.curve = new I.short(e) : "edwards" === e.type ? this.curve = new I.edwards(e) : this.curve = new I.mont(e),
                this.g = this.curve.g,
                this.n = this.curve.n,
                this.hash = e.hash,
                n(this.g.validate(), "Invalid curve"),
                n(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O")
            }
            function o(e, t) {
                Object.defineProperty(f, e, {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        var r = new i(t);
                        return Object.defineProperty(f, e, {
                            configurable: !0,
                            enumerable: !0,
                            value: r
                        }),
                        r
                    }
                })
            }
            f.PresetCurve = i,
            o("p192", {
                type: "short",
                prime: "p192",
                p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
                a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
                b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
                n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
                hash: s().sha256,
                gRed: !1,
                g: ["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012", "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"]
            }),
            o("p224", {
                type: "short",
                prime: "p224",
                p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
                a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
                b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
                n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
                hash: s().sha256,
                gRed: !1,
                g: ["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21", "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"]
            }),
            o("p256", {
                type: "short",
                prime: null,
                p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
                a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
                b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
                n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
                hash: s().sha256,
                gRed: !1,
                g: ["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296", "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"]
            }),
            o("p384", {
                type: "short",
                prime: null,
                p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
                a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
                b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
                n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
                hash: s().sha384,
                gRed: !1,
                g: ["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7", "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"]
            }),
            o("p521", {
                type: "short",
                prime: null,
                p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
                a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
                b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
                n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
                hash: s().sha512,
                gRed: !1,
                g: ["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66", "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"]
            }),
            o("curve25519", {
                type: "mont",
                prime: "p25519",
                p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
                a: "76d06",
                b: "1",
                n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
                hash: s().sha256,
                gRed: !1,
                g: ["9"]
            }),
            o("ed25519", {
                type: "edwards",
                prime: "p25519",
                p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
                a: "-1",
                c: "1",
                d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
                n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
                hash: s().sha256,
                gRed: !1,
                g: ["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a", "6666666666666666666666666666666666666666666666666666666666666658"]
            });
            try {
                r = null.crash()
            } catch (d) {
                r = void 0
            }
            o("secp256k1", {
                type: "short",
                prime: "k256",
                p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
                a: "0",
                b: "7",
                n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
                h: "1",
                hash: s().sha256,
                beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
                lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
                basis: [{
                    a: "3086d221a7d46bcde86c90e49284eb15",
                    b: "-e4437ed6010e88286f547fa90abfe4c3"
                }, {
                    a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
                    b: "3086d221a7d46bcde86c90e49284eb15"
                }],
                gRed: !1,
                g: ["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798", "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8", r]
            })
        }
        ));
        function _(e) {
            if (!(this instanceof _))
                return new _(e);
            this.hash = e.hash,
            this.predResist = !!e.predResist,
            this.outLen = this.hash.outSize,
            this.minEntropy = e.minEntropy || this.hash.hmacStrength,
            this._reseed = null,
            this.reseedInterval = null,
            this.K = null,
            this.V = null;
            var t = a.toArray(e.entropy, e.entropyEnc || "hex")
              , r = a.toArray(e.nonce, e.nonceEnc || "hex")
              , f = a.toArray(e.pers, e.persEnc || "hex");
            d(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"),
            this._init(t, r, f)
        }
        var M = _;
        _.prototype._init = function(e, t, r) {
            var f = e.concat(t).concat(r);
            this.K = new Array(this.outLen / 8),
            this.V = new Array(this.outLen / 8);
            for (var n = 0; n < this.V.length; n++)
                this.K[n] = 0,
                this.V[n] = 1;
            this._update(f),
            this._reseed = 1,
            this.reseedInterval = 281474976710656
        }
        ,
        _.prototype._hmac = function() {
            return new (s().hmac)(this.hash,this.K)
        }
        ,
        _.prototype._update = function(e) {
            var t = this._hmac().update(this.V).update([0]);
            e && (t = t.update(e)),
            this.K = t.digest(),
            this.V = this._hmac().update(this.V).digest(),
            e && (this.K = this._hmac().update(this.V).update([1]).update(e).digest(),
            this.V = this._hmac().update(this.V).digest())
        }
        ,
        _.prototype.reseed = function(e, t, r, f) {
            "string" !== typeof t && (f = r,
            r = t,
            t = null),
            e = a.toArray(e, t),
            r = a.toArray(r, f),
            d(e.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"),
            this._update(e.concat(r || [])),
            this._reseed = 1
        }
        ,
        _.prototype.generate = function(e, t, r, f) {
            if (this._reseed > this.reseedInterval)
                throw new Error("Reseed is required");
            "string" !== typeof t && (f = r,
            r = t,
            t = null),
            r && (r = a.toArray(r, f || "hex"),
            this._update(r));
            for (var n = []; n.length < e; )
                this.V = this._hmac().update(this.V).digest(),
                n = n.concat(this.V);
            var i = n.slice(0, e);
            return this._update(r),
            this._reseed++,
            a.encode(i, t)
        }
        ;
        var E = h.assert;
        function q(e, t) {
            this.ec = e,
            this.priv = null,
            this.pub = null,
            t.priv && this._importPrivate(t.priv, t.privEnc),
            t.pub && this._importPublic(t.pub, t.pubEnc)
        }
        var z = q;
        q.fromPublic = function(e, t, r) {
            return t instanceof q ? t : new q(e,{
                pub: t,
                pubEnc: r
            })
        }
        ,
        q.fromPrivate = function(e, t, r) {
            return t instanceof q ? t : new q(e,{
                priv: t,
                privEnc: r
            })
        }
        ,
        q.prototype.validate = function() {
            var e = this.getPublic();
            return e.isInfinity() ? {
                result: !1,
                reason: "Invalid public key"
            } : e.validate() ? e.mul(this.ec.curve.n).isInfinity() ? {
                result: !0,
                reason: null
            } : {
                result: !1,
                reason: "Public key * N != O"
            } : {
                result: !1,
                reason: "Public key is not a point"
            }
        }
        ,
        q.prototype.getPublic = function(e, t) {
            return "string" === typeof e && (t = e,
            e = null),
            this.pub || (this.pub = this.ec.g.mul(this.priv)),
            t ? this.pub.encode(t, e) : this.pub
        }
        ,
        q.prototype.getPrivate = function(e) {
            return "hex" === e ? this.priv.toString(16, 2) : this.priv
        }
        ,
        q.prototype._importPrivate = function(e, t) {
            this.priv = new (n())(e,t || 16),
            this.priv = this.priv.umod(this.ec.curve.n)
        }
        ,
        q.prototype._importPublic = function(e, t) {
            if (e.x || e.y)
                return "mont" === this.ec.curve.type ? E(e.x, "Need x coordinate") : "short" !== this.ec.curve.type && "edwards" !== this.ec.curve.type || E(e.x && e.y, "Need both x and y coordinate"),
                void (this.pub = this.ec.curve.point(e.x, e.y));
            this.pub = this.ec.curve.decodePoint(e, t)
        }
        ,
        q.prototype.derive = function(e) {
            return e.validate() || E(e.validate(), "public point not validated"),
            e.mul(this.priv).getX()
        }
        ,
        q.prototype.sign = function(e, t, r) {
            return this.ec.sign(e, this, t, r)
        }
        ,
        q.prototype.verify = function(e, t) {
            return this.ec.verify(e, t, this)
        }
        ,
        q.prototype.inspect = function() {
            return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >"
        }
        ;
        var R = h.assert;
        function k(e, t) {
            if (e instanceof k)
                return e;
            this._importDER(e, t) || (R(e.r && e.s, "Signature without r or s"),
            this.r = new (n())(e.r,16),
            this.s = new (n())(e.s,16),
            void 0 === e.recoveryParam ? this.recoveryParam = null : this.recoveryParam = e.recoveryParam)
        }
        var N = k;
        function L() {
            this.place = 0
        }
        function K(e, t) {
            var r = e[t.place++];
            if (!(128 & r))
                return r;
            var f = 15 & r;
            if (0 === f || f > 4)
                return !1;
            for (var n = 0, i = 0, s = t.place; i < f; i++,
            s++)
                n <<= 8,
                n |= e[s],
                n >>>= 0;
            return !(n <= 127) && (t.place = s,
            n)
        }
        function F(e) {
            for (var t = 0, r = e.length - 1; !e[t] && !(128 & e[t + 1]) && t < r; )
                t++;
            return 0 === t ? e : e.slice(t)
        }
        function T(e, t) {
            if (t < 128)
                e.push(t);
            else {
                var r = 1 + (Math.log(t) / Math.LN2 >>> 3);
                for (e.push(128 | r); --r; )
                    e.push(t >>> (r << 3) & 255);
                e.push(t)
            }
        }
        k.prototype._importDER = function(e, t) {
            e = h.toArray(e, t);
            var r = new L;
            if (48 !== e[r.place++])
                return !1;
            var f = K(e, r);
            if (!1 === f)
                return !1;
            if (f + r.place !== e.length)
                return !1;
            if (2 !== e[r.place++])
                return !1;
            var i = K(e, r);
            if (!1 === i)
                return !1;
            var s = e.slice(r.place, i + r.place);
            if (r.place += i,
            2 !== e[r.place++])
                return !1;
            var o = K(e, r);
            if (!1 === o)
                return !1;
            if (e.length !== o + r.place)
                return !1;
            var d = e.slice(r.place, o + r.place);
            if (0 === s[0]) {
                if (!(128 & s[1]))
                    return !1;
                s = s.slice(1)
            }
            if (0 === d[0]) {
                if (!(128 & d[1]))
                    return !1;
                d = d.slice(1)
            }
            return this.r = new (n())(s),
            this.s = new (n())(d),
            this.recoveryParam = null,
            !0
        }
        ,
        k.prototype.toDER = function(e) {
            var t = this.r.toArray()
              , r = this.s.toArray();
            for (128 & t[0] && (t = [0].concat(t)),
            128 & r[0] && (r = [0].concat(r)),
            t = F(t),
            r = F(r); !r[0] && !(128 & r[1]); )
                r = r.slice(1);
            var f = [2];
            T(f, t.length),
            (f = f.concat(t)).push(2),
            T(f, r.length);
            var n = f.concat(r)
              , i = [48];
            return T(i, n.length),
            i = i.concat(n),
            h.encode(i, e)
        }
        ;
        var O = function() {
            throw new Error("unsupported")
        }
          , j = h.assert;
        function D(e) {
            if (!(this instanceof D))
                return new D(e);
            "string" === typeof e && (j(Object.prototype.hasOwnProperty.call(P, e), "Unknown curve " + e),
            e = P[e]),
            e instanceof P.PresetCurve && (e = {
                curve: e
            }),
            this.curve = e.curve.curve,
            this.n = this.curve.n,
            this.nh = this.n.ushrn(1),
            this.g = this.curve.g,
            this.g = e.curve.g,
            this.g.precompute(e.curve.n.bitLength() + 1),
            this.hash = e.hash || e.curve.hash
        }
        var C = D;
        D.prototype.keyPair = function(e) {
            return new z(this,e)
        }
        ,
        D.prototype.keyFromPrivate = function(e, t) {
            return z.fromPrivate(this, e, t)
        }
        ,
        D.prototype.keyFromPublic = function(e, t) {
            return z.fromPublic(this, e, t)
        }
        ,
        D.prototype.genKeyPair = function(e) {
            e || (e = {});
            for (var t = new M({
                hash: this.hash,
                pers: e.pers,
                persEnc: e.persEnc || "utf8",
                entropy: e.entropy || O(this.hash.hmacStrength),
                entropyEnc: e.entropy && e.entropyEnc || "utf8",
                nonce: this.n.toArray()
            }), r = this.n.byteLength(), f = this.n.sub(new (n())(2)); ; ) {
                var i = new (n())(t.generate(r));
                if (!(i.cmp(f) > 0))
                    return i.iaddn(1),
                    this.keyFromPrivate(i)
            }
        }
        ,
        D.prototype._truncateToN = function(e, t) {
            var r = 8 * e.byteLength() - this.n.bitLength();
            return r > 0 && (e = e.ushrn(r)),
            !t && e.cmp(this.n) >= 0 ? e.sub(this.n) : e
        }
        ,
        D.prototype.sign = function(e, t, r, f) {
            "object" === typeof r && (f = r,
            r = null),
            f || (f = {}),
            t = this.keyFromPrivate(t, r),
            e = this._truncateToN(new (n())(e,16));
            for (var i = this.n.byteLength(), s = t.getPrivate().toArray("be", i), o = e.toArray("be", i), d = new M({
                hash: this.hash,
                entropy: s,
                nonce: o,
                pers: f.pers,
                persEnc: f.persEnc || "utf8"
            }), u = this.n.sub(new (n())(1)), a = 0; ; a++) {
                var h = f.k ? f.k(a) : new (n())(d.generate(this.n.byteLength()));
                if (!((h = this._truncateToN(h, !0)).cmpn(1) <= 0 || h.cmp(u) >= 0)) {
                    var c = this.g.mul(h);
                    if (!c.isInfinity()) {
                        var p = c.getX()
                          , l = p.umod(this.n);
                        if (0 !== l.cmpn(0)) {
                            var y = h.invm(this.n).mul(l.mul(t.getPrivate()).iadd(e));
                            if (0 !== (y = y.umod(this.n)).cmpn(0)) {
                                var b = (c.getY().isOdd() ? 1 : 0) | (0 !== p.cmp(l) ? 2 : 0);
                                return f.canonical && y.cmp(this.nh) > 0 && (y = this.n.sub(y),
                                b ^= 1),
                                new N({
                                    r: l,
                                    s: y,
                                    recoveryParam: b
                                })
                            }
                        }
                    }
                }
            }
        }
        ,
        D.prototype.verify = function(e, t, r, f) {
            e = this._truncateToN(new (n())(e,16)),
            r = this.keyFromPublic(r, f);
            var i = (t = new N(t,"hex")).r
              , s = t.s;
            if (i.cmpn(1) < 0 || i.cmp(this.n) >= 0)
                return !1;
            if (s.cmpn(1) < 0 || s.cmp(this.n) >= 0)
                return !1;
            var o, d = s.invm(this.n), u = d.mul(e).umod(this.n), a = d.mul(i).umod(this.n);
            return this.curve._maxwellTrick ? !(o = this.g.jmulAdd(u, r.getPublic(), a)).isInfinity() && o.eqXToP(i) : !(o = this.g.mulAdd(u, r.getPublic(), a)).isInfinity() && 0 === o.getX().umod(this.n).cmp(i)
        }
        ,
        D.prototype.recoverPubKey = function(e, t, r, f) {
            j((3 & r) === r, "The recovery param is more than two bits"),
            t = new N(t,f);
            var i = this.n
              , s = new (n())(e)
              , o = t.r
              , d = t.s
              , u = 1 & r
              , a = r >> 1;
            if (o.cmp(this.curve.p.umod(this.curve.n)) >= 0 && a)
                throw new Error("Unable to find sencond key candinate");
            o = a ? this.curve.pointFromX(o.add(this.curve.n), u) : this.curve.pointFromX(o, u);
            var h = t.r.invm(i)
              , c = i.sub(s).mul(h).umod(i)
              , p = d.mul(h).umod(i);
            return this.g.mulAdd(c, o, p)
        }
        ,
        D.prototype.getKeyRecoveryParam = function(e, t, r, f) {
            if (null !== (t = new N(t,f)).recoveryParam)
                return t.recoveryParam;
            for (var n = 0; n < 4; n++) {
                var i;
                try {
                    i = this.recoverPubKey(e, t, n)
                } catch (e) {
                    continue
                }
                if (i.eq(r))
                    return n
            }
            throw new Error("Unable to find valid recovery factor")
        }
        ;
        var J = o((function(e, t) {
            var r = t;
            r.version = "6.5.4",
            r.utils = h,
            r.rand = function() {
                throw new Error("unsupported")
            }
            ,
            r.curve = I,
            r.curves = P,
            r.ec = C,
            r.eddsa = null
        }
        )).ec
          , Z = r(70367)
          , G = r(28609);
        const B = new (r(61941).Yd)("signing-key/5.7.0");
        let V = null;
        function Y() {
            return V || (V = new J("secp256k1")),
            V
        }
        class $ {
            constructor(e) {
                (0,
                G.zG)(this, "curve", "secp256k1"),
                (0,
                G.zG)(this, "privateKey", (0,
                Z.hexlify)(e)),
                32 !== (0,
                Z.hexDataLength)(this.privateKey) && B.throwArgumentError("invalid private key", "privateKey", "[[ REDACTED ]]");
                const t = Y().keyFromPrivate((0,
                Z.arrayify)(this.privateKey));
                (0,
                G.zG)(this, "publicKey", "0x" + t.getPublic(!1, "hex")),
                (0,
                G.zG)(this, "compressedPublicKey", "0x" + t.getPublic(!0, "hex")),
                (0,
                G.zG)(this, "_isSigningKey", !0)
            }
            _addPoint(e) {
                const t = Y().keyFromPublic((0,
                Z.arrayify)(this.publicKey))
                  , r = Y().keyFromPublic((0,
                Z.arrayify)(e));
                return "0x" + t.pub.add(r.pub).encodeCompressed("hex")
            }
            signDigest(e) {
                const t = Y().keyFromPrivate((0,
                Z.arrayify)(this.privateKey))
                  , r = (0,
                Z.arrayify)(e);
                32 !== r.length && B.throwArgumentError("bad digest length", "digest", e);
                const f = t.sign(r, {
                    canonical: !0
                });
                return (0,
                Z.splitSignature)({
                    recoveryParam: f.recoveryParam,
                    r: (0,
                    Z.hexZeroPad)("0x" + f.r.toString(16), 32),
                    s: (0,
                    Z.hexZeroPad)("0x" + f.s.toString(16), 32)
                })
            }
            computeSharedSecret(e) {
                const t = Y().keyFromPrivate((0,
                Z.arrayify)(this.privateKey))
                  , r = Y().keyFromPublic((0,
                Z.arrayify)(U(e)));
                return (0,
                Z.hexZeroPad)("0x" + t.derive(r.getPublic()).toString(16), 32)
            }
            static isSigningKey(e) {
                return !(!e || !e._isSigningKey)
            }
        }
        function X(e, t) {
            const r = (0,
            Z.splitSignature)(t)
              , f = {
                r: (0,
                Z.arrayify)(r.r),
                s: (0,
                Z.arrayify)(r.s)
            };
            return "0x" + Y().recoverPubKey((0,
            Z.arrayify)(e), f, r.recoveryParam).encode("hex", !1)
        }
        function U(e, t) {
            const r = (0,
            Z.arrayify)(e);
            if (32 === r.length) {
                const e = new $(r);
                return t ? "0x" + Y().keyFromPrivate(r).getPublic(!0, "hex") : e.publicKey
            }
            return 33 === r.length ? t ? (0,
            Z.hexlify)(r) : "0x" + Y().keyFromPublic(r).getPublic(!1, "hex") : 65 === r.length ? t ? "0x" + Y().keyFromPublic(r).getPublic(!0, "hex") : (0,
            Z.hexlify)(r) : B.throwArgumentError("invalid public or private key", "key", "[REDACTED]")
        }
    },
    38593: function(e, t, r) {
        r.r(t),
        r.d(t, {
            TransactionTypes: function() {
                return p
            },
            accessListify: function() {
                return x
            },
            computeAddress: function() {
                return m
            },
            parse: function() {
                return E
            },
            recoverAddress: function() {
                return g
            },
            serialize: function() {
                return _
            }
        });
        var f = r(60727)
          , n = r(13004)
          , i = r(70367)
          , s = r(84668)
          , o = r(92381)
          , d = r(28609)
          , u = r(90634)
          , a = r(47770)
          , h = r(61941);
        const c = new h.Yd("transactions/5.7.0");
        var p;
        function l(e) {
            return "0x" === e ? null : (0,
            f.Kn)(e)
        }
        function y(e) {
            return "0x" === e ? s._Y : n.O$.from(e)
        }
        !function(e) {
            e[e.legacy = 0] = "legacy",
            e[e.eip2930 = 1] = "eip2930",
            e[e.eip1559 = 2] = "eip1559"
        }(p || (p = {}));
        const b = [{
            name: "nonce",
            maxLength: 32,
            numeric: !0
        }, {
            name: "gasPrice",
            maxLength: 32,
            numeric: !0
        }, {
            name: "gasLimit",
            maxLength: 32,
            numeric: !0
        }, {
            name: "to",
            length: 20
        }, {
            name: "value",
            maxLength: 32,
            numeric: !0
        }, {
            name: "data"
        }]
          , v = {
            chainId: !0,
            data: !0,
            gasLimit: !0,
            gasPrice: !0,
            nonce: !0,
            to: !0,
            type: !0,
            value: !0
        };
        function m(e) {
            const t = (0,
            a.computePublicKey)(e);
            return (0,
            f.Kn)((0,
            i.hexDataSlice)((0,
            o.w)((0,
            i.hexDataSlice)(t, 1)), 12))
        }
        function g(e, t) {
            return m((0,
            a.recoverPublicKey)((0,
            i.arrayify)(e), t))
        }
        function A(e, t) {
            const r = (0,
            i.stripZeros)(n.O$.from(e).toHexString());
            return r.length > 32 && c.throwArgumentError("invalid length for " + t, "transaction:" + t, e),
            r
        }
        function w(e, t) {
            return {
                address: (0,
                f.Kn)(e),
                storageKeys: (t || []).map(((t,r)=>(32 !== (0,
                i.hexDataLength)(t) && c.throwArgumentError("invalid access list storageKey", `accessList[${e}:${r}]`, t),
                t.toLowerCase())))
            }
        }
        function x(e) {
            if (Array.isArray(e))
                return e.map(((e,t)=>Array.isArray(e) ? (e.length > 2 && c.throwArgumentError("access list expected to be [ address, storageKeys[] ]", `value[${t}]`, e),
                w(e[0], e[1])) : w(e.address, e.storageKeys)));
            const t = Object.keys(e).map((t=>{
                const r = e[t].reduce(((e,t)=>(e[t] = !0,
                e)), {});
                return w(t, Object.keys(r).sort())
            }
            ));
            return t.sort(((e,t)=>e.address.localeCompare(t.address))),
            t
        }
        function S(e) {
            return x(e).map((e=>[e.address, e.storageKeys]))
        }
        function I(e, t) {
            if (null != e.gasPrice) {
                const t = n.O$.from(e.gasPrice)
                  , r = n.O$.from(e.maxFeePerGas || 0);
                t.eq(r) || c.throwArgumentError("mismatch EIP-1559 gasPrice != maxFeePerGas", "tx", {
                    gasPrice: t,
                    maxFeePerGas: r
                })
            }
            const r = [A(e.chainId || 0, "chainId"), A(e.nonce || 0, "nonce"), A(e.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"), A(e.maxFeePerGas || 0, "maxFeePerGas"), A(e.gasLimit || 0, "gasLimit"), null != e.to ? (0,
            f.Kn)(e.to) : "0x", A(e.value || 0, "value"), e.data || "0x", S(e.accessList || [])];
            if (t) {
                const e = (0,
                i.splitSignature)(t);
                r.push(A(e.recoveryParam, "recoveryParam")),
                r.push((0,
                i.stripZeros)(e.r)),
                r.push((0,
                i.stripZeros)(e.s))
            }
            return (0,
            i.hexConcat)(["0x02", u.encode(r)])
        }
        function P(e, t) {
            const r = [A(e.chainId || 0, "chainId"), A(e.nonce || 0, "nonce"), A(e.gasPrice || 0, "gasPrice"), A(e.gasLimit || 0, "gasLimit"), null != e.to ? (0,
            f.Kn)(e.to) : "0x", A(e.value || 0, "value"), e.data || "0x", S(e.accessList || [])];
            if (t) {
                const e = (0,
                i.splitSignature)(t);
                r.push(A(e.recoveryParam, "recoveryParam")),
                r.push((0,
                i.stripZeros)(e.r)),
                r.push((0,
                i.stripZeros)(e.s))
            }
            return (0,
            i.hexConcat)(["0x01", u.encode(r)])
        }
        function _(e, t) {
            if (null == e.type || 0 === e.type)
                return null != e.accessList && c.throwArgumentError("untyped transactions do not support accessList; include type: 1", "transaction", e),
                function(e, t) {
                    (0,
                    d.uj)(e, v);
                    const r = [];
                    b.forEach((function(t) {
                        let f = e[t.name] || [];
                        const n = {};
                        t.numeric && (n.hexPad = "left"),
                        f = (0,
                        i.arrayify)((0,
                        i.hexlify)(f, n)),
                        t.length && f.length !== t.length && f.length > 0 && c.throwArgumentError("invalid length for " + t.name, "transaction:" + t.name, f),
                        t.maxLength && (f = (0,
                        i.stripZeros)(f),
                        f.length > t.maxLength && c.throwArgumentError("invalid length for " + t.name, "transaction:" + t.name, f)),
                        r.push((0,
                        i.hexlify)(f))
                    }
                    ));
                    let f = 0;
                    if (null != e.chainId ? (f = e.chainId,
                    "number" !== typeof f && c.throwArgumentError("invalid transaction.chainId", "transaction", e)) : t && !(0,
                    i.isBytesLike)(t) && t.v > 28 && (f = Math.floor((t.v - 35) / 2)),
                    0 !== f && (r.push((0,
                    i.hexlify)(f)),
                    r.push("0x"),
                    r.push("0x")),
                    !t)
                        return u.encode(r);
                    const n = (0,
                    i.splitSignature)(t);
                    let s = 27 + n.recoveryParam;
                    return 0 !== f ? (r.pop(),
                    r.pop(),
                    r.pop(),
                    s += 2 * f + 8,
                    n.v > 28 && n.v !== s && c.throwArgumentError("transaction.chainId/signature.v mismatch", "signature", t)) : n.v !== s && c.throwArgumentError("transaction.chainId/signature.v mismatch", "signature", t),
                    r.push((0,
                    i.hexlify)(s)),
                    r.push((0,
                    i.stripZeros)((0,
                    i.arrayify)(n.r))),
                    r.push((0,
                    i.stripZeros)((0,
                    i.arrayify)(n.s))),
                    u.encode(r)
                }(e, t);
            switch (e.type) {
            case 1:
                return P(e, t);
            case 2:
                return I(e, t)
            }
            return c.throwError(`unsupported transaction type: ${e.type}`, h.Yd.errors.UNSUPPORTED_OPERATION, {
                operation: "serializeTransaction",
                transactionType: e.type
            })
        }
        function M(e, t, r) {
            try {
                const r = y(t[0]).toNumber();
                if (0 !== r && 1 !== r)
                    throw new Error("bad recid");
                e.v = r
            } catch (f) {
                c.throwArgumentError("invalid v for transaction type: 1", "v", t[0])
            }
            e.r = (0,
            i.hexZeroPad)(t[1], 32),
            e.s = (0,
            i.hexZeroPad)(t[2], 32);
            try {
                const t = (0,
                o.w)(r(e));
                e.from = g(t, {
                    r: e.r,
                    s: e.s,
                    recoveryParam: e.v
                })
            } catch (f) {}
        }
        function E(e) {
            const t = (0,
            i.arrayify)(e);
            if (t[0] > 127)
                return function(e) {
                    const t = u.decode(e);
                    9 !== t.length && 6 !== t.length && c.throwArgumentError("invalid raw transaction", "rawTransaction", e);
                    const r = {
                        nonce: y(t[0]).toNumber(),
                        gasPrice: y(t[1]),
                        gasLimit: y(t[2]),
                        to: l(t[3]),
                        value: y(t[4]),
                        data: t[5],
                        chainId: 0
                    };
                    if (6 === t.length)
                        return r;
                    try {
                        r.v = n.O$.from(t[6]).toNumber()
                    } catch (f) {
                        return r
                    }
                    if (r.r = (0,
                    i.hexZeroPad)(t[7], 32),
                    r.s = (0,
                    i.hexZeroPad)(t[8], 32),
                    n.O$.from(r.r).isZero() && n.O$.from(r.s).isZero())
                        r.chainId = r.v,
                        r.v = 0;
                    else {
                        r.chainId = Math.floor((r.v - 35) / 2),
                        r.chainId < 0 && (r.chainId = 0);
                        let n = r.v - 27;
                        const s = t.slice(0, 6);
                        0 !== r.chainId && (s.push((0,
                        i.hexlify)(r.chainId)),
                        s.push("0x"),
                        s.push("0x"),
                        n -= 2 * r.chainId + 8);
                        const d = (0,
                        o.w)(u.encode(s));
                        try {
                            r.from = g(d, {
                                r: (0,
                                i.hexlify)(r.r),
                                s: (0,
                                i.hexlify)(r.s),
                                recoveryParam: n
                            })
                        } catch (f) {}
                        r.hash = (0,
                        o.w)(e)
                    }
                    return r.type = null,
                    r
                }(t);
            switch (t[0]) {
            case 1:
                return function(e) {
                    const t = u.decode(e.slice(1));
                    8 !== t.length && 11 !== t.length && c.throwArgumentError("invalid component count for transaction type: 1", "payload", (0,
                    i.hexlify)(e));
                    const r = {
                        type: 1,
                        chainId: y(t[0]).toNumber(),
                        nonce: y(t[1]).toNumber(),
                        gasPrice: y(t[2]),
                        gasLimit: y(t[3]),
                        to: l(t[4]),
                        value: y(t[5]),
                        data: t[6],
                        accessList: x(t[7])
                    };
                    return 8 === t.length || (r.hash = (0,
                    o.w)(e),
                    M(r, t.slice(8), P)),
                    r
                }(t);
            case 2:
                return function(e) {
                    const t = u.decode(e.slice(1));
                    9 !== t.length && 12 !== t.length && c.throwArgumentError("invalid component count for transaction type: 2", "payload", (0,
                    i.hexlify)(e));
                    const r = y(t[2])
                      , f = y(t[3])
                      , n = {
                        type: 2,
                        chainId: y(t[0]).toNumber(),
                        nonce: y(t[1]).toNumber(),
                        maxPriorityFeePerGas: r,
                        maxFeePerGas: f,
                        gasPrice: null,
                        gasLimit: y(t[4]),
                        to: l(t[5]),
                        value: y(t[6]),
                        data: t[7],
                        accessList: x(t[8])
                    };
                    return 9 === t.length || (n.hash = (0,
                    o.w)(e),
                    M(n, t.slice(9), I)),
                    n
                }(t)
            }
            return c.throwError(`unsupported transaction type: ${t[0]}`, h.Yd.errors.UNSUPPORTED_OPERATION, {
                operation: "parseTransaction",
                transactionType: t[0]
            })
        }
    }
}]);
