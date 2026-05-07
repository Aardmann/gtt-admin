(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/ghana-trotro-admin/components/notifications/CreateNotification.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/notifications/CreateNotification.tsx
__turbopack_context__.s([
    "CreateNotification",
    ()=>CreateNotification
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ghana-trotro-admin/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ghana-trotro-admin/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ghana-trotro-admin/lib/supabase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ghana-trotro-admin/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ghana-trotro-admin/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function CreateNotification({ onSuccess }) {
    _s();
    const [notification, setNotification] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
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
    const [uploading, setUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [imagePreview, setImagePreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [existingImages, setExistingImages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [searchImageQuery, setSearchImageQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [showExistingImages, setShowExistingImages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedExistingImage, setSelectedExistingImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Load existing images on component mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CreateNotification.useEffect": ()=>{
            fetchExistingImages();
        }
    }["CreateNotification.useEffect"], []);
    // Fetch existing images from database
    const fetchExistingImages = async ()=>{
        try {
            // First, get all notifications with images
            const { data: notifications, error: error_0 } = await __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('notifications').select('id, title, image_url, created_at').not('image_url', 'is', null).order('created_at', {
                ascending: false
            });
            if (error_0) throw error_0;
            // Group images by URL to find duplicates
            const imageMap = new Map();
            notifications?.forEach((notif)=>{
                if (!notif.image_url) return;
                const existing = imageMap.get(notif.image_url);
                if (existing) {
                    existing.used_in_notifications++;
                } else {
                    // Extract filename from URL
                    const urlParts = notif.image_url.split('/');
                    const filename = urlParts[urlParts.length - 1];
                    imageMap.set(notif.image_url, {
                        id: notif.id,
                        name: filename,
                        url: notif.image_url,
                        size: 0,
                        // We don't have size info from URL
                        created_at: notif.created_at,
                        used_in_notifications: 1
                    });
                }
            });
            setExistingImages(Array.from(imageMap.values()));
        } catch (error) {
            console.error('Error fetching existing images:', error);
        }
    };
    // Search for similar notifications to find existing images
    const searchSimilarNotifications = async ()=>{
        try {
            if (!notification.message.trim() && !notification.title.trim()) {
                return [];
            }
            let query = __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('notifications').select('id, title, message, image_url, created_at').not('image_url', 'is', null);
            if (notification.message.trim()) {
                // Search for similar messages
                query = query.or(`message.ilike.%${notification.message.substring(0, 50)}%`);
            }
            if (notification.title.trim()) {
                query = query.or(`title.ilike.%${notification.title}%`);
            }
            const { data, error: error_2 } = await query.limit(10).order('created_at', {
                ascending: false
            });
            if (error_2) throw error_2;
            return data || [];
        } catch (error_1) {
            console.error('Error searching similar notifications:', error_1);
            return [];
        }
    };
    // Check if image already exists in database
    const checkForExistingImage = async (file)=>{
        try {
            // Calculate file hash (simple size-based check for now)
            // In production, you might want to use actual image hash
            const fileSize = file.size;
            const fileName = file.name.toLowerCase();
            const fileType = file.type;
            // Look for existing images with similar characteristics
            const { data: existingNotifs } = await __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('notifications').select('image_url').not('image_url', 'is', null).limit(50);
            if (!existingNotifs) return null;
            // Check if any existing image might be the same
            // This is a basic check - you might want to implement more sophisticated deduplication
            const existingUrls = existingNotifs.map((n)=>n.image_url).filter(Boolean);
            // You could add more sophisticated checks here like:
            // 1. Image content hashing
            // 2. File size comparison
            // 3. File name pattern matching
            // For now, we'll just return the first image URL
            // In a real app, you'd implement proper deduplication
            return existingUrls.length > 0 ? existingUrls[0] : null;
        } catch (error_3) {
            console.error('Error checking for existing image:', error_3);
            return null;
        }
    };
    // Handle file selection for preview
    const handleFileSelect = async (file_0)=>{
        try {
            // Check file size (max 5MB)
            if (file_0.size > 5 * 1024 * 1024) {
                __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Image must be less than 5MB');
                return;
            }
            // Check file type
            if (!file_0.type.startsWith('image/')) {
                __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Please upload an image file');
                return;
            }
            // Check if similar image exists
            __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].loading('Checking for existing similar images...', {
                id: 'image-check'
            });
            const existingImageUrl = await checkForExistingImage(file_0);
            if (existingImageUrl) {
                __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].dismiss('image-check');
                // Ask user if they want to use existing image
                const useExisting = confirm('A similar image was found in our database. Would you like to use the existing image instead of uploading a new one?');
                if (useExisting) {
                    setNotification((prev)=>({
                            ...prev,
                            image_file: null,
                            image_url: existingImageUrl
                        }));
                    setImagePreview(existingImageUrl);
                    __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('Using existing image from database');
                    return;
                }
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].dismiss('image-check');
            }
            // Set file for later upload
            setNotification((prev_0)=>({
                    ...prev_0,
                    image_file: file_0
                }));
            // Create preview
            const reader = new FileReader();
            reader.onloadend = ()=>{
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file_0);
        } catch (error_4) {
            __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Error processing image');
            console.error('File selection error:', error_4);
        }
    };
    // Upload image function with deduplication
    const uploadImage = async (file_1)=>{
        try {
            setUploading(true);
            // Generate unique but descriptive filename
            const fileExt = file_1.name.split('.').pop()?.toLowerCase() || 'jpg';
            const timestamp = Date.now();
            const randomStr = Math.random().toString(36).substring(2, 8);
            const fileName_0 = `notification_${timestamp}_${randomStr}.${fileExt}`;
            const filePath = fileName_0;
            // Check if file already exists in storage (by name)
            const { data: existingFiles } = await __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].storage.from('notification-images').list('', {
                search: fileName_0
            });
            if (existingFiles && existingFiles.length > 0) {
                // File with same name exists, get its URL
                const { data: { publicUrl } } = __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].storage.from('notification-images').getPublicUrl(fileName_0);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])('Using existing file from storage', {
                    icon: '♻️'
                });
                return publicUrl;
            }
            // Upload to Supabase Storage
            const { error: uploadError } = await __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].storage.from('notification-images').upload(filePath, file_1, {
                cacheControl: '3600',
                upsert: false,
                contentType: file_1.type
            });
            if (uploadError) {
                if (uploadError.message?.includes('bucket') || uploadError.message?.includes('not found')) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Storage bucket not configured. Please create "notification-images" bucket in Supabase Storage.');
                    throw new Error('Storage bucket not configured');
                }
                throw uploadError;
            }
            // Get public URL
            const { data: { publicUrl: publicUrl_0 } } = __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].storage.from('notification-images').getPublicUrl(filePath);
            return publicUrl_0;
        } catch (error_5) {
            console.error('Image upload error:', error_5);
            throw new Error(`Failed to upload image: ${error_5.message}`);
        } finally{
            setUploading(false);
        }
    };
    // Remove image
    const removeImage = ()=>{
        setNotification((prev_1)=>({
                ...prev_1,
                image_file: null,
                image_url: ''
            }));
        setImagePreview(null);
        setSelectedExistingImage(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };
    // Select existing image
    const selectExistingImage = (image)=>{
        setSelectedExistingImage(image);
        setNotification((prev_2)=>({
                ...prev_2,
                image_file: null,
                image_url: image.url
            }));
        setImagePreview(image.url);
        setShowExistingImages(false);
        __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Selected existing image: ${image.name}`);
    };
    // Check if current user is admin
    const checkIsAdmin = async (userId)=>{
        try {
            const { data: profile, error: error_7 } = await __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('profiles').select('role').eq('id', userId).single();
            if (error_7) {
                console.error('Error checking admin status:', error_7);
                return false;
            }
            return profile?.role === 'admin';
        } catch (error_6) {
            console.error('Error checking admin:', error_6);
            return false;
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
            const { data: usersData, error: usersError } = await __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('users').select('id, first_name, last_name, email, created_at');
            if (usersError) throw usersError;
            const { data: profilesData, error: profilesError } = await __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('profiles').select('id, role, last_location, device_info, last_seen_at');
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
        } catch (error_8) {
            console.error('Error getting user data:', error_8);
            return [];
        }
    };
    // Create notification in database and distribute to users
    const createNotificationAndDistribute = async (imageUrl = '')=>{
        try {
            const { data: { user: user_0 } } = await __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getUser();
            if (!user_0) {
                throw new Error('You must be logged in to create notifications');
            }
            const isAdmin = await checkIsAdmin(user_0.id);
            if (!isAdmin) {
                throw new Error('You must be an admin to create notifications');
            }
            // Step 1: Check if similar notification already exists
            if (imageUrl) {
                const { data: similarNotifications } = await __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('notifications').select('id, title, image_url, sent_count, read_count').eq('image_url', imageUrl).limit(1);
                if (similarNotifications && similarNotifications.length > 0) {
                    const similar = similarNotifications[0];
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])(`Similar notification found with image (Sent: ${similar.sent_count}, Read: ${similar.read_count})`, {
                        icon: 'ℹ️',
                        duration: 5000
                    });
                }
            }
            // Step 2: Create the notification
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
            const { data: createdNotification, error: notificationError } = await __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('notifications').insert([
                notificationData
            ]).select().single();
            if (notificationError) {
                console.error('Database insertion error:', notificationError);
                throw notificationError;
            }
            // Step 3: Get users and create user_notifications
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
                        const { data: searchHistories } = await __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('search_history').select('user_id, destination, start_point');
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
            // Step 4: Create user_notifications for filtered users
            const userNotifications = filteredUsers.map((user_5)=>({
                    user_id: user_5.id,
                    notification_id: createdNotification.id,
                    is_read: false,
                    read_at: null,
                    created_at: new Date().toISOString()
                }));
            if (userNotifications.length > 0) {
                // Insert user notifications
                const { error: userNotificationsError } = await __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('user_notifications').insert(userNotifications);
                if (userNotificationsError) {
                    console.error('Error creating user notifications:', userNotificationsError);
                    throw userNotificationsError;
                }
                // Update sent count
                const { error: updateError } = await __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('notifications').update({
                    sent_count: userNotifications.length
                }).eq('id', createdNotification.id);
                if (updateError) {
                    console.error('Error updating sent count:', updateError);
                }
            }
            return {
                notification: createdNotification,
                userCount: userNotifications.length,
                usedExistingImage: !!selectedExistingImage
            };
        } catch (error_9) {
            console.error('Create notification DB error:', error_9);
            throw error_9;
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
                errors_0.forEach((error_11)=>__TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(error_11));
                return;
            }
            // Check if user is admin
            const { data: { user: user_6 } } = await __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getUser();
            if (!user_6) {
                __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('You must be logged in to create notifications');
                return;
            }
            const isAdmin_0 = await checkIsAdmin(user_6.id);
            if (!isAdmin_0) {
                __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('You must be an admin to create notifications');
                return;
            }
            // Step 1: Handle image
            let finalImageUrl = notification.image_url || '';
            if (notification.image_file) {
                __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].loading('Uploading image...', {
                    id: 'image-upload'
                });
                try {
                    finalImageUrl = await uploadImage(notification.image_file);
                    __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('Image uploaded successfully!', {
                        id: 'image-upload'
                    });
                } catch (error_12) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Image upload failed: ' + error_12.message, {
                        id: 'image-upload'
                    });
                    if (!confirm('Image upload failed. Continue without image?')) {
                        setIsSubmitting(false);
                        return;
                    }
                    finalImageUrl = '';
                }
            } else if (selectedExistingImage) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])('Using existing image from database', {
                    icon: '♻️',
                    duration: 3000
                });
            }
            // Step 2: Create notification and distribute
            __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].loading('Creating and sending notification...', {
                id: 'notification-create'
            });
            const result = await createNotificationAndDistribute(finalImageUrl);
            if (result) {
                let successMessage = `Notification created and sent to ${result.userCount} users!`;
                if (result.usedExistingImage) {
                    successMessage += ' (Reused existing image)';
                }
                __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(successMessage, {
                    id: 'notification-create',
                    duration: 4000
                });
                // Reset form
                resetForm();
                onSuccess();
            }
        } catch (error_10) {
            console.error('Submit error:', error_10);
            let errorMessage = error_10.message || 'Failed to create notification';
            if (error_10.code === '42501') {
                errorMessage = 'Permission denied. Please check if you have proper database permissions.';
            } else if (error_10.code === '23505') {
                errorMessage = 'Duplicate notification detected.';
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(errorMessage, {
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
        setSelectedExistingImage(null);
        setShowExistingImages(false);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };
    // Filtered existing images based on search
    const filteredExistingImages = existingImages.filter((image_0)=>image_0.name.toLowerCase().includes(searchImageQuery.toLowerCase()) || image_0.url.toLowerCase().includes(searchImageQuery.toLowerCase()));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-background p-6 rounded-lg shadow",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold text-text mb-6",
                children: "Create Notification"
            }, void 0, false, {
                fileName: "[project]/ghana-trotro-admin/components/notifications/CreateNotification.tsx",
                lineNumber: 685,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                className: "space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-text mb-2",
                                        children: "Title *"
                                    }, void 0, false, {
                                        fileName: "[project]/ghana-trotro-admin/components/notifications/CreateNotification.tsx",
                                        lineNumber: 691,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: notification.title,
                                        onChange: (e_0)=>setNotification((prev_3)=>({
                                                    ...prev_3,
                                                    title: e_0.target.value
                                                })),
                                        className: "w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary",
                                        placeholder: "Enter notification title",
                                        required: true,
                                        disabled: isSubmitting || uploading
                                    }, void 0, false, {
                                        fileName: "[project]/ghana-trotro-admin/components/notifications/CreateNotification.tsx",
                                        lineNumber: 694,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/ghana-trotro-admin/components/notifications/CreateNotification.tsx",
                                lineNumber: 690,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-text mb-2",
                                        children: "Message *"
                                    }, void 0, false, {
                                        fileName: "[project]/ghana-trotro-admin/components/notifications/CreateNotification.tsx",
                                        lineNumber: 701,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        value: notification.message,
                                        onChange: (e_1)=>setNotification((prev_4)=>({
                                                    ...prev_4,
                                                    message: e_1.target.value
                                                })),
                                        className: "w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary",
                                        rows: 3,
                                        placeholder: "Enter notification message",
                                        required: true,
                                        disabled: isSubmitting || uploading
                                    }, void 0, false, {
                                        fileName: "[project]/ghana-trotro-admin/components/notifications/CreateNotification.tsx",
                                        lineNumber: 704,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/ghana-trotro-admin/components/notifications/CreateNotification.tsx",
                                lineNumber: 700,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/ghana-trotro-admin/components/notifications/CreateNotification.tsx",
                        lineNumber: 689,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-text mb-2",
                                        children: "Type"
                                    }, void 0, false, {
                                        fileName: "[project]/ghana-trotro-admin/components/notifications/CreateNotification.tsx",
                                        lineNumber: 715,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: notification.type,
                                        onChange: (e_2)=>setNotification((prev_5)=>({
                                                    ...prev_5,
                                                    type: e_2.target.value
                                                })),
                                        className: "w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary",
                                        disabled: isSubmitting || uploading,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "banner",
                                                children: "Banner"
                                            }, void 0, false, {
                                                fileName: "[project]/ghana-trotro-admin/components/notifications/CreateNotification.tsx",
                                                lineNumber: 722,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "fullscreen",
                                                children: "Full Screen"
                                            }, void 0, false, {
                                                fileName: "[project]/ghana-trotro-admin/components/notifications/CreateNotification.tsx",
                                                lineNumber: 723,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "urgent",
                                                children: "Urgent"
                                            }, void 0, false, {
                                                fileName: "[project]/ghana-trotro-admin/components/notifications/CreateNotification.tsx",
                                                lineNumber: 724,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "important",
                                                children: "Important"
                                            }, void 0, false, {
                                                fileName: "[project]/ghana-trotro-admin/components/notifications/CreateNotification.tsx",
                                                lineNumber: 725,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "promotional",
                                                children: "Promotional"
                                            }, void 0, false, {
                                                fileName: "[project]/ghana-trotro-admin/components/notifications/CreateNotification.tsx",
                                                lineNumber: 726,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "system",
                                                children: "System"
                                            }, void 0, false, {
                                                fileName: "[project]/ghana-trotro-admin/components/notifications/CreateNotification.tsx",
                                                lineNumber: 727,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "location",
                                                children: "Location"
                                            }, void 0, false, {
                                                fileName: "[project]/ghana-trotro-admin/components/notifications/CreateNotification.tsx",
                                                lineNumber: 728,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "search",
                                                children: "Search"
                                            }, void 0, false, {
                                                fileName: "[project]/ghana-trotro-admin/components/notifications/CreateNotification.tsx",
                                                lineNumber: 729,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/ghana-trotro-admin/components/notifications/CreateNotification.tsx",
                                        lineNumber: 718,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/ghana-trotro-admin/components/notifications/CreateNotification.tsx",
                                lineNumber: 714,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-text mb-2",
                                        children: "Category"
                                    }, void 0, false, {
                                        fileName: "[project]/ghana-trotro-admin/components/notifications/CreateNotification.tsx",
                                        lineNumber: 735,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: notification.category,
                                        onChange: (e_3)=>setNotification((prev_6)=>({
                                                    ...prev_6,
                                                    category: e_3.target.value
                                                })),
                                        className: "w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary",
                                        disabled: isSubmitting || uploading,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "general",
                                                children: "General"
                                            }, void 0, false, {
                                                fileName: "[project]/ghana-trotro-admin/components/notifications/CreateNotification.tsx",
                                                lineNumber: 742,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "promotion",
                                                children: "Promotion"
                                            }, void 0, false, {
                                                fileName: "[project]/ghana-trotro-admin/components/notifications/CreateNotification.tsx",
                                                lineNumber: 743,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "alert",
                                                children: "Alert"
                                            }, void 0, false, {
                                                fileName: "[project]/ghana-trotro-admin/components/notifications/CreateNotification.tsx",
                                                lineNumber: 744,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "update",
                                                children: "Update"
                                            }, void 0, false, {
                                                fileName: "[project]/ghana-trotro-admin/components/notifications/CreateNotification.tsx",
                                                lineNumber: 745,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "location",
                                                children: "Location"
                                            }, void 0, false, {
                                                fileName: "[project]/ghana-trotro-admin/components/notifications/CreateNotification.tsx",
                                                lineNumber: 746,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "search",
                                                children: "Search"
                                            }, void 0, false, {
                                                fileName: "[project]/ghana-trotro-admin/components/notifications/CreateNotification.tsx",
                                                lineNumber: 747,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/ghana-trotro-admin/components/notifications/CreateNotification.tsx",
                                        lineNumber: 738,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/ghana-trotro-admin/components/notifications/CreateNotification.tsx",
                                lineNumber: 734,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-text mb-2",
                                        children: "Priority"
                                    }, void 0, false, {
                                        fileName: "[project]/ghana-trotro-admin/components/notifications/CreateNotification.tsx",
                                        lineNumber: 753,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: notification.priority,
                                        onChange: (e_4)=>setNotification((prev_7)=>({
                                                    ...prev_7,
                                                    priority: e_4.target.value
                                                })),
                                        className: "w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary",
                                        disabled: isSubmitting || uploading,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "low",
                                                children: "Low"
                                            }, void 0, false, {
                                                fileName: "[project]/ghana-trotro-admin/components/notifications/CreateNotification.tsx",
                                                lineNumber: 760,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "medium",
                                                children: "Medium"
                                            }, void 0, false, {
                                                fileName: "[project]/ghana-trotro-admin/components/notifications/CreateNotification.tsx",
                                                lineNumber: 761,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "high",
                                                children: "High"
                                            }, void 0, false, {
                                                fileName: "[project]/ghana-trotro-admin/components/notifications/CreateNotification.tsx",
                                                lineNumber: 762,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "critical",
                                                children: "Critical"
                                            }, void 0, false, {
                                                fileName: "[project]/ghana-trotro-admin/components/notifications/CreateNotification.tsx",
                                                lineNumber: 763,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/ghana-trotro-admin/components/notifications/CreateNotification.tsx",
                                        lineNumber: 756,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/ghana-trotro-admin/components/notifications/CreateNotification.tsx",
                                lineNumber: 752,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/ghana-trotro-admin/components/notifications/CreateNotification.tsx",
                        lineNumber: 712,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border border-border rounded-lg p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold text-text",
                                        children: "Notification Image"
                                    }, void 0, false, {
                                        fileName: "[project]/ghana-trotro-admin/components/notifications/CreateNotification.tsx",
                                        lineNumber: 771,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setShowExistingImages(!showExistingImages),
                                        className: "flex items-center gap-2 px-3 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                                        disabled: isSubmitting || uploading,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiDatabase"], {}, void 0, false, {
                                                fileName: "[project]/ghana-trotro-admin/components/notifications/CreateNotification.tsx",
                                                lineNumber: 773,
                                                columnNumber: 15
                                            }, this),
                                            showExistingImages ? 'Hide Existing Images' : 'Browse Existing Images'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/ghana-trotro-admin/components/notifications/CreateNotification.tsx",
                                        lineNumber: 772,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/ghana-trotro-admin/components/notifications/CreateNotification.tsx",
                                lineNumber: 770,
                                columnNumber: 11
                            }, this),
                            showExistingImages && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-6 p-4 bg-gray-50 rounded-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiSearch"], {}, void 0, false, {
                                                fileName: "[project]/ghana-trotro-admin/components/notifications/CreateNotification.tsx",
                                                lineNumber: 781,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: searchImageQuery,
                                                onChange: (e_5)=>setSearchImageQuery(e_5.target.value),
                                                placeholder: "Search existing images...",
                                                className: "flex-1 px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary",
                                                disabled: isSubmitting || uploading
                                            }, void 0, false, {
                                                fileName: "[project]/ghana-trotro-admin/components/notifications/CreateNotification.tsx",
                                                lineNumber: 782,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/ghana-trotro-admin/components/notifications/CreateNotification.tsx",
                                        lineNumber: 780,
                                        columnNumber: 15
                                    }, this),
                                    filteredExistingImages.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-center text-text-light py-4",
                                        children: "No existing images found"
                                    }, void 0, false, {
                                        fileName: "[project]/ghana-trotro-admin/components/notifications/CreateNotification.tsx",
                                        lineNumber: 785,
                                        columnNumber: 54
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 md:grid-cols-4 gap-4",
                                        children: filteredExistingImages.map((image_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `border rounded-lg overflow-hidden cursor-pointer transition-all hover:shadow-md ${selectedExistingImage?.id === image_1.id ? 'ring-2 ring-primary border-primary' : 'border-border'}`,
                                                onClick: ()=>selectExistingImage(image_1),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-32 bg-gray-200 relative",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: image_1.url,
                                                                alt: image_1.name,
                                                                className: "w-full h-full object-cover",
                                                                onError: (e_6)=>{
                                                                    const target = e_6.target;
                                                                    target.style.display = 'none';
                                                                    target.parentElement.innerHTML = `
                              <div class="w-full h-full flex items-center justify-center bg-gray-300">
                                <FiImage class="text-2xl text-gray-500" />
                              </div>
                            `;
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/ghana-trotro-admin/components/notifications/CreateNotification.tsx",
                                                                lineNumber: 788,
                                                                columnNumber: 25
                                                            }, this),
                                                            selectedExistingImage?.id === image_1.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute top-2 right-2 bg-primary text-white p-1 rounded-full",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiCheck"], {
                                                                    size: 16
                                                                }, void 0, false, {
                                                                    fileName: "[project]/ghana-trotro-admin/components/notifications/CreateNotification.tsx",
                                                                    lineNumber: 798,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/ghana-trotro-admin/components/notifications/CreateNotification.tsx",
                                                                lineNumber: 797,
                                                                columnNumber: 70
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/ghana-trotro-admin/components/notifications/CreateNotification.tsx",
                                                        lineNumber: 787,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-2 bg-white",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs truncate text-text",
                                                                title: image_1.name,
                                                                children: image_1.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/ghana-trotro-admin/components/notifications/CreateNotification.tsx",
                                                                lineNumber: 802,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-text-light",
                                                                children: [
                                                                    "Used in ",
                                                                    image_1.used_in_notifications,
                                                                    " notification",
                                                                    image_1.used_in_notifications !== 1 ? 's' : ''
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/ghana-trotro-admin/components/notifications/CreateNotification.tsx",
                                                                lineNumber: 805,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/ghana-trotro-admin/components/notifications/CreateNotification.tsx",
                                                        lineNumber: 801,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, image_1.id, true, {
                                                fileName: "[project]/ghana-trotro-admin/components/notifications/CreateNotification.tsx",
                                                lineNumber: 786,
                                                columnNumber: 58
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/ghana-trotro-admin/components/notifications/CreateNotification.tsx",
                                        lineNumber: 785,
                                        columnNumber: 133
                                    }, this),
                                    selectedExistingImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 p-3 bg-green-50 border border-green-200 rounded-lg",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 text-green-800",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiCheck"], {}, void 0, false, {
                                                    fileName: "[project]/ghana-trotro-admin/components/notifications/CreateNotification.tsx",
                                                    lineNumber: 814,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        "Selected: ",
                                                        selectedExistingImage.name
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/ghana-trotro-admin/components/notifications/CreateNotification.tsx",
                                                    lineNumber: 815,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/ghana-trotro-admin/components/notifications/CreateNotification.tsx",
                                            lineNumber: 813,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/ghana-trotro-admin/components/notifications/CreateNotification.tsx",
                                        lineNumber: 812,
                                        columnNumber: 41
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/ghana-trotro-admin/components/notifications/CreateNotification.tsx",
                                lineNumber: 779,
                                columnNumber: 34
                            }, this),
                            imagePreview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: imagePreview,
                                        alt: "Preview",
                                        className: "w-full h-48 object-cover rounded-lg"
                                    }, void 0, false, {
                                        fileName: "[project]/ghana-trotro-admin/components/notifications/CreateNotification.tsx",
                                        lineNumber: 822,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-2 right-2 flex gap-2",
                                        children: [
                                            selectedExistingImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "px-3 py-1 bg-green-500 text-white text-xs rounded-full",
                                                children: "Existing Image"
                                            }, void 0, false, {
                                                fileName: "[project]/ghana-trotro-admin/components/notifications/CreateNotification.tsx",
                                                lineNumber: 824,
                                                columnNumber: 43
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: removeImage,
                                                className: "p-2 bg-error text-white rounded-full hover:bg-error-dark",
                                                disabled: isSubmitting || uploading,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiX"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/ghana-trotro-admin/components/notifications/CreateNotification.tsx",
                                                    lineNumber: 828,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/ghana-trotro-admin/components/notifications/CreateNotification.tsx",
                                                lineNumber: 827,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/ghana-trotro-admin/components/notifications/CreateNotification.tsx",
                                        lineNumber: 823,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/ghana-trotro-admin/components/notifications/CreateNotification.tsx",
                                lineNumber: 821,
                                columnNumber: 27
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-2 border-dashed border-border rounded-lg p-8 text-center cursor-pointer hover:bg-gray-50 transition-colors",
                                onClick: ()=>!isSubmitting && !uploading && fileInputRef.current?.click(),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiImage"], {
                                        className: "mx-auto text-4xl text-text-light mb-3"
                                    }, void 0, false, {
                                        fileName: "[project]/ghana-trotro-admin/components/notifications/CreateNotification.tsx",
                                        lineNumber: 832,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-text font-medium mb-1",
                                        children: "Upload New Image"
                                    }, void 0, false, {
                                        fileName: "[project]/ghana-trotro-admin/components/notifications/CreateNotification.tsx",
                                        lineNumber: 833,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-text-light text-sm",
                                        children: notification.type === 'banner' ? 'Recommended: 600x400px, max 5MB' : 'Recommended: 1200x800px, max 5MB'
                                    }, void 0, false, {
                                        fileName: "[project]/ghana-trotro-admin/components/notifications/CreateNotification.tsx",
                                        lineNumber: 834,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        ref: fileInputRef,
                                        type: "file",
                                        accept: "image/*",
                                        onChange: (e_7)=>{
                                            const file_2 = e_7.target.files?.[0];
                                            if (file_2) handleFileSelect(file_2);
                                        },
                                        className: "hidden",
                                        disabled: isSubmitting || uploading
                                    }, void 0, false, {
                                        fileName: "[project]/ghana-trotro-admin/components/notifications/CreateNotification.tsx",
                                        lineNumber: 837,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/ghana-trotro-admin/components/notifications/CreateNotification.tsx",
                                lineNumber: 831,
                                columnNumber: 22
                            }, this),
                            uploading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "inline-block animate-spin rounded-full h-5 w-5 border-b-2 border-primary"
                                    }, void 0, false, {
                                        fileName: "[project]/ghana-trotro-admin/components/notifications/CreateNotification.tsx",
                                        lineNumber: 844,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ml-2 text-text-light",
                                        children: "Uploading image..."
                                    }, void 0, false, {
                                        fileName: "[project]/ghana-trotro-admin/components/notifications/CreateNotification.tsx",
                                        lineNumber: 845,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/ghana-trotro-admin/components/notifications/CreateNotification.tsx",
                                lineNumber: 843,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/ghana-trotro-admin/components/notifications/CreateNotification.tsx",
                        lineNumber: 769,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-end space-x-4 pt-4 border-t border-border",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onSuccess,
                                className: "px-6 py-2 border border-border rounded-lg text-text hover:bg-gray-50 transition-colors disabled:opacity-50",
                                disabled: isSubmitting || uploading,
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/ghana-trotro-admin/components/notifications/CreateNotification.tsx",
                                lineNumber: 854,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                disabled: isSubmitting || uploading,
                                className: "px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2",
                                children: isSubmitting || uploading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "animate-spin rounded-full h-4 w-4 border-b-2 border-white"
                                        }, void 0, false, {
                                            fileName: "[project]/ghana-trotro-admin/components/notifications/CreateNotification.tsx",
                                            lineNumber: 859,
                                            columnNumber: 17
                                        }, this),
                                        uploading ? 'Uploading...' : 'Creating...'
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiSave"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/ghana-trotro-admin/components/notifications/CreateNotification.tsx",
                                            lineNumber: 862,
                                            columnNumber: 17
                                        }, this),
                                        "Create Notification"
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/ghana-trotro-admin/components/notifications/CreateNotification.tsx",
                                lineNumber: 857,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/ghana-trotro-admin/components/notifications/CreateNotification.tsx",
                        lineNumber: 853,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/ghana-trotro-admin/components/notifications/CreateNotification.tsx",
                lineNumber: 687,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/ghana-trotro-admin/components/notifications/CreateNotification.tsx",
        lineNumber: 684,
        columnNumber: 10
    }, this);
}
_s(CreateNotification, "7GMCak2k8+rF/EHafTPtygTfWiY=");
_c = CreateNotification;
var _c;
__turbopack_context__.k.register(_c, "CreateNotification");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/ghana-trotro-admin/app/dashboard/notifications/create/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CreateNotificationPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ghana-trotro-admin/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ghana-trotro-admin/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ghana-trotro-admin/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$components$2f$notifications$2f$CreateNotification$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ghana-trotro-admin/components/notifications/CreateNotification.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ghana-trotro-admin/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ghana-trotro-admin/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ghana-trotro-admin/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ghana-trotro-admin/node_modules/next/navigation.js [app-client] (ecmascript)");
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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(16);
    if ($[0] !== "a7b218246b0f98c049c40f3d187f6fbdd2d8fece1686eed98d071f2e6e8fc117") {
        for(let $i = 0; $i < 16; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a7b218246b0f98c049c40f3d187f6fbdd2d8fece1686eed98d071f2e6e8fc117";
    }
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    if ($[1] !== router) {
        t0 = ({
            "CreateNotificationPage[handleSuccess]": ()=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Notification created successfully!");
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
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-3xl font-bold text-text",
                    children: "Create Notification"
                }, void 0, false, {
                    fileName: "[project]/ghana-trotro-admin/app/dashboard/notifications/create/page.tsx",
                    lineNumber: 37,
                    columnNumber: 15
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-text-light",
                    children: "Send notifications to users based on various criteria"
                }, void 0, false, {
                    fileName: "[project]/ghana-trotro-admin/app/dashboard/notifications/create/page.tsx",
                    lineNumber: 37,
                    columnNumber: 84
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/ghana-trotro-admin/app/dashboard/notifications/create/page.tsx",
            lineNumber: 37,
            columnNumber: 10
        }, this);
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    let t2;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/dashboard/notifications",
                    className: "flex items-center space-x-2 px-4 py-2 border border-border rounded-lg hover:bg-gray-50",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiArrowLeft"], {}, void 0, false, {
                            fileName: "[project]/ghana-trotro-admin/app/dashboard/notifications/create/page.tsx",
                            lineNumber: 44,
                            columnNumber: 202
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Back to Notifications"
                        }, void 0, false, {
                            fileName: "[project]/ghana-trotro-admin/app/dashboard/notifications/create/page.tsx",
                            lineNumber: 44,
                            columnNumber: 217
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/ghana-trotro-admin/app/dashboard/notifications/create/page.tsx",
                    lineNumber: 44,
                    columnNumber: 65
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/ghana-trotro-admin/app/dashboard/notifications/create/page.tsx",
            lineNumber: 44,
            columnNumber: 10
        }, this);
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6 border-b border-border",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-xl font-semibold text-text",
                    children: "Notification Details"
                }, void 0, false, {
                    fileName: "[project]/ghana-trotro-admin/app/dashboard/notifications/create/page.tsx",
                    lineNumber: 51,
                    columnNumber: 54
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-text-light",
                    children: "Fill in the details below to create a new notification"
                }, void 0, false, {
                    fileName: "[project]/ghana-trotro-admin/app/dashboard/notifications/create/page.tsx",
                    lineNumber: 51,
                    columnNumber: 127
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/ghana-trotro-admin/app/dashboard/notifications/create/page.tsx",
            lineNumber: 51,
            columnNumber: 10
        }, this);
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== handleSuccess) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-lg shadow",
            children: [
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$components$2f$notifications$2f$CreateNotification$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateNotification"], {
                        onSuccess: handleSuccess
                    }, void 0, false, {
                        fileName: "[project]/ghana-trotro-admin/app/dashboard/notifications/create/page.tsx",
                        lineNumber: 58,
                        columnNumber: 79
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/ghana-trotro-admin/app/dashboard/notifications/create/page.tsx",
                    lineNumber: 58,
                    columnNumber: 58
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/ghana-trotro-admin/app/dashboard/notifications/create/page.tsx",
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
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-lg font-semibold text-text mb-2",
            children: "📋 Targeting Tips"
        }, void 0, false, {
            fileName: "[project]/ghana-trotro-admin/app/dashboard/notifications/create/page.tsx",
            lineNumber: 66,
            columnNumber: 10
        }, this);
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            className: "flex items-start",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-primary mr-2",
                    children: "•"
                }, void 0, false, {
                    fileName: "[project]/ghana-trotro-admin/app/dashboard/notifications/create/page.tsx",
                    lineNumber: 73,
                    columnNumber: 43
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "Location-based:"
                        }, void 0, false, {
                            fileName: "[project]/ghana-trotro-admin/app/dashboard/notifications/create/page.tsx",
                            lineNumber: 73,
                            columnNumber: 93
                        }, this),
                        " Target users currently in specific regions"
                    ]
                }, void 0, true, {
                    fileName: "[project]/ghana-trotro-admin/app/dashboard/notifications/create/page.tsx",
                    lineNumber: 73,
                    columnNumber: 87
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/ghana-trotro-admin/app/dashboard/notifications/create/page.tsx",
            lineNumber: 73,
            columnNumber: 10
        }, this);
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            className: "flex items-start",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-primary mr-2",
                    children: "•"
                }, void 0, false, {
                    fileName: "[project]/ghana-trotro-admin/app/dashboard/notifications/create/page.tsx",
                    lineNumber: 80,
                    columnNumber: 43
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "Search history:"
                        }, void 0, false, {
                            fileName: "[project]/ghana-trotro-admin/app/dashboard/notifications/create/page.tsx",
                            lineNumber: 80,
                            columnNumber: 93
                        }, this),
                        " Target users who have searched for routes in specific regions (min. 2 searches)"
                    ]
                }, void 0, true, {
                    fileName: "[project]/ghana-trotro-admin/app/dashboard/notifications/create/page.tsx",
                    lineNumber: 80,
                    columnNumber: 87
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/ghana-trotro-admin/app/dashboard/notifications/create/page.tsx",
            lineNumber: 80,
            columnNumber: 10
        }, this);
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    let t8;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            className: "flex items-start",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-primary mr-2",
                    children: "•"
                }, void 0, false, {
                    fileName: "[project]/ghana-trotro-admin/app/dashboard/notifications/create/page.tsx",
                    lineNumber: 87,
                    columnNumber: 43
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "Device type:"
                        }, void 0, false, {
                            fileName: "[project]/ghana-trotro-admin/app/dashboard/notifications/create/page.tsx",
                            lineNumber: 87,
                            columnNumber: 93
                        }, this),
                        " Target users by their device (iOS, Android, etc.)"
                    ]
                }, void 0, true, {
                    fileName: "[project]/ghana-trotro-admin/app/dashboard/notifications/create/page.tsx",
                    lineNumber: 87,
                    columnNumber: 87
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/ghana-trotro-admin/app/dashboard/notifications/create/page.tsx",
            lineNumber: 87,
            columnNumber: 10
        }, this);
        $[11] = t8;
    } else {
        t8 = $[11];
    }
    let t9;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            className: "flex items-start",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-primary mr-2",
                    children: "•"
                }, void 0, false, {
                    fileName: "[project]/ghana-trotro-admin/app/dashboard/notifications/create/page.tsx",
                    lineNumber: 94,
                    columnNumber: 43
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "IMEI:"
                        }, void 0, false, {
                            fileName: "[project]/ghana-trotro-admin/app/dashboard/notifications/create/page.tsx",
                            lineNumber: 94,
                            columnNumber: 93
                        }, this),
                        " Target specific devices by their IMEI number"
                    ]
                }, void 0, true, {
                    fileName: "[project]/ghana-trotro-admin/app/dashboard/notifications/create/page.tsx",
                    lineNumber: 94,
                    columnNumber: 87
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/ghana-trotro-admin/app/dashboard/notifications/create/page.tsx",
            lineNumber: 94,
            columnNumber: 10
        }, this);
        $[12] = t9;
    } else {
        t9 = $[12];
    }
    let t10;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-blue-50 border border-blue-200 rounded-lg p-6",
            children: [
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "space-y-2 text-text-light",
                    children: [
                        t6,
                        t7,
                        t8,
                        t9,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "flex items-start",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-primary mr-2",
                                    children: "•"
                                }, void 0, false, {
                                    fileName: "[project]/ghana-trotro-admin/app/dashboard/notifications/create/page.tsx",
                                    lineNumber: 101,
                                    columnNumber: 172
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "All users:"
                                        }, void 0, false, {
                                            fileName: "[project]/ghana-trotro-admin/app/dashboard/notifications/create/page.tsx",
                                            lineNumber: 101,
                                            columnNumber: 222
                                        }, this),
                                        " Send to everyone in the system"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/ghana-trotro-admin/app/dashboard/notifications/create/page.tsx",
                                    lineNumber: 101,
                                    columnNumber: 216
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/ghana-trotro-admin/app/dashboard/notifications/create/page.tsx",
                            lineNumber: 101,
                            columnNumber: 139
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/ghana-trotro-admin/app/dashboard/notifications/create/page.tsx",
                    lineNumber: 101,
                    columnNumber: 81
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/ghana-trotro-admin/app/dashboard/notifications/create/page.tsx",
            lineNumber: 101,
            columnNumber: 11
        }, this);
        $[13] = t10;
    } else {
        t10 = $[13];
    }
    let t11;
    if ($[14] !== t4) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                t2,
                t4,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/ghana-trotro-admin/app/dashboard/notifications/create/page.tsx",
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
        __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
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

//# sourceMappingURL=ghana-trotro-admin_f0cd8c67._.js.map