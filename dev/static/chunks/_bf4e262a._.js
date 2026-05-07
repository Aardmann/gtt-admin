(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/layout/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$providers$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/providers/AuthProvider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function Header(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(21);
    if ($[0] !== "243c22c22d0dc55c58a23bc473182fab36dc9fc87c7b6273ea19cfeb12bb557a") {
        for(let $i = 0; $i < 21; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "243c22c22d0dc55c58a23bc473182fab36dc9fc87c7b6273ea19cfeb12bb557a";
    }
    const { title, subtitle } = t0;
    const { session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$providers$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    let t1;
    if ($[1] !== title) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-2xl font-bold text-text",
            children: title
        }, void 0, false, {
            fileName: "[project]/components/layout/Header.tsx",
            lineNumber: 23,
            columnNumber: 10
        }, this);
        $[1] = title;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== subtitle) {
        t2 = subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-text-light",
            children: subtitle
        }, void 0, false, {
            fileName: "[project]/components/layout/Header.tsx",
            lineNumber: 31,
            columnNumber: 22
        }, this);
        $[3] = subtitle;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== t1 || $[6] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t1,
                t2
            ]
        }, void 0, true, {
            fileName: "[project]/components/layout/Header.tsx",
            lineNumber: 39,
            columnNumber: 10
        }, this);
        $[5] = t1;
        $[6] = t2;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiSearch"], {
                    className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-text-light"
                }, void 0, false, {
                    fileName: "[project]/components/layout/Header.tsx",
                    lineNumber: 48,
                    columnNumber: 36
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    placeholder: "Search...",
                    className: "pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                }, void 0, false, {
                    fileName: "[project]/components/layout/Header.tsx",
                    lineNumber: 48,
                    columnNumber: 127
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/layout/Header.tsx",
            lineNumber: 48,
            columnNumber: 10
        }, this);
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "relative p-2 hover:bg-gray-100 rounded-lg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiBell"], {
                    size: 20,
                    className: "text-text-light"
                }, void 0, false, {
                    fileName: "[project]/components/layout/Header.tsx",
                    lineNumber: 55,
                    columnNumber: 72
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "absolute top-1 right-1 w-2 h-2 bg-error rounded-full"
                }, void 0, false, {
                    fileName: "[project]/components/layout/Header.tsx",
                    lineNumber: 55,
                    columnNumber: 120
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/layout/Header.tsx",
            lineNumber: 55,
            columnNumber: 10
        }, this);
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-10 h-10 bg-primary-light rounded-full flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiUser"], {
                className: "text-white"
            }, void 0, false, {
                fileName: "[project]/components/layout/Header.tsx",
                lineNumber: 62,
                columnNumber: 100
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/layout/Header.tsx",
            lineNumber: 62,
            columnNumber: 10
        }, this);
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] !== session?.user?.email) {
        t7 = session?.user?.email?.split("@")[0] || "Admin";
        $[11] = session?.user?.email;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    let t8;
    if ($[13] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm font-medium text-text",
            children: t7
        }, void 0, false, {
            fileName: "[project]/components/layout/Header.tsx",
            lineNumber: 77,
            columnNumber: 10
        }, this);
        $[13] = t7;
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    let t9;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-text-light",
            children: "Administrator"
        }, void 0, false, {
            fileName: "[project]/components/layout/Header.tsx",
            lineNumber: 85,
            columnNumber: 10
        }, this);
        $[15] = t9;
    } else {
        t9 = $[15];
    }
    let t10;
    if ($[16] !== t8) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center space-x-4",
            children: [
                t4,
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center space-x-3",
                    children: [
                        t6,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                t8,
                                t9
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/layout/Header.tsx",
                            lineNumber: 92,
                            columnNumber: 113
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/layout/Header.tsx",
                    lineNumber: 92,
                    columnNumber: 64
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/layout/Header.tsx",
            lineNumber: 92,
            columnNumber: 11
        }, this);
        $[16] = t8;
        $[17] = t10;
    } else {
        t10 = $[17];
    }
    let t11;
    if ($[18] !== t10 || $[19] !== t3) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "bg-white border-b border-border p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    t3,
                    t10
                ]
            }, void 0, true, {
                fileName: "[project]/components/layout/Header.tsx",
                lineNumber: 100,
                columnNumber: 67
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/layout/Header.tsx",
            lineNumber: 100,
            columnNumber: 11
        }, this);
        $[18] = t10;
        $[19] = t3;
        $[20] = t11;
    } else {
        t11 = $[20];
    }
    return t11;
}
_s(Header, "y21WqLRazebX3DfpuZQs55pH2Ec=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$providers$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
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
"[project]/components/dashboard/RoutesTable.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/dashboard/RoutesTable.tsx
__turbopack_context__.s([
    "RoutesTable",
    ()=>RoutesTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$Loader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/common/Loader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function RoutesTable(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "88d318a7523a9422dec3b40d5e918f7454c07a602bef324734937da26f753f78") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "88d318a7523a9422dec3b40d5e918f7454c07a602bef324734937da26f753f78";
    }
    const { routes, loading, onApprove, onReject, onDelete } = t0;
    const [, setSelectedRoute] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    if (loading) {
        let t1;
        if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
            t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$Loader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Loader"], {
                message: "Loading routes..."
            }, void 0, false, {
                fileName: "[project]/components/dashboard/RoutesTable.tsx",
                lineNumber: 35,
                columnNumber: 12
            }, this);
            $[1] = t1;
        } else {
            t1 = $[1];
        }
        return t1;
    }
    if (routes.length === 0) {
        let t1;
        if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
            t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiMap"], {
                        className: "mx-auto text-4xl text-text-light mb-4"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/RoutesTable.tsx",
                        lineNumber: 45,
                        columnNumber: 47
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-text",
                        children: "No routes found"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/RoutesTable.tsx",
                        lineNumber: 45,
                        columnNumber: 106
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-text-light",
                        children: "No routes match your search criteria"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/RoutesTable.tsx",
                        lineNumber: 45,
                        columnNumber: 150
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/RoutesTable.tsx",
                lineNumber: 45,
                columnNumber: 12
            }, this);
            $[2] = t1;
        } else {
            t1 = $[2];
        }
        return t1;
    }
    let t1;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                className: "bg-gray-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                        className: "px-6 py-3 text-left text-xs font-medium text-text-light uppercase tracking-wider",
                        children: "Route Details"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/RoutesTable.tsx",
                        lineNumber: 54,
                        columnNumber: 44
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                        className: "px-6 py-3 text-left text-xs font-medium text-text-light uppercase tracking-wider",
                        children: "Stops"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/RoutesTable.tsx",
                        lineNumber: 54,
                        columnNumber: 159
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                        className: "px-6 py-3 text-left text-xs font-medium text-text-light uppercase tracking-wider",
                        children: "Status"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/RoutesTable.tsx",
                        lineNumber: 54,
                        columnNumber: 266
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                        className: "px-6 py-3 text-left text-xs font-medium text-text-light uppercase tracking-wider",
                        children: "Actions"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/RoutesTable.tsx",
                        lineNumber: 54,
                        columnNumber: 374
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/RoutesTable.tsx",
                lineNumber: 54,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/dashboard/RoutesTable.tsx",
            lineNumber: 54,
            columnNumber: 10
        }, this);
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    let t2;
    if ($[4] !== onApprove || $[5] !== onDelete || $[6] !== onReject || $[7] !== routes) {
        let t3;
        if ($[9] !== onApprove || $[10] !== onDelete || $[11] !== onReject) {
            t3 = ({
                "RoutesTable[routes.map()]": (route)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                        className: "hover:bg-gray-50 cursor-pointer",
                        onClick: {
                            "RoutesTable[routes.map() > <tr>.onClick]": ()=>setSelectedRoute(route)
                        }["RoutesTable[routes.map() > <tr>.onClick]"],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                className: "px-6 py-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-medium text-text",
                                            children: route.name
                                        }, void 0, false, {
                                            fileName: "[project]/components/dashboard/RoutesTable.tsx",
                                            lineNumber: 66,
                                            columnNumber: 87
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-text-light mt-1 line-clamp-2",
                                            children: route.description || "No description"
                                        }, void 0, false, {
                                            fileName: "[project]/components/dashboard/RoutesTable.tsx",
                                            lineNumber: 66,
                                            columnNumber: 144
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center space-x-4 mt-2 text-sm text-text-light",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiClock"], {
                                                            className: "mr-1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/dashboard/RoutesTable.tsx",
                                                            lineNumber: 66,
                                                            columnNumber: 357
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                route.travel_time_minutes || "N/A",
                                                                " mins"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/dashboard/RoutesTable.tsx",
                                                            lineNumber: 66,
                                                            columnNumber: 385
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/dashboard/RoutesTable.tsx",
                                                    lineNumber: 66,
                                                    columnNumber: 322
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiMap"], {
                                                            className: "mr-1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/dashboard/RoutesTable.tsx",
                                                            lineNumber: 66,
                                                            columnNumber: 480
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: route.total_distance ? `${route.total_distance} km` : "N/A"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/dashboard/RoutesTable.tsx",
                                                            lineNumber: 66,
                                                            columnNumber: 506
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/dashboard/RoutesTable.tsx",
                                                    lineNumber: 66,
                                                    columnNumber: 445
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            "GH₵",
                                                            route.total_fare || "N/A"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/dashboard/RoutesTable.tsx",
                                                        lineNumber: 66,
                                                        columnNumber: 591
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/dashboard/RoutesTable.tsx",
                                                    lineNumber: 66,
                                                    columnNumber: 586
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/dashboard/RoutesTable.tsx",
                                            lineNumber: 66,
                                            columnNumber: 248
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/dashboard/RoutesTable.tsx",
                                    lineNumber: 66,
                                    columnNumber: 82
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/RoutesTable.tsx",
                                lineNumber: 66,
                                columnNumber: 56
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                className: "px-6 py-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center text-sm text-text-light",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiMap"], {
                                                className: "mr-2"
                                            }, void 0, false, {
                                                fileName: "[project]/components/dashboard/RoutesTable.tsx",
                                                lineNumber: 66,
                                                columnNumber: 742
                                            }, this),
                                            route.stops?.length || 0,
                                            " stops"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/dashboard/RoutesTable.tsx",
                                        lineNumber: 66,
                                        columnNumber: 683
                                    }, this),
                                    route.vehicle_type && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-text-light mt-1",
                                        children: route.vehicle_type
                                    }, void 0, false, {
                                        fileName: "[project]/components/dashboard/RoutesTable.tsx",
                                        lineNumber: 66,
                                        columnNumber: 829
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/dashboard/RoutesTable.tsx",
                                lineNumber: 66,
                                columnNumber: 657
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                className: "px-6 py-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `px-2 py-1 text-xs rounded-full ${route.approved ? "bg-success/10 text-success" : "bg-yellow-100 text-yellow-800"}`,
                                        children: route.approved ? "Approved" : "Pending"
                                    }, void 0, false, {
                                        fileName: "[project]/components/dashboard/RoutesTable.tsx",
                                        lineNumber: 66,
                                        columnNumber: 933
                                    }, this),
                                    route.rejection_reason && !route.approved && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-text-light mt-1",
                                        children: [
                                            "Reason: ",
                                            route.rejection_reason
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/dashboard/RoutesTable.tsx",
                                        lineNumber: 66,
                                        columnNumber: 1161
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/dashboard/RoutesTable.tsx",
                                lineNumber: 66,
                                columnNumber: 907
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                className: "px-6 py-4 space-x-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: _RoutesTableRoutesMapButtonOnClick,
                                        className: "inline-flex items-center px-3 py-1 bg-primary text-white rounded-md hover:bg-primary-dark text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiEye"], {
                                                className: "mr-1"
                                            }, void 0, false, {
                                                fileName: "[project]/components/dashboard/RoutesTable.tsx",
                                                lineNumber: 66,
                                                columnNumber: 1450
                                            }, this),
                                            "View"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/dashboard/RoutesTable.tsx",
                                        lineNumber: 66,
                                        columnNumber: 1287
                                    }, this),
                                    !route.approved && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: {
                                                    "RoutesTable[routes.map() > <button>.onClick]": (e_0)=>{
                                                        e_0.stopPropagation();
                                                        onApprove(route.id);
                                                    }
                                                }["RoutesTable[routes.map() > <button>.onClick]"],
                                                className: "inline-flex items-center px-3 py-1 bg-success text-white rounded-md hover:bg-success/90 text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiCheck"], {
                                                        className: "mr-1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/dashboard/RoutesTable.tsx",
                                                        lineNumber: 71,
                                                        columnNumber: 174
                                                    }, this),
                                                    "Approve"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/dashboard/RoutesTable.tsx",
                                                lineNumber: 66,
                                                columnNumber: 1511
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: {
                                                    "RoutesTable[routes.map() > <button>.onClick]": (e_1)=>{
                                                        e_1.stopPropagation();
                                                        const reason = prompt("Enter rejection reason:");
                                                        if (reason) {
                                                            onReject(route.id);
                                                        }
                                                    }
                                                }["RoutesTable[routes.map() > <button>.onClick]"],
                                                className: "inline-flex items-center px-3 py-1 bg-error text-white rounded-md hover:bg-error/90 text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiX"], {
                                                        className: "mr-1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/dashboard/RoutesTable.tsx",
                                                        lineNumber: 79,
                                                        columnNumber: 170
                                                    }, this),
                                                    "Reject"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/dashboard/RoutesTable.tsx",
                                                lineNumber: 71,
                                                columnNumber: 218
                                            }, this)
                                        ]
                                    }, void 0, true),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: {
                                            "RoutesTable[routes.map() > <button>.onClick]": (e_2)=>{
                                                e_2.stopPropagation();
                                                if (confirm("Are you sure you want to delete this route?")) {
                                                    onDelete(route.id);
                                                }
                                            }
                                        }["RoutesTable[routes.map() > <button>.onClick]"],
                                        className: "inline-flex items-center px-3 py-1 bg-gray-200 text-text rounded-md hover:bg-gray-300 text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiTrash2"], {
                                                className: "mr-1"
                                            }, void 0, false, {
                                                fileName: "[project]/components/dashboard/RoutesTable.tsx",
                                                lineNumber: 86,
                                                columnNumber: 170
                                            }, this),
                                            "Delete"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/dashboard/RoutesTable.tsx",
                                        lineNumber: 79,
                                        columnNumber: 213
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/dashboard/RoutesTable.tsx",
                                lineNumber: 66,
                                columnNumber: 1251
                            }, this)
                        ]
                    }, route.id, true, {
                        fileName: "[project]/components/dashboard/RoutesTable.tsx",
                        lineNumber: 64,
                        columnNumber: 47
                    }, this)
            })["RoutesTable[routes.map()]"];
            $[9] = onApprove;
            $[10] = onDelete;
            $[11] = onReject;
            $[12] = t3;
        } else {
            t3 = $[12];
        }
        t2 = routes.map(t3);
        $[4] = onApprove;
        $[5] = onDelete;
        $[6] = onReject;
        $[7] = routes;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    let t3;
    if ($[13] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "overflow-x-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                className: "min-w-full divide-y divide-border",
                children: [
                    t1,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                        className: "bg-white divide-y divide-border",
                        children: t2
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/RoutesTable.tsx",
                        lineNumber: 106,
                        columnNumber: 100
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/RoutesTable.tsx",
                lineNumber: 106,
                columnNumber: 43
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/dashboard/RoutesTable.tsx",
            lineNumber: 106,
            columnNumber: 10
        }, this);
        $[13] = t2;
        $[14] = t3;
    } else {
        t3 = $[14];
    }
    return t3;
}
_s(RoutesTable, "WMv+sryTDoz/GzLKRFNM74U1yDQ=");
_c = RoutesTable;
function _RoutesTableRoutesMapButtonOnClick(e) {
    location.href = "https://aardmann.github.io/ghana-trotro-transit-admin-web/";
}
var _c;
__turbopack_context__.k.register(_c, "RoutesTable");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/common/SearchBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SearchBar",
    ()=>SearchBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
