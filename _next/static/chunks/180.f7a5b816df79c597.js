(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[180], {
    77279: function(t, e, r) {
        "use strict";
        var n = r(2787)
          , i = r(50329)
          , o = r(19044)
          , s = r(87689)
          , a = r(23653);
        e.Cv = 32,
        e.WH = 12,
        e.pg = 16;
        var c = new Uint8Array(16)
          , u = function() {
            function t(t) {
                if (this.nonceLength = e.WH,
                this.tagLength = e.pg,
                t.length !== e.Cv)
                    throw new Error("ChaCha20Poly1305 needs 32-byte key");
                this._key = new Uint8Array(t)
            }
            return t.prototype.seal = function(t, e, r, i) {
                if (t.length > 16)
                    throw new Error("ChaCha20Poly1305: incorrect nonce length");
                var s = new Uint8Array(16);
                s.set(t, s.length - t.length);
                var a = new Uint8Array(32);
                n.stream(this._key, s, a, 4);
                var c, u = e.length + this.tagLength;
                if (i) {
                    if (i.length !== u)
                        throw new Error("ChaCha20Poly1305: incorrect destination length");
                    c = i
                } else
                    c = new Uint8Array(u);
                return n.streamXOR(this._key, s, e, c, 4),
                this._authenticate(c.subarray(c.length - this.tagLength, c.length), a, c.subarray(0, c.length - this.tagLength), r),
                o.wipe(s),
                c
            }
            ,
            t.prototype.open = function(t, e, r, i) {
                if (t.length > 16)
                    throw new Error("ChaCha20Poly1305: incorrect nonce length");
                if (e.length < this.tagLength)
                    return null;
                var s = new Uint8Array(16);
                s.set(t, s.length - t.length);
                var c = new Uint8Array(32);
                n.stream(this._key, s, c, 4);
                var u = new Uint8Array(this.tagLength);
                if (this._authenticate(u, c, e.subarray(0, e.length - this.tagLength), r),
                !a.equal(u, e.subarray(e.length - this.tagLength, e.length)))
                    return null;
                var f, h = e.length - this.tagLength;
                if (i) {
                    if (i.length !== h)
                        throw new Error("ChaCha20Poly1305: incorrect destination length");
                    f = i
                } else
                    f = new Uint8Array(h);
                return n.streamXOR(this._key, s, e.subarray(0, e.length - this.tagLength), f, 4),
                o.wipe(s),
                f
            }
            ,
            t.prototype.clean = function() {
                return o.wipe(this._key),
                this
            }
            ,
            t.prototype._authenticate = function(t, e, r, n) {
                var a = new i.Poly1305(e);
                n && (a.update(n),
                n.length % 16 > 0 && a.update(c.subarray(n.length % 16))),
                a.update(r),
                r.length % 16 > 0 && a.update(c.subarray(r.length % 16));
                var u = new Uint8Array(8);
                n && s.writeUint64LE(n.length, u),
                a.update(u),
                s.writeUint64LE(r.length, u),
                a.update(u);
                for (var f = a.digest(), h = 0; h < f.length; h++)
                    t[h] = f[h];
                a.clean(),
                o.wipe(f),
                o.wipe(u)
            }
            ,
            t
        }();
        e.OK = u
    },
    2787: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(87689)
          , i = r(19044)
          , o = 20;
        function s(t, e, r) {
            for (var i = 1634760805, s = 857760878, a = 2036477234, c = 1797285236, u = r[3] << 24 | r[2] << 16 | r[1] << 8 | r[0], f = r[7] << 24 | r[6] << 16 | r[5] << 8 | r[4], h = r[11] << 24 | r[10] << 16 | r[9] << 8 | r[8], l = r[15] << 24 | r[14] << 16 | r[13] << 8 | r[12], d = r[19] << 24 | r[18] << 16 | r[17] << 8 | r[16], p = r[23] << 24 | r[22] << 16 | r[21] << 8 | r[20], y = r[27] << 24 | r[26] << 16 | r[25] << 8 | r[24], b = r[31] << 24 | r[30] << 16 | r[29] << 8 | r[28], _ = e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0], g = e[7] << 24 | e[6] << 16 | e[5] << 8 | e[4], v = e[11] << 24 | e[10] << 16 | e[9] << 8 | e[8], w = e[15] << 24 | e[14] << 16 | e[13] << 8 | e[12], m = i, E = s, S = a, O = c, I = u, R = f, A = h, U = l, L = d, x = p, T = y, k = b, N = _, M = g, j = v, P = w, C = 0; C < o; C += 2)
                I = (I ^= L = L + (N = (N ^= m = m + I | 0) >>> 16 | N << 16) | 0) >>> 20 | I << 12,
                R = (R ^= x = x + (M = (M ^= E = E + R | 0) >>> 16 | M << 16) | 0) >>> 20 | R << 12,
                A = (A ^= T = T + (j = (j ^= S = S + A | 0) >>> 16 | j << 16) | 0) >>> 20 | A << 12,
                U = (U ^= k = k + (P = (P ^= O = O + U | 0) >>> 16 | P << 16) | 0) >>> 20 | U << 12,
                A = (A ^= T = T + (j = (j ^= S = S + A | 0) >>> 24 | j << 8) | 0) >>> 25 | A << 7,
                U = (U ^= k = k + (P = (P ^= O = O + U | 0) >>> 24 | P << 8) | 0) >>> 25 | U << 7,
                R = (R ^= x = x + (M = (M ^= E = E + R | 0) >>> 24 | M << 8) | 0) >>> 25 | R << 7,
                I = (I ^= L = L + (N = (N ^= m = m + I | 0) >>> 24 | N << 8) | 0) >>> 25 | I << 7,
                R = (R ^= T = T + (P = (P ^= m = m + R | 0) >>> 16 | P << 16) | 0) >>> 20 | R << 12,
                A = (A ^= k = k + (N = (N ^= E = E + A | 0) >>> 16 | N << 16) | 0) >>> 20 | A << 12,
                U = (U ^= L = L + (M = (M ^= S = S + U | 0) >>> 16 | M << 16) | 0) >>> 20 | U << 12,
                I = (I ^= x = x + (j = (j ^= O = O + I | 0) >>> 16 | j << 16) | 0) >>> 20 | I << 12,
                U = (U ^= L = L + (M = (M ^= S = S + U | 0) >>> 24 | M << 8) | 0) >>> 25 | U << 7,
                I = (I ^= x = x + (j = (j ^= O = O + I | 0) >>> 24 | j << 8) | 0) >>> 25 | I << 7,
                A = (A ^= k = k + (N = (N ^= E = E + A | 0) >>> 24 | N << 8) | 0) >>> 25 | A << 7,
                R = (R ^= T = T + (P = (P ^= m = m + R | 0) >>> 24 | P << 8) | 0) >>> 25 | R << 7;
            n.writeUint32LE(m + i | 0, t, 0),
            n.writeUint32LE(E + s | 0, t, 4),
            n.writeUint32LE(S + a | 0, t, 8),
            n.writeUint32LE(O + c | 0, t, 12),
            n.writeUint32LE(I + u | 0, t, 16),
            n.writeUint32LE(R + f | 0, t, 20),
            n.writeUint32LE(A + h | 0, t, 24),
            n.writeUint32LE(U + l | 0, t, 28),
            n.writeUint32LE(L + d | 0, t, 32),
            n.writeUint32LE(x + p | 0, t, 36),
            n.writeUint32LE(T + y | 0, t, 40),
            n.writeUint32LE(k + b | 0, t, 44),
            n.writeUint32LE(N + _ | 0, t, 48),
            n.writeUint32LE(M + g | 0, t, 52),
            n.writeUint32LE(j + v | 0, t, 56),
            n.writeUint32LE(P + w | 0, t, 60)
        }
        function a(t, e, r, n, o) {
            if (void 0 === o && (o = 0),
            32 !== t.length)
                throw new Error("ChaCha: key size must be 32 bytes");
            if (n.length < r.length)
                throw new Error("ChaCha: destination is shorter than source");
            var a, u;
            if (0 === o) {
                if (8 !== e.length && 12 !== e.length)
                    throw new Error("ChaCha nonce must be 8 or 12 bytes");
                u = (a = new Uint8Array(16)).length - e.length,
                a.set(e, u)
            } else {
                if (16 !== e.length)
                    throw new Error("ChaCha nonce with counter must be 16 bytes");
                a = e,
                u = o
            }
            for (var f = new Uint8Array(64), h = 0; h < r.length; h += 64) {
                s(f, a, t);
                for (var l = h; l < h + 64 && l < r.length; l++)
                    n[l] = r[l] ^ f[l - h];
                c(a, 0, u)
            }
            return i.wipe(f),
            0 === o && i.wipe(a),
            n
        }
        function c(t, e, r) {
            for (var n = 1; r--; )
                n = n + (255 & t[e]) | 0,
                t[e] = 255 & n,
                n >>>= 8,
                e++;
            if (n > 0)
                throw new Error("ChaCha: counter overflow")
        }
        e.streamXOR = a,
        e.stream = function(t, e, r, n) {
            return void 0 === n && (n = 0),
            i.wipe(r),
            a(t, e, r, r, n)
        }
    },
    23653: function(t, e) {
        "use strict";
        function r(t, e) {
            if (t.length !== e.length)
                return 0;
            for (var r = 0, n = 0; n < t.length; n++)
                r |= t[n] ^ e[n];
            return 1 & r - 1 >>> 8
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.select = function(t, e, r) {
            return ~(t - 1) & e | t - 1 & r
        }
        ,
        e.lessOrEqual = function(t, e) {
            return (0 | t) - (0 | e) - 1 >>> 31 & 1
        }
        ,
        e.compare = r,
        e.equal = function(t, e) {
            return 0 !== t.length && 0 !== e.length && 0 !== r(t, e)
        }
    },
    30378: function(t, e, r) {
        "use strict";
        e.Xx = e._w = e.aP = e.KS = e.jQ = void 0;
        const n = r(80900)
          , i = r(17212)
          , o = r(19044);
        function s(t) {
            const e = new Float64Array(16);
            if (t)
                for (let r = 0; r < t.length; r++)
                    e[r] = t[r];
            return e
        }
        e.jQ = 64,
        e.KS = 64,
        e.aP = 32;
        new Uint8Array(32)[0] = 9;
        const a = s()
          , c = s([1])
          , u = s([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995])
          , f = s([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222])
          , h = s([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553])
          , l = s([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214])
          , d = s([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);
        function p(t, e) {
            for (let r = 0; r < 16; r++)
                t[r] = 0 | e[r]
        }
        function y(t) {
            let e = 1;
            for (let r = 0; r < 16; r++) {
                let n = t[r] + e + 65535;
                e = Math.floor(n / 65536),
                t[r] = n - 65536 * e
            }
            t[0] += e - 1 + 37 * (e - 1)
        }
        function b(t, e, r) {
            const n = ~(r - 1);
            for (let i = 0; i < 16; i++) {
                const r = n & (t[i] ^ e[i]);
                t[i] ^= r,
                e[i] ^= r
            }
        }
        function _(t, e) {
            const r = s()
              , n = s();
            for (let i = 0; i < 16; i++)
                n[i] = e[i];
            y(n),
            y(n),
            y(n);
            for (let i = 0; i < 2; i++) {
                r[0] = n[0] - 65517;
                for (let e = 1; e < 15; e++)
                    r[e] = n[e] - 65535 - (r[e - 1] >> 16 & 1),
                    r[e - 1] &= 65535;
                r[15] = n[15] - 32767 - (r[14] >> 16 & 1);
                const t = r[15] >> 16 & 1;
                r[14] &= 65535,
                b(n, r, 1 - t)
            }
            for (let i = 0; i < 16; i++)
                t[2 * i] = 255 & n[i],
                t[2 * i + 1] = n[i] >> 8
        }
        function g(t, e) {
            let r = 0;
            for (let n = 0; n < 32; n++)
                r |= t[n] ^ e[n];
            return (1 & r - 1 >>> 8) - 1
        }
        function v(t, e) {
            const r = new Uint8Array(32)
              , n = new Uint8Array(32);
            return _(r, t),
            _(n, e),
            g(r, n)
        }
        function w(t) {
            const e = new Uint8Array(32);
            return _(e, t),
            1 & e[0]
        }
        function m(t, e, r) {
            for (let n = 0; n < 16; n++)
                t[n] = e[n] + r[n]
        }
        function E(t, e, r) {
            for (let n = 0; n < 16; n++)
                t[n] = e[n] - r[n]
        }
        function S(t, e, r) {
            let n, i, o = 0, s = 0, a = 0, c = 0, u = 0, f = 0, h = 0, l = 0, d = 0, p = 0, y = 0, b = 0, _ = 0, g = 0, v = 0, w = 0, m = 0, E = 0, S = 0, O = 0, I = 0, R = 0, A = 0, U = 0, L = 0, x = 0, T = 0, k = 0, N = 0, M = 0, j = 0, P = r[0], C = r[1], H = r[2], W = r[3], B = r[4], D = r[5], z = r[6], J = r[7], K = r[8], F = r[9], $ = r[10], V = r[11], q = r[12], Y = r[13], X = r[14], G = r[15];
            n = e[0],
            o += n * P,
            s += n * C,
            a += n * H,
            c += n * W,
            u += n * B,
            f += n * D,
            h += n * z,
            l += n * J,
            d += n * K,
            p += n * F,
            y += n * $,
            b += n * V,
            _ += n * q,
            g += n * Y,
            v += n * X,
            w += n * G,
            n = e[1],
            s += n * P,
            a += n * C,
            c += n * H,
            u += n * W,
            f += n * B,
            h += n * D,
            l += n * z,
            d += n * J,
            p += n * K,
            y += n * F,
            b += n * $,
            _ += n * V,
            g += n * q,
            v += n * Y,
            w += n * X,
            m += n * G,
            n = e[2],
            a += n * P,
            c += n * C,
            u += n * H,
            f += n * W,
            h += n * B,
            l += n * D,
            d += n * z,
            p += n * J,
            y += n * K,
            b += n * F,
            _ += n * $,
            g += n * V,
            v += n * q,
            w += n * Y,
            m += n * X,
            E += n * G,
            n = e[3],
            c += n * P,
            u += n * C,
            f += n * H,
            h += n * W,
            l += n * B,
            d += n * D,
            p += n * z,
            y += n * J,
            b += n * K,
            _ += n * F,
            g += n * $,
            v += n * V,
            w += n * q,
            m += n * Y,
            E += n * X,
            S += n * G,
            n = e[4],
            u += n * P,
            f += n * C,
            h += n * H,
            l += n * W,
            d += n * B,
            p += n * D,
            y += n * z,
            b += n * J,
            _ += n * K,
            g += n * F,
            v += n * $,
            w += n * V,
            m += n * q,
            E += n * Y,
            S += n * X,
            O += n * G,
            n = e[5],
            f += n * P,
            h += n * C,
            l += n * H,
            d += n * W,
            p += n * B,
            y += n * D,
            b += n * z,
            _ += n * J,
            g += n * K,
            v += n * F,
            w += n * $,
            m += n * V,
            E += n * q,
            S += n * Y,
            O += n * X,
            I += n * G,
            n = e[6],
            h += n * P,
            l += n * C,
            d += n * H,
            p += n * W,
            y += n * B,
            b += n * D,
            _ += n * z,
            g += n * J,
            v += n * K,
            w += n * F,
            m += n * $,
            E += n * V,
            S += n * q,
            O += n * Y,
            I += n * X,
            R += n * G,
            n = e[7],
            l += n * P,
            d += n * C,
            p += n * H,
            y += n * W,
            b += n * B,
            _ += n * D,
            g += n * z,
            v += n * J,
            w += n * K,
            m += n * F,
            E += n * $,
            S += n * V,
            O += n * q,
            I += n * Y,
            R += n * X,
            A += n * G,
            n = e[8],
            d += n * P,
            p += n * C,
            y += n * H,
            b += n * W,
            _ += n * B,
            g += n * D,
            v += n * z,
            w += n * J,
            m += n * K,
            E += n * F,
            S += n * $,
            O += n * V,
            I += n * q,
            R += n * Y,
            A += n * X,
            U += n * G,
            n = e[9],
            p += n * P,
            y += n * C,
            b += n * H,
            _ += n * W,
            g += n * B,
            v += n * D,
            w += n * z,
            m += n * J,
            E += n * K,
            S += n * F,
            O += n * $,
            I += n * V,
            R += n * q,
            A += n * Y,
            U += n * X,
            L += n * G,
            n = e[10],
            y += n * P,
            b += n * C,
            _ += n * H,
            g += n * W,
            v += n * B,
            w += n * D,
            m += n * z,
            E += n * J,
            S += n * K,
            O += n * F,
            I += n * $,
            R += n * V,
            A += n * q,
            U += n * Y,
            L += n * X,
            x += n * G,
            n = e[11],
            b += n * P,
            _ += n * C,
            g += n * H,
            v += n * W,
            w += n * B,
            m += n * D,
            E += n * z,
            S += n * J,
            O += n * K,
            I += n * F,
            R += n * $,
            A += n * V,
            U += n * q,
            L += n * Y,
            x += n * X,
            T += n * G,
            n = e[12],
            _ += n * P,
            g += n * C,
            v += n * H,
            w += n * W,
            m += n * B,
            E += n * D,
            S += n * z,
            O += n * J,
            I += n * K,
            R += n * F,
            A += n * $,
            U += n * V,
            L += n * q,
            x += n * Y,
            T += n * X,
            k += n * G,
            n = e[13],
            g += n * P,
            v += n * C,
            w += n * H,
            m += n * W,
            E += n * B,
            S += n * D,
            O += n * z,
            I += n * J,
            R += n * K,
            A += n * F,
            U += n * $,
            L += n * V,
            x += n * q,
            T += n * Y,
            k += n * X,
            N += n * G,
            n = e[14],
            v += n * P,
            w += n * C,
            m += n * H,
            E += n * W,
            S += n * B,
            O += n * D,
            I += n * z,
            R += n * J,
            A += n * K,
            U += n * F,
            L += n * $,
            x += n * V,
            T += n * q,
            k += n * Y,
            N += n * X,
            M += n * G,
            n = e[15],
            w += n * P,
            m += n * C,
            E += n * H,
            S += n * W,
            O += n * B,
            I += n * D,
            R += n * z,
            A += n * J,
            U += n * K,
            L += n * F,
            x += n * $,
            T += n * V,
            k += n * q,
            N += n * Y,
            M += n * X,
            j += n * G,
            o += 38 * m,
            s += 38 * E,
            a += 38 * S,
            c += 38 * O,
            u += 38 * I,
            f += 38 * R,
            h += 38 * A,
            l += 38 * U,
            d += 38 * L,
            p += 38 * x,
            y += 38 * T,
            b += 38 * k,
            _ += 38 * N,
            g += 38 * M,
            v += 38 * j,
            i = 1,
            n = o + i + 65535,
            i = Math.floor(n / 65536),
            o = n - 65536 * i,
            n = s + i + 65535,
            i = Math.floor(n / 65536),
            s = n - 65536 * i,
            n = a + i + 65535,
            i = Math.floor(n / 65536),
            a = n - 65536 * i,
            n = c + i + 65535,
            i = Math.floor(n / 65536),
            c = n - 65536 * i,
            n = u + i + 65535,
            i = Math.floor(n / 65536),
            u = n - 65536 * i,
            n = f + i + 65535,
            i = Math.floor(n / 65536),
            f = n - 65536 * i,
            n = h + i + 65535,
            i = Math.floor(n / 65536),
            h = n - 65536 * i,
            n = l + i + 65535,
            i = Math.floor(n / 65536),
            l = n - 65536 * i,
            n = d + i + 65535,
            i = Math.floor(n / 65536),
            d = n - 65536 * i,
            n = p + i + 65535,
            i = Math.floor(n / 65536),
            p = n - 65536 * i,
            n = y + i + 65535,
            i = Math.floor(n / 65536),
            y = n - 65536 * i,
            n = b + i + 65535,
            i = Math.floor(n / 65536),
            b = n - 65536 * i,
            n = _ + i + 65535,
            i = Math.floor(n / 65536),
            _ = n - 65536 * i,
            n = g + i + 65535,
            i = Math.floor(n / 65536),
            g = n - 65536 * i,
            n = v + i + 65535,
            i = Math.floor(n / 65536),
            v = n - 65536 * i,
            n = w + i + 65535,
            i = Math.floor(n / 65536),
            w = n - 65536 * i,
            o += i - 1 + 37 * (i - 1),
            i = 1,
            n = o + i + 65535,
            i = Math.floor(n / 65536),
            o = n - 65536 * i,
            n = s + i + 65535,
            i = Math.floor(n / 65536),
            s = n - 65536 * i,
            n = a + i + 65535,
            i = Math.floor(n / 65536),
            a = n - 65536 * i,
            n = c + i + 65535,
            i = Math.floor(n / 65536),
            c = n - 65536 * i,
            n = u + i + 65535,
            i = Math.floor(n / 65536),
            u = n - 65536 * i,
            n = f + i + 65535,
            i = Math.floor(n / 65536),
            f = n - 65536 * i,
            n = h + i + 65535,
            i = Math.floor(n / 65536),
            h = n - 65536 * i,
            n = l + i + 65535,
            i = Math.floor(n / 65536),
            l = n - 65536 * i,
            n = d + i + 65535,
            i = Math.floor(n / 65536),
            d = n - 65536 * i,
            n = p + i + 65535,
            i = Math.floor(n / 65536),
            p = n - 65536 * i,
            n = y + i + 65535,
            i = Math.floor(n / 65536),
            y = n - 65536 * i,
            n = b + i + 65535,
            i = Math.floor(n / 65536),
            b = n - 65536 * i,
            n = _ + i + 65535,
            i = Math.floor(n / 65536),
            _ = n - 65536 * i,
            n = g + i + 65535,
            i = Math.floor(n / 65536),
            g = n - 65536 * i,
            n = v + i + 65535,
            i = Math.floor(n / 65536),
            v = n - 65536 * i,
            n = w + i + 65535,
            i = Math.floor(n / 65536),
            w = n - 65536 * i,
            o += i - 1 + 37 * (i - 1),
            t[0] = o,
            t[1] = s,
            t[2] = a,
            t[3] = c,
            t[4] = u,
            t[5] = f,
            t[6] = h,
            t[7] = l,
            t[8] = d,
            t[9] = p,
            t[10] = y,
            t[11] = b,
            t[12] = _,
            t[13] = g,
            t[14] = v,
            t[15] = w
        }
        function O(t, e) {
            S(t, e, e)
        }
        function I(t, e) {
            const r = s();
            let n;
            for (n = 0; n < 16; n++)
                r[n] = e[n];
            for (n = 253; n >= 0; n--)
                O(r, r),
                2 !== n && 4 !== n && S(r, r, e);
            for (n = 0; n < 16; n++)
                t[n] = r[n]
        }
        function R(t, e) {
            const r = s()
              , n = s()
              , i = s()
              , o = s()
              , a = s()
              , c = s()
              , u = s()
              , h = s()
              , l = s();
            E(r, t[1], t[0]),
            E(l, e[1], e[0]),
            S(r, r, l),
            m(n, t[0], t[1]),
            m(l, e[0], e[1]),
            S(n, n, l),
            S(i, t[3], e[3]),
            S(i, i, f),
            S(o, t[2], e[2]),
            m(o, o, o),
            E(a, n, r),
            E(c, o, i),
            m(u, o, i),
            m(h, n, r),
            S(t[0], a, c),
            S(t[1], h, u),
            S(t[2], u, c),
            S(t[3], a, h)
        }
        function A(t, e, r) {
            for (let n = 0; n < 4; n++)
                b(t[n], e[n], r)
        }
        function U(t, e) {
            const r = s()
              , n = s()
              , i = s();
            I(i, e[2]),
            S(r, e[0], i),
            S(n, e[1], i),
            _(t, n),
            t[31] ^= w(r) << 7
        }
        function L(t, e, r) {
            p(t[0], a),
            p(t[1], c),
            p(t[2], c),
            p(t[3], a);
            for (let n = 255; n >= 0; --n) {
                const i = r[n / 8 | 0] >> (7 & n) & 1;
                A(t, e, i),
                R(e, t),
                R(t, t),
                A(t, e, i)
            }
        }
        function x(t, e) {
            const r = [s(), s(), s(), s()];
            p(r[0], h),
            p(r[1], l),
            p(r[2], c),
            S(r[3], h, l),
            L(t, r, e)
        }
        function T(t) {
            if (t.length !== e.aP)
                throw new Error(`ed25519: seed must be ${e.aP} bytes`);
            const r = (0,
            i.hash)(t);
            r[0] &= 248,
            r[31] &= 127,
            r[31] |= 64;
            const n = new Uint8Array(32)
              , o = [s(), s(), s(), s()];
            x(o, r),
            U(n, o);
            const a = new Uint8Array(64);
            return a.set(t),
            a.set(n, 32),
            {
                publicKey: n,
                secretKey: a
            }
        }
        e._w = T;
        const k = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);
        function N(t, e) {
            let r, n, i, o;
            for (n = 63; n >= 32; --n) {
                for (r = 0,
                i = n - 32,
                o = n - 12; i < o; ++i)
                    e[i] += r - 16 * e[n] * k[i - (n - 32)],
                    r = Math.floor((e[i] + 128) / 256),
                    e[i] -= 256 * r;
                e[i] += r,
                e[n] = 0
            }
            for (r = 0,
            i = 0; i < 32; i++)
                e[i] += r - (e[31] >> 4) * k[i],
                r = e[i] >> 8,
                e[i] &= 255;
            for (i = 0; i < 32; i++)
                e[i] -= r * k[i];
            for (n = 0; n < 32; n++)
                e[n + 1] += e[n] >> 8,
                t[n] = 255 & e[n]
        }
        function M(t) {
            const e = new Float64Array(64);
            for (let r = 0; r < 64; r++)
                e[r] = t[r];
            for (let r = 0; r < 64; r++)
                t[r] = 0;
            N(t, e)
        }
        function j(t, e) {
            const r = s()
              , n = s()
              , i = s()
              , o = s()
              , f = s()
              , h = s()
              , l = s();
            return p(t[2], c),
            function(t, e) {
                for (let r = 0; r < 16; r++)
                    t[r] = e[2 * r] + (e[2 * r + 1] << 8);
                t[15] &= 32767
            }(t[1], e),
            O(i, t[1]),
            S(o, i, u),
            E(i, i, t[2]),
            m(o, t[2], o),
            O(f, o),
            O(h, f),
            S(l, h, f),
            S(r, l, i),
            S(r, r, o),
            function(t, e) {
                const r = s();
                let n;
                for (n = 0; n < 16; n++)
                    r[n] = e[n];
                for (n = 250; n >= 0; n--)
                    O(r, r),
                    1 !== n && S(r, r, e);
                for (n = 0; n < 16; n++)
                    t[n] = r[n]
            }(r, r),
            S(r, r, i),
            S(r, r, o),
            S(r, r, o),
            S(t[0], r, o),
            O(n, t[0]),
            S(n, n, o),
            v(n, i) && S(t[0], t[0], d),
            O(n, t[0]),
            S(n, n, o),
            v(n, i) ? -1 : (w(t[0]) === e[31] >> 7 && E(t[0], a, t[0]),
            S(t[3], t[0], t[1]),
            0)
        }
        e.Xx = function(t, e) {
            const r = new Float64Array(64)
              , n = [s(), s(), s(), s()]
              , o = (0,
            i.hash)(t.subarray(0, 32));
            o[0] &= 248,
            o[31] &= 127,
            o[31] |= 64;
            const a = new Uint8Array(64);
            a.set(o.subarray(32), 32);
            const c = new i.SHA512;
            c.update(a.subarray(32)),
            c.update(e);
            const u = c.digest();
            c.clean(),
            M(u),
            x(n, u),
            U(a, n),
            c.reset(),
            c.update(a.subarray(0, 32)),
            c.update(t.subarray(32)),
            c.update(e);
            const f = c.digest();
            M(f);
            for (let i = 0; i < 32; i++)
                r[i] = u[i];
            for (let i = 0; i < 32; i++)
                for (let t = 0; t < 32; t++)
                    r[i + t] += f[i] * o[t];
            return N(a.subarray(32), r),
            a
        }
    },
    87353: function(t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.isSerializableHash = function(t) {
            return "undefined" !== typeof t.saveState && "undefined" !== typeof t.restoreState && "undefined" !== typeof t.cleanSavedState
        }
    },
    4759: function(t, e, r) {
        "use strict";
        var n = r(62679)
          , i = r(19044)
          , o = function() {
            function t(t, e, r, i) {
                void 0 === r && (r = new Uint8Array(0)),
                this._counter = new Uint8Array(1),
                this._hash = t,
                this._info = i;
                var o = n.hmac(this._hash, r, e);
                this._hmac = new n.HMAC(t,o),
                this._buffer = new Uint8Array(this._hmac.digestLength),
                this._bufpos = this._buffer.length
            }
            return t.prototype._fillBuffer = function() {
                this._counter[0]++;
                var t = this._counter[0];
                if (0 === t)
                    throw new Error("hkdf: cannot expand more");
                this._hmac.reset(),
                t > 1 && this._hmac.update(this._buffer),
                this._info && this._hmac.update(this._info),
                this._hmac.update(this._counter),
                this._hmac.finish(this._buffer),
                this._bufpos = 0
            }
            ,
            t.prototype.expand = function(t) {
                for (var e = new Uint8Array(t), r = 0; r < e.length; r++)
                    this._bufpos === this._buffer.length && this._fillBuffer(),
                    e[r] = this._buffer[this._bufpos++];
                return e
            }
            ,
            t.prototype.clean = function() {
                this._hmac.clean(),
                i.wipe(this._buffer),
                i.wipe(this._counter),
                this._bufpos = 0
            }
            ,
            t
        }();
        e.t = o
    },
    62679: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(87353)
          , i = r(23653)
          , o = r(19044)
          , s = function() {
            function t(t, e) {
                this._finished = !1,
                this._inner = new t,
                this._outer = new t,
                this.blockSize = this._outer.blockSize,
                this.digestLength = this._outer.digestLength;
                var r = new Uint8Array(this.blockSize);
                e.length > this.blockSize ? this._inner.update(e).finish(r).clean() : r.set(e);
                for (var i = 0; i < r.length; i++)
                    r[i] ^= 54;
                this._inner.update(r);
                for (i = 0; i < r.length; i++)
                    r[i] ^= 106;
                this._outer.update(r),
                n.isSerializableHash(this._inner) && n.isSerializableHash(this._outer) && (this._innerKeyedState = this._inner.saveState(),
                this._outerKeyedState = this._outer.saveState()),
                o.wipe(r)
            }
            return t.prototype.reset = function() {
                if (!n.isSerializableHash(this._inner) || !n.isSerializableHash(this._outer))
                    throw new Error("hmac: can't reset() because hash doesn't implement restoreState()");
                return this._inner.restoreState(this._innerKeyedState),
                this._outer.restoreState(this._outerKeyedState),
                this._finished = !1,
                this
            }
            ,
            t.prototype.clean = function() {
                n.isSerializableHash(this._inner) && this._inner.cleanSavedState(this._innerKeyedState),
                n.isSerializableHash(this._outer) && this._outer.cleanSavedState(this._outerKeyedState),
                this._inner.clean(),
                this._outer.clean()
            }
            ,
            t.prototype.update = function(t) {
                return this._inner.update(t),
                this
            }
            ,
            t.prototype.finish = function(t) {
                return this._finished ? (this._outer.finish(t),
                this) : (this._inner.finish(t),
                this._outer.update(t.subarray(0, this.digestLength)).finish(t),
                this._finished = !0,
                this)
            }
            ,
            t.prototype.digest = function() {
                var t = new Uint8Array(this.digestLength);
                return this.finish(t),
                t
            }
            ,
            t.prototype.saveState = function() {
                if (!n.isSerializableHash(this._inner))
                    throw new Error("hmac: can't saveState() because hash doesn't implement it");
                return this._inner.saveState()
            }
            ,
            t.prototype.restoreState = function(t) {
                if (!n.isSerializableHash(this._inner) || !n.isSerializableHash(this._outer))
                    throw new Error("hmac: can't restoreState() because hash doesn't implement it");
                return this._inner.restoreState(t),
                this._outer.restoreState(this._outerKeyedState),
                this._finished = !1,
                this
            }
            ,
            t.prototype.cleanSavedState = function(t) {
                if (!n.isSerializableHash(this._inner))
                    throw new Error("hmac: can't cleanSavedState() because hash doesn't implement it");
                this._inner.cleanSavedState(t)
            }
            ,
            t
        }();
        e.HMAC = s,
        e.hmac = function(t, e, r) {
            var n = new s(t,e);
            n.update(r);
            var i = n.digest();
            return n.clean(),
            i
        }
        ,
        e.equal = i.equal
    },
    50329: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(23653)
          , i = r(19044);
        e.DIGEST_LENGTH = 16;
        var o = function() {
            function t(t) {
                this.digestLength = e.DIGEST_LENGTH,
                this._buffer = new Uint8Array(16),
                this._r = new Uint16Array(10),
                this._h = new Uint16Array(10),
                this._pad = new Uint16Array(8),
                this._leftover = 0,
                this._fin = 0,
                this._finished = !1;
                var r = t[0] | t[1] << 8;
                this._r[0] = 8191 & r;
                var n = t[2] | t[3] << 8;
                this._r[1] = 8191 & (r >>> 13 | n << 3);
                var i = t[4] | t[5] << 8;
                this._r[2] = 7939 & (n >>> 10 | i << 6);
                var o = t[6] | t[7] << 8;
                this._r[3] = 8191 & (i >>> 7 | o << 9);
                var s = t[8] | t[9] << 8;
                this._r[4] = 255 & (o >>> 4 | s << 12),
                this._r[5] = s >>> 1 & 8190;
                var a = t[10] | t[11] << 8;
                this._r[6] = 8191 & (s >>> 14 | a << 2);
                var c = t[12] | t[13] << 8;
                this._r[7] = 8065 & (a >>> 11 | c << 5);
                var u = t[14] | t[15] << 8;
                this._r[8] = 8191 & (c >>> 8 | u << 8),
                this._r[9] = u >>> 5 & 127,
                this._pad[0] = t[16] | t[17] << 8,
                this._pad[1] = t[18] | t[19] << 8,
                this._pad[2] = t[20] | t[21] << 8,
                this._pad[3] = t[22] | t[23] << 8,
                this._pad[4] = t[24] | t[25] << 8,
                this._pad[5] = t[26] | t[27] << 8,
                this._pad[6] = t[28] | t[29] << 8,
                this._pad[7] = t[30] | t[31] << 8
            }
            return t.prototype._blocks = function(t, e, r) {
                for (var n = this._fin ? 0 : 2048, i = this._h[0], o = this._h[1], s = this._h[2], a = this._h[3], c = this._h[4], u = this._h[5], f = this._h[6], h = this._h[7], l = this._h[8], d = this._h[9], p = this._r[0], y = this._r[1], b = this._r[2], _ = this._r[3], g = this._r[4], v = this._r[5], w = this._r[6], m = this._r[7], E = this._r[8], S = this._r[9]; r >= 16; ) {
                    var O = t[e + 0] | t[e + 1] << 8;
                    i += 8191 & O;
                    var I = t[e + 2] | t[e + 3] << 8;
                    o += 8191 & (O >>> 13 | I << 3);
                    var R = t[e + 4] | t[e + 5] << 8;
                    s += 8191 & (I >>> 10 | R << 6);
                    var A = t[e + 6] | t[e + 7] << 8;
                    a += 8191 & (R >>> 7 | A << 9);
                    var U = t[e + 8] | t[e + 9] << 8;
                    c += 8191 & (A >>> 4 | U << 12),
                    u += U >>> 1 & 8191;
                    var L = t[e + 10] | t[e + 11] << 8;
                    f += 8191 & (U >>> 14 | L << 2);
                    var x = t[e + 12] | t[e + 13] << 8;
                    h += 8191 & (L >>> 11 | x << 5);
                    var T = t[e + 14] | t[e + 15] << 8
                      , k = 0
                      , N = k;
                    N += i * p,
                    N += o * (5 * S),
                    N += s * (5 * E),
                    N += a * (5 * m),
                    k = (N += c * (5 * w)) >>> 13,
                    N &= 8191,
                    N += u * (5 * v),
                    N += f * (5 * g),
                    N += h * (5 * _),
                    N += (l += 8191 & (x >>> 8 | T << 8)) * (5 * b);
                    var M = k += (N += (d += T >>> 5 | n) * (5 * y)) >>> 13;
                    M += i * y,
                    M += o * p,
                    M += s * (5 * S),
                    M += a * (5 * E),
                    k = (M += c * (5 * m)) >>> 13,
                    M &= 8191,
                    M += u * (5 * w),
                    M += f * (5 * v),
                    M += h * (5 * g),
                    M += l * (5 * _),
                    k += (M += d * (5 * b)) >>> 13,
                    M &= 8191;
                    var j = k;
                    j += i * b,
                    j += o * y,
                    j += s * p,
                    j += a * (5 * S),
                    k = (j += c * (5 * E)) >>> 13,
                    j &= 8191,
                    j += u * (5 * m),
                    j += f * (5 * w),
                    j += h * (5 * v),
                    j += l * (5 * g);
                    var P = k += (j += d * (5 * _)) >>> 13;
                    P += i * _,
                    P += o * b,
                    P += s * y,
                    P += a * p,
                    k = (P += c * (5 * S)) >>> 13,
                    P &= 8191,
                    P += u * (5 * E),
                    P += f * (5 * m),
                    P += h * (5 * w),
                    P += l * (5 * v);
                    var C = k += (P += d * (5 * g)) >>> 13;
                    C += i * g,
                    C += o * _,
                    C += s * b,
                    C += a * y,
                    k = (C += c * p) >>> 13,
                    C &= 8191,
                    C += u * (5 * S),
                    C += f * (5 * E),
                    C += h * (5 * m),
                    C += l * (5 * w);
                    var H = k += (C += d * (5 * v)) >>> 13;
                    H += i * v,
                    H += o * g,
                    H += s * _,
                    H += a * b,
                    k = (H += c * y) >>> 13,
                    H &= 8191,
                    H += u * p,
                    H += f * (5 * S),
                    H += h * (5 * E),
                    H += l * (5 * m);
                    var W = k += (H += d * (5 * w)) >>> 13;
                    W += i * w,
                    W += o * v,
                    W += s * g,
                    W += a * _,
                    k = (W += c * b) >>> 13,
                    W &= 8191,
                    W += u * y,
                    W += f * p,
                    W += h * (5 * S),
                    W += l * (5 * E);
                    var B = k += (W += d * (5 * m)) >>> 13;
                    B += i * m,
                    B += o * w,
                    B += s * v,
                    B += a * g,
                    k = (B += c * _) >>> 13,
                    B &= 8191,
                    B += u * b,
                    B += f * y,
                    B += h * p,
                    B += l * (5 * S);
                    var D = k += (B += d * (5 * E)) >>> 13;
                    D += i * E,
                    D += o * m,
                    D += s * w,
                    D += a * v,
                    k = (D += c * g) >>> 13,
                    D &= 8191,
                    D += u * _,
                    D += f * b,
                    D += h * y,
                    D += l * p;
                    var z = k += (D += d * (5 * S)) >>> 13;
                    z += i * S,
                    z += o * E,
                    z += s * m,
                    z += a * w,
                    k = (z += c * v) >>> 13,
                    z &= 8191,
                    z += u * g,
                    z += f * _,
                    z += h * b,
                    z += l * y,
                    i = N = 8191 & (k = (k = ((k += (z += d * p) >>> 13) << 2) + k | 0) + (N &= 8191) | 0),
                    o = M += k >>>= 13,
                    s = j &= 8191,
                    a = P &= 8191,
                    c = C &= 8191,
                    u = H &= 8191,
                    f = W &= 8191,
                    h = B &= 8191,
                    l = D &= 8191,
                    d = z &= 8191,
                    e += 16,
                    r -= 16
                }
                this._h[0] = i,
                this._h[1] = o,
                this._h[2] = s,
                this._h[3] = a,
                this._h[4] = c,
                this._h[5] = u,
                this._h[6] = f,
                this._h[7] = h,
                this._h[8] = l,
                this._h[9] = d
            }
            ,
            t.prototype.finish = function(t, e) {
                void 0 === e && (e = 0);
                var r, n, i, o, s = new Uint16Array(10);
                if (this._leftover) {
                    for (o = this._leftover,
                    this._buffer[o++] = 1; o < 16; o++)
                        this._buffer[o] = 0;
                    this._fin = 1,
                    this._blocks(this._buffer, 0, 16)
                }
                for (r = this._h[1] >>> 13,
                this._h[1] &= 8191,
                o = 2; o < 10; o++)
                    this._h[o] += r,
                    r = this._h[o] >>> 13,
                    this._h[o] &= 8191;
                for (this._h[0] += 5 * r,
                r = this._h[0] >>> 13,
                this._h[0] &= 8191,
                this._h[1] += r,
                r = this._h[1] >>> 13,
                this._h[1] &= 8191,
                this._h[2] += r,
                s[0] = this._h[0] + 5,
                r = s[0] >>> 13,
                s[0] &= 8191,
                o = 1; o < 10; o++)
                    s[o] = this._h[o] + r,
                    r = s[o] >>> 13,
                    s[o] &= 8191;
                for (s[9] -= 8192,
                n = (1 ^ r) - 1,
                o = 0; o < 10; o++)
                    s[o] &= n;
                for (n = ~n,
                o = 0; o < 10; o++)
                    this._h[o] = this._h[o] & n | s[o];
                for (this._h[0] = 65535 & (this._h[0] | this._h[1] << 13),
                this._h[1] = 65535 & (this._h[1] >>> 3 | this._h[2] << 10),
                this._h[2] = 65535 & (this._h[2] >>> 6 | this._h[3] << 7),
                this._h[3] = 65535 & (this._h[3] >>> 9 | this._h[4] << 4),
                this._h[4] = 65535 & (this._h[4] >>> 12 | this._h[5] << 1 | this._h[6] << 14),
                this._h[5] = 65535 & (this._h[6] >>> 2 | this._h[7] << 11),
                this._h[6] = 65535 & (this._h[7] >>> 5 | this._h[8] << 8),
                this._h[7] = 65535 & (this._h[8] >>> 8 | this._h[9] << 5),
                i = this._h[0] + this._pad[0],
                this._h[0] = 65535 & i,
                o = 1; o < 8; o++)
                    i = (this._h[o] + this._pad[o] | 0) + (i >>> 16) | 0,
                    this._h[o] = 65535 & i;
                return t[e + 0] = this._h[0] >>> 0,
                t[e + 1] = this._h[0] >>> 8,
                t[e + 2] = this._h[1] >>> 0,
                t[e + 3] = this._h[1] >>> 8,
                t[e + 4] = this._h[2] >>> 0,
                t[e + 5] = this._h[2] >>> 8,
                t[e + 6] = this._h[3] >>> 0,
                t[e + 7] = this._h[3] >>> 8,
                t[e + 8] = this._h[4] >>> 0,
                t[e + 9] = this._h[4] >>> 8,
                t[e + 10] = this._h[5] >>> 0,
                t[e + 11] = this._h[5] >>> 8,
                t[e + 12] = this._h[6] >>> 0,
                t[e + 13] = this._h[6] >>> 8,
                t[e + 14] = this._h[7] >>> 0,
                t[e + 15] = this._h[7] >>> 8,
                this._finished = !0,
                this
            }
            ,
            t.prototype.update = function(t) {
                var e, r = 0, n = t.length;
                if (this._leftover) {
                    (e = 16 - this._leftover) > n && (e = n);
                    for (var i = 0; i < e; i++)
                        this._buffer[this._leftover + i] = t[r + i];
                    if (n -= e,
                    r += e,
                    this._leftover += e,
                    this._leftover < 16)
                        return this;
                    this._blocks(this._buffer, 0, 16),
                    this._leftover = 0
                }
                if (n >= 16 && (e = n - n % 16,
                this._blocks(t, r, e),
                r += e,
                n -= e),
                n) {
                    for (i = 0; i < n; i++)
                        this._buffer[this._leftover + i] = t[r + i];
                    this._leftover += n
                }
                return this
            }
            ,
            t.prototype.digest = function() {
                if (this._finished)
                    throw new Error("Poly1305 was finished");
                var t = new Uint8Array(16);
                return this.finish(t),
                t
            }
            ,
            t.prototype.clean = function() {
                return i.wipe(this._buffer),
                i.wipe(this._r),
                i.wipe(this._h),
                i.wipe(this._pad),
                this._leftover = 0,
                this._fin = 0,
                this._finished = !0,
                this
            }
            ,
            t
        }();
        e.Poly1305 = o,
        e.oneTimeAuth = function(t, e) {
            var r = new o(t);
            r.update(e);
            var n = r.digest();
            return r.clean(),
            n
        }
        ,
        e.equal = function(t, r) {
            return t.length === e.DIGEST_LENGTH && r.length === e.DIGEST_LENGTH && n.equal(t, r)
        }
    },
    58161: function(t, e, r) {
        "use strict";
        var n = r(87689)
          , i = r(19044);
        e.k = 32,
        e.cn = 64;
        var o = function() {
            function t() {
                this.digestLength = e.k,
                this.blockSize = e.cn,
                this._state = new Int32Array(8),
                this._temp = new Int32Array(64),
                this._buffer = new Uint8Array(128),
                this._bufferLength = 0,
                this._bytesHashed = 0,
                this._finished = !1,
                this.reset()
            }
            return t.prototype._initState = function() {
                this._state[0] = 1779033703,
                this._state[1] = 3144134277,
                this._state[2] = 1013904242,
                this._state[3] = 2773480762,
                this._state[4] = 1359893119,
                this._state[5] = 2600822924,
                this._state[6] = 528734635,
                this._state[7] = 1541459225
            }
            ,
            t.prototype.reset = function() {
                return this._initState(),
                this._bufferLength = 0,
                this._bytesHashed = 0,
                this._finished = !1,
                this
            }
            ,
            t.prototype.clean = function() {
                i.wipe(this._buffer),
                i.wipe(this._temp),
                this.reset()
            }
            ,
            t.prototype.update = function(t, e) {
                if (void 0 === e && (e = t.length),
                this._finished)
                    throw new Error("SHA256: can't update because hash was finished.");
                var r = 0;
                if (this._bytesHashed += e,
                this._bufferLength > 0) {
                    for (; this._bufferLength < this.blockSize && e > 0; )
                        this._buffer[this._bufferLength++] = t[r++],
                        e--;
                    this._bufferLength === this.blockSize && (a(this._temp, this._state, this._buffer, 0, this.blockSize),
                    this._bufferLength = 0)
                }
                for (e >= this.blockSize && (r = a(this._temp, this._state, t, r, e),
                e %= this.blockSize); e > 0; )
                    this._buffer[this._bufferLength++] = t[r++],
                    e--;
                return this
            }
            ,
            t.prototype.finish = function(t) {
                if (!this._finished) {
                    var e = this._bytesHashed
                      , r = this._bufferLength
                      , i = e / 536870912 | 0
                      , o = e << 3
                      , s = e % 64 < 56 ? 64 : 128;
                    this._buffer[r] = 128;
                    for (var c = r + 1; c < s - 8; c++)
                        this._buffer[c] = 0;
                    n.writeUint32BE(i, this._buffer, s - 8),
                    n.writeUint32BE(o, this._buffer, s - 4),
                    a(this._temp, this._state, this._buffer, 0, s),
                    this._finished = !0
                }
                for (c = 0; c < this.digestLength / 4; c++)
                    n.writeUint32BE(this._state[c], t, 4 * c);
                return this
            }
            ,
            t.prototype.digest = function() {
                var t = new Uint8Array(this.digestLength);
                return this.finish(t),
                t
            }
            ,
            t.prototype.saveState = function() {
                if (this._finished)
                    throw new Error("SHA256: cannot save finished state");
                return {
                    state: new Int32Array(this._state),
                    buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
                    bufferLength: this._bufferLength,
                    bytesHashed: this._bytesHashed
                }
            }
            ,
            t.prototype.restoreState = function(t) {
                return this._state.set(t.state),
                this._bufferLength = t.bufferLength,
                t.buffer && this._buffer.set(t.buffer),
                this._bytesHashed = t.bytesHashed,
                this._finished = !1,
                this
            }
            ,
            t.prototype.cleanSavedState = function(t) {
                i.wipe(t.state),
                t.buffer && i.wipe(t.buffer),
                t.bufferLength = 0,
                t.bytesHashed = 0
            }
            ,
            t
        }();
        e.mE = o;
        var s = new Int32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]);
        function a(t, e, r, i, o) {
            for (; o >= 64; ) {
                for (var a = e[0], c = e[1], u = e[2], f = e[3], h = e[4], l = e[5], d = e[6], p = e[7], y = 0; y < 16; y++) {
                    var b = i + 4 * y;
                    t[y] = n.readUint32BE(r, b)
                }
                for (y = 16; y < 64; y++) {
                    var _ = t[y - 2]
                      , g = (_ >>> 17 | _ << 15) ^ (_ >>> 19 | _ << 13) ^ _ >>> 10
                      , v = ((_ = t[y - 15]) >>> 7 | _ << 25) ^ (_ >>> 18 | _ << 14) ^ _ >>> 3;
                    t[y] = (g + t[y - 7] | 0) + (v + t[y - 16] | 0)
                }
                for (y = 0; y < 64; y++) {
                    g = (((h >>> 6 | h << 26) ^ (h >>> 11 | h << 21) ^ (h >>> 25 | h << 7)) + (h & l ^ ~h & d) | 0) + (p + (s[y] + t[y] | 0) | 0) | 0,
                    v = ((a >>> 2 | a << 30) ^ (a >>> 13 | a << 19) ^ (a >>> 22 | a << 10)) + (a & c ^ a & u ^ c & u) | 0;
                    p = d,
                    d = l,
                    l = h,
                    h = f + g | 0,
                    f = u,
                    u = c,
                    c = a,
                    a = g + v | 0
                }
                e[0] += a,
                e[1] += c,
                e[2] += u,
                e[3] += f,
                e[4] += h,
                e[5] += l,
                e[6] += d,
                e[7] += p,
                i += 64,
                o -= 64
            }
            return i
        }
        e.vp = function(t) {
            var e = new o;
            e.update(t);
            var r = e.digest();
            return e.clean(),
            r
        }
    },
    17212: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(87689)
          , i = r(19044);
        e.DIGEST_LENGTH = 64,
        e.BLOCK_SIZE = 128;
        var o = function() {
            function t() {
                this.digestLength = e.DIGEST_LENGTH,
                this.blockSize = e.BLOCK_SIZE,
                this._stateHi = new Int32Array(8),
                this._stateLo = new Int32Array(8),
                this._tempHi = new Int32Array(16),
                this._tempLo = new Int32Array(16),
                this._buffer = new Uint8Array(256),
                this._bufferLength = 0,
                this._bytesHashed = 0,
                this._finished = !1,
                this.reset()
            }
            return t.prototype._initState = function() {
                this._stateHi[0] = 1779033703,
                this._stateHi[1] = 3144134277,
                this._stateHi[2] = 1013904242,
                this._stateHi[3] = 2773480762,
                this._stateHi[4] = 1359893119,
                this._stateHi[5] = 2600822924,
                this._stateHi[6] = 528734635,
                this._stateHi[7] = 1541459225,
                this._stateLo[0] = 4089235720,
                this._stateLo[1] = 2227873595,
                this._stateLo[2] = 4271175723,
                this._stateLo[3] = 1595750129,
                this._stateLo[4] = 2917565137,
                this._stateLo[5] = 725511199,
                this._stateLo[6] = 4215389547,
                this._stateLo[7] = 327033209
            }
            ,
            t.prototype.reset = function() {
                return this._initState(),
                this._bufferLength = 0,
                this._bytesHashed = 0,
                this._finished = !1,
                this
            }
            ,
            t.prototype.clean = function() {
                i.wipe(this._buffer),
                i.wipe(this._tempHi),
                i.wipe(this._tempLo),
                this.reset()
            }
            ,
            t.prototype.update = function(t, r) {
                if (void 0 === r && (r = t.length),
                this._finished)
                    throw new Error("SHA512: can't update because hash was finished.");
                var n = 0;
                if (this._bytesHashed += r,
                this._bufferLength > 0) {
                    for (; this._bufferLength < e.BLOCK_SIZE && r > 0; )
                        this._buffer[this._bufferLength++] = t[n++],
                        r--;
                    this._bufferLength === this.blockSize && (a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize),
                    this._bufferLength = 0)
                }
                for (r >= this.blockSize && (n = a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, t, n, r),
                r %= this.blockSize); r > 0; )
                    this._buffer[this._bufferLength++] = t[n++],
                    r--;
                return this
            }
            ,
            t.prototype.finish = function(t) {
                if (!this._finished) {
                    var e = this._bytesHashed
                      , r = this._bufferLength
                      , i = e / 536870912 | 0
                      , o = e << 3
                      , s = e % 128 < 112 ? 128 : 256;
                    this._buffer[r] = 128;
                    for (var c = r + 1; c < s - 8; c++)
                        this._buffer[c] = 0;
                    n.writeUint32BE(i, this._buffer, s - 8),
                    n.writeUint32BE(o, this._buffer, s - 4),
                    a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, s),
                    this._finished = !0
                }
                for (c = 0; c < this.digestLength / 8; c++)
                    n.writeUint32BE(this._stateHi[c], t, 8 * c),
                    n.writeUint32BE(this._stateLo[c], t, 8 * c + 4);
                return this
            }
            ,
            t.prototype.digest = function() {
                var t = new Uint8Array(this.digestLength);
                return this.finish(t),
                t
            }
            ,
            t.prototype.saveState = function() {
                if (this._finished)
                    throw new Error("SHA256: cannot save finished state");
                return {
                    stateHi: new Int32Array(this._stateHi),
                    stateLo: new Int32Array(this._stateLo),
                    buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
                    bufferLength: this._bufferLength,
                    bytesHashed: this._bytesHashed
                }
            }
            ,
            t.prototype.restoreState = function(t) {
                return this._stateHi.set(t.stateHi),
                this._stateLo.set(t.stateLo),
                this._bufferLength = t.bufferLength,
                t.buffer && this._buffer.set(t.buffer),
                this._bytesHashed = t.bytesHashed,
                this._finished = !1,
                this
            }
            ,
            t.prototype.cleanSavedState = function(t) {
                i.wipe(t.stateHi),
                i.wipe(t.stateLo),
                t.buffer && i.wipe(t.buffer),
                t.bufferLength = 0,
                t.bytesHashed = 0
            }
            ,
            t
        }();
        e.SHA512 = o;
        var s = new Int32Array([1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591]);
        function a(t, e, r, i, o, a, c) {
            for (var u, f, h, l, d, p, y, b, _ = r[0], g = r[1], v = r[2], w = r[3], m = r[4], E = r[5], S = r[6], O = r[7], I = i[0], R = i[1], A = i[2], U = i[3], L = i[4], x = i[5], T = i[6], k = i[7]; c >= 128; ) {
                for (var N = 0; N < 16; N++) {
                    var M = 8 * N + a;
                    t[N] = n.readUint32BE(o, M),
                    e[N] = n.readUint32BE(o, M + 4)
                }
                for (N = 0; N < 80; N++) {
                    var j, P, C = _, H = g, W = v, B = w, D = m, z = E, J = S, K = I, F = R, $ = A, V = U, q = L, Y = x, X = T;
                    if (d = 65535 & (f = k),
                    p = f >>> 16,
                    y = 65535 & (u = O),
                    b = u >>> 16,
                    d += 65535 & (f = (L >>> 14 | m << 18) ^ (L >>> 18 | m << 14) ^ (m >>> 9 | L << 23)),
                    p += f >>> 16,
                    y += 65535 & (u = (m >>> 14 | L << 18) ^ (m >>> 18 | L << 14) ^ (L >>> 9 | m << 23)),
                    b += u >>> 16,
                    d += 65535 & (f = L & x ^ ~L & T),
                    p += f >>> 16,
                    y += 65535 & (u = m & E ^ ~m & S),
                    b += u >>> 16,
                    u = s[2 * N],
                    d += 65535 & (f = s[2 * N + 1]),
                    p += f >>> 16,
                    y += 65535 & u,
                    b += u >>> 16,
                    u = t[N % 16],
                    p += (f = e[N % 16]) >>> 16,
                    y += 65535 & u,
                    b += u >>> 16,
                    y += (p += (d += 65535 & f) >>> 16) >>> 16,
                    d = 65535 & (f = l = 65535 & d | p << 16),
                    p = f >>> 16,
                    y = 65535 & (u = h = 65535 & y | (b += y >>> 16) << 16),
                    b = u >>> 16,
                    d += 65535 & (f = (I >>> 28 | _ << 4) ^ (_ >>> 2 | I << 30) ^ (_ >>> 7 | I << 25)),
                    p += f >>> 16,
                    y += 65535 & (u = (_ >>> 28 | I << 4) ^ (I >>> 2 | _ << 30) ^ (I >>> 7 | _ << 25)),
                    b += u >>> 16,
                    p += (f = I & R ^ I & A ^ R & A) >>> 16,
                    y += 65535 & (u = _ & g ^ _ & v ^ g & v),
                    b += u >>> 16,
                    j = 65535 & (y += (p += (d += 65535 & f) >>> 16) >>> 16) | (b += y >>> 16) << 16,
                    P = 65535 & d | p << 16,
                    d = 65535 & (f = V),
                    p = f >>> 16,
                    y = 65535 & (u = B),
                    b = u >>> 16,
                    p += (f = l) >>> 16,
                    y += 65535 & (u = h),
                    b += u >>> 16,
                    g = C,
                    v = H,
                    w = W,
                    m = B = 65535 & (y += (p += (d += 65535 & f) >>> 16) >>> 16) | (b += y >>> 16) << 16,
                    E = D,
                    S = z,
                    O = J,
                    _ = j,
                    R = K,
                    A = F,
                    U = $,
                    L = V = 65535 & d | p << 16,
                    x = q,
                    T = Y,
                    k = X,
                    I = P,
                    N % 16 === 15)
                        for (M = 0; M < 16; M++)
                            u = t[M],
                            d = 65535 & (f = e[M]),
                            p = f >>> 16,
                            y = 65535 & u,
                            b = u >>> 16,
                            u = t[(M + 9) % 16],
                            d += 65535 & (f = e[(M + 9) % 16]),
                            p += f >>> 16,
                            y += 65535 & u,
                            b += u >>> 16,
                            h = t[(M + 1) % 16],
                            d += 65535 & (f = ((l = e[(M + 1) % 16]) >>> 1 | h << 31) ^ (l >>> 8 | h << 24) ^ (l >>> 7 | h << 25)),
                            p += f >>> 16,
                            y += 65535 & (u = (h >>> 1 | l << 31) ^ (h >>> 8 | l << 24) ^ h >>> 7),
                            b += u >>> 16,
                            h = t[(M + 14) % 16],
                            p += (f = ((l = e[(M + 14) % 16]) >>> 19 | h << 13) ^ (h >>> 29 | l << 3) ^ (l >>> 6 | h << 26)) >>> 16,
                            y += 65535 & (u = (h >>> 19 | l << 13) ^ (l >>> 29 | h << 3) ^ h >>> 6),
                            b += u >>> 16,
                            b += (y += (p += (d += 65535 & f) >>> 16) >>> 16) >>> 16,
                            t[M] = 65535 & y | b << 16,
                            e[M] = 65535 & d | p << 16
                }
                d = 65535 & (f = I),
                p = f >>> 16,
                y = 65535 & (u = _),
                b = u >>> 16,
                u = r[0],
                p += (f = i[0]) >>> 16,
                y += 65535 & u,
                b += u >>> 16,
                b += (y += (p += (d += 65535 & f) >>> 16) >>> 16) >>> 16,
                r[0] = _ = 65535 & y | b << 16,
                i[0] = I = 65535 & d | p << 16,
                d = 65535 & (f = R),
                p = f >>> 16,
                y = 65535 & (u = g),
                b = u >>> 16,
                u = r[1],
                p += (f = i[1]) >>> 16,
                y += 65535 & u,
                b += u >>> 16,
                b += (y += (p += (d += 65535 & f) >>> 16) >>> 16) >>> 16,
                r[1] = g = 65535 & y | b << 16,
                i[1] = R = 65535 & d | p << 16,
                d = 65535 & (f = A),
                p = f >>> 16,
                y = 65535 & (u = v),
                b = u >>> 16,
                u = r[2],
                p += (f = i[2]) >>> 16,
                y += 65535 & u,
                b += u >>> 16,
                b += (y += (p += (d += 65535 & f) >>> 16) >>> 16) >>> 16,
                r[2] = v = 65535 & y | b << 16,
                i[2] = A = 65535 & d | p << 16,
                d = 65535 & (f = U),
                p = f >>> 16,
                y = 65535 & (u = w),
                b = u >>> 16,
                u = r[3],
                p += (f = i[3]) >>> 16,
                y += 65535 & u,
                b += u >>> 16,
                b += (y += (p += (d += 65535 & f) >>> 16) >>> 16) >>> 16,
                r[3] = w = 65535 & y | b << 16,
                i[3] = U = 65535 & d | p << 16,
                d = 65535 & (f = L),
                p = f >>> 16,
                y = 65535 & (u = m),
                b = u >>> 16,
                u = r[4],
                p += (f = i[4]) >>> 16,
                y += 65535 & u,
                b += u >>> 16,
                b += (y += (p += (d += 65535 & f) >>> 16) >>> 16) >>> 16,
                r[4] = m = 65535 & y | b << 16,
                i[4] = L = 65535 & d | p << 16,
                d = 65535 & (f = x),
                p = f >>> 16,
                y = 65535 & (u = E),
                b = u >>> 16,
                u = r[5],
                p += (f = i[5]) >>> 16,
                y += 65535 & u,
                b += u >>> 16,
                b += (y += (p += (d += 65535 & f) >>> 16) >>> 16) >>> 16,
                r[5] = E = 65535 & y | b << 16,
                i[5] = x = 65535 & d | p << 16,
                d = 65535 & (f = T),
                p = f >>> 16,
                y = 65535 & (u = S),
                b = u >>> 16,
                u = r[6],
                p += (f = i[6]) >>> 16,
                y += 65535 & u,
                b += u >>> 16,
                b += (y += (p += (d += 65535 & f) >>> 16) >>> 16) >>> 16,
                r[6] = S = 65535 & y | b << 16,
                i[6] = T = 65535 & d | p << 16,
                d = 65535 & (f = k),
                p = f >>> 16,
                y = 65535 & (u = O),
                b = u >>> 16,
                u = r[7],
                p += (f = i[7]) >>> 16,
                y += 65535 & u,
                b += u >>> 16,
                b += (y += (p += (d += 65535 & f) >>> 16) >>> 16) >>> 16,
                r[7] = O = 65535 & y | b << 16,
                i[7] = k = 65535 & d | p << 16,
                a += 128,
                c -= 128
            }
            return a
        }
        e.hash = function(t) {
            var e = new o;
            e.update(t);
            var r = e.digest();
            return e.clean(),
            r
        }
    },
    5796: function(t, e, r) {
        "use strict";
        e.gi = e.Au = e.KS = e.kz = void 0;
        const n = r(80900)
          , i = r(19044);
        function o(t) {
            const e = new Float64Array(16);
            if (t)
                for (let r = 0; r < t.length; r++)
                    e[r] = t[r];
            return e
        }
        e.kz = 32,
        e.KS = 32;
        const s = new Uint8Array(32);
        s[0] = 9;
        const a = o([56129, 1]);
        function c(t) {
            let e = 1;
            for (let r = 0; r < 16; r++) {
                let n = t[r] + e + 65535;
                e = Math.floor(n / 65536),
                t[r] = n - 65536 * e
            }
            t[0] += e - 1 + 37 * (e - 1)
        }
        function u(t, e, r) {
            const n = ~(r - 1);
            for (let i = 0; i < 16; i++) {
                const r = n & (t[i] ^ e[i]);
                t[i] ^= r,
                e[i] ^= r
            }
        }
        function f(t, e, r) {
            for (let n = 0; n < 16; n++)
                t[n] = e[n] + r[n]
        }
        function h(t, e, r) {
            for (let n = 0; n < 16; n++)
                t[n] = e[n] - r[n]
        }
        function l(t, e, r) {
            let n, i, o = 0, s = 0, a = 0, c = 0, u = 0, f = 0, h = 0, l = 0, d = 0, p = 0, y = 0, b = 0, _ = 0, g = 0, v = 0, w = 0, m = 0, E = 0, S = 0, O = 0, I = 0, R = 0, A = 0, U = 0, L = 0, x = 0, T = 0, k = 0, N = 0, M = 0, j = 0, P = r[0], C = r[1], H = r[2], W = r[3], B = r[4], D = r[5], z = r[6], J = r[7], K = r[8], F = r[9], $ = r[10], V = r[11], q = r[12], Y = r[13], X = r[14], G = r[15];
            n = e[0],
            o += n * P,
            s += n * C,
            a += n * H,
            c += n * W,
            u += n * B,
            f += n * D,
            h += n * z,
            l += n * J,
            d += n * K,
            p += n * F,
            y += n * $,
            b += n * V,
            _ += n * q,
            g += n * Y,
            v += n * X,
            w += n * G,
            n = e[1],
            s += n * P,
            a += n * C,
            c += n * H,
            u += n * W,
            f += n * B,
            h += n * D,
            l += n * z,
            d += n * J,
            p += n * K,
            y += n * F,
            b += n * $,
            _ += n * V,
            g += n * q,
            v += n * Y,
            w += n * X,
            m += n * G,
            n = e[2],
            a += n * P,
            c += n * C,
            u += n * H,
            f += n * W,
            h += n * B,
            l += n * D,
            d += n * z,
            p += n * J,
            y += n * K,
            b += n * F,
            _ += n * $,
            g += n * V,
            v += n * q,
            w += n * Y,
            m += n * X,
            E += n * G,
            n = e[3],
            c += n * P,
            u += n * C,
            f += n * H,
            h += n * W,
            l += n * B,
            d += n * D,
            p += n * z,
            y += n * J,
            b += n * K,
            _ += n * F,
            g += n * $,
            v += n * V,
            w += n * q,
            m += n * Y,
            E += n * X,
            S += n * G,
            n = e[4],
            u += n * P,
            f += n * C,
            h += n * H,
            l += n * W,
            d += n * B,
            p += n * D,
            y += n * z,
            b += n * J,
            _ += n * K,
            g += n * F,
            v += n * $,
            w += n * V,
            m += n * q,
            E += n * Y,
            S += n * X,
            O += n * G,
            n = e[5],
            f += n * P,
            h += n * C,
            l += n * H,
            d += n * W,
            p += n * B,
            y += n * D,
            b += n * z,
            _ += n * J,
            g += n * K,
            v += n * F,
            w += n * $,
            m += n * V,
            E += n * q,
            S += n * Y,
            O += n * X,
            I += n * G,
            n = e[6],
            h += n * P,
            l += n * C,
            d += n * H,
            p += n * W,
            y += n * B,
            b += n * D,
            _ += n * z,
            g += n * J,
            v += n * K,
            w += n * F,
            m += n * $,
            E += n * V,
            S += n * q,
            O += n * Y,
            I += n * X,
            R += n * G,
            n = e[7],
            l += n * P,
            d += n * C,
            p += n * H,
            y += n * W,
            b += n * B,
            _ += n * D,
            g += n * z,
            v += n * J,
            w += n * K,
            m += n * F,
            E += n * $,
            S += n * V,
            O += n * q,
            I += n * Y,
            R += n * X,
            A += n * G,
            n = e[8],
            d += n * P,
            p += n * C,
            y += n * H,
            b += n * W,
            _ += n * B,
            g += n * D,
            v += n * z,
            w += n * J,
            m += n * K,
            E += n * F,
            S += n * $,
            O += n * V,
            I += n * q,
            R += n * Y,
            A += n * X,
            U += n * G,
            n = e[9],
            p += n * P,
            y += n * C,
            b += n * H,
            _ += n * W,
            g += n * B,
            v += n * D,
            w += n * z,
            m += n * J,
            E += n * K,
            S += n * F,
            O += n * $,
            I += n * V,
            R += n * q,
            A += n * Y,
            U += n * X,
            L += n * G,
            n = e[10],
            y += n * P,
            b += n * C,
            _ += n * H,
            g += n * W,
            v += n * B,
            w += n * D,
            m += n * z,
            E += n * J,
            S += n * K,
            O += n * F,
            I += n * $,
            R += n * V,
            A += n * q,
            U += n * Y,
            L += n * X,
            x += n * G,
            n = e[11],
            b += n * P,
            _ += n * C,
            g += n * H,
            v += n * W,
            w += n * B,
            m += n * D,
            E += n * z,
            S += n * J,
            O += n * K,
            I += n * F,
            R += n * $,
            A += n * V,
            U += n * q,
            L += n * Y,
            x += n * X,
            T += n * G,
            n = e[12],
            _ += n * P,
            g += n * C,
            v += n * H,
            w += n * W,
            m += n * B,
            E += n * D,
            S += n * z,
            O += n * J,
            I += n * K,
            R += n * F,
            A += n * $,
            U += n * V,
            L += n * q,
            x += n * Y,
            T += n * X,
            k += n * G,
            n = e[13],
            g += n * P,
            v += n * C,
            w += n * H,
            m += n * W,
            E += n * B,
            S += n * D,
            O += n * z,
            I += n * J,
            R += n * K,
            A += n * F,
            U += n * $,
            L += n * V,
            x += n * q,
            T += n * Y,
            k += n * X,
            N += n * G,
            n = e[14],
            v += n * P,
            w += n * C,
            m += n * H,
            E += n * W,
            S += n * B,
            O += n * D,
            I += n * z,
            R += n * J,
            A += n * K,
            U += n * F,
            L += n * $,
            x += n * V,
            T += n * q,
            k += n * Y,
            N += n * X,
            M += n * G,
            n = e[15],
            w += n * P,
            m += n * C,
            E += n * H,
            S += n * W,
            O += n * B,
            I += n * D,
            R += n * z,
            A += n * J,
            U += n * K,
            L += n * F,
            x += n * $,
            T += n * V,
            k += n * q,
            N += n * Y,
            M += n * X,
            j += n * G,
            o += 38 * m,
            s += 38 * E,
            a += 38 * S,
            c += 38 * O,
            u += 38 * I,
            f += 38 * R,
            h += 38 * A,
            l += 38 * U,
            d += 38 * L,
            p += 38 * x,
            y += 38 * T,
            b += 38 * k,
            _ += 38 * N,
            g += 38 * M,
            v += 38 * j,
            i = 1,
            n = o + i + 65535,
            i = Math.floor(n / 65536),
            o = n - 65536 * i,
            n = s + i + 65535,
            i = Math.floor(n / 65536),
            s = n - 65536 * i,
            n = a + i + 65535,
            i = Math.floor(n / 65536),
            a = n - 65536 * i,
            n = c + i + 65535,
            i = Math.floor(n / 65536),
            c = n - 65536 * i,
            n = u + i + 65535,
            i = Math.floor(n / 65536),
            u = n - 65536 * i,
            n = f + i + 65535,
            i = Math.floor(n / 65536),
            f = n - 65536 * i,
            n = h + i + 65535,
            i = Math.floor(n / 65536),
            h = n - 65536 * i,
            n = l + i + 65535,
            i = Math.floor(n / 65536),
            l = n - 65536 * i,
            n = d + i + 65535,
            i = Math.floor(n / 65536),
            d = n - 65536 * i,
            n = p + i + 65535,
            i = Math.floor(n / 65536),
            p = n - 65536 * i,
            n = y + i + 65535,
            i = Math.floor(n / 65536),
            y = n - 65536 * i,
            n = b + i + 65535,
            i = Math.floor(n / 65536),
            b = n - 65536 * i,
            n = _ + i + 65535,
            i = Math.floor(n / 65536),
            _ = n - 65536 * i,
            n = g + i + 65535,
            i = Math.floor(n / 65536),
            g = n - 65536 * i,
            n = v + i + 65535,
            i = Math.floor(n / 65536),
            v = n - 65536 * i,
            n = w + i + 65535,
            i = Math.floor(n / 65536),
            w = n - 65536 * i,
            o += i - 1 + 37 * (i - 1),
            i = 1,
            n = o + i + 65535,
            i = Math.floor(n / 65536),
            o = n - 65536 * i,
            n = s + i + 65535,
            i = Math.floor(n / 65536),
            s = n - 65536 * i,
            n = a + i + 65535,
            i = Math.floor(n / 65536),
            a = n - 65536 * i,
            n = c + i + 65535,
            i = Math.floor(n / 65536),
            c = n - 65536 * i,
            n = u + i + 65535,
            i = Math.floor(n / 65536),
            u = n - 65536 * i,
            n = f + i + 65535,
            i = Math.floor(n / 65536),
            f = n - 65536 * i,
            n = h + i + 65535,
            i = Math.floor(n / 65536),
            h = n - 65536 * i,
            n = l + i + 65535,
            i = Math.floor(n / 65536),
            l = n - 65536 * i,
            n = d + i + 65535,
            i = Math.floor(n / 65536),
            d = n - 65536 * i,
            n = p + i + 65535,
            i = Math.floor(n / 65536),
            p = n - 65536 * i,
            n = y + i + 65535,
            i = Math.floor(n / 65536),
            y = n - 65536 * i,
            n = b + i + 65535,
            i = Math.floor(n / 65536),
            b = n - 65536 * i,
            n = _ + i + 65535,
            i = Math.floor(n / 65536),
            _ = n - 65536 * i,
            n = g + i + 65535,
            i = Math.floor(n / 65536),
            g = n - 65536 * i,
            n = v + i + 65535,
            i = Math.floor(n / 65536),
            v = n - 65536 * i,
            n = w + i + 65535,
            i = Math.floor(n / 65536),
            w = n - 65536 * i,
            o += i - 1 + 37 * (i - 1),
            t[0] = o,
            t[1] = s,
            t[2] = a,
            t[3] = c,
            t[4] = u,
            t[5] = f,
            t[6] = h,
            t[7] = l,
            t[8] = d,
            t[9] = p,
            t[10] = y,
            t[11] = b,
            t[12] = _,
            t[13] = g,
            t[14] = v,
            t[15] = w
        }
        function d(t, e) {
            l(t, e, e)
        }
        function p(t, e) {
            const r = new Uint8Array(32)
              , n = new Float64Array(80)
              , i = o()
              , s = o()
              , p = o()
              , y = o()
              , b = o()
              , _ = o();
            for (let o = 0; o < 31; o++)
                r[o] = t[o];
            r[31] = 127 & t[31] | 64,
            r[0] &= 248,
            function(t, e) {
                for (let r = 0; r < 16; r++)
                    t[r] = e[2 * r] + (e[2 * r + 1] << 8);
                t[15] &= 32767
            }(n, e);
            for (let o = 0; o < 16; o++)
                s[o] = n[o];
            i[0] = y[0] = 1;
            for (let o = 254; o >= 0; --o) {
                const t = r[o >>> 3] >>> (7 & o) & 1;
                u(i, s, t),
                u(p, y, t),
                f(b, i, p),
                h(i, i, p),
                f(p, s, y),
                h(s, s, y),
                d(y, b),
                d(_, i),
                l(i, p, i),
                l(p, s, b),
                f(b, i, p),
                h(i, i, p),
                d(s, i),
                h(p, y, _),
                l(i, p, a),
                f(i, i, y),
                l(p, p, i),
                l(i, y, _),
                l(y, s, n),
                d(s, b),
                u(i, s, t),
                u(p, y, t)
            }
            for (let o = 0; o < 16; o++)
                n[o + 16] = i[o],
                n[o + 32] = p[o],
                n[o + 48] = s[o],
                n[o + 64] = y[o];
            const g = n.subarray(32)
              , v = n.subarray(16);
            !function(t, e) {
                const r = o();
                for (let n = 0; n < 16; n++)
                    r[n] = e[n];
                for (let n = 253; n >= 0; n--)
                    d(r, r),
                    2 !== n && 4 !== n && l(r, r, e);
                for (let n = 0; n < 16; n++)
                    t[n] = r[n]
            }(g, g),
            l(v, v, g);
            const w = new Uint8Array(32);
            return function(t, e) {
                const r = o()
                  , n = o();
                for (let i = 0; i < 16; i++)
                    n[i] = e[i];
                c(n),
                c(n),
                c(n);
                for (let i = 0; i < 2; i++) {
                    r[0] = n[0] - 65517;
                    for (let e = 1; e < 15; e++)
                        r[e] = n[e] - 65535 - (r[e - 1] >> 16 & 1),
                        r[e - 1] &= 65535;
                    r[15] = n[15] - 32767 - (r[14] >> 16 & 1);
                    const t = r[15] >> 16 & 1;
                    r[14] &= 65535,
                    u(n, r, 1 - t)
                }
                for (let i = 0; i < 16; i++)
                    t[2 * i] = 255 & n[i],
                    t[2 * i + 1] = n[i] >> 8
            }(w, v),
            w
        }
        function y(t) {
            return p(t, s)
        }
        function b(t) {
            if (t.length !== e.KS)
                throw new Error(`x25519: seed must be ${e.KS} bytes`);
            const r = new Uint8Array(t);
            return {
                publicKey: y(r),
                secretKey: r
            }
        }
        e.Au = function(t) {
            const e = (0,
            n.randomBytes)(32, t)
              , r = b(e);
            return (0,
            i.wipe)(e),
            r
        }
        ,
        e.gi = function(t, r, n=!1) {
            if (t.length !== e.kz)
                throw new Error("X25519: incorrect secret key length");
            if (r.length !== e.kz)
                throw new Error("X25519: incorrect public key length");
            const i = p(t, r);
            if (n) {
                let t = 0;
                for (let e = 0; e < i.length; e++)
                    t |= i[e];
                if (0 === t)
                    throw new Error("X25519: invalid shared key")
            }
            return i
        }
    },
    16305: function(t, e, r) {
        "use strict";
        function n() {
            return (null === r.g || void 0 === r.g ? void 0 : r.g.crypto) || (null === r.g || void 0 === r.g ? void 0 : r.g.msCrypto) || {}
        }
        function i() {
            const t = n();
            return t.subtle || t.webkitSubtle
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.isBrowserCryptoAvailable = e.getSubtleCrypto = e.getBrowerCrypto = void 0,
        e.getBrowerCrypto = n,
        e.getSubtleCrypto = i,
        e.isBrowserCryptoAvailable = function() {
            return !!n() && !!i()
        }
    },
    96451: function(t, e, r) {
        "use strict";
        var n = r(73656);
        function i() {
            return "undefined" === typeof document && "undefined" !== typeof navigator && "ReactNative" === navigator.product
        }
        function o() {
            return "undefined" !== typeof n && "undefined" !== typeof n.versions && "undefined" !== typeof n.versions.node
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.isBrowser = e.isNode = e.isReactNative = void 0,
        e.isReactNative = i,
        e.isNode = o,
        e.isBrowser = function() {
            return !i() && !o()
        }
    },
    92389: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        const n = r(33569);
        n.__exportStar(r(16305), e),
        n.__exportStar(r(96451), e)
    },
    92449: function(t, e, r) {
        "use strict";
        r.d(e, {
            q: function() {
                return n
            }
        });
        class n {
        }
    },
    66730: function(t, e, r) {
        "use strict";
        r.r(e),
        r.d(e, {
            IEvents: function() {
                return n.q
            }
        });
        var n = r(92449)
    },
    67427: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.HEARTBEAT_EVENTS = e.HEARTBEAT_INTERVAL = void 0;
        const n = r(89727);
        e.HEARTBEAT_INTERVAL = n.FIVE_SECONDS,
        e.HEARTBEAT_EVENTS = {
            pulse: "heartbeat_pulse"
        }
    },
    60807: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        r(33569).__exportStar(r(67427), e)
    },
    81782: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.HeartBeat = void 0;
        const n = r(33569)
          , i = r(47324)
          , o = r(89727)
          , s = r(23827)
          , a = r(60807);
        class c extends s.IHeartBeat {
            constructor(t) {
                super(t),
                this.events = new i.EventEmitter,
                this.interval = a.HEARTBEAT_INTERVAL,
                this.interval = (null === t || void 0 === t ? void 0 : t.interval) || a.HEARTBEAT_INTERVAL
            }
            static init(t) {
                return n.__awaiter(this, void 0, void 0, (function*() {
                    const e = new c(t);
                    return yield e.init(),
                    e
                }
                ))
            }
            init() {
                return n.__awaiter(this, void 0, void 0, (function*() {
                    yield this.initialize()
                }
                ))
            }
            stop() {
                clearInterval(this.intervalRef)
            }
            on(t, e) {
                this.events.on(t, e)
            }
            once(t, e) {
                this.events.once(t, e)
            }
            off(t, e) {
                this.events.off(t, e)
            }
            removeListener(t, e) {
                this.events.removeListener(t, e)
            }
            initialize() {
                return n.__awaiter(this, void 0, void 0, (function*() {
                    this.intervalRef = setInterval((()=>this.pulse()), o.toMiliseconds(this.interval))
                }
                ))
            }
            pulse() {
                this.events.emit(a.HEARTBEAT_EVENTS.pulse)
            }
        }
        e.HeartBeat = c
    },
    77698: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        const n = r(33569);
        n.__exportStar(r(81782), e),
        n.__exportStar(r(23827), e),
        n.__exportStar(r(60807), e)
    },
    37165: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.IHeartBeat = void 0;
        const n = r(66730);
        class i extends n.IEvents {
            constructor(t) {
                super()
            }
        }
        e.IHeartBeat = i
    },
    23827: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        r(33569).__exportStar(r(37165), e)
    },
    18085: function(t, e, r) {
        "use strict";
        r.d(e, {
            r: function() {
                return o
            }
        });
        var n = r(47324)
          , i = r(88972);
        class o extends i.IJsonRpcProvider {
            constructor(t) {
                super(t),
                this.events = new n.EventEmitter,
                this.hasRegisteredEventListeners = !1,
                this.connection = this.setConnection(t),
                this.connection.connected && this.registerEventListeners()
            }
            async connect(t=this.connection) {
                await this.open(t)
            }
            async disconnect() {
                await this.close()
            }
            on(t, e) {
                this.events.on(t, e)
            }
            once(t, e) {
                this.events.once(t, e)
            }
            off(t, e) {
                this.events.off(t, e)
            }
            removeListener(t, e) {
                this.events.removeListener(t, e)
            }
            async request(t, e) {
                return this.requestStrict((0,
                i.formatJsonRpcRequest)(t.method, t.params || [], t.id || (0,
                i.getBigIntRpcId)().toString()), e)
            }
            async requestStrict(t, e) {
                return new Promise((async(r,n)=>{
                    if (!this.connection.connected)
                        try {
                            await this.open()
                        } catch (o) {
                            n(o)
                        }
                    this.events.on(`${t.id}`, (t=>{
                        (0,
                        i.isJsonRpcError)(t) ? n(t.error) : r(t.result)
                    }
                    ));
                    try {
                        await this.connection.send(t, e)
                    } catch (o) {
                        n(o)
                    }
                }
                ))
            }
            setConnection(t=this.connection) {
                return t
            }
            onPayload(t) {
                this.events.emit("payload", t),
                (0,
                i.isJsonRpcResponse)(t) ? this.events.emit(`${t.id}`, t) : this.events.emit("message", {
                    type: t.method,
                    data: t.params
                })
            }
            onClose(t) {
                t && 3e3 === t.code && this.events.emit("error", new Error(`WebSocket connection closed abnormally with code: ${t.code} ${t.reason ? `(${t.reason})` : ""}`)),
                this.events.emit("disconnect")
            }
            async open(t=this.connection) {
                this.connection === t && this.connection.connected || (this.connection.connected && this.close(),
                "string" === typeof t && (await this.connection.open(t),
                t = this.connection),
                this.connection = this.setConnection(t),
                await this.connection.open(),
                this.registerEventListeners(),
                this.events.emit("connect"))
            }
            async close() {
                await this.connection.close()
            }
            registerEventListeners() {
                this.hasRegisteredEventListeners || (this.connection.on("payload", (t=>this.onPayload(t))),
                this.connection.on("close", (t=>this.onClose(t))),
                this.connection.on("error", (t=>this.events.emit("error", t))),
                this.connection.on("register_error", (t=>this.onClose())),
                this.hasRegisteredEventListeners = !0)
            }
        }
    },
    91381: function(t, e, r) {
        "use strict";
        r.d(e, {
            x0: function() {
                return o
            }
        });
        class n {
        }
        class i extends n {
            constructor() {
                super()
            }
        }
        class o extends i {
            constructor(t) {
                super()
            }
        }
    },
    15104: function(t, e, r) {
        "use strict";
        r.d(e, {
            CA: function() {
                return i
            },
            JV: function() {
                return a
            },
            O4: function() {
                return n
            },
            dQ: function() {
                return o
            },
            xK: function() {
                return s
            }
        });
        const n = "INTERNAL_ERROR"
          , i = "SERVER_ERROR"
          , o = [-32700, -32600, -32601, -32602, -32603]
          , s = {
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
            [n]: {
                code: -32603,
                message: "Internal error"
            },
            [i]: {
                code: -32e3,
                message: "Server error"
            }
        }
          , a = i
    },
    85623: function(t, e, r) {
        "use strict";
        var n = r(92389);
        r.o(n, "IJsonRpcProvider") && r.d(e, {
            IJsonRpcProvider: function() {
                return n.IJsonRpcProvider
            }
        }),
        r.o(n, "formatJsonRpcError") && r.d(e, {
            formatJsonRpcError: function() {
                return n.formatJsonRpcError
            }
        }),
        r.o(n, "formatJsonRpcRequest") && r.d(e, {
            formatJsonRpcRequest: function() {
                return n.formatJsonRpcRequest
            }
        }),
        r.o(n, "formatJsonRpcResult") && r.d(e, {
            formatJsonRpcResult: function() {
                return n.formatJsonRpcResult
            }
        }),
        r.o(n, "getBigIntRpcId") && r.d(e, {
            getBigIntRpcId: function() {
                return n.getBigIntRpcId
            }
        }),
        r.o(n, "isHttpUrl") && r.d(e, {
            isHttpUrl: function() {
                return n.isHttpUrl
            }
        }),
        r.o(n, "isJsonRpcError") && r.d(e, {
            isJsonRpcError: function() {
                return n.isJsonRpcError
            }
        }),
        r.o(n, "isJsonRpcRequest") && r.d(e, {
            isJsonRpcRequest: function() {
                return n.isJsonRpcRequest
            }
        }),
        r.o(n, "isJsonRpcResponse") && r.d(e, {
            isJsonRpcResponse: function() {
                return n.isJsonRpcResponse
            }
        }),
        r.o(n, "isJsonRpcResult") && r.d(e, {
            isJsonRpcResult: function() {
                return n.isJsonRpcResult
            }
        }),
        r.o(n, "isLocalhostUrl") && r.d(e, {
            isLocalhostUrl: function() {
                return n.isLocalhostUrl
            }
        }),
        r.o(n, "isReactNative") && r.d(e, {
            isReactNative: function() {
                return n.isReactNative
            }
        }),
        r.o(n, "isWsUrl") && r.d(e, {
            isWsUrl: function() {
                return n.isWsUrl
            }
        }),
        r.o(n, "payloadId") && r.d(e, {
            payloadId: function() {
                return n.payloadId
            }
        })
    },
    15747: function(t, e, r) {
        "use strict";
        r.d(e, {
            CX: function() {
                return a
            },
            L2: function() {
                return s
            },
            by: function() {
                return o
            },
            i5: function() {
                return i
            }
        });
        var n = r(15104);
        function i(t) {
            return n.dQ.includes(t)
        }
        function o(t) {
            return Object.keys(n.xK).includes(t) ? n.xK[t] : n.xK[n.JV]
        }
        function s(t) {
            const e = Object.values(n.xK).find((e=>e.code === t));
            return e || n.xK[n.JV]
        }
        function a(t, e, r) {
            return t.message.includes("getaddrinfo ENOTFOUND") || t.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${r} RPC url at ${e}`) : t
        }
    },
    66058: function(t, e, r) {
        "use strict";
        r.d(e, {
            CS: function() {
                return s
            },
            RI: function() {
                return u
            },
            o0: function() {
                return o
            },
            sT: function() {
                return a
            },
            tm: function() {
                return c
            }
        });
        var n = r(15747)
          , i = r(15104);
        function o(t=3) {
            return Date.now() * Math.pow(10, t) + Math.floor(Math.random() * Math.pow(10, t))
        }
        function s(t=6) {
            return BigInt(o(t))
        }
        function a(t, e, r) {
            return {
                id: r || o(),
                jsonrpc: "2.0",
                method: t,
                params: e
            }
        }
        function c(t, e) {
            return {
                id: t,
                jsonrpc: "2.0",
                result: e
            }
        }
        function u(t, e, r) {
            return {
                id: t,
                jsonrpc: "2.0",
                error: f(e, r)
            }
        }
        function f(t, e) {
            return "undefined" === typeof t ? (0,
            n.by)(i.O4) : ("string" === typeof t && (t = Object.assign(Object.assign({}, (0,
            n.by)(i.CA)), {
                message: t
            })),
            "undefined" !== typeof e && (t.data = e),
            (0,
            n.i5)(t.code) && (t = (0,
            n.L2)(t.code)),
            t)
        }
    },
    88972: function(t, e, r) {
        "use strict";
        r.d(e, {
            IJsonRpcProvider: function() {
                return s.x0
            },
            formatJsonRpcError: function() {
                return o.RI
            },
            formatJsonRpcRequest: function() {
                return o.sT
            },
            formatJsonRpcResult: function() {
                return o.tm
            },
            getBigIntRpcId: function() {
                return o.CS
            },
            isHttpUrl: function() {
                return a.jK
            },
            isJsonRpcError: function() {
                return c.jg
            },
            isJsonRpcRequest: function() {
                return c.DW
            },
            isJsonRpcResponse: function() {
                return c.u
            },
            isJsonRpcResult: function() {
                return c.k4
            },
            isLocalhostUrl: function() {
                return a.JF
            },
            isWsUrl: function() {
                return a.UZ
            },
            parseConnectionError: function() {
                return n.CX
            },
            payloadId: function() {
                return o.o0
            }
        });
        r(15104);
        var n = r(15747)
          , i = r(85623);
        r.o(i, "IJsonRpcProvider") && r.d(e, {
            IJsonRpcProvider: function() {
                return i.IJsonRpcProvider
            }
        }),
        r.o(i, "formatJsonRpcError") && r.d(e, {
            formatJsonRpcError: function() {
                return i.formatJsonRpcError
            }
        }),
        r.o(i, "formatJsonRpcRequest") && r.d(e, {
            formatJsonRpcRequest: function() {
                return i.formatJsonRpcRequest
            }
        }),
        r.o(i, "formatJsonRpcResult") && r.d(e, {
            formatJsonRpcResult: function() {
                return i.formatJsonRpcResult
            }
        }),
        r.o(i, "getBigIntRpcId") && r.d(e, {
            getBigIntRpcId: function() {
                return i.getBigIntRpcId
            }
        }),
        r.o(i, "isHttpUrl") && r.d(e, {
            isHttpUrl: function() {
                return i.isHttpUrl
            }
        }),
        r.o(i, "isJsonRpcError") && r.d(e, {
            isJsonRpcError: function() {
                return i.isJsonRpcError
            }
        }),
        r.o(i, "isJsonRpcRequest") && r.d(e, {
            isJsonRpcRequest: function() {
                return i.isJsonRpcRequest
            }
        }),
        r.o(i, "isJsonRpcResponse") && r.d(e, {
            isJsonRpcResponse: function() {
                return i.isJsonRpcResponse
            }
        }),
        r.o(i, "isJsonRpcResult") && r.d(e, {
            isJsonRpcResult: function() {
                return i.isJsonRpcResult
            }
        }),
        r.o(i, "isLocalhostUrl") && r.d(e, {
            isLocalhostUrl: function() {
                return i.isLocalhostUrl
            }
        }),
        r.o(i, "isReactNative") && r.d(e, {
            isReactNative: function() {
                return i.isReactNative
            }
        }),
        r.o(i, "isWsUrl") && r.d(e, {
            isWsUrl: function() {
                return i.isWsUrl
            }
        }),
        r.o(i, "payloadId") && r.d(e, {
            payloadId: function() {
                return i.payloadId
            }
        });
        var o = r(66058)
          , s = r(4130)
          , a = r(5400)
          , c = r(61113)
    },
    4130: function(t, e, r) {
        "use strict";
        r.d(e, {
            x0: function() {
                return n.x0
            }
        });
        var n = r(91381)
    },
    5400: function(t, e, r) {
        "use strict";
        r.d(e, {
            JF: function() {
                return c
            },
            UZ: function() {
                return a
            },
            jK: function() {
                return s
            }
        });
        const n = "^https?:"
          , i = "^wss?:";
        function o(t, e) {
            const r = function(t) {
                const e = t.match(new RegExp(/^\w+:/,"gi"));
                if (e && e.length)
                    return e[0]
            }(t);
            return "undefined" !== typeof r && new RegExp(e).test(r)
        }
        function s(t) {
            return o(t, n)
        }
        function a(t) {
            return o(t, i)
        }
        function c(t) {
            return new RegExp("wss?://localhost(:d{2,5})?").test(t)
        }
    },
    61113: function(t, e, r) {
        "use strict";
        function n(t) {
            return "object" === typeof t && "id"in t && "jsonrpc"in t && "2.0" === t.jsonrpc
        }
        function i(t) {
            return n(t) && "method"in t
        }
        function o(t) {
            return n(t) && (s(t) || a(t))
        }
        function s(t) {
            return "result"in t
        }
        function a(t) {
            return "error"in t
        }
        r.d(e, {
            DW: function() {
                return i
            },
            jg: function() {
                return a
            },
            k4: function() {
                return s
            },
            u: function() {
                return o
            }
        })
    },
    14219: function(t, e, r) {
        "use strict";
        r.d(e, {
            Z: function() {
                return c
            }
        });
        var n = r(47324)
          , i = r(21646)
          , o = r(88972);
        const s = t=>t.split("?")[0]
          , a = typeof WebSocket < "u" ? WebSocket : typeof r.g < "u" && typeof r.g.WebSocket < "u" ? r.g.WebSocket : typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : typeof self < "u" && typeof self.WebSocket < "u" ? self.WebSocket : r(15335);
        class c {
            constructor(t) {
                if (this.url = t,
                this.events = new n.EventEmitter,
                this.registering = !1,
                !(0,
                o.isWsUrl)(t))
                    throw new Error(`Provided URL is not compatible with WebSocket connection: ${t}`);
                this.url = t
            }
            get connected() {
                return typeof this.socket < "u"
            }
            get connecting() {
                return this.registering
            }
            on(t, e) {
                this.events.on(t, e)
            }
            once(t, e) {
                this.events.once(t, e)
            }
            off(t, e) {
                this.events.off(t, e)
            }
            removeListener(t, e) {
                this.events.removeListener(t, e)
            }
            async open(t=this.url) {
                await this.register(t)
            }
            async close() {
                return new Promise(((t,e)=>{
                    typeof this.socket > "u" ? e(new Error("Connection already closed")) : (this.socket.onclose = e=>{
                        this.onClose(e),
                        t()
                    }
                    ,
                    this.socket.close())
                }
                ))
            }
            async send(t) {
                typeof this.socket > "u" && (this.socket = await this.register());
                try {
                    this.socket.send((0,
                    i.u)(t))
                } catch (e) {
                    this.onError(t.id, e)
                }
            }
            register(t=this.url) {
                if (!(0,
                o.isWsUrl)(t))
                    throw new Error(`Provided URL is not compatible with WebSocket connection: ${t}`);
                if (this.registering) {
                    const t = this.events.getMaxListeners();
                    return (this.events.listenerCount("register_error") >= t || this.events.listenerCount("open") >= t) && this.events.setMaxListeners(t + 1),
                    new Promise(((t,e)=>{
                        this.events.once("register_error", (t=>{
                            this.resetMaxListeners(),
                            e(t)
                        }
                        )),
                        this.events.once("open", (()=>{
                            if (this.resetMaxListeners(),
                            typeof this.socket > "u")
                                return e(new Error("WebSocket connection is missing or invalid"));
                            t(this.socket)
                        }
                        ))
                    }
                    ))
                }
                return this.url = t,
                this.registering = !0,
                new Promise(((e,n)=>{
                    const i = new URLSearchParams(t).get("origin")
                      , s = (0,
                    o.isReactNative)() ? {
                        headers: {
                            origin: i
                        }
                    } : {
                        rejectUnauthorized: !(0,
                        o.isLocalhostUrl)(t)
                    }
                      , c = new a(t,[],s);
                    typeof WebSocket < "u" || typeof r.g < "u" && typeof r.g.WebSocket < "u" || typeof window < "u" && typeof window.WebSocket < "u" || typeof self < "u" && typeof self.WebSocket < "u" ? c.onerror = t=>{
                        const e = t;
                        n(this.emitError(e.error))
                    }
                    : c.on("error", (t=>{
                        n(this.emitError(t))
                    }
                    )),
                    c.onopen = ()=>{
                        this.onOpen(c),
                        e(c)
                    }
                }
                ))
            }
            onOpen(t) {
                t.onmessage = t=>this.onPayload(t),
                t.onclose = t=>this.onClose(t),
                this.socket = t,
                this.registering = !1,
                this.events.emit("open")
            }
            onClose(t) {
                this.socket = void 0,
                this.registering = !1,
                this.events.emit("close", t)
            }
            onPayload(t) {
                if (typeof t.data > "u")
                    return;
                const e = "string" == typeof t.data ? (0,
                i.D)(t.data) : t.data;
                this.events.emit("payload", e)
            }
            onError(t, e) {
                const r = this.parseError(e)
                  , n = r.message || r.toString()
                  , i = (0,
                o.formatJsonRpcError)(t, n);
                this.events.emit("payload", i)
            }
            parseError(t, e=this.url) {
                return (0,
                o.parseConnectionError)(t, s(e), "WS")
            }
            resetMaxListeners() {
                this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10)
            }
            emitError(t) {
                const e = this.parseError(new Error(t?.message || `WebSocket connection failed for host: ${s(this.url)}`));
                return this.events.emit("register_error", e),
                e
            }
        }
    },
    54646: function(t, e, r) {
        "use strict";
        r.d(e, {
            Z: function() {
                return M
            }
        });
        const n = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/
          , i = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/
          , o = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
        function s(t, e) {
            if (!("__proto__" === t || "constructor" === t && e && "object" === typeof e && "prototype"in e))
                return e;
            !function(t) {
                console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`)
            }(t)
        }
        function a(t, e={}) {
            if ("string" !== typeof t)
                return t;
            const r = t.trim();
            if ('"' === t[0] && '"' === t.at(-1) && !t.includes("\\"))
                return r.slice(1, -1);
            if (r.length <= 9) {
                const t = r.toLowerCase();
                if ("true" === t)
                    return !0;
                if ("false" === t)
                    return !1;
                if ("undefined" === t)
                    return;
                if ("null" === t)
                    return null;
                if ("nan" === t)
                    return Number.NaN;
                if ("infinity" === t)
                    return Number.POSITIVE_INFINITY;
                if ("-infinity" === t)
                    return Number.NEGATIVE_INFINITY
            }
            if (!o.test(t)) {
                if (e.strict)
                    throw new SyntaxError("[destr] Invalid JSON");
                return t
            }
            try {
                if (n.test(t) || i.test(t)) {
                    if (e.strict)
                        throw new Error("[destr] Possible prototype pollution");
                    return JSON.parse(t, s)
                }
                return JSON.parse(t)
            } catch (a) {
                if (e.strict)
                    throw a;
                return t
            }
        }
        var c = r(15313).Buffer;
        function u(t, ...e) {
            try {
                return (r = t(...e)) && "function" === typeof r.then ? r : Promise.resolve(r)
            } catch (n) {
                return Promise.reject(n)
            }
            var r
        }
        function f(t) {
            if (function(t) {
                const e = typeof t;
                return null === t || "object" !== e && "function" !== e
            }(t))
                return String(t);
            if (function(t) {
                const e = Object.getPrototypeOf(t);
                return !e || e.isPrototypeOf(Object)
            }(t) || Array.isArray(t))
                return JSON.stringify(t);
            if ("function" === typeof t.toJSON)
                return f(t.toJSON());
            throw new Error("[unstorage] Cannot stringify value!")
        }
        function h() {
            if (void 0 === typeof c)
                throw new TypeError("[unstorage] Buffer is not supported!")
        }
        const l = "base64:";
        function d(t) {
            return t ? t.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") : ""
        }
        function p(...t) {
            return d(t.join(":"))
        }
        function y(t) {
            return (t = d(t)) ? t + ":" : ""
        }
        const b = ()=>{
            const t = new Map;
            return {
                name: "memory",
                options: {},
                hasItem: e=>t.has(e),
                getItem: e=>t.get(e) || null,
                getItemRaw: e=>t.get(e) || null,
                setItem(e, r) {
                    t.set(e, r)
                },
                setItemRaw(e, r) {
                    t.set(e, r)
                },
                removeItem(e) {
                    t.delete(e)
                },
                getKeys: ()=>Array.from(t.keys()),
                clear() {
                    t.clear()
                },
                dispose() {
                    t.clear()
                }
            }
        }
        ;
        function _(t={}) {
            const e = {
                mounts: {
                    "": t.driver || b()
                },
                mountpoints: [""],
                watching: !1,
                watchListeners: [],
                unwatch: {}
            }
              , r = t=>{
                for (const r of e.mountpoints)
                    if (t.startsWith(r))
                        return {
                            base: r,
                            relativeKey: t.slice(r.length),
                            driver: e.mounts[r]
                        };
                return {
                    base: "",
                    relativeKey: t,
                    driver: e.mounts[""]
                }
            }
              , n = (t,r)=>e.mountpoints.filter((e=>e.startsWith(t) || r && t.startsWith(e))).map((r=>({
                relativeBase: t.length > r.length ? t.slice(r.length) : void 0,
                mountpoint: r,
                driver: e.mounts[r]
            })))
              , i = (t,r)=>{
                if (e.watching) {
                    r = d(r);
                    for (const n of e.watchListeners)
                        n(t, r)
                }
            }
              , o = async()=>{
                if (e.watching) {
                    for (const t in e.unwatch)
                        await e.unwatch[t]();
                    e.unwatch = {},
                    e.watching = !1
                }
            }
              , s = (t,e,n)=>{
                const i = new Map
                  , o = t=>{
                    let e = i.get(t.base);
                    return e || (e = {
                        driver: t.driver,
                        base: t.base,
                        items: []
                    },
                    i.set(t.base, e)),
                    e
                }
                ;
                for (const s of t) {
                    const t = "string" === typeof s
                      , n = d(t ? s : s.key)
                      , i = t ? void 0 : s.value
                      , a = t || !s.options ? e : {
                        ...e,
                        ...s.options
                    }
                      , c = r(n);
                    o(c).items.push({
                        key: n,
                        value: i,
                        relativeKey: c.relativeKey,
                        options: a
                    })
                }
                return Promise.all([...i.values()].map((t=>n(t)))).then((t=>t.flat()))
            }
              , _ = {
                hasItem(t, e={}) {
                    t = d(t);
                    const {relativeKey: n, driver: i} = r(t);
                    return u(i.hasItem, n, e)
                },
                getItem(t, e={}) {
                    t = d(t);
                    const {relativeKey: n, driver: i} = r(t);
                    return u(i.getItem, n, e).then((t=>a(t)))
                },
                getItems: (t,e)=>s(t, e, (t=>t.driver.getItems ? u(t.driver.getItems, t.items.map((t=>({
                    key: t.relativeKey,
                    options: t.options
                }))), e).then((e=>e.map((e=>({
                    key: p(t.base, e.key),
                    value: a(e.value)
                }))))) : Promise.all(t.items.map((e=>u(t.driver.getItem, e.relativeKey, e.options).then((t=>({
                    key: e.key,
                    value: a(t)
                })))))))),
                getItemRaw(t, e={}) {
                    t = d(t);
                    const {relativeKey: n, driver: i} = r(t);
                    return i.getItemRaw ? u(i.getItemRaw, n, e) : u(i.getItem, n, e).then((t=>function(t) {
                        return "string" !== typeof t ? t : t.startsWith(l) ? (h(),
                        c.from(t.slice(l.length), "base64")) : t
                    }(t)))
                },
                async setItem(t, e, n={}) {
                    if (void 0 === e)
                        return _.removeItem(t);
                    t = d(t);
                    const {relativeKey: o, driver: s} = r(t);
                    s.setItem && (await u(s.setItem, o, f(e), n),
                    s.watch || i("update", t))
                },
                async setItems(t, e) {
                    await s(t, e, (async t=>{
                        t.driver.setItems && await u(t.driver.setItems, t.items.map((t=>({
                            key: t.relativeKey,
                            value: f(t.value),
                            options: t.options
                        }))), e),
                        t.driver.setItem && await Promise.all(t.items.map((e=>u(t.driver.setItem, e.relativeKey, f(e.value), e.options))))
                    }
                    ))
                },
                async setItemRaw(t, e, n={}) {
                    if (void 0 === e)
                        return _.removeItem(t, n);
                    t = d(t);
                    const {relativeKey: o, driver: s} = r(t);
                    if (s.setItemRaw)
                        await u(s.setItemRaw, o, e, n);
                    else {
                        if (!s.setItem)
                            return;
                        await u(s.setItem, o, function(t) {
                            if ("string" === typeof t)
                                return t;
                            h();
                            const e = c.from(t).toString("base64");
                            return l + e
                        }(e), n)
                    }
                    s.watch || i("update", t)
                },
                async removeItem(t, e={}) {
                    "boolean" === typeof e && (e = {
                        removeMeta: e
                    }),
                    t = d(t);
                    const {relativeKey: n, driver: o} = r(t);
                    o.removeItem && (await u(o.removeItem, n, e),
                    (e.removeMeta || e.removeMata) && await u(o.removeItem, n + "$", e),
                    o.watch || i("remove", t))
                },
                async getMeta(t, e={}) {
                    "boolean" === typeof e && (e = {
                        nativeOnly: e
                    }),
                    t = d(t);
                    const {relativeKey: n, driver: i} = r(t)
                      , o = Object.create(null);
                    if (i.getMeta && Object.assign(o, await u(i.getMeta, n, e)),
                    !e.nativeOnly) {
                        const t = await u(i.getItem, n + "$", e).then((t=>a(t)));
                        t && "object" === typeof t && ("string" === typeof t.atime && (t.atime = new Date(t.atime)),
                        "string" === typeof t.mtime && (t.mtime = new Date(t.mtime)),
                        Object.assign(o, t))
                    }
                    return o
                },
                setMeta(t, e, r={}) {
                    return this.setItem(t + "$", e, r)
                },
                removeMeta(t, e={}) {
                    return this.removeItem(t + "$", e)
                },
                async getKeys(t, e={}) {
                    t = y(t);
                    const r = n(t, !0);
                    let i = [];
                    const o = [];
                    for (const n of r) {
                        const t = (await u(n.driver.getKeys, n.relativeBase, e)).map((t=>n.mountpoint + d(t))).filter((t=>!i.some((e=>t.startsWith(e)))));
                        o.push(...t),
                        i = [n.mountpoint, ...i.filter((t=>!t.startsWith(n.mountpoint)))]
                    }
                    return t ? o.filter((e=>e.startsWith(t) && !e.endsWith("$"))) : o.filter((t=>!t.endsWith("$")))
                },
                async clear(t, e={}) {
                    t = y(t),
                    await Promise.all(n(t, !1).map((async t=>{
                        if (t.driver.clear)
                            return u(t.driver.clear, t.relativeBase, e);
                        if (t.driver.removeItem) {
                            const r = await t.driver.getKeys(t.relativeBase || "", e);
                            return Promise.all(r.map((r=>t.driver.removeItem(r, e))))
                        }
                    }
                    )))
                },
                async dispose() {
                    await Promise.all(Object.values(e.mounts).map((t=>v(t))))
                },
                watch: async t=>(await (async()=>{
                    if (!e.watching) {
                        e.watching = !0;
                        for (const t in e.mounts)
                            e.unwatch[t] = await g(e.mounts[t], i, t)
                    }
                }
                )(),
                e.watchListeners.push(t),
                async()=>{
                    e.watchListeners = e.watchListeners.filter((e=>e !== t)),
                    0 === e.watchListeners.length && await o()
                }
                ),
                async unwatch() {
                    e.watchListeners = [],
                    await o()
                },
                mount(t, r) {
                    if ((t = y(t)) && e.mounts[t])
                        throw new Error(`already mounted at ${t}`);
                    return t && (e.mountpoints.push(t),
                    e.mountpoints.sort(((t,e)=>e.length - t.length))),
                    e.mounts[t] = r,
                    e.watching && Promise.resolve(g(r, i, t)).then((r=>{
                        e.unwatch[t] = r
                    }
                    )).catch(console.error),
                    _
                },
                async unmount(t, r=!0) {
                    (t = y(t)) && e.mounts[t] && (e.watching && t in e.unwatch && (e.unwatch[t](),
                    delete e.unwatch[t]),
                    r && await v(e.mounts[t]),
                    e.mountpoints = e.mountpoints.filter((e=>e !== t)),
                    delete e.mounts[t])
                },
                getMount(t="") {
                    t = d(t) + ":";
                    const e = r(t);
                    return {
                        driver: e.driver,
                        base: e.base
                    }
                },
                getMounts(t="", e={}) {
                    t = d(t);
                    return n(t, e.parents).map((t=>({
                        driver: t.driver,
                        base: t.mountpoint
                    })))
                }
            };
            return _
        }
        function g(t, e, r) {
            return t.watch ? t.watch(((t,n)=>e(t, r + n))) : ()=>{}
        }
        async function v(t) {
            "function" === typeof t.dispose && await u(t.dispose)
        }
        function w(t) {
            return new Promise(((e,r)=>{
                t.oncomplete = t.onsuccess = ()=>e(t.result),
                t.onabort = t.onerror = ()=>r(t.error)
            }
            ))
        }
        function m(t, e) {
            const r = indexedDB.open(t);
            r.onupgradeneeded = ()=>r.result.createObjectStore(e);
            const n = w(r);
            return (t,r)=>n.then((n=>r(n.transaction(e, t).objectStore(e))))
        }
        let E;
        function S() {
            return E || (E = m("keyval-store", "keyval")),
            E
        }
        function O(t, e=S()) {
            return e("readonly", (e=>w(e.get(t))))
        }
        function I(t, e) {
            return t.openCursor().onsuccess = function() {
                this.result && (e(this.result),
                this.result.continue())
            }
            ,
            w(t.transaction)
        }
        var R = r(21646);
        var A = (t={})=>{
            const e = t.base && t.base.length > 0 ? `${t.base}:` : ""
              , r = t=>e + t;
            let n;
            return t.dbName && t.storeName && (n = m(t.dbName, t.storeName)),
            {
                name: "idb-keyval",
                options: t,
                hasItem: async t=>!(typeof (await O(r(t), n)) > "u"),
                getItem: async t=>await O(r(t), n) ?? null,
                setItem: (t,e)=>function(t, e, r=S()) {
                    return r("readwrite", (r=>(r.put(e, t),
                    w(r.transaction))))
                }(r(t), e, n),
                removeItem: t=>function(t, e=S()) {
                    return e("readwrite", (e=>(e.delete(t),
                    w(e.transaction))))
                }(r(t), n),
                getKeys: ()=>function(t=S()) {
                    return t("readonly", (t=>{
                        if (t.getAllKeys)
                            return w(t.getAllKeys());
                        const e = [];
                        return I(t, (t=>e.push(t.key))).then((()=>e))
                    }
                    ))
                }(n),
                clear: ()=>function(t=S()) {
                    return t("readwrite", (t=>(t.clear(),
                    w(t.transaction))))
                }(n)
            }
        }
        ;
        class U {
            constructor() {
                this.indexedDb = _({
                    driver: A({
                        dbName: "WALLET_CONNECT_V2_INDEXED_DB",
                        storeName: "keyvaluestorage"
                    })
                })
            }
            async getKeys() {
                return this.indexedDb.getKeys()
            }
            async getEntries() {
                return (await this.indexedDb.getItems(await this.indexedDb.getKeys())).map((t=>[t.key, t.value]))
            }
            async getItem(t) {
                const e = await this.indexedDb.getItem(t);
                if (null !== e)
                    return e
            }
            async setItem(t, e) {
                await this.indexedDb.setItem(t, (0,
                R.u)(e))
            }
            async removeItem(t) {
                await this.indexedDb.removeItem(t)
            }
        }
        var L = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof r.g < "u" ? r.g : typeof self < "u" ? self : {}
          , x = {
            exports: {}
        };
        function T(t) {
            var e;
            return [t[0], (0,
            R.D)(null != (e = t[1]) ? e : "")]
        }
        !function() {
            let t;
            function e() {}
            t = e,
            t.prototype.getItem = function(t) {
                return this.hasOwnProperty(t) ? String(this[t]) : null
            }
            ,
            t.prototype.setItem = function(t, e) {
                this[t] = String(e)
            }
            ,
            t.prototype.removeItem = function(t) {
                delete this[t]
            }
            ,
            t.prototype.clear = function() {
                const t = this;
                Object.keys(t).forEach((function(e) {
                    t[e] = void 0,
                    delete t[e]
                }
                ))
            }
            ,
            t.prototype.key = function(t) {
                return t = t || 0,
                Object.keys(this)[t]
            }
            ,
            t.prototype.__defineGetter__("length", (function() {
                return Object.keys(this).length
            }
            )),
            typeof L < "u" && L.localStorage ? x.exports = L.localStorage : typeof window < "u" && window.localStorage ? x.exports = window.localStorage : x.exports = new e
        }();
        class k {
            constructor() {
                this.localStorage = x.exports
            }
            async getKeys() {
                return Object.keys(this.localStorage)
            }
            async getEntries() {
                return Object.entries(this.localStorage).map(T)
            }
            async getItem(t) {
                const e = this.localStorage.getItem(t);
                if (null !== e)
                    return (0,
                    R.D)(e)
            }
            async setItem(t, e) {
                this.localStorage.setItem(t, (0,
                R.u)(e))
            }
            async removeItem(t) {
                this.localStorage.removeItem(t)
            }
        }
        const N = async(t,e)=>{
            e.length && e.forEach((async e=>{
                await t.removeItem(e)
            }
            ))
        }
        ;
        class M {
            constructor() {
                this.initialized = !1,
                this.setInitialized = t=>{
                    this.storage = t,
                    this.initialized = !0
                }
                ;
                const t = new k;
                this.storage = t;
                try {
                    (async(t,e,r)=>{
                        const n = "wc_storage_version"
                          , i = await e.getItem(n);
                        if (i && i >= 1)
                            return void r(e);
                        const o = await t.getKeys();
                        if (!o.length)
                            return void r(e);
                        const s = [];
                        for (; o.length; ) {
                            const r = o.shift();
                            if (!r)
                                continue;
                            const n = r.toLowerCase();
                            if (n.includes("wc@") || n.includes("walletconnect") || n.includes("wc_") || n.includes("wallet_connect")) {
                                const n = await t.getItem(r);
                                await e.setItem(r, n),
                                s.push(r)
                            }
                        }
                        await e.setItem(n, 1),
                        r(e),
                        N(t, s)
                    }
                    )(t, new U, this.setInitialized)
                } catch {
                    this.initialized = !0
                }
            }
            async getKeys() {
                return await this.initialize(),
                this.storage.getKeys()
            }
            async getEntries() {
                return await this.initialize(),
                this.storage.getEntries()
            }
            async getItem(t) {
                return await this.initialize(),
                this.storage.getItem(t)
            }
            async setItem(t, e) {
                return await this.initialize(),
                this.storage.setItem(t, e)
            }
            async removeItem(t) {
                return await this.initialize(),
                this.storage.removeItem(t)
            }
            async initialize() {
                this.initialized || await new Promise((t=>{
                    const e = setInterval((()=>{
                        this.initialized && (clearInterval(e),
                        t())
                    }
                    ), 20)
                }
                ))
            }
        }
    },
    43355: function(t, e, r) {
        "use strict";
        r.d(e, {
            RELAY_JSONRPC: function() {
                return n
            }
        });
        r(35064);
        const n = {
            waku: {
                publish: "waku_publish",
                batchPublish: "waku_batchPublish",
                subscribe: "waku_subscribe",
                batchSubscribe: "waku_batchSubscribe",
                subscription: "waku_subscription",
                unsubscribe: "waku_unsubscribe",
                batchUnsubscribe: "waku_batchUnsubscribe"
            },
            irn: {
                publish: "irn_publish",
                batchPublish: "irn_batchPublish",
                subscribe: "irn_subscribe",
                batchSubscribe: "irn_batchSubscribe",
                subscription: "irn_subscription",
                unsubscribe: "irn_unsubscribe",
                batchUnsubscribe: "irn_batchUnsubscribe"
            },
            iridium: {
                publish: "iridium_publish",
                batchPublish: "iridium_batchPublish",
                subscribe: "iridium_subscribe",
                batchSubscribe: "iridium_batchSubscribe",
                subscription: "iridium_subscription",
                unsubscribe: "iridium_unsubscribe",
                batchUnsubscribe: "iridium_batchUnsubscribe"
            }
        }
    },
    35064: function() {},
    40267: function(t, e, r) {
        "use strict";
        r.d(e, {
            encodeIss: function() {
                return O
            },
            generateKeyPair: function() {
                return I
            },
            signJWT: function() {
                return R
            }
        });
        var n = r(30378)
          , i = r(80900)
          , o = r(89727);
        const s = "EdDSA"
          , a = "JWT"
          , c = "."
          , u = "base64url"
          , f = "utf8"
          , h = "utf8"
          , l = ":"
          , d = "did"
          , p = "key"
          , y = "base58btc"
          , b = "z"
          , _ = "K36"
          , g = 32;
        var v = r(51685)
          , w = r(17199)
          , m = r(38147)
          , E = r(21646);
        function S(t) {
            return (0,
            w.B)((0,
            m.m)((0,
            E.u)(t), f), u)
        }
        function O(t) {
            const e = (0,
            m.m)(_, y)
              , r = b + (0,
            w.B)((0,
            v.z)([e, t]), y);
            return [d, p, r].join(l)
        }
        function I(t=(0,
        i.randomBytes)(g)) {
            return n._w(t)
        }
        async function R(t, e, r, i, f=(0,
        o.fromMiliseconds)(Date.now())) {
            const l = {
                alg: s,
                typ: a
            }
              , d = {
                iss: O(i.publicKey),
                sub: t,
                aud: e,
                iat: f,
                exp: f + r
            }
              , p = (y = {
                header: l,
                payload: d
            },
            (0,
            m.m)([S(y.header), S(y.payload)].join(c), h));
            var y;
            return function(t) {
                return [S(t.header), S(t.payload), (e = t.signature,
                (0,
                w.B)(e, u))].join(c);
                var e
            }({
                header: l,
                payload: d,
                signature: n.Xx(i.secretKey, p)
            })
        }
        r(43678)
    },
    43678: function() {},
    21646: function(t, e, r) {
        "use strict";
        r.d(e, {
            D: function() {
                return o
            },
            u: function() {
                return s
            }
        });
        const n = t=>JSON.stringify(t, ((t,e)=>"bigint" === typeof e ? e.toString() + "n" : e))
          , i = t=>{
            const e = t.replace(/([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g, '$1"$2n"$3');
            return JSON.parse(e, ((t,e)=>"string" === typeof e && e.match(/^\d+n$/) ? BigInt(e.substring(0, e.length - 1)) : e))
        }
        ;
        function o(t) {
            if ("string" !== typeof t)
                throw new Error("Cannot safe json parse value of type " + typeof t);
            try {
                return i(t)
            } catch (e) {
                return t
            }
        }
        function s(t) {
            return "string" === typeof t ? t : n(t) || ""
        }
    },
    8041: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        const n = r(33569);
        n.__exportStar(r(14889), e),
        n.__exportStar(r(40392), e)
    },
    14889: function(t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.ONE_THOUSAND = e.ONE_HUNDRED = void 0,
        e.ONE_HUNDRED = 100,
        e.ONE_THOUSAND = 1e3
    },
    40392: function(t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.ONE_YEAR = e.FOUR_WEEKS = e.THREE_WEEKS = e.TWO_WEEKS = e.ONE_WEEK = e.THIRTY_DAYS = e.SEVEN_DAYS = e.FIVE_DAYS = e.THREE_DAYS = e.ONE_DAY = e.TWENTY_FOUR_HOURS = e.TWELVE_HOURS = e.SIX_HOURS = e.THREE_HOURS = e.ONE_HOUR = e.SIXTY_MINUTES = e.THIRTY_MINUTES = e.TEN_MINUTES = e.FIVE_MINUTES = e.ONE_MINUTE = e.SIXTY_SECONDS = e.THIRTY_SECONDS = e.TEN_SECONDS = e.FIVE_SECONDS = e.ONE_SECOND = void 0,
        e.ONE_SECOND = 1,
        e.FIVE_SECONDS = 5,
        e.TEN_SECONDS = 10,
        e.THIRTY_SECONDS = 30,
        e.SIXTY_SECONDS = 60,
        e.ONE_MINUTE = e.SIXTY_SECONDS,
        e.FIVE_MINUTES = 5 * e.ONE_MINUTE,
        e.TEN_MINUTES = 10 * e.ONE_MINUTE,
        e.THIRTY_MINUTES = 30 * e.ONE_MINUTE,
        e.SIXTY_MINUTES = 60 * e.ONE_MINUTE,
        e.ONE_HOUR = e.SIXTY_MINUTES,
        e.THREE_HOURS = 3 * e.ONE_HOUR,
        e.SIX_HOURS = 6 * e.ONE_HOUR,
        e.TWELVE_HOURS = 12 * e.ONE_HOUR,
        e.TWENTY_FOUR_HOURS = 24 * e.ONE_HOUR,
        e.ONE_DAY = e.TWENTY_FOUR_HOURS,
        e.THREE_DAYS = 3 * e.ONE_DAY,
        e.FIVE_DAYS = 5 * e.ONE_DAY,
        e.SEVEN_DAYS = 7 * e.ONE_DAY,
        e.THIRTY_DAYS = 30 * e.ONE_DAY,
        e.ONE_WEEK = e.SEVEN_DAYS,
        e.TWO_WEEKS = 2 * e.ONE_WEEK,
        e.THREE_WEEKS = 3 * e.ONE_WEEK,
        e.FOUR_WEEKS = 4 * e.ONE_WEEK,
        e.ONE_YEAR = 365 * e.ONE_DAY
    },
    89727: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        const n = r(33569);
        n.__exportStar(r(27592), e),
        n.__exportStar(r(85759), e),
        n.__exportStar(r(95026), e),
        n.__exportStar(r(8041), e)
    },
    95026: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        r(33569).__exportStar(r(21591), e)
    },
    21591: function(t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.IWatch = void 0;
        e.IWatch = class {
        }
    },
    38358: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.fromMiliseconds = e.toMiliseconds = void 0;
        const n = r(8041);
        e.toMiliseconds = function(t) {
            return t * n.ONE_THOUSAND
        }
        ,
        e.fromMiliseconds = function(t) {
            return Math.floor(t / n.ONE_THOUSAND)
        }
    },
    32042: function(t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.delay = void 0,
        e.delay = function(t) {
            return new Promise((e=>{
                setTimeout((()=>{
                    e(!0)
                }
                ), t)
            }
            ))
        }
    },
    27592: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        const n = r(33569);
        n.__exportStar(r(32042), e),
        n.__exportStar(r(38358), e)
    },
    85759: function(t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.Watch = void 0;
        class r {
            constructor() {
                this.timestamps = new Map
            }
            start(t) {
                if (this.timestamps.has(t))
                    throw new Error(`Watch already started for label: ${t}`);
                this.timestamps.set(t, {
                    started: Date.now()
                })
            }
            stop(t) {
                const e = this.get(t);
                if ("undefined" !== typeof e.elapsed)
                    throw new Error(`Watch already stopped for label: ${t}`);
                const r = Date.now() - e.started;
                this.timestamps.set(t, {
                    started: e.started,
                    elapsed: r
                })
            }
            get(t) {
                const e = this.timestamps.get(t);
                if ("undefined" === typeof e)
                    throw new Error(`No timestamp found for label: ${t}`);
                return e
            }
            elapsed(t) {
                const e = this.get(t);
                return e.elapsed || Date.now() - e.started
            }
        }
        e.Watch = r,
        e.default = r
    },
    21846: function(t, e) {
        "use strict";
        function r(t) {
            let e;
            return "undefined" !== typeof window && "undefined" !== typeof window[t] && (e = window[t]),
            e
        }
        function n(t) {
            const e = r(t);
            if (!e)
                throw new Error(`${t} is not defined in Window`);
            return e
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.getLocalStorage = e.getLocalStorageOrThrow = e.getCrypto = e.getCryptoOrThrow = e.getLocation = e.getLocationOrThrow = e.getNavigator = e.getNavigatorOrThrow = e.getDocument = e.getDocumentOrThrow = e.getFromWindowOrThrow = e.getFromWindow = void 0,
        e.getFromWindow = r,
        e.getFromWindowOrThrow = n,
        e.getDocumentOrThrow = function() {
            return n("document")
        }
        ,
        e.getDocument = function() {
            return r("document")
        }
        ,
        e.getNavigatorOrThrow = function() {
            return n("navigator")
        }
        ,
        e.getNavigator = function() {
            return r("navigator")
        }
        ,
        e.getLocationOrThrow = function() {
            return n("location")
        }
        ,
        e.getLocation = function() {
            return r("location")
        }
        ,
        e.getCryptoOrThrow = function() {
            return n("crypto")
        }
        ,
        e.getCrypto = function() {
            return r("crypto")
        }
        ,
        e.getLocalStorageOrThrow = function() {
            return n("localStorage")
        }
        ,
        e.getLocalStorage = function() {
            return r("localStorage")
        }
    },
    64390: function(t, e, r) {
        "use strict";
        e.D = void 0;
        const n = r(21846);
        e.D = function() {
            let t, e;
            try {
                t = n.getDocumentOrThrow(),
                e = n.getLocationOrThrow()
            } catch (o) {
                return null
            }
            function r(...e) {
                const r = t.getElementsByTagName("meta");
                for (let t = 0; t < r.length; t++) {
                    const n = r[t]
                      , i = ["itemprop", "property", "name"].map((t=>n.getAttribute(t))).filter((t=>!!t && e.includes(t)));
                    if (i.length && i) {
                        const t = n.getAttribute("content");
                        if (t)
                            return t
                    }
                }
                return ""
            }
            const i = function() {
                let e = r("name", "og:site_name", "og:title", "twitter:title");
                return e || (e = t.title),
                e
            }();
            return {
                description: r("description", "og:description", "twitter:description", "keywords"),
                url: e.origin,
                icons: function() {
                    const r = t.getElementsByTagName("link")
                      , n = [];
                    for (let t = 0; t < r.length; t++) {
                        const i = r[t]
                          , o = i.getAttribute("rel");
                        if (o && o.toLowerCase().indexOf("icon") > -1) {
                            const t = i.getAttribute("href");
                            if (t)
                                if (-1 === t.toLowerCase().indexOf("https:") && -1 === t.toLowerCase().indexOf("http:") && 0 !== t.indexOf("//")) {
                                    let r = e.protocol + "//" + e.host;
                                    if (0 === t.indexOf("/"))
                                        r += t;
                                    else {
                                        const n = e.pathname.split("/");
                                        n.pop();
                                        r += n.join("/") + "/" + t
                                    }
                                    n.push(r)
                                } else if (0 === t.indexOf("//")) {
                                    const r = e.protocol + t;
                                    n.push(r)
                                } else
                                    n.push(t)
                        }
                    }
                    return n
                }(),
                name: i
            }
        }
    },
    65140: function(t) {
        "use strict";
        var e = "%[a-f0-9]{2}"
          , r = new RegExp("(" + e + ")|([^%]+?)","gi")
          , n = new RegExp("(" + e + ")+","gi");
        function i(t, e) {
            try {
                return [decodeURIComponent(t.join(""))]
            } catch (o) {}
            if (1 === t.length)
                return t;
            e = e || 1;
            var r = t.slice(0, e)
              , n = t.slice(e);
            return Array.prototype.concat.call([], i(r), i(n))
        }
        function o(t) {
            try {
                return decodeURIComponent(t)
            } catch (o) {
                for (var e = t.match(r) || [], n = 1; n < e.length; n++)
                    e = (t = i(e, n).join("")).match(r) || [];
                return t
            }
        }
        t.exports = function(t) {
            if ("string" !== typeof t)
                throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof t + "`");
            try {
                return t = t.replace(/\+/g, " "),
                decodeURIComponent(t)
            } catch (e) {
                return function(t) {
                    for (var r = {
                        "%FE%FF": "\ufffd\ufffd",
                        "%FF%FE": "\ufffd\ufffd"
                    }, i = n.exec(t); i; ) {
                        try {
                            r[i[0]] = decodeURIComponent(i[0])
                        } catch (e) {
                            var s = o(i[0]);
                            s !== i[0] && (r[i[0]] = s)
                        }
                        i = n.exec(t)
                    }
                    r["%C2"] = "\ufffd";
                    for (var a = Object.keys(r), c = 0; c < a.length; c++) {
                        var u = a[c];
                        t = t.replace(new RegExp(u,"g"), r[u])
                    }
                    return t
                }(t)
            }
        }
    },
    79935: function(t, e, r) {
        "use strict";
        r.d(e, {
            qY: function() {
                return p
            }
        });
        var n = r(73656)
          , i = function(t, e, r) {
            if (r || 2 === arguments.length)
                for (var n, i = 0, o = e.length; i < o; i++)
                    !n && i in e || (n || (n = Array.prototype.slice.call(e, 0, i)),
                    n[i] = e[i]);
            return t.concat(n || Array.prototype.slice.call(e))
        }
          , o = function(t, e, r) {
            this.name = t,
            this.version = e,
            this.os = r,
            this.type = "browser"
        }
          , s = function(t) {
            this.version = t,
            this.type = "node",
            this.name = "node",
            this.os = n.platform
        }
          , a = function(t, e, r, n) {
            this.name = t,
            this.version = e,
            this.os = r,
            this.bot = n,
            this.type = "bot-device"
        }
          , c = function() {
            this.type = "bot",
            this.bot = !0,
            this.name = "bot",
            this.version = null,
            this.os = null
        }
          , u = function() {
            this.type = "react-native",
            this.name = "react-native",
            this.version = null,
            this.os = null
        }
          , f = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/
          , h = 3
          , l = [["aol", /AOLShield\/([0-9\._]+)/], ["edge", /Edge\/([0-9\._]+)/], ["edge-ios", /EdgiOS\/([0-9\._]+)/], ["yandexbrowser", /YaBrowser\/([0-9\._]+)/], ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/], ["samsung", /SamsungBrowser\/([0-9\.]+)/], ["silk", /\bSilk\/([0-9._-]+)\b/], ["miui", /MiuiBrowser\/([0-9\.]+)$/], ["beaker", /BeakerBrowser\/([0-9\.]+)/], ["edge-chromium", /EdgA?\/([0-9\.]+)/], ["chromium-webview", /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/], ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/], ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/], ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/], ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/], ["fxios", /FxiOS\/([0-9\.]+)/], ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/], ["opera", /Opera\/([0-9\.]+)(?:\s|$)/], ["opera", /OPR\/([0-9\.]+)(:?\s|$)/], ["pie", /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/], ["pie", /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/], ["netfront", /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/], ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/], ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/], ["ie", /MSIE\s(7\.0)/], ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/], ["android", /Android\s([0-9\.]+)/], ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/], ["safari", /Version\/([0-9\._]+).*Safari/], ["facebook", /FB[AS]V\/([0-9\.]+)/], ["instagram", /Instagram\s([0-9\.]+)/], ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/], ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/], ["curl", /^curl\/([0-9\.]+)$/], ["searchbot", /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/]]
          , d = [["iOS", /iP(hone|od|ad)/], ["Android OS", /Android/], ["BlackBerry OS", /BlackBerry|BB10/], ["Windows Mobile", /IEMobile/], ["Amazon OS", /Kindle/], ["Windows 3.11", /Win16/], ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/], ["Windows 98", /(Windows 98)|(Win98)/], ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/], ["Windows XP", /(Windows NT 5.1)|(Windows XP)/], ["Windows Server 2003", /(Windows NT 5.2)/], ["Windows Vista", /(Windows NT 6.0)/], ["Windows 7", /(Windows NT 6.1)/], ["Windows 8", /(Windows NT 6.2)/], ["Windows 8.1", /(Windows NT 6.3)/], ["Windows 10", /(Windows NT 10.0)/], ["Windows ME", /Windows ME/], ["Windows CE", /Windows CE|WinCE|Microsoft Pocket Internet Explorer/], ["Open BSD", /OpenBSD/], ["Sun OS", /SunOS/], ["Chrome OS", /CrOS/], ["Linux", /(Linux)|(X11)/], ["Mac OS", /(Mac_PowerPC)|(Macintosh)/], ["QNX", /QNX/], ["BeOS", /BeOS/], ["OS/2", /OS\/2/]];
        function p(t) {
            return t ? b(t) : "undefined" === typeof document && "undefined" !== typeof navigator && "ReactNative" === navigator.product ? new u : "undefined" !== typeof navigator ? b(navigator.userAgent) : "undefined" !== typeof n && n.version ? new s(n.version.slice(1)) : null
        }
        function y(t) {
            return "" !== t && l.reduce((function(e, r) {
                var n = r[0]
                  , i = r[1];
                if (e)
                    return e;
                var o = i.exec(t);
                return !!o && [n, o]
            }
            ), !1)
        }
        function b(t) {
            var e = y(t);
            if (!e)
                return null;
            var r = e[0]
              , n = e[1];
            if ("searchbot" === r)
                return new c;
            var s = n[1] && n[1].split(".").join("_").split("_").slice(0, 3);
            s ? s.length < h && (s = i(i([], s, !0), function(t) {
                for (var e = [], r = 0; r < t; r++)
                    e.push("0");
                return e
            }(h - s.length), !0)) : s = [];
            var u = s.join(".")
              , l = function(t) {
                for (var e = 0, r = d.length; e < r; e++) {
                    var n = d[e]
                      , i = n[0];
                    if (n[1].exec(t))
                        return i
                }
                return null
            }(t)
              , p = f.exec(t);
            return p && p[1] ? new a(r,u,l,p[1]) : new o(r,u,l)
        }
    },
    22475: function(t) {
        "use strict";
        t.exports = function(t, e) {
            for (var r = {}, n = Object.keys(t), i = Array.isArray(e), o = 0; o < n.length; o++) {
                var s = n[o]
                  , a = t[s];
                (i ? -1 !== e.indexOf(s) : e(s, a, t)) && (r[s] = a)
            }
            return r
        }
    },
    41846: function(t) {
        "use strict";
        const e = self.fetch.bind(self);
        t.exports = e,
        t.exports.default = t.exports
    },
    68496: function(t, e, r) {
        "use strict";
        const n = r(30309)
          , i = r(65140)
          , o = r(36897)
          , s = r(22475)
          , a = Symbol("encodeFragmentIdentifier");
        function c(t) {
            if ("string" !== typeof t || 1 !== t.length)
                throw new TypeError("arrayFormatSeparator must be single character string")
        }
        function u(t, e) {
            return e.encode ? e.strict ? n(t) : encodeURIComponent(t) : t
        }
        function f(t, e) {
            return e.decode ? i(t) : t
        }
        function h(t) {
            return Array.isArray(t) ? t.sort() : "object" === typeof t ? h(Object.keys(t)).sort(((t,e)=>Number(t) - Number(e))).map((e=>t[e])) : t
        }
        function l(t) {
            const e = t.indexOf("#");
            return -1 !== e && (t = t.slice(0, e)),
            t
        }
        function d(t) {
            const e = (t = l(t)).indexOf("?");
            return -1 === e ? "" : t.slice(e + 1)
        }
        function p(t, e) {
            return e.parseNumbers && !Number.isNaN(Number(t)) && "string" === typeof t && "" !== t.trim() ? t = Number(t) : !e.parseBooleans || null === t || "true" !== t.toLowerCase() && "false" !== t.toLowerCase() || (t = "true" === t.toLowerCase()),
            t
        }
        function y(t, e) {
            c((e = Object.assign({
                decode: !0,
                sort: !0,
                arrayFormat: "none",
                arrayFormatSeparator: ",",
                parseNumbers: !1,
                parseBooleans: !1
            }, e)).arrayFormatSeparator);
            const r = function(t) {
                let e;
                switch (t.arrayFormat) {
                case "index":
                    return (t,r,n)=>{
                        e = /\[(\d*)\]$/.exec(t),
                        t = t.replace(/\[\d*\]$/, ""),
                        e ? (void 0 === n[t] && (n[t] = {}),
                        n[t][e[1]] = r) : n[t] = r
                    }
                    ;
                case "bracket":
                    return (t,r,n)=>{
                        e = /(\[\])$/.exec(t),
                        t = t.replace(/\[\]$/, ""),
                        e ? void 0 !== n[t] ? n[t] = [].concat(n[t], r) : n[t] = [r] : n[t] = r
                    }
                    ;
                case "colon-list-separator":
                    return (t,r,n)=>{
                        e = /(:list)$/.exec(t),
                        t = t.replace(/:list$/, ""),
                        e ? void 0 !== n[t] ? n[t] = [].concat(n[t], r) : n[t] = [r] : n[t] = r
                    }
                    ;
                case "comma":
                case "separator":
                    return (e,r,n)=>{
                        const i = "string" === typeof r && r.includes(t.arrayFormatSeparator)
                          , o = "string" === typeof r && !i && f(r, t).includes(t.arrayFormatSeparator);
                        r = o ? f(r, t) : r;
                        const s = i || o ? r.split(t.arrayFormatSeparator).map((e=>f(e, t))) : null === r ? r : f(r, t);
                        n[e] = s
                    }
                    ;
                case "bracket-separator":
                    return (e,r,n)=>{
                        const i = /(\[\])$/.test(e);
                        if (e = e.replace(/\[\]$/, ""),
                        !i)
                            return void (n[e] = r ? f(r, t) : r);
                        const o = null === r ? [] : r.split(t.arrayFormatSeparator).map((e=>f(e, t)));
                        void 0 !== n[e] ? n[e] = [].concat(n[e], o) : n[e] = o
                    }
                    ;
                default:
                    return (t,e,r)=>{
                        void 0 !== r[t] ? r[t] = [].concat(r[t], e) : r[t] = e
                    }
                }
            }(e)
              , n = Object.create(null);
            if ("string" !== typeof t)
                return n;
            if (!(t = t.trim().replace(/^[?#&]/, "")))
                return n;
            for (const i of t.split("&")) {
                if ("" === i)
                    continue;
                let[t,s] = o(e.decode ? i.replace(/\+/g, " ") : i, "=");
                s = void 0 === s ? null : ["comma", "separator", "bracket-separator"].includes(e.arrayFormat) ? s : f(s, e),
                r(f(t, e), s, n)
            }
            for (const i of Object.keys(n)) {
                const t = n[i];
                if ("object" === typeof t && null !== t)
                    for (const r of Object.keys(t))
                        t[r] = p(t[r], e);
                else
                    n[i] = p(t, e)
            }
            return !1 === e.sort ? n : (!0 === e.sort ? Object.keys(n).sort() : Object.keys(n).sort(e.sort)).reduce(((t,e)=>{
                const r = n[e];
                return Boolean(r) && "object" === typeof r && !Array.isArray(r) ? t[e] = h(r) : t[e] = r,
                t
            }
            ), Object.create(null))
        }
        e.extract = d,
        e.parse = y,
        e.stringify = (t,e)=>{
            if (!t)
                return "";
            c((e = Object.assign({
                encode: !0,
                strict: !0,
                arrayFormat: "none",
                arrayFormatSeparator: ","
            }, e)).arrayFormatSeparator);
            const r = r=>{
                return e.skipNull && (null === (n = t[r]) || void 0 === n) || e.skipEmptyString && "" === t[r];
                var n
            }
              , n = function(t) {
                switch (t.arrayFormat) {
                case "index":
                    return e=>(r,n)=>{
                        const i = r.length;
                        return void 0 === n || t.skipNull && null === n || t.skipEmptyString && "" === n ? r : null === n ? [...r, [u(e, t), "[", i, "]"].join("")] : [...r, [u(e, t), "[", u(i, t), "]=", u(n, t)].join("")]
                    }
                    ;
                case "bracket":
                    return e=>(r,n)=>void 0 === n || t.skipNull && null === n || t.skipEmptyString && "" === n ? r : null === n ? [...r, [u(e, t), "[]"].join("")] : [...r, [u(e, t), "[]=", u(n, t)].join("")];
                case "colon-list-separator":
                    return e=>(r,n)=>void 0 === n || t.skipNull && null === n || t.skipEmptyString && "" === n ? r : null === n ? [...r, [u(e, t), ":list="].join("")] : [...r, [u(e, t), ":list=", u(n, t)].join("")];
                case "comma":
                case "separator":
                case "bracket-separator":
                    {
                        const e = "bracket-separator" === t.arrayFormat ? "[]=" : "=";
                        return r=>(n,i)=>void 0 === i || t.skipNull && null === i || t.skipEmptyString && "" === i ? n : (i = null === i ? "" : i,
                        0 === n.length ? [[u(r, t), e, u(i, t)].join("")] : [[n, u(i, t)].join(t.arrayFormatSeparator)])
                    }
                default:
                    return e=>(r,n)=>void 0 === n || t.skipNull && null === n || t.skipEmptyString && "" === n ? r : null === n ? [...r, u(e, t)] : [...r, [u(e, t), "=", u(n, t)].join("")]
                }
            }(e)
              , i = {};
            for (const s of Object.keys(t))
                r(s) || (i[s] = t[s]);
            const o = Object.keys(i);
            return !1 !== e.sort && o.sort(e.sort),
            o.map((r=>{
                const i = t[r];
                return void 0 === i ? "" : null === i ? u(r, e) : Array.isArray(i) ? 0 === i.length && "bracket-separator" === e.arrayFormat ? u(r, e) + "[]" : i.reduce(n(r), []).join("&") : u(r, e) + "=" + u(i, e)
            }
            )).filter((t=>t.length > 0)).join("&")
        }
        ,
        e.parseUrl = (t,e)=>{
            e = Object.assign({
                decode: !0
            }, e);
            const [r,n] = o(t, "#");
            return Object.assign({
                url: r.split("?")[0] || "",
                query: y(d(t), e)
            }, e && e.parseFragmentIdentifier && n ? {
                fragmentIdentifier: f(n, e)
            } : {})
        }
        ,
        e.stringifyUrl = (t,r)=>{
            r = Object.assign({
                encode: !0,
                strict: !0,
                [a]: !0
            }, r);
            const n = l(t.url).split("?")[0] || ""
              , i = e.extract(t.url)
              , o = e.parse(i, {
                sort: !1
            })
              , s = Object.assign(o, t.query);
            let c = e.stringify(s, r);
            c && (c = `?${c}`);
            let f = function(t) {
                let e = "";
                const r = t.indexOf("#");
                return -1 !== r && (e = t.slice(r)),
                e
            }(t.url);
            return t.fragmentIdentifier && (f = `#${r[a] ? u(t.fragmentIdentifier, r) : t.fragmentIdentifier}`),
            `${n}${c}${f}`
        }
        ,
        e.pick = (t,r,n)=>{
            n = Object.assign({
                parseFragmentIdentifier: !0,
                [a]: !1
            }, n);
            const {url: i, query: o, fragmentIdentifier: c} = e.parseUrl(t, n);
            return e.stringifyUrl({
                url: i,
                query: s(o, r),
                fragmentIdentifier: c
            }, n)
        }
        ,
        e.exclude = (t,r,n)=>{
            const i = Array.isArray(r) ? t=>!r.includes(t) : (t,e)=>!r(t, e);
            return e.pick(t, i, n)
        }
    },
    89705: function(t) {
        "use strict";
        function e(t) {
            try {
                return JSON.stringify(t)
            } catch (e) {
                return '"[Circular]"'
            }
        }
        t.exports = function(t, r, n) {
            var i = n && n.stringify || e;
            if ("object" === typeof t && null !== t) {
                var o = r.length + 1;
                if (1 === o)
                    return t;
                var s = new Array(o);
                s[0] = i(t);
                for (var a = 1; a < o; a++)
                    s[a] = i(r[a]);
                return s.join(" ")
            }
            if ("string" !== typeof t)
                return t;
            var c = r.length;
            if (0 === c)
                return t;
            for (var u = "", f = 0, h = -1, l = t && t.length || 0, d = 0; d < l; ) {
                if (37 === t.charCodeAt(d) && d + 1 < l) {
                    switch (h = h > -1 ? h : 0,
                    t.charCodeAt(d + 1)) {
                    case 100:
                    case 102:
                        if (f >= c)
                            break;
                        if (null == r[f])
                            break;
                        h < d && (u += t.slice(h, d)),
                        u += Number(r[f]),
                        h = d + 2,
                        d++;
                        break;
                    case 105:
                        if (f >= c)
                            break;
                        if (null == r[f])
                            break;
                        h < d && (u += t.slice(h, d)),
                        u += Math.floor(Number(r[f])),
                        h = d + 2,
                        d++;
                        break;
                    case 79:
                    case 111:
                    case 106:
                        if (f >= c)
                            break;
                        if (void 0 === r[f])
                            break;
                        h < d && (u += t.slice(h, d));
                        var p = typeof r[f];
                        if ("string" === p) {
                            u += "'" + r[f] + "'",
                            h = d + 2,
                            d++;
                            break
                        }
                        if ("function" === p) {
                            u += r[f].name || "<anonymous>",
                            h = d + 2,
                            d++;
                            break
                        }
                        u += i(r[f]),
                        h = d + 2,
                        d++;
                        break;
                    case 115:
                        if (f >= c)
                            break;
                        h < d && (u += t.slice(h, d)),
                        u += String(r[f]),
                        h = d + 2,
                        d++;
                        break;
                    case 37:
                        h < d && (u += t.slice(h, d)),
                        u += "%",
                        h = d + 2,
                        d++,
                        f--
                    }
                    ++f
                }
                ++d
            }
            if (-1 === h)
                return t;
            h < l && (u += t.slice(h));
            return u
        }
    },
    36897: function(t) {
        "use strict";
        t.exports = (t,e)=>{
            if ("string" !== typeof t || "string" !== typeof e)
                throw new TypeError("Expected the arguments to be of type `string`");
            if ("" === e)
                return [t];
            const r = t.indexOf(e);
            return -1 === r ? [t] : [t.slice(0, r), t.slice(r + e.length)]
        }
    },
    30309: function(t) {
        "use strict";
        t.exports = t=>encodeURIComponent(t).replace(/[!'()*]/g, (t=>`%${t.charCodeAt(0).toString(16).toUpperCase()}`))
    },
    33569: function(t, e, r) {
        "use strict";
        r.r(e),
        r.d(e, {
            __assign: function() {
                return o
            },
            __asyncDelegator: function() {
                return w
            },
            __asyncGenerator: function() {
                return v
            },
            __asyncValues: function() {
                return m
            },
            __await: function() {
                return g
            },
            __awaiter: function() {
                return f
            },
            __classPrivateFieldGet: function() {
                return I
            },
            __classPrivateFieldSet: function() {
                return R
            },
            __createBinding: function() {
                return l
            },
            __decorate: function() {
                return a
            },
            __exportStar: function() {
                return d
            },
            __extends: function() {
                return i
            },
            __generator: function() {
                return h
            },
            __importDefault: function() {
                return O
            },
            __importStar: function() {
                return S
            },
            __makeTemplateObject: function() {
                return E
            },
            __metadata: function() {
                return u
            },
            __param: function() {
                return c
            },
            __read: function() {
                return y
            },
            __rest: function() {
                return s
            },
            __spread: function() {
                return b
            },
            __spreadArrays: function() {
                return _
            },
            __values: function() {
                return p
            }
        });
        var n = function(t, e) {
            return n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var r in e)
                    e.hasOwnProperty(r) && (t[r] = e[r])
            }
            ,
            n(t, e)
        };
        function i(t, e) {
            function r() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype,
            new r)
        }
        var o = function() {
            return o = Object.assign || function(t) {
                for (var e, r = 1, n = arguments.length; r < n; r++)
                    for (var i in e = arguments[r])
                        Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t
            }
            ,
            o.apply(this, arguments)
        };
        function s(t, e) {
            var r = {};
            for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
            if (null != t && "function" === typeof Object.getOwnPropertySymbols) {
                var i = 0;
                for (n = Object.getOwnPropertySymbols(t); i < n.length; i++)
                    e.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[i]) && (r[n[i]] = t[n[i]])
            }
            return r
        }
        function a(t, e, r, n) {
            var i, o = arguments.length, s = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, r) : n;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate)
                s = Reflect.decorate(t, e, r, n);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (i = t[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(e, r, s) : i(e, r)) || s);
            return o > 3 && s && Object.defineProperty(e, r, s),
            s
        }
        function c(t, e) {
            return function(r, n) {
                e(r, n, t)
            }
        }
        function u(t, e) {
            if ("object" === typeof Reflect && "function" === typeof Reflect.metadata)
                return Reflect.metadata(t, e)
        }
        function f(t, e, r, n) {
            return new (r || (r = Promise))((function(i, o) {
                function s(t) {
                    try {
                        c(n.next(t))
                    } catch (e) {
                        o(e)
                    }
                }
                function a(t) {
                    try {
                        c(n.throw(t))
                    } catch (e) {
                        o(e)
                    }
                }
                function c(t) {
                    var e;
                    t.done ? i(t.value) : (e = t.value,
                    e instanceof r ? e : new r((function(t) {
                        t(e)
                    }
                    ))).then(s, a)
                }
                c((n = n.apply(t, e || [])).next())
            }
            ))
        }
        function h(t, e) {
            var r, n, i, o, s = {
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
                next: a(0),
                throw: a(1),
                return: a(2)
            },
            "function" === typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function a(o) {
                return function(a) {
                    return function(o) {
                        if (r)
                            throw new TypeError("Generator is already executing.");
                        for (; s; )
                            try {
                                if (r = 1,
                                n && (i = 2 & o[0] ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n),
                                0) : n.next) && !(i = i.call(n, o[1])).done)
                                    return i;
                                switch (n = 0,
                                i && (o = [2 & o[0], i.value]),
                                o[0]) {
                                case 0:
                                case 1:
                                    i = o;
                                    break;
                                case 4:
                                    return s.label++,
                                    {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++,
                                    n = o[1],
                                    o = [0];
                                    continue;
                                case 7:
                                    o = s.ops.pop(),
                                    s.trys.pop();
                                    continue;
                                default:
                                    if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                        s.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && s.label < i[1]) {
                                        s.label = i[1],
                                        i = o;
                                        break
                                    }
                                    if (i && s.label < i[2]) {
                                        s.label = i[2],
                                        s.ops.push(o);
                                        break
                                    }
                                    i[2] && s.ops.pop(),
                                    s.trys.pop();
                                    continue
                                }
                                o = e.call(t, s)
                            } catch (a) {
                                o = [6, a],
                                n = 0
                            } finally {
                                r = i = 0
                            }
                        if (5 & o[0])
                            throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, a])
                }
            }
        }
        function l(t, e, r, n) {
            void 0 === n && (n = r),
            t[n] = e[r]
        }
        function d(t, e) {
            for (var r in t)
                "default" === r || e.hasOwnProperty(r) || (e[r] = t[r])
        }
        function p(t) {
            var e = "function" === typeof Symbol && Symbol.iterator
              , r = e && t[e]
              , n = 0;
            if (r)
                return r.call(t);
            if (t && "number" === typeof t.length)
                return {
                    next: function() {
                        return t && n >= t.length && (t = void 0),
                        {
                            value: t && t[n++],
                            done: !t
                        }
                    }
                };
            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }
        function y(t, e) {
            var r = "function" === typeof Symbol && t[Symbol.iterator];
            if (!r)
                return t;
            var n, i, o = r.call(t), s = [];
            try {
                for (; (void 0 === e || e-- > 0) && !(n = o.next()).done; )
                    s.push(n.value)
            } catch (a) {
                i = {
                    error: a
                }
            } finally {
                try {
                    n && !n.done && (r = o.return) && r.call(o)
                } finally {
                    if (i)
                        throw i.error
                }
            }
            return s
        }
        function b() {
            for (var t = [], e = 0; e < arguments.length; e++)
                t = t.concat(y(arguments[e]));
            return t
        }
        function _() {
            for (var t = 0, e = 0, r = arguments.length; e < r; e++)
                t += arguments[e].length;
            var n = Array(t)
              , i = 0;
            for (e = 0; e < r; e++)
                for (var o = arguments[e], s = 0, a = o.length; s < a; s++,
                i++)
                    n[i] = o[s];
            return n
        }
        function g(t) {
            return this instanceof g ? (this.v = t,
            this) : new g(t)
        }
        function v(t, e, r) {
            if (!Symbol.asyncIterator)
                throw new TypeError("Symbol.asyncIterator is not defined.");
            var n, i = r.apply(t, e || []), o = [];
            return n = {},
            s("next"),
            s("throw"),
            s("return"),
            n[Symbol.asyncIterator] = function() {
                return this
            }
            ,
            n;
            function s(t) {
                i[t] && (n[t] = function(e) {
                    return new Promise((function(r, n) {
                        o.push([t, e, r, n]) > 1 || a(t, e)
                    }
                    ))
                }
                )
            }
            function a(t, e) {
                try {
                    (r = i[t](e)).value instanceof g ? Promise.resolve(r.value.v).then(c, u) : f(o[0][2], r)
                } catch (n) {
                    f(o[0][3], n)
                }
                var r
            }
            function c(t) {
                a("next", t)
            }
            function u(t) {
                a("throw", t)
            }
            function f(t, e) {
                t(e),
                o.shift(),
                o.length && a(o[0][0], o[0][1])
            }
        }
        function w(t) {
            var e, r;
            return e = {},
            n("next"),
            n("throw", (function(t) {
                throw t
            }
            )),
            n("return"),
            e[Symbol.iterator] = function() {
                return this
            }
            ,
            e;
            function n(n, i) {
                e[n] = t[n] ? function(e) {
                    return (r = !r) ? {
                        value: g(t[n](e)),
                        done: "return" === n
                    } : i ? i(e) : e
                }
                : i
            }
        }
        function m(t) {
            if (!Symbol.asyncIterator)
                throw new TypeError("Symbol.asyncIterator is not defined.");
            var e, r = t[Symbol.asyncIterator];
            return r ? r.call(t) : (t = p(t),
            e = {},
            n("next"),
            n("throw"),
            n("return"),
            e[Symbol.asyncIterator] = function() {
                return this
            }
            ,
            e);
            function n(r) {
                e[r] = t[r] && function(e) {
                    return new Promise((function(n, i) {
                        (function(t, e, r, n) {
                            Promise.resolve(n).then((function(e) {
                                t({
                                    value: e,
                                    done: r
                                })
                            }
                            ), e)
                        }
                        )(n, i, (e = t[r](e)).done, e.value)
                    }
                    ))
                }
            }
        }
        function E(t, e) {
            return Object.defineProperty ? Object.defineProperty(t, "raw", {
                value: e
            }) : t.raw = e,
            t
        }
        function S(t) {
            if (t && t.__esModule)
                return t;
            var e = {};
            if (null != t)
                for (var r in t)
                    Object.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e.default = t,
            e
        }
        function O(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        function I(t, e) {
            if (!e.has(t))
                throw new TypeError("attempted to get private field on non-instance");
            return e.get(t)
        }
        function R(t, e, r) {
            if (!e.has(t))
                throw new TypeError("attempted to set private field on non-instance");
            return e.set(t, r),
            r
        }
    },
    15335: function(t) {
        "use strict";
        t.exports = function() {
            throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
        }
    },
    9049: function(t, e, r) {
        "use strict";
        const n = r(89705);
        t.exports = s;
        const i = function() {
            function t(t) {
                return "undefined" !== typeof t && t
            }
            try {
                return "undefined" !== typeof globalThis || Object.defineProperty(Object.prototype, "globalThis", {
                    get: function() {
                        return delete Object.prototype.globalThis,
                        this.globalThis = this
                    },
                    configurable: !0
                }),
                globalThis
            } catch (e) {
                return t(self) || t(window) || t(this) || {}
            }
        }().console || {}
          , o = {
            mapHttpRequest: l,
            mapHttpResponse: l,
            wrapRequestSerializer: d,
            wrapResponseSerializer: d,
            wrapErrorSerializer: d,
            req: l,
            res: l,
            err: function(t) {
                const e = {
                    type: t.constructor.name,
                    msg: t.message,
                    stack: t.stack
                };
                for (const r in t)
                    void 0 === e[r] && (e[r] = t[r]);
                return e
            }
        };
        function s(t) {
            (t = t || {}).browser = t.browser || {};
            const e = t.browser.transmit;
            if (e && "function" !== typeof e.send)
                throw Error("pino: transmit option must have a send function");
            const r = t.browser.write || i;
            t.browser.write && (t.browser.asObject = !0);
            const n = t.serializers || {}
              , o = function(t, e) {
                if (Array.isArray(t))
                    return t.filter((function(t) {
                        return "!stdSerializers.err" !== t
                    }
                    ));
                return !0 === t && Object.keys(e)
            }(t.browser.serialize, n);
            let l = t.browser.serialize;
            Array.isArray(t.browser.serialize) && t.browser.serialize.indexOf("!stdSerializers.err") > -1 && (l = !1);
            "function" === typeof r && (r.error = r.fatal = r.warn = r.info = r.debug = r.trace = r),
            !1 === t.enabled && (t.level = "silent");
            const d = t.level || "info"
              , y = Object.create(r);
            y.log || (y.log = p),
            Object.defineProperty(y, "levelVal", {
                get: function() {
                    return "silent" === this.level ? 1 / 0 : this.levels.values[this.level]
                }
            }),
            Object.defineProperty(y, "level", {
                get: function() {
                    return this._level
                },
                set: function(t) {
                    if ("silent" !== t && !this.levels.values[t])
                        throw Error("unknown level " + t);
                    this._level = t,
                    a(b, y, "error", "log"),
                    a(b, y, "fatal", "error"),
                    a(b, y, "warn", "error"),
                    a(b, y, "info", "log"),
                    a(b, y, "debug", "log"),
                    a(b, y, "trace", "log")
                }
            });
            const b = {
                transmit: e,
                serialize: o,
                asObject: t.browser.asObject,
                levels: ["error", "fatal", "warn", "info", "debug", "trace"],
                timestamp: h(t)
            };
            return y.levels = s.levels,
            y.level = d,
            y.setMaxListeners = y.getMaxListeners = y.emit = y.addListener = y.on = y.prependListener = y.once = y.prependOnceListener = y.removeListener = y.removeAllListeners = y.listeners = y.listenerCount = y.eventNames = y.write = y.flush = p,
            y.serializers = n,
            y._serialize = o,
            y._stdErrSerialize = l,
            y.child = function(r, i) {
                if (!r)
                    throw new Error("missing bindings for child Pino");
                i = i || {},
                o && r.serializers && (i.serializers = r.serializers);
                const s = i.serializers;
                if (o && s) {
                    var a = Object.assign({}, n, s)
                      , h = !0 === t.browser.serialize ? Object.keys(a) : o;
                    delete r.serializers,
                    c([r], h, a, this._stdErrSerialize)
                }
                function l(t) {
                    this._childLevel = 1 + (0 | t._childLevel),
                    this.error = u(t, r, "error"),
                    this.fatal = u(t, r, "fatal"),
                    this.warn = u(t, r, "warn"),
                    this.info = u(t, r, "info"),
                    this.debug = u(t, r, "debug"),
                    this.trace = u(t, r, "trace"),
                    a && (this.serializers = a,
                    this._serialize = h),
                    e && (this._logEvent = f([].concat(t._logEvent.bindings, r)))
                }
                return l.prototype = this,
                new l(this)
            }
            ,
            e && (y._logEvent = f()),
            y
        }
        function a(t, e, r, o) {
            const a = Object.getPrototypeOf(e);
            e[r] = e.levelVal > e.levels.values[r] ? p : a[r] ? a[r] : i[r] || i[o] || p,
            function(t, e, r) {
                if (!t.transmit && e[r] === p)
                    return;
                e[r] = (o = e[r],
                function() {
                    const a = t.timestamp()
                      , u = new Array(arguments.length)
                      , h = Object.getPrototypeOf && Object.getPrototypeOf(this) === i ? i : this;
                    for (var l = 0; l < u.length; l++)
                        u[l] = arguments[l];
                    if (t.serialize && !t.asObject && c(u, this._serialize, this.serializers, this._stdErrSerialize),
                    t.asObject ? o.call(h, function(t, e, r, i) {
                        t._serialize && c(r, t._serialize, t.serializers, t._stdErrSerialize);
                        const o = r.slice();
                        let a = o[0];
                        const u = {};
                        i && (u.time = i),
                        u.level = s.levels.values[e];
                        let f = 1 + (0 | t._childLevel);
                        if (f < 1 && (f = 1),
                        null !== a && "object" === typeof a) {
                            for (; f-- && "object" === typeof o[0]; )
                                Object.assign(u, o.shift());
                            a = o.length ? n(o.shift(), o) : void 0
                        } else
                            "string" === typeof a && (a = n(o.shift(), o));
                        return void 0 !== a && (u.msg = a),
                        u
                    }(this, r, u, a)) : o.apply(h, u),
                    t.transmit) {
                        const n = t.transmit.level || e.level
                          , i = s.levels.values[n]
                          , o = s.levels.values[r];
                        if (o < i)
                            return;
                        !function(t, e, r) {
                            const n = e.send
                              , i = e.ts
                              , o = e.methodLevel
                              , s = e.methodValue
                              , a = e.val
                              , u = t._logEvent.bindings;
                            c(r, t._serialize || Object.keys(t.serializers), t.serializers, void 0 === t._stdErrSerialize || t._stdErrSerialize),
                            t._logEvent.ts = i,
                            t._logEvent.messages = r.filter((function(t) {
                                return -1 === u.indexOf(t)
                            }
                            )),
                            t._logEvent.level.label = o,
                            t._logEvent.level.value = s,
                            n(o, t._logEvent, a),
                            t._logEvent = f(u)
                        }(this, {
                            ts: a,
                            methodLevel: r,
                            methodValue: o,
                            transmitLevel: n,
                            transmitValue: s.levels.values[t.transmit.level || e.level],
                            send: t.transmit.send,
                            val: e.levelVal
                        }, u)
                    }
                }
                );
                var o
            }(t, e, r)
        }
        function c(t, e, r, n) {
            for (const i in t)
                if (n && t[i]instanceof Error)
                    t[i] = s.stdSerializers.err(t[i]);
                else if ("object" === typeof t[i] && !Array.isArray(t[i]))
                    for (const n in t[i])
                        e && e.indexOf(n) > -1 && n in r && (t[i][n] = r[n](t[i][n]))
        }
        function u(t, e, r) {
            return function() {
                const n = new Array(1 + arguments.length);
                n[0] = e;
                for (var i = 1; i < n.length; i++)
                    n[i] = arguments[i - 1];
                return t[r].apply(this, n)
            }
        }
        function f(t) {
            return {
                ts: 0,
                messages: [],
                bindings: t || [],
                level: {
                    label: "",
                    value: 0
                }
            }
        }
        function h(t) {
            return "function" === typeof t.timestamp ? t.timestamp : !1 === t.timestamp ? y : b
        }
        function l() {
            return {}
        }
        function d(t) {
            return t
        }
        function p() {}
        function y() {
            return !1
        }
        function b() {
            return Date.now()
        }
        s.levels = {
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
        s.stdSerializers = o,
        s.stdTimeFunctions = Object.assign({}, {
            nullTime: y,
            epochTime: b,
            unixTime: function() {
                return Math.round(Date.now() / 1e3)
            },
            isoTime: function() {
                return new Date(Date.now()).toISOString()
            }
        })
    },
    97266: function(t, e, r) {
        "use strict";
        r.d(e, {
            kU: function() {
                return h
            },
            Dp: function() {
                return f
            },
            ET: function() {
                return l
            }
        });
        var n = function(t, e) {
            if (t.length >= 255)
                throw new TypeError("Alphabet too long");
            for (var r = new Uint8Array(256), n = 0; n < r.length; n++)
                r[n] = 255;
            for (var i = 0; i < t.length; i++) {
                var o = t.charAt(i)
                  , s = o.charCodeAt(0);
                if (255 !== r[s])
                    throw new TypeError(o + " is ambiguous");
                r[s] = i
            }
            var a = t.length
              , c = t.charAt(0)
              , u = Math.log(a) / Math.log(256)
              , f = Math.log(256) / Math.log(a);
            function h(t) {
                if ("string" !== typeof t)
                    throw new TypeError("Expected String");
                if (0 === t.length)
                    return new Uint8Array;
                var e = 0;
                if (" " !== t[e]) {
                    for (var n = 0, i = 0; t[e] === c; )
                        n++,
                        e++;
                    for (var o = (t.length - e) * u + 1 >>> 0, s = new Uint8Array(o); t[e]; ) {
                        var f = r[t.charCodeAt(e)];
                        if (255 === f)
                            return;
                        for (var h = 0, l = o - 1; (0 !== f || h < i) && -1 !== l; l--,
                        h++)
                            f += a * s[l] >>> 0,
                            s[l] = f % 256 >>> 0,
                            f = f / 256 >>> 0;
                        if (0 !== f)
                            throw new Error("Non-zero carry");
                        i = h,
                        e++
                    }
                    if (" " !== t[e]) {
                        for (var d = o - i; d !== o && 0 === s[d]; )
                            d++;
                        for (var p = new Uint8Array(n + (o - d)), y = n; d !== o; )
                            p[y++] = s[d++];
                        return p
                    }
                }
            }
            return {
                encode: function(e) {
                    if (e instanceof Uint8Array || (ArrayBuffer.isView(e) ? e = new Uint8Array(e.buffer,e.byteOffset,e.byteLength) : Array.isArray(e) && (e = Uint8Array.from(e))),
                    !(e instanceof Uint8Array))
                        throw new TypeError("Expected Uint8Array");
                    if (0 === e.length)
                        return "";
                    for (var r = 0, n = 0, i = 0, o = e.length; i !== o && 0 === e[i]; )
                        i++,
                        r++;
                    for (var s = (o - i) * f + 1 >>> 0, u = new Uint8Array(s); i !== o; ) {
                        for (var h = e[i], l = 0, d = s - 1; (0 !== h || l < n) && -1 !== d; d--,
                        l++)
                            h += 256 * u[d] >>> 0,
                            u[d] = h % a >>> 0,
                            h = h / a >>> 0;
                        if (0 !== h)
                            throw new Error("Non-zero carry");
                        n = l,
                        i++
                    }
                    for (var p = s - n; p !== s && 0 === u[p]; )
                        p++;
                    for (var y = c.repeat(r); p < s; ++p)
                        y += t.charAt(u[p]);
                    return y
                },
                decodeUnsafe: h,
                decode: function(t) {
                    var r = h(t);
                    if (r)
                        return r;
                    throw new Error(`Non-${e} character`)
                }
            }
        }
          , i = r(14537);
        class o {
            constructor(t, e, r) {
                this.name = t,
                this.prefix = e,
                this.baseEncode = r
            }
            encode(t) {
                if (t instanceof Uint8Array)
                    return `${this.prefix}${this.baseEncode(t)}`;
                throw Error("Unknown type, must be binary type")
            }
        }
        class s {
            constructor(t, e, r) {
                if (this.name = t,
                this.prefix = e,
                void 0 === e.codePointAt(0))
                    throw new Error("Invalid prefix character");
                this.prefixCodePoint = e.codePointAt(0),
                this.baseDecode = r
            }
            decode(t) {
                if ("string" === typeof t) {
                    if (t.codePointAt(0) !== this.prefixCodePoint)
                        throw Error(`Unable to decode multibase string ${JSON.stringify(t)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
                    return this.baseDecode(t.slice(this.prefix.length))
                }
                throw Error("Can only multibase decode strings")
            }
            or(t) {
                return c(this, t)
            }
        }
        class a {
            constructor(t) {
                this.decoders = t
            }
            or(t) {
                return c(this, t)
            }
            decode(t) {
                const e = t[0]
                  , r = this.decoders[e];
                if (r)
                    return r.decode(t);
                throw RangeError(`Unable to decode multibase string ${JSON.stringify(t)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)
            }
        }
        const c = (t,e)=>new a({
            ...t.decoders || {
                [t.prefix]: t
            },
            ...e.decoders || {
                [e.prefix]: e
            }
        });
        class u {
            constructor(t, e, r, n) {
                this.name = t,
                this.prefix = e,
                this.baseEncode = r,
                this.baseDecode = n,
                this.encoder = new o(t,e,r),
                this.decoder = new s(t,e,n)
            }
            encode(t) {
                return this.encoder.encode(t)
            }
            decode(t) {
                return this.decoder.decode(t)
            }
        }
        const f = ({name: t, prefix: e, encode: r, decode: n})=>new u(t,e,r,n)
          , h = ({prefix: t, name: e, alphabet: r})=>{
            const {encode: o, decode: s} = n(r, e);
            return f({
                prefix: t,
                name: e,
                encode: o,
                decode: t=>(0,
                i.oQ)(s(t))
            })
        }
          , l = ({name: t, prefix: e, bitsPerChar: r, alphabet: n})=>f({
            prefix: e,
            name: t,
            encode: t=>((t,e,r)=>{
                const n = "=" === e[e.length - 1]
                  , i = (1 << r) - 1;
                let o = ""
                  , s = 0
                  , a = 0;
                for (let c = 0; c < t.length; ++c)
                    for (a = a << 8 | t[c],
                    s += 8; s > r; )
                        s -= r,
                        o += e[i & a >> s];
                if (s && (o += e[i & a << r - s]),
                n)
                    for (; o.length * r & 7; )
                        o += "=";
                return o
            }
            )(t, n, r),
            decode: e=>((t,e,r,n)=>{
                const i = {};
                for (let f = 0; f < e.length; ++f)
                    i[e[f]] = f;
                let o = t.length;
                for (; "=" === t[o - 1]; )
                    --o;
                const s = new Uint8Array(o * r / 8 | 0);
                let a = 0
                  , c = 0
                  , u = 0;
                for (let f = 0; f < o; ++f) {
                    const e = i[t[f]];
                    if (void 0 === e)
                        throw new SyntaxError(`Non-${n} character`);
                    c = c << r | e,
                    a += r,
                    a >= 8 && (a -= 8,
                    s[u++] = 255 & c >> a)
                }
                if (a >= r || 255 & c << 8 - a)
                    throw new SyntaxError("Unexpected end of data");
                return s
            }
            )(e, n, r, t)
        })
    },
    49382: function(t, e, r) {
        "use strict";
        r.r(e),
        r.d(e, {
            base58btc: function() {
                return i
            },
            base58flickr: function() {
                return o
            }
        });
        var n = r(97266);
        const i = (0,
        n.kU)({
            name: "base58btc",
            prefix: "z",
            alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
        })
          , o = (0,
        n.kU)({
            name: "base58flickr",
            prefix: "Z",
            alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
        })
    },
    14537: function(t, e, r) {
        "use strict";
        r.d(e, {
            BB: function() {
                return s
            },
            fS: function() {
                return n
            },
            mL: function() {
                return o
            },
            oQ: function() {
                return i
            }
        });
        new Uint8Array(0);
        const n = (t,e)=>{
            if (t === e)
                return !0;
            if (t.byteLength !== e.byteLength)
                return !1;
            for (let r = 0; r < t.byteLength; r++)
                if (t[r] !== e[r])
                    return !1;
            return !0
        }
          , i = t=>{
            if (t instanceof Uint8Array && "Uint8Array" === t.constructor.name)
                return t;
            if (t instanceof ArrayBuffer)
                return new Uint8Array(t);
            if (ArrayBuffer.isView(t))
                return new Uint8Array(t.buffer,t.byteOffset,t.byteLength);
            throw new Error("Unknown type, must be binary type")
        }
          , o = t=>(new TextEncoder).encode(t)
          , s = t=>(new TextDecoder).decode(t)
    },
    79807: function(t, e, r) {
        "use strict";
        r.d(e, {
            E: function() {
                return i
            }
        });
        var n = r(39634);
        function i(t=0) {
            return null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe ? (0,
            n.P)(globalThis.Buffer.allocUnsafe(t)) : new Uint8Array(t)
        }
    },
    51685: function(t, e, r) {
        "use strict";
        r.d(e, {
            z: function() {
                return o
            }
        });
        var n = r(79807)
          , i = r(39634);
        function o(t, e) {
            e || (e = t.reduce(((t,e)=>t + e.length), 0));
            const r = (0,
            n.E)(e);
            let o = 0;
            for (const n of t)
                r.set(n, o),
                o += n.length;
            return (0,
            i.P)(r)
        }
    },
    38147: function(t, e, r) {
        "use strict";
        r.d(e, {
            m: function() {
                return o
            }
        });
        var n = r(59086)
          , i = r(39634);
        function o(t, e="utf8") {
            const r = n.Z[e];
            if (!r)
                throw new Error(`Unsupported encoding "${e}"`);
            return "utf8" !== e && "utf-8" !== e || null == globalThis.Buffer || null == globalThis.Buffer.from ? r.decoder.decode(`${r.prefix}${t}`) : (0,
            i.P)(globalThis.Buffer.from(t, "utf-8"))
        }
    },
    42772: function(t, e, r) {
        "use strict";
        r.d(e, {
            BB: function() {
                return o.B
            },
            mL: function() {
                return i.m
            },
            zo: function() {
                return n.z
            }
        });
        var n = r(51685)
          , i = r(38147)
          , o = r(17199)
    },
    17199: function(t, e, r) {
        "use strict";
        r.d(e, {
            B: function() {
                return i
            }
        });
        var n = r(59086);
        function i(t, e="utf8") {
            const r = n.Z[e];
            if (!r)
                throw new Error(`Unsupported encoding "${e}"`);
            return "utf8" !== e && "utf-8" !== e || null == globalThis.Buffer || null == globalThis.Buffer.from ? r.encoder.encode(t).substring(1) : globalThis.Buffer.from(t.buffer, t.byteOffset, t.byteLength).toString("utf8")
        }
    },
    39634: function(t, e, r) {
        "use strict";
        function n(t) {
            return null != globalThis.Buffer ? new Uint8Array(t.buffer,t.byteOffset,t.byteLength) : t
        }
        r.d(e, {
            P: function() {
                return n
            }
        })
    },
    59086: function(t, e, r) {
        "use strict";
        r.d(e, {
            Z: function() {
                return Nt
            }
        });
        var n = {};
        r.r(n),
        r.d(n, {
            identity: function() {
                return g
            }
        });
        var i = {};
        r.r(i),
        r.d(i, {
            base2: function() {
                return v
            }
        });
        var o = {};
        r.r(o),
        r.d(o, {
            base8: function() {
                return w
            }
        });
        var s = {};
        r.r(s),
        r.d(s, {
            base10: function() {
                return m
            }
        });
        var a = {};
        r.r(a),
        r.d(a, {
            base16: function() {
                return E
            },
            base16upper: function() {
                return S
            }
        });
        var c = {};
        r.r(c),
        r.d(c, {
            base32: function() {
                return O
            },
            base32hex: function() {
                return U
            },
            base32hexpad: function() {
                return x
            },
            base32hexpadupper: function() {
                return T
            },
            base32hexupper: function() {
                return L
            },
            base32pad: function() {
                return R
            },
            base32padupper: function() {
                return A
            },
            base32upper: function() {
                return I
            },
            base32z: function() {
                return k
            }
        });
        var u = {};
        r.r(u),
        r.d(u, {
            base36: function() {
                return N
            },
            base36upper: function() {
                return M
            }
        });
        var f = {};
        r.r(f),
        r.d(f, {
            base64: function() {
                return P
            },
            base64pad: function() {
                return C
            },
            base64url: function() {
                return H
            },
            base64urlpad: function() {
                return W
            }
        });
        var h = {};
        r.r(h),
        r.d(h, {
            base256emoji: function() {
                return J
            }
        });
        var l = {};
        r.r(l),
        r.d(l, {
            sha256: function() {
                return pt
            },
            sha512: function() {
                return yt
            }
        });
        var d = {};
        r.r(d),
        r.d(d, {
            identity: function() {
                return _t
            }
        });
        var p = {};
        r.r(p),
        r.d(p, {
            code: function() {
                return vt
            },
            decode: function() {
                return mt
            },
            encode: function() {
                return wt
            },
            name: function() {
                return gt
            }
        });
        var y = {};
        r.r(y),
        r.d(y, {
            code: function() {
                return It
            },
            decode: function() {
                return At
            },
            encode: function() {
                return Rt
            },
            name: function() {
                return Ot
            }
        });
        var b = r(97266)
          , _ = r(14537);
        const g = (0,
        b.Dp)({
            prefix: "\0",
            name: "identity",
            encode: t=>(0,
            _.BB)(t),
            decode: t=>(0,
            _.mL)(t)
        })
          , v = (0,
        b.ET)({
            prefix: "0",
            name: "base2",
            alphabet: "01",
            bitsPerChar: 1
        })
          , w = (0,
        b.ET)({
            prefix: "7",
            name: "base8",
            alphabet: "01234567",
            bitsPerChar: 3
        })
          , m = (0,
        b.kU)({
            prefix: "9",
            name: "base10",
            alphabet: "0123456789"
        })
          , E = (0,
        b.ET)({
            prefix: "f",
            name: "base16",
            alphabet: "0123456789abcdef",
            bitsPerChar: 4
        })
          , S = (0,
        b.ET)({
            prefix: "F",
            name: "base16upper",
            alphabet: "0123456789ABCDEF",
            bitsPerChar: 4
        })
          , O = (0,
        b.ET)({
            prefix: "b",
            name: "base32",
            alphabet: "abcdefghijklmnopqrstuvwxyz234567",
            bitsPerChar: 5
        })
          , I = (0,
        b.ET)({
            prefix: "B",
            name: "base32upper",
            alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
            bitsPerChar: 5
        })
          , R = (0,
        b.ET)({
            prefix: "c",
            name: "base32pad",
            alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
            bitsPerChar: 5
        })
          , A = (0,
        b.ET)({
            prefix: "C",
            name: "base32padupper",
            alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
            bitsPerChar: 5
        })
          , U = (0,
        b.ET)({
            prefix: "v",
            name: "base32hex",
            alphabet: "0123456789abcdefghijklmnopqrstuv",
            bitsPerChar: 5
        })
          , L = (0,
        b.ET)({
            prefix: "V",
            name: "base32hexupper",
            alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
            bitsPerChar: 5
        })
          , x = (0,
        b.ET)({
            prefix: "t",
            name: "base32hexpad",
            alphabet: "0123456789abcdefghijklmnopqrstuv=",
            bitsPerChar: 5
        })
          , T = (0,
        b.ET)({
            prefix: "T",
            name: "base32hexpadupper",
            alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
            bitsPerChar: 5
        })
          , k = (0,
        b.ET)({
            prefix: "h",
            name: "base32z",
            alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
            bitsPerChar: 5
        })
          , N = (0,
        b.kU)({
            prefix: "k",
            name: "base36",
            alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
        })
          , M = (0,
        b.kU)({
            prefix: "K",
            name: "base36upper",
            alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        });
        var j = r(49382);
        const P = (0,
        b.ET)({
            prefix: "m",
            name: "base64",
            alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            bitsPerChar: 6
        })
          , C = (0,
        b.ET)({
            prefix: "M",
            name: "base64pad",
            alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            bitsPerChar: 6
        })
          , H = (0,
        b.ET)({
            prefix: "u",
            name: "base64url",
            alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
            bitsPerChar: 6
        })
          , W = (0,
        b.ET)({
            prefix: "U",
            name: "base64urlpad",
            alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
            bitsPerChar: 6
        })
          , B = Array.from("\ud83d\ude80\ud83e\ude90\u2604\ud83d\udef0\ud83c\udf0c\ud83c\udf11\ud83c\udf12\ud83c\udf13\ud83c\udf14\ud83c\udf15\ud83c\udf16\ud83c\udf17\ud83c\udf18\ud83c\udf0d\ud83c\udf0f\ud83c\udf0e\ud83d\udc09\u2600\ud83d\udcbb\ud83d\udda5\ud83d\udcbe\ud83d\udcbf\ud83d\ude02\u2764\ud83d\ude0d\ud83e\udd23\ud83d\ude0a\ud83d\ude4f\ud83d\udc95\ud83d\ude2d\ud83d\ude18\ud83d\udc4d\ud83d\ude05\ud83d\udc4f\ud83d\ude01\ud83d\udd25\ud83e\udd70\ud83d\udc94\ud83d\udc96\ud83d\udc99\ud83d\ude22\ud83e\udd14\ud83d\ude06\ud83d\ude44\ud83d\udcaa\ud83d\ude09\u263a\ud83d\udc4c\ud83e\udd17\ud83d\udc9c\ud83d\ude14\ud83d\ude0e\ud83d\ude07\ud83c\udf39\ud83e\udd26\ud83c\udf89\ud83d\udc9e\u270c\u2728\ud83e\udd37\ud83d\ude31\ud83d\ude0c\ud83c\udf38\ud83d\ude4c\ud83d\ude0b\ud83d\udc97\ud83d\udc9a\ud83d\ude0f\ud83d\udc9b\ud83d\ude42\ud83d\udc93\ud83e\udd29\ud83d\ude04\ud83d\ude00\ud83d\udda4\ud83d\ude03\ud83d\udcaf\ud83d\ude48\ud83d\udc47\ud83c\udfb6\ud83d\ude12\ud83e\udd2d\u2763\ud83d\ude1c\ud83d\udc8b\ud83d\udc40\ud83d\ude2a\ud83d\ude11\ud83d\udca5\ud83d\ude4b\ud83d\ude1e\ud83d\ude29\ud83d\ude21\ud83e\udd2a\ud83d\udc4a\ud83e\udd73\ud83d\ude25\ud83e\udd24\ud83d\udc49\ud83d\udc83\ud83d\ude33\u270b\ud83d\ude1a\ud83d\ude1d\ud83d\ude34\ud83c\udf1f\ud83d\ude2c\ud83d\ude43\ud83c\udf40\ud83c\udf37\ud83d\ude3b\ud83d\ude13\u2b50\u2705\ud83e\udd7a\ud83c\udf08\ud83d\ude08\ud83e\udd18\ud83d\udca6\u2714\ud83d\ude23\ud83c\udfc3\ud83d\udc90\u2639\ud83c\udf8a\ud83d\udc98\ud83d\ude20\u261d\ud83d\ude15\ud83c\udf3a\ud83c\udf82\ud83c\udf3b\ud83d\ude10\ud83d\udd95\ud83d\udc9d\ud83d\ude4a\ud83d\ude39\ud83d\udde3\ud83d\udcab\ud83d\udc80\ud83d\udc51\ud83c\udfb5\ud83e\udd1e\ud83d\ude1b\ud83d\udd34\ud83d\ude24\ud83c\udf3c\ud83d\ude2b\u26bd\ud83e\udd19\u2615\ud83c\udfc6\ud83e\udd2b\ud83d\udc48\ud83d\ude2e\ud83d\ude46\ud83c\udf7b\ud83c\udf43\ud83d\udc36\ud83d\udc81\ud83d\ude32\ud83c\udf3f\ud83e\udde1\ud83c\udf81\u26a1\ud83c\udf1e\ud83c\udf88\u274c\u270a\ud83d\udc4b\ud83d\ude30\ud83e\udd28\ud83d\ude36\ud83e\udd1d\ud83d\udeb6\ud83d\udcb0\ud83c\udf53\ud83d\udca2\ud83e\udd1f\ud83d\ude41\ud83d\udea8\ud83d\udca8\ud83e\udd2c\u2708\ud83c\udf80\ud83c\udf7a\ud83e\udd13\ud83d\ude19\ud83d\udc9f\ud83c\udf31\ud83d\ude16\ud83d\udc76\ud83e\udd74\u25b6\u27a1\u2753\ud83d\udc8e\ud83d\udcb8\u2b07\ud83d\ude28\ud83c\udf1a\ud83e\udd8b\ud83d\ude37\ud83d\udd7a\u26a0\ud83d\ude45\ud83d\ude1f\ud83d\ude35\ud83d\udc4e\ud83e\udd32\ud83e\udd20\ud83e\udd27\ud83d\udccc\ud83d\udd35\ud83d\udc85\ud83e\uddd0\ud83d\udc3e\ud83c\udf52\ud83d\ude17\ud83e\udd11\ud83c\udf0a\ud83e\udd2f\ud83d\udc37\u260e\ud83d\udca7\ud83d\ude2f\ud83d\udc86\ud83d\udc46\ud83c\udfa4\ud83d\ude47\ud83c\udf51\u2744\ud83c\udf34\ud83d\udca3\ud83d\udc38\ud83d\udc8c\ud83d\udccd\ud83e\udd40\ud83e\udd22\ud83d\udc45\ud83d\udca1\ud83d\udca9\ud83d\udc50\ud83d\udcf8\ud83d\udc7b\ud83e\udd10\ud83e\udd2e\ud83c\udfbc\ud83e\udd75\ud83d\udea9\ud83c\udf4e\ud83c\udf4a\ud83d\udc7c\ud83d\udc8d\ud83d\udce3\ud83e\udd42")
          , D = B.reduce(((t,e,r)=>(t[r] = e,
        t)), [])
          , z = B.reduce(((t,e,r)=>(t[e.codePointAt(0)] = r,
        t)), []);
        const J = (0,
        b.Dp)({
            prefix: "\ud83d\ude80",
            name: "base256emoji",
            encode: function(t) {
                return t.reduce(((t,e)=>t += D[e]), "")
            },
            decode: function(t) {
                const e = [];
                for (const r of t) {
                    const t = z[r.codePointAt(0)];
                    if (void 0 === t)
                        throw new Error(`Non-base256emoji character: ${r}`);
                    e.push(t)
                }
                return new Uint8Array(e)
            }
        });
        var K = function t(e, r, n) {
            r = r || [];
            var i = n = n || 0;
            for (; e >= V; )
                r[n++] = 255 & e | F,
                e /= 128;
            for (; e & $; )
                r[n++] = 255 & e | F,
                e >>>= 7;
            return r[n] = 0 | e,
            t.bytes = n - i + 1,
            r
        }
          , F = 128
          , $ = -128
          , V = Math.pow(2, 31);
        var q = function t(e, r) {
            var n, i = 0, o = 0, s = r = r || 0, a = e.length;
            do {
                if (s >= a)
                    throw t.bytes = 0,
                    new RangeError("Could not decode varint");
                n = e[s++],
                i += o < 28 ? (n & X) << o : (n & X) * Math.pow(2, o),
                o += 7
            } while (n >= Y);
            return t.bytes = s - r,
            i
        }
          , Y = 128
          , X = 127;
        var G = Math.pow(2, 7)
          , Q = Math.pow(2, 14)
          , Z = Math.pow(2, 21)
          , tt = Math.pow(2, 28)
          , et = Math.pow(2, 35)
          , rt = Math.pow(2, 42)
          , nt = Math.pow(2, 49)
          , it = Math.pow(2, 56)
          , ot = Math.pow(2, 63)
          , st = {
            encode: K,
            decode: q,
            encodingLength: function(t) {
                return t < G ? 1 : t < Q ? 2 : t < Z ? 3 : t < tt ? 4 : t < et ? 5 : t < rt ? 6 : t < nt ? 7 : t < it ? 8 : t < ot ? 9 : 10
            }
        };
        const at = (t,e,r=0)=>(st.encode(t, e, r),
        e)
          , ct = t=>st.encodingLength(t)
          , ut = (t,e)=>{
            const r = e.byteLength
              , n = ct(t)
              , i = n + ct(r)
              , o = new Uint8Array(i + r);
            return at(t, o, 0),
            at(r, o, n),
            o.set(e, i),
            new ft(t,r,e,o)
        }
        ;
        class ft {
            constructor(t, e, r, n) {
                this.code = t,
                this.size = e,
                this.digest = r,
                this.bytes = n
            }
        }
        const ht = ({name: t, code: e, encode: r})=>new lt(t,e,r);
        class lt {
            constructor(t, e, r) {
                this.name = t,
                this.code = e,
                this.encode = r
            }
            digest(t) {
                if (t instanceof Uint8Array) {
                    const e = this.encode(t);
                    return e instanceof Uint8Array ? ut(this.code, e) : e.then((t=>ut(this.code, t)))
                }
                throw Error("Unknown type, must be binary type")
            }
        }
        const dt = t=>async e=>new Uint8Array(await crypto.subtle.digest(t, e))
          , pt = ht({
            name: "sha2-256",
            code: 18,
            encode: dt("SHA-256")
        })
          , yt = ht({
            name: "sha2-512",
            code: 19,
            encode: dt("SHA-512")
        })
          , bt = _.oQ
          , _t = {
            code: 0,
            name: "identity",
            encode: bt,
            digest: t=>ut(0, bt(t))
        }
          , gt = "raw"
          , vt = 85
          , wt = t=>(0,
        _.oQ)(t)
          , mt = t=>(0,
        _.oQ)(t)
          , Et = new TextEncoder
          , St = new TextDecoder
          , Ot = "json"
          , It = 512
          , Rt = t=>Et.encode(JSON.stringify(t))
          , At = t=>JSON.parse(St.decode(t));
        Symbol.toStringTag,
        Symbol.for("nodejs.util.inspect.custom");
        Symbol.for("@ipld/js-cid/CID");
        const Ut = {
            ...n,
            ...i,
            ...o,
            ...s,
            ...a,
            ...c,
            ...u,
            ...j,
            ...f,
            ...h
        };
        var Lt = r(79807);
        function xt(t, e, r, n) {
            return {
                name: t,
                prefix: e,
                encoder: {
                    name: t,
                    prefix: e,
                    encode: r
                },
                decoder: {
                    decode: n
                }
            }
        }
        const Tt = xt("utf8", "u", (t=>"u" + new TextDecoder("utf8").decode(t)), (t=>(new TextEncoder).encode(t.substring(1))))
          , kt = xt("ascii", "a", (t=>{
            let e = "a";
            for (let r = 0; r < t.length; r++)
                e += String.fromCharCode(t[r]);
            return e
        }
        ), (t=>{
            t = t.substring(1);
            const e = (0,
            Lt.E)(t.length);
            for (let r = 0; r < t.length; r++)
                e[r] = t.charCodeAt(r);
            return e
        }
        ));
        var Nt = {
            utf8: Tt,
            "utf-8": Tt,
            hex: Ut.base16,
            latin1: kt,
            ascii: kt,
            binary: kt,
            ...Ut
        }
    }
}]);
