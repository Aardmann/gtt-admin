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
"[project]/ghana-trotro-admin/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/dashboard/page.tsx - Updated
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
function DashboardPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(84);
    if ($[0] !== "ff539654f457b68ce9bdb6f6da2b06f39f67b4c2bf526e3cfaf6b95c990db573") {
        for(let $i = 0; $i < 84; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ff539654f457b68ce9bdb6f6da2b06f39f67b4c2bf526e3cfaf6b95c990db573";
    }
    const { stats, loading: statsLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$hooks$2f$useDashboardStats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDashboardStats"])();
    const { routes, loading: routesLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$hooks$2f$useRoutes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRoutes"])();
    const { users, loading: usersLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$hooks$2f$useUsers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUsers"])();
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
    let t9;
    if ($[1] !== routes || $[2] !== routesLoading || $[3] !== stats || $[4] !== statsLoading || $[5] !== users || $[6] !== usersLoading) {
        t9 = Symbol.for("react.early_return_sentinel");
        bb0: {
            pendingRoutes = routes.filter(_DashboardPageRoutesFilter);
            let t10;
            let t11;
            let t12;
            let t13;
            if ($[19] !== routesLoading || $[20] !== stats || $[21] !== statsLoading || $[22] !== users || $[23] !== usersLoading) {
                const recentUsers = users.slice(0, 5).sort(_DashboardPageAnonymous);
                if (statsLoading || routesLoading || usersLoading) {
                    let t14;
                    if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
                        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$components$2f$common$2f$Loader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Loader"], {
                            message: "Loading dashboard..."
                        }, void 0, false, {
                            fileName: "[project]/ghana-trotro-admin/app/page.tsx",
                            lineNumber: 57,
                            columnNumber: 19
                        }, this);
                        $[32] = t14;
                    } else {
                        t14 = $[32];
                    }
                    t9 = t14;
                    break bb0;
                }
                t6 = "space-y-6";
                if ($[33] === Symbol.for("react.memo_cache_sentinel")) {
                    t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl font-bold text-text",
                                children: "Dashboard Overview"
                            }, void 0, false, {
                                fileName: "[project]/ghana-trotro-admin/app/page.tsx",
                                lineNumber: 67,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-text-light",
                                children: "Welcome to Ghana Trotro Transit Admin"
                            }, void 0, false, {
                                fileName: "[project]/ghana-trotro-admin/app/page.tsx",
                                lineNumber: 67,
                                columnNumber: 89
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/ghana-trotro-admin/app/page.tsx",
                        lineNumber: 67,
                        columnNumber: 16
                    }, this);
                    $[33] = t7;
                } else {
                    t7 = $[33];
                }
                if ($[34] !== stats) {
                    t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$components$2f$dashboard$2f$StatsCards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatsCards"], {
                        stats: stats
                    }, void 0, false, {
                        fileName: "[project]/ghana-trotro-admin/app/page.tsx",
                        lineNumber: 73,
                        columnNumber: 16
                    }, this);
                    $[34] = stats;
                    $[35] = t8;
                } else {
                    t8 = $[35];
                }
                t3 = "grid grid-cols-1 lg:grid-cols-3 gap-6";
                t12 = "bg-white rounded-lg shadow p-6";
                if ($[36] === Symbol.for("react.memo_cache_sentinel")) {
                    t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-semibold text-text",
                                children: "Recent Users"
                            }, void 0, false, {
                                fileName: "[project]/ghana-trotro-admin/app/page.tsx",
                                lineNumber: 82,
                                columnNumber: 73
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiUsers"], {
                                className: "text-primary text-xl"
                            }, void 0, false, {
                                fileName: "[project]/ghana-trotro-admin/app/page.tsx",
                                lineNumber: 82,
                                columnNumber: 138
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/ghana-trotro-admin/app/page.tsx",
                        lineNumber: 82,
                        columnNumber: 17
                    }, this);
                    $[36] = t13;
                } else {
                    t13 = $[36];
                }
                t10 = "space-y-3";
                t11 = recentUsers.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-text-light text-center py-4",
                    children: "No users found"
                }, void 0, false, {
                    fileName: "[project]/ghana-trotro-admin/app/page.tsx",
                    lineNumber: 88,
                    columnNumber: 42
                }, this) : recentUsers.map(_DashboardPageRecentUsersMap);
                $[19] = routesLoading;
                $[20] = stats;
                $[21] = statsLoading;
                $[22] = users;
                $[23] = usersLoading;
                $[24] = t10;
                $[25] = t11;
                $[26] = t12;
                $[27] = t13;
                $[28] = t3;
                $[29] = t6;
                $[30] = t7;
                $[31] = t8;
            } else {
                t10 = $[24];
                t11 = $[25];
                t12 = $[26];
                t13 = $[27];
                t3 = $[28];
                t6 = $[29];
                t7 = $[30];
                t8 = $[31];
            }
            let t14;
            if ($[37] !== t10 || $[38] !== t11) {
                t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: t10,
                    children: t11
                }, void 0, false, {
                    fileName: "[project]/ghana-trotro-admin/app/page.tsx",
                    lineNumber: 114,
                    columnNumber: 15
                }, this);
                $[37] = t10;
                $[38] = t11;
                $[39] = t14;
            } else {
                t14 = $[39];
            }
            if ($[40] !== t12 || $[41] !== t13 || $[42] !== t14) {
                t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: t12,
                    children: [
                        t13,
                        t14
                    ]
                }, void 0, true, {
                    fileName: "[project]/ghana-trotro-admin/app/page.tsx",
                    lineNumber: 122,
                    columnNumber: 14
                }, this);
                $[40] = t12;
                $[41] = t13;
                $[42] = t14;
                $[43] = t4;
            } else {
                t4 = $[43];
            }
            let t15;
            if ($[44] === Symbol.for("react.memo_cache_sentinel")) {
                t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-xl font-semibold text-text mb-4",
                    children: "User Activity"
                }, void 0, false, {
                    fileName: "[project]/ghana-trotro-admin/app/page.tsx",
                    lineNumber: 132,
                    columnNumber: 15
                }, this);
                $[44] = t15;
            } else {
                t15 = $[44];
            }
            let t16;
            let t17;
            if ($[45] === Symbol.for("react.memo_cache_sentinel")) {
                t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiUsers"], {
                    className: "text-blue-600 mr-3"
                }, void 0, false, {
                    fileName: "[project]/ghana-trotro-admin/app/page.tsx",
                    lineNumber: 140,
                    columnNumber: 15
                }, this);
                t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-text-light",
                    children: "Total Users"
                }, void 0, false, {
                    fileName: "[project]/ghana-trotro-admin/app/page.tsx",
                    lineNumber: 141,
                    columnNumber: 15
                }, this);
                $[45] = t16;
                $[46] = t17;
            } else {
                t16 = $[45];
                t17 = $[46];
            }
            let t18;
            if ($[47] !== users.length) {
                t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between p-3 bg-blue-50 rounded-lg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center",
                        children: [
                            t16,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    t17,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-2xl font-bold text-text",
                                        children: users.length
                                    }, void 0, false, {
                                        fileName: "[project]/ghana-trotro-admin/app/page.tsx",
                                        lineNumber: 150,
                                        columnNumber: 142
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/ghana-trotro-admin/app/page.tsx",
                                lineNumber: 150,
                                columnNumber: 132
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/ghana-trotro-admin/app/page.tsx",
                        lineNumber: 150,
                        columnNumber: 92
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/ghana-trotro-admin/app/page.tsx",
                    lineNumber: 150,
                    columnNumber: 15
                }, this);
                $[47] = users.length;
                $[48] = t18;
            } else {
                t18 = $[48];
            }
            let t19;
            let t20;
            if ($[49] === Symbol.for("react.memo_cache_sentinel")) {
                t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiSearch"], {
                    className: "text-green-600 mr-3"
                }, void 0, false, {
                    fileName: "[project]/ghana-trotro-admin/app/page.tsx",
                    lineNumber: 159,
                    columnNumber: 15
                }, this);
                t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-text-light",
                    children: "Today's Searches"
                }, void 0, false, {
                    fileName: "[project]/ghana-trotro-admin/app/page.tsx",
                    lineNumber: 160,
                    columnNumber: 15
                }, this);
                $[49] = t19;
                $[50] = t20;
            } else {
                t19 = $[49];
                t20 = $[50];
            }
            let t21;
            if ($[51] !== stats.todaySearches) {
                t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between p-3 bg-green-50 rounded-lg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center",
                        children: [
                            t19,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    t20,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-2xl font-bold text-text",
                                        children: stats.todaySearches
                                    }, void 0, false, {
                                        fileName: "[project]/ghana-trotro-admin/app/page.tsx",
                                        lineNumber: 169,
                                        columnNumber: 143
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/ghana-trotro-admin/app/page.tsx",
                                lineNumber: 169,
                                columnNumber: 133
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/ghana-trotro-admin/app/page.tsx",
                        lineNumber: 169,
                        columnNumber: 93
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/ghana-trotro-admin/app/page.tsx",
                    lineNumber: 169,
                    columnNumber: 15
                }, this);
                $[51] = stats.todaySearches;
                $[52] = t21;
            } else {
                t21 = $[52];
            }
            let t22;
            let t23;
            if ($[53] === Symbol.for("react.memo_cache_sentinel")) {
                t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiBell"], {
                    className: "text-purple-600 mr-3"
                }, void 0, false, {
                    fileName: "[project]/ghana-trotro-admin/app/page.tsx",
                    lineNumber: 178,
                    columnNumber: 15
                }, this);
                t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-text-light",
                    children: "Notifications"
                }, void 0, false, {
                    fileName: "[project]/ghana-trotro-admin/app/page.tsx",
                    lineNumber: 179,
                    columnNumber: 15
                }, this);
                $[53] = t22;
                $[54] = t23;
            } else {
                t22 = $[53];
                t23 = $[54];
            }
            let t24;
            if ($[55] !== stats.notificationsSent) {
                t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between p-3 bg-purple-50 rounded-lg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center",
                        children: [
                            t22,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    t23,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-2xl font-bold text-text",
                                        children: stats.notificationsSent
                                    }, void 0, false, {
                                        fileName: "[project]/ghana-trotro-admin/app/page.tsx",
                                        lineNumber: 188,
                                        columnNumber: 144
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/ghana-trotro-admin/app/page.tsx",
                                lineNumber: 188,
                                columnNumber: 134
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/ghana-trotro-admin/app/page.tsx",
                        lineNumber: 188,
                        columnNumber: 94
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/ghana-trotro-admin/app/page.tsx",
                    lineNumber: 188,
                    columnNumber: 15
                }, this);
                $[55] = stats.notificationsSent;
                $[56] = t24;
            } else {
                t24 = $[56];
            }
            if ($[57] !== t18 || $[58] !== t21 || $[59] !== t24) {
                t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-lg shadow p-6",
                    children: [
                        t15,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                t18,
                                t21,
                                t24
                            ]
                        }, void 0, true, {
                            fileName: "[project]/ghana-trotro-admin/app/page.tsx",
                            lineNumber: 195,
                            columnNumber: 67
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/ghana-trotro-admin/app/page.tsx",
                    lineNumber: 195,
                    columnNumber: 14
                }, this);
                $[57] = t18;
                $[58] = t21;
                $[59] = t24;
                $[60] = t5;
            } else {
                t5 = $[60];
            }
            t1 = "bg-white rounded-lg shadow p-6";
            if ($[61] === Symbol.for("react.memo_cache_sentinel")) {
                t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-semibold text-text",
                            children: "Pending Routes"
                        }, void 0, false, {
                            fileName: "[project]/ghana-trotro-admin/app/page.tsx",
                            lineNumber: 205,
                            columnNumber: 70
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiMapPin"], {
                            className: "text-yellow-600 text-xl"
                        }, void 0, false, {
                            fileName: "[project]/ghana-trotro-admin/app/page.tsx",
                            lineNumber: 205,
                            columnNumber: 137
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/ghana-trotro-admin/app/page.tsx",
                    lineNumber: 205,
                    columnNumber: 14
                }, this);
                $[61] = t2;
            } else {
                t2 = $[61];
            }
            T0 = __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$components$2f$dashboard$2f$RecentActivity$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RecentActivity"];
            t0 = pendingRoutes.slice(0, 5);
        }
        $[1] = routes;
        $[2] = routesLoading;
        $[3] = stats;
        $[4] = statsLoading;
        $[5] = users;
        $[6] = usersLoading;
        $[7] = T0;
        $[8] = pendingRoutes;
        $[9] = t0;
        $[10] = t1;
        $[11] = t2;
        $[12] = t3;
        $[13] = t4;
        $[14] = t5;
        $[15] = t6;
        $[16] = t7;
        $[17] = t8;
        $[18] = t9;
    } else {
        T0 = $[7];
        pendingRoutes = $[8];
        t0 = $[9];
        t1 = $[10];
        t2 = $[11];
        t3 = $[12];
        t4 = $[13];
        t5 = $[14];
        t6 = $[15];
        t7 = $[16];
        t8 = $[17];
        t9 = $[18];
    }
    if (t9 !== Symbol.for("react.early_return_sentinel")) {
        return t9;
    }
    let t10;
    if ($[62] !== T0 || $[63] !== t0) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T0, {
            routes: t0
        }, void 0, false, {
            fileName: "[project]/ghana-trotro-admin/app/page.tsx",
            lineNumber: 250,
            columnNumber: 11
        }, this);
        $[62] = T0;
        $[63] = t0;
        $[64] = t10;
    } else {
        t10 = $[64];
    }
    let t11;
    if ($[65] !== pendingRoutes.length) {
        t11 = pendingRoutes.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-text-light text-center py-4",
            children: "No routes pending approval"
        }, void 0, false, {
            fileName: "[project]/ghana-trotro-admin/app/page.tsx",
            lineNumber: 259,
            columnNumber: 40
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-4 pt-4 border-t border-border",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-text-light",
                children: [
                    pendingRoutes.length,
                    " route",
                    pendingRoutes.length !== 1 ? "s" : "",
                    " pending approval"
                ]
            }, void 0, true, {
                fileName: "[project]/ghana-trotro-admin/app/page.tsx",
                lineNumber: 259,
                columnNumber: 171
            }, this)
        }, void 0, false, {
            fileName: "[project]/ghana-trotro-admin/app/page.tsx",
            lineNumber: 259,
            columnNumber: 121
        }, this);
        $[65] = pendingRoutes.length;
        $[66] = t11;
    } else {
        t11 = $[66];
    }
    let t12;
    if ($[67] !== t1 || $[68] !== t10 || $[69] !== t11 || $[70] !== t2) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1,
            children: [
                t2,
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/ghana-trotro-admin/app/page.tsx",
            lineNumber: 267,
            columnNumber: 11
        }, this);
        $[67] = t1;
        $[68] = t10;
        $[69] = t11;
        $[70] = t2;
        $[71] = t12;
    } else {
        t12 = $[71];
    }
    let t13;
    if ($[72] !== t12 || $[73] !== t3 || $[74] !== t4 || $[75] !== t5) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t3,
            children: [
                t4,
                t5,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/ghana-trotro-admin/app/page.tsx",
            lineNumber: 278,
            columnNumber: 11
        }, this);
        $[72] = t12;
        $[73] = t3;
        $[74] = t4;
        $[75] = t5;
        $[76] = t13;
    } else {
        t13 = $[76];
    }
    let t14;
    if ($[77] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-xl font-semibold text-text mb-4",
            children: "Quick Actions"
        }, void 0, false, {
            fileName: "[project]/ghana-trotro-admin/app/page.tsx",
            lineNumber: 289,
            columnNumber: 11
        }, this);
        $[77] = t14;
    } else {
        t14 = $[77];
    }
    let t15;
    if ($[78] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-lg shadow p-6",
            children: [
                t14,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 md:grid-cols-4 gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: _DashboardPageButtonOnClick,
                            className: "p-4 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors",
                            children: "Send Notification"
                        }, void 0, false, {
                            fileName: "[project]/ghana-trotro-admin/app/page.tsx",
                            lineNumber: 296,
                            columnNumber: 119
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: _DashboardPageButtonOnClick2,
                            className: "p-4 bg-success text-white rounded-lg hover:bg-success/90 transition-colors",
                            children: "Add New Stop"
                        }, void 0, false, {
                            fileName: "[project]/ghana-trotro-admin/app/page.tsx",
                            lineNumber: 296,
                            columnNumber: 280
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: _DashboardPageButtonOnClick3,
                            className: "p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors",
                            children: "View Reports"
                        }, void 0, false, {
                            fileName: "[project]/ghana-trotro-admin/app/page.tsx",
                            lineNumber: 296,
                            columnNumber: 435
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: _DashboardPageButtonOnClick4,
                            className: "p-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors",
                            children: "System Settings"
                        }, void 0, false, {
                            fileName: "[project]/ghana-trotro-admin/app/page.tsx",
                            lineNumber: 296,
                            columnNumber: 589
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/ghana-trotro-admin/app/page.tsx",
                    lineNumber: 296,
                    columnNumber: 64
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/ghana-trotro-admin/app/page.tsx",
            lineNumber: 296,
            columnNumber: 11
        }, this);
        $[78] = t15;
    } else {
        t15 = $[78];
    }
    let t16;
    if ($[79] !== t13 || $[80] !== t6 || $[81] !== t7 || $[82] !== t8) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t6,
            children: [
                t7,
                t8,
                t13,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/ghana-trotro-admin/app/page.tsx",
            lineNumber: 303,
            columnNumber: 11
        }, this);
        $[79] = t13;
        $[80] = t6;
        $[81] = t7;
        $[82] = t8;
        $[83] = t16;
    } else {
        t16 = $[83];
    }
    return t16;
}
_s(DashboardPage, "ZCpLr1jmg1otMPt49ptceFehEcc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$hooks$2f$useDashboardStats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDashboardStats"],
        __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$hooks$2f$useRoutes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRoutes"],
        __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$hooks$2f$useUsers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUsers"]
    ];
});
_c = DashboardPage;
function _DashboardPageButtonOnClick4() {
    return window.location.href = "/dashboard/settings";
}
function _DashboardPageButtonOnClick3() {
    return window.location.href = "/dashboard/reports";
}
function _DashboardPageButtonOnClick2() {
    return window.location.href = "/dashboard/stops";
}
function _DashboardPageButtonOnClick() {
    return window.location.href = "/dashboard/notifications";
}
function _DashboardPageRecentUsersMap(user) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-between p-3 hover:bg-gray-50 rounded",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-medium text-text",
                        children: [
                            user.first_name,
                            " ",
                            user.last_name
                        ]
                    }, void 0, true, {
                        fileName: "[project]/ghana-trotro-admin/app/page.tsx",
                        lineNumber: 327,
                        columnNumber: 109
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-text-light",
                        children: user.email
                    }, void 0, false, {
                        fileName: "[project]/ghana-trotro-admin/app/page.tsx",
                        lineNumber: 327,
                        columnNumber: 184
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/ghana-trotro-admin/app/page.tsx",
                lineNumber: 327,
                columnNumber: 104
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `text-xs px-2 py-1 rounded-full ${user.profile?.role === "admin" ? "bg-purple-100 text-purple-800" : user.profile?.role === "banned" ? "bg-red-100 text-red-800" : "bg-green-100 text-green-800"}`,
                children: user.profile?.role || "user"
            }, void 0, false, {
                fileName: "[project]/ghana-trotro-admin/app/page.tsx",
                lineNumber: 327,
                columnNumber: 245
            }, this)
        ]
    }, user.id, true, {
        fileName: "[project]/ghana-trotro-admin/app/page.tsx",
        lineNumber: 327,
        columnNumber: 10
    }, this);
}
function _DashboardPageAnonymous(a, b) {
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
}
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

//# sourceMappingURL=ghana-trotro-admin_2b5f7ec7._.js.map