'use client';
;
;
;
function SearchBar(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "8bc512b81f8c16f42eb7a6cb64abd534276b86084f342bd30fa7d2f540baba9e") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8bc512b81f8c16f42eb7a6cb64abd534276b86084f342bd30fa7d2f540baba9e";
    }
    const { value, onChange, placeholder: t1 } = t0;
    const placeholder = t1 === undefined ? "Search..." : t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiSearch"], {
            className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-text-light"
        }, void 0, false, {
            fileName: "[project]/components/common/SearchBar.tsx",
            lineNumber: 26,
            columnNumber: 10
        }, this);
        $[1] = t2;
    } else {
        t2 = $[1];
    }
    let t3;
    if ($[2] !== onChange) {
        t3 = ({
            "SearchBar[<input>.onChange]": (e)=>onChange(e.target.value)
        })["SearchBar[<input>.onChange]"];
        $[2] = onChange;
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    let t4;
    if ($[4] !== placeholder || $[5] !== t3 || $[6] !== value) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    value: value,
                    onChange: t3,
                    placeholder: placeholder,
                    className: "pl-10 pr-4 py-2 w-64 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                }, void 0, false, {
                    fileName: "[project]/components/common/SearchBar.tsx",
                    lineNumber: 43,
                    columnNumber: 40
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/common/SearchBar.tsx",
            lineNumber: 43,
            columnNumber: 10
        }, this);
        $[4] = placeholder;
        $[5] = t3;
        $[6] = value;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    return t4;
}
_c = SearchBar;
var _c;
__turbopack_context__.k.register(_c, "SearchBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/common/Pagination.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Pagination",
    ()=>Pagination
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
'use client';
;
;
;
function Pagination(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(32);
    if ($[0] !== "34dfd43ae58ddabe2874744bc8fef79929f9aa419410f1138c0be307bc91225e") {
        for(let $i = 0; $i < 32; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "34dfd43ae58ddabe2874744bc8fef79929f9aa419410f1138c0be307bc91225e";
    }
    const { currentPage, totalPages, onPageChange } = t0;
    if (totalPages <= 1) {
        return null;
    }
    let pages;
    if ($[1] !== totalPages) {
        pages = [];
        for(let i = 1; i <= Math.min(totalPages, 5); i++){
            pages.push(i);
        }
        $[1] = totalPages;
        $[2] = pages;
    } else {
        pages = $[2];
    }
    let t1;
    if ($[3] !== currentPage || $[4] !== onPageChange) {
        t1 = ({
            "Pagination[<button>.onClick]": ()=>onPageChange(currentPage - 1)
        })["Pagination[<button>.onClick]"];
        $[3] = currentPage;
        $[4] = onPageChange;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    const t2 = currentPage === 1;
    let t3;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiChevronLeft"], {}, void 0, false, {
            fileName: "[project]/components/common/Pagination.tsx",
            lineNumber: 51,
            columnNumber: 10
        }, this);
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== t1 || $[8] !== t2) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t1,
            disabled: t2,
            className: "p-2 border border-border rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50",
            children: t3
        }, void 0, false, {
            fileName: "[project]/components/common/Pagination.tsx",
            lineNumber: 58,
            columnNumber: 10
        }, this);
        $[7] = t1;
        $[8] = t2;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    let t5;
    if ($[10] !== currentPage || $[11] !== onPageChange || $[12] !== pages) {
        t5 = pages.map({
            "Pagination[pages.map()]": (page)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: {
                        "Pagination[pages.map() > <button>.onClick]": ()=>onPageChange(page)
                    }["Pagination[pages.map() > <button>.onClick]"],
                    className: `w-10 h-10 flex items-center justify-center border rounded-lg ${currentPage === page ? "bg-primary text-white border-primary" : "border-border hover:bg-gray-50"}`,
                    children: page
                }, page, false, {
                    fileName: "[project]/components/common/Pagination.tsx",
                    lineNumber: 68,
                    columnNumber: 42
                }, this)
        }["Pagination[pages.map()]"]);
        $[10] = currentPage;
        $[11] = onPageChange;
        $[12] = pages;
        $[13] = t5;
    } else {
        t5 = $[13];
    }
    let t6;
    if ($[14] !== totalPages) {
        t6 = totalPages > 5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "px-3",
            children: "..."
        }, void 0, false, {
            fileName: "[project]/components/common/Pagination.tsx",
            lineNumber: 81,
            columnNumber: 28
        }, this);
        $[14] = totalPages;
        $[15] = t6;
    } else {
        t6 = $[15];
    }
    let t7;
    if ($[16] !== currentPage || $[17] !== onPageChange) {
        t7 = ({
            "Pagination[<button>.onClick]": ()=>onPageChange(currentPage + 1)
        })["Pagination[<button>.onClick]"];
        $[16] = currentPage;
        $[17] = onPageChange;
        $[18] = t7;
    } else {
        t7 = $[18];
    }
    const t8 = currentPage === totalPages;
    let t9;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiChevronRight"], {}, void 0, false, {
            fileName: "[project]/components/common/Pagination.tsx",
            lineNumber: 101,
            columnNumber: 10
        }, this);
        $[19] = t9;
    } else {
        t9 = $[19];
    }
    let t10;
    if ($[20] !== t7 || $[21] !== t8) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t7,
            disabled: t8,
            className: "p-2 border border-border rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50",
            children: t9
        }, void 0, false, {
            fileName: "[project]/components/common/Pagination.tsx",
            lineNumber: 108,
            columnNumber: 11
        }, this);
        $[20] = t7;
        $[21] = t8;
        $[22] = t10;
    } else {
        t10 = $[22];
    }
    let t11;
    if ($[23] !== currentPage || $[24] !== totalPages) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-text-light text-sm ml-4",
            children: [
                "Page ",
                currentPage,
                " of ",
                totalPages
            ]
        }, void 0, true, {
            fileName: "[project]/components/common/Pagination.tsx",
            lineNumber: 117,
            columnNumber: 11
        }, this);
        $[23] = currentPage;
        $[24] = totalPages;
        $[25] = t11;
    } else {
        t11 = $[25];
    }
    let t12;
    if ($[26] !== t10 || $[27] !== t11 || $[28] !== t4 || $[29] !== t5 || $[30] !== t6) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center space-x-2 mt-6",
            children: [
                t4,
                t5,
                t6,
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/components/common/Pagination.tsx",
            lineNumber: 126,
            columnNumber: 11
        }, this);
        $[26] = t10;
        $[27] = t11;
        $[28] = t4;
        $[29] = t5;
        $[30] = t6;
        $[31] = t12;
    } else {
        t12 = $[31];
    }
    return t12;
}
_c = Pagination;
var _c;
__turbopack_context__.k.register(_c, "Pagination");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useRoutes.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// hooks/useRoutes.ts - Add missing functions
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
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const fetchRoutes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useRoutes.useCallback[fetchRoutes]": async ()=>{
            try {
                setLoading(true);
                setError(null);
                const { data, error: fetchError } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('routes').select('*').order('created_at', {
                    ascending: false
                });
                if (fetchError) throw fetchError;
                setRoutes(data || []);
            } catch (err) {
                console.error('Failed to fetch routes:', err);
                setError(err.message);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Failed to load routes');
            } finally{
                setLoading(false);
            }
        }
    }["useRoutes.useCallback[fetchRoutes]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useRoutes.useEffect": ()=>{
            fetchRoutes();
        }
    }["useRoutes.useEffect"], [
        fetchRoutes
    ]);
    const approveRoute = async (routeId)=>{
        try {
            const { error: error_0 } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('routes').update({
                approved: true,
                rejection_reason: null,
                updated_at: new Date().toISOString()
            }).eq('id', routeId);
            if (error_0) throw error_0;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('Route approved successfully');
            fetchRoutes();
        } catch (err_0) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Failed to approve route: ' + err_0.message);
        }
    };
    const rejectRoute = async (routeId_0, reason)=>{
        try {
            const { error: error_1 } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('routes').update({
                approved: false,
                rejection_reason: reason,
                updated_at: new Date().toISOString()
            }).eq('id', routeId_0);
            if (error_1) throw error_1;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('Route rejected successfully');
            fetchRoutes();
        } catch (err_1) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Failed to reject route: ' + err_1.message);
        }
    };
    const deleteRoute = async (routeId_1)=>{
        if (!confirm('Are you sure you want to delete this route?')) return;
        try {
            const { error: error_2 } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('routes').delete().eq('id', routeId_1);
            if (error_2) throw error_2;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('Route deleted successfully');
            fetchRoutes();
        } catch (err_2) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Failed to delete route: ' + err_2.message);
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
"[project]/app/dashboard/routes/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/dashboard/routes/page.tsx
__turbopack_context__.s([
    "default",
    ()=>RoutesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layout/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$RoutesTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard/RoutesTable.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$SearchBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/common/SearchBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$Pagination$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/common/Pagination.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useRoutes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useRoutes.ts [app-client] (ecmascript)");
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
function RoutesPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(108);
    if ($[0] !== "a31ff17eb791baa973c23cb5866d32655f5491e5923a0d80ce82162c6bde16a9") {
        for(let $i = 0; $i < 108; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a31ff17eb791baa973c23cb5866d32655f5491e5923a0d80ce82162c6bde16a9";
    }
    const { routes, loading, approveRoute, rejectRoute, deleteRoute } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useRoutes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRoutes"])();
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    let t0;
    let totalPages;
    if ($[1] !== filter || $[2] !== page || $[3] !== routes || $[4] !== search) {
        let t1;
        if ($[7] !== filter || $[8] !== search) {
            t1 = ({
                "RoutesPage[routes.filter()]": (route)=>{
                    if (search) {
                        const searchLower = search.toLowerCase();
                        const matchesSearch = route.name.toLowerCase().includes(searchLower) || route.description?.toLowerCase().includes(searchLower) || route.vehicle_type?.toLowerCase().includes(searchLower);
                        if (!matchesSearch) {
                            return false;
                        }
                    }
                    if (filter === "pending" && route.approved) {
                        return false;
                    }
                    if (filter === "approved" && !route.approved) {
                        return false;
                    }
                    return true;
                }
            })["RoutesPage[routes.filter()]"];
            $[7] = filter;
            $[8] = search;
            $[9] = t1;
        } else {
            t1 = $[9];
        }
        const filteredRoutes = routes.filter(t1);
        totalPages = Math.ceil(filteredRoutes.length / 10);
        t0 = filteredRoutes.slice((page - 1) * 10, page * 10);
        $[1] = filter;
        $[2] = page;
        $[3] = routes;
        $[4] = search;
        $[5] = t0;
        $[6] = totalPages;
    } else {
        t0 = $[5];
        totalPages = $[6];
    }
    const paginatedRoutes = t0;
    let routeStats;
    let t1;
    let t10;
    let t11;
    let t12;
    let t13;
    let t14;
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    let t7;
    let t8;
    let t9;
    if ($[10] !== approveRoute || $[11] !== deleteRoute || $[12] !== filter || $[13] !== loading || $[14] !== page || $[15] !== paginatedRoutes || $[16] !== rejectRoute || $[17] !== routes || $[18] !== search || $[19] !== totalPages) {
        routeStats = {
            total: routes.length,
            approved: routes.filter(_RoutesPageRoutesFilter).length,
            pending: routes.filter(_RoutesPageRoutesFilter2).length,
            totalDistance: routes.reduce(_RoutesPageRoutesReduce, 0),
            totalStops: routes.reduce(_RoutesPageRoutesReduce2, 0)
        };
        t13 = "space-y-6";
        if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
            t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Header"], {
                title: "Routes Management",
                subtitle: "Manage and approve routes, view route details"
            }, void 0, false, {
                fileName: "[project]/app/dashboard/routes/page.tsx",
                lineNumber: 98,
                columnNumber: 13
            }, this);
            $[35] = t14;
        } else {
            t14 = $[35];
        }
        t11 = "grid grid-cols-1 lg:grid-cols-3 gap-6";
        let t15;
        if ($[36] !== search) {
            t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$SearchBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchBar"], {
                value: search,
                onChange: setSearch,
                placeholder: "Search routes by name or description..."
            }, void 0, false, {
                fileName: "[project]/app/dashboard/routes/page.tsx",
                lineNumber: 106,
                columnNumber: 13
            }, this);
            $[36] = search;
            $[37] = t15;
        } else {
            t15 = $[37];
        }
        let t16;
        if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
            t16 = ({
                "RoutesPage[<select>.onChange]": (e)=>{
                    setFilter(e.target.value);
                    setPage(1);
                }
            })["RoutesPage[<select>.onChange]"];
            $[38] = t16;
        } else {
            t16 = $[38];
        }
        let t17;
        let t18;
        let t19;
        if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
            t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                value: "all",
                children: "All Routes"
            }, void 0, false, {
                fileName: "[project]/app/dashboard/routes/page.tsx",
                lineNumber: 128,
                columnNumber: 13
            }, this);
            t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                value: "approved",
                children: "Approved"
            }, void 0, false, {
                fileName: "[project]/app/dashboard/routes/page.tsx",
                lineNumber: 129,
                columnNumber: 13
            }, this);
            t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                value: "pending",
                children: "Pending"
            }, void 0, false, {
                fileName: "[project]/app/dashboard/routes/page.tsx",
                lineNumber: 130,
                columnNumber: 13
            }, this);
            $[39] = t17;
            $[40] = t18;
            $[41] = t19;
        } else {
            t17 = $[39];
            t18 = $[40];
            t19 = $[41];
        }
        let t20;
        if ($[42] !== filter) {
            t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                value: filter,
                onChange: t16,
                className: "px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary",
                children: [
                    t17,
                    t18,
                    t19
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/routes/page.tsx",
                lineNumber: 141,
                columnNumber: 13
            }, this);
            $[42] = filter;
            $[43] = t20;
        } else {
            t20 = $[43];
        }
        let t21;
        if ($[44] !== t15 || $[45] !== t20) {
            t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center space-x-4",
                children: [
                    t15,
                    t20
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/routes/page.tsx",
                lineNumber: 149,
                columnNumber: 13
            }, this);
            $[44] = t15;
            $[45] = t20;
            $[46] = t21;
        } else {
            t21 = $[46];
        }
        let t22;
        if ($[47] === Symbol.for("react.memo_cache_sentinel")) {
            t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center space-x-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: _RoutesPageButtonOnClick,
                    className: "flex items-center space-x-2 px-4 py-2 border border-border rounded-lg hover:bg-gray-50",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiDownload"], {}, void 0, false, {
                            fileName: "[project]/app/dashboard/routes/page.tsx",
                            lineNumber: 158,
                            columnNumber: 200
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Export"
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/routes/page.tsx",
                            lineNumber: 158,
                            columnNumber: 214
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/routes/page.tsx",
                    lineNumber: 158,
                    columnNumber: 58
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/dashboard/routes/page.tsx",
                lineNumber: 158,
                columnNumber: 13
            }, this);
            $[47] = t22;
        } else {
            t22 = $[47];
        }
        let t23;
        if ($[48] !== t21) {
            t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-6",
                children: [
                    t21,
                    t22
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/routes/page.tsx",
                lineNumber: 165,
                columnNumber: 13
            }, this);
            $[48] = t21;
            $[49] = t23;
        } else {
            t23 = $[49];
        }
        let t24;
        if ($[50] !== rejectRoute) {
            t24 = ({
                "RoutesPage[<RoutesTable>.onReject]": (routeId)=>{
                    const reason = prompt("Enter rejection reason:");
                    if (reason) {
                        rejectRoute(routeId, reason);
                    }
                }
            })["RoutesPage[<RoutesTable>.onReject]"];
            $[50] = rejectRoute;
            $[51] = t24;
        } else {
            t24 = $[51];
        }
        let t25;
        if ($[52] !== approveRoute || $[53] !== deleteRoute || $[54] !== loading || $[55] !== paginatedRoutes || $[56] !== t24) {
            t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$RoutesTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoutesTable"], {
                routes: paginatedRoutes,
                loading: loading,
                onApprove: approveRoute,
                onReject: t24,
                onDelete: deleteRoute
            }, void 0, false, {
                fileName: "[project]/app/dashboard/routes/page.tsx",
                lineNumber: 188,
                columnNumber: 13
            }, this);
            $[52] = approveRoute;
            $[53] = deleteRoute;
            $[54] = loading;
            $[55] = paginatedRoutes;
            $[56] = t24;
            $[57] = t25;
        } else {
            t25 = $[57];
        }
        let t26;
        if ($[58] !== page || $[59] !== totalPages) {
            t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$Pagination$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pagination"], {
                currentPage: page,
                totalPages: totalPages,
                onPageChange: setPage
            }, void 0, false, {
                fileName: "[project]/app/dashboard/routes/page.tsx",
                lineNumber: 200,
                columnNumber: 13
            }, this);
            $[58] = page;
            $[59] = totalPages;
            $[60] = t26;
        } else {
            t26 = $[60];
        }
        if ($[61] !== t23 || $[62] !== t25 || $[63] !== t26) {
            t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:col-span-2 space-y-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-lg shadow p-6",
                    children: [
                        t23,
                        t25,
                        t26
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/routes/page.tsx",
                    lineNumber: 208,
                    columnNumber: 54
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/dashboard/routes/page.tsx",
                lineNumber: 208,
                columnNumber: 13
            }, this);
            $[61] = t23;
            $[62] = t25;
            $[63] = t26;
            $[64] = t12;
        } else {
            t12 = $[64];
        }
        t10 = "space-y-6";
        t8 = "bg-white p-6 rounded-lg shadow";
        if ($[65] === Symbol.for("react.memo_cache_sentinel")) {
            t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-lg font-semibold text-text mb-4",
                children: "Route Statistics"
            }, void 0, false, {
                fileName: "[project]/app/dashboard/routes/page.tsx",
                lineNumber: 219,
                columnNumber: 12
            }, this);
            $[65] = t9;
        } else {
            t9 = $[65];
        }
        t4 = "space-y-4";
        let t27;
        if ($[66] === Symbol.for("react.memo_cache_sentinel")) {
            t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-text-light",
                children: "Total Routes"
            }, void 0, false, {
                fileName: "[project]/app/dashboard/routes/page.tsx",
                lineNumber: 227,
                columnNumber: 13
            }, this);
            $[66] = t27;
        } else {
            t27 = $[66];
        }
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t27,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-2xl font-bold text-text",
                    children: routeStats.total
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/routes/page.tsx",
                    lineNumber: 232,
                    columnNumber: 20
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/dashboard/routes/page.tsx",
            lineNumber: 232,
            columnNumber: 10
        }, this);
        let t28;
        if ($[67] === Symbol.for("react.memo_cache_sentinel")) {
            t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-text-light",
                children: "Approved"
            }, void 0, false, {
                fileName: "[project]/app/dashboard/routes/page.tsx",
                lineNumber: 235,
                columnNumber: 13
            }, this);
            $[67] = t28;
        } else {
            t28 = $[67];
        }
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t28,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-2xl font-bold text-success",
                    children: routeStats.approved
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/routes/page.tsx",
                    lineNumber: 240,
                    columnNumber: 20
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/dashboard/routes/page.tsx",
            lineNumber: 240,
            columnNumber: 10
        }, this);
        let t29;
        if ($[68] === Symbol.for("react.memo_cache_sentinel")) {
            t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-text-light",
                children: "Pending"
            }, void 0, false, {
                fileName: "[project]/app/dashboard/routes/page.tsx",
                lineNumber: 243,
                columnNumber: 13
            }, this);
            $[68] = t29;
        } else {
            t29 = $[68];
        }
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t29,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-2xl font-bold text-yellow-600",
                    children: routeStats.pending
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/routes/page.tsx",
                    lineNumber: 248,
                    columnNumber: 20
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/dashboard/routes/page.tsx",
            lineNumber: 248,
            columnNumber: 10
        }, this);
        if ($[69] === Symbol.for("react.memo_cache_sentinel")) {
            t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-text-light",
                children: "Total Distance"
            }, void 0, false, {
                fileName: "[project]/app/dashboard/routes/page.tsx",
                lineNumber: 250,
                columnNumber: 12
            }, this);
            $[69] = t3;
        } else {
            t3 = $[69];
        }
        t1 = "text-2xl font-bold text-primary";
        t2 = routeStats.totalDistance.toFixed(1);
        $[10] = approveRoute;
        $[11] = deleteRoute;
        $[12] = filter;
        $[13] = loading;
        $[14] = page;
        $[15] = paginatedRoutes;
        $[16] = rejectRoute;
        $[17] = routes;
        $[18] = search;
        $[19] = totalPages;
        $[20] = routeStats;
        $[21] = t1;
        $[22] = t10;
        $[23] = t11;
        $[24] = t12;
        $[25] = t13;
        $[26] = t14;
        $[27] = t2;
        $[28] = t3;
        $[29] = t4;
        $[30] = t5;
        $[31] = t6;
        $[32] = t7;
        $[33] = t8;
        $[34] = t9;
    } else {
        routeStats = $[20];
        t1 = $[21];
        t10 = $[22];
        t11 = $[23];
        t12 = $[24];
        t13 = $[25];
        t14 = $[26];
        t2 = $[27];
        t3 = $[28];
        t4 = $[29];
        t5 = $[30];
        t6 = $[31];
        t7 = $[32];
        t8 = $[33];
        t9 = $[34];
    }
    let t15;
    if ($[70] !== t1 || $[71] !== t2) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: t1,
            children: [
                t2,
                " km"
            ]
        }, void 0, true, {
            fileName: "[project]/app/dashboard/routes/page.tsx",
            lineNumber: 301,
            columnNumber: 11
        }, this);
        $[70] = t1;
        $[71] = t2;
        $[72] = t15;
    } else {
        t15 = $[72];
    }
    let t16;
    if ($[73] !== t15 || $[74] !== t3) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t3,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/app/dashboard/routes/page.tsx",
            lineNumber: 310,
            columnNumber: 11
        }, this);
        $[73] = t15;
        $[74] = t3;
        $[75] = t16;
    } else {
        t16 = $[75];
    }
    let t17;
    if ($[76] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-text-light",
            children: "Total Stops"
        }, void 0, false, {
            fileName: "[project]/app/dashboard/routes/page.tsx",
            lineNumber: 319,
            columnNumber: 11
        }, this);
        $[76] = t17;
    } else {
        t17 = $[76];
    }
    let t18;
    if ($[77] !== routeStats.totalStops) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t17,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-2xl font-bold text-purple-600",
                    children: routeStats.totalStops
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/routes/page.tsx",
                    lineNumber: 326,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/dashboard/routes/page.tsx",
            lineNumber: 326,
            columnNumber: 11
        }, this);
        $[77] = routeStats.totalStops;
        $[78] = t18;
    } else {
        t18 = $[78];
    }
    let t19;
    if ($[79] !== t16 || $[80] !== t18 || $[81] !== t4 || $[82] !== t5 || $[83] !== t6 || $[84] !== t7) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t4,
            children: [
                t5,
                t6,
                t7,
                t16,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/app/dashboard/routes/page.tsx",
            lineNumber: 334,
            columnNumber: 11
        }, this);
        $[79] = t16;
        $[80] = t18;
        $[81] = t4;
        $[82] = t5;
        $[83] = t6;
        $[84] = t7;
        $[85] = t19;
    } else {
        t19 = $[85];
    }
    let t20;
    if ($[86] !== t19 || $[87] !== t8 || $[88] !== t9) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t8,
            children: [
                t9,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/app/dashboard/routes/page.tsx",
            lineNumber: 347,
            columnNumber: 11
        }, this);
        $[86] = t19;
        $[87] = t8;
        $[88] = t9;
        $[89] = t20;
    } else {
        t20 = $[89];
    }
    let t21;
    if ($[90] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-lg font-semibold text-text mb-4",
            children: "Popular Vehicle Types"
        }, void 0, false, {
            fileName: "[project]/app/dashboard/routes/page.tsx",
            lineNumber: 357,
            columnNumber: 11
        }, this);
        $[90] = t21;
    } else {
        t21 = $[90];
    }
    let t22;
    if ($[91] !== routes) {
        t22 = Array.from(new Set(routes.map(_RoutesPageRoutesMap).filter(Boolean))).slice(0, 5);
        $[91] = routes;
        $[92] = t22;
    } else {
        t22 = $[92];
    }
    let t23;
    if ($[93] !== routes || $[94] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white p-6 rounded-lg shadow",
            children: [
                t21,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3",
                    children: t22.map({
                        "RoutesPage[(anonymous)()]": (type)=>{
                            const count = routes.filter({
                                "RoutesPage[(anonymous)() > routes.filter()]": (r_4)=>r_4.vehicle_type === type
                            }["RoutesPage[(anonymous)() > routes.filter()]"]).length;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-text",
                                        children: type
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/routes/page.tsx",
                                        lineNumber: 377,
                                        columnNumber: 82
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium text-primary",
                                        children: count
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/routes/page.tsx",
                                        lineNumber: 377,
                                        columnNumber: 123
                                    }, this)
                                ]
                            }, type, true, {
                                fileName: "[project]/app/dashboard/routes/page.tsx",
                                lineNumber: 377,
                                columnNumber: 20
                            }, this);
                        }
                    }["RoutesPage[(anonymous)()]"])
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/routes/page.tsx",
                    lineNumber: 372,
                    columnNumber: 64
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/dashboard/routes/page.tsx",
            lineNumber: 372,
            columnNumber: 11
        }, this);
        $[93] = routes;
        $[94] = t22;
        $[95] = t23;
    } else {
        t23 = $[95];
    }
    let t24;
    if ($[96] !== t10 || $[97] !== t20 || $[98] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t10,
            children: [
                t20,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/app/dashboard/routes/page.tsx",
            lineNumber: 388,
            columnNumber: 11
        }, this);
        $[96] = t10;
        $[97] = t20;
        $[98] = t23;
        $[99] = t24;
    } else {
        t24 = $[99];
    }
    let t25;
    if ($[100] !== t11 || $[101] !== t12 || $[102] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t11,
            children: [
                t12,
                t24
            ]
        }, void 0, true, {
            fileName: "[project]/app/dashboard/routes/page.tsx",
            lineNumber: 398,
            columnNumber: 11
        }, this);
        $[100] = t11;
        $[101] = t12;
        $[102] = t24;
        $[103] = t25;
    } else {
        t25 = $[103];
    }
    let t26;
    if ($[104] !== t13 || $[105] !== t14 || $[106] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t13,
            children: [
                t14,
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/app/dashboard/routes/page.tsx",
            lineNumber: 408,
            columnNumber: 11
        }, this);
        $[104] = t13;
        $[105] = t14;
        $[106] = t25;
        $[107] = t26;
    } else {
        t26 = $[107];
    }
    return t26;
}
_s(RoutesPage, "6uCBZVwP/AVEWEQWNuG/wBvKuGY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useRoutes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRoutes"]
    ];
});
_c = RoutesPage;
function _RoutesPageRoutesMap(r_3) {
    return r_3.vehicle_type;
}
function _RoutesPageButtonOnClick() {
    alert("Export feature coming soon!");
}
function _RoutesPageRoutesReduce2(sum_0, r_2) {
    return sum_0 + (r_2.stops?.length || 0);
}
function _RoutesPageRoutesReduce(sum, r_1) {
    return sum + (r_1.total_distance || 0);
}
function _RoutesPageRoutesFilter2(r_0) {
    return !r_0.approved;
}
function _RoutesPageRoutesFilter(r) {
    return r.approved;
}
var _c;
__turbopack_context__.k.register(_c, "RoutesPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_bf4e262a._.js.map