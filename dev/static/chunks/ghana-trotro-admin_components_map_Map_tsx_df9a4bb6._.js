(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/ghana-trotro-admin/components/map/Map.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/map/Map.tsx
__turbopack_context__.s([
    "default",
    ()=>Map
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ghana-trotro-admin/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ghana-trotro-admin/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ghana-trotro-admin/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ghana-trotro-admin/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function Map(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(21);
    if ($[0] !== "70611ce663e80ed44c7107ce122ed50709e8324741b1538d753fa268b0dc36e0") {
        for(let $i = 0; $i < 21; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "70611ce663e80ed44c7107ce122ed50709e8324741b1538d753fa268b0dc36e0";
    }
    const { stops, selectedStop } = t0;
    const [view, setView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("map");
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-lg font-semibold text-text",
            children: "Stops Map View"
        }, void 0, false, {
            fileName: "[project]/ghana-trotro-admin/components/map/Map.tsx",
            lineNumber: 27,
            columnNumber: 10
        }, this);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "Map[<button>.onClick]": ()=>setView("map")
        })["Map[<button>.onClick]"];
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const t3 = `px-3 py-1 rounded-lg ${view === "map" ? "bg-primary text-white" : "bg-gray-100 text-text"}`;
    let t4;
    if ($[3] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t2,
            className: t3,
            children: "Map"
        }, void 0, false, {
            fileName: "[project]/ghana-trotro-admin/components/map/Map.tsx",
            lineNumber: 44,
            columnNumber: 10
        }, this);
        $[3] = t3;
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    let t5;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = ({
            "Map[<button>.onClick]": ()=>setView("list")
        })["Map[<button>.onClick]"];
        $[5] = t5;
    } else {
        t5 = $[5];
    }
    const t6 = `px-3 py-1 rounded-lg ${view === "list" ? "bg-primary text-white" : "bg-gray-100 text-text"}`;
    let t7;
    if ($[6] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t5,
            className: t6,
            children: "List"
        }, void 0, false, {
            fileName: "[project]/ghana-trotro-admin/components/map/Map.tsx",
            lineNumber: 62,
            columnNumber: 10
        }, this);
        $[6] = t6;
        $[7] = t7;
    } else {
        t7 = $[7];
    }
    let t8;
    if ($[8] !== t4 || $[9] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between mb-4",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex space-x-2",
                    children: [
                        t4,
                        t7
                    ]
                }, void 0, true, {
                    fileName: "[project]/ghana-trotro-admin/components/map/Map.tsx",
                    lineNumber: 70,
                    columnNumber: 70
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/ghana-trotro-admin/components/map/Map.tsx",
            lineNumber: 70,
            columnNumber: 10
        }, this);
        $[8] = t4;
        $[9] = t7;
        $[10] = t8;
    } else {
        t8 = $[10];
    }
    let t9;
    if ($[11] !== selectedStop?.id || $[12] !== stops || $[13] !== view) {
        t9 = view === "map" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative h-80 bg-gray-100 rounded-lg overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 grid grid-cols-10 grid-rows-10 gap-1 p-4",
                    children: stops.slice(0, 30).map({
                        "Map[(anonymous)()]": (stop, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `relative flex items-center justify-center rounded-full cursor-pointer transition-transform hover:scale-125 ${selectedStop?.id === stop.id ? "bg-primary text-white" : "bg-primary/20 text-primary"}`,
                                title: `${stop.name} (${stop.latitude}, ${stop.longitude})`,
                                style: {
                                    gridColumn: index % 10 + 1,
                                    gridRow: Math.floor(index / 10) + 1
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiMapPin"], {
                                    size: selectedStop?.id === stop.id ? 20 : 16
                                }, void 0, false, {
                                    fileName: "[project]/ghana-trotro-admin/components/map/Map.tsx",
                                    lineNumber: 83,
                                    columnNumber: 14
                                }, this)
                            }, stop.id, false, {
                                fileName: "[project]/ghana-trotro-admin/components/map/Map.tsx",
                                lineNumber: 80,
                                columnNumber: 50
                            }, this)
                    }["Map[(anonymous)()]"])
                }, void 0, false, {
                    fileName: "[project]/ghana-trotro-admin/components/map/Map.tsx",
                    lineNumber: 79,
                    columnNumber: 97
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-4 h-4 bg-primary rounded-full mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/ghana-trotro-admin/components/map/Map.tsx",
                                        lineNumber: 84,
                                        columnNumber: 193
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm",
                                        children: "Selected Stop"
                                    }, void 0, false, {
                                        fileName: "[project]/ghana-trotro-admin/components/map/Map.tsx",
                                        lineNumber: 84,
                                        columnNumber: 249
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/ghana-trotro-admin/components/map/Map.tsx",
                                lineNumber: 84,
                                columnNumber: 158
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-4 h-4 bg-primary/20 rounded-full mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/ghana-trotro-admin/components/map/Map.tsx",
                                        lineNumber: 84,
                                        columnNumber: 336
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm",
                                        children: "Other Stops"
                                    }, void 0, false, {
                                        fileName: "[project]/ghana-trotro-admin/components/map/Map.tsx",
                                        lineNumber: 84,
                                        columnNumber: 395
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/ghana-trotro-admin/components/map/Map.tsx",
                                lineNumber: 84,
                                columnNumber: 301
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/ghana-trotro-admin/components/map/Map.tsx",
                        lineNumber: 84,
                        columnNumber: 113
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/ghana-trotro-admin/components/map/Map.tsx",
                    lineNumber: 84,
                    columnNumber: 40
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/ghana-trotro-admin/components/map/Map.tsx",
            lineNumber: 79,
            columnNumber: 27
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-80 overflow-y-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: stops.map({
                    "Map[stops.map()]": (stop_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `p-3 rounded-lg border ${selectedStop?.id === stop_0.id ? "border-primary bg-primary/5" : "border-border hover:bg-gray-50"}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiMapPin"], {
                                                className: `mr-3 ${selectedStop?.id === stop_0.id ? "text-primary" : "text-text-light"}`
                                            }, void 0, false, {
                                                fileName: "[project]/ghana-trotro-admin/components/map/Map.tsx",
                                                lineNumber: 85,
                                                columnNumber: 285
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-medium text-text",
                                                        children: stop_0.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/ghana-trotro-admin/components/map/Map.tsx",
                                                        lineNumber: 85,
                                                        columnNumber: 392
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-text-light",
                                                        children: [
                                                            stop_0.latitude.toFixed(4),
                                                            ", ",
                                                            stop_0.longitude.toFixed(4)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/ghana-trotro-admin/components/map/Map.tsx",
                                                        lineNumber: 85,
                                                        columnNumber: 446
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/ghana-trotro-admin/components/map/Map.tsx",
                                                lineNumber: 85,
                                                columnNumber: 387
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/ghana-trotro-admin/components/map/Map.tsx",
                                        lineNumber: 85,
                                        columnNumber: 250
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-text-light",
                                        children: new Date(stop_0.created_at).toLocaleDateString()
                                    }, void 0, false, {
                                        fileName: "[project]/ghana-trotro-admin/components/map/Map.tsx",
                                        lineNumber: 85,
                                        columnNumber: 560
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/ghana-trotro-admin/components/map/Map.tsx",
                                lineNumber: 85,
                                columnNumber: 199
                            }, this)
                        }, stop_0.id, false, {
                            fileName: "[project]/ghana-trotro-admin/components/map/Map.tsx",
                            lineNumber: 85,
                            columnNumber: 41
                        }, this)
                }["Map[stops.map()]"])
            }, void 0, false, {
                fileName: "[project]/ghana-trotro-admin/components/map/Map.tsx",
                lineNumber: 84,
                columnNumber: 504
            }, this)
        }, void 0, false, {
            fileName: "[project]/ghana-trotro-admin/components/map/Map.tsx",
            lineNumber: 84,
            columnNumber: 466
        }, this);
        $[11] = selectedStop?.id;
        $[12] = stops;
        $[13] = view;
        $[14] = t9;
    } else {
        t9 = $[14];
    }
    let t10;
    if ($[15] !== stops.length) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-4 text-sm text-text-light",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: [
                    "Showing ",
                    stops.length,
                    " stops. Click on a stop to view details."
                ]
            }, void 0, true, {
                fileName: "[project]/ghana-trotro-admin/components/map/Map.tsx",
                lineNumber: 96,
                columnNumber: 57
            }, this)
        }, void 0, false, {
            fileName: "[project]/ghana-trotro-admin/components/map/Map.tsx",
            lineNumber: 96,
            columnNumber: 11
        }, this);
        $[15] = stops.length;
        $[16] = t10;
    } else {
        t10 = $[16];
    }
    let t11;
    if ($[17] !== t10 || $[18] !== t8 || $[19] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ghana$2d$trotro$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full",
            children: [
                t8,
                t9,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/ghana-trotro-admin/components/map/Map.tsx",
            lineNumber: 104,
            columnNumber: 11
        }, this);
        $[17] = t10;
        $[18] = t8;
        $[19] = t9;
        $[20] = t11;
    } else {
        t11 = $[20];
    }
    return t11;
}
_s(Map, "NLBvrMBx3WytRUxqoEZX/I8wL5c=");
_c = Map;
var _c;
__turbopack_context__.k.register(_c, "Map");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/ghana-trotro-admin/components/map/Map.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/ghana-trotro-admin/components/map/Map.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=ghana-trotro-admin_components_map_Map_tsx_df9a4bb6._.js.map