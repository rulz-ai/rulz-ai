"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[4865], {
    76768: function(e, r, n) {
        var t = n(35250)
          , i = n(5397)
          , a = n.n(i);
        n(70079);
        var s = function(e) {
            var r = e.children;
            return (0,
            t.jsx)(t.Fragment, {
                children: r
            })
        };
        r.Z = a()(function() {
            return Promise.resolve(s)
        }, {
            ssr: !1
        })
    },
    4865: function(e, r, n) {
        n.d(r, {
            Z: function() {
                return g
            }
        });
        var t = n(39324)
          , i = n(10064)
          , a = n(35250)
          , s = n(15635)
          , o = n(32148)
          , l = n(19841)
          , c = n(97296)
          , d = n(70079)
          , u = n(32004)
          , f = n(94968)
          , h = n(55548)
          , x = n(1491)
          , m = n(23234)
          , v = n(76768)
          , b = n(74424);
        function g(e) {
            var r = e.children
              , n = e.showNavigation
              , f = e.renderTitle
              , j = e.renderMobileHeaderRightContent
              , y = e.renderSidebar
              , k = (0,
            m.Ml)()
              , N = (0,
            x.w$)()
              , w = (0,
            h.tN)(function(e) {
                return e.isDesktopNavCollapsed
            })
              , C = (0,
            i._)((0,
            d.useState)(!1), 2)
              , S = C[0]
              , Z = C[1]
              , _ = []
              , z = null;
            d.Children.forEach(r, function(e) {
                d.isValidElement(e) && (e.type === g.Sidebars ? z = e : _.push(e))
            });
            var F = N && n && null != y;
            return (0,
            a.jsxs)("div", {
                className: "relative z-0 flex h-full w-full overflow-hidden",
                children: [F ? (0,
                a.jsx)(v.Z, {
                    children: (0,
                    a.jsx)(b.l6, {
                        children: (0,
                        a.jsx)("div", {
                            className: (0,
                            l.default)("flex h-full min-h-0 flex-col transition-opacity", S && !w || w ? "opacity-50" : "opacity-100"),
                            children: y
                        })
                    })
                }) : null, (0,
                a.jsxs)("div", {
                    className: "relative flex h-full max-w-full flex-1 flex-col overflow-hidden",
                    children: [!N && n && (0,
                    a.jsx)(v.Z, {
                        children: (0,
                        a.jsx)(b.Vs, {
                            onClickOpenSidebar: function() {
                                return h.vm.toggleActiveSidebar("mobile-nav")
                            },
                            renderTitle: f,
                            renderSidebar: y,
                            renderRightContent: j
                        })
                    }), (0,
                    a.jsxs)("main", {
                        className: "relative h-full w-full flex-1 overflow-auto transition-width",
                        children: [k && F && (0,
                        a.jsx)(v.Z, {
                            children: (0,
                            a.jsx)("div", {
                                className: (0,
                                l.default)("fixed left-0 top-1/2 z-40 -translate-y-1/2 transition-transform", w ? "translate-x-0 rotate-180" : "translate-x-[260px] rotate-0"),
                                children: (0,
                                a.jsx)("button", {
                                    onClick: h.vm.toggleDesktopNavCollapsed,
                                    onMouseEnter: function() {
                                        return Z(!0)
                                    },
                                    onMouseLeave: function() {
                                        return Z(!1)
                                    },
                                    children: (0,
                                    a.jsxs)(s.u, {
                                        side: "right",
                                        label: w ? (0,
                                        a.jsx)(u.Z, (0,
                                        t._)({}, p.openSidebar)) : (0,
                                        a.jsx)(u.Z, (0,
                                        t._)({}, p.closeSidebar)),
                                        sideOffset: 4,
                                        children: [(0,
                                        a.jsx)(c.E.div, {
                                            className: "flex h-[72px] w-8 items-center justify-center",
                                            variants: {
                                                rest: {
                                                    opacity: .25
                                                },
                                                hover: {
                                                    opacity: 1
                                                }
                                            },
                                            initial: !1,
                                            whileHover: ["hover", "arrow"],
                                            animate: ["rest", w ? "arrow" : "line"],
                                            children: (0,
                                            a.jsxs)(c.E.div, {
                                                className: "flex h-6 w-6 flex-col items-center",
                                                children: [(0,
                                                a.jsx)(c.E.div, {
                                                    className: "h-3 w-1 rounded-full bg-token-text-primary",
                                                    variants: {
                                                        line: {
                                                            rotate: "0deg",
                                                            y: ".15rem"
                                                        },
                                                        arrow: {
                                                            rotate: "15deg",
                                                            y: ".15rem"
                                                        }
                                                    }
                                                }), (0,
                                                a.jsx)(c.E.div, {
                                                    className: "h-3 w-1 rounded-full bg-token-text-primary",
                                                    variants: {
                                                        line: {
                                                            rotate: "0deg",
                                                            y: "-.15rem"
                                                        },
                                                        arrow: {
                                                            rotate: "-15deg",
                                                            y: "-.15rem"
                                                        }
                                                    }
                                                })]
                                            })
                                        }), (0,
                                        a.jsx)(o.T, {
                                            children: w ? (0,
                                            a.jsx)(u.Z, (0,
                                            t._)({}, p.openSidebar)) : (0,
                                            a.jsx)(u.Z, (0,
                                            t._)({}, p.closeSidebar))
                                        })]
                                    })
                                })
                            })
                        }), _]
                    })]
                }), z]
            })
        }
        g.Sidebars = function(e) {
            var r = e.children;
            return (0,
            a.jsx)(a.Fragment, {
                children: r
            })
        }
        ;
        var p = (0,
        f.vU)({
            closeSidebar: {
                id: "Stage.closeSidebar",
                defaultMessage: "Close sidebar",
                description: "Close sidebar button label"
            },
            openSidebar: {
                id: "Stage.openSidebar",
                defaultMessage: "Open sidebar",
                description: "Open sidebar button label"
            }
        })
    },
    74424: function(e, r, n) {
        n.d(r, {
            H: function() {
                return Z
            },
            MP: function() {
                return C
            },
            Vs: function() {
                return z
            },
            js: function() {
                return S
            },
            l6: function() {
                return F
            }
        });
        var t = n(39324)
          , i = n(70216)
          , a = n(35250)
          , s = n(35265)
          , o = n(98359)
          , l = n(72555)
          , c = n(32148)
          , d = n(19841)
          , u = n(97296)
          , f = n(70737)
          , h = n(10721)
          , x = n(70079)
          , m = n(1454)
          , v = n(70671)
          , b = n(32004)
          , g = n(94968)
          , p = n(55548)
          , j = n(1491)
          , y = n(74329)
          , k = n(15635)
          , N = n(23234)
          , w = n(27382);
        function C(e) {
            var r = e.onClick
              , n = e.className
              , s = (0,
            i._)(e, ["onClick", "className"]);
            return (0,
            a.jsx)(w.zV, (0,
            t._)({
                onClick: r,
                className: (0,
                d.default)(n, "flex-grow overflow-hidden")
            }, s))
        }
        function S(e) {
            var r = e.onClick
              , n = (0,
            i._)(e, ["onClick"]);
            return (0,
            a.jsx)("button", (0,
            t._)({
                type: "button",
                className: "px-3",
                onClick: r
            }, n))
        }
        function Z() {
            var e = (0,
            v.Z)();
            return (0,
            j.w$)() ? (0,
            a.jsx)(k.u, {
                side: "right",
                label: e.formatMessage(M.closeSidebar),
                children: (0,
                a.jsxs)(w.zV, {
                    onClick: p.vm.toggleDesktopNavCollapsed,
                    className: "w-11 flex-shrink-0 items-center justify-center bg-white dark:bg-transparent",
                    children: [(0,
                    a.jsx)(m.iYc, {
                        className: "icon-sm"
                    }), (0,
                    a.jsx)(c.f, {
                        children: (0,
                        a.jsx)(b.Z, (0,
                        t._)({}, M.closeSidebar))
                    })]
                })
            }) : null
        }
        var _ = function(e) {
            var r = e.onClose
              , n = e.sidebarOpen
              , i = e.children;
            return (0,
            a.jsx)(o.u.Root, {
                show: n,
                as: x.Fragment,
                children: (0,
                a.jsxs)(l.V, {
                    as: "div",
                    className: "dark relative",
                    onClose: r,
                    children: [(0,
                    a.jsx)(o.u.Child, {
                        as: x.Fragment,
                        enter: "transition-opacity ease-linear duration-300",
                        enterFrom: "opacity-0",
                        enterTo: "opacity-100",
                        leave: "transition-opacity ease-linear duration-300",
                        leaveFrom: "opacity-100",
                        leaveTo: "opacity-0",
                        children: (0,
                        a.jsx)("div", {
                            className: "fixed inset-0 bg-black/50 dark:bg-black/25"
                        })
                    }), (0,
                    a.jsxs)("div", {
                        className: "fixed inset-0 flex",
                        children: [(0,
                        a.jsx)(o.u.Child, {
                            as: x.Fragment,
                            enter: "transition ease-in-out duration-300 transform",
                            enterFrom: "-translate-x-full",
                            enterTo: "translate-x-0",
                            leave: "transition ease-in-out duration-300 transform",
                            leaveFrom: "translate-x-0",
                            leaveTo: "-translate-x-full",
                            children: (0,
                            a.jsxs)(l.V.Panel, {
                                className: "relative flex w-full max-w-xs flex-1 flex-col bg-gray-900 gizmo:bg-black",
                                children: [(0,
                                a.jsx)(o.u.Child, {
                                    as: x.Fragment,
                                    enter: "ease-in-out duration-300",
                                    enterFrom: "opacity-0",
                                    enterTo: "opacity-100",
                                    leave: "ease-in-out duration-300",
                                    leaveFrom: "opacity-100",
                                    leaveTo: "opacity-0",
                                    children: (0,
                                    a.jsx)("div", {
                                        className: "absolute right-0 top-0 -mr-12 pt-3.5",
                                        children: (0,
                                        a.jsxs)("button", {
                                            type: "button",
                                            className: "ml-1 flex h-10 w-10 items-center justify-center text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",
                                            onClick: r,
                                            children: [(0,
                                            a.jsx)("span", {
                                                className: "sr-only",
                                                children: (0,
                                                a.jsx)(b.Z, (0,
                                                t._)({}, M.closeSidebar))
                                            }), (0,
                                            a.jsx)(s.v7, {
                                                className: "icon-md"
                                            })]
                                        })
                                    })
                                }), i]
                            })
                        }), (0,
                        a.jsx)("div", {
                            className: "w-14 flex-shrink-0"
                        })]
                    })]
                })
            })
        }
          , z = function(e) {
            var r = e.onClickOpenSidebar
              , n = e.renderTitle
              , i = e.renderSidebar
              , o = e.renderRightContent
              , l = (0,
            p.tN)(function(e) {
                return e.activeSidebar
            })
              , c = (0,
            h.useRouter)().asPath;
            return (0,
            x.useEffect)(function() {
                "mobile-nav" === l && p.vm.setActiveSidebar(!1)
            }, [c]),
            (0,
            a.jsxs)(a.Fragment, {
                children: [(0,
                a.jsxs)("div", {
                    className: "text-token-primary sticky top-0 z-10 flex min-h-[40px] items-center border-b border-token-border-medium bg-token-surface-primary pl-1 dark:bg-token-surface-secondary md:hidden",
                    children: [(0,
                    a.jsxs)("button", {
                        type: "button",
                        className: "absolute -ml-0.5 -mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white active:opacity-50 dark:hover:text-white",
                        onClick: r,
                        children: [(0,
                        a.jsx)("span", {
                            className: "sr-only",
                            children: (0,
                            a.jsx)(b.Z, (0,
                            t._)({}, M.openSidebar))
                        }), (0,
                        a.jsx)(s.$0, {
                            className: "icon-md"
                        })]
                    }), (0,
                    a.jsx)("h1", {
                        className: "flex-1 text-center text-base font-normal",
                        children: n
                    }), o]
                }), (0,
                a.jsx)(_, {
                    onClose: function() {
                        p.vm.setActiveSidebar(!1)
                    },
                    sidebarOpen: "mobile-nav" === l,
                    children: i
                })]
            })
        };
        function F(e) {
            var r = e.children
              , n = (0,
            v.Z)()
              , t = (0,
            x.useRef)(null)
              , i = (0,
            p.tN)(function(e) {
                return e.isDesktopNavCollapsed
            })
              , s = (0,
            N.Ml)();
            return (0,
            a.jsxs)(a.Fragment, {
                children: [(0,
                a.jsx)(u.E.div, {
                    className: "dark flex-shrink-0 overflow-x-hidden bg-gray-900 gizmo:bg-black",
                    ref: t,
                    initial: !1,
                    animate: {
                        width: i ? 0 : "260px",
                        transition: {
                            duration: .165,
                            ease: "easeOut"
                        }
                    },
                    onAnimationStart: function() {
                        t.current && (t.current.style.visibility = "visible")
                    },
                    onAnimationComplete: function() {
                        t.current && i && (t.current.style.visibility = "hidden")
                    },
                    children: (0,
                    a.jsx)("div", {
                        className: "h-full w-[260px]",
                        children: (0,
                        a.jsx)("div", {
                            className: "flex h-full min-h-0 flex-col",
                            children: r
                        })
                    })
                }), (0,
                a.jsx)(f.M, {
                    initial: !1,
                    children: (0,
                    a.jsx)(a.Fragment, {
                        children: i && !s && (0,
                        a.jsx)(u.E.div, {
                            className: "absolute left-2 top-2 z-40 hidden md:inline-block",
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1,
                                transition: {
                                    duration: .165,
                                    ease: "easeIn"
                                }
                            },
                            children: (0,
                            a.jsx)(k.u, {
                                side: "right",
                                label: n.formatMessage(M.openSidebar),
                                children: (0,
                                a.jsx)(y.O, {
                                    onClick: p.vm.toggleDesktopNavCollapsed,
                                    "aria-label": n.formatMessage(M.openSidebar),
                                    children: (0,
                                    a.jsx)(m.iYc, {
                                        className: "icon-sm text-token-text-primary gizmo:text-token-text-tertiary gizmo:hover:text-token-text-secondary"
                                    })
                                })
                            })
                        })
                    })
                })]
            })
        }
        var M = (0,
        g.vU)({
            closeSidebar: {
                id: "navigation.closeSidebar",
                defaultMessage: "Close sidebar",
                description: "Close sidebar button label"
            },
            openSidebar: {
                id: "navigation.openSidebar",
                defaultMessage: "Open sidebar",
                description: "Open sidebar button label"
            }
        })
    },
    74329: function(e, r, n) {
        n.d(r, {
            O: function() {
                return o
            },
            h: function() {
                return l
            }
        });
        var t = n(4337)
          , i = n(21389);
        function a() {
            var e = (0,
            t._)(["flex p-3 items-center gap-3 transition-colors duration-200 text-gray-600 dark:text-gray-200 cursor-pointer text-sm rounded-md bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 h-11"]);
            return a = function() {
                return e
            }
            ,
            e
        }
        function s() {
            var e = (0,
            t._)(["h-11 w-11"]);
            return s = function() {
                return e
            }
            ,
            e
        }
        var o = i.Z.button(a())
          , l = i.Z.div(s())
    },
    27382: function(e, r, n) {
        n.d(r, {
            R: function() {
                return v
            },
            Vq: function() {
                return b
            },
            ZB: function() {
                return x
            },
            ZP: function() {
                return h
            },
            zV: function() {
                return m
            }
        });
        var t = n(4337)
          , i = n(35250)
          , a = n(7813)
          , s = n(19841)
          , o = n(21389);
        function l() {
            var e = (0,
            t._)(["p-2 rounded-md hover:bg-black/10 hover:dark:bg-white/10 cursor-pointer"]);
            return l = function() {
                return e
            }
            ,
            e
        }
        function c() {
            var e = (0,
            t._)(["flex px-3 min-h-[44px] py-1 items-center gap-3 dark:text-white cursor-pointer text-sm"]);
            return c = function() {
                return e
            }
            ,
            e
        }
        function d() {
            var e = (0,
            t._)(["rounded-md border dark:border-white/20 gizmo:min-h-0 hover:bg-gray-500/10 h-11 gizmo:h-10 gizmo:rounded-lg gizmo:border-[rgba(0,0,0,0.1)]"]);
            return d = function() {
                return e
            }
            ,
            e
        }
        function u() {
            var e = (0,
            t._)(["h-px dark:bg-white/10 bg-black/20"]);
            return u = function() {
                return e
            }
            ,
            e
        }
        function f() {
            var e = (0,
            t._)(["", ""]);
            return f = function() {
                return e
            }
            ,
            e
        }
        function h(e) {
            var r = e.onClick
              , n = e.href
              , t = e.target
              , o = e.children
              , l = e.disabled;
            return (0,
            i.jsx)(a.v.Item, {
                disabled: l,
                children: function(e) {
                    var a = e.active;
                    return (0,
                    i.jsx)(x, {
                        as: void 0 !== n ? "a" : "button",
                        onClick: r,
                        href: n,
                        target: t,
                        className: (0,
                        s.default)({
                            "bg-gray-100 dark:bg-gray-800": a,
                            "hover:bg-gray-100 dark:hover:bg-gray-800": !a && !l
                        }),
                        children: o
                    })
                }
            })
        }
        o.Z.a(l());
        var x = o.Z.a(c())
          , m = (0,
        o.Z)(x)(d())
          , v = o.Z.div(u())
          , b = (0,
        o.Z)(x)(f(), function(e) {
            return e.$active ? "bg-gray-100 dark:bg-gray-800" : "hover:bg-gray-100 dark:hover:bg-gray-800 gizmo:dark:hover:bg-token-surface-primary gizmo:hover:bg-token-surface-primary"
        })
    }
}]);