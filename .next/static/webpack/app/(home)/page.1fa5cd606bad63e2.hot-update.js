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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Header: function() { return /* binding */ Header; },\n/* harmony export */   HeroParallax: function() { return /* binding */ HeroParallax; },\n/* harmony export */   ProductCard: function() { return /* binding */ ProductCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-scroll.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-spring.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-transform.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ HeroParallax,Header,ProductCard auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst HeroParallax = (param)=>{\n    let { products } = param;\n    _s();\n    const firstRow = products.slice(0, 3);\n    const secondRow = products.slice(3, 6);\n    const thirdRow = products.slice(6, 9);\n    const ref = react__WEBPACK_IMPORTED_MODULE_2___default().useRef(null);\n    const { scrollYProgress } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useScroll)({\n        target: ref,\n        offset: [\n            \"start start\",\n            \"end start\"\n        ]\n    });\n    const springConfig = {\n        stiffness: 300,\n        damping: 30,\n        bounce: 100\n    };\n    const translateX = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useSpring)((0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useTransform)(scrollYProgress, [\n        0,\n        1\n    ], [\n        0,\n        600\n    ]), springConfig);\n    const translateXReverse = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useSpring)((0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useTransform)(scrollYProgress, [\n        0,\n        1\n    ], [\n        0,\n        -600\n    ]), springConfig);\n    const rotateX = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useSpring)((0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useTransform)(scrollYProgress, [\n        0,\n        0.2\n    ], [\n        15,\n        0\n    ]), springConfig);\n    const opacity = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useSpring)((0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useTransform)(scrollYProgress, [\n        0,\n        0.2\n    ], [\n        0.5,\n        1\n    ]), springConfig);\n    const rotateZ = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useSpring)((0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useTransform)(scrollYProgress, [\n        0,\n        0.2\n    ], [\n        20,\n        0\n    ]), springConfig);\n    const translateY = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useSpring)((0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useTransform)(scrollYProgress, [\n        0,\n        0.2\n    ], [\n        -700,\n        500\n    ]), springConfig);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"projects\",\n        ref: ref,\n        className: \"relative flex h-[200vh]  flex-col self-auto overflow-hidden pb-10 pt-80 antialiased [perspective:1000px] [transform-style:preserve-3d]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\todua\\\\OneDrive\\\\Documents\\\\GitHub\\\\portofolio\\\\src\\\\components\\\\ui\\\\hero-paralax.tsx\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                    style: {\n                        rotateX,\n                        rotateZ,\n                        translateY,\n                        opacity\n                    },\n                    className: \"\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                            className: \"mb-50 flex flex-row-reverse space-x-20 space-x-reverse\",\n                            children: firstRow.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProductCard, {\n                                    product: product,\n                                    translate: translateX\n                                }, product.title, false, {\n                                    fileName: \"C:\\\\Users\\\\todua\\\\OneDrive\\\\Documents\\\\GitHub\\\\portofolio\\\\src\\\\components\\\\ui\\\\hero-paralax.tsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 29\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\todua\\\\OneDrive\\\\Documents\\\\GitHub\\\\portofolio\\\\src\\\\components\\\\ui\\\\hero-paralax.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                            className: \"mb-20 flex flex-row space-x-20\",\n                            children: secondRow.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProductCard, {\n                                    product: product,\n                                    translate: translateXReverse\n                                }, product.title, false, {\n                                    fileName: \"C:\\\\Users\\\\todua\\\\OneDrive\\\\Documents\\\\GitHub\\\\portofolio\\\\src\\\\components\\\\ui\\\\hero-paralax.tsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 29\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\todua\\\\OneDrive\\\\Documents\\\\GitHub\\\\portofolio\\\\src\\\\components\\\\ui\\\\hero-paralax.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                            className: \"flex flex-row-reverse space-x-20 space-x-reverse\",\n                            children: thirdRow.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProductCard, {\n                                    product: product,\n                                    translate: translateX\n                                }, product.title, false, {\n                                    fileName: \"C:\\\\Users\\\\todua\\\\OneDrive\\\\Documents\\\\GitHub\\\\portofolio\\\\src\\\\components\\\\ui\\\\hero-paralax.tsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 29\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\todua\\\\OneDrive\\\\Documents\\\\GitHub\\\\portofolio\\\\src\\\\components\\\\ui\\\\hero-paralax.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\todua\\\\OneDrive\\\\Documents\\\\GitHub\\\\portofolio\\\\src\\\\components\\\\ui\\\\hero-paralax.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\todua\\\\OneDrive\\\\Documents\\\\GitHub\\\\portofolio\\\\src\\\\components\\\\ui\\\\hero-paralax.tsx\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\todua\\\\OneDrive\\\\Documents\\\\GitHub\\\\portofolio\\\\src\\\\components\\\\ui\\\\hero-paralax.tsx\",\n        lineNumber: 34,\n        columnNumber: 9\n    }, undefined);\n};\n_s(HeroParallax, \"R8/dTk9CmVkuZMulzDierWMPHkc=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_3__.useScroll,\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useSpring,\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useSpring,\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useSpring,\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useSpring,\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useSpring,\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useSpring\n    ];\n});\n_c = HeroParallax;\nconst Header = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative left-0 top-0 mx-auto w-full max-w-5xl px-4 py-20 md:py-40\",\n        style: {\n            zIndex: 1\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            className: \"text-2xl font-bold dark:text-white md:text-7xl\",\n            children: \"Projects\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\todua\\\\OneDrive\\\\Documents\\\\GitHub\\\\portofolio\\\\src\\\\components\\\\ui\\\\hero-paralax.tsx\",\n            lineNumber: 74,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\todua\\\\OneDrive\\\\Documents\\\\GitHub\\\\portofolio\\\\src\\\\components\\\\ui\\\\hero-paralax.tsx\",\n        lineNumber: 73,\n        columnNumber: 9\n    }, undefined);\n};\n_c1 = Header;\n/////\nconst ProductCard = (param)=>{\n    let { product, translate } = param;\n    // Helper function to determine if the product is an MP4 file\n    const isMP4 = (thumbnail)=>thumbnail.endsWith(\".mp4\");\n    // Conditional rendering based on the file type\n    if (isMP4(product.thumbnail)) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n            style: {\n                x: translate\n            },\n            whileHover: {\n                y: -20\n            },\n            className: \"group/product relative h-96 w-[40rem] shrink-0\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    href: product.link,\n                    className: \"block group-hover:shadow-2xl\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                        width: \"600\",\n                        height: \"600\",\n                        className: \"absolute inset-0 size-full object-cover object-center\",\n                        autoPlay: true,\n                        loop: true,\n                        muted: true,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                                src: product.thumbnail,\n                                type: \"video/mp4\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\todua\\\\OneDrive\\\\Documents\\\\GitHub\\\\portofolio\\\\src\\\\components\\\\ui\\\\hero-paralax.tsx\",\n                                lineNumber: 119,\n                                columnNumber: 21\n                            }, undefined),\n                            \"Your browser does not support the video tag.\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\todua\\\\OneDrive\\\\Documents\\\\GitHub\\\\portofolio\\\\src\\\\components\\\\ui\\\\hero-paralax.tsx\",\n                        lineNumber: 110,\n                        columnNumber: 17\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\todua\\\\OneDrive\\\\Documents\\\\GitHub\\\\portofolio\\\\src\\\\components\\\\ui\\\\hero-paralax.tsx\",\n                    lineNumber: 109,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"pointer-events-none absolute inset-0 size-full bg-black opacity-0 group-hover/product:opacity-80\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\todua\\\\OneDrive\\\\Documents\\\\GitHub\\\\portofolio\\\\src\\\\components\\\\ui\\\\hero-paralax.tsx\",\n                    lineNumber: 123,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"absolute bottom-4 left-4 text-white opacity-0 group-hover/product:opacity-100\",\n                    children: product.title\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\todua\\\\OneDrive\\\\Documents\\\\GitHub\\\\portofolio\\\\src\\\\components\\\\ui\\\\hero-paralax.tsx\",\n                    lineNumber: 124,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, product.title, true, {\n            fileName: \"C:\\\\Users\\\\todua\\\\OneDrive\\\\Documents\\\\GitHub\\\\portofolio\\\\src\\\\components\\\\ui\\\\hero-paralax.tsx\",\n            lineNumber: 98,\n            columnNumber: 13\n        }, undefined);\n    }\n    // Default rendering for other file types (assuming it's an image)\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n        style: {\n            x: translate\n        },\n        whileHover: {\n            y: -20\n        },\n        className: \"group/product relative h-96 w-[40rem] shrink-0\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                href: product.link,\n                className: \"block group-hover/product:shadow-2xl\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: product.thumbnail,\n                    height: \"600\",\n                    width: \"600\",\n                    className: \"absolute inset-0 size-full object-cover object-center\",\n                    alt: product.title\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\todua\\\\OneDrive\\\\Documents\\\\GitHub\\\\portofolio\\\\src\\\\components\\\\ui\\\\hero-paralax.tsx\",\n                    lineNumber: 142,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\todua\\\\OneDrive\\\\Documents\\\\GitHub\\\\portofolio\\\\src\\\\components\\\\ui\\\\hero-paralax.tsx\",\n                lineNumber: 141,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"pointer-events-none absolute inset-0 size-full bg-black opacity-0 group-hover/product:opacity-80\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\todua\\\\OneDrive\\\\Documents\\\\GitHub\\\\portofolio\\\\src\\\\components\\\\ui\\\\hero-paralax.tsx\",\n                lineNumber: 150,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"absolute bottom-4 left-4 text-white opacity-0 group-hover/product:opacity-100\",\n                children: product.title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\todua\\\\OneDrive\\\\Documents\\\\GitHub\\\\portofolio\\\\src\\\\components\\\\ui\\\\hero-paralax.tsx\",\n                lineNumber: 151,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, product.title, true, {\n        fileName: \"C:\\\\Users\\\\todua\\\\OneDrive\\\\Documents\\\\GitHub\\\\portofolio\\\\src\\\\components\\\\ui\\\\hero-paralax.tsx\",\n        lineNumber: 131,\n        columnNumber: 9\n    }, undefined);\n};\n_c2 = ProductCard;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"HeroParallax\");\n$RefreshReg$(_c1, \"Header\");\n$RefreshReg$(_c2, \"ProductCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3VpL2hlcm8tcGFyYWxheC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUN3RjtBQUMzRDtBQUNIO0FBR25CLE1BQU1NLGVBQWU7UUFBQyxFQUN6QkMsUUFBUSxFQU9YOztJQUNHLE1BQU1DLFdBQVdELFNBQVNFLEtBQUssQ0FBQyxHQUFHO0lBQ25DLE1BQU1DLFlBQVlILFNBQVNFLEtBQUssQ0FBQyxHQUFHO0lBQ3BDLE1BQU1FLFdBQVdKLFNBQVNFLEtBQUssQ0FBQyxHQUFHO0lBQ25DLE1BQU1HLE1BQU1QLG1EQUFZLENBQUM7SUFDekIsTUFBTSxFQUFFUyxlQUFlLEVBQUUsR0FBR2Isd0RBQVNBLENBQUM7UUFDbENjLFFBQVFIO1FBQ1JJLFFBQVE7WUFBQztZQUFlO1NBQVk7SUFDeEM7SUFFQSxNQUFNQyxlQUFlO1FBQUVDLFdBQVc7UUFBS0MsU0FBUztRQUFJQyxRQUFRO0lBQUk7SUFFaEUsTUFBTUMsYUFBYW5CLHdEQUFTQSxDQUFDQywyREFBWUEsQ0FBQ1csaUJBQWlCO1FBQUM7UUFBRztLQUFFLEVBQUU7UUFBQztRQUFHO0tBQUksR0FBR0c7SUFDOUUsTUFBTUssb0JBQW9CcEIsd0RBQVNBLENBQUNDLDJEQUFZQSxDQUFDVyxpQkFBaUI7UUFBQztRQUFHO0tBQUUsRUFBRTtRQUFDO1FBQUcsQ0FBQztLQUFJLEdBQUdHO0lBQ3RGLE1BQU1NLFVBQVVyQix3REFBU0EsQ0FBQ0MsMkRBQVlBLENBQUNXLGlCQUFpQjtRQUFDO1FBQUc7S0FBSSxFQUFFO1FBQUM7UUFBSTtLQUFFLEdBQUdHO0lBQzVFLE1BQU1PLFVBQVV0Qix3REFBU0EsQ0FBQ0MsMkRBQVlBLENBQUNXLGlCQUFpQjtRQUFDO1FBQUc7S0FBSSxFQUFFO1FBQUM7UUFBSztLQUFFLEdBQUdHO0lBQzdFLE1BQU1RLFVBQVV2Qix3REFBU0EsQ0FBQ0MsMkRBQVlBLENBQUNXLGlCQUFpQjtRQUFDO1FBQUc7S0FBSSxF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V0FBVTswQkFDaEMsNEVBQUM0QjtvQkFDR0gsS0FBS3JCLFFBQVFPLFNBQVM7b0JBQ3RCUyxRQUFPO29CQUNQRCxPQUFNO29CQUNObkIsV0FBVTtvQkFDVjZCLEtBQUt6QixRQUFRRyxLQUFLOzs7Ozs7Ozs7OzswQkFHMUIsOERBQUNUO2dCQUFJRSxXQUFVOzs7Ozs7MEJBQ2YsOERBQUMyQjtnQkFBRzNCLFdBQVU7MEJBQWlGSSxRQUFRRyxLQUFLOzs7Ozs7O09BYnZHSCxRQUFRRyxLQUFLOzs7OztBQWdCOUIsRUFBRTtNQXpFV0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdWkvaGVyby1wYXJhbGF4LnRzeD84ZjM0Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuaW1wb3J0IHsgbW90aW9uLCBNb3Rpb25WYWx1ZSwgdXNlU2Nyb2xsLCB1c2VTcHJpbmcsIHVzZVRyYW5zZm9ybSB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBIZXJvUGFyYWxsYXggPSAoe1xyXG4gICAgcHJvZHVjdHNcclxufToge1xyXG4gICAgcHJvZHVjdHM6IHtcclxuICAgICAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgICAgIGxpbms6IHN0cmluZztcclxuICAgICAgICB0aHVtYm5haWw6IHN0cmluZztcclxuICAgIH1bXTtcclxufSkgPT4ge1xyXG4gICAgY29uc3QgZmlyc3RSb3cgPSBwcm9kdWN0cy5zbGljZSgwLCAzKTtcclxuICAgIGNvbnN0IHNlY29uZFJvdyA9IHByb2R1Y3RzLnNsaWNlKDMsIDYpO1xyXG4gICAgY29uc3QgdGhpcmRSb3cgPSBwcm9kdWN0cy5zbGljZSg2LCA5KTtcclxuICAgIGNvbnN0IHJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcclxuICAgIGNvbnN0IHsgc2Nyb2xsWVByb2dyZXNzIH0gPSB1c2VTY3JvbGwoe1xyXG4gICAgICAgIHRhcmdldDogcmVmLFxyXG4gICAgICAgIG9mZnNldDogWydzdGFydCBzdGFydCcsICdlbmQgc3RhcnQnXVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgc3ByaW5nQ29uZmlnID0geyBzdGlmZm5lc3M6IDMwMCwgZGFtcGluZzogMzAsIGJvdW5jZTogMTAwIH07XHJcblxyXG4gICAgY29uc3QgdHJhbnNsYXRlWCA9IHVzZVNwcmluZyh1c2VUcmFuc2Zvcm0oc2Nyb2xsWVByb2dyZXNzLCBbMCwgMV0sIFswLCA2MDBdKSwgc3ByaW5nQ29uZmlnKTtcclxuICAgIGNvbnN0IHRyYW5zbGF0ZVhSZXZlcnNlID0gdXNlU3ByaW5nKHVzZVRyYW5zZm9ybShzY3JvbGxZUHJvZ3Jlc3MsIFswLCAxXSwgWzAsIC02MDBdKSwgc3ByaW5nQ29uZmlnKTtcclxuICAgIGNvbnN0IHJvdGF0ZVggPSB1c2VTcHJpbmcodXNlVHJhbnNmb3JtKHNjcm9sbFlQcm9ncmVzcywgWzAsIDAuMl0sIFsxNSwgMF0pLCBzcHJpbmdDb25maWcpO1xyXG4gICAgY29uc3Qgb3BhY2l0eSA9IHVzZVNwcmluZyh1c2VUcmFuc2Zvcm0oc2Nyb2xsWVByb2dyZXNzLCBbMCwgMC4yXSwgWzAuNSwgMV0pLCBzcHJpbmdDb25maWcpO1xyXG4gICAgY29uc3Qgcm90YXRlWiA9IHVzZVNwcmluZyh1c2VUcmFuc2Zvcm0oc2Nyb2xsWVByb2dyZXNzLCBbMCwgMC4yXSwgWzIwLCAwXSksIHNwcmluZ0NvbmZpZyk7XHJcbiAgICBjb25zdCB0cmFuc2xhdGVZID0gdXNlU3ByaW5nKHVzZVRyYW5zZm9ybShzY3JvbGxZUHJvZ3Jlc3MsIFswLCAwLjJdLCBbLTcwMCwgNTAwXSksIHNwcmluZ0NvbmZpZyk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgIGlkPVwicHJvamVjdHNcIlxyXG4gICAgICAgICAgICByZWY9e3JlZn1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBoLVsyMDB2aF0gIGZsZXgtY29sIHNlbGYtYXV0byBvdmVyZmxvdy1oaWRkZW4gcGItMTAgcHQtODAgYW50aWFsaWFzZWQgW3BlcnNwZWN0aXZlOjEwMDBweF0gW3RyYW5zZm9ybS1zdHlsZTpwcmVzZXJ2ZS0zZF1cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3RhdGVYLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3RhdGVaLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGVZLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2IGNsYXNzTmFtZT1cIm1iLTUwIGZsZXggZmxleC1yb3ctcmV2ZXJzZSBzcGFjZS14LTIwIHNwYWNlLXgtcmV2ZXJzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Zmlyc3RSb3cubWFwKChwcm9kdWN0KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdENhcmQgcHJvZHVjdD17cHJvZHVjdH0gdHJhbnNsYXRlPXt0cmFuc2xhdGVYfSBrZXk9e3Byb2R1Y3QudGl0bGV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdiBjbGFzc05hbWU9XCJtYi0yMCBmbGV4IGZsZXgtcm93IHNwYWNlLXgtMjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3NlY29uZFJvdy5tYXAoKHByb2R1Y3QpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0Q2FyZCBwcm9kdWN0PXtwcm9kdWN0fSB0cmFuc2xhdGU9e3RyYW5zbGF0ZVhSZXZlcnNlfSBrZXk9e3Byb2R1Y3QudGl0bGV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93LXJldmVyc2Ugc3BhY2UteC0yMCBzcGFjZS14LXJldmVyc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXJkUm93Lm1hcCgocHJvZHVjdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RDYXJkIHByb2R1Y3Q9e3Byb2R1Y3R9IHRyYW5zbGF0ZT17dHJhbnNsYXRlWH0ga2V5PXtwcm9kdWN0LnRpdGxlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbGVmdC0wIHRvcC0wIG14LWF1dG8gdy1mdWxsIG1heC13LTV4bCBweC00IHB5LTIwIG1kOnB5LTQwXCIgc3R5bGU9e3sgekluZGV4OiAxIH19PlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIGRhcms6dGV4dC13aGl0ZSBtZDp0ZXh0LTd4bFwiPlByb2plY3RzPC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG4vLy8vL1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2R1Y3RDYXJkID0gKHtcclxuICAgIHByb2R1Y3QsXHJcbiAgICB0cmFuc2xhdGVcclxufToge1xyXG4gICAgcHJvZHVjdDoge1xyXG4gICAgICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICAgICAgbGluazogc3RyaW5nO1xyXG4gICAgICAgIHRodW1ibmFpbDogc3RyaW5nO1xyXG4gICAgfTtcclxuICAgIHRyYW5zbGF0ZTogTW90aW9uVmFsdWU8bnVtYmVyPjtcclxufSkgPT4ge1xyXG4gICAgLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGRldGVybWluZSBpZiB0aGUgcHJvZHVjdCBpcyBhbiBNUDQgZmlsZVxyXG4gICAgY29uc3QgaXNNUDQgPSAodGh1bWJuYWlsOiBzdHJpbmcpID0+IHRodW1ibmFpbC5lbmRzV2l0aCgnLm1wNCcpO1xyXG5cclxuICAgIC8vIENvbmRpdGlvbmFsIHJlbmRlcmluZyBiYXNlZCBvbiB0aGUgZmlsZSB0eXBlXHJcbiAgICBpZiAoaXNNUDQocHJvZHVjdC50aHVtYm5haWwpKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIHg6IHRyYW5zbGF0ZVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICB3aGlsZUhvdmVyPXt7XHJcbiAgICAgICAgICAgICAgICB5OiAtMjBcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAga2V5PXtwcm9kdWN0LnRpdGxlfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJncm91cC9wcm9kdWN0IHJlbGF0aXZlIGgtOTYgdy1bNDByZW1dIHNocmluay0wXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHsvKiBTcGVjaWFsIHJlbmRlcmluZyBmb3IgTVA0IGZpbGVzICovfVxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtwcm9kdWN0Lmxpbmt9IGNsYXNzTmFtZT1cImJsb2NrIGdyb3VwLWhvdmVyOnNoYWRvdy0yeGxcIj5cclxuICAgICAgICAgICAgICAgIDx2aWRlb1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNjAwXCJcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI2MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgc2l6ZS1mdWxsIG9iamVjdC1jb3ZlciBvYmplY3QtY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICBhdXRvUGxheVxyXG4gICAgICAgICAgICAgICAgICAgIGxvb3BcclxuICAgICAgICAgICAgICAgICAgICBtdXRlZFxyXG5cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8c291cmNlIHNyYz17cHJvZHVjdC50aHVtYm5haWx9IHR5cGU9XCJ2aWRlby9tcDRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIFlvdXIgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IHRoZSB2aWRlbyB0YWcuXHJcbiAgICAgICAgICAgICAgICA8L3ZpZGVvPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9pbnRlci1ldmVudHMtbm9uZSBhYnNvbHV0ZSBpbnNldC0wIHNpemUtZnVsbCBiZy1ibGFjayBvcGFjaXR5LTAgZ3JvdXAtaG92ZXIvcHJvZHVjdDpvcGFjaXR5LTgwXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tNCBsZWZ0LTQgdGV4dC13aGl0ZSBvcGFjaXR5LTAgZ3JvdXAtaG92ZXIvcHJvZHVjdDpvcGFjaXR5LTEwMFwiPntwcm9kdWN0LnRpdGxlfTwvaDI+XHJcbiAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBEZWZhdWx0IHJlbmRlcmluZyBmb3Igb3RoZXIgZmlsZSB0eXBlcyAoYXNzdW1pbmcgaXQncyBhbiBpbWFnZSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIHg6IHRyYW5zbGF0ZVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICB3aGlsZUhvdmVyPXt7XHJcbiAgICAgICAgICAgICAgICB5OiAtMjBcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAga2V5PXtwcm9kdWN0LnRpdGxlfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJncm91cC9wcm9kdWN0IHJlbGF0aXZlIGgtOTYgdy1bNDByZW1dIHNocmluay0wXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e3Byb2R1Y3QubGlua30gY2xhc3NOYW1lPVwiYmxvY2sgZ3JvdXAtaG92ZXIvcHJvZHVjdDpzaGFkb3ctMnhsXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtwcm9kdWN0LnRodW1ibmFpbH1cclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI2MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNjAwXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIHNpemUtZnVsbCBvYmplY3QtY292ZXIgb2JqZWN0LWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PXtwcm9kdWN0LnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvaW50ZXItZXZlbnRzLW5vbmUgYWJzb2x1dGUgaW5zZXQtMCBzaXplLWZ1bGwgYmctYmxhY2sgb3BhY2l0eS0wIGdyb3VwLWhvdmVyL3Byb2R1Y3Q6b3BhY2l0eS04MFwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTQgbGVmdC00IHRleHQtd2hpdGUgb3BhY2l0eS0wIGdyb3VwLWhvdmVyL3Byb2R1Y3Q6b3BhY2l0eS0xMDBcIj57cHJvZHVjdC50aXRsZX08L2gyPlxyXG4gICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJtb3Rpb24iLCJ1c2VTY3JvbGwiLCJ1c2VTcHJpbmciLCJ1c2VUcmFuc2Zvcm0iLCJMaW5rIiwiUmVhY3QiLCJIZXJvUGFyYWxsYXgiLCJwcm9kdWN0cyIsImZpcnN0Um93Iiwic2xpY2UiLCJzZWNvbmRSb3ciLCJ0aGlyZFJvdyIsInJlZiIsInVzZVJlZiIsInNjcm9sbFlQcm9ncmVzcyIsInRhcmdldCIsIm9mZnNldCIsInNwcmluZ0NvbmZpZyIsInN0aWZmbmVzcyIsImRhbXBpbmciLCJib3VuY2UiLCJ0cmFuc2xhdGVYIiwidHJhbnNsYXRlWFJldmVyc2UiLCJyb3RhdGVYIiwib3BhY2l0eSIsInJvdGF0ZVoiLCJ0cmFuc2xhdGVZIiwiZGl2IiwiaWQiLCJjbGFzc05hbWUiLCJIZWFkZXIiLCJzdHlsZSIsIm1hcCIsInByb2R1Y3QiLCJQcm9kdWN0Q2FyZCIsInRyYW5zbGF0ZSIsInRpdGxlIiwiekluZGV4IiwiaDEiLCJpc01QNCIsInRodW1ibmFpbCIsImVuZHNXaXRoIiwieCIsIndoaWxlSG92ZXIiLCJ5IiwiaHJlZiIsImxpbmsiLCJ2aWRlbyIsIndpZHRoIiwiaGVpZ2h0IiwiYXV0b1BsYXkiLCJsb29wIiwibXV0ZWQiLCJzb3VyY2UiLCJzcmMiLCJ0eXBlIiwiaDIiLCJpbWciLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ui/hero-paralax.tsx\n"));

/***/ })

});