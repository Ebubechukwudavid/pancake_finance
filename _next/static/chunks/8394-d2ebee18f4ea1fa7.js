(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[8394], {
    98394: function(t, i, r) {
        !function(t, i) {
            "use strict";
            function n(t, i) {
                if (!t)
                    throw new Error(i || "Assertion failed")
            }
            function h(t, i) {
                t.super_ = i;
                var r = function() {};
                r.prototype = i.prototype,
                t.prototype = new r,
                t.prototype.constructor = t
            }
            function e(t, i, r) {
                if (e.isBN(t))
                    return t;
                this.negative = 0,
                this.words = null,
                this.length = 0,
                this.red = null,
                null !== t && ("le" !== i && "be" !== i || (r = i,
                i = 10),
                this._init(t || 0, i || 10, r || "be"))
            }
            var o;
            "object" === typeof t ? t.exports = e : i.BN = e,
            e.BN = e,
            e.wordSize = 26;
            try {
                o = "undefined" !== typeof window && "undefined" !== typeof window.Buffer ? window.Buffer : r(39362).Buffer
            } catch (R) {}
            function s(t, i) {
                var r = t.charCodeAt(i);
                return r >= 48 && r <= 57 ? r - 48 : r >= 65 && r <= 70 ? r - 55 : r >= 97 && r <= 102 ? r - 87 : void n(!1, "Invalid character in " + t)
            }
            function u(t, i, r) {
                var n = s(t, r);
                return r - 1 >= i && (n |= s(t, r - 1) << 4),
                n
            }
            function a(t, i, r, h) {
                for (var e = 0, o = 0, s = Math.min(t.length, r), u = i; u < s; u++) {
                    var a = t.charCodeAt(u) - 48;
                    e *= h,
                    o = a >= 49 ? a - 49 + 10 : a >= 17 ? a - 17 + 10 : a,
                    n(a >= 0 && o < h, "Invalid character"),
                    e += o
                }
                return e
            }
            function l(t, i) {
                t.words = i.words,
                t.length = i.length,
                t.negative = i.negative,
                t.red = i.red
            }
            if (e.isBN = function(t) {
                return t instanceof e || null !== t && "object" === typeof t && t.constructor.wordSize === e.wordSize && Array.isArray(t.words)
            }
            ,
            e.max = function(t, i) {
                return t.cmp(i) > 0 ? t : i
            }
            ,
            e.min = function(t, i) {
                return t.cmp(i) < 0 ? t : i
            }
            ,
            e.prototype._init = function(t, i, r) {
                if ("number" === typeof t)
                    return this._initNumber(t, i, r);
                if ("object" === typeof t)
                    return this._initArray(t, i, r);
                "hex" === i && (i = 16),
                n(i === (0 | i) && i >= 2 && i <= 36);
                var h = 0;
                "-" === (t = t.toString().replace(/\s+/g, ""))[0] && (h++,
                this.negative = 1),
                h < t.length && (16 === i ? this._parseHex(t, h, r) : (this._parseBase(t, i, h),
                "le" === r && this._initArray(this.toArray(), i, r)))
            }
            ,
            e.prototype._initNumber = function(t, i, r) {
                t < 0 && (this.negative = 1,
                t = -t),
                t < 67108864 ? (this.words = [67108863 & t],
                this.length = 1) : t < 4503599627370496 ? (this.words = [67108863 & t, t / 67108864 & 67108863],
                this.length = 2) : (n(t < 9007199254740992),
                this.words = [67108863 & t, t / 67108864 & 67108863, 1],
                this.length = 3),
                "le" === r && this._initArray(this.toArray(), i, r)
            }
            ,
            e.prototype._initArray = function(t, i, r) {
                if (n("number" === typeof t.length),
                t.length <= 0)
                    return this.words = [0],
                    this.length = 1,
                    this;
                this.length = Math.ceil(t.length / 3),
                this.words = new Array(this.length);
                for (var h = 0; h < this.length; h++)
                    this.words[h] = 0;
                var e, o, s = 0;
                if ("be" === r)
                    for (h = t.length - 1,
                    e = 0; h >= 0; h -= 3)
                        o = t[h] | t[h - 1] << 8 | t[h - 2] << 16,
                        this.words[e] |= o << s & 67108863,
                        this.words[e + 1] = o >>> 26 - s & 67108863,
                        (s += 24) >= 26 && (s -= 26,
                        e++);
                else if ("le" === r)
                    for (h = 0,
                    e = 0; h < t.length; h += 3)
                        o = t[h] | t[h + 1] << 8 | t[h + 2] << 16,
                        this.words[e] |= o << s & 67108863,
                        this.words[e + 1] = o >>> 26 - s & 67108863,
                        (s += 24) >= 26 && (s -= 26,
                        e++);
                return this._strip()
            }
            ,
            e.prototype._parseHex = function(t, i, r) {
                this.length = Math.ceil((t.length - i) / 6),
                this.words = new Array(this.length);
                for (var n = 0; n < this.length; n++)
                    this.words[n] = 0;
                var h, e = 0, o = 0;
                if ("be" === r)
                    for (n = t.length - 1; n >= i; n -= 2)
                        h = u(t, i, n) << e,
                        this.words[o] |= 67108863 & h,
                        e >= 18 ? (e -= 18,
                        o += 1,
                        this.words[o] |= h >>> 26) : e += 8;
                else
                    for (n = (t.length - i) % 2 === 0 ? i + 1 : i; n < t.length; n += 2)
                        h = u(t, i, n) << e,
                        this.words[o] |= 67108863 & h,
                        e >= 18 ? (e -= 18,
                        o += 1,
                        this.words[o] |= h >>> 26) : e += 8;
                this._strip()
            }
            ,
            e.prototype._parseBase = function(t, i, r) {
                this.words = [0],
                this.length = 1;
                for (var n = 0, h = 1; h <= 67108863; h *= i)
                    n++;
                n--,
                h = h / i | 0;
                for (var e = t.length - r, o = e % n, s = Math.min(e, e - o) + r, u = 0, l = r; l < s; l += n)
                    u = a(t, l, l + n, i),
                    this.imuln(h),
                    this.words[0] + u < 67108864 ? this.words[0] += u : this._iaddn(u);
                if (0 !== o) {
                    var m = 1;
                    for (u = a(t, l, t.length, i),
                    l = 0; l < o; l++)
                        m *= i;
                    this.imuln(m),
                    this.words[0] + u < 67108864 ? this.words[0] += u : this._iaddn(u)
                }
                this._strip()
            }
            ,
            e.prototype.copy = function(t) {
                t.words = new Array(this.length);
                for (var i = 0; i < this.length; i++)
                    t.words[i] = this.words[i];
                t.length = this.length,
                t.negative = this.negative,
                t.red = this.red
            }
            ,
            e.prototype._move = function(t) {
                l(t, this)
            }
            ,
            e.prototype.clone = function() {
                var t = new e(null);
                return this.copy(t),
                t
            }
            ,
            e.prototype._expand = function(t) {
                for (; this.length < t; )
                    this.words[this.length++] = 0;
                return this
            }
            ,
            e.prototype._strip = function() {
                for (; this.length > 1 && 0 === this.words[this.length - 1]; )
                    this.length--;
                return this._normSign()
            }
            ,
            e.prototype._normSign = function() {
                return 1 === this.length && 0 === this.words[0] && (this.negative = 0),
                this
            }
            ,
            "undefined" !== typeof Symbol && "function" === typeof Symbol.for)
                try {
                    e.prototype[Symbol.for("nodejs.util.inspect.custom")] = m
                } catch (R) {
                    e.prototype.inspect = m
                }
            else
                e.prototype.inspect = m;
            function m() {
                return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
            }
            var f = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"]
              , d = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
              , p = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
            e.prototype.toString = function(t, i) {
                var r;
                if (i = 0 | i || 1,
                16 === (t = t || 10) || "hex" === t) {
                    r = "";
                    for (var h = 0, e = 0, o = 0; o < this.length; o++) {
                        var s = this.words[o]
                          , u = (16777215 & (s << h | e)).toString(16);
                        e = s >>> 24 - h & 16777215,
                        (h += 2) >= 26 && (h -= 26,
                        o--),
                        r = 0 !== e || o !== this.length - 1 ? f[6 - u.length] + u + r : u + r
                    }
                    for (0 !== e && (r = e.toString(16) + r); r.length % i !== 0; )
                        r = "0" + r;
                    return 0 !== this.negative && (r = "-" + r),
                    r
                }
                if (t === (0 | t) && t >= 2 && t <= 36) {
                    var a = d[t]
                      , l = p[t];
                    r = "";
                    var m = this.clone();
                    for (m.negative = 0; !m.isZero(); ) {
                        var M = m.modrn(l).toString(t);
                        r = (m = m.idivn(l)).isZero() ? M + r : f[a - M.length] + M + r
                    }
                    for (this.isZero() && (r = "0" + r); r.length % i !== 0; )
                        r = "0" + r;
                    return 0 !== this.negative && (r = "-" + r),
                    r
                }
                n(!1, "Base should be between 2 and 36")
            }
            ,
            e.prototype.toNumber = function() {
                var t = this.words[0];
                return 2 === this.length ? t += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? t += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && n(!1, "Number can only safely store up to 53 bits"),
                0 !== this.negative ? -t : t
            }
            ,
            e.prototype.toJSON = function() {
                return this.toString(16, 2)
            }
            ,
            o && (e.prototype.toBuffer = function(t, i) {
                return this.toArrayLike(o, t, i)
            }
            ),
            e.prototype.toArray = function(t, i) {
                return this.toArrayLike(Array, t, i)
            }
            ;
            function M(t, i, r) {
                r.negative = i.negative ^ t.negative;
                var n = t.length + i.length | 0;
                r.length = n,
                n = n - 1 | 0;
                var h = 0 | t.words[0]
                  , e = 0 | i.words[0]
                  , o = h * e
                  , s = 67108863 & o
                  , u = o / 67108864 | 0;
                r.words[0] = s;
                for (var a = 1; a < n; a++) {
                    for (var l = u >>> 26, m = 67108863 & u, f = Math.min(a, i.length - 1), d = Math.max(0, a - t.length + 1); d <= f; d++) {
                        var p = a - d | 0;
                        l += (o = (h = 0 | t.words[p]) * (e = 0 | i.words[d]) + m) / 67108864 | 0,
                        m = 67108863 & o
                    }
                    r.words[a] = 0 | m,
                    u = 0 | l
                }
                return 0 !== u ? r.words[a] = 0 | u : r.length--,
                r._strip()
            }
            e.prototype.toArrayLike = function(t, i, r) {
                this._strip();
                var h = this.byteLength()
                  , e = r || Math.max(1, h);
                n(h <= e, "byte array longer than desired length"),
                n(e > 0, "Requested array length <= 0");
                var o = function(t, i) {
                    return t.allocUnsafe ? t.allocUnsafe(i) : new t(i)
                }(t, e);
                return this["_toArrayLike" + ("le" === i ? "LE" : "BE")](o, h),
                o
            }
            ,
            e.prototype._toArrayLikeLE = function(t, i) {
                for (var r = 0, n = 0, h = 0, e = 0; h < this.length; h++) {
                    var o = this.words[h] << e | n;
                    t[r++] = 255 & o,
                    r < t.length && (t[r++] = o >> 8 & 255),
                    r < t.length && (t[r++] = o >> 16 & 255),
                    6 === e ? (r < t.length && (t[r++] = o >> 24 & 255),
                    n = 0,
                    e = 0) : (n = o >>> 24,
                    e += 2)
                }
                if (r < t.length)
                    for (t[r++] = n; r < t.length; )
                        t[r++] = 0
            }
            ,
            e.prototype._toArrayLikeBE = function(t, i) {
                for (var r = t.length - 1, n = 0, h = 0, e = 0; h < this.length; h++) {
                    var o = this.words[h] << e | n;
                    t[r--] = 255 & o,
                    r >= 0 && (t[r--] = o >> 8 & 255),
                    r >= 0 && (t[r--] = o >> 16 & 255),
                    6 === e ? (r >= 0 && (t[r--] = o >> 24 & 255),
                    n = 0,
                    e = 0) : (n = o >>> 24,
                    e += 2)
                }
                if (r >= 0)
                    for (t[r--] = n; r >= 0; )
                        t[r--] = 0
            }
            ,
            Math.clz32 ? e.prototype._countBits = function(t) {
                return 32 - Math.clz32(t)
            }
            : e.prototype._countBits = function(t) {
                var i = t
                  , r = 0;
                return i >= 4096 && (r += 13,
                i >>>= 13),
                i >= 64 && (r += 7,
                i >>>= 7),
                i >= 8 && (r += 4,
                i >>>= 4),
                i >= 2 && (r += 2,
                i >>>= 2),
                r + i
            }
            ,
            e.prototype._zeroBits = function(t) {
                if (0 === t)
                    return 26;
                var i = t
                  , r = 0;
                return 0 === (8191 & i) && (r += 13,
                i >>>= 13),
                0 === (127 & i) && (r += 7,
                i >>>= 7),
                0 === (15 & i) && (r += 4,
                i >>>= 4),
                0 === (3 & i) && (r += 2,
                i >>>= 2),
                0 === (1 & i) && r++,
                r
            }
            ,
            e.prototype.bitLength = function() {
                var t = this.words[this.length - 1]
                  , i = this._countBits(t);
                return 26 * (this.length - 1) + i
            }
            ,
            e.prototype.zeroBits = function() {
                if (this.isZero())
                    return 0;
                for (var t = 0, i = 0; i < this.length; i++) {
                    var r = this._zeroBits(this.words[i]);
                    if (t += r,
                    26 !== r)
                        break
                }
                return t
            }
            ,
            e.prototype.byteLength = function() {
                return Math.ceil(this.bitLength() / 8)
            }
            ,
            e.prototype.toTwos = function(t) {
                return 0 !== this.negative ? this.abs().inotn(t).iaddn(1) : this.clone()
            }
            ,
            e.prototype.fromTwos = function(t) {
                return this.testn(t - 1) ? this.notn(t).iaddn(1).ineg() : this.clone()
            }
            ,
            e.prototype.isNeg = function() {
                return 0 !== this.negative
            }
            ,
            e.prototype.neg = function() {
                return this.clone().ineg()
            }
            ,
            e.prototype.ineg = function() {
                return this.isZero() || (this.negative ^= 1),
                this
            }
            ,
            e.prototype.iuor = function(t) {
                for (; this.length < t.length; )
                    this.words[this.length++] = 0;
                for (var i = 0; i < t.length; i++)
                    this.words[i] = this.words[i] | t.words[i];
                return this._strip()
            }
            ,
            e.prototype.ior = function(t) {
                return n(0 === (this.negative | t.negative)),
                this.iuor(t)
            }
            ,
            e.prototype.or = function(t) {
                return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this)
            }
            ,
            e.prototype.uor = function(t) {
                return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this)
            }
            ,
            e.prototype.iuand = function(t) {
                var i;
                i = this.length > t.length ? t : this;
                for (var r = 0; r < i.length; r++)
                    this.words[r] = this.words[r] & t.words[r];
                return this.length = i.length,
                this._strip()
            }
            ,
            e.prototype.iand = function(t) {
                return n(0 === (this.negative | t.negative)),
                this.iuand(t)
            }
            ,
            e.prototype.and = function(t) {
                return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this)
            }
            ,
            e.prototype.uand = function(t) {
                return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this)
            }
            ,
            e.prototype.iuxor = function(t) {
                var i, r;
                this.length > t.length ? (i = this,
                r = t) : (i = t,
                r = this);
                for (var n = 0; n < r.length; n++)
                    this.words[n] = i.words[n] ^ r.words[n];
                if (this !== i)
                    for (; n < i.length; n++)
                        this.words[n] = i.words[n];
                return this.length = i.length,
                this._strip()
            }
            ,
            e.prototype.ixor = function(t) {
                return n(0 === (this.negative | t.negative)),
                this.iuxor(t)
            }
            ,
            e.prototype.xor = function(t) {
                return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this)
            }
            ,
            e.prototype.uxor = function(t) {
                return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this)
            }
            ,
            e.prototype.inotn = function(t) {
                n("number" === typeof t && t >= 0);
                var i = 0 | Math.ceil(t / 26)
                  , r = t % 26;
                this._expand(i),
                r > 0 && i--;
                for (var h = 0; h < i; h++)
                    this.words[h] = 67108863 & ~this.words[h];
                return r > 0 && (this.words[h] = ~this.words[h] & 67108863 >> 26 - r),
                this._strip()
            }
            ,
            e.prototype.notn = function(t) {
                return this.clone().inotn(t)
            }
            ,
            e.prototype.setn = function(t, i) {
                n("number" === typeof t && t >= 0);
                var r = t / 26 | 0
                  , h = t % 26;
                return this._expand(r + 1),
                this.words[r] = i ? this.words[r] | 1 << h : this.words[r] & ~(1 << h),
                this._strip()
            }
            ,
            e.prototype.iadd = function(t) {
                var i, r, n;
                if (0 !== this.negative && 0 === t.negative)
                    return this.negative = 0,
                    i = this.isub(t),
                    this.negative ^= 1,
                    this._normSign();
                if (0 === this.negative && 0 !== t.negative)
                    return t.negative = 0,
                    i = this.isub(t),
                    t.negative = 1,
                    i._normSign();
                this.length > t.length ? (r = this,
                n = t) : (r = t,
                n = this);
                for (var h = 0, e = 0; e < n.length; e++)
                    i = (0 | r.words[e]) + (0 | n.words[e]) + h,
                    this.words[e] = 67108863 & i,
                    h = i >>> 26;
                for (; 0 !== h && e < r.length; e++)
                    i = (0 | r.words[e]) + h,
                    this.words[e] = 67108863 & i,
                    h = i >>> 26;
                if (this.length = r.length,
                0 !== h)
                    this.words[this.length] = h,
                    this.length++;
                else if (r !== this)
                    for (; e < r.length; e++)
                        this.words[e] = r.words[e];
                return this
            }
            ,
            e.prototype.add = function(t) {
                var i;
                return 0 !== t.negative && 0 === this.negative ? (t.negative = 0,
                i = this.sub(t),
                t.negative ^= 1,
                i) : 0 === t.negative && 0 !== this.negative ? (this.negative = 0,
                i = t.sub(this),
                this.negative = 1,
                i) : this.length > t.length ? this.clone().iadd(t) : t.clone().iadd(this)
            }
            ,
            e.prototype.isub = function(t) {
                if (0 !== t.negative) {
                    t.negative = 0;
                    var i = this.iadd(t);
                    return t.negative = 1,
                    i._normSign()
                }
                if (0 !== this.negative)
                    return this.negative = 0,
                    this.iadd(t),
                    this.negative = 1,
                    this._normSign();
                var r, n, h = this.cmp(t);
                if (0 === h)
                    return this.negative = 0,
                    this.length = 1,
                    this.words[0] = 0,
                    this;
                h > 0 ? (r = this,
                n = t) : (r = t,
                n = this);
                for (var e = 0, o = 0; o < n.length; o++)
                    e = (i = (0 | r.words[o]) - (0 | n.words[o]) + e) >> 26,
                    this.words[o] = 67108863 & i;
                for (; 0 !== e && o < r.length; o++)
                    e = (i = (0 | r.words[o]) + e) >> 26,
                    this.words[o] = 67108863 & i;
                if (0 === e && o < r.length && r !== this)
                    for (; o < r.length; o++)
                        this.words[o] = r.words[o];
                return this.length = Math.max(this.length, o),
                r !== this && (this.negative = 1),
                this._strip()
            }
            ,
            e.prototype.sub = function(t) {
                return this.clone().isub(t)
            }
            ;
            var v = function(t, i, r) {
                var n, h, e, o = t.words, s = i.words, u = r.words, a = 0, l = 0 | o[0], m = 8191 & l, f = l >>> 13, d = 0 | o[1], p = 8191 & d, M = d >>> 13, v = 0 | o[2], g = 8191 & v, c = v >>> 13, w = 0 | o[3], y = 8191 & w, b = w >>> 13, _ = 0 | o[4], k = 8191 & _, A = _ >>> 13, S = 0 | o[5], x = 8191 & S, B = S >>> 13, R = 0 | o[6], q = 8191 & R, Z = R >>> 13, L = 0 | o[7], N = 8191 & L, E = L >>> 13, I = 0 | o[8], z = 8191 & I, T = I >>> 13, O = 0 | o[9], j = 8191 & O, C = O >>> 13, K = 0 | s[0], P = 8191 & K, F = K >>> 13, U = 0 | s[1], D = 8191 & U, H = U >>> 13, J = 0 | s[2], G = 8191 & J, Q = J >>> 13, V = 0 | s[3], W = 8191 & V, X = V >>> 13, Y = 0 | s[4], $ = 8191 & Y, tt = Y >>> 13, it = 0 | s[5], rt = 8191 & it, nt = it >>> 13, ht = 0 | s[6], et = 8191 & ht, ot = ht >>> 13, st = 0 | s[7], ut = 8191 & st, at = st >>> 13, lt = 0 | s[8], mt = 8191 & lt, ft = lt >>> 13, dt = 0 | s[9], pt = 8191 & dt, Mt = dt >>> 13;
                r.negative = t.negative ^ i.negative,
                r.length = 19;
                var vt = (a + (n = Math.imul(m, P)) | 0) + ((8191 & (h = (h = Math.imul(m, F)) + Math.imul(f, P) | 0)) << 13) | 0;
                a = ((e = Math.imul(f, F)) + (h >>> 13) | 0) + (vt >>> 26) | 0,
                vt &= 67108863,
                n = Math.imul(p, P),
                h = (h = Math.imul(p, F)) + Math.imul(M, P) | 0,
                e = Math.imul(M, F);
                var gt = (a + (n = n + Math.imul(m, D) | 0) | 0) + ((8191 & (h = (h = h + Math.imul(m, H) | 0) + Math.imul(f, D) | 0)) << 13) | 0;
                a = ((e = e + Math.imul(f, H) | 0) + (h >>> 13) | 0) + (gt >>> 26) | 0,
                gt &= 67108863,
                n = Math.imul(g, P),
                h = (h = Math.imul(g, F)) + Math.imul(c, P) | 0,
                e = Math.imul(c, F),
                n = n + Math.imul(p, D) | 0,
                h = (h = h + Math.imul(p, H) | 0) + Math.imul(M, D) | 0,
                e = e + Math.imul(M, H) | 0;
                var ct = (a + (n = n + Math.imul(m, G) | 0) | 0) + ((8191 & (h = (h = h + Math.imul(m, Q) | 0) + Math.imul(f, G) | 0)) << 13) | 0;
                a = ((e = e + Math.imul(f, Q) | 0) + (h >>> 13) | 0) + (ct >>> 26) | 0,
                ct &= 67108863,
                n = Math.imul(y, P),
                h = (h = Math.imul(y, F)) + Math.imul(b, P) | 0,
                e = Math.imul(b, F),
                n = n + Math.imul(g, D) | 0,
                h = (h = h + Math.imul(g, H) | 0) + Math.imul(c, D) | 0,
                e = e + Math.imul(c, H) | 0,
                n = n + Math.imul(p, G) | 0,
                h = (h = h + Math.imul(p, Q) | 0) + Math.imul(M, G) | 0,
                e = e + Math.imul(M, Q) | 0;
                var wt = (a + (n = n + Math.imul(m, W) | 0) | 0) + ((8191 & (h = (h = h + Math.imul(m, X) | 0) + Math.imul(f, W) | 0)) << 13) | 0;
                a = ((e = e + Math.imul(f, X) | 0) + (h >>> 13) | 0) + (wt >>> 26) | 0,
                wt &= 67108863,
                n = Math.imul(k, P),
                h = (h = Math.imul(k, F)) + Math.imul(A, P) | 0,
                e = Math.imul(A, F),
                n = n + Math.imul(y, D) | 0,
                h = (h = h + Math.imul(y, H) | 0) + Math.imul(b, D) | 0,
                e = e + Math.imul(b, H) | 0,
                n = n + Math.imul(g, G) | 0,
                h = (h = h + Math.imul(g, Q) | 0) + Math.imul(c, G) | 0,
                e = e + Math.imul(c, Q) | 0,
                n = n + Math.imul(p, W) | 0,
                h = (h = h + Math.imul(p, X) | 0) + Math.imul(M, W) | 0,
                e = e + Math.imul(M, X) | 0;
                var yt = (a + (n = n + Math.imul(m, $) | 0) | 0) + ((8191 & (h = (h = h + Math.imul(m, tt) | 0) + Math.imul(f, $) | 0)) << 13) | 0;
                a = ((e = e + Math.imul(f, tt) | 0) + (h >>> 13) | 0) + (yt >>> 26) | 0,
                yt &= 67108863,
                n = Math.imul(x, P),
                h = (h = Math.imul(x, F)) + Math.imul(B, P) | 0,
                e = Math.imul(B, F),
                n = n + Math.imul(k, D) | 0,
                h = (h = h + Math.imul(k, H) | 0) + Math.imul(A, D) | 0,
                e = e + Math.imul(A, H) | 0,
                n = n + Math.imul(y, G) | 0,
                h = (h = h + Math.imul(y, Q) | 0) + Math.imul(b, G) | 0,
                e = e + Math.imul(b, Q) | 0,
                n = n + Math.imul(g, W) | 0,
                h = (h = h + Math.imul(g, X) | 0) + Math.imul(c, W) | 0,
                e = e + Math.imul(c, X) | 0,
                n = n + Math.imul(p, $) | 0,
                h = (h = h + Math.imul(p, tt) | 0) + Math.imul(M, $) | 0,
                e = e + Math.imul(M, tt) | 0;
                var bt = (a + (n = n + Math.imul(m, rt) | 0) | 0) + ((8191 & (h = (h = h + Math.imul(m, nt) | 0) + Math.imul(f, rt) | 0)) << 13) | 0;
                a = ((e = e + Math.imul(f, nt) | 0) + (h >>> 13) | 0) + (bt >>> 26) | 0,
                bt &= 67108863,
                n = Math.imul(q, P),
                h = (h = Math.imul(q, F)) + Math.imul(Z, P) | 0,
                e = Math.imul(Z, F),
                n = n + Math.imul(x, D) | 0,
                h = (h = h + Math.imul(x, H) | 0) + Math.imul(B, D) | 0,
                e = e + Math.imul(B, H) | 0,
                n = n + Math.imul(k, G) | 0,
                h = (h = h + Math.imul(k, Q) | 0) + Math.imul(A, G) | 0,
                e = e + Math.imul(A, Q) | 0,
                n = n + Math.imul(y, W) | 0,
                h = (h = h + Math.imul(y, X) | 0) + Math.imul(b, W) | 0,
                e = e + Math.imul(b, X) | 0,
                n = n + Math.imul(g, $) | 0,
                h = (h = h + Math.imul(g, tt) | 0) + Math.imul(c, $) | 0,
                e = e + Math.imul(c, tt) | 0,
                n = n + Math.imul(p, rt) | 0,
                h = (h = h + Math.imul(p, nt) | 0) + Math.imul(M, rt) | 0,
                e = e + Math.imul(M, nt) | 0;
                var _t = (a + (n = n + Math.imul(m, et) | 0) | 0) + ((8191 & (h = (h = h + Math.imul(m, ot) | 0) + Math.imul(f, et) | 0)) << 13) | 0;
                a = ((e = e + Math.imul(f, ot) | 0) + (h >>> 13) | 0) + (_t >>> 26) | 0,
                _t &= 67108863,
                n = Math.imul(N, P),
                h = (h = Math.imul(N, F)) + Math.imul(E, P) | 0,
                e = Math.imul(E, F),
                n = n + Math.imul(q, D) | 0,
                h = (h = h + Math.imul(q, H) | 0) + Math.imul(Z, D) | 0,
                e = e + Math.imul(Z, H) | 0,
                n = n + Math.imul(x, G) | 0,
                h = (h = h + Math.imul(x, Q) | 0) + Math.imul(B, G) | 0,
                e = e + Math.imul(B, Q) | 0,
                n = n + Math.imul(k, W) | 0,
                h = (h = h + Math.imul(k, X) | 0) + Math.imul(A, W) | 0,
                e = e + Math.imul(A, X) | 0,
                n = n + Math.imul(y, $) | 0,
                h = (h = h + Math.imul(y, tt) | 0) + Math.imul(b, $) | 0,
                e = e + Math.imul(b, tt) | 0,
                n = n + Math.imul(g, rt) | 0,
                h = (h = h + Math.imul(g, nt) | 0) + Math.imul(c, rt) | 0,
                e = e + Math.imul(c, nt) | 0,
                n = n + Math.imul(p, et) | 0,
                h = (h = h + Math.imul(p, ot) | 0) + Math.imul(M, et) | 0,
                e = e + Math.imul(M, ot) | 0;
                var kt = (a + (n = n + Math.imul(m, ut) | 0) | 0) + ((8191 & (h = (h = h + Math.imul(m, at) | 0) + Math.imul(f, ut) | 0)) << 13) | 0;
                a = ((e = e + Math.imul(f, at) | 0) + (h >>> 13) | 0) + (kt >>> 26) | 0,
                kt &= 67108863,
                n = Math.imul(z, P),
                h = (h = Math.imul(z, F)) + Math.imul(T, P) | 0,
                e = Math.imul(T, F),
                n = n + Math.imul(N, D) | 0,
                h = (h = h + Math.imul(N, H) | 0) + Math.imul(E, D) | 0,
                e = e + Math.imul(E, H) | 0,
                n = n + Math.imul(q, G) | 0,
                h = (h = h + Math.imul(q, Q) | 0) + Math.imul(Z, G) | 0,
                e = e + Math.imul(Z, Q) | 0,
                n = n + Math.imul(x, W) | 0,
                h = (h = h + Math.imul(x, X) | 0) + Math.imul(B, W) | 0,
                e = e + Math.imul(B, X) | 0,
                n = n + Math.imul(k, $) | 0,
                h = (h = h + Math.imul(k, tt) | 0) + Math.imul(A, $) | 0,
                e = e + Math.imul(A, tt) | 0,
                n = n + Math.imul(y, rt) | 0,
                h = (h = h + Math.imul(y, nt) | 0) + Math.imul(b, rt) | 0,
                e = e + Math.imul(b, nt) | 0,
                n = n + Math.imul(g, et) | 0,
                h = (h = h + Math.imul(g, ot) | 0) + Math.imul(c, et) | 0,
                e = e + Math.imul(c, ot) | 0,
                n = n + Math.imul(p, ut) | 0,
                h = (h = h + Math.imul(p, at) | 0) + Math.imul(M, ut) | 0,
                e = e + Math.imul(M, at) | 0;
                var At = (a + (n = n + Math.imul(m, mt) | 0) | 0) + ((8191 & (h = (h = h + Math.imul(m, ft) | 0) + Math.imul(f, mt) | 0)) << 13) | 0;
                a = ((e = e + Math.imul(f, ft) | 0) + (h >>> 13) | 0) + (At >>> 26) | 0,
                At &= 67108863,
                n = Math.imul(j, P),
                h = (h = Math.imul(j, F)) + Math.imul(C, P) | 0,
                e = Math.imul(C, F),
                n = n + Math.imul(z, D) | 0,
                h = (h = h + Math.imul(z, H) | 0) + Math.imul(T, D) | 0,
                e = e + Math.imul(T, H) | 0,
                n = n + Math.imul(N, G) | 0,
                h = (h = h + Math.imul(N, Q) | 0) + Math.imul(E, G) | 0,
                e = e + Math.imul(E, Q) | 0,
                n = n + Math.imul(q, W) | 0,
                h = (h = h + Math.imul(q, X) | 0) + Math.imul(Z, W) | 0,
                e = e + Math.imul(Z, X) | 0,
                n = n + Math.imul(x, $) | 0,
                h = (h = h + Math.imul(x, tt) | 0) + Math.imul(B, $) | 0,
                e = e + Math.imul(B, tt) | 0,
                n = n + Math.imul(k, rt) | 0,
                h = (h = h + Math.imul(k, nt) | 0) + Math.imul(A, rt) | 0,
                e = e + Math.imul(A, nt) | 0,
                n = n + Math.imul(y, et) | 0,
                h = (h = h + Math.imul(y, ot) | 0) + Math.imul(b, et) | 0,
                e = e + Math.imul(b, ot) | 0,
                n = n + Math.imul(g, ut) | 0,
                h = (h = h + Math.imul(g, at) | 0) + Math.imul(c, ut) | 0,
                e = e + Math.imul(c, at) | 0,
                n = n + Math.imul(p, mt) | 0,
                h = (h = h + Math.imul(p, ft) | 0) + Math.imul(M, mt) | 0,
                e = e + Math.imul(M, ft) | 0;
                var St = (a + (n = n + Math.imul(m, pt) | 0) | 0) + ((8191 & (h = (h = h + Math.imul(m, Mt) | 0) + Math.imul(f, pt) | 0)) << 13) | 0;
                a = ((e = e + Math.imul(f, Mt) | 0) + (h >>> 13) | 0) + (St >>> 26) | 0,
                St &= 67108863,
                n = Math.imul(j, D),
                h = (h = Math.imul(j, H)) + Math.imul(C, D) | 0,
                e = Math.imul(C, H),
                n = n + Math.imul(z, G) | 0,
                h = (h = h + Math.imul(z, Q) | 0) + Math.imul(T, G) | 0,
                e = e + Math.imul(T, Q) | 0,
                n = n + Math.imul(N, W) | 0,
                h = (h = h + Math.imul(N, X) | 0) + Math.imul(E, W) | 0,
                e = e + Math.imul(E, X) | 0,
                n = n + Math.imul(q, $) | 0,
                h = (h = h + Math.imul(q, tt) | 0) + Math.imul(Z, $) | 0,
                e = e + Math.imul(Z, tt) | 0,
                n = n + Math.imul(x, rt) | 0,
                h = (h = h + Math.imul(x, nt) | 0) + Math.imul(B, rt) | 0,
                e = e + Math.imul(B, nt) | 0,
                n = n + Math.imul(k, et) | 0,
                h = (h = h + Math.imul(k, ot) | 0) + Math.imul(A, et) | 0,
                e = e + Math.imul(A, ot) | 0,
                n = n + Math.imul(y, ut) | 0,
                h = (h = h + Math.imul(y, at) | 0) + Math.imul(b, ut) | 0,
                e = e + Math.imul(b, at) | 0,
                n = n + Math.imul(g, mt) | 0,
                h = (h = h + Math.imul(g, ft) | 0) + Math.imul(c, mt) | 0,
                e = e + Math.imul(c, ft) | 0;
                var xt = (a + (n = n + Math.imul(p, pt) | 0) | 0) + ((8191 & (h = (h = h + Math.imul(p, Mt) | 0) + Math.imul(M, pt) | 0)) << 13) | 0;
                a = ((e = e + Math.imul(M, Mt) | 0) + (h >>> 13) | 0) + (xt >>> 26) | 0,
                xt &= 67108863,
                n = Math.imul(j, G),
                h = (h = Math.imul(j, Q)) + Math.imul(C, G) | 0,
                e = Math.imul(C, Q),
                n = n + Math.imul(z, W) | 0,
                h = (h = h + Math.imul(z, X) | 0) + Math.imul(T, W) | 0,
                e = e + Math.imul(T, X) | 0,
                n = n + Math.imul(N, $) | 0,
                h = (h = h + Math.imul(N, tt) | 0) + Math.imul(E, $) | 0,
                e = e + Math.imul(E, tt) | 0,
                n = n + Math.imul(q, rt) | 0,
                h = (h = h + Math.imul(q, nt) | 0) + Math.imul(Z, rt) | 0,
                e = e + Math.imul(Z, nt) | 0,
                n = n + Math.imul(x, et) | 0,
                h = (h = h + Math.imul(x, ot) | 0) + Math.imul(B, et) | 0,
                e = e + Math.imul(B, ot) | 0,
                n = n + Math.imul(k, ut) | 0,
                h = (h = h + Math.imul(k, at) | 0) + Math.imul(A, ut) | 0,
                e = e + Math.imul(A, at) | 0,
                n = n + Math.imul(y, mt) | 0,
                h = (h = h + Math.imul(y, ft) | 0) + Math.imul(b, mt) | 0,
                e = e + Math.imul(b, ft) | 0;
                var Bt = (a + (n = n + Math.imul(g, pt) | 0) | 0) + ((8191 & (h = (h = h + Math.imul(g, Mt) | 0) + Math.imul(c, pt) | 0)) << 13) | 0;
                a = ((e = e + Math.imul(c, Mt) | 0) + (h >>> 13) | 0) + (Bt >>> 26) | 0,
                Bt &= 67108863,
                n = Math.imul(j, W),
                h = (h = Math.imul(j, X)) + Math.imul(C, W) | 0,
                e = Math.imul(C, X),
                n = n + Math.imul(z, $) | 0,
                h = (h = h + Math.imul(z, tt) | 0) + Math.imul(T, $) | 0,
                e = e + Math.imul(T, tt) | 0,
                n = n + Math.imul(N, rt) | 0,
                h = (h = h + Math.imul(N, nt) | 0) + Math.imul(E, rt) | 0,
                e = e + Math.imul(E, nt) | 0,
                n = n + Math.imul(q, et) | 0,
                h = (h = h + Math.imul(q, ot) | 0) + Math.imul(Z, et) | 0,
                e = e + Math.imul(Z, ot) | 0,
                n = n + Math.imul(x, ut) | 0,
                h = (h = h + Math.imul(x, at) | 0) + Math.imul(B, ut) | 0,
                e = e + Math.imul(B, at) | 0,
                n = n + Math.imul(k, mt) | 0,
                h = (h = h + Math.imul(k, ft) | 0) + Math.imul(A, mt) | 0,
                e = e + Math.imul(A, ft) | 0;
                var Rt = (a + (n = n + Math.imul(y, pt) | 0) | 0) + ((8191 & (h = (h = h + Math.imul(y, Mt) | 0) + Math.imul(b, pt) | 0)) << 13) | 0;
                a = ((e = e + Math.imul(b, Mt) | 0) + (h >>> 13) | 0) + (Rt >>> 26) | 0,
                Rt &= 67108863,
                n = Math.imul(j, $),
                h = (h = Math.imul(j, tt)) + Math.imul(C, $) | 0,
                e = Math.imul(C, tt),
                n = n + Math.imul(z, rt) | 0,
                h = (h = h + Math.imul(z, nt) | 0) + Math.imul(T, rt) | 0,
                e = e + Math.imul(T, nt) | 0,
                n = n + Math.imul(N, et) | 0,
                h = (h = h + Math.imul(N, ot) | 0) + Math.imul(E, et) | 0,
                e = e + Math.imul(E, ot) | 0,
                n = n + Math.imul(q, ut) | 0,
                h = (h = h + Math.imul(q, at) | 0) + Math.imul(Z, ut) | 0,
                e = e + Math.imul(Z, at) | 0,
                n = n + Math.imul(x, mt) | 0,
                h = (h = h + Math.imul(x, ft) | 0) + Math.imul(B, mt) | 0,
                e = e + Math.imul(B, ft) | 0;
                var qt = (a + (n = n + Math.imul(k, pt) | 0) | 0) + ((8191 & (h = (h = h + Math.imul(k, Mt) | 0) + Math.imul(A, pt) | 0)) << 13) | 0;
                a = ((e = e + Math.imul(A, Mt) | 0) + (h >>> 13) | 0) + (qt >>> 26) | 0,
                qt &= 67108863,
                n = Math.imul(j, rt),
                h = (h = Math.imul(j, nt)) + Math.imul(C, rt) | 0,
                e = Math.imul(C, nt),
                n = n + Math.imul(z, et) | 0,
                h = (h = h + Math.imul(z, ot) | 0) + Math.imul(T, et) | 0,
                e = e + Math.imul(T, ot) | 0,
                n = n + Math.imul(N, ut) | 0,
                h = (h = h + Math.imul(N, at) | 0) + Math.imul(E, ut) | 0,
                e = e + Math.imul(E, at) | 0,
                n = n + Math.imul(q, mt) | 0,
                h = (h = h + Math.imul(q, ft) | 0) + Math.imul(Z, mt) | 0,
                e = e + Math.imul(Z, ft) | 0;
                var Zt = (a + (n = n + Math.imul(x, pt) | 0) | 0) + ((8191 & (h = (h = h + Math.imul(x, Mt) | 0) + Math.imul(B, pt) | 0)) << 13) | 0;
                a = ((e = e + Math.imul(B, Mt) | 0) + (h >>> 13) | 0) + (Zt >>> 26) | 0,
                Zt &= 67108863,
                n = Math.imul(j, et),
                h = (h = Math.imul(j, ot)) + Math.imul(C, et) | 0,
                e = Math.imul(C, ot),
                n = n + Math.imul(z, ut) | 0,
                h = (h = h + Math.imul(z, at) | 0) + Math.imul(T, ut) | 0,
                e = e + Math.imul(T, at) | 0,
                n = n + Math.imul(N, mt) | 0,
                h = (h = h + Math.imul(N, ft) | 0) + Math.imul(E, mt) | 0,
                e = e + Math.imul(E, ft) | 0;
                var Lt = (a + (n = n + Math.imul(q, pt) | 0) | 0) + ((8191 & (h = (h = h + Math.imul(q, Mt) | 0) + Math.imul(Z, pt) | 0)) << 13) | 0;
                a = ((e = e + Math.imul(Z, Mt) | 0) + (h >>> 13) | 0) + (Lt >>> 26) | 0,
                Lt &= 67108863,
                n = Math.imul(j, ut),
                h = (h = Math.imul(j, at)) + Math.imul(C, ut) | 0,
                e = Math.imul(C, at),
                n = n + Math.imul(z, mt) | 0,
                h = (h = h + Math.imul(z, ft) | 0) + Math.imul(T, mt) | 0,
                e = e + Math.imul(T, ft) | 0;
                var Nt = (a + (n = n + Math.imul(N, pt) | 0) | 0) + ((8191 & (h = (h = h + Math.imul(N, Mt) | 0) + Math.imul(E, pt) | 0)) << 13) | 0;
                a = ((e = e + Math.imul(E, Mt) | 0) + (h >>> 13) | 0) + (Nt >>> 26) | 0,
                Nt &= 67108863,
                n = Math.imul(j, mt),
                h = (h = Math.imul(j, ft)) + Math.imul(C, mt) | 0,
                e = Math.imul(C, ft);
                var Et = (a + (n = n + Math.imul(z, pt) | 0) | 0) + ((8191 & (h = (h = h + Math.imul(z, Mt) | 0) + Math.imul(T, pt) | 0)) << 13) | 0;
                a = ((e = e + Math.imul(T, Mt) | 0) + (h >>> 13) | 0) + (Et >>> 26) | 0,
                Et &= 67108863;
                var It = (a + (n = Math.imul(j, pt)) | 0) + ((8191 & (h = (h = Math.imul(j, Mt)) + Math.imul(C, pt) | 0)) << 13) | 0;
                return a = ((e = Math.imul(C, Mt)) + (h >>> 13) | 0) + (It >>> 26) | 0,
                It &= 67108863,
                u[0] = vt,
                u[1] = gt,
                u[2] = ct,
                u[3] = wt,
                u[4] = yt,
                u[5] = bt,
                u[6] = _t,
                u[7] = kt,
                u[8] = At,
                u[9] = St,
                u[10] = xt,
                u[11] = Bt,
                u[12] = Rt,
                u[13] = qt,
                u[14] = Zt,
                u[15] = Lt,
                u[16] = Nt,
                u[17] = Et,
                u[18] = It,
                0 !== a && (u[19] = a,
                r.length++),
                r
            };
            function g(t, i, r) {
                r.negative = i.negative ^ t.negative,
                r.length = t.length + i.length;
                for (var n = 0, h = 0, e = 0; e < r.length - 1; e++) {
                    var o = h;
                    h = 0;
                    for (var s = 67108863 & n, u = Math.min(e, i.length - 1), a = Math.max(0, e - t.length + 1); a <= u; a++) {
                        var l = e - a
                          , m = (0 | t.words[l]) * (0 | i.words[a])
                          , f = 67108863 & m;
                        s = 67108863 & (f = f + s | 0),
                        h += (o = (o = o + (m / 67108864 | 0) | 0) + (f >>> 26) | 0) >>> 26,
                        o &= 67108863
                    }
                    r.words[e] = s,
                    n = o,
                    o = h
                }
                return 0 !== n ? r.words[e] = n : r.length--,
                r._strip()
            }
            function c(t, i, r) {
                return g(t, i, r)
            }
            function w(t, i) {
                this.x = t,
                this.y = i
            }
            Math.imul || (v = M),
            e.prototype.mulTo = function(t, i) {
                var r = this.length + t.length;
                return 10 === this.length && 10 === t.length ? v(this, t, i) : r < 63 ? M(this, t, i) : r < 1024 ? g(this, t, i) : c(this, t, i)
            }
            ,
            w.prototype.makeRBT = function(t) {
                for (var i = new Array(t), r = e.prototype._countBits(t) - 1, n = 0; n < t; n++)
                    i[n] = this.revBin(n, r, t);
                return i
            }
            ,
            w.prototype.revBin = function(t, i, r) {
                if (0 === t || t === r - 1)
                    return t;
                for (var n = 0, h = 0; h < i; h++)
                    n |= (1 & t) << i - h - 1,
                    t >>= 1;
                return n
            }
            ,
            w.prototype.permute = function(t, i, r, n, h, e) {
                for (var o = 0; o < e; o++)
                    n[o] = i[t[o]],
                    h[o] = r[t[o]]
            }
            ,
            w.prototype.transform = function(t, i, r, n, h, e) {
                this.permute(e, t, i, r, n, h);
                for (var o = 1; o < h; o <<= 1)
                    for (var s = o << 1, u = Math.cos(2 * Math.PI / s), a = Math.sin(2 * Math.PI / s), l = 0; l < h; l += s)
                        for (var m = u, f = a, d = 0; d < o; d++) {
                            var p = r[l + d]
                              , M = n[l + d]
                              , v = r[l + d + o]
                              , g = n[l + d + o]
                              , c = m * v - f * g;
                            g = m * g + f * v,
                            v = c,
                            r[l + d] = p + v,
                            n[l + d] = M + g,
                            r[l + d + o] = p - v,
                            n[l + d + o] = M - g,
                            d !== s && (c = u * m - a * f,
                            f = u * f + a * m,
                            m = c)
                        }
            }
            ,
            w.prototype.guessLen13b = function(t, i) {
                var r = 1 | Math.max(i, t)
                  , n = 1 & r
                  , h = 0;
                for (r = r / 2 | 0; r; r >>>= 1)
                    h++;
                return 1 << h + 1 + n
            }
            ,
            w.prototype.conjugate = function(t, i, r) {
                if (!(r <= 1))
                    for (var n = 0; n < r / 2; n++) {
                        var h = t[n];
                        t[n] = t[r - n - 1],
                        t[r - n - 1] = h,
                        h = i[n],
                        i[n] = -i[r - n - 1],
                        i[r - n - 1] = -h
                    }
            }
            ,
            w.prototype.normalize13b = function(t, i) {
                for (var r = 0, n = 0; n < i / 2; n++) {
                    var h = 8192 * Math.round(t[2 * n + 1] / i) + Math.round(t[2 * n] / i) + r;
                    t[n] = 67108863 & h,
                    r = h < 67108864 ? 0 : h / 67108864 | 0
                }
                return t
            }
            ,
            w.prototype.convert13b = function(t, i, r, h) {
                for (var e = 0, o = 0; o < i; o++)
                    e += 0 | t[o],
                    r[2 * o] = 8191 & e,
                    e >>>= 13,
                    r[2 * o + 1] = 8191 & e,
                    e >>>= 13;
                for (o = 2 * i; o < h; ++o)
                    r[o] = 0;
                n(0 === e),
                n(0 === (-8192 & e))
            }
            ,
            w.prototype.stub = function(t) {
                for (var i = new Array(t), r = 0; r < t; r++)
                    i[r] = 0;
                return i
            }
            ,
            w.prototype.mulp = function(t, i, r) {
                var n = 2 * this.guessLen13b(t.length, i.length)
                  , h = this.makeRBT(n)
                  , e = this.stub(n)
                  , o = new Array(n)
                  , s = new Array(n)
                  , u = new Array(n)
                  , a = new Array(n)
                  , l = new Array(n)
                  , m = new Array(n)
                  , f = r.words;
                f.length = n,
                this.convert13b(t.words, t.length, o, n),
                this.convert13b(i.words, i.length, a, n),
                this.transform(o, e, s, u, n, h),
                this.transform(a, e, l, m, n, h);
                for (var d = 0; d < n; d++) {
                    var p = s[d] * l[d] - u[d] * m[d];
                    u[d] = s[d] * m[d] + u[d] * l[d],
                    s[d] = p
                }
                return this.conjugate(s, u, n),
                this.transform(s, u, f, e, n, h),
                this.conjugate(f, e, n),
                this.normalize13b(f, n),
                r.negative = t.negative ^ i.negative,
                r.length = t.length + i.length,
                r._strip()
            }
            ,
            e.prototype.mul = function(t) {
                var i = new e(null);
                return i.words = new Array(this.length + t.length),
                this.mulTo(t, i)
            }
            ,
            e.prototype.mulf = function(t) {
                var i = new e(null);
                return i.words = new Array(this.length + t.length),
                c(this, t, i)
            }
            ,
            e.prototype.imul = function(t) {
                return this.clone().mulTo(t, this)
            }
            ,
            e.prototype.imuln = function(t) {
                var i = t < 0;
                i && (t = -t),
                n("number" === typeof t),
                n(t < 67108864);
                for (var r = 0, h = 0; h < this.length; h++) {
                    var e = (0 | this.words[h]) * t
                      , o = (67108863 & e) + (67108863 & r);
                    r >>= 26,
                    r += e / 67108864 | 0,
                    r += o >>> 26,
                    this.words[h] = 67108863 & o
                }
                return 0 !== r && (this.words[h] = r,
                this.length++),
                i ? this.ineg() : this
            }
            ,
            e.prototype.muln = function(t) {
                return this.clone().imuln(t)
            }
            ,
            e.prototype.sqr = function() {
                return this.mul(this)
            }
            ,
            e.prototype.isqr = function() {
                return this.imul(this.clone())
            }
            ,
            e.prototype.pow = function(t) {
                var i = function(t) {
                    for (var i = new Array(t.bitLength()), r = 0; r < i.length; r++) {
                        var n = r / 26 | 0
                          , h = r % 26;
                        i[r] = t.words[n] >>> h & 1
                    }
                    return i
                }(t);
                if (0 === i.length)
                    return new e(1);
                for (var r = this, n = 0; n < i.length && 0 === i[n]; n++,
                r = r.sqr())
                    ;
                if (++n < i.length)
                    for (var h = r.sqr(); n < i.length; n++,
                    h = h.sqr())
                        0 !== i[n] && (r = r.mul(h));
                return r
            }
            ,
            e.prototype.iushln = function(t) {
                n("number" === typeof t && t >= 0);
                var i, r = t % 26, h = (t - r) / 26, e = 67108863 >>> 26 - r << 26 - r;
                if (0 !== r) {
                    var o = 0;
                    for (i = 0; i < this.length; i++) {
                        var s = this.words[i] & e
                          , u = (0 | this.words[i]) - s << r;
                        this.words[i] = u | o,
                        o = s >>> 26 - r
                    }
                    o && (this.words[i] = o,
                    this.length++)
                }
                if (0 !== h) {
                    for (i = this.length - 1; i >= 0; i--)
                        this.words[i + h] = this.words[i];
                    for (i = 0; i < h; i++)
                        this.words[i] = 0;
                    this.length += h
                }
                return this._strip()
            }
            ,
            e.prototype.ishln = function(t) {
                return n(0 === this.negative),
                this.iushln(t)
            }
            ,
            e.prototype.iushrn = function(t, i, r) {
                var h;
                n("number" === typeof t && t >= 0),
                h = i ? (i - i % 26) / 26 : 0;
                var e = t % 26
                  , o = Math.min((t - e) / 26, this.length)
                  , s = 67108863 ^ 67108863 >>> e << e
                  , u = r;
                if (h -= o,
                h = Math.max(0, h),
                u) {
                    for (var a = 0; a < o; a++)
                        u.words[a] = this.words[a];
                    u.length = o
                }
                if (0 === o)
                    ;
                else if (this.length > o)
                    for (this.length -= o,
                    a = 0; a < this.length; a++)
                        this.words[a] = this.words[a + o];
                else
                    this.words[0] = 0,
                    this.length = 1;
                var l = 0;
                for (a = this.length - 1; a >= 0 && (0 !== l || a >= h); a--) {
                    var m = 0 | this.words[a];
                    this.words[a] = l << 26 - e | m >>> e,
                    l = m & s
                }
                return u && 0 !== l && (u.words[u.length++] = l),
                0 === this.length && (this.words[0] = 0,
                this.length = 1),
                this._strip()
            }
            ,
            e.prototype.ishrn = function(t, i, r) {
                return n(0 === this.negative),
                this.iushrn(t, i, r)
            }
            ,
            e.prototype.shln = function(t) {
                return this.clone().ishln(t)
            }
            ,
            e.prototype.ushln = function(t) {
                return this.clone().iushln(t)
            }
            ,
            e.prototype.shrn = function(t) {
                return this.clone().ishrn(t)
            }
            ,
            e.prototype.ushrn = function(t) {
                return this.clone().iushrn(t)
            }
            ,
            e.prototype.testn = function(t) {
                n("number" === typeof t && t >= 0);
                var i = t % 26
                  , r = (t - i) / 26
                  , h = 1 << i;
                return !(this.length <= r) && !!(this.words[r] & h)
            }
            ,
            e.prototype.imaskn = function(t) {
                n("number" === typeof t && t >= 0);
                var i = t % 26
                  , r = (t - i) / 26;
                if (n(0 === this.negative, "imaskn works only with positive numbers"),
                this.length <= r)
                    return this;
                if (0 !== i && r++,
                this.length = Math.min(r, this.length),
                0 !== i) {
                    var h = 67108863 ^ 67108863 >>> i << i;
                    this.words[this.length - 1] &= h
                }
                return this._strip()
            }
            ,
            e.prototype.maskn = function(t) {
                return this.clone().imaskn(t)
            }
            ,
            e.prototype.iaddn = function(t) {
                return n("number" === typeof t),
                n(t < 67108864),
                t < 0 ? this.isubn(-t) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) <= t ? (this.words[0] = t - (0 | this.words[0]),
                this.negative = 0,
                this) : (this.negative = 0,
                this.isubn(t),
                this.negative = 1,
                this) : this._iaddn(t)
            }
            ,
            e.prototype._iaddn = function(t) {
                this.words[0] += t;
                for (var i = 0; i < this.length && this.words[i] >= 67108864; i++)
                    this.words[i] -= 67108864,
                    i === this.length - 1 ? this.words[i + 1] = 1 : this.words[i + 1]++;
                return this.length = Math.max(this.length, i + 1),
                this
            }
            ,
            e.prototype.isubn = function(t) {
                if (n("number" === typeof t),
                n(t < 67108864),
                t < 0)
                    return this.iaddn(-t);
                if (0 !== this.negative)
                    return this.negative = 0,
                    this.iaddn(t),
                    this.negative = 1,
                    this;
                if (this.words[0] -= t,
                1 === this.length && this.words[0] < 0)
                    this.words[0] = -this.words[0],
                    this.negative = 1;
                else
                    for (var i = 0; i < this.length && this.words[i] < 0; i++)
                        this.words[i] += 67108864,
                        this.words[i + 1] -= 1;
                return this._strip()
            }
            ,
            e.prototype.addn = function(t) {
                return this.clone().iaddn(t)
            }
            ,
            e.prototype.subn = function(t) {
                return this.clone().isubn(t)
            }
            ,
            e.prototype.iabs = function() {
                return this.negative = 0,
                this
            }
            ,
            e.prototype.abs = function() {
                return this.clone().iabs()
            }
            ,
            e.prototype._ishlnsubmul = function(t, i, r) {
                var h, e, o = t.length + r;
                this._expand(o);
                var s = 0;
                for (h = 0; h < t.length; h++) {
                    e = (0 | this.words[h + r]) + s;
                    var u = (0 | t.words[h]) * i;
                    s = ((e -= 67108863 & u) >> 26) - (u / 67108864 | 0),
                    this.words[h + r] = 67108863 & e
                }
                for (; h < this.length - r; h++)
                    s = (e = (0 | this.words[h + r]) + s) >> 26,
                    this.words[h + r] = 67108863 & e;
                if (0 === s)
                    return this._strip();
                for (n(-1 === s),
                s = 0,
                h = 0; h < this.length; h++)
                    s = (e = -(0 | this.words[h]) + s) >> 26,
                    this.words[h] = 67108863 & e;
                return this.negative = 1,
                this._strip()
            }
            ,
            e.prototype._wordDiv = function(t, i) {
                var r = (this.length,
                t.length)
                  , n = this.clone()
                  , h = t
                  , o = 0 | h.words[h.length - 1];
                0 !== (r = 26 - this._countBits(o)) && (h = h.ushln(r),
                n.iushln(r),
                o = 0 | h.words[h.length - 1]);
                var s, u = n.length - h.length;
                if ("mod" !== i) {
                    (s = new e(null)).length = u + 1,
                    s.words = new Array(s.length);
                    for (var a = 0; a < s.length; a++)
                        s.words[a] = 0
                }
                var l = n.clone()._ishlnsubmul(h, 1, u);
                0 === l.negative && (n = l,
                s && (s.words[u] = 1));
                for (var m = u - 1; m >= 0; m--) {
                    var f = 67108864 * (0 | n.words[h.length + m]) + (0 | n.words[h.length + m - 1]);
                    for (f = Math.min(f / o | 0, 67108863),
                    n._ishlnsubmul(h, f, m); 0 !== n.negative; )
                        f--,
                        n.negative = 0,
                        n._ishlnsubmul(h, 1, m),
                        n.isZero() || (n.negative ^= 1);
                    s && (s.words[m] = f)
                }
                return s && s._strip(),
                n._strip(),
                "div" !== i && 0 !== r && n.iushrn(r),
                {
                    div: s || null,
                    mod: n
                }
            }
            ,
            e.prototype.divmod = function(t, i, r) {
                return n(!t.isZero()),
                this.isZero() ? {
                    div: new e(0),
                    mod: new e(0)
                } : 0 !== this.negative && 0 === t.negative ? (s = this.neg().divmod(t, i),
                "mod" !== i && (h = s.div.neg()),
                "div" !== i && (o = s.mod.neg(),
                r && 0 !== o.negative && o.iadd(t)),
                {
                    div: h,
                    mod: o
                }) : 0 === this.negative && 0 !== t.negative ? (s = this.divmod(t.neg(), i),
                "mod" !== i && (h = s.div.neg()),
                {
                    div: h,
                    mod: s.mod
                }) : 0 !== (this.negative & t.negative) ? (s = this.neg().divmod(t.neg(), i),
                "div" !== i && (o = s.mod.neg(),
                r && 0 !== o.negative && o.isub(t)),
                {
                    div: s.div,
                    mod: o
                }) : t.length > this.length || this.cmp(t) < 0 ? {
                    div: new e(0),
                    mod: this
                } : 1 === t.length ? "div" === i ? {
                    div: this.divn(t.words[0]),
                    mod: null
                } : "mod" === i ? {
                    div: null,
                    mod: new e(this.modrn(t.words[0]))
                } : {
                    div: this.divn(t.words[0]),
                    mod: new e(this.modrn(t.words[0]))
                } : this._wordDiv(t, i);
                var h, o, s
            }
            ,
            e.prototype.div = function(t) {
                return this.divmod(t, "div", !1).div
            }
            ,
            e.prototype.mod = function(t) {
                return this.divmod(t, "mod", !1).mod
            }
            ,
            e.prototype.umod = function(t) {
                return this.divmod(t, "mod", !0).mod
            }
            ,
            e.prototype.divRound = function(t) {
                var i = this.divmod(t);
                if (i.mod.isZero())
                    return i.div;
                var r = 0 !== i.div.negative ? i.mod.isub(t) : i.mod
                  , n = t.ushrn(1)
                  , h = t.andln(1)
                  , e = r.cmp(n);
                return e < 0 || 1 === h && 0 === e ? i.div : 0 !== i.div.negative ? i.div.isubn(1) : i.div.iaddn(1)
            }
            ,
            e.prototype.modrn = function(t) {
                var i = t < 0;
                i && (t = -t),
                n(t <= 67108863);
                for (var r = (1 << 26) % t, h = 0, e = this.length - 1; e >= 0; e--)
                    h = (r * h + (0 | this.words[e])) % t;
                return i ? -h : h
            }
            ,
            e.prototype.modn = function(t) {
                return this.modrn(t)
            }
            ,
            e.prototype.idivn = function(t) {
                var i = t < 0;
                i && (t = -t),
                n(t <= 67108863);
                for (var r = 0, h = this.length - 1; h >= 0; h--) {
                    var e = (0 | this.words[h]) + 67108864 * r;
                    this.words[h] = e / t | 0,
                    r = e % t
                }
                return this._strip(),
                i ? this.ineg() : this
            }
            ,
            e.prototype.divn = function(t) {
                return this.clone().idivn(t)
            }
            ,
            e.prototype.egcd = function(t) {
                n(0 === t.negative),
                n(!t.isZero());
                var i = this
                  , r = t.clone();
                i = 0 !== i.negative ? i.umod(t) : i.clone();
                for (var h = new e(1), o = new e(0), s = new e(0), u = new e(1), a = 0; i.isEven() && r.isEven(); )
                    i.iushrn(1),
                    r.iushrn(1),
                    ++a;
                for (var l = r.clone(), m = i.clone(); !i.isZero(); ) {
                    for (var f = 0, d = 1; 0 === (i.words[0] & d) && f < 26; ++f,
                    d <<= 1)
                        ;
                    if (f > 0)
                        for (i.iushrn(f); f-- > 0; )
                            (h.isOdd() || o.isOdd()) && (h.iadd(l),
                            o.isub(m)),
                            h.iushrn(1),
                            o.iushrn(1);
                    for (var p = 0, M = 1; 0 === (r.words[0] & M) && p < 26; ++p,
                    M <<= 1)
                        ;
                    if (p > 0)
                        for (r.iushrn(p); p-- > 0; )
                            (s.isOdd() || u.isOdd()) && (s.iadd(l),
                            u.isub(m)),
                            s.iushrn(1),
                            u.iushrn(1);
                    i.cmp(r) >= 0 ? (i.isub(r),
                    h.isub(s),
                    o.isub(u)) : (r.isub(i),
                    s.isub(h),
                    u.isub(o))
                }
                return {
                    a: s,
                    b: u,
                    gcd: r.iushln(a)
                }
            }
            ,
            e.prototype._invmp = function(t) {
                n(0 === t.negative),
                n(!t.isZero());
                var i = this
                  , r = t.clone();
                i = 0 !== i.negative ? i.umod(t) : i.clone();
                for (var h, o = new e(1), s = new e(0), u = r.clone(); i.cmpn(1) > 0 && r.cmpn(1) > 0; ) {
                    for (var a = 0, l = 1; 0 === (i.words[0] & l) && a < 26; ++a,
                    l <<= 1)
                        ;
                    if (a > 0)
                        for (i.iushrn(a); a-- > 0; )
                            o.isOdd() && o.iadd(u),
                            o.iushrn(1);
                    for (var m = 0, f = 1; 0 === (r.words[0] & f) && m < 26; ++m,
                    f <<= 1)
                        ;
                    if (m > 0)
                        for (r.iushrn(m); m-- > 0; )
                            s.isOdd() && s.iadd(u),
                            s.iushrn(1);
                    i.cmp(r) >= 0 ? (i.isub(r),
                    o.isub(s)) : (r.isub(i),
                    s.isub(o))
                }
                return (h = 0 === i.cmpn(1) ? o : s).cmpn(0) < 0 && h.iadd(t),
                h
            }
            ,
            e.prototype.gcd = function(t) {
                if (this.isZero())
                    return t.abs();
                if (t.isZero())
                    return this.abs();
                var i = this.clone()
                  , r = t.clone();
                i.negative = 0,
                r.negative = 0;
                for (var n = 0; i.isEven() && r.isEven(); n++)
                    i.iushrn(1),
                    r.iushrn(1);
                for (; ; ) {
                    for (; i.isEven(); )
                        i.iushrn(1);
                    for (; r.isEven(); )
                        r.iushrn(1);
                    var h = i.cmp(r);
                    if (h < 0) {
                        var e = i;
                        i = r,
                        r = e
                    } else if (0 === h || 0 === r.cmpn(1))
                        break;
                    i.isub(r)
                }
                return r.iushln(n)
            }
            ,
            e.prototype.invm = function(t) {
                return this.egcd(t).a.umod(t)
            }
            ,
            e.prototype.isEven = function() {
                return 0 === (1 & this.words[0])
            }
            ,
            e.prototype.isOdd = function() {
                return 1 === (1 & this.words[0])
            }
            ,
            e.prototype.andln = function(t) {
                return this.words[0] & t
            }
            ,
            e.prototype.bincn = function(t) {
                n("number" === typeof t);
                var i = t % 26
                  , r = (t - i) / 26
                  , h = 1 << i;
                if (this.length <= r)
                    return this._expand(r + 1),
                    this.words[r] |= h,
                    this;
                for (var e = h, o = r; 0 !== e && o < this.length; o++) {
                    var s = 0 | this.words[o];
                    e = (s += e) >>> 26,
                    s &= 67108863,
                    this.words[o] = s
                }
                return 0 !== e && (this.words[o] = e,
                this.length++),
                this
            }
            ,
            e.prototype.isZero = function() {
                return 1 === this.length && 0 === this.words[0]
            }
            ,
            e.prototype.cmpn = function(t) {
                var i, r = t < 0;
                if (0 !== this.negative && !r)
                    return -1;
                if (0 === this.negative && r)
                    return 1;
                if (this._strip(),
                this.length > 1)
                    i = 1;
                else {
                    r && (t = -t),
                    n(t <= 67108863, "Number is too big");
                    var h = 0 | this.words[0];
                    i = h === t ? 0 : h < t ? -1 : 1
                }
                return 0 !== this.negative ? 0 | -i : i
            }
            ,
            e.prototype.cmp = function(t) {
                if (0 !== this.negative && 0 === t.negative)
                    return -1;
                if (0 === this.negative && 0 !== t.negative)
                    return 1;
                var i = this.ucmp(t);
                return 0 !== this.negative ? 0 | -i : i
            }
            ,
            e.prototype.ucmp = function(t) {
                if (this.length > t.length)
                    return 1;
                if (this.length < t.length)
                    return -1;
                for (var i = 0, r = this.length - 1; r >= 0; r--) {
                    var n = 0 | this.words[r]
                      , h = 0 | t.words[r];
                    if (n !== h) {
                        n < h ? i = -1 : n > h && (i = 1);
                        break
                    }
                }
                return i
            }
            ,
            e.prototype.gtn = function(t) {
                return 1 === this.cmpn(t)
            }
            ,
            e.prototype.gt = function(t) {
                return 1 === this.cmp(t)
            }
            ,
            e.prototype.gten = function(t) {
                return this.cmpn(t) >= 0
            }
            ,
            e.prototype.gte = function(t) {
                return this.cmp(t) >= 0
            }
            ,
            e.prototype.ltn = function(t) {
                return -1 === this.cmpn(t)
            }
            ,
            e.prototype.lt = function(t) {
                return -1 === this.cmp(t)
            }
            ,
            e.prototype.lten = function(t) {
                return this.cmpn(t) <= 0
            }
            ,
            e.prototype.lte = function(t) {
                return this.cmp(t) <= 0
            }
            ,
            e.prototype.eqn = function(t) {
                return 0 === this.cmpn(t)
            }
            ,
            e.prototype.eq = function(t) {
                return 0 === this.cmp(t)
            }
            ,
            e.red = function(t) {
                return new x(t)
            }
            ,
            e.prototype.toRed = function(t) {
                return n(!this.red, "Already a number in reduction context"),
                n(0 === this.negative, "red works only with positives"),
                t.convertTo(this)._forceRed(t)
            }
            ,
            e.prototype.fromRed = function() {
                return n(this.red, "fromRed works only with numbers in reduction context"),
                this.red.convertFrom(this)
            }
            ,
            e.prototype._forceRed = function(t) {
                return this.red = t,
                this
            }
            ,
            e.prototype.forceRed = function(t) {
                return n(!this.red, "Already a number in reduction context"),
                this._forceRed(t)
            }
            ,
            e.prototype.redAdd = function(t) {
                return n(this.red, "redAdd works only with red numbers"),
                this.red.add(this, t)
            }
            ,
            e.prototype.redIAdd = function(t) {
                return n(this.red, "redIAdd works only with red numbers"),
                this.red.iadd(this, t)
            }
            ,
            e.prototype.redSub = function(t) {
                return n(this.red, "redSub works only with red numbers"),
                this.red.sub(this, t)
            }
            ,
            e.prototype.redISub = function(t) {
                return n(this.red, "redISub works only with red numbers"),
                this.red.isub(this, t)
            }
            ,
            e.prototype.redShl = function(t) {
                return n(this.red, "redShl works only with red numbers"),
                this.red.shl(this, t)
            }
            ,
            e.prototype.redMul = function(t) {
                return n(this.red, "redMul works only with red numbers"),
                this.red._verify2(this, t),
                this.red.mul(this, t)
            }
            ,
            e.prototype.redIMul = function(t) {
                return n(this.red, "redMul works only with red numbers"),
                this.red._verify2(this, t),
                this.red.imul(this, t)
            }
            ,
            e.prototype.redSqr = function() {
                return n(this.red, "redSqr works only with red numbers"),
                this.red._verify1(this),
                this.red.sqr(this)
            }
            ,
            e.prototype.redISqr = function() {
                return n(this.red, "redISqr works only with red numbers"),
                this.red._verify1(this),
                this.red.isqr(this)
            }
            ,
            e.prototype.redSqrt = function() {
                return n(this.red, "redSqrt works only with red numbers"),
                this.red._verify1(this),
                this.red.sqrt(this)
            }
            ,
            e.prototype.redInvm = function() {
                return n(this.red, "redInvm works only with red numbers"),
                this.red._verify1(this),
                this.red.invm(this)
            }
            ,
            e.prototype.redNeg = function() {
                return n(this.red, "redNeg works only with red numbers"),
                this.red._verify1(this),
                this.red.neg(this)
            }
            ,
            e.prototype.redPow = function(t) {
                return n(this.red && !t.red, "redPow(normalNum)"),
                this.red._verify1(this),
                this.red.pow(this, t)
            }
            ;
            var y = {
                k256: null,
                p224: null,
                p192: null,
                p25519: null
            };
            function b(t, i) {
                this.name = t,
                this.p = new e(i,16),
                this.n = this.p.bitLength(),
                this.k = new e(1).iushln(this.n).isub(this.p),
                this.tmp = this._tmp()
            }
            function _() {
                b.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
            }
            function k() {
                b.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
            }
            function A() {
                b.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
            }
            function S() {
                b.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
            }
            function x(t) {
                if ("string" === typeof t) {
                    var i = e._prime(t);
                    this.m = i.p,
                    this.prime = i
                } else
                    n(t.gtn(1), "modulus must be greater than 1"),
                    this.m = t,
                    this.prime = null
            }
            function B(t) {
                x.call(this, t),
                this.shift = this.m.bitLength(),
                this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26),
                this.r = new e(1).iushln(this.shift),
                this.r2 = this.imod(this.r.sqr()),
                this.rinv = this.r._invmp(this.m),
                this.minv = this.rinv.mul(this.r).isubn(1).div(this.m),
                this.minv = this.minv.umod(this.r),
                this.minv = this.r.sub(this.minv)
            }
            b.prototype._tmp = function() {
                var t = new e(null);
                return t.words = new Array(Math.ceil(this.n / 13)),
                t
            }
            ,
            b.prototype.ireduce = function(t) {
                var i, r = t;
                do {
                    this.split(r, this.tmp),
                    i = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength()
                } while (i > this.n);
                var n = i < this.n ? -1 : r.ucmp(this.p);
                return 0 === n ? (r.words[0] = 0,
                r.length = 1) : n > 0 ? r.isub(this.p) : void 0 !== r.strip ? r.strip() : r._strip(),
                r
            }
            ,
            b.prototype.split = function(t, i) {
                t.iushrn(this.n, 0, i)
            }
            ,
            b.prototype.imulK = function(t) {
                return t.imul(this.k)
            }
            ,
            h(_, b),
            _.prototype.split = function(t, i) {
                for (var r = 4194303, n = Math.min(t.length, 9), h = 0; h < n; h++)
                    i.words[h] = t.words[h];
                if (i.length = n,
                t.length <= 9)
                    return t.words[0] = 0,
                    void (t.length = 1);
                var e = t.words[9];
                for (i.words[i.length++] = e & r,
                h = 10; h < t.length; h++) {
                    var o = 0 | t.words[h];
                    t.words[h - 10] = (o & r) << 4 | e >>> 22,
                    e = o
                }
                e >>>= 22,
                t.words[h - 10] = e,
                0 === e && t.length > 10 ? t.length -= 10 : t.length -= 9
            }
            ,
            _.prototype.imulK = function(t) {
                t.words[t.length] = 0,
                t.words[t.length + 1] = 0,
                t.length += 2;
                for (var i = 0, r = 0; r < t.length; r++) {
                    var n = 0 | t.words[r];
                    i += 977 * n,
                    t.words[r] = 67108863 & i,
                    i = 64 * n + (i / 67108864 | 0)
                }
                return 0 === t.words[t.length - 1] && (t.length--,
                0 === t.words[t.length - 1] && t.length--),
                t
            }
            ,
            h(k, b),
            h(A, b),
            h(S, b),
            S.prototype.imulK = function(t) {
                for (var i = 0, r = 0; r < t.length; r++) {
                    var n = 19 * (0 | t.words[r]) + i
                      , h = 67108863 & n;
                    n >>>= 26,
                    t.words[r] = h,
                    i = n
                }
                return 0 !== i && (t.words[t.length++] = i),
                t
            }
            ,
            e._prime = function(t) {
                if (y[t])
                    return y[t];
                var i;
                if ("k256" === t)
                    i = new _;
                else if ("p224" === t)
                    i = new k;
                else if ("p192" === t)
                    i = new A;
                else {
                    if ("p25519" !== t)
                        throw new Error("Unknown prime " + t);
                    i = new S
                }
                return y[t] = i,
                i
            }
            ,
            x.prototype._verify1 = function(t) {
                n(0 === t.negative, "red works only with positives"),
                n(t.red, "red works only with red numbers")
            }
            ,
            x.prototype._verify2 = function(t, i) {
                n(0 === (t.negative | i.negative), "red works only with positives"),
                n(t.red && t.red === i.red, "red works only with red numbers")
            }
            ,
            x.prototype.imod = function(t) {
                return this.prime ? this.prime.ireduce(t)._forceRed(this) : (l(t, t.umod(this.m)._forceRed(this)),
                t)
            }
            ,
            x.prototype.neg = function(t) {
                return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this)
            }
            ,
            x.prototype.add = function(t, i) {
                this._verify2(t, i);
                var r = t.add(i);
                return r.cmp(this.m) >= 0 && r.isub(this.m),
                r._forceRed(this)
            }
            ,
            x.prototype.iadd = function(t, i) {
                this._verify2(t, i);
                var r = t.iadd(i);
                return r.cmp(this.m) >= 0 && r.isub(this.m),
                r
            }
            ,
            x.prototype.sub = function(t, i) {
                this._verify2(t, i);
                var r = t.sub(i);
                return r.cmpn(0) < 0 && r.iadd(this.m),
                r._forceRed(this)
            }
            ,
            x.prototype.isub = function(t, i) {
                this._verify2(t, i);
                var r = t.isub(i);
                return r.cmpn(0) < 0 && r.iadd(this.m),
                r
            }
            ,
            x.prototype.shl = function(t, i) {
                return this._verify1(t),
                this.imod(t.ushln(i))
            }
            ,
            x.prototype.imul = function(t, i) {
                return this._verify2(t, i),
                this.imod(t.imul(i))
            }
            ,
            x.prototype.mul = function(t, i) {
                return this._verify2(t, i),
                this.imod(t.mul(i))
            }
            ,
            x.prototype.isqr = function(t) {
                return this.imul(t, t.clone())
            }
            ,
            x.prototype.sqr = function(t) {
                return this.mul(t, t)
            }
            ,
            x.prototype.sqrt = function(t) {
                if (t.isZero())
                    return t.clone();
                var i = this.m.andln(3);
                if (n(i % 2 === 1),
                3 === i) {
                    var r = this.m.add(new e(1)).iushrn(2);
                    return this.pow(t, r)
                }
                for (var h = this.m.subn(1), o = 0; !h.isZero() && 0 === h.andln(1); )
                    o++,
                    h.iushrn(1);
                n(!h.isZero());
                var s = new e(1).toRed(this)
                  , u = s.redNeg()
                  , a = this.m.subn(1).iushrn(1)
                  , l = this.m.bitLength();
                for (l = new e(2 * l * l).toRed(this); 0 !== this.pow(l, a).cmp(u); )
                    l.redIAdd(u);
                for (var m = this.pow(l, h), f = this.pow(t, h.addn(1).iushrn(1)), d = this.pow(t, h), p = o; 0 !== d.cmp(s); ) {
                    for (var M = d, v = 0; 0 !== M.cmp(s); v++)
                        M = M.redSqr();
                    n(v < p);
                    var g = this.pow(m, new e(1).iushln(p - v - 1));
                    f = f.redMul(g),
                    m = g.redSqr(),
                    d = d.redMul(m),
                    p = v
                }
                return f
            }
            ,
            x.prototype.invm = function(t) {
                var i = t._invmp(this.m);
                return 0 !== i.negative ? (i.negative = 0,
                this.imod(i).redNeg()) : this.imod(i)
            }
            ,
            x.prototype.pow = function(t, i) {
                if (i.isZero())
                    return new e(1).toRed(this);
                if (0 === i.cmpn(1))
                    return t.clone();
                var r = new Array(16);
                r[0] = new e(1).toRed(this),
                r[1] = t;
                for (var n = 2; n < r.length; n++)
                    r[n] = this.mul(r[n - 1], t);
                var h = r[0]
                  , o = 0
                  , s = 0
                  , u = i.bitLength() % 26;
                for (0 === u && (u = 26),
                n = i.length - 1; n >= 0; n--) {
                    for (var a = i.words[n], l = u - 1; l >= 0; l--) {
                        var m = a >> l & 1;
                        h !== r[0] && (h = this.sqr(h)),
                        0 !== m || 0 !== o ? (o <<= 1,
                        o |= m,
                        (4 === ++s || 0 === n && 0 === l) && (h = this.mul(h, r[o]),
                        s = 0,
                        o = 0)) : s = 0
                    }
                    u = 26
                }
                return h
            }
            ,
            x.prototype.convertTo = function(t) {
                var i = t.umod(this.m);
                return i === t ? i.clone() : i
            }
            ,
            x.prototype.convertFrom = function(t) {
                var i = t.clone();
                return i.red = null,
                i
            }
            ,
            e.mont = function(t) {
                return new B(t)
            }
            ,
            h(B, x),
            B.prototype.convertTo = function(t) {
                return this.imod(t.ushln(this.shift))
            }
            ,
            B.prototype.convertFrom = function(t) {
                var i = this.imod(t.mul(this.rinv));
                return i.red = null,
                i
            }
            ,
            B.prototype.imul = function(t, i) {
                if (t.isZero() || i.isZero())
                    return t.words[0] = 0,
                    t.length = 1,
                    t;
                var r = t.imul(i)
                  , n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m)
                  , h = r.isub(n).iushrn(this.shift)
                  , e = h;
                return h.cmp(this.m) >= 0 ? e = h.isub(this.m) : h.cmpn(0) < 0 && (e = h.iadd(this.m)),
                e._forceRed(this)
            }
            ,
            B.prototype.mul = function(t, i) {
                if (t.isZero() || i.isZero())
                    return new e(0)._forceRed(this);
                var r = t.mul(i)
                  , n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m)
                  , h = r.isub(n).iushrn(this.shift)
                  , o = h;
                return h.cmp(this.m) >= 0 ? o = h.isub(this.m) : h.cmpn(0) < 0 && (o = h.iadd(this.m)),
                o._forceRed(this)
            }
            ,
            B.prototype.invm = function(t) {
                return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this)
            }
        }(t = r.nmd(t), this)
    }
}]);
