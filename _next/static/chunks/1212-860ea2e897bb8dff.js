(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[1212], {
    1069: function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function() {
                return v
            }
        });
        const n = i(97940)
          , o = i(60273)
          , r = i(97458)
          , s = o._(i(52983))
          , a = n._(i(97962))
          , l = i(18217)
          , d = i(29811)
          , c = i(77089)
          , u = (i(68408),
        i(94621));
        function g(e) {
            return "/" === e[0] ? e.slice(1) : e
        }
        const f = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1
        }
          , h = new Set;
        new Map;
        const p = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
        const m = new Map([["default", function(e) {
            let {config: t, src: i, width: n, quality: o} = e;
            return i.endsWith(".svg") && !t.dangerouslyAllowSVG ? i : (0,
            u.normalizePathTrailingSlash)(t.path) + "?url=" + encodeURIComponent(i) + "&w=" + n + "&q=" + (o || 75)
        }
        ], ["imgix", function(e) {
            let {config: t, src: i, width: n, quality: o} = e;
            const r = new URL("" + t.path + g(i))
              , s = r.searchParams;
            return s.set("auto", s.getAll("auto").join(",") || "format"),
            s.set("fit", s.get("fit") || "max"),
            s.set("w", s.get("w") || n.toString()),
            o && s.set("q", o.toString()),
            r.href
        }
        ], ["cloudinary", function(e) {
            let {config: t, src: i, width: n, quality: o} = e;
            const r = ["f_auto", "c_limit", "w_" + n, "q_" + (o || "auto")].join(",") + "/";
            return "" + t.path + r + g(i)
        }
        ], ["akamai", function(e) {
            let {config: t, src: i, width: n} = e;
            return "" + t.path + g(i) + "?imwidth=" + n
        }
        ], ["custom", function(e) {
            let {src: t} = e;
            throw new Error('Image with src "' + t + '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')
        }
        ]]);
        function y(e) {
            return void 0 !== e.default
        }
        function b(e) {
            let {config: t, src: i, unoptimized: n, layout: o, width: r, quality: s, sizes: a, loader: l} = e;
            if (n)
                return {
                    src: i,
                    srcSet: void 0,
                    sizes: void 0
                };
            const {widths: d, kind: c} = function(e, t, i, n) {
                let {deviceSizes: o, allSizes: r} = e;
                if (n && ("fill" === i || "responsive" === i)) {
                    const e = /(^|\s)(1?\d?\d)vw/g
                      , t = [];
                    for (let i; i = e.exec(n); i)
                        t.push(parseInt(i[2]));
                    if (t.length) {
                        const e = .01 * Math.min(...t);
                        return {
                            widths: r.filter((t=>t >= o[0] * e)),
                            kind: "w"
                        }
                    }
                    return {
                        widths: r,
                        kind: "w"
                    }
                }
                return "number" !== typeof t || "fill" === i || "responsive" === i ? {
                    widths: o,
                    kind: "w"
                } : {
                    widths: [...new Set([t, 2 * t].map((e=>r.find((t=>t >= e)) || r[r.length - 1])))],
                    kind: "x"
                }
            }(t, r, o, a)
              , u = d.length - 1;
            return {
                sizes: a || "w" !== c ? a : "100vw",
                srcSet: d.map(((e,n)=>l({
                    config: t,
                    src: i,
                    quality: s,
                    width: e
                }) + " " + ("w" === c ? e : n + 1) + c)).join(", "),
                src: l({
                    config: t,
                    src: i,
                    quality: s,
                    width: d[u]
                })
            }
        }
        function w(e) {
            return "number" === typeof e ? e : "string" === typeof e ? parseInt(e, 10) : void 0
        }
        function S(e) {
            var t;
            const i = (null == (t = e.config) ? void 0 : t.loader) || "default"
              , n = m.get(i);
            if (n)
                return n(e);
            throw new Error('Unknown "loader" found in "next.config.js". Expected: ' + l.VALID_LOADERS.join(", ") + ". Received: " + i)
        }
        function x(e, t, i, n, o, r) {
            if (!e || e.src === p || e["data-loaded-src"] === t)
                return;
            e["data-loaded-src"] = t;
            ("decode"in e ? e.decode() : Promise.resolve()).catch((()=>{}
            )).then((()=>{
                if (e.parentNode && (h.add(t),
                "blur" === n && r(!0),
                null == o ? void 0 : o.current)) {
                    const {naturalWidth: t, naturalHeight: i} = e;
                    o.current({
                        naturalWidth: t,
                        naturalHeight: i
                    })
                }
            }
            ))
        }
        const z = e=>{
            let {imgAttributes: t, heightInt: i, widthInt: n, qualityInt: o, layout: a, className: l, imgStyle: d, blurStyle: c, isLazy: u, placeholder: g, loading: f, srcString: h, config: p, unoptimized: m, loader: y, onLoadingCompleteRef: w, setBlurComplete: S, setIntersection: z, onLoad: v, onError: A, isVisible: j, noscriptSizes: k, ...I} = e;
            return f = u ? "lazy" : f,
            (0,
            r.jsxs)(r.Fragment, {
                children: [(0,
                r.jsx)("img", {
                    ...I,
                    ...t,
                    decoding: "async",
                    "data-nimg": a,
                    className: l,
                    style: {
                        ...d,
                        ...c
                    },
                    ref: (0,
                    s.useCallback)((e=>{
                        z(e),
                        (null == e ? void 0 : e.complete) && x(e, h, 0, g, w, S)
                    }
                    ), [z, h, a, g, w, S]),
                    onLoad: e=>{
                        x(e.currentTarget, h, 0, g, w, S),
                        v && v(e)
                    }
                    ,
                    onError: e=>{
                        "blur" === g && S(!0),
                        A && A(e)
                    }
                }), (u || "blur" === g) && (0,
                r.jsx)("noscript", {
                    children: (0,
                    r.jsx)("img", {
                        ...I,
                        loading: f,
                        decoding: "async",
                        "data-nimg": a,
                        style: d,
                        className: l,
                        ...b({
                            config: p,
                            src: h,
                            unoptimized: m,
                            layout: a,
                            width: n,
                            quality: o,
                            sizes: k,
                            loader: y
                        })
                    })
                })]
            })
        }
        ;
        function v(e) {
            let {src: t, sizes: i, unoptimized: n=!1, priority: o=!1, loading: u, lazyRoot: g=null, lazyBoundary: m, className: x, quality: v, width: A, height: j, style: k, objectFit: I, objectPosition: _, onLoadingComplete: R, placeholder: q="empty", blurDataURL: E, ...L} = e;
            const C = (0,
            s.useContext)(c.ImageConfigContext)
              , N = (0,
            s.useMemo)((()=>{
                const e = f || C || l.imageConfigDefault
                  , t = [...e.deviceSizes, ...e.imageSizes].sort(((e,t)=>e - t))
                  , i = e.deviceSizes.sort(((e,t)=>e - t));
                return {
                    ...e,
                    allSizes: t,
                    deviceSizes: i
                }
            }
            ), [C]);
            let P = L
              , O = i ? "responsive" : "intrinsic";
            "layout"in P && (P.layout && (O = P.layout),
            delete P.layout);
            let W = S;
            if ("loader"in P) {
                if (P.loader) {
                    const e = P.loader;
                    W = t=>{
                        const {config: i, ...n} = t;
                        return e(n)
                    }
                }
                delete P.loader
            }
            let M = "";
            if (function(e) {
                return "object" === typeof e && (y(e) || function(e) {
                    return void 0 !== e.src
                }(e))
            }(t)) {
                const e = y(t) ? t.default : t;
                if (!e.src)
                    throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(e));
                if (E = E || e.blurDataURL,
                M = e.src,
                (!O || "fill" !== O) && (j = j || e.height,
                A = A || e.width,
                !e.height || !e.width))
                    throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(e))
            }
            t = "string" === typeof t ? t : M;
            let B = !o && ("lazy" === u || "undefined" === typeof u);
            (t.startsWith("data:") || t.startsWith("blob:")) && (n = !0,
            B = !1),
            h.has(t) && (B = !1),
            N.unoptimized && (n = !0);
            const [D,H] = (0,
            s.useState)(!1)
              , [U,V,F] = (0,
            d.useIntersection)({
                rootRef: g,
                rootMargin: m || "200px",
                disabled: !B
            })
              , G = !B || V
              , T = {
                boxSizing: "border-box",
                display: "block",
                overflow: "hidden",
                width: "initial",
                height: "initial",
                background: "none",
                opacity: 1,
                border: 0,
                margin: 0,
                padding: 0
            }
              , J = {
                boxSizing: "border-box",
                display: "block",
                width: "initial",
                height: "initial",
                background: "none",
                opacity: 1,
                border: 0,
                margin: 0,
                padding: 0
            };
            let Q, K = !1;
            const X = {
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                boxSizing: "border-box",
                padding: 0,
                border: "none",
                margin: "auto",
                display: "block",
                width: 0,
                height: 0,
                minWidth: "100%",
                maxWidth: "100%",
                minHeight: "100%",
                maxHeight: "100%",
                objectFit: I,
                objectPosition: _
            };
            let Y = w(A)
              , Z = w(j);
            const $ = w(v);
            const ee = Object.assign({}, k, X)
              , te = "blur" !== q || D ? {} : {
                backgroundSize: I || "cover",
                backgroundPosition: _ || "0% 0%",
                filter: "blur(20px)",
                backgroundImage: 'url("' + E + '")'
            };
            if ("fill" === O)
                T.display = "block",
                T.position = "absolute",
                T.top = 0,
                T.left = 0,
                T.bottom = 0,
                T.right = 0;
            else if ("undefined" !== typeof Y && "undefined" !== typeof Z) {
                const e = Z / Y
                  , t = isNaN(e) ? "100%" : 100 * e + "%";
                "responsive" === O ? (T.display = "block",
                T.position = "relative",
                K = !0,
                J.paddingTop = t) : "intrinsic" === O ? (T.display = "inline-block",
                T.position = "relative",
                T.maxWidth = "100%",
                K = !0,
                J.maxWidth = "100%",
                Q = "data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27" + Y + "%27%20height=%27" + Z + "%27/%3e") : "fixed" === O && (T.display = "inline-block",
                T.position = "relative",
                T.width = Y,
                T.height = Z)
            } else
                0;
            let ie = {
                src: p,
                srcSet: void 0,
                sizes: void 0
            };
            G && (ie = b({
                config: N,
                src: t,
                unoptimized: n,
                layout: O,
                width: Y,
                quality: $,
                sizes: i,
                loader: W
            }));
            let ne = t;
            const oe = {
                imageSrcSet: ie.srcSet,
                imageSizes: ie.sizes,
                crossOrigin: P.crossOrigin,
                referrerPolicy: P.referrerPolicy
            }
              , re = s.default.useLayoutEffect
              , se = (0,
            s.useRef)(R)
              , ae = (0,
            s.useRef)(t);
            (0,
            s.useEffect)((()=>{
                se.current = R
            }
            ), [R]),
            re((()=>{
                ae.current !== t && (F(),
                ae.current = t)
            }
            ), [F, t]);
            const le = {
                isLazy: B,
                imgAttributes: ie,
                heightInt: Z,
                widthInt: Y,
                qualityInt: $,
                layout: O,
                className: x,
                imgStyle: ee,
                blurStyle: te,
                loading: u,
                config: N,
                unoptimized: n,
                placeholder: q,
                loader: W,
                srcString: ne,
                onLoadingCompleteRef: se,
                setBlurComplete: H,
                setIntersection: U,
                isVisible: G,
                noscriptSizes: i,
                ...P
            };
            return (0,
            r.jsxs)(r.Fragment, {
                children: [(0,
                r.jsxs)("span", {
                    style: T,
                    children: [K ? (0,
                    r.jsx)("span", {
                        style: J,
                        children: Q ? (0,
                        r.jsx)("img", {
                            style: {
                                display: "block",
                                maxWidth: "100%",
                                width: "initial",
                                height: "initial",
                                background: "none",
                                opacity: 1,
                                border: 0,
                                margin: 0,
                                padding: 0
                            },
                            alt: "",
                            "aria-hidden": !0,
                            src: Q
                        }) : null
                    }) : null, (0,
                    r.jsx)(z, {
                        ...le
                    })]
                }), o ? (0,
                r.jsx)(a.default, {
                    children: (0,
                    r.jsx)("link", {
                        rel: "preload",
                        as: "image",
                        href: ie.srcSet ? void 0 : ie.src,
                        ...oe
                    }, "__nimg-" + ie.src + ie.srcSet + ie.sizes)
                }) : null]
            })
        }
        ("function" === typeof t.default || "object" === typeof t.default && null !== t.default) && "undefined" === typeof t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    91212: function(e, t, i) {
        e.exports = i(1069)
    }
}]);
