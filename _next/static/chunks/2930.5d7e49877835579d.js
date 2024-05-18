(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[2930, 9362, 3804], {
    79544: function(e, t, i) {
        "use strict";
        i.d(t, {
            A: function() {
                return u
            }
        });
        var n = i(97458)
          , r = i(56645)
          , o = i(23028)
          , s = i(13030)
          , a = i(41616)
          , c = i(8596)
          , d = i(83105);
        const l = {
            variant: "danger",
            disabled: !1,
            children: (0,
            n.jsx)(d.Z, {
                children: "Wrong Network"
            })
        }
          , u = e=>{
            const {isWrongNetwork: t} = (0,
            a.g)()
              , [i] = (0,
            o.c)()
              , d = (0,
            s.b9)(c.v);
            return (0,
            n.jsx)(r.Z, {
                ...e,
                onClick: i=>{
                    var n;
                    t ? d(!1) : null === (n = e.onClick) || void 0 === n || n.call(e, i)
                }
                ,
                ...i && {
                    disabled: !0
                },
                ...t && l
            })
        }
    },
    18842: function(e, t, i) {
        "use strict";
        i.d(t, {
            $_: function() {
                return u
            },
            D$: function() {
                return p
            },
            Jt: function() {
                return d
            },
            Sc: function() {
                return m
            },
            Yo: function() {
                return a
            },
            nI: function() {
                return f
            },
            vw: function() {
                return o
            },
            wz: function() {
                return h
            },
            zW: function() {
                return x
            }
        });
        var n = i(39110)
          , r = i(76014);
        const o = [{
            label: "All",
            value: "All"
        }, {
            label: "Liquidity",
            value: r.MM.Liquidity
        }, {
            label: "Alerts",
            value: r.MM.Alerts
        }, {
            label: "Prediction",
            value: r.MM.Prediction
        }, {
            label: "Prices",
            value: r.MM.PriceUpdates
        }, {
            label: "Promotion",
            value: r.MM.Promotional
        }, {
            label: "Lottery",
            value: r.MM.Lottery
        }, {
            label: "Farm",
            value: r.MM.Farms
        }, {
            label: "Rewards",
            value: r.MM.TradingReward
        }];
        var s;
        const a = null !== (s = "nTu3Ls0rJzW7cVpRyZkFgUqHxJ3i1sXo") ? s : "";
        var c;
        const d = null !== (c = "ee68a5c2733a30e4d3f3e679ba646d83d12cf4f6ee631a2825f9763445591398") ? c : "";
        var l;
        const u = null !== (l = "359da65b8f571c847706283d8d578a4f") ? l : ""
          , p = {
            newLpNotification: e=>({
                title: e("New LP Position Added"),
                body: e("New LP position successfully added. You will be notified on important updates."),
                icon: "https://pancakeswap.finance/logo.png",
                url: "https://pancakeswap.finance",
                type: r.MM.Liquidity
            })
        }
          , h = "pancakeswap.finance";
        var g;
        const f = null !== (g = "BL7A-sUwJfosG7vm6i99zsIQWSMIgXJ1MlI-a2ogITqkXIT7PDNQgKi0Jh7UjviLAUkxDWuzXAUjZBZS1sC6GA0") ? g : ""
          , x = {
            [r.FN.NotificationsEnabled]: {
                title: e=>e("Notifications Enabled"),
                message: e=>e("You can now opt-in to pancakeswap web notifications")
            },
            [r.FN.NotificationsEnabledError]: {
                title: e=>e("Error Enabling Notifications"),
                message: (e,t)=>e("Something went wrong when trying to enable notifications %error%", {
                    error: t
                })
            },
            [r.FN.SubscriptionRequestError]: {
                title: e=>e("Subscription Error")
            },
            [r.FN.PreferencesUpdated]: {
                title: e=>e("Success"),
                message: e=>e("Your notification preferences have been updated.")
            },
            [r.FN.PreferencesError]: {
                title: e=>e("Something went wrong"),
                message: (e,t)=>e("Unable to update your preferences %error%", {
                    error: t
                })
            },
            [r.FN.UnsubscribeError]: {
                title: e=>e("Error Unsubscribing"),
                message: (e,t)=>e("Unable to unsubscribe %error%", {
                    error: t
                })
            },
            [r.FN.Unsubscribed]: {
                title: e=>e("Update"),
                message: e=>e("You successfully unsubscribed from notifications. You can re-subscribe any time")
            }
        }
          , m = {
            bsc: n.a_.BSC,
            ethereum: n.a_.ETHEREUM,
            polygon_zkevm: n.a_.POLYGON_ZKEVM,
            era: n.a_.ZKSYNC,
            arbitrum: n.a_.ARBITRUM_ONE,
            linea: n.a_.LINEA,
            base: n.a_.BASE
        };
        r.MM.Alerts,
        r.MM.Farms,
        r.MM.Liquidity,
        r.MM.Lottery,
        r.MM.Prediction,
        r.MM.PriceUpdates,
        r.MM.Promotional,
        r.MM.Alerts,
        r.MM.Liquidity
    },
    59796: function(e, t, i) {
        "use strict";
        i.r(t),
        i.d(t, {
            default: function() {
                return Pe
            }
        });
        var n = i(97458)
          , r = i(43431)
          , o = i(87243)
          , s = i(52983)
          , a = i(14218)
          , c = i(17523)
          , d = i(52987)
          , l = i(20051)
          , u = i(17604)
          , p = i(8452)
          , h = i(44340)
          , g = i(8368)
          , f = i(34420)
          , x = i(47467)
          , m = i.n(x)
          , b = i(18842)
          , w = i(15313).Buffer;
        var v = ()=>{
            const e = (0,
            g.p)()
              , {address: t} = (0,
            a.m)()
              , {t: i} = (0,
            h.Z)();
            return {
                sendPushNotification: async(t,n,r)=>{
                    const o = {
                        accounts: [r],
                        notification: b.D$[t](i, n)
                    };
                    try {
                        await fetch(`${f.AU}/walletconnect-notify`, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                "x-secure-token": b.Yo
                            },
                            body: JSON.stringify(o)
                        })
                    } catch (s) {
                        s instanceof Error && e.toastError(i("Failed to send"), s.message)
                    }
                }
                ,
                requestNotificationPermission: async()=>{
                    if (!("Notification"in window))
                        return Promise.reject(new Error("This browser does not support desktop push notifications"));
                    switch (Notification.permission) {
                    case "granted":
                        return Promise.resolve();
                    case "denied":
                        return Promise.reject(new Error("User does not want to receive notifications"));
                    default:
                        return Notification.requestPermission()
                    }
                }
                ,
                subscribeToPushNotifications: async function() {
                    if ("serviceWorker"in navigator)
                        try {
                            const e = await navigator.serviceWorker.register("/service-worker-sw.js");
                            await navigator.serviceWorker.ready;
                            const i = await e.pushManager.getSubscription();
                            i && await i.unsubscribe();
                            const n = w.from(b.Jt, "hex")
                              , r = w.from(b.$_, "hex")
                              , o = await e.pushManager.subscribe({
                                userVisibleOnly: !0,
                                applicationServerKey: b.nI
                            })
                              , s = JSON.stringify(o)
                              , a = m().createCipheriv("aes-256-cbc", n, r);
                            let c = a.update(s, "utf8", "hex");
                            c += a.final("hex"),
                            await fetch(`${f.AU}/subscribe`, {
                                method: "POST",
                                body: JSON.stringify({
                                    subscription: c,
                                    user: t
                                }),
                                headers: {
                                    "Content-Type": "application/json"
                                }
                            })
                        } catch (e) {
                            console.error("Failed to subscribe to push notifications", e)
                        }
                }
            }
        }
          , j = i(71607)
          , y = i.n(j)
          , Z = i(39242)
          , M = i(45042)
          , P = i(74774);
        var k = e=>{
            const t = (0,
            Z.TL)()
              , {unreadLength: i, unreadNotificationKeys: n} = (0,
            P.TL)(e)
              , r = (0,
            s.useRef)(null)
              , {data: a, fetchNextPage: c, isLoadingNextPage: d, hasMore: l} = (0,
            o.zn)(5, !0)
              , u = (0,
            s.useMemo)((()=>Boolean(d && l)), [d, l])
              , p = (0,
            s.useCallback)((()=>{
                if (e && n)
                    for (const i of n)
                        t((0,
                        M.zY)({
                            subscriptionId: e,
                            notificationId: i,
                            hasUnread: !0
                        }))
            }
            ), [t, e, n])
              , h = (0,
            s.useCallback)(((i,n)=>{
                e && t((0,
                M.zY)({
                    subscriptionId: e,
                    notificationId: n,
                    hasUnread: i
                }))
            }
            ), [t, e]);
            return (0,
            s.useEffect)((()=>{
                const e = r.current;
                if (!e)
                    return y()();
                const t = ()=>{
                    const {scrollTop: t, scrollHeight: i, clientHeight: n} = e;
                    t + n >= .97 * i && l && c()
                }
                ;
                return e.addEventListener("scroll", t),
                ()=>{
                    e.removeEventListener("scroll", t)
                }
            }
            ), [r, c, l]),
            {
                notifications: a,
                containerRef: r,
                isLoading: u,
                markAllNotificationsAsRead: p,
                markAsRead: h,
                hasUnread: i
            }
        }
          , C = i(37272)
          , S = i(76014);
        const I = e=>{
            let {unread: t, toggleMenu: i} = e;
            const r = t >= 9 ? "9+" : `${t}`;
            return (0,
            n.jsxs)(C.H9, {
                onClick: i,
                children: [(0,
                n.jsx)(c.Z, {
                    height: 24,
                    width: 24,
                    color: "textSubtle"
                }), t > 0 ? (0,
                n.jsx)("div", {
                    className: "notification-badge",
                    children: r
                }) : null]
            })
        }
          , E = e=>{
            let {children: t, viewIndex: i, subscriptionId: o} = e;
            const [a,c] = (0,
            s.useState)(!1)
              , h = (0,
            s.useRef)(null)
              , {isMobile: g} = (0,
            d.Z)()
              , {hasUnread: f, markAllNotificationsAsRead: x} = k(o)
              , {requestNotificationPermission: m} = v()
              , b = (0,
            s.useCallback)((()=>{
                a || m(),
                c(!a)
            }
            ), [c, a, m]);
            return (0,
            s.useEffect)((()=>{
                const e = e=>{
                    h.current && !h.current.contains(e.target) && (x(),
                    c(!1))
                }
                ;
                return document.addEventListener("click", e),
                ()=>document.removeEventListener("click", e)
            }
            ), [a, c, x]),
            g ? (0,
            n.jsxs)(l.Z, {
                alignItems: "center",
                justifyContent: "center",
                tabIndex: -1,
                children: [(0,
                n.jsx)(I, {
                    unread: f,
                    toggleMenu: b
                }), (0,
                n.jsx)(u.kw, {
                    isOpen: a,
                    onDismiss: b,
                    closeOnOverlayClick: !0,
                    children: (0,
                    n.jsx)(p.AB, {
                        onDismiss: b,
                        minWidth: "320px",
                        height: "90vh",
                        children: t
                    })
                })]
            }) : (0,
            n.jsxs)(l.Z, {
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                ref: h,
                tabIndex: -1,
                children: [(0,
                n.jsx)(I, {
                    unread: f,
                    toggleMenu: b
                }), (0,
                n.jsx)(C.v2, {
                    $isOpen: a,
                    style: {
                        top: "100%",
                        position: "fixed"
                    },
                    $overrideHeight: i === S.Wo.OnboardView,
                    children: (0,
                    n.jsx)(r.ZP, {
                        children: t
                    })
                })]
            })
        }
        ;
        var L = (0,
        s.memo)(E)
          , A = i(34032)
          , N = i(83778)
          , z = i(52341)
          , U = i(16207)
          , R = i(15886)
          , W = i(75218)
          , B = i(79544)
          , O = i(85466)
          , T = i.n(O)
          , $ = i(23375);
        const F = e=>{
            let {leftIcon: t, rightIcon: i, text: r} = e;
            return (0,
            n.jsxs)(C.xB, {
                children: [t, (0,
                n.jsx)(C.r6, {
                    children: (0,
                    n.jsx)($.Z, {
                        fontSize: "20px",
                        padding: "0px",
                        textAlign: "center",
                        children: r
                    })
                }), i]
            })
        }
        ;
        var H = i(28513)
          , q = i(60988)
          , V = i.n(q);
        const _ = e=>{
            let {scope: t} = e;
            return {
                [S.MM.Alerts]: (0,
                n.jsx)(V(), {
                    src: "/images/notifications/alerts-scope.svg",
                    alt: "alert-scope",
                    width: 40,
                    height: 40
                }),
                [S.MM.Farms]: (0,
                n.jsx)(V(), {
                    src: "/images/notifications/farms-scope.svg",
                    alt: "farms-scope",
                    width: 40,
                    height: 40
                }),
                [S.MM.Liquidity]: (0,
                n.jsx)(V(), {
                    src: "/images/notifications/liquidity-scope.svg",
                    alt: "liquidity-scope",
                    width: 40,
                    height: 40
                }),
                [S.MM.Lottery]: (0,
                n.jsx)(V(), {
                    src: "/images/notifications/lotto-scope.svg",
                    alt: "lottery-scope",
                    width: 40,
                    height: 40
                }),
                [S.MM.Prediction]: (0,
                n.jsx)(V(), {
                    src: "/images/notifications/predictions-scope.svg",
                    alt: "prediction-scope",
                    width: 40,
                    height: 40
                }),
                [S.MM.PriceUpdates]: (0,
                n.jsx)(V(), {
                    src: "/images/notifications/predictions-scope.svg",
                    alt: "prices-scope",
                    width: 40,
                    height: 40
                }),
                [S.MM.Promotional]: (0,
                n.jsx)(V(), {
                    src: "/images/notifications/promotional-scope.svg",
                    alt: "promo-scope",
                    width: 40,
                    height: 40
                }),
                [S.MM.TradingReward]: (0,
                n.jsx)(V(), {
                    src: "/images/notifications/promotional-scope.svg",
                    alt: "promo-scope",
                    width: 40,
                    height: 40
                })
            }[t]
        }
          , Y = e=>{
            let {scope: t, id: i, setScopes: o, index: a} = e;
            const c = (0,
            s.useCallback)((()=>{
                o((e=>({
                    ...e,
                    [i]: {
                        ...e[i],
                        enabled: !e[i].enabled
                    }
                })))
            }
            ), [o, i]);
            return (0,
            n.jsxs)(r.ZP, {
                paddingLeft: "24px",
                paddingRight: "16px",
                paddingBottom: "16px",
                children: [(0,
                n.jsxs)(N.Z, {
                    alignItems: "center",
                    children: [(0,
                    n.jsx)(_, {
                        scope: i
                    }), (0,
                    n.jsx)(z.Z, {
                        fontWeight: 600,
                        paddingX: "12px",
                        fontSize: "17px",
                        textAlign: "center",
                        lineHeight: "16px",
                        children: t.name
                    })]
                }), (0,
                n.jsxs)(l.Z, {
                    marginTop: "6px",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderBottom: 6 === a ? "" : "1px solid",
                    borderBottomColor: "cardBorder",
                    paddingBottom: "16px",
                    children: [(0,
                    n.jsx)(z.Z, {
                        maxWidth: "80%",
                        color: "textSubtle",
                        children: t.description
                    }), (0,
                    n.jsx)(H.Z, {
                        id: "toggle-expert-mode-button",
                        scale: "md",
                        checked: t.enabled,
                        onChange: c
                    })]
                })]
            })
        }
        ;
        var J = e=>{
            let {scopes: t, setScopes: i} = e;
            var r;
            const {isMobile: o} = (0,
            d.Z)()
              , s = .9 * (null === (r = window) || void 0 === r ? void 0 : r.document.documentElement.clientHeight);
            return (0,
            n.jsx)(C.Cg, {
                $maxHeight: o ? s - 150 + "px" : "550px",
                children: Object.entries(t).sort(((e,t)=>{
                    let[,i] = e
                      , [,n] = t;
                    return "alerts" === i.name || "Liquidity" === i.name ? -1 : "alerts" === n.name || "Liquidity" === n.name ? 1 : 0
                }
                )).map(((e,t)=>{
                    let[r,o] = e;
                    return (0,
                    n.jsx)(Y, {
                        id: r,
                        scope: o,
                        setScopes: i,
                        index: t
                    }, r)
                }
                ))
            })
        }
          , D = i(41528);
        function X(e) {
            let {isUnsubscribing: t, handleSubscriptionAction: i, objectsAreEqual: r} = e;
            const {t: o} = (0,
            h.Z)()
              , s = ((e,t,i)=>{
                let n = i("Unsubscribe");
                return n = i(t ? e ? "Unsubscribing" : "Unsubscribe" : e ? "Updating..." : "Update Preferences"),
                n
            }
            )(t, r, o);
            return (0,
            n.jsx)(A.Tz, {
                children: (0,
                n.jsx)(B.A, {
                    onClick: i,
                    isLoading: t,
                    children: (0,
                    n.jsxs)(N.Z, {
                        alignItems: "center",
                        gap: "6px",
                        children: [(0,
                        n.jsx)(z.Z, {
                            fontWeight: "bold",
                            color: "white",
                            children: s
                        }), t ? (0,
                        n.jsx)(U.B, {
                            stroke: "white"
                        }) : null]
                    })
                })
            })
        }
        var G = e=>{
            let {toggleSettings: t} = e;
            const {unsubscribe: i, isLoading: a} = (0,
            o.p_)()
              , {data: c, update: d} = (0,
            o.aT)()
              , [l,u] = (0,
            s.useState)({})
              , p = (0,
            s.useRef)(c)
              , f = T()(l, p.current)
              , x = (0,
            g.p)()
              , {t: m} = (0,
            h.Z)();
            (0,
            s.useEffect)((()=>{
                c && (u(c),
                p.current = c)
            }
            ), [c]);
            const w = (0,
            s.useCallback)((async()=>{
                try {
                    var e, t;
                    await d((e=>{
                        const t = [];
                        return Object.entries(e).forEach((e=>{
                            let[i,n] = e;
                            n.enabled && t.push(i)
                        }
                        )),
                        t
                    }
                    )(l));
                    const i = c;
                    p.current = i,
                    x.toastSuccess(b.zW.PreferencesUpdated.title(m), null === (e = (t = b.zW.PreferencesUpdated).message) || void 0 === e ? void 0 : e.call(t, m))
                } catch (i) {
                    const e = (0,
                    D.O)(b.zW.PreferencesError, i);
                    x.toastError(b.zW.PreferencesError.title(m), e)
                }
            }
            ), [m, c, x, l, d])
              , v = (0,
            s.useCallback)((async()=>{
                try {
                    var e, t;
                    await i(),
                    x.toastSuccess(b.zW.Unsubscribed.title(m), null === (e = (t = b.zW.Unsubscribed).message) || void 0 === e ? void 0 : e.call(t, m))
                } catch (n) {
                    const e = (0,
                    D.O)(b.zW.UnsubscribeError, n);
                    x.toastWarning(b.zW.UnsubscribeError.title(m), e)
                }
            }
            ), [m, i, x])
              , j = (0,
            s.useCallback)((e=>{
                e.stopPropagation(),
                f ? v() : w()
            }
            ), [w, v, f]);
            return (0,
            n.jsxs)(r.ZP, {
                width: "100%",
                children: [(0,
                n.jsx)(F, {
                    leftIcon: (0,
                    n.jsx)(R.Z, {
                        tabIndex: -1,
                        variant: "text",
                        onClick: t,
                        children: (0,
                        n.jsx)(W.Z, {
                            color: "primary"
                        })
                    }),
                    rightIcon: (0,
                    n.jsx)(R.Z, {
                        tabIndex: -1,
                        variant: "text"
                    }),
                    text: m("Settings")
                }), (0,
                n.jsxs)(C.xR, {
                    marginTop: "10px",
                    children: [(0,
                    n.jsx)(J, {
                        scopes: l,
                        setScopes: u
                    }), (0,
                    n.jsx)(r.ZP, {
                        padding: "20px",
                        children: (0,
                        n.jsx)(X, {
                            isUnsubscribing: a,
                            handleSubscriptionAction: j,
                            objectsAreEqual: f
                        })
                    })]
                })]
            })
        }
          , K = i(66558)
          , Q = i(43345)
          , ee = i(97419)
          , te = i(17275)
          , ie = i(40120)
          , ne = i(27860)
          , re = i.n(ne);
        var oe = i(24276)
          , se = i(714)
          , ae = {
            src: "/_next/static/media/alert-icon.d9bee9db.svg",
            height: 16,
            width: 16,
            blurWidth: 0,
            blurHeight: 0
        };
        const ce = e=>{
            let {image: t, title: i, message: o} = e;
            if (i.includes("APR Update") || i.includes("LP position")) {
                const {image1: e, image2: t} = ((e,t)=>{
                    const i = e.includes("APR")
                      , n = i ? (e=>{
                        const t = e.match(/(\S+)\s*\./);
                        return t ? t[1] : "bsc"
                    }
                    )(t) : (e=>{
                        const t = e.match(/on (\$\{chainId\})/);
                        return t ? t[1] : "bsc"
                    }
                    )(t)
                      , r = b.Sc["polygon_zkevm." === n ? "polygon_zkevm" : n];
                    return {
                        image1: i ? "/images/notifications/farms-scope.svg" : "/logo.png",
                        image2: `${f.EW}/web/chains/${r}.png`
                    }
                }
                )(i, o);
                return !/[a-zA-Z]+-[a-zA-Z]+ LP,/.test(o) ? (0,
                n.jsx)(r.ZP, {
                    marginRight: "8px",
                    paddingY: "4px",
                    minWidth: "40px",
                    children: (0,
                    n.jsx)(V(), {
                        src: t,
                        alt: "apr Image",
                        height: 40,
                        width: 40,
                        unoptimized: !0
                    })
                }) : (0,
                n.jsxs)(r.ZP, {
                    position: "relative",
                    minWidth: "40px",
                    minHeight: "40px",
                    children: [(0,
                    n.jsx)(r.ZP, {
                        marginRight: "8px",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        children: (0,
                        n.jsx)(V(), {
                            src: e,
                            alt: "apr img",
                            height: 30,
                            width: 30,
                            unoptimized: !0
                        })
                    }), (0,
                    n.jsx)(r.ZP, {
                        marginRight: "8px",
                        position: "absolute",
                        bottom: 0,
                        right: 0,
                        children: (0,
                        n.jsx)(V(), {
                            src: t,
                            alt: "apr img",
                            height: 26,
                            width: 26,
                            unoptimized: !0
                        })
                    })]
                })
            }
            var s;
            return (0,
            n.jsx)(r.ZP, {
                marginRight: "8px",
                paddingY: "4px",
                minWidth: "40px",
                children: (0,
                n.jsx)(V(), {
                    src: null !== (s = null === t || void 0 === t ? void 0 : t.toString()) && void 0 !== s ? s : "/logo.png",
                    alt: "Notification Image",
                    height: 40,
                    width: 40,
                    unoptimized: !0
                })
            })
        }
          , de = e=>{
            let {title: t, message: i} = e;
            const {t: r} = (0,
            h.Z)();
            if (t.includes("Balance"))
                return (0,
                n.jsxs)(N.Z, {
                    borderRadius: 16,
                    backgroundColor: "tertiary",
                    paddingY: "2px",
                    paddingX: "6px",
                    alignItems: "center",
                    gap: "2px",
                    children: [(0,
                    n.jsx)(V(), {
                        src: ae,
                        alt: "Alert Image",
                        height: 16,
                        width: 16,
                        unoptimized: !0
                    }), (0,
                    n.jsx)(z.Z, {
                        fontSize: "12px",
                        children: r("Alerts")
                    })]
                });
            if (t.includes("Price Movement") || t.includes("APR Update")) {
                const e = (e=>{
                    const t = e.match(/(\d+(\.\d*)?)%/);
                    return t ? parseFloat(t[1]) : null
                }
                )(i)
                  , r = i.includes("fallen")
                  , o = ((e,t,i)=>e ? `${i}% APR change ` : `${t ? "Down" : "Up"} ${t ? "-" : "+"}${i}%`)(t.includes("APR"), r, null !== e && void 0 !== e ? e : 0);
                return (0,
                n.jsxs)(N.Z, {
                    borderRadius: 16,
                    backgroundColor: "tertiary",
                    paddingY: "2px",
                    paddingX: "6px",
                    alignItems: "center",
                    gap: "2px",
                    children: [r ? (0,
                    n.jsx)(oe.Z, {
                        color: "text"
                    }) : (0,
                    n.jsx)(se.Z, {
                        color: "text"
                    }), (0,
                    n.jsx)(z.Z, {
                        fontSize: "12px",
                        pr: "6px",
                        color: "text",
                        children: o
                    })]
                })
            }
            return (0,
            n.jsx)(n.Fragment, {})
        }
          , le = e=>{
            let {title: t, description: i, date: r, image: o, url: a, subscriptionId: c, id: u} = e;
            const [p,g] = (0,
            s.useState)(!1)
              , [f,x] = (0,
            s.useState)(0)
              , {t: m} = (0,
            h.Z)()
              , {isMobile: b} = (0,
            d.Z)()
              , w = (0,
            s.useRef)(null)
              , v = (0,
            P.b1)(c, u)
              , {markAsRead: j} = k(c)
              , y = ((e,t)=>{
                const i = re()()
                  , n = re().unix(parseInt(e)).add(null !== t && void 0 !== t ? t : 0, "minute")
                  , r = i.diff(n, "second")
                  , o = i.diff(n, "minute")
                  , s = i.diff(n, "hour")
                  , a = i.diff(n, "day");
                return s >= 24 ? `${a}d ago` : o >= 60 ? `${s}hr ago` : r >= 60 ? `${o}m ago` : "less than 1m ago"
            }
            )(Math.floor(r / 1e3).toString())
              , Z = ((e,t)=>e.split("\n").map(((e,i)=>(0,
            n.jsx)(z.Z, {
                fontSize: t ? "14px" : "16px",
                lineHeight: "20px",
                fontWeight: 400,
                color: "textSubtle",
                children: e
            }, `message-line-${i}`))))(i, b)
              , M = ((e,t)=>e.includes("APR Update") ? t("View Farm") : e.includes("Balance") || e.includes("Purchase") ? t("Buy Crypto") : t("View Link"))(t, m)
              , S = (0,
            s.useCallback)((e=>{
                "BUTTON" !== e.target.tagName && g(!p)
            }
            ), [p]);
            return (0,
            s.useEffect)((()=>{
                w.current && x(w.current.scrollHeight),
                v || j(!1, u)
            }
            ), []),
            (0,
            n.jsx)(C.Zo, {
                onClick: S,
                onMouseEnter: ()=>{
                    v || j(!0, u)
                }
                ,
                children: (0,
                n.jsx)(C.y3, {
                    children: (0,
                    n.jsxs)(l.Z, {
                        flexDirection: "column",
                        width: "100%",
                        children: [(0,
                        n.jsxs)(l.Z, {
                            justifyContent: "space-between",
                            width: "100%",
                            children: [(0,
                            n.jsx)(ce, {
                                image: o,
                                title: t,
                                message: i
                            }), (0,
                            n.jsxs)(l.Z, {
                                flexDirection: "column",
                                width: "100%",
                                children: [(0,
                                n.jsx)(z.Z, {
                                    fontWeight: 600,
                                    marginBottom: "2px",
                                    children: t.includes("Update POLYGON_ZKEVM") ? "Farms APR Update ZKEVM" : t
                                }), (0,
                                n.jsxs)(N.Z, {
                                    alignItems: "center",
                                    gap: "6px",
                                    width: "100%",
                                    children: [!v && (0,
                                    n.jsx)(C.oT, {
                                        show: !0,
                                        color: "success",
                                        className: "dot"
                                    }), (0,
                                    n.jsx)(z.Z, {
                                        fontSize: "13px",
                                        color: "textSubtle",
                                        children: y
                                    }), (0,
                                    n.jsx)(de, {
                                        title: t,
                                        message: i
                                    })]
                                })]
                            }), a ? (0,
                            n.jsxs)(l.Z, {
                                alignItems: "flex-start",
                                children: [!b && (0,
                                n.jsx)(z.Z, {
                                    color: "primary",
                                    fontWeight: 600,
                                    fontSize: "14px",
                                    children: m(p ? "LESS" : "MORE")
                                }), (0,
                                n.jsx)(C.Vh, {
                                    children: p ? (0,
                                    n.jsx)(te.Z, {
                                        color: "primary"
                                    }) : (0,
                                    n.jsx)(ie.Z, {
                                        color: "primary"
                                    })
                                })]
                            }) : null]
                        }), (0,
                        n.jsxs)(C.dk, {
                            ref: w,
                            show: p,
                            elementHeight: f,
                            children: [(0,
                            n.jsx)(z.Z, {
                                children: Z
                            }), a && "" !== a && (0,
                            n.jsx)(C.Fg, {
                                href: a,
                                target: "_blank",
                                children: M
                            })]
                        })]
                    })
                })
            })
        }
        ;
        var ue = e=>{
            let {notifications: t, subscriptionId: i, importantAlertsOnly: s} = e;
            const {t: a} = (0,
            h.Z)()
              , {data: c} = (0,
            o.aT)();
            return 0 === t.length ? (0,
            n.jsx)(C.JB, {
                children: (0,
                n.jsx)(r.ZP, {
                    paddingY: "82px",
                    marginY: "18px",
                    height: "100%",
                    children: (0,
                    n.jsxs)(N.Z, {
                        paddingX: "26px",
                        rowGap: "8px",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        opacity: .6,
                        children: [(0,
                        n.jsx)(r.ZP, {
                            minHeight: "122px",
                            paddingRight: "10px",
                            children: (0,
                            n.jsx)(V(), {
                                src: "/images/notifications/notifications-empty.png",
                                alt: "#",
                                height: 100,
                                width: 100
                            })
                        }), (0,
                        n.jsx)(z.Z, {
                            fontSize: "24px",
                            fontWeight: "600",
                            lineHeight: "120%",
                            textAlign: "center",
                            children: a("Empty")
                        }), (0,
                        n.jsx)(z.Z, {
                            fontSize: "16px",
                            textAlign: "center",
                            color: "textSubtle",
                            children: a("No new notifications at the moment")
                        })]
                    })
                })
            }) : (0,
            n.jsx)(C.qF, {
                children: t.sort(((e,t)=>e.sentAt < t.sentAt ? 1 : -1)).filter((e=>!s || (e.type === S.MM.Alerts || e.type === S.MM.Liquidity))).map((e=>{
                    var t;
                    return (0,
                    n.jsx)(le, {
                        title: e.title,
                        description: e.body,
                        date: e.sentAt,
                        url: e.url,
                        image: null === c || void 0 === c || null === (t = c[e.type]) || void 0 === t ? void 0 : t.imageUrls.md,
                        id: e.id,
                        subscriptionId: i
                    }, e.id)
                }
                ))
            })
        }
        ;
        var pe = e=>{
            let {toggleSettings: t, subscription: i} = e;
            var o;
            const [a,c] = (0,
            s.useState)("All")
              , u = (0,
            Z.TL)()
              , {isMobile: p} = (0,
            d.Z)()
              , g = null === (o = window) || void 0 === o ? void 0 : o.innerHeight
              , {notifications: f, containerRef: x, isLoading: m} = k(null === i || void 0 === i ? void 0 : i.topic)
              , w = (0,
            P.kT)(null === i || void 0 === i ? void 0 : i.topic)
              , {t: v} = (0,
            h.Z)()
              , j = (0,
            s.useCallback)((e=>{
                c(e.value)
            }
            ), [])
              , y = (0,
            s.useMemo)((()=>{
                const e = (e,t)=>t.filter((t=>t.type === e));
                return {
                    active: (t=>{
                        if (!t)
                            return [];
                        switch (a) {
                        case S.MM.Lottery:
                            return e(S.MM.Lottery, t);
                        case S.MM.Prediction:
                            return e(S.MM.Prediction, t);
                        case S.MM.Liquidity:
                            return e(S.MM.Liquidity, t);
                        case S.MM.Farms:
                            return e(S.MM.Farms, t);
                        case S.MM.PriceUpdates:
                            return e(S.MM.PriceUpdates, t);
                        case S.MM.Promotional:
                            return e(S.MM.Promotional, t);
                        case S.MM.Alerts:
                            return ((e,t)=>t.filter((t=>[t.type, S.MM.Liquidity].includes(e))))(S.MM.Alerts, t);
                        case S.MM.TradingReward:
                            return e(S.MM.TradingReward, t);
                        default:
                            return t
                        }
                    }
                    )(f)
                }
            }
            ), [f, a])
              , I = (0,
            s.useCallback)((async()=>{
                (null === i || void 0 === i ? void 0 : i.topic) && u((0,
                M.Ik)({
                    subscriptionId: null === i || void 0 === i ? void 0 : i.topic,
                    importantOnly: !w
                }))
            }
            ), [w, null === i || void 0 === i ? void 0 : i.topic, u]);
            return (0,
            n.jsxs)(r.ZP, {
                width: "100%",
                children: [(0,
                n.jsx)(F, {
                    leftIcon: (0,
                    n.jsx)(R.Z, {
                        tabIndex: -1,
                        variant: "text"
                    }),
                    rightIcon: (0,
                    n.jsx)(R.Z, {
                        tabIndex: -1,
                        variant: "text",
                        onClick: t,
                        children: (0,
                        n.jsx)(K.Z, {
                            color: "primary"
                        })
                    }),
                    text: v("Notifications")
                }), (0,
                n.jsxs)(l.Z, {
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingBottom: "8px",
                    paddingTop: "4px",
                    paddingX: "22px",
                    children: [(0,
                    n.jsx)(r.ZP, {
                        width: "125px",
                        children: (0,
                        n.jsx)(Q.Z, {
                            onOptionChange: j,
                            options: b.vw.filter((e=>e))
                        })
                    }), (0,
                    n.jsxs)(l.Z, {
                        pr: "4px",
                        alignItems: "center",
                        justifyContent: "center",
                        children: [(0,
                        n.jsx)(H.Z, {
                            id: "toggle-expert-mode-button",
                            scale: "sm",
                            checked: w,
                            onChange: I
                        }), (0,
                        n.jsx)(z.Z, {
                            paddingX: "6px",
                            children: v("Important only")
                        }), (0,
                        n.jsx)(ee.s, {
                            text: v("Show only the notifications that belong to your wallet or LP positions"),
                            color: "textSubtle",
                            size: "16px",
                            marginTop: "2px"
                        })]
                    })]
                }), (0,
                n.jsx)(C.Cg, {
                    ref: x,
                    $maxHeight: p ? g - 250 + "px" : "545px",
                    children: f && (null === i || void 0 === i ? void 0 : i.topic) && (0,
                    n.jsx)(ue, {
                        notifications: w ? f : y.active,
                        subscriptionId: i.topic,
                        importantAlertsOnly: w
                    })
                }), (0,
                n.jsx)(l.Z, {
                    padding: "20px",
                    paddingY: "18px",
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    children: m && (0,
                    n.jsx)(U.B, {})
                })]
            })
        }
          , he = i(37198)
          , ge = i(20589)
          , fe = i.n(ge)
          , xe = i(15313).Buffer;
        var me = ()=>{
            const {address: e} = (0,
            a.m)();
            return {
                subscribeToWebPush: async function() {
                    if ("serviceWorker"in navigator)
                        try {
                            const t = await navigator.serviceWorker.register("/service-worker-sw.js");
                            await navigator.serviceWorker.ready;
                            const i = await t.pushManager.getSubscription();
                            i && await i.unsubscribe();
                            const n = xe.from(b.Jt, "hex")
                              , r = xe.from(b.$_, "hex")
                              , o = await t.pushManager.subscribe({
                                userVisibleOnly: !0,
                                applicationServerKey: b.nI
                            })
                              , s = JSON.stringify(o)
                              , a = fe().createCipheriv("aes-256-cbc", n, r);
                            let c = a.update(s, "utf8", "hex");
                            c += a.final("hex"),
                            await fetch(`${f.AU}/subscribe`, {
                                method: "POST",
                                body: JSON.stringify({
                                    subscription: c,
                                    user: e
                                }),
                                headers: {
                                    "Content-Type": "application/json"
                                }
                            })
                        } catch (t) {
                            console.error("Failed to subscribe to push notifications", t)
                        }
                }
            }
        }
          , be = i(50147);
        const we = e=>e instanceof Error && (null === e || void 0 === e ? void 0 : e.message) ? e.message : JSON.stringify(e);
        var ve = function(e) {
            let {...t} = e;
            const [i,r] = (0,
            s.useState)(!1)
              , c = (0,
            g.p)()
              , {t: d} = (0,
            h.Z)()
              , {address: u} = (0,
            a.m)()
              , {signMessageAsync: p} = (0,
            be.Q)()
              , [f,x] = (0,
            P.GA)()
              , {data: m} = (0,
            o.L7)()
              , {isRegistered: b} = (0,
            o.AW)(`eip155:1:${u}`)
              , {subscribe: w, isLoading: v} = (0,
            o.Q3)()
              , {subscribeToWebPush: j} = me()
              , {data: y} = (0,
            o.mU)()
              , {prepareRegistration: Z} = (0,
            o.us)()
              , {register: M} = (0,
            o.mr)()
              , k = (0,
            s.useCallback)((async()=>{
                r(!0);
                try {
                    const {message: e, registerParams: t} = await Z()
                      , i = await p({
                        message: e
                    });
                    await M({
                        registerParams: t,
                        signature: i
                    })
                } catch (e) {
                    const t = we(e);
                    c.toastError(d("Registration Error"), t)
                } finally {
                    r(!1)
                }
            }
            ), [d, p, Z, M, c])
              , C = (0,
            s.useCallback)((async()=>{
                try {
                    b && (await w(),
                    await j())
                } catch (e) {
                    const t = we(e);
                    c.toastError(d("Subscription Error"), t)
                }
            }
            ), [d, c, w, b, j])
              , S = (0,
            s.useCallback)((async e=>{
                e.stopPropagation(),
                f || x(!0),
                b ? C() : k()
            }
            ), [C, k, b, x, f])
              , I = Boolean(m)
              , E = Boolean(y)
              , L = v || i
              , N = ((e,t,i,n)=>{
                const r = Boolean(!e)
                  , o = Boolean(e && !t)
                  , s = Boolean(t && !i);
                return n(r ? "Enable Notifications" : o ? "Sign In With Wallet" : s ? "Subscribe To PancakeSwap" : "Enable Notifications")
            }
            )(Boolean(f), b, E, d);
            return u ? (0,
            n.jsx)(A.Tz, {
                gap: "md",
                width: "100%",
                children: (0,
                n.jsx)(B.A, {
                    variant: "primary",
                    onClick: S,
                    isLoading: L,
                    style: {
                        ...t
                    },
                    children: (0,
                    n.jsxs)(l.Z, {
                        alignItems: "center",
                        children: [(0,
                        n.jsx)(z.Z, {
                            px: "4px",
                            fontWeight: "bold",
                            color: "white",
                            children: N
                        }), L ? (0,
                        n.jsx)(U.B, {
                            stroke: "white"
                        }) : null]
                    })
                })
            }) : (0,
            n.jsx)(A.Tz, {
                gap: "md",
                width: "100%",
                children: (0,
                n.jsx)(he.Z, {
                    style: {
                        ...t
                    },
                    disabled: !I
                })
            })
        };
        var je = e=>{
            let {isRegistered: t} = e;
            const {t: i} = (0,
            h.Z)()
              , {isMobile: o} = (0,
            d.Z)()
              , s = ((e,t)=>{
                let i = t("Finally, subscribe to notifications to stay informed on the latest news and updates that PancakeSwap has to offer.");
                return e || (i = t("Get started with notifications from PancakeSwap. First authorize notifications by signing in your wallet")),
                i
            }
            )(Boolean(t), i);
            return (0,
            n.jsxs)(l.Z, {
                width: "100%",
                height: o ? .9 * window.document.documentElement.clientHeight : "100%",
                flexDirection: "column",
                justifyContent: "space-between",
                children: [(0,
                n.jsxs)("div", {
                    style: {
                        padding: "24px",
                        height: "90%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center"
                    },
                    children: [(0,
                    n.jsx)(r.ZP, {
                        pl: "40px",
                        pb: "24px",
                        pt: "48px",
                        children: (0,
                        n.jsx)(V(), {
                            src: "/images/notifications/welcome-notification-bell.png",
                            alt: "#",
                            height: 185,
                            width: 270
                        })
                    }), (0,
                    n.jsxs)(N.Z, {
                        rowGap: "12px",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        children: [(0,
                        n.jsx)(z.Z, {
                            fontSize: "24px",
                            fontWeight: "600",
                            lineHeight: "120%",
                            textAlign: "center",
                            children: i("Notifications From PancakeSwap")
                        }), (0,
                        n.jsx)(z.Z, {
                            fontSize: "16px",
                            textAlign: "center",
                            color: "textSubtle",
                            children: s
                        })]
                    })]
                }), (0,
                n.jsx)(r.ZP, {
                    margin: "20px",
                    height: "10%",
                    children: (0,
                    n.jsx)(ve, {
                        height: "50px"
                    })
                })]
            })
        }
        ;
        const ye = ()=>{
            document.body.style.overflowY = "scroll",
            document.body.style.position = "fixed",
            document.body.style.width = "100%"
        }
          , Ze = ()=>{
            document.body.style.overflowY = "auto",
            document.body.style.position = "static",
            document.body.style.width = "auto"
        }
        ;
        (0,
        o.z3)({
            projectId: "e542ff314e26ff34de2d4fba98db70bb",
            domain: b.wz,
            allApps: !0
        });
        const Me = (0,
        s.memo)((e=>{
            let {isRegistered: t} = e;
            const [i,a] = (0,
            s.useState)(S.Wo.OnboardView)
              , {data: c} = (0,
            o.mU)()
              , d = Boolean(c)
              , l = (0,
            s.useCallback)((e=>{
                e.stopPropagation(),
                i === S.Wo.OnboardView || i === S.Wo.SettingsView ? a(S.Wo.NotificationView) : a(S.Wo.SettingsView)
            }
            ), [a, i]);
            return (0,
            s.useEffect)((()=>{
                d || a(S.Wo.OnboardView),
                d && a(S.Wo.NotificationView)
            }
            ), [d]),
            (0,
            n.jsx)(L, {
                viewIndex: i,
                subscriptionId: null === c || void 0 === c ? void 0 : c.topic,
                children: (0,
                n.jsx)(r.ZP, {
                    tabIndex: -1,
                    onMouseEnter: ye,
                    onMouseLeave: Ze,
                    children: (0,
                    n.jsxs)(C.$G, {
                        $viewIndex: i,
                        children: [(0,
                        n.jsx)(je, {
                            isReady: d,
                            isRegistered: t
                        }), (0,
                        n.jsx)(pe, {
                            toggleSettings: l,
                            subscription: c
                        }), (0,
                        n.jsx)(G, {
                            toggleSettings: l
                        })]
                    })
                })
            })
        }
        ));
        var Pe = ()=>{
            const {address: e} = (0,
            a.m)()
              , {data: t} = (0,
            o.L7)()
              , {data: i, isRegistered: r} = (0,
            o.AW)(`eip155:1:${e}`);
            return Boolean(t) && i ? (0,
            n.jsx)(Me, {
                isRegistered: r
            }) : null
        }
    },
    37272: function(e, t, i) {
        "use strict";
        i.d(t, {
            $G: function() {
                return l
            },
            Cg: function() {
                return x
            },
            Fg: function() {
                return j
            },
            H9: function() {
                return y
            },
            JB: function() {
                return g
            },
            Vh: function() {
                return v
            },
            Zo: function() {
                return m
            },
            dk: function() {
                return w
            },
            oT: function() {
                return Z
            },
            qF: function() {
                return f
            },
            r6: function() {
                return u
            },
            v2: function() {
                return a
            },
            xB: function() {
                return d
            },
            xR: function() {
                return c
            },
            y3: function() {
                return b
            }
        });
        var n = i(20051)
          , r = i(11297)
          , o = i.n(r)
          , s = i(97843);
        const a = s.ZP.div.withConfig({
            componentId: "sc-34f86fd5-0"
        })(["background-color:", ";border:1px solid ", ";border-radius:24px;pointer-events:auto;width:400px;overflow:hidden;position:relative;visibility:visible;z-index:1001;", " ", ""], (e=>{
            let {theme: t} = e;
            return t.card.background
        }
        ), (e=>{
            let {theme: t} = e;
            return t.colors.cardBorder
        }
        ), (e=>{
            let {$isOpen: t} = e;
            return !t && "\n    pointer-events: none;\n    visibility: hidden;\n  "
        }
        ), (e=>{
            let {$overrideHeight: t} = e;
            return t && "\n    height: 520px;\n  "
        }
        ))
          , c = (0,
        s.ZP)(n.Z).withConfig({
            componentId: "sc-34f86fd5-1"
        })(["flex-direction:column;height:auto;", "{max-height:90vh;}", "{max-height:none;}"], (e=>{
            let {theme: t} = e;
            return t.mediaQueries.xs
        }
        ), (e=>{
            let {theme: t} = e;
            return t.mediaQueries.md
        }
        ))
          , d = s.ZP.div.withConfig({
            componentId: "sc-34f86fd5-2"
        })(["align-items:center;background:transparent;display:flex;justify-content:space-between;padding-top:12px;padding-left:12px;padding-right:12px;width:100%;", "{background:", ";}"], (e=>{
            let {theme: t} = e;
            return t.mediaQueries.md
        }
        ), (e=>{
            let {background: t} = e;
            return t || "transparent"
        }
        ))
          , l = (s.ZP.div.withConfig({
            componentId: "sc-34f86fd5-3"
        })(["display:flex;position:relative;overflow:hidden;width:200%;height:200%;min-height:450px;"]),
        s.ZP.div.withConfig({
            componentId: "sc-34f86fd5-4"
        })(["display:flex;width:300%;transition:transform 300ms ease-in-out;transform:translateX(", ");"], (e=>{
            let {$viewIndex: t} = e;
            return 0 === t ? "0%" : 1 === t ? "-33.33%" : "-66.66%"
        }
        )))
          , u = (0,
        s.ZP)(n.Z).withConfig({
            componentId: "sc-34f86fd5-5"
        })(["align-items:center;flex:1;justify-content:center;"])
          , p = (0,
        s.F4)(["  0%{right:-150%;}100%{right:0%;}"])
          , h = ((0,
        s.F4)(["  0%{right:0%;}100%{right:-150%;}"]),
        (0,
        s.F4)(["  0%{right:150%;}100%{right:0%;}"]))
          , g = s.ZP.div.withConfig({
            componentId: "sc-34f86fd5-6"
        })(["animation-fill-mode:forwards;position:relative;display:flex;align-items:center;justify-content:center;height:390px;animation:", " 0.65s;"], (()=>h))
          , f = s.ZP.div.withConfig({
            componentId: "sc-34f86fd5-7"
        })(["animation-fill-mode:forwards;position:relative;"])
          , x = s.ZP.div.withConfig({
            componentId: "sc-34f86fd5-8"
        })(["height:", ";max-height:", ";overflow-x:hidden;overflow-y:auto;&::-webkit-scrollbar{width:6px;}&::-webkit-scrollbar-thumb{background:", ";border-radius:2px;}&::-webkit-scrollbar-track{box-shadow:inset 0 0 5px ", ";border-radius:10px;}"], (e=>{
            let {$maxHeight: t} = e;
            return t
        }
        ), (e=>{
            let {$maxHeight: t} = e;
            return t
        }
        ), (e=>{
            let {theme: t} = e;
            return t.colors.cardBorder
        }
        ), (e=>{
            let {theme: t} = e;
            return t.colors.input
        }
        ))
          , m = s.ZP.div.withConfig({
            componentId: "sc-34f86fd5-9"
        })(["animation-fill-mode:forwards;display:flex;position:relative;overflow:hidden;padding:20px 24px 20px 24px;animation:", " 0.65s;transition:transform 0.3s;background-color:transparent;width:100%;&:hover{cursor:pointer;background-color:", ";}transition:background-color 0.15s ease;border-bottom:1.2px solid ", ";"], (()=>p), (e=>{
            let {theme: t} = e;
            return t.isDark ? "#372F46" : t.colors.background
        }
        ), (e=>{
            let {theme: t} = e;
            return t.colors.cardBorder
        }
        ))
          , b = s.ZP.div.withConfig({
            componentId: "sc-34f86fd5-10"
        })(["display:flex;align-items:flex-start;overflow:hidden;width:100%;"])
          , w = s.ZP.div.withConfig({
            componentId: "sc-34f86fd5-11"
        })(["overflow:hidden;max-width:100%;margin-top:8px;word-break:break-word;transition:max-height 0.33s ease-in-out;max-height:", ";"], (e=>{
            let {show: t, elementHeight: i} = e;
            return t ? `${i}px` : "37px"
        }
        ))
          , v = s.ZP.div.withConfig({
            componentId: "sc-34f86fd5-12"
        })(["pointer-events:none;"])
          , j = (0,
        s.ZP)(o()).withConfig({
            componentId: "sc-34f86fd5-13"
        })(["max-height:45px;height:45px;width:100%;border-radius:16px;background:", ";color:", ";font-weight:bold;display:", ";margin-top:12px;justify-content:center;align-items:center;"], (e=>{
            let {theme: t} = e;
            return `${t.colors.primary}`
        }
        ), (e=>{
            let {theme: t} = e;
            return `${t.colors.background}`
        }
        ), (e=>{
            let {hidden: t} = e;
            return "" + (t ? "none" : "flex")
        }
        ))
          , y = (0,
        s.ZP)(n.Z).withConfig({
            componentId: "sc-34f86fd5-14"
        })(["position:relative;padding-right:16px;padding-left:6px;cursor:pointer;justify-content:center;align-items:center;svg{color:", ";width:30px;}.notification-badge{position:absolute;bottom:45%;left:40%;width:21px;font-size:16px;height:21px;border:2px solid ", ";border-radius:50%;background:", ";display:flex;align-items:center;justify-content:center;color:white;font-weight:bold;}"], (e=>{
            let {theme: t} = e;
            return t.colors.textSubtle
        }
        ), (e=>{
            let {theme: t} = e;
            return t.colors.backgroundAlt
        }
        ), (e=>{
            let {theme: t} = e;
            return t.colors.success
        }
        ))
          , Z = (0,
        s.ZP)("span").withConfig({
            shouldForwardProp: e=>!["show"].includes(e)
        }).withConfig({
            componentId: "sc-34f86fd5-15"
        })(["display:", ";width:8px;height:8px;pointer-events:none;border-radius:50%;background-color:", ";"], (e=>{
            let {show: t} = e;
            return t ? "inline-flex" : "none"
        }
        ), (e=>{
            let {theme: t, color: i} = e;
            return t.colors[i]
        }
        ))
    },
    76014: function(e, t, i) {
        "use strict";
        var n, r, o, s, a, c;
        i.d(t, {
            FN: function() {
                return n
            },
            MM: function() {
                return o
            },
            Wo: function() {
                return s
            }
        }),
        function(e) {
            e.NotificationsEnabled = "NotificationsEnabled",
            e.NotificationsEnabledError = "NotificationsEnabledError",
            e.SubscriptionRequestError = "SubscriptionRequestError",
            e.PreferencesUpdated = "PreferencesUpdated",
            e.PreferencesError = "PreferencesError",
            e.UnsubscribeError = "UnsubscribeError",
            e.Unsubscribed = "Unsubscribed"
        }(n || (n = {})),
        function(e) {
            e.Lottery = "b42403b3-2712-4e1e-8cc7-cb2d9c1350b4",
            e.Prediction = "52816341-59cd-49e2-8f3b-d15bf2c107fb",
            e.Liquidity = "02879833-eb9c-4cc3-8760-f762ab218ca6",
            e.Farms = "cf41e730-22d8-42d6-a7d5-1e79b6f7820b",
            e.PriceUpdates = "627396d7-23ba-4a82-b83d-2aa6ba1110e6",
            e.Promotional = "87393202-5cd7-4a0b-a672-bd4eded25e7b",
            e.Alerts = "069d1195-50a0-47b0-81a6-2df3024831ba",
            e.TradingReward = "e0a3aeb3-3ec2-496d-b6c7-343185de6aca"
        }(r || (r = {})),
        function(e) {
            e.Lottery = "b42403b3-2712-4e1e-8cc7-cb2d9c1350b4",
            e.Prediction = "52816341-59cd-49e2-8f3b-d15bf2c107fb",
            e.Liquidity = "02879833-eb9c-4cc3-8760-f762ab218ca6",
            e.Farms = "cf41e730-22d8-42d6-a7d5-1e79b6f7820b",
            e.PriceUpdates = "627396d7-23ba-4a82-b83d-2aa6ba1110e6",
            e.Promotional = "87393202-5cd7-4a0b-a672-bd4eded25e7b",
            e.Alerts = "069d1195-50a0-47b0-81a6-2df3024831ba",
            e.TradingReward = "e0a3aeb3-3ec2-496d-b6c7-343185de6aca"
        }(o || (o = {})),
        function(e) {
            e[e.OnboardView = 0] = "OnboardView",
            e[e.NotificationView = 1] = "NotificationView",
            e[e.SettingsView = 2] = "SettingsView"
        }(s || (s = {})),
        function(e) {
            e[e.onBoarding = 0] = "onBoarding",
            e[e.Notifications = 1] = "Notifications",
            e[e.Settings = 2] = "Settings"
        }(a || (a = {})),
        function(e) {
            e.OnBoardNotification = "OnBoardNotification",
            e.newLpNotification = "newLpNotification"
        }(c || (c = {}))
    },
    41528: function(e, t, i) {
        "use strict";
        i.d(t, {
            O: function() {
                return n
            }
        });
        const n = (e,t)=>{
            var i, n;
            return t instanceof Error && (null === t || void 0 === t ? void 0 : t.message) ? null === (i = e.message) || void 0 === i ? void 0 : i.call(e, t.message) : null === (n = e.message) || void 0 === n ? void 0 : n.call(e, JSON.stringify(t))
        }
    },
    16207: function(e, t, i) {
        "use strict";
        i.d(t, {
            B: function() {
                return a
            }
        });
        var n = i(97458)
          , r = i(97843);
        const o = (0,
        r.F4)(["from{transform:rotate(0deg);}to{transform:rotate(360deg);}"])
          , s = r.zo.svg.withConfig({
            componentId: "sc-69f91b5c-0"
        })(["animation:2s ", " linear infinite;height:", ";width:", ";path{stroke:", ";}"], o, (e=>{
            let {size: t} = e;
            return t
        }
        ), (e=>{
            let {size: t} = e;
            return t
        }
        ), (e=>{
            let {stroke: t, theme: i} = e;
            return null !== t && void 0 !== t ? t : i.colors.primary
        }
        ));
        function a(e) {
            let {size: t="16px", stroke: i, ...r} = e;
            return (0,
            n.jsx)(s, {
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                size: t,
                stroke: i,
                ...r,
                children: (0,
                n.jsx)("path", {
                    d: "M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 9.27455 20.9097 6.80375 19.1414 5",
                    strokeWidth: "2.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                })
            })
        }
    },
    43345: function(e, t, i) {
        "use strict";
        var n = i(97458)
          , r = i(52983)
          , o = i(97843)
          , s = i(43431)
          , a = i(2211)
          , c = i(24276)
          , d = i(52341);
        const l = o.zo.div.withConfig({
            componentId: "sc-8be0595a-0"
        })(["width:100%;height:40px;display:flex;align-items:center;padding:0px 16px;box-shadow:", ";border:1px solid ", ";border-radius:16px;background:", ";transition:border-radius 0.15s;"], (e=>{
            let {theme: t} = e;
            return t.shadows.inset
        }
        ), (e=>{
            let {theme: t} = e;
            return t.colors.inputSecondary
        }
        ), (e=>{
            let {theme: t} = e;
            return t.colors.input
        }
        ))
          , u = o.zo.div.withConfig({
            componentId: "sc-8be0595a-1"
        })(["min-width:100px;height:0;position:absolute;overflow:hidden;background:", ";z-index:", ";transition:transform 0.15s,opacity 0.15s;transform:scaleY(0);transform-origin:top;opacity:0;width:100%;"], (e=>{
            let {theme: t} = e;
            return t.colors.input
        }
        ), (e=>{
            let {theme: t} = e;
            return t.zIndices.dropdown
        }
        ))
          , p = (0,
        o.zo)(s.ZP).withConfig({
            componentId: "sc-8be0595a-2"
        })(["cursor:pointer;width:100%;position:relative;background:", ";border-radius:16px;height:40px;min-width:125px;user-select:none;z-index:20;", " svg{position:absolute;right:16px;top:50%;transform:translateY(-50%);}"], (e=>{
            let {theme: t} = e;
            return t.colors.input
        }
        ), (e=>e.isOpen && (0,
        o.iv)(["", "{border-bottom:1px solid ", ";box-shadow:", ";border-radius:16px 16px 0 0;}", "{height:auto;transform:scaleY(1);opacity:1;border:1px solid ", ";border-top-width:0;border-radius:0 0 16px 16px;box-shadow:", ";}"], l, (e=>{
            let {theme: t} = e;
            return t.colors.inputSecondary
        }
        ), (e=>{
            let {theme: t} = e;
            return t.tooltip.boxShadow
        }
        ), u, (e=>{
            let {theme: t} = e;
            return t.colors.inputSecondary
        }
        ), (e=>{
            let {theme: t} = e;
            return t.tooltip.boxShadow
        }
        ))))
          , h = o.zo.ul.withConfig({
            componentId: "sc-8be0595a-3"
        })(["padding:0;margin:0;box-sizing:border-box;z-index:", ";"], (e=>{
            let {theme: t} = e;
            return t.zIndices.dropdown
        }
        ))
          , g = o.zo.li.withConfig({
            componentId: "sc-8be0595a-4"
        })(["display:flex;list-style:none;padding:8px 16px;&:hover{background:", ";}"], (e=>{
            let {theme: t} = e;
            return t.colors.inputSecondary
        }
        ));
        t.Z = e=>{
            let {options: t, onOptionChange: i, defaultOptionIndex: o=0, placeHolderText: s, ...f} = e;
            var x, m, b;
            const [w,v] = (0,
            r.useState)(!1)
              , [j,y] = (0,
            r.useState)(!1)
              , [Z,M] = (0,
            r.useState)(o)
              , P = e=>{
                v(!w),
                e.stopPropagation()
            }
            ;
            return (0,
            r.useEffect)((()=>{
                const e = ()=>{
                    v(!1)
                }
                ;
                return document.addEventListener("click", e),
                ()=>{
                    document.removeEventListener("click", e)
                }
            }
            ), []),
            (0,
            r.useEffect)((()=>{
                o && (M(o - 1),
                y(!0))
            }
            ), [o]),
            (0,
            n.jsxs)(p, {
                isOpen: w,
                ...f,
                children: [(0,
                n.jsxs)(l, {
                    onClick: P,
                    children: [(null === t || void 0 === t || null === (x = t[Z]) || void 0 === x ? void 0 : x.imageUrl) && (0,
                    n.jsx)(a.Z, {
                        mr: "4px",
                        width: 24,
                        height: 24,
                        alt: "picked-image",
                        style: {
                            borderRadius: "50%",
                            overflow: "hidden"
                        },
                        src: null === t || void 0 === t || null === (m = t[Z]) || void 0 === m ? void 0 : m.imageUrl
                    }), (0,
                    n.jsx)(d.Z, {
                        color: !j && s ? "text" : void 0,
                        children: !j && s ? s : null === (b = t[Z]) || void 0 === b ? void 0 : b.label
                    })]
                }), (0,
                n.jsx)(c.Z, {
                    color: "text",
                    onClick: P
                }), (0,
                n.jsx)(u, {
                    children: (0,
                    n.jsx)(h, {
                        children: t.map(((e,r)=>{
                            return s || r !== Z ? (0,
                            n.jsxs)(g, {
                                onClick: (o = r,
                                e=>{
                                    e.stopPropagation(),
                                    M(o),
                                    v(!1),
                                    y(!0),
                                    i && i(t[o])
                                }
                                ),
                                children: [(null === e || void 0 === e ? void 0 : e.imageUrl) && (0,
                                n.jsx)(a.Z, {
                                    mr: "4px",
                                    width: 24,
                                    height: 24,
                                    alt: `picked-image-${e.label}`,
                                    style: {
                                        borderRadius: "50%",
                                        overflow: "hidden"
                                    },
                                    src: e.imageUrl
                                }), (0,
                                n.jsx)(d.Z, {
                                    children: e.label
                                })]
                            }, e.label) : null;
                            var o
                        }
                        ))
                    })
                })]
            })
        }
    },
    24276: function(e, t, i) {
        "use strict";
        var n = i(97458)
          , r = (i(52983),
        i(58685));
        t.Z = e=>(0,
        n.jsx)(r.Z, {
            viewBox: "0 0 24 24",
            ...e,
            children: (0,
            n.jsx)("path", {
                d: "M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z"
            })
        })
    },
    714: function(e, t, i) {
        "use strict";
        var n = i(97458)
          , r = (i(52983),
        i(58685));
        t.Z = e=>(0,
        n.jsx)(r.Z, {
            viewBox: "0 0 24 24",
            ...e,
            children: (0,
            n.jsx)("path", {
                d: "M8.71005 12.29L11.3001 9.69997C11.6901 9.30997 12.3201 9.30997 12.7101 9.69997L15.3001 12.29C15.9301 12.92 15.4801 14 14.5901 14H9.41005C8.52005 14 8.08005 12.92 8.71005 12.29Z"
            })
        })
    },
    17275: function(e, t, i) {
        "use strict";
        var n = i(97458)
          , r = (i(52983),
        i(58685));
        t.Z = e=>(0,
        n.jsx)(r.Z, {
            viewBox: "0 0 24 24",
            ...e,
            children: (0,
            n.jsx)("path", {
                d: "M8.11997 14.7101L12 10.8301L15.88 14.7101C16.27 15.1001 16.9 15.1001 17.29 14.7101C17.68 14.3201 17.68 13.6901 17.29 13.3001L12.7 8.7101C12.31 8.3201 11.68 8.3201 11.29 8.7101L6.69997 13.3001C6.30997 13.6901 6.30997 14.3201 6.69997 14.7101C7.08997 15.0901 7.72997 15.1001 8.11997 14.7101Z"
            })
        })
    },
    17523: function(e, t, i) {
        "use strict";
        var n = i(97458)
          , r = (i(52983),
        i(58685));
        t.Z = e=>{
            var t;
            return (0,
            n.jsxs)(r.Z, {
                viewBox: "0 0 24 24",
                ...e,
                children: [(0,
                n.jsx)("g", {
                    clipPath: "url(#clip0_108_5436)",
                    children: (0,
                    n.jsx)("path", {
                        d: "M12.0001 22C13.1001 22 14.0001 21.1 14.0001 20H10.0001C10.0001 21.1 10.8901 22 12.0001 22ZM18.0001 16V11C18.0001 7.93 16.3601 5.36 13.5001 4.68V4C13.5001 3.17 12.8301 2.5 12.0001 2.5C11.1701 2.5 10.5001 3.17 10.5001 4V4.68C7.63005 5.36 6.00005 7.92 6.00005 11V16L4.71005 17.29C4.08005 17.92 4.52005 19 5.41005 19H18.5801C19.4701 19 19.9201 17.92 19.2901 17.29L18.0001 16Z",
                        fill: null !== (t = e.color) && void 0 !== t ? t : "7A6EAA"
                    })
                }), (0,
                n.jsx)("defs", {
                    children: (0,
                    n.jsx)("clipPath", {
                        id: "clip0_108_5436",
                        children: (0,
                        n.jsx)("rect", {
                            width: "24",
                            height: "24",
                            fill: "white"
                        })
                    })
                })]
            })
        }
    },
    20589: function() {},
    47467: function() {},
    60661: function() {},
    73804: function() {},
    39362: function() {}
}]);
