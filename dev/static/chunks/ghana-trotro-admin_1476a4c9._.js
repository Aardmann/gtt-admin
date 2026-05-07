(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/ghana-trotro-admin/hooks/useDashboardStats.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// hooks/useDashboardStats.ts
__turbopack_context__.s([
    "useDashboardStats",
    ()=>useDashboardStats
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ghana-trotro-admin/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ghana-trotro-admin/lib/supabase.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
function useDashboardStats() {
    _s();
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        totalUsers: 0,
        totalRoutes: 0,
        totalStops: 0,
        activeUsers: 0,
        pendingRoutes: 0,
        todaySearches: 0,
        notificationsSent: 0,
        revenueToday: 0
    });
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const fetchStats = async ()=>{
        try {
            setLoading(true);
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            const todayISO = today.toISOString();
            // Fetch all stats in parallel
            const [usersRes, routesRes, stopsRes, activeUsersRes, pendingRoutesRes, todaySearchesRes, notificationsRes, revenueRes] = await Promise.all([
                __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('users').select('*', {
                    count: 'exact',
                    head: true
                }),
                __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('routes').select('*', {
                    count: 'exact',
                    head: true
                }),
                __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('stops').select('*', {
                    count: 'exact',
                    head: true
                }),
                __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('profiles').select('*', {
                    count: 'exact',
                    head: true
                }).gte('last_seen_at', new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()),
                __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('routes').select('*', {
                    count: 'exact',
                    head: true
                }).eq('approved', false),
                __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('search_history').select('*', {
                    count: 'exact',
                    head: true
                }).gte('searched_at', todayISO),
                __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('notifications').select('sent_count'),
                __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('route_creation_payments').select('amount').eq('payment_status', 'completed').gte('created_at', todayISO)
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
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
"[project]/ghana-trotro-admin/hooks/useRoutes.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// hooks/useRoutes.ts - Add missing functions
__turbopack_context__.s([
    "useRoutes",
    ()=>useRoutes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ghana-trotro-admin/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ghana-trotro-admin/lib/supabase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ghana-trotro-admin/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
function useRoutes() {
    _s();
    const [routes, setRoutes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const fetchRoutes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useRoutes.useCallback[fetchRoutes]": async ()=>{
            try {
                setLoading(true);
                setError(null);
                const { data, error: fetchError } = await __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('routes').select('*').order('created_at', {
                    ascending: false
                });
                if (fetchError) throw fetchError;
                setRoutes(data || []);
            } catch (err) {
                console.error('Failed to fetch routes:', err);
                setError(err.message);
                __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Failed to load routes');
            } finally{
                setLoading(false);
            }
        }
    }["useRoutes.useCallback[fetchRoutes]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useRoutes.useEffect": ()=>{
            fetchRoutes();
        }
    }["useRoutes.useEffect"], [
        fetchRoutes
    ]);
    const approveRoute = async (routeId)=>{
        try {
            const { error: error_0 } = await __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('routes').update({
                approved: true,
                rejection_reason: null,
                description: null,
                notes: null,
                updated_at: new Date().toISOString()
            }).eq('id', routeId);
            if (error_0) throw error_0;
            __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('Route approved successfully');
            fetchRoutes();
        } catch (err_0) {
            __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Failed to approve route: ' + err_0.message);
        }
    };
    const rejectRoute = async (routeId_0, reason)=>{
        try {
            const { error: error_1 } = await __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('routes').update({
                approved: false,
                rejection_reason: reason,
                updated_at: new Date().toISOString()
            }).eq('id', routeId_0);
            if (error_1) throw error_1;
            __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('Route rejected successfully');
            fetchRoutes();
        } catch (err_1) {
            __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Failed to reject route: ' + err_1.message);
        }
    };
    const deleteRoute = async (routeId_1)=>{
        if (!confirm('Are you sure you want to delete this route?')) return;
        try {
            const { error: error_2 } = await __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('routes').delete().eq('id', routeId_1);
            if (error_2) throw error_2;
            __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('Route deleted successfully');
            fetchRoutes();
        } catch (err_2) {
            __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Failed to delete route: ' + err_2.message);
        }
    };
    return {
        routes,
        loading,
        error,
        refresh: fetchRoutes,
        approveRoute,
        rejectRoute,
        deleteRoute
    };
}
_s(useRoutes, "ABp22DRkPwoAmQiobyrtTcXWYe4=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/ghana-trotro-admin/hooks/useUsers.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// hooks/useUsers.ts - Fixed version
__turbopack_context__.s([
    "useUsers",
    ()=>useUsers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ghana-trotro-admin/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ghana-trotro-admin/lib/supabase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ghana-trotro-admin/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
function useUsers() {
    _s();
    const [users, setUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const fetchUsers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useUsers.useCallback[fetchUsers]": async ()=>{
            try {
                setLoading(true);
                setError(null);
                console.log('Fetching users from database...');
                // First try to fetch with joins
                const { data, error: fetchError } = await __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('users').select(`
          *,
          profile:profiles(*),
          search_history:search_history(*),
          location_history:location_history(*)
        `).order('created_at', {
                    ascending: false
                });
                if (fetchError) {
                    console.warn('Join fetch failed, trying simple fetch:', fetchError.message);
                    // Try simple fetch without joins
                    const { data: simpleData, error: simpleError } = await __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('users').select('*').order('created_at', {
                        ascending: false
                    });
                    if (simpleError) {
                        // Check if table exists
                        if (simpleError.code === 'PGRST116') {
                            setError('Users table not found. Please run database setup.');
                            __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Database tables not set up. Please run setup.');
                            setUsers([]);
                            return;
                        }
                        throw simpleError;
                    }
                    // Try to fetch profiles separately
                    const { data: profilesData } = await __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('profiles').select('*');
                    const profilesMap = profilesData?.reduce({
                        "useUsers.useCallback[fetchUsers]": (acc, profile)=>{
                            acc[profile.id] = profile;
                            return acc;
                        }
                    }["useUsers.useCallback[fetchUsers]"], {}) || {};
                    // Map to User type
                    const usersWithDefaults = (simpleData || []).map({
                        "useUsers.useCallback[fetchUsers].usersWithDefaults": (user)=>({
                                ...user,
                                profile: profilesMap[user.id] || undefined,
                                search_history: [],
                                location_history: []
                            })
                    }["useUsers.useCallback[fetchUsers].usersWithDefaults"]);
                    setUsers(usersWithDefaults);
                    return;
                }
                console.log('Successfully fetched users:', data?.length || 0);
                setUsers(data || []);
            } catch (err) {
                console.error('Failed to fetch users:', err);
                setError(err.message);
                // Don't show toast for table not found errors
                if (!err.message?.includes('relation') && !err.message?.includes('does not exist') && !err.message?.includes('permission denied')) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Failed to load users');
                }
            } finally{
                setLoading(false);
            }
        }
    }["useUsers.useCallback[fetchUsers]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useUsers.useEffect": ()=>{
            fetchUsers();
            // Setup real-time subscription
            const subscription = __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].channel('users-channel').on('postgres_changes', {
                event: '*',
                schema: 'public',
                table: 'users'
            }, {
                "useUsers.useEffect.subscription": ()=>{
                    console.log('Users table changed, refreshing...');
                    fetchUsers();
                }
            }["useUsers.useEffect.subscription"]).subscribe({
                "useUsers.useEffect.subscription": (status)=>{
                    console.log('Subscription status:', status);
                }
            }["useUsers.useEffect.subscription"]);
            return ({
                "useUsers.useEffect": ()=>{
                    subscription.unsubscribe();
                }
            })["useUsers.useEffect"];
        }
    }["useUsers.useEffect"], [
        fetchUsers
    ]);
    const banUser = async (userId)=>{
        try {
            const { error: error_0 } = await __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('profiles').update({
                role: 'banned'
            }).eq('id', userId);
            if (error_0) {
                // Try to create a profile if it doesn't exist
                const { error: createError } = await __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('profiles').insert({
                    id: userId,
                    role: 'banned'
                });
                if (createError) throw createError;
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('User banned successfully');
            fetchUsers();
        } catch (err_0) {
            console.error('Ban error:', err_0);
            __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Failed to ban user: ' + err_0.message);
        }
    };
    const deleteUser = async (userId_0)=>{
        if (!confirm('Are you sure you want to delete this user? This action cannot be undone.')) {
            return;
        }
        try {
            // Delete user data from all related tables
            const tables = [
                'search_history',
                'location_history',
                'profiles',
                'users'
            ];
            for (const table of tables){
                try {
                    await __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from(table).delete().eq('user_id', userId_0);
                //.catch(() => {}) // Ignore errors if table doesn't exist
                } catch (err_2) {
                    console.warn(`Error deleting from ${table}:`, err_2);
                }
            }
            // Try to delete from users table
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('users').delete().eq('id', userId_0);
            } catch (err_3) {
                console.warn('Error deleting from users table:', err_3);
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('User data removed successfully');
            fetchUsers();
        } catch (err_1) {
            console.error('Delete error:', err_1);
            __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Failed to delete user: ' + err_1.message);
        }
    };
    return {
        users,
        loading,
        error,
        refresh: fetchUsers,
        banUser,
        deleteUser
    };
}
_s(useUsers, "8grI4Llost9qowyDywFp11Os9y0=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/ghana-trotro-admin/components/dashboard/StatsCards.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/dashboard/StatsCards.tsx
__turbopack_context__.s([
    "StatsCards",
    ()=>StatsCards
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ghana-trotro-admin/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ghana-trotro-admin/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ghana-trotro-admin/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
'use client';
;
;
;
function Card(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(21);
    if ($[0] !== "9042272d07225a5153a8d58d66a7ec0f0ed95d3bc66ba7d577f558ec3a3aa934") {
        for(let $i = 0; $i < 21; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9042272d07225a5153a8d58d66a7ec0f0ed95d3bc66ba7d577f558ec3a3aa934";
    }
    const { label, value, sub, subColor: t1, icon, iconBg, iconColor } = t0;
    const subColor = t1 === undefined ? "text-gray-400" : t1;
    const t2 = `p-2.5 rounded-xl ${iconBg}`;
    const t3 = `${iconColor} flex items-center text-lg`;
    let t4;
    if ($[1] !== icon || $[2] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t3,
            children: icon
        }, void 0, false, {
            fileName: "[project]/ghana-trotro-admin/components/dashboard/StatsCards.tsx",
            lineNumber: 41,
            columnNumber: 10
        }, this);
        $[1] = icon;
        $[2] = t3;
        $[3] = t4;
    } else {
        t4 = $[3];
    }
    let t5;
    if ($[4] !== t2 || $[5] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start justify-between",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: t2,
                children: t4
            }, void 0, false, {
                fileName: "[project]/ghana-trotro-admin/components/dashboard/StatsCards.tsx",
                lineNumber: 50,
                columnNumber: 60
            }, this)
        }, void 0, false, {
            fileName: "[project]/ghana-trotro-admin/components/dashboard/StatsCards.tsx",
            lineNumber: 50,
            columnNumber: 10
        }, this);
        $[4] = t2;
        $[5] = t4;
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] !== value) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-2xl font-bold text-gray-900 leading-none",
            children: value
        }, void 0, false, {
            fileName: "[project]/ghana-trotro-admin/components/dashboard/StatsCards.tsx",
            lineNumber: 59,
            columnNumber: 10
        }, this);
        $[7] = value;
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    let t7;
    if ($[9] !== label) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs font-semibold text-gray-400 uppercase tracking-wide mt-1",
            children: label
        }, void 0, false, {
            fileName: "[project]/ghana-trotro-admin/components/dashboard/StatsCards.tsx",
            lineNumber: 67,
            columnNumber: 10
        }, this);
        $[9] = label;
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    let t8;
    if ($[11] !== t6 || $[12] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/ghana-trotro-admin/components/dashboard/StatsCards.tsx",
            lineNumber: 75,
            columnNumber: 10
        }, this);
        $[11] = t6;
        $[12] = t7;
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    const t9 = `text-xs ${subColor} border-t border-gray-50 pt-2`;
    let t10;
    if ($[14] !== sub || $[15] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: t9,
            children: sub
        }, void 0, false, {
            fileName: "[project]/ghana-trotro-admin/components/dashboard/StatsCards.tsx",
            lineNumber: 85,
            columnNumber: 11
        }, this);
        $[14] = sub;
        $[15] = t9;
        $[16] = t10;
    } else {
        t10 = $[16];
    }
    let t11;
    if ($[17] !== t10 || $[18] !== t5 || $[19] !== t8) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col gap-4 hover:shadow-md transition-shadow duration-200",
            children: [
                t5,
                t8,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/ghana-trotro-admin/components/dashboard/StatsCards.tsx",
            lineNumber: 94,
            columnNumber: 11
        }, this);
        $[17] = t10;
        $[18] = t5;
        $[19] = t8;
        $[20] = t11;
    } else {
        t11 = $[20];
    }
    return t11;
}
_c = Card;
function StatsCards(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(29);
    if ($[0] !== "9042272d07225a5153a8d58d66a7ec0f0ed95d3bc66ba7d577f558ec3a3aa934") {
        for(let $i = 0; $i < 29; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9042272d07225a5153a8d58d66a7ec0f0ed95d3bc66ba7d577f558ec3a3aa934";
    }
    const { stats } = t0;
    let t1;
    if ($[1] !== stats.totalUsers) {
        t1 = stats.totalUsers.toLocaleString();
        $[1] = stats.totalUsers;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const t2 = `${stats.activeUsers} active today`;
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiUsers"], {}, void 0, false, {
            fileName: "[project]/ghana-trotro-admin/components/dashboard/StatsCards.tsx",
            lineNumber: 126,
            columnNumber: 10
        }, this);
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    let t4;
    if ($[4] !== t1 || $[5] !== t2) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
            label: "Total Users",
            value: t1,
            sub: t2,
            subColor: "text-emerald-500",
            icon: t3,
            iconBg: "bg-blue-50",
            iconColor: "text-blue-600"
        }, void 0, false, {
            fileName: "[project]/ghana-trotro-admin/components/dashboard/StatsCards.tsx",
            lineNumber: 133,
            columnNumber: 10
        }, this);
        $[4] = t1;
        $[5] = t2;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== stats.totalRoutes) {
        t5 = stats.totalRoutes.toLocaleString();
        $[7] = stats.totalRoutes;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    const t6 = `${stats.pendingRoutes} pending approval`;
    const t7 = stats.pendingRoutes > 0 ? "text-amber-500" : "text-gray-400";
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiMap"], {}, void 0, false, {
            fileName: "[project]/ghana-trotro-admin/components/dashboard/StatsCards.tsx",
            lineNumber: 152,
            columnNumber: 10
        }, this);
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t9;
    if ($[10] !== t5 || $[11] !== t6 || $[12] !== t7) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
            label: "Total Routes",
            value: t5,
            sub: t6,
            subColor: t7,
            icon: t8,
            iconBg: "bg-violet-50",
            iconColor: "text-violet-600"
        }, void 0, false, {
            fileName: "[project]/ghana-trotro-admin/components/dashboard/StatsCards.tsx",
            lineNumber: 159,
            columnNumber: 10
        }, this);
        $[10] = t5;
        $[11] = t6;
        $[12] = t7;
        $[13] = t9;
    } else {
        t9 = $[13];
    }
    let t10;
    if ($[14] !== stats.todaySearches) {
        t10 = stats.todaySearches.toLocaleString();
        $[14] = stats.todaySearches;
        $[15] = t10;
    } else {
        t10 = $[15];
    }
    let t11;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiSearch"], {}, void 0, false, {
            fileName: "[project]/ghana-trotro-admin/components/dashboard/StatsCards.tsx",
            lineNumber: 177,
            columnNumber: 11
        }, this);
        $[16] = t11;
    } else {
        t11 = $[16];
    }
    let t12;
    if ($[17] !== t10) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
            label: "Today's Searches",
            value: t10,
            sub: "Route searches today",
            icon: t11,
            iconBg: "bg-sky-50",
            iconColor: "text-sky-600"
        }, void 0, false, {
            fileName: "[project]/ghana-trotro-admin/components/dashboard/StatsCards.tsx",
            lineNumber: 184,
            columnNumber: 11
        }, this);
        $[17] = t10;
        $[18] = t12;
    } else {
        t12 = $[18];
    }
    let t13;
    if ($[19] !== stats.revenueToday) {
        t13 = stats.revenueToday.toFixed(2);
        $[19] = stats.revenueToday;
        $[20] = t13;
    } else {
        t13 = $[20];
    }
    const t14 = `GH₵${t13}`;
    let t15;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiTrendingUp"], {}, void 0, false, {
            fileName: "[project]/ghana-trotro-admin/components/dashboard/StatsCards.tsx",
            lineNumber: 201,
            columnNumber: 11
        }, this);
        $[21] = t15;
    } else {
        t15 = $[21];
    }
    let t16;
    if ($[22] !== t14) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
            label: "Revenue Today",
            value: t14,
            sub: "Route creation payments",
            subColor: "text-teal-500",
            icon: t15,
            iconBg: "bg-teal-50",
            iconColor: "text-teal-600"
        }, void 0, false, {
            fileName: "[project]/ghana-trotro-admin/components/dashboard/StatsCards.tsx",
            lineNumber: 208,
            columnNumber: 11
        }, this);
        $[22] = t14;
        $[23] = t16;
    } else {
        t16 = $[23];
    }
    let t17;
    if ($[24] !== t12 || $[25] !== t16 || $[26] !== t4 || $[27] !== t9) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 lg:grid-cols-4 gap-4",
            children: [
                t4,
                t9,
                t12,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/ghana-trotro-admin/components/dashboard/StatsCards.tsx",
            lineNumber: 216,
            columnNumber: 11
        }, this);
        $[24] = t12;
        $[25] = t16;
        $[26] = t4;
        $[27] = t9;
        $[28] = t17;
    } else {
        t17 = $[28];
    }
    return t17;
}
_c1 = StatsCards;
var _c, _c1;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "StatsCards");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/ghana-trotro-admin/components/dashboard/RecentActivity.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/dashboard/RecentActivity.tsx
__turbopack_context__.s([
    "RecentActivity",
    ()=>RecentActivity
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ghana-trotro-admin/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ghana-trotro-admin/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ghana-trotro-admin/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ghana-trotro-admin/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
'use client';
;
;
;
;
function getRouteStatus(route) {
    if (route.rejection_reason) {
        return {
            label: 'Rejected',
            className: 'bg-red-100 text-red-700'
        };
    }
    if (route.approved) {
        return {
            label: 'Approved',
            className: 'bg-emerald-100 text-emerald-700'
        };
    }
    return {
        label: 'Pending',
        className: 'bg-amber-100 text-amber-700'
    };
}
function RecentActivity(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "f493c53ec5abfc87174548b7cc192cd7900e608be1648b0e9b3881e02929f442") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f493c53ec5abfc87174548b7cc192cd7900e608be1648b0e9b3881e02929f442";
    }
    const { routes } = t0;
    if (routes.length === 0) {
        let t1;
        if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
            t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center justify-center py-8 text-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3 bg-gray-50 rounded-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiMap"], {
                            className: "text-gray-300 text-2xl"
                        }, void 0, false, {
                            fileName: "[project]/ghana-trotro-admin/components/dashboard/RecentActivity.tsx",
                            lineNumber: 46,
                            columnNumber: 139
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/ghana-trotro-admin/components/dashboard/RecentActivity.tsx",
                        lineNumber: 46,
                        columnNumber: 94
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-medium text-gray-500",
                        children: "No pending routes"
                    }, void 0, false, {
                        fileName: "[project]/ghana-trotro-admin/components/dashboard/RecentActivity.tsx",
                        lineNumber: 46,
                        columnNumber: 189
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-gray-400",
                        children: "All routes have been processed"
                    }, void 0, false, {
                        fileName: "[project]/ghana-trotro-admin/components/dashboard/RecentActivity.tsx",
                        lineNumber: 46,
                        columnNumber: 259
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/ghana-trotro-admin/components/dashboard/RecentActivity.tsx",
                lineNumber: 46,
                columnNumber: 12
            }, this);
            $[1] = t1;
        } else {
            t1 = $[1];
        }
        return t1;
    }
    let t1;
    if ($[2] !== routes) {
        t1 = routes.map(_RecentActivityRoutesMap);
        $[2] = routes;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    let t2;
    if ($[4] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3",
            children: t1
        }, void 0, false, {
            fileName: "[project]/ghana-trotro-admin/components/dashboard/RecentActivity.tsx",
            lineNumber: 63,
            columnNumber: 10
        }, this);
        $[4] = t1;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    return t2;
}
_c = RecentActivity;
function _RecentActivityRoutesMap(route) {
    const status = getRouteStatus(route);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-2 bg-white rounded-lg shadow-sm shrink-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiMap"], {
                    className: "text-violet-500 text-sm"
                }, void 0, false, {
                    fileName: "[project]/ghana-trotro-admin/components/dashboard/RecentActivity.tsx",
                    lineNumber: 73,
                    columnNumber: 188
                }, this)
            }, void 0, false, {
                fileName: "[project]/ghana-trotro-admin/components/dashboard/RecentActivity.tsx",
                lineNumber: 73,
                columnNumber: 128
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 min-w-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 flex-wrap",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-semibold text-gray-800 truncate",
                                children: route.name
                            }, void 0, false, {
                                fileName: "[project]/ghana-trotro-admin/components/dashboard/RecentActivity.tsx",
                                lineNumber: 73,
                                columnNumber: 322
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `text-xs font-medium px-2 py-0.5 rounded-full shrink-0 ${status.className}`,
                                children: status.label
                            }, void 0, false, {
                                fileName: "[project]/ghana-trotro-admin/components/dashboard/RecentActivity.tsx",
                                lineNumber: 73,
                                columnNumber: 398
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/ghana-trotro-admin/components/dashboard/RecentActivity.tsx",
                        lineNumber: 73,
                        columnNumber: 271
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 mt-0.5 text-xs text-gray-400",
                        children: [
                            route.travel_time_minutes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiClock"], {
                                        size: 10
                                    }, void 0, false, {
                                        fileName: "[project]/ghana-trotro-admin/components/dashboard/RecentActivity.tsx",
                                        lineNumber: 73,
                                        columnNumber: 661
                                    }, this),
                                    " ",
                                    route.travel_time_minutes,
                                    " min"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/ghana-trotro-admin/components/dashboard/RecentActivity.tsx",
                                lineNumber: 73,
                                columnNumber: 619
                            }, this),
                            route.vehicle_type && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiTruck"], {
                                        size: 10
                                    }, void 0, false, {
                                        fileName: "[project]/ghana-trotro-admin/components/dashboard/RecentActivity.tsx",
                                        lineNumber: 73,
                                        columnNumber: 787
                                    }, this),
                                    " ",
                                    route.vehicle_type
                                ]
                            }, void 0, true, {
                                fileName: "[project]/ghana-trotro-admin/components/dashboard/RecentActivity.tsx",
                                lineNumber: 73,
                                columnNumber: 745
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/ghana-trotro-admin/components/dashboard/RecentActivity.tsx",
                        lineNumber: 73,
                        columnNumber: 519
                    }, this),
                    route.rejection_reason && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-red-500 mt-0.5 truncate",
                        children: [
                            "Reason: ",
                            route.rejection_reason
                        ]
                    }, void 0, true, {
                        fileName: "[project]/ghana-trotro-admin/components/dashboard/RecentActivity.tsx",
                        lineNumber: 73,
                        columnNumber: 870
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/ghana-trotro-admin/components/dashboard/RecentActivity.tsx",
                lineNumber: 73,
                columnNumber: 239
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/dashboard/routes",
                className: "shrink-0 text-gray-300 hover:text-violet-500 transition-colors",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiChevronRight"], {
                    size: 16
                }, void 0, false, {
                    fileName: "[project]/ghana-trotro-admin/components/dashboard/RecentActivity.tsx",
                    lineNumber: 73,
                    columnNumber: 1071
                }, this)
            }, void 0, false, {
                fileName: "[project]/ghana-trotro-admin/components/dashboard/RecentActivity.tsx",
                lineNumber: 73,
                columnNumber: 965
            }, this)
        ]
    }, route.id, true, {
        fileName: "[project]/ghana-trotro-admin/components/dashboard/RecentActivity.tsx",
        lineNumber: 73,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "RecentActivity");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/ghana-trotro-admin/components/common/Loader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Loader",
    ()=>Loader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ghana-trotro-admin/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ghana-trotro-admin/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
