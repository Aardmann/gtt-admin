(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/hooks/useDashboardStats.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// hooks/useDashboardStats.ts
__turbopack_context__.s([
    "useDashboardStats",
    ()=>useDashboardStats
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
function useDashboardStats() {
    _s();
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        totalUsers: 0,
        totalRoutes: 0,
        totalStops: 0,
        activeUsers: 0,
        pendingRoutes: 0,
        todaySearches: 0,
        notificationsSent: 0,
        revenueToday: 0
    });
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const fetchStats = async ()=>{
        try {
            setLoading(true);
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            const todayISO = today.toISOString();
            // Fetch all stats in parallel
            const [usersRes, routesRes, stopsRes, activeUsersRes, pendingRoutesRes, todaySearchesRes, notificationsRes, revenueRes] = await Promise.all([
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('users').select('*', {
                    count: 'exact',
                    head: true
                }),
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('routes').select('*', {
                    count: 'exact',
                    head: true
                }),
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('stops').select('*', {
                    count: 'exact',
                    head: true
                }),
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('profiles').select('*', {
                    count: 'exact',
                    head: true
                }).gte('last_seen_at', new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()),
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('routes').select('*', {
                    count: 'exact',
                    head: true
                }).eq('approved', false),
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('search_history').select('*', {
                    count: 'exact',
                    head: true
                }).gte('searched_at', todayISO),
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('notifications').select('sent_count'),
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('route_creation_payments').select('amount').eq('payment_status', 'completed').gte('created_at', todayISO)
            ]);
            const notificationsSent = notificationsRes.data?.reduce((sum, n)=>sum + n.sent_count, 0) || 0;
            const revenueToday = revenueRes.data?.reduce((sum_0, p)=>sum_0 + (p.amount || 0), 0) || 0;
            setStats({
                totalUsers: usersRes.count || 0,
                totalRoutes: routesRes.count || 0,
                totalStops: stopsRes.count || 0,
                activeUsers: activeUsersRes.count || 0,
                pendingRoutes: pendingRoutesRes.count || 0,
                todaySearches: todaySearchesRes.count || 0,
                notificationsSent,
                revenueToday
            });
        } catch (error) {
            console.error('Failed to fetch dashboard stats:', error);
        } finally{
            setLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDashboardStats.useEffect": ()=>{
            fetchStats();
            // Refresh stats every 30 seconds
            const interval = setInterval(fetchStats, 30000);
            return ({
                "useDashboardStats.useEffect": ()=>clearInterval(interval)
            })["useDashboardStats.useEffect"];
        }
    }["useDashboardStats.useEffect"], []);
    return {
        stats,
        loading,
        refresh: fetchStats
    };
}
_s(useDashboardStats, "lREk3Xfy1GOgxG9Ev2/l+6fTwdM=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useRoutes.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// hooks/useRoutes.ts
__turbopack_context__.s([
    "useRoutes",
    ()=>useRoutes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
function useRoutes() {
    _s();
    const [routes, setRoutes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [userRoutes, setUserRoutes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const fetchRoutes = async ()=>{
        try {
            setLoading(true);
            setError(null);
            const [routesRes, userRoutesRes] = await Promise.all([
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('routes').select(`
            *,
            stops:route_stops(
              *,
              stop:stops(*)
            )
          `).order('created_at', {
                    ascending: false
                }),
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('user_created_routes').select(`
            *,
            user:users(*),
            main_route:routes(*)
          `).order('created_at', {
                    ascending: false
                })
            ]);
            if (routesRes.error) throw routesRes.error;
            if (userRoutesRes.error) throw userRoutesRes.error;
            setRoutes(routesRes.data || []);
            setUserRoutes(userRoutesRes.data || []);
        } catch (err) {
            setError(err.message);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Failed to fetch routes');
        } finally{
            setLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useRoutes.useEffect": ()=>{
            fetchRoutes();
            // Setup real-time subscriptions
            const routesSubscription = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].channel('routes-channel').on('postgres_changes', {
                event: '*',
                schema: 'public',
                table: 'routes'
            }, fetchRoutes).subscribe();
            const userRoutesSubscription = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].channel('user-routes-channel').on('postgres_changes', {
                event: '*',
                schema: 'public',
                table: 'user_created_routes'
            }, fetchRoutes).subscribe();
            return ({
                "useRoutes.useEffect": ()=>{
                    routesSubscription.unsubscribe();
                    userRoutesSubscription.unsubscribe();
                }
            })["useRoutes.useEffect"];
        }
    }["useRoutes.useEffect"], []);
    const approveRoute = async (routeId)=>{
        try {
            const { error: error_0 } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('routes').update({
                approved: true
            }).eq('id', routeId);
            if (error_0) throw error_0;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('Route approved successfully');
            fetchRoutes();
        } catch (err_0) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Failed to approve route');
        }
    };
    const rejectRoute = async (routeId_0, reason)=>{
        try {
            const { error: error_1 } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('routes').update({
                approved: false,
                rejection_reason: reason
            }).eq('id', routeId_0);
            if (error_1) throw error_1;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('Route rejected');
            fetchRoutes();
        } catch (err_1) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Failed to reject route');
        }
    };
    const deleteRoute = async (routeId_1)=>{
        try {
            const { error: error_2 } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('routes').delete().eq('id', routeId_1);
            if (error_2) throw error_2;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('Route deleted');
            fetchRoutes();
        } catch (err_2) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Failed to delete route');
        }
    };
    return {
        routes,
        userRoutes,
        loading,
        error,
        refresh: fetchRoutes,
        approveRoute,
        rejectRoute,
        deleteRoute
    };
}
_s(useRoutes, "O1UU2XXP2PLKOXuIPY4+oFf5bpI=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/dashboard/StatsCards.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/dashboard/StatsCards.tsx
__turbopack_context__.s([
    "StatsCards",
    ()=>StatsCards
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
'use client';
;
;
;
function StatsCards(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(50);
    if ($[0] !== "0c050d67140ad8af83a0840702fc8519801801458d39a3a700d4fdbc9a593715") {
        for(let $i = 0; $i < 50; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0c050d67140ad8af83a0840702fc8519801801458d39a3a700d4fdbc9a593715";
    }
    const { stats } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-text-light",
            children: "Total Users"
        }, void 0, false, {
            fileName: "[project]/components/dashboard/StatsCards.tsx",
            lineNumber: 23,
            columnNumber: 10
        }, this);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== stats.totalUsers) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-3xl font-bold text-text",
                    children: stats.totalUsers
                }, void 0, false, {
                    fileName: "[project]/components/dashboard/StatsCards.tsx",
                    lineNumber: 30,
                    columnNumber: 19
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/dashboard/StatsCards.tsx",
            lineNumber: 30,
            columnNumber: 10
        }, this);
        $[2] = stats.totalUsers;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-3 bg-primary/10 rounded-lg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiUsers"], {
                className: "text-primary",
                size: 24
            }, void 0, false, {
                fileName: "[project]/components/dashboard/StatsCards.tsx",
                lineNumber: 38,
                columnNumber: 56
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/dashboard/StatsCards.tsx",
            lineNumber: 38,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] !== t2) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between",
            children: [
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/components/dashboard/StatsCards.tsx",
            lineNumber: 45,
            columnNumber: 10
        }, this);
        $[5] = t2;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiTrendingUp"], {
            className: "mr-1"
        }, void 0, false, {
            fileName: "[project]/components/dashboard/StatsCards.tsx",
            lineNumber: 53,
            columnNumber: 10
        }, this);
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] !== stats.activeUsers) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center text-green-600",
                children: [
                    t5,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm",
                        children: [
                            stats.activeUsers,
                            " active today"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/dashboard/StatsCards.tsx",
                        lineNumber: 60,
                        columnNumber: 86
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/StatsCards.tsx",
                lineNumber: 60,
                columnNumber: 32
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/dashboard/StatsCards.tsx",
            lineNumber: 60,
            columnNumber: 10
        }, this);
        $[8] = stats.activeUsers;
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] !== t4 || $[11] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white p-6 rounded-lg shadow",
            children: [
                t4,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/components/dashboard/StatsCards.tsx",
            lineNumber: 68,
            columnNumber: 10
        }, this);
        $[10] = t4;
        $[11] = t6;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    let t8;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-text-light",
            children: "Total Routes"
        }, void 0, false, {
            fileName: "[project]/components/dashboard/StatsCards.tsx",
            lineNumber: 77,
            columnNumber: 10
        }, this);
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    let t9;
    if ($[14] !== stats.totalRoutes) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t8,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-3xl font-bold text-text",
                    children: stats.totalRoutes
                }, void 0, false, {
                    fileName: "[project]/components/dashboard/StatsCards.tsx",
                    lineNumber: 84,
                    columnNumber: 19
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/dashboard/StatsCards.tsx",
            lineNumber: 84,
            columnNumber: 10
        }, this);
        $[14] = stats.totalRoutes;
        $[15] = t9;
    } else {
        t9 = $[15];
    }
    let t10;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-3 bg-primary/10 rounded-lg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiMap"], {
                className: "text-primary",
                size: 24
            }, void 0, false, {
                fileName: "[project]/components/dashboard/StatsCards.tsx",
                lineNumber: 92,
                columnNumber: 57
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/dashboard/StatsCards.tsx",
            lineNumber: 92,
            columnNumber: 11
        }, this);
        $[16] = t10;
    } else {
        t10 = $[16];
    }
    let t11;
    if ($[17] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between",
            children: [
                t9,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/components/dashboard/StatsCards.tsx",
            lineNumber: 99,
            columnNumber: 11
        }, this);
        $[17] = t9;
        $[18] = t11;
    } else {
        t11 = $[18];
    }
    let t12;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiTrendingUp"], {
            className: "mr-1"
        }, void 0, false, {
            fileName: "[project]/components/dashboard/StatsCards.tsx",
            lineNumber: 107,
            columnNumber: 11
        }, this);
        $[19] = t12;
    } else {
        t12 = $[19];
    }
    let t13;
    if ($[20] !== stats.pendingRoutes) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center text-yellow-600",
                children: [
                    t12,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm",
                        children: [
                            stats.pendingRoutes,
                            " pending approval"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/dashboard/StatsCards.tsx",
                        lineNumber: 114,
                        columnNumber: 89
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/StatsCards.tsx",
                lineNumber: 114,
                columnNumber: 33
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/dashboard/StatsCards.tsx",
            lineNumber: 114,
            columnNumber: 11
        }, this);
        $[20] = stats.pendingRoutes;
        $[21] = t13;
    } else {
        t13 = $[21];
    }
    let t14;
    if ($[22] !== t11 || $[23] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white p-6 rounded-lg shadow",
            children: [
                t11,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/components/dashboard/StatsCards.tsx",
            lineNumber: 122,
            columnNumber: 11
        }, this);
        $[22] = t11;
        $[23] = t13;
        $[24] = t14;
    } else {
        t14 = $[24];
    }
    let t15;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-text-light",
            children: "Today's Searches"
        }, void 0, false, {
            fileName: "[project]/components/dashboard/StatsCards.tsx",
            lineNumber: 131,
            columnNumber: 11
        }, this);
        $[25] = t15;
    } else {
        t15 = $[25];
    }
    let t16;
    if ($[26] !== stats.todaySearches) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t15,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-3xl font-bold text-text",
                    children: stats.todaySearches
                }, void 0, false, {
                    fileName: "[project]/components/dashboard/StatsCards.tsx",
                    lineNumber: 138,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/dashboard/StatsCards.tsx",
            lineNumber: 138,
            columnNumber: 11
        }, this);
        $[26] = stats.todaySearches;
        $[27] = t16;
    } else {
        t16 = $[27];
    }
    let t17;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-3 bg-primary/10 rounded-lg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiSearch"], {
                className: "text-primary",
                size: 24
            }, void 0, false, {
                fileName: "[project]/components/dashboard/StatsCards.tsx",
                lineNumber: 146,
                columnNumber: 57
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/dashboard/StatsCards.tsx",
            lineNumber: 146,
            columnNumber: 11
        }, this);
        $[28] = t17;
    } else {
        t17 = $[28];
    }
    let t18;
    if ($[29] !== t16) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between",
            children: [
                t16,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/components/dashboard/StatsCards.tsx",
            lineNumber: 153,
            columnNumber: 11
        }, this);
        $[29] = t16;
        $[30] = t18;
    } else {
        t18 = $[30];
    }
    let t19;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-text-light",
                children: "User activity"
            }, void 0, false, {
                fileName: "[project]/components/dashboard/StatsCards.tsx",
                lineNumber: 161,
                columnNumber: 33
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/dashboard/StatsCards.tsx",
            lineNumber: 161,
            columnNumber: 11
        }, this);
        $[31] = t19;
    } else {
        t19 = $[31];
    }
    let t20;
    if ($[32] !== t18) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white p-6 rounded-lg shadow",
            children: [
                t18,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/components/dashboard/StatsCards.tsx",
            lineNumber: 168,
            columnNumber: 11
        }, this);
        $[32] = t18;
        $[33] = t20;
    } else {
        t20 = $[33];
    }
    let t21;
    if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-text-light",
            children: "Revenue Today"
        }, void 0, false, {
            fileName: "[project]/components/dashboard/StatsCards.tsx",
            lineNumber: 176,
            columnNumber: 11
        }, this);
        $[34] = t21;
    } else {
        t21 = $[34];
    }
    let t22;
    if ($[35] !== stats.revenueToday) {
        t22 = stats.revenueToday.toFixed(2);
        $[35] = stats.revenueToday;
        $[36] = t22;
    } else {
        t22 = $[36];
    }
    let t23;
    if ($[37] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t21,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-3xl font-bold text-text",
                    children: [
                        "GH₵",
                        t22
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/dashboard/StatsCards.tsx",
                    lineNumber: 191,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/dashboard/StatsCards.tsx",
            lineNumber: 191,
            columnNumber: 11
        }, this);
        $[37] = t22;
        $[38] = t23;
    } else {
        t23 = $[38];
    }
    let t24;
    if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-3 bg-primary/10 rounded-lg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiDollarSign"], {
                className: "text-primary",
                size: 24
            }, void 0, false, {
                fileName: "[project]/components/dashboard/StatsCards.tsx",
                lineNumber: 199,
                columnNumber: 57
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/dashboard/StatsCards.tsx",
            lineNumber: 199,
            columnNumber: 11
        }, this);
        $[39] = t24;
    } else {
        t24 = $[39];
    }
    let t25;
    if ($[40] !== t23) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between",
            children: [
                t23,
                t24
            ]
        }, void 0, true, {
            fileName: "[project]/components/dashboard/StatsCards.tsx",
            lineNumber: 206,
            columnNumber: 11
        }, this);
        $[40] = t23;
        $[41] = t25;
    } else {
        t25 = $[41];
    }
    let t26;
    if ($[42] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-text-light",
                children: "Route creation payments"
            }, void 0, false, {
                fileName: "[project]/components/dashboard/StatsCards.tsx",
                lineNumber: 214,
                columnNumber: 33
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/dashboard/StatsCards.tsx",
            lineNumber: 214,
            columnNumber: 11
        }, this);
        $[42] = t26;
    } else {
        t26 = $[42];
    }
    let t27;
    if ($[43] !== t25) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white p-6 rounded-lg shadow",
            children: [
                t25,
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/components/dashboard/StatsCards.tsx",
            lineNumber: 221,
            columnNumber: 11
        }, this);
        $[43] = t25;
        $[44] = t27;
    } else {
        t27 = $[44];
    }
    let t28;
    if ($[45] !== t14 || $[46] !== t20 || $[47] !== t27 || $[48] !== t7) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
            children: [
                t7,
                t14,
                t20,
                t27
            ]
        }, void 0, true, {
            fileName: "[project]/components/dashboard/StatsCards.tsx",
            lineNumber: 229,
            columnNumber: 11
        }, this);
        $[45] = t14;
        $[46] = t20;
        $[47] = t27;
        $[48] = t7;
        $[49] = t28;
    } else {
        t28 = $[49];
    }
    return t28;
}
_c = StatsCards;
var _c;
__turbopack_context__.k.register(_c, "StatsCards");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/dashboard/RecentActivity.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/dashboard/RecentActivity.tsx
__turbopack_context__.s([
    "RecentActivity",
    ()=>RecentActivity
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
'use client';
;
;
;
;
function RecentActivity(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "ad0a19b24e62d920b195a9dbee9268f57b97a2f7fa4749d6c73db3f445e3c087") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ad0a19b24e62d920b195a9dbee9268f57b97a2f7fa4749d6c73db3f445e3c087";
    }
    const { routes } = t0;
    let t1;
    if ($[1] !== routes) {
        t1 = routes.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center py-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiMap"], {
                    className: "mx-auto text-4xl text-text-light mb-4"
                }, void 0, false, {
                    fileName: "[project]/components/dashboard/RecentActivity.tsx",
                    lineNumber: 24,
                    columnNumber: 66
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-text",
                    children: "No routes pending approval"
                }, void 0, false, {
                    fileName: "[project]/components/dashboard/RecentActivity.tsx",
                    lineNumber: 24,
                    columnNumber: 125
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-text-light",
                    children: "All routes have been processed"
                }, void 0, false, {
                    fileName: "[project]/components/dashboard/RecentActivity.tsx",
                    lineNumber: 24,
                    columnNumber: 180
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/dashboard/RecentActivity.tsx",
            lineNumber: 24,
            columnNumber: 32
        }, this) : routes.map(_RecentActivityRoutesMap);
        $[1] = routes;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: t1
        }, void 0, false, {
            fileName: "[project]/components/dashboard/RecentActivity.tsx",
            lineNumber: 32,
            columnNumber: 10
        }, this);
        $[3] = t1;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    return t2;
}
_c = RecentActivity;
function _RecentActivityRoutesMap(route) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "border border-border rounded-lg p-4 hover:shadow-sm transition-shadow",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start justify-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-3 mb-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-semibold text-text",
                                    children: route.name
                                }, void 0, false, {
                                    fileName: "[project]/components/dashboard/RecentActivity.tsx",
                                    lineNumber: 41,
                                    columnNumber: 236
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `text-xs px-2 py-1 rounded-full ${route.approved ? "bg-success/10 text-success" : "bg-yellow-100 text-yellow-800"}`,
                                    children: route.approved ? "Approved" : "Pending"
                                }, void 0, false, {
                                    fileName: "[project]/components/dashboard/RecentActivity.tsx",
                                    lineNumber: 41,
                                    columnNumber: 293
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/dashboard/RecentActivity.tsx",
                            lineNumber: 41,
                            columnNumber: 186
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-text-light text-sm mb-3 line-clamp-2",
                            children: route.description
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/RecentActivity.tsx",
                            lineNumber: 41,
                            columnNumber: 481
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between text-sm text-text-light",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center space-x-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiClock"], {
                                                    className: "mr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/dashboard/RecentActivity.tsx",
                                                    lineNumber: 41,
                                                    columnNumber: 716
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        route.travel_time_minutes,
                                                        " mins"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/dashboard/RecentActivity.tsx",
                                                    lineNumber: 41,
                                                    columnNumber: 744
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/dashboard/RecentActivity.tsx",
                                            lineNumber: 41,
                                            columnNumber: 681
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiUser"], {
                                                    className: "mr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/dashboard/RecentActivity.tsx",
                                                    lineNumber: 41,
                                                    columnNumber: 830
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: route.vehicle_type
                                                }, void 0, false, {
                                                    fileName: "[project]/components/dashboard/RecentActivity.tsx",
                                                    lineNumber: 41,
                                                    columnNumber: 857
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/dashboard/RecentActivity.tsx",
                                            lineNumber: 41,
                                            columnNumber: 795
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/dashboard/RecentActivity.tsx",
                                    lineNumber: 41,
                                    columnNumber: 636
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/dashboard/routes",
                                    className: "text-primary hover:text-primary-dark text-sm font-medium",
                                    children: "View Details →"
                                }, void 0, false, {
                                    fileName: "[project]/components/dashboard/RecentActivity.tsx",
                                    lineNumber: 41,
                                    columnNumber: 902
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/dashboard/RecentActivity.tsx",
                            lineNumber: 41,
                            columnNumber: 561
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/dashboard/RecentActivity.tsx",
                    lineNumber: 41,
                    columnNumber: 162
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center space-x-2 ml-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "p-2 text-success hover:bg-success/10 rounded-lg",
                            title: "Approve",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiCheckCircle"], {}, void 0, false, {
                                fileName: "[project]/components/dashboard/RecentActivity.tsx",
                                lineNumber: 41,
                                columnNumber: 1169
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/RecentActivity.tsx",
                            lineNumber: 41,
                            columnNumber: 1085
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "p-2 text-error hover:bg-error/10 rounded-lg",
                            title: "Reject",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiXCircle"], {}, void 0, false, {
                                fileName: "[project]/components/dashboard/RecentActivity.tsx",
                                lineNumber: 41,
                                columnNumber: 1274
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/RecentActivity.tsx",
                            lineNumber: 41,
                            columnNumber: 1195
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/dashboard/RecentActivity.tsx",
                    lineNumber: 41,
                    columnNumber: 1035
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/dashboard/RecentActivity.tsx",
            lineNumber: 41,
            columnNumber: 112
        }, this)
    }, route.id, false, {
        fileName: "[project]/components/dashboard/RecentActivity.tsx",
        lineNumber: 41,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "RecentActivity");
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
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/dashboard/page.tsx
__turbopack_context__.s([
    "default",
    ()=>DashboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useDashboardStats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useDashboardStats.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useRoutes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useRoutes.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$StatsCards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard/StatsCards.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$RecentActivity$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard/RecentActivity.tsx [app-client] (ecmascript)");
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
function DashboardPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(56);
    if ($[0] !== "24b3301f68fe2096d504748e041d051813747d20d166ea5b50853bf537d9dedd") {
        for(let $i = 0; $i < 56; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "24b3301f68fe2096d504748e041d051813747d20d166ea5b50853bf537d9dedd";
    }
    const { stats, loading: statsLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useDashboardStats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDashboardStats"])();
    const { routes, loading: routesLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useRoutes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRoutes"])();
    let T0;
    let pendingRoutes;
    let t0;
    let t1;
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    let t7;
    let t8;
    if ($[1] !== routes || $[2] !== routesLoading || $[3] !== stats || $[4] !== statsLoading) {
        t8 = Symbol.for("react.early_return_sentinel");
        bb0: {
            pendingRoutes = routes.filter(_DashboardPageRoutesFilter);
            if (statsLoading || routesLoading) {
                let t9;
                if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
                    t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$Loader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Loader"], {
                        message: "Loading dashboard..."
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 44,
                        columnNumber: 16
                    }, this);
                    $[16] = t9;
                } else {
                    t9 = $[16];
                }
                t8 = t9;
                break bb0;
            }
            t5 = "space-y-6";
            if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
                t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl font-bold text-text",
                            children: "Dashboard Overview"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 54,
                            columnNumber: 19
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-text-light",
                            children: "Welcome to Ghana Trotro Transit Admin"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 54,
                            columnNumber: 87
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 54,
                    columnNumber: 14
                }, this);
                $[17] = t6;
            } else {
                t6 = $[17];
            }
            if ($[18] !== stats) {
                t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$StatsCards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatsCards"], {
                    stats: stats
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 60,
                    columnNumber: 14
                }, this);
                $[18] = stats;
                $[19] = t7;
            } else {
                t7 = $[19];
            }
            t3 = "grid grid-cols-1 lg:grid-cols-2 gap-6";
            let t9;
            if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
                t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-xl font-semibold text-text mb-4",
                    children: "Recent Users Activity"
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 69,
                    columnNumber: 14
                }, this);
                $[20] = t9;
            } else {
                t9 = $[20];
            }
            let t10;
            if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
                t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-text-light",
                    children: "Active users today"
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 76,
                    columnNumber: 15
                }, this);
                $[21] = t10;
            } else {
                t10 = $[21];
            }
            let t11;
            if ($[22] !== stats.activeUsers) {
                t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-3 bg-blue-50 rounded-lg",
                    children: [
                        t10,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-2xl font-bold text-text",
                            children: stats.activeUsers
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 83,
                            columnNumber: 63
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 83,
                    columnNumber: 15
                }, this);
                $[22] = stats.activeUsers;
                $[23] = t11;
            } else {
                t11 = $[23];
            }
            let t12;
            if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
                t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-text-light",
                    children: "Searches today"
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 91,
                    columnNumber: 15
                }, this);
                $[24] = t12;
            } else {
                t12 = $[24];
            }
            let t13;
            if ($[25] !== stats.todaySearches) {
                t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-3 bg-green-50 rounded-lg",
                    children: [
                        t12,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-2xl font-bold text-text",
                            children: stats.todaySearches
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 98,
                            columnNumber: 64
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 98,
                    columnNumber: 15
                }, this);
                $[25] = stats.todaySearches;
                $[26] = t13;
            } else {
                t13 = $[26];
            }
            let t14;
            if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
                t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-text-light",
                    children: "Notifications sent"
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 106,
                    columnNumber: 15
                }, this);
                $[27] = t14;
            } else {
                t14 = $[27];
            }
            let t15;
            if ($[28] !== stats.notificationsSent) {
                t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-3 bg-purple-50 rounded-lg",
                    children: [
                        t14,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-2xl font-bold text-text",
                            children: stats.notificationsSent
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 113,
                            columnNumber: 65
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 113,
                    columnNumber: 15
                }, this);
                $[28] = stats.notificationsSent;
                $[29] = t15;
            } else {
                t15 = $[29];
            }
            if ($[30] !== t11 || $[31] !== t13 || $[32] !== t15) {
                t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-background rounded-lg shadow p-6",
                    children: [
                        t9,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: [
                                t11,
                                t13,
                                t15
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 120,
                            columnNumber: 71
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 120,
                    columnNumber: 14
                }, this);
                $[30] = t11;
                $[31] = t13;
                $[32] = t15;
                $[33] = t4;
            } else {
                t4 = $[33];
            }
            t1 = "bg-background rounded-lg shadow p-6";
            if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
                t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-xl font-semibold text-text mb-4",
                    children: "Routes Pending Approval"
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 130,
                    columnNumber: 14
                }, this);
                $[34] = t2;
            } else {
                t2 = $[34];
            }
            T0 = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$RecentActivity$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RecentActivity"];
            t0 = pendingRoutes.slice(0, 5);
        }
        $[1] = routes;
        $[2] = routesLoading;
        $[3] = stats;
        $[4] = statsLoading;
        $[5] = T0;
        $[6] = pendingRoutes;
        $[7] = t0;
        $[8] = t1;
        $[9] = t2;
        $[10] = t3;
        $[11] = t4;
        $[12] = t5;
        $[13] = t6;
        $[14] = t7;
        $[15] = t8;
    } else {
        T0 = $[5];
        pendingRoutes = $[6];
        t0 = $[7];
        t1 = $[8];
        t2 = $[9];
        t3 = $[10];
        t4 = $[11];
        t5 = $[12];
        t6 = $[13];
        t7 = $[14];
        t8 = $[15];
    }
    if (t8 !== Symbol.for("react.early_return_sentinel")) {
        return t8;
    }
    let t9;
    if ($[35] !== T0 || $[36] !== t0) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T0, {
            routes: t0
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 171,
            columnNumber: 10
        }, this);
        $[35] = T0;
        $[36] = t0;
        $[37] = t9;
    } else {
        t9 = $[37];
    }
    let t10;
    if ($[38] !== pendingRoutes.length) {
        t10 = pendingRoutes.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-text-light text-center py-4",
            children: "No routes pending approval"
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 180,
            columnNumber: 41
        }, this);
        $[38] = pendingRoutes.length;
        $[39] = t10;
    } else {
        t10 = $[39];
    }
    let t11;
    if ($[40] !== t1 || $[41] !== t10 || $[42] !== t2 || $[43] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1,
            children: [
                t2,
                t9,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 188,
            columnNumber: 11
        }, this);
        $[40] = t1;
        $[41] = t10;
        $[42] = t2;
        $[43] = t9;
        $[44] = t11;
    } else {
        t11 = $[44];
    }
    let t12;
    if ($[45] !== t11 || $[46] !== t3 || $[47] !== t4) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t3,
            children: [
                t4,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 199,
            columnNumber: 11
        }, this);
        $[45] = t11;
        $[46] = t3;
        $[47] = t4;
        $[48] = t12;
    } else {
        t12 = $[48];
    }
    let t13;
    if ($[49] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-xl font-semibold text-text mb-4",
            children: "Quick Actions"
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 209,
            columnNumber: 11
        }, this);
        $[49] = t13;
    } else {
        t13 = $[49];
    }
    let t14;
    if ($[50] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-background rounded-lg shadow p-6",
            children: [
                t13,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 md:grid-cols-4 gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "p-4 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors",
                            children: "Send Notification"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 216,
                            columnNumber: 124
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "p-4 bg-success text-white rounded-lg hover:bg-success/90 transition-colors",
                            children: "Add New Stop"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 216,
                            columnNumber: 247
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors",
                            children: "View Reports"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 216,
                            columnNumber: 363
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "p-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors",
                            children: "System Settings"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 216,
                            columnNumber: 478
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 216,
                    columnNumber: 69
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 216,
            columnNumber: 11
        }, this);
        $[50] = t14;
    } else {
        t14 = $[50];
    }
    let t15;
    if ($[51] !== t12 || $[52] !== t5 || $[53] !== t6 || $[54] !== t7) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t5,
            children: [
                t6,
                t7,
                t12,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 223,
            columnNumber: 11
        }, this);
        $[51] = t12;
        $[52] = t5;
        $[53] = t6;
        $[54] = t7;
        $[55] = t15;
    } else {
        t15 = $[55];
    }
    return t15;
}
_s(DashboardPage, "lwF5oveL9aKEbYeNyq2B0F5KpL8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useDashboardStats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDashboardStats"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useRoutes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRoutes"]
    ];
});
_c = DashboardPage;
function _DashboardPageRoutesFilter(route) {
    return !route.approved;
}
var _c;
__turbopack_context__.k.register(_c, "DashboardPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_49cd09a3._.js.map