(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/hooks/useAlerts.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// hooks/useAlerts.ts - Ensure it returns read property
__turbopack_context__.s([
    "useAlerts",
    ()=>useAlerts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
function useAlerts() {
    _s();
    const [alerts, setAlerts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const fetchAlerts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAlerts.useCallback[fetchAlerts]": async ()=>{
            try {
                setLoading(true);
                setError(null);
                // Try to fetch from alerts table (you might need to create this table)
                const { data, error: fetchError } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('alerts').select('*').order('created_at', {
                    ascending: false
                });
                if (fetchError) {
                    // If alerts table doesn't exist, create mock data
                    console.log('Alerts table not found, using mock data');
                    // Mock alerts for development
                    const mockAlerts = [
                        {
                            id: '1',
                            title: 'New Route Submitted',
                            message: 'User John Doe submitted a new route from Accra to Kumasi',
                            type: 'new_route',
                            severity: 'info',
                            read: false,
                            created_at: new Date().toISOString(),
                            updated_at: new Date().toISOString()
                        }
                    ];
                    setAlerts(mockAlerts);
                    return;
                }
                // Ensure alerts have read property
                const alertsWithRead = (data || []).map({
                    "useAlerts.useCallback[fetchAlerts].alertsWithRead": (alert)=>({
                            ...alert,
                            read: alert.read || false
                        })
                }["useAlerts.useCallback[fetchAlerts].alertsWithRead"]);
                setAlerts(alertsWithRead);
            } catch (err) {
                console.error('Failed to fetch alerts:', err);
                setError(err.message);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Failed to load alerts');
            } finally{
                setLoading(false);
            }
        }
    }["useAlerts.useCallback[fetchAlerts]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAlerts.useEffect": ()=>{
            fetchAlerts();
        }
    }["useAlerts.useEffect"], [
        fetchAlerts
    ]);
    const markAsRead = async (alertId)=>{
        try {
            const { error: error_0 } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('alerts').update({
                read: true,
                updated_at: new Date().toISOString()
            }).eq('id', alertId);
            if (error_0) {
                // Update local state if table doesn't exist
                setAlerts((prev)=>prev.map((alert_0)=>alert_0.id === alertId ? {
                            ...alert_0,
                            read: true
                        } : alert_0));
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('Alert marked as read');
                return;
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('Alert marked as read');
            fetchAlerts();
        } catch (err_0) {
            console.error('Mark as read error:', err_0);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Failed to mark alert as read');
        }
    };
    const deleteAlert = async (alertId_0)=>{
        try {
            const { error: error_1 } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('alerts').delete().eq('id', alertId_0);
            if (error_1) {
                // Remove from local state if table doesn't exist
                setAlerts((prev_0)=>prev_0.filter((alert_1)=>alert_1.id !== alertId_0));
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('Alert deleted');
                return;
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('Alert deleted');
            fetchAlerts();
        } catch (err_1) {
            console.error('Delete alert error:', err_1);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Failed to delete alert');
        }
    };
    return {
        alerts,
        loading,
        error,
        refresh: fetchAlerts,
        markAsRead,
        deleteAlert
    };
}
_s(useAlerts, "C3zet2gMJpQACwyxcT+zGHr40Cc=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/common/Loader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Loader",
    ()=>Loader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
'use client';
;
;
function Loader(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "4d63c4b0371d6d01f7cd2441a1054807b77dd01e1099f74d06006f1cea92b052") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4d63c4b0371d6d01f7cd2441a1054807b77dd01e1099f74d06006f1cea92b052";
    }
    const { message: t1 } = t0;
    const message = t1 === undefined ? "Loading..." : t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "animate-spin rounded-full h-12 w-12 border-b-2 border-primary"
        }, void 0, false, {
            fileName: "[project]/components/common/Loader.tsx",
            lineNumber: 21,
            columnNumber: 10
        }, this);
        $[1] = t2;
    } else {
        t2 = $[1];
    }
    let t3;
    if ($[2] !== message) {
        t3 = message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-4 text-text-light",
            children: message
        }, void 0, false, {
            fileName: "[project]/components/common/Loader.tsx",
            lineNumber: 28,
            columnNumber: 21
        }, this);
        $[2] = message;
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    let t4;
    if ($[4] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center justify-center py-12",
            children: [
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/components/common/Loader.tsx",
            lineNumber: 36,
            columnNumber: 10
        }, this);
        $[4] = t3;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    return t4;
}
_c = Loader;
var _c;
__turbopack_context__.k.register(_c, "Loader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/dashboard/alerts/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/dashboard/alerts/page.tsx - Updated
__turbopack_context__.s([
    "default",
    ()=>AlertsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layout/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useAlerts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useAlerts.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$Loader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/common/Loader.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function AlertsPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(92);
    if ($[0] !== "c4f5da49d31b18068f2725c4a3ddb61b024b97841ae64c371dede151c02998e4") {
        for(let $i = 0; $i < 92; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c4f5da49d31b18068f2725c4a3ddb61b024b97841ae64c371dede151c02998e4";
    }
    const { alerts, loading, error, markAsRead, deleteAlert, refresh } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useAlerts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAlerts"])();
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    let t0;
    let t1;
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    let t7;
    let t8;
    if ($[1] !== alerts || $[2] !== deleteAlert || $[3] !== error || $[4] !== filter || $[5] !== loading || $[6] !== markAsRead || $[7] !== refresh) {
        t8 = Symbol.for("react.early_return_sentinel");
        bb0: {
            let t9;
            if ($[17] !== filter) {
                t9 = ({
                    "AlertsPage[alerts.filter()]": (alert)=>{
                        if (filter === "unread") {
                            return !alert.read;
                        }
                        if (filter === "read") {
                            return alert.read;
                        }
                        if (filter !== "all") {
                            return alert.type === filter;
                        }
                        return true;
                    }
                })["AlertsPage[alerts.filter()]"];
                $[17] = filter;
                $[18] = t9;
            } else {
                t9 = $[18];
            }
            const filteredAlerts = alerts.filter(t9);
            const getSeverityColor = _AlertsPageGetSeverityColor;
            const getTypeIcon = _AlertsPageGetTypeIcon;
            let t10;
            if ($[19] !== refresh) {
                t10 = ({
                    "AlertsPage[handleCheckNewRoutes]": async ()=>{
                        ;
                        try {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Checked for new routes");
                            refresh();
                        } catch (t11) {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to check for new routes");
                        }
                    }
                })["AlertsPage[handleCheckNewRoutes]"];
                $[19] = refresh;
                $[20] = t10;
            } else {
                t10 = $[20];
            }
            const handleCheckNewRoutes = t10;
            if (loading) {
                let t11;
                if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
                    t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Header"], {
                                title: "Alerts & Monitoring"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/alerts/page.tsx",
                                lineNumber: 86,
                                columnNumber: 44
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$Loader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Loader"], {
                                message: "Loading alerts..."
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/alerts/page.tsx",
                                lineNumber: 86,
                                columnNumber: 82
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/alerts/page.tsx",
                        lineNumber: 86,
                        columnNumber: 17
                    }, this);
                    $[21] = t11;
                } else {
                    t11 = $[21];
                }
                t8 = t11;
                break bb0;
            }
            if (error) {
                let t11;
                if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
                    t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Header"], {
                        title: "Alerts & Monitoring"
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/alerts/page.tsx",
                        lineNumber: 97,
                        columnNumber: 17
                    }, this);
                    $[22] = t11;
                } else {
                    t11 = $[22];
                }
                let t12;
                if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
                    t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiAlertCircle"], {
                        className: "mx-auto text-4xl text-error mb-4"
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/alerts/page.tsx",
                        lineNumber: 104,
                        columnNumber: 17
                    }, this);
                    $[23] = t12;
                } else {
                    t12 = $[23];
                }
                let t13;
                if ($[24] !== error) {
                    t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-text font-medium mb-2",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/alerts/page.tsx",
                        lineNumber: 111,
                        columnNumber: 17
                    }, this);
                    $[24] = error;
                    $[25] = t13;
                } else {
                    t13 = $[25];
                }
                let t14;
                if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
                    t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-text-light",
                        children: "Please run the database setup script first"
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/alerts/page.tsx",
                        lineNumber: 119,
                        columnNumber: 17
                    }, this);
                    $[26] = t14;
                } else {
                    t14 = $[26];
                }
                let t15;
                if ($[27] !== refresh) {
                    t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: refresh,
                        className: "mt-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark",
                        children: "Retry"
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/alerts/page.tsx",
                        lineNumber: 126,
                        columnNumber: 17
                    }, this);
                    $[27] = refresh;
                    $[28] = t15;
                } else {
                    t15 = $[28];
                }
                let t16;
                if ($[29] !== t13 || $[30] !== t15) {
                    t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: [
                            t11,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white p-6 rounded-lg shadow",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center py-12",
                                    children: [
                                        t12,
                                        t13,
                                        t14,
                                        t15
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/alerts/page.tsx",
                                    lineNumber: 134,
                                    columnNumber: 97
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/alerts/page.tsx",
                                lineNumber: 134,
                                columnNumber: 49
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/alerts/page.tsx",
                        lineNumber: 134,
                        columnNumber: 17
                    }, this);
                    $[29] = t13;
                    $[30] = t15;
                    $[31] = t16;
                } else {
                    t16 = $[31];
                }
                t8 = t16;
                break bb0;
            }
            t6 = "space-y-6";
            if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
                t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Header"], {
                    title: "Alerts & Monitoring",
                    subtitle: "Monitor system alerts, route submissions, and user activities"
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/alerts/page.tsx",
                    lineNumber: 146,
                    columnNumber: 14
                }, this);
                $[32] = t7;
            } else {
                t7 = $[32];
            }
            t5 = "grid grid-cols-1 lg:grid-cols-4 gap-6";
            t4 = "lg:col-span-3 space-y-6";
            t2 = "bg-white rounded-lg shadow p-6";
            let t11;
            if ($[33] === Symbol.for("react.memo_cache_sentinel")) {
                t11 = ({
                    "AlertsPage[<select>.onChange]": (e)=>setFilter(e.target.value)
                })["AlertsPage[<select>.onChange]"];
                $[33] = t11;
            } else {
                t11 = $[33];
            }
            let t12;
            let t13;
            let t14;
            let t15;
            let t16;
            let t17;
            if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
                t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                    value: "all",
                    children: "All Alerts"
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/alerts/page.tsx",
                    lineNumber: 170,
                    columnNumber: 15
                }, this);
                t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                    value: "unread",
                    children: "Unread"
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/alerts/page.tsx",
                    lineNumber: 171,
                    columnNumber: 15
                }, this);
                t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                    value: "read",
                    children: "Read"
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/alerts/page.tsx",
                    lineNumber: 172,
                    columnNumber: 15
                }, this);
                t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                    value: "new_route",
                    children: "New Routes"
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/alerts/page.tsx",
                    lineNumber: 173,
                    columnNumber: 15
                }, this);
                t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                    value: "payment",
                    children: "Payments"
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/alerts/page.tsx",
                    lineNumber: 174,
                    columnNumber: 15
                }, this);
                t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                    value: "system",
                    children: "System"
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/alerts/page.tsx",
                    lineNumber: 175,
                    columnNumber: 15
                }, this);
                $[34] = t12;
                $[35] = t13;
                $[36] = t14;
                $[37] = t15;
                $[38] = t16;
                $[39] = t17;
            } else {
                t12 = $[34];
                t13 = $[35];
                t14 = $[36];
                t15 = $[37];
                t16 = $[38];
                t17 = $[39];
            }
            let t18;
            if ($[40] !== filter) {
                t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center space-x-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        value: filter,
                        onChange: t11,
                        className: "px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary",
                        children: [
                            t12,
                            t13,
                            t14,
                            t15,
                            t16,
                            t17
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/alerts/page.tsx",
                        lineNumber: 192,
                        columnNumber: 60
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/alerts/page.tsx",
                    lineNumber: 192,
                    columnNumber: 15
                }, this);
                $[40] = filter;
                $[41] = t18;
            } else {
                t18 = $[41];
            }
            let t19;
            let t20;
            if ($[42] === Symbol.for("react.memo_cache_sentinel")) {
                t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiRefreshCw"], {}, void 0, false, {
                    fileName: "[project]/app/dashboard/alerts/page.tsx",
                    lineNumber: 201,
                    columnNumber: 15
                }, this);
                t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Check New Routes"
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/alerts/page.tsx",
                    lineNumber: 202,
                    columnNumber: 15
                }, this);
                $[42] = t19;
                $[43] = t20;
            } else {
                t19 = $[42];
                t20 = $[43];
            }
            let t21;
            if ($[44] !== handleCheckNewRoutes) {
                t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleCheckNewRoutes,
                    className: "flex items-center space-x-2 px-4 py-2 border border-border rounded-lg hover:bg-gray-50",
                    children: [
                        t19,
                        t20
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/alerts/page.tsx",
                    lineNumber: 211,
                    columnNumber: 15
                }, this);
                $[44] = handleCheckNewRoutes;
                $[45] = t21;
            } else {
                t21 = $[45];
            }
            let t22;
            let t23;
            if ($[46] === Symbol.for("react.memo_cache_sentinel")) {
                t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiAlertCircle"], {}, void 0, false, {
                    fileName: "[project]/app/dashboard/alerts/page.tsx",
                    lineNumber: 220,
                    columnNumber: 15
                }, this);
                t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Refresh"
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/alerts/page.tsx",
                    lineNumber: 221,
                    columnNumber: 15
                }, this);
                $[46] = t22;
                $[47] = t23;
            } else {
                t22 = $[46];
                t23 = $[47];
            }
            let t24;
            if ($[48] !== refresh) {
                t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: refresh,
                    className: "flex items-center space-x-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark",
                    children: [
                        t22,
                        t23
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/alerts/page.tsx",
                    lineNumber: 230,
                    columnNumber: 15
                }, this);
                $[48] = refresh;
                $[49] = t24;
            } else {
                t24 = $[49];
            }
            let t25;
            if ($[50] !== t21 || $[51] !== t24) {
                t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center space-x-3",
                    children: [
                        t21,
                        t24
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/alerts/page.tsx",
                    lineNumber: 238,
                    columnNumber: 15
                }, this);
                $[50] = t21;
                $[51] = t24;
                $[52] = t25;
            } else {
                t25 = $[52];
            }
            if ($[53] !== t18 || $[54] !== t25) {
                t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between mb-6",
                    children: [
                        t18,
                        t25
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/alerts/page.tsx",
                    lineNumber: 246,
                    columnNumber: 14
                }, this);
                $[53] = t18;
                $[54] = t25;
                $[55] = t3;
            } else {
                t3 = $[55];
            }
            t0 = "space-y-4";
            t1 = filteredAlerts.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiCheckCircle"], {
                        className: "text-success mx-auto text-4xl mb-4"
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/alerts/page.tsx",
                        lineNumber: 254,
                        columnNumber: 77
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-text",
                        children: "No alerts found"
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/alerts/page.tsx",
                        lineNumber: 254,
                        columnNumber: 141
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-text-light",
                        children: "All systems are running smoothly"
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/alerts/page.tsx",
                        lineNumber: 254,
                        columnNumber: 185
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/alerts/page.tsx",
                lineNumber: 254,
                columnNumber: 42
            }, this) : filteredAlerts.map({
                "AlertsPage[filteredAlerts.map()]": (alert_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `border rounded-lg p-4 ${alert_0.read ? "bg-gray-50" : "bg-white"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `p-2 rounded-lg ${getSeverityColor(alert_0.severity)} mr-4`,
                                                children: getTypeIcon(alert_0.type)
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/alerts/page.tsx",
                                                lineNumber: 255,
                                                columnNumber: 242
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center space-x-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "font-semibold text-text",
                                                                children: alert_0.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/alerts/page.tsx",
                                                                lineNumber: 255,
                                                                columnNumber: 402
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `text-xs px-2 py-1 rounded-full ${getSeverityColor(alert_0.severity)}`,
                                                                children: alert_0.severity.toUpperCase()
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/alerts/page.tsx",
                                                                lineNumber: 255,
                                                                columnNumber: 462
                                                            }, this),
                                                            alert_0.read && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs px-2 py-1 bg-success/10 text-success rounded-full",
                                                                children: "READ"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/alerts/page.tsx",
                                                                lineNumber: 255,
                                                                columnNumber: 607
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/alerts/page.tsx",
                                                        lineNumber: 255,
                                                        columnNumber: 357
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-text-light mt-1",
                                                        children: alert_0.message
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/alerts/page.tsx",
                                                        lineNumber: 255,
                                                        columnNumber: 701
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center space-x-4 mt-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs text-text-light flex items-center",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiClock"], {
                                                                        className: "mr-1"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/alerts/page.tsx",
                                                                        lineNumber: 255,
                                                                        columnNumber: 868
                                                                    }, this),
                                                                    new Date(alert_0.created_at).toLocaleString()
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/dashboard/alerts/page.tsx",
                                                                lineNumber: 255,
                                                                columnNumber: 808
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs text-text-light capitalize",
                                                                children: alert_0.type.replace("_", " ")
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/alerts/page.tsx",
                                                                lineNumber: 255,
                                                                columnNumber: 950
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/alerts/page.tsx",
                                                        lineNumber: 255,
                                                        columnNumber: 758
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/alerts/page.tsx",
                                                lineNumber: 255,
                                                columnNumber: 352
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/alerts/page.tsx",
                                        lineNumber: 255,
                                        columnNumber: 208
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center space-x-2",
                                        children: [
                                            !alert_0.read && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: {
                                                    "AlertsPage[filteredAlerts.map() > <button>.onClick]": ()=>markAsRead(alert_0.id)
                                                }["AlertsPage[filteredAlerts.map() > <button>.onClick]"],
                                                className: "px-3 py-1 bg-success text-white rounded-lg hover:bg-success/90 text-sm",
                                                children: "Mark Read"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/alerts/page.tsx",
                                                lineNumber: 255,
                                                columnNumber: 1123
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: {
                                                    "AlertsPage[filteredAlerts.map() > <button>.onClick]": ()=>{
                                                        if (confirm("Delete this alert?")) {
                                                            deleteAlert(alert_0.id);
                                                        }
                                                    }
                                                }["AlertsPage[filteredAlerts.map() > <button>.onClick]"],
                                                className: "px-3 py-1 bg-error text-white rounded-lg hover:bg-error/90 text-sm",
                                                children: "Delete"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/alerts/page.tsx",
                                                lineNumber: 257,
                                                columnNumber: 175
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/alerts/page.tsx",
                                        lineNumber: 255,
                                        columnNumber: 1060
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/alerts/page.tsx",
                                lineNumber: 255,
                                columnNumber: 158
                            }, this),
                            alert_0.data && Object.keys(alert_0.data).length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 ml-12",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                    className: "text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                            className: "cursor-pointer text-primary hover:text-primary-dark",
                                            children: "View Details"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/alerts/page.tsx",
                                            lineNumber: 263,
                                            columnNumber: 293
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                            className: "mt-2 p-3 bg-gray-50 rounded text-xs overflow-x-auto",
                                            children: JSON.stringify(alert_0.data, null, 2)
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/alerts/page.tsx",
                                            lineNumber: 263,
                                            columnNumber: 388
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/alerts/page.tsx",
                                    lineNumber: 263,
                                    columnNumber: 264
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/alerts/page.tsx",
                                lineNumber: 263,
                                columnNumber: 236
                            }, this)
                        ]
                    }, alert_0.id, true, {
                        fileName: "[project]/app/dashboard/alerts/page.tsx",
                        lineNumber: 255,
                        columnNumber: 56
                    }, this)
            }["AlertsPage[filteredAlerts.map()]"]);
        }
        $[1] = alerts;
        $[2] = deleteAlert;
        $[3] = error;
        $[4] = filter;
        $[5] = loading;
        $[6] = markAsRead;
        $[7] = refresh;
        $[8] = t0;
        $[9] = t1;
        $[10] = t2;
        $[11] = t3;
        $[12] = t4;
        $[13] = t5;
        $[14] = t6;
        $[15] = t7;
        $[16] = t8;
    } else {
        t0 = $[8];
        t1 = $[9];
        t2 = $[10];
        t3 = $[11];
        t4 = $[12];
        t5 = $[13];
        t6 = $[14];
        t7 = $[15];
        t8 = $[16];
    }
    if (t8 !== Symbol.for("react.early_return_sentinel")) {
        return t8;
    }
    let t9;
    if ($[56] !== t0 || $[57] !== t1) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t0,
            children: t1
        }, void 0, false, {
            fileName: "[project]/app/dashboard/alerts/page.tsx",
            lineNumber: 298,
            columnNumber: 10
        }, this);
        $[56] = t0;
        $[57] = t1;
        $[58] = t9;
    } else {
        t9 = $[58];
    }
    let t10;
    if ($[59] !== t2 || $[60] !== t3 || $[61] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t2,
            children: [
                t3,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/app/dashboard/alerts/page.tsx",
            lineNumber: 307,
            columnNumber: 11
        }, this);
        $[59] = t2;
        $[60] = t3;
        $[61] = t9;
        $[62] = t10;
    } else {
        t10 = $[62];
    }
    let t11;
    if ($[63] !== t10 || $[64] !== t4) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t4,
            children: t10
        }, void 0, false, {
            fileName: "[project]/app/dashboard/alerts/page.tsx",
            lineNumber: 317,
            columnNumber: 11
        }, this);
        $[63] = t10;
        $[64] = t4;
        $[65] = t11;
    } else {
        t11 = $[65];
    }
    let t12;
    if ($[66] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-lg font-semibold text-text mb-4",
            children: "Alert Statistics"
        }, void 0, false, {
            fileName: "[project]/app/dashboard/alerts/page.tsx",
            lineNumber: 326,
            columnNumber: 11
        }, this);
        $[66] = t12;
    } else {
        t12 = $[66];
    }
    let t13;
    if ($[67] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-text-light",
            children: "Total Alerts"
        }, void 0, false, {
            fileName: "[project]/app/dashboard/alerts/page.tsx",
            lineNumber: 333,
            columnNumber: 11
        }, this);
        $[67] = t13;
    } else {
        t13 = $[67];
    }
    let t14;
    if ($[68] !== alerts.length) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t13,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-2xl font-bold text-text",
                    children: alerts.length
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/alerts/page.tsx",
                    lineNumber: 340,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/dashboard/alerts/page.tsx",
            lineNumber: 340,
            columnNumber: 11
        }, this);
        $[68] = alerts.length;
        $[69] = t14;
    } else {
        t14 = $[69];
    }
    let t15;
    if ($[70] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-text-light",
            children: "Unread"
        }, void 0, false, {
            fileName: "[project]/app/dashboard/alerts/page.tsx",
            lineNumber: 348,
            columnNumber: 11
        }, this);
        $[70] = t15;
    } else {
        t15 = $[70];
    }
    let t16;
    if ($[71] !== alerts) {
        t16 = alerts.filter(_AlertsPageAlertsFilter);
        $[71] = alerts;
        $[72] = t16;
    } else {
        t16 = $[72];
    }
    let t17;
    if ($[73] !== t16.length) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t15,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-2xl font-bold text-primary",
                    children: t16.length
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/alerts/page.tsx",
                    lineNumber: 363,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/dashboard/alerts/page.tsx",
            lineNumber: 363,
            columnNumber: 11
        }, this);
        $[73] = t16.length;
        $[74] = t17;
    } else {
        t17 = $[74];
    }
    let t18;
    if ($[75] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-text-light",
            children: "New Routes Today"
        }, void 0, false, {
            fileName: "[project]/app/dashboard/alerts/page.tsx",
            lineNumber: 371,
            columnNumber: 11
        }, this);
        $[75] = t18;
    } else {
        t18 = $[75];
    }
    let t19;
    if ($[76] !== alerts) {
        t19 = alerts.filter(_AlertsPageAlertsFilter2);
        $[76] = alerts;
        $[77] = t19;
    } else {
        t19 = $[77];
    }
    let t20;
    if ($[78] !== t19.length) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t18,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-2xl font-bold text-success",
                    children: t19.length
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/alerts/page.tsx",
                    lineNumber: 386,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/dashboard/alerts/page.tsx",
            lineNumber: 386,
            columnNumber: 11
        }, this);
        $[78] = t19.length;
        $[79] = t20;
    } else {
        t20 = $[79];
    }
    let t21;
    if ($[80] !== t14 || $[81] !== t17 || $[82] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white p-6 rounded-lg shadow",
                children: [
                    t12,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            t14,
                            t17,
                            t20
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/alerts/page.tsx",
                        lineNumber: 394,
                        columnNumber: 91
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/alerts/page.tsx",
                lineNumber: 394,
                columnNumber: 38
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/dashboard/alerts/page.tsx",
            lineNumber: 394,
            columnNumber: 11
        }, this);
        $[80] = t14;
        $[81] = t17;
        $[82] = t20;
        $[83] = t21;
    } else {
        t21 = $[83];
    }
    let t22;
    if ($[84] !== t11 || $[85] !== t21 || $[86] !== t5) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t5,
            children: [
                t11,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/app/dashboard/alerts/page.tsx",
            lineNumber: 404,
            columnNumber: 11
        }, this);
        $[84] = t11;
        $[85] = t21;
        $[86] = t5;
        $[87] = t22;
    } else {
        t22 = $[87];
    }
    let t23;
    if ($[88] !== t22 || $[89] !== t6 || $[90] !== t7) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t6,
            children: [
                t7,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/app/dashboard/alerts/page.tsx",
            lineNumber: 414,
            columnNumber: 11
        }, this);
        $[88] = t22;
        $[89] = t6;
        $[90] = t7;
        $[91] = t23;
    } else {
        t23 = $[91];
    }
    return t23;
}
_s(AlertsPage, "vOJjA3EuwhfN/C1hjlo3SdSdqKk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useAlerts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAlerts"]
    ];
});
_c = AlertsPage;
function _AlertsPageAlertsFilter2(a_0) {
    return a_0.type === "new_route" && new Date(a_0.created_at).toDateString() === new Date().toDateString();
}
function _AlertsPageAlertsFilter(a) {
    return !a.read;
}
function _AlertsPageGetTypeIcon(type) {
    switch(type){
        case "new_route":
            {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiNavigation"], {
                    className: "mr-2"
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/alerts/page.tsx",
                    lineNumber: 434,
                    columnNumber: 16
                }, this);
            }
        case "payment":
            {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiBell"], {
                    className: "mr-2"
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/alerts/page.tsx",
                    lineNumber: 438,
                    columnNumber: 16
                }, this);
            }
        case "user":
            {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiUserCheck"], {
                    className: "mr-2"
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/alerts/page.tsx",
                    lineNumber: 442,
                    columnNumber: 16
                }, this);
            }
        case "system":
            {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiAlertCircle"], {
                    className: "mr-2"
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/alerts/page.tsx",
                    lineNumber: 446,
                    columnNumber: 16
                }, this);
            }
        default:
            {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiAlertCircle"], {
                    className: "mr-2"
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/alerts/page.tsx",
                    lineNumber: 450,
                    columnNumber: 16
                }, this);
            }
    }
}
function _AlertsPageGetSeverityColor(severity) {
    switch(severity){
        case "error":
            {
                return "bg-error/10 text-error border-error/20";
            }
        case "warning":
            {
                return "bg-yellow-100 text-yellow-800 border-yellow-200";
            }
        case "info":
        default:
            {
                return "bg-blue-100 text-blue-800 border-blue-200";
            }
    }
}
var _c;
__turbopack_context__.k.register(_c, "AlertsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_d8bf4bb2._.js.map