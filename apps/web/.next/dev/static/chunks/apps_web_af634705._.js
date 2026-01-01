(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/web/lib/supabase/client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createClient",
    ()=>createClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_babel-plugin-re_f3aa0ef20050acebca21685a51e97cbb/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$8$2e$0_$40$supabase$2b$supabase$2d$js$40$2$2e$89$2e$0$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@supabase+ssr@0.8.0_@supabase+supabase-js@2.89.0/node_modules/@supabase/ssr/dist/module/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$8$2e$0_$40$supabase$2b$supabase$2d$js$40$2$2e$89$2e$0$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@supabase+ssr@0.8.0_@supabase+supabase-js@2.89.0/node_modules/@supabase/ssr/dist/module/createBrowserClient.js [app-client] (ecmascript)");
;
function createClient() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$8$2e$0_$40$supabase$2b$supabase$2d$js$40$2$2e$89$2e$0$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBrowserClient"])(("TURBOPACK compile-time value", "https://zmwiyvaxmllhrxuhljlx.supabase.co"), ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inptd2l5dmF4bWxsaHJ4dWhsamx4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA3MTI1ODIsImV4cCI6MjA3NjI4ODU4Mn0.x6kqZqGLLb-lUmnNF4pXyFfiuAxd1oSmzZTikuJRqWs"));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/components/ui/dropdown-menu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DropdownMenu",
    ()=>DropdownMenu,
    "DropdownMenuCheckboxItem",
    ()=>DropdownMenuCheckboxItem,
    "DropdownMenuContent",
    ()=>DropdownMenuContent,
    "DropdownMenuGroup",
    ()=>DropdownMenuGroup,
    "DropdownMenuItem",
    ()=>DropdownMenuItem,
    "DropdownMenuLabel",
    ()=>DropdownMenuLabel,
    "DropdownMenuPortal",
    ()=>DropdownMenuPortal,
    "DropdownMenuRadioGroup",
    ()=>DropdownMenuRadioGroup,
    "DropdownMenuRadioItem",
    ()=>DropdownMenuRadioItem,
    "DropdownMenuSeparator",
    ()=>DropdownMenuSeparator,
    "DropdownMenuShortcut",
    ()=>DropdownMenuShortcut,
    "DropdownMenuSub",
    ()=>DropdownMenuSub,
    "DropdownMenuSubContent",
    ()=>DropdownMenuSubContent,
    "DropdownMenuSubTrigger",
    ()=>DropdownMenuSubTrigger,
    "DropdownMenuTrigger",
    ()=>DropdownMenuTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_babel-plugin-re_f3aa0ef20050acebca21685a51e97cbb/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dropdown$2d$me_9da4730925cfbc3ade5255efc0338bdd$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@radix-ui+react-dropdown-me_9da4730925cfbc3ade5255efc0338bdd/node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRightIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/circle.js [app-client] (ecmascript) <export default as CircleIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
function DropdownMenu({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dropdown$2d$me_9da4730925cfbc3ade5255efc0338bdd$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "dropdown-menu",
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/dropdown-menu.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = DropdownMenu;
function DropdownMenuPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dropdown$2d$me_9da4730925cfbc3ade5255efc0338bdd$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "dropdown-menu-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/dropdown-menu.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c1 = DropdownMenuPortal;
function DropdownMenuTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dropdown$2d$me_9da4730925cfbc3ade5255efc0338bdd$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "dropdown-menu-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/dropdown-menu.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_c2 = DropdownMenuTrigger;
function DropdownMenuContent({ className, sideOffset = 4, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dropdown$2d$me_9da4730925cfbc3ade5255efc0338bdd$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dropdown$2d$me_9da4730925cfbc3ade5255efc0338bdd$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
            "data-slot": "dropdown-menu-content",
            sideOffset: sideOffset,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md', className),
            ...props
        }, void 0, false, {
            fileName: "[project]/apps/web/components/ui/dropdown-menu.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/dropdown-menu.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_c3 = DropdownMenuContent;
function DropdownMenuGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dropdown$2d$me_9da4730925cfbc3ade5255efc0338bdd$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
        "data-slot": "dropdown-menu-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/dropdown-menu.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_c4 = DropdownMenuGroup;
function DropdownMenuItem({ className, inset, variant = 'default', ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dropdown$2d$me_9da4730925cfbc3ade5255efc0338bdd$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
        "data-slot": "dropdown-menu-item",
        "data-inset": inset,
        "data-variant": variant,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/dropdown-menu.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
_c5 = DropdownMenuItem;
function DropdownMenuCheckboxItem({ className, children, checked, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dropdown$2d$me_9da4730925cfbc3ade5255efc0338bdd$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckboxItem"], {
        "data-slot": "dropdown-menu-checkbox-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        checked: checked,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dropdown$2d$me_9da4730925cfbc3ade5255efc0338bdd$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
                        className: "size-4"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/ui/dropdown-menu.tsx",
                        lineNumber: 103,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/web/components/ui/dropdown-menu.tsx",
                    lineNumber: 102,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/components/ui/dropdown-menu.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/components/ui/dropdown-menu.tsx",
        lineNumber: 92,
        columnNumber: 5
    }, this);
}
_c6 = DropdownMenuCheckboxItem;
function DropdownMenuRadioGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dropdown$2d$me_9da4730925cfbc3ade5255efc0338bdd$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioGroup"], {
        "data-slot": "dropdown-menu-radio-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/dropdown-menu.tsx",
        lineNumber: 115,
        columnNumber: 5
    }, this);
}
_c7 = DropdownMenuRadioGroup;
function DropdownMenuRadioItem({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dropdown$2d$me_9da4730925cfbc3ade5255efc0338bdd$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioItem"], {
        "data-slot": "dropdown-menu-radio-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dropdown$2d$me_9da4730925cfbc3ade5255efc0338bdd$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleIcon$3e$__["CircleIcon"], {
                        className: "size-2 fill-current"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/ui/dropdown-menu.tsx",
                        lineNumber: 138,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/web/components/ui/dropdown-menu.tsx",
                    lineNumber: 137,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/components/ui/dropdown-menu.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/components/ui/dropdown-menu.tsx",
        lineNumber: 128,
        columnNumber: 5
    }, this);
}
_c8 = DropdownMenuRadioItem;
function DropdownMenuLabel({ className, inset, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dropdown$2d$me_9da4730925cfbc3ade5255efc0338bdd$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
        "data-slot": "dropdown-menu-label",
        "data-inset": inset,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('px-2 py-1.5 text-sm font-medium data-[inset]:pl-8', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/dropdown-menu.tsx",
        lineNumber: 154,
        columnNumber: 5
    }, this);
}
_c9 = DropdownMenuLabel;
function DropdownMenuSeparator({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dropdown$2d$me_9da4730925cfbc3ade5255efc0338bdd$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
        "data-slot": "dropdown-menu-separator",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-border -mx-1 my-1 h-px', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/dropdown-menu.tsx",
        lineNumber: 171,
        columnNumber: 5
    }, this);
}
_c10 = DropdownMenuSeparator;
function DropdownMenuShortcut({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        "data-slot": "dropdown-menu-shortcut",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground ml-auto text-xs tracking-widest', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/dropdown-menu.tsx",
        lineNumber: 184,
        columnNumber: 5
    }, this);
}
_c11 = DropdownMenuShortcut;
function DropdownMenuSub({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dropdown$2d$me_9da4730925cfbc3ade5255efc0338bdd$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sub"], {
        "data-slot": "dropdown-menu-sub",
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/dropdown-menu.tsx",
        lineNumber: 198,
        columnNumber: 10
    }, this);
}
_c12 = DropdownMenuSub;
function DropdownMenuSubTrigger({ className, inset, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dropdown$2d$me_9da4730925cfbc3ade5255efc0338bdd$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubTrigger"], {
        "data-slot": "dropdown-menu-sub-trigger",
        "data-inset": inset,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__["ChevronRightIcon"], {
                className: "ml-auto size-4"
            }, void 0, false, {
                fileName: "[project]/apps/web/components/ui/dropdown-menu.tsx",
                lineNumber: 220,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/components/ui/dropdown-menu.tsx",
        lineNumber: 210,
        columnNumber: 5
    }, this);
}
_c13 = DropdownMenuSubTrigger;
function DropdownMenuSubContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dropdown$2d$me_9da4730925cfbc3ade5255efc0338bdd$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubContent"], {
        "data-slot": "dropdown-menu-sub-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/dropdown-menu.tsx",
        lineNumber: 230,
        columnNumber: 5
    }, this);
}
_c14 = DropdownMenuSubContent;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14;
__turbopack_context__.k.register(_c, "DropdownMenu");
__turbopack_context__.k.register(_c1, "DropdownMenuPortal");
__turbopack_context__.k.register(_c2, "DropdownMenuTrigger");
__turbopack_context__.k.register(_c3, "DropdownMenuContent");
__turbopack_context__.k.register(_c4, "DropdownMenuGroup");
__turbopack_context__.k.register(_c5, "DropdownMenuItem");
__turbopack_context__.k.register(_c6, "DropdownMenuCheckboxItem");
__turbopack_context__.k.register(_c7, "DropdownMenuRadioGroup");
__turbopack_context__.k.register(_c8, "DropdownMenuRadioItem");
__turbopack_context__.k.register(_c9, "DropdownMenuLabel");
__turbopack_context__.k.register(_c10, "DropdownMenuSeparator");
__turbopack_context__.k.register(_c11, "DropdownMenuShortcut");
__turbopack_context__.k.register(_c12, "DropdownMenuSub");
__turbopack_context__.k.register(_c13, "DropdownMenuSubTrigger");
__turbopack_context__.k.register(_c14, "DropdownMenuSubContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/components/dashboard/user-menu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserMenu",
    ()=>UserMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_babel-plugin-re_f3aa0ef20050acebca21685a51e97cbb/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_babel-plugin-re_f3aa0ef20050acebca21685a51e97cbb/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/supabase/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/dropdown-menu.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function UserMenu({ user }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
    const handleLogout = async ()=>{
        await supabase.auth.signOut();
        router.push("/");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "ghost",
                    className: "rounded-full bg-transparent hover:bg-transparent p-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-semibold text-lg",
                        children: user.user_metadata?.full_name?.charAt(0) || "U"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/dashboard/user-menu.tsx",
                        lineNumber: 22,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/web/components/dashboard/user-menu.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/components/dashboard/user-menu.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                align: "end",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                        disabled: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm",
                            children: user.email
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/dashboard/user-menu.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/dashboard/user-menu.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                        onClick: ()=>router.push("/dashboard/profile"),
                        children: "Profile"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/dashboard/user-menu.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                        onClick: ()=>router.push("/dashboard/settings"),
                        children: "Settings"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/dashboard/user-menu.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                        onClick: handleLogout,
                        className: "text-red-600",
                        children: "Logout"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/dashboard/user-menu.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/components/dashboard/user-menu.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/components/dashboard/user-menu.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_s(UserMenu, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = UserMenu;
var _c;
__turbopack_context__.k.register(_c, "UserMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_babel-plugin-re_f3aa0ef20050acebca21685a51e97cbb/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/utils.ts [app-client] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('leading-none font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c3 = CardDescription;
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c4 = CardAction;
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('px-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c5 = CardContent;
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center px-6 [.border-t]:pt-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/components/pathway/topic-view.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TopicView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_babel-plugin-re_f3aa0ef20050acebca21685a51e97cbb/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_babel-plugin-re_f3aa0ef20050acebca21685a51e97cbb/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_babel-plugin-re_f3aa0ef20050acebca21685a51e97cbb/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_babel-plugin-re_f3aa0ef20050acebca21685a51e97cbb/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function getVideoIdByPathwayId(pathwayId) {
    const videoMapping = {
        1: '7rodnBMRdCw',
        4: '5x_2ctPpArM'
    };
    return videoMapping[pathwayId] || 'dQw4w9WgXcQ';
}
function TopicView({ pathway }) {
    _s();
    const sections = pathway.content?.sections || [];
    const [isCompleting, setIsCompleting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleComplete = async ()=>{
        setIsCompleting(true);
        try {
            console.log('[Client] Completing pathway:', pathway.id);
            const response = await fetch('/api/progress', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    pathwayId: pathway.id,
                    status: 'completed'
                })
            });
            console.log('[Client] Response status:', response.status);
            const data = await response.json();
            console.log('[Client] Response data:', data);
            if (!response.ok) {
                throw new Error(data.error || 'Failed to update progress');
            }
            console.log('[Client] Success!');
            if (data.nextPathwayId) {
                console.log('[Client] Navigating to next pathway:', data.nextPathwayId);
                router.push(`/pathway/${data.nextPathwayId}`);
                router.refresh();
            } else {
                console.log('[Client] No next pathway, going to dashboard');
                router.push('/dashboard');
                router.refresh();
            }
        } catch (error) {
            console.error('[Client] Error:', error);
            alert(`Gagal menyelesaikan pembelajaran: ${error instanceof Error ? error.message : 'Unknown error'}`);
        } finally{
            setIsCompleting(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    className: "p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border-indigo-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl font-bold text-gray-900 mb-4",
                            children: pathway.title
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/pathway/topic-view.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-gray-700",
                            children: pathway.description
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/pathway/topic-view.tsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/components/pathway/topic-view.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/components/pathway/topic-view.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-semibold text-gray-900 mb-4",
                        children: "Video Pembelajaran"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/pathway/topic-view.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gray-100 rounded-lg overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative aspect-video",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                className: "absolute inset-0 w-full h-full",
                                src: `https://www.youtube.com/embed/${getVideoIdByPathwayId(pathway.id)}`,
                                title: "Video Pembelajaran",
                                frameBorder: "0",
                                allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                allowFullScreen: true
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/pathway/topic-view.tsx",
                                lineNumber: 92,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/pathway/topic-view.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/pathway/topic-view.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/components/pathway/topic-view.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this),
            sections.map((section, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-semibold text-gray-900 mb-4",
                                children: section.title
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/pathway/topic-view.tsx",
                                lineNumber: 107,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "prose prose-sm max-w-none",
                                children: section.content.split("\n").map((line, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-700 mb-2 whitespace-pre-wrap",
                                        children: line
                                    }, i, false, {
                                        fileName: "[project]/apps/web/components/pathway/topic-view.tsx",
                                        lineNumber: 111,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/pathway/topic-view.tsx",
                                lineNumber: 109,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/components/pathway/topic-view.tsx",
                        lineNumber: 106,
                        columnNumber: 11
                    }, this)
                }, index, false, {
                    fileName: "[project]/apps/web/components/pathway/topic-view.tsx",
                    lineNumber: 105,
                    columnNumber: 9
                }, this)),
            pathway.id === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-semibold text-gray-900 mb-4",
                        children: "Perbandingan Ikatan Kimia"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/pathway/topic-view.tsx",
                        lineNumber: 122,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gray-50 rounded-lg overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/images/ikatan-kimia.jpg",
                            alt: "Ilustrasi Ikatan Kimia",
                            className: "w-full h-auto object-contain"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/pathway/topic-view.tsx",
                            lineNumber: 124,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/pathway/topic-view.tsx",
                        lineNumber: 123,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-600 mt-2 text-center",
                        children: "Tabel Perbandingan Ikatan Kimia"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/pathway/topic-view.tsx",
                        lineNumber: 130,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/components/pathway/topic-view.tsx",
                lineNumber: 121,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "flex gap-4 pt-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/dashboard",
                        className: "flex-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            className: "w-full bg-transparent",
                            children: "Kembali"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/pathway/topic-view.tsx",
                            lineNumber: 138,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/pathway/topic-view.tsx",
                        lineNumber: 137,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        className: "flex-1 bg-indigo-600 hover:bg-indigo-700",
                        onClick: handleComplete,
                        disabled: isCompleting,
                        children: isCompleting ? 'Menyimpan...' : 'Selesai'
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/pathway/topic-view.tsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/components/pathway/topic-view.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/components/pathway/topic-view.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
}
_s(TopicView, "qY4YX23cWSpti0ZldsC6tH/FIgo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = TopicView;
var _c;
__turbopack_context__.k.register(_c, "TopicView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/components/pathway/quiz-view.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>QuizView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_babel-plugin-re_f3aa0ef20050acebca21685a51e97cbb/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_babel-plugin-re_f3aa0ef20050acebca21685a51e97cbb/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_babel-plugin-re_f3aa0ef20050acebca21685a51e97cbb/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_babel-plugin-re_f3aa0ef20050acebca21685a51e97cbb/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/supabase/client.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function QuizView({ pathway, user }) {
    _s();
    const [currentQuestion, setCurrentQuestion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [answers, setAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showResults, setShowResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [score, setScore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isCompleting, setIsCompleting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
    const questions = pathway.content?.questions || [];
    const quizExplanations = {
        "Topik 1: Jenis dan Mekanisme Ikatan Kimia": {
            0: "Ikatan ionik terbentuk melalui transfer elektron dari atom logam ke atom nonlogam. Atom yang kehilangan elektron menjadi kation (bermuatan positif) dan atom yang menerima elektron menjadi anion (bermuatan negatif). Gaya tarik elektrostatik antara kedua ion ini membentuk ikatan ionik yang kuat.",
            1: "Ikatan kovalen terbentuk ketika dua atom berbagi pasangan elektron. Elektron dari kedua atom saling tumpang tindih membentuk orbital molekul. Ikatan kovalen dapat berupa tunggal (satu pasang elektron), ganda (dua pasang elektron), atau rangkap tiga (tiga pasang elektron).",
            2: "Ikatan logam terbentuk ketika elektron valensi dari atom-atom logam bergerak bebas membentuk 'laut elektron' yang mengelilingi kation-kation logam. Elektron-elektron ini tidak terikat pada atom tertentu dan dapat bergerak dengan mudah, yang menjelaskan mengapa logam memiliki konduktivitas listrik yang baik."
        },
        "Topik 2: Struktur, Sifat, dan Penamaan Senyawa": {
            0: "Senyawa ionik memiliki struktur kristal yang teratur dengan ion-ion tersusun dalam pola 3D yang berulang. Struktur ini menghasilkan sifat-sifat khas seperti titik leleh tinggi, kelarutan dalam pelarut polar seperti air, dan kemampuan menghantarkan listrik dalam keadaan cair atau larutan.",
            1: "Senyawa kovalen dapat berupa molekul diskrit atau jaringan kovalen. Senyawa kovalen molekuler memiliki titik leleh rendah karena gaya antar molekul lemah, sedangkan jaringan kovalen memiliki titik leleh sangat tinggi karena seluruh struktur terikat oleh ikatan kovalen yang kuat.",
            2: "Penamaan senyawa ionik mengikuti aturan: nama kation diikuti nama anion dengan akhiran -ida. Contoh: NaCl (natrium klorida), CaCO₃ (kalsium karbonat). Untuk kation dengan muatan variabel, gunakan angka Romawi dalam tanda kurung untuk menunjukkan muatannya."
        }
    };
    const handleAnswer = (optionIndex)=>{
        const newAnswers = [
            ...answers
        ];
        newAnswers[currentQuestion] = optionIndex;
        setAnswers(newAnswers);
    };
    const handleNext = ()=>{
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
    };
    const handlePrevious = ()=>{
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };
    const handleSubmit = async ()=>{
        let correctCount = 0;
        const answerPromises = questions.map(async (q, index)=>{
            const isCorrect = answers[index] === q.correct_answer;
            if (isCorrect) correctCount++;
            const explanations = quizExplanations[pathway.title] || {};
            const baseExplanation = explanations[q.correct_answer] || q.explanation || "Silakan pelajari kembali materi ini.";
            const explanation = isCorrect ? `✓ Jawaban Anda benar!\n\n${baseExplanation}` : `✗ Jawaban Anda salah.\n\nJawaban yang benar adalah: ${q.options[q.correct_answer]}\n\n${baseExplanation}`;
            await supabase.from("quiz_answers").insert({
                user_id: user.id,
                pathway_id: pathway.id,
                question_id: q.id,
                user_answer: answers[index] ?? -1,
                correct_answer: q.correct_answer,
                is_correct: isCorrect,
                explanation: explanation
            });
        });
        await Promise.all(answerPromises);
        const finalScore = Math.round(correctCount / questions.length * 100);
        setScore(finalScore);
        setShowResults(true);
        await supabase.from("user_pathway_progress").update({
            score: finalScore,
            status: "completed"
        }).eq("pathway_id", pathway.id).eq("user_id", user.id);
    };
    const handleComplete = async ()=>{
        setIsCompleting(true);
        try {
            console.log('[Client] Completing pathway:', pathway.id);
            const response = await fetch('/api/progress', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    pathwayId: pathway.id,
                    status: 'completed',
                    score: score
                })
            });
            const data = await response.json();
            console.log('[Client] API Response:', data);
            if (!response.ok) {
                throw new Error(data.error || 'Gagal menyelesaikan pembelajaran');
            }
            if (data.nextPathwayId) {
                console.log('[Client] Going to next pathway:', data.nextPathwayId);
                router.push(`/pathway/${data.nextPathwayId}`);
                router.refresh();
            } else {
                console.log('[Client] No next pathway, going to dashboard');
                router.push('/dashboard');
                router.refresh();
            }
        } catch (error) {
            console.error('[Client] Error:', error);
            alert(`Gagal menyelesaikan pembelajaran: ${error instanceof Error ? error.message : 'Unknown error'}`);
        } finally{
            setIsCompleting(false);
        }
    };
    if (showResults) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
            className: "space-y-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "p-8 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl font-bold text-gray-900 mb-4",
                                children: "Hasil Kuis"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/pathway/quiz-view.tsx",
                                lineNumber: 147,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-6xl font-bold text-green-600 mb-4",
                                        children: [
                                            score,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/components/pathway/quiz-view.tsx",
                                        lineNumber: 149,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg text-gray-700",
                                        children: [
                                            "Anda menjawab ",
                                            answers.filter((a, i)=>a === questions[i]?.correct_answer).length,
                                            " dari",
                                            " ",
                                            questions.length,
                                            " pertanyaan dengan benar"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/components/pathway/quiz-view.tsx",
                                        lineNumber: 150,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/components/pathway/quiz-view.tsx",
                                lineNumber: 148,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/components/pathway/quiz-view.tsx",
                        lineNumber: 146,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/web/components/pathway/quiz-view.tsx",
                    lineNumber: 145,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "flex gap-4 pt-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/dashboard",
                            className: "flex-1",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                className: "w-full bg-transparent",
                                children: "Kembali"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/pathway/quiz-view.tsx",
                                lineNumber: 160,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/pathway/quiz-view.tsx",
                            lineNumber: 159,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            className: "flex-1 bg-indigo-600 hover:bg-indigo-700",
                            onClick: handleComplete,
                            disabled: isCompleting,
                            children: isCompleting ? 'Menyimpan...' : 'Selesai'
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/pathway/quiz-view.tsx",
                            lineNumber: 164,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/components/pathway/quiz-view.tsx",
                    lineNumber: 158,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/components/pathway/quiz-view.tsx",
            lineNumber: 144,
            columnNumber: 7
        }, this);
    }
    const question = questions[currentQuestion];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    className: "p-8 bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl font-bold text-gray-900 mb-4",
                            children: pathway.title
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/pathway/quiz-view.tsx",
                            lineNumber: 182,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg text-gray-700",
                                    children: [
                                        "Pertanyaan ",
                                        currentQuestion + 1,
                                        " dari ",
                                        questions.length
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/components/pathway/quiz-view.tsx",
                                    lineNumber: 184,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-32 bg-gray-200 rounded-full h-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-yellow-500 h-2 rounded-full transition-all",
                                        style: {
                                            width: `${(currentQuestion + 1) / questions.length * 100}%`
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/components/pathway/quiz-view.tsx",
                                        lineNumber: 188,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/components/pathway/quiz-view.tsx",
                                    lineNumber: 187,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/components/pathway/quiz-view.tsx",
                            lineNumber: 183,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/components/pathway/quiz-view.tsx",
                    lineNumber: 181,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/components/pathway/quiz-view.tsx",
                lineNumber: 180,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    className: "p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-semibold text-gray-900 mb-6",
                            children: question?.question
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/pathway/quiz-view.tsx",
                            lineNumber: 199,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3 mb-6",
                            children: question?.options?.map((option, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleAnswer(index),
                                    className: `w-full p-4 text-left rounded-lg border-2 transition-all ${answers[currentQuestion] === index ? "border-indigo-600 bg-indigo-50" : "border-gray-200 hover:border-gray-300"}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `w-6 h-6 rounded-full border-2 flex items-center justify-center ${answers[currentQuestion] === index ? "border-indigo-600 bg-indigo-600" : "border-gray-300"}`,
                                                children: answers[currentQuestion] === index && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white text-sm",
                                                    children: "✓"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/components/pathway/quiz-view.tsx",
                                                    lineNumber: 218,
                                                    columnNumber: 60
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/components/pathway/quiz-view.tsx",
                                                lineNumber: 213,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-900",
                                                children: option
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/components/pathway/quiz-view.tsx",
                                                lineNumber: 220,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/components/pathway/quiz-view.tsx",
                                        lineNumber: 212,
                                        columnNumber: 17
                                    }, this)
                                }, index, false, {
                                    fileName: "[project]/apps/web/components/pathway/quiz-view.tsx",
                                    lineNumber: 203,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/pathway/quiz-view.tsx",
                            lineNumber: 201,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "flex gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: handlePrevious,
                                    disabled: currentQuestion === 0,
                                    variant: "outline",
                                    className: "flex-1 bg-transparent",
                                    children: "Sebelumnya"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/components/pathway/quiz-view.tsx",
                                    lineNumber: 227,
                                    columnNumber: 13
                                }, this),
                                currentQuestion < questions.length - 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: handleNext,
                                    className: "flex-1 bg-indigo-600 hover:bg-indigo-700",
                                    children: "Selanjutnya"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/components/pathway/quiz-view.tsx",
                                    lineNumber: 236,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: handleSubmit,
                                    className: "flex-1 bg-green-600 hover:bg-green-700",
                                    children: "Selesai & Lihat Hasil"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/components/pathway/quiz-view.tsx",
                                    lineNumber: 240,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/components/pathway/quiz-view.tsx",
                            lineNumber: 226,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/components/pathway/quiz-view.tsx",
                    lineNumber: 198,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/components/pathway/quiz-view.tsx",
                lineNumber: 197,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/components/pathway/quiz-view.tsx",
        lineNumber: 179,
        columnNumber: 5
    }, this);
}
_s(QuizView, "5K35r/8S82aJcTe7ZbRw+GqGxPk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = QuizView;
var _c;
__turbopack_context__.k.register(_c, "QuizView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/components/pathway/final-test-view.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FinalTestView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_babel-plugin-re_f3aa0ef20050acebca21685a51e97cbb/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_babel-plugin-re_f3aa0ef20050acebca21685a51e97cbb/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_babel-plugin-re_f3aa0ef20050acebca21685a51e97cbb/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/supabase/client.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function FinalTestView({ pathway, user }) {
    _s();
    const [currentQuestion, setCurrentQuestion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [answers, setAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showResults, setShowResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [score, setScore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isCompleting, setIsCompleting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
    // Get questions from pathway.content (same as quiz system)
    const questions = pathway.content?.questions || [];
    const handleAnswer = (optionIndex)=>{
        const newAnswers = [
            ...answers
        ];
        newAnswers[currentQuestion] = optionIndex;
        setAnswers(newAnswers);
    };
    const handleNext = ()=>{
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
    };
    const handlePrevious = ()=>{
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };
    const handleSubmit = async ()=>{
        let correctCount = 0;
        questions.forEach((q, index)=>{
            if (answers[index] === q.correct_answer) {
                correctCount++;
            }
        });
        const finalScore = Math.round(correctCount / questions.length * 100);
        setScore(finalScore);
        setShowResults(true);
        for(let i = 0; i < questions.length; i++){
            const question = questions[i];
            const userAnswer = answers[i];
            const isCorrect = userAnswer === question.correct_answer;
            // Create explanation with correct/wrong feedback (use question.explanation from database)
            const baseExplanation = question.explanation || "Silakan pelajari kembali materi terkait.";
            const explanation = isCorrect ? `✓ Jawaban Anda benar!\n\n${baseExplanation}` : `✗ Jawaban Anda salah.\n\nJawaban yang benar adalah: ${question.options[question.correct_answer]}\n\n${baseExplanation}`;
            await supabase.from("quiz_answers").delete().eq("pathway_id", pathway.id).eq("user_id", user.id).eq("question_id", question.id);
            await supabase.from("quiz_answers").insert({
                pathway_id: pathway.id,
                user_id: user.id,
                question_id: question.id,
                user_answer: userAnswer ?? -1,
                correct_answer: question.correct_answer,
                is_correct: isCorrect,
                explanation: explanation
            });
        }
        await supabase.from("user_pathway_progress").update({
            score: finalScore,
            status: "completed"
        }).eq("pathway_id", pathway.id).eq("user_id", user.id);
    };
    const handleComplete = async ()=>{
        setIsCompleting(true);
        try {
            console.log('[Client] Completing pathway:', pathway.id);
            const response = await fetch('/api/progress', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    pathwayId: pathway.id,
                    status: 'completed',
                    score: score
                })
            });
            const data = await response.json();
            console.log('[Client] API Response:', data);
            if (!response.ok) {
                throw new Error(data.error || 'Gagal menyelesaikan pembelajaran');
            }
            if (data.nextPathwayId) {
                console.log('[Client] Going to next pathway:', data.nextPathwayId);
                router.push(`/pathway/${data.nextPathwayId}`);
                router.refresh();
            } else {
                console.log('[Client] No next pathway, going to dashboard');
                router.push('/dashboard');
                router.refresh();
            }
        } catch (error) {
            console.error('[Client] Error:', error);
            alert(`Gagal menyelesaikan pembelajaran: ${error instanceof Error ? error.message : 'Unknown error'}`);
        } finally{
            setIsCompleting(false);
        }
    };
    if (showResults) {
        const correctCount = answers.filter((a, i)=>a === questions[i]?.correct_answer).length;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
            className: "space-y-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "p-8 bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl font-bold text-gray-900 mb-4",
                                children: "Hasil Tes Akhir"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/pathway/final-test-view.tsx",
                                lineNumber: 149,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-6xl font-bold text-purple-600 mb-4",
                                        children: [
                                            score,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/components/pathway/final-test-view.tsx",
                                        lineNumber: 151,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg text-gray-700 mb-2",
                                        children: [
                                            "Anda menjawab ",
                                            correctCount,
                                            " dari ",
                                            questions.length,
                                            " pertanyaan dengan benar"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/components/pathway/final-test-view.tsx",
                                        lineNumber: 152,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600",
                                        children: score >= 80 ? "Selamat! Anda telah menguasai materi Chemical Bonding dengan baik." : score >= 60 ? "Bagus! Anda sudah memahami sebagian besar materi. Pelajari kembali bagian yang kurang." : "Anda perlu mempelajari kembali materi Chemical Bonding."
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/components/pathway/final-test-view.tsx",
                                        lineNumber: 155,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-indigo-600 mt-4",
                                        children: '💡 Lihat pembahasan lengkap di halaman "Hasil Pembelajaran"'
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/components/pathway/final-test-view.tsx",
                                        lineNumber: 162,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/components/pathway/final-test-view.tsx",
                                lineNumber: 150,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/components/pathway/final-test-view.tsx",
                        lineNumber: 148,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/web/components/pathway/final-test-view.tsx",
                    lineNumber: 147,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        className: "w-full bg-indigo-600 hover:bg-indigo-700",
                        onClick: handleComplete,
                        disabled: isCompleting,
                        children: isCompleting ? 'Menyimpan...' : 'Kembali ke Dashboard'
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/pathway/final-test-view.tsx",
                        lineNumber: 170,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/web/components/pathway/final-test-view.tsx",
                    lineNumber: 169,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/components/pathway/final-test-view.tsx",
            lineNumber: 146,
            columnNumber: 7
        }, this);
    }
    const question = questions[currentQuestion];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    className: "p-8 bg-gradient-to-br from-red-50 to-orange-50 border-red-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl font-bold text-gray-900 mb-4",
                            children: pathway.title
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/pathway/final-test-view.tsx",
                            lineNumber: 188,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg text-gray-700",
                                    children: [
                                        "Pertanyaan ",
                                        currentQuestion + 1,
                                        " dari ",
                                        questions.length
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/components/pathway/final-test-view.tsx",
                                    lineNumber: 190,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-32 bg-gray-200 rounded-full h-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-red-500 h-2 rounded-full transition-all",
                                        style: {
                                            width: `${(currentQuestion + 1) / questions.length * 100}%`
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/components/pathway/final-test-view.tsx",
                                        lineNumber: 194,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/components/pathway/final-test-view.tsx",
                                    lineNumber: 193,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/components/pathway/final-test-view.tsx",
                            lineNumber: 189,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/components/pathway/final-test-view.tsx",
                    lineNumber: 187,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/components/pathway/final-test-view.tsx",
                lineNumber: 186,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    className: "p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-semibold text-gray-900 mb-6",
                            children: question?.question
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/pathway/final-test-view.tsx",
                            lineNumber: 205,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3 mb-6",
                            children: question?.options?.map((option, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleAnswer(index),
                                    className: `w-full p-4 text-left rounded-lg border-2 transition-all ${answers[currentQuestion] === index ? "border-purple-600 bg-purple-50" : "border-gray-200 hover:border-gray-300"}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `w-6 h-6 rounded-full border-2 flex items-center justify-center ${answers[currentQuestion] === index ? "border-purple-600 bg-purple-600" : "border-gray-300"}`,
                                                children: answers[currentQuestion] === index && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white text-sm",
                                                    children: "✓"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/components/pathway/final-test-view.tsx",
                                                    lineNumber: 224,
                                                    columnNumber: 60
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/components/pathway/final-test-view.tsx",
                                                lineNumber: 219,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-900",
                                                children: option
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/components/pathway/final-test-view.tsx",
                                                lineNumber: 226,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/components/pathway/final-test-view.tsx",
                                        lineNumber: 218,
                                        columnNumber: 17
                                    }, this)
                                }, index, false, {
                                    fileName: "[project]/apps/web/components/pathway/final-test-view.tsx",
                                    lineNumber: 209,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/pathway/final-test-view.tsx",
                            lineNumber: 207,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "flex gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: handlePrevious,
                                    disabled: currentQuestion === 0,
                                    variant: "outline",
                                    className: "flex-1 bg-transparent",
                                    children: "Sebelumnya"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/components/pathway/final-test-view.tsx",
                                    lineNumber: 233,
                                    columnNumber: 11
                                }, this),
                                currentQuestion < questions.length - 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: handleNext,
                                    className: "flex-1 bg-purple-600 hover:bg-purple-700",
                                    children: "Selanjutnya"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/components/pathway/final-test-view.tsx",
                                    lineNumber: 242,
                                    columnNumber: 13
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: handleSubmit,
                                    className: "flex-1 bg-green-600 hover:bg-green-700",
                                    children: "Selesai & Lihat Hasil"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/components/pathway/final-test-view.tsx",
                                    lineNumber: 246,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/components/pathway/final-test-view.tsx",
                            lineNumber: 232,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/components/pathway/final-test-view.tsx",
                    lineNumber: 204,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/components/pathway/final-test-view.tsx",
                lineNumber: 203,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/components/pathway/final-test-view.tsx",
        lineNumber: 185,
        columnNumber: 5
    }, this);
}
_s(FinalTestView, "5K35r/8S82aJcTe7ZbRw+GqGxPk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = FinalTestView;
var _c;
__turbopack_context__.k.register(_c, "FinalTestView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/components/pathway/simulasi-senyawa.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SimulasiSenyawa
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_babel-plugin-re_f3aa0ef20050acebca21685a51e97cbb/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_babel-plugin-re_f3aa0ef20050acebca21685a51e97cbb/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$26_reac_1bca0ede25177b91e2f036b55e5d9b33$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/framer-motion@12.23.26_reac_1bca0ede25177b91e2f036b55e5d9b33/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_babel-plugin-re_f3aa0ef20050acebca21685a51e97cbb/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_babel-plugin-re_f3aa0ef20050acebca21685a51e97cbb/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/supabase/client.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function SimulasiSenyawa({ pathway, user }) {
    _s();
    const [leftElement, setLeftElement] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Hydrogen");
    const [rightElement, setRightElement] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Oxygen");
    const [distance, setDistance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(260);
    const [interaction, setInteraction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Attractive");
    const [isCompleting, setIsCompleting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
    const elementColors = {
        Hydrogen: "#a0d8ef",
        Oxygen: "#ff7f7f",
        Carbon: "#a8a8a8"
    };
    const elementSizes = {
        Hydrogen: 100,
        Oxygen: 140,
        Carbon: 180
    };
    const radii = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SimulasiSenyawa.useMemo[radii]": ()=>{
            const rL = elementSizes[leftElement] / 2;
            const rR = elementSizes[rightElement] / 2;
            return {
                rL,
                rR
            };
        }
    }["SimulasiSenyawa.useMemo[radii]"], [
        leftElement,
        rightElement
    ]);
    const thresholds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SimulasiSenyawa.useMemo[thresholds]": ()=>{
            const buffer = 10;
            const repulsiveD = radii.rL + radii.rR + buffer;
            const noInteractionD = repulsiveD * 2.6;
            return {
                repulsiveD,
                noInteractionD
            };
        }
    }["SimulasiSenyawa.useMemo[thresholds]"], [
        radii
    ]);
    const classify = (d)=>{
        if (d < thresholds.repulsiveD) return "Repulsive";
        if (d > thresholds.noInteractionD) return "No Interaction";
        return "Attractive";
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SimulasiSenyawa.useEffect": ()=>{
            const minD = thresholds.repulsiveD * 0.9;
            const maxD = thresholds.noInteractionD * 1.1;
            const clamped = Math.min(maxD, Math.max(minD, distance));
            setDistance(clamped);
            setInteraction(classify(clamped));
        }
    }["SimulasiSenyawa.useEffect"], [
        leftElement,
        rightElement,
        thresholds.repulsiveD,
        thresholds.noInteractionD
    ]);
    const handleMove = (delta)=>{
        let newDist = distance + delta;
        const minD = thresholds.repulsiveD * 0.8;
        const maxD = thresholds.noInteractionD * 1.3;
        newDist = Math.min(maxD, Math.max(minD, newDist));
        setDistance(newDist);
        setInteraction(classify(newDist));
    };
    const handleComplete = async ()=>{
        setIsCompleting(true);
        try {
            const response = await fetch("/api/progress", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    pathwayId: pathway.id,
                    status: "completed"
                })
            });
            const data = await response.json();
            if (!response.ok) throw new Error(data.error || "Gagal menyelesaikan pembelajaran");
            if (data.nextPathwayId) {
                router.push(`/pathway/${data.nextPathwayId}`);
                router.refresh();
            } else {
                router.push("/dashboard");
                router.refresh();
            }
        } catch (error) {
            console.error("[Client] Error:", error);
            alert(`Gagal menyelesaikan pembelajaran: ${error instanceof Error ? error.message : "Unknown error"}`);
        } finally{
            setIsCompleting(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "space-y-6 mt-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-6 items-stretch min-h-[400px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "bg-white rounded-lg shadow-xl p-4 w-[120px] h-[350px] flex flex-col items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xs font-semibold text-gray-800 mb-3 text-center",
                                children: "Potential Energy"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/pathway/simulasi-senyawa.tsx",
                                lineNumber: 116,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 w-12 bg-gradient-to-t from-green-500 to-green-200 rounded-lg relative",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute w-full bg-red-500 transition-all duration-300",
                                    style: {
                                        height: `${Math.max(0, Math.min(100, (thresholds.noInteractionD - distance) / (thresholds.noInteractionD - thresholds.repulsiveD) * 100))}%`,
                                        bottom: 0,
                                        borderRadius: "0 0 0.5rem 0.5rem"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/components/pathway/simulasi-senyawa.tsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/pathway/simulasi-senyawa.tsx",
                                lineNumber: 119,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-600 mt-2 text-center",
                                children: "Energy Level"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/pathway/simulasi-senyawa.tsx",
                                lineNumber: 137,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/components/pathway/simulasi-senyawa.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "relative bg-black rounded-lg shadow-xl w-[550px] h-[380px] overflow-hidden flex flex-col items-center justify-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$26_reac_1bca0ede25177b91e2f036b55e5d9b33$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                animate: {
                                    x: -distance / 2
                                },
                                transition: {
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 10
                                },
                                className: "absolute flex items-center justify-center rounded-full border border-black shadow-[0_0_25px_rgba(255,255,255,0.3)]",
                                style: {
                                    width: elementSizes[leftElement],
                                    height: elementSizes[leftElement],
                                    background: elementColors[leftElement]
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-black text-4xl font-bold",
                                    children: leftElement[0]
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/components/pathway/simulasi-senyawa.tsx",
                                    lineNumber: 151,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/pathway/simulasi-senyawa.tsx",
                                lineNumber: 141,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$26_reac_1bca0ede25177b91e2f036b55e5d9b33$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                animate: {
                                    x: distance / 2
                                },
                                transition: {
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 10
                                },
                                className: "absolute flex items-center justify-center rounded-full border border-black shadow-[0_0_25px_rgba(255,255,255,0.3)]",
                                style: {
                                    width: elementSizes[rightElement],
                                    height: elementSizes[rightElement],
                                    background: elementColors[rightElement]
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-black text-4xl font-bold",
                                    children: rightElement[0]
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/components/pathway/simulasi-senyawa.tsx",
                                    lineNumber: 166,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/pathway/simulasi-senyawa.tsx",
                                lineNumber: 156,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-yellow-300 text-sm mb-1",
                                        children: "Overall interaction:"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/components/pathway/simulasi-senyawa.tsx",
                                        lineNumber: 172,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: `font-bold text-2xl ${interaction === "Attractive" ? "text-green-400" : interaction === "Repulsive" ? "text-orange-500" : "text-gray-400"}`,
                                        children: interaction
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/components/pathway/simulasi-senyawa.tsx",
                                        lineNumber: 173,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/components/pathway/simulasi-senyawa.tsx",
                                lineNumber: 171,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/components/pathway/simulasi-senyawa.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "bg-white rounded-lg shadow-xl p-6 w-[260px] h-[300px] flex flex-col gap-4 mt-7",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-semibold text-gray-800 mb-2",
                                        children: "Left Element"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/components/pathway/simulasi-senyawa.tsx",
                                        lineNumber: 189,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: leftElement,
                                        onChange: (e)=>setLeftElement(e.target.value),
                                        className: "w-full px-3 py-2 border border-gray-300 rounded-md text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Hydrogen"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/components/pathway/simulasi-senyawa.tsx",
                                                lineNumber: 197,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Oxygen"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/components/pathway/simulasi-senyawa.tsx",
                                                lineNumber: 198,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Carbon"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/components/pathway/simulasi-senyawa.tsx",
                                                lineNumber: 199,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/components/pathway/simulasi-senyawa.tsx",
                                        lineNumber: 192,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/components/pathway/simulasi-senyawa.tsx",
                                lineNumber: 188,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-semibold text-gray-800 mb-2",
                                        children: "Right Element"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/components/pathway/simulasi-senyawa.tsx",
                                        lineNumber: 204,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: rightElement,
                                        onChange: (e)=>setRightElement(e.target.value),
                                        className: "w-full px-3 py-2 border border-gray-300 rounded-md text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Hydrogen"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/components/pathway/simulasi-senyawa.tsx",
                                                lineNumber: 212,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Oxygen"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/components/pathway/simulasi-senyawa.tsx",
                                                lineNumber: 213,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Carbon"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/components/pathway/simulasi-senyawa.tsx",
                                                lineNumber: 214,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/components/pathway/simulasi-senyawa.tsx",
                                        lineNumber: 207,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/components/pathway/simulasi-senyawa.tsx",
                                lineNumber: 203,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-semibold text-gray-800 mb-2",
                                        children: "Distance"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/components/pathway/simulasi-senyawa.tsx",
                                        lineNumber: 219,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleMove(-20),
                                                className: "flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 px-3 rounded text-sm font-medium",
                                                children: "Move Closer"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/components/pathway/simulasi-senyawa.tsx",
                                                lineNumber: 223,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleMove(20),
                                                className: "flex-1 bg-red-500 hover:bg-red-600 text-white py-2 px-3 rounded text-sm font-medium",
                                                children: "Move Apart"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/components/pathway/simulasi-senyawa.tsx",
                                                lineNumber: 229,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/components/pathway/simulasi-senyawa.tsx",
                                        lineNumber: 222,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-600 mt-2 text-center",
                                        children: [
                                            Math.round(distance),
                                            " px"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/components/pathway/simulasi-senyawa.tsx",
                                        lineNumber: 236,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/components/pathway/simulasi-senyawa.tsx",
                                lineNumber: 218,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/components/pathway/simulasi-senyawa.tsx",
                        lineNumber: 187,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/components/pathway/simulasi-senyawa.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "flex gap-4 pt-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/dashboard",
                        className: "flex-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            className: "w-full bg-transparent",
                            children: "Kembali"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/pathway/simulasi-senyawa.tsx",
                            lineNumber: 245,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/pathway/simulasi-senyawa.tsx",
                        lineNumber: 244,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        className: "flex-1 bg-indigo-600 hover:bg-indigo-700",
                        onClick: handleComplete,
                        disabled: isCompleting,
                        children: isCompleting ? "Menyimpan..." : "Selesai"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/pathway/simulasi-senyawa.tsx",
                        lineNumber: 249,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/components/pathway/simulasi-senyawa.tsx",
                lineNumber: 243,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/components/pathway/simulasi-senyawa.tsx",
        lineNumber: 113,
        columnNumber: 5
    }, this);
}
_s(SimulasiSenyawa, "3Dp4kfp+B2vob+T3nwBERF+j3aw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = SimulasiSenyawa;
var _c;
__turbopack_context__.k.register(_c, "SimulasiSenyawa");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/components/pathway/simulasi-pembentukan-ikatan.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SimulasiPembentukanIkatan
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_babel-plugin-re_f3aa0ef20050acebca21685a51e97cbb/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_babel-plugin-re_f3aa0ef20050acebca21685a51e97cbb/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_babel-plugin-re_f3aa0ef20050acebca21685a51e97cbb/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_babel-plugin-re_f3aa0ef20050acebca21685a51e97cbb/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/supabase/client.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function SimulasiPembentukanIkatan({ pathway, user }) {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Overall interaction: …");
    const [isCompleting, setIsCompleting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SimulasiPembentukanIkatan.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext("2d");
            let W = 1280, H = 720;
            const fit = {
                "SimulasiPembentukanIkatan.useEffect.fit": ()=>{
                    const dpr = Math.min(2, window.devicePixelRatio || 1);
                    const parentWidth = canvas.parentElement.clientWidth;
                    const parentHeight = canvas.parentElement.clientHeight - 2;
                    W = parentWidth;
                    H = parentHeight;
                    canvas.width = W * dpr;
                    canvas.height = H * dpr;
                    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
                }
            }["SimulasiPembentukanIkatan.useEffect.fit"];
            window.addEventListener("resize", fit, {
                passive: true
            });
            fit();
            const atomR = 16;
            const EPSILON = 1.0;
            const COULOMB_K = 40000;
            const bias = 140;
            const model = "LJ";
            const midY = H * 0.5;
            const a1 = {
                x: W * 0.4,
                y: midY,
                r: atomR,
                dragging: false
            };
            const a2 = {
                x: W * 0.6,
                y: midY,
                r: atomR,
                dragging: false
            };
            function forceLJ(r) {
                const sOverR = bias / r;
                const s6 = sOverR ** 6;
                const s12 = s6 * s6;
                return 24 * EPSILON * (2 * s12 / r - s6 / r);
            }
            function forceCoulomb(r) {
                const rep = COULOMB_K / (r * r);
                const att = COULOMB_K * 0.65 / (r * r * r);
                return rep - att;
            }
            function computeForce() {
                const dx = a2.x - a1.x, dy = a2.y - a1.y;
                const r = Math.hypot(dx, dy);
                const dir = {
                    x: dx / r,
                    y: dy / r
                };
                const Fmag = ("TURBOPACK compile-time truthy", 1) ? forceLJ(r) : "TURBOPACK unreachable";
                return {
                    F1: {
                        x: -Fmag * dir.x,
                        y: -Fmag * dir.y
                    },
                    F2: {
                        x: Fmag * dir.x,
                        y: -Fmag * dir.y
                    },
                    mag: Fmag,
                    r
                };
            }
            const pointer = {
                down: false,
                target: null,
                ox: 0
            };
            const hit = {
                "SimulasiPembentukanIkatan.useEffect.hit": (x, y, d)=>(x - d.x) ** 2 + (y - d.y) ** 2 <= (d.r + 8) ** 2
            }["SimulasiPembentukanIkatan.useEffect.hit"];
            canvas.addEventListener("pointerdown", {
                "SimulasiPembentukanIkatan.useEffect": (e)=>{
                    const rect = canvas.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    if (hit(x, y, a1)) {
                        pointer.down = true;
                        pointer.target = a1;
                        pointer.ox = x - a1.x;
                    } else if (hit(x, y, a2)) {
                        pointer.down = true;
                        pointer.target = a2;
                        pointer.ox = x - a2.x;
                    }
                }
            }["SimulasiPembentukanIkatan.useEffect"]);
            canvas.addEventListener("pointermove", {
                "SimulasiPembentukanIkatan.useEffect": (e)=>{
                    if (!pointer.down || !pointer.target) return;
                    const rect = canvas.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    pointer.target.x = Math.max(30, Math.min(W - 30, x - pointer.ox));
                    pointer.target.y = midY;
                }
            }["SimulasiPembentukanIkatan.useEffect"]);
            const stopDrag = {
                "SimulasiPembentukanIkatan.useEffect.stopDrag": ()=>{
                    pointer.down = false;
                    pointer.target = null;
                }
            }["SimulasiPembentukanIkatan.useEffect.stopDrag"];
            canvas.addEventListener("pointerup", stopDrag);
            canvas.addEventListener("pointerleave", stopDrag);
            const drawNucleus = {
                "SimulasiPembentukanIkatan.useEffect.drawNucleus": ({ x, y, r }, color = "#1845ff")=>{
                    ctx.fillStyle = color;
                    ctx.beginPath();
                    ctx.arc(x, y, r, 0, Math.PI * 2);
                    ctx.fill();
                    const g = ctx.createRadialGradient(x - 3, y - 3, 1, x, y, r + 10);
                    g.addColorStop(0, "rgba(255,255,255,.6)");
                    g.addColorStop(1, color);
                    ctx.fillStyle = g;
                    ctx.beginPath();
                    ctx.arc(x, y, r, 0, Math.PI * 2);
                    ctx.fill();
                }
            }["SimulasiPembentukanIkatan.useEffect.drawNucleus"];
            const drawArrow = {
                "SimulasiPembentukanIkatan.useEffect.drawArrow": (x, y, vx, vy)=>{
                    const L = Math.min(80, Math.max(18, Math.hypot(vx, vy) * 160));
                    const a = Math.atan2(vy, vx);
                    ctx.strokeStyle = "#ffea00";
                    ctx.fillStyle = "#ffea00";
                    ctx.lineWidth = 4;
                    ctx.beginPath();
                    ctx.moveTo(x, y);
                    ctx.lineTo(x + Math.cos(a) * L, y + Math.sin(a) * L);
                    ctx.stroke();
                    const hx = x + Math.cos(a) * L, hy = y + Math.sin(a) * L;
                    ctx.beginPath();
                    ctx.moveTo(hx, hy);
                    ctx.lineTo(hx - 10 * Math.cos(a - Math.PI / 6), hy - 10 * Math.sin(a - Math.PI / 6));
                    ctx.lineTo(hx - 10 * Math.cos(a + Math.PI / 6), hy - 10 * Math.sin(a + Math.PI / 6));
                    ctx.closePath();
                    ctx.fill();
                }
            }["SimulasiPembentukanIkatan.useEffect.drawArrow"];
            const drawElectronCloud = {
                "SimulasiPembentukanIkatan.useEffect.drawElectronCloud": ()=>{
                    const dx = a2.x - a1.x;
                    const dist = Math.abs(dx);
                    const overlapFactor = Math.max(0, 1 - dist / 300);
                    ctx.globalCompositeOperation = "lighter";
                    const drawCloud = {
                        "SimulasiPembentukanIkatan.useEffect.drawElectronCloud.drawCloud": (x, y, intensity)=>{
                            const radius = 120 + intensity * 80;
                            const grd = ctx.createRadialGradient(x, y, radius * 0.2, x, y, radius);
                            grd.addColorStop(0, `rgba(255,0,0,${0.5 + 0.4 * intensity})`);
                            grd.addColorStop(1, "rgba(255,0,0,0)");
                            ctx.fillStyle = grd;
                            ctx.beginPath();
                            ctx.arc(x, y, radius, 0, Math.PI * 2);
                            ctx.fill();
                        }
                    }["SimulasiPembentukanIkatan.useEffect.drawElectronCloud.drawCloud"];
                    drawCloud(a1.x, a1.y, 1 - overlapFactor * 0.5);
                    drawCloud(a2.x, a2.y, 1 - overlapFactor * 0.5);
                    if (overlapFactor > 0.2) {
                        const midX = (a1.x + a2.x) / 2;
                        const midY = a1.y;
                        const radius = 160 * overlapFactor + 60;
                        const grd = ctx.createRadialGradient(midX, midY, 0, midX, midY, radius);
                        grd.addColorStop(0, `rgba(255,0,0,${0.4 + overlapFactor * 0.5})`);
                        grd.addColorStop(1, "rgba(255,0,0,0)");
                        ctx.fillStyle = grd;
                        ctx.beginPath();
                        ctx.arc(midX, midY, radius, 0, Math.PI * 2);
                        ctx.fill();
                    }
                    ctx.globalCompositeOperation = "source-over";
                }
            }["SimulasiPembentukanIkatan.useEffect.drawElectronCloud"];
            const frame = {
                "SimulasiPembentukanIkatan.useEffect.frame": ()=>{
                    ctx.clearRect(0, 0, W, H);
                    const bg = ctx.createRadialGradient(W / 2, H / 2, 50, W / 2, H / 2, Math.max(W, H) * 0.7);
                    bg.addColorStop(0, "rgba(0,0,0,1)");
                    bg.addColorStop(1, "rgba(0,0,0,.9)");
                    ctx.fillStyle = bg;
                    ctx.fillRect(0, 0, W, H);
                    drawElectronCloud();
                    const F = computeForce();
                    drawNucleus(a1);
                    drawNucleus(a2);
                    drawArrow(a1.x, a1.y, F.F1.x, F.F1.y);
                    drawArrow(a2.x, a2.y, F.F2.x, F.F2.y);
                    const kind = Math.abs(F.mag) < 0.002 ? "Neutral" : F.mag > 0 ? "Repulsive" : "Attractive";
                    setStatus(`Overall interaction: ${kind}`);
                    requestAnimationFrame(frame);
                }
            }["SimulasiPembentukanIkatan.useEffect.frame"];
            frame();
            return ({
                "SimulasiPembentukanIkatan.useEffect": ()=>window.removeEventListener("resize", fit)
            })["SimulasiPembentukanIkatan.useEffect"];
        }
    }["SimulasiPembentukanIkatan.useEffect"], []);
    const handleComplete = async ()=>{
        setIsCompleting(true);
        try {
            const response = await fetch("/api/progress", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    pathwayId: pathway.id,
                    status: "completed"
                })
            });
            const data = await response.json();
            if (data.nextPathwayId) {
                router.push(`/pathway/${data.nextPathwayId}`);
            } else {
                router.push("/dashboard");
            }
        } finally{
            setIsCompleting(false);
        }
    };
    const interactionText = status.replace("Overall interaction:", "").trim();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "relative",
                    height: "70vh",
                    background: "#000",
                    border: "1px solid #333",
                    borderRadius: "0.5rem",
                    overflow: "hidden"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        style: {
                            background: "#061a1a",
                            borderBottom: "2px solid #00e0c6",
                            padding: "0.6rem 1rem",
                            display: "flex",
                            alignItems: "center",
                            gap: "0.75rem"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                style: {
                                    fontSize: "1rem",
                                    margin: 0,
                                    color: "#cfe"
                                },
                                children: "Pembentukkan Ikatan Kimia"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/pathway/simulasi-pembentukan-ikatan.tsx",
                                lineNumber: 261,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    opacity: 0.35
                                },
                                children: "•"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/pathway/simulasi-pembentukan-ikatan.tsx",
                                lineNumber: 264,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>window.location.reload(),
                                style: {
                                    border: "1px solid #1c9",
                                    background: "#072",
                                    color: "#dff",
                                    padding: ".35rem .65rem",
                                    borderRadius: ".6rem",
                                    cursor: "pointer"
                                },
                                children: "Reset"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/pathway/simulasi-pembentukan-ikatan.tsx",
                                lineNumber: 265,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/components/pathway/simulasi-pembentukan-ikatan.tsx",
                        lineNumber: 251,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                        ref: canvasRef,
                        style: {
                            width: "100%",
                            height: "100%"
                        }
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/pathway/simulasi-pembentukan-ikatan.tsx",
                        lineNumber: 280,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            bottom: "60px",
                            left: "50%",
                            transform: "translateX(-50%)",
                            fontWeight: "bold",
                            fontSize: "1.8rem",
                            color: interactionText === "Attractive" ? "lightgreen" : interactionText === "Repulsive" ? "orange" : "gray",
                            textShadow: "0 0 10px rgba(255,255,255,0.3)"
                        },
                        children: [
                            "Overall interaction: ",
                            interactionText
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/components/pathway/simulasi-pembentukan-ikatan.tsx",
                        lineNumber: 282,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/components/pathway/simulasi-pembentukan-ikatan.tsx",
                lineNumber: 241,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "flex gap-4 pt-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/dashboard",
                        className: "flex-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            className: "w-full bg-transparent",
                            children: "Kembali"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/pathway/simulasi-pembentukan-ikatan.tsx",
                            lineNumber: 305,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/pathway/simulasi-pembentukan-ikatan.tsx",
                        lineNumber: 304,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        className: "flex-1 bg-indigo-600 hover:bg-indigo-700",
                        onClick: handleComplete,
                        disabled: isCompleting,
                        children: isCompleting ? "Menyimpan..." : "Selesai"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/pathway/simulasi-pembentukan-ikatan.tsx",
                        lineNumber: 309,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/components/pathway/simulasi-pembentukan-ikatan.tsx",
                lineNumber: 303,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/components/pathway/simulasi-pembentukan-ikatan.tsx",
        lineNumber: 240,
        columnNumber: 5
    }, this);
}
_s(SimulasiPembentukanIkatan, "WFgwbYlNrtJVba4iBeL0Q4d3W0Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = SimulasiPembentukanIkatan;
var _c;
__turbopack_context__.k.register(_c, "SimulasiPembentukanIkatan");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/components/pathway/pathway-content.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PathwayContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_babel-plugin-re_f3aa0ef20050acebca21685a51e97cbb/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_babel-plugin-re_f3aa0ef20050acebca21685a51e97cbb/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/supabase/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$dashboard$2f$user$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/dashboard/user-menu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_babel-plugin-re_f3aa0ef20050acebca21685a51e97cbb/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$pathway$2f$topic$2d$view$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/pathway/topic-view.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$pathway$2f$quiz$2d$view$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/pathway/quiz-view.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$pathway$2f$final$2d$test$2d$view$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/pathway/final-test-view.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$pathway$2f$simulasi$2d$senyawa$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/pathway/simulasi-senyawa.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$pathway$2f$simulasi$2d$pembentukan$2d$ikatan$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/pathway/simulasi-pembentukan-ikatan.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
function PathwayContent({ user, pathway }) {
    _s();
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PathwayContent.useEffect": ()=>{
            const fetchProgress = {
                "PathwayContent.useEffect.fetchProgress": async ()=>{
                    const { data } = await supabase.from("user_pathway_progress").select("*").eq("user_id", user.id).eq("pathway_id", pathway.id).single();
                    if (!data) {
                        await supabase.from("user_pathway_progress").insert({
                            user_id: user.id,
                            pathway_id: pathway.id,
                            status: "in_progress"
                        });
                    }
                    setProgress(data);
                }
            }["PathwayContent.useEffect.fetchProgress"];
            fetchProgress();
        }
    }["PathwayContent.useEffect"], [
        pathway.id,
        user.id,
        supabase
    ]);
    const renderContent = ()=>{
        if (pathway.type === "simulation") {
            if (pathway.title.includes("Simulasi Senyawa")) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$pathway$2f$simulasi$2d$senyawa$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    pathway: pathway,
                    user: user
                }, void 0, false, {
                    fileName: "[project]/apps/web/components/pathway/pathway-content.tsx",
                    lineNumber: 53,
                    columnNumber: 16
                }, this);
            }
            if (pathway.title.includes("Simulasi Pembentukan Ikatan Kimia")) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$pathway$2f$simulasi$2d$pembentukan$2d$ikatan$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    pathway: pathway,
                    user: user
                }, void 0, false, {
                    fileName: "[project]/apps/web/components/pathway/pathway-content.tsx",
                    lineNumber: 56,
                    columnNumber: 16
                }, this);
            }
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-red-600",
                children: [
                    "Simulasi tidak ditemukan: ",
                    pathway.title
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/components/pathway/pathway-content.tsx",
                lineNumber: 58,
                columnNumber: 14
            }, this);
        }
        switch(pathway.type){
            case "topic":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$pathway$2f$topic$2d$view$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    pathway: pathway
                }, void 0, false, {
                    fileName: "[project]/apps/web/components/pathway/pathway-content.tsx",
                    lineNumber: 63,
                    columnNumber: 16
                }, this);
            case "quiz":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$pathway$2f$quiz$2d$view$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    pathway: pathway,
                    user: user
                }, void 0, false, {
                    fileName: "[project]/apps/web/components/pathway/pathway-content.tsx",
                    lineNumber: 65,
                    columnNumber: 16
                }, this);
            case "final_test":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$pathway$2f$final$2d$test$2d$view$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    pathway: pathway,
                    user: user
                }, void 0, false, {
                    fileName: "[project]/apps/web/components/pathway/pathway-content.tsx",
                    lineNumber: 67,
                    columnNumber: 16
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: "Unknown pathway type"
                }, void 0, false, {
                    fileName: "[project]/apps/web/components/pathway/pathway-content.tsx",
                    lineNumber: 69,
                    columnNumber: 16
                }, this);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-gradient-to-br from-slate-50 to-slate-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "bg-white border-b border-slate-200 sticky top-0 z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/dashboard",
                                    className: "text-gray-600 hover:text-gray-900 text-sm mb-2 inline-block",
                                    children: "← Kembali ke Dashboard"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/components/pathway/pathway-content.tsx",
                                    lineNumber: 78,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-2xl font-bold text-gray-900",
                                    children: pathway.title
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/components/pathway/pathway-content.tsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/components/pathway/pathway-content.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$dashboard$2f$user$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserMenu"], {
                            user: user
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/pathway/pathway-content.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/components/pathway/pathway-content.tsx",
                    lineNumber: 76,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/components/pathway/pathway-content.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_babel$2d$plugin$2d$re_f3aa0ef20050acebca21685a51e97cbb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",
                children: renderContent()
            }, void 0, false, {
                fileName: "[project]/apps/web/components/pathway/pathway-content.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/components/pathway/pathway-content.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
_s(PathwayContent, "UR/JOHKu9jArvWBekRn1NNAb0dw=");
_c = PathwayContent;
var _c;
__turbopack_context__.k.register(_c, "PathwayContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=apps_web_af634705._.js.map