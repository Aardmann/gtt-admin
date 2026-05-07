module.exports = [
"[project]/lib/constants.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/constants.ts
__turbopack_context__.s([
    "regions",
    ()=>regions
]);
const regions = [
    'Accra',
    'Kumasi',
    'Tamale',
    'Takoradi',
    'Cape Coast',
    'Sunyani',
    'Ho',
    'Koforidua',
    'Bolgatanga',
    'Wa',
    'Ahafo Region'
];
}),
"[project]/components/notifications/CreateNotification.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/notifications/CreateNotification.tsx
__turbopack_context__.s([
    "CreateNotification",
    ()=>CreateNotification
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
const notificationTypes = [
    {
        id: 'banner',
        label: 'Banner Notification',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiBell"],
        description: 'Standard notification that appears as a banner'
    },
    {
        id: 'fullscreen',
        label: 'Full Screen Notification',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiAlertTriangle"],
        description: 'Takes over full screen - use for important alerts'
    },
    {
        id: 'urgent',
        label: 'Urgent Alert',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiAlertTriangle"],
        description: 'High priority with urgent vibration pattern'
    },
    {
        id: 'important',
        label: 'Important Update',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiStar"],
        description: 'Important system or feature updates'
    },
    {
        id: 'promotional',
        label: 'Promotional',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiStar"],
        description: 'Promotional offers and discounts'
    },
    {
        id: 'location',
        label: 'Location Based',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiMapPin"],
        description: 'Notifications based on user location'
    },
    {
        id: 'search',
        label: 'Search Related',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiSearch"],
        description: 'Based on user search history'
    }
];
const notificationCategories = [
    {
        id: 'general',
        label: 'General',
        color: 'bg-blue-100 text-blue-800'
    },
    {
        id: 'promotion',
        label: 'Promotion',
        color: 'bg-purple-100 text-purple-800'
    },
    {
        id: 'alert',
        label: 'Alert',
        color: 'bg-red-100 text-red-800'
    },
    {
        id: 'update',
        label: 'Update',
        color: 'bg-green-100 text-green-800'
    },
    {
        id: 'location',
        label: 'Location',
        color: 'bg-yellow-100 text-yellow-800'
    },
    {
        id: 'search',
        label: 'Search',
        color: 'bg-indigo-100 text-indigo-800'
    }
];
const priorityLevels = [
    {
        id: 'low',
        label: 'Low',
        color: 'bg-gray-100 text-gray-800',
        description: 'No sound, minimal vibration'
    },
    {
        id: 'medium',
        label: 'Medium',
        color: 'bg-blue-100 text-blue-800',
        description: 'Normal sound and vibration'
    },
    {
        id: 'high',
        label: 'High',
        color: 'bg-yellow-100 text-yellow-800',
        description: 'Louder sound, longer vibration'
    },
    {
        id: 'critical',
        label: 'Critical',
        color: 'bg-red-100 text-red-800',
        description: 'Urgent sound and vibration pattern'
    }
];
const vibrationPatterns = [
    {
        id: 'default',
        label: 'Default',
        pattern: [
            200,
            100,
            200
        ]
    },
    {
        id: 'urgent',
        label: 'Urgent',
        pattern: [
            400,
            200,
            400,
            200,
            400
        ]
    },
    {
        id: 'important',
        label: 'Important',
        pattern: [
            300,
            150,
            300
        ]
    }
];
function CreateNotification({ onSuccess }) {
    const [notification, setNotification] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        title: '',
        message: '',
        type: 'banner',
        category: 'general',
        priority: 'medium',
        image_file: null,
        image_url: '',
        target_type: 'all',
        target_criteria: {
            locations: [],
            regions: [],
            device_types: [],
            user_groups: [],
            min_searches: 1
        },
        scheduled_for: '',
        expires_at: '',
        action_url: '',
        action_text: '',
        vibration_pattern: 'default'
    });
    const [uploading, setUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [imagePreview, setImagePreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [showAdvanced, setShowAdvanced] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Handle file selection for preview
    const handleFileSelect = (file)=>{
        if (file.size > 5 * 1024 * 1024) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error('Image must be less than 5MB');
            return;
        }
        if (!file.type.startsWith('image/')) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error('Please upload an image file');
            return;
        }
        setNotification((prev)=>({
                ...prev,
                image_file: file
            }));
        const reader = new FileReader();
        reader.onloadend = ()=>{
            setImagePreview(reader.result);
        };
        reader.readAsDataURL(file);
    };
    // Check if current user is admin
    const checkIsAdmin = async (userId)=>{
        try {
            const { data: profile, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('profiles').select('role').eq('id', userId).single();
            if (error) {
                console.error('Error checking admin status:', error);
                return false;
            }
            return profile?.role === 'admin';
        } catch (error) {
            console.error('Error checking admin:', error);
            return false;
        }
    };
    // Upload image function
    const uploadImage = async (file)=>{
        try {
            setUploading(true);
            const fileExt = file.name.split('.').pop();
            const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
            const filePath = `notifications/${fileName}`;
            const { error: uploadError } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].storage.from('notification-images').upload(filePath, file, {
                cacheControl: '3600',
                upsert: false,
                contentType: file.type
            });
            if (uploadError) {
                if (uploadError.message?.includes('bucket') || uploadError.message?.includes('not found')) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error('Storage bucket not configured. Please create "notification-images" bucket in Supabase Storage.');
                    throw new Error('Storage bucket not configured');
                }
                throw uploadError;
            }
            const { data: { publicUrl } } = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].storage.from('notification-images').getPublicUrl(filePath);
            return publicUrl;
        } catch (error) {
            console.error('Image upload error:', error);
            throw new Error(`Failed to upload image: ${error.message}`);
        } finally{
            setUploading(false);
        }
    };
    const testBucket = async ()=>{
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].storage.from('notification-images').list();
        console.log('Bucket test:', {
            data,
            error
        });
    };
    testBucket();
    // Remove image
    const removeImage = ()=>{
        setNotification((prev)=>({
                ...prev,
                image_file: null,
                image_url: ''
            }));
        setImagePreview(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };
    // Validate notification data
    const validateNotification = ()=>{
        const errors = [];
        if (!notification.title.trim()) {
            errors.push('Title is required');
        }
        if (!notification.message.trim()) {
            errors.push('Message is required');
        }
        // For fullscreen/urgent notifications, warn about missing image
        if ([
            'fullscreen',
            'urgent',
            'important'
        ].includes(notification.type) && !notification.image_file && !notification.image_url) {
            if (!window.confirm(`${notification.type.charAt(0).toUpperCase() + notification.type.slice(1)} notifications work better with images. Continue without image?`)) {
                errors.push('Image recommended for this notification type');
            }
        }
        if (notification.target_type === 'device' && notification.target_criteria.device_types.length === 0) {
            errors.push('Please select at least one device type');
        }
        if ([
            'location',
            'search_history'
        ].includes(notification.target_type) && notification.target_criteria.regions.length === 0) {
            errors.push('Please select at least one region');
        }
        if (notification.target_type === 'user_group' && notification.target_criteria.user_groups.length === 0) {
            errors.push('Please select at least one user group');
        }
        return errors;
    };
    // Get complete user data (users + profiles)
    const getCompleteUserData = async ()=>{
        try {
            const { data: usersData, error: usersError } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('users').select('id, first_name, last_name, email, created_at');
            if (usersError) throw usersError;
            const { data: profilesData, error: profilesError } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('profiles').select('id, role, last_location, device_info, last_seen_at');
            if (profilesError) throw profilesError;
            const profilesMap = new Map(profilesData?.map((p)=>[
                    p.id,
                    p
                ]) || []);
            return usersData?.map((user)=>({
                    id: user.id,
                    first_name: user.first_name,
                    last_name: user.last_name,
                    email: user.email,
                    created_at: user.created_at,
                    role: profilesMap.get(user.id)?.role || 'user',
                    last_location: profilesMap.get(user.id)?.last_location,
                    device_info: profilesMap.get(user.id)?.device_info,
                    last_seen_at: profilesMap.get(user.id)?.last_seen_at
                })) || [];
        } catch (error) {
            console.error('Error getting user data:', error);
            return [];
        }
    };
    // Create notification in database and distribute to users
    const createNotificationAndDistribute = async (imageUrl = '')=>{
        try {
            const { data: { user } } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.getUser();
            if (!user) {
                throw new Error('You must be logged in to create notifications');
            }
            const isAdmin = await checkIsAdmin(user.id);
            if (!isAdmin) {
                throw new Error('You must be an admin to create notifications');
            }
            // Prepare notification data
            const notificationData = {
                title: notification.title,
                message: notification.message,
                type: notification.type,
                category: notification.category,
                priority: notification.priority,
                target_type: notification.target_type,
                created_by: user.id,
                sent_count: 0,
                read_count: 0,
                created_at: new Date().toISOString(),
                vibration_pattern: notification.vibration_pattern
            };
            if (imageUrl) {
                notificationData.image_url = imageUrl;
            }
            if (notification.target_type !== 'all' && Object.keys(notification.target_criteria).length > 0) {
                notificationData.target_criteria = notification.target_criteria;
            }
            if (notification.scheduled_for) {
                notificationData.scheduled_for = notification.scheduled_for;
            }
            if (notification.expires_at) {
                notificationData.expires_at = notification.expires_at;
            }
            if (notification.action_url) {
                notificationData.action_url = notification.action_url;
            }
            if (notification.action_text) {
                notificationData.action_text = notification.action_text;
            }
            // Create notification
            const { data: createdNotification, error: notificationError } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('notifications').insert([
                notificationData
            ]).select().single();
            if (notificationError) {
                console.error('Database insertion error:', notificationError);
                throw notificationError;
            }
            // Get users and create user_notifications
            const users = await getCompleteUserData();
            let filteredUsers = users;
            // Filter users based on target criteria
            if (createdNotification.target_type !== 'all') {
                const criteria = createdNotification.target_criteria || {};
                switch(createdNotification.target_type){
                    case 'location':
                        filteredUsers = users.filter((user)=>{
                            const region = user.last_location?.region;
                            return region && criteria.regions?.includes(region);
                        });
                        break;
                    case 'search_history':
                        const { data: searchHistories } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('search_history').select('user_id, destination, start_point');
                        const userSearches = {};
                        searchHistories?.forEach((search)=>{
                            if (!userSearches[search.user_id]) {
                                userSearches[search.user_id] = [];
                            }
                            userSearches[search.user_id].push(search);
                        });
                        filteredUsers = users.filter((user)=>{
                            const searches = userSearches[user.id] || [];
                            const regionSearches = searches.filter((search)=>criteria.regions?.some((region)=>search.destination?.toLowerCase().includes(region.toLowerCase()) || search.start_point?.toLowerCase().includes(region.toLowerCase())));
                            const uniqueRegionSearches = new Set(regionSearches.map((s)=>s.destination)).size;
                            return uniqueRegionSearches >= (criteria.min_searches || 1);
                        });
                        break;
                    case 'device':
                        filteredUsers = users.filter((user)=>{
                            const deviceType = user.device_info?.device_type;
                            return deviceType && criteria.device_types?.includes(deviceType);
                        });
                        break;
                    case 'user_group':
                        filteredUsers = users.filter((user)=>criteria.user_groups?.includes(user.role || 'user'));
                        break;
                }
            }
            // Create user_notifications for filtered users
            const userNotifications = filteredUsers.map((user)=>({
                    user_id: user.id,
                    notification_id: createdNotification.id,
                    is_read: false,
                    read_at: null,
                    created_at: new Date().toISOString()
                }));
            if (userNotifications.length > 0) {
                // Insert user notifications
                const { error: userNotificationsError } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('user_notifications').insert(userNotifications);
                if (userNotificationsError) {
                    console.error('Error creating user notifications:', userNotificationsError);
                    throw userNotificationsError;
                }
                // Update sent count
                const { error: updateError } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('notifications').update({
                    sent_count: userNotifications.length
                }).eq('id', createdNotification.id);
                if (updateError) {
                    console.error('Error updating sent count:', updateError);
                }
            }
            return {
                notification: createdNotification,
                userCount: userNotifications.length
            };
        } catch (error) {
            console.error('Create notification DB error:', error);
            throw error;
        }
    };
    // Main form submission handler
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            setIsSubmitting(true);
            // Validate form
            const errors = validateNotification();
            if (errors.length > 0) {
                errors.forEach((error)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(error));
                return;
            }
            // Check if user is admin
            const { data: { user } } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.getUser();
            if (!user) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error('You must be logged in to create notifications');
                return;
            }
            const isAdmin = await checkIsAdmin(user.id);
            if (!isAdmin) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error('You must be an admin to create notifications');
                return;
            }
            // Upload image if exists
            let finalImageUrl = notification.image_url || '';
            if (notification.image_file) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].loading('Uploading image...', {
                    id: 'image-upload'
                });
                try {
                    finalImageUrl = await uploadImage(notification.image_file);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success('Image uploaded successfully!', {
                        id: 'image-upload'
                    });
                } catch (error) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error('Image upload failed: ' + error.message, {
                        id: 'image-upload'
                    });
                    if (!confirm('Image upload failed. Continue without image?')) {
                        setIsSubmitting(false);
                        return;
                    }
                    finalImageUrl = '';
                }
            }
            // Create notification and distribute
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].loading('Creating and sending notification...', {
                id: 'notification-create'
            });
            const result = await createNotificationAndDistribute(finalImageUrl);
            if (result) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(`Notification created and sent to ${result.userCount} users!`, {
                    id: 'notification-create',
                    duration: 4000
                });
                resetForm();
                onSuccess();
            }
        } catch (error) {
            console.error('Submit error:', error);
            let errorMessage = error.message || 'Failed to create notification';
            if (error.code === '42501') {
                errorMessage = 'Permission denied. Please check if you have proper database permissions.';
            } else if (error.code === '23505') {
                errorMessage = 'Duplicate notification detected.';
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(errorMessage, {
                id: 'notification-create',
                duration: 5000
            });
        } finally{
            setIsSubmitting(false);
        }
    };
    // Reset form
    const resetForm = ()=>{
        setNotification({
            title: '',
            message: '',
            type: 'banner',
            category: 'general',
            priority: 'medium',
            image_file: null,
            image_url: '',
            target_type: 'all',
            target_criteria: {
                locations: [],
                regions: [],
                device_types: [],
                user_groups: [],
                min_searches: 1
            },
            scheduled_for: '',
            expires_at: '',
            action_url: '',
            action_text: '',
            vibration_pattern: 'default'
        });
        setImagePreview(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };
    // Get icon for notification type
    const getNotificationIcon = (type)=>{
        const Icon = notificationTypes.find((nt)=>nt.id === type)?.icon || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiBell"];
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
            size: 20
        }, void 0, false, {
            fileName: "[project]/components/notifications/CreateNotification.tsx",
            lineNumber: 553,
            columnNumber: 12
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-background p-6 rounded-lg shadow",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold text-text mb-6",
                children: "Create Notification"
            }, void 0, false, {
                fileName: "[project]/components/notifications/CreateNotification.tsx",
                lineNumber: 558,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                className: "space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white p-6 rounded-lg border border-border",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold text-text mb-4",
                                children: "Basic Information"
                            }, void 0, false, {
                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                lineNumber: 563,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-text mb-2",
                                                children: "Title *"
                                            }, void 0, false, {
                                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                lineNumber: 568,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: notification.title,
                                                onChange: (e)=>setNotification((prev)=>({
                                                            ...prev,
                                                            title: e.target.value
                                                        })),
                                                className: "w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary",
                                                placeholder: "Enter notification title",
                                                required: true,
                                                disabled: isSubmitting || uploading
                                            }, void 0, false, {
                                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                lineNumber: 571,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                        lineNumber: 567,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-text mb-2",
                                                children: "Message *"
                                            }, void 0, false, {
                                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                lineNumber: 584,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                value: notification.message,
                                                onChange: (e)=>setNotification((prev)=>({
                                                            ...prev,
                                                            message: e.target.value
                                                        })),
                                                className: "w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary",
                                                rows: 3,
                                                placeholder: "Enter notification message",
                                                required: true,
                                                disabled: isSubmitting || uploading
                                            }, void 0, false, {
                                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                lineNumber: 587,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                        lineNumber: 583,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                lineNumber: 565,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                        lineNumber: 562,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white p-6 rounded-lg border border-border",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold text-text mb-4",
                                children: "Notification Settings"
                            }, void 0, false, {
                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                lineNumber: 602,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-text mb-2",
                                                children: "Notification Type *"
                                            }, void 0, false, {
                                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                lineNumber: 607,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: notification.type,
                                                onChange: (e)=>setNotification((prev)=>({
                                                            ...prev,
                                                            type: e.target.value,
                                                            // Auto-set priority based on type
                                                            priority: e.target.value === 'urgent' ? 'critical' : e.target.value === 'important' ? 'high' : 'medium'
                                                        })),
                                                className: "w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary",
                                                disabled: isSubmitting || uploading,
                                                children: notificationTypes.map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: type.id,
                                                        children: type.label
                                                    }, type.id, false, {
                                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                        lineNumber: 623,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                lineNumber: 610,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-text-light mt-1",
                                                children: notificationTypes.find((t)=>t.id === notification.type)?.description
                                            }, void 0, false, {
                                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                lineNumber: 628,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                        lineNumber: 606,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-text mb-2",
                                                children: "Category"
                                            }, void 0, false, {
                                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                lineNumber: 635,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 gap-2",
                                                children: notificationCategories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setNotification((prev)=>({
                                                                    ...prev,
                                                                    category: category.id
                                                                })),
                                                        className: `px-3 py-2 text-sm rounded-md border ${notification.category === category.id ? 'ring-2 ring-primary' : 'border-border'} ${category.color}`,
                                                        disabled: isSubmitting || uploading,
                                                        children: category.label
                                                    }, category.id, false, {
                                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                        lineNumber: 640,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                lineNumber: 638,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                        lineNumber: 634,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-text mb-2",
                                                children: "Priority Level"
                                            }, void 0, false, {
                                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                lineNumber: 655,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 gap-2",
                                                children: priorityLevels.map((priority)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setNotification((prev)=>({
                                                                    ...prev,
                                                                    priority: priority.id
                                                                })),
                                                        className: `px-3 py-2 text-sm rounded-md border ${notification.priority === priority.id ? 'ring-2 ring-primary' : 'border-border'} ${priority.color}`,
                                                        disabled: isSubmitting || uploading,
                                                        children: priority.label
                                                    }, priority.id, false, {
                                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                        lineNumber: 660,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                lineNumber: 658,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-text-light mt-1",
                                                children: priorityLevels.find((p)=>p.id === notification.priority)?.description
                                            }, void 0, false, {
                                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                lineNumber: 671,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                        lineNumber: 654,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                lineNumber: 604,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-text mb-2",
                                        children: "Vibration Pattern (Mobile)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                        lineNumber: 679,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-4",
                                        children: vibrationPatterns.map((pattern)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "flex items-center space-x-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "radio",
                                                        checked: notification.vibration_pattern === pattern.id,
                                                        onChange: ()=>setNotification((prev)=>({
                                                                    ...prev,
                                                                    vibration_pattern: pattern.id
                                                                })),
                                                        className: "text-primary focus:ring-primary",
                                                        disabled: isSubmitting || uploading
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                        lineNumber: 685,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm",
                                                        children: pattern.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                        lineNumber: 692,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, pattern.id, true, {
                                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                lineNumber: 684,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                        lineNumber: 682,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                lineNumber: 678,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                        lineNumber: 601,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white p-6 rounded-lg border border-border",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold text-text mb-4",
                                children: "Notification Image"
                            }, void 0, false, {
                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                lineNumber: 701,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border border-border rounded-lg p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-text mb-3",
                                        children: [
                                            'fullscreen',
                                            'urgent',
                                            'important'
                                        ].includes(notification.type) ? 'Image (Recommended)' : 'Image (Optional)'
                                    }, void 0, false, {
                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                        lineNumber: 704,
                                        columnNumber: 13
                                    }, this),
                                    imagePreview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: imagePreview,
                                                alt: "Preview",
                                                className: "w-full h-48 object-cover rounded-lg"
                                            }, void 0, false, {
                                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                lineNumber: 710,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: removeImage,
                                                className: "absolute top-2 right-2 p-2 bg-error text-white rounded-full hover:bg-error-dark",
                                                disabled: isSubmitting || uploading,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiX"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                    lineNumber: 721,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                lineNumber: 715,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                        lineNumber: 709,
                                        columnNumber: 15
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-2 border-dashed border-border rounded-lg p-8 text-center cursor-pointer hover:bg-gray-50 transition-colors",
                                        onClick: ()=>!isSubmitting && !uploading && fileInputRef.current?.click(),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiImage"], {
                                                className: "mx-auto text-4xl text-text-light mb-3"
                                            }, void 0, false, {
                                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                lineNumber: 729,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-text font-medium mb-1",
                                                children: "Upload Image"
                                            }, void 0, false, {
                                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                lineNumber: 730,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-text-light text-sm",
                                                children: notification.type === 'banner' ? 'Recommended: 600x400px, max 5MB' : 'Recommended: 1200x800px, max 5MB'
                                            }, void 0, false, {
                                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                lineNumber: 731,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                ref: fileInputRef,
                                                type: "file",
                                                accept: "image/*",
                                                onChange: (e)=>{
                                                    const file = e.target.files?.[0];
                                                    if (file) handleFileSelect(file);
                                                },
                                                className: "hidden",
                                                disabled: isSubmitting || uploading
                                            }, void 0, false, {
                                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                lineNumber: 736,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                        lineNumber: 725,
                                        columnNumber: 15
                                    }, this),
                                    uploading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-3 text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "inline-block animate-spin rounded-full h-5 w-5 border-b-2 border-primary"
                                            }, void 0, false, {
                                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                lineNumber: 752,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ml-2 text-text-light",
                                                children: "Uploading image..."
                                            }, void 0, false, {
                                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                lineNumber: 753,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                        lineNumber: 751,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                lineNumber: 703,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                        lineNumber: 700,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white p-6 rounded-lg border border-border",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold text-text mb-4",
                                children: "Target Audience"
                            }, void 0, false, {
                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                lineNumber: 761,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-text mb-2",
                                            children: "Target Type"
                                        }, void 0, false, {
                                            fileName: "[project]/components/notifications/CreateNotification.tsx",
                                            lineNumber: 765,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: notification.target_type,
                                            onChange: (e)=>setNotification((prev)=>({
                                                        ...prev,
                                                        target_type: e.target.value
                                                    })),
                                            className: "w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary",
                                            disabled: isSubmitting || uploading,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "all",
                                                    children: "All Users"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                    lineNumber: 774,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "location",
                                                    children: "By Location"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                    lineNumber: 775,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "search_history",
                                                    children: "By Search History"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                    lineNumber: 776,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "device",
                                                    children: "By Device Type"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                    lineNumber: 777,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "user_group",
                                                    children: "By User Group"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                    lineNumber: 778,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/notifications/CreateNotification.tsx",
                                            lineNumber: 768,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/notifications/CreateNotification.tsx",
                                    lineNumber: 764,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                lineNumber: 763,
                                columnNumber: 11
                            }, this),
                            [
                                'location',
                                'search_history'
                            ].includes(notification.target_type) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-text mb-2",
                                        children: "Target Regions *"
                                    }, void 0, false, {
                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                        lineNumber: 788,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 md:grid-cols-3 gap-2",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["regions"].map((region)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "flex items-center space-x-2 p-2 border border-border rounded hover:bg-gray-50 cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "checkbox",
                                                        checked: notification.target_criteria.regions.includes(region),
                                                        onChange: (e)=>{
                                                            const newRegions = e.target.checked ? [
                                                                ...notification.target_criteria.regions,
                                                                region
                                                            ] : notification.target_criteria.regions.filter((r)=>r !== region);
                                                            setNotification((prev)=>({
                                                                    ...prev,
                                                                    target_criteria: {
                                                                        ...prev.target_criteria,
                                                                        regions: newRegions
                                                                    }
                                                                }));
                                                        },
                                                        className: "rounded text-primary focus:ring-primary",
                                                        disabled: isSubmitting || uploading
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                        lineNumber: 794,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm",
                                                        children: region
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                        lineNumber: 812,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, region, true, {
                                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                lineNumber: 793,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                        lineNumber: 791,
                                        columnNumber: 15
                                    }, this),
                                    notification.target_criteria.regions.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-error text-sm mt-1",
                                        children: "Please select at least one region"
                                    }, void 0, false, {
                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                        lineNumber: 817,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                lineNumber: 787,
                                columnNumber: 13
                            }, this),
                            notification.target_type === 'device' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-text mb-2",
                                        children: "Device Types *"
                                    }, void 0, false, {
                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                        lineNumber: 825,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-2",
                                        children: [
                                            'ios',
                                            'android'
                                        ].map((deviceType)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "flex items-center space-x-2 p-2 border border-border rounded hover:bg-gray-50 cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "checkbox",
                                                        checked: notification.target_criteria.device_types.includes(deviceType),
                                                        onChange: (e)=>{
                                                            const newDeviceTypes = e.target.checked ? [
                                                                ...notification.target_criteria.device_types,
                                                                deviceType
                                                            ] : notification.target_criteria.device_types.filter((d)=>d !== deviceType);
                                                            setNotification((prev)=>({
                                                                    ...prev,
                                                                    target_criteria: {
                                                                        ...prev.target_criteria,
                                                                        device_types: newDeviceTypes
                                                                    }
                                                                }));
                                                        },
                                                        className: "rounded text-primary focus:ring-primary",
                                                        disabled: isSubmitting || uploading
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                        lineNumber: 831,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm capitalize",
                                                        children: deviceType
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                        lineNumber: 849,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, deviceType, true, {
                                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                lineNumber: 830,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                        lineNumber: 828,
                                        columnNumber: 15
                                    }, this),
                                    notification.target_criteria.device_types.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-error text-sm mt-1",
                                        children: "Please select at least one device type"
                                    }, void 0, false, {
                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                        lineNumber: 854,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                lineNumber: 824,
                                columnNumber: 13
                            }, this),
                            notification.target_type === 'search_history' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-text mb-2",
                                        children: "Minimum Searches Required"
                                    }, void 0, false, {
                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                        lineNumber: 861,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        min: "1",
                                        max: "100",
                                        value: notification.target_criteria.min_searches,
                                        onChange: (e)=>setNotification((prev)=>({
                                                    ...prev,
                                                    target_criteria: {
                                                        ...prev.target_criteria,
                                                        min_searches: parseInt(e.target.value) || 1
                                                    }
                                                })),
                                        className: "w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary",
                                        disabled: isSubmitting || uploading
                                    }, void 0, false, {
                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                        lineNumber: 864,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-text-light mt-1",
                                        children: "Send to users who have searched at least this many times in target regions"
                                    }, void 0, false, {
                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                        lineNumber: 879,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                lineNumber: 860,
                                columnNumber: 13
                            }, this),
                            notification.target_type === 'user_group' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-text mb-2",
                                        children: "Target User Groups *"
                                    }, void 0, false, {
                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                        lineNumber: 888,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-2",
                                        children: [
                                            'user',
                                            'admin'
                                        ].map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "flex items-center space-x-2 p-2 border border-border rounded hover:bg-gray-50 cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "checkbox",
                                                        checked: notification.target_criteria.user_groups.includes(group),
                                                        onChange: (e)=>{
                                                            const newGroups = e.target.checked ? [
                                                                ...notification.target_criteria.user_groups,
                                                                group
                                                            ] : notification.target_criteria.user_groups.filter((g)=>g !== group);
                                                            setNotification((prev)=>({
                                                                    ...prev,
                                                                    target_criteria: {
                                                                        ...prev.target_criteria,
                                                                        user_groups: newGroups
                                                                    }
                                                                }));
                                                        },
                                                        className: "rounded text-primary focus:ring-primary",
                                                        disabled: isSubmitting || uploading
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                        lineNumber: 894,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm capitalize",
                                                        children: group
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                        lineNumber: 912,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, group, true, {
                                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                lineNumber: 893,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                        lineNumber: 891,
                                        columnNumber: 15
                                    }, this),
                                    notification.target_criteria.user_groups.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-error text-sm mt-1",
                                        children: "Please select at least one user group"
                                    }, void 0, false, {
                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                        lineNumber: 917,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                lineNumber: 887,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                        lineNumber: 760,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white p-6 rounded-lg border border-border",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setShowAdvanced(!showAdvanced),
                                className: "flex items-center justify-between w-full text-left mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold text-text",
                                        children: "Advanced Options"
                                    }, void 0, false, {
                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                        lineNumber: 930,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-primary",
                                        children: showAdvanced ? 'Hide' : 'Show'
                                    }, void 0, false, {
                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                        lineNumber: 931,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                lineNumber: 925,
                                columnNumber: 11
                            }, this),
                            showAdvanced && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-text mb-2",
                                                        children: "Schedule For (Optional)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                        lineNumber: 941,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "datetime-local",
                                                        value: notification.scheduled_for,
                                                        onChange: (e)=>setNotification((prev)=>({
                                                                    ...prev,
                                                                    scheduled_for: e.target.value
                                                                })),
                                                        className: "w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary",
                                                        disabled: isSubmitting || uploading
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                        lineNumber: 944,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-text-light mt-1",
                                                        children: "Schedule this notification for a future date/time"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                        lineNumber: 951,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                lineNumber: 940,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-text mb-2",
                                                        children: "Expires At (Optional)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                        lineNumber: 957,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "datetime-local",
                                                        value: notification.expires_at,
                                                        onChange: (e)=>setNotification((prev)=>({
                                                                    ...prev,
                                                                    expires_at: e.target.value
                                                                })),
                                                        className: "w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary",
                                                        disabled: isSubmitting || uploading
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                        lineNumber: 960,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-text-light mt-1",
                                                        children: "Automatically remove after this date/time"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                        lineNumber: 967,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                lineNumber: 956,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                        lineNumber: 939,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-text mb-2",
                                                        children: "Action Button Text (Optional)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                        lineNumber: 976,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: notification.action_text,
                                                        onChange: (e)=>setNotification((prev)=>({
                                                                    ...prev,
                                                                    action_text: e.target.value
                                                                })),
                                                        className: "w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary",
                                                        placeholder: "e.g., View Details, Open App",
                                                        disabled: isSubmitting || uploading
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                        lineNumber: 979,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                lineNumber: 975,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-text mb-2",
                                                        children: "Action URL (Optional)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                        lineNumber: 990,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "url",
                                                        value: notification.action_url,
                                                        onChange: (e)=>setNotification((prev)=>({
                                                                    ...prev,
                                                                    action_url: e.target.value
                                                                })),
                                                        className: "w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary",
                                                        placeholder: "https://example.com/action",
                                                        disabled: isSubmitting || uploading
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                        lineNumber: 993,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                lineNumber: 989,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                        lineNumber: 974,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                lineNumber: 937,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                        lineNumber: 924,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-end space-x-4 pt-4 border-t border-border",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onSuccess,
                                className: "px-6 py-2 border border-border rounded-lg text-text hover:bg-gray-50 transition-colors disabled:opacity-50",
                                disabled: isSubmitting || uploading,
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                lineNumber: 1009,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                disabled: isSubmitting || uploading,
                                className: "px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2",
                                children: isSubmitting || uploading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "animate-spin rounded-full h-4 w-4 border-b-2 border-white"
                                        }, void 0, false, {
                                            fileName: "[project]/components/notifications/CreateNotification.tsx",
                                            lineNumber: 1024,
                                            columnNumber: 17
                                        }, this),
                                        uploading ? 'Uploading...' : 'Creating...'
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiSave"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/components/notifications/CreateNotification.tsx",
                                            lineNumber: 1029,
                                            columnNumber: 17
                                        }, this),
                                        "Create & Send Notification"
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                lineNumber: 1017,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                        lineNumber: 1008,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/notifications/CreateNotification.tsx",
                lineNumber: 560,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/notifications/CreateNotification.tsx",
        lineNumber: 557,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/dashboard/notifications/create/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CreateNotificationPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$notifications$2f$CreateNotification$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/notifications/CreateNotification.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function CreateNotificationPage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSuccess = ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success('Notification created successfully!');
        router.push('/dashboard/notifications');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl font-bold text-text",
                                children: "Create Notification"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/notifications/create/page.tsx",
                                lineNumber: 24,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-text-light",
                                children: "Send notifications to users based on various criteria"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/notifications/create/page.tsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/notifications/create/page.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/dashboard/notifications",
                        className: "flex items-center space-x-2 px-4 py-2 border border-border rounded-lg hover:bg-gray-50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiArrowLeft"], {}, void 0, false, {
                                fileName: "[project]/app/dashboard/notifications/create/page.tsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Back to Notifications"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/notifications/create/page.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/notifications/create/page.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/notifications/create/page.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-lg shadow",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 border-b border-border",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-semibold text-text",
                                children: "Notification Details"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/notifications/create/page.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-text-light",
                                children: "Fill in the details below to create a new notification"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/notifications/create/page.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/notifications/create/page.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$notifications$2f$CreateNotification$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateNotification"], {
                            onSuccess: handleSuccess
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/notifications/create/page.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/notifications/create/page.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/notifications/create/page.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-blue-50 border border-blue-200 rounded-lg p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold text-text mb-2",
                        children: "📋 Targeting Tips"
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/notifications/create/page.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "space-y-2 text-text-light",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "flex items-start",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-primary mr-2",
                                        children: "•"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/notifications/create/page.tsx",
                                        lineNumber: 52,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Location-based:"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/notifications/create/page.tsx",
                                                lineNumber: 53,
                                                columnNumber: 19
                                            }, this),
                                            " Target users currently in specific regions"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/notifications/create/page.tsx",
                                        lineNumber: 53,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/notifications/create/page.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "flex items-start",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-primary mr-2",
                                        children: "•"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/notifications/create/page.tsx",
                                        lineNumber: 56,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Search history:"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/notifications/create/page.tsx",
                                                lineNumber: 57,
                                                columnNumber: 19
                                            }, this),
                                            " Target users who have searched for routes in specific regions (min. 2 searches)"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/notifications/create/page.tsx",
                                        lineNumber: 57,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/notifications/create/page.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "flex items-start",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-primary mr-2",
                                        children: "•"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/notifications/create/page.tsx",
                                        lineNumber: 60,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Device type:"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/notifications/create/page.tsx",
                                                lineNumber: 61,
                                                columnNumber: 19
                                            }, this),
                                            " Target users by their device (iOS, Android, etc.)"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/notifications/create/page.tsx",
                                        lineNumber: 61,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/notifications/create/page.tsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "flex items-start",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-primary mr-2",
                                        children: "•"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/notifications/create/page.tsx",
                                        lineNumber: 64,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "IMEI:"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/notifications/create/page.tsx",
                                                lineNumber: 65,
                                                columnNumber: 19
                                            }, this),
                                            " Target specific devices by their IMEI number"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/notifications/create/page.tsx",
                                        lineNumber: 65,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/notifications/create/page.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "flex items-start",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-primary mr-2",
                                        children: "•"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/notifications/create/page.tsx",
                                        lineNumber: 68,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "All users:"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/notifications/create/page.tsx",
                                                lineNumber: 69,
                                                columnNumber: 19
                                            }, this),
                                            " Send to everyone in the system"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/notifications/create/page.tsx",
                                        lineNumber: 69,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/notifications/create/page.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/notifications/create/page.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/notifications/create/page.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/dashboard/notifications/create/page.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_7401c4cb._.js.map