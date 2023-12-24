"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[1771], {
    60638: function(e, t, n) {
        n.d(t, {
            kd: function() {
                return a
            },
            Oq: function() {
                return l
            },
            gj: function() {
                return d
            }
        });
        var r, a, o = n(61888), i = n(45021);
        function s(e, t) {
            var n = e.slice().sort(function(e, t) {
                return e - t
            })
              , r = t * (n.length - 1)
              , a = Math.floor(r)
              , o = Math.ceil(r);
            if (a === o)
                return n[a];
            var i = r - a;
            return (1 - i) * n[a] + i * n[o]
        }
        (r = a || (a = {})).FirstTokenLatency = "first_token_lat",
        r.TotalRequestTime = "total_request_time",
        r.TokenCount = "token_count",
        r.StdDevTokenLatency = "std_dev_token_lat",
        r.MeanTokenLatency = "mean_token_lat",
        r.MedianTokenLatency = "median_token_lat",
        r.MinTokenLatency = "min_token_lat",
        r.MaxTokenLatency = "max_token_lat",
        r.P95TokenLatency = "p95_token_lat",
        r.P99TokenLatency = "p99_token_lat";
        var l = function(e) {
            var t, n = e.filter(function(e) {
                return e.requestCount > 1
            }), r = e.length ? e[0] : null, i = s(n.map(function(e) {
                return e.lastTokenDuration
            }), .95), l = s(n.map(function(e) {
                return e.lastTokenDuration
            }), .99), d = (0,
            o.mean)(n.map(function(e) {
                return e.lastTokenDuration
            })), c = function(e) {
                if (0 === e.length)
                    return null;
                var t = e.slice().sort(function(e, t) {
                    return e - t
                })
                  , n = Math.floor(t.length / 2);
                return t.length % 2 == 0 ? (t[n - 1] + t[n]) / 2 : t[n]
            }(n.map(function(e) {
                return e.lastTokenDuration
            })), u = n.filter(function(e) {
                return 0 !== e.lastTokenDuration
            }).reduce(function(e, t) {
                return Math.min(e, t.lastTokenDuration)
            }, 1 / 0), m = n.reduce(function(e, t) {
                return Math.max(e, t.lastTokenDuration)
            }, -1 / 0), f = function(e) {
                var t = e.length;
                if (0 === t)
                    return 0;
                var n = (0 === e.length ? null : e.reduce(function(e, t) {
                    return e + t
                }, 0) / e.length) || 0;
                return Math.sqrt(e.reduce(function(e, t) {
                    return e + Math.pow(t - n, 2)
                }, 0) / t)
            }(n.map(function(e) {
                return e.lastTokenDuration
            })), h = null === (t = e[e.length - 1]) || void 0 === t ? void 0 : t.requestDuration;
            return [{
                id: a.FirstTokenLatency,
                name: "First Token lat.",
                stat: r ? "".concat(r.lastTokenDuration.toFixed(2), "ms") : null,
                value: r ? r.lastTokenDuration : null,
                category: "summary"
            }, {
                id: a.TotalRequestTime,
                name: "Total request time",
                stat: h ? "".concat((h / 1e3).toFixed(2), "s") : null,
                value: h || null,
                category: "summary"
            }, {
                id: a.TokenCount,
                name: "Token count",
                stat: "".concat(e.length),
                value: e.length,
                category: "summary"
            }, {
                id: a.StdDevTokenLatency,
                name: "Std dev Token lat.",
                stat: "".concat(f.toFixed(2)),
                value: f,
                category: "token"
            }, {
                id: a.MeanTokenLatency,
                name: "Mean Token lat.",
                stat: d ? "".concat(d.toFixed(2), "ms") : null,
                value: null != d ? d : null,
                category: "aggregate"
            }, {
                id: a.MedianTokenLatency,
                name: "Median Token lat.",
                stat: c ? "".concat(c.toFixed(2), "ms") : null,
                value: null != c ? c : null,
                category: "token"
            }, {
                id: a.MinTokenLatency,
                name: "Min Token lat.",
                stat: "".concat(u.toFixed(2), "ms"),
                value: null != u ? u : null,
                category: "token"
            }, {
                id: a.MaxTokenLatency,
                name: "Max Token lat.",
                stat: "".concat(m.toFixed(2), "ms"),
                value: null != m ? m : null,
                category: "token"
            }, {
                id: a.P95TokenLatency,
                name: "p95 Token lat.",
                stat: i ? "".concat(i.toFixed(2), "ms") : null,
                value: null != i ? i : null,
                category: "aggregate"
            }, {
                id: a.P99TokenLatency,
                name: "p99 Token lat.",
                stat: l ? "".concat(l.toFixed(2), "ms") : null,
                value: null != l ? l : null,
                category: "aggregate"
            }]
        }
          , d = function() {
            var e, t = (0,
            i.JP)(), n = (0,
            i.AA)();
            if (!t || !n)
                return {
                    stats: [],
                    targetLatencyData: []
                };
            var r = t[n]
              , a = null !== (e = null == r ? void 0 : r.data) && void 0 !== e ? e : [];
            return {
                stats: l(a),
                targetLatencyData: a
            }
        }
    },
    45021: function(e, t, n) {
        n.d(t, {
            AA: function() {
                return T
            },
            Ae: function() {
                return h
            },
            BC: function() {
                return M
            },
            F4: function() {
                return f
            },
            JP: function() {
                return w
            },
            Q7: function() {
                return b
            },
            WD: function() {
                return x
            },
            gL: function() {
                return g
            },
            iZ: function() {
                return y
            },
            j7: function() {
                return k
            },
            kn: function() {
                return v
            }
        });
        var r = n(96237)
          , a = n(39324)
          , o = n(71209)
          , i = n(64502)
          , s = n(86646)
          , l = n(78103)
          , d = n(60638)
          , c = (0,
        l.ZP)(function() {
            return {
                messagesDevData: {},
                activeNodeId: void 0,
                ui: {
                    focusedNodeId: void 0
                }
            }
        })
          , u = c.getState
          , m = c.setState
          , f = function(e, t, n, i) {
            m(function(s) {
                return (0,
                o._)((0,
                a._)({}, s), {
                    activeNodeId: e,
                    ui: {
                        focusedNodeId: e
                    },
                    messagesDevData: (0,
                    o._)((0,
                    a._)({}, s.messagesDevData), (0,
                    r._)({}, e, {
                        status: "active",
                        data: [],
                        model: t,
                        serverRequestId: n,
                        preflightTime: i
                    }))
                })
            })
        }
          , h = function(e, t) {
            m(function(n) {
                var s = n.messagesDevData[e];
                return (0,
                o._)((0,
                a._)({}, n), {
                    activeNodeId: e,
                    messagesDevData: (0,
                    o._)((0,
                    a._)({}, n.messagesDevData), (0,
                    r._)({}, e, (0,
                    o._)((0,
                    a._)({}, s), {
                        data: (0,
                        i._)(s.data).concat([t])
                    })))
                })
            })
        }
          , p = function(e, t) {
            var n;
            return null === (n = t.find(function(t) {
                return t.id === e
            })) || void 0 === n ? void 0 : n.value
        }
          , g = function(e) {
            var t = w()[e]
              , n = (0,
            d.Oq)(t.data)
              , r = t.preflightTime
              , a = {
                model: t.model,
                serverRequestId: t.serverRequestId,
                preflightTime: r,
                countTokens: p(d.kd.TokenCount, n),
                tsFirstToken: p(d.kd.FirstTokenLatency, n),
                tsMaxTokenTime: p(d.kd.MaxTokenLatency, n),
                tsMeanTokenWithoutFirst: p(d.kd.MeanTokenLatency, n),
                tsMedianTokenWithoutFirst: p(d.kd.MedianTokenLatency, n),
                tsMinTokenTime: p(d.kd.MinTokenLatency, n),
                tsStdDevTokenTime: p(d.kd.StdDevTokenLatency, n),
                tsP95TokenWithoutFirst: p(d.kd.P95TokenLatency, n),
                tsP99TokenWithoutFirst: p(d.kd.P99TokenLatency, n),
                tsTotalRequestTime: p(d.kd.TotalRequestTime, n)
            };
            s.ZP.postLatencyTimingEvent(a)
        }
          , v = function(e) {
            return m(function(t) {
                var n = (0,
                o._)((0,
                a._)({}, t.messagesDevData[e]), {
                    status: "finished"
                });
                return (0,
                o._)((0,
                a._)({}, t), {
                    messagesDevData: (0,
                    o._)((0,
                    a._)({}, t.messagesDevData), (0,
                    r._)({}, e, n))
                })
            })
        }
          , x = function(e) {
            return m(function(t) {
                return (0,
                o._)((0,
                a._)({}, t), {
                    ui: (0,
                    o._)((0,
                    a._)({}, t.ui), {
                        focusedNodeId: e
                    })
                })
            })
        };
        function b(e) {
            var t = Object.keys(w())
              , n = t.indexOf(e);
            if (-1 === n)
                throw Error("Key not found in object");
            var r = (n + 1) % t.length;
            return t[r]
        }
        function y(e) {
            var t = Object.keys(w())
              , n = t.indexOf(e);
            if (-1 === n)
                throw Error("Key not found in object");
            var r = (n - 1 + t.length) % t.length;
            return t[r]
        }
        function k(e) {
            return Object.keys(w()).indexOf(e)
        }
        var M = function() {
            return Object.keys(w()).length
        }
          , w = function() {
            return u().messagesDevData
        }
          , T = function() {
            return u().ui.focusedNodeId
        }
    },
    95413: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return M
            }
        });
        var r = n(39324)
          , a = n(4337)
          , o = n(35250)
          , i = n(7813)
          , s = n(55548)
          , l = n(17944)
          , d = n(54636)
          , c = n(42780)
          , u = n(38574)
          , m = n(19841)
          , f = n(1454)
          , h = n(32004)
          , p = n(94968)
          , g = n(21389)
          , v = n(31731)
          , x = n(72290);
        function b() {
            var e = (0,
            a._)(["flex px-3 min-h-[44px] py-1 items-center gap-3 transition-colors duration-200 dark:text-white cursor-pointer text-sm"]);
            return b = function() {
                return e
            }
            ,
            e
        }
        var y = g.Z.a(b());
        function k(e) {
            var t = e.onClick
              , n = e.href
              , r = e.target
              , a = e.children;
            return (0,
            o.jsx)(i.v.Item, {
                children: function(e) {
                    var i = e.active;
                    return (0,
                    o.jsx)(y, {
                        as: void 0 !== n ? "a" : "button",
                        onClick: t,
                        href: n,
                        target: r,
                        className: (0,
                        m.default)(i ? "bg-gray-100 dark:bg-gray-800" : "hover:bg-gray-100 dark:hover:bg-gray-800"),
                        children: a
                    })
                }
            })
        }
        function M() {
            var e = (0,
            l.aF)();
            return (0,
            o.jsxs)(i.v, {
                as: "div",
                className: "group relative",
                children: [(0,
                o.jsx)(i.v.Button, {
                    className: "flex items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-gray-600 dark:border-white/10 dark:bg-white/10 dark:text-gray-200",
                    children: (0,
                    o.jsx)("div", {
                        className: "flex h-6 w-6 items-center justify-center text-xs",
                        children: "?"
                    })
                }), (0,
                o.jsx)(v.m, {
                    children: (0,
                    o.jsxs)(i.v.Items, {
                        className: "absolute bottom-full right-0 z-20 mb-2 w-full min-w-[175px] overflow-hidden rounded-md bg-gray-50 pb-1.5 pt-1 outline-none dark:bg-gray-950",
                        children: [e && (0,
                        o.jsx)(k, {
                            onClick: function() {
                                (0,
                                u.S)(null == e ? void 0 : e.id).then(function() {
                                    x.m.success("Copied your User ID to clipboard")
                                })
                            },
                            children: (0,
                            o.jsx)("span", {
                                className: "truncate text-xs text-black/20 dark:text-white/30",
                                children: null == e ? void 0 : e.email
                            })
                        }), (0,
                        o.jsxs)(k, {
                            as: "a",
                            href: "https://pandoranext.com",
                            target: "_blank",
                            onClick: function() {
                                d.A.logEvent(c.M.clickFaqLink)
                            },
                            children: [(0,
                            o.jsx)(f.AlO, {
                                className: "icon-sm"
                            }), (0,
                            o.jsx)("span", {
                                className: "text-xs",
                                children: (0,
                                o.jsx)(h.Z, (0,
                                r._)({}, w.helpAndFaq))
                            })]
                        }), !1 && (0,
                        o.jsxs)(k, {
                            as: "a",
                            href: "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
                            target: "_blank",
                            children: [(0,
                            o.jsx)(f.AlO, {
                                className: "icon-sm"
                            }), (0,
                            o.jsx)("span", {
                                className: "text-xs",
                                children: (0,
                                o.jsx)(h.Z, (0,
                                r._)({}, w.releaseNotes))
                            })]
                        }), !1 && (0,
                        o.jsxs)(k, {
                            as: "a",
                            href: "https://openai.com/policies",
                            target: "_blank",
                            onClick: function() {
                                d.A.logEvent(c.M.clickPrivacyPolicy)
                            },
                            children: [(0,
                            o.jsx)(f.AlO, {
                                className: "icon-sm"
                            }), (0,
                            o.jsx)("span", {
                                className: "text-xs",
                                children: (0,
                                o.jsx)(h.Z, (0,
                                r._)({}, w.termsAndPolicies))
                            })]
                        }), (0,
                        o.jsxs)(k, {
                            onClick: function() {
                                s.vm.openModal(s.B.KeyboardActions)
                            },
                            children: [(0,
                            o.jsx)(f.aCJ, {
                                className: "icon-sm"
                            }), (0,
                            o.jsx)("span", {
                                className: "text-xs",
                                children: (0,
                                o.jsx)(h.Z, (0,
                                r._)({}, w.keyboardShortcutsMenu))
                            })]
                        })]
                    })
                })]
            })
        }
        var w = (0,
        p.vU)({
            helpAndFaq: {
                id: "thread.helpAndFaq",
                defaultMessage: "About PandoraNext",
                description: "About menu item"
            },
            releaseNotes: {
                id: "thread.releaseNotes",
                defaultMessage: "Release notes",
                description: "Release notes menu item"
            },
            termsAndPolicies: {
                id: "thread.termsAndPolicies",
                defaultMessage: "Terms & policies",
                description: "Terms & Policies menu item"
            },
            keyboardShortcutsMenu: {
                id: "thread.keyboardShortcutsMenu",
                defaultMessage: "Keyboard shortcuts",
                description: "Keyboard shortcuts menu item"
            }
        })
    },
    71771: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return nH
            }
        });
        var r, a, o = n(21722), i = n(39324), s = n(71209), l = n(70216), d = n(10064), c = n(4337), u = n(38104), m = n(35250), f = n(21950), h = n(2064), p = n(4536), g = n(54636), v = n(42780), x = n(5397), b = n.n(x), y = n(29124), k = n.n(y), M = n(73040), w = n.n(M), T = n(10721), j = n(70079), C = n(1454), _ = n(13002), I = n(22584), N = n(94968), S = n(32004), R = n(70671), P = n(21389), D = n(8844), A = n(61098), L = n(86646), Z = n(62682), E = n(66638), q = n(72871), B = n(55548), F = n(17944), U = n(25687), z = n(1491), O = n(86925), G = n(18481), Q = n(39368), H = n(48133), W = n(41955), V = n(84056), J = n(64502), Y = n(19841), K = n(91530), $ = n.n(K), X = n(2827), ee = n(15066), et = n(13205), en = n(66306), er = n(94705), ea = n(7184), eo = n(15635), ei = n(72290);
        function es() {
            var e = (0,
            c._)(["mb-2 mt-auto ml-auto mr-auto"]);
            return es = function() {
                return e
            }
            ,
            e
        }
        function el() {
            var e = (0,
            c._)(["relative rounded-md border border-black/10 bg-gray-50 dark:border-gray-900/50 dark:bg-[#444654] flex flex-col overflow-hidden"]);
            return el = function() {
                return e
            }
            ,
            e
        }
        function ed() {
            var e = (0,
            c._)(["mb-5 border dark:bg-gray-800 overflow-hidden"]);
            return ed = function() {
                return e
            }
            ,
            e
        }
        function ec() {
            var e = (0,
            c._)([""]);
            return ec = function() {
                return e
            }
            ,
            e
        }
        var eu = (0,
        N.vU)({
            submitFeedback: {
                id: "feedbackModal.submitFeedback",
                defaultMessage: "Submit feedback",
                description: "Button text for submitting the feedback"
            },
            submitReport: {
                id: "feedbackModal.submitReport",
                defaultMessage: "Submit report",
                description: "Button text for submitting a content-moderation report"
            },
            submitRejectModeration: {
                id: "feedbackModal.moderationReject",
                defaultMessage: "Block Content",
                description: "Button text for rejecting the share link and blocking it from being viewed"
            },
            submitAcceptModeration: {
                id: "feedbackModal.moderationAccept",
                defaultMessage: "Allow Content",
                description: "Button text for accepting the share link and allowing it to be viewed"
            },
            thumbsUpPlaceholder: {
                id: "feedbackModal.thumbsUpPlaceholder",
                defaultMessage: "What do you like about the response?",
                description: "Placeholder for textarea input when user chooses thumbs up"
            },
            thumbsDownPlaceholder: {
                id: "feedbackModal.thumbsDownPlaceholder",
                defaultMessage: "What was the issue with the response? How could it be improved?",
                description: "Placeholder for textarea input when user chooses thumbs down"
            },
            reportContentExplanationPlaceholder: {
                id: "feedbackModal.reportContentExplanationPlaceholder",
                defaultMessage: "What is wrong with the response? What about this response is harmful? Please be as specific as possible, and add any details that are not present in the checkboxes below.",
                description: "Placeholder for textarea input when user chooses to report a shared chat"
            },
            harmfulUnsafe: {
                id: "feedbackModal.harmfulUnsafe",
                defaultMessage: "This is harmful / unsafe",
                description: "Label for harmful/unsafe checkbox"
            },
            harmfulOffensive: {
                id: "feedbackModal.harmfulOffensive",
                defaultMessage: "This content is harmful or offensive",
                description: "Label for harmful/offensive checkbox"
            },
            copyrightContent: {
                id: "feedbackModal.copyrightContent",
                defaultMessage: "This content violates copyright law",
                description: "Label for Copyrighted Content checkbox"
            },
            reportOtherContent: {
                id: "feedbackModal.reportOtherContent",
                defaultMessage: "I don't like this for some other reason (please describe)",
                description: "Label for Report Other Content checkbox"
            },
            notTrue: {
                id: "feedbackModal.notTrue",
                defaultMessage: "This isn't true",
                description: "Label for not true checkbox"
            },
            notHelpful: {
                id: "feedbackModal.notHelpful",
                defaultMessage: "This isn't helpful",
                description: "Label for not helpful checkbox"
            },
            dontLikeThis: {
                id: "feedbackModal.dontLikeThis",
                defaultMessage: "I don't like this",
                description: "Label for I Don't Like This checkbox"
            },
            sexualAbuse: {
                id: "feedbackModal.sexualAbuse",
                defaultMessage: "This content contains sexual abuse",
                description: "Label for Sexual Abuse checkbox"
            },
            provideAdditionalFeedback: {
                id: "feedbackModal.provideAdditionalFeedback",
                defaultMessage: "Provide additional feedback",
                description: "Title for the critique feedback modal"
            },
            provideReportModalTitle: {
                id: "feedbackModal.provideReportModalTitle",
                defaultMessage: "Report This Content",
                description: "Title for the 'report' feedback modal"
            },
            pickBestAnswer: {
                id: "feedbackModal.pickBestAnswer",
                defaultMessage: "Pick the best answer to improve the model",
                description: "Title for the compare feedback modal"
            },
            newAnswer: {
                id: "feedbackModal.newAnswer",
                defaultMessage: "New Answer",
                description: "Title for the new answer during comparison"
            },
            originalAnswer: {
                id: "feedbackModal.originalAnswer",
                defaultMessage: "Original Answer",
                description: "Title for the original answer during comparison"
            },
            newAnswerBetter: {
                id: "feedbackModal.newAnswerBetter",
                defaultMessage: "New answer is better",
                description: "Button text for choosing new answer during comparison"
            },
            originalAnswerBetter: {
                id: "feedbackModal.originalAnswerBetter",
                defaultMessage: "Original answer is better",
                description: "Button text for choosing original answer during comparison"
            },
            neitherAnswerBetter: {
                id: "feedbackModal.neitherAnswerBetter",
                defaultMessage: "Neither answer is better",
                description: "Button text for choosing neither answer during comparison"
            },
            skipStep: {
                id: "feedbackModal.skipStep",
                defaultMessage: "Skip this step",
                description: "Button text for skipping comparison step"
            },
            continueWithChosenAnswer: {
                id: "feedbackModal.continueWithChosenAnswer",
                defaultMessage: "The conversation will continue with the answer you choose.",
                description: "Information text for user during comparison"
            },
            employeeConsent: {
                id: "feedbackModal.employeeConsent",
                defaultMessage: "Allow this content to be used for model evals",
                description: "Open AI employee is consenting to allow this content to be used in evals"
            },
            employeeConsentExplanation: {
                id: "feedbackModal.employeeConsentExplanation",
                defaultMessage: "Allow your feedback and conversation to be used to in model evals. Please verify there is no confidential data in the conversation.",
                description: "Explanation for employee consent checkbox"
            }
        });
        function em(e) {
            var t, n, r, a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return (null == e ? void 0 : null === (t = e.messages) || void 0 === t ? void 0 : t.length) === 1 && !(null == e ? void 0 : null === (n = e.messages) || void 0 === n ? void 0 : n.some(function(e) {
                return "error"in e
            })) && (!a || !((null == e ? void 0 : null === (r = e.messages) || void 0 === r ? void 0 : r.length) === 1 && (0,
            O.RR)(null == e ? void 0 : e.messages[0].message).length < 20))
        }
        function ef(e) {
            var t, n, r = e.ratingModalNodeId, a = e.ratingModalOpen, o = e.onCloseRatingModal, s = e.onSubmitFeedback, l = e.onHandleChangeFeedbackComparisonRating, c = e.feedbackTextareaRef, u = e.clientThreadId, f = e.currentModelId, h = e.onChangeItemInView, x = e.onRequestMoreCompletions, b = e.onRequestCompletion, y = (0,
            R.Z)(), k = E.tQ.getTree(u), M = (0,
            E.XK)(u), w = (0,
            F.aF)(), T = !!w && (0,
            p.yl)(w), _ = (0,
            d._)((0,
            j.useState)(!1), 2), I = _[0], N = _[1];
            (0,
            j.useEffect)(function() {
                "report" === a && p.pg.forceEnableSession()
            }, [a]);
            var P = (0,
            j.useRef)(.5 > Math.random() ? "left" : "right")
              , D = null == k ? void 0 : k.getConversationTurns(r || "root")
              , A = D.length - 1
              , Z = D[D.length - 1]
              , q = (0,
            d._)((0,
            j.useState)("critique"), 2)
              , B = q[0]
              , U = q[1]
              , O = (0,
            z.w$)()
              , G = em(Z, !0) && O
              , Q = (0,
            j.useMemo)(function() {
                return {
                    id: r || "root",
                    threadId: E.tQ.getServerThreadId(u),
                    rating: a,
                    model: f
                }
            }, [r, u, a, f])
              , H = null == D ? void 0 : D[(null == D ? void 0 : D.length) - 1].variantIds
              , V = null == H ? void 0 : H[(null == H ? void 0 : H.length) - 1]
              , K = (n = (t = null == k ? void 0 : k.getConversationTurns(V))[t.length - 1]).messages[n.messages.length - 1].nodeId
              , es = null == k ? void 0 : k.getConversationTurns(K)
              , el = (0,
            j.useMemo)(function() {
                var e = null == es ? void 0 : es[(null == es ? void 0 : es.length) - 1];
                return "thumbsDown" === a && G && em(e) && em(Z)
            }, [a, G, es, Z])
              , ed = (0,
            j.useRef)(Date.now())
              , ec = (0,
            j.useRef)(-1)
              , ef = (0,
            j.useRef)(Date.now())
              , ex = (0,
            j.useRef)(Date.now());
            (0,
            j.useEffect)(function() {
                "compare" === B ? (ec.current = Date.now(),
                g.A.logEvent(v.M.displayedComparisonUIV0, Q)) : "critique" === B && "thumbsDown" === a && g.A.logEvent(v.M.displayedThumbsDownFeedbackForm, Q)
            }, [B]);
            var eb = D.length - 2
              , ey = es.length - 1
              , ek = es[es.length - 1]
              , eM = (0,
            j.useMemo)(function() {
                return ek && ee.Cv.getRequestIdFromConversationTurn(ek)
            }, [ek])
              , ew = (0,
            W.Yk)(eM);
            (0,
            j.useMemo)(function() {
                ew || (ex.current = Date.now())
            }, [ew]);
            var eT = Z.messages
              , ej = eT[eT.length - 1]
              , eC = ej.message.id
              , e_ = ej.nodeId
              , eI = k.getLeafFromNode(e_)
              , eN = ek.messages
              , eS = eN[eN.length - 1]
              , eR = eS.message.id
              , eP = eS.nodeId
              , eD = k.getLeafFromNode(eP)
              , eA = "critique" === B ? "report" === a ? y.formatMessage(eu.provideReportModalTitle) : y.formatMessage(eu.provideAdditionalFeedback) : y.formatMessage(eu.pickBestAnswer)
              , eL = (0,
            j.useRef)([])
              , eZ = (0,
            j.useRef)("")
              , eE = (0,
            j.useCallback)(function() {
                var e, t = null === (e = c.current) || void 0 === e ? void 0 : e.elements;
                eL.current = (0,
                J._)(t || []).filter(function(e) {
                    return e.checked
                }).map(function(e) {
                    return e.id
                }).map(function(e) {
                    return e.replace("feedback-", "")
                }),
                eZ.current = (null == t ? void 0 : t["feedback-other"].value) || ""
            }, [c])
              , eq = (0,
            j.useCallback)(function() {
                eE(),
                s({
                    customFeedback: eZ.current,
                    tags: eL.current,
                    employeeConsented: T ? I : void 0
                }),
                "thumbsDown" === a && g.A.logEvent(v.M.submitThumbsDownFeedbackForm, Q),
                el ? U("compare") : o()
            }, [eE, s, T, I, a, el, Q, o])
              , eB = (0,
            j.useCallback)(function(e, t) {
                var n = E.tQ.getServerThreadId(u);
                if (null != n) {
                    var r = k.getMessageId(E.tQ.getThreadCurrentLeafId(u));
                    L.ZP.submitSharedConversationReportFeedback({
                        message_id: r,
                        shared_conversation_id: n,
                        text: e,
                        tags: t
                    }).then(function() {
                        ei.m.success("Moderation logged successfully")
                    }).catch(function() {
                        ei.m.danger("Moderation NOT logged successfully! Please try again")
                    }),
                    o()
                }
            }, [k, u, o])
              , eF = (0,
            j.useCallback)(function() {
                eE(),
                eL.current.push("moderation-reject"),
                eB(eZ.current, eL.current)
            }, [eB, eE])
              , eU = (0,
            j.useCallback)(function() {
                eE(),
                eL.current.push("moderation-accept"),
                eB(eZ.current, eL.current)
            }, [eB, eE])
              , ez = "moderate" === a ? (0,
            m.jsxs)(m.Fragment, {
                children: [(0,
                m.jsx)(er.ZP.Button, {
                    title: y.formatMessage(eu.submitRejectModeration),
                    color: "danger",
                    onClick: eF
                }), (0,
                m.jsx)(er.ZP.Button, {
                    title: y.formatMessage(eu.submitAcceptModeration),
                    color: "primary",
                    onClick: eU
                })]
            }) : "critique" === B ? (0,
            m.jsxs)("div", {
                className: "flex items-center gap-3",
                children: [T && "report" !== a && (0,
                m.jsx)(eo.u, {
                    label: y.formatMessage(eu.employeeConsentExplanation),
                    children: (0,
                    m.jsx)(et.Z, {
                        id: "employee-consent",
                        checked: I,
                        onChange: function(e) {
                            return N(e.currentTarget.checked)
                        },
                        label: y.formatMessage(eu.employeeConsent)
                    })
                }), (0,
                m.jsx)(er.ZP.Button, {
                    title: y.formatMessage("report" === a ? eu.submitReport : eu.submitFeedback),
                    onClick: eq
                })]
            }) : null
              , eO = "left" === P.current
              , eG = eO ? e_ : eP
              , eQ = eO ? "new" : "original"
              , eH = eO ? "original" : "new"
              , eW = eO ? y.formatMessage(eu.newAnswer) : y.formatMessage(eu.originalAnswer)
              , eV = eO ? y.formatMessage(eu.originalAnswer) : y.formatMessage(eu.newAnswer)
              , eJ = eO ? y.formatMessage(eu.newAnswerBetter) : y.formatMessage(eu.originalAnswerBetter)
              , eY = eO ? y.formatMessage(eu.originalAnswerBetter) : y.formatMessage(eu.newAnswerBetter)
              , eK = a && "report" !== a && "moderate" !== a
              , e$ = (0,
            j.useCallback)(function(e) {
                var t = "left" === e ? eQ : "right" === e ? eH : "same";
                if (g.A.logEvent(v.M.submittedComparisonUIV0, Object.assign({}, Q, {
                    choice: t
                })),
                eK) {
                    var n = E.tQ.getTree(u);
                    n.updateNodeMetadata(e_, {
                        inlineComparisonRating: "baseline"
                    }),
                    n.updateNodeMetadata(eP, {
                        inlineComparisonRating: t
                    }),
                    l(eC, eR, a, t, P.current, ed.current, ec.current, ef.current, ex.current, eZ.current, eL.current)
                }
                E.tQ.setThreadCurrentLeafId(u, e === P.current ? eD.id : eI.id),
                o()
            }, [eQ, eH, Q, eK, u, eD.id, eI.id, o, e_, eP, l, eC, eR, a])
              , eX = !ew && null != ex.current && el
              , e0 = (0,
            j.useCallback)(function() {
                o(),
                "critique" === B ? g.A.logEvent(v.M.skippedThumbsDownFeedbackForm, Object.assign({}, Q)) : "compare" === B && g.A.logEvent(v.M.skippedComparisonUIV0, Object.assign({}, Q))
            }, [o, Q, B])
              , e1 = (0,
            d._)((0,
            j.useState)([]), 2)
              , e2 = e1[0]
              , e4 = e1[1];
            return (0,
            j.useEffect)(function() {
                "moderate" === a && L.ZP.fetchShareModerationCategories().then(function(e) {
                    var t = e.moderation_categories;
                    e4(Object.keys(t).map(function(e) {
                        return [e, t[e]]
                    }))
                })
            }, []),
            (0,
            m.jsxs)(ea.Z, {
                isOpen: !0,
                onClose: e0,
                size: "custom",
                className: "md:max-w-[672px] lg:max-w-[896px] xl:max-w-6xl",
                type: "critique" === B ? "thumbsUp" === a ? "success" : "danger" : "success",
                icon: "critique" === B ? "thumbsUp" === a ? C.fmn : C.oLd : void 0,
                title: eA,
                closeButton: (0,
                m.jsx)(er.ZP.CloseButton, {
                    onClose: e0
                }),
                children: ["critique" === B && (0,
                m.jsxs)("form", {
                    ref: c,
                    children: [(0,
                    m.jsx)(X.ZP, {
                        id: "feedback-other",
                        placeholder: "thumbsUp" === a ? y.formatMessage(eu.thumbsUpPlaceholder) : "report" === a ? y.formatMessage(eu.reportContentExplanationPlaceholder) : y.formatMessage(eu.thumbsDownPlaceholder),
                        rows: 3,
                        className: "mb-1 mt-4 w-full resize-none rounded-md dark:bg-gray-800 dark:focus:border-white dark:focus:ring-white"
                    }), "thumbsDown" === a && (0,
                    m.jsxs)("div", {
                        className: "mb-4",
                        children: [(0,
                        m.jsx)(et.Z, {
                            id: "feedback-harmful",
                            label: y.formatMessage(eu.harmfulUnsafe)
                        }), (0,
                        m.jsx)(et.Z, {
                            id: "feedback-false",
                            label: y.formatMessage(eu.notTrue)
                        }), (0,
                        m.jsx)(et.Z, {
                            id: "feedback-not-helpful",
                            label: y.formatMessage(eu.notHelpful)
                        })]
                    }), null != a && !eK && (0,
                    m.jsx)(m.Fragment, {
                        children: (0,
                        m.jsxs)("div", {
                            className: "mb-4",
                            children: ["report" === a && (0,
                            m.jsxs)(m.Fragment, {
                                children: [(0,
                                m.jsx)(et.Z, {
                                    id: "feedback-dont-like-this",
                                    label: y.formatMessage(eu.dontLikeThis)
                                }), (0,
                                m.jsx)(et.Z, {
                                    id: "feedback-false",
                                    label: y.formatMessage(eu.notTrue)
                                }), (0,
                                m.jsx)(et.Z, {
                                    id: "feedback-not-helpful",
                                    label: y.formatMessage(eu.notHelpful)
                                }), (0,
                                m.jsx)(et.Z, {
                                    id: "feedback-harmful-offensive",
                                    label: y.formatMessage(eu.harmfulOffensive)
                                }), (0,
                                m.jsx)(et.Z, {
                                    id: "feedback-sexual-abuse",
                                    label: y.formatMessage(eu.sexualAbuse)
                                })]
                            }), "moderate" === a && (0,
                            m.jsxs)(m.Fragment, {
                                children: [e2.map(function(e) {
                                    var t = (0,
                                    d._)(e, 2)
                                      , n = t[0]
                                      , r = t[1];
                                    return (0,
                                    m.jsx)(et.Z, {
                                        id: "feedback-" + n,
                                        label: r
                                    }, n)
                                }), (0,
                                m.jsx)(et.Z, {
                                    id: "feedback-copyright",
                                    label: y.formatMessage(eu.copyrightContent)
                                })]
                            }), (0,
                            m.jsx)(et.Z, {
                                id: "feedback-content-other",
                                label: y.formatMessage(eu.reportOtherContent)
                            })]
                        })
                    })]
                }), "compare" === B && es && void 0 !== M && (0,
                m.jsxs)("div", {
                    className: (0,
                    Y.default)("w-full"),
                    children: [(0,
                    m.jsx)("p", {
                        className: (0,
                        Y.default)("mb-7 mt-3"),
                        children: (0,
                        m.jsx)(S.Z, (0,
                        i._)({}, eu.continueWithChosenAnswer))
                    }), (0,
                    m.jsx)(eg, {
                        className: "rounded-md",
                        children: (0,
                        m.jsx)(ev, {
                            children: (0,
                            m.jsx)(en.ZP, {
                                currentModelId: f,
                                turnIndex: eb,
                                conversationLeafId: eG,
                                isFinalTurn: !1,
                                clientThreadId: u,
                                onChangeItemInView: h,
                                onChangeRating: $(),
                                onRequestMoreCompletions: x,
                                onRequestCompletion: b,
                                showInlineEmbeddedDisplay: !0
                            })
                        })
                    }), (0,
                    m.jsxs)("div", {
                        className: (0,
                        Y.default)(),
                        children: [(0,
                        m.jsxs)("div", {
                            className: (0,
                            Y.default)("mb-2 grid w-full grid-cols-2 gap-5"),
                            children: [(0,
                            m.jsx)("div", {
                                children: (0,
                                m.jsx)("p", {
                                    className: (0,
                                    Y.default)("font-semibold"),
                                    children: eW
                                })
                            }), (0,
                            m.jsx)("div", {
                                children: (0,
                                m.jsx)("p", {
                                    className: (0,
                                    Y.default)("font-semibold"),
                                    children: eV
                                })
                            })]
                        }), (0,
                        m.jsxs)("div", {
                            className: (0,
                            Y.default)("mb-5 grid w-full grid-cols-2 gap-5"),
                            children: [(0,
                            m.jsxs)(ep, {
                                children: [(0,
                                m.jsx)(ev, {
                                    children: (0,
                                    m.jsx)(en.ZP, {
                                        currentModelId: f,
                                        turnIndex: eO ? ey : A,
                                        conversationLeafId: eO ? eP : e_,
                                        isFinalTurn: !0,
                                        clientThreadId: u,
                                        onChangeItemInView: h,
                                        onChangeRating: $(),
                                        onRequestMoreCompletions: x,
                                        onRequestCompletion: b,
                                        showInlineEmbeddedDisplay: !0
                                    })
                                }), (0,
                                m.jsx)(eh, {
                                    children: (0,
                                    m.jsx)(er.ZP.Button, {
                                        disabled: !eX,
                                        title: eJ,
                                        onClick: function() {
                                            return e$("left")
                                        },
                                        color: "dark"
                                    })
                                })]
                            }), (0,
                            m.jsxs)(ep, {
                                children: [(0,
                                m.jsx)(ev, {
                                    children: (0,
                                    m.jsx)(en.ZP, {
                                        currentModelId: f,
                                        turnIndex: eO ? A : ey,
                                        conversationLeafId: eG,
                                        isFinalTurn: !0,
                                        clientThreadId: u,
                                        onChangeItemInView: h,
                                        onChangeRating: $(),
                                        onRequestMoreCompletions: x,
                                        onRequestCompletion: b,
                                        showInlineEmbeddedDisplay: !0
                                    })
                                }), (0,
                                m.jsx)(eh, {
                                    children: (0,
                                    m.jsx)(er.ZP.Button, {
                                        disabled: !eX,
                                        title: eY,
                                        onClick: function() {
                                            return e$("right")
                                        },
                                        color: "dark"
                                    })
                                })]
                            })]
                        }), (0,
                        m.jsx)("div", {
                            className: (0,
                            Y.default)("grid w-full"),
                            children: (0,
                            m.jsxs)("div", {
                                className: (0,
                                Y.default)("mb-2 text-right"),
                                children: [(0,
                                m.jsx)(er.ZP.Button, {
                                    disabled: !eX,
                                    title: y.formatMessage(eu.neitherAnswerBetter),
                                    color: "primary",
                                    onClick: function() {
                                        return e$("same")
                                    },
                                    className: (0,
                                    Y.default)("mr-2")
                                }), (0,
                                m.jsx)(er.ZP.Button, {
                                    title: y.formatMessage(eu.skipStep),
                                    onClick: function() {
                                        return o()
                                    }
                                })]
                            })
                        })]
                    })]
                }), (0,
                m.jsx)(er.ZP.Actions, {
                    primaryButton: ez
                })]
            }, "RatingModal-".concat(r))
        }
        var eh = P.Z.div(es())
          , ep = P.Z.div(el())
          , eg = P.Z.div(ed())
          , ev = P.Z.div(ec())
          , ex = n(41711)
          , eb = n(61888);
        function ey(e) {
            var t, n = e.clientThreadId, r = e.currentLeafId, a = e.currentModelId, i = e.onChangeItemInView, s = e.onRequestMoreCompletions, l = e.onChangeRating, c = e.onRequestCompletion, f = e.ratingModalOpen, h = e.ratingModalNodeId, p = e.ratingModalCompletionId, x = e.sharedConversationReportModalNodeId, b = e.sharedConversationModerationModalOpen, y = e.setRatingModalOpen, k = e.setSharedConversationReportModalNodeId, M = e.setSharedConversationModerationModalOpen, w = (0,
            R.Z)(), T = (0,
            j.useRef)(null), C = (0,
            d._)((0,
            j.useState)(!1), 2), _ = C[0], I = C[1], N = (0,
            j.useCallback)(function(e) {
                var t = e.customFeedback
                  , r = e.tags
                  , o = e.employeeConsented;
                if (f && null != h && "" !== h && (t || r.length > 0 || o)) {
                    var i = E.tQ.getServerThreadId(n);
                    g.A.logEvent(v.M.reportResult, {
                        id: p,
                        threadId: i,
                        content: t,
                        model: a,
                        rating: f,
                        tags: r
                    }),
                    n && p && L.ZP.submitMessageFeedback({
                        message_id: p,
                        conversation_id: i,
                        rating: f,
                        text: t,
                        tags: r,
                        employee_consented: o
                    })
                }
            }, [f, h, n, p, a]), S = (0,
            j.useCallback)(function(e) {
                var t = e.customFeedback
                  , r = e.tags;
                if (null != x && "" !== x) {
                    var o = E.tQ.getServerThreadId(n);
                    g.A.logEvent(v.M.reportResult, {
                        id: p,
                        threadId: o,
                        content: t,
                        model: a,
                        rating: f,
                        tags: r
                    }),
                    L.ZP.submitSharedConversationReportFeedback({
                        message_id: x,
                        shared_conversation_id: o,
                        text: t,
                        tags: r
                    }),
                    I(!0)
                }
            }, [x, n, p, a, f, I]), P = (0,
            j.useCallback)((t = (0,
            o._)(function(e, t, r, a, o, i, s, l, d, c, m) {
                return (0,
                u.Jh)(this, function(u) {
                    switch (u.label) {
                    case 0:
                        return [4, L.ZP.submitMessageComparisonFeedback({
                            feedback_version: "comparison_feedback_modal:a:1.0",
                            original_message_id: e,
                            new_message_id: t,
                            rating: r,
                            conversation_id: E.tQ.getServerThreadId(n),
                            text: c,
                            tags: m.map(function(e) {
                                return e.replace("feedback-", "")
                            }),
                            completion_comparison_rating: a,
                            new_completion_placement: o,
                            feedback_start_time: i,
                            compare_step_start_time: s,
                            new_completion_load_start_time: l,
                            new_completion_load_end_time: d,
                            frontend_submission_time: Date.now(),
                            timezone_offset_min: new Date().getTimezoneOffset()
                        })];
                    case 1:
                        return u.sent(),
                        [2]
                    }
                })
            }),
            function(e, n, r, a, o, i, s, l, d, c, u) {
                return t.apply(this, arguments)
            }
            ), [n]);
            return null != f ? (0,
            m.jsx)(ef, {
                ratingModalNodeId: h,
                ratingModalOpen: f,
                onCloseRatingModal: function() {
                    return y(void 0)
                },
                onSubmitFeedback: N,
                onHandleChangeFeedbackComparisonRating: P,
                currentModelId: a,
                feedbackTextareaRef: T,
                clientThreadId: n,
                onChangeItemInView: i,
                onRequestMoreCompletions: s,
                onChangeRating: l,
                onRequestCompletion: c
            }) : null != x ? (0,
            m.jsx)(ef, {
                ratingModalNodeId: x,
                ratingModalOpen: "report",
                onCloseRatingModal: function() {
                    return k(void 0)
                },
                onSubmitFeedback: S,
                onHandleChangeFeedbackComparisonRating: eb.noop,
                currentModelId: a,
                feedbackTextareaRef: T,
                clientThreadId: n,
                onChangeItemInView: i,
                onRequestMoreCompletions: s,
                onChangeRating: l,
                onRequestCompletion: c
            }) : _ ? (0,
            m.jsx)(ea.Z, {
                onClose: function() {
                    return I(!1)
                },
                isOpen: !0,
                icon: ex.Z,
                title: w.formatMessage(ek.reportModalThankYouTitle),
                description: w.formatMessage(ek.reportModalThankYouDescription),
                primaryButton: (0,
                m.jsx)(er.ZP.Button, {
                    onClick: function() {
                        return I(!1)
                    },
                    title: w.formatMessage(ek.reportModalThankYouDismiss)
                }),
                type: "danger"
            }) : b ? (0,
            m.jsx)(ef, {
                ratingModalNodeId: r,
                ratingModalOpen: "moderate",
                onCloseRatingModal: function() {
                    return M(!1)
                },
                onSubmitFeedback: eb.noop,
                onHandleChangeFeedbackComparisonRating: function() {},
                currentModelId: a,
                feedbackTextareaRef: T,
                clientThreadId: n,
                onChangeItemInView: i,
                onRequestMoreCompletions: s,
                onChangeRating: l,
                onRequestCompletion: c
            }) : null
        }
        var ek = (0,
        N.vU)({
            reportModalThankYouTitle: {
                id: "thread.modal.reportModalThankYou.title",
                defaultMessage: "Thank you for your report!",
                description: "Title for the post-report thank-you modal"
            },
            reportModalThankYouDescription: {
                id: "thread.modal.reportModalThankYou.description",
                defaultMessage: "Thank you for your report.",
                description: "Description for the post-report thank-you modal"
            },
            reportModalThankYouDismiss: {
                id: "thread.modal.reportModalThankYou.dismissButton",
                defaultMessage: "Close",
                description: "Close button for the post-report thank-you modal"
            }
        })
          , eM = n(12065)
          , ew = n(23234)
          , eT = n(61236)
          , ej = n(82473)
          , eC = n(25494)
          , e_ = n(8874)
          , eI = n(25005)
          , eN = n(42798);
        function eS(e) {
            var t, n = e.isOpen, r = e.onClose, a = (0,
            j.useCallback)(function() {
                g.A.logEvent(v.M.closeAccountPaymentModal),
                r()
            }, [r]), o = (0,
            eT.a)({
                queryKey: ["referralInvites"],
                queryFn: function() {
                    return L.ZP.getEligibleReferralInvites()
                },
                enabled: n
            }), l = o.data, d = o.isLoading, c = o.isSuccess, u = null !== (t = null == l ? void 0 : l.invites_remaining) && void 0 !== t ? t : 0, f = c ? l.invite_codes : [];
            return ((0,
            j.useEffect)(function() {
                n && (e_.m9.logEvent("chatgpt_referral_invite_modal_opened"),
                g.A.logEvent(v.M.chatgptReferralInviteModalOpened))
            }, [n]),
            c) ? (0,
            m.jsxs)(eI.x, {
                isOpen: n,
                onClose: r,
                children: [(0,
                m.jsxs)("div", {
                    className: "flex w-full flex-row items-center justify-between border-b px-4 py-3 dark:border-gray-700",
                    children: [(0,
                    m.jsx)("span", {
                        className: "text-base font-semibold sm:text-base",
                        children: (0,
                        m.jsx)(S.Z, (0,
                        s._)((0,
                        i._)({}, eA.modalTitle), {
                            values: {
                                remainingInviteCount: u
                            }
                        }))
                    }), (0,
                    m.jsx)("button", {
                        className: "text-gray-700 opacity-50 transition hover:opacity-75 dark:text-white",
                        onClick: a,
                        children: (0,
                        m.jsx)(C.q5L, {
                            className: "h-6 w-6"
                        })
                    })]
                }), (0,
                m.jsx)("div", {
                    className: "px-4 py-4",
                    children: (0,
                    m.jsx)("div", {
                        className: "relative col-span-1 px-3 md:w-[500px] md:px-0",
                        children: (0,
                        m.jsxs)("div", {
                            children: [(0,
                            m.jsx)("div", {
                                className: "flex flex-col items-center pb-5 pt-4",
                                children: (0,
                                m.jsx)(C.E33, {
                                    className: "h-12 w-12 text-gray-800"
                                })
                            }), (0,
                            m.jsxs)("div", {
                                className: "flex flex-col items-center gap-2 text-center",
                                children: [(0,
                                m.jsx)("p", {
                                    className: "text-xl font-semibold leading-6",
                                    children: (0,
                                    m.jsx)(S.Z, (0,
                                    i._)({}, eA.inviteDescription))
                                }), (0,
                                m.jsx)("p", {
                                    className: "max-w-sm text-xs text-gray-500",
                                    children: (0,
                                    m.jsx)(S.Z, (0,
                                    i._)({}, eA.inviteDescriptionFollowUp))
                                })]
                            }), (0,
                            m.jsxs)("div", {
                                className: "mt-6",
                                children: [(0,
                                m.jsxs)("div", {
                                    className: "flex flex-row justify-between px-2",
                                    children: [(0,
                                    m.jsx)("label", {
                                        className: "block text-sm font-medium text-gray-900",
                                        children: (0,
                                        m.jsx)(S.Z, (0,
                                        i._)({}, eA.referralCodeLabel))
                                    }), (0,
                                    m.jsx)("label", {
                                        className: "block text-sm text-gray-500",
                                        children: (0,
                                        m.jsx)(S.Z, (0,
                                        s._)((0,
                                        i._)({}, eA.inviteRemaining), {
                                            values: {
                                                remainingInviteCount: u
                                            }
                                        }))
                                    })]
                                }), d ? (0,
                                m.jsx)("div", {
                                    className: "h-40 py-2",
                                    children: (0,
                                    m.jsx)(eN.Z, {
                                        className: "h-4 w-4"
                                    })
                                }) : null, (null == f ? void 0 : f.length) > 0 && (0,
                                m.jsx)(eP, {
                                    referralCodes: f
                                })]
                            })]
                        })
                    })
                })]
            }) : null
        }
        var eR = function(e) {
            return "".concat(window.location.host, "/invite/").concat(e)
        }
          , eP = function(e) {
            var t = e.referralCodes
              , n = (0,
            j.useRef)(null);
            return (0,
            m.jsx)("div", {
                className: "mt-2 flow-root",
                children: (0,
                m.jsx)("div", {
                    className: "-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8",
                    children: (0,
                    m.jsx)("div", {
                        className: "inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8",
                        children: (0,
                        m.jsx)("div", {
                            ref: n,
                            className: (0,
                            Y.default)("shadow ring-1 ring-black ring-opacity-5 sm:rounded-md", {
                                "h-44 overflow-y-scroll": t.length > 4,
                                "overflow-hidden": t.length <= 4
                            }),
                            children: (0,
                            m.jsx)("table", {
                                className: "min-w-full",
                                children: (0,
                                m.jsx)("tbody", {
                                    className: "divide-y divide-gray-200 bg-white dark:divide-gray-900 dark:bg-gray-800",
                                    children: t.sort(function(e, t) {
                                        var n = {
                                            activated: 0,
                                            created: 1,
                                            claimed: 2,
                                            subscription_granted: 3
                                        }
                                          , r = e.status
                                          , a = t.status;
                                        return n[r] < n[a] ? -1 : n[r] > n[a] ? 1 : e.updated_at > t.updated_at ? -1 : e.updated_at < t.updated_at ? 1 : 0
                                    }).map(function(e) {
                                        return (0,
                                        m.jsx)(eD, {
                                            tableRef: n,
                                            referralCode: e
                                        }, e.id)
                                    })
                                })
                            })
                        })
                    })
                })
            })
        }
          , eD = function(e) {
            var t, n = e.referralCode, r = e.tableRef, a = (0,
            R.Z)(), s = (0,
            j.useRef)(null), l = (0,
            d._)((0,
            j.useState)(!1), 2), c = l[0], f = l[1], h = (0,
            d._)((0,
            j.useState)(!1), 2), p = h[0], x = h[1], b = (0,
            ej.NL)(), y = (0,
            eC.D)({
                mutationFn: function() {
                    return L.ZP.postActivateReferralInvite(n.id)
                },
                onSettled: function() {
                    b.invalidateQueries({
                        queryKey: ["referralInvites"]
                    }),
                    f(!1)
                },
                onError: (0,
                o._)(function() {
                    return (0,
                    u.Jh)(this, function(e) {
                        return ei.m.danger(a.formatMessage(eA.activateReferralError)),
                        [2]
                    })
                }),
                onSuccess: function(e) {
                    f(!1);
                    var t, n, o = e.invite_code;
                    navigator.clipboard.writeText(eR(null != o ? o : "")),
                    x(!0),
                    null === (t = s.current) || void 0 === t || t.select(),
                    ei.m.success(a.formatMessage(eA.copiedReferralToastMessage, {
                        referralInviteCode: o
                    }), {
                        duration: 3,
                        hasCloseButton: !0
                    }),
                    null === (n = r.current) || void 0 === n || n.scrollTo(0, 0)
                }
            }).mutateAsync, k = (t = (0,
            o._)(function(e) {
                var t;
                return (0,
                u.Jh)(this, function(n) {
                    switch (n.label) {
                    case 0:
                        switch (e.status) {
                        case "created":
                            return [3, 1];
                        case "activated":
                            return [3, 3];
                        case "claimed":
                            return [3, 4];
                        case "subscription_granted":
                            return [3, 5]
                        }
                        return [3, 6];
                    case 1:
                        return f(!0),
                        e_.m9.logEvent("chatgpt_referral_invite_link_activated"),
                        g.A.logEvent(v.M.chatgptReferralInviteLinkActivated),
                        [4, y()];
                    case 2:
                        return n.sent(),
                        [3, 7];
                    case 3:
                        return e_.m9.logEvent("chatgpt_referral_invite_link_copied"),
                        g.A.logEvent(v.M.chatgptReferralInviteLinkCopied),
                        navigator.clipboard.writeText(eR(null !== (t = e.code_token) && void 0 !== t ? t : "")),
                        x(!0),
                        ei.m.success(a.formatMessage(eA.copiedReferralToastMessage, {
                            referralInviteCode: e.code_token
                        }), {
                            duration: 3,
                            hasCloseButton: !0
                        }),
                        [3, 7];
                    case 4:
                    case 5:
                    case 6:
                        return [3, 7];
                    case 7:
                        return [2]
                    }
                })
            }),
            function(e) {
                return t.apply(this, arguments)
            }
            ), M = "".concat(window.location.host, "/invite/");
            return (0,
            m.jsxs)("tr", {
                children: [(0,
                m.jsxs)("td", {
                    className: "relative w-full whitespace-nowrap py-1.5 pl-1 pr-3 text-sm text-gray-900 dark:text-white",
                    children: [(0,
                    m.jsx)("input", {
                        ref: s,
                        name: "referral-code",
                        className: "block w-full border-0 bg-transparent py-1.5 pl-2 text-gray-900 shadow-none ring-0 ring-inset placeholder:text-gray-600 focus:ring-0 focus:ring-inset dark:text-white placeholder:dark:text-white sm:text-sm",
                        disabled: "activated" != n.status,
                        value: "created" == n.status || "subscription_granted" == n.status ? "" : eR(n.code_token)
                    }), (0,
                    m.jsxs)("span", {
                        className: "absolute top-3 flex items-center pl-2 text-gray-700  dark:text-white",
                        children: ["created" == n.status && (0,
                        m.jsxs)("span", {
                            children: [M, (0,
                            m.jsx)("span", {
                                className: "select-none text-gray-400  dark:text-gray-300",
                                children: "•••••••"
                            })]
                        }), "subscription_granted" == n.status && (0,
                        m.jsx)("span", {
                            className: "select-none line-through opacity-25",
                            children: eR(n.code_token)
                        })]
                    })]
                }), (0,
                m.jsx)("td", {
                    className: "relative whitespace-nowrap py-1.5 pl-3 pr-2 text-right text-sm font-medium sm:pr-2",
                    children: (0,
                    m.jsx)(H.z, {
                        disabled: c || "claimed" == n.status || "subscription_granted" == n.status,
                        loading: c,
                        as: "button",
                        type: "button",
                        onClick: function() {
                            return k(n)
                        },
                        color: "created" == n.status ? "primary" : "light",
                        className: (0,
                        Y.default)("w-20 rounded-sm py-1 text-sm", {
                            "bg-brand-green/20 text-green-700 hover:bg-brand-green/30 dark:bg-brand-green/50 dark:text-green-100 dark:hover:bg-brand-green/40": "activated" == n.status,
                            "!bg-gray-200 ": "subscription_granted" == n.status
                        }),
                        children: (0,
                        m.jsx)("span", {
                            className: "flex flex-row items-center",
                            children: "created" == n.status ? (0,
                            m.jsx)(S.Z, (0,
                            i._)({}, eA.referralActivate)) : "activated" == n.status ? p ? (0,
                            m.jsx)(S.Z, (0,
                            i._)({}, eA.referralCopied)) : (0,
                            m.jsx)(S.Z, (0,
                            i._)({}, eA.referralCopy)) : "claimed" == n.status ? (0,
                            m.jsx)(S.Z, (0,
                            i._)({}, eA.referralClaimed)) : "subscription_granted" == n.status ? (0,
                            m.jsx)(S.Z, (0,
                            i._)({}, eA.referralClaimed)) : null
                        })
                    })
                })]
            })
        }
          , eA = (0,
        N.vU)({
            modalTitle: {
                id: "InviteReferralModal.modalTitle",
                description: "Description for the invite referral modal",
                defaultMessage: "Refer a friend"
            },
            inviteFormTitle: {
                id: "InviteReferralModal.inviteFormTitle",
                description: "Title for the invite referral form",
                defaultMessage: "Emails"
            },
            invitePlaceholder: {
                id: "InviteReferralModal.invitePlaceholder",
                description: "List of placeholder emails for the invite referral form",
                defaultMessage: "friend@openai.com, friend2@openai.com..."
            },
            referralActivate: {
                id: "InviteReferralModal.referralActivate",
                description: "Button label for activating a referral code",
                defaultMessage: "Copy"
            },
            referralCopy: {
                id: "InviteReferralModal.referralCopy",
                description: "Button label for copying a referral code",
                defaultMessage: "Copy"
            },
            referralCopied: {
                id: "InviteReferralModal.referralCopied",
                description: "Button label for when a referral code is copied",
                defaultMessage: "Copied"
            },
            referralClaimed: {
                id: "InviteReferralModal.referralClaimed",
                description: "Disabled state for claimed referral code",
                defaultMessage: "Claimed"
            },
            inviteDescription: {
                id: "InviteReferralModal.inviteDescription",
                description: "Description text for the invite referral modal",
                defaultMessage: "Share ChatGPT Plus with your friends!"
            },
            inviteDescriptionFollowUp: {
                id: "InviteReferralModal.inviteDescriptionFollowUp",
                description: "Description follow up text for the invite referral modal",
                defaultMessage: "Activate and copy the referral links below to share ChatGPT Plus with your friends, giving them access to a free trial!"
            },
            inviteRemaining: {
                id: "InviteReferralModal.inviteRemaining",
                description: "Description of invites remaining for the invite referral modal",
                defaultMessage: "{remainingInviteCount} available"
            },
            usersInvited: {
                id: "InviteReferralModal.usersInvited",
                description: "Description of users invited for the invite referral modal",
                defaultMessage: "<showcaseValue>{usersInviteCount}</showcaseValue><description>users invited</description>"
            },
            referralCodeLabel: {
                id: "InviteReferralModal.referralCodeLabel",
                description: "Label for the referral code input field",
                defaultMessage: "Links"
            },
            sendInviteCta: {
                id: "InviteReferralModal.sendInviteCta",
                description: "Button text for the invite referral modal",
                defaultMessage: "Send invites"
            },
            clickToActivateString: {
                id: "InviteReferralModal.clickToActivateString",
                description: "Text for the activate referral invite action referral modal",
                defaultMessage: "chat.openai.com/invite/<codeStyle>•••••••</codeStyle>"
            },
            clickToCopyString: {
                id: "InviteReferralModal.clickToCopyString",
                description: "Text for clicking to copy invite action referral modal",
                defaultMessage: "Click to copy"
            },
            copiedReferralToastMessage: {
                id: "InviteReferralModal.copiedReferralToastMessage",
                description: "Toast text to display when copying a referral invite code",
                defaultMessage: "Your referral link {referralInviteCode} has been copied to your clipboard. Share it with your friends!"
            },
            activateReferralError: {
                id: "InviteReferralModal.activateReferralError",
                description: "Text to display when activating a referral invite fails",
                defaultMessage: "Failed to accept referral invite. Please try again."
            }
        })
          , eL = n(69789)
          , eZ = n(94486)
          , eE = n(43178)
          , eq = n(17314);
        function eB() {
            var e, t, n, r, a, o, s = (0,
            R.Z)(), l = (t = (e = (0,
            eZ.S)()).isLoggedInWithMfa,
            n = e.isUsernamePassword,
            r = e.setupMfa,
            o = (a = (0,
            eq.p0)()).filter(function(e) {
                return !("none" === e.manifest.auth.type || "service_http" === e.manifest.auth.type)
            }),
            (t || !n) && (o = []),
            {
                disablePluginsThatWeCantUse: function() {
                    var e = a.filter(function(e) {
                        return "none" === e.manifest.auth.type || "service_http" === e.manifest.auth.type
                    });
                    (0,
                    eq.dT)(e.map(function(e) {
                        return e.id
                    }))
                },
                pluginsWeCantUse: o,
                setupMfa: r
            }), d = l.disablePluginsThatWeCantUse, c = l.pluginsWeCantUse, u = l.setupMfa, f = (0,
            j.useCallback)(function() {
                d()
            }, [d]);
            return 0 === c.length ? null : (0,
            m.jsx)(ea.Z, {
                isOpen: !0,
                onClose: f,
                title: (0,
                m.jsx)(S.Z, (0,
                i._)({}, eF.title)),
                primaryButton: (0,
                m.jsx)(er.ZP.Button, {
                    onClick: u,
                    title: s.formatMessage(eF.primaryButtonTitle),
                    color: "primary"
                }),
                secondaryButton: (0,
                m.jsx)(er.ZP.Button, {
                    onClick: d,
                    title: s.formatMessage(eF.secondaryButtonTitle)
                }),
                type: "danger",
                children: (0,
                m.jsx)("div", {
                    className: "flex flex-col gap-2 py-4",
                    children: c.map(function(e) {
                        return (0,
                        m.jsx)("div", {
                            className: "w-full",
                            children: (0,
                            m.jsx)(eE.Z, {
                                plugin: e
                            })
                        }, e.id)
                    })
                })
            })
        }
        var eF = (0,
        N.vU)({
            title: {
                id: "RequireMfaForAuthPluginsModal.title",
                description: "Title for the Require MFA for Auth Plugins modal",
                defaultMessage: "Some of your plugins require two-factor authentication."
            },
            primaryButtonTitle: {
                id: "RequireMfaForAuthPluginsModal.primaryButtonTitle",
                description: "Title for the primary button to set up two-factor authentication",
                defaultMessage: "Setup two-factor authentication"
            },
            secondaryButtonTitle: {
                id: "RequireMfaForAuthPluginsModal.secondaryButtonTitle",
                description: "Title for the secondary button to disable plugins",
                defaultMessage: "Turn off the plugins"
            }
        });
        function eU(e) {
            var t = e.isOpen
              , n = e.onClose
              , r = (0,
            j.useCallback)(function() {
                g.A.logEvent(v.M.closeAccountPaymentModal),
                n()
            }, [n]);
            return (0,
            m.jsx)(er.ZP.Root, {
                isOpen: t,
                onClose: r,
                shouldIgnoreClickOutside: !0,
                children: (0,
                m.jsx)(er.ZP.Overlay, {
                    children: (0,
                    m.jsx)(er.ZP.Content, {
                        className: "focus-none !bg-transparent !shadow-none outline-none md:w-[672px] lg:w-[896px] xl:w-[1024px]",
                        children: (0,
                        m.jsx)("div", {
                            className: "focus-none flex h-full flex-col items-center justify-start outline-none",
                            children: (0,
                            m.jsx)("div", {
                                className: "relative w-full",
                                children: (0,
                                m.jsxs)("div", {
                                    className: "flex grow flex-col items-start justify-center overflow-hidden rounded-md border bg-white shadow-md dark:border-gray-700 dark:bg-gray-900",
                                    children: [(0,
                                    m.jsxs)("div", {
                                        className: "flex w-full flex-row items-center justify-between border-b px-4 py-3 dark:border-gray-700",
                                        children: [(0,
                                        m.jsx)("span", {
                                            className: "text-base font-semibold sm:text-base",
                                            children: (0,
                                            m.jsx)(S.Z, (0,
                                            i._)({}, ez.modalTitle))
                                        }), (0,
                                        m.jsx)("button", {
                                            className: "text-gray-700 opacity-50 transition hover:opacity-75 dark:text-white",
                                            onClick: r,
                                            children: (0,
                                            m.jsx)(C.q5L, {
                                                className: "h-6 w-6"
                                            })
                                        })]
                                    }), (0,
                                    m.jsx)("div", {
                                        className: "grid w-full",
                                        children: (0,
                                        m.jsx)("div", {
                                            className: "relative w-full ",
                                            children: (0,
                                            m.jsx)("div", {
                                                id: "embedded-checkout-modal"
                                            })
                                        })
                                    })]
                                })
                            })
                        })
                    })
                })
            })
        }
        var ez = (0,
        N.vU)({
            modalTitle: {
                id: "EmbeddedPaymentModal.modalTitle",
                description: "Title for the payment page modal",
                defaultMessage: "Your plan"
            }
        })
          , eO = n(59517)
          , eG = n(26003)
          , eQ = n(6013)
          , eH = n(38574)
          , eW = n(43477)
          , eV = n(78103)
          , eJ = (0,
        j.createContext)()
          , eY = function(e) {
            return (0,
            eV.oR)((0,
            j.useContext)(eJ), e)
        }
          , eK = n(93028)
          , e$ = n(45048);
        function eX(e) {
            return e.some(function(e) {
                return e.messages.some(function(e) {
                    var t, n, r, a;
                    return (null == (r = null === (t = e.message.metadata) || void 0 === t ? void 0 : t.aggregate_result) ? void 0 : null === (n = r.messages) || void 0 === n ? void 0 : n.some(e$.O1)) || ("parts"in (a = e.message.content) ? a.parts.join("") : "").includes("sandbox:")
                })
            })
        }
        var e0 = function(e) {
            var t = e.children
              , n = e.color
              , r = void 0 === n ? "yellow" : n
              , a = e.icon;
            return (0,
            m.jsxs)("div", {
                className: (0,
                Y.default)("mb-4 flex items-start justify-start gap-2.5 rounded-md p-4 last:mb-0", {
                    "bg-yellow-300 text-[#756B5C]": "yellow" === r,
                    "bg-gray-50 text-gray-800 dark:bg-[#444654] dark:text-gray-100": "gray" === r
                }),
                children: [null != a && (0,
                m.jsx)(a, {
                    className: "icon-sm mt-1 flex-shrink-0"
                }), t]
            })
        }
          , e1 = n(70737)
          , e2 = n(97296)
          , e4 = n(40803)
          , e3 = n(95552)
          , e5 = n.n(e3)
          , e6 = n(35265)
          , e7 = n(27736)
          , e8 = n(67568)
          , e9 = n(10499)
          , te = n(28924);
        function tt() {
            var e = (0,
            c._)(["h-36 md:h-48 flex-shrink-0"]);
            return tt = function() {
                return e
            }
            ,
            e
        }
        function tn() {
            var e = (0,
            c._)(["cursor-pointer absolute z-10 rounded-full gizmo:bg-clip-padding border text-gray-600 dark:border-white/10 dark:bg-white/10 dark:text-gray-200\n", ""]);
            return tn = function() {
                return e
            }
            ,
            e
        }
        function tr() {
            var e = (0,
            c._)(["\n  ", "\n  dark:hover:text-gray-200 hover:text-gray-950\n"]);
            return tr = function() {
                return e
            }
            ,
            e
        }
        function ta() {
            var e = (0,
            c._)(["mx-auto mt-2 inline-flex rounded-xl border border-gray-100 dark:border-gray-700\n", "\n"]);
            return ta = function() {
                return e
            }
            ,
            e
        }
        var to = (0,
        N.vU)({
            advancedDataAnalysisSupportDisclaimer: {
                id: "sharedConversation.advancedDataAnalysisSupportDisclaimer",
                defaultMessage: "This chat contains files or images produced by Advanced Data Analysis which are not yet visible in Shared Chats.",
                description: "Disclaimer about our lack of support for Advanced Data Analysis inline images and file downloads with shared links"
            },
            personalizedDataDisclaimer: {
                id: "sharedConversation.personalizedDataDisclaimer",
                defaultMessage: "This conversation may reflect the link creator’s personalized data, which isn’t shared and can meaningfully change how the model responds.",
                description: "Disclaimer about the creator's personalized data (ex: custom instructions, memory) not being part of the shared conversation"
            },
            ratingThanks: {
                id: "rating.thanks",
                defaultMessage: "Thanks for your feedback!",
                description: "Thank the user for their rating"
            },
            ratingInstructions: {
                id: "rating.instructions",
                defaultMessage: "Is this conversation helpful so far?",
                description: "Ask the user for their rating of the conversation so far"
            }
        });
        function ti(e) {
            var t = e.clientThreadId
              , n = (0,
            E.qA)(t)
              , r = (0,
            E.je)(t)
              , a = (0,
            E.qN)(function(e) {
                return E.iN.getThreadCreateTime(t, e)
            })
              , o = (0,
            E.oq)(t)
              , i = (0,
            E.JI)(t, o)
              , s = (0,
            j.useMemo)(function() {
                return eX(i)
            }, [i])
              , l = (0,
            E.aS)(t)
              , d = (0,
            E.eY)(t);
            return (0,
            m.jsxs)("div", {
                className: "border-b border-gray-100 pb-4 pt-3 sm:mb-2 sm:pb-6 sm:pt-8",
                children: [(0,
                m.jsx)("h1", {
                    className: "text-3xl font-semibold leading-tight text-gray-700 dark:text-gray-100 sm:text-4xl",
                    children: n
                }), (null != r || null != a) && (0,
                m.jsxs)("div", {
                    className: "pt-3 text-base text-gray-400 sm:pt-4",
                    children: [null != r && (0,
                    m.jsx)("span", {
                        children: r
                    }), null != r && null != a && (0,
                    m.jsx)("span", {
                        className: "px-2",
                        children: "•"
                    }), null != a && (0,
                    m.jsx)(N.Ji, {
                        value: a,
                        month: "long",
                        year: "numeric",
                        day: "numeric"
                    })]
                }), (0,
                m.jsx)(ts, {
                    shouldShowCodeInterpreterDisclaimer: s,
                    shouldShowPersonalizedDataDisclaimer: l || d
                })]
            })
        }
        var ts = function(e) {
            var t = e.shouldShowCodeInterpreterDisclaimer
              , n = e.shouldShowPersonalizedDataDisclaimer;
            return (0,
            m.jsxs)(m.Fragment, {
                children: [t && (0,
                m.jsx)("div", {
                    className: "mt-4",
                    children: (0,
                    m.jsx)(e0, {
                        icon: C.H33,
                        color: "gray",
                        children: (0,
                        m.jsx)(S.Z, (0,
                        i._)({}, to.advancedDataAnalysisSupportDisclaimer))
                    })
                }), n && (0,
                m.jsx)("div", {
                    className: "mt-4",
                    children: (0,
                    m.jsx)(e0, {
                        icon: C.H33,
                        color: "gray",
                        children: (0,
                        m.jsx)(S.Z, (0,
                        i._)({}, to.personalizedDataDisclaimer))
                    })
                })]
            })
        };
        function tl(e) {
            var t = e.onChangeItemInView
              , n = e.onRequestMoreCompletions
              , r = e.onChangeRating
              , a = e.onRequestCompletion
              , o = e.clientThreadId
              , i = e.conversationLeafId
              , s = e.currentThreadModel
              , l = e.inlineEmbeddedDisplay
              , c = e.initiallyHighlightedMessageId
              , u = e.hideHeader
              , f = null !== (0,
            j.useContext)(U.gB)
              , h = (0,
            e4.useScrollToBottom)()
              , p = (0,
            d._)((0,
            e4.useSticky)(), 1)[0]
              , g = (0,
            ew.Ml)()
              , v = (0,
            q.H)().isBetaFeaturesUiEnabled
              , x = (0,
            F.$T)()
              , b = (0,
            e9.Xy)(s, o)
              , y = (0,
            te.Ri)(b.id)
              , k = (0,
            E.U0)(o, i)
              , M = (0,
            J._)(Array(k).keys()).map(function(e) {
                return (0,
                m.jsx)(en.ZP, {
                    isFinalTurn: e === k - 1,
                    turnIndex: e,
                    clientThreadId: o,
                    conversationLeafId: i,
                    onChangeItemInView: t,
                    onChangeRating: r,
                    onRequestMoreCompletions: n,
                    onRequestCompletion: a,
                    currentModelId: b.id,
                    showInlineEmbeddedDisplay: l,
                    initiallyHighlightedMessageId: c,
                    avatarColor: null == y ? void 0 : y.backgroundColor
                }, e)
            });
            return (0,
            m.jsxs)("div", {
                className: "flex flex-col text-sm gizmo:pb-9 dark:bg-gray-800 gizmo:dark:bg-transparent",
                children: [!u && (f || !x) && !l && (0,
                m.jsx)(e7.B, {
                    icon: v ? null == y ? void 0 : y.icon : void 0,
                    currentModelConfig: b,
                    clientThreadId: o
                }), f && !l && (0,
                m.jsx)("div", {
                    className: "mx-auto w-full p-4 md:max-w-2xl md:px-0 lg:max-w-[38rem] xl:max-w-3xl",
                    children: (0,
                    m.jsx)(ti, {
                        clientThreadId: o
                    })
                }), M, (0,
                m.jsx)(th, {
                    clientThreadId: o,
                    conversationLeafId: i
                }), !l && !g && (0,
                m.jsx)(td, {}), !p && !l && (0,
                m.jsx)(tc, {
                    $isGizmoUIEnabled: g,
                    onClick: h,
                    children: g ? (0,
                    m.jsx)(e6.Hg, {
                        className: "m-1 text-black dark:text-white"
                    }) : (0,
                    m.jsx)(C.tv1, {
                        className: "icon-sm m-1"
                    })
                })]
            })
        }
        var td = P.Z.div(tt())
          , tc = P.Z.button(tn(), function(e) {
            return e.$isGizmoUIEnabled ? "right-1/2 border-black/10 bg-token-surface-primary bottom-5" : "right-6 bottom-[124px] md:bottom-[180px] gizmo:md:bottom-[143px] lg:bottom-[120px] border-gray-200 bg-gray-50"
        })
          , tu = P.Z.button(tr(), function(e) {
            return e.$selected ? "text-gray-950 dark:text-gray-100" : "text-gray-400 dark:text-gray-400"
        })
          , tm = P.Z.div(ta(), function(e) {
            return e.$padded && "py-3 px-4"
        })
          , tf = [1, 2, 3, 4];
        function th(e) {
            var t = e.clientThreadId
              , n = e.conversationLeafId
              , r = (0,
            F.ec)(F.F_.isBusinessWorkspace)
              , a = (0,
            E.XK)(t)
              , o = (0,
            e8.WA)(t)
              , s = (0,
            j.useMemo)(function() {
                if (!a)
                    return -1;
                var e = e5()(a);
                return e() > .5 ? -1 : tf[Math.floor(e() * tf.length)]
            }, [a])
              , l = (0,
            E.JI)(t, n)
              , c = l[l.length - 1]
              , u = (0,
            j.useMemo)(function() {
                return ee.Cv.getRequestIdFromConversationTurn(c)
            }, [c])
              , f = (0,
            W.Yk)(u)
              , h = (0,
            d._)((0,
            j.useState)(null), 2)
              , p = h[0]
              , g = h[1]
              , v = (0,
            d._)((0,
            j.useState)(!1), 2)
              , x = v[0]
              , b = v[1]
              , y = (0,
            d._)((0,
            j.useState)(!1), 2)
              , k = y[0]
              , M = y[1]
              , w = (0,
            d._)((0,
            j.useState)(!1), 2)
              , T = w[0]
              , C = w[1]
              , _ = (0,
            j.useMemo)(function() {
                return (0,
                eb.debounce)(function(e, t) {
                    a && e && L.ZP.submitConversationRating({
                        conversation_id: a,
                        message_id: e,
                        rating: t,
                        shown_at_assistant_turn: s
                    }),
                    b(!0),
                    setTimeout(function() {
                        M(!0)
                    }, 1500)
                }, 2e3)
            }, [a, s])
              , N = function(e) {
                var t, n, r = null === (t = null === (n = (0,
                eb.last)(l)) || void 0 === n ? void 0 : n.messages[0]) || void 0 === t ? void 0 : t.message.id;
                g(e),
                _(r, e)
            }
              , R = l.filter(function(e) {
                return e.role === A.uU.Assistant
            }).length
              , P = (null == c ? void 0 : c.role) === A.uU.Assistant;
            return R !== s || f || !P || r || o.kind !== A.OL.PrimaryAssistant || T ? null : (0,
            m.jsxs)("div", {
                className: "mx-auto",
                children: [(0,
                m.jsx)(e1.M, {
                    children: x && !k && (0,
                    m.jsx)(e2.E.div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        exit: {
                            opacity: 0
                        },
                        transition: {
                            duration: .2
                        },
                        children: (0,
                        m.jsx)(tm, {
                            $padded: !0,
                            children: (0,
                            m.jsx)("span", {
                                className: "text-sm text-token-text-tertiary",
                                children: (0,
                                m.jsx)(S.Z, (0,
                                i._)({}, to.ratingThanks))
                            })
                        })
                    }, "submitted")
                }), !x && !1 && (0,
                m.jsx)(e2.E.div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    transition: {
                        duration: .1
                    },
                    children: (0,
                    m.jsxs)(tm, {
                        $padded: !1,
                        children: [(0,
                        m.jsxs)("div", {
                            className: "flex items-center justify-center gap-4 px-4 py-3 text-sm text-token-text-tertiary",
                            children: [(0,
                            m.jsx)(S.Z, (0,
                            i._)({}, to.ratingInstructions)), (0,
                            m.jsxs)("div", {
                                className: "flex items-center gap-5",
                                children: [(0,
                                m.jsx)(tu, {
                                    $selected: "thumbsUp" === p,
                                    onClick: function() {
                                        return N("thumbsUp")
                                    },
                                    children: (0,
                                    m.jsx)(e6.ib, {
                                        className: "icon-md"
                                    })
                                }), (0,
                                m.jsx)(tu, {
                                    $selected: "thumbsDown" === p,
                                    onClick: function() {
                                        return N("thumbsDown")
                                    },
                                    children: (0,
                                    m.jsx)(e6.Q7, {
                                        className: "icon-md"
                                    })
                                })]
                            })]
                        }), (0,
                        m.jsx)("div", {
                            className: "w-px flex-1 self-stretch bg-gray-100 dark:bg-gray-700"
                        }), (0,
                        m.jsx)(tu, {
                            className: "p-3",
                            $selected: !1,
                            onClick: function() {
                                return C(!0)
                            },
                            children: (0,
                            m.jsx)(I.bjh, {
                                className: "icon-sm"
                            })
                        })]
                    })
                }, "rating")]
            })
        }
        function tp() {
            var e = (0,
            c._)(["relative h-full w-full transition-width flex flex-col overflow-hidden items-stretch"]);
            return tp = function() {
                return e
            }
            ,
            e
        }
        function tg() {
            var e = (0,
            c._)(["grow flex-1 overflow-hidden"]);
            return tg = function() {
                return e
            }
            ,
            e
        }
        function tv() {
            var e = (0,
            c._)(["w-full mb-4 shadow-[0_2px_12px_0px_rgba(0,0,0,0.08)] dark:bg-gray-800/90 rounded-lg border border-gray-100 dark:border-gray-700 overflow-hidden bg-gray-50"]);
            return tv = function() {
                return e
            }
            ,
            e
        }
        function tx() {
            var e = (0,
            c._)(["flex p-4 bg-white dark:bg-gray-800/90 border-t border-gray-100 dark:border-gray-700 rounded-b-lg w-full h-full\n", "\n"]);
            return tx = function() {
                return e
            }
            ,
            e
        }
        function tb() {
            var e = (0,
            c._)(["flex w-full items-center justify-left gap-2 min-h-[1.5rem]"]);
            return tb = function() {
                return e
            }
            ,
            e
        }
        function ty() {
            var e = (0,
            c._)(["border-none focus:ring-gray-200 dark:focus:ring-gray-600 bg-transparent py-0.5 -my-0.5 pl-1 -ml-1 w-full"]);
            return ty = function() {
                return e
            }
            ,
            e
        }
        function tk() {
            var e = (0,
            c._)(["flex-none h-full mt-auto mb-auto"]);
            return tk = function() {
                return e
            }
            ,
            e
        }
        var tM = (0,
        N.vU)({
            sharingModalTitle: {
                id: "thread.sharingModal.title",
                defaultMessage: "Share link to Chat",
                description: "Title of sharing feature in the title of the sharing modal"
            },
            sharingModalDescription: {
                id: "sharingModal.description",
                defaultMessage: "Messages you send after creating your link won't be shared. Anyone with the URL will be able to view the shared chat.",
                description: "Description of sharing feature in the first paragraph of the sharing modal"
            },
            sharingModalBizDescription: {
                id: "sharingModal.bizDescription.1",
                defaultMessage: "Only members of your workspace with the URL will see the latest messages sent in this conversation. Files you attach to the conversation will not be shared, but any file contents referenced in messages will continue to be visible.",
                description: "Description of sharing feature in the first paragraph of the sharing modal"
            },
            existingShareDescription: {
                id: "sharingModal.exisitingDescription",
                defaultMessage: "You have shared this chat <existingLink>before</existingLink>. If you want to update the shared chat content, <deleteLink>delete this link</deleteLink> and create a new shared link.",
                description: "Description in sharing modal when viewing an existing link"
            },
            sharingModalMoreInfo: {
                id: "thread.sharingModal.moreInfo",
                defaultMessage: "More Info",
                description: "Link to a helpdesk article with more information about the sharing modal"
            },
            moderationBlocked: {
                id: "sharingModal.moderationBlocked",
                defaultMessage: "This shared link has been disabled by moderation.",
                description: "Error message in sharing modal when shared link has been moderated."
            },
            confirmCloseWithChanges: {
                id: "thread.sharingModal.confirmCloseWithChanges",
                defaultMessage: "You have unsaved changes. Do you want to continue?",
                description: "Confirmation message when closing share modal with changes"
            },
            confirmDeleteLink: {
                id: "sharingModal.confirmDeleteLink",
                defaultMessage: "Are you sure you want to delete the share link?",
                description: "Confirmation message when deleting share link"
            },
            advancedDataAnalysisSupportDisclaimer: {
                id: "sharingModal.advancedDataAnalysisSupportDisclaimer",
                defaultMessage: "Recipients won’t be able to view Advanced Data Analysis images or download files.",
                description: "Disclaimer about our lack of support for Advanced Data Analysis inline images and file downloads with shared links"
            },
            personalizedDataDisclaimer: {
                id: "sharingModal.personalizedDataDisclaimer",
                defaultMessage: "Any personalized data not present in the conversation won’t be shared with viewers (ex: custom instructions).",
                description: "Disclaimer about our policy to not share personalized data (ex: custom instructions, memory)"
            },
            copied: {
                id: "thread.sharingModal.copied",
                defaultMessage: "Copied!",
                description: "Status message after successfully copying the shared link"
            },
            copying: {
                id: "thread.sharingModal.copying",
                defaultMessage: "Copying...",
                description: "Status message while copying the shared link"
            },
            updateAndCopyLink: {
                id: "thread.sharingModal.updateAndCopyLink",
                defaultMessage: "Update and Copy Link",
                description: "Button text to update and copy the shared link"
            },
            shareYourName: {
                id: "sharingModal.shareYourName",
                defaultMessage: "Share your name",
                description: "Button text to change sharing to show the user's name"
            },
            shareAnonymously: {
                id: "sharingModal.shareAnonymously",
                defaultMessage: "Share anonymously",
                description: "Button text to change sharing to be anonymous"
            },
            deleteLink: {
                id: "sharingModal.deleteLink",
                defaultMessage: "Delete Link",
                description: "Button text to delete the share link"
            },
            failedToCopyLink: {
                id: "thread.sharingModal.failedToCopyLink",
                defaultMessage: "Failed to copy link to clipboard",
                description: "Error message when failing to copy link to clipboard"
            },
            copyLink: {
                id: "thread.sharingModal.copyLink",
                defaultMessage: "Copy Link",
                description: "Button text to copy the shared link"
            },
            copiedSharedConversationURL: {
                id: "thread.sharingModal.copiedSharedConversationURL",
                defaultMessage: "Copied shared conversation URL to clipboard!",
                description: "Success message when shared conversation URL is copied"
            },
            failedToDeleteSharedLink: {
                id: "thread.sharingModal.failedToDeleteSharedLink",
                defaultMessage: "Failed to delete shared link",
                description: "Error message when failing to delete shared link"
            }
        });
        function tw(e) {
            var t = e.serverThreadId
              , n = (0,
            E.oq)(t)
              , r = (0,
            d._)((0,
            j.useState)(function() {
                return (0,
                eW.Z)(function(e, t) {
                    return {
                        title: void 0,
                        highlightedMessageId: void 0,
                        initiallyHighlightedMessageId: void 0,
                        currentNodeId: void 0,
                        shareLinkId: void 0,
                        shareLinkUrl: void 0,
                        isPublic: !1,
                        isDeleted: !1,
                        isAnonymous: !0,
                        linkAlreadyExisted: !1,
                        linkError: void 0,
                        moderationState: void 0
                    }
                })
            }), 1)[0]
              , a = !(0,
            W.B$)() && "root" !== n
              , o = (0,
            j.useRef)(!1);
            return (0,
            j.useEffect)(function() {
                if (a && !o.current) {
                    o.current = !0;
                    var e = E.tQ.getThreadCurrentLeafId(t)
                      , n = E.tQ.getTree(t).getMessageId(e);
                    L.ZP.createShareLink({
                        current_node_id: n,
                        conversation_id: t,
                        is_anonymous: !0
                    }).then(function(e) {
                        r.setState({
                            shareLinkId: e.share_id,
                            shareLinkUrl: e.share_url,
                            isPublic: e.is_public,
                            isDeleted: !e.is_visible,
                            title: e.title,
                            highlightedMessageId: e.highlighted_message_id,
                            initiallyHighlightedMessageId: e.highlighted_message_id,
                            currentNodeId: e.current_node_id,
                            linkAlreadyExisted: e.already_exists,
                            isAnonymous: e.is_anonymous,
                            moderationState: e.moderation_state
                        })
                    }).catch(function(e) {
                        e instanceof eK.Q0 && "string" == typeof e.message ? r.setState({
                            linkError: e.message
                        }) : (ei.m.danger("Failed to copy link to clipboard - could not create link"),
                        B.vm.closeSharingModal())
                    })
                }
            }, [a]),
            (0,
            m.jsx)(eJ.Provider, {
                value: r,
                children: (0,
                m.jsx)(tj, (0,
                i._)({}, e))
            })
        }
        function tT(e) {
            return !0 === e.has_been_auto_blocked || !0 === e.has_been_auto_moderated || !0 === e.has_been_blocked
        }
        function tj(e) {
            var t, n, r, a, l = e.serverThreadId, c = e.currentThreadModel, f = function() {
                (!ec || window.confirm(h.formatMessage(tM.confirmCloseWithChanges))) && B.vm.closeSharingModal()
            }, h = (0,
            R.Z)(), p = (0,
            j.useRef)(null), g = (0,
            d._)((0,
            j.useState)(!1), 2), v = g[0], x = g[1], b = (0,
            d._)((0,
            j.useState)(!1), 2), y = b[0], k = b[1], M = (0,
            d._)((0,
            j.useState)(!1), 2), w = M[0], T = M[1], I = (0,
            j.useContext)(eJ), P = eY(function(e) {
                return e.title
            }), D = eY(function(e) {
                return e.shareLinkId
            }), A = eY(function(e) {
                return e.shareLinkUrl
            }), Z = eY(function(e) {
                return e.isAnonymous
            }), q = eY(function(e) {
                return e.initiallyHighlightedMessageId
            }), z = eY(function(e) {
                return e.currentNodeId
            }), O = eY(function(e) {
                return e.isPublic
            }), G = eY(function(e) {
                return e.linkAlreadyExisted
            }) && O, Q = eY(function(e) {
                return e.linkError
            }), W = eY(function(e) {
                return e.moderationState
            }), V = null != W && tT(W), J = (0,
            F.ec)(F.F_.isBusinessWorkspace), K = (0,
            E.oq)(l), X = (0,
            j.useRef)(), ee = (0,
            j.useRef)();
            (0,
            j.useEffect)(function() {
                G && (X.current = P,
                ee.current = Z)
            }, [G]);
            var et = (0,
            F.aF)()
              , en = (0,
            E.JI)(l, null != z ? z : K)
              , eo = (0,
            j.useMemo)(function() {
                return eX(en)
            }, [en])
              , es = (0,
            E.aS)(l)
              , el = (0,
            E.eY)(l)
              , ed = (t = (0,
            o._)(function(e, t) {
                var n, r, a, o, i, s, l;
                return (0,
                u.Jh)(this, function(d) {
                    switch (d.label) {
                    case 0:
                        k(!0),
                        r = (n = I.getState()).highlightedMessageId,
                        a = n.title,
                        o = n.isDeleted,
                        i = n.isAnonymous;
                        try {
                            (0,
                            eH.S)(t)
                        } catch (e) {
                            return ei.m.warning(h.formatMessage(tM.failedToCopyLink)),
                            k(!1),
                            [2]
                        }
                        d.label = 1;
                    case 1:
                        return d.trys.push([1, 3, 4, 5]),
                        [4, L.ZP.updateShareLink({
                            share_id: e,
                            highlighted_message_id: r,
                            title: null != a ? a : void 0,
                            is_public: !o,
                            is_visible: !o,
                            is_anonymous: i
                        })];
                    case 2:
                        if (tT(s = d.sent().moderation_state))
                            return I.setState({
                                moderationState: s
                            }),
                            [2];
                        return I.setState({
                            isPublic: !0,
                            moderationState: s
                        }),
                        T(!0),
                        setTimeout(function() {
                            B.vm.closeSharingModal(),
                            ei.m.success(h.formatMessage(tM.copiedSharedConversationURL))
                        }, 500),
                        [3, 5];
                    case 3:
                        return (l = d.sent())instanceof eK.Q0 && "string" == typeof l.message && I.setState({
                            linkError: l.message
                        }),
                        [3, 5];
                    case 4:
                        return k(!1),
                        [7];
                    case 5:
                        return [2]
                    }
                })
            }),
            function(e, n) {
                return t.apply(this, arguments)
            }
            )
              , ec = G && (P !== X.current || Z !== ee.current)
              , eu = (0,
            m.jsxs)(er.ZP.Button, {
                onClick: function() {
                    return ed(D, A)
                },
                color: "primary",
                disabled: y || w || null == D || null == A || null != Q || V,
                children: [w ? (0,
                m.jsx)(C.LSm, {
                    className: "icon-sm"
                }) : y ? (0,
                m.jsx)(eN.Z, {}) : (0,
                m.jsx)(C.XKb, {
                    className: "icon-sm"
                }), w ? (0,
                m.jsx)(S.Z, (0,
                i._)({}, tM.copied)) : y ? (0,
                m.jsx)(S.Z, (0,
                i._)({}, tM.copying)) : ec ? (0,
                m.jsx)(S.Z, (0,
                i._)({}, tM.updateAndCopyLink)) : (0,
                m.jsx)(S.Z, (0,
                i._)({}, tM.copyLink))]
            })
              , em = (0,
            j.useCallback)(function(e) {
                var t;
                null == e || e.preventDefault(),
                I.setState({
                    title: null === (t = p.current) || void 0 === t ? void 0 : t.value
                }),
                x(!1)
            }, [I])
              , ef = (0,
            j.useCallback)(function(e) {
                "Enter" === e.key && em()
            }, [em])
              , eh = (n = (0,
            o._)(function() {
                return (0,
                u.Jh)(this, function(e) {
                    switch (e.label) {
                    case 0:
                        return [4, L.ZP.deleteShareLink({
                            share_id: I.getState().shareLinkId
                        }).catch(function(e) {
                            ei.m.danger(h.formatMessage(tM.failedToDeleteSharedLink))
                        }).then(function() {
                            B.vm.closeSharingModal()
                        })];
                    case 1:
                        return e.sent(),
                        [2]
                    }
                })
            }),
            function() {
                return n.apply(this, arguments)
            }
            )
              , ep = (r = (0,
            o._)(function() {
                return (0,
                u.Jh)(this, function(e) {
                    return I.setState({
                        isAnonymous: !0
                    }),
                    E.qN.setState(function(e) {
                        e.threads[l].initialThreadData.authorName = void 0
                    }),
                    [2]
                })
            }),
            function() {
                return r.apply(this, arguments)
            }
            )
              , eg = (a = (0,
            o._)(function() {
                return (0,
                u.Jh)(this, function(e) {
                    return I.setState({
                        isAnonymous: !1
                    }),
                    E.qN.setState(function(e) {
                        e.threads[l].initialThreadData.authorName = null == et ? void 0 : et.name
                    }),
                    [2]
                })
            }),
            function() {
                return a.apply(this, arguments)
            }
            )
              , ev = (0,
            m.jsxs)(tS, {
                $active: v,
                children: [(0,
                m.jsxs)("div", {
                    className: "flex-1 pr-1",
                    children: [void 0 !== P ? v ? (0,
                    m.jsx)(tP, {
                        ref: p,
                        type: "text",
                        defaultValue: null != P ? P : "",
                        autoFocus: !0,
                        onKeyDown: ef,
                        onBlur: em
                    }) : (0,
                    m.jsxs)(tR, {
                        onDoubleClick: function() {
                            return x(!0)
                        },
                        children: [P, v || null == P || G ? null : (0,
                        m.jsx)("button", {
                            onClick: function() {
                                return x(!0)
                            },
                            className: "text-gray-500",
                            children: (0,
                            m.jsx)(C.Nte, {
                                className: "icon-sm"
                            })
                        })]
                    }) : (0,
                    m.jsx)("div", {
                        className: "h-6"
                    }), (0,
                    m.jsxs)("div", {
                        className: "mt-1 text-gray-500",
                        children: [!Z && (0,
                        m.jsx)("span", {
                            children: "".concat(null == et ? void 0 : et.name, " \xb7 ")
                        }), (0,
                        m.jsx)(N.Ji, {
                            value: new Date,
                            month: "long",
                            day: "numeric",
                            year: "numeric"
                        })]
                    })]
                }), (0,
                m.jsx)(tD, {
                    children: (0,
                    m.jsxs)(eQ.fC, {
                        children: [(0,
                        m.jsx)(eQ.xz, {
                            asChild: !0,
                            children: (0,
                            m.jsx)(H.z, {
                                color: "neutral",
                                className: "mb-auto mt-auto",
                                children: (0,
                                m.jsx)(_.JEI, {})
                            })
                        }), (0,
                        m.jsx)(eQ.h_, {
                            children: (0,
                            m.jsxs)(eQ.VY, {
                                className: "PopoverContent rounded-sm bg-white p-2 pb-0.5 shadow-xl dark:bg-gray-800/90",
                                side: "top",
                                align: "end",
                                children: [Z && (0,
                                m.jsx)(H.z, {
                                    color: "neutral",
                                    className: "mb-2 flex w-full border-0",
                                    onClick: eg,
                                    children: (0,
                                    m.jsxs)("div", {
                                        className: "flex w-full items-start",
                                        children: [(0,
                                        m.jsx)(C.fzv, {
                                            className: "icon-sm float-left mb-auto mr-4 mt-auto"
                                        }), (0,
                                        m.jsx)("div", {
                                            children: (0,
                                            m.jsx)(S.Z, (0,
                                            i._)({}, tM.shareYourName))
                                        })]
                                    })
                                }), !Z && (0,
                                m.jsx)(H.z, {
                                    color: "neutral",
                                    className: "mb-2 flex w-full border-0",
                                    onClick: ep,
                                    children: (0,
                                    m.jsxs)("div", {
                                        className: "flex w-full items-start",
                                        children: [(0,
                                        m.jsx)(C.fzv, {
                                            className: "icon-sm float-left mb-auto mr-4 mt-auto"
                                        }), (0,
                                        m.jsx)("div", {
                                            children: (0,
                                            m.jsx)(S.Z, (0,
                                            i._)({}, tM.shareAnonymously))
                                        })]
                                    })
                                }), G && (0,
                                m.jsx)(H.z, {
                                    color: "neutral",
                                    className: "mb-2 flex w-full border-0",
                                    onClick: eh,
                                    children: (0,
                                    m.jsxs)("div", {
                                        className: "flex w-full items-start",
                                        children: [(0,
                                        m.jsx)(C.Ybf, {
                                            className: "icon-sm float-left mb-auto mr-4 mt-auto"
                                        }), (0,
                                        m.jsx)("div", {
                                            children: (0,
                                            m.jsx)(S.Z, (0,
                                            i._)({}, tM.deleteLink))
                                        })]
                                    })
                                })]
                            })
                        })]
                    })
                })]
            })
              , ex = Q;
            return null == ex && ((null == W ? void 0 : W.has_been_auto_blocked) || (null == W ? void 0 : W.has_been_auto_moderated) || (null == W ? void 0 : W.has_been_blocked)) && (ex = (0,
            m.jsx)(S.Z, (0,
            i._)({}, tM.moderationBlocked))),
            (0,
            m.jsxs)(ea.Z, {
                isOpen: !0,
                onClose: function() {
                    f()
                },
                size: "custom",
                className: "max-w-[550px]",
                type: "success",
                title: h.formatMessage(tM.sharingModalTitle),
                closeButton: (0,
                m.jsx)(er.ZP.CloseButton, {
                    onClose: function() {
                        f()
                    }
                }),
                children: [null != ex && (0,
                m.jsx)("div", {
                    className: "mb-4 rounded-md bg-red-500 p-4 text-white",
                    children: ex
                }), (0,
                m.jsx)("div", {
                    className: (0,
                    Y.default)("w-full"),
                    children: (0,
                    m.jsx)("p", {
                        className: (0,
                        Y.default)("mb-6 text-gray-500"),
                        children: G ? (0,
                        m.jsx)(S.Z, (0,
                        s._)((0,
                        i._)({}, tM.existingShareDescription), {
                            values: {
                                existingLink: function(e) {
                                    return (0,
                                    m.jsx)("a", {
                                        href: A,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        className: "underline",
                                        children: e
                                    })
                                },
                                deleteLink: function(e) {
                                    return (0,
                                    m.jsx)("a", {
                                        href: "#",
                                        onClick: function(e) {
                                            e.preventDefault(),
                                            window.confirm(h.formatMessage(tM.confirmDeleteLink)) && eh()
                                        },
                                        className: "underline",
                                        children: e
                                    })
                                }
                            }
                        })) : (0,
                        m.jsx)(S.Z, (0,
                        i._)({}, J ? tM.sharingModalBizDescription : tM.sharingModalDescription))
                    })
                }), (0,
                m.jsx)(tC, {
                    shouldShowCodeInterpreterDisclaimer: eo,
                    shouldShowPersonalizedDataDisclaimer: es || el
                }), (0,
                m.jsx)(tN, {
                    children: (0,
                    m.jsx)("div", {
                        className: "flex h-full max-w-full flex-1 flex-col",
                        children: (0,
                        m.jsx)(t_, {
                            children: (0,
                            m.jsxs)(tI, {
                                children: [(0,
                                m.jsx)(eG.f, {
                                    ratio: 1.9,
                                    className: "overflow-auto bg-white dark:bg-gray-800",
                                    children: null != z ? (0,
                                    m.jsx)(U.gB.Provider, {
                                        value: {
                                            serverSharedThreadId: null
                                        },
                                        children: (0,
                                        m.jsx)(tl, {
                                            onChangeItemInView: $(),
                                            onRequestMoreCompletions: $(),
                                            onChangeRating: $(),
                                            onRequestCompletion: $(),
                                            clientThreadId: l,
                                            conversationLeafId: z,
                                            currentThreadModel: c,
                                            inlineEmbeddedDisplay: !0,
                                            initiallyHighlightedMessageId: q
                                        })
                                    }) : (0,
                                    m.jsx)("div", {
                                        className: "flex h-full items-center justify-center",
                                        children: (0,
                                        m.jsx)(eN.Z, {
                                            className: "text-gray-400 dark:text-gray-500"
                                        })
                                    })
                                }), ev]
                            })
                        })
                    })
                }), (0,
                m.jsx)(er.ZP.Actions, {
                    isSpacedBetween: !0,
                    primaryButton: eu,
                    secondaryButton: (0,
                    m.jsx)("div", {
                        children: (0,
                        m.jsxs)("a", {
                            href: J ? "https://help.openai.com/en/articles/8474715-chatgpt-enterprise-shared-links-faq" : "https://help.openai.com/en/articles/7925741-chatgpt-shared-links-faq",
                            className: "flex items-center gap-2 text-gray-500 hover:text-gray-600 dark:hover:text-gray-400",
                            target: "_blank",
                            rel: "noreferrer",
                            children: [h.formatMessage(tM.sharingModalMoreInfo), (0,
                            m.jsx)(C.AlO, {
                                className: "icon-sm"
                            })]
                        })
                    })
                })]
            })
        }
        var tC = function(e) {
            var t = e.shouldShowCodeInterpreterDisclaimer
              , n = e.shouldShowPersonalizedDataDisclaimer;
            return (0,
            m.jsxs)(m.Fragment, {
                children: [t && (0,
                m.jsx)(e0, {
                    icon: C.H33,
                    children: (0,
                    m.jsx)(S.Z, (0,
                    i._)({}, tM.advancedDataAnalysisSupportDisclaimer))
                }), n && (0,
                m.jsxs)("p", {
                    className: "mb-6 flex flex-row gap-2.5 text-gray-500",
                    children: [(0,
                    m.jsx)(C.H33, {
                        className: "icon-sm mt-1 flex-shrink-0"
                    }), (0,
                    m.jsx)(S.Z, (0,
                    i._)({}, tM.personalizedDataDisclaimer))]
                })]
            })
        }
          , t_ = P.Z.main(tp())
          , tI = P.Z.div(tg())
          , tN = P.Z.div(tv())
          , tS = P.Z.div(tx(), function(e) {
            return e.$active,
            ""
        })
          , tR = P.Z.div(tb())
          , tP = P.Z.input(ty())
          , tD = P.Z.div(tk())
          , tA = n(94750)
          , tL = n(60478)
          , tZ = n(74966)
          , tE = n(76768)
          , tq = n(42474)
          , tB = n(12221)
          , tF = n(20987)
          , tU = n(73779)
          , tz = n(65990);
        function tO(e) {
            var t = e.clientThreadId
              , n = e.isNewThread
              , r = e.currentModelId
              , a = e.showPromptStarters
              , o = e.onRequestCompletion
              , i = e.onNewThreadCreationFinished
              , s = e.promptTextareaRef
              , l = (0,
            W.B$)()
              , d = (0,
            E.qN)(function(e) {
                var n, r, a, o, i, s;
                return i = (null === (r = (n = E.iN.getCurrentNode(t, e)).message) || void 0 === r ? void 0 : r.author.role) === A.uU.User,
                s = (null === (a = n.metadata) || void 0 === a ? void 0 : a.err) != null && (null === (o = n.metadata) || void 0 === o ? void 0 : o.errCode) !== tL.qS.ContentPolicy,
                i || s
            });
            return !l && d ? (0,
            m.jsx)(tG, {
                clientThreadId: t
            }) : (0,
            m.jsxs)(tE.Z, {
                children: [n && (0,
                m.jsx)(tZ.sw, {}), (0,
                m.jsx)(tQ, {
                    clientThreadId: t,
                    currentModelId: r,
                    isNewThread: n,
                    showPromptStarters: a,
                    onRequestCompletion: o,
                    onNewThreadCreationFinished: i,
                    promptTextareaRef: s
                })]
            })
        }
        function tG(e) {
            var t = e.clientThreadId
              , n = (0,
            tF.Z)(t)
              , r = (0,
            e8.WA)(t)
              , a = (0,
            E.qN)(function(e) {
                var n;
                return (null === (n = E.iN.getCurrentNode(t, e).metadata) || void 0 === n ? void 0 : n.errCode) === tB.uU
            })
              , o = (0,
            tB.Y8)(function(e) {
                return e.isoDate
            })
              , s = (0,
            z.w$)()
              , l = (0,
            E.oq)(t);
            return a && null != o && "" !== o ? null : (0,
            m.jsxs)("div", {
                children: [(0,
                m.jsx)("div", {
                    className: "mb-3 text-center text-xs",
                    children: (0,
                    m.jsx)(S.Z, (0,
                    i._)({}, tH.errorGeneratingResponse))
                }), (0,
                m.jsx)("div", {
                    className: "flex items-center md:mb-4",
                    children: (0,
                    m.jsxs)(H.z, {
                        as: "button",
                        color: "primary",
                        onClick: function() {
                            n({
                                id: l,
                                eventMetadata: {
                                    eventSource: "mouse"
                                },
                                conversationMode: r
                            })
                        },
                        className: "m-auto",
                        children: [(0,
                        m.jsx)(C.Qxo, {
                            className: (0,
                            Y.default)("flex-shrink-0", s ? "icon-xs" : "icon-sm")
                        }), (0,
                        m.jsx)(S.Z, (0,
                        i._)({}, tH.regenerateResponse))]
                    })
                })]
            })
        }
        function tQ(e) {
            var t, n, r, a, o, i, s, l, d, c, u, h, p, x, b, y, k = e.clientThreadId, M = e.currentModelId, w = e.isNewThread, T = e.onRequestCompletion, C = e.onNewThreadCreationFinished, _ = e.promptTextareaRef, I = e.showPromptStarters, N = (0,
            E.oq)(k), S = (0,
            E.Hk)(k), R = (0,
            V.i)(), P = (0,
            W.Yk)(S), D = (0,
            e8.WA)(k), q = (0,
            j.useCallback)(function(e) {
                g.A.logEvent(v.M.continueCompletion),
                T({
                    type: A.Os.Continue,
                    promptId: e,
                    eventMetadata: {
                        eventSource: "mouse"
                    },
                    cancelActiveRequests: !1,
                    completionMetadata: {
                        conversationMode: D
                    }
                })
            }, [T, D]), B = (0,
            j.useContext)(U.QL).historyDisabled, z = (0,
            j.useCallback)(function(e, t) {
                var n, r = E.tQ.getTree(k);
                r.hasReceivedServerCompletion || B || (null === (n = r.getParent(t).metadata) || void 0 === n ? void 0 : n.errCode) === tL.qS.ContentPolicy || setTimeout(function() {
                    C()
                }, 500),
                W.hx.abortRequest(t) && E.tQ.updateTree(k, function(e) {
                    var t = E.tQ.getThreadCurrentLeafId(k);
                    e.updateNodeMessageMetadata(t, {
                        finish_details: {
                            type: "interrupted"
                        }
                    })
                })
            }, [C, B, k]), O = (0,
            j.useCallback)(function(e, t, n, r, a, o) {
                var i = E.tQ.getThreadCurrentLeafId(k);
                E.tQ.setNewThreadConversationModeMetadata(k, null == r ? void 0 : r.conversationMode),
                E.tQ.updateTree(k, function(n) {
                    n.addNode(e, t, i, A.uU.User, void 0, a)
                }),
                T({
                    type: A.Os.Next,
                    promptId: e,
                    eventMetadata: n,
                    cancelActiveRequests: !0,
                    completionMetadata: r,
                    appendMessages: o
                })
            }, [k, T]), G = (0,
            E.lA)(k, N), Q = (0,
            E.dz)(k, N), H = (0,
            W.Yk)(S), J = (0,
            j.useMemo)(function() {
                return !H && !G && Q
            }, [G, Q, H]), Y = (0,
            E.Kt)(k), K = (a = (0,
            F.hz)(),
            o = (0,
            e8.WA)(k),
            i = (0,
            f.Po)(k),
            l = (s = (0,
            tU.QH)()).gizmoEditorData,
            d = s.mode,
            c = o.kind === A.OL.GizmoMagicCreate || o.kind === A.OL.GizmoTest || o.kind === A.OL.GizmoInteraction,
            h = (u = (0,
            eT.a)({
                queryKey: ["promptStarters", k],
                queryFn: function() {
                    return L.ZP.getSampledPromptStarter(4)
                },
                enabled: a.has(Z.Zz) && w && !Y && !c
            })).data,
            p = u.isLoading,
            x = u.isSuccess,
            a.has(Z.Zz) ? "test" === d && l ? {
                promptStarters: null !== (n = null === (t = l.promptStarters) || void 0 === t ? void 0 : t.map(function(e) {
                    return {
                        title: "",
                        body: e,
                        prompt: e
                    }
                })) && void 0 !== n ? n : [],
                isLoading: !1,
                isSuccess: !0
            } : null != i ? {
                promptStarters: null === (r = i.gizmo.display.prompt_starters) || void 0 === r ? void 0 : r.map(function(e) {
                    return {
                        title: "",
                        body: e,
                        prompt: e
                    }
                }),
                isLoading: !1,
                isSuccess: !0
            } : {
                promptStarters: (null == h ? void 0 : h.items.map(function(e) {
                    return {
                        title: e.title,
                        body: e.description,
                        prompt: e.prompt
                    }
                })) || [],
                isLoading: p,
                isSuccess: x
            } : {
                promptStarters: [],
                isLoading: !1,
                isSuccess: !0
            }), $ = K.promptStarters, X = K.isSuccess, ee = (0,
            tz.x0)(), et = (null == ee ? void 0 : ee.messageId) === (null === (b = E.tQ.getTree(k).getLastValidNode(N)) || void 0 === b ? void 0 : null === (y = b.message) || void 0 === y ? void 0 : y.id) ? null == ee ? void 0 : ee.suggestions : I && !Y && X ? $ : void 0, en = (0,
            e9.iu)().size ? R.displayingSideBySideFeedback && R.unskippable ? "feedbackRequired" : null : "noModelsAvailable", er = (0,
            E.r7)(k);
            return (0,
            m.jsx)(tq.ZP, {
                clientThreadId: k,
                onCreateNewCompletion: O,
                onAbortCompletion: z,
                onContinueGenerating: q,
                currentModelId: M,
                isNewThread: w,
                isCompletionInProgress: P,
                className: "stretch mx-2 flex flex-row gap-3 last:mb-2 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl",
                canContinue: J,
                suggestions: null != et ? et : [],
                disabled: !!en,
                disabledReason: null != en ? en : void 0,
                canPause: H && "gpt-4-pbrowse" !== M,
                isInteractableSharedThread: er,
                ref: _
            }, k)
        }
        var tH = (0,
        N.vU)({
            errorGeneratingResponse: {
                id: "PromptTextarea.errorGeneratingResponse",
                defaultMessage: "There was an error generating a response",
                description: "Error message shown when the response generation fails"
            },
            regenerateResponse: {
                id: "PromptTextarea.regenerateResponse",
                defaultMessage: "Regenerate",
                description: "Button label for regenerating response"
            }
        });
        function tW() {
            var e = (0,
            c._)(["bg-yellow-200 text-yellow-900 py-0.5 px-1.5 text-xs md:text-sm rounded-md uppercase"]);
            return tW = function() {
                return e
            }
            ,
            e
        }
        function tV() {
            var e = (0,
            c._)(["bg-brand-blue-800 text-white"]);
            return tV = function() {
                return e
            }
            ,
            e
        }
        function tJ() {
            var e = (0,
            c._)(["bg-brand-green-800 text-white"]);
            return tJ = function() {
                return e
            }
            ,
            e
        }
        var tY = P.Z.span(tW())
          , tK = (0,
        P.Z)(tY)(tV())
          , t$ = (0,
        P.Z)(tY)(tJ())
          , tX = function() {
            var e = (0,
            F.ec)(F.F_.isEnterprisePlan)
              , t = (0,
            F.ec)(F.F_.isTeamPlan)
              , n = (0,
            F.ec)(F.F_.isPersonalWorkspace)
              , r = (0,
            F.WY)();
            return e ? (0,
            m.jsx)(tK, {
                children: (0,
                m.jsx)(S.Z, (0,
                i._)({}, t0.enterprisePlanName))
            }) : t ? (0,
            m.jsx)(t$, {
                children: (0,
                m.jsx)(S.Z, (0,
                i._)({}, t0.teamPlanName))
            }) : n && r ? (0,
            m.jsx)(tY, {
                children: "Plus"
            }) : null
        }
          , t0 = (0,
        N.vU)({
            enterprisePlanName: {
                id: "badge.enterprisePlanName",
                defaultMessage: "Enterprise",
                description: "label for enterprise tier account"
            },
            teamPlanName: {
                id: "badge.teamPlanName",
                defaultMessage: "Team",
                description: "label for team tier account"
            }
        })
          , t1 = n(41187)
          , t2 = n(75318);
        function t4() {
            var e = (0,
            c._)(["text-gray-800 w-full mx-auto md:max-w-2xl lg:max-w-3xl md:h-full md:flex md:flex-col px-6 dark:text-gray-100"]);
            return t4 = function() {
                return e
            }
            ,
            e
        }
        function t3() {
            var e = (0,
            c._)(["text-4xl font-semibold text-center mt-6 sm:mt-[20vh] ml-auto mr-auto mb-10 sm:mb-16 flex gap-2 items-center justify-center"]);
            return t3 = function() {
                return e
            }
            ,
            e
        }
        function t5() {
            var e = (0,
            c._)(["md:flex items-start text-center gap-3.5"]);
            return t5 = function() {
                return e
            }
            ,
            e
        }
        function t6() {
            var e = (0,
            c._)(["flex flex-col mb-8 md:mb-auto gap-3.5 flex-1"]);
            return t6 = function() {
                return e
            }
            ,
            e
        }
        function t7() {
            var e = (0,
            c._)(["flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2"]);
            return t7 = function() {
                return e
            }
            ,
            e
        }
        function t8() {
            var e = (0,
            c._)(["flex flex-col gap-3.5 w-full sm:max-w-md m-auto"]);
            return t8 = function() {
                return e
            }
            ,
            e
        }
        function t9() {
            var e = (0,
            c._)(["w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md"]);
            return t9 = function() {
                return e
            }
            ,
            e
        }
        function ne() {
            var e = (0,
            c._)(["w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md after:content-['\"'] before:content-['\"']"]);
            return ne = function() {
                return e
            }
            ,
            e
        }
        function nt() {
            var e = (0,
            c._)(["w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-900"]);
            return nt = function() {
                return e
            }
            ,
            e
        }
        P.Z.div(t4()),
        P.Z.h1(t3());
        var nn = P.Z.div(t5())
          , nr = P.Z.div(t6())
          , na = P.Z.h2(t7())
          , no = P.Z.ul(t8())
          , ni = P.Z.li(t9());
        P.Z.li(ne());
        var ns = P.Z.button(nt());
        function nl() {
            var e = (0,
            c._)(["text-4xl font-semibold text-center mt-6 sm:mt-[6vh] ml-auto mr-auto mb-4 sm:mb-16 flex gap-2 items-center justify-center"]);
            return nl = function() {
                return e
            }
            ,
            e
        }
        function nd() {
            var e = (0,
            c._)(["text-gray-800 w-full mx-auto md:max-w-2xl lg:max-w-3xl md:flex md:flex-col px-6 dark:text-gray-100"]);
            return nd = function() {
                return e
            }
            ,
            e
        }
        var nc = (0,
        N.vU)({
            title: {
                id: "Placeholder.title",
                description: "Title text for the Placeholder component",
                defaultMessage: "ChatGPT"
            },
            examplesHeader: {
                id: "Placeholder.examplesHeader",
                description: "Header text for the examples list",
                defaultMessage: "Examples"
            },
            capabilitiesHeader: {
                id: "Placeholder.capabilitiesHeader",
                description: "Header text for the capabilities list",
                defaultMessage: "Capabilities"
            },
            limitationsHeader: {
                id: "Placeholder.limitationsHeader",
                description: "Header text for the limitations list",
                defaultMessage: "Limitations"
            },
            quantumComputingExample: {
                id: "Placeholder.quantumComputingExample",
                description: "Example text for quantum computing explanation",
                defaultMessage: "Explain quantum computing in simple terms"
            },
            birthdayIdeasExample: {
                id: "Placeholder.birthdayIdeasExample",
                description: "Example text for creative birthday ideas",
                defaultMessage: "Got any creative ideas for a 10 year old's birthday?"
            },
            httpRequestExample: {
                id: "Placeholder.httpRequestExample",
                description: "Example text for making an HTTP request in Javascript",
                defaultMessage: "How do I make an HTTP request in Javascript?"
            },
            remembersEarlierConversation: {
                id: "Placeholder.remembersEarlierConversation",
                description: "Capability description for remembering earlier conversation",
                defaultMessage: "Remembers what user said earlier in the conversation"
            },
            allowsFollowUpCorrections: {
                id: "Placeholder.allowsFollowUpCorrections",
                description: "Capability description for allowing follow-up corrections",
                defaultMessage: "Allows user to provide follow-up corrections"
            },
            declinesInappropriateRequests: {
                id: "Placeholder.declinesInappropriateRequests",
                description: "Capability description for declining inappropriate requests",
                defaultMessage: "Trained to decline inappropriate requests"
            },
            mayGenerateIncorrectInfo: {
                id: "Placeholder.mayGenerateIncorrectInfo",
                description: "Limitation description for occasionally generating incorrect information",
                defaultMessage: "May occasionally generate incorrect information"
            },
            mayProduceHarmfulInstructions: {
                id: "Placeholder.mayProduceHarmfulInstructions",
                description: "Limitation description for occasionally producing harmful instructions or biased content",
                defaultMessage: "May occasionally produce harmful instructions or biased content"
            },
            limitedKnowledgeAfter2021: {
                id: "Placeholder.limitedKnowledgeAfter2021",
                description: "Limitation description for limited knowledge of world and events after 2021",
                defaultMessage: "Limited knowledge of world and events after 2021"
            }
        });
        function nu(e) {
            var t = e.text
              , n = e.onChangeCurrentPrompt
              , r = (0,
            j.useCallback)(function() {
                n(t)
            }, [t, n]);
            return (0,
            m.jsxs)(ns, {
                onClick: r,
                children: ['"', t, '" →']
            })
        }
        function nm(e) {
            var t = function(e) {
                var t;
                null == n || null === (t = n.current) || void 0 === t || t.setInputValue(e)
            }
              , n = e.promptTextareaRef
              , r = (0,
            R.Z)();
            return (0,
            m.jsxs)(nh, {
                children: [(0,
                m.jsxs)(nf, {
                    children: [(0,
                    m.jsx)(S.Z, (0,
                    i._)({}, nc.title)), (0,
                    m.jsx)(tX, {})]
                }), (0,
                m.jsxs)(nn, {
                    children: [(0,
                    m.jsxs)(nr, {
                        children: [(0,
                        m.jsxs)(na, {
                            children: [(0,
                            m.jsx)(C.kXG, {
                                className: "icon-lg"
                            }), (0,
                            m.jsx)(S.Z, (0,
                            i._)({}, nc.examplesHeader))]
                        }), (0,
                        m.jsxs)(no, {
                            children: [(0,
                            m.jsx)(nu, {
                                text: r.formatMessage(nc.quantumComputingExample),
                                onChangeCurrentPrompt: t
                            }), (0,
                            m.jsx)(nu, {
                                text: r.formatMessage(nc.birthdayIdeasExample),
                                onChangeCurrentPrompt: t
                            }), (0,
                            m.jsx)(nu, {
                                text: r.formatMessage(nc.httpRequestExample),
                                onChangeCurrentPrompt: t
                            })]
                        })]
                    }), (0,
                    m.jsxs)(nr, {
                        children: [(0,
                        m.jsxs)(na, {
                            children: [(0,
                            m.jsx)(t2.Z, {
                                className: "icon-lg"
                            }), (0,
                            m.jsx)(S.Z, (0,
                            i._)({}, nc.capabilitiesHeader))]
                        }), (0,
                        m.jsxs)(no, {
                            children: [(0,
                            m.jsx)(ni, {
                                children: (0,
                                m.jsx)(S.Z, (0,
                                i._)({}, nc.remembersEarlierConversation))
                            }), (0,
                            m.jsx)(ni, {
                                children: (0,
                                m.jsx)(S.Z, (0,
                                i._)({}, nc.allowsFollowUpCorrections))
                            }), (0,
                            m.jsx)(ni, {
                                children: (0,
                                m.jsx)(S.Z, (0,
                                i._)({}, nc.declinesInappropriateRequests))
                            })]
                        })]
                    }), (0,
                    m.jsxs)(nr, {
                        children: [(0,
                        m.jsxs)(na, {
                            children: [(0,
                            m.jsx)(C.BJv, {
                                className: "icon-lg"
                            }), (0,
                            m.jsx)(S.Z, (0,
                            i._)({}, nc.limitationsHeader))]
                        }), (0,
                        m.jsxs)(no, {
                            children: [(0,
                            m.jsx)(ni, {
                                children: (0,
                                m.jsx)(S.Z, (0,
                                i._)({}, nc.mayGenerateIncorrectInfo))
                            }), (0,
                            m.jsx)(ni, {
                                children: (0,
                                m.jsx)(S.Z, (0,
                                i._)({}, nc.mayProduceHarmfulInstructions))
                            }), (0,
                            m.jsx)(ni, {
                                children: (0,
                                m.jsx)(S.Z, (0,
                                i._)({}, nc.limitedKnowledgeAfter2021))
                            })]
                        })]
                    })]
                })]
            })
        }
        var nf = P.Z.h1(nl())
          , nh = P.Z.div(nd())
          , np = n(80984)
          , ng = n(33377);
        function nv(e) {
            var t, n = e.currentModelId, r = (0,
            e9.fm)(), a = (0,
            e9.Q_)(), o = (0,
            e9.B9)(), i = void 0 !== n ? o.get(n) : void 0, s = (0,
            q.H)().isPluginsAvailable;
            return i && a ? (0,
            m.jsxs)("div", {
                className: "relative flex flex-col items-stretch justify-center gap-2 sm:items-center",
                children: [(0,
                m.jsx)(np.ZP, {
                    currentModel: i,
                    onModelChange: r
                }), s && (null == i ? void 0 : null === (t = i.enabledTools) || void 0 === t ? void 0 : t.includes("tools3")) && (0,
                m.jsx)(ng.Z, {
                    theme: "mini"
                })]
            }) : null
        }
        function nx() {
            var e = (0,
            c._)(["px-2 w-full flex flex-col py-2 md:py-6 sticky top-0"]);
            return nx = function() {
                return e
            }
            ,
            e
        }
        function nb() {
            var e = (0,
            c._)(["text-4xl font-semibold text-center text-gray-200 dark:text-gray-600 ml-auto mr-auto mb-10 sm:mb-16 flex gap-2 items-center justify-center flex-grow"]);
            return nb = function() {
                return e
            }
            ,
            e
        }
        var ny = "ChatGPT"
          , nk = function(e) {
            var t = e.clientThreadId
              , n = e.currentModel
              , r = e.promptTextareaRef
              , a = (0,
            F.hz)()
              , o = (0,
            F.$T)()
              , i = (0,
            e9.iu)()
              , s = (0,
            e9.ZL)();
            if ((0,
            ew.Ml)())
                return (0,
                m.jsx)(t1.iD, {
                    clientThreadId: t,
                    currentModel: n
                });
            if (a.has(Z.Zz))
                return o || s ? null : (0,
                m.jsx)(nM, {
                    currentModelId: n.id
                });
            var l = a.has("model_switcher") && i.size > 1
              , d = !o;
            return (0,
            m.jsxs)(m.Fragment, {
                children: [d && (0,
                m.jsx)(nw, {
                    children: (0,
                    m.jsx)(nv, {
                        currentModelId: n.id
                    })
                }), o || s || l ? d ? (0,
                m.jsx)("div", {
                    className: "align-center flex h-full w-full flex-col justify-center self-center px-2 pb-2 md:pb-[8vh]",
                    children: (0,
                    m.jsxs)(nT, {
                        children: [ny, (0,
                        m.jsx)(tX, {})]
                    })
                }) : null : (0,
                m.jsx)(nm, {
                    promptTextareaRef: r
                })]
            })
        }
          , nM = function(e) {
            var t = e.currentModelId;
            return (0,
            m.jsxs)("div", {
                className: "flex h-full flex-col items-center justify-between pb-64",
                children: [(0,
                m.jsx)(nw, {
                    children: (0,
                    m.jsx)(nv, {
                        currentModelId: t
                    })
                }), (0,
                m.jsx)("div", {
                    className: "flex h-full w-full pb-2 md:pb-[8vh]",
                    children: (0,
                    m.jsxs)(nT, {
                        children: [ny, (0,
                        m.jsx)(tX, {})]
                    })
                })]
            })
        }
          , nw = P.Z.div(nx())
          , nT = P.Z.h1(nb())
          , nj = n(25913)
          , nC = n(9304);
        function n_(e) {
            return nI.apply(this, arguments)
        }
        function nI() {
            return (nI = (0,
            o._)(function(e) {
                var t, n;
                return (0,
                u.Jh)(this, function(r) {
                    switch (r.label) {
                    case 0:
                        return (t = (0,
                        d._)(e.queryKey, 2))[0],
                        n = t[1],
                        [4, L.ZP.getThreadInterpreterState(n).then(function(e) {
                            return 0 === e.time_remaining_ms && e.kernel_started && ei.m.warning("This advanced data analysis (beta) chat has timed out. You may continue the conversation, but previous files, links, and code blocks below may not work as expected.", {
                                hasCloseButton: !0,
                                duration: 0
                            }),
                            e
                        })];
                    case 1:
                        return [2, r.sent()]
                    }
                })
            })).apply(this, arguments)
        }
        var nN = n(45567)
          , nS = n(93778)
          , nR = n(71690)
          , nP = n(42545);
        (r = a || (a = {}))[r.GPT_AVAILABLE = 0] = "GPT_AVAILABLE",
        r[r.GPT_UNAVAILABLE = 1] = "GPT_UNAVAILABLE",
        r[r.DEFAULT_GPT = 2] = "DEFAULT_GPT";
        var nD = function(e) {
            var t = e.threadData;
            return e.gizmo ? a.GPT_AVAILABLE : null != t.gizmoId ? a.GPT_UNAVAILABLE : a.DEFAULT_GPT
        }
          , nA = function(e) {
            var t = e.clientThreadId
              , n = (0,
            ew.Og)()
              , r = (0,
            ew.Jq)()
              , o = (0,
            E.UL)(t)
              , l = (0,
            F.m0)()
              , d = (0,
            f.kg)(o.gizmoId)
              , c = d.data;
            if (d.isLoading || void 0 === n)
                return null;
            if (!l && !1 === n)
                return c ? (0,
                m.jsx)(nP.p, {
                    href: (0,
                    f.m_)(c),
                    children: (0,
                    m.jsx)("div", {
                        children: (0,
                        m.jsx)(S.Z, (0,
                        s._)((0,
                        i._)({}, nL.userUpgrade), {
                            values: {
                                gizmoName: null == c ? void 0 : c.gizmo.display.name,
                                bolded: function(e) {
                                    return (0,
                                    m.jsx)("span", {
                                        className: "font-bold",
                                        children: e
                                    })
                                }
                            }
                        }))
                    })
                }) : (0,
                m.jsx)(nP.p, {
                    href: (0,
                    G.cy)(),
                    children: (0,
                    m.jsx)("div", {
                        children: (0,
                        m.jsx)(S.Z, (0,
                        s._)((0,
                        i._)({}, nL.userUpgradeNoGizmo), {
                            values: {
                                bolded: function(e) {
                                    return (0,
                                    m.jsx)("span", {
                                        className: "font-bold",
                                        children: e
                                    })
                                }
                            }
                        }))
                    })
                });
            var u = nD({
                threadData: o,
                gizmo: c
            });
            return function() {
                switch (u) {
                case a.GPT_AVAILABLE:
                    if (!c)
                        return null;
                    return (0,
                    m.jsx)(nP.p, {
                        href: (0,
                        f.m_)(c),
                        children: (0,
                        m.jsx)("div", {
                            children: (0,
                            m.jsx)(S.Z, (0,
                            s._)((0,
                            i._)({}, nL.gptAvailable), {
                                values: {
                                    gizmoName: null == c ? void 0 : c.gizmo.display.name,
                                    bolded: function(e) {
                                        return (0,
                                        m.jsx)("span", {
                                            className: "font-bold",
                                            children: e
                                        })
                                    }
                                }
                            }))
                        })
                    });
                case a.GPT_UNAVAILABLE:
                    if (!r)
                        return (0,
                        m.jsx)(nP.p, {
                            href: "/",
                            children: (0,
                            m.jsx)("div", {
                                children: (0,
                                m.jsx)(S.Z, (0,
                                s._)((0,
                                i._)({}, nL.gptDefault), {
                                    values: {
                                        bolded: function(e) {
                                            return (0,
                                            m.jsx)("span", {
                                                className: "font-bold",
                                                children: e
                                            })
                                        }
                                    }
                                }))
                            })
                        });
                    return (0,
                    m.jsx)(nP.p, {
                        href: (0,
                        G.AA)(),
                        children: (0,
                        m.jsx)("div", {
                            children: (0,
                            m.jsx)(S.Z, (0,
                            s._)((0,
                            i._)({}, nL.gptUnavailable), {
                                values: {
                                    bolded: function(e) {
                                        return (0,
                                        m.jsx)("span", {
                                            className: "font-bold",
                                            children: e
                                        })
                                    }
                                }
                            }))
                        })
                    });
                case a.DEFAULT_GPT:
                default:
                    return (0,
                    m.jsx)(nP.p, {
                        href: "/",
                        children: (0,
                        m.jsx)("div", {
                            children: (0,
                            m.jsx)(S.Z, (0,
                            s._)((0,
                            i._)({}, nL.gptDefault), {
                                values: {
                                    bolded: function(e) {
                                        return (0,
                                        m.jsx)("span", {
                                            className: "font-bold",
                                            children: e
                                        })
                                    }
                                }
                            }))
                        })
                    })
                }
            }()
        }
          , nL = (0,
        N.vU)({
            gptAvailable: {
                id: "GizmoSharedConversationCTA.gptAvailable",
                defaultMessage: "Chat with <bolded>{gizmoName}</bolded> on ChatGPT",
                description: "CTA for a shared conversation with a GPT"
            },
            gptUnavailable: {
                id: "GizmoSharedConversationCTA.gptUnavailable",
                defaultMessage: "Create your own <bolded>GPT</bolded>",
                description: "CTA for a shared conversation with a GPT that is no longer available"
            },
            gptDefault: {
                id: "GizmoSharedConversationCTA.gptDefault",
                defaultMessage: "Get started with <bolded>ChatGPT</bolded>",
                description: "CTA for a shared conversation with the default GPT"
            },
            userUpgrade: {
                id: "GizmoSharedConversationCTA.userUpgrade",
                defaultMessage: "Upgrade to Plus to chat with <bolded>{gizmoName}</bolded>",
                description: "Upgrade CTA for free users"
            },
            userUpgradeNoGizmo: {
                id: "GizmoSharedConversationCTA.userUpgradeNoGizmo",
                defaultMessage: "Upgrade to Plus to create your own <bolded>GPT</bolded>",
                description: "Upgrade CTA for free users"
            }
        })
          , nZ = n(95413);
        function nE() {
            var e = (0,
            c._)(["grow flex-1 overflow-hidden"]);
            return nE = function() {
                return e
            }
            ,
            e
        }
        function nq() {
            var e = (0,
            c._)(["w-full pt-2 md:pt-0 border-t md:border-t-0 gizmo:border-t-0 dark:border-white/20 md:border-transparent md:dark:border-transparent md:pl-2 gizmo:pl-0 gizmo:md:pl-0 md:w-[calc(100%-.5rem)]\n", ""]);
            return nq = function() {
                return e
            }
            ,
            e
        }
        var nB = b()(function() {
            return Promise.all([n.e(1966), n.e(4388)]).then(n.bind(n, 64388))
        }, {
            loadableGenerated: {
                webpack: function() {
                    return [64388]
                }
            },
            ssr: !1
        })
          , nF = (0,
        N.vU)({
            doNotShareSensitive: {
                id: "thread.modal.onboarding.title",
                defaultMessage: "Do not share sensitive materials with this application",
                description: "Title for the onboarding warning modal"
            },
            mayProduceInaccurateInformation: {
                id: "thread.chatgptMayProduceInaccurateInformation-oct-30",
                defaultMessage: "This service is not an official OpenAI service. Powered by PandoraNext.",
                description: "ChatGPT disclaimer for producing inaccurate information"
            },
            businessDisclaimer: {
                id: "thread.businessDisclaimer-oct-30",
                defaultMessage: "{workspaceName} workspace chats aren't used to train our models. ChatGPT can make mistakes.",
                description: "Business disclaimer with protected data assurance"
            },
            businessDisclaimerNoName: {
                id: "thread.businessDisclaimerNoName-oct-30",
                defaultMessage: "Your workspace chats aren'ts used to train our models. ChatGPT can make mistakes.",
                description: "Business disclaimer with protected data assurance when no Workspace name is available"
            },
            outdatedGptDisclaimer: {
                id: "thread.outdatedGptDisclaimer.0",
                defaultMessage: "<bold>New version of GPT available</bold> - Continue chatting to use the old version, or start a <link>new chat</link> for the latest version.",
                description: "Outdated GPT disclaimer"
            },
            outdatedTemplateDisclaimer: {
                id: "thread.outdatedTemplateDisclaimer",
                defaultMessage: "<bold>New version of template available</bold> - Continue chatting to use the old version, or start a <link>new chat</link> for the latest version.",
                description: "Outdated template disclaimer"
            },
            somethingWentWrong: {
                id: "thread.modal.unrecoverableError.title",
                defaultMessage: "Something went wrong",
                description: "Title for the UnrecoverableErrorModal"
            },
            tryAgainLater: {
                id: "thread.modal.unrecoverableError.description",
                defaultMessage: "We're sorry, but something went wrong. Please try again later.",
                description: "Description for the UnrecoverableErrorModal"
            },
            resetThread: {
                id: "thread.modal.unrecoverableError.resetThread",
                defaultMessage: "Reset thread",
                description: "Reset thread button text"
            },
            sharedConversationContinueConversation: {
                id: "thread.sharedConversation.continue",
                defaultMessage: "Continue this conversation",
                description: "Button for shared links to allow user to continue conversation in their own history"
            },
            sharedConversationReportConversation: {
                id: "thread.sharedConversation.report",
                defaultMessage: "Report conversation",
                description: "Button for shared links to report chat for legal, safety, or other reasons"
            },
            sharedConversationModerateConversation: {
                id: "thread.sharedConversation.moderate",
                defaultMessage: "Moderate conversation",
                description: "Button for shared links to moderate a chat for legal, safety, or other reasons"
            },
            reportSharedConversation: {
                id: "thread.reportSharedConversation",
                defaultMessage: "Report content",
                description: "Report shared chat footer link text"
            },
            termsOfUse: {
                id: "thread.termsOfUse",
                defaultMessage: "Powered by PandoraNext",
                description: "Terms of use footer link text"
            },
            privacyPolicy: {
                id: "thread.privacyPolicy",
                defaultMessage: "Privacy policy",
                description: "Privacy policy footer link text"
            },
            latencyButton: {
                id: "thread.latencyButton",
                defaultMessage: "Latency",
                description: "Button to open the latency menu"
            }
        });
        function nU(e) {
            var t = e.onClickReportSharedConversation;
            return (0,
            m.jsxs)("div", {
                className: "flex justify-center gap-3 text-gray-500",
                children: [!1 && (0,
                m.jsx)("button", {
                    onClick: function() {
                        t()
                    },
                    children: (0,
                    m.jsx)(S.Z, (0,
                    i._)({}, nF.reportSharedConversation))
                }), !1 && (0,
                m.jsx)("span", {
                    children: "|"
                }), (0,
                m.jsx)("a", {
                    href: "https://pandoranext.com",
                    target: "_blank",
                    rel: "noreferrer",
                    children: (0,
                    m.jsx)(S.Z, (0,
                    i._)({}, nF.termsOfUse))
                }), !1 && (0,
                m.jsx)("span", {
                    children: "|"
                }), !1 && (0,
                m.jsx)("a", {
                    href: "https://openai.com/policies/privacy-policy",
                    target: "_blank",
                    rel: "noreferrer",
                    children: (0,
                    m.jsx)(S.Z, (0,
                    i._)({}, nF.privacyPolicy))
                })]
            })
        }
        function nz(e) {
            var t = e.clientThreadId
              , n = (0,
            F.ec)(function(e) {
                return e.currentWorkspace
            })
              , r = null == n ? void 0 : n.id
              , a = (0,
            E.UL)(t)
              , o = null == a ? void 0 : a.conversationTemplateId;
            if (null != r && null != o)
                return (0,
                m.jsx)(nO, {
                    clientThreadId: t,
                    workspaceId: r,
                    conversationTemplateId: o
                });
            var i = null == a ? void 0 : a.gizmoId;
            return null != i ? (0,
            m.jsx)(nG, {
                clientThreadId: t,
                gizmoId: i
            }) : (0,
            m.jsx)(nQ, {})
        }
        function nO(e) {
            var t = e.clientThreadId
              , n = e.workspaceId
              , r = e.conversationTemplateId
              , a = (0,
            Q.GS)(n, r).data
              , o = (0,
            E.qN)(function(e) {
                return E.iN.getThreadCreateTime(t, e)
            })
              , l = (null == a ? void 0 : a.updated_at) != null ? new Date(a.updated_at) : void 0;
            return null == l || null == o || l <= o ? (0,
            m.jsx)(nQ, {}) : (0,
            m.jsxs)("span", {
                className: "text-gray-500",
                children: [(0,
                m.jsx)(_.h5O, {
                    className: "text-token-secondary mb-1 mr-1 inline-block h-4 w-4 stroke-0"
                }), (0,
                m.jsx)(S.Z, (0,
                s._)((0,
                i._)({}, nF.outdatedTemplateDisclaimer), {
                    values: {
                        link: function(e) {
                            return (0,
                            m.jsx)(w(), {
                                href: (0,
                                Q.l1)(r),
                                className: "underline",
                                shallow: !0,
                                children: e
                            })
                        },
                        bold: function(e) {
                            return (0,
                            m.jsx)("span", {
                                className: "text-token-secondary font-semibold",
                                children: e
                            })
                        }
                    }
                }))]
            })
        }
        function nG(e) {
            var t = e.clientThreadId
              , n = e.gizmoId
              , r = (0,
            f.b9)(n).data
              , a = (0,
            E.qN)(function(e) {
                return E.iN.getThreadCreateTime(t, e)
            })
              , o = (null == r ? void 0 : r.gizmo.updated_at) != null ? new Date(r.gizmo.updated_at) : void 0;
            return (null == r ? void 0 : r.gizmo.short_url) == null || null == o || null == a || o <= a ? (0,
            m.jsx)(nQ, {}) : (0,
            m.jsxs)("span", {
                className: "text-gray-500",
                children: [(0,
                m.jsx)(_.h5O, {
                    className: "text-token-secondary mb-1 mr-1 inline-block h-4 w-4 stroke-0"
                }), (0,
                m.jsx)(S.Z, (0,
                s._)((0,
                i._)({}, nF.outdatedGptDisclaimer), {
                    values: {
                        link: function(e) {
                            return (0,
                            m.jsx)(w(), {
                                href: (0,
                                f.un)(r.gizmo.short_url),
                                className: "underline",
                                shallow: !0,
                                children: e
                            })
                        },
                        bold: function(e) {
                            return (0,
                            m.jsx)("span", {
                                className: "text-token-secondary font-semibold",
                                children: e
                            })
                        }
                    }
                }))]
            })
        }
        function nQ() {
            var e = (0,
            F.ec)(F.F_.isBusinessWorkspace)
              , t = (0,
            F.ec)(function(e) {
                return e.currentWorkspace
            })
              , n = null == t ? void 0 : t.name;
            return e ? (0,
            m.jsx)("span", {
                children: null != n ? (0,
                m.jsx)(S.Z, (0,
                s._)((0,
                i._)({}, nF.businessDisclaimer), {
                    values: {
                        workspaceName: n
                    }
                })) : (0,
                m.jsx)(S.Z, (0,
                i._)({}, nF.businessDisclaimerNoName))
            }) : (0,
            m.jsx)("span", {
                children: (0,
                m.jsx)(S.Z, (0,
                i._)({}, nF.mayProduceInaccurateInformation))
            })
        }
        var nH = function(e) {
            var t, n, r, a, i, s, c, x, b, y, M, w, _, N, S, P = e.initialThreadData, J = e.clientThreadId, Y = e.initiallyHighlightedMessageId, K = e.continueConversationUrl, $ = e.onCompletionFinished, X = e.preRequestCompletion, ee = e.hideHeader, et = e.prependThreadChildren, en = e.renderEmptyState, er = null !== (0,
            j.useContext)(U.gB), ea = (0,
            R.Z)(), eo = (0,
            F.hz)(), ei = (0,
            q.H)().isPluginsAvailable, es = (0,
            z.w$)(), el = (0,
            j.useContext)(U.QL).historyDisabled, ed = (0,
            V.i)(), ec = (0,
            e8.Wq)(J), eu = (0,
            T.useRouter)(), ef = er && (null === (w = eu.query) || void 0 === w ? void 0 : null === (_ = w.shareParams) || void 0 === _ ? void 0 : _[1]) === "moderate", eh = (0,
            E.Kt)(J), ep = (0,
            E.oq)(J), eg = (0,
            E.JI)(J, ep), ev = (0,
            E.U0)(J, ep), ex = (0,
            E.je)(J), eb = (0,
            d._)((0,
            j.useState)(), 2), ek = eb[0], ej = eb[1], eC = (0,
            d._)((0,
            j.useState)(!1), 2), e_ = eC[0], eI = eC[1], eN = (0,
            d._)((0,
            j.useState)(), 2), eR = eN[0], eP = eN[1], eD = (0,
            d._)((0,
            j.useState)(), 2), eA = eD[0], eZ = eD[1], eE = (0,
            d._)((0,
            j.useState)(), 2), eF = eE[0], ez = eE[1], eG = eo.has(Z.AL), eQ = (0,
            e9.iu)(), eH = (0,
            eq.p0)(), eW = ev >= 2, eV = eg.some(function(e) {
                return e.role === A.uU.User
            }), eJ = (0,
            E.Zz)(J) && !eW && (0,
            e8.HE)(ec), eY = (0,
            ew.Ml)(), eK = eY ? (0,
            E.Zz)(J) && !eV && ((0,
            e8.HE)(ec) || ec.kind === A.OL.GizmoTest) : (0,
            E.Zz)(J) && !eW, e$ = (0,
            e9.Gg)(eQ, !0), eX = null !== (S = (0,
            e9.Bv)(P.lastModelUsed, J)) && void 0 !== S ? S : e$, e0 = (0,
            e9.B9)(), e1 = e0.get(eX), e2 = (0,
            nj.iF)(), e4 = (0,
            j.useCallback)(function() {
                e2(),
                g.A.logEvent(v.M.newThread)
            }, [e2]), e3 = (a = (0,
            E.Zz)(J),
            i = E.tQ.getTitle(J),
            ec.kind === A.OL.GizmoInteraction && ec.gizmo ? a ? "ChatGPT - ".concat(ec.gizmo.gizmo.display.name) : i ? "".concat(ec.gizmo.gizmo.display.name, " - ").concat(i) : i : a ? "ChatGPT" : i);
            (0,
            Q.dB)(J);
            var e5 = (0,
            e8.WA)(J)
              , e6 = (0,
            j.useCallback)(function(e) {
                if (!el && e) {
                    var t = E.tQ.getTree(e).getMessageId(E.tQ.getThreadCurrentLeafId(e));
                    if (L.ZP.generateTitle(e, t, eX).then(function(t) {
                        var n = t.title;
                        E.tQ.setTitle(e, n, E._L.Generated),
                        e2(),
                        g.A.logEvent(v.M.renameThread, {
                            threadId: e,
                            content: n,
                            model: eX
                        })
                    }).catch(function(e) {
                        console.error(e)
                    }),
                    (0,
                    e8.HE)(ec)) {
                        var n = function() {
                            eu.push((0,
                            G.ZV)(e), void 0, {
                                shallow: !0
                            })
                        };
                        if (eY) {
                            var r = E.iN.getGizmoId(J);
                            null != r ? (0,
                            f.F0)(r).then(function(t) {
                                history.pushState({}, "", (0,
                                G.ZV)(e, t))
                            }).catch(function(e) {
                                console.error(e),
                                n()
                            }) : n()
                        } else
                            n()
                    }
                }
            }, [J, el, eX, e2, eu, eY, ec]);
            (0,
            j.useEffect)(function() {
                (0,
                tz.sb)()
            }, []);
            var e7 = (0,
            j.useCallback)(function(e) {
                if (null != e && (null == $ || $(e),
                !el) && (e5.kind === A.OL.GizmoInteraction && f.D2.handleGizmoInteracted(e5.gizmo_id),
                (0,
                F.N$)().has(Z.uj) && !ed.displayingSideBySideFeedback)) {
                    var t = E.tQ.getThreadCurrentLeafId(e)
                      , n = E.tQ.getTree(e).getMessage(t);
                    (0,
                    O.lD)(n) || (0,
                    O.JD)(n) || (0,
                    tz.yu)(e, n.id, eX)
                }
            }, [el, eX, ed.displayingSideBySideFeedback, $, e5])
              , tt = (0,
            E.Uy)(J)
              , tn = ei && (null == e1 ? void 0 : null === (N = e1.enabledTools) || void 0 === N ? void 0 : N.includes("tools3")) ? eH : void 0
              , tr = null == tn ? void 0 : tn.map(function(e) {
                return e.id
            })
              , ta = (0,
            nC.Z)(J, tt, e4, e6, e7, tr)
              , to = (0,
            j.useCallback)(function() {
                var e = E.tQ.getThreadCurrentLeafId(J);
                if (null != e) {
                    var t = E.tQ.getTree(J).getBranchFromLeaf(e);
                    W.hx.abortRequests(t.map(function(e) {
                        return e.id
                    }))
                }
            }, [J])
              , ti = (0,
            tA.N)()
              , ts = (0,
            j.useCallback)((s = (0,
            o._)(function(e) {
                var t, n, r, a, o, i, s, l, d, c, m, f, p, g, v;
                return (0,
                u.Jh)(this, function(u) {
                    switch (u.label) {
                    case 0:
                        if (t = e.type,
                        n = e.promptId,
                        r = e.eventMetadata,
                        a = e.cancelActiveRequests,
                        i = void 0 === (o = e.focusOnNewCompletion) || o,
                        s = e.useDefaultModel,
                        l = e.completionMetadata,
                        d = e.appendMessages,
                        (0,
                        tz.sb)(),
                        a && to(),
                        m = performance.now(),
                        f = s ? e$ : eX,
                        p = null === (c = e0.get(f)) || void 0 === c ? void 0 : c.tags,
                        g = l.conversationMode,
                        !(0,
                        h.Rr)(eo, null != p ? p : [], g.kind))
                            return [3, 2];
                        return [4, h.ZP.getEnforcementToken(null != p ? p : [])];
                    case 1:
                        v = u.sent(),
                        u.label = 2;
                    case 2:
                        return null == X || X(J, n),
                        ta({
                            model: f,
                            completionType: t,
                            parentNodeId: n,
                            metadata: r,
                            focusOnNewCompletion: i,
                            completionMetadata: l,
                            arkoseToken: null != v ? v : null,
                            preflightTime: performance.now() - m,
                            extraStreamParams: {
                                forceParagen: ti.forceParagen,
                                forceRateLimit: ti.forceRateLimit
                            },
                            appendMessages: d
                        }),
                        [2]
                    }
                })
            }),
            function(e) {
                return s.apply(this, arguments)
            }
            ), [J, e$, eX, e0, ta, to, ti.forceParagen, ti.forceRateLimit, X, eo])
              , td = (0,
            j.useCallback)(function(e, t, n, r) {
                E.tQ.updateTree(J, function(a) {
                    a.addNode(e, n, t, A.uU.User, void 0, r)
                })
            }, [J])
              , tc = (0,
            j.useCallback)((c = (0,
            o._)(function(e, t, n, r) {
                var a, o;
                return (0,
                u.Jh)(this, function(i) {
                    return a = t.content,
                    o = t.attachments,
                    E.tQ.setNewThreadConversationModeMetadata(J, r.conversationMode),
                    td(e, ep, a, o.length > 0 ? {
                        attachments: o
                    } : {}),
                    ts({
                        type: A.Os.Next,
                        promptId: e,
                        eventMetadata: n,
                        cancelActiveRequests: !0,
                        completionMetadata: r
                    }),
                    [2]
                })
            }),
            function(e, t, n, r) {
                return c.apply(this, arguments)
            }
            ), [J, td, ts, ep])
              , tu = (0,
            j.useRef)(!1)
              , tm = (0,
            e9.B8)()
              , tf = (0,
            p.kP)().session;
            (0,
            j.useEffect)(function() {
                if (tf && void 0 !== e1 && (void 0 === e1.enabledTools || !(e1.enabledTools.length > 0)) && eo.has(Z.Yj) && 0 !== tm.enabledModelsInCategoriesById.size && !tu.current && void 0 === E.tQ.getServerThreadId(J)) {
                    var e, t = eu.query, n = t.m, r = (0,
                    l._)(t, ["m"]);
                    if (void 0 !== n) {
                        e = Array.isArray(n) ? n[0] : n;
                        var a = (0,
                        D.Z)();
                        tu.current = !0,
                        tc(a, {
                            content: e,
                            attachments: []
                        }, {
                            eventSource: "url"
                        }, {
                            conversationMode: e5
                        }),
                        eu.replace({
                            pathname: eu.pathname,
                            query: r
                        }, void 0, {
                            shallow: !0
                        })
                    }
                }
            }, [e1, eu, tc, tf, tm, eo, J, e5]);
            var th = (0,
            j.useCallback)(function(e, t) {
                var n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2]
                  , r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "none"
                  , a = arguments.length > 4 ? arguments[4] : void 0
                  , o = E.tQ.getTree(J).getParentPromptNode(e).id;
                ts({
                    type: A.Os.Variant,
                    promptId: o,
                    eventMetadata: t,
                    cancelActiveRequests: !1,
                    focusOnNewCompletion: n,
                    useDefaultModel: a,
                    completionMetadata: {
                        variantPurpose: r,
                        conversationMode: e5
                    }
                })
            }, [ts, J, e5])
              , tp = (0,
            j.useCallback)(function(e) {
                var t = E.tQ.getTree(J).getLeafFromNode(e);
                E.tQ.setThreadCurrentLeafId(J, t.id)
            }, [J])
              , tg = (0,
            j.useCallback)(function(e, t, n) {
                var r = E.tQ.getServerThreadId(J);
                if (g.A.logEvent(v.M.thumbRating, {
                    id: t,
                    threadId: r,
                    rating: n,
                    model: eX
                }),
                void 0 !== r && L.ZP.submitMessageFeedback({
                    message_id: t,
                    conversation_id: r,
                    rating: n
                }),
                eZ(e),
                ez(t),
                eP(n),
                E.tQ.updateTree(J, function(t) {
                    t.updateNodeMetadata(e, {
                        rating: n
                    })
                }),
                "thumbsDown" === n && es) {
                    var a = E.tQ.getTree(J).getConversationTurns(e || "root");
                    em(a[a.length - 1]) && th(e, {
                        eventSource: "mouse",
                        intent: "comparison"
                    }, !1, "comparison")
                }
            }, [J, eX, es, th])
              , tv = (0,
            eO.tS)(function(e) {
                return {
                    showEmbeddedPaymentModal: e.showEmbeddedPaymentModal,
                    setShowEmbeddedPaymentModal: e.setShowEmbeddedPaymentModal
                }
            })
              , tx = tv.showEmbeddedPaymentModal
              , tb = tv.setShowEmbeddedPaymentModal
              , ty = (0,
            eL.C)(function(e) {
                return {
                    setShowReferralInviteModal: e.setShowReferralInviteModal
                }
            }).setShowReferralInviteModal
              , tk = (0,
            j.useCallback)(function() {
                tb(!1)
            }, [tb])
              , tM = (0,
            j.useCallback)(function() {
                ty(!1)
            }, [ty])
              , tT = (0,
            j.useRef)(null)
              , tj = (0,
            E.XK)(J)
              , tC = (0,
            B.tN)(function(e) {
                return e.sharingModalThreadId === tj
            })
              , t_ = (0,
            eL.C)(function(e) {
                return e.showReferralInviteModal
            });
            return b = (x = {
                clientThreadId: J,
                currentModelId: eX
            }).clientThreadId,
            y = x.currentModelId,
            t = (0,
            te.i0)(y, te.dN.CODE_INTERPRETER),
            n = null !== (0,
            j.useContext)(U.gB),
            r = E.tQ.getServerThreadId(b),
            (0,
            eT.a)({
                queryKey: ["interpreterState", r],
                queryFn: n_,
                enabled: !!(t && r && !n),
                gcTime: 0
            }),
            (0,
            m.jsxs)(m.Fragment, {
                children: [eG && (0,
                m.jsx)(nB, {}), (0,
                m.jsxs)(k(), {
                    children: [null != e3 && (0,
                    m.jsx)("title", {
                        children: e3
                    }), er && (0,
                    m.jsxs)(m.Fragment, {
                        children: [(0,
                        m.jsx)("meta", {
                            property: "og:site_name",
                            content: "ChatGPT"
                        }), (0,
                        m.jsx)("meta", {
                            name: "robots",
                            content: "noindex,nofollow"
                        }, "robots"), (0,
                        m.jsx)("meta", {
                            property: "og:title",
                            content: null != e3 ? e3 : "Shared Chat on ChatGPT"
                        }, "og:title"), (0,
                        m.jsx)("meta", {
                            property: "og:description",
                            content: "Shared " + (null != ex ? "by ".concat(ex, " ") : "") + "via ChatGPT"
                        }, "og:description"), (0,
                        m.jsx)("meta", {
                            property: "og:image",
                            content: nR.Z.src
                        }, "og:image")]
                    })]
                }), ec.kind === A.OL.GizmoInteraction && ec.gizmo && (0,
                m.jsx)(nS.N, {
                    gizmo: ec.gizmo
                }), (0,
                m.jsxs)(U.OV.Provider, {
                    value: ts,
                    children: [eo.has(Z.i) ? (0,
                    m.jsx)(eB, {}) : null, tC && null != tj && (0,
                    m.jsx)(tw, {
                        serverThreadId: tj,
                        currentThreadModel: P.lastModelUsed
                    }), (0,
                    m.jsxs)(eM.ZP, {
                        clientThreadId: J,
                        currentModelConfig: e1,
                        className: "flex h-full flex-col",
                        children: [(0,
                        m.jsx)(nW, {
                            children: eh ? null : eK ? null != en ? en : (0,
                            m.jsx)(nk, {
                                clientThreadId: J,
                                currentModel: null != e1 ? e1 : e9.IR,
                                promptTextareaRef: tT
                            }) : eW ? (M = (0,
                            m.jsxs)(m.Fragment, {
                                children: [et, (0,
                                m.jsx)(tl, {
                                    onChangeItemInView: tp,
                                    onRequestMoreCompletions: th,
                                    onChangeRating: tg,
                                    onRequestCompletion: ts,
                                    clientThreadId: J,
                                    currentThreadModel: P.lastModelUsed,
                                    initiallyHighlightedMessageId: Y,
                                    inlineEmbeddedDisplay: !1,
                                    conversationLeafId: ep,
                                    hideHeader: ee
                                }, J)]
                            }),
                            er ? (0,
                            m.jsx)("div", {
                                className: "h-full overflow-auto dark:bg-gray-800",
                                children: M
                            }) : (0,
                            m.jsx)(nN.I, {
                                children: M
                            })) : null
                        }), (0,
                        m.jsxs)(nV, {
                            $isGizmoUIEnabled: eY,
                            children: [er ? (0,
                            m.jsxs)("div", {
                                className: "relative flex w-full flex-1 items-center justify-center gap-2 pt-3 empty:hidden",
                                children: [(0,
                                m.jsx)(nA, {
                                    clientThreadId: J
                                }), ef && (0,
                                m.jsx)(H.z, {
                                    onClick: function() {
                                        eI(!0)
                                    },
                                    children: ea.formatMessage(nF.sharedConversationModerateConversation)
                                }), eo.has("debug") && K && (0,
                                m.jsxs)(H.z, {
                                    color: "neutral",
                                    as: "link",
                                    to: K,
                                    children: [(0,
                                    m.jsx)(I.sUY, {
                                        className: "icon-sm"
                                    }), ea.formatMessage(nF.sharedConversationContinueConversation)]
                                })]
                            }) : (0,
                            m.jsx)(tO, {
                                clientThreadId: J,
                                isNewThread: eJ,
                                showPromptStarters: eJ || eY && !eV,
                                currentModelId: eX,
                                onRequestCompletion: ts,
                                onNewThreadCreationFinished: e6,
                                promptTextareaRef: tT
                            }), (0,
                            m.jsx)("div", {
                                className: "relative px-2 py-2 text-center text-xs text-gray-600 dark:text-gray-300 md:px-[60px]",
                                children: er ? (0,
                                m.jsx)(nU, {
                                    onClickReportSharedConversation: function() {
                                        ej(ep)
                                    }
                                }) : (0,
                                e8.HE)(ec) ? (0,
                                m.jsx)(nz, {
                                    clientThreadId: J
                                }) : null
                            })]
                        })]
                    }), (0,
                    m.jsxs)("div", {
                        className: "group fixed bottom-3 right-3 z-10 hidden gap-1 lg:flex",
                        children: [eG && (0,
                        m.jsx)("button", {
                            onClick: function() {
                                B.vm.showLatencyDevTools()
                            },
                            className: "box-content flex h-6 w-6 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-xs text-gray-600 dark:border-white/10 dark:bg-white/10 dark:text-gray-200",
                            children: (0,
                            m.jsx)(C.DKx, {
                                className: "icon-sm"
                            })
                        }), (0,
                        m.jsx)(nZ.Z, {})]
                    }), (0,
                    m.jsx)(ey, {
                        clientThreadId: J,
                        currentLeafId: ep,
                        currentModelId: eX,
                        onChangeItemInView: tp,
                        onRequestMoreCompletions: th,
                        onChangeRating: tg,
                        onRequestCompletion: ts,
                        ratingModalOpen: eR,
                        ratingModalNodeId: eA,
                        ratingModalCompletionId: eF,
                        sharedConversationReportModalNodeId: ek,
                        setSharedConversationReportModalNodeId: ej,
                        sharedConversationModerationModalOpen: e_,
                        setRatingModalOpen: eP,
                        setSharedConversationModerationModalOpen: eI
                    }), (0,
                    m.jsx)(eU, {
                        isOpen: tx,
                        onClose: tk
                    }), eo.has(Z.a3) && (0,
                    m.jsx)(eS, {
                        isOpen: t_,
                        onClose: tM
                    })]
                })]
            })
        }
          , nW = P.Z.div(nE())
          , nV = P.Z.div(nq(), function(e) {
            return !e.$isGizmoUIEnabled && "absolute bottom-0 left-0 md:bg-vert-light-gradient bg-white dark:bg-gray-800 md:!bg-transparent dark:md:bg-vert-dark-gradient"
        })
    },
    45567: function(e, t, n) {
        n.d(t, {
            I: function() {
                return i
            }
        });
        var r = n(35250)
          , a = n(5397)
          , o = n.n(a)()(function() {
            return Promise.resolve().then(n.bind(n, 40803))
        }, {
            loadableGenerated: {
                webpack: function() {
                    return [40803]
                }
            },
            ssr: !1
        });
        function i(e) {
            var t = e.children
              , n = e.scrollViewClassName;
            return (0,
            r.jsx)(o, {
                className: "h-full",
                followButtonClassName: "scroll-convo",
                initialScrollBehavior: "auto",
                scrollViewClassName: n,
                children: t
            })
        }
    },
    93778: function(e, t, n) {
        n.d(t, {
            N: function() {
                return s
            }
        });
        var r = n(35250)
          , a = n(21950)
          , o = n(29124)
          , i = n.n(o);
        function s(e) {
            var t = e.gizmo
              , n = (0,
            a.uy)(t.gizmo.display.name);
            return (0,
            r.jsxs)(i(), {
                children: [(0,
                r.jsx)("title", {
                    children: n
                }), (0,
                r.jsx)("meta", {
                    name: "title",
                    content: n
                }, "title"), (0,
                r.jsx)("meta", {
                    property: "og:site_name",
                    content: "ChatGPT"
                }, "og:site_name"), (0,
                r.jsx)("meta", {
                    property: "og:type",
                    content: "website"
                }, "og:type"), (0,
                r.jsx)("meta", {
                    property: "og:title",
                    content: n
                }, "og:title"), (0,
                r.jsx)("meta", {
                    property: "og:url",
                    content: (0,
                    a.i6)(t)
                }, "og:url"), t.gizmo.display.description && (0,
                r.jsxs)(r.Fragment, {
                    children: [(0,
                    r.jsx)("meta", {
                        name: "description",
                        content: t.gizmo.display.description
                    }, "description"), (0,
                    r.jsx)("meta", {
                        property: "og:description",
                        content: t.gizmo.display.description
                    }, "og:description")]
                }), t.gizmo.display.profile_picture_url && (0,
                r.jsxs)(r.Fragment, {
                    children: [(0,
                    r.jsx)("meta", {
                        property: "og:image",
                        content: t.gizmo.display.profile_picture_url
                    }, "og:image"), (0,
                    r.jsx)("meta", {
                        property: "og:image:width",
                        content: "512"
                    }, "og:image:width"), (0,
                    r.jsx)("meta", {
                        property: "og:image:height",
                        content: "512"
                    }, "og:image:height")]
                })]
            })
        }
    },
    42545: function(e, t, n) {
        n.d(t, {
            p: function() {
                return i
            }
        });
        var r = n(35250)
          , a = n(73040)
          , o = n.n(a);
        function i(e) {
            var t = e.href
              , n = e.children;
            return (0,
            r.jsx)(o(), {
                href: t,
                shallow: !0,
                className: "flex items-center gap-2 rounded-xl bg-green-600 px-5 py-3.5 font-medium text-white transition hover:opacity-70",
                children: n
            })
        }
    },
    9304: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return B
            }
        });
        var r = n(21722)
          , a = n(39324)
          , o = n(71209)
          , i = n(64502)
          , s = n(38104)
          , l = n(2064)
          , d = n(54636)
          , c = n(42780)
          , u = n(51217)
          , m = n(8844)
          , f = n(61098);
        function h() {
            return (h = (0,
            r._)(function(e, t) {
                var n, r;
                return (0,
                s.Jh)(this, function(a) {
                    switch (a.label) {
                    case 0:
                        if ((null === (n = t.metadata) || void 0 === n ? void 0 : n.client_actions) === void 0 || 0 === t.metadata.client_actions.length || 0 == (r = t.metadata.client_actions.filter(function(e) {
                            return "browser_tool" === e.type
                        })).length)
                            return [2, []];
                        return [4, Promise.all(r.map(function(n) {
                            return function(e, t, n) {
                                return g.apply(this, arguments)
                            }(e, n.action, t)
                        }))];
                    case 1:
                        return [2, a.sent().flat()]
                    }
                })
            })).apply(this, arguments)
        }
        var p = function() {
            function e(t) {
                (0,
                u._)(this, e),
                this.conversationId = t
            }
            var t = e.prototype;
            return t.createRequest = function(e) {
                var t = this;
                return new Promise(function(n, r) {
                    var i = new BroadcastChannel(Math.random().toString())
                      , s = setTimeout(function() {
                        r("Timeout"),
                        i.close()
                    }, 6e4);
                    i.onmessage = function(e) {
                        n(e.data),
                        clearTimeout(s),
                        i.close()
                    }
                    ;
                    var l = (0,
                    o._)((0,
                    a._)({
                        action: "browse",
                        id: t.conversationId
                    }, e), {
                        channel: i.name
                    });
                    window.postMessage(l, "*")
                }
                )
            }
            ,
            t.browse = function(e) {
                return this.createRequest({
                    url: e,
                    type: "browse"
                })
            }
            ,
            t.back = function() {
                return this.createRequest({
                    type: "back"
                })
            }
            ,
            t.click = function(e) {
                return this.createRequest({
                    target: e,
                    type: "click"
                })
            }
            ,
            t.scroll = function(e) {
                return this.createRequest({
                    amount: e,
                    type: "scroll"
                })
            }
            ,
            t.quote = function(e, t) {
                return this.createRequest({
                    quote_start: e,
                    quote_end: t,
                    type: "quote"
                })
            }
            ,
            e
        }();
        function g() {
            return (g = (0,
            r._)(function(e, t, n) {
                var r, a;
                return (0,
                s.Jh)(this, function(n) {
                    var o, i;
                    switch (n.label) {
                    case 0:
                        r = new p(e),
                        n.label = 1;
                    case 1:
                        switch (n.trys.push([1, 14, , 15]),
                        t.command) {
                        case "back":
                            return [3, 2];
                        case "quote":
                            return [3, 4];
                        case "scroll":
                            return [3, 6];
                        case "open_url":
                            return [3, 8];
                        case "click":
                            return [3, 10]
                        }
                        return [3, 12];
                    case 2:
                        return [4, r.back()];
                    case 3:
                    case 7:
                    case 9:
                    case 11:
                        return [2, [(!function(e) {
                            for (var t in e.urls)
                                e.text.includes("".concat(t)) || delete e.urls[t]
                        }(o = n.sent()),
                        {
                            id: (0,
                            m.Z)(),
                            author: {
                                role: f.uU.Tool,
                                name: "browser"
                            },
                            content: {
                                content_type: f.PX.TetherBrowsingDisplay,
                                result: o.text,
                                summary: o.title
                            },
                            metadata: {
                                _cite_metadata: {
                                    citation_format: {
                                        name: "tether_og"
                                    },
                                    metadata_list: [{
                                        type: "webpage",
                                        title: o.title,
                                        url: o.url,
                                        text: o.text
                                    }]
                                }
                            },
                            recipient: "all"
                        })]];
                    case 4:
                        return [4, r.quote(t.quote_start, t.quote_end)];
                    case 5:
                        return [2, [(i = n.sent(),
                        {
                            id: (0,
                            m.Z)(),
                            author: {
                                role: f.uU.Tool,
                                name: "browser"
                            },
                            content: {
                                content_type: f.PX.Text,
                                parts: ["".concat(JSON.stringify(i))]
                            },
                            recipient: "all"
                        })]];
                    case 6:
                        return [4, r.scroll(t.amount)];
                    case 8:
                        return [4, r.browse(t.url)];
                    case 10:
                        return [4, r.click(t.target)];
                    case 12:
                        throw Error("Unsupported browser action type " + t);
                    case 13:
                        return [3, 15];
                    case 14:
                        return console.error(a = n.sent()),
                        [2, [{
                            id: (0,
                            m.Z)(),
                            author: {
                                role: f.uU.Tool,
                                name: "browser"
                            },
                            content: {
                                content_type: f.PX.Text,
                                parts: ["Error making browse call: ".concat(a)]
                            },
                            recipient: "all"
                        }]];
                    case 15:
                        return [2]
                    }
                })
            })).apply(this, arguments)
        }
        var v = n(60478)
          , x = n(89678)
          , b = n.n(x)
          , y = n(70079)
          , k = n(20630)
          , M = n(86646)
          , w = n(66638)
          , T = n(17944)
          , j = n(25687)
          , C = n(88887)
          , _ = n(15066)
          , I = n(41955)
          , N = n(8874)
          , S = function e(t) {
            var n, r = this;
            (0,
            u._)(this, e),
            this.blurDuringCompletionTrackerOnUnmountRef = t,
            this.completionStartTime = Date.now(),
            this.logFocusAfterBlurDuringCompletionEvent = function() {
                N.m9.logEvent("chatgpt_focus_after_blur_during_completion", null, {
                    completion_duration_ms: "".concat(r.completionEndTime - r.completionStartTime),
                    blur_time_ms: "".concat(r.blurDuringCompletionTime - r.completionStartTime),
                    refocus_time_ms: "".concat(r.refocusTime - r.completionStartTime)
                }),
                d.A.logEvent(c.M.focusAfterBlurDuringCompletion, {
                    completion_duration_ms: "".concat(r.completionEndTime - r.completionStartTime),
                    blur_time_ms: "".concat(r.blurDuringCompletionTime - r.completionStartTime),
                    refocus_time_ms: "".concat(r.refocusTime - r.completionStartTime)
                })
            }
            ,
            this.onWindowBlur = function() {
                void 0 === r.blurDuringCompletionTime && (r.blurDuringCompletionTime = Date.now(),
                window.addEventListener("focus", r.onWindowFocusAfterBlur),
                r.blurDuringCompletionTrackerOnUnmountRef.current = r.cleanupFocusAfterBlurListener)
            }
            ,
            this.onWindowFocusAfterBlur = function() {
                r.refocusTime = Date.now(),
                void 0 !== r.completionEndTime && r.logFocusAfterBlurDuringCompletionEvent(),
                r.cleanupFocusAfterBlurListener()
            }
            ,
            this.cleanupFocusAfterBlurListener = function() {
                window.removeEventListener("focus", r.onWindowFocusAfterBlur),
                r.blurDuringCompletionTrackerOnUnmountRef.current = void 0
            }
            ,
            this.onMessageError = function() {
                window.removeEventListener("blur", r.onWindowBlur)
            }
            ,
            this.onMessageDone = function() {
                window.removeEventListener("blur", r.onWindowBlur),
                void 0 !== r.blurDuringCompletionTime && (r.completionEndTime = Date.now(),
                N.m9.logEvent("chatgpt_blur_during_completion", null, {
                    completion_duration_ms: "".concat(r.completionEndTime - r.completionStartTime),
                    blur_time_ms: "".concat(r.blurDuringCompletionTime - r.completionStartTime)
                }),
                d.A.logEvent(c.M.blurDuringCompletion, {
                    completion_duration_ms: "".concat(r.completionEndTime - r.completionStartTime),
                    blur_time_ms: "".concat(r.blurDuringCompletionTime - r.completionStartTime)
                }),
                void 0 !== r.refocusTime && r.logFocusAfterBlurDuringCompletionEvent())
            }
            ,
            window.addEventListener("blur", this.onWindowBlur),
            null === (n = t.current) || void 0 === n || n.call(t)
        }
          , R = n(45021)
          , P = function() {
            function e(t) {
                (0,
                u._)(this, e),
                this.requestLatencyId = t,
                this.requestStartTime = performance.now(),
                this.requestLastTokenTime = performance.now(),
                this.requestCount = 0,
                this.requestTimes = []
            }
            return e.prototype.onResponse = function(e, t, n) {
                var r, a, o = performance.now(), i = o - this.requestLastTokenTime, s = o - this.requestStartTime;
                this.requestLastTokenTime = o,
                this.requestCount += 1;
                var l = t.content.content_type == f.PX.Text ? null == t ? void 0 : null === (r = t.content) || void 0 === r ? void 0 : r.parts[(null == t ? void 0 : null === (a = t.content) || void 0 === a ? void 0 : a.parts.length) - 1] : ""
                  , d = {
                    requestCount: this.requestCount,
                    requestDuration: s,
                    lastTokenDuration: Number(JSON.stringify(i)),
                    messageType: t.content.content_type,
                    content: l
                };
                this.requestTimes.push(d),
                "message" === e.type ? (0,
                R.Ae)(this.requestLatencyId, d) : "done" === e.type && null != n && ((0,
                R.kn)(this.requestLatencyId),
                (0,
                R.gL)(this.requestLatencyId))
            }
            ,
            e
        }()
          , D = n(96251)
          , A = n(12221)
          , L = n(10499);
        function Z(e, t) {
            e.updateNodeMetadata(t.id, {
                completionSampleFinishTime: Date.now()
            })
        }
        function E(e, t, n, r, a, o, i, s) {
            return q.apply(this, arguments)
        }
        function q() {
            return (q = (0,
            r._)(function(e, t, n, r, a, o, i, d) {
                var c, u, m, h;
                return (0,
                s.Jh)(this, function(s) {
                    switch (s.label) {
                    case 0:
                        if (u = performance.now(),
                        m = null === (c = a.get(n)) || void 0 === c ? void 0 : c.tags,
                        r && l.ZP.gatherData(null != m ? m : []),
                        w.tQ.updateTree(e, function(e) {
                            var n = !0
                              , r = !1
                              , a = void 0;
                            try {
                                for (var o, s = i[Symbol.iterator](); !(n = (o = s.next()).done); n = !0) {
                                    var l = o.value;
                                    e.addNode(l.id, l, t, f.uU.Assistant, {
                                        completionSampleFinishTime: Date.now()
                                    }),
                                    t = l.id
                                }
                            } catch (e) {
                                r = !0,
                                a = e
                            } finally {
                                try {
                                    n || null == s.return || s.return()
                                } finally {
                                    if (r)
                                        throw a
                                }
                            }
                        }),
                        w.tQ.setThreadCurrentLeafId(e, t),
                        !r)
                            return [3, 2];
                        return [4, l.ZP.getEnforcementToken(null != m ? m : [])];
                    case 1:
                        h = s.sent(),
                        s.label = 2;
                    case 2:
                        return o({
                            model: n,
                            completionType: f.Os.Next,
                            parentNodeId: t,
                            metadata: {},
                            arkoseToken: null != h ? h : null,
                            preflightTime: performance.now() - u,
                            extraStreamParams: d
                        }),
                        [2]
                    }
                })
            })).apply(this, arguments)
        }
        function B(e, t, n, u, m, p) {
            var g, x = (0,
            T.hz)(), N = (0,
            y.useId)(), q = (0,
            A.Y8)(function(e) {
                return null == e ? void 0 : e.setCapTimeout
            }), B = (0,
            A.Y8)(function(e) {
                return null == e ? void 0 : e.clearCapTimeout
            }), F = (0,
            y.useContext)(j.QL).historyDisabled, U = (0,
            L.B9)(), z = (0,
            y.useRef)(0), O = (0,
            y.useRef)(n), G = (0,
            y.useRef)(u), Q = (0,
            y.useRef)(m);
            O.current = n,
            G.current = u,
            Q.current = m;
            var H = (0,
            y.useRef)(void 0);
            (0,
            y.useEffect)(function() {
                return function() {
                    var e;
                    return null === (e = H.current) || void 0 === e ? void 0 : e.call(H)
                }
            }, []);
            var W = (0,
            y.useCallback)(function(t, n, i, u, m, p) {
                var g, y, M, T, j = u.eventSource, C = function() {
                    setTimeout(function() {
                        I.hx.removeRequest(i),
                        w.tQ.releaseThread(e)
                    }, 0)
                }, _ = w.tQ.getTree(e), N = i, R = n === f.Os.Continue, L = !0, F = !1, z = _.getMessage(N), W = {}, J = {}, Y = !1, K = !1, $ = new S(H), X = new P(m), ee = b()(function() {
                    Y || w.tQ.updateTree(e, function(e) {
                        Object.values(W).forEach(function(t) {
                            e.updateNodeMessage(t.id, t)
                        })
                    }),
                    W = {}
                }, 50, {
                    leading: !0,
                    maxWait: 50
                });
                return g = (0,
                r._)(function(r) {
                    var u, m, g, b, I, S, P, H, et, en, er, ea, eo, ei, es, el, ed, ec, eu, em, ef, eh, ep, eg, ev, ex, eb, ey, ek, eM, ew, eT, ej, eC, e_, eI;
                    return (0,
                    s.Jh)(this, function(s) {
                        switch (s.label) {
                        case 0:
                            if (X.onResponse(r, z, y),
                            u = !0,
                            "error" === r.type)
                                return console.error(m = r.error),
                                g = (null == m ? void 0 : m.message) || "Something went wrong",
                                w.tQ.updateTree(e, function(e) {
                                    e.updateNodeMessage(N, z),
                                    e.updateNodeMetadata(N, {
                                        err: g,
                                        errType: "danger",
                                        errCode: (0,
                                        k.T)(m) && m.code || "",
                                        completionSampleFinishTime: Date.now()
                                    })
                                }),
                                $.onMessageError(),
                                C(),
                                Q.current(y),
                                (0,
                                k.T)(m) && (null == m ? void 0 : m.code) === A.uU && (null == m ? void 0 : m.clearsIn) && (q(new Date(Date.now() + 1e3 * m.clearsIn).toISOString()),
                                setTimeout(function() {
                                    B()
                                }, 1e3 * m.clearsIn)),
                                [2];
                            if ("moderation" === r.type && (b = r.isCompletion,
                            I = r.messageId,
                            S = r.conversationId,
                            P = r.flagged,
                            H = r.blocked,
                            (P || H) && (K = !0,
                            H && b && (Y = !0),
                            w.tQ.updateTree(e, function(e) {
                                var t = e.messageIdToNodeId(I);
                                H && e.clearNodeMessageParts(t),
                                e.updateNodeMetadata(t, (0,
                                o._)((0,
                                a._)({}, H ? v.sK : v.Mf), {
                                    completionSampleFinishTime: Date.now()
                                }))
                            }),
                            d.A.logEvent(b ? H ? c.M.completionBlockedByModeration : c.M.completionFlaggedByModeration : H ? c.M.promptBlockedByModeration : c.M.promptFlaggedByModeration, {
                                threadId: S,
                                id: I
                            }))),
                            "num_variants_in_stream" === r.type)
                                return M = r,
                                [2];
                            if ("message" === r.type) {
                                if (et = r.message,
                                en = r.conversationId,
                                L && !_.hasReceivedServerCompletion) {
                                    if ((null == et ? void 0 : et.author.role) === f.uU.System)
                                        return _.appendSystemMessageToRoot(et),
                                        [2];
                                    if ((null == et ? void 0 : et.author.role) === f.uU.User || _.hasNodeOrMessageId(et.id))
                                        return [2]
                                }
                                L ? (ea = (null === (er = w.qN.getState().threads[e]) || void 0 === er ? void 0 : er.continuingFromSharedConversationId) != null,
                                w.tQ.removeContinuingFromSharedConversationId(e),
                                L = !1,
                                F = !_.hasReceivedServerCompletion || ea,
                                void 0 !== en && (y = en,
                                (0,
                                w.Zz)(e) && w.tQ.setServerIdForNewThread(e, en)),
                                w.tQ.updateTree(e, function(e) {
                                    e.updateNodeMessage(N, et)
                                }),
                                F && O.current(en),
                                eo = {
                                    id: i,
                                    threadId: en,
                                    completionType: n,
                                    eventSource: j,
                                    model: t
                                },
                                n === f.Os.Next && (ec = null == (ed = w.qN.getState().threads[en]) ? void 0 : null === (ei = ed.conversationTurns) || void 0 === ei ? void 0 : ei.length,
                                (null == (em = null === (el = (eu = null == ed ? void 0 : null === (es = ed.conversationTurns) || void 0 === es ? void 0 : es.filter(function(e) {
                                    return e.role == f.uU.User
                                }))[eu.length - 1]) || void 0 === el ? void 0 : el.messages[0].message) ? void 0 : em.content.content_type) == f.PX.Text && (ef = em.content.parts.join("").length,
                                ep = null !== (eh = eu.length) && void 0 !== eh ? eh : 0,
                                eo.countConversationTurns = ec,
                                eo.countUserSubmittedMessages = ep,
                                eo.countLastUserPromptTextMessageLength = ef)),
                                d.A.logEvent(c.M.generateCompletion, eo)) : !R && (ev = _.containsNodeOrMessageId(et.id),
                                ex = null === (eg = et.metadata) || void 0 === eg ? void 0 : eg.parent_id,
                                ev || (ee.flush(),
                                w.tQ.updateTree(e, function(e) {
                                    if (null == ex)
                                        throw Error("Received a message with no parentId: ".concat(JSON.stringify(et)));
                                    e.addNode(et.id, et, ex, f.uU.Assistant)
                                })),
                                null != ex && ex === T && null != (eb = J[ex]) && (w.tQ.updateTree(e, function(e) {
                                    Z(e, eb)
                                }),
                                delete J[ex]),
                                (u = (null !== (ey = null == M ? void 0 : M.num_variants_in_stream) && void 0 !== ey ? ey : 1) === 1 || null == T || T === et.id) && T !== et.id && (T = et.id,
                                N = et.id,
                                ek = w.tQ.getThreadCurrentLeafId(e),
                                _.messageIdToNodeId(N) !== _.messageIdToNodeId(ek) && w.tQ.setThreadCurrentLeafId(e, N),
                                null != ex && w.tQ.updateTree(e, function(e) {
                                    e.updateNodeMetadata(ex, {
                                        variantsInStreamInfo: M
                                    })
                                }))),
                                u && (z = et),
                                W[et.id] = et,
                                J[et.id] = et
                            }
                            if (ee(),
                            "done" !== r.type)
                                return [3, 4];
                            if (Y || (ee.flush(),
                            K || (F && G.current(y),
                            Q.current(y))),
                            w.tQ.updateTree(e, function(e) {
                                Object.values(J).forEach(function(t) {
                                    Z(e, t)
                                })
                            }),
                            $.onMessageDone(),
                            C(),
                            eT = null === (eM = U.get(t)) || void 0 === eM ? void 0 : eM.tags,
                            ej = (0,
                            l.Rr)(x, null != eT ? eT : [], f.OL.PrimaryAssistant),
                            !((null == z ? void 0 : null === (ew = z.metadata) || void 0 === ew ? void 0 : ew.client_actions) !== void 0))
                                return [3, 2];
                            return [4, function(e, t) {
                                return h.apply(this, arguments)
                            }(e, z)];
                        case 1:
                            (eC = s.sent()).length > 0 && E(e, N, t, ej, U, V, eC, p),
                            s.label = 2;
                        case 2:
                            if (!x.has("tools3_dev") || !(e_ = (0,
                            D.wR)(z)))
                                return [3, 4];
                            return eI = [e, N, t, ej, U, V],
                            [4, (0,
                            D.qZ)(e_)];
                        case 3:
                            E.apply(void 0, eI.concat([s.sent(), p])),
                            s.label = 4;
                        case 4:
                            return [2]
                        }
                    })
                }),
                function(e) {
                    return g.apply(this, arguments)
                }
            }, [O, G, Q, e])
              , V = (0,
            y.useCallback)((g = (0,
            r._)(function(n) {
                var r, l, d, c, u, m, h, g, v, x, b, y, k, T, j, S, P, D, A, L, Z, E, q, B, U, O, G, Q, H;
                return (0,
                s.Jh)(this, function(s) {
                    switch (s.label) {
                    case 0:
                        for (r = n.model,
                        l = n.completionType,
                        d = n.parentNodeId,
                        c = n.metadata,
                        m = void 0 === (u = n.focusOnNewCompletion) || u,
                        h = n.completionMetadata,
                        g = n.arkoseToken,
                        v = n.preflightTime,
                        x = n.extraStreamParams,
                        b = n.appendMessages,
                        C.E.publish({
                            kind: "requestCompletion"
                        }),
                        T = w.tQ.getTree(e),
                        w.tQ.retainThread(e),
                        j = "".concat(_.Vh).concat(N, "-").concat(z.current++),
                        S = "".concat(N, "-").concat(z.current),
                        w.tQ.updateTree(e, function(e) {
                            e.addNode(j, "", d, f.uU.Assistant)
                        }),
                        m && w.tQ.setThreadCurrentLeafId(e, j),
                        D = [],
                        A = T.getNodeByIdOrMessageId(d),
                        L = T.getNodeByIdOrMessageId(A.parentId); null != L && ((null === (y = L.metadata) || void 0 === y ? void 0 : y.isPlaceholderTemplateAssistantWelcomeMessage) === !0 || (null === (k = L.metadata) || void 0 === k ? void 0 : k.isClientCreatedSystemMessage) === !0); ) {
                            var V, J, Y = L.message;
                            D.unshift(Y);
                            var K = T.getNodeByIdOrMessageId(L.parentId);
                            P = null !== (J = null === (V = K.message) || void 0 === V ? void 0 : V.id) && void 0 !== J ? J : K.id,
                            L = K
                        }
                        return l === f.Os.Next || l === f.Os.Variant ? (E = T.getNodeByIdOrMessageId(A.parentId),
                        null != P || (P = null !== (q = null === (Z = E.message) || void 0 === Z ? void 0 : Z.id) && void 0 !== q ? q : E.id),
                        D.push(A.message),
                        b && (B = d,
                        w.tQ.updateTree(e, function(e) {
                            var t = !0
                              , n = !1
                              , r = void 0;
                            try {
                                for (var a, o = b[Symbol.iterator](); !(t = (a = o.next()).done); t = !0) {
                                    var i = a.value;
                                    e.insertNodeBefore(j, {
                                        id: i.id,
                                        message: i,
                                        parentId: B,
                                        children: []
                                    }),
                                    B = i.id
                                }
                            } catch (e) {
                                n = !0,
                                r = e
                            } finally {
                                try {
                                    t || null == o.return || o.return()
                                } finally {
                                    if (n)
                                        throw r
                                }
                            }
                        }),
                        D.push.apply(D, (0,
                        i._)(b)))) : null != P || (P = A.message.id),
                        void 0 === (U = w.tQ.getServerThreadId(e)) && (0,
                        w.Zz)(e) && w.tQ.updateInitialThreadDataForNewThread(e, r, p),
                        O = (0,
                        o._)((0,
                        a._)({}, x), {
                            model: r,
                            completionType: l,
                            threadId: U,
                            continueFromSharedConversationId: t,
                            historyDisabled: F,
                            parentMessageId: P,
                            messages: D,
                            arkoseToken: null != g ? g : null,
                            enabledPluginIds: p,
                            completionMetadata: h
                        }),
                        G = function(e, t) {
                            (0,
                            R.F4)(S, t, e, v)
                        }
                        ,
                        Q = W(r, l, j, c, S, x),
                        [4, M.ZP.publicApiCompletionStream(O, Q, G)];
                    case 1:
                        return H = s.sent(),
                        I.hx.addRequest(j, H),
                        [2]
                    }
                })
            }),
            function(e) {
                return g.apply(this, arguments)
            }
            ), [N, e, t, p, W, F]);
            return V
        }
    }
}]);
