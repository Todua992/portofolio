"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(home)/page",{

/***/ "(app-pages-browser)/./src/components/ui/hero-paralax.tsx":
/*!********************************************!*\
  !*** ./src/components/ui/hero-paralax.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Header: function() { return /* binding */ Header; },\n/* harmony export */   HeroParallax: function() { return /* binding */ HeroParallax; },\n/* harmony export */   ProductCard: function() { return /* binding */ ProductCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-scroll.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-spring.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-transform.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ HeroParallax,Header,ProductCard auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst HeroParallax = (param)=>{\n    let { products } = param;\n    _s();\n    const firstRow = products.slice(0, 3);\n    const secondRow = products.slice(3, 6);\n    const thirdRow = products.slice(6, 9);\n    const ref = react__WEBPACK_IMPORTED_MODULE_2___default().useRef(null);\n    const { scrollYProgress } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useScroll)({\n        target: ref,\n        offset: [\n            \"start start\",\n            \"end start\"\n        ]\n    });\n    const springConfig = {\n        stiffness: 300,\n        damping: 30,\n        bounce: 100\n    };\n    const translateX = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useSpring)((0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useTransform)(scrollYProgress, [\n        0,\n        1\n    ], [\n        0,\n        600\n    ]), springConfig);\n    const translateXReverse = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useSpring)((0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useTransform)(scrollYProgress, [\n        0,\n        1\n    ], [\n        0,\n        -600\n    ]), springConfig);\n    const rotateX = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useSpring)((0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useTransform)(scrollYProgress, [\n        0,\n        0.2\n    ], [\n        15,\n        0\n    ]), springConfig);\n    const opacity = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useSpring)((0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useTransform)(scrollYProgress, [\n        0,\n        0.2\n    ], [\n        0.5,\n        1\n    ]), springConfig);\n    const rotateZ = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useSpring)((0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useTransform)(scrollYProgress, [\n        0,\n        0.2\n    ], [\n        20,\n        0\n    ]), springConfig);\n    const translateY = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useSpring)((0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useTransform)(scrollYProgress, [\n        0,\n        0.2\n    ], [\n        -700,\n        500\n    ]), springConfig);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"projects\",\n        ref: ref,\n        className: \"mx-auto px-8 pb-8 relative flex h-[200vh]  flex-col self-auto overflow-hidden pb-10 pt-80 antialiased [perspective:1000px] [transform-style:preserve-3d]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\todua\\\\OneDrive\\\\Documents\\\\GitHub\\\\portofolio\\\\src\\\\components\\\\ui\\\\hero-paralax.tsx\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                style: {\n                    rotateX,\n                    rotateZ,\n                    translateY,\n                    opacity\n                },\n                className: \"\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                        className: \"mb-20 flex flex-row-reverse space-x-20 space-x-reverse\",\n                        children: firstRow.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProductCard, {\n                                product: product,\n                                translate: translateX\n                            }, product.title, false, {\n                                fileName: \"C:\\\\Users\\\\todua\\\\OneDrive\\\\Documents\\\\GitHub\\\\portofolio\\\\src\\\\components\\\\ui\\\\hero-paralax.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 25\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\todua\\\\OneDrive\\\\Documents\\\\GitHub\\\\portofolio\\\\src\\\\components\\\\ui\\\\hero-paralax.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                        className: \"mb-20 flex  flex-row space-x-20 \",\n                        children: secondRow.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProductCard, {\n                                product: product,\n                                translate: translateXReverse\n                            }, product.title, false, {\n                                fileName: \"C:\\\\Users\\\\todua\\\\OneDrive\\\\Documents\\\\GitHub\\\\portofolio\\\\src\\\\components\\\\ui\\\\hero-paralax.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 25\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\todua\\\\OneDrive\\\\Documents\\\\GitHub\\\\portofolio\\\\src\\\\components\\\\ui\\\\hero-paralax.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                        className: \"flex flex-row-reverse space-x-20 space-x-reverse\",\n                        children: thirdRow.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProductCard, {\n                                product: product,\n                                translate: translateX\n                            }, product.title, false, {\n                                fileName: \"C:\\\\Users\\\\todua\\\\OneDrive\\\\Documents\\\\GitHub\\\\portofolio\\\\src\\\\components\\\\ui\\\\hero-paralax.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 25\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\todua\\\\OneDrive\\\\Documents\\\\GitHub\\\\portofolio\\\\src\\\\components\\\\ui\\\\hero-paralax.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\todua\\\\OneDrive\\\\Documents\\\\GitHub\\\\portofolio\\\\src\\\\components\\\\ui\\\\hero-paralax.tsx\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\todua\\\\OneDrive\\\\Documents\\\\GitHub\\\\portofolio\\\\src\\\\components\\\\ui\\\\hero-paralax.tsx\",\n        lineNumber: 35,\n        columnNumber: 9\n    }, undefined);\n};\n_s(HeroParallax, \"R8/dTk9CmVkuZMulzDierWMPHkc=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_3__.useScroll,\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useSpring,\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useSpring,\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useSpring,\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useSpring,\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useSpring,\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useSpring\n    ];\n});\n_c = HeroParallax;\nconst Header = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative left-0 top-0 mx-auto w-full max-w-5xl px-4 py-20 md:py-40\",\n        style: {\n            zIndex: 1\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            className: \"text-2xl font-bold dark:text-white md:text-7xl\",\n            children: \"Projects\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\todua\\\\OneDrive\\\\Documents\\\\GitHub\\\\portofolio\\\\src\\\\components\\\\ui\\\\hero-paralax.tsx\",\n            lineNumber: 73,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\todua\\\\OneDrive\\\\Documents\\\\GitHub\\\\portofolio\\\\src\\\\components\\\\ui\\\\hero-paralax.tsx\",\n        lineNumber: 72,\n        columnNumber: 9\n    }, undefined);\n};\n_c1 = Header;\n/////\nconst ProductCard = (param)=>{\n    let { product, translate } = param;\n    // Helper function to determine if the product is an MP4 file\n    const isMP4 = (thumbnail)=>thumbnail.endsWith(\".mp4\");\n    // Conditional rendering based on the file type\n    if (isMP4(product.thumbnail)) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n            style: {\n                x: translate\n            },\n            whileHover: {\n                y: -20\n            },\n            className: \"group/product relative h-96 w-[40rem] shrink-0\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    href: product.link,\n                    className: \"block group-hover:shadow-2xl\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                        width: \"600\",\n                        height: \"600\",\n                        className: \"absolute inset-0 size-full object-cover object-center\",\n                        autoPlay: true,\n                        loop: true,\n                        muted: true,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                                src: product.thumbnail,\n                                type: \"video/mp4\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\todua\\\\OneDrive\\\\Documents\\\\GitHub\\\\portofolio\\\\src\\\\components\\\\ui\\\\hero-paralax.tsx\",\n                                lineNumber: 118,\n                                columnNumber: 21\n                            }, undefined),\n                            \"Your browser does not support the video tag.\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\todua\\\\OneDrive\\\\Documents\\\\GitHub\\\\portofolio\\\\src\\\\components\\\\ui\\\\hero-paralax.tsx\",\n                        lineNumber: 109,\n                        columnNumber: 17\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\todua\\\\OneDrive\\\\Documents\\\\GitHub\\\\portofolio\\\\src\\\\components\\\\ui\\\\hero-paralax.tsx\",\n                    lineNumber: 108,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"pointer-events-none absolute inset-0 size-full bg-black opacity-0 group-hover/product:opacity-80\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\todua\\\\OneDrive\\\\Documents\\\\GitHub\\\\portofolio\\\\src\\\\components\\\\ui\\\\hero-paralax.tsx\",\n                    lineNumber: 122,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"absolute bottom-4 left-4 text-white opacity-0 group-hover/product:opacity-100\",\n                    children: product.title\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\todua\\\\OneDrive\\\\Documents\\\\GitHub\\\\portofolio\\\\src\\\\components\\\\ui\\\\hero-paralax.tsx\",\n                    lineNumber: 123,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, product.title, true, {\n            fileName: \"C:\\\\Users\\\\todua\\\\OneDrive\\\\Documents\\\\GitHub\\\\portofolio\\\\src\\\\components\\\\ui\\\\hero-paralax.tsx\",\n            lineNumber: 97,\n            columnNumber: 13\n        }, undefined);\n    }\n    // Default rendering for other file types (assuming it's an image)\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n        style: {\n            x: translate\n        },\n        whileHover: {\n            y: -20\n        },\n        className: \"group/product relative h-96 w-[40rem] shrink-0\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                href: product.link,\n                className: \"block group-hover/product:shadow-2xl\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: product.thumbnail,\n                    height: \"600\",\n                    width: \"600\",\n                    className: \"absolute inset-0 size-full object-cover object-center\",\n                    alt: product.title\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\todua\\\\OneDrive\\\\Documents\\\\GitHub\\\\portofolio\\\\src\\\\components\\\\ui\\\\hero-paralax.tsx\",\n                    lineNumber: 141,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\todua\\\\OneDrive\\\\Documents\\\\GitHub\\\\portofolio\\\\src\\\\components\\\\ui\\\\hero-paralax.tsx\",\n                lineNumber: 140,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"pointer-events-none absolute inset-0 size-full bg-black opacity-0 group-hover/product:opacity-80\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\todua\\\\OneDrive\\\\Documents\\\\GitHub\\\\portofolio\\\\src\\\\components\\\\ui\\\\hero-paralax.tsx\",\n                lineNumber: 149,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"absolute bottom-4 left-4 text-white opacity-0 group-hover/product:opacity-100\",\n                children: product.title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\todua\\\\OneDrive\\\\Documents\\\\GitHub\\\\portofolio\\\\src\\\\components\\\\ui\\\\hero-paralax.tsx\",\n                lineNumber: 150,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, product.title, true, {\n        fileName: \"C:\\\\Users\\\\todua\\\\OneDrive\\\\Documents\\\\GitHub\\\\portofolio\\\\src\\\\components\\\\ui\\\\hero-paralax.tsx\",\n        lineNumber: 130,\n        columnNumber: 9\n    }, undefined);\n};\n_c2 = ProductCard;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"HeroParallax\");\n$RefreshReg$(_c1, \"Header\");\n$RefreshReg$(_c2, \"ProductCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3VpL2hlcm8tcGFyYWxheC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUN3RjtBQUUzRDtBQUNIO0FBR25CLE1BQU1NLGVBQWU7UUFBQyxFQUN6QkMsUUFBUSxFQU9YOztJQUNHLE1BQU1DLFdBQVdELFNBQVNFLEtBQUssQ0FBQyxHQUFHO0lBQ25DLE1BQU1DLFlBQVlILFNBQVNFLEtBQUssQ0FBQyxHQUFHO0lBQ3BDLE1BQU1FLFdBQVdKLFNBQVNFLEtBQUssQ0FBQyxHQUFHO0lBQ25DLE1BQU1HLE1BQU1QLG1EQUFZLENBQUM7SUFDekIsTUFBTSxFQUFFUyxlQUFlLEVBQUUsR0FBR2Isd0RBQVNBLENBQUM7UUFDbENjLFFBQVFIO1FBQ1JJLFFBQVE7WUFBQztZQUFlO1NBQVk7SUFDeEM7SUFFQSxNQUFNQyxlQUFlO1FBQUVDLFdBQVc7UUFBS0MsU0FBUztRQUFJQyxRQUFRO0lBQUk7SUFFaEUsTUFBTUMsYUFBYW5CLHdEQUFTQSxDQUFDQywyREFBWUEsQ0FBQ1csaUJBQWlCO1FBQUM7UUFBRztLQUFFLEVBQUU7UUFBQztRQUFHO0tBQUksR0FBR0c7SUFDOUUsTUFBTUssb0JBQW9CcEIsd0RBQVNBLENBQUNDLDJEQUFZQSxDQUFDVyxpQkFBaUI7UUFBQztRQUFHO0tBQUUsRUFBRTtRQUFDO1FBQUcsQ0FBQztLQUFJLEdBQUdHO0lBQ3RGLE1BQU1NLFVBQVVyQix3REFBU0EsQ0FBQ0MsMkRBQVlBLENBQUNXLGlCQUFpQjtRQUFDO1FBQUc7S0FBSSxFQUFFO1FBQUM7UUFBSTtLQUFFLEdBQUdHO0lBQzVFLE1BQU1PLFVBQVV0Qix3REFBU0EsQ0FBQ0MsMkRBQVlBLENBQUNXLGlCQUFpQjtRQUFDO1FBQUc7S0FBSSxFQUFFO1FBQUM7UUFBSztLQUFFLEdBQUdHO0lBQzdFLE1BQU1RLFVBQVV2Qix3REFBU0EsQ0FBQ0MsMkRBQVlBLENBQUNXLGlCQUFpQjtRQUFDO1FBQUc7S0FBSSxF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QjtvQkFDR0gsS0FBS3JCLFFBQVFPLFNBQVM7b0JBQ3RCUyxRQUFPO29CQUNQRCxPQUFNO29CQUNObkIsV0FBVTtvQkFDVjZCLEtBQUt6QixRQUFRRyxLQUFLOzs7Ozs7Ozs7OzswQkFHMUIsOERBQUNUO2dCQUFJRSxXQUFVOzs7Ozs7MEJBQ2YsOERBQUMyQjtnQkFBRzNCLFdBQVU7MEJBQWlGSSxRQUFRRyxLQUFLOzs7Ozs7O09BYnZHSCxRQUFRRyxLQUFLOzs7OztBQWdCOUIsRUFBRTtNQXpFV0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdWkvaGVyby1wYXJhbGF4LnRzeD84ZjM0Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuaW1wb3J0IHsgbW90aW9uLCBNb3Rpb25WYWx1ZSwgdXNlU2Nyb2xsLCB1c2VTcHJpbmcsIHVzZVRyYW5zZm9ybSB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEhlcm9QYXJhbGxheCA9ICh7XHJcbiAgICBwcm9kdWN0c1xyXG59OiB7XHJcbiAgICBwcm9kdWN0czoge1xyXG4gICAgICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICAgICAgbGluazogc3RyaW5nO1xyXG4gICAgICAgIHRodW1ibmFpbDogc3RyaW5nO1xyXG4gICAgfVtdO1xyXG59KSA9PiB7XHJcbiAgICBjb25zdCBmaXJzdFJvdyA9IHByb2R1Y3RzLnNsaWNlKDAsIDMpO1xyXG4gICAgY29uc3Qgc2Vjb25kUm93ID0gcHJvZHVjdHMuc2xpY2UoMywgNik7XHJcbiAgICBjb25zdCB0aGlyZFJvdyA9IHByb2R1Y3RzLnNsaWNlKDYsIDkpO1xyXG4gICAgY29uc3QgcmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xyXG4gICAgY29uc3QgeyBzY3JvbGxZUHJvZ3Jlc3MgfSA9IHVzZVNjcm9sbCh7XHJcbiAgICAgICAgdGFyZ2V0OiByZWYsXHJcbiAgICAgICAgb2Zmc2V0OiBbJ3N0YXJ0IHN0YXJ0JywgJ2VuZCBzdGFydCddXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBzcHJpbmdDb25maWcgPSB7IHN0aWZmbmVzczogMzAwLCBkYW1waW5nOiAzMCwgYm91bmNlOiAxMDAgfTtcclxuXHJcbiAgICBjb25zdCB0cmFuc2xhdGVYID0gdXNlU3ByaW5nKHVzZVRyYW5zZm9ybShzY3JvbGxZUHJvZ3Jlc3MsIFswLCAxXSwgWzAsIDYwMF0pLCBzcHJpbmdDb25maWcpO1xyXG4gICAgY29uc3QgdHJhbnNsYXRlWFJldmVyc2UgPSB1c2VTcHJpbmcodXNlVHJhbnNmb3JtKHNjcm9sbFlQcm9ncmVzcywgWzAsIDFdLCBbMCwgLTYwMF0pLCBzcHJpbmdDb25maWcpO1xyXG4gICAgY29uc3Qgcm90YXRlWCA9IHVzZVNwcmluZyh1c2VUcmFuc2Zvcm0oc2Nyb2xsWVByb2dyZXNzLCBbMCwgMC4yXSwgWzE1LCAwXSksIHNwcmluZ0NvbmZpZyk7XHJcbiAgICBjb25zdCBvcGFjaXR5ID0gdXNlU3ByaW5nKHVzZVRyYW5zZm9ybShzY3JvbGxZUHJvZ3Jlc3MsIFswLCAwLjJdLCBbMC41LCAxXSksIHNwcmluZ0NvbmZpZyk7XHJcbiAgICBjb25zdCByb3RhdGVaID0gdXNlU3ByaW5nKHVzZVRyYW5zZm9ybShzY3JvbGxZUHJvZ3Jlc3MsIFswLCAwLjJdLCBbMjAsIDBdKSwgc3ByaW5nQ29uZmlnKTtcclxuICAgIGNvbnN0IHRyYW5zbGF0ZVkgPSB1c2VTcHJpbmcodXNlVHJhbnNmb3JtKHNjcm9sbFlQcm9ncmVzcywgWzAsIDAuMl0sIFstNzAwLCA1MDBdKSwgc3ByaW5nQ29uZmlnKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgaWQ9XCJwcm9qZWN0c1wiXHJcbiAgICAgICAgICAgIHJlZj17cmVmfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJteC1hdXRvIHB4LTggcGItOCByZWxhdGl2ZSBmbGV4IGgtWzIwMHZoXSAgZmxleC1jb2wgc2VsZi1hdXRvIG92ZXJmbG93LWhpZGRlbiBwYi0xMCBwdC04MCBhbnRpYWxpYXNlZCBbcGVyc3BlY3RpdmU6MTAwMHB4XSBbdHJhbnNmb3JtLXN0eWxlOnByZXNlcnZlLTNkXVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIHJvdGF0ZVgsXHJcbiAgICAgICAgICAgICAgICAgICAgcm90YXRlWixcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGVZLFxyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHlcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8bW90aW9uLmRpdiBjbGFzc05hbWU9XCJtYi0yMCBmbGV4IGZsZXgtcm93LXJldmVyc2Ugc3BhY2UteC0yMCBzcGFjZS14LXJldmVyc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Zmlyc3RSb3cubWFwKChwcm9kdWN0KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0Q2FyZCBwcm9kdWN0PXtwcm9kdWN0fSB0cmFuc2xhdGU9e3RyYW5zbGF0ZVh9IGtleT17cHJvZHVjdC50aXRsZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2IGNsYXNzTmFtZT1cIm1iLTIwIGZsZXggIGZsZXgtcm93IHNwYWNlLXgtMjAgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3NlY29uZFJvdy5tYXAoKHByb2R1Y3QpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RDYXJkIHByb2R1Y3Q9e3Byb2R1Y3R9IHRyYW5zbGF0ZT17dHJhbnNsYXRlWFJldmVyc2V9IGtleT17cHJvZHVjdC50aXRsZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3ctcmV2ZXJzZSBzcGFjZS14LTIwIHNwYWNlLXgtcmV2ZXJzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlyZFJvdy5tYXAoKHByb2R1Y3QpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RDYXJkIHByb2R1Y3Q9e3Byb2R1Y3R9IHRyYW5zbGF0ZT17dHJhbnNsYXRlWH0ga2V5PXtwcm9kdWN0LnRpdGxlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBsZWZ0LTAgdG9wLTAgbXgtYXV0byB3LWZ1bGwgbWF4LXctNXhsIHB4LTQgcHktMjAgbWQ6cHktNDBcIiBzdHlsZT17eyB6SW5kZXg6IDEgfX0+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgZGFyazp0ZXh0LXdoaXRlIG1kOnRleHQtN3hsXCI+UHJvamVjdHM8L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbi8vLy8vXHJcblxyXG5leHBvcnQgY29uc3QgUHJvZHVjdENhcmQgPSAoe1xyXG4gICAgcHJvZHVjdCxcclxuICAgIHRyYW5zbGF0ZVxyXG59OiB7XHJcbiAgICBwcm9kdWN0OiB7XHJcbiAgICAgICAgdGl0bGU6IHN0cmluZztcclxuICAgICAgICBsaW5rOiBzdHJpbmc7XHJcbiAgICAgICAgdGh1bWJuYWlsOiBzdHJpbmc7XHJcbiAgICB9O1xyXG4gICAgdHJhbnNsYXRlOiBNb3Rpb25WYWx1ZTxudW1iZXI+O1xyXG59KSA9PiB7XHJcbiAgICAvLyBIZWxwZXIgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGlmIHRoZSBwcm9kdWN0IGlzIGFuIE1QNCBmaWxlXHJcbiAgICBjb25zdCBpc01QNCA9ICh0aHVtYm5haWw6IHN0cmluZykgPT4gdGh1bWJuYWlsLmVuZHNXaXRoKCcubXA0Jyk7XHJcblxyXG4gICAgLy8gQ29uZGl0aW9uYWwgcmVuZGVyaW5nIGJhc2VkIG9uIHRoZSBmaWxlIHR5cGVcclxuICAgIGlmIChpc01QNChwcm9kdWN0LnRodW1ibmFpbCkpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgeDogdHJhbnNsYXRlXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHdoaWxlSG92ZXI9e3tcclxuICAgICAgICAgICAgICAgIHk6IC0yMFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBrZXk9e3Byb2R1Y3QudGl0bGV9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyb3VwL3Byb2R1Y3QgcmVsYXRpdmUgaC05NiB3LVs0MHJlbV0gc2hyaW5rLTBcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgey8qIFNwZWNpYWwgcmVuZGVyaW5nIGZvciBNUDQgZmlsZXMgKi99XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e3Byb2R1Y3QubGlua30gY2xhc3NOYW1lPVwiYmxvY2sgZ3JvdXAtaG92ZXI6c2hhZG93LTJ4bFwiPlxyXG4gICAgICAgICAgICAgICAgPHZpZGVvXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI2MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjYwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBzaXplLWZ1bGwgb2JqZWN0LWNvdmVyIG9iamVjdC1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9QbGF5XHJcbiAgICAgICAgICAgICAgICAgICAgbG9vcFxyXG4gICAgICAgICAgICAgICAgICAgIG11dGVkXHJcblxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzb3VyY2Ugc3JjPXtwcm9kdWN0LnRodW1ibmFpbH0gdHlwZT1cInZpZGVvL21wNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgWW91ciBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgdGhlIHZpZGVvIHRhZy5cclxuICAgICAgICAgICAgICAgIDwvdmlkZW8+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2ludGVyLWV2ZW50cy1ub25lIGFic29sdXRlIGluc2V0LTAgc2l6ZS1mdWxsIGJnLWJsYWNrIG9wYWNpdHktMCBncm91cC1ob3Zlci9wcm9kdWN0Om9wYWNpdHktODBcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS00IGxlZnQtNCB0ZXh0LXdoaXRlIG9wYWNpdHktMCBncm91cC1ob3Zlci9wcm9kdWN0Om9wYWNpdHktMTAwXCI+e3Byb2R1Y3QudGl0bGV9PC9oMj5cclxuICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIERlZmF1bHQgcmVuZGVyaW5nIGZvciBvdGhlciBmaWxlIHR5cGVzIChhc3N1bWluZyBpdCdzIGFuIGltYWdlKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgeDogdHJhbnNsYXRlXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHdoaWxlSG92ZXI9e3tcclxuICAgICAgICAgICAgICAgIHk6IC0yMFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBrZXk9e3Byb2R1Y3QudGl0bGV9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyb3VwL3Byb2R1Y3QgcmVsYXRpdmUgaC05NiB3LVs0MHJlbV0gc2hyaW5rLTBcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvZHVjdC5saW5rfSBjbGFzc05hbWU9XCJibG9jayBncm91cC1ob3Zlci9wcm9kdWN0OnNoYWRvdy0yeGxcIj5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBzcmM9e3Byb2R1Y3QudGh1bWJuYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjYwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI2MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgc2l6ZS1mdWxsIG9iamVjdC1jb3ZlciBvYmplY3QtY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICBhbHQ9e3Byb2R1Y3QudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9pbnRlci1ldmVudHMtbm9uZSBhYnNvbHV0ZSBpbnNldC0wIHNpemUtZnVsbCBiZy1ibGFjayBvcGFjaXR5LTAgZ3JvdXAtaG92ZXIvcHJvZHVjdDpvcGFjaXR5LTgwXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tNCBsZWZ0LTQgdGV4dC13aGl0ZSBvcGFjaXR5LTAgZ3JvdXAtaG92ZXIvcHJvZHVjdDpvcGFjaXR5LTEwMFwiPntwcm9kdWN0LnRpdGxlfTwvaDI+XHJcbiAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgKTtcclxufTtcclxuIl0sIm5hbWVzIjpbIm1vdGlvbiIsInVzZVNjcm9sbCIsInVzZVNwcmluZyIsInVzZVRyYW5zZm9ybSIsIkxpbmsiLCJSZWFjdCIsIkhlcm9QYXJhbGxheCIsInByb2R1Y3RzIiwiZmlyc3RSb3ciLCJzbGljZSIsInNlY29uZFJvdyIsInRoaXJkUm93IiwicmVmIiwidXNlUmVmIiwic2Nyb2xsWVByb2dyZXNzIiwidGFyZ2V0Iiwib2Zmc2V0Iiwic3ByaW5nQ29uZmlnIiwic3RpZmZuZXNzIiwiZGFtcGluZyIsImJvdW5jZSIsInRyYW5zbGF0ZVgiLCJ0cmFuc2xhdGVYUmV2ZXJzZSIsInJvdGF0ZVgiLCJvcGFjaXR5Iiwicm90YXRlWiIsInRyYW5zbGF0ZVkiLCJkaXYiLCJpZCIsImNsYXNzTmFtZSIsIkhlYWRlciIsInN0eWxlIiwibWFwIiwicHJvZHVjdCIsIlByb2R1Y3RDYXJkIiwidHJhbnNsYXRlIiwidGl0bGUiLCJ6SW5kZXgiLCJoMSIsImlzTVA0IiwidGh1bWJuYWlsIiwiZW5kc1dpdGgiLCJ4Iiwid2hpbGVIb3ZlciIsInkiLCJocmVmIiwibGluayIsInZpZGVvIiwid2lkdGgiLCJoZWlnaHQiLCJhdXRvUGxheSIsImxvb3AiLCJtdXRlZCIsInNvdXJjZSIsInNyYyIsInR5cGUiLCJoMiIsImltZyIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ui/hero-paralax.tsx\n"));

/***/ })

});