"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[3839], {
    47142: function(e, n, o) {
        o.d(n, {
            I: function() {
                return t
            },
            p: function() {
                return i
            }
        });
        const t = 208
          , i = 604800
    },
    24295: function(e, n, o) {
        o.d(n, {
            Ar: function() {
                return D
            },
            CO: function() {
                return S
            },
            IW: function() {
                return A
            },
            Xp: function() {
                return b
            },
            k9: function() {
                return C
            },
            ok: function() {
                return P
            },
            pV: function() {
                return I
            }
        });
        var t = o(39110)
          , i = o(81986)
          , r = o(46139)
          , a = o(12606)
          , u = o(97269)
          , d = o(59255)
          , c = o(64245)
          , s = o(84595)
          , l = o(47142)
          , m = o(41616)
          , v = o(27259)
          , k = o(52983)
          , g = o(13069)
          , f = o(93677)
          , h = o(3513)
          , T = o(29720)
          , p = o(9357)
          , M = o(61483)
          , w = o(32052);
        const A = ()=>{
            const {data: e} = (0,
            w.wg)();
            return (0,
            k.useMemo)((()=>e ? e.cakePoolType === T.r.DELEGATED ? e.amount : e.amount + e.cakeAmount : 0n), [e])
        }
          , E = 172n
          , b = ()=>{
            const {balance: e} = (0,
            v.tF)()
              , {data: n} = (0,
            M.R)();
            return (0,
            k.useMemo)((()=>!n || n.isZero() ? new i.gG(0,1) : new i.gG(e.toString(),n.toString())), [e, n])
        }
          , S = ()=>{
            var e;
            const {chainId: n} = (0,
            m.g)()
              , o = (0,
            k.useMemo)((()=>(0,
            f.z2)({
                chainId: n && [t.a_.BSC, t.a_.BSC_TESTNET].includes(n) ? n : t.a_.BSC
            })), [n])
              , {data: i} = (0,
            a.a)({
                queryKey: ["vecake/cakePoolEmission", null === o || void 0 === o || null === (e = o.chain) || void 0 === e ? void 0 : e.id],
                queryFn: async()=>{
                    var e, n, t;
                    const i = await o.multicall({
                        contracts: [{
                            address: (0,
                            g.ot)(null === o || void 0 === o || null === (e = o.chain) || void 0 === e ? void 0 : e.id),
                            abi: c.H,
                            functionName: "cakeRateToSpecialFarm"
                        }, {
                            address: (0,
                            g.ot)(null === o || void 0 === o || null === (n = o.chain) || void 0 === n ? void 0 : n.id),
                            abi: c.H,
                            functionName: "poolInfo",
                            args: [E]
                        }, {
                            address: (0,
                            g.ot)(null === o || void 0 === o || null === (t = o.chain) || void 0 === t ? void 0 : t.id),
                            abi: c.H,
                            functionName: "totalSpecialAllocPoint"
                        }],
                        allowFailure: !1
                    });
                    var r;
                    var a;
                    var u;
                    return [null !== (r = i[0]) && void 0 !== r ? r : 0n, null !== (a = i[1][2]) && void 0 !== a ? a : 0n, null !== (u = i[2]) && void 0 !== u ? u : 0n]
                }
            });
            return (0,
            k.useMemo)((()=>{
                if (!i)
                    return r.HW;
                const [e,n,o] = i;
                return new u.Z(d.IO).times(new u.Z(e.toString()).div(1e12)).times(n.toString()).div((null !== o && void 0 !== o ? o : 1n).toString())
            }
            ), [i])
        }
          , I = ()=>{
            const {chainId: e} = (0,
            m.g)()
              , n = (0,
            p.P)()
              , {data: o} = (0,
            h.u)({
                abi: s.I,
                address: (0,
                g.IN)(e),
                functionName: "totalDistributed",
                chainId: (0,
                g.Uj)(e) ? e : t.a_.BSC
            })
              , i = (0,
            k.useMemo)((()=>Math.floor(n / l.p) * l.p), [n]);
            return (0,
            k.useMemo)((()=>o ? new u.Z(o.toString()).dividedBy(i - 1700697600) : r.HW), [o, i])
        }
          , P = ()=>{
            const e = (()=>{
                const e = S()
                  , n = b()
                  , o = A();
                return (0,
                k.useMemo)((()=>e && (null === n || void 0 === n ? void 0 : n.denominator) && o ? new i.gG(new u.Z(e).times(1e18).times(31536e3).times(n.numerator.toString()).toFixed(0),(o * n.denominator * 3n).toString()) : new i.gG(0,1)), [e, n, o])
            }
            )()
              , n = (()=>{
                const e = b()
                  , n = A()
                  , o = I();
                return (0,
                k.useMemo)((()=>o && (null === e || void 0 === e ? void 0 : e.denominator) && n ? new i.gG(new u.Z(o).times(31536e3).times(e.numerator.toString()).toFixed(0),(n * e.denominator).toString()) : new i.gG(0,1)), [o, n, e])
            }
            )();
            return {
                totalAPR: (0,
                k.useMemo)((()=>e && n ? e.add(n) : new i.gG(0,1)), [e, n]),
                cakePoolAPR: e,
                revenueSharingAPR: n
            }
        }
          , C = 20
          , D = ()=>{
            const e = I()
              , n = S()
              , {data: o} = (0,
            M.R)()
              , t = (0,
            k.useMemo)((()=>new u.Z(new u.Z(n).div(3).times(31536e3)).div(o.div(1e18)).times(100)), [n, o])
              , i = (0,
            k.useMemo)((()=>new u.Z(e).times(31536e3).div(o).times(100)), [e, o]);
            return {
                totalApr: (0,
                k.useMemo)((()=>t.plus(i).plus(C)), [t, i]),
                veCAKEPoolApr: t.toString(),
                revShareEmissionApr: i.toString()
            }
        }
    },
    19668: function(e, n, o) {
        o.d(n, {
            Y: function() {
                return s
            }
        });
        var t = o(39110)
          , i = o(12606)
          , r = o(27860)
          , a = o.n(r)
          , u = o(70954)
          , d = o(65589)
          , c = o(9357);
        const s = ()=>{
            const {chainId: e, account: n} = (0,
            u.Z)()
              , o = (0,
            d.Us)()
              , r = (0,
            c.P)()
              , {data: s} = (0,
            i.a)({
                queryKey: ["cakePoolLockInfo", o.address, e, n],
                queryFn: async()=>{
                    if (!n)
                        return {};
                    const [e,t,i,u,d,c,s,l,m] = await o.read.userInfo([n])
                      , v = c.toString();
                    return {
                        shares: e,
                        lastDepositedTime: t,
                        cakeAtLastUserAction: i,
                        lastUserActionTime: u,
                        lockStartTime: d,
                        lockEndTime: c,
                        userBoostedShare: s,
                        locked: l && "0" !== v && a().unix(parseInt(v, 10)).isAfter(a().unix(r)),
                        lockedAmount: m
                    }
                }
                ,
                enabled: Boolean(n) && (e === t.a_.BSC || e === t.a_.BSC_TESTNET)
            });
            return s || {}
        }
    },
    47163: function(e, n, o) {
        o.d(n, {
            j: function() {
                return r
            }
        });
        var t = o(52983)
          , i = o(9357);
        const r = e=>{
            const n = (0,
            i.P)();
            return (0,
            t.useMemo)((()=>e ? parseInt(e) : 0), [e]) > a(n)
        }
          , a = e=>{
            const n = new Date(1e3 * e);
            return n.setUTCDate(n.getUTCDate() + ((11 - n.getUTCDay()) % 7 || 7)),
            n.setUTCHours(0),
            n.setUTCMinutes(0),
            n.setUTCSeconds(0),
            n.setUTCMilliseconds(0),
            n.getTime() / 1e3
        }
    },
    9357: function(e, n, o) {
        o.d(n, {
            P: function() {
                return a
            }
        });
        var t = o(27860)
          , i = o.n(t)
          , r = o(61301);
        const a = ()=>{
            const e = (0,
            r.PC)();
            return null !== e && void 0 !== e ? e : i()().unix()
        }
    },
    61483: function(e, n, o) {
        o.d(n, {
            R: function() {
                return l
            }
        });
        var t = o(46139)
          , i = o(97269)
          , r = o(92584)
          , a = o(41616)
          , u = o(52983)
          , d = o(3513)
          , c = o(13069)
          , s = o(39110);
        const l = ()=>{
            const {chainId: e} = (0,
            a.g)()
              , {status: n, refetch: o, data: l} = (0,
            d.u)({
                chainId: (0,
                c.Ag)(e) ? e : s.a_.BSC,
                address: (0,
                c.b0)(e),
                functionName: "totalSupply",
                abi: r.K,
                query: {
                    enabled: Boolean((0,
                    c.b0)(e))
                }
            });
            return {
                data: (0,
                u.useMemo)((()=>"undefined" !== typeof l ? new i.Z(l.toString()) : t.HW), [l]),
                fetchStatus: n,
                refresh: o
            }
        }
    },
    32052: function(e, n, o) {
        o.d(n, {
            Jj: function() {
                return g
            },
            wg: function() {
                return k
            }
        });
        var t, i = o(28220), r = o(27860), a = o.n(r), u = o(70954), d = o(65589), c = o(52983), s = o(29720), l = o(19668), m = o(47163), v = o(9357);
        !function(e) {
            e[e.LOCKING = 0] = "LOCKING",
            e[e.WITHDRAW = 1] = "WITHDRAW"
        }(t || (t = {}));
        const k = ()=>{
            var e;
            const n = (0,
            d.hu)()
              , {account: o} = (0,
            u.Z)()
              , {data: t, refetch: r} = (0,
            i.uT)({
                chainId: null === n || void 0 === n || null === (e = n.chain) || void 0 === e ? void 0 : e.id,
                abi: n.abi,
                address: n.address,
                functionName: "getUserInfo",
                query: {
                    enabled: Boolean((null === n || void 0 === n ? void 0 : n.address) && o),
                    select: e=>{
                        if (!e)
                            return;
                        const [n,o,t,i,r,a,u,d] = e;
                        return {
                            amount: n,
                            end: o,
                            cakePoolProxy: t,
                            cakeAmount: i,
                            lockEndTime: r,
                            migrationTime: a,
                            cakePoolType: u,
                            withdrawFlag: d
                        }
                    }
                },
                args: [o],
                watch: !0
            });
            return {
                data: t,
                refetch: r
            }
        }
          , g = ()=>{
            const e = (0,
            v.P)()
              , {data: n} = k()
              , o = (0,
            l.Y)()
              , t = (0,
            m.j)(String(o.lockEndTime))
              , i = (0,
            c.useMemo)((()=>(null === o || void 0 === o ? void 0 : o.locked) && (null === n || void 0 === n ? void 0 : n.cakePoolType) !== s.r.MIGRATED && t), [null === o || void 0 === o ? void 0 : o.locked, t, null === n || void 0 === n ? void 0 : n.cakePoolType])
              , r = (0,
            c.useMemo)((()=>!!n && (n.cakePoolType === s.r.DELEGATED && 0n === n.amount)), [n])
              , u = (0,
            c.useMemo)((()=>a().unix(e)), [e])
              , d = (0,
            c.useMemo)((()=>Boolean(n && n.amount > 0n)), [n])
              , g = (0,
            c.useMemo)((()=>n ? Number(n.end) : 0), [n])
              , f = (0,
            c.useMemo)((()=>!!d && a().unix(g).isBefore(u)), [d, g, u])
              , h = (0,
            c.useMemo)((()=>(null === n || void 0 === n ? void 0 : n.cakePoolType) === s.r.DELEGATED), [n])
              , T = (0,
            c.useMemo)((()=>!h && Boolean(null === n || void 0 === n ? void 0 : n.cakeAmount) && 1 !== (null === n || void 0 === n ? void 0 : n.withdrawFlag)), [h, null === n || void 0 === n ? void 0 : n.cakeAmount, null === n || void 0 === n ? void 0 : n.withdrawFlag])
              , p = (0,
            c.useMemo)((()=>!!T && e > n.lockEndTime), [T, e, n])
              , M = (0,
            c.useMemo)((()=>{
                return n ? null !== (e = n.amount) && void 0 !== e ? e : 0n : BigInt(0);
                var e
            }
            ), [n])
              , w = (0,
            c.useMemo)((()=>{
                return !T || h ? 0n : null !== (e = null === n || void 0 === n ? void 0 : n.cakeAmount) && void 0 !== e ? e : 0n;
                var e
            }
            ), [T, h, null === n || void 0 === n ? void 0 : n.cakeAmount])
              , A = (0,
            c.useMemo)((()=>M + w), [M, w])
              , E = (0,
            c.useMemo)((()=>T ? Number(n.lockEndTime) : 0), [n, T]);
            return {
                status: (0,
                c.useMemo)((()=>(n && n.amount || T || i) && !r ? f ? s.$.Expired : (null === n || void 0 === n ? void 0 : n.amount) && n.end || T ? s.$.Locking : i ? s.$.Migrate : s.$.NotLocked : s.$.NotLocked), [n, T, i, r, f]),
                shouldMigrate: i,
                cakeLockedAmount: A,
                nativeCakeLockedAmount: M,
                proxyCakeLockedAmount: w,
                delegated: h,
                cakeLocked: d,
                cakeLockExpired: f,
                cakePoolLocked: T,
                cakePoolLockExpired: p,
                cakeUnlockTime: g,
                cakePoolUnlockTime: E
            }
        }
    },
    29720: function(e, n, o) {
        var t, i;
        o.d(n, {
            $: function() {
                return t
            },
            r: function() {
                return i
            }
        }),
        function(e) {
            e.NotLocked = "NotLocked",
            e.Locking = "Locking",
            e.Expired = "Expired",
            e.Migrate = "Migrate"
        }(t || (t = {})),
        function(e) {
            e[e.NOT_MIGRATED = 0] = "NOT_MIGRATED",
            e[e.MIGRATED = 1] = "MIGRATED",
            e[e.DELEGATED = 2] = "DELEGATED"
        }(i || (i = {}))
    },
    16182: function(e, n, o) {
        o.d(n, {
            Z: function() {
                return l
            }
        });
        var t = o(97458)
          , i = (o(52983),
        o(21058))
          , r = o(97843)
          , a = o(13729)
          , u = o(42902)
          , d = o(43431);
        const c = r.zo.div.withConfig({
            shouldForwardProp: i.ZP
        }).withConfig({
            componentId: "sc-a4a8b395-0"
        })(["background:", ";border-radius:", ";color:", ";overflow:hidden;position:relative;", " padding:1px 1px 3px 1px;", ""], (e=>{
            let {isActive: n, isSuccess: o, isWarning: t, borderBackground: i, theme: r} = e;
            return i || (t ? r.colors.warning : o ? r.colors.success : n ? `linear-gradient(180deg, ${r.colors.primaryBright}, ${r.colors.secondary})` : r.colors.cardBorder)
        }
        ), (e=>{
            let {theme: n} = e;
            return n.radii.card
        }
        ), (e=>{
            let {theme: n, isDisabled: o} = e;
            return n.colors[o ? "textDisabled" : "text"]
        }
        ), (e=>{
            let {isActive: n} = e;
            return n && (0,
            r.iv)(["animation:", " 3s ease infinite;background-size:400% 400%;"], u.DS)
        }
        ), a.Dh)
          , s = (0,
        r.zo)(d.ZP).withConfig({
            componentId: "sc-a4a8b395-1"
        })(["width:100%;height:100%;overflow:", ";background:", ";border-radius:", ";"], (e=>{
            let {hasCustomBorder: n} = e;
            return n ? "initial" : "inherit"
        }
        ), (e=>{
            let {theme: n, background: o} = e;
            return null !== o && void 0 !== o ? o : n.card.background
        }
        ), (e=>{
            let {theme: n} = e;
            return n.radii.card
        }
        ));
        c.defaultProps = {
            isActive: !1,
            isSuccess: !1,
            isWarning: !1,
            isDisabled: !1
        };
        var l = e=>{
            let {ribbon: n, children: o, background: i, innerCardProps: r, ...a} = e;
            return (0,
            t.jsx)(c, {
                ...a,
                children: (0,
                t.jsxs)(s, {
                    ...r,
                    background: i,
                    hasCustomBorder: !!a.borderBackground,
                    children: [n, o]
                })
            })
        }
    }
}]);
