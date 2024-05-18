(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[5501], {
    93710: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.CoinbaseWalletSDK = void 0;
        const n = r(14033)
          , s = r(71355)
          , i = r(93634)
          , o = r(5648)
          , a = r(93549)
          , c = r(41660)
          , l = r(5549)
          , u = r(72672)
          , d = r(25752)
          , h = r(17813)
          , f = r(76570);
        class p {
            constructor(e) {
                var t, r, n;
                this._appName = "",
                this._appLogoUrl = null,
                this._relay = null,
                this._relayEventManager = null;
                const a = e.linkAPIUrl || s.LINK_API_URL;
                "undefined" === typeof e.overrideIsMetaMask ? this._overrideIsMetaMask = !1 : this._overrideIsMetaMask = e.overrideIsMetaMask,
                this._overrideIsCoinbaseWallet = null === (t = e.overrideIsCoinbaseWallet) || void 0 === t || t,
                this._overrideIsCoinbaseBrowser = null !== (r = e.overrideIsCoinbaseBrowser) && void 0 !== r && r,
                this._diagnosticLogger = e.diagnosticLogger,
                this._reloadOnDisconnect = null === (n = e.reloadOnDisconnect) || void 0 === n || n;
                const g = new URL(a)
                  , m = `${g.protocol}//${g.host}`;
                if (this._storage = new o.ScopedLocalStorage(`-walletlink:${m}`),
                this._storage.setItem("version", p.VERSION),
                this.walletExtension || this.coinbaseBrowser)
                    return;
                this._relayEventManager = new u.RelayEventManager;
                const _ = (0,
                i.isMobileWeb)()
                  , b = e.uiConstructor || (e=>_ ? new l.MobileRelayUI(e) : new d.WalletLinkRelayUI(e))
                  , y = {
                    linkAPIUrl: a,
                    version: f.LIB_VERSION,
                    darkMode: !!e.darkMode,
                    uiConstructor: b,
                    storage: this._storage,
                    relayEventManager: this._relayEventManager,
                    diagnosticLogger: this._diagnosticLogger,
                    reloadOnDisconnect: this._reloadOnDisconnect,
                    enableMobileWalletLink: e.enableMobileWalletLink
                };
                this._relay = _ ? new c.MobileRelay(y) : new h.WalletLinkRelay(y),
                this.setAppInfo(e.appName, e.appLogoUrl),
                e.headlessMode || this._relay.attachUI()
            }
            makeWeb3Provider(e="", t=1) {
                const r = this.walletExtension;
                if (r)
                    return this.isCipherProvider(r) || r.setProviderInfo(e, t),
                    !1 === this._reloadOnDisconnect && "function" === typeof r.disableReloadOnDisconnect && r.disableReloadOnDisconnect(),
                    r;
                const n = this.coinbaseBrowser;
                if (n)
                    return n;
                const s = this._relay;
                if (!s || !this._relayEventManager || !this._storage)
                    throw new Error("Relay not initialized, should never happen");
                return e || s.setConnectDisabled(!0),
                new a.CoinbaseWalletProvider({
                    relayProvider: ()=>Promise.resolve(s),
                    relayEventManager: this._relayEventManager,
                    storage: this._storage,
                    jsonRpcUrl: e,
                    chainId: t,
                    qrUrl: this.getQrUrl(),
                    diagnosticLogger: this._diagnosticLogger,
                    overrideIsMetaMask: this._overrideIsMetaMask,
                    overrideIsCoinbaseWallet: this._overrideIsCoinbaseWallet,
                    overrideIsCoinbaseBrowser: this._overrideIsCoinbaseBrowser
                })
            }
            setAppInfo(e, t) {
                var r;
                this._appName = e || "DApp",
                this._appLogoUrl = t || (0,
                i.getFavicon)();
                const n = this.walletExtension;
                n ? this.isCipherProvider(n) || n.setAppInfo(this._appName, this._appLogoUrl) : null === (r = this._relay) || void 0 === r || r.setAppInfo(this._appName, this._appLogoUrl)
            }
            disconnect() {
                var e;
                const t = null === this || void 0 === this ? void 0 : this.walletExtension;
                t ? t.close() : null === (e = this._relay) || void 0 === e || e.resetAndReload()
            }
            getQrUrl() {
                var e, t;
                return null !== (t = null === (e = this._relay) || void 0 === e ? void 0 : e.getQRCodeUrl()) && void 0 !== t ? t : null
            }
            getCoinbaseWalletLogo(e, t=240) {
                return (0,
                n.walletLogo)(e, t)
            }
            get walletExtension() {
                var e;
                return null !== (e = window.coinbaseWalletExtension) && void 0 !== e ? e : window.walletLinkExtension
            }
            get coinbaseBrowser() {
                var e, t;
                try {
                    const r = null !== (e = window.ethereum) && void 0 !== e ? e : null === (t = window.top) || void 0 === t ? void 0 : t.ethereum;
                    if (!r)
                        return;
                    return "isCoinbaseBrowser"in r && r.isCoinbaseBrowser ? r : void 0
                } catch (r) {
                    return
                }
            }
            isCipherProvider(e) {
                return "boolean" === typeof e.isCipher && e.isCipher
            }
        }
        t.CoinbaseWalletSDK = p,
        p.VERSION = f.LIB_VERSION
    },
    14033: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.walletLogo = void 0;
        t.walletLogo = (e,t)=>{
            let r;
            switch (e) {
            case "standard":
            default:
                return r = t,
                `data:image/svg+xml,%3Csvg width='${t}' height='${r}' viewBox='0 0 1024 1024' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Crect width='1024' height='1024' fill='%230052FF'/%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M152 512C152 710.823 313.177 872 512 872C710.823 872 872 710.823 872 512C872 313.177 710.823 152 512 152C313.177 152 152 313.177 152 512ZM420 396C406.745 396 396 406.745 396 420V604C396 617.255 406.745 628 420 628H604C617.255 628 628 617.255 628 604V420C628 406.745 617.255 396 604 396H420Z' fill='white'/%3E %3C/svg%3E `;
            case "circle":
                return r = t,
                `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${t}' height='${r}' viewBox='0 0 999.81 999.81'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052fe;%7D.cls-2%7Bfill:%23fefefe;%7D.cls-3%7Bfill:%230152fe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M655-115.9h56c.83,1.59,2.36.88,3.56,1a478,478,0,0,1,75.06,10.42C891.4-81.76,978.33-32.58,1049.19,44q116.7,126,131.94,297.61c.38,4.14-.34,8.53,1.78,12.45v59c-1.58.84-.91,2.35-1,3.56a482.05,482.05,0,0,1-10.38,74.05c-24,106.72-76.64,196.76-158.83,268.93s-178.18,112.82-287.2,122.6c-4.83.43-9.86-.25-14.51,1.77H654c-1-1.68-2.69-.91-4.06-1a496.89,496.89,0,0,1-105.9-18.59c-93.54-27.42-172.78-77.59-236.91-150.94Q199.34,590.1,184.87,426.58c-.47-5.19.25-10.56-1.77-15.59V355c1.68-1,.91-2.7,1-4.06a498.12,498.12,0,0,1,18.58-105.9c26-88.75,72.64-164.9,140.6-227.57q126-116.27,297.21-131.61C645.32-114.57,650.35-113.88,655-115.9Zm377.92,500c0-192.44-156.31-349.49-347.56-350.15-194.13-.68-350.94,155.13-352.29,347.42-1.37,194.55,155.51,352.1,348.56,352.47C876.15,734.23,1032.93,577.84,1032.93,384.11Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-2' d='M1032.93,384.11c0,193.73-156.78,350.12-351.29,349.74-193-.37-349.93-157.92-348.56-352.47C334.43,189.09,491.24,33.28,685.37,34,876.62,34.62,1032.94,191.67,1032.93,384.11ZM683,496.81q43.74,0,87.48,0c15.55,0,25.32-9.72,25.33-25.21q0-87.48,0-175c0-15.83-9.68-25.46-25.59-25.46H595.77c-15.88,0-25.57,9.64-25.58,25.46q0,87.23,0,174.45c0,16.18,9.59,25.7,25.84,25.71Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-3' d='M683,496.81H596c-16.25,0-25.84-9.53-25.84-25.71q0-87.23,0-174.45c0-15.82,9.7-25.46,25.58-25.46H770.22c15.91,0,25.59,9.63,25.59,25.46q0,87.47,0,175c0,15.49-9.78,25.2-25.33,25.21Q726.74,496.84,683,496.81Z' transform='translate(-183.1 115.9)'/%3E%3C/svg%3E`;
            case "text":
                return r = (.1 * t).toFixed(2),
                `data:image/svg+xml,%3Csvg width='${t}' height='${r}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E`;
            case "textWithLogo":
                return r = (.25 * t).toFixed(2),
                `data:image/svg+xml,%3Csvg width='${t}' height='${r}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E`;
            case "textLight":
                return r = (.1 * t).toFixed(2),
                `data:image/svg+xml,%3Csvg width='${t}' height='${r}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E`;
            case "textWithLogoLight":
                return r = (.25 * t).toFixed(2),
                `data:image/svg+xml,%3Csvg width='${t}' height='${r}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E`
            }
        }
    },
    71355: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.LINK_API_URL = void 0,
        t.LINK_API_URL = "https://www.walletlink.org"
    },
    57025: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.errorValues = t.standardErrorCodes = void 0,
        t.standardErrorCodes = {
            rpc: {
                invalidInput: -32e3,
                resourceNotFound: -32001,
                resourceUnavailable: -32002,
                transactionRejected: -32003,
                methodNotSupported: -32004,
                limitExceeded: -32005,
                parse: -32700,
                invalidRequest: -32600,
                methodNotFound: -32601,
                invalidParams: -32602,
                internal: -32603
            },
            provider: {
                userRejectedRequest: 4001,
                unauthorized: 4100,
                unsupportedMethod: 4200,
                disconnected: 4900,
                chainDisconnected: 4901,
                unsupportedChain: 4902
            }
        },
        t.errorValues = {
            "-32700": {
                standard: "JSON RPC 2.0",
                message: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
            },
            "-32600": {
                standard: "JSON RPC 2.0",
                message: "The JSON sent is not a valid Request object."
            },
            "-32601": {
                standard: "JSON RPC 2.0",
                message: "The method does not exist / is not available."
            },
            "-32602": {
                standard: "JSON RPC 2.0",
                message: "Invalid method parameter(s)."
            },
            "-32603": {
                standard: "JSON RPC 2.0",
                message: "Internal JSON-RPC error."
            },
            "-32000": {
                standard: "EIP-1474",
                message: "Invalid input."
            },
            "-32001": {
                standard: "EIP-1474",
                message: "Resource not found."
            },
            "-32002": {
                standard: "EIP-1474",
                message: "Resource unavailable."
            },
            "-32003": {
                standard: "EIP-1474",
                message: "Transaction rejected."
            },
            "-32004": {
                standard: "EIP-1474",
                message: "Method not supported."
            },
            "-32005": {
                standard: "EIP-1474",
                message: "Request limit exceeded."
            },
            4001: {
                standard: "EIP-1193",
                message: "User rejected the request."
            },
            4100: {
                standard: "EIP-1193",
                message: "The requested account and/or method has not been authorized by the user."
            },
            4200: {
                standard: "EIP-1193",
                message: "The requested method is not supported by this Ethereum provider."
            },
            4900: {
                standard: "EIP-1193",
                message: "The provider is disconnected from all chains."
            },
            4901: {
                standard: "EIP-1193",
                message: "The provider is disconnected from the specified chain."
            },
            4902: {
                standard: "EIP-3085",
                message: "Unrecognized chain ID."
            }
        }
    },
    81258: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.standardErrors = void 0;
        const n = r(57025)
          , s = r(66742);
        function i(e, t) {
            const [r,n] = a(t);
            return new c(e,r || (0,
            s.getMessageFromCode)(e),n)
        }
        function o(e, t) {
            const [r,n] = a(t);
            return new l(e,r || (0,
            s.getMessageFromCode)(e),n)
        }
        function a(e) {
            if (e) {
                if ("string" === typeof e)
                    return [e];
                if ("object" === typeof e && !Array.isArray(e)) {
                    const {message: t, data: r} = e;
                    if (t && "string" !== typeof t)
                        throw new Error("Must specify string message.");
                    return [t || void 0, r]
                }
            }
            return []
        }
        t.standardErrors = {
            rpc: {
                parse: e=>i(n.standardErrorCodes.rpc.parse, e),
                invalidRequest: e=>i(n.standardErrorCodes.rpc.invalidRequest, e),
                invalidParams: e=>i(n.standardErrorCodes.rpc.invalidParams, e),
                methodNotFound: e=>i(n.standardErrorCodes.rpc.methodNotFound, e),
                internal: e=>i(n.standardErrorCodes.rpc.internal, e),
                server: e=>{
                    if (!e || "object" !== typeof e || Array.isArray(e))
                        throw new Error("Ethereum RPC Server errors must provide single object argument.");
                    const {code: t} = e;
                    if (!Number.isInteger(t) || t > -32005 || t < -32099)
                        throw new Error('"code" must be an integer such that: -32099 <= code <= -32005');
                    return i(t, e)
                }
                ,
                invalidInput: e=>i(n.standardErrorCodes.rpc.invalidInput, e),
                resourceNotFound: e=>i(n.standardErrorCodes.rpc.resourceNotFound, e),
                resourceUnavailable: e=>i(n.standardErrorCodes.rpc.resourceUnavailable, e),
                transactionRejected: e=>i(n.standardErrorCodes.rpc.transactionRejected, e),
                methodNotSupported: e=>i(n.standardErrorCodes.rpc.methodNotSupported, e),
                limitExceeded: e=>i(n.standardErrorCodes.rpc.limitExceeded, e)
            },
            provider: {
                userRejectedRequest: e=>o(n.standardErrorCodes.provider.userRejectedRequest, e),
                unauthorized: e=>o(n.standardErrorCodes.provider.unauthorized, e),
                unsupportedMethod: e=>o(n.standardErrorCodes.provider.unsupportedMethod, e),
                disconnected: e=>o(n.standardErrorCodes.provider.disconnected, e),
                chainDisconnected: e=>o(n.standardErrorCodes.provider.chainDisconnected, e),
                unsupportedChain: e=>o(n.standardErrorCodes.provider.unsupportedChain, e),
                custom: e=>{
                    if (!e || "object" !== typeof e || Array.isArray(e))
                        throw new Error("Ethereum Provider custom errors must provide single object argument.");
                    const {code: t, message: r, data: n} = e;
                    if (!r || "string" !== typeof r)
                        throw new Error('"message" must be a nonempty string');
                    return new l(t,r,n)
                }
            }
        };
        class c extends Error {
            constructor(e, t, r) {
                if (!Number.isInteger(e))
                    throw new Error('"code" must be an integer.');
                if (!t || "string" !== typeof t)
                    throw new Error('"message" must be a nonempty string.');
                super(t),
                this.code = e,
                void 0 !== r && (this.data = r)
            }
        }
        class l extends c {
            constructor(e, t, r) {
                if (!function(e) {
                    return Number.isInteger(e) && e >= 1e3 && e <= 4999
                }(e))
                    throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');
                super(e, t, r)
            }
        }
    },
    20458: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.standardErrors = t.standardErrorCodes = t.serializeError = t.getMessageFromCode = t.getErrorCode = void 0;
        const n = r(57025);
        Object.defineProperty(t, "standardErrorCodes", {
            enumerable: !0,
            get: function() {
                return n.standardErrorCodes
            }
        });
        const s = r(81258);
        Object.defineProperty(t, "standardErrors", {
            enumerable: !0,
            get: function() {
                return s.standardErrors
            }
        });
        const i = r(13257);
        Object.defineProperty(t, "serializeError", {
            enumerable: !0,
            get: function() {
                return i.serializeError
            }
        });
        const o = r(66742);
        Object.defineProperty(t, "getErrorCode", {
            enumerable: !0,
            get: function() {
                return o.getErrorCode
            }
        }),
        Object.defineProperty(t, "getMessageFromCode", {
            enumerable: !0,
            get: function() {
                return o.getMessageFromCode
            }
        })
    },
    13257: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.serializeError = void 0;
        const n = r(96279)
          , s = r(76570)
          , i = r(57025)
          , o = r(66742);
        t.serializeError = function(e, t) {
            const r = (0,
            o.serialize)(function(e) {
                if ("string" === typeof e)
                    return {
                        message: e,
                        code: i.standardErrorCodes.rpc.internal
                    };
                if ((0,
                n.isErrorResponse)(e))
                    return Object.assign(Object.assign({}, e), {
                        message: e.errorMessage,
                        code: e.errorCode,
                        data: {
                            method: e.method
                        }
                    });
                return e
            }(e), {
                shouldIncludeStack: !0
            })
              , a = new URL("https://docs.cloud.coinbase.com/wallet-sdk/docs/errors");
            a.searchParams.set("version", s.LIB_VERSION),
            a.searchParams.set("code", r.code.toString());
            const c = function(e, t) {
                const r = null === e || void 0 === e ? void 0 : e.method;
                if (r)
                    return r;
                if (void 0 === t)
                    return;
                if ("string" === typeof t)
                    return t;
                if (!Array.isArray(t))
                    return t.method;
                if (t.length > 0)
                    return t[0].method;
                return
            }(r.data, t);
            return c && a.searchParams.set("method", c),
            a.searchParams.set("message", r.message),
            Object.assign(Object.assign({}, r), {
                docUrl: a.href
            })
        }
    },
    66742: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.serialize = t.getErrorCode = t.isValidCode = t.getMessageFromCode = t.JSON_RPC_SERVER_ERROR_MESSAGE = void 0;
        const n = r(57025)
          , s = "Unspecified error message.";
        function i(e, r=s) {
            if (e && Number.isInteger(e)) {
                const r = e.toString();
                if (l(n.errorValues, r))
                    return n.errorValues[r].message;
                if (a(e))
                    return t.JSON_RPC_SERVER_ERROR_MESSAGE
            }
            return r
        }
        function o(e) {
            if (!Number.isInteger(e))
                return !1;
            const t = e.toString();
            return !!n.errorValues[t] || !!a(e)
        }
        function a(e) {
            return e >= -32099 && e <= -32e3
        }
        function c(e) {
            return e && "object" === typeof e && !Array.isArray(e) ? Object.assign({}, e) : e
        }
        function l(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        function u(e, t) {
            return "object" === typeof e && null !== e && t in e && "string" === typeof e[t]
        }
        t.JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error.",
        t.getMessageFromCode = i,
        t.isValidCode = o,
        t.getErrorCode = function(e) {
            var t;
            return "number" === typeof e ? e : function(e) {
                return "object" === typeof e && null !== e && ("number" === typeof e.code || "number" === typeof e.errorCode)
            }(e) ? null !== (t = e.code) && void 0 !== t ? t : e.errorCode : void 0
        }
        ,
        t.serialize = function(e, {shouldIncludeStack: t=!1}={}) {
            const r = {};
            if (e && "object" === typeof e && !Array.isArray(e) && l(e, "code") && o(e.code)) {
                const t = e;
                r.code = t.code,
                t.message && "string" === typeof t.message ? (r.message = t.message,
                l(t, "data") && (r.data = t.data)) : (r.message = i(r.code),
                r.data = {
                    originalError: c(e)
                })
            } else
                r.code = n.standardErrorCodes.rpc.internal,
                r.message = u(e, "message") ? e.message : s,
                r.data = {
                    originalError: c(e)
                };
            return t && (r.stack = u(e, "stack") ? e.stack : void 0),
            r
        }
    },
    97319: function(e, t) {
        "use strict";
        function r() {
            return e=>e
        }
        var n;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.ProviderType = t.RegExpString = t.IntNumber = t.BigIntString = t.AddressString = t.HexString = t.OpaqueType = void 0,
        t.OpaqueType = r,
        t.HexString = e=>e,
        t.AddressString = e=>e,
        t.BigIntString = e=>e,
        t.IntNumber = function(e) {
            return Math.floor(e)
        }
        ,
        t.RegExpString = e=>e,
        function(e) {
            e.CoinbaseWallet = "CoinbaseWallet",
            e.MetaMask = "MetaMask",
            e.Unselected = ""
        }(n || (t.ProviderType = n = {}))
    },
    93634: function(e, t, r) {
        "use strict";
        var n = r(15313).Buffer
          , s = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.isMobileWeb = t.getLocation = t.isInIFrame = t.createQrUrl = t.getFavicon = t.range = t.isBigNumber = t.ensureParsedJSONObject = t.ensureBN = t.ensureRegExpString = t.ensureIntNumber = t.ensureBuffer = t.ensureAddressString = t.ensureEvenLengthHexString = t.ensureHexString = t.isHexString = t.prepend0x = t.strip0x = t.has0xPrefix = t.hexStringFromIntNumber = t.intNumberFromHexString = t.bigIntStringFromBN = t.hexStringFromBuffer = t.hexStringToUint8Array = t.uint8ArrayToHex = t.randomBytesHex = void 0;
        const i = s(r(98394))
          , o = r(20458)
          , a = r(97319)
          , c = /^[0-9]*$/
          , l = /^[a-f0-9]*$/;
        function u(e) {
            return [...e].map((e=>e.toString(16).padStart(2, "0"))).join("")
        }
        function d(e) {
            return e.startsWith("0x") || e.startsWith("0X")
        }
        function h(e) {
            return d(e) ? e.slice(2) : e
        }
        function f(e) {
            return d(e) ? `0x${e.slice(2)}` : `0x${e}`
        }
        function p(e) {
            if ("string" !== typeof e)
                return !1;
            const t = h(e).toLowerCase();
            return l.test(t)
        }
        function g(e, t=!1) {
            if ("string" === typeof e) {
                const r = h(e).toLowerCase();
                if (l.test(r))
                    return (0,
                    a.HexString)(t ? `0x${r}` : r)
            }
            throw o.standardErrors.rpc.invalidParams(`"${String(e)}" is not a hexadecimal string`)
        }
        function m(e, t=!1) {
            let r = g(e, !1);
            return r.length % 2 === 1 && (r = (0,
            a.HexString)(`0${r}`)),
            t ? (0,
            a.HexString)(`0x${r}`) : r
        }
        function _(e) {
            if ("number" === typeof e && Number.isInteger(e))
                return (0,
                a.IntNumber)(e);
            if ("string" === typeof e) {
                if (c.test(e))
                    return (0,
                    a.IntNumber)(Number(e));
                if (p(e))
                    return (0,
                    a.IntNumber)(new i.default(m(e, !1),16).toNumber())
            }
            throw o.standardErrors.rpc.invalidParams(`Not an integer: ${String(e)}`)
        }
        function b(e) {
            if (null == e || "function" !== typeof e.constructor)
                return !1;
            const {constructor: t} = e;
            return "function" === typeof t.config && "number" === typeof t.EUCLID
        }
        function y() {
            try {
                return null !== window.frameElement
            } catch (e) {
                return !1
            }
        }
        t.randomBytesHex = function(e) {
            return u(crypto.getRandomValues(new Uint8Array(e)))
        }
        ,
        t.uint8ArrayToHex = u,
        t.hexStringToUint8Array = function(e) {
            return new Uint8Array(e.match(/.{1,2}/g).map((e=>parseInt(e, 16))))
        }
        ,
        t.hexStringFromBuffer = function(e, t=!1) {
            const r = e.toString("hex");
            return (0,
            a.HexString)(t ? `0x${r}` : r)
        }
        ,
        t.bigIntStringFromBN = function(e) {
            return (0,
            a.BigIntString)(e.toString(10))
        }
        ,
        t.intNumberFromHexString = function(e) {
            return (0,
            a.IntNumber)(new i.default(m(e, !1),16).toNumber())
        }
        ,
        t.hexStringFromIntNumber = function(e) {
            return (0,
            a.HexString)(`0x${new i.default(e).toString(16)}`)
        }
        ,
        t.has0xPrefix = d,
        t.strip0x = h,
        t.prepend0x = f,
        t.isHexString = p,
        t.ensureHexString = g,
        t.ensureEvenLengthHexString = m,
        t.ensureAddressString = function(e) {
            if ("string" === typeof e) {
                const t = h(e).toLowerCase();
                if (p(t) && 40 === t.length)
                    return (0,
                    a.AddressString)(f(t))
            }
            throw o.standardErrors.rpc.invalidParams(`Invalid Ethereum address: ${String(e)}`)
        }
        ,
        t.ensureBuffer = function(e) {
            if (n.isBuffer(e))
                return e;
            if ("string" === typeof e) {
                if (p(e)) {
                    const t = m(e, !1);
                    return n.from(t, "hex")
                }
                return n.from(e, "utf8")
            }
            throw o.standardErrors.rpc.invalidParams(`Not binary data: ${String(e)}`)
        }
        ,
        t.ensureIntNumber = _,
        t.ensureRegExpString = function(e) {
            if (e instanceof RegExp)
                return (0,
                a.RegExpString)(e.toString());
            throw o.standardErrors.rpc.invalidParams(`Not a RegExp: ${String(e)}`)
        }
        ,
        t.ensureBN = function(e) {
            if (null !== e && (i.default.isBN(e) || b(e)))
                return new i.default(e.toString(10),10);
            if ("number" === typeof e)
                return new i.default(_(e));
            if ("string" === typeof e) {
                if (c.test(e))
                    return new i.default(e,10);
                if (p(e))
                    return new i.default(m(e, !1),16)
            }
            throw o.standardErrors.rpc.invalidParams(`Not an integer: ${String(e)}`)
        }
        ,
        t.ensureParsedJSONObject = function(e) {
            if ("string" === typeof e)
                return JSON.parse(e);
            if ("object" === typeof e)
                return e;
            throw o.standardErrors.rpc.invalidParams(`Not a JSON string or an object: ${String(e)}`)
        }
        ,
        t.isBigNumber = b,
        t.range = function(e, t) {
            return Array.from({
                length: t - e
            }, ((t,r)=>e + r))
        }
        ,
        t.getFavicon = function() {
            const e = document.querySelector('link[sizes="192x192"]') || document.querySelector('link[sizes="180x180"]') || document.querySelector('link[rel="icon"]') || document.querySelector('link[rel="shortcut icon"]')
              , {protocol: t, host: r} = document.location
              , n = e ? e.getAttribute("href") : null;
            return !n || n.startsWith("javascript:") || n.startsWith("vbscript:") ? null : n.startsWith("http://") || n.startsWith("https://") || n.startsWith("data:") ? n : n.startsWith("//") ? t + n : `${t}//${r}${n}`
        }
        ,
        t.createQrUrl = function(e, t, r, n, s, i) {
            return `${r}/#/link?${new URLSearchParams({
                [n ? "parent-id" : "id"]: e,
                secret: t,
                server: r,
                v: s,
                chainId: i.toString()
            }).toString()}`
        }
        ,
        t.isInIFrame = y,
        t.getLocation = function() {
            try {
                return y() && window.top ? window.top.location : window.location
            } catch (e) {
                return window.location
            }
        }
        ,
        t.isMobileWeb = function() {
            var e;
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(null === (e = null === window || void 0 === window ? void 0 : window.navigator) || void 0 === e ? void 0 : e.userAgent)
        }
    },
    5501: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.CoinbaseWalletProvider = t.CoinbaseWalletSDK = void 0;
        const n = r(93710)
          , s = r(93549);
        var i = r(93710);
        Object.defineProperty(t, "CoinbaseWalletSDK", {
            enumerable: !0,
            get: function() {
                return i.CoinbaseWalletSDK
            }
        });
        var o = r(93549);
        Object.defineProperty(t, "CoinbaseWalletProvider", {
            enumerable: !0,
            get: function() {
                return o.CoinbaseWalletProvider
            }
        }),
        t.default = n.CoinbaseWalletSDK,
        "undefined" !== typeof window && (window.CoinbaseWalletSDK = n.CoinbaseWalletSDK,
        window.CoinbaseWalletProvider = s.CoinbaseWalletProvider,
        window.WalletLink = n.CoinbaseWalletSDK,
        window.WalletLinkProvider = s.CoinbaseWalletProvider)
    },
    17226: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.Cipher = void 0;
        const n = r(93634);
        t.Cipher = class {
            constructor(e) {
                this.secret = e
            }
            async encrypt(e) {
                const t = this.secret;
                if (64 !== t.length)
                    throw Error("secret must be 256 bits");
                const r = crypto.getRandomValues(new Uint8Array(12))
                  , s = await crypto.subtle.importKey("raw", (0,
                n.hexStringToUint8Array)(t), {
                    name: "aes-gcm"
                }, !1, ["encrypt", "decrypt"])
                  , i = new TextEncoder
                  , o = await window.crypto.subtle.encrypt({
                    name: "AES-GCM",
                    iv: r
                }, s, i.encode(e))
                  , a = o.slice(o.byteLength - 16)
                  , c = o.slice(0, o.byteLength - 16)
                  , l = new Uint8Array(a)
                  , u = new Uint8Array(c)
                  , d = new Uint8Array([...r, ...l, ...u]);
                return (0,
                n.uint8ArrayToHex)(d)
            }
            async decrypt(e) {
                const t = this.secret;
                if (64 !== t.length)
                    throw Error("secret must be 256 bits");
                return new Promise(((r,s)=>{
                    !async function() {
                        const i = await crypto.subtle.importKey("raw", (0,
                        n.hexStringToUint8Array)(t), {
                            name: "aes-gcm"
                        }, !1, ["encrypt", "decrypt"])
                          , o = (0,
                        n.hexStringToUint8Array)(e)
                          , a = o.slice(0, 12)
                          , c = o.slice(12, 28)
                          , l = o.slice(28)
                          , u = new Uint8Array([...l, ...c])
                          , d = {
                            name: "AES-GCM",
                            iv: new Uint8Array(a)
                        };
                        try {
                            const e = await window.crypto.subtle.decrypt(d, i, u)
                              , t = new TextDecoder;
                            r(t.decode(e))
                        } catch (h) {
                            s(h)
                        }
                    }()
                }
                ))
            }
        }
    },
    5648: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.ScopedLocalStorage = void 0;
        t.ScopedLocalStorage = class {
            constructor(e) {
                this.scope = e
            }
            setItem(e, t) {
                localStorage.setItem(this.scopedKey(e), t)
            }
            getItem(e) {
                return localStorage.getItem(this.scopedKey(e))
            }
            removeItem(e) {
                localStorage.removeItem(this.scopedKey(e))
            }
            clear() {
                const e = this.scopedKey("")
                  , t = [];
                for (let r = 0; r < localStorage.length; r++) {
                    const n = localStorage.key(r);
                    "string" === typeof n && n.startsWith(e) && t.push(n)
                }
                t.forEach((e=>localStorage.removeItem(e)))
            }
            scopedKey(e) {
                return `${this.scope}:${e}`
            }
        }
    },
    14826: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = '@namespace svg "http://www.w3.org/2000/svg";.-cbwsdk-css-reset,.-cbwsdk-css-reset *{animation:none;animation-delay:0;animation-direction:normal;animation-duration:0;animation-fill-mode:none;animation-iteration-count:1;animation-name:none;animation-play-state:running;animation-timing-function:ease;backface-visibility:visible;background:0;background-attachment:scroll;background-clip:border-box;background-color:rgba(0,0,0,0);background-image:none;background-origin:padding-box;background-position:0 0;background-position-x:0;background-position-y:0;background-repeat:repeat;background-size:auto auto;border:0;border-style:none;border-width:medium;border-color:inherit;border-bottom:0;border-bottom-color:inherit;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-style:none;border-bottom-width:medium;border-collapse:separate;border-image:none;border-left:0;border-left-color:inherit;border-left-style:none;border-left-width:medium;border-radius:0;border-right:0;border-right-color:inherit;border-right-style:none;border-right-width:medium;border-spacing:0;border-top:0;border-top-color:inherit;border-top-left-radius:0;border-top-right-radius:0;border-top-style:none;border-top-width:medium;box-shadow:none;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:inherit;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-rule-color:currentColor;column-rule-style:none;column-rule-width:none;column-span:1;column-width:auto;counter-increment:none;counter-reset:none;direction:ltr;empty-cells:show;float:none;font:normal;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;height:auto;hyphens:none;letter-spacing:normal;line-height:normal;list-style:none;list-style-image:none;list-style-position:outside;list-style-type:disc;margin:0;margin-bottom:0;margin-left:0;margin-right:0;margin-top:0;opacity:1;orphans:0;outline:0;outline-color:invert;outline-style:none;outline-width:medium;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;pointer-events:auto;position:static;quotes:"\\201C" "\\201D" "\\2018" "\\2019";tab-size:8;table-layout:auto;text-align:inherit;text-align-last:auto;text-decoration:none;text-decoration-color:inherit;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-shadow:none;text-transform:none;transform:none;transform-style:flat;transition:none;transition-delay:0s;transition-duration:0s;transition-property:none;transition-timing-function:ease;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:0;word-spacing:normal;z-index:auto}.-cbwsdk-css-reset strong{font-weight:bold}.-cbwsdk-css-reset *{box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;line-height:1}.-cbwsdk-css-reset [class*=container]{margin:0;padding:0}.-cbwsdk-css-reset style{display:none}'
    },
    19514: function(e, t, r) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.injectCssReset = void 0;
        const s = n(r(14826));
        t.injectCssReset = function() {
            const e = document.createElement("style");
            e.type = "text/css",
            e.appendChild(document.createTextNode(s.default)),
            document.documentElement.appendChild(e)
        }
    },
    93549: function(e, t, r) {
        "use strict";
        var n = r(15313).Buffer
          , s = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.CoinbaseWalletProvider = void 0;
        const i = s(r(98394))
          , o = r(60413)
          , a = r(20458)
          , c = r(93634)
          , l = r(41660)
          , u = r(96355)
          , d = r(24109)
          , h = r(96279)
          , f = s(r(55937))
          , p = r(2220)
          , g = r(20905)
          , m = r(23508)
          , _ = "DefaultChainId"
          , b = "DefaultJsonRpcUrl";
        class y extends o.EventEmitter {
            constructor(e) {
                var t, r;
                super(),
                this._filterPolyfill = new g.FilterPolyfill(this),
                this._subscriptionManager = new m.SubscriptionManager(this),
                this._relay = null,
                this._addresses = [],
                this.hasMadeFirstChainChangedEmission = !1,
                this.setProviderInfo = this.setProviderInfo.bind(this),
                this.updateProviderInfo = this.updateProviderInfo.bind(this),
                this.getChainId = this.getChainId.bind(this),
                this.setAppInfo = this.setAppInfo.bind(this),
                this.enable = this.enable.bind(this),
                this.close = this.close.bind(this),
                this.send = this.send.bind(this),
                this.sendAsync = this.sendAsync.bind(this),
                this.request = this.request.bind(this),
                this._setAddresses = this._setAddresses.bind(this),
                this.scanQRCode = this.scanQRCode.bind(this),
                this.genericRequest = this.genericRequest.bind(this),
                this._chainIdFromOpts = e.chainId,
                this._jsonRpcUrlFromOpts = e.jsonRpcUrl,
                this._overrideIsMetaMask = e.overrideIsMetaMask,
                this._relayProvider = e.relayProvider,
                this._storage = e.storage,
                this._relayEventManager = e.relayEventManager,
                this.diagnostic = e.diagnosticLogger,
                this.reloadOnDisconnect = !0,
                this.isCoinbaseWallet = null === (t = e.overrideIsCoinbaseWallet) || void 0 === t || t,
                this.isCoinbaseBrowser = null !== (r = e.overrideIsCoinbaseBrowser) && void 0 !== r && r,
                this.qrUrl = e.qrUrl;
                const n = this.getChainId()
                  , s = (0,
                c.prepend0x)(n.toString(16));
                this.emit("connect", {
                    chainIdStr: s
                });
                const i = this._storage.getItem(u.LOCAL_STORAGE_ADDRESSES_KEY);
                if (i) {
                    const e = i.split(" ");
                    "" !== e[0] && (this._addresses = e.map((e=>(0,
                    c.ensureAddressString)(e))),
                    this.emit("accountsChanged", e))
                }
                this._subscriptionManager.events.on("notification", (e=>{
                    this.emit("message", {
                        type: e.method,
                        data: e.params
                    })
                }
                )),
                this._isAuthorized() && this.initializeRelay(),
                window.addEventListener("message", (e=>{
                    var t;
                    if (e.origin === location.origin && e.source === window && "walletLinkMessage" === e.data.type && "dappChainSwitched" === e.data.data.action) {
                        const r = e.data.data.chainId
                          , n = null !== (t = e.data.data.jsonRpcUrl) && void 0 !== t ? t : this.jsonRpcUrl;
                        this.updateProviderInfo(n, Number(r))
                    }
                }
                ))
            }
            get selectedAddress() {
                return this._addresses[0] || void 0
            }
            get networkVersion() {
                return this.getChainId().toString(10)
            }
            get chainId() {
                return (0,
                c.prepend0x)(this.getChainId().toString(16))
            }
            get isWalletLink() {
                return !0
            }
            get isMetaMask() {
                return this._overrideIsMetaMask
            }
            get host() {
                return this.jsonRpcUrl
            }
            get connected() {
                return !0
            }
            isConnected() {
                return !0
            }
            get jsonRpcUrl() {
                var e;
                return null !== (e = this._storage.getItem(b)) && void 0 !== e ? e : this._jsonRpcUrlFromOpts
            }
            set jsonRpcUrl(e) {
                this._storage.setItem(b, e)
            }
            disableReloadOnDisconnect() {
                this.reloadOnDisconnect = !1
            }
            setProviderInfo(e, t) {
                this.isCoinbaseBrowser || (this._chainIdFromOpts = t,
                this._jsonRpcUrlFromOpts = e),
                this.updateProviderInfo(this.jsonRpcUrl, this.getChainId())
            }
            updateProviderInfo(e, t) {
                this.jsonRpcUrl = e;
                const r = this.getChainId();
                this._storage.setItem(_, t.toString(10));
                !((0,
                c.ensureIntNumber)(t) !== r) && this.hasMadeFirstChainChangedEmission || (this.emit("chainChanged", this.getChainId()),
                this.hasMadeFirstChainChangedEmission = !0)
            }
            async watchAsset(e, t, r, n, s, i) {
                const o = await this.initializeRelay()
                  , a = await o.watchAsset(e, t, r, n, s, null === i || void 0 === i ? void 0 : i.toString()).promise;
                return !(0,
                h.isErrorResponse)(a) && !!a.result
            }
            async addEthereumChain(e, t, r, n, s, i) {
                var o, a;
                if ((0,
                c.ensureIntNumber)(e) === this.getChainId())
                    return !1;
                const l = await this.initializeRelay()
                  , u = l.inlineAddEthereumChain(e.toString());
                this._isAuthorized() || u || await l.requestEthereumAccounts().promise;
                const d = await l.addEthereumChain(e.toString(), t, s, r, n, i).promise;
                return !(0,
                h.isErrorResponse)(d) && (!0 === (null === (o = d.result) || void 0 === o ? void 0 : o.isApproved) && this.updateProviderInfo(t[0], e),
                !0 === (null === (a = d.result) || void 0 === a ? void 0 : a.isApproved))
            }
            async switchEthereumChain(e) {
                const t = await this.initializeRelay()
                  , r = await t.switchEthereumChain(e.toString(10), this.selectedAddress || void 0).promise;
                if ((0,
                h.isErrorResponse)(r)) {
                    if (!r.errorCode)
                        return;
                    throw r.errorCode === a.standardErrorCodes.provider.unsupportedChain ? a.standardErrors.provider.unsupportedChain() : a.standardErrors.provider.custom({
                        message: r.errorMessage,
                        code: r.errorCode
                    })
                }
                const n = r.result;
                n.isApproved && n.rpcUrl.length > 0 && this.updateProviderInfo(n.rpcUrl, e)
            }
            setAppInfo(e, t) {
                this.initializeRelay().then((r=>r.setAppInfo(e, t)))
            }
            async enable() {
                var e;
                return null === (e = this.diagnostic) || void 0 === e || e.log(p.EVENTS.ETH_ACCOUNTS_STATE, {
                    method: "provider::enable",
                    addresses_length: this._addresses.length,
                    sessionIdHash: this._relay ? d.Session.hash(this._relay.session.id) : void 0
                }),
                this._isAuthorized() ? [...this._addresses] : await this.send("eth_requestAccounts")
            }
            async close() {
                (await this.initializeRelay()).resetAndReload()
            }
            send(e, t) {
                try {
                    const r = this._send(e, t);
                    if (r instanceof Promise)
                        return r.catch((t=>{
                            throw (0,
                            a.serializeError)(t, e)
                        }
                        ))
                } catch (r) {
                    throw (0,
                    a.serializeError)(r, e)
                }
            }
            _send(e, t) {
                if ("string" === typeof e) {
                    const r = {
                        jsonrpc: "2.0",
                        id: 0,
                        method: e,
                        params: Array.isArray(t) ? t : void 0 !== t ? [t] : []
                    };
                    return this._sendRequestAsync(r).then((e=>e.result))
                }
                if ("function" === typeof t) {
                    const r = e
                      , n = t;
                    return this._sendAsync(r, n)
                }
                if (Array.isArray(e)) {
                    return e.map((e=>this._sendRequest(e)))
                }
                const r = e;
                return this._sendRequest(r)
            }
            async sendAsync(e, t) {
                try {
                    return this._sendAsync(e, t).catch((t=>{
                        throw (0,
                        a.serializeError)(t, e)
                    }
                    ))
                } catch (r) {
                    return Promise.reject((0,
                    a.serializeError)(r, e))
                }
            }
            async _sendAsync(e, t) {
                if ("function" !== typeof t)
                    throw new Error("callback is required");
                if (Array.isArray(e)) {
                    const r = t;
                    return void this._sendMultipleRequestsAsync(e).then((e=>r(null, e))).catch((e=>r(e, null)))
                }
                const r = t;
                return this._sendRequestAsync(e).then((e=>r(null, e))).catch((e=>r(e, null)))
            }
            async request(e) {
                try {
                    return this._request(e).catch((t=>{
                        throw (0,
                        a.serializeError)(t, e.method)
                    }
                    ))
                } catch (t) {
                    return Promise.reject((0,
                    a.serializeError)(t, e.method))
                }
            }
            async _request(e) {
                if (!e || "object" !== typeof e || Array.isArray(e))
                    throw a.standardErrors.rpc.invalidRequest({
                        message: "Expected a single, non-array, object argument.",
                        data: e
                    });
                const {method: t, params: r} = e;
                if ("string" !== typeof t || 0 === t.length)
                    throw a.standardErrors.rpc.invalidRequest({
                        message: "'args.method' must be a non-empty string.",
                        data: e
                    });
                if (void 0 !== r && !Array.isArray(r) && ("object" !== typeof r || null === r))
                    throw a.standardErrors.rpc.invalidRequest({
                        message: "'args.params' must be an object or array if provided.",
                        data: e
                    });
                const n = void 0 === r ? [] : r
                  , s = this._relayEventManager.makeRequestId();
                return (await this._sendRequestAsync({
                    method: t,
                    params: n,
                    jsonrpc: "2.0",
                    id: s
                })).result
            }
            async scanQRCode(e) {
                const t = await this.initializeRelay()
                  , r = await t.scanQRCode((0,
                c.ensureRegExpString)(e)).promise;
                if ((0,
                h.isErrorResponse)(r))
                    throw (0,
                    a.serializeError)(r.errorMessage, "scanQRCode");
                if ("string" !== typeof r.result)
                    throw (0,
                    a.serializeError)("result was not a string", "scanQRCode");
                return r.result
            }
            async genericRequest(e, t) {
                const r = await this.initializeRelay()
                  , n = await r.genericRequest(e, t).promise;
                if ((0,
                h.isErrorResponse)(n))
                    throw (0,
                    a.serializeError)(n.errorMessage, "generic");
                if ("string" !== typeof n.result)
                    throw (0,
                    a.serializeError)("result was not a string", "generic");
                return n.result
            }
            async connectAndSignIn(e) {
                var t;
                let r;
                null === (t = this.diagnostic) || void 0 === t || t.log(p.EVENTS.ETH_ACCOUNTS_STATE, {
                    method: "provider::connectAndSignIn",
                    sessionIdHash: this._relay ? d.Session.hash(this._relay.session.id) : void 0
                });
                try {
                    const t = await this.initializeRelay();
                    if (!(t instanceof l.MobileRelay))
                        throw new Error("connectAndSignIn is only supported on mobile");
                    if (r = await t.connectAndSignIn(e).promise,
                    (0,
                    h.isErrorResponse)(r))
                        throw new Error(r.errorMessage)
                } catch (s) {
                    if ("string" === typeof s.message && s.message.match(/(denied|rejected)/i))
                        throw a.standardErrors.provider.userRejectedRequest("User denied account authorization");
                    throw s
                }
                if (!r.result)
                    throw new Error("accounts received is empty");
                const {accounts: n} = r.result;
                return this._setAddresses(n),
                this.isCoinbaseBrowser || await this.switchEthereumChain(this.getChainId()),
                r.result
            }
            async selectProvider(e) {
                const t = await this.initializeRelay()
                  , r = await t.selectProvider(e).promise;
                if ((0,
                h.isErrorResponse)(r))
                    throw (0,
                    a.serializeError)(r.errorMessage, "selectProvider");
                if ("string" !== typeof r.result)
                    throw (0,
                    a.serializeError)("result was not a string", "selectProvider");
                return r.result
            }
            supportsSubscriptions() {
                return !1
            }
            subscribe() {
                throw new Error("Subscriptions are not supported")
            }
            unsubscribe() {
                throw new Error("Subscriptions are not supported")
            }
            disconnect() {
                return !0
            }
            _sendRequest(e) {
                const t = {
                    jsonrpc: "2.0",
                    id: e.id
                }
                  , {method: r} = e;
                if (t.result = this._handleSynchronousMethods(e),
                void 0 === t.result)
                    throw new Error(`Coinbase Wallet does not support calling ${r} synchronously without a callback. Please provide a callback parameter to call ${r} asynchronously.`);
                return t
            }
            _setAddresses(e, t) {
                if (!Array.isArray(e))
                    throw new Error("addresses is not an array");
                const r = e.map((e=>(0,
                c.ensureAddressString)(e)));
                JSON.stringify(r) !== JSON.stringify(this._addresses) && (this._addresses = r,
                this.emit("accountsChanged", this._addresses),
                this._storage.setItem(u.LOCAL_STORAGE_ADDRESSES_KEY, r.join(" ")))
            }
            _sendRequestAsync(e) {
                return new Promise(((t,r)=>{
                    try {
                        const n = this._handleSynchronousMethods(e);
                        if (void 0 !== n)
                            return t({
                                jsonrpc: "2.0",
                                id: e.id,
                                result: n
                            });
                        const s = this._handleAsynchronousFilterMethods(e);
                        if (void 0 !== s)
                            return void s.then((r=>t(Object.assign(Object.assign({}, r), {
                                id: e.id
                            })))).catch((e=>r(e)));
                        const i = this._handleSubscriptionMethods(e);
                        if (void 0 !== i)
                            return void i.then((r=>t({
                                jsonrpc: "2.0",
                                id: e.id,
                                result: r.result
                            }))).catch((e=>r(e)))
                    } catch (n) {
                        return r(n)
                    }
                    this._handleAsynchronousMethods(e).then((r=>r && t(Object.assign(Object.assign({}, r), {
                        id: e.id
                    })))).catch((e=>r(e)))
                }
                ))
            }
            _sendMultipleRequestsAsync(e) {
                return Promise.all(e.map((e=>this._sendRequestAsync(e))))
            }
            _handleSynchronousMethods(e) {
                const {method: t} = e
                  , r = e.params || [];
                switch (t) {
                case "eth_accounts":
                    return this._eth_accounts();
                case "eth_coinbase":
                    return this._eth_coinbase();
                case "eth_uninstallFilter":
                    return this._eth_uninstallFilter(r);
                case "net_version":
                    return this._net_version();
                case "eth_chainId":
                    return this._eth_chainId();
                default:
                    return
                }
            }
            async _handleAsynchronousMethods(e) {
                const {method: t} = e
                  , r = e.params || [];
                switch (t) {
                case "eth_requestAccounts":
                    return this._eth_requestAccounts();
                case "eth_sign":
                    return this._eth_sign(r);
                case "eth_ecRecover":
                    return this._eth_ecRecover(r);
                case "personal_sign":
                    return this._personal_sign(r);
                case "personal_ecRecover":
                    return this._personal_ecRecover(r);
                case "eth_signTransaction":
                    return this._eth_signTransaction(r);
                case "eth_sendRawTransaction":
                    return this._eth_sendRawTransaction(r);
                case "eth_sendTransaction":
                    return this._eth_sendTransaction(r);
                case "eth_signTypedData_v1":
                    return this._eth_signTypedData_v1(r);
                case "eth_signTypedData_v2":
                    return this._throwUnsupportedMethodError();
                case "eth_signTypedData_v3":
                    return this._eth_signTypedData_v3(r);
                case "eth_signTypedData_v4":
                case "eth_signTypedData":
                    return this._eth_signTypedData_v4(r);
                case "cbWallet_arbitrary":
                    return this._cbwallet_arbitrary(r);
                case "wallet_addEthereumChain":
                    return this._wallet_addEthereumChain(r);
                case "wallet_switchEthereumChain":
                    return this._wallet_switchEthereumChain(r);
                case "wallet_watchAsset":
                    return this._wallet_watchAsset(r)
                }
                return (await this.initializeRelay()).makeEthereumJSONRPCRequest(e, this.jsonRpcUrl).catch((t=>{
                    var r;
                    throw t.code !== a.standardErrorCodes.rpc.methodNotFound && t.code !== a.standardErrorCodes.rpc.methodNotSupported || null === (r = this.diagnostic) || void 0 === r || r.log(p.EVENTS.METHOD_NOT_IMPLEMENTED, {
                        method: e.method,
                        sessionIdHash: this._relay ? d.Session.hash(this._relay.session.id) : void 0
                    }),
                    t
                }
                ))
            }
            _handleAsynchronousFilterMethods(e) {
                const {method: t} = e
                  , r = e.params || [];
                switch (t) {
                case "eth_newFilter":
                    return this._eth_newFilter(r);
                case "eth_newBlockFilter":
                    return this._eth_newBlockFilter();
                case "eth_newPendingTransactionFilter":
                    return this._eth_newPendingTransactionFilter();
                case "eth_getFilterChanges":
                    return this._eth_getFilterChanges(r);
                case "eth_getFilterLogs":
                    return this._eth_getFilterLogs(r)
                }
            }
            _handleSubscriptionMethods(e) {
                switch (e.method) {
                case "eth_subscribe":
                case "eth_unsubscribe":
                    return this._subscriptionManager.handleRequest(e)
                }
            }
            _isKnownAddress(e) {
                try {
                    const t = (0,
                    c.ensureAddressString)(e);
                    return this._addresses.map((e=>(0,
                    c.ensureAddressString)(e))).includes(t)
                } catch (t) {}
                return !1
            }
            _ensureKnownAddress(e) {
                var t;
                if (!this._isKnownAddress(e))
                    throw null === (t = this.diagnostic) || void 0 === t || t.log(p.EVENTS.UNKNOWN_ADDRESS_ENCOUNTERED),
                    new Error("Unknown Ethereum address")
            }
            _prepareTransactionParams(e) {
                const t = e.from ? (0,
                c.ensureAddressString)(e.from) : this.selectedAddress;
                if (!t)
                    throw new Error("Ethereum address is unavailable");
                this._ensureKnownAddress(t);
                return {
                    fromAddress: t,
                    toAddress: e.to ? (0,
                    c.ensureAddressString)(e.to) : null,
                    weiValue: null != e.value ? (0,
                    c.ensureBN)(e.value) : new i.default(0),
                    data: e.data ? (0,
                    c.ensureBuffer)(e.data) : n.alloc(0),
                    nonce: null != e.nonce ? (0,
                    c.ensureIntNumber)(e.nonce) : null,
                    gasPriceInWei: null != e.gasPrice ? (0,
                    c.ensureBN)(e.gasPrice) : null,
                    maxFeePerGas: null != e.maxFeePerGas ? (0,
                    c.ensureBN)(e.maxFeePerGas) : null,
                    maxPriorityFeePerGas: null != e.maxPriorityFeePerGas ? (0,
                    c.ensureBN)(e.maxPriorityFeePerGas) : null,
                    gasLimit: null != e.gas ? (0,
                    c.ensureBN)(e.gas) : null,
                    chainId: e.chainId ? (0,
                    c.ensureIntNumber)(e.chainId) : this.getChainId()
                }
            }
            _isAuthorized() {
                return this._addresses.length > 0
            }
            _requireAuthorization() {
                if (!this._isAuthorized())
                    throw a.standardErrors.provider.unauthorized({})
            }
            _throwUnsupportedMethodError() {
                throw a.standardErrors.provider.unsupportedMethod({})
            }
            async _signEthereumMessage(e, t, r, n) {
                this._ensureKnownAddress(t);
                try {
                    const s = await this.initializeRelay()
                      , i = await s.signEthereumMessage(e, t, r, n).promise;
                    if ((0,
                    h.isErrorResponse)(i))
                        throw new Error(i.errorMessage);
                    return {
                        jsonrpc: "2.0",
                        id: 0,
                        result: i.result
                    }
                } catch (s) {
                    if ("string" === typeof s.message && s.message.match(/(denied|rejected)/i))
                        throw a.standardErrors.provider.userRejectedRequest("User denied message signature");
                    throw s
                }
            }
            async _ethereumAddressFromSignedMessage(e, t, r) {
                const n = await this.initializeRelay()
                  , s = await n.ethereumAddressFromSignedMessage(e, t, r).promise;
                if ((0,
                h.isErrorResponse)(s))
                    throw new Error(s.errorMessage);
                return {
                    jsonrpc: "2.0",
                    id: 0,
                    result: s.result
                }
            }
            _eth_accounts() {
                return [...this._addresses]
            }
            _eth_coinbase() {
                return this.selectedAddress || null
            }
            _net_version() {
                return this.getChainId().toString(10)
            }
            _eth_chainId() {
                return (0,
                c.hexStringFromIntNumber)(this.getChainId())
            }
            getChainId() {
                const e = this._storage.getItem(_);
                if (!e)
                    return (0,
                    c.ensureIntNumber)(this._chainIdFromOpts);
                const t = parseInt(e, 10);
                return (0,
                c.ensureIntNumber)(t)
            }
            async _eth_requestAccounts() {
                var e;
                if (null === (e = this.diagnostic) || void 0 === e || e.log(p.EVENTS.ETH_ACCOUNTS_STATE, {
                    method: "provider::_eth_requestAccounts",
                    addresses_length: this._addresses.length,
                    sessionIdHash: this._relay ? d.Session.hash(this._relay.session.id) : void 0
                }),
                this._isAuthorized())
                    return Promise.resolve({
                        jsonrpc: "2.0",
                        id: 0,
                        result: this._addresses
                    });
                let t;
                try {
                    const e = await this.initializeRelay();
                    if (t = await e.requestEthereumAccounts().promise,
                    (0,
                    h.isErrorResponse)(t))
                        throw new Error(t.errorMessage)
                } catch (r) {
                    if ("string" === typeof r.message && r.message.match(/(denied|rejected)/i))
                        throw a.standardErrors.provider.userRejectedRequest("User denied account authorization");
                    throw r
                }
                if (!t.result)
                    throw new Error("accounts received is empty");
                return this._setAddresses(t.result),
                this.isCoinbaseBrowser || await this.switchEthereumChain(this.getChainId()),
                {
                    jsonrpc: "2.0",
                    id: 0,
                    result: this._addresses
                }
            }
            _eth_sign(e) {
                this._requireAuthorization();
                const t = (0,
                c.ensureAddressString)(e[0])
                  , r = (0,
                c.ensureBuffer)(e[1]);
                return this._signEthereumMessage(r, t, !1)
            }
            _eth_ecRecover(e) {
                const t = (0,
                c.ensureBuffer)(e[0])
                  , r = (0,
                c.ensureBuffer)(e[1]);
                return this._ethereumAddressFromSignedMessage(t, r, !1)
            }
            _personal_sign(e) {
                this._requireAuthorization();
                const t = (0,
                c.ensureBuffer)(e[0])
                  , r = (0,
                c.ensureAddressString)(e[1]);
                return this._signEthereumMessage(t, r, !0)
            }
            _personal_ecRecover(e) {
                const t = (0,
                c.ensureBuffer)(e[0])
                  , r = (0,
                c.ensureBuffer)(e[1]);
                return this._ethereumAddressFromSignedMessage(t, r, !0)
            }
            async _eth_signTransaction(e) {
                this._requireAuthorization();
                const t = this._prepareTransactionParams(e[0] || {});
                try {
                    const e = await this.initializeRelay()
                      , r = await e.signEthereumTransaction(t).promise;
                    if ((0,
                    h.isErrorResponse)(r))
                        throw new Error(r.errorMessage);
                    return {
                        jsonrpc: "2.0",
                        id: 0,
                        result: r.result
                    }
                } catch (r) {
                    if ("string" === typeof r.message && r.message.match(/(denied|rejected)/i))
                        throw a.standardErrors.provider.userRejectedRequest("User denied transaction signature");
                    throw r
                }
            }
            async _eth_sendRawTransaction(e) {
                const t = (0,
                c.ensureBuffer)(e[0])
                  , r = await this.initializeRelay()
                  , n = await r.submitEthereumTransaction(t, this.getChainId()).promise;
                if ((0,
                h.isErrorResponse)(n))
                    throw new Error(n.errorMessage);
                return {
                    jsonrpc: "2.0",
                    id: 0,
                    result: n.result
                }
            }
            async _eth_sendTransaction(e) {
                this._requireAuthorization();
                const t = this._prepareTransactionParams(e[0] || {});
                try {
                    const e = await this.initializeRelay()
                      , r = await e.signAndSubmitEthereumTransaction(t).promise;
                    if ((0,
                    h.isErrorResponse)(r))
                        throw new Error(r.errorMessage);
                    return {
                        jsonrpc: "2.0",
                        id: 0,
                        result: r.result
                    }
                } catch (r) {
                    if ("string" === typeof r.message && r.message.match(/(denied|rejected)/i))
                        throw a.standardErrors.provider.userRejectedRequest("User denied transaction signature");
                    throw r
                }
            }
            async _eth_signTypedData_v1(e) {
                this._requireAuthorization();
                const t = (0,
                c.ensureParsedJSONObject)(e[0])
                  , r = (0,
                c.ensureAddressString)(e[1]);
                this._ensureKnownAddress(r);
                const n = f.default.hashForSignTypedDataLegacy({
                    data: t
                })
                  , s = JSON.stringify(t, null, 2);
                return this._signEthereumMessage(n, r, !1, s)
            }
            async _eth_signTypedData_v3(e) {
                this._requireAuthorization();
                const t = (0,
                c.ensureAddressString)(e[0])
                  , r = (0,
                c.ensureParsedJSONObject)(e[1]);
                this._ensureKnownAddress(t);
                const n = f.default.hashForSignTypedData_v3({
                    data: r
                })
                  , s = JSON.stringify(r, null, 2);
                return this._signEthereumMessage(n, t, !1, s)
            }
            async _eth_signTypedData_v4(e) {
                this._requireAuthorization();
                const t = (0,
                c.ensureAddressString)(e[0])
                  , r = (0,
                c.ensureParsedJSONObject)(e[1]);
                this._ensureKnownAddress(t);
                const n = f.default.hashForSignTypedData_v4({
                    data: r
                })
                  , s = JSON.stringify(r, null, 2);
                return this._signEthereumMessage(n, t, !1, s)
            }
            async _cbwallet_arbitrary(e) {
                const t = e[0]
                  , r = e[1];
                if ("string" !== typeof r)
                    throw new Error("parameter must be a string");
                if ("object" !== typeof t || null === t)
                    throw new Error("parameter must be an object");
                return {
                    jsonrpc: "2.0",
                    id: 0,
                    result: await this.genericRequest(t, r)
                }
            }
            async _wallet_addEthereumChain(e) {
                var t, r, n, s;
                const i = e[0];
                if (0 === (null === (t = i.rpcUrls) || void 0 === t ? void 0 : t.length))
                    return {
                        jsonrpc: "2.0",
                        id: 0,
                        error: {
                            code: 2,
                            message: "please pass in at least 1 rpcUrl"
                        }
                    };
                if (!i.chainName || "" === i.chainName.trim())
                    throw a.standardErrors.rpc.invalidParams("chainName is a required field");
                if (!i.nativeCurrency)
                    throw a.standardErrors.rpc.invalidParams("nativeCurrency is a required field");
                const o = parseInt(i.chainId, 16);
                return await this.addEthereumChain(o, null !== (r = i.rpcUrls) && void 0 !== r ? r : [], null !== (n = i.blockExplorerUrls) && void 0 !== n ? n : [], i.chainName, null !== (s = i.iconUrls) && void 0 !== s ? s : [], i.nativeCurrency) ? {
                    jsonrpc: "2.0",
                    id: 0,
                    result: null
                } : {
                    jsonrpc: "2.0",
                    id: 0,
                    error: {
                        code: 2,
                        message: "unable to add ethereum chain"
                    }
                }
            }
            async _wallet_switchEthereumChain(e) {
                const t = e[0];
                return await this.switchEthereumChain(parseInt(t.chainId, 16)),
                {
                    jsonrpc: "2.0",
                    id: 0,
                    result: null
                }
            }
            async _wallet_watchAsset(e) {
                const t = Array.isArray(e) ? e[0] : e;
                if (!t.type)
                    throw a.standardErrors.rpc.invalidParams("Type is required");
                if ("ERC20" !== (null === t || void 0 === t ? void 0 : t.type))
                    throw a.standardErrors.rpc.invalidParams(`Asset of type '${t.type}' is not supported`);
                if (!(null === t || void 0 === t ? void 0 : t.options))
                    throw a.standardErrors.rpc.invalidParams("Options are required");
                if (!(null === t || void 0 === t ? void 0 : t.options.address))
                    throw a.standardErrors.rpc.invalidParams("Address is required");
                const r = this.getChainId()
                  , {address: n, symbol: s, image: i, decimals: o} = t.options;
                return {
                    jsonrpc: "2.0",
                    id: 0,
                    result: await this.watchAsset(t.type, n, s, o, i, r)
                }
            }
            _eth_uninstallFilter(e) {
                const t = (0,
                c.ensureHexString)(e[0]);
                return this._filterPolyfill.uninstallFilter(t)
            }
            async _eth_newFilter(e) {
                const t = e[0];
                return {
                    jsonrpc: "2.0",
                    id: 0,
                    result: await this._filterPolyfill.newFilter(t)
                }
            }
            async _eth_newBlockFilter() {
                return {
                    jsonrpc: "2.0",
                    id: 0,
                    result: await this._filterPolyfill.newBlockFilter()
                }
            }
            async _eth_newPendingTransactionFilter() {
                return {
                    jsonrpc: "2.0",
                    id: 0,
                    result: await this._filterPolyfill.newPendingTransactionFilter()
                }
            }
            _eth_getFilterChanges(e) {
                const t = (0,
                c.ensureHexString)(e[0]);
                return this._filterPolyfill.getFilterChanges(t)
            }
            _eth_getFilterLogs(e) {
                const t = (0,
                c.ensureHexString)(e[0]);
                return this._filterPolyfill.getFilterLogs(t)
            }
            initializeRelay() {
                return this._relay ? Promise.resolve(this._relay) : this._relayProvider().then((e=>(e.setAccountsCallback(((e,t)=>this._setAddresses(e, t))),
                e.setChainCallback(((e,t)=>{
                    this.updateProviderInfo(t, parseInt(e, 10))
                }
                )),
                e.setDappDefaultChainCallback(this._chainIdFromOpts),
                this._relay = e,
                e)))
            }
        }
        t.CoinbaseWalletProvider = y
    },
    2220: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.EVENTS = void 0,
        t.EVENTS = {
            STARTED_CONNECTING: "walletlink_sdk.started.connecting",
            CONNECTED_STATE_CHANGE: "walletlink_sdk.connected",
            DISCONNECTED: "walletlink_sdk.disconnected",
            METADATA_DESTROYED: "walletlink_sdk_metadata_destroyed",
            LINKED: "walletlink_sdk.linked",
            FAILURE: "walletlink_sdk.generic_failure",
            SESSION_CONFIG_RECEIVED: "walletlink_sdk.session_config_event_received",
            ETH_ACCOUNTS_STATE: "walletlink_sdk.eth_accounts_state",
            SESSION_STATE_CHANGE: "walletlink_sdk.session_state_change",
            UNLINKED_ERROR_STATE: "walletlink_sdk.unlinked_error_state",
            SKIPPED_CLEARING_SESSION: "walletlink_sdk.skipped_clearing_session",
            GENERAL_ERROR: "walletlink_sdk.general_error",
            WEB3_REQUEST: "walletlink_sdk.web3.request",
            WEB3_REQUEST_PUBLISHED: "walletlink_sdk.web3.request_published",
            WEB3_RESPONSE: "walletlink_sdk.web3.response",
            METHOD_NOT_IMPLEMENTED: "walletlink_sdk.method_not_implemented",
            UNKNOWN_ADDRESS_ENCOUNTERED: "walletlink_sdk.unknown_address_encountered"
        }
    },
    20905: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.filterFromParam = t.FilterPolyfill = void 0;
        const n = r(97319)
          , s = r(93634)
          , i = {
            jsonrpc: "2.0",
            id: 0
        };
        function o(e) {
            return {
                fromBlock: c(e.fromBlock),
                toBlock: c(e.toBlock),
                addresses: void 0 === e.address ? null : Array.isArray(e.address) ? e.address : [e.address],
                topics: e.topics || []
            }
        }
        function a(e) {
            const t = {
                fromBlock: l(e.fromBlock),
                toBlock: l(e.toBlock),
                topics: e.topics
            };
            return null !== e.addresses && (t.address = e.addresses),
            t
        }
        function c(e) {
            if (void 0 === e || "latest" === e || "pending" === e)
                return "latest";
            if ("earliest" === e)
                return (0,
                n.IntNumber)(0);
            if ((0,
            s.isHexString)(e))
                return (0,
                s.intNumberFromHexString)(e);
            throw new Error(`Invalid block option: ${String(e)}`)
        }
        function l(e) {
            return "latest" === e ? e : (0,
            s.hexStringFromIntNumber)(e)
        }
        function u() {
            return Object.assign(Object.assign({}, i), {
                error: {
                    code: -32e3,
                    message: "filter not found"
                }
            })
        }
        function d() {
            return Object.assign(Object.assign({}, i), {
                result: []
            })
        }
        t.FilterPolyfill = class {
            constructor(e) {
                this.logFilters = new Map,
                this.blockFilters = new Set,
                this.pendingTransactionFilters = new Set,
                this.cursors = new Map,
                this.timeouts = new Map,
                this.nextFilterId = (0,
                n.IntNumber)(1),
                this.REQUEST_THROTTLE_INTERVAL = 1e3,
                this.lastFetchTimestamp = new Date(0),
                this.resolvers = [],
                this.provider = e
            }
            async newFilter(e) {
                const t = o(e)
                  , r = this.makeFilterId()
                  , n = await this.setInitialCursorPosition(r, t.fromBlock);
                return console.info(`Installing new log filter(${r}):`, t, "initial cursor position:", n),
                this.logFilters.set(r, t),
                this.setFilterTimeout(r),
                (0,
                s.hexStringFromIntNumber)(r)
            }
            async newBlockFilter() {
                const e = this.makeFilterId()
                  , t = await this.setInitialCursorPosition(e, "latest");
                return console.info(`Installing new block filter (${e}) with initial cursor position:`, t),
                this.blockFilters.add(e),
                this.setFilterTimeout(e),
                (0,
                s.hexStringFromIntNumber)(e)
            }
            async newPendingTransactionFilter() {
                const e = this.makeFilterId()
                  , t = await this.setInitialCursorPosition(e, "latest");
                return console.info(`Installing new block filter (${e}) with initial cursor position:`, t),
                this.pendingTransactionFilters.add(e),
                this.setFilterTimeout(e),
                (0,
                s.hexStringFromIntNumber)(e)
            }
            uninstallFilter(e) {
                const t = (0,
                s.intNumberFromHexString)(e);
                return console.info(`Uninstalling filter (${t})`),
                this.deleteFilter(t),
                !0
            }
            getFilterChanges(e) {
                const t = (0,
                s.intNumberFromHexString)(e);
                return this.timeouts.has(t) && this.setFilterTimeout(t),
                this.logFilters.has(t) ? this.getLogFilterChanges(t) : this.blockFilters.has(t) ? this.getBlockFilterChanges(t) : this.pendingTransactionFilters.has(t) ? this.getPendingTransactionFilterChanges(t) : Promise.resolve(u())
            }
            async getFilterLogs(e) {
                const t = (0,
                s.intNumberFromHexString)(e)
                  , r = this.logFilters.get(t);
                return r ? this.sendAsyncPromise(Object.assign(Object.assign({}, i), {
                    method: "eth_getLogs",
                    params: [a(r)]
                })) : u()
            }
            makeFilterId() {
                return (0,
                n.IntNumber)(++this.nextFilterId)
            }
            sendAsyncPromise(e) {
                return new Promise(((t,r)=>{
                    this.provider.sendAsync(e, ((e,n)=>e ? r(e) : Array.isArray(n) || null == n ? r(new Error(`unexpected response received: ${JSON.stringify(n)}`)) : void t(n)))
                }
                ))
            }
            deleteFilter(e) {
                console.info(`Deleting filter (${e})`),
                this.logFilters.delete(e),
                this.blockFilters.delete(e),
                this.pendingTransactionFilters.delete(e),
                this.cursors.delete(e),
                this.timeouts.delete(e)
            }
            async getLogFilterChanges(e) {
                const t = this.logFilters.get(e)
                  , r = this.cursors.get(e);
                if (!r || !t)
                    return u();
                const o = await this.getCurrentBlockHeight()
                  , c = "latest" === t.toBlock ? o : t.toBlock;
                if (r > o)
                    return d();
                if (r > Number(t.toBlock))
                    return d();
                console.info(`Fetching logs from ${r} to ${c} for filter ${e}`);
                const l = await this.sendAsyncPromise(Object.assign(Object.assign({}, i), {
                    method: "eth_getLogs",
                    params: [a(Object.assign(Object.assign({}, t), {
                        fromBlock: r,
                        toBlock: c
                    }))]
                }));
                if (Array.isArray(l.result)) {
                    const t = l.result.map((e=>(0,
                    s.intNumberFromHexString)(e.blockNumber || "0x0")))
                      , i = Math.max(...t);
                    if (i && i > r) {
                        const t = (0,
                        n.IntNumber)(i + 1);
                        console.info(`Moving cursor position for filter (${e}) from ${r} to ${t}`),
                        this.cursors.set(e, t)
                    }
                }
                return l
            }
            async getBlockFilterChanges(e) {
                const t = this.cursors.get(e);
                if (!t)
                    return u();
                const r = await this.getCurrentBlockHeight();
                if (t > r)
                    return d();
                console.info(`Fetching blocks from ${t} to ${r} for filter (${e})`);
                const o = (await Promise.all((0,
                s.range)(t, r + 1).map((e=>this.getBlockHashByNumber((0,
                n.IntNumber)(e)))))).filter((e=>!!e))
                  , a = (0,
                n.IntNumber)(t + o.length);
                return console.info(`Moving cursor position for filter (${e}) from ${t} to ${a}`),
                this.cursors.set(e, a),
                Object.assign(Object.assign({}, i), {
                    result: o
                })
            }
            async getPendingTransactionFilterChanges(e) {
                return Promise.resolve(d())
            }
            async setInitialCursorPosition(e, t) {
                const r = await this.getCurrentBlockHeight()
                  , n = "number" === typeof t && t > r ? t : r;
                return this.cursors.set(e, n),
                n
            }
            setFilterTimeout(e) {
                const t = this.timeouts.get(e);
                t && window.clearTimeout(t);
                const r = window.setTimeout((()=>{
                    console.info(`Filter (${e}) timed out`),
                    this.deleteFilter(e)
                }
                ), 3e5);
                this.timeouts.set(e, r)
            }
            async getCurrentBlockHeight() {
                const e = new Date;
                if (e.getTime() - this.lastFetchTimestamp.getTime() > this.REQUEST_THROTTLE_INTERVAL) {
                    this.lastFetchTimestamp = e;
                    const t = await this._getCurrentBlockHeight();
                    this.currentBlockHeight = t,
                    this.resolvers.forEach((e=>e(t))),
                    this.resolvers = []
                }
                return this.currentBlockHeight ? this.currentBlockHeight : new Promise((e=>this.resolvers.push(e)))
            }
            async _getCurrentBlockHeight() {
                const {result: e} = await this.sendAsyncPromise(Object.assign(Object.assign({}, i), {
                    method: "eth_blockNumber",
                    params: []
                }));
                return (0,
                s.intNumberFromHexString)((0,
                s.ensureHexString)(e))
            }
            async getBlockHashByNumber(e) {
                const t = await this.sendAsyncPromise(Object.assign(Object.assign({}, i), {
                    method: "eth_getBlockByNumber",
                    params: [(0,
                    s.hexStringFromIntNumber)(e), !1]
                }));
                return t.result && "string" === typeof t.result.hash ? (0,
                s.ensureHexString)(t.result.hash) : null
            }
        }
        ,
        t.filterFromParam = o
    },
    23508: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.SubscriptionManager = void 0;
        const n = r(6381)
          , s = r(32354)
          , i = ()=>{}
        ;
        t.SubscriptionManager = class {
            constructor(e) {
                const t = new n.PollingBlockTracker({
                    provider: e,
                    pollingInterval: 15e3,
                    setSkipCacheFlag: !0
                })
                  , {events: r, middleware: i} = s({
                    blockTracker: t,
                    provider: e
                });
                this.events = r,
                this.subscriptionMiddleware = i
            }
            async handleRequest(e) {
                const t = {};
                return await this.subscriptionMiddleware(e, t, i, i),
                t
            }
            destroy() {
                this.subscriptionMiddleware.destroy()
            }
        }
    },
    96355: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.RelayAbstract = t.APP_VERSION_KEY = t.LOCAL_STORAGE_ADDRESSES_KEY = t.WALLET_USER_NAME_KEY = void 0;
        const n = r(20458);
        t.WALLET_USER_NAME_KEY = "walletUsername",
        t.LOCAL_STORAGE_ADDRESSES_KEY = "Addresses",
        t.APP_VERSION_KEY = "AppVersion";
        t.RelayAbstract = class {
            async makeEthereumJSONRPCRequest(e, t) {
                if (!t)
                    throw new Error("Error: No jsonRpcUrl provided");
                return window.fetch(t, {
                    method: "POST",
                    body: JSON.stringify(e),
                    mode: "cors",
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then((e=>e.json())).then((t=>{
                    if (!t)
                        throw n.standardErrors.rpc.parse({});
                    const r = t
                      , {error: s} = r;
                    if (s)
                        throw (0,
                        n.serializeError)(s, e.method);
                    return r
                }
                ))
            }
        }
    },
    72672: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.RelayEventManager = void 0;
        const n = r(93634);
        t.RelayEventManager = class {
            constructor() {
                this._nextRequestId = 0,
                this.callbacks = new Map
            }
            makeRequestId() {
                this._nextRequestId = (this._nextRequestId + 1) % 2147483647;
                const e = this._nextRequestId
                  , t = (0,
                n.prepend0x)(e.toString(16));
                return this.callbacks.get(t) && this.callbacks.delete(t),
                e
            }
        }
    },
    24109: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.Session = void 0;
        const n = r(46926)
          , s = r(93634)
          , i = "session:id"
          , o = "session:secret"
          , a = "session:linked";
        class c {
            constructor(e, t, r, i) {
                this._storage = e,
                this._id = t || (0,
                s.randomBytesHex)(16),
                this._secret = r || (0,
                s.randomBytesHex)(32),
                this._key = (new n.sha256).update(`${this._id}, ${this._secret} WalletLink`).digest("hex"),
                this._linked = !!i
            }
            static load(e) {
                const t = e.getItem(i)
                  , r = e.getItem(a)
                  , n = e.getItem(o);
                return t && n ? new c(e,t,n,"1" === r) : null
            }
            static hash(e) {
                return (new n.sha256).update(e).digest("hex")
            }
            get id() {
                return this._id
            }
            get secret() {
                return this._secret
            }
            get key() {
                return this._key
            }
            get linked() {
                return this._linked
            }
            set linked(e) {
                this._linked = e,
                this.persistLinked()
            }
            save() {
                return this._storage.setItem(i, this._id),
                this._storage.setItem(o, this._secret),
                this.persistLinked(),
                this
            }
            persistLinked() {
                this._storage.setItem(a, this._linked ? "1" : "0")
            }
        }
        t.Session = c
    },
    41660: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.MobileRelay = void 0;
        const n = r(93634)
          , s = r(17813)
          , i = r(5549);
        class o extends s.WalletLinkRelay {
            constructor(e) {
                var t;
                super(e),
                this._enableMobileWalletLink = null !== (t = e.enableMobileWalletLink) && void 0 !== t && t
            }
            requestEthereumAccounts() {
                return this._enableMobileWalletLink ? super.requestEthereumAccounts() : {
                    promise: new Promise((()=>{
                        const e = (0,
                        n.getLocation)();
                        e.href = `https://go.cb-w.com/dapp?cb_url=${encodeURIComponent(e.href)}`
                    }
                    )),
                    cancel: ()=>{}
                }
            }
            publishWeb3RequestEvent(e, t) {
                if (super.publishWeb3RequestEvent(e, t),
                !(this._enableMobileWalletLink && this.ui instanceof i.MobileRelayUI))
                    return;
                let r = !1;
                switch (t.method) {
                case "requestEthereumAccounts":
                case "connectAndSignIn":
                    r = !0,
                    this.ui.openCoinbaseWalletDeeplink(this.getQRCodeUrl());
                    break;
                case "switchEthereumChain":
                    return;
                default:
                    r = !0,
                    this.ui.openCoinbaseWalletDeeplink()
                }
                r && window.addEventListener("blur", (()=>{
                    window.addEventListener("focus", (()=>{
                        this.connection.checkUnseenEvents()
                    }
                    ), {
                        once: !0
                    })
                }
                ), {
                    once: !0
                })
            }
            handleWeb3ResponseMessage(e) {
                super.handleWeb3ResponseMessage(e),
                this._enableMobileWalletLink && this.ui instanceof i.MobileRelayUI && this.ui.closeOpenedWindow()
            }
            connectAndSignIn(e) {
                if (!this._enableMobileWalletLink)
                    throw new Error("connectAndSignIn is supported only when enableMobileWalletLink is on");
                return this.sendRequest({
                    method: "connectAndSignIn",
                    params: {
                        appName: this.appName,
                        appLogoUrl: this.appLogoUrl,
                        domain: window.location.hostname,
                        aud: window.location.href,
                        version: "1",
                        type: "eip4361",
                        nonce: e.nonce,
                        iat: (new Date).toISOString(),
                        chainId: `eip155:${this.dappDefaultChain}`,
                        statement: e.statement,
                        resources: e.resources
                    }
                })
            }
        }
        t.MobileRelay = o
    },
    5549: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.MobileRelayUI = void 0;
        const n = r(76677);
        t.MobileRelayUI = class {
            constructor(e) {
                this.attached = !1,
                this.darkMode = !1,
                this.openedWindow = null,
                this.redirectDialog = new n.RedirectDialog,
                this.darkMode = e.darkMode
            }
            attach() {
                if (this.attached)
                    throw new Error("Coinbase Wallet SDK UI is already attached");
                this.redirectDialog.attach(),
                this.attached = !0
            }
            setConnected(e) {}
            closeOpenedWindow() {
                var e;
                null === (e = this.openedWindow) || void 0 === e || e.close(),
                this.openedWindow = null
            }
            redirectToCoinbaseWallet(e) {
                const t = new URL("https://go.cb-w.com/walletlink");
                t.searchParams.append("redirect_url", window.location.href),
                e && t.searchParams.append("wl_url", e),
                this.openedWindow = window.open(t.href, "cbw-opener"),
                this.openedWindow && setTimeout((()=>this.closeOpenedWindow()), 5e3)
            }
            openCoinbaseWalletDeeplink(e) {
                this.redirectDialog.present({
                    title: "Redirecting to Coinbase Wallet...",
                    buttonText: "Open",
                    darkMode: this.darkMode,
                    onButtonClick: ()=>{
                        this.redirectToCoinbaseWallet(e)
                    }
                }),
                setTimeout((()=>{
                    this.redirectToCoinbaseWallet(e)
                }
                ), 99)
            }
            showConnecting(e) {
                return ()=>{
                    this.closeOpenedWindow(),
                    this.redirectDialog.clear()
                }
            }
            hideRequestEthereumAccounts() {
                this.closeOpenedWindow(),
                this.redirectDialog.clear()
            }
            requestEthereumAccounts() {}
            addEthereumChain() {}
            watchAsset() {}
            selectProvider() {}
            switchEthereumChain() {}
            signEthereumMessage() {}
            signEthereumTransaction() {}
            submitEthereumTransaction() {}
            ethereumAddressFromSignedMessage() {}
            reloadUI() {}
            setStandalone() {}
            setConnectDisabled() {}
            inlineAccountsResponse() {
                return !1
            }
            inlineAddEthereumChain() {
                return !1
            }
            inlineWatchAsset() {
                return !1
            }
            inlineSwitchEthereumChain() {
                return !1
            }
            isStandalone() {
                return !1
            }
        }
    },
    17813: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.WalletLinkRelay = void 0;
        const n = r(20458)
          , s = r(97319)
          , i = r(93634)
          , o = r(2220)
          , a = r(96355)
          , c = r(24109)
          , l = r(99942)
          , u = r(96279)
          , d = r(25752);
        class h extends a.RelayAbstract {
            constructor(e) {
                var t;
                super(),
                this.accountsCallback = null,
                this.chainCallbackParams = {
                    chainId: "",
                    jsonRpcUrl: ""
                },
                this.chainCallback = null,
                this.dappDefaultChain = 1,
                this.appName = "",
                this.appLogoUrl = null,
                this.linkedUpdated = e=>{
                    var t;
                    this.isLinked = e;
                    const r = this.storage.getItem(a.LOCAL_STORAGE_ADDRESSES_KEY);
                    if (e && (this.session.linked = e),
                    this.isUnlinkedErrorState = !1,
                    r) {
                        const n = r.split(" ")
                          , s = "true" === this.storage.getItem("IsStandaloneSigning");
                        if ("" !== n[0] && !e && this.session.linked && !s) {
                            this.isUnlinkedErrorState = !0;
                            const e = this.getSessionIdHash();
                            null === (t = this.diagnostic) || void 0 === t || t.log(o.EVENTS.UNLINKED_ERROR_STATE, {
                                sessionIdHash: e
                            })
                        }
                    }
                }
                ,
                this.metadataUpdated = (e,t)=>{
                    this.storage.setItem(e, t)
                }
                ,
                this.chainUpdated = (e,t)=>{
                    this.chainCallbackParams.chainId === e && this.chainCallbackParams.jsonRpcUrl === t || (this.chainCallbackParams = {
                        chainId: e,
                        jsonRpcUrl: t
                    },
                    this.chainCallback && this.chainCallback(e, t))
                }
                ,
                this.accountUpdated = e=>{
                    this.accountsCallback && this.accountsCallback([e]),
                    h.accountRequestCallbackIds.size > 0 && (Array.from(h.accountRequestCallbackIds.values()).forEach((t=>{
                        const r = {
                            type: "WEB3_RESPONSE",
                            id: t,
                            response: {
                                method: "requestEthereumAccounts",
                                result: [e]
                            }
                        };
                        this.invokeCallback(Object.assign(Object.assign({}, r), {
                            id: t
                        }))
                    }
                    )),
                    h.accountRequestCallbackIds.clear())
                }
                ,
                this.connectedUpdated = e=>{
                    this.ui.setConnected(e)
                }
                ,
                this.resetAndReload = this.resetAndReload.bind(this),
                this.linkAPIUrl = e.linkAPIUrl,
                this.storage = e.storage,
                this.options = e;
                const {session: r, ui: n, connection: s} = this.subscribe();
                this._session = r,
                this.connection = s,
                this.relayEventManager = e.relayEventManager,
                this.diagnostic = e.diagnosticLogger,
                this._reloadOnDisconnect = null === (t = e.reloadOnDisconnect) || void 0 === t || t,
                this.ui = n
            }
            subscribe() {
                const e = c.Session.load(this.storage) || new c.Session(this.storage).save()
                  , {linkAPIUrl: t, diagnostic: r} = this
                  , n = new l.WalletLinkConnection({
                    session: e,
                    linkAPIUrl: t,
                    diagnostic: r,
                    listener: this
                })
                  , {version: s, darkMode: i} = this.options
                  , o = this.options.uiConstructor({
                    linkAPIUrl: t,
                    version: s,
                    darkMode: i,
                    session: e
                });
                return n.connect(),
                {
                    session: e,
                    ui: o,
                    connection: n
                }
            }
            attachUI() {
                this.ui.attach()
            }
            resetAndReload() {
                Promise.race([this.connection.setSessionMetadata("__destroyed", "1"), new Promise((e=>setTimeout((()=>e(null)), 1e3)))]).then((()=>{
                    var e, t;
                    const r = this.ui.isStandalone();
                    null === (e = this.diagnostic) || void 0 === e || e.log(o.EVENTS.SESSION_STATE_CHANGE, {
                        method: "relay::resetAndReload",
                        sessionMetadataChange: "__destroyed, 1",
                        sessionIdHash: this.getSessionIdHash()
                    }),
                    this.connection.destroy();
                    const n = c.Session.load(this.storage);
                    if ((null === n || void 0 === n ? void 0 : n.id) === this._session.id ? this.storage.clear() : n && (null === (t = this.diagnostic) || void 0 === t || t.log(o.EVENTS.SKIPPED_CLEARING_SESSION, {
                        sessionIdHash: this.getSessionIdHash(),
                        storedSessionIdHash: c.Session.hash(n.id)
                    })),
                    this._reloadOnDisconnect)
                        return void this.ui.reloadUI();
                    this.accountsCallback && this.accountsCallback([], !0);
                    const {session: s, ui: i, connection: a} = this.subscribe();
                    this._session = s,
                    this.connection = a,
                    this.ui = i,
                    r && this.ui.setStandalone && this.ui.setStandalone(!0),
                    this.attachUI()
                }
                )).catch((e=>{
                    var t;
                    null === (t = this.diagnostic) || void 0 === t || t.log(o.EVENTS.FAILURE, {
                        method: "relay::resetAndReload",
                        message: `failed to reset and reload with ${e}`,
                        sessionIdHash: this.getSessionIdHash()
                    })
                }
                ))
            }
            setAppInfo(e, t) {
                this.appName = e,
                this.appLogoUrl = t
            }
            getStorageItem(e) {
                return this.storage.getItem(e)
            }
            get session() {
                return this._session
            }
            setStorageItem(e, t) {
                this.storage.setItem(e, t)
            }
            signEthereumMessage(e, t, r, n) {
                return this.sendRequest({
                    method: "signEthereumMessage",
                    params: {
                        message: (0,
                        i.hexStringFromBuffer)(e, !0),
                        address: t,
                        addPrefix: r,
                        typedDataJson: n || null
                    }
                })
            }
            ethereumAddressFromSignedMessage(e, t, r) {
                return this.sendRequest({
                    method: "ethereumAddressFromSignedMessage",
                    params: {
                        message: (0,
                        i.hexStringFromBuffer)(e, !0),
                        signature: (0,
                        i.hexStringFromBuffer)(t, !0),
                        addPrefix: r
                    }
                })
            }
            signEthereumTransaction(e) {
                return this.sendRequest({
                    method: "signEthereumTransaction",
                    params: {
                        fromAddress: e.fromAddress,
                        toAddress: e.toAddress,
                        weiValue: (0,
                        i.bigIntStringFromBN)(e.weiValue),
                        data: (0,
                        i.hexStringFromBuffer)(e.data, !0),
                        nonce: e.nonce,
                        gasPriceInWei: e.gasPriceInWei ? (0,
                        i.bigIntStringFromBN)(e.gasPriceInWei) : null,
                        maxFeePerGas: e.gasPriceInWei ? (0,
                        i.bigIntStringFromBN)(e.gasPriceInWei) : null,
                        maxPriorityFeePerGas: e.gasPriceInWei ? (0,
                        i.bigIntStringFromBN)(e.gasPriceInWei) : null,
                        gasLimit: e.gasLimit ? (0,
                        i.bigIntStringFromBN)(e.gasLimit) : null,
                        chainId: e.chainId,
                        shouldSubmit: !1
                    }
                })
            }
            signAndSubmitEthereumTransaction(e) {
                return this.sendRequest({
                    method: "signEthereumTransaction",
                    params: {
                        fromAddress: e.fromAddress,
                        toAddress: e.toAddress,
                        weiValue: (0,
                        i.bigIntStringFromBN)(e.weiValue),
                        data: (0,
                        i.hexStringFromBuffer)(e.data, !0),
                        nonce: e.nonce,
                        gasPriceInWei: e.gasPriceInWei ? (0,
                        i.bigIntStringFromBN)(e.gasPriceInWei) : null,
                        maxFeePerGas: e.maxFeePerGas ? (0,
                        i.bigIntStringFromBN)(e.maxFeePerGas) : null,
                        maxPriorityFeePerGas: e.maxPriorityFeePerGas ? (0,
                        i.bigIntStringFromBN)(e.maxPriorityFeePerGas) : null,
                        gasLimit: e.gasLimit ? (0,
                        i.bigIntStringFromBN)(e.gasLimit) : null,
                        chainId: e.chainId,
                        shouldSubmit: !0
                    }
                })
            }
            submitEthereumTransaction(e, t) {
                return this.sendRequest({
                    method: "submitEthereumTransaction",
                    params: {
                        signedTransaction: (0,
                        i.hexStringFromBuffer)(e, !0),
                        chainId: t
                    }
                })
            }
            scanQRCode(e) {
                return this.sendRequest({
                    method: "scanQRCode",
                    params: {
                        regExp: e
                    }
                })
            }
            getQRCodeUrl() {
                return (0,
                i.createQrUrl)(this._session.id, this._session.secret, this.linkAPIUrl, !1, this.options.version, this.dappDefaultChain)
            }
            genericRequest(e, t) {
                return this.sendRequest({
                    method: "generic",
                    params: {
                        action: t,
                        data: e
                    }
                })
            }
            sendGenericMessage(e) {
                return this.sendRequest(e)
            }
            sendRequest(e) {
                let t = null;
                const r = (0,
                i.randomBytesHex)(8)
                  , n = n=>{
                    this.publishWeb3RequestCanceledEvent(r),
                    this.handleErrorResponse(r, e.method, n),
                    null === t || void 0 === t || t()
                }
                ;
                return {
                    promise: new Promise(((s,i)=>{
                        this.ui.isStandalone() || (t = this.ui.showConnecting({
                            isUnlinkedErrorState: this.isUnlinkedErrorState,
                            onCancel: n,
                            onResetConnection: this.resetAndReload
                        })),
                        this.relayEventManager.callbacks.set(r, (e=>{
                            if (null === t || void 0 === t || t(),
                            (0,
                            u.isErrorResponse)(e))
                                return i(new Error(e.errorMessage));
                            s(e)
                        }
                        )),
                        this.ui.isStandalone() ? this.sendRequestStandalone(r, e) : this.publishWeb3RequestEvent(r, e)
                    }
                    )),
                    cancel: n
                }
            }
            setConnectDisabled(e) {
                this.ui.setConnectDisabled(e)
            }
            setAccountsCallback(e) {
                this.accountsCallback = e
            }
            setChainCallback(e) {
                this.chainCallback = e
            }
            setDappDefaultChainCallback(e) {
                this.dappDefaultChain = e,
                this.ui instanceof d.WalletLinkRelayUI && this.ui.setChainId(e)
            }
            publishWeb3RequestEvent(e, t) {
                var r;
                const n = {
                    type: "WEB3_REQUEST",
                    id: e,
                    request: t
                }
                  , s = c.Session.load(this.storage);
                null === (r = this.diagnostic) || void 0 === r || r.log(o.EVENTS.WEB3_REQUEST, {
                    eventId: n.id,
                    method: `relay::${t.method}`,
                    sessionIdHash: this.getSessionIdHash(),
                    storedSessionIdHash: s ? c.Session.hash(s.id) : "",
                    isSessionMismatched: ((null === s || void 0 === s ? void 0 : s.id) !== this._session.id).toString()
                }),
                this.publishEvent("Web3Request", n, !0).then((e=>{
                    var r;
                    null === (r = this.diagnostic) || void 0 === r || r.log(o.EVENTS.WEB3_REQUEST_PUBLISHED, {
                        eventId: n.id,
                        method: `relay::${t.method}`,
                        sessionIdHash: this.getSessionIdHash(),
                        storedSessionIdHash: s ? c.Session.hash(s.id) : "",
                        isSessionMismatched: ((null === s || void 0 === s ? void 0 : s.id) !== this._session.id).toString()
                    })
                }
                )).catch((e=>{
                    this.handleWeb3ResponseMessage({
                        type: "WEB3_RESPONSE",
                        id: n.id,
                        response: {
                            method: t.method,
                            errorMessage: e.message
                        }
                    })
                }
                ))
            }
            publishWeb3RequestCanceledEvent(e) {
                const t = {
                    type: "WEB3_REQUEST_CANCELED",
                    id: e
                };
                this.publishEvent("Web3RequestCanceled", t, !1).then()
            }
            publishEvent(e, t, r) {
                return this.connection.publishEvent(e, t, r)
            }
            handleWeb3ResponseMessage(e) {
                var t;
                const {response: r} = e;
                if (null === (t = this.diagnostic) || void 0 === t || t.log(o.EVENTS.WEB3_RESPONSE, {
                    eventId: e.id,
                    method: `relay::${r.method}`,
                    sessionIdHash: this.getSessionIdHash()
                }),
                "requestEthereumAccounts" === r.method)
                    return h.accountRequestCallbackIds.forEach((t=>this.invokeCallback(Object.assign(Object.assign({}, e), {
                        id: t
                    })))),
                    void h.accountRequestCallbackIds.clear();
                this.invokeCallback(e)
            }
            handleErrorResponse(e, t, r, s) {
                var i;
                const o = null !== (i = null === r || void 0 === r ? void 0 : r.message) && void 0 !== i ? i : (0,
                n.getMessageFromCode)(s);
                this.handleWeb3ResponseMessage({
                    type: "WEB3_RESPONSE",
                    id: e,
                    response: {
                        method: t,
                        errorMessage: o,
                        errorCode: s
                    }
                })
            }
            invokeCallback(e) {
                const t = this.relayEventManager.callbacks.get(e.id);
                t && (t(e.response),
                this.relayEventManager.callbacks.delete(e.id))
            }
            requestEthereumAccounts() {
                const e = {
                    method: "requestEthereumAccounts",
                    params: {
                        appName: this.appName,
                        appLogoUrl: this.appLogoUrl || null
                    }
                }
                  , t = (0,
                i.randomBytesHex)(8)
                  , r = r=>{
                    this.publishWeb3RequestCanceledEvent(t),
                    this.handleErrorResponse(t, e.method, r)
                }
                ;
                return {
                    promise: new Promise(((s,i)=>{
                        if (this.relayEventManager.callbacks.set(t, (e=>{
                            if (this.ui.hideRequestEthereumAccounts(),
                            (0,
                            u.isErrorResponse)(e))
                                return i(new Error(e.errorMessage));
                            s(e)
                        }
                        )),
                        this.ui.inlineAccountsResponse()) {
                            const e = e=>{
                                this.handleWeb3ResponseMessage({
                                    type: "WEB3_RESPONSE",
                                    id: t,
                                    response: {
                                        method: "requestEthereumAccounts",
                                        result: e
                                    }
                                })
                            }
                            ;
                            this.ui.requestEthereumAccounts({
                                onCancel: r,
                                onAccounts: e
                            })
                        } else {
                            const e = n.standardErrors.provider.userRejectedRequest("User denied account authorization");
                            this.ui.requestEthereumAccounts({
                                onCancel: ()=>r(e)
                            })
                        }
                        h.accountRequestCallbackIds.add(t),
                        this.ui.inlineAccountsResponse() || this.ui.isStandalone() || this.publishWeb3RequestEvent(t, e)
                    }
                    )),
                    cancel: r
                }
            }
            selectProvider(e) {
                const t = "selectProvider"
                  , r = (0,
                i.randomBytesHex)(8);
                return {
                    cancel: e=>{
                        this.publishWeb3RequestCanceledEvent(r),
                        this.handleErrorResponse(r, t, e)
                    }
                    ,
                    promise: new Promise(((t,n)=>{
                        this.relayEventManager.callbacks.set(r, (e=>{
                            if ((0,
                            u.isErrorResponse)(e))
                                return n(new Error(e.errorMessage));
                            t(e)
                        }
                        ));
                        this.ui.selectProvider && this.ui.selectProvider({
                            onApprove: e=>{
                                this.handleWeb3ResponseMessage({
                                    type: "WEB3_RESPONSE",
                                    id: r,
                                    response: {
                                        method: "selectProvider",
                                        result: e
                                    }
                                })
                            }
                            ,
                            onCancel: e=>{
                                this.handleWeb3ResponseMessage({
                                    type: "WEB3_RESPONSE",
                                    id: r,
                                    response: {
                                        method: "selectProvider",
                                        result: s.ProviderType.Unselected
                                    }
                                })
                            }
                            ,
                            providerOptions: e
                        })
                    }
                    ))
                }
            }
            watchAsset(e, t, r, n, s, o) {
                const a = {
                    method: "watchAsset",
                    params: {
                        type: e,
                        options: {
                            address: t,
                            symbol: r,
                            decimals: n,
                            image: s
                        },
                        chainId: o
                    }
                };
                let c = null;
                const l = (0,
                i.randomBytesHex)(8)
                  , d = e=>{
                    this.publishWeb3RequestCanceledEvent(l),
                    this.handleErrorResponse(l, a.method, e),
                    null === c || void 0 === c || c()
                }
                ;
                this.ui.inlineWatchAsset() || (c = this.ui.showConnecting({
                    isUnlinkedErrorState: this.isUnlinkedErrorState,
                    onCancel: d,
                    onResetConnection: this.resetAndReload
                }));
                return {
                    cancel: d,
                    promise: new Promise(((i,d)=>{
                        this.relayEventManager.callbacks.set(l, (e=>{
                            if (null === c || void 0 === c || c(),
                            (0,
                            u.isErrorResponse)(e))
                                return d(new Error(e.errorMessage));
                            i(e)
                        }
                        ));
                        const h = e=>{
                            this.handleWeb3ResponseMessage({
                                type: "WEB3_RESPONSE",
                                id: l,
                                response: {
                                    method: "watchAsset",
                                    result: !1
                                }
                            })
                        }
                          , f = ()=>{
                            this.handleWeb3ResponseMessage({
                                type: "WEB3_RESPONSE",
                                id: l,
                                response: {
                                    method: "watchAsset",
                                    result: !0
                                }
                            })
                        }
                        ;
                        this.ui.inlineWatchAsset() && this.ui.watchAsset({
                            onApprove: f,
                            onCancel: h,
                            type: e,
                            address: t,
                            symbol: r,
                            decimals: n,
                            image: s,
                            chainId: o
                        }),
                        this.ui.inlineWatchAsset() || this.ui.isStandalone() || this.publishWeb3RequestEvent(l, a)
                    }
                    ))
                }
            }
            addEthereumChain(e, t, r, n, s, o) {
                const a = {
                    method: "addEthereumChain",
                    params: {
                        chainId: e,
                        rpcUrls: t,
                        blockExplorerUrls: n,
                        chainName: s,
                        iconUrls: r,
                        nativeCurrency: o
                    }
                };
                let c = null;
                const l = (0,
                i.randomBytesHex)(8)
                  , d = e=>{
                    this.publishWeb3RequestCanceledEvent(l),
                    this.handleErrorResponse(l, a.method, e),
                    null === c || void 0 === c || c()
                }
                ;
                this.ui.inlineAddEthereumChain(e) || (c = this.ui.showConnecting({
                    isUnlinkedErrorState: this.isUnlinkedErrorState,
                    onCancel: d,
                    onResetConnection: this.resetAndReload
                }));
                return {
                    promise: new Promise(((t,r)=>{
                        this.relayEventManager.callbacks.set(l, (e=>{
                            if (null === c || void 0 === c || c(),
                            (0,
                            u.isErrorResponse)(e))
                                return r(new Error(e.errorMessage));
                            t(e)
                        }
                        ));
                        const n = e=>{
                            this.handleWeb3ResponseMessage({
                                type: "WEB3_RESPONSE",
                                id: l,
                                response: {
                                    method: "addEthereumChain",
                                    result: {
                                        isApproved: !1,
                                        rpcUrl: ""
                                    }
                                }
                            })
                        }
                          , s = e=>{
                            this.handleWeb3ResponseMessage({
                                type: "WEB3_RESPONSE",
                                id: l,
                                response: {
                                    method: "addEthereumChain",
                                    result: {
                                        isApproved: !0,
                                        rpcUrl: e
                                    }
                                }
                            })
                        }
                        ;
                        this.ui.inlineAddEthereumChain(e) && this.ui.addEthereumChain({
                            onCancel: n,
                            onApprove: s,
                            chainId: a.params.chainId,
                            rpcUrls: a.params.rpcUrls,
                            blockExplorerUrls: a.params.blockExplorerUrls,
                            chainName: a.params.chainName,
                            iconUrls: a.params.iconUrls,
                            nativeCurrency: a.params.nativeCurrency
                        }),
                        this.ui.inlineAddEthereumChain(e) || this.ui.isStandalone() || this.publishWeb3RequestEvent(l, a)
                    }
                    )),
                    cancel: d
                }
            }
            switchEthereumChain(e, t) {
                const r = {
                    method: "switchEthereumChain",
                    params: Object.assign({
                        chainId: e
                    }, {
                        address: t
                    })
                }
                  , s = (0,
                i.randomBytesHex)(8);
                return {
                    promise: new Promise(((t,i)=>{
                        this.relayEventManager.callbacks.set(s, (e=>(0,
                        u.isErrorResponse)(e) && e.errorCode ? i(n.standardErrors.provider.custom({
                            code: e.errorCode,
                            message: "Unrecognized chain ID. Try adding the chain using addEthereumChain first."
                        })) : (0,
                        u.isErrorResponse)(e) ? i(new Error(e.errorMessage)) : void t(e)));
                        this.ui.switchEthereumChain({
                            onCancel: t=>{
                                var r;
                                if (t) {
                                    const i = null !== (r = (0,
                                    n.getErrorCode)(t)) && void 0 !== r ? r : n.standardErrorCodes.provider.unsupportedChain;
                                    this.handleErrorResponse(s, "switchEthereumChain", t instanceof Error ? t : n.standardErrors.provider.unsupportedChain(e), i)
                                } else
                                    this.handleWeb3ResponseMessage({
                                        type: "WEB3_RESPONSE",
                                        id: s,
                                        response: {
                                            method: "switchEthereumChain",
                                            result: {
                                                isApproved: !1,
                                                rpcUrl: ""
                                            }
                                        }
                                    })
                            }
                            ,
                            onApprove: e=>{
                                this.handleWeb3ResponseMessage({
                                    type: "WEB3_RESPONSE",
                                    id: s,
                                    response: {
                                        method: "switchEthereumChain",
                                        result: {
                                            isApproved: !0,
                                            rpcUrl: e
                                        }
                                    }
                                })
                            }
                            ,
                            chainId: r.params.chainId,
                            address: r.params.address
                        }),
                        this.ui.inlineSwitchEthereumChain() || this.ui.isStandalone() || this.publishWeb3RequestEvent(s, r)
                    }
                    )),
                    cancel: e=>{
                        this.publishWeb3RequestCanceledEvent(s),
                        this.handleErrorResponse(s, r.method, e)
                    }
                }
            }
            inlineAddEthereumChain(e) {
                return this.ui.inlineAddEthereumChain(e)
            }
            getSessionIdHash() {
                return c.Session.hash(this._session.id)
            }
            sendRequestStandalone(e, t) {
                const r = r=>{
                    this.handleErrorResponse(e, t.method, r)
                }
                  , n = t=>{
                    this.handleWeb3ResponseMessage({
                        type: "WEB3_RESPONSE",
                        id: e,
                        response: t
                    })
                }
                ;
                switch (t.method) {
                case "signEthereumMessage":
                    this.ui.signEthereumMessage({
                        request: t,
                        onSuccess: n,
                        onCancel: r
                    });
                    break;
                case "signEthereumTransaction":
                    this.ui.signEthereumTransaction({
                        request: t,
                        onSuccess: n,
                        onCancel: r
                    });
                    break;
                case "submitEthereumTransaction":
                    this.ui.submitEthereumTransaction({
                        request: t,
                        onSuccess: n,
                        onCancel: r
                    });
                    break;
                case "ethereumAddressFromSignedMessage":
                    this.ui.ethereumAddressFromSignedMessage({
                        request: t,
                        onSuccess: n
                    });
                    break;
                default:
                    r()
                }
            }
        }
        t.WalletLinkRelay = h,
        h.accountRequestCallbackIds = new Set
    },
    99942: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.WalletLinkConnection = void 0;
        const n = r(97319)
          , s = r(17226)
          , i = r(2220)
          , o = r(96355)
          , a = r(24109)
          , c = r(48294)
          , l = r(14432);
        t.WalletLinkConnection = class {
            constructor({session: e, linkAPIUrl: t, listener: r, diagnostic: u, WebSocketClass: d=WebSocket}) {
                this.destroyed = !1,
                this.lastHeartbeatResponse = 0,
                this.nextReqId = (0,
                n.IntNumber)(1),
                this._connected = !1,
                this._linked = !1,
                this.shouldFetchUnseenEventsOnConnect = !1,
                this.requestResolutions = new Map,
                this.handleSessionMetadataUpdated = e=>{
                    if (!e)
                        return;
                    new Map([["__destroyed", this.handleDestroyed], ["EthereumAddress", this.handleAccountUpdated], ["WalletUsername", this.handleWalletUsernameUpdated], ["AppVersion", this.handleAppVersionUpdated], ["ChainId", t=>e.JsonRpcUrl && this.handleChainUpdated(t, e.JsonRpcUrl)]]).forEach(((t,r)=>{
                        const n = e[r];
                        void 0 !== n && t(n)
                    }
                    ))
                }
                ,
                this.handleDestroyed = e=>{
                    var t, r;
                    "1" === e && (null === (t = this.listener) || void 0 === t || t.resetAndReload(),
                    null === (r = this.diagnostic) || void 0 === r || r.log(i.EVENTS.METADATA_DESTROYED, {
                        alreadyDestroyed: this.isDestroyed,
                        sessionIdHash: a.Session.hash(this.session.id)
                    }))
                }
                ,
                this.handleAccountUpdated = async e=>{
                    var t, r;
                    try {
                        const r = await this.cipher.decrypt(e);
                        null === (t = this.listener) || void 0 === t || t.accountUpdated(r)
                    } catch (n) {
                        null === (r = this.diagnostic) || void 0 === r || r.log(i.EVENTS.GENERAL_ERROR, {
                            message: "Had error decrypting",
                            value: "selectedAddress"
                        })
                    }
                }
                ,
                this.handleMetadataUpdated = async(e,t)=>{
                    var r, n;
                    try {
                        const n = await this.cipher.decrypt(t);
                        null === (r = this.listener) || void 0 === r || r.metadataUpdated(e, n)
                    } catch (s) {
                        null === (n = this.diagnostic) || void 0 === n || n.log(i.EVENTS.GENERAL_ERROR, {
                            message: "Had error decrypting",
                            value: e
                        })
                    }
                }
                ,
                this.handleWalletUsernameUpdated = async e=>{
                    this.handleMetadataUpdated(o.WALLET_USER_NAME_KEY, e)
                }
                ,
                this.handleAppVersionUpdated = async e=>{
                    this.handleMetadataUpdated(o.APP_VERSION_KEY, e)
                }
                ,
                this.handleChainUpdated = async(e,t)=>{
                    var r, n;
                    try {
                        const n = await this.cipher.decrypt(e)
                          , s = await this.cipher.decrypt(t);
                        null === (r = this.listener) || void 0 === r || r.chainUpdated(n, s)
                    } catch (s) {
                        null === (n = this.diagnostic) || void 0 === n || n.log(i.EVENTS.GENERAL_ERROR, {
                            message: "Had error decrypting",
                            value: "chainId|jsonRpcUrl"
                        })
                    }
                }
                ,
                this.session = e,
                this.cipher = new s.Cipher(e.secret),
                this.diagnostic = u,
                this.listener = r;
                const h = new l.WalletLinkWebSocket(`${t}/rpc`,d);
                h.setConnectionStateListener((async t=>{
                    var r;
                    null === (r = this.diagnostic) || void 0 === r || r.log(i.EVENTS.CONNECTED_STATE_CHANGE, {
                        state: t,
                        sessionIdHash: a.Session.hash(e.id)
                    });
                    let n = !1;
                    switch (t) {
                    case l.ConnectionState.DISCONNECTED:
                        if (!this.destroyed) {
                            const e = async()=>{
                                await new Promise((e=>setTimeout(e, 5e3))),
                                this.destroyed || h.connect().catch((()=>{
                                    e()
                                }
                                ))
                            }
                            ;
                            e()
                        }
                        break;
                    case l.ConnectionState.CONNECTED:
                        try {
                            await this.authenticate(),
                            this.sendIsLinked(),
                            this.sendGetSessionConfig(),
                            n = !0
                        } catch (s) {}
                        this.updateLastHeartbeat(),
                        setInterval((()=>{
                            this.heartbeat()
                        }
                        ), 1e4),
                        this.shouldFetchUnseenEventsOnConnect && this.fetchUnseenEventsAPI();
                    case l.ConnectionState.CONNECTING:
                    }
                    this.connected !== n && (this.connected = n)
                }
                )),
                h.setIncomingDataListener((t=>{
                    var r, n, s;
                    switch (t.type) {
                    case "Heartbeat":
                        return void this.updateLastHeartbeat();
                    case "IsLinkedOK":
                    case "Linked":
                        {
                            const n = "IsLinkedOK" === t.type ? t.linked : void 0;
                            null === (r = this.diagnostic) || void 0 === r || r.log(i.EVENTS.LINKED, {
                                sessionIdHash: a.Session.hash(e.id),
                                linked: n,
                                type: t.type,
                                onlineGuests: t.onlineGuests
                            }),
                            this.linked = n || t.onlineGuests > 0;
                            break
                        }
                    case "GetSessionConfigOK":
                    case "SessionConfigUpdated":
                        null === (n = this.diagnostic) || void 0 === n || n.log(i.EVENTS.SESSION_CONFIG_RECEIVED, {
                            sessionIdHash: a.Session.hash(e.id),
                            metadata_keys: t && t.metadata ? Object.keys(t.metadata) : void 0
                        }),
                        this.handleSessionMetadataUpdated(t.metadata);
                        break;
                    case "Event":
                        this.handleIncomingEvent(t)
                    }
                    void 0 !== t.id && (null === (s = this.requestResolutions.get(t.id)) || void 0 === s || s(t))
                }
                )),
                this.ws = h,
                this.http = new c.WalletLinkHTTP(t,e.id,e.key)
            }
            connect() {
                var e;
                if (this.destroyed)
                    throw new Error("instance is destroyed");
                null === (e = this.diagnostic) || void 0 === e || e.log(i.EVENTS.STARTED_CONNECTING, {
                    sessionIdHash: a.Session.hash(this.session.id)
                }),
                this.ws.connect()
            }
            destroy() {
                var e;
                this.destroyed = !0,
                this.ws.disconnect(),
                null === (e = this.diagnostic) || void 0 === e || e.log(i.EVENTS.DISCONNECTED, {
                    sessionIdHash: a.Session.hash(this.session.id)
                }),
                this.listener = void 0
            }
            get isDestroyed() {
                return this.destroyed
            }
            get connected() {
                return this._connected
            }
            set connected(e) {
                var t, r;
                this._connected = e,
                e && (null === (t = this.onceConnected) || void 0 === t || t.call(this)),
                null === (r = this.listener) || void 0 === r || r.connectedUpdated(e)
            }
            setOnceConnected(e) {
                return new Promise((t=>{
                    this.connected ? e().then(t) : this.onceConnected = ()=>{
                        e().then(t),
                        this.onceConnected = void 0
                    }
                }
                ))
            }
            get linked() {
                return this._linked
            }
            set linked(e) {
                var t, r;
                this._linked = e,
                e && (null === (t = this.onceLinked) || void 0 === t || t.call(this)),
                null === (r = this.listener) || void 0 === r || r.linkedUpdated(e)
            }
            setOnceLinked(e) {
                return new Promise((t=>{
                    this.linked ? e().then(t) : this.onceLinked = ()=>{
                        e().then(t),
                        this.onceLinked = void 0
                    }
                }
                ))
            }
            async handleIncomingEvent(e) {
                var t, r;
                if ("Event" === e.type && "Web3Response" === e.event)
                    try {
                        const r = await this.cipher.decrypt(e.data)
                          , n = JSON.parse(r);
                        if ("WEB3_RESPONSE" !== n.type)
                            return;
                        null === (t = this.listener) || void 0 === t || t.handleWeb3ResponseMessage(n)
                    } catch (n) {
                        null === (r = this.diagnostic) || void 0 === r || r.log(i.EVENTS.GENERAL_ERROR, {
                            message: "Had error decrypting",
                            value: "incomingEvent"
                        })
                    }
            }
            async checkUnseenEvents() {
                if (this.connected) {
                    await new Promise((e=>setTimeout(e, 250)));
                    try {
                        await this.fetchUnseenEventsAPI()
                    } catch (e) {
                        console.error("Unable to check for unseen events", e)
                    }
                } else
                    this.shouldFetchUnseenEventsOnConnect = !0
            }
            async fetchUnseenEventsAPI() {
                this.shouldFetchUnseenEventsOnConnect = !1;
                (await this.http.fetchUnseenEvents()).forEach((e=>this.handleIncomingEvent(e)))
            }
            async setSessionMetadata(e, t) {
                const r = {
                    type: "SetSessionConfig",
                    id: (0,
                    n.IntNumber)(this.nextReqId++),
                    sessionId: this.session.id,
                    metadata: {
                        [e]: t
                    }
                };
                return this.setOnceConnected((async()=>{
                    const e = await this.makeRequest(r);
                    if ("Fail" === e.type)
                        throw new Error(e.error || "failed to set session metadata")
                }
                ))
            }
            async publishEvent(e, t, r=!1) {
                const s = await this.cipher.encrypt(JSON.stringify(Object.assign(Object.assign({}, t), {
                    origin: location.origin,
                    relaySource: window.coinbaseWalletExtension ? "injected_sdk" : "sdk"
                })))
                  , i = {
                    type: "PublishEvent",
                    id: (0,
                    n.IntNumber)(this.nextReqId++),
                    sessionId: this.session.id,
                    event: e,
                    data: s,
                    callWebhook: r
                };
                return this.setOnceLinked((async()=>{
                    const e = await this.makeRequest(i);
                    if ("Fail" === e.type)
                        throw new Error(e.error || "failed to publish event");
                    return e.eventId
                }
                ))
            }
            sendData(e) {
                this.ws.sendData(JSON.stringify(e))
            }
            updateLastHeartbeat() {
                this.lastHeartbeatResponse = Date.now()
            }
            heartbeat() {
                if (Date.now() - this.lastHeartbeatResponse > 2e4)
                    this.ws.disconnect();
                else
                    try {
                        this.ws.sendData("h")
                    } catch (e) {}
            }
            async makeRequest(e, t=6e4) {
                const r = e.id;
                let n;
                return this.sendData(e),
                Promise.race([new Promise(((e,s)=>{
                    n = window.setTimeout((()=>{
                        s(new Error(`request ${r} timed out`))
                    }
                    ), t)
                }
                )), new Promise((e=>{
                    this.requestResolutions.set(r, (t=>{
                        clearTimeout(n),
                        e(t),
                        this.requestResolutions.delete(r)
                    }
                    ))
                }
                ))])
            }
            async authenticate() {
                const e = {
                    type: "HostSession",
                    id: (0,
                    n.IntNumber)(this.nextReqId++),
                    sessionId: this.session.id,
                    sessionKey: this.session.key
                }
                  , t = await this.makeRequest(e);
                if ("Fail" === t.type)
                    throw new Error(t.error || "failed to authentcate")
            }
            sendIsLinked() {
                const e = {
                    type: "IsLinked",
                    id: (0,
                    n.IntNumber)(this.nextReqId++),
                    sessionId: this.session.id
                };
                this.sendData(e)
            }
            sendGetSessionConfig() {
                const e = {
                    type: "GetSessionConfig",
                    id: (0,
                    n.IntNumber)(this.nextReqId++),
                    sessionId: this.session.id
                };
                this.sendData(e)
            }
        }
    },
    48294: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.WalletLinkHTTP = void 0;
        t.WalletLinkHTTP = class {
            constructor(e, t, r) {
                this.linkAPIUrl = e,
                this.sessionId = t;
                const n = `${t}:${r}`;
                this.auth = `Basic ${btoa(n)}`
            }
            async markUnseenEventsAsSeen(e) {
                return Promise.all(e.map((e=>fetch(`${this.linkAPIUrl}/events/${e.eventId}/seen`, {
                    method: "POST",
                    headers: {
                        Authorization: this.auth
                    }
                })))).catch((e=>console.error("Unabled to mark event as failed:", e)))
            }
            async fetchUnseenEvents() {
                var e;
                const t = await fetch(`${this.linkAPIUrl}/events?unseen=true`, {
                    headers: {
                        Authorization: this.auth
                    }
                });
                if (t.ok) {
                    const {events: r, error: n} = await t.json();
                    if (n)
                        throw new Error(`Check unseen events failed: ${n}`);
                    const s = null !== (e = null === r || void 0 === r ? void 0 : r.filter((e=>"Web3Response" === e.event)).map((e=>({
                        type: "Event",
                        sessionId: this.sessionId,
                        eventId: e.id,
                        event: e.event,
                        data: e.data
                    })))) && void 0 !== e ? e : [];
                    return this.markUnseenEventsAsSeen(s),
                    s
                }
                throw new Error(`Check unseen events failed: ${t.status}`)
            }
        }
    },
    14432: function(e, t) {
        "use strict";
        var r;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.WalletLinkWebSocket = t.ConnectionState = void 0,
        function(e) {
            e[e.DISCONNECTED = 0] = "DISCONNECTED",
            e[e.CONNECTING = 1] = "CONNECTING",
            e[e.CONNECTED = 2] = "CONNECTED"
        }(r || (t.ConnectionState = r = {}));
        t.WalletLinkWebSocket = class {
            setConnectionStateListener(e) {
                this.connectionStateListener = e
            }
            setIncomingDataListener(e) {
                this.incomingDataListener = e
            }
            constructor(e, t=WebSocket) {
                this.WebSocketClass = t,
                this.webSocket = null,
                this.pendingData = [],
                this.url = e.replace(/^http/, "ws")
            }
            async connect() {
                if (this.webSocket)
                    throw new Error("webSocket object is not null");
                return new Promise(((e,t)=>{
                    var n;
                    let s;
                    try {
                        this.webSocket = s = new this.WebSocketClass(this.url)
                    } catch (i) {
                        return void t(i)
                    }
                    null === (n = this.connectionStateListener) || void 0 === n || n.call(this, r.CONNECTING),
                    s.onclose = e=>{
                        var n;
                        this.clearWebSocket(),
                        t(new Error(`websocket error ${e.code}: ${e.reason}`)),
                        null === (n = this.connectionStateListener) || void 0 === n || n.call(this, r.DISCONNECTED)
                    }
                    ,
                    s.onopen = t=>{
                        var n;
                        if (e(),
                        null === (n = this.connectionStateListener) || void 0 === n || n.call(this, r.CONNECTED),
                        this.pendingData.length > 0) {
                            [...this.pendingData].forEach((e=>this.sendData(e))),
                            this.pendingData = []
                        }
                    }
                    ,
                    s.onmessage = e=>{
                        var t, r;
                        if ("h" === e.data)
                            null === (t = this.incomingDataListener) || void 0 === t || t.call(this, {
                                type: "Heartbeat"
                            });
                        else
                            try {
                                const t = JSON.parse(e.data);
                                null === (r = this.incomingDataListener) || void 0 === r || r.call(this, t)
                            } catch (n) {}
                    }
                }
                ))
            }
            disconnect() {
                var e;
                const {webSocket: t} = this;
                if (t) {
                    this.clearWebSocket(),
                    null === (e = this.connectionStateListener) || void 0 === e || e.call(this, r.DISCONNECTED),
                    this.connectionStateListener = void 0,
                    this.incomingDataListener = void 0;
                    try {
                        t.close()
                    } catch (n) {}
                }
            }
            sendData(e) {
                const {webSocket: t} = this;
                if (!t)
                    return this.pendingData.push(e),
                    void this.connect();
                t.send(e)
            }
            clearWebSocket() {
                const {webSocket: e} = this;
                e && (this.webSocket = null,
                e.onclose = null,
                e.onerror = null,
                e.onmessage = null,
                e.onopen = null)
            }
        }
    },
    96279: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.isErrorResponse = void 0,
        t.isErrorResponse = function(e) {
            return void 0 !== e.errorMessage
        }
    },
    25752: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.WalletLinkRelayUI = void 0;
        const n = r(19514)
          , s = r(52667)
          , i = r(7905);
        t.WalletLinkRelayUI = class {
            constructor(e) {
                this.standalone = null,
                this.attached = !1,
                this.snackbar = new i.Snackbar({
                    darkMode: e.darkMode
                }),
                this.linkFlow = new s.LinkFlow({
                    darkMode: e.darkMode,
                    version: e.version,
                    sessionId: e.session.id,
                    sessionSecret: e.session.secret,
                    linkAPIUrl: e.linkAPIUrl,
                    isParentConnection: !1
                })
            }
            attach() {
                if (this.attached)
                    throw new Error("Coinbase Wallet SDK UI is already attached");
                const e = document.documentElement
                  , t = document.createElement("div");
                t.className = "-cbwsdk-css-reset",
                e.appendChild(t),
                this.linkFlow.attach(t),
                this.snackbar.attach(t),
                this.attached = !0,
                (0,
                n.injectCssReset)()
            }
            setConnected(e) {
                this.linkFlow.setConnected(e)
            }
            setChainId(e) {
                this.linkFlow.setChainId(e)
            }
            setConnectDisabled(e) {
                this.linkFlow.setConnectDisabled(e)
            }
            addEthereumChain() {}
            watchAsset() {}
            switchEthereumChain() {}
            requestEthereumAccounts(e) {
                this.linkFlow.open({
                    onCancel: e.onCancel
                })
            }
            hideRequestEthereumAccounts() {
                this.linkFlow.close()
            }
            signEthereumMessage() {}
            signEthereumTransaction() {}
            submitEthereumTransaction() {}
            ethereumAddressFromSignedMessage() {}
            showConnecting(e) {
                let t;
                return t = e.isUnlinkedErrorState ? {
                    autoExpand: !0,
                    message: "Connection lost",
                    menuItems: [{
                        isRed: !1,
                        info: "Reset connection",
                        svgWidth: "10",
                        svgHeight: "11",
                        path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
                        defaultFillRule: "evenodd",
                        defaultClipRule: "evenodd",
                        onClick: e.onResetConnection
                    }]
                } : {
                    message: "Confirm on phone",
                    menuItems: [{
                        isRed: !0,
                        info: "Cancel transaction",
                        svgWidth: "11",
                        svgHeight: "11",
                        path: "M10.3711 1.52346L9.21775 0.370117L5.37109 4.21022L1.52444 0.370117L0.371094 1.52346L4.2112 5.37012L0.371094 9.21677L1.52444 10.3701L5.37109 6.53001L9.21775 10.3701L10.3711 9.21677L6.53099 5.37012L10.3711 1.52346Z",
                        defaultFillRule: "inherit",
                        defaultClipRule: "inherit",
                        onClick: e.onCancel
                    }, {
                        isRed: !1,
                        info: "Reset connection",
                        svgWidth: "10",
                        svgHeight: "11",
                        path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
                        defaultFillRule: "evenodd",
                        defaultClipRule: "evenodd",
                        onClick: e.onResetConnection
                    }]
                },
                this.snackbar.presentItem(t)
            }
            reloadUI() {
                document.location.reload()
            }
            inlineAccountsResponse() {
                return !1
            }
            inlineAddEthereumChain() {
                return !1
            }
            inlineWatchAsset() {
                return !1
            }
            inlineSwitchEthereumChain() {
                return !1
            }
            setStandalone(e) {
                this.standalone = e
            }
            isStandalone() {
                var e;
                return null !== (e = this.standalone) && void 0 !== e && e
            }
        }
    },
    36192: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = ".-cbwsdk-css-reset .-cbwsdk-connect-content{height:430px;width:700px;border-radius:12px;padding:30px}.-cbwsdk-css-reset .-cbwsdk-connect-content.light{background:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content.dark{background:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-content-header{display:flex;align-items:center;justify-content:space-between;margin:0 0 30px}.-cbwsdk-css-reset .-cbwsdk-connect-content-heading{font-style:normal;font-weight:500;font-size:28px;line-height:36px;margin:0}.-cbwsdk-css-reset .-cbwsdk-connect-content-heading.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-content-heading.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content-layout{display:flex;flex-direction:row}.-cbwsdk-css-reset .-cbwsdk-connect-content-column-left{margin-right:30px;display:flex;flex-direction:column;justify-content:space-between}.-cbwsdk-css-reset .-cbwsdk-connect-content-column-right{flex:25%;margin-right:34px}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-wrapper{width:220px;height:220px;border-radius:12px;display:flex;justify-content:center;align-items:center;background:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting{position:absolute;top:0;bottom:0;left:0;right:0;display:flex;flex-direction:column;align-items:center;justify-content:center}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.light{background-color:rgba(255,255,255,.95)}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.light>p{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.dark{background-color:rgba(10,11,13,.9)}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.dark>p{color:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting>p{font-size:12px;font-weight:bold;margin-top:16px}.-cbwsdk-css-reset .-cbwsdk-connect-content-update-app{border-radius:8px;font-size:14px;line-height:20px;padding:12px;width:339px}.-cbwsdk-css-reset .-cbwsdk-connect-content-update-app.light{background:#eef0f3;color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-connect-content-update-app.dark{background:#1e2025;color:#8a919e}.-cbwsdk-css-reset .-cbwsdk-cancel-button{-webkit-appearance:none;border:none;background:none;cursor:pointer;padding:0;margin:0}.-cbwsdk-css-reset .-cbwsdk-cancel-button-x{position:relative;display:block;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-wallet-steps{padding:0 0 0 16px;margin:0;width:100%;list-style:decimal}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item{list-style-type:decimal;display:list-item;font-style:normal;font-weight:400;font-size:16px;line-height:24px;margin-top:20px}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item-wrapper{display:flex;align-items:center}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-pad-left{margin-left:6px}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon{display:flex;border-radius:50%;height:24px;width:24px}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon svg{margin:auto;display:block}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon.light{background:#0052ff}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon.dark{background:#588af5}.-cbwsdk-css-reset .-cbwsdk-connect-item{align-items:center;display:flex;flex-direction:row;padding:16px 24px;gap:12px;cursor:pointer;border-radius:100px;font-weight:600}.-cbwsdk-css-reset .-cbwsdk-connect-item.light{background:#f5f8ff;color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-connect-item.dark{background:#001033;color:#588af5}.-cbwsdk-css-reset .-cbwsdk-connect-item-copy-wrapper{margin:0 4px 0 8px}.-cbwsdk-css-reset .-cbwsdk-connect-item-title{margin:0 0 0;font-size:16px;line-height:24px;font-weight:500}.-cbwsdk-css-reset .-cbwsdk-connect-item-description{font-weight:400;font-size:14px;line-height:20px;margin:0}"
    },
    93115: function(e, t, r) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.CoinbaseWalletSteps = t.ConnectContent = void 0;
        const s = n(r(14517))
          , i = r(23318)
          , o = r(93634)
          , a = r(76570)
          , c = r(82920)
          , l = r(348)
          , u = r(58164)
          , d = r(58931)
          , h = r(96952)
          , f = n(r(36192))
          , p = "Coinbase Wallet app"
          , g = "Connect with your self-custody wallet"
          , m = y
          , _ = e=>"light" === e ? "#FFFFFF" : "#0A0B0D";
        function b({title: e, description: t, theme: r}) {
            return (0,
            i.h)("div", {
                className: (0,
                s.default)("-cbwsdk-connect-item", r)
            }, (0,
            i.h)("div", null, (0,
            i.h)(l.CoinbaseWalletRound, null)), (0,
            i.h)("div", {
                className: "-cbwsdk-connect-item-copy-wrapper"
            }, (0,
            i.h)("h3", {
                className: "-cbwsdk-connect-item-title"
            }, e), (0,
            i.h)("p", {
                className: "-cbwsdk-connect-item-description"
            }, t)))
        }
        function y({theme: e}) {
            return (0,
            i.h)("ol", {
                className: "-cbwsdk-wallet-steps"
            }, (0,
            i.h)("li", {
                className: (0,
                s.default)("-cbwsdk-wallet-steps-item", e)
            }, (0,
            i.h)("div", {
                className: "-cbwsdk-wallet-steps-item-wrapper"
            }, "Open Coinbase Wallet app")), (0,
            i.h)("li", {
                className: (0,
                s.default)("-cbwsdk-wallet-steps-item", e)
            }, (0,
            i.h)("div", {
                className: "-cbwsdk-wallet-steps-item-wrapper"
            }, (0,
            i.h)("span", null, "Tap ", (0,
            i.h)("strong", null, "Scan"), " "), (0,
            i.h)("span", {
                className: (0,
                s.default)("-cbwsdk-wallet-steps-pad-left", "-cbwsdk-wallet-steps-icon", e)
            }, (0,
            i.h)(u.QRCodeIcon, {
                fill: _(e)
            })))))
        }
        t.ConnectContent = function(e) {
            const {theme: t} = e
              , r = (0,
            o.createQrUrl)(e.sessionId, e.sessionSecret, e.linkAPIUrl, e.isParentConnection, e.version, e.chainId)
              , n = m;
            return (0,
            i.h)("div", {
                "data-testid": "connect-content",
                className: (0,
                s.default)("-cbwsdk-connect-content", t)
            }, (0,
            i.h)("style", null, f.default), (0,
            i.h)("div", {
                className: "-cbwsdk-connect-content-header"
            }, (0,
            i.h)("h2", {
                className: (0,
                s.default)("-cbwsdk-connect-content-heading", t)
            }, "Scan to connect with our mobile app"), e.onCancel && (0,
            i.h)("button", {
                type: "button",
                className: "-cbwsdk-cancel-button",
                onClick: e.onCancel
            }, (0,
            i.h)(c.CloseIcon, {
                fill: "light" === t ? "#0A0B0D" : "#FFFFFF"
            }))), (0,
            i.h)("div", {
                className: "-cbwsdk-connect-content-layout"
            }, (0,
            i.h)("div", {
                className: "-cbwsdk-connect-content-column-left"
            }, (0,
            i.h)(b, {
                title: p,
                description: g,
                theme: t
            })), (0,
            i.h)("div", {
                className: "-cbwsdk-connect-content-column-right"
            }, (0,
            i.h)("div", {
                className: "-cbwsdk-connect-content-qr-wrapper"
            }, (0,
            i.h)(d.QRCode, {
                content: r,
                width: 200,
                height: 200,
                fgColor: "#000",
                bgColor: "transparent"
            }), (0,
            i.h)("input", {
                type: "hidden",
                name: "cbw-cbwsdk-version",
                value: a.LIB_VERSION
            }), (0,
            i.h)("input", {
                type: "hidden",
                value: r
            })), (0,
            i.h)(n, {
                theme: t
            }), !e.isConnected && (0,
            i.h)("div", {
                "data-testid": "connecting-spinner",
                className: (0,
                s.default)("-cbwsdk-connect-content-qr-connecting", t)
            }, (0,
            i.h)(h.Spinner, {
                size: 36,
                color: "dark" === t ? "#FFF" : "#000"
            }), (0,
            i.h)("p", null, "Connecting...")))))
        }
        ,
        t.CoinbaseWalletSteps = y
    },
    1694: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = ".-cbwsdk-css-reset .-cbwsdk-connect-dialog{z-index:2147483647;position:fixed;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop{z-index:2147483647;position:fixed;top:0;left:0;right:0;bottom:0;transition:opacity .25s}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop.light{background-color:rgba(0,0,0,.5)}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop.dark{background-color:rgba(50,53,61,.4)}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop-hidden{opacity:0}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-box{display:flex;position:relative;flex-direction:column;transform:scale(1);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-box-hidden{opacity:0;transform:scale(0.85)}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-container{display:block}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-container-hidden{display:none}"
    },
    23594: function(e, t, r) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.ConnectDialog = void 0;
        const s = n(r(14517))
          , i = r(23318)
          , o = r(53747)
          , a = r(93115)
          , c = r(16805)
          , l = n(r(1694));
        t.ConnectDialog = e=>{
            const {isOpen: t, darkMode: r} = e
              , [n,u] = (0,
            o.useState)(!t)
              , [d,h] = (0,
            o.useState)(!t);
            (0,
            o.useEffect)((()=>{
                const e = [window.setTimeout((()=>{
                    h(!t)
                }
                ), 10)];
                return t ? u(!1) : e.push(window.setTimeout((()=>{
                    u(!0)
                }
                ), 360)),
                ()=>{
                    e.forEach(window.clearTimeout)
                }
            }
            ), [t]);
            const f = r ? "dark" : "light";
            return (0,
            i.h)("div", {
                class: (0,
                s.default)("-cbwsdk-connect-dialog-container", n && "-cbwsdk-connect-dialog-container-hidden")
            }, (0,
            i.h)("style", null, l.default), (0,
            i.h)("div", {
                class: (0,
                s.default)("-cbwsdk-connect-dialog-backdrop", f, d && "-cbwsdk-connect-dialog-backdrop-hidden")
            }), (0,
            i.h)("div", {
                class: "-cbwsdk-connect-dialog"
            }, (0,
            i.h)("div", {
                class: (0,
                s.default)("-cbwsdk-connect-dialog-box", d && "-cbwsdk-connect-dialog-box-hidden")
            }, e.connectDisabled ? null : (0,
            i.h)(a.ConnectContent, {
                theme: f,
                version: e.version,
                sessionId: e.sessionId,
                sessionSecret: e.sessionSecret,
                linkAPIUrl: e.linkAPIUrl,
                isConnected: e.isConnected,
                isParentConnection: e.isParentConnection,
                chainId: e.chainId,
                onCancel: e.onCancel
            }), (0,
            i.h)(c.TryExtensionContent, {
                theme: f
            }))))
        }
    },
    52667: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.LinkFlow = void 0;
        const n = r(23318)
          , s = r(23594);
        t.LinkFlow = class {
            constructor(e) {
                this.connected = !1,
                this.chainId = 1,
                this.isOpen = !1,
                this.onCancel = null,
                this.root = null,
                this.connectDisabled = !1,
                this.darkMode = e.darkMode,
                this.version = e.version,
                this.sessionId = e.sessionId,
                this.sessionSecret = e.sessionSecret,
                this.linkAPIUrl = e.linkAPIUrl,
                this.isParentConnection = e.isParentConnection
            }
            attach(e) {
                this.root = document.createElement("div"),
                this.root.className = "-cbwsdk-link-flow-root",
                e.appendChild(this.root),
                this.render()
            }
            setConnected(e) {
                this.connected !== e && (this.connected = e,
                this.render())
            }
            setChainId(e) {
                this.chainId !== e && (this.chainId = e,
                this.render())
            }
            detach() {
                var e;
                this.root && ((0,
                n.render)(null, this.root),
                null === (e = this.root.parentElement) || void 0 === e || e.removeChild(this.root))
            }
            setConnectDisabled(e) {
                this.connectDisabled = e
            }
            open(e) {
                this.isOpen = !0,
                this.onCancel = e.onCancel,
                this.render()
            }
            close() {
                this.isOpen = !1,
                this.onCancel = null,
                this.render()
            }
            render() {
                this.root && (0,
                n.render)((0,
                n.h)(s.ConnectDialog, {
                    darkMode: this.darkMode,
                    version: this.version,
                    sessionId: this.sessionId,
                    sessionSecret: this.sessionSecret,
                    linkAPIUrl: this.linkAPIUrl,
                    isOpen: this.isOpen,
                    isConnected: this.connected,
                    isParentConnection: this.isParentConnection,
                    chainId: this.chainId,
                    onCancel: this.onCancel,
                    connectDisabled: this.connectDisabled
                }), this.root)
            }
        }
    },
    58931: function(e, t, r) {
        "use strict";
        var n = r(15313).Buffer
          , s = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.QRCode = void 0;
        const i = r(23318)
          , o = r(53747)
          , a = s(r(69738));
        t.QRCode = e=>{
            const [t,r] = (0,
            o.useState)("");
            return (0,
            o.useEffect)((()=>{
                var t, s;
                const i = new a.default({
                    content: e.content,
                    background: e.bgColor || "#ffffff",
                    color: e.fgColor || "#000000",
                    container: "svg",
                    ecl: "M",
                    width: null !== (t = e.width) && void 0 !== t ? t : 256,
                    height: null !== (s = e.height) && void 0 !== s ? s : 256,
                    padding: 0,
                    image: e.image
                })
                  , o = n.from(i.svg(), "utf8").toString("base64");
                r(`data:image/svg+xml;base64,${o}`)
            }
            ), [e.bgColor, e.content, e.fgColor, e.height, e.image, e.width]),
            t ? (0,
            i.h)("img", {
                src: t,
                alt: "QR Code"
            }) : null
        }
    },
    66929: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = ".-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop{position:fixed;top:0;left:0;right:0;bottom:0;transition:opacity .25s;background-color:rgba(10,11,13,.5)}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop-hidden{opacity:0}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box{display:block;position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);padding:20px;border-radius:8px;background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box p{display:block;font-weight:400;font-size:14px;line-height:20px;padding-bottom:12px;color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box button{appearance:none;border:none;background:none;color:#0052ff;padding:0;text-decoration:none;display:block;font-weight:600;font-size:16px;line-height:24px}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark{background-color:#0a0b0d;color:#fff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark button{color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light{background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light button{color:#0052ff}"
    },
    76677: function(e, t, r) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.RedirectDialog = void 0;
        const s = n(r(14517))
          , i = r(23318)
          , o = r(19514)
          , a = r(91751)
          , c = n(r(66929));
        t.RedirectDialog = class {
            constructor() {
                this.root = null
            }
            attach() {
                const e = document.documentElement;
                this.root = document.createElement("div"),
                this.root.className = "-cbwsdk-css-reset",
                e.appendChild(this.root),
                (0,
                o.injectCssReset)()
            }
            present(e) {
                this.render(e)
            }
            clear() {
                this.render(null)
            }
            render(e) {
                this.root && ((0,
                i.render)(null, this.root),
                e && (0,
                i.render)((0,
                i.h)(l, Object.assign({}, e, {
                    onDismiss: ()=>{
                        this.clear()
                    }
                })), this.root))
            }
        }
        ;
        const l = ({title: e, buttonText: t, darkMode: r, onButtonClick: n, onDismiss: o})=>{
            const l = r ? "dark" : "light";
            return (0,
            i.h)(a.SnackbarContainer, {
                darkMode: r
            }, (0,
            i.h)("div", {
                class: "-cbwsdk-redirect-dialog"
            }, (0,
            i.h)("style", null, c.default), (0,
            i.h)("div", {
                class: "-cbwsdk-redirect-dialog-backdrop",
                onClick: o
            }), (0,
            i.h)("div", {
                class: (0,
                s.default)("-cbwsdk-redirect-dialog-box", l)
            }, (0,
            i.h)("p", null, e), (0,
            i.h)("button", {
                onClick: n
            }, t))))
        }
    },
    62181: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = ".-cbwsdk-css-reset .-gear-container{margin-left:16px !important;margin-right:9px !important;display:flex;align-items:center;justify-content:center;width:24px;height:24px;transition:opacity .25s}.-cbwsdk-css-reset .-gear-container *{user-select:none}.-cbwsdk-css-reset .-gear-container svg{opacity:0;position:absolute}.-cbwsdk-css-reset .-gear-icon{height:12px;width:12px;z-index:10000}.-cbwsdk-css-reset .-cbwsdk-snackbar{align-items:flex-end;display:flex;flex-direction:column;position:fixed;right:0;top:0;z-index:2147483647}.-cbwsdk-css-reset .-cbwsdk-snackbar *{user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance{display:flex;flex-direction:column;margin:8px 16px 0 16px;overflow:visible;text-align:left;transform:translateX(0);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header:hover .-gear-container svg{opacity:1}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header{display:flex;align-items:center;background:#fff;overflow:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-cblogo{margin:8px 8px 8px 8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-message{color:#000;font-size:13px;line-height:1.5;user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu{background:#fff;transition:opacity .25s ease-in-out,transform .25s linear,visibility 0s;visibility:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;opacity:0;flex-direction:column;padding-left:8px;padding-right:8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:last-child{margin-bottom:8px !important}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover{background:#f5f7f8;border-radius:6px;transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover span{color:#050f19;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover svg path{fill:#000;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item{visibility:inherit;height:35px;margin-top:8px;margin-bottom:0;display:flex;flex-direction:row;align-items:center;padding:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item *{visibility:inherit;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover{background:rgba(223,95,103,.2);transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover svg path{fill:#df5f67;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover span{color:#df5f67;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-info{color:#aaa;font-size:13px;margin:0 8px 0 32px;position:absolute}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-hidden{opacity:0;text-align:left;transform:translateX(25%);transition:opacity .5s linear}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-expanded .-cbwsdk-snackbar-instance-menu{opacity:1;display:flex;transform:translateY(8px);visibility:visible}"
    },
    7905: function(e, t, r) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.SnackbarInstance = t.SnackbarContainer = t.Snackbar = void 0;
        const s = n(r(14517))
          , i = r(23318)
          , o = r(53747)
          , a = n(r(62181));
        t.Snackbar = class {
            constructor(e) {
                this.items = new Map,
                this.nextItemKey = 0,
                this.root = null,
                this.darkMode = e.darkMode
            }
            attach(e) {
                this.root = document.createElement("div"),
                this.root.className = "-cbwsdk-snackbar-root",
                e.appendChild(this.root),
                this.render()
            }
            presentItem(e) {
                const t = this.nextItemKey++;
                return this.items.set(t, e),
                this.render(),
                ()=>{
                    this.items.delete(t),
                    this.render()
                }
            }
            clear() {
                this.items.clear(),
                this.render()
            }
            render() {
                this.root && (0,
                i.render)((0,
                i.h)("div", null, (0,
                i.h)(t.SnackbarContainer, {
                    darkMode: this.darkMode
                }, Array.from(this.items.entries()).map((([e,r])=>(0,
                i.h)(t.SnackbarInstance, Object.assign({}, r, {
                    key: e
                })))))), this.root)
            }
        }
        ;
        t.SnackbarContainer = e=>(0,
        i.h)("div", {
            class: (0,
            s.default)("-cbwsdk-snackbar-container")
        }, (0,
        i.h)("style", null, a.default), (0,
        i.h)("div", {
            class: "-cbwsdk-snackbar"
        }, e.children));
        t.SnackbarInstance = ({autoExpand: e, message: t, menuItems: r})=>{
            const [n,a] = (0,
            o.useState)(!0)
              , [c,l] = (0,
            o.useState)(null !== e && void 0 !== e && e);
            (0,
            o.useEffect)((()=>{
                const e = [window.setTimeout((()=>{
                    a(!1)
                }
                ), 1), window.setTimeout((()=>{
                    l(!0)
                }
                ), 1e4)];
                return ()=>{
                    e.forEach(window.clearTimeout)
                }
            }
            ));
            return (0,
            i.h)("div", {
                class: (0,
                s.default)("-cbwsdk-snackbar-instance", n && "-cbwsdk-snackbar-instance-hidden", c && "-cbwsdk-snackbar-instance-expanded")
            }, (0,
            i.h)("div", {
                class: "-cbwsdk-snackbar-instance-header",
                onClick: ()=>{
                    l(!c)
                }
            }, (0,
            i.h)("img", {
                src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEuNDkyIDEwLjQxOWE4LjkzIDguOTMgMCAwMTguOTMtOC45M2gxMS4xNjNhOC45MyA4LjkzIDAgMDE4LjkzIDguOTN2MTEuMTYzYTguOTMgOC45MyAwIDAxLTguOTMgOC45M0gxMC40MjJhOC45MyA4LjkzIDAgMDEtOC45My04LjkzVjEwLjQxOXoiIGZpbGw9IiMxNjUyRjAiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjQxOSAwSDIxLjU4QzI3LjMzNSAwIDMyIDQuNjY1IDMyIDEwLjQxOVYyMS41OEMzMiAyNy4zMzUgMjcuMzM1IDMyIDIxLjU4MSAzMkgxMC40MkM0LjY2NSAzMiAwIDI3LjMzNSAwIDIxLjU4MVYxMC40MkMwIDQuNjY1IDQuNjY1IDAgMTAuNDE5IDB6bTAgMS40ODhhOC45MyA4LjkzIDAgMDAtOC45MyA4LjkzdjExLjE2M2E4LjkzIDguOTMgMCAwMDguOTMgOC45M0gyMS41OGE4LjkzIDguOTMgMCAwMDguOTMtOC45M1YxMC40MmE4LjkzIDguOTMgMCAwMC04LjkzLTguOTNIMTAuNDJ6IiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS45OTggMjYuMDQ5Yy01LjU0OSAwLTEwLjA0Ny00LjQ5OC0xMC4wNDctMTAuMDQ3IDAtNS41NDggNC40OTgtMTAuMDQ2IDEwLjA0Ny0xMC4wNDYgNS41NDggMCAxMC4wNDYgNC40OTggMTAuMDQ2IDEwLjA0NiAwIDUuNTQ5LTQuNDk4IDEwLjA0Ny0xMC4wNDYgMTAuMDQ3eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMi43NjIgMTQuMjU0YzAtLjgyMi42NjctMS40ODkgMS40ODktMS40ODloMy40OTdjLjgyMiAwIDEuNDg4LjY2NiAxLjQ4OCAxLjQ4OXYzLjQ5N2MwIC44MjItLjY2NiAxLjQ4OC0xLjQ4OCAxLjQ4OGgtMy40OTdhMS40ODggMS40ODggMCAwMS0xLjQ4OS0xLjQ4OHYtMy40OTh6IiBmaWxsPSIjMTY1MkYwIi8+PC9zdmc+",
                class: "-cbwsdk-snackbar-instance-header-cblogo"
            }), " ", (0,
            i.h)("div", {
                class: "-cbwsdk-snackbar-instance-header-message"
            }, t), (0,
            i.h)("div", {
                class: "-gear-container"
            }, !c && (0,
            i.h)("svg", {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, (0,
            i.h)("circle", {
                cx: "12",
                cy: "12",
                r: "12",
                fill: "#F5F7F8"
            })), (0,
            i.h)("img", {
                src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDYuNzV2LTEuNWwtMS43Mi0uNTdjLS4wOC0uMjctLjE5LS41Mi0uMzItLjc3bC44MS0xLjYyLTEuMDYtMS4wNi0xLjYyLjgxYy0uMjQtLjEzLS41LS4yNC0uNzctLjMyTDYuNzUgMGgtMS41bC0uNTcgMS43MmMtLjI3LjA4LS41My4xOS0uNzcuMzJsLTEuNjItLjgxLTEuMDYgMS4wNi44MSAxLjYyYy0uMTMuMjQtLjI0LjUtLjMyLjc3TDAgNS4yNXYxLjVsMS43Mi41N2MuMDguMjcuMTkuNTMuMzIuNzdsLS44MSAxLjYyIDEuMDYgMS4wNiAxLjYyLS44MWMuMjQuMTMuNS4yMy43Ny4zMkw1LjI1IDEyaDEuNWwuNTctMS43MmMuMjctLjA4LjUyLS4xOS43Ny0uMzJsMS42Mi44MSAxLjA2LTEuMDYtLjgxLTEuNjJjLjEzLS4yNC4yMy0uNS4zMi0uNzdMMTIgNi43NXpNNiA4LjVhMi41IDIuNSAwIDAxMC01IDIuNSAyLjUgMCAwMTAgNXoiIGZpbGw9IiMwNTBGMTkiLz48L3N2Zz4=",
                class: "-gear-icon",
                title: "Expand"
            }))), r && r.length > 0 && (0,
            i.h)("div", {
                class: "-cbwsdk-snackbar-instance-menu"
            }, r.map(((e,t)=>(0,
            i.h)("div", {
                class: (0,
                s.default)("-cbwsdk-snackbar-instance-menu-item", e.isRed && "-cbwsdk-snackbar-instance-menu-item-is-red"),
                onClick: e.onClick,
                key: t
            }, (0,
            i.h)("svg", {
                width: e.svgWidth,
                height: e.svgHeight,
                viewBox: "0 0 10 11",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, (0,
            i.h)("path", {
                "fill-rule": e.defaultFillRule,
                "clip-rule": e.defaultClipRule,
                d: e.path,
                fill: "#AAAAAA"
            })), (0,
            i.h)("span", {
                class: (0,
                s.default)("-cbwsdk-snackbar-instance-menu-item-info", e.isRed && "-cbwsdk-snackbar-instance-menu-item-info-is-red")
            }, e.info))))))
        }
    },
    91751: function(e, t, r) {
        "use strict";
        var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
            void 0 === n && (n = r);
            var s = Object.getOwnPropertyDescriptor(t, r);
            s && !("get"in s ? !t.__esModule : s.writable || s.configurable) || (s = {
                enumerable: !0,
                get: function() {
                    return t[r]
                }
            }),
            Object.defineProperty(e, n, s)
        }
        : function(e, t, r, n) {
            void 0 === n && (n = r),
            e[n] = t[r]
        }
        )
          , s = this && this.__exportStar || function(e, t) {
            for (var r in e)
                "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r)
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        s(r(7905), t)
    },
    47898: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = ".-cbwsdk-css-reset .-cbwsdk-spinner{display:inline-block}.-cbwsdk-css-reset .-cbwsdk-spinner svg{display:inline-block;animation:2s linear infinite -cbwsdk-spinner-svg}.-cbwsdk-css-reset .-cbwsdk-spinner svg circle{animation:1.9s ease-in-out infinite both -cbwsdk-spinner-circle;display:block;fill:rgba(0,0,0,0);stroke-dasharray:283;stroke-dashoffset:280;stroke-linecap:round;stroke-width:10px;transform-origin:50% 50%}@keyframes -cbwsdk-spinner-svg{0%{transform:rotateZ(0deg)}100%{transform:rotateZ(360deg)}}@keyframes -cbwsdk-spinner-circle{0%,25%{stroke-dashoffset:280;transform:rotate(0)}50%,75%{stroke-dashoffset:75;transform:rotate(45deg)}100%{stroke-dashoffset:280;transform:rotate(360deg)}}"
    },
    96952: function(e, t, r) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.Spinner = void 0;
        const s = r(23318)
          , i = n(r(47898));
        t.Spinner = e=>{
            var t;
            const r = null !== (t = e.size) && void 0 !== t ? t : 64
              , n = e.color || "#000";
            return (0,
            s.h)("div", {
                class: "-cbwsdk-spinner"
            }, (0,
            s.h)("style", null, i.default), (0,
            s.h)("svg", {
                viewBox: "0 0 100 100",
                xmlns: "http://www.w3.org/2000/svg",
                style: {
                    width: r,
                    height: r
                }
            }, (0,
            s.h)("circle", {
                style: {
                    cx: 50,
                    cy: 50,
                    r: 45,
                    stroke: n
                }
            })))
        }
    },
    87003: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = ".-cbwsdk-css-reset .-cbwsdk-try-extension{display:flex;margin-top:12px;height:202px;width:700px;border-radius:12px;padding:30px}.-cbwsdk-css-reset .-cbwsdk-try-extension.light{background:#fff}.-cbwsdk-css-reset .-cbwsdk-try-extension.dark{background:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-try-extension-column-half{flex:50%}.-cbwsdk-css-reset .-cbwsdk-try-extension-heading{font-style:normal;font-weight:500;font-size:25px;line-height:32px;margin:0;max-width:204px}.-cbwsdk-css-reset .-cbwsdk-try-extension-heading.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-try-extension-heading.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta{appearance:none;border:none;background:none;color:#0052ff;cursor:pointer;padding:0;text-decoration:none;display:block;font-weight:600;font-size:16px;line-height:24px}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta.light{color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta.dark{color:#588af5}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta-wrapper{display:flex;align-items:center;margin-top:12px}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta-icon{display:block;margin-left:4px;height:14px}.-cbwsdk-css-reset .-cbwsdk-try-extension-list{display:flex;flex-direction:column;justify-content:center;align-items:center;margin:0;padding:0;list-style:none;height:100%}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item{display:flex;align-items:center;flex-flow:nowrap;margin-top:24px}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item:first-of-type{margin-top:0}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon-wrapper{display:block}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon{display:flex;height:32px;width:32px;border-radius:50%}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon svg{margin:auto;display:block}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon.light{background:#eef0f3}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon.dark{background:#1e2025}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-copy{display:block;font-weight:400;font-size:14px;line-height:20px;padding-left:12px}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-copy.light{color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-copy.dark{color:#8a919e}"
    },
    16805: function(e, t, r) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.TryExtensionContent = void 0;
        const s = n(r(14517))
          , i = r(23318)
          , o = r(53747)
          , a = r(63472)
          , c = r(31158)
          , l = r(20468)
          , u = n(r(87003));
        t.TryExtensionContent = function({theme: e}) {
            const [t,r] = (0,
            o.useState)(!1)
              , n = (0,
            o.useCallback)((()=>{
                window.open("https://api.wallet.coinbase.com/rpc/v2/desktop/chrome", "_blank")
            }
            ), [])
              , d = (0,
            o.useCallback)((()=>{
                t ? window.location.reload() : (n(),
                r(!0))
            }
            ), [n, t]);
            return (0,
            i.h)("div", {
                class: (0,
                s.default)("-cbwsdk-try-extension", e)
            }, (0,
            i.h)("style", null, u.default), (0,
            i.h)("div", {
                class: "-cbwsdk-try-extension-column-half"
            }, (0,
            i.h)("h3", {
                class: (0,
                s.default)("-cbwsdk-try-extension-heading", e)
            }, "Or try the Coinbase Wallet browser extension"), (0,
            i.h)("div", {
                class: "-cbwsdk-try-extension-cta-wrapper"
            }, (0,
            i.h)("button", {
                class: (0,
                s.default)("-cbwsdk-try-extension-cta", e),
                onClick: d
            }, t ? "Refresh" : "Install"), (0,
            i.h)("div", null, !t && (0,
            i.h)(a.ArrowLeftIcon, {
                class: "-cbwsdk-try-extension-cta-icon",
                fill: "light" === e ? "#0052FF" : "#588AF5"
            })))), (0,
            i.h)("div", {
                class: "-cbwsdk-try-extension-column-half"
            }, (0,
            i.h)("ul", {
                class: "-cbwsdk-try-extension-list"
            }, (0,
            i.h)("li", {
                class: "-cbwsdk-try-extension-list-item"
            }, (0,
            i.h)("div", {
                class: "-cbwsdk-try-extension-list-item-icon-wrapper"
            }, (0,
            i.h)("span", {
                class: (0,
                s.default)("-cbwsdk-try-extension-list-item-icon", e)
            }, (0,
            i.h)(c.LaptopIcon, {
                fill: "light" === e ? "#0A0B0D" : "#FFFFFF"
            }))), (0,
            i.h)("div", {
                class: (0,
                s.default)("-cbwsdk-try-extension-list-item-copy", e)
            }, "Connect with dapps with just one click on your desktop browser")), (0,
            i.h)("li", {
                class: "-cbwsdk-try-extension-list-item"
            }, (0,
            i.h)("div", {
                class: "-cbwsdk-try-extension-list-item-icon-wrapper"
            }, (0,
            i.h)("span", {
                class: (0,
                s.default)("-cbwsdk-try-extension-list-item-icon", e)
            }, (0,
            i.h)(l.SafeIcon, {
                fill: "light" === e ? "#0A0B0D" : "#FFFFFF"
            }))), (0,
            i.h)("div", {
                class: (0,
                s.default)("-cbwsdk-try-extension-list-item-copy", e)
            }, "Add an additional layer of security by using a supported Ledger hardware wallet")))))
        }
    },
    63472: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.ArrowLeftIcon = void 0;
        const n = r(23318);
        t.ArrowLeftIcon = function(e) {
            return (0,
            n.h)("svg", Object.assign({
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), (0,
            n.h)("path", {
                d: "M8.60675 0.155884L7.37816 1.28209L12.7723 7.16662H0V8.83328H12.6548L6.82149 14.6666L8 15.8451L15.8201 8.02501L8.60675 0.155884Z"
            }))
        }
    },
    82920: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.CloseIcon = void 0;
        const n = r(23318);
        t.CloseIcon = function(e) {
            return (0,
            n.h)("svg", Object.assign({
                width: "40",
                height: "40",
                viewBox: "0 0 40 40",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), (0,
            n.h)("path", {
                d: "M13.7677 13L12.3535 14.4142L18.3535 20.4142L12.3535 26.4142L13.7677 27.8284L19.7677 21.8284L25.7677 27.8284L27.1819 26.4142L21.1819 20.4142L27.1819 14.4142L25.7677 13L19.7677 19L13.7677 13Z"
            }))
        }
    },
    348: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.CoinbaseWalletRound = void 0;
        const n = r(23318);
        t.CoinbaseWalletRound = function(e) {
            return (0,
            n.h)("svg", Object.assign({
                width: "28",
                height: "28",
                viewBox: "0 0 28 28",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), (0,
            n.h)("circle", {
                cx: "14",
                cy: "14",
                r: "14",
                fill: "#0052FF"
            }), (0,
            n.h)("path", {
                d: "M23.8521 14.0003C23.8521 19.455 19.455 23.8521 14.0003 23.8521C8.54559 23.8521 4.14844 19.455 4.14844 14.0003C4.14844 8.54559 8.54559 4.14844 14.0003 4.14844C19.455 4.14844 23.8521 8.54559 23.8521 14.0003Z",
                fill: "white"
            }), (0,
            n.h)("path", {
                d: "M11.1855 12.5042C11.1855 12.0477 11.1855 11.7942 11.2835 11.642C11.3814 11.4899 11.4793 11.3377 11.6261 11.287C11.8219 11.1855 12.0178 11.1855 12.5073 11.1855H15.4934C15.983 11.1855 16.1788 11.1855 16.3746 11.287C16.5215 11.3884 16.6683 11.4899 16.7173 11.642C16.8152 11.8449 16.8152 12.0477 16.8152 12.5042V15.4965C16.8152 15.953 16.8152 16.2066 16.7173 16.3587C16.6194 16.5109 16.5215 16.663 16.3746 16.7137C16.1788 16.8152 15.983 16.8152 15.4934 16.8152H12.5073C12.0178 16.8152 11.8219 16.8152 11.6261 16.7137C11.4793 16.6123 11.3324 16.5109 11.2835 16.3587C11.1855 16.1558 11.1855 15.953 11.1855 15.4965V12.5042Z",
                fill: "#0052FF"
            }))
        }
    },
    31158: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.LaptopIcon = void 0;
        const n = r(23318);
        t.LaptopIcon = function(e) {
            return (0,
            n.h)("svg", Object.assign({
                width: "14",
                height: "14",
                viewBox: "0 0 14 14",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), (0,
            n.h)("path", {
                d: "M1.8001 2.2002H12.2001V9.40019H1.8001V2.2002ZM3.4001 3.8002V7.80019H10.6001V3.8002H3.4001Z"
            }), (0,
            n.h)("path", {
                d: "M13.4001 10.2002H0.600098C0.600098 11.0838 1.31644 11.8002 2.2001 11.8002H11.8001C12.6838 11.8002 13.4001 11.0838 13.4001 10.2002Z"
            }))
        }
    },
    58164: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.QRCodeIcon = void 0;
        const n = r(23318);
        t.QRCodeIcon = function(e) {
            return (0,
            n.h)("svg", Object.assign({
                width: "18",
                height: "18",
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), (0,
            n.h)("path", {
                d: "M3 3V8.99939L5 8.99996V5H9V3H3Z"
            }), (0,
            n.h)("path", {
                d: "M15 21L21 21V15.0006L19 15V19L15 19V21Z"
            }), (0,
            n.h)("path", {
                d: "M21 9H19V5H15.0006L15 3H21V9Z"
            }), (0,
            n.h)("path", {
                d: "M3 15V21H8.99939L8.99996 19H5L5 15H3Z"
            }))
        }
    },
    20468: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.SafeIcon = void 0;
        const n = r(23318);
        t.SafeIcon = function(e) {
            return (0,
            n.h)("svg", Object.assign({
                width: "14",
                height: "14",
                viewBox: "0 0 14 14",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), (0,
            n.h)("path", {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M0.600098 0.600098V11.8001H13.4001V0.600098H0.600098ZM7.0001 9.2001C5.3441 9.2001 4.0001 7.8561 4.0001 6.2001C4.0001 4.5441 5.3441 3.2001 7.0001 3.2001C8.6561 3.2001 10.0001 4.5441 10.0001 6.2001C10.0001 7.8561 8.6561 9.2001 7.0001 9.2001ZM0.600098 12.6001H3.8001V13.4001H0.600098V12.6001ZM10.2001 12.6001H13.4001V13.4001H10.2001V12.6001ZM8.8001 6.2001C8.8001 7.19421 7.99421 8.0001 7.0001 8.0001C6.00598 8.0001 5.2001 7.19421 5.2001 6.2001C5.2001 5.20598 6.00598 4.4001 7.0001 4.4001C7.99421 4.4001 8.8001 5.20598 8.8001 6.2001Z"
            }))
        }
    },
    82834: function(e, t, r) {
        var n = r(15313).Buffer;
        const s = r(73052)
          , i = r(98394);
        function o(e) {
            return e.startsWith("int[") ? "int256" + e.slice(3) : "int" === e ? "int256" : e.startsWith("uint[") ? "uint256" + e.slice(4) : "uint" === e ? "uint256" : e.startsWith("fixed[") ? "fixed128x128" + e.slice(5) : "fixed" === e ? "fixed128x128" : e.startsWith("ufixed[") ? "ufixed128x128" + e.slice(6) : "ufixed" === e ? "ufixed128x128" : e
        }
        function a(e) {
            return parseInt(/^\D+(\d+)$/.exec(e)[1], 10)
        }
        function c(e) {
            var t = /^\D+(\d+)x(\d+)$/.exec(e);
            return [parseInt(t[1], 10), parseInt(t[2], 10)]
        }
        function l(e) {
            var t = e.match(/(.*)\[(.*?)\]$/);
            return t ? "" === t[2] ? "dynamic" : parseInt(t[2], 10) : null
        }
        function u(e) {
            var t = typeof e;
            if ("string" === t)
                return s.isHexString(e) ? new i(s.stripHexPrefix(e),16) : new i(e,10);
            if ("number" === t)
                return new i(e);
            if (e.toArray)
                return e;
            throw new Error("Argument is not a number")
        }
        function d(e, t) {
            var r, o, h, f;
            if ("address" === e)
                return d("uint160", u(t));
            if ("bool" === e)
                return d("uint8", t ? 1 : 0);
            if ("string" === e)
                return d("bytes", new n(t,"utf8"));
            if (function(e) {
                return e.lastIndexOf("]") === e.length - 1
            }(e)) {
                if ("undefined" === typeof t.length)
                    throw new Error("Not an array?");
                if ("dynamic" !== (r = l(e)) && 0 !== r && t.length > r)
                    throw new Error("Elements exceed array size: " + r);
                for (f in h = [],
                e = e.slice(0, e.lastIndexOf("[")),
                "string" === typeof t && (t = JSON.parse(t)),
                t)
                    h.push(d(e, t[f]));
                if ("dynamic" === r) {
                    var p = d("uint256", t.length);
                    h.unshift(p)
                }
                return n.concat(h)
            }
            if ("bytes" === e)
                return t = new n(t),
                h = n.concat([d("uint256", t.length), t]),
                t.length % 32 !== 0 && (h = n.concat([h, s.zeros(32 - t.length % 32)])),
                h;
            if (e.startsWith("bytes")) {
                if ((r = a(e)) < 1 || r > 32)
                    throw new Error("Invalid bytes<N> width: " + r);
                return s.setLengthRight(t, 32)
            }
            if (e.startsWith("uint")) {
                if ((r = a(e)) % 8 || r < 8 || r > 256)
                    throw new Error("Invalid uint<N> width: " + r);
                if ((o = u(t)).bitLength() > r)
                    throw new Error("Supplied uint exceeds width: " + r + " vs " + o.bitLength());
                if (o < 0)
                    throw new Error("Supplied uint is negative");
                return o.toArrayLike(n, "be", 32)
            }
            if (e.startsWith("int")) {
                if ((r = a(e)) % 8 || r < 8 || r > 256)
                    throw new Error("Invalid int<N> width: " + r);
                if ((o = u(t)).bitLength() > r)
                    throw new Error("Supplied int exceeds width: " + r + " vs " + o.bitLength());
                return o.toTwos(256).toArrayLike(n, "be", 32)
            }
            if (e.startsWith("ufixed")) {
                if (r = c(e),
                (o = u(t)) < 0)
                    throw new Error("Supplied ufixed is negative");
                return d("uint256", o.mul(new i(2).pow(new i(r[1]))))
            }
            if (e.startsWith("fixed"))
                return r = c(e),
                d("int256", u(t).mul(new i(2).pow(new i(r[1]))));
            throw new Error("Unsupported or invalid type: " + e)
        }
        function h(e) {
            return "string" === e || "bytes" === e || "dynamic" === l(e)
        }
        function f(e, t) {
            if (e.length !== t.length)
                throw new Error("Number of types are not matching the values");
            for (var r, i, c = [], l = 0; l < e.length; l++) {
                var d = o(e[l])
                  , h = t[l];
                if ("bytes" === d)
                    c.push(h);
                else if ("string" === d)
                    c.push(new n(h,"utf8"));
                else if ("bool" === d)
                    c.push(new n(h ? "01" : "00","hex"));
                else if ("address" === d)
                    c.push(s.setLength(h, 20));
                else if (d.startsWith("bytes")) {
                    if ((r = a(d)) < 1 || r > 32)
                        throw new Error("Invalid bytes<N> width: " + r);
                    c.push(s.setLengthRight(h, r))
                } else if (d.startsWith("uint")) {
                    if ((r = a(d)) % 8 || r < 8 || r > 256)
                        throw new Error("Invalid uint<N> width: " + r);
                    if ((i = u(h)).bitLength() > r)
                        throw new Error("Supplied uint exceeds width: " + r + " vs " + i.bitLength());
                    c.push(i.toArrayLike(n, "be", r / 8))
                } else {
                    if (!d.startsWith("int"))
                        throw new Error("Unsupported or invalid type: " + d);
                    if ((r = a(d)) % 8 || r < 8 || r > 256)
                        throw new Error("Invalid int<N> width: " + r);
                    if ((i = u(h)).bitLength() > r)
                        throw new Error("Supplied int exceeds width: " + r + " vs " + i.bitLength());
                    c.push(i.toTwos(r).toArrayLike(n, "be", r / 8))
                }
            }
            return n.concat(c)
        }
        e.exports = {
            rawEncode: function(e, t) {
                var r = []
                  , s = []
                  , i = 32 * e.length;
                for (var a in e) {
                    var c = o(e[a])
                      , l = d(c, t[a]);
                    h(c) ? (r.push(d("uint256", i)),
                    s.push(l),
                    i += l.length) : r.push(l)
                }
                return n.concat(r.concat(s))
            },
            solidityPack: f,
            soliditySHA3: function(e, t) {
                return s.keccak(f(e, t))
            }
        }
    },
    55937: function(e, t, r) {
        var n = r(15313).Buffer;
        const s = r(73052)
          , i = r(82834)
          , o = {
            type: "object",
            properties: {
                types: {
                    type: "object",
                    additionalProperties: {
                        type: "array",
                        items: {
                            type: "object",
                            properties: {
                                name: {
                                    type: "string"
                                },
                                type: {
                                    type: "string"
                                }
                            },
                            required: ["name", "type"]
                        }
                    }
                },
                primaryType: {
                    type: "string"
                },
                domain: {
                    type: "object"
                },
                message: {
                    type: "object"
                }
            },
            required: ["types", "primaryType", "domain", "message"]
        }
          , a = {
            encodeData(e, t, r, o=!0) {
                const a = ["bytes32"]
                  , c = [this.hashType(e, r)];
                if (o) {
                    const l = (e,t,a)=>{
                        if (void 0 !== r[t])
                            return ["bytes32", null == a ? "0x0000000000000000000000000000000000000000000000000000000000000000" : s.keccak(this.encodeData(t, a, r, o))];
                        if (void 0 === a)
                            throw new Error(`missing value for field ${e} of type ${t}`);
                        if ("bytes" === t)
                            return ["bytes32", s.keccak(a)];
                        if ("string" === t)
                            return "string" === typeof a && (a = n.from(a, "utf8")),
                            ["bytes32", s.keccak(a)];
                        if (t.lastIndexOf("]") === t.length - 1) {
                            const r = t.slice(0, t.lastIndexOf("["))
                              , n = a.map((t=>l(e, r, t)));
                            return ["bytes32", s.keccak(i.rawEncode(n.map((([e])=>e)), n.map((([,e])=>e))))]
                        }
                        return [t, a]
                    }
                    ;
                    for (const n of r[e]) {
                        const [e,r] = l(n.name, n.type, t[n.name]);
                        a.push(e),
                        c.push(r)
                    }
                } else
                    for (const i of r[e]) {
                        let e = t[i.name];
                        if (void 0 !== e)
                            if ("bytes" === i.type)
                                a.push("bytes32"),
                                e = s.keccak(e),
                                c.push(e);
                            else if ("string" === i.type)
                                a.push("bytes32"),
                                "string" === typeof e && (e = n.from(e, "utf8")),
                                e = s.keccak(e),
                                c.push(e);
                            else if (void 0 !== r[i.type])
                                a.push("bytes32"),
                                e = s.keccak(this.encodeData(i.type, e, r, o)),
                                c.push(e);
                            else {
                                if (i.type.lastIndexOf("]") === i.type.length - 1)
                                    throw new Error("Arrays currently unimplemented in encodeData");
                                a.push(i.type),
                                c.push(e)
                            }
                    }
                return i.rawEncode(a, c)
            },
            encodeType(e, t) {
                let r = ""
                  , n = this.findTypeDependencies(e, t).filter((t=>t !== e));
                n = [e].concat(n.sort());
                for (const s of n) {
                    if (!t[s])
                        throw new Error("No type definition specified: " + s);
                    r += s + "(" + t[s].map((({name: e, type: t})=>t + " " + e)).join(",") + ")"
                }
                return r
            },
            findTypeDependencies(e, t, r=[]) {
                if (e = e.match(/^\w*/)[0],
                r.includes(e) || void 0 === t[e])
                    return r;
                r.push(e);
                for (const n of t[e])
                    for (const e of this.findTypeDependencies(n.type, t, r))
                        !r.includes(e) && r.push(e);
                return r
            },
            hashStruct(e, t, r, n=!0) {
                return s.keccak(this.encodeData(e, t, r, n))
            },
            hashType(e, t) {
                return s.keccak(this.encodeType(e, t))
            },
            sanitizeData(e) {
                const t = {};
                for (const r in o.properties)
                    e[r] && (t[r] = e[r]);
                return t.types && (t.types = Object.assign({
                    EIP712Domain: []
                }, t.types)),
                t
            },
            hash(e, t=!0) {
                const r = this.sanitizeData(e)
                  , i = [n.from("1901", "hex")];
                return i.push(this.hashStruct("EIP712Domain", r.domain, r.types, t)),
                "EIP712Domain" !== r.primaryType && i.push(this.hashStruct(r.primaryType, r.message, r.types, t)),
                s.keccak(n.concat(i))
            }
        };
        e.exports = {
            TYPED_MESSAGE_SCHEMA: o,
            TypedDataUtils: a,
            hashForSignTypedDataLegacy: function(e) {
                return function(e) {
                    const t = new Error("Expect argument to be non-empty array");
                    if ("object" !== typeof e || !e.length)
                        throw t;
                    const r = e.map((function(e) {
                        return "bytes" === e.type ? s.toBuffer(e.value) : e.value
                    }
                    ))
                      , n = e.map((function(e) {
                        return e.type
                    }
                    ))
                      , o = e.map((function(e) {
                        if (!e.name)
                            throw t;
                        return e.type + " " + e.name
                    }
                    ));
                    return i.soliditySHA3(["bytes32", "bytes32"], [i.soliditySHA3(new Array(e.length).fill("string"), o), i.soliditySHA3(n, r)])
                }(e.data)
            },
            hashForSignTypedData_v3: function(e) {
                return a.hash(e.data, !1)
            },
            hashForSignTypedData_v4: function(e) {
                return a.hash(e.data)
            }
        }
    },
    73052: function(e, t, r) {
        var n = r(15313).Buffer;
        const s = r(18521)
          , i = r(98394);
        function o(e) {
            return n.allocUnsafe(e).fill(0)
        }
        function a(e, t, r) {
            const n = o(t);
            return e = c(e),
            r ? e.length < t ? (e.copy(n),
            n) : e.slice(0, t) : e.length < t ? (e.copy(n, t - e.length),
            n) : e.slice(-t)
        }
        function c(e) {
            if (!n.isBuffer(e))
                if (Array.isArray(e))
                    e = n.from(e);
                else if ("string" === typeof e)
                    e = l(e) ? n.from((t = u(e)).length % 2 ? "0" + t : t, "hex") : n.from(e);
                else if ("number" === typeof e)
                    e = intToBuffer(e);
                else if (null === e || void 0 === e)
                    e = n.allocUnsafe(0);
                else if (i.isBN(e))
                    e = e.toArrayLike(n);
                else {
                    if (!e.toArray)
                        throw new Error("invalid type");
                    e = n.from(e.toArray())
                }
            var t;
            return e
        }
        function l(e) {
            return "string" === typeof e && e.match(/^0x[0-9A-Fa-f]*$/)
        }
        function u(e) {
            return "string" === typeof e && e.startsWith("0x") ? e.slice(2) : e
        }
        e.exports = {
            zeros: o,
            setLength: a,
            setLengthRight: function(e, t) {
                return a(e, t, !0)
            },
            isHexString: l,
            stripHexPrefix: u,
            toBuffer: c,
            bufferToHex: function(e) {
                return "0x" + (e = c(e)).toString("hex")
            },
            keccak: function(e, t) {
                return e = c(e),
                t || (t = 256),
                s("keccak" + t).update(e).digest()
            }
        }
    },
    69738: function(e) {
        function t(e) {
            this.mode = n.MODE_8BIT_BYTE,
            this.data = e,
            this.parsedData = [];
            for (var t = 0, r = this.data.length; t < r; t++) {
                var s = []
                  , i = this.data.charCodeAt(t);
                i > 65536 ? (s[0] = 240 | (1835008 & i) >>> 18,
                s[1] = 128 | (258048 & i) >>> 12,
                s[2] = 128 | (4032 & i) >>> 6,
                s[3] = 128 | 63 & i) : i > 2048 ? (s[0] = 224 | (61440 & i) >>> 12,
                s[1] = 128 | (4032 & i) >>> 6,
                s[2] = 128 | 63 & i) : i > 128 ? (s[0] = 192 | (1984 & i) >>> 6,
                s[1] = 128 | 63 & i) : s[0] = i,
                this.parsedData.push(s)
            }
            this.parsedData = Array.prototype.concat.apply([], this.parsedData),
            this.parsedData.length != this.data.length && (this.parsedData.unshift(191),
            this.parsedData.unshift(187),
            this.parsedData.unshift(239))
        }
        function r(e, t) {
            this.typeNumber = e,
            this.errorCorrectLevel = t,
            this.modules = null,
            this.moduleCount = 0,
            this.dataCache = null,
            this.dataList = []
        }
        t.prototype = {
            getLength: function(e) {
                return this.parsedData.length
            },
            write: function(e) {
                for (var t = 0, r = this.parsedData.length; t < r; t++)
                    e.put(this.parsedData[t], 8)
            }
        },
        r.prototype = {
            addData: function(e) {
                var r = new t(e);
                this.dataList.push(r),
                this.dataCache = null
            },
            isDark: function(e, t) {
                if (e < 0 || this.moduleCount <= e || t < 0 || this.moduleCount <= t)
                    throw new Error(e + "," + t);
                return this.modules[e][t]
            },
            getModuleCount: function() {
                return this.moduleCount
            },
            make: function() {
                this.makeImpl(!1, this.getBestMaskPattern())
            },
            makeImpl: function(e, t) {
                this.moduleCount = 4 * this.typeNumber + 17,
                this.modules = new Array(this.moduleCount);
                for (var n = 0; n < this.moduleCount; n++) {
                    this.modules[n] = new Array(this.moduleCount);
                    for (var s = 0; s < this.moduleCount; s++)
                        this.modules[n][s] = null
                }
                this.setupPositionProbePattern(0, 0),
                this.setupPositionProbePattern(this.moduleCount - 7, 0),
                this.setupPositionProbePattern(0, this.moduleCount - 7),
                this.setupPositionAdjustPattern(),
                this.setupTimingPattern(),
                this.setupTypeInfo(e, t),
                this.typeNumber >= 7 && this.setupTypeNumber(e),
                null == this.dataCache && (this.dataCache = r.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)),
                this.mapData(this.dataCache, t)
            },
            setupPositionProbePattern: function(e, t) {
                for (var r = -1; r <= 7; r++)
                    if (!(e + r <= -1 || this.moduleCount <= e + r))
                        for (var n = -1; n <= 7; n++)
                            t + n <= -1 || this.moduleCount <= t + n || (this.modules[e + r][t + n] = 0 <= r && r <= 6 && (0 == n || 6 == n) || 0 <= n && n <= 6 && (0 == r || 6 == r) || 2 <= r && r <= 4 && 2 <= n && n <= 4)
            },
            getBestMaskPattern: function() {
                for (var e = 0, t = 0, r = 0; r < 8; r++) {
                    this.makeImpl(!0, r);
                    var n = m.getLostPoint(this);
                    (0 == r || e > n) && (e = n,
                    t = r)
                }
                return t
            },
            createMovieClip: function(e, t, r) {
                var n = e.createEmptyMovieClip(t, r);
                this.make();
                for (var s = 0; s < this.modules.length; s++)
                    for (var i = 1 * s, o = 0; o < this.modules[s].length; o++) {
                        var a = 1 * o;
                        this.modules[s][o] && (n.beginFill(0, 100),
                        n.moveTo(a, i),
                        n.lineTo(a + 1, i),
                        n.lineTo(a + 1, i + 1),
                        n.lineTo(a, i + 1),
                        n.endFill())
                    }
                return n
            },
            setupTimingPattern: function() {
                for (var e = 8; e < this.moduleCount - 8; e++)
                    null == this.modules[e][6] && (this.modules[e][6] = e % 2 == 0);
                for (var t = 8; t < this.moduleCount - 8; t++)
                    null == this.modules[6][t] && (this.modules[6][t] = t % 2 == 0)
            },
            setupPositionAdjustPattern: function() {
                for (var e = m.getPatternPosition(this.typeNumber), t = 0; t < e.length; t++)
                    for (var r = 0; r < e.length; r++) {
                        var n = e[t]
                          , s = e[r];
                        if (null == this.modules[n][s])
                            for (var i = -2; i <= 2; i++)
                                for (var o = -2; o <= 2; o++)
                                    this.modules[n + i][s + o] = -2 == i || 2 == i || -2 == o || 2 == o || 0 == i && 0 == o
                    }
            },
            setupTypeNumber: function(e) {
                for (var t = m.getBCHTypeNumber(this.typeNumber), r = 0; r < 18; r++) {
                    var n = !e && 1 == (t >> r & 1);
                    this.modules[Math.floor(r / 3)][r % 3 + this.moduleCount - 8 - 3] = n
                }
                for (r = 0; r < 18; r++) {
                    n = !e && 1 == (t >> r & 1);
                    this.modules[r % 3 + this.moduleCount - 8 - 3][Math.floor(r / 3)] = n
                }
            },
            setupTypeInfo: function(e, t) {
                for (var r = this.errorCorrectLevel << 3 | t, n = m.getBCHTypeInfo(r), s = 0; s < 15; s++) {
                    var i = !e && 1 == (n >> s & 1);
                    s < 6 ? this.modules[s][8] = i : s < 8 ? this.modules[s + 1][8] = i : this.modules[this.moduleCount - 15 + s][8] = i
                }
                for (s = 0; s < 15; s++) {
                    i = !e && 1 == (n >> s & 1);
                    s < 8 ? this.modules[8][this.moduleCount - s - 1] = i : s < 9 ? this.modules[8][15 - s - 1 + 1] = i : this.modules[8][15 - s - 1] = i
                }
                this.modules[this.moduleCount - 8][8] = !e
            },
            mapData: function(e, t) {
                for (var r = -1, n = this.moduleCount - 1, s = 7, i = 0, o = this.moduleCount - 1; o > 0; o -= 2)
                    for (6 == o && o--; ; ) {
                        for (var a = 0; a < 2; a++)
                            if (null == this.modules[n][o - a]) {
                                var c = !1;
                                i < e.length && (c = 1 == (e[i] >>> s & 1)),
                                m.getMask(t, n, o - a) && (c = !c),
                                this.modules[n][o - a] = c,
                                -1 == --s && (i++,
                                s = 7)
                            }
                        if ((n += r) < 0 || this.moduleCount <= n) {
                            n -= r,
                            r = -r;
                            break
                        }
                    }
            }
        },
        r.PAD0 = 236,
        r.PAD1 = 17,
        r.createData = function(e, t, n) {
            for (var s = w.getRSBlocks(e, t), i = new v, o = 0; o < n.length; o++) {
                var a = n[o];
                i.put(a.mode, 4),
                i.put(a.getLength(), m.getLengthInBits(a.mode, e)),
                a.write(i)
            }
            var c = 0;
            for (o = 0; o < s.length; o++)
                c += s[o].dataCount;
            if (i.getLengthInBits() > 8 * c)
                throw new Error("code length overflow. (" + i.getLengthInBits() + ">" + 8 * c + ")");
            for (i.getLengthInBits() + 4 <= 8 * c && i.put(0, 4); i.getLengthInBits() % 8 != 0; )
                i.putBit(!1);
            for (; !(i.getLengthInBits() >= 8 * c) && (i.put(r.PAD0, 8),
            !(i.getLengthInBits() >= 8 * c)); )
                i.put(r.PAD1, 8);
            return r.createBytes(i, s)
        }
        ,
        r.createBytes = function(e, t) {
            for (var r = 0, n = 0, s = 0, i = new Array(t.length), o = new Array(t.length), a = 0; a < t.length; a++) {
                var c = t[a].dataCount
                  , l = t[a].totalCount - c;
                n = Math.max(n, c),
                s = Math.max(s, l),
                i[a] = new Array(c);
                for (var u = 0; u < i[a].length; u++)
                    i[a][u] = 255 & e.buffer[u + r];
                r += c;
                var d = m.getErrorCorrectPolynomial(l)
                  , h = new y(i[a],d.getLength() - 1).mod(d);
                o[a] = new Array(d.getLength() - 1);
                for (u = 0; u < o[a].length; u++) {
                    var f = u + h.getLength() - o[a].length;
                    o[a][u] = f >= 0 ? h.get(f) : 0
                }
            }
            var p = 0;
            for (u = 0; u < t.length; u++)
                p += t[u].totalCount;
            var g = new Array(p)
              , _ = 0;
            for (u = 0; u < n; u++)
                for (a = 0; a < t.length; a++)
                    u < i[a].length && (g[_++] = i[a][u]);
            for (u = 0; u < s; u++)
                for (a = 0; a < t.length; a++)
                    u < o[a].length && (g[_++] = o[a][u]);
            return g
        }
        ;
        for (var n = {
            MODE_NUMBER: 1,
            MODE_ALPHA_NUM: 2,
            MODE_8BIT_BYTE: 4,
            MODE_KANJI: 8
        }, s = 1, i = 0, o = 3, a = 2, c = 0, l = 1, u = 2, d = 3, h = 4, f = 5, p = 6, g = 7, m = {
            PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],
            G15: 1335,
            G18: 7973,
            G15_MASK: 21522,
            getBCHTypeInfo: function(e) {
                for (var t = e << 10; m.getBCHDigit(t) - m.getBCHDigit(m.G15) >= 0; )
                    t ^= m.G15 << m.getBCHDigit(t) - m.getBCHDigit(m.G15);
                return (e << 10 | t) ^ m.G15_MASK
            },
            getBCHTypeNumber: function(e) {
                for (var t = e << 12; m.getBCHDigit(t) - m.getBCHDigit(m.G18) >= 0; )
                    t ^= m.G18 << m.getBCHDigit(t) - m.getBCHDigit(m.G18);
                return e << 12 | t
            },
            getBCHDigit: function(e) {
                for (var t = 0; 0 != e; )
                    t++,
                    e >>>= 1;
                return t
            },
            getPatternPosition: function(e) {
                return m.PATTERN_POSITION_TABLE[e - 1]
            },
            getMask: function(e, t, r) {
                switch (e) {
                case c:
                    return (t + r) % 2 == 0;
                case l:
                    return t % 2 == 0;
                case u:
                    return r % 3 == 0;
                case d:
                    return (t + r) % 3 == 0;
                case h:
                    return (Math.floor(t / 2) + Math.floor(r / 3)) % 2 == 0;
                case f:
                    return t * r % 2 + t * r % 3 == 0;
                case p:
                    return (t * r % 2 + t * r % 3) % 2 == 0;
                case g:
                    return (t * r % 3 + (t + r) % 2) % 2 == 0;
                default:
                    throw new Error("bad maskPattern:" + e)
                }
            },
            getErrorCorrectPolynomial: function(e) {
                for (var t = new y([1],0), r = 0; r < e; r++)
                    t = t.multiply(new y([1, _.gexp(r)],0));
                return t
            },
            getLengthInBits: function(e, t) {
                if (1 <= t && t < 10)
                    switch (e) {
                    case n.MODE_NUMBER:
                        return 10;
                    case n.MODE_ALPHA_NUM:
                        return 9;
                    case n.MODE_8BIT_BYTE:
                    case n.MODE_KANJI:
                        return 8;
                    default:
                        throw new Error("mode:" + e)
                    }
                else if (t < 27)
                    switch (e) {
                    case n.MODE_NUMBER:
                        return 12;
                    case n.MODE_ALPHA_NUM:
                        return 11;
                    case n.MODE_8BIT_BYTE:
                        return 16;
                    case n.MODE_KANJI:
                        return 10;
                    default:
                        throw new Error("mode:" + e)
                    }
                else {
                    if (!(t < 41))
                        throw new Error("type:" + t);
                    switch (e) {
                    case n.MODE_NUMBER:
                        return 14;
                    case n.MODE_ALPHA_NUM:
                        return 13;
                    case n.MODE_8BIT_BYTE:
                        return 16;
                    case n.MODE_KANJI:
                        return 12;
                    default:
                        throw new Error("mode:" + e)
                    }
                }
            },
            getLostPoint: function(e) {
                for (var t = e.getModuleCount(), r = 0, n = 0; n < t; n++)
                    for (var s = 0; s < t; s++) {
                        for (var i = 0, o = e.isDark(n, s), a = -1; a <= 1; a++)
                            if (!(n + a < 0 || t <= n + a))
                                for (var c = -1; c <= 1; c++)
                                    s + c < 0 || t <= s + c || 0 == a && 0 == c || o == e.isDark(n + a, s + c) && i++;
                        i > 5 && (r += 3 + i - 5)
                    }
                for (n = 0; n < t - 1; n++)
                    for (s = 0; s < t - 1; s++) {
                        var l = 0;
                        e.isDark(n, s) && l++,
                        e.isDark(n + 1, s) && l++,
                        e.isDark(n, s + 1) && l++,
                        e.isDark(n + 1, s + 1) && l++,
                        0 != l && 4 != l || (r += 3)
                    }
                for (n = 0; n < t; n++)
                    for (s = 0; s < t - 6; s++)
                        e.isDark(n, s) && !e.isDark(n, s + 1) && e.isDark(n, s + 2) && e.isDark(n, s + 3) && e.isDark(n, s + 4) && !e.isDark(n, s + 5) && e.isDark(n, s + 6) && (r += 40);
                for (s = 0; s < t; s++)
                    for (n = 0; n < t - 6; n++)
                        e.isDark(n, s) && !e.isDark(n + 1, s) && e.isDark(n + 2, s) && e.isDark(n + 3, s) && e.isDark(n + 4, s) && !e.isDark(n + 5, s) && e.isDark(n + 6, s) && (r += 40);
                var u = 0;
                for (s = 0; s < t; s++)
                    for (n = 0; n < t; n++)
                        e.isDark(n, s) && u++;
                return r += 10 * (Math.abs(100 * u / t / t - 50) / 5)
            }
        }, _ = {
            glog: function(e) {
                if (e < 1)
                    throw new Error("glog(" + e + ")");
                return _.LOG_TABLE[e]
            },
            gexp: function(e) {
                for (; e < 0; )
                    e += 255;
                for (; e >= 256; )
                    e -= 255;
                return _.EXP_TABLE[e]
            },
            EXP_TABLE: new Array(256),
            LOG_TABLE: new Array(256)
        }, b = 0; b < 8; b++)
            _.EXP_TABLE[b] = 1 << b;
        for (b = 8; b < 256; b++)
            _.EXP_TABLE[b] = _.EXP_TABLE[b - 4] ^ _.EXP_TABLE[b - 5] ^ _.EXP_TABLE[b - 6] ^ _.EXP_TABLE[b - 8];
        for (b = 0; b < 255; b++)
            _.LOG_TABLE[_.EXP_TABLE[b]] = b;
        function y(e, t) {
            if (void 0 == e.length)
                throw new Error(e.length + "/" + t);
            for (var r = 0; r < e.length && 0 == e[r]; )
                r++;
            this.num = new Array(e.length - r + t);
            for (var n = 0; n < e.length - r; n++)
                this.num[n] = e[n + r]
        }
        function w(e, t) {
            this.totalCount = e,
            this.dataCount = t
        }
        function v() {
            this.buffer = [],
            this.length = 0
        }
        y.prototype = {
            get: function(e) {
                return this.num[e]
            },
            getLength: function() {
                return this.num.length
            },
            multiply: function(e) {
                for (var t = new Array(this.getLength() + e.getLength() - 1), r = 0; r < this.getLength(); r++)
                    for (var n = 0; n < e.getLength(); n++)
                        t[r + n] ^= _.gexp(_.glog(this.get(r)) + _.glog(e.get(n)));
                return new y(t,0)
            },
            mod: function(e) {
                if (this.getLength() - e.getLength() < 0)
                    return this;
                for (var t = _.glog(this.get(0)) - _.glog(e.get(0)), r = new Array(this.getLength()), n = 0; n < this.getLength(); n++)
                    r[n] = this.get(n);
                for (n = 0; n < e.getLength(); n++)
                    r[n] ^= _.gexp(_.glog(e.get(n)) + t);
                return new y(r,0).mod(e)
            }
        },
        w.RS_BLOCK_TABLE = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]],
        w.getRSBlocks = function(e, t) {
            var r = w.getRsBlockTable(e, t);
            if (void 0 == r)
                throw new Error("bad rs block @ typeNumber:" + e + "/errorCorrectLevel:" + t);
            for (var n = r.length / 3, s = [], i = 0; i < n; i++)
                for (var o = r[3 * i + 0], a = r[3 * i + 1], c = r[3 * i + 2], l = 0; l < o; l++)
                    s.push(new w(a,c));
            return s
        }
        ,
        w.getRsBlockTable = function(e, t) {
            switch (t) {
            case s:
                return w.RS_BLOCK_TABLE[4 * (e - 1) + 0];
            case i:
                return w.RS_BLOCK_TABLE[4 * (e - 1) + 1];
            case o:
                return w.RS_BLOCK_TABLE[4 * (e - 1) + 2];
            case a:
                return w.RS_BLOCK_TABLE[4 * (e - 1) + 3];
            default:
                return
            }
        }
        ,
        v.prototype = {
            get: function(e) {
                var t = Math.floor(e / 8);
                return 1 == (this.buffer[t] >>> 7 - e % 8 & 1)
            },
            put: function(e, t) {
                for (var r = 0; r < t; r++)
                    this.putBit(1 == (e >>> t - r - 1 & 1))
            },
            getLengthInBits: function() {
                return this.length
            },
            putBit: function(e) {
                var t = Math.floor(this.length / 8);
                this.buffer.length <= t && this.buffer.push(0),
                e && (this.buffer[t] |= 128 >>> this.length % 8),
                this.length++
            }
        };
        var E = [[17, 14, 11, 7], [32, 26, 20, 14], [53, 42, 32, 24], [78, 62, 46, 34], [106, 84, 60, 44], [134, 106, 74, 58], [154, 122, 86, 64], [192, 152, 108, 84], [230, 180, 130, 98], [271, 213, 151, 119], [321, 251, 177, 137], [367, 287, 203, 155], [425, 331, 241, 177], [458, 362, 258, 194], [520, 412, 292, 220], [586, 450, 322, 250], [644, 504, 364, 280], [718, 560, 394, 310], [792, 624, 442, 338], [858, 666, 482, 382], [929, 711, 509, 403], [1003, 779, 565, 439], [1091, 857, 611, 461], [1171, 911, 661, 511], [1273, 997, 715, 535], [1367, 1059, 751, 593], [1465, 1125, 805, 625], [1528, 1190, 868, 658], [1628, 1264, 908, 698], [1732, 1370, 982, 742], [1840, 1452, 1030, 790], [1952, 1538, 1112, 842], [2068, 1628, 1168, 898], [2188, 1722, 1228, 958], [2303, 1809, 1283, 983], [2431, 1911, 1351, 1051], [2563, 1989, 1423, 1093], [2699, 2099, 1499, 1139], [2809, 2213, 1579, 1219], [2953, 2331, 1663, 1273]];
        function k(e) {
            if (this.options = {
                padding: 4,
                width: 256,
                height: 256,
                typeNumber: 4,
                color: "#000000",
                background: "#ffffff",
                ecl: "M",
                image: {
                    svg: "",
                    width: 0,
                    height: 0
                }
            },
            "string" === typeof e && (e = {
                content: e
            }),
            e)
                for (var t in e)
                    this.options[t] = e[t];
            if ("string" !== typeof this.options.content)
                throw new Error("Expected 'content' as string!");
            if (0 === this.options.content.length)
                throw new Error("Expected 'content' to be non-empty!");
            if (!(this.options.padding >= 0))
                throw new Error("Expected 'padding' value to be non-negative!");
            if (!(this.options.width > 0) || !(this.options.height > 0))
                throw new Error("Expected 'width' or 'height' value to be higher than zero!");
            var n = this.options.content
              , c = function(e, t) {
                for (var r = function(e) {
                    var t = encodeURI(e).toString().replace(/\%[0-9a-fA-F]{2}/g, "a");
                    return t.length + (t.length != e ? 3 : 0)
                }(e), n = 1, s = 0, i = 0, o = E.length; i <= o; i++) {
                    var a = E[i];
                    if (!a)
                        throw new Error("Content too long: expected " + s + " but got " + r);
                    switch (t) {
                    case "L":
                        s = a[0];
                        break;
                    case "M":
                        s = a[1];
                        break;
                    case "Q":
                        s = a[2];
                        break;
                    case "H":
                        s = a[3];
                        break;
                    default:
                        throw new Error("Unknwon error correction level: " + t)
                    }
                    if (r <= s)
                        break;
                    n++
                }
                if (n > E.length)
                    throw new Error("Content too long");
                return n
            }(n, this.options.ecl)
              , l = function(e) {
                switch (e) {
                case "L":
                    return s;
                case "M":
                    return i;
                case "Q":
                    return o;
                case "H":
                    return a;
                default:
                    throw new Error("Unknwon error correction level: " + e)
                }
            }(this.options.ecl);
            this.qrcode = new r(c,l),
            this.qrcode.addData(n),
            this.qrcode.make()
        }
        k.prototype.svg = function(e) {
            var t = this.options || {}
              , r = this.qrcode.modules;
            "undefined" == typeof e && (e = {
                container: t.container || "svg"
            });
            for (var n = "undefined" == typeof t.pretty || !!t.pretty, s = n ? "  " : "", i = n ? "\r\n" : "", o = t.width, a = t.height, c = r.length, l = o / (c + 2 * t.padding), u = a / (c + 2 * t.padding), d = "undefined" != typeof t.join && !!t.join, h = "undefined" != typeof t.swap && !!t.swap, f = "undefined" == typeof t.xmlDeclaration || !!t.xmlDeclaration, p = "undefined" != typeof t.predefined && !!t.predefined, g = p ? s + '<defs><path id="qrmodule" d="M0 0 h' + u + " v" + l + ' H0 z" style="fill:' + t.color + ';shape-rendering:crispEdges;" /></defs>' + i : "", m = s + '<rect x="0" y="0" width="' + o + '" height="' + a + '" style="fill:' + t.background + ';shape-rendering:crispEdges;"/>' + i, _ = "", b = "", y = 0; y < c; y++)
                for (var w = 0; w < c; w++) {
                    if (r[w][y]) {
                        var v = w * l + t.padding * l
                          , E = y * u + t.padding * u;
                        if (h) {
                            var k = v;
                            v = E,
                            E = k
                        }
                        if (d) {
                            var S = l + v
                              , R = u + E;
                            v = Number.isInteger(v) ? Number(v) : v.toFixed(2),
                            E = Number.isInteger(E) ? Number(E) : E.toFixed(2),
                            S = Number.isInteger(S) ? Number(S) : S.toFixed(2),
                            b += "M" + v + "," + E + " V" + (R = Number.isInteger(R) ? Number(R) : R.toFixed(2)) + " H" + S + " V" + E + " H" + v + " Z "
                        } else
                            _ += p ? s + '<use x="' + v.toString() + '" y="' + E.toString() + '" href="#qrmodule" />' + i : s + '<rect x="' + v.toString() + '" y="' + E.toString() + '" width="' + l + '" height="' + u + '" style="fill:' + t.color + ';shape-rendering:crispEdges;"/>' + i
                    }
                }
            d && (_ = s + '<path x="0" y="0" style="fill:' + t.color + ';shape-rendering:crispEdges;" d="' + b + '" />');
            let C = "";
            if (void 0 !== this.options.image && this.options.image.svg) {
                const e = o * this.options.image.width / 100
                  , t = a * this.options.image.height / 100;
                C += `<svg x="${o / 2 - e / 2}" y="${a / 2 - t / 2}" width="${e}" height="${t}" viewBox="0 0 100 100" preserveAspectRatio="xMinYMin meet">`,
                C += this.options.image.svg + i,
                C += "</svg>"
            }
            var I = "";
            switch (e.container) {
            case "svg":
                f && (I += '<?xml version="1.0" standalone="yes"?>' + i),
                I += '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="' + o + '" height="' + a + '">' + i,
                I += g + m + _,
                I += C,
                I += "</svg>";
                break;
            case "svg-viewbox":
                f && (I += '<?xml version="1.0" standalone="yes"?>' + i),
                I += '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 ' + o + " " + a + '">' + i,
                I += g + m + _,
                I += C,
                I += "</svg>";
                break;
            case "g":
                I += '<g width="' + o + '" height="' + a + '">' + i,
                I += g + m + _,
                I += C,
                I += "</g>";
                break;
            default:
                I += (g + m + _ + C).replace(/^\s+/, "")
            }
            return I
        }
        ,
        e.exports = k
    },
    76570: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.LIB_VERSION = void 0,
        t.LIB_VERSION = "3.9.1"
    },
    35247: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        const n = r(47324);
        function s(e, t, r) {
            try {
                Reflect.apply(e, t, r)
            } catch (n) {
                setTimeout((()=>{
                    throw n
                }
                ))
            }
        }
        class i extends n.EventEmitter {
            emit(e, ...t) {
                let r = "error" === e;
                const n = this._events;
                if (void 0 !== n)
                    r = r && void 0 === n.error;
                else if (!r)
                    return !1;
                if (r) {
                    let e;
                    if (t.length > 0 && ([e] = t),
                    e instanceof Error)
                        throw e;
                    const r = new Error("Unhandled error." + (e ? ` (${e.message})` : ""));
                    throw r.context = e,
                    r
                }
                const i = n[e];
                if (void 0 === i)
                    return !1;
                if ("function" === typeof i)
                    s(i, this, t);
                else {
                    const e = i.length
                      , r = function(e) {
                        const t = e.length
                          , r = new Array(t);
                        for (let n = 0; n < t; n += 1)
                            r[n] = e[n];
                        return r
                    }(i);
                    for (let n = 0; n < e; n += 1)
                        s(r[n], this, t)
                }
                return !0
            }
        }
        t.default = i
    },
    33156: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        const n = r(47324);
        function s(e, t, r) {
            try {
                Reflect.apply(e, t, r)
            } catch (n) {
                setTimeout((()=>{
                    throw n
                }
                ))
            }
        }
        class i extends n.EventEmitter {
            emit(e, ...t) {
                let r = "error" === e;
                const n = this._events;
                if (void 0 !== n)
                    r = r && void 0 === n.error;
                else if (!r)
                    return !1;
                if (r) {
                    let e;
                    if (t.length > 0 && ([e] = t),
                    e instanceof Error)
                        throw e;
                    const r = new Error("Unhandled error." + (e ? ` (${e.message})` : ""));
                    throw r.context = e,
                    r
                }
                const i = n[e];
                if (void 0 === i)
                    return !1;
                if ("function" === typeof i)
                    s(i, this, t);
                else {
                    const e = i.length
                      , r = function(e) {
                        const t = e.length
                          , r = new Array(t);
                        for (let n = 0; n < t; n += 1)
                            r[n] = e[n];
                        return r
                    }(i);
                    for (let n = 0; n < e; n += 1)
                        s(r[n], this, t)
                }
                return !0
            }
        }
        t.default = i
    },
    80987: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.assertExhaustive = t.assertStruct = t.assert = t.AssertionError = void 0;
        const n = r(78341);
        function s(e, t) {
            return function(e) {
                var t, r;
                return Boolean("string" === typeof (null === (r = null === (t = null === e || void 0 === e ? void 0 : e.prototype) || void 0 === t ? void 0 : t.constructor) || void 0 === r ? void 0 : r.name))
            }(e) ? new e({
                message: t
            }) : e({
                message: t
            })
        }
        class i extends Error {
            constructor(e) {
                super(e.message),
                this.code = "ERR_ASSERTION"
            }
        }
        t.AssertionError = i,
        t.assert = function(e, t="Assertion failed.", r=i) {
            if (!e) {
                if (t instanceof Error)
                    throw t;
                throw s(r, t)
            }
        }
        ,
        t.assertStruct = function(e, t, r="Assertion failed", o=i) {
            try {
                (0,
                n.assert)(e, t)
            } catch (a) {
                throw s(o, `${r}: ${function(e) {
                    const t = function(e) {
                        return "object" === typeof e && null !== e && "message"in e
                    }(e) ? e.message : String(e);
                    return t.endsWith(".") ? t.slice(0, -1) : t
                }(a)}.`)
            }
        }
        ,
        t.assertExhaustive = function(e) {
            throw new Error("Invalid branch reached. Should be detected during compilation.")
        }
    },
    9792: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.base64 = void 0;
        const n = r(78341)
          , s = r(80987);
        t.base64 = (e,t={})=>{
            var r, i;
            const o = null !== (r = t.paddingRequired) && void 0 !== r && r
              , a = null !== (i = t.characterSet) && void 0 !== i ? i : "base64";
            let c, l;
            return "base64" === a ? c = String.raw`[A-Za-z0-9+\/]` : ((0,
            s.assert)("base64url" === a),
            c = String.raw`[-_A-Za-z0-9]`),
            l = o ? new RegExp(`^(?:${c}{4})*(?:${c}{3}=|${c}{2}==)?$`,"u") : new RegExp(`^(?:${c}{4})*(?:${c}{2,3}|${c}{3}=|${c}{2}==)?$`,"u"),
            (0,
            n.pattern)(e, l)
        }
    },
    98866: function(e, t, r) {
        "use strict";
        var n = r(15313).Buffer;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.createDataView = t.concatBytes = t.valueToBytes = t.stringToBytes = t.numberToBytes = t.signedBigIntToBytes = t.bigIntToBytes = t.hexToBytes = t.bytesToString = t.bytesToNumber = t.bytesToSignedBigInt = t.bytesToBigInt = t.bytesToHex = t.assertIsBytes = t.isBytes = void 0;
        const s = r(80987)
          , i = r(29976)
          , o = 48
          , a = 58
          , c = 87;
        const l = function() {
            const e = [];
            return ()=>{
                if (0 === e.length)
                    for (let t = 0; t < 256; t++)
                        e.push(t.toString(16).padStart(2, "0"));
                return e
            }
        }();
        function u(e) {
            return e instanceof Uint8Array
        }
        function d(e) {
            (0,
            s.assert)(u(e), "Value must be a Uint8Array.")
        }
        function h(e) {
            if (d(e),
            0 === e.length)
                return "0x";
            const t = l()
              , r = new Array(e.length);
            for (let n = 0; n < e.length; n++)
                r[n] = t[e[n]];
            return (0,
            i.add0x)(r.join(""))
        }
        function f(e) {
            d(e);
            const t = h(e);
            return BigInt(t)
        }
        function p(e) {
            var t;
            if ("0x" === (null === (t = null === e || void 0 === e ? void 0 : e.toLowerCase) || void 0 === t ? void 0 : t.call(e)))
                return new Uint8Array;
            (0,
            i.assertIsHexString)(e);
            const r = (0,
            i.remove0x)(e).toLowerCase()
              , n = r.length % 2 === 0 ? r : `0${r}`
              , s = new Uint8Array(n.length / 2);
            for (let i = 0; i < s.length; i++) {
                const e = n.charCodeAt(2 * i)
                  , t = n.charCodeAt(2 * i + 1)
                  , r = e - (e < a ? o : c)
                  , l = t - (t < a ? o : c);
                s[i] = 16 * r + l
            }
            return s
        }
        function g(e) {
            (0,
            s.assert)("bigint" === typeof e, "Value must be a bigint."),
            (0,
            s.assert)(e >= BigInt(0), "Value must be a non-negative bigint.");
            return p(e.toString(16))
        }
        function m(e) {
            (0,
            s.assert)("number" === typeof e, "Value must be a number."),
            (0,
            s.assert)(e >= 0, "Value must be a non-negative number."),
            (0,
            s.assert)(Number.isSafeInteger(e), "Value is not a safe integer. Use `bigIntToBytes` instead.");
            return p(e.toString(16))
        }
        function _(e) {
            return (0,
            s.assert)("string" === typeof e, "Value must be a string."),
            (new TextEncoder).encode(e)
        }
        function b(e) {
            if ("bigint" === typeof e)
                return g(e);
            if ("number" === typeof e)
                return m(e);
            if ("string" === typeof e)
                return e.startsWith("0x") ? p(e) : _(e);
            if (u(e))
                return e;
            throw new TypeError(`Unsupported value type: "${typeof e}".`)
        }
        t.isBytes = u,
        t.assertIsBytes = d,
        t.bytesToHex = h,
        t.bytesToBigInt = f,
        t.bytesToSignedBigInt = function(e) {
            d(e);
            let t = BigInt(0);
            for (const r of e)
                t = (t << BigInt(8)) + BigInt(r);
            return BigInt.asIntN(8 * e.length, t)
        }
        ,
        t.bytesToNumber = function(e) {
            d(e);
            const t = f(e);
            return (0,
            s.assert)(t <= BigInt(Number.MAX_SAFE_INTEGER), "Number is not a safe integer. Use `bytesToBigInt` instead."),
            Number(t)
        }
        ,
        t.bytesToString = function(e) {
            return d(e),
            (new TextDecoder).decode(e)
        }
        ,
        t.hexToBytes = p,
        t.bigIntToBytes = g,
        t.signedBigIntToBytes = function(e, t) {
            (0,
            s.assert)("bigint" === typeof e, "Value must be a bigint."),
            (0,
            s.assert)("number" === typeof t, "Byte length must be a number."),
            (0,
            s.assert)(t > 0, "Byte length must be greater than 0."),
            (0,
            s.assert)(function(e, t) {
                (0,
                s.assert)(t > 0);
                const r = e >> BigInt(31);
                return !((~e & r) + (e & ~r) >> BigInt(8 * t - 1))
            }(e, t), "Byte length is too small to represent the given value.");
            let r = e;
            const n = new Uint8Array(t);
            for (let s = 0; s < n.length; s++)
                n[s] = Number(BigInt.asUintN(8, r)),
                r >>= BigInt(8);
            return n.reverse()
        }
        ,
        t.numberToBytes = m,
        t.stringToBytes = _,
        t.valueToBytes = b,
        t.concatBytes = function(e) {
            const t = new Array(e.length);
            let r = 0;
            for (let s = 0; s < e.length; s++) {
                const n = b(e[s]);
                t[s] = n,
                r += n.length
            }
            const n = new Uint8Array(r);
            for (let s = 0, i = 0; s < t.length; s++)
                n.set(t[s], i),
                i += t[s].length;
            return n
        }
        ,
        t.createDataView = function(e) {
            if ("undefined" !== typeof n && e instanceof n) {
                const t = e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength);
                return new DataView(t)
            }
            return new DataView(e.buffer,e.byteOffset,e.byteLength)
        }
    },
    54017: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.ChecksumStruct = void 0;
        const n = r(78341)
          , s = r(9792);
        t.ChecksumStruct = (0,
        n.size)((0,
        s.base64)((0,
        n.string)(), {
            paddingRequired: !0
        }), 44, 44)
    },
    13265: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.createHex = t.createBytes = t.createBigInt = t.createNumber = void 0;
        const n = r(78341)
          , s = r(80987)
          , i = r(98866)
          , o = r(29976)
          , a = (0,
        n.union)([(0,
        n.number)(), (0,
        n.bigint)(), (0,
        n.string)(), o.StrictHexStruct])
          , c = (0,
        n.coerce)((0,
        n.number)(), a, Number)
          , l = (0,
        n.coerce)((0,
        n.bigint)(), a, BigInt)
          , u = ((0,
        n.union)([o.StrictHexStruct, (0,
        n.instance)(Uint8Array)]),
        (0,
        n.coerce)((0,
        n.instance)(Uint8Array), (0,
        n.union)([o.StrictHexStruct]), i.hexToBytes))
          , d = (0,
        n.coerce)(o.StrictHexStruct, (0,
        n.instance)(Uint8Array), i.bytesToHex);
        t.createNumber = function(e) {
            try {
                const t = (0,
                n.create)(e, c);
                return (0,
                s.assert)(Number.isFinite(t), `Expected a number-like value, got "${e}".`),
                t
            } catch (t) {
                if (t instanceof n.StructError)
                    throw new Error(`Expected a number-like value, got "${e}".`);
                throw t
            }
        }
        ,
        t.createBigInt = function(e) {
            try {
                return (0,
                n.create)(e, l)
            } catch (t) {
                if (t instanceof n.StructError)
                    throw new Error(`Expected a number-like value, got "${String(t.value)}".`);
                throw t
            }
        }
        ,
        t.createBytes = function(e) {
            if ("string" === typeof e && "0x" === e.toLowerCase())
                return new Uint8Array;
            try {
                return (0,
                n.create)(e, u)
            } catch (t) {
                if (t instanceof n.StructError)
                    throw new Error(`Expected a bytes-like value, got "${String(t.value)}".`);
                throw t
            }
        }
        ,
        t.createHex = function(e) {
            if (e instanceof Uint8Array && 0 === e.length || "string" === typeof e && "0x" === e.toLowerCase())
                return "0x";
            try {
                return (0,
                n.create)(e, d)
            } catch (t) {
                if (t instanceof n.StructError)
                    throw new Error(`Expected a bytes-like value, got "${String(t.value)}".`);
                throw t
            }
        }
    },
    85692: function(e, t) {
        "use strict";
        var r, n, s = this && this.__classPrivateFieldSet || function(e, t, r, n, s) {
            if ("m" === n)
                throw new TypeError("Private method is not writable");
            if ("a" === n && !s)
                throw new TypeError("Private accessor was defined without a setter");
            if ("function" === typeof t ? e !== t || !s : !t.has(e))
                throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return "a" === n ? s.call(e, r) : s ? s.value = r : t.set(e, r),
            r
        }
        , i = this && this.__classPrivateFieldGet || function(e, t, r, n) {
            if ("a" === r && !n)
                throw new TypeError("Private accessor was defined without a getter");
            if ("function" === typeof t ? e !== t || !n : !t.has(e))
                throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.FrozenSet = t.FrozenMap = void 0;
        class o {
            constructor(e) {
                r.set(this, void 0),
                s(this, r, new Map(e), "f"),
                Object.freeze(this)
            }
            get size() {
                return i(this, r, "f").size
            }
            [(r = new WeakMap,
            Symbol.iterator)]() {
                return i(this, r, "f")[Symbol.iterator]()
            }
            entries() {
                return i(this, r, "f").entries()
            }
            forEach(e, t) {
                return i(this, r, "f").forEach(((r,n,s)=>e.call(t, r, n, this)))
            }
            get(e) {
                return i(this, r, "f").get(e)
            }
            has(e) {
                return i(this, r, "f").has(e)
            }
            keys() {
                return i(this, r, "f").keys()
            }
            values() {
                return i(this, r, "f").values()
            }
            toString() {
                return `FrozenMap(${this.size}) {${this.size > 0 ? ` ${[...this.entries()].map((([e,t])=>`${String(e)} => ${String(t)}`)).join(", ")} ` : ""}}`
            }
        }
        t.FrozenMap = o;
        class a {
            constructor(e) {
                n.set(this, void 0),
                s(this, n, new Set(e), "f"),
                Object.freeze(this)
            }
            get size() {
                return i(this, n, "f").size
            }
            [(n = new WeakMap,
            Symbol.iterator)]() {
                return i(this, n, "f")[Symbol.iterator]()
            }
            entries() {
                return i(this, n, "f").entries()
            }
            forEach(e, t) {
                return i(this, n, "f").forEach(((r,n,s)=>e.call(t, r, n, this)))
            }
            has(e) {
                return i(this, n, "f").has(e)
            }
            keys() {
                return i(this, n, "f").keys()
            }
            values() {
                return i(this, n, "f").values()
            }
            toString() {
                return `FrozenSet(${this.size}) {${this.size > 0 ? ` ${[...this.values()].map((e=>String(e))).join(", ")} ` : ""}}`
            }
        }
        t.FrozenSet = a,
        Object.freeze(o),
        Object.freeze(o.prototype),
        Object.freeze(a),
        Object.freeze(a.prototype)
    },
    36979: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    },
    29976: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.remove0x = t.add0x = t.assertIsStrictHexString = t.assertIsHexString = t.isStrictHexString = t.isHexString = t.StrictHexStruct = t.HexStruct = void 0;
        const n = r(78341)
          , s = r(80987);
        function i(e) {
            return (0,
            n.is)(e, t.HexStruct)
        }
        function o(e) {
            return (0,
            n.is)(e, t.StrictHexStruct)
        }
        t.HexStruct = (0,
        n.pattern)((0,
        n.string)(), /^(?:0x)?[0-9a-f]+$/iu),
        t.StrictHexStruct = (0,
        n.pattern)((0,
        n.string)(), /^0x[0-9a-f]+$/iu),
        t.isHexString = i,
        t.isStrictHexString = o,
        t.assertIsHexString = function(e) {
            (0,
            s.assert)(i(e), "Value must be a hexadecimal string.")
        }
        ,
        t.assertIsStrictHexString = function(e) {
            (0,
            s.assert)(o(e), 'Value must be a hexadecimal string, starting with "0x".')
        }
        ,
        t.add0x = function(e) {
            return e.startsWith("0x") ? e : e.startsWith("0X") ? `0x${e.substring(2)}` : `0x${e}`
        }
        ,
        t.remove0x = function(e) {
            return e.startsWith("0x") || e.startsWith("0X") ? e.substring(2) : e
        }
    },
    33476: function(e, t, r) {
        "use strict";
        var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
            void 0 === n && (n = r);
            var s = Object.getOwnPropertyDescriptor(t, r);
            s && !("get"in s ? !t.__esModule : s.writable || s.configurable) || (s = {
                enumerable: !0,
                get: function() {
                    return t[r]
                }
            }),
            Object.defineProperty(e, n, s)
        }
        : function(e, t, r, n) {
            void 0 === n && (n = r),
            e[n] = t[r]
        }
        )
          , s = this && this.__exportStar || function(e, t) {
            for (var r in e)
                "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r)
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        s(r(80987), t),
        s(r(9792), t),
        s(r(98866), t),
        s(r(54017), t),
        s(r(13265), t),
        s(r(85692), t),
        s(r(36979), t),
        s(r(29976), t),
        s(r(20767), t),
        s(r(98467), t),
        s(r(6633), t),
        s(r(24020), t),
        s(r(40670), t),
        s(r(94206), t),
        s(r(107), t),
        s(r(58290), t),
        s(r(95495), t)
    },
    20767: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.getJsonRpcIdValidator = t.assertIsJsonRpcError = t.isJsonRpcError = t.assertIsJsonRpcFailure = t.isJsonRpcFailure = t.assertIsJsonRpcSuccess = t.isJsonRpcSuccess = t.assertIsJsonRpcResponse = t.isJsonRpcResponse = t.assertIsPendingJsonRpcResponse = t.isPendingJsonRpcResponse = t.JsonRpcResponseStruct = t.JsonRpcFailureStruct = t.JsonRpcSuccessStruct = t.PendingJsonRpcResponseStruct = t.assertIsJsonRpcRequest = t.isJsonRpcRequest = t.assertIsJsonRpcNotification = t.isJsonRpcNotification = t.JsonRpcNotificationStruct = t.JsonRpcRequestStruct = t.JsonRpcParamsStruct = t.JsonRpcErrorStruct = t.JsonRpcIdStruct = t.JsonRpcVersionStruct = t.jsonrpc2 = t.getJsonSize = t.isValidJson = t.JsonStruct = t.UnsafeJsonStruct = void 0;
        const n = r(78341)
          , s = r(80987);
        t.UnsafeJsonStruct = (0,
        n.union)([(0,
        n.literal)(null), (0,
        n.boolean)(), (0,
        n.define)("finite number", (e=>(0,
        n.is)(e, (0,
        n.number)()) && Number.isFinite(e))), (0,
        n.string)(), (0,
        n.array)((0,
        n.lazy)((()=>t.UnsafeJsonStruct))), (0,
        n.record)((0,
        n.string)(), (0,
        n.lazy)((()=>t.UnsafeJsonStruct)))]),
        t.JsonStruct = (0,
        n.define)("Json", ((e,r)=>{
            function n(e, t) {
                const n = [...t.validator(e, r)];
                return !(n.length > 0) || n
            }
            try {
                const r = n(e, t.UnsafeJsonStruct);
                return !0 !== r ? r : n(JSON.parse(JSON.stringify(e)), t.UnsafeJsonStruct)
            } catch (s) {
                return s instanceof RangeError && "Circular reference detected"
            }
        }
        )),
        t.isValidJson = function(e) {
            return (0,
            n.is)(e, t.JsonStruct)
        }
        ,
        t.getJsonSize = function(e) {
            (0,
            s.assertStruct)(e, t.JsonStruct, "Invalid JSON value");
            const r = JSON.stringify(e);
            return (new TextEncoder).encode(r).byteLength
        }
        ,
        t.jsonrpc2 = "2.0",
        t.JsonRpcVersionStruct = (0,
        n.literal)(t.jsonrpc2),
        t.JsonRpcIdStruct = (0,
        n.nullable)((0,
        n.union)([(0,
        n.number)(), (0,
        n.string)()])),
        t.JsonRpcErrorStruct = (0,
        n.object)({
            code: (0,
            n.integer)(),
            message: (0,
            n.string)(),
            data: (0,
            n.optional)(t.JsonStruct),
            stack: (0,
            n.optional)((0,
            n.string)())
        }),
        t.JsonRpcParamsStruct = (0,
        n.optional)((0,
        n.union)([(0,
        n.record)((0,
        n.string)(), t.JsonStruct), (0,
        n.array)(t.JsonStruct)])),
        t.JsonRpcRequestStruct = (0,
        n.object)({
            id: t.JsonRpcIdStruct,
            jsonrpc: t.JsonRpcVersionStruct,
            method: (0,
            n.string)(),
            params: t.JsonRpcParamsStruct
        }),
        t.JsonRpcNotificationStruct = (0,
        n.omit)(t.JsonRpcRequestStruct, ["id"]),
        t.isJsonRpcNotification = function(e) {
            return (0,
            n.is)(e, t.JsonRpcNotificationStruct)
        }
        ,
        t.assertIsJsonRpcNotification = function(e, r) {
            (0,
            s.assertStruct)(e, t.JsonRpcNotificationStruct, "Invalid JSON-RPC notification", r)
        }
        ,
        t.isJsonRpcRequest = function(e) {
            return (0,
            n.is)(e, t.JsonRpcRequestStruct)
        }
        ,
        t.assertIsJsonRpcRequest = function(e, r) {
            (0,
            s.assertStruct)(e, t.JsonRpcRequestStruct, "Invalid JSON-RPC request", r)
        }
        ,
        t.PendingJsonRpcResponseStruct = (0,
        n.object)({
            id: t.JsonRpcIdStruct,
            jsonrpc: t.JsonRpcVersionStruct,
            result: (0,
            n.optional)((0,
            n.unknown)()),
            error: (0,
            n.optional)(t.JsonRpcErrorStruct)
        }),
        t.JsonRpcSuccessStruct = (0,
        n.object)({
            id: t.JsonRpcIdStruct,
            jsonrpc: t.JsonRpcVersionStruct,
            result: t.JsonStruct
        }),
        t.JsonRpcFailureStruct = (0,
        n.object)({
            id: t.JsonRpcIdStruct,
            jsonrpc: t.JsonRpcVersionStruct,
            error: t.JsonRpcErrorStruct
        }),
        t.JsonRpcResponseStruct = (0,
        n.union)([t.JsonRpcSuccessStruct, t.JsonRpcFailureStruct]),
        t.isPendingJsonRpcResponse = function(e) {
            return (0,
            n.is)(e, t.PendingJsonRpcResponseStruct)
        }
        ,
        t.assertIsPendingJsonRpcResponse = function(e, r) {
            (0,
            s.assertStruct)(e, t.PendingJsonRpcResponseStruct, "Invalid pending JSON-RPC response", r)
        }
        ,
        t.isJsonRpcResponse = function(e) {
            return (0,
            n.is)(e, t.JsonRpcResponseStruct)
        }
        ,
        t.assertIsJsonRpcResponse = function(e, r) {
            (0,
            s.assertStruct)(e, t.JsonRpcResponseStruct, "Invalid JSON-RPC response", r)
        }
        ,
        t.isJsonRpcSuccess = function(e) {
            return (0,
            n.is)(e, t.JsonRpcSuccessStruct)
        }
        ,
        t.assertIsJsonRpcSuccess = function(e, r) {
            (0,
            s.assertStruct)(e, t.JsonRpcSuccessStruct, "Invalid JSON-RPC success response", r)
        }
        ,
        t.isJsonRpcFailure = function(e) {
            return (0,
            n.is)(e, t.JsonRpcFailureStruct)
        }
        ,
        t.assertIsJsonRpcFailure = function(e, r) {
            (0,
            s.assertStruct)(e, t.JsonRpcFailureStruct, "Invalid JSON-RPC failure response", r)
        }
        ,
        t.isJsonRpcError = function(e) {
            return (0,
            n.is)(e, t.JsonRpcErrorStruct)
        }
        ,
        t.assertIsJsonRpcError = function(e, r) {
            (0,
            s.assertStruct)(e, t.JsonRpcErrorStruct, "Invalid JSON-RPC error", r)
        }
        ,
        t.getJsonRpcIdValidator = function(e) {
            const {permitEmptyString: t, permitFractions: r, permitNull: n} = Object.assign({
                permitEmptyString: !0,
                permitFractions: !1,
                permitNull: !0
            }, e);
            return e=>Boolean("number" === typeof e && (r || Number.isInteger(e)) || "string" === typeof e && (t || e.length > 0) || n && null === e)
        }
    },
    98467: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    },
    6633: function(e, t, r) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.createModuleLogger = t.createProjectLogger = void 0;
        const s = (0,
        n(r(65705)).default)("metamask");
        t.createProjectLogger = function(e) {
            return s.extend(e)
        }
        ,
        t.createModuleLogger = function(e, t) {
            return e.extend(t)
        }
    },
    24020: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.calculateNumberSize = t.calculateStringSize = t.isASCII = t.isPlainObject = t.ESCAPE_CHARACTERS_REGEXP = t.JsonSize = t.hasProperty = t.isObject = t.isNullOrUndefined = t.isNonEmptyArray = void 0,
        t.isNonEmptyArray = function(e) {
            return Array.isArray(e) && e.length > 0
        }
        ,
        t.isNullOrUndefined = function(e) {
            return null === e || void 0 === e
        }
        ,
        t.isObject = function(e) {
            return Boolean(e) && "object" === typeof e && !Array.isArray(e)
        }
        ;
        function r(e) {
            return e.charCodeAt(0) <= 127
        }
        t.hasProperty = (e,t)=>Object.hasOwnProperty.call(e, t),
        function(e) {
            e[e.Null = 4] = "Null",
            e[e.Comma = 1] = "Comma",
            e[e.Wrapper = 1] = "Wrapper",
            e[e.True = 4] = "True",
            e[e.False = 5] = "False",
            e[e.Quote = 1] = "Quote",
            e[e.Colon = 1] = "Colon",
            e[e.Date = 24] = "Date"
        }(t.JsonSize || (t.JsonSize = {})),
        t.ESCAPE_CHARACTERS_REGEXP = /"|\\|\n|\r|\t/gu,
        t.isPlainObject = function(e) {
            if ("object" !== typeof e || null === e)
                return !1;
            try {
                let t = e;
                for (; null !== Object.getPrototypeOf(t); )
                    t = Object.getPrototypeOf(t);
                return Object.getPrototypeOf(e) === t
            } catch (t) {
                return !1
            }
        }
        ,
        t.isASCII = r,
        t.calculateStringSize = function(e) {
            var n;
            return e.split("").reduce(((e,t)=>r(t) ? e + 1 : e + 2), 0) + (null !== (n = e.match(t.ESCAPE_CHARACTERS_REGEXP)) && void 0 !== n ? n : []).length
        }
        ,
        t.calculateNumberSize = function(e) {
            return e.toString().length
        }
    },
    40670: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.hexToBigInt = t.hexToNumber = t.bigIntToHex = t.numberToHex = void 0;
        const n = r(80987)
          , s = r(29976);
        t.numberToHex = e=>((0,
        n.assert)("number" === typeof e, "Value must be a number."),
        (0,
        n.assert)(e >= 0, "Value must be a non-negative number."),
        (0,
        n.assert)(Number.isSafeInteger(e), "Value is not a safe integer. Use `bigIntToHex` instead."),
        (0,
        s.add0x)(e.toString(16)));
        t.bigIntToHex = e=>((0,
        n.assert)("bigint" === typeof e, "Value must be a bigint."),
        (0,
        n.assert)(e >= 0, "Value must be a non-negative bigint."),
        (0,
        s.add0x)(e.toString(16)));
        t.hexToNumber = e=>{
            (0,
            s.assertIsHexString)(e);
            const t = parseInt(e, 16);
            return (0,
            n.assert)(Number.isSafeInteger(t), "Value is not a safe integer. Use `hexToBigInt` instead."),
            t
        }
        ;
        t.hexToBigInt = e=>((0,
        s.assertIsHexString)(e),
        BigInt((0,
        s.add0x)(e)))
    },
    94206: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    },
    107: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.timeSince = t.inMilliseconds = t.Duration = void 0,
        function(e) {
            e[e.Millisecond = 1] = "Millisecond",
            e[e.Second = 1e3] = "Second",
            e[e.Minute = 6e4] = "Minute",
            e[e.Hour = 36e5] = "Hour",
            e[e.Day = 864e5] = "Day",
            e[e.Week = 6048e5] = "Week",
            e[e.Year = 31536e6] = "Year"
        }(t.Duration || (t.Duration = {}));
        const r = (e,t)=>{
            if (!(e=>Number.isInteger(e) && e >= 0)(e))
                throw new Error(`"${t}" must be a non-negative integer. Received: "${e}".`)
        }
        ;
        t.inMilliseconds = function(e, t) {
            return r(e, "count"),
            e * t
        }
        ,
        t.timeSince = function(e) {
            return r(e, "timestamp"),
            Date.now() - e
        }
    },
    58290: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    },
    95495: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.satisfiesVersionRange = t.gtRange = t.gtVersion = t.assertIsSemVerRange = t.assertIsSemVerVersion = t.isValidSemVerRange = t.isValidSemVerVersion = t.VersionRangeStruct = t.VersionStruct = void 0;
        const n = r(50595)
          , s = r(78341)
          , i = r(80987);
        t.VersionStruct = (0,
        s.refine)((0,
        s.string)(), "Version", (e=>null !== (0,
        n.valid)(e) || `Expected SemVer version, got "${e}"`)),
        t.VersionRangeStruct = (0,
        s.refine)((0,
        s.string)(), "Version range", (e=>null !== (0,
        n.validRange)(e) || `Expected SemVer range, got "${e}"`)),
        t.isValidSemVerVersion = function(e) {
            return (0,
            s.is)(e, t.VersionStruct)
        }
        ,
        t.isValidSemVerRange = function(e) {
            return (0,
            s.is)(e, t.VersionRangeStruct)
        }
        ,
        t.assertIsSemVerVersion = function(e) {
            (0,
            i.assertStruct)(e, t.VersionStruct)
        }
        ,
        t.assertIsSemVerRange = function(e) {
            (0,
            i.assertStruct)(e, t.VersionRangeStruct)
        }
        ,
        t.gtVersion = function(e, t) {
            return (0,
            n.gt)(e, t)
        }
        ,
        t.gtRange = function(e, t) {
            return (0,
            n.gtr)(e, t)
        }
        ,
        t.satisfiesVersionRange = function(e, t) {
            return (0,
            n.satisfies)(e, t, {
                includePrerelease: !0
            })
        }
    },
    23616: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(43112)
          , s = r(4872)
          , i = function() {
            function e() {
                this._semaphore = new s.default(1)
            }
            return e.prototype.acquire = function() {
                return n.__awaiter(this, void 0, void 0, (function() {
                    var e;
                    return n.__generator(this, (function(t) {
                        switch (t.label) {
                        case 0:
                            return [4, this._semaphore.acquire()];
                        case 1:
                            return e = t.sent(),
                            [2, e[1]]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            e.prototype.runExclusive = function(e) {
                return this._semaphore.runExclusive((function() {
                    return e()
                }
                ))
            }
            ,
            e.prototype.isLocked = function() {
                return this._semaphore.isLocked()
            }
            ,
            e.prototype.release = function() {
                this._semaphore.release()
            }
            ,
            e
        }();
        t.default = i
    },
    4872: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(43112)
          , s = function() {
            function e(e) {
                if (this._maxConcurrency = e,
                this._queue = [],
                e <= 0)
                    throw new Error("semaphore must be initialized to a positive value");
                this._value = e
            }
            return e.prototype.acquire = function() {
                var e = this
                  , t = this.isLocked()
                  , r = new Promise((function(t) {
                    return e._queue.push(t)
                }
                ));
                return t || this._dispatch(),
                r
            }
            ,
            e.prototype.runExclusive = function(e) {
                return n.__awaiter(this, void 0, void 0, (function() {
                    var t, r, s;
                    return n.__generator(this, (function(n) {
                        switch (n.label) {
                        case 0:
                            return [4, this.acquire()];
                        case 1:
                            t = n.sent(),
                            r = t[0],
                            s = t[1],
                            n.label = 2;
                        case 2:
                            return n.trys.push([2, , 4, 5]),
                            [4, e(r)];
                        case 3:
                            return [2, n.sent()];
                        case 4:
                            return s(),
                            [7];
                        case 5:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            e.prototype.isLocked = function() {
                return this._value <= 0
            }
            ,
            e.prototype.release = function() {
                if (this._maxConcurrency > 1)
                    throw new Error("this method is unavailabel on semaphores with concurrency > 1; use the scoped release returned by acquire instead");
                if (this._currentReleaser) {
                    var e = this._currentReleaser;
                    this._currentReleaser = void 0,
                    e()
                }
            }
            ,
            e.prototype._dispatch = function() {
                var e = this
                  , t = this._queue.shift();
                if (t) {
                    var r = !1;
                    this._currentReleaser = function() {
                        r || (r = !0,
                        e._value++,
                        e._dispatch())
                    }
                    ,
                    t([this._value--, this._currentReleaser])
                }
            }
            ,
            e
        }();
        t.default = s
    },
    11710: function(e, t, r) {
        "use strict";
        t.WU = void 0;
        var n = r(23616);
        Object.defineProperty(t, "WU", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        });
        var s = r(4872);
        var i = r(90061)
    },
    90061: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.withTimeout = void 0;
        var n = r(43112);
        t.withTimeout = function(e, t, r) {
            var s = this;
            return void 0 === r && (r = new Error("timeout")),
            {
                acquire: function() {
                    return new Promise((function(i, o) {
                        return n.__awaiter(s, void 0, void 0, (function() {
                            var s, a;
                            return n.__generator(this, (function(n) {
                                switch (n.label) {
                                case 0:
                                    return s = !1,
                                    setTimeout((function() {
                                        s = !0,
                                        o(r)
                                    }
                                    ), t),
                                    [4, e.acquire()];
                                case 1:
                                    return a = n.sent(),
                                    s ? (Array.isArray(a) ? a[1] : a)() : i(a),
                                    [2]
                                }
                            }
                            ))
                        }
                        ))
                    }
                    ))
                },
                runExclusive: function(e) {
                    return n.__awaiter(this, void 0, void 0, (function() {
                        var t, r;
                        return n.__generator(this, (function(n) {
                            switch (n.label) {
                            case 0:
                                t = function() {}
                                ,
                                n.label = 1;
                            case 1:
                                return n.trys.push([1, , 7, 8]),
                                [4, this.acquire()];
                            case 2:
                                return r = n.sent(),
                                Array.isArray(r) ? (t = r[1],
                                [4, e(r[0])]) : [3, 4];
                            case 3:
                                return [2, n.sent()];
                            case 4:
                                return t = r,
                                [4, e()];
                            case 5:
                                return [2, n.sent()];
                            case 6:
                                return [3, 8];
                            case 7:
                                return t(),
                                [7];
                            case 8:
                                return [2]
                            }
                        }
                        ))
                    }
                    ))
                },
                release: function() {
                    e.release()
                },
                isLocked: function() {
                    return e.isLocked()
                }
            }
        }
    },
    36865: function(e, t, r) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.BaseBlockTracker = void 0;
        const s = n(r(33156))
          , i = (e,t)=>e + t
          , o = ["sync", "latest"];
        class a extends s.default {
            constructor(e) {
                super(),
                this._blockResetDuration = e.blockResetDuration || 2e4,
                this._usePastBlocks = e.usePastBlocks || !1,
                this._currentBlock = null,
                this._isRunning = !1,
                this._onNewListener = this._onNewListener.bind(this),
                this._onRemoveListener = this._onRemoveListener.bind(this),
                this._resetCurrentBlock = this._resetCurrentBlock.bind(this),
                this._setupInternalEvents()
            }
            async destroy() {
                this._cancelBlockResetTimeout(),
                await this._maybeEnd(),
                super.removeAllListeners()
            }
            isRunning() {
                return this._isRunning
            }
            getCurrentBlock() {
                return this._currentBlock
            }
            async getLatestBlock() {
                if (this._currentBlock)
                    return this._currentBlock;
                return await new Promise((e=>this.once("latest", e)))
            }
            removeAllListeners(e) {
                return e ? super.removeAllListeners(e) : super.removeAllListeners(),
                this._setupInternalEvents(),
                this._onRemoveListener(),
                this
            }
            _setupInternalEvents() {
                this.removeListener("newListener", this._onNewListener),
                this.removeListener("removeListener", this._onRemoveListener),
                this.on("newListener", this._onNewListener),
                this.on("removeListener", this._onRemoveListener)
            }
            _onNewListener(e) {
                o.includes(e) && this._maybeStart()
            }
            _onRemoveListener() {
                this._getBlockTrackerEventCount() > 0 || this._maybeEnd()
            }
            async _maybeStart() {
                this._isRunning || (this._isRunning = !0,
                this._cancelBlockResetTimeout(),
                await this._start(),
                this.emit("_started"))
            }
            async _maybeEnd() {
                this._isRunning && (this._isRunning = !1,
                this._setupBlockResetTimeout(),
                await this._end(),
                this.emit("_ended"))
            }
            _getBlockTrackerEventCount() {
                return o.map((e=>this.listenerCount(e))).reduce(i)
            }
            _shouldUseNewBlock(e) {
                const t = this._currentBlock;
                if (!t)
                    return !0;
                const r = c(e)
                  , n = c(t);
                return this._usePastBlocks && r < n || r > n
            }
            _newPotentialLatest(e) {
                this._shouldUseNewBlock(e) && this._setCurrentBlock(e)
            }
            _setCurrentBlock(e) {
                const t = this._currentBlock;
                this._currentBlock = e,
                this.emit("latest", e),
                this.emit("sync", {
                    oldBlock: t,
                    newBlock: e
                })
            }
            _setupBlockResetTimeout() {
                this._cancelBlockResetTimeout(),
                this._blockResetTimeout = setTimeout(this._resetCurrentBlock, this._blockResetDuration),
                this._blockResetTimeout.unref && this._blockResetTimeout.unref()
            }
            _cancelBlockResetTimeout() {
                this._blockResetTimeout && clearTimeout(this._blockResetTimeout)
            }
            _resetCurrentBlock() {
                this._currentBlock = null
            }
        }
        function c(e) {
            return Number.parseInt(e, 16)
        }
        t.BaseBlockTracker = a
    },
    67680: function(e, t, r) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.PollingBlockTracker = void 0;
        const s = n(r(85350))
          , i = n(r(30115))
          , o = r(36865)
          , a = r(12398)
          , c = (0,
        a.createModuleLogger)(a.projectLogger, "polling-block-tracker")
          , l = (0,
        s.default)();
        class u extends o.BaseBlockTracker {
            constructor(e={}) {
                var t;
                if (!e.provider)
                    throw new Error("PollingBlockTracker - no provider specified.");
                super(Object.assign(Object.assign({}, e), {
                    blockResetDuration: null !== (t = e.blockResetDuration) && void 0 !== t ? t : e.pollingInterval
                })),
                this._provider = e.provider,
                this._pollingInterval = e.pollingInterval || 2e4,
                this._retryTimeout = e.retryTimeout || this._pollingInterval / 10,
                this._keepEventLoopActive = void 0 === e.keepEventLoopActive || e.keepEventLoopActive,
                this._setSkipCacheFlag = e.setSkipCacheFlag || !1
            }
            async checkForLatestBlock() {
                return await this._updateLatestBlock(),
                await this.getLatestBlock()
            }
            async _start() {
                this._synchronize()
            }
            async _end() {}
            async _synchronize() {
                for (var e; this._isRunning; )
                    try {
                        await this._updateLatestBlock();
                        const e = d(this._pollingInterval, !this._keepEventLoopActive);
                        this.emit("_waitingForNextIteration"),
                        await e
                    } catch (t) {
                        const n = new Error(`PollingBlockTracker - encountered an error while attempting to update latest block:\n${null !== (e = t.stack) && void 0 !== e ? e : t}`);
                        try {
                            this.emit("error", n)
                        } catch (r) {
                            console.error(n)
                        }
                        const s = d(this._retryTimeout, !this._keepEventLoopActive);
                        this.emit("_waitingForNextIteration"),
                        await s
                    }
            }
            async _updateLatestBlock() {
                const e = await this._fetchLatestBlock();
                this._newPotentialLatest(e)
            }
            async _fetchLatestBlock() {
                const e = {
                    jsonrpc: "2.0",
                    id: l(),
                    method: "eth_blockNumber",
                    params: []
                };
                this._setSkipCacheFlag && (e.skipCache = !0),
                c("Making request", e);
                const t = await (0,
                i.default)((t=>this._provider.sendAsync(e, t)))();
                if (c("Got response", t),
                t.error)
                    throw new Error(`PollingBlockTracker - encountered error fetching block:\n${t.error.message}`);
                return t.result
            }
        }
        function d(e, t) {
            return new Promise((r=>{
                const n = setTimeout(r, e);
                n.unref && t && n.unref()
            }
            ))
        }
        t.PollingBlockTracker = u
    },
    66090: function(e, t, r) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.SubscribeBlockTracker = void 0;
        const s = n(r(85350))
          , i = r(36865)
          , o = (0,
        s.default)();
        class a extends i.BaseBlockTracker {
            constructor(e={}) {
                if (!e.provider)
                    throw new Error("SubscribeBlockTracker - no provider specified.");
                super(e),
                this._provider = e.provider,
                this._subscriptionId = null
            }
            async checkForLatestBlock() {
                return await this.getLatestBlock()
            }
            async _start() {
                if (void 0 === this._subscriptionId || null === this._subscriptionId)
                    try {
                        const e = await this._call("eth_blockNumber");
                        this._subscriptionId = await this._call("eth_subscribe", "newHeads"),
                        this._provider.on("data", this._handleSubData.bind(this)),
                        this._newPotentialLatest(e)
                    } catch (e) {
                        this.emit("error", e)
                    }
            }
            async _end() {
                if (null !== this._subscriptionId && void 0 !== this._subscriptionId)
                    try {
                        await this._call("eth_unsubscribe", this._subscriptionId),
                        this._subscriptionId = null
                    } catch (e) {
                        this.emit("error", e)
                    }
            }
            _call(e, ...t) {
                return new Promise(((r,n)=>{
                    this._provider.sendAsync({
                        id: o(),
                        method: e,
                        params: t,
                        jsonrpc: "2.0"
                    }, ((e,t)=>{
                        e ? n(e) : r(t.result)
                    }
                    ))
                }
                ))
            }
            _handleSubData(e, t) {
                var r;
                "eth_subscription" === t.method && (null === (r = t.params) || void 0 === r ? void 0 : r.subscription) === this._subscriptionId && this._newPotentialLatest(t.params.result.number)
            }
        }
        t.SubscribeBlockTracker = a
    },
    6381: function(e, t, r) {
        "use strict";
        var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
            void 0 === n && (n = r),
            Object.defineProperty(e, n, {
                enumerable: !0,
                get: function() {
                    return t[r]
                }
            })
        }
        : function(e, t, r, n) {
            void 0 === n && (n = r),
            e[n] = t[r]
        }
        )
          , s = this && this.__exportStar || function(e, t) {
            for (var r in e)
                "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r)
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        s(r(67680), t),
        s(r(66090), t)
    },
    12398: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.createModuleLogger = t.projectLogger = void 0;
        const n = r(33476);
        Object.defineProperty(t, "createModuleLogger", {
            enumerable: !0,
            get: function() {
                return n.createModuleLogger
            }
        }),
        t.projectLogger = (0,
        n.createProjectLogger)("eth-block-tracker")
    },
    79519: function(e, t, r) {
        const n = r(48468);
        e.exports = class extends n {
            constructor() {
                super(),
                this.allResults = []
            }
            async update() {
                throw new Error("BaseFilterWithHistory - no update method specified")
            }
            addResults(e) {
                this.allResults = this.allResults.concat(e),
                super.addResults(e)
            }
            addInitialResults(e) {
                this.allResults = this.allResults.concat(e),
                super.addInitialResults(e)
            }
            getAllResults() {
                return this.allResults
            }
        }
    },
    48468: function(e, t, r) {
        const n = r(33156).default;
        e.exports = class extends n {
            constructor() {
                super(),
                this.updates = []
            }
            async initialize() {}
            async update() {
                throw new Error("BaseFilter - no update method specified")
            }
            addResults(e) {
                this.updates = this.updates.concat(e),
                e.forEach((e=>this.emit("update", e)))
            }
            addInitialResults(e) {}
            getChangesAndClear() {
                const e = this.updates;
                return this.updates = [],
                e
            }
        }
    },
    39219: function(e, t, r) {
        const n = r(48468)
          , s = r(44650)
          , {incrementHexInt: i} = r(90265);
        e.exports = class extends n {
            constructor({provider: e, params: t}) {
                super(),
                this.type = "block",
                this.provider = e
            }
            async update({oldBlock: e, newBlock: t}) {
                const r = t
                  , n = i(e)
                  , o = (await s({
                    provider: this.provider,
                    fromBlock: n,
                    toBlock: r
                })).map((e=>e.hash));
                this.addResults(o)
            }
        }
    },
    44650: function(e) {
        function t(e) {
            return void 0 === e || null === e ? e : Number.parseInt(e, 16)
        }
        function r(e) {
            if (void 0 === e || null === e)
                return e;
            return "0x" + e.toString(16)
        }
        function n(e, t) {
            return new Promise(((r,n)=>{
                e.sendAsync(t, ((e,t)=>{
                    e ? n(e) : t.error ? n(t.error) : t.result ? r(t.result) : n(new Error("Result was empty"))
                }
                ))
            }
            ))
        }
        e.exports = async function({provider: e, fromBlock: s, toBlock: i}) {
            s || (s = i);
            const o = t(s)
              , a = t(i)
              , c = Array(a - o + 1).fill().map(((e,t)=>o + t)).map(r);
            let l = await Promise.all(c.map((t=>async function(e, t, r) {
                for (let i = 0; i < 3; i++)
                    try {
                        return await n(e, {
                            id: 1,
                            jsonrpc: "2.0",
                            method: t,
                            params: r
                        })
                    } catch (s) {
                        console.error(`provider.sendAsync failed: ${s.stack || s.message || s}`)
                    }
                return null
            }(e, "eth_getBlockByNumber", [t, !1]))));
            return l = l.filter((e=>null !== e)),
            l
        }
    },
    90265: function(e) {
        function t(e) {
            return e.sort(((e,t)=>"latest" === e || "earliest" === t ? 1 : "latest" === t || "earliest" === e ? -1 : r(e) - r(t)))
        }
        function r(e) {
            return void 0 === e || null === e ? e : Number.parseInt(e, 16)
        }
        function n(e) {
            if (void 0 === e || null === e)
                return e;
            let t = e.toString(16);
            return t.length % 2 && (t = "0" + t),
            "0x" + t
        }
        function s() {
            return Math.floor(16 * Math.random()).toString(16)
        }
        e.exports = {
            minBlockRef: function(...e) {
                return t(e)[0]
            },
            maxBlockRef: function(...e) {
                const r = t(e);
                return r[r.length - 1]
            },
            sortBlockRefs: t,
            bnToHex: function(e) {
                return "0x" + e.toString(16)
            },
            blockRefIsNumber: function(e) {
                return e && !["earliest", "latest", "pending"].includes(e)
            },
            hexToInt: r,
            incrementHexInt: function(e) {
                if (void 0 === e || null === e)
                    return e;
                return n(r(e) + 1)
            },
            intToHex: n,
            unsafeRandomBytes: function(e) {
                let t = "0x";
                for (let r = 0; r < e; r++)
                    t += s(),
                    t += s();
                return t
            }
        }
    },
    32115: function(e, t, r) {
        const n = r(11710).WU
          , {createAsyncMiddleware: s, createScaffoldMiddleware: i} = r(91743)
          , o = r(42584)
          , a = r(39219)
          , c = r(11081)
          , {intToHex: l, hexToInt: u} = r(90265);
        function d(e) {
            return h((async(...t)=>{
                const r = await e(...t);
                return l(r.id)
            }
            ))
        }
        function h(e) {
            return s((async(t,r)=>{
                const n = await e.apply(null, t.params);
                r.result = n
            }
            ))
        }
        function f(e, t) {
            const r = [];
            for (let n in e)
                r.push(e[n]);
            return r
        }
        e.exports = function({blockTracker: e, provider: t}) {
            let r = 0
              , s = {};
            const p = new n
              , g = function({mutex: e}) {
                return t=>async(r,n,s,i)=>{
                    (await e.acquire())(),
                    t(r, n, s, i)
                }
            }({
                mutex: p
            })
              , m = i({
                eth_newFilter: g(d(b)),
                eth_newBlockFilter: g(d(y)),
                eth_newPendingTransactionFilter: g(d(w)),
                eth_uninstallFilter: g(h(k)),
                eth_getFilterChanges: g(h(v)),
                eth_getFilterLogs: g(h(E))
            })
              , _ = async({oldBlock: e, newBlock: t})=>{
                if (0 === s.length)
                    return;
                const r = await p.acquire();
                try {
                    await Promise.all(f(s).map((async r=>{
                        try {
                            await r.update({
                                oldBlock: e,
                                newBlock: t
                            })
                        } catch (n) {
                            console.error(n)
                        }
                    }
                    )))
                } catch (n) {
                    console.error(n)
                }
                r()
            }
            ;
            return m.newLogFilter = b,
            m.newBlockFilter = y,
            m.newPendingTransactionFilter = w,
            m.uninstallFilter = k,
            m.getFilterChanges = v,
            m.getFilterLogs = E,
            m.destroy = ()=>{
                !async function() {
                    const e = f(s).length;
                    s = {},
                    R({
                        prevFilterCount: e,
                        newFilterCount: 0
                    })
                }()
            }
            ,
            m;
            async function b(e) {
                const r = new o({
                    provider: t,
                    params: e
                });
                await S(r);
                return r
            }
            async function y() {
                const e = new a({
                    provider: t
                });
                await S(e);
                return e
            }
            async function w() {
                const e = new c({
                    provider: t
                });
                await S(e);
                return e
            }
            async function v(e) {
                const t = u(e)
                  , r = s[t];
                if (!r)
                    throw new Error(`No filter for index "${t}"`);
                return r.getChangesAndClear()
            }
            async function E(e) {
                const t = u(e)
                  , r = s[t];
                if (!r)
                    throw new Error(`No filter for index "${t}"`);
                let n = [];
                return "log" === r.type && (n = r.getAllResults()),
                n
            }
            async function k(e) {
                const t = u(e)
                  , r = s[t]
                  , n = Boolean(r);
                return n && await async function(e) {
                    const t = f(s).length;
                    delete s[e];
                    const r = f(s).length;
                    R({
                        prevFilterCount: t,
                        newFilterCount: r
                    })
                }(t),
                n
            }
            async function S(t) {
                const n = f(s).length
                  , i = await e.getLatestBlock();
                await t.initialize({
                    currentBlock: i
                }),
                r++,
                s[r] = t,
                t.id = r,
                t.idHex = l(r);
                return R({
                    prevFilterCount: n,
                    newFilterCount: f(s).length
                }),
                r
            }
            function R({prevFilterCount: t, newFilterCount: r}) {
                0 === t && r > 0 ? e.on("sync", _) : t > 0 && 0 === r && e.removeListener("sync", _)
            }
        }
    },
    42584: function(e, t, r) {
        const n = r(25156)
          , s = r(51636)
          , i = r(79519)
          , {bnToHex: o, hexToInt: a, incrementHexInt: c, minBlockRef: l, blockRefIsNumber: u} = r(90265);
        e.exports = class extends i {
            constructor({provider: e, params: t}) {
                super(),
                this.type = "log",
                this.ethQuery = new n(e),
                this.params = Object.assign({
                    fromBlock: "latest",
                    toBlock: "latest",
                    address: void 0,
                    topics: []
                }, t),
                this.params.address && (Array.isArray(this.params.address) || (this.params.address = [this.params.address]),
                this.params.address = this.params.address.map((e=>e.toLowerCase())))
            }
            async initialize({currentBlock: e}) {
                let t = this.params.fromBlock;
                ["latest", "pending"].includes(t) && (t = e),
                "earliest" === t && (t = "0x0"),
                this.params.fromBlock = t;
                const r = l(this.params.toBlock, e)
                  , n = Object.assign({}, this.params, {
                    toBlock: r
                })
                  , s = await this._fetchLogs(n);
                this.addInitialResults(s)
            }
            async update({oldBlock: e, newBlock: t}) {
                const r = t;
                let n;
                n = e ? c(e) : t;
                const s = Object.assign({}, this.params, {
                    fromBlock: n,
                    toBlock: r
                })
                  , i = (await this._fetchLogs(s)).filter((e=>this.matchLog(e)));
                this.addResults(i)
            }
            async _fetchLogs(e) {
                return await s((t=>this.ethQuery.getLogs(e, t)))()
            }
            matchLog(e) {
                if (a(this.params.fromBlock) >= a(e.blockNumber))
                    return !1;
                if (u(this.params.toBlock) && a(this.params.toBlock) <= a(e.blockNumber))
                    return !1;
                const t = e.address && e.address.toLowerCase();
                if (this.params.address && t && !this.params.address.includes(t))
                    return !1;
                return this.params.topics.every(((t,r)=>{
                    let n = e.topics[r];
                    if (!n)
                        return !1;
                    n = n.toLowerCase();
                    let s = Array.isArray(t) ? t : [t];
                    if (s.includes(null))
                        return !0;
                    s = s.map((e=>e.toLowerCase()));
                    return s.includes(n)
                }
                ))
            }
        }
    },
    32354: function(e, t, r) {
        const n = r(33156).default
          , {createAsyncMiddleware: s, createScaffoldMiddleware: i} = r(91743)
          , o = r(32115)
          , {unsafeRandomBytes: a, incrementHexInt: c} = r(90265)
          , l = r(44650);
        function u(e) {
            return null === e || void 0 === e ? null : {
                hash: e.hash,
                parentHash: e.parentHash,
                sha3Uncles: e.sha3Uncles,
                miner: e.miner,
                stateRoot: e.stateRoot,
                transactionsRoot: e.transactionsRoot,
                receiptsRoot: e.receiptsRoot,
                logsBloom: e.logsBloom,
                difficulty: e.difficulty,
                number: e.number,
                gasLimit: e.gasLimit,
                gasUsed: e.gasUsed,
                nonce: e.nonce,
                mixHash: e.mixHash,
                timestamp: e.timestamp,
                extraData: e.extraData
            }
        }
        e.exports = function({blockTracker: e, provider: t}) {
            const r = {}
              , d = o({
                blockTracker: e,
                provider: t
            });
            let h = !1;
            const f = new n
              , p = i({
                eth_subscribe: s((async function(n, s) {
                    if (h)
                        throw new Error("SubscriptionManager - attempting to use after destroying");
                    const i = n.params[0]
                      , o = a(16);
                    let f;
                    switch (i) {
                    case "newHeads":
                        f = p({
                            subId: o
                        });
                        break;
                    case "logs":
                        const e = n.params[1];
                        f = m({
                            subId: o,
                            filter: await d.newLogFilter(e)
                        });
                        break;
                    default:
                        throw new Error(`SubscriptionManager - unsupported subscription type "${i}"`)
                    }
                    return r[o] = f,
                    void (s.result = o);
                    function p({subId: r}) {
                        const n = {
                            type: i,
                            destroy: async()=>{
                                e.removeListener("sync", n.update)
                            }
                            ,
                            update: async({oldBlock: e, newBlock: n})=>{
                                const s = n
                                  , i = c(e);
                                (await l({
                                    provider: t,
                                    fromBlock: i,
                                    toBlock: s
                                })).map(u).filter((e=>null !== e)).forEach((e=>{
                                    g(r, e)
                                }
                                ))
                            }
                        };
                        return e.on("sync", n.update),
                        n
                    }
                    function m({subId: e, filter: t}) {
                        t.on("update", (t=>g(e, t)));
                        return {
                            type: i,
                            destroy: async()=>await d.uninstallFilter(t.idHex)
                        }
                    }
                }
                )),
                eth_unsubscribe: s((async function(e, t) {
                    if (h)
                        throw new Error("SubscriptionManager - attempting to use after destroying");
                    const n = e.params[0]
                      , s = r[n];
                    if (!s)
                        return void (t.result = !1);
                    delete r[n],
                    await s.destroy(),
                    t.result = !0
                }
                ))
            });
            return p.destroy = function() {
                f.removeAllListeners();
                for (const e in r)
                    r[e].destroy(),
                    delete r[e];
                h = !0
            }
            ,
            {
                events: f,
                middleware: p
            };
            function g(e, t) {
                f.emit("notification", {
                    jsonrpc: "2.0",
                    method: "eth_subscription",
                    params: {
                        subscription: e,
                        result: t
                    }
                })
            }
        }
    },
    11081: function(e, t, r) {
        const n = r(48468)
          , s = r(44650)
          , {incrementHexInt: i} = r(90265);
        e.exports = class extends n {
            constructor({provider: e}) {
                super(),
                this.type = "tx",
                this.provider = e
            }
            async update({oldBlock: e}) {
                const t = e
                  , r = i(e)
                  , n = await s({
                    provider: this.provider,
                    fromBlock: r,
                    toBlock: t
                })
                  , o = [];
                for (const s of n)
                    o.push(...s.transactions);
                this.addResults(o)
            }
        }
    },
    25156: function(e, t, r) {
        const n = r(31693)
          , s = r(85350)();
        function i(e) {
            this.currentProvider = e
        }
        function o(e) {
            return function() {
                var t = [].slice.call(arguments)
                  , r = t.pop();
                this.sendAsync({
                    method: e,
                    params: t
                }, r)
            }
        }
        function a(e, t) {
            return function() {
                var r = [].slice.call(arguments)
                  , n = r.pop();
                r.length < e && r.push("latest"),
                this.sendAsync({
                    method: t,
                    params: r
                }, n)
            }
        }
        e.exports = i,
        i.prototype.getBalance = a(2, "eth_getBalance"),
        i.prototype.getCode = a(2, "eth_getCode"),
        i.prototype.getTransactionCount = a(2, "eth_getTransactionCount"),
        i.prototype.getStorageAt = a(3, "eth_getStorageAt"),
        i.prototype.call = a(2, "eth_call"),
        i.prototype.protocolVersion = o("eth_protocolVersion"),
        i.prototype.syncing = o("eth_syncing"),
        i.prototype.coinbase = o("eth_coinbase"),
        i.prototype.mining = o("eth_mining"),
        i.prototype.hashrate = o("eth_hashrate"),
        i.prototype.gasPrice = o("eth_gasPrice"),
        i.prototype.accounts = o("eth_accounts"),
        i.prototype.blockNumber = o("eth_blockNumber"),
        i.prototype.getBlockTransactionCountByHash = o("eth_getBlockTransactionCountByHash"),
        i.prototype.getBlockTransactionCountByNumber = o("eth_getBlockTransactionCountByNumber"),
        i.prototype.getUncleCountByBlockHash = o("eth_getUncleCountByBlockHash"),
        i.prototype.getUncleCountByBlockNumber = o("eth_getUncleCountByBlockNumber"),
        i.prototype.sign = o("eth_sign"),
        i.prototype.sendTransaction = o("eth_sendTransaction"),
        i.prototype.sendRawTransaction = o("eth_sendRawTransaction"),
        i.prototype.estimateGas = o("eth_estimateGas"),
        i.prototype.getBlockByHash = o("eth_getBlockByHash"),
        i.prototype.getBlockByNumber = o("eth_getBlockByNumber"),
        i.prototype.getTransactionByHash = o("eth_getTransactionByHash"),
        i.prototype.getTransactionByBlockHashAndIndex = o("eth_getTransactionByBlockHashAndIndex"),
        i.prototype.getTransactionByBlockNumberAndIndex = o("eth_getTransactionByBlockNumberAndIndex"),
        i.prototype.getTransactionReceipt = o("eth_getTransactionReceipt"),
        i.prototype.getUncleByBlockHashAndIndex = o("eth_getUncleByBlockHashAndIndex"),
        i.prototype.getUncleByBlockNumberAndIndex = o("eth_getUncleByBlockNumberAndIndex"),
        i.prototype.getCompilers = o("eth_getCompilers"),
        i.prototype.compileLLL = o("eth_compileLLL"),
        i.prototype.compileSolidity = o("eth_compileSolidity"),
        i.prototype.compileSerpent = o("eth_compileSerpent"),
        i.prototype.newFilter = o("eth_newFilter"),
        i.prototype.newBlockFilter = o("eth_newBlockFilter"),
        i.prototype.newPendingTransactionFilter = o("eth_newPendingTransactionFilter"),
        i.prototype.uninstallFilter = o("eth_uninstallFilter"),
        i.prototype.getFilterChanges = o("eth_getFilterChanges"),
        i.prototype.getFilterLogs = o("eth_getFilterLogs"),
        i.prototype.getLogs = o("eth_getLogs"),
        i.prototype.getWork = o("eth_getWork"),
        i.prototype.submitWork = o("eth_submitWork"),
        i.prototype.submitHashrate = o("eth_submitHashrate"),
        i.prototype.sendAsync = function(e, t) {
            var r;
            this.currentProvider.sendAsync((r = e,
            n({
                id: s(),
                jsonrpc: "2.0",
                params: []
            }, r)), (function(e, r) {
                if (!e && r.error && (e = new Error("EthQuery - RPC Error - " + r.error.message)),
                e)
                    return t(e);
                t(null, r.result)
            }
            ))
        }
    },
    65753: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.EthereumProviderError = t.EthereumRpcError = void 0;
        const n = r(4329);
        class s extends Error {
            constructor(e, t, r) {
                if (!Number.isInteger(e))
                    throw new Error('"code" must be an integer.');
                if (!t || "string" !== typeof t)
                    throw new Error('"message" must be a nonempty string.');
                super(t),
                this.code = e,
                void 0 !== r && (this.data = r)
            }
            serialize() {
                const e = {
                    code: this.code,
                    message: this.message
                };
                return void 0 !== this.data && (e.data = this.data),
                this.stack && (e.stack = this.stack),
                e
            }
            toString() {
                return n.default(this.serialize(), i, 2)
            }
        }
        t.EthereumRpcError = s;
        function i(e, t) {
            if ("[Circular]" !== t)
                return t
        }
        t.EthereumProviderError = class extends s {
            constructor(e, t, r) {
                if (!function(e) {
                    return Number.isInteger(e) && e >= 1e3 && e <= 4999
                }(e))
                    throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');
                super(e, t, r)
            }
        }
    },
    84358: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.errorValues = t.errorCodes = void 0,
        t.errorCodes = {
            rpc: {
                invalidInput: -32e3,
                resourceNotFound: -32001,
                resourceUnavailable: -32002,
                transactionRejected: -32003,
                methodNotSupported: -32004,
                limitExceeded: -32005,
                parse: -32700,
                invalidRequest: -32600,
                methodNotFound: -32601,
                invalidParams: -32602,
                internal: -32603
            },
            provider: {
                userRejectedRequest: 4001,
                unauthorized: 4100,
                unsupportedMethod: 4200,
                disconnected: 4900,
                chainDisconnected: 4901
            }
        },
        t.errorValues = {
            "-32700": {
                standard: "JSON RPC 2.0",
                message: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
            },
            "-32600": {
                standard: "JSON RPC 2.0",
                message: "The JSON sent is not a valid Request object."
            },
            "-32601": {
                standard: "JSON RPC 2.0",
                message: "The method does not exist / is not available."
            },
            "-32602": {
                standard: "JSON RPC 2.0",
                message: "Invalid method parameter(s)."
            },
            "-32603": {
                standard: "JSON RPC 2.0",
                message: "Internal JSON-RPC error."
            },
            "-32000": {
                standard: "EIP-1474",
                message: "Invalid input."
            },
            "-32001": {
                standard: "EIP-1474",
                message: "Resource not found."
            },
            "-32002": {
                standard: "EIP-1474",
                message: "Resource unavailable."
            },
            "-32003": {
                standard: "EIP-1474",
                message: "Transaction rejected."
            },
            "-32004": {
                standard: "EIP-1474",
                message: "Method not supported."
            },
            "-32005": {
                standard: "EIP-1474",
                message: "Request limit exceeded."
            },
            4001: {
                standard: "EIP-1193",
                message: "User rejected the request."
            },
            4100: {
                standard: "EIP-1193",
                message: "The requested account and/or method has not been authorized by the user."
            },
            4200: {
                standard: "EIP-1193",
                message: "The requested method is not supported by this Ethereum provider."
            },
            4900: {
                standard: "EIP-1193",
                message: "The provider is disconnected from all chains."
            },
            4901: {
                standard: "EIP-1193",
                message: "The provider is disconnected from the specified chain."
            }
        }
    },
    86917: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.ethErrors = void 0;
        const n = r(65753)
          , s = r(43245)
          , i = r(84358);
        function o(e, t) {
            const [r,i] = c(t);
            return new n.EthereumRpcError(e,r || s.getMessageFromCode(e),i)
        }
        function a(e, t) {
            const [r,i] = c(t);
            return new n.EthereumProviderError(e,r || s.getMessageFromCode(e),i)
        }
        function c(e) {
            if (e) {
                if ("string" === typeof e)
                    return [e];
                if ("object" === typeof e && !Array.isArray(e)) {
                    const {message: t, data: r} = e;
                    if (t && "string" !== typeof t)
                        throw new Error("Must specify string message.");
                    return [t || void 0, r]
                }
            }
            return []
        }
        t.ethErrors = {
            rpc: {
                parse: e=>o(i.errorCodes.rpc.parse, e),
                invalidRequest: e=>o(i.errorCodes.rpc.invalidRequest, e),
                invalidParams: e=>o(i.errorCodes.rpc.invalidParams, e),
                methodNotFound: e=>o(i.errorCodes.rpc.methodNotFound, e),
                internal: e=>o(i.errorCodes.rpc.internal, e),
                server: e=>{
                    if (!e || "object" !== typeof e || Array.isArray(e))
                        throw new Error("Ethereum RPC Server errors must provide single object argument.");
                    const {code: t} = e;
                    if (!Number.isInteger(t) || t > -32005 || t < -32099)
                        throw new Error('"code" must be an integer such that: -32099 <= code <= -32005');
                    return o(t, e)
                }
                ,
                invalidInput: e=>o(i.errorCodes.rpc.invalidInput, e),
                resourceNotFound: e=>o(i.errorCodes.rpc.resourceNotFound, e),
                resourceUnavailable: e=>o(i.errorCodes.rpc.resourceUnavailable, e),
                transactionRejected: e=>o(i.errorCodes.rpc.transactionRejected, e),
                methodNotSupported: e=>o(i.errorCodes.rpc.methodNotSupported, e),
                limitExceeded: e=>o(i.errorCodes.rpc.limitExceeded, e)
            },
            provider: {
                userRejectedRequest: e=>a(i.errorCodes.provider.userRejectedRequest, e),
                unauthorized: e=>a(i.errorCodes.provider.unauthorized, e),
                unsupportedMethod: e=>a(i.errorCodes.provider.unsupportedMethod, e),
                disconnected: e=>a(i.errorCodes.provider.disconnected, e),
                chainDisconnected: e=>a(i.errorCodes.provider.chainDisconnected, e),
                custom: e=>{
                    if (!e || "object" !== typeof e || Array.isArray(e))
                        throw new Error("Ethereum Provider custom errors must provide single object argument.");
                    const {code: t, message: r, data: s} = e;
                    if (!r || "string" !== typeof r)
                        throw new Error('"message" must be a nonempty string');
                    return new n.EthereumProviderError(t,r,s)
                }
            }
        }
    },
    28322: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.getMessageFromCode = t.serializeError = t.EthereumProviderError = t.EthereumRpcError = t.ethErrors = t.errorCodes = void 0;
        const n = r(65753);
        Object.defineProperty(t, "EthereumRpcError", {
            enumerable: !0,
            get: function() {
                return n.EthereumRpcError
            }
        }),
        Object.defineProperty(t, "EthereumProviderError", {
            enumerable: !0,
            get: function() {
                return n.EthereumProviderError
            }
        });
        const s = r(43245);
        Object.defineProperty(t, "serializeError", {
            enumerable: !0,
            get: function() {
                return s.serializeError
            }
        }),
        Object.defineProperty(t, "getMessageFromCode", {
            enumerable: !0,
            get: function() {
                return s.getMessageFromCode
            }
        });
        const i = r(86917);
        Object.defineProperty(t, "ethErrors", {
            enumerable: !0,
            get: function() {
                return i.ethErrors
            }
        });
        const o = r(84358);
        Object.defineProperty(t, "errorCodes", {
            enumerable: !0,
            get: function() {
                return o.errorCodes
            }
        })
    },
    43245: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.serializeError = t.isValidCode = t.getMessageFromCode = t.JSON_RPC_SERVER_ERROR_MESSAGE = void 0;
        const n = r(84358)
          , s = r(65753)
          , i = n.errorCodes.rpc.internal
          , o = "Unspecified error message. This is a bug, please report it."
          , a = {
            code: i,
            message: c(i)
        };
        function c(e, r=o) {
            if (Number.isInteger(e)) {
                const r = e.toString();
                if (h(n.errorValues, r))
                    return n.errorValues[r].message;
                if (u(e))
                    return t.JSON_RPC_SERVER_ERROR_MESSAGE
            }
            return r
        }
        function l(e) {
            if (!Number.isInteger(e))
                return !1;
            const t = e.toString();
            return !!n.errorValues[t] || !!u(e)
        }
        function u(e) {
            return e >= -32099 && e <= -32e3
        }
        function d(e) {
            return e && "object" === typeof e && !Array.isArray(e) ? Object.assign({}, e) : e
        }
        function h(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        t.JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error.",
        t.getMessageFromCode = c,
        t.isValidCode = l,
        t.serializeError = function(e, {fallbackError: t=a, shouldIncludeStack: r=!1}={}) {
            var n, i;
            if (!t || !Number.isInteger(t.code) || "string" !== typeof t.message)
                throw new Error("Must provide fallback error with integer number code and string message.");
            if (e instanceof s.EthereumRpcError)
                return e.serialize();
            const o = {};
            if (e && "object" === typeof e && !Array.isArray(e) && h(e, "code") && l(e.code)) {
                const t = e;
                o.code = t.code,
                t.message && "string" === typeof t.message ? (o.message = t.message,
                h(t, "data") && (o.data = t.data)) : (o.message = c(o.code),
                o.data = {
                    originalError: d(e)
                })
            } else {
                o.code = t.code;
                const r = null === (n = e) || void 0 === n ? void 0 : n.message;
                o.message = r && "string" === typeof r ? r : t.message,
                o.data = {
                    originalError: d(e)
                }
            }
            const u = null === (i = e) || void 0 === i ? void 0 : i.stack;
            return r && e && u && "string" === typeof u && (o.stack = u),
            o
        }
    },
    4329: function(e) {
        e.exports = o,
        o.default = o,
        o.stable = u,
        o.stableStringify = u;
        var t = "[...]"
          , r = "[Circular]"
          , n = []
          , s = [];
        function i() {
            return {
                depthLimit: Number.MAX_SAFE_INTEGER,
                edgesLimit: Number.MAX_SAFE_INTEGER
            }
        }
        function o(e, t, r, o) {
            var a;
            "undefined" === typeof o && (o = i()),
            c(e, "", 0, [], void 0, 0, o);
            try {
                a = 0 === s.length ? JSON.stringify(e, t, r) : JSON.stringify(e, h(t), r)
            } catch (u) {
                return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]")
            } finally {
                for (; 0 !== n.length; ) {
                    var l = n.pop();
                    4 === l.length ? Object.defineProperty(l[0], l[1], l[3]) : l[0][l[1]] = l[2]
                }
            }
            return a
        }
        function a(e, t, r, i) {
            var o = Object.getOwnPropertyDescriptor(i, r);
            void 0 !== o.get ? o.configurable ? (Object.defineProperty(i, r, {
                value: e
            }),
            n.push([i, r, t, o])) : s.push([t, r, e]) : (i[r] = e,
            n.push([i, r, t]))
        }
        function c(e, n, s, i, o, l, u) {
            var d;
            if (l += 1,
            "object" === typeof e && null !== e) {
                for (d = 0; d < i.length; d++)
                    if (i[d] === e)
                        return void a(r, e, n, o);
                if ("undefined" !== typeof u.depthLimit && l > u.depthLimit)
                    return void a(t, e, n, o);
                if ("undefined" !== typeof u.edgesLimit && s + 1 > u.edgesLimit)
                    return void a(t, e, n, o);
                if (i.push(e),
                Array.isArray(e))
                    for (d = 0; d < e.length; d++)
                        c(e[d], d, d, i, e, l, u);
                else {
                    var h = Object.keys(e);
                    for (d = 0; d < h.length; d++) {
                        var f = h[d];
                        c(e[f], f, d, i, e, l, u)
                    }
                }
                i.pop()
            }
        }
        function l(e, t) {
            return e < t ? -1 : e > t ? 1 : 0
        }
        function u(e, t, r, o) {
            "undefined" === typeof o && (o = i());
            var a, c = d(e, "", 0, [], void 0, 0, o) || e;
            try {
                a = 0 === s.length ? JSON.stringify(c, t, r) : JSON.stringify(c, h(t), r)
            } catch (u) {
                return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]")
            } finally {
                for (; 0 !== n.length; ) {
                    var l = n.pop();
                    4 === l.length ? Object.defineProperty(l[0], l[1], l[3]) : l[0][l[1]] = l[2]
                }
            }
            return a
        }
        function d(e, s, i, o, c, u, h) {
            var f;
            if (u += 1,
            "object" === typeof e && null !== e) {
                for (f = 0; f < o.length; f++)
                    if (o[f] === e)
                        return void a(r, e, s, c);
                try {
                    if ("function" === typeof e.toJSON)
                        return
                } catch (_) {
                    return
                }
                if ("undefined" !== typeof h.depthLimit && u > h.depthLimit)
                    return void a(t, e, s, c);
                if ("undefined" !== typeof h.edgesLimit && i + 1 > h.edgesLimit)
                    return void a(t, e, s, c);
                if (o.push(e),
                Array.isArray(e))
                    for (f = 0; f < e.length; f++)
                        d(e[f], f, f, o, e, u, h);
                else {
                    var p = {}
                      , g = Object.keys(e).sort(l);
                    for (f = 0; f < g.length; f++) {
                        var m = g[f];
                        d(e[m], m, f, o, e, u, h),
                        p[m] = e[m]
                    }
                    if ("undefined" === typeof c)
                        return p;
                    n.push([c, s, e]),
                    c[s] = p
                }
                o.pop()
            }
        }
        function h(e) {
            return e = "undefined" !== typeof e ? e : function(e, t) {
                return t
            }
            ,
            function(t, r) {
                if (s.length > 0)
                    for (var n = 0; n < s.length; n++) {
                        var i = s[n];
                        if (i[1] === t && i[0] === r) {
                            r = i[2],
                            s.splice(n, 1);
                            break
                        }
                    }
                return e.call(this, t, r)
            }
        }
    },
    8685: function(e, t, r) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.JsonRpcEngine = void 0;
        const s = n(r(35247))
          , i = r(28322);
        class o extends s.default {
            constructor() {
                super(),
                this._middleware = []
            }
            push(e) {
                this._middleware.push(e)
            }
            handle(e, t) {
                if (t && "function" !== typeof t)
                    throw new Error('"callback" must be a function if provided.');
                return Array.isArray(e) ? t ? this._handleBatch(e, t) : this._handleBatch(e) : t ? this._handle(e, t) : this._promiseHandle(e)
            }
            asMiddleware() {
                return async(e,t,r,n)=>{
                    try {
                        const [s,i,a] = await o._runAllMiddleware(e, t, this._middleware);
                        return i ? (await o._runReturnHandlers(a),
                        n(s)) : r((async e=>{
                            try {
                                await o._runReturnHandlers(a)
                            } catch (t) {
                                return e(t)
                            }
                            return e()
                        }
                        ))
                    } catch (s) {
                        return n(s)
                    }
                }
            }
            async _handleBatch(e, t) {
                try {
                    const r = await Promise.all(e.map(this._promiseHandle.bind(this)));
                    return t ? t(null, r) : r
                } catch (r) {
                    if (t)
                        return t(r);
                    throw r
                }
            }
            _promiseHandle(e) {
                return new Promise((t=>{
                    this._handle(e, ((e,r)=>{
                        t(r)
                    }
                    ))
                }
                ))
            }
            async _handle(e, t) {
                if (!e || Array.isArray(e) || "object" !== typeof e) {
                    const r = new i.EthereumRpcError(i.errorCodes.rpc.invalidRequest,"Requests must be plain objects. Received: " + typeof e,{
                        request: e
                    });
                    return t(r, {
                        id: void 0,
                        jsonrpc: "2.0",
                        error: r
                    })
                }
                if ("string" !== typeof e.method) {
                    const r = new i.EthereumRpcError(i.errorCodes.rpc.invalidRequest,"Must specify a string method. Received: " + typeof e.method,{
                        request: e
                    });
                    return t(r, {
                        id: e.id,
                        jsonrpc: "2.0",
                        error: r
                    })
                }
                const r = Object.assign({}, e)
                  , n = {
                    id: r.id,
                    jsonrpc: r.jsonrpc
                };
                let s = null;
                try {
                    await this._processRequest(r, n)
                } catch (o) {
                    s = o
                }
                return s && (delete n.result,
                n.error || (n.error = i.serializeError(s))),
                t(s, n)
            }
            async _processRequest(e, t) {
                const [r,n,s] = await o._runAllMiddleware(e, t, this._middleware);
                if (o._checkForCompletion(e, t, n),
                await o._runReturnHandlers(s),
                r)
                    throw r
            }
            static async _runAllMiddleware(e, t, r) {
                const n = [];
                let s = null
                  , i = !1;
                for (const a of r)
                    if ([s,i] = await o._runMiddleware(e, t, a, n),
                    i)
                        break;
                return [s, i, n.reverse()]
            }
            static _runMiddleware(e, t, r, n) {
                return new Promise((s=>{
                    const o = e=>{
                        const r = e || t.error;
                        r && (t.error = i.serializeError(r)),
                        s([r, !0])
                    }
                      , c = r=>{
                        t.error ? o(t.error) : (r && ("function" !== typeof r && o(new i.EthereumRpcError(i.errorCodes.rpc.internal,`JsonRpcEngine: "next" return handlers must be functions. Received "${typeof r}" for request:\n${a(e)}`,{
                            request: e
                        })),
                        n.push(r)),
                        s([null, !1]))
                    }
                    ;
                    try {
                        r(e, t, c, o)
                    } catch (l) {
                        o(l)
                    }
                }
                ))
            }
            static async _runReturnHandlers(e) {
                for (const t of e)
                    await new Promise(((e,r)=>{
                        t((t=>t ? r(t) : e()))
                    }
                    ))
            }
            static _checkForCompletion(e, t, r) {
                if (!("result"in t) && !("error"in t))
                    throw new i.EthereumRpcError(i.errorCodes.rpc.internal,`JsonRpcEngine: Response has no error or result for request:\n${a(e)}`,{
                        request: e
                    });
                if (!r)
                    throw new i.EthereumRpcError(i.errorCodes.rpc.internal,`JsonRpcEngine: Nothing ended request:\n${a(e)}`,{
                        request: e
                    })
            }
        }
        function a(e) {
            return JSON.stringify(e, null, 2)
        }
        t.JsonRpcEngine = o
    },
    21612: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.createAsyncMiddleware = void 0,
        t.createAsyncMiddleware = function(e) {
            return async(t,r,n,s)=>{
                let i;
                const o = new Promise((e=>{
                    i = e
                }
                ));
                let a = null
                  , c = !1;
                const l = async()=>{
                    c = !0,
                    n((e=>{
                        a = e,
                        i()
                    }
                    )),
                    await o
                }
                ;
                try {
                    await e(t, r, l),
                    c ? (await o,
                    a(null)) : s(null)
                } catch (u) {
                    a ? a(u) : s(u)
                }
            }
        }
    },
    3507: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.createScaffoldMiddleware = void 0,
        t.createScaffoldMiddleware = function(e) {
            return (t,r,n,s)=>{
                const i = e[t.method];
                return void 0 === i ? n() : "function" === typeof i ? i(t, r, n, s) : (r.result = i,
                s())
            }
        }
    },
    64873: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.getUniqueId = void 0;
        const r = 4294967295;
        let n = Math.floor(Math.random() * r);
        t.getUniqueId = function() {
            return n = (n + 1) % r,
            n
        }
    },
    25080: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.createIdRemapMiddleware = void 0;
        const n = r(64873);
        t.createIdRemapMiddleware = function() {
            return (e,t,r,s)=>{
                const i = e.id
                  , o = n.getUniqueId();
                e.id = o,
                t.id = o,
                r((r=>{
                    e.id = i,
                    t.id = i,
                    r()
                }
                ))
            }
        }
    },
    91743: function(e, t, r) {
        "use strict";
        var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
            void 0 === n && (n = r),
            Object.defineProperty(e, n, {
                enumerable: !0,
                get: function() {
                    return t[r]
                }
            })
        }
        : function(e, t, r, n) {
            void 0 === n && (n = r),
            e[n] = t[r]
        }
        )
          , s = this && this.__exportStar || function(e, t) {
            for (var r in e)
                "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r)
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        s(r(25080), t),
        s(r(21612), t),
        s(r(3507), t),
        s(r(64873), t),
        s(r(8685), t),
        s(r(43111), t)
    },
    43111: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.mergeMiddleware = void 0;
        const n = r(8685);
        t.mergeMiddleware = function(e) {
            const t = new n.JsonRpcEngine;
            return e.forEach((e=>t.push(e))),
            t.asMiddleware()
        }
    },
    85350: function(e) {
        e.exports = function(e) {
            var t = (e = e || {}).max || Number.MAX_SAFE_INTEGER
              , r = "undefined" !== typeof e.start ? e.start : Math.floor(Math.random() * t);
            return function() {
                return r %= t,
                r++
            }
        }
    },
    18521: function(e, t, r) {
        e.exports = r(59864)(r(76716))
    },
    59864: function(e, t, r) {
        const n = r(86106)
          , s = r(86360);
        e.exports = function(e) {
            const t = n(e)
              , r = s(e);
            return function(e, n) {
                switch ("string" === typeof e ? e.toLowerCase() : e) {
                case "keccak224":
                    return new t(1152,448,null,224,n);
                case "keccak256":
                    return new t(1088,512,null,256,n);
                case "keccak384":
                    return new t(832,768,null,384,n);
                case "keccak512":
                    return new t(576,1024,null,512,n);
                case "sha3-224":
                    return new t(1152,448,6,224,n);
                case "sha3-256":
                    return new t(1088,512,6,256,n);
                case "sha3-384":
                    return new t(832,768,6,384,n);
                case "sha3-512":
                    return new t(576,1024,6,512,n);
                case "shake128":
                    return new r(1344,256,31,n);
                case "shake256":
                    return new r(1088,512,31,n);
                default:
                    throw new Error("Invald algorithm: " + e)
                }
            }
        }
    },
    86106: function(e, t, r) {
        var n = r(15313).Buffer;
        const {Transform: s} = r(28699);
        e.exports = e=>class t extends s {
            constructor(t, r, n, s, i) {
                super(i),
                this._rate = t,
                this._capacity = r,
                this._delimitedSuffix = n,
                this._hashBitLength = s,
                this._options = i,
                this._state = new e,
                this._state.initialize(t, r),
                this._finalized = !1
            }
            _transform(e, t, r) {
                let n = null;
                try {
                    this.update(e, t)
                } catch (s) {
                    n = s
                }
                r(n)
            }
            _flush(e) {
                let t = null;
                try {
                    this.push(this.digest())
                } catch (r) {
                    t = r
                }
                e(t)
            }
            update(e, t) {
                if (!n.isBuffer(e) && "string" !== typeof e)
                    throw new TypeError("Data must be a string or a buffer");
                if (this._finalized)
                    throw new Error("Digest already called");
                return n.isBuffer(e) || (e = n.from(e, t)),
                this._state.absorb(e),
                this
            }
            digest(e) {
                if (this._finalized)
                    throw new Error("Digest already called");
                this._finalized = !0,
                this._delimitedSuffix && this._state.absorbLastFewBits(this._delimitedSuffix);
                let t = this._state.squeeze(this._hashBitLength / 8);
                return void 0 !== e && (t = t.toString(e)),
                this._resetState(),
                t
            }
            _resetState() {
                return this._state.initialize(this._rate, this._capacity),
                this
            }
            _clone() {
                const e = new t(this._rate,this._capacity,this._delimitedSuffix,this._hashBitLength,this._options);
                return this._state.copy(e._state),
                e._finalized = this._finalized,
                e
            }
        }
    },
    86360: function(e, t, r) {
        var n = r(15313).Buffer;
        const {Transform: s} = r(28699);
        e.exports = e=>class t extends s {
            constructor(t, r, n, s) {
                super(s),
                this._rate = t,
                this._capacity = r,
                this._delimitedSuffix = n,
                this._options = s,
                this._state = new e,
                this._state.initialize(t, r),
                this._finalized = !1
            }
            _transform(e, t, r) {
                let n = null;
                try {
                    this.update(e, t)
                } catch (s) {
                    n = s
                }
                r(n)
            }
            _flush() {}
            _read(e) {
                this.push(this.squeeze(e))
            }
            update(e, t) {
                if (!n.isBuffer(e) && "string" !== typeof e)
                    throw new TypeError("Data must be a string or a buffer");
                if (this._finalized)
                    throw new Error("Squeeze already called");
                return n.isBuffer(e) || (e = n.from(e, t)),
                this._state.absorb(e),
                this
            }
            squeeze(e, t) {
                this._finalized || (this._finalized = !0,
                this._state.absorbLastFewBits(this._delimitedSuffix));
                let r = this._state.squeeze(e);
                return void 0 !== t && (r = r.toString(t)),
                r
            }
            _resetState() {
                return this._state.initialize(this._rate, this._capacity),
                this
            }
            _clone() {
                const e = new t(this._rate,this._capacity,this._delimitedSuffix,this._options);
                return this._state.copy(e._state),
                e._finalized = this._finalized,
                e
            }
        }
    },
    25340: function(e, t) {
        const r = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648];
        t.p1600 = function(e) {
            for (let t = 0; t < 24; ++t) {
                const n = e[0] ^ e[10] ^ e[20] ^ e[30] ^ e[40]
                  , s = e[1] ^ e[11] ^ e[21] ^ e[31] ^ e[41]
                  , i = e[2] ^ e[12] ^ e[22] ^ e[32] ^ e[42]
                  , o = e[3] ^ e[13] ^ e[23] ^ e[33] ^ e[43]
                  , a = e[4] ^ e[14] ^ e[24] ^ e[34] ^ e[44]
                  , c = e[5] ^ e[15] ^ e[25] ^ e[35] ^ e[45]
                  , l = e[6] ^ e[16] ^ e[26] ^ e[36] ^ e[46]
                  , u = e[7] ^ e[17] ^ e[27] ^ e[37] ^ e[47]
                  , d = e[8] ^ e[18] ^ e[28] ^ e[38] ^ e[48]
                  , h = e[9] ^ e[19] ^ e[29] ^ e[39] ^ e[49];
                let f = d ^ (i << 1 | o >>> 31)
                  , p = h ^ (o << 1 | i >>> 31);
                const g = e[0] ^ f
                  , m = e[1] ^ p
                  , _ = e[10] ^ f
                  , b = e[11] ^ p
                  , y = e[20] ^ f
                  , w = e[21] ^ p
                  , v = e[30] ^ f
                  , E = e[31] ^ p
                  , k = e[40] ^ f
                  , S = e[41] ^ p;
                f = n ^ (a << 1 | c >>> 31),
                p = s ^ (c << 1 | a >>> 31);
                const R = e[2] ^ f
                  , C = e[3] ^ p
                  , I = e[12] ^ f
                  , x = e[13] ^ p
                  , A = e[22] ^ f
                  , M = e[23] ^ p
                  , N = e[32] ^ f
                  , L = e[33] ^ p
                  , T = e[42] ^ f
                  , P = e[43] ^ p;
                f = i ^ (l << 1 | u >>> 31),
                p = o ^ (u << 1 | l >>> 31);
                const O = e[4] ^ f
                  , j = e[5] ^ p
                  , B = e[14] ^ f
                  , D = e[15] ^ p
                  , F = e[24] ^ f
                  , $ = e[25] ^ p
                  , U = e[34] ^ f
                  , H = e[35] ^ p
                  , W = e[44] ^ f
                  , q = e[45] ^ p;
                f = a ^ (d << 1 | h >>> 31),
                p = c ^ (h << 1 | d >>> 31);
                const V = e[6] ^ f
                  , z = e[7] ^ p
                  , J = e[16] ^ f
                  , G = e[17] ^ p
                  , Z = e[26] ^ f
                  , Y = e[27] ^ p
                  , Q = e[36] ^ f
                  , K = e[37] ^ p
                  , X = e[46] ^ f
                  , ee = e[47] ^ p;
                f = l ^ (n << 1 | s >>> 31),
                p = u ^ (s << 1 | n >>> 31);
                const te = e[8] ^ f
                  , re = e[9] ^ p
                  , ne = e[18] ^ f
                  , se = e[19] ^ p
                  , ie = e[28] ^ f
                  , oe = e[29] ^ p
                  , ae = e[38] ^ f
                  , ce = e[39] ^ p
                  , le = e[48] ^ f
                  , ue = e[49] ^ p
                  , de = g
                  , he = m
                  , fe = b << 4 | _ >>> 28
                  , pe = _ << 4 | b >>> 28
                  , ge = y << 3 | w >>> 29
                  , me = w << 3 | y >>> 29
                  , _e = E << 9 | v >>> 23
                  , be = v << 9 | E >>> 23
                  , ye = k << 18 | S >>> 14
                  , we = S << 18 | k >>> 14
                  , ve = R << 1 | C >>> 31
                  , Ee = C << 1 | R >>> 31
                  , ke = x << 12 | I >>> 20
                  , Se = I << 12 | x >>> 20
                  , Re = A << 10 | M >>> 22
                  , Ce = M << 10 | A >>> 22
                  , Ie = L << 13 | N >>> 19
                  , xe = N << 13 | L >>> 19
                  , Ae = T << 2 | P >>> 30
                  , Me = P << 2 | T >>> 30
                  , Ne = j << 30 | O >>> 2
                  , Le = O << 30 | j >>> 2
                  , Te = B << 6 | D >>> 26
                  , Pe = D << 6 | B >>> 26
                  , Oe = $ << 11 | F >>> 21
                  , je = F << 11 | $ >>> 21
                  , Be = U << 15 | H >>> 17
                  , De = H << 15 | U >>> 17
                  , Fe = q << 29 | W >>> 3
                  , $e = W << 29 | q >>> 3
                  , Ue = V << 28 | z >>> 4
                  , He = z << 28 | V >>> 4
                  , We = G << 23 | J >>> 9
                  , qe = J << 23 | G >>> 9
                  , Ve = Z << 25 | Y >>> 7
                  , ze = Y << 25 | Z >>> 7
                  , Je = Q << 21 | K >>> 11
                  , Ge = K << 21 | Q >>> 11
                  , Ze = ee << 24 | X >>> 8
                  , Ye = X << 24 | ee >>> 8
                  , Qe = te << 27 | re >>> 5
                  , Ke = re << 27 | te >>> 5
                  , Xe = ne << 20 | se >>> 12
                  , et = se << 20 | ne >>> 12
                  , tt = oe << 7 | ie >>> 25
                  , rt = ie << 7 | oe >>> 25
                  , nt = ae << 8 | ce >>> 24
                  , st = ce << 8 | ae >>> 24
                  , it = le << 14 | ue >>> 18
                  , ot = ue << 14 | le >>> 18;
                e[0] = de ^ ~ke & Oe,
                e[1] = he ^ ~Se & je,
                e[10] = Ue ^ ~Xe & ge,
                e[11] = He ^ ~et & me,
                e[20] = ve ^ ~Te & Ve,
                e[21] = Ee ^ ~Pe & ze,
                e[30] = Qe ^ ~fe & Re,
                e[31] = Ke ^ ~pe & Ce,
                e[40] = Ne ^ ~We & tt,
                e[41] = Le ^ ~qe & rt,
                e[2] = ke ^ ~Oe & Je,
                e[3] = Se ^ ~je & Ge,
                e[12] = Xe ^ ~ge & Ie,
                e[13] = et ^ ~me & xe,
                e[22] = Te ^ ~Ve & nt,
                e[23] = Pe ^ ~ze & st,
                e[32] = fe ^ ~Re & Be,
                e[33] = pe ^ ~Ce & De,
                e[42] = We ^ ~tt & _e,
                e[43] = qe ^ ~rt & be,
                e[4] = Oe ^ ~Je & it,
                e[5] = je ^ ~Ge & ot,
                e[14] = ge ^ ~Ie & Fe,
                e[15] = me ^ ~xe & $e,
                e[24] = Ve ^ ~nt & ye,
                e[25] = ze ^ ~st & we,
                e[34] = Re ^ ~Be & Ze,
                e[35] = Ce ^ ~De & Ye,
                e[44] = tt ^ ~_e & Ae,
                e[45] = rt ^ ~be & Me,
                e[6] = Je ^ ~it & de,
                e[7] = Ge ^ ~ot & he,
                e[16] = Ie ^ ~Fe & Ue,
                e[17] = xe ^ ~$e & He,
                e[26] = nt ^ ~ye & ve,
                e[27] = st ^ ~we & Ee,
                e[36] = Be ^ ~Ze & Qe,
                e[37] = De ^ ~Ye & Ke,
                e[46] = _e ^ ~Ae & Ne,
                e[47] = be ^ ~Me & Le,
                e[8] = it ^ ~de & ke,
                e[9] = ot ^ ~he & Se,
                e[18] = Fe ^ ~Ue & Xe,
                e[19] = $e ^ ~He & et,
                e[28] = ye ^ ~ve & Te,
                e[29] = we ^ ~Ee & Pe,
                e[38] = Ze ^ ~Qe & fe,
                e[39] = Ye ^ ~Ke & pe,
                e[48] = Ae ^ ~Ne & We,
                e[49] = Me ^ ~Le & qe,
                e[0] ^= r[2 * t],
                e[1] ^= r[2 * t + 1]
            }
        }
    },
    76716: function(e, t, r) {
        var n = r(15313).Buffer;
        const s = r(25340);
        function i() {
            this.state = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            this.blockSize = null,
            this.count = 0,
            this.squeezing = !1
        }
        i.prototype.initialize = function(e, t) {
            for (let r = 0; r < 50; ++r)
                this.state[r] = 0;
            this.blockSize = e / 8,
            this.count = 0,
            this.squeezing = !1
        }
        ,
        i.prototype.absorb = function(e) {
            for (let t = 0; t < e.length; ++t)
                this.state[~~(this.count / 4)] ^= e[t] << this.count % 4 * 8,
                this.count += 1,
                this.count === this.blockSize && (s.p1600(this.state),
                this.count = 0)
        }
        ,
        i.prototype.absorbLastFewBits = function(e) {
            this.state[~~(this.count / 4)] ^= e << this.count % 4 * 8,
            0 !== (128 & e) && this.count === this.blockSize - 1 && s.p1600(this.state),
            this.state[~~((this.blockSize - 1) / 4)] ^= 128 << (this.blockSize - 1) % 4 * 8,
            s.p1600(this.state),
            this.count = 0,
            this.squeezing = !0
        }
        ,
        i.prototype.squeeze = function(e) {
            this.squeezing || this.absorbLastFewBits(1);
            const t = n.alloc(e);
            for (let r = 0; r < e; ++r)
                t[r] = this.state[~~(this.count / 4)] >>> this.count % 4 * 8 & 255,
                this.count += 1,
                this.count === this.blockSize && (s.p1600(this.state),
                this.count = 0);
            return t
        }
        ,
        i.prototype.copy = function(e) {
            for (let t = 0; t < 50; ++t)
                e.state[t] = this.state[t];
            e.blockSize = this.blockSize,
            e.count = this.count,
            e.squeezing = this.squeezing
        }
        ,
        e.exports = i
    },
    29416: function(e, t, r) {
        "use strict";
        const n = r(87406)
          , s = Symbol("max")
          , i = Symbol("length")
          , o = Symbol("lengthCalculator")
          , a = Symbol("allowStale")
          , c = Symbol("maxAge")
          , l = Symbol("dispose")
          , u = Symbol("noDisposeOnSet")
          , d = Symbol("lruList")
          , h = Symbol("cache")
          , f = Symbol("updateAgeOnGet")
          , p = ()=>1;
        const g = (e,t,r)=>{
            const n = e[h].get(t);
            if (n) {
                const t = n.value;
                if (m(e, t)) {
                    if (b(e, n),
                    !e[a])
                        return
                } else
                    r && (e[f] && (n.value.now = Date.now()),
                    e[d].unshiftNode(n));
                return t.value
            }
        }
          , m = (e,t)=>{
            if (!t || !t.maxAge && !e[c])
                return !1;
            const r = Date.now() - t.now;
            return t.maxAge ? r > t.maxAge : e[c] && r > e[c]
        }
          , _ = e=>{
            if (e[i] > e[s])
                for (let t = e[d].tail; e[i] > e[s] && null !== t; ) {
                    const r = t.prev;
                    b(e, t),
                    t = r
                }
        }
          , b = (e,t)=>{
            if (t) {
                const r = t.value;
                e[l] && e[l](r.key, r.value),
                e[i] -= r.length,
                e[h].delete(r.key),
                e[d].removeNode(t)
            }
        }
        ;
        class y {
            constructor(e, t, r, n, s) {
                this.key = e,
                this.value = t,
                this.length = r,
                this.now = n,
                this.maxAge = s || 0
            }
        }
        const w = (e,t,r,n)=>{
            let s = r.value;
            m(e, s) && (b(e, r),
            e[a] || (s = void 0)),
            s && t.call(n, s.value, s.key, e)
        }
        ;
        e.exports = class {
            constructor(e) {
                if ("number" === typeof e && (e = {
                    max: e
                }),
                e || (e = {}),
                e.max && ("number" !== typeof e.max || e.max < 0))
                    throw new TypeError("max must be a non-negative number");
                this[s] = e.max || 1 / 0;
                const t = e.length || p;
                if (this[o] = "function" !== typeof t ? p : t,
                this[a] = e.stale || !1,
                e.maxAge && "number" !== typeof e.maxAge)
                    throw new TypeError("maxAge must be a number");
                this[c] = e.maxAge || 0,
                this[l] = e.dispose,
                this[u] = e.noDisposeOnSet || !1,
                this[f] = e.updateAgeOnGet || !1,
                this.reset()
            }
            set max(e) {
                if ("number" !== typeof e || e < 0)
                    throw new TypeError("max must be a non-negative number");
                this[s] = e || 1 / 0,
                _(this)
            }
            get max() {
                return this[s]
            }
            set allowStale(e) {
                this[a] = !!e
            }
            get allowStale() {
                return this[a]
            }
            set maxAge(e) {
                if ("number" !== typeof e)
                    throw new TypeError("maxAge must be a non-negative number");
                this[c] = e,
                _(this)
            }
            get maxAge() {
                return this[c]
            }
            set lengthCalculator(e) {
                "function" !== typeof e && (e = p),
                e !== this[o] && (this[o] = e,
                this[i] = 0,
                this[d].forEach((e=>{
                    e.length = this[o](e.value, e.key),
                    this[i] += e.length
                }
                ))),
                _(this)
            }
            get lengthCalculator() {
                return this[o]
            }
            get length() {
                return this[i]
            }
            get itemCount() {
                return this[d].length
            }
            rforEach(e, t) {
                t = t || this;
                for (let r = this[d].tail; null !== r; ) {
                    const n = r.prev;
                    w(this, e, r, t),
                    r = n
                }
            }
            forEach(e, t) {
                t = t || this;
                for (let r = this[d].head; null !== r; ) {
                    const n = r.next;
                    w(this, e, r, t),
                    r = n
                }
            }
            keys() {
                return this[d].toArray().map((e=>e.key))
            }
            values() {
                return this[d].toArray().map((e=>e.value))
            }
            reset() {
                this[l] && this[d] && this[d].length && this[d].forEach((e=>this[l](e.key, e.value))),
                this[h] = new Map,
                this[d] = new n,
                this[i] = 0
            }
            dump() {
                return this[d].map((e=>!m(this, e) && {
                    k: e.key,
                    v: e.value,
                    e: e.now + (e.maxAge || 0)
                })).toArray().filter((e=>e))
            }
            dumpLru() {
                return this[d]
            }
            set(e, t, r) {
                if ((r = r || this[c]) && "number" !== typeof r)
                    throw new TypeError("maxAge must be a number");
                const n = r ? Date.now() : 0
                  , a = this[o](t, e);
                if (this[h].has(e)) {
                    if (a > this[s])
                        return b(this, this[h].get(e)),
                        !1;
                    const o = this[h].get(e).value;
                    return this[l] && (this[u] || this[l](e, o.value)),
                    o.now = n,
                    o.maxAge = r,
                    o.value = t,
                    this[i] += a - o.length,
                    o.length = a,
                    this.get(e),
                    _(this),
                    !0
                }
                const f = new y(e,t,a,n,r);
                return f.length > this[s] ? (this[l] && this[l](e, t),
                !1) : (this[i] += f.length,
                this[d].unshift(f),
                this[h].set(e, this[d].head),
                _(this),
                !0)
            }
            has(e) {
                if (!this[h].has(e))
                    return !1;
                const t = this[h].get(e).value;
                return !m(this, t)
            }
            get(e) {
                return g(this, e, !0)
            }
            peek(e) {
                return g(this, e, !1)
            }
            pop() {
                const e = this[d].tail;
                return e ? (b(this, e),
                e.value) : null
            }
            del(e) {
                b(this, this[h].get(e))
            }
            load(e) {
                this.reset();
                const t = Date.now();
                for (let r = e.length - 1; r >= 0; r--) {
                    const n = e[r]
                      , s = n.e || 0;
                    if (0 === s)
                        this.set(n.k, n.v);
                    else {
                        const e = s - t;
                        e > 0 && this.set(n.k, n.v, e)
                    }
                }
            }
            prune() {
                this[h].forEach(((e,t)=>g(this, t, !1)))
            }
        }
    },
    30115: function(e) {
        "use strict";
        const t = (e,t)=>function() {
            const r = t.promiseModule
              , n = new Array(arguments.length);
            for (let e = 0; e < arguments.length; e++)
                n[e] = arguments[e];
            return new r(((r,s)=>{
                t.errorFirst ? n.push((function(e, n) {
                    if (t.multiArgs) {
                        const t = new Array(arguments.length - 1);
                        for (let e = 1; e < arguments.length; e++)
                            t[e - 1] = arguments[e];
                        e ? (t.unshift(e),
                        s(t)) : r(t)
                    } else
                        e ? s(e) : r(n)
                }
                )) : n.push((function(e) {
                    if (t.multiArgs) {
                        const e = new Array(arguments.length - 1);
                        for (let t = 0; t < arguments.length; t++)
                            e[t] = arguments[t];
                        r(e)
                    } else
                        r(e)
                }
                )),
                e.apply(this, n)
            }
            ))
        }
        ;
        e.exports = (e,r)=>{
            r = Object.assign({
                exclude: [/.+(Sync|Stream)$/],
                errorFirst: !0,
                promiseModule: Promise
            }, r);
            const n = e=>{
                const t = t=>"string" === typeof t ? e === t : t.test(e);
                return r.include ? r.include.some(t) : !r.exclude.some(t)
            }
            ;
            let s;
            s = "function" === typeof e ? function() {
                return r.excludeMain ? e.apply(this, arguments) : t(e, r).apply(this, arguments)
            }
            : Object.create(Object.getPrototypeOf(e));
            for (const i in e) {
                const o = e[i];
                s[i] = "function" === typeof o && n(i) ? t(o, r) : o
            }
            return s
        }
    },
    51636: function(e) {
        "use strict";
        const t = (e,t,r,n)=>function(...s) {
            return new (0,
            t.promiseModule)(((i,o)=>{
                t.multiArgs ? s.push(((...e)=>{
                    t.errorFirst ? e[0] ? o(e) : (e.shift(),
                    i(e)) : i(e)
                }
                )) : t.errorFirst ? s.push(((e,t)=>{
                    e ? o(e) : i(t)
                }
                )) : s.push(i);
                const a = this === r ? n : this;
                Reflect.apply(e, a, s)
            }
            ))
        }
          , r = new WeakMap;
        e.exports = (e,n)=>{
            n = {
                exclude: [/.+(?:Sync|Stream)$/],
                errorFirst: !0,
                promiseModule: Promise,
                ...n
            };
            const s = typeof e;
            if (null === e || "object" !== s && "function" !== s)
                throw new TypeError(`Expected \`input\` to be a \`Function\` or \`Object\`, got \`${null === e ? "null" : s}\``);
            const i = new WeakMap
              , o = new Proxy(e,{
                apply(e, r, s) {
                    const a = i.get(e);
                    if (a)
                        return Reflect.apply(a, r, s);
                    const c = n.excludeMain ? e : t(e, n, o, e);
                    return i.set(e, c),
                    Reflect.apply(c, r, s)
                },
                get(e, s) {
                    const a = e[s];
                    if (!((e,t)=>{
                        let s = r.get(e);
                        if (s || (s = {},
                        r.set(e, s)),
                        t in s)
                            return s[t];
                        const i = e=>"string" === typeof e || "symbol" === typeof t ? t === e : e.test(t)
                          , o = Reflect.getOwnPropertyDescriptor(e, t)
                          , a = void 0 === o || o.writable || o.configurable
                          , c = (n.include ? n.include.some(i) : !n.exclude.some(i)) && a;
                        return s[t] = c,
                        c
                    }
                    )(e, s) || a === Function.prototype[s])
                        return a;
                    const c = i.get(a);
                    if (c)
                        return c;
                    if ("function" === typeof a) {
                        const r = t(a, n, o, e);
                        return i.set(a, r),
                        r
                    }
                    return a
                }
            });
            return o
        }
    },
    23318: function(e, t, r) {
        "use strict";
        r.r(t),
        r.d(t, {
            Component: function() {
                return E
            },
            Fragment: function() {
                return v
            },
            cloneElement: function() {
                return q
            },
            createContext: function() {
                return V
            },
            createElement: function() {
                return b
            },
            createRef: function() {
                return w
            },
            h: function() {
                return b
            },
            hydrate: function() {
                return W
            },
            isValidElement: function() {
                return o
            },
            options: function() {
                return s
            },
            render: function() {
                return H
            },
            toChildArray: function() {
                return M
            }
        });
        var n, s, i, o, a, c, l, u, d, h = {}, f = [], p = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, g = Array.isArray;
        function m(e, t) {
            for (var r in t)
                e[r] = t[r];
            return e
        }
        function _(e) {
            var t = e.parentNode;
            t && t.removeChild(e)
        }
        function b(e, t, r) {
            var s, i, o, a = {};
            for (o in t)
                "key" == o ? s = t[o] : "ref" == o ? i = t[o] : a[o] = t[o];
            if (arguments.length > 2 && (a.children = arguments.length > 3 ? n.call(arguments, 2) : r),
            "function" == typeof e && null != e.defaultProps)
                for (o in e.defaultProps)
                    void 0 === a[o] && (a[o] = e.defaultProps[o]);
            return y(e, a, s, i, null)
        }
        function y(e, t, r, n, o) {
            var a = {
                type: e,
                props: t,
                key: r,
                ref: n,
                __k: null,
                __: null,
                __b: 0,
                __e: null,
                __d: void 0,
                __c: null,
                constructor: void 0,
                __v: null == o ? ++i : o,
                __i: -1,
                __u: 0
            };
            return null == o && null != s.vnode && s.vnode(a),
            a
        }
        function w() {
            return {
                current: null
            }
        }
        function v(e) {
            return e.children
        }
        function E(e, t) {
            this.props = e,
            this.context = t
        }
        function k(e, t) {
            if (null == t)
                return e.__ ? k(e.__, e.__i + 1) : null;
            for (var r; t < e.__k.length; t++)
                if (null != (r = e.__k[t]) && null != r.__e)
                    return r.__e;
            return "function" == typeof e.type ? k(e) : null
        }
        function S(e) {
            var t, r;
            if (null != (e = e.__) && null != e.__c) {
                for (e.__e = e.__c.base = null,
                t = 0; t < e.__k.length; t++)
                    if (null != (r = e.__k[t]) && null != r.__e) {
                        e.__e = e.__c.base = r.__e;
                        break
                    }
                return S(e)
            }
        }
        function R(e) {
            (!e.__d && (e.__d = !0) && a.push(e) && !C.__r++ || c !== s.debounceRendering) && ((c = s.debounceRendering) || l)(C)
        }
        function C() {
            var e, t, r, n, s, i, o, c, l;
            for (a.sort(u); e = a.shift(); )
                e.__d && (t = a.length,
                n = void 0,
                i = (s = (r = e).__v).__e,
                c = [],
                l = [],
                (o = r.__P) && ((n = m({}, s)).__v = s.__v + 1,
                j(o, n, s, r.__n, void 0 !== o.ownerSVGElement, 32 & s.__u ? [i] : null, c, null == i ? k(s) : i, !!(32 & s.__u), l),
                n.__.__k[n.__i] = n,
                B(c, n, l),
                n.__e != i && S(n)),
                a.length > t && a.sort(u));
            C.__r = 0
        }
        function I(e, t, r, n, s, i, o, a, c, l, u) {
            var d, p, g, m, _, b = n && n.__k || f, y = t.length;
            for (r.__d = c,
            x(r, t, b),
            c = r.__d,
            d = 0; d < y; d++)
                null != (g = r.__k[d]) && "boolean" != typeof g && "function" != typeof g && (p = -1 === g.__i ? h : b[g.__i] || h,
                g.__i = d,
                j(e, g, p, s, i, o, a, c, l, u),
                m = g.__e,
                g.ref && p.ref != g.ref && (p.ref && F(p.ref, null, g),
                u.push(g.ref, g.__c || m, g)),
                null == _ && null != m && (_ = m),
                65536 & g.__u || p.__k === g.__k ? c = A(g, c, e) : "function" == typeof g.type && void 0 !== g.__d ? c = g.__d : m && (c = m.nextSibling),
                g.__d = void 0,
                g.__u &= -196609);
            r.__d = c,
            r.__e = _
        }
        function x(e, t, r) {
            var n, s, i, o, a, c = t.length, l = r.length, u = l, d = 0;
            for (e.__k = [],
            n = 0; n < c; n++)
                null != (s = e.__k[n] = null == (s = t[n]) || "boolean" == typeof s || "function" == typeof s ? null : "string" == typeof s || "number" == typeof s || "bigint" == typeof s || s.constructor == String ? y(null, s, null, null, s) : g(s) ? y(v, {
                    children: s
                }, null, null, null) : s.__b > 0 ? y(s.type, s.props, s.key, s.ref ? s.ref : null, s.__v) : s) ? (s.__ = e,
                s.__b = e.__b + 1,
                a = N(s, r, o = n + d, u),
                s.__i = a,
                i = null,
                -1 !== a && (u--,
                (i = r[a]) && (i.__u |= 131072)),
                null == i || null === i.__v ? (-1 == a && d--,
                "function" != typeof s.type && (s.__u |= 65536)) : a !== o && (a === o + 1 ? d++ : a > o ? u > c - o ? d += a - o : d-- : d = a < o && a == o - 1 ? a - o : 0,
                a !== n + d && (s.__u |= 65536))) : (i = r[n]) && null == i.key && i.__e && (i.__e == e.__d && (e.__d = k(i)),
                $(i, i, !1),
                r[n] = null,
                u--);
            if (u)
                for (n = 0; n < l; n++)
                    null != (i = r[n]) && 0 == (131072 & i.__u) && (i.__e == e.__d && (e.__d = k(i)),
                    $(i, i))
        }
        function A(e, t, r) {
            var n, s;
            if ("function" == typeof e.type) {
                for (n = e.__k,
                s = 0; n && s < n.length; s++)
                    n[s] && (n[s].__ = e,
                    t = A(n[s], t, r));
                return t
            }
            return e.__e != t && (r.insertBefore(e.__e, t || null),
            t = e.__e),
            t && t.nextSibling
        }
        function M(e, t) {
            return t = t || [],
            null == e || "boolean" == typeof e || (g(e) ? e.some((function(e) {
                M(e, t)
            }
            )) : t.push(e)),
            t
        }
        function N(e, t, r, n) {
            var s = e.key
              , i = e.type
              , o = r - 1
              , a = r + 1
              , c = t[r];
            if (null === c || c && s == c.key && i === c.type)
                return r;
            if (n > (null != c && 0 == (131072 & c.__u) ? 1 : 0))
                for (; o >= 0 || a < t.length; ) {
                    if (o >= 0) {
                        if ((c = t[o]) && 0 == (131072 & c.__u) && s == c.key && i === c.type)
                            return o;
                        o--
                    }
                    if (a < t.length) {
                        if ((c = t[a]) && 0 == (131072 & c.__u) && s == c.key && i === c.type)
                            return a;
                        a++
                    }
                }
            return -1
        }
        function L(e, t, r) {
            "-" === t[0] ? e.setProperty(t, null == r ? "" : r) : e[t] = null == r ? "" : "number" != typeof r || p.test(t) ? r : r + "px"
        }
        function T(e, t, r, n, s) {
            var i;
            e: if ("style" === t)
                if ("string" == typeof r)
                    e.style.cssText = r;
                else {
                    if ("string" == typeof n && (e.style.cssText = n = ""),
                    n)
                        for (t in n)
                            r && t in r || L(e.style, t, "");
                    if (r)
                        for (t in r)
                            n && r[t] === n[t] || L(e.style, t, r[t])
                }
            else if ("o" === t[0] && "n" === t[1])
                i = t !== (t = t.replace(/(PointerCapture)$|Capture$/, "$1")),
                t = t.toLowerCase()in e ? t.toLowerCase().slice(2) : t.slice(2),
                e.l || (e.l = {}),
                e.l[t + i] = r,
                r ? n ? r.u = n.u : (r.u = Date.now(),
                e.addEventListener(t, i ? O : P, i)) : e.removeEventListener(t, i ? O : P, i);
            else {
                if (s)
                    t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
                else if ("width" !== t && "height" !== t && "href" !== t && "list" !== t && "form" !== t && "tabIndex" !== t && "download" !== t && "rowSpan" !== t && "colSpan" !== t && "role" !== t && t in e)
                    try {
                        e[t] = null == r ? "" : r;
                        break e
                    } catch (e) {}
                "function" == typeof r || (null == r || !1 === r && "-" !== t[4] ? e.removeAttribute(t) : e.setAttribute(t, r))
            }
        }
        function P(e) {
            var t = this.l[e.type + !1];
            if (e.t) {
                if (e.t <= t.u)
                    return
            } else
                e.t = Date.now();
            return t(s.event ? s.event(e) : e)
        }
        function O(e) {
            return this.l[e.type + !0](s.event ? s.event(e) : e)
        }
        function j(e, t, r, n, i, o, a, c, l, u) {
            var d, h, f, p, _, b, y, w, k, S, R, C, x, A, M, N = t.type;
            if (void 0 !== t.constructor)
                return null;
            128 & r.__u && (l = !!(32 & r.__u),
            o = [c = t.__e = r.__e]),
            (d = s.__b) && d(t);
            e: if ("function" == typeof N)
                try {
                    if (w = t.props,
                    k = (d = N.contextType) && n[d.__c],
                    S = d ? k ? k.props.value : d.__ : n,
                    r.__c ? y = (h = t.__c = r.__c).__ = h.__E : ("prototype"in N && N.prototype.render ? t.__c = h = new N(w,S) : (t.__c = h = new E(w,S),
                    h.constructor = N,
                    h.render = U),
                    k && k.sub(h),
                    h.props = w,
                    h.state || (h.state = {}),
                    h.context = S,
                    h.__n = n,
                    f = h.__d = !0,
                    h.__h = [],
                    h._sb = []),
                    null == h.__s && (h.__s = h.state),
                    null != N.getDerivedStateFromProps && (h.__s == h.state && (h.__s = m({}, h.__s)),
                    m(h.__s, N.getDerivedStateFromProps(w, h.__s))),
                    p = h.props,
                    _ = h.state,
                    h.__v = t,
                    f)
                        null == N.getDerivedStateFromProps && null != h.componentWillMount && h.componentWillMount(),
                        null != h.componentDidMount && h.__h.push(h.componentDidMount);
                    else {
                        if (null == N.getDerivedStateFromProps && w !== p && null != h.componentWillReceiveProps && h.componentWillReceiveProps(w, S),
                        !h.__e && (null != h.shouldComponentUpdate && !1 === h.shouldComponentUpdate(w, h.__s, S) || t.__v === r.__v)) {
                            for (t.__v !== r.__v && (h.props = w,
                            h.state = h.__s,
                            h.__d = !1),
                            t.__e = r.__e,
                            t.__k = r.__k,
                            t.__k.forEach((function(e) {
                                e && (e.__ = t)
                            }
                            )),
                            R = 0; R < h._sb.length; R++)
                                h.__h.push(h._sb[R]);
                            h._sb = [],
                            h.__h.length && a.push(h);
                            break e
                        }
                        null != h.componentWillUpdate && h.componentWillUpdate(w, h.__s, S),
                        null != h.componentDidUpdate && h.__h.push((function() {
                            h.componentDidUpdate(p, _, b)
                        }
                        ))
                    }
                    if (h.context = S,
                    h.props = w,
                    h.__P = e,
                    h.__e = !1,
                    C = s.__r,
                    x = 0,
                    "prototype"in N && N.prototype.render) {
                        for (h.state = h.__s,
                        h.__d = !1,
                        C && C(t),
                        d = h.render(h.props, h.state, h.context),
                        A = 0; A < h._sb.length; A++)
                            h.__h.push(h._sb[A]);
                        h._sb = []
                    } else
                        do {
                            h.__d = !1,
                            C && C(t),
                            d = h.render(h.props, h.state, h.context),
                            h.state = h.__s
                        } while (h.__d && ++x < 25);
                    h.state = h.__s,
                    null != h.getChildContext && (n = m(m({}, n), h.getChildContext())),
                    f || null == h.getSnapshotBeforeUpdate || (b = h.getSnapshotBeforeUpdate(p, _)),
                    I(e, g(M = null != d && d.type === v && null == d.key ? d.props.children : d) ? M : [M], t, r, n, i, o, a, c, l, u),
                    h.base = t.__e,
                    t.__u &= -161,
                    h.__h.length && a.push(h),
                    y && (h.__E = h.__ = null)
                } catch (e) {
                    t.__v = null,
                    l || null != o ? (t.__e = c,
                    t.__u |= l ? 160 : 32,
                    o[o.indexOf(c)] = null) : (t.__e = r.__e,
                    t.__k = r.__k),
                    s.__e(e, t, r)
                }
            else
                null == o && t.__v === r.__v ? (t.__k = r.__k,
                t.__e = r.__e) : t.__e = D(r.__e, t, r, n, i, o, a, l, u);
            (d = s.diffed) && d(t)
        }
        function B(e, t, r) {
            t.__d = void 0;
            for (var n = 0; n < r.length; n++)
                F(r[n], r[++n], r[++n]);
            s.__c && s.__c(t, e),
            e.some((function(t) {
                try {
                    e = t.__h,
                    t.__h = [],
                    e.some((function(e) {
                        e.call(t)
                    }
                    ))
                } catch (e) {
                    s.__e(e, t.__v)
                }
            }
            ))
        }
        function D(e, t, r, s, i, o, a, c, l) {
            var u, d, f, p, m, b, y, w = r.props, v = t.props, E = t.type;
            if ("svg" === E && (i = !0),
            null != o)
                for (u = 0; u < o.length; u++)
                    if ((m = o[u]) && "setAttribute"in m == !!E && (E ? m.localName === E : 3 === m.nodeType)) {
                        e = m,
                        o[u] = null;
                        break
                    }
            if (null == e) {
                if (null === E)
                    return document.createTextNode(v);
                e = i ? document.createElementNS("http://www.w3.org/2000/svg", E) : document.createElement(E, v.is && v),
                o = null,
                c = !1
            }
            if (null === E)
                w === v || c && e.data === v || (e.data = v);
            else {
                if (o = o && n.call(e.childNodes),
                w = r.props || h,
                !c && null != o)
                    for (w = {},
                    u = 0; u < e.attributes.length; u++)
                        w[(m = e.attributes[u]).name] = m.value;
                for (u in w)
                    m = w[u],
                    "children" == u || ("dangerouslySetInnerHTML" == u ? f = m : "key" === u || u in v || T(e, u, null, m, i));
                for (u in v)
                    m = v[u],
                    "children" == u ? p = m : "dangerouslySetInnerHTML" == u ? d = m : "value" == u ? b = m : "checked" == u ? y = m : "key" === u || c && "function" != typeof m || w[u] === m || T(e, u, m, w[u], i);
                if (d)
                    c || f && (d.__html === f.__html || d.__html === e.innerHTML) || (e.innerHTML = d.__html),
                    t.__k = [];
                else if (f && (e.innerHTML = ""),
                I(e, g(p) ? p : [p], t, r, s, i && "foreignObject" !== E, o, a, o ? o[0] : r.__k && k(r, 0), c, l),
                null != o)
                    for (u = o.length; u--; )
                        null != o[u] && _(o[u]);
                c || (u = "value",
                void 0 !== b && (b !== e[u] || "progress" === E && !b || "option" === E && b !== w[u]) && T(e, u, b, w[u], !1),
                u = "checked",
                void 0 !== y && y !== e[u] && T(e, u, y, w[u], !1))
            }
            return e
        }
        function F(e, t, r) {
            try {
                "function" == typeof e ? e(t) : e.current = t
            } catch (e) {
                s.__e(e, r)
            }
        }
        function $(e, t, r) {
            var n, i;
            if (s.unmount && s.unmount(e),
            (n = e.ref) && (n.current && n.current !== e.__e || F(n, null, t)),
            null != (n = e.__c)) {
                if (n.componentWillUnmount)
                    try {
                        n.componentWillUnmount()
                    } catch (e) {
                        s.__e(e, t)
                    }
                n.base = n.__P = null,
                e.__c = void 0
            }
            if (n = e.__k)
                for (i = 0; i < n.length; i++)
                    n[i] && $(n[i], t, r || "function" != typeof e.type);
            r || null == e.__e || _(e.__e),
            e.__ = e.__e = e.__d = void 0
        }
        function U(e, t, r) {
            return this.constructor(e, r)
        }
        function H(e, t, r) {
            var i, o, a, c;
            s.__ && s.__(e, t),
            o = (i = "function" == typeof r) ? null : r && r.__k || t.__k,
            a = [],
            c = [],
            j(t, e = (!i && r || t).__k = b(v, null, [e]), o || h, h, void 0 !== t.ownerSVGElement, !i && r ? [r] : o ? null : t.firstChild ? n.call(t.childNodes) : null, a, !i && r ? r : o ? o.__e : t.firstChild, i, c),
            B(a, e, c)
        }
        function W(e, t) {
            H(e, t, W)
        }
        function q(e, t, r) {
            var s, i, o, a, c = m({}, e.props);
            for (o in e.type && e.type.defaultProps && (a = e.type.defaultProps),
            t)
                "key" == o ? s = t[o] : "ref" == o ? i = t[o] : c[o] = void 0 === t[o] && void 0 !== a ? a[o] : t[o];
            return arguments.length > 2 && (c.children = arguments.length > 3 ? n.call(arguments, 2) : r),
            y(e.type, c, s || e.key, i || e.ref, null)
        }
        function V(e, t) {
            var r = {
                __c: t = "__cC" + d++,
                __: e,
                Consumer: function(e, t) {
                    return e.children(t)
                },
                Provider: function(e) {
                    var r, n;
                    return this.getChildContext || (r = [],
                    (n = {})[t] = this,
                    this.getChildContext = function() {
                        return n
                    }
                    ,
                    this.shouldComponentUpdate = function(e) {
                        this.props.value !== e.value && r.some((function(e) {
                            e.__e = !0,
                            R(e)
                        }
                        ))
                    }
                    ,
                    this.sub = function(e) {
                        r.push(e);
                        var t = e.componentWillUnmount;
                        e.componentWillUnmount = function() {
                            r.splice(r.indexOf(e), 1),
                            t && t.call(e)
                        }
                    }
                    ),
                    e.children
                }
            };
            return r.Provider.__ = r.Consumer.contextType = r
        }
        n = f.slice,
        s = {
            __e: function(e, t, r, n) {
                for (var s, i, o; t = t.__; )
                    if ((s = t.__c) && !s.__)
                        try {
                            if ((i = s.constructor) && null != i.getDerivedStateFromError && (s.setState(i.getDerivedStateFromError(e)),
                            o = s.__d),
                            null != s.componentDidCatch && (s.componentDidCatch(e, n || {}),
                            o = s.__d),
                            o)
                                return s.__E = s
                        } catch (t) {
                            e = t
                        }
                throw e
            }
        },
        i = 0,
        o = function(e) {
            return null != e && null == e.constructor
        }
        ,
        E.prototype.setState = function(e, t) {
            var r;
            r = null != this.__s && this.__s !== this.state ? this.__s : this.__s = m({}, this.state),
            "function" == typeof e && (e = e(m({}, r), this.props)),
            e && m(r, e),
            null != e && this.__v && (t && this._sb.push(t),
            R(this))
        }
        ,
        E.prototype.forceUpdate = function(e) {
            this.__v && (this.__e = !0,
            e && this.__h.push(e),
            R(this))
        }
        ,
        E.prototype.render = v,
        a = [],
        l = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout,
        u = function(e, t) {
            return e.__v.__b - t.__v.__b
        }
        ,
        C.__r = 0,
        d = 0
    },
    53747: function(e, t, r) {
        "use strict";
        r.r(t),
        r.d(t, {
            useCallback: function() {
                return S
            },
            useContext: function() {
                return R
            },
            useDebugValue: function() {
                return C
            },
            useEffect: function() {
                return y
            },
            useErrorBoundary: function() {
                return I
            },
            useId: function() {
                return x
            },
            useImperativeHandle: function() {
                return E
            },
            useLayoutEffect: function() {
                return w
            },
            useMemo: function() {
                return k
            },
            useReducer: function() {
                return b
            },
            useRef: function() {
                return v
            },
            useState: function() {
                return _
            }
        });
        var n, s, i, o, a = r(23318), c = 0, l = [], u = [], d = a.options.__b, h = a.options.__r, f = a.options.diffed, p = a.options.__c, g = a.options.unmount;
        function m(e, t) {
            a.options.__h && a.options.__h(s, e, c || t),
            c = 0;
            var r = s.__H || (s.__H = {
                __: [],
                __h: []
            });
            return e >= r.__.length && r.__.push({
                __V: u
            }),
            r.__[e]
        }
        function _(e) {
            return c = 1,
            b(O, e)
        }
        function b(e, t, r) {
            var i = m(n++, 2);
            if (i.t = e,
            !i.__c && (i.__ = [r ? r(t) : O(void 0, t), function(e) {
                var t = i.__N ? i.__N[0] : i.__[0]
                  , r = i.t(t, e);
                t !== r && (i.__N = [r, i.__[1]],
                i.__c.setState({}))
            }
            ],
            i.__c = s,
            !s.u)) {
                var o = function(e, t, r) {
                    if (!i.__c.__H)
                        return !0;
                    var n = i.__c.__H.__.filter((function(e) {
                        return e.__c
                    }
                    ));
                    if (n.every((function(e) {
                        return !e.__N
                    }
                    )))
                        return !a || a.call(this, e, t, r);
                    var s = !1;
                    return n.forEach((function(e) {
                        if (e.__N) {
                            var t = e.__[0];
                            e.__ = e.__N,
                            e.__N = void 0,
                            t !== e.__[0] && (s = !0)
                        }
                    }
                    )),
                    !(!s && i.__c.props === e) && (!a || a.call(this, e, t, r))
                };
                s.u = !0;
                var a = s.shouldComponentUpdate
                  , c = s.componentWillUpdate;
                s.componentWillUpdate = function(e, t, r) {
                    if (this.__e) {
                        var n = a;
                        a = void 0,
                        o(e, t, r),
                        a = n
                    }
                    c && c.call(this, e, t, r)
                }
                ,
                s.shouldComponentUpdate = o
            }
            return i.__N || i.__
        }
        function y(e, t) {
            var r = m(n++, 3);
            !a.options.__s && P(r.__H, t) && (r.__ = e,
            r.i = t,
            s.__H.__h.push(r))
        }
        function w(e, t) {
            var r = m(n++, 4);
            !a.options.__s && P(r.__H, t) && (r.__ = e,
            r.i = t,
            s.__h.push(r))
        }
        function v(e) {
            return c = 5,
            k((function() {
                return {
                    current: e
                }
            }
            ), [])
        }
        function E(e, t, r) {
            c = 6,
            w((function() {
                return "function" == typeof e ? (e(t()),
                function() {
                    return e(null)
                }
                ) : e ? (e.current = t(),
                function() {
                    return e.current = null
                }
                ) : void 0
            }
            ), null == r ? r : r.concat(e))
        }
        function k(e, t) {
            var r = m(n++, 7);
            return P(r.__H, t) ? (r.__V = e(),
            r.i = t,
            r.__h = e,
            r.__V) : r.__
        }
        function S(e, t) {
            return c = 8,
            k((function() {
                return e
            }
            ), t)
        }
        function R(e) {
            var t = s.context[e.__c]
              , r = m(n++, 9);
            return r.c = e,
            t ? (null == r.__ && (r.__ = !0,
            t.sub(s)),
            t.props.value) : e.__
        }
        function C(e, t) {
            a.options.useDebugValue && a.options.useDebugValue(t ? t(e) : e)
        }
        function I(e) {
            var t = m(n++, 10)
              , r = _();
            return t.__ = e,
            s.componentDidCatch || (s.componentDidCatch = function(e, n) {
                t.__ && t.__(e, n),
                r[1](e)
            }
            ),
            [r[0], function() {
                r[1](void 0)
            }
            ]
        }
        function x() {
            var e = m(n++, 11);
            if (!e.__) {
                for (var t = s.__v; null !== t && !t.__m && null !== t.__; )
                    t = t.__;
                var r = t.__m || (t.__m = [0, 0]);
                e.__ = "P" + r[0] + "-" + r[1]++
            }
            return e.__
        }
        function A() {
            for (var e; e = l.shift(); )
                if (e.__P && e.__H)
                    try {
                        e.__H.__h.forEach(L),
                        e.__H.__h.forEach(T),
                        e.__H.__h = []
                    } catch (s) {
                        e.__H.__h = [],
                        a.options.__e(s, e.__v)
                    }
        }
        a.options.__b = function(e) {
            s = null,
            d && d(e)
        }
        ,
        a.options.__r = function(e) {
            h && h(e),
            n = 0;
            var t = (s = e.__c).__H;
            t && (i === s ? (t.__h = [],
            s.__h = [],
            t.__.forEach((function(e) {
                e.__N && (e.__ = e.__N),
                e.__V = u,
                e.__N = e.i = void 0
            }
            ))) : (t.__h.forEach(L),
            t.__h.forEach(T),
            t.__h = [],
            n = 0)),
            i = s
        }
        ,
        a.options.diffed = function(e) {
            f && f(e);
            var t = e.__c;
            t && t.__H && (t.__H.__h.length && (1 !== l.push(t) && o === a.options.requestAnimationFrame || ((o = a.options.requestAnimationFrame) || N)(A)),
            t.__H.__.forEach((function(e) {
                e.i && (e.__H = e.i),
                e.__V !== u && (e.__ = e.__V),
                e.i = void 0,
                e.__V = u
            }
            ))),
            i = s = null
        }
        ,
        a.options.__c = function(e, t) {
            t.some((function(e) {
                try {
                    e.__h.forEach(L),
                    e.__h = e.__h.filter((function(e) {
                        return !e.__ || T(e)
                    }
                    ))
                } catch (i) {
                    t.some((function(e) {
                        e.__h && (e.__h = [])
                    }
                    )),
                    t = [],
                    a.options.__e(i, e.__v)
                }
            }
            )),
            p && p(e, t)
        }
        ,
        a.options.unmount = function(e) {
            g && g(e);
            var t, r = e.__c;
            r && r.__H && (r.__H.__.forEach((function(e) {
                try {
                    L(e)
                } catch (e) {
                    t = e
                }
            }
            )),
            r.__H = void 0,
            t && a.options.__e(t, r.__v))
        }
        ;
        var M = "function" == typeof requestAnimationFrame;
        function N(e) {
            var t, r = function() {
                clearTimeout(n),
                M && cancelAnimationFrame(t),
                setTimeout(e)
            }, n = setTimeout(r, 100);
            M && (t = requestAnimationFrame(r))
        }
        function L(e) {
            var t = s
              , r = e.__c;
            "function" == typeof r && (e.__c = void 0,
            r()),
            s = t
        }
        function T(e) {
            var t = s;
            e.__c = e.__(),
            s = t
        }
        function P(e, t) {
            return !e || e.length !== t.length || t.some((function(t, r) {
                return t !== e[r]
            }
            ))
        }
        function O(e, t) {
            return "function" == typeof t ? t(e) : t
        }
    },
    71936: function(e) {
        "use strict";
        var t = {};
        function r(e, r, n) {
            n || (n = Error);
            var s = function(e) {
                var t, n;
                function s(t, n, s) {
                    return e.call(this, function(e, t, n) {
                        return "string" === typeof r ? r : r(e, t, n)
                    }(t, n, s)) || this
                }
                return n = e,
                (t = s).prototype = Object.create(n.prototype),
                t.prototype.constructor = t,
                t.__proto__ = n,
                s
            }(n);
            s.prototype.name = n.name,
            s.prototype.code = e,
            t[e] = s
        }
        function n(e, t) {
            if (Array.isArray(e)) {
                var r = e.length;
                return e = e.map((function(e) {
                    return String(e)
                }
                )),
                r > 2 ? "one of ".concat(t, " ").concat(e.slice(0, r - 1).join(", "), ", or ") + e[r - 1] : 2 === r ? "one of ".concat(t, " ").concat(e[0], " or ").concat(e[1]) : "of ".concat(t, " ").concat(e[0])
            }
            return "of ".concat(t, " ").concat(String(e))
        }
        r("ERR_INVALID_OPT_VALUE", (function(e, t) {
            return 'The value "' + t + '" is invalid for option "' + e + '"'
        }
        ), TypeError),
        r("ERR_INVALID_ARG_TYPE", (function(e, t, r) {
            var s, i, o, a;
            if ("string" === typeof t && (i = "not ",
            t.substr(!o || o < 0 ? 0 : +o, i.length) === i) ? (s = "must not be",
            t = t.replace(/^not /, "")) : s = "must be",
            function(e, t, r) {
                return (void 0 === r || r > e.length) && (r = e.length),
                e.substring(r - t.length, r) === t
            }(e, " argument"))
                a = "The ".concat(e, " ").concat(s, " ").concat(n(t, "type"));
            else {
                var c = function(e, t, r) {
                    return "number" !== typeof r && (r = 0),
                    !(r + t.length > e.length) && -1 !== e.indexOf(t, r)
                }(e, ".") ? "property" : "argument";
                a = 'The "'.concat(e, '" ').concat(c, " ").concat(s, " ").concat(n(t, "type"))
            }
            return a += ". Received type ".concat(typeof r)
        }
        ), TypeError),
        r("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"),
        r("ERR_METHOD_NOT_IMPLEMENTED", (function(e) {
            return "The " + e + " method is not implemented"
        }
        )),
        r("ERR_STREAM_PREMATURE_CLOSE", "Premature close"),
        r("ERR_STREAM_DESTROYED", (function(e) {
            return "Cannot call " + e + " after a stream was destroyed"
        }
        )),
        r("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"),
        r("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"),
        r("ERR_STREAM_WRITE_AFTER_END", "write after end"),
        r("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError),
        r("ERR_UNKNOWN_ENCODING", (function(e) {
            return "Unknown encoding: " + e
        }
        ), TypeError),
        r("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event"),
        e.exports.q = t
    },
    23955: function(e, t, r) {
        "use strict";
        var n = r(73656)
          , s = Object.keys || function(e) {
            var t = [];
            for (var r in e)
                t.push(r);
            return t
        }
        ;
        e.exports = u;
        var i = r(40794)
          , o = r(33216);
        r(67483)(u, i);
        for (var a = s(o.prototype), c = 0; c < a.length; c++) {
            var l = a[c];
            u.prototype[l] || (u.prototype[l] = o.prototype[l])
        }
        function u(e) {
            if (!(this instanceof u))
                return new u(e);
            i.call(this, e),
            o.call(this, e),
            this.allowHalfOpen = !0,
            e && (!1 === e.readable && (this.readable = !1),
            !1 === e.writable && (this.writable = !1),
            !1 === e.allowHalfOpen && (this.allowHalfOpen = !1,
            this.once("end", d)))
        }
        function d() {
            this._writableState.ended || n.nextTick(h, this)
        }
        function h(e) {
            e.end()
        }
        Object.defineProperty(u.prototype, "writableHighWaterMark", {
            enumerable: !1,
            get: function() {
                return this._writableState.highWaterMark
            }
        }),
        Object.defineProperty(u.prototype, "writableBuffer", {
            enumerable: !1,
            get: function() {
                return this._writableState && this._writableState.getBuffer()
            }
        }),
        Object.defineProperty(u.prototype, "writableLength", {
            enumerable: !1,
            get: function() {
                return this._writableState.length
            }
        }),
        Object.defineProperty(u.prototype, "destroyed", {
            enumerable: !1,
            get: function() {
                return void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed && this._writableState.destroyed)
            },
            set: function(e) {
                void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = e,
                this._writableState.destroyed = e)
            }
        })
    },
    70637: function(e, t, r) {
        "use strict";
        e.exports = s;
        var n = r(93685);
        function s(e) {
            if (!(this instanceof s))
                return new s(e);
            n.call(this, e)
        }
        r(67483)(s, n),
        s.prototype._transform = function(e, t, r) {
            r(null, e)
        }
    },
    40794: function(e, t, r) {
        "use strict";
        var n, s = r(73656);
        e.exports = R,
        R.ReadableState = S;
        r(47324).EventEmitter;
        var i = function(e, t) {
            return e.listeners(t).length
        }
          , o = r(61612)
          , a = r(15313).Buffer
          , c = ("undefined" !== typeof r.g ? r.g : "undefined" !== typeof window ? window : "undefined" !== typeof self ? self : {}).Uint8Array || function() {}
        ;
        var l, u = r(22810);
        l = u && u.debuglog ? u.debuglog("stream") : function() {}
        ;
        var d, h, f, p = r(68741), g = r(48045), m = r(36782).getHighWaterMark, _ = r(71936).q, b = _.ERR_INVALID_ARG_TYPE, y = _.ERR_STREAM_PUSH_AFTER_EOF, w = _.ERR_METHOD_NOT_IMPLEMENTED, v = _.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
        r(67483)(R, o);
        var E = g.errorOrDestroy
          , k = ["error", "close", "destroy", "pause", "resume"];
        function S(e, t, s) {
            n = n || r(23955),
            e = e || {},
            "boolean" !== typeof s && (s = t instanceof n),
            this.objectMode = !!e.objectMode,
            s && (this.objectMode = this.objectMode || !!e.readableObjectMode),
            this.highWaterMark = m(this, e, "readableHighWaterMark", s),
            this.buffer = new p,
            this.length = 0,
            this.pipes = null,
            this.pipesCount = 0,
            this.flowing = null,
            this.ended = !1,
            this.endEmitted = !1,
            this.reading = !1,
            this.sync = !0,
            this.needReadable = !1,
            this.emittedReadable = !1,
            this.readableListening = !1,
            this.resumeScheduled = !1,
            this.paused = !0,
            this.emitClose = !1 !== e.emitClose,
            this.autoDestroy = !!e.autoDestroy,
            this.destroyed = !1,
            this.defaultEncoding = e.defaultEncoding || "utf8",
            this.awaitDrain = 0,
            this.readingMore = !1,
            this.decoder = null,
            this.encoding = null,
            e.encoding && (d || (d = r(23457).s),
            this.decoder = new d(e.encoding),
            this.encoding = e.encoding)
        }
        function R(e) {
            if (n = n || r(23955),
            !(this instanceof R))
                return new R(e);
            var t = this instanceof n;
            this._readableState = new S(e,this,t),
            this.readable = !0,
            e && ("function" === typeof e.read && (this._read = e.read),
            "function" === typeof e.destroy && (this._destroy = e.destroy)),
            o.call(this)
        }
        function C(e, t, r, n, s) {
            l("readableAddChunk", t);
            var i, o = e._readableState;
            if (null === t)
                o.reading = !1,
                function(e, t) {
                    if (l("onEofChunk"),
                    t.ended)
                        return;
                    if (t.decoder) {
                        var r = t.decoder.end();
                        r && r.length && (t.buffer.push(r),
                        t.length += t.objectMode ? 1 : r.length)
                    }
                    t.ended = !0,
                    t.sync ? M(e) : (t.needReadable = !1,
                    t.emittedReadable || (t.emittedReadable = !0,
                    N(e)))
                }(e, o);
            else if (s || (i = function(e, t) {
                var r;
                n = t,
                a.isBuffer(n) || n instanceof c || "string" === typeof t || void 0 === t || e.objectMode || (r = new b("chunk",["string", "Buffer", "Uint8Array"],t));
                var n;
                return r
            }(o, t)),
            i)
                E(e, i);
            else if (o.objectMode || t && t.length > 0)
                if ("string" === typeof t || o.objectMode || Object.getPrototypeOf(t) === a.prototype || (t = function(e) {
                    return a.from(e)
                }(t)),
                n)
                    o.endEmitted ? E(e, new v) : I(e, o, t, !0);
                else if (o.ended)
                    E(e, new y);
                else {
                    if (o.destroyed)
                        return !1;
                    o.reading = !1,
                    o.decoder && !r ? (t = o.decoder.write(t),
                    o.objectMode || 0 !== t.length ? I(e, o, t, !1) : L(e, o)) : I(e, o, t, !1)
                }
            else
                n || (o.reading = !1,
                L(e, o));
            return !o.ended && (o.length < o.highWaterMark || 0 === o.length)
        }
        function I(e, t, r, n) {
            t.flowing && 0 === t.length && !t.sync ? (t.awaitDrain = 0,
            e.emit("data", r)) : (t.length += t.objectMode ? 1 : r.length,
            n ? t.buffer.unshift(r) : t.buffer.push(r),
            t.needReadable && M(e)),
            L(e, t)
        }
        Object.defineProperty(R.prototype, "destroyed", {
            enumerable: !1,
            get: function() {
                return void 0 !== this._readableState && this._readableState.destroyed
            },
            set: function(e) {
                this._readableState && (this._readableState.destroyed = e)
            }
        }),
        R.prototype.destroy = g.destroy,
        R.prototype._undestroy = g.undestroy,
        R.prototype._destroy = function(e, t) {
            t(e)
        }
        ,
        R.prototype.push = function(e, t) {
            var r, n = this._readableState;
            return n.objectMode ? r = !0 : "string" === typeof e && ((t = t || n.defaultEncoding) !== n.encoding && (e = a.from(e, t),
            t = ""),
            r = !0),
            C(this, e, t, !1, r)
        }
        ,
        R.prototype.unshift = function(e) {
            return C(this, e, null, !0, !1)
        }
        ,
        R.prototype.isPaused = function() {
            return !1 === this._readableState.flowing
        }
        ,
        R.prototype.setEncoding = function(e) {
            d || (d = r(23457).s);
            var t = new d(e);
            this._readableState.decoder = t,
            this._readableState.encoding = this._readableState.decoder.encoding;
            for (var n = this._readableState.buffer.head, s = ""; null !== n; )
                s += t.write(n.data),
                n = n.next;
            return this._readableState.buffer.clear(),
            "" !== s && this._readableState.buffer.push(s),
            this._readableState.length = s.length,
            this
        }
        ;
        var x = 1073741824;
        function A(e, t) {
            return e <= 0 || 0 === t.length && t.ended ? 0 : t.objectMode ? 1 : e !== e ? t.flowing && t.length ? t.buffer.head.data.length : t.length : (e > t.highWaterMark && (t.highWaterMark = function(e) {
                return e >= x ? e = x : (e--,
                e |= e >>> 1,
                e |= e >>> 2,
                e |= e >>> 4,
                e |= e >>> 8,
                e |= e >>> 16,
                e++),
                e
            }(e)),
            e <= t.length ? e : t.ended ? t.length : (t.needReadable = !0,
            0))
        }
        function M(e) {
            var t = e._readableState;
            l("emitReadable", t.needReadable, t.emittedReadable),
            t.needReadable = !1,
            t.emittedReadable || (l("emitReadable", t.flowing),
            t.emittedReadable = !0,
            s.nextTick(N, e))
        }
        function N(e) {
            var t = e._readableState;
            l("emitReadable_", t.destroyed, t.length, t.ended),
            t.destroyed || !t.length && !t.ended || (e.emit("readable"),
            t.emittedReadable = !1),
            t.needReadable = !t.flowing && !t.ended && t.length <= t.highWaterMark,
            B(e)
        }
        function L(e, t) {
            t.readingMore || (t.readingMore = !0,
            s.nextTick(T, e, t))
        }
        function T(e, t) {
            for (; !t.reading && !t.ended && (t.length < t.highWaterMark || t.flowing && 0 === t.length); ) {
                var r = t.length;
                if (l("maybeReadMore read 0"),
                e.read(0),
                r === t.length)
                    break
            }
            t.readingMore = !1
        }
        function P(e) {
            var t = e._readableState;
            t.readableListening = e.listenerCount("readable") > 0,
            t.resumeScheduled && !t.paused ? t.flowing = !0 : e.listenerCount("data") > 0 && e.resume()
        }
        function O(e) {
            l("readable nexttick read 0"),
            e.read(0)
        }
        function j(e, t) {
            l("resume", t.reading),
            t.reading || e.read(0),
            t.resumeScheduled = !1,
            e.emit("resume"),
            B(e),
            t.flowing && !t.reading && e.read(0)
        }
        function B(e) {
            var t = e._readableState;
            for (l("flow", t.flowing); t.flowing && null !== e.read(); )
                ;
        }
        function D(e, t) {
            return 0 === t.length ? null : (t.objectMode ? r = t.buffer.shift() : !e || e >= t.length ? (r = t.decoder ? t.buffer.join("") : 1 === t.buffer.length ? t.buffer.first() : t.buffer.concat(t.length),
            t.buffer.clear()) : r = t.buffer.consume(e, t.decoder),
            r);
            var r
        }
        function F(e) {
            var t = e._readableState;
            l("endReadable", t.endEmitted),
            t.endEmitted || (t.ended = !0,
            s.nextTick($, t, e))
        }
        function $(e, t) {
            if (l("endReadableNT", e.endEmitted, e.length),
            !e.endEmitted && 0 === e.length && (e.endEmitted = !0,
            t.readable = !1,
            t.emit("end"),
            e.autoDestroy)) {
                var r = t._writableState;
                (!r || r.autoDestroy && r.finished) && t.destroy()
            }
        }
        function U(e, t) {
            for (var r = 0, n = e.length; r < n; r++)
                if (e[r] === t)
                    return r;
            return -1
        }
        R.prototype.read = function(e) {
            l("read", e),
            e = parseInt(e, 10);
            var t = this._readableState
              , r = e;
            if (0 !== e && (t.emittedReadable = !1),
            0 === e && t.needReadable && ((0 !== t.highWaterMark ? t.length >= t.highWaterMark : t.length > 0) || t.ended))
                return l("read: emitReadable", t.length, t.ended),
                0 === t.length && t.ended ? F(this) : M(this),
                null;
            if (0 === (e = A(e, t)) && t.ended)
                return 0 === t.length && F(this),
                null;
            var n, s = t.needReadable;
            return l("need readable", s),
            (0 === t.length || t.length - e < t.highWaterMark) && l("length less than watermark", s = !0),
            t.ended || t.reading ? l("reading or ended", s = !1) : s && (l("do read"),
            t.reading = !0,
            t.sync = !0,
            0 === t.length && (t.needReadable = !0),
            this._read(t.highWaterMark),
            t.sync = !1,
            t.reading || (e = A(r, t))),
            null === (n = e > 0 ? D(e, t) : null) ? (t.needReadable = t.length <= t.highWaterMark,
            e = 0) : (t.length -= e,
            t.awaitDrain = 0),
            0 === t.length && (t.ended || (t.needReadable = !0),
            r !== e && t.ended && F(this)),
            null !== n && this.emit("data", n),
            n
        }
        ,
        R.prototype._read = function(e) {
            E(this, new w("_read()"))
        }
        ,
        R.prototype.pipe = function(e, t) {
            var r = this
              , n = this._readableState;
            switch (n.pipesCount) {
            case 0:
                n.pipes = e;
                break;
            case 1:
                n.pipes = [n.pipes, e];
                break;
            default:
                n.pipes.push(e)
            }
            n.pipesCount += 1,
            l("pipe count=%d opts=%j", n.pipesCount, t);
            var o = (!t || !1 !== t.end) && e !== s.stdout && e !== s.stderr ? c : m;
            function a(t, s) {
                l("onunpipe"),
                t === r && s && !1 === s.hasUnpiped && (s.hasUnpiped = !0,
                l("cleanup"),
                e.removeListener("close", p),
                e.removeListener("finish", g),
                e.removeListener("drain", u),
                e.removeListener("error", f),
                e.removeListener("unpipe", a),
                r.removeListener("end", c),
                r.removeListener("end", m),
                r.removeListener("data", h),
                d = !0,
                !n.awaitDrain || e._writableState && !e._writableState.needDrain || u())
            }
            function c() {
                l("onend"),
                e.end()
            }
            n.endEmitted ? s.nextTick(o) : r.once("end", o),
            e.on("unpipe", a);
            var u = function(e) {
                return function() {
                    var t = e._readableState;
                    l("pipeOnDrain", t.awaitDrain),
                    t.awaitDrain && t.awaitDrain--,
                    0 === t.awaitDrain && i(e, "data") && (t.flowing = !0,
                    B(e))
                }
            }(r);
            e.on("drain", u);
            var d = !1;
            function h(t) {
                l("ondata");
                var s = e.write(t);
                l("dest.write", s),
                !1 === s && ((1 === n.pipesCount && n.pipes === e || n.pipesCount > 1 && -1 !== U(n.pipes, e)) && !d && (l("false write response, pause", n.awaitDrain),
                n.awaitDrain++),
                r.pause())
            }
            function f(t) {
                l("onerror", t),
                m(),
                e.removeListener("error", f),
                0 === i(e, "error") && E(e, t)
            }
            function p() {
                e.removeListener("finish", g),
                m()
            }
            function g() {
                l("onfinish"),
                e.removeListener("close", p),
                m()
            }
            function m() {
                l("unpipe"),
                r.unpipe(e)
            }
            return r.on("data", h),
            function(e, t, r) {
                if ("function" === typeof e.prependListener)
                    return e.prependListener(t, r);
                e._events && e._events[t] ? Array.isArray(e._events[t]) ? e._events[t].unshift(r) : e._events[t] = [r, e._events[t]] : e.on(t, r)
            }(e, "error", f),
            e.once("close", p),
            e.once("finish", g),
            e.emit("pipe", r),
            n.flowing || (l("pipe resume"),
            r.resume()),
            e
        }
        ,
        R.prototype.unpipe = function(e) {
            var t = this._readableState
              , r = {
                hasUnpiped: !1
            };
            if (0 === t.pipesCount)
                return this;
            if (1 === t.pipesCount)
                return e && e !== t.pipes || (e || (e = t.pipes),
                t.pipes = null,
                t.pipesCount = 0,
                t.flowing = !1,
                e && e.emit("unpipe", this, r)),
                this;
            if (!e) {
                var n = t.pipes
                  , s = t.pipesCount;
                t.pipes = null,
                t.pipesCount = 0,
                t.flowing = !1;
                for (var i = 0; i < s; i++)
                    n[i].emit("unpipe", this, {
                        hasUnpiped: !1
                    });
                return this
            }
            var o = U(t.pipes, e);
            return -1 === o || (t.pipes.splice(o, 1),
            t.pipesCount -= 1,
            1 === t.pipesCount && (t.pipes = t.pipes[0]),
            e.emit("unpipe", this, r)),
            this
        }
        ,
        R.prototype.on = function(e, t) {
            var r = o.prototype.on.call(this, e, t)
              , n = this._readableState;
            return "data" === e ? (n.readableListening = this.listenerCount("readable") > 0,
            !1 !== n.flowing && this.resume()) : "readable" === e && (n.endEmitted || n.readableListening || (n.readableListening = n.needReadable = !0,
            n.flowing = !1,
            n.emittedReadable = !1,
            l("on readable", n.length, n.reading),
            n.length ? M(this) : n.reading || s.nextTick(O, this))),
            r
        }
        ,
        R.prototype.addListener = R.prototype.on,
        R.prototype.removeListener = function(e, t) {
            var r = o.prototype.removeListener.call(this, e, t);
            return "readable" === e && s.nextTick(P, this),
            r
        }
        ,
        R.prototype.removeAllListeners = function(e) {
            var t = o.prototype.removeAllListeners.apply(this, arguments);
            return "readable" !== e && void 0 !== e || s.nextTick(P, this),
            t
        }
        ,
        R.prototype.resume = function() {
            var e = this._readableState;
            return e.flowing || (l("resume"),
            e.flowing = !e.readableListening,
            function(e, t) {
                t.resumeScheduled || (t.resumeScheduled = !0,
                s.nextTick(j, e, t))
            }(this, e)),
            e.paused = !1,
            this
        }
        ,
        R.prototype.pause = function() {
            return l("call pause flowing=%j", this._readableState.flowing),
            !1 !== this._readableState.flowing && (l("pause"),
            this._readableState.flowing = !1,
            this.emit("pause")),
            this._readableState.paused = !0,
            this
        }
        ,
        R.prototype.wrap = function(e) {
            var t = this
              , r = this._readableState
              , n = !1;
            for (var s in e.on("end", (function() {
                if (l("wrapped end"),
                r.decoder && !r.ended) {
                    var e = r.decoder.end();
                    e && e.length && t.push(e)
                }
                t.push(null)
            }
            )),
            e.on("data", (function(s) {
                (l("wrapped data"),
                r.decoder && (s = r.decoder.write(s)),
                !r.objectMode || null !== s && void 0 !== s) && ((r.objectMode || s && s.length) && (t.push(s) || (n = !0,
                e.pause())))
            }
            )),
            e)
                void 0 === this[s] && "function" === typeof e[s] && (this[s] = function(t) {
                    return function() {
                        return e[t].apply(e, arguments)
                    }
                }(s));
            for (var i = 0; i < k.length; i++)
                e.on(k[i], this.emit.bind(this, k[i]));
            return this._read = function(t) {
                l("wrapped _read", t),
                n && (n = !1,
                e.resume())
            }
            ,
            this
        }
        ,
        "function" === typeof Symbol && (R.prototype[Symbol.asyncIterator] = function() {
            return void 0 === h && (h = r(21505)),
            h(this)
        }
        ),
        Object.defineProperty(R.prototype, "readableHighWaterMark", {
            enumerable: !1,
            get: function() {
                return this._readableState.highWaterMark
            }
        }),
        Object.defineProperty(R.prototype, "readableBuffer", {
            enumerable: !1,
            get: function() {
                return this._readableState && this._readableState.buffer
            }
        }),
        Object.defineProperty(R.prototype, "readableFlowing", {
            enumerable: !1,
            get: function() {
                return this._readableState.flowing
            },
            set: function(e) {
                this._readableState && (this._readableState.flowing = e)
            }
        }),
        R._fromList = D,
        Object.defineProperty(R.prototype, "readableLength", {
            enumerable: !1,
            get: function() {
                return this._readableState.length
            }
        }),
        "function" === typeof Symbol && (R.from = function(e, t) {
            return void 0 === f && (f = r(23913)),
            f(R, e, t)
        }
        )
    },
    93685: function(e, t, r) {
        "use strict";
        e.exports = u;
        var n = r(71936).q
          , s = n.ERR_METHOD_NOT_IMPLEMENTED
          , i = n.ERR_MULTIPLE_CALLBACK
          , o = n.ERR_TRANSFORM_ALREADY_TRANSFORMING
          , a = n.ERR_TRANSFORM_WITH_LENGTH_0
          , c = r(23955);
        function l(e, t) {
            var r = this._transformState;
            r.transforming = !1;
            var n = r.writecb;
            if (null === n)
                return this.emit("error", new i);
            r.writechunk = null,
            r.writecb = null,
            null != t && this.push(t),
            n(e);
            var s = this._readableState;
            s.reading = !1,
            (s.needReadable || s.length < s.highWaterMark) && this._read(s.highWaterMark)
        }
        function u(e) {
            if (!(this instanceof u))
                return new u(e);
            c.call(this, e),
            this._transformState = {
                afterTransform: l.bind(this),
                needTransform: !1,
                transforming: !1,
                writecb: null,
                writechunk: null,
                writeencoding: null
            },
            this._readableState.needReadable = !0,
            this._readableState.sync = !1,
            e && ("function" === typeof e.transform && (this._transform = e.transform),
            "function" === typeof e.flush && (this._flush = e.flush)),
            this.on("prefinish", d)
        }
        function d() {
            var e = this;
            "function" !== typeof this._flush || this._readableState.destroyed ? h(this, null, null) : this._flush((function(t, r) {
                h(e, t, r)
            }
            ))
        }
        function h(e, t, r) {
            if (t)
                return e.emit("error", t);
            if (null != r && e.push(r),
            e._writableState.length)
                throw new a;
            if (e._transformState.transforming)
                throw new o;
            return e.push(null)
        }
        r(67483)(u, c),
        u.prototype.push = function(e, t) {
            return this._transformState.needTransform = !1,
            c.prototype.push.call(this, e, t)
        }
        ,
        u.prototype._transform = function(e, t, r) {
            r(new s("_transform()"))
        }
        ,
        u.prototype._write = function(e, t, r) {
            var n = this._transformState;
            if (n.writecb = r,
            n.writechunk = e,
            n.writeencoding = t,
            !n.transforming) {
                var s = this._readableState;
                (n.needTransform || s.needReadable || s.length < s.highWaterMark) && this._read(s.highWaterMark)
            }
        }
        ,
        u.prototype._read = function(e) {
            var t = this._transformState;
            null === t.writechunk || t.transforming ? t.needTransform = !0 : (t.transforming = !0,
            this._transform(t.writechunk, t.writeencoding, t.afterTransform))
        }
        ,
        u.prototype._destroy = function(e, t) {
            c.prototype._destroy.call(this, e, (function(e) {
                t(e)
            }
            ))
        }
    },
    33216: function(e, t, r) {
        "use strict";
        var n, s = r(73656);
        function i(e) {
            var t = this;
            this.next = null,
            this.entry = null,
            this.finish = function() {
                !function(e, t, r) {
                    var n = e.entry;
                    e.entry = null;
                    for (; n; ) {
                        var s = n.callback;
                        t.pendingcb--,
                        s(r),
                        n = n.next
                    }
                    t.corkedRequestsFree.next = e
                }(t, e)
            }
        }
        e.exports = R,
        R.WritableState = S;
        var o = {
            deprecate: r(54012)
        }
          , a = r(61612)
          , c = r(15313).Buffer
          , l = ("undefined" !== typeof r.g ? r.g : "undefined" !== typeof window ? window : "undefined" !== typeof self ? self : {}).Uint8Array || function() {}
        ;
        var u, d = r(48045), h = r(36782).getHighWaterMark, f = r(71936).q, p = f.ERR_INVALID_ARG_TYPE, g = f.ERR_METHOD_NOT_IMPLEMENTED, m = f.ERR_MULTIPLE_CALLBACK, _ = f.ERR_STREAM_CANNOT_PIPE, b = f.ERR_STREAM_DESTROYED, y = f.ERR_STREAM_NULL_VALUES, w = f.ERR_STREAM_WRITE_AFTER_END, v = f.ERR_UNKNOWN_ENCODING, E = d.errorOrDestroy;
        function k() {}
        function S(e, t, o) {
            n = n || r(23955),
            e = e || {},
            "boolean" !== typeof o && (o = t instanceof n),
            this.objectMode = !!e.objectMode,
            o && (this.objectMode = this.objectMode || !!e.writableObjectMode),
            this.highWaterMark = h(this, e, "writableHighWaterMark", o),
            this.finalCalled = !1,
            this.needDrain = !1,
            this.ending = !1,
            this.ended = !1,
            this.finished = !1,
            this.destroyed = !1;
            var a = !1 === e.decodeStrings;
            this.decodeStrings = !a,
            this.defaultEncoding = e.defaultEncoding || "utf8",
            this.length = 0,
            this.writing = !1,
            this.corked = 0,
            this.sync = !0,
            this.bufferProcessing = !1,
            this.onwrite = function(e) {
                !function(e, t) {
                    var r = e._writableState
                      , n = r.sync
                      , i = r.writecb;
                    if ("function" !== typeof i)
                        throw new m;
                    if (function(e) {
                        e.writing = !1,
                        e.writecb = null,
                        e.length -= e.writelen,
                        e.writelen = 0
                    }(r),
                    t)
                        !function(e, t, r, n, i) {
                            --t.pendingcb,
                            r ? (s.nextTick(i, n),
                            s.nextTick(N, e, t),
                            e._writableState.errorEmitted = !0,
                            E(e, n)) : (i(n),
                            e._writableState.errorEmitted = !0,
                            E(e, n),
                            N(e, t))
                        }(e, r, n, t, i);
                    else {
                        var o = A(r) || e.destroyed;
                        o || r.corked || r.bufferProcessing || !r.bufferedRequest || x(e, r),
                        n ? s.nextTick(I, e, r, o, i) : I(e, r, o, i)
                    }
                }(t, e)
            }
            ,
            this.writecb = null,
            this.writelen = 0,
            this.bufferedRequest = null,
            this.lastBufferedRequest = null,
            this.pendingcb = 0,
            this.prefinished = !1,
            this.errorEmitted = !1,
            this.emitClose = !1 !== e.emitClose,
            this.autoDestroy = !!e.autoDestroy,
            this.bufferedRequestCount = 0,
            this.corkedRequestsFree = new i(this)
        }
        function R(e) {
            var t = this instanceof (n = n || r(23955));
            if (!t && !u.call(R, this))
                return new R(e);
            this._writableState = new S(e,this,t),
            this.writable = !0,
            e && ("function" === typeof e.write && (this._write = e.write),
            "function" === typeof e.writev && (this._writev = e.writev),
            "function" === typeof e.destroy && (this._destroy = e.destroy),
            "function" === typeof e.final && (this._final = e.final)),
            a.call(this)
        }
        function C(e, t, r, n, s, i, o) {
            t.writelen = n,
            t.writecb = o,
            t.writing = !0,
            t.sync = !0,
            t.destroyed ? t.onwrite(new b("write")) : r ? e._writev(s, t.onwrite) : e._write(s, i, t.onwrite),
            t.sync = !1
        }
        function I(e, t, r, n) {
            r || function(e, t) {
                0 === t.length && t.needDrain && (t.needDrain = !1,
                e.emit("drain"))
            }(e, t),
            t.pendingcb--,
            n(),
            N(e, t)
        }
        function x(e, t) {
            t.bufferProcessing = !0;
            var r = t.bufferedRequest;
            if (e._writev && r && r.next) {
                var n = t.bufferedRequestCount
                  , s = new Array(n)
                  , o = t.corkedRequestsFree;
                o.entry = r;
                for (var a = 0, c = !0; r; )
                    s[a] = r,
                    r.isBuf || (c = !1),
                    r = r.next,
                    a += 1;
                s.allBuffers = c,
                C(e, t, !0, t.length, s, "", o.finish),
                t.pendingcb++,
                t.lastBufferedRequest = null,
                o.next ? (t.corkedRequestsFree = o.next,
                o.next = null) : t.corkedRequestsFree = new i(t),
                t.bufferedRequestCount = 0
            } else {
                for (; r; ) {
                    var l = r.chunk
                      , u = r.encoding
                      , d = r.callback;
                    if (C(e, t, !1, t.objectMode ? 1 : l.length, l, u, d),
                    r = r.next,
                    t.bufferedRequestCount--,
                    t.writing)
                        break
                }
                null === r && (t.lastBufferedRequest = null)
            }
            t.bufferedRequest = r,
            t.bufferProcessing = !1
        }
        function A(e) {
            return e.ending && 0 === e.length && null === e.bufferedRequest && !e.finished && !e.writing
        }
        function M(e, t) {
            e._final((function(r) {
                t.pendingcb--,
                r && E(e, r),
                t.prefinished = !0,
                e.emit("prefinish"),
                N(e, t)
            }
            ))
        }
        function N(e, t) {
            var r = A(t);
            if (r && (function(e, t) {
                t.prefinished || t.finalCalled || ("function" !== typeof e._final || t.destroyed ? (t.prefinished = !0,
                e.emit("prefinish")) : (t.pendingcb++,
                t.finalCalled = !0,
                s.nextTick(M, e, t)))
            }(e, t),
            0 === t.pendingcb && (t.finished = !0,
            e.emit("finish"),
            t.autoDestroy))) {
                var n = e._readableState;
                (!n || n.autoDestroy && n.endEmitted) && e.destroy()
            }
            return r
        }
        r(67483)(R, a),
        S.prototype.getBuffer = function() {
            for (var e = this.bufferedRequest, t = []; e; )
                t.push(e),
                e = e.next;
            return t
        }
        ,
        function() {
            try {
                Object.defineProperty(S.prototype, "buffer", {
                    get: o.deprecate((function() {
                        return this.getBuffer()
                    }
                    ), "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
                })
            } catch (e) {}
        }(),
        "function" === typeof Symbol && Symbol.hasInstance && "function" === typeof Function.prototype[Symbol.hasInstance] ? (u = Function.prototype[Symbol.hasInstance],
        Object.defineProperty(R, Symbol.hasInstance, {
            value: function(e) {
                return !!u.call(this, e) || this === R && (e && e._writableState instanceof S)
            }
        })) : u = function(e) {
            return e instanceof this
        }
        ,
        R.prototype.pipe = function() {
            E(this, new _)
        }
        ,
        R.prototype.write = function(e, t, r) {
            var n, i = this._writableState, o = !1, a = !i.objectMode && (n = e,
            c.isBuffer(n) || n instanceof l);
            return a && !c.isBuffer(e) && (e = function(e) {
                return c.from(e)
            }(e)),
            "function" === typeof t && (r = t,
            t = null),
            a ? t = "buffer" : t || (t = i.defaultEncoding),
            "function" !== typeof r && (r = k),
            i.ending ? function(e, t) {
                var r = new w;
                E(e, r),
                s.nextTick(t, r)
            }(this, r) : (a || function(e, t, r, n) {
                var i;
                return null === r ? i = new y : "string" === typeof r || t.objectMode || (i = new p("chunk",["string", "Buffer"],r)),
                !i || (E(e, i),
                s.nextTick(n, i),
                !1)
            }(this, i, e, r)) && (i.pendingcb++,
            o = function(e, t, r, n, s, i) {
                if (!r) {
                    var o = function(e, t, r) {
                        e.objectMode || !1 === e.decodeStrings || "string" !== typeof t || (t = c.from(t, r));
                        return t
                    }(t, n, s);
                    n !== o && (r = !0,
                    s = "buffer",
                    n = o)
                }
                var a = t.objectMode ? 1 : n.length;
                t.length += a;
                var l = t.length < t.highWaterMark;
                l || (t.needDrain = !0);
                if (t.writing || t.corked) {
                    var u = t.lastBufferedRequest;
                    t.lastBufferedRequest = {
                        chunk: n,
                        encoding: s,
                        isBuf: r,
                        callback: i,
                        next: null
                    },
                    u ? u.next = t.lastBufferedRequest : t.bufferedRequest = t.lastBufferedRequest,
                    t.bufferedRequestCount += 1
                } else
                    C(e, t, !1, a, n, s, i);
                return l
            }(this, i, a, e, t, r)),
            o
        }
        ,
        R.prototype.cork = function() {
            this._writableState.corked++
        }
        ,
        R.prototype.uncork = function() {
            var e = this._writableState;
            e.corked && (e.corked--,
            e.writing || e.corked || e.bufferProcessing || !e.bufferedRequest || x(this, e))
        }
        ,
        R.prototype.setDefaultEncoding = function(e) {
            if ("string" === typeof e && (e = e.toLowerCase()),
            !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e + "").toLowerCase()) > -1))
                throw new v(e);
            return this._writableState.defaultEncoding = e,
            this
        }
        ,
        Object.defineProperty(R.prototype, "writableBuffer", {
            enumerable: !1,
            get: function() {
                return this._writableState && this._writableState.getBuffer()
            }
        }),
        Object.defineProperty(R.prototype, "writableHighWaterMark", {
            enumerable: !1,
            get: function() {
                return this._writableState.highWaterMark
            }
        }),
        R.prototype._write = function(e, t, r) {
            r(new g("_write()"))
        }
        ,
        R.prototype._writev = null,
        R.prototype.end = function(e, t, r) {
            var n = this._writableState;
            return "function" === typeof e ? (r = e,
            e = null,
            t = null) : "function" === typeof t && (r = t,
            t = null),
            null !== e && void 0 !== e && this.write(e, t),
            n.corked && (n.corked = 1,
            this.uncork()),
            n.ending || function(e, t, r) {
                t.ending = !0,
                N(e, t),
                r && (t.finished ? s.nextTick(r) : e.once("finish", r));
                t.ended = !0,
                e.writable = !1
            }(this, n, r),
            this
        }
        ,
        Object.defineProperty(R.prototype, "writableLength", {
            enumerable: !1,
            get: function() {
                return this._writableState.length
            }
        }),
        Object.defineProperty(R.prototype, "destroyed", {
            enumerable: !1,
            get: function() {
                return void 0 !== this._writableState && this._writableState.destroyed
            },
            set: function(e) {
                this._writableState && (this._writableState.destroyed = e)
            }
        }),
        R.prototype.destroy = d.destroy,
        R.prototype._undestroy = d.undestroy,
        R.prototype._destroy = function(e, t) {
            t(e)
        }
    },
    21505: function(e, t, r) {
        "use strict";
        var n, s = r(73656);
        function i(e, t, r) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" !== typeof e || null === e)
                        return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" !== typeof n)
                            return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" === typeof t ? t : String(t)
            }(t))in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        var o = r(3825)
          , a = Symbol("lastResolve")
          , c = Symbol("lastReject")
          , l = Symbol("error")
          , u = Symbol("ended")
          , d = Symbol("lastPromise")
          , h = Symbol("handlePromise")
          , f = Symbol("stream");
        function p(e, t) {
            return {
                value: e,
                done: t
            }
        }
        function g(e) {
            var t = e[a];
            if (null !== t) {
                var r = e[f].read();
                null !== r && (e[d] = null,
                e[a] = null,
                e[c] = null,
                t(p(r, !1)))
            }
        }
        function m(e) {
            s.nextTick(g, e)
        }
        var _ = Object.getPrototypeOf((function() {}
        ))
          , b = Object.setPrototypeOf((i(n = {
            get stream() {
                return this[f]
            },
            next: function() {
                var e = this
                  , t = this[l];
                if (null !== t)
                    return Promise.reject(t);
                if (this[u])
                    return Promise.resolve(p(void 0, !0));
                if (this[f].destroyed)
                    return new Promise((function(t, r) {
                        s.nextTick((function() {
                            e[l] ? r(e[l]) : t(p(void 0, !0))
                        }
                        ))
                    }
                    ));
                var r, n = this[d];
                if (n)
                    r = new Promise(function(e, t) {
                        return function(r, n) {
                            e.then((function() {
                                t[u] ? r(p(void 0, !0)) : t[h](r, n)
                            }
                            ), n)
                        }
                    }(n, this));
                else {
                    var i = this[f].read();
                    if (null !== i)
                        return Promise.resolve(p(i, !1));
                    r = new Promise(this[h])
                }
                return this[d] = r,
                r
            }
        }, Symbol.asyncIterator, (function() {
            return this
        }
        )),
        i(n, "return", (function() {
            var e = this;
            return new Promise((function(t, r) {
                e[f].destroy(null, (function(e) {
                    e ? r(e) : t(p(void 0, !0))
                }
                ))
            }
            ))
        }
        )),
        n), _);
        e.exports = function(e) {
            var t, r = Object.create(b, (i(t = {}, f, {
                value: e,
                writable: !0
            }),
            i(t, a, {
                value: null,
                writable: !0
            }),
            i(t, c, {
                value: null,
                writable: !0
            }),
            i(t, l, {
                value: null,
                writable: !0
            }),
            i(t, u, {
                value: e._readableState.endEmitted,
                writable: !0
            }),
            i(t, h, {
                value: function(e, t) {
                    var n = r[f].read();
                    n ? (r[d] = null,
                    r[a] = null,
                    r[c] = null,
                    e(p(n, !1))) : (r[a] = e,
                    r[c] = t)
                },
                writable: !0
            }),
            t));
            return r[d] = null,
            o(e, (function(e) {
                if (e && "ERR_STREAM_PREMATURE_CLOSE" !== e.code) {
                    var t = r[c];
                    return null !== t && (r[d] = null,
                    r[a] = null,
                    r[c] = null,
                    t(e)),
                    void (r[l] = e)
                }
                var n = r[a];
                null !== n && (r[d] = null,
                r[a] = null,
                r[c] = null,
                n(p(void 0, !0))),
                r[u] = !0
            }
            )),
            e.on("readable", m.bind(null, r)),
            r
        }
    },
    68741: function(e, t, r) {
        "use strict";
        function n(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                r.push.apply(r, n)
            }
            return r
        }
        function s(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? n(Object(r), !0).forEach((function(t) {
                    i(e, t, r[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }
                ))
            }
            return e
        }
        function i(e, t, r) {
            return (t = a(t))in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        function o(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, a(n.key), n)
            }
        }
        function a(e) {
            var t = function(e, t) {
                if ("object" !== typeof e || null === e)
                    return e;
                var r = e[Symbol.toPrimitive];
                if (void 0 !== r) {
                    var n = r.call(e, t || "default");
                    if ("object" !== typeof n)
                        return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === typeof t ? t : String(t)
        }
        var c = r(15313).Buffer
          , l = r(15325).inspect
          , u = l && l.custom || "inspect";
        e.exports = function() {
            function e() {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                this.head = null,
                this.tail = null,
                this.length = 0
            }
            var t, r, n;
            return t = e,
            (r = [{
                key: "push",
                value: function(e) {
                    var t = {
                        data: e,
                        next: null
                    };
                    this.length > 0 ? this.tail.next = t : this.head = t,
                    this.tail = t,
                    ++this.length
                }
            }, {
                key: "unshift",
                value: function(e) {
                    var t = {
                        data: e,
                        next: this.head
                    };
                    0 === this.length && (this.tail = t),
                    this.head = t,
                    ++this.length
                }
            }, {
                key: "shift",
                value: function() {
                    if (0 !== this.length) {
                        var e = this.head.data;
                        return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next,
                        --this.length,
                        e
                    }
                }
            }, {
                key: "clear",
                value: function() {
                    this.head = this.tail = null,
                    this.length = 0
                }
            }, {
                key: "join",
                value: function(e) {
                    if (0 === this.length)
                        return "";
                    for (var t = this.head, r = "" + t.data; t = t.next; )
                        r += e + t.data;
                    return r
                }
            }, {
                key: "concat",
                value: function(e) {
                    if (0 === this.length)
                        return c.alloc(0);
                    for (var t, r, n, s = c.allocUnsafe(e >>> 0), i = this.head, o = 0; i; )
                        t = i.data,
                        r = s,
                        n = o,
                        c.prototype.copy.call(t, r, n),
                        o += i.data.length,
                        i = i.next;
                    return s
                }
            }, {
                key: "consume",
                value: function(e, t) {
                    var r;
                    return e < this.head.data.length ? (r = this.head.data.slice(0, e),
                    this.head.data = this.head.data.slice(e)) : r = e === this.head.data.length ? this.shift() : t ? this._getString(e) : this._getBuffer(e),
                    r
                }
            }, {
                key: "first",
                value: function() {
                    return this.head.data
                }
            }, {
                key: "_getString",
                value: function(e) {
                    var t = this.head
                      , r = 1
                      , n = t.data;
                    for (e -= n.length; t = t.next; ) {
                        var s = t.data
                          , i = e > s.length ? s.length : e;
                        if (i === s.length ? n += s : n += s.slice(0, e),
                        0 === (e -= i)) {
                            i === s.length ? (++r,
                            t.next ? this.head = t.next : this.head = this.tail = null) : (this.head = t,
                            t.data = s.slice(i));
                            break
                        }
                        ++r
                    }
                    return this.length -= r,
                    n
                }
            }, {
                key: "_getBuffer",
                value: function(e) {
                    var t = c.allocUnsafe(e)
                      , r = this.head
                      , n = 1;
                    for (r.data.copy(t),
                    e -= r.data.length; r = r.next; ) {
                        var s = r.data
                          , i = e > s.length ? s.length : e;
                        if (s.copy(t, t.length - e, 0, i),
                        0 === (e -= i)) {
                            i === s.length ? (++n,
                            r.next ? this.head = r.next : this.head = this.tail = null) : (this.head = r,
                            r.data = s.slice(i));
                            break
                        }
                        ++n
                    }
                    return this.length -= n,
                    t
                }
            }, {
                key: u,
                value: function(e, t) {
                    return l(this, s(s({}, t), {}, {
                        depth: 0,
                        customInspect: !1
                    }))
                }
            }]) && o(t.prototype, r),
            n && o(t, n),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            e
        }()
    },
    48045: function(e, t, r) {
        "use strict";
        var n = r(73656);
        function s(e, t) {
            o(e, t),
            i(e)
        }
        function i(e) {
            e._writableState && !e._writableState.emitClose || e._readableState && !e._readableState.emitClose || e.emit("close")
        }
        function o(e, t) {
            e.emit("error", t)
        }
        e.exports = {
            destroy: function(e, t) {
                var r = this
                  , a = this._readableState && this._readableState.destroyed
                  , c = this._writableState && this._writableState.destroyed;
                return a || c ? (t ? t(e) : e && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = !0,
                n.nextTick(o, this, e)) : n.nextTick(o, this, e)),
                this) : (this._readableState && (this._readableState.destroyed = !0),
                this._writableState && (this._writableState.destroyed = !0),
                this._destroy(e || null, (function(e) {
                    !t && e ? r._writableState ? r._writableState.errorEmitted ? n.nextTick(i, r) : (r._writableState.errorEmitted = !0,
                    n.nextTick(s, r, e)) : n.nextTick(s, r, e) : t ? (n.nextTick(i, r),
                    t(e)) : n.nextTick(i, r)
                }
                )),
                this)
            },
            undestroy: function() {
                this._readableState && (this._readableState.destroyed = !1,
                this._readableState.reading = !1,
                this._readableState.ended = !1,
                this._readableState.endEmitted = !1),
                this._writableState && (this._writableState.destroyed = !1,
                this._writableState.ended = !1,
                this._writableState.ending = !1,
                this._writableState.finalCalled = !1,
                this._writableState.prefinished = !1,
                this._writableState.finished = !1,
                this._writableState.errorEmitted = !1)
            },
            errorOrDestroy: function(e, t) {
                var r = e._readableState
                  , n = e._writableState;
                r && r.autoDestroy || n && n.autoDestroy ? e.destroy(t) : e.emit("error", t)
            }
        }
    },
    3825: function(e, t, r) {
        "use strict";
        var n = r(71936).q.ERR_STREAM_PREMATURE_CLOSE;
        function s() {}
        e.exports = function e(t, r, i) {
            if ("function" === typeof r)
                return e(t, null, r);
            r || (r = {}),
            i = function(e) {
                var t = !1;
                return function() {
                    if (!t) {
                        t = !0;
                        for (var r = arguments.length, n = new Array(r), s = 0; s < r; s++)
                            n[s] = arguments[s];
                        e.apply(this, n)
                    }
                }
            }(i || s);
            var o = r.readable || !1 !== r.readable && t.readable
              , a = r.writable || !1 !== r.writable && t.writable
              , c = function() {
                t.writable || u()
            }
              , l = t._writableState && t._writableState.finished
              , u = function() {
                a = !1,
                l = !0,
                o || i.call(t)
            }
              , d = t._readableState && t._readableState.endEmitted
              , h = function() {
                o = !1,
                d = !0,
                a || i.call(t)
            }
              , f = function(e) {
                i.call(t, e)
            }
              , p = function() {
                var e;
                return o && !d ? (t._readableState && t._readableState.ended || (e = new n),
                i.call(t, e)) : a && !l ? (t._writableState && t._writableState.ended || (e = new n),
                i.call(t, e)) : void 0
            }
              , g = function() {
                t.req.on("finish", u)
            };
            return !function(e) {
                return e.setHeader && "function" === typeof e.abort
            }(t) ? a && !t._writableState && (t.on("end", c),
            t.on("close", c)) : (t.on("complete", u),
            t.on("abort", p),
            t.req ? g() : t.on("request", g)),
            t.on("end", h),
            t.on("finish", u),
            !1 !== r.error && t.on("error", f),
            t.on("close", p),
            function() {
                t.removeListener("complete", u),
                t.removeListener("abort", p),
                t.removeListener("request", g),
                t.req && t.req.removeListener("finish", u),
                t.removeListener("end", c),
                t.removeListener("close", c),
                t.removeListener("finish", u),
                t.removeListener("end", h),
                t.removeListener("error", f),
                t.removeListener("close", p)
            }
        }
    },
    23913: function(e) {
        e.exports = function() {
            throw new Error("Readable.from is not available in the browser")
        }
    },
    3599: function(e, t, r) {
        "use strict";
        var n;
        var s = r(71936).q
          , i = s.ERR_MISSING_ARGS
          , o = s.ERR_STREAM_DESTROYED;
        function a(e) {
            if (e)
                throw e
        }
        function c(e) {
            e()
        }
        function l(e, t) {
            return e.pipe(t)
        }
        e.exports = function() {
            for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
                t[s] = arguments[s];
            var u, d = function(e) {
                return e.length ? "function" !== typeof e[e.length - 1] ? a : e.pop() : a
            }(t);
            if (Array.isArray(t[0]) && (t = t[0]),
            t.length < 2)
                throw new i("streams");
            var h = t.map((function(e, s) {
                var i = s < t.length - 1;
                return function(e, t, s, i) {
                    i = function(e) {
                        var t = !1;
                        return function() {
                            t || (t = !0,
                            e.apply(void 0, arguments))
                        }
                    }(i);
                    var a = !1;
                    e.on("close", (function() {
                        a = !0
                    }
                    )),
                    void 0 === n && (n = r(3825)),
                    n(e, {
                        readable: t,
                        writable: s
                    }, (function(e) {
                        if (e)
                            return i(e);
                        a = !0,
                        i()
                    }
                    ));
                    var c = !1;
                    return function(t) {
                        if (!a && !c)
                            return c = !0,
                            function(e) {
                                return e.setHeader && "function" === typeof e.abort
                            }(e) ? e.abort() : "function" === typeof e.destroy ? e.destroy() : void i(t || new o("pipe"))
                    }
                }(e, i, s > 0, (function(e) {
                    u || (u = e),
                    e && h.forEach(c),
                    i || (h.forEach(c),
                    d(u))
                }
                ))
            }
            ));
            return t.reduce(l)
        }
    },
    36782: function(e, t, r) {
        "use strict";
        var n = r(71936).q.ERR_INVALID_OPT_VALUE;
        e.exports = {
            getHighWaterMark: function(e, t, r, s) {
                var i = function(e, t, r) {
                    return null != e.highWaterMark ? e.highWaterMark : t ? e[r] : null
                }(t, s, r);
                if (null != i) {
                    if (!isFinite(i) || Math.floor(i) !== i || i < 0)
                        throw new n(s ? r : "highWaterMark",i);
                    return Math.floor(i)
                }
                return e.objectMode ? 16 : 16384
            }
        }
    },
    61612: function(e, t, r) {
        e.exports = r(47324).EventEmitter
    },
    28699: function(e, t, r) {
        (t = e.exports = r(40794)).Stream = t,
        t.Readable = t,
        t.Writable = r(33216),
        t.Duplex = r(23955),
        t.Transform = r(93685),
        t.PassThrough = r(70637),
        t.finished = r(3825),
        t.pipeline = r(3599)
    },
    21607: function(e, t, r) {
        var n = r(15313)
          , s = n.Buffer;
        function i(e, t) {
            for (var r in e)
                t[r] = e[r]
        }
        function o(e, t, r) {
            return s(e, t, r)
        }
        s.from && s.alloc && s.allocUnsafe && s.allocUnsafeSlow ? e.exports = n : (i(n, t),
        t.Buffer = o),
        o.prototype = Object.create(s.prototype),
        i(s, o),
        o.from = function(e, t, r) {
            if ("number" === typeof e)
                throw new TypeError("Argument must not be a number");
            return s(e, t, r)
        }
        ,
        o.alloc = function(e, t, r) {
            if ("number" !== typeof e)
                throw new TypeError("Argument must be a number");
            var n = s(e);
            return void 0 !== t ? "string" === typeof r ? n.fill(t, r) : n.fill(t) : n.fill(0),
            n
        }
        ,
        o.allocUnsafe = function(e) {
            if ("number" !== typeof e)
                throw new TypeError("Argument must be a number");
            return s(e)
        }
        ,
        o.allocUnsafeSlow = function(e) {
            if ("number" !== typeof e)
                throw new TypeError("Argument must be a number");
            return n.SlowBuffer(e)
        }
    },
    41896: function(e, t, r) {
        const n = Symbol("SemVer ANY");
        class s {
            static get ANY() {
                return n
            }
            constructor(e, t) {
                if (t = i(t),
                e instanceof s) {
                    if (e.loose === !!t.loose)
                        return e;
                    e = e.value
                }
                e = e.trim().split(/\s+/).join(" "),
                l("comparator", e, t),
                this.options = t,
                this.loose = !!t.loose,
                this.parse(e),
                this.semver === n ? this.value = "" : this.value = this.operator + this.semver.version,
                l("comp", this)
            }
            parse(e) {
                const t = this.options.loose ? o[a.COMPARATORLOOSE] : o[a.COMPARATOR]
                  , r = e.match(t);
                if (!r)
                    throw new TypeError(`Invalid comparator: ${e}`);
                this.operator = void 0 !== r[1] ? r[1] : "",
                "=" === this.operator && (this.operator = ""),
                r[2] ? this.semver = new u(r[2],this.options.loose) : this.semver = n
            }
            toString() {
                return this.value
            }
            test(e) {
                if (l("Comparator.test", e, this.options.loose),
                this.semver === n || e === n)
                    return !0;
                if ("string" === typeof e)
                    try {
                        e = new u(e,this.options)
                    } catch (t) {
                        return !1
                    }
                return c(e, this.operator, this.semver, this.options)
            }
            intersects(e, t) {
                if (!(e instanceof s))
                    throw new TypeError("a Comparator is required");
                return "" === this.operator ? "" === this.value || new d(e.value,t).test(this.value) : "" === e.operator ? "" === e.value || new d(this.value,t).test(e.semver) : (!(t = i(t)).includePrerelease || "<0.0.0-0" !== this.value && "<0.0.0-0" !== e.value) && (!(!t.includePrerelease && (this.value.startsWith("<0.0.0") || e.value.startsWith("<0.0.0"))) && (!(!this.operator.startsWith(">") || !e.operator.startsWith(">")) || (!(!this.operator.startsWith("<") || !e.operator.startsWith("<")) || (!(this.semver.version !== e.semver.version || !this.operator.includes("=") || !e.operator.includes("=")) || (!!(c(this.semver, "<", e.semver, t) && this.operator.startsWith(">") && e.operator.startsWith("<")) || !!(c(this.semver, ">", e.semver, t) && this.operator.startsWith("<") && e.operator.startsWith(">")))))))
            }
        }
        e.exports = s;
        const i = r(11296)
          , {safeRe: o, t: a} = r(63573)
          , c = r(8176)
          , l = r(49175)
          , u = r(7742)
          , d = r(33957)
    },
    33957: function(e, t, r) {
        class n {
            constructor(e, t) {
                if (t = i(t),
                e instanceof n)
                    return e.loose === !!t.loose && e.includePrerelease === !!t.includePrerelease ? e : new n(e.raw,t);
                if (e instanceof o)
                    return this.raw = e.value,
                    this.set = [[e]],
                    this.format(),
                    this;
                if (this.options = t,
                this.loose = !!t.loose,
                this.includePrerelease = !!t.includePrerelease,
                this.raw = e.trim().split(/\s+/).join(" "),
                this.set = this.raw.split("||").map((e=>this.parseRange(e.trim()))).filter((e=>e.length)),
                !this.set.length)
                    throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
                if (this.set.length > 1) {
                    const e = this.set[0];
                    if (this.set = this.set.filter((e=>!m(e[0]))),
                    0 === this.set.length)
                        this.set = [e];
                    else if (this.set.length > 1)
                        for (const t of this.set)
                            if (1 === t.length && _(t[0])) {
                                this.set = [t];
                                break
                            }
                }
                this.format()
            }
            format() {
                return this.range = this.set.map((e=>e.join(" ").trim())).join("||").trim(),
                this.range
            }
            toString() {
                return this.range
            }
            parseRange(e) {
                const t = ((this.options.includePrerelease && p) | (this.options.loose && g)) + ":" + e
                  , r = s.get(t);
                if (r)
                    return r;
                const n = this.options.loose
                  , i = n ? l[u.HYPHENRANGELOOSE] : l[u.HYPHENRANGE];
                e = e.replace(i, A(this.options.includePrerelease)),
                a("hyphen replace", e),
                e = e.replace(l[u.COMPARATORTRIM], d),
                a("comparator trim", e),
                e = e.replace(l[u.TILDETRIM], h),
                a("tilde trim", e),
                e = e.replace(l[u.CARETTRIM], f),
                a("caret trim", e);
                let c = e.split(" ").map((e=>y(e, this.options))).join(" ").split(/\s+/).map((e=>x(e, this.options)));
                n && (c = c.filter((e=>(a("loose invalid filter", e, this.options),
                !!e.match(l[u.COMPARATORLOOSE]))))),
                a("range list", c);
                const _ = new Map
                  , b = c.map((e=>new o(e,this.options)));
                for (const s of b) {
                    if (m(s))
                        return [s];
                    _.set(s.value, s)
                }
                _.size > 1 && _.has("") && _.delete("");
                const w = [..._.values()];
                return s.set(t, w),
                w
            }
            intersects(e, t) {
                if (!(e instanceof n))
                    throw new TypeError("a Range is required");
                return this.set.some((r=>b(r, t) && e.set.some((e=>b(e, t) && r.every((r=>e.every((e=>r.intersects(e, t)))))))))
            }
            test(e) {
                if (!e)
                    return !1;
                if ("string" === typeof e)
                    try {
                        e = new c(e,this.options)
                    } catch (t) {
                        return !1
                    }
                for (let r = 0; r < this.set.length; r++)
                    if (M(this.set[r], e, this.options))
                        return !0;
                return !1
            }
        }
        e.exports = n;
        const s = new (r(29416))({
            max: 1e3
        })
          , i = r(11296)
          , o = r(41896)
          , a = r(49175)
          , c = r(7742)
          , {safeRe: l, t: u, comparatorTrimReplace: d, tildeTrimReplace: h, caretTrimReplace: f} = r(63573)
          , {FLAG_INCLUDE_PRERELEASE: p, FLAG_LOOSE: g} = r(11321)
          , m = e=>"<0.0.0-0" === e.value
          , _ = e=>"" === e.value
          , b = (e,t)=>{
            let r = !0;
            const n = e.slice();
            let s = n.pop();
            for (; r && n.length; )
                r = n.every((e=>s.intersects(e, t))),
                s = n.pop();
            return r
        }
          , y = (e,t)=>(a("comp", e, t),
        e = k(e, t),
        a("caret", e),
        e = v(e, t),
        a("tildes", e),
        e = R(e, t),
        a("xrange", e),
        e = I(e, t),
        a("stars", e),
        e)
          , w = e=>!e || "x" === e.toLowerCase() || "*" === e
          , v = (e,t)=>e.trim().split(/\s+/).map((e=>E(e, t))).join(" ")
          , E = (e,t)=>{
            const r = t.loose ? l[u.TILDELOOSE] : l[u.TILDE];
            return e.replace(r, ((t,r,n,s,i)=>{
                let o;
                return a("tilde", e, t, r, n, s, i),
                w(r) ? o = "" : w(n) ? o = `>=${r}.0.0 <${+r + 1}.0.0-0` : w(s) ? o = `>=${r}.${n}.0 <${r}.${+n + 1}.0-0` : i ? (a("replaceTilde pr", i),
                o = `>=${r}.${n}.${s}-${i} <${r}.${+n + 1}.0-0`) : o = `>=${r}.${n}.${s} <${r}.${+n + 1}.0-0`,
                a("tilde return", o),
                o
            }
            ))
        }
          , k = (e,t)=>e.trim().split(/\s+/).map((e=>S(e, t))).join(" ")
          , S = (e,t)=>{
            a("caret", e, t);
            const r = t.loose ? l[u.CARETLOOSE] : l[u.CARET]
              , n = t.includePrerelease ? "-0" : "";
            return e.replace(r, ((t,r,s,i,o)=>{
                let c;
                return a("caret", e, t, r, s, i, o),
                w(r) ? c = "" : w(s) ? c = `>=${r}.0.0${n} <${+r + 1}.0.0-0` : w(i) ? c = "0" === r ? `>=${r}.${s}.0${n} <${r}.${+s + 1}.0-0` : `>=${r}.${s}.0${n} <${+r + 1}.0.0-0` : o ? (a("replaceCaret pr", o),
                c = "0" === r ? "0" === s ? `>=${r}.${s}.${i}-${o} <${r}.${s}.${+i + 1}-0` : `>=${r}.${s}.${i}-${o} <${r}.${+s + 1}.0-0` : `>=${r}.${s}.${i}-${o} <${+r + 1}.0.0-0`) : (a("no pr"),
                c = "0" === r ? "0" === s ? `>=${r}.${s}.${i}${n} <${r}.${s}.${+i + 1}-0` : `>=${r}.${s}.${i}${n} <${r}.${+s + 1}.0-0` : `>=${r}.${s}.${i} <${+r + 1}.0.0-0`),
                a("caret return", c),
                c
            }
            ))
        }
          , R = (e,t)=>(a("replaceXRanges", e, t),
        e.split(/\s+/).map((e=>C(e, t))).join(" "))
          , C = (e,t)=>{
            e = e.trim();
            const r = t.loose ? l[u.XRANGELOOSE] : l[u.XRANGE];
            return e.replace(r, ((r,n,s,i,o,c)=>{
                a("xRange", e, r, n, s, i, o, c);
                const l = w(s)
                  , u = l || w(i)
                  , d = u || w(o)
                  , h = d;
                return "=" === n && h && (n = ""),
                c = t.includePrerelease ? "-0" : "",
                l ? r = ">" === n || "<" === n ? "<0.0.0-0" : "*" : n && h ? (u && (i = 0),
                o = 0,
                ">" === n ? (n = ">=",
                u ? (s = +s + 1,
                i = 0,
                o = 0) : (i = +i + 1,
                o = 0)) : "<=" === n && (n = "<",
                u ? s = +s + 1 : i = +i + 1),
                "<" === n && (c = "-0"),
                r = `${n + s}.${i}.${o}${c}`) : u ? r = `>=${s}.0.0${c} <${+s + 1}.0.0-0` : d && (r = `>=${s}.${i}.0${c} <${s}.${+i + 1}.0-0`),
                a("xRange return", r),
                r
            }
            ))
        }
          , I = (e,t)=>(a("replaceStars", e, t),
        e.trim().replace(l[u.STAR], ""))
          , x = (e,t)=>(a("replaceGTE0", e, t),
        e.trim().replace(l[t.includePrerelease ? u.GTE0PRE : u.GTE0], ""))
          , A = e=>(t,r,n,s,i,o,a,c,l,u,d,h,f)=>`${r = w(n) ? "" : w(s) ? `>=${n}.0.0${e ? "-0" : ""}` : w(i) ? `>=${n}.${s}.0${e ? "-0" : ""}` : o ? `>=${r}` : `>=${r}${e ? "-0" : ""}`} ${c = w(l) ? "" : w(u) ? `<${+l + 1}.0.0-0` : w(d) ? `<${l}.${+u + 1}.0-0` : h ? `<=${l}.${u}.${d}-${h}` : e ? `<${l}.${u}.${+d + 1}-0` : `<=${c}`}`.trim()
          , M = (e,t,r)=>{
            for (let n = 0; n < e.length; n++)
                if (!e[n].test(t))
                    return !1;
            if (t.prerelease.length && !r.includePrerelease) {
                for (let r = 0; r < e.length; r++)
                    if (a(e[r].semver),
                    e[r].semver !== o.ANY && e[r].semver.prerelease.length > 0) {
                        const n = e[r].semver;
                        if (n.major === t.major && n.minor === t.minor && n.patch === t.patch)
                            return !0
                    }
                return !1
            }
            return !0
        }
    },
    7742: function(e, t, r) {
        const n = r(49175)
          , {MAX_LENGTH: s, MAX_SAFE_INTEGER: i} = r(11321)
          , {safeRe: o, t: a} = r(63573)
          , c = r(11296)
          , {compareIdentifiers: l} = r(9029);
        class u {
            constructor(e, t) {
                if (t = c(t),
                e instanceof u) {
                    if (e.loose === !!t.loose && e.includePrerelease === !!t.includePrerelease)
                        return e;
                    e = e.version
                } else if ("string" !== typeof e)
                    throw new TypeError(`Invalid version. Must be a string. Got type "${typeof e}".`);
                if (e.length > s)
                    throw new TypeError(`version is longer than ${s} characters`);
                n("SemVer", e, t),
                this.options = t,
                this.loose = !!t.loose,
                this.includePrerelease = !!t.includePrerelease;
                const r = e.trim().match(t.loose ? o[a.LOOSE] : o[a.FULL]);
                if (!r)
                    throw new TypeError(`Invalid Version: ${e}`);
                if (this.raw = e,
                this.major = +r[1],
                this.minor = +r[2],
                this.patch = +r[3],
                this.major > i || this.major < 0)
                    throw new TypeError("Invalid major version");
                if (this.minor > i || this.minor < 0)
                    throw new TypeError("Invalid minor version");
                if (this.patch > i || this.patch < 0)
                    throw new TypeError("Invalid patch version");
                r[4] ? this.prerelease = r[4].split(".").map((e=>{
                    if (/^[0-9]+$/.test(e)) {
                        const t = +e;
                        if (t >= 0 && t < i)
                            return t
                    }
                    return e
                }
                )) : this.prerelease = [],
                this.build = r[5] ? r[5].split(".") : [],
                this.format()
            }
            format() {
                return this.version = `${this.major}.${this.minor}.${this.patch}`,
                this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`),
                this.version
            }
            toString() {
                return this.version
            }
            compare(e) {
                if (n("SemVer.compare", this.version, this.options, e),
                !(e instanceof u)) {
                    if ("string" === typeof e && e === this.version)
                        return 0;
                    e = new u(e,this.options)
                }
                return e.version === this.version ? 0 : this.compareMain(e) || this.comparePre(e)
            }
            compareMain(e) {
                return e instanceof u || (e = new u(e,this.options)),
                l(this.major, e.major) || l(this.minor, e.minor) || l(this.patch, e.patch)
            }
            comparePre(e) {
                if (e instanceof u || (e = new u(e,this.options)),
                this.prerelease.length && !e.prerelease.length)
                    return -1;
                if (!this.prerelease.length && e.prerelease.length)
                    return 1;
                if (!this.prerelease.length && !e.prerelease.length)
                    return 0;
                let t = 0;
                do {
                    const r = this.prerelease[t]
                      , s = e.prerelease[t];
                    if (n("prerelease compare", t, r, s),
                    void 0 === r && void 0 === s)
                        return 0;
                    if (void 0 === s)
                        return 1;
                    if (void 0 === r)
                        return -1;
                    if (r !== s)
                        return l(r, s)
                } while (++t)
            }
            compareBuild(e) {
                e instanceof u || (e = new u(e,this.options));
                let t = 0;
                do {
                    const r = this.build[t]
                      , s = e.build[t];
                    if (n("prerelease compare", t, r, s),
                    void 0 === r && void 0 === s)
                        return 0;
                    if (void 0 === s)
                        return 1;
                    if (void 0 === r)
                        return -1;
                    if (r !== s)
                        return l(r, s)
                } while (++t)
            }
            inc(e, t, r) {
                switch (e) {
                case "premajor":
                    this.prerelease.length = 0,
                    this.patch = 0,
                    this.minor = 0,
                    this.major++,
                    this.inc("pre", t, r);
                    break;
                case "preminor":
                    this.prerelease.length = 0,
                    this.patch = 0,
                    this.minor++,
                    this.inc("pre", t, r);
                    break;
                case "prepatch":
                    this.prerelease.length = 0,
                    this.inc("patch", t, r),
                    this.inc("pre", t, r);
                    break;
                case "prerelease":
                    0 === this.prerelease.length && this.inc("patch", t, r),
                    this.inc("pre", t, r);
                    break;
                case "major":
                    0 === this.minor && 0 === this.patch && 0 !== this.prerelease.length || this.major++,
                    this.minor = 0,
                    this.patch = 0,
                    this.prerelease = [];
                    break;
                case "minor":
                    0 === this.patch && 0 !== this.prerelease.length || this.minor++,
                    this.patch = 0,
                    this.prerelease = [];
                    break;
                case "patch":
                    0 === this.prerelease.length && this.patch++,
                    this.prerelease = [];
                    break;
                case "pre":
                    {
                        const e = Number(r) ? 1 : 0;
                        if (!t && !1 === r)
                            throw new Error("invalid increment argument: identifier is empty");
                        if (0 === this.prerelease.length)
                            this.prerelease = [e];
                        else {
                            let n = this.prerelease.length;
                            for (; --n >= 0; )
                                "number" === typeof this.prerelease[n] && (this.prerelease[n]++,
                                n = -2);
                            if (-1 === n) {
                                if (t === this.prerelease.join(".") && !1 === r)
                                    throw new Error("invalid increment argument: identifier already exists");
                                this.prerelease.push(e)
                            }
                        }
                        if (t) {
                            let n = [t, e];
                            !1 === r && (n = [t]),
                            0 === l(this.prerelease[0], t) ? isNaN(this.prerelease[1]) && (this.prerelease = n) : this.prerelease = n
                        }
                        break
                    }
                default:
                    throw new Error(`invalid increment argument: ${e}`)
                }
                return this.raw = this.format(),
                this.build.length && (this.raw += `+${this.build.join(".")}`),
                this
            }
        }
        e.exports = u
    },
    59440: function(e, t, r) {
        const n = r(80769);
        e.exports = (e,t)=>{
            const r = n(e.trim().replace(/^[=v]+/, ""), t);
            return r ? r.version : null
        }
    },
    8176: function(e, t, r) {
        const n = r(89883)
          , s = r(30448)
          , i = r(59880)
          , o = r(20705)
          , a = r(16683)
          , c = r(81562);
        e.exports = (e,t,r,l)=>{
            switch (t) {
            case "===":
                return "object" === typeof e && (e = e.version),
                "object" === typeof r && (r = r.version),
                e === r;
            case "!==":
                return "object" === typeof e && (e = e.version),
                "object" === typeof r && (r = r.version),
                e !== r;
            case "":
            case "=":
            case "==":
                return n(e, r, l);
            case "!=":
                return s(e, r, l);
            case ">":
                return i(e, r, l);
            case ">=":
                return o(e, r, l);
            case "<":
                return a(e, r, l);
            case "<=":
                return c(e, r, l);
            default:
                throw new TypeError(`Invalid operator: ${t}`)
            }
        }
    },
    68923: function(e, t, r) {
        const n = r(7742)
          , s = r(80769)
          , {safeRe: i, t: o} = r(63573);
        e.exports = (e,t)=>{
            if (e instanceof n)
                return e;
            if ("number" === typeof e && (e = String(e)),
            "string" !== typeof e)
                return null;
            let r = null;
            if ((t = t || {}).rtl) {
                let t;
                for (; (t = i[o.COERCERTL].exec(e)) && (!r || r.index + r[0].length !== e.length); )
                    r && t.index + t[0].length === r.index + r[0].length || (r = t),
                    i[o.COERCERTL].lastIndex = t.index + t[1].length + t[2].length;
                i[o.COERCERTL].lastIndex = -1
            } else
                r = e.match(i[o.COERCE]);
            return null === r ? null : s(`${r[2]}.${r[3] || "0"}.${r[4] || "0"}`, t)
        }
    },
    30791: function(e, t, r) {
        const n = r(7742);
        e.exports = (e,t,r)=>{
            const s = new n(e,r)
              , i = new n(t,r);
            return s.compare(i) || s.compareBuild(i)
        }
    },
    96185: function(e, t, r) {
        const n = r(85239);
        e.exports = (e,t)=>n(e, t, !0)
    },
    85239: function(e, t, r) {
        const n = r(7742);
        e.exports = (e,t,r)=>new n(e,r).compare(new n(t,r))
    },
    17530: function(e, t, r) {
        const n = r(80769);
        e.exports = (e,t)=>{
            const r = n(e, null, !0)
              , s = n(t, null, !0)
              , i = r.compare(s);
            if (0 === i)
                return null;
            const o = i > 0
              , a = o ? r : s
              , c = o ? s : r
              , l = !!a.prerelease.length;
            if (!!c.prerelease.length && !l)
                return c.patch || c.minor ? a.patch ? "patch" : a.minor ? "minor" : "major" : "major";
            const u = l ? "pre" : "";
            return r.major !== s.major ? u + "major" : r.minor !== s.minor ? u + "minor" : r.patch !== s.patch ? u + "patch" : "prerelease"
        }
    },
    89883: function(e, t, r) {
        const n = r(85239);
        e.exports = (e,t,r)=>0 === n(e, t, r)
    },
    59880: function(e, t, r) {
        const n = r(85239);
        e.exports = (e,t,r)=>n(e, t, r) > 0
    },
    20705: function(e, t, r) {
        const n = r(85239);
        e.exports = (e,t,r)=>n(e, t, r) >= 0
    },
    81382: function(e, t, r) {
        const n = r(7742);
        e.exports = (e,t,r,s,i)=>{
            "string" === typeof r && (i = s,
            s = r,
            r = void 0);
            try {
                return new n(e instanceof n ? e.version : e,r).inc(t, s, i).version
            } catch (o) {
                return null
            }
        }
    },
    16683: function(e, t, r) {
        const n = r(85239);
        e.exports = (e,t,r)=>n(e, t, r) < 0
    },
    81562: function(e, t, r) {
        const n = r(85239);
        e.exports = (e,t,r)=>n(e, t, r) <= 0
    },
    39374: function(e, t, r) {
        const n = r(7742);
        e.exports = (e,t)=>new n(e,t).major
    },
    92531: function(e, t, r) {
        const n = r(7742);
        e.exports = (e,t)=>new n(e,t).minor
    },
    30448: function(e, t, r) {
        const n = r(85239);
        e.exports = (e,t,r)=>0 !== n(e, t, r)
    },
    80769: function(e, t, r) {
        const n = r(7742);
        e.exports = (e,t,r=!1)=>{
            if (e instanceof n)
                return e;
            try {
                return new n(e,t)
            } catch (s) {
                if (!r)
                    return null;
                throw s
            }
        }
    },
    15140: function(e, t, r) {
        const n = r(7742);
        e.exports = (e,t)=>new n(e,t).patch
    },
    53057: function(e, t, r) {
        const n = r(80769);
        e.exports = (e,t)=>{
            const r = n(e, t);
            return r && r.prerelease.length ? r.prerelease : null
        }
    },
    10359: function(e, t, r) {
        const n = r(85239);
        e.exports = (e,t,r)=>n(t, e, r)
    },
    57213: function(e, t, r) {
        const n = r(30791);
        e.exports = (e,t)=>e.sort(((e,r)=>n(r, e, t)))
    },
    21695: function(e, t, r) {
        const n = r(33957);
        e.exports = (e,t,r)=>{
            try {
                t = new n(t,r)
            } catch (s) {
                return !1
            }
            return t.test(e)
        }
    },
    62626: function(e, t, r) {
        const n = r(30791);
        e.exports = (e,t)=>e.sort(((e,r)=>n(e, r, t)))
    },
    69367: function(e, t, r) {
        const n = r(80769);
        e.exports = (e,t)=>{
            const r = n(e, t);
            return r ? r.version : null
        }
    },
    50595: function(e, t, r) {
        const n = r(63573)
          , s = r(11321)
          , i = r(7742)
          , o = r(9029)
          , a = r(80769)
          , c = r(69367)
          , l = r(59440)
          , u = r(81382)
          , d = r(17530)
          , h = r(39374)
          , f = r(92531)
          , p = r(15140)
          , g = r(53057)
          , m = r(85239)
          , _ = r(10359)
          , b = r(96185)
          , y = r(30791)
          , w = r(62626)
          , v = r(57213)
          , E = r(59880)
          , k = r(16683)
          , S = r(89883)
          , R = r(30448)
          , C = r(20705)
          , I = r(81562)
          , x = r(8176)
          , A = r(68923)
          , M = r(41896)
          , N = r(33957)
          , L = r(21695)
          , T = r(42988)
          , P = r(20069)
          , O = r(57581)
          , j = r(64349)
          , B = r(36456)
          , D = r(83098)
          , F = r(21609)
          , $ = r(79675)
          , U = r(1226)
          , H = r(69315)
          , W = r(79196);
        e.exports = {
            parse: a,
            valid: c,
            clean: l,
            inc: u,
            diff: d,
            major: h,
            minor: f,
            patch: p,
            prerelease: g,
            compare: m,
            rcompare: _,
            compareLoose: b,
            compareBuild: y,
            sort: w,
            rsort: v,
            gt: E,
            lt: k,
            eq: S,
            neq: R,
            gte: C,
            lte: I,
            cmp: x,
            coerce: A,
            Comparator: M,
            Range: N,
            satisfies: L,
            toComparators: T,
            maxSatisfying: P,
            minSatisfying: O,
            minVersion: j,
            validRange: B,
            outside: D,
            gtr: F,
            ltr: $,
            intersects: U,
            simplifyRange: H,
            subset: W,
            SemVer: i,
            re: n.re,
            src: n.src,
            tokens: n.t,
            SEMVER_SPEC_VERSION: s.SEMVER_SPEC_VERSION,
            RELEASE_TYPES: s.RELEASE_TYPES,
            compareIdentifiers: o.compareIdentifiers,
            rcompareIdentifiers: o.rcompareIdentifiers
        }
    },
    11321: function(e) {
        const t = Number.MAX_SAFE_INTEGER || 9007199254740991;
        e.exports = {
            MAX_LENGTH: 256,
            MAX_SAFE_COMPONENT_LENGTH: 16,
            MAX_SAFE_BUILD_LENGTH: 250,
            MAX_SAFE_INTEGER: t,
            RELEASE_TYPES: ["major", "premajor", "minor", "preminor", "patch", "prepatch", "prerelease"],
            SEMVER_SPEC_VERSION: "2.0.0",
            FLAG_INCLUDE_PRERELEASE: 1,
            FLAG_LOOSE: 2
        }
    },
    9029: function(e) {
        const t = /^[0-9]+$/
          , r = (e,r)=>{
            const n = t.test(e)
              , s = t.test(r);
            return n && s && (e = +e,
            r = +r),
            e === r ? 0 : n && !s ? -1 : s && !n ? 1 : e < r ? -1 : 1
        }
        ;
        e.exports = {
            compareIdentifiers: r,
            rcompareIdentifiers: (e,t)=>r(t, e)
        }
    },
    11296: function(e) {
        const t = Object.freeze({
            loose: !0
        })
          , r = Object.freeze({});
        e.exports = e=>e ? "object" !== typeof e ? t : e : r
    },
    63573: function(e, t, r) {
        const {MAX_SAFE_COMPONENT_LENGTH: n, MAX_SAFE_BUILD_LENGTH: s, MAX_LENGTH: i} = r(11321)
          , o = r(49175)
          , a = (t = e.exports = {}).re = []
          , c = t.safeRe = []
          , l = t.src = []
          , u = t.t = {};
        let d = 0;
        const h = "[a-zA-Z0-9-]"
          , f = [["\\s", 1], ["\\d", i], [h, s]]
          , p = (e,t,r)=>{
            const n = (e=>{
                for (const [t,r] of f)
                    e = e.split(`${t}*`).join(`${t}{0,${r}}`).split(`${t}+`).join(`${t}{1,${r}}`);
                return e
            }
            )(t)
              , s = d++;
            o(e, s, t),
            u[e] = s,
            l[s] = t,
            a[s] = new RegExp(t,r ? "g" : void 0),
            c[s] = new RegExp(n,r ? "g" : void 0)
        }
        ;
        p("NUMERICIDENTIFIER", "0|[1-9]\\d*"),
        p("NUMERICIDENTIFIERLOOSE", "\\d+"),
        p("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${h}*`),
        p("MAINVERSION", `(${l[u.NUMERICIDENTIFIER]})\\.(${l[u.NUMERICIDENTIFIER]})\\.(${l[u.NUMERICIDENTIFIER]})`),
        p("MAINVERSIONLOOSE", `(${l[u.NUMERICIDENTIFIERLOOSE]})\\.(${l[u.NUMERICIDENTIFIERLOOSE]})\\.(${l[u.NUMERICIDENTIFIERLOOSE]})`),
        p("PRERELEASEIDENTIFIER", `(?:${l[u.NUMERICIDENTIFIER]}|${l[u.NONNUMERICIDENTIFIER]})`),
        p("PRERELEASEIDENTIFIERLOOSE", `(?:${l[u.NUMERICIDENTIFIERLOOSE]}|${l[u.NONNUMERICIDENTIFIER]})`),
        p("PRERELEASE", `(?:-(${l[u.PRERELEASEIDENTIFIER]}(?:\\.${l[u.PRERELEASEIDENTIFIER]})*))`),
        p("PRERELEASELOOSE", `(?:-?(${l[u.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${l[u.PRERELEASEIDENTIFIERLOOSE]})*))`),
        p("BUILDIDENTIFIER", `${h}+`),
        p("BUILD", `(?:\\+(${l[u.BUILDIDENTIFIER]}(?:\\.${l[u.BUILDIDENTIFIER]})*))`),
        p("FULLPLAIN", `v?${l[u.MAINVERSION]}${l[u.PRERELEASE]}?${l[u.BUILD]}?`),
        p("FULL", `^${l[u.FULLPLAIN]}$`),
        p("LOOSEPLAIN", `[v=\\s]*${l[u.MAINVERSIONLOOSE]}${l[u.PRERELEASELOOSE]}?${l[u.BUILD]}?`),
        p("LOOSE", `^${l[u.LOOSEPLAIN]}$`),
        p("GTLT", "((?:<|>)?=?)"),
        p("XRANGEIDENTIFIERLOOSE", `${l[u.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),
        p("XRANGEIDENTIFIER", `${l[u.NUMERICIDENTIFIER]}|x|X|\\*`),
        p("XRANGEPLAIN", `[v=\\s]*(${l[u.XRANGEIDENTIFIER]})(?:\\.(${l[u.XRANGEIDENTIFIER]})(?:\\.(${l[u.XRANGEIDENTIFIER]})(?:${l[u.PRERELEASE]})?${l[u.BUILD]}?)?)?`),
        p("XRANGEPLAINLOOSE", `[v=\\s]*(${l[u.XRANGEIDENTIFIERLOOSE]})(?:\\.(${l[u.XRANGEIDENTIFIERLOOSE]})(?:\\.(${l[u.XRANGEIDENTIFIERLOOSE]})(?:${l[u.PRERELEASELOOSE]})?${l[u.BUILD]}?)?)?`),
        p("XRANGE", `^${l[u.GTLT]}\\s*${l[u.XRANGEPLAIN]}$`),
        p("XRANGELOOSE", `^${l[u.GTLT]}\\s*${l[u.XRANGEPLAINLOOSE]}$`),
        p("COERCE", `(^|[^\\d])(\\d{1,${n}})(?:\\.(\\d{1,${n}}))?(?:\\.(\\d{1,${n}}))?(?:$|[^\\d])`),
        p("COERCERTL", l[u.COERCE], !0),
        p("LONETILDE", "(?:~>?)"),
        p("TILDETRIM", `(\\s*)${l[u.LONETILDE]}\\s+`, !0),
        t.tildeTrimReplace = "$1~",
        p("TILDE", `^${l[u.LONETILDE]}${l[u.XRANGEPLAIN]}$`),
        p("TILDELOOSE", `^${l[u.LONETILDE]}${l[u.XRANGEPLAINLOOSE]}$`),
        p("LONECARET", "(?:\\^)"),
        p("CARETTRIM", `(\\s*)${l[u.LONECARET]}\\s+`, !0),
        t.caretTrimReplace = "$1^",
        p("CARET", `^${l[u.LONECARET]}${l[u.XRANGEPLAIN]}$`),
        p("CARETLOOSE", `^${l[u.LONECARET]}${l[u.XRANGEPLAINLOOSE]}$`),
        p("COMPARATORLOOSE", `^${l[u.GTLT]}\\s*(${l[u.LOOSEPLAIN]})$|^$`),
        p("COMPARATOR", `^${l[u.GTLT]}\\s*(${l[u.FULLPLAIN]})$|^$`),
        p("COMPARATORTRIM", `(\\s*)${l[u.GTLT]}\\s*(${l[u.LOOSEPLAIN]}|${l[u.XRANGEPLAIN]})`, !0),
        t.comparatorTrimReplace = "$1$2$3",
        p("HYPHENRANGE", `^\\s*(${l[u.XRANGEPLAIN]})\\s+-\\s+(${l[u.XRANGEPLAIN]})\\s*$`),
        p("HYPHENRANGELOOSE", `^\\s*(${l[u.XRANGEPLAINLOOSE]})\\s+-\\s+(${l[u.XRANGEPLAINLOOSE]})\\s*$`),
        p("STAR", "(<|>)?=?\\s*\\*"),
        p("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"),
        p("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$")
    },
    21609: function(e, t, r) {
        const n = r(83098);
        e.exports = (e,t,r)=>n(e, t, ">", r)
    },
    1226: function(e, t, r) {
        const n = r(33957);
        e.exports = (e,t,r)=>(e = new n(e,r),
        t = new n(t,r),
        e.intersects(t, r))
    },
    79675: function(e, t, r) {
        const n = r(83098);
        e.exports = (e,t,r)=>n(e, t, "<", r)
    },
    20069: function(e, t, r) {
        const n = r(7742)
          , s = r(33957);
        e.exports = (e,t,r)=>{
            let i = null
              , o = null
              , a = null;
            try {
                a = new s(t,r)
            } catch (c) {
                return null
            }
            return e.forEach((e=>{
                a.test(e) && (i && -1 !== o.compare(e) || (i = e,
                o = new n(i,r)))
            }
            )),
            i
        }
    },
    57581: function(e, t, r) {
        const n = r(7742)
          , s = r(33957);
        e.exports = (e,t,r)=>{
            let i = null
              , o = null
              , a = null;
            try {
                a = new s(t,r)
            } catch (c) {
                return null
            }
            return e.forEach((e=>{
                a.test(e) && (i && 1 !== o.compare(e) || (i = e,
                o = new n(i,r)))
            }
            )),
            i
        }
    },
    64349: function(e, t, r) {
        const n = r(7742)
          , s = r(33957)
          , i = r(59880);
        e.exports = (e,t)=>{
            e = new s(e,t);
            let r = new n("0.0.0");
            if (e.test(r))
                return r;
            if (r = new n("0.0.0-0"),
            e.test(r))
                return r;
            r = null;
            for (let s = 0; s < e.set.length; ++s) {
                const t = e.set[s];
                let o = null;
                t.forEach((e=>{
                    const t = new n(e.semver.version);
                    switch (e.operator) {
                    case ">":
                        0 === t.prerelease.length ? t.patch++ : t.prerelease.push(0),
                        t.raw = t.format();
                    case "":
                    case ">=":
                        o && !i(t, o) || (o = t);
                        break;
                    case "<":
                    case "<=":
                        break;
                    default:
                        throw new Error(`Unexpected operation: ${e.operator}`)
                    }
                }
                )),
                !o || r && !i(r, o) || (r = o)
            }
            return r && e.test(r) ? r : null
        }
    },
    83098: function(e, t, r) {
        const n = r(7742)
          , s = r(41896)
          , {ANY: i} = s
          , o = r(33957)
          , a = r(21695)
          , c = r(59880)
          , l = r(16683)
          , u = r(81562)
          , d = r(20705);
        e.exports = (e,t,r,h)=>{
            let f, p, g, m, _;
            switch (e = new n(e,h),
            t = new o(t,h),
            r) {
            case ">":
                f = c,
                p = u,
                g = l,
                m = ">",
                _ = ">=";
                break;
            case "<":
                f = l,
                p = d,
                g = c,
                m = "<",
                _ = "<=";
                break;
            default:
                throw new TypeError('Must provide a hilo val of "<" or ">"')
            }
            if (a(e, t, h))
                return !1;
            for (let n = 0; n < t.set.length; ++n) {
                const r = t.set[n];
                let o = null
                  , a = null;
                if (r.forEach((e=>{
                    e.semver === i && (e = new s(">=0.0.0")),
                    o = o || e,
                    a = a || e,
                    f(e.semver, o.semver, h) ? o = e : g(e.semver, a.semver, h) && (a = e)
                }
                )),
                o.operator === m || o.operator === _)
                    return !1;
                if ((!a.operator || a.operator === m) && p(e, a.semver))
                    return !1;
                if (a.operator === _ && g(e, a.semver))
                    return !1
            }
            return !0
        }
    },
    69315: function(e, t, r) {
        const n = r(21695)
          , s = r(85239);
        e.exports = (e,t,r)=>{
            const i = [];
            let o = null
              , a = null;
            const c = e.sort(((e,t)=>s(e, t, r)));
            for (const s of c) {
                n(s, t, r) ? (a = s,
                o || (o = s)) : (a && i.push([o, a]),
                a = null,
                o = null)
            }
            o && i.push([o, null]);
            const l = [];
            for (const [n,s] of i)
                n === s ? l.push(n) : s || n !== c[0] ? s ? n === c[0] ? l.push(`<=${s}`) : l.push(`${n} - ${s}`) : l.push(`>=${n}`) : l.push("*");
            const u = l.join(" || ")
              , d = "string" === typeof t.raw ? t.raw : String(t);
            return u.length < d.length ? u : t
        }
    },
    79196: function(e, t, r) {
        const n = r(33957)
          , s = r(41896)
          , {ANY: i} = s
          , o = r(21695)
          , a = r(85239)
          , c = [new s(">=0.0.0-0")]
          , l = [new s(">=0.0.0")]
          , u = (e,t,r)=>{
            if (e === t)
                return !0;
            if (1 === e.length && e[0].semver === i) {
                if (1 === t.length && t[0].semver === i)
                    return !0;
                e = r.includePrerelease ? c : l
            }
            if (1 === t.length && t[0].semver === i) {
                if (r.includePrerelease)
                    return !0;
                t = l
            }
            const n = new Set;
            let s, u, f, p, g, m, _;
            for (const i of e)
                ">" === i.operator || ">=" === i.operator ? s = d(s, i, r) : "<" === i.operator || "<=" === i.operator ? u = h(u, i, r) : n.add(i.semver);
            if (n.size > 1)
                return null;
            if (s && u) {
                if (f = a(s.semver, u.semver, r),
                f > 0)
                    return null;
                if (0 === f && (">=" !== s.operator || "<=" !== u.operator))
                    return null
            }
            for (const i of n) {
                if (s && !o(i, String(s), r))
                    return null;
                if (u && !o(i, String(u), r))
                    return null;
                for (const e of t)
                    if (!o(i, String(e), r))
                        return !1;
                return !0
            }
            let b = !(!u || r.includePrerelease || !u.semver.prerelease.length) && u.semver
              , y = !(!s || r.includePrerelease || !s.semver.prerelease.length) && s.semver;
            b && 1 === b.prerelease.length && "<" === u.operator && 0 === b.prerelease[0] && (b = !1);
            for (const i of t) {
                if (_ = _ || ">" === i.operator || ">=" === i.operator,
                m = m || "<" === i.operator || "<=" === i.operator,
                s)
                    if (y && i.semver.prerelease && i.semver.prerelease.length && i.semver.major === y.major && i.semver.minor === y.minor && i.semver.patch === y.patch && (y = !1),
                    ">" === i.operator || ">=" === i.operator) {
                        if (p = d(s, i, r),
                        p === i && p !== s)
                            return !1
                    } else if (">=" === s.operator && !o(s.semver, String(i), r))
                        return !1;
                if (u)
                    if (b && i.semver.prerelease && i.semver.prerelease.length && i.semver.major === b.major && i.semver.minor === b.minor && i.semver.patch === b.patch && (b = !1),
                    "<" === i.operator || "<=" === i.operator) {
                        if (g = h(u, i, r),
                        g === i && g !== u)
                            return !1
                    } else if ("<=" === u.operator && !o(u.semver, String(i), r))
                        return !1;
                if (!i.operator && (u || s) && 0 !== f)
                    return !1
            }
            return !(s && m && !u && 0 !== f) && (!(u && _ && !s && 0 !== f) && (!y && !b))
        }
          , d = (e,t,r)=>{
            if (!e)
                return t;
            const n = a(e.semver, t.semver, r);
            return n > 0 ? e : n < 0 || ">" === t.operator && ">=" === e.operator ? t : e
        }
          , h = (e,t,r)=>{
            if (!e)
                return t;
            const n = a(e.semver, t.semver, r);
            return n < 0 ? e : n > 0 || "<" === t.operator && "<=" === e.operator ? t : e
        }
        ;
        e.exports = (e,t,r={})=>{
            if (e === t)
                return !0;
            e = new n(e,r),
            t = new n(t,r);
            let s = !1;
            e: for (const n of e.set) {
                for (const e of t.set) {
                    const t = u(n, e, r);
                    if (s = s || null !== t,
                    t)
                        continue e
                }
                if (s)
                    return !1
            }
            return !0
        }
    },
    42988: function(e, t, r) {
        const n = r(33957);
        e.exports = (e,t)=>new n(e,t).set.map((e=>e.map((e=>e.value)).join(" ").trim().split(" ")))
    },
    36456: function(e, t, r) {
        const n = r(33957);
        e.exports = (e,t)=>{
            try {
                return new n(e,t).range || "*"
            } catch (r) {
                return null
            }
        }
    },
    82849: function(e, t, r) {
        var n = r(21607).Buffer;
        function s(e, t) {
            this._block = n.alloc(e),
            this._finalSize = t,
            this._blockSize = e,
            this._len = 0
        }
        s.prototype.update = function(e, t) {
            "string" === typeof e && (t = t || "utf8",
            e = n.from(e, t));
            for (var r = this._block, s = this._blockSize, i = e.length, o = this._len, a = 0; a < i; ) {
                for (var c = o % s, l = Math.min(i - a, s - c), u = 0; u < l; u++)
                    r[c + u] = e[a + u];
                a += l,
                (o += l) % s === 0 && this._update(r)
            }
            return this._len += i,
            this
        }
        ,
        s.prototype.digest = function(e) {
            var t = this._len % this._blockSize;
            this._block[t] = 128,
            this._block.fill(0, t + 1),
            t >= this._finalSize && (this._update(this._block),
            this._block.fill(0));
            var r = 8 * this._len;
            if (r <= 4294967295)
                this._block.writeUInt32BE(r, this._blockSize - 4);
            else {
                var n = (4294967295 & r) >>> 0
                  , s = (r - n) / 4294967296;
                this._block.writeUInt32BE(s, this._blockSize - 8),
                this._block.writeUInt32BE(n, this._blockSize - 4)
            }
            this._update(this._block);
            var i = this._hash();
            return e ? i.toString(e) : i
        }
        ,
        s.prototype._update = function() {
            throw new Error("_update must be implemented by subclass")
        }
        ,
        e.exports = s
    },
    46926: function(e, t, r) {
        var n = e.exports = function(e) {
            e = e.toLowerCase();
            var t = n[e];
            if (!t)
                throw new Error(e + " is not supported (we accept pull requests)");
            return new t
        }
        ;
        n.sha = r(14434),
        n.sha1 = r(76924),
        n.sha224 = r(24273),
        n.sha256 = r(118),
        n.sha384 = r(13459),
        n.sha512 = r(76151)
    },
    14434: function(e, t, r) {
        var n = r(67483)
          , s = r(82849)
          , i = r(21607).Buffer
          , o = [1518500249, 1859775393, -1894007588, -899497514]
          , a = new Array(80);
        function c() {
            this.init(),
            this._w = a,
            s.call(this, 64, 56)
        }
        function l(e) {
            return e << 30 | e >>> 2
        }
        function u(e, t, r, n) {
            return 0 === e ? t & r | ~t & n : 2 === e ? t & r | t & n | r & n : t ^ r ^ n
        }
        n(c, s),
        c.prototype.init = function() {
            return this._a = 1732584193,
            this._b = 4023233417,
            this._c = 2562383102,
            this._d = 271733878,
            this._e = 3285377520,
            this
        }
        ,
        c.prototype._update = function(e) {
            for (var t, r = this._w, n = 0 | this._a, s = 0 | this._b, i = 0 | this._c, a = 0 | this._d, c = 0 | this._e, d = 0; d < 16; ++d)
                r[d] = e.readInt32BE(4 * d);
            for (; d < 80; ++d)
                r[d] = r[d - 3] ^ r[d - 8] ^ r[d - 14] ^ r[d - 16];
            for (var h = 0; h < 80; ++h) {
                var f = ~~(h / 20)
                  , p = 0 | ((t = n) << 5 | t >>> 27) + u(f, s, i, a) + c + r[h] + o[f];
                c = a,
                a = i,
                i = l(s),
                s = n,
                n = p
            }
            this._a = n + this._a | 0,
            this._b = s + this._b | 0,
            this._c = i + this._c | 0,
            this._d = a + this._d | 0,
            this._e = c + this._e | 0
        }
        ,
        c.prototype._hash = function() {
            var e = i.allocUnsafe(20);
            return e.writeInt32BE(0 | this._a, 0),
            e.writeInt32BE(0 | this._b, 4),
            e.writeInt32BE(0 | this._c, 8),
            e.writeInt32BE(0 | this._d, 12),
            e.writeInt32BE(0 | this._e, 16),
            e
        }
        ,
        e.exports = c
    },
    76924: function(e, t, r) {
        var n = r(67483)
          , s = r(82849)
          , i = r(21607).Buffer
          , o = [1518500249, 1859775393, -1894007588, -899497514]
          , a = new Array(80);
        function c() {
            this.init(),
            this._w = a,
            s.call(this, 64, 56)
        }
        function l(e) {
            return e << 5 | e >>> 27
        }
        function u(e) {
            return e << 30 | e >>> 2
        }
        function d(e, t, r, n) {
            return 0 === e ? t & r | ~t & n : 2 === e ? t & r | t & n | r & n : t ^ r ^ n
        }
        n(c, s),
        c.prototype.init = function() {
            return this._a = 1732584193,
            this._b = 4023233417,
            this._c = 2562383102,
            this._d = 271733878,
            this._e = 3285377520,
            this
        }
        ,
        c.prototype._update = function(e) {
            for (var t, r = this._w, n = 0 | this._a, s = 0 | this._b, i = 0 | this._c, a = 0 | this._d, c = 0 | this._e, h = 0; h < 16; ++h)
                r[h] = e.readInt32BE(4 * h);
            for (; h < 80; ++h)
                r[h] = (t = r[h - 3] ^ r[h - 8] ^ r[h - 14] ^ r[h - 16]) << 1 | t >>> 31;
            for (var f = 0; f < 80; ++f) {
                var p = ~~(f / 20)
                  , g = l(n) + d(p, s, i, a) + c + r[f] + o[p] | 0;
                c = a,
                a = i,
                i = u(s),
                s = n,
                n = g
            }
            this._a = n + this._a | 0,
            this._b = s + this._b | 0,
            this._c = i + this._c | 0,
            this._d = a + this._d | 0,
            this._e = c + this._e | 0
        }
        ,
        c.prototype._hash = function() {
            var e = i.allocUnsafe(20);
            return e.writeInt32BE(0 | this._a, 0),
            e.writeInt32BE(0 | this._b, 4),
            e.writeInt32BE(0 | this._c, 8),
            e.writeInt32BE(0 | this._d, 12),
            e.writeInt32BE(0 | this._e, 16),
            e
        }
        ,
        e.exports = c
    },
    24273: function(e, t, r) {
        var n = r(67483)
          , s = r(118)
          , i = r(82849)
          , o = r(21607).Buffer
          , a = new Array(64);
        function c() {
            this.init(),
            this._w = a,
            i.call(this, 64, 56)
        }
        n(c, s),
        c.prototype.init = function() {
            return this._a = 3238371032,
            this._b = 914150663,
            this._c = 812702999,
            this._d = 4144912697,
            this._e = 4290775857,
            this._f = 1750603025,
            this._g = 1694076839,
            this._h = 3204075428,
            this
        }
        ,
        c.prototype._hash = function() {
            var e = o.allocUnsafe(28);
            return e.writeInt32BE(this._a, 0),
            e.writeInt32BE(this._b, 4),
            e.writeInt32BE(this._c, 8),
            e.writeInt32BE(this._d, 12),
            e.writeInt32BE(this._e, 16),
            e.writeInt32BE(this._f, 20),
            e.writeInt32BE(this._g, 24),
            e
        }
        ,
        e.exports = c
    },
    118: function(e, t, r) {
        var n = r(67483)
          , s = r(82849)
          , i = r(21607).Buffer
          , o = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]
          , a = new Array(64);
        function c() {
            this.init(),
            this._w = a,
            s.call(this, 64, 56)
        }
        function l(e, t, r) {
            return r ^ e & (t ^ r)
        }
        function u(e, t, r) {
            return e & t | r & (e | t)
        }
        function d(e) {
            return (e >>> 2 | e << 30) ^ (e >>> 13 | e << 19) ^ (e >>> 22 | e << 10)
        }
        function h(e) {
            return (e >>> 6 | e << 26) ^ (e >>> 11 | e << 21) ^ (e >>> 25 | e << 7)
        }
        function f(e) {
            return (e >>> 7 | e << 25) ^ (e >>> 18 | e << 14) ^ e >>> 3
        }
        n(c, s),
        c.prototype.init = function() {
            return this._a = 1779033703,
            this._b = 3144134277,
            this._c = 1013904242,
            this._d = 2773480762,
            this._e = 1359893119,
            this._f = 2600822924,
            this._g = 528734635,
            this._h = 1541459225,
            this
        }
        ,
        c.prototype._update = function(e) {
            for (var t, r = this._w, n = 0 | this._a, s = 0 | this._b, i = 0 | this._c, a = 0 | this._d, c = 0 | this._e, p = 0 | this._f, g = 0 | this._g, m = 0 | this._h, _ = 0; _ < 16; ++_)
                r[_] = e.readInt32BE(4 * _);
            for (; _ < 64; ++_)
                r[_] = 0 | (((t = r[_ - 2]) >>> 17 | t << 15) ^ (t >>> 19 | t << 13) ^ t >>> 10) + r[_ - 7] + f(r[_ - 15]) + r[_ - 16];
            for (var b = 0; b < 64; ++b) {
                var y = m + h(c) + l(c, p, g) + o[b] + r[b] | 0
                  , w = d(n) + u(n, s, i) | 0;
                m = g,
                g = p,
                p = c,
                c = a + y | 0,
                a = i,
                i = s,
                s = n,
                n = y + w | 0
            }
            this._a = n + this._a | 0,
            this._b = s + this._b | 0,
            this._c = i + this._c | 0,
            this._d = a + this._d | 0,
            this._e = c + this._e | 0,
            this._f = p + this._f | 0,
            this._g = g + this._g | 0,
            this._h = m + this._h | 0
        }
        ,
        c.prototype._hash = function() {
            var e = i.allocUnsafe(32);
            return e.writeInt32BE(this._a, 0),
            e.writeInt32BE(this._b, 4),
            e.writeInt32BE(this._c, 8),
            e.writeInt32BE(this._d, 12),
            e.writeInt32BE(this._e, 16),
            e.writeInt32BE(this._f, 20),
            e.writeInt32BE(this._g, 24),
            e.writeInt32BE(this._h, 28),
            e
        }
        ,
        e.exports = c
    },
    13459: function(e, t, r) {
        var n = r(67483)
          , s = r(76151)
          , i = r(82849)
          , o = r(21607).Buffer
          , a = new Array(160);
        function c() {
            this.init(),
            this._w = a,
            i.call(this, 128, 112)
        }
        n(c, s),
        c.prototype.init = function() {
            return this._ah = 3418070365,
            this._bh = 1654270250,
            this._ch = 2438529370,
            this._dh = 355462360,
            this._eh = 1731405415,
            this._fh = 2394180231,
            this._gh = 3675008525,
            this._hh = 1203062813,
            this._al = 3238371032,
            this._bl = 914150663,
            this._cl = 812702999,
            this._dl = 4144912697,
            this._el = 4290775857,
            this._fl = 1750603025,
            this._gl = 1694076839,
            this._hl = 3204075428,
            this
        }
        ,
        c.prototype._hash = function() {
            var e = o.allocUnsafe(48);
            function t(t, r, n) {
                e.writeInt32BE(t, n),
                e.writeInt32BE(r, n + 4)
            }
            return t(this._ah, this._al, 0),
            t(this._bh, this._bl, 8),
            t(this._ch, this._cl, 16),
            t(this._dh, this._dl, 24),
            t(this._eh, this._el, 32),
            t(this._fh, this._fl, 40),
            e
        }
        ,
        e.exports = c
    },
    76151: function(e, t, r) {
        var n = r(67483)
          , s = r(82849)
          , i = r(21607).Buffer
          , o = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591]
          , a = new Array(160);
        function c() {
            this.init(),
            this._w = a,
            s.call(this, 128, 112)
        }
        function l(e, t, r) {
            return r ^ e & (t ^ r)
        }
        function u(e, t, r) {
            return e & t | r & (e | t)
        }
        function d(e, t) {
            return (e >>> 28 | t << 4) ^ (t >>> 2 | e << 30) ^ (t >>> 7 | e << 25)
        }
        function h(e, t) {
            return (e >>> 14 | t << 18) ^ (e >>> 18 | t << 14) ^ (t >>> 9 | e << 23)
        }
        function f(e, t) {
            return (e >>> 1 | t << 31) ^ (e >>> 8 | t << 24) ^ e >>> 7
        }
        function p(e, t) {
            return (e >>> 1 | t << 31) ^ (e >>> 8 | t << 24) ^ (e >>> 7 | t << 25)
        }
        function g(e, t) {
            return (e >>> 19 | t << 13) ^ (t >>> 29 | e << 3) ^ e >>> 6
        }
        function m(e, t) {
            return (e >>> 19 | t << 13) ^ (t >>> 29 | e << 3) ^ (e >>> 6 | t << 26)
        }
        function _(e, t) {
            return e >>> 0 < t >>> 0 ? 1 : 0
        }
        n(c, s),
        c.prototype.init = function() {
            return this._ah = 1779033703,
            this._bh = 3144134277,
            this._ch = 1013904242,
            this._dh = 2773480762,
            this._eh = 1359893119,
            this._fh = 2600822924,
            this._gh = 528734635,
            this._hh = 1541459225,
            this._al = 4089235720,
            this._bl = 2227873595,
            this._cl = 4271175723,
            this._dl = 1595750129,
            this._el = 2917565137,
            this._fl = 725511199,
            this._gl = 4215389547,
            this._hl = 327033209,
            this
        }
        ,
        c.prototype._update = function(e) {
            for (var t = this._w, r = 0 | this._ah, n = 0 | this._bh, s = 0 | this._ch, i = 0 | this._dh, a = 0 | this._eh, c = 0 | this._fh, b = 0 | this._gh, y = 0 | this._hh, w = 0 | this._al, v = 0 | this._bl, E = 0 | this._cl, k = 0 | this._dl, S = 0 | this._el, R = 0 | this._fl, C = 0 | this._gl, I = 0 | this._hl, x = 0; x < 32; x += 2)
                t[x] = e.readInt32BE(4 * x),
                t[x + 1] = e.readInt32BE(4 * x + 4);
            for (; x < 160; x += 2) {
                var A = t[x - 30]
                  , M = t[x - 30 + 1]
                  , N = f(A, M)
                  , L = p(M, A)
                  , T = g(A = t[x - 4], M = t[x - 4 + 1])
                  , P = m(M, A)
                  , O = t[x - 14]
                  , j = t[x - 14 + 1]
                  , B = t[x - 32]
                  , D = t[x - 32 + 1]
                  , F = L + j | 0
                  , $ = N + O + _(F, L) | 0;
                $ = ($ = $ + T + _(F = F + P | 0, P) | 0) + B + _(F = F + D | 0, D) | 0,
                t[x] = $,
                t[x + 1] = F
            }
            for (var U = 0; U < 160; U += 2) {
                $ = t[U],
                F = t[U + 1];
                var H = u(r, n, s)
                  , W = u(w, v, E)
                  , q = d(r, w)
                  , V = d(w, r)
                  , z = h(a, S)
                  , J = h(S, a)
                  , G = o[U]
                  , Z = o[U + 1]
                  , Y = l(a, c, b)
                  , Q = l(S, R, C)
                  , K = I + J | 0
                  , X = y + z + _(K, I) | 0;
                X = (X = (X = X + Y + _(K = K + Q | 0, Q) | 0) + G + _(K = K + Z | 0, Z) | 0) + $ + _(K = K + F | 0, F) | 0;
                var ee = V + W | 0
                  , te = q + H + _(ee, V) | 0;
                y = b,
                I = C,
                b = c,
                C = R,
                c = a,
                R = S,
                a = i + X + _(S = k + K | 0, k) | 0,
                i = s,
                k = E,
                s = n,
                E = v,
                n = r,
                v = w,
                r = X + te + _(w = K + ee | 0, K) | 0
            }
            this._al = this._al + w | 0,
            this._bl = this._bl + v | 0,
            this._cl = this._cl + E | 0,
            this._dl = this._dl + k | 0,
            this._el = this._el + S | 0,
            this._fl = this._fl + R | 0,
            this._gl = this._gl + C | 0,
            this._hl = this._hl + I | 0,
            this._ah = this._ah + r + _(this._al, w) | 0,
            this._bh = this._bh + n + _(this._bl, v) | 0,
            this._ch = this._ch + s + _(this._cl, E) | 0,
            this._dh = this._dh + i + _(this._dl, k) | 0,
            this._eh = this._eh + a + _(this._el, S) | 0,
            this._fh = this._fh + c + _(this._fl, R) | 0,
            this._gh = this._gh + b + _(this._gl, C) | 0,
            this._hh = this._hh + y + _(this._hl, I) | 0
        }
        ,
        c.prototype._hash = function() {
            var e = i.allocUnsafe(64);
            function t(t, r, n) {
                e.writeInt32BE(t, n),
                e.writeInt32BE(r, n + 4)
            }
            return t(this._ah, this._al, 0),
            t(this._bh, this._bl, 8),
            t(this._ch, this._cl, 16),
            t(this._dh, this._dl, 24),
            t(this._eh, this._el, 32),
            t(this._fh, this._fl, 40),
            t(this._gh, this._gl, 48),
            t(this._hh, this._hl, 56),
            e
        }
        ,
        e.exports = c
    },
    23457: function(e, t, r) {
        "use strict";
        var n = r(21607).Buffer
          , s = n.isEncoding || function(e) {
            switch ((e = "" + e) && e.toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
            case "raw":
                return !0;
            default:
                return !1
            }
        }
        ;
        function i(e) {
            var t;
            switch (this.encoding = function(e) {
                var t = function(e) {
                    if (!e)
                        return "utf8";
                    for (var t; ; )
                        switch (e) {
                        case "utf8":
                        case "utf-8":
                            return "utf8";
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return "utf16le";
                        case "latin1":
                        case "binary":
                            return "latin1";
                        case "base64":
                        case "ascii":
                        case "hex":
                            return e;
                        default:
                            if (t)
                                return;
                            e = ("" + e).toLowerCase(),
                            t = !0
                        }
                }(e);
                if ("string" !== typeof t && (n.isEncoding === s || !s(e)))
                    throw new Error("Unknown encoding: " + e);
                return t || e
            }(e),
            this.encoding) {
            case "utf16le":
                this.text = c,
                this.end = l,
                t = 4;
                break;
            case "utf8":
                this.fillLast = a,
                t = 4;
                break;
            case "base64":
                this.text = u,
                this.end = d,
                t = 3;
                break;
            default:
                return this.write = h,
                void (this.end = f)
            }
            this.lastNeed = 0,
            this.lastTotal = 0,
            this.lastChar = n.allocUnsafe(t)
        }
        function o(e) {
            return e <= 127 ? 0 : e >> 5 === 6 ? 2 : e >> 4 === 14 ? 3 : e >> 3 === 30 ? 4 : e >> 6 === 2 ? -1 : -2
        }
        function a(e) {
            var t = this.lastTotal - this.lastNeed
              , r = function(e, t, r) {
                if (128 !== (192 & t[0]))
                    return e.lastNeed = 0,
                    "\ufffd";
                if (e.lastNeed > 1 && t.length > 1) {
                    if (128 !== (192 & t[1]))
                        return e.lastNeed = 1,
                        "\ufffd";
                    if (e.lastNeed > 2 && t.length > 2 && 128 !== (192 & t[2]))
                        return e.lastNeed = 2,
                        "\ufffd"
                }
            }(this, e);
            return void 0 !== r ? r : this.lastNeed <= e.length ? (e.copy(this.lastChar, t, 0, this.lastNeed),
            this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (e.copy(this.lastChar, t, 0, e.length),
            void (this.lastNeed -= e.length))
        }
        function c(e, t) {
            if ((e.length - t) % 2 === 0) {
                var r = e.toString("utf16le", t);
                if (r) {
                    var n = r.charCodeAt(r.length - 1);
                    if (n >= 55296 && n <= 56319)
                        return this.lastNeed = 2,
                        this.lastTotal = 4,
                        this.lastChar[0] = e[e.length - 2],
                        this.lastChar[1] = e[e.length - 1],
                        r.slice(0, -1)
                }
                return r
            }
            return this.lastNeed = 1,
            this.lastTotal = 2,
            this.lastChar[0] = e[e.length - 1],
            e.toString("utf16le", t, e.length - 1)
        }
        function l(e) {
            var t = e && e.length ? this.write(e) : "";
            if (this.lastNeed) {
                var r = this.lastTotal - this.lastNeed;
                return t + this.lastChar.toString("utf16le", 0, r)
            }
            return t
        }
        function u(e, t) {
            var r = (e.length - t) % 3;
            return 0 === r ? e.toString("base64", t) : (this.lastNeed = 3 - r,
            this.lastTotal = 3,
            1 === r ? this.lastChar[0] = e[e.length - 1] : (this.lastChar[0] = e[e.length - 2],
            this.lastChar[1] = e[e.length - 1]),
            e.toString("base64", t, e.length - r))
        }
        function d(e) {
            var t = e && e.length ? this.write(e) : "";
            return this.lastNeed ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : t
        }
        function h(e) {
            return e.toString(this.encoding)
        }
        function f(e) {
            return e && e.length ? this.write(e) : ""
        }
        t.s = i,
        i.prototype.write = function(e) {
            if (0 === e.length)
                return "";
            var t, r;
            if (this.lastNeed) {
                if (void 0 === (t = this.fillLast(e)))
                    return "";
                r = this.lastNeed,
                this.lastNeed = 0
            } else
                r = 0;
            return r < e.length ? t ? t + this.text(e, r) : this.text(e, r) : t || ""
        }
        ,
        i.prototype.end = function(e) {
            var t = e && e.length ? this.write(e) : "";
            return this.lastNeed ? t + "\ufffd" : t
        }
        ,
        i.prototype.text = function(e, t) {
            var r = function(e, t, r) {
                var n = t.length - 1;
                if (n < r)
                    return 0;
                var s = o(t[n]);
                if (s >= 0)
                    return s > 0 && (e.lastNeed = s - 1),
                    s;
                if (--n < r || -2 === s)
                    return 0;
                if (s = o(t[n]),
                s >= 0)
                    return s > 0 && (e.lastNeed = s - 2),
                    s;
                if (--n < r || -2 === s)
                    return 0;
                if (s = o(t[n]),
                s >= 0)
                    return s > 0 && (2 === s ? s = 0 : e.lastNeed = s - 3),
                    s;
                return 0
            }(this, e, t);
            if (!this.lastNeed)
                return e.toString("utf8", t);
            this.lastTotal = r;
            var n = e.length - (r - this.lastNeed);
            return e.copy(this.lastChar, 0, n),
            e.toString("utf8", t, n)
        }
        ,
        i.prototype.fillLast = function(e) {
            if (this.lastNeed <= e.length)
                return e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed),
                this.lastChar.toString(this.encoding, 0, this.lastTotal);
            e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length),
            this.lastNeed -= e.length
        }
    },
    54012: function(e, t, r) {
        function n(e) {
            try {
                if (!r.g.localStorage)
                    return !1
            } catch (n) {
                return !1
            }
            var t = r.g.localStorage[e];
            return null != t && "true" === String(t).toLowerCase()
        }
        e.exports = function(e, t) {
            if (n("noDeprecation"))
                return e;
            var r = !1;
            return function() {
                if (!r) {
                    if (n("throwDeprecation"))
                        throw new Error(t);
                    n("traceDeprecation") ? console.trace(t) : console.warn(t),
                    r = !0
                }
                return e.apply(this, arguments)
            }
        }
    },
    31693: function(e) {
        e.exports = function() {
            for (var e = {}, r = 0; r < arguments.length; r++) {
                var n = arguments[r];
                for (var s in n)
                    t.call(n, s) && (e[s] = n[s])
            }
            return e
        }
        ;
        var t = Object.prototype.hasOwnProperty
    },
    94735: function(e) {
        "use strict";
        e.exports = function(e) {
            e.prototype[Symbol.iterator] = function*() {
                for (let e = this.head; e; e = e.next)
                    yield e.value
            }
        }
    },
    87406: function(e, t, r) {
        "use strict";
        function n(e) {
            var t = this;
            if (t instanceof n || (t = new n),
            t.tail = null,
            t.head = null,
            t.length = 0,
            e && "function" === typeof e.forEach)
                e.forEach((function(e) {
                    t.push(e)
                }
                ));
            else if (arguments.length > 0)
                for (var r = 0, s = arguments.length; r < s; r++)
                    t.push(arguments[r]);
            return t
        }
        function s(e, t, r) {
            var n = t === e.head ? new a(r,null,t,e) : new a(r,t,t.next,e);
            return null === n.next && (e.tail = n),
            null === n.prev && (e.head = n),
            e.length++,
            n
        }
        function i(e, t) {
            e.tail = new a(t,e.tail,null,e),
            e.head || (e.head = e.tail),
            e.length++
        }
        function o(e, t) {
            e.head = new a(t,null,e.head,e),
            e.tail || (e.tail = e.head),
            e.length++
        }
        function a(e, t, r, n) {
            if (!(this instanceof a))
                return new a(e,t,r,n);
            this.list = n,
            this.value = e,
            t ? (t.next = this,
            this.prev = t) : this.prev = null,
            r ? (r.prev = this,
            this.next = r) : this.next = null
        }
        e.exports = n,
        n.Node = a,
        n.create = n,
        n.prototype.removeNode = function(e) {
            if (e.list !== this)
                throw new Error("removing node which does not belong to this list");
            var t = e.next
              , r = e.prev;
            return t && (t.prev = r),
            r && (r.next = t),
            e === this.head && (this.head = t),
            e === this.tail && (this.tail = r),
            e.list.length--,
            e.next = null,
            e.prev = null,
            e.list = null,
            t
        }
        ,
        n.prototype.unshiftNode = function(e) {
            if (e !== this.head) {
                e.list && e.list.removeNode(e);
                var t = this.head;
                e.list = this,
                e.next = t,
                t && (t.prev = e),
                this.head = e,
                this.tail || (this.tail = e),
                this.length++
            }
        }
        ,
        n.prototype.pushNode = function(e) {
            if (e !== this.tail) {
                e.list && e.list.removeNode(e);
                var t = this.tail;
                e.list = this,
                e.prev = t,
                t && (t.next = e),
                this.tail = e,
                this.head || (this.head = e),
                this.length++
            }
        }
        ,
        n.prototype.push = function() {
            for (var e = 0, t = arguments.length; e < t; e++)
                i(this, arguments[e]);
            return this.length
        }
        ,
        n.prototype.unshift = function() {
            for (var e = 0, t = arguments.length; e < t; e++)
                o(this, arguments[e]);
            return this.length
        }
        ,
        n.prototype.pop = function() {
            if (this.tail) {
                var e = this.tail.value;
                return this.tail = this.tail.prev,
                this.tail ? this.tail.next = null : this.head = null,
                this.length--,
                e
            }
        }
        ,
        n.prototype.shift = function() {
            if (this.head) {
                var e = this.head.value;
                return this.head = this.head.next,
                this.head ? this.head.prev = null : this.tail = null,
                this.length--,
                e
            }
        }
        ,
        n.prototype.forEach = function(e, t) {
            t = t || this;
            for (var r = this.head, n = 0; null !== r; n++)
                e.call(t, r.value, n, this),
                r = r.next
        }
        ,
        n.prototype.forEachReverse = function(e, t) {
            t = t || this;
            for (var r = this.tail, n = this.length - 1; null !== r; n--)
                e.call(t, r.value, n, this),
                r = r.prev
        }
        ,
        n.prototype.get = function(e) {
            for (var t = 0, r = this.head; null !== r && t < e; t++)
                r = r.next;
            if (t === e && null !== r)
                return r.value
        }
        ,
        n.prototype.getReverse = function(e) {
            for (var t = 0, r = this.tail; null !== r && t < e; t++)
                r = r.prev;
            if (t === e && null !== r)
                return r.value
        }
        ,
        n.prototype.map = function(e, t) {
            t = t || this;
            for (var r = new n, s = this.head; null !== s; )
                r.push(e.call(t, s.value, this)),
                s = s.next;
            return r
        }
        ,
        n.prototype.mapReverse = function(e, t) {
            t = t || this;
            for (var r = new n, s = this.tail; null !== s; )
                r.push(e.call(t, s.value, this)),
                s = s.prev;
            return r
        }
        ,
        n.prototype.reduce = function(e, t) {
            var r, n = this.head;
            if (arguments.length > 1)
                r = t;
            else {
                if (!this.head)
                    throw new TypeError("Reduce of empty list with no initial value");
                n = this.head.next,
                r = this.head.value
            }
            for (var s = 0; null !== n; s++)
                r = e(r, n.value, s),
                n = n.next;
            return r
        }
        ,
        n.prototype.reduceReverse = function(e, t) {
            var r, n = this.tail;
            if (arguments.length > 1)
                r = t;
            else {
                if (!this.tail)
                    throw new TypeError("Reduce of empty list with no initial value");
                n = this.tail.prev,
                r = this.tail.value
            }
            for (var s = this.length - 1; null !== n; s--)
                r = e(r, n.value, s),
                n = n.prev;
            return r
        }
        ,
        n.prototype.toArray = function() {
            for (var e = new Array(this.length), t = 0, r = this.head; null !== r; t++)
                e[t] = r.value,
                r = r.next;
            return e
        }
        ,
        n.prototype.toArrayReverse = function() {
            for (var e = new Array(this.length), t = 0, r = this.tail; null !== r; t++)
                e[t] = r.value,
                r = r.prev;
            return e
        }
        ,
        n.prototype.slice = function(e, t) {
            (t = t || this.length) < 0 && (t += this.length),
            (e = e || 0) < 0 && (e += this.length);
            var r = new n;
            if (t < e || t < 0)
                return r;
            e < 0 && (e = 0),
            t > this.length && (t = this.length);
            for (var s = 0, i = this.head; null !== i && s < e; s++)
                i = i.next;
            for (; null !== i && s < t; s++,
            i = i.next)
                r.push(i.value);
            return r
        }
        ,
        n.prototype.sliceReverse = function(e, t) {
            (t = t || this.length) < 0 && (t += this.length),
            (e = e || 0) < 0 && (e += this.length);
            var r = new n;
            if (t < e || t < 0)
                return r;
            e < 0 && (e = 0),
            t > this.length && (t = this.length);
            for (var s = this.length, i = this.tail; null !== i && s > t; s--)
                i = i.prev;
            for (; null !== i && s > e; s--,
            i = i.prev)
                r.push(i.value);
            return r
        }
        ,
        n.prototype.splice = function(e, t, ...r) {
            e > this.length && (e = this.length - 1),
            e < 0 && (e = this.length + e);
            for (var n = 0, i = this.head; null !== i && n < e; n++)
                i = i.next;
            var o = [];
            for (n = 0; i && n < t; n++)
                o.push(i.value),
                i = this.removeNode(i);
            null === i && (i = this.tail),
            i !== this.head && i !== this.tail && (i = i.prev);
            for (n = 0; n < r.length; n++)
                i = s(this, i, r[n]);
            return o
        }
        ,
        n.prototype.reverse = function() {
            for (var e = this.head, t = this.tail, r = e; null !== r; r = r.prev) {
                var n = r.prev;
                r.prev = r.next,
                r.next = n
            }
            return this.head = t,
            this.tail = e,
            this
        }
        ;
        try {
            r(94735)(n)
        } catch (c) {}
    },
    78341: function(e, t, r) {
        "use strict";
        r.r(t),
        r.d(t, {
            Struct: function() {
                return u
            },
            StructError: function() {
                return n
            },
            any: function() {
                return R
            },
            array: function() {
                return C
            },
            assert: function() {
                return d
            },
            assign: function() {
                return m
            },
            bigint: function() {
                return I
            },
            boolean: function() {
                return x
            },
            coerce: function() {
                return Y
            },
            create: function() {
                return h
            },
            date: function() {
                return A
            },
            defaulted: function() {
                return Q
            },
            define: function() {
                return _
            },
            deprecated: function() {
                return b
            },
            dynamic: function() {
                return y
            },
            empty: function() {
                return X
            },
            enums: function() {
                return M
            },
            func: function() {
                return N
            },
            instance: function() {
                return L
            },
            integer: function() {
                return T
            },
            intersection: function() {
                return P
            },
            is: function() {
                return p
            },
            lazy: function() {
                return w
            },
            literal: function() {
                return O
            },
            map: function() {
                return j
            },
            mask: function() {
                return f
            },
            max: function() {
                return te
            },
            min: function() {
                return re
            },
            never: function() {
                return B
            },
            nonempty: function() {
                return ne
            },
            nullable: function() {
                return D
            },
            number: function() {
                return F
            },
            object: function() {
                return $
            },
            omit: function() {
                return v
            },
            optional: function() {
                return U
            },
            partial: function() {
                return E
            },
            pattern: function() {
                return se
            },
            pick: function() {
                return k
            },
            record: function() {
                return H
            },
            refine: function() {
                return oe
            },
            regexp: function() {
                return W
            },
            set: function() {
                return q
            },
            size: function() {
                return ie
            },
            string: function() {
                return V
            },
            struct: function() {
                return S
            },
            trimmed: function() {
                return K
            },
            tuple: function() {
                return z
            },
            type: function() {
                return J
            },
            union: function() {
                return G
            },
            unknown: function() {
                return Z
            },
            validate: function() {
                return g
            }
        });
        class n extends TypeError {
            constructor(e, t) {
                let r;
                const {message: n, explanation: s, ...i} = e
                  , {path: o} = e
                  , a = 0 === o.length ? n : `At path: ${o.join(".")} -- ${n}`;
                super(s ?? a),
                null != s && (this.cause = a),
                Object.assign(this, i),
                this.name = this.constructor.name,
                this.failures = ()=>r ?? (r = [e, ...t()])
            }
        }
        function s(e) {
            return "object" === typeof e && null != e
        }
        function i(e) {
            if ("[object Object]" !== Object.prototype.toString.call(e))
                return !1;
            const t = Object.getPrototypeOf(e);
            return null === t || t === Object.prototype
        }
        function o(e) {
            return "symbol" === typeof e ? e.toString() : "string" === typeof e ? JSON.stringify(e) : `${e}`
        }
        function a(e, t, r, n) {
            if (!0 === e)
                return;
            !1 === e ? e = {} : "string" === typeof e && (e = {
                message: e
            });
            const {path: s, branch: i} = t
              , {type: a} = r
              , {refinement: c, message: l=`Expected a value of type \`${a}\`${c ? ` with refinement \`${c}\`` : ""}, but received: \`${o(n)}\``} = e;
            return {
                value: n,
                type: a,
                refinement: c,
                key: s[s.length - 1],
                path: s,
                branch: i,
                ...e,
                message: l
            }
        }
        function *c(e, t, r, n) {
            var i;
            s(i = e) && "function" === typeof i[Symbol.iterator] || (e = [e]);
            for (const s of e) {
                const e = a(s, t, r, n);
                e && (yield e)
            }
        }
        function *l(e, t, r={}) {
            const {path: n=[], branch: i=[e], coerce: o=!1, mask: a=!1} = r
              , c = {
                path: n,
                branch: i
            };
            if (o && (e = t.coercer(e, c),
            a && "type" !== t.type && s(t.schema) && s(e) && !Array.isArray(e)))
                for (const s in e)
                    void 0 === t.schema[s] && delete e[s];
            let u = "valid";
            for (const s of t.validator(e, c))
                s.explanation = r.message,
                u = "not_valid",
                yield[s, void 0];
            for (let[d,h,f] of t.entries(e, c)) {
                const t = l(h, f, {
                    path: void 0 === d ? n : [...n, d],
                    branch: void 0 === d ? i : [...i, h],
                    coerce: o,
                    mask: a,
                    message: r.message
                });
                for (const r of t)
                    r[0] ? (u = null != r[0].refinement ? "not_refined" : "not_valid",
                    yield[r[0], void 0]) : o && (h = r[1],
                    void 0 === d ? e = h : e instanceof Map ? e.set(d, h) : e instanceof Set ? e.add(h) : s(e) && (void 0 !== h || d in e) && (e[d] = h))
            }
            if ("not_valid" !== u)
                for (const s of t.refiner(e, c))
                    s.explanation = r.message,
                    u = "not_refined",
                    yield[s, void 0];
            "valid" === u && (yield[void 0, e])
        }
        class u {
            constructor(e) {
                const {type: t, schema: r, validator: n, refiner: s, coercer: i=(e=>e), entries: o=function*() {}
                } = e;
                this.type = t,
                this.schema = r,
                this.entries = o,
                this.coercer = i,
                this.validator = n ? (e,t)=>c(n(e, t), t, this, e) : ()=>[],
                this.refiner = s ? (e,t)=>c(s(e, t), t, this, e) : ()=>[]
            }
            assert(e, t) {
                return d(e, this, t)
            }
            create(e, t) {
                return h(e, this, t)
            }
            is(e) {
                return p(e, this)
            }
            mask(e, t) {
                return f(e, this, t)
            }
            validate(e, t={}) {
                return g(e, this, t)
            }
        }
        function d(e, t, r) {
            const n = g(e, t, {
                message: r
            });
            if (n[0])
                throw n[0]
        }
        function h(e, t, r) {
            const n = g(e, t, {
                coerce: !0,
                message: r
            });
            if (n[0])
                throw n[0];
            return n[1]
        }
        function f(e, t, r) {
            const n = g(e, t, {
                coerce: !0,
                mask: !0,
                message: r
            });
            if (n[0])
                throw n[0];
            return n[1]
        }
        function p(e, t) {
            return !g(e, t)[0]
        }
        function g(e, t, r={}) {
            const s = l(e, t, r)
              , i = function(e) {
                const {done: t, value: r} = e.next();
                return t ? void 0 : r
            }(s);
            if (i[0]) {
                return [new n(i[0],(function*() {
                    for (const e of s)
                        e[0] && (yield e[0])
                }
                )), void 0]
            }
            return [void 0, i[1]]
        }
        function m(...e) {
            const t = "type" === e[0].type
              , r = e.map((e=>e.schema))
              , n = Object.assign({}, ...r);
            return t ? J(n) : $(n)
        }
        function _(e, t) {
            return new u({
                type: e,
                schema: null,
                validator: t
            })
        }
        function b(e, t) {
            return new u({
                ...e,
                refiner: (t,r)=>void 0 === t || e.refiner(t, r),
                validator: (r,n)=>void 0 === r || (t(r, n),
                e.validator(r, n))
            })
        }
        function y(e) {
            return new u({
                type: "dynamic",
                schema: null,
                *entries(t, r) {
                    const n = e(t, r);
                    yield*n.entries(t, r)
                },
                validator: (t,r)=>e(t, r).validator(t, r),
                coercer: (t,r)=>e(t, r).coercer(t, r),
                refiner: (t,r)=>e(t, r).refiner(t, r)
            })
        }
        function w(e) {
            let t;
            return new u({
                type: "lazy",
                schema: null,
                *entries(r, n) {
                    t ?? (t = e()),
                    yield*t.entries(r, n)
                },
                validator: (r,n)=>(t ?? (t = e()),
                t.validator(r, n)),
                coercer: (r,n)=>(t ?? (t = e()),
                t.coercer(r, n)),
                refiner: (r,n)=>(t ?? (t = e()),
                t.refiner(r, n))
            })
        }
        function v(e, t) {
            const {schema: r} = e
              , n = {
                ...r
            };
            for (const s of t)
                delete n[s];
            return "type" === e.type ? J(n) : $(n)
        }
        function E(e) {
            const t = e instanceof u ? {
                ...e.schema
            } : {
                ...e
            };
            for (const r in t)
                t[r] = U(t[r]);
            return $(t)
        }
        function k(e, t) {
            const {schema: r} = e
              , n = {};
            for (const s of t)
                n[s] = r[s];
            return $(n)
        }
        function S(e, t) {
            return console.warn("superstruct@0.11 - The `struct` helper has been renamed to `define`."),
            _(e, t)
        }
        function R() {
            return _("any", (()=>!0))
        }
        function C(e) {
            return new u({
                type: "array",
                schema: e,
                *entries(t) {
                    if (e && Array.isArray(t))
                        for (const [r,n] of t.entries())
                            yield[r, n, e]
                },
                coercer: e=>Array.isArray(e) ? e.slice() : e,
                validator: e=>Array.isArray(e) || `Expected an array value, but received: ${o(e)}`
            })
        }
        function I() {
            return _("bigint", (e=>"bigint" === typeof e))
        }
        function x() {
            return _("boolean", (e=>"boolean" === typeof e))
        }
        function A() {
            return _("date", (e=>e instanceof Date && !isNaN(e.getTime()) || `Expected a valid \`Date\` object, but received: ${o(e)}`))
        }
        function M(e) {
            const t = {}
              , r = e.map((e=>o(e))).join();
            for (const n of e)
                t[n] = n;
            return new u({
                type: "enums",
                schema: t,
                validator: t=>e.includes(t) || `Expected one of \`${r}\`, but received: ${o(t)}`
            })
        }
        function N() {
            return _("func", (e=>"function" === typeof e || `Expected a function, but received: ${o(e)}`))
        }
        function L(e) {
            return _("instance", (t=>t instanceof e || `Expected a \`${e.name}\` instance, but received: ${o(t)}`))
        }
        function T() {
            return _("integer", (e=>"number" === typeof e && !isNaN(e) && Number.isInteger(e) || `Expected an integer, but received: ${o(e)}`))
        }
        function P(e) {
            return new u({
                type: "intersection",
                schema: null,
                *entries(t, r) {
                    for (const n of e)
                        yield*n.entries(t, r)
                },
                *validator(t, r) {
                    for (const n of e)
                        yield*n.validator(t, r)
                },
                *refiner(t, r) {
                    for (const n of e)
                        yield*n.refiner(t, r)
                }
            })
        }
        function O(e) {
            const t = o(e)
              , r = typeof e;
            return new u({
                type: "literal",
                schema: "string" === r || "number" === r || "boolean" === r ? e : null,
                validator: r=>r === e || `Expected the literal \`${t}\`, but received: ${o(r)}`
            })
        }
        function j(e, t) {
            return new u({
                type: "map",
                schema: null,
                *entries(r) {
                    if (e && t && r instanceof Map)
                        for (const [n,s] of r.entries())
                            yield[n, n, e],
                            yield[n, s, t]
                },
                coercer: e=>e instanceof Map ? new Map(e) : e,
                validator: e=>e instanceof Map || `Expected a \`Map\` object, but received: ${o(e)}`
            })
        }
        function B() {
            return _("never", (()=>!1))
        }
        function D(e) {
            return new u({
                ...e,
                validator: (t,r)=>null === t || e.validator(t, r),
                refiner: (t,r)=>null === t || e.refiner(t, r)
            })
        }
        function F() {
            return _("number", (e=>"number" === typeof e && !isNaN(e) || `Expected a number, but received: ${o(e)}`))
        }
        function $(e) {
            const t = e ? Object.keys(e) : []
              , r = B();
            return new u({
                type: "object",
                schema: e || null,
                *entries(n) {
                    if (e && s(n)) {
                        const s = new Set(Object.keys(n));
                        for (const r of t)
                            s.delete(r),
                            yield[r, n[r], e[r]];
                        for (const e of s)
                            yield[e, n[e], r]
                    }
                },
                validator: e=>s(e) || `Expected an object, but received: ${o(e)}`,
                coercer: e=>s(e) ? {
                    ...e
                } : e
            })
        }
        function U(e) {
            return new u({
                ...e,
                validator: (t,r)=>void 0 === t || e.validator(t, r),
                refiner: (t,r)=>void 0 === t || e.refiner(t, r)
            })
        }
        function H(e, t) {
            return new u({
                type: "record",
                schema: null,
                *entries(r) {
                    if (s(r))
                        for (const n in r) {
                            const s = r[n];
                            yield[n, n, e],
                            yield[n, s, t]
                        }
                },
                validator: e=>s(e) || `Expected an object, but received: ${o(e)}`
            })
        }
        function W() {
            return _("regexp", (e=>e instanceof RegExp))
        }
        function q(e) {
            return new u({
                type: "set",
                schema: null,
                *entries(t) {
                    if (e && t instanceof Set)
                        for (const r of t)
                            yield[r, r, e]
                },
                coercer: e=>e instanceof Set ? new Set(e) : e,
                validator: e=>e instanceof Set || `Expected a \`Set\` object, but received: ${o(e)}`
            })
        }
        function V() {
            return _("string", (e=>"string" === typeof e || `Expected a string, but received: ${o(e)}`))
        }
        function z(e) {
            const t = B();
            return new u({
                type: "tuple",
                schema: null,
                *entries(r) {
                    if (Array.isArray(r)) {
                        const n = Math.max(e.length, r.length);
                        for (let s = 0; s < n; s++)
                            yield[s, r[s], e[s] || t]
                    }
                },
                validator: e=>Array.isArray(e) || `Expected an array, but received: ${o(e)}`
            })
        }
        function J(e) {
            const t = Object.keys(e);
            return new u({
                type: "type",
                schema: e,
                *entries(r) {
                    if (s(r))
                        for (const n of t)
                            yield[n, r[n], e[n]]
                },
                validator: e=>s(e) || `Expected an object, but received: ${o(e)}`,
                coercer: e=>s(e) ? {
                    ...e
                } : e
            })
        }
        function G(e) {
            const t = e.map((e=>e.type)).join(" | ");
            return new u({
                type: "union",
                schema: null,
                coercer(t) {
                    for (const r of e) {
                        const [e,n] = r.validate(t, {
                            coerce: !0
                        });
                        if (!e)
                            return n
                    }
                    return t
                },
                validator(r, n) {
                    const s = [];
                    for (const t of e) {
                        const [...e] = l(r, t, n)
                          , [i] = e;
                        if (!i[0])
                            return [];
                        for (const [t] of e)
                            t && s.push(t)
                    }
                    return [`Expected the value to satisfy a union of \`${t}\`, but received: ${o(r)}`, ...s]
                }
            })
        }
        function Z() {
            return _("unknown", (()=>!0))
        }
        function Y(e, t, r) {
            return new u({
                ...e,
                coercer: (n,s)=>p(n, t) ? e.coercer(r(n, s), s) : e.coercer(n, s)
            })
        }
        function Q(e, t, r={}) {
            return Y(e, Z(), (e=>{
                const n = "function" === typeof t ? t() : t;
                if (void 0 === e)
                    return n;
                if (!r.strict && i(e) && i(n)) {
                    const t = {
                        ...e
                    };
                    let r = !1;
                    for (const e in n)
                        void 0 === t[e] && (t[e] = n[e],
                        r = !0);
                    if (r)
                        return t
                }
                return e
            }
            ))
        }
        function K(e) {
            return Y(e, V(), (e=>e.trim()))
        }
        function X(e) {
            return oe(e, "empty", (t=>{
                const r = ee(t);
                return 0 === r || `Expected an empty ${e.type} but received one with a size of \`${r}\``
            }
            ))
        }
        function ee(e) {
            return e instanceof Map || e instanceof Set ? e.size : e.length
        }
        function te(e, t, r={}) {
            const {exclusive: n} = r;
            return oe(e, "max", (r=>n ? r < t : r <= t || `Expected a ${e.type} less than ${n ? "" : "or equal to "}${t} but received \`${r}\``))
        }
        function re(e, t, r={}) {
            const {exclusive: n} = r;
            return oe(e, "min", (r=>n ? r > t : r >= t || `Expected a ${e.type} greater than ${n ? "" : "or equal to "}${t} but received \`${r}\``))
        }
        function ne(e) {
            return oe(e, "nonempty", (t=>ee(t) > 0 || `Expected a nonempty ${e.type} but received an empty one`))
        }
        function se(e, t) {
            return oe(e, "pattern", (r=>t.test(r) || `Expected a ${e.type} matching \`/${t.source}/\` but received "${r}"`))
        }
        function ie(e, t, r=t) {
            const n = `Expected a ${e.type}`
              , s = t === r ? `of \`${t}\`` : `between \`${t}\` and \`${r}\``;
            return oe(e, "size", (e=>{
                if ("number" === typeof e || e instanceof Date)
                    return t <= e && e <= r || `${n} ${s} but received \`${e}\``;
                if (e instanceof Map || e instanceof Set) {
                    const {size: i} = e;
                    return t <= i && i <= r || `${n} with a size ${s} but received one with a size of \`${i}\``
                }
                {
                    const {length: i} = e;
                    return t <= i && i <= r || `${n} with a length ${s} but received one with a length of \`${i}\``
                }
            }
            ))
        }
        function oe(e, t, r) {
            return new u({
                ...e,
                *refiner(n, s) {
                    yield*e.refiner(n, s);
                    const i = c(r(n, s), s, e, n);
                    for (const e of i)
                        yield{
                            ...e,
                            refinement: t
                        }
                }
            })
        }
    }
}]);
