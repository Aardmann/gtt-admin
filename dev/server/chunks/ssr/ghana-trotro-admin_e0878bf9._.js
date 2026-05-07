module.exports = [
"[project]/ghana-trotro-admin/hooks/useDashboardStats.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// hooks/useDashboardStats.ts
__turbopack_context__.s([
    "useDashboardStats",
    ()=>useDashboardStats
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ghana-trotro-admin/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ghana-trotro-admin/lib/supabase.ts [app-ssr] (ecmascript)");
;
;
function useDashboardStats() {
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        totalUsers: 0,
        totalRoutes: 0,
        totalStops: 0,
        activeUsers: 0,
        pendingRoutes: 0,
        todaySearches: 0,
        notificationsSent: 0,
        revenueToday: 0
    });
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const fetchStats = async ()=>{
        try {
            setLoading(true);
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            const todayISO = today.toISOString();
            // Fetch all stats in parallel
            const [usersRes, routesRes, stopsRes, activeUsersRes, pendingRoutesRes, todaySearchesRes, notificationsRes, revenueRes] = await Promise.all([
                __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('users').select('*', {
                    count: 'exact',
                    head: true
                }),
                __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('routes').select('*', {
                    count: 'exact',
                    head: true
                }),
                __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('stops').select('*', {
                    count: 'exact',
                    head: true
                }),
                __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('profiles').select('*', {
                    count: 'exact',
                    head: true
                }).gte('last_seen_at', new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()),
                __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('routes').select('*', {
                    count: 'exact',
                    head: true
                }).eq('approved', false),
                __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('search_history').select('*', {
                    count: 'exact',
                    head: true
                }).gte('searched_at', todayISO),
                __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('notifications').select('sent_count'),
                __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('route_creation_payments').select('amount').eq('payment_status', 'completed').gte('created_at', todayISO)
            ]);
            const notificationsSent = notificationsRes.data?.reduce((sum, n)=>sum + n.sent_count, 0) || 0;
            const revenueToday = revenueRes.data?.reduce((sum, p)=>sum + (p.amount || 0), 0) || 0;
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchStats();
        // Refresh stats every 30 seconds
        const interval = setInterval(fetchStats, 30000);
        return ()=>clearInterval(interval);
    }, []);
    return {
        stats,
        loading,
        refresh: fetchStats
    };
}
}),
"[project]/ghana-trotro-admin/hooks/useRoutes.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// hooks/useRoutes.ts - Add missing functions
__turbopack_context__.s([
    "useRoutes",
    ()=>useRoutes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ghana-trotro-admin/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ghana-trotro-admin/lib/supabase.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ghana-trotro-admin/node_modules/react-hot-toast/dist/index.mjs [app-ssr] (ecmascript)");
;
;
;
function useRoutes() {
    const [routes, setRoutes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const fetchRoutes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        try {
            setLoading(true);
            setError(null);
            const { data, error: fetchError } = await __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('routes').select('*').order('created_at', {
                ascending: false
            });
            if (fetchError) throw fetchError;
            setRoutes(data || []);
        } catch (err) {
            console.error('Failed to fetch routes:', err);
            setError(err.message);
            __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error('Failed to load routes');
        } finally{
            setLoading(false);
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchRoutes();
    }, [
        fetchRoutes
    ]);
    const approveRoute = async (routeId)=>{
        try {
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('routes').update({
                approved: true,
                rejection_reason: null,
                description: null,
                notes: null,
                updated_at: new Date().toISOString()
            }).eq('id', routeId);
            if (error) throw error;
            __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success('Route approved successfully');
            fetchRoutes();
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error('Failed to approve route: ' + err.message);
        }
    };
    const rejectRoute = async (routeId, reason)=>{
        try {
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('routes').update({
                approved: false,
                rejection_reason: reason,
                updated_at: new Date().toISOString()
            }).eq('id', routeId);
            if (error) throw error;
            __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success('Route rejected successfully');
            fetchRoutes();
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error('Failed to reject route: ' + err.message);
        }
    };
    const deleteRoute = async (routeId)=>{
        if (!confirm('Are you sure you want to delete this route?')) return;
        try {
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('routes').delete().eq('id', routeId);
            if (error) throw error;
            __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success('Route deleted successfully');
            fetchRoutes();
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error('Failed to delete route: ' + err.message);
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
}),
"[project]/ghana-trotro-admin/hooks/useUsers.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// hooks/useUsers.ts - Fixed version
__turbopack_context__.s([
    "useUsers",
    ()=>useUsers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ghana-trotro-admin/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ghana-trotro-admin/lib/supabase.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ghana-trotro-admin/node_modules/react-hot-toast/dist/index.mjs [app-ssr] (ecmascript)");
;
;
;
function useUsers() {
    const [users, setUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const fetchUsers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        try {
            setLoading(true);
            setError(null);
            console.log('Fetching users from database...');
            // First try to fetch with joins
            const { data, error: fetchError } = await __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('users').select(`
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
                const { data: simpleData, error: simpleError } = await __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('users').select('*').order('created_at', {
                    ascending: false
                });
                if (simpleError) {
                    // Check if table exists
                    if (simpleError.code === 'PGRST116') {
                        setError('Users table not found. Please run database setup.');
                        __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error('Database tables not set up. Please run setup.');
                        setUsers([]);
                        return;
                    }
                    throw simpleError;
                }
                // Try to fetch profiles separately
                const { data: profilesData } = await __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('profiles').select('*');
                const profilesMap = profilesData?.reduce((acc, profile)=>{
                    acc[profile.id] = profile;
                    return acc;
                }, {}) || {};
                // Map to User type
                const usersWithDefaults = (simpleData || []).map((user)=>({
                        ...user,
                        profile: profilesMap[user.id] || undefined,
                        search_history: [],
                        location_history: []
                    }));
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
                __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error('Failed to load users');
            }
        } finally{
            setLoading(false);
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchUsers();
        // Setup real-time subscription
        const subscription = __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].channel('users-channel').on('postgres_changes', {
            event: '*',
            schema: 'public',
            table: 'users'
        }, ()=>{
            console.log('Users table changed, refreshing...');
            fetchUsers();
        }).subscribe((status)=>{
            console.log('Subscription status:', status);
        });
        return ()=>{
            subscription.unsubscribe();
        };
    }, [
        fetchUsers
    ]);
    const banUser = async (userId)=>{
        try {
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('profiles').update({
                role: 'banned'
            }).eq('id', userId);
            if (error) {
                // Try to create a profile if it doesn't exist
                const { error: createError } = await __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('profiles').insert({
                    id: userId,
                    role: 'banned'
                });
                if (createError) throw createError;
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success('User banned successfully');
            fetchUsers();
        } catch (err) {
            console.error('Ban error:', err);
            __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error('Failed to ban user: ' + err.message);
        }
    };
    const deleteUser = async (userId)=>{
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
                    await __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from(table).delete().eq('user_id', userId);
                //.catch(() => {}) // Ignore errors if table doesn't exist
                } catch (err) {
                    console.warn(`Error deleting from ${table}:`, err);
                }
            }
            // Try to delete from users table
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('users').delete().eq('id', userId);
            } catch (err) {
                console.warn('Error deleting from users table:', err);
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success('User data removed successfully');
            fetchUsers();
        } catch (err) {
            console.error('Delete error:', err);
            __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error('Failed to delete user: ' + err.message);
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
}),
"[project]/ghana-trotro-admin/components/dashboard/StatsCards.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/dashboard/StatsCards.tsx
__turbopack_context__.s([
    "StatsCards",
    ()=>StatsCards
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ghana-trotro-admin/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ghana-trotro-admin/node_modules/react-icons/fi/index.mjs [app-ssr] (ecmascript)");
'use client';
;
;
function Card({ label, value, sub, subColor = 'text-gray-400', icon, iconBg, iconColor }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col gap-4 hover:shadow-md transition-shadow duration-200",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `p-2.5 rounded-xl ${iconBg}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `${iconColor} flex items-center text-lg`,
                        children: icon
                    }, void 0, false, {
                        fileName: "[project]/ghana-trotro-admin/components/dashboard/StatsCards.tsx",
                        lineNumber: 26,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/ghana-trotro-admin/components/dashboard/StatsCards.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/ghana-trotro-admin/components/dashboard/StatsCards.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-2xl font-bold text-gray-900 leading-none",
                        children: value
                    }, void 0, false, {
                        fileName: "[project]/ghana-trotro-admin/components/dashboard/StatsCards.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs font-semibold text-gray-400 uppercase tracking-wide mt-1",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/ghana-trotro-admin/components/dashboard/StatsCards.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/ghana-trotro-admin/components/dashboard/StatsCards.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: `text-xs ${subColor} border-t border-gray-50 pt-2`,
                children: sub
            }, void 0, false, {
                fileName: "[project]/ghana-trotro-admin/components/dashboard/StatsCards.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/ghana-trotro-admin/components/dashboard/StatsCards.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
function StatsCards({ stats }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-2 lg:grid-cols-4 gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                label: "Total Users",
                value: stats.totalUsers.toLocaleString(),
                sub: `${stats.activeUsers} active today`,
                subColor: "text-emerald-500",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiUsers"], {}, void 0, false, {
                    fileName: "[project]/ghana-trotro-admin/components/dashboard/StatsCards.tsx",
                    lineNumber: 46,
                    columnNumber: 15
                }, void 0),
                iconBg: "bg-blue-50",
                iconColor: "text-blue-600"
            }, void 0, false, {
                fileName: "[project]/ghana-trotro-admin/components/dashboard/StatsCards.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                label: "Total Routes",
                value: stats.totalRoutes.toLocaleString(),
                sub: `${stats.pendingRoutes} pending approval`,
                subColor: stats.pendingRoutes > 0 ? 'text-amber-500' : 'text-gray-400',
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiMap"], {}, void 0, false, {
                    fileName: "[project]/ghana-trotro-admin/components/dashboard/StatsCards.tsx",
                    lineNumber: 55,
                    columnNumber: 15
                }, void 0),
                iconBg: "bg-violet-50",
                iconColor: "text-violet-600"
            }, void 0, false, {
                fileName: "[project]/ghana-trotro-admin/components/dashboard/StatsCards.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                label: "Today's Searches",
                value: stats.todaySearches.toLocaleString(),
                sub: "Route searches today",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiSearch"], {}, void 0, false, {
                    fileName: "[project]/ghana-trotro-admin/components/dashboard/StatsCards.tsx",
                    lineNumber: 63,
                    columnNumber: 15
                }, void 0),
                iconBg: "bg-sky-50",
                iconColor: "text-sky-600"
            }, void 0, false, {
                fileName: "[project]/ghana-trotro-admin/components/dashboard/StatsCards.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                label: "Revenue Today",
                value: `GH₵${stats.revenueToday.toFixed(2)}`,
                sub: "Route creation payments",
                subColor: "text-teal-500",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiTrendingUp"], {}, void 0, false, {
                    fileName: "[project]/ghana-trotro-admin/components/dashboard/StatsCards.tsx",
                    lineNumber: 72,
                    columnNumber: 15
                }, void 0),
                iconBg: "bg-teal-50",
                iconColor: "text-teal-600"
            }, void 0, false, {
                fileName: "[project]/ghana-trotro-admin/components/dashboard/StatsCards.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/ghana-trotro-admin/components/dashboard/StatsCards.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
}),
"[project]/ghana-trotro-admin/components/dashboard/RecentActivity.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/dashboard/RecentActivity.tsx
__turbopack_context__.s([
    "RecentActivity",
    ()=>RecentActivity
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ghana-trotro-admin/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ghana-trotro-admin/node_modules/react-icons/fi/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ghana-trotro-admin/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
'use client';
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
function RecentActivity({ routes }) {
    if (routes.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center justify-center py-8 text-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-3 bg-gray-50 rounded-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiMap"], {
                        className: "text-gray-300 text-2xl"
                    }, void 0, false, {
                        fileName: "[project]/ghana-trotro-admin/components/dashboard/RecentActivity.tsx",
                        lineNumber: 27,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/ghana-trotro-admin/components/dashboard/RecentActivity.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm font-medium text-gray-500",
                    children: "No pending routes"
                }, void 0, false, {
                    fileName: "[project]/ghana-trotro-admin/components/dashboard/RecentActivity.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-gray-400",
                    children: "All routes have been processed"
                }, void 0, false, {
                    fileName: "[project]/ghana-trotro-admin/components/dashboard/RecentActivity.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/ghana-trotro-admin/components/dashboard/RecentActivity.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-3",
        children: routes.map((route)=>{
            const status = getRouteStatus(route);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-2 bg-white rounded-lg shadow-sm shrink-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiMap"], {
                            className: "text-violet-500 text-sm"
                        }, void 0, false, {
                            fileName: "[project]/ghana-trotro-admin/components/dashboard/RecentActivity.tsx",
                            lineNumber: 46,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/ghana-trotro-admin/components/dashboard/RecentActivity.tsx",
                        lineNumber: 45,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 flex-wrap",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-semibold text-gray-800 truncate",
                                        children: route.name
                                    }, void 0, false, {
                                        fileName: "[project]/ghana-trotro-admin/components/dashboard/RecentActivity.tsx",
                                        lineNumber: 52,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `text-xs font-medium px-2 py-0.5 rounded-full shrink-0 ${status.className}`,
                                        children: status.label
                                    }, void 0, false, {
                                        fileName: "[project]/ghana-trotro-admin/components/dashboard/RecentActivity.tsx",
                                        lineNumber: 53,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/ghana-trotro-admin/components/dashboard/RecentActivity.tsx",
                                lineNumber: 51,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 mt-0.5 text-xs text-gray-400",
                                children: [
                                    route.travel_time_minutes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiClock"], {
                                                size: 10
                                            }, void 0, false, {
                                                fileName: "[project]/ghana-trotro-admin/components/dashboard/RecentActivity.tsx",
                                                lineNumber: 60,
                                                columnNumber: 21
                                            }, this),
                                            " ",
                                            route.travel_time_minutes,
                                            " min"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/ghana-trotro-admin/components/dashboard/RecentActivity.tsx",
                                        lineNumber: 59,
                                        columnNumber: 19
                                    }, this),
                                    route.vehicle_type && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiTruck"], {
                                                size: 10
                                            }, void 0, false, {
                                                fileName: "[project]/ghana-trotro-admin/components/dashboard/RecentActivity.tsx",
                                                lineNumber: 65,
                                                columnNumber: 21
                                            }, this),
                                            " ",
                                            route.vehicle_type
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/ghana-trotro-admin/components/dashboard/RecentActivity.tsx",
                                        lineNumber: 64,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/ghana-trotro-admin/components/dashboard/RecentActivity.tsx",
                                lineNumber: 57,
                                columnNumber: 15
                            }, this),
                            route.rejection_reason && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-red-500 mt-0.5 truncate",
                                children: [
                                    "Reason: ",
                                    route.rejection_reason
                                ]
                            }, void 0, true, {
                                fileName: "[project]/ghana-trotro-admin/components/dashboard/RecentActivity.tsx",
                                lineNumber: 70,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/ghana-trotro-admin/components/dashboard/RecentActivity.tsx",
                        lineNumber: 50,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/dashboard/routes",
                        className: "shrink-0 text-gray-300 hover:text-violet-500 transition-colors",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiChevronRight"], {
                            size: 16
                        }, void 0, false, {
                            fileName: "[project]/ghana-trotro-admin/components/dashboard/RecentActivity.tsx",
                            lineNumber: 78,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/ghana-trotro-admin/components/dashboard/RecentActivity.tsx",
                        lineNumber: 77,
                        columnNumber: 13
                    }, this)
                ]
            }, route.id, true, {
                fileName: "[project]/ghana-trotro-admin/components/dashboard/RecentActivity.tsx",
                lineNumber: 40,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/ghana-trotro-admin/components/dashboard/RecentActivity.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
}),
"[project]/ghana-trotro-admin/components/common/Loader.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Loader",
    ()=>Loader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ghana-trotro-admin/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
