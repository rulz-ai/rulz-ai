"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[4388], {
    64388: function(e, t, n) {
        n.r(t),
        n.d(t, {
            default: function() {
                return W
            }
        });
        var s = n(35250)
          , i = n(55548)
          , o = n(39324)
          , a = n(71209)
          , l = n(10064)
          , r = n(19841)
          , d = n(5397)
          , c = n.n(d)
          , u = n(70079)
          , h = n(35236)
          , x = n(84589)
          , f = n.n(x)
          , m = n(97296)
          , g = n(1454)
          , p = n(32004)
          , w = n(70671)
          , j = n(94968)
          , v = n(48133)
          , y = n(15635)
          , b = n(60638)
          , N = n(45021)
          , z = {
            padding: 20,
            zIndex: 1e3,
            xOffset: 300,
            yOffset: 200,
            normal: {
                width: 600,
                height: 585
            },
            small: {
                width: 600,
                height: 335
            }
        }
          , k = c()(function() {
            return Promise.all([n.e(5823), n.e(3207)]).then(n.bind(n, 73207))
        }, {
            loadableGenerated: {
                webpack: function() {
                    return [73207]
                }
            },
            ssr: !1,
            loading: function() {
                return (0,
                s.jsx)("div", {
                    className: "p-3",
                    children: (0,
                    s.jsx)("p", {
                        className: "flex items-center justify-center bg-gray-50 text-center font-mono text-sm uppercase text-gray-800",
                        style: {
                            height: 200
                        },
                        children: (0,
                        s.jsx)(p.Z, (0,
                        o._)({}, _.loading))
                    })
                })
            }
        });
        function C() {
            var e = (0,
            u.useRef)(null)
              , t = (0,
            l._)(f()(), 2)
              , n = t[0]
              , d = n.width
              , c = n.height
              , x = t[1]
              , w = (0,
            b.gj)().targetLatencyData
              , j = (0,
            i.tN)(i.bM.isLatencyDevtoolsVisible);
            (0,
            u.useEffect)(function() {
                if (e.current) {
                    var t = window.innerWidth
                      , n = window.innerHeight;
                    e.current.updatePosition({
                        x: t - (z.normal.width + z.xOffset) - z.padding,
                        y: n - (z.normal.height + z.yOffset) - z.padding
                    }),
                    e.current.updateSize({
                        width: z.normal.width,
                        height: z.normal.height
                    })
                }
            }, []);
            var y = (0,
            l._)((0,
            u.useState)(!1), 2)
              , C = y[0]
              , M = y[1]
              , W = function() {
                C || M(!0)
            }
              , B = function() {
                C && M(!1)
            }
              , R = (0,
            N.AA)()
              , I = (0,
            N.JP)()
              , Z = (0,
            l._)((0,
            u.useState)(!1), 2)
              , S = Z[0]
              , q = Z[1]
              , E = (0,
            u.useMemo)(function() {
                return R ? (0,
                N.j7)(R) + 1 : 0
            }, [R])
              , O = (0,
            u.useMemo)(function() {
                return R ? (0,
                N.BC)() : 0
            }, [R]);
            (0,
            u.useEffect)(function() {
                q(!1)
            }, [R, q]);
            var A = function() {
                j ? i.vm.hideLatencyDevTools() : i.vm.showLatencyDevTools()
            };
            if (!j)
                return null;
            var P = Object.keys(I).length > 1;
            return (0,
            s.jsx)(m.E.div, {
                initial: {
                    opacity: 0
                },
                transition: {
                    delay: 1,
                    duration: .2
                },
                animate: {
                    opacity: 1,
                    transition: {
                        duration: .2,
                        ease: "easeIn"
                    }
                },
                exit: {
                    opacity: 0,
                    transition: {
                        duration: .2,
                        ease: "easeIn"
                    }
                },
                children: (0,
                s.jsx)(h.s, {
                    disableDragging: C,
                    ref: e,
                    style: {
                        zIndex: z.zIndex,
                        width: z.normal.width,
                        height: z.normal.height
                    },
                    className: (0,
                    r.default)("transition-delay group relative flex h-full flex-col overflow-hidden rounded-md border-2 border-gray-500 bg-gray-50 opacity-80 shadow-md transition-opacity delay-100 hover:opacity-100 hover:delay-0 dark:border-white dark:bg-gray-900"),
                    children: R ? (0,
                    s.jsxs)(s.Fragment, {
                        children: [(0,
                        s.jsx)("div", {
                            className: "flex flex-row items-center border-b border-gray-700 py-1 dark:border-gray-300",
                            children: (0,
                            s.jsxs)("div", {
                                className: "flex w-full flex-row items-center justify-end",
                                children: [(0,
                                s.jsxs)("div", {
                                    className: "flex w-full flex-row items-center justify-between px-3 ",
                                    children: [(0,
                                    s.jsx)(v.z, {
                                        disabled: !P,
                                        className: "whitespace-nowrap !px-1.5 !py-0.5 text-xs",
                                        loading: S,
                                        color: "neutral",
                                        size: "small",
                                        as: "button",
                                        onClick: function() {
                                            q(!0),
                                            (0,
                                            N.WD)((0,
                                            N.iZ)(R))
                                        },
                                        children: (0,
                                        s.jsx)(g.YFh, {
                                            className: "icon-sm"
                                        })
                                    }), (0,
                                    s.jsxs)("span", {
                                        className: "flex flex-row items-center justify-center space-x-2 truncate whitespace-nowrap text-xs font-medium uppercase text-gray-800 dark:text-gray-200",
                                        children: [(0,
                                        s.jsxs)("span", {
                                            className: "inline-flex items-center gap-x-1.5 rounded-full bg-yellow-100 px-1.5 py-0.5 text-xs font-medium text-yellow-800",
                                            children: [(0,
                                            s.jsx)("svg", {
                                                className: "h-1.5 w-1.5 fill-yellow-500",
                                                viewBox: "0 0 6 6",
                                                "aria-hidden": "true",
                                                children: (0,
                                                s.jsx)("circle", {
                                                    cx: 3,
                                                    cy: 3,
                                                    r: 3
                                                })
                                            }), "".concat(E, " / ").concat(O)]
                                        }), (0,
                                        s.jsx)(p.Z, (0,
                                        a._)((0,
                                        o._)({}, _.node), {
                                            values: {
                                                focusedNodeId: R
                                            }
                                        }))]
                                    }), (0,
                                    s.jsx)(v.z, {
                                        disabled: !P,
                                        className: "whitespace-nowrap !px-1.5 !py-0.5 text-xs",
                                        loading: S,
                                        color: "neutral",
                                        size: "small",
                                        as: "button",
                                        onClick: function() {
                                            q(!0),
                                            (0,
                                            N.WD)((0,
                                            N.Q7)(R))
                                        },
                                        children: (0,
                                        s.jsx)(g.Tfp, {
                                            className: "icon-sm"
                                        })
                                    })]
                                }), (0,
                                s.jsx)(v.z, {
                                    color: "none",
                                    size: "small",
                                    as: "button",
                                    onClick: function() {
                                        return A()
                                    },
                                    className: "whitespace-nowrap !pr-2",
                                    children: (0,
                                    s.jsx)(g.q5L, {
                                        className: "icon-sm"
                                    })
                                })]
                            })
                        }), w && (0,
                        s.jsxs)(s.Fragment, {
                            children: [(0,
                            s.jsx)("div", {
                                ref: x,
                                className: "min-w-20 h-full w-full space-y-2 overflow-scroll p-1 pb-12",
                                children: (0,
                                s.jsxs)("div", {
                                    className: (0,
                                    r.default)("col-span-1 grid gap-1"),
                                    children: [(0,
                                    s.jsx)("div", {
                                        onMouseMove: W,
                                        onMouseEnter: W,
                                        onMouseLeave: B,
                                        onMouseOut: B,
                                        onMouseUp: B,
                                        children: (0,
                                        s.jsx)(k, {
                                            parentDimensions: {
                                                width: d,
                                                height: c
                                            },
                                            targetLatencyData: w
                                        })
                                    }), (0,
                                    s.jsx)(T, {}), (0,
                                    s.jsx)(D, {})]
                                })
                            }), (0,
                            s.jsx)(L, {
                                resizableRef: e
                            })]
                        })]
                    }) : (0,
                    s.jsxs)(s.Fragment, {
                        children: [(0,
                        s.jsx)("div", {
                            className: "font-lg flex h-full flex-col items-center justify-center text-lg",
                            children: (0,
                            s.jsx)(p.Z, (0,
                            o._)({}, _.initiateCompletionRequest))
                        }), (0,
                        s.jsx)(L, {
                            resizableRef: e
                        })]
                    })
                })
            })
        }
        var D = function() {
            return (0,
            s.jsx)("div", {})
        }
          , T = function() {
            var e = (0,
            b.gj)().stats;
            return (0,
            s.jsxs)("div", {
                className: "space-y-3 overflow-scroll px-3",
                children: [(0,
                s.jsx)("div", {
                    className: "border-b pb-3",
                    children: (0,
                    s.jsx)(M, {
                        size: "large",
                        stats: e.filter(function(e) {
                            return "summary" == e.category
                        })
                    })
                }), (0,
                s.jsx)(M, {
                    stats: e.filter(function(e) {
                        return "token" == e.category
                    })
                }), (0,
                s.jsx)(M, {
                    stats: e.filter(function(e) {
                        return "aggregate" == e.category
                    })
                })]
            })
        }
          , M = function(e) {
            var t = e.stats
              , n = e.size
              , i = void 0 === n ? "normal" : n;
            return (0,
            s.jsx)("div", {
                className: "flex flex-wrap gap-3",
                children: t.map(function(e) {
                    return e.stat && (0,
                    s.jsx)("div", {
                        className: "col-span-1",
                        children: (0,
                        s.jsxs)("div", {
                            className: (0,
                            r.default)("overflow-hidden bg-white shadow dark:bg-gray-800 ", {
                                "rounded px-2 py-1 sm:p-2": "normal" == i,
                                "rounded-lg px-2 py-3 sm:p-3": "large" == i
                            }),
                            children: [(0,
                            s.jsx)("dt", {
                                className: (0,
                                r.default)("truncate  text-gray-500 dark:text-gray-100", {
                                    "text-xs font-medium": "normal" == i,
                                    "text-sm font-medium": "large" == i
                                }),
                                children: e.name
                            }), (0,
                            s.jsx)("dd", {
                                className: (0,
                                r.default)("mt-1  text-gray-900 dark:text-blue-200", {
                                    "text-base font-semibold tracking-tight": "normal" == i,
                                    "text-xl font-semibold tracking-tight": "large" == i
                                }),
                                children: e.stat
                            })]
                        })
                    }, e.name)
                })
            })
        }
          , L = function(e) {
            var t = e.resizableRef
              , n = (0,
            w.Z)()
              , a = function(e) {
                var n = window.innerWidth
                  , s = window.innerHeight
                  , i = {
                    "up-left": {
                        x: 0,
                        y: 0
                    },
                    "down-right": {
                        x: n - z.normal.width - z.padding,
                        y: s - z.normal.height - z.padding
                    },
                    "down-left": {
                        x: 0,
                        y: s - z.normal.height - z.padding
                    },
                    "up-right": {
                        x: n - z.normal.width - z.padding,
                        y: 0
                    }
                };
                t.current && (t.current.updatePosition({
                    x: i[e].x,
                    y: i[e].y
                }),
                t.current.updateSize({
                    width: z.normal.width,
                    height: z.normal.height
                }))
            }
              , l = function() {
                i.vm.hideLatencyDevTools()
            };
            return (0,
            s.jsxs)("div", {
                className: "sticky bottom-0 z-50 flex w-full flex-row justify-between border-t border-gray-400 bg-white p-2 dark:bg-gray-900",
                children: [(0,
                s.jsxs)("div", {
                    className: "flex flex-row gap-3",
                    children: [(0,
                    s.jsx)(y.u, {
                        label: n.formatMessage(_.dragAndResizeTooltip),
                        className: "item-center flex flex-col justify-center pl-2 pr-1",
                        children: (0,
                        s.jsx)(g.uWH, {
                            className: "icon-sm"
                        })
                    }), (0,
                    s.jsxs)("div", {
                        className: "flex flex-row space-x-1",
                        children: [(0,
                        s.jsx)(v.z, {
                            color: "neutral",
                            size: "small",
                            as: "button",
                            onClick: function() {
                                return a("down-left")
                            },
                            children: (0,
                            s.jsx)(g.hr3, {
                                className: "icon-sm"
                            })
                        }), (0,
                        s.jsx)(v.z, {
                            color: "neutral",
                            size: "small",
                            as: "button",
                            onClick: function() {
                                return a("up-left")
                            },
                            children: (0,
                            s.jsx)(g.Zuc, {
                                className: "icon-sm"
                            })
                        }), (0,
                        s.jsx)(v.z, {
                            color: "neutral",
                            size: "small",
                            as: "button",
                            onClick: function() {
                                return a("up-right")
                            },
                            children: (0,
                            s.jsx)(g.TKU, {
                                className: "icon-sm"
                            })
                        }), (0,
                        s.jsx)(v.z, {
                            color: "neutral",
                            size: "small",
                            as: "button",
                            onClick: function() {
                                return a("down-right")
                            },
                            children: (0,
                            s.jsx)(g.Gx, {
                                className: "icon-sm"
                            })
                        })]
                    }), (0,
                    s.jsxs)("div", {
                        className: "flex flex-row space-x-1",
                        children: [(0,
                        s.jsx)(v.z, {
                            color: "neutral",
                            size: "small",
                            as: "button",
                            onClick: function() {
                                var e;
                                null === (e = t.current) || void 0 === e || e.updateSize({
                                    width: z.small.width,
                                    height: z.small.height
                                })
                            },
                            children: (0,
                            s.jsx)(p.Z, (0,
                            o._)({}, _.shrinkButton))
                        }), (0,
                        s.jsx)(v.z, {
                            color: "neutral",
                            size: "small",
                            as: "button",
                            onClick: function() {
                                var e;
                                null === (e = t.current) || void 0 === e || e.updateSize({
                                    width: z.normal.width,
                                    height: z.normal.height
                                })
                            },
                            children: (0,
                            s.jsx)(p.Z, (0,
                            o._)({}, _.growButton))
                        })]
                    })]
                }), (0,
                s.jsx)("div", {
                    className: "flex flex-row justify-end gap-3",
                    children: (0,
                    s.jsx)(v.z, {
                        color: "none",
                        size: "small",
                        as: "button",
                        onClick: function() {
                            return l()
                        },
                        className: "whitespace-nowrap !pr-2",
                        children: (0,
                        s.jsx)(p.Z, (0,
                        o._)({}, _.closeButton))
                    })
                })]
            })
        }
          , _ = (0,
        j.vU)({
            loading: {
                id: "CompletionDevToolsWidget.loading",
                description: "Loading message shown while the CompletionDevToolsPlot is being fetched",
                defaultMessage: "Loading..."
            },
            node: {
                id: "CompletionDevToolsWidget.node",
                description: "Label for the active message ID in the completion request",
                defaultMessage: "Node: {focusedNodeId}"
            },
            initiateCompletionRequest: {
                id: "CompletionDevToolsWidget.initiateCompletionRequest",
                description: "Text shown when there is no active completion request to use the feature",
                defaultMessage: "Initiate a completion request to use this feature"
            },
            shrinkButton: {
                id: "CompletionDevToolsWidget.shrinkButton",
                description: "Label for the Shrink button in the DevtoolToolbar",
                defaultMessage: "Shrink"
            },
            growButton: {
                id: "CompletionDevToolsWidget.growButton",
                description: "Label for the Grow button in the DevtoolToolbar",
                defaultMessage: "Grow"
            },
            closeButton: {
                id: "CompletionDevToolsWidget.closeButton",
                description: "Label for the Close button in the DevtoolToolbar",
                defaultMessage: "Close"
            },
            dragAndResizeTooltip: {
                id: "CompletionDevToolsWidget.dragAndResizeTooltip",
                description: "Tooltip text for the drag and resize icon",
                defaultMessage: "This widget can be dragged and resized"
            }
        })
          , W = function() {
            return (0,
            i.tN)(i.bM.isLatencyDevtoolsVisible) ? (0,
            s.jsx)(C, {}) : null
        }
    }
}]);
