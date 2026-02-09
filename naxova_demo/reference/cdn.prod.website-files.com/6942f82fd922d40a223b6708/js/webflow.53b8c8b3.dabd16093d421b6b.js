(() => {
    var e = {
            9078: function(e, t, a) {
                "use strict";
                var i = a(3949),
                    n = a(5134);
                i.define("tabs", e.exports = function(e) {
                    var t, a, r = {},
                        o = e.tram,
                        s = e(document),
                        d = i.env,
                        l = d.safari,
                        c = d(),
                        u = "data-w-tab",
                        f = ".w-tabs",
                        g = "w--current",
                        p = "w--tab-active",
                        b = n.triggers,
                        T = !1;

                    function E() {
                        a = c && i.env("design"), (t = s.find(f)).length && (t.each(m), i.env("preview") && !T && t.each(I), y(), i.redraw.on(r.redraw))
                    }

                    function y() {
                        i.redraw.off(r.redraw)
                    }

                    function I(t, a) {
                        var i = e.data(a, f);
                        i && (i.links && i.links.each(b.reset), i.panes && i.panes.each(b.reset))
                    }

                    function m(t, i) {
                        var n = f.substr(1) + "-" + t,
                            r = e(i),
                            o = e.data(i, f);
                        if (o || (o = e.data(i, f, {
                                el: r,
                                config: {}
                            })), o.current = null, o.tabIdentifier = n + "-" + u, o.paneIdentifier = n + "-data-w-pane", o.menu = r.children(".w-tab-menu"), o.links = o.menu.children(".w-tab-link"), o.content = r.children(".w-tab-content"), o.panes = o.content.children(".w-tab-pane"), o.el.off(f), o.links.off(f), o.menu.attr("role", "tablist"), o.links.attr("tabindex", "-1"), (d = {}).easing = (s = o).el.attr("data-easing") || "ease", l = d.intro = (l = parseInt(s.el.attr("data-duration-in"), 10)) == l ? l : 0, c = d.outro = (c = parseInt(s.el.attr("data-duration-out"), 10)) == c ? c : 0, d.immediate = !l && !c, s.config = d, !a) {
                            o.links.on("click" + f, (p = o, function(e) {
                                e.preventDefault();
                                var t = e.currentTarget.getAttribute(u);
                                t && h(p, {
                                    tab: t
                                })
                            })), o.links.on("keydown" + f, (b = o, function(e) {
                                var t, a = (t = b.current, Array.prototype.findIndex.call(b.links, e => e.getAttribute(u) === t, null)),
                                    i = e.key,
                                    n = {
                                        ArrowLeft: a - 1,
                                        ArrowUp: a - 1,
                                        ArrowRight: a + 1,
                                        ArrowDown: a + 1,
                                        End: b.links.length - 1,
                                        Home: 0
                                    };
                                if (i in n) {
                                    e.preventDefault();
                                    var r = n[i]; - 1 === r && (r = b.links.length - 1), r === b.links.length && (r = 0);
                                    var o = b.links[r].getAttribute(u);
                                    o && h(b, {
                                        tab: o
                                    })
                                }
                            }));
                            var s, d, l, c, p, b, T = o.links.filter("." + g).attr(u);
                            T && h(o, {
                                tab: T,
                                immediate: !0
                            })
                        }
                    }

                    function h(t, a) {
                        a = a || {};
                        var n, r = t.config,
                            s = r.easing,
                            d = a.tab;
                        if (d !== t.current) {
                            t.current = d, t.links.each(function(i, o) {
                                var s = e(o);
                                if (a.immediate || r.immediate) {
                                    var l = t.panes[i];
                                    o.id || (o.id = t.tabIdentifier + "-" + i), l.id || (l.id = t.paneIdentifier + "-" + i), o.href = "#" + l.id, o.setAttribute("role", "tab"), o.setAttribute("aria-controls", l.id), o.setAttribute("aria-selected", "false"), l.setAttribute("role", "tabpanel"), l.setAttribute("aria-labelledby", o.id)
                                }
                                o.getAttribute(u) === d ? (n = o, s.addClass(g).removeAttr("tabindex").attr({
                                    "aria-selected": "true"
                                }).each(b.intro)) : s.hasClass(g) && s.removeClass(g).attr({
                                    tabindex: "-1",
                                    "aria-selected": "false"
                                }).each(b.outro)
                            });
                            var c = [],
                                f = [];
                            t.panes.each(function(t, a) {
                                var i = e(a);
                                a.getAttribute(u) === d ? c.push(a) : i.hasClass(p) && f.push(a)
                            });
                            var E = e(c),
                                y = e(f);
                            if (a.immediate || r.immediate) {
                                E.addClass(p).each(b.intro), y.removeClass(p), T || i.redraw.up();
                                return
                            }
                            var I = window.scrollX,
                                m = window.scrollY;
                            n.focus(), window.scrollTo(I, m), y.length && r.outro ? (y.each(b.outro), o(y).add("opacity " + r.outro + "ms " + s, {
                                fallback: l
                            }).start({
                                opacity: 0
                            }).then(() => v(r, y, E))) : v(r, y, E)
                        }
                    }

                    function v(e, t, a) {
                        if (t.removeClass(p).css({
                                opacity: "",
                                transition: "",
                                transform: "",
                                width: "",
                                height: ""
                            }), a.addClass(p).each(b.intro), i.redraw.up(), !e.intro) return o(a).set({
                            opacity: 1
                        });
                        o(a).set({
                            opacity: 0
                        }).redraw().add("opacity " + e.intro + "ms " + e.easing, {
                            fallback: l
                        }).start({
                            opacity: 1
                        })
                    }
                    return r.ready = r.design = r.preview = E, r.redraw = function() {
                        T = !0, E(), T = !1
                    }, r.destroy = function() {
                        (t = s.find(f)).length && (t.each(I), y())
                    }, r
                })
            },
            5050: function(e, t, a) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), Object.defineProperty(t, "plugin", {
                    enumerable: !0,
                    get: function() {
                        return i.plugin
                    }
                });
                let i = a(4574)
            },
            2605: function(e, t) {
                "use strict";

                function a(e) {
                    e.addAction("class", {
                        createCustomTween: (e, t, a, i, n, r) => {
                            let o = a.class,
                                s = o ? .selectors || [],
                                d = o ? .operation,
                                l = s ? n.map(e => ({
                                    element: e,
                                    classList: [...e.classList]
                                })) : [],
                                c = () => {
                                    if (d && s)
                                        for (let e of n) "addClass" === d ? s.forEach(t => e.classList.add(t)) : "removeClass" === d ? s.forEach(t => e.classList.remove(t)) : "toggleClass" === d && s.forEach(t => e.classList.toggle(t))
                                };
                            return e.to({}, {
                                duration: .001,
                                onComplete: c,
                                onReverseComplete: c
                            }, r && 0 !== r ? r : .001), () => {
                                if (s) {
                                    for (let e of l)
                                        if (e.element && (e.element instanceof HTMLElement && (e.element.className = ""), e.element.classList))
                                            for (let t of e.classList) e.element.classList.add(t)
                                }
                            }
                        }
                    }).addAction("style", {
                        createTweenConfig: e => {
                            let t = {
                                to: {},
                                from: {}
                            };
                            for (let a in e) {
                                let i = e[a],
                                    n = Array.isArray(i) ? i[1] : i,
                                    r = Array.isArray(i) ? i[0] : void 0;
                                null != n && (t.to[a] = n), null != r && (t.from[a] = r)
                            }
                            return t
                        }
                    }).addAction("transform", {
                        createTweenConfig: e => {
                            let t = {
                                to: {},
                                from: {}
                            };
                            for (let a in e) {
                                let i = e[a],
                                    n = Array.isArray(i) ? i[1] : i,
                                    r = Array.isArray(i) ? i[0] : void 0;
                                switch (a) {
                                    case "autoAlpha":
                                    case "opacity":
                                        null != n && "string" == typeof n && (n = parseFloat(n) / 100), null != r && "string" == typeof r && (r = parseFloat(r) / 100);
                                        break;
                                    case "transformOrigin":
                                        "string" == typeof i ? r = n = n || i : "string" == typeof r ? n = r : "string" == typeof n && (r = n);
                                        break;
                                    case "xPercent":
                                    case "yPercent":
                                        null != n && "string" == typeof n && (n = parseFloat(n)), null != r && "string" == typeof r && (r = parseFloat(r))
                                }
                                null != n && (t.to[a] = n), null != r && (t.from[a] = r)
                            }
                            return t
                        }
                    })
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), Object.defineProperty(t, "build", {
                    enumerable: !0,
                    get: function() {
                        return a
                    }
                })
            },
            8281: function(e, t) {
                "use strict";

                function a(e) {
                    e.addAction("lottie", {
                        createCustomTween: (e, t, a, n, r, o) => {
                            let s = a.lottie;
                            if (!s) return;
                            let d = s.from ? ? i.FROM,
                                l = s.to ? ? i.TO,
                                c = r[0];
                            if (!c || !window.Webflow) return;
                            let u = window.Webflow.require ? .("lottie");
                            if (!u) return;
                            let f = u.createInstance(c);
                            if (!f) return;
                            let g = () => {
                                let t = f.frames,
                                    a = Math.round(d * t),
                                    i = Math.round(l * t);
                                null === f.gsapFrame && (f.gsapFrame = a), n.ease || (n = { ...n,
                                    ease: "none"
                                }), e.fromTo(f, {
                                    gsapFrame: a
                                }, {
                                    gsapFrame: i,
                                    ...n
                                }, o || 0)
                            };
                            return f.isLoaded ? g() : f.onDataReady(g), () => {
                                f && (f.goToFrameAndStop(0), f.gsapFrame = null)
                            }
                        }
                    })
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), Object.defineProperty(t, "buildLottieAction", {
                    enumerable: !0,
                    get: function() {
                        return a
                    }
                });
                let i = {
                    FROM: 0,
                    TO: 1
                }
            },
            6571: function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var a = {
                    buildSplineAction: function() {
                        return n
                    },
                    fadeObject: function() {
                        return f
                    }
                };
                for (var i in a) Object.defineProperty(t, i, {
                    enumerable: !0,
                    get: a[i]
                });

                function n(e) {
                    e.addAction("spline", {
                        createCustomTween: (e, t, a, i, n, r) => {
                            let s = [],
                                d = n[0];
                            if (!d || !window.Webflow || !a.objectId) return;
                            let l = a.spline,
                                c = window.Webflow ? .require ? .("spline");
                            if (!c) return;
                            let u = t => {
                                    i.ease || (i = { ...i,
                                        ease: "none"
                                    });
                                    let {
                                        force3D: n,
                                        ...d
                                    } = i;
                                    if (i = { ...d
                                        }, !t.spline ? .findObjectById) return;
                                    let c = l ? .stateName && "" !== l.stateName ? t.spline.findObjectById(a.objectId || "") : t.spline._scene ? .entityByUuid[a.objectId || ""];
                                    if (!c) return;
                                    let u = o(c);
                                    if (l ? .stateName && "" !== l.stateName) {
                                        if (c.transition) {
                                            let t = c.transition({
                                                    to: l.stateName,
                                                    autoPlay: !1,
                                                    duration: "string" == typeof i.duration ? parseFloat(i.duration) : i.duration ? ? 1,
                                                    delay: 0
                                                }),
                                                a = {
                                                    time: 0
                                                };
                                            e.to(a, {
                                                time: i.duration ? ? 1,
                                                ease: i.ease,
                                                duration: i.duration ? ? 1,
                                                onUpdate: () => {
                                                    t.seek(a.time)
                                                }
                                            }, r || 0)
                                        }
                                    } else {
                                        if (!l) return;
                                        let a = g(c, l);
                                        if (void 0 !== l.intensity && a.push({
                                                object: c,
                                                props: {
                                                    intensity: l.intensity
                                                }
                                            }), void 0 !== l.zoom && c.isCamera && ("OrthographicCamera" === c._cameraType && c.orthoCamera && a.push({
                                                object: c.orthoCamera,
                                                props: {
                                                    zoom: l.zoom
                                                }
                                            }), "PerspectiveCamera" === c._cameraType && c.perspCamera && a.push({
                                                object: c.perspCamera,
                                                props: {
                                                    fov: c.perspCamera.fov / l.zoom
                                                }
                                            })), void 0 !== l.opacity) {
                                            for (let e of Array.isArray(c.material) ? c.material : c.material ? [c.material] : []) e && (e.transparent = !0, e.depthWrite = l.opacity > .01);
                                            f(c, l.opacity, e, {
                                                pos: r,
                                                duration: .6,
                                                ease: i.ease
                                            }, s)
                                        }
                                        let n = {
                                            shared: t.spline._sharedAssetsManager,
                                            scene: t.spline._scene
                                        };
                                        p(e, c, t, n, i, r, s), a.forEach(({
                                            object: t,
                                            props: a
                                        }) => {
                                            Object.keys(a).length > 0 && e.to(t, { ...a,
                                                ease: i.ease
                                            }, r || 0)
                                        })
                                    }
                                    return b(c, t, u, l)
                                },
                                T = c.getInstance(d);
                            if (T) return u(T); {
                                let e = () => {
                                    let t = c.getInstance(d);
                                    t && u(t), d.removeEventListener("w-spline-load", e)
                                };
                                return d.addEventListener("w-spline-load", e), () => {
                                    d.removeEventListener("w-spline-load", e)
                                }
                            }
                        }
                    })
                }
                let r = (e, t) => {
                        let a = {};
                        return ["X", "Y", "Z"].forEach(i => {
                            let n = e[`${t}${i}`];
                            void 0 !== n && "number" == typeof n && (a[i.toLowerCase()] = n)
                        }), a
                    },
                    o = e => ({
                        position: { ...e.position
                        },
                        rotation: {
                            x: e.rotation._x,
                            y: e.rotation._y,
                            z: e.rotation._z
                        },
                        scale: { ...e.scale
                        },
                        ...e.color && {
                            color: { ...e.color
                            }
                        },
                        ...void 0 !== e.intensity && {
                            intensity: e.intensity
                        },
                        ...void 0 !== e.zoom && {
                            zoom: e.zoom
                        }
                    }),
                    s = (e, t, a, i) => {
                        e.push({
                            mat: t,
                            layerId: a,
                            props: i
                        })
                    },
                    d = (e, t, a, i, n, r, o, d, l) => {
                        n.to(e, {
                            alpha: i,
                            duration: r,
                            ease: o,
                            onUpdate: () => s(l, t, a, {
                                alpha: e.alpha
                            })
                        }, d)
                    },
                    l = (e, t, a, i, n, r, o, d, l) => {
                        let c = e.ior ? ? 1.3,
                            u = e.thickness ? ? 10;
                        n.to(e, {
                            alpha: 1 - i,
                            ior: window.gsap.utils.interpolate(c, 1, 1 - i),
                            thickness: window.gsap.utils.interpolate(u, 0, 1 - i),
                            duration: r,
                            ease: o,
                            onUpdate: () => s(l, t, a, {
                                alpha: e.alpha,
                                ior: e.ior,
                                thickness: e.thickness
                            })
                        }, d), e.visible = i > .01
                    },
                    c = (e, t, a, i, n, r, o, d, l) => {
                        void 0 !== e.alphaOverride && n.to(e, {
                            alphaOverride: i,
                            alpha: i,
                            duration: r,
                            ease: o,
                            onUpdate: () => s(l, t, a, {
                                alphaOverride: e.alphaOverride,
                                alpha: e.alpha
                            })
                        }, d)
                    },
                    u = (e, t, a, i, n, r, o, s) => {
                        let u = e ? .data;
                        if (!u || !u.visible) return;
                        let f = {
                            color: d,
                            depth: d,
                            outline: d,
                            glow: d,
                            emissive: d,
                            transmission: l,
                            light: c
                        }[u.type];
                        f && f(u, t, e.id, a, i, n, r, o, s)
                    };

                function f(e, t, a, i = {}, n) {
                    if (!e) return;
                    let {
                        duration: r = .6,
                        ease: o = "none",
                        pos: s = 0
                    } = i;
                    for (let i of Array.isArray(e.material) ? e.material : [e.material]) {
                        let d = i ? .data ? .layers;
                        d && (i.transparent = !0, i.depthWrite = t > .01, e.renderOrder = 999, d.forEach(e => {
                            u(e, i, t, a, r, o, s, n)
                        }))
                    }
                }
                let g = (e, t) => {
                        let a = [];
                        return ["position", "rotation", "scale"].forEach(i => {
                            let n = r(t, i);
                            Object.keys(n).length > 0 && a.push({
                                object: e[i],
                                props: n
                            })
                        }), a
                    },
                    p = (e, t, a, i, n, r, o) => {
                        let s = !1;
                        e.to({
                            int: 0
                        }, {
                            int: 100,
                            ...n,
                            onStart: () => {
                                s = !0
                            },
                            onReverseComplete: () => {
                                s = !1
                            },
                            onUpdate: () => {
                                s || (s = !0)
                            },
                            onComplete: () => {
                                s = !1
                            }
                        }, r || 0), window.gsap.ticker.add(() => {
                            if (s) {
                                if (o.length > 0) {
                                    for (let e of o) e.mat.updateByOp ? .({
                                        type: 0,
                                        path: ["layers", e.layerId],
                                        props: e.props
                                    }, e.mat.data, i);
                                    o.length = 0
                                }
                                t.updateMatrix(), t.updateMatrixWorld(!0), t.singleBBoxNeedsUpdate = !0, t.recursiveBBoxNeedsUpdate = !0, t.isCamera && ("OrthographicCamera" === t._cameraType ? t.orthoCamera ? .updateProjectionMatrix() : "PerspectiveCamera" === t._cameraType && t.perspCamera ? .updateProjectionMatrix()), a.spline.requestRender()
                            }
                        })
                    },
                    b = (e, t, a, i, n) => () => {
                        if (n && window.gsap.ticker.remove(n), e && a) {
                            if (i.stateName && "" !== i.stateName) return void t.spline.requestRender();
                            if (Object.assign(e.position, a.position), Object.assign(e.rotation, {
                                    _x: a.rotation.x,
                                    _y: a.rotation.y,
                                    _z: a.rotation.z
                                }), Object.assign(e.scale, a.scale), a.color && e.color && Object.assign(e.color, a.color), void 0 !== i.intensity && void 0 !== a.intensity && (e.intensity = a.intensity), void 0 !== i.zoom && void 0 !== a.zoom && e.isCamera && ("OrthographicCamera" === e._cameraType && e.orthoCamera ? (e.orthoCamera.zoom = a.zoom, e.orthoCamera.updateProjectionMatrix()) : "PerspectiveCamera" === e._cameraType && e.perspCamera && (e.perspCamera.fov *= a.zoom, e.perspCamera.updateProjectionMatrix())), void 0 !== i.opacity) {
                                for (let t of Array.isArray(e.material) ? e.material : [e.material])
                                    if (t) {
                                        t.transparent = !1, t.depthWrite = !0;
                                        let e = t ? .data ? .layers;
                                        e && e.forEach(e => {
                                            let t = e ? .data;
                                            t && t.visible && ("light" === t.type && void 0 !== t.alphaOverride ? (t.alphaOverride = 1, t.alpha = 1) : ["color", "depth", "outline", "glow", "emissive"].includes(t.type) ? t.alpha = 1 : "transmission" === t.type && (t.alpha = 0, t.visible = !0))
                                        })
                                    }
                                e.renderOrder = 0
                            }
                            e.updateMatrix(), e.updateMatrixWorld(!0), e.singleBBoxNeedsUpdate = !0, e.recursiveBBoxNeedsUpdate = !0, t.spline.requestRender()
                        }
                    }
            },
            9845: function(e, t, a) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), Object.defineProperty(t, "build", {
                    enumerable: !0,
                    get: function() {
                        return r
                    }
                });
                let i = a(2908),
                    n = a(6969);

                function r(e) {
                    e.addCondition("prefersReducedMotion", new o).addCondition("webflowBreakpoints", new s).addCondition("customMediaQuery", new d).addCondition("colorScheme", new l).addCondition("elementDataAttribute", new c).addCondition("currentTime", new u).addCondition("elementState", new f)
                }
                class o {
                    cache = null;
                    isReactive = !0;
                    ensure() {
                        if (!this.cache) {
                            let e = window.matchMedia("(prefers-reduced-motion: reduce)");
                            this.cache = {
                                mql: e,
                                matches: e.matches,
                                callbacks: new Set
                            }, e.addEventListener("change", e => {
                                for (let t of (this.cache.matches = e.matches, this.cache.callbacks)) t()
                            })
                        }
                        return this.cache
                    }
                    async evaluate(e) {
                        let [t, , a] = e;
                        if (t !== i.IX3_WF_EXTENSION_KEYS.PREFERS_REDUCED_MOTION) return !1;
                        let n = this.ensure().matches;
                        return 1 === a ? !n : n
                    }
                    observe(e, t) {
                        let [a] = e;
                        if (a !== i.IX3_WF_EXTENSION_KEYS.PREFERS_REDUCED_MOTION) return n.noop;
                        let r = this.ensure(),
                            o = async () => t(await this.evaluate(e));
                        return r.callbacks.add(o), () => r.callbacks.delete(o)
                    }
                    dispose() {
                        this.cache && (this.cache.callbacks.clear(), this.cache = null)
                    }
                }
                class s {
                    static breakpointQueries = {
                        main: "(min-width: 992px)",
                        medium: "(max-width: 991px) and (min-width: 768px)",
                        small: "(max-width: 767px) and (min-width: 480px)",
                        tiny: "(max-width: 479px)",
                        large: "(min-width: 1280px)",
                        xl: "(min-width: 1440px)",
                        xxl: "(min-width: 1920px)"
                    };
                    cache = new Map;
                    isReactive = !0;
                    ensure(e) {
                        let t = this.cache.get(e);
                        if (!t) {
                            let a = window.matchMedia(e);
                            t = {
                                mql: a,
                                matches: a.matches,
                                callbacks: new Set
                            }, a.addEventListener("change", e => {
                                for (let a of (t.matches = e.matches, t.callbacks)) a()
                            }), this.cache.set(e, t)
                        }
                        return t
                    }
                    getResult(e) {
                        return !!e && this.ensure(e).matches
                    }
                    observeQ(e, t) {
                        if (!e) return n.noop;
                        let a = this.ensure(e);
                        return a.callbacks.add(t), () => a.callbacks.delete(t)
                    }
                    async evaluate(e) {
                        let [t, a, n] = e;
                        if (t !== i.IX3_WF_EXTENSION_KEYS.WEBFLOW_BREAKPOINTS || !a) return !1;
                        let {
                            breakpoints: r
                        } = a;
                        if (!r ? .length) return 1 === n;
                        let o = r.some(e => {
                            let t = s.breakpointQueries[e];
                            return !!t && this.getResult(t)
                        });
                        return 1 === n ? !o : o
                    }
                    observe(e, t) {
                        let [a, r] = e;
                        if (a !== i.IX3_WF_EXTENSION_KEYS.WEBFLOW_BREAKPOINTS || !r) return n.noop;
                        let {
                            breakpoints: o
                        } = r;
                        if (!o ? .length) return n.noop;
                        let d = async () => t(await this.evaluate(e)),
                            l = [];
                        return o.forEach(e => {
                            let t = s.breakpointQueries[e];
                            t && l.push(this.observeQ(t, d))
                        }), () => l.forEach(e => e())
                    }
                    dispose() {
                        this.cache.forEach(e => e.callbacks.clear()), this.cache.clear()
                    }
                }
                class d {
                    cache = new Map;
                    isReactive = !0;
                    ensure(e) {
                        let t = this.cache.get(e);
                        if (!t) {
                            let a = window.matchMedia(e);
                            t = {
                                mql: a,
                                matches: a.matches,
                                callbacks: new Set
                            }, a.addEventListener("change", e => {
                                for (let a of (t.matches = e.matches, t.callbacks)) a()
                            }), this.cache.set(e, t)
                        }
                        return t
                    }
                    getResult(e) {
                        return !!e && this.ensure(e).matches
                    }
                    observeQ(e, t) {
                        if (!e) return n.noop;
                        let a = this.ensure(e);
                        return a.callbacks.add(t), () => a.callbacks.delete(t)
                    }
                    async evaluate(e) {
                        let [t, a, n] = e;
                        if (t !== i.IX3_WF_EXTENSION_KEYS.CUSTOM_MEDIA_QUERY || !a) return !1;
                        let {
                            query: r
                        } = a;
                        if (!r ? .trim()) return 1 === n;
                        let o = this.getResult(r);
                        return 1 === n ? !o : o
                    }
                    observe(e, t) {
                        let [a, r] = e;
                        if (a !== i.IX3_WF_EXTENSION_KEYS.CUSTOM_MEDIA_QUERY || !r) return n.noop;
                        let {
                            query: o
                        } = r;
                        if (!o ? .trim()) return n.noop;
                        let s = async () => t(await this.evaluate(e));
                        return this.observeQ(o, s)
                    }
                    dispose() {
                        this.cache.forEach(e => e.callbacks.clear()), this.cache.clear()
                    }
                }
                class l {
                    cache = null;
                    isReactive = !0;
                    ensure() {
                        if (!this.cache) {
                            let e = window.matchMedia("(prefers-color-scheme: dark)");
                            this.cache = {
                                mql: e,
                                matches: e.matches,
                                callbacks: new Set
                            }, e.addEventListener("change", e => {
                                for (let t of (this.cache.matches = e.matches, this.cache.callbacks)) t()
                            })
                        }
                        return this.cache
                    }
                    async evaluate(e) {
                        let [t, a, n] = e;
                        if (t !== i.IX3_WF_EXTENSION_KEYS.COLOR_SCHEME || !a) return !1;
                        let {
                            scheme: r
                        } = a, o = this.ensure().matches, s = "dark" === r ? o : !o;
                        return 1 === n ? !s : s
                    }
                    observe(e, t) {
                        let [a] = e;
                        if (a !== i.IX3_WF_EXTENSION_KEYS.COLOR_SCHEME) return n.noop;
                        let r = this.ensure(),
                            o = async () => t(await this.evaluate(e));
                        return r.callbacks.add(o), () => r.callbacks.delete(o)
                    }
                    dispose() {
                        this.cache && (this.cache.callbacks.clear(), this.cache = null)
                    }
                }
                class c {
                    observers = new Map;
                    isReactive = !1;
                    compare(e, t, a) {
                        if (null === e) return !1;
                        switch (a) {
                            case "=":
                                return e === t;
                            case "~":
                                return e.includes(t);
                            case "^":
                                return e.startsWith(t);
                            case "$":
                                return e.endsWith(t);
                            case "?":
                                return !0;
                            case ">":
                                return parseFloat(e) > parseFloat(t);
                            case "<":
                                return parseFloat(e) < parseFloat(t);
                            case ">=":
                                return parseFloat(e) >= parseFloat(t);
                            case "<=":
                                return parseFloat(e) <= parseFloat(t);
                            default:
                                return !1
                        }
                    }
                    async evaluate(e) {
                        let [t, a, n] = e;
                        if (t !== i.IX3_WF_EXTENSION_KEYS.ELEMENT_DATA_ATTRIBUTE || !a) return !1;
                        let {
                            selector: r,
                            attribute: o,
                            value: s = "",
                            operator: d
                        } = a, l = 1 === n;
                        if (!r || !o) return l;
                        let c = document.querySelector(r);
                        if (!c) return l;
                        let u = this.compare(c.getAttribute(`data-${o}`), String(s), d);
                        return l ? !u : u
                    }
                    observe(e, t) {
                        if (e[0] !== i.IX3_WF_EXTENSION_KEYS.ELEMENT_DATA_ATTRIBUTE || !e[1]) return n.noop;
                        let {
                            selector: a,
                            attribute: r
                        } = e[1];
                        return a && r ? this.observeAttr(a, r, e, t) : n.noop
                    }
                    observeAttr(e, t, a, i) {
                        let n = `elementDataAttribute:${e}:${t}`,
                            r = this.observers.get(n);
                        if (!r) {
                            let a = new MutationObserver(e => {
                                    for (let a of e)
                                        if ("attributes" === a.type && a.attributeName === `data-${t}`) {
                                            r ? .callbacks.forEach(e => e());
                                            break
                                        }
                                }),
                                i = document.querySelector(e);
                            i && a.observe(i, {
                                attributes: !0,
                                attributeFilter: [`data-${t}`]
                            }), r = {
                                observer: a,
                                callbacks: new Set
                            }, this.observers.set(n, r)
                        }
                        let o = () => this.evaluate(a).then(i);
                        return r.callbacks.add(o), () => {
                            let e = this.observers.get(n);
                            e && (e.callbacks.delete(o), e.callbacks.size || (e.observer.disconnect(), this.observers.delete(n)))
                        }
                    }
                    dispose() {
                        this.observers.forEach(e => {
                            e.observer.disconnect(), e.callbacks.clear()
                        }), this.observers.clear()
                    }
                }
                class u {
                    intervalId = null;
                    callbacks = new Set;
                    isReactive = !0;
                    parseTime(e) {
                        let t = e.match(/^(\d{1,2}):(\d{2})$/);
                        if (!t) return null;
                        let a = parseInt(t[1], 10),
                            i = parseInt(t[2], 10);
                        return a < 0 || a > 23 || i < 0 || i > 59 ? null : {
                            hours: a,
                            minutes: i
                        }
                    }
                    getCurrentTime() {
                        let e = new Date;
                        return {
                            hours: e.getHours(),
                            minutes: e.getMinutes()
                        }
                    }
                    timeToMinutes(e) {
                        return 60 * e.hours + e.minutes
                    }
                    compareTime(e, t, a, i) {
                        let n = this.parseTime(a);
                        if (!n) return !1;
                        let r = this.timeToMinutes(e),
                            o = this.timeToMinutes(n);
                        switch (t) {
                            case "before":
                                return r < o;
                            case "after":
                                return r > o;
                            case "between":
                                {
                                    if (!i) return !1;
                                    let e = this.parseTime(i);
                                    if (!e) return !1;
                                    let t = this.timeToMinutes(e);
                                    return r >= o && r <= t
                                }
                            default:
                                return !1
                        }
                    }
                    async evaluate(e) {
                        let [t, a, n] = e;
                        if (t !== i.IX3_WF_EXTENSION_KEYS.CURRENT_TIME || !a) return !1;
                        let {
                            comparison: r,
                            time: o,
                            endTime: s
                        } = a;
                        if (!o ? .trim()) return 1 === n;
                        let d = this.getCurrentTime(),
                            l = this.compareTime(d, r, o, s);
                        return 1 === n ? !l : l
                    }
                    observe(e, t) {
                        let [a] = e;
                        if (a !== i.IX3_WF_EXTENSION_KEYS.CURRENT_TIME) return n.noop;
                        let r = async () => t(await this.evaluate(e));
                        return this.callbacks.add(r), this.intervalId || 1 !== this.callbacks.size || (this.intervalId = window.setInterval(() => {
                            this.callbacks.forEach(e => e())
                        }, 6e4)), () => {
                            this.callbacks.delete(r), 0 === this.callbacks.size && this.intervalId && (clearInterval(this.intervalId), this.intervalId = null)
                        }
                    }
                    dispose() {
                        this.callbacks.clear(), this.intervalId && (clearInterval(this.intervalId), this.intervalId = null)
                    }
                }
                class f {
                    observers = new Map;
                    isReactive = !1;
                    async evaluate(e) {
                        let [t, a, n] = e;
                        if (t !== i.IX3_WF_EXTENSION_KEYS.ELEMENT_STATE || !a) return !1;
                        let {
                            selector: r,
                            state: o,
                            className: s
                        } = a, d = 1 === n;
                        if (!r) return d;
                        let l = document.querySelector(r);
                        if (!l) return d;
                        let c = !1;
                        switch (o) {
                            case "visible":
                                c = l.offsetWidth > 0 && l.offsetHeight > 0;
                                break;
                            case "hidden":
                                c = 0 === l.offsetWidth || 0 === l.offsetHeight;
                                break;
                            case "hasClass":
                                c = !!s && l.classList.contains(s);
                                break;
                            default:
                                c = !0
                        }
                        return d ? !c : c
                    }
                    observe(e, t) {
                        if (e[0] !== i.IX3_WF_EXTENSION_KEYS.ELEMENT_STATE || !e[1]) return n.noop;
                        let {
                            selector: a
                        } = e[1];
                        return a ? this.observeEl(a, e, t) : n.noop
                    }
                    observeEl(e, t, a) {
                        let i = `elementState:${e}`,
                            n = this.observers.get(i);
                        if (!n) {
                            let t = new MutationObserver(() => n ? .callbacks.forEach(e => e())),
                                a = document.querySelector(e);
                            a && t.observe(a, {
                                attributes: !0,
                                childList: !0,
                                subtree: !0
                            }), n = {
                                observer: t,
                                callbacks: new Set
                            }, this.observers.set(i, n)
                        }
                        let r = () => this.evaluate(t).then(a);
                        return n.callbacks.add(r), () => {
                            let e = this.observers.get(i);
                            e && (e.callbacks.delete(r), e.callbacks.size || (e.observer.disconnect(), this.observers.delete(i)))
                        }
                    }
                    dispose() {
                        this.observers.forEach(e => {
                            e.observer.disconnect(), e.callbacks.clear()
                        }), this.observers.clear()
                    }
                }
            },
            3922: function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var a = {
                    elementTargetSelector: function() {
                        return l
                    },
                    safeClosest: function() {
                        return s
                    },
                    safeGetElementById: function() {
                        return n
                    },
                    safeMatches: function() {
                        return d
                    },
                    safeQuerySelector: function() {
                        return o
                    },
                    safeQuerySelectorAll: function() {
                        return r
                    }
                };
                for (var i in a) Object.defineProperty(t, i, {
                    enumerable: !0,
                    get: a[i]
                });
                let n = e => {
                        try {
                            return document.getElementById(e)
                        } catch {
                            return null
                        }
                    },
                    r = (e, t) => {
                        try {
                            return t.querySelectorAll(e)
                        } catch {
                            return null
                        }
                    },
                    o = (e, t) => {
                        try {
                            return t.querySelector(e)
                        } catch {
                            return null
                        }
                    },
                    s = (e, t) => {
                        try {
                            return e.closest(t)
                        } catch {
                            return null
                        }
                    },
                    d = (e, t) => {
                        try {
                            return e.matches(t)
                        } catch {
                            return null
                        }
                    },
                    l = e => `[data-wf-target*="${CSS.escape(`[${JSON.stringify(e)}`)}"]`
            },
            4574: function(e, t, a) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), Object.defineProperty(t, "plugin", {
                    enumerable: !0,
                    get: function() {
                        return f
                    }
                });
                let i = a(6151),
                    n = a(2605),
                    r = a(8281),
                    o = a(6571),
                    s = a(9845),
                    d = a(7775),
                    l = a(1983),
                    c = a(2908),
                    u = new l.RuntimeBuilder(c.CORE_PLUGIN_INFO);
                (0, i.build)(u), (0, n.build)(u), (0, r.buildLottieAction)(u), (0, o.buildSplineAction)(u), (0, s.build)(u), (0, d.build)(u);
                let f = u.buildRuntime()
            },
            3006: function(e, t, a) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), Object.defineProperty(t, "applyScope", {
                    enumerable: !0,
                    get: function() {
                        return r
                    }
                });
                let i = a(2908),
                    n = a(3922),
                    r = (e, t) => {
                        if (!t) return e;
                        if (Array.isArray(t)) {
                            let [a, r] = t, o = [];
                            switch (a) {
                                case i.TargetScope.FIRST_ANCESTOR:
                                    for (let t of e) {
                                        let e = r ? (0, n.safeClosest)(t, r) : null;
                                        e && o.push(e)
                                    }
                                    return o;
                                case i.TargetScope.FIRST_DESCENDANT:
                                    for (let t of e) {
                                        let e = r ? (0, n.safeQuerySelector)(r, t) : t.firstElementChild;
                                        e && o.push(e)
                                    }
                                    return o;
                                case i.TargetScope.DESCENDANTS:
                                    for (let t of e) o.push(...(0, n.safeQuerySelectorAll)(r, t) || []);
                                    return o;
                                case i.TargetScope.ANCESTORS:
                                    for (let t of e) {
                                        let e = t.parentElement;
                                        for (; e;)(!r || (0, n.safeMatches)(e, r)) && o.push(e), e = e.parentElement
                                    }
                                    return o
                            }
                        }
                        switch (t) {
                            case i.TargetScope.CHILDREN:
                                return e.flatMap(e => [...e.children]);
                            case i.TargetScope.PARENT:
                                return e.map(e => e.parentElement).filter(Boolean);
                            case i.TargetScope.SIBLINGS:
                                return e.flatMap(e => e.parentElement ? [...e.parentElement.children].filter(t => t !== e) : []);
                            case i.TargetScope.NEXT:
                                return e.flatMap(e => e.nextElementSibling || []);
                            case i.TargetScope.PREVIOUS:
                                return e.flatMap(e => e.previousElementSibling || []);
                            default:
                                return e
                        }
                    }
            },
            7775: function(e, t, a) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), Object.defineProperty(t, "build", {
                    enumerable: !0,
                    get: function() {
                        return o
                    }
                });
                let i = a(2104),
                    n = a(3922),
                    r = a(3006);

                function o(e) {
                    let t = [];
                    e.addTargetResolver("id", {
                        resolve: ([, e]) => {
                            let [a, i] = Array.isArray(e) ? e : [e], o = a ? (0, n.safeGetElementById)(a) : null;
                            return o ? (0, r.applyScope)([o], i) : t
                        }
                    }).addTargetResolver("trigger-only", {
                        resolve: ([, e], {
                            triggerElement: a
                        }) => a ? (0, r.applyScope)([a], Array.isArray(e) ? e[1] : void 0) : t,
                        isDynamic: !0
                    }).addTargetResolver("trigger-only-parent", {
                        resolve: ([, e], {
                            triggerElement: a
                        }) => {
                            if (!a) return t;
                            let i = a.parentElement;
                            return i instanceof HTMLElement ? (0, r.applyScope)([i], Array.isArray(e) ? e[1] : void 0) : t
                        },
                        isDynamic: !0
                    }).addTargetResolver("inst", {
                        resolve: ([, e], {
                            triggerElement: a
                        }) => {
                            if (!Array.isArray(e)) return t;
                            let [o, s] = e, d = Array.isArray(o), l = d ? (0, i.pair)(o[0], o[1]) : (0, i.pair)(o, s), c = (0, n.safeQuerySelectorAll)((0, n.elementTargetSelector)(l), document);
                            if (!c ? .length) return t;
                            let u = [...c];
                            if (!a) return (0, r.applyScope)(u, d ? s : void 0);
                            let f = a.dataset.wfTarget;
                            if (!f) return u;
                            try {
                                let e = JSON.parse(f),
                                    a = (0, i.getFirst)(l),
                                    n = e.find(e => (0, i.getFirst)((0, i.getFirst)(e)) === a);
                                if (!n) return t;
                                return (0, r.applyScope)(u.filter(e => (e.dataset.wfTarget || "").includes(`${JSON.stringify((0,i.getSecond)(n))}]`)), d ? s : void 0)
                            } catch {
                                return t
                            }
                        },
                        isDynamic: !0
                    }).addTargetResolver("class", {
                        resolve: ([, e]) => {
                            let [a, i] = Array.isArray(e) ? e : [e], o = a ? (0, n.safeQuerySelectorAll)(`.${a}`, document) : null;
                            return o ? (0, r.applyScope)([...o], i) : t
                        }
                    }).addTargetResolver("selector", {
                        resolve: ([, e]) => {
                            let [a, i] = Array.isArray(e) ? e : [e], o = a ? (0, n.safeQuerySelectorAll)(a, document) : null;
                            return o ? (0, r.applyScope)([...o], i) : t
                        }
                    }).addTargetResolver("body", {
                        resolve: () => [document.body]
                    }).addTargetResolver("attribute", {
                        resolve: ([, e]) => {
                            let [a, i] = Array.isArray(e) ? e : [e], o = a ? (0, n.safeQuerySelectorAll)(a, document) : null;
                            return o ? (0, r.applyScope)([...o], i) : t
                        }
                    }).addTargetResolver("any-element", {
                        resolve: () => t
                    })
                }
            },
            6151: function(e, t, a) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), Object.defineProperty(t, "build", {
                    enumerable: !0,
                    get: function() {
                        return n
                    }
                });
                let i = a(6969);

                function n(e) {
                    (function(e) {
                        let t = new WeakMap;
                        e.addTrigger("click", (e, a, i, n) => {
                            let [, r] = e, o = i.addEventListener(a, "click", i => {
                                let o = r.pluginConfig ? .click,
                                    s = t.get(a) || new WeakMap;
                                t.set(a, s);
                                let d = (s.get(e) || 0) + 1;
                                switch (s.set(e, d), o) {
                                    case "each":
                                    default:
                                        n(i);
                                        break;
                                    case "first":
                                        1 === d && n(i);
                                        break;
                                    case "second":
                                        2 === d && n(i);
                                        break;
                                    case "odd":
                                        d % 2 == 1 && n(i);
                                        break;
                                    case "even":
                                        d % 2 == 0 && n(i);
                                        break;
                                    case "custom":
                                        {
                                            let e = r.pluginConfig ? .custom;e && d === e && n(i)
                                        }
                                }
                            }, {
                                delegate: !0
                            });
                            return () => {
                                o(), t.delete(a)
                            }
                        })
                    })(e),
                    function(e) {
                        let t = new WeakMap;
                        e.addTrigger("hover", (e, a, i, n) => {
                            let [, r] = e, o = [], s = (e, i) => {
                                if (r.pluginConfig ? .type !== i) return;
                                let o = r.pluginConfig ? .hover || "each",
                                    s = t.get(a) || new Map;
                                t.set(a, s);
                                let d = (s.get(i) || 0) + 1;
                                switch (s.set(i, d), o) {
                                    case "each":
                                    default:
                                        n(e);
                                        break;
                                    case "first":
                                        1 === d && n(e);
                                        break;
                                    case "second":
                                        2 === d && n(e);
                                        break;
                                    case "odd":
                                        d % 2 == 1 && n(e);
                                        break;
                                    case "even":
                                        d % 2 == 0 && n(e);
                                        break;
                                    case "custom":
                                        {
                                            let t = r.pluginConfig ? .custom;t && d === t && n(e)
                                        }
                                }
                            };
                            return o.push(i.addEventListener(a, "mouseenter", e => {
                                s(e, "mouseenter")
                            })), o.push(i.addEventListener(a, "mouseover", e => {
                                s(e, "mouseover")
                            })), o.push(i.addEventListener(a, "mouseleave", e => {
                                s(e, "mouseleave")
                            })), () => {
                                o.forEach(e => e()), o.length = 0, t.delete(a)
                            }
                        })
                    }(e), e.addTrigger("load", (e, t, a, n) => {
                        let r = e[1],
                            o = !1,
                            s = () => {
                                o || (o = !0, n({
                                    target: t
                                }))
                            };
                        switch (r.pluginConfig ? .triggerPoint) {
                            case "immediate":
                                return s(), i.noop;
                            case "fullyLoaded":
                                if ("complete" === document.readyState) return s(), i.noop;
                                return a.addEventListener(window, "load", s);
                            default:
                                if ("complete" === document.readyState || "interactive" === document.readyState) return s(), i.noop;
                                return a.addEventListener(document, "DOMContentLoaded", s)
                        }
                    }), e.addTrigger("focus", (e, t, a, i) => {
                        let n = e[1];
                        return a.addEventListener(t, n.pluginConfig ? .useFocusWithin ? "focusin" : "focus", i, {
                            delegate: !n.pluginConfig ? .useFocusWithin
                        })
                    }), e.addTrigger("blur", (e, t, a, i) => {
                        let n = e[1];
                        return a.addEventListener(t, n.pluginConfig ? .useFocusWithin ? "focusout" : "blur", i, {
                            delegate: !n.pluginConfig ? .useFocusWithin
                        })
                    }), e.addTrigger("scroll", (e, t, a, n) => (n({
                        target: t
                    }), i.noop)), e.addTrigger("custom", (e, t, a, n) => {
                        let r = e[1],
                            o = r.pluginConfig ? .eventName;
                        return o ? a.addEventListener(t, o, n, {
                            delegate: !1,
                            kind: "custom"
                        }) : i.noop
                    }), e.addTrigger("change", (e, t, a, i) => a.addEventListener(t, "change", i))
                }
            },
            6969: function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), Object.defineProperty(t, "noop", {
                    enumerable: !0,
                    get: function() {
                        return a
                    }
                });
                let a = () => {}
            },
            2908: function(e, t, a) {
                "use strict";
                var i, n;
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), Object.defineProperty(t, "CORE_PLUGIN_INFO", {
                    enumerable: !0,
                    get: function() {
                        return r
                    }
                }), i = a(2387), n = t, Object.keys(i).forEach(function(e) {
                    "default" === e || Object.prototype.hasOwnProperty.call(n, e) || Object.defineProperty(n, e, {
                        enumerable: !0,
                        get: function() {
                            return i[e]
                        }
                    })
                });
                let r = {
                    namespace: "wf",
                    pluginId: "core",
                    version: "1.0.0"
                }
            },
            2387: function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var a, i, n, r, o = {
                    IX3_WF_EXTENSION_KEYS: function() {
                        return a
                    },
                    TargetScope: function() {
                        return i
                    }
                };
                for (var s in o) Object.defineProperty(t, s, {
                    enumerable: !0,
                    get: o[s]
                });
                (n = a || (a = {})).CLASS = "wf:class", n.BODY = "wf:body", n.ID = "wf:id", n.TRIGGER_ONLY = "wf:trigger-only", n.TRIGGER_ONLY_PARENT = "wf:trigger-only-parent", n.SELECTOR = "wf:selector", n.ATTRIBUTE = "wf:attribute", n.INST = "wf:inst", n.ANY_ELEMENT = "wf:any-element", n.STYLE = "wf:style", n.TRANSFORM = "wf:transform", n.LOTTIE = "wf:lottie", n.SPLINE = "wf:spline", n.CLICK = "wf:click", n.HOVER = "wf:hover", n.LOAD = "wf:load", n.FOCUS = "wf:focus", n.BLUR = "wf:blur", n.SCROLL = "wf:scroll", n.CUSTOM = "wf:custom", n.CHANGE = "wf:change", n.PREFERS_REDUCED_MOTION = "wf:prefersReducedMotion", n.WEBFLOW_BREAKPOINTS = "wf:webflowBreakpoints", n.CUSTOM_MEDIA_QUERY = "wf:customMediaQuery", n.COLOR_SCHEME = "wf:colorScheme", n.ELEMENT_DATA_ATTRIBUTE = "wf:elementDataAttribute", n.CURRENT_TIME = "wf:currentTime", n.ELEMENT_STATE = "wf:elementState", (r = i || (i = {})).ALL = "all", r.PARENT = "parent", r.CHILDREN = "children", r.SIBLINGS = "siblings", r.NEXT = "next", r.PREVIOUS = "previous", r.FIRST_ANCESTOR = "first-ancestor", r.FIRST_DESCENDANT = "first-descendant", r.DESCENDANTS = "descendants", r.ANCESTORS = "ancestors"
            },
            1983: function(e, t, a) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i = {
                    CORE_OPERATORS: function() {
                        return r.CORE_OPERATORS
                    },
                    DEFAULTS: function() {
                        return r.DEFAULTS
                    },
                    DEFAULT_CUSTOM_EASE: function() {
                        return r.DEFAULT_CUSTOM_EASE
                    },
                    EASE_DEFAULTS: function() {
                        return r.EASE_DEFAULTS
                    },
                    RELATIONSHIP_TYPES: function() {
                        return r.RELATIONSHIP_TYPES
                    },
                    TimelineControlType: function() {
                        return r.TimelineControlType
                    },
                    TweenType: function() {
                        return r.TweenType
                    }
                };
                for (var n in i) Object.defineProperty(t, n, {
                    enumerable: !0,
                    get: i[n]
                });
                let r = a(6213);

                function o(e, t) {
                    return Object.keys(e).forEach(function(a) {
                        "default" === a || Object.prototype.hasOwnProperty.call(t, a) || Object.defineProperty(t, a, {
                            enumerable: !0,
                            get: function() {
                                return e[a]
                            }
                        })
                    }), e
                }
                o(a(4182), t), o(a(3646), t), o(a(5686), t), o(a(3049), t)
            },
            3049: function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                })
            },
            3646: function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var a = {
                    ConditionCategoryBuilder: function() {
                        return d
                    },
                    DesignBuilder: function() {
                        return l
                    },
                    TargetCategoryBuilder: function() {
                        return o
                    },
                    TriggerCategoryBuilder: function() {
                        return s
                    }
                };
                for (var i in a) Object.defineProperty(t, i, {
                    enumerable: !0,
                    get: a[i]
                });
                class n {
                    categoryBuilder;
                    groupConfig;
                    properties;
                    constructor(e, t) {
                        this.categoryBuilder = e, this.groupConfig = t, this.properties = []
                    }
                    addProperty(e, t, a) {
                        return this.properties.push({
                            id: e,
                            schema: { ...t,
                                description: a ? .description || t.description
                            }
                        }), this
                    }
                    addGroup(e) {
                        return this.categoryBuilder.finalizeGroup({ ...this.groupConfig,
                            properties: this.properties
                        }), this.categoryBuilder.clearCurrentGroupBuilder(), this.categoryBuilder.addGroup(e)
                    }
                    getGroupData() {
                        return { ...this.groupConfig,
                            properties: this.properties
                        }
                    }
                }
                class r {
                    categoryId;
                    config;
                    displayGroups;
                    currentGroupBuilder;
                    constructor(e, t) {
                        this.categoryId = e, this.config = t, this.displayGroups = [], this.currentGroupBuilder = null
                    }
                    addGroup(e) {
                        return this.currentGroupBuilder && this.finalizeGroup(this.currentGroupBuilder.getGroupData()), this.currentGroupBuilder = new n(this, e), this.currentGroupBuilder
                    }
                    finalizeGroup(e) {
                        this.displayGroups.push(e)
                    }
                    clearCurrentGroupBuilder() {
                        this.currentGroupBuilder = null
                    }
                    getDefinition() {
                        this.currentGroupBuilder && (this.finalizeGroup(this.currentGroupBuilder.getGroupData()), this.currentGroupBuilder = null);
                        let e = this.displayGroups.flatMap(e => e.properties);
                        return {
                            id: this.categoryId,
                            properties: e,
                            propertyType: this.config.propertyType || "tween",
                            displayGroups: this.displayGroups
                        }
                    }
                }
                class o {
                    categoryId;
                    config;
                    targets;
                    constructor(e, t) {
                        this.categoryId = e, this.config = t, this.targets = []
                    }
                    addTargetSchema(e, t) {
                        return this.targets.push({
                            id: e,
                            schema: t
                        }), this
                    }
                    getDefinition() {
                        return {
                            id: this.categoryId,
                            label: this.config.label,
                            order: this.config.order,
                            targets: this.targets
                        }
                    }
                }
                class s {
                    categoryId;
                    config;
                    triggers;
                    constructor(e, t) {
                        this.categoryId = e, this.config = t, this.triggers = []
                    }
                    addTriggerSchema(e, t) {
                        return this.triggers.push({
                            id: e,
                            schema: t
                        }), this
                    }
                    getDefinition() {
                        return {
                            id: this.categoryId,
                            label: this.config.label,
                            order: this.config.order,
                            triggers: this.triggers
                        }
                    }
                }
                class d {
                    categoryId;
                    config;
                    conditions;
                    constructor(e, t) {
                        this.categoryId = e, this.config = t, this.conditions = []
                    }
                    addConditionSchema(e, t) {
                        return this.conditions.push({
                            id: e,
                            schema: t
                        }), this
                    }
                    getDefinition() {
                        return {
                            id: this.categoryId,
                            label: this.config.label,
                            order: this.config.order,
                            conditions: this.conditions
                        }
                    }
                }
                class l {
                    baseInfo;
                    categories = new Map;
                    targetCategories = new Map;
                    triggerCategories = new Map;
                    conditionCategories = new Map;
                    actionPresets = new Map;
                    constructor(e) {
                        this.baseInfo = e
                    }
                    addCategory(e, t = {}) {
                        let a = new r(e, t);
                        return this.categories.set(e, a), a
                    }
                    addTargetCategory(e, t) {
                        let a = new o(e, t);
                        return this.targetCategories.set(e, a), a
                    }
                    addTriggerCategory(e, t) {
                        let a = new s(e, t);
                        return this.triggerCategories.set(e, a), a
                    }
                    addConditionCategory(e, t) {
                        let a = new d(e, t);
                        return this.conditionCategories.set(e, a), a
                    }
                    addActionPreset(e, t) {
                        let a = `${this.baseInfo.namespace}:${e}`;
                        return this.actionPresets.set(a, {
                            id: a,
                            name: t.name,
                            description: t.description,
                            icon: t.icon,
                            type: "plugin",
                            categoryId: t.categoryId,
                            action: t.action,
                            customEditor: t.customEditor,
                            targetFilter: t.targetFilter,
                            designerTargetFilter: t.designerTargetFilter,
                            customTargetComponent: t.customTargetComponent
                        }), this
                    }
                    buildDesign() {
                        let e = [];
                        for (let [, t] of this.categories) e.push(t.getDefinition());
                        let t = [];
                        for (let [, e] of this.targetCategories) t.push(e.getDefinition());
                        let a = [];
                        for (let [, e] of this.triggerCategories) a.push(e.getDefinition());
                        let i = [];
                        for (let [, e] of this.conditionCategories) i.push(e.getDefinition());
                        let n = [];
                        for (let [, e] of this.actionPresets) n.push(e);
                        return {
                            namespace: this.baseInfo.namespace,
                            pluginId: this.baseInfo.pluginId,
                            version: this.baseInfo.version,
                            displayName: this.baseInfo.displayName,
                            description: this.baseInfo.description,
                            categories: e.length > 0 ? e : void 0,
                            targetCategories: t.length > 0 ? t : void 0,
                            triggerCategories: a.length > 0 ? a : void 0,
                            conditionCategories: i.length > 0 ? i : void 0,
                            actionPresets: n.length > 0 ? n : void 0
                        }
                    }
                }
            },
            4182: function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), Object.defineProperty(t, "RuntimeBuilder", {
                    enumerable: !0,
                    get: function() {
                        return a
                    }
                });
                class a {
                    baseInfo;
                    extensions = [];
                    lifecycle = {};
                    constructor(e) {
                        this.baseInfo = e
                    }
                    addTrigger(e, t) {
                        let a = `${this.baseInfo.namespace}:${e}`;
                        return this.extensions.push({
                            extensionPoint: "trigger",
                            id: a,
                            triggerType: a,
                            implementation: t
                        }), this
                    }
                    addAction(e, t) {
                        let a = `${this.baseInfo.namespace}:${e}`;
                        return this.extensions.push({
                            extensionPoint: "action",
                            id: a,
                            actionType: a,
                            implementation: t
                        }), this
                    }
                    addTargetResolver(e, t) {
                        let a = `${this.baseInfo.namespace}:${e}`;
                        return this.extensions.push({
                            extensionPoint: "targetResolver",
                            id: a,
                            resolverType: a,
                            implementation: t
                        }), this
                    }
                    addCondition(e, t) {
                        let a = `${this.baseInfo.namespace}:${e}`;
                        return this.extensions.push({
                            extensionPoint: "condition",
                            id: a,
                            conditionType: a,
                            implementation: t
                        }), this
                    }
                    onInitialize(e) {
                        return this.lifecycle.initialize = e, this
                    }
                    onActivate(e) {
                        return this.lifecycle.activate = e, this
                    }
                    onDeactivate(e) {
                        return this.lifecycle.deactivate = e, this
                    }
                    onDispose(e) {
                        return this.lifecycle.dispose = e, this
                    }
                    createManifest() {
                        let e = this.extensions.map(e => `${e.extensionPoint}:${e.id}`);
                        return {
                            id: [this.baseInfo.namespace, this.baseInfo.pluginId],
                            version: this.baseInfo.version,
                            name: this.baseInfo.displayName || this.baseInfo.pluginId,
                            description: this.baseInfo.description || "",
                            dependencies: this.baseInfo.dependencies,
                            features: e
                        }
                    }
                    buildRuntime() {
                        return {
                            manifest: this.createManifest(),
                            extensions: this.extensions,
                            ...this.lifecycle
                        }
                    }
                }
            },
            5686: function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), Object.defineProperty(t, "TransformBuilder", {
                    enumerable: !0,
                    get: function() {
                        return a
                    }
                });
                class a {
                    baseInfo;
                    triggerTransforms = new Map;
                    targetTransforms = new Map;
                    conditionTransforms = new Map;
                    actionTransforms = new Map;
                    constructor(e) {
                        this.baseInfo = e
                    }
                    addTargetTransform(e, t) {
                        return this.targetTransforms.set(this.createExtensionKey(e), function(e, a, i) {
                            return t(e, a, i)
                        }), this
                    }
                    addTriggerTransform(e, t) {
                        return this.triggerTransforms.set(this.createExtensionKey(e), function(e, a, i) {
                            return t(e, a, i)
                        }), this
                    }
                    addConditionTransform(e, t) {
                        return this.conditionTransforms.set(this.createExtensionKey(e), function(e, a, i) {
                            return t(e, a, i)
                        }), this
                    }
                    addActionTransform(e, t) {
                        return this.actionTransforms.set(this.createExtensionKey(e), function(e, a, i) {
                            return t(e, a, i)
                        }), this
                    }
                    createExtensionKey(e) {
                        return `${this.baseInfo.namespace}:${e}`
                    }
                    buildTransform() {
                        return {
                            namespace: this.baseInfo.namespace,
                            pluginId: this.baseInfo.pluginId,
                            version: this.baseInfo.version,
                            displayName: this.baseInfo.displayName,
                            description: this.baseInfo.description,
                            triggerTransforms: this.triggerTransforms,
                            targetTransforms: this.targetTransforms,
                            conditionTransforms: this.conditionTransforms,
                            actionTransforms: this.actionTransforms
                        }
                    }
                }
            },
            6213: function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var a, i, n, r, o, s, d, l, c, u, f = {
                    CORE_OPERATORS: function() {
                        return n
                    },
                    DEFAULTS: function() {
                        return r
                    },
                    DEFAULT_CUSTOM_EASE: function() {
                        return b
                    },
                    EASE_DEFAULTS: function() {
                        return p
                    },
                    RELATIONSHIP_TYPES: function() {
                        return o
                    },
                    TimelineControlType: function() {
                        return a
                    },
                    TweenType: function() {
                        return i
                    }
                };
                for (var g in f) Object.defineProperty(t, g, {
                    enumerable: !0,
                    get: f[g]
                });
                (s = a || (a = {})).STANDARD = "standard", s.SCROLL = "scroll", s.LOAD = "load", (d = i || (i = {}))[d.To = 0] = "To", d[d.From = 1] = "From", d[d.FromTo = 2] = "FromTo", d[d.Set = 3] = "Set", (l = n || (n = {})).AND = "wf:and", l.OR = "wf:or", (c = r || (r = {}))[c.DURATION = .5] = "DURATION", (u = o || (o = {})).NONE = "none", u.WITHIN = "within", u.DIRECT_CHILD_OF = "direct-child-of", u.CONTAINS = "contains", u.DIRECT_PARENT_OF = "direct-parent-of", u.NEXT_TO = "next-to", u.NEXT_SIBLING_OF = "next-sibling-of", u.PREV_SIBLING_OF = "prev-sibling-of";
                let p = {
                        back: {
                            type: "back",
                            curve: "out",
                            power: 1.7
                        },
                        elastic: {
                            type: "elastic",
                            curve: "out",
                            amplitude: 1,
                            period: .3
                        },
                        steps: {
                            type: "steps",
                            stepCount: 6
                        },
                        rough: {
                            type: "rough",
                            templateCurve: "none.inOut",
                            points: 20,
                            strength: 1,
                            taper: "none",
                            randomizePoints: !0,
                            clampPoints: !1
                        },
                        slowMo: {
                            type: "slowMo",
                            linearRatio: .7,
                            power: .7,
                            yoyoMode: !1
                        },
                        expoScale: {
                            type: "expoScale",
                            startingScale: .05,
                            endingScale: 1,
                            templateCurve: "none.inOut"
                        },
                        customWiggle: {
                            type: "customWiggle",
                            wiggles: 10,
                            wiggleType: "easeOut"
                        },
                        customBounce: {
                            type: "customBounce",
                            strength: .7,
                            squash: 1,
                            endAtStart: !1
                        },
                        customEase: {
                            type: "customEase",
                            bezierCurve: "M0,160 C40,160 24,96 80,96 136,96 120,0 160,0"
                        }
                    },
                    b = p.back
            },
            2019: function(e, t, a) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i = {
                    EASING_NAMES: function() {
                        return o.EASING_NAMES
                    },
                    IX3: function() {
                        return r.IX3
                    },
                    convertEaseConfigToGSAP: function() {
                        return s.convertEaseConfigToGSAP
                    },
                    convertEaseConfigToLinear: function() {
                        return s.convertEaseConfigToLinear
                    }
                };
                for (var n in i) Object.defineProperty(t, n, {
                    enumerable: !0,
                    get: i[n]
                });
                let r = a(8968),
                    o = a(3648),
                    s = a(3408)
            },
            4054: function(e, t, a) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), Object.defineProperty(t, "AnimationCoordinator", {
                    enumerable: !0,
                    get: function() {
                        return o
                    }
                });
                let i = a(1983),
                    n = a(3648),
                    r = a(3408);
                class o {
                    timelineDefs;
                    getHandler;
                    getTargetResolver;
                    resolveFn;
                    env;
                    subs;
                    dynamicFlags;
                    cleanupFns;
                    scrollTriggers;
                    globalSplitRegistry;
                    timelineTargetsCache;
                    constructor(e, t, a, i, o) {
                        this.timelineDefs = e, this.getHandler = t, this.getTargetResolver = a, this.resolveFn = i, this.env = o, this.subs = new Map, this.dynamicFlags = new Map, this.cleanupFns = new Map, this.scrollTriggers = new Map, this.globalSplitRegistry = new Map, this.timelineTargetsCache = new WeakMap, this.getStaggerConfig = e => {
                            if (!e) return;
                            let {
                                ease: t,
                                amount: a,
                                from: i,
                                grid: o,
                                axis: s,
                                each: d
                            } = e, l = {};
                            if (null != a && (l.amount = (0, n.toSeconds)(a)), null != d && (l.each = (0, n.toSeconds)(d)), null != i && (l.from = i), null != o && (l.grid = o), null != s && (l.axis = s), null != t) {
                                let e = (0, r.convertEaseConfigToGSAP)(t);
                                null != e && (l.ease = e)
                            }
                            return l
                        }
                    }
                    createTimeline(e, t) {
                        this.destroy(e);
                        let a = this.timelineDefs.get(e);
                        if (!a) return;
                        let i = this.isDynamicTimeline(a);
                        this.dynamicFlags.set(e, i);
                        let n = new Set,
                            r = new Set;
                        for (let [, e, a] of t.triggers) {
                            if (a)
                                for (let e of this.resolveFn(a, {})) r.add(e);
                            e ? .controlType && n.add(e.controlType)
                        }
                        if (!r.size || !i) {
                            let t = this.buildSubTimeline(e, null, n);
                            this.ensureSubs(e).set(null, t)
                        }
                        if (r.size) {
                            let t = this.ensureSubs(e);
                            for (let a of r)
                                if (!t.has(a)) {
                                    let r = i ? this.buildSubTimeline(e, a, n) : this.getSub(e, null);
                                    i && t.set(a, r)
                                }
                        }
                    }
                    getTimeline(e, t) {
                        return this.getSub(e, t).timeline
                    }
                    play(e, t, a) {
                        this.getSub(e, t).timeline.play(a ? ? void 0)
                    }
                    pause(e, t, a) {
                        let i = this.getSubOrNull(e, t);
                        i && (void 0 !== a ? i.timeline.pause(a) : i.timeline.pause())
                    }
                    resume(e, t, a) {
                        this.getSubOrNull(e, t) ? .timeline.resume(a)
                    }
                    reverse(e, t, a) {
                        this.getSub(e, t).timeline.reverse(a)
                    }
                    restart(e, t) {
                        this.getSub(e, t).timeline.restart()
                    }
                    togglePlayReverse(e, t) {
                        let a = this.getSub(e, t).timeline,
                            i = a.progress();
                        0 === i ? a.play() : 1 === i ? a.reverse() : a.reversed() ? a.play() : a.reverse()
                    }
                    seek(e, t, a) {
                        this.getSubOrNull(e, a) ? .timeline.seek(t)
                    }
                    setTimeScale(e, t, a) {
                        this.getSubOrNull(e, a) ? .timeline.timeScale(t)
                    }
                    setTotalProgress(e, t, a) {
                        this.getSubOrNull(e, a) ? .timeline.totalProgress(t)
                    }
                    isPlaying(e, t) {
                        return !!this.getSubOrNull(e, t) ? .timeline.isActive()
                    }
                    isPaused(e, t) {
                        return !!this.getSubOrNull(e, t) ? .timeline.paused()
                    }
                    destroy(e) {
                        let t = this.subs.get(e);
                        if (t) {
                            for (let [, e] of t) {
                                if (e.rebuildState = "init", e.timeline && (e.timeline.revert(), e.timeline.kill()), e.scrollTriggerIds) {
                                    for (let t of e.scrollTriggerIds) this.cleanupScrollTrigger(t);
                                    e.scrollTriggerIds.clear()
                                }
                                e.scrollTriggerConfigs && e.scrollTriggerConfigs.clear(), this.timelineTargetsCache.delete(e)
                            }
                            for (let [, e] of this.globalSplitRegistry) e.splitInstance.revert();
                            for (let t of (this.globalSplitRegistry.clear(), this.cleanupFns.get(e) ? ? [])) t();
                            this.cleanupFns.delete(e), this.subs.delete(e), this.dynamicFlags.delete(e)
                        }
                    }
                    isDynamicTimeline(e) {
                        let t = e.actions;
                        if (!t ? .length) return !1;
                        for (let e of t)
                            for (let t of e.targets ? ? []) {
                                if (this.getTargetResolver(t) ? .isDynamic) return !0;
                                if (3 === t.length && t[2]) {
                                    let e = t[2];
                                    if (e.filterBy && "none" !== e.relationship) {
                                        let t = this.getTargetResolver(e.filterBy);
                                        if (t ? .isDynamic) return !0
                                    }
                                }
                            }
                        return !1
                    }
                    ensureSubs(e) {
                        return this.subs.has(e) || this.subs.set(e, new Map), this.subs.get(e)
                    }
                    getSub(e, t) {
                        let a = this.ensureSubs(e),
                            i = this.dynamicFlags.get(e),
                            n = a.get(i ? t : null);
                        return n || (n = this.buildSubTimeline(e, t), a.set(t, n)), n
                    }
                    getSubOrNull(e, t) {
                        let a = this.dynamicFlags.get(e);
                        return this.subs.get(e) ? .get(a ? t ? ? null : null)
                    }
                    convertToGsapDefaults(e) {
                        let t = {};
                        if (null != e.duration && (t.duration = (0, n.toSeconds)(e.duration)), null != e.ease) {
                            let a = (0, r.convertEaseConfigToGSAP)(e.ease);
                            null != a && (t.ease = a)
                        }
                        if (null != e.delay && (t.delay = e.delay), null != e.repeat && (t.repeat = e.repeat), null != e.repeatDelay && (t.repeatDelay = (0, n.toSeconds)(e.repeatDelay)), null != e.stagger) {
                            let a = this.getStaggerConfig(e.stagger);
                            a && (t.stagger = a)
                        }
                        return null != e.yoyo && (t.yoyo = e.yoyo), t
                    }
                    buildSubTimeline(e, t, a) {
                        let i = this.timelineDefs.get(e),
                            n = i ? .settings,
                            r = {
                                timeline: window.gsap.timeline({ ...this.convertToGsapDefaults(n || {}),
                                    paused: !0,
                                    reversed: !!i ? .playInReverse,
                                    data: {
                                        id: e,
                                        triggerEl: t || void 0
                                    }
                                }),
                                timelineId: e,
                                elementContext: t,
                                timelineDef: i,
                                rebuildState: "init",
                                controlTypes: a
                            };
                        if (!i ? .actions) return r;
                        if (this.env.win.SplitText)
                            for (let [e, {
                                    types: a,
                                    masks: n
                                }] of this.analyzeSplitRequirements(i.actions, t)) {
                                let t = this.getSplitTypeString(a),
                                    i = this.getMaskString(n);
                                this.doSplitText({
                                    type: t,
                                    mask: i
                                }, [e], r, this.env.win.SplitText)
                            }
                        return this.buildTimeline(r), r
                    }
                    buildTimeline(e) {
                        let t = e.timelineDef,
                            a = e.elementContext,
                            i = e.timeline,
                            n = e.timelineId,
                            r = new Map;
                        for (let e = 0; e < t.actions.length; e++) {
                            let o = t.actions[e];
                            if (!o) continue;
                            let d = JSON.stringify(o.targets),
                                l = !0,
                                c = s(o),
                                u = "none" === c ? d : `${d}_split_${c}`;
                            for (let e of Object.values(o.properties ? ? {})) {
                                let t = r.get(u) || new Set;
                                for (let a of (r.set(u, t), Object.keys(e || {}))) t.has(a) ? l = !1 : t.add(a)
                            }
                            let f = this.collectTargets(o, a);
                            if (!f.length) continue;
                            let g = f;
                            "none" !== c && this.env.win.SplitText && (g = this.getSplitElements(f, c)), 0 !== g.length && this.buildTweensForAction(o, g, i, n, l)
                        }
                    }
                    collectTargets(e, t) {
                        if (!e.targets) return [];
                        let a = [];
                        for (let i of e.targets ? ? []) {
                            let e = this.resolveFn(i, t ? {
                                triggerElement: t
                            } : {});
                            a.push(...e)
                        }
                        return a
                    }
                    buildTweensForAction(e, t, a, o, s) {
                        for (let d in e.properties) {
                            let l = this.getHandler(d);
                            if (!l) continue;
                            let c = e.properties[d] || {};
                            try {
                                let d = e.timing.position;
                                d = "string" == typeof d && d.endsWith("ms") ? (0, n.toSeconds)(d) : d;
                                let u = e.timing ? .duration ? ? i.DEFAULTS.DURATION,
                                    f = this.getStaggerConfig(e.timing ? .stagger);
                                f && 0 === u && (u = .001);
                                let g = {
                                        id: e.id,
                                        presetId: e.presetId,
                                        color: e.color
                                    },
                                    p = {
                                        force3D: !0,
                                        ...!s && {
                                            immediateRender: s
                                        },
                                        data: g,
                                        ...e.timing ? .duration != null && 3 !== e.tt && {
                                            duration: (0, n.toSeconds)(u)
                                        },
                                        ...e.timing ? .repeat != null && {
                                            repeat: e.timing.repeat
                                        },
                                        ...e.timing ? .repeatDelay != null && {
                                            repeatDelay: (0, n.toSeconds)(e.timing.repeatDelay)
                                        },
                                        ...e.timing ? .yoyo != null && {
                                            yoyo: e.timing.yoyo
                                        },
                                        ...f && {
                                            stagger: f
                                        }
                                    };
                                if (e.timing ? .ease != null) {
                                    let t = (0, r.convertEaseConfigToGSAP)(e.timing.ease);
                                    null != t && (p.ease = t)
                                }
                                if (l.createTweenConfig) {
                                    let i = l.createTweenConfig(c),
                                        n = Object.keys(i.from || {}).length > 0,
                                        r = Object.keys(i.to || {}).length > 0,
                                        o = e.tt ? ? 0;
                                    if (0 === o && !r) continue;
                                    if (1 === o && !n) continue;
                                    if (2 === o && !n && !r) continue;
                                    else if (3 === o && !r) continue;
                                    1 === o ? a.from(t, { ...p,
                                        ...i.from
                                    }, d || 0) : 2 === o ? a.fromTo(t, { ...i.from
                                    }, { ...p,
                                        ...i.to
                                    }, d || 0) : 3 === o ? a.set(t, { ...p,
                                        ...i.to
                                    }, d || 0) : a.to(t, { ...p,
                                        ...i.to
                                    }, d || 0)
                                } else if (l.createCustomTween) {
                                    let i = l.createCustomTween(a, e, c, p, t, d || 0);
                                    if (i) {
                                        let e = this.cleanupFns.get(o) || new Set;
                                        this.cleanupFns.set(o, e), e.add(i)
                                    }
                                }
                            } catch (e) {
                                console.error("Error building tween:", e)
                            }
                        }
                    }
                    analyzeSplitRequirements(e, t) {
                        let a = new Map;
                        for (let i of e) {
                            let e = s(i);
                            if ("none" === e) continue;
                            let n = "object" == typeof i.splitText ? i.splitText.mask : void 0;
                            for (let r of this.collectTargets(i, t)) {
                                if (r === document.body) continue;
                                let t = a.get(r) || {
                                    types: new Set,
                                    masks: new Set
                                };
                                a.set(r, t), t.types.add(e), n && t.masks.add(n)
                            }
                        }
                        return a
                    }
                    getSplitTypeString(e) {
                        return e.has("chars") && !e.has("words") && (e = new Set([...e, "words"])), ["lines", "words", "chars"].filter(t => e.has(t)).join(", ")
                    }
                    getMaskString(e) {
                        if (0 !== e.size) {
                            if (e.has("lines")) return "lines";
                            if (e.has("words")) return "words";
                            if (e.has("chars")) return "chars"
                        }
                    }
                    doSplitText(e, t, a, i) {
                        try {
                            let r = d(e.type);
                            for (let o of t) {
                                let t = this.globalSplitRegistry.get(o);
                                if (t) {
                                    let a = new Set(d(t.splitTextConfig.type));
                                    if (r.every(e => a.has(e))) continue;
                                    t.splitInstance.revert(), this.globalSplitRegistry.delete(o), e = {
                                        type: [...new Set([...a, ...r])].join(", "),
                                        mask: e.mask || t.splitTextConfig.mask
                                    }
                                }
                                let s = {
                                        type: e.type
                                    },
                                    l = d(e.type);
                                l.includes("lines") && (a.timeline.data.splitLines = !0, s.linesClass = (0, n.defaultSplitClass)("line"), s.autoSplit = !0, s.onSplit = () => {
                                    "init" !== a.rebuildState ? this.scheduleRebuildForElement(o) : a.rebuildState = "idle"
                                }), l.includes("words") && (s.wordsClass = (0, n.defaultSplitClass)("word")), l.includes("chars") && (s.charsClass = (0, n.defaultSplitClass)("letter")), e.mask && (s.mask = e.mask);
                                let c = new i([o], s);
                                this.globalSplitRegistry.set(o, {
                                    splitInstance: c,
                                    splitTextConfig: e
                                }), t && this.scheduleRebuildForElement(o)
                            }
                        } catch (e) {
                            console.error("Error splitting text:", e)
                        }
                    }
                    scheduleRebuild(e) {
                        if ("building" === e.rebuildState || "rebuild_pending" === e.rebuildState) {
                            e.rebuildState = "rebuild_pending";
                            return
                        }
                        e.rebuildState = "building", this.timelineTargetsCache.delete(e), this.rebuildTimelineOnTheFly(e)
                    }
                    rebuildTimelineOnTheFly(e) {
                        let t = e.timeline.progress(),
                            a = e.controlTypes ? .has(i.TimelineControlType.LOAD) && 1 !== t,
                            n = e.timeline.isActive() || a;
                        if (e.timeline.pause(), e.timeline.revert(), e.timeline.clear(), this.buildTimeline(e), e.timeline.progress(t), e.scrollTriggerIds && e.scrollTriggerConfigs)
                            for (let t of e.scrollTriggerIds) {
                                let a = this.scrollTriggers.get(t),
                                    i = e.scrollTriggerConfigs.get(t);
                                if (a && i) {
                                    let n = { ...i,
                                        animation: e.timeline
                                    };
                                    if (a.kill(), this.env.win.ScrollTrigger) {
                                        let e = this.env.win.ScrollTrigger.create(n);
                                        this.scrollTriggers.set(t, e)
                                    }
                                }
                            } else n && e.timeline.play();
                        "rebuild_pending" === e.rebuildState ? (e.rebuildState = "building", this.rebuildTimelineOnTheFly(e)) : e.rebuildState = "idle"
                    }
                    getStaggerConfig;
                    getSplitElements(e, t) {
                        let a = [];
                        for (let i of e) {
                            let e = this.globalSplitRegistry.get(i);
                            if (e && d(e.splitTextConfig.type).includes(t)) {
                                let i = e.splitInstance[t];
                                i ? .length && a.push(...i)
                            }
                        }
                        return a.length > 0 ? a : e
                    }
                    setupScrollControl(e, t, a, i) {
                        if (void 0 === this.env.win.ScrollTrigger) return void console.warn("ScrollTrigger plugin is not available.");
                        let n = `st_${e}_${t}_${i.id||window.crypto.randomUUID().slice(0,8)}`;
                        this.cleanupScrollTrigger(n);
                        let r = this.getTimeline(e, i);
                        if (!r) return void console.warn(`Timeline ${e} not found`);
                        let o = function(e, t, a, i, n) {
                            let r = function(e, t, a) {
                                    let i = {},
                                        n = e => e && (e.parentElement === document.body || e === document.body);
                                    if (void 0 !== e.pin)
                                        if ("boolean" == typeof e.pin) e.pin && !n(t) && (i.pin = e.pin);
                                        else {
                                            let r = a(e.pin, {
                                                triggerElement: t
                                            });
                                            r.length > 0 && !n(r[0]) && (i.pin = r[0])
                                        }
                                    if (e.endTrigger) {
                                        let n = a(e.endTrigger, {
                                            triggerElement: t
                                        });
                                        n.length > 0 && (i.endTrigger = n[0])
                                    }
                                    if (e.scroller) {
                                        let n = a(e.scroller, {
                                            triggerElement: t
                                        });
                                        n.length > 0 ? i.scroller = n[0] : i.scroller = window
                                    }
                                    return i
                                }(e, t, n),
                                o = [e.enter || "none", e.leave || "none", e.enterBack || "none", e.leaveBack || "none"],
                                s = {
                                    trigger: t,
                                    markers: e.showMarkers ? ? !1,
                                    start: e.clamp ? `clamp(${e.start})` : e.start || "top bottom",
                                    end: e.clamp ? `clamp(${e.end})` : e.end || "bottom top",
                                    scrub: e.scrub ? ? !1,
                                    horizontal: e.horizontal || !1,
                                    toggleActions: o.join(" "),
                                    id: a,
                                    ...r
                                };
                            return !1 !== s.scrub ? s.animation = i : Object.assign(s, function(e, t) {
                                let [a, i, n, r] = e, o = e => () => {
                                    if (void 0 !== e) switch (e) {
                                        case "play":
                                            t.play();
                                            break;
                                        case "pause":
                                            t.pause();
                                            break;
                                        case "resume":
                                            t.resume();
                                            break;
                                        case "reverse":
                                            t.reverse();
                                            break;
                                        case "restart":
                                            t.restart();
                                            break;
                                        case "reset":
                                            t.pause(0);
                                            break;
                                        case "complete":
                                            t.progress(1)
                                    }
                                }, s = {};
                                return "none" !== a && (s.onEnter = o(a)), "none" !== i && (s.onLeave = o(i)), "none" !== n && (s.onEnterBack = o(n)), "none" !== r && (s.onLeaveBack = o(r)), s
                            }(o, i)), s
                        }(a, i, n, r, this.resolveFn);
                        try {
                            let t = this.env.win.ScrollTrigger.create(o);
                            this.scrollTriggers.set(n, t);
                            let a = this.getSub(e, i);
                            a.scrollTriggerIds || (a.scrollTriggerIds = new Set), a.scrollTriggerConfigs || (a.scrollTriggerConfigs = new Map), a.scrollTriggerIds.add(n), a.scrollTriggerConfigs.set(n, o)
                        } catch (e) {
                            console.error("Failed to create ScrollTrigger:", e)
                        }
                    }
                    cleanupScrollTrigger(e) {
                        let t = this.scrollTriggers.get(e);
                        t && (t.kill(), this.scrollTriggers.delete(e))
                    }
                    getScrollTriggers() {
                        return this.scrollTriggers
                    }
                    getTimelineTargets(e) {
                        let t = this.timelineTargetsCache.get(e);
                        if (t) return t;
                        for (let a of (t = new WeakSet, e.timelineDef.actions ? ? []))
                            for (let i of this.collectTargets(a, e.elementContext)) t.add(i);
                        return this.timelineTargetsCache.set(e, t), t
                    }
                    scheduleRebuildForElement(e) {
                        for (let [, t] of this.subs)
                            for (let [, a] of t) this.getTimelineTargets(a).has(e) && this.scheduleRebuild(a)
                    }
                }

                function s(e) {
                    return e.splitText ? "string" == typeof e.splitText ? e.splitText : e.splitText.type : "none"
                }

                function d(e) {
                    return e.split(", ")
                }
            },
            4651: function(e, t, a) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i = {
                    ConditionEvaluator: function() {
                        return o
                    },
                    ConditionalPlaybackManager: function() {
                        return s
                    }
                };
                for (var n in i) Object.defineProperty(t, n, {
                    enumerable: !0,
                    get: i[n]
                });
                let r = a(1983);
                class o {
                    getConditionEvaluator;
                    sharedObservers = new Map;
                    conditionCache = new Map;
                    CACHE_TTL = 100;
                    constructor(e) {
                        this.getConditionEvaluator = e
                    }
                    evaluateConditionsForTrigger = async (e, t) => {
                        if (!e ? .length) return !0;
                        let a = e.some(([e]) => e === r.CORE_OPERATORS.OR);
                        return this.evaluateCondition([a ? r.CORE_OPERATORS.OR : r.CORE_OPERATORS.AND, {
                            conditions: e
                        }], t)
                    };
                    observeConditionsForTrigger = (e, t) => {
                        if (!e ? .length) return () => {};
                        let a = [],
                            i = [];
                        for (let t of e) {
                            let e = this.getConditionEvaluator(t);
                            e ? .isReactive ? a.push(t) : i.push(t[0])
                        }
                        if (0 === a.length) return () => {};
                        let n = a.map(e => this.getOrCreateSharedObserver(e, t));
                        return () => {
                            for (let e of n) e()
                        }
                    };
                    disposeSharedObservers = () => {
                        for (let [e, t] of this.sharedObservers) try {
                            t.cleanup()
                        } catch (t) {
                            console.error("Error disposing shared observer: %s", e, t)
                        }
                        this.sharedObservers.clear(), this.conditionCache.clear()
                    };
                    observeCondition = (e, t) => {
                        let a = this.getEvaluator(e);
                        if (a ? .observe) try {
                            return a.observe(e, t)
                        } catch (e) {
                            console.error("Error setting up condition observer:", e)
                        }
                    };
                    getEvaluator = e => {
                        let [t] = e;
                        return t === r.CORE_OPERATORS.AND || t === r.CORE_OPERATORS.OR ? this.getLogicalEvaluator(t) : this.getConditionEvaluator(e)
                    };
                    getLogicalEvaluator = e => ({
                        evaluate: async (t, a) => {
                            let [, i, n] = t, {
                                conditions: o
                            } = i || {};
                            if (!Array.isArray(o)) return !1;
                            if (!o.length) return !0;
                            let s = e === r.CORE_OPERATORS.OR,
                                d = 1 === n;
                            for (let e of o) {
                                let t = await this.evaluateCondition(e, a);
                                if (s ? t : !t) return s ? !d : !!d
                            }
                            return s ? !!d : !d
                        },
                        observe: (e, t) => {
                            let [, a] = e, {
                                conditions: i
                            } = a || {};
                            if (!Array.isArray(i)) return () => {};
                            let n = i.map(a => this.observeCondition(a, async () => t(await this.evaluateCondition(e))));
                            return () => n.forEach(e => e && e())
                        }
                    });
                    evaluateCondition = async (e, t) => {
                        let a = this.generateConditionCacheKey(e, t),
                            i = Date.now(),
                            n = this.conditionCache.get(a);
                        if (n && i - n.timestamp < this.CACHE_TTL) return n.result;
                        let r = this.getEvaluator(e);
                        if (!r) return console.warn(`No evaluator found for condition type '${e[0]}'`), !1;
                        try {
                            let n = await r.evaluate(e, t);
                            return this.conditionCache.set(a, {
                                result: n,
                                timestamp: i
                            }), n
                        } catch (e) {
                            return console.error("Error evaluating condition:", e), !1
                        }
                    };
                    generateConditionCacheKey = (e, t) => {
                        let [a, i, n] = e, r = i ? JSON.stringify(i) : "", o = t ? `:ctx:${t.id}` : "";
                        return `${a}:${r}${n?":negate":""}${o}`
                    };
                    invalidateConditionCache = e => {
                        let [t] = e, a = [];
                        for (let e of this.conditionCache.keys()) e.startsWith(`${t}:`) && a.push(e);
                        a.forEach(e => this.conditionCache.delete(e))
                    };
                    generateObserverKey = e => {
                        let [t, a, i] = e, n = a ? JSON.stringify(a) : "";
                        return `${t}:${n}${i?":negate":""}`
                    };
                    getOrCreateSharedObserver = (e, t) => {
                        let a = this.generateObserverKey(e),
                            i = this.sharedObservers.get(a);
                        if (!i) {
                            let t = this.getEvaluator(e);
                            if (!t ? .observe) return () => {};
                            let n = new Set,
                                r = t.observe(e, async () => {
                                    this.invalidateConditionCache(e);
                                    let t = Array.from(n, async e => {
                                        try {
                                            await e()
                                        } catch (e) {
                                            console.error("Error in shared observer callback:", e)
                                        }
                                    });
                                    await Promise.allSettled(t)
                                });
                            if (!r) return () => {};
                            i = {
                                cleanup: r,
                                refCount: 0,
                                callbacks: n
                            }, this.sharedObservers.set(a, i)
                        }
                        return i.callbacks.add(t), i.refCount++, () => this.releaseSharedObserver(a, t)
                    };
                    releaseSharedObserver = (e, t) => {
                        let a = this.sharedObservers.get(e);
                        if (a && a.callbacks.delete(t) && (a.refCount = Math.max(0, a.refCount - 1), a.refCount <= 0 && 0 === a.callbacks.size)) {
                            try {
                                a.cleanup()
                            } catch (e) {
                                console.error("Error cleaning up shared observer:", e)
                            }
                            this.sharedObservers.delete(e)
                        }
                    }
                }
                class s {
                    matchMediaInstances = new Map;
                    setupConditionalContext = (e, t, a) => {
                        let {
                            conditionalPlayback: i,
                            triggers: n,
                            id: o
                        } = e;
                        if (!i || 0 === i.length) return void t(null);
                        this.cleanup(o);
                        let s = window.gsap.matchMedia();
                        this.matchMediaInstances.set(o, s);
                        let d = !0,
                            l = n.some(([, {
                                controlType: e
                            }]) => e === r.TimelineControlType.LOAD);
                        s.add(this.buildConditionsObject(i), e => {
                            if (l && !d) return !1;
                            d = !1;
                            let n = this.evaluateConditions(e.conditions || {}, i);
                            return n && "skip-to-end" !== n.behavior || t(n), a
                        })
                    };
                    cleanup = e => {
                        let t = this.matchMediaInstances.get(e);
                        t && (t.revert(), this.matchMediaInstances.delete(e))
                    };
                    destroy = () => {
                        for (let [e] of this.matchMediaInstances) this.cleanup(e);
                        this.matchMediaInstances.clear()
                    };
                    buildConditionsObject = e => {
                        let t = {};
                        for (let a of e) switch (a.type) {
                            case "prefers-reduced-motion":
                                t.prefersReduced = "(prefers-reduced-motion: reduce)";
                                break;
                            case "breakpoint":
                                (a.breakpoints || []).forEach(e => {
                                    let a = d[e];
                                    a && (t[`breakpoint_${e}`] = a)
                                })
                        }
                        return t.fallback = "(min-width: 0px)", t
                    };
                    evaluateConditions(e, t) {
                        let a = [];
                        for (let i of t) "prefers-reduced-motion" === i.type && e.prefersReduced && a.push({
                            condition: i,
                            type: "prefers-reduced-motion"
                        }), "breakpoint" === i.type && (i.breakpoints || []).some(t => e[`breakpoint_${t}`]) && a.push({
                            condition: i,
                            type: "breakpoint"
                        });
                        if (0 === a.length) return null;
                        let i = a.find(({
                            condition: e
                        }) => "dont-animate" === e.behavior);
                        if (i) return {
                            behavior: "dont-animate",
                            matchedConditions: {
                                prefersReduced: "prefers-reduced-motion" === i.type,
                                breakpointMatched: "breakpoint" === i.type
                            }
                        };
                        let n = a[0];
                        return {
                            behavior: n.condition.behavior,
                            matchedConditions: {
                                prefersReduced: "prefers-reduced-motion" === n.type,
                                breakpointMatched: "breakpoint" === n.type
                            }
                        }
                    }
                }
                let d = {
                    tiny: "(max-width: 479px) and (min-width: 0px)",
                    small: "(max-width: 767px) and (min-width: 480px)",
                    medium: "(max-width: 991px) and (min-width: 768px)",
                    main: "(min-width: 992px)"
                }
            },
            6976: function(e, t, a) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), Object.defineProperty(t, "EventManager", {
                    enumerable: !0,
                    get: function() {
                        return n
                    }
                });
                let i = a(3648);
                class n {
                    static instance;
                    elementHandlers = new WeakMap;
                    eventTypeHandlers = new Map;
                    customEventTypes = new Map;
                    delegatedHandlers = new Map;
                    batchedEvents = new Map;
                    batchFrameId = null;
                    defaultMaxBatchSize = 10;
                    defaultMaxBatchAge = 100;
                    defaultErrorHandler = (e, t) => console.error("[EventManager] Error handling event:", e, t);
                    constructor() {}
                    static getInstance() {
                        return n.instance || (n.instance = new n), n.instance
                    }
                    addEventListener(e, t, a, i) {
                        try {
                            var n;
                            let o = i ? .kind === "custom",
                                s = { ...o ? {
                                        delegate: !1,
                                        passive: !0,
                                        batch: !1
                                    } : r[t] || {},
                                    ...i,
                                    errorHandler: i ? .errorHandler || this.defaultErrorHandler
                                };
                            if (!o && "load" === t && "complete" in e && e.complete) return setTimeout(() => {
                                try {
                                    a(new Event("load"), e)
                                } catch (e) {
                                    s.errorHandler ? .(e, new Event("load"))
                                }
                            }, 0), () => {};
                            if (!e || !e.addEventListener) throw Error("Invalid element provided to addEventListener");
                            let d = this.createWrappedHandler(a, s, e),
                                l = this.registerHandler(e, t, a, d.handler, s, o, d.cleanup);
                            if (o) return () => {
                                this.removeHandler(e, t, a, !0), l.cleanup ? .()
                            };
                            let c = new AbortController;
                            return this.ensureDelegatedHandler(t), s.delegate || (n = s, ("window" === n.target ? window : "document" === n.target ? document : null) || e).addEventListener(t, l.wrappedHandler, {
                                passive: s.passive,
                                signal: c.signal
                            }), () => {
                                c.abort(), this.removeHandler(e, t, a, !1)
                            }
                        } catch (e) {
                            return i ? .errorHandler ? .(e, new Event(t)), () => {}
                        }
                    }
                    emit(e, t, a, i) {
                        try {
                            let n = this.customEventTypes.get(e);
                            if (!n ? .size) return;
                            let r = new CustomEvent(e, {
                                detail: t,
                                bubbles: i ? .bubbles ? ? !0,
                                cancelable: !0
                            });
                            for (let t of n)
                                if (!a || a === t.element || t.element.contains(a)) try {
                                    t.wrappedHandler(r)
                                } catch (t) {
                                    console.error(`[EventManager] Error emitting ${e}:`, t)
                                }
                        } catch (t) {
                            console.error(`[EventManager] Error emitting custom event ${e}:`, t)
                        }
                    }
                    dispose() {
                        for (let [, e] of (null !== this.batchFrameId && (cancelAnimationFrame(this.batchFrameId), this.batchFrameId = null, this.batchedEvents.clear()), this.delegatedHandlers)) e.controller.abort();
                        for (let [, e] of this.eventTypeHandlers)
                            for (let t of e) t.cleanup ? .();
                        for (let [, e] of this.customEventTypes)
                            for (let t of e) t.cleanup ? .();
                        this.delegatedHandlers.clear(), this.elementHandlers = new WeakMap, this.eventTypeHandlers.clear(), this.customEventTypes.clear()
                    }
                    createWrappedHandler(e, t, a) {
                        let n = i => {
                            try {
                                let n = "window" === t.target ? window : "document" === t.target ? document : a;
                                e(i, n)
                            } catch (e) {
                                (t.errorHandler || this.defaultErrorHandler)(e, i)
                            }
                        };
                        if (t.batch) {
                            let e = e => {
                                let t = e.type || "unknown";
                                this.batchedEvents.has(t) || this.batchedEvents.set(t, []), this.batchedEvents.get(t).push({
                                    event: e,
                                    target: a,
                                    timestamp: e.timeStamp || performance.now()
                                }), null == this.batchFrameId && (this.batchFrameId = requestAnimationFrame(() => this.processBatchedEvents()))
                            };
                            return t.throttleMs && t.throttleMs > 0 ? {
                                handler: e,
                                cleanup: (0, i.throttle)(n, t.throttleMs).cancel
                            } : t.debounceMs && t.debounceMs > 0 ? {
                                handler: e,
                                cleanup: (0, i.debounce)(n, t.debounceMs).cancel
                            } : {
                                handler: e
                            }
                        }
                        if (t.throttleMs && t.throttleMs > 0) {
                            let e = (0, i.throttle)(n, t.throttleMs);
                            if (t.debounceMs && t.debounceMs > 0) {
                                let a = (0, i.debounce)(e, t.debounceMs);
                                return {
                                    handler: a,
                                    cleanup: () => {
                                        a.cancel ? .(), e.cancel ? .()
                                    }
                                }
                            }
                            return {
                                handler: e,
                                cleanup: e.cancel
                            }
                        }
                        if (t.debounceMs && t.debounceMs > 0) {
                            let e = (0, i.debounce)(n, t.debounceMs);
                            return {
                                handler: e,
                                cleanup: e.cancel
                            }
                        }
                        return {
                            handler: n
                        }
                    }
                    processBatchedEvents() {
                        if (null === this.batchFrameId) return;
                        this.batchFrameId = null;
                        let e = performance.now();
                        for (let [t, a] of this.batchedEvents) {
                            let i = this.eventTypeHandlers.get(t);
                            if (!i ? .size) continue;
                            let n = a.filter(t => e - t.timestamp < this.defaultMaxBatchAge);
                            if (!n.length) continue;
                            n.sort((e, t) => e.timestamp - t.timestamp);
                            let r = n.length <= this.defaultMaxBatchSize ? n : n.slice(-this.defaultMaxBatchSize);
                            for (let {
                                    event: t,
                                    target: a
                                } of r)
                                for (let n of (t.batchTimestamp = e, t.batchSize = r.length, i)) try {
                                    n.config.delegate ? n.wrappedHandler(t) : ("window" === n.config.target || "document" === n.config.target || a === t.target || a.contains(t.target)) && n.wrappedHandler(t)
                                } catch (e) {
                                    (n.config.errorHandler || this.defaultErrorHandler)(e, t)
                                }
                        }
                        this.batchedEvents.clear()
                    }
                    ensureDelegatedHandler(e) {
                        if (this.delegatedHandlers.has(e)) return;
                        let t = new AbortController,
                            a = t => {
                                let a = this.eventTypeHandlers.get(e);
                                if (a ? .size) {
                                    for (let i of t.composedPath ? t.composedPath() : t.target ? [t.target] : [])
                                        if (i instanceof Element) {
                                            for (let n of a)
                                                if (n.config.delegate && (n.element === i || n.element.contains(i))) try {
                                                    n.wrappedHandler(t)
                                                } catch (t) {
                                                    console.error(`[EventDelegator] Error for ${e}:`, t)
                                                }
                                            if (!t.bubbles) break
                                        }
                                }
                            },
                            i = ["focus", "blur", "focusin", "focusout", "mouseenter", "mouseleave"].includes(e);
                        document.addEventListener(e, a, {
                            passive: !1,
                            capture: i,
                            signal: t.signal
                        }), this.delegatedHandlers.set(e, {
                            handler: a,
                            controller: t
                        })
                    }
                    registerHandler(e, t, a, i, n, r, o) {
                        let s = {
                            element: e,
                            originalHandler: a,
                            wrappedHandler: i,
                            config: n,
                            cleanup: o
                        };
                        if (r) {
                            let e = this.customEventTypes.get(t) || new Set;
                            e.add(s), this.customEventTypes.set(t, e)
                        } else {
                            let a = this.elementHandlers.get(e) || new Set;
                            a.add(s), this.elementHandlers.set(e, a);
                            let i = this.eventTypeHandlers.get(t) || new Set;
                            i.add(s), this.eventTypeHandlers.set(t, i)
                        }
                        return s
                    }
                    removeHandler(e, t, a, i) {
                        if (i) {
                            let i = this.customEventTypes.get(t);
                            if (i ? .size) {
                                for (let n of i)
                                    if (n.element === e && n.originalHandler === a) {
                                        i.delete(n), i.size || this.customEventTypes.delete(t), n.cleanup ? .();
                                        break
                                    }
                            }
                        } else {
                            let i, n = this.eventTypeHandlers.get(t);
                            if (!n ? .size) return;
                            let r = this.elementHandlers.get(e);
                            if (!r ? .size) return;
                            for (let e of r)
                                if (e.originalHandler === a) {
                                    i = e;
                                    break
                                }
                            if (i) {
                                if (r.delete(i), n.delete(i), !n.size) {
                                    this.eventTypeHandlers.delete(t);
                                    let e = this.delegatedHandlers.get(t);
                                    e && (e.controller.abort(), this.delegatedHandlers.delete(t))
                                }
                                i.cleanup ? .()
                            }
                        }
                    }
                }
                let r = {
                    load: {
                        delegate: !1,
                        passive: !0
                    },
                    DOMContentLoaded: {
                        target: "document",
                        passive: !0
                    },
                    readystatechange: {
                        target: "document",
                        passive: !0
                    },
                    beforeunload: {
                        target: "window",
                        passive: !1
                    },
                    unload: {
                        target: "window",
                        passive: !1
                    },
                    pageshow: {
                        target: "window",
                        passive: !0
                    },
                    pagehide: {
                        target: "window",
                        passive: !0
                    },
                    click: {
                        delegate: !0,
                        passive: !1
                    },
                    dblclick: {
                        delegate: !0,
                        passive: !0
                    },
                    mousedown: {
                        delegate: !0,
                        passive: !0
                    },
                    mouseup: {
                        delegate: !0,
                        passive: !0
                    },
                    mousemove: {
                        delegate: !0,
                        batch: !0,
                        passive: !0
                    },
                    mouseenter: {
                        delegate: !1,
                        passive: !0
                    },
                    mouseleave: {
                        delegate: !1,
                        passive: !0
                    },
                    mouseout: {
                        delegate: !0,
                        passive: !0
                    },
                    contextmenu: {
                        delegate: !0,
                        passive: !1
                    },
                    wheel: {
                        delegate: !0,
                        throttleMs: 16,
                        passive: !0,
                        batch: !0
                    },
                    touchstart: {
                        delegate: !0,
                        passive: !0
                    },
                    touchend: {
                        delegate: !0,
                        passive: !1
                    },
                    touchmove: {
                        delegate: !0,
                        batch: !0,
                        passive: !0
                    },
                    touchcancel: {
                        delegate: !0,
                        passive: !0
                    },
                    pointerdown: {
                        delegate: !0,
                        passive: !0
                    },
                    pointerup: {
                        delegate: !0,
                        passive: !0
                    },
                    pointermove: {
                        delegate: !0,
                        batch: !0,
                        passive: !0
                    },
                    pointerenter: {
                        delegate: !1,
                        passive: !0
                    },
                    pointerleave: {
                        delegate: !1,
                        passive: !0
                    },
                    pointercancel: {
                        delegate: !0,
                        passive: !0
                    },
                    keydown: {
                        delegate: !0,
                        passive: !1
                    },
                    keyup: {
                        delegate: !0,
                        passive: !1
                    },
                    keypress: {
                        delegate: !0,
                        passive: !1
                    },
                    input: {
                        delegate: !0,
                        passive: !1
                    },
                    change: {
                        delegate: !0,
                        passive: !1
                    },
                    focus: {
                        delegate: !1,
                        passive: !0
                    },
                    blur: {
                        delegate: !1,
                        passive: !0
                    },
                    focusin: {
                        delegate: !0,
                        passive: !0
                    },
                    focusout: {
                        delegate: !0,
                        passive: !0
                    },
                    submit: {
                        delegate: !0,
                        passive: !1
                    },
                    reset: {
                        delegate: !0,
                        passive: !1
                    },
                    select: {
                        delegate: !0,
                        passive: !0
                    },
                    selectionchange: {
                        target: "document",
                        passive: !0
                    },
                    dragstart: {
                        delegate: !0,
                        passive: !1
                    },
                    drag: {
                        delegate: !0,
                        passive: !0
                    },
                    dragenter: {
                        delegate: !0,
                        passive: !1
                    },
                    dragleave: {
                        delegate: !0,
                        passive: !0
                    },
                    dragover: {
                        delegate: !0,
                        passive: !1
                    },
                    drop: {
                        delegate: !0,
                        passive: !1
                    },
                    dragend: {
                        delegate: !0,
                        passive: !0
                    },
                    play: {
                        delegate: !0,
                        passive: !0
                    },
                    pause: {
                        delegate: !0,
                        passive: !0
                    },
                    ended: {
                        delegate: !0,
                        passive: !0
                    },
                    timeupdate: {
                        delegate: !0,
                        batch: !0,
                        passive: !0
                    },
                    canplay: {
                        delegate: !0,
                        passive: !0
                    },
                    canplaythrough: {
                        delegate: !0,
                        passive: !0
                    },
                    loadeddata: {
                        delegate: !0,
                        passive: !0
                    },
                    animationstart: {
                        delegate: !0,
                        passive: !0
                    },
                    animationend: {
                        delegate: !0,
                        passive: !0
                    },
                    animationiteration: {
                        delegate: !0,
                        passive: !0
                    },
                    transitionstart: {
                        delegate: !0,
                        passive: !0
                    },
                    transitionend: {
                        delegate: !0,
                        passive: !0
                    },
                    transitionrun: {
                        delegate: !0,
                        passive: !0
                    },
                    transitioncancel: {
                        delegate: !0,
                        passive: !0
                    },
                    scroll: {
                        delegate: !1,
                        throttleMs: 16,
                        passive: !0
                    },
                    resize: {
                        target: "window",
                        throttleMs: 16,
                        passive: !0
                    },
                    intersection: {
                        delegate: !1,
                        passive: !0
                    },
                    orientationchange: {
                        target: "window",
                        passive: !0
                    },
                    visibilitychange: {
                        target: "document",
                        passive: !0
                    },
                    storage: {
                        target: "window",
                        passive: !0
                    },
                    online: {
                        target: "window",
                        passive: !0
                    },
                    offline: {
                        target: "window",
                        passive: !0
                    },
                    hashchange: {
                        target: "window",
                        passive: !0
                    },
                    popstate: {
                        target: "window",
                        passive: !0
                    },
                    copy: {
                        delegate: !0,
                        passive: !1
                    },
                    cut: {
                        delegate: !0,
                        passive: !1
                    },
                    paste: {
                        delegate: !0,
                        passive: !1
                    },
                    compositionstart: {
                        delegate: !0,
                        passive: !1
                    },
                    compositionupdate: {
                        delegate: !0,
                        passive: !1
                    },
                    compositionend: {
                        delegate: !0,
                        passive: !1
                    },
                    beforeinput: {
                        delegate: !0,
                        passive: !1
                    }
                }
            },
            8968: function(e, t, a) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), Object.defineProperty(t, "IX3", {
                    enumerable: !0,
                    get: function() {
                        return l
                    }
                });
                let i = a(1983),
                    n = a(6976),
                    r = a(4054),
                    o = a(4651),
                    s = a(8912),
                    d = a(3648);
                class l {
                    env;
                    static instance;
                    pluginReg;
                    timelineDefs;
                    interactions;
                    triggeredElements;
                    triggerCleanupFunctions;
                    conditionalPlaybackManager;
                    windowSize;
                    prevWindowSize;
                    windowResizeSubscribers;
                    debouncedWindowResize;
                    bodyResizeObserver;
                    triggerObservers;
                    timelineRefCounts;
                    interactionTimelineRefs;
                    reactiveCallbackQueues;
                    debouncedReactiveCallback;
                    pendingReactiveUpdates;
                    reactiveExecutionContext;
                    eventMgr;
                    loadInteractions;
                    coordinator;
                    conditionEval;
                    constructor(e) {
                        this.env = e, this.pluginReg = new s.PluginRegistry, this.timelineDefs = new Map, this.interactions = new Map, this.triggeredElements = new Map, this.triggerCleanupFunctions = new Map, this.windowSize = {
                            w: 0,
                            h: 0
                        }, this.prevWindowSize = {
                            w: 0,
                            h: 0
                        }, this.windowResizeSubscribers = new Set, this.debouncedWindowResize = (0, d.debounce)(() => {
                            for (let e of this.windowResizeSubscribers) e()
                        }, 200), this.bodyResizeObserver = null, this.triggerObservers = new Map, this.timelineRefCounts = new Map, this.interactionTimelineRefs = new Map, this.reactiveCallbackQueues = new Map, this.pendingReactiveUpdates = new Map, this.reactiveExecutionContext = new Set, this.eventMgr = n.EventManager.getInstance(), this.loadInteractions = [], this.addEventListener = this.eventMgr.addEventListener.bind(this.eventMgr), this.emit = this.eventMgr.emit.bind(this.eventMgr), this.resolveTargets = (e, t) => {
                            let [a, i, n] = e;
                            if ("*" === i && n && n.filterBy) {
                                let e = this.resolveUniversalSelectorOptimized(n, t);
                                if (e) return e
                            }
                            let r = this.pluginReg.getTargetResolver([a, i]);
                            if (!r) return [];
                            let o = r.resolve([a, i], t);
                            return n && "none" !== n.relationship && n.filterBy ? this.applyRelationshipFilter(o, n.relationship, this.resolveTargets(n.filterBy, t), n.firstMatchOnly) : o
                        }, this.isTargetDynamic = e => !!this.pluginReg.getTargetResolver(e) ? .isDynamic, window.addEventListener("resize", this.debouncedWindowResize), this.coordinator = new r.AnimationCoordinator(this.timelineDefs, this.pluginReg.getActionHandler.bind(this.pluginReg), this.pluginReg.getTargetResolver.bind(this.pluginReg), this.resolveTargets, e), this.conditionEval = new o.ConditionEvaluator(this.pluginReg.getConditionEvaluator.bind(this.pluginReg)), this.conditionalPlaybackManager = new o.ConditionalPlaybackManager, this.debouncedReactiveCallback = (0, d.debounce)(() => this.processPendingReactiveUpdates(), 16, {
                            leading: !1,
                            trailing: !0,
                            maxWait: 100
                        })
                    }
                    getCoordinator() {
                        return this.coordinator
                    }
                    addEventListener;
                    emit;
                    static async init(e) {
                        return this.instance = new l(e), this.instance
                    }
                    async registerPlugin(e) {
                        await this.pluginReg.registerPlugin(e)
                    }
                    register(e, t) {
                        if (t ? .length)
                            for (let e of t) this.timelineDefs.set(e.id, e);
                        if (e ? .length) {
                            for (let t of e) {
                                if (this.interactions.has(t.id)) {
                                    console.warn(`Interaction with ID ${t.id} already exists. Use update() to modify it.`);
                                    continue
                                }
                                this.interactions.set(t.id, t);
                                let e = new Set;
                                this.interactionTimelineRefs.set(t.id, e), this.conditionalPlaybackManager.setupConditionalContext(t, a => {
                                    for (let a of t.timelineIds ? ? []) e.add(a), this.incrementTimelineRefCount(a), this.coordinator.createTimeline(a, t);
                                    for (let e of t.triggers ? ? []) this.bindTrigger(e, t, a)
                                }, () => {
                                    this.cleanupInteractionAnimations(t.id)
                                })
                            }
                            for (let e of this.loadInteractions) e();
                            if (this.loadInteractions.length = 0, this.coordinator.getScrollTriggers().size > 0) {
                                this.windowResizeSubscribers.add(() => {
                                    this.windowSize.h = window.innerHeight, this.windowSize.w = window.innerWidth
                                });
                                let e = (0, d.debounce)(() => {
                                        this.prevWindowSize.h = this.windowSize.h, this.prevWindowSize.w = this.windowSize.w
                                    }, 210, {
                                        leading: !0,
                                        trailing: !1
                                    }),
                                    t = (0, d.debounce)(() => {
                                        if (this.windowSize.h === this.prevWindowSize.h && this.windowSize.w === this.prevWindowSize.w)
                                            for (let e of this.coordinator.getScrollTriggers().values()) e.refresh()
                                    }, 210);
                                this.bodyResizeObserver = new ResizeObserver(a => {
                                    for (let i of a) i.target === document.body && (e(), t())
                                }), document.body && this.bodyResizeObserver.observe(document.body)
                            }
                        }
                        return this
                    }
                    remove(e) {
                        for (let t of Array.isArray(e) ? e : [e]) {
                            if (!this.interactions.has(t)) {
                                console.warn(`Interaction with ID ${t} not found, skipping removal.`);
                                continue
                            }
                            this.cleanupTriggerObservers(t), this.unbindAllTriggers(t);
                            let e = this.decrementTimelineReferences(t);
                            this.cleanupUnusedTimelines(e), this.interactions.delete(t), this.triggeredElements.delete(t), this.interactionTimelineRefs.delete(t), this.conditionalPlaybackManager.cleanup(t)
                        }
                        return this
                    }
                    update(e, t) {
                        let a = Array.isArray(e) ? e : [e],
                            i = t ? Array.isArray(t) ? t : [t] : [];
                        for (let e of (i.length && this.register([], i), a)) {
                            let {
                                id: t
                            } = e;
                            if (!this.interactions.has(t)) {
                                console.warn(`Interaction with ID ${t} not found, registering as new.`), this.register([e], []);
                                continue
                            }
                            this.remove(t), this.register([e], [])
                        }
                        return this
                    }
                    cleanupUnusedTimelines(e) {
                        for (let t of e) {
                            this.coordinator.destroy(t), this.timelineDefs.delete(t);
                            let e = `st_${t}_`;
                            for (let [t, a] of this.coordinator.getScrollTriggers().entries()) t.startsWith(e) && (a.kill(), this.coordinator.getScrollTriggers().delete(t))
                        }
                    }
                    destroy() {
                        let e = Array.from(this.interactions.keys());
                        this.remove(e), this.loadInteractions.length = 0, this.env.win.ScrollTrigger && (this.env.win.ScrollTrigger.getAll().forEach(e => e.kill()), this.bodyResizeObserver ? .disconnect(), this.bodyResizeObserver = null), window.removeEventListener("resize", this.debouncedWindowResize);
                        try {
                            this.debouncedReactiveCallback.cancel()
                        } catch (e) {
                            console.error("Error canceling debounced callback during destroy:", e)
                        }
                        this.pendingReactiveUpdates.clear(), this.reactiveCallbackQueues.clear(), this.reactiveExecutionContext.clear(), this.conditionEval.disposeSharedObservers(), this.conditionalPlaybackManager.destroy(), this.windowResizeSubscribers.clear(), this.timelineDefs.clear(), this.interactions.clear(), this.triggeredElements.clear(), this.triggerCleanupFunctions.clear(), this.triggerObservers.clear(), this.interactionTimelineRefs.clear()
                    }
                    bindTrigger(e, t, a) {
                        let n = t.id,
                            r = this.pluginReg.getTriggerHandler(e),
                            o = e[1];
                        if (!r) return void console.warn("No trigger handler:", e[0]);
                        let s = this.triggerCleanupFunctions.get(n) || new Map;
                        this.triggerCleanupFunctions.set(n, s);
                        let {
                            delay: l = 0,
                            controlType: c,
                            scrollTriggerConfig: u
                        } = o, f = (0, d.toSeconds)(l), g = {
                            addEventListener: this.addEventListener,
                            emit: this.emit
                        }, p = e[2], b = [];
                        if (p && (b = this.resolveTargets(p, {})), c === i.TimelineControlType.LOAD) {
                            if (window.__wf_ix3) return;
                            this.loadInteractions.push(() => {
                                if (null !== a) {
                                    "skip-to-end" === a.behavior && this.skipToEndState(t, null);
                                    return
                                }
                                let e = () => {
                                    for (let e = 0; e < t.timelineIds ? .length; e++) {
                                        let a = t.timelineIds[e];
                                        a && (this.coordinator.getTimeline(a, null).data.splitLines ? document.fonts.ready.then(() => {
                                            this.runTimelineAction(a, o, null)
                                        }) : this.runTimelineAction(a, o, null))
                                    }
                                };
                                f ? setTimeout(e, 1e3 * f) : e()
                            })
                        } else if (c === i.TimelineControlType.SCROLL) {
                            if (!u) return;
                            for (let e = 0; e < b.length; e++) {
                                let i = b[e];
                                if (i) {
                                    if (null !== a) {
                                        "skip-to-end" === a.behavior && this.skipToEndState(t, i);
                                        continue
                                    }
                                    for (let e of t.timelineIds ? ? []) this.coordinator.setupScrollControl(e, n, u, i)
                                }
                            }
                        } else if (c === i.TimelineControlType.STANDARD || !c && e[2])
                            for (let i = 0; i < b.length; i++) {
                                let d = b[i];
                                if (!d) continue;
                                let l = s.get(d) || new Set;
                                s.set(d, l);
                                let c = r(e, d, g, () => {
                                    if (null !== a) {
                                        "skip-to-end" === a.behavior && this.skipToEndState(t, null);
                                        return
                                    }
                                    o.conditionalLogic ? this.runTrigger(e, d, n).catch(e => console.error("Error in trigger execution:", e)) : f ? setTimeout(() => {
                                        this.runTrigger(e, d, n).catch(e => console.error("Error in delayed trigger execution:", e))
                                    }, 1e3 * f) : this.runTrigger(e, d, n).catch(e => console.error("Error in trigger execution:", e))
                                });
                                c && l.add(c)
                            }
                        o.conditionalLogic && this.setupTriggerReactiveMonitoring(e, t)
                    }
                    setupTriggerReactiveMonitoring(e, t) {
                        let {
                            conditionalLogic: a
                        } = e[1];
                        if (!a) return;
                        let i = `${t.id}:${t.triggers.indexOf(e)}`;
                        try {
                            let e = this.conditionEval.observeConditionsForTrigger(a.conditions, async () => {
                                    await this.executeReactiveCallbackSafely(t.id, i, async () => {
                                        let e = await this.conditionEval.evaluateConditionsForTrigger(a.conditions, t) ? a.ifTrue : a.ifFalse;
                                        if (e) {
                                            let a = this.triggeredElements.get(t.id);
                                            if (!a) return;
                                            let i = [];
                                            for (let e of a)
                                                for (let a of t.timelineIds ? ? []) i.push({
                                                    timelineId: a,
                                                    element: e,
                                                    action: "pause-reset"
                                                });
                                            await this.executeTimelineOperationsAsync(i), a.forEach(a => {
                                                this.executeConditionalOutcome(e, a, t)
                                            })
                                        }
                                    })
                                }),
                                n = this.triggerObservers.get(t.id);
                            n || (n = new Map, this.triggerObservers.set(t.id, n)), n.set(i, e)
                        } catch (e) {
                            console.error("Error setting up trigger reactive monitoring:", e)
                        }
                    }
                    async executeReactiveCallbackSafely(e, t, a) {
                        this.reactiveExecutionContext.has(t) || (this.pendingReactiveUpdates.set(t, a), this.debouncedReactiveCallback())
                    }
                    async processPendingReactiveUpdates() {
                        if (0 === this.pendingReactiveUpdates.size) return;
                        let e = new Map(this.pendingReactiveUpdates);
                        this.pendingReactiveUpdates.clear();
                        let t = new Map;
                        for (let [a, i] of e) {
                            let e = a.split(":")[0];
                            t.has(e) || t.set(e, []), t.get(e).push({
                                triggerKey: a,
                                callback: i
                            })
                        }
                        for (let [e, a] of t) await this.processInteractionReactiveUpdates(e, a)
                    }
                    async processInteractionReactiveUpdates(e, t) {
                        let a = this.reactiveCallbackQueues.get(e);
                        if (a) try {
                            await a
                        } catch (e) {
                            console.error("Error waiting for pending reactive callback:", e)
                        }
                        let i = this.executeInteractionUpdates(t);
                        this.reactiveCallbackQueues.set(e, i);
                        try {
                            await i
                        } finally {
                            this.reactiveCallbackQueues.get(e) === i && this.reactiveCallbackQueues.delete(e)
                        }
                    }
                    async executeInteractionUpdates(e) {
                        for (let {
                                triggerKey: t,
                                callback: a
                            } of e) {
                            this.reactiveExecutionContext.add(t);
                            try {
                                await a()
                            } catch (e) {
                                console.error("Error in reactive callback for %s:", t, e)
                            } finally {
                                this.reactiveExecutionContext.delete(t)
                            }
                        }
                    }
                    async executeTimelineOperationsAsync(e) {
                        if (e.length) return new Promise(t => {
                            Promise.resolve().then(() => {
                                e.forEach(({
                                    timelineId: e,
                                    element: t,
                                    action: a
                                }) => {
                                    try {
                                        if (!this.timelineDefs.has(e)) return void console.warn(`Timeline ${e} not found, skipping operation`);
                                        if (!t.isConnected) return void console.warn("Element no longer in DOM, skipping timeline operation");
                                        "pause-reset" === a ? this.coordinator.pause(e, t, 0) : console.warn(`Unknown timeline action: ${a}`)
                                    } catch (t) {
                                        console.error("Error executing timeline operation: %s, %s", a, e, t)
                                    }
                                }), t()
                            })
                        })
                    }
                    async runTrigger(e, t, a) {
                        if (window.__wf_ix3) return;
                        let i = e[1],
                            n = this.triggeredElements.get(a);
                        n || this.triggeredElements.set(a, n = new Set), n.add(t);
                        let r = this.interactions.get(a);
                        if (r && r.triggers.includes(e))
                            if (i.conditionalLogic) try {
                                let e = await this.conditionEval.evaluateConditionsForTrigger(i.conditionalLogic.conditions, r) ? i.conditionalLogic.ifTrue : i.conditionalLogic.ifFalse;
                                e && this.executeConditionalOutcome(e, t, r)
                            } catch (e) {
                                console.error("Error evaluating trigger conditional logic:", e), r.timelineIds.forEach(e => this.runTimelineAction(e, i, t))
                            } else r.timelineIds.forEach(e => this.runTimelineAction(e, i, t))
                    }
                    skipToEndState(e, t) {
                        e.timelineIds.forEach(e => {
                            let a = this.coordinator.getTimeline(e, t);
                            this.coordinator.setTotalProgress(e, +!a.reversed(), t ? ? null)
                        })
                    }
                    executeConditionalOutcome(e, t, a) {
                        let i, {
                                control: n,
                                targetTimelineId: r,
                                speed: o,
                                jump: s,
                                delay: l = 0
                            } = e,
                            c = (0, d.toSeconds)(l);
                        if ("none" === n) return;
                        if (r) {
                            if (!a.timelineIds.includes(r)) return void console.warn(`Target timeline '${r}' not found in interaction '${a.id}'. Available timelines: ${a.timelineIds.join(", ")}`);
                            i = [r]
                        } else i = a.timelineIds;
                        let u = () => {
                            i.forEach(e => {
                                void 0 !== o && this.coordinator.setTimeScale(e, o, t);
                                let a = (0, d.toSeconds)(s);
                                switch (n) {
                                    case "play":
                                        this.coordinator.play(e, t, a);
                                        break;
                                    case "pause":
                                    case "stop":
                                        this.coordinator.pause(e, t, a);
                                        break;
                                    case "resume":
                                        this.coordinator.resume(e, t, a);
                                        break;
                                    case "reverse":
                                        this.coordinator.reverse(e, t, a);
                                        break;
                                    case "restart":
                                    default:
                                        this.coordinator.restart(e, t);
                                        break;
                                    case "togglePlayReverse":
                                        this.coordinator.togglePlayReverse(e, t)
                                }
                            })
                        };
                        c ? setTimeout(() => {
                            u()
                        }, 1e3 * c) : u()
                    }
                    runTimelineAction(e, t, a) {
                        this.coordinator.setTimeScale(e, t.speed ? ? 1, a);
                        let i = (0, d.toSeconds)(t.jump);
                        switch (t.control) {
                            case "play":
                                this.coordinator.play(e, a, i);
                                break;
                            case "pause":
                            case "stop":
                                this.coordinator.pause(e, a, i);
                                break;
                            case "resume":
                                this.coordinator.resume(e, a, i);
                                break;
                            case "reverse":
                                this.coordinator.reverse(e, a, i);
                                break;
                            case "restart":
                            case void 0:
                                this.coordinator.restart(e, a);
                                break;
                            case "togglePlayReverse":
                                this.coordinator.togglePlayReverse(e, a);
                                break;
                            case "none":
                                break;
                            default:
                                t.control
                        }
                    }
                    resolveTargets;
                    isTargetDynamic;
                    resolveUniversalSelectorOptimized(e, t) {
                        if (!e.filterBy) return null;
                        let a = this.resolveTargets(e.filterBy, t),
                            i = a.length;
                        if (!i) return [];
                        switch (e.relationship) {
                            case "direct-child-of":
                                {
                                    let e = [];
                                    for (let t = 0; t < i; t++) {
                                        let i = a[t];
                                        if (!i) continue;
                                        let n = i.children;
                                        for (let t = 0; t < n.length; t++) e.push(n[t])
                                    }
                                    return e
                                }
                            case "direct-parent-of":
                                {
                                    let e = new Set;
                                    for (let t = 0; t < i; t++) {
                                        let i = a[t];
                                        if (!i) continue;
                                        let n = i.parentElement;
                                        n && e.add(n)
                                    }
                                    return [...e]
                                }
                            case "next-sibling-of":
                                {
                                    let e = [];
                                    for (let t = 0; t < i; t++) {
                                        let i = a[t];
                                        if (!i) continue;
                                        let n = i.nextElementSibling;
                                        n && e.push(n)
                                    }
                                    return e
                                }
                            case "prev-sibling-of":
                                {
                                    let e = [];
                                    for (let t = 0; t < i; t++) {
                                        let i = a[t];
                                        if (!i) continue;
                                        let n = i.previousElementSibling;
                                        n && e.push(n)
                                    }
                                    return e
                                }
                            case "next-to":
                                {
                                    let e = new Set;
                                    for (let t = 0; t < i; t++) {
                                        let i = a[t];
                                        if (!i) continue;
                                        let n = i.parentElement;
                                        if (n) {
                                            let t = n.children;
                                            for (let a = 0; a < t.length; a++) {
                                                let n = t[a];
                                                n !== i && e.add(n)
                                            }
                                        }
                                    }
                                    return [...e]
                                }
                            case "within":
                                {
                                    let e = [];
                                    for (let t = 0; t < i; t++) {
                                        let i = a[t];
                                        if (!i) continue;
                                        let n = i.querySelectorAll("*");
                                        for (let t = 0; t < n.length; t++) e.push(n[t])
                                    }
                                    return e
                                }
                            case "contains":
                                {
                                    let e = new Set;
                                    for (let t = 0; t < i; t++) {
                                        let i = a[t];
                                        if (!i) continue;
                                        let n = i.parentElement;
                                        for (; n;) e.add(n), n = n.parentElement
                                    }
                                    return [...e]
                                }
                            default:
                                return null
                        }
                    }
                    applyRelationshipFilter(e, t, a, i) {
                        if (!e.length || !a.length) return [];
                        if ("none" === t) return e;
                        let n = !1,
                            r = [],
                            o = new Set;
                        for (let s of e)
                            if (!o.has(s))
                                for (let e of a) {
                                    switch (t) {
                                        case "within":
                                            n = this.isDescendantOf(s, e);
                                            break;
                                        case "direct-child-of":
                                            n = this.isDirectChildOf(s, e);
                                            break;
                                        case "contains":
                                            n = this.isDescendantOf(e, s);
                                            break;
                                        case "direct-parent-of":
                                            n = this.isDirectChildOf(e, s);
                                            break;
                                        case "next-to":
                                            n = this.isSiblingOf(s, e);
                                            break;
                                        case "next-sibling-of":
                                            n = this.isNextSiblingOf(s, e);
                                            break;
                                        case "prev-sibling-of":
                                            n = this.isPrevSiblingOf(s, e);
                                            break;
                                        default:
                                            n = !1
                                    }
                                    if (n) {
                                        if (r.push(s), o.add(s), i) return r;
                                        break
                                    }
                                }
                        return r
                    }
                    isDescendantOf(e, t) {
                        return t.contains(e) && e !== t
                    }
                    isDirectChildOf(e, t) {
                        return e.parentElement === t
                    }
                    isNextSiblingOf(e, t) {
                        return t.nextElementSibling === e
                    }
                    isPrevSiblingOf(e, t) {
                        return t.previousElementSibling === e
                    }
                    isSiblingOf(e, t) {
                        return e !== t && e.parentElement === t.parentElement && null !== e.parentElement
                    }
                    incrementTimelineRefCount(e) {
                        let t = this.timelineRefCounts.get(e) || 0;
                        this.timelineRefCounts.set(e, t + 1)
                    }
                    decrementTimelineRefCount(e) {
                        let t = Math.max(0, (this.timelineRefCounts.get(e) || 0) - 1);
                        return this.timelineRefCounts.set(e, t), t
                    }
                    decrementTimelineReferences(e) {
                        let t = new Set,
                            a = this.interactionTimelineRefs.get(e);
                        if (!a) return t;
                        for (let e of a) 0 === this.decrementTimelineRefCount(e) && t.add(e);
                        return t
                    }
                    unbindAllTriggers(e) {
                        let t = this.triggerCleanupFunctions.get(e);
                        if (t) {
                            for (let [, e] of t)
                                for (let t of e) try {
                                    t()
                                } catch (e) {
                                    console.error("Error during trigger cleanup:", e)
                                }
                            this.triggerCleanupFunctions.delete(e)
                        }
                    }
                    cleanupTriggerObservers(e) {
                        let t = this.triggerObservers.get(e);
                        if (t) {
                            for (let [e, a] of t) {
                                try {
                                    a()
                                } catch (e) {
                                    console.error("Error during trigger observer cleanup:", e)
                                }
                                this.pendingReactiveUpdates.delete(e), this.reactiveExecutionContext.delete(e)
                            }
                            this.reactiveCallbackQueues.delete(e), this.triggerObservers.delete(e)
                        }
                    }
                    cleanupInteractionAnimations(e) {
                        this.unbindAllTriggers(e);
                        let t = this.interactionTimelineRefs.get(e);
                        if (t)
                            for (let e of t) {
                                let t = this.decrementTimelineReferences(e);
                                this.cleanupUnusedTimelines(t)
                            }
                        this.triggeredElements.delete(e)
                    }
                }
            },
            8912: function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), Object.defineProperty(t, "PluginRegistry", {
                    enumerable: !0,
                    get: function() {
                        return a
                    }
                });
                class a {
                    plugins = new Map;
                    extensionsByPoint = new Map;
                    activePlugins = new Set;
                    pluginStorage = new Map;
                    constructor() {
                        ["trigger", "action", "targetResolver", "condition"].forEach(e => this.extensionsByPoint.set(e, new Map))
                    }
                    async registerPlugin(e) {
                        let t = i(e.manifest.id);
                        if (this.plugins.has(t)) throw Error(`Plugin ${t} is already registered`);
                        let a = Object.entries(e.manifest.dependencies ? ? {});
                        for (let [e] of a)
                            if (!this.plugins.has(e)) throw Error(`Missing dependency: ${e} required by ${t}`);
                        for (let a of (this.plugins.set(t, e), e.initialize && await e.initialize(), e.extensions)) this.registerExtension(a);
                        a.length || await this.activatePlugin(t)
                    }
                    registerExtension(e) {
                        this.extensionsByPoint.has(e.extensionPoint) || this.extensionsByPoint.set(e.extensionPoint, new Map);
                        let t = this.extensionsByPoint.get(e.extensionPoint),
                            a = e.id;
                        if (t.has(a)) throw Error(`Extension ${a} is already registered for point ${e.extensionPoint}`);
                        t.set(a, e)
                    }
                    async activatePlugin(e) {
                        if (this.activePlugins.has(e)) return;
                        let t = this.plugins.get(e);
                        if (!t) throw Error(`Cannot activate unknown plugin: ${e}`);
                        for (let e of Object.keys(t.manifest.dependencies ? ? {})) await this.activatePlugin(e);
                        t.activate && await t.activate(), this.activePlugins.add(e)
                    }
                    async deactivatePlugin(e) {
                        if (!this.activePlugins.has(e)) return;
                        let t = this.plugins.get(e);
                        if (!t) throw Error(`Cannot deactivate unknown plugin: ${e}`);
                        t.deactivate && await t.deactivate(), this.activePlugins.delete(e)
                    }
                    async unregisterPlugin(e, t) {
                        let a = i([e, t]),
                            n = this.plugins.get(a);
                        if (n) {
                            for (let e of (this.activePlugins.has(a) && await this.deactivatePlugin(a), n.extensions)) "condition" === e.extensionPoint && e.implementation.dispose && await e.implementation.dispose(), this.extensionsByPoint.get(e.extensionPoint) ? .delete(`${a}:${e.id}`);
                            n.dispose && await n.dispose(), this.plugins.delete(a), this.pluginStorage.delete(a)
                        }
                    }
                    getExtensions(e) {
                        return this.extensionsByPoint.get(e) || new Map
                    }
                    getExtensionImpl(e, t) {
                        return this.getExtensions(t).get(e) ? .implementation
                    }
                    getTriggerHandler([e]) {
                        return this.getExtensionImpl(e, "trigger")
                    }
                    getActionHandler(e) {
                        return this.getExtensionImpl(e, "action")
                    }
                    getTargetResolver([e]) {
                        return this.getExtensionImpl(e, "targetResolver")
                    }
                    getConditionEvaluator([e]) {
                        return this.getExtensionImpl(e, "condition")
                    }
                    getAllPlugins() {
                        return this.plugins.values()
                    }
                }

                function i(e) {
                    return `${e[0]}:${e[1]}`
                }
            },
            3408: function(e, t, a) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i = {
                    convertEaseConfigToGSAP: function() {
                        return o
                    },
                    convertEaseConfigToLinear: function() {
                        return s
                    },
                    isAdvancedEase: function() {
                        return d
                    },
                    isBasicEase: function() {
                        return l
                    }
                };
                for (var n in i) Object.defineProperty(t, n, {
                    enumerable: !0,
                    get: i[n]
                });
                let r = a(3648);

                function o(e) {
                    return null == e ? "none" : "number" == typeof e ? r.EASING_NAMES[e] || "none" : function(e) {
                        switch (e.type) {
                            case "back":
                                return `back.${e.curve}(${e.power})`;
                            case "elastic":
                                return `elastic.${e.curve}(${e.amplitude}, ${e.period})`;
                            case "steps":
                                return `steps(${e.stepCount})`;
                            case "rough":
                                {
                                    let {
                                        templateCurve: t,
                                        points: a,
                                        strength: i,
                                        taper: n,
                                        randomizePoints: r,
                                        clampPoints: o
                                    } = e;
                                    return `rough({ template: ${t}, strength: ${i}, points: ${a}, taper: ${n}, randomize: ${r}, clamp: ${o} })`
                                }
                            case "slowMo":
                                return `slow(${e.linearRatio}, ${e.power}, ${e.yoyoMode})`;
                            case "expoScale":
                                return `expoScale(${e.startingScale}, ${e.endingScale}, ${e.templateCurve})`;
                            case "customWiggle":
                                {
                                    let t = window.CustomWiggle;
                                    if (!t) return null;
                                    return t.create("customIX3Wiggle", {
                                        wiggles: e.wiggles,
                                        type: e.wiggleType
                                    })
                                }
                            case "customBounce":
                                {
                                    let t = window.CustomBounce;
                                    if (!t) return null;
                                    return t.create("customIX3Bounce", {
                                        strength: e.strength,
                                        endAtStart: e.endAtStart,
                                        squash: e.squash,
                                        squashID: "customIX3Squash"
                                    })
                                }
                            case "customEase":
                                {
                                    let t = window.CustomEase;
                                    if (!t) return null;
                                    return t.create("customIX3Ease", e.bezierCurve)
                                }
                            default:
                                return "none"
                        }
                    }(e)
                }

                function s(e, t = 20) {
                    if (null == e) return "linear";
                    let a = o(e);
                    if (null === a) return "linear";
                    if ("object" == typeof e && "steps" === e.type) return `steps(${e.stepCount})`;
                    let i = window.gsap;
                    if (!i) return "linear";
                    let n = i.parseEase(a);
                    if ("function" != typeof n) return "linear";
                    let r = [];
                    for (let e = 0; e <= t; e++) {
                        let a = e / t,
                            i = n(a);
                        r.push({
                            t: Number(a.toFixed(4)),
                            value: Number(i.toFixed(4))
                        })
                    }
                    return "linear(" + r.map(e => `${e.value} ${Math.round(100*e.t)}%`).join(", ") + ")"
                }

                function d(e) {
                    return "object" == typeof e
                }

                function l(e) {
                    return "number" == typeof e
                }
            },
            3648: function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var a = {
                    EASING_NAMES: function() {
                        return d
                    },
                    debounce: function() {
                        return o
                    },
                    defaultSplitClass: function() {
                        return r
                    },
                    throttle: function() {
                        return s
                    },
                    toSeconds: function() {
                        return n
                    }
                };
                for (var i in a) Object.defineProperty(t, i, {
                    enumerable: !0,
                    get: a[i]
                });

                function n(e) {
                    return "string" == typeof e ? parseFloat(e) / 1e3 : e
                }

                function r(e) {
                    return `gsap_split_${e}++`
                }
                let o = (e, t = 0, {
                        leading: a = !1,
                        trailing: i = !0,
                        maxWait: n
                    } = {}) => {
                        let r, o, s, d = 0,
                            l = () => {
                                d = 0, r = void 0, i && e.apply(o, s)
                            };

                        function c(...i) {
                            o = this, s = i, !d && (d = performance.now(), a && e.apply(o, s));
                            let u = performance.now() - d;
                            if (n && u >= n) {
                                clearTimeout(r), l();
                                return
                            }
                            clearTimeout(r), r = setTimeout(l, t)
                        }
                        return c.cancel = () => {
                            clearTimeout(r), r = void 0, d = 0
                        }, c
                    },
                    s = (e, t = 0, {
                        leading: a = !0,
                        trailing: i = !0,
                        maxWait: n
                    } = {}) => {
                        let r, o, s, d = 0,
                            l = t => {
                                d = t, r = void 0, e.apply(o, s)
                            };

                        function c(...e) {
                            let u = performance.now();
                            d || a || (d = u);
                            let f = t - (u - d);
                            o = this, s = e, f <= 0 || n && u - d >= n ? (r && (clearTimeout(r), r = void 0), l(u)) : i && !r && (r = setTimeout(() => l(performance.now()), f))
                        }
                        return c.cancel = () => {
                            clearTimeout(r), r = void 0, d = 0
                        }, c
                    },
                    d = ["none", "power1.in", "power1.out", "power1.inOut", "power2.in", "power2.out", "power2.inOut", "power3.in", "power3.out", "power3.inOut", "power4.in", "power4.out", "power4.inOut", "back.in", "back.out", "back.inOut", "bounce.in", "bounce.out", "bounce.inOut", "circ.in", "circ.out", "circ.inOut", "elastic.in", "elastic.out", "elastic.inOut", "expo.in", "expo.out", "expo.inOut", "sine.in", "sine.out", "sine.inOut"]
            },
            3973: function(e, t, a) {
                "use strict";
                let i = a(2019),
                    n = a(5050),
                    r = a(3949),
                    o = {
                        doc: document,
                        win: window
                    };
                class s {
                    getInstance = () => this.instance;
                    emit = (e, t, a, i) => {
                        this.instance && this.instance.emit(e, t, a, i)
                    };
                    destroy = () => {
                        this.instance && (this.instance.destroy(), this.instance = null)
                    };
                    ready = async () => {
                        if (!this.instance) try {
                            this.instance = await i.IX3.init(o), await this.instance.registerPlugin(n.plugin)
                        } catch (e) {
                            throw console.error("Error initializing IX3:", e), e
                        }
                    }
                }
                r.define("ix3", () => new s)
            },
            2104: function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var a = {
                    getFirst: function() {
                        return n
                    },
                    getSecond: function() {
                        return r
                    },
                    pair: function() {
                        return o
                    }
                };
                for (var i in a) Object.defineProperty(t, i, {
                    enumerable: !0,
                    get: a[i]
                });
                let n = e => e[0],
                    r = e => e[1],
                    o = (e, t) => [e, t]
            },
            7193: function() {
                function e() {
                    let e = Webflow.require("ix3");
                    e.ready().then(() => {
                        let t = e.getInstance();
                        t && (t.register([{
                            id: "i-757cd878",
                            triggers: [
                                ["wf:scroll", {
                                        controlType: "scroll",
                                        scrollTriggerConfig: {
                                            clamp: !0,
                                            start: "top bottom",
                                            end: "top 300",
                                            scrub: .8,
                                            enter: "play",
                                            leave: "none",
                                            enterBack: "none",
                                            leaveBack: "none"
                                        }
                                    },
                                    ["wf:class", ["font-2-normal"], {
                                        relationship: "none",
                                        firstMatchOnly: !1
                                    }]
                                ]
                            ],
                            timelineIds: ["t-04c0c440"],
                            deleted: !1
                        }, {
                            id: "i-262bed21",
                            triggers: [
                                ["wf:load", {
                                    controlType: "load"
                                }]
                            ],
                            timelineIds: ["t-57b1400b"],
                            deleted: !1
                        }, {
                            id: "i-67162b58",
                            triggers: [
                                ["wf:scroll", {
                                        controlType: "scroll",
                                        scrollTriggerConfig: {
                                            clamp: !0,
                                            start: "top bottom",
                                            end: "top 300",
                                            scrub: null,
                                            enter: "play",
                                            leave: "none",
                                            enterBack: "none",
                                            leaveBack: "none"
                                        }
                                    },
                                    ["wf:class", ["hero-bottom-right"], {
                                        relationship: "none",
                                        firstMatchOnly: !1
                                    }]
                                ]
                            ],
                            timelineIds: ["t-a20a8631"],
                            deleted: !1
                        }], [{
                            id: "t-04c0c440",
                            deleted: !1,
                            actions: [{
                                id: "ta-23150499",
                                targets: [
                                    ["wf:inst", ["6942f831d922d40a223b67ba", "38e76d66-2eaf-e19d-dcfb-bff34f3581aa"], {
                                        relationship: "none",
                                        firstMatchOnly: !1
                                    }]
                                ],
                                timing: {
                                    position: 0,
                                    stagger: {
                                        each: .05
                                    },
                                    ease: 2
                                },
                                tt: 2,
                                properties: {
                                    "wf:transform": {},
                                    "wf:style": {
                                        color: ["#767676", "hsla(0, 0.00%, 100.00%, 1.00)"]
                                    }
                                },
                                splitText: {
                                    type: "chars"
                                }
                            }]
                        }, {
                            id: "t-57b1400b",
                            deleted: !1,
                            actions: [{
                                id: "ta-637b37a9",
                                targets: [
                                    ["wf:class", ["hero-heading"], {
                                        relationship: "none",
                                        firstMatchOnly: !1
                                    }]
                                ],
                                timing: {
                                    position: 0,
                                    stagger: {
                                        each: .1
                                    },
                                    ease: 5
                                },
                                tt: 1,
                                properties: {
                                    "wf:transform": {
                                        opacity: ["0%", null],
                                        y: ["-100%", "0%"]
                                    }
                                },
                                splitText: {
                                    type: "chars"
                                }
                            }]
                        }, {
                            id: "t-a20a8631",
                            deleted: !1,
                            actions: [{
                                id: "ta-fddeac91",
                                targets: [
                                    ["wf:attribute", '[data-stagger-from-right="true"]', {
                                        relationship: "none",
                                        firstMatchOnly: !1
                                    }]
                                ],
                                timing: {
                                    position: 0,
                                    stagger: {
                                        each: .1,
                                        from: "end"
                                    },
                                    ease: 8
                                },
                                tt: 1,
                                properties: {
                                    "wf:transform": {
                                        y: ["-100%", "0%"],
                                        opacity: ["0%", null]
                                    }
                                },
                                splitText: {
                                    type: "chars"
                                }
                            }]
                        }]), window.dispatchEvent(new CustomEvent("__wf_ix3_ready")), document.documentElement.classList.add("w-mod-ix3"))
                    })
                }
                Webflow.require("ix2").init({
                    events: {
                        e: {
                            id: "e",
                            name: "",
                            animationType: "custom",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_START_ACTION",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    actionListId: "a",
                                    affectedElements: {},
                                    playInReverse: !1,
                                    autoStopEventId: "e-2"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "6942f831d922d40a223b67ba|ed1f7676-1321-5aff-f1dc-73a4d5c77cda",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "6942f831d922d40a223b67ba|ed1f7676-1321-5aff-f1dc-73a4d5c77cda",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !0,
                                playInReverse: !1,
                                scrollOffsetValue: 0,
                                scrollOffsetUnit: "%",
                                delay: null,
                                direction: null,
                                effectIn: null
                            },
                            createdOn: 0x19b37a7b7cc
                        },
                        "e-3": {
                            id: "e-3",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_START_ACTION",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    actionListId: "a-2",
                                    affectedElements: {},
                                    playInReverse: !1,
                                    autoStopEventId: "e-4"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                selector: ".counter-item",
                                originalId: "684a779bcdc7339892e43e94|3dbb60ec-9962-a01e-3237-5e7cd9b7896f",
                                appliesTo: "CLASS"
                            },
                            targets: [{
                                selector: ".counter-item",
                                originalId: "684a779bcdc7339892e43e94|3dbb60ec-9962-a01e-3237-5e7cd9b7896f",
                                appliesTo: "CLASS"
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 0,
                                scrollOffsetUnit: "%",
                                delay: null,
                                direction: null,
                                effectIn: null
                            },
                            createdOn: 0x19774dfc7a2
                        },
                        "e-6": {
                            id: "e-6",
                            name: "",
                            animationType: "custom",
                            eventTypeId: "MOUSE_OUT",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_START_ACTION",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    actionListId: "a-3",
                                    affectedElements: {},
                                    playInReverse: !1,
                                    autoStopEventId: "e-5"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "6942f831d922d40a223b67ba|c2e8cfc7-e651-ed12-9a20-38e2918a8906",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "6942f831d922d40a223b67ba|c2e8cfc7-e651-ed12-9a20-38e2918a8906",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: null,
                                scrollOffsetUnit: null,
                                delay: null,
                                direction: null,
                                effectIn: null
                            },
                            createdOn: 0x19b42a41c78
                        },
                        "e-7": {
                            id: "e-7",
                            name: "",
                            animationType: "custom",
                            eventTypeId: "MOUSE_OVER",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_START_ACTION",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    actionListId: "a-5",
                                    affectedElements: {},
                                    playInReverse: !1,
                                    autoStopEventId: "e-8"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "6942f831d922d40a223b67ba|f0aabc90-0b69-1ec1-cdc5-173a5f7b866a",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "6942f831d922d40a223b67ba|f0aabc90-0b69-1ec1-cdc5-173a5f7b866a",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: null,
                                scrollOffsetUnit: null,
                                delay: null,
                                direction: null,
                                effectIn: null
                            },
                            createdOn: 0x19b42a7888c
                        },
                        "e-9": {
                            id: "e-9",
                            name: "",
                            animationType: "custom",
                            eventTypeId: "MOUSE_OVER",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_START_ACTION",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    actionListId: "a-7",
                                    affectedElements: {},
                                    playInReverse: !1,
                                    autoStopEventId: "e-10"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "6942f831d922d40a223b67ba|08250765-14ed-fac9-a55e-dd26a79e8cf5",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "6942f831d922d40a223b67ba|08250765-14ed-fac9-a55e-dd26a79e8cf5",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: null,
                                scrollOffsetUnit: null,
                                delay: null,
                                direction: null,
                                effectIn: null
                            },
                            createdOn: 0x19b42a8af07
                        },
                        "e-11": {
                            id: "e-11",
                            name: "",
                            animationType: "custom",
                            eventTypeId: "MOUSE_OVER",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_START_ACTION",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    actionListId: "a-8",
                                    affectedElements: {},
                                    playInReverse: !1,
                                    autoStopEventId: "e-12"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "6942f831d922d40a223b67ba|508f4d7f-0a9f-0b45-dd57-3e025035161f",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "6942f831d922d40a223b67ba|508f4d7f-0a9f-0b45-dd57-3e025035161f",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: null,
                                scrollOffsetUnit: null,
                                delay: null,
                                direction: null,
                                effectIn: null
                            },
                            createdOn: 0x19b42ad7657
                        },
                        "e-13": {
                            id: "e-13",
                            name: "",
                            animationType: "custom",
                            eventTypeId: "MOUSE_OVER",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_START_ACTION",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    actionListId: "a-9",
                                    affectedElements: {},
                                    playInReverse: !1,
                                    autoStopEventId: "e-14"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "6942f831d922d40a223b67ba|7a1f670d-aa48-75ed-ff59-56c211069c42",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "6942f831d922d40a223b67ba|7a1f670d-aa48-75ed-ff59-56c211069c42",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: null,
                                scrollOffsetUnit: null,
                                delay: null,
                                direction: null,
                                effectIn: null
                            },
                            createdOn: 0x19b42af8100
                        },
                        "e-15": {
                            id: "e-15",
                            name: "",
                            animationType: "custom",
                            eventTypeId: "MOUSE_OVER",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_START_ACTION",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    actionListId: "a-10",
                                    affectedElements: {},
                                    playInReverse: !1,
                                    autoStopEventId: "e-16"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "6942f831d922d40a223b67ba|227e941d-3951-2e22-258e-18b39ea2c119",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "6942f831d922d40a223b67ba|227e941d-3951-2e22-258e-18b39ea2c119",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: null,
                                scrollOffsetUnit: null,
                                delay: null,
                                direction: null,
                                effectIn: null
                            },
                            createdOn: 0x19b42b2a25f
                        },
                        "e-17": {
                            id: "e-17",
                            name: "",
                            animationType: "custom",
                            eventTypeId: "TAB_ACTIVE",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_START_ACTION",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    actionListId: "a-11",
                                    affectedElements: {},
                                    playInReverse: !1,
                                    autoStopEventId: "e-18"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                selector: ".taq-tab-link",
                                originalId: "6942f831d922d40a223b67ba|95a5e8b8-29bd-4b0b-9cfb-7152115e886d",
                                appliesTo: "CLASS"
                            },
                            targets: [{
                                selector: ".taq-tab-link",
                                originalId: "6942f831d922d40a223b67ba|95a5e8b8-29bd-4b0b-9cfb-7152115e886d",
                                appliesTo: "CLASS"
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: null,
                                scrollOffsetUnit: null,
                                delay: null,
                                direction: null,
                                effectIn: null
                            },
                            createdOn: 0x19b479daa89
                        },
                        "e-18": {
                            id: "e-18",
                            name: "",
                            animationType: "custom",
                            eventTypeId: "TAB_INACTIVE",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_START_ACTION",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    actionListId: "a-12",
                                    affectedElements: {},
                                    playInReverse: !1,
                                    autoStopEventId: "e-17"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                selector: ".taq-tab-link",
                                originalId: "6942f831d922d40a223b67ba|95a5e8b8-29bd-4b0b-9cfb-7152115e886d",
                                appliesTo: "CLASS"
                            },
                            targets: [{
                                selector: ".taq-tab-link",
                                originalId: "6942f831d922d40a223b67ba|95a5e8b8-29bd-4b0b-9cfb-7152115e886d",
                                appliesTo: "CLASS"
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: null,
                                scrollOffsetUnit: null,
                                delay: null,
                                direction: null,
                                effectIn: null
                            },
                            createdOn: 0x19b479daa89
                        },
                        "e-19": {
                            id: "e-19",
                            name: "",
                            animationType: "custom",
                            eventTypeId: "MOUSE_OVER",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_START_ACTION",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    actionListId: "a-13",
                                    affectedElements: {},
                                    playInReverse: !1,
                                    autoStopEventId: "e-20"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                selector: ".primary-btn",
                                originalId: "caba7161-a896-7f39-b5a5-1af393b6ecc0",
                                appliesTo: "CLASS"
                            },
                            targets: [{
                                selector: ".primary-btn",
                                originalId: "caba7161-a896-7f39-b5a5-1af393b6ecc0",
                                appliesTo: "CLASS"
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: null,
                                scrollOffsetUnit: null,
                                delay: null,
                                direction: null,
                                effectIn: null
                            },
                            createdOn: 0x19b70430ca5
                        },
                        "e-20": {
                            id: "e-20",
                            name: "",
                            animationType: "custom",
                            eventTypeId: "MOUSE_OUT",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_START_ACTION",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    actionListId: "a-14",
                                    affectedElements: {},
                                    playInReverse: !1,
                                    autoStopEventId: "e-19"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                selector: ".primary-btn",
                                originalId: "caba7161-a896-7f39-b5a5-1af393b6ecc0",
                                appliesTo: "CLASS"
                            },
                            targets: [{
                                selector: ".primary-btn",
                                originalId: "caba7161-a896-7f39-b5a5-1af393b6ecc0",
                                appliesTo: "CLASS"
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: null,
                                scrollOffsetUnit: null,
                                delay: null,
                                direction: null,
                                effectIn: null
                            },
                            createdOn: 0x19b70430ca5
                        },
                        "e-25": {
                            id: "e-25",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "SLIDE_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "slideInBottom",
                                    autoStopEventId: "e-26"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "6942f831d922d40a223b67ba|ed1f7676-1321-5aff-f1dc-73a4d5c77cda",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "6942f831d922d40a223b67ba|ed1f7676-1321-5aff-f1dc-73a4d5c77cda",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 10,
                                scrollOffsetUnit: "%",
                                delay: 300,
                                direction: "BOTTOM",
                                effectIn: !0
                            },
                            createdOn: 0x19b704f71cf
                        },
                        "e-27": {
                            id: "e-27",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "SLIDE_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "slideInBottom",
                                    autoStopEventId: "e-28"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                selector: ".counter-block",
                                originalId: "6942f831d922d40a223b67ba|7f478902-a8e8-1a7c-d4a6-5be2b94c91be",
                                appliesTo: "CLASS"
                            },
                            targets: [{
                                selector: ".counter-block",
                                originalId: "6942f831d922d40a223b67ba|7f478902-a8e8-1a7c-d4a6-5be2b94c91be",
                                appliesTo: "CLASS"
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 0,
                                scrollOffsetUnit: "%",
                                delay: 0,
                                direction: "BOTTOM",
                                effectIn: !0
                            },
                            createdOn: 0x19b70552667
                        },
                        "e-33": {
                            id: "e-33",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "SLIDE_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "slideInBottom",
                                    autoStopEventId: "e-34"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "6942f831d922d40a223b67ba|32aebe6d-2ba0-de6a-32df-10e5d62ab96e",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "6942f831d922d40a223b67ba|32aebe6d-2ba0-de6a-32df-10e5d62ab96e",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 10,
                                scrollOffsetUnit: "%",
                                delay: 500,
                                direction: "BOTTOM",
                                effectIn: !0
                            },
                            createdOn: 0x19b705b8d50
                        },
                        "e-35": {
                            id: "e-35",
                            name: "",
                            animationType: "custom",
                            eventTypeId: "SCROLLING_IN_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                                config: {
                                    actionListId: "a-18",
                                    affectedElements: {},
                                    duration: 0
                                }
                            },
                            mediaQueries: ["main", "medium"],
                            target: {
                                id: "6942f831d922d40a223b67ba|d42d9e41-4a0c-ab5a-d0c3-cc048665d7a9",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "6942f831d922d40a223b67ba|d42d9e41-4a0c-ab5a-d0c3-cc048665d7a9",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: [{
                                continuousParameterGroupId: "a-18-p",
                                smoothing: 90,
                                startsEntering: !0,
                                addStartOffset: !1,
                                addOffsetValue: 50,
                                startsExiting: !1,
                                addEndOffset: !1,
                                endOffsetValue: 50
                            }],
                            createdOn: 0x19b706d6af4
                        },
                        "e-36": {
                            id: "e-36",
                            name: "",
                            animationType: "custom",
                            eventTypeId: "SCROLLING_IN_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                                config: {
                                    actionListId: "a-18",
                                    affectedElements: {},
                                    duration: 0
                                }
                            },
                            mediaQueries: ["main", "medium"],
                            target: {
                                id: "6942f831d922d40a223b67ba|e1ad92ea-96e2-2551-1451-4268b894a481",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "6942f831d922d40a223b67ba|e1ad92ea-96e2-2551-1451-4268b894a481",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: [{
                                continuousParameterGroupId: "a-18-p",
                                smoothing: 90,
                                startsEntering: !0,
                                addStartOffset: !1,
                                addOffsetValue: 50,
                                startsExiting: !1,
                                addEndOffset: !1,
                                endOffsetValue: 50
                            }],
                            createdOn: 0x19b70723185
                        },
                        "e-37": {
                            id: "e-37",
                            name: "",
                            animationType: "custom",
                            eventTypeId: "SCROLLING_IN_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                                config: {
                                    actionListId: "a-19",
                                    affectedElements: {},
                                    duration: 0
                                }
                            },
                            mediaQueries: ["main", "medium"],
                            target: {
                                id: "6942f831d922d40a223b67ba|b0825db5-1237-710f-66d3-d8f25f1c7a63",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "6942f831d922d40a223b67ba|b0825db5-1237-710f-66d3-d8f25f1c7a63",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: [{
                                continuousParameterGroupId: "a-19-p",
                                smoothing: 90,
                                startsEntering: !0,
                                addStartOffset: !1,
                                addOffsetValue: 50,
                                startsExiting: !1,
                                addEndOffset: !1,
                                endOffsetValue: 50
                            }],
                            createdOn: 0x19b7075aaf6
                        },
                        "e-38": {
                            id: "e-38",
                            name: "",
                            animationType: "custom",
                            eventTypeId: "SCROLLING_IN_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                                config: {
                                    actionListId: "a-19",
                                    affectedElements: {},
                                    duration: 0
                                }
                            },
                            mediaQueries: ["main", "medium"],
                            target: {
                                id: "6942f831d922d40a223b67ba|13f4b552-d25d-f74f-9346-8a0208c72cd7",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "6942f831d922d40a223b67ba|13f4b552-d25d-f74f-9346-8a0208c72cd7",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: [{
                                continuousParameterGroupId: "a-19-p",
                                smoothing: 90,
                                startsEntering: !0,
                                addStartOffset: !1,
                                addOffsetValue: 50,
                                startsExiting: !1,
                                addEndOffset: !1,
                                endOffsetValue: 50
                            }],
                            createdOn: 0x19b70786eee
                        },
                        "e-39": {
                            id: "e-39",
                            name: "",
                            animationType: "custom",
                            eventTypeId: "SCROLLING_IN_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                                config: {
                                    actionListId: "a-20",
                                    affectedElements: {},
                                    duration: 0
                                }
                            },
                            mediaQueries: ["main", "medium"],
                            target: {
                                id: "6942f831d922d40a223b67ba|ec671cdb-5b92-b082-37d0-1575c0d048dc",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "6942f831d922d40a223b67ba|ec671cdb-5b92-b082-37d0-1575c0d048dc",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: [{
                                continuousParameterGroupId: "a-20-p",
                                smoothing: 50,
                                startsEntering: !0,
                                addStartOffset: !1,
                                addOffsetValue: 50,
                                startsExiting: !1,
                                addEndOffset: !1,
                                endOffsetValue: 50
                            }],
                            createdOn: 0x19b7078e9c6
                        },
                        "e-40": {
                            id: "e-40",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "GROW_BIG_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "growBigIn",
                                    autoStopEventId: "e-41"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "6942f831d922d40a223b67ba|8b0cc758-04da-cbf7-ff65-432275295f68",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "6942f831d922d40a223b67ba|8b0cc758-04da-cbf7-ff65-432275295f68",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 10,
                                scrollOffsetUnit: "%",
                                delay: 200,
                                direction: null,
                                effectIn: !0
                            },
                            createdOn: 0x19b707c1b37
                        },
                        "e-42": {
                            id: "e-42",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "GROW_BIG_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "growBigIn",
                                    autoStopEventId: "e-43"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "6942f831d922d40a223b67ba|74f3d0af-178c-4895-0124-4a3b7b396823",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "6942f831d922d40a223b67ba|74f3d0af-178c-4895-0124-4a3b7b396823",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 10,
                                scrollOffsetUnit: "%",
                                delay: 200,
                                direction: null,
                                effectIn: !0
                            },
                            createdOn: 0x19b707d1d80
                        },
                        "e-44": {
                            id: "e-44",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "GROW_BIG_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "growBigIn",
                                    autoStopEventId: "e-45"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "6942f831d922d40a223b67ba|08cf9c88-6b49-8a37-9750-62ba833e361a",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "6942f831d922d40a223b67ba|08cf9c88-6b49-8a37-9750-62ba833e361a",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 10,
                                scrollOffsetUnit: "%",
                                delay: 200,
                                direction: null,
                                effectIn: !0
                            },
                            createdOn: 0x19b707d8146
                        },
                        "e-48": {
                            id: "e-48",
                            name: "",
                            animationType: "custom",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_START_ACTION",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    actionListId: "a-21",
                                    affectedElements: {},
                                    playInReverse: !1,
                                    autoStopEventId: "e-49"
                                }
                            },
                            mediaQueries: ["main"],
                            target: {
                                id: "6942f831d922d40a223b67ba|fbb67ee1-983e-9c07-cdfa-39cf1c26e69b",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "6942f831d922d40a223b67ba|fbb67ee1-983e-9c07-cdfa-39cf1c26e69b",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 25,
                                scrollOffsetUnit: "%",
                                delay: null,
                                direction: null,
                                effectIn: null
                            },
                            createdOn: 0x19b7082c407
                        },
                        "e-50": {
                            id: "e-50",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "SLIDE_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "slideInBottom",
                                    autoStopEventId: "e-51"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                selector: ".badge-text.normal",
                                originalId: "6942f831d922d40a223b67ba|7ffc0262-7424-21a3-5dac-859cc03c4f71",
                                appliesTo: "CLASS"
                            },
                            targets: [{
                                selector: ".badge-text.normal",
                                originalId: "6942f831d922d40a223b67ba|7ffc0262-7424-21a3-5dac-859cc03c4f71",
                                appliesTo: "CLASS"
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 10,
                                scrollOffsetUnit: "%",
                                delay: 400,
                                direction: "BOTTOM",
                                effectIn: !0
                            },
                            createdOn: 0x19b7090d012
                        },
                        "e-52": {
                            id: "e-52",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "SLIDE_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "slideInBottom",
                                    autoStopEventId: "e-53"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                selector: ".section-heading",
                                originalId: "6942f831d922d40a223b67ba|a0cc635c-a1ff-7be8-0fa9-46c053a088ca",
                                appliesTo: "CLASS"
                            },
                            targets: [{
                                selector: ".section-heading",
                                originalId: "6942f831d922d40a223b67ba|a0cc635c-a1ff-7be8-0fa9-46c053a088ca",
                                appliesTo: "CLASS"
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 10,
                                scrollOffsetUnit: "%",
                                delay: 400,
                                direction: "BOTTOM",
                                effectIn: !0
                            },
                            createdOn: 0x19b70910862
                        },
                        "e-54": {
                            id: "e-54",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "SLIDE_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "slideInBottom",
                                    autoStopEventId: "e-55"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "6942f831d922d40a223b67ba|d22bb8cc-51b2-ff98-0234-78a184f558ae",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "6942f831d922d40a223b67ba|d22bb8cc-51b2-ff98-0234-78a184f558ae",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 10,
                                scrollOffsetUnit: "%",
                                delay: 300,
                                direction: "BOTTOM",
                                effectIn: !0
                            },
                            createdOn: 0x19b709142b2
                        },
                        "e-56": {
                            id: "e-56",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "SLIDE_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "slideInBottom",
                                    autoStopEventId: "e-57"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                selector: ".taq-tab-link",
                                originalId: "6942f831d922d40a223b67ba|95a5e8b8-29bd-4b0b-9cfb-7152115e8870",
                                appliesTo: "CLASS"
                            },
                            targets: [{
                                selector: ".taq-tab-link",
                                originalId: "6942f831d922d40a223b67ba|95a5e8b8-29bd-4b0b-9cfb-7152115e8870",
                                appliesTo: "CLASS"
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 10,
                                scrollOffsetUnit: "%",
                                delay: 400,
                                direction: "BOTTOM",
                                effectIn: !0
                            },
                            createdOn: 0x19b7091c0e2
                        },
                        "e-64": {
                            id: "e-64",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "SLIDE_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "slideInLeft",
                                    autoStopEventId: "e-65"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "6942f831d922d40a223b67ba|7f989a90-9a7c-1f4f-177f-63da8fdafdb0",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "6942f831d922d40a223b67ba|7f989a90-9a7c-1f4f-177f-63da8fdafdb0",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 10,
                                scrollOffsetUnit: "%",
                                delay: 300,
                                direction: "LEFT",
                                effectIn: !0
                            },
                            createdOn: 0x19b7095a01c
                        },
                        "e-66": {
                            id: "e-66",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "SLIDE_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "slideInRight",
                                    autoStopEventId: "e-67"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "6942f831d922d40a223b67ba|492683eb-b2d8-e4c2-59ff-53e1e90ecb02",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "6942f831d922d40a223b67ba|492683eb-b2d8-e4c2-59ff-53e1e90ecb02",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 10,
                                scrollOffsetUnit: "%",
                                delay: 500,
                                direction: "RIGHT",
                                effectIn: !0
                            },
                            createdOn: 0x19b709614b4
                        },
                        "e-68": {
                            id: "e-68",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "SLIDE_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "slideInRight",
                                    autoStopEventId: "e-69"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "6942f831d922d40a223b67ba|076ed232-678a-bf22-a904-82dfa91df2f9",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "6942f831d922d40a223b67ba|076ed232-678a-bf22-a904-82dfa91df2f9",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 10,
                                scrollOffsetUnit: "%",
                                delay: 400,
                                direction: "RIGHT",
                                effectIn: !0
                            },
                            createdOn: 0x19b709654bc
                        },
                        "e-70": {
                            id: "e-70",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "SLIDE_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "slideInBottom",
                                    autoStopEventId: "e-71"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "cde6c430-667b-4eab-d323-c8599f288b7c",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "cde6c430-667b-4eab-d323-c8599f288b7c",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 10,
                                scrollOffsetUnit: "%",
                                delay: 400,
                                direction: "BOTTOM",
                                effectIn: !0
                            },
                            createdOn: 0x19b709ad6d2
                        },
                        "e-72": {
                            id: "e-72",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "SLIDE_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "slideInLeft",
                                    autoStopEventId: "e-73"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "cde6c430-667b-4eab-d323-c8599f288b93",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "cde6c430-667b-4eab-d323-c8599f288b93",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 10,
                                scrollOffsetUnit: "%",
                                delay: 300,
                                direction: "LEFT",
                                effectIn: !0
                            },
                            createdOn: 0x19b709b480d
                        },
                        "e-74": {
                            id: "e-74",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "SLIDE_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "slideInRight",
                                    autoStopEventId: "e-75"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "cde6c430-667b-4eab-d323-c8599f288b9c",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "cde6c430-667b-4eab-d323-c8599f288b9c",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 10,
                                scrollOffsetUnit: "%",
                                delay: 300,
                                direction: "RIGHT",
                                effectIn: !0
                            },
                            createdOn: 0x19b709b7a9d
                        },
                        "e-76": {
                            id: "e-76",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "SLIDE_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "slideInBottom",
                                    autoStopEventId: "e-77"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "cde6c430-667b-4eab-d323-c8599f288bb8",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "cde6c430-667b-4eab-d323-c8599f288bb8",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 0,
                                scrollOffsetUnit: "%",
                                delay: 300,
                                direction: "BOTTOM",
                                effectIn: !0
                            },
                            createdOn: 0x19b709bb9ac
                        },
                        "e-78": {
                            id: "e-78",
                            name: "",
                            animationType: "custom",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_START_ACTION",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    actionListId: "a-22",
                                    affectedElements: {},
                                    playInReverse: !1,
                                    autoStopEventId: "e-79"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "cde6c430-667b-4eab-d323-c8599f288bc4",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "cde6c430-667b-4eab-d323-c8599f288bc4",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 5,
                                scrollOffsetUnit: "%",
                                delay: null,
                                direction: null,
                                effectIn: null
                            },
                            createdOn: 0x19b70a4a879
                        },
                        "e-80": {
                            id: "e-80",
                            name: "",
                            animationType: "custom",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_START_ACTION",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    actionListId: "a-23",
                                    affectedElements: {},
                                    playInReverse: !1,
                                    autoStopEventId: "e-81"
                                }
                            },
                            mediaQueries: ["main"],
                            target: {
                                id: "6942f831d922d40a223b67ba|7639c7ad-4c06-36cc-5473-cf9f339ed977",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "6942f831d922d40a223b67ba|7639c7ad-4c06-36cc-5473-cf9f339ed977",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !0,
                                playInReverse: !1,
                                scrollOffsetValue: 0,
                                scrollOffsetUnit: "%",
                                delay: null,
                                direction: null,
                                effectIn: null
                            },
                            createdOn: 0x19b70ac2f12
                        },
                        "e-82": {
                            id: "e-82",
                            name: "",
                            animationType: "custom",
                            eventTypeId: "MOUSE_CLICK",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_START_ACTION",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    actionListId: "a-24",
                                    affectedElements: {},
                                    playInReverse: !1,
                                    autoStopEventId: "e-83"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "fb3d3fe2-6e44-c10b-2cc7-c2dd8c4d4742",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "fb3d3fe2-6e44-c10b-2cc7-c2dd8c4d4742",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: null,
                                scrollOffsetUnit: null,
                                delay: null,
                                direction: null,
                                effectIn: null
                            },
                            createdOn: 0x19b741c1e49
                        },
                        "e-83": {
                            id: "e-83",
                            name: "",
                            animationType: "custom",
                            eventTypeId: "MOUSE_SECOND_CLICK",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_START_ACTION",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    actionListId: "a-25",
                                    affectedElements: {},
                                    playInReverse: !1,
                                    autoStopEventId: "e-82"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "fb3d3fe2-6e44-c10b-2cc7-c2dd8c4d4742",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "fb3d3fe2-6e44-c10b-2cc7-c2dd8c4d4742",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: null,
                                scrollOffsetUnit: null,
                                delay: null,
                                direction: null,
                                effectIn: null
                            },
                            createdOn: 0x19b741c1e4b
                        },
                        "e-84": {
                            id: "e-84",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "SLIDE_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "slideInBottom",
                                    autoStopEventId: "e-85"
                                }
                            },
                            mediaQueries: ["medium", "small", "tiny"],
                            target: {
                                selector: ".pricing-card",
                                originalId: "6942f831d922d40a223b67ba|e4970a34-9e47-d06e-4a34-9419aeef14c4",
                                appliesTo: "CLASS"
                            },
                            targets: [{
                                selector: ".pricing-card",
                                originalId: "6942f831d922d40a223b67ba|e4970a34-9e47-d06e-4a34-9419aeef14c4",
                                appliesTo: "CLASS"
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 10,
                                scrollOffsetUnit: "%",
                                delay: 300,
                                direction: "BOTTOM",
                                effectIn: !0
                            },
                            createdOn: 0x19b74284770
                        },
                        "e-86": {
                            id: "e-86",
                            name: "",
                            animationType: "custom",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_START_ACTION",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    actionListId: "a-26",
                                    affectedElements: {},
                                    playInReverse: !1,
                                    autoStopEventId: "e-87"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                selector: ".fade-in-move-on-scroll",
                                originalId: "6835ce1cd96d6cf4bc5e12d4|c5e82cf7-05af-c6f6-a95a-db7eaa388875",
                                appliesTo: "CLASS"
                            },
                            targets: [{
                                selector: ".fade-in-move-on-scroll",
                                originalId: "6835ce1cd96d6cf4bc5e12d4|c5e82cf7-05af-c6f6-a95a-db7eaa388875",
                                appliesTo: "CLASS"
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 0,
                                scrollOffsetUnit: "%",
                                delay: null,
                                direction: null,
                                effectIn: null
                            },
                            createdOn: 0x1979d880ef8
                        },
                        "e-88": {
                            id: "e-88",
                            name: "",
                            animationType: "custom",
                            eventTypeId: "MOUSE_OVER",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_START_ACTION",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    actionListId: "a-27",
                                    affectedElements: {},
                                    playInReverse: !1,
                                    autoStopEventId: "e-89"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                selector: ".team-card",
                                originalId: "6863ce4774abb9660aefa980|40d769b4-0b60-b4a9-1f38-1eb9248ff7fc",
                                appliesTo: "CLASS"
                            },
                            targets: [{
                                selector: ".team-card",
                                originalId: "6863ce4774abb9660aefa980|40d769b4-0b60-b4a9-1f38-1eb9248ff7fc",
                                appliesTo: "CLASS"
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: null,
                                scrollOffsetUnit: null,
                                delay: null,
                                direction: null,
                                effectIn: null
                            },
                            createdOn: 0x19793538365
                        },
                        "e-89": {
                            id: "e-89",
                            name: "",
                            animationType: "custom",
                            eventTypeId: "MOUSE_OUT",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_START_ACTION",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    actionListId: "a-28",
                                    affectedElements: {},
                                    playInReverse: !1,
                                    autoStopEventId: "e-88"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                selector: ".team-card",
                                originalId: "6863ce4774abb9660aefa980|40d769b4-0b60-b4a9-1f38-1eb9248ff7fc",
                                appliesTo: "CLASS"
                            },
                            targets: [{
                                selector: ".team-card",
                                originalId: "6863ce4774abb9660aefa980|40d769b4-0b60-b4a9-1f38-1eb9248ff7fc",
                                appliesTo: "CLASS"
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: null,
                                scrollOffsetUnit: null,
                                delay: null,
                                direction: null,
                                effectIn: null
                            },
                            createdOn: 0x19793538365
                        },
                        "e-90": {
                            id: "e-90",
                            name: "",
                            animationType: "custom",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_START_ACTION",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    actionListId: "a-29",
                                    affectedElements: {},
                                    playInReverse: !1,
                                    autoStopEventId: "e-91"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                selector: ".team-card",
                                originalId: "6863ce4774abb9660aefa980|40d769b4-0b60-b4a9-1f38-1eb9248ff7fc",
                                appliesTo: "CLASS"
                            },
                            targets: [{
                                selector: ".team-card",
                                originalId: "6863ce4774abb9660aefa980|40d769b4-0b60-b4a9-1f38-1eb9248ff7fc",
                                appliesTo: "CLASS"
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 0,
                                scrollOffsetUnit: "%",
                                delay: null,
                                direction: null,
                                effectIn: null
                            },
                            createdOn: 0x197a30912af
                        },
                        "e-92": {
                            id: "e-92",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "SLIDE_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "slideInBottom",
                                    autoStopEventId: "e-93"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "6942f831d922d40a223b67ba|15ef98cd-2421-6870-f665-e7bd3ec29357",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "6942f831d922d40a223b67ba|15ef98cd-2421-6870-f665-e7bd3ec29357",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 10,
                                scrollOffsetUnit: "%",
                                delay: 300,
                                direction: "BOTTOM",
                                effectIn: !0
                            },
                            createdOn: 0x19b74fb8216
                        },
                        "e-94": {
                            id: "e-94",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "SLIDE_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "slideInBottom",
                                    autoStopEventId: "e-95"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "6942f831d922d40a223b67ba|5aea3b07-0099-61ec-fc5b-da4c05e41381",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "6942f831d922d40a223b67ba|5aea3b07-0099-61ec-fc5b-da4c05e41381",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 0,
                                scrollOffsetUnit: "%",
                                delay: 600,
                                direction: "BOTTOM",
                                effectIn: !0
                            },
                            createdOn: 0x19b750aec9a
                        },
                        "e-96": {
                            id: "e-96",
                            name: "",
                            animationType: "custom",
                            eventTypeId: "MOUSE_OVER",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_START_ACTION",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    actionListId: "a-30",
                                    affectedElements: {},
                                    playInReverse: !1,
                                    autoStopEventId: "e-97"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                selector: ".nav-link-2",
                                originalId: "4c69afc0-929f-c373-586d-a65cdb6eec0e",
                                appliesTo: "CLASS"
                            },
                            targets: [{
                                selector: ".nav-link-2",
                                originalId: "4c69afc0-929f-c373-586d-a65cdb6eec0e",
                                appliesTo: "CLASS"
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: null,
                                scrollOffsetUnit: null,
                                delay: null,
                                direction: null,
                                effectIn: null
                            },
                            createdOn: 0x1979ddebcde
                        },
                        "e-97": {
                            id: "e-97",
                            name: "",
                            animationType: "custom",
                            eventTypeId: "MOUSE_OUT",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_START_ACTION",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    actionListId: "a-31",
                                    affectedElements: {},
                                    playInReverse: !1,
                                    autoStopEventId: "e-42"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                selector: ".nav-link-2",
                                originalId: "4c69afc0-929f-c373-586d-a65cdb6eec0e",
                                appliesTo: "CLASS"
                            },
                            targets: [{
                                selector: ".nav-link-2",
                                originalId: "4c69afc0-929f-c373-586d-a65cdb6eec0e",
                                appliesTo: "CLASS"
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: null,
                                scrollOffsetUnit: null,
                                delay: null,
                                direction: null,
                                effectIn: null
                            },
                            createdOn: 0x1979ddebcdf
                        },
                        "e-98": {
                            id: "e-98",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "SLIDE_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "slideInBottom",
                                    autoStopEventId: "e-99"
                                }
                            },
                            mediaQueries: ["medium", "small", "tiny"],
                            target: {
                                id: "6942f831d922d40a223b67ba|328bdbcd-ffa0-6554-fdfe-36bf7b4ce156",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "6942f831d922d40a223b67ba|328bdbcd-ffa0-6554-fdfe-36bf7b4ce156",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 10,
                                scrollOffsetUnit: "%",
                                delay: 200,
                                direction: "BOTTOM",
                                effectIn: !0
                            },
                            createdOn: 0x19b755e3df8
                        },
                        "e-100": {
                            id: "e-100",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "SLIDE_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "slideInBottom",
                                    autoStopEventId: "e-101"
                                }
                            },
                            mediaQueries: ["medium", "small", "tiny"],
                            target: {
                                id: "6942f831d922d40a223b67ba|4de2f195-016e-e439-2ee7-e127b01df9d5",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "6942f831d922d40a223b67ba|4de2f195-016e-e439-2ee7-e127b01df9d5",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 10,
                                scrollOffsetUnit: "%",
                                delay: 400,
                                direction: "BOTTOM",
                                effectIn: !0
                            },
                            createdOn: 0x19b755e9290
                        },
                        "e-102": {
                            id: "e-102",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "SLIDE_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "slideInBottom",
                                    autoStopEventId: "e-103"
                                }
                            },
                            mediaQueries: ["medium", "small", "tiny"],
                            target: {
                                id: "6942f831d922d40a223b67ba|d37e1c22-a101-d9e5-b3e3-ad5f9cad15e5",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "6942f831d922d40a223b67ba|d37e1c22-a101-d9e5-b3e3-ad5f9cad15e5",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 10,
                                scrollOffsetUnit: "%",
                                delay: 400,
                                direction: "BOTTOM",
                                effectIn: !0
                            },
                            createdOn: 0x19b755ee7f6
                        },
                        "e-104": {
                            id: "e-104",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "SLIDE_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "slideInBottom",
                                    autoStopEventId: "e-105"
                                }
                            },
                            mediaQueries: ["medium", "small", "tiny"],
                            target: {
                                id: "6942f831d922d40a223b67ba|c848c654-13aa-ac2c-4bf4-0a70181c539d",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "6942f831d922d40a223b67ba|c848c654-13aa-ac2c-4bf4-0a70181c539d",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 10,
                                scrollOffsetUnit: "%",
                                delay: 600,
                                direction: "BOTTOM",
                                effectIn: !0
                            },
                            createdOn: 0x19b755f1610
                        },
                        "e-106": {
                            id: "e-106",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "SLIDE_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "slideInBottom",
                                    autoStopEventId: "e-107"
                                }
                            },
                            mediaQueries: ["medium", "small", "tiny"],
                            target: {
                                id: "6942f831d922d40a223b67ba|49e375dd-9ff6-2a46-13a2-7434d541a951",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "6942f831d922d40a223b67ba|49e375dd-9ff6-2a46-13a2-7434d541a951",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 10,
                                scrollOffsetUnit: "%",
                                delay: 600,
                                direction: "BOTTOM",
                                effectIn: !0
                            },
                            createdOn: 0x19b755f61b0
                        },
                        "e-108": {
                            id: "e-108",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "SLIDE_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "slideInBottom",
                                    autoStopEventId: "e-109"
                                }
                            },
                            mediaQueries: ["medium", "small", "tiny"],
                            target: {
                                id: "6942f831d922d40a223b67ba|cae623fd-6324-d54b-1a87-33ac66091fb3",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "6942f831d922d40a223b67ba|cae623fd-6324-d54b-1a87-33ac66091fb3",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 10,
                                scrollOffsetUnit: "%",
                                delay: 800,
                                direction: "BOTTOM",
                                effectIn: !0
                            },
                            createdOn: 0x19b755f9887
                        },
                        "e-110": {
                            id: "e-110",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "SLIDE_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "slideInBottom",
                                    autoStopEventId: "e-111"
                                }
                            },
                            mediaQueries: ["medium", "small", "tiny"],
                            target: {
                                id: "6942f831d922d40a223b67ba|4a58f646-a1df-0fd1-fa34-21426690e9ae",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "6942f831d922d40a223b67ba|4a58f646-a1df-0fd1-fa34-21426690e9ae",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 10,
                                scrollOffsetUnit: "%",
                                delay: 800,
                                direction: "BOTTOM",
                                effectIn: !0
                            },
                            createdOn: 0x19b755fc527
                        },
                        "e-112": {
                            id: "e-112",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "SLIDE_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "slideInBottom",
                                    autoStopEventId: "e-113"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "6942f831d922d40a223b67ba|eb901e5c-db78-0a5a-ae59-e163506092cb",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "6942f831d922d40a223b67ba|eb901e5c-db78-0a5a-ae59-e163506092cb",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 10,
                                scrollOffsetUnit: "%",
                                delay: 300,
                                direction: "BOTTOM",
                                effectIn: !0
                            },
                            createdOn: 0x19b7562824f
                        },
                        "e-114": {
                            id: "e-114",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "SLIDE_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "slideInBottom",
                                    autoStopEventId: "e-115"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "6942f831d922d40a223b67ba|33899cda-d5e3-6b48-730d-0122a554b8cb",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "6942f831d922d40a223b67ba|33899cda-d5e3-6b48-730d-0122a554b8cb",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 10,
                                scrollOffsetUnit: "%",
                                delay: 300,
                                direction: "BOTTOM",
                                effectIn: !0
                            },
                            createdOn: 0x19b7562b838
                        },
                        "e-116": {
                            id: "e-116",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "SLIDE_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "slideInBottom",
                                    autoStopEventId: "e-117"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "6942f831d922d40a223b67ba|a4b564a5-787d-f0f1-775e-3a980c2d7f17",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "6942f831d922d40a223b67ba|a4b564a5-787d-f0f1-775e-3a980c2d7f17",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 10,
                                scrollOffsetUnit: "%",
                                delay: 500,
                                direction: "BOTTOM",
                                effectIn: !0
                            },
                            createdOn: 0x19b7562f0e0
                        },
                        "e-118": {
                            id: "e-118",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "SLIDE_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "slideInBottom",
                                    autoStopEventId: "e-119"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "6942f831d922d40a223b67ba|4e715f7f-53ea-73f0-b1ee-d691e7990712",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "6942f831d922d40a223b67ba|4e715f7f-53ea-73f0-b1ee-d691e7990712",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 10,
                                scrollOffsetUnit: "%",
                                delay: 500,
                                direction: "BOTTOM",
                                effectIn: !0
                            },
                            createdOn: 0x19b75631cc8
                        },
                        "e-120": {
                            id: "e-120",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "SLIDE_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "slideInBottom",
                                    autoStopEventId: "e-121"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "6942f831d922d40a223b67ba|10c02758-f2a8-e680-40f3-0770ab562c9b",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "6942f831d922d40a223b67ba|10c02758-f2a8-e680-40f3-0770ab562c9b",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 10,
                                scrollOffsetUnit: "%",
                                delay: 300,
                                direction: "BOTTOM",
                                effectIn: !0
                            },
                            createdOn: 0x19b7563d3a0
                        },
                        "e-122": {
                            id: "e-122",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "SLIDE_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "slideInBottom",
                                    autoStopEventId: "e-123"
                                }
                            },
                            mediaQueries: ["small", "tiny"],
                            target: {
                                selector: ".project-image-block",
                                originalId: "6942f831d922d40a223b67ba|d9e37358-84ab-38c8-539f-dce45aca60be",
                                appliesTo: "CLASS"
                            },
                            targets: [{
                                selector: ".project-image-block",
                                originalId: "6942f831d922d40a223b67ba|d9e37358-84ab-38c8-539f-dce45aca60be",
                                appliesTo: "CLASS"
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 10,
                                scrollOffsetUnit: "%",
                                delay: 300,
                                direction: "BOTTOM",
                                effectIn: !0
                            },
                            createdOn: 0x19b7567043b
                        },
                        "e-124": {
                            id: "e-124",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "SLIDE_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "slideInBottom",
                                    autoStopEventId: "e-125"
                                }
                            },
                            mediaQueries: ["small", "tiny"],
                            target: {
                                selector: ".project-conetent-block",
                                originalId: "6942f831d922d40a223b67ba|09084c78-96c3-7d7c-3329-f7fccbd11502",
                                appliesTo: "CLASS"
                            },
                            targets: [{
                                selector: ".project-conetent-block",
                                originalId: "6942f831d922d40a223b67ba|09084c78-96c3-7d7c-3329-f7fccbd11502",
                                appliesTo: "CLASS"
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 10,
                                scrollOffsetUnit: "%",
                                delay: 300,
                                direction: "BOTTOM",
                                effectIn: !0
                            },
                            createdOn: 0x19b75674db9
                        },
                        "e-126": {
                            id: "e-126",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "SLIDE_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "slideInBottom",
                                    autoStopEventId: "e-127"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "6942f831d922d40a223b67ba|56ffb75e-2af4-d3d3-4acf-d1a07ad6abdc",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "6942f831d922d40a223b67ba|56ffb75e-2af4-d3d3-4acf-d1a07ad6abdc",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 0,
                                scrollOffsetUnit: "%",
                                delay: 300,
                                direction: "BOTTOM",
                                effectIn: !0
                            },
                            createdOn: 0x19b75692a8c
                        },
                        "e-128": {
                            id: "e-128",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "SLIDE_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "slideInBottom",
                                    autoStopEventId: "e-129"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "6942f831d922d40a223b67ba|d48d4557-eba9-02f1-0e59-8a77e78d64b1",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "6942f831d922d40a223b67ba|d48d4557-eba9-02f1-0e59-8a77e78d64b1",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 0,
                                scrollOffsetUnit: "%",
                                delay: 500,
                                direction: "BOTTOM",
                                effectIn: !0
                            },
                            createdOn: 0x19b756a0da2
                        },
                        "e-130": {
                            id: "e-130",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "SLIDE_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "slideInBottom",
                                    autoStopEventId: "e-131"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "6942f831d922d40a223b67ba|365514f6-e0e4-1159-a0ad-63e90656e1e0",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "6942f831d922d40a223b67ba|365514f6-e0e4-1159-a0ad-63e90656e1e0",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 0,
                                scrollOffsetUnit: "%",
                                delay: 300,
                                direction: "BOTTOM",
                                effectIn: !0
                            },
                            createdOn: 0x19b7570a34d
                        },
                        "e-132": {
                            id: "e-132",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "SLIDE_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "slideInBottom",
                                    autoStopEventId: "e-133"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "6942f831d922d40a223b67ba|e219c821-5f96-b46b-3c37-d8527093549b",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "6942f831d922d40a223b67ba|e219c821-5f96-b46b-3c37-d8527093549b",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 10,
                                scrollOffsetUnit: "%",
                                delay: 200,
                                direction: "BOTTOM",
                                effectIn: !0
                            },
                            createdOn: 0x19b790522a8
                        },
                        "e-134": {
                            id: "e-134",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "SLIDE_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "slideInBottom",
                                    autoStopEventId: "e-135"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "6942f831d922d40a223b67ba|5f3603ba-1596-74cb-7e2e-f498c9f586ce",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "6942f831d922d40a223b67ba|5f3603ba-1596-74cb-7e2e-f498c9f586ce",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 10,
                                scrollOffsetUnit: "%",
                                delay: 400,
                                direction: "BOTTOM",
                                effectIn: !0
                            },
                            createdOn: 0x19b790551b4
                        }
                    },
                    actionLists: {
                        a: {
                            id: "a",
                            title: "Marque",
                            actionItemGroups: [{
                                actionItems: [{
                                    id: "a-n",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 3e4,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".marque-list",
                                            selectorGuids: ["98d14310-8826-46ae-8689-5382ddd0a56a"]
                                        },
                                        xValue: -100,
                                        xUnit: "%",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }]
                            }, {
                                actionItems: [{
                                    id: "a-n-2",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 0,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".marque-list",
                                            selectorGuids: ["98d14310-8826-46ae-8689-5382ddd0a56a"]
                                        },
                                        xValue: 0,
                                        xUnit: "%",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }]
                            }],
                            useFirstGroupAsInitialState: !1,
                            createdOn: 0x19b37a7c142
                        },
                        "a-2": {
                            id: "a-2",
                            title: "Counter",
                            actionItemGroups: [{
                                actionItems: [{
                                    id: "a-2-n",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".counter-wrap",
                                            selectorGuids: ["0c815cb9-bee2-3009-71c5-7dccc682dd2a"]
                                        },
                                        yValue: -88,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }]
                            }, {
                                actionItems: [{
                                    id: "a-2-n-2",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: [.784, .325, .222, .98],
                                        duration: 2200,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".counter-wrap",
                                            selectorGuids: ["0c815cb9-bee2-3009-71c5-7dccc682dd2a"]
                                        },
                                        yValue: 0,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-2-n-3",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: [.25, .25, .75, .75],
                                        duration: 2200,
                                        target: {},
                                        yValue: 0,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-2-n-4",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: [.556, .708, .023, .989],
                                        duration: 2200,
                                        target: {},
                                        yValue: 0,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-2-n-5",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: [.632, .176, .135, .779],
                                        duration: 2200,
                                        target: {},
                                        yValue: 0,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-2-n-6",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: [.645, .045, .355, 1],
                                        duration: 2200,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".counter-wrap.two",
                                            selectorGuids: ["0c815cb9-bee2-3009-71c5-7dccc682dd2a", "0c815cb9-bee2-3009-71c5-7dccc682dd2d"]
                                        },
                                        yValue: 0,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }]
                            }],
                            useFirstGroupAsInitialState: !0,
                            createdOn: 0x19764aaf054
                        },
                        "a-3": {
                            id: "a-3",
                            title: "W We Do Hover Out",
                            actionItemGroups: [{
                                actionItems: [{
                                    id: "a-3-n",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "6942f831d922d40a223b67ba|ed8f5d5b-cf1d-0463-818c-78d58c42003a"
                                        },
                                        globalSwatchId: "--_color---white",
                                        rValue: 255,
                                        bValue: 255,
                                        gValue: 255,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-3-n-10",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "6942f831d922d40a223b67ba|74d97af0-81a1-ba2c-018b-48496115afd4"
                                        },
                                        value: 0,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-3-n-9",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "6942f831d922d40a223b67ba|d80334ed-52f4-e180-a0d8-a3a772104b9e"
                                        },
                                        value: 0,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-3-n-8",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "6942f831d922d40a223b67ba|db847594-41ce-d552-e230-c25129271fba"
                                        },
                                        value: 0,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-3-n-7",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "6942f831d922d40a223b67ba|890f332f-d47b-5a18-c88d-7bf74781da38"
                                        },
                                        value: 0,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-3-n-6",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "6942f831d922d40a223b67ba|06700e7a-df30-74d8-d7a9-a98fecfce5ba"
                                        },
                                        value: 1,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-3-n-5",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "6942f831d922d40a223b67ba|227e941d-3951-2e22-258e-18b39ea2c11a"
                                        },
                                        globalSwatchId: "--_color---666666",
                                        rValue: 102,
                                        bValue: 102,
                                        gValue: 102,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-3-n-4",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "6942f831d922d40a223b67ba|7a1f670d-aa48-75ed-ff59-56c211069c43"
                                        },
                                        globalSwatchId: "--_color---666666",
                                        rValue: 102,
                                        bValue: 102,
                                        gValue: 102,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-3-n-3",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "6942f831d922d40a223b67ba|508f4d7f-0a9f-0b45-dd57-3e0250351620"
                                        },
                                        globalSwatchId: "--_color---666666",
                                        rValue: 102,
                                        bValue: 102,
                                        gValue: 102,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-3-n-2",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "6942f831d922d40a223b67ba|08250765-14ed-fac9-a55e-dd26a79e8cf6"
                                        },
                                        globalSwatchId: "--_color---666666",
                                        rValue: 102,
                                        bValue: 102,
                                        gValue: 102,
                                        aValue: 1
                                    }
                                }]
                            }, {
                                actionItems: [{
                                    id: "a-3-n-12",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "6942f831d922d40a223b67ba|ed8f5d5b-cf1d-0463-818c-78d58c42003a"
                                        },
                                        globalSwatchId: "--_color---white",
                                        rValue: 255,
                                        bValue: 255,
                                        gValue: 255,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-3-n-22",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "6942f831d922d40a223b67ba|08250765-14ed-fac9-a55e-dd26a79e8cf6"
                                        },
                                        globalSwatchId: "--_color---666666",
                                        rValue: 102,
                                        bValue: 102,
                                        gValue: 102,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-3-n-21",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "6942f831d922d40a223b67ba|508f4d7f-0a9f-0b45-dd57-3e0250351620"
                                        },
                                        globalSwatchId: "--_color---666666",
                                        rValue: 102,
                                        bValue: 102,
                                        gValue: 102,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-3-n-20",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "6942f831d922d40a223b67ba|7a1f670d-aa48-75ed-ff59-56c211069c43"
                                        },
                                        globalSwatchId: "--_color---666666",
                                        rValue: 102,
                                        bValue: 102,
                                        gValue: 102,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-3-n-19",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "6942f831d922d40a223b67ba|227e941d-3951-2e22-258e-18b39ea2c11a"
                                        },
                                        globalSwatchId: "--_color---666666",
                                        rValue: 102,
                                        bValue: 102,
                                        gValue: 102,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-3-n-18",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "6942f831d922d40a223b67ba|06700e7a-df30-74d8-d7a9-a98fecfce5ba"
                                        },
                                        value: 1,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-3-n-17",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "6942f831d922d40a223b67ba|890f332f-d47b-5a18-c88d-7bf74781da38"
                                        },
                                        value: 0,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-3-n-16",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "6942f831d922d40a223b67ba|db847594-41ce-d552-e230-c25129271fba"
                                        },
                                        value: 0,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-3-n-15",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "6942f831d922d40a223b67ba|d80334ed-52f4-e180-a0d8-a3a772104b9e"
                                        },
                                        value: 0,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-3-n-14",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "6942f831d922d40a223b67ba|74d97af0-81a1-ba2c-018b-48496115afd4"
                                        },
                                        value: 0,
                                        unit: ""
                                    }
                                }]
                            }],
                            useFirstGroupAsInitialState: !0,
                            createdOn: 0x19b42a43176
                        },
                        "a-5": {
                            id: "a-5",
                            title: "W We Do 1 Hover In",
                            actionItemGroups: [{
                                actionItems: [{
                                    id: "a-5-n-12",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "6942f831d922d40a223b67ba|ed8f5d5b-cf1d-0463-818c-78d58c42003a"
                                        },
                                        globalSwatchId: "--_color---white",
                                        rValue: 255,
                                        bValue: 255,
                                        gValue: 255,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-5-n-13",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            id: "6942f831d922d40a223b67ba|08250765-14ed-fac9-a55e-dd26a79e8cf6"
                                        },
                                        globalSwatchId: "--_color---666666",
                                        rValue: 102,
                                        bValue: 102,
                                        gValue: 102,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-5-n-14",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            id: "6942f831d922d40a223b67ba|508f4d7f-0a9f-0b45-dd57-3e0250351620"
                                        },
                                        globalSwatchId: "--_color---666666",
                                        rValue: 102,
                                        bValue: 102,
                                        gValue: 102,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-5-n-15",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            id: "6942f831d922d40a223b67ba|508f4d7f-0a9f-0b45-dd57-3e0250351620"
                                        },
                                        globalSwatchId: "--_color---666666",
                                        rValue: 102,
                                        bValue: 102,
                                        gValue: 102,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-5-n-16",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            id: "6942f831d922d40a223b67ba|227e941d-3951-2e22-258e-18b39ea2c11a"
                                        },
                                        globalSwatchId: "--_color---666666",
                                        rValue: 102,
                                        bValue: 102,
                                        gValue: 102,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-5-n-17",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            id: "6942f831d922d40a223b67ba|06700e7a-df30-74d8-d7a9-a98fecfce5ba"
                                        },
                                        value: 1,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-5-n-18",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            id: "6942f831d922d40a223b67ba|890f332f-d47b-5a18-c88d-7bf74781da38"
                                        },
                                        value: 0,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-5-n-19",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            id: "6942f831d922d40a223b67ba|db847594-41ce-d552-e230-c25129271fba"
                                        },
                                        value: 0,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-5-n-20",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            id: "6942f831d922d40a223b67ba|d80334ed-52f4-e180-a0d8-a3a772104b9e"
                                        },
                                        value: 0,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-5-n-21",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            id: "6942f831d922d40a223b67ba|74d97af0-81a1-ba2c-018b-48496115afd4"
                                        },
                                        value: 0,
                                        unit: ""
                                    }
                                }]
                            }],
                            useFirstGroupAsInitialState: !1,
                            createdOn: 0x19b42a43176
                        },
                        "a-7": {
                            id: "a-7",
                            title: "W We Do 2 Hover In",
                            actionItemGroups: [{
                                actionItems: [{
                                    id: "a-7-n-12",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            id: "6942f831d922d40a223b67ba|ed8f5d5b-cf1d-0463-818c-78d58c42003a"
                                        },
                                        globalSwatchId: "--_color---666666",
                                        rValue: 102,
                                        bValue: 102,
                                        gValue: 102,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-7-n-13",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "6942f831d922d40a223b67ba|08250765-14ed-fac9-a55e-dd26a79e8cf6"
                                        },
                                        globalSwatchId: "--_color---white",
                                        rValue: 255,
                                        bValue: 255,
                                        gValue: 255,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-7-n-14",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            id: "6942f831d922d40a223b67ba|508f4d7f-0a9f-0b45-dd57-3e0250351620"
                                        },
                                        globalSwatchId: "--_color---666666",
                                        rValue: 102,
                                        bValue: 102,
                                        gValue: 102,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-7-n-15",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            id: "6942f831d922d40a223b67ba|7a1f670d-aa48-75ed-ff59-56c211069c43"
                                        },
                                        globalSwatchId: "--_color---666666",
                                        rValue: 102,
                                        bValue: 102,
                                        gValue: 102,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-7-n-16",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            id: "6942f831d922d40a223b67ba|227e941d-3951-2e22-258e-18b39ea2c11a"
                                        },
                                        globalSwatchId: "--_color---666666",
                                        rValue: 102,
                                        bValue: 102,
                                        gValue: 102,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-7-n-17",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            id: "6942f831d922d40a223b67ba|06700e7a-df30-74d8-d7a9-a98fecfce5ba"
                                        },
                                        value: 0,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-7-n-18",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            id: "6942f831d922d40a223b67ba|890f332f-d47b-5a18-c88d-7bf74781da38"
                                        },
                                        value: 1,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-7-n-19",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            id: "6942f831d922d40a223b67ba|db847594-41ce-d552-e230-c25129271fba"
                                        },
                                        value: 0,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-7-n-20",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            id: "6942f831d922d40a223b67ba|d80334ed-52f4-e180-a0d8-a3a772104b9e"
                                        },
                                        value: 0,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-7-n-21",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            id: "6942f831d922d40a223b67ba|74d97af0-81a1-ba2c-018b-48496115afd4"
                                        },
                                        value: 0,
                                        unit: ""
                                    }
                                }]
                            }],
                            useFirstGroupAsInitialState: !1,
                            createdOn: 0x19b42a43176
                        },
                        "a-8": {
                            id: "a-8",
                            title: "W We Do 3 Hover In",
                            actionItemGroups: [{
                                actionItems: [{
                                    id: "a-8-n",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            id: "6942f831d922d40a223b67ba|ed8f5d5b-cf1d-0463-818c-78d58c42003a"
                                        },
                                        globalSwatchId: "--_color---666666",
                                        rValue: 102,
                                        bValue: 102,
                                        gValue: 102,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-8-n-2",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            id: "6942f831d922d40a223b67ba|08250765-14ed-fac9-a55e-dd26a79e8cf6"
                                        },
                                        globalSwatchId: "--_color---666666",
                                        rValue: 102,
                                        bValue: 102,
                                        gValue: 102,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-8-n-3",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "6942f831d922d40a223b67ba|508f4d7f-0a9f-0b45-dd57-3e0250351620"
                                        },
                                        globalSwatchId: "--_color---white",
                                        rValue: 255,
                                        bValue: 255,
                                        gValue: 255,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-8-n-4",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            id: "6942f831d922d40a223b67ba|7a1f670d-aa48-75ed-ff59-56c211069c43"
                                        },
                                        globalSwatchId: "--_color---666666",
                                        rValue: 102,
                                        bValue: 102,
                                        gValue: 102,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-8-n-5",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            id: "6942f831d922d40a223b67ba|227e941d-3951-2e22-258e-18b39ea2c11a"
                                        },
                                        globalSwatchId: "--_color---666666",
                                        rValue: 102,
                                        bValue: 102,
                                        gValue: 102,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-8-n-6",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            id: "6942f831d922d40a223b67ba|06700e7a-df30-74d8-d7a9-a98fecfce5ba"
                                        },
                                        value: 0,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-8-n-7",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            id: "6942f831d922d40a223b67ba|890f332f-d47b-5a18-c88d-7bf74781da38"
                                        },
                                        value: 0,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-8-n-8",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            id: "6942f831d922d40a223b67ba|db847594-41ce-d552-e230-c25129271fba"
                                        },
                                        value: 1,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-8-n-9",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            id: "6942f831d922d40a223b67ba|d80334ed-52f4-e180-a0d8-a3a772104b9e"
                                        },
                                        value: 0,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-8-n-10",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            id: "6942f831d922d40a223b67ba|74d97af0-81a1-ba2c-018b-48496115afd4"
                                        },
                                        value: 0,
                                        unit: ""
                                    }
                                }]
                            }],
                            useFirstGroupAsInitialState: !1,
                            createdOn: 0x19b42a43176
                        },
                        "a-9": {
                            id: "a-9",
                            title: "W We Do 4 Hover In",
                            actionItemGroups: [{
                                actionItems: [{
                                    id: "a-9-n",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            id: "6942f831d922d40a223b67ba|ed8f5d5b-cf1d-0463-818c-78d58c42003a"
                                        },
                                        globalSwatchId: "--_color---666666",
                                        rValue: 102,
                                        bValue: 102,
                                        gValue: 102,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-9-n-2",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            id: "6942f831d922d40a223b67ba|08250765-14ed-fac9-a55e-dd26a79e8cf6"
                                        },
                                        globalSwatchId: "--_color---666666",
                                        rValue: 102,
                                        bValue: 102,
                                        gValue: 102,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-9-n-3",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            id: "6942f831d922d40a223b67ba|508f4d7f-0a9f-0b45-dd57-3e0250351620"
                                        },
                                        globalSwatchId: "--_color---666666",
                                        rValue: 102,
                                        bValue: 102,
                                        gValue: 102,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-9-n-4",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "6942f831d922d40a223b67ba|7a1f670d-aa48-75ed-ff59-56c211069c43"
                                        },
                                        globalSwatchId: "--_color---white",
                                        rValue: 255,
                                        bValue: 255,
                                        gValue: 255,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-9-n-5",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            id: "6942f831d922d40a223b67ba|227e941d-3951-2e22-258e-18b39ea2c11a"
                                        },
                                        globalSwatchId: "--_color---666666",
                                        rValue: 102,
                                        bValue: 102,
                                        gValue: 102,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-9-n-6",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            id: "6942f831d922d40a223b67ba|06700e7a-df30-74d8-d7a9-a98fecfce5ba"
                                        },
                                        value: 0,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-9-n-7",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            id: "6942f831d922d40a223b67ba|890f332f-d47b-5a18-c88d-7bf74781da38"
                                        },
                                        value: 0,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-9-n-8",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            id: "6942f831d922d40a223b67ba|db847594-41ce-d552-e230-c25129271fba"
                                        },
                                        value: 0,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-9-n-9",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            id: "6942f831d922d40a223b67ba|d80334ed-52f4-e180-a0d8-a3a772104b9e"
                                        },
                                        value: 1,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-9-n-10",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            id: "6942f831d922d40a223b67ba|74d97af0-81a1-ba2c-018b-48496115afd4"
                                        },
                                        value: 0,
                                        unit: ""
                                    }
                                }]
                            }],
                            useFirstGroupAsInitialState: !1,
                            createdOn: 0x19b42a43176
                        },
                        "a-10": {
                            id: "a-10",
                            title: "W We Do 5 Hover in",
                            actionItemGroups: [{
                                actionItems: [{
                                    id: "a-10-n",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            id: "6942f831d922d40a223b67ba|ed8f5d5b-cf1d-0463-818c-78d58c42003a"
                                        },
                                        globalSwatchId: "--_color---666666",
                                        rValue: 102,
                                        bValue: 102,
                                        gValue: 102,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-10-n-2",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            id: "6942f831d922d40a223b67ba|08250765-14ed-fac9-a55e-dd26a79e8cf6"
                                        },
                                        globalSwatchId: "--_color---666666",
                                        rValue: 102,
                                        bValue: 102,
                                        gValue: 102,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-10-n-3",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            id: "6942f831d922d40a223b67ba|508f4d7f-0a9f-0b45-dd57-3e0250351620"
                                        },
                                        globalSwatchId: "--_color---666666",
                                        rValue: 102,
                                        bValue: 102,
                                        gValue: 102,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-10-n-4",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            id: "6942f831d922d40a223b67ba|7a1f670d-aa48-75ed-ff59-56c211069c43"
                                        },
                                        globalSwatchId: "--_color---666666",
                                        rValue: 102,
                                        bValue: 102,
                                        gValue: 102,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-10-n-5",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "6942f831d922d40a223b67ba|227e941d-3951-2e22-258e-18b39ea2c11a"
                                        },
                                        globalSwatchId: "--_color---white",
                                        rValue: 255,
                                        bValue: 255,
                                        gValue: 255,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-10-n-6",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            id: "6942f831d922d40a223b67ba|06700e7a-df30-74d8-d7a9-a98fecfce5ba"
                                        },
                                        value: 0,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-10-n-7",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            id: "6942f831d922d40a223b67ba|890f332f-d47b-5a18-c88d-7bf74781da38"
                                        },
                                        value: 0,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-10-n-8",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            id: "6942f831d922d40a223b67ba|db847594-41ce-d552-e230-c25129271fba"
                                        },
                                        value: 0,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-10-n-9",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            id: "6942f831d922d40a223b67ba|d80334ed-52f4-e180-a0d8-a3a772104b9e"
                                        },
                                        value: 0,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-10-n-10",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            id: "6942f831d922d40a223b67ba|74d97af0-81a1-ba2c-018b-48496115afd4"
                                        },
                                        value: 1,
                                        unit: ""
                                    }
                                }]
                            }],
                            useFirstGroupAsInitialState: !1,
                            createdOn: 0x19b42a43176
                        },
                        "a-11": {
                            id: "a-11",
                            title: "Faq Open",
                            actionItemGroups: [{
                                actionItems: [{
                                    id: "a-11-n",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".faq-arrow.one",
                                            selectorGuids: ["b5c87c2d-c5cc-a5da-e941-28cb75261b76", "fb1b9d85-64af-5283-bccd-adeca53518ba"]
                                        },
                                        value: 0,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-11-n-3",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".faq-content-main",
                                            selectorGuids: ["ff6909b6-372b-a73e-2b51-c64a4fa0fda4"]
                                        },
                                        heightValue: 0,
                                        widthUnit: "PX",
                                        heightUnit: "px",
                                        locked: !1
                                    }
                                }]
                            }, {
                                actionItems: [{
                                    id: "a-11-n-4",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".faq-arrow.one",
                                            selectorGuids: ["b5c87c2d-c5cc-a5da-e941-28cb75261b76", "fb1b9d85-64af-5283-bccd-adeca53518ba"]
                                        },
                                        value: 1,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-11-n-5",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".faq-content-main",
                                            selectorGuids: ["ff6909b6-372b-a73e-2b51-c64a4fa0fda4"]
                                        },
                                        widthUnit: "PX",
                                        heightUnit: "AUTO",
                                        locked: !1
                                    }
                                }]
                            }],
                            useFirstGroupAsInitialState: !0,
                            createdOn: 0x19b479dba51
                        },
                        "a-12": {
                            id: "a-12",
                            title: "Faq Close",
                            actionItemGroups: [{
                                actionItems: [{
                                    id: "a-12-n",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".faq-arrow.one",
                                            selectorGuids: ["b5c87c2d-c5cc-a5da-e941-28cb75261b76", "fb1b9d85-64af-5283-bccd-adeca53518ba"]
                                        },
                                        value: 0,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-12-n-2",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".faq-content-main",
                                            selectorGuids: ["ff6909b6-372b-a73e-2b51-c64a4fa0fda4"]
                                        },
                                        heightValue: 0,
                                        widthUnit: "PX",
                                        heightUnit: "px",
                                        locked: !1
                                    }
                                }]
                            }],
                            useFirstGroupAsInitialState: !1,
                            createdOn: 0x19b479dba51
                        },
                        "a-13": {
                            id: "a-13",
                            title: "Button Hover in",
                            actionItemGroups: [{
                                actionItems: [{
                                    id: "a-13-n",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".btn-pill-text",
                                            selectorGuids: ["e30a939d-f992-cdc8-fa8c-9ce125fb0f87"]
                                        },
                                        yValue: 0,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-13-n-2",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".btn-arrow",
                                            selectorGuids: ["87b070c5-59e4-397b-f7d3-44868a2d1472"]
                                        },
                                        xValue: -100,
                                        xUnit: "%",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }]
                            }, {
                                actionItems: [{
                                    id: "a-13-n-3",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".btn-pill-text",
                                            selectorGuids: ["e30a939d-f992-cdc8-fa8c-9ce125fb0f87"]
                                        },
                                        yValue: -102,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-13-n-4",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".btn-arrow",
                                            selectorGuids: ["87b070c5-59e4-397b-f7d3-44868a2d1472"]
                                        },
                                        xValue: 0,
                                        xUnit: "%",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }]
                            }],
                            useFirstGroupAsInitialState: !0,
                            createdOn: 0x19b7043181c
                        },
                        "a-14": {
                            id: "a-14",
                            title: "Button Hover Out",
                            actionItemGroups: [{
                                actionItems: [{
                                    id: "a-14-n-3",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".btn-pill-text",
                                            selectorGuids: ["e30a939d-f992-cdc8-fa8c-9ce125fb0f87"]
                                        },
                                        yValue: 0,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-14-n-4",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".btn-arrow",
                                            selectorGuids: ["87b070c5-59e4-397b-f7d3-44868a2d1472"]
                                        },
                                        xValue: -100,
                                        xUnit: "%",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }]
                            }],
                            useFirstGroupAsInitialState: !1,
                            createdOn: 0x19b7043181c
                        },
                        "a-18": {
                            id: "a-18",
                            title: "Project Card Scroll On",
                            continuousParameterGroups: [{
                                id: "a-18-p",
                                type: "SCROLL_PROGRESS",
                                parameterLabel: "Scroll",
                                continuousActionGroups: [{
                                    keyframe: 25,
                                    actionItems: [{
                                        id: "a-18-n",
                                        actionTypeId: "TRANSFORM_SCALE",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 500,
                                            target: {
                                                useEventTarget: "CHILDREN",
                                                selector: ".project-image-block",
                                                selectorGuids: ["0daa9821-8abc-c608-501c-5937100d83a0"]
                                            },
                                            xValue: .5,
                                            yValue: .5,
                                            locked: !0
                                        }
                                    }]
                                }, {
                                    keyframe: 45,
                                    actionItems: [{
                                        id: "a-18-n-2",
                                        actionTypeId: "TRANSFORM_MOVE",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 500,
                                            target: {
                                                useEventTarget: "CHILDREN",
                                                selector: ".project-card-info-block",
                                                selectorGuids: ["73e4300a-d345-2527-b740-3093c11357a7"]
                                            },
                                            xValue: -445,
                                            xUnit: "px",
                                            yUnit: "PX",
                                            zUnit: "PX"
                                        }
                                    }, {
                                        id: "a-18-n-3",
                                        actionTypeId: "STYLE_OPACITY",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 500,
                                            target: {
                                                useEventTarget: "CHILDREN",
                                                selector: ".project-card-info-block",
                                                selectorGuids: ["73e4300a-d345-2527-b740-3093c11357a7"]
                                            },
                                            value: 0,
                                            unit: ""
                                        }
                                    }, {
                                        id: "a-18-n-4",
                                        actionTypeId: "TRANSFORM_SCALE",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 500,
                                            target: {
                                                useEventTarget: "CHILDREN",
                                                selector: ".project-image-block",
                                                selectorGuids: ["0daa9821-8abc-c608-501c-5937100d83a0"]
                                            },
                                            xValue: 1,
                                            yValue: 1,
                                            locked: !0
                                        }
                                    }]
                                }, {
                                    keyframe: 50,
                                    actionItems: [{
                                        id: "a-18-n-5",
                                        actionTypeId: "TRANSFORM_MOVE",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 500,
                                            target: {
                                                useEventTarget: "CHILDREN",
                                                selector: ".project-card-info-block",
                                                selectorGuids: ["73e4300a-d345-2527-b740-3093c11357a7"]
                                            },
                                            xValue: 0,
                                            xUnit: "px",
                                            yUnit: "PX",
                                            zUnit: "PX"
                                        }
                                    }, {
                                        id: "a-18-n-6",
                                        actionTypeId: "STYLE_OPACITY",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 500,
                                            target: {
                                                useEventTarget: "CHILDREN",
                                                selector: ".project-card-info-block",
                                                selectorGuids: ["73e4300a-d345-2527-b740-3093c11357a7"]
                                            },
                                            value: 1,
                                            unit: ""
                                        }
                                    }]
                                }]
                            }],
                            createdOn: 0x19b706d760b
                        },
                        "a-19": {
                            id: "a-19",
                            title: "Project Card Scroll On",
                            continuousParameterGroups: [{
                                id: "a-19-p",
                                type: "SCROLL_PROGRESS",
                                parameterLabel: "Scroll",
                                continuousActionGroups: [{
                                    keyframe: 25,
                                    actionItems: [{
                                        id: "a-19-n",
                                        actionTypeId: "TRANSFORM_SCALE",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 500,
                                            target: {
                                                useEventTarget: "CHILDREN",
                                                selector: ".project-image-block",
                                                selectorGuids: ["0daa9821-8abc-c608-501c-5937100d83a0"]
                                            },
                                            xValue: .5,
                                            yValue: .5,
                                            locked: !0
                                        }
                                    }]
                                }, {
                                    keyframe: 45,
                                    actionItems: [{
                                        id: "a-19-n-2",
                                        actionTypeId: "TRANSFORM_MOVE",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 500,
                                            target: {
                                                useEventTarget: "CHILDREN",
                                                selector: ".project-conetent-block.right",
                                                selectorGuids: ["573c9856-59bf-7831-1dbb-9782cbc5dbb7", "be962633-1df5-64a5-e194-0857f0fab1b2"]
                                            },
                                            xValue: 445,
                                            xUnit: "px",
                                            yUnit: "PX",
                                            zUnit: "PX"
                                        }
                                    }, {
                                        id: "a-19-n-3",
                                        actionTypeId: "STYLE_OPACITY",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 500,
                                            target: {
                                                useEventTarget: "CHILDREN",
                                                selector: ".project-conetent-block.right",
                                                selectorGuids: ["573c9856-59bf-7831-1dbb-9782cbc5dbb7", "be962633-1df5-64a5-e194-0857f0fab1b2"]
                                            },
                                            value: 0,
                                            unit: ""
                                        }
                                    }, {
                                        id: "a-19-n-4",
                                        actionTypeId: "TRANSFORM_SCALE",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 500,
                                            target: {
                                                useEventTarget: "CHILDREN",
                                                selector: ".project-image-block",
                                                selectorGuids: ["0daa9821-8abc-c608-501c-5937100d83a0"]
                                            },
                                            xValue: 1,
                                            yValue: 1,
                                            locked: !0
                                        }
                                    }]
                                }, {
                                    keyframe: 50,
                                    actionItems: [{
                                        id: "a-19-n-5",
                                        actionTypeId: "TRANSFORM_MOVE",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 500,
                                            target: {
                                                useEventTarget: "CHILDREN",
                                                selector: ".project-conetent-block.right",
                                                selectorGuids: ["573c9856-59bf-7831-1dbb-9782cbc5dbb7", "be962633-1df5-64a5-e194-0857f0fab1b2"]
                                            },
                                            xValue: 0,
                                            xUnit: "px",
                                            yUnit: "PX",
                                            zUnit: "PX"
                                        }
                                    }, {
                                        id: "a-19-n-6",
                                        actionTypeId: "STYLE_OPACITY",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 500,
                                            target: {
                                                useEventTarget: "CHILDREN",
                                                selector: ".project-conetent-block.right",
                                                selectorGuids: ["573c9856-59bf-7831-1dbb-9782cbc5dbb7", "be962633-1df5-64a5-e194-0857f0fab1b2"]
                                            },
                                            value: 1,
                                            unit: ""
                                        }
                                    }]
                                }]
                            }],
                            createdOn: 0x19b7075b646
                        },
                        "a-20": {
                            id: "a-20",
                            title: "Portfolio Scroll On",
                            continuousParameterGroups: [{
                                id: "a-20-p",
                                type: "SCROLL_PROGRESS",
                                parameterLabel: "Scroll",
                                continuousActionGroups: [{
                                    keyframe: 30,
                                    actionItems: [{
                                        id: "a-20-n",
                                        actionTypeId: "STYLE_FILTER",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 500,
                                            target: {
                                                useEventTarget: "CHILDREN",
                                                selector: ".project-header",
                                                selectorGuids: ["7bff90af-f225-29f4-5a1d-57baaf21bed1"]
                                            },
                                            filters: [{
                                                type: "blur",
                                                filterId: "d1d5",
                                                value: 0,
                                                unit: "px"
                                            }]
                                        }
                                    }]
                                }, {
                                    keyframe: 38,
                                    actionItems: [{
                                        id: "a-20-n-2",
                                        actionTypeId: "STYLE_FILTER",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 500,
                                            target: {
                                                useEventTarget: "CHILDREN",
                                                selector: ".project-header",
                                                selectorGuids: ["7bff90af-f225-29f4-5a1d-57baaf21bed1"]
                                            },
                                            filters: [{
                                                type: "blur",
                                                filterId: "d1d5",
                                                value: 3,
                                                unit: "px"
                                            }]
                                        }
                                    }]
                                }, {
                                    keyframe: 41,
                                    actionItems: [{
                                        id: "a-20-n-3",
                                        actionTypeId: "STYLE_OPACITY",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 500,
                                            target: {
                                                useEventTarget: "CHILDREN",
                                                selector: ".project-header",
                                                selectorGuids: ["7bff90af-f225-29f4-5a1d-57baaf21bed1"]
                                            },
                                            value: 1,
                                            unit: ""
                                        }
                                    }]
                                }, {
                                    keyframe: 85,
                                    actionItems: [{
                                        id: "a-20-n-4",
                                        actionTypeId: "STYLE_OPACITY",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 500,
                                            target: {
                                                useEventTarget: "CHILDREN",
                                                selector: ".project-header",
                                                selectorGuids: ["7bff90af-f225-29f4-5a1d-57baaf21bed1"]
                                            },
                                            value: 0,
                                            unit: ""
                                        }
                                    }]
                                }]
                            }],
                            createdOn: 0x19b7078f6d7
                        },
                        "a-21": {
                            id: "a-21",
                            title: "Pricing In View",
                            actionItemGroups: [{
                                actionItems: [{
                                    id: "a-21-n",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "6942f831d922d40a223b67ba|e4970a34-9e47-d06e-4a34-9419aeef14c4"
                                        },
                                        yValue: 50,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-21-n-6",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "6942f831d922d40a223b67ba|3a6d9df9-dec8-2100-0659-83a9b6f50613"
                                        },
                                        value: 0,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-21-n-5",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "6942f831d922d40a223b67ba|3a6d9df9-dec8-2100-0659-83a9b6f50613"
                                        },
                                        yValue: 50,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-21-n-4",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "6942f831d922d40a223b67ba|dc75d5b7-cc92-b308-5344-43c52f78a47e"
                                        },
                                        value: 0,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-21-n-3",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "6942f831d922d40a223b67ba|dc75d5b7-cc92-b308-5344-43c52f78a47e"
                                        },
                                        yValue: 50,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-21-n-2",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "6942f831d922d40a223b67ba|e4970a34-9e47-d06e-4a34-9419aeef14c4"
                                        },
                                        value: 0,
                                        unit: ""
                                    }
                                }]
                            }, {
                                actionItems: [{
                                    id: "a-21-n-9",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: [.165, .84, .44, 1],
                                        duration: 1500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "6942f831d922d40a223b67ba|3a6d9df9-dec8-2100-0659-83a9b6f50613"
                                        },
                                        yValue: 0,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-21-n-8",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: [.165, .84, .44, 1],
                                        duration: 1500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "6942f831d922d40a223b67ba|3a6d9df9-dec8-2100-0659-83a9b6f50613"
                                        },
                                        value: 1,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-21-n-11",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 300,
                                        easing: [.165, .84, .44, 1],
                                        duration: 1500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "6942f831d922d40a223b67ba|dc75d5b7-cc92-b308-5344-43c52f78a47e"
                                        },
                                        yValue: 0,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-21-n-10",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 300,
                                        easing: [.165, .84, .44, 1],
                                        duration: 1500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "6942f831d922d40a223b67ba|dc75d5b7-cc92-b308-5344-43c52f78a47e"
                                        },
                                        value: 1,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-21-n-7",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 600,
                                        easing: [.165, .84, .44, 1],
                                        duration: 1500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "6942f831d922d40a223b67ba|e4970a34-9e47-d06e-4a34-9419aeef14c4"
                                        },
                                        yValue: 0,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-21-n-12",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 600,
                                        easing: [.165, .84, .44, 1],
                                        duration: 1500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "6942f831d922d40a223b67ba|e4970a34-9e47-d06e-4a34-9419aeef14c4"
                                        },
                                        value: 1,
                                        unit: ""
                                    }
                                }]
                            }],
                            useFirstGroupAsInitialState: !0,
                            createdOn: 0x19b7081694e
                        },
                        "a-22": {
                            id: "a-22",
                            title: "Footer Title In View",
                            actionItemGroups: [{
                                actionItems: [{
                                    id: "a-22-n",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".overlay",
                                            selectorGuids: ["b068adba-562a-39be-7c08-d7ce13114c83"]
                                        },
                                        widthUnit: "AUTO",
                                        heightUnit: "PX",
                                        locked: !1
                                    }
                                }, {
                                    id: "a-22-n-3",
                                    actionTypeId: "GENERAL_DISPLAY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 0,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".overlay",
                                            selectorGuids: ["b068adba-562a-39be-7c08-d7ce13114c83"]
                                        },
                                        value: "flex"
                                    }
                                }]
                            }, {
                                actionItems: [{
                                    id: "a-22-n-2",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 3e3,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".overlay",
                                            selectorGuids: ["b068adba-562a-39be-7c08-d7ce13114c83"]
                                        },
                                        widthValue: 0,
                                        widthUnit: "px",
                                        heightUnit: "PX",
                                        locked: !1
                                    }
                                }]
                            }],
                            useFirstGroupAsInitialState: !0,
                            createdOn: 0x19b70a4b4e5
                        },
                        "a-23": {
                            id: "a-23",
                            title: "Hero Image In View",
                            actionItemGroups: [{
                                actionItems: [{
                                    id: "a-23-n",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-image.one",
                                            selectorGuids: ["4e4b42af-b6d0-c9ae-81aa-0e8f788dd72a", "a1e73f25-10b9-46b1-ea56-9dd306c4d459"]
                                        },
                                        zValue: -10,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }, {
                                    id: "a-23-n-17",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-image.four",
                                            selectorGuids: ["4e4b42af-b6d0-c9ae-81aa-0e8f788dd72a", "b9e7bca0-fca8-082b-a603-15370a854d9e"]
                                        },
                                        zValue: 3.847,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }, {
                                    id: "a-23-n-16",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-image.four",
                                            selectorGuids: ["4e4b42af-b6d0-c9ae-81aa-0e8f788dd72a", "b9e7bca0-fca8-082b-a603-15370a854d9e"]
                                        },
                                        zValue: 2.291,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }, {
                                    id: "a-23-n-15",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-image.four",
                                            selectorGuids: ["4e4b42af-b6d0-c9ae-81aa-0e8f788dd72a", "b9e7bca0-fca8-082b-a603-15370a854d9e"]
                                        },
                                        xValue: 5,
                                        xUnit: "%",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-23-n-14",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-image.seven",
                                            selectorGuids: ["4e4b42af-b6d0-c9ae-81aa-0e8f788dd72a", "1d6fbeb0-b594-5b74-98a3-1616c374362b"]
                                        },
                                        zValue: 9.592,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }, {
                                    id: "a-23-n-13",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-image.seven",
                                            selectorGuids: ["4e4b42af-b6d0-c9ae-81aa-0e8f788dd72a", "1d6fbeb0-b594-5b74-98a3-1616c374362b"]
                                        },
                                        xValue: -215,
                                        xUnit: "%",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-23-n-12",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-image.six",
                                            selectorGuids: ["4e4b42af-b6d0-c9ae-81aa-0e8f788dd72a", "97715fb0-22f0-641c-a330-ee827a6a41de"]
                                        },
                                        zValue: 6.465,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }, {
                                    id: "a-23-n-11",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-image.six",
                                            selectorGuids: ["4e4b42af-b6d0-c9ae-81aa-0e8f788dd72a", "97715fb0-22f0-641c-a330-ee827a6a41de"]
                                        },
                                        xValue: -140,
                                        xUnit: "%",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-23-n-10",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-image.five",
                                            selectorGuids: ["4e4b42af-b6d0-c9ae-81aa-0e8f788dd72a", "d6e725cf-05f0-e389-ab82-fd1d06b1810b"]
                                        },
                                        zValue: 4.465,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }, {
                                    id: "a-23-n-9",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-image.five",
                                            selectorGuids: ["4e4b42af-b6d0-c9ae-81aa-0e8f788dd72a", "d6e725cf-05f0-e389-ab82-fd1d06b1810b"]
                                        },
                                        xValue: -74,
                                        xUnit: "%",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-23-n-6",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-image.three",
                                            selectorGuids: ["4e4b42af-b6d0-c9ae-81aa-0e8f788dd72a", "7b48c3fb-f9c4-0b53-9a0f-bd127a1699ca"]
                                        },
                                        zValue: -2.629,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }, {
                                    id: "a-23-n-5",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-image.three",
                                            selectorGuids: ["4e4b42af-b6d0-c9ae-81aa-0e8f788dd72a", "7b48c3fb-f9c4-0b53-9a0f-bd127a1699ca"]
                                        },
                                        xValue: 50,
                                        xUnit: "%",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-23-n-4",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-image.two",
                                            selectorGuids: ["4e4b42af-b6d0-c9ae-81aa-0e8f788dd72a", "1bab5443-8017-947a-8374-a1dda2cf9d39"]
                                        },
                                        zValue: -10,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }, {
                                    id: "a-23-n-3",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-image.two",
                                            selectorGuids: ["4e4b42af-b6d0-c9ae-81aa-0e8f788dd72a", "1bab5443-8017-947a-8374-a1dda2cf9d39"]
                                        },
                                        xValue: 129,
                                        xUnit: "%",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-23-n-2",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-image.one",
                                            selectorGuids: ["4e4b42af-b6d0-c9ae-81aa-0e8f788dd72a", "a1e73f25-10b9-46b1-ea56-9dd306c4d459"]
                                        },
                                        xValue: 186,
                                        yValue: null,
                                        xUnit: "%",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }]
                            }, {
                                actionItems: [{
                                    id: "a-23-n-18",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 1e3,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-image.one",
                                            selectorGuids: ["4e4b42af-b6d0-c9ae-81aa-0e8f788dd72a", "a1e73f25-10b9-46b1-ea56-9dd306c4d459"]
                                        },
                                        zValue: -10,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }, {
                                    id: "a-23-n-32",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 1e3,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-image.one",
                                            selectorGuids: ["4e4b42af-b6d0-c9ae-81aa-0e8f788dd72a", "a1e73f25-10b9-46b1-ea56-9dd306c4d459"]
                                        },
                                        xValue: 0,
                                        yValue: null,
                                        xUnit: "%",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-23-n-23",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 1e3,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-image.seven",
                                            selectorGuids: ["4e4b42af-b6d0-c9ae-81aa-0e8f788dd72a", "1d6fbeb0-b594-5b74-98a3-1616c374362b"]
                                        },
                                        xValue: 0,
                                        xUnit: "%",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-23-n-22",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 1e3,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-image.seven",
                                            selectorGuids: ["4e4b42af-b6d0-c9ae-81aa-0e8f788dd72a", "1d6fbeb0-b594-5b74-98a3-1616c374362b"]
                                        },
                                        zValue: 9.592,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }, {
                                    id: "a-23-n-30",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 200,
                                        easing: "ease",
                                        duration: 1e3,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-image.two",
                                            selectorGuids: ["4e4b42af-b6d0-c9ae-81aa-0e8f788dd72a", "1bab5443-8017-947a-8374-a1dda2cf9d39"]
                                        },
                                        zValue: -10,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }, {
                                    id: "a-23-n-31",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 200,
                                        easing: "ease",
                                        duration: 1e3,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-image.two",
                                            selectorGuids: ["4e4b42af-b6d0-c9ae-81aa-0e8f788dd72a", "1bab5443-8017-947a-8374-a1dda2cf9d39"]
                                        },
                                        xValue: 0,
                                        xUnit: "%",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-23-n-24",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 200,
                                        easing: "ease",
                                        duration: 1e3,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-image.six",
                                            selectorGuids: ["4e4b42af-b6d0-c9ae-81aa-0e8f788dd72a", "97715fb0-22f0-641c-a330-ee827a6a41de"]
                                        },
                                        zValue: 6.465,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }, {
                                    id: "a-23-n-25",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 200,
                                        easing: "ease",
                                        duration: 1e3,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-image.six",
                                            selectorGuids: ["4e4b42af-b6d0-c9ae-81aa-0e8f788dd72a", "97715fb0-22f0-641c-a330-ee827a6a41de"]
                                        },
                                        xValue: 0,
                                        xUnit: "%",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-23-n-26",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 400,
                                        easing: "ease",
                                        duration: 1e3,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-image.five",
                                            selectorGuids: ["4e4b42af-b6d0-c9ae-81aa-0e8f788dd72a", "d6e725cf-05f0-e389-ab82-fd1d06b1810b"]
                                        },
                                        zValue: 4.465,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }, {
                                    id: "a-23-n-27",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 400,
                                        easing: "ease",
                                        duration: 1e3,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-image.five",
                                            selectorGuids: ["4e4b42af-b6d0-c9ae-81aa-0e8f788dd72a", "d6e725cf-05f0-e389-ab82-fd1d06b1810b"]
                                        },
                                        xValue: 0,
                                        xUnit: "%",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-23-n-29",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 400,
                                        easing: "ease",
                                        duration: 1e3,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-image.three",
                                            selectorGuids: ["4e4b42af-b6d0-c9ae-81aa-0e8f788dd72a", "7b48c3fb-f9c4-0b53-9a0f-bd127a1699ca"]
                                        },
                                        xValue: 0,
                                        xUnit: "%",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-23-n-28",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 400,
                                        easing: "ease",
                                        duration: 1e3,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-image.three",
                                            selectorGuids: ["4e4b42af-b6d0-c9ae-81aa-0e8f788dd72a", "7b48c3fb-f9c4-0b53-9a0f-bd127a1699ca"]
                                        },
                                        zValue: -2.629,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }, {
                                    id: "a-23-n-21",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 500,
                                        easing: "ease",
                                        duration: 1e3,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-image.four",
                                            selectorGuids: ["4e4b42af-b6d0-c9ae-81aa-0e8f788dd72a", "b9e7bca0-fca8-082b-a603-15370a854d9e"]
                                        },
                                        xValue: 0,
                                        xUnit: "%",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-23-n-19",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 500,
                                        easing: "ease",
                                        duration: 1e3,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-image.four",
                                            selectorGuids: ["4e4b42af-b6d0-c9ae-81aa-0e8f788dd72a", "b9e7bca0-fca8-082b-a603-15370a854d9e"]
                                        },
                                        zValue: 3.847,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }]
                            }, {
                                actionItems: [{
                                    id: "a-23-n-34",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 500,
                                        easing: "ease",
                                        duration: 1500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-image.two",
                                            selectorGuids: ["4e4b42af-b6d0-c9ae-81aa-0e8f788dd72a", "1bab5443-8017-947a-8374-a1dda2cf9d39"]
                                        },
                                        yValue: 180,
                                        xUnit: "DEG",
                                        yUnit: "deg",
                                        zUnit: "DEG"
                                    }
                                }, {
                                    id: "a-23-n-33",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 500,
                                        easing: "ease",
                                        duration: 1500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-image.one",
                                            selectorGuids: ["4e4b42af-b6d0-c9ae-81aa-0e8f788dd72a", "a1e73f25-10b9-46b1-ea56-9dd306c4d459"]
                                        },
                                        xValue: null,
                                        yValue: 180,
                                        xUnit: "deg",
                                        yUnit: "deg",
                                        zUnit: "DEG"
                                    }
                                }, {
                                    id: "a-23-n-39",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 500,
                                        easing: "ease",
                                        duration: 1500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-image.seven",
                                            selectorGuids: ["4e4b42af-b6d0-c9ae-81aa-0e8f788dd72a", "1d6fbeb0-b594-5b74-98a3-1616c374362b"]
                                        },
                                        yValue: 180,
                                        xUnit: "DEG",
                                        yUnit: "deg",
                                        zUnit: "DEG"
                                    }
                                }, {
                                    id: "a-23-n-38",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 500,
                                        easing: "ease",
                                        duration: 1500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-image.six",
                                            selectorGuids: ["4e4b42af-b6d0-c9ae-81aa-0e8f788dd72a", "97715fb0-22f0-641c-a330-ee827a6a41de"]
                                        },
                                        yValue: 180,
                                        xUnit: "DEG",
                                        yUnit: "deg",
                                        zUnit: "DEG"
                                    }
                                }, {
                                    id: "a-23-n-37",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 500,
                                        easing: "ease",
                                        duration: 1500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-image.five",
                                            selectorGuids: ["4e4b42af-b6d0-c9ae-81aa-0e8f788dd72a", "d6e725cf-05f0-e389-ab82-fd1d06b1810b"]
                                        },
                                        yValue: 180,
                                        xUnit: "DEG",
                                        yUnit: "deg",
                                        zUnit: "DEG"
                                    }
                                }, {
                                    id: "a-23-n-36",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 500,
                                        easing: "ease",
                                        duration: 1500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-image.four",
                                            selectorGuids: ["4e4b42af-b6d0-c9ae-81aa-0e8f788dd72a", "b9e7bca0-fca8-082b-a603-15370a854d9e"]
                                        },
                                        yValue: 180,
                                        xUnit: "DEG",
                                        yUnit: "deg",
                                        zUnit: "DEG"
                                    }
                                }, {
                                    id: "a-23-n-35",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 500,
                                        easing: "ease",
                                        duration: 1500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-image.three",
                                            selectorGuids: ["4e4b42af-b6d0-c9ae-81aa-0e8f788dd72a", "7b48c3fb-f9c4-0b53-9a0f-bd127a1699ca"]
                                        },
                                        yValue: 180,
                                        xUnit: "DEG",
                                        yUnit: "deg",
                                        zUnit: "DEG"
                                    }
                                }]
                            }, {
                                actionItems: [{
                                    id: "a-23-n-40",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 500,
                                        easing: "ease",
                                        duration: 1500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-image.one",
                                            selectorGuids: ["4e4b42af-b6d0-c9ae-81aa-0e8f788dd72a", "a1e73f25-10b9-46b1-ea56-9dd306c4d459"]
                                        },
                                        xValue: null,
                                        yValue: 0,
                                        xUnit: "deg",
                                        yUnit: "deg",
                                        zUnit: "DEG"
                                    }
                                }, {
                                    id: "a-23-n-46",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 500,
                                        easing: "ease",
                                        duration: 1500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-image.two",
                                            selectorGuids: ["4e4b42af-b6d0-c9ae-81aa-0e8f788dd72a", "1bab5443-8017-947a-8374-a1dda2cf9d39"]
                                        },
                                        yValue: 0,
                                        xUnit: "DEG",
                                        yUnit: "deg",
                                        zUnit: "DEG"
                                    }
                                }, {
                                    id: "a-23-n-45",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 500,
                                        easing: "ease",
                                        duration: 1500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-image.three",
                                            selectorGuids: ["4e4b42af-b6d0-c9ae-81aa-0e8f788dd72a", "7b48c3fb-f9c4-0b53-9a0f-bd127a1699ca"]
                                        },
                                        yValue: 0,
                                        xUnit: "DEG",
                                        yUnit: "deg",
                                        zUnit: "DEG"
                                    }
                                }, {
                                    id: "a-23-n-44",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 500,
                                        easing: "ease",
                                        duration: 1500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-image.four",
                                            selectorGuids: ["4e4b42af-b6d0-c9ae-81aa-0e8f788dd72a", "b9e7bca0-fca8-082b-a603-15370a854d9e"]
                                        },
                                        yValue: 0,
                                        xUnit: "DEG",
                                        yUnit: "deg",
                                        zUnit: "DEG"
                                    }
                                }, {
                                    id: "a-23-n-43",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 500,
                                        easing: "ease",
                                        duration: 1500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-image.five",
                                            selectorGuids: ["4e4b42af-b6d0-c9ae-81aa-0e8f788dd72a", "d6e725cf-05f0-e389-ab82-fd1d06b1810b"]
                                        },
                                        yValue: 0,
                                        xUnit: "DEG",
                                        yUnit: "deg",
                                        zUnit: "DEG"
                                    }
                                }, {
                                    id: "a-23-n-42",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 500,
                                        easing: "ease",
                                        duration: 1500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-image.six",
                                            selectorGuids: ["4e4b42af-b6d0-c9ae-81aa-0e8f788dd72a", "97715fb0-22f0-641c-a330-ee827a6a41de"]
                                        },
                                        yValue: 0,
                                        xUnit: "DEG",
                                        yUnit: "deg",
                                        zUnit: "DEG"
                                    }
                                }, {
                                    id: "a-23-n-41",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 500,
                                        easing: "ease",
                                        duration: 1500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-image.seven",
                                            selectorGuids: ["4e4b42af-b6d0-c9ae-81aa-0e8f788dd72a", "1d6fbeb0-b594-5b74-98a3-1616c374362b"]
                                        },
                                        yValue: 0,
                                        xUnit: "DEG",
                                        yUnit: "deg",
                                        zUnit: "DEG"
                                    }
                                }]
                            }, {
                                actionItems: [{
                                    id: "a-23-n-50",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 300,
                                        easing: "",
                                        duration: 1200,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-image.four",
                                            selectorGuids: ["4e4b42af-b6d0-c9ae-81aa-0e8f788dd72a", "b9e7bca0-fca8-082b-a603-15370a854d9e"]
                                        },
                                        xValue: 5,
                                        xUnit: "%",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-23-n-49",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 300,
                                        easing: "",
                                        duration: 1200,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-image.four",
                                            selectorGuids: ["4e4b42af-b6d0-c9ae-81aa-0e8f788dd72a", "b9e7bca0-fca8-082b-a603-15370a854d9e"]
                                        },
                                        zValue: 2.291,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }, {
                                    id: "a-23-n-48",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 300,
                                        easing: "",
                                        duration: 1200,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-image.four",
                                            selectorGuids: ["4e4b42af-b6d0-c9ae-81aa-0e8f788dd72a", "b9e7bca0-fca8-082b-a603-15370a854d9e"]
                                        },
                                        zValue: 3.847,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }, {
                                    id: "a-23-n-47",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 300,
                                        easing: "",
                                        duration: 1200,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-image.one",
                                            selectorGuids: ["4e4b42af-b6d0-c9ae-81aa-0e8f788dd72a", "a1e73f25-10b9-46b1-ea56-9dd306c4d459"]
                                        },
                                        zValue: -10,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }, {
                                    id: "a-23-n-61",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 300,
                                        easing: "",
                                        duration: 1200,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-image.one",
                                            selectorGuids: ["4e4b42af-b6d0-c9ae-81aa-0e8f788dd72a", "a1e73f25-10b9-46b1-ea56-9dd306c4d459"]
                                        },
                                        xValue: 186,
                                        yValue: null,
                                        xUnit: "%",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-23-n-60",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 300,
                                        easing: "",
                                        duration: 1200,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-image.two",
                                            selectorGuids: ["4e4b42af-b6d0-c9ae-81aa-0e8f788dd72a", "1bab5443-8017-947a-8374-a1dda2cf9d39"]
                                        },
                                        xValue: 129,
                                        xUnit: "%",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-23-n-59",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 300,
                                        easing: "",
                                        duration: 1200,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-image.two",
                                            selectorGuids: ["4e4b42af-b6d0-c9ae-81aa-0e8f788dd72a", "1bab5443-8017-947a-8374-a1dda2cf9d39"]
                                        },
                                        zValue: -10,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }, {
                                    id: "a-23-n-58",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 300,
                                        easing: "",
                                        duration: 1200,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-image.three",
                                            selectorGuids: ["4e4b42af-b6d0-c9ae-81aa-0e8f788dd72a", "7b48c3fb-f9c4-0b53-9a0f-bd127a1699ca"]
                                        },
                                        xValue: 50,
                                        xUnit: "%",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-23-n-57",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 300,
                                        easing: "",
                                        duration: 1200,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-image.three",
                                            selectorGuids: ["4e4b42af-b6d0-c9ae-81aa-0e8f788dd72a", "7b48c3fb-f9c4-0b53-9a0f-bd127a1699ca"]
                                        },
                                        zValue: -2.629,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }, {
                                    id: "a-23-n-56",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 300,
                                        easing: "",
                                        duration: 1200,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-image.five",
                                            selectorGuids: ["4e4b42af-b6d0-c9ae-81aa-0e8f788dd72a", "d6e725cf-05f0-e389-ab82-fd1d06b1810b"]
                                        },
                                        xValue: -74,
                                        xUnit: "%",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-23-n-55",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 300,
                                        easing: "",
                                        duration: 1200,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-image.five",
                                            selectorGuids: ["4e4b42af-b6d0-c9ae-81aa-0e8f788dd72a", "d6e725cf-05f0-e389-ab82-fd1d06b1810b"]
                                        },
                                        zValue: 4.465,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }, {
                                    id: "a-23-n-54",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 300,
                                        easing: "",
                                        duration: 1200,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-image.six",
                                            selectorGuids: ["4e4b42af-b6d0-c9ae-81aa-0e8f788dd72a", "97715fb0-22f0-641c-a330-ee827a6a41de"]
                                        },
                                        xValue: -140,
                                        xUnit: "%",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-23-n-53",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 300,
                                        easing: "",
                                        duration: 1200,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-image.six",
                                            selectorGuids: ["4e4b42af-b6d0-c9ae-81aa-0e8f788dd72a", "97715fb0-22f0-641c-a330-ee827a6a41de"]
                                        },
                                        zValue: 6.465,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }, {
                                    id: "a-23-n-52",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 300,
                                        easing: "",
                                        duration: 1200,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-image.seven",
                                            selectorGuids: ["4e4b42af-b6d0-c9ae-81aa-0e8f788dd72a", "1d6fbeb0-b594-5b74-98a3-1616c374362b"]
                                        },
                                        xValue: -215,
                                        xUnit: "%",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-23-n-51",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 300,
                                        easing: "",
                                        duration: 1200,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-image.seven",
                                            selectorGuids: ["4e4b42af-b6d0-c9ae-81aa-0e8f788dd72a", "1d6fbeb0-b594-5b74-98a3-1616c374362b"]
                                        },
                                        zValue: 9.592,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }]
                            }, {
                                actionItems: [{
                                    id: "a-23-n-62",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 750,
                                        easing: "ease",
                                        duration: 1500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-image.one",
                                            selectorGuids: ["4e4b42af-b6d0-c9ae-81aa-0e8f788dd72a", "a1e73f25-10b9-46b1-ea56-9dd306c4d459"]
                                        },
                                        zValue: -10,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }, {
                                    id: "a-23-n-63",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 750,
                                        easing: "ease",
                                        duration: 1500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-image.one",
                                            selectorGuids: ["4e4b42af-b6d0-c9ae-81aa-0e8f788dd72a", "a1e73f25-10b9-46b1-ea56-9dd306c4d459"]
                                        },
                                        xValue: 0,
                                        yValue: null,
                                        xUnit: "%",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-23-n-64",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 750,
                                        easing: "ease",
                                        duration: 1500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-image.seven",
                                            selectorGuids: ["4e4b42af-b6d0-c9ae-81aa-0e8f788dd72a", "1d6fbeb0-b594-5b74-98a3-1616c374362b"]
                                        },
                                        xValue: 0,
                                        xUnit: "%",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-23-n-65",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 750,
                                        easing: "ease",
                                        duration: 1500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-image.seven",
                                            selectorGuids: ["4e4b42af-b6d0-c9ae-81aa-0e8f788dd72a", "1d6fbeb0-b594-5b74-98a3-1616c374362b"]
                                        },
                                        zValue: 9.592,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }, {
                                    id: "a-23-n-66",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 750,
                                        easing: "ease",
                                        duration: 1500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-image.two",
                                            selectorGuids: ["4e4b42af-b6d0-c9ae-81aa-0e8f788dd72a", "1bab5443-8017-947a-8374-a1dda2cf9d39"]
                                        },
                                        zValue: -10,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }, {
                                    id: "a-23-n-67",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 750,
                                        easing: "ease",
                                        duration: 1500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-image.two",
                                            selectorGuids: ["4e4b42af-b6d0-c9ae-81aa-0e8f788dd72a", "1bab5443-8017-947a-8374-a1dda2cf9d39"]
                                        },
                                        xValue: 0,
                                        xUnit: "%",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-23-n-68",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 750,
                                        easing: "ease",
                                        duration: 1500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-image.six",
                                            selectorGuids: ["4e4b42af-b6d0-c9ae-81aa-0e8f788dd72a", "97715fb0-22f0-641c-a330-ee827a6a41de"]
                                        },
                                        zValue: 6.465,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }, {
                                    id: "a-23-n-69",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 750,
                                        easing: "ease",
                                        duration: 1500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-image.six",
                                            selectorGuids: ["4e4b42af-b6d0-c9ae-81aa-0e8f788dd72a", "97715fb0-22f0-641c-a330-ee827a6a41de"]
                                        },
                                        xValue: 0,
                                        xUnit: "%",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-23-n-70",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 750,
                                        easing: "ease",
                                        duration: 1500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-image.five",
                                            selectorGuids: ["4e4b42af-b6d0-c9ae-81aa-0e8f788dd72a", "d6e725cf-05f0-e389-ab82-fd1d06b1810b"]
                                        },
                                        zValue: 4.465,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }, {
                                    id: "a-23-n-71",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 750,
                                        easing: "ease",
                                        duration: 1500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-image.five",
                                            selectorGuids: ["4e4b42af-b6d0-c9ae-81aa-0e8f788dd72a", "d6e725cf-05f0-e389-ab82-fd1d06b1810b"]
                                        },
                                        xValue: 0,
                                        xUnit: "%",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-23-n-72",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 750,
                                        easing: "ease",
                                        duration: 1500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-image.three",
                                            selectorGuids: ["4e4b42af-b6d0-c9ae-81aa-0e8f788dd72a", "7b48c3fb-f9c4-0b53-9a0f-bd127a1699ca"]
                                        },
                                        xValue: 0,
                                        xUnit: "%",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-23-n-73",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 750,
                                        easing: "ease",
                                        duration: 1500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-image.three",
                                            selectorGuids: ["4e4b42af-b6d0-c9ae-81aa-0e8f788dd72a", "7b48c3fb-f9c4-0b53-9a0f-bd127a1699ca"]
                                        },
                                        zValue: -2.629,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }, {
                                    id: "a-23-n-74",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 750,
                                        easing: "ease",
                                        duration: 1500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-image.four",
                                            selectorGuids: ["4e4b42af-b6d0-c9ae-81aa-0e8f788dd72a", "b9e7bca0-fca8-082b-a603-15370a854d9e"]
                                        },
                                        xValue: 0,
                                        xUnit: "%",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-23-n-75",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 750,
                                        easing: "ease",
                                        duration: 1500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hero-image.four",
                                            selectorGuids: ["4e4b42af-b6d0-c9ae-81aa-0e8f788dd72a", "b9e7bca0-fca8-082b-a603-15370a854d9e"]
                                        },
                                        zValue: 3.847,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }]
                            }],
                            useFirstGroupAsInitialState: !0,
                            createdOn: 0x19b70ac3eb8
                        },
                        "a-24": {
                            id: "a-24",
                            title: "Menu First Click",
                            actionItemGroups: [{
                                actionItems: [{
                                    id: "a-24-n",
                                    actionTypeId: "PLUGIN_LOTTIE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".menu",
                                            selectorGuids: ["a18f8850-ab58-fa40-b08b-ddeddb3d1589"]
                                        },
                                        value: 0
                                    }
                                }]
                            }, {
                                actionItems: [{
                                    id: "a-24-n-2",
                                    actionTypeId: "PLUGIN_LOTTIE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".menu",
                                            selectorGuids: ["a18f8850-ab58-fa40-b08b-ddeddb3d1589"]
                                        },
                                        value: 50
                                    }
                                }]
                            }],
                            useFirstGroupAsInitialState: !0,
                            createdOn: 0x19b741c297e
                        },
                        "a-25": {
                            id: "a-25",
                            title: "Menu 2nd Click",
                            actionItemGroups: [{
                                actionItems: [{
                                    id: "a-25-n",
                                    actionTypeId: "PLUGIN_LOTTIE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".menu",
                                            selectorGuids: ["a18f8850-ab58-fa40-b08b-ddeddb3d1589"]
                                        },
                                        value: 0
                                    }
                                }]
                            }],
                            useFirstGroupAsInitialState: !1,
                            createdOn: 0x19b741c297e
                        },
                        "a-26": {
                            id: "a-26",
                            title: "Fade In & Move On Scroll",
                            actionItemGroups: [{
                                actionItems: [{
                                    id: "a-26-n",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".fade-in-move-on-scroll",
                                            selectorGuids: ["675c48dc-e080-2b14-2895-472d83fbd366"]
                                        },
                                        value: 0,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-26-n-2",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".fade-in-move-on-scroll",
                                            selectorGuids: ["675c48dc-e080-2b14-2895-472d83fbd366"]
                                        },
                                        yValue: 25,
                                        xUnit: "PX",
                                        yUnit: "px",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-26-n-3",
                                    actionTypeId: "STYLE_FILTER",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".fade-in-move-on-scroll",
                                            selectorGuids: ["675c48dc-e080-2b14-2895-472d83fbd366"]
                                        },
                                        filters: [{
                                            type: "blur",
                                            filterId: "8e86",
                                            value: 2,
                                            unit: "px"
                                        }]
                                    }
                                }]
                            }, {
                                actionItems: [{
                                    id: "a-26-n-4",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 100,
                                        easing: "ease",
                                        duration: 1e3,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".fade-in-move-on-scroll",
                                            selectorGuids: ["675c48dc-e080-2b14-2895-472d83fbd366"]
                                        },
                                        value: 1,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-26-n-5",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 100,
                                        easing: "ease",
                                        duration: 1e3,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".fade-in-move-on-scroll",
                                            selectorGuids: ["675c48dc-e080-2b14-2895-472d83fbd366"]
                                        },
                                        yValue: 0,
                                        xUnit: "PX",
                                        yUnit: "px",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-26-n-6",
                                    actionTypeId: "STYLE_FILTER",
                                    config: {
                                        delay: 100,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".fade-in-move-on-scroll",
                                            selectorGuids: ["675c48dc-e080-2b14-2895-472d83fbd366"]
                                        },
                                        filters: [{
                                            type: "blur",
                                            filterId: "8e86",
                                            value: 0,
                                            unit: "px"
                                        }]
                                    }
                                }]
                            }],
                            useFirstGroupAsInitialState: !0,
                            createdOn: 0x1979d89c948
                        },
                        "a-27": {
                            id: "a-27",
                            title: "Team Card Hover In",
                            actionItemGroups: [{
                                actionItems: [{
                                    id: "a-27-n",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 300,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".team-image",
                                            selectorGuids: ["675c48dc-e080-2b14-2895-472d83fbd367"]
                                        },
                                        xValue: 1,
                                        yValue: 1,
                                        locked: !0
                                    }
                                }, {
                                    id: "a-27-n-2",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 300,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".team-image",
                                            selectorGuids: ["675c48dc-e080-2b14-2895-472d83fbd367"]
                                        },
                                        zValue: 0,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }, {
                                    id: "a-27-n-3",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".team-socials-wrap",
                                            selectorGuids: ["675c48dc-e080-2b14-2895-472d83fbd362"]
                                        },
                                        widthValue: 100,
                                        heightValue: 0,
                                        widthUnit: "%",
                                        heightUnit: "px",
                                        locked: !1
                                    }
                                }, {
                                    id: "a-27-n-4",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".team-socials-wrap",
                                            selectorGuids: ["675c48dc-e080-2b14-2895-472d83fbd362"]
                                        },
                                        value: 0,
                                        unit: ""
                                    }
                                }]
                            }, {
                                actionItems: [{
                                    id: "a-27-n-5",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".team-image",
                                            selectorGuids: ["675c48dc-e080-2b14-2895-472d83fbd367"]
                                        },
                                        xValue: 1.1,
                                        yValue: 1.1,
                                        locked: !0
                                    }
                                }, {
                                    id: "a-27-n-6",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".team-image",
                                            selectorGuids: ["675c48dc-e080-2b14-2895-472d83fbd367"]
                                        },
                                        zValue: 2,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }, {
                                    id: "a-27-n-7",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".team-socials-wrap",
                                            selectorGuids: ["675c48dc-e080-2b14-2895-472d83fbd362"]
                                        },
                                        widthValue: 100,
                                        heightValue: 32,
                                        widthUnit: "%",
                                        heightUnit: "px",
                                        locked: !1
                                    }
                                }, {
                                    id: "a-27-n-8",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 300,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".team-socials-wrap",
                                            selectorGuids: ["675c48dc-e080-2b14-2895-472d83fbd362"]
                                        },
                                        value: 1,
                                        unit: ""
                                    }
                                }]
                            }],
                            useFirstGroupAsInitialState: !0,
                            createdOn: 0x19793432e7a
                        },
                        "a-28": {
                            id: "a-28",
                            title: "Team Card Hover Out",
                            actionItemGroups: [{
                                actionItems: [{
                                    id: "a-28-n",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".team-image",
                                            selectorGuids: ["675c48dc-e080-2b14-2895-472d83fbd367"]
                                        },
                                        xValue: 1,
                                        yValue: 1,
                                        locked: !0
                                    }
                                }, {
                                    id: "a-28-n-2",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".team-image",
                                            selectorGuids: ["675c48dc-e080-2b14-2895-472d83fbd367"]
                                        },
                                        zValue: 0,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }, {
                                    id: "a-28-n-3",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            selector: ".team-socials-wrap",
                                            selectorGuids: ["675c48dc-e080-2b14-2895-472d83fbd362"]
                                        },
                                        widthValue: 100,
                                        heightValue: 0,
                                        widthUnit: "%",
                                        heightUnit: "px",
                                        locked: !1
                                    }
                                }, {
                                    id: "a-28-n-4",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 300,
                                        target: {
                                            selector: ".team-socials-wrap",
                                            selectorGuids: ["675c48dc-e080-2b14-2895-472d83fbd362"]
                                        },
                                        value: 0,
                                        unit: ""
                                    }
                                }]
                            }],
                            useFirstGroupAsInitialState: !1,
                            createdOn: 0x19793432e7a
                        },
                        "a-29": {
                            id: "a-29",
                            title: "Team On Scroll",
                            actionItemGroups: [{
                                actionItems: [{
                                    id: "a-29-n",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".team-card",
                                            selectorGuids: ["675c48dc-e080-2b14-2895-472d83fbd36b"]
                                        },
                                        value: 0,
                                        unit: ""
                                    }
                                }]
                            }, {
                                actionItems: [{
                                    id: "a-29-n-2",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 100,
                                        easing: "ease",
                                        duration: 700,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".team-card",
                                            selectorGuids: ["675c48dc-e080-2b14-2895-472d83fbd36b"]
                                        },
                                        value: 1,
                                        unit: ""
                                    }
                                }]
                            }],
                            useFirstGroupAsInitialState: !0,
                            createdOn: 0x1979dcb4d41
                        },
                        "a-30": {
                            id: "a-30",
                            title: "Link Hover In",
                            actionItemGroups: [{
                                actionItems: [{
                                    id: "a-30-n",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".link-block-underline",
                                            selectorGuids: ["5c626b8f-66eb-78cb-a2d1-aa07942116a0"]
                                        },
                                        xValue: -101,
                                        xUnit: "%",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }]
                            }, {
                                actionItems: [{
                                    id: "a-30-n-2",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 700,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".link-block-underline",
                                            selectorGuids: ["5c626b8f-66eb-78cb-a2d1-aa07942116a0"]
                                        },
                                        xValue: 0,
                                        xUnit: "%",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }]
                            }],
                            useFirstGroupAsInitialState: !0,
                            createdOn: 0x1979ddecfd7
                        },
                        "a-31": {
                            id: "a-31",
                            title: "Link Hover Out",
                            actionItemGroups: [{
                                actionItems: [{
                                    id: "a-31-n",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 800,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".link-block-underline",
                                            selectorGuids: ["5c626b8f-66eb-78cb-a2d1-aa07942116a0"]
                                        },
                                        xValue: 101,
                                        xUnit: "%",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }]
                            }, {
                                actionItems: [{
                                    id: "a-31-n-2",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 0,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".link-block-underline",
                                            selectorGuids: ["5c626b8f-66eb-78cb-a2d1-aa07942116a0"]
                                        },
                                        xValue: -101,
                                        xUnit: "%",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }]
                            }],
                            useFirstGroupAsInitialState: !1,
                            createdOn: 0x1979ddecfd7
                        },
                        slideInBottom: {
                            id: "slideInBottom",
                            useFirstGroupAsInitialState: !0,
                            actionItemGroups: [{
                                actionItems: [{
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        duration: 0,
                                        target: {
                                            id: "N/A",
                                            appliesTo: "TRIGGER_ELEMENT",
                                            useEventTarget: !0
                                        },
                                        value: 0
                                    }
                                }]
                            }, {
                                actionItems: [{
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        duration: 0,
                                        target: {
                                            id: "N/A",
                                            appliesTo: "TRIGGER_ELEMENT",
                                            useEventTarget: !0
                                        },
                                        xValue: 0,
                                        yValue: 100,
                                        xUnit: "PX",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }]
                            }, {
                                actionItems: [{
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "outQuart",
                                        duration: 1e3,
                                        target: {
                                            id: "N/A",
                                            appliesTo: "TRIGGER_ELEMENT",
                                            useEventTarget: !0
                                        },
                                        xValue: 0,
                                        yValue: 0,
                                        xUnit: "PX",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }, {
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "outQuart",
                                        duration: 1e3,
                                        target: {
                                            id: "N/A",
                                            appliesTo: "TRIGGER_ELEMENT",
                                            useEventTarget: !0
                                        },
                                        value: 1
                                    }
                                }]
                            }]
                        },
                        growBigIn: {
                            id: "growBigIn",
                            useFirstGroupAsInitialState: !0,
                            actionItemGroups: [{
                                actionItems: [{
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        duration: 0,
                                        target: {
                                            id: "N/A",
                                            appliesTo: "TRIGGER_ELEMENT",
                                            useEventTarget: !0
                                        },
                                        value: 0
                                    }
                                }]
                            }, {
                                actionItems: [{
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        duration: 0,
                                        target: {
                                            id: "N/A",
                                            appliesTo: "TRIGGER_ELEMENT",
                                            useEventTarget: !0
                                        },
                                        xValue: 0,
                                        yValue: 0
                                    }
                                }]
                            }, {
                                actionItems: [{
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "outQuart",
                                        duration: 1e3,
                                        target: {
                                            id: "N/A",
                                            appliesTo: "TRIGGER_ELEMENT",
                                            useEventTarget: !0
                                        },
                                        xValue: 1,
                                        yValue: 1
                                    }
                                }, {
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "outQuart",
                                        duration: 1e3,
                                        target: {
                                            id: "N/A",
                                            appliesTo: "TRIGGER_ELEMENT",
                                            useEventTarget: !0
                                        },
                                        value: 1
                                    }
                                }]
                            }]
                        },
                        slideInLeft: {
                            id: "slideInLeft",
                            useFirstGroupAsInitialState: !0,
                            actionItemGroups: [{
                                actionItems: [{
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        duration: 0,
                                        target: {
                                            id: "N/A",
                                            appliesTo: "TRIGGER_ELEMENT",
                                            useEventTarget: !0
                                        },
                                        value: 0
                                    }
                                }]
                            }, {
                                actionItems: [{
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        duration: 0,
                                        target: {
                                            id: "N/A",
                                            appliesTo: "TRIGGER_ELEMENT",
                                            useEventTarget: !0
                                        },
                                        xValue: -100,
                                        yValue: 0,
                                        xUnit: "PX",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }]
                            }, {
                                actionItems: [{
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "outQuart",
                                        duration: 1e3,
                                        target: {
                                            id: "N/A",
                                            appliesTo: "TRIGGER_ELEMENT",
                                            useEventTarget: !0
                                        },
                                        value: 1
                                    }
                                }, {
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "outQuart",
                                        duration: 1e3,
                                        target: {
                                            id: "N/A",
                                            appliesTo: "TRIGGER_ELEMENT",
                                            useEventTarget: !0
                                        },
                                        xValue: 0,
                                        yValue: 0,
                                        xUnit: "PX",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }]
                            }]
                        },
                        slideInRight: {
                            id: "slideInRight",
                            useFirstGroupAsInitialState: !0,
                            actionItemGroups: [{
                                actionItems: [{
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        duration: 0,
                                        target: {
                                            id: "N/A",
                                            appliesTo: "TRIGGER_ELEMENT",
                                            useEventTarget: !0
                                        },
                                        value: 0
                                    }
                                }]
                            }, {
                                actionItems: [{
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        duration: 0,
                                        target: {
                                            id: "N/A",
                                            appliesTo: "TRIGGER_ELEMENT",
                                            useEventTarget: !0
                                        },
                                        xValue: 100,
                                        yValue: 0,
                                        xUnit: "PX",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }]
                            }, {
                                actionItems: [{
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "outQuart",
                                        duration: 1e3,
                                        target: {
                                            id: "N/A",
                                            appliesTo: "TRIGGER_ELEMENT",
                                            useEventTarget: !0
                                        },
                                        value: 1
                                    }
                                }, {
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "outQuart",
                                        duration: 1e3,
                                        target: {
                                            id: "N/A",
                                            appliesTo: "TRIGGER_ELEMENT",
                                            useEventTarget: !0
                                        },
                                        xValue: 0,
                                        yValue: 0,
                                        xUnit: "PX",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }]
                            }]
                        }
                    },
                    site: {
                        mediaQueries: [{
                            key: "main",
                            min: 992,
                            max: 1e4
                        }, {
                            key: "medium",
                            min: 768,
                            max: 991
                        }, {
                            key: "small",
                            min: 480,
                            max: 767
                        }, {
                            key: "tiny",
                            min: 0,
                            max: 479
                        }]
                    }
                }), "complete" === document.readyState ? e() : document.addEventListener("readystatechange", () => {
                    "complete" === document.readyState && e()
                })
            },
            4197: function(e, t, a) {
                a(9461), a(7624), a(286), a(8334), a(2338), a(3695), a(322), a(941), a(5134), a(1655), a(2444), a(3973), a(9078), a(7527), a(7193)
            }
        },
        t = {};

    function a(i) {
        var n = t[i];
        if (void 0 !== n) return n.exports;
        var r = t[i] = {
            id: i,
            loaded: !1,
            exports: {}
        };
        return e[i].call(r.exports, r, r.exports, a), r.loaded = !0, r.exports
    }
    a.m = e, a.d = (e, t) => {
        for (var i in t) a.o(t, i) && !a.o(e, i) && Object.defineProperty(e, i, {
            enumerable: !0,
            get: t[i]
        })
    }, a.hmd = e => ((e = Object.create(e)).children || (e.children = []), Object.defineProperty(e, "exports", {
        enumerable: !0,
        set: () => {
            throw Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
        }
    }), e), a.g = (() => {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    })(), a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), a.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, a.nmd = e => (e.paths = [], e.children || (e.children = []), e), (() => {
        var e = [];
        a.O = (t, i, n, r) => {
            if (i) {
                r = r || 0;
                for (var o = e.length; o > 0 && e[o - 1][2] > r; o--) e[o] = e[o - 1];
                e[o] = [i, n, r];
                return
            }
            for (var s = 1 / 0, o = 0; o < e.length; o++) {
                for (var [i, n, r] = e[o], d = !0, l = 0; l < i.length; l++)(!1 & r || s >= r) && Object.keys(a.O).every(e => a.O[e](i[l])) ? i.splice(l--, 1) : (d = !1, r < s && (s = r));
                if (d) {
                    e.splice(o--, 1);
                    var c = n();
                    void 0 !== c && (t = c)
                }
            }
            return t
        }
    })(), a.rv = () => "1.3.9", (() => {
        var e = {
            593: 0
        };
        a.O.j = t => 0 === e[t];
        var t = (t, i) => {
                var n, r, [o, s, d] = i,
                    l = 0;
                if (o.some(t => 0 !== e[t])) {
                    for (n in s) a.o(s, n) && (a.m[n] = s[n]);
                    if (d) var c = d(a)
                }
                for (t && t(i); l < o.length; l++) r = o[l], a.o(e, r) && e[r] && e[r][0](), e[r] = 0;
                return a.O(c)
            },
            i = self.webpackChunk = self.webpackChunk || [];
        i.forEach(t.bind(null, 0)), i.push = t.bind(null, i.push.bind(i))
    })(), a.ruid = "bundler=rspack@1.3.9";
    var i = a.O(void 0, ["753", "550", "729"], function() {
        return a(4197)
    });
    i = a.O(i)
})();