'use client';
;
function Loader({ message = "Loading..." }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center justify-center py-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "animate-spin rounded-full h-12 w-12 border-b-2 border-primary"
            }, void 0, false, {
                fileName: "[project]/ghana-trotro-admin/components/common/Loader.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-4 text-text-light",
                children: message
            }, void 0, false, {
                fileName: "[project]/ghana-trotro-admin/components/common/Loader.tsx",
                lineNumber: 11,
                columnNumber: 19
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/ghana-trotro-admin/components/common/Loader.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
}),
"[project]/ghana-trotro-admin/app/dashboard/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/dashboard/page.tsx
__turbopack_context__.s([
    "default",
    ()=>DashboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ghana-trotro-admin/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$hooks$2f$useDashboardStats$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ghana-trotro-admin/hooks/useDashboardStats.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$hooks$2f$useRoutes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ghana-trotro-admin/hooks/useRoutes.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$hooks$2f$useUsers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ghana-trotro-admin/hooks/useUsers.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$components$2f$dashboard$2f$StatsCards$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ghana-trotro-admin/components/dashboard/StatsCards.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$components$2f$dashboard$2f$RecentActivity$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ghana-trotro-admin/components/dashboard/RecentActivity.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$components$2f$common$2f$Loader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ghana-trotro-admin/components/common/Loader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ghana-trotro-admin/node_modules/react-icons/fi/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ghana-trotro-admin/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
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
function RoleBadge({ role }) {
    const resolved = role || 'user';
    const styles = {
        admin: 'bg-violet-100 text-violet-700',
        banned: 'bg-red-100 text-red-600',
        user: 'bg-emerald-100 text-emerald-700'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `text-xs font-semibold px-2 py-0.5 rounded-full ${styles[resolved] ?? styles.user}`,
        children: resolved
    }, void 0, false, {
        fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
// ─── Section wrapper ──────────────────────────────────────────────────────────
function Section({ title, icon, action, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between px-5 py-4 border-b border-gray-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-violet-500",
                                children: icon
                            }, void 0, false, {
                                fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-sm font-semibold text-gray-700 uppercase tracking-wide",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    action && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: action.href,
                        className: "text-xs font-medium text-violet-600 hover:text-violet-700 flex items-center gap-0.5",
                        children: [
                            action.label,
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiChevronRight"], {
                                size: 12
                            }, void 0, false, {
                                fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
                                lineNumber: 54,
                                columnNumber: 28
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-5",
                children: children
            }, void 0, false, {
                fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
// ─── Quick action button ──────────────────────────────────────────────────────
function QuickAction({ label, href, icon, color }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        href: href,
        className: `flex items-center gap-3 p-4 rounded-xl text-white font-semibold text-sm transition-opacity hover:opacity-90 ${color}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-lg",
                children: icon
            }, void 0, false, {
                fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            label
        ]
    }, void 0, true, {
        fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
// ─── Inline stat row ──────────────────────────────────────────────────────────
function StatRow({ icon, label, value, bg, iconColor }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex items-center gap-3 p-4 rounded-xl ${bg}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `text-xl ${iconColor}`,
                children: icon
            }, void 0, false, {
                fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-gray-500",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xl font-bold text-gray-800",
                        children: value
                    }, void 0, false, {
                        fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
        lineNumber: 81,
        columnNumber: 5
    }, this);
}
function DashboardPage() {
    const { stats, loading: statsLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$hooks$2f$useDashboardStats$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDashboardStats"])();
    const { routes, loading: routesLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$hooks$2f$useRoutes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRoutes"])();
    const { users, loading: usersLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$hooks$2f$useUsers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useUsers"])();
    // Pending = not approved AND no rejection reason
    // Rejected = has a rejection_reason (regardless of approved flag)
    const pendingRoutes = routes.filter((r)=>!r.approved && !r.rejection_reason);
    const rejectedRoutes = routes.filter((r)=>!!r.rejection_reason);
    const routesToShow = [
        ...pendingRoutes,
        ...rejectedRoutes
    ].slice(0, 5);
    const recentUsers = [
        ...users
    ].sort((a, b)=>new Date(b.created_at).getTime() - new Date(a.created_at).getTime()).slice(0, 5);
    if (statsLoading || routesLoading || usersLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$components$2f$common$2f$Loader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Loader"], {
            message: "Loading dashboard..."
        }, void 0, false, {
            fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
            lineNumber: 109,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6 pb-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold text-gray-900",
                        children: "Dashboard Overview"
                    }, void 0, false, {
                        fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-400 mt-0.5",
                        children: "Welcome to Ghana Trotro Transit Admin"
                    }, void 0, false, {
                        fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$components$2f$dashboard$2f$StatsCards$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StatsCards"], {
                stats: stats
            }, void 0, false, {
                fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                        title: "Recent Users",
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiUsers"], {
                            size: 15
                        }, void 0, false, {
                            fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
                            lineNumber: 129,
                            columnNumber: 17
                        }, void 0),
                        action: {
                            label: 'View all',
                            href: '/dashboard/users'
                        },
                        children: recentUsers.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-400 text-center py-6",
                            children: "No users found"
                        }, void 0, false, {
                            fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
                            lineNumber: 133,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: recentUsers.map((user)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center shrink-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-bold text-violet-600",
                                                children: (user.first_name?.[0] || user.email?.[0] || '?').toUpperCase()
                                            }, void 0, false, {
                                                fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
                                                lineNumber: 140,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
                                            lineNumber: 139,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-medium text-gray-800 truncate",
                                                    children: user.first_name || user.last_name ? `${user.first_name ?? ''} ${user.last_name ?? ''}`.trim() : user.email
                                                }, void 0, false, {
                                                    fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
                                                    lineNumber: 145,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-gray-400 truncate",
                                                    children: user.email
                                                }, void 0, false, {
                                                    fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
                                                    lineNumber: 150,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
                                            lineNumber: 144,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(RoleBadge, {
                                            role: user.profile?.role
                                        }, void 0, false, {
                                            fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
                                            lineNumber: 152,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, user.id, true, {
                                    fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
                                    lineNumber: 137,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
                            lineNumber: 135,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                        title: "User Activity",
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiSearch"], {
                            size: 15
                        }, void 0, false, {
                            fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
                            lineNumber: 160,
                            columnNumber: 46
                        }, void 0),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatRow, {
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiUsers"], {}, void 0, false, {
                                        fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
                                        lineNumber: 162,
                                        columnNumber: 28
                                    }, void 0),
                                    label: "Total Users",
                                    value: users.length.toLocaleString(),
                                    bg: "bg-blue-50",
                                    iconColor: "text-blue-500"
                                }, void 0, false, {
                                    fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
                                    lineNumber: 162,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatRow, {
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiSearch"], {}, void 0, false, {
                                        fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
                                        lineNumber: 163,
                                        columnNumber: 28
                                    }, void 0),
                                    label: "Today's Searches",
                                    value: stats.todaySearches.toLocaleString(),
                                    bg: "bg-emerald-50",
                                    iconColor: "text-emerald-500"
                                }, void 0, false, {
                                    fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
                                    lineNumber: 163,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatRow, {
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiBell"], {}, void 0, false, {
                                        fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
                                        lineNumber: 164,
                                        columnNumber: 28
                                    }, void 0),
                                    label: "Notifications Sent",
                                    value: stats.notificationsSent.toLocaleString(),
                                    bg: "bg-violet-50",
                                    iconColor: "text-violet-500"
                                }, void 0, false, {
                                    fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
                                    lineNumber: 164,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
                            lineNumber: 161,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
                        lineNumber: 160,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                        title: "Routes Needing Attention",
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiMapPin"], {
                            size: 15
                        }, void 0, false, {
                            fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
                            lineNumber: 171,
                            columnNumber: 17
                        }, void 0),
                        action: {
                            label: 'View all',
                            href: '/dashboard/routes'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$components$2f$dashboard$2f$RecentActivity$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RecentActivity"], {
                                routes: routesToShow
                            }, void 0, false, {
                                fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
                                lineNumber: 174,
                                columnNumber: 11
                            }, this),
                            (pendingRoutes.length > 0 || rejectedRoutes.length > 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 pt-3 border-t border-gray-50 flex gap-4 text-xs text-gray-400",
                                children: [
                                    pendingRoutes.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-2 h-2 rounded-full bg-amber-400 inline-block"
                                            }, void 0, false, {
                                                fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
                                                lineNumber: 179,
                                                columnNumber: 19
                                            }, this),
                                            pendingRoutes.length,
                                            " pending"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
                                        lineNumber: 178,
                                        columnNumber: 17
                                    }, this),
                                    rejectedRoutes.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-2 h-2 rounded-full bg-red-400 inline-block"
                                            }, void 0, false, {
                                                fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
                                                lineNumber: 185,
                                                columnNumber: 19
                                            }, this),
                                            rejectedRoutes.length,
                                            " rejected"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
                                        lineNumber: 184,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
                                lineNumber: 176,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
                        lineNumber: 169,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
                lineNumber: 124,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                title: "Quick Actions",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiZap"], {
                    size: 15
                }, void 0, false, {
                    fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
                    lineNumber: 195,
                    columnNumber: 44
                }, void 0),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 md:grid-cols-4 gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(QuickAction, {
                            label: "Send Notification",
                            href: "/dashboard/notifications",
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiBell"], {}, void 0, false, {
                                fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
                                lineNumber: 197,
                                columnNumber: 88
                            }, void 0),
                            color: "bg-violet-600"
                        }, void 0, false, {
                            fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
                            lineNumber: 197,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(QuickAction, {
                            label: "Add New Stop",
                            href: "/dashboard/stops",
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiMapPin"], {}, void 0, false, {
                                fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
                                lineNumber: 198,
                                columnNumber: 89
                            }, void 0),
                            color: "bg-emerald-600"
                        }, void 0, false, {
                            fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
                            lineNumber: 198,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(QuickAction, {
                            label: "View Reports",
                            href: "/dashboard/reports",
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiFileText"], {}, void 0, false, {
                                fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
                                lineNumber: 199,
                                columnNumber: 89
                            }, void 0),
                            color: "bg-blue-600"
                        }, void 0, false, {
                            fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
                            lineNumber: 199,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(QuickAction, {
                            label: "System Settings",
                            href: "/dashboard/settings",
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiSettings"], {}, void 0, false, {
                                fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
                                lineNumber: 200,
                                columnNumber: 89
                            }, void 0),
                            color: "bg-gray-700"
                        }, void 0, false, {
                            fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
                            lineNumber: 200,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
                    lineNumber: 196,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
                lineNumber: 195,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/ghana-trotro-admin/app/dashboard/page.tsx",
        lineNumber: 113,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=ghana-trotro-admin_e0878bf9._.js.map