'use client';
;
;
function Loader(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
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
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "animate-spin rounded-full h-12 w-12 border-b-2 border-primary"
        }, void 0, false, {
            fileName: "[project]/ghana-trotro-admin/components/common/Loader.tsx",
            lineNumber: 21,
            columnNumber: 10
        }, this);
        $[1] = t2;
    } else {
        t2 = $[1];
    }
    let t3;
    if ($[2] !== message) {
        t3 = message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-4 text-text-light",
            children: message
        }, void 0, false, {
            fileName: "[project]/ghana-trotro-admin/components/common/Loader.tsx",
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
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center justify-center py-12",
            children: [
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/ghana-trotro-admin/components/common/Loader.tsx",
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
"[project]/ghana-trotro-admin/app/dashboard/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/dashboard/page.tsx
__turbopack_context__.s([
    "default",
    ()=>DashboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ghana-trotro-admin/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ghana-trotro-admin/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$hooks$2f$useDashboardStats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ghana-trotro-admin/hooks/useDashboardStats.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$hooks$2f$useRoutes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ghana-trotro-admin/hooks/useRoutes.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$hooks$2f$useUsers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ghana-trotro-admin/hooks/useUsers.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$components$2f$dashboard$2f$StatsCards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ghana-trotro-admin/components/dashboard/StatsCards.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$components$2f$dashboard$2f$RecentActivity$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ghana-trotro-admin/components/dashboard/RecentActivity.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$components$2f$common$2f$Loader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ghana-trotro-admin/components/common/Loader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ghana-trotro-admin/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ghana-trotro-admin/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
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
;
;
// ─── Role badge ───────────────────────────────────────────────────────────────
function RoleBadge(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "d443bc69d78fe5df4a57f624d414ebdd83c8161b5bc5d90fc5e62770b635d52a") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d443bc69d78fe5df4a57f624d414ebdd83c8161b5bc5d90fc5e62770b635d52a";
    }
    const { role } = t0;
    const resolved = role || "user";
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            admin: "bg-violet-100 text-violet-700",
            banned: "bg-red-100 text-red-600",
            user: "bg-emerald-100 text-emerald-700"
        };
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const styles = t1;
    const t2 = `text-xs font-semibold px-2 py-0.5 rounded-full ${styles[resolved] ?? styles.user}`;
    let t3;
    if ($[2] !== resolved || $[3] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t2,
            children: resolved
        }, void 0, false, {
            fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
            lineNumber: 43,
            columnNumber: 10
        }, this);
        $[2] = resolved;
        $[3] = t2;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    return t3;
}
_c = RoleBadge;
// ─── Section wrapper ──────────────────────────────────────────────────────────
function Section(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(18);
    if ($[0] !== "d443bc69d78fe5df4a57f624d414ebdd83c8161b5bc5d90fc5e62770b635d52a") {
        for(let $i = 0; $i < 18; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d443bc69d78fe5df4a57f624d414ebdd83c8161b5bc5d90fc5e62770b635d52a";
    }
    const { title, icon, action, children } = t0;
    let t1;
    if ($[1] !== icon) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-violet-500",
            children: icon
        }, void 0, false, {
            fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
            lineNumber: 71,
            columnNumber: 10
        }, this);
        $[1] = icon;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== title) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-sm font-semibold text-gray-700 uppercase tracking-wide",
            children: title
        }, void 0, false, {
            fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
            lineNumber: 79,
            columnNumber: 10
        }, this);
        $[3] = title;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== t1 || $[6] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                t1,
                t2
            ]
        }, void 0, true, {
            fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
            lineNumber: 87,
            columnNumber: 10
        }, this);
        $[5] = t1;
        $[6] = t2;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] !== action) {
        t4 = action && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: action.href,
            className: "text-xs font-medium text-violet-600 hover:text-violet-700 flex items-center gap-0.5",
            children: [
                action.label,
                " ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiChevronRight"], {
                    size: 12
                }, void 0, false, {
                    fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
                    lineNumber: 96,
                    columnNumber: 156
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
            lineNumber: 96,
            columnNumber: 20
        }, this);
        $[8] = action;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    let t5;
    if ($[10] !== t3 || $[11] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between px-5 py-4 border-b border-gray-50",
            children: [
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
            lineNumber: 104,
            columnNumber: 10
        }, this);
        $[10] = t3;
        $[11] = t4;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    let t6;
    if ($[13] !== children) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-5",
            children: children
        }, void 0, false, {
            fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
            lineNumber: 113,
            columnNumber: 10
        }, this);
        $[13] = children;
        $[14] = t6;
    } else {
        t6 = $[14];
    }
    let t7;
    if ($[15] !== t5 || $[16] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden",
            children: [
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
            lineNumber: 121,
            columnNumber: 10
        }, this);
        $[15] = t5;
        $[16] = t6;
        $[17] = t7;
    } else {
        t7 = $[17];
    }
    return t7;
}
_c1 = Section;
// ─── Quick action button ──────────────────────────────────────────────────────
function QuickAction(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "d443bc69d78fe5df4a57f624d414ebdd83c8161b5bc5d90fc5e62770b635d52a") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d443bc69d78fe5df4a57f624d414ebdd83c8161b5bc5d90fc5e62770b635d52a";
    }
    const { label, href, icon, color } = t0;
    const t1 = `flex items-center gap-3 p-4 rounded-xl text-white font-semibold text-sm transition-opacity hover:opacity-90 ${color}`;
    let t2;
    if ($[1] !== icon) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-lg",
            children: icon
        }, void 0, false, {
            fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
            lineNumber: 150,
            columnNumber: 10
        }, this);
        $[1] = icon;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    let t3;
    if ($[3] !== href || $[4] !== label || $[5] !== t1 || $[6] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: href,
            className: t1,
            children: [
                t2,
                label
            ]
        }, void 0, true, {
            fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
            lineNumber: 158,
            columnNumber: 10
        }, this);
        $[3] = href;
        $[4] = label;
        $[5] = t1;
        $[6] = t2;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    return t3;
}
_c2 = QuickAction;
// ─── Inline stat row ──────────────────────────────────────────────────────────
function StatRow(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "d443bc69d78fe5df4a57f624d414ebdd83c8161b5bc5d90fc5e62770b635d52a") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d443bc69d78fe5df4a57f624d414ebdd83c8161b5bc5d90fc5e62770b635d52a";
    }
    const { icon, label, value, bg, iconColor } = t0;
    const t1 = `flex items-center gap-3 p-4 rounded-xl ${bg}`;
    const t2 = `text-xl ${iconColor}`;
    let t3;
    if ($[1] !== icon || $[2] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t2,
            children: icon
        }, void 0, false, {
            fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
            lineNumber: 191,
            columnNumber: 10
        }, this);
        $[1] = icon;
        $[2] = t2;
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    let t4;
    if ($[4] !== label) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-gray-500",
            children: label
        }, void 0, false, {
            fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
            lineNumber: 200,
            columnNumber: 10
        }, this);
        $[4] = label;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] !== value) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xl font-bold text-gray-800",
            children: value
        }, void 0, false, {
            fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
            lineNumber: 208,
            columnNumber: 10
        }, this);
        $[6] = value;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] !== t4 || $[9] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
            lineNumber: 216,
            columnNumber: 10
        }, this);
        $[8] = t4;
        $[9] = t5;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] !== t1 || $[12] !== t3 || $[13] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1,
            children: [
                t3,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
            lineNumber: 225,
            columnNumber: 10
        }, this);
        $[11] = t1;
        $[12] = t3;
        $[13] = t6;
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    return t7;
}
_c3 = StatRow;
function DashboardPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(77);
    if ($[0] !== "d443bc69d78fe5df4a57f624d414ebdd83c8161b5bc5d90fc5e62770b635d52a") {
        for(let $i = 0; $i < 77; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d443bc69d78fe5df4a57f624d414ebdd83c8161b5bc5d90fc5e62770b635d52a";
    }
    const { stats, loading: statsLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$hooks$2f$useDashboardStats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDashboardStats"])();
    const { routes, loading: routesLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$hooks$2f$useRoutes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRoutes"])();
    const { users, loading: usersLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$hooks$2f$useUsers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUsers"])();
    let pendingRoutes;
    let rejectedRoutes;
    let t0;
    if ($[1] !== routes) {
        pendingRoutes = routes.filter(_DashboardPageRoutesFilter);
        rejectedRoutes = routes.filter(_DashboardPageRoutesFilter2);
        t0 = [
            ...pendingRoutes,
            ...rejectedRoutes
        ].slice(0, 5);
        $[1] = routes;
        $[2] = pendingRoutes;
        $[3] = rejectedRoutes;
        $[4] = t0;
    } else {
        pendingRoutes = $[2];
        rejectedRoutes = $[3];
        t0 = $[4];
    }
    const routesToShow = t0;
    let T0;
    let t1;
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    let t7;
    let t8;
    let t9;
    if ($[5] !== routesLoading || $[6] !== stats || $[7] !== statsLoading || $[8] !== users || $[9] !== usersLoading) {
        t9 = Symbol.for("react.early_return_sentinel");
        bb0: {
            const recentUsers = [
                ...users
            ].sort(_DashboardPageAnonymous).slice(0, 5);
            if (statsLoading || routesLoading || usersLoading) {
                let t10;
                if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
                    t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$components$2f$common$2f$Loader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Loader"], {
                        message: "Loading dashboard..."
                    }, void 0, false, {
                        fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
                        lineNumber: 292,
                        columnNumber: 17
                    }, this);
                    $[20] = t10;
                } else {
                    t10 = $[20];
                }
                t9 = t10;
                break bb0;
            }
            t6 = "space-y-6 pb-8";
            if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
                t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-2xl font-bold text-gray-900",
                            children: "Dashboard Overview"
                        }, void 0, false, {
                            fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
                            lineNumber: 302,
                            columnNumber: 19
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-400 mt-0.5",
                            children: "Welcome to Ghana Trotro Transit Admin"
                        }, void 0, false, {
                            fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
                            lineNumber: 302,
                            columnNumber: 91
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
                    lineNumber: 302,
                    columnNumber: 14
                }, this);
                $[21] = t7;
            } else {
                t7 = $[21];
            }
            if ($[22] !== stats) {
                t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$components$2f$dashboard$2f$StatsCards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatsCards"], {
                    stats: stats
                }, void 0, false, {
                    fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
                    lineNumber: 308,
                    columnNumber: 14
                }, this);
                $[22] = stats;
                $[23] = t8;
            } else {
                t8 = $[23];
            }
            t5 = "grid grid-cols-1 lg:grid-cols-3 gap-6";
            T0 = Section;
            t1 = "Recent Users";
            if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
                t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiUsers"], {
                    size: 15
                }, void 0, false, {
                    fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
                    lineNumber: 318,
                    columnNumber: 14
                }, this);
                t3 = {
                    label: "View all",
                    href: "/dashboard/users"
                };
                $[24] = t2;
                $[25] = t3;
            } else {
                t2 = $[24];
                t3 = $[25];
            }
            t4 = recentUsers.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-gray-400 text-center py-6",
                children: "No users found"
            }, void 0, false, {
                fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
                lineNumber: 329,
                columnNumber: 39
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: recentUsers.map(_DashboardPageRecentUsersMap)
            }, void 0, false, {
                fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
                lineNumber: 329,
                columnNumber: 114
            }, this);
        }
        $[5] = routesLoading;
        $[6] = stats;
        $[7] = statsLoading;
        $[8] = users;
        $[9] = usersLoading;
        $[10] = T0;
        $[11] = t1;
        $[12] = t2;
        $[13] = t3;
        $[14] = t4;
        $[15] = t5;
        $[16] = t6;
        $[17] = t7;
        $[18] = t8;
        $[19] = t9;
    } else {
        T0 = $[10];
        t1 = $[11];
        t2 = $[12];
        t3 = $[13];
        t4 = $[14];
        t5 = $[15];
        t6 = $[16];
        t7 = $[17];
        t8 = $[18];
        t9 = $[19];
    }
    if (t9 !== Symbol.for("react.early_return_sentinel")) {
        return t9;
    }
    let t10;
    if ($[26] !== T0 || $[27] !== t1 || $[28] !== t2 || $[29] !== t3 || $[30] !== t4) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T0, {
            title: t1,
            icon: t2,
            action: t3,
            children: t4
        }, void 0, false, {
            fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
            lineNumber: 363,
            columnNumber: 11
        }, this);
        $[26] = T0;
        $[27] = t1;
        $[28] = t2;
        $[29] = t3;
        $[30] = t4;
        $[31] = t10;
    } else {
        t10 = $[31];
    }
    let t11;
    if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiSearch"], {
            size: 15
        }, void 0, false, {
            fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
            lineNumber: 375,
            columnNumber: 11
        }, this);
        $[32] = t11;
    } else {
        t11 = $[32];
    }
    let t12;
    if ($[33] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiUsers"], {}, void 0, false, {
            fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
            lineNumber: 382,
            columnNumber: 11
        }, this);
        $[33] = t12;
    } else {
        t12 = $[33];
    }
    let t13;
    if ($[34] !== users.length) {
        t13 = users.length.toLocaleString();
        $[34] = users.length;
        $[35] = t13;
    } else {
        t13 = $[35];
    }
    let t14;
    if ($[36] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatRow, {
            icon: t12,
            label: "Total Users",
            value: t13,
            bg: "bg-blue-50",
            iconColor: "text-blue-500"
        }, void 0, false, {
            fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
            lineNumber: 397,
            columnNumber: 11
        }, this);
        $[36] = t13;
        $[37] = t14;
    } else {
        t14 = $[37];
    }
    let t15;
    if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiSearch"], {}, void 0, false, {
            fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
            lineNumber: 405,
            columnNumber: 11
        }, this);
        $[38] = t15;
    } else {
        t15 = $[38];
    }
    let t16;
    if ($[39] !== stats.todaySearches) {
        t16 = stats.todaySearches.toLocaleString();
        $[39] = stats.todaySearches;
        $[40] = t16;
    } else {
        t16 = $[40];
    }
    let t17;
    if ($[41] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatRow, {
            icon: t15,
            label: "Today's Searches",
            value: t16,
            bg: "bg-emerald-50",
            iconColor: "text-emerald-500"
        }, void 0, false, {
            fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
            lineNumber: 420,
            columnNumber: 11
        }, this);
        $[41] = t16;
        $[42] = t17;
    } else {
        t17 = $[42];
    }
    let t18;
    if ($[43] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiBell"], {}, void 0, false, {
            fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
            lineNumber: 428,
            columnNumber: 11
        }, this);
        $[43] = t18;
    } else {
        t18 = $[43];
    }
    let t19;
    if ($[44] !== stats.notificationsSent) {
        t19 = stats.notificationsSent.toLocaleString();
        $[44] = stats.notificationsSent;
        $[45] = t19;
    } else {
        t19 = $[45];
    }
    let t20;
    if ($[46] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatRow, {
            icon: t18,
            label: "Notifications Sent",
            value: t19,
            bg: "bg-violet-50",
            iconColor: "text-violet-500"
        }, void 0, false, {
            fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
            lineNumber: 443,
            columnNumber: 11
        }, this);
        $[46] = t19;
        $[47] = t20;
    } else {
        t20 = $[47];
    }
    let t21;
    if ($[48] !== t14 || $[49] !== t17 || $[50] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
            title: "User Activity",
            icon: t11,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: [
                    t14,
                    t17,
                    t20
                ]
            }, void 0, true, {
                fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
                lineNumber: 451,
                columnNumber: 53
            }, this)
        }, void 0, false, {
            fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
            lineNumber: 451,
            columnNumber: 11
        }, this);
        $[48] = t14;
        $[49] = t17;
        $[50] = t20;
        $[51] = t21;
    } else {
        t21 = $[51];
    }
    let t22;
    let t23;
    if ($[52] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiMapPin"], {
            size: 15
        }, void 0, false, {
            fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
            lineNumber: 462,
            columnNumber: 11
        }, this);
        t23 = {
            label: "View all",
            href: "/dashboard/routes"
        };
        $[52] = t22;
        $[53] = t23;
    } else {
        t22 = $[52];
        t23 = $[53];
    }
    let t24;
    if ($[54] !== routesToShow) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$components$2f$dashboard$2f$RecentActivity$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RecentActivity"], {
            routes: routesToShow
        }, void 0, false, {
            fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
            lineNumber: 475,
            columnNumber: 11
        }, this);
        $[54] = routesToShow;
        $[55] = t24;
    } else {
        t24 = $[55];
    }
    let t25;
    if ($[56] !== pendingRoutes.length || $[57] !== rejectedRoutes) {
        t25 = (pendingRoutes.length > 0 || rejectedRoutes.length > 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-4 pt-3 border-t border-gray-50 flex gap-4 text-xs text-gray-400",
            children: [
                pendingRoutes.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "flex items-center gap-1.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "w-2 h-2 rounded-full bg-amber-400 inline-block"
                        }, void 0, false, {
                            fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
                            lineNumber: 483,
                            columnNumber: 227
                        }, this),
                        pendingRoutes.length,
                        " pending"
                    ]
                }, void 0, true, {
                    fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
                    lineNumber: 483,
                    columnNumber: 183
                }, this),
                rejectedRoutes.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "flex items-center gap-1.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "w-2 h-2 rounded-full bg-red-400 inline-block"
                        }, void 0, false, {
                            fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
                            lineNumber: 483,
                            columnNumber: 406
                        }, this),
                        rejectedRoutes.length,
                        " rejected"
                    ]
                }, void 0, true, {
                    fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
                    lineNumber: 483,
                    columnNumber: 362
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
            lineNumber: 483,
            columnNumber: 70
        }, this);
        $[56] = pendingRoutes.length;
        $[57] = rejectedRoutes;
        $[58] = t25;
    } else {
        t25 = $[58];
    }
    let t26;
    if ($[59] !== t24 || $[60] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
            title: "Routes Needing Attention",
            icon: t22,
            action: t23,
            children: [
                t24,
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
            lineNumber: 492,
            columnNumber: 11
        }, this);
        $[59] = t24;
        $[60] = t25;
        $[61] = t26;
    } else {
        t26 = $[61];
    }
    let t27;
    if ($[62] !== t10 || $[63] !== t21 || $[64] !== t26 || $[65] !== t5) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t5,
            children: [
                t10,
                t21,
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
            lineNumber: 501,
            columnNumber: 11
        }, this);
        $[62] = t10;
        $[63] = t21;
        $[64] = t26;
        $[65] = t5;
        $[66] = t27;
    } else {
        t27 = $[66];
    }
    let t28;
    if ($[67] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiZap"], {
            size: 15
        }, void 0, false, {
            fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
            lineNumber: 512,
            columnNumber: 11
        }, this);
        $[67] = t28;
    } else {
        t28 = $[67];
    }
    let t29;
    if ($[68] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(QuickAction, {
            label: "Send Notification",
            href: "/dashboard/notifications",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiBell"], {}, void 0, false, {
                fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
                lineNumber: 519,
                columnNumber: 88
            }, void 0),
            color: "bg-violet-600"
        }, void 0, false, {
            fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
            lineNumber: 519,
            columnNumber: 11
        }, this);
        $[68] = t29;
    } else {
        t29 = $[68];
    }
    let t30;
    if ($[69] === Symbol.for("react.memo_cache_sentinel")) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(QuickAction, {
            label: "Add New Stop",
            href: "/dashboard/stops",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiMapPin"], {}, void 0, false, {
                fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
                lineNumber: 526,
                columnNumber: 75
            }, void 0),
            color: "bg-emerald-600"
        }, void 0, false, {
            fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
            lineNumber: 526,
            columnNumber: 11
        }, this);
        $[69] = t30;
    } else {
        t30 = $[69];
    }
    let t31;
    if ($[70] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(QuickAction, {
            label: "View Reports",
            href: "/dashboard/reports",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiFileText"], {}, void 0, false, {
                fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
                lineNumber: 533,
                columnNumber: 77
            }, void 0),
            color: "bg-blue-600"
        }, void 0, false, {
            fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
            lineNumber: 533,
            columnNumber: 11
        }, this);
        $[70] = t31;
    } else {
        t31 = $[70];
    }
    let t32;
    if ($[71] === Symbol.for("react.memo_cache_sentinel")) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
            title: "Quick Actions",
            icon: t28,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 md:grid-cols-4 gap-3",
                children: [
                    t29,
                    t30,
                    t31,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(QuickAction, {
                        label: "System Settings",
                        href: "/dashboard/settings",
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiSettings"], {}, void 0, false, {
                            fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
                            lineNumber: 540,
                            columnNumber: 193
                        }, void 0),
                        color: "bg-gray-700"
                    }, void 0, false, {
                        fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
                        lineNumber: 540,
                        columnNumber: 123
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
                lineNumber: 540,
                columnNumber: 53
            }, this)
        }, void 0, false, {
            fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
            lineNumber: 540,
            columnNumber: 11
        }, this);
        $[71] = t32;
    } else {
        t32 = $[71];
    }
    let t33;
    if ($[72] !== t27 || $[73] !== t6 || $[74] !== t7 || $[75] !== t8) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t6,
            children: [
                t7,
                t8,
                t27,
                t32
            ]
        }, void 0, true, {
            fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
            lineNumber: 547,
            columnNumber: 11
        }, this);
        $[72] = t27;
        $[73] = t6;
        $[74] = t7;
        $[75] = t8;
        $[76] = t33;
    } else {
        t33 = $[76];
    }
    return t33;
}
_s(DashboardPage, "ZCpLr1jmg1otMPt49ptceFehEcc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$hooks$2f$useDashboardStats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDashboardStats"],
        __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$hooks$2f$useRoutes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRoutes"],
        __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$hooks$2f$useUsers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUsers"]
    ];
});
_c4 = DashboardPage;
function _DashboardPageRecentUsersMap(user) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center shrink-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xs font-bold text-violet-600",
                    children: (user.first_name?.[0] || user.email?.[0] || "?").toUpperCase()
                }, void 0, false, {
                    fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
                    lineNumber: 559,
                    columnNumber: 209
                }, this)
            }, void 0, false, {
                fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
                lineNumber: 559,
                columnNumber: 115
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 min-w-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-medium text-gray-800 truncate",
                        children: user.first_name || user.last_name ? `${user.first_name ?? ""} ${user.last_name ?? ""}`.trim() : user.email
                    }, void 0, false, {
                        fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
                        lineNumber: 559,
                        columnNumber: 370
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-gray-400 truncate",
                        children: user.email
                    }, void 0, false, {
                        fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
                        lineNumber: 559,
                        columnNumber: 540
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
                lineNumber: 559,
                columnNumber: 338
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RoleBadge, {
                role: user.profile?.role
            }, void 0, false, {
                fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
                lineNumber: 559,
                columnNumber: 608
            }, this)
        ]
    }, user.id, true, {
        fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
        lineNumber: 559,
        columnNumber: 10
    }, this);
}
function _DashboardPageAnonymous(a, b) {
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
}
function _DashboardPageRoutesFilter2(r_0) {
    return !!r_0.rejection_reason;
}
function _DashboardPageRoutesFilter(r) {
    return !r.approved && !r.rejection_reason;
}
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "RoleBadge");
__turbopack_context__.k.register(_c1, "Section");
__turbopack_context__.k.register(_c2, "QuickAction");
__turbopack_context__.k.register(_c3, "StatRow");
__turbopack_context__.k.register(_c4, "DashboardPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=ghana-trotro-admin_1476a4c9._.js.map