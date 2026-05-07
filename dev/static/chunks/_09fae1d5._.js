(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/constants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/notifications/CreateNotification.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/notifications/CreateNotification.tsx
__turbopack_context__.s([
    "CreateNotification",
    ()=>CreateNotification
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const notificationTypes = [
    {
        id: 'banner',
        label: 'Banner Notification',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiBell"],
        description: 'Standard notification that appears as a banner'
    },
    {
        id: 'fullscreen',
        label: 'Full Screen Notification',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiAlertTriangle"],
        description: 'Takes over full screen - use for important alerts'
    },
    {
        id: 'urgent',
        label: 'Urgent Alert',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiAlertTriangle"],
        description: 'High priority with urgent vibration pattern'
    },
    {
        id: 'important',
        label: 'Important Update',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiStar"],
        description: 'Important system or feature updates'
    },
    {
        id: 'promotional',
        label: 'Promotional',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiStar"],
        description: 'Promotional offers and discounts'
    },
    {
        id: 'location',
        label: 'Location Based',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiMapPin"],
        description: 'Notifications based on user location'
    },
    {
        id: 'search',
        label: 'Search Related',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiSearch"],
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
    _s();
    const [notification, setNotification] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
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
    const [uploading, setUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [imagePreview, setImagePreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [showAdvanced, setShowAdvanced] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Handle file selection for preview
    const handleFileSelect = (file)=>{
        if (file.size > 5 * 1024 * 1024) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Image must be less than 5MB');
            return;
        }
        if (!file.type.startsWith('image/')) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Please upload an image file');
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
            const { data: profile, error: error_0 } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('profiles').select('role').eq('id', userId).single();
            if (error_0) {
                console.error('Error checking admin status:', error_0);
                return false;
            }
            return profile?.role === 'admin';
        } catch (error) {
            console.error('Error checking admin:', error);
            return false;
        }
    };
    // Upload image function
    const uploadImage = async (file_0)=>{
        try {
            setUploading(true);
            const fileExt = file_0.name.split('.').pop();
            const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
            const filePath = `notifications/${fileName}`;
            const { error: uploadError } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].storage.from('notification-images').upload(filePath, file_0, {
                cacheControl: '3600',
                upsert: false,
                contentType: file_0.type
            });
            if (uploadError) {
                if (uploadError.message?.includes('bucket') || uploadError.message?.includes('not found')) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Storage bucket not configured. Please create "notification-images" bucket in Supabase Storage.');
                    throw new Error('Storage bucket not configured');
                }
                throw uploadError;
            }
            const { data: { publicUrl } } = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].storage.from('notification-images').getPublicUrl(filePath);
            return publicUrl;
        } catch (error_1) {
            console.error('Image upload error:', error_1);
            throw new Error(`Failed to upload image: ${error_1.message}`);
        } finally{
            setUploading(false);
        }
    };
    const testBucket = async ()=>{
        const { data, error: error_2 } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].storage.from('notification-images').list();
        console.log('Bucket test:', {
            data,
            error: error_2
        });
    };
    testBucket();
    // Remove image
    const removeImage = ()=>{
        setNotification((prev_0)=>({
                ...prev_0,
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
            const { data: usersData, error: usersError } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('users').select('id, first_name, last_name, email, created_at');
            if (usersError) throw usersError;
            const { data: profilesData, error: profilesError } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('profiles').select('id, role, last_location, device_info, last_seen_at');
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
        } catch (error_3) {
            console.error('Error getting user data:', error_3);
            return [];
        }
    };
    // Create notification in database and distribute to users
    const createNotificationAndDistribute = async (imageUrl = '')=>{
        try {
            const { data: { user: user_0 } } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getUser();
            if (!user_0) {
                throw new Error('You must be logged in to create notifications');
            }
            const isAdmin = await checkIsAdmin(user_0.id);
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
                created_by: user_0.id,
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
            const { data: createdNotification, error: notificationError } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('notifications').insert([
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
                        filteredUsers = users.filter((user_4)=>{
                            const region_0 = user_4.last_location?.region;
                            return region_0 && criteria.regions?.includes(region_0);
                        });
                        break;
                    case 'search_history':
                        const { data: searchHistories } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('search_history').select('user_id, destination, start_point');
                        const userSearches = {};
                        searchHistories?.forEach((search)=>{
                            if (!userSearches[search.user_id]) {
                                userSearches[search.user_id] = [];
                            }
                            userSearches[search.user_id].push(search);
                        });
                        filteredUsers = users.filter((user_3)=>{
                            const searches = userSearches[user_3.id] || [];
                            const regionSearches = searches.filter((search_0)=>criteria.regions?.some((region)=>search_0.destination?.toLowerCase().includes(region.toLowerCase()) || search_0.start_point?.toLowerCase().includes(region.toLowerCase())));
                            const uniqueRegionSearches = new Set(regionSearches.map((s)=>s.destination)).size;
                            return uniqueRegionSearches >= (criteria.min_searches || 1);
                        });
                        break;
                    case 'device':
                        filteredUsers = users.filter((user_2)=>{
                            const deviceType = user_2.device_info?.device_type;
                            return deviceType && criteria.device_types?.includes(deviceType);
                        });
                        break;
                    case 'user_group':
                        filteredUsers = users.filter((user_1)=>criteria.user_groups?.includes(user_1.role || 'user'));
                        break;
                }
            }
            // Create user_notifications for filtered users
            const userNotifications = filteredUsers.map((user_5)=>({
                    user_id: user_5.id,
                    notification_id: createdNotification.id,
                    is_read: false,
                    read_at: null,
                    created_at: new Date().toISOString()
                }));
            if (userNotifications.length > 0) {
                // Insert user notifications
                const { error: userNotificationsError } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('user_notifications').insert(userNotifications);
                if (userNotificationsError) {
                    console.error('Error creating user notifications:', userNotificationsError);
                    throw userNotificationsError;
                }
                // Update sent count
                const { error: updateError } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('notifications').update({
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
        } catch (error_4) {
            console.error('Create notification DB error:', error_4);
            throw error_4;
        }
    };
    // Main form submission handler
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            setIsSubmitting(true);
            // Validate form
            const errors_0 = validateNotification();
            if (errors_0.length > 0) {
                errors_0.forEach((error_6)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(error_6));
                return;
            }
            // Check if user is admin
            const { data: { user: user_6 } } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getUser();
            if (!user_6) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('You must be logged in to create notifications');
                return;
            }
            const isAdmin_0 = await checkIsAdmin(user_6.id);
            if (!isAdmin_0) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('You must be an admin to create notifications');
                return;
            }
            // Upload image if exists
            let finalImageUrl = notification.image_url || '';
            if (notification.image_file) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].loading('Uploading image...', {
                    id: 'image-upload'
                });
                try {
                    finalImageUrl = await uploadImage(notification.image_file);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('Image uploaded successfully!', {
                        id: 'image-upload'
                    });
                } catch (error_7) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Image upload failed: ' + error_7.message, {
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
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].loading('Creating and sending notification...', {
                id: 'notification-create'
            });
            const result = await createNotificationAndDistribute(finalImageUrl);
            if (result) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Notification created and sent to ${result.userCount} users!`, {
                    id: 'notification-create',
                    duration: 4000
                });
                resetForm();
                onSuccess();
            }
        } catch (error_5) {
            console.error('Submit error:', error_5);
            let errorMessage = error_5.message || 'Failed to create notification';
            if (error_5.code === '42501') {
                errorMessage = 'Permission denied. Please check if you have proper database permissions.';
            } else if (error_5.code === '23505') {
                errorMessage = 'Duplicate notification detected.';
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(errorMessage, {
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
        const Icon = notificationTypes.find((nt)=>nt.id === type)?.icon || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiBell"];
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
            size: 20
        }, void 0, false, {
            fileName: "[project]/components/notifications/CreateNotification.tsx",
            lineNumber: 576,
            columnNumber: 12
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-background p-6 rounded-lg shadow",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold text-text mb-6",
                children: "Create Notification"
            }, void 0, false, {
                fileName: "[project]/components/notifications/CreateNotification.tsx",
                lineNumber: 579,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                className: "space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white p-6 rounded-lg border border-border",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold text-text mb-4",
                                children: "Basic Information"
                            }, void 0, false, {
                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                lineNumber: 584,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-text mb-2",
                                                children: "Title *"
                                            }, void 0, false, {
                                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                lineNumber: 589,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: notification.title,
                                                onChange: (e_0)=>setNotification((prev_1)=>({
                                                            ...prev_1,
                                                            title: e_0.target.value
                                                        })),
                                                className: "w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary",
                                                placeholder: "Enter notification title",
                                                required: true,
                                                disabled: isSubmitting || uploading
                                            }, void 0, false, {
                                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                lineNumber: 592,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                        lineNumber: 588,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-text mb-2",
                                                children: "Message *"
                                            }, void 0, false, {
                                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                lineNumber: 600,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                value: notification.message,
                                                onChange: (e_1)=>setNotification((prev_2)=>({
                                                            ...prev_2,
                                                            message: e_1.target.value
                                                        })),
                                                className: "w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary",
                                                rows: 3,
                                                placeholder: "Enter notification message",
                                                required: true,
                                                disabled: isSubmitting || uploading
                                            }, void 0, false, {
                                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                lineNumber: 603,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                        lineNumber: 599,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                lineNumber: 586,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                        lineNumber: 583,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white p-6 rounded-lg border border-border",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold text-text mb-4",
                                children: "Notification Settings"
                            }, void 0, false, {
                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                lineNumber: 613,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-text mb-2",
                                                children: "Notification Type *"
                                            }, void 0, false, {
                                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                lineNumber: 618,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: notification.type,
                                                onChange: (e_2)=>setNotification((prev_3)=>({
                                                            ...prev_3,
                                                            type: e_2.target.value,
                                                            // Auto-set priority based on type
                                                            priority: e_2.target.value === 'urgent' ? 'critical' : e_2.target.value === 'important' ? 'high' : 'medium'
                                                        })),
                                                className: "w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary",
                                                disabled: isSubmitting || uploading,
                                                children: notificationTypes.map((type_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: type_0.id,
                                                        children: type_0.label
                                                    }, type_0.id, false, {
                                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                        lineNumber: 627,
                                                        columnNumber: 50
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                lineNumber: 621,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-text-light mt-1",
                                                children: notificationTypes.find((t)=>t.id === notification.type)?.description
                                            }, void 0, false, {
                                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                lineNumber: 631,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                        lineNumber: 617,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-text mb-2",
                                                children: "Category"
                                            }, void 0, false, {
                                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                lineNumber: 638,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 gap-2",
                                                children: notificationCategories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setNotification((prev_4)=>({
                                                                    ...prev_4,
                                                                    category: category.id
                                                                })),
                                                        className: `px-3 py-2 text-sm rounded-md border ${notification.category === category.id ? 'ring-2 ring-primary' : 'border-border'} ${category.color}`,
                                                        disabled: isSubmitting || uploading,
                                                        children: category.label
                                                    }, category.id, false, {
                                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                        lineNumber: 642,
                                                        columnNumber: 57
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                lineNumber: 641,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                        lineNumber: 637,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-text mb-2",
                                                children: "Priority Level"
                                            }, void 0, false, {
                                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                lineNumber: 653,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 gap-2",
                                                children: priorityLevels.map((priority)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setNotification((prev_5)=>({
                                                                    ...prev_5,
                                                                    priority: priority.id
                                                                })),
                                                        className: `px-3 py-2 text-sm rounded-md border ${notification.priority === priority.id ? 'ring-2 ring-primary' : 'border-border'} ${priority.color}`,
                                                        disabled: isSubmitting || uploading,
                                                        children: priority.label
                                                    }, priority.id, false, {
                                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                        lineNumber: 657,
                                                        columnNumber: 49
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                lineNumber: 656,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-text-light mt-1",
                                                children: priorityLevels.find((p_0)=>p_0.id === notification.priority)?.description
                                            }, void 0, false, {
                                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                lineNumber: 664,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                        lineNumber: 652,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                lineNumber: 615,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-text mb-2",
                                        children: "Vibration Pattern (Mobile)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                        lineNumber: 672,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-4",
                                        children: vibrationPatterns.map((pattern)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "flex items-center space-x-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "radio",
                                                        checked: notification.vibration_pattern === pattern.id,
                                                        onChange: ()=>setNotification((prev_6)=>({
                                                                    ...prev_6,
                                                                    vibration_pattern: pattern.id
                                                                })),
                                                        className: "text-primary focus:ring-primary",
                                                        disabled: isSubmitting || uploading
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                        lineNumber: 677,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm",
                                                        children: pattern.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                        lineNumber: 681,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, pattern.id, true, {
                                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                lineNumber: 676,
                                                columnNumber: 49
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                        lineNumber: 675,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                lineNumber: 671,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                        lineNumber: 612,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white p-6 rounded-lg border border-border",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold text-text mb-4",
                                children: "Notification Image"
                            }, void 0, false, {
                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                lineNumber: 689,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border border-border rounded-lg p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-text mb-3",
                                        children: [
                                            'fullscreen',
                                            'urgent',
                                            'important'
                                        ].includes(notification.type) ? 'Image (Recommended)' : 'Image (Optional)'
                                    }, void 0, false, {
                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                        lineNumber: 692,
                                        columnNumber: 13
                                    }, this),
                                    imagePreview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: imagePreview,
                                                alt: "Preview",
                                                className: "w-full h-48 object-cover rounded-lg"
                                            }, void 0, false, {
                                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                lineNumber: 697,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: removeImage,
                                                className: "absolute top-2 right-2 p-2 bg-error text-white rounded-full hover:bg-error-dark",
                                                disabled: isSubmitting || uploading,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiX"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                    lineNumber: 699,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                lineNumber: 698,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                        lineNumber: 696,
                                        columnNumber: 29
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-2 border-dashed border-border rounded-lg p-8 text-center cursor-pointer hover:bg-gray-50 transition-colors",
                                        onClick: ()=>!isSubmitting && !uploading && fileInputRef.current?.click(),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiImage"], {
                                                className: "mx-auto text-4xl text-text-light mb-3"
                                            }, void 0, false, {
                                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                lineNumber: 702,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-text font-medium mb-1",
                                                children: "Upload Image"
                                            }, void 0, false, {
                                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                lineNumber: 703,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-text-light text-sm",
                                                children: notification.type === 'banner' ? 'Recommended: 600x400px, max 5MB' : 'Recommended: 1200x800px, max 5MB'
                                            }, void 0, false, {
                                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                lineNumber: 704,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                ref: fileInputRef,
                                                type: "file",
                                                accept: "image/*",
                                                onChange: (e_3)=>{
                                                    const file_1 = e_3.target.files?.[0];
                                                    if (file_1) handleFileSelect(file_1);
                                                },
                                                className: "hidden",
                                                disabled: isSubmitting || uploading
                                            }, void 0, false, {
                                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                lineNumber: 707,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                        lineNumber: 701,
                                        columnNumber: 24
                                    }, this),
                                    uploading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-3 text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "inline-block animate-spin rounded-full h-5 w-5 border-b-2 border-primary"
                                            }, void 0, false, {
                                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                lineNumber: 714,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ml-2 text-text-light",
                                                children: "Uploading image..."
                                            }, void 0, false, {
                                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                lineNumber: 715,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                        lineNumber: 713,
                                        columnNumber: 27
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                lineNumber: 691,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                        lineNumber: 688,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white p-6 rounded-lg border border-border",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold text-text mb-4",
                                children: "Target Audience"
                            }, void 0, false, {
                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                lineNumber: 722,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-text mb-2",
                                            children: "Target Type"
                                        }, void 0, false, {
                                            fileName: "[project]/components/notifications/CreateNotification.tsx",
                                            lineNumber: 726,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: notification.target_type,
                                            onChange: (e_4)=>setNotification((prev_7)=>({
                                                        ...prev_7,
                                                        target_type: e_4.target.value
                                                    })),
                                            className: "w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary",
                                            disabled: isSubmitting || uploading,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "all",
                                                    children: "All Users"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                    lineNumber: 733,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "location",
                                                    children: "By Location"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                    lineNumber: 734,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "search_history",
                                                    children: "By Search History"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                    lineNumber: 735,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "device",
                                                    children: "By Device Type"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                    lineNumber: 736,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "user_group",
                                                    children: "By User Group"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                    lineNumber: 737,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/notifications/CreateNotification.tsx",
                                            lineNumber: 729,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/notifications/CreateNotification.tsx",
                                    lineNumber: 725,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                lineNumber: 724,
                                columnNumber: 11
                            }, this),
                            [
                                'location',
                                'search_history'
                            ].includes(notification.target_type) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-text mb-2",
                                        children: "Target Regions *"
                                    }, void 0, false, {
                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                        lineNumber: 746,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 md:grid-cols-3 gap-2",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["regions"].map((region_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "flex items-center space-x-2 p-2 border border-border rounded hover:bg-gray-50 cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "checkbox",
                                                        checked: notification.target_criteria.regions.includes(region_1),
                                                        onChange: (e_5)=>{
                                                            const newRegions = e_5.target.checked ? [
                                                                ...notification.target_criteria.regions,
                                                                region_1
                                                            ] : notification.target_criteria.regions.filter((r)=>r !== region_1);
                                                            setNotification((prev_8)=>({
                                                                    ...prev_8,
                                                                    target_criteria: {
                                                                        ...prev_8.target_criteria,
                                                                        regions: newRegions
                                                                    }
                                                                }));
                                                        },
                                                        className: "rounded text-primary focus:ring-primary",
                                                        disabled: isSubmitting || uploading
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                        lineNumber: 751,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm",
                                                        children: region_1
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                        lineNumber: 761,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, region_1, true, {
                                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                lineNumber: 750,
                                                columnNumber: 42
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                        lineNumber: 749,
                                        columnNumber: 15
                                    }, this),
                                    notification.target_criteria.regions.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-error text-sm mt-1",
                                        children: "Please select at least one region"
                                    }, void 0, false, {
                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                        lineNumber: 764,
                                        columnNumber: 69
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                lineNumber: 745,
                                columnNumber: 81
                            }, this),
                            notification.target_type === 'device' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-text mb-2",
                                        children: "Device Types *"
                                    }, void 0, false, {
                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                        lineNumber: 769,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-2",
                                        children: [
                                            'ios',
                                            'android'
                                        ].map((deviceType_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "flex items-center space-x-2 p-2 border border-border rounded hover:bg-gray-50 cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "checkbox",
                                                        checked: notification.target_criteria.device_types.includes(deviceType_0),
                                                        onChange: (e_6)=>{
                                                            const newDeviceTypes = e_6.target.checked ? [
                                                                ...notification.target_criteria.device_types,
                                                                deviceType_0
                                                            ] : notification.target_criteria.device_types.filter((d)=>d !== deviceType_0);
                                                            setNotification((prev_9)=>({
                                                                    ...prev_9,
                                                                    target_criteria: {
                                                                        ...prev_9.target_criteria,
                                                                        device_types: newDeviceTypes
                                                                    }
                                                                }));
                                                        },
                                                        className: "rounded text-primary focus:ring-primary",
                                                        disabled: isSubmitting || uploading
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                        lineNumber: 774,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm capitalize",
                                                        children: deviceType_0
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                        lineNumber: 784,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, deviceType_0, true, {
                                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                lineNumber: 773,
                                                columnNumber: 57
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                        lineNumber: 772,
                                        columnNumber: 15
                                    }, this),
                                    notification.target_criteria.device_types.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-error text-sm mt-1",
                                        children: "Please select at least one device type"
                                    }, void 0, false, {
                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                        lineNumber: 787,
                                        columnNumber: 74
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                lineNumber: 768,
                                columnNumber: 53
                            }, this),
                            notification.target_type === 'search_history' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-text mb-2",
                                        children: "Minimum Searches Required"
                                    }, void 0, false, {
                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                        lineNumber: 791,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        min: "1",
                                        max: "100",
                                        value: notification.target_criteria.min_searches,
                                        onChange: (e_7)=>setNotification((prev_10)=>({
                                                    ...prev_10,
                                                    target_criteria: {
                                                        ...prev_10.target_criteria,
                                                        min_searches: parseInt(e_7.target.value) || 1
                                                    }
                                                })),
                                        className: "w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary",
                                        disabled: isSubmitting || uploading
                                    }, void 0, false, {
                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                        lineNumber: 794,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-text-light mt-1",
                                        children: "Send to users who have searched at least this many times in target regions"
                                    }, void 0, false, {
                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                        lineNumber: 801,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                lineNumber: 790,
                                columnNumber: 61
                            }, this),
                            notification.target_type === 'user_group' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-text mb-2",
                                        children: "Target User Groups *"
                                    }, void 0, false, {
                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                        lineNumber: 808,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-2",
                                        children: [
                                            'user',
                                            'admin'
                                        ].map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "flex items-center space-x-2 p-2 border border-border rounded hover:bg-gray-50 cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "checkbox",
                                                        checked: notification.target_criteria.user_groups.includes(group),
                                                        onChange: (e_8)=>{
                                                            const newGroups = e_8.target.checked ? [
                                                                ...notification.target_criteria.user_groups,
                                                                group
                                                            ] : notification.target_criteria.user_groups.filter((g)=>g !== group);
                                                            setNotification((prev_11)=>({
                                                                    ...prev_11,
                                                                    target_criteria: {
                                                                        ...prev_11.target_criteria,
                                                                        user_groups: newGroups
                                                                    }
                                                                }));
                                                        },
                                                        className: "rounded text-primary focus:ring-primary",
                                                        disabled: isSubmitting || uploading
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                        lineNumber: 813,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm capitalize",
                                                        children: group
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                        lineNumber: 823,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, group, true, {
                                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                lineNumber: 812,
                                                columnNumber: 49
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                        lineNumber: 811,
                                        columnNumber: 15
                                    }, this),
                                    notification.target_criteria.user_groups.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-error text-sm mt-1",
                                        children: "Please select at least one user group"
                                    }, void 0, false, {
                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                        lineNumber: 826,
                                        columnNumber: 73
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                lineNumber: 807,
                                columnNumber: 57
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                        lineNumber: 721,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white p-6 rounded-lg border border-border",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setShowAdvanced(!showAdvanced),
                                className: "flex items-center justify-between w-full text-left mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold text-text",
                                        children: "Advanced Options"
                                    }, void 0, false, {
                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                        lineNumber: 833,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-primary",
                                        children: showAdvanced ? 'Hide' : 'Show'
                                    }, void 0, false, {
                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                        lineNumber: 834,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                lineNumber: 832,
                                columnNumber: 11
                            }, this),
                            showAdvanced && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-text mb-2",
                                                        children: "Schedule For (Optional)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                        lineNumber: 843,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "datetime-local",
                                                        value: notification.scheduled_for,
                                                        onChange: (e_9)=>setNotification((prev_12)=>({
                                                                    ...prev_12,
                                                                    scheduled_for: e_9.target.value
                                                                })),
                                                        className: "w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary",
                                                        disabled: isSubmitting || uploading
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                        lineNumber: 846,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-text-light mt-1",
                                                        children: "Schedule this notification for a future date/time"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                        lineNumber: 850,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                lineNumber: 842,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-text mb-2",
                                                        children: "Expires At (Optional)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                        lineNumber: 856,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "datetime-local",
                                                        value: notification.expires_at,
                                                        onChange: (e_10)=>setNotification((prev_13)=>({
                                                                    ...prev_13,
                                                                    expires_at: e_10.target.value
                                                                })),
                                                        className: "w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary",
                                                        disabled: isSubmitting || uploading
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                        lineNumber: 859,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-text-light mt-1",
                                                        children: "Automatically remove after this date/time"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                        lineNumber: 863,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                lineNumber: 855,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                        lineNumber: 841,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-text mb-2",
                                                        children: "Action Button Text (Optional)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                        lineNumber: 872,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: notification.action_text,
                                                        onChange: (e_11)=>setNotification((prev_14)=>({
                                                                    ...prev_14,
                                                                    action_text: e_11.target.value
                                                                })),
                                                        className: "w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary",
                                                        placeholder: "e.g., View Details, Open App",
                                                        disabled: isSubmitting || uploading
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                        lineNumber: 875,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                lineNumber: 871,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-text mb-2",
                                                        children: "Action URL (Optional)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                        lineNumber: 882,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "url",
                                                        value: notification.action_url,
                                                        onChange: (e_12)=>setNotification((prev_15)=>({
                                                                    ...prev_15,
                                                                    action_url: e_12.target.value
                                                                })),
                                                        className: "w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary",
                                                        placeholder: "https://example.com/action",
                                                        disabled: isSubmitting || uploading
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                        lineNumber: 885,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                                lineNumber: 881,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                                        lineNumber: 870,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                lineNumber: 839,
                                columnNumber: 28
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                        lineNumber: 831,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-end space-x-4 pt-4 border-t border-border",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onSuccess,
                                className: "px-6 py-2 border border-border rounded-lg text-text hover:bg-gray-50 transition-colors disabled:opacity-50",
                                disabled: isSubmitting || uploading,
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                lineNumber: 896,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                disabled: isSubmitting || uploading,
                                className: "px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2",
                                children: isSubmitting || uploading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "animate-spin rounded-full h-4 w-4 border-b-2 border-white"
                                        }, void 0, false, {
                                            fileName: "[project]/components/notifications/CreateNotification.tsx",
                                            lineNumber: 901,
                                            columnNumber: 17
                                        }, this),
                                        uploading ? 'Uploading...' : 'Creating...'
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiSave"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/components/notifications/CreateNotification.tsx",
                                            lineNumber: 904,
                                            columnNumber: 17
                                        }, this),
                                        "Create & Send Notification"
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/components/notifications/CreateNotification.tsx",
                                lineNumber: 899,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/notifications/CreateNotification.tsx",
                        lineNumber: 895,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/notifications/CreateNotification.tsx",
                lineNumber: 581,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/notifications/CreateNotification.tsx",
        lineNumber: 578,
        columnNumber: 10
    }, this);
}
_s(CreateNotification, "qNWTu57RiUQhEUAflLkB1/P1tvU=");
_c = CreateNotification;
var _c;
__turbopack_context__.k.register(_c, "CreateNotification");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/dashboard/notifications/create/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CreateNotificationPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$notifications$2f$CreateNotification$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/notifications/CreateNotification.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
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
function CreateNotificationPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(16);
    if ($[0] !== "a7b218246b0f98c049c40f3d187f6fbdd2d8fece1686eed98d071f2e6e8fc117") {
        for(let $i = 0; $i < 16; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a7b218246b0f98c049c40f3d187f6fbdd2d8fece1686eed98d071f2e6e8fc117";
    }
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    if ($[1] !== router) {
        t0 = ({
            "CreateNotificationPage[handleSuccess]": ()=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Notification created successfully!");
                router.push("/dashboard/notifications");
            }
        })["CreateNotificationPage[handleSuccess]"];
        $[1] = router;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const handleSuccess = t0;
    let t1;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-3xl font-bold text-text",
                    children: "Create Notification"
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/notifications/create/page.tsx",
                    lineNumber: 37,
                    columnNumber: 15
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-text-light",
                    children: "Send notifications to users based on various criteria"
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/notifications/create/page.tsx",
                    lineNumber: 37,
                    columnNumber: 84
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/dashboard/notifications/create/page.tsx",
            lineNumber: 37,
            columnNumber: 10
        }, this);
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    let t2;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/dashboard/notifications",
                    className: "flex items-center space-x-2 px-4 py-2 border border-border rounded-lg hover:bg-gray-50",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiArrowLeft"], {}, void 0, false, {
                            fileName: "[project]/app/dashboard/notifications/create/page.tsx",
                            lineNumber: 44,
                            columnNumber: 202
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Back to Notifications"
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/notifications/create/page.tsx",
                            lineNumber: 44,
                            columnNumber: 217
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/notifications/create/page.tsx",
                    lineNumber: 44,
                    columnNumber: 65
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/dashboard/notifications/create/page.tsx",
            lineNumber: 44,
            columnNumber: 10
        }, this);
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6 border-b border-border",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-xl font-semibold text-text",
                    children: "Notification Details"
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/notifications/create/page.tsx",
                    lineNumber: 51,
                    columnNumber: 54
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-text-light",
                    children: "Fill in the details below to create a new notification"
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/notifications/create/page.tsx",
                    lineNumber: 51,
                    columnNumber: 127
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/dashboard/notifications/create/page.tsx",
            lineNumber: 51,
            columnNumber: 10
        }, this);
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== handleSuccess) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-lg shadow",
            children: [
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$notifications$2f$CreateNotification$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateNotification"], {
                        onSuccess: handleSuccess
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/notifications/create/page.tsx",
                        lineNumber: 58,
                        columnNumber: 79
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/notifications/create/page.tsx",
                    lineNumber: 58,
                    columnNumber: 58
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/dashboard/notifications/create/page.tsx",
            lineNumber: 58,
            columnNumber: 10
        }, this);
        $[6] = handleSuccess;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-lg font-semibold text-text mb-2",
            children: "📋 Targeting Tips"
        }, void 0, false, {
            fileName: "[project]/app/dashboard/notifications/create/page.tsx",
            lineNumber: 66,
            columnNumber: 10
        }, this);
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            className: "flex items-start",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-primary mr-2",
                    children: "•"
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/notifications/create/page.tsx",
                    lineNumber: 73,
                    columnNumber: 43
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "Location-based:"
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/notifications/create/page.tsx",
                            lineNumber: 73,
                            columnNumber: 93
                        }, this),
                        " Target users currently in specific regions"
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/notifications/create/page.tsx",
                    lineNumber: 73,
                    columnNumber: 87
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/dashboard/notifications/create/page.tsx",
            lineNumber: 73,
            columnNumber: 10
        }, this);
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            className: "flex items-start",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-primary mr-2",
                    children: "•"
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/notifications/create/page.tsx",
                    lineNumber: 80,
                    columnNumber: 43
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "Search history:"
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/notifications/create/page.tsx",
                            lineNumber: 80,
                            columnNumber: 93
                        }, this),
                        " Target users who have searched for routes in specific regions (min. 2 searches)"
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/notifications/create/page.tsx",
                    lineNumber: 80,
                    columnNumber: 87
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/dashboard/notifications/create/page.tsx",
            lineNumber: 80,
            columnNumber: 10
        }, this);
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    let t8;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            className: "flex items-start",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-primary mr-2",
                    children: "•"
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/notifications/create/page.tsx",
                    lineNumber: 87,
                    columnNumber: 43
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "Device type:"
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/notifications/create/page.tsx",
                            lineNumber: 87,
                            columnNumber: 93
                        }, this),
                        " Target users by their device (iOS, Android, etc.)"
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/notifications/create/page.tsx",
                    lineNumber: 87,
                    columnNumber: 87
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/dashboard/notifications/create/page.tsx",
            lineNumber: 87,
            columnNumber: 10
        }, this);
        $[11] = t8;
    } else {
        t8 = $[11];
    }
    let t9;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            className: "flex items-start",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-primary mr-2",
                    children: "•"
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/notifications/create/page.tsx",
                    lineNumber: 94,
                    columnNumber: 43
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "IMEI:"
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/notifications/create/page.tsx",
                            lineNumber: 94,
                            columnNumber: 93
                        }, this),
                        " Target specific devices by their IMEI number"
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/notifications/create/page.tsx",
                    lineNumber: 94,
                    columnNumber: 87
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/dashboard/notifications/create/page.tsx",
            lineNumber: 94,
            columnNumber: 10
        }, this);
        $[12] = t9;
    } else {
        t9 = $[12];
    }
    let t10;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-blue-50 border border-blue-200 rounded-lg p-6",
            children: [
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "space-y-2 text-text-light",
                    children: [
                        t6,
                        t7,
                        t8,
                        t9,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "flex items-start",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-primary mr-2",
                                    children: "•"
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/notifications/create/page.tsx",
                                    lineNumber: 101,
                                    columnNumber: 172
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "All users:"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/notifications/create/page.tsx",
                                            lineNumber: 101,
                                            columnNumber: 222
                                        }, this),
                                        " Send to everyone in the system"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/notifications/create/page.tsx",
                                    lineNumber: 101,
                                    columnNumber: 216
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/notifications/create/page.tsx",
                            lineNumber: 101,
                            columnNumber: 139
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/notifications/create/page.tsx",
                    lineNumber: 101,
                    columnNumber: 81
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/dashboard/notifications/create/page.tsx",
            lineNumber: 101,
            columnNumber: 11
        }, this);
        $[13] = t10;
    } else {
        t10 = $[13];
    }
    let t11;
    if ($[14] !== t4) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                t2,
                t4,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/app/dashboard/notifications/create/page.tsx",
            lineNumber: 108,
            columnNumber: 11
        }, this);
        $[14] = t4;
        $[15] = t11;
    } else {
        t11 = $[15];
    }
    return t11;
}
_s(CreateNotificationPage, "kip7PLEoj5zu8mMumTu/W/gd4s8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = CreateNotificationPage;
var _c;
__turbopack_context__.k.register(_c, "CreateNotificationPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_09fae1d5._.js.map