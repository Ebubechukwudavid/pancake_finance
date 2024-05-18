"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[5300], {
    35300: function(e, n, r) {
        r.r(n),
        r.d(n, {
            default: function() {
                return i
            }
        });
        var t = r(97458)
          , o = r(52983)
          , s = r(52100)
          , u = r(44471);
        const a = r.n(u)()((()=>Promise.all([r.e(6251), r.e(6723), r.e(9448), r.e(2081), r.e(4448), r.e(2899), r.e(4602), r.e(7028), r.e(934), r.e(9275), r.e(6761), r.e(168), r.e(9148), r.e(1301), r.e(6525), r.e(7926), r.e(7037)]).then(r.bind(r, 7037)).then((e=>e.FallingBunnies))), {
            loadableGenerated: {
                webpack: ()=>[7037]
            },
            ssr: !1
        })
          , c = e=>{
            const [n,r] = (0,
            o.useState)(!1)
              , u = (0,
            o.useCallback)((()=>r(!0)), [r]);
            return (0,
            s.Z)(u),
            n ? (0,
            t.jsx)("div", {
                onAnimationEnd: ()=>r(!1),
                children: (0,
                t.jsx)(a, {
                    ...e
                })
            }) : null
        }
        ;
        var i = (0,
        o.memo)(c)
    },
    52100: function(e, n, r) {
        var t = r(52983);
        n.Z = e=>{
            (0,
            t.useEffect)((()=>{
                const n = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight"];
                let r = 0;
                const t = t=>{
                    const {key: o} = t;
                    o === n[r] ? (r += 1,
                    n.length === r && (r = 0,
                    e())) : r = 0
                }
                ;
                return document.addEventListener("keyup", t),
                ()=>document.removeEventListener("keyup", t)
            }
            ), [e])
        }
    }
}]);
